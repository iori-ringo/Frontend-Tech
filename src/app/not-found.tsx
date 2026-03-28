import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center px-phi-sm py-phi-2xl sm:px-phi-md sm:py-phi-3xl">
      <h1 className="text-[length:var(--font-size-title1)] font-bold leading-[var(--leading-phi-quarter)] text-foreground sm:text-[length:var(--font-size-display2)]">
        404
      </h1>
      <p className="mt-phi-sm text-[length:var(--font-size-heading)] leading-[var(--leading-phi-half)] text-muted-foreground">
        ページが見つかりませんでした
      </p>
      <Link
        href="/"
        className="mt-phi-md inline-flex min-h-[44px] items-center rounded-lg bg-primary px-phi-lg py-phi-sm text-[length:var(--font-size-body)] font-medium text-primary-foreground transition-colors duration-[var(--duration-phi-md)] hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      >
        トップに戻る
      </Link>
    </div>
  );
}
