import { PagePlaceholder } from "@/components/layout/page-placeholder";
import { profile } from "@/content/profile";
import { getDictionary } from "@/i18n/get-dictionary";

export default async function HomePage() {
  const dict = await getDictionary();

  return <PagePlaceholder index={profile.role} title={profile.name} note={dict.placeholder} />;
}
