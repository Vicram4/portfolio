import { NextResponse, type NextRequest } from "next/server";
import { projectSlugs } from "@/content/projects/slugs";
import { defaultLocale, hasLocale, LOCALE_COOKIE, type Locale } from "@/i18n/config";
import { href, isSectionKey, routeKeyFromSegment } from "@/i18n/routes";

/**
 * Se ejecuta antes de cada petición de página y se encarga de tres cosas:
 *
 * 1. Sin idioma en la URL ("/", "/proyectos"): redirige al idioma preferido.
 * 2. URL traducida ("/es/proyectos"): la reescribe a la carpeta real
 *    ("/es/projects") sin que cambie lo que ve el usuario.
 * 3. Proyecto inexistente ("/es/proyectos/no-existe"): responde con la 404.
 * 4. Recuerda en una cookie el último idioma visitado.
 */
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const [locale, segment, ...rest] = pathname.split("/").filter(Boolean);

  if (!hasLocale(locale)) {
    const url = request.nextUrl.clone();
    url.pathname = `/${detectLocale(request)}${pathname === "/" ? "" : pathname}`;
    return NextResponse.redirect(url);
  }

  let response: NextResponse | undefined;

  if (segment) {
    const key = routeKeyFromSegment(locale, segment);

    if (key === "projects" && rest.length > 0 && !isProjectPath(rest)) {
      // Proyecto inexistente: 404 real antes de renderizar (sin esto, la página
      // empezaría a enviarse con código 200). La ruta comodín muestra la 404 traducida.
      const url = request.nextUrl.clone();
      url.pathname = `/${locale}/404`;
      response = NextResponse.rewrite(url);
    } else if (key && key !== segment) {
      // "/es/proyectos/..." → "/es/projects/..." (interno)
      const url = request.nextUrl.clone();
      url.pathname = "/" + [locale, key, ...rest].join("/");
      response = NextResponse.rewrite(url);
    } else if (!key && isSectionKey(segment)) {
      // "/es/projects" → "/es/proyectos": una sola URL pública por página.
      // (También las imágenes para compartir, que Next.js anuncia con la ruta interna:
      // las redes sociales siguen la redirección y reciben la imagen ya generada.)
      const url = request.nextUrl.clone();
      url.pathname = href(locale, segment, ...rest);
      return NextResponse.redirect(url, 308);
    }
  }

  response ??= NextResponse.next();

  if (request.cookies.get(LOCALE_COOKIE)?.value !== locale) {
    response.cookies.set(LOCALE_COOKIE, locale, {
      path: "/",
      maxAge: 60 * 60 * 24 * 365,
      sameSite: "lax",
    });
  }

  return response;
}

/** ¿Es "<slug>" de un proyecto publicado (o su imagen para compartir)? */
function isProjectPath(rest: string[]): boolean {
  const [slug, extra, ...more] = rest;
  const validExtra = extra === undefined || extra === "opengraph-image";
  return validExtra && more.length === 0 && (projectSlugs as readonly string[]).includes(slug);
}

/** Cookie (última elección) → idioma del navegador → español. */
function detectLocale(request: NextRequest): Locale {
  const saved = request.cookies.get(LOCALE_COOKIE)?.value;
  if (hasLocale(saved)) return saved;

  // "en-GB,en;q=0.9,es;q=0.8" → ["en", "en", "es"] ordenados por preferencia
  const preferred = (request.headers.get("accept-language") ?? "")
    .split(",")
    .map((part) => {
      const [tag, quality] = part.trim().split(";q=");
      return {
        language: tag.split("-")[0].toLowerCase(),
        quality: quality ? Number(quality) : 1,
      };
    })
    .sort((a, b) => b.quality - a.quality);

  for (const { language } of preferred) {
    if (hasLocale(language)) return language;
  }

  return defaultLocale;
}

export const config = {
  // Todo excepto archivos internos de Next/Vercel, los iconos generados
  // (/icon, /apple-icon) y archivos con extensión (imágenes, PDF, sitemap.xml…).
  matcher: ["/((?!_next|_vercel|icon|apple-icon|.*\\..*).*)"],
};
