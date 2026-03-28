# Accessibility Guardrails

The golden ratio system creates visual harmony, but **accessibility requirements always override φ rules when they conflict.** This document defines the constraints that must be satisfied before or after applying φ-based design.

---

## Priority Order

```
1. WCAG compliance          — MUST satisfy (legal/ethical requirement)
2. Platform HIG guidelines  — SHOULD satisfy (Apple HIG, Material Design)
3. Golden ratio rules       — SHOULD satisfy (aesthetic preference)
```

If a φ rule violates #1 or #2, the φ rule loses.

---

## G-1: Minimum Touch Target Size (WCAG 2.5.5 / 2.5.8)

**Requirement:** All interactive elements must have a minimum target area of **44×44 CSS pixels** (WCAG 2.5.5 Level AAA) or **24×24px** (WCAG 2.5.8 Level AA).

**Conflict with φ:** Small buttons/links using phi-2xs or phi-3xs padding may produce targets below 44px.

**Resolution:**

```tsx
// Apply min-h and min-w as a safety net, even if visual padding is small
<button
  className="px-phi-sm py-phi-2xs text-label leading-phi-half min-h-[44px] min-w-[44px]"
>
  Edit
</button>

// For icon-only buttons, the icon + padding must reach 44px
<button className="p-phi-sm min-h-[44px] min-w-[44px] inline-flex items-center justify-center">
  <TrashIcon className="size-[1rem]" />
</button>
```

**Verification formula:**
```
target-height = (py × 2) + (font-size × line-height)
target-width  = (px × 2) + content-width

If either < 44px → add min-h-[44px] min-w-[44px]
```

**Quick reference: Minimum padding for 44px height at each font size:**

| Font size (text-*) | Rem   | line-height | Content height | Minimum py needed |
|---------------------|-------|-------------|----------------|-------------------|
| body (1rem)         | 16px  | 1.272       | 20.4px         | ~12px → phi-sm (9.89px) + min-h |
| subheading          | 14.2px| 1.272       | 18.0px         | ~13px → phi-sm + min-h |
| label               | 13.4px| 1.272       | 17.0px         | ~13.5px → phi-sm + min-h |
| caption             | 12.6px| 1.272       | 16.0px         | ~14px → phi-sm + min-h |

**Recommendation:** For any interactive element using text-subheading or smaller, always add `min-h-[44px]`.

---

## G-2: Minimum Font Size

**Requirement:** Body text should be at least **16px** (1rem) for comfortable reading. Secondary text should be at least **12px** (0.75rem).

**Conflict with φ:** The caption token (0.786rem ≈ 12.6px) is near the minimum. Any token below caption on the φ scale (if extended to φ⁻² for text) would be 9.89px — too small.

**Resolution:**
- **Never use a font size below `text-caption` (0.786rem ≈ 12.6px)** for any readable text.
- The φ typography scale does not extend below caption. If you need smaller text (legal disclaimers, footnotes), use `text-caption` with reduced opacity or lighter color instead of a smaller size.
- For users who may have visual impairments, consider making `text-subheading` (0.887rem ≈ 14.2px) the minimum for secondary content.

```tsx
// ❌ WRONG: Extending φ scale below caption
<span className="text-[0.618rem]">Fine print</span>  // 9.89px — unreadable

// ✅ CORRECT: Use caption with visual de-emphasis
<span className="text-caption text-muted-foreground/70">Fine print</span>
```

---

## G-3: Line Length (Measure)

