/* @ds-bundle: {"format":3,"namespace":"CriticalErrorComputingDesignSystem_0eecf1","components":[{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Chip","sourcePath":"components/core/Chip.jsx"},{"name":"Eyebrow","sourcePath":"components/core/Eyebrow.jsx"},{"name":"GlitchText","sourcePath":"components/core/GlitchText.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"ProbeBubble","sourcePath":"components/feedback/ProbeBubble.jsx"},{"name":"FleetCard","sourcePath":"components/fleet/FleetCard.jsx"},{"name":"SpecTable","sourcePath":"components/fleet/SpecTable.jsx"},{"name":"Field","sourcePath":"components/forms/Field.jsx"},{"name":"SegControl","sourcePath":"components/forms/SegControl.jsx"},{"name":"Card","sourcePath":"components/surfaces/Card.jsx"}],"sourceHashes":{"components/core/Button.jsx":"fc58c9a2ae86","components/core/Chip.jsx":"7e8d40e4fb79","components/core/Eyebrow.jsx":"bb2e350efc77","components/core/GlitchText.jsx":"faf99de56f2b","components/core/Tag.jsx":"d30031a8b9e8","components/feedback/ProbeBubble.jsx":"ac8df55c83cc","components/fleet/FleetCard.jsx":"9d33fe9a2aa5","components/fleet/SpecTable.jsx":"b6f435dde764","components/forms/Field.jsx":"392437ff0a47","components/forms/SegControl.jsx":"42a2af90d2cc","components/surfaces/Card.jsx":"5e7e9b6ace92","ui_kits/storefront/data.js":"e95ecd286a6a","ui_kits/storefront/sections-bottom.jsx":"eaf14f43ae8b","ui_kits/storefront/sections-top.jsx":"81a9f0a3e9d3"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.CriticalErrorComputingDesignSystem_0eecf1 = window.CriticalErrorComputingDesignSystem_0eecf1 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * CEC Button — the brand's primary action atom.
 * Sharp 2px corners, magenta primary or ghost outline, lifts on hover.
 * Variants: primary | ghost. Sizes: md | sm.
 */
function Button({
  children,
  variant = "primary",
  size = "md",
  repCue = false,
  icon = null,
  iconRight = false,
  className = "",
  style,
  ...rest
}) {
  const cls = ["btn", variant === "ghost" ? "btn-ghost" : "btn-primary", size === "sm" ? "btn-sm" : "", repCue ? "rep-cue" : "", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("button", _extends({
    className: cls,
    style: style
  }, rest), icon && !iconRight && /*#__PURE__*/React.createElement("span", {
    className: "btn-ic",
    "aria-hidden": "true"
  }, icon), children, icon && iconRight && /*#__PURE__*/React.createElement("span", {
    className: "btn-ic",
    "aria-hidden": "true"
  }, icon));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Chip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * CEC Chip — a mono uppercase status pill. Optional status dot.
 * Used for live/online states, bench tags, build attributes.
 */
function Chip({
  children,
  dot = false,
  status = "ok",
  style,
  className = "",
  ...rest
}) {
  const dotColor = status === "warn" ? "var(--warn)" : status === "accent" ? "var(--accent)" : "var(--ok)";
  return /*#__PURE__*/React.createElement("span", _extends({
    className: `chip ${className}`,
    style: style
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    className: "dot",
    style: {
      background: dotColor,
      boxShadow: `0 0 10px ${dotColor}`
    }
  }), children);
}
Object.assign(__ds_scope, { Chip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Chip.jsx", error: String((e && e.message) || e) }); }

// components/core/Eyebrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * CEC Eyebrow — the mono kicker that labels every section, with an
 * accent rule before the text. The brand's most recognizable label atom.
 */
function Eyebrow({
  children,
  rule = true,
  style,
  className = "",
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    className: `eyebrow ${rule ? "" : "no-rule"} ${className}`,
    style: style
  }, rest), children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/core/GlitchText.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState,
  useEffect,
  useRef
} = React;
/**
 * CEC GlitchText — the brand wink. Wraps a word that periodically
 * RGB-splits and flickers, optionally swapping to an `alt` spelling
 * (e.g. "wrong" → "right", "error" → "ERR0R") mid-glitch, then resolves.
 * Respects prefers-reduced-motion (renders the resolved word, no animation).
 */
function GlitchText({
  children,
  alt,
  accent = false,
  every = 5200,
  style,
  ...rest
}) {
  const [glitching, setGlitching] = useState(false);
  const [text, setText] = useState(children);
  const reduced = useRef(false);
  useEffect(() => {
    reduced.current = typeof window !== "undefined" && window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced.current) return;
    let alive = true;
    const tick = () => {
      if (!alive) return;
      setGlitching(true);
      if (alt && Math.random() < 0.65) {
        setTimeout(() => alive && setText(alt), 60);
        setTimeout(() => alive && setText(children), 210);
      }
      setTimeout(() => alive && setGlitching(false), 280);
    };
    const id = setInterval(tick, every + Math.random() * every * 0.6);
    return () => {
      alive = false;
      clearInterval(id);
    };
  }, [children, alt, every]);
  return /*#__PURE__*/React.createElement("span", _extends({
    className: `gw ${glitching ? "glitching" : ""}`,
    "data-alt": alt,
    style: {
      color: accent ? "var(--accent)" : undefined,
      ...style
    }
  }, rest), text);
}
Object.assign(__ds_scope, { GlitchText });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/GlitchText.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * CEC Tag — a small mono uppercase marker. Two looks:
 * "flag" (filled magenta — "MOST POPULAR", "FEATURED") and
 * "outline" (hairline spec chip — "RTX 5090", "64GB DDR5").
 */
function Tag({
  children,
  variant = "outline",
  style,
  className = "",
  ...rest
}) {
  const base = {
    fontFamily: "var(--font-mono)",
    textTransform: "uppercase",
    display: "inline-flex",
    alignItems: "center",
    borderRadius: "var(--r-xs)",
    whiteSpace: "nowrap"
  };
  const looks = {
    flag: {
      fontSize: 10,
      letterSpacing: "0.16em",
      color: "#fff",
      background: "var(--accent)",
      padding: "4px 10px"
    },
    outline: {
      fontSize: 11,
      letterSpacing: "0.06em",
      color: "var(--dim)",
      border: "var(--bd)",
      padding: "4px 9px"
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    className: className,
    style: {
      ...base,
      ...looks[variant],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/ProbeBubble.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * CEC ProbeBubble — a single message in the Probe front-desk chat.
 * "bot" messages carry Probe's drone avatar; "user" messages are
 * right-aligned accent bubbles. Optional tenet "stamp" footnote.
 */
function ProbeBubble({
  who = "bot",
  children,
  stamp,
  avatar = "assets/probe-ship.png",
  style,
  ...rest
}) {
  const isBot = who === "bot";
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      gap: 10,
      maxWidth: "92%",
      alignSelf: isBot ? "flex-start" : "flex-end",
      flexDirection: isBot ? "row" : "row-reverse",
      marginLeft: isBot ? 0 : "auto",
      ...style
    }
  }, rest), isBot && /*#__PURE__*/React.createElement("div", {
    style: {
      width: 30,
      height: 30,
      flexShrink: 0,
      borderRadius: "50%",
      overflow: "hidden",
      background: "var(--bg-2)",
      display: "grid",
      placeItems: "center"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: avatar,
    alt: "",
    style: {
      width: 30,
      height: 30,
      objectFit: "contain"
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 14.5,
      lineHeight: 1.55,
      padding: "11px 14px",
      borderRadius: isBot ? "3px 12px 12px 12px" : "12px 3px 12px 12px",
      background: isBot ? "var(--surface)" : "var(--accent)",
      color: isBot ? "var(--text)" : "#fff",
      border: isBot ? "var(--bd)" : "1px solid transparent"
    }
  }, children), stamp && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 10.5,
      color: "var(--faint)",
      marginTop: 7,
      lineHeight: 1.5
    }
  }, /*#__PURE__*/React.createElement("b", {
    style: {
      color: "var(--accent)"
    }
  }, "\u203B"), " ", stamp)));
}
Object.assign(__ds_scope, { ProbeBubble });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/ProbeBubble.jsx", error: String((e && e.message) || e) }); }

