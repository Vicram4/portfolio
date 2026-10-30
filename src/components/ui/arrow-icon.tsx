import { cn } from "@/lib/cn";

/** Flecha decorativa. `diagonal` (↗) indica enlace externo. */
export function ArrowIcon({
  diagonal = false,
  className,
}: {
  diagonal?: boolean;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
      className={cn("size-[0.9em] shrink-0", diagonal && "-rotate-45", className)}
    >
      <path d="M1 8h13M9 3l5 5-5 5" />
    </svg>
  );
}
