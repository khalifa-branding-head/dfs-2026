# Project Context — Dubai FinTech Summit 2026 UI Overhaul

## Architecture & Framework
- React 18, Vite 7, Tailwind CSS 4, Framer Motion 12, Lucide React.
- MPA setup: 12 HTML pages (`index.html`, `about.html`, `speakers.html`, `agenda.html`, `sponsors.html`, `exhibitors.html`, `registration.html`, `blog.html`, `media.html`, `faqs.html`, `privacy.html`, `terms.html`). `src/main.jsx` handles page dispatch.

## Key Requirements & Token Mapping
- **Canvas**: `#F8FAFC` (Slate canvas)
- **Cards**: `#FFFFFF` (Executive white card background)
- **Borders**: `border-slate-200/80 hover:border-[#0284C7]/50`
- **Shadows**: `shadow-[0_12px_40px_rgba(15,23,42,0.06)]`
- **Headers**: `#0F172A` (Slate 900)
- **Eyebrows / Metadata**: `text-[10px] font-black tracking-[0.25em] text-[#0284C7] uppercase`
- **Accents**: Electric Blue `#0284C7` & Teal `#0D9488` gradients
- **Section Padding**: `py-16 md:py-20` (64px mobile, 80px desktop) across all sections
- **PartnerEcosystem**: `grid-cols-1 sm:grid-cols-2 md:grid-cols-4` (2x4 grid on viewports ≥ 768px), link target `/sponsors.html`
- **SponsorMarquee**: card height `h-14 md:h-16`

## Target Components for Overhaul
- Styling: `src/styles/tokens.css`, `src/styles/index.css`, `src/styles/global.css`, `src/styles/art-direction.css`, `src/styles/premium-components.css`
- Core Layout: `src/components/Layout.jsx`, `Header.jsx`, `Footer.jsx`
- Homepage & Inner Components:
  - `HomeHero.jsx`
  - `AboutSummit.jsx`
  - `PartnerMatrix.jsx`
  - `ImpactGlance.jsx`
  - `DiscussionTopics.jsx`
  - `StrategicThemes.jsx`
  - `FeaturedSpeakers.jsx`
  - `CuratedLeadership.jsx`
  - `GlobalCapitals.jsx`
  - `ExhibitNetworkGrow.jsx`
  - `FintechWorldCup.jsx`
  - `InTheNews.jsx`
  - `PassSelector.jsx`
  - `PartnerEcosystem.jsx`
  - `SponsorMarquee.jsx`
  - `ProgrammeHub.jsx`
  - Inner Pages (`Agenda.jsx`, `Sponsors.jsx`, `About.jsx`, `Speakers.jsx`, `Exhibitors.jsx`, `Registration.jsx`, `Blog.jsx`, `Media.jsx`, `Faqs.jsx`, `Privacy.jsx`, `Terms.jsx`)

## Findings Log
- [2026-07-21] Milestone 1 completed by 3 Explorers (Architecture, Design System, Spatial Density).
- [2026-07-21] Synthesized findings into master implementation plan for M2 and M3.
