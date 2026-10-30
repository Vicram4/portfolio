import type { ReactNode } from "react";

/** Etiqueta de tecnología o categoría: «NEXT.JS», «E-COMMERCE». */
export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center border border-ink/20 px-2 py-1 label text-ink-muted">
      {children}
    </span>
  );
}
