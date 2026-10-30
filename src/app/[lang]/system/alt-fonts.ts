import { Bricolage_Grotesque, Geist, Geist_Mono } from "next/font/google";
import type { CSSProperties } from "react";

// Opción B de la comparativa. Solo se importa en /sistema, así que estas
// fuentes no se descargan en el resto de la web.

const display = Bricolage_Grotesque({ subsets: ["latin"], variable: "--font-bricolage" });
const sans = Geist({ subsets: ["latin"], variable: "--font-geist" });
const mono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" });

export const altFontVariables = [display.variable, sans.variable, mono.variable].join(" ");

/** Redefine los tokens de fuente dentro de un contenedor. */
export const altFontTokens = {
  "--font-display": "var(--font-bricolage), sans-serif",
  "--font-sans": "var(--font-geist), sans-serif",
  "--font-mono": "var(--font-geist-mono), monospace",
} as CSSProperties;
