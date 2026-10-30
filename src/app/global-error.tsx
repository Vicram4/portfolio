"use client";

// Último recurso: se muestra si falla el propio layout raíz. Sustituye a todo el
// documento, así que no tiene cabecera, estilos globales ni idioma: es bilingüe
// y con estilos mínimos en línea.
export default function GlobalError({ retry }: { error: unknown; retry: () => void }) {
  return (
    <html lang="es">
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          display: "grid",
          placeItems: "center",
          padding: "2rem",
          background: "#f3eee6",
          color: "#151412",
          fontFamily: "Georgia, 'Times New Roman', serif",
        }}
      >
        <title>Error · Víctor Ramos</title>
        <main style={{ maxWidth: "36rem" }}>
          <h1 style={{ fontSize: "2.5rem", fontWeight: 400, margin: 0 }}>
            Algo ha fallado <span style={{ color: "#5c574f" }}>/ Something went wrong</span>
          </h1>
          <p style={{ marginTop: "1rem", color: "#5c574f", fontFamily: "system-ui, sans-serif" }}>
            Inténtalo de nuevo en unos segundos. · Please try again in a few seconds.
          </p>
          <button
            type="button"
            onClick={() => retry()}
            style={{
              marginTop: "1.5rem",
              padding: "0.875rem 1.5rem",
              border: 0,
              background: "#151412",
              color: "#f3eee6",
              fontFamily: "system-ui, sans-serif",
              cursor: "pointer",
            }}
          >
            Intentar de nuevo · Try again
          </button>
        </main>
      </body>
    </html>
  );
}
