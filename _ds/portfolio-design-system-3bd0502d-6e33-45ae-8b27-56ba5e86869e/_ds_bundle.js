/* @ds-bundle: {"format":4,"namespace":"PortfolioDesignSystem_3bd050","components":[{"name":"CaseStudyCard","sourcePath":"components/content/CaseStudyCard.jsx"},{"name":"CaseStudyDetail","sourcePath":"components/content/CaseStudyDetail.jsx"},{"name":"Hero","sourcePath":"components/content/Hero.jsx"},{"name":"Timeline","sourcePath":"components/content/Timeline.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"PLATFORM_ICONS","sourcePath":"components/core/Icon.jsx"},{"name":"StatBlock","sourcePath":"components/core/StatBlock.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"SignupForm","sourcePath":"components/forms/SignupForm.jsx"},{"name":"GridOverlay","sourcePath":"components/layout/GridOverlay.jsx"},{"name":"Reveal","sourcePath":"components/layout/Reveal.jsx"},{"name":"SectionHeading","sourcePath":"components/layout/SectionHeading.jsx"},{"name":"Footer","sourcePath":"components/navigation/Footer.jsx"},{"name":"Nav","sourcePath":"components/navigation/Nav.jsx"}],"sourceHashes":{"components/content/CaseStudyCard.jsx":"2408c0a9f6f0","components/content/CaseStudyDetail.jsx":"17d2c1f18db1","components/content/Hero.jsx":"8599675cbf17","components/content/Timeline.jsx":"04b2d185917c","components/core/Button.jsx":"686a0380cf95","components/core/Icon.jsx":"f0b560e7288d","components/core/StatBlock.jsx":"e2008cc43295","components/core/Tag.jsx":"d8d516a917fd","components/forms/Input.jsx":"afbd795237c7","components/forms/SignupForm.jsx":"6ab47ab50b0e","components/layout/GridOverlay.jsx":"e86b1f940562","components/layout/Reveal.jsx":"5c67d464a3f5","components/layout/SectionHeading.jsx":"a8a735f90547","components/navigation/Footer.jsx":"a30e1277bb00","components/navigation/Nav.jsx":"ed135b228b41","ui_kits/portfolio/App.jsx":"c6736319f9b2","ui_kits/portfolio/CaseStudyScreen.jsx":"59bfb59db2d7","ui_kits/portfolio/HomeScreen.jsx":"b32170d9ab76","ui_kits/portfolio/content.jsx":"bd4c041fd717"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.PortfolioDesignSystem_3bd050 = window.PortfolioDesignSystem_3bd050 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const LUCIDE = "https://unpkg.com/lucide-static@0.469.0/icons/";
const cache = {};
function useLucide(name) {
  const [markup, setMarkup] = React.useState(() => cache[name] || null);
  React.useEffect(() => {
    let live = true;
    if (cache[name]) {
      setMarkup(cache[name]);
      return;
    }
    fetch(LUCIDE + name + ".svg").then(r => r.ok ? r.text() : "").then(svg => {
      if (!svg) return;
      const clean = svg.replace(/<\?xml[^>]*\?>/g, "").replace(/\swidth="[^"]*"/, ' width="100%"').replace(/\sheight="[^"]*"/, ' height="100%"');
      cache[name] = clean;
      if (live) setMarkup(clean);
    }).catch(() => {});
    return () => {
      live = false;
    };
  }, [name]);
  return markup;
}

/** Monochrome icon from the Lucide static set, inlined so it inherits currentColor and survives capture. */
function Icon({
  name = "arrow-up-right",
  size = 16,
  color = "currentColor",
  title,
  style = {},
  ...rest
}) {
  const markup = useLucide(name);
  return /*#__PURE__*/React.createElement("span", _extends({
    role: title ? "img" : undefined,
    "aria-label": title,
    "aria-hidden": title ? undefined : "true",
    dangerouslySetInnerHTML: markup ? {
      __html: markup
    } : undefined,
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      flex: "none",
      width: size,
      height: size,
      color,
      lineHeight: 0,
      ...style
    }
  }, rest));
}
const PLATFORM_ICONS = {
  web: "globe",
  ios: "smartphone",
  android: "smartphone",
  desktop: "monitor",
  saas: "cloud",
  api: "terminal"
};
Object.assign(__ds_scope, { Icon, PLATFORM_ICONS });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  sm: {
    padding: "8px 14px",
    fontSize: "12px",
    icon: 13
  },
  md: {
    padding: "12px 20px",
    fontSize: "13px",
    icon: 15
  },
  lg: {
    padding: "16px 28px",
    fontSize: "14px",
    icon: 17
  }
};
const TONES = {
  primary: {
    bg: "var(--accent-green)",
    fg: "var(--ink-1000)",
    border: "var(--accent-green)"
  },
  cyan: {
    bg: "var(--accent-cyan)",
    fg: "var(--ink-1000)",
    border: "var(--accent-cyan)"
  },
  secondary: {
    bg: "transparent",
    fg: "var(--text-primary)",
    border: "var(--border-strong)"
  },
  ghost: {
    bg: "transparent",
    fg: "var(--text-secondary)",
    border: "transparent"
  }
};

/** Mono-label action. Renders an <a> when href is set, otherwise a <button>. */
function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  icon,
  iconPosition = "right",
  disabled = false,
  fullWidth = false,
  onClick,
  style = {},
  ...rest
}) {
  const s = SIZES[size] || SIZES.md;
  const t = TONES[variant] || TONES.primary;
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const isFill = variant === "primary" || variant === "cyan";
  const base = {
    display: fullWidth ? "flex" : "inline-flex",
    width: fullWidth ? "100%" : undefined,
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    padding: s.padding,
    fontFamily: "var(--font-mono)",
    fontSize: s.fontSize,
    fontWeight: "var(--weight-mono)",
    letterSpacing: "var(--tracking-chip)",
    textTransform: "uppercase",
    lineHeight: 1,
    color: disabled ? "var(--state-disabled-text)" : t.fg,
    background: disabled ? "transparent" : hover && !isFill ? "var(--state-hover)" : t.bg,
    border: `var(--border-width) solid ${disabled ? "var(--border)" : t.border}`,
    borderRadius: "var(--radius-sm)",
    cursor: disabled ? "not-allowed" : "pointer",
    textDecoration: "none",
    transition: "var(--transition-hover), transform var(--duration-instant) var(--ease-standard)",
    opacity: disabled ? 0.55 : hover && isFill ? 0.86 : 1,
    transform: press && !disabled ? "translateY(1px)" : "none",
    ...style
  };
  const content = /*#__PURE__*/React.createElement(React.Fragment, null, icon && iconPosition === "left" && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: s.icon
  }), /*#__PURE__*/React.createElement("span", null, children), icon && iconPosition === "right" && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: s.icon
  }));
  const handlers = {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false)
  };
  if (href && !disabled) {
    return /*#__PURE__*/React.createElement("a", _extends({
      href: href,
      style: base
    }, handlers, rest), content);
  }
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    disabled: disabled,
    onClick: onClick,
    style: base
  }, handlers, rest), content);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/StatBlock.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Oversized Archivo number with a mono caption — used for reach, adoption and impact figures. */
