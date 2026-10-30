import Link from "next/link";
import { profile } from "@/content/profile";
import { getDictionary, getLocale } from "@/i18n/get-dictionary";
import { href, type RouteKey } from "@/i18n/routes";
import { LanguageSwitcher } from "./language-switcher";
import { MainNav } from "./main-nav";

const navItems: RouteKey[] = ["home", "projects", "about", "contact"];

export async function SiteHeader() {
  const locale = await getLocale();
  const dict = await getDictionary();

  return (
    <header className="border-b border-ink/10">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-5">
        <Link href={href(locale)} className="font-medium">
          {profile.name}
        </Link>

        {/* Provisional: el menú móvil definitivo se diseña en la Fase 3. */}
        <MainNav
          label={dict.a11y.mainNav}
          items={navItems.map((route) => ({
            route,
            label: dict.nav[route],
            href: href(locale, route),
          }))}
        />

        <LanguageSwitcher current={locale} label={dict.a11y.languageSwitcher} />
      </div>
    </header>
  );
}
