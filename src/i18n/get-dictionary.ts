import { notFound } from "next/navigation";
import { lang } from "next/root-params";
import { hasLocale, type Locale } from "./config";
import type { Dictionary } from "./dictionaries/es";

// Cada idioma se carga por separado y solo en el servidor:
// los textos no aumentan el JavaScript que descarga el navegador.
const dictionaries = {
  es: () => import("./dictionaries/es").then((module) => module.default),
  en: () => import("./dictionaries/en").then((module) => module.default),
} satisfies Record<Locale, () => Promise<Dictionary>>;

/** Idioma de la petición actual, leído del segmento `[lang]` de la URL. */
export async function getLocale(): Promise<Locale> {
  const locale = await lang();
  if (!hasLocale(locale)) notFound();
  return locale;
}

export async function getDictionary(): Promise<Dictionary> {
  return dictionaries[await getLocale()]();
}
