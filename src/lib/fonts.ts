import { Instrument_Serif, Inter_Tight, JetBrains_Mono } from "next/font/google";

// next/font descarga las fuentes al compilar y las sirve desde el propio dominio:
// sin peticiones a Google y sin saltos de diseño mientras cargan.

/** Titulares: serif editorial con carácter. */
// Sin cursiva: no se usa en la web y ahorra una descarga (~15 KB).
const display = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-instrument-serif",
});

/** Texto: sans contemporánea y muy legible. */
const sans = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter-tight",
});

/** Datos técnicos: la «voz del desarrollador». */
// Sin precarga: solo aparece en etiquetas pequeñas, nunca en el contenido principal,
// así que no compite con las otras fuentes por llegar primero.
const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  preload: false,
});

export const fontVariables = [display.variable, sans.variable, mono.variable].join(" ");
