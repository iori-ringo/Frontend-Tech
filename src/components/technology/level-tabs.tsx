"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { LevelContent } from "@/types/technology";
import { ContentSection } from "./content-section";

type LevelTabsProps = {
  levels: LevelContent[];
};

export function LevelTabs({ levels }: LevelTabsProps) {
  return (
    <Tabs defaultValue={levels[0]?.level} className="w-full">
      <TabsList className="mb-phi-lg grid w-full grid-cols-3 shadow-neumorphic-inset">
        {levels.map((levelContent) => (
          <TabsTrigger
            key={levelContent.level}
            value={levelContent.level}
            className="min-h-[44px] text-[length:var(--font-size-body)] leading-[var(--leading-phi-half)] transition-all duration-[var(--duration-phi-md)]"
          >
            {levelContent.label}
          </TabsTrigger>
        ))}
      </TabsList>

      {levels.map((levelContent) => (
        <TabsContent key={levelContent.level} value={levelContent.level}>
          {/* レベル説明 */}
          <p className="mb-phi-md text-[length:var(--font-size-body)] leading-[var(--leading-phi)] text-muted-foreground">
            {levelContent.description}
          </p>

          {/* セクション一覧 */}
          {levelContent.sections.map((section) => (
            <ContentSection key={section.id} section={section} />
          ))}
        </TabsContent>
      ))}
    </Tabs>
  );
}