function StatBlock({
  value,
  label,
  sublabel,
  accent = "green",
  size = "md",
  align = "left",
  style = {},
  ...rest
}) {
  const color = accent === "cyan" ? "var(--accent-cyan)" : accent === "none" ? "var(--text-primary)" : "var(--accent-green)";
  const sizes = {
    sm: "40px",
    md: "64px",
    lg: "96px"
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-2)",
      textAlign: align,
      alignItems: align === "center" ? "center" : "flex-start",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: "var(--weight-display)",
      fontSize: sizes[size] || sizes.md,
      lineHeight: 0.9,
      letterSpacing: "var(--tracking-display)",
      color
    }
  }, value), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--text-mono-label)",
      letterSpacing: "var(--tracking-label)",
      textTransform: "uppercase",
      color: "var(--text-secondary)"
    }
  }, label), sublabel && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-small)",
      color: "var(--text-muted)",
      maxWidth: "32ch"
    }
  }, sublabel));
}
Object.assign(__ds_scope, { StatBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/StatBlock.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  neutral: {
    fg: "var(--text-secondary)",
    border: "var(--border)",
    bg: "transparent"
  },
  green: {
    fg: "var(--accent-green)",
    border: "color-mix(in oklab, var(--accent-green) 45%, transparent)",
    bg: "var(--accent-wash-green)"
  },
  cyan: {
    fg: "var(--accent-cyan)",
    border: "color-mix(in oklab, var(--accent-cyan) 45%, transparent)",
    bg: "var(--accent-wash-cyan)"
  },
  solid: {
    fg: "var(--ink-1000)",
    border: "var(--accent-green)",
    bg: "var(--accent-green)"
  }
};

/** Mono chip for tech stack, categories and platform labels. */
function Tag({
  children,
  tone = "neutral",
  platform,
  icon,
  size = "md",
  style = {},
  ...rest
}) {
  const t = TONES[tone] || TONES.neutral;
  const glyph = icon || (platform ? __ds_scope.PLATFORM_ICONS[platform] : null);
  const small = size === "sm";
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: small ? "5px" : "6px",
      padding: small ? "4px 8px" : "6px 10px",
      fontFamily: "var(--font-mono)",
      fontSize: small ? "11px" : "var(--text-mono-chip)",
      fontWeight: "var(--weight-mono)",
      letterSpacing: "var(--tracking-chip)",
      lineHeight: 1,
      color: t.fg,
      background: t.bg,
      border: `var(--border-width) solid ${t.border}`,
      borderRadius: "var(--radius-sm)",
      whiteSpace: "nowrap",
      ...style
    }
  }, rest), glyph && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: glyph,
    size: small ? 11 : 12
  }), children || (platform ? platform : null));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/content/Timeline.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Vertical career timeline: mono period rail, Archivo role, org/location meta, optional stack chips. */
