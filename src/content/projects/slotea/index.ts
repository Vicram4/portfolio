import type { Project } from "@/content/types";
import agendaMovil from "./agenda-movil.webp";
import arquitectura from "./arquitectura.webp";
import bandeja from "./bandeja.webp";
import cita from "./cita.webp";
import cover from "./cover.webp";
import reserva from "./reserva.webp";

// Datos tomados del README, CHANGELOG (1.0.0), docs/ y docs/adr de c:\dev\slotea,
// y de sus capturas (docs/img, generadas con Playwright). No añadir nada que no esté allí.
export const slotea: Project = {
  slug: "slotea",
  title: "Slotea",
  year: 2026,
  featured: true,
  summary: {
    es: "Plataforma de reservas de citas para pequeños negocios, full stack: API en Java y Spring Boot, web en Next.js y PostgreSQL. Agenda por profesional, página de reservas con el color de cada negocio y emails para cambiar o cancelar. Muchos negocios en la misma aplicación, sin que ninguno vea nada de otro.",
    en: "Full-stack appointment booking platform for small businesses: a Java and Spring Boot API, a Next.js website and PostgreSQL. A calendar per professional, a booking page in each business’s own colour and emails to change or cancel. Many businesses in the same app, none able to see anything of another.",
  },
  kind: {
    es: "Proyecto personal · Demo pública · Código en GitHub",
    en: "Personal project · Public demo · Code on GitHub",
  },
  role: {
    es: "Idea, diseño y desarrollo",
    en: "Idea, design and development",
  },
  duration: {
    es: "nov. 2026",
    en: "Nov 2026",
  },
  stack: ["Java", "Spring Boot", "PostgreSQL", "Next.js", "TypeScript", "Docker"],
  links: {
    live: "https://slotea.vercel.app",
    repo: "https://github.com/Vicram4/slotea",
  },
  liveNote: {
    es: "Sin registrarse: elige un sector y entra como negocio, empleado o cliente. Cada visitante tiene su propia copia con la agenda llena, que se borra a las 24 h, y los emails se ven en una bandeja dentro de la demo. Solo en español.",
    en: "No sign-up: pick a sector and enter as the business, an employee or a customer. Each visitor gets their own copy with a full calendar, deleted after 24 h, and emails show up in an inbox inside the demo. Spanish only.",
  },
  cover: {
    src: cover,
    alt: {
      es: "Agenda del día en Slotea para «Peluquería y Estética Demo», en su color frambuesa: martes 17 de noviembre de 2026, con 18 citas en columnas por profesional (Alba, Bea y Rocío). A la izquierda, el menú del panel: inicio, agenda, servicios, profesionales, cierres y ajustes.",
      en: "Slotea’s day calendar for “Peluquería y Estética Demo”, in its raspberry colour: Tuesday 17 November 2026, with 18 appointments in one column per professional (Alba, Bea and Rocío). On the left, the dashboard menu: home, calendar, services, professionals, closures and settings.",
    },
  },

  stats: [
    {
      value: "20 → 1",
      label: {
        es: "reservas simultáneas del mismo hueco: solo una se confirma",
        en: "simultaneous bookings of the same slot: only one goes through",
      },
    },
    {
      value: "+200",
      label: {
        es: "tests automáticos en la API",
        en: "automated tests in the API",
      },
    },
    {
      value: "9",
      label: {
        es: "decisiones de arquitectura documentadas (ADR)",
        en: "documented architecture decisions (ADRs)",
      },
    },
  ],

  goal: {
    es: "Una plataforma de reservas completa, como las que usan barberías, clínicas o talleres, construida como un producto real: con tests, despliegue continuo y cada decisión técnica razonada por escrito.",
    en: "A complete booking platform, like the ones barbershops, clinics or garages use, built as a real product: with tests, continuous deployment and every technical decision reasoned in writing.",
  },
  challenge: {
    es: "Que dos clientes nunca se lleven el mismo hueco aunque reserven en el mismo instante; que ningún negocio vea jamás los datos de otro; que los huecos respeten la zona horaria y el cambio de hora; y que ningún email se pierda ni se envíe dos veces. Todo ello en producción sin pagar nada.",
    en: "Making sure two customers never get the same slot even when booking at the same instant; that no business ever sees another’s data; that slots respect the time zone and daylight saving changes; and that no email is lost or sent twice. All of it in production without paying anything.",
  },

  features: [
    {
      group: { es: "Para el negocio", en: "For the business" },
      items: {
        es: [
          "Panel con dos papeles: dueño y empleado. El empleado solo ve y gestiona lo suyo.",
          "Servicios con duración, margen después de cada cita y precio; profesionales con sus servicios, horario semanal (también jornada partida) y ausencias; cierres de todo el negocio.",
          "Agenda del día, en columnas por profesional, y de la semana, en el ordenador y en el móvil: marcar cómo fue cada cita o cancelarla.",
          "Aviso por email de cada reserva, cambio o cancelación.",
          "Un color de marca, con comprobación de contraste, que llevan la página de reservas y el panel.",
        ],
        en: [
          "A dashboard with two roles: owner and employee. Employees only see and manage their own.",
          "Services with duration, buffer after each appointment and price; professionals with their services, weekly hours (split shifts too) and absences; closures for the whole business.",
          "Day calendar, in one column per professional, and week view, on desktop and on mobile: mark how each appointment went or cancel it.",
          "Email notice of every booking, change or cancellation.",
          "A brand colour, with a contrast check, worn by the booking page and the dashboard.",
        ],
      },
    },
    {
      group: { es: "Para sus clientes", en: "For their customers" },
      items: {
        es: [
          "Página pública de reservas sin crear cuenta: servicio, profesional (o «me da igual») y hora.",
          "Huecos calculados en la zona horaria del negocio y que respetan la duración de cada servicio.",
          "Email de confirmación con un enlace para cambiar la hora o cancelar la cita.",
        ],
        en: [
          "Public booking page with no account needed: service, professional (or “no preference”) and time.",
          "Slots calculated in the business’s time zone, respecting each service’s duration.",
          "Confirmation email with a link to change the time or cancel the appointment.",
        ],
      },
    },
    {
      group: { es: "Demo en un clic", en: "One-click demo" },
      items: {
        es: [
          "Seis sectores: barbería, peluquería, taller, psicología, fisioterapia y veterinaria, cada uno con su equipo y sus servicios.",
          "Se entra como negocio, como empleado o como cliente, y se cambia de papel en cualquier momento.",
          "Cada visitante tiene su propia copia, que se borra a las 24 h. No sale ningún email: se ven en una bandeja dentro de la demo.",
        ],
        en: [
          "Six sectors: barbershop, hair salon, garage, psychology, physiotherapy and veterinary, each with its own team and services.",
          "You enter as the business, an employee or a customer, and can switch roles at any time.",
          "Each visitor gets their own copy, deleted after 24 h. No emails go out: they show up in an inbox inside the demo.",
        ],
      },
    },
  ],

  decisions: [
    {
      title: { es: "Nunca dos citas en el mismo hueco", en: "Never two appointments in one slot" },
      text: {
        es: "Lo garantiza una restricción de PostgreSQL (EXCLUDE USING gist), no el código. Un test lanza 20 reservas simultáneas del mismo hueco contra PostgreSQL real y exige 1 éxito y 19 rechazos. Esos tests destaparon bloqueos entre reservas simultáneas, resueltos poniéndolas en cola por profesional.",
        en: "A PostgreSQL constraint (EXCLUDE USING gist) guarantees it, not the code. A test fires 20 simultaneous bookings of the same slot against a real PostgreSQL and requires 1 success and 19 rejections. Those tests uncovered deadlocks between simultaneous bookings, solved by queuing them per professional.",
      },
    },
    {
      title: { es: "Cada negocio, aislado", en: "Every business, isolated" },
      text: {
        es: "Todos los negocios comparten base de datos, así que el aislamiento va en tres capas: Hibernate filtra por negocio, las claves foráneas incluyen el negocio y cada endpoint tiene un test que comprueba que un negocio no ve nada de otro.",
        en: "All businesses share one database, so isolation has three layers: Hibernate filters by business, foreign keys include the business, and every endpoint has a test checking that one business can’t see anything of another.",
      },
    },
    {
      title: { es: "Sesión a prueba de robos", en: "A session that’s hard to steal" },
      text: {
        es: "Token de acceso de 15 minutos y token de renovación que cambia en cada uso y detecta si lo han robado, ambos en cookies que el JavaScript de la página no puede leer. El navegador solo habla con Vercel, que reenvía las llamadas a la API.",
        en: "A 15-minute access token and a refresh token that changes on every use and detects theft, both in cookies the page’s JavaScript can’t read. The browser only talks to Vercel, which forwards calls to the API.",
      },
    },
    {
      title: { es: "Ningún email perdido ni repetido", en: "No email lost or repeated" },
      text: {
        es: "Cada email se apunta en la misma transacción que la cita (patrón outbox) y se envía después de guardarla. Si el envío falla, la reserva sigue siendo válida y un proceso programado lo reintenta.",
        en: "Each email is recorded in the same transaction as the appointment (outbox pattern) and sent after it’s saved. If sending fails, the booking still stands and a scheduled job retries it.",
      },
    },
    {
      title: { es: "En producción, gratis y vigilada", en: "In production, free and monitored" },
      text: {
        es: "API en Cloud Run, base de datos en Neon y web en Vercel, todo en planes gratuitos. La API se despliega sola cuando la CI pasa en verde, y una prueba diaria comprueba que todo responde. Cada decisión está razonada en un ADR del repositorio.",
        en: "API on Cloud Run, database on Neon and website on Vercel, all on free plans. The API deploys itself when CI passes, and a daily check confirms everything responds. Every decision is reasoned in an ADR in the repository.",
      },
    },
  ],

  stackDetail: [
    {
      layer: { es: "API", en: "API" },
      items: [
        "Java 25",
        "Spring Boot 4",
        "Spring Security 7",
        "Spring Data JPA (Hibernate 7)",
        "Flyway",
        "OpenAPI",
      ],
    },
    {
      layer: { es: "Base de datos", en: "Database" },
      items: ["PostgreSQL 17"],
    },
    {
      layer: { es: "Web", en: "Website" },
      items: [
        "Next.js 16",
        "TypeScript",
        "Tailwind CSS 4",
        "shadcn/ui",
        "TanStack Query",
        "react-hook-form + Zod",
      ],
    },
    {
      layer: { es: "Tests", en: "Tests" },
      items: ["JUnit", "Testcontainers", "Vitest", "Testing Library", "MSW", "Playwright", "axe"],
    },
    {
      layer: { es: "Infraestructura", en: "Infrastructure" },
      items: ["Docker", "GitHub Actions", "Cloud Run", "Neon", "Vercel", "Brevo"],
    },
  ],

  gallery: [
    {
      src: reserva,
      size: "large",
      caption: {
        es: "La página de reservas, con el color de cada negocio",
        en: "The booking page, in each business’s colour",
      },
      alt: {
        es: "Página de reservas de «Clínica Veterinaria Demo» en verde. A la izquierda, el resumen: baño y corte, 1 h 30 min, 35,00 €, con Lidia, martes 17 de noviembre de 2026 a las 17:00. A la derecha, «¿Qué necesitas?» con los servicios, su duración y su precio.",
        en: "Booking page of “Clínica Veterinaria Demo” in green. On the left, the summary: bath and trim, 1 h 30 min, €35.00, with Lidia, Tuesday 17 November 2026 at 17:00. On the right, “What do you need?” with the services, their duration and price.",
      },
    },
    {
      src: agendaMovil,
      size: "tall",
      caption: {
        es: "La agenda en el móvil",
        en: "The calendar on a phone",
      },
      alt: {
        es: "Agenda de «Peluquería y Estética Demo» en tamaño móvil: martes 17 de noviembre de 2026, 17 citas en lista, cada una con su hora, cliente, servicio, profesional y estado «Confirmada».",
        en: "Calendar of “Peluquería y Estética Demo” at phone size: Tuesday 17 November 2026, 17 appointments in a list, each with its time, customer, service, professional and the status “Confirmed”.",
      },
    },
    {
      src: cita,
      size: "half",
      caption: {
        es: "El detalle de una cita en la agenda",
        en: "An appointment’s details in the calendar",
      },
      alt: {
        es: "Diálogo de una cita sobre la agenda: Daniel Prueba, limpieza facial con Alba, estado «Confirmada», martes 17 de noviembre de 2026 de 12:15 a 13:15, su email, cuándo se reservó y el botón «Cancelar cita».",
        en: "An appointment dialog over the calendar: Daniel Prueba, facial cleansing with Alba, status “Confirmed”, Tuesday 17 November 2026 from 12:15 to 13:15, their email, when it was booked and a “Cancel appointment” button.",
      },
    },
    {
      src: bandeja,
      size: "half",
      caption: {
        es: "La bandeja de la demo, con el email de cancelación",
        en: "The demo inbox, with the cancellation email",
      },
      alt: {
        es: "Bandeja de la demo: el email «Tu cita está cancelada» enviado a Daniel Prueba en nombre de «Peluquería y Estética Demo», con el servicio, la profesional, el día y la hora tachada, y el botón «Reservar otra cita».",
        en: "The demo inbox: the email “Your appointment is cancelled” sent to Daniel Prueba on behalf of “Peluquería y Estética Demo”, with the service, the professional, the day and the struck-through time, and a “Book another appointment” button.",
      },
    },
    {
      src: arquitectura,
      size: "large",
      caption: {
        es: "Arquitectura: web en Vercel, API en Cloud Run y base de datos en Neon",
        en: "Architecture: website on Vercel, API on Cloud Run and database on Neon",
      },
      alt: {
        es: "Diagrama de arquitectura. El navegador llama por HTTPS a la web en Next.js 16 (Vercel), que reenvía /api/* a la API en Spring Boot 4 con Java 25 (Cloud Run, Docker). La API guarda los datos en PostgreSQL 17 (Neon), con la restricción EXCLUDE USING gist, y envía los emails por SMTP con Brevo. GitHub Actions despliega la API cuando pasa la CI y lanza los trabajos programados.",
        en: "Architecture diagram. The browser calls the Next.js 16 website (Vercel) over HTTPS, which forwards /api/* to the Spring Boot 4 API on Java 25 (Cloud Run, Docker). The API stores data in PostgreSQL 17 (Neon), with the EXCLUDE USING gist constraint, and sends emails over SMTP with Brevo. GitHub Actions deploys the API when CI passes and triggers the scheduled jobs.",
      },
    },
  ],

  credits: {
    es: "Dirigí el proyecto de principio a fin: la idea, las decisiones de producto, diseño, arquitectura y alojamiento, y la revisión y prueba de cada parte antes de darla por terminada. Lo desarrollé con Claude Code como asistente de programación. Los negocios, personas y datos de la demo son ficticios.",
    en: "I led the project from start to finish: the idea, the product, design, architecture and hosting decisions, and reviewing and testing every part before calling it done. I built it with Claude Code as a coding assistant. The businesses, people and data in the demo are fictitious.",
  },
};
