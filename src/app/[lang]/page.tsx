import type { Metadata } from "next";
import { ClosingCta } from "@/components/home/closing-cta";
import { FeaturedProjects } from "@/components/home/featured-projects";
import { Hero } from "@/components/home/hero";
import { Process } from "@/components/home/process";
import { Services } from "@/components/home/services";
import { education } from "@/content/about";
import { profile } from "@/content/profile";
import { getDictionary, getLocale } from "@/i18n/get-dictionary";
import { pageMetadata } from "@/lib/metadata";
import { siteUrl } from "@/lib/site";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const dict = await getDictionary();
  return pageMetadata({ locale, route: "home", description: dict.metadata.description });
}

export default async function HomePage() {
  const locale = await getLocale();

  // Datos estructurados (schema.org): ayudan a los buscadores a entender quién eres.
  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.role,
    url: `${siteUrl}/${locale}`,
    email: `mailto:${profile.email}`,
    address: { "@type": "PostalAddress", addressLocality: profile.location, addressCountry: "ES" },
    sameAs: [profile.links.github, profile.links.linkedin].filter(Boolean),
    alumniOf: [...new Set(education.map((entry) => entry.place))].map((name) => ({
      "@type": "EducationalOrganization",
      name,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        // Se escapa "<" para que el JSON nunca pueda cerrar la etiqueta <script>.
        dangerouslySetInnerHTML={{ __html: JSON.stringify(person).replace(/</g, "\\u003c") }}
      />
      <Hero />
      <FeaturedProjects />
      <Services />
      <Process />
      <ClosingCta />
    </>
  );
}
