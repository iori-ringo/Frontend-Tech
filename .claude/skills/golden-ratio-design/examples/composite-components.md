# Composite Components: Before & After

Multi-part UI patterns combining several φ-scaled components. These examples demonstrate how spacing hierarchy (Rule 8) scales across complex layouts.

---

## Modal / Dialog

### Before (typical shadcn Dialog)

```tsx
<Dialog>
  <DialogContent className="sm:max-w-[425px]">
    <DialogHeader>
      <DialogTitle>Edit profile</DialogTitle>
      <DialogDescription>Make changes to your profile here.</DialogDescription>
    </DialogHeader>
    <div className="grid gap-4 py-4">
      <div className="grid grid-cols-4 items-center gap-4">
        <label className="text-right text-sm">Name</label>
        <Input className="col-span-3" />
      </div>
      <div className="grid grid-cols-4 items-center gap-4">
        <label className="text-right text-sm">Email</label>
        <Input className="col-span-3" type="email" />
      </div>
    </div>
    <DialogFooter>
      <Button type="submit">Save changes</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>
```

### After (φ applied)

```tsx
<Dialog>
  <DialogContent
    className={cn(
      "sm:max-w-[425px]",
      "rounded-phi-md",         // overlay components: phi-md max radius (AP-2)
      "p-phi-lg",               // overall padding: phi-lg (1.618rem)
    )}
  >
    <DialogHeader className="mb-phi-md">
      {/* mb = phi-md (1rem) — section gap within modal (heading → body) */}
      <DialogTitle className="text-title3 leading-phi-half font-semibold">
        Edit profile
      </DialogTitle>
      <DialogDescription className="text-subheading leading-phi-half text-muted-foreground mt-phi-2xs">
        {/* mt = phi-2xs (0.382rem) — tight within-component gap */}
        Make changes to your profile here.
      </DialogDescription>
    </DialogHeader>

    <div className="flex flex-col gap-phi-md">
      {/* gap = phi-md (1rem) — between form groups */}
      <div className="grid grid-cols-4 items-center gap-phi-sm">
        {/* gap = phi-sm (0.618rem) — label to input (horizontal) */}
        <label className="text-right text-label leading-phi-half font-medium">
          Name
        </label>
        <Input className="col-span-3" />
      </div>
      <div className="grid grid-cols-4 items-center gap-phi-sm">
        <label className="text-right text-label leading-phi-half font-medium">
          Email
        </label>
        <Input className="col-span-3" type="email" />
      </div>
    </div>

    <DialogFooter className="mt-phi-lg">
      {/* mt = phi-lg (1.618rem) — footer separation (same as overall padding) */}
      <Button>Save changes</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>
```

### Spacing map

```
Modal padding (outer):           phi-lg  (1.618rem)
Header to body:                  phi-md  (1.000rem)
Title to description:            phi-2xs (0.382rem)
Between form groups:             phi-md  (1.000rem)
Label to input (horizontal):     phi-sm  (0.618rem)
Body to footer:                  phi-lg  (1.618rem)
```

---

## Sidebar + Content Layout

### Before

```tsx
<div className="flex min-h-screen">
  <aside className="w-64 border-r bg-muted/40 p-4">
    <h2 className="text-lg font-semibold mb-4 px-2">Navigation</h2>
    <nav className="space-y-1">
      <a href="#" className="block rounded-md px-2 py-1.5 text-sm hover:bg-accent">Dashboard</a>
      <a href="#" className="block rounded-md px-2 py-1.5 text-sm hover:bg-accent">Projects</a>
      <a href="#" className="block rounded-md px-2 py-1.5 text-sm hover:bg-accent">Settings</a>
    </nav>
  </aside>
  <main className="flex-1 p-8">
    <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
    <div className="grid grid-cols-3 gap-6">
      {/* Content cards */}
    </div>
  </main>
</div>
```

### After (φ applied)

```tsx
<div className="flex min-h-screen">
  {/* ─── Sidebar ─── */}
  <aside className="w-[16.18rem] border-r bg-muted/40 px-phi-sm py-phi-lg">
    {/* width = 16.18rem ≈ φ × 10rem — sidebar width as a φ proportion */}
    {/* px = phi-sm (0.618rem), py = phi-lg (1.618rem) */}
    <h2 className="text-heading leading-phi-half font-semibold mb-phi-md px-phi-sm">
      {/* text-heading = 1.128rem (⁴√φ), mb = phi-md */}
      Navigation
    </h2>
    <nav className="flex flex-col gap-phi-3xs">
      {/* gap = phi-3xs (0.236rem) — minimal gap between nav items */}
      <a
        href="#"
        className={cn(
          "rounded-phi-2xs px-phi-sm py-phi-2xs",
          // rounded-phi-2xs (0.382rem) ≤ py-phi-2xs (0.382rem) — Rule 3
          "text-subheading leading-phi-half",
          "hover:bg-accent transition-colors motion-safe:duration-phi-sm",
          "min-h-[44px] flex items-center",
          // min-h for touch target (accessibility G-1)
        )}
      >
        Dashboard
      </a>
      <a href="#" className={cn(/* same classes */)}>Projects</a>
      <a href="#" className={cn(/* same classes */)}>Settings</a>
    </nav>
  </aside>

  {/* ─── Main Content ─── */}
  <main className="flex-1 px-phi-xl py-phi-2xl">
    {/* px = phi-xl (2.618rem), py = phi-2xl (4.236rem) — page-level spacing */}
    <h1 className="text-display2 leading-phi-half font-bold mb-phi-xl">
      {/* mb = phi-xl — heading to grid gap (section-level) */}
      Dashboard
    </h1>
    <div className="grid grid-cols-3 gap-phi-lg">
      {/* gap = phi-lg (1.618rem) — between components */}
      <Card className="p-phi-lg rounded-phi-lg">
        {/* Card uses standard φ patterns from card-before-after.md */}
      </Card>
    </div>
  </main>
</div>
```

