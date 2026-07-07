# Second Chance Adjustment Capital (SCAC) — Website Overview

> **Generated:** July 5, 2026  
> **Project type:** Static multi-page marketing website  
> **Primary purpose:** Lead generation for income-based lending and financing applications

---

## Table of Contents

1. [Executive Summary](#executive-summary)
2. [Project Structure](#project-structure)
3. [Technology Stack](#technology-stack)
4. [Design & Branding](#design--branding)
5. [Site Map & Navigation](#site-map--navigation)
6. [Page-by-Page Breakdown](#page-by-page-breakdown)
7. [Interactive Features](#interactive-features)
8. [Contact Information](#contact-information)
9. [Business Positioning & Messaging](#business-positioning--messaging)
10. [Known Gaps & Recommendations](#known-gaps--recommendations)

---

## Executive Summary

**Second Chance Adjustment Capital (SCAC)** is a nationwide financial services platform that markets **income-based financing** as an alternative to traditional credit-score-driven lending. The website targets individuals and small businesses who have faced credit challenges — foreclosure, repossession, bankruptcy, or poor credit — but have verifiable income and repayment ability.

The site is built as a **static HTML website** with four pages. The homepage (`index.html`) is the primary landing page and contains the full user experience: services, process explanation, loan calculator, multi-step application form, testimonials, FAQ, and calls to action. Three supporting pages (`about.html`, `underwriting.html`, `policies.html`) provide supplementary company and compliance information.

**Key value proposition:** *"Financing based on verified income — not your credit score."*

---

## Project Structure

```
SCAC Finance project/
├── index.html          # Main landing page (~1,260 lines) — full site experience
├── about.html          # Company overview page
├── underwriting.html   # Underwriting process details
├── policies.html       # Lending policies page
├── pyramid-logo.png    # Referenced logo asset (not in repo listing)
└── 20260618_164206.jpg # Referenced flyer image (not in repo listing)
```

| File | Lines | Role |
|------|-------|------|
| `index.html` | ~1,262 | Homepage with all core sections, calculator, application form, and JavaScript |
| `about.html` | ~48 | Brief company mission and commitment statement |
| `underwriting.html` | ~40 | ATR, LOS, and alternative credit reporting overview |
| `policies.html` | ~31 | High-level lending policy compliance statement |

**Note:** The HTML files reference `pyramid-logo.png` and `20260618_164206.jpg`, but these image files were not found alongside the HTML in the project directory. They should be added for the site to render correctly.

---

## Technology Stack

| Layer | Technology |
|-------|------------|
| **Markup** | HTML5 |
| **Styling** | [Tailwind CSS](https://cdn.tailwindcss.com) (CDN) |
| **Icons** | [Font Awesome 6.5.1](https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css) |
| **Fonts** | Google Fonts — Inter (body), Playfair Display (headings) |
| **JavaScript** | Vanilla JS (inline in `index.html`) — no build step, no framework |
| **Backend** | None — application form submission is **simulated client-side only** |

### Architecture Notes

- **No build pipeline** — files can be opened directly or served by any static file host.
- **No server-side processing** — form data is not sent to an API; submission shows a success modal after a 1.45s timeout.
- **No package manager** — no `package.json`, npm, or bundler dependencies.
- **Responsive design** — Tailwind utility classes with mobile menu for smaller screens.

---

## Design & Branding

### Color Palette

| Color | Usage | Hex / Reference |
|-------|-------|-----------------|
| **Gold / Amber** | Primary brand accent, buttons, highlights | `#c9a227`, `#d4af37`, `#b8972e` |
| **Emerald / Green** | Trust, success, CTAs, hope messaging | `#059669`, `#10b981`, `#166534` |
| **Zinc / Dark** | Backgrounds, text, hero sections | `#18181b` (zinc-950), `#27272a` |
| **White / Light** | Cards, nav, content areas | `#fafafa` (zinc-50) |

### Typography

- **Headings:** Playfair Display (serif, bold) — `.heading-font`
- **Body:** Inter (sans-serif, weights 300–600)
- **Section headers:** ~2.75rem, bold

### Visual Elements

- **Pyramid logo** — used in navigation across all pages
- **Gold gradient circle** — hero visual with "The Gold Standard" tagline
- **Rounded corners** — consistent `rounded-3xl` / `rounded-2xl` styling
- **Hover effects** — service cards lift on hover; gold buttons have shadow animation
- **Trust bar** — gradient strip below hero with checkmark bullet points

---

## Site Map & Navigation

```
                    ┌─────────────────┐
                    │   index.html    │
                    │   (Homepage)    │
                    └────────┬────────┘
                             │
        ┌────────────────────┼────────────────────┐
        │                    │                    │
        ▼                    ▼                    ▼
  about.html          underwriting.html      policies.html
  (About Us)          (Underwriting)         (Policies)
```

### Homepage In-Page Sections (Anchor Links)

| Anchor | Section |
|--------|---------|
| `#services` | Financing programs (4 service cards) |
| `#how` | How SCAC works (4-step process) |
| *(no anchor)* | Proof of income requirements |
| `#calculator` | Income-based loan calculator |
| `#apply` | Multi-step application form |
| `#faq` | Frequently asked questions |

### Navigation Differences

| Page | Nav Links |
|------|-----------|
| **index.html** | Services, About Us, Underwriting, Policies, Calculator, Apply Now, FAQ + phone + Apply button |
| **about.html** | Home, About Us (active), Underwriting, Policies, Apply |
| **underwriting.html** | Home, About, Underwriting (active), Policies |
| **policies.html** | Home, About, Underwriting, Policies (active) |

The homepage has a **mobile hamburger menu** (`toggleMobileMenu()`) that overlays full-screen navigation. Secondary pages do not include mobile menu logic.

---

## Page-by-Page Breakdown

### 1. `index.html` — Homepage

The homepage is a single long-form landing page organized into these sections:

#### Navigation Bar
- Sticky top nav with logo, desktop links, phone number `855-888-6423`, and "Start Application" gold button
- Mobile menu toggle (lg breakpoint and below)

#### Hero Section
- **Headline:** "Your Second Chance Starts Here"
- **Subhead:** Income-based financing, not credit score
- **Badge:** "Now serving all 50 states + Washington, D.C."
- **Social proof:** "Over 12,400 families helped since 2018"
- **CTAs:** Apply for Financing | Call 855-888-6423
- **Visual:** Gold gradient circle with SCAC branding + optional flyer image preview

#### Trust Bar
- No credit score denial
- Foreclosure help
- Repossession help
- Free credit repair for clients

#### Services (`#services`)
Four financing program cards:

| Service | Description |
|---------|-------------|
| **Mortgage Loans** | Purchase, refinance, cash-out, rate/term — even after foreclosure |
| **Automobile Financing** | New/used car loans and refinancing — repossession does not disqualify |
| **Consumer Lending** | Personal loans for debt consolidation, home improvements, medical, etc. |
| **Business Lending** | Working capital, equipment, expansion — based on cash flow |

Also mentions **SCAC Visa & Mastercard** (linked to apply form).

#### How It Works (`#how`)
Four-step process:
1. Submit application (~10 minutes)
2. Provide income verification (3 months paystubs or 4 months bank statements)
3. Fast underwriting review (48-hour average approval)
4. Approval & funding

#### Proof of Income Section
Documentation requirements by applicant type:
- **W-2 employees:** Last 3 months paystubs with YTD totals
- **Self-employed / Non-W2:** Last 4 months bank statements (PDF)
- **Business owners:** Business income statements (PDF from bank)

#### Loan Calculator (`#calculator`)
Interactive estimator with:
- **Loan amount:** $5,000 – $500,000 (slider, default $75,000)
- **Loan term:** 36, 48, 60, 72, 84, or 120 months (default 60)
- **Estimated APR:** 6% – 24% (slider, default 12.5%)
- **Outputs:** Monthly payment, total interest, total repayment

Uses standard amortization formula: `M = P × [r(1+r)^n] / [(1+r)^n - 1]`

#### Application Form (`#apply`)
**4-step multi-step form** with progress bar:

| Step | Fields |
|------|--------|
| **1 — Personal** | First/last name, DOB, phone, email, address |
| **2 — Employment & Income** | Employment status, monthly gross income, employer/job title (conditional), job duration |
| **3 — Loan Details** | Loan type, requested amount, purpose, credit hardship checkboxes |
| **4 — Review & Submit** | Summary review + 3 consent checkboxes |

**Loan type options:**
- Mortgage — Home Purchase
- Mortgage — Refinance / Cash Out
- Automobile — Purchase
- Automobile — Refinance
- Personal / Consumer Loan
- Business Loan
- SCAC Visa / Mastercard

**Credit hardship checkboxes** (non-disqualifying):
- Foreclosure in last 7 years
- Repossession in last 5 years
- Bankruptcy (Chapter 7 or 13)
- Late payments on credit
- High debt-to-income
- None of the above

#### Mission Section
- **Tagline:** "We Help God's Children Rebuild with Dignity and Hope"
- Three pillars: Compassion First, Fair & Transparent, Second Chances

#### Testimonials
Three client stories:
- **Maria T., Miami, FL** — Post-foreclosure home purchase
- **James R., Atlanta, GA** — Auto loan after repossession
- **David K., Phoenix, AZ** — Business equipment loan after COVID setbacks

#### FAQ (`#faq`)
Five expandable `<details>` items:
1. Credit scores and approval
2. Approval timeline (24–48 hours)
3. Mortgage/car after foreclosure or repossession
4. States served (all 50 + D.C.)
5. Application fees (none)

#### Final CTA & Footer
- "Ready to take your second chance?" with Apply and Call buttons
- Footer: company info, legal links (non-functional text), contact details
- Copyright © 2026

---

### 2. `about.html` — About Us

**Purpose:** Company background and mission statement.

**Content highlights:**
- SCAC is a nationwide financial services platform for income-based financing
- Founded on the principle that past credit challenges should not define the future
- Operates under a private bank registered in Florida
- Serves all 50 states and Washington, D.C.
- Combines technology with compassionate underwriting
- Commitment to restoring hope and financial dignity

**Design:** Minimal — shared nav, single prose column, no footer.

---

### 3. `underwriting.html` — Underwriting Process

**Purpose:** Explain how SCAC evaluates loan applications.

**Three subsections:**

| Topic | Description |
|-------|-------------|
| **Ability-to-Repay (ATR)** | Federal ATR rules; verifies income, employment stability, financial picture |
| **Loan Origination System (LOS)** | Modern LOS for efficient, compliant, transparent processing |
| **Alternative Credit Reporting** | Incorporates rent, utilities, bank flow, and positive payment data for thin-file or challenged credit applicants |

**Design:** Minimal prose layout, shared nav, no footer.

---

### 4. `policies.html` — Lending Policies

**Purpose:** Compliance and policy transparency.

**Content:**
- Full compliance with federal and state regulations nationwide
- Emphasis on fair lending, transparency, and consumer protection
- State-specific policy details available upon request

**Design:** Shortest page — basic nav and two paragraphs, no footer.

---

## Interactive Features

All JavaScript lives in `index.html` (lines ~1021–1259).

### 1. Mobile Menu (`toggleMobileMenu`)
- Creates a full-screen overlay with nav links
- Closes when a link is clicked or × is pressed
- Includes phone number link

### 2. Loan Calculator (`calculateLoan`)
- Runs on slider/input change
- Updates: loan amount display, APR display, monthly payment, total interest, total repayment
- Initialized on page load via `initializeWebsite()`

### 3. Multi-Step Application Form

| Function | Behavior |
|----------|----------|
| `showStep(step)` | Shows/hides form steps, updates progress bar and labels |
| `nextStep()` | Validates required fields in current step; advances or shows alert |
| `prevStep()` | Goes back one step |
| `updateReview()` | Populates review summary on step 4 |
| `toggleEmploymentFields()` | Shows/hides employer and job title fields based on employment status |
| `submitApplication(e)` | Prevents default submit; simulates 1.45s delay; shows success modal; resets form |

### 4. Success Modal
- Displays after form "submission"
- Next steps: check email, upload documents, team contact within 24 hours
- `closeModal()` hides modal and scrolls to top

### 5. Keyboard Support
- Enter key in form inputs triggers "Continue" when visible

---

## Contact Information

| Channel | Value |
|---------|-------|
| **Phone** | 855-888-6423 |
| **Fax** | (888) 853-8129 |
| **Email** | Info@scac.finance |
| **Service area** | All 50 U.S. states + Washington, D.C. |
| **Headquarters / charter** | Private bank registered in Florida |

---

## Business Positioning & Messaging

### Target Audience
- Individuals with foreclosure, repossession, bankruptcy, or poor credit
- W-2 employees, self-employed, retirees, and business owners with verifiable income
- Small businesses needing working capital or equipment financing

### Key Differentiators (as stated on site)
1. **Income-first underwriting** — not credit-score-driven
2. **Second chances** — past hardships reviewed in context, not auto-denied
3. **Nationwide reach** — all 50 states + D.C.
4. **Free credit repair** — offered to approved clients
5. **Fast decisions** — 24–48 hour preliminary approval
6. **No application fees**
7. **Compassionate, faith-aligned mission** — "dignity and hope"

### SEO Meta (Homepage)
- **Title:** Second Chance Adjustment Capital (SCAC) | Income-Based Financing
- **Description:** Financing based on verified income, not credit score. Second chances for mortgages, auto loans, consumer & business lending nationwide.
- **Keywords:** second chance financing, income based lending, mortgage refinancing, auto loans, bad credit loans, foreclosure help, repossession help

### Legal Disclaimers
- SCAC is a **non-depository lender**
- **Not FDIC-insured**
- Operates nationwide under a private bank charter registered in Florida
- Soft credit inquiry for identity/fraud prevention (not primary approval factor)

---

## Known Gaps & Recommendations

### Missing Assets
- `pyramid-logo.png` — referenced on all pages
- `20260618_164206.jpg` — flyer preview on homepage hero

### Non-Functional Elements
| Item | Status |
|------|--------|
| Application form submission | Client-side simulation only — no backend/API |
| Footer legal links | Plain text, not linked to actual policy pages |
| Footer "About Us", "Underwriting", "Free Credit Repair" | Not hyperlinked |
| Secondary pages | No footer, minimal styling compared to homepage |
| Mobile menu | Only on homepage |

### Potential Improvements
1. **Backend integration** — Connect application form to email, CRM, or loan origination system
2. **Expand policies page** — Add privacy policy, terms of service, licensing details (referenced in footer)
3. **Unify navigation** — Match homepage nav/footer across all pages
4. **Add image assets** — Include logo and marketing images in project
5. **Form data persistence** — Consider localStorage or server save for partial applications
6. **Analytics** — Add tracking for conversions (Apply clicks, form completions)
7. **Accessibility** — Audit form labels, modal focus trap, and mobile menu ARIA attributes
8. **HTTPS & hosting** — Deploy to production host with SSL certificate

---

## Quick Reference: Homepage Section Order

1. Navigation  
2. Hero + Trust Bar  
3. Services  
4. How It Works  
5. Proof of Income  
6. Loan Calculator  
7. Application Form  
8. Mission  
9. Testimonials  
10. FAQ  
11. Final CTA  
12. Footer  
13. Success Modal (hidden)

---

*This document describes the SCAC Finance website as of the files present in the project directory. For questions or updates, revise this file when the codebase changes.*
