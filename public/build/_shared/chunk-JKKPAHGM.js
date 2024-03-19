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
var d = (t6, e, n) => e in t6 ? i(t6, e, { enumerable: true, configurable: true, writable: true, value: n }) : t6[e] = n;
var r = (t6, e, n) => (d(t6, typeof e != "symbol" ? e + "" : e, n), n);
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
var l = (e, f) => {
  s.isServer ? (0, import_react.useEffect)(e, f) : (0, import_react.useLayoutEffect)(e, f);
};

// node_modules/@headlessui/react/dist/hooks/use-latest-value.js
var import_react2 = __toESM(require_react(), 1);
function s2(e) {
  let r2 = (0, import_react2.useRef)(e);
  return l(() => {
    r2.current = e;
  }, [e]), r2;
}

// node_modules/@headlessui/react/dist/hooks/use-event.js
var import_react3 = __toESM(require_react(), 1);
var o2 = function(t6) {
  let e = s2(t6);
  return import_react3.default.useCallback((...r2) => e.current(...r2), [e]);
};

// node_modules/@headlessui/react/dist/hooks/use-server-handoff-complete.js
var t3 = __toESM(require_react(), 1);
function s3() {
  let r2 = typeof document == "undefined";
  return "useSyncExternalStore" in t3 ? ((o6) => o6.useSyncExternalStore)(t3)(() => () => {
  }, () => false, () => !r2) : false;
}
function l2() {
  let r2 = s3(), [e, n] = t3.useState(s.isHandoffComplete);
  return e && s.isHandoffComplete === false && n(false), t3.useEffect(() => {
    e !== true && n(true);
  }, [e]), t3.useEffect(() => s.handoff(), []), r2 ? false : e;
}

// node_modules/@headlessui/react/dist/hooks/use-id.js
var import_react4 = __toESM(require_react(), 1);
var o3;
var I = (o3 = import_react4.default.useId) != null ? o3 : function() {
  let n = l2(), [e, u3] = import_react4.default.useState(n ? () => s.nextId() : null);
  return l(() => {
    e === null && u3(s.nextId());
  }, [e]), e != null ? "" + e : void 0;
};

