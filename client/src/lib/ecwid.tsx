import { createContext, useContext, useEffect, useState, useCallback, ReactNode } from "react";

export const STORE_ID = "128774264";

export interface EcwidCategory {
  id: number;
  name: string;
  url: string;
  parentId?: number;
  productCount?: number;
  enabled?: boolean;
}

export interface EcwidProduct {
  id: number;
  name: string;
  price: number;
  imageUrl?: string;
  url: string;
  sku?: string;
  categoryIds?: number[];
}

interface EcwidContextType {
  isReady: boolean;
  categories: EcwidCategory[];
  isLoading: boolean;
  openCategory: (categoryId: number) => void;
  openProduct: (productId: number) => void;
}

const EcwidContext = createContext<EcwidContextType>({
  isReady: false,
  categories: [],
  isLoading: true,
  openCategory: () => {},
  openProduct: () => {},
});

export function useEcwid() {
  return useContext(EcwidContext);
}

declare global {
  interface Window {
    Ecwid: any;
    xProductBrowser: (...args: string[]) => void;
    ecwid_script_defer: boolean;
    ecwid_dynamic_widgets: boolean;
    _xnext_initialization_scripts: any[];
    ec: any;
  }
}

interface EcwidProviderProps {
  children: ReactNode;
}

export function EcwidProvider({ children }: EcwidProviderProps) {
  const [isReady, setIsReady] = useState(false);
  const [categories, setCategories] = useState<EcwidCategory[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchCategories = useCallback(() => {
    if (typeof window.Ecwid !== "undefined" && window.Ecwid.getCategories) {
      window.Ecwid.getCategories(function(result: { items: EcwidCategory[] }) {
        if (result && result.items) {
          const enabledCategories = result.items.filter(cat => cat.enabled !== false);
          setCategories(enabledCategories);
        }
        setIsLoading(false);
      });
    } else {
      setIsLoading(false);
    }
  }, []);

  const openCategory = useCallback((categoryId: number) => {
    if (typeof window.Ecwid !== "undefined") {
      window.Ecwid.openPage("category", { id: categoryId });
    }
  }, []);

  const openProduct = useCallback((productId: number) => {
    if (typeof window.Ecwid !== "undefined") {
      window.Ecwid.openPage("product", { id: productId });
    }
  }, []);

  useEffect(() => {
    window.ecwid_script_defer = true;
    window.ecwid_dynamic_widgets = true;

    const initEcwid = () => {
      if (typeof window.Ecwid !== "undefined") {
        window.Ecwid.OnAPILoaded.add(() => {
          setIsReady(true);
          fetchCategories();
        });
        
        if (window.Ecwid.OnPageLoaded) {
          window.Ecwid.OnPageLoaded.add(() => {
            if (!isReady) {
              setIsReady(true);
              fetchCategories();
            }
          });
        }
      }
    };

    const existingScript = document.getElementById("ecwid-script");
    if (existingScript) {
      initEcwid();
    } else {
      const script = document.createElement("script");
      script.id = "ecwid-script";
      script.type = "text/javascript";
      script.src = `https://app.ecwid.com/script.js?${STORE_ID}&data_platform=code`;
      script.async = true;
      script.onload = initEcwid;
      document.body.appendChild(script);
    }

    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 10000);

    return () => clearTimeout(timeout);
  }, [fetchCategories, isReady]);

  return (
    <EcwidContext.Provider value={{ isReady, categories, isLoading, openCategory, openProduct }}>
      {children}
    </EcwidContext.Provider>
  );
}

export function getCategoryUrl(category: EcwidCategory): string {
  const slug = category.name.replace(/\s+/g, "-");
  return `/shop#!/${slug}/c/${category.id}`;
}
