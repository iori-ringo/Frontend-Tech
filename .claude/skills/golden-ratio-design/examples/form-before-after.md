# Form Elements: Before & After

## Input: Before (shadcn/ui default)

```tsx
const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, type, ...props }, ref) => (
    <input
      type={type}
      className={cn(
        "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring md:text-sm",
        className
      )}
      ref={ref}
      {...props}
    />
  )
);
```

### Problems

- `h-9` (36px) — fixed height, does not scale with font size
- `px-3 py-1` (12px / 4px) — 3:1 horizontal-to-vertical ratio is arbitrary
- `rounded-md` (6px) — radius has no relation to padding
- `text-base` / `md:text-sm` — responsive font change is disconnected from spacing

---

## Input: After (φ applied)

```tsx
const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, type, ...props }, ref) => (
    <input
      type={type}
      className={cn(
        "flex w-full",
        "px-phi-md py-phi-sm",            // 1rem / 0.618rem — one φ step apart (Rule 2)
        "text-body leading-phi",           // 1rem / 1.618 line-height
        "rounded-phi-sm",                  // 0.618rem ≤ phi-sm padding (Rule 3)
        "border border-input bg-transparent shadow-sm",
        "transition-colors",
        "placeholder:text-muted-foreground",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-[0.236rem]",
        // ring-offset = phi-3xs (0.236rem)
        className
      )}
      ref={ref}
      {...props}
    />
  )
);
```

### Why this is better

- No fixed height — height is determined by `font-size × line-height + vertical-padding × 2` = `16px × 1.618 + 9.89px × 2` ≈ 45.67px. Naturally scales with font size changes.
- Horizontal-to-vertical padding ratio = phi-md / phi-sm = φ (1.618). This is the golden ratio itself.
- `rounded-phi-sm` (0.618rem = 9.89px) ≤ `py-phi-sm` (0.618rem). Rule 3 satisfied.
- Focus ring offset uses the smallest φ token (phi-3xs) for a subtle but consistent visual.

---

## Label + Input Group

```tsx
// Before
<div className="space-y-2">
  <label className="text-sm font-medium">Email</label>
  <Input placeholder="you@example.com" />
</div>

// After
<div className="flex flex-col gap-phi-2xs">
  {/* gap = phi-2xs (0.382rem) — within-component spacing (Rule 8) */}
  <label className="text-label font-medium leading-phi-half">
    {/* text-label = 0.835rem, leading = 1.272 */}
    Email
  </label>
  <Input placeholder="you@example.com" />
</div>
```

---

## Form Layout with Multiple Fields

```tsx
// Before
<form className="space-y-4">
  <div className="space-y-2">
    <label className="text-sm font-medium">Name</label>
    <Input />
  </div>
  <div className="space-y-2">
    <label className="text-sm font-medium">Email</label>
    <Input type="email" />
  </div>
  <div className="space-y-2">
    <label className="text-sm font-medium">Message</label>
    <textarea className="h-24 w-full rounded-md border px-3 py-2 text-sm" />
  </div>
  <button className="w-full py-2 px-4 rounded-md bg-primary text-primary-foreground">
    Submit
  </button>
</form>

// After
<form className="flex flex-col gap-phi-md">
  {/* gap = phi-md (1rem) — between sibling form groups (Rule 8) */}

  <div className="flex flex-col gap-phi-2xs">
    {/* gap = phi-2xs (0.382rem) — label to input, within component */}
    <label className="text-label font-medium leading-phi-half">Name</label>
    <Input />
  </div>

  <div className="flex flex-col gap-phi-2xs">
    <label className="text-label font-medium leading-phi-half">Email</label>
    <Input type="email" />
  </div>

  <div className="flex flex-col gap-phi-2xs">
    <label className="text-label font-medium leading-phi-half">Message</label>
    <textarea
      className="w-full px-phi-md py-phi-sm text-body leading-phi rounded-phi-sm border border-input bg-transparent placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
    />
    {/* textarea uses identical spacing to Input for consistency */}
  </div>

  <button className="w-full py-phi-sm px-phi-md rounded-full bg-primary text-primary-foreground text-body leading-phi-half font-medium mt-phi-sm">
    {/* mt = phi-sm — extra breathing room before the submit action */}
    Submit
  </button>
</form>
```

### Spacing hierarchy in this form

```
Form groups (field-to-field):  gap-phi-md  (1.000rem)  ← between siblings
Label-to-input:                gap-phi-2xs (0.382rem)  ← within component
Input internal padding:        py-phi-sm   (0.618rem)  ← inside element
Submit button offset:          mt-phi-sm   (0.618rem)  ← emphasis separation
```

Each level is 1–2 φ steps apart, creating a clear visual hierarchy without any arbitrary values.
