import { SectionHeading } from "@/components/ui/section-heading";
import { getDictionary } from "@/i18n/get-dictionary";

export async function Process() {
  const { home } = await getDictionary();
  const t = home.process;

  return (
    <section className="bg-paper-deep">
      <div className="shell section-y">
        <SectionHeading index="03" eyebrow={t.eyebrow} title={t.title} />

        <ol className="mt-16 grid gap-x-8 gap-y-14 md:mt-24 md:grid-cols-2 lg:grid-cols-4">
          {t.steps.map((step, index) => (
            <li key={step.title} className="reveal border-t border-ink/20 pt-6">
              <span className="label text-accent-ink">{String(index + 1).padStart(2, "0")}</span>
              <h3 className="mt-12 font-display text-title md:mt-20">{step.title}</h3>
              <p className="mt-4 text-ink-muted">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
