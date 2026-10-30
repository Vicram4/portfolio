// Temporal: se sustituye por el contenido real de cada sección en su fase.
export function PagePlaceholder({
  index,
  title,
  note,
}: {
  index: string;
  title: string;
  note: string;
}) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <p className="font-mono text-sm text-accent-ink">{index}</p>
      <h1 className="mt-2 text-4xl font-semibold tracking-tight break-words sm:text-5xl">
        {title}
      </h1>
      <p className="mt-6 text-ink-muted">{note}</p>
    </section>
  );
}
