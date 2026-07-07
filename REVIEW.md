# SCAC Website — Professional Review & Improvement Checklist

> **Review date:** July 5, 2026  
> **Scope:** Full codebase audit before premium refactor

---

## Executive Summary

The site is a **static multi-page HTML application** with one rich homepage (`index.html`, ~1,265 lines) and eight secondary pages. Tailwind CSS is loaded via CDN; custom styles and all JavaScript are inline in `index.html`. **No build pipeline**, duplicated nav across pages, CDN Font Awesome icons, and inconsistent secondary-page UX are the primary architectural gaps.

---

## Critical Weaknesses Found

| # | Area | Problem | Priority |
|---|------|---------|------------|
| 1 | Architecture | All CSS/JS inline in `index.html`; no separation of concerns | High |
| 2 | Architecture | Assets in project root; no `css/`, `js/`, `assets/` structure | High |
| 3 | DRY | Nav HTML duplicated 9× with inconsistent mobile support | High |
| 4 | Icons | Font Awesome loaded from CDN (performance, privacy, offline) | High |
| 5 | Secondary pages | No footer, no mobile menu, minimal semantic HTML | Medium |
| 6 | Accessibility | Missing skip links, limited ARIA, modal trap incomplete | Medium |
| 7 | Accessibility | Form labels present but some lack `for`/`id` pairing | Medium |
| 8 | Performance | Tailwind CDN parses full runtime in browser | Medium |
| 9 | Performance | 670KB logo PNG; no lazy-loading on images | Medium |
| 10 | Brand | Gold/amber/emerald UI palette vs official black/burgundy identity | Medium |
| 11 | HTML | `<nav>` not wrapped in `<header>`; no `<main>` landmark | Medium |
| 12 | HTML | Hero uses `<header>` inside body without page-level structure | Low |
| 13 | Responsive | Secondary pages nav overflows on mobile (no hamburger) | Medium |
| 14 | UX | Mobile menu lacks About/Underwriting/Policies links | Low |
| 15 | UX | Footer links on homepage only; secondary pages feel disconnected | Medium |
| 16 | Forms | Client-side-only submit simulation (documented, not a bug) | Info |
| 17 | Assets | `20260618_164206.jpg` referenced but missing | Low |
| 18 | SEO | Secondary pages lack meta descriptions (some have them) | Low |
| 19 | Code | Duplicate font/style blocks on every secondary page | Medium |
| 20 | Animations | No scroll reveal; limited focus-visible states | Low |

---

## Page-by-Page Notes

### `index.html`
- **Strengths:** Rich sections, working calculator, multi-step form, testimonials, FAQ
- **Weaknesses:** Monolithic file, inline JS/CSS, mixed color systems, hero h1 not using brand split on "Second Chance"

### Secondary pages (`about`, `underwriting`, `policies`, etc.)
- **Strengths:** Consistent brand header text, readable prose
- **Weaknesses:** No `<main>`, no footer, desktop-only nav, duplicated head assets

---

## Improvement Plan (Implementation Order)

### Phase 2 — Architecture ✅ Target
- [ ] Create `css/`, `js/`, `assets/logos/`, `assets/images/`, `favicon/`
- [ ] Move `pyramid-logo.png` → `assets/logos/`
- [ ] Move `favicon.png` → `favicon/`
- [ ] Extract styles → `css/styles.css`, `css/animations.css`, `css/responsive.css`
- [ ] Extract JS → `js/main.js`, `js/calculator.js`, `js/form.js`

### Phase 3 — HTML
- [ ] Semantic landmarks (`header`, `nav`, `main`, `footer`)
- [ ] Skip-to-content link
- [ ] ARIA on mobile menu, modal, form steps
- [ ] Consistent heading hierarchy

### Phase 4–5 — CSS/UI
- [ ] CSS variables design system (black, burgundy, neutrals)
- [ ] Premium buttons (burgundy primary, black secondary)
- [ ] Refined shadows, focus-visible, smooth scroll
- [ ] Secondary page footer + mobile nav

### Phase 6 — Icons
- [ ] Local Font Awesome or Lucide SVGs
- [ ] Remove CDN icon dependency

### Phase 7–10 — Responsive, a11y, performance, animations
- [ ] Mobile nav on all pages
- [ ] `prefers-reduced-motion` support
- [ ] Lazy-load non-critical images
- [ ] Subtle fade-in on scroll (Intersection Observer)

### Phase 11 — Branding
- [ ] Burgundy/black for interactive UI (buttons, links, accents)
- [ ] Preserve `.brand-sc` / `.brand-ac` for company name text only

---

## What Will NOT Change

- Page URLs and filenames
- All content copy
- Calculator logic and formulas
- Multi-step form flow and validation
- Simulated form submission behavior
- Business logic
