import type { Project } from "@/content/types";
import buscador from "./buscador.webp";
import cover from "./cover.webp";
import ficha from "./ficha.webp";
import interurbanos from "./interurbanos.webp";
import linea27 from "./linea-27.webp";
import movil from "./movil.webp";

// Datos tomados de PROGRESS.md y sobre.html de madrid-en-vivo, y de la web publicada
// (capturas del 6-nov-2026). No añadir nada que no esté allí.
export const mapadrid: Project = {
  slug: "mapadrid",
  title: "Mapadrid",
  year: 2026,
  featured: true,
  summary: {
    es: "Los autobuses de la EMT de Madrid, en tiempo real, sobre un mapa 3D de la ciudad de noche: como un radar de aviones, pero con la ciudad. Se puede pinchar cada autobús o buscar una línea para ver su recorrido. Sigue creciendo, con BiciMAD y más datos en camino.",
    en: "Madrid’s EMT buses, in real time, on a 3D map of the city at night: like a flight radar, but for the city. You can click any bus or search for a line to see its route. Still growing, with BiciMAD and more data on the way.",
  },
  kind: {
    es: "Proyecto personal · Web pública · En desarrollo",
    en: "Personal project · Live site · In development",
  },
  role: {
    es: "Idea, diseño y desarrollo",
    en: "Idea, design and development",
  },
  duration: {
    es: "nov. 2026 – actualidad",
    en: "Nov 2026 – present",
  },
  stack: ["JavaScript", "MapLibre GL JS", "Vercel Functions", "API de la EMT", "OpenStreetMap"],
  links: {
    live: "https://mapadrid.vercel.app",
  },
  liveKind: "site",
  liveNote: {
    es: "Datos reales en directo. Al abrirla, una línea puede tardar unos minutos en mostrar todos sus autobuses.",
    en: "Live, real data. When you open it, a line may take a few minutes to show all its buses.",
  },
  cover: {
    src: cover,
    alt: {
      es: "Mapadrid: el estadio Santiago Bernabéu iluminado entre edificios en 3D de noche, con ventanas encendidas, el paseo de la Castellana y autobuses de la EMT marcados con su número de línea. Arriba, los avisos «Autobuses reales de la EMT · 274 vistos», «Interurbanos según horario» y «Luces de tráfico simuladas», y el buscador de líneas.",
      en: "Mapadrid: the Santiago Bernabéu stadium lit up among 3D buildings at night, with lit windows, the Paseo de la Castellana and EMT buses marked with their line number. At the top, the labels “Real EMT buses · 274 seen”, “Intercity buses by timetable” and “Simulated traffic lights”, and the line search box.",
    },
  },

  stats: [
    {
      value: "237",
      label: { es: "líneas de la EMT con su recorrido", en: "EMT lines with their full route" },
    },
    {
      value: "192",
      label: {
        es: "paradas consultadas por turnos para ver toda la ciudad",
        en: "stops queried in turns to cover the whole city",
      },
    },
    { value: "0 €", label: { es: "de coste: planes gratuitos", en: "cost: free plans only" } },
  ],

  goal: {
    es: "Ver cómo se mueve Madrid de un vistazo, con datos reales: un mapa nocturno y vistoso donde los autobuses circulan en directo, que funcione en el móvil y no cueste nada mantener.",
    en: "See how Madrid moves at a glance, with real data: a striking night-time map where buses move live, that works on a phone and costs nothing to run.",
  },
  challenge: {
    es: "La EMT da la posición de los autobuses por paradas y con un límite de consultas, así que no se puede preguntar por toda la ciudad a cada momento. Además, la posición real llega cada 2 minutos aproximadamente, y el mapa tiene que moverse con fluidez entre medias y dejar claro en todo momento qué es real, qué es estimado y qué es simulado.",
    en: "The EMT provides bus positions per stop and with a query limit, so you can’t ask about the whole city at every moment. On top of that, the real position arrives roughly every 2 minutes, and the map has to move smoothly in between while always making clear what is real, what is estimated and what is simulated.",
  },

  features: [
    {
      group: { es: "En el mapa", en: "On the map" },
      items: {
        es: [
          "Madrid de noche en 3D, con edificios, ventanas encendidas y el Bernabéu iluminado, y una entrada de cámara que acaba mostrando la ciudad entera.",
          "Autobuses reales de la EMT en directo; entre una posición y la siguiente, su avance se estima siguiendo su recorrido.",
          "Interurbanos con parada en Madrid según el horario oficial del Consorcio, en aro verde y hueco y avisados como no reales.",
          "Luces de tráfico decorativas y un botón «Ver un día en un minuto», ambos indicados como simulados.",
        ],
        en: [
          "Madrid at night in 3D, with buildings, lit windows and an illuminated Bernabéu, and a camera intro that ends on the whole city.",
          "Real EMT buses, live; between one position and the next, their progress is estimated along their route.",
          "Intercity buses that stop in Madrid, placed by the Consorcio’s official timetable, drawn as hollow green rings and labelled as not real.",
          "Decorative traffic lights and a “See a day in a minute” button, both labelled as simulated.",
        ],
      },
    },
    {
      group: { es: "Buscar y consultar", en: "Search and details" },
      items: {
        es: [
          "Buscador de líneas y autobuses, también por destino: dibuja el recorrido completo de cualquiera de las 237 líneas de la EMT y cuenta sus autobuses en el mapa.",
          "Recorridos de las demás líneas interurbanas y urbanas de otros municipios de la Comunidad.",
          "Ficha de cada autobús al pincharlo: línea, destino, número de autobús, próxima parada y hace cuánto llegó su última posición real.",
        ],
        en: [
          "Search for lines and buses, also by destination: it draws the full route of any of the 237 EMT lines and counts its buses on the map.",
          "Routes of the other intercity lines and of town bus lines elsewhere in the Region of Madrid.",
          "A card for each bus when you click it: line, destination, bus number, next stop and how long ago its last real position arrived.",
        ],
      },
    },
    {
      group: { es: "En desarrollo", en: "In development" },
      items: {
        es: [
          "BiciMAD: añadir las bicicletas públicas de Madrid.",
          "Más datos donde se está mirando: al acercarse a una zona, ver todos sus autobuses sin pasar del límite diario de consultas.",
          "Volver a ver lo ocurrido: guardar los datos para reproducir cómo se movió la ciudad, sin salir de los 0 €.",
          "Pruebas en móviles reales, imagen para compartir y un vídeo corto de presentación.",
        ],
        en: [
          "BiciMAD: adding Madrid’s public bikes.",
          "More data where you’re looking: when you zoom into an area, see all its buses without exceeding the daily query limit.",
          "Replay what happened: storing the data to play back how the city moved, while staying at €0.",
          "Testing on real phones, a sharing image and a short presentation video.",
        ],
      },
    },
  ],

  decisions: [
    {
      title: { es: "Ninguna clave en el navegador", en: "No keys in the browser" },
      text: {
        es: "La página nunca habla directamente con la EMT: lo hace una función de Vercel con las claves guardadas como secretos. Esa función reparte las consultas por turnos, 32 paradas por ronda, y guarda la respuesta 30 segundos en la red de Vercel, así que muchas visitas a la vez no gastan más consultas.",
        en: "The page never talks to the EMT directly: a Vercel function does, with the keys stored as secrets. That function spreads queries in turns, 32 stops per round, and caches the response for 30 seconds on Vercel’s network, so many simultaneous visits don’t use up more queries.",
      },
    },
    {
      title: { es: "Fluido también lejos", en: "Smooth even when zoomed out" },
      text: {
        es: "El número de luces no crece al ver toda la ciudad, en el móvil hay menos, y solo circulan por lo que se ve. Los edificios aparecen a partir de cierto zoom y los autobuses fuera de pantalla no se dibujan. Si la página detecta que va lenta, baja la calidad por sí sola.",
        en: "The number of lights doesn’t grow when viewing the whole city, there are fewer on phones, and they only move through what’s on screen. Buildings appear from a certain zoom level and off-screen buses aren’t drawn. If the page detects it’s running slowly, it lowers the quality on its own.",
      },
    },
    {
      title: { es: "Sincera con los datos", en: "Honest about the data" },
      text: {
        es: "Cada elemento dice lo que es: real, según horario, estimado o simulado. Los avisos están siempre a la vista, en el buscador y en cada ficha, y una página explica de dónde sale cada dato y hasta dónde llega.",
        en: "Every element says what it is: real, by timetable, estimated or simulated. The labels are always visible, in the search box and on every card, and a page explains where each piece of data comes from and how far it reaches.",
      },
    },
    {
      title: { es: "Lo más simple posible", en: "As simple as possible" },
      text: {
        es: "Una sola página con JavaScript sin framework y MapLibre para el mapa. Unos scripts de Node preparan de antemano las calles de OpenStreetMap, los recorridos de la EMT y los horarios del Consorcio en archivos compactos, así que la web no necesita base de datos.",
        en: "A single page with framework-free JavaScript and MapLibre for the map. A few Node scripts prepare OpenStreetMap streets, EMT routes and Consorcio timetables ahead of time as compact files, so the site needs no database.",
      },
    },
  ],

  stackDetail: [
    {
      layer: { es: "Web", en: "Website" },
      items: ["JavaScript", "MapLibre GL JS", "OpenFreeMap", "HTML", "CSS"],
    },
    {
      layer: { es: "Datos", en: "Data" },
      items: [
        "API de la EMT (MobilityLabs)",
        "Datos abiertos del CRTM",
        "OpenStreetMap",
        "Node.js",
      ],
    },
    {
      layer: { es: "Infraestructura", en: "Infrastructure" },
      items: ["Vercel", "Vercel Functions", "Cloudflare Web Analytics"],
    },
  ],

  gallery: [
    {
      src: ficha,
      size: "large",
      caption: {
        es: "Ficha de un autobús en el centro, con su próxima parada",
        en: "A bus card in the city centre, with its next stop",
      },
      alt: {
        es: "Centro de Madrid en 3D de noche con decenas de autobuses marcados con su número. Uno de la línea 2 está seleccionado y su ficha dice: «Línea 2 → Reina Victoria, autobús nº 3420, llega a Santo Domingo (parada 168) en menos de 1 min» y cuándo llegó su última posición real.",
        en: "Central Madrid in 3D at night with dozens of buses marked with their number. One on line 2 is selected and its card reads: “Line 2 → Reina Victoria, bus no. 3420, arrives at Santo Domingo (stop 168) in under 1 min”, and when its last real position arrived.",
      },
    },
    {
      src: movil,
      size: "tall",
      caption: {
        es: "En el móvil, con el recorrido de la línea 27",
        en: "On a phone, with the route of line 27",
      },
      alt: {
        es: "Mapadrid en tamaño móvil: los avisos de qué es real, el buscador con «Línea 27: 8 autobuses en el mapa» y el recorrido de la línea dibujado en amarillo de Plaza de Castilla a Embajadores, con sus autobuses encima.",
        en: "Mapadrid at phone size: the labels showing what’s real, the search box with “Line 27: 8 buses on the map” and the line’s route drawn in yellow from Plaza de Castilla to Embajadores, with its buses on it.",
      },
    },
    {
      src: linea27,
      size: "large",
      caption: {
        es: "Recorrido completo de una línea sobre toda la ciudad",
        en: "A line’s full route across the whole city",
      },
      alt: {
        es: "Vista de Madrid entero con cientos de autobuses como puntos azules y la línea 27 resaltada en amarillo a lo largo de la Castellana, con el mensaje «Línea 27: 11 autobuses en el mapa».",
        en: "View of the whole of Madrid with hundreds of buses as blue dots and line 27 highlighted in yellow along the Castellana, with the message “Line 27: 11 buses on the map”.",
      },
    },
    {
      src: buscador,
      size: "half",
      caption: {
        es: "Buscador de líneas y autobuses",
        en: "Line and bus search",
      },
      alt: {
        es: "Buscador con «27» escrito y sus resultados: la línea 27 Plaza Castilla ↔ Embajadores, autobuses cuyo número empieza por 27 con su línea y destino, e interurbanas de Alcalá de Henares.",
        en: "Search box with “27” typed and its results: line 27 Plaza Castilla ↔ Embajadores, buses whose number starts with 27 with their line and destination, and intercity lines from Alcalá de Henares.",
      },
    },
    {
      src: interurbanos,
      size: "half",
      caption: {
        es: "Toda la Comunidad, con los interurbanos según horario",
        en: "The whole region, with intercity buses by timetable",
      },
      alt: {
        es: "Mapa de la Comunidad de Madrid de noche: los autobuses de la EMT como puntos azules en la capital y los interurbanos como aros verdes por las carreteras hacia Alcobendas, Alcorcón, Móstoles o Torrejón de Ardoz.",
        en: "Night map of the Region of Madrid: EMT buses as blue dots in the capital and intercity buses as green rings along the roads towards Alcobendas, Alcorcón, Móstoles or Torrejón de Ardoz.",
      },
    },
  ],

  credits: {
    es: "Dirigí el proyecto de principio a fin: la idea, las decisiones de producto, diseño y tecnología, la solicitud de acceso a los datos de la EMT y la revisión y prueba de cada parte antes de darla por terminada. Lo desarrollé con Claude Code como asistente de programación.",
    en: "I led the project from start to finish: the idea, the product, design and technology decisions, applying for access to the EMT’s data, and reviewing and testing every part before calling it done. I built it with Claude Code as a coding assistant.",
  },
  notice: {
    es: "No es un servicio oficial de la EMT, del Consorcio Regional de Transportes ni del Ayuntamiento de Madrid. Autobuses y recorridos: Powered by EMT de Madrid. Horarios de los interurbanos: Powered by CRTM, a partir de sus datos abiertos. Calles y edificios: © colaboradores de OpenStreetMap.",
    en: "Not an official service of the EMT, the Consorcio Regional de Transportes or Madrid City Council. Buses and routes: Powered by EMT de Madrid. Intercity timetables: Powered by CRTM, from its open data. Streets and buildings: © OpenStreetMap contributors.",
  },
};
