/**
 * φ Color Generator — oklch × Golden Ratio
 *
 * TEMPLATE: Copy to your project's src/styles/ directory.
 *
 * Usage:
 *   npx tsx src/styles/phi-color-generator.ts --hue 260 --chroma 0.15
 *   npx tsx src/styles/phi-color-generator.ts --hue 260 --chroma 0.15 --format css
 *   npx tsx src/styles/phi-color-generator.ts --hue 260 --chroma 0.15 --format tailwind-v4
 *
 * Outputs CSS variables for globals.css with full shadcn/ui compatibility.
 */

const PHI = 1.618033988749895;

// ─── Configuration ───

interface PhiColorConfig {
  /** Brand hue angle (0–360) */
  hue: number;
  /** Brand chroma intensity (0.05–0.25, default 0.15) */
  chroma: number;
  /** Base lightness for accent roles (default 0.45) */
  accentL?: number;
  /** Base lightness for neutral roles (default 0.55) */
  neutralL?: number;
  /** Hue for destructive/danger (default 25) */
  destructiveHue?: number;
}

interface TonalStep {
  L: number;
  C: number;
  H: number;
}

type TonalPalette = Record<string, TonalStep>;

// ─── Core Algorithm ───

function phiTonalPalette(baseL: number, baseC: number, baseH: number): TonalPalette {
  const steps: TonalPalette = {};

  // Lighter steps: asymptotic compression toward white
  for (let n = 1; n <= 5; n++) {
    const L = baseL + (1 - baseL) * (1 - 1 / PHI ** n);
    const C = baseC / PHI ** (n * 0.5);
    steps[`+${n}`] = { L: round4(L), C: round4(C), H: baseH };
  }

  // Base
  steps["0"] = { L: round4(baseL), C: round4(baseC), H: baseH };

  // Darker steps: φ-ratio division
  for (let n = 1; n <= 5; n++) {
    const L = baseL / PHI ** n;
    const C = baseC / PHI ** (n * 0.5);
    steps[`-${n}`] = { L: round4(L), C: round4(C), H: baseH };
  }

  return steps;
}

function round4(n: number): number {
  return Math.round(n * 10000) / 10000;
}

function fmt(L: number, C: number, H: number): string {
  return `oklch(${L.toFixed(4)} ${C.toFixed(4)} ${H})`;
}

// ─── Contrast Verification ───

function approxContrast(l1: number, l2: number): number {
  // oklch L → approximate relative luminance via cubic mapping
  let lum1 = l1 ** 3;
  let lum2 = l2 ** 3;
  if (lum1 < lum2) [lum1, lum2] = [lum2, lum1];
  return (lum1 + 0.05) / (lum2 + 0.05);
}

interface ContrastResult {
  pair: string;
  ratio: number;
  pass: "AAA" | "AA" | "AA-large" | "FAIL";
}

function auditContrast(
  vars: Record<string, string>,
  pairs: [string, string, string][]
): ContrastResult[] {
  return pairs.map(([label, fgVar, bgVar]) => {
    const fgL = parseFloat(vars[fgVar].split("(")[1].split(" ")[0]);
    const bgL = parseFloat(vars[bgVar].split("(")[1].split(" ")[0]);
    const ratio = approxContrast(fgL, bgL);
    const pass =
      ratio >= 7.0 ? "AAA" : ratio >= 4.5 ? "AA" : ratio >= 3.0 ? "AA-large" : "FAIL";
    return { pair: label, ratio: Math.round(ratio * 10) / 10, pass };
  });
}

// ─── Theme Generation ───

