# Launch Readiness & Production Validation Playbook
## Integration Checklists, Deployment Sequence, and Rollback Procedures

This document specifies the validation criteria, pre-launch checklist, deployment routing, and contingency rollback procedures for the Dubai FinTech Summit website.

---

## 1. Pre-Launch Acceptance Checklists

Before promoting the release build to the production server edge, the engineering team must execute and sign off on the following acceptance checkpoints:

### A. Functional Acceptance Checks
* [ ] **CMS Dynamic Sync**: Verify that Speakers CPT mapping accurately hydra-populates to the `/speakers.html` page grid.
* [ ] **Agenda Tab Navigation**: Verify that the Day 1 / Day 2 navigation tabs correctly toggle and display respective sessions without broken links.
* [ ] **FAQ Accordion folding**: Verify that the FAQ folding panels expand dynamic-calculated heights via `.scrollHeight` script bindings.
* [ ] **Forms Integration**: Verify HubSpot embedded IFrames correctly load inside the `/registration.html` container and submit fields to the CRM logs.
* [ ] **File Downloads**: Verify that the PDF brochure download buttons inside the Media Center trigger downloads without 404 errors.

### B. Accessibility Compliance (WCAG 2.2 AA)
* [ ] **Keyboard Nav Routing**: Confirm that pressing `Tab` navigates logically through the header, page landmarks, and footer.
* [ ] **Skip navigation**: Verify skip link bypasses navigation and places focus directly onto `#main-content`.
* [ ] **Aria-Expanded attributes**: Verify that hamburger menus and FAQs correctly update `aria-expanded="true"` and `aria-expanded="false"` states.
* [ ] **Contrast Verification**: Verify that body texts and background gradients meet the WCAG minimum contrast ratio requirement of `4.5:1` (and headings meet `3:1`).

### C. Performance & Core Web Vitals Checks
* [ ] **Mobile Speed Score**: Minimum Mobile Lighthouse Performance Score of `90/100`.
* [ ] **LCP (Largest Contentful Paint)**: Capped below `2.5s` on mobile connections.
* [ ] **CLS (Cumulative Layout Shift)**: Less than `0.1` shift points across all templates.
* [ ] **Image Compressions**: Verify that no assets in `/src/assets/images/` exceed the `300KB` ceiling limit, and all are formatted as WebP/AVIF.

---

## 2. Production Deployment Sequence

Deployment to the production edge network must follow a strict, automated CI pipeline:

```
[Local/Staging Build Success]
             │
             ▼
[Git Push to 'release/v*'] ──► Triggers Github Actions CI pipeline
             │
             ▼
[Automated Linters & Unit Tests]
             │
             ▼
[Vite Bundler Compile] ──► Generates minified output bundles (dist/)
             │
             ▼
[Artifact Push to Cloudflare Pages] ──► Deploys static files to edge CDN
             │
             ▼
[CMS Webhook Cache Purge] ──► Invalidates old edge page caches
```

### Pre-Deployment Checks
1. Ensure the `develop` branch is merged into `release/v*` branch.
2. Run `npm run build` locally to confirm zero compile errors.
3. Verify that environment variables (`HUBSPOT_PORTAL_ID`, etc.) are configured.

---

## 3. Caching & CDN Validation

* **Rule**: Edge Network Cache Purges must be automated via webhooks upon CMS content updates.
* **Header checks**: Verify output bundles return:
  `Cache-Control: public, max-age=31536000, immutable` for static JS/CSS assets.
* **Origin Shielding**: Ensure Cloudflare WAF policies are active to prevent direct access to the origin server.

---

## 4. Rollback & Contingency Playbook

In the event of critical pre-launch failure (e.g. broken HubSpot fields, payment gateway routing failures, script compilation errors):

### Rollback Process
1. **Rollback Action**: Immediately trigger Github Actions redeployment of the previous successful release tag (e.g. `v1.2.0-stable`).
2. **CDN Purge**: Force global "Purge Everything" cache invalidation on Cloudflare's dashboard.
3. **Status Check**: Verify page performance values and HubSpot logs return normal operations within `5 minutes`.
4. **Diagnostic Hold**: Halt all deployment queues and freeze the repository until a root-cause autopsy is conducted.
