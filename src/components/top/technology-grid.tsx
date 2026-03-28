import type { Technology } from "@/types/technology";
import { TechnologyCard } from "./technology-card";

type TechnologyGridProps = {
  technologies: Technology[];
};

export function TechnologyGrid({ technologies }: TechnologyGridProps) {
  return (
    <div className="grid grid-cols-1 gap-phi-md md:grid-cols-2 md:gap-phi-lg">
      {technologies.map((tech) => (
        <TechnologyCard key={tech.slug} technology={tech} />
      ))}
    </div>
  );
}
