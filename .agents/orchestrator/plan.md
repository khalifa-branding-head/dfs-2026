# Dubai FinTech Summit 2026 UI Overhaul — Project Plan

## Master Objectives
Overhaul the frontend UI design & layout for Dubai FinTech Summit 2026 according to `ORIGINAL_REQUEST.md`.

### R1. Executive UI Design System & Aesthetic Elevation
- **Canvas & Elevation**: Deep slate canvas (`#F8FAFC`) paired with multi-layered executive white cards (`#FFFFFF`), subtle ambient glow borders (`border-slate-200/80 hover:border-[#0284C7]/50`), and soft floating shadows (`shadow-[0_12px_40px_rgba(15,23,42,0.06)]`).
- **Typography & Scale**: Crisp typography hierarchy with bold Slate 900 headers (`#0F172A`), uppercase letter-spaced metadata tracking, and clear subtext readability.
- **Accents & Laser Sweep**: Electric Blue (`#0284C7`) and Teal (`#0D9488`) gradient highlights, interactive 3D card tilts, and smooth hover state sweeps.

### R2. Responsive Layout & Spatial Density Polish
- Optimize component vertical footprints and padding (`py-16 md:py-20`) to eliminate awkward gaps while preserving 100% of event text, speaker profiles, and sponsor logos.
- Refine logo framing in `PartnerEcosystem` and `SponsorMarquee` for balanced scale, optical centering, and high-density grid symmetry.

### Acceptance Criteria
1. Production build (`npm run build`) compiles cleanly with 0 warnings or errors.
2. 100% of official summit copy, speaker profiles, metrics, and sponsor logos remain intact without truncation.
3. UI layout displays responsive visual excellence across desktop, tablet, and mobile viewports.

---

## Milestone Breakdown

### Milestone 1: Codebase Investigation & Audit
- **Objective**: Explore the repo structure, locate all components (homepage sections, inner pages, design tokens, CSS/Tailwind configs, partner ecosystem, sponsor marquee), verify existing build status, and map requirements to target files.
- **Assigned Subagent**: `teamwork_preview_explorer` (Explorer 1)

### Milestone 2: Executive UI Design System & Design Tokens Overhaul
- **Objective**: Implement design tokens, palette variables, executive cards, floating shadows, typography hierarchy, gradient highlights, and hover sweeps across components.
- **Assigned Subagent**: `teamwork_preview_worker` (Worker 1)

### Milestone 3: Spatial Density, Responsive Layout & Partner Framing Polish
- **Objective**: Optimize vertical padding (`py-16 md:py-20`), eliminate awkward gaps, refine logo framing in `PartnerEcosystem` and `SponsorMarquee`, enforce high-density grid symmetry, and refine mobile/tablet viewports.
- **Assigned Subagent**: `teamwork_preview_worker` (Worker 2)

### Milestone 4: Verification & Forensic Audit Gating
- **Objective**: Validate clean compilation (`npm run build` with 0 warnings/errors), verify 100% content/copy/logos preserved, conduct adversarial checks, run forensic audit for integrity.
- **Assigned Subagents**: `teamwork_preview_reviewer` (Reviewer 1 & 2), `teamwork_preview_challenger` (Challenger 1), `teamwork_preview_auditor` (Auditor 1)
