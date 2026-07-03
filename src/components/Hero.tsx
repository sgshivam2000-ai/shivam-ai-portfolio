import { ArrowRight, Download, Mail } from "lucide-react";
import { GithubIcon, InstagramIcon, LinkedinIcon } from "./BrandIcons";

const socials = [
  { icon: GithubIcon, href: "https://github.com/sgshivam2000-ai", label: "GitHub" },
  { icon: LinkedinIcon, href: "https://www.linkedin.com/in/shivam-gupta-sp", label: "LinkedIn" },
  { icon: InstagramIcon, href: "https://www.instagram.com/xo_shivam18?igsh=bjlkYm03N2tlcDQ1", label: "Instagram" },
  { icon: Mail, href: "mailto:sgshivam2000@gmail.com", label: "Email" },
];

export default function Hero() {
  const go = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-white">
      {/* decorative dots */}
      <div className="dot-pattern absolute top-24 left-10 w-32 h-32 opacity-60 pointer-events-none" />
      <div className="dot-pattern absolute bottom-24 left-1/3 w-40 h-24 opacity-40 pointer-events-none" />

      {/* fixed social rail */}
      <div className="hidden lg:flex flex-col gap-1 fixed left-4 top-1/2 -translate-y-1/2 z-40 bg-white rounded-2xl shadow-lg shadow-indigo-100 p-2 border border-slate-100">
        {socials.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noreferrer"
            aria-label={s.label}
            className="p-2.5 rounded-xl text-slate-700 hover:text-indigo-600 hover:bg-indigo-50 transition-colors"
          >
            <s.icon size={19} />
          </a>
        ))}
      </div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 items-center gap-8 px-6 sm:px-10 lg:pl-24 pt-28 lg:pt-16 min-h-screen">
        {/* text */}
        <div className="relative z-10 order-2 lg:order-1 pb-16 lg:pb-0">
          <p className="text-xl sm:text-2xl font-semibold text-slate-800 mb-1">Hi, I'm</p>
          <h1 className="text-6xl sm:text-7xl xl:text-8xl font-extrabold leading-none tracking-tight mb-5">
            <span className="text-slate-900">Shiv</span>
            <span className="text-indigo-600">am</span>
          </h1>
          <p className="text-lg sm:text-xl font-bold text-slate-900">
            AI/ML Student <span className="text-slate-400 font-normal mx-1">|</span>{" "}
            <span className="text-indigo-600">Full Stack Learner</span>
          </p>
          <p className="text-lg sm:text-xl font-bold mb-5">
            <span className="text-violet-600">3D Artist</span>
          </p>
          <p className="text-slate-600 max-w-md mb-8 leading-relaxed">
            I build intelligent, interactive and immersive digital experiences
            for the web and beyond.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={() => go("projects")}
              className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-300 hover:bg-indigo-700 hover:-translate-y-0.5 transition-all cursor-pointer"
            >
              View Projects <ArrowRight size={16} />
            </button>
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3.5 text-sm font-semibold text-slate-800 hover:border-indigo-400 hover:text-indigo-600 transition-colors"
            >
              Download Resume <Download size={16} />
            </a>
          </div>

          {/* mobile socials */}
          <div className="flex lg:hidden gap-2 mt-8">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="p-2.5 rounded-xl bg-white shadow border border-slate-100 text-slate-700 hover:text-indigo-600"
              >
                <s.icon size={18} />
              </a>
            ))}
          </div>

          <button
            onClick={() => go("about")}
            className="hidden lg:inline-flex items-center gap-3 mt-16 text-sm text-slate-500 hover:text-indigo-600 transition-colors cursor-pointer group"
          >
            <span className="relative grid place-items-start justify-center w-6 h-10 rounded-full border-2 border-slate-400 group-hover:border-indigo-500 pt-1.5">
              <span className="w-1 h-2 rounded-full bg-slate-400 group-hover:bg-indigo-500 animate-scrollwheel" />
            </span>
            Scroll Down
          </button>
        </div>

        {/* hero image */}
        <div className="relative order-1 lg:order-2 flex items-end justify-center lg:h-screen">
          <img
            src="./images/hero.png"
            alt="Anime character sitting on a rooftop looking over a futuristic city"
            className="w-full max-w-md lg:max-w-none lg:h-[92%] object-contain object-bottom drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}
