# φ Color System — oklch × Golden Ratio

> **One brand color → full shadcn/ui palette, mathematically derived.**

## Overview

This extension generates a complete shadcn/ui-compatible color scheme from a single
brand color (hue + chroma) using φ-based tonal compression in the oklch color space.
Every lightness step, chroma reduction, and role mapping follows φ relationships,
ensuring the color system shares the same mathematical foundation as the spacing system.

---

## Core Algorithm

### 1. Tonal Palette Generation

From a base color `(L₀, C₀, H)`, generate an 11-step tonal palette:

**Lighter steps** (toward white):
```
L_n = L₀ + (1 - L₀) × (1 - 1/φⁿ)    where n = 1..5
```

**Darker steps** (toward black):
```
L_n = L₀ / φⁿ                          where n = 1..5
```

**Chroma decay** (both directions):
```
C_n = C₀ / φ^(n × 0.5)
```

This produces a palette where:
- Darker steps have an exact φ ratio between adjacent lightnesses
- Lighter steps compress asymptotically toward 1.0 (white)
- Chroma fades naturally as colors approach black or white

### 2. Role-Specific Base Lightness

Different UI roles require different base lightness for WCAG compliance:

| Role        | Base L₀ | Rationale                                          |
|-------------|---------|---------------------------------------------------|
| Accent      | 0.45    | Darker base ensures ≥4.5:1 contrast with light fg |
| Secondary   | 0.55    | Standard mid-tone for secondary/muted backgrounds  |
| Neutral     | 0.55    | Standard mid-tone for borders, surfaces            |

This mirrors Material 3's approach where primary uses tone 40 (darker)
and surface colors use mid-range tones.

### 3. Chroma Derivation

From a single brand chroma `C₀`, derive all palette chromas:

| Palette     | Chroma       | φ Relationship    |
|-------------|-------------|-------------------|
| Primary     | C₀           | Full brand chroma |
| Secondary   | C₀ / φ       | Reduced by φ      |
| Neutral     | C₀ / φ³      | Minimal tint      |
| Destructive | C₀ (H → 25) | Full chroma, red hue |

### 4. Hue Strategy

| Palette     | Hue                        |
|-------------|----------------------------|
| Primary     | Brand hue (input)          |
| Secondary   | Brand hue (same)           |
| Neutral     | Brand hue (tinted neutral) |
| Destructive | 25 (red/orange zone)       |

Keeping hue constant across primary/secondary/neutral creates a monochromatic
harmony. The only hue break is destructive, which shifts to red for semantic clarity.

---

## shadcn/ui Variable Mapping

### Light Theme

```
Role                    → Palette     Step   Purpose
─────────────────────────────────────────────────────────
background              → neutral     fixed  Page background (L≈0.995)
foreground              → neutral     -3     Body text
card / card-foreground  → neutral     fixed/-3 Card surfaces
popover / popover-fg    → neutral     fixed/-3 Popover surfaces
primary                 → primary     0      CTA buttons, links
primary-foreground      → primary     +5     Text on primary
secondary               → secondary   +3     Secondary actions bg
secondary-foreground    → secondary   -1     Text on secondary
muted                   → neutral     +3     Muted backgrounds
muted-foreground        → neutral     -1     Muted text
accent                  → secondary   +3     Hover highlights
accent-foreground       → secondary   -1     Text on accent
destructive             → destructive 0      Danger actions
destructive-foreground  → destructive +5     Text on destructive
border                  → neutral     +2     Borders
input                   → neutral     +2     Input borders
ring                    → primary     0      Focus rings
sidebar-background      → neutral     +4     Sidebar bg
sidebar-foreground      → neutral     -2     Sidebar text
sidebar-primary         → primary     0      Active sidebar item
sidebar-primary-fg      → primary     +5     Text on active item
sidebar-accent          → secondary   +3     Hover sidebar item
sidebar-accent-fg       → secondary   -1     Text on hover item
sidebar-border          → neutral     +2     Sidebar dividers
sidebar-ring            → primary     0      Sidebar focus ring
```

### Dark Theme

Lightness direction is inverted:

```
Role                    → Palette     Step   Notes
─────────────────────────────────────────────────────────
background              → neutral     -4     Dark page bg
foreground              → neutral     +3     Light body text
primary                 → primary     +2     Lighter for visibility
primary-foreground      → primary     -2     Dark text on light primary
secondary               → secondary   -2     Dark secondary bg
secondary-foreground    → secondary   +3     Light text on dark bg
muted                   → neutral     -2     Dark muted bg
muted-foreground        → neutral     +1     Slightly dimmer text
destructive             → destructive +1     Lighter red for dark bg
destructive-foreground  → destructive -2     Dark text on lighter red
border                  → neutral     -1     Dark border
```

