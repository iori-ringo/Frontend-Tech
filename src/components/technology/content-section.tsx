import type { ContentSection as ContentSectionType } from "@/types/technology";
import { TopicCard } from "./topic-card";

type ContentSectionProps = {
  section: ContentSectionType;
};

export function ContentSection({ section }: ContentSectionProps) {
  return (
    <section className="mb-phi-lg last:mb-0">
      <h3 className="text-[length:var(--font-size-title3)] font-semibold leading-[var(--leading-phi-half)] text-foreground">
        {section.title}
      </h3>
      <p className="mt-phi-3xs text-[length:var(--font-size-subheading)] leading-[var(--leading-phi)] text-muted-foreground">
        {section.description}
      </p>
      <div className="mt-phi-sm flex flex-col gap-phi-sm">
        {section.topics.map((topic) => (
          <TopicCard key={topic.id} topic={topic} />
        ))}
      </div>
    </section>
  );
}
