import type { Project } from "@/content/types";
import cover from "./cover.webp";

// Datos tomados de la implementación y la documentación reales del proyecto
// (README y docs/ de cafe-sinnoh). No añadir nada que no esté allí.
export const cafeSinnoh: Project = {
  slug: "cafe-sinnoh",
  title: "Café Sinnoh",
  year: 2026,
  featured: true,
  summary: {
    es: "Aplicación web full stack para una cafetería artesanal: carta, pedidos online, programa de puntos y panel de administración.",
    en: "Full stack web app for an artisan coffee shop: menu, online ordering, a loyalty points programme and an admin dashboard.",
  },
  role: {
    es: "Producto, diseño y desarrollo",
    en: "Product, design and development",
  },
  stack: ["React", "TypeScript", "FastAPI", "PostgreSQL", "Docker"],
  links: {
    live: "https://cafe-sinnoh.vercel.app",
    repo: "https://github.com/Vicram4/cafe-sinnoh",
  },
  cover: {
    src: cover,
    alt: {
      es: "Portada de Café Sinnoh: titular, botón «Ver la carta» e ilustración de una montaña nevada con un lago y un bosque.",
      en: "Café Sinnoh home page: headline, “See the menu” button and an illustration of a snowy mountain with a lake and a forest.",
    },
  },
};
