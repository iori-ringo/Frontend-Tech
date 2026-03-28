---
name: golden-ratio-design
description: Automatically apply golden ratio (φ = 1.618) based spacing, typography, and optical corrections when generating UI components. For use with Tailwind CSS + shadcn/ui projects. Derived from the LiftKit design system (github.com/Chainlift/liftkit).
---

# Golden Ratio Design System

Apply the golden ratio (φ ≈ 1.618) to produce harmonious, visually balanced UI. This skill replaces linear spacing scales (4px/8px/16px) with an exponential scale derived from φ.

**When to activate:** Any time you generate or modify UI components, layouts, spacing, typography, or styling in a Tailwind CSS + shadcn/ui project.

**Supplementary files in this skill directory (MUST read when relevant):**

| File | When to read | Purpose |
|------|-------------|---------|
| `tokens.json` | Every time you generate or edit CSS/Tailwind classes | Structured lookup of all φ token values, rem/px conversions, and inter-token relationships |
| `checklist.md` | After generating code, before presenting to user | Post-generation self-verification. Run through every checkbox to catch mistakes |
| `examples/button-before-after.md` | When creating buttons or interactive controls | Before/after reference for shadcn Button with φ proportions |
| `examples/card-before-after.md` | When creating cards, panels, or containers | Before/after reference including optical correction and nesting |
| `examples/form-before-after.md` | When creating inputs, labels, or form layouts | Before/after reference for Input, Label, and form group spacing |
| `examples/layout-before-after.md` | When creating page layouts or section structures | Before/after reference for hierarchical spacing across a full page |
| `examples/composite-components.md` | When creating multi-part UI (modals, sidebars, nav+content) | Patterns for complex layouts combining multiple φ-scaled components |
| `antipatterns.md` | Always skim before generating | Common mistakes to actively avoid |
| `tailwind-preset.ts` | During project setup (see Setup section below) | **TEMPLATE.** Copy to project before use. Tailwind v3 preset with all φ tokens |
| `golden-ratio-v4.css` | During project setup (see Setup section below) | **TEMPLATE.** Copy to project before use. Tailwind v4 CSS preset with @theme tokens |
| `responsive.md` | When adding responsive breakpoints | Rules for scaling φ tokens across screen sizes |
| `accessibility.md` | Always check after generating interactive UI | Accessibility guardrails that override φ rules when they conflict (touch targets, min font, contrast, motion) |
| `animation.md` | When adding transitions, animations, or motion | φ-based duration scale, easing curves, stagger patterns, and prefers-reduced-motion compliance |
| `color-system.md` | When setting up project colors or generating themes | φ-based oklch color system rules, shadcn/ui variable mapping, contrast requirements |
| `color-tokens.json` | When generating or verifying color variables | Structured reference of tonal palette steps, role mappings, and φ relationships |
| `color-generator.ts` | During project setup (see Setup section below) | **TEMPLATE.** Copy to project. CLI script that generates CSS variables from brand hue + chroma |
| `examples/color-blue-brand.md` | When setting up colors for the first time | Complete worked example: H=260 brand → full light/dark CSS with contrast audit |

---

## Project Setup (MUST run on first use)

Before generating any UI code, check if the project has the φ design tokens installed. If not, copy the appropriate template file from this skill directory.

### Detection

```
Check if ONE of the following exists:
  - tailwind.config.ts contains "phi-" tokens → Already set up (v3)
  - A CSS file imports golden-ratio-v4.css or contains --spacing-phi- → Already set up (v4)
  - Neither → Run setup below
```

### Tailwind v4 (CSS-first config)

1. Copy template to project styles directory:

   ```
   cp .claude/skills/golden-ratio-design/golden-ratio-v4.css → src/styles/golden-ratio.css
   ```

2. Add import to the project's main CSS file (e.g., `globals.css`, `app.css`):

   ```css
   @import "tailwindcss";
   @import "./golden-ratio.css";   /* ← add this line AFTER tailwindcss */
   ```

### Tailwind v3 (JS/TS config)

1. Copy template to project root or config directory:

   ```
   cp .claude/skills/golden-ratio-design/tailwind-preset.ts → src/styles/golden-ratio-preset.ts
   ```

