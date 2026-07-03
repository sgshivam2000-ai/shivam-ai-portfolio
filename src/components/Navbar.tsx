import { useEffect, useState } from "react";
import { Download, Menu, X } from "lucide-react";
import Logo from "./Logo";

const LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const pos = window.scrollY + window.innerHeight * 0.35;
      let current = "home";
      for (const l of LINKS) {
        const el = document.getElementById(l.id);
        if (el && el.offsetTop <= pos) current = l.id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all ${
        scrolled ? "bg-white/85 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-5 sm:px-8 h-16">
        <Logo onClick={() => go("home")} />

        <ul className="hidden md:flex items-center gap-8">
          {LINKS.map((l) => (
            <li key={l.id}>
              <button
                onClick={() => go(l.id)}
                className={`relative text-sm font-medium transition-colors pb-1 cursor-pointer ${
                  active === l.id
                    ? "text-indigo-600"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {l.label}
                <span
                  className={`absolute left-0 -bottom-0.5 h-0.5 rounded-full bg-indigo-600 transition-all ${
                    active === l.id ? "w-full" : "w-0"
                  }`}
                />
              </button>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href="#"
            onClick={(e) => e.preventDefault()}
            className="hidden sm:inline-flex items-center gap-2 rounded-lg border border-indigo-300 px-4 py-2 text-sm font-semibold text-indigo-600 hover:bg-indigo-50 transition-colors"
          >
            Download CV <Download size={15} />
          </a>
          <button
            className="md:hidden text-slate-700 p-1"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-slate-100 shadow-lg">
          <ul className="px-6 py-4 space-y-1">
            {LINKS.map((l) => (
              <li key={l.id}>
                <button
                  onClick={() => go(l.id)}
                  className={`block w-full text-left py-2.5 text-sm font-medium rounded-lg px-3 ${
                    active === l.id
                      ? "text-indigo-600 bg-indigo-50"
                      : "text-slate-600"
                  }`}
                >
                  {l.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
