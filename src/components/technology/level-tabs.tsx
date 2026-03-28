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
      <TabsList className="mb-phi-md grid w-full grid-cols-3 shadow-neumorphic-inset sm:mb-phi-lg">
        {levels.map((levelContent) => (
          <TabsTrigger
            key={levelContent.level}
            value={levelContent.level}
            className="min-h-[44px] text-[length:var(--font-size-caption)] leading-[var(--leading-phi-half)] transition-all duration-[var(--duration-phi-md)] sm:text-[length:var(--font-size-body)]"
          >
            {levelContent.label}
          </TabsTrigger>
        ))}
      </TabsList>

      {levels.map((levelContent) => (
        <TabsContent key={levelContent.level} value={levelContent.level}>
          <p className="mb-phi-sm text-[length:var(--font-size-subheading)] leading-[var(--leading-phi)] text-muted-foreground sm:mb-phi-md sm:text-[length:var(--font-size-body)]">
            {levelContent.description}
          </p>
          {levelContent.sections.map((section) => (
            <ContentSection key={section.id} section={section} />
          ))}
        </TabsContent>
      ))}
    </Tabs>
  );
}
