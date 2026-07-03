import { GraduationCap, Building2, Sparkles, Target } from "lucide-react";
import { GithubIcon } from "./BrandIcons";

const cards = [
  {
    icon: GraduationCap,
    title: "Education",
    text: "B.Tech CSE (AI/ML)\n1st Year Completed",
    color: "text-indigo-600 bg-indigo-50",
  },
  {
    icon: Building2,
    title: "College",
    text: "Baba Farid Group of\nInstitutions",
    color: "text-violet-600 bg-violet-50",
  },
  {
    icon: Sparkles,
    title: "Interests",
    text: "AI, Web Dev, 3D Art,\nGaming, Creativity",
    color: "text-fuchsia-600 bg-fuchsia-50",
  },
  {
    icon: Target,
    title: "Goal",
    text: "To Build & Inspire\nThrough Tech",
    color: "text-emerald-600 bg-emerald-50",
  },
];

const tools = [
  {
    name: "Blender",
    logo: (
      <svg viewBox="0 0 24 24" className="w-9 h-9" fill="#ea7600">
        <path d="M9.9 8.6 5.3 5.2c-.5-.4-1.3-.4-1.7.1-.4.5-.3 1.2.2 1.6l2.9 2.2H2.2c-.6 0-1.1.5-1.1 1.1 0 .6.5 1.1 1.1 1.1h6.2l-4.9 3.8c-.6.5-.9 1.3-.9 2 0 2 2.4 4.4 6 5.4 4.7 1.2 9.7-.4 11.7-3.9.9-1.6 1.1-3.3.5-4.9-.6-1.7-2-3.1-3.9-4L12.4 5c-.5-.4-1.2-.3-1.6.2-.4.5-.3 1.2.2 1.6l2.4 1.8H9.9Zm4.9 3.1c1.4.1 2.6.8 3.2 1.9.5.9.5 1.9 0 2.8-1 1.8-3.5 2.7-5.9 2.1-1.7-.4-3-1.5-3.2-2.7-.1-.8.3-1.5 1-2.1l1.8-1.4c.6-.4 1.4-.7 2.2-.7l.9.1Z" />
      </svg>
    ),
  },
  {
    name: "Maya",
    logo: (
      <div className="w-9 h-9 rounded-md bg-gradient-to-br from-teal-400 to-cyan-600 grid place-items-center text-white font-extrabold text-xl">
        M
      </div>
    ),
  },
  {
    name: "Substance Painter",
    logo: (
      <div className="w-9 h-9 rounded-full border-[3px] border-red-500 grid place-items-center text-red-500 font-extrabold text-lg">
        S
      </div>
    ),
  },
  {
    name: "Unity",
    logo: (
      <svg viewBox="0 0 24 24" className="w-9 h-9" fill="#111">
        <path d="m12 1 8.66 5v10L12 21l-8.66-5V6L12 1Zm0 2.3L5.3 7.2v7.7l2.4 1.4V9l4.3-2.5 4.3 2.5v7.3l2.4-1.4V7.2L12 3.3Zm0 4.9L9.7 9.5v4.9L12 15.8l2.3-1.4V9.5L12 8.2Z" />
      </svg>
    ),
  },
  {
    name: "VS Code",
    logo: (
      <svg viewBox="0 0 24 24" className="w-9 h-9" fill="#2f80ed">
        <path d="M17.5 2.5 8 11 4.2 8.1l-1.7.9v6l1.7.9L8 13l9.5 8.5 4-2v-15l-4-2ZM4.5 13.4v-2.8L6 12l-1.5 1.4Zm13 3.1L11 12l6.5-4.5v9Z" />
      </svg>
    ),
  },
  {
    name: "GitHub",
    logo: <GithubIcon size={34} className="text-slate-900" />,
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 bg-white overflow-hidden">
      <div className="dot-pattern absolute top-16 right-12 w-36 h-24 opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 grid lg:grid-cols-2 gap-14 items-center">
        <div className="reveal">
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-6">
            About <span className="text-indigo-600">Me</span>
          </h2>
          <p className="font-semibold text-slate-800 mb-4 leading-relaxed">
            I'm Shivam, a B.Tech CSE (AI/ML) student who loves to learn, build
            and explore.
          </p>
          <p className="text-slate-600 mb-3 leading-relaxed text-sm sm:text-base">
            I'm passionate about Artificial Intelligence, Web Development, 3D
            Art and Game Development.
          </p>
          <p className="text-slate-600 mb-8 leading-relaxed text-sm sm:text-base">
            I enjoy turning ideas into real world solutions and immersive
            digital experiences.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
            {cards.map((c) => (
              <div
                key={c.title}
                className="bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all p-4"
              >
                <div className={`w-9 h-9 rounded-lg grid place-items-center mb-2.5 ${c.color}`}>
                  <c.icon size={18} />
                </div>
                <p className="font-bold text-sm text-slate-900 mb-1">{c.title}</p>
                <p className="text-[11px] text-slate-500 leading-snug whitespace-pre-line">
                  {c.text}
                </p>
              </div>
            ))}
          </div>

          <h3 className="font-bold text-slate-900 mb-4">Tools I Use</h3>
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
            {tools.map((t) => (
              <div
                key={t.name}
                className="bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all p-3 flex flex-col items-center gap-2"
              >
                {t.logo}
                <span className="text-[10px] font-semibold text-slate-600 text-center leading-tight">
                  {t.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="reveal relative">
          <div className="absolute -inset-6 bg-violet-200/40 blur-3xl rounded-full pointer-events-none" />
          <img
            src="./images/room.png"
            alt="Isometric 3D render of a cozy purple-lit gaming room"
            className="relative w-full max-w-xl mx-auto animate-floaty drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}