// components/fleet/FleetCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
/**
 * CEC FleetCard — the signature product card for a PC "class".
 * Photo on a radial-glow stage, class number, name, price, role line,
 * spec chips, and a link. Hover lifts and tints to the product accent.
 */
function FleetCard({
  no,
  name,
  price,
  priceNote,
  img,
  role,
  tier,
  chips = [],
  href = "#",
  featured = false,
  flag,
  accent = "var(--accent)",
  style,
  ...rest
}) {
  const [hover, setHover] = useState(false);
  const pa = accent;
  return /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "flex",
      flexDirection: "column",
      position: "relative",
      color: "inherit",
      background: "linear-gradient(180deg, var(--surface), var(--bg-2))",
      border: `1px solid ${featured || hover ? `color-mix(in oklch, ${pa} 58%, transparent)` : "var(--border)"}`,
      borderRadius: "var(--r-lg)",
      overflow: "hidden",
      transform: hover ? "translateY(-5px)" : "none",
      boxShadow: hover ? `0 30px 70px -40px ${pa}` : "none",
      transition: "transform .25s var(--ease-out), border-color .25s, box-shadow .25s",
      ...style
    }
  }, rest), flag && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: 14,
      right: 14,
      zIndex: 3,
      fontFamily: "var(--font-mono)",
      fontSize: 10,
      letterSpacing: "0.16em",
      textTransform: "uppercase",
      color: "#fff",
      background: pa,
      padding: "4px 10px",
      borderRadius: "var(--r-xs)"
    }
  }, flag), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 200,
      display: "grid",
      placeItems: "center",
      padding: 18,
      borderBottom: "var(--bd)",
      background: `radial-gradient(ellipse 70% 70% at 50% 45%, color-mix(in oklch, ${pa} 16%, transparent), transparent 70%)`
    }
  }, img ? /*#__PURE__*/React.createElement("img", {
    src: img,
    alt: `${name}-class build`,
    style: {
      position: "relative",
      maxWidth: "86%",
      maxHeight: 168,
      width: "auto",
      objectFit: "contain",
      zIndex: 1,
      filter: "drop-shadow(0 18px 28px rgba(0,0,0,.5))"
    }
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 12,
      color: "var(--faint)",
      letterSpacing: "0.14em"
    }
  }, "[ COMMISSIONED PER CLIENT ]")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "24px 24px 26px",
      display: "flex",
      flexDirection: "column",
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "baseline",
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      letterSpacing: "0.1em",
      textTransform: "uppercase",
      color: pa
    }
  }, no, " ", tier ? `· ${tier}` : "")), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 600,
      fontSize: 30,
      lineHeight: 1,
      marginBottom: 10
    }
  }, name), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: 8,
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 34,
      fontWeight: 700,
      lineHeight: 1
    }
  }, price), priceNote && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 12,
      color: "var(--faint)"
    }
  }, priceNote)), role && /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--dim)",
      fontSize: 14.5,
      lineHeight: 1.55,
      marginBottom: 18
    }
  }, role), chips.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 7,
      marginBottom: 22
    }
  }, chips.map((c, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      color: "var(--dim)",
      border: "var(--bd)",
      borderRadius: "var(--r-xs)",
      padding: "4px 9px"
    }
  }, c))), /*#__PURE__*/React.createElement("span", {
    style: {
      marginTop: "auto",
      fontFamily: "var(--font-body)",
      fontWeight: 600,
      fontSize: 15,
      color: pa,
      display: "inline-flex",
      alignItems: "center",
      gap: hover ? 12 : 8,
      transition: "gap .2s"
    }
  }, "Full spec \u2192")));
}
Object.assign(__ds_scope, { FleetCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/fleet/FleetCard.jsx", error: String((e && e.message) || e) }); }

// components/fleet/SpecTable.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const DEFAULT_ROWS = [["cpu", "CPU"], ["gpu", "GPU"], ["ram", "RAM"], ["storage", "Storage"], ["psu", "Power"], ["cool", "Cooling"], ["chassis", "Chassis"]];

/**
 * CEC SpecTable — the build spec sheet. A list of mono-labelled rows
 * (CPU / GPU / RAM / …) with hairline separators. Pass a `specs` object
 * keyed by cpu/gpu/ram/storage/psu/cool/chassis, or custom `rows`.
 */
function SpecTable({
  specs = {},
  rows = DEFAULT_ROWS,
  litKey = null,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      flexDirection: "column",
      ...style
    }
  }, rest), rows.map(([key, label]) => {
    const lit = key === litKey;
    return /*#__PURE__*/React.createElement("div", {
      key: key,
      style: {
        display: "grid",
        gridTemplateColumns: "130px 1fr",
        gap: 16,
        padding: "16px 12px",
        borderTop: "var(--bd)",
        background: lit ? "var(--accent-soft)" : "transparent",
        transition: "background .2s"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-mono)",
        fontSize: 12,
        letterSpacing: "0.08em",
        textTransform: "uppercase",
        color: "var(--text)"
      }
    }, label), /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--dim)",
        fontSize: 14.5
      }
    }, specs[key] || "—"));
  }));
}
Object.assign(__ds_scope, { SpecTable });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/fleet/SpecTable.jsx", error: String((e && e.message) || e) }); }

