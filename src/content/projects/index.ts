import type { Project } from "@/content/types";
import { cafeSinnoh } from "./cafe-sinnoh";
import { heroteca } from "./heroteca";
import { peluqueriaArriaga } from "./peluqueria-arriaga";
import { projectSlugs } from "./slugs";

/**
 * Registro de proyectos, en el orden en que se muestran.
 * Para añadir uno: crear su carpeta (index.ts + imágenes), añadirlo aquí
 * y añadir su slug en slugs.ts.
 */
export const projects: Project[] = [cafeSinnoh, heroteca, peluqueriaArriaga];

// Si el registro y slugs.ts no coinciden, la build falla con un mensaje claro.
const registered = projects
  .map((project) => project.slug)
  .sort()
  .join();
if (registered !== [...projectSlugs].sort().join()) {
  throw new Error(
    `slugs.ts (${projectSlugs.join(", ")}) no coincide con los proyectos registrados (${registered}).`,
  );
}

export const featuredProjects = projects.filter((project) => project.featured);

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
