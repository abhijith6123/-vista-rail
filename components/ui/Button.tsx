"use client";

import { forwardRef } from "react";
import { motion, type HTMLMotionProps } from "framer-motion";
import { softSpring } from "@/lib/motion";

type Variant = "primary" | "glass" | "ghost";

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: Variant;
}

const base =
  "group relative inline-flex cursor-pointer select-none items-center justify-center gap-2 rounded-full font-medium tracking-[-0.01em] transition-colors duration-300 disabled:cursor-default";

const styles: Record<Variant, string> = {
  // Bright frosted-crystal surface — the single primary action.
  primary: "glass-bright text-[#0b1017] hover:brightness-[1.03]",
  // Liquid glass — used for the nav's day/night toggle. Feedback comes from
  // the lift + text brighten (background/border are reserved for theme changes).
  glass: "glass text-white/90 hover:text-white",
  ghost: "text-white/80 hover:text-white",
};

/**
 * Reusable animated button. Handles only tactile hover/tap feel;
 * entrance animations are applied by a parent motion wrapper so
 * transforms never collide.
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", className = "", children, ...props }, ref) => {
    return (
      <motion.button
        ref={ref}
        type="button"
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.97 }}
        transition={softSpring}
        className={`${base} ${styles[variant]} ${className}`}
        {...props}
      >
        {children}
      </motion.button>
    );
  }
);

Button.displayName = "Button";
