import Hero from "./components/Hero";
import Particles from "./components/Particles";
import { CursorGlow } from "./components/ui";
import {
  Nav,
  Marquee,
  About,
  Education,
  Skills,
  Projects,
  Journey,
  Contact,
  Footer,
} from "./components/Sections";

export default function App() {
  return (
    <div className="bg-aurora relative min-h-screen text-ink">
      {/* ambient layers */}
      <div className="bg-grid pointer-events-none fixed inset-0 z-0" />
      <Particles />
      <CursorGlow />

      {/* content */}
      <div className="relative z-10">
        <Nav />
        <Hero />
        <Marquee />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Journey />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
