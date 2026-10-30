"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";

/** Email como enlace `mailto:` + botón para copiarlo al portapapeles. */
export function CopyEmail({
  email,
  labels,
  className,
}: {
  email: string;
  labels: { copy: string; copied: string; copiedAnnouncement: string };
  className?: string;
}) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const timeout = setTimeout(() => setCopied(false), 2000);
    return () => clearTimeout(timeout);
  }, [copied]);

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
    } catch {
      // Sin permiso de portapapeles: el enlace mailto sigue disponible.
    }
  }

  return (
    <div className={cn("flex flex-wrap items-center gap-x-4 gap-y-2", className)}>
      <a href={`mailto:${email}`} className="link-draw">
        {email}
      </a>
      <button
        type="button"
        onClick={copy}
        className="border border-current/30 px-2 py-1 label transition-colors hover:border-current"
      >
        {copied ? labels.copied : labels.copy}
      </button>
      {/* Anuncio para lectores de pantalla */}
      <span role="status" className="sr-only">
        {copied ? labels.copiedAnnouncement : ""}
      </span>
    </div>
  );
}
