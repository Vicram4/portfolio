import { renderIcon } from "@/lib/icon";

// Icono al añadir la web a la pantalla de inicio (iPhone, iPad y Android).
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return renderIcon(size.width);
}
