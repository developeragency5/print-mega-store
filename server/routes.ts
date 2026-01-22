import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";

// IndexNow configuration
const INDEXNOW_KEY = "711ab69c72c947cc84a7798019cc66f6";
const SITE_HOST = "www.printmegastore.net";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  
  // Subscribers
  app.post(api.subscribers.create.path, async (req, res) => {
    try {
      const input = api.subscribers.create.input.parse(req.body);
      const subscriber = await storage.createSubscriber(input);
      res.status(201).json(subscriber);
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join('.'),
        });
      }
      // Handle unique constraint violation for email
      if (err instanceof Error && err.message.includes('unique')) {
         return res.status(409).json({ message: 'Email already subscribed' });
      }
      throw err;
    }
  });

  // Contact Messages
  app.post(api.contact.create.path, async (req, res) => {
    try {
      const input = api.contact.create.input.parse(req.body);
      const message = await storage.createContactMessage(input);
      res.status(201).json(message);
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join('.'),
        });
      }
      throw err;
    }
  });

  // IndexNow - Ping search engines about URL changes
  app.post("/api/indexnow", async (req, res) => {
    try {
      const schema = z.object({
        urls: z.array(z.string().url()).min(1).max(10000),
      });
      const { urls } = schema.parse(req.body);

      // Validate all URLs belong to our domain
      const invalidUrls = urls.filter(url => {
        try {
          const parsed = new URL(url);
          return parsed.hostname !== SITE_HOST && parsed.hostname !== SITE_HOST.replace('www.', '');
        } catch {
          return true;
        }
      });

      if (invalidUrls.length > 0) {
        return res.status(400).json({
          success: false,
          message: `URLs must belong to ${SITE_HOST}`,
          invalidUrls: invalidUrls.slice(0, 5),
        });
      }

      // Build IndexNow request payload
      const payload = {
        host: SITE_HOST,
        key: INDEXNOW_KEY,
        keyLocation: `https://${SITE_HOST}/${INDEXNOW_KEY}.txt`,
        urlList: urls,
      };

      // Submit to IndexNow API (Bing endpoint - shares with other search engines)
      const response = await fetch("https://api.indexnow.org/indexnow", {
        method: "POST",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok || response.status === 202) {
        res.json({ 
          success: true, 
          message: `Successfully submitted ${urls.length} URL(s) to IndexNow`,
          status: response.status 
        });
      } else {
        const errorText = await response.text();
        res.status(response.status).json({ 
          success: false, 
          message: `IndexNow returned status ${response.status}`,
          error: errorText 
        });
      }
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          success: false,
          message: err.errors[0].message,
          field: err.errors[0].path.join('.'),
        });
      }
      if (err instanceof Error) {
        return res.status(500).json({ 
          success: false, 
          message: err.message 
        });
      }
      throw err;
    }
  });

  // Get IndexNow key info (for verification)
  app.get("/api/indexnow/info", (req, res) => {
    res.json({
      key: INDEXNOW_KEY,
      keyLocation: `https://${SITE_HOST}/${INDEXNOW_KEY}.txt`,
      host: SITE_HOST,
    });
  });

  return httpServer;
}