2. Add preset to `tailwind.config.ts`:

   ```typescript
   import goldenRatioPreset from "./src/styles/golden-ratio-preset";

   export default {
     presets: [goldenRatioPreset],
     content: [/* ... */],
     // ...rest of config
   } satisfies Config;
   ```

### Copy destination conventions

| Template file          | Recommended copy destination         |
|------------------------|--------------------------------------|
| `golden-ratio-v4.css`  | `src/styles/golden-ratio.css`        |
| `tailwind-preset.ts`   | `src/styles/golden-ratio-preset.ts`  |

**IMPORTANT:** The original files in `.claude/skills/` are templates (read-only source of truth). The copies in `src/styles/` are the project's actual config files that get imported. If the user has a different styles directory convention (e.g., `app/styles/`, `styles/`), adapt the destination accordingly.

### Post-setup verification

After copying, confirm the tokens are available by checking that Tailwind recognizes φ classes:

- Run the dev server and verify `p-phi-md` or `text-body` produce styles
- Or check the generated CSS output for `--spacing-phi-md`

---

## Core Constants

```
φ (phi)            = 1.618
√φ  (halfstep)     = 1.272
⁴√φ (quarterstep)  = 1.128
⁸√φ (eighthstep)   = 1.062
```

These four constants drive ALL sizing decisions in this system.

---

## 1. Spacing Scale

Every spacing value is `φ^n` where n is an integer exponent. Base unit = 1rem (16px).

| Token     | Exponent | rem     | px (at 16px base) |
|-----------|----------|---------|---------------------|
| `phi-3xs` | φ⁻³     | 0.236   | 3.78                |
| `phi-2xs` | φ⁻²     | 0.382   | 6.11                |
| `phi-sm`  | φ⁻¹     | 0.618   | 9.89                |
| `phi-md`  | φ⁰      | 1.000   | 16.00               |
| `phi-lg`  | φ¹      | 1.618   | 25.89               |
| `phi-xl`  | φ²      | 2.618   | 41.89               |
| `phi-2xl` | φ³      | 4.236   | 67.77               |
| `phi-3xl` | φ⁴      | 6.854   | 109.66              |
| `phi-4xl` | φ⁵      | 11.089  | 177.42              |

**Usage:** Apply to `padding`, `margin`, `gap`, `width`, `height`, `border-radius`, and any spatial property.

---

## 2. Typography Scale

Font sizes are derived from combinations of φ and its roots. Line heights use the step constants.

| Name        | Formula              | rem   | px    | line-height         |
|-------------|----------------------|-------|-------|---------------------|
| `display1`  | φ³                   | 4.236 | 67.8  | 1.128 (quarterstep) |
| `display2`  | φ²                   | 2.618 | 41.9  | 1.272 (halfstep)    |
| `title1`    | φ × √φ              | 2.058 | 32.9  | 1.272 (halfstep)    |
| `title2`    | φ                    | 1.618 | 25.9  | 1.272 (halfstep)    |
| `title3`    | √φ                   | 1.272 | 20.4  | 1.272 (halfstep)    |
| `heading`   | ⁴√φ                  | 1.128 | 18.0  | 1.272 (halfstep)    |
| `body`      | 1                    | 1.000 | 16.0  | 1.618 (φ)           |
| `subheading`| 1 / ⁴√φ              | 0.887 | 14.2  | 1.272 (halfstep)    |
| `callout`   | 1 / ⁸√φ              | 0.942 | 15.1  | 1.272 (halfstep)    |
| `label`     | 1 / (⁴√φ × ⁸√φ)     | 0.835 | 13.4  | 1.272 (halfstep)    |
| `caption`   | 1 / √φ               | 0.786 | 12.6  | 1.272 (halfstep)    |

**Key rule:** Body text uses `line-height: φ (1.618)`. All other text uses `line-height: √φ (1.272)`. Exception: `display1` uses `⁴√φ (1.128)` because very large text needs tighter leading.

---

## 3. Optical Correction

When text sits at the top of a container (e.g., inside a Card), the line-height creates invisible whitespace above the first line. Even with mathematically equal padding on all sides, the top visually appears to have more space. Correct this by reducing `padding-top`.

