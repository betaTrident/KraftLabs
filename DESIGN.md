---
version: alpha
name: Kr4ftLabs
description: A bold, maker-led product workshop built from warm paper, deep charcoal, precise grids, and signal orange.
colors:
  primary: "#ff5a1f"
  workshop-ink: "#171714"
  workshop-ink-soft: "#24231f"
  warm-paper: "#f2eee4"
  warm-paper-bright: "#fffaf0"
  muted-graphite: "#575650"
  beta-rust: "#c93208"
  line-on-light: "rgba(23, 23, 20, 0.2)"
  line-on-dark: "rgba(242, 238, 228, 0.22)"
typography:
  display-xl:
    fontFamily: "Geist, sans-serif"
    fontSize: "7.2rem"
    fontWeight: 820
    lineHeight: 0.82
    letterSpacing: "-0.082em"
  display-lg:
    fontFamily: "Geist, sans-serif"
    fontSize: "7rem"
    fontWeight: 790
    lineHeight: 0.93
    letterSpacing: "-0.072em"
  headline-lg:
    fontFamily: "Geist, sans-serif"
    fontSize: "4.5rem"
    fontWeight: 760
    lineHeight: 0.94
    letterSpacing: "-0.06em"
  title-lg:
    fontFamily: "Geist, sans-serif"
    fontSize: "3.7rem"
    fontWeight: 730
    lineHeight: 0.98
    letterSpacing: "-0.055em"
  body-lg:
    fontFamily: "Geist, sans-serif"
    fontSize: "1.24rem"
    fontWeight: 400
    lineHeight: 1.62
  body-md:
    fontFamily: "Geist, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.7
  action:
    fontFamily: "Geist, sans-serif"
    fontSize: "0.86rem"
    fontWeight: 700
    lineHeight: 1
  label-md:
    fontFamily: "Geist Mono, monospace"
    fontSize: "0.68rem"
    fontWeight: 650
    lineHeight: 1
    letterSpacing: "0.12em"
  label-sm:
    fontFamily: "Geist Mono, monospace"
    fontSize: "0.64rem"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "0.08em"
rounded:
  none: "0px"
  full: "9999px"
spacing:
  base: "0.25rem"
  xs: "0.5rem"
  sm: "0.8rem"
  md: "1rem"
  lg: "1.25rem"
  xl: "2rem"
  2xl: "3rem"
  section-min: "7rem"
  section-max: "12rem"
  gutter-min: "1.25rem"
  gutter-max: "4.5rem"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.workshop-ink}"
    typography: "{typography.action}"
    rounded: "{rounded.none}"
    padding: "0.95rem 1.35rem"
    height: "3.55rem"
  button-primary-hover:
    backgroundColor: "{colors.warm-paper-bright}"
    textColor: "{colors.workshop-ink}"
  button-secondary:
    backgroundColor: transparent
    textColor: "{colors.warm-paper}"
    typography: "{typography.action}"
    rounded: "{rounded.none}"
    padding: "0.95rem 1.35rem"
    height: "3.55rem"
  card-light:
    backgroundColor: "{colors.warm-paper-bright}"
    textColor: "{colors.workshop-ink}"
    rounded: "{rounded.none}"
    padding: "2rem"
  card-dark:
    backgroundColor: "{colors.workshop-ink-soft}"
    textColor: "{colors.warm-paper}"
    rounded: "{rounded.none}"
    padding: "2rem"
  status-chip:
    textColor: "{colors.workshop-ink}"
    typography: "{typography.label-sm}"
    rounded: "{rounded.none}"
  status-chip-beta:
    textColor: "{colors.beta-rust}"
    typography: "{typography.label-sm}"
    rounded: "{rounded.none}"
  status-chip-soon:
    textColor: "{colors.muted-graphite}"
    typography: "{typography.label-sm}"
    rounded: "{rounded.none}"
  divider-light:
    backgroundColor: "{colors.line-on-light}"
    height: "1px"
    width: "100%"
  divider-dark:
    backgroundColor: "{colors.line-on-dark}"
    height: "1px"
    width: "100%"
---

# Design System: Kr4ftLabs

## Overview

**Creative North Star: "The Signal Workshop"**

Kr4ftLabs should feel like an independent maker's workshop with its doors open: purposeful, exact, and visibly alive. The interface combines editorial-scale typography with the structural honesty of a technical catalogue. Warm paper keeps the system approachable; charcoal gives it authority; vivid orange behaves like a live electrical signal.

This is a product ecosystem, not a startup template. Every section should clarify what is being built, what state it is in, or what the maker values. The lightning mark supplies energy through angular cuts, offsets, line work, and tightly controlled motion—not through glows, gradients, or ornamental effects.

