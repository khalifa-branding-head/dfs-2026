# Comprehensive Investigation Report: R1 Executive UI Design System & Aesthetic Elevation

**Explorer Agent**: `teamwork_preview_explorer_m1_2`  
**Target Milestone**: Milestone 2 (M2 / R1)  
**Date**: 2026-07-21  

---

## 1. Executive Summary

A comprehensive forensic audit of all 24 frontend React components and 11 inner page views across the Dubai FinTech Summit 2026 application was conducted. 

The audit reveals a systemic design token mismatch between the legacy dark-theme codebase (`#031116`, `#082028`, `#0c2730`, `#12E9E9`) and the **R1 Executive UI Design System** specification (`#F8FAFC` canvas, `#FFFFFF` cards, `#0F172A` headers, `#0284C7` Electric Blue and `#0D9488` Teal gradients, `border-slate-200/80 hover:border-[#0284C7]/50` glows, `shadow-[0_12px_40px_rgba(15,23,42,0.06)]` floating elevations).

Currently, the application relies on brute-force CSS overrides (`!important` rules in `src/styles/index.css`) to force light-mode rendering over hardcoded dark-mode component classes. This causes visual contrast defects, unstyled inline elements, and inconsistent section backgrounds.

Below is the complete, component-by-component analysis and exact transformation blueprint required to achieve luxury executive standard.

---

## 2. Key Findings & Design System Token Mapping

### 2.1 Design Tokens Specification (R1 Target vs. Current Code)

| Design System Token | R1 Executive UI Spec Target | Current Code Implementation | Gap & Required Action |
|---|---|---|---|
| **Canvas Background** | `#F8FAFC` (Slate-50) | `#031116` / `#082028` hardcoded in `Layout.jsx:7`, `AboutSummit.jsx:13`, `ImpactGlance.jsx:29`, `DiscussionTopics.jsx:198`, `StrategicThemes.jsx:60`, `FeaturedSpeakers.jsx:56`, `CuratedLeadership.jsx:52`, `GlobalCapitals.jsx:38`, `ExhibitNetworkGrow.jsx:62`, `FintechWorldCup.jsx:59`, `InTheNews.jsx:40`, `PassSelector.jsx:89`, `Agenda.jsx:190`, `Sponsors.jsx:6`, etc. | Replace hardcoded `#082028`/`#031116` background containers with clean `#F8FAFC` canvas background across all sections and pages. |
| **Card Background** | `#FFFFFF` | `bg-[#0c2730]/40`, `bg-[#04161c]/50`, `bg-[#0e2d39]/40`, `bg-[#0e3542]` dark glass panels across all bento cards. | Replace dark glass background utilities with clean white card surfaces (`bg-white`). |
| **Card Borders & Hover Glows** | `border-slate-200/80` base border, `hover:border-[#0284C7]/50` glow transition. | `border-white/[0.08]`, `border-white/10`, `border-[#BEC9CB]/10`, `hover:border-[#12E9E9]/40`. | Standardize all card borders to `border-slate-200/80` with hover glow transition `hover:border-[#0284C7]/50`. |
| **Card Elevation Shadows** | `shadow-[0_12px_40px_rgba(15,23,42,0.06)]` base elevation, `hover:shadow-[0_20px_45px_rgba(2,132,199,0.12)]`. | `shadow-[0_15px_35px_rgba(4,16,20,0.4)]`, `shadow-premium`, dark drop-shadows. | Replace heavy dark shadows with luxury executive floating shadows `shadow-[0_12px_40px_rgba(15,23,42,0.06)]`. |
| **Header Typography** | `#0F172A` (Slate-900) bold / extabold headers. | `text-white` hardcoded across headers in 20+ components. | Update section & card title text classes from `text-white` to `text-[#0F172A]`. |
| **Body & Muted Typography** | `#475569` (Slate-600) body text. | `text-[#6D8794]`, `text-[#BEC9CB]`, `text-brand-text-muted`. | Standardize body copy text classes to `text-[#475569]`. |
| **Metadata & Eyebrows** | `text-[10px]` / `text-xs`, `font-extrabold`, `tracking-[0.25em]`, `text-[#0284C7]`, uppercase. | Mixed tracking (`tracking-wider`, `tracking-widest`), mixed cyan `#12E9E9` and `#38BDF8`. | Standardize eyebrow pills to `text-[10px] font-black tracking-[0.25em] uppercase text-[#0284C7] bg-[#0284C7]/10 border border-[#0284C7]/20`. |
| **Brand Accent Gradients** | `#0284C7` (Electric Blue) to `#0D9488` (Teal). | `from-[#12E9E9] to-[#08BDF4]`, `from-[#12E9E9] via-[#08BDF4] to-white`. | Update all primary CTA buttons, highlight text clips, laser lines, and tab switches to `bg-gradient-to-r from-[#0284C7] to-[#0D9488]`. |

