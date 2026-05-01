---
version: "alpha"
name: "HELLOIAM.AM"
description: "Cinematic Armenian identity system for teaser films, social cards, and web promo assets."
colors:
  background: "#FFF7E8"
  ink: "#1F140A"
  primary: "#D61E23"
  accent-cool: "#4A7BFF"
  accent-warm: "#FFC53A"
  surface: "#FFFFFF"
  border-soft: "#D61E2333"
typography:
  display:
    fontFamily: "Instrument Sans"
    fontSize: 86px
    fontWeight: 700
    lineHeight: 0.95
  headline:
    fontFamily: "Instrument Sans"
    fontSize: 48px
    fontWeight: 700
    lineHeight: 0.95
  editorial:
    fontFamily: "Instrument Serif"
    fontSize: 60px
    fontWeight: 400
    lineHeight: 0.95
  body:
    fontFamily: "Instrument Serif"
    fontSize: 24px
    fontWeight: 400
    lineHeight: 1.25
  label:
    fontFamily: "Instrument Serif"
    fontSize: 22px
    fontWeight: 600
rounded:
  sm: 8px
  md: 16px
  lg: 24px
spacing:
  xs: 8px
  sm: 16px
  md: 24px
  lg: 36px
  xl: 60px
components:
  page-canvas:
    backgroundColor: "{colors.background}"
    padding: "{spacing.xl}"
  section-card:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.md}"
    padding: "{spacing.md}"
  title-display:
    textColor: "{colors.primary}"
    typography: "{typography.display}"
  body-copy:
    textColor: "{colors.ink}"
    typography: "{typography.body}"
  divider-line:
    backgroundColor: "{colors.border-soft}"
    height: 2px
  accent-chip-cool:
    backgroundColor: "{colors.accent-cool}"
    textColor: "{colors.surface}"
    rounded: "{rounded.sm}"
    padding: 14px
  accent-chip-warm:
    backgroundColor: "{colors.accent-warm}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
    padding: 14px
---

## Overview
HELLOIAM.AM is not generic tourism branding. It is an identity-first cinematic system: warm, editorial, human, and confident. The design language should feel premium but not sterile, emotional but not chaotic.

## Colors
- **Background (#FFF7E8):** Warm canvas for high readability and print-like softness.
- **Ink (#1F140A):** Core body text and editorial detail.
- **Primary (#D61E23):** Brand signature for key headlines and anchors.
- **Accent Cool (#4A7BFF):** Secondary contrast for modern digital energy.
- **Accent Warm (#FFC53A):** Secondary contrast for hospitality and light.
- **Surface (#FFFFFF):** Elevated card planes.
- **Border Soft (#D61E2333):** Low-contrast separators.

Use one primary accent pair at a time. Avoid overusing all accent colors in equal visual weight.

## Typography
- **Instrument Sans** carries headlines, navigation voice, and direct CTA language.
- **Instrument Serif** carries emotional/editorial statements and body narrative.
- Keep display and editorial text compact with short line lengths for cinematic pacing.

## Layout
- Base page spacing uses a 60 / 36 / 24 / 16 / 8 scale.
- Prefer vertical rhythm and card modules with subtle dividers.
- Keep compositions breathable: avoid dense text walls.

## Elevation & Depth
- Depth should come from composition, contrast, and photography treatment, not heavy shadows.
- Surfaces are mostly flat, matte, and calm.

## Shapes
- Rounded values remain restrained (8/16/24).
- Use sharper containers for editorial rigor, softer corners for sticker-like social accents.

## Components
- `page-canvas`: outer frame and safe area.
- `section-card`: modular information blocks.
- `title-display`: strong primary headline style.
- `body-copy`: descriptive supporting text.
- `divider-line`: pacing separators.
- `accent-chip-cool` and `accent-chip-warm`: controlled color emphasis.

## Do's and Don'ts
- **Do:** keep tone warm, cinematic, and human.
- **Do:** maintain typography hierarchy and high contrast readability.
- **Do:** use one dominant emotional message per frame.
- **Don't:** mix all accents equally in one focal area.
- **Don't:** default to generic travel cliches.
- **Don't:** overload scenes with competing calls to action.
