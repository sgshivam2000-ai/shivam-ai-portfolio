import { motion } from "framer-motion";
import { Magnetic, Reveal, SectionTag } from "./ui";

/* ================= NAV ================= */
export function Nav() {
  const links = [
    { label: "About", href: "#about" },
    { label: "Education", href: "#education" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Journey", href: "#journey" },
    { label: "Contact", href: "#contact" },
  ];
  return (
    <motion.header
      initial={{ opacity: 0, y: -24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.2, ease: [0.19, 1, 0.22, 1] }}
      className="fixed inset-x-0 top-5 z-50 flex justify-center px-4"
    >
      <nav className="glass flex w-full max-w-4xl items-center justify-between rounded-full py-2.5 pl-6 pr-2.5 shadow-[0_8px_40px_-16px_rgba(11,18,32,0.15)] backdrop-blur-xl">
        <a
          href="#top"
          className="font-display text-base font-bold tracking-widest text-ink flex items-center gap-1.5"
        >
          <span>SHIVAM</span>
          <span className="text-neon drop-shadow-[0_0_8px_rgba(0,207,255,0.8)]">●</span>
        </a>
        <div className="hidden items-center gap-6 md:flex">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="link-underline text-[13px] font-medium tracking-wide text-ink/65 transition-colors hover:text-ink"
            >
              {l.label}
            </a>
          ))}
        </div>
        <Magnetic strength={0.25}>
          <a
            href="#contact"
            className="btn-primary inline-flex items-center gap-2 rounded-full px-5 py-2 text-[13px] font-medium tracking-wide shadow-[0_0_20px_-5px_rgba(0,207,255,0.4)]"
          >
            Connect
            <span className="h-1.5 w-1.5 rounded-full bg-neon shadow-[0_0_6px_#00cfff]" />
          </a>
        </Magnetic>
      </nav>
    </motion.header>
  );
}

