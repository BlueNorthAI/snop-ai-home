import {
  C,
  T2 as T,
  U,
  f2 as f,
  l,
  l2,
  o,
  o3 as o2,
  s,
  s2,
  s3,
  s4,
  t,
  y3 as y
} from "/build/_shared/chunk-CWIOTFXK.js";
import {
  require_react_dom
} from "/build/_shared/chunk-GIAAE3CH.js";
import {
  require_react
} from "/build/_shared/chunk-BOXFZXVX.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// node_modules/@headlessui/react/dist/hooks/use-owner.js
var import_react = __toESM(require_react(), 1);
function n(...e2) {
  return (0, import_react.useMemo)(() => o2(...e2), [...e2]);
}

// node_modules/@headlessui/react/dist/hooks/use-event-listener.js
var import_react2 = __toESM(require_react(), 1);
function E(n4, e2, a2, t5) {
  let i = s2(a2);
  (0, import_react2.useEffect)(() => {
    n4 = n4 != null ? n4 : window;
    function r2(o3) {
      i.current(o3);
    }
    return n4.addEventListener(e2, r2, t5), () => n4.removeEventListener(e2, r2, t5);
  }, [n4, e2, t5]);
}

// node_modules/@headlessui/react/dist/hooks/use-tab-direction.js
var import_react3 = __toESM(require_react(), 1);
var s5 = ((r2) => (r2[r2.Forwards = 0] = "Forwards", r2[r2.Backwards = 1] = "Backwards", r2))(s5 || {});
function n2() {
  let e2 = (0, import_react3.useRef)(0);
  return s3("keydown", (o3) => {
    o3.key === "Tab" && (e2.current = o3.shiftKey ? 1 : 0);
  }, true), e2;
}

// node_modules/@headlessui/react/dist/internal/portal-force-root.js
var import_react4 = __toESM(require_react(), 1);
var e = (0, import_react4.createContext)(false);
function a() {
  return (0, import_react4.useContext)(e);
}
function l3(o3) {
  return import_react4.default.createElement(e.Provider, { value: o3.force }, o3.children);
}

// node_modules/@headlessui/react/dist/components/portal/portal.js
var import_react6 = __toESM(require_react(), 1);
var import_react_dom = __toESM(require_react_dom(), 1);

// node_modules/@headlessui/react/dist/hooks/use-on-unmount.js
var import_react5 = __toESM(require_react(), 1);
function c2(t5) {
  let r2 = o(t5), e2 = (0, import_react5.useRef)(false);
  (0, import_react5.useEffect)(() => (e2.current = false, () => {
    e2.current = true, t(() => {
      e2.current && r2();
    });
  }), [r2]);
}

