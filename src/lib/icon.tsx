import { ImageResponse } from "next/og";
import { loadFont } from "@/lib/og-fonts";

/** Monograma «V.» sobre crema: la misma firma que el nombre de la cabecera. */
export async function renderIcon(size: number) {
  const serif = await loadFont("InstrumentSerif-Regular.ttf");

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f3eee6",
        color: "#151412",
        fontFamily: "Instrument Serif",
        fontSize: size * 0.82,
        lineHeight: 1,
        paddingTop: size * 0.06,
      }}
    >
      V<span style={{ color: "#ff5a1f" }}>.</span>
    </div>,
    {
      width: size,
      height: size,
      fonts: [{ name: "Instrument Serif", data: serif, style: "normal", weight: 400 }],
    },
  );
}
