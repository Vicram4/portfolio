import { ButtonLink } from "@/components/ui/button-link";
import { profile } from "@/content/profile";
import { getDictionary, getLocale } from "@/i18n/get-dictionary";
import { href } from "@/i18n/routes";

export async function Hero() {
  const locale = await getLocale();
  const { home } = await getDictionary();
  const [firstName, ...rest] = profile.name.split(" ");

  return (
    <section className="shell pt-16 pb-20 md:pt-24 md:pb-32">
      <p className="fade-up label text-ink-muted">
        {profile.role} · {profile.location}
      </p>

      {/* Nombre en dos líneas; la segunda desplazada, como en una portada editorial. */}
      <h1 className="mt-10 font-display text-display md:mt-14">
        <span className="mask">
          <span className="rise">{firstName}</span>
        </span>
        <span className="mask md:pl-[18%]">
          <span className="rise" style={{ animationDelay: "120ms" }}>
            {rest.join(" ")}
            <span aria-hidden="true" className="text-accent">
              .
            </span>
          </span>
        </span>
      </h1>

      <div
        aria-hidden="true"
        className="mt-12 h-px draw bg-ink/15 md:mt-16"
        style={{ animationDelay: "300ms" }}
      />

      <div className="mt-10 grid-editorial gap-y-10 md:mt-12">
        <p
          className="col-span-full flex fade-up items-center gap-3 self-end text-sm text-ink-muted md:col-span-5 md:row-start-1"
          style={{ animationDelay: "700ms" }}
        >
          <span aria-hidden="true" className="size-2 rounded-full bg-accent" />
          {home.availability}
        </p>

        <div
          className="col-span-full fade-up md:col-span-6 md:col-start-7 md:row-start-1"
          style={{ animationDelay: "550ms" }}
        >
          <p className="text-lead text-balance">{home.intro}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <ButtonLink href={href(locale, "projects")}>{home.ctaProjects}</ButtonLink>
            <ButtonLink href={href(locale, "contact")} variant="secondary">
              {home.ctaContact}
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
