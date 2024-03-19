import {
  C,
  U,
  l,
  o2 as o,
  u
} from "/build/_shared/chunk-JKKPAHGM.js";
import {
  require_react
} from "/build/_shared/chunk-BOXFZXVX.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// node_modules/@headlessui/react/dist/utils/micro-task.js
function t(e) {
  typeof queueMicrotask == "function" ? queueMicrotask(e) : Promise.resolve().then(e).catch((o3) => setTimeout(() => {
    throw o3;
  }));
}

// node_modules/@headlessui/react/dist/utils/disposables.js
function o2() {
  let n = [], r2 = { addEventListener(e, t2, s2, a) {
    return e.addEventListener(t2, s2, a), r2.add(() => e.removeEventListener(t2, s2, a));
  }, requestAnimationFrame(...e) {
    let t2 = requestAnimationFrame(...e);
    return r2.add(() => cancelAnimationFrame(t2));
  }, nextFrame(...e) {
    return r2.requestAnimationFrame(() => r2.requestAnimationFrame(...e));
  }, setTimeout(...e) {
    let t2 = setTimeout(...e);
    return r2.add(() => clearTimeout(t2));
  }, microTask(...e) {
    let t2 = { current: true };
    return t(() => {
      t2.current && e[0]();
    }), r2.add(() => {
      t2.current = false;
    });
  }, style(e, t2, s2) {
    let a = e.style.getPropertyValue(t2);
    return Object.assign(e.style, { [t2]: s2 }), this.add(() => {
      Object.assign(e.style, { [t2]: a });
    });
  }, group(e) {
    let t2 = o2();
    return e(t2), this.add(() => t2.dispose());
  }, add(e) {
    return n.push(e), () => {
      let t2 = n.indexOf(e);
      if (t2 >= 0)
        for (let s2 of n.splice(t2, 1))
          s2();
    };
  }, dispose() {
    for (let e of n.splice(0))
      e();
  } };
  return r2;
}

// node_modules/@headlessui/react/dist/utils/focus-management.js
var c = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e) => `${e}:not([tabindex='-1'])`).join(",");
var M = ((n) => (n[n.First = 1] = "First", n[n.Previous = 2] = "Previous", n[n.Next = 4] = "Next", n[n.Last = 8] = "Last", n[n.WrapAround = 16] = "WrapAround", n[n.NoScroll = 32] = "NoScroll", n))(M || {});
var N = ((o3) => (o3[o3.Error = 0] = "Error", o3[o3.Overflow = 1] = "Overflow", o3[o3.Success = 2] = "Success", o3[o3.Underflow = 3] = "Underflow", o3))(N || {});
var F = ((t2) => (t2[t2.Previous = -1] = "Previous", t2[t2.Next = 1] = "Next", t2))(F || {});
function f(e = document.body) {
  return e == null ? [] : Array.from(e.querySelectorAll(c)).sort((r2, t2) => Math.sign((r2.tabIndex || Number.MAX_SAFE_INTEGER) - (t2.tabIndex || Number.MAX_SAFE_INTEGER)));
}
var T = ((t2) => (t2[t2.Strict = 0] = "Strict", t2[t2.Loose = 1] = "Loose", t2))(T || {});
function h(e, r2 = 0) {
  var t2;
  return e === ((t2 = o(e)) == null ? void 0 : t2.body) ? false : u(r2, { [0]() {
    return e.matches(c);
  }, [1]() {
    let l3 = e;
    for (; l3 !== null; ) {
      if (l3.matches(c))
        return true;
      l3 = l3.parentElement;
    }
    return false;
  } });
}
var w = ((t2) => (t2[t2.Keyboard = 0] = "Keyboard", t2[t2.Mouse = 1] = "Mouse", t2))(w || {});
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
  var r2, t2;
  return (t2 = (r2 = e == null ? void 0 : e.matches) == null ? void 0 : r2.call(e, S)) != null ? t2 : false;
}
function I(e, r2 = (t2) => t2) {
  return e.slice().sort((t2, l3) => {
    let o3 = r2(t2), i = r2(l3);
    if (o3 === null || i === null)
      return 0;
    let n = o3.compareDocumentPosition(i);
    return n & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : n & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function O(e, r2, { sorted: t2 = true, relativeTo: l3 = null, skipElements: o3 = [] } = {}) {
  let i = Array.isArray(e) ? e.length > 0 ? e[0].ownerDocument : document : e.ownerDocument, n = Array.isArray(e) ? t2 ? I(e) : e : f(e);
  o3.length > 0 && n.length > 1 && (n = n.filter((s2) => !o3.includes(s2))), l3 = l3 != null ? l3 : i.activeElement;
  let E = (() => {
    if (r2 & 5)
      return 1;
    if (r2 & 10)
      return -1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), x = (() => {
    if (r2 & 1)
      return 0;
    if (r2 & 2)
      return Math.max(0, n.indexOf(l3)) - 1;
    if (r2 & 4)
      return Math.max(0, n.indexOf(l3)) + 1;
    if (r2 & 8)
      return n.length - 1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), p2 = r2 & 32 ? { preventScroll: true } : {}, d = 0, a = n.length, u2;
  do {
    if (d >= a || d + a <= 0)
      return 0;
    let s2 = x + d;
    if (r2 & 16)
      s2 = (s2 + a) % a;
    else {
      if (s2 < 0)
        return 3;
      if (s2 >= a)
        return 1;
    }
    u2 = n[s2], u2 == null || u2.focus(p2), d += E;
  } while (u2 !== i.activeElement);
  return r2 & 6 && H(u2) && u2.select(), 2;
}

// node_modules/@headlessui/react/dist/internal/hidden.js
var p = "div";
var s = ((e) => (e[e.None = 1] = "None", e[e.Focusable = 2] = "Focusable", e[e.Hidden = 4] = "Hidden", e))(s || {});
function l2(d, o3) {
  var n;
  let { features: t2 = 1, ...e } = d, r2 = { ref: o3, "aria-hidden": (t2 & 2) === 2 ? true : (n = e["aria-hidden"]) != null ? n : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(t2 & 4) === 4 && (t2 & 2) !== 2 && { display: "none" } } };
  return C({ ourProps: r2, theirProps: e, slot: {}, defaultTag: p, name: "Hidden" });
}
var f2 = U(l2);

// node_modules/@headlessui/react/dist/hooks/use-is-mounted.js
var import_react = __toESM(require_react(), 1);
function f3() {
  let e = (0, import_react.useRef)(false);
  return l(() => (e.current = true, () => {
    e.current = false;
  }), []), e;
}

export {
  t,
  o2 as o,
  M,
  N,
  f,
  T,
  h,
  y,
  I,
  O,
  s,
  f2,
  f3
};
//# sourceMappingURL=/build/_shared/chunk-ZHRRJYGJ.js.map
