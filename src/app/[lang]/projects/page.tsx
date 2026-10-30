import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/layout/page-placeholder";
import { getDictionary } from "@/i18n/get-dictionary";

export async function generateMetadata(): Promise<Metadata> {
  const dict = await getDictionary();
  return { title: dict.nav.projects };
}

export default async function ProjectsPage() {
  const dict = await getDictionary();

  return <PagePlaceholder index="01" title={dict.nav.projects} note={dict.placeholder} />;
}
