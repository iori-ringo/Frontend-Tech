import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import type { Topic } from "@/types/technology";
import { CodePreviewPanel } from "./code-preview-panel";

type ElementCardProps = {
  topic: Topic;
};

export function ElementCard({ topic }: ElementCardProps) {
  return (
    <article className="scroll-mt-20" id={topic.id}>
      {/* ヘッダー: タグ名 + 日本語名 */}
      <div className="flex items-baseline gap-phi-sm">
        <h3 className="text-[length:var(--font-size-title3)] font-bold leading-[var(--leading-phi-half)] text-foreground font-mono">
          {topic.title}
        </h3>
        <span className="text-[length:var(--font-size-subheading)] leading-[var(--leading-phi-half)] text-muted-foreground">
          {topic.subtitle}
        </span>
      </div>

      {/* 説明文 */}
      <p className="mt-phi-2xs max-w-[var(--max-w-phi-prose)] text-[length:var(--font-size-body)] leading-[var(--leading-phi)] text-foreground/80 whitespace-pre-line">
        {topic.description}
      </p>

      {/* コード + プレビュー */}
      <div className="mt-phi-sm">
        <CodePreviewPanel code={topic.code} />
      </div>

      {/* タグ */}
      <div className="mt-phi-sm flex flex-wrap gap-phi-3xs">
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

      <Separator className="mt-phi-lg" />
    </article>
  );
}