function Timeline({
  items = [],
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("ol", _extends({
    style: {
      listStyle: "none",
      margin: 0,
      padding: 0,
      ...style
    }
  }, rest), items.map((item, i) => /*#__PURE__*/React.createElement("li", {
    key: (item.period || "") + item.role,
    style: {
      display: "grid",
      gridTemplateColumns: "minmax(0, 170px) 1px minmax(0, 1fr)",
      gap: "var(--space-6)",
      paddingBottom: i === items.length - 1 ? 0 : "var(--space-7)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--text-mono-meta)",
      letterSpacing: "var(--tracking-chip)",
      color: item.current ? "var(--accent-green)" : "var(--text-muted)",
      paddingTop: "6px"
    }
  }, item.period), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      background: "var(--border)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: "-4px",
      top: "10px",
      width: "9px",
      height: "9px",
      borderRadius: "var(--radius-pill)",
      background: item.current ? "var(--accent-green)" : "var(--ink-500)",
      boxShadow: item.current ? "0 0 0 4px var(--accent-wash-green)" : "none"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-2)"
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: "var(--text-h4)",
      fontFamily: "var(--font-display)",
      fontWeight: "var(--weight-heading)",
      color: "var(--text-primary)"
    }
  }, item.role), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--text-mono-label)",
      letterSpacing: "var(--tracking-chip)",
      color: "var(--accent-cyan)"
    }
  }, [item.org, item.location].filter(Boolean).join(" — ")), item.description && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      maxWidth: "var(--measure)",
      fontSize: "var(--text-small)",
      color: "var(--text-secondary)"
    }
  }, item.description), item.tags && item.tags.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: "var(--space-2)",
      marginTop: "var(--space-1)"
    }
  }, item.tags.map(t => /*#__PURE__*/React.createElement(__ds_scope.Tag, {
    key: t,
    size: "sm"
  }, t)))))));
}
Object.assign(__ds_scope, { Timeline });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Timeline.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Single-line text field with a mono uppercase label, hairline box and cyan focus ring. */
function Input({
  label,
  name,
  type = "text",
  placeholder,
  value,
  defaultValue,
  onChange,
  hint,
  error,
  required = false,
  disabled = false,
  style = {},
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const id = React.useId ? React.useId() : name;
  const borderColor = error ? "var(--state-error)" : focus ? "var(--accent-cyan)" : "var(--border-strong)";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-2)",
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: id,
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--text-mono-label)",
      letterSpacing: "var(--tracking-label)",
      textTransform: "uppercase",
      color: "var(--text-secondary)"
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--accent-green)"
    }
  }, " *")), /*#__PURE__*/React.createElement("input", _extends({
    id: id,
    name: name,
    type: type,
    placeholder: placeholder,
    value: value,
    defaultValue: defaultValue,
    onChange: onChange,
    required: required,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      width: "100%",
      padding: "13px 14px",
      fontFamily: "var(--font-mono)",
      fontSize: "var(--text-mono-meta)",
      color: disabled ? "var(--state-disabled-text)" : "var(--text-primary)",
      background: "var(--surface-inset)",
      border: `var(--border-width) solid ${borderColor}`,
      borderRadius: "var(--radius-sm)",
      outline: "none",
      boxShadow: focus && !error ? "0 0 24px -12px var(--accent-cyan)" : "none",
      transition: "var(--transition-hover), box-shadow var(--duration-fast) var(--ease-standard)"
    }
  }, rest)), (error || hint) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "11px",
      color: error ? "var(--state-error)" : "var(--text-muted)"
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/layout/GridOverlay.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Decorative column/row grid lines. Absolute by default — drop it inside a positioned section. */
function GridOverlay({
  size = 64,
  fade = true,
  columns,
  opacity = 1,
  style = {},
  ...rest
}) {
  const lines = columns ? `repeating-linear-gradient(to right, var(--grid-line) 0 1px, transparent 1px calc(100% / ${columns}))` : `repeating-linear-gradient(to right, var(--grid-line) 0 1px, transparent 1px ${size}px), repeating-linear-gradient(to bottom, var(--grid-line) 0 1px, transparent 1px ${size}px)`;
  return /*#__PURE__*/React.createElement("div", _extends({
    "aria-hidden": "true",
    style: {
      position: "absolute",
      inset: 0,
      pointerEvents: "none",
      backgroundImage: lines,
      opacity,
      WebkitMaskImage: fade ? "linear-gradient(to bottom, black, transparent)" : undefined,
      maskImage: fade ? "linear-gradient(to bottom, black, transparent)" : undefined,
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { GridOverlay });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/GridOverlay.jsx", error: String((e && e.message) || e) }); }

// components/content/CaseStudyCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Grid item for the work index: index number, thumbnail, title, category tags, platform + stack chips. */
function CaseStudyCard({
  index,
  title,
  subtitle,
  image,
  imageAlt = "",
  categories = [],
  platforms = [],
  stack = [],
  href = "#",
  stat,
  style = {},
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "flex",
      flexDirection: "column",
      background: "var(--surface-card)",
      border: `var(--border-width) solid ${hover ? "var(--accent-green)" : "var(--border)"}`,
      borderRadius: "var(--radius-md)",
      boxShadow: "var(--shadow-card)",
      textDecoration: "none",
      color: "inherit",
      overflow: "hidden",
      transition: "var(--transition-hover), transform var(--duration-base) var(--ease-out)",
      transform: hover ? "translateY(-3px)" : "none",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      aspectRatio: "16 / 10",
      background: "var(--surface-inset)",
      borderBottom: "var(--border-width) solid var(--border)",
      overflow: "hidden"
    }
  }, image ? /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: imageAlt,
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      filter: hover ? "none" : "saturate(0.85)",
      transition: "filter var(--duration-base) var(--ease-standard), transform var(--duration-slow) var(--ease-out)",
      transform: hover ? "scale(1.02)" : "none"
    }
  }) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(__ds_scope.GridOverlay, {
    size: 32,
    fade: false,
    style: {
      opacity: 0.8
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      inset: 0,
      display: "grid",
      placeItems: "center",
      fontFamily: "var(--font-mono)",
      fontSize: "var(--text-mono-label)",
      letterSpacing: "var(--tracking-label)",
      textTransform: "uppercase",
      color: "var(--text-muted)"
    }
  }, "image")), stat && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: "var(--space-3)",
      bottom: "var(--space-3)",
      padding: "6px 10px",
      background: "var(--bg-deep)",
      border: "var(--border-width) solid var(--border)",
      fontFamily: "var(--font-mono)",
      fontSize: "11px",
      letterSpacing: "var(--tracking-chip)",
      color: "var(--accent-cyan)"
    }
  }, stat)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-3)",
      padding: "var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      justifyContent: "space-between",
      gap: "var(--space-4)",
      fontFamily: "var(--font-mono)",
      fontSize: "var(--text-mono-label)",
      letterSpacing: "var(--tracking-label)",
      textTransform: "uppercase",
      color: "var(--text-muted)"
    }
  }, /*#__PURE__*/React.createElement("span", null, index), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      gap: "6px",
      color: hover ? "var(--accent-green)" : "var(--text-muted)",
      transition: "var(--transition-hover)"
    }
  }, categories.join(" · "), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "arrow-up-right",
    size: 13,
    style: {
      transform: hover ? "translate(2px, -2px)" : "none",
      transition: "var(--transition-transform)"
    }
  }))), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: "var(--text-h3)",
      color: "var(--text-primary)"
    }
  }, title), subtitle && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "var(--text-small)",
      lineHeight: "var(--leading-snug)",
      color: "var(--text-secondary)"
    }
  }, subtitle), (platforms.length > 0 || stack.length > 0) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: "var(--space-2)",
      marginTop: "var(--space-2)",
      paddingTop: "var(--space-3)",
      borderTop: "var(--border-width) solid var(--border)"
    }
  }, platforms.map(p => /*#__PURE__*/React.createElement(__ds_scope.Tag, {
    key: p,
    platform: p,
    size: "sm",
    tone: "cyan"
  }, p)), stack.slice(0, 4).map(s => /*#__PURE__*/React.createElement(__ds_scope.Tag, {
    key: s,
    size: "sm"
  }, s)), stack.length > 4 && /*#__PURE__*/React.createElement(__ds_scope.Tag, {
    size: "sm",
    tone: "neutral"
  }, "+", stack.length - 4))));
}
Object.assign(__ds_scope, { CaseStudyCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/CaseStudyCard.jsx", error: String((e && e.message) || e) }); }

// components/content/Hero.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Landing hero: mono availability line, oversized Archivo statement with an accent clause, meta row and actions. */
function Hero({
  eyebrow,
  title,
  accent,
  subtitle,
  meta = [],
  actions = [],
  tags = [],
  grid = true,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("section", _extends({
    style: {
      position: "relative",
      overflow: "hidden",
      padding: "var(--space-10) var(--gutter) var(--space-9)",
      borderBottom: "var(--border-width) solid var(--border)",
      ...style
    }
  }, rest), grid && /*#__PURE__*/React.createElement(__ds_scope.GridOverlay, {
    size: 80
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      maxWidth: "var(--page-max)",
      margin: "0 auto",
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-6)"
    }
  }, eyebrow && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "10px",
      fontFamily: "var(--font-mono)",
      fontSize: "var(--text-mono-label)",
      letterSpacing: "var(--tracking-label)",
      textTransform: "uppercase",
      color: "var(--text-secondary)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: "7px",
      height: "7px",
      borderRadius: "var(--radius-pill)",
      background: "var(--accent-green)",
      animation: "ds-blink 1.6s steps(1, end) infinite"
    }
  }), eyebrow), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: "var(--text-display)",
      fontWeight: "var(--weight-display)",
      lineHeight: "var(--leading-display)",
      letterSpacing: "var(--tracking-display)",
      maxWidth: "18ch"
    }
  }, title, " ", accent && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--accent-green)"
    }
  }, accent)), subtitle && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      maxWidth: "var(--measure-tight)",
      fontSize: "var(--text-body-lg)",
      color: "var(--text-secondary)"
    }
  }, subtitle), tags.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: "var(--space-2)"
    }
  }, tags.map(t => typeof t === "string" ? /*#__PURE__*/React.createElement(__ds_scope.Tag, {
    key: t
  }, t) : /*#__PURE__*/React.createElement(__ds_scope.Tag, {
    key: t.label,
    platform: t.platform
  }, t.label))), actions.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: "var(--space-3)",
      marginTop: "var(--space-2)"
    }
  }, actions.map((a, i) => /*#__PURE__*/React.createElement(__ds_scope.Button, {
    key: a.label,
    href: a.href,
    onClick: a.onClick,
    variant: a.variant || (i === 0 ? "primary" : "secondary"),
    icon: a.icon,
    size: "lg"
  }, a.label))), meta.length > 0 && /*#__PURE__*/React.createElement("dl", {
    style: {
      display: "grid",
      gridTemplateColumns: `repeat(${meta.length}, minmax(0, max-content))`,
      gap: "var(--space-8)",
      margin: "var(--space-6) 0 0",
      paddingTop: "var(--space-5)",
      borderTop: "var(--border-width) solid var(--border)"
    }
  }, meta.map(m => /*#__PURE__*/React.createElement("div", {
    key: m.label,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "6px"
    }
  }, /*#__PURE__*/React.createElement("dt", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--text-mono-label)",
      letterSpacing: "var(--tracking-label)",
      textTransform: "uppercase",
      color: "var(--text-muted)"
    }
  }, m.label), /*#__PURE__*/React.createElement("dd", {
    style: {
      margin: 0,
      fontFamily: "var(--font-mono)",
      fontSize: "var(--text-mono-meta)",
      color: "var(--text-primary)"
    }
  }, m.value))))));
}
Object.assign(__ds_scope, { Hero });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Hero.jsx", error: String((e && e.message) || e) }); }

