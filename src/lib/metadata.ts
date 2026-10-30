import type { Metadata } from "next";
import { profile } from "@/content/profile";
import { defaultLocale, locales, type Locale } from "@/i18n/config";
import { href, type RouteKey } from "@/i18n/routes";

const ogLocales: Record<Locale, string> = { es: "es_ES", en: "en_GB" };

/**
 * Metadatos de una página: título, descripción, URL canónica, versiones en cada
 * idioma (hreflang) y Open Graph. Las URLs son relativas: se completan con
 * `metadataBase` (definido en el layout).
 *
 * @example pageMetadata({ locale, route: "projects", rest: ["cafe-sinnoh"], title, description })
 */
export function pageMetadata({
  locale,
  route,
  rest = [],
  title,
  description,
}: {
  locale: Locale;
  route: RouteKey;
  rest?: string[];
  title?: string;
  description: string;
}): Metadata {
  const url = href(locale, route, ...rest);

  return {
    ...(title && { title }),
    description,
    alternates: {
      canonical: url,
      languages: {
        ...Object.fromEntries(locales.map((l) => [l, href(l, route, ...rest)])),
        "x-default": href(defaultLocale, route, ...rest),
      },
    },
    openGraph: {
      type: "website",
      siteName: profile.name,
      title: title ? `${title} · ${profile.name}` : `${profile.name} — ${profile.role}`,
      description,
      url,
      locale: ogLocales[locale],
      alternateLocale: locales.filter((l) => l !== locale).map((l) => ogLocales[l]),
    },
  };
}
