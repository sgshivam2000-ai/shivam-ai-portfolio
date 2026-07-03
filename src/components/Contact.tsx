import { useState } from "react";
import { ArrowRight, Handshake, Mail, Send } from "lucide-react";
import { GithubIcon, InstagramIcon, LinkedinIcon } from "./BrandIcons";

const connects = [
  {
    icon: <GithubIcon size={20} className="text-white" />,
    bg: "bg-slate-900",
    title: "GitHub",
    value: "github.com/sgshivam2000-ai",
    href: "https://github.com/sgshivam2000-ai",
  },
  {
    icon: <LinkedinIcon size={20} className="text-white" />,
    bg: "bg-sky-600",
    title: "LinkedIn",
    value: "linkedin.com/in/shivam-gupta-sp",
    href: "https://www.linkedin.com/in/shivam-gupta-sp",
  },
  {
    icon: <InstagramIcon size={20} className="text-white" />,
    bg: "bg-gradient-to-br from-fuchsia-500 via-pink-500 to-orange-400",
    title: "Instagram",
    value: "instagram.com/xo_shivam18",
    href: "https://www.instagram.com/xo_shivam18?igsh=bjlkYm03N2tlcDQ1",
  },
  {
    icon: <Mail size={20} className="text-white" />,
    bg: "bg-red-500",
    title: "Email",
    value: "sgshivam2000@gmail.com",
    href: "mailto:sgshivam2000@gmail.com",
  },
];

export default function Contact() {
  const [sent, setSent] = useState(false);

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    e.currentTarget.reset();
    setTimeout(() => setSent(false), 3500);
  };

  return (
    <section
      id="contact"
      className="relative py-24 bg-slate-50/60 overflow-hidden"
    >
      {/* paper plane doodle */}
      <svg
        viewBox="0 0 220 90"
        className="hidden lg:block absolute top-32 right-16 w-56 text-orange-300 pointer-events-none"
        fill="none"
      >
        <path
          d="M10 70 C 60 90, 130 80, 165 40"
          stroke="currentColor"
          strokeWidth="2"
          strokeDasharray="6 7"
          strokeLinecap="round"
        />
        <path d="M170 35 202 18l-14 34-8-13-10-4Z" fill="#fde8d3" stroke="#f3b57e" strokeWidth="2" strokeLinejoin="round" />
      </svg>
      <div className="dot-pattern absolute bottom-24 left-10 w-28 h-28 opacity-40 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 sm:px-10">
        <div className="reveal mb-12">
          <h2 className="text-4xl sm:text-5xl font-extrabold">
            Get In <span className="text-orange-500">Touch</span>
          </h2>
          <p className="text-slate-500 mt-3">
            Let's connect and build something amazing together!
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 items-start">
          {/* form */}
          <form
            onSubmit={submit}
            className="reveal lg:col-span-3 bg-white rounded-3xl border border-slate-100 shadow-sm p-6 sm:p-8 space-y-4"
          >
            <input
              required
              type="text"
              placeholder="Your Name"
              className="w-full rounded-xl border border-slate-200 px-4 py-3.5 text-sm outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100 transition-all placeholder:text-slate-400"
            />
            <input
              required
              type="email"
              placeholder="Your Email"
              className="w-full rounded-xl border border-slate-200 px-4 py-3.5 text-sm outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100 transition-all placeholder:text-slate-400"
            />
            <textarea
              required
              rows={7}
              placeholder="Your Message"
              className="w-full rounded-xl border border-slate-200 px-4 py-3.5 text-sm outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100 transition-all placeholder:text-slate-400 resize-none"
            />
            <button
              type="submit"
              className="inline-flex items-center gap-2.5 rounded-xl bg-orange-500 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-orange-200 hover:bg-orange-600 hover:-translate-y-0.5 transition-all cursor-pointer"
            >
              <Send size={15} /> Send Message <ArrowRight size={15} />
            </button>
            {sent && (
              <p className="text-sm font-medium text-emerald-600">
                ✅ Thanks! Your message has been sent.
              </p>
            )}
          </form>

          {/* connect card */}
          <div className="reveal lg:col-span-2 bg-white rounded-3xl border border-slate-100 shadow-sm p-6 sm:p-8">
            <div className="flex items-center gap-2.5 mb-7">
              <Handshake size={20} className="text-orange-500" />
              <h3 className="font-bold text-slate-900">Let's Connect</h3>
            </div>
            <div className="space-y-6">
              {connects.map((c) => (
                <a
                  key={c.title}
                  href={c.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 group"
                >
                  <span
                    className={`w-11 h-11 rounded-xl grid place-items-center shrink-0 ${c.bg} group-hover:scale-110 transition-transform`}
                  >
                    {c.icon}
                  </span>
                  <span>
                    <span className="block font-semibold text-sm text-slate-900 group-hover:text-orange-500 transition-colors">
                      {c.title}
                    </span>
                    <span className="block text-xs text-slate-500">{c.value}</span>
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <footer className="mt-20 pt-8 border-t border-orange-100 text-center text-sm text-slate-500">
          © 2024 Shivam. Made with <span className="text-red-500">❤️</span> and
          lots of ☕
        </footer>
      </div>
    </section>
  );
}
