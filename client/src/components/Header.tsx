import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ShoppingCart, Phone } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { STORE_CATEGORIES, getCategoryUrl } from "@/lib/ecwid";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHome = location === "/";

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-white/95 backdrop-blur-xl shadow-lg border-b border-gray-100"
          : isHome
            ? "bg-transparent"
            : "bg-white border-b border-gray-100"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-3 shrink-0 group">
            <div className={cn(
              "w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 shadow-lg",
              scrolled || !isHome ? "bg-primary" : "bg-white/20 backdrop-blur-sm border border-white/30"
            )}>
              <span className={cn(
                "font-bold text-xl",
                scrolled || !isHome ? "text-white" : "text-white"
              )}>P</span>
            </div>
            <span className={cn(
              "text-xl font-bold tracking-tight font-display transition-colors duration-300",
              scrolled || !isHome ? "text-foreground" : "text-white"
            )}>
              Print<span className="text-primary">Mega</span>Store
            </span>
          </Link>

          <nav className="hidden xl:flex items-center gap-1">
            <Link
              href="/"
              className={cn(
                "px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg",
                location === "/" 
                  ? "text-primary" 
                  : scrolled || !isHome
                    ? "text-muted-foreground hover:text-foreground hover:bg-gray-100"
                    : "text-white/80 hover:text-white hover:bg-white/10"
              )}
              data-testid="link-home"
            >
              Home
            </Link>

            {STORE_CATEGORIES.map((category) => (
              <a
                key={category.id}
                href={getCategoryUrl(category)}
                className={cn(
                  "px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg",
                  scrolled || !isHome
                    ? "text-muted-foreground hover:text-foreground hover:bg-gray-100"
                    : "text-white/80 hover:text-white hover:bg-white/10"
                )}
                data-testid={`link-nav-${category.slug}`}
              >
                {category.name}
              </a>
            ))}

            <Link
              href="/contact"
              className={cn(
                "px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg",
                location === "/contact" 
                  ? "text-primary" 
                  : scrolled || !isHome
                    ? "text-muted-foreground hover:text-foreground hover:bg-gray-100"
                    : "text-white/80 hover:text-white hover:bg-white/10"
              )}
              data-testid="link-contact"
            >
              Contact
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            <Button 
              variant={scrolled || !isHome ? "ghost" : "ghost"} 
              size="icon" 
              className={cn(
                "hidden sm:flex transition-colors",
                !scrolled && isHome && "text-white hover:bg-white/10"
              )}
              asChild
            >
              <Link href="/contact" data-testid="button-phone">
                <Phone className="w-5 h-5" />
              </Link>
            </Button>
            
            <Button 
              variant={scrolled || !isHome ? "default" : "secondary"}
              size="sm"
              className="hidden sm:flex gap-2 font-medium"
              asChild
            >
              <a href="/shop" data-testid="button-cart">
                <ShoppingCart className="w-4 h-4" />
                Shop Now
              </a>
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className={cn(
                "xl:hidden transition-colors",
                !scrolled && isHome && "text-white hover:bg-white/10"
              )}
              onClick={() => setIsOpen(!isOpen)}
              data-testid="button-mobile-menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>
      </div>

      <div className={cn(
        "xl:hidden overflow-hidden transition-all duration-300",
        isOpen ? "max-h-[500px] border-t bg-white" : "max-h-0"
      )}>
        <div className="space-y-1 px-4 py-4">
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className={cn(
              "block px-4 py-3 text-base font-medium rounded-xl transition-colors",
              location === "/" ? "bg-primary/10 text-primary" : "text-foreground hover:bg-gray-100"
            )}
            data-testid="link-mobile-home"
          >
            Home
          </Link>

          {STORE_CATEGORIES.map((category) => (
            <a
              key={category.id}
              href={getCategoryUrl(category)}
              onClick={() => setIsOpen(false)}
              className="block px-4 py-3 text-base font-medium rounded-xl transition-colors text-foreground hover:bg-gray-100"
              data-testid={`link-mobile-${category.slug}`}
            >
              {category.name}
            </a>
          ))}

          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className={cn(
              "block px-4 py-3 text-base font-medium rounded-xl transition-colors",
              location === "/contact" ? "bg-primary/10 text-primary" : "text-foreground hover:bg-gray-100"
            )}
            data-testid="link-mobile-contact"
          >
            Contact
          </Link>

          <div className="pt-4">
            <Button className="w-full" asChild>
              <a href="/shop">
                <ShoppingCart className="w-4 h-4 mr-2" />
                Shop Now
              </a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