// components/forms/SignupForm.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Email capture for the book / community waitlist. Handles its own inline success and error state. */
function SignupForm({
  title = "Get the book",
  description,
  placeholder = "you@domain.com",
  buttonLabel = "Join the waitlist",
  note,
  count,
  onSubmit,
  style = {},
  ...rest
}) {
  const [email, setEmail] = React.useState("");
  const [state, setState] = React.useState("idle");
  const [error, setError] = React.useState(null);
  function submit(e) {
    if (e) e.preventDefault();
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      setError("Enter a valid email address.");
      return;
    }
    setError(null);
    setState("done");
    if (onSubmit) onSubmit(email);
  }
  return /*#__PURE__*/React.createElement("section", _extends({
    style: {
      position: "relative",
      overflow: "hidden",
      padding: "var(--space-7)",
      background: "var(--surface-card)",
      border: "var(--border-width) solid var(--border)",
      borderRadius: "var(--radius-md)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.GridOverlay, {
    size: 48,
    fade: true,
    style: {
      opacity: 0.7
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-4)",
      maxWidth: "560px"
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: "var(--text-h3)"
    }
  }, title), description && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: "var(--text-secondary)"
    }
  }, description), state === "done" ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "10px",
      padding: "14px",
      border: "var(--border-width) solid var(--accent-green)",
      background: "var(--accent-wash-green)",
      borderRadius: "var(--radius-sm)",
      fontFamily: "var(--font-mono)",
      fontSize: "var(--text-mono-meta)",
      color: "var(--accent-green)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 15
  }), "You're on the list \u2014 check your inbox.") : /*#__PURE__*/React.createElement("form", {
    onSubmit: submit,
    style: {
      display: "flex",
      gap: "var(--space-3)",
      alignItems: "flex-start",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Input, {
    label: "Email",
    type: "email",
    placeholder: placeholder,
    value: email,
    error: error,
    onChange: e => setEmail(e.target.value),
    style: {
      flex: "1 1 260px"
    }
  }), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    onClick: submit,
    icon: "arrow-right",
    style: {
      marginTop: "26px"
    }
  }, buttonLabel)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-4)",
      flexWrap: "wrap",
      fontFamily: "var(--font-mono)",
      fontSize: "11px",
      letterSpacing: "var(--tracking-chip)",
      color: "var(--text-muted)"
    }
  }, count && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--accent-cyan)"
    }
  }, count), note && /*#__PURE__*/React.createElement("span", null, note))));
}
Object.assign(__ds_scope, { SignupForm });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/SignupForm.jsx", error: String((e && e.message) || e) }); }

// components/layout/Reveal.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Scroll-triggered reveal: fades and lifts its children into place once, when they enter the viewport. */
function Reveal({
  children,
  delay = 0,
  distance,
  once = true,
  style = {},
  ...rest
}) {
  const ref = React.useRef(null);
  const [shown, setShown] = React.useState(false);
  React.useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setShown(true);
        if (once) io.disconnect();
      } else if (!once) setShown(false);
    }, {
      threshold: 0.15,
      rootMargin: "0px 0px -8% 0px"
    });
    io.observe(el);
    return () => io.disconnect();
  }, [once]);
  return /*#__PURE__*/React.createElement("div", _extends({
    ref: ref,
    style: {
      opacity: shown ? 1 : 0,
      transform: shown ? "none" : `translateY(${distance != null ? distance + "px" : "var(--reveal-distance)"})`,
      transition: `opacity var(--duration-reveal) var(--ease-out) ${delay}ms, transform var(--duration-reveal) var(--ease-out) ${delay}ms`,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Reveal });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/Reveal.jsx", error: String((e && e.message) || e) }); }

// components/content/CaseStudyDetail.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Prose({
  body
}) {
  if (Array.isArray(body)) {
    return /*#__PURE__*/React.createElement("ul", {
      style: {
        margin: 0,
        padding: 0,
        listStyle: "none",
        display: "flex",
        flexDirection: "column",
        gap: "var(--space-3)"
      }
    }, body.map((item, i) => /*#__PURE__*/React.createElement("li", {
      key: i,
      style: {
        display: "grid",
        gridTemplateColumns: "auto minmax(0, 1fr)",
        gap: "var(--space-3)",
        color: "var(--text-secondary)"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-mono)",
        fontSize: "var(--text-mono-meta)",
        color: "var(--accent-green)",
        lineHeight: "var(--leading-body)"
      }
    }, "\u2014"), /*#__PURE__*/React.createElement("span", {
      dangerouslySetInnerHTML: {
        __html: item
      }
    }))));
  }
  return /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      maxWidth: "var(--measure)",
      color: "var(--text-secondary)"
    }
  }, body);
}
function Block({
  index,
  title,
  children
}) {
  return /*#__PURE__*/React.createElement(__ds_scope.Reveal, null, /*#__PURE__*/React.createElement("section", {
    style: {
      display: "grid",
      gridTemplateColumns: "minmax(0, 220px) minmax(0, 1fr)",
      gap: "var(--space-7)",
      padding: "var(--space-7) 0",
      borderTop: "var(--border-width) solid var(--border)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-3)",
      fontFamily: "var(--font-mono)",
      fontSize: "var(--text-mono-label)",
      letterSpacing: "var(--tracking-label)",
      textTransform: "uppercase",
      color: "var(--text-muted)",
      height: "fit-content"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--accent-green)"
    }
  }, index), /*#__PURE__*/React.createElement("span", null, title)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-4)"
    }
  }, children)));
}

