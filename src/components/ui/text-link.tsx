import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { ArrowIcon } from "./arrow-icon";

type TextLinkProps = {
  href: string;
  className?: string;
  children: ReactNode;
} & (
  | { external?: false; newTabHint?: never }
  /** `newTabHint`: texto para lectores de pantalla, p. ej. «(se abre en una pestaña nueva)». */
  | { external: true; newTabHint: string }
);

/** Enlace de texto con subrayado animado. Los externos se abren en otra pestaña. */
export function TextLink({ href, external, newTabHint, className, children }: TextLinkProps) {
  const classes = cn("link-draw inline-flex items-center gap-1.5", className);

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
        <ArrowIcon diagonal />
        <span className="sr-only">{newTabHint}</span>
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
