// shilovskii.dev — per-app rich content (features, screenshots, FAQ, requirements)
// Source of truth for Migaja: PRODUCT_DOC.md (commit 6bdabdf, supersedes earlier drafts).
window.APP_DETAILS = {
  migaja: {
    version: "1.0.0",
    versionDate: "May 21, 2026",
    appStore: "https://apps.apple.com/us/app/migaja-clipboard-manager/id6770649369",
    heroImage: "migaja-search-programming.png",

    // ── Screenshot gallery (search + settings) ──
    screenshotsHeading: "The popup. The settings. That's it.",
    screenshotLabels: { search: "⌘⇧V · Search popup", settings: "⌘⇧, · Settings" },
    screenshots: {
      search: [
        { src: "migaja-search-programming.png", caption: "Semantic search finds clips by meaning across 100+ languages — Portuguese, Japanese, Korean and Chinese results, all from one English query." },
        { src: "migaja-search-budget.png", caption: "Time filters (Today · Yesterday · Week · Month · All) carry live counts. The right pane keeps the full clip with formatting preserved." },
        { src: "migaja-search-color.png", caption: "Auto-classified content — hex colours render with a swatch preview. Hybrid FTS+SEM badges show why each row matched." },
        { src: "migaja-search-recipe.png", caption: "Bucketed timeline groups clips by recency. Source-app icons make scanning a long list quick." },
      ],
      settings: [
        { src: "migaja-settings-general.png", caption: "General — startup, appearance, density and behaviour. Two themes, two result densities, dock and menu-bar toggles." },
        { src: "migaja-settings-search.png", caption: "Search — two sliders are all the knobs. Match precision tightens or loosens results; the Exact↔Smart slider sets the FTS/semantic mix." },
        { src: "migaja-settings-history.png", caption: "History — retention by days and by clip count. Database lives in Application Support; vacuum and reset are one click each." },
        { src: "migaja-settings-hotkey.png", caption: "Hotkey — four customisable global shortcuts. Conflicts are flagged in real time as you record." },
        { src: "migaja-settings-exclusions.png", caption: "Exclusions — apps on this list never reach Migaja; clipboard data is dropped before it ever touches disk. KeePassXC and Apple Wallet are excluded by default." },
        { src: "migaja-settings-exclusions-add.png", caption: "Add an exclusion by picking from running apps, or browse for one that isn't open. Migaja suggests likely candidates automatically." },
      ],
    },

    tagline: "The clipboard that thinks.\nWithout leaving your Mac.",
    subhead: "Migaja remembers everything you copy and finds it by meaning — not just by keyword — in 100+ languages. Fully on-device. No cloud. No account.",
    price: "Free · 7-day Pro trial",
    blurb: "A privacy-first clipboard manager for macOS. Press ⌘⇧V from any app and Migaja shows everything you've copied recently. Type a few words — even loosely — and it surfaces the right snippet by meaning, in 100+ languages. The whole model runs on your Mac.",
    pitch: "Hit ⌘⇧V, type what you vaguely remember, and the thing you copied three weeks ago is the first result — without a single byte ever leaving your Mac.",

    // ── Hero stats ── small numeric strip under the headline image
    stats: [
      { value: "100+", label: "languages" },
      { value: "<5 ms", label: "full-text search" },
      { value: "0", label: "outbound bytes" },
      { value: "300 MB", label: "on disk, bundled" },
    ],

    // ── Top-level feature highlights (rendered as a 3-card row) ──
    features: [
      { title: "Truly private. By design.", body: "Zero networking code outside Apple's StoreKit. No telemetry, no analytics, no crash uploads, no account. Verify it yourself with Little Snitch in two seconds." },
      { title: "Semantic search, on your laptop.", body: "A bundled multilingual neural model (e5-base, 768-dim) finds clips by meaning. Type \"yesterday's API key\" and Migaja surfaces the Bearer token — without you typing a matching character." },
      { title: "Native. Fast. Out of your way.", body: "Built for macOS 26 with SwiftUI and a non-activating floating panel. FTS hits in under 5 ms; semantic results stream in 50–300 ms and merge into the same list." },
    ],

    // ── Full feature catalogue, grouped ──
    catalogue: [
      {
        kicker: "Capture",
        items: [
          "Always-on clipboard monitor — every new text snippet is stored in a local SQLite database. Duplicates are skipped.",
          "Auto-classifies each clip as text, code, URL or colour — by source app or content pattern.",
          "Silently ignores transient, concealed and remote-clipboard pasteboard flags. Password managers stay private.",
          "Default app-exclusion list (1Password, Bitwarden, Keychain Access) — add your own in two clicks.",
          "Skips anything over 1,000,000 characters, so a runaway copy can't blow up your database.",
        ],
      },
      {
        kicker: "Search",
        items: [
          "Full-text search backed by SQLite FTS5, tuned for short snippets with BM25 ranking. ~5 ms.",
          "Semantic search through a bundled multilingual e5-base model, Q8 quantised, 768-dim vectors.",
          "Hybrid ranking — phase 1 (FTS) is instant; phase 2 (semantic) merges in over 50–300 ms.",
          "One slider sets the mix from \"Exact only\" to \"Smart only\". A second slider tightens the match precision.",
          "Time filters: Today · Yesterday · Week · Month · All — with live counts.",
        ],
      },
      {
        kicker: "Browse",
        items: [
          "Bucketed timeline: Pinned, Today, Yesterday, This Week, Earlier.",
          "Dual-pane preview — list on the left, full content on the right, with formatting preserved.",
          "Each row shows the source-app icon, relative time, character count and a match-type badge (FTS / SEM / FTS+SEM).",
          "Two densities — Compact for laptops, Comfortable by default.",
        ],
      },
      {
        kicker: "Act",
        items: [
          "One-tap copy — Enter (or double-click) writes the selected clip to the system clipboard, closes the popup, and gives focus back to the app you came from. Press ⌘V to paste.",
          "Global ⌘⌥⇧V strips formatting from the most recent copy and pastes it as plain text.",
          "Auto-dismiss closes the popup after a selection; turn it off in Settings if you want to make several actions in a row.",
          "No Accessibility permission required. Migaja never simulates keystrokes or controls other apps — pasting is your own ⌘V.",
        ],
      },
      {
        kicker: "Organise",
        items: [
          "Pin clips with ⌘D — they float to the top and are never auto-purged.",
          "Soft-delete with a 24-hour grace period before anything is physically removed.",
          "Retention: 30 / 90 / 365 days or unlimited. Max clips: 1k / 10k / 100k or unlimited.",
          "Automatic weekly vacuum keeps the database compact. Manual reset wipes it in one click.",
        ],
      },
      {
        kicker: "Privacy",
        items: [
          "Zero outbound network. The app has no networking code outside StoreKit.",
          "On-device inference. The model loads on demand and auto-unloads 30 s after the last search.",
          "No account, ever. Nothing to sign up for, nothing to forget, nothing to leak.",
          "No Accessibility permission, ever. Migaja can't read other apps' content or simulate keystrokes — by design, not by policy.",
        ],
      },
    ],

    // ── How semantic search works — three-step explainer ──
    flow: [
      { step: "01", title: "Copy anything, anywhere", body: "Migaja polls the system pasteboard once per second. Text, code, URLs, hex colours — auto-classified, source app tagged, password managers skipped." },
      { step: "02", title: "Encoded on your Mac", body: "The bundled multilingual e5-base model turns each clip into a 768-dim vector. Inference runs on Metal. The model unloads after 30 s of idle." },
      { step: "03", title: "Find it by meaning", body: "Press ⌘⇧V. FTS hits show in under 5 ms; semantic matches stream in over 50–300 ms and merge into the same list. Enter pastes back into the app you came from." },
    ],

    // ── Keyboard shortcuts (from PRODUCT_DOC §4) ──
    shortcuts: [
      { scope: "Global", combo: "⌘⇧V", action: "Open Migaja popup", note: "From any app. Search field auto-focuses." },
      { scope: "Global", combo: "⌘⌥⇧V", action: "Plain-text paste", note: "Strips formatting from the most recent copy." },
      { scope: "Global", combo: "⌘D", action: "Pin / unpin", note: "Works against the highlighted row in the popup." },
      { scope: "Global", combo: "⌘⇧,", action: "Open Settings", note: "Opens the Settings window directly." },
      { scope: "Popup", combo: "↑ ↓ / Tab", action: "Move selection", note: "Wraps at boundaries." },
      { scope: "Popup", combo: "Enter", action: "Select clip → clipboard", note: "Writes the clip to the system clipboard and closes the popup. Press ⌘V in your target app." },
      { scope: "Popup", combo: "double-click", action: "Same as Enter", note: "Writes the selected row to the clipboard." },
      { scope: "Popup", combo: "⌘+Delete", action: "Soft-delete", note: "24-hour grace period before hard delete." },
      { scope: "Popup", combo: "Esc", action: "Close popup", note: "Or click outside the popup." },
    ],

    // ── System requirements ──
    requirements: [
      "macOS 26 Tahoe or later",
      "Apple Silicon only — M1 and newer",
      "~300 MB on disk (most of it the bundled embedding model)",
      "No network required for any feature except the App Store purchase flow",
    ],

    // ── Long-form documentation (rendered as a prose section with sticky TOC) ──
    guide: [
      {
        id: "getting-started",
        title: "Getting started",
        body: `
          <p>On first launch, Migaja walks through three onboarding screens: a privacy preamble, a short feature tour, and a "Try it" call to action that tells you to press <code>⌘⇧V</code>. There are no permission prompts — Migaja never asks for Accessibility, Full Disk Access, or anything else.</p>
          <h4>The first search</h4>
          <p>Hit <code>⌘⇧V</code>. Type two or three words about the thing you copied — not the exact text, just what you remember. The top result is usually it. Press <code>↵</code> to copy it to the clipboard; the popup closes and focus returns to the app you came from, where you press <code>⌘V</code> to paste.</p>
        `,
      },
      {
        id: "search-modes",
        title: "Search modes",
        body: `
          <p>Migaja's <em>Search</em> tab in Settings has two sliders that change how results are ranked.</p>
          <ul>
            <li><strong>Search mode</strong> goes from <em>Exact only</em> (0.0) to <em>Smart only</em> (1.0), with a default of <code>0.6</code>. Lower if you mostly remember the exact words; raise it if you remember the topic.</li>
            <li><strong>Match precision</strong> ranges from <code>0.60</code> to <code>0.95</code>, default <code>0.82</code>. Lower if semantic results feel too narrow; raise if they feel too loose.</li>
          </ul>
          <p>Each result row carries a small badge — <code>FTS</code>, <code>SEM</code> or <code>FTS+SEM</code> — so you can tell why a clip is on screen and tune the sliders accordingly.</p>
        `,
      },
      {
        id: "exclusions",
        title: "Excluding apps and sensitive data",
        body: `
          <p>Migaja silently ignores any pasteboard marked with the standard transient (<code>org.nspasteboard.TransientType</code>), concealed (<code>org.nspasteboard.ConcealedType</code>) or remote-clipboard (<code>com.apple.is-remote-clipboard</code>) flags. That covers most password managers, OTP fields and Universal Clipboard out of the box.</p>
          <p>You can also exclude apps by bundle ID in <em>Settings → Exclusions</em>. The default list includes <strong>1Password</strong>, <strong>Bitwarden</strong>, and <strong>Keychain Access</strong>; the &ldquo;Add app&rdquo; sheet surfaces recommended additions (KeePassXC, Dashlane, LastPass, Enpass, Proton Pass, Apple Wallet) for one-click activation.</p>
        `,
      },
      {
        id: "retention",
        title: "Retention and reset",
        body: `
          <p>Clips age out by two policies — whichever fires first:</p>
          <ul>
            <li>The configured <strong>retention period</strong> — 30 / 90 / 365 days or unlimited. Default: 90.</li>
            <li>The <strong>max-clips cap</strong> — 1k / 10k / 100k or unlimited. Default: 10,000.</li>
          </ul>
          <p>When a clip ages out it is first soft-deleted: it disappears from search immediately and is purged for good within 24 hours. Pinned clips are exempt from both policies.</p>
          <p>To wipe everything, use <em>Settings → History → Reset all clips</em>. This runs a SQLite <code>VACUUM</code> and reclaims the disk space. The full database lives at <code>~/Library/Application Support/Migaja/clips.db</code>; you can back it up directly.</p>
        `,
      },
      {
        id: "troubleshooting",
        title: "Troubleshooting",
        body: `
          <h4>The hotkey doesn't open the popup</h4>
          <p>Check <em>Settings → Hotkey</em> — Migaja flags conflicts (with system shortcuts, or with another Migaja hotkey) in real time. If the row shows green and still doesn't fire, restart the app.</p>
          <h4>Semantic search feels slow</h4>
          <p>The first semantic search after a cold start takes 50–300 ms because the model has to load into memory. Subsequent searches are immediate, until the model auto-unloads 30 s after the last query.</p>
        `,
      },
    ],

    // ── FAQ (from PRODUCT_DOC §11) ──
    faq: [
      { q: "Is anything I copy ever sent to a server?", a: "No. Migaja has no networking code outside Apple's StoreKit. Your clipboard never leaves your Mac — you can verify it with Little Snitch in two seconds." },
      { q: "Does it work offline?", a: "Yes — every feature, including semantic search, works fully offline. Internet is only needed to start or manage a subscription through the App Store." },
      { q: "What is \"semantic search\"?", a: "It finds clips by meaning rather than exact words. Type \"the meeting time Anna sent\" and Migaja can surface a copy containing \"Thursday 15:00 PT\" — even if the words \"meeting\" and \"Anna\" never appeared in the original text." },
      { q: "Does it slow my Mac down?", a: "The neural model loads only when you open Migaja and unloads 30 seconds after the last search. Full-text search itself is sub-5-ms. CPU and memory impact when idle are negligible." },
      { q: "Does Migaja need Accessibility permission?", a: "No. Migaja never asks for Accessibility, and it cannot read other apps' content or simulate keystrokes. When you select a clip, Migaja writes it to the system clipboard and gives focus back to the app you came from — you press ⌘V yourself." },
      { q: "How is Migaja different from Paste, Pastebot, Raycast or Maccy?", a: "Two things: semantic search powered by a bundled multilingual neural model (not just keyword matching), and a categorical commitment to no-cloud, no-account, no-telemetry — verified by zero networking code in the app." },
      { q: "What languages does semantic search support?", a: "The bundled model (multilingual-e5-base) was trained on 100+ languages including English, Spanish, Russian, Chinese, Japanese, Korean, Arabic, Hindi, German, French, Portuguese and Italian." },
      { q: "Can I cancel anytime?", a: "Yes — through System Settings → Apple ID → Subscriptions, or at apps.apple.com/account/subscriptions. Cancellation takes effect at the end of the current billing period." },
      { q: "What happens after the 7-day trial if I don't subscribe?", a: "Migaja keeps working: every clip is still captured, full-text search is still instant, pinning and deletion still work. Only semantic search results are gated behind Pro." },
      { q: "Why Apple Silicon only?", a: "The neural model needs Metal-accelerated inference to be fast. On Intel Macs, semantic search would take seconds instead of milliseconds — we'd rather not ship a degraded experience." },
    ],
  },

  "json-pilot": {
    version: "1.0.0",
    // versionDate omitted until App Store launch.
    // appStore omitted until live — the Download button renders disabled.
    appStoreLabel: "Download on the App Store",
    price: "Free · Pro unlock in-app",
    privacyDoc: "json-pilot/privacy.html",
    termsDoc: "json-pilot/terms.html",
    heroImage: "json-pilot-1-explore.png",
    heroPortrait: true,

    tagline: "JSON, made readable.\nAI, kept private.",
    subhead: "A native iPhone app for viewing, editing, and exploring JSON — with an on-device AI assistant that explains your data without sending a byte to the cloud.",
    blurb: "JSON Pilot opens any JSON — from Files, the share sheet, AirDrop, your clipboard, or an HTTP request you fire from inside the app — and gives you three ways to read it: a syntax-highlighted Tree, a tap-to-edit Fields drilldown, and a Text view with line numbers. Edit at any level, prettify or minify, validate with a precise line:col error, and Save the edits back to the original file.",
    pitch: "Open any payload, read it three ways, ask an on-device AI what it means — and not a single byte leaves your iPhone.",

    // ── Hero stats ──
    stats: [
      { value: "100%", label: "on-device AI" },
      { value: "0", label: "trackers · telemetry" },
      { value: "3", label: "views per document" },
      { value: "7", label: "Pro power tools" },
    ],

    // ── Top feature highlights (3 cards) ──
    features: [
      { title: "Native and fast.", body: "Built for iOS 26 with SwiftUI and Liquid Glass. Tree, Fields and Text views, per-file Recents, dark mode and Dynamic Type. A UITextView-backed editor keeps multi-megabyte payloads smooth." },
      { title: "An AI assistant that stays on your iPhone.", body: "Ask \"What is this?\", \"Find issues\" or \"Extract all emails\" — Apple Foundation Models answers locally. Your JSON, your prompts and the model's replies never leave the device. No server, no API key, no cloud fallback." },
      { title: "Free where it matters.", body: "View, validate, prettify, minify, search, edit, Save back to the original file, Share and export — all free, forever, with no account. Pro adds power tools, never the basics." },
    ],

    // ── How it works ──
    flowTitle: "Open. Read. Ask.",
    flow: [
      { step: "01", title: "Open from anywhere", body: "Paste from the clipboard, open from Files, AirDrop or the share sheet, or fire an HTTP request and open the response — every JSON lands in the same workspace." },
      { step: "02", title: "Read it three ways", body: "A syntax-highlighted Tree for structure, a tap-to-edit Fields drilldown, and a Text view with line numbers. Edit values, keys and types; validation shows a precise line:col on any error." },
      { step: "03", title: "Ask, compare, convert", body: "Ask the on-device AI to explain or find issues, diff two payloads by meaning, run JSONPath with tree highlights, repair broken JSON, or convert to YAML / CSV / XML." },
    ],

    // ── Screenshot gallery (single tour group, portrait iPhone shots) ──
    screenshotsHeading: "Eight screens, one workspace.",
    screenshotCols: 4,
    screenshots: {
      tour: [
        { src: "json-pilot-1-explore.png", caption: "The Tree view — a syntax-highlighted, collapsible hierarchy. Tap a leaf to copy its value; the validity pill shows parse status at a glance." },
        { src: "json-pilot-2-ai.png", caption: "Ask the on-device AI to explain a payload, find issues, or extract emails. Powered by Apple Foundation Models — nothing leaves your iPhone." },
        { src: "json-pilot-3-edit.png", caption: "Fields view — tap any leaf to edit its value, key or type, or delete it, with live validation as you go." },
        { src: "json-pilot-4-search.png", caption: "On-demand search jumps straight to matching fields without leaving the document." },
        { src: "json-pilot-5-query.png", caption: "JSONPath queries with matches highlighted right on the Tree — $, .key, [*], recursive descent and more." },
        { src: "json-pilot-6-diff.png", caption: "JSON Diff compares two payloads by meaning — reformatting is never a change. Summary and GitHub-style unified views." },
        { src: "json-pilot-7-convert.png", caption: "Convert the current document to YAML, CSV or XML in one tap." },
        { src: "json-pilot-8-request.png", caption: "Fire an HTTP request — GET / POST / PUT / PATCH / DELETE with custom headers — and open the JSON response in the same workspace." },
      ],
    },

    // ── Full feature catalogue (from PRODUCT_DOC §3) ──
    catalogue: [
      {
        kicker: "Open & capture",
        items: [
          "Paste from clipboard — reads the pasteboard only on your tap, opens the snippet as Pasted.json.",
          "Open File… — document picker for JSON / text; decodes UTF-8 then Latin-1 so non-UTF-8 inputs still open.",
          "“Open in JSON Pilot” from Files, Mail, Safari, AirDrop and the share sheet, routed through one loader.",
          "Continue last — the most recent document is a one-tap card; the rest live in a Recents list.",
        ],
      },
      {
        kicker: "Workspace",
        items: [
          "Tree view — collapsible hierarchy with syntax-highlighted keys, values and punctuation; tap a leaf to copy.",
          "Fields view — drill-down list; tap any leaf to edit its value, key or type, or delete it.",
          "Text view — pretty-printed or minified source with a line-number gutter, backed by UITextView for speed.",
          "Large-file mode above 50 KB — containers default collapsed and rendering is capped to stay smooth.",
        ],
      },
      {
        kicker: "Edit & repair",
        items: [
          "Edit Field sheet (free) — inline edit of any value, key or type, with live validation, plus add and delete.",
          "Edit as Text (free) — a raw monospaced editor with a live Valid / line:col error banner.",
          "Auto-fix (Pro) — repairs trailing commas, comments, unquoted keys, single and smart quotes, then re-parses.",
        ],
      },
      {
        kicker: "Validate & search",
        items: [
          "Validity pill — green “Valid” on success, red “Invalid” otherwise, top-right in the nav bar.",
          "Error banner with the parser's reason and line:col; the failing line is highlighted red in Text view.",
          "On-demand search bar in the workspace; a separate search filters the Recents list.",
        ],
      },
      {
        kicker: "Power tools (Pro)",
        items: [
          "JSON Diff — compares by meaning, so reformatting is never a change. Summary buckets + GitHub-style unified view.",
          "JSONPath queries — $, .key, ['key'], [index], [*], .. and negative indices; matches highlight on the Tree.",
          "Format conversion — export the document as YAML, CSV or XML.",
          "HTTP requests — GET / POST / PUT / PATCH / DELETE with custom headers; the response opens in the workspace.",
          "Themes — accent color and three syntax palettes.",
        ],
      },
      {
        kicker: "AI assistant (Pro)",
        items: [
          "Bottom-sheet chat attached to the open document, with three one-tap starters: Explain, Find issues, Extract emails.",
          "Streaming replies and per-document conversation memory while the document is open.",
          "Powered by Apple Foundation Models — runs entirely on-device; capability-gated, never OS-gated.",
          "When Apple Intelligence is unavailable, the chat says exactly why; the rest of the app is unaffected.",
        ],
      },
      {
        kicker: "Save, export, privacy",
        items: [
          "Save (free) — overwrites the original file via NSFileCoordinator; works with iCloud Drive and file providers.",
          "Save to Files…, Share as .json, Copy / Copy minified — all free, always available.",
          "Recents — SwiftData, local-only, CloudKit explicitly off, up to 60 entries.",
          "No analytics, no telemetry, no crash reporters, no third-party SDKs, no account.",
        ],
      },
    ],

    // ── System requirements (from PRODUCT_DOC §1) ──
    requirements: [
      "iPhone running iOS 26.4 or later (iPhone only at v1)",
      "AI features require an Apple-Intelligence-capable iPhone — 15 Pro / 15 Pro Max and the full 16 / 17 family",
      "On other iPhones the AI assistant is disabled; every other feature, including the other Pro tools, still works",
      "No network connection required for any feature except in-app purchase and the user-fired HTTP request tool",
    ],

    permissionsNote: "None. JSON Pilot requests no iOS permissions — not Camera, Photos, Contacts, Microphone, Location, or any other. The only system surfaces it touches are the file picker, the system pasteboard (on your tap), and the share sheet.",
    privacyTeaser: "JSON Pilot collects no data and ships no analytics, telemetry or crash reporters. The only network traffic is StoreKit and HTTP requests you fire yourself.",

    // ── Long-form documentation ──
    guide: [
      {
        id: "getting-started",
        title: "Getting started",
        body: `
          <p>Open JSON Pilot and bring in a document any way that suits you: tap <strong>Paste from Clipboard</strong> on the Entry screen, tap <strong>Open File…</strong>, or use <em>Open in JSON Pilot</em> from Files, Mail, Safari, AirDrop or the share sheet. Files are decoded as UTF-8 first and Latin-1 as a fallback, so awkward encodings still open instead of erroring.</p>
          <h4>The three views</h4>
          <p>Every document opens into one workspace with three tabs: <strong>Tree</strong> for structure, <strong>Fields</strong> for tap-to-edit drilldown, and <strong>Text</strong> for raw source with line numbers. Edits sync across all three, and the validity pill in the nav bar tells you instantly whether the document parses.</p>
        `,
      },
      {
        id: "editing",
        title: "Editing and repair",
        body: `
          <p>In <strong>Fields</strong>, tap any leaf to open the Edit Field sheet — change the value, the key, or the type (string ↔ number ↔ bool ↔ null), or delete it. Add a sibling with the inline “Add” row. Prefer raw text? <strong>Edit as Text</strong> drops you into a monospaced editor with a live <em>Valid</em> / <code>line:col</code> error banner; Apply commits the text back through the parser.</p>
          <p>When input is invalid, <strong>Auto-fix</strong> (Pro) runs a deterministic relaxed-to-strict repair pass — trailing commas, <code>//</code> and <code>/* */</code> comments, unquoted keys, single-quoted strings, and smart quotes — then re-parses. If the fix is only partial, the result opens in the editor with the residual error highlighted.</p>
        `,
      },
      {
        id: "ai-assistant",
        title: "The on-device AI assistant",
        body: `
          <p>Open the AI chat on any document and pick a starter — <strong>Explain this JSON</strong>, <strong>Find issues</strong>, or <strong>Extract emails</strong> — or ask your own question. Replies stream as the model thinks, and the conversation persists while the document is open.</p>
          <p>The assistant is powered by <strong>Apple Foundation Models</strong> and runs <strong>entirely on your iPhone</strong>. Your JSON, your prompts and the model's answers never leave the device — there are no AI servers, no API keys and no cloud fallback. It is gated by capability, not OS version: if Apple Intelligence isn't available, the chat tells you exactly why (device not eligible, Apple Intelligence turned off, or the model still preparing) and the rest of the app keeps working. Longer documents are truncated to a 6,000-character context budget, with a note so the model knows it's seeing a slice.</p>
        `,
      },
      {
        id: "power-tools",
        title: "Power tools",
        body: `
          <p><strong>JSON Diff</strong> compares two documents <em>by meaning</em> — reformatting or key reordering never shows as a change — and offers a Summary view (Changed / Added / Removed) and a GitHub-style Unified view. <strong>JSONPath</strong> supports <code>$</code>, <code>.key</code>, <code>['key']</code>, <code>[index]</code>, <code>[*]</code>, recursive descent <code>..</code> and negative indices, with matches highlighted right on the Tree.</p>
          <p><strong>Format conversion</strong> exports the current document as YAML, CSV or XML. The built-in <strong>HTTP request tool</strong> sends GET / POST / PUT / PATCH / DELETE with custom headers and a body for non-GET methods, over <code>http(s)</code> only, with a 30-second timeout — and opens the response straight into the workspace.</p>
        `,
      },
      {
        id: "privacy",
        title: "Privacy and storage",
        body: `
          <p>JSON Pilot opens network connections in exactly two situations, both initiated by you: <strong>StoreKit</strong> for purchases and entitlement refresh, and the <strong>HTTP request tool</strong> when you tap Send. Nothing else opens a socket — no analytics, no telemetry, no crash reporters, no third-party SDKs.</p>
          <p>Recents are stored locally with SwiftData (<strong>CloudKit is explicitly off</strong>), capped at 60 entries. Your settings live in <code>UserDefaults</code>. To clear everything, use <em>Settings → Data &amp; Privacy → Clear Recents</em>, or delete the app. The original files you opened are untouched unless you explicitly tap <strong>Save</strong>.</p>
        `,
      },
    ],

    // ── FAQ (from PRODUCT_DOC §11) ──
    faq: [
      { q: "Is any of my JSON ever sent to a server?", a: "No. The only network traffic JSON Pilot initiates is (1) Apple's StoreKit for purchases and (2) HTTP requests you explicitly fire from the built-in request tool. JSON documents, edits, AI prompts and AI replies stay on your iPhone." },
      { q: "How does the AI work without a server?", a: "JSON Pilot's AI assistant uses Apple Foundation Models — the on-device LLM that ships as part of Apple Intelligence on supported iPhones. Inference runs locally, exactly like Apple's own Writing Tools." },
      { q: "Which iPhones can run the AI?", a: "The AI features need Apple-Intelligence-capable hardware: iPhone 15 Pro / 15 Pro Max and all iPhone 16 / 17 models. On older iPhones the AI assistant is automatically disabled and the rest of the app — including every other Pro feature — works normally." },
      { q: "Do I lose access if I cancel the monthly subscription?", a: "Pro features stop working when the current billing period ends. You can re-subscribe any time, or buy the lifetime unlock to keep Pro forever." },
      { q: "Why no free trial?", a: "The whole viewer and editor is already free, with no time limit and no functionality cuts. The Pro tier is for the AI assistant and power tools — try those by buying the monthly subscription and cancelling if it isn't for you." },
      { q: "Does JSON Pilot need any permissions?", a: "No. JSON Pilot does not request Camera, Photos, Contacts, Microphone, Location, or any other iOS permission. The only system surfaces it touches are the standard file picker, the system pasteboard (when you tap Paste or Copy), and the share sheet." },
      { q: "Does it sync across my devices?", a: "No. v1 is local-only by design — CloudKit is explicitly disabled. A Mac companion app is on the roadmap." },
      { q: "What's the maximum file size?", a: "There is no hard cap. Documents above 50 KB enter “large-file mode”: tree containers default collapsed, fields rendering is capped per node, and the text view skips syntax colour to stay smooth. Multi-megabyte payloads still open." },
      { q: "Does the HTTP request tool support authentication?", a: "You can add any custom headers (including Authorization), use any method (GET, POST, PUT, PATCH, DELETE), and include a request body for non-GET methods. The 30-second timeout is fixed at v1. http:// and https:// schemes are supported." },
      { q: "Why iOS 26.4 minimum?", a: "Apple Intelligence APIs (the AI backbone) and the Liquid Glass design system both live in iOS 26. Targeting older iOS would either gut the AI or force a degraded UI." },
    ],
  },

  // Source of truth: Verigate PRODUCT_DOC.md (2026-06-09, codebase commit 4c67eb5).
  verigate: {
    version: "1.0",
    // versionDate omitted until App Store launch.
    // appStore omitted until live — the Download button renders disabled.
    appStoreLabel: "Download on the App Store",
    price: "Free · Premium: subscription with free trial, or one-time Lifetime",
    privacyDoc: "verigate/privacy.html",
    termsDoc: "verigate/terms.html",
    heroImage: "verigate-2-pass.png",
    heroPortrait: true,

    tagline: "Scan IDs in two seconds.\nStore no photos.",
    subhead: "The fast, honest ID scanner for bars, clubs, and shops. Instant 21+ / expired / possible-fake on US & Canadian licenses — recognise your VIPs and banned guests by their ID, never a photo. Everything stays on the phone.",
    blurb: "Verigate is a native iPhone ID scanner for age-gated venues. Point the camera at the PDF417 barcode on the back of a US or Canadian driver's license and get an instant verdict — valid, underage, expired, possible fake, or couldn't read — plus a clean entry log. Repeat and flagged guests are recognised by an irreversible hash of the license number, never a photo and never the raw number.",
    pitch: "Card the line in two seconds. Real fake-ID detection, VIP & ban lists, entry logs — all on-device. No photos, no cloud, one honest price.",

    // ── Hero stats ──
    stats: [
      { value: "2 s", label: "scan to verdict" },
      { value: "5", label: "fake-ID checks" },
      { value: "0", label: "photos stored" },
      { value: "0", label: "bytes to a cloud" },
    ],

    // ── Top feature highlights (3 cards) ──
    features: [
      { title: "Built for the speed of the line.", body: "A purpose-built camera pipeline with the torch on and auto-macro focus reads the barcode the instant it's in frame — no clunky hardware, no \"hold still and wait.\" The verdict is a big, solid card you can read across a dark room." },
      { title: "Private by architecture, not by promise.", body: "The data model has no field for a photo or a raw license number — guests are recognised by an irreversible one-way hash. No cloud, no account, no analytics. The only network the app ever uses is Apple's App Store for your purchase." },
      { title: "Honest pricing.", body: "One clear Monthly or Yearly plan with a free trial — or buy once with Lifetime. Cancel any time in one tap via Apple's native sheet. No confusing in-app-purchase maze, and no per-device fees." },
    ],

    // ── How it works ──
    flowTitle: "Point. Verdict. Remember.",
    flow: [
      { step: "01", title: "Point at the barcode", body: "Aim at the PDF417 barcode on the back of a US or Canadian license. The torch is on, auto-macro keeps focus up close, and the decode fires the moment the code is in frame." },
      { step: "02", title: "Read it across the room", body: "VALID, UNDERAGE, EXPIRED, POSSIBLE FAKE, or COULDN'T READ — a large, solid status card with the age and expiry. Every result carries the privacy pill: photo not saved, on this device." },
      { step: "03", title: "Remember the right guests", body: "Flag a guest VIP or banned once. Verigate recognises them on every visit by an irreversible hash of their license number — and warns you the moment they're back at the door." },
    ],

    // ── Screenshot gallery (single tour group, portrait iPhone shots) ──
    screenshotsHeading: "Nine screens, the whole door.",
    screenshotCols: 4,
    screenshots: {
      tour: [
        { src: "verigate-1-scan.png", caption: "The scanner — torch on, auto-macro focus, and a verdict the instant the PDF417 barcode is in frame. \"Can't scan?\" drops to manual entry; the active door profile sits up top." },
        { src: "verigate-2-pass.png", caption: "VALID — a big, solid card readable across a dark room. Age, date of birth, expiry and state, with the privacy pill: no photo stored, on this device." },
        { src: "verigate-3-under21.png", caption: "UNDERAGE — the age threshold (16–25, with 18+ and 21+ presets) is built in, so every verdict follows your door's rule." },
        { src: "verigate-4-expired.png", caption: "EXPIRED — the license is past its date, called out in amber even when the guest is over age. The expiry field is highlighted." },
        { src: "verigate-5-fake.png", caption: "POSSIBLE FAKE — five AAMVA-consistency checks on the barcode; two or more failures escalate the scan. Each pass/fail is shown so staff see exactly why." },
        { src: "verigate-6-vip.png", caption: "VIP guest — recognised by an irreversible hash of the license number, never a photo. Nickname and note (\"Bottle service, table 4\") surface at the door." },
        { src: "verigate-7-banned.png", caption: "Banned — the watchlist fires a warning the moment a flagged guest is back, with the reason and who added it." },
        { src: "verigate-8-history.png", caption: "History — every scan on-device: time, outcome, age-at-scan, state and profile, filterable by period (24h, week, month, all)." },
        { src: "verigate-9-insights.png", caption: "Insights (Premium) — total scans, a per-status breakdown including VIP and banned hits, and an hourly distribution with the busiest hour called out." },
      ],
    },

    // ── Full feature catalogue (from PRODUCT_DOC §3) ──
    catalogue: [
      {
        kicker: "Scan & verify — free",
        items: [
          "PDF417 barcode scanning with a purpose-built camera pipeline — torch on, auto-macro focus, late frames dropped so the preview never stutters.",
          "Five verdicts: VALID, UNDERAGE, EXPIRED, POSSIBLE FAKE, COULDN'T READ — each a large, opaque card readable in a dark doorway.",
          "Age threshold built in: 18+ and 21+ presets, or any custom value from 16 to 25. Every verdict follows your setting.",
          "Manual entry — type or paste a barcode payload to run the same checks without the camera.",
          "Every result shows \"Photo not saved · on this device\" and the assist-tool disclaimer.",
        ],
      },
      {
        kicker: "Fake-ID detection — Premium",
        items: [
          "Five AAMVA-consistency checks on the barcode: issuer number, document-number shape, date of birth, expiry-vs-issue encoding, and jurisdiction code.",
          "Two or more failed checks escalate an otherwise-valid scan to POSSIBLE FAKE.",
          "Each pass/fail check is shown on the result screen, so staff can see exactly why a document was flagged.",
          "Honest framing: fake detection never overrides an underage or expired verdict, and it's an assist — not a forensic guarantee.",
        ],
      },
      {
        kicker: "Guests & watchlists — Premium",
        items: [
          "Identity by hash: the license number is hashed with SHA-256 into an irreversible fingerprint — the raw number is never stored.",
          "Flag a guest VIP (gold) or banned (red) once; every future scan shows the flag and fires a warning haptic.",
          "Attach a nickname (\"Redhead from the 12th\") and a note (\"Banned — fight 05/12\") to any guest.",
          "Passback detection: the same ID scanned again within 5 minutes is flagged — someone is handing their license back over the rope.",
        ],
      },
      {
        kicker: "History & insights",
        items: [
          "Free on-device history of every scan: time, outcome, age-at-scan, jurisdiction, and the active profile — filterable by period.",
          "Insights (Premium): total scans, a per-status breakdown including VIP and banned hits, and an hourly distribution with the busiest hour called out.",
          "Auto-delete logs after 30 or 90 days — or keep them until you clear them yourself.",
        ],
      },
      {
        kicker: "Export & transfer — Premium",
        items: [
          "CSV export — the scan log as one clean spreadsheet table. The license number and the hash are never exported.",
          "PDF report — header, history table, ban and VIP lists, and an insights summary, paginated so a card never splits across pages.",
          "Transfer lists device-to-device as a JSON file you send yourself — two doors, one ban list, no server in the middle.",
          "Hardened import: size caps, strict hash validation, version checks, and merge rules that treat a transferred list as a hint, never a correction.",
        ],
      },
      {
        kicker: "Run the door",
        items: [
          "Local staff/door profiles tag every scan for per-door history and stats — two profiles free, unlimited with Premium.",
          "Optional 4-digit PIN to switch or edit a profile.",
          "Auto-return jumps straight back to the camera after each verdict (1–10 s) — built for throughput on a busy line.",
          "No account and no login — profiles are local-only, billing is your Apple ID.",
        ],
      },
      {
        kicker: "Privacy — always on",
        items: [
          "No photo, ever — the PDF417 barcode contains none, and the data model has no image field.",
          "No raw license number — only the one-way SHA-256 hash.",
          "No network beyond Apple's StoreKit for purchases. No CloudKit, no third-party SDKs, no analytics, no telemetry.",
          "One permission: the camera, used only to read the barcode.",
        ],
      },
    ],

    // ── System requirements (from PRODUCT_DOC §1) ──
    requirements: [
      "iPhone running iOS 18.0 or later",
      "A rear camera with autofocus — the scanner needs close focus on the barcode",
      "Works with US & Canadian driver's licenses / state IDs that carry an AAMVA PDF417 barcode (the barcode on the back)",
      "No network connection required — scanning and logging are fully offline; internet is only needed for the App Store purchase flow",
    ],

    permissionsNote: "One — the Camera, used solely to read the PDF417 barcode on the back of a license. No photo is ever captured. Verigate requests no other iOS permission: not Photos, Location, Microphone, Contacts, or Local Network.",
    privacyTeaser: "Verigate collects no data and ships no analytics, telemetry or crash reporters. Scans, guest records and lists live on the phone; the only network traffic is Apple's StoreKit.",

    // ── Long-form documentation ──
    guide: [
      {
        id: "getting-started",
        title: "Getting started",
        body: `
          <p>On first launch, Verigate walks through a short onboarding: what it does, how the privacy model works, and a setup page where you pick your <strong>age threshold</strong> — 18+ and 21+ presets, or any custom value from 16 to 25. You can change it any time in <em>Settings → Door</em>. The last step asks for the camera; that's the only permission Verigate ever requests.</p>
          <h4>The first scan</h4>
          <p>Flip the license over and point the camera at the <strong>PDF417 barcode</strong> — the wide, dense barcode on the back. The torch is already on and the lens auto-switches for close focus; the moment the code is in frame, the verdict appears. If the guest's ID won't read (worn card, cracked laminate), the result is an honest <strong>COULDN'T READ</strong>, never a guess.</p>
          <p>If you decline the camera permission, the Scan tab shows a "Camera is off" screen with an <strong>Open Settings</strong> button — the app never dead-ends.</p>
        `,
      },
      {
        id: "verdicts",
        title: "Reading the verdicts",
        body: `
          <p>Every scan ends in one of five outcomes, shown as a large, solid card designed to be read across a dark room:</p>
          <ul>
            <li><strong>VALID</strong> — at or over your age threshold and not expired.</li>
            <li><strong>UNDERAGE</strong> — below the threshold. The card shows the age, so a near-miss is obvious.</li>
            <li><strong>EXPIRED</strong> — past the expiry date encoded in the barcode.</li>
            <li><strong>POSSIBLE FAKE</strong> (Premium) — a valid-looking document that fails two or more internal consistency checks, with the failing checks listed.</li>
            <li><strong>COULDN'T READ</strong> — no date of birth could be parsed from the barcode.</li>
          </ul>
          <p>Every result carries the disclaimer <em>"Assist tool — not a legal guarantee of identity."</em> Verigate informs your decision; the admission call is always yours.</p>
        `,
      },
      {
        id: "watchlists",
        title: "VIPs, bans, and repeat guests",
        body: `
          <p>Verigate recognises people <em>by document, never by photo</em>. When a license is scanned, its number is normalised and hashed with <strong>SHA-256</strong> — a one-way fingerprint that cannot be reversed back into the number. The same guest re-scans to the same record; the raw number is never stored.</p>
          <p>With Premium, flag a guest <strong>VIP</strong> (gold) or <strong>banned</strong> (red) once — on any future visit the result card shows the flag, marked <em>"Matched by license # · no photo stored,"</em> and fires a warning haptic. Add a nickname and a note so the flag means something at 1 a.m. ("Banned — fight 05/12").</p>
          <p><strong>Passback detection</strong> catches the oldest trick at the rope: if the same ID is scanned again within 5 minutes, the scan is marked as a passback.</p>
        `,
      },
      {
        id: "records",
        title: "History, insights, and reports",
        body: `
          <p>The <strong>History</strong> tab is free: every scan is logged on-device with its time, outcome, age-at-scan, jurisdiction, and the profile that scanned it, filterable by period. <strong>Insights</strong> (Premium) aggregates a chosen period into total scans, a per-status breakdown — including VIP and banned hits — and an hourly distribution with the busiest hour called out.</p>
          <p><strong>Export</strong> (Premium) produces a CSV spreadsheet or a formatted PDF report for your own records. Neither file ever contains the license number or the hash. Files are written to a temporary folder and deleted as soon as the share sheet closes.</p>
          <p>Retention is yours to set: <em>Settings → Privacy → Auto-delete logs</em> (Never / 30 / 90 days), plus one-tap <em>Clear scan history</em> and <em>Clear all data</em>.</p>
        `,
      },
      {
        id: "transfer",
        title: "Two doors, one list",
        body: `
          <p><strong>Transfer lists</strong> (Premium) moves your Ban and VIP lists between iPhones — for example, the front and back doors of one venue — as a JSON file you send yourself over AirDrop, Files, or any channel you trust. <strong>Nothing goes through a server.</strong></p>
          <p>The import side is hardened: oversized files are rejected before reading, every entry must carry a well-formed hash, files from a newer app version are refused, and string lengths are clamped. Merging is conservative — incoming names and notes only overwrite when non-empty, and scan-derived facts only fill gaps. A transferred list is a hint, never a correction. A separate "replace" mode clears existing flags first if you want a clean slate.</p>
        `,
      },
      {
        id: "premium",
        title: "Free, Premium, and Lifetime",
        body: `
          <p>The core is free: scanning, the live age/expiry verdict, the age threshold, the on-device History log, manual entry, and two profiles. <strong>Premium</strong> adds fake-ID detection, the VIP/ban watchlist with passback alerts, Insights, CSV/PDF export, device-to-device list transfer, and unlimited profiles.</p>
          <p>Premium is one clear choice: a <strong>Monthly</strong> or <strong>Yearly</strong> subscription with a free trial, or a one-time <strong>Lifetime</strong> purchase that never renews. Prices are shown in the App Store for your region. Manage or cancel any time in <em>Settings → Subscription → Manage subscription</em> — it opens Apple's native sheet, and cancelling keeps access until the period ends. <em>Restore purchases</em> always reports a visible result.</p>
        `,
      },
    ],

    // ── FAQ (from PRODUCT_DOC §11) ──
    faq: [
      { q: "Do you store a photo of the ID?", a: "No. Verigate reads only the barcode; the app has no field for a photo. The barcode itself contains no photo either." },
      { q: "Do you store the license number?", a: "No. We hash it (one-way SHA-256) so the app can recognise a repeat or banned guest, and store only that hash. The raw number is discarded." },
      { q: "Is the hash \"biometric\"?", a: "No — it's derived from the document number, not from a face or fingerprint. It's an irreversible fingerprint of the card, not of the person." },
      { q: "Does any data leave the phone?", a: "No, other than Apple's App Store traffic for your purchase. There's no cloud, no account, no analytics — and the list-transfer feature moves a file directly between your own devices." },
      { q: "Which IDs work?", a: "US and Canadian driver's licenses / state IDs with an AAMVA PDF417 barcode — the wide barcode on the back. Passports are on the roadmap." },
      { q: "Can it 100% guarantee a fake or someone's age?", a: "No. Verigate is an assist tool, not a legal guarantee — the possible-fake indicator is a consistency check, not a forensic determination, and the final call is always yours." },
      { q: "Do I need internet?", a: "No. Scanning, verdicts, lists, and logging are fully offline. Internet is only needed for the App Store purchase flow." },
      { q: "What's free, and what's Premium?", a: "Free: scanning, the live age/expiry verdict, the age threshold, the on-device history log, manual entry, and two profiles. Premium: fake-ID detection, VIP/ban lists with passback alerts, insights, CSV/PDF export, device-to-device list transfer, and unlimited profiles." },
      { q: "Are there per-device fees?", a: "No. Unlike per-device SaaS scanners, Verigate has no per-seat licensing — and the built-in list transfer moves your Ban/VIP lists between your phones for free." },
      { q: "How do I cancel?", a: "One tap: Settings → Subscription → Manage subscription opens Apple's native sheet. Cancelling stops auto-renewal and keeps access until the period ends. Or buy Lifetime once and never think about it again." },
    ],
  },
};