// components/forms/Field.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * CEC Field — a labelled text input. Sunk dark fill, hairline border that
 * lights to magenta on focus, mono uppercase label. The brand's form atom.
 */
function Field({
  label,
  id,
  style,
  inputStyle,
  ...rest
}) {
  const inputId = id || (label ? `f-${label.replace(/\s+/g, "-").toLowerCase()}` : undefined);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 8,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      letterSpacing: "0.12em",
      textTransform: "uppercase",
      color: "var(--faint)"
    }
  }, label), /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    className: "cec-field",
    style: {
      background: "oklch(0.11 0.015 285)",
      border: "var(--bd)",
      borderRadius: "var(--r-sm)",
      padding: "14px 15px",
      color: "var(--text)",
      fontFamily: "var(--font-body)",
      fontSize: 15,
      width: "100%",
      transition: "border-color .2s",
      ...inputStyle
    }
  }, rest)));
}
Object.assign(__ds_scope, { Field });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Field.jsx", error: String((e && e.message) || e) }); }

// components/forms/SegControl.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * CEC SegControl — a segmented selector of mono uppercase buttons.
 * The active segment lights to the accent tint. Used for budget bands,
 * RGB on/off, and other small either/or choices in forms and Probe flows.
 */
function SegControl({
  options = [],
  value,
  onChange,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      gap: 8,
      flexWrap: "wrap",
      ...style
    }
  }, rest), options.map(opt => {
    const val = typeof opt === "string" ? opt : opt.value;
    const label = typeof opt === "string" ? opt : opt.label;
    const on = val === value;
    return /*#__PURE__*/React.createElement("button", {
      key: val,
      type: "button",
      onClick: () => onChange && onChange(val),
      style: {
        flex: 1,
        minWidth: 90,
        padding: "11px 10px",
        borderRadius: "var(--r-sm)",
        cursor: "pointer",
        background: on ? "var(--accent-soft)" : "oklch(0.11 0.015 285)",
        border: on ? "1px solid var(--accent)" : "var(--bd)",
        color: on ? "var(--text)" : "var(--dim)",
        fontFamily: "var(--font-mono)",
        fontSize: 11.5,
        letterSpacing: "0.06em",
        textTransform: "uppercase",
        transition: "all .2s"
      }
    }, label);
  }));
}
Object.assign(__ds_scope, { SegControl });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/SegControl.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
/**
 * CEC Card — the workhorse surface. Gradient panel, hairline border that
 * brightens (or accent-tints) on hover, optional lift. Wrap any content.
 */
