"use client";

import Link from "next/link";
import { useEffect, useRef, type ReactNode } from "react";
import { useCurrentRoute, type NavItem } from "./main-nav";

/**
 * Menú móvil a pantalla completa con <dialog> nativo: el navegador ya gestiona
 * el foco, la tecla Esc y que el contenido de fondo quede inaccesible.
 */
export function MobileMenu({
  items,
  brand,
  footer,
  labels,
}: {
  items: NavItem[];
  brand: ReactNode;
  footer: ReactNode;
  labels: { open: string; close: string; nav: string };
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const currentRoute = useCurrentRoute();

  const close = () => dialogRef.current?.close();

  // Si la pantalla crece hasta tamaño escritorio con el menú abierto, se cierra.
  useEffect(() => {
    const desktop = window.matchMedia("(width >= 48rem)");
    const onChange = () => desktop.matches && dialogRef.current?.close();
    desktop.addEventListener("change", onChange);
    return () => desktop.removeEventListener("change", onChange);
  }, []);

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-haspopup="dialog"
        onClick={() => dialogRef.current?.showModal()}
        className="-mr-2 p-2 label"
      >
        {labels.open}
      </button>

      <dialog
        ref={dialogRef}
        aria-label={labels.nav}
        // Cualquier enlace pulsado dentro del menú lo cierra.
        onClick={(event) => (event.target as HTMLElement).closest("a") && close()}
        className="m-0 h-dvh max-h-none w-full max-w-none bg-paper p-0 text-ink opacity-0 transition-opacity duration-300 backdrop:bg-transparent open:opacity-100 starting:open:opacity-0"
      >
        <div className="shell flex h-full flex-col">
          <div className="flex h-16 items-center justify-between border-b border-ink/10">
            {brand}
            <button type="button" onClick={close} className="-mr-2 p-2 label">
              {labels.close}
            </button>
          </div>

          <nav aria-label={labels.nav} className="flex flex-1 items-center">
            <ol className="space-y-3">
              {items.map((item, index) => (
                <li key={item.route}>
                  <Link
                    href={item.href}
                    aria-current={item.route === currentRoute ? "page" : undefined}
                    className="flex items-baseline gap-4 font-display text-headline aria-[current=page]:text-accent-ink"
                  >
                    <span className="label text-ink-muted">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ol>
          </nav>

          <div className="border-t border-ink/10 py-6">{footer}</div>
        </div>
      </dialog>
    </div>
  );
}
