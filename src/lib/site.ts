/**
 * URL pública del sitio, sin barra final. Orden de preferencia:
 * 1. NEXT_PUBLIC_SITE_URL, si se define a mano (p. ej. un dominio propio en el futuro).
 * 2. VERCEL_PROJECT_PRODUCTION_URL: la dirección de producción que Vercel asigna
 *    automáticamente (cambia sola si se añade otro dominio .vercel.app).
 * 3. localhost, en desarrollo.
 */
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000")
).replace(/\/$/, "");
