"use client"; // Los límites de error deben ser componentes de cliente.

import { useParams } from "next/navigation";
import { useEffect } from "react";
import { buttonStyles } from "@/components/ui/button-link";
import { SectionHeading } from "@/components/ui/section-heading";
import { TextLink } from "@/components/ui/text-link";
import { defaultLocale, hasLocale, type Locale } from "@/i18n/config";
import { href } from "@/i18n/routes";

// Un componente de cliente no puede leer los diccionarios del servidor:
// los pocos textos de esta página van aquí.
const texts: Record<Locale, { title: string; text: string; retry: string; home: string }> = {
  es: {
    title: "Algo ha fallado",
    text: "Ha ocurrido un error inesperado al cargar esta página. Puedes intentarlo de nuevo o volver al inicio.",
    retry: "Intentar de nuevo",
    home: "Volver al inicio",
  },
  en: {
    title: "Something went wrong",
    text: "An unexpected error occurred while loading this page. You can try again or go back home.",
    retry: "Try again",
    home: "Back to home",
  },
};

export default function Error({ error, retry }: { error: unknown; retry: () => void }) {
  const { lang } = useParams<{ lang: string }>();
  const locale = hasLocale(lang) ? lang : defaultLocale;
  const t = texts[locale];

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="shell section-y">
      <SectionHeading as="h1" index="500" eyebrow="Error" title={t.title} />
      <p className="mt-10 max-w-xl text-lead text-ink-muted">{t.text}</p>
      <div className="mt-10 flex flex-wrap items-center gap-6">
        <button type="button" onClick={() => retry()} className={buttonStyles("primary")}>
          {t.retry}
        </button>
        <TextLink href={href(locale)}>{t.home}</TextLink>
      </div>
    </section>
  );
}
