import {
  require_react
} from "/build/_shared/chunk-BOXFZXVX.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js
var import_react = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/utils/env.js
var i = Object.defineProperty;
var d = (t9, e, n3) => e in t9 ? i(t9, e, { enumerable: true, configurable: true, writable: true, value: n3 }) : t9[e] = n3;
var r = (t9, e, n3) => (d(t9, typeof e != "symbol" ? e + "" : e, n3), n3);
var o = class {
  constructor() {
    r(this, "current", this.detect());
    r(this, "handoffState", "pending");
    r(this, "currentId", 0);
  }
  set(e) {
    this.current !== e && (this.handoffState = "pending", this.currentId = 0, this.current = e);
  }
  reset() {
    this.set(this.detect());
  }
  nextId() {
    return ++this.currentId;
  }
  get isServer() {
    return this.current === "server";
  }
  get isClient() {
    return this.current === "client";
  }
  detect() {
    return typeof window == "undefined" || typeof document == "undefined" ? "server" : "client";
  }
  handoff() {
    this.handoffState === "pending" && (this.handoffState = "complete");
  }
  get isHandoffComplete() {
    return this.handoffState === "complete";
  }
};
var s = new o();

// node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js
var l = (e, f5) => {
  s.isServer ? (0, import_react.useEffect)(e, f5) : (0, import_react.useLayoutEffect)(e, f5);
};

// node_modules/@headlessui/react/dist/hooks/use-latest-value.js
var import_react2 = __toESM(require_react(), 1);
function s2(e) {
  let r4 = (0, import_react2.useRef)(e);
  return l(() => {
    r4.current = e;
  }, [e]), r4;
}

// node_modules/@headlessui/react/dist/hooks/use-event.js
var import_react3 = __toESM(require_react(), 1);
var o2 = function(t9) {
  let e = s2(t9);
  return import_react3.default.useCallback((...r4) => e.current(...r4), [e]);
};

// node_modules/@headlessui/react/dist/utils/micro-task.js
function t3(e) {
  typeof queueMicrotask == "function" ? queueMicrotask(e) : Promise.resolve().then(e).catch((o8) => setTimeout(() => {
    throw o8;
  }));
}

// node_modules/@headlessui/react/dist/utils/disposables.js
function o3() {
  let n3 = [], r4 = { addEventListener(e, t9, s8, a2) {
    return e.addEventListener(t9, s8, a2), r4.add(() => e.removeEventListener(t9, s8, a2));
  }, requestAnimationFrame(...e) {
    let t9 = requestAnimationFrame(...e);
    return r4.add(() => cancelAnimationFrame(t9));
  }, nextFrame(...e) {
    return r4.requestAnimationFrame(() => r4.requestAnimationFrame(...e));
  }, setTimeout(...e) {
    let t9 = setTimeout(...e);
    return r4.add(() => clearTimeout(t9));
  }, microTask(...e) {
    let t9 = { current: true };
    return t3(() => {
      t9.current && e[0]();
    }), r4.add(() => {
      t9.current = false;
    });
  }, style(e, t9, s8) {
    let a2 = e.style.getPropertyValue(t9);
    return Object.assign(e.style, { [t9]: s8 }), this.add(() => {
      Object.assign(e.style, { [t9]: a2 });
    });
  }, group(e) {
    let t9 = o3();
    return e(t9), this.add(() => t9.dispose());
  }, add(e) {
    return n3.push(e), () => {
      let t9 = n3.indexOf(e);
      if (t9 >= 0)
        for (let s8 of n3.splice(t9, 1))
          s8();
    };
  }, dispose() {
    for (let e of n3.splice(0))
      e();
  } };
  return r4;
}

// node_modules/@headlessui/react/dist/hooks/use-disposables.js
var import_react4 = __toESM(require_react(), 1);
function p() {
  let [e] = (0, import_react4.useState)(o3);
  return (0, import_react4.useEffect)(() => () => e.dispose(), [e]), e;
}

