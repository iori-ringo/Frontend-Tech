# Responsive Design with the φ Scale

## Core Principle

The φ scale itself never changes. Instead, **shift which step you use** at each breakpoint. Think of it as "stepping down" on the same scale, not creating a different scale.

```
Desktop (lg+):  Use the step the design rules suggest (default)
Tablet  (md):   Shift down by 1 φ step
Mobile  (sm):   Shift down by 2 φ steps (or 1 from tablet)
```

This preserves the φ ratio between all elements at every screen size.

---

## Step-Down Strategy

### Spacing

| Purpose                    | Desktop (lg+)  | Tablet (md)    | Mobile (default) |
|----------------------------|----------------|----------------|-------------------|
| Page vertical padding      | phi-3xl        | phi-2xl        | phi-xl            |
| Page horizontal padding    | phi-lg         | phi-lg         | phi-md            |
| Section-to-section         | phi-2xl        | phi-xl         | phi-lg            |
| Between components         | phi-lg         | phi-md         | phi-sm            |
| Within component           | phi-sm         | phi-2xs        | phi-2xs           |

### Typography

| Role           | Desktop (lg+) | Tablet (md)  | Mobile (default) |
|----------------|---------------|--------------|-------------------|
| Page title     | display2      | title1       | title2            |
| Section title  | title2        | title3       | heading           |
| Body           | body          | body         | body              |
| Caption        | caption       | caption      | caption           |

**Important:** Body text stays at `1rem` across all breakpoints. Only headings and spacing shift. This ensures readability is never compromised on small screens.

---

## Implementation Pattern

### Mobile-first (recommended)

Write the smallest screen first, then scale up with `md:` and `lg:` prefixes.

```tsx
<section className={cn(
  // Mobile (default)
  "px-phi-md py-phi-xl",
  // Tablet
  "md:px-phi-lg md:py-phi-2xl",
  // Desktop
  "lg:py-phi-3xl",  // px stays at phi-lg from md
)}>
  <h1 className={cn(
    "text-title2 leading-phi-half font-bold",
    "md:text-title1",
    "lg:text-display2 lg:leading-phi-quarter",
    // Note: display2 gets leading-phi-quarter, not phi-half
  )}>
    Page Title
  </h1>
  <p className="text-body leading-phi max-w-phi-prose">
    {/* Body text stays the same at all breakpoints */}
    Body content here.
  </p>
</section>
```

### Grid columns with φ gaps

```tsx
<div className={cn(
  "grid grid-cols-1 gap-phi-sm",        // Mobile: stacked, small gap
  "md:grid-cols-2 md:gap-phi-md",       // Tablet: 2 columns, medium gap
  "lg:grid-cols-3 lg:gap-phi-lg",       // Desktop: 3 columns, large gap
)}>
  {cards.map(card => <Card key={card.id} {...card} />)}
</div>
```

---

## Step-Down Rules

### Rule R1: Shift spacing by exactly 1 step per breakpoint

```
✅ phi-lg → phi-md → phi-sm  (1 step each time)
✅ phi-2xl → phi-xl → phi-lg (1 step each time)
❌ phi-2xl → phi-sm           (3 steps — too drastic)
❌ phi-lg → phi-lg → phi-md   (skipping tablet — inconsistent)
```

### Rule R2: Headings shift, body doesn't

```
✅ display2 → title1 → title2  (heading steps down)
✅ body stays body at all sizes
❌ body → subheading on mobile  (breaks readability)
❌ display1 on mobile           (too large for small screens)
```

### Rule R3: Maintain ratio between heading and body

At every breakpoint, the heading-to-body ratio should be at least √φ (1.272).

```
Desktop:  display2 (2.618rem) / body (1rem) = 2.618 = φ²  ✅
Tablet:   title1 (2.058rem)   / body (1rem) = 2.058       ✅
Mobile:   title2 (1.618rem)   / body (1rem) = 1.618 = φ   ✅

❌ heading (1.128rem) / body (1rem) = 1.128 — ratio < √φ, heading barely distinguishable
```

### Rule R4: Never increase spacing at smaller breakpoints

```
✅ phi-lg → phi-md (smaller on mobile — correct)
❌ phi-sm → phi-md (bigger on mobile — wrong direction)
```

### Rule R5: Container padding and radius step down together

If you step down padding by 1, step down radius by 1 as well to maintain Rule 3 (radius ≤ padding).

```
Desktop: p-phi-lg rounded-phi-lg
Tablet:  p-phi-md rounded-phi-md  (both shifted down 1)
Mobile:  p-phi-sm rounded-phi-sm  (both shifted down 1)
```

---

## Base Font Size Alternative

Instead of shifting every token individually, you can adjust the root `font-size` to scale everything proportionally:

```css
:root {
  font-size: 14px;  /* Mobile: shrinks all rem values by 14/16 = 0.875 */
}

@media (min-width: 768px) {
  :root {
    font-size: 15px;  /* Tablet */
  }
}

@media (min-width: 1024px) {
  :root {
    font-size: 16px;  /* Desktop: standard base */
  }
}
```

**Trade-off:** This scales everything uniformly, which is simpler but gives you less control. The step-down strategy (above) lets you scale spacing more aggressively than typography, which is usually what you want on small screens.

**Recommendation:** Use the step-down strategy for most projects. Reserve base font-size adjustment for simple marketing pages or when you need pixel-precise uniform scaling.
