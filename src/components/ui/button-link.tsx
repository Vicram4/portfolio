import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { ArrowIcon } from "./arrow-icon";

type Variant = "primary" | "secondary";

const variants: Record<Variant, string> = {
  primary: "bg-ink text-paper hover:bg-accent hover:text-ink",
  secondary: "border border-ink/25 hover:border-ink hover:bg-ink hover:text-paper",
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
  className,
  children,
}: {
  href: string;
  variant?: Variant;
  className?: string;
  children: ReactNode;
}) {
  return (
    <Link href={href} className={buttonStyles(variant, className)}>
      {children}
      <ArrowIcon className="transition-transform duration-500 ease-out-expo group-hover:translate-x-1" />
    </Link>
  );
}