/** Full case-study page template: hero, stats, Challenge / Solution / Technical / Results, tech stack, CTA. */
function CaseStudyDetail({
  study = {},
  style = {},
  ...rest
}) {
  const {
    index,
    title,
    subtitle,
    image,
    imageAlt = "",
    categories = [],
    platforms = [],
    stats = [],
    challenge,
    solution,
    technical,
    results,
    stack = [],
    cta
  } = study;
  return /*#__PURE__*/React.createElement("article", _extends({
    style: {
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("header", {
    style: {
      position: "relative",
      overflow: "hidden",
      padding: "var(--space-9) var(--gutter) var(--space-7)",
      borderBottom: "var(--border-width) solid var(--border)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.GridOverlay, {
    size: 80
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      maxWidth: "var(--page-max)",
      margin: "0 auto",
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-4)",
      fontFamily: "var(--font-mono)",
      fontSize: "var(--text-mono-label)",
      letterSpacing: "var(--tracking-label)",
      textTransform: "uppercase",
      color: "var(--text-muted)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--accent-green)"
    }
  }, index), /*#__PURE__*/React.createElement("span", null, categories.join(" · "))), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: "var(--text-h1)",
      maxWidth: "16ch"
    }
  }, title), subtitle && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      maxWidth: "var(--measure-tight)",
      fontSize: "var(--text-body-lg)",
      color: "var(--text-secondary)"
    }
  }, subtitle), platforms.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: "var(--space-2)"
    }
  }, platforms.map(p => /*#__PURE__*/React.createElement(__ds_scope.Tag, {
    key: p,
    platform: p,
    tone: "cyan"
  }, p))))), image && /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--page-max)",
      margin: "0 auto",
      padding: "var(--space-7) var(--gutter) 0"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: imageAlt,
    style: {
      width: "100%",
      display: "block",
      border: "var(--border-width) solid var(--border)",
      borderRadius: "var(--radius-md)",
      background: "var(--surface-inset)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--page-max)",
      margin: "0 auto",
      padding: "var(--space-7) var(--gutter) var(--space-9)"
    }
  }, stats.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: `repeat(${Math.min(stats.length, 4)}, minmax(0, 1fr))`,
      gap: "var(--space-6)",
      paddingBottom: "var(--space-7)"
    }
  }, stats.map((s, i) => /*#__PURE__*/React.createElement(__ds_scope.StatBlock, {
    key: s.label,
    value: s.value,
    label: s.label,
    accent: i % 2 ? "cyan" : "green",
    size: "md"
  }))), challenge && /*#__PURE__*/React.createElement(Block, {
    index: "01",
    title: "Challenge"
  }, /*#__PURE__*/React.createElement(Prose, {
    body: challenge
  })), solution && /*#__PURE__*/React.createElement(Block, {
    index: "02",
    title: "Solution"
  }, /*#__PURE__*/React.createElement(Prose, {
    body: solution
  })), technical && /*#__PURE__*/React.createElement(Block, {
    index: "03",
    title: "Technical details"
  }, /*#__PURE__*/React.createElement(Prose, {
    body: technical
  })), results && /*#__PURE__*/React.createElement(Block, {
    index: "04",
    title: "Results"
  }, /*#__PURE__*/React.createElement(Prose, {
    body: results
  })), stack.length > 0 && /*#__PURE__*/React.createElement(Block, {
    index: "05",
    title: "Tech used"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: "var(--space-2)"
    }
  }, stack.map(s => /*#__PURE__*/React.createElement(__ds_scope.Tag, {
    key: s
  }, s)))), cta && /*#__PURE__*/React.createElement(__ds_scope.Reveal, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      flexWrap: "wrap",
      gap: "var(--space-5)",
      marginTop: "var(--space-7)",
      padding: "var(--space-6)",
      border: "var(--border-width) solid var(--border)",
      borderRadius: "var(--radius-md)",
      background: "var(--surface-card)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: "var(--weight-heading)",
      fontSize: "var(--text-h3)"
    }
  }, cta.headline || "See it live"), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    href: cta.href,
    icon: "arrow-up-right",
    size: "lg"
  }, cta.label)))));
}
Object.assign(__ds_scope, { CaseStudyDetail });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/CaseStudyDetail.jsx", error: String((e && e.message) || e) }); }

