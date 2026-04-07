import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "../ui/Button";

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "true");
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-0 left-0 z-[100] w-full bg-[#1a0505]/95 p-6 backdrop-blur-xl border-t border-white/10"
        >
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 lg:flex-row">
            <p className="text-center text-sm text-[#F5F0E8]/80 lg:text-left">
              We use cookies to improve your experience and serve you more relevant Dr Pepper content. By continuing to browse, you agree to our use of cookies.
            </p>
            <div className="flex gap-4">
              <Button variant="ghost" size="sm" onClick={handleAccept}>
                Manage Preferences
              </Button>
              <Button variant="secondary" size="sm" onClick={handleAccept}>
                Accept All
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
