# Portfolio Design System

A design system for a **personal developer portfolio** — hero, six case studies, about/timeline, book waitlist, community, contact. One source of truth for tokens and components, consumable as plain CSS custom properties plus a small React component library.

> **Working name.** No brand name, logo, or company identity was supplied. Everywhere a mark would go, the system renders the person's name in Archivo 700. Replace `"Portfolio"` / `"Max Tymofeiev"` placeholders with the real wordmark and tell me if a logo file exists — I will not draw one.

## Sources given

| Source | What it gave us |
| --- | --- |
| Written brief (v0.1, in chat) | Foundations, component inventory, case-study content model. **This is the ground truth for the component list.** |
| `https://max-tymofeiev.com/portfolio` | Reviewed for **case-study structure and tone only** — Challenge / Solution / Technical / Results / Tech used / CTA, and the six projects. Explicitly *not* the visual direction. |

No codebase, Figma file, font binaries, logo, icon set or imagery was attached. Everything below is derived from the brief; substitutions are flagged.

## Products / surfaces

One surface: the **portfolio website** (dark by default, light theme available). Sections: hero, work index, case-study detail, about + career timeline, book/waitlist, community, contact footer. See `ui_kits/portfolio/`.

---

## Content fundamentals

**Voice — first person, past tense, receipts first.** The portfolio speaks as *I* to *you*, and it leads with what was built rather than what was felt. "Modernised the SaaS CRM with a PHP backend." "Reduced repetitive work and saved hours on data-related prototyping." Never "we're passionate about crafting delightful experiences."

**Structure is fixed and repeated.** Every case study runs Challenge → Solution → Technical details → Results → Tech used → CTA. Readers learn the shape once and then skim. Solutions and results are bullet lists with a bolded lead-in and a plain-language consequence: `**Cloud migration:** moving infrastructure to AWS (ECS, EC2, RDS)`.

**Casing.**
- Headlines: sentence case, Archivo 600. "Six projects, end to end."
- Mono labels: UPPERCASE with 0.14em tracking. `SELECTED WORK`, `ACTIVE USERS`.
- Nav links and buttons: lowercase mono (`work`, `about`, `book`) — nav is *lowercase*, buttons are *uppercase*. That contrast is deliberate.
- Tech chips: written exactly as the vendor writes them — `VueJS`, `TypeScript`, `AWS ECS`, `jQuery`. Never title-cased into `Vuejs`.

**Numbers are the loudest content.** Reach and impact get a `StatBlock`, not a sentence: `1300 / ACTIVE USERS`, `3,000+ / SUBSCRIBERS`, `400K+ / TOTAL VIEWS`. Pre-format them (commas, `+`, `K`); never round a real figure up.

**Honesty over polish.** The reference tone admits limits — "never studio-quality productions, everything recorded in a single take" — and that stays. Say what was legacy, what was rescued, what is still in progress.

**Length.** Hero statement ≤ 8 words plus an accent clause. Section subtitle one sentence. Challenge one paragraph (≈40–60 words). Bullets ≤ 14 words each.

**Emoji: never.** Not in copy, not in cards, not in the nav. Iconography is Lucide only. Unicode is used sparingly as punctuation: `·` between categories, `—` as the bullet marker and in date ranges, `/` before the active nav item.

**Vibe.** A developer's résumé written by someone who also cares how it's set — technical, unsentimental, quietly confident, with one loud green thing per screen.

---

## Visual foundations

**Palette.** A near-black base that leans green rather than neutral grey (`--ink-900 #0a0d0e`), two accents: **acid green `#c8ff2e`** (primary — CTAs, active nav, stats, the accent clause in the hero) and **cyan `#4fe3ff`** (secondary — platform chips, focus, alternating stats, links). The two never appear at full strength in the same block; green leads, cyan supports. Text is a green-tinted off-white (`#eef2ef`), stepping down through `--text-secondary` and `--text-muted`. Error `#ff5c4d` is the only additional hue. Light theme (`<html data-theme="light">`) swaps to a warm paper `#f2f3ee` and darkens both accents for contrast — same aliases, no component changes.