**Requirement:** Lines of text should be between **45–75 characters** wide for optimal readability (Robert Bringhurst's typographic standard, supported by WCAG 1.4.8).

**Conflict with φ:** Full-width containers with phi-lg padding may produce lines of 100+ characters on wide screens.

**Resolution:**
- Use `max-w-phi-prose` (38.2em ≈ 610px ≈ 65 characters at 16px) for any block of body text.
- This is already defined in the Tailwind preset.

```tsx
<p className="text-body leading-phi max-w-phi-prose">
  Long-form body text should always be constrained to a readable measure.
</p>
```

---

## G-4: Color Contrast

**Requirement:** WCAG 2.1 minimum contrast ratios:
- **4.5:1** for normal text (Level AA)
- **3:1** for large text (≥ 18.66px bold or ≥ 24px regular) (Level AA)
- **7:1** for normal text (Level AAA)

**Conflict with φ:** The φ system defines spacing and size, not color. However, when de-emphasizing text with muted colors (as suggested in G-2), contrast ratios may drop below requirements.

**Resolution:**
- Always verify contrast when using `text-muted-foreground`, reduced opacity, or lighter colors.
- The golden ratio system does not dictate color. Defer to your project's color system (shadcn/ui theme, oklch palette, etc.) for contrast compliance.
- **Never reduce opacity below 0.6** on text that must be readable (legal text, form labels, error messages).

```tsx
// ❌ WRONG: Opacity too low for readable text
<label className="text-label text-foreground/40">Required field</label>

// ✅ CORRECT: Sufficient contrast maintained
<label className="text-label text-muted-foreground">Required field</label>
```

---

## G-5: Focus Indicators

**Requirement:** All interactive elements must have a visible focus indicator with at least **2px** outline and **3:1** contrast against adjacent colors (WCAG 2.4.7 / 2.4.11).

**Conflict with φ:** φ focus ring offsets (phi-3xs = 3.78px) are fine, but the ring width must be at least 2px.

**Resolution:**
- Use `ring-2` (2px) as the minimum ring width for focus states.
- Ring offset can use φ tokens: `ring-offset-[0.236rem]` (phi-3xs) works well.

```tsx
<button className="... focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-[0.236rem]">
  {/* ring-2 = 2px (meets WCAG), offset = phi-3xs (aesthetic) */}
</button>
```

---

## G-6: Spacing for Cognitive Accessibility

**Requirement:** WCAG 1.4.12 (Text Spacing) requires that users can override:
- Line height to at least 1.5× font size
- Paragraph spacing to at least 2× font size
- Letter spacing to 0.12× font size
- Word spacing to 0.16× font size

**Conflict with φ:** `leading-phi` (1.618) exceeds the 1.5× minimum, so body text is compliant by default. However, `leading-phi-tight` (1.062) is below 1.5× and should only be used for non-paragraph content.

**Resolution:**
- `leading-phi` (1.618) → ✅ Always safe for body text (exceeds 1.5)
- `leading-phi-half` (1.272) → ✅ Safe for headings and single-line UI (user override will expand it)
- `leading-phi-quarter` (1.128) → ⚠️ Only for display text (large enough that tight leading is acceptable)
- `leading-phi-tight` (1.062) → ⚠️ Only for badges, tags, compact labels — never for readable paragraphs

```
Safe for paragraphs:  leading-phi (1.618) only
Safe for headings:    leading-phi-half (1.272)
Safe for display:     leading-phi-quarter (1.128)
UI-only:              leading-phi-tight (1.062) — never for prose
```

---

## G-7: Motion and Animation

**Requirement:** WCAG 2.3.3 recommends respecting `prefers-reduced-motion`. Users who experience vestibular disorders or motion sensitivity should not be forced to see animations.

**Conflict with φ:** The animation extension (see `animation.md`) defines φ-based durations and easings. These must be disabled or reduced when the user requests it.

**Resolution:**
- Always wrap non-essential animations in `motion-safe:` (Tailwind) or `@media (prefers-reduced-motion: no-preference)`.
- Essential animations (loading spinners, progress bars) can remain but should use `duration-phi-sm` (100ms) or instant transitions.

```tsx
// ✅ CORRECT: Animation respects user preference
<div className="motion-safe:transition-all motion-safe:duration-phi-lg motion-safe:ease-phi-out">
  {/* Only animates if user has not requested reduced motion */}
</div>

// For essential feedback (e.g., form submission):
<div className="transition-opacity duration-phi-sm">
  {/* Ultra-short duration is acceptable even with reduced motion */}
</div>
```

---

## G-8: Semantic Structure Over Visual Hierarchy

**Requirement:** HTML heading levels (h1–h6) must follow document outline order, regardless of visual size.

**Conflict with φ:** The typography scale (display1 → caption) is a visual scale, not a semantic one. It's tempting to pick heading levels based on visual size.

**Resolution:**
- Always use correct heading levels (h1 → h2 → h3...) in document order.
- Use the φ typography tokens independently of heading level via className.
- An `h3` can be styled as `text-title2` if the visual design requires it.

```tsx
// ❌ WRONG: Skipping heading levels because of visual size
<h1 className="text-display1">Page Title</h1>
<h3 className="text-title2">Section Title</h3>  {/* Skipped h2! */}

// ✅ CORRECT: Proper heading order, visual size set via class
<h1 className="text-display1">Page Title</h1>
<h2 className="text-title2">Section Title</h2>
<h3 className="text-heading">Subsection</h3>
```

---

## Pre-Flight Accessibility Checklist

Run this after the `checklist.md` design verification:

- [ ] All interactive elements ≥ 44×44px touch target (or 24×24px minimum)
- [ ] No text below 12.6px (text-caption minimum)
- [ ] Body text lines ≤ 75 characters (max-w-phi-prose applied)
- [ ] Text contrast ≥ 4.5:1 (normal) or 3:1 (large text)
- [ ] Focus indicators use ring-2 minimum width
- [ ] leading-phi-tight only on non-prose elements
- [ ] Animations wrapped in motion-safe: or @media check
- [ ] Heading levels follow document outline (h1 → h2 → h3...)
- [ ] No text opacity below 0.6 for readable content
