import { useEffect, useRef, useState } from "react";
import {
  Code2,
  BrainCircuit,
  Globe,
  Box,
  Lightbulb,
  Puzzle,
  Rocket,
  Users,
  MessageCircle,
} from "lucide-react";

const groups = [
  {
    icon: Code2,
    title: "Programming",
    color: "text-emerald-600 bg-emerald-50",
    skills: [
      { name: "Python", level: 90 },
      { name: "C", level: 80 },
      { name: "JavaScript (Learning)", level: 65 },
      { name: "HTML", level: 90 },
      { name: "CSS", level: 85 },
    ],
  },
  {
    icon: BrainCircuit,
    title: "AI & ML",
    color: "text-green-600 bg-green-50",
    skills: [
      { name: "Python", level: 90 },
      { name: "Machine Learning", level: 75 },
      { name: "Deep Learning (Basics)", level: 60 },
      { name: "Prompt Engineering", level: 70 },
    ],
  },
  {
    icon: Globe,
    title: "Web Development",
    color: "text-teal-600 bg-teal-50",
    skills: [
      { name: "HTML", level: 90 },
      { name: "CSS", level: 85 },
      { name: "JavaScript", level: 65 },
      { name: "Responsive Design", level: 80 },
    ],
  },
  {
    icon: Box,
    title: "3D Skills",
    color: "text-lime-600 bg-lime-50",
    skills: [
      { name: "Blender", level: 90 },
      { name: "Maya", level: 80 },
      { name: "Substance Painter", level: 85 },
      { name: "Unity", level: 75 },
    ],
  },
];

const softSkills = [
  { icon: Lightbulb, name: "Creative Thinking" },
  { icon: Puzzle, name: "Problem Solving" },
  { icon: Rocket, name: "Fast Learner" },
  { icon: Users, name: "Teamwork" },
  { icon: MessageCircle, name: "Communication" },
];

export default function Skills() {
  const ref = useRef<HTMLElement>(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
          obs.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="skills"
      ref={ref}
      className="relative py-24 bg-white overflow-hidden"
    >
      <div className="dot-pattern absolute top-20 right-10 w-32 h-28 opacity-40 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 sm:px-10">
        <div className="reveal text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-extrabold">
            My <span className="text-emerald-600">Skills</span>
          </h2>
          <p className="text-slate-500 mt-3">
            Technologies and tools I work with
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {groups.map((g) => (
            <div
              key={g.title}
              className="reveal bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow p-6"
            >
              <div className="flex items-center gap-3 mb-5">
                <span className={`w-9 h-9 rounded-lg grid place-items-center ${g.color}`}>
                  <g.icon size={18} />
                </span>
                <h3 className="font-bold text-slate-900">{g.title}</h3>
              </div>
              <div className="space-y-4">
                {g.skills.map((s) => (
                  <div key={s.name}>
                    <div className="flex justify-between text-xs font-medium mb-1.5">
                      <span className="text-slate-700">{s.name}</span>
                      <span className="text-slate-500">{s.level}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-slate-100 overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-emerald-500 via-green-500 to-lime-400 transition-all duration-1000 ease-out"
                        style={{ width: animate ? `${s.level}%` : "0%" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="reveal bg-white rounded-2xl border border-slate-100 shadow-sm p-8 mt-6">
          <h3 className="font-bold text-slate-900 mb-8">Soft Skills</h3>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-6">
            {softSkills.map((s) => (
              <div key={s.name} className="flex flex-col items-center gap-3 text-center">
                <span className="w-12 h-12 rounded-xl grid place-items-center text-emerald-600 bg-emerald-50 hover:scale-110 transition-transform">
                  <s.icon size={22} />
                </span>
                <span className="text-xs font-semibold text-slate-700">{s.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