---

## 3. Comprehensive Component-by-Component Transformation Blueprint

### 3.1 Layout & Navigation Shell

1. **`src/components/Layout.jsx`**
   - **Line 7**: `className="flex flex-col min-h-screen bg-[#031116] text-white"`
   - **Required Change**: Replace `bg-[#031116] text-white` with `bg-[#F8FAFC] text-[#0F172A]`.

2. **`src/components/Header.jsx`**
   - **Lines 50-53**: Header scroll state applies dark glass `bg-[#082028]/75 backdrop-blur-md border-b border-[#BEC9CB]/15 shadow-lg shadow-[#082028]/40` and `bg-gradient-to-b from-[#082028]/95...`.
   - **Line 71, 107**: SVG logo has `<g className="text-white">` and `<g className="text-[#12E9E9]">`.
   - **Lines 131, 142**: Active nav indicator applies `#12E9E9`.
   - **Lines 167-169**: CTA button applies `bg-[#12E9E9] text-[#082028] hover:bg-[#08BDF4]`.
   - **Line 195**: Mobile menu applies `bg-[#082028]`.
   - **Required Change**: 
     - Light executive header glass: `bg-white/90 backdrop-blur-md border-b border-slate-200/80 shadow-[0_4px_20px_rgba(15,23,42,0.04)] text-[#0F172A]`.
     - Update SVG logo color to `#0F172A` with `#0284C7` accent brand mark.
     - Active nav pill: `bg-[#0284C7]/10 border border-[#0284C7]/30 text-[#0284C7]`.
     - CTA buttons: `bg-gradient-to-r from-[#0284C7] to-[#0D9488] text-white shadow-[0_4px_15px_rgba(2,132,199,0.25)]`.
     - Mobile menu overlay: `bg-white border-b border-slate-200 shadow-xl`.

3. **`src/components/Footer.jsx`**
   - **Line 19**: `bg-[#041014] text-white border-t border-white/[0.08]`
   - **Lines 25, 44, 50, 81, 98, 137**: `bg-[#082028]/60`, `bg-[#0c2730]`, `from-[#12E9E9] to-[#08BDF4]`, `text-[#BEC9CB]`, `text-[#12E9E9]`, `bg-[#02090b]`.
   - **Required Change**: Transform to executive footer structure:
     - Outer container: `bg-slate-900 text-white border-t border-slate-800` (or luxury light slate `bg-slate-100 text-[#0F172A] border-t border-slate-200/80`).
     - Newsletter bar: `bg-slate-800/80` or `bg-white border-b border-slate-200`.
     - Update headings to `#0F172A` (light) / `#FFFFFF` (dark footer option), accent headers to `text-[#0284C7] font-black tracking-widest uppercase`.
     - CTA submit button: `bg-gradient-to-r from-[#0284C7] to-[#0D9488] text-white`.

---

### 3.2 Homepage Section Components

4. **`src/components/HomeHero.jsx` & `src/components/HeroTypography.jsx`**
   - **Lines 9, 25, 32, 60, 62, 71, 81, 86, 91**: `bg-[#082028]`, `color: '#12E9E9'`, `from-[#12E9E9] to-[#08BDF4]`, `bg-[#041014]`, `color: '#38BDF8'`, `color: '#CBD5E1'`.
   - **Required Change**:
     - Maintain video hero contrast overlay while replacing turquoise accents (`#12E9E9`) with Electric Blue (`#0284C7`).
     - Pill badge: `text-[#0284C7]` with `drop-shadow-[0_2px_8px_rgba(2,132,199,0.3)]`.
     - Hero Line 2 typography: `color: '#0284C7'`, text shadow `0 0 35px rgba(2,132,199,0.5)`.
     - Button border & gradient fill: `from-[#0284C7] to-[#0D9488]`.
     - Patronage footer bar: `bg-slate-900/90 border-t border-slate-800`.