function Card({
  children,
  hover = true,
  featured = false,
  pad = 28,
  style,
  className = "",
  ...rest
}) {
  const [h, setH] = useState(false);
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => hover && setH(true),
    onMouseLeave: () => hover && setH(false),
    className: className,
    style: {
      background: "linear-gradient(180deg, var(--surface), var(--bg-2))",
      border: `1px solid ${featured ? "var(--accent)" : h ? "var(--border-bright)" : "var(--border)"}`,
      borderRadius: "var(--r-lg)",
      padding: pad,
      position: "relative",
      boxShadow: featured ? "0 0 0 1px var(--accent-line), 0 30px 70px -40px var(--accent)" : "none",
      transform: h ? "translateY(-3px)" : "none",
      transition: "transform .25s var(--ease-out), border-color .25s, box-shadow .25s",
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Card.jsx", error: String((e && e.message) || e) }); }

// ui_kits/storefront/data.js
try { (() => {
/* CEC storefront kit — data (fleet classes, reviews, partners). */
window.KIT_FLEET = [{
  id: "probe",
  no: "CL-01",
  name: "Probe",
  price: "$1,249.99",
  tier: "Entry",
  img: "../../assets/classes/probe.webp",
  role: "Compact APU build. Game now, drop in a GPU (up to RTX 5070) later.",
  specs: {
    cpu: "Ryzen 7 8700G",
    gpu: "Radeon 780M (integrated)",
    ram: "32GB DDR5",
    storage: "512GB NVMe",
    psu: "650W · 80+ Gold",
    cool: "AMD stock cooler",
    chassis: "Zalman Cubix"
  }
}, {
  id: "fighter",
  no: "CL-02",
  name: "Fighter",
  price: "$1,699.99",
  tier: "Entry",
  img: "../../assets/classes/fighter.webp",
  role: "Compact AM5 with a dedicated RTX 5060 for AAA at high settings.",
  specs: {
    cpu: "Ryzen 5 9600X",
    gpu: "GeForce RTX 5060",
    ram: "32GB DDR5",
    storage: "512GB NVMe",
    psu: "650W · 80+ Gold",
    cool: "Thermalright 4-heatpipe air",
    chassis: "Zalman Cubix"
  }
}, {
  id: "corvette",
  no: "CL-03",
  name: "Corvette",
  price: "$1,999.99",
  tier: "Tier 1",
  img: "../../assets/classes/corvette.webp",
  role: "Compact and premium: refined 1440p, braided cables.",
  specs: {
    cpu: "Ryzen 7 7700X",
    gpu: "RX 9060 XT 16GB",
    ram: "32GB DDR5-6000",
    storage: "1TB Gen4 NVMe",
    psu: "750W · 80+ Gold",
    cool: "Thermalright Frozen Notte 240",
    chassis: "Lian Li V100R"
  }
}, {
  id: "frigate",
  no: "CL-04",
  name: "Frigate",
  price: "$2,499.99",
  tier: "Tier 1",
  img: "../../assets/classes/frigate.webp",
  role: "1440p dominant, 4K-capable, 360mm cooling.",
  specs: {
    cpu: "Ryzen 7 7700X",
    gpu: "RTX 5070 12GB",
    ram: "32GB DDR5",
    storage: "1TB Gen4 NVMe",
    psu: "750W · 80+ Gold",
    cool: "Thermalright LCD AIO",
    chassis: "Lian Li Lancool 207"
  }
}, {
  id: "destroyer",
  no: "CL-05",
  name: "Destroyer",
  price: "$3,499.99",
  tier: "Tier 2",
  img: "../../assets/classes/destroyer.webp",
  flag: "Popular",
  role: "High-FPS 1440p / smooth 4K, pro-grade.",
  specs: {
    cpu: "Ryzen 7 9800X3D",
    gpu: "GeForce RTX 5070 Ti 16GB",
    ram: "32GB DDR5",
    storage: "2TB Gen4 NVMe",
    psu: "850W · 80+ Gold",
    cool: "Thermalright LCD AIO",
    chassis: "Phanteks NV5 MK2"
  }
}, {
  id: "cruiser",
  no: "CL-06",
  name: "Cruiser",
  price: "$4,499.99",
  tier: "Tier 2",
  img: "../../assets/classes/cruiser.webp",
  role: "4K flagship-tier gaming + heavy creative work.",
  specs: {
    cpu: "Ryzen 7 9800X3D",
    gpu: "GeForce RTX 5080 16GB",
    ram: "32GB DDR5",
    storage: "2TB Gen4 NVMe",
    psu: "1000W · Platinum",
    cool: "Thermalright Hyper Vision 360",
    chassis: "Phanteks NV5 MK2"
  }
}, {
  id: "battlecruiser",
  no: "CL-07",
  name: "Battlecruiser",
  price: "$6,299.99",
  tier: "Tier 3",
  img: "../../assets/classes/battlecruiser.webp",
  role: "4K high-refresh + VMs / heavy multitask.",
  specs: {
    cpu: "Ryzen 7 9800X3D",
    gpu: "GeForce RTX 5080 16GB",
    ram: "64GB DDR5",
    storage: "4TB Gen4 NVMe",
    psu: "1200W · Platinum",
    cool: "Thermalright Wonder Vision 360",
    chassis: "Phanteks Evolv X2"
  }
}, {
  id: "battleship",
  no: "CL-08",
  name: "Battleship",
  price: "$8,999.99",
  tier: "Tier 3",
  img: "../../assets/classes/battleship.webp",
  role: "Pinnacle air-cooled flagship, 8K-capable.",
  specs: {
    cpu: "Ryzen 9 9950X3D",
    gpu: "GeForce RTX 5090",
    ram: "64GB DDR5",
    storage: "4TB Gen4 NVMe",
    psu: "1300W · Platinum",
    cool: "Thermalright Wonder Vision 360",
    chassis: "Phanteks Evolv X2"
  }
}, {
  id: "dreadnaught",
  no: "CL-09",
  name: "Dreadnaught",
  price: "$11,999.99",
  tier: "Apex",
  img: "../../assets/classes/dreadnaught.webp",
  role: "Battleship hardware + custom dual-loop liquid artistry.",
  specs: {
    cpu: "Ryzen 9 9950X3D",
    gpu: "GeForce RTX 5090",
    ram: "64GB DDR5",
    storage: "4TB Gen4 NVMe",
    psu: "1300W · Platinum",
    cool: "Custom dual-loop (Mayhems X1)",
    chassis: "Phanteks Evolv X2"
  }
}, {
  id: "titan",
  no: "CL-10",
  name: "Titan",
  price: "$15,000+",
  tier: "Apex",
  img: null,
  titan: true,
  role: "Fully bespoke showcase. White-glove, sponsored-grade components.",
  specs: {
    cpu: "Flagship, to spec",
    gpu: "Flagship, to spec",
    ram: "To spec",
    storage: "To spec",
    psu: "To spec",
    cool: "Fully custom liquid loop",
    chassis: "Bespoke / custom"
  }
}];
window.KIT_PARTNERS = ["asus", "rog", "nzxt", "seasonic", "gskill", "deepcool", "antec", "alphacool", "asiahorse"];
window.KIT_REVIEWS = [{
  name: "John Gederberg",
  meta: "3 weeks ago · 12 reviews",
  text: "Super informative about the computers they build, fairly priced for the work they put into them. I've wanted a gaming pc for years but never had the knowledge to build one. Couldn't be happier."
}, {
  name: "Chris Allen",
  meta: "3 weeks ago · 4 reviews",
  text: "I got my first gaming pc from Critical Error and it's awesome. I'm new to the pc world and they were great about explaining things to me on a caveman level. 100% recommend."
}, {
  name: "Deja Vù",
  meta: "3 weeks ago · 2 photos",
  text: "Accepted me last minute without an appointment, repaired my radiator fans (which I didn't even know were broken) and fixed the graphics issue. Please visit and do business with these guys."
}];
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/storefront/data.js", error: String((e && e.message) || e) }); }

// ui_kits/storefront/sections-bottom.jsx
try { (() => {
/* CEC storefront — partners, compare, fleet, reviews, footer, rep modal, App. */
const {
  Button: KBtn,
  Eyebrow: KEye,
  Chip: KChip,
  Tag: KTag,
  SpecTable: KSpec,
  Field: KField
} = window.CriticalErrorComputingDesignSystem_0eecf1;
const {
  useState: uState
} = React;
function Partners() {
  const row = [...window.KIT_PARTNERS, ...window.KIT_PARTNERS];
  return /*#__PURE__*/React.createElement("section", {
    className: "partners"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("span", {
    className: "kicker-tag"
  }, "Featured partners \xB7 the parts your build deserves")), /*#__PURE__*/React.createElement("div", {
    className: "marquee"
  }, /*#__PURE__*/React.createElement("div", {
    className: "marquee-track"
  }, row.map((n, i) => /*#__PURE__*/React.createElement("img", {
    key: i,
    src: `../../assets/logos/${n}.png`,
    alt: i < window.KIT_PARTNERS.length ? n : ""
  })))));
}
function Compare({
  onHuman
}) {
  return /*#__PURE__*/React.createElement("section", {
    className: "section wrap",
    id: "why"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "section-num"
  }, "01 / THE DIFFERENCE"), /*#__PURE__*/React.createElement(KEye, null, "The anti-configurator"), /*#__PURE__*/React.createElement("h2", {
    className: "display-l"
  }, "The other guys hand you a cart.", /*#__PURE__*/React.createElement("br", null), "We hand you a ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--accent)"
    }
  }, "person"), ".")), /*#__PURE__*/React.createElement("div", {
    className: "vs2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "vs2-card them"
  }, /*#__PURE__*/React.createElement("div", {
    className: "vs2-tag"
  }, "Buying elsewhere"), /*#__PURE__*/React.createElement("h3", null, "The other guys"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("span", {
    className: "mk"
  }, "\u2715"), /*#__PURE__*/React.createElement("span", null, "A configurator with 400 dropdowns and zero opinions.")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("span", {
    className: "mk"
  }, "\u2715"), /*#__PURE__*/React.createElement("span", null, "Support bots that never resolve anything. By design.")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("span", {
    className: "mk"
  }, "\u2715"), /*#__PURE__*/React.createElement("span", null, "Spec-sheet pricing. Your needs are somebody's SKU.")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("span", {
    className: "mk"
  }, "\u2715"), /*#__PURE__*/React.createElement("span", null, "90-day this, one-year that, good luck after.")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("span", {
    className: "mk"
  }, "\u2715"), /*#__PURE__*/React.createElement("span", null, "You are order #84,117.")))), /*#__PURE__*/React.createElement("div", {
    className: "vs2-mid"
  }, "VS"), /*#__PURE__*/React.createElement("div", {
    className: "vs2-card us"
  }, /*#__PURE__*/React.createElement("div", {
    className: "vs2-tag"
  }, "Buying at CEC"), /*#__PURE__*/React.createElement("h3", null, "Critical Error Computing"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("span", {
    className: "mk"
  }, "\u2713"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("b", null, "Every PC is tailored"), " to the client's needs and desires.")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("span", {
    className: "mk"
  }, "\u2713"), /*#__PURE__*/React.createElement("span", null, "Friction is never a dead end. It's a ", /*#__PURE__*/React.createElement("b", null, "handoff to a human"), ".")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("span", {
    className: "mk"
  }, "\u2713"), /*#__PURE__*/React.createElement("span", null, "Reference prices, not walls. ", /*#__PURE__*/React.createElement("b", null, "The final budget is yours"), ".")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("span", {
    className: "mk"
  }, "\u2713"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("b", null, "10-year warranty. Lifetime support."), " A person answers.")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("span", {
    className: "mk"
  }, "\u2713"), /*#__PURE__*/React.createElement("span", null, "You're a name we remember, and a glass panel we etched."))), /*#__PURE__*/React.createElement("div", {
    className: "vs2-foot"
  }, /*#__PURE__*/React.createElement(KBtn, {
    repCue: true,
    onClick: () => onHuman("Compare · Start the conversation")
  }, "Start the conversation")))));
}
function Fleet({
  selected,
  onSelect,
  onCart,
  onHuman
}) {
  const cls = selected;
  return /*#__PURE__*/React.createElement("section", {
    className: "section wrap",
    id: "fleet"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "section-num"
  }, "02 / THE FLEET"), /*#__PURE__*/React.createElement(KEye, null, "Ten classes \xB7 Probe to Titan"), /*#__PURE__*/React.createElement("h2", {
    className: "display-l"
  }, "Pick a vessel. We tailor it to you."), /*#__PURE__*/React.createElement("p", {
    className: "lede"
  }, "Reference configurations from $1,249.99 to a $15,000+ Titan commission. Every one reshaped around its actual buyer before a single part is ordered.")), /*#__PURE__*/React.createElement("div", {
    className: "fleet-grid"
  }, window.KIT_FLEET.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.id,
    className: `fleet-card ${c.titan ? "titan" : ""} ${cls && cls.id === c.id ? "sel" : ""}`,
    onClick: () => onSelect(c)
  }, c.flag && /*#__PURE__*/React.createElement("span", {
    className: "fleet-flag"
  }, c.flag), c.img ? /*#__PURE__*/React.createElement("div", {
    className: "fleet-shot"
  }, /*#__PURE__*/React.createElement("img", {
    src: c.img,
    alt: c.name
  })) : /*#__PURE__*/React.createElement("div", {
    className: "titan-shot"
  }, /*#__PURE__*/React.createElement("span", {
    className: "tg"
  }, "COMMISSIONED")), /*#__PURE__*/React.createElement("div", {
    className: "fleet-body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fleet-no"
  }, c.no, " \xB7 ", c.tier), /*#__PURE__*/React.createElement("div", {
    className: "fleet-name"
  }, c.name), /*#__PURE__*/React.createElement("div", {
    className: "fleet-price"
  }, c.price, c.titan && /*#__PURE__*/React.createElement("small", null, "full commission")))))), cls && /*#__PURE__*/React.createElement("div", {
    className: "detail"
  }, cls.img ? /*#__PURE__*/React.createElement("div", {
    className: "detail-shot"
  }, /*#__PURE__*/React.createElement("img", {
    src: cls.img,
    alt: cls.name
  })) : /*#__PURE__*/React.createElement("div", {
    className: "detail-shot",
    style: {
      display: "grid",
      placeItems: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 12,
      letterSpacing: "0.24em",
      color: "var(--faint)"
    }
  }, "[ COMMISSIONED PER CLIENT ]")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      alignItems: "center",
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      letterSpacing: "0.14em",
      color: "var(--accent)"
    }
  }, cls.no, " \xB7 ", cls.tier), /*#__PURE__*/React.createElement(KChip, {
    dot: true,
    status: "ok"
  }, "Bench passed")), /*#__PURE__*/React.createElement("h3", {
    className: "display-m"
  }, cls.name), /*#__PURE__*/React.createElement("p", {
    className: "role"
  }, cls.role), /*#__PURE__*/React.createElement("div", {
    className: "price"
  }, cls.price), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 7,
      flexWrap: "wrap",
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement(KTag, {
    variant: "outline"
  }, cls.specs.gpu), /*#__PURE__*/React.createElement(KTag, {
    variant: "outline"
  }, cls.specs.cpu), /*#__PURE__*/React.createElement(KTag, {
    variant: "outline"
  }, cls.specs.ram)), /*#__PURE__*/React.createElement(KSpec, {
    specs: cls.specs,
    litKey: "gpu"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12,
      marginTop: 20
    }
  }, cls.titan ? /*#__PURE__*/React.createElement(KBtn, {
    repCue: true,
    onClick: () => onHuman("Titan · scope a commission")
  }, "Scope a commission") : /*#__PURE__*/React.createElement(KBtn, {
    onClick: () => onCart(cls)
  }, "Add to cart"), /*#__PURE__*/React.createElement(KBtn, {
    variant: "ghost",
    onClick: () => onHuman(`${cls.name} · tweak the spec`)
  }, "Tweak the spec")))));
}
function Reviews() {
  return /*#__PURE__*/React.createElement("section", {
    className: "section wrap",
    id: "reviews"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "section-num"
  }, "03 / THE RECORD"), /*#__PURE__*/React.createElement(KEye, null, "Every review. Five stars."), /*#__PURE__*/React.createElement("h2", {
    className: "display-l"
  }, "Statistically suspicious levels of happy."), /*#__PURE__*/React.createElement("p", {
    className: "lede"
  }, "115 reviews on Google, a 4.98 average that displays as 5.0, and a spotless Facebook record. Run by actual humans, which is why they're good.")), /*#__PURE__*/React.createElement("div", {
    className: "rev-grid"
  }, window.KIT_REVIEWS.map((r, i) => /*#__PURE__*/React.createElement("div", {
    className: "rev-card",
    key: i
  }, /*#__PURE__*/React.createElement("div", {
    className: "rev-stars"
  }, "\u2605\u2605\u2605\u2605\u2605"), /*#__PURE__*/React.createElement("p", null, "\"", r.text, "\""), /*#__PURE__*/React.createElement("div", {
    className: "rev-who"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rev-av"
  }, r.name[0]), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "rev-name"
  }, r.name), /*#__PURE__*/React.createElement("div", {
    className: "rev-meta"
  }, r.meta)))))));
}
function Footer({
  onHuman
}) {
  return /*#__PURE__*/React.createElement("footer", {
    className: "foot"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "foot-grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "brand",
    style: {
      cursor: "default"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/cec-logo.png",
    alt: "",
    style: {
      height: 48
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "brand-name"
  }, "Critical ", /*#__PURE__*/React.createElement("span", null, "Error"), /*#__PURE__*/React.createElement("br", null), "Computing")), /*#__PURE__*/React.createElement("p", {
    className: "foot-note"
  }, "Critical Error Computing LLC \xB7 19807 Dawn Mist Dr, Humble, TX 77346 \xB7 (713) 309-6361. Custom gaming PCs tailored by qualified engineers. 10-year warranty, lifetime support, complimentary glass etching on every build. Mon\u2013Sat 12\u20138 PM CT."), /*#__PURE__*/React.createElement(KBtn, {
    variant: "ghost",
    size: "sm",
    onClick: () => onHuman("Footer · Talk to a human")
  }, "Talk to a human")), /*#__PURE__*/React.createElement("div", {
    className: "foot-line"
  }, /*#__PURE__*/React.createElement("a", null, "Refund policy"), /*#__PURE__*/React.createElement("a", null, "Terms of service"), /*#__PURE__*/React.createElement("a", null, "Privacy policy"), /*#__PURE__*/React.createElement("a", null, "Shipping policy"), /*#__PURE__*/React.createElement("a", null, "Warranty"), /*#__PURE__*/React.createElement("a", null, "CCPA opt-out"))));
}

