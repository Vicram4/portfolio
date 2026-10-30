import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import { ClosingCta } from "@/components/home/closing-cta";
import { ProjectCover } from "@/components/projects/project-cover";
import { ProjectLinks } from "@/components/projects/project-links";
import { SpecRow } from "@/components/projects/spec-row";
import { ButtonLink } from "@/components/ui/button-link";
import { Tag } from "@/components/ui/tag";
import { TextLink } from "@/components/ui/text-link";
import { getProject, projects } from "@/content/projects";
import { getDictionary, getLocale } from "@/i18n/get-dictionary";
import { href } from "@/i18n/routes";
import { cn } from "@/lib/cn";
import { pageMetadata } from "@/lib/metadata";

// Una página estática por proyecto (y por idioma, heredado de [lang]).
export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/projects/[slug]">): Promise<Metadata> {
  const project = getProject((await params).slug);
  if (!project) return {};

  const locale = await getLocale();
  return {
    ...pageMetadata({
      locale,
      route: "projects",
      rest: [project.slug],
      title: project.title,
      description: project.summary[locale],
    }),
    robots: project.noindex ? { index: false, follow: true } : undefined,
  };
}

const gallerySizes = {
  large: "md:col-span-8",
  tall: "md:col-span-4 md:row-span-2",
  half: "md:col-span-6",
} as const;

