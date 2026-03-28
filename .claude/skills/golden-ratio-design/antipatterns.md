# Anti-Patterns: Common Mistakes to Avoid

This document lists mistakes that frequently occur when applying the golden ratio design system. **Read this before generating code** to avoid these traps.

---

## AP-1: Applying φ Spacing to Data-Dense Components

**Mistake:** Using phi-lg or phi-md padding inside table cells, data grids, or dense list items.

```tsx
// ❌ WRONG: Table cells with φ padding — wastes too much space
<td className="p-phi-md text-body">$1,234.56</td>
<td className="p-phi-md text-body">Active</td>

// ✅ CORRECT: Tables use the smallest φ tokens or standard Tailwind
<td className="px-phi-sm py-phi-2xs text-subheading">$1,234.56</td>
<td className="px-phi-sm py-phi-2xs text-subheading">Active</td>
```

**Why:** Data tables prioritize density and scanability. The φ scale's exponential growth means even phi-md (16px) padding on every cell adds up rapidly. Use phi-2xs or phi-3xs for vertical cell padding.

**Rule of thumb:** If the component's primary purpose is to display many rows of data, use the bottom 3 tokens: phi-3xs, phi-2xs, phi-sm.

---

## AP-2: Forcing φ Radius on System Overlays

**Mistake:** Applying φ border-radius to modals, dialogs, dropdown menus, or tooltips that sit on the system overlay layer.

```tsx
// ❌ WRONG: Modal with phi-xl radius — looks like a balloon
<DialogContent className="rounded-phi-xl p-phi-xl">

// ✅ CORRECT: Modals use moderate radius, standard for the overlay layer
<DialogContent className="rounded-phi-md p-phi-lg">
```

**Why:** Overlay elements (modals, sheets, drawers, popovers) are already visually separated from the page by a backdrop or shadow. Overly large radii make them look playful rather than functional. Keep overlays at phi-md or phi-sm radius.

---

## AP-3: Using φ Spacing for Navigation Bar Height

**Mistake:** Setting the navbar height to a φ token instead of letting content + padding determine it.

```tsx
// ❌ WRONG: Fixed φ height — may not fit content, fights with sticky positioning
<nav className="h-phi-2xl px-phi-lg">

// ✅ CORRECT: Height is implicit from padding + content
<nav className="px-phi-lg py-phi-sm">
  {/* Height = py-phi-sm × 2 + content height */}
</nav>
```

**Why:** Navbars must accommodate logos, buttons, dropdowns, and various content heights. A fixed φ-based height creates rigidity. Let padding define the whitespace, and the height will follow naturally.

---

## AP-4: Same φ Token for Both Inline and Block Spacing

**Mistake:** Using the same token for horizontal and vertical spacing in contexts where they have different visual weight.

```tsx
// ❌ WRONG: Same token for padding-x and margin-bottom on a card
<Card className="p-phi-lg mb-phi-lg">
  {/* Horizontal padding and vertical section gap are the same — flat hierarchy */}

// ✅ CORRECT: Section gap is 1+ steps above internal padding
<Card className="p-phi-lg mb-phi-2xl">
  {/* mb-phi-2xl (4.236rem) > p-phi-lg (1.618rem) — clear hierarchy */}
```

**Why:** Rule 8 (hierarchical spacing) requires that spacing between sections is visually larger than spacing within a component. Using the same token flattens the hierarchy.

---

## AP-5: Applying Optical Correction When First Child Is NOT Text

**Mistake:** Reducing padding-top when the first child of a card is an image, icon, or colored background.

```tsx
// ❌ WRONG: Image at top — optical correction makes it clip the rounded corners
<Card className="pt-phi-sm px-phi-lg pb-phi-lg rounded-phi-lg">
  <img src="/hero.jpg" className="rounded-phi-sm" />
  <p className="text-body mt-phi-sm">Description</p>
</Card>

// ✅ CORRECT: No optical correction when first child is non-text
<Card className="p-phi-lg rounded-phi-lg overflow-hidden">
  <img src="/hero.jpg" className="-mx-phi-lg -mt-phi-lg rounded-t-phi-lg" />
  <p className="text-body mt-phi-md">Description</p>
</Card>
```

**Why:** Optical correction compensates for line-height whitespace above the first line of text. Images and icons don't have this whitespace, so reducing top padding just creates unbalanced containers. Only apply Rule 7 when the first child is a text element.

---

## AP-6: Mixing φ Tokens with Standard Tailwind Arbitrarily

**Mistake:** Using `p-4 gap-phi-md m-6 rounded-phi-lg` — mixing two spacing systems in the same component.

```tsx
// ❌ WRONG: Mixed systems — impossible to reason about proportions
<div className="p-4 gap-phi-md rounded-lg mb-6">

// ✅ CORRECT: Either all φ or all standard within one component
<div className="p-phi-md gap-phi-sm rounded-phi-sm mb-phi-lg">
```

