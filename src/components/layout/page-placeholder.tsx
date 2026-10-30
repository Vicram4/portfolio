import { SectionHeading } from "@/components/ui/section-heading";

// Temporal: se sustituye por el contenido real de cada sección en su fase.
export function PagePlaceholder({
  index,
  eyebrow,
  title,
  note,
}: {
  index: string;
  eyebrow: string;
  title: string;
  note: string;
}) {
  return (
    <section className="shell section-y">
      <SectionHeading as="h1" index={index} eyebrow={eyebrow} title={title} />
      <p className="mt-10 text-lead text-ink-muted">{note}</p>
    </section>
  );
}
