/**
 * Diccionario de referencia. `en.ts` debe tener exactamente esta forma:
 * si falta o sobra una clave, TypeScript lo marca como error.
 */
const es = {
  metadata: {
    description: "Portfolio profesional de desarrollo web full stack.",
  },
  a11y: {
    skipToContent: "Saltar al contenido",
    mainNav: "Navegación principal",
    languageSwitcher: "Idioma",
  },
  nav: {
    home: "Inicio",
    projects: "Proyectos",
    about: "Sobre mí",
    contact: "Contacto",
  },
  placeholder: "Sección en construcción.",
  notFound: {
    title: "Página no encontrada",
    description: "La página que buscas no existe o ha cambiado de dirección.",
    backHome: "Volver al inicio",
  },
};

export type Dictionary = typeof es;

export default es;
