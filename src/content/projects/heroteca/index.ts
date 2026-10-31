import type { Project } from "@/content/types";
import cover from "./cover.webp";
import dcOrdenCrossover from "./dc-orden-crossover.webp";
import dcSeriesCarpetas from "./dc-series-carpetas.webp";
import ficha from "./ficha.webp";
import marvelUmcClaro from "./marvel-umc-claro.webp";

// Datos tomados del README de heroteca y de la medición de Lighthouse que hizo el autor.
// No añadir nada que no esté allí.
export const heroteca: Project = {
  slug: "heroteca",
  title: "Heroteca",
  year: 2026,
  featured: true,
  summary: {
    es: "Enciclopedia de películas, series y animación de Marvel y DC generada a partir de un archivo personal de documentos Word y PowerPoint: 423 fichas, estanterías con la numeración original y órdenes de visionado capítulo a capítulo.",
    en: "An encyclopedia of Marvel and DC films, series and animation generated from a personal archive of Word and PowerPoint documents: 423 entries, shelves with the original numbering and episode-by-episode viewing orders.",
  },
  kind: {
    es: "Proyecto personal · Web pública",
    en: "Personal project · Live site",
  },
  role: {
    es: "Producto, diseño y desarrollo",
    en: "Product, design and development",
  },
  duration: {
    es: "oct. 2026",
    en: "Oct 2026",
  },
  stack: ["Astro", "TypeScript", "Zod", "Python", "TMDB API"],
  links: {
    live: "https://heroteca.vercel.app",
    repo: "https://github.com/Vicram4/heroteca",
  },
  liveNote: {
    es: "Pulsa / en cualquier página para buscar. La web está solo en español.",
    en: "Press / on any page to search. The site is in Spanish only.",
  },
  cover: {
    src: cover,
    alt: {
      es: "Portada de Heroteca: el lema «Todo el multiverso, en un solo lugar» y la elección de universo, con dos tarjetas hechas de carátulas: Marvel, con 246 títulos, y DC, con 177.",
      en: "Heroteca home page: the tagline “The whole multiverse, in one place” and a choice of universe, with two cards made of DVD covers: Marvel, with 246 titles, and DC, with 177.",
    },
  },

  stats: [
    { value: "423", label: { es: "fichas de Marvel y DC", en: "Marvel and DC entries" } },
    {
      value: "100",
      label: {
        es: "en accesibilidad y SEO (Lighthouse)",
        en: "accessibility and SEO (Lighthouse)",
      },
    },
    { value: "0 €", label: { es: "de coste: planes gratuitos", en: "cost: free plans only" } },
  ],

  goal: {
    es: "Convertir años de colección de superhéroes, catalogada en documentos de Word y PowerPoint, en una web navegable, rápida y sin coste, sin perder nada de lo que contenía el archivo original.",
    en: "Turn years of a superhero collection, catalogued in Word and PowerPoint documents, into a fast, browsable website that costs nothing to run, without losing anything the original archive held.",
  },
  challenge: {
    es: "El archivo tiene su propia organización: en Marvel, una numeración cronológica del UMC; en DC, la estructura de carpetas del disco duro y un orden de visionado que alterna capítulos de Arrow, Flash, Supergirl y Legends. Una base de datos genérica lo habría perdido. Además, los datos estaban repartidos en tablas, cuadros de texto e incluso imágenes.",
    en: "The archive has its own organisation: for Marvel, a chronological MCU numbering; for DC, the folder structure of the hard drive and a viewing order that alternates episodes of Arrow, Flash, Supergirl and Legends. A generic database would have lost all that. On top of that, the data was spread across tables, text boxes and even images.",
  },

  features: [
    {
      group: { es: "Explorar", en: "Browsing" },
      items: {
        es: [
          "Estanterías con la numeración original y orden alternable: de la historia o de estreno.",
          "Series de DC ordenadas por carpetas, con el orden de visionado capítulo a capítulo entre varias series.",
          "Filtros por tipo, década, personaje y saga.",
          "Búsqueda instantánea con el atajo /, que también encuentra títulos originales y alternativos.",
        ],
        en: [
          "Shelves with the original numbering and a switchable order: story order or release order.",
          "DC series ordered by folder, with the episode-by-episode viewing order across several series.",
          "Filters by type, decade, character and saga.",
          "Instant search with the / shortcut, which also finds original and alternative titles.",
        ],
      },
    },
    {
      group: { es: "Fichas", en: "Entries" },
      items: {
        es: [
          "Datos del archivo original, completados con sinopsis, reparto, carteles y tráileres de TMDB. Cada dato de TMDB queda marcado.",
          "Spoilers ocultos hasta pulsarlos, aviso de escenas post-créditos y «ver antes / ver después».",
          "Modo claro y oscuro que sigue al sistema y recuerda la elección; adaptada a móvil.",
        ],
        en: [
          "Data from the original archive, completed with synopses, cast, posters and trailers from TMDB. Every TMDB field is labelled.",
          "Spoilers hidden until clicked, post-credits scene alerts and “watch before / watch after”.",
          "Light and dark mode that follows the system and remembers your choice; mobile-friendly.",
        ],
      },
    },
    {
      group: { es: "Contenido y calidad", en: "Content and quality" },
      items: {
        es: [
          "423 fichas (246 de Marvel y 177 de DC), 171 personajes y 42 sagas y agrupaciones.",
          "Lighthouse: accesibilidad y SEO 100, buenas prácticas 96–100 y rendimiento 94–98.",
          "Contraste AA en ambos modos, navegación por teclado con foco visible y respeto a «reducir movimiento».",
          "Datos estructurados de schema.org (películas, series y temporadas) y mapa del sitio.",
        ],
        en: [
          "423 entries (246 Marvel and 177 DC), 171 characters and 42 sagas and groupings.",
          "Lighthouse: accessibility and SEO 100, best practices 96–100 and performance 94–98.",
          "AA contrast in both modes, keyboard navigation with a visible focus and support for “reduce motion”.",
          "schema.org structured data (films, series and seasons) and a sitemap.",
        ],
      },
    },
  ],

  decisions: [
    {
      title: { es: "Los documentos mandan", en: "The documents come first" },
      text: {
        es: "TMDB solo rellena lo que falta y nunca sobrescribe el archivo. Cada título se empareja con un umbral de confianza: los casos dudosos van a una lista de revisión y a un archivo de correcciones manuales. Las erratas evidentes se corrigen dejando una nota con el texto original.",
        en: "TMDB only fills in what’s missing and never overwrites the archive. Each title is matched against a confidence threshold: doubtful cases go to a review list and a file of manual corrections. Obvious typos are fixed, leaving a note with the original text.",
      },
    },
    {
      title: {
        es: "Del Word a la web, con validación",
        en: "From Word to the web, with validation",
      },
      text: {
        es: "Scripts de Python leen los documentos, incluida la calidad de cada copia, que en los originales es una imagen y se identifica por su huella SHA-1. Generan una ficha en Markdown con cabecera YAML, editable a mano. Astro la valida con Zod y comprueba referencias rotas o números duplicados: si un dato está mal, la compilación falla e indica el archivo y el campo.",
        en: "Python scripts read the documents, including the quality of each copy, which in the originals is an image identified by its SHA-1 fingerprint. They generate one Markdown entry with a YAML header, editable by hand. Astro validates it with Zod and checks for broken references or duplicate numbers: if a field is wrong, the build fails and points to the file and the field.",
      },
    },
    {
      title: {
        es: "Ni claves ni llamadas desde el navegador",
        en: "No keys or calls from the browser",
      },
      text: {
        es: "TMDB solo se consulta al sincronizar, nunca desde el navegador. Los datos se guardan en un JSON compacto dentro del repositorio, así que la web publicada no necesita claves ni hace llamadas externas. El tráiler usa youtube-nocookie y solo se carga al pulsarlo.",
        en: "TMDB is only queried when syncing, never from the browser. The data is stored as compact JSON in the repository, so the live site needs no keys and makes no external calls. The trailer uses youtube-nocookie and only loads when clicked.",
      },
    },
    {
      title: {
        es: "Estática y preparada para crecer",
        en: "Static and ready to grow",
      },
      text: {
        es: "La web es 100 % estática, sin framework de cliente: solo unas pocas islas de JavaScript sin dependencias (buscador, filtros, tema, spoilers y tráiler). Añadir un universo nuevo es crear un archivo YAML; las rutas, la navegación y la portada se generan solas.",
        en: "The site is 100% static, with no client-side framework: just a few dependency-free JavaScript islands (search, filters, theme, spoilers and trailer). Adding a new universe means creating one YAML file; routes, navigation and the home page are generated automatically.",
      },
    },
  ],

  stackDetail: [
    {
      layer: { es: "Web", en: "Website" },
      items: ["Astro 7", "TypeScript", "Content Collections", "Zod", "CSS", "Fontsource"],
    },
    {
      layer: { es: "Extracción de datos", en: "Data extraction" },
      items: ["Python", "python-docx", "python-pptx", "PyMuPDF", "Pillow", "TMDB API"],
    },
    { layer: { es: "Infraestructura", en: "Infrastructure" }, items: ["Vercel"] },
  ],

  gallery: [
    {
      src: dcSeriesCarpetas,
      size: "half",
      caption: {
        es: "Series de DC ordenadas por las carpetas del archivo",
        en: "DC series ordered by the archive’s folders",
      },
      alt: {
        es: "Página «Series · Por carpetas» de DC: botones de orden y tipo, filtros por década, personaje y saga, y la Carpeta 1 · Pre-Crossover con las cinco primeras temporadas de Smallville numeradas del 1.1 al 1.5.",
        en: "DC “Series · By folder” page: order and type buttons, filters by decade, character and saga, and Folder 1 · Pre-Crossover with the first five seasons of Smallville numbered 1.1 to 1.5.",
      },
    },
    {
      src: dcOrdenCrossover,
      size: "half",
      caption: {
        es: "Orden de visionado capítulo a capítulo entre varias series",
        en: "Episode-by-episode viewing order across several series",
      },
      alt: {
        es: "Tabla «Orden capítulo a capítulo» en dos columnas: episodios numerados de The Flash, Arrow, Supergirl y DC’s Legends of Tomorrow alternados, cada uno con su temporada, capítulo y título, y una franja de color por serie.",
        en: "“Episode-by-episode order” table in two columns: numbered episodes of The Flash, Arrow, Supergirl and DC’s Legends of Tomorrow interleaved, each with its season, episode and title, and a colour stripe per series.",
      },
    },
    {
      src: ficha,
      size: "half",
      caption: {
        es: "Ficha con datos del archivo y de TMDB",
        en: "Entry with data from the archive and from TMDB",
      },
      alt: {
        es: "Ficha de Watchmen, número 021 del UDC: cartel, etiquetas de película, 2009, 163 min y calidad 4K, sinopsis marcada como «Sinopsis de TMDB» y el tráiler con un botón de reproducir.",
        en: "Watchmen entry, number 021 of the DCU: poster, tags for film, 2009, 163 min and 4K quality, a synopsis labelled “Synopsis from TMDB” and the trailer with a play button.",
      },
    },
    {
      src: marvelUmcClaro,
      size: "half",
      caption: {
        es: "Estantería del UMC en modo claro",
        en: "MCU shelf in light mode",
      },
      alt: {
        es: "Página «UMC · Orden cronológico» en modo claro: botones de orden de la historia o de estreno, filtros por tipo, y carátulas numeradas desde el 001, Capitán América: El primer vengador, con un borde de color según el tipo.",
        en: "“MCU · Chronological order” page in light mode: story or release order buttons, filters by type, and covers numbered from 001, Captain America: The First Avenger, each with a colour border by type.",
      },
    },
  ],

  credits: {
    es: "Dirigí el proyecto de principio a fin: el archivo original, la idea, las decisiones de producto, diseño y tecnología, y la revisión y prueba de cada parte antes de darla por terminada. Lo desarrollé con Claude Code como asistente de programación.",
    en: "I led the project from start to finish: the original archive, the idea, the product, design and technology decisions, and reviewing and testing every part before calling it done. I built it with Claude Code as a coding assistant.",
  },
  notice: {
    es: "Proyecto de fans sin ánimo de lucro y no oficial, sin relación con Marvel, DC, Disney ni Warner Bros. Todos los personajes y marcas pertenecen a sus respectivos propietarios. Usa TMDB y su API, pero no está respaldado ni certificado por TMDB.",
    en: "Non-profit, unofficial fan project, not affiliated with Marvel, DC, Disney or Warner Bros. All characters and trademarks belong to their respective owners. It uses TMDB and the TMDB API but is not endorsed or certified by TMDB.",
  },
};
