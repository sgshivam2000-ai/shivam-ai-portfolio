import { motion } from "framer-motion";
import Ribbon from "./Ribbon";
import Hud from "./Hud";
import { Magnetic } from "./ui";

const FIRST_NAME = "SHIVAM";
const LAST_NAME = "GUPTA";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden py-24"
    >
      <Hud />
      <div className="scanline" />

      {/* ribbon canvases: back = z1, title = z2, front = z3 */}
      <Ribbon />

      <div className="relative mx-auto flex w-full max-w-6xl flex-col items-center px-6 text-center">
        {/* eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.19, 1, 0.22, 1] }}
          style={{ zIndex: 4, position: "relative" }}
          className="mb-6 flex flex-wrap items-center justify-center gap-3 rounded-full px-6 py-2.5 glass shadow-[0_8px_30px_-12px_rgba(0,207,255,0.25)]"
        >
          <span className="dot-pulse h-2 w-2 rounded-full bg-neon" />
          <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-ink/75 sm:text-xs font-medium">
            B.Tech CSE (AI &amp; ML) Student | 3D Artist | Creative Developer
          </span>
          <span className="hidden sm:inline text-ink/20">|</span>
          <span className="font-mono text-[11px] text-neon font-medium">📍 Punjab, India</span>
        </motion.div>

        {/* name — the ribbon weaves through this */}
        <div
          className="hero-title relative select-none flex flex-col items-center leading-[0.88] tracking-tight my-2"
          style={{ zIndex: 2 }}
          aria-label={`${FIRST_NAME} ${LAST_NAME}`}
        >
          {/* First Name — the highlighted signature name */}
          <div className="relative flex justify-center text-[clamp(4.6rem,16vw,13.5rem)]">
            {/* soft glowing halo sitting behind the name */}
            <motion.div
              aria-hidden="true"
              className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[70%] w-[115%] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
              style={{
                background:
                  "radial-gradient(closest-side, rgba(0,207,255,0.28), transparent 72%)",
              }}
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: [0.5, 0.85, 0.5], scale: 1 }}
              transition={{
                opacity: { duration: 3.2, repeat: Infinity, ease: "easeInOut", delay: 1.6 },
                scale: { duration: 1.2, delay: 0.5, ease: [0.19, 1, 0.22, 1] },
              }}
            />
            {FIRST_NAME.split("").map((ch, i) => (
              <motion.span
                key={`f-${i}`}
                className="relative inline-block text-transparent bg-clip-text bg-gradient-to-b from-ink via-neon/90 to-[#0091b8] drop-shadow-[0_0_36px_rgba(0,207,255,0.55)]"
                style={{ WebkitTextStroke: "0.5px rgba(0,207,255,0.25)" }}
                initial={{ opacity: 0, y: 80, rotateX: 45, filter: "blur(12px)" }}
                animate={{ opacity: 1, y: 0, rotateX: 0, filter: "blur(0px)" }}
                transition={{
                  duration: 1.1,
                  delay: 0.5 + i * 0.07,
                  ease: [0.19, 1, 0.22, 1],
                }}
              >
                {ch}
              </motion.span>
            ))}
          </div>
          {/* Last Name — secondary, understated */}
          <div className="flex justify-center text-[clamp(2.6rem,7.5vw,5.2rem)] font-medium tracking-[0.25em] text-ink/55 mt-1 sm:mt-2">
            {LAST_NAME.split("").map((ch, i) => (
              <motion.span
                key={`l-${i}`}
                className="inline-block"
                initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{
                  duration: 1,
                  delay: 1.15 + i * 0.05,
                  ease: [0.19, 1, 0.22, 1],
                }}
              >
                {ch}
              </motion.span>
            ))}
          </div>
        </div>

        {/* subline */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.3, ease: [0.19, 1, 0.22, 1] }}
          style={{ zIndex: 4, position: "relative" }}
          className="mt-8 max-w-2xl text-balance text-base font-light leading-relaxed text-mist sm:text-xl sm:leading-relaxed"
        >
          Designing immersive digital experiences through creativity, 3D art,
          and modern web technologies.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.5, ease: [0.19, 1, 0.22, 1] }}
          style={{ zIndex: 4, position: "relative" }}
          className="mt-10 flex flex-wrap items-center justify-center gap-5"
        >
          <Magnetic>
            <a
              href="#projects"
              className="btn-primary inline-flex items-center gap-3 rounded-full px-8 py-4.5 text-sm font-medium tracking-wide shadow-[0_10px_30px_-10px_rgba(0,207,255,0.4)]"
            >
              Explore Featured Projects
              <span className="text-neon">↘</span>
            </a>
          </Magnetic>
          <Magnetic>
            <a
              href="#contact"
              className="btn-ghost inline-flex items-center gap-3 rounded-full px-8 py-4.5 text-sm font-medium tracking-wide text-ink"
            >
              Get in Touch
              <span className="h-1.5 w-1.5 rounded-full bg-neon shadow-[0_0_8px_#00cfff]" />
            </a>
          </Magnetic>
        </motion.div>

        {/* Quote banner */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.8 }}
          style={{ zIndex: 4, position: "relative" }}
          className="mt-12 font-mono text-xs tracking-[0.25em] text-ink/40 uppercase"
        >
          &ldquo;Turning ideas into immersive digital experiences.&rdquo;
        </motion.div>
      </div>

      {/* scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 1 }}
        className="absolute bottom-6 left-1/2 z-[4] -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="font-mono text-[9px] tracking-[0.4em] text-ink/35">
            SCROLL
          </span>
          <div className="relative h-10 w-px overflow-hidden bg-ink/10">
            <motion.span
              className="absolute left-0 top-0 h-4 w-px bg-neon shadow-[0_0_8px_rgba(0,207,255,0.9)]"
              animate={{ y: [-16, 40] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </div>
      </motion.div>

      {/* vertical side labels */}
      <div className="pointer-events-none absolute left-6 top-1/2 z-[4] hidden -translate-y-1/2 -rotate-90 lg:block">
        <span className="font-mono text-[10px] tracking-[0.4em] text-ink/30">
          SHIVAM GUPTA © 2026
        </span>
      </div>
      <div className="pointer-events-none absolute right-6 top-1/2 z-[4] hidden -translate-y-1/2 rotate-90 lg:block">
        <span className="font-mono text-[10px] tracking-[0.4em] text-ink/30">
          AI &amp; ML • 3D ART • WEB DEV
        </span>
      </div>
    </section>
  );
}
