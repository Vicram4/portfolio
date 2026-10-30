import Link from "next/link";
import { profile } from "@/content/profile";
import { getDictionary, getLocale } from "@/i18n/get-dictionary";
import { href, type RouteKey } from "@/i18n/routes";
import { LanguageSwitcher } from "./language-switcher";
import { MainNav, type NavItem } from "./main-nav";
import { MobileMenu } from "./mobile-menu";

// Rutas del menú. Cada una necesita su texto en `dict.nav` (lo comprueba TypeScript).
const navRoutes = ["home", "projects", "about", "contact"] as const satisfies RouteKey[];

export async function SiteHeader() {
  const locale = await getLocale();
  const dict = await getDictionary();

  const items: NavItem[] = navRoutes.map((route) => ({
    route,
    label: dict.nav[route],
    href: href(locale, route),
  }));

  const brand = (
    <Link href={href(locale)} className="font-display text-2xl leading-none tracking-tight">
      {profile.name}
      <span aria-hidden="true" className="text-accent">
        .
      </span>
    </Link>
  );

  const languageSwitcher = <LanguageSwitcher current={locale} label={dict.a11y.languageSwitcher} />;

  return (
    <header className="sticky top-0 z-40 border-b border-ink/10 bg-paper/85 backdrop-blur-md">
      <div className="shell flex h-16 items-center justify-between gap-6 md:h-20">
        {brand}

        <div className="hidden items-center gap-12 md:flex">
          <MainNav label={dict.a11y.mainNav} items={items} />
          {languageSwitcher}
        </div>

        <MobileMenu
          items={items}
          brand={brand}
          footer={languageSwitcher}
          labels={{ open: dict.menu.open, close: dict.menu.close, nav: dict.a11y.mainNav }}
        />
      </div>
    </header>
  );
}