**Formula:**

```
optical-offset = fontSize × (lineHeight / φ)
```

**How to apply:** Replace equal padding with adjusted `padding-top`:

```
Standard:   p-phi-lg  (equal on all sides)
Corrected:  pt-phi-sm px-phi-lg pb-phi-lg  (reduced top)
```

Only apply optical correction when the first child element of a container is text.

---

## 4. Tailwind Configuration

### Option A: Tailwind v4 (CSS-first)

Add to `globals.css`:

```css
@layer base {
  :root {
    --phi: 1.618;
    --phi-half: 1.272;
    --phi-quarter: 1.128;
    --phi-eighth: 1.062;
  }
}

@theme {
  /* φ Spacing Scale */
  --spacing-phi-3xs: 0.236rem;
  --spacing-phi-2xs: 0.382rem;
  --spacing-phi-sm:  0.618rem;
  --spacing-phi-md:  1rem;
  --spacing-phi-lg:  1.618rem;
  --spacing-phi-xl:  2.618rem;
  --spacing-phi-2xl: 4.236rem;
  --spacing-phi-3xl: 6.854rem;
  --spacing-phi-4xl: 11.089rem;

  /* φ Font Sizes */
  --font-size-display1:   4.236rem;
  --font-size-display2:   2.618rem;
  --font-size-title1:     2.058rem;
  --font-size-title2:     1.618rem;
  --font-size-title3:     1.272rem;
  --font-size-heading:    1.128rem;
  --font-size-body:       1rem;
  --font-size-subheading: 0.887rem;
  --font-size-callout:    0.942rem;
  --font-size-label:      0.835rem;
  --font-size-caption:    0.786rem;

  /* φ Line Heights */
  --line-height-phi:         1.618;
  --line-height-phi-half:    1.272;
  --line-height-phi-quarter: 1.128;
  --line-height-phi-tight:   1.062;

  /* φ Border Radius */
  --radius-phi-3xs: 0.236rem;
  --radius-phi-2xs: 0.382rem;
  --radius-phi-sm:  0.618rem;
  --radius-phi-md:  1rem;
  --radius-phi-lg:  1.618rem;
  --radius-phi-xl:  2.618rem;
}
```

### Option B: Tailwind v3 (tailwind.config.ts)

```typescript
import type { Config } from "tailwindcss";

const phi = 1.618;
const phiScale = (n: number) => `${(phi ** n).toFixed(3)}rem`;

const config: Config = {
  theme: {
    extend: {
      spacing: {
        "phi-3xs": phiScale(-3),
        "phi-2xs": phiScale(-2),
        "phi-sm":  phiScale(-1),
        "phi-md":  phiScale(0),
        "phi-lg":  phiScale(1),
        "phi-xl":  phiScale(2),
        "phi-2xl": phiScale(3),
        "phi-3xl": phiScale(4),
        "phi-4xl": phiScale(5),
      },
      fontSize: {
        display1:   [phiScale(3),  { lineHeight: "1.128" }],
        display2:   [phiScale(2),  { lineHeight: "1.272" }],
        title1:     ["2.058rem",   { lineHeight: "1.272" }],
        title2:     [phiScale(1),  { lineHeight: "1.272" }],
        title3:     ["1.272rem",   { lineHeight: "1.272" }],
        heading:    ["1.128rem",   { lineHeight: "1.272" }],
        body:       ["1rem",       { lineHeight: "1.618" }],
        subheading: ["0.887rem",   { lineHeight: "1.272" }],
        callout:    ["0.942rem",   { lineHeight: "1.272" }],
        label:      ["0.835rem",   { lineHeight: "1.272" }],
        caption:    ["0.786rem",   { lineHeight: "1.272" }],
      },
      lineHeight: {
        phi:           "1.618",
        "phi-half":    "1.272",
        "phi-quarter": "1.128",
        "phi-tight":   "1.062",
      },
      borderRadius: {
        "phi-3xs": phiScale(-3),
        "phi-2xs": phiScale(-2),
        "phi-sm":  phiScale(-1),
        "phi-md":  phiScale(0),
        "phi-lg":  phiScale(1),
        "phi-xl":  phiScale(2),
      },
    },
  },
};

export default config;
```

