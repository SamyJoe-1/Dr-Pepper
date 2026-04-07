import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";

export function PromoBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const messages = [
    "🔥 NEW: Dr Pepper Creamy Coconut — Limited Drop",
    "🎯 Pepper Perks Members Get 15% Off Everything",
    "🚀 Free Shipping on Orders Over $35",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const dismissed = sessionStorage.getItem("promo-dismissed");
    if (!dismissed) {
      setIsVisible(true);
    }

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % messages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    sessionStorage.setItem("promo-dismissed", "true");
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 40, opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="relative z-[60] flex w-full items-center justify-center bg-[#6B1A1A] px-4 text-[#F5F0E8]"
        >
          <div className="overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.p
                key={currentIndex}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                className="text-center text-xs font-bold uppercase tracking-widest sm:text-sm"
              >
                {messages[currentIndex]}
              </motion.p>
            </AnimatePresence>
          </div>
          <button
            onClick={handleDismiss}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-[#F5F0E8]/70 hover:text-white"
          >
            <X size={16} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
