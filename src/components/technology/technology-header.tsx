import { FileCode2, Palette } from "lucide-react";

import type { Technology } from "@/types/technology";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  FileCode2,
  Palette,
};

type TechnologyHeaderProps = {
  technology: Technology;
};

export function TechnologyHeader({ technology }: TechnologyHeaderProps) {
  const Icon = iconMap[technology.icon];

  return (
    <section className="py-phi-xl md:py-phi-2xl">
      <div className="mx-auto max-w-5xl px-phi-md md:px-phi-lg">
        <div className="flex items-start gap-phi-md">
          {/* アイコン */}
          <div
            className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl md:h-16 md:w-16"
            style={{ backgroundColor: technology.color, color: "white" }}
          >
            {Icon ? <Icon className="h-7 w-7 md:h-8 md:w-8" /> : null}
          </div>

          {/* テキスト */}
          <div>
            <h1 className="text-[length:var(--font-size-title2)] font-bold leading-[var(--leading-phi-half)] text-foreground md:text-[length:var(--font-size-title1)]">
              {technology.name}
            </h1>
            <p className="mt-phi-2xs max-w-[var(--max-w-phi-prose)] text-[length:var(--font-size-body)] leading-[var(--leading-phi)] text-muted-foreground">
              {technology.longDescription}
            </p>
            <a
              href={technology.officialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-phi-sm inline-block text-[length:var(--font-size-subheading)] leading-[var(--leading-phi-half)] text-primary transition-colors duration-[var(--duration-phi-md)] hover:text-primary/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-md"
            >
              公式ドキュメント →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
