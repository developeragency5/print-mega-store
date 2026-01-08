import { forwardRef } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertContactMessageSchema, type InsertContactMessage } from "@shared/schema";
import { useCreateContactMessage } from "@/hooks/use-contact";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const SimpleTextarea = forwardRef<HTMLTextAreaElement, React.TextareaHTMLAttributes<HTMLTextAreaElement>>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        className={`flex min-h-[140px] w-full rounded-xl border border-input bg-background px-4 py-3 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-none ${className}`}
        {...props}
      />
    );
  }
);
SimpleTextarea.displayName = "SimpleTextarea";

export default function Contact() {
  const createMessage = useCreateContactMessage();
  const form = useForm<InsertContactMessage>({
    resolver: zodResolver(insertContactMessageSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(data: InsertContactMessage) {
    createMessage.mutate(data, {
      onSuccess: () => form.reset(),
    });
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-28 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">Contact Us</span>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Get in Touch</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have questions about a product or need a custom quote for your business? 
            Our team is ready to assist you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 max-w-6xl mx-auto">
          <div className="space-y-8">
            {[
              {
                icon: <Phone className="w-6 h-6" />,
                title: "Phone",
                subtitle: "Mon-Fri from 8am to 5pm",
                content: "+1 (555) 123-4567",
                href: "tel:+15551234567"
              },
              {
                icon: <Mail className="w-6 h-6" />,
                title: "Email",
                subtitle: "Our friendly team is here to help.",
                content: "support@printmegastore.com",
                href: "mailto:support@printmegastore.com"
              },
              {
                icon: <MapPin className="w-6 h-6" />,
                title: "Office",
                subtitle: "Come say hello at our headquarters.",
                content: "123 Printer Avenue, Tech District, NY 10001",
                href: "#"
              }
            ].map((item, i) => (
              <Card key={i} className="card-elevated overflow-hidden">
                <CardContent className="p-6 flex items-start gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center shrink-0 text-primary">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground mb-2">{item.subtitle}</p>
                    <a 
                      href={item.href} 
                      className="text-primary hover:underline font-medium"
                      data-testid={`link-contact-${item.title.toLowerCase()}`}
                    >
                      {item.content}
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="shadow-xl border-0 rounded-3xl overflow-hidden">
            <CardHeader className="p-8 pb-4 bg-gradient-to-br from-primary to-primary/80">
              <CardTitle className="text-2xl text-white flex items-center gap-3">
                <Send className="w-6 h-6" />
                Send us a message
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium">Full Name</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="John Doe" 
                            className="h-12 rounded-xl" 
                            data-testid="input-name"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium">Email Address</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="john@example.com" 
                            type="email" 
                            className="h-12 rounded-xl"
                            data-testid="input-email"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium">Your Message</FormLabel>
                        <FormControl>
                          <SimpleTextarea 
                            placeholder="How can we help you?" 
                            data-testid="input-message"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button 
                    type="submit" 
                    className="w-full h-14 text-base font-semibold rounded-xl btn-glow"
                    disabled={createMessage.isPending}
                    data-testid="button-submit-contact"
                  >
                    {createMessage.isPending ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
