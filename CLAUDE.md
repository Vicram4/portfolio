@AGENTS.md

# Portfolio — reglas del proyecto

- Comunicación en español. Explicar brevemente qué se hace y por qué, con instrucciones
  paso a paso cuando el usuario tenga que actuar. Al terminar una fase, resumen rápido primero.
- Trabajo por fases: no pasar a la siguiente sin aprobación explícita.
- Trabajar solo en esta carpeta. **Nunca modificar `../cafe-sinnoh`** (solo lectura, y con permiso).
- No inventar datos personales ni de proyectos. Si falta información, preguntar.
- No instalar dependencias, borrar archivos importantes, publicar ni desplegar sin consultar.
- Sin dominio de pago: la web vive en `victorramos.vercel.app` (gratuito).

## Arquitectura

- Todas las páginas cuelgan de `src/app/[lang]/` (`es` por defecto, `en`).
- Las carpetas de `app/` usan nombres internos en inglés; las URLs públicas se traducen
  con el mapa de `src/i18n/routes.ts` y `src/proxy.ts`. Generar enlaces siempre con `href()`.
- Textos de interfaz en `src/i18n/dictionaries/` (`es.ts` es la referencia de tipos).
- Contenido (perfil, proyectos, servicios, trayectoria) en `src/content/`.
- Tokens de diseño en `@theme` de `src/app/globals.css`. `accent` no se usa para texto
  pequeño (contraste 2.7:1); para eso existe `accent-ink`.
- Metadatos de cada página con `pageMetadata()` (`src/lib/metadata.ts`); URL del sitio en `src/lib/site.ts`.

## Trampas conocidas (Next.js 16 + Cache Components)

- `next/root-params` no funciona en Server Actions ni en rutas de API/imágenes: usar
  `loadDictionary(locale)` con el idioma recibido por parámetro.
- `notFound()` tras leer `params` da un 404 con código 200: las rutas dinámicas se validan
  en `proxy.ts` (ver `src/content/projects/slugs.ts`).
- Leer archivos o usar `new Date()` al prerenderizar exige `"use cache"`.
- React reinicia los campos no controlados de un formulario tras cada envío: usar estado.

## Añadir un proyecto

1. `src/content/projects/<slug>/` con imágenes e `index.ts` (plantilla: `cafe-sinnoh`).
2. Registrarlo en `src/content/projects/index.ts` y su slug en `slugs.ts`.

## Secretos

`RESEND_API_KEY` en `.env.local` (ignorado por Git) y en Vercel (Settings → Environments →
Production, tipo Secret). Nunca en el código ni en el chat.

## Comprobaciones antes de dar algo por terminado

`npm run lint` · `npm run typecheck` · `npm run format:check` · `npm run build`
