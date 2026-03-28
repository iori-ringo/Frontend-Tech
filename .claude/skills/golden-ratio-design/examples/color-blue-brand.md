# Color System Example — Blue Brand

> Brand: H=260, C=0.15 (Indigo-blue)

## Generated Tonal Palettes

### Primary (L₀=0.45, C₀=0.15, H=260)

```
Step  │ Lightness │ Chroma │ Role (Light)         │ Role (Dark)
──────┼───────────┼────────┼──────────────────────┼──────────────────────
  +5  │ 0.9504    │ 0.0450 │ primary-foreground   │ —
  +4  │ 0.9198    │ 0.0573 │ —                    │ —
  +3  │ 0.8702    │ 0.0729 │ —                    │ —
  +2  │ 0.7899    │ 0.0927 │ —                    │ primary, ring
  +1  │ 0.6601    │ 0.1179 │ —                    │ —
   0  │ 0.4500    │ 0.1500 │ primary, ring        │ —
  -1  │ 0.2781    │ 0.1179 │ —                    │ —
  -2  │ 0.1719    │ 0.0927 │ —                    │ primary-foreground
  -3  │ 0.1062    │ 0.0729 │ —                    │ —
  -4  │ 0.0657    │ 0.0573 │ —                    │ —
  -5  │ 0.0406    │ 0.0450 │ —                    │ —
```

### Secondary (L₀=0.55, C₀=0.0927, H=260)

```
Step  │ Lightness │ Chroma │ Role (Light)          │ Role (Dark)
──────┼───────────┼────────┼───────────────────────┼──────────────────────
  +3  │ 0.8938    │ 0.0450 │ secondary, accent     │ sec-fg, accent-fg
  -1  │ 0.3399    │ 0.0729 │ secondary-fg, acc-fg  │ —
  -2  │ 0.2101    │ 0.0573 │ —                     │ secondary, accent
```

### Neutral (L₀=0.55, C₀=0.0354, H=260)

```
Step  │ Lightness │ Chroma │ Role (Light)       │ Role (Dark)
──────┼───────────┼────────┼────────────────────┼────────────────────
  +4  │ 0.9343    │ 0.0135 │ sidebar-bg         │ —
  +3  │ 0.8938    │ 0.0172 │ muted              │ foreground, card-fg
  +2  │ 0.8281    │ 0.0219 │ border, input      │ —
  +1  │ 0.7219    │ 0.0278 │ —                  │ muted-foreground
  -1  │ 0.3399    │ 0.0278 │ muted-foreground   │ border, input
  -2  │ 0.2101    │ 0.0219 │ sidebar-foreground │ muted
  -3  │ 0.1298    │ 0.0172 │ foreground, card-fg│ card, popover
  -4  │ 0.0802    │ 0.0135 │ —                  │ background
```

## Full CSS Output

### Light Theme

```css
:root {
  --background: oklch(0.9950 0.0106 260);
  --foreground: oklch(0.1298 0.0172 260);
  --card: oklch(0.9900 0.0106 260);
  --card-foreground: oklch(0.1298 0.0172 260);
  --popover: oklch(0.9900 0.0106 260);
  --popover-foreground: oklch(0.1298 0.0172 260);
  --primary: oklch(0.4500 0.1500 260);
  --primary-foreground: oklch(0.9504 0.0450 260);
  --secondary: oklch(0.8938 0.0450 260);
  --secondary-foreground: oklch(0.3399 0.0729 260);
  --muted: oklch(0.8938 0.0172 260);
  --muted-foreground: oklch(0.3399 0.0278 260);
  --accent: oklch(0.8938 0.0450 260);
  --accent-foreground: oklch(0.3399 0.0729 260);
  --destructive: oklch(0.4500 0.1500 25);
  --destructive-foreground: oklch(0.9504 0.0450 25);
  --border: oklch(0.8281 0.0219 260);
  --input: oklch(0.8281 0.0219 260);
  --ring: oklch(0.4500 0.1500 260);
  --chart-1: oklch(0.4500 0.1500 260);
  --chart-2: oklch(0.5500 0.0927 260);
  --chart-3: oklch(0.2781 0.1179 260);
  --chart-4: oklch(0.7219 0.0729 260);
  --chart-5: oklch(0.4500 0.1500 25);
  --sidebar-background: oklch(0.9343 0.0135 260);
  --sidebar-foreground: oklch(0.2101 0.0219 260);
  --sidebar-primary: oklch(0.4500 0.1500 260);
  --sidebar-primary-foreground: oklch(0.9504 0.0450 260);
  --sidebar-accent: oklch(0.8938 0.0450 260);
  --sidebar-accent-foreground: oklch(0.3399 0.0729 260);
  --sidebar-border: oklch(0.8281 0.0219 260);
  --sidebar-ring: oklch(0.4500 0.1500 260);
}
```

### Dark Theme

