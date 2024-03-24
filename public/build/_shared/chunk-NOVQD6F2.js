import {
  c,
  f,
  s as s2,
  u as u2
} from "/build/_shared/chunk-6EK66RT6.js";
import {
  n
} from "/build/_shared/chunk-GFA5MC6N.js";
import {
  p,
  y
} from "/build/_shared/chunk-J5ZDEXRM.js";
import {
  D,
  I as I2,
  M,
  T,
  _,
  h,
  o as o2
} from "/build/_shared/chunk-FNVTLCHO.js";
import {
  T as T2
} from "/build/_shared/chunk-ZSUFT5EU.js";
import {
  d,
  r,
  s,
  u as u3
} from "/build/_shared/chunk-X4JIH5W5.js";
import {
  C,
  I,
  O,
  U,
  l,
  o,
  o2 as o3,
  o3 as o4,
  u,
  y as y2
} from "/build/_shared/chunk-JKKPAHGM.js";
import {
  require_react
} from "/build/_shared/chunk-BOXFZXVX.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// node_modules/@headlessui/react/dist/components/menu/menu.js
var import_react2 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/hooks/use-tree-walker.js
var import_react = __toESM(require_react(), 1);
function F({ container: e, accept: t, walk: r2, enabled: c2 = true }) {
  let o5 = (0, import_react.useRef)(t), l2 = (0, import_react.useRef)(r2);
  (0, import_react.useEffect)(() => {
    o5.current = t, l2.current = r2;
  }, [t, r2]), l(() => {
    if (!e || !c2)
      return;
    let n2 = o3(e);
    if (!n2)
      return;
    let f2 = o5.current, p2 = l2.current, d2 = Object.assign((i) => f2(i), { acceptNode: f2 }), u4 = n2.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, d2, false);
    for (; u4.nextNode(); )
      p2(u4.currentNode);
  }, [e, c2, o5, l2]);
}

