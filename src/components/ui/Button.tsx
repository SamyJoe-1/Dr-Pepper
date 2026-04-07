import { motion, HTMLMotionProps } from "motion/react";
import { cn } from "@/src/lib/utils";
import React from "react";

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  showLock?: boolean;
}

export function Button({
  variant = "primary",
  size = "md",
  className,
  disabled,
  showLock,
  children,
  ...props
}: ButtonProps) {
  const variants = {
    primary: "bg-[#6B1A1A] text-[#F5F0E8] hover:shadow-lg hover:shadow-[#6B1A1A]/20",
    secondary: "bg-[#F5F0E8] text-[#6B1A1A] hover:shadow-lg",
    outline: "border-2 border-white text-white hover:bg-[#6B1A1A] hover:border-[#6B1A1A]",
    ghost: "bg-transparent text-white/70 hover:text-white",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <motion.button
      whileHover={!disabled ? { scale: 1.04, y: -2 } : {}}
      whileTap={!disabled ? { scale: 0.98 } : {}}
      className={cn(
        "relative inline-flex items-center justify-center rounded-full font-bold uppercase tracking-wider transition-colors duration-300",
        variants[variant],
        sizes[size],
        disabled && "opacity-50 cursor-not-allowed",
        className
      )}
      disabled={disabled}
      {...props}
    >
      {showLock && (
        <svg
          className="mr-2 h-4 w-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
          />
        </svg>
      )}
      {children}
      {disabled && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/10 rounded-full opacity-0 hover:opacity-100 transition-opacity">
          <span className="text-[10px] font-bold uppercase">Coming Soon</span>
        </div>
      )}
    </motion.button>
  );
}
