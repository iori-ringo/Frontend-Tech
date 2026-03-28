import { technologies } from "@/data/technologies";
import { HeroSection } from "@/components/top/hero-section";
import { TechnologyGrid } from "@/components/top/technology-grid";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <section className="pb-phi-xl sm:pb-phi-2xl md:pb-phi-3xl">
        <div className="mx-auto max-w-5xl px-phi-sm sm:px-phi-md md:px-phi-lg">
          <h2 className="mb-phi-md text-[length:var(--font-size-heading)] font-semibold leading-[var(--leading-phi-half)] text-foreground sm:mb-phi-lg sm:text-[length:var(--font-size-title3)] md:text-[length:var(--font-size-title2)]">
            学習する技術を選ぶ
          </h2>
          <TechnologyGrid technologies={technologies} />
        </div>
      </section>
    </>
  );
}