function generateTheme(config: PhiColorConfig) {
  const {
    hue,
    chroma,
    accentL = 0.45,
    neutralL = 0.55,
    destructiveHue = 25,
  } = config;

  const primary = phiTonalPalette(accentL, chroma, hue);
  const secondary = phiTonalPalette(neutralL, chroma / PHI, hue);
  const neutral = phiTonalPalette(neutralL, chroma / PHI ** 3, hue);
  const destructive = phiTonalPalette(accentL, chroma, destructiveHue);

  const light: Record<string, string> = {
    background: fmt(0.995, neutral["+5"].C, hue),
    foreground: fmt(neutral["-3"].L, neutral["-3"].C, hue),
    card: fmt(0.99, neutral["+5"].C, hue),
    "card-foreground": fmt(neutral["-3"].L, neutral["-3"].C, hue),
    popover: fmt(0.99, neutral["+5"].C, hue),
    "popover-foreground": fmt(neutral["-3"].L, neutral["-3"].C, hue),
    primary: fmt(primary["0"].L, primary["0"].C, hue),
    "primary-foreground": fmt(primary["+5"].L, primary["+5"].C, hue),
    secondary: fmt(secondary["+3"].L, secondary["+3"].C, hue),
    "secondary-foreground": fmt(secondary["-1"].L, secondary["-1"].C, hue),
    muted: fmt(neutral["+3"].L, neutral["+3"].C, hue),
    "muted-foreground": fmt(neutral["-1"].L, neutral["-1"].C, hue),
    accent: fmt(secondary["+3"].L, secondary["+3"].C, hue),
    "accent-foreground": fmt(secondary["-1"].L, secondary["-1"].C, hue),
    destructive: fmt(destructive["0"].L, destructive["0"].C, destructiveHue),
    "destructive-foreground": fmt(destructive["+5"].L, destructive["+5"].C, destructiveHue),
    border: fmt(neutral["+2"].L, neutral["+2"].C, hue),
    input: fmt(neutral["+2"].L, neutral["+2"].C, hue),
    ring: fmt(primary["0"].L, primary["0"].C, hue),
    "chart-1": fmt(primary["0"].L, primary["0"].C, hue),
    "chart-2": fmt(secondary["0"].L, secondary["0"].C, hue),
    "chart-3": fmt(primary["-1"].L, primary["-1"].C, hue),
    "chart-4": fmt(secondary["+1"].L, secondary["+1"].C, hue),
    "chart-5": fmt(destructive["0"].L, destructive["0"].C, destructiveHue),
    "sidebar-background": fmt(neutral["+4"].L, neutral["+4"].C, hue),
    "sidebar-foreground": fmt(neutral["-2"].L, neutral["-2"].C, hue),
    "sidebar-primary": fmt(primary["0"].L, primary["0"].C, hue),
    "sidebar-primary-foreground": fmt(primary["+5"].L, primary["+5"].C, hue),
    "sidebar-accent": fmt(secondary["+3"].L, secondary["+3"].C, hue),
    "sidebar-accent-foreground": fmt(secondary["-1"].L, secondary["-1"].C, hue),
    "sidebar-border": fmt(neutral["+2"].L, neutral["+2"].C, hue),
    "sidebar-ring": fmt(primary["0"].L, primary["0"].C, hue),
  };

  const dark: Record<string, string> = {
    background: fmt(neutral["-4"].L, neutral["-4"].C, hue),
    foreground: fmt(neutral["+3"].L, neutral["+3"].C, hue),
    card: fmt(neutral["-3"].L, neutral["-3"].C, hue),
    "card-foreground": fmt(neutral["+3"].L, neutral["+3"].C, hue),
    popover: fmt(neutral["-3"].L, neutral["-3"].C, hue),
    "popover-foreground": fmt(neutral["+3"].L, neutral["+3"].C, hue),
    primary: fmt(primary["+2"].L, primary["+2"].C, hue),
    "primary-foreground": fmt(primary["-2"].L, primary["-2"].C, hue),
    secondary: fmt(secondary["-2"].L, secondary["-2"].C, hue),
    "secondary-foreground": fmt(secondary["+3"].L, secondary["+3"].C, hue),
    muted: fmt(neutral["-2"].L, neutral["-2"].C, hue),
    "muted-foreground": fmt(neutral["+1"].L, neutral["+1"].C, hue),
    accent: fmt(secondary["-2"].L, secondary["-2"].C, hue),
    "accent-foreground": fmt(secondary["+3"].L, secondary["+3"].C, hue),
    destructive: fmt(destructive["+1"].L, destructive["+1"].C, destructiveHue),
    "destructive-foreground": fmt(destructive["-2"].L, destructive["-2"].C, destructiveHue),
    border: fmt(neutral["-1"].L, neutral["-1"].C, hue),
    input: fmt(neutral["-1"].L, neutral["-1"].C, hue),
    ring: fmt(primary["+2"].L, primary["+2"].C, hue),
    "chart-1": fmt(primary["+2"].L, primary["+2"].C, hue),
    "chart-2": fmt(secondary["+1"].L, secondary["+1"].C, hue),
    "chart-3": fmt(primary["+1"].L, primary["+1"].C, hue),
    "chart-4": fmt(secondary["+2"].L, secondary["+2"].C, hue),
    "chart-5": fmt(destructive["+1"].L, destructive["+1"].C, destructiveHue),
    "sidebar-background": fmt(neutral["-4"].L, neutral["-4"].C, hue),
    "sidebar-foreground": fmt(neutral["+3"].L, neutral["+3"].C, hue),
    "sidebar-primary": fmt(primary["+2"].L, primary["+2"].C, hue),
    "sidebar-primary-foreground": fmt(primary["-2"].L, primary["-2"].C, hue),
    "sidebar-accent": fmt(secondary["-2"].L, secondary["-2"].C, hue),
    "sidebar-accent-foreground": fmt(secondary["+3"].L, secondary["+3"].C, hue),
    "sidebar-border": fmt(neutral["-1"].L, neutral["-1"].C, hue),
    "sidebar-ring": fmt(primary["+2"].L, primary["+2"].C, hue),
  };

  return { light, dark };
}

