import Image from "next/image";
import type { ReactNode } from "react";
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
  const t = dict.home.featured;
  const newTab = dict.a11y.opensInNewTab;

  return (
    <article className="grid-editorial reveal gap-y-8">
      <div
        className={cn(
          "col-span-full overflow-hidden border border-ink/10 bg-paper-deep md:col-span-8",
          reversed && "md:col-start-5",
        )}
      >
        <Image
          src={project.cover.src}
          alt={project.cover.alt[locale]}
          placeholder="blur"
          sizes="(width >= 48rem) 66vw, 100vw"
          className="h-auto w-full"
        />
      </div>

      <div
        className={cn(
          "col-span-full flex flex-col md:col-span-4 md:row-start-1",
          reversed ? "md:col-start-1" : "md:col-start-9",
        )}
      >
        <h3 className="font-display text-title">{project.title}</h3>
        <p className="mt-4 text-ink-muted">{project.summary[locale]}</p>

        <dl className="mt-8 divide-y divide-ink/10 border-y border-ink/10 text-sm">
          <SpecRow term={t.year}>{project.year}</SpecRow>
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

        <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
          {project.links.live && (
            <TextLink href={project.links.live} external newTabHint={newTab}>
              {t.live}
            </TextLink>
          )}
          {project.links.repo && (
            <TextLink href={project.links.repo} external newTabHint={newTab}>
              {t.repo}
            </TextLink>
          )}
        </div>
      </div>
    </article>
  );
}

function SpecRow({ term, children }: { term: string; children: ReactNode }) {
  return (
    <div className="flex items-baseline justify-between gap-6 py-3">
      <dt className="shrink-0 label text-ink-muted">{term}</dt>
      <dd className="text-right">{children}</dd>
    </div>
  );
}
