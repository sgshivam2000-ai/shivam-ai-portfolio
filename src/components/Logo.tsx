export default function Logo({ onClick }: { onClick?: () => void }) {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-2.5 cursor-pointer group"
      aria-label="Shivam - back to top"
    >
      <span className="relative grid place-items-center w-10 h-10">
        <svg viewBox="0 0 40 40" className="w-10 h-10">
          <polygon
            points="20,2 36,11 36,29 20,38 4,29 4,11"
            fill="none"
            stroke="#4f46e5"
            strokeWidth="2.5"
            className="transition-all group-hover:fill-indigo-50"
          />
        </svg>
        <span className="absolute font-extrabold text-indigo-600 text-lg">S</span>
      </span>
      <span className="font-extrabold tracking-[0.18em] text-slate-900 text-lg">
        SHIVAM
      </span>
    </button>
  );
}
