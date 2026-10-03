// Generates the contour-line textures in public/textures. Run: node scripts/make-contours.mjs
import { writeFileSync } from "node:fs";

function texture(seed, peaks) {
  let s = seed;
  const rnd = () => ((s = (s * 16807) % 2147483647) / 2147483647);
  const W = 1600, H = 1000;
  let d = "";
  for (const [cx, cy] of peaks) {
    const p = [rnd() * 6, rnd() * 6, rnd() * 6];
    for (let r = 36; r < 900; r += 34 + rnd() * 14) {
      const pts = [];
      for (let i = 0; i < 44; i++) {
        const t = (i / 44) * Math.PI * 2;
        const k = 1 + 0.2 * Math.sin(3 * t + p[0]) + 0.11 * Math.sin(5 * t + p[1] + r * 0.004) + 0.07 * Math.sin(2 * t + p[2]);
        pts.push(`${(cx + Math.cos(t) * r * k * 1.35).toFixed(0)} ${(cy + Math.sin(t) * r * k).toFixed(0)}`);
      }
      d += `M${pts.join("L")}Z`;
    }
  }
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" preserveAspectRatio="xMidYMid slice"><path d="${d}" fill="none" stroke="#C5C7CA" stroke-opacity=".13" stroke-width="1.2"/></svg>`;
}

writeFileSync("public/textures/contours-a.svg", texture(11, [[1180, 300], [260, 880]]));
writeFileSync("public/textures/contours-b.svg", texture(47, [[380, 240], [1400, 820]]));
