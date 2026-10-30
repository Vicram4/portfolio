import { readFile } from "node:fs/promises";
import { join } from "node:path";

/**
 * Lee una fuente TTF de assets/fonts para las imágenes generadas (Open Graph, iconos).
 * `"use cache"`: con Cache Components, leer archivos sin caché impide generar la
 * imagen; así se lee una vez y se reutiliza.
 */
export async function loadFont(file: string): Promise<ArrayBuffer> {
  "use cache";
  const data = await readFile(join(process.cwd(), "assets/fonts", file));
  return data.buffer.slice(data.byteOffset, data.byteOffset + data.byteLength) as ArrayBuffer;
}
