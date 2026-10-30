import type { StaticImageData } from "next/image";
import type { Locale } from "@/i18n/config";

/** Un valor en cada idioma. TypeScript exige que estén todos. */
export type Localized<T = string> = Record<Locale, T>;

export type ProjectImage = { src: StaticImageData; alt: Localized };

export type Project = {
  /** Identificador en la URL: /es/proyectos/<slug>. Igual en todos los idiomas. */
  slug: string;
  title: string;
  year: number;
  /** Aparece en «Proyectos destacados» de Inicio. */
  featured: boolean;
  /** Excluye el caso de estudio de los buscadores (sigue siendo accesible por enlace). */
  noindex?: boolean;
  summary: Localized;
  role: Localized;
  duration: Localized;
  /** Tecnologías principales, de más a menos relevante (fichas y tarjetas). */
  stack: string[];
  links: { live?: string; repo?: string };
  cover: ProjectImage;

  // --- Caso de estudio ------------------------------------------------------
  /** Cifras destacadas. Solo datos verificables. */
  stats: { value: string; label: Localized }[];
  goal: Localized;
  challenge: Localized;
  features: { group: Localized; items: Localized<string[]> }[];
  decisions: { title: Localized; text: Localized }[];
  /** Stack completo, agrupado por capa. */
  stackDetail: { layer: Localized; items: string[] }[];
  gallery: (ProjectImage & { caption: Localized; size: "large" | "tall" | "half" })[];
  /** Cómo se hizo y quién hizo qué. */
  credits: Localized;
  /** Aviso legal u otra nota al pie del caso de estudio. */
  notice?: Localized;
};

export type Service = {
  title: Localized;
  description: Localized;
  /** Proyecto real que lo demuestra (enlaza a su caso de estudio) o solo texto. */
  example?: { label: Localized; projectSlug?: string };
};