### Spacing map

```
Sidebar:
  Overall padding:               px-phi-sm / py-phi-lg
  Section heading margin:        mb-phi-md
  Nav item gap:                  gap-phi-3xs
  Nav item internal padding:     px-phi-sm / py-phi-2xs

Main content:
  Page padding:                  px-phi-xl / py-phi-2xl
  Heading to content:            mb-phi-xl
  Card grid gap:                 gap-phi-lg
  Card internal padding:         p-phi-lg
```

Notice how sidebar spacing is intentionally 1-2 steps below main content spacing — the sidebar is secondary UI, so smaller tokens communicate subordination.

---

## Header + Hero + Feature Grid (Landing Page)

```tsx
{/* ─── Sticky Header ─── */}
<header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur">
  <div className="mx-auto max-w-5xl flex items-center justify-between px-phi-lg py-phi-sm">
    {/* py = phi-sm — nav bar height implicit from padding (AP-3) */}
    <span className="text-heading leading-phi-half font-bold">Brand</span>
    <nav className="flex items-center gap-phi-md">
      {/* gap = phi-md between nav links */}
      <a className="text-subheading leading-phi-half hover:text-primary min-h-[44px] flex items-center">
        Features
      </a>
      <a className="text-subheading leading-phi-half hover:text-primary min-h-[44px] flex items-center">
        Pricing
      </a>
      <Button size="default">Get Started</Button>
    </nav>
  </div>
</header>

{/* ─── Hero ─── */}
<section className="mx-auto max-w-5xl px-phi-lg py-phi-3xl text-center">
  {/* py = phi-3xl (6.854rem) — page-level hero spacing */}
  <h1 className="text-display2 leading-phi-quarter font-bold mb-phi-md md:text-display1">
    {/* Responsive: title2 → display2 → display1 */}
    Ship faster with harmony
  </h1>
  <p className="text-title3 leading-phi-half text-muted-foreground max-w-phi-prose mx-auto mb-phi-lg">
    {/* max-w-phi-prose constrains line length (accessibility G-3) */}
    The golden ratio design system for modern web applications.
  </p>
  <div className="flex justify-center gap-phi-sm">
    {/* gap = phi-sm between CTA buttons */}
    <Button size="lg">Start free trial</Button>
    <Button size="lg" variant="outline">View demo</Button>
  </div>
</section>

{/* ─── Feature Grid ─── */}
<section className="mx-auto max-w-5xl px-phi-lg py-phi-2xl">
  {/* py = phi-2xl — section-to-section spacing */}
  <h2 className="text-title2 leading-phi-half font-bold text-center mb-phi-xl">
    {/* mb = phi-xl — heading to grid */}
    Features
  </h2>
  <div className="grid grid-cols-1 gap-phi-lg md:grid-cols-2 lg:grid-cols-3">
    <Card opticalCorrection>
      <CardHeader opticalCorrection>
        <h3 className="text-title3 leading-phi-half font-semibold">Fast by default</h3>
        <p className="text-subheading leading-phi-half text-muted-foreground">
          Optimized for performance out of the box.
        </p>
      </CardHeader>
    </Card>
    {/* ...more feature cards */}
  </div>
</section>
```

### Spacing map

```
Header:
  Horizontal padding:            px-phi-lg
  Vertical padding:              py-phi-sm
  Nav link gap:                  gap-phi-md

Hero:
  Vertical padding:              py-phi-3xl
  Title to subtitle:             mb-phi-md
  Subtitle to CTAs:              mb-phi-lg
  CTA button gap:                gap-phi-sm

Feature section:
  Vertical padding:              py-phi-2xl
  Heading to grid:               mb-phi-xl
  Card grid gap:                 gap-phi-lg
```

Full hierarchy from largest to smallest:
```
phi-3xl (6.854rem)  — Hero vertical padding (page landmark)
phi-2xl (4.236rem)  — Section vertical padding
phi-xl  (2.618rem)  — Heading to content
phi-lg  (1.618rem)  — Grid gap / card padding / horizontal page padding
phi-md  (1.000rem)  — Title to subtitle / nav gap
phi-sm  (0.618rem)  — Header vertical padding / CTA gap
phi-2xs (0.382rem)  — Within-component tight gaps
```

Every level is 1 φ step apart from its neighbors. This is the hierarchical spacing principle (Rule 8) applied across an entire page.
