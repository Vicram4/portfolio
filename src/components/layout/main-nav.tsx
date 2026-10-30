"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { parsePathname, type RouteKey } from "@/i18n/routes";

export type NavItem = { route: RouteKey; label: string; href: string };

/** Ruta actual, válida tanto con la URL pública como con la interna. */
export function useCurrentRoute(): RouteKey | undefined {
  return parsePathname(usePathname())?.route;
}

/** Navegación de escritorio. */
export function MainNav({ label, items }: { label: string; items: NavItem[] }) {
  const currentRoute = useCurrentRoute();

  return (
    <nav aria-label={label}>
      <ul className="flex gap-8 text-sm">
        {items.map((item) => (
          <li key={item.route}>
            <Link
              href={item.href}
              aria-current={item.route === currentRoute ? "page" : undefined}
              className="link-draw py-1 transition-colors aria-[current=page]:text-accent-ink"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
