# The Big Picture

This repository is the public front window for the apps at shilovskii.dev. Think of it as a small gallery rather than a department store: each app gets one focused page, enough detail to understand the product, and direct paths to the App Store, privacy policy, terms, and support.

# Architecture Deep Dive

The site is deliberately static. The HTML files are the gallery rooms, `shared.js` builds the common navigation and footer, and `app-page.js` is the curator that turns the records in `app-details.js` into complete product pages. The `apps/` directory is the storeroom for icons, screenshots, and app-specific legal pages. There is no build system or server-side database to surprise us backstage.

# The Codebase Map

- `index.html`, `apps.html`, and the other root HTML files are the main public routes.
- `apps/*.html` provides one lightweight entry page per product.
- `app-details.js` contains the product copy, feature lists, screenshot order, and captions.
- `app-page.js` renders a product record into the shared app-page layout.
- `shared.js` and `styles.css` provide the common shell and visual language.
- `apps/` holds product imagery and legal documents.

# Tech Stack & Why

Plain HTML, CSS, and JavaScript keep this portfolio fast, portable, and easy to host on GitHub Pages. There is no framework tax because the site does not need client-side application state: the browser receives a small set of files and paints the page directly.

# The Journey

## 2026-09-02 — Ovessa's new tour

The original Ovessa gallery had ten early product screenshots. The refreshed English 6.9-inch set added the current cycle design, updated food and health flows, supplements, and the in-app privacy centre. The raw captures exposed black pixels in the rounded screen corners and had no physical device frame, so the gallery now uses deterministic crops of the App Store marketing renders: the headline is removed while the iPhone frame, shadow, and slight alternating tilt stay intact. Every crop is normalized to 900 × 1678 without regenerating or altering the UI itself.

The same refresh exposed an older kind of drift: the page still called the app v1.0.0, required iOS 26.5, and described the July launch policy where both subscriptions appeared to share a trial. GitHub `main` and the `1.2.0` tag now meet at `e9cc1b4`; the shipping target is iOS 26.0, the seven-day trial belongs only to Annual, and English plus Mexican Spanish follow iOS's per-app language setting. The privacy summary also stopped saying that literally only a photo and barcode leave the phone: explicit nutrition lookups send generic food words, localized requests include a language code, App Attest carries integrity proof, and StoreKit talks to Apple. The stronger and more useful promise is narrower — health logs never leave the device, and the stateless food service stores no request content.

# Engineer's Wisdom

A screenshot is product copy wearing pixels. Update its caption and ordering together with the image, or the page can confidently explain the wrong screen. Keep source captures outside the web repository and publish web-sized derivatives: that preserves the master asset while avoiding multi-megabyte downloads for every gallery tile.

# If I Were Starting Over...

The screenshot data would include stable semantic IDs independent of display order, and a tiny validation script would verify every referenced asset, its dimensions, and its accessible caption before publishing. That would make future refreshes closer to swapping an exhibition than relabelling boxes in a storeroom.
