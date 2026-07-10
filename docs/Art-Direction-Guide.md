# Phase 5 — Art Direction Guide
## Brand Personality, Material Language, and Visual Execution Guidelines

This guide defines the visual language, photography direction, material depth hierarchies, and layout rules for the Dubai FinTech Summit. It acts as the creative constitution for frontend developers and UI designers.

---

## 1. Brand Personality Core

The DFS visual style is built on four core pillars:

* **Sovereign Trust & Institution**: Confident, solid, and authoritative layout spacing, referencing DIFC's government-backed prestige.
* **Refined Luxury**: Elegant editorial typography, spacious margins, and controlled color usage.
* **Modern Innovation**: Quiet, tech-forward accents like electric blue glows and razor-sharp border details.
* **Global Influence**: Narrative-driven photography highlighting world leaders, global delegates, and the Dubai skyline.

---

## 2. Material Language & Surface Hierarchy

Rather than placing glass overlays everywhere, Phase 5 establishes a structured **Material Surface Hierarchy** to communicate depth:

| Material Name | Visual Description | Intent / Use Case |
| :--- | :--- | :--- |
| **Editorial Paper** | Pure white (`#ffffff`), flat matte surface, no border, sharp corners. | Primary page backdrop, reading containers, press releases. |
| **Frosted Glass** | White background with transparency (`rgba(255,255,255,0.7)`), backdrop blur (`12px`), thin border (`rgba(255,255,255,0.3)`). | Fixed sticky header navbar. |
| **Premium Metal** | Semi-glossy dark metallic steel. | Dark CTA overlays, primary button background. |
| **Ambient Light** | Soft radial gradient glow (`radial-gradient(circle, rgba(18,233,233,0.06) 0%, transparent 70%)`). | Backdrop lighting behind key statistics and hero text. |
| **Soft Shadow** | Deep, highly diffused shadow (`0 20px 40px rgba(0,0,0,0.03)`). | Standard grid cards. |
| **Elevated Surface** | Lifted shadow on hover (`0 30px 60px rgba(0,0,0,0.08)`). | Hover states for speaker and sponsor blocks. |

---

## 3. Background Treatments & Ambient Lighting

* **Color Palette Limits**: Primary Midnight Blue (`#020381`), Electric Blue (`#2874fc`), and Accent Teal/Cyan (`#12E9E9`) are used as focus strokes and light source highlights only.
* **Negative Space Rule**: Section blocks must preserve generous margins (`--dfs-space-section: 88px` on desktop) to ensure content can "breathe." Overcrowding information is prohibited.

---

## 4. Photography Direction & crops

To project premium editorial authority:

* **Speaker Portraits**: Must use high-contrast, professional executive headshots. Grayscale portraits with color overlays are permitted if they follow a unified corporate look. Backgrounds must be neutral or metallic.
* **Skyline & Architecture**: Focus on Dubai's iconic financial district (DIFC) featuring clean perspective angles, morning/golden-hour lighting, and generous sky whitespace.
* **Networking & Venues**: Focus on authentic, unposed moments of collaboration, global representation, and high-energy summit stages. Avoid cheesy clip-art or generic stock photography.

---

## 5. Iconography Principles

All UI vector symbols must follow these strict criteria:
* **Stroke Width**: Standardized outline vectors with a stroke width of exactly `1.5px`.
* **Geometry**: Sharp corners, non-filled geometry, and clean line work.
* **Sizing bounds**: Standard sizes set to `24px` for navigation elements and `32px` for feature/content blocks.