// node_modules/@headlessui/react/dist/components/portal/portal.js
function F(p) {
  let n4 = a(), l4 = (0, import_react6.useContext)(_), e2 = n(p), [a2, o3] = (0, import_react6.useState)(() => {
    if (!n4 && l4 !== null || s.isServer)
      return null;
    let t5 = e2 == null ? void 0 : e2.getElementById("headlessui-portal-root");
    if (t5)
      return t5;
    if (e2 === null)
      return null;
    let r2 = e2.createElement("div");
    return r2.setAttribute("id", "headlessui-portal-root"), e2.body.appendChild(r2);
  });
  return (0, import_react6.useEffect)(() => {
    a2 !== null && (e2 != null && e2.body.contains(a2) || e2 == null || e2.body.appendChild(a2));
  }, [a2, e2]), (0, import_react6.useEffect)(() => {
    n4 || l4 !== null && o3(l4.current);
  }, [l4, o3, n4]), a2;
}
var U2 = import_react6.Fragment;
function N(p, n4) {
  let l4 = p, e2 = (0, import_react6.useRef)(null), a2 = y(T((u2) => {
    e2.current = u2;
  }), n4), o3 = n(e2), t5 = F(e2), [r2] = (0, import_react6.useState)(() => {
    var u2;
    return s.isServer ? null : (u2 = o3 == null ? void 0 : o3.createElement("div")) != null ? u2 : null;
  }), i = (0, import_react6.useContext)(f2), v = l2();
  return l(() => {
    !t5 || !r2 || t5.contains(r2) || (r2.setAttribute("data-headlessui-portal", ""), t5.appendChild(r2));
  }, [t5, r2]), l(() => {
    if (r2 && i)
      return i.register(r2);
  }, [i, r2]), c2(() => {
    var u2;
    !t5 || !r2 || (r2 instanceof Node && t5.contains(r2) && t5.removeChild(r2), t5.childNodes.length <= 0 && ((u2 = t5.parentElement) == null || u2.removeChild(t5)));
  }), v ? !t5 || !r2 ? null : (0, import_react_dom.createPortal)(C({ ourProps: { ref: a2 }, theirProps: l4, defaultTag: U2, name: "Portal" }), r2) : null;
}
var S = import_react6.Fragment;
var _ = (0, import_react6.createContext)(null);
function j(p, n4) {
  let { target: l4, ...e2 } = p, o3 = { ref: y(n4) };
  return import_react6.default.createElement(_.Provider, { value: l4 }, C({ ourProps: o3, theirProps: e2, defaultTag: S, name: "Popover.Group" }));
}
var f2 = (0, import_react6.createContext)(null);
function ee() {
  let p = (0, import_react6.useContext)(f2), n4 = (0, import_react6.useRef)([]), l4 = o((o3) => (n4.current.push(o3), p && p.register(o3), () => e2(o3))), e2 = o((o3) => {
    let t5 = n4.current.indexOf(o3);
    t5 !== -1 && n4.current.splice(t5, 1), p && p.unregister(o3);
  }), a2 = (0, import_react6.useMemo)(() => ({ register: l4, unregister: e2, portals: n4 }), [l4, e2, n4]);
  return [n4, (0, import_react6.useMemo)(() => function({ children: t5 }) {
    return import_react6.default.createElement(f2.Provider, { value: a2 }, t5);
  }, [a2])];
}
var D = U(N);
var I = U(j);
var te = Object.assign(D, { Group: I });

// node_modules/@headlessui/react/dist/hooks/use-root-containers.js
var import_react7 = __toESM(require_react(), 1);
function N2({ defaultContainers: o3 = [], portals: r2, mainTreeNodeRef: u2 } = {}) {
  var f3;
  let t5 = (0, import_react7.useRef)((f3 = u2 == null ? void 0 : u2.current) != null ? f3 : null), l4 = n(t5), c3 = o(() => {
    var i, s7, a2;
    let n4 = [];
    for (let e2 of o3)
      e2 !== null && (e2 instanceof HTMLElement ? n4.push(e2) : "current" in e2 && e2.current instanceof HTMLElement && n4.push(e2.current));
    if (r2 != null && r2.current)
      for (let e2 of r2.current)
        n4.push(e2);
    for (let e2 of (i = l4 == null ? void 0 : l4.querySelectorAll("html > *, body > *")) != null ? i : [])
      e2 !== document.body && e2 !== document.head && e2 instanceof HTMLElement && e2.id !== "headlessui-portal-root" && (e2.contains(t5.current) || e2.contains((a2 = (s7 = t5.current) == null ? void 0 : s7.getRootNode()) == null ? void 0 : a2.host) || n4.some((L) => e2.contains(L)) || n4.push(e2));
    return n4;
  });
  return { resolveContainers: c3, contains: o((n4) => c3().some((i) => i.contains(n4))), mainTreeNodeRef: t5, MainTreeNode: (0, import_react7.useMemo)(() => function() {
    return u2 != null ? null : import_react7.default.createElement(f, { features: s4.Hidden, ref: t5 });
  }, [t5, u2]) };
}
function y2() {
  let o3 = (0, import_react7.useRef)(null);
  return { mainTreeNodeRef: o3, MainTreeNode: (0, import_react7.useMemo)(() => function() {
    return import_react7.default.createElement(f, { features: s4.Hidden, ref: o3 });
  }, [o3]) };
}

export {
  n,
  E,
  c2 as c,
  s5 as s,
  n2,
  l3 as l,
  ee,
  te,
  N2 as N,
  y2 as y
};
//# sourceMappingURL=/build/_shared/chunk-IBOINGU4.js.map
