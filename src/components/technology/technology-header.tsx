import { FileCode2, Palette, Atom, Wind, Component, Globe, BookOpen } from "lucide-react";

import type { Technology } from "@/types/technology";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  FileCode2,
  Palette,
  Atom,
  Wind,
  Component,
  Globe,
  BookOpen,
};

type TechnologyHeaderProps = {
  technology: Technology;
};

export function TechnologyHeader({ technology }: TechnologyHeaderProps) {
  const Icon = iconMap[technology.icon];

  return (
    <section className="py-phi-lg sm:py-phi-xl md:py-phi-2xl">
      <div className="mx-auto max-w-5xl px-phi-sm sm:px-phi-md md:px-phi-lg">
        <div className="flex items-start gap-phi-sm sm:gap-phi-md">
          {/* アイコン */}
          <div
            className="flex h-phi-xl w-phi-xl shrink-0 items-center justify-center rounded-lg sm:h-phi-2xl sm:w-phi-2xl sm:rounded-xl md:h-phi-3xl md:w-phi-3xl"
            style={{ backgroundColor: technology.color, color: "white" }}
          >
            {Icon ? <Icon className="h-phi-md w-phi-md sm:h-phi-lg sm:w-phi-lg md:h-phi-xl md:w-phi-xl" /> : null}
          </div>

          {/* テキスト */}
          <div className="min-w-0">
            <h1 className="text-[length:var(--font-size-title3)] font-bold leading-[var(--leading-phi-half)] text-foreground sm:text-[length:var(--font-size-title2)] md:text-[length:var(--font-size-title1)]">
              {technology.name}
            </h1>
            <p className="mt-phi-2xs max-w-[var(--max-w-phi-prose)] text-[length:var(--font-size-subheading)] leading-[var(--leading-phi)] text-muted-foreground sm:text-[length:var(--font-size-body)]">
              {technology.longDescription}
            </p>
            <a
              href={technology.officialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-phi-sm inline-block text-[length:var(--font-size-caption)] leading-[var(--leading-phi-half)] text-primary transition-colors duration-[var(--duration-phi-md)] hover:text-primary/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-md sm:text-[length:var(--font-size-subheading)]"
            >
              公式ドキュメント →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
