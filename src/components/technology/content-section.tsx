import type { ContentSection as ContentSectionType } from "@/types/technology";
import { ElementCard } from "./element-card";

type ContentSectionProps = {
  section: ContentSectionType;
};

export function ContentSection({ section }: ContentSectionProps) {
  return (
    <section className="mb-phi-xl last:mb-0">
      <h2 className="text-[length:var(--font-size-title2)] font-semibold leading-[var(--leading-phi-half)] text-foreground">
        {section.title}
      </h2>
      <p className="mt-phi-3xs text-[length:var(--font-size-subheading)] leading-[var(--leading-phi)] text-muted-foreground">
        {section.description}
      </p>
      <div className="mt-phi-md flex flex-col gap-phi-lg">
        {section.topics.map((topic) => (
          <ElementCard key={topic.id} topic={topic} />
        ))}
      </div>
    </section>
  );
}
