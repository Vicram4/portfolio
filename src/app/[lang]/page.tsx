import { ClosingCta } from "@/components/home/closing-cta";
import { FeaturedProjects } from "@/components/home/featured-projects";
import { Hero } from "@/components/home/hero";
import { Process } from "@/components/home/process";
import { Services } from "@/components/home/services";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedProjects />
      <Services />
      <Process />
      <ClosingCta />
    </>
  );
}
