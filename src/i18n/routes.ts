import { hasLocale, type Locale } from "./config";

/**
 * Mapa de URLs traducidas.
 *
 * La clave es el nombre de la carpeta real dentro de `src/app/[lang]/`.
 * Los valores son el segmento público que ve el usuario en cada idioma.
 * `proxy.ts` traduce de uno a otro en cada petición.
 */
export const routes = {
  home: { es: "", en: "" },
  projects: { es: "proyectos", en: "projects" },
  about: { es: "sobre-mi", en: "about" },
  contact: { es: "contacto", en: "contact" },
  privacy: { es: "privacidad", en: "privacy" },
} as const satisfies Record<string, Record<Locale, string>>;

export type RouteKey = keyof typeof routes;

type SectionKey = Exclude<RouteKey, "home">;

const sectionKeys = Object.keys(routes).filter((key): key is SectionKey => key !== "home");

/**
 * Construye la URL pública de una página.
 *
 * @example href("es", "projects", "cafe-sinnoh") // "/es/proyectos/cafe-sinnoh"
 */
export function href(locale: Locale, route: RouteKey = "home", ...rest: string[]): string {
  return "/" + [locale, routes[route][locale], ...rest].filter(Boolean).join("/");
}

/** Segmento público ("proyectos") → clave interna ("projects"). */
export function routeKeyFromSegment(locale: Locale, segment: string): SectionKey | undefined {
  return sectionKeys.find((key) => routes[key][locale] === segment);
}

/** ¿Es este segmento el nombre de una carpeta interna? */
export function isSectionKey(segment: string): segment is SectionKey {
  return (sectionKeys as string[]).includes(segment);
}

/**
 * Identifica la página a partir de una URL.
 *
 * Acepta tanto la URL pública ("/es/proyectos") como la interna ("/es/projects"):
 * al prerenderizar, Next.js ve la interna; en el navegador, la pública.
 * Ambas deben producir el mismo resultado para que el HTML coincida.
 */
export function parsePathname(pathname: string): { route: RouteKey; rest: string[] } | undefined {
  const [locale, segment, ...rest] = pathname.split("/").filter(Boolean);

  if (!hasLocale(locale)) return undefined;
  if (!segment) return { route: "home", rest };

  const route =
    routeKeyFromSegment(locale, segment) ?? (isSectionKey(segment) ? segment : undefined);
  return route ? { route, rest } : undefined;
}

/**
 * Devuelve la misma página en otro idioma.
 * Si la página actual no se reconoce (p. ej. un 404), lleva al inicio.
 *
 * @example localizePathname("/es/proyectos/cafe-sinnoh", "en") // "/en/projects/cafe-sinnoh"
 */
export function localizePathname(pathname: string, target: Locale): string {
  const page = parsePathname(pathname);
  return page ? href(target, page.route, ...page.rest) : href(target);
}
