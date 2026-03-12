# Zambrano's Complete Auto Center — Design System

> **Project:** Zambrano's Complete Auto Center
> **Style:** Soft UI Evolution + Trust & Authority
> **Generated:** 2026-03-12
> **Category:** Local Auto Service / Veteran-Owned Business

---

## Brand Identity

- **Business Name:** Zambrano's Complete Auto Center
- **Address:** 1017 Hamilton Ave, Trenton, NJ 08629
- **Phone:** (609) 396-8417
- **Rating:** 4.4 Stars (249 Reviews on Google)
- **Veteran-Owned:** Yes — primary trust signal
- **Established:** 1997
- **Hours:** Mon–Fri 8:30 AM – 6:00 PM | Sat 8:30 AM – 2:00 PM | Sun Closed

---

## Color Palette

| Role | Hex | Tailwind Token | Usage |
|------|-----|----------------|-------|
| Zambrano Red | `#E31E24` | `--color-primary` | CTAs, accents, brand marks |
| Black | `#1A1A1A` | `--color-dark` | Backgrounds, headers, nav |
| White | `#FFFFFF` | `--color-white` | Backgrounds, text on dark |
| Light Gray | `#F5F5F5` | `--color-surface` | Card backgrounds, sections |
| Medium Gray | `#6B7280` | `--color-muted` | Body text secondary |
| Dark Gray | `#374151` | `--color-text` | Body text primary |

### Soft UI Specific
- Card shadows: `6px 6px 12px #d1d1d1, -6px -6px 12px #ffffff`
- Pressed state: `inset 4px 4px 8px #d1d1d1, inset -4px -4px 8px #ffffff`
- Border radius: 16px (cards), 12px (buttons), 9999px (badges)

---

## Typography

| Role | Font | Weights | Usage |
|------|------|---------|-------|
| Display/Headings | **Montserrat** | 600, 700, 800, 900 | H1–H4, hero text, section titles |
| Body/UI | **Roboto** | 300, 400, 500, 700 | Paragraphs, labels, buttons |

### Type Scale
| Element | Size | Weight | Line Height |
|---------|------|--------|-------------|
| H1 (Hero) | 56px / 3.5rem | 900 | 1.1 |
| H2 (Section) | 40px / 2.5rem | 800 | 1.2 |
| H3 (Card Title) | 24px / 1.5rem | 700 | 1.3 |
| H4 (Subtitle) | 20px / 1.25rem | 600 | 1.4 |
| Body | 16px / 1rem | 400 | 1.6 |
| Small | 14px / 0.875rem | 400 | 1.5 |
| Caption | 12px / 0.75rem | 500 | 1.4 |

---

## Component Specs

### Buttons
- **Primary (Red):** bg-[#E31E24], white text, rounded-xl, px-8 py-4, font-bold, hover: brightness-110 + translateY(-1px)
- **Secondary (Outline):** border-2 border-[#E31E24], text-[#E31E24], hover: bg-[#E31E24] text-white
- **Dark:** bg-[#1A1A1A], white text, hover: bg-[#E31E24]

### Cards (Soft UI)
- bg-[#F5F5F5], rounded-2xl, p-6–8
- Shadow: `shadow-[6px_6px_12px_#d1d1d1,-6px_-6px_12px_#ffffff]`
- Hover: translateY(-4px), shadow intensifies

### Badges
- Rating: bg-[#E31E24]/10 text-[#E31E24] rounded-full px-4 py-1
- Status (Open): bg-green-500/10 text-green-600 rounded-full
- Status (Closed): bg-red-500/10 text-red-600 rounded-full
- Veteran: bg-blue-900/10 text-blue-900 rounded-full

---

## Animation Rules (Framer Motion)
- Entrance: `{ opacity: 0, y: 30 }` → `{ opacity: 1, y: 0 }` duration 0.6s
- Stagger children: 0.1s delay
- Hover cards: `scale: 1.02, y: -4`
- Button press: `scale: 0.98`
- Respect `prefers-reduced-motion`

---

## Anti-Patterns
- NO emojis as icons — use Lucide React only
- NO purple/pink gradients
- NO playful/casual tone — trust & authority
- NO placeholder images in production
- NO missing cursor-pointer on clickables
- NO instant state changes — always transition 200ms

---

## Page Architecture

### Homepage
1. Hero (Veteran badge + 4.4★ rating + dual CTAs)
2. Trust Bar (Financing brands)
3. Core Services (Priority repair grid)
4. Commercial Fleet (Bento box)
5. Why Choose Us (4 pillars)
6. Maintenance Services
7. Testimonials (Google reviews)
8. Service Area (Map + Contact)
9. Final CTA

### Services Page
- Priority 1: Suspension, Alignment, AC, Brakes
- Priority 2: Tires (Bridgestone, Firestone, Fuzion)
- Priority 3: Oil, Filters, Batteries

### Financing Page
- Primary: CFNA/Firestone (6 Mo No Interest)
- Secondary: American First Finance ($5K approvals)
