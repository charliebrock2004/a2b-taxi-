import { ImageResponse } from "next/og";

export const alt = "A2B Private Hire, Crieff — private hire and airport transfers across Perthshire";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", background: "#171719", color: "#fff", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: 80 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 24, color: "#C5C7CA", fontSize: 34 }}>
          <span>A</span>
          <div style={{ width: 420, height: 2, background: "#C5C7CA" }} />
          <span>B</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 104, letterSpacing: 2 }}>A2B PRIVATE HIRE</div>
          <div style={{ fontSize: 40, color: "#C5C7CA", marginTop: 12 }}>Crieff, Perthshire</div>
        </div>
        <div style={{ fontSize: 56, color: "#C5C7CA" }}>07708 010432</div>
      </div>
    ),
    size,
  );
}
