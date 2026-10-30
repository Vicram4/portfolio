import Image from "next/image";
import { ViewTransition } from "react";
import type { Project } from "@/content/types";
import type { Locale } from "@/i18n/config";
import { cn } from "@/lib/cn";

/**
 * Portada de un proyecto. El mismo `name` en la galería, en Inicio y en el caso
 * de estudio hace que la imagen se transforme de una página a otra al navegar.
 */
export function ProjectCover({
  project,
  locale,
  sizes,
  priority = false,
  className,
}: {
  project: Project;
  locale: Locale;
  sizes: string;
  priority?: boolean;
  className?: string;
}) {
  return (
    <ViewTransition name={`cover-${project.slug}`} share="morph" default="none">
      <div className={cn("overflow-hidden border border-ink/10 bg-paper-deep", className)}>
        <Image
          src={project.cover.src}
          alt={project.cover.alt[locale]}
          placeholder="blur"
          sizes={sizes}
          priority={priority}
          className="h-auto w-full"
        />
      </div>
    </ViewTransition>
  );
}
