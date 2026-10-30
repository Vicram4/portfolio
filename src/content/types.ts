import type { StaticImageData } from "next/image";
import type { Locale } from "@/i18n/config";

/** Un valor en cada idioma. TypeScript exige que estén todos. */
export type Localized<T = string> = Record<Locale, T>;

export type Project = {
  /** Identificador en la URL: /es/proyectos/<slug>. Igual en todos los idiomas. */
  slug: string;
  title: string;
  year: number;
  /** Aparece en «Proyectos destacados» de Inicio. */
  featured: boolean;
  summary: Localized;
  role: Localized;
  /** Tecnologías principales, de más a menos relevante. */
  stack: string[];
  links: { live?: string; repo?: string };
  cover: { src: StaticImageData; alt: Localized };
};

export type Service = {
  title: Localized;
  description: Localized;
  /** Proyecto real que lo demuestra. Sin `href`, se muestra como texto. */
  example?: { label: Localized; href?: string };
};
