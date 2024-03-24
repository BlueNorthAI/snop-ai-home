import {
  I as I2,
  M,
  N,
  O,
  f2 as f,
  f3 as f2,
  s as s2,
  t
} from "/build/_shared/chunk-FNVTLCHO.js";
import {
  T
} from "/build/_shared/chunk-ZSUFT5EU.js";
import {
  C,
  I,
  O as O2,
  U,
  l,
  o,
  o2,
  o3,
  s2 as s,
  u,
  y
} from "/build/_shared/chunk-JKKPAHGM.js";
import {
  require_react
} from "/build/_shared/chunk-BOXFZXVX.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// node_modules/@headlessui/react/dist/components/tabs/tabs.js
var import_react2 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/internal/focus-sentinel.js
var import_react = __toESM(require_react(), 1);
function b({ onFocus: n }) {
  let [r2, o4] = (0, import_react.useState)(true), u2 = f2();
  return r2 ? import_react.default.createElement(f, { as: "button", type: "button", features: s2.Focusable, onFocus: (a2) => {
    a2.preventDefault();
    let e, i = 50;
    function t2() {
      if (i-- <= 0) {
        e && cancelAnimationFrame(e);
        return;
      }
      if (n()) {
        if (cancelAnimationFrame(e), !u2.current)
          return;
        o4(false);
        return;
      }
      e = requestAnimationFrame(t2);
    }
    e = requestAnimationFrame(t2);
  } }) : null;
}

// node_modules/@headlessui/react/dist/utils/stable-collection.js
var r = __toESM(require_react(), 1);
var s4 = r.createContext(null);
function a() {
  return { groups: /* @__PURE__ */ new Map(), get(n, t2) {
    var c2;
    let e = this.groups.get(n);
    e || (e = /* @__PURE__ */ new Map(), this.groups.set(n, e));
    let l2 = (c2 = e.get(t2)) != null ? c2 : 0;
    e.set(t2, l2 + 1);
    let o4 = Array.from(e.keys()).indexOf(t2);
    function i() {
      let u2 = e.get(t2);
      u2 > 1 ? e.set(t2, u2 - 1) : e.delete(t2);
    }
    return [o4, i];
  } };
}
function C2({ children: n }) {
  let t2 = r.useRef(a());
  return r.createElement(s4.Provider, { value: t2 }, n);
}
function d(n) {
  let t2 = r.useContext(s4);
  if (!t2)
    throw new Error("You must wrap your component in a <StableCollection>");
  let e = f3(), [l2, o4] = t2.current.get(n, e);
  return r.useEffect(() => o4, []), l2;
}
function f3() {
  var l2, o4, i;
  let n = (i = (o4 = (l2 = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED) == null ? void 0 : l2.ReactCurrentOwner) == null ? void 0 : o4.current) != null ? i : null;
  if (!n)
    return Symbol();
  let t2 = [], e = n;
  for (; e; )
    t2.push(e.index), e = e.return;
  return "$." + t2.join(".");
}

