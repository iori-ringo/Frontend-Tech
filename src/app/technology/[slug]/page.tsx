import { notFound } from "next/navigation";

import { technologies } from "@/data/technologies";
import { TechnologyHeader } from "@/components/technology/technology-header";
import { LevelTabs } from "@/components/technology/level-tabs";

type TechnologyPageProps = {
  params: Promise<{ slug: string }>;
};

/** 静的生成対象のパラメータを事前定義 */
export async function generateStaticParams() {
  return technologies.map((tech) => ({ slug: tech.slug }));
}

/** ページごとの動的メタデータ */
export async function generateMetadata({ params }: TechnologyPageProps) {
  const { slug } = await params;
  const technology = technologies.find((t) => t.slug === slug);
  if (!technology) return {};

  return {
    title: `${technology.name} — Frontend Learning`,
    description: technology.longDescription,
  };
}

export default async function TechnologyPage({ params }: TechnologyPageProps) {
  const { slug } = await params;
  const technology = technologies.find((t) => t.slug === slug);

  if (!technology) {
    notFound();
  }

  return (
    <>
      <TechnologyHeader technology={technology} />
      <section className="pb-phi-xl sm:pb-phi-2xl md:pb-phi-3xl">
        <div className="mx-auto max-w-5xl px-phi-sm sm:px-phi-md md:px-phi-lg">
          <LevelTabs levels={technology.levels} />
        </div>
      </section>
    </>
  );
}