/* ================= MARQUEE ================= */
export function Marquee() {
  const words = [
    "3D ENVIRONMENT DESIGN",
    "BLENDER & SUBSTANCE PAINTER",
    "MODERN WEB DEVELOPMENT",
    "AI & MACHINE LEARNING",
    "PYTHON & ALGORITHMS",
    "UNITY GAME DEV",
    "UI/UX EXPERIENCE DESIGN",
    "AUTODESK MAYA",
    "CREATIVE CODING",
  ];
  const row = [...words, ...words];
  return (
    <div className="relative overflow-hidden border-y border-ink/[0.06] bg-white/60 py-5 backdrop-blur-md">
      <div className="marquee-track">
        {row.map((w, i) => (
          <span
            key={i}
            className="mx-8 flex items-center gap-8 whitespace-nowrap font-mono text-[11px] font-medium tracking-[0.35em] text-ink/50"
          >
            {w}
            <span className="text-neon drop-shadow-[0_0_6px_rgba(0,207,255,0.8)]">
              ✦
            </span>
          </span>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent" />
    </div>
  );
}

/* ================= ABOUT ================= */
export function About() {
  const focusAreas = [
    {
      title: "3D Environment Design",
      desc: "Creating realistic, game-ready worlds with detailed PBR textures, lighting, and environmental storytelling.",
      icon: "🌐",
    },
    {
      title: "Modern Web Development",
      desc: "Building high-performance, visually stunning interactive web apps using cutting-edge frameworks and smooth animations.",
      icon: "⚡",
    },
    {
      title: "Artificial Intelligence",
      desc: "Exploring AI fundamentals, machine learning algorithms, and intelligent software integration in Python.",
      icon: "🤖",
    },
    {
      title: "UI/UX Design",
      desc: "Crafting intuitive, luxurious, and human-centered interfaces that leave a memorable digital impression.",
      icon: "✨",
    },
    {
      title: "Creative Coding",
      desc: "Bridging the gap between art and code through procedural systems, interactive shaders, and dynamic visual logic.",
      icon: "🎨",
    },
  ];

  return (
    <section id="about" className="relative mx-auto max-w-6xl px-6 py-32 sm:py-40">
      <SectionTag index="01" label="About Me" />
      <div className="mt-14 grid gap-14 lg:grid-cols-[1.2fr_1fr]">
        <Reveal delay={0.1}>
          <h2 className="font-display text-3xl font-semibold leading-snug tracking-tight text-ink sm:text-5xl">
            I believe great design is more than appearance—it&apos;s about creating experiences people{" "}
            <span className="relative whitespace-nowrap text-neon drop-shadow-[0_0_18px_rgba(0,207,255,0.35)]">
              remember
            </span>
            .
          </h2>
          <div className="mt-8 space-y-6 text-base font-light leading-relaxed text-mist sm:text-lg">
            <p>
              I&apos;m <strong className="font-medium text-ink">Shivam Gupta</strong>, a B.Tech Computer Science (AI &amp; ML) student passionate about building visually stunning digital experiences. I enjoy creating realistic 3D environments, experimenting with UI/UX, and exploring modern web technologies.
            </p>
            <p>
              My journey started with curiosity and has grown into a passion for 3D art, game development, and creative web design. I enjoy learning new technologies, challenging myself with creative projects, and continuously improving my skills.
            </p>
            <div className="pt-2">
              <span className="inline-block rounded-full bg-neon/10 border border-neon/30 px-5 py-2 font-mono text-xs text-ink/80 shadow-[0_0_15px_-3px_rgba(0,207,255,0.3)]">
                🎯 Goal: Combine creativity with technology to build interactive experiences that leave a lasting impression.
              </span>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.25}>
          <div className="flex flex-col gap-4">
            <div className="mb-2 flex items-center gap-2">
              <span className="dot-pulse h-2 w-2 rounded-full bg-neon" />
              <span className="font-mono text-xs font-semibold uppercase tracking-[0.25em] text-ink/70">
                Current Focus Areas
              </span>
            </div>
            {focusAreas.map((f) => (
              <div
                key={f.title}
                className="glass-card group flex items-start gap-4 !rounded-2xl p-5 transition-all duration-300 hover:border-neon/40 hover:bg-neon/[0.04]"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-ink/[0.04] text-xl transition-transform duration-300 group-hover:scale-110 group-hover:bg-neon/15">
                  {f.icon}
                </span>
                <div>
                  <h3 className="font-display text-base font-semibold text-ink transition-colors group-hover:text-neon">
                    {f.title}
                  </h3>
                  <p className="mt-1 text-xs font-light leading-relaxed text-mist">
                    {f.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ================= EDUCATION ================= */
export function Education() {
  return (
    <section id="education" className="relative mx-auto max-w-6xl px-6 py-28">
      <SectionTag index="02" label="Education" />
      <Reveal delay={0.1}>
        <h2 className="mt-14 font-display text-3xl font-semibold tracking-tight text-ink sm:text-5xl">
          Academic Foundation<span className="text-neon">.</span>
        </h2>
      </Reveal>

      <Reveal delay={0.2}>
        <div className="mt-12 glass-card !rounded-3xl p-8 sm:p-12 relative overflow-hidden group">
          {/* subtle background glow */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-neon/10 blur-3xl transition-opacity duration-500 group-hover:bg-neon/20" />
          
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 rounded-full bg-ink/5 px-3.5 py-1 font-mono text-[10px] uppercase tracking-[0.25em] text-ink/70">
                <span className="h-1.5 w-1.5 rounded-full bg-neon dot-pulse" />
                Degree Program
              </div>
              <h3 className="font-display text-2xl font-bold text-ink sm:text-4xl">
                B.Tech in Computer Science Engineering
              </h3>
              <p className="font-display text-lg font-medium text-neon">
                Specialization in Artificial Intelligence &amp; Machine Learning (AI &amp; ML)
              </p>
              <p className="text-base font-normal text-ink/70 flex items-center gap-2 pt-1">
                <span className="text-lg">🏛️</span>
                Baba Farid College of Engineering &amp; Technology
              </p>
            </div>
            
            <div className="flex flex-col items-start md:items-end gap-3 border-t border-ink/10 pt-6 md:border-t-0 md:pt-0">
              <span className="rounded-2xl bg-ink text-white px-5 py-2.5 font-mono text-xs tracking-wider shadow-lg">
                STUDENT &amp; RESEARCHER
              </span>
              <span className="font-mono text-xs text-mist">
                Location: Punjab, India
              </span>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-4 border-t border-ink/[0.08] pt-8 sm:grid-cols-3">
            <div className="flex flex-col gap-1">
              <span className="font-mono text-[11px] uppercase tracking-wider text-ink/40">Core Study</span>
              <span className="text-sm font-medium text-ink">AI Algorithms &amp; Neural Networks</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-mono text-[11px] uppercase tracking-wider text-ink/40">Engineering Focus</span>
              <span className="text-sm font-medium text-ink">Software Architecture &amp; Python</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-mono text-[11px] uppercase tracking-wider text-ink/40">Creative Integration</span>
              <span className="text-sm font-medium text-ink">3D Graphics &amp; Interactive Systems</span>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

/* ================= SKILLS ================= */
export function Skills() {
  const skillCategories = [
    {
      category: "3D Art & Game Development",
      desc: "Creating realistic assets, textures, and interactive virtual worlds.",
      skills: [
        { name: "Blender", tag: "3D Modeling / Environments" },
        { name: "Substance Painter", tag: "PBR Texturing / Materials" },
        { name: "Autodesk Maya", tag: "3D Animation / Assets" },
        { name: "Unity", tag: "Game Engine / Real-time 3D" },
      ],
    },
    {
      category: "Web & Programming",
      desc: "Building responsive websites and intelligent software logic.",
      skills: [
        { name: "HTML5 & CSS3", tag: "Modern Layouts / Styling" },
        { name: "JavaScript", tag: "Dynamic Web Interaction" },
        { name: "Python", tag: "AI / ML / Automation" },
      ],
    },
    {
      category: "Design & Workflow Tools",
      desc: "Prototyping interfaces and managing collaborative codebases.",
      skills: [
        { name: "Figma", tag: "UI/UX Design / Wireframing" },
        { name: "Git & GitHub", tag: "Version Control / Open Source" },
        { name: "VS Code", tag: "Development Environment" },
      ],
    },
  ];

  return (
    <section id="skills" className="relative mx-auto max-w-6xl px-6 py-28">
      <SectionTag index="03" label="Skills & Tools" />
      <Reveal delay={0.1}>
        <h2 className="mt-14 font-display text-3xl font-semibold tracking-tight text-ink sm:text-5xl">
          Technical Arsenal<span className="text-neon">.</span>
        </h2>
        <p className="mt-3 text-base text-mist max-w-xl">
          A multidisciplinary toolset bridging 3D environmental modeling, artificial intelligence, and modern frontend design.
        </p>
      </Reveal>

      <div className="mt-16 grid gap-10 lg:grid-cols-3">
        {skillCategories.map((cat, idx) => (
          <Reveal key={cat.category} delay={0.1 * idx}>
            <div className="glass-card flex h-full flex-col justify-between !rounded-3xl p-7">
              <div>
                <div className="flex items-center gap-2 pb-2">
                  <span className="h-2 w-2 rounded-full bg-neon dot-pulse" />
                  <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-neon">
                    Category 0{idx + 1}
                  </span>
                </div>
                <h3 className="font-display text-xl font-bold text-ink">
                  {cat.category}
                </h3>
                <p className="mt-1.5 text-xs text-mist pb-6 border-b border-ink/[0.08]">
                  {cat.desc}
                </p>

                <div className="mt-6 space-y-4">
                  {cat.skills.map((s) => (
                    <div
                      key={s.name}
                      className="group/item flex items-center justify-between rounded-xl bg-white/60 p-3.5 border border-ink/[0.05] transition-all duration-300 hover:border-neon/40 hover:bg-white hover:shadow-[0_4px_20px_-8px_rgba(0,207,255,0.25)]"
                    >
                      <span className="font-display text-sm font-semibold text-ink group-hover/item:text-neon transition-colors">
                        {s.name}
                      </span>
                      <span className="font-mono text-[10px] text-ink/50 bg-ink/[0.04] px-2.5 py-1 rounded-full group-hover/item:bg-neon/10 group-hover/item:text-ink/80 transition-colors">
                        {s.tag}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-ink/[0.05] flex items-center justify-between font-mono text-[10px] text-ink/40">
                <span>STATUS: PROFICIENT</span>
                <span className="text-neon">✦ ACTIVE</span>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ================= PROJECTS ================= */
export function Projects() {
  const projects = [
    {
      id: "★",
      title: "3-Phase Transformer – VR Simulation",
      subtitle: "Paid Project by Qvolv Technologies",
      desc: "Developed a sci-fi laboratory simulation focused on the CBSE concept of a 3-Phase Transformer. Built hand-tracking compatible assets and interactive VR scenes to enhance practical learning experiences.",
      tags: ["Virtual Reality", "Hand-Tracking", "Blender", "Unity", "EdTech Simulation"],
      image: "/images/project-transformer.jpg",
      accent: "rgba(0,207,255,0.4)",
      category: "PAID CLIENT PROJECT",
      featured: true,
      client: "Qvolv Technologies",
    },
    {
      id: "01",
      title: "3D Military Warehouse Environment",
      subtitle: "Realistic Game-Ready 3D World",
      desc: "A realistic game-ready military warehouse created using Blender and Substance Painter with optimized UVs, detailed PBR textures, and immersive environmental storytelling.",
      tags: ["Blender", "Substance Painter", "PBR Textures", "Game-Ready Assets", "UV Mapping"],
      image: "/images/project-warehouse.jpg",
      accent: "rgba(0,207,255,0.35)",
      category: "3D ENVIRONMENT ART",
      featured: false,
    },
    {
      id: "02",
      title: "Personal 3D Portfolio Website",
      subtitle: "Interactive Web Experience",
      desc: "An interactive portfolio focused on immersive visuals, smooth animations, and a modern user experience. Built with futuristic glassmorphism and real-time interactive touches.",
      tags: ["React & Vite", "UI/UX Design", "Glassmorphism", "Framer Motion", "Responsive"],
      image: "/images/project-portfolio.jpg",
      accent: "rgba(0,180,255,0.35)",
      category: "WEB DEVELOPMENT",
      featured: false,
    },
    {
      id: "03",
      title: "AI & Python Engineering Projects",
      subtitle: "Intelligent Software Suite",
      desc: "A collection of programming and AI-based projects developed during my engineering journey, exploring algorithmic problem solving, machine learning models, and data pipelines.",
      tags: ["Python", "Artificial Intelligence", "Machine Learning", "Data Processing", "Algorithms"],
      image: "/images/project-ai.jpg",
      accent: "rgba(80,225,255,0.3)",
      category: "AI & COMPUTER SCIENCE",
      featured: false,
    },
  ];

  return (
    <section id="projects" className="relative mx-auto max-w-6xl px-6 py-28">
      <SectionTag index="04" label="Featured Projects" />
      <Reveal delay={0.1}>
        <h2 className="mt-14 font-display text-3xl font-semibold tracking-tight text-ink sm:text-5xl">
          Selected Works<span className="text-neon">.</span>
        </h2>
        <p className="mt-3 text-base text-mist max-w-xl">
          Showcasing a synthesis of 3D environmental realism, intelligent software, and modern web design.
        </p>
      </Reveal>

      <div className="mt-16 space-y-12">
        {projects.map((p) => (
          <Reveal key={p.id} delay={0.15}>
            <div
              className={`glass-card group overflow-hidden !rounded-3xl p-6 sm:p-8 transition-all duration-500 hover:border-neon/50 ${
                p.featured
                  ? "border-2 !border-neon/50 shadow-[0_0_60px_-15px_rgba(0,207,255,0.45)] bg-gradient-to-br from-white via-white to-neon/[0.06]"
                  : ""
              }`}
            >
              {p.featured && (
                <div className="mb-6 flex flex-wrap items-center gap-3">
                  <span className="inline-flex items-center gap-2 rounded-full bg-ink text-white px-4 py-1.5 font-mono text-[10px] font-bold uppercase tracking-[0.25em] shadow-lg">
                    <span className="h-1.5 w-1.5 rounded-full bg-neon dot-pulse" />
                    💼 Paid Client Project
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-neon/15 border border-neon/40 px-4 py-1.5 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-ink">
                    Client: {p.client}
                  </span>
                </div>
              )}
              <div className="grid gap-8 lg:grid-cols-[1.1fr_1.3fr] items-center">
                {/* Visual / Image Preview */}
                <div
                  className={`relative h-64 sm:h-80 overflow-hidden rounded-2xl flex items-end justify-start border ${
                    p.featured ? "border-neon/40" : "border-ink/[0.06]"
                  }`}
                >
                  <img
                    src={p.image}
                    alt={p.title}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    loading="lazy"
                  />
                  {/* readability gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
                  <div
                    className="absolute inset-0 opacity-60 mix-blend-screen transition-opacity duration-700 group-hover:opacity-90"
                    style={{
                      background: `radial-gradient(380px 240px at 80% 20%, ${p.accent}, transparent 70%)`,
                    }}
                  />

                  {/* Blueprint HUD Overlay inside card */}
                  <svg
                    className="absolute inset-0 h-full w-full opacity-50 transition-opacity duration-500 group-hover:opacity-80"
                    viewBox="0 0 400 260"
                    fill="none"
                  >
                    <circle
                      cx="330"
                      cy="60"
                      r="36"
                      stroke="rgba(0,207,255,0.5)"
                      strokeWidth="1"
                      strokeDasharray="4 8"
                      className="origin-center animate-[spin_20s_linear_infinite]"
                    />
                    <circle cx="330" cy="60" r="3" fill="#00CFFF" />
                    <line x1="20" y1="230" x2="150" y2="230" stroke="rgba(0,207,255,0.3)" strokeWidth="1" />
                    <circle cx="150" cy="230" r="2.5" fill="#00CFFF" className="dot-pulse" />
                  </svg>

                  {p.id !== "★" && (
                    <span className="absolute left-6 top-6 font-display text-7xl font-extrabold text-white/10 transition-all duration-500 group-hover:text-neon/30">
                      {p.id}
                    </span>
                  )}
                  {p.id === "★" && (
                    <span className="absolute left-6 top-6 text-4xl drop-shadow-[0_0_18px_rgba(0,207,255,0.9)]">
                      ⭐
                    </span>
                  )}

                  <span className="glass absolute top-6 right-6 rounded-full px-4 py-1.5 font-mono text-[10px] font-semibold tracking-[0.2em] text-ink/90 shadow-sm border border-neon/30 bg-white/85">
                    {p.category}
                  </span>

                  <div className="relative z-10 p-6 space-y-1.5">
                    <span className="inline-block rounded-full bg-neon/25 backdrop-blur px-3 py-1 font-mono text-[10px] font-bold text-white tracking-widest uppercase">
                      {p.featured ? "FEATURED PROJECT" : "CASE STUDY"}
                    </span>
                    <h4 className="font-display text-2xl font-bold text-white drop-shadow-lg">
                      {p.subtitle}
                    </h4>
                  </div>
                </div>

                {/* Project Details */}
                <div className="flex flex-col justify-between h-full py-2">
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs font-semibold text-neon tracking-widest">
                        {p.id === "★" ? "SIGNATURE WORK" : `PROJECT ${p.id}`}
                      </span>
                      <span className="h-px w-10 bg-ink/10" />
                    </div>
                    <h3 className="mt-2 font-display text-2xl font-bold text-ink sm:text-3xl transition-colors group-hover:text-neon">
                      {p.title}
                    </h3>
                    <p className="mt-4 text-base font-light leading-relaxed text-mist">
                      {p.desc}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {p.tags.map((t) => (
                        <span
                          key={t}
                          className="rounded-full border border-ink/10 bg-ink/[0.02] px-3.5 py-1.5 font-mono text-[11px] font-medium tracking-wide text-ink/70 transition-all duration-300 group-hover:border-neon/40 group-hover:bg-neon/[0.05] group-hover:text-ink"
                        >
                          ✦ {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-ink/[0.08] flex items-center justify-between">
                    <span className="font-mono text-xs text-ink/50">
                      {p.featured
                        ? "STATUS: DELIVERED TO CLIENT"
                        : "STATUS: COMPLETED & ARCHIVED"}
                    </span>
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-2 font-display text-sm font-semibold text-ink hover:text-neon transition-colors"
                    >
                      Discuss Project <span className="text-neon text-lg">↗</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ================= JOURNEY & VISION ================= */
export function Journey() {
  const achievements = [
    { title: "Passionate 3D Artist", desc: "Dedicated to crafting highly immersive environments and realistic textures.", icon: "🎨" },
    { title: "Creative Problem Solver", desc: "Applying algorithmic thinking to overcome complex design and technical hurdles.", icon: "🧩" },
    { title: "Continuous Learner", desc: "Relentlessly expanding knowledge across web frameworks, game engines, and AI.", icon: "📚" },
    { title: "Exploring AI & Game Dev", desc: "Synthesizing artificial intelligence models with interactive real-time 3D experiences.", icon: "🚀" },
  ];

  return (
    <section id="journey" className="relative mx-auto max-w-6xl px-6 py-28">
      <SectionTag index="05" label="Journey & Vision" />
      
      <div className="mt-14 grid gap-12 lg:grid-cols-2 items-stretch">
        {/* Vision Box */}
        <Reveal delay={0.1}>
          <div className="glass-card !rounded-3xl p-8 sm:p-12 h-full flex flex-col justify-between bg-gradient-to-br from-white via-white to-neon/[0.04] border-2 border-neon/20 shadow-[0_10px_40px_-15px_rgba(0,207,255,0.2)]">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-neon/15 px-3.5 py-1 font-mono text-xs font-semibold uppercase tracking-[0.25em] text-ink">
                <span className="h-2 w-2 rounded-full bg-neon dot-pulse" />
                My Vision
              </div>
              <h3 className="mt-6 font-display text-2xl font-bold leading-snug text-ink sm:text-4xl">
                Bridging the gap between design, 3D art, and intelligent software.
              </h3>
              <p className="mt-6 text-base font-light leading-relaxed text-mist sm:text-lg">
                I aspire to become a <strong className="font-semibold text-ink">Creative Technologist</strong> who brings digital worlds to life. By merging aesthetic intuition with rigorous computer science principles, my goal is to construct interactive experiences that feel organic, futuristic, and deeply engaging.
              </p>
            </div>

            <div className="mt-10 pt-8 border-t border-ink/10">
              <blockquote className="font-mono text-sm italic text-ink/75 bg-ink/[0.03] p-4 rounded-xl border-l-2 border-neon">
                &ldquo;Turning ideas into immersive digital experiences.&rdquo;
              </blockquote>
            </div>
          </div>
        </Reveal>

        {/* Achievements Grid */}
        <Reveal delay={0.2}>
          <div className="flex flex-col gap-5 h-full justify-between">
            <div className="mb-1">
              <h3 className="font-display text-2xl font-bold text-ink">
                Key Strengths &amp; Mindset
              </h3>
              <p className="text-sm text-mist mt-1">
                The core pillars driving my engineering and artistic journey.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-1">
              {achievements.map((ach) => (
                <div
                  key={ach.title}
                  className="glass-card !rounded-2xl p-5 flex flex-col justify-between transition-all duration-300 hover:border-neon/50 hover:-translate-y-1"
                >
                  <span className="text-3xl mb-3">{ach.icon}</span>
                  <div>
                    <h4 className="font-display text-base font-bold text-ink">
                      {ach.title}
                    </h4>
                    <p className="mt-1.5 text-xs text-mist leading-relaxed font-light">
                      {ach.desc}
                    </p>
                  </div>
                  <div className="mt-4 flex items-center justify-end">
                    <span className="h-1.5 w-1.5 rounded-full bg-neon/70" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ================= CONTACT ================= */
export function Contact() {
  const contactInfo = [
    { label: "Email", value: "sgshivam2000@gmail.com", href: "mailto:sgshivam2000@gmail.com", icon: "✉️" },
    { label: "GitHub", value: "@sgshivam2000-ai", href: "https://github.com/sgshivam2000-ai", icon: "💻" },
    { label: "LinkedIn", value: "shivam-gupta-sp", href: "https://www.linkedin.com/in/shivam-gupta-sp", icon: "👔" },
    { label: "Instagram", value: "@xo_shivam18", href: "https://www.instagram.com/xo_shivam18?igsh=bjlkYm03N2tlcDQ1", icon: "📸" },
  ];

  return (
    <section id="contact" className="relative overflow-hidden px-6 py-32 sm:py-44">
      {/* ambient glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[860px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-70"
        style={{
          background:
            "radial-gradient(closest-side, rgba(0,207,255,0.12), transparent 70%)",
        }}
      />
      <div className="relative mx-auto max-w-5xl">
        <div className="text-center flex flex-col items-center">
          <SectionTag index="06" label="Contact Information" />
          <Reveal delay={0.1}>
            <h2 className="mt-12 font-display text-4xl font-bold leading-tight tracking-tight text-ink sm:text-6xl">
              Let&apos;s build an immersive
              <br />
              <span className="relative inline-block text-neon">
                future
                <svg
                  className="absolute -bottom-3 left-0 w-full"
                  viewBox="0 0 300 24"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M4 14 C 80 24, 220 2, 296 12"
                    stroke="#00CFFF"
                    strokeWidth="3"
                    strokeLinecap="round"
                    pathLength={1}
                    className="hud-draw"
                    style={{ ["--d" as string]: "0.4s", filter: "drop-shadow(0 0 8px rgba(0,207,255,0.8))" }}
                  />
                </svg>
              </span>{" "}
              together.
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-8 max-w-lg text-base font-light leading-relaxed text-mist sm:text-lg">
              Whether you want to discuss 3D environment design, AI collaboration, modern web development, or creative opportunities—feel free to connect.
            </p>
          </Reveal>
        </div>

        {/* Contact Grid */}
        <Reveal delay={0.3}>
          <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {contactInfo.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={c.label !== "Email" ? "_blank" : "_self"}
                rel="noopener noreferrer"
                className="glass-card group flex flex-col justify-between !rounded-2xl p-6 transition-all duration-300 hover:border-neon/60 hover:-translate-y-1.5"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl">{c.icon}</span>
                  <span className="font-mono text-[10px] uppercase text-ink/40 tracking-widest group-hover:text-neon transition-colors">
                    ↗ OPEN
                  </span>
                </div>
                <div>
                  <span className="font-mono text-[11px] uppercase tracking-wider text-ink/50">
                    {c.label}
                  </span>
                  <h3 className="font-display text-sm sm:text-base font-bold text-ink mt-1 truncate group-hover:text-neon transition-colors">
                    {c.value}
                  </h3>
                </div>
              </a>
            ))}
          </div>
        </Reveal>

        {/* Location & Direct CTA */}
        <Reveal delay={0.4}>
          <div className="mt-12 glass-card !rounded-3xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6 border border-neon/30 bg-gradient-to-r from-white via-white to-neon/[0.08]">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-neon/20 text-xl">
                📍
              </div>
              <div>
                <h4 className="font-display text-lg font-bold text-ink">
                  Location: Punjab, India
                </h4>
                <p className="text-xs text-mist font-light">
                  Available for remote opportunities and creative collaborations worldwide.
                </p>
              </div>
            </div>
            <Magnetic>
              <a
                href="mailto:sgshivam2000@gmail.com"
                className="btn-primary inline-flex items-center gap-3 rounded-full px-8 py-4 text-sm font-semibold tracking-wide whitespace-nowrap shadow-[0_10px_25px_-8px_rgba(0,207,255,0.5)]"
              >
                Send Email Now
                <span className="text-neon">↗</span>
              </a>
            </Magnetic>
          </div>
        </Reveal>

        {/* Quote Footer inside Contact */}
        <Reveal delay={0.5}>
          <div className="mt-16 text-center font-mono text-xs text-ink/40 tracking-[0.3em] uppercase">
            &ldquo;Turning ideas into immersive digital experiences.&rdquo;
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ================= FOOTER ================= */
export function Footer() {
  return (
    <footer className="border-t border-ink/[0.08] bg-white/50 px-6 py-12 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">
        <div className="flex items-center gap-2">
          <span className="font-display text-base font-bold tracking-widest text-ink">
            SHIVAM<span className="text-neon">/</span>GUPTA
          </span>
          <span className="rounded-full bg-neon/15 px-2.5 py-0.5 font-mono text-[9px] text-ink font-semibold">
            B.TECH CSE (AI &amp; ML)
          </span>
        </div>
        <span className="font-mono text-xs tracking-[0.2em] text-ink/50 text-center">
          © 2026 SHIVAM GUPTA — ALL RIGHTS RESERVED
        </span>
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/sgshivam2000-ai"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-ink/60 hover:text-neon transition-colors"
          >
            GITHUB
          </a>
          <a
            href="https://www.linkedin.com/in/shivam-gupta-sp"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-ink/60 hover:text-neon transition-colors"
          >
            LINKEDIN
          </a>
          <a
            href="#top"
            className="flex items-center gap-2 font-mono text-xs text-ink/60 hover:text-ink transition-colors"
          >
            <span className="dot-pulse h-2 w-2 rounded-full bg-neon" />
            TOP ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
