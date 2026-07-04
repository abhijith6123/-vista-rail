import { ModeProvider } from "@/components/ModeProvider";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Prelude from "@/components/Prelude";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <ModeProvider>
      <Navbar />
      <main>
        <Hero />
        <Prelude />
      </main>
      <Footer />
    </ModeProvider>
  );
}
