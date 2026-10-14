// Loads this design system into the template. In a consuming project, point
// base at the bound DS folder relative to this file (e.g. '_ds/<folder>' at
// the project root, '../_ds/<folder>' one level down) — one line to edit.
(() => {
  const base = '_ds/portfolio-design-system-3bd0502d-6e33-45ae-8b27-56ba5e86869e';
  for (const p of ["styles.css"]) {
    const l = document.createElement('link');
    l.rel = 'stylesheet'; l.href = base + '/' + p;
    document.head.appendChild(l);
  }
  const s = document.createElement('script');
  s.src = base + '/_ds_bundle.js';
  s.onerror = () => console.error('ds-base.js: failed to load ' + s.src + ' — if this is a consuming project, point the base line in ds-base.js at the bound _ds/<folder> tree relative to this page (e.g. _ds/<folder> at the project root, ../_ds/<folder> one level down); in a fresh design system this can just mean the bundle is not compiled yet');
  document.head.appendChild(s);
})();

// Mobile: collapse fixed multi-column grids to one column when they don't fit.
(() => {
  if (window.__dsMobile) return; window.__dsMobile = 1;
  const N = 'nav[style*="nav-height"]';
  const css = document.createElement('style');
  css.textContent =
    '.ds-burger{display:none}' +
    '@media (max-width:760px){' +
    '[style*="grid-template-columns"]:not([style*="auto-fit"]):not([style*="auto-fill"]){grid-template-columns:minmax(0,1fr)!important}' +
    '[style*="grid-template-columns"] > [style*="order:2"],[style*="grid-template-columns"] > [style*="order: 2"]{order:0!important}' +
    '[style*="flex:1 1 420px"]{flex-basis:100%!important}' +
    '[style*="min-width:280px"]{min-width:0!important}' +
    N + '{flex-wrap:wrap!important;height:auto!important;min-height:var(--nav-height);padding:10px 20px!important;gap:0 12px!important}' +
    N + ':not([data-open]) > *:not(:first-child):not(.ds-burger){display:none!important}' +
    N + ' > a:first-child{font-size:17px!important;line-height:44px}' +
    N + '[data-open]{background:var(--bg)!important;border-bottom:1px solid var(--border)!important;max-height:100vh;overflow-y:auto}' +
    N + '[data-open] > ul{display:flex!important;order:3;flex:1 1 100%;flex-direction:column!important;align-items:stretch!important;gap:0!important;margin-top:10px!important}' +
    N + '[data-open] > ul li{border-top:1px solid var(--border)}' +
    N + '[data-open] > ul a{display:flex!important;min-height:52px;font-size:14px!important}' +
    N + '[data-open] > button:not(.ds-burger),' + N + '[data-open] > a:not(:first-child){display:inline-flex!important;order:4;justify-content:center;min-height:44px;margin-top:16px;flex:1 1 calc(50% - 6px)}' +
    '.ds-burger{display:inline-flex;align-items:center;justify-content:center;width:44px;height:44px;padding:0;background:transparent;color:var(--text-primary);border:1px solid var(--border);border-radius:var(--radius-sm);cursor:pointer;transition:var(--transition-hover)}' +
    '.ds-burger:hover{background:var(--state-hover)}' +
    '.ds-burger:focus-visible{outline:none;box-shadow:var(--focus-ring)}' +
    '.ds-burger i{width:20px;height:20px;background:currentColor;-webkit-mask:var(--ic) center/contain no-repeat;mask:var(--ic) center/contain no-repeat}' +
    'img,video,iframe{max-width:100%}' +
    'body{overflow-x:hidden}' +
  '}';
  document.head.appendChild(css);
  const L = 'https://unpkg.com/lucide-static@0.469.0/icons/';
  const setIcon = (b, open) => { b.querySelector('i').style.setProperty('--ic', 'url(' + L + (open ? 'x' : 'menu') + '.svg)'); b.setAttribute('aria-expanded', open); b.setAttribute('aria-label', open ? 'Close menu' : 'Open menu'); };
  const close = nav => { nav.removeAttribute('data-open'); const b = nav.querySelector('.ds-burger'); if (b) setIcon(b, false); };
  const SEND = '<path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path>';
  const sendIcon = () => document.querySelectorAll(N + ' > a:not(:first-child) svg.lucide-arrow-up-right').forEach(svg => { svg.setAttribute('class', 'lucide lucide-send'); svg.innerHTML = SEND; const w = svg.parentElement, btn = w.parentElement; if (btn.firstElementChild !== w) btn.insertBefore(w, btn.firstElementChild); });
  const enhance = () => { sendIcon(); document.querySelectorAll(N).forEach(nav => {
    if (nav.querySelector(':scope > .ds-burger')) return;
    const b = document.createElement('button');
    b.type = 'button'; b.className = 'ds-burger'; b.innerHTML = '<i></i>'; setIcon(b, false);
    b.addEventListener('click', () => { const open = !nav.hasAttribute('data-open'); open ? nav.setAttribute('data-open', '') : nav.removeAttribute('data-open'); setIcon(b, open); });
    nav.addEventListener('click', e => { if (e.target.closest('ul a, a:not(:first-child)')) close(nav); });
    nav.appendChild(b);
  }); };
  addEventListener('keydown', e => { if (e.key === 'Escape') document.querySelectorAll(N + '[data-open]').forEach(close); });
  matchMedia('(min-width:761px)').addEventListener('change', e => { if (e.matches) document.querySelectorAll(N).forEach(close); });
  new MutationObserver(enhance).observe(document.documentElement, { childList: true, subtree: true });
  enhance();
})();

