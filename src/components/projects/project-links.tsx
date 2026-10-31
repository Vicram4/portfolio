import { TextLink } from "@/components/ui/text-link";
import type { Project } from "@/content/types";
import type { Dictionary } from "@/i18n/dictionaries/es";
import { cn } from "@/lib/cn";

/** Enlaces externos de un proyecto: demo y repositorio (si existen). */
export function ProjectLinks({
  project,
  dict,
  className,
}: {
  project: Project;
  dict: Dictionary;
  className?: string;
}) {
  const newTab = dict.a11y.opensInNewTab;

  return (
    <div className={cn("flex flex-wrap gap-x-6 gap-y-3", className)}>
      {project.maintenance ? (
        <span>{dict.project.maintenance}</span>
      ) : (
        project.links.live && (
          <TextLink href={project.links.live} external newTabHint={newTab}>
            {dict.project.live}
          </TextLink>
        )
      )}
      {project.links.repo && (
        <TextLink href={project.links.repo} external newTabHint={newTab}>
          {dict.project.repo}
        </TextLink>
      )}
    </div>
  );
}