**Type.** Three families, strictly zoned, all sans or mono — **no serif anywhere**. **Archivo** for anything display or heading: 700 for display and stat figures, 600 for h1–h4, with tracking tightening to -0.035em as size grows. **Public Sans** for body prose at 16px/1.6 on a 68ch measure; 19px at weight 300 for lead paragraphs and pull quotes. **JetBrains Mono** for everything that reads as data: labels, meta, nav, buttons, chips, timeline periods, fine print. If a string is a fact rather than a sentence, it is mono. **There is no italic in the system** — emphasis is weight and colour.

**Spacing & grid.** 8px base; 4px is the only half-step. Sections sit at 96–128px vertical rhythm, blocks at 32px, stacks at 16px. Content maxes at 1440px with a 32px gutter. Work index is a 3-column grid at 24px gap.

**Backgrounds.** Flat colour — no photographic backgrounds, no gradients as decoration, no textures. The only ambient element is the **grid overlay**: 1px lines at `rgba(238,242,239,.055)`, 64–80px cells, masked to fade downward, behind heroes, footers, the community section and empty thumbnails. Scrims exist in exactly two places: the blurred nav (`saturate(160%) blur(14px)` over a 78% background scrim, only after scroll) and a bottom-up fade over imagery.

**Borders & corners.** The system is near-square: `--radius-sm 2px` on buttons, inputs and chips, `--radius-md 4px` on cards, `999px` only for status dots. Structure comes from 1px hairlines (`--border #232a2b`) — between sections, above footers, under the scrolled nav, around every card.

**Elevation.** No soft grey drop shadows. Depth is a hairline plus, at most, a 1px inset highlight (`--shadow-card`). The only real shadows are accent glows: `--glow-green` / `--glow-cyan` (1px ring + 28px bloom) for focus and emphasis, and `--shadow-raised` for genuinely floating surfaces.

**Hover.** Text and links shift toward acid green. Fills dim to 86% opacity. Ghost/secondary surfaces take a 6% white wash (`--state-hover`). Cards lift 3px, swap their border to acid green, drop the thumbnail's `saturate(0.85)`, scale the image 1.02, and nudge the arrow glyph 2px up-and-right. Everything at 160ms `--ease-standard`.

**Press.** 1px downward translate plus a 12% wash — no colour change, no scale-down.

**Focus.** Always visible: 2px background offset + 2px cyan ring (`--focus-ring`). Inputs additionally get a cyan border and a soft cyan bloom.

**Motion.** One entrance animation: fade from 0 with a 24px lift, 700ms `--ease-out` (`cubic-bezier(.16,1,.3,1)`), triggered once at 15% viewport intersection, staggered 70ms across siblings. Micro-interactions are 160ms; transforms 240ms. A single blinking dot marks availability in the hero. No bounces, no parallax, no counters. `prefers-reduced-motion` collapses reveal duration and distance to zero.

**Transparency & blur.** Used only for the nav scrim, the accent washes behind green/cyan chips (14% alpha), and hover/press state washes. Never for card backgrounds.

**Imagery.** None supplied. Placeholders are inset panels with the grid overlay and a mono `IMAGE` label. When real art arrives, the intended treatment is cool-toned and slightly desaturated at rest (`saturate(0.85)`), full saturation on hover — screenshots and product UI, not stock photography.

**Layout rules.** The nav is the only fixed element (sticky, 64px, transparent until scrolled). Everything else scrolls. Section boundaries are hairlines, section headers are numbered `01 / SELECTED WORK` with a rule filling the remaining width.

**Cards.** `--surface-card` fill, 1px hairline, 4px radius, no shadow, 24px padding, a mono index/category row on top, Archivo 600 title, 14px secondary subtitle, and a hairline-separated chip row at the bottom.

---

## Iconography

**Lucide 0.469.0, loaded from the unpkg CDN.** No icon set, icon font or SVG sprite was supplied with the brief, so this is a **flagged substitution** — Lucide's 1.5px stroke, rounded caps and 24px grid match the technical-editorial tone better than a filled set would. Icons render through `Icon.jsx`, which masks the remote SVG and paints it with `currentColor`, so a glyph always inherits its context colour.

