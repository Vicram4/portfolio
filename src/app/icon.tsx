import { renderIcon } from "@/lib/icon";

// Favicon de la pestaña del navegador.
export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return renderIcon(size.width);
}
