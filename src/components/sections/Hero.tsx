import { motion, useScroll, useTransform } from "motion/react";
import { ChevronDown } from "lucide-react";
import { Button } from "../ui/Button";

export function Hero() {
  const { scrollY } = useScroll();
  
  // Can transformations
  const canScale = useTransform(scrollY, [0, 500], [1, 0.4]);
  const canY = useTransform(scrollY, [0, 500], [0, -300]);
  const canX = useTransform(scrollY, [0, 500], [0, 400]);
  const canRotate = useTransform(scrollY, [0, 500], [0, 45]);

  return (
    <section className="relative h-[100svh] w-full overflow-hidden bg-[#6B1A1A]">
      {/* Background Video/Gradient */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-[#6B1A1A]/70 z-10" />
        <div className="h-full w-full bg-[linear-gradient(135deg,#6B1A1A,#000)]" />
        {/* In a real app, we'd use a <video> tag here */}
      </div>

      <div className="relative z-20 flex h-full flex-col items-center justify-center px-6 text-center">
        {/* 3D Can Placeholder */}
        <motion.div
          style={{
            scale: canScale,
            y: canY,
            x: canX,
            rotateZ: canRotate,
          }}
          className="pointer-events-none mb-12"
        >
          <div className="relative h-80 w-40 sm:h-96 sm:w-48">
            {/* CSS Can Shape */}
            <motion.div
              animate={{ rotateY: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="h-full w-full rounded-[2rem] bg-gradient-to-r from-[#6B1A1A] via-[#C0392B] to-[#6B1A1A] shadow-[20px_0_50px_rgba(0,0,0,0.5)]"
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="flex h-full items-center justify-center">
                <span className="font-anton text-4xl text-white/20 uppercase -rotate-90">
                  DR PEPPER
                </span>
              </div>
              {/* Can Top */}
              <div className="absolute -top-2 left-1/2 h-4 w-[90%] -translate-x-1/2 rounded-full bg-gray-400" />
            </motion.div>
          </div>
        </motion.div>

        {/* Text Content */}
        <motion.h1
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="font-anton text-5xl uppercase tracking-tighter text-white sm:text-7xl lg:text-9xl"
        >
          ORIGINAL. BOLD.<br />UNMISTAKABLE.
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-6 max-w-xl text-lg text-white/80 sm:text-xl"
        >
          23 flavors. Zero explanations needed.
        </motion.p>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-10 flex flex-col gap-4 sm:flex-row"
        >
          <Button size="lg">Shop Now</Button>
          <Button variant="outline" size="lg" onClick={() => document.getElementById('quiz')?.scrollIntoView({ behavior: 'smooth' })}>
            Find Your Flavor
          </Button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
}