- **Sizes:** 16px inline default; 13px in chips and small buttons; 18–22px in specimen rows. Never larger — icons never become illustration.
- **Vocabulary in use:** `arrow-up-right` (external link / card affordance), `arrow-right` (submit), `arrow-left` (back), `arrow-down` (scroll), `mail`, `github`, `check` (success), `download`, `sun-moon` (theme).
- **Platform glyphs** (`PLATFORM_ICONS`): web → `globe`, ios → `smartphone`, android → `smartphone`, desktop → `monitor`, saas → `cloud`, api → `terminal`. **iOS and Android share a glyph** — no vendor marks are used; the chip label carries the distinction.
- **No emoji, ever.** No decorative unicode beyond `·`, `—` and `/`.
- **Never hand-draw an SVG** for this system. Add a Lucide name, or supply a real asset.

To self-host: drop the Lucide SVGs into `assets/icons/` and change the `LUCIDE` constant at the top of `components/core/Icon.jsx`.

---

## Index

**Root**
- `styles.css` — the only file consumers link. `@import` list, nothing else.
- `thumbnail.html` — homepage tile.
- `readme.md` (this file) · `SKILL.md` — portable Agent Skill wrapper.

**`tokens/`** — `fonts.css` (Google Fonts CDN import + family aliases — Archivo / Public Sans / JetBrains Mono), `colors.css` (ramps, semantic aliases, light theme), `typography.css`, `spacing.css`, `effects.css` (radii, borders, shadows, grid overlay, blur), `motion.css` (durations, easings, keyframes), `base.css` (element resets, link colours).

**`guidelines/`** — 20 specimen cards feeding the Design System tab, grouped **Colors** (base ramp, neutrals, accents, semantic, states, light theme), **Type** (display, headings, body, mono, scale, weights), **Spacing** (8px scale, rhythm in use), **Brand** (wordmark, grid overlay, radii, elevation, motion, scroll reveal, iconography).

**`components/`** — 15 components, each with `.jsx`, `.d.ts`, `.prompt.md`, and one `@dsCard` HTML per directory.

| Group | Components |
| --- | --- |
| `core/` | **Button**, **Tag**, **StatBlock**, **Icon** |
| `layout/` | **SectionHeading**, **GridOverlay**, **Reveal** |
| `navigation/` | **Nav**, **Footer** |
| `content/` | **Hero**, **CaseStudyCard**, **CaseStudyDetail**, **Timeline** |
| `forms/` | **Input**, **SignupForm** |

**`ui_kits/portfolio/`** — click-through recreation of the whole site (`index.html`, `content.jsx`, `HomeScreen.jsx`, `CaseStudyScreen.jsx`, `App.jsx`, `README.md`).

**`templates/`** — starting folders consuming projects can copy: `portfolio-home/`, `case-study/`.

### Component inventory vs. the brief

The brief named: Nav, Hero block, Case study card, Case study detail template, Stat block, Timeline, Tag/chip, Book/waitlist signup form, Footer/contact block. All nine are built (`SignupForm` is the waitlist form; `Footer` is the contact block).

**Intentional additions** — five, each required by the nine above:
- **Button** — every CTA, action and form submit in the brief needs one.
- **Input** — `SignupForm` needs a field; nothing else in the brief defines one.
- **Icon** — a single wrapper so the Lucide substitution lives in one place.
- **GridOverlay** — the brief lists "grid overlay system" under Spacing/grid; this makes it a component rather than copied CSS.
- **Reveal** — the brief lists "scroll-triggered reveal" under Motion; same reasoning.

No Toast, Modal, Tabs, Avatar or Accordion: the brief doesn't define them and the site doesn't need them.

---

## Known substitutions & gaps

1. **Fonts** are loaded from the Google Fonts CDN (Archivo, Public Sans, JetBrains Mono) — no binaries were supplied. Send licensed files and I'll self-host them under `assets/fonts/` with real `@font-face` rules.
2. **Icons** are Lucide via CDN — no icon set was supplied.
3. **No logo mark.** Wordmark is set in Archivo 700.
4. **No imagery.** Every thumbnail and case-study hero is a gridded placeholder.
5. **Case-study copy** in the UI kit follows the reference site's six projects, as structure demonstration. Replace in `ui_kits/portfolio/content.jsx`.
