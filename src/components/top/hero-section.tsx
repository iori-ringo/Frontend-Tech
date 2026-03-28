export function HeroSection() {
  return (
    <section className="py-phi-2xl md:py-phi-3xl">
      <div className="mx-auto max-w-5xl px-phi-md md:px-phi-lg">
        <h1 className="text-[length:var(--font-size-title1)] font-bold leading-[var(--leading-phi-half)] text-foreground md:text-[length:var(--font-size-display2)]">
          フロントエンド技術を
          <br />
          <span className="text-primary">体系的に学ぼう</span>
        </h1>
        <p className="mt-phi-sm max-w-[var(--max-w-phi-prose)] text-[length:var(--font-size-body)] leading-[var(--leading-phi)] text-muted-foreground md:text-[length:var(--font-size-heading)]">
          HTML・CSSの基礎から上級テクニックまで、レベル別に整理された学習コンテンツで効率的にスキルアップ。
        </p>
      </div>
    </section>
  );
}
