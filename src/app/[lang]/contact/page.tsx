import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/layout/page-placeholder";
import { getDictionary } from "@/i18n/get-dictionary";

export async function generateMetadata(): Promise<Metadata> {
  const dict = await getDictionary();
  return { title: dict.nav.contact };
}

export default async function ContactPage() {
  const dict = await getDictionary();

  return (
    <PagePlaceholder
      index="03"
      eyebrow={dict.nav.contact}
      title={dict.nav.contact}
      note={dict.placeholder}
    />
  );
}