// ─── Output Formatters ───

function toCss(light: Record<string, string>, dark: Record<string, string>): string {
  const rootVars = Object.entries(light)
    .map(([k, v]) => `  --${k}: ${v};`)
    .join("\n");

  const darkVars = Object.entries(dark)
    .map(([k, v]) => `  --${k}: ${v};`)
    .join("\n");

  return `:root {\n${rootVars}\n}\n\n.dark {\n${darkVars}\n}`;
}

function toTailwindV4(light: Record<string, string>, dark: Record<string, string>): string {
  const css = toCss(light, dark);
  const themeVars = Object.keys(light)
    .map((k) => `  --color-${k}: var(--${k});`)
    .join("\n");

  return `${css}\n\n@theme inline {\n${themeVars}\n}`;
}

// ─── CLI ───

function main() {
  const args = process.argv.slice(2);
  const getArg = (name: string, fallback?: string): string | undefined => {
    const idx = args.indexOf(`--${name}`);
    return idx >= 0 && idx + 1 < args.length ? args[idx + 1] : fallback;
  };

  const hue = parseFloat(getArg("hue") ?? "");
  const chroma = parseFloat(getArg("chroma", "0.15") ?? "0.15");
  const format = getArg("format", "css") ?? "css";

  if (isNaN(hue)) {
    console.error("Usage: npx tsx phi-color-generator.ts --hue <0-360> [--chroma <0.05-0.25>] [--format css|tailwind-v4]");
    process.exit(1);
  }

  const config: PhiColorConfig = { hue, chroma };
  const { light, dark } = generateTheme(config);

  // Contrast audit
  const contrastPairs: [string, string, string][] = [
    ["primary ↔ primary-fg", "primary", "primary-foreground"],
    ["secondary ↔ secondary-fg", "secondary", "secondary-foreground"],
    ["muted ↔ muted-fg", "muted", "muted-foreground"],
    ["foreground ↔ background", "foreground", "background"],
    ["destructive ↔ destructive-fg", "destructive", "destructive-foreground"],
  ];

  console.error("/* ─── Contrast Audit (Light) ─── */");
  for (const r of auditContrast(light, contrastPairs)) {
    console.error(`/*   ${r.pair}: ~${r.ratio}:1 ${r.pass} */`);
  }
  console.error("/* ─── Contrast Audit (Dark) ─── */");
  for (const r of auditContrast(dark, contrastPairs)) {
    console.error(`/*   ${r.pair}: ~${r.ratio}:1 ${r.pass} */`);
  }
  console.error("");

  // Output
  switch (format) {
    case "tailwind-v4":
      console.log(toTailwindV4(light, dark));
      break;
    case "css":
    default:
      console.log(toCss(light, dark));
      break;
  }
}

// ─── Exports (for programmatic use) ───

export {
  type PhiColorConfig,
  type TonalStep,
  type TonalPalette,
  PHI,
  phiTonalPalette,
  generateTheme,
  approxContrast,
  auditContrast,
  toCss,
  toTailwindV4,
};

main();
