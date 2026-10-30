import { ButtonLink } from "@/components/ui/button-link";
import { CopyEmail } from "@/components/ui/copy-email";
import { profile } from "@/content/profile";
import { getDictionary, getLocale } from "@/i18n/get-dictionary";
import { href } from "@/i18n/routes";

/** Cierre de la página en negativo (tinta sobre crema invertido). */
export async function ClosingCta() {
  const locale = await getLocale();
  const dict = await getDictionary();
  const t = dict.home.closing;

  return (
    // El contorno de foco pasa a crema: el negro no se vería sobre este fondo.
    <section className="bg-ink text-paper [&_:focus-visible]:outline-paper">
      <div className="shell section-y">
        <h2 className="reveal font-display text-headline text-balance">
          {t.title}{" "}
          <span className="block text-accent">
            {t.highlight}
            <span aria-hidden="true">.</span>
          </span>
        </h2>

        <div className="mt-12 flex flex-col gap-8 md:mt-16 md:flex-row md:items-center md:gap-12">
          <ButtonLink href={href(locale, "contact")} variant="inverse">
            {t.cta}
          </ButtonLink>
          <CopyEmail email={profile.email} labels={dict.copyEmail} />
        </div>
      </div>
    </section>
  );
}