// node_modules/@headlessui/react/dist/components/menu/menu.js
var me = ((r2) => (r2[r2.Open = 0] = "Open", r2[r2.Closed = 1] = "Closed", r2))(me || {});
var de = ((r2) => (r2[r2.Pointer = 0] = "Pointer", r2[r2.Other = 1] = "Other", r2))(de || {});
var fe = ((a) => (a[a.OpenMenu = 0] = "OpenMenu", a[a.CloseMenu = 1] = "CloseMenu", a[a.GoToItem = 2] = "GoToItem", a[a.Search = 3] = "Search", a[a.ClearSearch = 4] = "ClearSearch", a[a.RegisterItem = 5] = "RegisterItem", a[a.UnregisterItem = 6] = "UnregisterItem", a))(fe || {});
function w(e, u4 = (r2) => r2) {
  let r2 = e.activeItemIndex !== null ? e.items[e.activeItemIndex] : null, s3 = I2(u4(e.items.slice()), (t) => t.dataRef.current.domRef.current), i = r2 ? s3.indexOf(r2) : null;
  return i === -1 && (i = null), { items: s3, activeItemIndex: i };
}
var Te = { [1](e) {
  return e.menuState === 1 ? e : { ...e, activeItemIndex: null, menuState: 1 };
}, [0](e) {
  return e.menuState === 0 ? e : { ...e, __demoMode: false, menuState: 0 };
}, [2]: (e, u4) => {
  var i;
  let r2 = w(e), s3 = f(u4, { resolveItems: () => r2.items, resolveActiveIndex: () => r2.activeItemIndex, resolveId: (t) => t.id, resolveDisabled: (t) => t.dataRef.current.disabled });
  return { ...e, ...r2, searchQuery: "", activeItemIndex: s3, activationTrigger: (i = u4.trigger) != null ? i : 1 };
}, [3]: (e, u4) => {
  let s3 = e.searchQuery !== "" ? 0 : 1, i = e.searchQuery + u4.value.toLowerCase(), o5 = (e.activeItemIndex !== null ? e.items.slice(e.activeItemIndex + s3).concat(e.items.slice(0, e.activeItemIndex + s3)) : e.items).find((l2) => {
    var m2;
    return ((m2 = l2.dataRef.current.textValue) == null ? void 0 : m2.startsWith(i)) && !l2.dataRef.current.disabled;
  }), a = o5 ? e.items.indexOf(o5) : -1;
  return a === -1 || a === e.activeItemIndex ? { ...e, searchQuery: i } : { ...e, searchQuery: i, activeItemIndex: a, activationTrigger: 1 };
}, [4](e) {
  return e.searchQuery === "" ? e : { ...e, searchQuery: "", searchActiveItemIndex: null };
}, [5]: (e, u4) => {
  let r2 = w(e, (s3) => [...s3, { id: u4.id, dataRef: u4.dataRef }]);
  return { ...e, ...r2 };
}, [6]: (e, u4) => {
  let r2 = w(e, (s3) => {
    let i = s3.findIndex((t) => t.id === u4.id);
    return i !== -1 && s3.splice(i, 1), s3;
  });
  return { ...e, ...r2, activationTrigger: 1 };
} };
var U2 = (0, import_react2.createContext)(null);
U2.displayName = "MenuContext";
function C2(e) {
  let u4 = (0, import_react2.useContext)(U2);
  if (u4 === null) {
    let r2 = new Error(`<${e} /> is missing a parent <Menu /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(r2, C2), r2;
  }
  return u4;
}
function ye(e, u4) {
  return u(u4.type, Te, e, u4);
}
var Ie = import_react2.Fragment;
function Me(e, u4) {
  let { __demoMode: r2 = false, ...s3 } = e, i = (0, import_react2.useReducer)(ye, { __demoMode: r2, menuState: r2 ? 0 : 1, buttonRef: (0, import_react2.createRef)(), itemsRef: (0, import_react2.createRef)(), items: [], searchQuery: "", activeItemIndex: null, activationTrigger: 1 }), [{ menuState: t, itemsRef: o5, buttonRef: a }, l2] = i, m2 = y2(u4);
  y([a, o5], (g, R) => {
    var p2;
    l2({ type: 1 }), h(R, T.Loose) || (g.preventDefault(), (p2 = a.current) == null || p2.focus());
  }, t === 0);
  let I3 = o(() => {
    l2({ type: 1 });
  }), A = (0, import_react2.useMemo)(() => ({ open: t === 0, close: I3 }), [t, I3]), f2 = { ref: m2 };
  return import_react2.default.createElement(U2.Provider, { value: i }, import_react2.default.createElement(s, { value: u(t, { [0]: d.Open, [1]: d.Closed }) }, C({ ourProps: f2, theirProps: s3, slot: A, defaultTag: Ie, name: "Menu" })));
}
var ge = "button";
function Re(e, u4) {
  var R;
  let r2 = I(), { id: s3 = `headlessui-menu-button-${r2}`, ...i } = e, [t, o5] = C2("Menu.Button"), a = y2(t.buttonRef, u4), l2 = p(), m2 = o((p2) => {
    switch (p2.key) {
      case o4.Space:
      case o4.Enter:
      case o4.ArrowDown:
        p2.preventDefault(), p2.stopPropagation(), o5({ type: 0 }), l2.nextFrame(() => o5({ type: 2, focus: c.First }));
        break;
      case o4.ArrowUp:
        p2.preventDefault(), p2.stopPropagation(), o5({ type: 0 }), l2.nextFrame(() => o5({ type: 2, focus: c.Last }));
        break;
    }
  }), I3 = o((p2) => {
    switch (p2.key) {
      case o4.Space:
        p2.preventDefault();
        break;
    }
  }), A = o((p2) => {
    if (r(p2.currentTarget))
      return p2.preventDefault();
    e.disabled || (t.menuState === 0 ? (o5({ type: 1 }), l2.nextFrame(() => {
      var M2;
      return (M2 = t.buttonRef.current) == null ? void 0 : M2.focus({ preventScroll: true });
    })) : (p2.preventDefault(), o5({ type: 0 })));
  }), f2 = (0, import_react2.useMemo)(() => ({ open: t.menuState === 0 }), [t]), g = { ref: a, id: s3, type: T2(e, t.buttonRef), "aria-haspopup": "menu", "aria-controls": (R = t.itemsRef.current) == null ? void 0 : R.id, "aria-expanded": t.menuState === 0, onKeyDown: m2, onKeyUp: I3, onClick: A };
  return C({ ourProps: g, theirProps: i, slot: f2, defaultTag: ge, name: "Menu.Button" });
}
var Ae = "div";
var be = O.RenderStrategy | O.Static;
function Ee(e, u4) {
  var M2, b;
  let r2 = I(), { id: s3 = `headlessui-menu-items-${r2}`, ...i } = e, [t, o5] = C2("Menu.Items"), a = y2(t.itemsRef, u4), l2 = n(t.itemsRef), m2 = p(), I3 = u3(), A = (() => I3 !== null ? (I3 & d.Open) === d.Open : t.menuState === 0)();
  (0, import_react2.useEffect)(() => {
    let n2 = t.itemsRef.current;
    n2 && t.menuState === 0 && n2 !== (l2 == null ? void 0 : l2.activeElement) && n2.focus({ preventScroll: true });
  }, [t.menuState, t.itemsRef, l2]), F({ container: t.itemsRef.current, enabled: t.menuState === 0, accept(n2) {
    return n2.getAttribute("role") === "menuitem" ? NodeFilter.FILTER_REJECT : n2.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
  }, walk(n2) {
    n2.setAttribute("role", "none");
  } });
  let f2 = o((n2) => {
    var E2, x;
    switch (m2.dispose(), n2.key) {
      case o4.Space:
        if (t.searchQuery !== "")
          return n2.preventDefault(), n2.stopPropagation(), o5({ type: 3, value: n2.key });
      case o4.Enter:
        if (n2.preventDefault(), n2.stopPropagation(), o5({ type: 1 }), t.activeItemIndex !== null) {
          let { dataRef: S } = t.items[t.activeItemIndex];
          (x = (E2 = S.current) == null ? void 0 : E2.domRef.current) == null || x.click();
        }
        D(t.buttonRef.current);
        break;
      case o4.ArrowDown:
        return n2.preventDefault(), n2.stopPropagation(), o5({ type: 2, focus: c.Next });
      case o4.ArrowUp:
        return n2.preventDefault(), n2.stopPropagation(), o5({ type: 2, focus: c.Previous });
      case o4.Home:
      case o4.PageUp:
        return n2.preventDefault(), n2.stopPropagation(), o5({ type: 2, focus: c.First });
      case o4.End:
      case o4.PageDown:
        return n2.preventDefault(), n2.stopPropagation(), o5({ type: 2, focus: c.Last });
      case o4.Escape:
        n2.preventDefault(), n2.stopPropagation(), o5({ type: 1 }), o2().nextFrame(() => {
          var S;
          return (S = t.buttonRef.current) == null ? void 0 : S.focus({ preventScroll: true });
        });
        break;
      case o4.Tab:
        n2.preventDefault(), n2.stopPropagation(), o5({ type: 1 }), o2().nextFrame(() => {
          _(t.buttonRef.current, n2.shiftKey ? M.Previous : M.Next);
        });
        break;
      default:
        n2.key.length === 1 && (o5({ type: 3, value: n2.key }), m2.setTimeout(() => o5({ type: 4 }), 350));
        break;
    }
  }), g = o((n2) => {
    switch (n2.key) {
      case o4.Space:
        n2.preventDefault();
        break;
    }
  }), R = (0, import_react2.useMemo)(() => ({ open: t.menuState === 0 }), [t]), p2 = { "aria-activedescendant": t.activeItemIndex === null || (M2 = t.items[t.activeItemIndex]) == null ? void 0 : M2.id, "aria-labelledby": (b = t.buttonRef.current) == null ? void 0 : b.id, id: s3, onKeyDown: f2, onKeyUp: g, role: "menu", tabIndex: 0, ref: a };
  return C({ ourProps: p2, theirProps: i, slot: R, defaultTag: Ae, features: be, visible: A, name: "Menu.Items" });
}
var Se = import_react2.Fragment;
function xe(e, u4) {
  let r2 = I(), { id: s3 = `headlessui-menu-item-${r2}`, disabled: i = false, ...t } = e, [o5, a] = C2("Menu.Item"), l2 = o5.activeItemIndex !== null ? o5.items[o5.activeItemIndex].id === s3 : false, m2 = (0, import_react2.useRef)(null), I3 = y2(u4, m2);
  l(() => {
    if (o5.__demoMode || o5.menuState !== 0 || !l2 || o5.activationTrigger === 0)
      return;
    let T3 = o2();
    return T3.requestAnimationFrame(() => {
      var P, B;
      (B = (P = m2.current) == null ? void 0 : P.scrollIntoView) == null || B.call(P, { block: "nearest" });
    }), T3.dispose;
  }, [o5.__demoMode, m2, l2, o5.menuState, o5.activationTrigger, o5.activeItemIndex]);
  let A = s2(m2), f2 = (0, import_react2.useRef)({ disabled: i, domRef: m2, get textValue() {
    return A();
  } });
  l(() => {
    f2.current.disabled = i;
  }, [f2, i]), l(() => (a({ type: 5, id: s3, dataRef: f2 }), () => a({ type: 6, id: s3 })), [f2, s3]);
  let g = o(() => {
    a({ type: 1 });
  }), R = o((T3) => {
    if (i)
      return T3.preventDefault();
    a({ type: 1 }), D(o5.buttonRef.current);
  }), p2 = o(() => {
    if (i)
      return a({ type: 2, focus: c.Nothing });
    a({ type: 2, focus: c.Specific, id: s3 });
  }), M2 = u2(), b = o((T3) => M2.update(T3)), n2 = o((T3) => {
    M2.wasMoved(T3) && (i || l2 || a({ type: 2, focus: c.Specific, id: s3, trigger: 0 }));
  }), E2 = o((T3) => {
    M2.wasMoved(T3) && (i || l2 && a({ type: 2, focus: c.Nothing }));
  }), x = (0, import_react2.useMemo)(() => ({ active: l2, disabled: i, close: g }), [l2, i, g]);
  return C({ ourProps: { id: s3, ref: I3, role: "menuitem", tabIndex: i === true ? void 0 : -1, "aria-disabled": i === true ? true : void 0, disabled: void 0, onClick: R, onFocus: p2, onPointerEnter: b, onMouseEnter: b, onPointerMove: n2, onMouseMove: n2, onPointerLeave: E2, onMouseLeave: E2 }, theirProps: t, slot: x, defaultTag: Se, name: "Menu.Item" });
}
var Pe = U(Me);
var ve = U(Re);
var he = U(Ee);
var De = U(xe);
var qe = Object.assign(Pe, { Button: ve, Items: he, Item: De });

export {
  qe
};
//# sourceMappingURL=/build/_shared/chunk-NOVQD6F2.js.map
