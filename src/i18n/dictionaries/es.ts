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
  /** Etiquetas comunes de un proyecto (tarjetas, fichas y caso de estudio). */
  project: {
    year: "Año",
    kind: "Tipo",
    role: "Rol",
    duration: "Duración",
    stack: "Stack",
    links: "Enlaces",
    live: "Ver demo",
    repo: "Código en GitHub",
    viewCase: "Ver caso de estudio",
    caseStudy: "Caso de estudio",
  },
  projects: {
    eyebrow: "Proyectos",
    title: "Diseñados y construidos de principio a fin",
    moreComing: "Nuevos proyectos en camino.",
    backToAll: "Todos los proyectos",
    sections: {
      goal: "Objetivo",
      challenge: "El reto",
      features: "Funcionalidades",
      decisions: "Decisiones técnicas",
      stack: "Tecnologías",
      gallery: "Galería",
      credits: "Cómo lo hice",
    },
  },
  copyEmail: {
    copy: "Copiar",
    copied: "Copiado",
    copiedAnnouncement: "Email copiado al portapapeles",
  },
  about: {
    eyebrow: "Sobre mí",
    title: "Desarrollador con mirada de negocio",
    intro: [
      "Soy Víctor Ramos, desarrollador full stack en Madrid. Llegué a la programación desde el marketing: primero me formé en Marketing y Publicidad y trabajé analizando datos y gestionando redes sociales; después estudié Desarrollo de Aplicaciones Web y di el salto al desarrollo.",
      "Esa combinación define cómo trabajo. No solo construyo webs y aplicaciones que funcionan: también pienso en a quién se dirigen, qué deben comunicar y cómo saber si lo consiguen. Mi etapa como integrador SAP me enseñó, además, cómo funcionan los sistemas en empresas reales.",
      "Hoy desarrollo proyectos web por mi cuenta y sigo formándome: estudio Ingeniería Informática en la UOC.",
    ],
    approach: {
      eyebrow: "Mi enfoque",
      title: "Cómo entiendo el trabajo",
      items: [
        {
          title: "Producto antes que código",
          text: "Empiezo por el objetivo y por las personas que van a usarlo. La tecnología se elige después, al servicio de eso.",
        },
        {
          title: "La calidad que no se ve",
          text: "Accesibilidad, rendimiento, seguridad y tests: lo que hace que un proyecto siga funcionando bien con el tiempo.",
        },
        {
          title: "IA como herramienta, criterio propio",
          text: "Uso la IA para avanzar más rápido, pero cada decisión y cada pieza pasan por mi revisión antes de darlas por buenas.",
        },
      ],
    },
    path: {
      eyebrow: "Trayectoria",
      title: "Experiencia y formación",
      experience: "Experiencia",
      education: "Formación",
      present: "Actualidad",
      ongoing: "En curso",
    },
    skills: {
      eyebrow: "Tecnologías",
      title: "Con qué trabajo",
      note: "Solo lo que respaldan mis proyectos y trabajos reales. La lista crece con cada proyecto nuevo.",
    },
  },
  contact: {
    eyebrow: "Contacto",
    title: "Cuéntame qué tienes en mente",
    intro:
      "Una oferta de trabajo, un proyecto web o una simple pregunta: escríbeme y te responderé lo antes posible.",
    channels: "Canales directos",
    location: "Ubicación",
    form: {
      title: "Formulario",
      topic: "¿Sobre qué quieres hablar?",
      topics: {
        job: "Oferta de trabajo",
        project: "Proyecto web",
        other: "Otro",
      },
      name: "Nombre",
      email: "Email",
      message: "Mensaje",
      messagePlaceholder: "Cuéntame lo esencial: qué necesitas, plazos, enlaces…",
      privacyBefore: "He leído y acepto la",
      privacyLink: "política de privacidad",
      honeypot: "No rellenes este campo",
      submit: "Enviar mensaje",
      sending: "Enviando…",
      errors: {
        topic: "Elige un tema.",
        name: "Escribe tu nombre (entre 2 y 100 caracteres).",
        email: "Escribe un email válido.",
        message: "El mensaje debe tener entre 10 y 5.000 caracteres.",
        privacy: "Necesito que aceptes la política de privacidad para responderte.",
        tooFast:
          "Parece que el envío ha sido demasiado rápido. Espera unos segundos y vuelve a intentarlo.",
        server:
          "No se ha podido enviar el mensaje. Inténtalo de nuevo o escríbeme directamente al email.",
        summary: "Revisa los campos marcados.",
      },
      success: {
        title: "¡Mensaje enviado!",
        text: "Gracias por escribirme. Te responderé lo antes posible al email que has indicado.",
        again: "Enviar otro mensaje",
      },
    },
  },
  privacy: {
    title: "Política de privacidad",
    updated: "Última actualización: octubre de 2026",
    sections: [
      {
        title: "Responsable",
        text: "Víctor Ramos Berzosa. Contacto: victorramos.devs@gmail.com.",
      },
      {
        title: "Qué datos recojo",
        text: "Solo los que envías en el formulario de contacto: tu nombre, tu email, el tema y el mensaje.",
      },
      {
        title: "Para qué los uso",
        text: "Únicamente para leer y responder a tu mensaje. No los uso con fines publicitarios ni los cedo a terceros.",
      },
      {
        title: "Base legal",
        text: "Tu consentimiento, que das al marcar la casilla del formulario (artículo 6.1.a del RGPD). Puedes retirarlo en cualquier momento.",
      },
      {
        title: "Quién más los trata",
        text: "El mensaje se entrega a mi correo a través de Resend, Inc. (Estados Unidos), que actúa como encargado del tratamiento solo para ese envío. La web está alojada en Vercel Inc. (Estados Unidos), que puede tratar datos técnicos de conexión, como la dirección IP, para servir la web y protegerla. Ambos ofrecen las garantías que exige el RGPD para las transferencias internacionales.",
      },
      {
        title: "Cuánto tiempo los conservo",
        text: "El tiempo necesario para atender tu consulta y, como máximo, doce meses, salvo que de ella surja una relación profesional.",
      },
      {
        title: "Tus derechos",
        text: "Puedes solicitar el acceso, la rectificación, la supresión, la oposición, la limitación o la portabilidad de tus datos escribiendo a victorramos.devs@gmail.com. Si consideras que no se han respetado, puedes reclamar ante la Agencia Española de Protección de Datos (aepd.es).",
      },
      {
        title: "Cookies",
        text: "Esta web solo usa una cookie técnica que recuerda el idioma que has elegido. No utiliza cookies de análisis ni de publicidad.",
      },
    ],
  },
  notFound: {
    title: "Página no encontrada",
    description: "La página que buscas no existe o ha cambiado de dirección.",
    backHome: "Volver al inicio",
  },
};

export type Dictionary = typeof es;

export default es;
