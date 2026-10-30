@AGENTS.md

# Portfolio — reglas del proyecto

- Comunicación en español. Explicar brevemente qué se hace y por qué.
- Trabajo por fases: no pasar a la siguiente sin aprobación explícita.
- Trabajar solo en esta carpeta. **Nunca modificar `../cafe-sinnoh`** (solo lectura, y con permiso).
- No inventar datos personales ni de proyectos. Si falta información, preguntar.
- No instalar dependencias, borrar archivos importantes, publicar ni desplegar sin consultar.

## Arquitectura

- Todas las páginas cuelgan de `src/app/[lang]/` (`es` por defecto, `en`).
- Las carpetas de `app/` usan nombres internos en inglés; las URLs públicas se traducen
  con el mapa de `src/i18n/routes.ts` y `src/proxy.ts`. Generar enlaces siempre con `href()`.
- Textos de interfaz en `src/i18n/dictionaries/` (`es.ts` es la referencia de tipos).
- Contenido (perfil, proyectos) en `src/content/`.
- Tokens de diseño en `@theme` de `src/app/globals.css`. `accent` no se usa para texto
  pequeño (contraste 2.7:1); para eso existe `accent-ink`.

## Comprobaciones antes de dar algo por terminado

`npm run lint` · `npm run typecheck` · `npm run format:check` · `npm run build`
