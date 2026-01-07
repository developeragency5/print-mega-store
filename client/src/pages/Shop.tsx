import { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";
import { useEcwid, STORE_ID } from "@/lib/ecwid";

declare global {
  interface Window {
    xProductBrowser: (...args: string[]) => void;
  }
}

export default function Shop() {
  const { isReady } = useEcwid();
  const [isLoading, setIsLoading] = useState(true);
  const [widgetInitialized, setWidgetInitialized] = useState(false);

  useEffect(() => {
    if (isReady && !widgetInitialized) {
      const initWidget = () => {
        if (typeof window.xProductBrowser === "function") {
          window.xProductBrowser(
            "categoriesPerRow=3",
            "views=grid(20,3) list(60) table(60)",
            "categoryView=grid",
            "searchView=list",
            `id=my-store-${STORE_ID}`
          );
          setWidgetInitialized(true);
          setIsLoading(false);
        }
      };

      initWidget();
      
      const checkInterval = setInterval(() => {
        if (typeof window.xProductBrowser === "function") {
          initWidget();
          clearInterval(checkInterval);
        }
      }, 100);

      const timeout = setTimeout(() => {
        clearInterval(checkInterval);
        setIsLoading(false);
      }, 5000);

      return () => {
        clearInterval(checkInterval);
        clearTimeout(timeout);
      };
    }
  }, [isReady, widgetInitialized]);

  useEffect(() => {
    if (!isReady) {
      const timeout = setTimeout(() => {
        setIsLoading(false);
      }, 8000);
      return () => clearTimeout(timeout);
    }
  }, [isReady]);

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border p-4 sm:p-6 min-h-[600px]">
          {isLoading && (
            <div className="flex flex-col items-center justify-center h-96 text-muted-foreground">
              <Loader2 className="w-10 h-10 animate-spin mb-4 text-primary" data-testid="loading-spinner" />
              <p>Loading store...</p>
            </div>
          )}
          <div id={`my-store-${STORE_ID}`} data-testid="ecwid-store-container"></div>
        </div>
      </div>
    </div>
  );
}
