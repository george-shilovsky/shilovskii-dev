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

## 2026-10-23 — Filmeter's privacy table, read against the code

Filmeter got its own site, filmeter.app, and its Privacy Policy was copied there word for word. Before copying, every row of the "What Filmeter stores" table was checked against the app's code, and the table turned out to be a July photograph of an October app. It listed nothing that 1.1 added: the exposure compensation each logged frame now keeps, the roll's number and start time, the number for the next roll, and the small counters that decide when to ask for a rating (frames logged, days the app was opened, whether the prompt was shown). It also didn't mention that the logbook keeps one backup copy if its file is ever found damaged, or that Apple's rating prompt is shown and sent by iOS, not by the app.

None of it leaves the phone, so the headline stayed true: Filmeter collects nothing. The owner approved the additions, and the same text went to this page, to filmeter.app/privacy and to the draft in PRODUCT_DOC, with "last updated" moved to October 23.

**Lesson:** a privacy table is an inventory, and inventories go stale one small feature at a time. Read it against the storage keys, not against last quarter's memory of the app.

## 2026-10-16 — Filmeter 1.1: one purchase, and the fine print catches up

Filmeter dropped its subscriptions. Pro is now a single one-time purchase, incident metering became free (and honestly labelled approximate), and 1.1 adds exposure compensation, a Bulb timer and a depth-of-field calculator. The site had been telling the July story: a Terms page about auto-renewal and a free trial, an app page selling "incident (beta)" as Pro.

The Terms page now has a "Purchase and pricing" section for a one-time purchase, with one honest paragraph for people who still hold an old subscription: it keeps Pro until it ends, and here is where to cancel it. No price appears anywhere on the site; the App Store shows it. The app page got the 1.1 features, a new FAQ answer ("Is Pro a subscription? No."), and ten fresh screenshots taken from the 1.1 build, including depth of field.

**Lesson:** legal pages drift silently. A pricing change in the app is also a Terms change, and the Terms page is the one Apple's reviewer can open from the description.

## 2026-10-10 — Verigate opens a second door, and the fine print follows it

Verigate 2.0 adds team events: an organizer's iPhone and up to ten staff phones scan for one event, share guests and Ban/VIP lists, and end the night with one report. For the first time the app talks to a server of its own, so the website had to stop saying it never does. The old page wore "0 bytes to a cloud" as a badge and answered "Does Verigate sync a team live?" with a flat "No". Both were true for 1.2.0 and would have been false the day 2.0 shipped — the same page is the App Store's Support and Marketing URL, so App Review would read the contradiction too.

The privacy policy grew a "Team events" section that reads like an inventory rather than a slogan. Guest records are end-to-end encrypted with a key the relay never has, so the honest part is listing what the relay *can* see: random installation IDs, public keys, whether a staff phone has Premium, and each record's type, time, and size, plus Google Cloud's request logs with IP addresses for 30 days. Deletion promises were written from how the clean-up really runs: an unfinished event goes once it is 30 days old *at the next routine pass*, not to the minute. The terms gained a matching section — the relay is "as is", the organizer decides who joins and answers for sharing guests' data.

A new page, "How Team events work", is written in the first person because a solo developer is the honest narrator: what it costs (only the organizer pays), what you need (App Attest, so no Mac or Simulator), the five steps from Start to the first scan, and what happens when the night ends or someone leaves. The app page links to it from a new guide section, and its stats swapped "0 bytes to a cloud" for "10 staff phones per team event" — a number that is true and actually useful.

## 2026-09-14 — Verigate separates the check from the call

Verigate 1.2 turns one old all-purpose Profile into a clearer little operations desk. Quick Scan answers the narrow question — what does this ID say? — while the admission workflow records the human call, Admit or Deny, beside an Event, Location, Door, and Staff member. The distinction matters: an underage result is not secretly a denial, a valid ID is not proof that someone entered, and a Ban/VIP flag is context rather than an automatic decision. History, Insights, CSV, and PDF now keep those facts in separate labelled drawers, including a paper trail when a decision is corrected.

The website had to unlearn the previous architecture as carefully as the app did. Active Profiles, profile filters, and “unlimited profiles” were not harmless old vocabulary; they advertised a workflow that no longer exists. The legal pages now describe the operational catalog that really stays on the phone, while acknowledging old Profile rows only where compatibility data matters. Transfer Lists is also labelled for what it is: a file the operator moves manually, not a tiny Team Sync service hiding behind an AirDrop button.

Nine screenshots were older than the product story they were meant to prove. Instead of dressing QA fixtures up as launch art, the public gallery now uses physical-iPhone captures of the 1.2.0 workflows: Quick Scan, admission results, Under 21, Expired, Ban/VIP, Manual Entry, operational setup, History, Insights, and CSV import. The existing Possible Fake frame stayed only after its controls were checked against the current app. A screenshot is sworn testimony with rounded corners: when it shows an “All profiles” filter or an old privacy pill, a fresh caption cannot make it current.

## 2026-09-10 — A product leaves the gallery