// components/layout/SectionHeading.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Numbered section header: mono index + rule + Archivo title. */
function SectionHeading({
  index,
  title,
  subtitle,
  kicker,
  level = 2,
  rule = true,
  style = {},
  ...rest
}) {
  const H = "h" + level;
  return /*#__PURE__*/React.createElement("header", _extends({
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-4)",
      ...style
    }
  }, rest), (index || kicker) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-4)",
      fontFamily: "var(--font-mono)",
      fontSize: "var(--text-mono-label)",
      letterSpacing: "var(--tracking-label)",
      textTransform: "uppercase",
      color: "var(--accent-green)"
    }
  }, index && /*#__PURE__*/React.createElement("span", null, index), kicker && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-secondary)"
    }
  }, kicker), rule && /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      height: "1px",
      background: "var(--border)"
    }
  })), /*#__PURE__*/React.createElement(H, {
    style: {
      fontSize: level === 2 ? "var(--text-h2)" : "var(--text-h3)",
      color: "var(--text-primary)"
    }
  }, title), subtitle && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      maxWidth: "var(--measure)",
      fontSize: "var(--text-body-lg)",
      color: "var(--text-secondary)"
    }
  }, subtitle));
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Footer.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Contact block + footer: oversized Archivo call to action, mono link columns, fine print. */
function Footer({
  headline = "Let's build something.",
  email,
  blurb,
  columns = [],
  colophon,
  copyright,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("footer", _extends({
    style: {
      position: "relative",
      borderTop: "var(--border-width) solid var(--border)",
      background: "var(--bg-deep)",
      padding: "var(--space-9) var(--gutter) var(--space-6)",
      overflow: "hidden",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.GridOverlay, {
    size: 64,
    fade: false,
    style: {
      opacity: 0.6,
      maskImage: "linear-gradient(to top, black, transparent)",
      WebkitMaskImage: "linear-gradient(to top, black, transparent)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      maxWidth: "var(--page-max)",
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "minmax(0, 1.4fr) minmax(0, 1fr)",
      gap: "var(--space-8)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: "var(--text-h1)",
      lineHeight: "var(--leading-display)"
    }
  }, headline), blurb && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      maxWidth: "var(--measure-tight)",
      color: "var(--text-secondary)"
    }
  }, blurb), email && /*#__PURE__*/React.createElement("a", {
    href: `mailto:${email}`,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "10px",
      width: "fit-content",
      fontFamily: "var(--font-mono)",
      fontSize: "var(--text-body)",
      color: "var(--accent-green)",
      borderBottom: "1px solid color-mix(in oklab, var(--accent-green) 40%, transparent)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "mail",
    size: 16
  }), email)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: `repeat(${Math.max(columns.length, 1)}, minmax(0, 1fr))`,
      gap: "var(--space-6)"
    }
  }, columns.map(col => /*#__PURE__*/React.createElement("div", {
    key: col.title,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-3)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--text-mono-label)",
      letterSpacing: "var(--tracking-label)",
      textTransform: "uppercase",
      color: "var(--text-muted)"
    }
  }, col.title), col.links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l.label + l.href,
    href: l.href,
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--text-mono-meta)",
      color: "var(--text-secondary)",
      borderBottom: "none"
    }
  }, l.label)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      maxWidth: "var(--page-max)",
      margin: "var(--space-8) auto 0",
      paddingTop: "var(--space-4)",
      borderTop: "var(--border-width) solid var(--border)",
      display: "flex",
      justifyContent: "space-between",
      gap: "var(--space-5)",
      flexWrap: "wrap",
      fontFamily: "var(--font-mono)",
      fontSize: "11px",
      letterSpacing: "var(--tracking-chip)",
      color: "var(--text-muted)"
    }
  }, /*#__PURE__*/React.createElement("span", null, copyright), /*#__PURE__*/React.createElement("span", {
    style: {
      maxWidth: "60ch"
    }
  }, colophon)));
}
Object.assign(__ds_scope, { Footer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Footer.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Nav.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Sticky top nav: text wordmark, mono section links, optional CTA. Gains a hairline + blur once scrolled. */
function Nav({
  brand = "Portfolio",
  brandHref = "#top",
  links = [],
  active,
  cta,
  sticky = true,
  onThemeToggle,
  style = {},
  ...rest
}) {
  const [scrolled, setScrolled] = React.useState(false);
  const [hovered, setHovered] = React.useState(null);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, {
      passive: true
    });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return /*#__PURE__*/React.createElement("nav", _extends({
    style: {
      position: sticky ? "sticky" : "relative",
      top: 0,
      zIndex: 50,
      height: "var(--nav-height)",
      display: "flex",
      alignItems: "center",
      gap: "var(--space-6)",
      padding: "0 var(--gutter)",
      background: scrolled ? "var(--scrim-nav)" : "transparent",
      backdropFilter: scrolled ? "var(--blur-nav)" : "none",
      WebkitBackdropFilter: scrolled ? "var(--blur-nav)" : "none",
      borderBottom: `var(--border-width) solid ${scrolled ? "var(--border)" : "transparent"}`,
      transition: "var(--transition-hover), backdrop-filter var(--duration-base) var(--ease-standard)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("a", {
    href: brandHref,
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: "var(--weight-display)",
      fontSize: "19px",
      letterSpacing: "var(--tracking-heading)",
      color: "var(--text-primary)",
      textDecoration: "none",
      borderBottom: "none",
      marginRight: "auto"
    }
  }, brand), /*#__PURE__*/React.createElement("ul", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-6)",
      listStyle: "none",
      margin: 0,
      padding: 0
    }
  }, links.map(l => {
    const on = active === l.href || active === l.label;
    return /*#__PURE__*/React.createElement("li", {
      key: l.href || l.label
    }, /*#__PURE__*/React.createElement("a", {
      href: l.href,
      onMouseEnter: () => setHovered(l.href),
      onMouseLeave: () => setHovered(null),
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: "6px",
        fontFamily: "var(--font-mono)",
        fontSize: "var(--text-mono-meta)",
        letterSpacing: "var(--tracking-chip)",
        textTransform: "lowercase",
        color: on ? "var(--accent-green)" : hovered === l.href ? "var(--text-primary)" : "var(--text-secondary)",
        textDecoration: "none",
        borderBottom: "none",
        transition: "var(--transition-hover)"
      }
    }, on && /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--accent-green)"
      }
    }, "/"), l.label));
  })), onThemeToggle && /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "ghost",
    size: "sm",
    icon: "sun-moon",
    iconPosition: "left",
    onClick: onThemeToggle
  }, "theme"), cta && /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "primary",
    size: "sm",
    href: cta.href,
    icon: "arrow-up-right"
  }, cta.label));
}
Object.assign(__ds_scope, { Nav });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Nav.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/App.jsx
try { (() => {
const {
  Nav,
  Footer
} = window.PortfolioDesignSystem_3bd050;
function App() {
  const [route, setRoute] = React.useState("home");
  const [theme, setTheme] = React.useState("dark");
  React.useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);
  const studies = window.CASE_STUDIES;
  const current = studies.find(s => s.id === route);
  const next = current ? studies[(studies.indexOf(current) + 1) % studies.length] : null;
  function open(id) {
    setRoute(id);
    window.scrollTo({
      top: 0
    });
  }
  function home() {
    setRoute("home");
    window.scrollTo({
      top: 0
    });
  }
  return /*#__PURE__*/React.createElement("div", {
    id: "top"
  }, /*#__PURE__*/React.createElement(Nav, {
    brand: "Max Tymofeiev",
    brandHref: "#top",
    links: window.NAV_LINKS.map(l => ({
      ...l,
      href: route === "home" ? l.href : "#" + l.href.slice(1)
    })),
    active: route === "home" ? "#work" : undefined,
    cta: {
      label: "contact",
      href: "#contact"
    },
    onThemeToggle: () => setTheme(theme === "dark" ? "light" : "dark")
  }), current ? /*#__PURE__*/React.createElement(window.CaseStudyScreen, {
    study: current,
    onBack: home,
    onNext: open,
    nextStudy: next
  }) : /*#__PURE__*/React.createElement(window.HomeScreen, {
    onOpen: open
  }), /*#__PURE__*/React.createElement("div", {
    id: "contact"
  }, /*#__PURE__*/React.createElement(Footer, {
    headline: "Let's build something.",
    email: "hello@example.com",
    blurb: "Contract work, product builds, legacy rescues. Currently taking projects for Q4.",
    columns: [{
      title: "elsewhere",
      links: [{
        label: "github",
        href: "#"
      }, {
        label: "linkedin",
        href: "#"
      }, {
        label: "youtube",
        href: "#"
      }]
    }, {
      title: "site",
      links: [{
        label: "work",
        href: "#work"
      }, {
        label: "resume",
        href: "#about"
      }, {
        label: "book",
        href: "#book"
      }]
    }],
    copyright: "\xA9 2026 Tymofeiev Max",
    colophon: "Built with Nuxt + Tailwind, deployed via AWS Amplify."
  })));
}
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/CaseStudyScreen.jsx
try { (() => {
const {
  CaseStudyDetail,
  Button,
  Reveal
} = window.PortfolioDesignSystem_3bd050;
function CaseStudyScreen({
  study,
  onBack,
  onNext,
  nextStudy
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--page-max)",
      margin: "0 auto",
      padding: "var(--space-5) var(--gutter) 0"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm",
    icon: "arrow-left",
    iconPosition: "left",
    onClick: onBack
  }, "All work")), /*#__PURE__*/React.createElement(CaseStudyDetail, {
    study: study
  }), nextStudy && /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "var(--border-width) solid var(--border)",
      background: "var(--surface)"
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => onNext(nextStudy.id),
    style: {
      display: "flex",
      alignItems: "baseline",
      justifyContent: "space-between",
      gap: "var(--space-5)",
      width: "100%",
      maxWidth: "var(--page-max)",
      margin: "0 auto",
      padding: "var(--space-7) var(--gutter)",
      background: "transparent",
      border: "none",
      cursor: "pointer",
      textAlign: "left"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--text-mono-label)",
      letterSpacing: "var(--tracking-label)",
      textTransform: "uppercase",
      color: "var(--text-muted)"
    }
  }, "Next project"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: "var(--weight-heading)",
      fontSize: "var(--text-h2)",
      color: "var(--text-primary)"
    }
  }, nextStudy.title, " \u2192"))));
}
Object.assign(window, {
  CaseStudyScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/CaseStudyScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/HomeScreen.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  Hero,
  SectionHeading,
  CaseStudyCard,
  Reveal,
  StatBlock,
  Timeline,
  SignupForm,
  Tag,
  Button,
  GridOverlay,
  Icon
} = window.PortfolioDesignSystem_3bd050;
function Section({
  id,
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("section", {
    id: id,
    style: {
      maxWidth: "var(--page-max)",
      margin: "0 auto",
      padding: "var(--space-9) var(--gutter)",
      ...style
    }
  }, children);
}
function HomeScreen({
  onOpen
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Hero, {
    eyebrow: "Available for contract work",
    title: "Full-stack developer building tools that",
    accent: "actually ship.",
    subtitle: "Fifteen years across SaaS, mobile and desktop \u2014 legacy rescues, internal tooling, and the occasional plugin with a thousand users.",
    meta: [{
      label: "based",
      value: "Victoria, BC"
    }, {
      label: "stack",
      value: "Vue · Node · PHP · AWS"
    }, {
      label: "focus",
      value: "Product & tooling"
    }],
    actions: [{
      label: "See the work",
      href: "#work",
      icon: "arrow-down"
    }, {
      label: "Resume",
      href: "#about",
      icon: "download",
      variant: "secondary"
    }]
  }), /*#__PURE__*/React.createElement(Section, {
    id: "work"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    index: "01",
    kicker: "selected work",
    title: "Six projects, end to end",
    subtitle: "Each one shipped, maintained and measured."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
      gap: "var(--grid-gap)",
      marginTop: "var(--space-7)"
    }
  }, window.CASE_STUDIES.map((s, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: s.id,
    delay: i * 70
  }, /*#__PURE__*/React.createElement(CaseStudyCard, {
    index: s.index,
    title: s.title,
    subtitle: s.subtitle,
    categories: s.categories,
    platforms: s.platforms,
    stack: s.stack,
    stat: s.stat,
    href: "#" + s.id,
    onClick: e => {
      e.preventDefault();
      onOpen(s.id);
    },
    style: {
      height: "100%"
    }
  }))))), /*#__PURE__*/React.createElement(Section, {
    id: "about",
    style: {
      borderTop: "var(--border-width) solid var(--border)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1.2fr)",
      gap: "var(--space-8)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    index: "02",
    kicker: "about",
    title: "I fix the parts nobody wants to touch.",
    subtitle: "Legacy PHP, half-migrated infrastructure, the internal tool three teams depend on. That work is where I'm useful."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
      gap: "var(--space-6)",
      paddingTop: "var(--space-4)",
      borderTop: "var(--border-width) solid var(--border)"
    }
  }, /*#__PURE__*/React.createElement(StatBlock, {
    value: "15",
    label: "Years shipping",
    size: "sm"
  }), /*#__PURE__*/React.createElement(StatBlock, {
    value: "1300",
    label: "Plugin users",
    accent: "cyan",
    size: "sm"
  }), /*#__PURE__*/React.createElement(StatBlock, {
    value: "3,000+",
    label: "Subscribers taught",
    size: "sm"
  }), /*#__PURE__*/React.createElement(StatBlock, {
    value: "4",
    label: "Platforms shipped",
    accent: "cyan",
    size: "sm"
  }))), /*#__PURE__*/React.createElement(Timeline, {
    items: window.TIMELINE
  }))), /*#__PURE__*/React.createElement(Section, {
    id: "book",
    style: {
      borderTop: "var(--border-width) solid var(--border)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1fr)",
      gap: "var(--space-8)",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    index: "03",
    kicker: "the book",
    title: "Shipping Side Projects",
    subtitle: "A field guide to getting the thing out of localhost \u2014 scoping, cutting, launching, and knowing when to stop."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-2)",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Tag, {
    tone: "green"
  }, "In progress"), /*#__PURE__*/React.createElement(Tag, null, "~180 pages"), /*#__PURE__*/React.createElement(Tag, null, "Early 2027"))), /*#__PURE__*/React.createElement(SignupForm, {
    title: "Get the launch note",
    description: "One email when it's out. Sample chapter to everyone on the list.",
    count: "3,000+ already subscribed",
    note: "No spam. Unsubscribe anytime."
  }))), /*#__PURE__*/React.createElement(Section, {
    id: "community",
    style: {
      borderTop: "var(--border-width) solid var(--border)",
      position: "relative",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement(GridOverlay, {
    size: 64
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    index: "04",
    kicker: "community",
    title: "Teaching is part of the job.",
    subtitle: "~100 tutorials, live coding sessions, and a decade of answering comments."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
      gap: "var(--space-6)",
      marginTop: "var(--space-7)"
    }
  }, [{
    value: "3,000+",
    label: "Subscribers"
  }, {
    value: "~100",
    label: "Videos published"
  }, {
    value: "400K+",
    label: "Total views"
  }, {
    value: "35K+",
    label: "Watch hours"
  }].map((s, i) => /*#__PURE__*/React.createElement(StatBlock, _extends({
    key: s.label
  }, s, {
    accent: i % 2 ? "cyan" : "green"
  })))), /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: "var(--space-8) 0 0",
      padding: "var(--space-6)",
      borderLeft: "2px solid var(--accent-green)",
      background: "var(--surface-card)",
      maxWidth: "var(--measure)"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "var(--text-body-lg)",
      fontWeight: "var(--weight-body-light)",
      color: "var(--text-primary)"
    }
  }, "\u201CYour tutorials were my starting point as a developer. I'm a senior PHP developer now, and I owe much of the foundation to your clear explanations.\u201D"), /*#__PURE__*/React.createElement("footer", {
    style: {
      marginTop: "var(--space-4)",
      fontFamily: "var(--font-mono)",
      fontSize: "var(--text-mono-label)",
      letterSpacing: "var(--tracking-label)",
      textTransform: "uppercase",
      color: "var(--text-muted)"
    }
  }, "Former subscriber, now senior developer")))));
}
Object.assign(window, {
  HomeScreen,
  Section
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/content.jsx
try { (() => {
const NAV_LINKS = [{
  label: "work",
  href: "#work"
}, {
  label: "about",
  href: "#about"
}, {
  label: "book",
  href: "#book"
}, {
  label: "community",
  href: "#community"
}];
const CASE_STUDIES = [{
  index: "01",
  id: "un1on",
  title: "UN1ON",
  subtitle: "Comprehensive IT solutions for labor unions",
  categories: ["Cross-platform", "SaaS"],
  platforms: ["web", "ios", "android", "desktop"],
  stats: [{
    value: "4",
    label: "Shipped platforms"
  }, {
    value: "10 yrs",
    label: "Legacy migrated"
  }],
  challenge: "Maintain a large legacy CRM while upgrading it to modern PHP and modern development standards — and give unions one connected suite to manage members, communications and operations across every platform they work on.",
  solution: ["Modernised the <strong>SaaS CRM</strong> with a PHP backend and JavaScript frontend", "Shipped <strong>mobile apps</strong> for iOS and Android", "Built <strong>desktop applications</strong> for full accessibility", "Added mass email and SMS campaign tooling", "Added video conferencing for remote meetings"],
  technical: ["<strong>Legacy modernisation:</strong> upgrading a large PHP codebase to current versions", "<strong>Cloud migration:</strong> moving infrastructure to AWS (ECS, EC2, RDS)", "<strong>Data management:</strong> working with large volumes of membership data", "<strong>Background processing:</strong> queue systems for efficient job handling"],
  results: "One consistent experience across web, mobile and desktop, on infrastructure the team can actually maintain.",
  stack: ["PHP", "JavaScript", "MySQL", "AWS", "EC2", "ECS", "RDS", "VueJS", "jQuery", "iOS", "Android"],
  cta: {
    label: "Project page",
    href: "https://union1software.com/",
    headline: "See it live"
  }
}, {
  index: "02",
  id: "ananas-table",
  title: "Ananas Table",
  subtitle: "A Figma plugin for data-heavy prototypes",
  categories: ["Plugin", "Tooling"],
  platforms: ["web"],
  stat: "1300 users",
  stats: [{
    value: "1300",
    label: "Active users"
  }, {
    value: "2",
    label: "Clicks to a table"
  }],
  challenge: "Designers lose hours to repetitive table work on data-heavy prototypes. The bottleneck spreads: developers and PMs wait on outputs that should be instant.",
  solution: ["Import CSV data straight into Figma", "Generate fully styled, responsive tables", "Stay aligned with the existing design system", "Finish the whole flow in two clicks"],
  results: ["<strong>Faster workflows:</strong> hours saved on data-related prototyping", "<strong>Cleaner handoffs:</strong> clearer outputs for developers and PMs", "<strong>Built-in consistency:</strong> design-system compliance by default", "<strong>Real adoption:</strong> a trusted tool across cross-functional teams"],
  stack: ["Figma Plugin API", "TypeScript", "VueJS", "NodeJS", "Vite", "CSV"],
  cta: {
    label: "Try the plugin",
    href: "#",
    headline: "Install it from the community"
  }
}, {
  index: "03",
  id: "yii2-channel",
  title: "YII2 Framework Channel",
  subtitle: "Educating developers through hands-on programming",
  categories: ["Community", "Teaching"],
  platforms: ["web"],
  stat: "3,000+ subs",
  stats: [{
    value: "3,000+",
    label: "Subscribers"
  }, {
    value: "~100",
    label: "Videos"
  }, {
    value: "400K+",
    label: "Total views"
  }, {
    value: "35K+",
    label: "Watch hours"
  }],
  challenge: "PHP developers outside the Laravel mainstream had almost no practical, end-to-end material to learn from — and nowhere to ask questions while learning.",
  solution: "A YouTube channel of single-take, unpolished, real-code tutorials plus live programming sessions: framework architecture, auth and RBAC, Active Record, AJAX and Pjax, localisation, e-commerce, performance.",
  results: "A friendly, supportive community that still runs. Subscribers regularly write in to say the channel was their first step toward a senior role.",
  stack: ["Yii Framework", "PHP", "SQL", "jQuery", "AJAX", "Active Record", "Composer", "MVC"],
  cta: {
    label: "Visit channel",
    href: "#",
    headline: "Still publishing"
  }
}, {
  index: "04",
  id: "carmanah",
  title: "Carmanah Signs",
  subtitle: "Digital display management for the lottery industry",
  categories: ["Enterprise", "Tooling"],
  platforms: ["web", "desktop"],
  challenge: "A world leader in lottery digital displays needed to strengthen its content management and delivery system, and to give content creators, designers and deployment teams tools that could keep up with mission-critical signage.",
  solution: ["Developed and maintained the core content management system for digital displays", "Built a custom Figma plugin to streamline the design-to-development workflow", "Built a desktop app for one-click Docker deployment", "Automated internal processes across the display ecosystem"],
  technical: "Mission-critical signage runs continuously in unpredictable environments, so reliability shaped every decision. The deployment tool cut setup time and removed a class of human error; the Figma plugin closed the gap between design and implementation.",
  results: "Faster, more reliable deployments and a content system the global support team can operate without engineering help.",
  stack: ["PHP", "Yii", "SQL", "JS", "Docker", "git", "Electron", "Figma"],
  cta: {
    label: "Company page",
    href: "#",
    headline: "About Carmanah"
  }
}, {
  index: "05",
  id: "portfolio",
  title: "This Portfolio",
  subtitle: "A showcase of the work, built in the open",
  categories: ["Personal", "Open source"],
  platforms: ["web"],
  challenge: "Show full-stack range and UI judgement in one place, without turning it into a maintenance project.",
  solution: ["Server-rendered with Nuxt for performance and SEO", "Responsive layout system built on design tokens", "Interactive case studies rather than screenshot dumps", "An OpenAI-powered assistant for visitors who'd rather ask"],
  technical: "Component-based architecture, TypeScript throughout, Composition API state, deployed from GitHub via AWS Amplify.",
  results: "All code is open — review it, reuse it, or contribute.",
  stack: ["Vue.js", "Nuxt.js", "Tailwind CSS", "Node.js", "AWS Amplify", "OpenAI API"],
  cta: {
    label: "View on GitHub",
    href: "#",
    headline: "The source is public"
  }
}, {
  index: "06",
  id: "web-studio",
  title: "Web Studio",
  subtitle: "Co-founder — a decade of shipped client work",
  categories: ["Agency", "Full-stack"],
  platforms: ["web", "ios", "android", "desktop"],
  stats: [{
    value: "10+",
    label: "Years"
  }, {
    value: "Dozens",
    label: "Projects shipped"
  }],
  challenge: "Run a studio that could take anything from an e-commerce store to an industrial tender platform from pitch to production — across web, mobile and desktop.",
  solution: "Full-stack delivery on Yii2, Vue, React and PHP CMS platforms; responsive frontends to WCAG standards; third-party integration across Stripe, Twilio, SendGrid and AWS; test-covered code and Agile delivery.",
  results: "Tender management systems, pharmaceutical warehouse tooling, a marketplace for artists, a Jitsi conference backend, and dozens of sites across construction, education, music, fashion and electronics.",
  stack: ["Yii", "Laravel", "VueJS", "ReactJS", "Node", "MySQL", "MongoDB", "Docker", "Electron", "Stripe", "Twilio"],
  cta: {
    label: "Get in touch",
    href: "#contact",
    headline: "Need something similar?"
  }
}];
const TIMELINE = [{
  period: "2022 — present",
  role: "Software Developer",
  org: "Carmanah Signs",
  location: "Victoria, BC",
  current: true,
  description: "Content management and delivery for lottery digital displays, plus internal tooling.",
  tags: ["PHP", "Docker", "Electron"]
}, {
  period: "2018 — 2022",
  role: "Full-stack Developer",
  org: "UN1ON",
  location: "Remote",
  description: "Modernised a legacy PHP CRM and shipped the mobile and desktop suite around it.",
  tags: ["Yii", "VueJS", "AWS"]
}, {
  period: "2012 — 2018",
  role: "Co-founder",
  org: "Web Studio",
  location: "Kharkiv, UA",
  description: "Ran delivery for client SaaS, e-commerce and marketplace builds.",
  tags: ["Yii", "React", "MySQL"]
}, {
  period: "2014 — 2019",
  role: "Creator",
  org: "YII2 Framework Channel",
  location: "YouTube",
  description: "~100 hands-on tutorials and live programming sessions.",
  tags: ["Teaching"]
}];
Object.assign(window, {
  NAV_LINKS,
  CASE_STUDIES,
  TIMELINE
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/content.jsx", error: String((e && e.message) || e) }); }

__ds_ns.CaseStudyCard = __ds_scope.CaseStudyCard;

__ds_ns.CaseStudyDetail = __ds_scope.CaseStudyDetail;

__ds_ns.Hero = __ds_scope.Hero;

__ds_ns.Timeline = __ds_scope.Timeline;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.PLATFORM_ICONS = __ds_scope.PLATFORM_ICONS;

__ds_ns.StatBlock = __ds_scope.StatBlock;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.SignupForm = __ds_scope.SignupForm;

__ds_ns.GridOverlay = __ds_scope.GridOverlay;

__ds_ns.Reveal = __ds_scope.Reveal;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.Footer = __ds_scope.Footer;

__ds_ns.Nav = __ds_scope.Nav;

})();
