const NEON = "#00CFFF";

/**
 * Blueprint-style HUD overlay for the hero.
 * Lines draw themselves on load (pathLength trick), duplicated
 * "flow" paths stream energy pulses, nodes pulse and ping.
 */
export default function Hud() {
  const paths = [
    // top-left bracket system
    { d: "M 60 200 V 96 Q 60 72 84 72 H 240", d1: 0.2 },
    { d: "M 96 118 H 330 L 372 160 H 470", d1: 0.5 },
    // top-right
    { d: "M 1380 260 V 96 Q 1380 72 1356 72 H 1180", d1: 0.35 },
    { d: "M 1344 130 H 1120 L 1078 172 H 986", d1: 0.65 },
    // bottom-left
    { d: "M 60 640 V 804 Q 60 828 84 828 H 300", d1: 0.5 },
    { d: "M 96 770 H 288 L 330 728 H 430", d1: 0.85 },
    // bottom-right
    { d: "M 1380 620 V 804 Q 1380 828 1356 828 H 1140", d1: 0.3 },
    { d: "M 1344 764 H 1150 L 1108 722 H 1010", d1: 1.0 },
    // center connective ticks
    { d: "M 720 60 V 118", d1: 1.1 },
    { d: "M 720 836 V 782", d1: 1.2 },
  ];

  const nodes: [number, number, number][] = [
    [470, 160, 0.2],
    [986, 172, 0.9],
    [430, 728, 1.5],
    [1010, 722, 0.5],
    [720, 118, 1.1],
    [720, 782, 1.8],
    [60, 200, 0.3],
    [1380, 260, 1.3],
    [60, 640, 2.1],
    [1380, 620, 0.7],
  ];

  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full"
      viewBox="0 0 1440 900"
      preserveAspectRatio="xMidYMid slice"
      fill="none"
      aria-hidden="true"
    >
      <defs>
        <filter id="hud-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="2.2" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* structural lines that draw themselves */}
      {paths.map((p, i) => (
        <path
          key={`s-${i}`}
          d={p.d}
          pathLength={1}
          className="hud-draw"
          style={{ ["--d" as string]: `${p.d1}s` }}
          stroke="rgba(11,18,32,0.14)"
          strokeWidth="1"
        />
      ))}

      {/* neon energy flowing along the same lines */}
      {paths.map((p, i) => (
        <path
          key={`f-${i}`}
          d={p.d}
          pathLength={1}
          className="hud-flow"
          style={{ ["--d" as string]: `${1.6 + i * 0.7}s` }}
          stroke={NEON}
          strokeWidth="1.4"
          filter="url(#hud-glow)"
          strokeLinecap="round"
        />
      ))}

      {/* pulsing connection nodes */}
      {nodes.map(([x, y, d], i) => (
        <g key={`n-${i}`}>
          <circle
            cx={x}
            cy={y}
            r="3"
            fill={NEON}
            className="hud-node"
            style={{ ["--d" as string]: `${d}s` }}
            filter="url(#hud-glow)"
          />
          <circle
            cx={x}
            cy={y}
            r="7"
            stroke={NEON}
            strokeWidth="0.8"
            className="hud-ring"
            style={{ ["--d" as string]: `${d + 0.4}s` }}
          />
        </g>
      ))}

      {/* travelling pulse dots */}
      <circle r="2.6" fill={NEON} filter="url(#hud-glow)">
        <animateMotion
          dur="7s"
          repeatCount="indefinite"
          path="M 96 118 H 330 L 372 160 H 470"
        />
      </circle>
      <circle r="2.6" fill={NEON} filter="url(#hud-glow)">
        <animateMotion
          dur="8.5s"
          begin="2s"
          repeatCount="indefinite"
          path="M 1344 764 H 1150 L 1108 722 H 1010"
        />
      </circle>

      {/* blueprint micro-labels */}
      <g
        fontFamily="JetBrains Mono, monospace"
        fontSize="10"
        letterSpacing="2"
        fill="rgba(11,18,32,0.35)"
      >
        <text x="96" y="100">SYS.01 / PORTFOLIO</text>
        <text x="1344" y="108" textAnchor="end">GRID.AXIS — 00CFFF</text>
        <text x="96" y="812">LAT 28.61 — LNG 77.20</text>
        <text x="1344" y="812" textAnchor="end">RIBBON.CORE ACTIVE</text>
      </g>
    </svg>
  );
}
