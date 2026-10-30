import type { Metadata } from "next";
import { ClosingCta } from "@/components/home/closing-cta";
import { SpecRow } from "@/components/projects/spec-row";
import { SectionHeading } from "@/components/ui/section-heading";
import { Tag } from "@/components/ui/tag";
import { education, experience, skills, type PathEntry } from "@/content/about";
import { profile } from "@/content/profile";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/es";
import { getDictionary, getLocale } from "@/i18n/get-dictionary";

export async function generateMetadata(): Promise<Metadata> {
  const dict = await getDictionary();
  return { title: dict.nav.about, description: dict.about.intro[0] };
}

export default async function AboutPage() {
  const locale = await getLocale();
  const dict = await getDictionary();
  const t = dict.about;

  return (
    <>
      {/* Presentación */}
      <section className="shell section-y">
        <SectionHeading as="h1" index="02" eyebrow={t.eyebrow} title={t.title} />

        <div className="mt-16 grid-editorial gap-y-12 md:mt-24">
          <dl className="col-span-full divide-y divide-ink/10 self-start border-y border-ink/10 text-sm md:col-span-4">
            <SpecRow term={dict.contact.location}>{profile.location}</SpecRow>
            <SpecRow term={dict.project.role}>{profile.role}</SpecRow>
            <SpecRow term={t.path.education}>{education[0].title[locale]}</SpecRow>
          </dl>

          <div className="col-span-full space-y-6 md:col-span-7 md:col-start-6">
            {t.intro.map((paragraph, index) => (
              <p key={index} className={index === 0 ? "text-lead text-balance" : "text-ink-muted"}>
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Enfoque */}
      <section className="bg-paper-deep">
        <div className="shell section-y">
          <SectionHeading index="01" eyebrow={t.approach.eyebrow} title={t.approach.title} />
          <ol className="mt-16 grid gap-x-8 gap-y-14 md:mt-24 md:grid-cols-3">
            {t.approach.items.map((item, index) => (
              <li key={item.title} className="reveal border-t border-ink/20 pt-6">
                <span className="label text-accent-ink">{String(index + 1).padStart(2, "0")}</span>
                <h3 className="mt-12 font-display text-title">{item.title}</h3>
                <p className="mt-4 text-ink-muted">{item.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Trayectoria */}
      <section className="shell section-y">
        <SectionHeading index="02" eyebrow={t.path.eyebrow} title={t.path.title} />
        <div className="mt-16 space-y-16 md:mt-24">
          <PathList title={t.path.experience} entries={experience} locale={locale} dict={dict} />
          <PathList title={t.path.education} entries={education} locale={locale} dict={dict} />
        </div>
      </section>

      {/* Tecnologías */}
      <section className="shell pb-24 md:pb-40">
        <SectionHeading index="03" eyebrow={t.skills.eyebrow} title={t.skills.title} />
        <div className="mt-16 grid-editorial gap-y-8 md:mt-24">
          <p className="col-span-full text-ink-muted md:col-span-4">{t.skills.note}</p>
          <dl className="col-span-full divide-y divide-ink/10 border-y border-ink/10 md:col-span-7 md:col-start-6">
            {skills.map((group) => (
              <div key={group.group.es} className="grid gap-3 py-5 md:grid-cols-[11rem_1fr]">
                <dt className="pt-1 label text-ink-muted">{group.group[locale]}</dt>
                <dd>
                  <ul className="flex flex-wrap gap-1.5">
                    {group.items.map((item) => {
                      const text = typeof item === "string" ? item : item[locale];
                      return (
                        <li key={text}>
                          <Tag>{text}</Tag>
                        </li>
                      );
                    })}
                  </ul>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <ClosingCta />
    </>
  );
}

function PathList({
  title,
  entries,
  locale,
  dict,
}: {
  title: string;
  entries: PathEntry[];
  locale: Locale;
  dict: Dictionary;
}) {
  return (
    <div>
      <h3 className="label text-ink-muted">{title}</h3>
      <ol className="mt-4 border-t border-ink/15">
        {entries.map((entry) => (
          <li
            key={entry.title.es}
            className="grid-editorial reveal gap-y-2 border-b border-ink/15 py-6 md:py-8"
          >
            <p className="col-span-full pt-1.5 label text-ink-muted md:col-span-3">
              {formatPeriod(entry, locale, dict)}
            </p>
            <div className="col-span-full md:col-span-4">
              <p className="font-display text-title">{entry.title[locale]}</p>
              <p className="mt-1 text-sm text-accent-ink">
                {entry.place}
                {entry.kind && <span className="text-ink-muted"> · {entry.kind[locale]}</span>}
              </p>
            </div>
            {entry.description && (
              <p className="col-span-full text-ink-muted md:col-span-5 md:pt-1.5">
                {entry.description[locale]}
              </p>
            )}
          </li>
        ))}
      </ol>
    </div>
  );
}

/** "2025-09" → «sept 2025» / «Sep 2025»; "2024" → «2024»; sin fin → «Actualidad» o «En curso». */
function formatPeriod(entry: PathEntry, locale: Locale, dict: Dictionary): string {
  const format = (value: string) => {
    const [year, month] = value.split("-").map(Number);
    if (!month) return String(year);
    return new Intl.DateTimeFormat(locale, {
      month: "short",
      year: "numeric",
      timeZone: "UTC",
    }).format(new Date(Date.UTC(year, month - 1, 1)));
  };

  // Con mes (trabajo) sin fin: «Actualidad». Solo año (estudios) sin fin: «En curso».
  if (!entry.end) {
    return entry.start.includes("-")
      ? `${format(entry.start)} — ${dict.about.path.present}`
      : dict.about.path.ongoing;
  }
  return `${format(entry.start)} — ${format(entry.end)}`;
}
