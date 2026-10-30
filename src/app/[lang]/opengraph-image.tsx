import { profile } from "@/content/profile";
import { defaultLocale, hasLocale, locales } from "@/i18n/config";
import { loadDictionary } from "@/i18n/get-dictionary";
import { ogContentType, ogSize, renderOgImage } from "@/lib/og";

// Imagen para compartir de la web (Inicio y páginas sin imagen propia).
export const alt = `${profile.name} — ${profile.role}`;
export const size = ogSize;
export const contentType = ogContentType;

// Una imagen por idioma, generada al compilar.
export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

// Las imágenes son rutas de API: el idioma se lee de `params`, no de next/root-params.
export default async function Image({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = await loadDictionary(hasLocale(lang) ? lang : defaultLocale);

  return renderOgImage({
    eyebrow: profile.role,
    title: profile.name,
    subtitle: dict.home.intro,
  });
}