/* ---- Rep modal ---- */
function RepModal({
  source,
  onClose
}) {
  const [phase, setPhase] = uState("crit");
  React.useEffect(() => {
    const t1 = setTimeout(() => setPhase("contact"), 1100);
    const t2 = setTimeout(() => setPhase("portal"), 3000);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    className: "rep-overlay",
    onMouseDown: e => {
      if (e.target === e.currentTarget) onClose();
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "rep-panel",
    role: "dialog"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rep-bar"
  }, /*#__PURE__*/React.createElement("span", {
    className: "lights"
  }, /*#__PURE__*/React.createElement("i", null), /*#__PURE__*/React.createElement("i", null), /*#__PURE__*/React.createElement("i", null)), /*#__PURE__*/React.createElement("span", null, "CEC HELPDESK UPLINK"), /*#__PURE__*/React.createElement("button", {
    className: "x",
    onClick: onClose
  }, "\u2715")), /*#__PURE__*/React.createElement("div", {
    className: "rep-stage"
  }, phase === "crit" && /*#__PURE__*/React.createElement("div", {
    className: "rep-crit"
  }, /*#__PURE__*/React.createElement("small", null, "// exception raised"), "AI critical error"), phase === "contact" && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 14,
      color: "var(--dim)"
    }
  }, "Contacting representative\u2026", /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "var(--faint)",
      marginTop: 10
    }
  }, "Rerouting you to an actual qualified human")), phase === "portal" && /*#__PURE__*/React.createElement("div", {
    className: "rep-portal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ok-ring"
  }, "\u2713"), /*#__PURE__*/React.createElement("h3", null, "Link established"), /*#__PURE__*/React.createElement("p", null, "A CEC team member is ready at a Helpdesk terminal: live by ", /*#__PURE__*/React.createElement("b", null, "video"), ", or ", /*#__PURE__*/React.createElement("b", null, "voice"), " if your connection is rough."), /*#__PURE__*/React.createElement("div", {
    className: "rep-terminal"
  }, "HELPDESK TERMINAL 02 \xB7 ", /*#__PURE__*/React.createElement("b", null, "STANDING BY"), /*#__PURE__*/React.createElement("br", null), source && /*#__PURE__*/React.createElement(React.Fragment, null, "CTX \u2192 ", source, /*#__PURE__*/React.createElement("br", null)), "[ live video portal docks here ]")))));
}
function App() {
  const [cart, setCart] = uState(0);
  const [selected, setSelected] = uState(null);
  const [rep, setRep] = uState(null);
  const openHuman = src => setRep(src || "direct");
  const addCart = cls => {
    setCart(c => c + 1);
  };
  const browse = () => {
    const el = document.getElementById("fleet");
    if (el) window.scrollTo({
      top: el.offsetTop - 70,
      behavior: "smooth"
    });
  };
  const toTop = () => window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
  return /*#__PURE__*/React.createElement("div", {
    className: "kit"
  }, /*#__PURE__*/React.createElement(window.KitNav, {
    cart: cart,
    onHuman: openHuman,
    onBrand: toTop
  }), /*#__PURE__*/React.createElement(window.KitHero, {
    onHuman: openHuman,
    onPick: setSelected,
    onBrowse: browse
  }), /*#__PURE__*/React.createElement(Partners, null), /*#__PURE__*/React.createElement(Compare, {
    onHuman: openHuman
  }), /*#__PURE__*/React.createElement(Fleet, {
    selected: selected,
    onSelect: c => setSelected(s => s && s.id === c.id ? null : c),
    onCart: addCart,
    onHuman: openHuman
  }), /*#__PURE__*/React.createElement(Reviews, null), /*#__PURE__*/React.createElement(Footer, {
    onHuman: openHuman
  }), rep && /*#__PURE__*/React.createElement(RepModal, {
    source: rep,
    onClose: () => setRep(null)
  }));
}
ReactDOM.createRoot(document.getElementById("app")).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/storefront/sections-bottom.jsx", error: String((e && e.message) || e) }); }

