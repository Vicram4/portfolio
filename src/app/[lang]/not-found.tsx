import { TextLink } from "@/components/ui/text-link";
import { SectionHeading } from "@/components/ui/section-heading";
import { getDictionary, getLocale } from "@/i18n/get-dictionary";
import { href } from "@/i18n/routes";

export default async function NotFound() {
  const locale = await getLocale();
  const dict = await getDictionary();

  return (
    <section className="shell section-y">
      <SectionHeading as="h1" index="404" eyebrow="Error" title={dict.notFound.title} />
      <p className="mt-10 max-w-xl text-lead text-ink-muted">{dict.notFound.description}</p>
      <TextLink href={href(locale)} className="mt-8">
        {dict.notFound.backHome}
      </TextLink>
    </section>
  );
}
