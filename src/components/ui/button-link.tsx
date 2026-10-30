import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { ArrowIcon } from "./arrow-icon";

type Variant = "primary" | "secondary" | "inverse";

const variants: Record<Variant, string> = {
  primary: "bg-ink text-paper hover:bg-accent hover:text-ink",
  secondary: "border border-ink/25 hover:border-ink hover:bg-ink hover:text-paper",
  /** Para fondos oscuros (bloque de cierre). */
  inverse: "bg-paper text-ink hover:bg-accent",
};

/** Estilos de botón reutilizables también en <button> (p. ej. el formulario). */
export function buttonStyles(variant: Variant = "primary", className?: string): string {
  return cn(
    "group inline-flex items-center gap-3 px-6 py-3.5 text-sm font-medium transition-colors duration-300",
    variants[variant],
    className,
  );
}

/** Llamada a la acción con aspecto de botón. Navega, así que es un enlace. */
export function ButtonLink({
  href,
  variant = "primary",
  newTabHint,
  className,
  children,
}: {
  href: string;
  variant?: Variant;
  /** Si se indica, es un enlace externo que se abre en otra pestaña. */
  newTabHint?: string;
  className?: string;
  children: ReactNode;
}) {
  const classes = buttonStyles(variant, className);

  if (newTabHint) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
        <ArrowIcon
          diagonal
          className="transition-transform duration-500 ease-out-expo group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
        <span className="sr-only">{newTabHint}</span>
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
      <ArrowIcon className="transition-transform duration-500 ease-out-expo group-hover:translate-x-1" />
    </Link>
  );
}
