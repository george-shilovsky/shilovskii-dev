// shilovskii.dev — per-app rich content (features, screenshots, FAQ, requirements)
// Source of truth for Migaja: PRODUCT_DOC.md (commit 6bdabdf, supersedes earlier drafts).
window.APP_DETAILS = {
  migaja: {
    version: "1.0.0",
    versionDate: "May 21, 2026",
    appStore: "https://apps.apple.com/us/app/migaja-clipboard-manager/id6770649369",
    heroImage: "migaja-search-programming.png",

    // ── Screenshot gallery (search + settings) ──
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
    price: "Free · Pro $1.99/mo or $6.99 once",
    privacyDoc: "json-pilot/privacy.html",
    termsDoc: "json-pilot/terms.html",

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
};
