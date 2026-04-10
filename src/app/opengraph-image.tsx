import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Decision Foundry AI - Agentic AI for Business Process Automation";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #0f1b3d 0%, #1a2d5e 50%, #0d1530 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "60px 80px",
        }}
      >
        {/* Logo */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginBottom: "40px",
          }}
        >
          <div
            style={{
              width: "56px",
              height: "56px",
              borderRadius: "12px",
              background: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "24px",
              fontWeight: 700,
              color: "#0f1b3d",
            }}
          >
            DF
          </div>
          <span
            style={{
              fontSize: "32px",
              fontWeight: 600,
              color: "white",
              letterSpacing: "-0.5px",
            }}
          >
            Decision Foundry.ai
          </span>
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: "56px",
            fontWeight: 700,
            color: "white",
            textAlign: "center",
            lineHeight: 1.2,
            maxWidth: "900px",
          }}
        >
          Smart AI Agents to Automate Your{" "}
          <span style={{ color: "#7dd3fc" }}>Business Processes</span>
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: "22px",
            color: "rgba(255,255,255,0.7)",
            textAlign: "center",
            marginTop: "24px",
            maxWidth: "700px",
            lineHeight: 1.5,
          }}
        >
          Agentic AI solutions with human-in-the-loop workflows
        </div>

        {/* URL */}
        <div
          style={{
            position: "absolute",
            bottom: "40px",
            fontSize: "18px",
            color: "rgba(255,255,255,0.5)",
          }}
        >
          decisionfoundry.ai
        </div>
      </div>
    ),
    { ...size }
  );
}
