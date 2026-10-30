export const locales = ["es", "en"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "es";

/** Cookie donde se recuerda el último idioma visitado. */
export const LOCALE_COOKIE = "locale";

export const localeNames: Record<Locale, string> = {
  es: "Español",
  en: "English",
};

export function hasLocale(value: string | undefined): value is Locale {
  return locales.includes(value as Locale);
}