---

## 5. Component Design Rules

Follow these rules in order when creating or modifying any UI component.

### Rule 1: Spacing Between Adjacent Elements

Use values that are **1 step apart** on the φ scale. Never skip more than 2 steps.

```
✅ gap-phi-sm (0.618rem) between items in a list
✅ gap-phi-md (1rem) between card sections
✅ gap-phi-lg (1.618rem) between page sections
❌ gap-2 → gap-8 (arbitrary linear jump)
```

### Rule 2: Padding Relates to Font Size

The padding of an element should be at the **same step or one step below** its font size on the φ scale.

```
font-size = body (φ⁰ = 1rem) → padding = phi-sm (φ⁻¹) or phi-md (φ⁰)
font-size = title2 (φ¹)      → padding = phi-md (φ⁰) or phi-lg (φ¹)
font-size = caption (φ⁻⁰·⁵)  → padding = phi-2xs (φ⁻²) or phi-sm (φ⁻¹)
```

### Rule 3: Border Radius ≤ Padding

The border-radius of an element should be at the **same step or below** its padding on the φ scale.

```
padding = phi-lg → border-radius = phi-lg, phi-md, or phi-sm
padding = phi-md → border-radius = phi-md, phi-sm, or phi-2xs
```

### Rule 4: Nested Container Radius

For nested containers, the inner element's border-radius must account for the outer element's padding:

```
inner-radius = outer-radius - outer-padding
```

Example:

```
Outer: rounded-phi-lg (1.618rem), p-phi-sm (0.618rem)
Inner: rounded-phi-md (1.000rem)  ← because 1.618 - 0.618 = 1.000
```

### Rule 5: Line Height Selection

| Content type        | Line height to use        |
|---------------------|---------------------------|
| Body / paragraph    | φ (1.618)                 |
| Headings / titles   | √φ (1.272)               |
| Large display text  | ⁴√φ (1.128)              |
| Compact UI labels   | ⁸√φ (1.062)              |

### Rule 6: Icon Button Padding Compensation

When a button contains an icon on one side, the icon side visually appears to have more padding because the icon has built-in whitespace. Reduce padding on the icon side by one φ step.

```tsx
// Text only
<Button className="px-phi-md py-phi-sm">Submit</Button>

// Icon on left
<Button className="pl-phi-sm pr-phi-md py-phi-sm">
  <Icon /> Submit
</Button>

// Icon on right
<Button className="pl-phi-md pr-phi-sm py-phi-sm">
  Submit <Icon />
</Button>
```

### Rule 7: Optical Correction for Cards

Apply only when the first child of a container is text. Reduce `padding-top` to compensate for line-height whitespace.

```tsx
// Without correction (no text at top, or image at top)
<Card className="p-phi-lg">
  <Image />
  <p>Content</p>
</Card>

// With correction (text directly at top)
<Card className="pt-phi-sm px-phi-lg pb-phi-lg">
  <h3 className="text-title3">Title</h3>
  <p>Content</p>
</Card>
```

### Rule 8: Hierarchical Spacing

Use larger spacing values for higher-level separations:

| Level                          | Spacing token    | Value             |
|--------------------------------|------------------|-------------------|
| Within a component (tight)     | phi-2xs — phi-sm | 0.382 — 0.618rem |
| Between sibling elements       | phi-sm — phi-md  | 0.618 — 1.000rem |
| Between components in a group  | phi-md — phi-lg  | 1.000 — 1.618rem |
| Between sections               | phi-xl — phi-2xl | 2.618 — 4.236rem |
| Between page-level blocks      | phi-2xl+         | 4.236rem+         |

---

## 6. shadcn/ui Component Customization Examples

### Button with φ proportions

```tsx
import { cva } from "class-variance-authority";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-full font-medium transition-colors",
  {
    variants: {
      size: {
        sm: "px-[0.618rem] py-[0.382rem] text-[0.887rem] leading-[1.272] gap-[0.382rem]",
        md: "px-[1rem] py-[0.618rem] text-[1rem] leading-[1.272] gap-[0.618rem]",
        lg: "px-[1.618rem] py-[1rem] text-[1.128rem] leading-[1.272] gap-[0.618rem]",
      },
    },
    defaultVariants: { size: "md" },
  }
);
```

