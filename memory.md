# SCAC Finance Website — Developer Memory

> **Last updated:** July 5, 2026  
> **Purpose:** Quick-reference guide for developers continuing work on the Second Chance Adjustment Capital (SCAC) website.

---

## Project Structure Overview

```
SCAC Finance project/
├── index.html              # Main landing page (hero, services, calculator, application form, FAQ)
├── about.html              # Company overview
├── underwriting.html       # Underwriting process details
├── policies.html           # Lending policies overview
├── free-credit-repair.html # Free credit repair program for approved clients
├── privacy-policy.html     # Privacy Policy
├── terms-of-service.html   # Terms of Service
├── licensing.html          # Licensing & regulatory information
├── css/
│     styles.css            # Design system, components, brand classes
│     animations.css        # Reveal, modal animations
│     responsive.css        # Mobile nav, breakpoints
├── js/
│     main.js               # Mobile menu, scroll reveal, init
│     calculator.js           # Loan calculator
│     form.js               # Multi-step application form
├── assets/
│     logos/pyramid-logo.png
│     icons/fontawesome/    # Local Font Awesome (no CDN)
│     images/
├── favicon/favicon.png
├── REVIEW.md               # Professional audit checklist
├── 20260618_164206.jpg     # Marketing flyer image (referenced on homepage hero)
├── WEBSITE_OVERVIEW.md     # Detailed site documentation (generated overview)
└── memory.md               # This file — developer quick reference
```

There is **no build step**, **no package.json**, and **no backend**. All pages are standalone static HTML files.

---

## Technologies Used

| Technology | Usage |
|------------|-------|
| **HTML5** | All page markup |
| **Tailwind CSS** (CDN) | Utility-first styling via `https://cdn.tailwindcss.com` |
| **Font Awesome 6.5.1** (CDN) | Icons on homepage and some secondary pages |
| **Google Fonts** | Inter (body), Playfair Display (headings) |
| **Vanilla JavaScript** | Inline in `index.html` only — calculator, multi-step form, mobile menu |

---

## Important Folders

This is a **flat project** — all files live in the project root. There are no subfolders for components, assets, or scripts.

| Asset type | Location |
|------------|----------|
| Logo | `pyramid-logo.png` (project root) |
| Favicon | `favicon.png` (project root) |
| Pages | `*.html` (project root) |

---

## Reusable Components

There are **no shared component files**. Each HTML page is self-contained. Patterns are duplicated manually:

### Homepage (`index.html`)
- Full sticky navigation with logo, links, phone CTA, apply button, mobile menu
- Full footer with Company, Legal, and Contact columns
- All interactive JavaScript (calculator, form, modal)

### Secondary Pages (`about.html`, `underwriting.html`, etc.)
- Simplified navigation (same logo block, horizontal link row)
- Single content column: `max-w-4xl mx-auto px-6 py-20`
- No footer on secondary pages (matches original design)
- Shared inline `<style>` block for fonts

When adding a new secondary page, **copy `about.html`** and change the active nav link and content.

---

## Styling System

### Fonts
```css
body { font-family: 'Inter', system_ui, sans-serif; }
.heading-font { font-family: 'Playfair Display', serif; }
```

### Brand Colors (CSS variables & Tailwind)
| Token | Value | Usage |
|-------|-------|-------|
| Gold | `#c9a227`, `#d4af37` | Buttons, accents, `.gold-btn`, `.gold-gradient` |
| Emerald | `#059669`, `#10b981` | Success, CTAs, `.emerald-btn` |
| Zinc dark | `zinc-950`, `zinc-900` | Hero, footer backgrounds |
| Amber | `amber-600` | Active nav links, brand subtitle |

### Brand Colors (Company Name Only)
| Token | Value | Usage |
|-------|-------|-------|
| Brand Black | `#000000` | `.brand-sc` — "SC", "SECOND CHANCE" on light backgrounds |
| Brand Burgundy | `#722F37` | `.brand-ac` — "AC", "ADJUSTMENT CAPITAL" on light backgrounds |
| Brand White on Dark | `#ffffff` | `.brand-sc-on-dark` — "SECOND CHANCE" on dark footer |
| Brand Burgundy on Dark | `#722F37` | `.brand-ac-on-dark` — "ADJUSTMENT CAPITAL" on dark footer |

All brand classes are in **`brand.css`**. Do not use these classes for nav links, buttons, or other UI — company name text only.

### Key CSS Classes (homepage only)
- `.gold-btn` — primary CTA button with gradient and hover lift
- `.emerald-btn` — submit button on application form
- `.service-card` — hover lift on service cards
- `.section-header` — 2.75rem bold section titles
- `.finance-input` — form input focus styling (gold border)
- `.form-step` / `.form-step.active` — multi-step form visibility

**Do not introduce new design systems.** Match existing Tailwind classes and inline styles.

---

## Routing Structure

Static file routing — each page is accessed directly by filename:

| URL | Page |
|-----|------|
| `index.html` | Homepage |
| `about.html` | About Us |
| `underwriting.html` | Underwriting |
| `policies.html` | Lending Policies |
| `free-credit-repair.html` | Free Credit Repair |
| `privacy-policy.html` | Privacy Policy |
| `terms-of-service.html` | Terms of Service |
| `licensing.html` | Licensing |