A retired product and the material built around it have been removed together: its catalogue card, product route, legal pages, screenshots, and the two engineering essays. Taking down only the card would be like removing a gallery label while leaving the whole exhibition open through an old corridor. The app count and Writing label now describe the collection that actually remains, and the shared rendering data no longer publishes links to retired routes.

## 2026-09-04 — Verigate learns the names before it sees the cards

Verigate 1.1 closes two awkward gaps at a busy door. A worn barcode no longer turns into a shrug: staff can enter the guest's details directly, or let on-device OCR pencil in suggestions from the front of the ID. The important bit is the human checkpoint — the image disappears after OCR, and the operator still compares every field with the physical card before continuing. Think of OCR as the junior taking notes, not the manager making the admission decision.

Ban and VIP lists also no longer need a guest to arrive before they can exist. Staff can add people manually or import a spreadsheet-ready CSV, review invalid and duplicate rows, and resolve possible name-and-date-of-birth matches before an atomic save. Document identity remains the strong key: an issuer-scoped digest is definitive, while a soft match is only a raised hand asking for confirmation. That distinction prevents the nastiest kind of convenience bug — confidently merging two different people who happen to share a name and birthday.

The website had preserved the v1.0 story in amber: it still described Manual Entry as pasted barcode text, put the entire possible-fake verdict behind Premium, and promised that the camera never captured any image. The v1.1 refresh now separates the free warning from the Premium detail report, explains the temporary OCR image honestly, updates the public identity language, and adds the two real 6.9-inch screens to the gallery. The lesson is simple: privacy copy ages like code. When a new capability crosses a sensitive boundary, even safely, marketing and legal pages must ship in the same mental transaction.

## 2026-09-02 — Rayita leaves “Coming soon” behind

The launch flag finally flipped: Rayita 1.0.0 is live on the App Store as **Rayita: Peptide Tracker**. The website had been standing at the station with an old “Peptide Calculator” sign and a disabled button, so the public page now links to the real listing and uses the shipped product language. The latest app commit also changed the tour of the house: Vials is the front door, the tabs now run Vials, Doses, Convert, Progress, Settings, and the public-facing calculator name is Convert. The site copy, metadata, FAQ, and legal pages now tell that same story while preserving the precise safety boundary: Rayita converts a dose the user supplies; it never chooses one.

Release reviews are a useful reminder that naming is architecture at the product boundary. Internal types can keep an accurate engineering name, but every public surface — screenshots, navigation, metadata, support copy, and legal text — needs to describe the same product the reviewer and customer actually see.

One last ghost survived in the browser cache. The product list lives in `shared.js`, so updating that file fixed the source but not tabs that had already cached its old URL: the Rayita detail page looked current while the home page and Apps catalogue still said “Coming soon.” Every HTML entry point now requests the dated `shared.js?v=20260902` asset. When one shared script paints cards across the whole site, its cache key is part of the release—not housekeeping to remember afterward.

## 2026-09-02 — Rayita steps into the frame

Rayita's first web gallery used clean simulator captures. The updated 6.9-inch App Store set reflects the current navigation and naming — most visibly, Calculator has become Convert — and presents every screen inside the same softly tilted iPhone frame. For the website, the marketing headline and subhead are cropped away so they do not compete with the page's own copy, while the frame, shadow, gradient, and app UI remain untouched. The six published derivatives are normalized to 900 × 1655; the full 1320 × 2868 masters remain in the product vault.

## 2026-09-02 — Ovessa's new tour

The original Ovessa gallery had ten early product screenshots. The refreshed English 6.9-inch set added the current cycle design, updated food and health flows, supplements, and the in-app privacy centre. The raw captures exposed black pixels in the rounded screen corners and had no physical device frame, so the gallery now uses deterministic crops of the App Store marketing renders: the headline is removed while the iPhone frame, shadow, and slight alternating tilt stay intact. Every crop is normalized to 900 × 1678 without regenerating or altering the UI itself.

The same refresh exposed an older kind of drift: the page still called the app v1.0.0, required iOS 26.5, and described the July launch policy where both subscriptions appeared to share a trial. GitHub `main` and the `1.2.0` tag now meet at `e9cc1b4`; the shipping target is iOS 26.0, the seven-day trial belongs only to Annual, and English plus Mexican Spanish follow iOS's per-app language setting. The privacy summary also stopped saying that literally only a photo and barcode leave the phone: explicit nutrition lookups send generic food words, localized requests include a language code, App Attest carries integrity proof, and StoreKit talks to Apple. The stronger and more useful promise is narrower — health logs never leave the device, and the stateless food service stores no request content.

# Engineer's Wisdom

A screenshot is product copy wearing pixels. Update its caption and ordering together with the image, or the page can confidently explain the wrong screen. Keep source captures outside the web repository and publish web-sized derivatives: that preserves the master asset while avoiding multi-megabyte downloads for every gallery tile.

# If I Were Starting Over...

The screenshot data would include stable semantic IDs independent of display order, and a tiny validation script would verify every referenced asset, its dimensions, and its accessible caption before publishing. That would make future refreshes closer to swapping an exhibition than relabelling boxes in a storeroom.
