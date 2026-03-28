import Link from "next/link";
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

type TechnologyCardProps = {
  technology: Technology;
};

export function TechnologyCard({ technology }: TechnologyCardProps) {
  const Icon = iconMap[technology.icon];
  const topicCount = technology.levels.reduce(
    (sum, level) =>
      sum +
      level.sections.reduce((s, section) => s + section.topics.length, 0),
    0,
  );

  return (
    <Link
      href={`/technology/${technology.slug}`}
      className="group block rounded-xl bg-card p-phi-lg shadow-neumorphic transition-all duration-[var(--duration-phi-lg)] ease-[var(--ease-phi-out)] motion-safe:hover:shadow-neumorphic-hover motion-safe:hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
    >
      {/* アイコン */}
      <div
        className="mb-phi-sm flex h-12 w-12 items-center justify-center rounded-lg"
        style={{ backgroundColor: technology.color, color: "white" }}
      >
        {Icon ? <Icon className="h-6 w-6" /> : null}
      </div>

      {/* テキストコンテンツ — 光学補正: テキスト先頭のため上部paddingは軽め */}
      <h3 className="text-[length:var(--font-size-title3)] font-bold leading-[var(--leading-phi-half)] text-card-foreground">
        {technology.name}
      </h3>
      <p className="mt-phi-2xs text-[length:var(--font-size-body)] leading-[var(--leading-phi)] text-muted-foreground">
        {technology.description}
      </p>

      {/* メタ情報 */}
      <div className="mt-phi-sm flex items-center gap-phi-sm text-[length:var(--font-size-caption)] leading-[var(--leading-phi-half)] text-muted-foreground">
        <span>{technology.levels.length} レベル</span>
        <span aria-hidden="true">·</span>
        <span>{topicCount} トピック</span>
      </div>
    </Link>
  );
}
