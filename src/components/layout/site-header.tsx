import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 glass-strong">
      <nav
        className="mx-auto flex max-w-5xl items-center justify-between px-phi-md py-phi-sm md:px-phi-lg"
        aria-label="メインナビゲーション"
      >
        <Link
          href="/"
          className="text-[length:var(--font-size-heading)] font-bold leading-[var(--leading-phi-half)] text-foreground transition-colors duration-[var(--duration-phi-md)] hover:text-primary"
        >
          Frontend Learning
        </Link>
        <ul className="flex items-center gap-phi-md" role="list">
          <li>
            <Link
              href="/technology/html"
              className="text-[length:var(--font-size-body)] text-muted-foreground transition-colors duration-[var(--duration-phi-md)] hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-md px-phi-2xs py-phi-3xs"
            >
              HTML
            </Link>
          </li>
          <li>
            <Link
              href="/technology/css"
              className="text-[length:var(--font-size-body)] text-muted-foreground transition-colors duration-[var(--duration-phi-md)] hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-md px-phi-2xs py-phi-3xs"
            >
              CSS
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