### Homepage Anchor Links
| Anchor | Section |
|--------|---------|
| `#services` | Financing programs |
| `#how` | How SCAC works |
| `#calculator` | Loan calculator |
| `#apply` | Application form |
| `#faq` | FAQ |

---

## Where Logo Is Stored

**File:** `pyramid-logo.png` (project root) — transparent PNG (687×1024, portrait)

**Referenced in:**
- All HTML pages — navigation header (`h-12 w-auto object-contain`)

**Logo processing:** Source was JPEG with grey background; converted to transparent PNG via background removal (light grey pixels made transparent). Use `h-12 w-auto object-contain` to preserve aspect ratio without distortion.

---

## Where Favicon Is Stored

**File:** `favicon.png` (project root)

**Defined in `<head>` of every HTML page:**
```html
<link rel="icon" type="image/png" href="favicon.png">
<link rel="apple-touch-icon" href="favicon.png">
```

There is no `favicon.ico`, `manifest.json`, or `browserconfig.xml`. To update the favicon, replace `favicon.png` and keep the same `<link>` tags.

---

## Where Navigation Is Defined

Navigation is **inline in each HTML file** — not a shared include.

### Homepage (`index.html`, lines ~144–196)
- Desktop links: Services, About Us, Underwriting, Policies, Calculator, Apply Now, FAQ
- Phone button + Start Application button
- Mobile menu generated dynamically via `toggleMobileMenu()` JavaScript

### Secondary Pages
- Links: Home, About Us, Underwriting, Policies, Apply
- Active page highlighted with `text-amber-600 font-semibold`

---

## Where Footer Is Defined

**Only on `index.html`** (lines ~946–996).

Three columns:
- **Company:** About Us, Underwriting, Free Credit Repair
- **Legal:** Privacy Policy, Terms of Service, Licensing
- **Contact:** Phone, Fax, Email

Secondary pages do not have footers.

---

## Where Contact Information Is Stored

Contact details are **hardcoded** in HTML (no config file). Search the project to update globally.

| Field | Value | Format in HTML |
|-------|-------|----------------|
| **Phone** | `855-888-6423` | Display text; `tel:8558886423` for links |
| **Email** | `Info@scac.finance` | Display text; `mailto:Info@scac.finance` for links |
| **Fax** | `(888) 853-8129` | Display only (unchanged) |

### Phone Occurrences (`index.html`)
- Nav phone button
- Hero CTA
- Final CTA section
- Footer contact column
- Mobile menu (JavaScript string in `toggleMobileMenu()`)

### Email Occurrences
- Footer contact column (`index.html`)
- Contact links on secondary pages (underwriting, policies, privacy, terms, licensing, free-credit-repair)

---

## JavaScript (Homepage Only)

All JavaScript is inline at the bottom of `index.html`.

| Function | Purpose |
|----------|---------|
| `toggleMobileMenu()` | Creates full-screen mobile nav overlay |
| `calculateLoan()` | Loan calculator amortization |
| `showStep()` / `nextStep()` / `prevStep()` | Multi-step application form |
| `updateReview()` | Populates step 4 review summary |
| `toggleEmploymentFields()` | Shows/hides employer fields by status |
| `submitApplication()` | Simulates form submit, shows success modal |
| `closeModal()` | Closes success modal |
| `initializeWebsite()` | Boot function on `window.onload` |

**Note:** Form submission is client-side simulation only — no API/backend integration.

---

## Changes Made (July 5, 2026)

### Task 1 — Logo Replacement
- Copied new pyramid logo image to `pyramid-logo.png`
- All existing `src="pyramid-logo.png"` references now serve the new image
- `object-contain` preserved to prevent distortion

### Task 2 — Phone Number Update
- Replaced `(561) 552-7728` / `tel:5615527728` with `855-888-6423` / `tel:8558886423`
- Updated in: `index.html` (nav, hero, CTA, footer, mobile menu JS), all new/updated secondary pages, `WEBSITE_OVERVIEW.md`

### Task 3 — Email Update
- Replaced `info@scacapital.com` with `Info@scac.finance`
- Updated in: `index.html` footer, all secondary pages with contact info, `WEBSITE_OVERVIEW.md`

### Task 4 — Favicon
- Added `favicon.png` (gold diamond image)
- Added `<link rel="icon">` and `<link rel="apple-touch-icon">` to all HTML pages

### Task 5 — New Pages
Created/updated pages matching `about.html` design pattern:
- **underwriting.html** — expanded with full underwriting content
- **free-credit-repair.html** — new
- **privacy-policy.html** — new
- **terms-of-service.html** — new
- **licensing.html** — new
- **policies.html** — updated to match secondary page design, added cross-links

Footer links on homepage converted from plain text to working `<a>` tags.

### Task 10 — Premium Refactor (July 5, 2026)

**Phase 1:** Full audit documented in `REVIEW.md`.

