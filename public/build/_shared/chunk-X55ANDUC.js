import {
  c,
  f as f2,
  s as s4,
  u as u2
} from "/build/_shared/chunk-6EK66RT6.js";
import {
  p,
  y
} from "/build/_shared/chunk-J5ZDEXRM.js";
import {
  I as I2,
  T,
  f2 as f,
  h,
  o as o2,
  s as s2
} from "/build/_shared/chunk-FNVTLCHO.js";
import {
  T as T2
} from "/build/_shared/chunk-ZSUFT5EU.js";
import {
  d,
  r,
  s as s3,
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
  s2 as s,
  u,
  x,
  y as y2
} from "/build/_shared/chunk-JKKPAHGM.js";
import {
  require_react
} from "/build/_shared/chunk-BOXFZXVX.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// node_modules/@headlessui/react/dist/components/listbox/listbox.js
var import_react3 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/hooks/use-computed.js
var import_react = __toESM(require_react(), 1);
function i(e2, o7) {
  let [u4, t] = (0, import_react.useState)(e2), r2 = s(e2);
  return l(() => t(r2.current), [r2, t, ...o7]), u4;
}

// node_modules/@headlessui/react/dist/hooks/use-controllable.js
var import_react2 = __toESM(require_react(), 1);
function T3(l2, r2, c2) {
  let [i2, s6] = (0, import_react2.useState)(c2), e2 = l2 !== void 0, t = (0, import_react2.useRef)(e2), u4 = (0, import_react2.useRef)(false), d2 = (0, import_react2.useRef)(false);
  return e2 && !t.current && !u4.current ? (u4.current = true, t.current = e2, console.error("A component is changing from uncontrolled to controlled. This may be caused by the value changing from undefined to a defined value, which should not happen.")) : !e2 && t.current && !d2.current && (d2.current = true, t.current = e2, console.error("A component is changing from controlled to uncontrolled. This may be caused by the value changing from a defined value to undefined, which should not happen.")), [e2 ? l2 : i2, o((n) => (e2 || s6(n), r2 == null ? void 0 : r2(n)))];
}

// node_modules/@headlessui/react/dist/utils/form.js
function e(i2 = {}, s6 = null, t = []) {
  for (let [r2, n] of Object.entries(i2))
    o6(t, f4(s6, r2), n);
  return t;
}
function f4(i2, s6) {
  return i2 ? i2 + "[" + s6 + "]" : s6;
}
function o6(i2, s6, t) {
  if (Array.isArray(t))
    for (let [r2, n] of t.entries())
      o6(i2, f4(s6, r2.toString()), n);
  else
    t instanceof Date ? i2.push([s6, t.toISOString()]) : typeof t == "boolean" ? i2.push([s6, t ? "1" : "0"]) : typeof t == "string" ? i2.push([s6, t]) : typeof t == "number" ? i2.push([s6, `${t}`]) : t == null ? i2.push([s6, ""]) : e(t, s6, i2);
}