export default async function ProjectPage({ params }: PageProps<"/[lang]/projects/[slug]">) {
  const project = getProject((await params).slug);
  if (!project) notFound();

  const locale = await getLocale();
  const dict = await getDictionary();
  const t = dict.project;
  const s = dict.projects.sections;

  return (
    <>
      <article className="shell pt-10 pb-24 md:pt-14 md:pb-40">
        <TextLink href={href(locale, "projects")} className="label text-ink-muted">
          ← {dict.projects.backToAll}
        </TextLink>

        {/* Cabecera */}
        <header className="mt-14 md:mt-20">
          <p className="fade-up label text-accent-ink">
            {t.caseStudy} · {project.year} · {project.kind[locale]}
          </p>
          <h1 className="mt-6 font-display text-display">
            <span className="mask">
              <span className="rise">{project.title}</span>
            </span>
          </h1>
          <div className="mt-10 grid-editorial gap-y-8">
            <p
              className="col-span-full fade-up text-lead text-balance md:col-span-7"
              style={{ animationDelay: "250ms" }}
            >
              {project.summary[locale]}
            </p>
            <div
              className="col-span-full fade-up md:col-span-5 md:self-end"
              style={{ animationDelay: "350ms" }}
            >
              <div className="flex flex-wrap gap-4 md:justify-end">
                {project.links.live && (
                  <ButtonLink href={project.links.live} newTabHint={dict.a11y.opensInNewTab}>
                    {t.live}
                  </ButtonLink>
                )}
                {project.links.repo && (
                  <ButtonLink
                    href={project.links.repo}
                    variant="secondary"
                    newTabHint={dict.a11y.opensInNewTab}
                  >
                    {t.repo}
                  </ButtonLink>
                )}
              </div>
              {project.liveNote && (
                <p className="mt-4 text-sm text-ink-muted md:text-right">
                  {project.liveNote[locale]}
                </p>
              )}
            </div>
          </div>
        </header>

        <ProjectCover
          project={project}
          locale={locale}
          sizes="(width >= 90rem) 1344px, 100vw"
          priority
          className="mt-14 md:mt-20"
        />

        {/* Ficha técnica y cifras */}
        <div className="mt-14 grid-editorial gap-y-12 md:mt-20">
          <dl className="col-span-full divide-y divide-ink/10 border-y border-ink/10 text-sm md:col-span-6">
            <SpecRow term={t.year}>{project.year}</SpecRow>
            <SpecRow term={t.kind}>{project.kind[locale]}</SpecRow>
            <SpecRow term={t.duration}>{project.duration[locale]}</SpecRow>
            <SpecRow term={t.role}>{project.role[locale]}</SpecRow>
            <SpecRow term={t.links}>
              <ProjectLinks project={project} dict={dict} className="justify-end" />
            </SpecRow>
          </dl>

          <ul className="col-span-full grid grid-cols-3 gap-6 md:col-span-5 md:col-start-8">
            {project.stats.map((stat) => (
              <li key={stat.value} className="border-t border-ink/15 pt-4">
                <p className="font-display text-title">{stat.value}</p>
                <p className="mt-2 text-sm text-ink-muted">{stat.label[locale]}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Secciones del caso de estudio */}
        <div className="mt-24 space-y-20 md:mt-40 md:space-y-32">
          <CaseSection index="01" title={s.goal}>
            <p className="text-lead text-balance">{project.goal[locale]}</p>
          </CaseSection>

          <CaseSection index="02" title={s.challenge}>
            <p className="text-lead text-balance">{project.challenge[locale]}</p>
          </CaseSection>

          <CaseSection index="03" title={s.features}>
            <div className="space-y-12">
              {project.features.map((feature) => (
                <div key={feature.group.es}>
                  <h3 className="label text-ink-muted">{feature.group[locale]}</h3>
                  <ul className="mt-4 divide-y divide-ink/10 border-y border-ink/10">
                    {feature.items[locale].map((item) => (
                      <li key={item} className="flex gap-4 py-3">
                        <span aria-hidden="true" className="text-accent">
                          —
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </CaseSection>

          <CaseSection index="04" title={s.decisions}>
            <ol className="space-y-12">
              {project.decisions.map((decision, i) => (
                <li key={decision.title.es} className="grid reveal gap-4 md:grid-cols-[3rem_1fr]">
                  <span className="pt-2 label text-accent-ink">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-display text-title">{decision.title[locale]}</h3>
                    <p className="mt-3 text-ink-muted">{decision.text[locale]}</p>
                  </div>
                </li>
              ))}
            </ol>
          </CaseSection>

          <CaseSection index="05" title={s.stack}>
            <dl className="divide-y divide-ink/10 border-y border-ink/10">
              {project.stackDetail.map((layer) => (
                <div key={layer.layer.es} className="grid gap-3 py-5 md:grid-cols-[12rem_1fr]">
                  <dt className="pt-1 label text-ink-muted">{layer.layer[locale]}</dt>
                  <dd>
                    <ul className="flex flex-wrap gap-1.5">
                      {layer.items.map((item) => (
                        <li key={item}>
                          <Tag>{item}</Tag>
                        </li>
                      ))}
                    </ul>
                  </dd>
                </div>
              ))}
            </dl>
          </CaseSection>
        </div>

        {/* Galería a todo el ancho */}
        <section className="mt-24 md:mt-40">
          <p className="flex items-center gap-3 label text-ink-muted">
            <span className="text-accent-ink">06</span>
            <span aria-hidden="true">—</span>
            <span>{s.gallery}</span>
            <span aria-hidden="true" className="h-px flex-1 bg-ink/15" />
          </p>
          <h2 className="sr-only">{s.gallery}</h2>
          <div className="mt-10 grid-editorial gap-y-10 md:mt-14">
            {project.gallery.map((image) => (
              <figure
                key={image.caption.es}
                className={cn("col-span-full reveal", gallerySizes[image.size])}
              >
                <div className="overflow-hidden border border-ink/10 bg-paper-deep">
                  <Image
                    src={image.src}
                    alt={image.alt[locale]}
                    placeholder="blur"
                    sizes={
                      image.size === "large"
                        ? "(width >= 48rem) 66vw, 100vw"
                        : "(width >= 48rem) 50vw, 100vw"
                    }
                    className="h-auto w-full"
                  />
                </div>
                <figcaption className="mt-3 label text-ink-muted">
                  {image.caption[locale]}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <div className="mt-24 md:mt-40">
          <CaseSection index="07" title={s.credits}>
            <p className="text-lead text-balance">{project.credits[locale]}</p>
            {project.notice && (
              <p className="mt-10 border-t border-ink/10 pt-6 text-sm text-ink-muted">
                {project.notice[locale]}
              </p>
            )}
          </CaseSection>
        </div>

        <TextLink href={href(locale, "projects")} className="mt-24 text-lg md:mt-32">
          ← {dict.projects.backToAll}
        </TextLink>
      </article>

      <ClosingCta />
    </>
  );
}

/** Sección con su número y título a la izquierda y el contenido a la derecha. */
function CaseSection({
  index,
  title,
  children,
}: {
  index: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="grid-editorial gap-y-6">
      <header className="col-span-full md:col-span-4">
        <p className="label text-accent-ink">{index}</p>
        <h2 className="mt-3 font-display text-title">{title}</h2>
      </header>
      <div className="col-span-full md:col-span-8">{children}</div>
    </section>
  );
}
