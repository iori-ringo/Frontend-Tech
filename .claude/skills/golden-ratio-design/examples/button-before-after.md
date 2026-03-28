# Button: Before & After

## Before (shadcn/ui default)

```tsx
import { cva } from "class-variance-authority";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        ghost: "hover:bg-accent hover:text-accent-foreground",
      },
      size: {
        sm: "h-8 rounded-md px-3 text-xs",
        default: "h-9 px-4 py-2",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: { variant: "default", size: "default" },
  }
);
```

### Problems with default

- `px-3`, `px-4`, `px-8` — horizontal padding jumps are inconsistent (12px → 16px → 32px)
- `h-8`, `h-9`, `h-10` — height differences between sizes are only 4px, barely noticeable
- `text-sm`, `text-xs` — font sizes are disconnected from the spacing values
- `rounded-md` — border-radius is the same across all sizes, does not scale with the button

---

## After (φ applied)

```tsx
import { cva } from "class-variance-authority";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-full font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        ghost: "hover:bg-accent hover:text-accent-foreground",
      },
      size: {
        sm: "px-[0.618rem] py-[0.382rem] text-[0.887rem] leading-[1.272] gap-[0.382rem]",
        //    px = phi-sm     py = phi-2xs   text = subheading  leading = halfstep  gap = phi-2xs
        default: "px-[1rem] py-[0.618rem] text-[1rem] leading-[1.272] gap-[0.618rem]",
        //        px = phi-md  py = phi-sm    text = body        leading = halfstep  gap = phi-sm
        lg: "px-[1.618rem] py-[1rem] text-[1.128rem] leading-[1.272] gap-[0.618rem]",
        //   px = phi-lg      py = phi-md  text = heading      leading = halfstep  gap = phi-sm
        icon: "p-[0.618rem]",
        //     p = phi-sm (square)
      },
    },
    defaultVariants: { variant: "default", size: "default" },
  }
);
```

### Why this is better

- **Consistent scaling:** sm → default → lg jumps by exactly φ (×1.618) per step
- **Padding-to-font relationship:** horizontal padding is always at the same φ step as the font size; vertical padding is one step below (Rule 2)
- **Gap scales with size:** icon-to-text gap is one step below horizontal padding (Rule 1)
- **Fully round:** `rounded-full` instead of `rounded-md`, because pill-shaped buttons remove the need for radius-to-padding calculation

---

## Icon Button Variant

```tsx
// Before: no compensation for icon whitespace
<Button size="default">
  <SearchIcon className="mr-2 h-4 w-4" /> Search
</Button>

// After: icon side padding reduced by 1 φ step (Rule 6)
<Button size="default" className="pl-[0.618rem] pr-[1rem]">
  <SearchIcon className="size-[1rem]" /> Search
</Button>
// pl = phi-sm (one step below default px)
// pr = phi-md (default px, unchanged)
// icon size = phi-md (matches font size)
```
