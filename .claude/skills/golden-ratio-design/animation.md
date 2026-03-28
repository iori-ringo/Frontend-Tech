# Animation & Transitions with the φ Scale

Apply the same golden ratio principle to motion: all durations, delays, and easing curves derive from φ, creating temporal harmony that matches the spatial harmony.

---

## Duration Scale: φ^n × 100ms

| Token           | Value  | Formula     | Use case |
|-----------------|--------|-------------|----------|
| duration-phi-xs | 62ms   | φ⁻² × 100  | Opacity micro-fades, color shifts |
| duration-phi-sm | 100ms  | φ⁰ × 100   | Instant feedback (button press, toggle) |
| duration-phi-md | 162ms  | φ¹ × 100   | Micro-interactions (hover, focus ring) |
| duration-phi-lg | 262ms  | φ² × 100   | Standard transitions (dropdown, accordion) |
| duration-phi-xl | 424ms  | φ³ × 100   | Emphasis animations (modal enter, slide-in) |
| duration-phi-2xl| 685ms  | φ⁴ × 100   | Page transitions, staggered reveals |

**Selection rule:** Match the duration to the visual distance and importance:
- Small change (color, opacity): phi-xs or phi-sm
- Medium change (position shift < 100px): phi-md or phi-lg
- Large change (full-screen slide, modal): phi-xl or phi-2xl

---

## Easing Curves

Three φ-derived cubic-bezier curves:

### ease-phi-out (default for enter animations)

```css
cubic-bezier(0.236, 0.618, 0.382, 1)
```

Fast start, gentle deceleration. The control points use φ⁻³ (0.236), φ⁻¹ (0.618), and φ⁻² (0.382). Use for elements appearing or expanding.

### ease-phi-in (for exit animations)

```css
cubic-bezier(0.618, 0, 0.764, 0.382)
```

Gentle start, fast exit. Use for elements disappearing or collapsing.

### ease-phi-in-out (for state changes)

```css
cubic-bezier(0.618, 0, 0.382, 1)
```

Symmetric ease using φ⁻¹ (0.618) and φ⁻² (0.382). Use for toggles, position swaps, and reversible transitions.

---

## Implementation Patterns

### Tailwind v4 (using golden-ratio-v4.css tokens)

```tsx
// Hover effect on a card
<div className="motion-safe:transition-shadow motion-safe:duration-[--duration-phi-md] motion-safe:ease-[--ease-phi-out] hover:shadow-lg">
  <Card>...</Card>
</div>

// Dropdown / accordion open
<div className="motion-safe:transition-[max-height,opacity] motion-safe:duration-[--duration-phi-lg] motion-safe:ease-[--ease-phi-out]">
  {/* Content */}
</div>

// Modal enter
<DialogContent className="motion-safe:animate-in motion-safe:fade-in-0 motion-safe:zoom-in-95 motion-safe:duration-[--duration-phi-xl] motion-safe:ease-[--ease-phi-out]">
  {/* ... */}
</DialogContent>
```

### Tailwind v3 (tailwind.config.ts extension)

Add to the preset or your project config:

```typescript
// Inside theme.extend
transitionDuration: {
  "phi-xs":  "62ms",
  "phi-sm":  "100ms",
  "phi-md":  "162ms",
  "phi-lg":  "262ms",
  "phi-xl":  "424ms",
  "phi-2xl": "685ms",
},
transitionTimingFunction: {
  "phi-out":    "cubic-bezier(0.236, 0.618, 0.382, 1)",
  "phi-in":     "cubic-bezier(0.618, 0, 0.764, 0.382)",
  "phi-in-out": "cubic-bezier(0.618, 0, 0.382, 1)",
},
```

Usage:

```tsx
<div className="transition-shadow duration-phi-md ease-phi-out hover:shadow-lg">
  <Card>...</Card>
</div>
```

### CSS Keyframes (for complex animations)

```css
/* Slide up + fade in */
@keyframes phi-enter-up {
  from {
    opacity: 0;
    transform: translateY(var(--spacing-phi-md));  /* 1rem = 16px */
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Usage */
.animate-phi-enter-up {
  animation: phi-enter-up var(--duration-phi-lg) var(--ease-phi-out) forwards;
}
```

---

## Stagger Pattern

When animating a list of items (cards, list rows, search results), stagger each item's delay by one φ duration step below the animation duration.

```
Animation duration: phi-lg (262ms)
Stagger delay:      phi-md (162ms) per item — one step below

Item 0: delay 0ms
Item 1: delay 162ms
Item 2: delay 324ms
Item 3: delay 486ms
...
```

**Maximum stagger:** Cap the total stagger at duration-phi-2xl (685ms) regardless of item count. Beyond this, later items feel "forgotten."

```tsx
// React implementation
{items.map((item, i) => (
  <div
    key={item.id}
    className="motion-safe:animate-phi-enter-up"
    style={{
      animationDelay: `${Math.min(i * 162, 685)}ms`,
    }}
  >
    <Card {...item} />
  </div>
))}
```

---

## Scroll-Triggered Animations

For elements that animate as they scroll into view, use IntersectionObserver with φ thresholds:

```tsx
// Trigger animation when element is 38.2% visible (1/φ ≈ 0.618, inverted: 1 - 0.618 = 0.382)
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-phi-enter-up");
      }
    });
  },
  { threshold: 0.382 }  // φ⁻² ≈ 38.2% of element visible
);
```

---

## Duration-to-Distance Mapping

Match the animation duration to how far the element moves:

| Distance moved | Recommended duration | Why |
|----------------|---------------------|-----|
| 0px (opacity only) | phi-xs (62ms) or phi-sm (100ms) | No spatial movement — instant feels right |
| < phi-md (16px) | phi-md (162ms) | Small shifts (hover nudge, focus ring) |
| phi-md to phi-xl (16–42px) | phi-lg (262ms) | Standard interactive motion |
| phi-xl to phi-2xl (42–68px) | phi-xl (424ms) | Drawer/panel slides |
| > phi-2xl (68px+) | phi-2xl (685ms) | Full-screen transitions |

The distance thresholds themselves are on the φ spacing scale, creating a self-consistent system.

---

## Accessibility: prefers-reduced-motion

**CRITICAL:** All animations MUST respect the user's motion preference. See `accessibility.md` G-7.

```tsx
// Every animation class should be prefixed with motion-safe:
<div className="motion-safe:transition-all motion-safe:duration-phi-lg motion-safe:ease-phi-out">

// Or in CSS:
@media (prefers-reduced-motion: no-preference) {
  .animate-phi-enter-up {
    animation: phi-enter-up var(--duration-phi-lg) var(--ease-phi-out) forwards;
  }
}

@media (prefers-reduced-motion: reduce) {
  .animate-phi-enter-up {
    animation: none;
    opacity: 1;  /* Show immediately without motion */
  }
}
```

**No exceptions.** Even if a client requests "always animate," the user's system preference takes precedence.

---

## Decision Flow: Choosing Duration and Easing

```
1. Is the element entering the view?
   → Yes: Use ease-phi-out (decelerate into place)
   → No (exiting): Use ease-phi-in (accelerate away)
   → No (state change): Use ease-phi-in-out

2. How far does the element move?
   → See Duration-to-Distance table above

3. Is this part of a list/group?
   → Yes: Add stagger delay (one duration step below, capped at 685ms)
   → No: No delay

4. Is motion-safe: prefix applied?
   → No: ADD IT NOW
   → Yes: Proceed
```
