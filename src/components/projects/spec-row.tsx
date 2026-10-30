import type { ReactNode } from "react";

/** Fila de ficha técnica: «AÑO ········ 2026». Va dentro de un <dl>. */
export function SpecRow({ term, children }: { term: string; children: ReactNode }) {
  return (
    <div className="flex items-baseline justify-between gap-6 py-3">
      <dt className="shrink-0 label text-ink-muted">{term}</dt>
      <dd className="text-right">{children}</dd>
    </div>
  );
}
