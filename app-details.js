// shilovskii.dev — per-app rich content (features, screenshots, FAQ, requirements)
// Source of truth for Migaja: PRODUCT_DOC.md (commit 6bdabdf, supersedes earlier drafts).
window.APP_DETAILS = {
  migaja: {
    version: "1.0",
    versionDate: "May 6, 2026",
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
    priceDetail: "Pro $2.99/mo or $19.99/yr — save 44%",
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

    // ── Pricing block ──
    pricing: {
      trial: "7 days free on first launch. No card. No account. Anchored to your Apple ID — reinstalling won't reset it.",
      free: {
        title: "Free, forever",
        items: [
          "Every clip is still captured",
          "Full-text search across the entire history",
          "Pinning, deletion, retention controls",
          "Exclusions, themes, hotkeys — all unrestricted",
        ],
      },
      pro: {
        title: "Pro",
        monthly: "$2.99",
        yearly: "$19.99",
        save: "Save 44%",
        items: [
          "Semantic search results across the full history",
          "Hybrid FTS + semantic ranking",
          "100+ languages, on-device",
          "Family Sharing supported",
        ],
      },
    },

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
            <li><strong>Match precision</strong> ranges from <code>0.60</code> to <code>0.95</code>, default <code>0.80</code>. Lower if semantic results feel too narrow; raise if they feel too loose.</li>
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
};