// node_modules/@headlessui/react/dist/hooks/use-server-handoff-complete.js
var t4 = __toESM(require_react(), 1);
function s4() {
  let r4 = typeof document == "undefined";
  return "useSyncExternalStore" in t4 ? ((o8) => o8.useSyncExternalStore)(t4)(() => () => {
  }, () => false, () => !r4) : false;
}
function l2() {
  let r4 = s4(), [e, n3] = t4.useState(s.isHandoffComplete);
  return e && s.isHandoffComplete === false && n3(false), t4.useEffect(() => {
    e !== true && n3(true);
  }, [e]), t4.useEffect(() => s.handoff(), []), r4 ? false : e;
}

// node_modules/@headlessui/react/dist/hooks/use-id.js
var import_react5 = __toESM(require_react(), 1);
var o5;
var I = (o5 = import_react5.default.useId) != null ? o5 : function() {
  let n3 = l2(), [e, u4] = import_react5.default.useState(n3 ? () => s.nextId() : null);
  return l(() => {
    e === null && u4(s.nextId());
  }, [e]), e != null ? "" + e : void 0;
};

// node_modules/@headlessui/react/dist/utils/match.js
function u(r4, n3, ...a2) {
  if (r4 in n3) {
    let e = n3[r4];
    return typeof e == "function" ? e(...a2) : e;
  }
  let t9 = new Error(`Tried to handle "${r4}" but there is no handler defined. Only defined handlers are: ${Object.keys(n3).map((e) => `"${e}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(t9, u), t9;
}

// node_modules/@headlessui/react/dist/utils/owner.js
function o6(r4) {
  return s.isServer ? null : r4 instanceof Node ? r4.ownerDocument : r4 != null && r4.hasOwnProperty("current") && r4.current instanceof Node ? r4.current.ownerDocument : document;
}

// node_modules/@headlessui/react/dist/utils/focus-management.js
var c2 = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e) => `${e}:not([tabindex='-1'])`).join(",");
var M = ((n3) => (n3[n3.First = 1] = "First", n3[n3.Previous = 2] = "Previous", n3[n3.Next = 4] = "Next", n3[n3.Last = 8] = "Last", n3[n3.WrapAround = 16] = "WrapAround", n3[n3.NoScroll = 32] = "NoScroll", n3))(M || {});
var N = ((o8) => (o8[o8.Error = 0] = "Error", o8[o8.Overflow = 1] = "Overflow", o8[o8.Success = 2] = "Success", o8[o8.Underflow = 3] = "Underflow", o8))(N || {});
var F = ((t9) => (t9[t9.Previous = -1] = "Previous", t9[t9.Next = 1] = "Next", t9))(F || {});
function f(e = document.body) {
  return e == null ? [] : Array.from(e.querySelectorAll(c2)).sort((r4, t9) => Math.sign((r4.tabIndex || Number.MAX_SAFE_INTEGER) - (t9.tabIndex || Number.MAX_SAFE_INTEGER)));
}
var T = ((t9) => (t9[t9.Strict = 0] = "Strict", t9[t9.Loose = 1] = "Loose", t9))(T || {});
function h(e, r4 = 0) {
  var t9;
  return e === ((t9 = o6(e)) == null ? void 0 : t9.body) ? false : u(r4, { [0]() {
    return e.matches(c2);
  }, [1]() {
    let l6 = e;
    for (; l6 !== null; ) {
      if (l6.matches(c2))
        return true;
      l6 = l6.parentElement;
    }
    return false;
  } });
}
var w = ((t9) => (t9[t9.Keyboard = 0] = "Keyboard", t9[t9.Mouse = 1] = "Mouse", t9))(w || {});
typeof window != "undefined" && typeof document != "undefined" && (document.addEventListener("keydown", (e) => {
  e.metaKey || e.altKey || e.ctrlKey || (document.documentElement.dataset.headlessuiFocusVisible = "");
}, true), document.addEventListener("click", (e) => {
  e.detail === 1 ? delete document.documentElement.dataset.headlessuiFocusVisible : e.detail === 0 && (document.documentElement.dataset.headlessuiFocusVisible = "");
}, true));
function y(e) {
  e == null || e.focus({ preventScroll: true });
}
var S = ["textarea", "input"].join(",");
function H(e) {
  var r4, t9;
  return (t9 = (r4 = e == null ? void 0 : e.matches) == null ? void 0 : r4.call(e, S)) != null ? t9 : false;
}
function I2(e, r4 = (t9) => t9) {
  return e.slice().sort((t9, l6) => {
    let o8 = r4(t9), i5 = r4(l6);
    if (o8 === null || i5 === null)
      return 0;
    let n3 = o8.compareDocumentPosition(i5);
    return n3 & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : n3 & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function O(e, r4, { sorted: t9 = true, relativeTo: l6 = null, skipElements: o8 = [] } = {}) {
  let i5 = Array.isArray(e) ? e.length > 0 ? e[0].ownerDocument : document : e.ownerDocument, n3 = Array.isArray(e) ? t9 ? I2(e) : e : f(e);
  o8.length > 0 && n3.length > 1 && (n3 = n3.filter((s8) => !o8.includes(s8))), l6 = l6 != null ? l6 : i5.activeElement;
  let E2 = (() => {
    if (r4 & 5)
      return 1;
    if (r4 & 10)
      return -1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), x2 = (() => {
    if (r4 & 1)
      return 0;
    if (r4 & 2)
      return Math.max(0, n3.indexOf(l6)) - 1;
    if (r4 & 4)
      return Math.max(0, n3.indexOf(l6)) + 1;
    if (r4 & 8)
      return n3.length - 1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), p4 = r4 & 32 ? { preventScroll: true } : {}, d6 = 0, a2 = n3.length, u4;
  do {
    if (d6 >= a2 || d6 + a2 <= 0)
      return 0;
    let s8 = x2 + d6;
    if (r4 & 16)
      s8 = (s8 + a2) % a2;
    else {
      if (s8 < 0)
        return 3;
      if (s8 >= a2)
        return 1;
    }
    u4 = n3[s8], u4 == null || u4.focus(p4), d6 += E2;
  } while (u4 !== i5.activeElement);
  return r4 & 6 && H(u4) && u4.select(), 2;
}

// node_modules/@headlessui/react/dist/hooks/use-outside-click.js
var import_react8 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/utils/platform.js
function t6() {
  return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0;
}
function i2() {
  return /Android/gi.test(window.navigator.userAgent);
}
function n() {
  return t6() || i2();
}

// node_modules/@headlessui/react/dist/hooks/use-document-event.js
var import_react6 = __toESM(require_react(), 1);
function d2(e, r4, n3) {
  let o8 = s2(r4);
  (0, import_react6.useEffect)(() => {
    function t9(u4) {
      o8.current(u4);
    }
    return document.addEventListener(e, t9, n3), () => document.removeEventListener(e, t9, n3);
  }, [e, n3]);
}

// node_modules/@headlessui/react/dist/hooks/use-window-event.js
var import_react7 = __toESM(require_react(), 1);
function s5(e, r4, n3) {
  let o8 = s2(r4);
  (0, import_react7.useEffect)(() => {
    function t9(i5) {
      o8.current(i5);
    }
    return window.addEventListener(e, t9, n3), () => window.removeEventListener(e, t9, n3);
  }, [e, n3]);
}

// node_modules/@headlessui/react/dist/hooks/use-outside-click.js
function y2(s8, m3, a2 = true) {
  let i5 = (0, import_react8.useRef)(false);
  (0, import_react8.useEffect)(() => {
    requestAnimationFrame(() => {
      i5.current = a2;
    });
  }, [a2]);
  function c3(e, r4) {
    if (!i5.current || e.defaultPrevented)
      return;
    let t9 = r4(e);
    if (t9 === null || !t9.getRootNode().contains(t9) || !t9.isConnected)
      return;
    let E2 = function u4(n3) {
      return typeof n3 == "function" ? u4(n3()) : Array.isArray(n3) || n3 instanceof Set ? n3 : [n3];
    }(s8);
    for (let u4 of E2) {
      if (u4 === null)
        continue;
      let n3 = u4 instanceof HTMLElement ? u4 : u4.current;
      if (n3 != null && n3.contains(t9) || e.composed && e.composedPath().includes(n3))
        return;
    }
    return !h(t9, T.Loose) && t9.tabIndex !== -1 && e.preventDefault(), m3(e, t9);
  }
  let o8 = (0, import_react8.useRef)(null);
  d2("pointerdown", (e) => {
    var r4, t9;
    i5.current && (o8.current = ((t9 = (r4 = e.composedPath) == null ? void 0 : r4.call(e)) == null ? void 0 : t9[0]) || e.target);
  }, true), d2("mousedown", (e) => {
    var r4, t9;
    i5.current && (o8.current = ((t9 = (r4 = e.composedPath) == null ? void 0 : r4.call(e)) == null ? void 0 : t9[0]) || e.target);
  }, true), d2("click", (e) => {
    n() || o8.current && (c3(e, () => o8.current), o8.current = null);
  }, true), d2("touchend", (e) => c3(e, () => e.target instanceof HTMLElement ? e.target : null), true), s5("blur", (e) => c3(e, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), true);
}

// node_modules/@headlessui/react/dist/hooks/use-sync-refs.js
var import_react9 = __toESM(require_react(), 1);
var u2 = Symbol();
function T2(t9, n3 = true) {
  return Object.assign(t9, { [u2]: n3 });
}
function y3(...t9) {
  let n3 = (0, import_react9.useRef)(t9);
  (0, import_react9.useEffect)(() => {
    n3.current = t9;
  }, [t9]);
  let c3 = o2((e) => {
    for (let o8 of n3.current)
      o8 != null && (typeof o8 == "function" ? o8(e) : o8.current = e);
  });
  return t9.every((e) => e == null || (e == null ? void 0 : e[u2])) ? void 0 : c3;
}

// node_modules/@headlessui/react/dist/utils/class-names.js
function t7(...r4) {
  return Array.from(new Set(r4.flatMap((n3) => typeof n3 == "string" ? n3.split(" ") : []))).filter(Boolean).join(" ");
}

// node_modules/@headlessui/react/dist/utils/render.js
var import_react10 = __toESM(require_react(), 1);
var O2 = ((n3) => (n3[n3.None = 0] = "None", n3[n3.RenderStrategy = 1] = "RenderStrategy", n3[n3.Static = 2] = "Static", n3))(O2 || {});
var v = ((e) => (e[e.Unmount = 0] = "Unmount", e[e.Hidden = 1] = "Hidden", e))(v || {});
function C({ ourProps: r4, theirProps: t9, slot: e, defaultTag: n3, features: o8, visible: a2 = true, name: f5, mergeRefs: l6 }) {
  l6 = l6 != null ? l6 : k;
  let s8 = R(t9, r4);
  if (a2)
    return m2(s8, e, n3, f5, l6);
  let y4 = o8 != null ? o8 : 0;
  if (y4 & 2) {
    let { static: u4 = false, ...d6 } = s8;
    if (u4)
      return m2(d6, e, n3, f5, l6);
  }
  if (y4 & 1) {
    let { unmount: u4 = true, ...d6 } = s8;
    return u(u4 ? 0 : 1, { [0]() {
      return null;
    }, [1]() {
      return m2({ ...d6, hidden: true, style: { display: "none" } }, e, n3, f5, l6);
    } });
  }
  return m2(s8, e, n3, f5, l6);
}
function m2(r4, t9 = {}, e, n3, o8) {
  let { as: a2 = e, children: f5, refName: l6 = "ref", ...s8 } = F2(r4, ["unmount", "static"]), y4 = r4.ref !== void 0 ? { [l6]: r4.ref } : {}, u4 = typeof f5 == "function" ? f5(t9) : f5;
  "className" in s8 && s8.className && typeof s8.className == "function" && (s8.className = s8.className(t9));
  let d6 = {};
  if (t9) {
    let i5 = false, c3 = [];
    for (let [T3, p4] of Object.entries(t9))
      typeof p4 == "boolean" && (i5 = true), p4 === true && c3.push(T3);
    i5 && (d6["data-headlessui-state"] = c3.join(" "));
  }
  if (a2 === import_react10.Fragment && Object.keys(x(s8)).length > 0) {
    if (!(0, import_react10.isValidElement)(u4) || Array.isArray(u4) && u4.length > 1)
      throw new Error(['Passing props on "Fragment"!', "", `The current component <${n3} /> is rendering a "Fragment".`, "However we need to passthrough the following props:", Object.keys(s8).map((p4) => `  - ${p4}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".', "Render a single element as the child so that we can forward the props onto that element."].map((p4) => `  - ${p4}`).join(`
`)].join(`
`));
    let i5 = u4.props, c3 = typeof (i5 == null ? void 0 : i5.className) == "function" ? (...p4) => t7(i5 == null ? void 0 : i5.className(...p4), s8.className) : t7(i5 == null ? void 0 : i5.className, s8.className), T3 = c3 ? { className: c3 } : {};
    return (0, import_react10.cloneElement)(u4, Object.assign({}, R(u4.props, x(F2(s8, ["ref"]))), d6, y4, { ref: o8(u4.ref, y4.ref) }, T3));
  }
  return (0, import_react10.createElement)(a2, Object.assign({}, F2(s8, ["ref"]), a2 !== import_react10.Fragment && y4, a2 !== import_react10.Fragment && d6), u4);
}
function I3() {
  let r4 = (0, import_react10.useRef)([]), t9 = (0, import_react10.useCallback)((e) => {
    for (let n3 of r4.current)
      n3 != null && (typeof n3 == "function" ? n3(e) : n3.current = e);
  }, []);
  return (...e) => {
    if (!e.every((n3) => n3 == null))
      return r4.current = e, t9;
  };
}
function k(...r4) {
  return r4.every((t9) => t9 == null) ? void 0 : (t9) => {
    for (let e of r4)
      e != null && (typeof e == "function" ? e(t9) : e.current = t9);
  };
}
function R(...r4) {
  var n3;
  if (r4.length === 0)
    return {};
  if (r4.length === 1)
    return r4[0];
  let t9 = {}, e = {};
  for (let o8 of r4)
    for (let a2 in o8)
      a2.startsWith("on") && typeof o8[a2] == "function" ? ((n3 = e[a2]) != null || (e[a2] = []), e[a2].push(o8[a2])) : t9[a2] = o8[a2];
  if (t9.disabled || t9["aria-disabled"])
    return Object.assign(t9, Object.fromEntries(Object.keys(e).map((o8) => [o8, void 0])));
  for (let o8 in e)
    Object.assign(t9, { [o8](a2, ...f5) {
      let l6 = e[o8];
      for (let s8 of l6) {
        if ((a2 instanceof Event || (a2 == null ? void 0 : a2.nativeEvent) instanceof Event) && a2.defaultPrevented)
          return;
        s8(a2, ...f5);
      }
    } });
  return t9;
}
function U(r4) {
  var t9;
  return Object.assign((0, import_react10.forwardRef)(r4), { displayName: (t9 = r4.displayName) != null ? t9 : r4.name });
}
function x(r4) {
  let t9 = Object.assign({}, r4);
  for (let e in t9)
    t9[e] === void 0 && delete t9[e];
  return t9;
}
function F2(r4, t9 = []) {
  let e = Object.assign({}, r4);
  for (let n3 of t9)
    n3 in e && delete e[n3];
  return e;
}

// node_modules/@headlessui/react/dist/internal/hidden.js
var p2 = "div";
var s6 = ((e) => (e[e.None = 1] = "None", e[e.Focusable = 2] = "Focusable", e[e.Hidden = 4] = "Hidden", e))(s6 || {});
function l4(d6, o8) {
  var n3;
  let { features: t9 = 1, ...e } = d6, r4 = { ref: o8, "aria-hidden": (t9 & 2) === 2 ? true : (n3 = e["aria-hidden"]) != null ? n3 : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(t9 & 4) === 4 && (t9 & 2) !== 2 && { display: "none" } } };
  return C({ ourProps: r4, theirProps: e, slot: {}, defaultTag: p2, name: "Hidden" });
}
var f3 = U(l4);

// node_modules/@headlessui/react/dist/internal/open-closed.js
var import_react11 = __toESM(require_react(), 1);
var n2 = (0, import_react11.createContext)(null);
n2.displayName = "OpenClosedContext";
var d5 = ((e) => (e[e.Open = 1] = "Open", e[e.Closed = 2] = "Closed", e[e.Closing = 4] = "Closing", e[e.Opening = 8] = "Opening", e))(d5 || {});
function u3() {
  return (0, import_react11.useContext)(n2);
}
function s7({ value: o8, children: r4 }) {
  return import_react11.default.createElement(n2.Provider, { value: o8 }, r4);
}

// node_modules/@headlessui/react/dist/utils/bugs.js
function r2(n3) {
  let e = n3.parentElement, l6 = null;
  for (; e && !(e instanceof HTMLFieldSetElement); )
    e instanceof HTMLLegendElement && (l6 = e), e = e.parentElement;
  let t9 = (e == null ? void 0 : e.getAttribute("disabled")) === "";
  return t9 && i4(l6) ? false : t9;
}
function i4(n3) {
  if (!n3)
    return false;
  let e = n3.previousElementSibling;
  for (; e !== null; ) {
    if (e instanceof HTMLLegendElement)
      return false;
    e = e.previousElementSibling;
  }
  return true;
}

// node_modules/@headlessui/react/dist/components/keyboard.js
var o7 = ((r4) => (r4.Space = " ", r4.Enter = "Enter", r4.Escape = "Escape", r4.Backspace = "Backspace", r4.Delete = "Delete", r4.ArrowLeft = "ArrowLeft", r4.ArrowUp = "ArrowUp", r4.ArrowRight = "ArrowRight", r4.ArrowDown = "ArrowDown", r4.Home = "Home", r4.End = "End", r4.PageUp = "PageUp", r4.PageDown = "PageDown", r4.Tab = "Tab", r4))(o7 || {});

// node_modules/@headlessui/react/dist/hooks/use-is-mounted.js
var import_react12 = __toESM(require_react(), 1);
function f4() {
  let e = (0, import_react12.useRef)(false);
  return l(() => (e.current = true, () => {
    e.current = false;
  }), []), e;
}

export {
  s,
  l,
  s2,
  o2 as o,
  t3 as t,
  o3 as o2,
  p,
  l2,
  I,
  u,
  o6 as o3,
  M,
  N,
  f,
  T,
  h,
  y,
  I2,
  O,
  t6 as t2,
  s5 as s3,
  y2,
  T2,
  y3,
  t7 as t3,
  O2,
  v,
  C,
  I3,
  U,
  x,
  s6 as s4,
  f3 as f2,
  d5 as d,
  u3 as u2,
  s7 as s5,
  r2 as r,
  o7 as o4,
  f4 as f3
};
//# sourceMappingURL=/build/_shared/chunk-CWIOTFXK.js.map
