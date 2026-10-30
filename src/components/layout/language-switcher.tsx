"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { localeNames, locales, type Locale } from "@/i18n/config";
import { localizePathname } from "@/i18n/routes";

export function LanguageSwitcher({ current, label }: { current: Locale; label: string }) {
  const pathname = usePathname();

  return (
    <nav aria-label={label}>
      <ul className="flex gap-1 font-mono text-sm">
        {locales.map((locale) => (
          <li key={locale}>
            <Link
              href={localizePathname(pathname, locale)}
              hrefLang={locale}
              lang={locale}
              aria-label={localeNames[locale]}
              aria-current={locale === current ? "true" : undefined}
              className="px-1.5 py-1 uppercase opacity-50 hover:opacity-100 aria-[current=true]:underline aria-[current=true]:underline-offset-4 aria-[current=true]:opacity-100"
            >
              {locale}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
