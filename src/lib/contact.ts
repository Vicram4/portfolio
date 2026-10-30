// Tipos y constantes compartidos por el formulario (cliente) y su acción (servidor).

export const contactTopics = ["job", "project", "other"] as const;
export type ContactTopic = (typeof contactTopics)[number];

export type ContactField = "topic" | "name" | "email" | "message" | "privacy";

/**
 * Resultado de la acción. Solo códigos, nunca textos: la acción no conoce el idioma
 * y el formulario traduce cada código con el diccionario.
 */
export type ContactState =
  | { status: "idle" }
  | { status: "sent" }
  | { status: "invalid"; fields: ContactField[] }
  | { status: "error"; reason: "tooFast" | "server" };

/** Segundos mínimos entre que se carga el formulario y se envía (antispam). */
export const MIN_SECONDS_TO_SUBMIT = 3;
