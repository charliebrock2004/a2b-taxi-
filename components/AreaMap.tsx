import { areas, base } from "@/lib/site";
import { InView } from "./InView";

// A drawn map rather than an embedded one: no third-party scripts, no cookies, instant to load.
// Towns are placed from their real coordinates with a simple equirectangular projection.
const B = { w: -4.3, e: -3.24, n: 56.48, s: 56.03 };
const W = 1000;
const K = Math.cos((56.3 * Math.PI) / 180); // a degree of longitude is shorter than one of latitude this far north
const H = Math.round((W * (B.n - B.s)) / ((B.e - B.w) * K));
const px = (lon: number) => ((lon - B.w) / (B.e - B.w)) * W;
const py = (lat: number) => ((B.n - lat) / (B.n - B.s)) * H;

export function AreaMap() {
  const cx = px(base.lon);
  const cy = py(base.lat);
  return (
    <InView className="map-wrap">
      <svg
        className="map reveal-lines"
        viewBox={`0 0 ${W} ${H}`}
        role="img"
        aria-label={`Map of the area A2B covers from Crieff: ${areas.map((a) => a.name).join(", ")}, with transfers onward to Scotland's airports, railway stations and ports.`}
      >
        {areas.map((a) => (
          <line key={a.name} className="map-route" pathLength={1} x1={cx} y1={cy} x2={px(a.lon)} y2={py(a.lat)} stroke="#C5C7CA" strokeWidth="1.5" />
        ))}
        {/* Onward routes, heading off the edge of the map */}
        <line x1={cx} y1={cy} x2={W - 30} y2={H - 46} stroke="#C5C7CA" strokeWidth="1.2" strokeDasharray="3 9" opacity=".7" />
        <line x1={cx} y1={cy} x2={40} y2={H - 46} stroke="#C5C7CA" strokeWidth="1.2" strokeDasharray="3 9" opacity=".7" />
        <text className="map-far" x={W - 30} y={H - 18} textAnchor="end">Edinburgh and its airport</text>
        <text className="map-far" x={30} y={H - 18}>Glasgow and its airport</text>
        {areas.map((a) => {
          const x = px(a.lon);
          const y = py(a.lat);
          const pos =
            a.label === "above" ? { x, y: y - 20, anchor: "middle" as const }
            : a.label === "below" ? { x, y: y + 40, anchor: "middle" as const }
            : a.label === "left" ? { x: x - 18, y: y + 8, anchor: "end" as const }
            : { x: x + 18, y: y + 8, anchor: "start" as const };
          return (
            <g key={a.name}>
              <circle cx={x} cy={y} r="7" fill="#171719" stroke="#C5C7CA" strokeWidth="2" />
              <text x={pos.x} y={pos.y} textAnchor={pos.anchor}>{a.name}</text>
            </g>
          );
        })}
        <circle cx={cx} cy={cy} r="22" fill="none" stroke="#C5C7CA" strokeWidth="1" opacity=".6" />
        <circle cx={cx} cy={cy} r="10" fill="#FFFFFF" />
        <text className="map-base" x={cx + 34} y={cy - 22}>CRIEFF</text>
      </svg>
    </InView>
  );
}