**Phase 2 — Architecture:**
- Extracted inline CSS → `css/styles.css`, `css/animations.css`, `css/responsive.css`
- Extracted inline JS → `js/main.js`, `js/calculator.js`, `js/form.js`
- Moved logo → `assets/logos/`, favicon → `favicon/`
- Installed Font Awesome locally → `assets/icons/fontawesome/` (CDN removed)

**Phase 3–5 — HTML/UI:**
- Semantic landmarks on all pages (`header`, `nav`, `main`, `footer`)
- Skip-to-content link on all pages
- Secondary pages: unified footer, mobile nav, premium prose layout
- Burgundy primary buttons via `.gold-btn` CSS update
- Scroll reveal on services section (Intersection Observer)
- Modal ARIA attributes improved

**Unchanged:** All content, URLs, calculator logic, form flow, simulated submission.

---

Scoped branding update to **company name and SC/AC abbreviation text only**. All other website colors (gold CTAs, amber nav hovers, emerald accents, tagline amber, footer icon, etc.) were **reverted** to their original values.

**Official branding colors (`brand.css`):**
| Element | Color | Hex |
|---------|-------|-----|
| SECOND CHANCE / SC | Black | `#000000` |
| ADJUSTMENT CAPITAL / AC | Burgundy | `#722F37` |

**On dark backgrounds (footer):** `SECOND CHANCE` renders white (`#ffffff`) as the readable inverse of black brand on dark; `ADJUSTMENT CAPITAL` uses burgundy (`#722F37`).

**Where company name branding is applied:**
- Header logo text on all 9 pages (`SC`/`AC` + `SECOND CHANCE`/`ADJUSTMENT CAPITAL`)
- Hero gold circle company name (`index.html`)
- Footer company name and copyright (`index.html`)
- "How SCAC Works" heading — only `SC`/`AC` colored
- About page H1
- Free Credit Repair page H1 — `SC`/`AC` in title

**Explicitly NOT changed:** Nav link colors, hover states, active nav (amber), tagline color (amber), buttons, cards, forms, icons, backgrounds, step numbers, gold gradients, testimonials, body copy mentions of SCAC in prose.

**`brand.css` contains only:** `.brand-sc`, `.brand-ac`, `.brand-sc-on-dark`, `.brand-ac-on-dark`

### Task 6–8 — Prior Brand Work (July 5, 2026, superseded by Task 9 for color scope)

- Logo converted to transparent PNG; `h-12 w-auto object-contain` on all pages
- `brand.css` created for company name colors
- New pages added (underwriting, free credit repair, privacy, terms, licensing)
- Contact info updated (phone, email)
- Task 9 reverted non-brand color changes from Tasks 6–8 (nav burgundy, tagline green, footer icon burgundy)

---

## Assumptions & Notes for Future Developers

1. **No backend:** The application form does not send data anywhere. Integrating a real endpoint requires modifying `submitApplication()` in `index.html`.

2. **Logo aspect ratio:** The pyramid logo is portrait (taller than wide). Use `h-12 w-auto object-contain` — not fixed square dimensions — to avoid distortion.

3. **Favicon watermark:** The provided favicon image may contain a stock watermark at large sizes. Replace `favicon.png` with a clean version if needed.

4. **Missing asset:** `20260618_164206.jpg` is referenced on the homepage hero but may not be present in the project folder. Add it or remove the reference if broken.

5. **Secondary page nav is not identical to homepage nav** — this is intentional to match the original design. Homepage has more links; secondary pages have a simplified set.

6. **Mobile menu exists only on homepage.** Secondary pages have no mobile nav toggle — same as before these changes.

7. **To add a new page:** Copy `about.html`, update title/meta, content, and active nav link. Include `<link rel="stylesheet" href="brand.css">`, favicon links, and the standard split-color header branding block.

8. **Global contact update:** Run a project-wide search for `8558886423`, `855-888-6423`, and `Info@scac.finance` before changing contact info again.

9. **Do not redesign:** This project intentionally uses duplicated inline HTML/CSS per page. Do not introduce React, build tools, or component frameworks unless explicitly requested.

10. **Brand colors:** Company name only — `.brand-sc` / `.brand-ac` in `brand.css`. Do not apply to nav, buttons, or UI accents.

11. **Policies vs. Legal pages:** `policies.html` is a general lending policies overview. Detailed legal content lives in `privacy-policy.html`, `terms-of-service.html`, and `licensing.html`.

---

## Quick Verification Checklist

- [ ] Logo displays correctly in all page headers
- [ ] Favicon appears in browser tab
- [ ] Phone `855-888-6423` on nav, hero, footer, mobile menu
- [ ] Email `Info@scac.finance` in footer and contact sections
- [ ] Footer links navigate to all secondary pages
- [ ] Loan calculator still works
- [ ] Multi-step form still advances and shows success modal
- [ ] Company name: SECOND CHANCE black, ADJUSTMENT CAPITAL burgundy; SC black, AC burgundy
- [ ] No non-brand UI colors changed (nav amber, gold buttons, tagline amber, etc.)
- [ ] No references to old phone `(561) 552-7728` or old email `info@scacapital.com`
