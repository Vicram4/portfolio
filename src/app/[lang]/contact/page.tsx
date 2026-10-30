import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/contact-form";
import { CopyEmail } from "@/components/ui/copy-email";
import { SectionHeading } from "@/components/ui/section-heading";
import { TextLink } from "@/components/ui/text-link";
import { profile } from "@/content/profile";
import { getDictionary, getLocale } from "@/i18n/get-dictionary";
import { href } from "@/i18n/routes";
import { pageMetadata } from "@/lib/metadata";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const dict = await getDictionary();
  return pageMetadata({
    locale,
    route: "contact",
    title: dict.nav.contact,
    description: dict.contact.intro,
  });
}

export default async function ContactPage() {
  const locale = await getLocale();
  const dict = await getDictionary();
  const t = dict.contact;
  const newTab = dict.a11y.opensInNewTab;

  return (
    <section className="shell section-y">
      <SectionHeading as="h1" index="03" eyebrow={t.eyebrow} title={t.title} />

      <div className="mt-16 grid-editorial gap-y-16 md:mt-24">
        {/* Canales directos */}
        <aside className="col-span-full md:col-span-4">
          <p className="text-lead text-balance">{t.intro}</p>

          <dl className="mt-12 space-y-8">
            <div>
              <dt className="label text-ink-muted">{t.channels}</dt>
              <dd className="mt-3 space-y-3">
                <CopyEmail email={profile.email} labels={dict.copyEmail} />
                <ul className="flex flex-wrap gap-x-6 gap-y-2">
                  <li>
                    <TextLink href={profile.links.github} external newTabHint={newTab}>
                      GitHub
                    </TextLink>
                  </li>
                  {profile.links.linkedin && (
                    <li>
                      <TextLink href={profile.links.linkedin} external newTabHint={newTab}>
                        LinkedIn
                      </TextLink>
                    </li>
                  )}
                </ul>
              </dd>
            </div>
            <div>
              <dt className="label text-ink-muted">{t.location}</dt>
              <dd className="mt-3">{profile.location}</dd>
            </div>
          </dl>
        </aside>

        {/* Formulario */}
        <div className="col-span-full md:col-span-7 md:col-start-6">
          <h2 className="sr-only">{t.form.title}</h2>
          <ContactForm labels={t.form} privacyHref={href(locale, "privacy")} />
        </div>
      </div>
    </section>
  );
}
