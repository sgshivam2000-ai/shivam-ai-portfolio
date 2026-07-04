import { useEffect, useRef } from "react";

type P = {
  x: number;
  y: number;
  r: number;
  vx: number;
  vy: number;
  o: number;
  neon: boolean;
  ph: number;
};

/** Fixed full-screen field of drifting micro-particles + glowing dots. */
export default function Particles() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current!;
    const ctx = canvas.getContext("2d")!;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let W = 0;
    let H = 0;
    let ps: P[] = [];

    const init = () => {
      W = window.innerWidth;
      H = window.innerHeight;
      canvas.width = W * dpr;
      canvas.height = H * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.min(90, Math.floor((W * H) / 26000));
      ps = Array.from({ length: count }, () => ({
        x: Math.random() * W,
        y: Math.random() * H,
        r: 0.6 + Math.random() * 1.8,
        vx: (Math.random() - 0.5) * 0.14,
        vy: -0.05 - Math.random() * 0.16,
        o: 0.15 + Math.random() * 0.4,
        neon: Math.random() < 0.3,
        ph: Math.random() * Math.PI * 2,
      }));
    };
    init();
    window.addEventListener("resize", init);

    let raf = 0;
    const t0 = performance.now();
    const tick = (now: number) => {
      const t = (now - t0) / 1000;
      ctx.clearRect(0, 0, W, H);
      for (const p of ps) {
        p.x += p.vx + Math.sin(t * 0.5 + p.ph) * 0.06;
        p.y += p.vy;
        if (p.y < -8) {
          p.y = H + 8;
          p.x = Math.random() * W;
        }
        if (p.x < -8) p.x = W + 8;
        if (p.x > W + 8) p.x = -8;

        const tw = 0.6 + 0.4 * Math.sin(t * 1.4 + p.ph);
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        if (p.neon) {
          ctx.fillStyle = `rgba(0,207,255,${p.o * tw})`;
          ctx.shadowColor = "#00cfff";
          ctx.shadowBlur = 8;
        } else {
          ctx.fillStyle = `rgba(90,105,125,${p.o * 0.5 * tw})`;
          ctx.shadowBlur = 0;
        }
        ctx.fill();
        ctx.shadowBlur = 0;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", init);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      className="pointer-events-none fixed inset-0 z-0 h-full w-full"
      aria-hidden="true"
    />
  );
}
