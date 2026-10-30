import type { ReactNode } from "react";

/**
 * Encabezado editorial de sección:
 *
 *   01 — PROYECTOS ─────────────────────────
 *   Titular grande
 */
export function SectionHeading({
  index,
  eyebrow,
  title,
  as: Heading = "h2",
}: {
  index: string;
  eyebrow: string;
  title: ReactNode;
  as?: "h1" | "h2";
}) {
  return (
    <header className="grid-editorial gap-y-6 md:gap-y-8">
      <p className="col-span-full flex items-center gap-3 label text-ink-muted">
        <span className="text-accent-ink">{index}</span>
        <span aria-hidden="true">—</span>
        <span>{eyebrow}</span>
        <span aria-hidden="true" className="h-px flex-1 bg-ink/15" />
      </p>
      <Heading className="col-span-full font-display text-headline text-balance md:col-span-10">
        {title}
      </Heading>
    </header>
  );
}
