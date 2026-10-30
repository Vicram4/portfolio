import type { Metadata } from "next";
import { getDictionary } from "@/i18n/get-dictionary";

export async function generateMetadata(): Promise<Metadata> {
  const dict = await getDictionary();
  return { title: dict.privacy.title };
}

export default async function PrivacyPage() {
  const { privacy } = await getDictionary();

  return (
    <article className="shell section-y">
      <div className="grid-editorial gap-y-12">
        <header className="col-span-full md:col-span-4">
          <h1 className="font-display text-headline text-balance">{privacy.title}</h1>
          <p className="mt-6 label text-ink-muted">{privacy.updated}</p>
        </header>

        <div className="col-span-full divide-y divide-ink/10 border-y border-ink/10 md:col-span-7 md:col-start-6">
          {privacy.sections.map((section) => (
            <section key={section.title} className="py-8">
              <h2 className="font-display text-title">{section.title}</h2>
              <p className="mt-3 text-ink-muted">{section.text}</p>
            </section>
          ))}
        </div>
      </div>
    </article>
  );
}
