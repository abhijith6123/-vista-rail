import { LogoMark } from "./icons";

const LINKS = ["Destinations", "Experiences", "Journeys", "Stories"];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#06080c] px-6 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">
        <div className="flex items-center gap-2.5 text-white">
          <LogoMark className="h-6 w-6" />
          <span className="text-[0.98rem] font-semibold tracking-[-0.02em]">
            VistaRail
          </span>
        </div>

        <nav className="flex flex-wrap items-center justify-center gap-x-7 gap-y-2">
          {LINKS.map((l) => (
            <a
              key={l}
              href="#"
              className="text-[0.86rem] text-white/55 transition-colors duration-300 hover:text-white/85"
            >
              {l}
            </a>
          ))}
        </nav>

        <p className="text-[0.8rem] text-white/40">© 2026 VistaRail</p>
      </div>
    </footer>
  );
}
