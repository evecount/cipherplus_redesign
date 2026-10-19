import { useEffect, useRef } from "react";

/** Interactive glowing lattice: a 3D-projected grid of lattice points that reacts to the cursor. */
export function Lattice({ className }: { className?: string }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current!;
    const ctx = canvas.getContext("2d")!;
    const css = getComputedStyle(document.documentElement);
    const primary = css.getPropertyValue("--primary").trim();
    const glow = css.getPropertyValue("--primary-glow").trim();
    let w = 0, h = 0, raf = 0;
    const mouse = { x: -9999, y: -9999, tx: 0, ty: 0 };
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const N = 9;
    const pts: { x: number; y: number; z: number }[] = [];
    for (let i = 0; i < N; i++)
      for (let j = 0; j < N; j++)
        for (let k = 0; k < 3; k++)
          pts.push({ x: i - (N - 1) / 2, y: j - (N - 1) / 2, z: k - 1 });

    const resize = () => {
      const r = canvas.getBoundingClientRect();
      w = r.width; h = r.height;
      canvas.width = w * dpr; canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    const onMove = (e: PointerEvent) => {
      const r = canvas.getBoundingClientRect();
      mouse.x = e.clientX - r.left; mouse.y = e.clientY - r.top;
      mouse.tx = (mouse.x / w - 0.5); mouse.ty = (mouse.y / h - 0.5);
    };
    const onLeave = () => { mouse.x = -9999; mouse.y = -9999; };

    let rx = 0, ry = 0;
    const draw = (t: number) => {
      ctx.clearRect(0, 0, w, h);
      const time = t * 0.00015;
      ry += ((time + mouse.tx * 0.8) - ry) * 0.05;
      rx += ((0.55 + mouse.ty * 0.5) - rx) * 0.05;
      const s = Math.min(w, h) / 11;
      const cy = Math.cos(ry), sy = Math.sin(ry), cx = Math.cos(rx), sx = Math.sin(rx);
      const proj = pts.map((p) => {
        const wave = Math.sin(p.x * 0.7 + t * 0.0012) * Math.cos(p.y * 0.7 + t * 0.001) * 0.25;
        let x = p.x * cy - (p.z * 1.6 + wave) * sy;
        let z = p.x * sy + (p.z * 1.6 + wave) * cy;
        const y = p.y * cx - z * sx;
        z = p.y * sx + z * cx;
        const f = 9 / (9 + z);
        x = w / 2 + x * s * f; const py = h / 2 + y * s * f;
        const d = Math.hypot(x - mouse.x, py - mouse.y);
        const near = Math.max(0, 1 - d / 160);
        return { x, y: py, f, near };
      });
      // edges between lattice neighbours
      const idx = (i: number, j: number, k: number) => (i * N + j) * 3 + k;
      ctx.lineWidth = 1;
      for (let i = 0; i < N; i++)
        for (let j = 0; j < N; j++)
          for (let k = 0; k < 3; k++) {
            const a = proj[idx(i, j, k)]!;
            const nbrs = [i + 1 < N && idx(i + 1, j, k), j + 1 < N && idx(i, j + 1, k), k + 1 < 3 && idx(i, j, k + 1)];
            for (const n of nbrs) {
              if (n === false) continue;
              const b = proj[n]!;
              const e = Math.max(a.near, b.near);
              ctx.strokeStyle = e > 0.05 ? `color-mix(in oklch, ${glow} ${Math.round(40 + e * 60)}%, transparent)` : `color-mix(in oklch, ${primary} ${Math.round(10 * a.f)}%, transparent)`;
              ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
            }
          }
      // nodes
      for (const p of proj) {
        const r = 1.4 * p.f + p.near * 3.5;
        if (p.near > 0.05) {
          ctx.shadowColor = glow; ctx.shadowBlur = 18 * p.near;
        } else ctx.shadowBlur = 0;
        ctx.fillStyle = p.near > 0.05 ? glow : `color-mix(in oklch, ${primary} ${Math.round(45 * p.f)}%, transparent)`;
        ctx.beginPath(); ctx.arc(p.x, p.y, r, 0, Math.PI * 2); ctx.fill();
      }
      ctx.shadowBlur = 0;
      // quantum vectors: shortest-vector arrows from origin to cursor-nearest nodes
      const o = proj[idx((N - 1) / 2, (N - 1) / 2, 1)]!;
      const hot = proj.filter((p) => p.near > 0.35).slice(0, 4);
      for (const p of hot) {
        const g = ctx.createLinearGradient(o.x, o.y, p.x, p.y);
        g.addColorStop(0, primary); g.addColorStop(1, glow);
        ctx.strokeStyle = g; ctx.lineWidth = 2;
        ctx.shadowColor = glow; ctx.shadowBlur = 12;
        ctx.beginPath(); ctx.moveTo(o.x, o.y); ctx.lineTo(p.x, p.y); ctx.stroke();
      }
      ctx.shadowBlur = 0;
      ctx.fillStyle = primary;
      ctx.beginPath(); ctx.arc(o.x, o.y, 4, 0, Math.PI * 2); ctx.fill();
      raf = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener("resize", resize);
    canvas.addEventListener("pointermove", onMove);
    canvas.addEventListener("pointerleave", onLeave);
    raf = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("pointermove", onMove);
      canvas.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return <canvas ref={ref} className={className} aria-hidden="true" />;
}
