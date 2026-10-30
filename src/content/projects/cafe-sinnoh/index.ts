import type { Project } from "@/content/types";
import admin from "./admin.webp";
import carta from "./carta.webp";
import cover from "./cover.webp";
import homeOscuro from "./home-oscuro.webp";
import movilCarta from "./movil-carta.webp";
import producto from "./producto.webp";

// Datos tomados de la implementación y la documentación reales del proyecto
// (README, README.en y docs/estado-cafe-sinnoh.md de cafe-sinnoh).
// No añadir nada que no esté allí.
export const cafeSinnoh: Project = {
  slug: "cafe-sinnoh",
  title: "Café Sinnoh",
  year: 2026,
  featured: true,
  // El autor decidió que Café Sinnoh no aparezca en buscadores (temática Pokémon).
  noindex: true,
  summary: {
    es: "Aplicación web full stack para una cafetería artesanal ficticia: carta, pedidos online, programa de puntos y panel de administración.",
    en: "Full stack web app for a fictional artisan coffee shop: menu, online ordering, a loyalty points programme and an admin dashboard.",
  },
  kind: {
    es: "Proyecto personal · Demo pública",
    en: "Personal project · Public demo",
  },
  role: {
    es: "Producto, diseño y desarrollo",
    en: "Product, design and development",
  },
  duration: {
    es: "5 semanas · sept.–oct. 2026",
    en: "5 weeks · Sep–Oct 2026",
  },
  stack: ["React", "TypeScript", "FastAPI", "PostgreSQL", "Docker"],
  links: {
    live: "https://cafe-sinnoh.vercel.app",
    repo: "https://github.com/Vicram4/cafe-sinnoh",
  },
  liveNote: {
    es: "Demo pública: entra como cliente o como administrador con un clic, sin registrarte. Los pedidos no son reales y los datos se reinician cada día.",
    en: "Public demo: sign in as a customer or as an admin with one click, no sign-up needed. Orders aren’t real and the data resets every day.",
  },
  cover: {
    src: cover,
    alt: {
      es: "Portada de Café Sinnoh: titular, botón «Ver la carta» e ilustración de una montaña nevada con un lago y un bosque.",
      en: "Café Sinnoh home page: headline, “See the menu” button and an illustration of a snowy mountain with a lake and a forest.",
    },
  },

  stats: [
    { value: "176", label: { es: "tests automatizados", en: "automated tests" } },
    { value: "113 KB", label: { es: "de JavaScript inicial", en: "of initial JavaScript" } },
    { value: "7", label: { es: "apartados de administración", en: "admin sections" } },
  ],

  goal: {
    es: "Construir una aplicación web completa y realista, como la que necesitaría un negocio local, cubriendo todo el ciclo: producto, diseño, frontend, backend, base de datos, seguridad, tests y publicación.",
    en: "Build a complete, realistic web application, like the one a local business would need, covering the whole cycle: product, design, frontend, backend, database, security, testing and deployment.",
  },
  challenge: {
    es: "Una cafetería necesita más que una web informativa: pedidos para recoger que respeten el horario, un programa de puntos que fidelice, reseñas fiables y un panel desde el que gestionarlo todo. Y, como demo pública, tenía que poder probarse sin registrarse y sin riesgo de romper nada.",
    en: "A coffee shop needs more than an informational website: pickup orders that respect opening hours, a points programme that builds loyalty, trustworthy reviews and a dashboard to manage it all. And, as a public demo, it had to be testable without signing up and without any risk of breaking things.",
  },

  features: [
    {
      group: { es: "Clientes", en: "Customers" },
      items: {
        es: [
          "Carta con búsqueda, filtro por categoría y orden.",
          "Carrito y pedido para recoger, con validación de horario y antelación mínima.",
          "Cuenta personal con historial de pedidos, puntos y canje de recompensas.",
          "Reseñas solo de productos comprados y recogidos, moderadas antes de publicarse.",
          "Candidaturas con CV en PDF y formulario de contacto.",
          "Modo claro y oscuro, diseño adaptable y respeto a «reducir movimiento».",
        ],
        en: [
          "Menu with search, category filter and sorting.",
          "Cart and pickup orders, validated against opening hours and a minimum lead time.",
          "Personal account with order history, points and reward redemption.",
          "Reviews only for products bought and picked up, moderated before publishing.",
          "Job applications with a PDF CV, and a contact form.",
          "Light and dark mode, responsive layout and support for “reduce motion”.",
        ],
      },
    },
    {
      group: { es: "Administración", en: "Admin" },
      items: {
        es: [
          "Panel con estadísticas generales.",
          "Pedidos con máquina de estados: avanzar o cancelar.",
          "Productos: crear, editar, activar y desactivar.",
          "Moderación de reseñas, candidaturas con descarga de CV y mensajes.",
          "Usuarios: cambio de rol y desactivación.",
        ],
        en: [
          "Dashboard with general statistics.",
          "Orders with a state machine: advance or cancel.",
          "Products: create, edit, enable and disable.",
          "Review moderation, job applications with CV download, and messages.",
          "Users: role changes and deactivation.",
        ],
      },
    },
    {
      group: { es: "Demo pública", en: "Public demo" },
      items: {
        es: [
          "Acceso con un clic como cliente o como administrador.",
          "Datos reiniciados cada día con GitHub Actions.",
        ],
        en: [
          "One-click access as a customer or as an admin.",
          "Data reset every day with GitHub Actions.",
        ],
      },
    },
  ],

  decisions: [
    {
      title: {
        es: "Una sesión que un XSS no puede robar",
        en: "A session an XSS attack can’t steal",
      },
      text: {
        es: "El token de acceso vive solo en memoria, nunca en localStorage. La renovación usa una cookie HttpOnly que JavaScript no puede leer y que rota en cada uso: si reaparece un token ya usado, se revoca toda la sesión. Resultado: más seguridad sin perder la sesión al recargar.",
        en: "The access token lives only in memory, never in localStorage. Renewal uses an HttpOnly cookie that JavaScript can’t read and that rotates on every use: if a used token shows up again, the whole session is revoked. The result: stronger security without losing the session on reload.",
      },
    },
    {
      title: {
        es: "El servidor es la única fuente de verdad",
        en: "The server is the single source of truth",
      },
      text: {
        es: "Precios, disponibilidad, roles, estados y puntos se calculan y validan siempre en el backend; el navegador nunca envía un precio. El dinero se guarda en céntimos y cada pedido conserva una copia del nombre y el precio de sus productos.",
        en: "Prices, availability, roles, statuses and points are always computed and validated on the backend; the browser never sends a price. Money is stored in cents and every order keeps a snapshot of its products’ names and prices.",
      },
    },
    {
      title: {
        es: "Los puntos, un libro de movimientos",
        en: "Points as a ledger",
      },
      text: {
        es: "El saldo de puntos no es una columna que pueda desincronizarse, sino la suma de sus movimientos. Así un pedido nunca puede otorgar puntos dos veces y el historial siempre cuadra.",
        en: "The points balance isn’t a column that can drift out of sync, but the sum of its movements. That way an order can never award points twice and the history always adds up.",
      },
    },
    {
      title: {
        es: "Solo se descarga lo que se usa",
        en: "Only download what’s used",
      },
      text: {
        es: "La web se divide por rutas: el JavaScript inicial pesa unos 113 KB comprimido. El panel de administración y los formularios, con su validación, solo los descarga quien entra en ellos.",
        en: "The app is split by route: the initial JavaScript is about 113 KB gzipped. The admin panel and the forms, with their validation, are only downloaded by whoever opens them.",
      },
    },
  ],

  stackDetail: [
    {
      layer: { es: "Frontend", en: "Frontend" },
      items: [
        "React 19",
        "TypeScript",
        "Vite",
        "Tailwind CSS v4",
        "React Router",
        "TanStack Query",
        "react-hook-form + Zod",
      ],
    },
    {
      layer: { es: "Backend", en: "Backend" },
      items: ["Python 3.14", "FastAPI", "SQLAlchemy 2", "Alembic", "Pydantic", "PyJWT", "Argon2"],
    },
    { layer: { es: "Base de datos", en: "Database" }, items: ["PostgreSQL 17"] },
    {
      layer: { es: "Infraestructura", en: "Infrastructure" },
      items: ["Docker", "nginx", "GitHub Actions", "Vercel", "Northflank", "Neon"],
    },
    {
      layer: { es: "Calidad y seguridad", en: "Quality and security" },
      items: ["pytest", "Vitest", "Testing Library", "CodeQL", "Dependabot"],
    },
  ],

  gallery: [
    {
      src: carta,
      size: "large",
      caption: {
        es: "Carta con búsqueda, categorías y orden",
        en: "Menu with search, categories and sorting",
      },
      alt: {
        es: "Página de la carta de Café Sinnoh: buscador, selector de orden, pestañas de categorías y tarjetas de productos con ilustraciones.",
        en: "Café Sinnoh menu page: search box, sort selector, category tabs and product cards with illustrations.",
      },
    },
    {
      src: movilCarta,
      size: "tall",
      caption: { es: "La carta en el móvil", en: "The menu on mobile" },
      alt: {
        es: "La carta de Café Sinnoh en un móvil, con menú desplegable y una tarjeta de producto a todo el ancho.",
        en: "The Café Sinnoh menu on a phone, with a hamburger menu and a full-width product card.",
      },
    },
    {
      src: producto,
      size: "large",
      caption: { es: "Ficha de producto", en: "Product page" },
      alt: {
        es: "Ficha del Espresso Monte Corona: ilustración, precio, descripción, ingredientes y botón para añadir al carrito.",
        en: "Espresso Monte Corona product page: illustration, price, description, ingredients and an add-to-cart button.",
      },
    },
    {
      src: admin,
      size: "half",
      caption: { es: "Panel de administración", en: "Admin dashboard" },
      alt: {
        es: "Dashboard de administración con estadísticas de usuarios, pedidos, ingresos y reseñas pendientes.",
        en: "Admin dashboard with statistics for users, orders, revenue and pending reviews.",
      },
    },
    {
      src: homeOscuro,
      size: "half",
      caption: { es: "Modo oscuro", en: "Dark mode" },
      alt: {
        es: "Portada de Café Sinnoh en modo oscuro.",
        en: "Café Sinnoh home page in dark mode.",
      },
    },
  ],

  credits: {
    es: "Dirigí el proyecto de principio a fin: la idea y la marca, las decisiones de producto, diseño y tecnología, y la revisión y prueba de cada bloque antes de darlo por terminado. Lo desarrollé con Claude Code como asistente de programación.",
    en: "I led the project from start to finish: the idea and the brand, the product, design and technology decisions, and reviewing and testing every piece before calling it done. I built it with Claude Code as a coding assistant.",
  },
  notice: {
    es: "Proyecto de fans sin ánimo de lucro, sin afiliación con Nintendo, Game Freak ni The Pokémon Company, y sin recursos gráficos oficiales. Las ilustraciones se generaron con IA a partir de prompts propios y se retocaron después; muestran solo productos y paisajes.",
    en: "Non-profit fan project, not affiliated with Nintendo, Game Freak or The Pokémon Company, and using no official artwork. The illustrations were generated with AI from my own prompts and then retouched; they show only products and landscapes.",
  },
};
