import { cafeSinnoh } from "./projects/cafe-sinnoh";
import type { Service } from "./types";

// Solo servicios respaldados por un proyecto real. Crecerá con el portfolio.
export const services: Service[] = [
  {
    title: { es: "Webs y landing pages", en: "Websites and landing pages" },
    description: {
      es: "Webs a medida, rápidas, bilingües y preparadas para buscadores. Diseño propio, sin plantillas.",
      en: "Custom websites that are fast, bilingual and search-engine ready. Original design, no templates.",
    },
    example: { label: { es: "Este portfolio", en: "This portfolio" } },
  },
  {
    title: { es: "Aplicaciones web a medida", en: "Custom web applications" },
    description: {
      es: "Cuentas de usuario, pedidos, reservas y paneles de administración. Frontend, backend y base de datos.",
      en: "User accounts, orders, bookings and admin dashboards. Frontend, backend and database.",
    },
    example: {
      label: { es: cafeSinnoh.title, en: cafeSinnoh.title },
      href: cafeSinnoh.links.live,
    },
  },
  {
    title: { es: "De la idea a la publicación", en: "From idea to launch" },
    description: {
      es: "Diseño de interfaz, desarrollo, despliegue y mantenimiento. Un único interlocutor para todo el proceso.",
      en: "Interface design, development, deployment and maintenance. One point of contact for the whole process.",
    },
  },
];