// Contact popup: load contact-popup.js from this file's folder; mark every #contact link as an opener.
(() => {
  const me = document.currentScript && document.currentScript.src;
  if (me && !window.__contactPopupLoaded) {
    window.__contactPopupLoaded = 1;
    const s = document.createElement('script');
    s.src = new URL('contact-popup.js', me).href;
    document.head.appendChild(s);
  }
  const mark = () => document.querySelectorAll('a[href="#contact"]:not([data-contact-open]), a[href$="#contact"]:not([data-contact-open])').forEach(a => a.setAttribute('data-contact-open', ''));
  new MutationObserver(mark).observe(document.documentElement, { childList: true, subtree: true });
  mark();
})();

// Scroll reveal: blocks fade in with a 24px lift (DS motion spec). Inside each block: grid items and list items cascade,
// hairlines draw from the left, framed images settle from 1.04 scale. All one-shot, 160–900ms, ease-out, no bounce.
(() => {
  if (window.__dsReveal) return; window.__dsReveal = 1;
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const E = 'cubic-bezier(.16,1,.3,1)';
  const css = document.createElement('style');
  css.textContent =
    '[data-rv]{transition:opacity 700ms ' + E + ' var(--rv-d,0ms),transform 700ms ' + E + ' var(--rv-d,0ms)!important}' +
    '[data-rv="0"]{opacity:0!important;transform:translateY(24px)!important}' +
    '[data-rv="1"]{opacity:1!important;transform:none!important}' +
    '[data-rv] [data-rvc]{transition:opacity 600ms ' + E + ' calc(var(--rv-d,0ms) + 140ms + var(--rv-c,0ms)),transform 600ms ' + E + ' calc(var(--rv-d,0ms) + 140ms + var(--rv-c,0ms))!important}' +
    '[data-rv="0"] [data-rvc]{opacity:0!important;transform:translateX(-24px)!important}' +
    '[data-rv="1"] [data-rvc]{opacity:1!important;transform:none!important}' +
    '[data-rv] [data-rvl]{transform-origin:left center!important;transition:transform 900ms ' + E + ' calc(var(--rv-d,0ms) + 200ms)!important}' +
    '[data-rv="0"] [data-rvl]{transform:scaleX(0)!important}' +
    '[data-rv="1"] [data-rvl]{transform:scaleX(1)!important}' +
    '[data-rv] [data-rvi]{transition:transform 1200ms ' + E + ' var(--rv-d,0ms)!important}' +
    '[data-rv="0"] [data-rvi]{transform:scale(1.04)!important}' +
    '[data-rv="1"] [data-rvi]{transform:none!important}' +
    '@media print{[data-rv],[data-rv] *{opacity:1!important;transform:none!important;transition:none!important}}';
  document.head.appendChild(css);
  const SEL = 'header > *, section > *, footer, [data-reveal]';
  const kids = el => { const out = []; for (const c of el.children) { if (getComputedStyle(c).display === 'contents') out.push(...kids(c)); else out.push(c); } return out; };
  const decorate = el => {
    let maxC = 0;
    [el, ...el.querySelectorAll('*')].forEach(n => {
      const cs = getComputedStyle(n);
      const isGrid = cs.display === 'grid' || (cs.display === 'flex' && !cs.flexDirection.startsWith('column'));
      if (n.tagName === 'OL' || n.tagName === 'UL' || isGrid) {
        const ks = kids(n).filter(k => !k.closest('nav'));
        if (ks.length >= 3 && ks.length <= 24 && !n.closest('[data-rvc]')) ks.forEach((k, i) => {
          const c = Math.min(i, 8) * 110; maxC = Math.max(maxC, c);
          k.setAttribute('data-rvc', ''); k.style.setProperty('--rv-c', c + 'ms');
        });
      }
      if (!n.children.length && n.offsetHeight === 1 && n.offsetWidth > 60 && !n.textContent.trim()) n.setAttribute('data-rvl', '');
      if (n.tagName === 'IMG' && n.parentElement && getComputedStyle(n.parentElement).overflow === 'hidden') n.setAttribute('data-rvi', '');
    });
    return maxC;
  };
  const io = new IntersectionObserver(es => es.forEach(e => {
    if (!e.isIntersecting || (e.intersectionRatio < 0.15 && e.intersectionRect.height < innerHeight * 0.15)) return;
    const el = e.target; io.unobserve(el);
    const maxC = decorate(el);
    requestAnimationFrame(() => requestAnimationFrame(() => el.setAttribute('data-rv', '1')));
    const d = parseInt(el.style.getPropertyValue('--rv-d')) || 0;
    setTimeout(() => {
      el.removeAttribute('data-rv'); el.style.removeProperty('--rv-d');
      el.querySelectorAll('[data-rvc],[data-rvl],[data-rvi]').forEach(n => { n.removeAttribute('data-rvc'); n.removeAttribute('data-rvl'); n.removeAttribute('data-rvi'); n.style.removeProperty('--rv-c'); });
    }, 1300 + d + maxC);
  }), { threshold: [0, 0.05, 0.15], rootMargin: '0px 0px -5% 0px' });
  const seen = new WeakSet();
  const scan = () => {
    const groups = new Map();
    const tag = (el, p) => {
      if (seen.has(el)) return;
      const cs = getComputedStyle(el);
      if (cs.display === 'contents') { for (const c of el.children) tag(c, p); return; }
      seen.add(el);
      if (el.closest('nav') || (el.parentElement && el.parentElement.closest('[data-rv]'))) return;
      if (cs.position === 'absolute' || cs.position === 'fixed' || cs.position === 'sticky' || cs.display === 'none') return;
      const r = el.getBoundingClientRect(); if (!r.width && !r.height) { seen.delete(el); return; }
      const i = groups.get(p) || 0; groups.set(p, i + 1);
      el.style.setProperty('--rv-d', Math.min(i, 6) * 70 + 'ms');
      el.setAttribute('data-rv', '0');
      io.observe(el);
    };
    document.querySelectorAll(SEL).forEach(el => tag(el, el.parentElement));
  };
  let raf = 0;
  const queue = () => { if (!raf) raf = requestAnimationFrame(() => { raf = 0; scan(); }); };
  new MutationObserver(queue).observe(document.documentElement, { childList: true, subtree: true });
  queue();
})();