Breakdown of `md` size:

- `px` = phi-md (φ⁰ = 1rem) — horizontal padding matches font size step
- `py` = phi-sm (φ⁻¹ = 0.618rem) — vertical padding is one step below
- `text` = body (1rem)
- `leading` = halfstep (1.272) — button text uses heading line-height
- `gap` = phi-sm — icon-to-text gap is one step below font size

### Card with optical correction

```tsx
interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  opticalCorrection?: boolean;
}

const Card = ({ opticalCorrection = false, children, className, ...props }: CardProps) => (
  <div
    className={cn(
      "rounded-phi-lg bg-card text-card-foreground shadow-sm",
      opticalCorrection
        ? "pt-phi-sm px-phi-lg pb-phi-lg"
        : "p-phi-lg",
      className
    )}
    {...props}
  >
    {children}
  </div>
);
```

### Input with φ spacing

```tsx
const Input = ({ className, ...props }: React.InputHTMLAttributes<HTMLInputElement>) => (
  <input
    className={cn(
      "px-phi-md py-phi-sm",          // horizontal > vertical by 1 step
      "text-body leading-phi",         // body size with φ line-height
      "rounded-phi-sm",               // radius ≤ padding (Rule 3)
      "border border-input",
      "focus:ring-2 focus:ring-offset-[0.236rem]",  // ring offset = phi-3xs
      className
    )}
    {...props}
  />
);
```

---

## 7. Decision Flowchart

When creating a new UI element, follow this sequence:

```
1. What is the font size?
   → Pick from the typography scale table (Section 2)

2. What is the padding?
   → Same φ step or one step below the font size (Rule 2)

3. What is the border-radius?
   → Same step or below the padding (Rule 3)

4. What is the gap to adjacent elements?
   → One step below the padding (Rule 1)

5. Is text the first child of this container?
   → Yes: Apply optical correction to padding-top (Rule 7)
   → No:  Use equal padding

6. Is this a nested container?
   → Yes: inner-radius = outer-radius - outer-padding (Rule 4)
   → No:  Use standard radius

7. Does this element contain an icon alongside text?
   → Yes: Reduce padding on icon side by one step (Rule 6)
   → No:  Use equal horizontal padding
```

---

## 8. Color System (φ × oklch)

This skill includes an optional color system that derives a full shadcn/ui
palette from a single brand color using φ relationships in oklch color space.

**Quick summary:**

- Input: brand `hue` (0–360) + `chroma` (0.05–0.25)
- Output: all 30 shadcn/ui CSS variables for both light and dark themes
- Math: Lightness steps use φ compression, chroma decays by √φ per step
- Contrast: guaranteed WCAG AA (≥4.5:1) for all foreground/background pairs

**Setup (v4):**

1. Copy `color-generator.ts` to `src/styles/phi-color-generator.ts`
2. Run: `npx tsx src/styles/phi-color-generator.ts --hue 260 --chroma 0.15 --format tailwind-v4`
3. Paste output into `globals.css`

**When AI generates colors:**

1. Read `color-system.md` for rules CR-1 through CR-8
2. Reference `color-tokens.json` for palette step values
3. Use `examples/color-blue-brand.md` as a concrete reference
4. Verify contrast using the approximate formula: CR ≈ (L₁³ + 0.05) / (L₂³ + 0.05)

See `color-system.md` for full details.

---

## 9. Compatibility Notes

- This system **extends** shadcn's default theme; it does not replace it. Standard Tailwind utilities (`p-4`, `text-lg`, etc.) remain available.
- φ tokens and standard Tailwind tokens can coexist. Use φ tokens for new components and migrate existing ones gradually.
- The φ spacing scale is compatible with the 8px grid: `phi-md` (16px) and `phi-2xs` (6.11px ≈ 6px) roughly align with common grid values.
- For responsive design, see `responsive.md` in this skill directory for detailed breakpoint rules. Summary: keep the φ scale intact, shift the base step down by 1 at each smaller breakpoint.
