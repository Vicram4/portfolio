import { cacheLife } from "next/cache";
import { profile } from "@/content/profile";

export async function SiteFooter() {
  // El año se calcula al generar la página y se renueva a diario,
  // en lugar de recalcularse en cada visita.
  "use cache";
  cacheLife("days");

  return (
    <footer className="border-t border-ink/10">
      <div className="shell flex flex-wrap justify-between gap-4 py-8 label text-ink-muted">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <p>{profile.role}</p>
      </div>
    </footer>
  );
}
