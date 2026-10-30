import type { MetadataRoute } from "next";
import { projects } from "@/content/projects";
import { defaultLocale, locales } from "@/i18n/config";
import { href, type RouteKey } from "@/i18n/routes";
import { siteUrl } from "@/lib/site";

// Mapa del sitio para buscadores: cada página en cada idioma, con sus alternativas.
// Excluye los proyectos marcados como noindex.
const pages: { route: RouteKey; rest?: string[] }[] = [
  { route: "home" },
  { route: "projects" },
  ...projects
    .filter((p) => !p.noindex)
    .map((p) => ({ route: "projects" as const, rest: [p.slug] })),
  { route: "about" },
  { route: "contact" },
  { route: "privacy" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.flatMap(({ route, rest = [] }) =>
    locales.map((locale) => ({
      url: `${siteUrl}${href(locale, route, ...rest)}`,
      alternates: {
        languages: {
          ...Object.fromEntries(locales.map((l) => [l, `${siteUrl}${href(l, route, ...rest)}`])),
          "x-default": `${siteUrl}${href(defaultLocale, route, ...rest)}`,
        },
      },
    })),
  );
}