5. **`src/components/AboutSummit.jsx`**
   - **Line 13**: `bg-[#082028]`
   - **Lines 24, 31, 38, 41, 54, 69, 88, 91**: `bg-[#12E9E9]/10 text-[#12E9E9]`, `from-[#12E9E9] to-[#08BDF4]`, `text-[#BEC9CB]`, `text-[#6D8794]`, `bg-[#0e2d39]/40`, `from-[#12E9E9] to-[#08BDF4] text-[#082028]`.
   - **Required Change**:
     - Canvas: Change `bg-[#082028]` to `bg-[#F8FAFC]`.
     - Tag: `bg-[#0284C7]/10 text-[#0284C7] border border-[#0284C7]/20`.
     - Headline: `text-[#0F172A]` with gradient text `bg-gradient-to-r from-[#0284C7] to-[#0D9488] bg-clip-text text-transparent`.
     - Body text: `text-[#475569]`.
     - Highlights Cards: `bg-white border border-slate-200/80 rounded-xl shadow-[0_12px_40px_rgba(15,23,42,0.06)] hover:border-[#0284C7]/50`.
     - Button: `bg-gradient-to-r from-[#0284C7] to-[#0D9488] text-white shadow-[0_4px_20px_rgba(2,132,199,0.25)]`.

6. **`src/components/PartnerEcosystem.jsx`**
   - Already light mode compliant (`bg-[#F8FAFC]`, `bg-white`, `border-slate-200/80`, `shadow-[0_10px_30px_rgba(15,23,42,0.04)]`).
   - **Required Change**: Fine-tune card shadow to `shadow-[0_12px_40px_rgba(15,23,42,0.06)]` and hover border glow to `hover:border-[#0284C7]/50` for strict token alignment.

7. **`src/components/PartnerMatrix.jsx`**
   - **Lines 57, 62, 65, 68, 86, 88, 98, 101, 104, 110**: `bg-[#082028]`, `text-[#12E9E9]`, `bg-[#082028]/40 border-[#BEC9CB]/10`, `filter grayscale brightness-0 invert`.
   - **Required Change**:
     - Canvas: `bg-[#F8FAFC]`.
     - Section Header: `text-[#0F172A]`, description `text-[#475569]`.
     - Cards: `bg-white border border-slate-200/80 shadow-[0_12px_40px_rgba(15,23,42,0.06)] hover:border-[#0284C7]/50 hover:shadow-[0_20px_45px_rgba(2,132,199,0.12)]`.
     - Metadata tags & icons: `text-[#0284C7]`, `bg-[#0284C7]/10`.
     - Logos: `filter grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all`.

8. **`src/components/SponsorMarquee.jsx`**
   - Already light mode compliant (`bg-[#F8FAFC]`, `bg-white/80`, `border-slate-200`).
   - **Required Change**: Fine-tune logo cards shadow to `shadow-[0_12px_40px_rgba(15,23,42,0.06)]` and hover border glow to `hover:border-[#0284C7]/50`.

9. **`src/components/ImpactGlance.jsx`**
   - **Lines 29, 38, 42, 47, 60, 64, 82, 110, 116, 119, 126, 129**: `bg-[#082028]`, `text-[#12E9E9]`, `text-white`, `bg-[#0c2730]/40 border-white/[0.08]`, `bg-white/90 text-[#082028]`.
   - **Required Change**:
     - Canvas: `bg-[#F8FAFC]`.
     - Section Header: `text-[#0F172A]`, body `text-[#475569]`.
     - Video Card: `bg-white border border-slate-200/80 shadow-[0_12px_40px_rgba(15,23,42,0.06)] hover:border-[#0284C7]/50`.
     - Metric Cards: `bg-white border border-slate-200/80 shadow-[0_12px_40px_rgba(15,23,42,0.06)] hover:border-[#0284C7]/50 hover:shadow-[0_20px_45px_rgba(2,132,199,0.12)]`.
     - Counts: `text-3xl font-extrabold text-[#0F172A] group-hover:text-[#0284C7]`.

