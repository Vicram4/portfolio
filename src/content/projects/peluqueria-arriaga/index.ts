import type { Project } from "@/content/types";
import cover from "./cover.webp";
import formularioConfirmacion from "./formulario-confirmacion.webp";
import formularioErrores from "./formulario-errores.webp";
import horario from "./horario.webp";
import movil from "./movil.webp";
import servicios from "./servicios.webp";

// Datos tomados del README y el código de peluqueria-arriaga, y de la medición de
// Lighthouse que hizo el autor. No añadir nada que no esté allí.
// Sin datos del negocio (dueño, valoración, dirección): están pendientes de confirmar.
export const peluqueriaArriaga: Project = {
  slug: "peluqueria-arriaga",
  title: "Peluquería Arriaga",
  year: 2026,
  featured: false,
  // Es una demo para enseñar al negocio: fuera de los buscadores hasta que la vea.
  noindex: true,
  summary: {
    es: "Rediseño conceptual no oficial de la web de una peluquería de caballeros y niños de Alcalá de Henares: horario con estado «abierto ahora», servicios y formulario de cita de demostración.",
    en: "Unofficial concept redesign of the website for a men’s and children’s barbershop in Alcalá de Henares: opening hours with a live “open now” status, services and a demo booking form.",
  },
  kind: {
    es: "Concepto no oficial · Demo pública",
    en: "Unofficial concept · Public demo",
  },
  role: {
    es: "Diseño y desarrollo",
    en: "Design and development",
  },
  duration: {
    es: "oct. 2026",
    en: "Oct 2026",
  },
  stack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  links: {
    live: "https://peluqueria-arriaga.vercel.app",
    repo: "https://github.com/Vicram4/peluqueria-arriaga",
  },
  liveNote: {
    es: "Concepto no oficial, sin relación con el negocio. El formulario de cita es una maqueta: valida los datos, pero no envía ni guarda nada. La web está solo en español.",
    en: "Unofficial concept, not affiliated with the business. The booking form is a mock-up: it validates your input but doesn’t send or store anything. The site is in Spanish only.",
  },
  cover: {
    src: cover,
    alt: {
      es: "Portada del concepto de Peluquería Arriaga: aviso de concepto no oficial, logotipo con un poste de barbero, titular «Tu peluquería de barrio, de toda la vida», botones para pedir cita y llamar, e indicador «Abierto ahora».",
      en: "Peluquería Arriaga concept home page: unofficial concept notice, logo with a barber pole, the headline “Your neighbourhood barbershop, as it’s always been”, buttons to book and call, and an “Open now” indicator.",
    },
  },

  stats: [
    { value: "96", label: { es: "en rendimiento (Lighthouse)", en: "performance (Lighthouse)" } },
    {
      value: "100",
      label: { es: "en accesibilidad (Lighthouse)", en: "accessibility (Lighthouse)" },
    },
    {
      value: "100",
      label: { es: "en buenas prácticas (Lighthouse)", en: "best practices (Lighthouse)" },
    },
  ],

  goal: {
    es: "Proponer cómo podría ser la web de un negocio de barrio que hoy no tiene web propia ni reserva online: rápida, accesible, fácil de mantener y sin coste de alojamiento.",
    en: "Show what the website of a neighbourhood business with no site or online booking could look like: fast, accessible, easy to maintain and free to host.",
  },
  challenge: {
    es: "Una peluquería de barrio necesita sobre todo responder rápido a tres preguntas desde el móvil: ¿está abierta?, ¿qué servicios tiene? y ¿cómo pido cita? Además, al ser un concepto no oficial, no podía recoger datos de nadie ni inventar reseñas, precios o fotos.",
    en: "A neighbourhood barbershop mostly needs to answer three questions quickly on a phone: is it open, what services does it offer, and how do I book? And, as an unofficial concept, it couldn’t collect anyone’s data or make up reviews, prices or photos.",
  },

  features: [
    {
      group: { es: "Visitantes", en: "Visitors" },
      items: {
        es: [
          "«Abierto ahora» o «Cerrado» según la hora de Madrid, actualizado cada minuto.",
          "Servicios con precios «Consultar» en lugar de cifras inventadas.",
          "Enlace «Cómo llegar» que en el móvil abre la app de mapas.",
          "Barra inferior fija en el móvil con «Llamar» y «Pedir cita».",
        ],
        en: [
          "“Open now” or “Closed” based on Madrid time, updated every minute.",
          "Services with “Ask for price” instead of made-up figures.",
          "A “Get directions” link that opens the maps app on mobile.",
          "A sticky bottom bar on mobile with “Call” and “Book”.",
        ],
      },
    },
    {
      group: { es: "Formulario de cita (demo)", en: "Booking form (demo)" },
      items: {
        es: [
          "Selector con los próximos 12 días con horario: sin domingos y con el sábado solo por la mañana.",
          "Errores asociados a cada campo, con el foco en el primero.",
          "Al enviar, solo muestra un resumen avisando de que no se ha enviado nada.",
        ],
        en: [
          "A picker with the next 12 open days: no Sundays, and Saturday mornings only.",
          "Errors linked to each field, with focus moved to the first one.",
          "On submit, it only shows a summary saying nothing was sent.",
        ],
      },
    },
    {
      group: { es: "Diseño", en: "Design" },
      items: {
        es: [
          "Diseño tipográfico de barbería con Fraunces e Inter y un poste de barbero.",
          "Animaciones pequeñas solo con CSS, desactivadas con «reducir movimiento».",
          "Contraste AA, foco visible, «Saltar al contenido» y menú móvil que se cierra con Esc.",
        ],
        en: [
          "A typographic barbershop design with Fraunces and Inter, plus a barber pole.",
          "Small CSS-only animations, turned off by “reduce motion”.",
          "AA contrast, visible focus, “Skip to content” and a mobile menu that closes with Esc.",
        ],
      },
    },
  ],

  decisions: [
    {
      title: {
        es: "La hora de Madrid, sea cual sea la del visitante",
        en: "Madrid time, whatever the visitor’s time zone",
      },
      text: {
        es: "El estado se calcula en el navegador con Intl.DateTimeFormat y la zona Europe/Madrid, así que es correcto aunque visites la web desde otro país. El HTML estático muestra el horario resumido y el estado aparece después, para no provocar errores de hidratación.",
        en: "The status is computed in the browser with Intl.DateTimeFormat and the Europe/Madrid time zone, so it’s correct even if you visit from another country. The static HTML shows the summarised hours and the status is added afterwards, to avoid hydration mismatches.",
      },
    },
    {
      title: { es: "Un concepto honesto", en: "An honest concept" },
      text: {
        es: "Cada vista muestra el aviso de concepto y la web no se indexa (noindex, robots.txt y cabecera X-Robots-Tag). No hay backend, ni peticiones, ni almacenamiento: el formulario no puede enviar datos aunque quisiera. Tampoco hay reseñas, precios ni fotos inventados; el diseño deja huecos preparados para las fotos reales.",
        en: "Every view shows the concept notice and the site isn’t indexed (noindex, robots.txt and an X-Robots-Tag header). There’s no backend, no requests and no storage, so the form couldn’t send data even if it tried. Nor are there any made-up reviews, prices or photos; the layout leaves slots ready for real ones.",
      },
    },
    {
      title: { es: "Animación sin JavaScript", en: "Motion without JavaScript" },
      text: {
        es: "Los botones se elevan, el teléfono «suena», los encabezados aparecen al hacer scroll y la marca de confirmación se dibuja, todo solo con CSS. Si el sistema pide menos movimiento, todo se desactiva.",
        en: "Buttons lift, the phone icon “rings”, headings appear on scroll and the confirmation tick draws itself, all with CSS alone. If the system asks for reduced motion, it’s all turned off.",
      },
    },
    {
      title: { es: "Ligera y gratis", en: "Lightweight and free" },
      text: {
        es: "Es una exportación estática de Next.js en el subdominio gratuito de Vercel, con las fuentes servidas desde el propio dominio. En lugar del mapa incrustado de Google, que pesa casi 1 MB, hay un enlace «Cómo llegar».",
        en: "It’s a static Next.js export on Vercel’s free subdomain, with fonts served from the same domain. Instead of Google’s embedded map, which weighs almost 1 MB, there’s a “Get directions” link.",
      },
    },
  ],

  stackDetail: [
    {
      layer: { es: "Frontend", en: "Frontend" },
      items: ["Next.js 16 (export estático)", "React 19", "TypeScript", "Tailwind CSS v4"],
    },
    {
      layer: { es: "Calidad", en: "Quality" },
      items: ["ESLint", "Prettier", "Lighthouse"],
    },
    { layer: { es: "Infraestructura", en: "Infrastructure" }, items: ["Vercel"] },
  ],

  gallery: [
    {
      src: servicios,
      size: "large",
      caption: {
        es: "Servicios, con «Consultar» en lugar de precios inventados",
        en: "Services, with “Ask for price” instead of made-up prices",
      },
      alt: {
        es: "Sección de servicios sobre fondo verde oscuro: titular «Lo de siempre, bien hecho.» y lista de cinco servicios con el precio «Consultar».",
        en: "Services section on a dark green background: the headline “The usual, done right.” and a list of five services, each priced “Consultar” (ask).",
      },
    },
    {
      src: movil,
      size: "tall",
      caption: {
        es: "En el móvil, con la barra «Llamar / Pedir cita»",
        en: "On mobile, with the “Call / Book” bar",
      },
      alt: {
        es: "La lista de servicios en un móvil, con una barra fija abajo con los botones «Llamar» y «Pedir cita».",
        en: "The list of services on a phone, with a sticky bottom bar holding “Call” and “Book” buttons.",
      },
    },
    {
      src: horario,
      size: "large",
      caption: {
        es: "Horario con «Abierto ahora» según la hora de Madrid",
        en: "Opening hours with “Open now” based on Madrid time",
      },
      alt: {
        es: "Sección «Dónde y cuándo»: indicador «Abierto ahora · cierra a las 14:00», tabla del horario semanal con el día de hoy resaltado y botón «Cómo llegar».",
        en: "“Where and when” section: an “Open now · closes at 14:00” indicator, the weekly hours table with today highlighted and a “Get directions” button.",
      },
    },
    {
      src: formularioErrores,
      size: "half",
      caption: {
        es: "Validación accesible del formulario",
        en: "Accessible form validation",
      },
      alt: {
        es: "Formulario de cita enviado vacío: aviso de demostración, campos marcados en rojo con un mensaje de error bajo cada uno y selector de días.",
        en: "Booking form submitted empty: demo notice, fields outlined in red with an error message under each one, and the day picker.",
      },
    },
    {
      src: formularioConfirmacion,
      size: "half",
      caption: {
        es: "Confirmación de la demo: no se envía nada",
        en: "Demo confirmation: nothing is sent",
      },
      alt: {
        es: "Resumen de una solicitud de ejemplo con servicio, día y franja, y un aviso: «Esto es una demostración: no se ha enviado nada».",
        en: "Summary of a sample request with service, day and time slot, and a notice: “This is a demo: nothing has been sent”.",
      },
    },
  ],

  credits: {
    es: "Diseñé y desarrollé el concepto de principio a fin: el enfoque, la identidad tipográfica, los textos y la revisión de cada parte. Lo desarrollé con Claude Code como asistente de programación.",
    en: "I designed and built the concept from start to finish: the approach, the typographic identity, the copy and reviewing every part. I built it with Claude Code as a coding assistant.",
  },
  notice: {
    es: "Rediseño conceptual no oficial, hecho por iniciativa propia y sin relación con Peluquería Arriaga. No recoge datos ni incluye reseñas, precios ni fotos del negocio.",
    en: "Unofficial concept redesign, made on my own initiative and not affiliated with Peluquería Arriaga. It collects no data and includes no reviews, prices or photos from the business.",
  },
};
