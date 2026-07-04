"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";

/**
 * Quiet scroll invitation at the base of the hero.
 * Fades in last in the entrance sequence, then fades away as the
 * user begins to scroll.
 */
export default function ScrollCue() {
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 160], [1, 0]);

  return (
    <motion.div
      aria-hidden
      style={{ opacity }}
      className="pointer-events-none absolute bottom-7 left-1/2 z-10 -translate-x-1/2"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.15, duration: 1 }}
        className="flex flex-col items-center gap-2.5"
      >
        <span className="text-[0.66rem] font-medium uppercase tracking-[0.28em] text-white/55">
          Scroll
        </span>
        <span className="relative flex h-9 w-[22px] justify-center rounded-full border border-white/30">
          <motion.span
            className="mt-1.5 h-1.5 w-1.5 rounded-full bg-white"
            animate={reduce ? undefined : { y: [0, 9, 0], opacity: [1, 0.25, 1] }}
            transition={{ duration: 1.9, repeat: Infinity, ease: "easeInOut" }}
          />
        </span>
      </motion.div>
    </motion.div>
  );
}
