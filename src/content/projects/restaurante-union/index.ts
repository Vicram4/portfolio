import type { Project } from "@/content/types";
import bebidas from "./bebidas.webp";
import carta from "./carta.webp";
import cover from "./cover.webp";
import movil from "./movil.webp";
import reservasEnviado from "./reservas-enviado.webp";
import reservas from "./reservas.webp";

// Datos tomados de PROGRESS.md y el código de restaurante-union, y de la medición de
// Lighthouse en el Worker (móvil, 8 páginas, nov. 2026). No añadir nada que no esté allí.
// Sin datos del negocio (dueño, dirección, teléfono): están pendientes de confirmar.
export const restauranteUnion: Project = {
  slug: "restaurante-union",
  title: "Restaurante Unión",
  year: 2026,
  featured: false,
  // Es una propuesta que el restaurante aún no ha visto: fuera de los buscadores.
  noindex: true,
  summary: {
    es: "Rediseño conceptual no oficial de la web de un restaurante de brasa de Alcalá de Henares: carta por secciones, horario con «abierto ahora», reservas y encargos, versión en inglés y panel para editar la carta y el menú del día sin tocar código.",
    en: "Unofficial concept redesign of the website for a charcoal-grill restaurant in Alcalá de Henares: a menu split into sections, opening hours with a live “open now” status, bookings and special orders, an English version and a panel for editing the menu and the daily set menu without touching code.",
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
    es: "nov. 2026",
    en: "Nov 2026",
  },
  stack: ["Astro 7", "TypeScript", "Tailwind CSS 4", "Keystatic", "Cloudflare Workers"],
  links: {
    live: "https://restaurante-union.victorramos-devs.workers.dev",
  },
  liveNote: {
    es: "Demo de una idea de mejora para la web del restaurante: concepto no oficial, sin relación con él. El formulario de reservas es una demostración: valida los datos y prepara el mensaje, pero no envía ni guarda nada. En inglés están la portada, la carta y el contacto.",
    en: "Demo of an improvement idea for the restaurant’s website: an unofficial concept, not affiliated with it. The booking form is a demo: it validates your input and drafts the message, but doesn’t send or store anything. The home page, menu and contact page are available in English.",
  },
  cover: {
    src: cover,
    alt: {
      es: "Página de la carta del concepto de Restaurante Unión: franja de concepto no oficial, logotipo, menú de navegación, titular «La carta» y cartel naranja con el cachopo de ternera XXL y su precio.",
      en: "Menu page of the Restaurante Unión concept: unofficial concept notice, logo, navigation, the heading “La carta” and an orange poster featuring the XXL veal cachopo and its price.",
    },
  },

  stats: [
    {
      value: "100",
      label: { es: "en rendimiento (Lighthouse, móvil)", en: "performance (Lighthouse, mobile)" },
    },
    {
      value: "100",
      label: {
        es: "en accesibilidad (Lighthouse, móvil)",
        en: "accessibility (Lighthouse, mobile)",
      },
    },
    { value: "56", label: { es: "platos y bebidas editables", en: "editable dishes and drinks" } },
  ],

  goal: {
    es: "Mostrar cómo el móvil puede dejar ver rápido qué hay, cuánto cuesta y cómo reservar, y cómo el restaurante podría mantener sus precios sin depender de un desarrollador.",
    en: "Show how a phone can quickly tell you what’s on the menu, what it costs and how to book, and how the restaurant could keep its prices up to date without relying on a developer.",
  },
  challenge: {
    es: "Faltaban datos por confirmar: el horario del sábado, los alérgenos y las fotos. La web debía funcionar sin inventarlos y estar preparada para completarse cuando llegaran.",
    en: "Some details were still unconfirmed: Saturday opening hours, allergens and photos. The site had to work without making them up and be ready to be filled in once they arrived.",
  },

  features: [
    {
      group: { es: "Visitantes", en: "Visitors" },
      items: {
        es: [
          "Carta con pestañas accesibles y enlace directo a cada sección.",
          "«Abierto ahora» según la hora de Madrid.",
          "Barra fija en el móvil con «Llamar», «Reservar» y «Cómo llegar».",
        ],
        en: [
          "A menu with accessible tabs and a direct link to each section.",
          "“Open now” based on Madrid time.",
          "A sticky bar on mobile with “Call”, “Book” and “Get directions”.",
        ],
      },
    },
    {
      group: { es: "Formulario de reservas (demo)", en: "Booking form (demo)" },
      items: {
        es: [
          "Prepara el correo ya escrito y, en esta demo, lo muestra sin enviarlo.",
          "Valida días cerrados, horas fuera de turno y el mínimo de 4 personas en los arroces.",
        ],
        en: [
          "It drafts the email and, in this demo, shows it without sending it.",
          "It checks for closed days, times outside service hours and the 4-person minimum for rice dishes.",
        ],
      },
    },
    {
      group: { es: "Panel de edición", en: "Editing panel" },
      items: {
        es: [
          "Permite editar la carta y el menú del día sin tocar código.",
          "Se puede usar desde el móvil y sin cuenta de GitHub.",
        ],
        en: [
          "It lets you edit the menu and the daily set menu without touching code.",
          "It works on a phone and doesn’t need a GitHub account.",
        ],
      },
    },
  ],

  decisions: [
    {
      title: {
        es: "Panel separado de la web estática",
        en: "A panel kept apart from the static site",
      },
      text: {
        es: "La web pública sigue siendo estática y sin React. El panel de Keystatic vive aparte, con su propia configuración, así que añadirlo no cambió lo que recibe quien visita la web.",
        en: "The public site stays static and React-free. The Keystatic panel lives separately, with its own configuration, so adding it didn’t change what visitors receive.",
      },
    },
    {
      title: { es: "Datos pendientes a la vista", en: "Missing details left visible" },
      text: {
        es: "Lo que falta no se rellena con suposiciones: el sábado invita a llamar para confirmar, las fotos dejan un hueco marcado y los datos legales aparecen como pendientes. Los alérgenos se muestran en cuanto la carta los tenga.",
        en: "Gaps aren’t filled with guesses: Saturday asks you to call and confirm, photos leave a marked slot and legal details are shown as pending. Allergens appear as soon as the menu includes them.",
      },
    },
    {
      title: { es: "Sin cookies y mapa bajo demanda", en: "No cookies, map on demand" },
      text: {
        es: "La web no instala cookies ni pide nada a terceros al cargar. El mapa de Google solo se carga al pulsar «Ver el mapa», con un aviso junto al botón.",
        en: "The site sets no cookies and requests nothing from third parties on load. Google’s map only loads when you press “See the map”, with a notice next to the button.",
      },
    },
    {
      title: {
        es: "URL antiguas, schema y hreflang",
        en: "Old URLs, schema and hreflang",
      },
      text: {
        es: "Conserva las URL de la web actual, incluida una con errata, y añade datos estructurados de schema.org con lo confirmado y hreflang entre español e inglés. Mientras sea un concepto, no se indexa.",
        en: "It keeps the current site’s URLs, including one with a typo, and adds schema.org structured data limited to confirmed details, plus hreflang between Spanish and English. While it’s a concept, it isn’t indexed.",
      },
    },
  ],

  stackDetail: [
    {
      layer: { es: "Frontend", en: "Frontend" },
      items: ["Astro 7", "TypeScript", "Tailwind CSS 4"],
    },
    { layer: { es: "Panel", en: "Panel" }, items: ["Keystatic"] },
    { layer: { es: "Calidad", en: "Quality" }, items: ["Lighthouse"] },
    { layer: { es: "Infraestructura", en: "Infrastructure" }, items: ["Cloudflare Workers"] },
  ],

  gallery: [
    {
      src: carta,
      size: "large",
      caption: {
        es: "La carta por secciones, con el plato recomendado destacado",
        en: "The menu by section, with the recommended dish highlighted",
      },
      alt: {
        es: "Sección «Raciones» de la carta sobre fondo oscuro: pestañas de secciones arriba y lista de platos con sus precios, con el pulpo a la gallega en grande.",
        en: "The “Raciones” (sharing plates) section of the menu on a dark background: section tabs at the top and a list of dishes with prices, with the Galician-style octopus shown larger.",
      },
    },
    {
      src: movil,
      size: "tall",
      caption: {
        es: "En el móvil, con la barra «Llamar / Reservar / Cómo llegar»",
        en: "On mobile, with the “Call / Book / Get directions” bar",
      },
      alt: {
        es: "La carta en un móvil: franja de concepto no oficial, cartel naranja con el cachopo y el pulpo, y barra fija abajo con «Llamar», «Reservar» y «Cómo llegar».",
        en: "The menu on a phone: unofficial concept notice, an orange poster with the cachopo and the octopus, and a sticky bottom bar with “Llamar”, “Reservar” and “Cómo llegar”.",
      },
    },
    {
      src: bebidas,
      size: "large",
      caption: {
        es: "Las bebidas, en un ticket de papel",
        en: "The drinks, on a paper receipt",
      },
      alt: {
        es: "Pestaña «Bebidas» de la carta: un ticket de color crema con cervezas, vinos y refrescos, y sus precios.",
        en: "The “Bebidas” (drinks) menu tab: a cream-coloured receipt listing beers, wines and soft drinks with their prices.",
      },
    },
    {
      src: reservas,
      size: "half",
      caption: {
        es: "Formulario de reservas y encargos, con su aviso de demostración",
        en: "Bookings and special orders form, with its demo notice",
      },
      alt: {
        es: "Formulario en un ticket de papel con día, hora, personas y arroz por encargo, y el aviso «Esto es una demostración». A la izquierda, los arroces por encargo.",
        en: "A form on a paper receipt with day, time, party size and rice dish to order, and the notice “Esto es una demostración” (this is a demo). On the left, the rice dishes to order.",
      },
    },
    {
      src: reservasEnviado,
      size: "half",
      caption: {
        es: "Al enviar, enseña el correo y avisa de que no se ha enviado nada",
        en: "On submit, it shows the email and says nothing was sent",
      },
      alt: {
        es: "Resultado de una reserva de ejemplo: titular «No se ha enviado nada», aviso de demostración y el texto del correo que se prepararía.",
        en: "Result of a sample booking: the heading “No se ha enviado nada” (nothing has been sent), a demo notice and the text of the email that would be drafted.",
      },
    },
  ],

  credits: {
    es: "Dirigí el proyecto de principio a fin: elegí la dirección visual, revisé cada parte y probé el panel. Lo desarrollé con Claude Code.",
    en: "I led the project from start to finish: I chose the visual direction, reviewed every part and tested the panel. I built it with Claude Code.",
  },
  notice: {
    es: "Concepto no oficial: una idea de mejora para la web del restaurante, hecha por iniciativa propia y sin relación con él.",
    en: "Unofficial concept: an improvement idea for the restaurant’s website, made on my own initiative and not affiliated with it.",
  },
};
