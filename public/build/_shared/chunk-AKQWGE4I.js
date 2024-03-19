import {
  E,
  N as N2,
  ee,
  n,
  n2,
  s as s4,
  y as y3
} from "/build/_shared/chunk-EC4QPT3H.js";
import {
  y
} from "/build/_shared/chunk-EL4ICYCD.js";
import {
  M,
  N,
  O,
  T,
  f,
  f2,
  h,
  s as s2
} from "/build/_shared/chunk-ZHRRJYGJ.js";
import {
  d,
  r,
  s as s3,
  u as u2
} from "/build/_shared/chunk-X4JIH5W5.js";
import {
  T as T2
} from "/build/_shared/chunk-ZSUFT5EU.js";
import {
  C,
  I,
  I2,
  O as O2,
  T as T3,
  U,
  l,
  o,
  o2,
  o3,
  s2 as s,
  u,
  y as y2
} from "/build/_shared/chunk-JKKPAHGM.js";
import {
  require_react
} from "/build/_shared/chunk-BOXFZXVX.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// node_modules/@headlessui/react/dist/components/popover/popover.js
var import_react = __toESM(require_react(), 1);
var he = ((u3) => (u3[u3.Open = 0] = "Open", u3[u3.Closed = 1] = "Closed", u3))(he || {});
var He = ((e) => (e[e.TogglePopover = 0] = "TogglePopover", e[e.ClosePopover = 1] = "ClosePopover", e[e.SetButton = 2] = "SetButton", e[e.SetButtonId = 3] = "SetButtonId", e[e.SetPanel = 4] = "SetPanel", e[e.SetPanelId = 5] = "SetPanelId", e))(He || {});
var Ge = { [0]: (t) => {
  let o4 = { ...t, popoverState: u(t.popoverState, { [0]: 1, [1]: 0 }) };
  return o4.popoverState === 0 && (o4.__demoMode = false), o4;
}, [1](t) {
  return t.popoverState === 1 ? t : { ...t, popoverState: 1 };
}, [2](t, o4) {
  return t.button === o4.button ? t : { ...t, button: o4.button };
}, [3](t, o4) {
  return t.buttonId === o4.buttonId ? t : { ...t, buttonId: o4.buttonId };
}, [4](t, o4) {
  return t.panel === o4.panel ? t : { ...t, panel: o4.panel };
}, [5](t, o4) {
  return t.panelId === o4.panelId ? t : { ...t, panelId: o4.panelId };
} };
var ue = (0, import_react.createContext)(null);
ue.displayName = "PopoverContext";
function oe(t) {
  let o4 = (0, import_react.useContext)(ue);
  if (o4 === null) {
    let u3 = new Error(`<${t} /> is missing a parent <Popover /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(u3, oe), u3;
  }
  return o4;
}
var ie = (0, import_react.createContext)(null);
ie.displayName = "PopoverAPIContext";
function fe(t) {
  let o4 = (0, import_react.useContext)(ie);
  if (o4 === null) {
    let u3 = new Error(`<${t} /> is missing a parent <Popover /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(u3, fe), u3;
  }
  return o4;
}
var Pe = (0, import_react.createContext)(null);
Pe.displayName = "PopoverGroupContext";
function Ee() {
  return (0, import_react.useContext)(Pe);
}
var re = (0, import_react.createContext)(null);
re.displayName = "PopoverPanelContext";
function Ne() {
  return (0, import_react.useContext)(re);
}
function ke(t, o4) {
  return u(o4.type, Ge, t, o4);
}
var we = "div";
function Ue(t, o4) {
  var B;
  let { __demoMode: u3 = false, ...M2 } = t, x = (0, import_react.useRef)(null), n3 = y2(o4, T3((l2) => {
    x.current = l2;
  })), e = (0, import_react.useRef)([]), c = (0, import_react.useReducer)(ke, { __demoMode: u3, popoverState: u3 ? 0 : 1, buttons: e, button: null, buttonId: null, panel: null, panelId: null, beforePanelSentinel: (0, import_react.createRef)(), afterPanelSentinel: (0, import_react.createRef)() }), [{ popoverState: f3, button: s5, buttonId: I3, panel: a, panelId: v, beforePanelSentinel: y4, afterPanelSentinel: A }, P] = c, p = n((B = x.current) != null ? B : s5), E2 = (0, import_react.useMemo)(() => {
    if (!s5 || !a)
      return false;
    for (let W of document.querySelectorAll("body > *"))
      if (Number(W == null ? void 0 : W.contains(s5)) ^ Number(W == null ? void 0 : W.contains(a)))
        return true;
    let l2 = f(), S = l2.indexOf(s5), q = (S + l2.length - 1) % l2.length, U2 = (S + 1) % l2.length, z = l2[q], be = l2[U2];
    return !a.contains(z) && !a.contains(be);
  }, [s5, a]), F = s(I3), D = s(v), _ = (0, import_react.useMemo)(() => ({ buttonId: F, panelId: D, close: () => P({ type: 1 }) }), [F, D, P]), O3 = Ee(), L = O3 == null ? void 0 : O3.registerPopover, $ = o(() => {
    var l2;
    return (l2 = O3 == null ? void 0 : O3.isFocusWithinPopoverGroup()) != null ? l2 : (p == null ? void 0 : p.activeElement) && ((s5 == null ? void 0 : s5.contains(p.activeElement)) || (a == null ? void 0 : a.contains(p.activeElement)));
  });
  (0, import_react.useEffect)(() => L == null ? void 0 : L(_), [L, _]);
  let [i, b] = ee(), T4 = N2({ mainTreeNodeRef: O3 == null ? void 0 : O3.mainTreeNodeRef, portals: i, defaultContainers: [s5, a] });
  E(p == null ? void 0 : p.defaultView, "focus", (l2) => {
    var S, q, U2, z;
    l2.target !== window && l2.target instanceof HTMLElement && f3 === 0 && ($() || s5 && a && (T4.contains(l2.target) || (q = (S = y4.current) == null ? void 0 : S.contains) != null && q.call(S, l2.target) || (z = (U2 = A.current) == null ? void 0 : U2.contains) != null && z.call(U2, l2.target) || P({ type: 1 })));
  }, true), y(T4.resolveContainers, (l2, S) => {
    P({ type: 1 }), h(S, T.Loose) || (l2.preventDefault(), s5 == null || s5.focus());
  }, f3 === 0);
  let d2 = o((l2) => {
    P({ type: 1 });
    let S = (() => l2 ? l2 instanceof HTMLElement ? l2 : "current" in l2 && l2.current instanceof HTMLElement ? l2.current : s5 : s5)();
    S == null || S.focus();
  }), r2 = (0, import_react.useMemo)(() => ({ close: d2, isPortalled: E2 }), [d2, E2]), m = (0, import_react.useMemo)(() => ({ open: f3 === 0, close: d2 }), [f3, d2]), g = { ref: n3 };
  return import_react.default.createElement(re.Provider, { value: null }, import_react.default.createElement(ue.Provider, { value: c }, import_react.default.createElement(ie.Provider, { value: r2 }, import_react.default.createElement(s3, { value: u(f3, { [0]: d.Open, [1]: d.Closed }) }, import_react.default.createElement(b, null, C({ ourProps: g, theirProps: M2, slot: m, defaultTag: we, name: "Popover" }), import_react.default.createElement(T4.MainTreeNode, null))))));
}
var We = "button";
function Ke(t, o4) {
  let u3 = I(), { id: M2 = `headlessui-popover-button-${u3}`, ...x } = t, [n3, e] = oe("Popover.Button"), { isPortalled: c } = fe("Popover.Button"), f3 = (0, import_react.useRef)(null), s5 = `headlessui-focus-sentinel-${I()}`, I3 = Ee(), a = I3 == null ? void 0 : I3.closeOthers, y4 = Ne() !== null;
  (0, import_react.useEffect)(() => {
    if (!y4)
      return e({ type: 3, buttonId: M2 }), () => {
        e({ type: 3, buttonId: null });
      };
  }, [y4, M2, e]);
  let [A] = (0, import_react.useState)(() => Symbol()), P = y2(f3, o4, y4 ? null : (r2) => {
    if (r2)
      n3.buttons.current.push(A);
    else {
      let m = n3.buttons.current.indexOf(A);
      m !== -1 && n3.buttons.current.splice(m, 1);
    }
    n3.buttons.current.length > 1 && console.warn("You are already using a <Popover.Button /> but only 1 <Popover.Button /> is supported."), r2 && e({ type: 2, button: r2 });
  }), p = y2(f3, o4), E2 = n(f3), F = o((r2) => {
    var m, g, B;
    if (y4) {
      if (n3.popoverState === 1)
        return;
      switch (r2.key) {
        case o3.Space:
        case o3.Enter:
          r2.preventDefault(), (g = (m = r2.target).click) == null || g.call(m), e({ type: 1 }), (B = n3.button) == null || B.focus();
          break;
      }
    } else
      switch (r2.key) {
        case o3.Space:
        case o3.Enter:
          r2.preventDefault(), r2.stopPropagation(), n3.popoverState === 1 && (a == null || a(n3.buttonId)), e({ type: 0 });
          break;
        case o3.Escape:
          if (n3.popoverState !== 0)
            return a == null ? void 0 : a(n3.buttonId);
          if (!f3.current || E2 != null && E2.activeElement && !f3.current.contains(E2.activeElement))
            return;
          r2.preventDefault(), r2.stopPropagation(), e({ type: 1 });
          break;
      }
  }), D = o((r2) => {
    y4 || r2.key === o3.Space && r2.preventDefault();
  }), _ = o((r2) => {
    var m, g;
    r(r2.currentTarget) || t.disabled || (y4 ? (e({ type: 1 }), (m = n3.button) == null || m.focus()) : (r2.preventDefault(), r2.stopPropagation(), n3.popoverState === 1 && (a == null || a(n3.buttonId)), e({ type: 0 }), (g = n3.button) == null || g.focus()));
  }), O3 = o((r2) => {
    r2.preventDefault(), r2.stopPropagation();
  }), L = n3.popoverState === 0, $ = (0, import_react.useMemo)(() => ({ open: L }), [L]), i = T2(t, f3), b = y4 ? { ref: p, type: i, onKeyDown: F, onClick: _ } : { ref: P, id: n3.buttonId, type: i, "aria-expanded": n3.popoverState === 0, "aria-controls": n3.panel ? n3.panelId : void 0, onKeyDown: F, onKeyUp: D, onClick: _, onMouseDown: O3 }, T4 = n2(), d2 = o(() => {
    let r2 = n3.panel;
    if (!r2)
      return;
    function m() {
      u(T4.current, { [s4.Forwards]: () => O(r2, M.First), [s4.Backwards]: () => O(r2, M.Last) }) === N.Error && O(f().filter((B) => B.dataset.headlessuiFocusGuard !== "true"), u(T4.current, { [s4.Forwards]: M.Next, [s4.Backwards]: M.Previous }), { relativeTo: n3.button });
    }
    m();
  });
  return import_react.default.createElement(import_react.default.Fragment, null, C({ ourProps: b, theirProps: x, slot: $, defaultTag: We, name: "Popover.Button" }), L && !y4 && c && import_react.default.createElement(f2, { id: s5, features: s2.Focusable, "data-headlessui-focus-guard": true, as: "button", type: "button", onFocus: d2 }));
}
var je = "div";
var Ve = O2.RenderStrategy | O2.Static;
function $e(t, o4) {
  let u3 = I(), { id: M2 = `headlessui-popover-overlay-${u3}`, ...x } = t, [{ popoverState: n3 }, e] = oe("Popover.Overlay"), c = y2(o4), f3 = u2(), s5 = (() => f3 !== null ? (f3 & d.Open) === d.Open : n3 === 0)(), I3 = o((y4) => {
    if (r(y4.currentTarget))
      return y4.preventDefault();
    e({ type: 1 });
  }), a = (0, import_react.useMemo)(() => ({ open: n3 === 0 }), [n3]);
  return C({ ourProps: { ref: c, id: M2, "aria-hidden": true, onClick: I3 }, theirProps: x, slot: a, defaultTag: je, features: Ve, visible: s5, name: "Popover.Overlay" });
}
var Je = "div";
var Xe = O2.RenderStrategy | O2.Static;
function Ye(t, o4) {
  let u3 = I(), { id: M2 = `headlessui-popover-panel-${u3}`, focus: x = false, ...n3 } = t, [e, c] = oe("Popover.Panel"), { close: f3, isPortalled: s5 } = fe("Popover.Panel"), I3 = `headlessui-focus-sentinel-before-${I()}`, a = `headlessui-focus-sentinel-after-${I()}`, v = (0, import_react.useRef)(null), y4 = y2(v, o4, (i) => {
    c({ type: 4, panel: i });
  }), A = n(v), P = I2();
  l(() => (c({ type: 5, panelId: M2 }), () => {
    c({ type: 5, panelId: null });
  }), [M2, c]);
  let p = u2(), E2 = (() => p !== null ? (p & d.Open) === d.Open : e.popoverState === 0)(), F = o((i) => {
    var b;
    switch (i.key) {
      case o3.Escape:
        if (e.popoverState !== 0 || !v.current || A != null && A.activeElement && !v.current.contains(A.activeElement))
          return;
        i.preventDefault(), i.stopPropagation(), c({ type: 1 }), (b = e.button) == null || b.focus();
        break;
    }
  });
  (0, import_react.useEffect)(() => {
    var i;
    t.static || e.popoverState === 1 && ((i = t.unmount) == null || i) && c({ type: 4, panel: null });
  }, [e.popoverState, t.unmount, t.static, c]), (0, import_react.useEffect)(() => {
    if (e.__demoMode || !x || e.popoverState !== 0 || !v.current)
      return;
    let i = A == null ? void 0 : A.activeElement;
    v.current.contains(i) || O(v.current, M.First);
  }, [e.__demoMode, x, v, e.popoverState]);
  let D = (0, import_react.useMemo)(() => ({ open: e.popoverState === 0, close: f3 }), [e, f3]), _ = { ref: y4, id: M2, onKeyDown: F, onBlur: x && e.popoverState === 0 ? (i) => {
    var T4, d2, r2, m, g;
    let b = i.relatedTarget;
    b && v.current && ((T4 = v.current) != null && T4.contains(b) || (c({ type: 1 }), ((r2 = (d2 = e.beforePanelSentinel.current) == null ? void 0 : d2.contains) != null && r2.call(d2, b) || (g = (m = e.afterPanelSentinel.current) == null ? void 0 : m.contains) != null && g.call(m, b)) && b.focus({ preventScroll: true })));
  } : void 0, tabIndex: -1 }, O3 = n2(), L = o(() => {
    let i = v.current;
    if (!i)
      return;
    function b() {
      u(O3.current, { [s4.Forwards]: () => {
        var d2;
        O(i, M.First) === N.Error && ((d2 = e.afterPanelSentinel.current) == null || d2.focus());
      }, [s4.Backwards]: () => {
        var T4;
        (T4 = e.button) == null || T4.focus({ preventScroll: true });
      } });
    }
    b();
  }), $ = o(() => {
    let i = v.current;
    if (!i)
      return;
    function b() {
      u(O3.current, { [s4.Forwards]: () => {
        var B;
        if (!e.button)
          return;
        let T4 = f(), d2 = T4.indexOf(e.button), r2 = T4.slice(0, d2 + 1), g = [...T4.slice(d2 + 1), ...r2];
        for (let l2 of g.slice())
          if (l2.dataset.headlessuiFocusGuard === "true" || (B = e.panel) != null && B.contains(l2)) {
            let S = g.indexOf(l2);
            S !== -1 && g.splice(S, 1);
          }
        O(g, M.First, { sorted: false });
      }, [s4.Backwards]: () => {
        var d2;
        O(i, M.Previous) === N.Error && ((d2 = e.button) == null || d2.focus());
      } });
    }
    b();
  });
  return import_react.default.createElement(re.Provider, { value: M2 }, E2 && s5 && import_react.default.createElement(f2, { id: I3, ref: e.beforePanelSentinel, features: s2.Focusable, "data-headlessui-focus-guard": true, as: "button", type: "button", onFocus: L }), C({ mergeRefs: P, ourProps: _, theirProps: n3, slot: D, defaultTag: Je, features: Xe, visible: E2, name: "Popover.Panel" }), E2 && s5 && import_react.default.createElement(f2, { id: a, ref: e.afterPanelSentinel, features: s2.Focusable, "data-headlessui-focus-guard": true, as: "button", type: "button", onFocus: $ }));
}
var qe = "div";
function ze(t, o4) {
  let u3 = (0, import_react.useRef)(null), M2 = y2(u3, o4), [x, n3] = (0, import_react.useState)([]), e = y3(), c = o((P) => {
    n3((p) => {
      let E2 = p.indexOf(P);
      if (E2 !== -1) {
        let F = p.slice();
        return F.splice(E2, 1), F;
      }
      return p;
    });
  }), f3 = o((P) => (n3((p) => [...p, P]), () => c(P))), s5 = o(() => {
    var E2;
    let P = o2(u3);
    if (!P)
      return false;
    let p = P.activeElement;
    return (E2 = u3.current) != null && E2.contains(p) ? true : x.some((F) => {
      var D, _;
      return ((D = P.getElementById(F.buttonId.current)) == null ? void 0 : D.contains(p)) || ((_ = P.getElementById(F.panelId.current)) == null ? void 0 : _.contains(p));
    });
  }), I3 = o((P) => {
    for (let p of x)
      p.buttonId.current !== P && p.close();
  }), a = (0, import_react.useMemo)(() => ({ registerPopover: f3, unregisterPopover: c, isFocusWithinPopoverGroup: s5, closeOthers: I3, mainTreeNodeRef: e.mainTreeNodeRef }), [f3, c, s5, I3, e.mainTreeNodeRef]), v = (0, import_react.useMemo)(() => ({}), []), y4 = t, A = { ref: M2 };
  return import_react.default.createElement(Pe.Provider, { value: a }, C({ ourProps: A, theirProps: y4, slot: v, defaultTag: qe, name: "Popover.Group" }), import_react.default.createElement(e.MainTreeNode, null));
}
var Qe = U(Ue);
var Ze = U(Ke);
var et = U($e);
var tt = U(Ye);
var ot = U(ze);
var Ct = Object.assign(Qe, { Button: Ze, Overlay: et, Panel: tt, Group: ot });

export {
  Ct
};
//# sourceMappingURL=/build/_shared/chunk-AKQWGE4I.js.map
