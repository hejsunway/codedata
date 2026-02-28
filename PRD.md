# Product Requirements Document
## ITAI.EDU — Professional Certificate in Data Analytics

**Document version:** 1.0  
**Date:** 2026-02-28  
**Owner:** ITAI Technology Education  
**Status:** Active — Source of truth for all coding decisions

---

## Table of Contents

1. [Executive Summary](#1-executive-summary)
2. [Product Vision & Goals](#2-product-vision--goals)
3. [Business Model](#3-business-model)
4. [Target Users](#4-target-users)
5. [Site Architecture](#5-site-architecture)
6. [Pages & Sections](#6-pages--sections)
7. [Design System](#7-design-system)
8. [Technical Stack](#8-technical-stack)
9. [Functional Requirements](#9-functional-requirements)
10. [Non-Functional Requirements](#10-non-functional-requirements)
11. [Terms & Conditions Policy](#11-terms--conditions-policy)
12. [Known Gaps & Future Backlog](#12-known-gaps--future-backlog)
13. [Constraints](#13-constraints)
14. [Success Metrics](#14-success-metrics)

---

## 1. Executive Summary

ITAI.EDU is a static multi-page marketing and enrollment website for the **ITAI Professional Certificate in Data Analytics**. It presents the course program to prospective learners, communicates learning outcomes and career impact, handles enrollment, and publishes the legal terms governing access to the program.

The website is a **front-end only product** (HTML + CSS + vanilla JavaScript, no server or build step). All pages share a unified glassmorphism design language, a consistent navigation shell, and a shared footer. There is no learner portal, payment gateway, or back-end system in the current scope — those are identified future features.

---

## 2. Product Vision & Goals

**Vision:** Provide the most accessible, transparent, and affordable path to a globally recognised Data Analytics career credential.

**Goals:**

| # | Goal | How it shows on the site |
|---|------|--------------------------|
| G1 | Communicate program value clearly | Hero stats, program overview, curriculum detail |
| G2 | Build trust with prospective learners | FAANG trust bar, testimonials, salary data |
| G3 | Drive enrollment with one frictionless CTA | Single $34 USD lifetime access pricing, prominent "Enroll Now" button on every page |
| G4 | Protect the business model legally | Dedicated `terms.html` page linked from every footer and the enrollment CTA |
| G5 | Be accessible to all learners | WCAG 2.1 AA compliance: semantic HTML, ARIA, keyboard navigation, reduced-motion support |
| G6 | Rank in organic search | Schema markup, canonical URLs, meta tags, semantic heading hierarchy |

---

## 3. Business Model

### Pricing

| Type | Amount | Description |
|------|--------|-------------|
| One-Time Payment | **$34 USD** | Single payment; grants lifetime access to all current and future course materials |

- There are **no subscription fees**, **no monthly payments**, and **no cohort/seat limits** on the marketing site.
- Access is **non-transferable** and granted to the individual learner only.
- A **30-day money-back guarantee** applies (referenced in FAQ; if learner is unsatisfied after the first module).

### Key Enrollment Copy

> "One-Time Payment · Lifetime Access · Subject to Terms & Conditions"

The phrase "Subject to Terms & Conditions" must always link to `terms.html`. This copy appears:
- Below the "Enroll Now" CTA button on `enroll.html`
- In the enrollment section of `online_viewer_net-2.html` (reference file)

### What Lifetime Access Means (for coding purposes)

- The site must **never show** copy referencing monthly billing, cohort seats, or recurring payment.
- The price `$34 USD` must appear in the enrollment section heading/price display, in the CTA button text, and in meta descriptions for `enroll.html`.
- The CTA button text is: **"🚀 Enroll Now — $34"**

---

## 4. Target Users

### Primary Persona — Aspiring Data Analyst
- Age: 22–40
- Background: No prior data or coding experience required
- Goal: Career change into data analytics
- Concern: Time commitment, cost, job outcomes

### Secondary Persona — Upskilling Professional
- Already working in tech, finance, or retail
- Goal: Add Python/SQL/BI tools to their existing skill set
- Concern: Curriculum depth and tool coverage

### Tertiary — Employer / Recruiter
- Verifying that a candidate's ITAI certificate represents genuine, AI-free, independently completed work

---

## 5. Site Architecture

```
itai.edu/
├── index.html           Home — hero, trust bar, program overview, industry demand
├── curriculum.html      Curriculum — tool stack, 6 modules, learning timeline
├── outcomes.html        Outcomes — what you'll achieve, career path, testimonials
├── faq.html             FAQ — 5 accordion questions
├── enroll.html          Enrollment — $34 pricing CTA + T&C link
├── terms.html           Terms & Conditions — 7-section policy page
├── css/
│   ├── styles.css       Global styles: base, layout, animations, section gradients
│   └── components.css   Component styles: glass card, badges, buttons, nav, FAQ, ribbons
├── js/
│   ├── main.js          Core JS: copyright year, smooth scroll, scroll animations, salary bars
│   ├── navigation.js    Nav JS: mobile menu toggle, active link highlighting, Escape key close
│   └── faq.js           FAQ JS: accordion expand/collapse with keyboard support
└── assets/
    └── images/          Placeholder for future local images (.gitkeep)
```

### Navigation Structure

All pages share the same top navigation bar (sticky, glassmorphism) and footer.

**Desktop nav links (left → right):**
1. Logo / brand (links to `index.html`)
2. Curriculum (`curriculum.html`)
3. Outcomes (`outcomes.html`)
4. FAQ (`faq.html`)
5. **"Enroll Now"** button — always last, links to `enroll.html`

**Mobile nav (hamburger menu expands to list):**
- Curriculum, Outcomes, FAQ, Enroll Now

**Footer columns (4-column grid):**
| Column | Links |
|--------|-------|
| Brand | Logo + tagline |
| Program | Curriculum, Modules, Outcomes |
| Support | FAQ, Terms & Conditions, Contact Us |
| Connect | LinkedIn, Twitter, YouTube (social icons) |
| Bottom bar | Dynamic copyright year (via JS) |

**Active link rule:** `navigation.js` sets `aria-current="true"` on the nav link whose `href` matches `window.location.pathname`. The active link renders with the accent green underline (via `.nav-link[aria-current="true"]::after`).

---

## 6. Pages & Sections

### 6.1 `index.html` — Home Page

| # | Section | Key content |
|---|---------|-------------|
| 1 | **Hero** | H1: "Master Data Analytics." Subheading covering Excel, SQL, Python, Tableau, Power BI, R. CTAs: "Start Learning" (→ `enroll.html`) + "Download Curriculum" (button, not yet wired). Hero image (Unsplash analytics dashboard). Four stat cards: +4,000 Students · 94% Success Rate · Pro Level · 3 Capstones. Status badge: "Professional Certificate Enrollment Open" |
| 2 | **Trust Bar** | Label: "Trusted by aspiring analysts worldwide". FAANG brand icons: Google, Amazon, Microsoft, LinkedIn, Meta |
| 3 | **Program Overview** | H2: "Professional Certificate in Data Analytics". Three feature cards: Industry-Aligned Curriculum (badge: Verified), Real Business Case Studies (badge: Featured), Hands-On Projects (badge: Trending) |
| 4 | **Industry Demand** | H2: "Why Data Analytics?" Three stat badges: 36% Job Growth · £65K+ Average Salary · 280K+ Job Openings. Animated bar chart: Top Hiring Industries (Tech 42K, Finance 35K, Retail 31K, Healthcare 28K, Consulting 25K) |

---

### 6.2 `curriculum.html` — Curriculum Page

| # | Section | Key content |
|---|---------|-------------|
| 1 | **Page Header** | H1: "Program Curriculum". Subheading overview |
| 2 | **Core Tools** | H2: "The Core Tools You'll Master" (badge: Tech Stack). Six tool cards: Microsoft Excel (Beginner→Advanced) · SQL (Intermediate→Expert) · Python (Intermediate→Advanced) · Tableau (Beginner→Advanced) · Power BI (Intermediate→Expert) · R Statistics (Advanced) |
| 3 | **6 Modules** | H2: "6 Comprehensive Modules". Ordered list, numbered 01–06: (01) Foundations of Data Analytics · (02) Excel for Data Professionals · (03) SQL & Database Management · (04) Programming for Data with Python · (05) Data Visualization & Storytelling · (06) Professional Capstone Project (badge: LIVE PROJECT) |
| 4 | **Learning Timeline** | H2: "Your Learning Journey". Four phase cards: Weeks 1–2 Foundations (Beginner) · Weeks 3–6 Core Tools (Intermediate) · Weeks 7–14 Visualization (Advanced) · Weeks 15–20 Capstone (Expert). Note: self-paced, "typically 4–6 months" |

---

### 6.3 `outcomes.html` — Career Outcomes Page

| # | Section | Key content |
|---|---------|-------------|
| 1 | **Page Header** | H1: "Career Outcomes" |
| 2 | **What You'll Achieve** | H2: "What You'll Achieve". Four outcome bullets: Build Real Dashboards · Write Production SQL · Automate with Python · Present with Impact |
| 3 | **Career Path** | H2: "Your Career Path". Three job title cards (Data Analyst, BI Analyst, plus a third). Animated salary bars: Junior Analyst £32,000 · Senior Analyst £65,000+ |
| 4 | **Testimonials** | H2: "Success Stories". Graduate quotes including: "Data Analyst at Google" and "BI Analyst at McKinsey". Ribbon badge: "⭐ TOP" |

---

### 6.4 `faq.html` — FAQ Page

| # | Question | Answer summary |
|---|----------|----------------|
| 1 | Do I need prior experience? | No — starts from absolute basics, beginner-friendly |
| 2 | What's the time commitment? | 10–15 hrs/week · 4–6 months · flexible/self-paced |
| 3 | Will I get a certification? | Yes — Professional Certificate + real project portfolio |
| 4 | What's the money-back guarantee? | 30-day, no-questions-asked refund after first module |
| 5 | Will this help me get a job? | 87% of graduates land roles within 6 months; career support included |

FAQ items use an **accordion** interaction: only one item open at a time, keyboard-accessible (`Enter`/`Space` to toggle), `aria-expanded` toggled by `faq.js`.

---

### 6.5 `enroll.html` — Enrollment Page

| Element | Specification |
|---------|---------------|
| **H2** | "Enrollment Now Open" |
| **Subheading** | "Join 4,000+ successful graduates. One payment, lifetime access." |
| **Price label** | "One-Time Payment" (small caps, slate) |
| **Price display** | `$34` (7xl black) + `USD` (2xl slate) |
| **Lifetime tagline** | "🎓 Lifetime Access — Study at your own pace, forever." (accent green) |
| **CTA button** | "🚀 Enroll Now — $34" (`.btn-glass-solid`) |
| **Sub-copy** | "✨ One-time payment · Lifetime access · Subject to [Terms & Conditions](terms.html)" |
| **T&C link** | Inline `<a href="terms.html">` — always underlined, hover accent green |

> ⚠️ **Do not add** any copy referencing monthly billing, cohort seats, or instalment plans to this page. The business model is lifetime access only.

---

### 6.6 `terms.html` — Terms & Conditions Page

Seven sections. Full prose lives in this file; it must **not** be displayed on any other page (no modal, no inline summary). Link to it from: footer Support column (all pages) + enrollment sub-copy.

| § | Section title | Core rule |
|---|--------------|-----------|
| 1 | Program Access & Pricing | $34 one-time · lifetime access · non-transferable |
| 2 | Daily Reflection Requirement | **Minimum 90 reflection submissions per year** · genuine personal account · via learner portal |
| 3 | Academic Integrity & Prohibited Conduct | **No AI tools** (ChatGPT, Copilot, Gemini, Claude, etc.) · **No plagiarism** of other learners' work · violations → permanent termination, no refund |
| 4 | Copyright & Intellectual Property | **No selling, redistributing, or reselling** course content · no reproducing ITAI curriculum as own product |
| 5 | Account & Termination | Credentials are personal; ITAI may terminate non-compliant accounts without refund; violations void lifetime access |
| 6 | Changes to These Terms | 30-day email notice for material changes |
| 7 | Contact | legal@itai.edu |

At the bottom of the T&C page is a CTA back to `enroll.html`: **"🚀 I Agree — Enroll Now for $34"**

---

## 7. Design System

### 7.1 Design Language
**Glassmorphism** — frosted-glass cards and navbar over a soft gradient background with animated blob shapes.

### 7.2 Color Tokens

| Token | Value | Usage |
|-------|-------|-------|
| `--accent-green` | `#2BB673` | Primary brand, CTA buttons, active links, icons |
| `--soft-green` | `#7FD8BE` | Gradients, secondary accents |
| `--text-main` | `#0F2027` | Body text, headings |
| `--glass-bg` | `rgba(255,255,255,0.4)` | Glass card backgrounds |
| `--glass-border` | `rgba(255,255,255,0.6)` | Glass card borders |
| Blue accent | `#3B82F6` | Secondary badges, stat cards |
| Purple accent | `#A855F7` | Tertiary badges, timeline phase |
| Red accent | `#F03F5E` | Expert badge, capstone phase border |
| Amber | `#F59E0B` | Star ratings |

### 7.3 Typography

**Font family:** `'Plus Jakarta Sans', sans-serif` (Google Fonts, weights 300–800)

| Usage | Class / style |
|-------|---------------|
| Hero H1 | `text-5xl sm:text-6xl lg:text-8xl font-black` + gradient clip |
| Section H2 | `text-3xl sm:text-4xl font-black text-slate-900` |
| Card H3 | `text-xl font-bold text-slate-800` |
| Body text | `text-sm text-slate-600` |
| Microcopy | `text-[10px] uppercase tracking-widest text-slate-400` |

Hero title uses a **text gradient clip**:
```css
background: linear-gradient(to right, #0F2027 0%, #2BB673 100%);
-webkit-background-clip: text;
background-clip: text;
-webkit-text-fill-color: transparent;
```

Stat numbers use the same technique with `background: linear-gradient(135deg, #2BB673, #A8E6CF);`

### 7.4 Spacing & Layout

- Max content width: `max-w-7xl` (Tailwind: 80rem / 1280px)
- Horizontal padding: `px-6` on all sections
- Section vertical padding: `py-24` (standard), `py-12` (compact)
- Card border radius: `border-radius: 20px` (`.glass-card`)

### 7.5 Background

```css
body background: linear-gradient(135deg, #f0fdf4 0%, #ffffff 50%, #e0f2fe 100%)
body background-attachment: fixed
.grid-overlay: radial-gradient dot pattern 30×30px (background-attachment: fixed)
Two animated .blob elements (position: fixed, z-index: -1, filter: blur(80px))
  - Emerald blob: top-left, emerald-200
  - Sky blob: bottom-right, sky-200, animation-delay: -5s
```

### 7.6 Core Components

| Component | CSS class | Notes |
|-----------|-----------|-------|
| Glass card | `.glass-card` | 20px radius, backdrop-filter blur(18px), hover: lift + green border |
| Solid button | `.btn-glass-solid` | Accent green BG, white text, scale on hover |
| Outline button | `.btn-glass-outline` | White BG, slate border, green border on hover |
| Badge (green) | `.badge.badge-green` | Green tint + border, uppercase, small |
| Badge (blue) | `.badge.badge-blue` | Blue tint + border |
| Badge (purple) | `.badge.badge-purple` | Purple tint + border |
| Feature box | `.feature-box` | Adds a 3px green gradient top-border stripe |
| Glow effect | `.glow-effect` | Animated green box-shadow (respects reduced motion) |
| Pulse dot | `.pulse-dot` | Animated opacity pulse (respects reduced motion) |
| Ribbon | `.ribbon` | Rotated 45° top-right corner label, green gradient |
| Module row | `.module-row` | On hover: green border + slide right 10px |
| Salary bar | `.salary-bar` + `.salary-fill` | Animated width via Intersection Observer |
| Stat badge | `.stat-badge` + `.stat-badge-{color}` | Colored border + tinted gradient background |
| Icon box | `.icon-box` | 60×60px rounded box, subtle green gradient background |
| Section gradients | `.section-gradient-{1,2,3}` | Alternating background tints between sections |
| Divider | `.divider-gradient` | 2px horizontal gradient line |

### 7.7 Animation Rules

- All animations **must** respect `prefers-reduced-motion`.
- When `prefers-reduced-motion: reduce`, animations are removed or replaced with instant state changes.
- Scroll-in animations use `.animate-on-scroll` class + `IntersectionObserver` adding `.visible`.
- Hover transforms (lift, slide) are inside `@media (prefers-reduced-motion: no-preference)` blocks only.
- Blob morphing animation: `morph` keyframes, `20s ease-in-out infinite` — only when no-preference.
- Glow/pulse: only when no-preference.

### 7.8 Accessibility Standards

- **Semantic HTML:** `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`, `<aside>`, `<ol>`, `<ul>`, `<blockquote>`, `<cite>`, `<time>`
- **ARIA:** `aria-label`, `aria-labelledby`, `aria-hidden`, `aria-expanded`, `aria-controls`, `aria-current`, `role` attributes used consistently
- **Skip link:** `<a href="#main-content" class="skip-link">` on every page — visible on focus
- **Focus styles:** `3px solid #2BB673` outline with `2px offset` on `:focus-visible`
- **Keyboard navigation:** FAQ items respond to `Enter` and `Space`; mobile menu closes on `Escape`
- **Image alt text:** Descriptive alt attributes on all `<img>` tags
- **Color contrast:** All text/background combinations must meet WCAG AA minimum (4.5:1 for normal text, 3:1 for large text)

---

## 8. Technical Stack

| Layer | Technology | Source | Notes |
|-------|-----------|--------|-------|
| Markup | HTML5 | Static files | Semantic, ARIA-compliant |
| Styling (utility) | Tailwind CSS | CDN (`cdn.tailwindcss.com`) | Utility classes only; no purge/build step |
| Styling (custom) | Vanilla CSS | `css/styles.css`, `css/components.css` | Design tokens, animations, custom components |
| Icons | Font Awesome v6.4.0 | CDN (`cdnjs.cloudflare.com`) | `fas`, `fab`, `far` classes |
| Typography | Plus Jakarta Sans | Google Fonts CDN | Weights 300, 400, 500, 600, 700, 800 |
| Scripting | Vanilla JavaScript | `js/main.js`, `js/navigation.js`, `js/faq.js` | No frameworks, no build tools |
| SEO | Schema.org JSON-LD | Inline `<script type="application/ld+json">` | `Course` + `CourseInstance` schema on `index.html` |
| Hosting | Static file server | Any (Netlify/GitHub Pages/Vercel/Apache) | No server-side code required |

**No build tools, no package manager, no bundler.** The site runs by opening `index.html` directly in a browser.

### 8.1 External Dependencies

All external dependencies are loaded via CDN. No `package.json` exists.

| Dependency | URL | Loaded on |
|-----------|-----|-----------|
| Tailwind CSS | `https://cdn.tailwindcss.com` | All pages |
| Font Awesome 6.4.0 | `https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css` | All pages |
| Plus Jakarta Sans | `https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap` | All pages |

### 8.2 JavaScript Modules

| File | Responsibilities |
|------|-----------------|
| `js/main.js` | (1) Dynamic copyright year via `getElementById('copyright-year')`. (2) Smooth scroll for all `a[href^="#"]` anchors. (3) `IntersectionObserver` for `.animate-on-scroll` → adds `.visible` class. (4) `IntersectionObserver` for `.salary-fill` → triggers animated width from `data-width` attribute. |
| `js/navigation.js` | (1) Mobile menu toggle (`#mobile-menu-btn` / `#mobile-menu`): toggles `aria-hidden`, `aria-expanded`, icon class. (2) Active nav link: compares `window.location.pathname` to each `.nav-link` href, sets `aria-current`. (3) Escape key closes mobile menu. |
| `js/faq.js` | (1) FAQ accordion: click or `Enter`/`Space` on `.faq-item` toggles `aria-expanded`. (2) Accordion is mutually exclusive — opening one closes all others. |

---

## 9. Functional Requirements

Requirements use **MoSCoW** priority (M = Must Have, S = Should Have, C = Could Have, W = Won't Have in current scope).

### 9.1 Navigation

| ID | Priority | Requirement |
|----|----------|-------------|
| NAV-01 | M | Sticky top navigation bar visible on all pages |
| NAV-02 | M | Desktop nav shows: Logo, Curriculum, Outcomes, FAQ, Enroll Now |
| NAV-03 | M | Mobile nav shows hamburger button; expands to full-screen link list |
| NAV-04 | M | Current page link is highlighted with `aria-current="true"` and green underline |
| NAV-05 | M | Enroll Now CTA in nav links to `enroll.html` on all pages |
| NAV-06 | M | Mobile menu closes when any menu link is clicked |
| NAV-07 | M | Mobile menu closes on `Escape` key; focus returns to hamburger button |
| NAV-08 | S | Skip-to-main-content link visible on keyboard focus on every page |

### 9.2 Home Page

| ID | Priority | Requirement |
|----|----------|-------------|
| HOME-01 | M | Hero heading "Master Data Analytics." displayed with gradient text clip |
| HOME-02 | M | "Start Learning" CTA links to `enroll.html` |
| HOME-03 | M | "Download Curriculum" button present (may be unimplemented/inert) |
| HOME-04 | M | Four hero stat cards displayed: +4,000 Students · 94% Success Rate · Pro Level · 3 Capstones |
| HOME-05 | M | Trust bar with FAANG brand icons |
| HOME-06 | M | Program Overview section with three feature cards |
| HOME-07 | M | Industry Demand section with three stat badges and animated bar chart |
| HOME-08 | S | Bar chart values animate in on scroll (Intersection Observer) |

### 9.3 Curriculum Page

| ID | Priority | Requirement |
|----|----------|-------------|
| CUR-01 | M | Six tool cards displayed with correct tool names, descriptions, and levels |
| CUR-02 | M | Modules listed as an ordered list 01–06 with correct names and descriptions |
| CUR-03 | M | Module 06 (Capstone) has "LIVE PROJECT" badge |
| CUR-04 | M | Learning timeline shows four phases with correct week ranges and levels |

### 9.4 Outcomes Page

| ID | Priority | Requirement |
|----|----------|-------------|
| OUT-01 | M | "What You'll Achieve" section with four skill outcomes |
| OUT-02 | M | Career path section with job titles and animated salary bars |
| OUT-03 | M | Salary bars animate on scroll via `IntersectionObserver` using `data-width` attribute |
| OUT-04 | M | Testimonials section with at least two graduate quotes |

### 9.5 FAQ Page

| ID | Priority | Requirement |
|----|----------|-------------|
| FAQ-01 | M | Five FAQ items displayed as glass cards |
| FAQ-02 | M | Clicking an item expands it; clicking again collapses it |
| FAQ-03 | M | Opening one FAQ item collapses any previously open item |
| FAQ-04 | M | Chevron icon rotates 180° when item is open |
| FAQ-05 | M | FAQ items are keyboard-operable (`Enter`/`Space`) |
| FAQ-06 | M | `aria-expanded` is toggled correctly on each FAQ item |

### 9.6 Enrollment Page

| ID | Priority | Requirement |
|----|----------|-------------|
| ENR-01 | M | Price displayed as `$34 USD` in large typography |
| ENR-02 | M | "Lifetime Access" messaging present |
| ENR-03 | M | CTA button text is "🚀 Enroll Now — $34" |
| ENR-04 | M | Sub-copy includes link to `terms.html` with text "Terms & Conditions" |
| ENR-05 | M | No copy referencing monthly billing, cohort seats, or recurring payment |
| ENR-06 | M | Meta description references $34 and lifetime access |

### 9.7 Terms & Conditions Page

| ID | Priority | Requirement |
|----|----------|-------------|
| TNC-01 | M | Page is reachable at `terms.html` |
| TNC-02 | M | All seven sections present with correct content |
| TNC-03 | M | Section 2 states minimum 90 reflection submissions per year |
| TNC-04 | M | Section 3 prohibits AI tool use explicitly (names examples: ChatGPT, Copilot, Gemini, Claude) |
| TNC-05 | M | Section 3 prohibits plagiarism of other learners' work |
| TNC-06 | M | Section 4 prohibits selling or redistributing course content and copyright |
| TNC-07 | M | Page links back to `enroll.html` via CTA at the bottom |

### 9.8 Footer

| ID | Priority | Requirement |
|----|----------|-------------|
| FTR-01 | M | Footer present on all pages with four columns: Brand, Program, Support, Connect |
| FTR-02 | M | "Terms & Conditions" link in Support column links to `terms.html` on every page |
| FTR-03 | M | Copyright year is dynamically updated via JS (`#copyright-year` span) |
| FTR-04 | S | Social icon links (LinkedIn, Twitter, YouTube) present |

### 9.9 Animations & Interactions

| ID | Priority | Requirement |
|----|----------|-------------|
| ANI-01 | M | All CSS animations and JS transitions must be disabled/instant when `prefers-reduced-motion: reduce` |
| ANI-02 | S | `.animate-on-scroll` elements fade/slide in on scroll using IntersectionObserver |
| ANI-03 | S | Salary bars animate from 0 to target width on scroll |
| ANI-04 | S | Background blobs animate with `morph` keyframes when motion is allowed |
| ANI-05 | S | Glass cards lift on hover (transform: translateY(-10px) scale(1.01)) |

---

## 10. Non-Functional Requirements

### 10.1 Performance

| ID | Requirement |
|----|-------------|
| PERF-01 | Page loads without a build step — open `index.html` directly in any modern browser |
| PERF-02 | All images use `loading="lazy"`, explicit `width` and `height` attributes |
| PERF-03 | No JavaScript frameworks — vanilla JS only; no runtime overhead |
| PERF-04 | External CDN resources use `<link rel="preconnect">` hints |
| PERF-05 | Background gradient and blob are `background-attachment: fixed` with `overflow-x: hidden` to prevent layout shift |

### 10.2 Accessibility (WCAG 2.1 AA)

| ID | Requirement |
|----|-------------|
| A11Y-01 | Every page has a skip-to-main-content link |
| A11Y-02 | All interactive elements are keyboard-reachable with visible `:focus-visible` ring (3px, accent green) |
| A11Y-03 | All images have descriptive `alt` text |
| A11Y-04 | Decorative elements use `aria-hidden="true"` |
| A11Y-05 | Section headings use `aria-labelledby` pointing to heading IDs |
| A11Y-06 | Charts and progress bars use `role="img"` or `role="progressbar"` with `aria-label` |
| A11Y-07 | Color is not the only means of conveying information |
| A11Y-08 | Touch targets are at minimum 44×44px on mobile |

### 10.3 SEO

| ID | Requirement |
|----|-------------|
| SEO-01 | Each page has a unique `<title>` and `<meta name="description">` |
| SEO-02 | Each page has correct `<link rel="canonical">` |
| SEO-03 | Open Graph tags (`og:title`, `og:description`, `og:type`, `og:url`, `og:image`) on all pages |
| SEO-04 | Twitter card meta tag on all pages |
| SEO-05 | JSON-LD Schema.org `Course` + `CourseInstance` markup on `index.html` |
| SEO-06 | `<meta name="theme-color" content="#2BB673">` on all pages |
| SEO-07 | Heading hierarchy: one `<h1>` per page, sections use `<h2>`, cards use `<h3>` |

### 10.4 Browser Compatibility

- All modern evergreen browsers: Chrome, Firefox, Safari, Edge (latest 2 versions)
- `backdrop-filter` used for glassmorphism; `-webkit-backdrop-filter` prefix included
- No IE11 support required

### 10.5 Responsive Breakpoints

Tailwind CSS breakpoints used:

| Prefix | Min-width | Usage |
|--------|-----------|-------|
| (none) | 0px | Mobile base styles |
| `sm:` | 640px | Small mobile adjustments |
| `md:` | 768px | Two-column grids, hide hamburger |
| `lg:` | 1024px | Three-column grids, hero two-column |
| `xl:` | 1280px | (Not explicitly used yet) |

---

## 11. Terms & Conditions Policy

> This section summarises the legal obligations that the site must surface and link to correctly. Full prose lives in `terms.html` only — do not reproduce it inline elsewhere.

### Rules the site's code must not contradict:

1. **$34 one-time, lifetime access** — never show recurring or instalment pricing anywhere on the site
2. **90 daily reflections per year** — this is a learner obligation; the marketing site does not need to display it (only `terms.html`)
3. **No AI tool use** — the site must not suggest or encourage the use of AI for coursework
4. **No plagiarism** — the site may not frame collaboration or copying as acceptable
5. **No reselling / no copyright transfer** — course content belongs to ITAI Technology Education

### T&C Link Rule:
Every page must include `<a href="terms.html">Terms & Conditions</a>` in the footer Support column. The enrollment CTA sub-copy must include "Subject to Terms & Conditions" linking to `terms.html`.

---

## 12. Known Gaps & Future Backlog

These items are **out of scope** for the current static site but are planned future features. Do not implement them without a separate PRD/ticket.

| ID | Feature | Notes |
|----|---------|-------|
| BACK-01 | **Payment processing** | Integrate Stripe/PayPal to accept the $34 USD payment |
| BACK-02 | **Learner portal** | Authenticated area for enrolled students to access course content |
| BACK-03 | **Daily reflection submission system** | Portal feature for learners to submit 90 daily reflections per year (required by T&C §2) |
| BACK-04 | **Certificate issuance** | Generate and issue digital certificates on program completion |
| BACK-05 | **"Download Curriculum" CTA** | The button on the hero is present but not wired — needs a PDF asset or download flow |
| BACK-06 | **Contact Us page/form** | Footer "Contact Us" link points to `#` placeholder |
| BACK-07 | **Social media links** | Footer LinkedIn/Twitter/YouTube point to `#` placeholders |
| BACK-08 | **OG image** | `og:image` references `https://itai.edu/og-image.jpg` — this asset needs to be created |
| BACK-09 | **Real favicon** | No favicon defined in `<head>` yet |
| BACK-10 | **Progress tracking** | Learner progress bars and module completion tracking (learner portal) |
| BACK-11 | **AI-free submission verification** | Technical enforcement of No-AI policy referenced in T&C §3 |
| BACK-12 | **Localization** | Site is English-only; currency shown in USD and GBP |

---

## 13. Constraints

| Constraint | Detail |
|-----------|--------|
| No build tools | Site must remain openable as raw HTML; no `npm run build` |
| No frameworks | React, Vue, Angular, etc. are not permitted — vanilla JS only |
| No back-end | All features must work without a server (purely static) |
| CDN-only dependencies | No local copies of Tailwind/Font Awesome/Google Fonts; loaded from CDN |
| Consistent design system | All new pages/components must use `.glass-card`, `.btn-glass-solid`/`.btn-glass-outline`, `.badge`, and the colour tokens defined in §7.2 |
| Accessibility | Every code change must maintain WCAG 2.1 AA compliance |
| Reduced-motion | Any new animation must be wrapped in `@media (prefers-reduced-motion: no-preference)` |
| T&C link integrity | The `terms.html` link in the footer Support column must be present on every page |

---

## 14. Success Metrics

| Metric | Target | Measurement |
|--------|--------|-------------|
| Enrollment click-through rate | >5% of page visitors click "Enroll Now" | Analytics event on CTA button |
| Bounce rate (home page) | <60% | Page analytics |
| FAQ engagement | >30% of visitors open at least one FAQ | Scroll depth + click tracking |
| Mobile usability score | 100/100 | Google Search Console |
| Lighthouse Performance | ≥90 | Lighthouse CI |
| Lighthouse Accessibility | 100 | Lighthouse CI |
| Lighthouse SEO | ≥95 | Lighthouse CI |
| T&C page visits | Traceable from enrollment CTA | Analytics |

---

*This document is the single source of truth for ITAI.EDU website development. Any changes to pricing, policy, curriculum content, or design system must be reflected here first before being coded.*