**Key Characteristics:**

- Monumental, tightly tracked typography with compact supporting copy.
- Alternating charcoal, warm-paper, and signal-orange chapter surfaces.
- Sharp containers, one-pixel rules, hard offsets, circles, and angular brand geometry.
- Honest product states and task-focused previews instead of invented proof.
- Purposeful motion that reveals structure and always respects reduced-motion preferences.

## Colors

The palette is a warm industrial triad: near-black charcoal, parchment-like off-white, and a high-energy orange used to direct attention.

### Primary

- **Signal Orange:** The brand's live wire. Use it for primary actions, active states, progress, key markers, selection, and occasional full-width chapter bands.
- **Beta Rust:** A darker orange reserved for readable Beta status text on light surfaces.

### Neutral

- **Workshop Ink:** The main dark canvas, headline ink, and high-contrast structural color.
- **Soft Workshop Ink:** A subtly lifted dark surface for active panels and inset modules.
- **Warm Paper:** The default light canvas and light text on charcoal.
- **Bright Warm Paper:** A brighter card surface and the primary-button hover reversal.
- **Muted Graphite:** Supporting copy and unavailable-state text on light surfaces.
- **Light/Dark Rules:** One-pixel separators use translucent ink or paper rather than introducing gray borders.

**The Live Wire Rule.** Orange must carry meaning. It may own a deliberate chapter band, but inside mixed layouts it marks action, status, progress, or the brand's lightning energy.

**The Warm Neutral Rule.** Do not replace the paper tones with pure white or the charcoal with generic blue-black. Their warmth is what keeps the technical language human.

## Typography

**Display Font:** Geist with a sans-serif fallback  
**Body Font:** Geist with a sans-serif fallback  
**Label/Mono Font:** Geist Mono with a monospace fallback

**Character:** The system uses one assertive grotesk family at wide weight extremes, then switches to mono for workshop telemetry. Display type is compressed through tight tracking and short line-height; body copy remains calm and readable.

### Hierarchy

- **Display XL:** Hero-only scale. Use a responsive clamp capped by the display token, very tight leading, and no more than three lines on small screens.
- **Display LG:** Major section statements and closing calls, generally one to three short lines.
- **Headline LG:** Accordion titles and narrative statements that need force without competing with the hero.
- **Title LG:** Card and feature headings. Keep lines short and avoid long sentence-like titles.
- **Body LG:** Hero summary and high-priority explanatory copy, capped near 41rem.
- **Body MD:** General explanation and maker notes, capped around 36rem or roughly 65–72 characters.
- **Action:** Compact, bold sentence case for buttons and navigation actions.
- **Label MD/SM:** Uppercase mono for overlines, status, counters, controls, and interface telemetry.

**The Two-Voice Rule.** Geist speaks for ideas and actions; Geist Mono speaks for state, metadata, and system signals. Do not introduce a third type family without a brand-level decision.

**The Tight-When-Loud Rule.** The larger the headline, the tighter its tracking and leading. Body copy never inherits the compressed display treatment.

## Layout

The system uses a full-width chapter model with bounded content. Primary content stops at approximately 92rem, while the header can extend to 100rem. Horizontal gutters scale from 1.25rem on mobile to 4.5rem on wide screens. Major sections breathe vertically between 7rem and 12rem.

Editorial asymmetry is preferred over repeated equal cards. The product catalogue uses a four-column desktop grid with one-pixel gutters and deliberate spans; it collapses to two columns below 1000px and one column below 700px. Narrative preview rows alternate copy and demonstration rather than repeating identical feature cards.

Desktop compositions may use split grids, offset focal objects, and oversize empty space. Mobile preserves the sequence and contrast changes, turns multi-column modules into a clear vertical story, expands primary actions to full width, and converts horizontal accordions into stacked panels.

**The Chapter Rhythm Rule.** Each major section must change scale, surface, or composition enough to feel like a new chapter while retaining the same tokens and geometry.

**The One-Pixel Grid Rule.** Dense catalogues and repeated panels are separated by a one-pixel ink gap or rule—not by floating-card spacing and shadows.

## Elevation & Depth

Kr4ftLabs is flat by default. Depth comes from surface contrast, borders, overlap, scale, and hard offset shadows. Blurred ambient shadows, glass blur, and neon glow are outside the visual language.

### Shadow Vocabulary

- **Signal Offset:** A 0-blur orange shadow offset by roughly 0.65–1.2rem, reserved for the hero workshop signal and similarly important focal modules.
- **Paper Offset:** A 0-blur warm-paper shadow offset by roughly 0.5–1.3rem, used on the maker's tilted brand object.

