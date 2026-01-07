import { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";

declare global {
  interface Window {
    xProductBrowser: (...args: string[]) => void;
    Ecwid: any;
    ecwid_script_defer: boolean;
    ecwid_dynamic_widgets: boolean;
    _xnext_initialization_scripts: any[];
    ec: any;
  }
}

const STORE_ID = "128774264";

export const ECWID_CATEGORIES = [
  { name: "Home Printers", slug: "Home-Printers", id: "193853315" },
  { name: "Office Printers", slug: "Office-Printers", id: "193853316" },
  { name: "Inkjet Printers", slug: "Inkjet-Printers", id: "193853317" },
  { name: "Laser Printers", slug: "Laser-Printers", id: "193853318" },
  { name: "Document Scanners", slug: "Document-Scanners", id: "193853319" },
];

export default function Shop() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    window.ecwid_script_defer = true;
    window.ecwid_dynamic_widgets = true;

    const initEcwid = () => {
      if (typeof window.Ecwid !== "undefined") {
        window.Ecwid.init();
        window.Ecwid.OnAPILoaded.add(() => {
          setIsLoading(false);
        });
        window.Ecwid.OnPageLoaded.add(() => {
          setIsLoading(false);
        });
      }
    };

    const existingScript = document.getElementById("ecwid-script");
    if (existingScript) {
      initEcwid();
      if (typeof window.xProductBrowser === "function") {
        window.xProductBrowser(
          "categoriesPerRow=3",
          "views=grid(20,3) list(60) table(60)",
          "categoryView=grid",
          "searchView=list",
          `id=my-store-${STORE_ID}`
        );
        setIsLoading(false);
      }
    } else {
      const script = document.createElement("script");
      script.id = "ecwid-script";
      script.type = "text/javascript";
      script.src = `https://app.ecwid.com/script.js?${STORE_ID}&data_platform=code`;
      script.async = true;
      script.onload = () => {
        initEcwid();
        if (typeof window.xProductBrowser === "function") {
          window.xProductBrowser(
            "categoriesPerRow=3",
            "views=grid(20,3) list(60) table(60)",
            "categoryView=grid",
            "searchView=list",
            `id=my-store-${STORE_ID}`
          );
        }
      };
      document.body.appendChild(script);
    }

    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight mb-4">Our Catalog</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Browse our wide selection of printers, scanners, and accessories.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border p-4 sm:p-8 min-h-[600px]">
          {isLoading && (
            <div className="flex flex-col items-center justify-center h-96 text-muted-foreground">
              <Loader2 className="w-10 h-10 animate-spin mb-4 text-primary" />
              <p>Loading catalog...</p>
            </div>
          )}
          <div id={`my-store-${STORE_ID}`}></div>
        </div>
      </div>
    </div>
  );
}
