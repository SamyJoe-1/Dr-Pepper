import React from "react";
import { motion } from "motion/react";
import { cn } from "@/src/lib/utils";

interface QuizCardProps {
  option: string;
  isSelected: boolean;
  onClick: () => void;
  key?: React.Key;
}

export function QuizCard({ option, isSelected, onClick }: QuizCardProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={cn(
        "flex aspect-video items-center justify-center rounded-xl border-2 p-6 text-center transition-all duration-300",
        isSelected
          ? "border-white bg-[#6B1A1A] text-white shadow-lg shadow-white/10"
          : "border-white/20 bg-white/5 text-white/70 hover:border-white/50 hover:text-white"
      )}
    >
      <span className="font-anton text-2xl uppercase tracking-wider">{option}</span>
    </motion.button>
  );
}
