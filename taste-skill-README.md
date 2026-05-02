# Taste Skill

## Overview

Taste Skill is a collection of portable Agent Skills that upgrade AI-built interfaces with stronger layout, typography, motion, and spacing instead of boilerplate-looking UIs. This repo includes both **implementation skills** (that output code) and **image-generation skills** (that output reference images only).

## Installation

```bash
npx skills add https://github.com/Leonxlnx/taste-skill
```

Install a single skill by name:
```bash
npx skills add https://github.com/Leonxlnx/taste-skill --skill "imagegen-frontend-mobile"
```

## Available Skills

### Implementation Skills (Output Code)

| Skill | Description |
| --- | --- |
| **taste-skill** | Default all-rounder for premium frontend output without locking one narrow visual style. |
| **gpt-taste** | Stricter variant for GPT/Codex: higher layout variance, stronger GSAP direction, aggressive anti-slop. |
| **image-to-code-skill** | Image-first pipeline: generate site references, analyze them, then implement the frontend to match. |
| **redesign-skill** | Existing projects: audit the UI first, then fix layout, spacing, hierarchy, styling. |
| **soft-skill** | Polished, calm, expensive UI with softer contrast, whitespace, premium fonts, spring motion. |
| **output-skill** | When the model ships half-finished work: full output, no placeholder comments. |
| **minimalist-skill** | Editorial product UI (Notion/Linear vibes), restrained palette, crisp structure. |
| **brutalist-skill** | ⚠️ `BETA` Hard mechanical language: Swiss type, sharp contrast, experimental layout. |
| **stitch-skill** | Google Stitch-compatible rules, including optional `DESIGN.md` export format. |

### Image Generation Skills (Output Images Only)

| Skill | Description |
| --- | --- |
| **imagegen-frontend-web** | Website comps: hero, landing, multi-section with strong typography, spacing, anti-slop art direction. |
| **imagegen-frontend-mobile** | Mobile screens and flows: iOS/Android/cross-platform, mockups, readable type, coherent sets. |
| **brandkit** | Brand-kit boards: logo directions, palettes, type, identity applications across categories. |

## Which One Should I Use?

- Start with **taste-skill** for the safest general default.
- Use **gpt-taste** when you want the stricter GPT/Codex-oriented rules and motion/layout enforcement.
- Use **image-to-code-skill** for image → analyze → code website workflows.
- Use **redesign-skill** to improve an existing codebase instead of greenfield styling.
- Add **soft-skill**, **minimalist-skill**, or **brutalist-skill** when the visual direction is already chosen.
- Add **output-skill** if the agent keeps truncating output.
- Use **imagegen-frontend-web**, **imagegen-frontend-mobile**, or **brandkit** when the deliverable is **images** (comps, flows, identity boards), then pass results to your coding agent.

## Settings (taste-skill only)

Numbers at the top of the file are 1-10 dials:

- **DESIGN_VARIANCE**: Layout experimentation (lower: centered/clean · higher: asymmetric/modern).
- **MOTION_INTENSITY**: Animation depth (lower: hover · higher: scroll/magnetic).
- **VISUAL_DENSITY**: Information per viewport (lower: spacious · higher: dense dashboards).

## Examples

Created with taste-skill: [See examples in the repository](https://github.com/Leonxlnx/taste-skill)

## Support

- Open a Pull Request or Issue on GitHub
- DM [@lexnlin](https://x.com/lexnlin) or [@blueemi99](https://x.com/blueemi99)
- Email: [hello@tasteskill.dev](mailto:hello@tasteskill.dev)

## License

MIT License · Copyright (c) 2026 Leonxlnx

---

*Source: https://github.com/Leonxlnx/taste-skill*</content>
<parameter name="filePath">d:\portfolio\skills\taste-skill-README.md