// ui_kits/storefront/sections-top.jsx
try { (() => {
/* CEC storefront — Nav, Hero, and a scripted Probe chat. */
const {
  Button,
  Eyebrow,
  GlitchText,
  ProbeBubble,
  Chip,
  SegControl
} = window.CriticalErrorComputingDesignSystem_0eecf1;
const {
  useState,
  useRef,
  useEffect
} = React;
const NAV_LINKS = ["The Fleet", "Compare", "Showroom", "Leaderboard", "Services", "Warranty", "About", "Contact"];
function Nav({
  cart,
  onHuman,
  onBrand
}) {
  return /*#__PURE__*/React.createElement("nav", {
    className: "nav"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap nav-inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "brand",
    onClick: onBrand
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/cec-logo.png",
    alt: ""
  }), /*#__PURE__*/React.createElement("span", {
    className: "brand-name"
  }, "Critical ", /*#__PURE__*/React.createElement("span", null, "Error"), /*#__PURE__*/React.createElement("br", null), "Computing")), /*#__PURE__*/React.createElement("div", {
    className: "nav-links"
  }, NAV_LINKS.map((l, i) => /*#__PURE__*/React.createElement("a", {
    key: l,
    className: i === 0 ? "on" : ""
  }, l))), /*#__PURE__*/React.createElement("div", {
    className: "nav-cta"
  }, /*#__PURE__*/React.createElement("button", {
    className: "nav-cart"
  }, "Cart ", cart > 0 && /*#__PURE__*/React.createElement("span", {
    className: "ct"
  }, cart)), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    onClick: onHuman
  }, "Talk to a human"))));
}