// node_modules/@headlessui/react/dist/utils/match.js
function u(r2, n, ...a2) {
  if (r2 in n) {
    let e = n[r2];
    return typeof e == "function" ? e(...a2) : e;
  }
  let t6 = new Error(`Tried to handle "${r2}" but there is no handler defined. Only defined handlers are: ${Object.keys(n).map((e) => `"${e}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(t6, u), t6;
}

// node_modules/@headlessui/react/dist/utils/owner.js
function o4(r2) {
  return s.isServer ? null : r2 instanceof Node ? r2.ownerDocument : r2 != null && r2.hasOwnProperty("current") && r2.current instanceof Node ? r2.current.ownerDocument : document;
}

// node_modules/@headlessui/react/dist/hooks/use-sync-refs.js
var import_react5 = __toESM(require_react(), 1);
var u2 = Symbol();
function T(t6, n = true) {
  return Object.assign(t6, { [u2]: n });
}
function y(...t6) {
  let n = (0, import_react5.useRef)(t6);
  (0, import_react5.useEffect)(() => {
    n.current = t6;
  }, [t6]);
  let c2 = o2((e) => {
    for (let o6 of n.current)
      o6 != null && (typeof o6 == "function" ? o6(e) : o6.current = e);
  });
  return t6.every((e) => e == null || (e == null ? void 0 : e[u2])) ? void 0 : c2;
}

// node_modules/@headlessui/react/dist/utils/class-names.js
function t5(...r2) {
  return Array.from(new Set(r2.flatMap((n) => typeof n == "string" ? n.split(" ") : []))).filter(Boolean).join(" ");
}

// node_modules/@headlessui/react/dist/utils/render.js
var import_react6 = __toESM(require_react(), 1);
var O = ((n) => (n[n.None = 0] = "None", n[n.RenderStrategy = 1] = "RenderStrategy", n[n.Static = 2] = "Static", n))(O || {});
var v = ((e) => (e[e.Unmount = 0] = "Unmount", e[e.Hidden = 1] = "Hidden", e))(v || {});
function C({ ourProps: r2, theirProps: t6, slot: e, defaultTag: n, features: o6, visible: a2 = true, name: f, mergeRefs: l4 }) {
  l4 = l4 != null ? l4 : k;
  let s4 = R(t6, r2);
  if (a2)
    return m(s4, e, n, f, l4);
  let y2 = o6 != null ? o6 : 0;
  if (y2 & 2) {
    let { static: u3 = false, ...d2 } = s4;
    if (u3)
      return m(d2, e, n, f, l4);
  }
  if (y2 & 1) {
    let { unmount: u3 = true, ...d2 } = s4;
    return u(u3 ? 0 : 1, { [0]() {
      return null;
    }, [1]() {
      return m({ ...d2, hidden: true, style: { display: "none" } }, e, n, f, l4);
    } });
  }
  return m(s4, e, n, f, l4);
}
function m(r2, t6 = {}, e, n, o6) {
  let { as: a2 = e, children: f, refName: l4 = "ref", ...s4 } = F(r2, ["unmount", "static"]), y2 = r2.ref !== void 0 ? { [l4]: r2.ref } : {}, u3 = typeof f == "function" ? f(t6) : f;
  "className" in s4 && s4.className && typeof s4.className == "function" && (s4.className = s4.className(t6));
  let d2 = {};
  if (t6) {
    let i3 = false, c2 = [];
    for (let [T2, p] of Object.entries(t6))
      typeof p == "boolean" && (i3 = true), p === true && c2.push(T2);
    i3 && (d2["data-headlessui-state"] = c2.join(" "));
  }
  if (a2 === import_react6.Fragment && Object.keys(x(s4)).length > 0) {
    if (!(0, import_react6.isValidElement)(u3) || Array.isArray(u3) && u3.length > 1)
      throw new Error(['Passing props on "Fragment"!', "", `The current component <${n} /> is rendering a "Fragment".`, "However we need to passthrough the following props:", Object.keys(s4).map((p) => `  - ${p}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".', "Render a single element as the child so that we can forward the props onto that element."].map((p) => `  - ${p}`).join(`
`)].join(`
`));
    let i3 = u3.props, c2 = typeof (i3 == null ? void 0 : i3.className) == "function" ? (...p) => t5(i3 == null ? void 0 : i3.className(...p), s4.className) : t5(i3 == null ? void 0 : i3.className, s4.className), T2 = c2 ? { className: c2 } : {};
    return (0, import_react6.cloneElement)(u3, Object.assign({}, R(u3.props, x(F(s4, ["ref"]))), d2, y2, { ref: o6(u3.ref, y2.ref) }, T2));
  }
  return (0, import_react6.createElement)(a2, Object.assign({}, F(s4, ["ref"]), a2 !== import_react6.Fragment && y2, a2 !== import_react6.Fragment && d2), u3);
}
function I2() {
  let r2 = (0, import_react6.useRef)([]), t6 = (0, import_react6.useCallback)((e) => {
    for (let n of r2.current)
      n != null && (typeof n == "function" ? n(e) : n.current = e);
  }, []);
  return (...e) => {
    if (!e.every((n) => n == null))
      return r2.current = e, t6;
  };
}
function k(...r2) {
  return r2.every((t6) => t6 == null) ? void 0 : (t6) => {
    for (let e of r2)
      e != null && (typeof e == "function" ? e(t6) : e.current = t6);
  };
}
function R(...r2) {
  var n;
  if (r2.length === 0)
    return {};
  if (r2.length === 1)
    return r2[0];
  let t6 = {}, e = {};
  for (let o6 of r2)
    for (let a2 in o6)
      a2.startsWith("on") && typeof o6[a2] == "function" ? ((n = e[a2]) != null || (e[a2] = []), e[a2].push(o6[a2])) : t6[a2] = o6[a2];
  if (t6.disabled || t6["aria-disabled"])
    return Object.assign(t6, Object.fromEntries(Object.keys(e).map((o6) => [o6, void 0])));
  for (let o6 in e)
    Object.assign(t6, { [o6](a2, ...f) {
      let l4 = e[o6];
      for (let s4 of l4) {
        if ((a2 instanceof Event || (a2 == null ? void 0 : a2.nativeEvent) instanceof Event) && a2.defaultPrevented)
          return;
        s4(a2, ...f);
      }
    } });
  return t6;
}
function U(r2) {
  var t6;
  return Object.assign((0, import_react6.forwardRef)(r2), { displayName: (t6 = r2.displayName) != null ? t6 : r2.name });
}
function x(r2) {
  let t6 = Object.assign({}, r2);
  for (let e in t6)
    t6[e] === void 0 && delete t6[e];
  return t6;
}
function F(r2, t6 = []) {
  let e = Object.assign({}, r2);
  for (let n of t6)
    n in e && delete e[n];
  return e;
}

// node_modules/@headlessui/react/dist/components/keyboard.js
var o5 = ((r2) => (r2.Space = " ", r2.Enter = "Enter", r2.Escape = "Escape", r2.Backspace = "Backspace", r2.Delete = "Delete", r2.ArrowLeft = "ArrowLeft", r2.ArrowUp = "ArrowUp", r2.ArrowRight = "ArrowRight", r2.ArrowDown = "ArrowDown", r2.Home = "Home", r2.End = "End", r2.PageUp = "PageUp", r2.PageDown = "PageDown", r2.Tab = "Tab", r2))(o5 || {});

export {
  s,
  l,
  s2,
  o2 as o,
  l2,
  I,
  u,
  o4 as o2,
  T,
  y,
  t5 as t,
  O,
  v,
  C,
  I2,
  U,
  x,
  o5 as o3
};
//# sourceMappingURL=/build/_shared/chunk-JKKPAHGM.js.map
