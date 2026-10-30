import { notFound } from "next/navigation";

// Captura cualquier URL sin página ("/es/no-existe") para mostrar la 404
// traducida de `[lang]/not-found.tsx`, con cabecera y pie.
export function generateStaticParams() {
  return [{ rest: ["404"] }];
}

export default function CatchAllPage() {
  notFound();
}