10. **`src/components/ProgrammeHub.jsx`, `StrategicThemes.jsx`, `DiscussionTopics.jsx`**
    - `ProgrammeHub.jsx`: Navigation bar is light mode compliant (`bg-[#F8FAFC]`, `text-[#0F172A]`, switch `from-[#0284C7] to-[#0D9488]`).
    - `DiscussionTopics.jsx`: **Line 198** has `bg-[#082028]`, **Line 229** has `bg-[#0c2730]/60 border border-white/[0.08]`, **Line 269** has `bg-[#0c2730]/40`, **Line 279** has `text-[#12E9E9]`.
    - `StrategicThemes.jsx`: **Line 60** has `bg-[#082028]`, **Line 105** has `bg-[#0c2730]/40 border-white/[0.08]`, **Line 113** has `text-[#12E9E9]`.
    - **Required Change**:
      - Remove dark canvas backgrounds (`bg-[#082028]`) so components seamlessly integrate with `ProgrammeHub`'s `#F8FAFC` canvas.
      - Convert cards in both components to: `bg-white border border-slate-200/80 shadow-[0_12px_40px_rgba(15,23,42,0.06)] hover:border-[#0284C7]/50 hover:shadow-[0_20px_45px_rgba(2,132,199,0.12)]`.
      - Titles: `text-[#0F172A] group-hover:text-[#0284C7]`.
      - Descriptions: `text-[#475569]`.
      - Eyebrows: `text-[#0284C7] bg-[#0284C7]/10 border border-[#0284C7]/20`.
      - Sub-track highlights checklist: `text-[#0F172A]` with checkmark `<CheckCircle2 className="w-3.5 h-3.5 text-[#0D9488]" />`.

11. **`src/components/FeaturedSpeakers.jsx`**
    - **Lines 56, 67, 71, 77, 94, 100, 118, 175, 178, 184, 188, 204**: `bg-[#082028]`, `text-[#12E9E9]`, `bg-[#0c2730]/40 border-white/[0.08]`, `glowColor: '#12E9E9'`, `from-[#12E9E9] to-[#08BDF4]`.
    - **Required Change**:
      - Canvas: `bg-[#F8FAFC]`.
      - Header: `text-[#0F172A]`, navigation arrows `border-slate-200 bg-white text-slate-700 hover:border-[#0284C7] hover:text-[#0284C7]`.
      - Speaker Cards: `bg-white border border-slate-200/80 shadow-[0_12px_40px_rgba(15,23,42,0.06)] hover:border-[#0284C7]/50 hover:shadow-[0_20px_45px_rgba(2,132,199,0.12)]`.
      - Speaker Name: `text-[#0F172A] group-hover:text-[#0284C7]`.
      - Speaker Role: `text-[#475569]`.
      - Company & Country Badge: `text-[#0284C7] border-[#0284C7]/30 bg-[#0284C7]/10`.
      - Diamond Slice SVG accent: `text-[#0284C7]`, glow color: `#0284C7`.
      - View All CTA: `bg-gradient-to-r from-[#0284C7] to-[#0D9488] text-white shadow-[0_4px_20px_rgba(2,132,199,0.25)]`.

12. **`src/components/CuratedLeadership.jsx`**
    - **Lines 52, 63, 68, 70, 75, 82, 101, 115, 123**: `bg-[#082028]`, `text-[#12E9E9]`, `from-[#12E9E9] via-[#08BDF4] to-white`, `bg-[#0c2730]/40 border-white/[0.08]`.
    - **Required Change**:
      - Canvas: `bg-[#F8FAFC]`.
      - Tag: `bg-[#0284C7]/10 text-[#0284C7] border border-[#0284C7]/20`.
      - Title: `text-[#0F172A]` with gradient `from-[#0284C7] to-[#0D9488]`.
      - Body: `text-[#475569]`.
      - Bento Cards: `bg-white border border-slate-200/80 shadow-[0_12px_40px_rgba(15,23,42,0.06)] hover:border-[#0284C7]/50 hover:shadow-[0_20px_45px_rgba(2,132,199,0.12)]`.
      - Sector Stats: `text-[#0284C7] group-hover:text-[#0F172A]`.

