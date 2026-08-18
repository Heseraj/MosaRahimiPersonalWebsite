import { ImageResponse } from "next/og";

export const alt = "Mosa Rahimi — Now I'm learning how machines learn.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "stretch",
          background: "#f3f0e8",
          color: "#102033",
          display: "flex",
          height: "100%",
          padding: 58,
          position: "relative",
          width: "100%",
        }}
      >
        <div
          style={{
            backgroundImage:
              "linear-gradient(rgba(16,32,51,.06) 1px, transparent 1px), linear-gradient(90deg, rgba(16,32,51,.06) 1px, transparent 1px)",
            backgroundSize: "54px 54px",
            display: "flex",
            inset: 0,
            position: "absolute",
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            position: "relative",
            width: "100%",
          }}
        >
          <div style={{ alignItems: "center", display: "flex", gap: 18 }}>
            <div
              style={{
                alignItems: "center",
                background: "#102033",
                color: "#e7a92e",
                display: "flex",
                fontSize: 22,
                fontWeight: 800,
                height: 54,
                justifyContent: "center",
                width: 54,
              }}
            >
              MR
            </div>
            <span
              style={{
                fontSize: 18,
                fontWeight: 800,
                letterSpacing: 2,
                textTransform: "uppercase",
              }}
            >
              Mosa Rahimi
            </span>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span
              style={{
                color: "#2878ff",
                fontFamily: "serif",
                fontSize: 84,
                fontStyle: "italic",
                letterSpacing: -5,
              }}
            >
              Now I&apos;m learning
            </span>
            <span
              style={{
                fontFamily: "serif",
                fontSize: 84,
                letterSpacing: -5,
                marginTop: -8,
              }}
            >
              how machines learn.
            </span>
          </div>
          <div
            style={{
              borderTop: "1px solid rgba(16,32,51,.2)",
              display: "flex",
              fontSize: 14,
              fontWeight: 700,
              justifyContent: "space-between",
              letterSpacing: 2,
              paddingTop: 22,
              textTransform: "uppercase",
            }}
          >
            <span>The deliberate pivot · AI &amp; data science</span>
            <span>Wharton MBA · Harvard MPA · Amazon</span>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
