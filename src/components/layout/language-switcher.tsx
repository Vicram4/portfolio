"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { localeNames, locales, type Locale } from "@/i18n/config";
import { localizePathname } from "@/i18n/routes";

export function LanguageSwitcher({ current, label }: { current: Locale; label: string }) {
  const pathname = usePathname();

  return (
    <nav aria-label={label}>
      <ul className="flex items-center gap-1 label">
        {locales.map((locale, index) => (
          <li key={locale} className="flex items-center gap-1">
            {index > 0 && (
              <span aria-hidden="true" className="text-ink/30">
                /
              </span>
            )}
            <Link
              href={localizePathname(pathname, locale)}
              hrefLang={locale}
              lang={locale}
              aria-label={localeNames[locale]}
              aria-current={locale === current ? "true" : undefined}
              className="p-1 text-ink-muted transition-colors hover:text-ink aria-[current=true]:text-ink"
            >
              {locale}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
