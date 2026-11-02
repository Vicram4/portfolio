import type { Project } from "@/content/types";
import cover from "./cover.webp";
import dcOrdenCrossover from "./dc-orden-crossover.webp";
import dcSeriesCarpetas from "./dc-series-carpetas.webp";
import estadisticas from "./estadisticas.webp";
import ficha from "./ficha.webp";
import marvelUmcClaro from "./marvel-umc-claro.webp";
import pasatiempos from "./pasatiempos.webp";

// Datos tomados del README de heroteca, que incluye la medición de Lighthouse.
// No añadir nada que no esté allí.
export const heroteca: Project = {
  slug: "heroteca",
  title: "Heroteca",
  year: 2026,
  featured: true,
  summary: {
    es: "Enciclopedia bilingüe de películas, series y animación de Marvel y DC generada a partir de un archivo personal de documentos Word y PowerPoint: 426 fichas, órdenes de visionado capítulo a capítulo y datos que se actualizan solos.",
    en: "A bilingual encyclopedia of Marvel and DC films, series and animation generated from a personal archive of Word and PowerPoint documents: 426 entries, episode-by-episode viewing orders and data that updates itself.",
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
    es: "oct.–nov. 2026",
    en: "Oct–Nov 2026",
  },
  stack: ["Astro", "TypeScript", "Zod", "Python", "TMDB API", "GitHub Actions"],
  links: {
    live: "https://heroteca.vercel.app",
    repo: "https://github.com/Vicram4/heroteca",
  },
  liveKind: "site",
  liveNote: {
    es: "Pulsa / en cualquier página para buscar. Disponible en español e inglés.",
    en: "Press / on any page to search. Available in Spanish and English.",
  },
  cover: {
    src: cover,
    alt: {
      es: "Portada de Heroteca: el lema «Todo el multiverso, en un solo lugar», el selector de idioma y la elección de universo, con dos tarjetas hechas de carteles: Marvel, con 247 títulos, y DC, con 179. Debajo, el test «¿No sabes qué ver?».",
      en: "Heroteca home page: the tagline “The whole multiverse, in one place”, the language switcher and a choice of universe, with two cards made of posters: Marvel, with 247 titles, and DC, with 179. Below, the “Not sure what to watch?” quiz.",
    },
  },

  stats: [
    { value: "426", label: { es: "fichas de Marvel y DC", en: "Marvel and DC entries" } },
    {
      value: "100",
      label: {
        es: "en accesibilidad, SEO y buenas prácticas (Lighthouse)",
        en: "accessibility, SEO and best practices (Lighthouse)",
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
          "Estanterías con la numeración original, vista de lista y cuatro órdenes: el de la colección, estreno, más recientes y mejor valoradas.",
          "Series de DC ordenadas por carpetas, con el orden de visionado capítulo a capítulo entre varias series.",
          "Filtros por tipo, década, personaje, saga y plataforma.",
          "Búsqueda instantánea con el atajo /, que también encuentra títulos originales y alternativos, y actores.",
        ],
        en: [
          "Shelves with the original numbering, a list view and four orders: collection, release, most recent and top rated.",
          "DC series ordered by folder, with the episode-by-episode viewing order across several series.",
          "Filters by type, decade, character, saga and platform.",
          "Instant search with the / shortcut, which also finds original and alternative titles, and actors.",
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
      group: { es: "Herramientas", en: "Tools" },
      items: {
        es: [
          "«¿Qué veo?»: una encuesta de 7 preguntas que recomienda títulos según tu tiempo, tus plataformas y tus gustos.",
          "Mi progreso: marca lo que has visto y consulta el avance por sección; se guarda solo en el navegador, sin cuentas.",
          "Planificador de maratones que reparte las horas en sesiones con descansos; el plan viaja en el enlace, sin servidor.",
          "Estadísticas y rankings con gráficos accesibles, y 11 juegos hechos con los datos de la colección.",
        ],
        en: [
          "“What should I watch?”: a 7-question quiz that recommends titles based on your time, platforms and tastes.",
          "My progress: mark what you’ve watched and check your progress by section; it’s stored only in the browser, with no accounts.",
          "Marathon planner that splits the hours into sessions with breaks; the plan travels in the link, with no server.",
          "Statistics and rankings with accessible charts, and 11 games built from the collection’s data.",
        ],
      },
    },
    {
      group: { es: "Datos al día", en: "Up-to-date data" },
      items: {
        es: [
          "«Dónde ver» (datos de JustWatch) y el calendario de estrenos se actualizan solos cada semana con GitHub Actions.",
          "Noticias de Marvel y DC recogidas cada día por RSS de medios especializados, con enlace a la fuente.",
          "Para el mantenimiento, un aviso semanal por correo con estrenos anunciados, cambios de fecha y títulos que faltan en la colección.",
        ],
        en: [
          "“Where to watch” (JustWatch data) and the release calendar update themselves every week with GitHub Actions.",
          "Marvel and DC news collected daily via RSS from specialist outlets, linking to the source.",
          "For maintenance, a weekly email alert with announced releases, date changes and titles missing from the collection.",
        ],
      },
    },
    {
      group: { es: "Contenido y calidad", en: "Content and quality" },
      items: {
        es: [
          "426 fichas (247 de Marvel y 179 de DC), 180 personajes y 42 sagas y agrupaciones.",
          "Wiki con 273 textos en español e inglés y páginas de 287 intérpretes.",
          "Lighthouse: accesibilidad, SEO y buenas prácticas 100, y rendimiento 90–99.",
          "Contraste AA en ambos modos, navegación por teclado con foco visible y respeto a «reducir movimiento».",
          "Datos estructurados de schema.org, mapa del sitio y hreflang; comprobación de unos 47.000 enlaces internos y 1.340 parejas de idioma.",
        ],
        en: [
          "426 entries (247 Marvel and 179 DC), 180 characters and 42 sagas and groupings.",
          "A wiki with 273 texts in Spanish and English, and pages for 287 performers.",
          "Lighthouse: accessibility, SEO and best practices 100, and performance 90–99.",
          "AA contrast in both modes, keyboard navigation with a visible focus and support for “reduce motion”.",
          "schema.org structured data, a sitemap and hreflang; checks on about 47,000 internal links and 1,340 language pairs.",
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
        es: "Ninguna clave en el navegador",
        en: "No keys in the browser",
      },
      text: {
        es: "TMDB solo se consulta al sincronizar, nunca desde el navegador, y su clave se guarda como secreto de GitHub. Los datos quedan en un JSON compacto dentro del repositorio, así que las páginas no dependen de ninguna API. El tráiler usa youtube-nocookie y solo se carga al pulsarlo, y las visitas se miden con Cloudflare Web Analytics, sin cookies.",
        en: "TMDB is only queried when syncing, never from the browser, and its key is stored as a GitHub secret. The data ends up as compact JSON in the repository, so pages don’t depend on any API. The trailer uses youtube-nocookie and only loads when clicked, and visits are measured with Cloudflare Web Analytics, with no cookies.",
      },
    },
    {
      title: {
        es: "Dos idiomas sin duplicar páginas",
        en: "Two languages without duplicating pages",
      },
      text: {
        es: "Cada página existe una sola vez y genera su versión española y la inglesa. Las direcciones en inglés se calculan a partir de los datos, como el título inglés de cada ficha, así que no hay ninguna tabla de rutas que mantener.",
        en: "Each page exists only once and generates both its Spanish and English versions. English URLs are computed from the data, such as each entry’s English title, so there’s no route table to maintain.",
      },
    },
    {
      title: {
        es: "Estática y preparada para crecer",
        en: "Static and ready to grow",
      },
      text: {
        es: "La web es 100 % estática, sin framework de cliente: el JavaScript, sin dependencias, se limita a islas como el buscador, los filtros, los juegos o el planificador. Añadir un universo nuevo es crear un archivo YAML; las rutas, la navegación y la portada se generan solas.",
        en: "The site is 100% static, with no client-side framework: the JavaScript, free of dependencies, is limited to islands such as search, filters, games and the planner. Adding a new universe means creating one YAML file; routes, navigation and the home page are generated automatically.",
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
      items: ["Python", "python-docx", "python-pptx", "PyMuPDF", "Pillow", "TMDB API", "JustWatch"],
    },
    {
      layer: { es: "Infraestructura", en: "Infrastructure" },
      items: ["Vercel", "GitHub Actions", "Cloudflare Web Analytics"],
    },
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
        es: "Página «Series · Por carpetas» de DC: botones de vista, orden y tipo, filtros por década, personaje, plataforma y saga, y la Carpeta 1 · Pre-Crossover con las cinco primeras temporadas de Smallville numeradas del 1.1 al 1.5.",
        en: "DC “Series · By folder” page: view, order and type buttons, filters by decade, character, platform and saga, and Folder 1 · Pre-Crossover with the first five seasons of Smallville numbered 1.1 to 1.5.",
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
        es: "Ficha de Watchmen, número 021 del UDC: cartel, etiquetas de película, 2009, 163 min y calidad 4K, botón «Marcar como visto», un párrafo «En resumen» y la sinopsis marcada como «Sinopsis de TMDB».",
        en: "Watchmen entry, number 021 of the DCU: poster, tags for film, 2009, 163 min and 4K quality, a “Mark as watched” button, an “In short” paragraph and a synopsis labelled “Synopsis from TMDB”.",
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
        es: "Página «UMC · Orden cronológico» en modo claro: botones de vista y de los cuatro órdenes, filtros por tipo, y carteles numerados desde el 001, Capitán América: El primer vengador, con un borde de color según el tipo.",
        en: "“MCU · Chronological order” page in light mode: view buttons and the four orders, filters by type, and posters numbered from 001, Captain America: The First Avenger, each with a colour border by type.",
      },
    },
    {
      src: estadisticas,
      size: "half",
      caption: {
        es: "Estadísticas calculadas con los datos de la colección",
        en: "Statistics computed from the collection’s data",
      },
      alt: {
        es: "Página «Estadísticas»: 1686 horas para verlo todo, 426 títulos, 471 horas de maratón del UMC, 80 de 222 películas con escena poscréditos y un gráfico de barras con las horas de cada sección.",
        en: "“Statistics” page: 1,686 hours to watch it all, 426 titles, a 471-hour MCU marathon, 80 of 222 films with a post-credits scene and a bar chart with the hours of each section.",
      },
    },
    {
      src: pasatiempos,
      size: "half",
      caption: {
        es: "Juegos hechos con los datos de la colección",
        en: "Games built from the collection’s data",
      },
      alt: {
        es: "Página «Pasatiempos»: tarjetas de juegos como Heroedle, Adivina el personaje, Cartel pixelado, ¿Qué héroe eres? y Conecta a los actores, cada una con su descripción y un enlace para jugar.",
        en: "“Games” page: cards for games such as Heroedle, Guess the character, Pixelated poster, Which hero are you? and Connect the actors, each with a description and a link to play.",
      },
    },
  ],

  credits: {
    es: "Dirigí el proyecto de principio a fin: el archivo original, la idea, las decisiones de producto, diseño y tecnología, y la revisión y prueba de cada parte antes de darla por terminada. Lo desarrollé con Claude Code como asistente de programación y de redacción de los textos de la wiki.",
    en: "I led the project from start to finish: the original archive, the idea, the product, design and technology decisions, and reviewing and testing every part before calling it done. I built it with Claude Code as an assistant for coding and for writing the wiki texts.",
  },
  notice: {
    es: "Proyecto de fans sin ánimo de lucro y no oficial, sin relación con Marvel, DC, Disney ni Warner Bros. Todos los personajes y marcas pertenecen a sus respectivos propietarios. Usa TMDB y su API, pero no está respaldado ni certificado por TMDB. Los datos de «Dónde ver» proceden de JustWatch.",
    en: "Non-profit, unofficial fan project, not affiliated with Marvel, DC, Disney or Warner Bros. All characters and trademarks belong to their respective owners. It uses TMDB and the TMDB API but is not endorsed or certified by TMDB. “Where to watch” data comes from JustWatch.",
  },
};
