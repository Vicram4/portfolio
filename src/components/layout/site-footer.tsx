import { cacheLife } from "next/cache";
import { TextLink } from "@/components/ui/text-link";
import { profile } from "@/content/profile";
import { getDictionary } from "@/i18n/get-dictionary";

export async function SiteFooter() {
  // El año se calcula al generar la página y se renueva a diario,
  // en lugar de recalcularse en cada visita.
  "use cache";
  cacheLife("days");

  const dict = await getDictionary();
  const newTab = dict.a11y.opensInNewTab;

  return (
    <footer className="border-t border-ink/10">
      <div className="shell flex flex-col gap-6 py-10 md:flex-row md:items-center md:justify-between">
        <p className="label text-ink-muted">
          © {new Date().getFullYear()} {profile.name} · {profile.role}
        </p>

        <ul className="flex flex-wrap gap-x-8 gap-y-3 text-sm">
          <li>
            <TextLink href={`mailto:${profile.email}`}>Email</TextLink>
          </li>
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
      </div>
    </footer>
  );
}
