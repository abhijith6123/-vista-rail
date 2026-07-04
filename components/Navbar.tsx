"use client";

import { motion, useReducedMotion } from "framer-motion";
import { LogoMark, MoonIcon, SunIcon } from "./icons";
import { Button } from "./ui/Button";
import { SEQUENCE, easePremium } from "@/lib/motion";
import { useMode } from "./ModeProvider";

const LINKS = ["Destinations", "Experiences", "Journeys", "Stories"] as const;

export default function Navbar() {
  const reduce = useReducedMotion();
  const { mode, toggle } = useMode();
  const isNight = mode === "night";

  return (
    <motion.header
      initial={reduce ? { opacity: 0 } : { opacity: 0, y: -14, filter: "blur(8px)" }}
      animate={reduce ? { opacity: 1 } : { opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.9, delay: SEQUENCE.nav, ease: easePremium }}
      className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4 sm:px-6 sm:pt-6"
    >
      <nav className="glass relative flex w-full max-w-6xl items-center justify-between gap-4 rounded-full py-2.5 pl-4 pr-2.5 sm:pl-6 sm:pr-3">
        {/* Left — brand */}
        <a
          href="#"
          onClick={(e) => e.preventDefault()}
          aria-label="VistaRail — home"
          className="flex items-center gap-2.5 text-white"
        >
          <LogoMark className="h-[26px] w-[26px]" />
          <span className="text-[1.02rem] font-semibold tracking-[-0.02em]">
            VistaRail
          </span>
        </a>

        {/* Center — primary links (absolutely centered, desktop only) */}
        <ul className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 md:flex">
          {LINKS.map((label) => (
            <li key={label}>
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="relative rounded-full px-3.5 py-2 text-[0.9rem] font-medium text-white/70 transition-colors duration-300 hover:bg-white/10 hover:text-white"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right — day/night toggle. Icon + label crossfade in place with no
            layout shift; the ModeProvider ignores clicks mid-transition. */}
        <Button
          variant="glass"
          onClick={toggle}
          aria-label={isNight ? "Switch to day" : "Switch to night"}
          className="px-3.5 py-2 text-[0.85rem] sm:px-4 sm:py-2.5"
        >
          <span className="relative flex h-[17px] w-[17px] items-center justify-center">
            <motion.span
              className="absolute inset-0 flex items-center justify-center"
              animate={
                reduce
                  ? { opacity: isNight ? 0 : 1 }
                  : {
                      opacity: isNight ? 0 : 1,
                      rotate: isNight ? -50 : 0,
                      scale: isNight ? 0.5 : 1,
                    }
              }
              transition={{ duration: 0.5, ease: easePremium }}
            >
              <MoonIcon className="h-[17px] w-[17px]" />
            </motion.span>
            <motion.span
              className="absolute inset-0 flex items-center justify-center"
              animate={
                reduce
                  ? { opacity: isNight ? 1 : 0 }
                  : {
                      opacity: isNight ? 1 : 0,
                      rotate: isNight ? 0 : 50,
                      scale: isNight ? 1 : 0.5,
                    }
              }
              transition={{ duration: 0.5, ease: easePremium }}
            >
              <SunIcon className="h-[17px] w-[17px]" />
            </motion.span>
          </span>

          {/* Both labels stacked so the button width tracks the wider one */}
          <span className="relative hidden sm:grid">
            <motion.span
              className="col-start-1 row-start-1 whitespace-nowrap"
              animate={reduce ? { opacity: isNight ? 0 : 1 } : { opacity: isNight ? 0 : 1, y: isNight ? -6 : 0 }}
              transition={{ duration: 0.45, ease: easePremium }}
              aria-hidden={isNight}
            >
              Switch to Night
            </motion.span>
            <motion.span
              className="col-start-1 row-start-1 whitespace-nowrap"
              animate={reduce ? { opacity: isNight ? 1 : 0 } : { opacity: isNight ? 1 : 0, y: isNight ? 0 : 6 }}
              transition={{ duration: 0.45, ease: easePremium }}
              aria-hidden={!isNight}
            >
              Switch to Day
            </motion.span>
          </span>
        </Button>
      </nav>
    </motion.header>
  );
}
