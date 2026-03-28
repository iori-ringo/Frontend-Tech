import { Clock } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import type { Topic } from "@/types/technology";

type TopicCardProps = {
  topic: Topic;
};

export function TopicCard({ topic }: TopicCardProps) {
  return (
    <article className="glass rounded-lg p-phi-md transition-all duration-[var(--duration-phi-lg)] ease-[var(--ease-phi-out)] motion-safe:hover:shadow-neumorphic">
      {/* タイトル — 光学補正: テキスト先頭 */}
      <h4 className="text-[length:var(--font-size-heading)] font-semibold leading-[var(--leading-phi-half)] text-foreground">
        {topic.title}
      </h4>
      <p className="mt-phi-2xs text-[length:var(--font-size-subheading)] leading-[var(--leading-phi)] text-muted-foreground">
        {topic.description}
      </p>

      {/* メタ情報 */}
      <div className="mt-phi-sm flex flex-wrap items-center gap-phi-2xs">
        {/* 学習時間 */}
        <span className="flex items-center gap-phi-3xs text-[length:var(--font-size-caption)] leading-[var(--leading-phi-half)] text-muted-foreground">
          <Clock className="h-3.5 w-3.5" aria-hidden="true" />
          <span>{topic.estimatedMinutes}分</span>
        </span>

        {/* タグ */}
        {topic.tags.map((tag) => (
          <Badge
            key={tag}
            variant="secondary"
            className="text-[length:var(--font-size-caption)]"
          >
            {tag}
          </Badge>
        ))}
      </div>
    </article>
  );
}
