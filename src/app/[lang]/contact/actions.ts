"use server";

import { profile } from "@/content/profile";
import {
  contactTopics,
  MIN_SECONDS_TO_SUBMIT,
  type ContactField,
  type ContactState,
  type ContactTopic,
} from "@/lib/contact";

// Asunto legible del email que recibo (siempre en español: es para mí).
const topicLabels: Record<ContactTopic, string> = {
  job: "Oferta de trabajo",
  project: "Proyecto web",
  other: "Otro",
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Valida el formulario y envía el mensaje a mi correo con la API de Resend.
 * Se ejecuta solo en el servidor: la clave de Resend nunca llega al navegador.
 */
export async function sendContactMessage(
  _previous: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const read = (key: string) => String(formData.get(key) ?? "").trim();

  // Antispam 1: campo trampa invisible. Un bot lo rellena; una persona no lo ve.
  // Se finge el éxito para no darle pistas.
  if (read("website")) return { status: "sent" };

  // Primero los campos: a una persona con errores le sirve más saber cuáles son.
  const topic = read("topic");
  const name = read("name");
  const email = read("email");
  const message = read("message");

  const invalid: ContactField[] = [];
  if (!contactTopics.includes(topic as ContactTopic)) invalid.push("topic");
  if (name.length < 2 || name.length > 100) invalid.push("name");
  if (email.length > 254 || !EMAIL_PATTERN.test(email)) invalid.push("email");
  if (message.length < 10 || message.length > 5000) invalid.push("message");
  if (formData.get("privacy") !== "on") invalid.push("privacy");
  if (invalid.length > 0) return { status: "invalid", fields: invalid };

  // Antispam 2: un formulario completo enviado en menos de unos segundos no lo
  // rellena una persona.
  const startedAt = Number(read("startedAt"));
  if (!startedAt || (Date.now() - startedAt) / 1000 < MIN_SECONDS_TO_SUBMIT) {
    return { status: "error", reason: "tooFast" };
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("[contacto] Falta RESEND_API_KEY en las variables de entorno.");
    return { status: "error", reason: "server" };
  }

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        // Sin dominio propio verificado, Resend exige este remitente.
        from: "Portfolio <onboarding@resend.dev>",
        to: [profile.email],
        // «Responder» en el correo contesta directamente a quien escribió.
        reply_to: email,
        subject: `[Portfolio] ${topicLabels[topic as ContactTopic]} — ${name}`,
        // Texto plano: el mensaje nunca se interpreta como HTML.
        text: [
          `Tema: ${topicLabels[topic as ContactTopic]}`,
          `Nombre: ${name}`,
          `Email: ${email}`,
          "",
          message,
        ].join("\n"),
      }),
      signal: AbortSignal.timeout(10_000),
    });

    if (!response.ok) {
      console.error("[contacto] Resend respondió", response.status, await response.text());
      return { status: "error", reason: "server" };
    }
  } catch (error) {
    console.error("[contacto] No se pudo contactar con Resend:", error);
    return { status: "error", reason: "server" };
  }

  return { status: "sent" };
}
