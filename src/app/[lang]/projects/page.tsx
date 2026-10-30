import type { Metadata } from "next";
import Link from "next/link";
import { ProjectCover } from "@/components/projects/project-cover";
import { SectionHeading } from "@/components/ui/section-heading";
import { Tag } from "@/components/ui/tag";
import { projects } from "@/content/projects";
import { getDictionary, getLocale } from "@/i18n/get-dictionary";
import { href } from "@/i18n/routes";
import { pageMetadata } from "@/lib/metadata";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const dict = await getDictionary();
  return pageMetadata({
    locale,
    route: "projects",
    title: dict.nav.projects,
    description: dict.projects.title,
  });
}

export default async function ProjectsPage() {
  const locale = await getLocale();
  const dict = await getDictionary();

  return (
    <section className="shell section-y">
      <SectionHeading
        as="h1"
        index="01"
        eyebrow={dict.projects.eyebrow}
        title={dict.projects.title}
      />

      {/* Índice editorial: una fila por proyecto, válido para 1 o para 20. */}
      <ol className="mt-16 border-t border-ink/15 md:mt-24">
        {projects.map((project, index) => (
          <li key={project.slug} className="border-b border-ink/15">
            <article className="group relative grid-editorial gap-y-8 py-10 md:py-14">
              <ProjectCover
                project={project}
                locale={locale}
                sizes="(width >= 48rem) 58vw, 100vw"
                priority={index === 0}
                className="col-span-full transition-opacity duration-500 group-hover:opacity-90 md:col-span-7"
              />

              <div className="col-span-full flex flex-col md:col-span-5">
                <p className="flex justify-between label text-ink-muted">
                  <span className="text-accent-ink">{String(index + 1).padStart(2, "0")}</span>
                  <span>{project.year}</span>
                </p>
                <h2 className="mt-6 font-display text-headline">
                  {/* El enlace cubre toda la fila (after:inset-0): toda ella es clicable. */}
                  <Link
                    href={href(locale, "projects", project.slug)}
                    className="after:absolute after:inset-0"
                  >
                    {project.title}
                  </Link>
                </h2>
                <p className="mt-4 text-ink-muted">{project.summary[locale]}</p>
                <ul className="mt-6 flex flex-wrap gap-1.5">
                  {project.stack.map((tech) => (
                    <li key={tech}>
                      <Tag>{tech}</Tag>
                    </li>
                  ))}
                </ul>
                <p
                  aria-hidden="true"
                  className="mt-8 font-medium transition-transform duration-500 ease-out-expo group-hover:translate-x-1 md:mt-auto md:pt-8"
                >
                  {dict.project.viewCase} →
                </p>
              </div>
            </article>
          </li>
        ))}
      </ol>

      <p className="mt-10 label text-ink-muted">{dict.projects.moreComing}</p>
    </section>
  );
}