13. **`src/components/GlobalCapitals.jsx`**
    - **Lines 38, 48, 53, 55, 60, 72, 74, 85**: `bg-[#082028]`, `text-[#12E9E9]`, `from-[#12E9E9] via-[#08BDF4] to-white`, `bg-[#0c2730]/40 border-white/[0.08]`.
    - **Required Change**:
      - Canvas: `bg-[#F8FAFC]`.
      - Header: `text-[#0F172A]`, description `text-[#475569]`.
      - Filter Pills: `activeRegion === reg.id ? 'bg-[#0284C7] text-white shadow-[0_4px_15px_rgba(2,132,199,0.25)]' : 'bg-white text-slate-600 border border-slate-200/80'`.
      - Map Container Card: `bg-slate-900 border border-slate-800 shadow-[0_12px_40px_rgba(15,23,42,0.12)]`.
      - City Markers & Tooltip: `#0284C7` pulsing ring, tooltip `bg-slate-900/95 border border-[#0284C7]/40 text-white`.

14. **`src/components/CommercialHub.jsx`, `ExhibitNetworkGrow.jsx`, `FintechWorldCup.jsx`, `InTheNews.jsx`**
    - `CommercialHub.jsx`: Wrapper bar is light mode (`bg-[#F8FAFC]`, `text-[#0F172A]`, tabs `from-[#0284C7] to-[#0D9488]`).
    - `ExhibitNetworkGrow.jsx`: **Line 62** has `bg-[#082028]`, **Line 86** has `bg-[#0c2730]/60`, **Line 109** has `bg-[#0c2730]/40 border-white/[0.08]`.
    - `FintechWorldCup.jsx`: **Line 59** has `bg-[#082028]`, **Line 95** has `bg-[#0c2730]/60`, **Line 118** has `bg-[#0c2730]/40 border-white/[0.08]`.
    - `InTheNews.jsx`: **Line 40** has `bg-[#082028]`, **Line 85** has `bg-[#0c2730]/40 border-white/[0.08]`.
    - **Required Change**:
      - Remove internal dark canvas backgrounds (`bg-[#082028]`).
      - Metrics strip: `bg-white border border-slate-200/80 shadow-[0_12px_40px_rgba(15,23,42,0.06)]`, values `text-[#0F172A]`, labels `text-[#475569]`.
      - Bento cards: `bg-white border border-slate-200/80 shadow-[0_12px_40px_rgba(15,23,42,0.06)] hover:border-[#0284C7]/50 hover:shadow-[0_20px_45px_rgba(2,132,199,0.12)]`.
      - Banner bars: `bg-gradient-to-r from-sky-900 via-slate-900 to-sky-950 text-white border border-[#0284C7]/30 shadow-[0_10px_30px_rgba(2,132,199,0.1)]`.
      - Buttons: `bg-gradient-to-r from-[#0284C7] to-[#0D9488] text-white shadow-[0_4px_20px_rgba(2,132,199,0.25)]`.

15. **`src/components/PassSelector.jsx`**
    - **Lines 89, 99, 104, 108, 114, 118, 131, 157, 195, 209, 221**: `bg-[#082028]`, `text-[#12E9E9]`, `bg-[#0c2730]`, `bg-[#0c2730]/40 border-white/[0.08]`, `from-[#0e3542] via-[#0c2730] to-[#0c2730] border-[#12E9E9]`.
    - **Required Change**:
      - Canvas: `bg-[#F8FAFC]`.
      - Header: `text-[#0F172A]`, description `text-[#475569]`.
      - Switch Toggle: `bg-slate-200/80 p-1.5 border border-slate-300/60`, active button `bg-gradient-to-r from-[#0284C7] to-[#0D9488] text-white`.
      - Standard Tier Cards: `bg-white border border-slate-200/80 shadow-[0_12px_40px_rgba(15,23,42,0.06)] hover:border-[#0284C7]/50 hover:shadow-[0_20px_45px_rgba(2,132,199,0.12)]`.
      - VIP Recommended Card: `bg-gradient-to-b from-sky-50/80 via-white to-white border-2 border-[#0284C7] shadow-[0_20px_50px_rgba(2,132,199,0.18)]`.
      - Tier Prices & Titles: `text-[#0F172A]`.
      - Feature Items: `text-[#475569]` with checkmarks `<CheckCircle2 className="w-3.5 h-3.5 text-[#0284C7]" />`.
      - Standard Button: `bg-slate-900 text-white hover:bg-[#0284C7]`. VIP Button: `bg-gradient-to-r from-[#0284C7] to-[#0D9488] text-white shadow-[0_4px_20px_rgba(2,132,199,0.3)]`.

---

### 3.3 Inner Page Components

