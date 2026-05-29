// Renders an app detail page. Page sets <body data-app="<id>"> and includes this script.
// This page is also the documentation for the app — there's no separate docs section.
(function () {
  const id = document.body.dataset.app;
  const app = SiteChrome.APPS.find(a => a.id === id);
  const detail = (window.APP_DETAILS || {})[id];
  if (!app || !detail) return;

  document.title = `${app.name} — shilovskii.dev`;
  const otherApps = SiteChrome.APPS.filter(a => a.id !== id);

  const privacyHref = detail.privacyDoc || `${id}/${id}-privacy.html`;
  const termsHref = detail.termsDoc || `${id}/${id}-terms.html`;

  // ─── tiny helpers ───
  const esc = (s) => String(s).replace(/[&<>]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;' }[c]));
  const tagline = detail.tagline
    ? detail.tagline.split('\n').map(esc).join('<br>')
    : esc(app.summary);

  const html = `
    <!-- Crumb -->
    <section style="padding: 28px 0 0;">
      <div class="container-wide">
        <div class="crumb">
          <a href="${SiteChrome.BASE}index.html">shilovskii.dev</a>
          <span class="sep">/</span>
          <a href="${SiteChrome.BASE}apps.html">Apps</a>
          <span class="sep">/</span>
          <span class="here">${app.name}</span>
        </div>
      </div>
    </section>

    <!-- Hero -->
    <section style="padding: 48px 0 32px;">
      <div class="container-wide app-hero" style="display: grid; grid-template-columns: 1.05fr 1fr; gap: 64px; align-items: center;">
        <div>
          <div style="display: flex; align-items: center; gap: 16px; margin-bottom: 28px;">
            ${app.icon
              ? `<img src="${SiteChrome.BASE}${app.icon}" alt="${app.name} icon" style="width: 64px; height: 64px; border-radius: 16px; display: block; object-fit: cover;">`
              : `<div class="app-icon" style="width: 64px; height: 64px; border-radius: 16px; background: ${app.color}; font-size: 28px;">${app.glyph}</div>`}
            <div>
              <div style="font-size: 22px; font-weight: 600; letter-spacing: -0.02em;">${app.name}</div>
              <div style="font-size: 12px; color: var(--fg-3); margin-top: 2px; font-family: 'JetBrains Mono', ui-monospace, monospace;">${app.tag} · v${detail.version}${detail.versionDate ? ` · ${detail.versionDate}` : ''}</div>
            </div>
          </div>
          <h1 class="hero-title" style="font-size: 52px; line-height: 1.04; letter-spacing: -0.035em; font-weight: 600; margin-bottom: 22px; text-wrap: balance;">${tagline}</h1>
          <p style="font-size: 18px; color: var(--fg-2); line-height: 1.55; text-wrap: pretty; max-width: 520px;">${esc(detail.subhead || detail.blurb)}</p>
          <div style="display: flex; gap: 12px; margin-top: 32px; flex-wrap: wrap;">
            ${detail.appStore
              ? `<a href="${detail.appStore}" class="btn btn-primary" target="_blank" rel="noopener">${appStoreIcon()} ${esc(detail.appStoreLabel || 'Download on the Mac App Store')}</a>`
              : `<button class="btn btn-primary" disabled>${appStoreIcon()} ${esc(detail.appStoreLabel || 'Download on the Mac App Store')}</button>`}
            <a href="#how" class="btn btn-ghost">See how it works <span aria-hidden="true">↓</span></a>
          </div>
          ${detail.price ? `<div style="margin-top: 18px; font-size: 12px; color: var(--fg-3); font-family: 'JetBrains Mono', ui-monospace, monospace;">${esc(detail.price)}${detail.priceDetail ? ` · ${esc(detail.priceDetail)}` : ''}</div>` : ''}
        </div>
        <div>
          ${detail.heroImage
            ? `<img src="${detail.heroImage}" alt="${app.name} screenshot" style="${detail.heroPortrait ? 'width: auto; max-width: 100%; max-height: 660px; margin: 0 auto;' : 'width: 100%;'} height: auto; display: block; border-radius: 14px; box-shadow: 0 1px 0 var(--line), 0 24px 48px -16px rgba(0,0,0,0.18), 0 8px 16px -8px rgba(0,0,0,0.10);">`
            : `<div class="img-ph" style="aspect-ratio: 4/3; background-color: ${app.color}15;">screenshot · ${app.name}.app</div>`
          }
        </div>
      </div>
    </section>

    <!-- Stat strip -->
    ${detail.stats ? `
    <section style="padding: 24px 0 40px;">
      <div class="container-wide">
        <div class="stats-grid" style="display: grid; grid-template-columns: repeat(${detail.stats.length}, 1fr); gap: 0; border-top: 1px solid var(--line); border-bottom: 1px solid var(--line);">
          ${detail.stats.map((s, i) => `
            <div style="padding: 20px 24px; ${i ? 'border-left: 1px solid var(--line);' : ''}">
              <div style="font-size: 28px; font-weight: 600; letter-spacing: -0.03em; color: var(--fg);">${esc(s.value)}</div>
              <div style="font-size: 11px; color: var(--fg-3); font-family: 'JetBrains Mono', ui-monospace, monospace; text-transform: uppercase; letter-spacing: 0.06em; margin-top: 6px;">${esc(s.label)}</div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
    ` : ''}

    <!-- Pitch -->
    <section style="padding: 48px 0 32px;">
      <div class="container-narrow" style="text-align: center;">
        <div class="tag-mono" style="margin-bottom: 16px;">The pitch</div>
        <p style="font-size: 26px; line-height: 1.4; letter-spacing: -0.02em; color: var(--fg); text-wrap: balance; font-weight: 500;">${esc(detail.pitch)}</p>
      </div>
    </section>

    <!-- Top feature highlights (3 cards) -->
    <section style="padding: 48px 0;">
      <div class="container">
        <div class="features-grid" style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 16px;">
          ${detail.features.map((f, i) => `
            <div style="padding: 28px 24px; border-radius: 14px; background: var(--card); border: 1px solid var(--line); display: flex; flex-direction: column; gap: 12px;">
              <div style="font-family: 'JetBrains Mono', ui-monospace, monospace; font-size: 11px; color: var(--accent); letter-spacing: 0.06em;">${String(i + 1).padStart(2, '0')}</div>
              <div style="font-size: 17px; font-weight: 600; letter-spacing: -0.2px;">${esc(f.title)}</div>
              <p style="font-size: 14px; line-height: 1.6; color: var(--fg-2); text-wrap: pretty;">${esc(f.body)}</p>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- How it works -->
    ${detail.flow ? `
    <section id="how" style="padding: 64px 0; scroll-margin-top: 80px; background: var(--bg-2); border-top: 1px solid var(--line); border-bottom: 1px solid var(--line);">
      <div class="container-wide">
        <div class="section-head">
          <div>
            <div class="tag-mono" style="margin-bottom: 12px;">How it works</div>
            <h2 class="section-title" style="font-size: 30px;">${esc(detail.flowTitle || 'Three moves, end to end.')}</h2>
          </div>
        </div>
        <div class="flow-grid" style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 0; border: 1px solid var(--line); border-radius: 14px; background: var(--card); overflow: hidden;">
          ${detail.flow.map((s, i) => `
            <div style="padding: 32px 28px; ${i ? 'border-left: 1px solid var(--line);' : ''} display: flex; flex-direction: column; gap: 14px;">
              <div style="font-family: 'JetBrains Mono', ui-monospace, monospace; font-size: 11px; color: var(--accent); letter-spacing: 0.08em;">${esc(s.step)} ${i < detail.flow.length - 1 ? '→' : ''}</div>
              <div style="font-size: 18px; font-weight: 600; letter-spacing: -0.2px;">${esc(s.title)}</div>
              <p style="font-size: 14px; line-height: 1.6; color: var(--fg-2); text-wrap: pretty; margin: 0;">${esc(s.body)}</p>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
    ` : ''}

    <!-- Screenshot gallery -->
    ${detail.screenshots ? (() => {
      const groups = Object.keys(detail.screenshots);
      const total = groups.reduce((n, g) => n + detail.screenshots[g].length, 0);
      const cols = detail.screenshotCols || 2;
      const labels = detail.screenshotLabels || {};
      return `
    <section id="screenshots" style="padding: 64px 0 24px; scroll-margin-top: 80px;">
      <div class="container-wide">
        <div class="section-head">
          <div>
            <div class="tag-mono" style="margin-bottom: 12px;">${esc(detail.screenshotsKicker || 'A look inside')}</div>
            <h2 class="section-title" style="font-size: 30px;">${esc(detail.screenshotsHeading || 'A look inside.')}</h2>
          </div>
          <div class="section-meta">${total} screens</div>
        </div>
        ${groups.map((group, gi) => `
          <div style="margin-top: ${gi === 0 ? '0' : '40px'};">
            ${labels[group] ? `<div class="tag-mono" style="margin-bottom: 16px; color: var(--accent);">${esc(labels[group])}</div>` : ''}
            <div class="shots-grid" style="display: grid; grid-template-columns: repeat(${cols}, 1fr); gap: 20px;">
              ${detail.screenshots[group].map(s => `
                <figure style="margin: 0; display: flex; flex-direction: column; gap: 12px;">
                  <img src="${esc(s.src)}" alt="${esc(s.caption)}" loading="lazy" style="width: 100%; height: auto; display: block; border-radius: 12px;">
                  <figcaption style="font-size: 13px; color: var(--fg-3); line-height: 1.55; text-wrap: pretty; padding: 0 4px;">${esc(s.caption)}</figcaption>
                </figure>
              `).join('')}
            </div>
          </div>
        `).join('')}
      </div>
    </section>
    `;
    })() : ''}

    <!-- Full feature catalogue -->
    ${detail.catalogue ? `
    <section style="padding: 64px 0 32px;">
      <div class="container-wide">
        <div class="section-head">
          <div>
            <div class="tag-mono" style="margin-bottom: 12px;">Feature catalogue</div>
            <h2 class="section-title" style="font-size: 30px;">Everything ${app.name} does, by area.</h2>
          </div>
          <div class="section-meta">${detail.catalogue.length} areas · ${detail.catalogue.reduce((n, g) => n + g.items.length, 0)} capabilities</div>
        </div>
        <div class="catalogue-grid" style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 0; border: 1px solid var(--line); border-radius: 14px; background: var(--card); overflow: hidden;">
          ${detail.catalogue.map((group, i) => `
            <div style="padding: 28px 28px 30px; ${i % 2 === 1 ? 'border-left: 1px solid var(--line);' : ''} ${i >= 2 ? 'border-top: 1px solid var(--line);' : ''}">
              <div class="tag-mono" style="margin-bottom: 14px;">${esc(group.kicker)}</div>
              <ul style="display: flex; flex-direction: column; gap: 10px;">
                ${group.items.map(it => `
                  <li style="display: flex; gap: 10px; align-items: flex-start; font-size: 14px; line-height: 1.55; color: var(--fg-2); text-wrap: pretty;">
                    <span style="color: var(--accent); font-weight: 700; flex-shrink: 0;">·</span>
                    <span>${it}</span>
                  </li>
                `).join('')}
              </ul>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
    ` : ''}

    <!-- Keyboard shortcuts -->
    ${detail.shortcuts ? `
    <section id="shortcuts" style="padding: 32px 0 64px; scroll-margin-top: 80px;">
      <div class="container-wide">
        <div class="section-head">
          <div>
            <div class="tag-mono" style="margin-bottom: 12px;">Keyboard</div>
            <h2 class="section-title" style="font-size: 30px;">Built for fingers, not mice.</h2>
          </div>
          <div class="section-meta">All four global shortcuts are remappable.</div>
        </div>
        <div class="kbd-table" style="border: 1px solid var(--line); border-radius: 14px; overflow: hidden; background: var(--card);">
          ${detail.shortcuts.map((s, i) => `
            <div class="kbd-row" style="display: grid; grid-template-columns: 80px 170px 1fr auto; gap: 24px; padding: 14px 22px; align-items: center; ${i ? 'border-top: 1px solid var(--line);' : ''}">
              <div class="tag-mono" style="border: none; padding: 0; color: ${s.scope === 'Global' ? 'var(--accent)' : 'var(--fg-3)'};">${esc(s.scope)}</div>
              <div style="display: flex; gap: 4px; flex-wrap: wrap;">${renderCombo(s.combo)}</div>
              <div style="font-size: 14px; color: var(--fg); font-weight: 500;">${esc(s.action)}</div>
              <div style="font-size: 12px; color: var(--fg-3); text-align: right; max-width: 340px;">${esc(s.note)}</div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
    ` : ''}

    <!-- Documentation block heading -->
    <section style="padding: 56px 0 24px; border-top: 1px solid var(--line);">
      <div class="container-wide">
        <div class="tag-mono" style="margin-bottom: 12px;">Documentation</div>
        <h2 style="font-size: 32px; font-weight: 600; letter-spacing: -0.03em; margin-bottom: 8px;">Everything about ${app.name}, on one page.</h2>
        <p style="font-size: 15px; color: var(--fg-3); max-width: 560px; line-height: 1.55;">Guide, requirements, common questions, privacy, terms, and how to reach support.</p>
      </div>
    </section>

    ${(detail.guide && detail.guide.length) ? `
    <!-- Guide (long-form documentation with sticky TOC) -->
    <section id="guide" style="padding: 24px 0 24px; scroll-margin-top: 80px;">
      <div class="container-wide">
        <div class="guide-layout" style="display: grid; grid-template-columns: 1fr 200px; gap: 64px; align-items: start;">
          <div>
            <div class="tag-mono" style="margin-bottom: 12px;">Guide</div>
            <h3 style="font-size: 24px; font-weight: 600; letter-spacing: -0.03em; margin-bottom: 24px;">How to use ${app.name}</h3>
            <div class="prose guide-prose">
              ${detail.guide.map(s => `
                <section id="${s.id}" style="scroll-margin-top: 80px; padding: 20px 0 16px; border-top: 1px solid var(--line);">
                  <h3 style="font-size: 20px; font-weight: 600; letter-spacing: -0.2px; margin: 0 0 14px;">${s.title}</h3>
                  ${s.body}
                </section>
              `).join('')}
            </div>
          </div>
          <aside class="guide-toc" style="position: sticky; top: 80px;">
            <div class="tag-mono" style="margin-bottom: 12px;">On this page</div>
            <ul style="display: flex; flex-direction: column; gap: 6px; font-size: 12.5px;">
              ${detail.guide.map(s => `<li><a href="#${s.id}" style="color: var(--fg-2);">${s.title}</a></li>`).join('')}
              <li style="margin-top: 8px; padding-top: 8px; border-top: 1px solid var(--line);"><a href="#requirements" style="color: var(--fg-3);">Requirements</a></li>
              <li><a href="#faq" style="color: var(--fg-3);">FAQ</a></li>
              <li><a href="#privacy" style="color: var(--fg-3);">Privacy</a></li>
              <li><a href="#terms" style="color: var(--fg-3);">Terms</a></li>
              <li><a href="#support" style="color: var(--fg-3);">Support</a></li>
            </ul>
          </aside>
        </div>
      </div>
    </section>
    ` : ''}

    <!-- Requirements + FAQ -->
    <section style="padding: 24px 0 32px;">
      <div class="container-wide">
        <div style="display: grid; grid-template-columns: 1fr 1.4fr; gap: 64px; align-items: start;" class="docs-2col">
          <div id="requirements" style="scroll-margin-top: 80px;">
            <div class="tag-mono" style="margin-bottom: 12px;">System requirements</div>
            <h3 style="font-size: 24px; font-weight: 600; letter-spacing: -0.03em; margin-bottom: 20px;">What you need</h3>
            <ul style="display: flex; flex-direction: column; gap: 12px;">
              ${detail.requirements.map(r => `
                <li style="display: flex; gap: 12px; align-items: baseline; font-size: 15px; color: var(--fg-2);">
                  <span style="color: var(--accent); font-weight: 700;">·</span>
                  <span>${esc(r)}</span>
                </li>
              `).join('')}
            </ul>
            <div style="margin-top: 28px; padding: 16px 18px; border-radius: 12px; background: var(--bg-2); border: 1px solid var(--line);">
              <div class="tag-mono" style="border: none; padding: 0; margin-bottom: 6px;">Permissions</div>
              <p style="font-size: 13px; color: var(--fg-2); line-height: 1.55; margin: 0;">${esc(detail.permissionsNote || 'None. Migaja never requests Accessibility, Full Disk Access, Automation, Screen Recording, or any other macOS permission — pasting is your own ⌘V.')}</p>
            </div>
          </div>
          <div id="faq" style="scroll-margin-top: 80px;">
            <div class="tag-mono" style="margin-bottom: 12px;">FAQ</div>
            <h3 style="font-size: 24px; font-weight: 600; letter-spacing: -0.03em; margin-bottom: 20px;">Common questions</h3>
            <div style="display: flex; flex-direction: column;">
              ${detail.faq.map(item => `
                <details style="border-top: 1px solid var(--line); padding: 16px 0;">
                  <summary style="cursor: pointer; font-size: 15px; font-weight: 500; color: var(--fg); list-style: none; display: flex; justify-content: space-between; align-items: center; gap: 16px;">
                    <span>${esc(item.q)}</span>
                    <span style="color: var(--fg-3); font-family: 'JetBrains Mono', monospace; font-size: 14px;">+</span>
                  </summary>
                  <p style="font-size: 14px; color: var(--fg-2); line-height: 1.6; margin-top: 12px; text-wrap: pretty;">${esc(item.a)}</p>
                </details>
              `).join('')}
              <div style="border-top: 1px solid var(--line);"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Legal + support cards -->
    <section style="padding: 32px 0 64px;">
      <div class="container-wide">
        <div class="features-grid" style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 16px;">
          <a id="privacy" href="${privacyHref}" class="app-card" style="scroll-margin-top: 80px;">
            <div class="tag-mono" style="margin-bottom: 12px;">Privacy</div>
            <div style="font-size: 17px; font-weight: 600; letter-spacing: -0.2px; margin-bottom: 8px;">Your data stays on your device.</div>
            <p style="font-size: 14px; line-height: 1.55; color: var(--fg-2); text-wrap: pretty; margin-bottom: 16px;">${esc(detail.privacyTeaser || `${app.name} has no network entitlements and collects no telemetry.`)} The full policy covers what's stored, where, and for how long.</p>
            <span style="font-size: 13px; color: var(--accent); font-weight: 500;">Read the privacy policy →</span>
          </a>
          <a id="terms" href="${termsHref}" class="app-card" style="scroll-margin-top: 80px;">
            <div class="tag-mono" style="margin-bottom: 12px;">Terms</div>
            <div style="font-size: 17px; font-weight: 600; letter-spacing: -0.2px; margin-bottom: 8px;">License, refunds, fair use.</div>
            <p style="font-size: 14px; line-height: 1.55; color: var(--fg-2); text-wrap: pretty; margin-bottom: 16px;">A short, plain-English agreement covering personal use, the trial, subscriptions, and the warranty disclaimer.</p>
            <span style="font-size: 13px; color: var(--accent); font-weight: 500;">Read the terms of use →</span>
          </a>
          <a id="support" href="${SiteChrome.BASE}support/" class="app-card" style="scroll-margin-top: 80px;">
            <div class="tag-mono" style="margin-bottom: 12px;">Support</div>
            <div style="font-size: 17px; font-weight: 600; letter-spacing: -0.2px; margin-bottom: 8px;">A real human reads every email.</div>
            <p style="font-size: 14px; line-height: 1.55; color: var(--fg-2); text-wrap: pretty; margin-bottom: 16px;">Bug reports, feature ideas, refund requests — send a note via the form. Replies usually within a couple of days.</p>
            <span style="font-size: 13px; color: var(--accent); font-weight: 500;">Open the form →</span>
          </a>
        </div>
      </div>
    </section>

    <!-- Other apps (rendered only when there are siblings) -->
    ${otherApps.length === 0 ? '' : `
    <section style="padding: 32px 0 0;">
      <div class="container">
        <div class="section-head">
          <h2 class="section-title">Other apps</h2>
          <a href="${SiteChrome.BASE}apps.html" class="section-meta">All apps →</a>
        </div>
        <div style="display: grid; grid-template-columns: repeat(${Math.min(otherApps.length, 4)}, 1fr); gap: 12px;">
          ${otherApps.map(a => `
            <a href="${SiteChrome.appHref(a.id)}" class="app-card" style="padding: 18px;">
              <div class="app-card-row">
                ${a.icon
                  ? `<img src="${SiteChrome.BASE}${a.icon}" alt="${a.name} icon" style="width: 36px; height: 36px; border-radius: 9px; display: block; object-fit: cover;">`
                  : `<div class="app-icon" style="width: 36px; height: 36px; border-radius: 9px; background: ${a.color}; font-size: 16px;">${a.glyph}</div>`}
                <div class="app-card-meta">
                  <div class="app-card-name" style="font-size: 14px;">${a.name}</div>
                  <div class="app-card-tag">${a.tag}</div>
                </div>
              </div>
            </a>
          `).join('')}
        </div>
      </div>
    </section>
    `}
  `;

  document.getElementById('app-page').innerHTML = html;

  // ─── helpers ───
  function renderCombo(combo) {
    // Split on " / " for alternatives, then on "+" or whitespace for individual keys.
    return combo.split(' / ').map(group =>
      `<span class="kbd-group">${
        group.split(/\s|\+/).filter(Boolean).map(k =>
          `<kbd class="kbd">${esc(k)}</kbd>`
        ).join('<span class="kbd-plus">+</span>')
      }</span>`
    ).join('<span class="kbd-or">or</span>');
  }

  function appStoreIcon() {
    return `<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style="margin-right: 2px;"><path d="M17.05 12.04c-.03-2.93 2.39-4.34 2.5-4.41-1.36-1.99-3.49-2.27-4.24-2.3-1.81-.18-3.53 1.06-4.45 1.06-.92 0-2.34-1.04-3.85-1.01-1.98.03-3.81 1.15-4.83 2.92-2.06 3.58-.53 8.87 1.48 11.78.98 1.42 2.15 3.02 3.69 2.97 1.48-.06 2.04-.96 3.83-.96 1.79 0 2.29.96 3.86.93 1.59-.03 2.6-1.45 3.57-2.88 1.13-1.65 1.59-3.25 1.62-3.34-.04-.02-3.1-1.19-3.13-4.76zM14.13 3.41c.81-.99 1.36-2.36 1.21-3.74-1.17.05-2.6.78-3.43 1.76-.75.86-1.41 2.27-1.23 3.61 1.31.1 2.65-.66 3.45-1.63z"/></svg>`;
  }
})();
