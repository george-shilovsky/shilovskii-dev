// shilovskii.dev — shared chrome (nav + footer) + theme handling
// Each page calls SiteChrome.render({active: 'apps'|'writing'|'docs'|'about'|null, crumb: [...]})
// Base path is auto-detected from current location so links work in subfolders.

(function () {
  const BASE = (function () {
    // location.pathname always starts with "/". Depth = number of subfolders
    // between the site root and the current page (regardless of host).
    const depth = location.pathname.split('/').length - 2;
    return depth <= 0 ? './' : '../'.repeat(depth);
  })();

  const APPS = [
    { id: 'migaja', name: 'Migaja — Clipboard Manager', tag: 'macOS', summary: 'Clipboard search that actually understands what you copied.', color: '#30D158', glyph: 'M', icon: 'apps/migaja-icon.png' },
  ];

  const POSTS = [
    { id: 'offline-search', date: '2026-05-14', dateLabel: 'May 14, 2026', read: '8 min', title: 'How Migaja searches your clipboard offline', kicker: 'Engineering', summary: 'Two retrieval stages, one query box, zero network. A walk through the pipeline that turns a vague memory into the right clip in under 300 ms.' },
    { id: 'zero-network', date: '2026-05-13', dateLabel: 'May 13, 2026', read: '7 min', title: 'Zero network: how Migaja achieves privacy by construction', kicker: 'Engineering', summary: 'Most \u201Cprivate\u201D apps achieve privacy with a policy. Migaja achieves it with the binary \u2014 the app cannot phone home because macOS will not let it open a socket.' },
  ];

  function navHTML(active) {
    const link = (id, label) => {
      const cls = active === id ? 'active' : '';
      const href = id === 'home' ? `${BASE}index.html` : `${BASE}${id}.html`;
      return `<a href="${href}" class="${cls}">${label}</a>`;
    };
    return `
      <nav class="site-nav">
        <div class="site-nav-inner">
          <a href="${BASE}index.html" class="brand">
            <span class="brand-mark">G</span>
            <span class="brand-name">shilovskii.dev</span>
          </a>
          <div class="nav-links">
            ${link('apps', 'Apps')}
            ${link('writing', 'Writing')}
            ${link('about', 'About')}
            ${link('contact', 'Contact')}
          </div>
          <div class="nav-spacer"></div>
          <div class="theme-toggle" role="group" aria-label="Theme">
            <button data-theme="light" aria-label="Light">${iconSun()}</button>
            <button data-theme="dark" aria-label="Dark">${iconMoon()}</button>
          </div>
        </div>
      </nav>
    `;
  }

  function footerHTML() {
    const year = new Date().getFullYear();
    return `
      <footer class="site-footer">
        <div class="site-footer-inner footer-inner">
          <div>© ${year} Georgii Shilovskii · Independent</div>
          <div class="links">
            <a href="${BASE}contact.html">Contact</a>
          </div>
        </div>
      </footer>
    `;
  }

  function iconSun() {
    return `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/></svg>`;
  }
  function iconMoon() {
    return `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`;
  }

  function applyTheme(theme) {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    try { localStorage.setItem('site-theme', theme); } catch (_) {}
    document.querySelectorAll('.theme-toggle button').forEach(b => {
      b.classList.toggle('on', b.dataset.theme === theme);
    });
  }

  function initTheme() {
    let theme = 'light';
    try { theme = localStorage.getItem('site-theme') || 'light'; } catch (_) {}
    applyTheme(theme);
    document.querySelectorAll('.theme-toggle button').forEach(b => {
      b.addEventListener('click', () => applyTheme(b.dataset.theme));
    });
  }

  window.SiteChrome = {
    BASE,
    APPS,
    POSTS,
    render({ active = null } = {}) {
      const navMount = document.getElementById('site-nav');
      const footMount = document.getElementById('site-footer');
      if (navMount) navMount.outerHTML = navHTML(active);
      if (footMount) footMount.outerHTML = footerHTML();
      initTheme();
    },
    appHref(id) { return `${BASE}apps/${id}.html`; },
    postHref(id) { return `${BASE}writing/${id}.html`; },
  };
})();