```css
.dark {
  --background: oklch(0.0802 0.0135 260);
  --foreground: oklch(0.8938 0.0172 260);
  --card: oklch(0.1298 0.0172 260);
  --card-foreground: oklch(0.8938 0.0172 260);
  --popover: oklch(0.1298 0.0172 260);
  --popover-foreground: oklch(0.8938 0.0172 260);
  --primary: oklch(0.7899 0.0927 260);
  --primary-foreground: oklch(0.1719 0.0927 260);
  --secondary: oklch(0.2101 0.0573 260);
  --secondary-foreground: oklch(0.8938 0.0450 260);
  --muted: oklch(0.2101 0.0219 260);
  --muted-foreground: oklch(0.7219 0.0278 260);
  --accent: oklch(0.2101 0.0573 260);
  --accent-foreground: oklch(0.8938 0.0450 260);
  --destructive: oklch(0.6601 0.1179 25);
  --destructive-foreground: oklch(0.1719 0.0927 25);
  --border: oklch(0.3399 0.0278 260);
  --input: oklch(0.3399 0.0278 260);
  --ring: oklch(0.7899 0.0927 260);
  --chart-1: oklch(0.7899 0.0927 260);
  --chart-2: oklch(0.7219 0.0729 260);
  --chart-3: oklch(0.6601 0.1179 260);
  --chart-4: oklch(0.8281 0.0573 260);
  --chart-5: oklch(0.6601 0.1179 25);
  --sidebar-background: oklch(0.0802 0.0135 260);
  --sidebar-foreground: oklch(0.8938 0.0172 260);
  --sidebar-primary: oklch(0.7899 0.0927 260);
  --sidebar-primary-foreground: oklch(0.1719 0.0927 260);
  --sidebar-accent: oklch(0.2101 0.0573 260);
  --sidebar-accent-foreground: oklch(0.8938 0.0450 260);
  --sidebar-border: oklch(0.3399 0.0278 260);
  --sidebar-ring: oklch(0.7899 0.0927 260);
}
```

### Tailwind v4 Theme Directive

```css
@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-card: var(--card);
  --color-card-foreground: var(--card-foreground);
  --color-popover: var(--popover);
  --color-popover-foreground: var(--popover-foreground);
  --color-primary: var(--primary);
  --color-primary-foreground: var(--primary-foreground);
  --color-secondary: var(--secondary);
  --color-secondary-foreground: var(--secondary-foreground);
  --color-muted: var(--muted);
  --color-muted-foreground: var(--muted-foreground);
  --color-accent: var(--accent);
  --color-accent-foreground: var(--accent-foreground);
  --color-destructive: var(--destructive);
  --color-destructive-foreground: var(--destructive-foreground);
  --color-border: var(--border);
  --color-input: var(--input);
  --color-ring: var(--ring);
  --color-chart-1: var(--chart-1);
  --color-chart-2: var(--chart-2);
  --color-chart-3: var(--chart-3);
  --color-chart-4: var(--chart-4);
  --color-chart-5: var(--chart-5);
  --color-sidebar-background: var(--sidebar-background);
  --color-sidebar-foreground: var(--sidebar-foreground);
  --color-sidebar-primary: var(--sidebar-primary);
  --color-sidebar-primary-foreground: var(--sidebar-primary-foreground);
  --color-sidebar-accent: var(--sidebar-accent);
  --color-sidebar-accent-foreground: var(--sidebar-accent-foreground);
  --color-sidebar-border: var(--sidebar-border);
  --color-sidebar-ring: var(--sidebar-ring);
}
```

## Contrast Audit Results

### Light Theme — ALL PASS WCAG AA

| Pair                        | Ratio  | Level |
|-----------------------------|--------|-------|
| primary ↔ primary-fg        | ~6.4:1 | AA    |
| secondary ↔ secondary-fg    | ~8.6:1 | AAA   |
| muted ↔ muted-fg            | ~8.6:1 | AAA   |
| foreground ↔ background     | ~19.8:1| AAA   |
| destructive ↔ destructive-fg| ~6.4:1 | AA    |
| card-fg ↔ card              | ~19.6:1| AAA   |
| sidebar-fg ↔ sidebar-bg     | ~14.6:1| AAA   |

### Dark Theme — ALL PASS WCAG AA

| Pair                        | Ratio  | Level |
|-----------------------------|--------|-------|
| primary ↔ primary-fg        | ~9.9:1 | AAA   |
| secondary ↔ secondary-fg    | ~12.9:1| AAA   |
| muted ↔ muted-fg            | ~7.2:1 | AAA   |
| foreground ↔ background     | ~15.1:1| AAA   |
| destructive ↔ destructive-fg| ~6.1:1 | AA    |
| card-fg ↔ card              | ~14.6:1| AAA   |
| sidebar-fg ↔ sidebar-bg     | ~15.1:1| AAA   |

## φ Relationships Visible in Output

1. **Darker lightness ratios are exactly φ**: 0.45 / 0.2781 = 1.618, 0.2781 / 0.1719 = 1.618
2. **Chroma decay**: 0.15 → 0.1179 → 0.0927 → 0.0729 (each step = ÷√φ)
3. **Secondary chroma = Primary / φ**: 0.15 / 1.618 = 0.0927
4. **Neutral chroma = Primary / φ³**: 0.15 / 4.236 = 0.0354
