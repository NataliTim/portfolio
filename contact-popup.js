/* Contact popup — native <dialog>, styled with Portfolio Design System tokens.
   Any element with data-contact-open opens it; visiting /#contact opens it too.
   Theme follows <html data-theme> set by the site's theme toggle. */
(function () {
  if (window.__contactPopup) return; window.__contactPopup = 1;
  var LUCIDE = 'https://unpkg.com/lucide-static@0.469.0/icons/';

  var css = document.createElement('style');
  css.id = 'contact-popup-css';
  css.textContent = [
    '.cd{width:min(480px,calc(100vw - 32px));max-height:calc(100dvh - 32px);margin:auto;padding:0;overflow:auto;overscroll-behavior:contain;',
    'background:var(--surface-raised);color:var(--text-primary);border:var(--border-width) solid var(--border);border-radius:var(--radius-md);',
    'box-shadow:var(--shadow-card),var(--shadow-raised);font-family:var(--font-body);font-size:var(--text-body);line-height:1.6}',
    '.cd::backdrop{background:var(--scrim-nav)}',
    '.cd[open]{animation:cd-in var(--duration-base) var(--ease-out)}',
    '@keyframes cd-in{from{opacity:0;transform:translateY(8px)}}',
    '@media (prefers-reduced-motion: reduce){.cd[open]{animation:none}}',
    '.cd *,.cd *::before,.cd *::after{box-sizing:border-box}',
    '.cd__body{padding:var(--space-6)}',
    '@media (max-width:480px){.cd__body{padding:var(--space-5)}}',
    '.cd__kicker{margin:0 0 var(--space-3);font-family:var(--font-mono);font-size:var(--text-mono-label);letter-spacing:var(--tracking-label);text-transform:uppercase;color:var(--text-secondary)}',
    '.cd__close{position:absolute;top:var(--space-3);right:var(--space-3);width:44px;height:44px;display:grid;place-items:center;padding:0;',
    'background:transparent;color:var(--text-secondary);border:var(--border-width) solid transparent;border-radius:var(--radius-sm);cursor:pointer;transition:var(--transition-hover)}',
    '.cd__close:hover{background:var(--state-hover);color:var(--text-primary)}',
    '.cd__close:active{background:var(--state-press);transform:translateY(1px)}',
    '.cd__ic{display:block;width:var(--ic-size,16px);height:var(--ic-size,16px);background:currentColor;-webkit-mask:var(--ic) center/contain no-repeat;mask:var(--ic) center/contain no-repeat}',
    '.cd__title{margin:0 0 var(--space-2);padding-right:48px;font-family:var(--font-display);font-weight:600;font-size:var(--text-h4);line-height:var(--leading-heading);letter-spacing:var(--tracking-heading);outline:none}',
    '.cd__title:focus-visible{box-shadow:var(--focus-ring)}',
    '.cd__sub{margin:0 0 var(--space-5);font-size:var(--text-small);line-height:1.5;color:var(--text-secondary);text-wrap:pretty}',
    '.cd__field{display:flex;flex-direction:column;gap:var(--space-2);margin-bottom:var(--space-3)}',
    '.cd__field label{font-family:var(--font-mono);font-size:var(--text-mono-label);letter-spacing:var(--tracking-label);text-transform:uppercase;color:var(--text-secondary)}',
    '.cd__field label span{color:var(--accent-green)}',
    '.cd__field input,.cd__field textarea{width:100%;min-height:44px;margin:0;padding:13px 14px;font-family:var(--font-mono);font-size:var(--text-mono-meta);line-height:1.5;',
    'color:var(--text-primary);background:var(--surface-inset);border:var(--border-width) solid var(--text-muted);border-radius:var(--radius-sm);outline:none;',
    'transition:var(--transition-hover),box-shadow var(--duration-fast) var(--ease-standard)}',
    '.cd__field textarea{resize:vertical;min-height:132px}',
    '.cd__field input::placeholder,.cd__field textarea::placeholder{color:var(--text-secondary);opacity:1}',
    '.cd__field input:hover,.cd__field textarea:hover{border-color:var(--text-secondary)}',
    '.cd__field input:focus-visible,.cd__field textarea:focus-visible{border-color:var(--state-focus);box-shadow:var(--focus-ring),0 0 24px -12px var(--state-focus)}',
    '.cd__field [aria-invalid="true"],.cd__field [aria-invalid="true"]:hover{border-color:var(--state-error)}',
    '.cd__field [aria-invalid="true"]:focus-visible{border-color:var(--state-error);box-shadow:0 0 0 2px var(--surface-raised),0 0 0 4px var(--state-error)}',
    '.cd__err{min-height:18px;margin:0;font-family:var(--font-mono);font-size:var(--text-mono-label);line-height:1.5;color:var(--state-error)}',
    '.cd__hp{position:absolute;left:-9999px;width:1px;height:1px;overflow:hidden}',
    '.cd__btn{display:flex;align-items:center;justify-content:center;gap:10px;width:100%;min-height:48px;margin-top:var(--space-2);padding:14px 20px;',
    'font-family:var(--font-mono);font-size:var(--text-mono-meta);font-weight:var(--weight-mono);letter-spacing:var(--tracking-chip);text-transform:uppercase;line-height:1;',
    'color:var(--ink-1000);background:var(--accent-green);border:var(--border-width) solid var(--accent-green);border-radius:var(--radius-sm);cursor:pointer;',
    'transition:var(--transition-hover),opacity var(--duration-fast) var(--ease-standard),transform var(--duration-instant) var(--ease-standard)}',
    'html[data-theme="light"] .cd__btn{color:var(--text-inverse)}',
    '.cd__btn[type="submit"]::after{content:"";width:15px;height:15px;background:currentColor;-webkit-mask:url(' + LUCIDE + 'arrow-right.svg) center/contain no-repeat;mask:url(' + LUCIDE + 'arrow-right.svg) center/contain no-repeat}',
    '.cd__btn:hover{opacity:.86}',
    '.cd__btn:active{transform:translateY(1px)}',
    '.cd__btn:focus-visible,.cd__close:focus-visible{outline:none;box-shadow:0 0 0 2px var(--surface-raised),0 0 0 4px var(--state-focus)}',
    '.cd__btn:disabled,html[data-theme="light"] .cd__btn:disabled{opacity:1;transform:none;cursor:progress;color:var(--text-secondary);background:transparent;border-color:var(--text-muted)}',
    '.cd__btn:disabled::after{display:none}',
    '.cd__status{margin:var(--space-3) 0 0;font-family:var(--font-mono);font-size:var(--text-mono-label);line-height:1.5;color:var(--state-error)}',
    '.cd__status:empty{margin:0}',
    '.cd__status:not(:empty){padding:var(--space-3);background:var(--state-error-wash);border:var(--border-width) solid var(--state-error);border-radius:var(--radius-sm)}',
    '.cd__done{display:flex;flex-direction:column;align-items:center;text-align:center;padding-top:var(--space-7)}',
    '.cd__done[hidden]{display:none}',
    '.cd__done .cd__title{padding-right:0}',
    '.cd__done .cd__sub{max-width:34ch}',
    '.cd__check{width:56px;height:56px;margin-bottom:var(--space-4);display:grid;place-items:center;color:var(--accent-green);',
    'background:color-mix(in srgb,var(--accent-green) 14%,transparent);border:var(--border-width) solid var(--accent-green);border-radius:var(--radius-pill)}',
    '.cd__done .cd__btn{background:transparent;color:var(--text-primary);border-color:var(--text-muted)}',
    'html[data-theme="light"] .cd__done .cd__btn{color:var(--text-primary)}',
    '.cd__done .cd__btn:hover{opacity:1;background:var(--state-hover)}'
  ].join('');
  document.head.appendChild(css);

  var html =
    '<dialog id="contact-dialog" class="cd" aria-labelledby="cd-title" aria-describedby="cd-sub">' +
      '<button type="button" class="cd__close" data-contact-close aria-label="Close">' +
        '<span class="cd__ic" aria-hidden="true" style="--ic:url(' + LUCIDE + 'x.svg);--ic-size:20px"></span>' +
      '</button>' +
      '<form id="contact-form" class="cd__body" novalidate>' +
        '<p class="cd__kicker">contact</p>' +
        '<h2 id="cd-title" class="cd__title">Get in touch</h2>' +
        '<p id="cd-sub" class="cd__sub">Send me a message and I\'ll get back to you soon.</p>' +
        '<div class="cd__field">' +
          '<label for="cd-name">Name<span aria-hidden="true"> *</span></label>' +
          '<input id="cd-name" name="name" type="text" autocomplete="name" required maxlength="100">' +
          '<p class="cd__err" id="cd-name-err"></p>' +
        '</div>' +
        '<div class="cd__field">' +
          '<label for="cd-email">Email<span aria-hidden="true"> *</span></label>' +
          '<input id="cd-email" name="email" type="email" autocomplete="email" required maxlength="200" placeholder="you@company.com">' +
          '<p class="cd__err" id="cd-email-err"></p>' +
        '</div>' +
        '<div class="cd__field">' +
          '<label for="cd-message">Message<span aria-hidden="true"> *</span></label>' +
          '<textarea id="cd-message" name="message" rows="5" required maxlength="5000"></textarea>' +
          '<p class="cd__err" id="cd-message-err"></p>' +
        '</div>' +
        '<div class="cd__hp" aria-hidden="true">' +
          '<label for="cd-website">Website</label>' +
          '<input id="cd-website" name="website" type="text" tabindex="-1" autocomplete="off">' +
        '</div>' +
        '<button class="cd__btn" type="submit">Send message</button>' +
        '<p class="cd__status" role="status" aria-live="polite"></p>' +
      '</form>' +
      '<div class="cd__body cd__done" hidden>' +
        '<div class="cd__check" aria-hidden="true"><span class="cd__ic" style="--ic:url(' + LUCIDE + 'check.svg);--ic-size:22px"></span></div>' +
        '<h2 class="cd__title" tabindex="-1">Message sent</h2>' +
        '<p class="cd__sub">Thanks for reaching out. I\'ll reply to your email soon.</p>' +
        '<button type="button" class="cd__btn" data-contact-close>Close</button>' +
      '</div>' +
    '</dialog>';

  function init() {
    document.body.insertAdjacentHTML('beforeend', html);
    run();
  }
  if (document.body) init(); else document.addEventListener('DOMContentLoaded', init);

  /* ---- Original behavior, unchanged ---- */
  function run() {
  var ENDPOINT = 'https://script.google.com/macros/s/AKfycbwTx8igJhXzUf0hczFIqxBJ02s2PrdQ9QKBoBGNB_GnZUpht6x0f5ZCpqhVTQci1pQnzA/exec';
  var dialog = document.getElementById('contact-dialog');
  var form = document.getElementById('contact-form');
  var done = dialog.querySelector('.cd__done');
  var btn = form.querySelector('.cd__btn');
  var status = form.querySelector('.cd__status');
  var lastTrigger = null;

  function open(trigger) {
    lastTrigger = trigger || document.activeElement;
    form.hidden = false; done.hidden = true; status.textContent = '';
    dialog.showModal();
    form.name.focus();
  }
  function close() { dialog.close(); }

  // Any element with data-contact-open opens the popup
  document.addEventListener('click', function (e) {
    var t = e.target.closest('[data-contact-open]');
    if (t) { e.preventDefault(); open(t); return; }
    if (e.target.closest('[data-contact-close]')) close();
  });
  // Click on the dark backdrop closes it
  dialog.addEventListener('click', function (e) { if (e.target === dialog) close(); });
  // Return focus to whatever opened it (Esc is handled natively by <dialog>)
  dialog.addEventListener('close', function () {
    if (location.hash === '#contact') history.replaceState(null, '', location.pathname + location.search);
    if (lastTrigger && lastTrigger.focus) lastTrigger.focus();
  });
  // Deep link: yoursite.com/#contact
  if (location.hash === '#contact') open();

  function setErr(field, msg) {
    field.setAttribute('aria-invalid', msg ? 'true' : 'false');
    var el = document.getElementById(field.id + '-err');
    el.textContent = msg || '';
    if (msg) field.setAttribute('aria-describedby', el.id); else field.removeAttribute('aria-describedby');
    return !msg;
  }
  function validate() {
    var ok = true, first = null;
    [[form.name, form.name.value.trim() ? '' : 'Please enter your name.'],
     [form.email, /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email.value.trim()) ? '' : 'Please enter a valid email.'],
     [form.message, form.message.value.trim().length >= 2 ? '' : 'Please enter a message.']
    ].forEach(function (pair) {
      if (!setErr(pair[0], pair[1])) { ok = false; first = first || pair[0]; }
    });
    if (first) first.focus();
    return ok;
  }
  // Clear a field's error as soon as the person fixes it
  form.addEventListener('input', function (e) {
    if (e.target.getAttribute('aria-invalid') === 'true') setErr(e.target, '');
  });

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    status.textContent = '';
    if (!validate()) return;

    var data = new URLSearchParams(new FormData(form));
    data.append('form', 'contact');
    data.append('source', location.href);

    btn.disabled = true; btn.textContent = 'Sending…';
    fetch(ENDPOINT, { method: 'POST', body: data })
      .then(function (r) { return r.json(); })
      .then(function (res) {
        if (!res.ok) throw new Error(res.error || 'Error');
        form.reset();
        form.hidden = true; done.hidden = false;
        done.querySelector('.cd__title').focus();
      })
      .catch(function (err) {
        status.textContent = (err && err.message && err.message !== 'Error' && err.message.indexOf('Please') === 0)
          ? err.message : 'Something went wrong. Please try again.';
      })
      .finally(function () { btn.disabled = false; btn.textContent = 'Send message'; });
  });
  }
})();