// node_modules/@headlessui/react/dist/components/tabs/tabs.js
var ue = ((t2) => (t2[t2.Forwards = 0] = "Forwards", t2[t2.Backwards = 1] = "Backwards", t2))(ue || {});
var Te = ((o4) => (o4[o4.Less = -1] = "Less", o4[o4.Equal = 0] = "Equal", o4[o4.Greater = 1] = "Greater", o4))(Te || {});
var de = ((r2) => (r2[r2.SetSelectedIndex = 0] = "SetSelectedIndex", r2[r2.RegisterTab = 1] = "RegisterTab", r2[r2.UnregisterTab = 2] = "UnregisterTab", r2[r2.RegisterPanel = 3] = "RegisterPanel", r2[r2.UnregisterPanel = 4] = "UnregisterPanel", r2))(de || {});
var ce = { [0](e, n) {
  var u2;
  let t2 = I2(e.tabs, (T2) => T2.current), o4 = I2(e.panels, (T2) => T2.current), s5 = t2.filter((T2) => {
    var l2;
    return !((l2 = T2.current) != null && l2.hasAttribute("disabled"));
  }), r2 = { ...e, tabs: t2, panels: o4 };
  if (n.index < 0 || n.index > t2.length - 1) {
    let T2 = u(Math.sign(n.index - e.selectedIndex), { [-1]: () => 1, [0]: () => u(Math.sign(n.index), { [-1]: () => 0, [0]: () => 0, [1]: () => 1 }), [1]: () => 0 });
    if (s5.length === 0)
      return r2;
    let l2 = u(T2, { [0]: () => t2.indexOf(s5[0]), [1]: () => t2.indexOf(s5[s5.length - 1]) });
    return { ...r2, selectedIndex: l2 === -1 ? e.selectedIndex : l2 };
  }
  let i = t2.slice(0, n.index), b2 = [...t2.slice(n.index), ...i].find((T2) => s5.includes(T2));
  if (!b2)
    return r2;
  let c2 = (u2 = t2.indexOf(b2)) != null ? u2 : e.selectedIndex;
  return c2 === -1 && (c2 = e.selectedIndex), { ...r2, selectedIndex: c2 };
}, [1](e, n) {
  var r2;
  if (e.tabs.includes(n.tab))
    return e;
  let t2 = e.tabs[e.selectedIndex], o4 = I2([...e.tabs, n.tab], (i) => i.current), s5 = (r2 = o4.indexOf(t2)) != null ? r2 : e.selectedIndex;
  return s5 === -1 && (s5 = e.selectedIndex), { ...e, tabs: o4, selectedIndex: s5 };
}, [2](e, n) {
  return { ...e, tabs: e.tabs.filter((t2) => t2 !== n.tab) };
}, [3](e, n) {
  return e.panels.includes(n.panel) ? e : { ...e, panels: I2([...e.panels, n.panel], (t2) => t2.current) };
}, [4](e, n) {
  return { ...e, panels: e.panels.filter((t2) => t2 !== n.panel) };
} };
var X = (0, import_react2.createContext)(null);
X.displayName = "TabsDataContext";
function h(e) {
  let n = (0, import_react2.useContext)(X);
  if (n === null) {
    let t2 = new Error(`<${e} /> is missing a parent <Tab.Group /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(t2, h), t2;
  }
  return n;
}
var $ = (0, import_react2.createContext)(null);
$.displayName = "TabsActionsContext";
function q(e) {
  let n = (0, import_react2.useContext)($);
  if (n === null) {
    let t2 = new Error(`<${e} /> is missing a parent <Tab.Group /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(t2, q), t2;
  }
  return n;
}
function fe(e, n) {
  return u(n.type, ce, e, n);
}
var be = import_react2.Fragment;
function me(e, n) {
  let { defaultIndex: t2 = 0, vertical: o4 = false, manual: s5 = false, onChange: r2, selectedIndex: i = null, ...R } = e;
  const b2 = o4 ? "vertical" : "horizontal", c2 = s5 ? "manual" : "auto";
  let u2 = i !== null, T2 = y(n), [l2, d2] = (0, import_react2.useReducer)(fe, { selectedIndex: i != null ? i : t2, tabs: [], panels: [] }), x = (0, import_react2.useMemo)(() => ({ selectedIndex: l2.selectedIndex }), [l2.selectedIndex]), m = s(r2 || (() => {
  })), g = s(l2.tabs), E = (0, import_react2.useMemo)(() => ({ orientation: b2, activation: c2, ...l2 }), [b2, c2, l2]), S = o((p) => (d2({ type: 1, tab: p }), () => d2({ type: 2, tab: p }))), A = o((p) => (d2({ type: 3, panel: p }), () => d2({ type: 4, panel: p }))), L = o((p) => {
    M2.current !== p && m.current(p), u2 || d2({ type: 0, index: p });
  }), M2 = s(u2 ? e.selectedIndex : l2.selectedIndex), N2 = (0, import_react2.useMemo)(() => ({ registerTab: S, registerPanel: A, change: L }), []);
  l(() => {
    d2({ type: 0, index: i != null ? i : t2 });
  }, [i]), l(() => {
    if (M2.current === void 0 || l2.tabs.length <= 0)
      return;
    let p = I2(l2.tabs, (a2) => a2.current);
    p.some((a2, f4) => l2.tabs[f4] !== a2) && L(p.indexOf(l2.tabs[M2.current]));
  });
  let B = { ref: T2 };
  return import_react2.default.createElement(C2, null, import_react2.default.createElement($.Provider, { value: N2 }, import_react2.default.createElement(X.Provider, { value: E }, E.tabs.length <= 0 && import_react2.default.createElement(b, { onFocus: () => {
    var p, I3;
    for (let a2 of g.current)
      if (((p = a2.current) == null ? void 0 : p.tabIndex) === 0)
        return (I3 = a2.current) == null || I3.focus(), true;
    return false;
  } }), C({ ourProps: B, theirProps: R, slot: x, defaultTag: be, name: "Tabs" }))));
}
var Pe = "div";
function ye(e, n) {
  let { orientation: t2, selectedIndex: o4 } = h("Tab.List"), s5 = y(n);
  return C({ ourProps: { ref: s5, role: "tablist", "aria-orientation": t2 }, theirProps: e, slot: { selectedIndex: o4 }, defaultTag: Pe, name: "Tabs.List" });
}
var xe = "button";
function ge(e, n) {
  var p, I3;
  let t2 = I(), { id: o4 = `headlessui-tabs-tab-${t2}`, ...s5 } = e, { orientation: r2, activation: i, selectedIndex: R, tabs: b2, panels: c2 } = h("Tab"), u2 = q("Tab"), T2 = h("Tab"), l2 = (0, import_react2.useRef)(null), d2 = y(l2, n);
  l(() => u2.registerTab(l2), [u2, l2]);
  let x = d("tabs"), m = b2.indexOf(l2);
  m === -1 && (m = x);
  let g = m === R, E = o((a2) => {
    var j;
    let f4 = a2();
    if (f4 === N.Success && i === "auto") {
      let W = (j = o2(l2)) == null ? void 0 : j.activeElement, z = T2.tabs.findIndex((te) => te.current === W);
      z !== -1 && u2.change(z);
    }
    return f4;
  }), S = o((a2) => {
    let f4 = b2.map((W) => W.current).filter(Boolean);
    if (a2.key === o3.Space || a2.key === o3.Enter) {
      a2.preventDefault(), a2.stopPropagation(), u2.change(m);
      return;
    }
    switch (a2.key) {
      case o3.Home:
      case o3.PageUp:
        return a2.preventDefault(), a2.stopPropagation(), E(() => O(f4, M.First));
      case o3.End:
      case o3.PageDown:
        return a2.preventDefault(), a2.stopPropagation(), E(() => O(f4, M.Last));
    }
    if (E(() => u(r2, { vertical() {
      return a2.key === o3.ArrowUp ? O(f4, M.Previous | M.WrapAround) : a2.key === o3.ArrowDown ? O(f4, M.Next | M.WrapAround) : N.Error;
    }, horizontal() {
      return a2.key === o3.ArrowLeft ? O(f4, M.Previous | M.WrapAround) : a2.key === o3.ArrowRight ? O(f4, M.Next | M.WrapAround) : N.Error;
    } })) === N.Success)
      return a2.preventDefault();
  }), A = (0, import_react2.useRef)(false), L = o(() => {
    var a2;
    A.current || (A.current = true, (a2 = l2.current) == null || a2.focus({ preventScroll: true }), u2.change(m), t(() => {
      A.current = false;
    }));
  }), M2 = o((a2) => {
    a2.preventDefault();
  }), N2 = (0, import_react2.useMemo)(() => ({ selected: g }), [g]), B = { ref: d2, onKeyDown: S, onMouseDown: M2, onClick: L, id: o4, role: "tab", type: T(e, l2), "aria-controls": (I3 = (p = c2[m]) == null ? void 0 : p.current) == null ? void 0 : I3.id, "aria-selected": g, tabIndex: g ? 0 : -1 };
  return C({ ourProps: B, theirProps: s5, slot: N2, defaultTag: xe, name: "Tabs.Tab" });
}
var Ee = "div";
function Ae(e, n) {
  let { selectedIndex: t2 } = h("Tab.Panels"), o4 = y(n), s5 = (0, import_react2.useMemo)(() => ({ selectedIndex: t2 }), [t2]);
  return C({ ourProps: { ref: o4 }, theirProps: e, slot: s5, defaultTag: Ee, name: "Tabs.Panels" });
}
var Re = "div";
var Le = O2.RenderStrategy | O2.Static;
function _e(e, n) {
  var E, S, A, L;
  let t2 = I(), { id: o4 = `headlessui-tabs-panel-${t2}`, tabIndex: s5 = 0, ...r2 } = e, { selectedIndex: i, tabs: R, panels: b2 } = h("Tab.Panel"), c2 = q("Tab.Panel"), u2 = (0, import_react2.useRef)(null), T2 = y(u2, n);
  l(() => c2.registerPanel(u2), [c2, u2]);
  let l2 = d("panels"), d2 = b2.indexOf(u2);
  d2 === -1 && (d2 = l2);
  let x = d2 === i, m = (0, import_react2.useMemo)(() => ({ selected: x }), [x]), g = { ref: T2, id: o4, role: "tabpanel", "aria-labelledby": (S = (E = R[d2]) == null ? void 0 : E.current) == null ? void 0 : S.id, tabIndex: x ? s5 : -1 };
  return !x && ((A = r2.unmount) == null || A) && !((L = r2.static) != null && L) ? import_react2.default.createElement(f, { as: "span", "aria-hidden": "true", ...g }) : C({ ourProps: g, theirProps: r2, slot: m, defaultTag: Re, features: Le, visible: x, name: "Tabs.Panel" });
}
var Se = U(ge);
var Ie = U(me);
var De = U(ye);
var Fe = U(Ae);
var he = U(_e);
var $e = Object.assign(Se, { Group: Ie, List: De, Panels: Fe, Panel: he });

export {
  $e
};
//# sourceMappingURL=/build/_shared/chunk-6BTHVKS6.js.map
