import { useState } from "react";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "./BrandIcons";

type Category = "All" | "3D Art" | "Web Dev" | "IoT" | "Other";

const CATEGORIES: Category[] = ["All", "3D Art", "Web Dev", "IoT", "Other"];

const projects = [
  {
    title: "Military Warehouse",
    subtitle: "3D Environment",
    image: "./images/project-warehouse.jpg",
    category: "3D Art",
    tags: ["Blender", "Substance Painter"],
  },
  {
    title: "Sci-Fi Computer Lab",
    subtitle: "3D Environment",
    image: "./images/project-scifi-lab.jpg",
    category: "3D Art",
    tags: ["Blender", "Substance Painter"],
  },
  {
    title: "Portfolio Website",
    subtitle: "Web Development",
    image: "./images/project-portfolio.jpg",
    category: "Web Dev",
    tags: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "ESP32 IoT Project",
    subtitle: "IoT Based Plant Watering System",
    image: "./images/project-esp32.jpg",
    category: "IoT",
    tags: ["ESP32", "C++", "IoT"],
  },
  {
    title: "AI Future Projects",
    subtitle: "Exploring AI & ML Solutions",
    image: "./images/project-ai.jpg",
    category: "Other",
    tags: ["Python", "Machine Learning"],
  },
];

export default function Projects() {
  const [filter, setFilter] = useState<Category>("All");

  const shown = projects.filter(
    (p) => filter === "All" || p.category === filter
  );

  return (
    <section id="projects" className="relative py-24 bg-slate-50/60 overflow-hidden">
      <div className="dot-pattern absolute bottom-16 left-8 w-32 h-32 opacity-40 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 sm:px-10">
        <div className="reveal mb-10">
          <h2 className="text-4xl sm:text-5xl font-extrabold">
            My Projects<span className="text-indigo-600">.</span>
          </h2>
          <p className="text-slate-500 mt-3">Some of my selected work</p>
        </div>

        <div className="reveal flex flex-wrap gap-2 mb-10">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all cursor-pointer ${
                filter === c
                  ? "bg-indigo-600 text-white shadow-lg shadow-indigo-200"
                  : "bg-white text-slate-600 border border-slate-200 hover:border-indigo-300 hover:text-indigo-600"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {shown.map((p) => (
            <article
              key={p.title}
              className="reveal group bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all overflow-hidden"
            >
              <div className="relative overflow-hidden aspect-[16/10]">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <div className="flex items-start justify-between gap-2 mb-1">
                  <h3 className="font-bold text-slate-900">{p.title}</h3>
                  <a
                    href="#"
                    onClick={(e) => e.preventDefault()}
                    aria-label={`Open ${p.title}`}
                    className="text-slate-400 hover:text-indigo-600 transition-colors mt-0.5"
                  >
                    <ExternalLink size={16} />
                  </a>
                </div>
                <p className="text-xs text-slate-500 mb-4">{p.subtitle}</p>
                <div className="flex flex-wrap gap-1.5">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-600 text-[11px] font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="reveal flex justify-center mt-12">
          <a
            href="https://github.com/sgshivam2000-ai"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2.5 rounded-full bg-slate-900 px-7 py-3.5 text-sm font-semibold text-white hover:bg-slate-800 hover:-translate-y-0.5 transition-all shadow-lg"
          >
            View More on GitHub <GithubIcon size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
