import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";

// Permite rastrear todo: lo que no debe indexarse se controla con la etiqueta
// `noindex` de cada página (si se bloqueara aquí, el buscador no podría leerla).
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
