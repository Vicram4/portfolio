import { cacheLife } from "next/cache";
import { profile } from "@/content/profile";

export async function SiteFooter() {
  // El año se calcula al generar la página y se renueva a diario,
  // en lugar de recalcularse en cada visita.
  "use cache";
  cacheLife("days");

  return (
    <footer className="border-t border-ink/10">
      <div className="mx-auto max-w-7xl px-6 py-6 font-mono text-xs text-ink-muted">
        © {new Date().getFullYear()} {profile.name}
      </div>
    </footer>
  );
}
