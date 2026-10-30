/**
 * Slugs de los proyectos publicados, sin datos ni imágenes.
 * Lo usa `proxy.ts` para responder 404 a proyectos inexistentes antes de renderizar.
 * Al añadir un proyecto, añadir aquí su slug (si no, la build falla: ver index.ts).
 */
export const projectSlugs = ["cafe-sinnoh", "peluqueria-arriaga"] as const;

export type ProjectSlug = (typeof projectSlugs)[number];
