/**
 * Diccionario de referencia. `en.ts` debe tener exactamente esta forma:
 * si falta o sobra una clave, TypeScript lo marca como error.
 */
const es = {
  metadata: {
    description:
      "Desarrollador full stack con formación en marketing. Construyo webs y aplicaciones que funcionan bien y comunican mejor.",
  },
  a11y: {
    skipToContent: "Saltar al contenido",
    mainNav: "Navegación principal",
    languageSwitcher: "Idioma",
    opensInNewTab: "(se abre en una pestaña nueva)",
  },
  menu: {
    open: "Menú",
    close: "Cerrar",
  },
  nav: {
    home: "Inicio",
    projects: "Proyectos",
    about: "Sobre mí",
    contact: "Contacto",
  },
  home: {
    intro:
      "Desarrollador full stack con formación en marketing. Construyo webs y aplicaciones que funcionan bien y comunican mejor.",
    availability: "Disponible para empleo y proyectos freelance",
    ctaProjects: "Ver proyectos",
    ctaContact: "Contactar",
    featured: {
      eyebrow: "Proyectos destacados",
      title: "Trabajo seleccionado",
      year: "Año",
      role: "Rol",
      stack: "Stack",
      live: "Ver demo",
      repo: "Código en GitHub",
      viewAll: "Ver todos los proyectos",
    },
    services: {
      eyebrow: "Qué hago",
      title: "Lo que puedo hacer por ti",
      example: "Ejemplo",
    },
    process: {
      eyebrow: "Mi proceso",
      title: "De la idea a la publicación",
      steps: [
        {
          title: "Idea",
          text: "Entiendo el objetivo, el público y el problema antes de escribir una línea de código.",
        },
        {
          title: "Diseño",
          text: "Estructura, identidad e interfaz, pensadas para quien las usa y para lo que deben conseguir.",
        },
        {
          title: "Desarrollo",
          text: "Código mantenible, probado y seguro. Trabajo con IA como herramienta: yo dirijo, decido y reviso cada pieza.",
        },
        {
          title: "Publicación",
          text: "Despliegue, rendimiento, SEO y accesibilidad. Y después, mantenimiento y mejoras.",
        },
      ],
    },
    closing: {
      title: "¿Tienes un proyecto o una oferta?",
      highlight: "Hablemos",
      cta: "Escríbeme",
    },
  },
  copyEmail: {
    copy: "Copiar",
    copied: "Copiado",
    copiedAnnouncement: "Email copiado al portapapeles",
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
