import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Lock } from "lucide-react";
import { Button } from "../ui/Button";
import { cn } from "@/src/lib/utils";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Products", disabled: true },
    { name: "Flavors", disabled: false, href: "#quiz" },
    { name: "Culture", disabled: true },
    { name: "Store", disabled: true },
    { name: "Pepper Perks", disabled: true },
  ];

  return (
    <nav
      className={cn(
        "fixed left-0 top-0 z-50 w-full transition-all duration-500",
        isScrolled
          ? "bg-[#6B1A1A]/90 py-4 backdrop-blur-xl"
          : "bg-transparent py-6"
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <a href="/" className="font-anton text-3xl text-[#F5F0E8] sm:text-4xl">
          DR PEPPER
        </a>

        {/* Desktop Links */}
        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <div key={link.name} className="group relative">
              {link.disabled ? (
                <div className="flex cursor-not-allowed items-center gap-1 text-sm font-bold uppercase tracking-widest text-[#F5F0E8]/50">
                  {link.name}
                  <Lock size={12} />
                  <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 scale-0 rounded bg-black px-2 py-1 text-[10px] text-white transition-transform group-hover:scale-100">
                    Coming Soon
                  </div>
                </div>
              ) : (
                <a
                  href={link.href}
                  className="text-sm font-bold uppercase tracking-widest text-[#F5F0E8] transition-colors hover:text-[#C0392B]"
                >
                  {link.name}
                </a>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden lg:block">
          <Button variant="secondary" size="sm">
            Shop Now
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(true)}
          className="text-[#F5F0E8] lg:hidden"
        >
          <Menu size={32} />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[100] flex flex-col bg-[#6B1A1A] p-8"
          >
            <div className="mb-12 flex items-center justify-between">
              <span className="font-anton text-3xl text-[#F5F0E8]">DR PEPPER</span>
              <button onClick={() => setIsMobileMenuOpen(false)} className="text-[#F5F0E8]">
                <X size={32} />
              </button>
            </div>

            <div className="flex flex-col gap-8">
              {navLinks.map((link) => (
                <div key={link.name}>
                  {link.disabled ? (
                    <div className="flex items-center gap-2 text-3xl font-bold uppercase text-[#F5F0E8]/30">
                      {link.name}
                      <Lock size={20} />
                    </div>
                  ) : (
                    <a
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="font-anton text-5xl text-[#F5F0E8] hover:text-[#C0392B]"
                    >
                      {link.name}
                    </a>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-auto">
              <Button variant="secondary" className="w-full" size="lg">
                Shop Now
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
