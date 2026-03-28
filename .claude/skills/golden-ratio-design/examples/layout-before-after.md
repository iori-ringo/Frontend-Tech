# Layout: Before & After

## Before (typical Tailwind layout)

```tsx
export default function PricingPage() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-16">
      {/* Hero */}
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Simple Pricing</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Choose the plan that works best for you.
        </p>
      </section>

      {/* Pricing Cards */}
      <section className="grid grid-cols-3 gap-8 mb-16">
        <div className="rounded-lg border p-6">
          <h3 className="text-xl font-semibold mb-2">Free</h3>
          <p className="text-3xl font-bold mb-4">$0<span className="text-sm">/mo</span></p>
          <ul className="space-y-2 mb-6">
            <li className="text-sm">5 projects</li>
            <li className="text-sm">1GB storage</li>
          </ul>
          <button className="w-full py-2 px-4 rounded-md bg-primary text-primary-foreground">
            Get Started
          </button>
        </div>
        {/* ...more cards */}
      </section>

      {/* FAQ */}
      <section>
        <h2 className="text-2xl font-bold mb-6">FAQ</h2>
        <div className="space-y-4">
          <details className="border rounded-lg p-4">
            <summary className="font-medium">Question here?</summary>
            <p className="mt-2 text-sm text-muted-foreground">Answer here.</p>
          </details>
        </div>
      </section>
    </main>
  );
}
```

### Problems with default

- **Spacing inconsistency:** `mb-4`, `mb-12`, `mb-16`, `mb-6`, `mb-2` — five different spacings with no governing ratio
- **Arbitrary gaps:** `gap-8` (32px) between cards, `space-y-2` (8px) within lists, `space-y-4` (16px) between FAQs — ratios are 4:1:2 (meaningless)
- **Font size jumps:** `text-4xl` (36px) → `text-3xl` (30px) → `text-2xl` (24px) → `text-xl` (20px) → `text-lg` (18px) → `text-sm` (14px) — these follow a different scale per level
- **Padding mismatches:** Card uses `p-6` (24px), button uses `py-2 px-4` (8px/16px), FAQ uses `p-4` (16px) — three different padding systems

---

## After (φ applied)

```tsx
export default function PricingPage() {
  return (
    <main className="max-w-5xl mx-auto px-phi-lg py-phi-3xl">
      {/* px = phi-lg (1.618rem), py = phi-3xl (6.854rem) — page-level vertical spacing */}

      {/* Hero Section */}
      <section className="text-center mb-phi-2xl">
        {/* mb = phi-2xl (4.236rem) — section-to-section spacing (Rule 8) */}
        <h1 className="text-display2 font-bold leading-phi-half mb-phi-sm">
          {/* text-display2 = 2.618rem (φ²), leading = 1.272, mb = phi-sm (0.618rem) */}
          Simple Pricing
        </h1>
        <p className="text-title3 text-muted-foreground leading-phi-half max-w-2xl mx-auto">
          {/* text-title3 = 1.272rem (√φ) — one meaningful step below display2 */}
          Choose the plan that works best for you.
        </p>
      </section>

      {/* Pricing Cards */}
      <section className="grid grid-cols-3 gap-phi-lg mb-phi-2xl">
        {/* gap = phi-lg (1.618rem) — between components (Rule 8) */}
        {/* mb = phi-2xl (4.236rem) — section-to-section */}
        <div className="rounded-phi-lg border p-phi-lg">
          {/* rounded and padding both at phi-lg (Rule 3: radius ≤ padding) */}
          <h3 className="text-title3 font-semibold leading-phi-half mb-phi-2xs">
            {/* mb = phi-2xs (0.382rem) — within component, tight (Rule 8) */}
            Free
          </h3>
          <p className="text-title2 font-bold leading-phi-half mb-phi-sm">
            {/* text-title2 = 1.618rem (φ) for price prominence */}
            $0<span className="text-caption">/mo</span>
            {/* text-caption = 0.786rem (1/√φ) for unit suffix */}
          </p>
          <ul className="flex flex-col gap-phi-2xs mb-phi-md">
            {/* gap = phi-2xs (0.382rem) — tight list items */}
            {/* mb = phi-md (1rem) — between sibling groups (Rule 8) */}
            <li className="text-subheading leading-phi-half">5 projects</li>
            <li className="text-subheading leading-phi-half">1GB storage</li>
          </ul>
          <button className="w-full py-phi-sm px-phi-md rounded-full bg-primary text-primary-foreground text-body leading-phi-half">
            {/* py = phi-sm, px = phi-md — vertical one step below horizontal (Rule 2) */}
            Get Started
          </button>
        </div>
        {/* ...more cards */}
      </section>

      {/* FAQ Section */}
      <section>
        <h2 className="text-title2 font-bold leading-phi-half mb-phi-lg">
          {/* mb = phi-lg (1.618rem) — heading to content spacing */}
          FAQ
        </h2>
        <div className="flex flex-col gap-phi-sm">
          {/* gap = phi-sm (0.618rem) — between sibling elements (Rule 8) */}
          <details className="border rounded-phi-sm p-phi-md">
            {/* rounded-phi-sm (0.618rem) ≤ p-phi-md (1rem) — Rule 3 satisfied */}
            <summary className="text-body font-medium leading-phi">Question here?</summary>
            <p className="mt-phi-sm text-subheading text-muted-foreground leading-phi-half">
              {/* mt = phi-sm — gap between question and answer */}
              Answer here.
            </p>
          </details>
        </div>
      </section>
    </main>
  );
}
```

### Why this is better

**Spacing hierarchy is explicit and consistent (Rule 8):**

| Level                        | Token used | Value     |
|------------------------------|------------|-----------|
| Page vertical padding        | phi-3xl    | 6.854rem  |
| Section-to-section           | phi-2xl    | 4.236rem  |
| Heading to content           | phi-lg     | 1.618rem  |
| Between components (cards)   | phi-lg     | 1.618rem  |
| Between sibling elements     | phi-sm     | 0.618rem  |
| Within component (tight)     | phi-2xs    | 0.382rem  |

Every level is exactly 1–2 φ steps apart from the adjacent level. No arbitrary jumps.

**Typography ratios are meaningful:**

| Element        | Token     | Size     | Ratio to body |
|----------------|-----------|----------|---------------|
| Page title     | display2  | 2.618rem | φ²            |
| Subtitle       | title3    | 1.272rem | √φ            |
| Card title     | title3    | 1.272rem | √φ            |
| Price          | title2    | 1.618rem | φ             |
| Body / button  | body      | 1.000rem | 1             |
| List items     | subheading| 0.887rem | 1/⁴√φ         |
| Price unit     | caption   | 0.786rem | 1/√φ          |

Every font size is a named step on the φ scale. The ratio between any two sizes can be expressed as a power of φ.
