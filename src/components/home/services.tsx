import { SectionHeading } from "@/components/ui/section-heading";
import { TextLink } from "@/components/ui/text-link";
import { services } from "@/content/services";
import { getDictionary, getLocale } from "@/i18n/get-dictionary";
import { href } from "@/i18n/routes";

export async function Services() {
  const locale = await getLocale();
  const dict = await getDictionary();
  const t = dict.home.services;

  return (
    <section className="shell section-y">
      <SectionHeading index="02" eyebrow={t.eyebrow} title={t.title} />

      {/* Filas editoriales en lugar de tarjetas. */}
      <ol className="mt-16 border-t border-ink/15 md:mt-24">
        {services.map((service, index) => (
          <li
            key={service.title.es}
            className="grid-editorial reveal gap-y-4 border-b border-ink/15 py-10"
          >
            <span className="col-span-full label text-accent-ink md:col-span-1">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="col-span-full font-display text-title md:col-span-4">
              {service.title[locale]}
            </h3>
            <p className="col-span-full text-ink-muted md:col-span-5">
              {service.description[locale]}
            </p>
            {service.example && (
              <p className="col-span-full text-sm md:col-span-2 md:text-right">
                <span className="block label text-ink-muted">{t.example}</span>
                {service.example.projectSlug ? (
                  <TextLink
                    href={href(locale, "projects", service.example.projectSlug)}
                    className="mt-1"
                  >
                    {service.example.label[locale]} →
                  </TextLink>
                ) : (
                  <span className="mt-1 inline-block">{service.example.label[locale]}</span>
                )}
              </p>
            )}
          </li>
        ))}
      </ol>
    </section>
  );
}
