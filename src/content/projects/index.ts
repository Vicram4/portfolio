import type { Project } from "@/content/types";
import { cafeSinnoh } from "./cafe-sinnoh";

/**
 * Registro de proyectos, en el orden en que se muestran.
 * Para añadir uno: crear su carpeta (index.ts + imágenes) y añadirlo aquí.
 */
export const projects: Project[] = [cafeSinnoh];

export const featuredProjects = projects.filter((project) => project.featured);
