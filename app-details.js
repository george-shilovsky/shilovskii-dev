// shilovskii.dev — per-app rich content (features, screenshots, FAQ, requirements)
// Source of truth for Migaja: PRODUCT_DOC.md (commit 6bdabdf, supersedes earlier drafts).
window.APP_DETAILS = {
  migaja: {
    version: "1.0.1",
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
    version: "1.1.0",
    appStore: "https://apps.apple.com/us/app/json-pilot-viewer-editor/id6772857377",
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
    version: "1.0.1",
    appStore: "https://apps.apple.com/us/app/verigate-id-scanner-21/id6775568994",
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

  // Source of truth: Filmeter PRODUCT_DOC.md (2026-07-05, codebase commit e946508).
  filmeter: {
    version: "1.0.0",
    appStore: "https://apps.apple.com/us/app/filmeter-film-light-meter/id6785722973",
    appStoreLabel: "Download on the App Store",
    price: "Free · Pro: subscription with free trial, or one-time Lifetime",
    privacyDoc: "filmeter/privacy.html",
    termsDoc: "filmeter/terms.html",
    heroImage: "filmeter-1-meter.png",
    heroPortrait: true,

    tagline: "A light meter,\nmade for film.",
    subhead: "Turn your iPhone into a reflected/incident exposure meter — read EV and a full ladder of shutter/aperture pairs at your ISO, then work the Zone System, reciprocity, and filter/bellows factors, and log every frame by roll. On-device. No account. An estimate, not a lab.",
    blurb: "Filmeter is a native iPhone light meter for film photography. Point the camera at a scene and it reads the live exposure and returns EV plus a ladder of shutter/aperture pairs at your chosen ISO — the analog metering workflow, in your pocket. Beyond the basic reading it carries the film-specific tools a lux app never bothers with: the Zone System, reciprocity correction for long exposures, filter & bellows compensation, per-stock film profiles, a one-time calibration, and a per-frame roll logbook.",
    pitch: "Point the camera and get EV plus the whole shutter/aperture ladder — then work the zones, correct reciprocity, and log the frame. All on-device, no account, no photo ever captured.",

    // ── Hero stats ──
    stats: [
      { value: "3", label: "ways to meter" },
      { value: "±⅓", label: "stop, calibrated" },
      { value: "0", label: "photos captured" },
      { value: "0", label: "bytes to a cloud" },
    ],

    // ── Top feature highlights (3 cards) ──
    features: [
      { title: "Built for film, not for lux.", body: "The commodity “measure the light” apps stop at a number. Filmeter is the analog workflow — EV, exposure pairs, the Zone System, reciprocity, filter and bellows factors — the things a film shooter actually needs at the moment of exposure." },
      { title: "A real reading, honestly scoped.", body: "After a one-time calibration the reading tracks a reference within about a third of a stop across the working range. It’s labelled “an estimate, not a laboratory instrument” on every relevant screen — the honest framing, not a lab claim." },
      { title: "Private by architecture.", body: "No account, no cloud, no analytics, no third-party SDKs. The camera is read for its live exposure metadata only — no photo is ever captured or stored. The only network the app uses is Apple’s App Store for your purchase." },
    ],

    // ── How it works ──
    flowTitle: "Point. Read. Log.",
    flow: [
      { step: "01", title: "Meter the light", body: "Reflected off your subject with the back camera, incident toward the light, or camera-free with Sunny-16 — pick a mode and Filmeter reads the live exposure into a calibrated EV." },
      { step: "02", title: "Read EV and every pair", body: "One clean readout: EV to a tenth of a stop, the exposure triplet, a deviation dial versus your locked reading, and a scrollable wheel of equivalent shutter/aperture pairs at your ISO." },
      { step: "03", title: "Work the film tools, log the roll", body: "Place tones on the Zone System, correct a long exposure with reciprocity, add filter and bellows stops — then log the frame into a named roll you can export to CSV." },
    ],

    // ── Screenshot gallery (single tour group, portrait iPhone shots) ──
    screenshotsHeading: "Nine screens, the whole meter.",
    screenshotCols: 4,
    screenshots: {
      tour: [
        { src: "filmeter-1-meter.png", caption: "The Meter — reflected off your subject. EV to a tenth of a stop, a scene-vs-lock deviation dial, the ISO / shutter / aperture triplet, and a center-snapped wheel of equivalent pairs. LOCK holds the reading; MEASURE and LOG sit below." },
        { src: "filmeter-2-pairs.png", caption: "Exposure Pairs — the full aperture- or shutter-priority ladder at the live EV and ISO, with a full / ½ / ⅓-stop toggle. The locked pair is highlighted; edge-of-range pairs fade out." },
        { src: "filmeter-3-zone.png", caption: "The Zone System as a live spot meter — tap tones onto zones 0–X. PLACED ON and SCENE RANGE cards read the anchor and the scene’s contrast (here V–VIII, low contrast · N+)." },
        { src: "filmeter-4-reciprocity.png", caption: "Reciprocity — Schwarzschild long-exposure correction per film profile. A METERED → CORRECTED card shows the added stops; generic exponents only, no branded film tables." },
        { src: "filmeter-5-filter-bellows.png", caption: "Filter & Bellows — add the stops for an ND or polarizer (as a factor or directly in stops) and for macro bellows extension at a magnification, summed into a TOTAL you apply to the exposure." },
        { src: "filmeter-6-incident.png", caption: "Incident (beta) — a falling-light reading from the front camera, with a Dome or Flat receptor and illuminance in lux alongside EV. It ships as an honest, experimental extra." },
        { src: "filmeter-7-sunny16.png", caption: "Sunny-16 — no camera needed. Pick a condition, from Bright sun (EV 15) down to Low light (EV 3), and the meter uses that reference EV to drive the full pairs pipeline." },
        { src: "filmeter-8-profile.png", caption: "Film profiles — save a stock’s name, ISO, reciprocity exponent and threshold, and an auto-apply toggle. One profile is free; Pro unlocks unlimited. No branded data — only what you type." },
        { src: "filmeter-9-history.png", caption: "History — a per-frame roll logbook. Each frame stores EV, shutter, aperture and mode; a completed roll archives to Past Rolls, and any roll exports to CSV (Pro)." },
      ],
    },

    // ── Full feature catalogue ──
    catalogue: [
      {
        kicker: "Meter — the hub (free)",
        items: [
          "Three metering modes: Reflected (back camera, free), Incident (front camera, Pro, beta), and Sunny-16 — a camera-free reference by condition, free.",
          "Calibrated EV to a tenth of a stop, with a semicircular needle showing scene-versus-lock deviation in stops.",
          "Exposure triplet cards — ISO, shutter, aperture — with a marker on shutter when reciprocity correction is applied.",
          "A horizontally scrollable, center-snapped wheel of aperture/shutter pairs; drag to pick the priority aperture.",
          "LOCK holds a reading while AE keeps running; MEASURE takes a fresh hardware read; LOG appends the frame to the current roll.",
          "A graceful no-camera state that offers Sunny-16 instead — the app never dead-ends.",
        ],
      },
      {
        kicker: "The analog toolkit (Pro)",
        items: [
          "The Zone System as a live spot meter — place tones on zones 0–X, read the scene range and an N− / N / N+ contrast descriptor.",
          "Reciprocity: Schwarzschild long-exposure correction with generic presets or a custom exponent; correction only ever lengthens the time.",
          "Filter & bellows compensation — filter factor (F× or stops) and bellows extension at a magnification, summed and pushed back into the meter.",
          "Incident metering (beta) — a falling-light reading from the front camera; ships as an honest, experimental extra with no accuracy claim.",
        ],
      },
      {
        kicker: "Pairs & film profiles",
        items: [
          "A full aperture- or shutter-priority ladder of exposure pairs at the live EV and ISO, with full / ½ / ⅓-stop granularity.",
          "The currently selected pair is marked LOCKED; edge-of-range pairs fade; a reciprocity legend shows when correction is active.",
          "Film profiles: save name, ISO, reciprocity exponent and threshold, and an auto-apply flag — one free, unlimited with Pro.",
          "Profiles surface in the Meter ISO pill, the new-roll form, and the Reciprocity screen. No branded stock data — only what you type.",
        ],
      },
      {
        kicker: "Roll logbook & export",
        items: [
          "A per-frame roll logbook — the active roll collects frames, each storing EV, aperture, shutter, mode, reciprocity flag and timestamp.",
          "Start a new roll with a film-stock name and ISO; completed rolls archive to a read-only Past Rolls list.",
          "Export any roll to CSV (Pro) via the system file exporter — Frame, EV, Aperture, Shutter, Mode, Reciprocity, Timestamp.",
          "Persistence is a local JSON file on the device. No cloud, no CloudKit, no account.",
        ],
      },
      {
        kicker: "Calibration & accuracy",
        items: [
          "A one-time, per-mode offset: read a known scene’s raw EV, enter the true EV, and Filmeter applies the difference to every future reading.",
          "Reflected and incident keep independent offsets, sanity-clamped to ±10 stops with NaN/∞ rejected so a bad value can’t brick the meter.",
          "Calibration is never gated — accuracy is the product, not a Pro upsell.",
          "Physics, not proprietary tables: EV / luminance / illuminance from public photometry and public industry constants (K, C).",
        ],
      },
      {
        kicker: "Privacy — always on",
        items: [
          "No photo captured or stored — the camera is read for live exposure metadata (aperture/shutter/ISO) only.",
          "No account, no cloud, no CloudKit, no analytics or telemetry, no third-party SDKs.",
          "One permission — the camera — and Sunny-16 works without even that.",
          "The only network the app uses is Apple’s StoreKit for purchases; Settings links open in the browser when you tap them.",
        ],
      },
    ],

    // ── System requirements ──
    requirements: [
      "iPhone running iOS 26.5 or later",
      "A rear camera for reflected metering; the front camera is used for incident mode; Sunny-16 needs no camera at all",
      "The camera meter needs a physical device — the iOS Simulator has no real exposure data (the non-camera math and UI still run)",
      "No network connection required for metering or logging — the only outbound path is Apple’s App Store for the purchase flow",
    ],

    permissionsNote: "One — the Camera, used solely to read the scene’s live exposure (aperture, shutter, ISO) for metering. No photo is ever captured. Filmeter requests no other iOS permission: not Photos, Location, Microphone, Contacts, or Local Network. Sunny-16 mode works with no camera access at all.",
    privacyTeaser: "Filmeter collects no data and ships no analytics, telemetry or crash reporters. Roll history, film profiles, calibration and settings live on the phone; the only network traffic is Apple’s StoreKit.",

    // ── Long-form documentation ──
    guide: [
      {
        id: "getting-started",
        title: "Getting started",
        body: `
          <p>On first launch, Filmeter runs a short four-page onboarding: the hook, a quick question that sets your starting film speed, a note on how metering reads the camera, and a summary of what’s free. Camera access is <strong>not</strong> requested during onboarding — it’s asked in-context the first time you use the Meter tab, and if you decline, the app routes you to a “Camera access needed” screen with an <strong>Open Settings</strong> button and a <strong>Use Sunny-16 Instead</strong> button.</p>
          <h4>The first reading</h4>
          <p>Open the <strong>Meter</strong> tab and point the camera at your scene. Once auto-exposure settles, the <strong>EV</strong> reads out to a tenth of a stop and the exposure triplet and pair wheel update live. Press <strong>LOCK</strong> to hold a reading (auto-exposure keeps running underneath), <strong>MEASURE</strong> to take a fresh hardware read, and <strong>LOG</strong> to save the frame to your current roll.</p>
        `,
      },
      {
        id: "metering-modes",
        title: "Reflected, incident, and Sunny-16",
        body: `
          <p>Filmeter meters three ways, chosen with the segmented control at the top of the Meter tab:</p>
          <ul>
            <li><strong>Reflected</strong> (free) — the back camera reads the light bouncing off your subject. This is the default mode.</li>
            <li><strong>Incident (beta)</strong> (Pro) — the front camera stands in for a diffuser aimed toward the light, showing illuminance in lux alongside EV. It ships as an honest approximation with no accuracy claim — a falling-light reading, experimental.</li>
            <li><strong>Sunny-16</strong> (free) — no camera at all: pick a labelled condition (Bright sun, Open shade, Bright interior, Dim tungsten, Low light) and the meter uses that reference EV. This drives the full pairs / zone / history pipeline even with the camera denied.</li>
          </ul>
        `,
      },
      {
        id: "analog-toolkit",
        title: "The analog toolkit",
        body: `
          <p><strong>The Zone System</strong> turns the app into a live spot meter: tap the preview to capture a tone, and the first capture becomes the anchor (Zone V, 18% mid-gray). An 11-swatch strip shows where each captured tone lands; <em>Place −1 / +1</em> shifts the anchor, and two cards summarise where you’ve placed and the scene’s contrast (N− / N / N+).</p>
          <p><strong>Reciprocity</strong> applies the Schwarzschild law — <code>t_corrected = t^p</code> — to long exposures, with generic presets or a custom exponent from 1.00 to 2.00. If your active film profile has auto-reciprocity on, the correction is already baked into the meter and marked. <strong>Filter &amp; bellows</strong> adds the stops for an ND or polarizer (from an F× factor or direct stops) and for macro bellows extension at a given magnification, then pushes the total back into the exposure.</p>
        `,
      },
      {
        id: "profiles-rolls",
        title: "Film profiles and the roll logbook",
        body: `
          <p><strong>Film profiles</strong> are records you create — a name, an ISO, a reciprocity exponent and threshold, and an auto-apply flag. They show up in the Meter’s ISO pill, the new-roll form, and the Reciprocity screen. Free users keep one profile; Pro unlocks unlimited. Filmeter ships <strong>no branded film data</strong> — a profile holds only what you type.</p>
          <p>The <strong>History</strong> tab is a per-frame roll logbook. The active roll (a sequential number, a film-stock name, and an ISO) collects frames; each frame stores EV, aperture, shutter, mode, a reciprocity flag, and a timestamp. Start a new roll from the form, and completed rolls archive to a read-only Past Rolls list. <em>Export roll · CSV</em> (Pro) writes a clean spreadsheet table. Everything lives in a local JSON file — there is no cloud.</p>
        `,
      },
      {
        id: "calibration",
        title: "Calibration and accuracy",
        body: `
          <p>Filmeter’s <strong>Calibration</strong> is a one-time, per-mode offset. Read the live raw EV of a known scene, enter or step the true EV from a trusted reference, and the app stores the difference and applies it to every future reading. Reflected and incident modes keep independent offsets; both are sanity-clamped to ±10 stops, and non-finite values are rejected so a bad entry can’t break the meter.</p>
          <p>After calibration the reading tracks a reference within roughly a third of a stop across the working range (EV ~5–15). All of the math is derived from public photometry equations and public industry constants — <strong>no proprietary reciprocity tables are reproduced</strong> — and every relevant screen carries the disclaimer that Filmeter is <em>an estimate, not a laboratory instrument</em>. Always cross-check important exposures against a trusted meter.</p>
        `,
      },
      {
        id: "free-pro",
        title: "Free, Pro, and Lifetime",
        body: `
          <p>The core is free: reflected and Sunny-16 metering, EV and exposure pairs, calibration, one film profile, and the roll logbook. <strong>Pro</strong> adds incident metering, the Zone System, reciprocity, filter &amp; bellows factors, CSV export, and unlimited film profiles.</p>
          <p>Pro is one clear choice: a <strong>Monthly</strong> or <strong>Yearly</strong> subscription with a free trial, or a one-time <strong>Lifetime</strong> purchase that never renews. Prices are shown in the App Store for your region. Entitlement is verified against StoreKit — an unverified transaction never grants Pro — and <em>Restore purchases</em>, available in Settings and on the paywall, always reports a visible result. Manage or cancel any time via Apple’s native sheet; cancelling keeps access until the period ends.</p>
        `,
      },
    ],

    // ── FAQ (from PRODUCT_DOC §11) ──
    faq: [
      { q: "Does it take a photo of the scene?", a: "No. Filmeter reads only the camera’s live exposure metadata (aperture, shutter, ISO). Nothing is captured or stored — the data model has no image field." },
      { q: "How accurate is it?", a: "After a one-time calibration it tracks a reference within about a third of a stop across normal light — enough for colour and B&W negative latitude. It’s an estimate, not a lab instrument; always cross-check important shots against a trusted meter." },
      { q: "Do I need internet?", a: "No. Metering and logging are fully offline. The only network use is Apple’s App Store for a purchase or restore." },
      { q: "Which films are supported?", a: "Any — you enter the ISO and, optionally, a reciprocity exponent as a film profile. Filmeter ships no branded film tables; a profile holds only what you type." },
      { q: "What’s free versus Pro?", a: "Free: reflected and Sunny-16 metering, EV, exposure pairs, calibration, one film profile, and the roll logbook. Pro: incident metering, the Zone System, reciprocity, filter & bellows, CSV export, and unlimited film profiles." },
      { q: "Is incident metering accurate?", a: "Incident ships as a beta — a falling-light reading from the front camera without a real diffuser dome. It’s an honest, experimental extra with no accuracy claim; reflected metering is the calibrated core." },
      { q: "Does it work in the iOS Simulator?", a: "The non-camera math and UI run in the Simulator, and Sunny-16 drives the full pipeline there. But the camera meter needs a physical device — the Simulator has no real exposure data." },
      { q: "Does Filmeter need any permission besides the camera?", a: "No. The camera is the only permission it ever requests, used solely to read the scene’s live exposure. Sunny-16 works with no camera access at all. No Photos, Location, Microphone, Contacts, or Local Network." },
      { q: "How do I cancel?", a: "Manage or cancel any time via Apple’s native subscription sheet in Settings; cancelling stops auto-renewal and keeps access until the period ends. Or buy Lifetime once and never think about it again." },
    ],
  },

  // Source of truth: Ovessa PRODUCT_DOC.md (2026-07-25, codebase commit 1701083).
  ovessa: {
    version: "1.0.0",
    // versionDate omitted until App Store launch.
    // appStore omitted until live — the Download button renders disabled.
    appStoreLabel: "Download on the App Store",
    price: "Subscription · pricing shown in the App Store",
    privacyDoc: "ovessa/privacy.html",
    termsDoc: "ovessa/terms.html",
    // heroImage / screenshots omitted until the App Store screenshot lot is shot.

    tagline: "The PCOS tracker\nthat never uploads\nyour cycle.",
    subhead: "Ovessa is a private companion for PCOS — an honest cycle tracker built for irregularity, food scanning with a calm PCOS grade screened against your allergies, metabolic tracking through Apple Health, and a doctor-ready PDF. Everything stays on your iPhone. No account. No cloud. App Privacy label: Data Not Collected.",
    blurb: "Ovessa is a native iPhone tracker for polycystic ovary syndrome — cycle, symptoms, food, supplements and metabolic health in one calm app, built for the way PCOS actually behaves. Cycles that refuse to run on a 28-day script get an honest probabilistic window instead of a fake exact day. Food gets a deterministic A–E PCOS grade computed from the label's own figures against published criteria — screened against your allergies first — by barcode scan, meal photo, or manual entry. Weight, CGM glucose, water, sleep and steps come through Apple Health, and a doctor-ready PDF turns it all into something you can put on the desk at your next appointment.",
    pitch: "An honest cycle window instead of a fake exact day, a food grade computed from the label rather than guessed by a model, and a report your endocrinologist can read in 30 seconds — with your health data never leaving the iPhone.",

    // ── Hero stats ──
    stats: [
      { value: "A–E", label: "deterministic food grade" },
      { value: "31", label: "Apple Health types" },
      { value: "0", label: "accounts or logins" },
      { value: "0", label: "analytics SDKs" },
    ],

    // ── Top feature highlights (3 cards) ──
    features: [
      { title: "Built for irregularity, not against it.", body: "Most period trackers treat an irregular cycle as an error state. Ovessa refuses to fake precision: no prediction at all until it has seen at least three of your cycles, a likely window that never collapses below four days, a wider window when your history is more variable — and copy that says out loud that a wide window is normal with PCOS." },
      { title: "Verified numbers, never AI slop.", body: "The PCOS grade is deterministic arithmetic over the product's own label figures, citing published public criteria — no model, no cloud verdict. For photo meals a vision model only says what and how much; the calories and macros come from the USDA food database, and any estimate that does surface is badged “≈ approximate”, forever." },
      { title: "Private by architecture.", body: "No account, no cloud, no CloudKit, no analytics, no third-party SDKs. Health data is read in place from Apple Health, on-device. The only bytes that ever leave the iPhone: a meal photo you explicitly scan — processed in memory by a stateless service that writes no logs — and the barcode number of a packet." },
    ],

    // ── How it works ──
    flowTitle: "Log it. Scan it. Share it.",
    flow: [
      { step: "01", title: "Log the day", body: "Period flow, symptoms with tap-cycled intensity, a note, supplements checked off, weight and water — one backdatable screen logs a whole day in seconds. Your existing cycle history in Apple Health fills the tracker from day one." },
      { step: "02", title: "Scan what you eat", body: "Scan a barcode for an A–E PCOS grade from the label's own figures, photograph a plate and correct the portions in editable chips, or add a meal by hand. Your declared allergens are screened first, and they outrank the grade." },
      { step: "03", title: "Walk in prepared", body: "One tap builds a doctor-ready PDF — cycle lengths with their real variability, symptoms, weight, glucose, supplements, nutrition — generated on the iPhone and shared only when you choose. Or export everything as CSV." },
    ],

    // ── Full feature catalogue ──
    catalogue: [
      {
        kicker: "Cycle — built for irregularity",
        items: [
          "A month calendar with per-day marks: period fill by flow, a dashed predicted window on genuinely future days, symptom ticks, a today ring — and a legend that shows only the marks actually on screen.",
          "Predictions are probabilistic by construction: never stored, always derived; the likely window can never collapse below four days; a more irregular history widens it rather than faking confidence.",
          "No prediction at all until three recorded cycles. Before that you get a factual “This cycle · Day N” card, or calm progress toward three.",
          "A “Your cycles” history — average length with its real min–max, average period days, cycles tracked, and a scaled timeline of every detected cycle. Unknowable figures read “—”.",
          "Long-cycle copy is deliberately reassuring: “Your cycle tends to run long — this is normal for you, not a missed period.”",
        ],
      },
      {
        kicker: "Food — three ways in, one verdict",
        items: [
          "Barcode scan with live camera, torch, and a manual barcode fallback; anything scanned once is cached and works offline forever.",
          "A deterministic A–E PCOS grade from the product's own per-100 g label figures, citing public criteria — UK front-of-pack thresholds, the UK soft-drinks levy band, the 10:1 carb-to-fibre refined-carb proxy, WHO guidance on trans fat and non-sugar sweeteners.",
          "“Can't grade this one” is a first-class outcome: no sugar figure means no grade. Missing rule inputs cap the best possible grade and the copy names what's absent.",
          "Meal photos: capture or pick from the library, then confirm editable name / quantity / unit chips with live USDA-verified nutrition per item before anything is saved.",
          "Log a scanned product as a meal using the label's own numbers — by grams, by servings when the serving string parses, or by a fraction of the pack when the net weight does.",
          "Meal totals never invent a zero: a nutrient the source is silent about reads “—”. Photo and manual meals carry a ±20–30 % estimate note.",
        ],
      },
      {
        kicker: "Allergies come first",
        items: [
          "The 14 legally-declarable allergens are a hard rule: a declared match always reads “avoid”, and it outranks the grade rather than sitting next to it.",
          "Custom free-text allergens run a weaker declared-ingredient check — and the app says so plainly instead of implying more.",
          "Ten dietary preferences ride as advisories only; a preference can never mask or soften an allergy warning.",
          "The strongest affirmative the app will ever show is “no allergens from your list are declared on this label” — never “allergen-free”, never “safe”.",
        ],
      },
      {
        kicker: "Symptoms, supplements & the day",
        items: [
          "One Day-log sheet, shared by Today and any calendar day: period flow, symptoms at four intensity steps, and an optional note that survives on its own.",
          "Custom symptoms join a persistent catalog — add once and the chip appears everywhere; symptoms you named during onboarding are hoisted first in every grid.",
          "Supplements and medications with per-slot check-off, prescriptions filed with an Rx badge, and a discontinue path that keeps history instead of deleting it.",
          "Gentle grouped reminders — one notification per time of day, never a barrage. Local only; nothing is sent anywhere. No streaks, no missed-dose shaming.",
          "Weight in your own unit with no arbitrary upper cap, and a water card that writes through to Apple Health, 250 mL per tap.",
        ],
      },
      {
        kicker: "Apple Health & the doctor report",
        items: [
          "Two-way sync across 17 read and 14 written types — cycle, basal temperature, body mass, the dietary types, and seven symptom categories.",
          "Glucose from a CGM, sleep and steps are read-only by design — sensor data Ovessa reads but never authors. The first sync imports your full history, so the tracker is populated from day one.",
          "Edits replace samples in place under a stable sync identifier, local deletions propagate as tombstones, and a deletion made in the Health app mutes rather than destroys your own diary entry — with one tap to share it again.",
          "A Summary lens that is the on-screen twin of the doctor PDF — every figure comes from the same aggregate, so screen and document can never disagree.",
          "The doctor report is a vector US-Letter PDF built on the iPhone: cycle length only as mean, range and variability; absent figures nil rather than zero; estimates labelled. The patient name is optional.",
          "An Insights lens gated until 14 distinct logged days, showing a weekly-bucketed symptom trend decided by a statistical test — and no correlation claims it cannot defend.",
        ],
      },
      {
        kicker: "Privacy — by architecture",
        items: [
          "No account, no cloud, no CloudKit, no analytics or telemetry, no crash reporters, no third-party SDKs at all. The App Privacy label is “Data Not Collected”.",
          "A Privacy centre with live per-model counts of what's stored, a 10-file CSV export of everything, and a “Delete everything” that is immediate and permanent — “we can't recover it because we never had it”.",
          "The meal-photo scan goes to a stateless service with no database and no request logging; images are processed in memory and discarded. Requests are authenticated with Apple App Attest — device integrity, never identity.",
          "Barcode lookups go anonymously to Open Food Facts: the digits only, no cookies, nothing about you. Attribution is rendered on every product card under the ODbL.",
          "Cycle, symptoms, supplements, weight, water, insights, the doctor PDF and CSV export all work fully offline.",
        ],
      },
    ],

    // ── System requirements ──
    requirements: [
      "iPhone running iOS 26.5 or later (iPad is supported; the positioning is iPhone-first)",
      "A camera for barcode and meal-photo scanning — both have fallbacks: manual barcode entry, the photo library, or a fully manual meal entry",
      "Apple Health is entirely optional and never required; every feature that uses it degrades gracefully without it",
      "A network connection only for a first-ever barcode lookup, meal-photo recognition, nutrition lookup, and the App Store — everything else works offline",
      "An auto-renewing subscription, with a free trial for eligible new subscribers; no account is ever created",
    ],

    permissionsNote: "Camera (to read a barcode on a packet, or to photograph a meal), Apple Health read and write (optional, type-by-type, controlled in the Health app), and local notifications for supplement reminders. The photo library is reached through Apple's out-of-process picker, so Ovessa sees only the photo you pick. No Location, Microphone, Contacts, or Local Network — and no advertising or tracking permission, because there is nothing to track.",
    privacyTeaser: "Ovessa's App Privacy label is “Data Not Collected”. Your cycle, symptoms, supplements, weight and meals live in an on-device database with iCloud sync deliberately disabled; Apple Health data is read in place. Only a meal photo you explicitly scan and a barcode number ever leave the phone.",

    // ── Long-form documentation ──
    guide: [
      {
        id: "getting-started",
        title: "Getting started",
        body: `
          <p>Onboarding is deliberately short — two explain pages and <strong>five quick questions</strong>, then a processing beat and a summary. It asks what brings you to Ovessa, which symptoms you have, anything you avoid (allergies as a hard rule, preferences as advisories), whether you take anything for it, and whether you'd like to connect Apple Health. Every question is skippable, and <strong>nothing is written to the device until the final “See your plan”</strong> — backing out mid-flow leaves your phone untouched.</p>
          <p>The paywall comes after onboarding, before the tabs. Camera and notification permissions are <strong>not</strong> requested during onboarding; they're asked in context, the first time a feature needs them.</p>
          <h4>The five tabs</h4>
          <p><strong>Today</strong> is the daily dashboard — a live cycle card, supplements to check off, quick actions for a symptom, a food scan or a weight entry, and a water card. <strong>Cycle</strong> is the calendar and your cycle history. <strong>Food</strong> is the three ways in and your meal log. <strong>My Health</strong> holds the Summary and Insights lenses and the doctor report. <strong>Settings</strong> holds tracking setup, Apple Health, units, appearance, the Privacy centre, and support.</p>
        `,
      },
      {
        id: "cycle",
        title: "Cycle tracking that doesn't fake precision",
        body: `
          <p>Ovessa's prediction engine is built around one rule: <strong>never pretend to know a day it can't know.</strong> Five constraints are enforced in the code and covered by tests — predictions are always derived and never stored; the “likely” window can never collapse below four days; a more irregular history produces a wider window rather than false confidence; there is <strong>no prediction at all until three recorded cycles</strong>; and the calendar tints exactly the window the card states.</p>
          <p>The calendar's month grid marks period days (opacity by flow), the predicted window as a dashed outline on genuinely future days, symptom ticks, and today. Below it, the regime depends on your data: three or more cycles gets the prediction card with a date range and a confidence bar, two gets a factual “This cycle · Day N”, fewer gets calm progress toward three.</p>
          <p>Your <strong>cycle history</strong> reports averages alongside their real min–max and how many cycles have been tracked, with a scaled timeline of each one. With two or more completed cycles it says the useful thing out loud: your cycles vary by about N days, which is typical with PCOS — so Ovessa tracks the range instead of pretending it's fixed.</p>
        `,
      },
      {
        id: "food",
        title: "The food engine — how the grade is computed",
        body: `
          <p>The PCOS grade is a <strong>letter from A to E computed on your iPhone</strong> from the product's own label figures per 100 g. It is arithmetic, not a model: a score of 100 minus penalties, banded into five letters and mapped onto a three-step visual scale. Every rule names its public source in the code — the UK front-of-pack traffic-light thresholds for sugars, saturated fat and salt; the UK soft-drinks levy upper band for drink sugar; the 10:1 carbohydrate-to-fibre ratio as a refined-carb proxy; WHO guidance on industrial trans fat and on non-sugar sweeteners. The contested seed-oil rule exists but scores zero, shown as a note that says the evidence is contested.</p>
          <p>There are honesty valves. <strong>No sugar figure means no grade at all</strong> — “can't grade this one” is a real outcome, not an error state. One or two missing rule inputs cap the best achievable grade at B, three or more at C, and the copy names which nutrients are missing.</p>
          <h4>Where the numbers come from</h4>
          <p>Barcode products use the label's own figures, fetched anonymously from <strong>Open Food Facts</strong> (attribution shown on every product card under the ODbL). Photo and manual meals get verified calories and macros from the public <strong>USDA FoodData Central</strong> database. A vision model is used for one job only — recognising <em>what</em> is on the plate and roughly how much — and where USDA has no match, its rough per-100 g figure appears only as a badged “≈ estimate”, which persists so the badge survives a relaunch.</p>
          <p>The <strong>allergen screen runs before the grade and outranks it.</strong> The 14 declarable allergens are a hard rule; custom free-text allergens are a weaker declared-ingredient check that says so; dietary preferences are advisory and can never move the safety status. The strongest affirmative you will ever see is “no allergens from your list are declared on this label”.</p>
        `,
      },
      {
        id: "apple-health",
        title: "Apple Health, two ways",
        body: `
          <p>Connecting Apple Health is optional and can be declined forever. When you do connect, Ovessa reads 17 types and writes 14 — cycle flow, basal body temperature, body mass, the dietary types, and seven symptom categories both ways; glucose from a CGM, sleep and steps <strong>read-only by design</strong>, because they're sensor data Ovessa has no business authoring. Water is the one metabolic stream it writes, 250 mL per tap, and it deletes only its own samples.</p>
          <p>The first sync is a <strong>full-history import</strong>: whatever cycle history already sits in Apple Health from another tracker or your Watch populates Ovessa from day one. After that, reads are anchored deltas that run at launch, on foreground, and a couple of seconds after any local save — plus a manual “Sync now”. Writes carry a stable sync identifier so edits <strong>replace samples in place</strong> rather than duplicating them, and local deletions propagate as tombstones.</p>
          <p>Deleting something in the Health app deletes Health-originated rows here, but only <strong>mutes</strong> rows Ovessa authored — your diary survives, Health's deletion is respected, and one tap shares the entry again. Two honest limits: HealthKit hides read authorization from apps, so Ovessa's status will only ever claim “requested”, never “connected and reading”; and sync runs on foreground triggers in v1, not in the background.</p>
        `,
      },
      {
        id: "doctor-report",
        title: "The doctor report and your exports",
        body: `
          <p>The <strong>Summary</strong> lens in My Health is the on-screen twin of the PDF — both are rendered from the same aggregate, so the screen and the document can never disagree. Pick a period (last 30 or 90 days, six months, all time, or a custom range) and the cards appear in clinical order: cycle, symptoms, metabolic, nutrition, supplements and medications, allergies and diet, with a badge on anything read from Apple Health.</p>
          <p>“Share report for your doctor” builds a <strong>vector US-Letter PDF</strong> on the device, multi-page, with a page-one preview before you share it. The honesty rules are baked into its types: cycle length appears only as a mean with its range and variability, and only once there are at least two period starts; absent figures are absent rather than zero; estimates are labelled. The patient name is optional — left blank, the report shows no name. It never leaves the iPhone until you send it.</p>
          <p>Prefer raw data? The Privacy centre exports <strong>ten machine-stable CSV files</strong> — cycle days, symptoms, custom symptoms, supplements, intakes, weight, diet profile, meals, meal items, scanned products — with ISO-8601 dates, locale-free decimals, and an empty field (never a 0) for anything unknown.</p>
        `,
      },
      {
        id: "privacy-and-data",
        title: "What leaves the iPhone, exactly",
        body: `
          <p>Two things, both at your explicit request. A <strong>meal photo you tap to scan</strong> is downscaled and sent once over HTTPS to a stateless service, which forwards it to a vision model under terms that prohibit training on it and returns what food it sees. That service has <strong>no database and no request logging</strong> — images are processed in memory and discarded — and its diagnostics carry status codes, never content. And a <strong>barcode number</strong>, looked up anonymously against Open Food Facts with no cookies and no identifiers.</p>
          <p>Requests carry Apple <strong>App Attest</strong> proof that the caller is a genuine, un-tampered copy of Ovessa on real Apple hardware, plus an opaque per-install identifier used solely to enforce a daily scan cap. Neither is identity: the attestation binds a cryptographic key you never see, no account exists to link it to, and the rate-limit counter lives in memory that evaporates rather than in any datastore.</p>
          <p>Everything else is local. Your logs live in an on-device database with iCloud sync <strong>deliberately disabled</strong>; Apple Health data is read in place and never copied out. The Privacy centre shows live per-model counts of exactly what's stored, and <strong>Delete everything</strong> erases all of it immediately and permanently — it never touches Apple Health itself, which stays yours to manage in the Health app. The full detail is in the <a href="ovessa/privacy.html" style="color: var(--accent);">privacy policy</a>.</p>
        `,
      },
      {
        id: "subscription",
        title: "Subscription, trial, and what happens if you stop",
        body: `
          <p>Ovessa is a subscription — an <strong>Annual</strong> or a <strong>Monthly</strong> plan, with a <strong>free trial</strong> for eligible new subscribers. Current prices are shown in the App Store and on the paywall for your region, alongside the trial terms and the first charge date, before you commit — and trial copy appears only when Apple confirms you are eligible for it. There are no countdown timers, no fake discounts, and no offer that appears when you try to delete the app. Manage or cancel through Apple at any time: <strong>we never hold your card.</strong></p>
          <p>The subscription <em>is</em> the app — there's no free tier and no feature-gating matrix. The price is the business model: no ads, no coaching upsell, and no monetising your data, which would be impossible anyway.</p>
          <p><strong>Your data outlives your subscription.</strong> If you stop paying, Ovessa keeps letting you view the Summary lens, build the doctor PDF, export every CSV, and delete everything — free, without resubscribing. Resubscribing is only to keep tracking going. And because no account exists, the usual failure of “I paid but can't log in” simply cannot happen: entitlement comes from Apple's own verified transaction record, and “Restore purchases” is on the paywall and in Settings.</p>
        `,
      },
    ],

    // ── FAQ (from PRODUCT_DOC §14) ──
    faq: [
      { q: "Does Ovessa upload my cycle data anywhere?", a: "No. There's no account and no cloud. Your logs live on your iPhone and, if you connect it, in your own Apple Health. The App Privacy label is “Data Not Collected”." },
      { q: "What leaves my phone when I scan something?", a: "A barcode scan sends only the barcode number, anonymously. A meal photo is sent once, over an authenticated connection, to be recognised — processed in memory, never stored, never logged — and nothing about you travels with it." },
      { q: "Is the PCOS grade AI?", a: "No. It's deterministic arithmetic over the product's own label figures, using published public criteria that are cited in-app. A vision model is used only to recognise what's in a meal photo; the numbers come from the USDA database, and anything estimated is badged as an estimate." },
      { q: "I have a food allergy — can I rely on the screen?", a: "Use it as a first filter, never the last word. Ovessa checks what a product's database record declares; records can be wrong or stale, and a photo can't see inside a sauce. Always read the physical label." },
      { q: "My cycles are very irregular. Will predictions work?", a: "Ovessa was designed for exactly that. It shows a likely window that honestly widens with your variability — and shows nothing at all until it has seen at least three of your cycles." },
      { q: "Does it work with my CGM?", a: "If your CGM writes to Apple Health, Ovessa reads the glucose on-device and puts it next to your cycle, food, and weight. It never authors glucose itself." },
      { q: "What happens to my data if I stop paying?", a: "It stays on your phone, and Ovessa keeps letting you view, export, and delete it — free. Resubscribing is only for continued tracking." },
      { q: "Do I need Apple Health?", a: "No. It's optional at every step, and there's an always-available “Maybe later”. Connecting it just means your existing cycle history fills the tracker from day one and your logs can flow back out to Health." },
      { q: "Is Ovessa a medical device?", a: "No. It's a self-tracking journal — no diagnosis, no treatment, no dosing advice. Cycle estimates must never be used for contraception. Bring the doctor report to a professional; that's what it's for." },
      { q: "How do I cancel?", a: "Through Apple, any time — iOS Settings → Apple Account → Subscriptions, or Settings → Subscription inside Ovessa, which opens Apple's own sheet. Cancelling keeps access until the period ends. Deleting the app does not cancel a subscription." },
    ],
  },
};
