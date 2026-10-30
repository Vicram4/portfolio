import Link from "next/link";
import { ProjectCover } from "@/components/projects/project-cover";
import { ProjectLinks } from "@/components/projects/project-links";
import { SpecRow } from "@/components/projects/spec-row";
import { SectionHeading } from "@/components/ui/section-heading";
import { Tag } from "@/components/ui/tag";
import { TextLink } from "@/components/ui/text-link";
import { featuredProjects } from "@/content/projects";
import type { Project } from "@/content/types";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/es";
import { getDictionary, getLocale } from "@/i18n/get-dictionary";
import { href } from "@/i18n/routes";
import { cn } from "@/lib/cn";

export async function FeaturedProjects() {
  const locale = await getLocale();
  const dict = await getDictionary();
  const t = dict.home.featured;

  return (
    <section className="shell section-y">
      <SectionHeading index="01" eyebrow={t.eyebrow} title={t.title} />

      <div className="mt-16 space-y-24 md:mt-24 md:space-y-32">
        {featuredProjects.map((project, index) => (
          <FeaturedProject
            key={project.slug}
            project={project}
            locale={locale}
            dict={dict}
            reversed={index % 2 === 1}
          />
        ))}
      </div>

      <TextLink href={href(locale, "projects")} className="mt-20 text-lg">
        {t.viewAll} →
      </TextLink>
    </section>
  );
}

/** Proyecto a gran tamaño con ficha técnica. Los impares invierten imagen y texto. */
function FeaturedProject({
  project,
  locale,
  dict,
  reversed,
}: {
  project: Project;
  locale: Locale;
  dict: Dictionary;
  reversed: boolean;
}) {
  const t = dict.project;
  const caseHref = href(locale, "projects", project.slug);

  return (
    <article className="grid-editorial reveal gap-y-8">
      {/* La imagen repite el enlace del título: se oculta a lectores de pantalla y teclado. */}
      <Link
        href={caseHref}
        tabIndex={-1}
        aria-hidden="true"
        className={cn("group col-span-full md:col-span-8", reversed && "md:col-start-5")}
      >
        <ProjectCover
          project={project}
          locale={locale}
          sizes="(width >= 48rem) 66vw, 100vw"
          className="transition-opacity duration-500 group-hover:opacity-90"
        />
      </Link>

      <div
        className={cn(
          "col-span-full flex flex-col md:col-span-4 md:row-start-1",
          reversed ? "md:col-start-1" : "md:col-start-9",
        )}
      >
        <h3 className="font-display text-title">
          <Link href={caseHref} className="link-draw">
            {project.title}
          </Link>
        </h3>
        <p className="mt-4 text-ink-muted">{project.summary[locale]}</p>

        <dl className="mt-8 divide-y divide-ink/10 border-y border-ink/10 text-sm">
          <SpecRow term={t.year}>{project.year}</SpecRow>
          <SpecRow term={t.kind}>{project.kind[locale]}</SpecRow>
          <SpecRow term={t.role}>{project.role[locale]}</SpecRow>
          <SpecRow term={t.stack}>
            <ul className="flex flex-wrap justify-end gap-1.5">
              {project.stack.map((tech) => (
                <li key={tech}>
                  <Tag>{tech}</Tag>
                </li>
              ))}
            </ul>
          </SpecRow>
        </dl>

        <TextLink href={caseHref} className="mt-8 self-start font-medium">
          {t.viewCase} →
        </TextLink>
        <ProjectLinks project={project} dict={dict} className="mt-4 text-sm text-ink-muted" />
      </div>
    </article>
  );
}
