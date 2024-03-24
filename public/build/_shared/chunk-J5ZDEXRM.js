import {
  T,
  h,
  o
} from "/build/_shared/chunk-FNVTLCHO.js";
import {
  s2 as s
} from "/build/_shared/chunk-JKKPAHGM.js";
import {
  require_react
} from "/build/_shared/chunk-BOXFZXVX.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// node_modules/@headlessui/react/dist/hooks/use-disposables.js
var import_react = __toESM(require_react(), 1);
function p() {
  let [e] = (0, import_react.useState)(o);
  return (0, import_react.useEffect)(() => () => e.dispose(), [e]), e;
}

// node_modules/@headlessui/react/dist/hooks/use-outside-click.js
var import_react4 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/utils/platform.js
function t() {
  return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0;
}
function i() {
  return /Android/gi.test(window.navigator.userAgent);
}
function n() {
  return t() || i();
}

// node_modules/@headlessui/react/dist/hooks/use-document-event.js
var import_react2 = __toESM(require_react(), 1);
function d(e, r, n2) {
  let o3 = s(r);
  (0, import_react2.useEffect)(() => {
    function t2(u) {
      o3.current(u);
    }
    return document.addEventListener(e, t2, n2), () => document.removeEventListener(e, t2, n2);
  }, [e, n2]);
}

// node_modules/@headlessui/react/dist/hooks/use-window-event.js
var import_react3 = __toESM(require_react(), 1);
function s3(e, r, n2) {
  let o3 = s(r);
  (0, import_react3.useEffect)(() => {
    function t2(i2) {
      o3.current(i2);
    }
    return window.addEventListener(e, t2, n2), () => window.removeEventListener(e, t2, n2);
  }, [e, n2]);
}

// node_modules/@headlessui/react/dist/hooks/use-outside-click.js
function y(s4, m2, a = true) {
  let i2 = (0, import_react4.useRef)(false);
  (0, import_react4.useEffect)(() => {
    requestAnimationFrame(() => {
      i2.current = a;
    });
  }, [a]);
  function c(e, r) {
    if (!i2.current || e.defaultPrevented)
      return;
    let t2 = r(e);
    if (t2 === null || !t2.getRootNode().contains(t2) || !t2.isConnected)
      return;
    let E = function u(n2) {
      return typeof n2 == "function" ? u(n2()) : Array.isArray(n2) || n2 instanceof Set ? n2 : [n2];
    }(s4);
    for (let u of E) {
      if (u === null)
        continue;
      let n2 = u instanceof HTMLElement ? u : u.current;
      if (n2 != null && n2.contains(t2) || e.composed && e.composedPath().includes(n2))
        return;
    }
    return !h(t2, T.Loose) && t2.tabIndex !== -1 && e.preventDefault(), m2(e, t2);
  }
  let o3 = (0, import_react4.useRef)(null);
  d("pointerdown", (e) => {
    var r, t2;
    i2.current && (o3.current = ((t2 = (r = e.composedPath) == null ? void 0 : r.call(e)) == null ? void 0 : t2[0]) || e.target);
  }, true), d("mousedown", (e) => {
    var r, t2;
    i2.current && (o3.current = ((t2 = (r = e.composedPath) == null ? void 0 : r.call(e)) == null ? void 0 : t2[0]) || e.target);
  }, true), d("click", (e) => {
    n() || o3.current && (c(e, () => o3.current), o3.current = null);
  }, true), d("touchend", (e) => c(e, () => e.target instanceof HTMLElement ? e.target : null), true), s3("blur", (e) => c(e, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), true);
}

export {
  p,
  t,
  s3 as s,
  y
};
//# sourceMappingURL=/build/_shared/chunk-J5ZDEXRM.js.map