---

## Rules

### CR-1: Single Source of Truth

All colors derive from exactly TWO inputs:
- `hue` (0–360): The brand hue angle
- `chroma` (0.05–0.25): The brand saturation intensity

Everything else is computed. No manual color picking.

### CR-2: oklch Only

All CSS variables MUST use oklch() function syntax.
Never use hex, rgb(), or hsl() in the color system output.

```css
/* ✅ Correct */
--primary: oklch(0.4500 0.1500 260);

/* ❌ Wrong */
--primary: #4466cc;
--primary: hsl(240 50% 50%);
```

### CR-3: Contrast Floor

Every `*-foreground` variable MUST achieve ≥4.5:1 contrast ratio against
its corresponding background variable (WCAG 2.1 AA for normal text).

The algorithm guarantees this with L₀=0.45 for accent roles,
but AI MUST verify after any manual override.

### CR-4: Chroma Ceiling

oklch chroma values rendered in sRGB gamut vary by hue.
If a generated color falls outside sRGB gamut (browser clamps it),
reduce chroma by dividing by φ until it fits:

```
C_safe = C / φⁿ  (increment n until in-gamut)
```

Practical guideline: C ≤ 0.20 is generally safe for all hues.
C > 0.25 may clip at certain hue angles (especially greens, blues).

### CR-5: Hue Preservation

The brand hue MUST remain constant across primary, secondary, and neutral
palettes. Only destructive shifts to hue 25.

If additional semantic colors are needed (warning, success, info),
derive them with fixed hue offsets:

| Semantic    | Hue Rule           | Example (brand H=260) |
|-------------|--------------------|-----------------------|
| Destructive | H = 25 (fixed)     | 25                    |
| Warning     | H = 85 (fixed)     | 85                    |
| Success     | H = 155 (fixed)    | 155                   |
| Info        | H = brand hue      | 260                   |

### CR-6: Dark Mode Symmetry

Dark mode is NOT a different color scheme — it's the same palette with
lightness roles swapped. The rule is:

```
Light primary (step 0)  → Dark primary (step +2)
Light primary-fg (+5)   → Dark primary-fg (-2)
```

This ensures identical chroma relationships in both modes.

### CR-7: shadcn Variable Completeness

The generated output MUST include ALL variables that shadcn/ui expects.
Missing variables cause components to render with no color.

Required variables (30 total):
background, foreground, card, card-foreground, popover, popover-foreground,
primary, primary-foreground, secondary, secondary-foreground, muted,
muted-foreground, accent, accent-foreground, destructive,
destructive-foreground, border, input, ring, chart-1 through chart-5,
sidebar-background, sidebar-foreground, sidebar-primary,
sidebar-primary-foreground, sidebar-accent, sidebar-accent-foreground,
sidebar-border, sidebar-ring.

### CR-8: Integration with φ Spacing

When this color system is used alongside the φ spacing system:

- Use `--ring` color with the φ focus ring width (2px minimum per G-5)
- Use `--border` color with border-radius from φ tokens (`rounded-phi-*`)
- Chart colors should be applied to data visualizations that use φ spacing
  for padding and margins

---

## Setup

### Detection

Check if the project already has φ color variables:
```
globals.css contains "oklch" AND φ-derived value pattern
```

### v4 (Tailwind CSS v4)

1. Run the color generator (see `color-generator.ts`) with brand hue + chroma
2. Copy the output CSS into `globals.css` replacing existing `:root` and `.dark` blocks
3. Ensure `@theme inline` block maps all variables:

```css
@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-primary: var(--primary);
  --color-primary-foreground: var(--primary-foreground);
  /* ... all 30 variables ... */
}
```

### v3 (Tailwind CSS v3)

Same process, but variables are defined in `@layer base` within `globals.css`.

---

## Customization Points

| Parameter        | Default | Range      | Effect                           |
|-----------------|---------|------------|----------------------------------|
| hue             | —       | 0–360      | Brand color angle                |
| chroma          | 0.15    | 0.05–0.25  | Brand saturation                 |
| accent_L        | 0.45    | 0.35–0.50  | Primary/destructive base tone    |
| neutral_L       | 0.55    | 0.45–0.60  | Secondary/neutral base tone      |
| destructive_hue | 25      | 15–35      | Red-zone hue for danger states   |

AI may adjust these within the stated ranges if the brand requires it,
but MUST re-run contrast verification after any change.