**Why:** The φ scale is exponential (×1.618 per step) while Tailwind's default is linear (×4px per step). Mixing them breaks proportional relationships. **Within a single component, use one system consistently.** If the project has both φ-enabled and standard components, the boundary should be at the component level, not inside it.

**Exception:** Fixed values imposed by external constraints (e.g., `max-w-screen-xl`, `h-screen`, `w-full`) are fine to mix since they are layout constraints, not proportional spacing.

---

## AP-7: Responsive Step-Down by 2+ Steps at Once

**Mistake:** Jumping from phi-2xl on desktop to phi-sm on mobile (a 3-step drop).

```tsx
// ❌ WRONG: 3-step jump from desktop to mobile
<section className="py-phi-sm lg:py-phi-2xl">
  {/* phi-2xl (4.236rem) → phi-sm (0.618rem) = 3 steps — jarring */}

// ✅ CORRECT: 1 step per breakpoint
<section className="py-phi-lg md:py-phi-xl lg:py-phi-2xl">
  {/* phi-lg → phi-xl → phi-2xl = 1 step each */}
```

**Why:** See `responsive.md` Rule R1. Drastic jumps create layout discontinuities at breakpoints. Step down exactly 1 φ step per breakpoint transition.

---

## AP-8: Using φ Line Height on Single-Line UI Elements

**Mistake:** Applying `leading-phi` (1.618) to buttons, badges, tags, or other single-line elements.

```tsx
// ❌ WRONG: Button with φ line-height — excessive vertical space
<button className="text-body leading-phi px-phi-md py-phi-sm">
  Submit
</button>

// ✅ CORRECT: UI elements use halfstep or quarter line height
<button className="text-body leading-phi-half px-phi-md py-phi-sm">
  Submit
</button>
```

**Why:** `leading-phi` (1.618) is designed for multi-line body text where generous interline spacing aids readability. Single-line UI elements don't benefit from this — it just adds unnecessary height. Use `leading-phi-half` (1.272) for buttons, badges, inputs, and navigation items.

---

## AP-9: Ignoring Minimum Touch Target Size

**Mistake:** Creating a small-sized button or link with phi-2xs padding that results in a touch target below 44×44px.

```tsx
// ❌ WRONG: phi-2xs padding + label font = ~28px height — too small for touch
<button className="px-phi-sm py-phi-2xs text-label leading-phi-tight">
  Delete
</button>

// ✅ CORRECT: Ensure minimum touch target even with small visual size
<button className="px-phi-sm py-phi-2xs text-label leading-phi-tight min-h-[44px] min-w-[44px]">
  Delete
</button>
```

**Why:** See `accessibility.md`. WCAG 2.5.5 and Apple HIG require minimum 44×44px touch targets. φ spacing can produce elements smaller than this. Always verify with the accessibility checklist.

---

## AP-10: Nesting More Than 2 Levels of φ Containers

**Mistake:** Card > inner panel > inner-inner box, each applying nested radius calculation (Rule 4), resulting in near-zero or negative radius.

```tsx
// ❌ WRONG: 3 levels of nesting — inner-inner radius becomes meaningless
<Card className="p-phi-md rounded-phi-lg">          {/* outer: r=1.618 */}
  <div className="p-phi-sm rounded-phi-sm">          {/* mid: r=1.618-1.000=0.618 */}
    <div className="p-phi-2xs rounded-phi-3xs">      {/* inner: r=0.618-0.618=0 😬 */}
      <p>Deeply nested content</p>
    </div>
  </div>
</Card>

// ✅ CORRECT: Flatten the nesting or remove radius from inner levels
<Card className="p-phi-md rounded-phi-lg">
  <div className="p-phi-sm rounded-phi-sm">
    <div className="p-phi-2xs">
      {/* No border-radius at the innermost level — clean and simple */}
      <p>Deeply nested content</p>
    </div>
  </div>
</Card>
```

**Why:** The nested radius formula (inner = outer - padding) only works well for 1-2 levels. Beyond that, the radius approaches zero or becomes visually insignificant. At the 3rd level, drop the radius entirely.

---

## Summary: When NOT to Use φ

| Context | Use instead |
|---------|-------------|
| Table/grid cells (data-dense) | phi-3xs, phi-2xs only |
| System overlay radius (modals) | phi-md or phi-sm max |
| Fixed-height navbars | Let padding define height |
| Inline + block spacing in same component | Keep hierarchy separate |
| First child is image/icon | No optical correction |
| Single-line UI elements | leading-phi-half, not leading-phi |
| Touch targets < 44px | Add min-h/min-w constraint |
| 3+ levels of nesting | Drop radius at innermost level |