/* ---- Probe scripted chat ---- */
const BUDGET_MAP = {
  "≤ $1.5K": "probe",
  "$1.5–2.5K": "corvette",
  "$2.5–4.5K": "destroyer",
  "$4.5–7K": "battlecruiser",
  "$7K+": "battleship"
};
function ProbeChat({
  onHuman,
  onPick
}) {
  const [msgs, setMsgs] = useState([]);
  const [chips, setChips] = useState(null);
  const [typing, setTyping] = useState(false);
  const [input, setInput] = useState("");
  const bodyRef = useRef(null);
  const push = m => setMsgs(x => [...x, m]);
  const botSay = (nodes, nextChips, stamp) => {
    setChips(null);
    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      push({
        who: "bot",
        node: nodes,
        stamp
      });
      setChips(nextChips || null);
    }, 700);
  };
  useEffect(() => {
    const t = setTimeout(() => {
      push({
        who: "bot",
        node: /*#__PURE__*/React.createElement(React.Fragment, null, "Hey. I'm ", /*#__PURE__*/React.createElement("b", null, "Probe"), ". Smallest ship in the fleet, somehow running the front desk.")
      });
      setTimeout(() => {
        push({
          who: "bot",
          node: /*#__PURE__*/React.createElement(React.Fragment, null, "Do you already know what you're looking for, or want a little ", /*#__PURE__*/React.createElement(GlitchText, {
            alt: "hum\u2206n",
            every: 3000
          }, "guidance"), "?")
        });
        setChips("q1");
      }, 650);
    }, 500);
    return () => clearTimeout(t);
  }, []);
  useEffect(() => {
    if (bodyRef.current) bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
  }, [msgs, chips, typing]);
  const userSay = t => push({
    who: "user",
    node: t
  });
  const CHIPS = {
    q1: [{
      label: "I know what I want",
      go: () => {
        userSay("I know what I want");
        botSay(/*#__PURE__*/React.createElement(React.Fragment, null, "Respect. A self-directed buyer. Quick version: what's the mission?"), "use");
      }
    }, {
      label: "Guide me a little",
      go: () => {
        userSay("Guide me a little");
        botSay(/*#__PURE__*/React.createElement(React.Fragment, null, "That is literally my one job. What's the mission?"), "use");
      }
    }, {
      label: "Just browsing",
      go: () => {
        userSay("Just browsing");
        botSay(/*#__PURE__*/React.createElement(React.Fragment, null, "Browse away. I'll be here. Hovering. Literally. I don't have legs."), "q1");
      }
    }, {
      rep: true
    }],
    use: [{
      label: "Mostly gaming",
      go: () => {
        userSay("Mostly gaming");
        botSay(/*#__PURE__*/React.createElement(React.Fragment, null, "Excellent. What resolution are we feeding?"), "res");
      }
    }, {
      label: "Gaming + heavy work",
      go: () => {
        userSay("Gaming + heavy work");
        recommend("battlecruiser", "that double life");
      }
    }, {
      label: "A first or family PC",
      go: () => {
        userSay("A first or family PC");
        recommend("probe", "that job");
      }
    }, {
      label: "By budget",
      go: () => {
        userSay("By budget");
        botSay(/*#__PURE__*/React.createElement(React.Fragment, null, "Love a budget. It's a reference number, not a wall; they build around you. Where are we landing?"), "budget");
      }
    }, {
      rep: true
    }],
    res: [{
      label: "1080p",
      go: () => {
        userSay("1080p");
        recommend("fighter", "1080p");
      }
    }, {
      label: "1440p",
      go: () => {
        userSay("1440p");
        recommend("destroyer", "high-FPS 1440p");
      }
    }, {
      label: "4K",
      go: () => {
        userSay("4K");
        recommend("cruiser", "4K");
      }
    }, {
      label: "8K. The ceiling.",
      go: () => {
        userSay("8K. The ceiling.");
        recommend("battleship", "the ceiling");
      }
    }, {
      rep: true
    }],
    budget: Object.keys(BUDGET_MAP).map(b => ({
      label: b,
      go: () => {
        userSay(b);
        recommend(BUDGET_MAP[b], b);
      }
    })).concat([{
      rep: true
    }]),
    rec: [{
      label: "Add to cart",
      go: () => {
        userSay("Add to cart");
        botSay(/*#__PURE__*/React.createElement(React.Fragment, null, "In the cart. Checkout stays right here on the site. If anything snags, I summon a human immediately."), "post");
      }
    }, {
      label: "Can we tweak the spec?",
      go: () => {
        userSay("Can we tweak the spec?");
        botSay(/*#__PURE__*/React.createElement(React.Fragment, null, "Yeah, that's past my pay grade, and I'm not paid. Spec changes are human territory, and the humans here are ", /*#__PURE__*/React.createElement("i", null, "annoyingly"), " good. Let me grab one."), "friction");
      }
    }, {
      rep: true
    }],
    post: [{
      label: "Ask something else",
      go: () => {
        userSay("Ask something else");
        botSay(/*#__PURE__*/React.createElement(React.Fragment, null, "Shoot. Warranty, services, the fleet, my feelings. The box is yours."), "q1");
      }
    }, {
      rep: true
    }],
    friction: [{
      label: "Keep helping me shop",
      go: () => {
        userSay("Keep helping me shop");
        botSay(/*#__PURE__*/React.createElement(React.Fragment, null, "Happily, that's the part I'm good at. What's the mission?"), "use");
      }
    }, {
      rep: true
    }]
  };
  function recommend(id, budget) {
    const cls = window.KIT_FLEET.find(c => c.id === id);
    const stamp = "Oh! And they'll etch your own design into the glass side panel. Free. Your art, their lasers.";
    setChips(null);
    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      push({
        who: "bot",
        node: /*#__PURE__*/React.createElement(React.Fragment, null, "Here's your vessel. The ", /*#__PURE__*/React.createElement("b", null, cls.name), "-class fits ", budget, " beautifully \u2014 every CEC tower is tailored to its owner before it ships."),
        rec: cls,
        stamp
      });
      setChips("rec");
      onPick && onPick(cls);
    }, 850);
  }
  const chipList = chips ? CHIPS[chips] : null;
  const send = e => {
    e.preventDefault();
    const t = input.trim();
    if (!t) return;
    userSay(t);
    setInput("");
    botSay(/*#__PURE__*/React.createElement(React.Fragment, null, "Okay, honesty mode: I know six things and that wasn't one. This is exactly what a CEC engineer answers in thirty seconds. Shall I grab one?"), "friction");
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "chat-wrap"
  }, /*#__PURE__*/React.createElement("img", {
    className: "probe-ship",
    src: "../../assets/probe-ship.png",
    alt: "Probe"
  }), /*#__PURE__*/React.createElement("div", {
    className: "chat-shell"
  }, /*#__PURE__*/React.createElement("div", {
    className: "chat-bar"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "chat-name"
  }, "Probe ", /*#__PURE__*/React.createElement("span", null, "// front desk")), /*#__PURE__*/React.createElement("div", {
    className: "chat-role"
  }, /*#__PURE__*/React.createElement("span", {
    className: "dot"
  }), "Limited-knowledge unit \xB7 supervised by humans")), /*#__PURE__*/React.createElement("button", {
    className: "btn-rep",
    onClick: () => onHuman("Probe · Representative")
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 7,
      height: 7,
      borderRadius: "50%",
      background: "#fff"
    }
  }), "Representative")), /*#__PURE__*/React.createElement("div", {
    className: "chat-body",
    ref: bodyRef
  }, msgs.map((m, i) => /*#__PURE__*/React.createElement(ProbeBubble, {
    key: i,
    who: m.who,
    avatar: "../../assets/probe-ship.png",
    stamp: m.stamp
  }, m.node, m.rec && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 11,
      borderTop: "1px solid oklch(1 0 0 / .12)",
      paddingTop: 11,
      display: "flex",
      gap: 11,
      alignItems: "center"
    }
  }, m.rec.img && /*#__PURE__*/React.createElement("img", {
    src: m.rec.img,
    alt: "",
    style: {
      width: 64,
      height: 48,
      objectFit: "cover",
      borderRadius: 4
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 18,
      lineHeight: 1
    }
  }, m.rec.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      color: "var(--faint)",
      marginTop: 3
    }
  }, m.rec.price, " \xB7 reference build"))))), typing && /*#__PURE__*/React.createElement(ProbeBubble, {
    who: "bot",
    avatar: "../../assets/probe-ship.png"
  }, /*#__PURE__*/React.createElement("span", {
    className: "typing"
  }, /*#__PURE__*/React.createElement("i", null), /*#__PURE__*/React.createElement("i", null), /*#__PURE__*/React.createElement("i", null)))), chipList && !typing && /*#__PURE__*/React.createElement("div", {
    className: "chip-row"
  }, chipList.map((c, i) => c.rep ? /*#__PURE__*/React.createElement("button", {
    key: i,
    className: "chip-btn rep glow",
    onClick: () => onHuman("Probe chat · Talk to a human")
  }, "Talk to a human") : /*#__PURE__*/React.createElement("button", {
    key: i,
    className: "chip-btn",
    onClick: c.go
  }, c.label))), /*#__PURE__*/React.createElement("form", {
    className: "chat-foot",
    onSubmit: send
  }, /*#__PURE__*/React.createElement("input", {
    className: "chat-input",
    value: input,
    onChange: e => setInput(e.target.value),
    placeholder: "Ask about the site, or watch him cope"
  }), /*#__PURE__*/React.createElement("button", {
    className: "chat-send",
    type: "submit"
  }, "\u27A4"))));
}
function Hero({
  onHuman,
  onPick,
  onBrowse
}) {
  return /*#__PURE__*/React.createElement("header", {
    className: "hero",
    id: "top"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid-bg"
  }), /*#__PURE__*/React.createElement("div", {
    className: "glow",
    style: {
      width: 520,
      height: 420,
      left: "-8%",
      top: "-10%",
      background: "var(--violet)",
      opacity: 0.16
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "glow",
    style: {
      width: 420,
      height: 380,
      right: "-6%",
      bottom: "-20%",
      background: "var(--accent)",
      opacity: 0.1
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "wrap hero-grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
    rule: false
  }, "Custom gaming PCs \xB7 Humble, TX"), /*#__PURE__*/React.createElement("h1", {
    className: "display-xl"
  }, "PCs built the ", /*#__PURE__*/React.createElement(GlitchText, {
    className: "acc",
    alt: "right",
    accent: true,
    every: 4200
  }, "wrong"), " way.", /*#__PURE__*/React.createElement("br", null), "On purpose."), /*#__PURE__*/React.createElement("p", {
    className: "lede hero-sub"
  }, "The industry replaced its people with chatbots and configurators. We went the other direction: every CEC tower is tailored to its owner by a qualified engineer. A real one, with hands. Meet Probe, our chatbot. His job: prove you'd rather talk to a person."), /*#__PURE__*/React.createElement("div", {
    className: "hero-cta"
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: () => onHuman("Hero · Talk to a human now")
  }, "Talk to a human now"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    onClick: onBrowse
  }, "Browse the fleet")), /*#__PURE__*/React.createElement("div", {
    className: "hero-meta"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "v"
  }, "10", /*#__PURE__*/React.createElement("small", null, "-yr")), /*#__PURE__*/React.createElement("div", {
    className: "k"
  }, "Warranty")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "v"
  }, "\u221E"), /*#__PURE__*/React.createElement("div", {
    className: "k"
  }, "Lifetime support")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "v"
  }, "5.0", /*#__PURE__*/React.createElement("small", null, "\u2605")), /*#__PURE__*/React.createElement("div", {
    className: "k"
  }, "Google \xB7 Facebook")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "v"
  }, "100", /*#__PURE__*/React.createElement("small", null, "%")), /*#__PURE__*/React.createElement("div", {
    className: "k"
  }, "Tailored to you")))), /*#__PURE__*/React.createElement("div", {
    className: "hero-stage"
  }, /*#__PURE__*/React.createElement(ProbeChat, {
    onHuman: onHuman,
    onPick: onPick
  }))));
}
window.KitNav = Nav;
window.KitHero = Hero;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/storefront/sections-top.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Chip = __ds_scope.Chip;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.GlitchText = __ds_scope.GlitchText;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.ProbeBubble = __ds_scope.ProbeBubble;

__ds_ns.FleetCard = __ds_scope.FleetCard;

__ds_ns.SpecTable = __ds_scope.SpecTable;

__ds_ns.Field = __ds_scope.Field;

__ds_ns.SegControl = __ds_scope.SegControl;

__ds_ns.Card = __ds_scope.Card;

})();