16. **`src/pages/About.jsx`, `Agenda.jsx`, `Speakers.jsx`, `Sponsors.jsx`, `Exhibitors.jsx`, `Registration.jsx`, `Blog.jsx`, `Media.jsx`, `FAQs.jsx`, `Privacy.jsx`, `Terms.jsx`**
    - All inner pages currently specify dark canvas or inherit dark layout defaults (`text-white`, `bg-[#082028]`, `bg-[#04161c]/50`, `border-brand-teal/10`).
    - **Required Change**:
      - All page hero sections: `bg-[#F8FAFC]`, titles `text-[#0F172A]`, subtitles/copy `text-[#475569]`, eyebrows `text-[#0284C7] font-black tracking-[0.25em] uppercase`.
      - Grid / bento cards: `bg-white border border-slate-200/80 shadow-[0_12px_40px_rgba(15,23,42,0.06)] hover:border-[#0284C7]/50`.
      - Filter buttons (in `Speakers.jsx` and `Agenda.jsx`): Active button `bg-[#0284C7] text-white shadow-[0_4px_15px_rgba(2,132,199,0.25)]`, inactive button `bg-white text-slate-600 border border-slate-200/80 hover:border-[#0284C7]/40`.
      - Accordion items (in `FAQs.jsx` and `Agenda.jsx`): `bg-white border border-slate-200/80 shadow-[0_12px_40px_rgba(15,23,42,0.06)]`, active header `text-[#0284C7]`, answer body `text-[#475569]`.
      - Registration Form Card (`Registration.jsx`): `bg-white border border-slate-200/80 shadow-[0_12px_40px_rgba(15,23,42,0.06)]`, inputs `bg-slate-50 border border-slate-300 text-[#0F172A] focus:border-[#0284C7]`, submit button `bg-gradient-to-r from-[#0284C7] to-[#0D9488] text-white shadow-[0_4px_20px_rgba(2,132,199,0.3)]`.

---

## 4. CSS File & Design Tokens Refactoring

1. **`src/styles/tokens.css`**
   - Update design token variables:
     - `--dfs-color-bg-dark: #F8FAFC;`
     - `--dfs-color-accent-cyan: #0284C7;`
     - `--dfs-color-primary-blue: #0D9488;`
     - `--dfs-color-text-dark: #0F172A;`
     - `--dfs-color-text-muted: #475569;`
     - `--dfs-shadow-lg: 0 12px 40px rgba(15, 23, 42, 0.06);`

2. **`src/styles/index.css`**
   - Update Tailwind v4 `@theme` configuration:
     - `--color-brand-midnight: #0F172A;`
     - `--color-brand-electric: #0284C7;`
     - `--color-brand-teal: #0D9488;`
     - `--color-brand-cyan: #0284C7;`
     - `--color-brand-dark: #F8FAFC;`
     - `--color-text-muted: #475569;`
   - Clean up brute-force `!important` light-mode overrides by standardizing root and body defaults to `#F8FAFC` canvas and `#0F172A` text.

---

## 5. Implementation Roadmap for Milestone 2 (M2 / R1)

1. **Step 1: Token & CSS Layer Upgrade** — Update `src/styles/tokens.css` and `src/styles/index.css` with clean R1 design system values.
2. **Step 2: Shell Layout Refactoring** — Upgrade `src/components/Layout.jsx`, `Header.jsx`, and `Footer.jsx` to executive light mode styling.
3. **Step 3: Homepage Components Overhaul** — Refactor `AboutSummit`, `PartnerMatrix`, `ImpactGlance`, `DiscussionTopics`, `StrategicThemes`, `FeaturedSpeakers`, `CuratedLeadership`, `GlobalCapitals`, `ExhibitNetworkGrow`, `FintechWorldCup`, `InTheNews`, `PassSelector` to `#F8FAFC` canvas and `#FFFFFF` cards with `shadow-[0_12px_40px_rgba(15,23,42,0.06)]` and `border-slate-200/80 hover:border-[#0284C7]/50`.
4. **Step 4: Inner Pages Refactoring** — Refactor `About`, `Agenda`, `Speakers`, `Sponsors`, `Exhibitors`, `Registration`, `Blog`, `Media`, `FAQs`, `Privacy`, `Terms`.
5. **Step 5: Build Verification & Forensic Audit** — Execute `npm run build` to verify 0 build errors/warnings, and verify 100% copy preservation.