**The Hard Shadow Rule.** A shadow must read as a printed offset or physical layer. If it looks atmospheric, soft, or glowing, remove it.

**The Flat-at-Rest Rule.** Ordinary cards, navigation, and controls use no shadow. State changes rely on color, rule weight, translation, or geometry.

## Shapes

The dominant shape is a sharp rectangle. Cards, buttons, previews, and content frames use square corners. Circles are reserved for signals, orbit diagrams, status dots, and compact directional controls. The lightning logo contributes diagonal cuts, rotated diamonds, hard offsets, and occasional clipped geometry.

Pills are rare and small; they may appear as a single inline display accent but must not become the default button, chip, or card silhouette.

**The Edge Discipline Rule.** Keep primary containers and controls square. Do not soften the product into rounded SaaS chrome.

**The Circle Has a Job Rule.** Every circle should indicate status, orbit, navigation, or focus. Circles are not filler decoration.

## Components

### Buttons

Buttons are square, compact, and physical.

- **Shape:** Sharp corners with a minimum 3.55rem touch height and 0.95rem × 1.35rem padding.
- **Primary:** Signal orange on workshop ink; hover reverses to bright warm paper and lifts by about 0.18rem.
- **Secondary:** Transparent with a translucent paper border; hover becomes warm paper with ink text.
- **Light:** Warm paper on ink for dark closing sections; hover shifts to orange.
- **Focus:** A 2px orange outline offset by 4px; focus must never depend on color fill alone.

### Status Chips

Status chips are text-first telemetry, not filled pills. Use uppercase Geist Mono, a small outlined circular marker, and explicit labels: Available, Beta, or Coming soon. Color differentiates state, but the written label remains the source of truth.

### Cards / Containers

Cards are sections of a shared board rather than floating objects.

- **Corner Style:** Square.
- **Background:** Bright warm paper, workshop ink, soft workshop ink, or deliberate signal orange.
- **Border:** One-pixel ink or translucent paper rules; use one-pixel grid gaps for compound boards.
- **Shadow Strategy:** None, except the two documented focal-object offsets.
- **Internal Padding:** Typically 2rem; major editorial cards scale toward 3–3.5rem.

### Navigation

Navigation is quiet so the maker identity and hero lead. Desktop links use compact type with a one-pixel orange underline that grows from right to left on hover or focus. The action link uses a paper bottom rule and arrow translation. Below 1000px, remove the center navigation; below 700px, shorten the action label while preserving its destination.

### Workshop Signal

The signature dark module combines a compact mono toolbar, central brand symbol, concentric rules, terse category labels, and a hard orange offset. Its hover compresses the offset and shifts the panel slightly, suggesting a physical switch without becoming playful.

### Principle Accordion

The desktop accordion expands laterally and the mobile version vertically. The active panel gains soft workshop ink, exposes its body copy, and turns its circular arrow orange. Keep inactive titles visible; never hide the available choices behind unlabeled controls.

### Motion

Use 200–240ms easing for hover and focus feedback, 500–700ms expressive easing for structural changes, and 700–1000ms for staged entrances. Scroll-linked reveals may scrub gently, but content must remain legible without animation. Disable smooth scrolling, reduce animation and transition durations, and reveal hidden text when `prefers-reduced-motion: reduce` is active.

**The Motion Proves Structure Rule.** Movement should show hierarchy, progress, or spatial relation. Do not add idle spectacle that competes with product meaning.

## Do's and Don'ts

### Do:

- **Do** use the supplied Kr4ftLabs wordmark, symbol, and adaptive app icons; keep the written brand name exactly “Kr4ftLabs.”
- **Do** make the first viewport immediately state that this is a maker-led home for useful digital products.
- **Do** alternate bold chapter surfaces while keeping tokens, line work, and typography consistent.
- **Do** show what a tool helps someone accomplish, and pair every real product with an honest availability state.
- **Do** use angular geometry, hard offsets, and directional motion to echo the lightning mark.
- **Do** verify every composition at 1440px and 375px, with keyboard focus and reduced motion included.

### Don't:

- **Don't** invent product names, destinations, metrics, testimonials, user counts, or performance claims.
- **Don't** use decorative gradients, glassmorphism, bloom, excessive glow, or soft floating shadows.
- **Don't** default to repetitive rounded feature cards, pill-heavy controls, or a generic startup hero.
- **Don't** flood mixed layouts with orange; reserve it for meaningful signals or a deliberately committed chapter surface.
- **Don't** treat the logo as a watermark or repeat lightning motifs until they overpower content.
- **Don't** add a third font, stock illustration style, or unrelated icon family without a deliberate extension of the system.
