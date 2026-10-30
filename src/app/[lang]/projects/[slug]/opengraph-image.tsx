import { getProject, projects } from "@/content/projects";
import { defaultLocale, hasLocale } from "@/i18n/config";
import { loadDictionary } from "@/i18n/get-dictionary";
import { ogContentType, ogSize, renderOgImage } from "@/lib/og";

// Imagen para compartir de cada caso de estudio.
export const alt = "Caso de estudio";
export const size = ogSize;
export const contentType = ogContentType;

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

// Las imágenes son rutas de API: el idioma se lee de `params`, no de next/root-params.
export default async function Image({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang, slug } = await params;
  const locale = hasLocale(lang) ? lang : defaultLocale;
  const project = getProject(slug);
  const dict = await loadDictionary(locale);

  return renderOgImage({
    eyebrow: `${dict.project.caseStudy} · ${project?.year ?? ""}`,
    title: project?.title ?? "",
    subtitle: project?.summary[locale],
  });
}
