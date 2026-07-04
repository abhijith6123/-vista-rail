"use client";

import { motion } from "framer-motion";
import { easePremium } from "@/lib/motion";

/**
 * A single restrained editorial beat beneath the hero. Reveals on
 * scroll to give the smooth-scroll experience a quiet payoff and a
 * cinematic transition from the bright video into the deep brand space.
 * (Intentionally minimal — not Phase 2 content.)
 */
const reveal = {
  hidden: { opacity: 0, y: 26, filter: "blur(8px)" },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 1, delay: i * 0.12, ease: easePremium },
  }),
};

export default function Prelude() {
  return (
    <section className="relative overflow-hidden bg-[#06080c] px-6 py-32 sm:py-44">
      {/* Blend down from the hero above */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/60 to-transparent"
      />

      <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
        <motion.span
          custom={0}
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.6 }}
          className="text-[0.72rem] font-medium uppercase tracking-[0.28em] text-accent/90"
        >
          Crafted Journeys
        </motion.span>

        <motion.h2
          custom={1}
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.6 }}
          className="mt-6 text-balance text-[clamp(2rem,4.5vw,3.4rem)] font-semibold leading-[1.08] tracking-[-0.03em] text-white"
        >
          The window is the destination.
        </motion.h2>

        <motion.p
          custom={2}
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.6 }}
          className="mt-7 max-w-xl text-[clamp(1rem,1.4vw,1.15rem)] font-light leading-relaxed text-white/65"
        >
          From alpine passes to coastal dawns, every VistaRail route is composed
          around the view — unhurried, panoramic, and quietly extraordinary.
        </motion.p>
      </div>
    </section>
  );
}
