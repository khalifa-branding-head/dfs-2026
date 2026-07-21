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

## Target Components Overhauled
- Styling: `src/styles/tokens.css`, `src/styles/index.css`, `src/styles/global.css`, `src/styles/art-direction.css`, `src/styles/premium-components.css`, `src/components/speakers.css`
- Core Layout: `src/components/Layout.jsx`, `Header.jsx`, `Footer.jsx`
- Homepage & Inner Components:
  - `HomeHero.jsx`, `HeroTypography.jsx`, `AboutSummit.jsx`, `PartnerMatrix.jsx`, `ImpactGlance.jsx`, `DiscussionTopics.jsx`, `StrategicThemes.jsx`, `FeaturedSpeakers.jsx`, `CuratedLeadership.jsx`, `GlobalCapitals.jsx`, `ExhibitNetworkGrow.jsx`, `FintechWorldCup.jsx`, `InTheNews.jsx`, `PassSelector.jsx`, `PartnerEcosystem.jsx`, `SponsorMarquee.jsx`, `ProgrammeHub.jsx`, `PartnerShowcase.jsx`
  - 11 Inner Pages (`Agenda.jsx`, `Sponsors.jsx`, `About.jsx`, `Speakers.jsx`, `Exhibitors.jsx`, `Registration.jsx`, `Blog.jsx`, `Media.jsx`, `Faqs.jsx`, `Privacy.jsx`, `Terms.jsx`)
  - 12 HTML Entry Files (`index.html`, `about.html`, `speakers.html`, etc.) updated with `#F8FAFC` pre-hydration fallback wrappers.

## Gate Verification & Audit Results
- `npm run build`: 0 warnings, 0 errors.
- Reviewer 1 (R1): APPROVE.
- Reviewer 2 (R2): APPROVE.
- Challenger 1: PASS (100% content preserved).
- Challenger 2: PASS (all 12 page routes and link targets verified).
- Forensic Auditor: CLEAN (0 integrity violations, 0 cheating).
