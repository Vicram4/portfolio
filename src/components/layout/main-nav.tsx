"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { parsePathname, type RouteKey } from "@/i18n/routes";

type NavItem = { route: RouteKey; label: string; href: string };

export function MainNav({ label, items }: { label: string; items: NavItem[] }) {
  // Se compara por clave de ruta ("projects"), no por URL, para que funcione igual
  // con la URL pública y con la interna. Las subpáginas activan su sección.
  const currentRoute = parsePathname(usePathname())?.route;

  return (
    <nav aria-label={label} className="order-last w-full md:order-none md:w-auto">
      <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
        {items.map((item) => (
          <li key={item.route}>
            <Link
              href={item.href}
              aria-current={item.route === currentRoute ? "page" : undefined}
              className="underline-offset-4 hover:underline aria-[current=page]:text-accent-ink aria-[current=page]:underline"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
