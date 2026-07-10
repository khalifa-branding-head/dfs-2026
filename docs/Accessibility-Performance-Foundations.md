# Accessibility & Performance Foundations
## Compliance Implementation and Edge Caching Configurations

This document specifies the keyboard navigation outlines, touch target sizes, ARIA dynamic notifications, image compression rules, lazy loading configurations, and Cloudflare caching policies for the Dubai FinTech Summit website.

---

## 1. Accessibility Foundations

To achieve full compliance with WCAG 2.2 AA standards, developers must enforce the following parameters during component integration:

### Skip Navigation Link
* **Code Spec**: A skip link must be placed as the first element inside the `<body>` element on every template:
  ```html
  <a href="#main-content" class="dfs-skip-link">Skip to main content</a>
  ```
* **Visual Behavior**: Hidden from sight by default; appears at the top left of the screen with visible outline when keyboard focus is received.

### Keyboard Focus Outline
* **Rule**: Do not hide default browser outlines. All focusable elements (anchors, buttons, inputs) must display a clear focus border on keyboard interaction:
  ```css
  a:focus-visible, button:focus-visible {
    outline: 3px solid var(--dfs-color-accent-cyan);
    outline-offset: 3px;
  }
  ```

### Modal Focus Traps (Search & Accordions)
* **Rule**: When search overlays or session detail modals are active, focus must be trapped within the modal container.
* **Tabbing Route**: Pressing `Tab` at the last focusable element in the modal must loop back to the first focusable element. Pressing `Escape` must close the modal and return focus to the trigger button.

### ARIA Status Announcements
* **Form Submissions**: When HubSpot form actions are in progress, status messages must be announced dynamically to screen-readers using:
  ```html
  <div class="dfs-form__status" aria-live="polite" id="form-status">
    Form submission successful.
  </div>
  ```

---

## 2. Performance Foundations

To optimize page speeds and satisfy Core Web Vitals targets, the following performance rules are mandated:

### Image & Media Optimizations
* **Format**: All static media assets must use optimized **WebP** or **AVIF** formats. Raster PNG and JPEG files are prohibited on production builds.
* **Sizing Bounds**: Banners must not exceed `2560px` width; thumbnails must not exceed `400px` width. Max file size is capped at `300KB` for hero banners and `50KB` for logos.
* **HTML Loading Attribute**: All non-hero images must include:
  ```html
  <img src="image.webp" loading="lazy" decoding="async" alt="Description">
  ```

### Caching & Bundle Optimization
* **Vite Compilations**: Stylesheets and JS scripts are bundled, minified, and output with unique hash names (e.g. `index.BGb4lBEN.css`) to support aggressive browser caching.
* **Local Web Fonts**: Custom font woff2 files must carry long-term caching headers (`Cache-Control: public, max-age=31536000, immutable`) on the origin server.

---

## 3. Cloudflare Edge Network Cache Rules

To protect the server origin and ensure fast load times during summit traffic surges, the following edge caching rules must be configured:

1. **Static Assets Caching**:
   - Matches: `/wp-content/themes/custom-theme/assets/*` (CSS, JS, Fonts).
   - Rule: Edge Cache TTL = 1 Month; Browser Cache TTL = 1 Month.
2. **HTML Page Caching**:
   - Matches: `/about/*`, `/speakers/*`, `/sponsors/*`.
   - Rule: Edge Cache TTL = 2 Hours; bypass cache for logged-in admin sessions.
3. **WAF Cap Rules**:
   - Whitelist the staging pipeline IPs to prevent Cloudflare from intercepting deployment webhooks with CAPTCHA challenge screens.
