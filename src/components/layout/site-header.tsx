import Link from "next/link";

const navLinks = [
  { href: "/technology/html", label: "HTML" },
  { href: "/technology/css", label: "CSS" },
  { href: "/technology/react", label: "React" },
  { href: "/technology/tailwind-css", label: "Tailwind" },
  { href: "/technology/shadcn-ui", label: "shadcn/ui" },
  { href: "/technology/nextjs", label: "Next.js" },
  { href: "/technology/frontend-basics", label: "基礎知識" },
  { href: "/technology/vite", label: "Vite" },
  { href: "/technology/astro", label: "Astro" },
];

const linkClass =
  "shrink-0 text-[length:var(--font-size-caption)] md:text-[length:var(--font-size-subheading)] text-muted-foreground transition-colors duration-[var(--duration-phi-md)] hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-md px-phi-2xs py-phi-3xs";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 glass-strong">
      {/* ロゴ行 */}
      <div className="mx-auto flex max-w-5xl items-center justify-between px-phi-sm py-phi-2xs md:px-phi-lg md:py-phi-sm">
        <Link
          href="/"
          className="shrink-0 text-[length:var(--font-size-subheading)] font-bold leading-[var(--leading-phi-half)] text-foreground transition-colors duration-[var(--duration-phi-md)] hover:text-primary md:text-[length:var(--font-size-heading)]"
        >
          Frontend Learning
        </Link>
        {/* デスクトップナビ（md以上で表示） */}
        <nav className="hidden md:block" aria-label="メインナビゲーション">
          <ul className="flex items-center gap-phi-sm" role="list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className={linkClass}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      {/* モバイルナビ（md未満で横スクロール表示） */}
      <nav
        className="border-t border-border/50 md:hidden"
        aria-label="メインナビゲーション"
      >
        <ul
          className="flex gap-phi-3xs overflow-x-auto px-phi-sm py-phi-3xs scrollbar-none"
          role="list"
        >
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className={linkClass}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
