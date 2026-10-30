import type { Localized } from "./types";

/**
 * Trayectoria. Fechas como "AAAA-MM" (se muestra mes y año) o "AAAA" (solo año).
 * Sin `end`, sigue en curso.
 */
export type PathEntry = {
  title: Localized;
  place: string;
  /** Modalidad, si no es un empleo normal: «Prácticas», «Freelance»… */
  kind?: Localized;
  start: string;
  end?: string;
  description?: Localized;
};

// Del más reciente al más antiguo.
export const experience: PathEntry[] = [
  {
    title: { es: "Desarrollador web independiente", en: "Freelance web developer" },
    place: "Freelance",
    start: "2026-04",
    description: {
      es: "Diseño y desarrollo de webs a medida para clientes.",
      en: "Design and development of custom websites for clients.",
    },
  },
  {
    title: { es: "Integrador SAP", en: "SAP Integrator" },
    place: "Inetum",
    kind: { es: "Prácticas", en: "Internship" },
    start: "2025-09",
    end: "2026-06",
    description: {
      es: "Integración de sistemas SAP en proyectos de una consultora tecnológica internacional: flujos de datos entre aplicaciones, pruebas y resolución de incidencias.",
      en: "SAP systems integration on projects for an international tech consultancy: data flows between applications, testing and issue resolution.",
    },
  },
  {
    title: {
      es: "Marketing Analyst y Community Manager",
      en: "Marketing Analyst and Community Manager",
    },
    place: "AJE Madrid",
    kind: { es: "Prácticas", en: "Internship" },
    start: "2024-03",
    end: "2024-09",
    description: {
      es: "Análisis de datos de marketing y gestión de las redes sociales: contenidos, calendario de publicaciones y seguimiento de resultados.",
      en: "Marketing data analysis and social media management: content, publishing calendar and performance tracking.",
    },
  },
];

export const education: PathEntry[] = [
  {
    title: { es: "Grado en Ingeniería Informática", en: "BSc in Computer Engineering" },
    place: "UOC",
    start: "2026",
  },
  {
    title: {
      es: "CFGS Desarrollo de Aplicaciones Web",
      en: "Higher Diploma in Web Application Development",
    },
    place: "CESUR",
    start: "2024",
    end: "2026",
  },
  {
    title: {
      es: "CFGS Marketing y Publicidad",
      en: "Higher Diploma in Marketing and Advertising",
    },
    place: "CESUR",
    start: "2022",
    end: "2024",
  },
];

/**
 * Tecnologías y competencias respaldadas por proyectos o trabajos reales.
 * Crece con el portfolio: añadir aquí lo que demuestre cada proyecto nuevo.
 */
export const skills: { group: Localized; items: (string | Localized)[] }[] = [
  {
    group: { es: "Frontend", en: "Frontend" },
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vite"],
  },
  { group: { es: "Backend", en: "Backend" }, items: ["Python", "FastAPI", "SQLAlchemy"] },
  { group: { es: "Base de datos", en: "Database" }, items: ["PostgreSQL"] },
  {
    group: { es: "Infraestructura", en: "Infrastructure" },
    items: ["Docker", "GitHub Actions", "Vercel"],
  },
  {
    group: { es: "Calidad", en: "Quality" },
    items: [
      "Testing (pytest, Vitest)",
      { es: "Seguridad web", en: "Web security" },
      { es: "Accesibilidad", en: "Accessibility" },
    ],
  },
  {
    group: { es: "Negocio y empresa", en: "Business" },
    items: [
      { es: "Análisis de datos de marketing", en: "Marketing analytics" },
      { es: "Redes sociales", en: "Social media" },
      { es: "Integración SAP", en: "SAP integration" },
    ],
  },
];
