import { ImageResponse } from "next/og";
import { profile } from "@/content/profile";
import { loadFont } from "@/lib/og-fonts";
import { siteUrl } from "@/lib/site";

// Imágenes para compartir en redes (Open Graph), generadas al compilar con el
// mismo lenguaje visual de la web. Fuentes TTF locales (licencia OFL en assets/fonts).

export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";

const colors = { paper: "#f3eee6", ink: "#151412", muted: "#5c574f", accent: "#ff5a1f" };

export async function renderOgImage({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  const [serif, mono] = await Promise.all([
    loadFont("InstrumentSerif-Regular.ttf"),
    loadFont("JetBrainsMono-Regular.ttf"),
  ]);
  const host = siteUrl.replace(/^https?:\/\//, "");

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "64px 72px",
        backgroundColor: colors.paper,
        color: colors.ink,
        fontFamily: "Instrument Serif",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontFamily: "JetBrains Mono",
          fontSize: 22,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          color: colors.muted,
        }}
      >
        <span>{eyebrow}</span>
        <span>{profile.location}</span>
      </div>

      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", fontSize: 132, lineHeight: 0.95, letterSpacing: "-0.01em" }}>
          {title}
          <span style={{ color: colors.accent }}>.</span>
        </div>
        {subtitle && (
          <div
            style={{
              marginTop: 28,
              fontSize: 40,
              lineHeight: 1.2,
              color: colors.muted,
              maxWidth: 940,
            }}
          >
            {subtitle}
          </div>
        )}
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderTop: `1px solid rgba(21, 20, 18, 0.15)`,
          paddingTop: 24,
          fontFamily: "JetBrains Mono",
          fontSize: 22,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
        }}
      >
        <span>
          {profile.name} — {profile.role}
        </span>
        <span style={{ color: colors.muted }}>{host}</span>
      </div>
    </div>,
    {
      ...ogSize,
      fonts: [
        { name: "Instrument Serif", data: serif, style: "normal", weight: 400 },
        { name: "JetBrains Mono", data: mono, style: "normal", weight: 400 },
      ],
    },
  );
}
