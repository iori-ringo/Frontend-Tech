# Card: Before & After

## Before (shadcn/ui default)

```tsx
const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("rounded-xl border bg-card text-card-foreground shadow", className)}
      {...props}
    />
  )
);

const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex flex-col space-y-1.5 p-6", className)} {...props} />
  )
);

const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
  )
);

// Usage
<Card>
  <CardHeader>
    <h3 className="text-lg font-semibold">Card Title</h3>
    <p className="text-sm text-muted-foreground">Description text here</p>
  </CardHeader>
  <CardContent>
    <p>Card body content goes here.</p>
  </CardContent>
</Card>
```

### Problems with default

- `p-6` (24px) — padding value is arbitrary, not related to font size
- `rounded-xl` (12px) — radius has no mathematical relationship to padding
- `space-y-1.5` (6px) — gap between title and description is arbitrary
- `text-lg` / `text-sm` — font size jump is inconsistent (18px → 14px, a ×0.78 ratio)
- No optical correction — top padding visually appears larger than bottom

---

## After (φ applied)

```tsx
interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  opticalCorrection?: boolean;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, opticalCorrection = false, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "rounded-phi-lg border bg-card text-card-foreground shadow",
        // rounded-phi-lg = 1.618rem
        className
      )}
      {...props}
    />
  )
);

const CardHeader = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, opticalCorrection = false, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "flex flex-col gap-phi-2xs px-phi-lg pb-phi-sm",
        // gap = phi-2xs (0.382rem) between title and description
        // px  = phi-lg (1.618rem)
        // pb  = phi-sm (0.618rem)
        opticalCorrection
          ? "pt-phi-sm"   // reduced top: phi-sm (0.618rem) instead of phi-lg
          : "pt-phi-lg",  // standard top: phi-lg (1.618rem)
        className
      )}
      {...props}
    />
  )
);

const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "px-phi-lg pb-phi-lg pt-0",
        // px = phi-lg (1.618rem), same as header
        // pb = phi-lg (1.618rem)
        className
      )}
      {...props}
    />
  )
);

// Usage
<Card>
  <CardHeader opticalCorrection>
    <h3 className="text-title3 font-semibold leading-phi-half">Card Title</h3>
    {/* text-title3 = 1.272rem (√φ), leading = 1.272 */}
    <p className="text-subheading text-muted-foreground leading-phi-half">Description text here</p>
    {/* text-subheading = 0.887rem (1/⁴√φ), leading = 1.272 */}
  </CardHeader>
  <CardContent>
    <p className="text-body leading-phi">Card body content goes here.</p>
    {/* text-body = 1rem, leading = 1.618 (φ) */}
  </CardContent>
</Card>
```

### Why this is better

- **Radius-to-padding relationship:** Card radius (phi-lg = 1.618rem) and padding (phi-lg = 1.618rem) are at the same φ step (Rule 3)
- **Optical correction:** When text is the first child, `pt-phi-sm` compensates for line-height whitespace above the title (Rule 7)
- **Typography harmony:** title3 (1.272rem) → subheading (0.887rem) → body (1rem). Title-to-description ratio = 1.272/0.887 ≈ 1.434 ≈ √φ × √φ⁻⁰·⁵
- **Consistent gaps:** `gap-phi-2xs` (0.382rem) between title and description is exactly 2 steps below the padding (phi-lg), following Rule 8 hierarchy

---

## Nested Card Example (Rule 4)

```tsx
// Outer card: rounded-phi-lg (1.618rem), p-phi-lg (1.618rem)
// Inner card radius = 1.618 - 1.618 = 0 → but minimum is phi-2xs
// Better approach: outer p-phi-md (1rem), then inner radius = 1.618 - 1.000 = 0.618 = phi-sm

<Card className="p-phi-md">
  {/* Outer: rounded-phi-lg (1.618rem), padding phi-md (1rem) */}
  <div className="rounded-phi-sm bg-muted p-phi-sm">
    {/* Inner: rounded-phi-sm (0.618rem) = 1.618 - 1.000 */}
    <p className="text-body leading-phi">Nested content</p>
  </div>
</Card>
```
