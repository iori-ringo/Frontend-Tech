/**
 * Golden Ratio Design System — Tailwind Preset
 *
 * Usage (Tailwind v3):
 *   // tailwind.config.ts
 *   import goldenRatioPreset from "./.claude/skills/golden-ratio-design/tailwind-preset";
 *   export default {
 *     presets: [goldenRatioPreset],
 *     // ...your config
 *   } satisfies Config;
 *
 * Usage (Tailwind v4):
 *   Import golden-ratio-v4.css instead.
 *   Tailwind v4 does not support JS presets.
 *
 * This preset EXTENDS the default theme. All standard Tailwind
 * utilities (p-4, text-lg, etc.) remain available alongside φ tokens.
 */

import type { Config } from "tailwindcss";

const PHI = 1.618;

/** Compute φ^n and return a rem string with 3 decimal places */
const phiScale = (n: number): string => `${(PHI ** n).toFixed(3)}rem`;

const goldenRatioPreset: Config = {
  content: [], // preset does not define content — consuming project must set this
  theme: {
    extend: {
      // ─── Spacing (padding, margin, gap, width, height) ───
      spacing: {
        "phi-3xs": phiScale(-3), // 0.236rem  ≈  3.78px
        "phi-2xs": phiScale(-2), // 0.382rem  ≈  6.11px
        "phi-sm":  phiScale(-1), // 0.618rem  ≈  9.89px
        "phi-md":  phiScale(0),  // 1.000rem  = 16.00px
        "phi-lg":  phiScale(1),  // 1.618rem  ≈ 25.89px
        "phi-xl":  phiScale(2),  // 2.618rem  ≈ 41.89px
        "phi-2xl": phiScale(3),  // 4.236rem  ≈ 67.77px
        "phi-3xl": phiScale(4),  // 6.854rem  ≈109.66px
        "phi-4xl": phiScale(5),  // 11.089rem ≈177.42px
      },

      // ─── Font Size + Default Line Height ───
      fontSize: {
        display1:   [phiScale(3),  { lineHeight: "1.128" }], // 4.236rem — quarterstep
        display2:   [phiScale(2),  { lineHeight: "1.272" }], // 2.618rem — halfstep
        title1:     ["2.058rem",   { lineHeight: "1.272" }], // φ × √φ
        title2:     [phiScale(1),  { lineHeight: "1.272" }], // 1.618rem
        title3:     ["1.272rem",   { lineHeight: "1.272" }], // √φ
        heading:    ["1.128rem",   { lineHeight: "1.272" }], // ⁴√φ
        body:       ["1rem",       { lineHeight: "1.618" }], // φ⁰ — only size with φ leading
        subheading: ["0.887rem",   { lineHeight: "1.272" }], // 1 / ⁴√φ
        callout:    ["0.942rem",   { lineHeight: "1.272" }], // 1 / ⁸√φ
        label:      ["0.835rem",   { lineHeight: "1.272" }], // 1 / (⁴√φ × ⁸√φ)
        caption:    ["0.786rem",   { lineHeight: "1.272" }], // 1 / √φ
      },

      // ─── Line Height (standalone utilities) ───
      lineHeight: {
        phi:           "1.618",
        "phi-half":    "1.272",
        "phi-quarter": "1.128",
        "phi-tight":   "1.062",
      },

      // ─── Border Radius ───
      borderRadius: {
        "phi-3xs": phiScale(-3),
        "phi-2xs": phiScale(-2),
        "phi-sm":  phiScale(-1),
        "phi-md":  phiScale(0),
        "phi-lg":  phiScale(1),
        "phi-xl":  phiScale(2),
      },

      // ─── Transition Duration ───
      transitionDuration: {
        "phi-xs":  "62ms",    // φ⁻² × 100
        "phi-sm":  "100ms",   // φ⁰  × 100
        "phi-md":  "162ms",   // φ¹  × 100
        "phi-lg":  "262ms",   // φ²  × 100
        "phi-xl":  "424ms",   // φ³  × 100
        "phi-2xl": "685ms",   // φ⁴  × 100
      },

      // ─── Transition Timing Function ───
      transitionTimingFunction: {
        "phi-out":    "cubic-bezier(0.236, 0.618, 0.382, 1)",
        "phi-in":     "cubic-bezier(0.618, 0, 0.764, 0.382)",
        "phi-in-out": "cubic-bezier(0.618, 0, 0.382, 1)",
      },

      // ─── Max Width (useful for readable line lengths) ───
      maxWidth: {
        "phi-prose": "38.2em", // ≈ 610px at 16px base — close to 65 chars, the ideal measure
      },
    },
  },
};

export default goldenRatioPreset;
