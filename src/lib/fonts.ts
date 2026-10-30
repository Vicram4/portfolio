import { Instrument_Serif, Inter_Tight, JetBrains_Mono } from "next/font/google";

// next/font descarga las fuentes al compilar y las sirve desde el propio dominio:
// sin peticiones a Google y sin saltos de diseño mientras cargan.

/** Titulares: serif editorial con carácter. */
const display = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
});

/** Texto: sans contemporánea y muy legible. */
const sans = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter-tight",
});

/** Datos técnicos: la «voz del desarrollador». */
const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export const fontVariables = [display.variable, sans.variable, mono.variable].join(" ");
