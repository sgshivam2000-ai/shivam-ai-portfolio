import { useEffect, useRef } from "react";

type Pt = { x: number; y: number; z: number; w: number };

/**
 * Neon glass ribbon that weaves around the hero typography.
 * Renders on two stacked canvases (back / front) so the DOM title
 * sits *between* ribbon segments, creating a true weaving illusion.
 * Trails are achieved by fading canvas alpha each frame.
 */
export default function Ribbon() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const backRef = useRef<HTMLCanvasElement>(null);
  const frontRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current!;
    const back = backRef.current!;
    const front = frontRef.current!;
    const bctx = back.getContext("2d")!;
    const fctx = front.getContext("2d")!;

    let W = 0;
    let H = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      const r = wrap.getBoundingClientRect();
      W = r.width;
      H = r.height;
      for (const c of [back, front]) {
        c.width = Math.max(1, W * dpr);
        c.height = Math.max(1, H * dpr);
      }
      bctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      fctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(wrap);

    const mouse = { x: 0, y: 0, tx: 0, ty: 0 };
    const onMove = (e: MouseEvent) => {
      const r = wrap.getBoundingClientRect();
      mouse.tx = (e.clientX - r.left) / Math.max(1, r.width) - 0.5;
      mouse.ty = (e.clientY - r.top) / Math.max(1, r.height) - 0.5;
    };
    window.addEventListener("mousemove", onMove, { passive: true });

    const N = 170;
    const NEON = "0,207,255";

    const drawSeg = (
      ctx: CanvasRenderingContext2D,
      seg: Pt[],
      isFront: boolean
    ) => {
      if (seg.length < 3) return;
      const top: [number, number][] = [];
      const bot: [number, number][] = [];
      for (let i = 0; i < seg.length; i++) {
        const a = seg[Math.max(0, i - 1)];
        const b = seg[Math.min(seg.length - 1, i + 1)];
        const dx = b.x - a.x;
        const dy = b.y - a.y;
        const len = Math.hypot(dx, dy) || 1;
        const nx = -dy / len;
        const ny = dx / len;
        const p = seg[i];
        top.push([p.x + (nx * p.w) / 2, p.y + (ny * p.w) / 2]);
        bot.push([p.x - (nx * p.w) / 2, p.y - (ny * p.w) / 2]);
      }

      ctx.save();

      // glass body
      ctx.beginPath();
      ctx.moveTo(top[0][0], top[0][1]);
      for (const [x, y] of top) ctx.lineTo(x, y);
      for (let i = bot.length - 1; i >= 0; i--) ctx.lineTo(bot[i][0], bot[i][1]);
      ctx.closePath();
      const g = ctx.createLinearGradient(
        seg[0].x,
        seg[0].y,
        seg[seg.length - 1].x,
        seg[seg.length - 1].y
      );
      const a = isFront ? 0.2 : 0.11;
      g.addColorStop(0, `rgba(${NEON},${a * 0.35})`);
      g.addColorStop(0.5, `rgba(140,235,255,${a})`);
      g.addColorStop(1, `rgba(${NEON},${a * 0.35})`);
      ctx.fillStyle = g;
      ctx.fill();

      // thin glass edges
      ctx.lineWidth = 1;
      ctx.strokeStyle = `rgba(${NEON},${isFront ? 0.35 : 0.18})`;
      ctx.stroke();

      // bright neon core with bloom
      ctx.beginPath();
      ctx.moveTo(seg[0].x, seg[0].y);
      for (const p of seg) ctx.lineTo(p.x, p.y);
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      ctx.strokeStyle = isFront
        ? "rgba(80,225,255,0.95)"
        : `rgba(${NEON},0.5)`;
      ctx.lineWidth = isFront ? 2.4 : 1.6;
      ctx.shadowColor = "#00cfff";
      ctx.shadowBlur = isFront ? 22 : 12;
      ctx.stroke();

      // specular highlight
      ctx.beginPath();
      const off = isFront ? 0.28 : 0.22;
      ctx.moveTo(
        seg[0].x + (top[0][0] - seg[0].x) * off,
        seg[0].y + (top[0][1] - seg[0].y) * off
      );
      for (let i = 0; i < seg.length; i++) {
        ctx.lineTo(
          seg[i].x + (top[i][0] - seg[i].x) * off,
          seg[i].y + (top[i][1] - seg[i].y) * off
        );
      }
      ctx.shadowBlur = 0;
      ctx.strokeStyle = `rgba(255,255,255,${isFront ? 0.75 : 0.4})`;
      ctx.lineWidth = 0.9;
      ctx.stroke();

      ctx.restore();
    };

    let raf = 0;
    const t0 = performance.now();

    const draw = (now: number) => {
      const t = (now - t0) / 1000;
      mouse.x += (mouse.tx - mouse.x) * 0.045;
      mouse.y += (mouse.ty - mouse.y) * 0.045;

      // fade previous frame -> glowing trail
      for (const ctx of [bctx, fctx]) {
        ctx.save();
        ctx.globalCompositeOperation = "destination-out";
        ctx.fillStyle = "rgba(0,0,0,0.2)";
        ctx.fillRect(0, 0, W, H);
        ctx.restore();
      }

      const cy = H * 0.50;
      const ampY = Math.min(H * 0.23, 210);
      const px = mouse.x * 55;
      const py = mouse.y * 65;

      const pts: Pt[] = [];
      for (let i = 0; i < N; i++) {
        const u = i / (N - 1);
        const env = 1 - Math.pow(Math.abs(u - 0.5) * 2, 2.4) * 0.3;
        const x =
          (u * 1.35 - 0.175) * W + px * (1 - Math.abs(u - 0.5)) + Math.sin(u * 8 + t * 0.4) * 10;
        const y =
          cy +
          (Math.sin(u * Math.PI * 2.1 + t * 0.7) * 0.75 +
            Math.sin(u * Math.PI * 3.9 - t * 0.5 + 1.3) * 0.38 +
            Math.cos(u * Math.PI * 1.5 + t * 0.3) * 0.3) *
            ampY *
            env +
          py * (1 - Math.abs(u - 0.5) * 1.1) +
          (u - 0.5) * px * 0.9;
        const z = Math.sin(
          u * Math.PI * 3.2 + t * 0.52 + Math.sin(t * 0.22) * 1.4 + mouse.x * 0.7
        );
        const w =
          (10 + 34 * Math.abs(Math.sin(u * Math.PI * 2.6 - t * 0.6 + 0.6))) *
          (0.7 + 0.3 * (z * 0.5 + 0.5)) *
          env;
        pts.push({ x, y, z, w });
      }

      // split into front/back segments at z sign changes
      let seg: Pt[] = [];
      let sign = Math.sign(pts[0].z) || 1;
      const flush = () => {
        drawSeg(sign > 0 ? fctx : bctx, seg, sign > 0);
        seg = [];
      };
      for (const p of pts) {
        const s = Math.sign(p.z) || sign;
        if (s !== sign) {
          seg.push(p);
          flush();
          sign = s;
        }
        seg.push(p);
      }
      flush();

      raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <div ref={wrapRef} className="pointer-events-none absolute inset-0">
      <canvas
        ref={backRef}
        className="absolute inset-0 h-full w-full"
        style={{ zIndex: 1 }}
      />
      <canvas
        ref={frontRef}
        className="absolute inset-0 h-full w-full"
        style={{ zIndex: 3 }}
      />
    </div>
  );
}
