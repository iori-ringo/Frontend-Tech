# Post-Generation Checklist

After generating or modifying UI code, verify EVERY item below before presenting the result. If any check fails, fix the code before responding.

---

## Spacing Checks

- [ ] **All spacing values use φ tokens.** No raw Tailwind values like `p-4`, `m-6`, `gap-3` unless intentionally mixing with standard Tailwind. Acceptable: `p-phi-md`, `m-phi-lg`, `gap-phi-sm`.
- [ ] **No arbitrary spacing values** like `p-[20px]` or `m-[1.5rem]` unless the value exactly matches a φ token (e.g., `p-[0.618rem]` is acceptable because it equals phi-sm).
- [ ] **Adjacent spacing values are within 2 φ steps.** Example: `gap-phi-sm` next to `p-phi-lg` is OK (2 steps). `gap-phi-3xs` next to `p-phi-2xl` is NOT OK (5 steps).

## Typography Checks

- [ ] **Every font size is from the typography scale.** Verify against: display1 (4.236rem), display2 (2.618rem), title1 (2.058rem), title2 (1.618rem), title3 (1.272rem), heading (1.128rem), body (1rem), subheading (0.887rem), callout (0.942rem), label (0.835rem), caption (0.786rem).
- [ ] **Body text uses `leading-phi` (1.618).** Not `leading-normal` or `leading-relaxed`.
- [ ] **Heading/title text uses `leading-phi-half` (1.272).** Not `leading-tight` or `leading-snug`.
- [ ] **Display text uses `leading-phi-quarter` (1.128).** Only for display1 and display2 sizes.

## Padding-to-Font Relationship (Rule 2)

- [ ] **Padding is at the same step or one step below the font size.** Cross-reference:
  - body (φ⁰) → padding phi-sm (φ⁻¹) or phi-md (φ⁰)
  - title2 (φ¹) → padding phi-md (φ⁰) or phi-lg (φ¹)
  - heading (φ⁰·²⁵) → padding phi-sm (φ⁻¹) or phi-md (φ⁰)
  - label (≈φ⁻⁰·³⁷⁵) → padding phi-2xs (φ⁻²) or phi-sm (φ⁻¹)

## Border Radius Checks (Rule 3)

- [ ] **Border radius ≤ padding on the φ scale.** If `p-phi-lg` (1.618rem), then radius must be `rounded-phi-lg` or smaller. If `p-phi-md` (1rem), radius must be `rounded-phi-md` or smaller.
- [ ] **Exception: `rounded-full`** is always valid for pill-shaped elements (buttons, badges, tags).

## Nested Container Check (Rule 4)

- [ ] **If containers are nested, inner radius = outer radius - outer padding.** Verify:
  - Outer `rounded-phi-lg` + `p-phi-sm` → Inner `rounded-phi-md` (1.618 - 0.618 = 1.000)
  - Outer `rounded-phi-lg` + `p-phi-md` → Inner `rounded-phi-sm` (1.618 - 1.000 = 0.618)
  - Outer `rounded-phi-xl` + `p-phi-lg` → Inner `rounded-phi-md` (2.618 - 1.618 = 1.000)

## Icon Compensation Check (Rule 6)

- [ ] **If a button or element has an icon on one side, the icon-side padding is one step below the text-side padding.** Example: text-side `px-phi-md`, icon-side `pl-phi-sm` or `pr-phi-sm`.
- [ ] **Icon size matches the element's font size step.** A body-size button should have `size-[1rem]` icons, not `h-4 w-4`.

## Optical Correction Check (Rule 7)

- [ ] **If text is the first child of a card/container, padding-top is reduced.** Should use asymmetric padding like `pt-phi-sm px-phi-lg pb-phi-lg` instead of `p-phi-lg`.
- [ ] **If an image or non-text element is the first child, no optical correction is applied.** Use equal padding.

## Hierarchical Spacing Check (Rule 8)

- [ ] **Verify spacing increases with hierarchy level:**
  - Within component (tight): phi-2xs (0.382rem) — phi-sm (0.618rem)
  - Between siblings: phi-sm (0.618rem) — phi-md (1rem)
  - Between components: phi-md (1rem) — phi-lg (1.618rem)
  - Between sections: phi-xl (2.618rem) — phi-2xl (4.236rem)
  - Page-level: phi-2xl (4.236rem)+
- [ ] **No inversion:** A within-component gap should NEVER be larger than a between-section gap.

## Line Height Consistency

- [ ] **No mixing of `leading-normal`, `leading-tight`, `leading-relaxed`** with φ line heights. Use only: `leading-phi` (1.618), `leading-phi-half` (1.272), `leading-phi-quarter` (1.128), `leading-phi-tight` (1.062).

---

## Quick Reference: Common Patterns

When in doubt, use these validated combinations:

| Pattern                | Classes                                                     |
|------------------------|-------------------------------------------------------------|
| Body text              | `text-body leading-phi`                                     |
| Heading                | `text-title2 leading-phi-half font-semibold`                |
| Button (md)            | `px-phi-md py-phi-sm text-body leading-phi-half rounded-full` |
| Card wrapper           | `p-phi-lg rounded-phi-lg`                                   |
| Card with text on top  | `pt-phi-sm px-phi-lg pb-phi-lg rounded-phi-lg`              |
| Input field            | `px-phi-md py-phi-sm text-body leading-phi rounded-phi-sm`  |
| Label                  | `text-label leading-phi-half font-medium`                   |
| Label-to-input gap     | `gap-phi-2xs`                                               |
| Form field-to-field    | `gap-phi-md`                                                |
| Section-to-section     | `mb-phi-2xl` or `gap-phi-2xl`                               |
| Page padding           | `px-phi-lg py-phi-2xl`                                      |
