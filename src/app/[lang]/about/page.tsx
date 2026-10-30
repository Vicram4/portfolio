import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/layout/page-placeholder";
import { getDictionary } from "@/i18n/get-dictionary";

export async function generateMetadata(): Promise<Metadata> {
  const dict = await getDictionary();
  return { title: dict.nav.about };
}

export default async function AboutPage() {
  const dict = await getDictionary();

  return <PagePlaceholder index="02" title={dict.nav.about} note={dict.placeholder} />;
}
