/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from "react";
import { PromoBanner } from "./components/layout/PromoBanner";
import { Navbar } from "./components/layout/Navbar";
import { Hero } from "./components/sections/Hero";
import { FeaturedProducts } from "./components/sections/FeaturedProducts";
import { FlavorQuiz } from "./components/sections/FlavorQuiz";
import { CultureTeaser } from "./components/sections/CultureTeaser";
import { PepperPerksTeaser } from "./components/sections/PepperPerksTeaser";
import { MerchDrop } from "./components/sections/MerchDrop";
import { Footer } from "./components/layout/Footer";
import { CookieBanner } from "./components/layout/CookieBanner";

export default function App() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <div className="min-h-screen bg-[#F5F0E8] font-sans selection:bg-[#6B1A1A] selection:text-white">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-white focus:p-4 focus:text-[#6B1A1A] focus:font-bold">
        Skip to content
      </a>
      
      <PromoBanner />
      <Navbar />
      
      <main id="main-content">
        <Hero />
        <FeaturedProducts />
        <FlavorQuiz />
        <CultureTeaser />
        <PepperPerksTeaser />
        <MerchDrop />
      </main>

      <Footer />
      <CookieBanner />
    </div>
  );
}

