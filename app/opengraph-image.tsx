import { ImageResponse } from "next/og";
import { site } from "@/data/site";

export const dynamic = "force-static";

export const alt = `${site.name} — ${site.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: "#0a0a0f",
        padding: "80px",
        color: "#f5f5f7",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
        <div
          style={{
            width: 64,
            height: 64,
            borderRadius: 16,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "linear-gradient(135deg, #4f7cff, #8b5cf6)",
            fontSize: 30,
            fontWeight: 700,
            color: "#ffffff",
          }}
        >
          MB
        </div>
        <div style={{ fontSize: 28, color: "#a1a1aa" }}>madhubashyam.net</div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
        <div style={{ fontSize: 76, fontWeight: 700, lineHeight: 1.05 }}>{site.name}</div>
        <div style={{ fontSize: 38, fontWeight: 600, color: "#4f7cff" }}>{site.role}</div>
        <div style={{ fontSize: 26, color: "#a1a1aa" }}>
          Security Operations · Threat Detection · Incident Response
        </div>
      </div>
    </div>,
    { ...size },
  );
}
