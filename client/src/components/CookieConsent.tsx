import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div 
      className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-lg p-4 md:p-6"
      data-testid="cookie-consent-banner"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex-1 pr-4">
            <h3 className="text-lg font-bold text-gray-900 mb-1">We Value Your Privacy</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. 
              By clicking "Accept All", you consent to our use of cookies. 
              Read our{" "}
              <a href="/privacy" className="text-[#33cccc] hover:underline">Privacy Policy</a>
              {" "}for more information.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <Button
              variant="outline"
              onClick={handleDecline}
              className="border-gray-300 text-gray-700 hover:bg-gray-50"
              data-testid="button-decline-cookies"
            >
              Decline
            </Button>
            <Button
              onClick={handleAccept}
              className="bg-[#33cccc] hover:bg-[#29a3a3] text-white"
              data-testid="button-accept-cookies"
            >
              Accept All
            </Button>
          </div>
          <button
            onClick={handleDecline}
            className="absolute top-3 right-3 md:hidden text-gray-400 hover:text-gray-600"
            aria-label="Close"
            data-testid="button-close-consent"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
