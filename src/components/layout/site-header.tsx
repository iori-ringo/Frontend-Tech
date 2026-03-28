import Link from "next/link";

const navLinks = [
  { href: "/technology/html", label: "HTML" },
  { href: "/technology/css", label: "CSS" },
  { href: "/technology/react", label: "React" },
  { href: "/technology/tailwind-css", label: "Tailwind" },
  { href: "/technology/shadcn-ui", label: "shadcn/ui" },
  { href: "/technology/nextjs", label: "Next.js" },
  { href: "/technology/frontend-basics", label: "基礎知識" },
];

const linkClass =
  "text-[length:var(--font-size-caption)] md:text-[length:var(--font-size-body)] text-muted-foreground transition-colors duration-[var(--duration-phi-md)] hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-md px-phi-2xs py-phi-3xs";

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
        <ul className="flex items-center gap-phi-2xs md:gap-phi-sm" role="list">
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