// node_modules/@headlessui/react/dist/components/listbox/listbox.js
var Be = ((n) => (n[n.Open = 0] = "Open", n[n.Closed = 1] = "Closed", n))(Be || {});
var He = ((n) => (n[n.Single = 0] = "Single", n[n.Multi = 1] = "Multi", n))(He || {});
var Ge = ((n) => (n[n.Pointer = 0] = "Pointer", n[n.Other = 1] = "Other", n))(Ge || {});
var Ne = ((i2) => (i2[i2.OpenListbox = 0] = "OpenListbox", i2[i2.CloseListbox = 1] = "CloseListbox", i2[i2.GoToOption = 2] = "GoToOption", i2[i2.Search = 3] = "Search", i2[i2.ClearSearch = 4] = "ClearSearch", i2[i2.RegisterOption = 5] = "RegisterOption", i2[i2.UnregisterOption = 6] = "UnregisterOption", i2[i2.RegisterLabel = 7] = "RegisterLabel", i2))(Ne || {});
function z(e2, a = (n) => n) {
  let n = e2.activeOptionIndex !== null ? e2.options[e2.activeOptionIndex] : null, r2 = I2(a(e2.options.slice()), (t) => t.dataRef.current.domRef.current), l2 = n ? r2.indexOf(n) : null;
  return l2 === -1 && (l2 = null), { options: r2, activeOptionIndex: l2 };
}
var je = { [1](e2) {
  return e2.dataRef.current.disabled || e2.listboxState === 1 ? e2 : { ...e2, activeOptionIndex: null, listboxState: 1 };
}, [0](e2) {
  if (e2.dataRef.current.disabled || e2.listboxState === 0)
    return e2;
  let a = e2.activeOptionIndex, { isSelected: n } = e2.dataRef.current, r2 = e2.options.findIndex((l2) => n(l2.dataRef.current.value));
  return r2 !== -1 && (a = r2), { ...e2, listboxState: 0, activeOptionIndex: a };
}, [2](e2, a) {
  var l2;
  if (e2.dataRef.current.disabled || e2.listboxState === 1)
    return e2;
  let n = z(e2), r2 = f2(a, { resolveItems: () => n.options, resolveActiveIndex: () => n.activeOptionIndex, resolveId: (t) => t.id, resolveDisabled: (t) => t.dataRef.current.disabled });
  return { ...e2, ...n, searchQuery: "", activeOptionIndex: r2, activationTrigger: (l2 = a.trigger) != null ? l2 : 1 };
}, [3]: (e2, a) => {
  if (e2.dataRef.current.disabled || e2.listboxState === 1)
    return e2;
  let r2 = e2.searchQuery !== "" ? 0 : 1, l2 = e2.searchQuery + a.value.toLowerCase(), p2 = (e2.activeOptionIndex !== null ? e2.options.slice(e2.activeOptionIndex + r2).concat(e2.options.slice(0, e2.activeOptionIndex + r2)) : e2.options).find((i2) => {
    var b;
    return !i2.dataRef.current.disabled && ((b = i2.dataRef.current.textValue) == null ? void 0 : b.startsWith(l2));
  }), u4 = p2 ? e2.options.indexOf(p2) : -1;
  return u4 === -1 || u4 === e2.activeOptionIndex ? { ...e2, searchQuery: l2 } : { ...e2, searchQuery: l2, activeOptionIndex: u4, activationTrigger: 1 };
}, [4](e2) {
  return e2.dataRef.current.disabled || e2.listboxState === 1 || e2.searchQuery === "" ? e2 : { ...e2, searchQuery: "" };
}, [5]: (e2, a) => {
  let n = { id: a.id, dataRef: a.dataRef }, r2 = z(e2, (l2) => [...l2, n]);
  return e2.activeOptionIndex === null && e2.dataRef.current.isSelected(a.dataRef.current.value) && (r2.activeOptionIndex = r2.options.indexOf(n)), { ...e2, ...r2 };
}, [6]: (e2, a) => {
  let n = z(e2, (r2) => {
    let l2 = r2.findIndex((t) => t.id === a.id);
    return l2 !== -1 && r2.splice(l2, 1), r2;
  });
  return { ...e2, ...n, activationTrigger: 1 };
}, [7]: (e2, a) => ({ ...e2, labelId: a.id }) };
var J = (0, import_react3.createContext)(null);
J.displayName = "ListboxActionsContext";
function k(e2) {
  let a = (0, import_react3.useContext)(J);
  if (a === null) {
    let n = new Error(`<${e2} /> is missing a parent <Listbox /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(n, k), n;
  }
  return a;
}
var q = (0, import_react3.createContext)(null);
q.displayName = "ListboxDataContext";
function w(e2) {
  let a = (0, import_react3.useContext)(q);
  if (a === null) {
    let n = new Error(`<${e2} /> is missing a parent <Listbox /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(n, w), n;
  }
  return a;
}
function Ve(e2, a) {
  return u(a.type, je, e2, a);
}
var Ke = import_react3.Fragment;
function Qe(e2, a) {
  let { value: n, defaultValue: r2, form: l2, name: t, onChange: p2, by: u4 = (s6, c2) => s6 === c2, disabled: i2 = false, horizontal: b = false, multiple: R = false, ...m } = e2;
  const P = b ? "horizontal" : "vertical";
  let S = y2(a), [g = R ? [] : void 0, x2] = T3(n, p2, r2), [T4, o7] = (0, import_react3.useReducer)(Ve, { dataRef: (0, import_react3.createRef)(), listboxState: 1, options: [], searchQuery: "", labelId: null, activeOptionIndex: null, activationTrigger: 1 }), L = (0, import_react3.useRef)({ static: false, hold: false }), U2 = (0, import_react3.useRef)(null), B = (0, import_react3.useRef)(null), W = (0, import_react3.useRef)(null), I3 = o(typeof u4 == "string" ? (s6, c2) => {
    let O2 = u4;
    return (s6 == null ? void 0 : s6[O2]) === (c2 == null ? void 0 : c2[O2]);
  } : u4), A = (0, import_react3.useCallback)((s6) => u(d2.mode, { [1]: () => g.some((c2) => I3(c2, s6)), [0]: () => I3(g, s6) }), [g]), d2 = (0, import_react3.useMemo)(() => ({ ...T4, value: g, disabled: i2, mode: R ? 1 : 0, orientation: P, compare: I3, isSelected: A, optionsPropsRef: L, labelRef: U2, buttonRef: B, optionsRef: W }), [g, i2, R, T4]);
  l(() => {
    T4.dataRef.current = d2;
  }, [d2]), y([d2.buttonRef, d2.optionsRef], (s6, c2) => {
    var O2;
    o7({ type: 1 }), h(c2, T.Loose) || (s6.preventDefault(), (O2 = d2.buttonRef.current) == null || O2.focus());
  }, d2.listboxState === 0);
  let H = (0, import_react3.useMemo)(() => ({ open: d2.listboxState === 0, disabled: i2, value: g }), [d2, i2, g]), ie = o((s6) => {
    let c2 = d2.options.find((O2) => O2.id === s6);
    c2 && X(c2.dataRef.current.value);
  }), re = o(() => {
    if (d2.activeOptionIndex !== null) {
      let { dataRef: s6, id: c2 } = d2.options[d2.activeOptionIndex];
      X(s6.current.value), o7({ type: 2, focus: c.Specific, id: c2 });
    }
  }), ae = o(() => o7({ type: 0 })), le = o(() => o7({ type: 1 })), se = o((s6, c2, O2) => s6 === c.Specific ? o7({ type: 2, focus: c.Specific, id: c2, trigger: O2 }) : o7({ type: 2, focus: s6, trigger: O2 })), pe = o((s6, c2) => (o7({ type: 5, id: s6, dataRef: c2 }), () => o7({ type: 6, id: s6 }))), ue = o((s6) => (o7({ type: 7, id: s6 }), () => o7({ type: 7, id: null }))), X = o((s6) => u(d2.mode, { [0]() {
    return x2 == null ? void 0 : x2(s6);
  }, [1]() {
    let c2 = d2.value.slice(), O2 = c2.findIndex((C2) => I3(C2, s6));
    return O2 === -1 ? c2.push(s6) : c2.splice(O2, 1), x2 == null ? void 0 : x2(c2);
  } })), de = o((s6) => o7({ type: 3, value: s6 })), ce = o(() => o7({ type: 4 })), fe = (0, import_react3.useMemo)(() => ({ onChange: X, registerOption: pe, registerLabel: ue, goToOption: se, closeListbox: le, openListbox: ae, selectActiveOption: re, selectOption: ie, search: de, clearSearch: ce }), []), Te = { ref: S }, G = (0, import_react3.useRef)(null), be = p();
  return (0, import_react3.useEffect)(() => {
    G.current && r2 !== void 0 && be.addEventListener(G.current, "reset", () => {
      x2 == null || x2(r2);
    });
  }, [G, x2]), import_react3.default.createElement(J.Provider, { value: fe }, import_react3.default.createElement(q.Provider, { value: d2 }, import_react3.default.createElement(s3, { value: u(d2.listboxState, { [0]: d.Open, [1]: d.Closed }) }, t != null && g != null && e({ [t]: g }).map(([s6, c2], O2) => import_react3.default.createElement(f, { features: s2.Hidden, ref: O2 === 0 ? (C2) => {
    var Y;
    G.current = (Y = C2 == null ? void 0 : C2.closest("form")) != null ? Y : null;
  } : void 0, ...x({ key: s6, as: "input", type: "hidden", hidden: true, readOnly: true, form: l2, name: s6, value: c2 }) })), C({ ourProps: Te, theirProps: m, slot: H, defaultTag: Ke, name: "Listbox" }))));
}
var We = "button";
function Xe(e2, a) {
  var x2;
  let n = I(), { id: r2 = `headlessui-listbox-button-${n}`, ...l2 } = e2, t = w("Listbox.Button"), p2 = k("Listbox.Button"), u4 = y2(t.buttonRef, a), i2 = p(), b = o((T4) => {
    switch (T4.key) {
      case o4.Space:
      case o4.Enter:
      case o4.ArrowDown:
        T4.preventDefault(), p2.openListbox(), i2.nextFrame(() => {
          t.value || p2.goToOption(c.First);
        });
        break;
      case o4.ArrowUp:
        T4.preventDefault(), p2.openListbox(), i2.nextFrame(() => {
          t.value || p2.goToOption(c.Last);
        });
        break;
    }
  }), R = o((T4) => {
    switch (T4.key) {
      case o4.Space:
        T4.preventDefault();
        break;
    }
  }), m = o((T4) => {
    if (r(T4.currentTarget))
      return T4.preventDefault();
    t.listboxState === 0 ? (p2.closeListbox(), i2.nextFrame(() => {
      var o7;
      return (o7 = t.buttonRef.current) == null ? void 0 : o7.focus({ preventScroll: true });
    })) : (T4.preventDefault(), p2.openListbox());
  }), P = i(() => {
    if (t.labelId)
      return [t.labelId, r2].join(" ");
  }, [t.labelId, r2]), S = (0, import_react3.useMemo)(() => ({ open: t.listboxState === 0, disabled: t.disabled, value: t.value }), [t]), g = { ref: u4, id: r2, type: T2(e2, t.buttonRef), "aria-haspopup": "listbox", "aria-controls": (x2 = t.optionsRef.current) == null ? void 0 : x2.id, "aria-expanded": t.listboxState === 0, "aria-labelledby": P, disabled: t.disabled, onKeyDown: b, onKeyUp: R, onClick: m };
  return C({ ourProps: g, theirProps: l2, slot: S, defaultTag: We, name: "Listbox.Button" });
}
var $e = "label";
function ze(e2, a) {
  let n = I(), { id: r2 = `headlessui-listbox-label-${n}`, ...l2 } = e2, t = w("Listbox.Label"), p2 = k("Listbox.Label"), u4 = y2(t.labelRef, a);
  l(() => p2.registerLabel(r2), [r2]);
  let i2 = o(() => {
    var m;
    return (m = t.buttonRef.current) == null ? void 0 : m.focus({ preventScroll: true });
  }), b = (0, import_react3.useMemo)(() => ({ open: t.listboxState === 0, disabled: t.disabled }), [t]);
  return C({ ourProps: { ref: u4, id: r2, onClick: i2 }, theirProps: l2, slot: b, defaultTag: $e, name: "Listbox.Label" });
}
var Je = "ul";
var qe = O.RenderStrategy | O.Static;
function Ye(e2, a) {
  var T4;
  let n = I(), { id: r2 = `headlessui-listbox-options-${n}`, ...l2 } = e2, t = w("Listbox.Options"), p2 = k("Listbox.Options"), u4 = y2(t.optionsRef, a), i2 = p(), b = p(), R = u3(), m = (() => R !== null ? (R & d.Open) === d.Open : t.listboxState === 0)();
  (0, import_react3.useEffect)(() => {
    var L;
    let o7 = t.optionsRef.current;
    o7 && t.listboxState === 0 && o7 !== ((L = o3(o7)) == null ? void 0 : L.activeElement) && o7.focus({ preventScroll: true });
  }, [t.listboxState, t.optionsRef]);
  let P = o((o7) => {
    switch (b.dispose(), o7.key) {
      case o4.Space:
        if (t.searchQuery !== "")
          return o7.preventDefault(), o7.stopPropagation(), p2.search(o7.key);
      case o4.Enter:
        if (o7.preventDefault(), o7.stopPropagation(), t.activeOptionIndex !== null) {
          let { dataRef: L } = t.options[t.activeOptionIndex];
          p2.onChange(L.current.value);
        }
        t.mode === 0 && (p2.closeListbox(), o2().nextFrame(() => {
          var L;
          return (L = t.buttonRef.current) == null ? void 0 : L.focus({ preventScroll: true });
        }));
        break;
      case u(t.orientation, { vertical: o4.ArrowDown, horizontal: o4.ArrowRight }):
        return o7.preventDefault(), o7.stopPropagation(), p2.goToOption(c.Next);
      case u(t.orientation, { vertical: o4.ArrowUp, horizontal: o4.ArrowLeft }):
        return o7.preventDefault(), o7.stopPropagation(), p2.goToOption(c.Previous);
      case o4.Home:
      case o4.PageUp:
        return o7.preventDefault(), o7.stopPropagation(), p2.goToOption(c.First);
      case o4.End:
      case o4.PageDown:
        return o7.preventDefault(), o7.stopPropagation(), p2.goToOption(c.Last);
      case o4.Escape:
        return o7.preventDefault(), o7.stopPropagation(), p2.closeListbox(), i2.nextFrame(() => {
          var L;
          return (L = t.buttonRef.current) == null ? void 0 : L.focus({ preventScroll: true });
        });
      case o4.Tab:
        o7.preventDefault(), o7.stopPropagation();
        break;
      default:
        o7.key.length === 1 && (p2.search(o7.key), b.setTimeout(() => p2.clearSearch(), 350));
        break;
    }
  }), S = i(() => {
    var o7;
    return (o7 = t.buttonRef.current) == null ? void 0 : o7.id;
  }, [t.buttonRef.current]), g = (0, import_react3.useMemo)(() => ({ open: t.listboxState === 0 }), [t]), x2 = { "aria-activedescendant": t.activeOptionIndex === null || (T4 = t.options[t.activeOptionIndex]) == null ? void 0 : T4.id, "aria-multiselectable": t.mode === 1 ? true : void 0, "aria-labelledby": S, "aria-orientation": t.orientation, id: r2, onKeyDown: P, role: "listbox", tabIndex: 0, ref: u4 };
  return C({ ourProps: x2, theirProps: l2, slot: g, defaultTag: Je, features: qe, visible: m, name: "Listbox.Options" });
}
var Ze = "li";
function et(e2, a) {
  let n = I(), { id: r2 = `headlessui-listbox-option-${n}`, disabled: l2 = false, value: t, ...p2 } = e2, u4 = w("Listbox.Option"), i2 = k("Listbox.Option"), b = u4.activeOptionIndex !== null ? u4.options[u4.activeOptionIndex].id === r2 : false, R = u4.isSelected(t), m = (0, import_react3.useRef)(null), P = s4(m), S = s({ disabled: l2, value: t, domRef: m, get textValue() {
    return P();
  } }), g = y2(a, m);
  l(() => {
    if (u4.listboxState !== 0 || !b || u4.activationTrigger === 0)
      return;
    let A = o2();
    return A.requestAnimationFrame(() => {
      var d2, H;
      (H = (d2 = m.current) == null ? void 0 : d2.scrollIntoView) == null || H.call(d2, { block: "nearest" });
    }), A.dispose;
  }, [m, b, u4.listboxState, u4.activationTrigger, u4.activeOptionIndex]), l(() => i2.registerOption(r2, S), [S, r2]);
  let x2 = o((A) => {
    if (l2)
      return A.preventDefault();
    i2.onChange(t), u4.mode === 0 && (i2.closeListbox(), o2().nextFrame(() => {
      var d2;
      return (d2 = u4.buttonRef.current) == null ? void 0 : d2.focus({ preventScroll: true });
    }));
  }), T4 = o(() => {
    if (l2)
      return i2.goToOption(c.Nothing);
    i2.goToOption(c.Specific, r2);
  }), o7 = u2(), L = o((A) => o7.update(A)), U2 = o((A) => {
    o7.wasMoved(A) && (l2 || b || i2.goToOption(c.Specific, r2, 0));
  }), B = o((A) => {
    o7.wasMoved(A) && (l2 || b && i2.goToOption(c.Nothing));
  }), W = (0, import_react3.useMemo)(() => ({ active: b, selected: R, disabled: l2 }), [b, R, l2]);
  return C({ ourProps: { id: r2, ref: g, role: "option", tabIndex: l2 === true ? void 0 : -1, "aria-disabled": l2 === true ? true : void 0, "aria-selected": R, disabled: void 0, onClick: x2, onFocus: T4, onPointerEnter: L, onMouseEnter: L, onPointerMove: U2, onMouseMove: U2, onPointerLeave: B, onMouseLeave: B }, theirProps: p2, slot: W, defaultTag: Ze, name: "Listbox.Option" });
}
var tt = U(Qe);
var ot = U(Xe);
var nt = U(ze);
var it = U(Ye);
var rt = U(et);
var It = Object.assign(tt, { Button: ot, Label: nt, Options: it, Option: rt });

export {
  It
};
//# sourceMappingURL=/build/_shared/chunk-X55ANDUC.js.map
