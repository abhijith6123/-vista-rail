"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

type Mode = "day" | "night";

type ModeContextValue = {
  mode: Mode;
  toggle: () => void;
  /** True while a cinematic day↔night transition is in flight. */
  busy: boolean;
};

const ModeContext = createContext<ModeContextValue | null>(null);

// Must outlast the longest sub-transition (video crossfade ≈ 1.7s).
const TRANSITION_MS = 1750;

export function ModeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = useState<Mode>("day");
  const [busy, setBusy] = useState(false);
  const busyRef = useRef(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Re-theme every glass surface at once by flagging the root element.
  useEffect(() => {
    document.documentElement.dataset.mode = mode;
  }, [mode]);

  useEffect(
    () => () => {
      if (timer.current) clearTimeout(timer.current);
    },
    []
  );

  const toggle = useCallback(() => {
    if (busyRef.current) return; // let the current transition finish cleanly
    busyRef.current = true;
    setBusy(true);
    setMode((m) => (m === "day" ? "night" : "day"));
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      busyRef.current = false;
      setBusy(false);
    }, TRANSITION_MS);
  }, []);

  return (
    <ModeContext.Provider value={{ mode, toggle, busy }}>
      {children}
    </ModeContext.Provider>
  );
}

export function useMode() {
  const ctx = useContext(ModeContext);
  if (!ctx) throw new Error("useMode must be used within a ModeProvider");
  return ctx;
}
