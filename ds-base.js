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
    if (!e.isIntersecting) return;
    const el = e.target; io.unobserve(el);
    const maxC = decorate(el);
    requestAnimationFrame(() => requestAnimationFrame(() => el.setAttribute('data-rv', '1')));
    const d = parseInt(el.style.getPropertyValue('--rv-d')) || 0;
    setTimeout(() => {
      el.removeAttribute('data-rv'); el.style.removeProperty('--rv-d');
      el.querySelectorAll('[data-rvc],[data-rvl],[data-rvi]').forEach(n => { n.removeAttribute('data-rvc'); n.removeAttribute('data-rvl'); n.removeAttribute('data-rvi'); n.style.removeProperty('--rv-c'); });
    }, 1300 + d + maxC);
  }), { threshold: 0.15, rootMargin: '0px 0px -5% 0px' });
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
