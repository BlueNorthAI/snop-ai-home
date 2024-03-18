import {
  C,
  I,
  I2,
  O2 as O,
  T,
  U,
  d,
  f2 as f,
  f3 as f2,
  h,
  l,
  l2,
  o,
  o2,
  o3,
  o4,
  p,
  r,
  s2 as s,
  s4 as s2,
  s5 as s3,
  t3 as t,
  u,
  u2,
  v,
  x,
  y2 as y,
  y3 as y2
} from "/build/_shared/chunk-CWIOTFXK.js";
import {
  CircleStackIcon_default,
  LightBulbIcon_default,
  WrenchScrewdriverIcon_default
} from "/build/_shared/chunk-2HNBOA5V.js";
import {
  _objectWithoutPropertiesLoose
} from "/build/_shared/chunk-CO7DHVOA.js";
import {
  classNames,
  require_prop_types,
  validatePackage
} from "/build/_shared/chunk-WAFXOQC7.js";
import {
  _extends
} from "/build/_shared/chunk-ELWJTL4F.js";
import {
  Link
} from "/build/_shared/chunk-NON4LQMM.js";
import {
  require_react_dom
} from "/build/_shared/chunk-GIAAE3CH.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  createHotContext
} from "/build/_shared/chunk-K4XMOQHS.js";
import {
  require_react
} from "/build/_shared/chunk-BOXFZXVX.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// node_modules/@headlessui/react/dist/components/listbox/listbox.js
var import_react6 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/hooks/use-computed.js
var import_react = __toESM(require_react(), 1);
function i(e2, o10) {
  let [u5, t3] = (0, import_react.useState)(e2), r2 = s(e2);
  return l(() => t3(r2.current), [r2, t3, ...o10]), u5;
}

// node_modules/@headlessui/react/dist/hooks/use-controllable.js
var import_react2 = __toESM(require_react(), 1);
function T2(l5, r2, c4) {
  let [i3, s6] = (0, import_react2.useState)(c4), e2 = l5 !== void 0, t3 = (0, import_react2.useRef)(e2), u5 = (0, import_react2.useRef)(false), d2 = (0, import_react2.useRef)(false);
  return e2 && !t3.current && !u5.current ? (u5.current = true, t3.current = e2, console.error("A component is changing from uncontrolled to controlled. This may be caused by the value changing from undefined to a defined value, which should not happen.")) : !e2 && t3.current && !d2.current && (d2.current = true, t3.current = e2, console.error("A component is changing from controlled to uncontrolled. This may be caused by the value changing from a defined value to undefined, which should not happen.")), [e2 ? l5 : i3, o((n2) => (e2 || s6(n2), r2 == null ? void 0 : r2(n2)))];
}

// node_modules/@headlessui/react/dist/hooks/use-resolve-button-type.js
var import_react3 = __toESM(require_react(), 1);
function i2(t3) {
  var n2;
  if (t3.type)
    return t3.type;
  let e2 = (n2 = t3.as) != null ? n2 : "button";
  if (typeof e2 == "string" && e2.toLowerCase() === "button")
    return "button";
}
function T3(t3, e2) {
  let [n2, u5] = (0, import_react3.useState)(() => i2(t3));
  return l(() => {
    u5(i2(t3));
  }, [t3.type, t3.as]), l(() => {
    n2 || e2.current && e2.current instanceof HTMLButtonElement && !e2.current.hasAttribute("type") && u5("button");
  }, [n2, e2]), n2;
}

// node_modules/@headlessui/react/dist/hooks/use-text-value.js
var import_react4 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/utils/get-text-value.js
var a = /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;
function o7(e2) {
  var r2, i3;
  let n2 = (r2 = e2.innerText) != null ? r2 : "", t3 = e2.cloneNode(true);
  if (!(t3 instanceof HTMLElement))
    return n2;
  let u5 = false;
  for (let f7 of t3.querySelectorAll('[hidden],[aria-hidden],[role="img"]'))
    f7.remove(), u5 = true;
  let l5 = u5 ? (i3 = t3.innerText) != null ? i3 : "" : n2;
  return a.test(l5) && (l5 = l5.replace(a, "")), l5;
}
function g(e2) {
  let n2 = e2.getAttribute("aria-label");
  if (typeof n2 == "string")
    return n2.trim();
  let t3 = e2.getAttribute("aria-labelledby");
  if (t3) {
    let u5 = t3.split(" ").map((l5) => {
      let r2 = document.getElementById(l5);
      if (r2) {
        let i3 = r2.getAttribute("aria-label");
        return typeof i3 == "string" ? i3.trim() : o7(r2).trim();
      }
      return null;
    }).filter(Boolean);
    if (u5.length > 0)
      return u5.join(", ");
  }
  return o7(e2).trim();
}

// node_modules/@headlessui/react/dist/hooks/use-text-value.js
function s5(c4) {
  let t3 = (0, import_react4.useRef)(""), r2 = (0, import_react4.useRef)("");
  return o(() => {
    let e2 = c4.current;
    if (!e2)
      return "";
    let u5 = e2.innerText;
    if (t3.current === u5)
      return r2.current;
    let n2 = g(e2).trim().toLowerCase();
    return t3.current = u5, r2.current = n2, n2;
  });
}

// node_modules/@headlessui/react/dist/hooks/use-tracked-pointer.js
var import_react5 = __toESM(require_react(), 1);
function t2(e2) {
  return [e2.screenX, e2.screenY];
}
function u3() {
  let e2 = (0, import_react5.useRef)([-1, -1]);
  return { wasMoved(r2) {
    let n2 = t2(r2);
    return e2.current[0] === n2[0] && e2.current[1] === n2[1] ? false : (e2.current = n2, true);
  }, update(r2) {
    e2.current = t2(r2);
  } };
}

// node_modules/@headlessui/react/dist/utils/calculate-active-index.js
function u4(l5) {
  throw new Error("Unexpected object: " + l5);
}
var c = ((i3) => (i3[i3.First = 0] = "First", i3[i3.Previous = 1] = "Previous", i3[i3.Next = 2] = "Next", i3[i3.Last = 3] = "Last", i3[i3.Specific = 4] = "Specific", i3[i3.Nothing = 5] = "Nothing", i3))(c || {});
function f4(l5, n2) {
  let t3 = n2.resolveItems();
  if (t3.length <= 0)
    return null;
  let r2 = n2.resolveActiveIndex(), s6 = r2 != null ? r2 : -1;
  switch (l5.focus) {
    case 0: {
      for (let e2 = 0; e2 < t3.length; ++e2)
        if (!n2.resolveDisabled(t3[e2], e2, t3))
          return e2;
      return r2;
    }
    case 1: {
      for (let e2 = s6 - 1; e2 >= 0; --e2)
        if (!n2.resolveDisabled(t3[e2], e2, t3))
          return e2;
      return r2;
    }
    case 2: {
      for (let e2 = s6 + 1; e2 < t3.length; ++e2)
        if (!n2.resolveDisabled(t3[e2], e2, t3))
          return e2;
      return r2;
    }
    case 3: {
      for (let e2 = t3.length - 1; e2 >= 0; --e2)
        if (!n2.resolveDisabled(t3[e2], e2, t3))
          return e2;
      return r2;
    }
    case 4: {
      for (let e2 = 0; e2 < t3.length; ++e2)
        if (n2.resolveId(t3[e2], e2, t3) === l5.id)
          return e2;
      return r2;
    }
    case 5:
      return null;
    default:
      u4(l5);
  }
}

// node_modules/@headlessui/react/dist/utils/form.js
function e(i3 = {}, s6 = null, t3 = []) {
  for (let [r2, n2] of Object.entries(i3))
    o9(t3, f5(s6, r2), n2);
  return t3;
}
function f5(i3, s6) {
  return i3 ? i3 + "[" + s6 + "]" : s6;
}
function o9(i3, s6, t3) {
  if (Array.isArray(t3))
    for (let [r2, n2] of t3.entries())
      o9(i3, f5(s6, r2.toString()), n2);
  else
    t3 instanceof Date ? i3.push([s6, t3.toISOString()]) : typeof t3 == "boolean" ? i3.push([s6, t3 ? "1" : "0"]) : typeof t3 == "string" ? i3.push([s6, t3]) : typeof t3 == "number" ? i3.push([s6, `${t3}`]) : t3 == null ? i3.push([s6, ""]) : e(t3, s6, i3);
}

// node_modules/@headlessui/react/dist/components/listbox/listbox.js
var Be = ((n2) => (n2[n2.Open = 0] = "Open", n2[n2.Closed = 1] = "Closed", n2))(Be || {});
var He = ((n2) => (n2[n2.Single = 0] = "Single", n2[n2.Multi = 1] = "Multi", n2))(He || {});
var Ge = ((n2) => (n2[n2.Pointer = 0] = "Pointer", n2[n2.Other = 1] = "Other", n2))(Ge || {});
var Ne = ((i3) => (i3[i3.OpenListbox = 0] = "OpenListbox", i3[i3.CloseListbox = 1] = "CloseListbox", i3[i3.GoToOption = 2] = "GoToOption", i3[i3.Search = 3] = "Search", i3[i3.ClearSearch = 4] = "ClearSearch", i3[i3.RegisterOption = 5] = "RegisterOption", i3[i3.UnregisterOption = 6] = "UnregisterOption", i3[i3.RegisterLabel = 7] = "RegisterLabel", i3))(Ne || {});
function z(e2, a2 = (n2) => n2) {
  let n2 = e2.activeOptionIndex !== null ? e2.options[e2.activeOptionIndex] : null, r2 = I2(a2(e2.options.slice()), (t3) => t3.dataRef.current.domRef.current), l5 = n2 ? r2.indexOf(n2) : null;
  return l5 === -1 && (l5 = null), { options: r2, activeOptionIndex: l5 };
}
var je = { [1](e2) {
  return e2.dataRef.current.disabled || e2.listboxState === 1 ? e2 : { ...e2, activeOptionIndex: null, listboxState: 1 };
}, [0](e2) {
  if (e2.dataRef.current.disabled || e2.listboxState === 0)
    return e2;
  let a2 = e2.activeOptionIndex, { isSelected: n2 } = e2.dataRef.current, r2 = e2.options.findIndex((l5) => n2(l5.dataRef.current.value));
  return r2 !== -1 && (a2 = r2), { ...e2, listboxState: 0, activeOptionIndex: a2 };
}, [2](e2, a2) {
  var l5;
  if (e2.dataRef.current.disabled || e2.listboxState === 1)
    return e2;
  let n2 = z(e2), r2 = f4(a2, { resolveItems: () => n2.options, resolveActiveIndex: () => n2.activeOptionIndex, resolveId: (t3) => t3.id, resolveDisabled: (t3) => t3.dataRef.current.disabled });
  return { ...e2, ...n2, searchQuery: "", activeOptionIndex: r2, activationTrigger: (l5 = a2.trigger) != null ? l5 : 1 };
}, [3]: (e2, a2) => {
  if (e2.dataRef.current.disabled || e2.listboxState === 1)
    return e2;
  let r2 = e2.searchQuery !== "" ? 0 : 1, l5 = e2.searchQuery + a2.value.toLowerCase(), p2 = (e2.activeOptionIndex !== null ? e2.options.slice(e2.activeOptionIndex + r2).concat(e2.options.slice(0, e2.activeOptionIndex + r2)) : e2.options).find((i3) => {
    var b2;
    return !i3.dataRef.current.disabled && ((b2 = i3.dataRef.current.textValue) == null ? void 0 : b2.startsWith(l5));
  }), u5 = p2 ? e2.options.indexOf(p2) : -1;
  return u5 === -1 || u5 === e2.activeOptionIndex ? { ...e2, searchQuery: l5 } : { ...e2, searchQuery: l5, activeOptionIndex: u5, activationTrigger: 1 };
}, [4](e2) {
  return e2.dataRef.current.disabled || e2.listboxState === 1 || e2.searchQuery === "" ? e2 : { ...e2, searchQuery: "" };
}, [5]: (e2, a2) => {
  let n2 = { id: a2.id, dataRef: a2.dataRef }, r2 = z(e2, (l5) => [...l5, n2]);
  return e2.activeOptionIndex === null && e2.dataRef.current.isSelected(a2.dataRef.current.value) && (r2.activeOptionIndex = r2.options.indexOf(n2)), { ...e2, ...r2 };
}, [6]: (e2, a2) => {
  let n2 = z(e2, (r2) => {
    let l5 = r2.findIndex((t3) => t3.id === a2.id);
    return l5 !== -1 && r2.splice(l5, 1), r2;
  });
  return { ...e2, ...n2, activationTrigger: 1 };
}, [7]: (e2, a2) => ({ ...e2, labelId: a2.id }) };
var J = (0, import_react6.createContext)(null);
J.displayName = "ListboxActionsContext";
function k(e2) {
  let a2 = (0, import_react6.useContext)(J);
  if (a2 === null) {
    let n2 = new Error(`<${e2} /> is missing a parent <Listbox /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(n2, k), n2;
  }
  return a2;
}
var q = (0, import_react6.createContext)(null);
q.displayName = "ListboxDataContext";
function w(e2) {
  let a2 = (0, import_react6.useContext)(q);
  if (a2 === null) {
    let n2 = new Error(`<${e2} /> is missing a parent <Listbox /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(n2, w), n2;
  }
  return a2;
}
function Ve(e2, a2) {
  return u(a2.type, je, e2, a2);
}
var Ke = import_react6.Fragment;
function Qe(e2, a2) {
  let { value: n2, defaultValue: r2, form: l5, name: t3, onChange: p2, by: u5 = (s6, c4) => s6 === c4, disabled: i3 = false, horizontal: b2 = false, multiple: R = false, ...m2 } = e2;
  const P = b2 ? "horizontal" : "vertical";
  let S2 = y2(a2), [g3 = R ? [] : void 0, x2] = T2(n2, p2, r2), [T4, o10] = (0, import_react6.useReducer)(Ve, { dataRef: (0, import_react6.createRef)(), listboxState: 1, options: [], searchQuery: "", labelId: null, activeOptionIndex: null, activationTrigger: 1 }), L = (0, import_react6.useRef)({ static: false, hold: false }), U3 = (0, import_react6.useRef)(null), B = (0, import_react6.useRef)(null), W = (0, import_react6.useRef)(null), I4 = o(typeof u5 == "string" ? (s6, c4) => {
    let O2 = u5;
    return (s6 == null ? void 0 : s6[O2]) === (c4 == null ? void 0 : c4[O2]);
  } : u5), A = (0, import_react6.useCallback)((s6) => u(d2.mode, { [1]: () => g3.some((c4) => I4(c4, s6)), [0]: () => I4(g3, s6) }), [g3]), d2 = (0, import_react6.useMemo)(() => ({ ...T4, value: g3, disabled: i3, mode: R ? 1 : 0, orientation: P, compare: I4, isSelected: A, optionsPropsRef: L, labelRef: U3, buttonRef: B, optionsRef: W }), [g3, i3, R, T4]);
  l(() => {
    T4.dataRef.current = d2;
  }, [d2]), y([d2.buttonRef, d2.optionsRef], (s6, c4) => {
    var O2;
    o10({ type: 1 }), h(c4, T.Loose) || (s6.preventDefault(), (O2 = d2.buttonRef.current) == null || O2.focus());
  }, d2.listboxState === 0);
  let H = (0, import_react6.useMemo)(() => ({ open: d2.listboxState === 0, disabled: i3, value: g3 }), [d2, i3, g3]), ie = o((s6) => {
    let c4 = d2.options.find((O2) => O2.id === s6);
    c4 && X2(c4.dataRef.current.value);
  }), re = o(() => {
    if (d2.activeOptionIndex !== null) {
      let { dataRef: s6, id: c4 } = d2.options[d2.activeOptionIndex];
      X2(s6.current.value), o10({ type: 2, focus: c.Specific, id: c4 });
    }
  }), ae2 = o(() => o10({ type: 0 })), le2 = o(() => o10({ type: 1 })), se2 = o((s6, c4, O2) => s6 === c.Specific ? o10({ type: 2, focus: c.Specific, id: c4, trigger: O2 }) : o10({ type: 2, focus: s6, trigger: O2 })), pe = o((s6, c4) => (o10({ type: 5, id: s6, dataRef: c4 }), () => o10({ type: 6, id: s6 }))), ue2 = o((s6) => (o10({ type: 7, id: s6 }), () => o10({ type: 7, id: null }))), X2 = o((s6) => u(d2.mode, { [0]() {
    return x2 == null ? void 0 : x2(s6);
  }, [1]() {
    let c4 = d2.value.slice(), O2 = c4.findIndex((C2) => I4(C2, s6));
    return O2 === -1 ? c4.push(s6) : c4.splice(O2, 1), x2 == null ? void 0 : x2(c4);
  } })), de = o((s6) => o10({ type: 3, value: s6 })), ce = o(() => o10({ type: 4 })), fe = (0, import_react6.useMemo)(() => ({ onChange: X2, registerOption: pe, registerLabel: ue2, goToOption: se2, closeListbox: le2, openListbox: ae2, selectActiveOption: re, selectOption: ie, search: de, clearSearch: ce }), []), Te = { ref: S2 }, G = (0, import_react6.useRef)(null), be = p();
  return (0, import_react6.useEffect)(() => {
    G.current && r2 !== void 0 && be.addEventListener(G.current, "reset", () => {
      x2 == null || x2(r2);
    });
  }, [G, x2]), import_react6.default.createElement(J.Provider, { value: fe }, import_react6.default.createElement(q.Provider, { value: d2 }, import_react6.default.createElement(s3, { value: u(d2.listboxState, { [0]: d.Open, [1]: d.Closed }) }, t3 != null && g3 != null && e({ [t3]: g3 }).map(([s6, c4], O2) => import_react6.default.createElement(f, { features: s2.Hidden, ref: O2 === 0 ? (C2) => {
    var Y;
    G.current = (Y = C2 == null ? void 0 : C2.closest("form")) != null ? Y : null;
  } : void 0, ...x({ key: s6, as: "input", type: "hidden", hidden: true, readOnly: true, form: l5, name: s6, value: c4 }) })), C({ ourProps: Te, theirProps: m2, slot: H, defaultTag: Ke, name: "Listbox" }))));
}
var We = "button";
function Xe(e2, a2) {
  var x2;
  let n2 = I(), { id: r2 = `headlessui-listbox-button-${n2}`, ...l5 } = e2, t3 = w("Listbox.Button"), p2 = k("Listbox.Button"), u5 = y2(t3.buttonRef, a2), i3 = p(), b2 = o((T4) => {
    switch (T4.key) {
      case o4.Space:
      case o4.Enter:
      case o4.ArrowDown:
        T4.preventDefault(), p2.openListbox(), i3.nextFrame(() => {
          t3.value || p2.goToOption(c.First);
        });
        break;
      case o4.ArrowUp:
        T4.preventDefault(), p2.openListbox(), i3.nextFrame(() => {
          t3.value || p2.goToOption(c.Last);
        });
        break;
    }
  }), R = o((T4) => {
    switch (T4.key) {
      case o4.Space:
        T4.preventDefault();
        break;
    }
  }), m2 = o((T4) => {
    if (r(T4.currentTarget))
      return T4.preventDefault();
    t3.listboxState === 0 ? (p2.closeListbox(), i3.nextFrame(() => {
      var o10;
      return (o10 = t3.buttonRef.current) == null ? void 0 : o10.focus({ preventScroll: true });
    })) : (T4.preventDefault(), p2.openListbox());
  }), P = i(() => {
    if (t3.labelId)
      return [t3.labelId, r2].join(" ");
  }, [t3.labelId, r2]), S2 = (0, import_react6.useMemo)(() => ({ open: t3.listboxState === 0, disabled: t3.disabled, value: t3.value }), [t3]), g3 = { ref: u5, id: r2, type: T3(e2, t3.buttonRef), "aria-haspopup": "listbox", "aria-controls": (x2 = t3.optionsRef.current) == null ? void 0 : x2.id, "aria-expanded": t3.listboxState === 0, "aria-labelledby": P, disabled: t3.disabled, onKeyDown: b2, onKeyUp: R, onClick: m2 };
  return C({ ourProps: g3, theirProps: l5, slot: S2, defaultTag: We, name: "Listbox.Button" });
}
var $e = "label";
function ze(e2, a2) {
  let n2 = I(), { id: r2 = `headlessui-listbox-label-${n2}`, ...l5 } = e2, t3 = w("Listbox.Label"), p2 = k("Listbox.Label"), u5 = y2(t3.labelRef, a2);
  l(() => p2.registerLabel(r2), [r2]);
  let i3 = o(() => {
    var m2;
    return (m2 = t3.buttonRef.current) == null ? void 0 : m2.focus({ preventScroll: true });
  }), b2 = (0, import_react6.useMemo)(() => ({ open: t3.listboxState === 0, disabled: t3.disabled }), [t3]);
  return C({ ourProps: { ref: u5, id: r2, onClick: i3 }, theirProps: l5, slot: b2, defaultTag: $e, name: "Listbox.Label" });
}
var Je = "ul";
var qe = O.RenderStrategy | O.Static;
function Ye(e2, a2) {
  var T4;
  let n2 = I(), { id: r2 = `headlessui-listbox-options-${n2}`, ...l5 } = e2, t3 = w("Listbox.Options"), p2 = k("Listbox.Options"), u5 = y2(t3.optionsRef, a2), i3 = p(), b2 = p(), R = u2(), m2 = (() => R !== null ? (R & d.Open) === d.Open : t3.listboxState === 0)();
  (0, import_react6.useEffect)(() => {
    var L;
    let o10 = t3.optionsRef.current;
    o10 && t3.listboxState === 0 && o10 !== ((L = o3(o10)) == null ? void 0 : L.activeElement) && o10.focus({ preventScroll: true });
  }, [t3.listboxState, t3.optionsRef]);
  let P = o((o10) => {
    switch (b2.dispose(), o10.key) {
      case o4.Space:
        if (t3.searchQuery !== "")
          return o10.preventDefault(), o10.stopPropagation(), p2.search(o10.key);
      case o4.Enter:
        if (o10.preventDefault(), o10.stopPropagation(), t3.activeOptionIndex !== null) {
          let { dataRef: L } = t3.options[t3.activeOptionIndex];
          p2.onChange(L.current.value);
        }
        t3.mode === 0 && (p2.closeListbox(), o2().nextFrame(() => {
          var L;
          return (L = t3.buttonRef.current) == null ? void 0 : L.focus({ preventScroll: true });
        }));
        break;
      case u(t3.orientation, { vertical: o4.ArrowDown, horizontal: o4.ArrowRight }):
        return o10.preventDefault(), o10.stopPropagation(), p2.goToOption(c.Next);
      case u(t3.orientation, { vertical: o4.ArrowUp, horizontal: o4.ArrowLeft }):
        return o10.preventDefault(), o10.stopPropagation(), p2.goToOption(c.Previous);
      case o4.Home:
      case o4.PageUp:
        return o10.preventDefault(), o10.stopPropagation(), p2.goToOption(c.First);
      case o4.End:
      case o4.PageDown:
        return o10.preventDefault(), o10.stopPropagation(), p2.goToOption(c.Last);
      case o4.Escape:
        return o10.preventDefault(), o10.stopPropagation(), p2.closeListbox(), i3.nextFrame(() => {
          var L;
          return (L = t3.buttonRef.current) == null ? void 0 : L.focus({ preventScroll: true });
        });
      case o4.Tab:
        o10.preventDefault(), o10.stopPropagation();
        break;
      default:
        o10.key.length === 1 && (p2.search(o10.key), b2.setTimeout(() => p2.clearSearch(), 350));
        break;
    }
  }), S2 = i(() => {
    var o10;
    return (o10 = t3.buttonRef.current) == null ? void 0 : o10.id;
  }, [t3.buttonRef.current]), g3 = (0, import_react6.useMemo)(() => ({ open: t3.listboxState === 0 }), [t3]), x2 = { "aria-activedescendant": t3.activeOptionIndex === null || (T4 = t3.options[t3.activeOptionIndex]) == null ? void 0 : T4.id, "aria-multiselectable": t3.mode === 1 ? true : void 0, "aria-labelledby": S2, "aria-orientation": t3.orientation, id: r2, onKeyDown: P, role: "listbox", tabIndex: 0, ref: u5 };
  return C({ ourProps: x2, theirProps: l5, slot: g3, defaultTag: Je, features: qe, visible: m2, name: "Listbox.Options" });
}
var Ze = "li";
function et(e2, a2) {
  let n2 = I(), { id: r2 = `headlessui-listbox-option-${n2}`, disabled: l5 = false, value: t3, ...p2 } = e2, u5 = w("Listbox.Option"), i3 = k("Listbox.Option"), b2 = u5.activeOptionIndex !== null ? u5.options[u5.activeOptionIndex].id === r2 : false, R = u5.isSelected(t3), m2 = (0, import_react6.useRef)(null), P = s5(m2), S2 = s({ disabled: l5, value: t3, domRef: m2, get textValue() {
    return P();
  } }), g3 = y2(a2, m2);
  l(() => {
    if (u5.listboxState !== 0 || !b2 || u5.activationTrigger === 0)
      return;
    let A = o2();
    return A.requestAnimationFrame(() => {
      var d2, H;
      (H = (d2 = m2.current) == null ? void 0 : d2.scrollIntoView) == null || H.call(d2, { block: "nearest" });
    }), A.dispose;
  }, [m2, b2, u5.listboxState, u5.activationTrigger, u5.activeOptionIndex]), l(() => i3.registerOption(r2, S2), [S2, r2]);
  let x2 = o((A) => {
    if (l5)
      return A.preventDefault();
    i3.onChange(t3), u5.mode === 0 && (i3.closeListbox(), o2().nextFrame(() => {
      var d2;
      return (d2 = u5.buttonRef.current) == null ? void 0 : d2.focus({ preventScroll: true });
    }));
  }), T4 = o(() => {
    if (l5)
      return i3.goToOption(c.Nothing);
    i3.goToOption(c.Specific, r2);
  }), o10 = u3(), L = o((A) => o10.update(A)), U3 = o((A) => {
    o10.wasMoved(A) && (l5 || b2 || i3.goToOption(c.Specific, r2, 0));
  }), B = o((A) => {
    o10.wasMoved(A) && (l5 || b2 && i3.goToOption(c.Nothing));
  }), W = (0, import_react6.useMemo)(() => ({ active: b2, selected: R, disabled: l5 }), [b2, R, l5]);
  return C({ ourProps: { id: r2, ref: g3, role: "option", tabIndex: l5 === true ? void 0 : -1, "aria-disabled": l5 === true ? true : void 0, "aria-selected": R, disabled: void 0, onClick: x2, onFocus: T4, onPointerEnter: L, onMouseEnter: L, onPointerMove: U3, onMouseMove: U3, onPointerLeave: B, onMouseLeave: B }, theirProps: p2, slot: W, defaultTag: Ze, name: "Listbox.Option" });
}
var tt = U(Qe);
var ot = U(Xe);
var nt = U(ze);
var it = U(Ye);
var rt = U(et);
var It = Object.assign(tt, { Button: ot, Label: nt, Options: it, Option: rt });

// node_modules/@headlessui/react/dist/components/transitions/transition.js
var import_react8 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/hooks/use-flags.js
var import_react7 = __toESM(require_react(), 1);
function c2(a2 = 0) {
  let [l5, r2] = (0, import_react7.useState)(a2), t3 = f2(), o10 = (0, import_react7.useCallback)((e2) => {
    t3.current && r2((u5) => u5 | e2);
  }, [l5, t3]), m2 = (0, import_react7.useCallback)((e2) => Boolean(l5 & e2), [l5]), s6 = (0, import_react7.useCallback)((e2) => {
    t3.current && r2((u5) => u5 & ~e2);
  }, [r2, t3]), g3 = (0, import_react7.useCallback)((e2) => {
    t3.current && r2((u5) => u5 ^ e2);
  }, [r2]);
  return { flags: l5, addFlag: o10, hasFlag: m2, removeFlag: s6, toggleFlag: g3 };
}

// node_modules/@headlessui/react/dist/utils/once.js
function l4(r2) {
  let e2 = { called: false };
  return (...t3) => {
    if (!e2.called)
      return e2.called = true, r2(...t3);
  };
}

// node_modules/@headlessui/react/dist/components/transitions/utils/transition.js
function g2(t3, ...e2) {
  t3 && e2.length > 0 && t3.classList.add(...e2);
}
function v2(t3, ...e2) {
  t3 && e2.length > 0 && t3.classList.remove(...e2);
}
function b(t3, e2) {
  let n2 = o2();
  if (!t3)
    return n2.dispose;
  let { transitionDuration: m2, transitionDelay: a2 } = getComputedStyle(t3), [u5, p2] = [m2, a2].map((l5) => {
    let [r2 = 0] = l5.split(",").filter(Boolean).map((i3) => i3.includes("ms") ? parseFloat(i3) : parseFloat(i3) * 1e3).sort((i3, T4) => T4 - i3);
    return r2;
  }), o10 = u5 + p2;
  if (o10 !== 0) {
    n2.group((r2) => {
      r2.setTimeout(() => {
        e2(), r2.dispose();
      }, o10), r2.addEventListener(t3, "transitionrun", (i3) => {
        i3.target === i3.currentTarget && r2.dispose();
      });
    });
    let l5 = n2.addEventListener(t3, "transitionend", (r2) => {
      r2.target === r2.currentTarget && (e2(), l5());
    });
  } else
    e2();
  return n2.add(() => e2()), n2.dispose;
}
function M(t3, e2, n2, m2) {
  let a2 = n2 ? "enter" : "leave", u5 = o2(), p2 = m2 !== void 0 ? l4(m2) : () => {
  };
  a2 === "enter" && (t3.removeAttribute("hidden"), t3.style.display = "");
  let o10 = u(a2, { enter: () => e2.enter, leave: () => e2.leave }), l5 = u(a2, { enter: () => e2.enterTo, leave: () => e2.leaveTo }), r2 = u(a2, { enter: () => e2.enterFrom, leave: () => e2.leaveFrom });
  return v2(t3, ...e2.base, ...e2.enter, ...e2.enterTo, ...e2.enterFrom, ...e2.leave, ...e2.leaveFrom, ...e2.leaveTo, ...e2.entered), g2(t3, ...e2.base, ...o10, ...r2), u5.nextFrame(() => {
    v2(t3, ...e2.base, ...o10, ...r2), g2(t3, ...e2.base, ...o10, ...l5), b(t3, () => (v2(t3, ...e2.base, ...o10), g2(t3, ...e2.base, ...e2.entered), p2()));
  }), u5.dispose;
}

// node_modules/@headlessui/react/dist/hooks/use-transition.js
function D({ immediate: t3, container: s6, direction: n2, classes: u5, onStart: a2, onStop: c4 }) {
  let l5 = f2(), d2 = p(), e2 = s(n2);
  l(() => {
    t3 && (e2.current = "enter");
  }, [t3]), l(() => {
    let r2 = o2();
    d2.add(r2.dispose);
    let i3 = s6.current;
    if (i3 && e2.current !== "idle" && l5.current)
      return r2.dispose(), a2.current(e2.current), r2.add(M(i3, u5.current, e2.current === "enter", () => {
        r2.dispose(), c4.current(e2.current);
      })), r2.dispose;
  }, [n2]);
}

// node_modules/@headlessui/react/dist/components/transitions/transition.js
function S(t3 = "") {
  return t3.split(/\s+/).filter((n2) => n2.length > 1);
}
var I3 = (0, import_react8.createContext)(null);
I3.displayName = "TransitionContext";
var Se = ((r2) => (r2.Visible = "visible", r2.Hidden = "hidden", r2))(Se || {});
function ye2() {
  let t3 = (0, import_react8.useContext)(I3);
  if (t3 === null)
    throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
  return t3;
}
function xe2() {
  let t3 = (0, import_react8.useContext)(M2);
  if (t3 === null)
    throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
  return t3;
}
var M2 = (0, import_react8.createContext)(null);
M2.displayName = "NestingContext";
function U2(t3) {
  return "children" in t3 ? U2(t3.children) : t3.current.filter(({ el: n2 }) => n2.current !== null).filter(({ state: n2 }) => n2 === "visible").length > 0;
}
function se(t3, n2) {
  let r2 = s(t3), s6 = (0, import_react8.useRef)([]), R = f2(), D2 = p(), p2 = o((i3, e2 = v.Hidden) => {
    let a2 = s6.current.findIndex(({ el: o10 }) => o10 === i3);
    a2 !== -1 && (u(e2, { [v.Unmount]() {
      s6.current.splice(a2, 1);
    }, [v.Hidden]() {
      s6.current[a2].state = "hidden";
    } }), D2.microTask(() => {
      var o10;
      !U2(s6) && R.current && ((o10 = r2.current) == null || o10.call(r2));
    }));
  }), x2 = o((i3) => {
    let e2 = s6.current.find(({ el: a2 }) => a2 === i3);
    return e2 ? e2.state !== "visible" && (e2.state = "visible") : s6.current.push({ el: i3, state: "visible" }), () => p2(i3, v.Unmount);
  }), h3 = (0, import_react8.useRef)([]), v3 = (0, import_react8.useRef)(Promise.resolve()), u5 = (0, import_react8.useRef)({ enter: [], leave: [], idle: [] }), g3 = o((i3, e2, a2) => {
    h3.current.splice(0), n2 && (n2.chains.current[e2] = n2.chains.current[e2].filter(([o10]) => o10 !== i3)), n2 == null || n2.chains.current[e2].push([i3, new Promise((o10) => {
      h3.current.push(o10);
    })]), n2 == null || n2.chains.current[e2].push([i3, new Promise((o10) => {
      Promise.all(u5.current[e2].map(([f7, N2]) => N2)).then(() => o10());
    })]), e2 === "enter" ? v3.current = v3.current.then(() => n2 == null ? void 0 : n2.wait.current).then(() => a2(e2)) : a2(e2);
  }), d2 = o((i3, e2, a2) => {
    Promise.all(u5.current[e2].splice(0).map(([o10, f7]) => f7)).then(() => {
      var o10;
      (o10 = h3.current.shift()) == null || o10();
    }).then(() => a2(e2));
  });
  return (0, import_react8.useMemo)(() => ({ children: s6, register: x2, unregister: p2, onStart: g3, onStop: d2, wait: v3, chains: u5 }), [x2, p2, s6, g3, d2, u5, v3]);
}
function Ne2() {
}
var Pe = ["beforeEnter", "afterEnter", "beforeLeave", "afterLeave"];
function ae(t3) {
  var r2;
  let n2 = {};
  for (let s6 of Pe)
    n2[s6] = (r2 = t3[s6]) != null ? r2 : Ne2;
  return n2;
}
function Re(t3) {
  let n2 = (0, import_react8.useRef)(ae(t3));
  return (0, import_react8.useEffect)(() => {
    n2.current = ae(t3);
  }, [t3]), n2;
}
var De = "div";
var le = O.RenderStrategy;
function He2(t3, n2) {
  var Q, Y;
  let { beforeEnter: r2, afterEnter: s6, beforeLeave: R, afterLeave: D2, enter: p2, enterFrom: x2, enterTo: h3, entered: v3, leave: u5, leaveFrom: g3, leaveTo: d2, ...i3 } = t3, e2 = (0, import_react8.useRef)(null), a2 = y2(e2, n2), o10 = (Q = i3.unmount) == null || Q ? v.Unmount : v.Hidden, { show: f7, appear: N2, initial: T4 } = ye2(), [l5, j] = (0, import_react8.useState)(f7 ? "visible" : "hidden"), z2 = xe2(), { register: L, unregister: O2 } = z2;
  (0, import_react8.useEffect)(() => L(e2), [L, e2]), (0, import_react8.useEffect)(() => {
    if (o10 === v.Hidden && e2.current) {
      if (f7 && l5 !== "visible") {
        j("visible");
        return;
      }
      return u(l5, { ["hidden"]: () => O2(e2), ["visible"]: () => L(e2) });
    }
  }, [l5, e2, L, O2, f7, o10]);
  let k2 = s({ base: S(i3.className), enter: S(p2), enterFrom: S(x2), enterTo: S(h3), entered: S(v3), leave: S(u5), leaveFrom: S(g3), leaveTo: S(d2) }), V = Re({ beforeEnter: r2, afterEnter: s6, beforeLeave: R, afterLeave: D2 }), G = l2();
  (0, import_react8.useEffect)(() => {
    if (G && l5 === "visible" && e2.current === null)
      throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
  }, [e2, l5, G]);
  let Te = T4 && !N2, K = N2 && f7 && T4, de = (() => !G || Te ? "idle" : f7 ? "enter" : "leave")(), H = c2(0), fe = o((C2) => u(C2, { enter: () => {
    H.addFlag(d.Opening), V.current.beforeEnter();
  }, leave: () => {
    H.addFlag(d.Closing), V.current.beforeLeave();
  }, idle: () => {
  } })), me = o((C2) => u(C2, { enter: () => {
    H.removeFlag(d.Opening), V.current.afterEnter();
  }, leave: () => {
    H.removeFlag(d.Closing), V.current.afterLeave();
  }, idle: () => {
  } })), w2 = se(() => {
    j("hidden"), O2(e2);
  }, z2), B = (0, import_react8.useRef)(false);
  D({ immediate: K, container: e2, classes: k2, direction: de, onStart: s((C2) => {
    B.current = true, w2.onStart(e2, C2, fe);
  }), onStop: s((C2) => {
    B.current = false, w2.onStop(e2, C2, me), C2 === "leave" && !U2(w2) && (j("hidden"), O2(e2));
  }) });
  let P = i3, ce = { ref: a2 };
  return K ? P = { ...P, className: t(i3.className, ...k2.current.enter, ...k2.current.enterFrom) } : B.current && (P.className = t(i3.className, (Y = e2.current) == null ? void 0 : Y.className), P.className === "" && delete P.className), import_react8.default.createElement(M2.Provider, { value: w2 }, import_react8.default.createElement(s3, { value: u(l5, { ["visible"]: d.Open, ["hidden"]: d.Closed }) | H.flags }, C({ ourProps: ce, theirProps: P, defaultTag: De, features: le, visible: l5 === "visible", name: "Transition.Child" })));
}
function Fe(t3, n2) {
  let { show: r2, appear: s6 = false, unmount: R = true, ...D2 } = t3, p2 = (0, import_react8.useRef)(null), x2 = y2(p2, n2);
  l2();
  let h3 = u2();
  if (r2 === void 0 && h3 !== null && (r2 = (h3 & d.Open) === d.Open), ![true, false].includes(r2))
    throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");
  let [v3, u5] = (0, import_react8.useState)(r2 ? "visible" : "hidden"), g3 = se(() => {
    u5("hidden");
  }), [d2, i3] = (0, import_react8.useState)(true), e2 = (0, import_react8.useRef)([r2]);
  l(() => {
    d2 !== false && e2.current[e2.current.length - 1] !== r2 && (e2.current.push(r2), i3(false));
  }, [e2, r2]);
  let a2 = (0, import_react8.useMemo)(() => ({ show: r2, appear: s6, initial: d2 }), [r2, s6, d2]);
  (0, import_react8.useEffect)(() => {
    if (r2)
      u5("visible");
    else if (!U2(g3))
      u5("hidden");
    else {
      let T4 = p2.current;
      if (!T4)
        return;
      let l5 = T4.getBoundingClientRect();
      l5.x === 0 && l5.y === 0 && l5.width === 0 && l5.height === 0 && u5("hidden");
    }
  }, [r2, g3]);
  let o10 = { unmount: R }, f7 = o(() => {
    var T4;
    d2 && i3(false), (T4 = t3.beforeEnter) == null || T4.call(t3);
  }), N2 = o(() => {
    var T4;
    d2 && i3(false), (T4 = t3.beforeLeave) == null || T4.call(t3);
  });
  return import_react8.default.createElement(M2.Provider, { value: g3 }, import_react8.default.createElement(I3.Provider, { value: a2 }, C({ ourProps: { ...o10, as: import_react8.Fragment, children: import_react8.default.createElement(ue, { ref: x2, ...o10, ...D2, beforeEnter: f7, beforeLeave: N2 }) }, theirProps: {}, defaultTag: import_react8.Fragment, features: le, visible: v3 === "visible", name: "Transition" })));
}
function _e(t3, n2) {
  let r2 = (0, import_react8.useContext)(I3) !== null, s6 = u2() !== null;
  return import_react8.default.createElement(import_react8.default.Fragment, null, !r2 && s6 ? import_react8.default.createElement(q2, { ref: n2, ...t3 }) : import_react8.default.createElement(ue, { ref: n2, ...t3 }));
}
var q2 = U(Fe);
var ue = U(He2);
var Le2 = U(_e);
var qe2 = Object.assign(q2, { Child: Le2, Root: q2 });

// node_modules/@progress/kendo-react-common/dist/es/getTabIndex.js
var DISABLED_TABINDEX = -1;
var DEFAULT_TABINDEX = 0;
var getTabIndex = function(tabIndex, disabled, useDefaultTabIndexWhenDisabled) {
  var parsedTabIndex = typeof tabIndex === "string" ? parseInt(tabIndex, void 0) : tabIndex;
  if (parsedTabIndex === NaN) {
    return void 0;
  }
  return parsedTabIndex !== void 0 ? parsedTabIndex : disabled ? useDefaultTabIndexWhenDisabled ? void 0 : DISABLED_TABINDEX : DEFAULT_TABINDEX;
};

// node_modules/@progress/kendo-react-common/dist/es/noop.js
var noop = function() {
};

// node_modules/@progress/kendo-react-common/dist/es/hooks/useRtl.js
var React = __toESM(require_react());
function useRtl(elementRef, initialDir, args) {
  var _a = React.useState(initialDir), dir = _a[0], setDir = _a[1];
  React.useEffect(function() {
    if (!dir && window && elementRef.current) {
      var rtlCandidate = window.getComputedStyle(elementRef.current).direction;
      if (rtlCandidate) {
        setDir(rtlCandidate);
      }
    }
  }, args);
  return dir;
}

// node_modules/@progress/kendo-react-progressbars/dist/es/common/constants.js
var LABEL_DECIMALS = 3;
var DEFAULT_ANIMATION_DURATION = 400;
var NO_ANIMATION = 0;

// node_modules/@progress/kendo-react-progressbars/dist/es/common/utils.js
var truncateNumber = function(value) {
  var numberParts = value.toString().split(".");
  return numberParts.length === 1 ? "".concat(numberParts[0]) : "".concat(numberParts[0], ".").concat(numberParts[1].substr(0, LABEL_DECIMALS));
};
var calculatePercentage = function(min, max, value) {
  var onePercent = Math.abs((max - min) / 100);
  return Math.abs((value - min) / onePercent);
};
var updateProgress = function(progressRef, progressWrapRef, percentage, isVertical) {
  var progressPercentage = Math.max(percentage, 0.01);
  var progressWrapPercentage = 100 / progressPercentage * 100;
  if (progressRef.current && progressWrapRef.current) {
    progressRef.current.style.width = !isVertical ? "".concat(progressPercentage, "%") : "100%";
    progressWrapRef.current.style.width = !isVertical ? "".concat(progressWrapPercentage, "%") : "100%";
    progressRef.current.style.height = isVertical ? "".concat(progressPercentage, "%") : "100%";
    progressWrapRef.current.style.height = isVertical ? "".concat(progressWrapPercentage, "%") : "100%";
  }
};

// node_modules/@progress/kendo-react-progressbars/dist/es/package-metadata.js
var packageMetadata = {
  name: "@progress/kendo-react-progressbars",
  productName: "KendoReact",
  productCodes: ["KENDOUIREACT", "KENDOUICOMPLETE"],
  publishDate: 1700063549,
  version: "",
  licensingDocsUrl: "https://www.telerik.com/kendo-react-ui/my-license/?utm_medium=product&utm_source=kendoreact&utm_campaign=kendo-ui-react-purchase-license-keys-warning"
};

// node_modules/@progress/kendo-react-progressbars/dist/es/progressbar/ProgressBar.js
var React10 = __toESM(require_react());
var PropTypes7 = __toESM(require_prop_types());

// node_modules/@progress/kendo-react-animation/dist/es/Animation.js
var React7 = __toESM(require_react());
var PropTypes6 = __toESM(require_prop_types());

// node_modules/@progress/kendo-react-animation/dist/es/AnimationChild.js
var React6 = __toESM(require_react());
var PropTypes5 = __toESM(require_prop_types());

// node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js
function _setPrototypeOf(o10, p2) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf2(o11, p3) {
    o11.__proto__ = p3;
    return o11;
  };
  return _setPrototypeOf(o10, p2);
}

// node_modules/@babel/runtime/helpers/esm/inheritsLoose.js
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  _setPrototypeOf(subClass, superClass);
}

// node_modules/@progress/kendo-react-animation/node_modules/react-transition-group/esm/CSSTransition.js
var import_prop_types3 = __toESM(require_prop_types());

// node_modules/dom-helpers/esm/hasClass.js
function hasClass(element, className) {
  if (element.classList)
    return !!className && element.classList.contains(className);
  return (" " + (element.className.baseVal || element.className) + " ").indexOf(" " + className + " ") !== -1;
}

// node_modules/dom-helpers/esm/addClass.js
function addClass(element, className) {
  if (element.classList)
    element.classList.add(className);
  else if (!hasClass(element, className))
    if (typeof element.className === "string")
      element.className = element.className + " " + className;
    else
      element.setAttribute("class", (element.className && element.className.baseVal || "") + " " + className);
}

// node_modules/dom-helpers/esm/removeClass.js
function replaceClassName(origClass, classToRemove) {
  return origClass.replace(new RegExp("(^|\\s)" + classToRemove + "(?:\\s|$)", "g"), "$1").replace(/\s+/g, " ").replace(/^\s*|\s*$/g, "");
}
function removeClass(element, className) {
  if (element.classList) {
    element.classList.remove(className);
  } else if (typeof element.className === "string") {
    element.className = replaceClassName(element.className, className);
  } else {
    element.setAttribute("class", replaceClassName(element.className && element.className.baseVal || "", className));
  }
}

// node_modules/@progress/kendo-react-animation/node_modules/react-transition-group/esm/CSSTransition.js
var import_react11 = __toESM(require_react());

// node_modules/@progress/kendo-react-animation/node_modules/react-transition-group/esm/Transition.js
var import_prop_types2 = __toESM(require_prop_types());
var import_react10 = __toESM(require_react());
var import_react_dom = __toESM(require_react_dom());

// node_modules/@progress/kendo-react-animation/node_modules/react-transition-group/esm/config.js
var config_default = {
  disabled: false
};

// node_modules/@progress/kendo-react-animation/node_modules/react-transition-group/esm/utils/PropTypes.js
var import_prop_types = __toESM(require_prop_types());
var timeoutsShape = true ? import_prop_types.default.oneOfType([import_prop_types.default.number, import_prop_types.default.shape({
  enter: import_prop_types.default.number,
  exit: import_prop_types.default.number,
  appear: import_prop_types.default.number
}).isRequired]) : null;
var classNamesShape = true ? import_prop_types.default.oneOfType([import_prop_types.default.string, import_prop_types.default.shape({
  enter: import_prop_types.default.string,
  exit: import_prop_types.default.string,
  active: import_prop_types.default.string
}), import_prop_types.default.shape({
  enter: import_prop_types.default.string,
  enterDone: import_prop_types.default.string,
  enterActive: import_prop_types.default.string,
  exit: import_prop_types.default.string,
  exitDone: import_prop_types.default.string,
  exitActive: import_prop_types.default.string
})]) : null;

// node_modules/@progress/kendo-react-animation/node_modules/react-transition-group/esm/TransitionGroupContext.js
var import_react9 = __toESM(require_react());
var TransitionGroupContext_default = import_react9.default.createContext(null);

// node_modules/@progress/kendo-react-animation/node_modules/react-transition-group/esm/Transition.js
var UNMOUNTED = "unmounted";
var EXITED = "exited";
var ENTERING = "entering";
var ENTERED = "entered";
var EXITING = "exiting";
var Transition = /* @__PURE__ */ function(_React$Component) {
  _inheritsLoose(Transition2, _React$Component);
  function Transition2(props, context) {
    var _this;
    _this = _React$Component.call(this, props, context) || this;
    var parentGroup = context;
    var appear = parentGroup && !parentGroup.isMounting ? props.enter : props.appear;
    var initialStatus;
    _this.appearStatus = null;
    if (props.in) {
      if (appear) {
        initialStatus = EXITED;
        _this.appearStatus = ENTERING;
      } else {
        initialStatus = ENTERED;
      }
    } else {
      if (props.unmountOnExit || props.mountOnEnter) {
        initialStatus = UNMOUNTED;
      } else {
        initialStatus = EXITED;
      }
    }
    _this.state = {
      status: initialStatus
    };
    _this.nextCallback = null;
    return _this;
  }
  Transition2.getDerivedStateFromProps = function getDerivedStateFromProps(_ref, prevState) {
    var nextIn = _ref.in;
    if (nextIn && prevState.status === UNMOUNTED) {
      return {
        status: EXITED
      };
    }
    return null;
  };
  var _proto = Transition2.prototype;
  _proto.componentDidMount = function componentDidMount() {
    this.updateStatus(true, this.appearStatus);
  };
  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var nextStatus = null;
    if (prevProps !== this.props) {
      var status = this.state.status;
      if (this.props.in) {
        if (status !== ENTERING && status !== ENTERED) {
          nextStatus = ENTERING;
        }
      } else {
        if (status === ENTERING || status === ENTERED) {
          nextStatus = EXITING;
        }
      }
    }
    this.updateStatus(false, nextStatus);
  };
  _proto.componentWillUnmount = function componentWillUnmount() {
    this.cancelNextCallback();
  };
  _proto.getTimeouts = function getTimeouts() {
    var timeout2 = this.props.timeout;
    var exit, enter, appear;
    exit = enter = appear = timeout2;
    if (timeout2 != null && typeof timeout2 !== "number") {
      exit = timeout2.exit;
      enter = timeout2.enter;
      appear = timeout2.appear !== void 0 ? timeout2.appear : enter;
    }
    return {
      exit,
      enter,
      appear
    };
  };
  _proto.updateStatus = function updateStatus(mounting, nextStatus) {
    if (mounting === void 0) {
      mounting = false;
    }
    if (nextStatus !== null) {
      this.cancelNextCallback();
      if (nextStatus === ENTERING) {
        this.performEnter(mounting);
      } else {
        this.performExit();
      }
    } else if (this.props.unmountOnExit && this.state.status === EXITED) {
      this.setState({
        status: UNMOUNTED
      });
    }
  };
  _proto.performEnter = function performEnter(mounting) {
    var _this2 = this;
    var enter = this.props.enter;
    var appearing = this.context ? this.context.isMounting : mounting;
    var _ref2 = this.props.nodeRef ? [appearing] : [import_react_dom.default.findDOMNode(this), appearing], maybeNode = _ref2[0], maybeAppearing = _ref2[1];
    var timeouts = this.getTimeouts();
    var enterTimeout = appearing ? timeouts.appear : timeouts.enter;
    if (!mounting && !enter || config_default.disabled) {
      this.safeSetState({
        status: ENTERED
      }, function() {
        _this2.props.onEntered(maybeNode);
      });
      return;
    }
    this.props.onEnter(maybeNode, maybeAppearing);
    this.safeSetState({
      status: ENTERING
    }, function() {
      _this2.props.onEntering(maybeNode, maybeAppearing);
      _this2.onTransitionEnd(enterTimeout, function() {
        _this2.safeSetState({
          status: ENTERED
        }, function() {
          _this2.props.onEntered(maybeNode, maybeAppearing);
        });
      });
    });
  };
  _proto.performExit = function performExit() {
    var _this3 = this;
    var exit = this.props.exit;
    var timeouts = this.getTimeouts();
    var maybeNode = this.props.nodeRef ? void 0 : import_react_dom.default.findDOMNode(this);
    if (!exit || config_default.disabled) {
      this.safeSetState({
        status: EXITED
      }, function() {
        _this3.props.onExited(maybeNode);
      });
      return;
    }
    this.props.onExit(maybeNode);
    this.safeSetState({
      status: EXITING
    }, function() {
      _this3.props.onExiting(maybeNode);
      _this3.onTransitionEnd(timeouts.exit, function() {
        _this3.safeSetState({
          status: EXITED
        }, function() {
          _this3.props.onExited(maybeNode);
        });
      });
    });
  };
  _proto.cancelNextCallback = function cancelNextCallback() {
    if (this.nextCallback !== null) {
      this.nextCallback.cancel();
      this.nextCallback = null;
    }
  };
  _proto.safeSetState = function safeSetState(nextState, callback) {
    callback = this.setNextCallback(callback);
    this.setState(nextState, callback);
  };
  _proto.setNextCallback = function setNextCallback(callback) {
    var _this4 = this;
    var active = true;
    this.nextCallback = function(event) {
      if (active) {
        active = false;
        _this4.nextCallback = null;
        callback(event);
      }
    };
    this.nextCallback.cancel = function() {
      active = false;
    };
    return this.nextCallback;
  };
  _proto.onTransitionEnd = function onTransitionEnd(timeout2, handler) {
    this.setNextCallback(handler);
    var node3 = this.props.nodeRef ? this.props.nodeRef.current : import_react_dom.default.findDOMNode(this);
    var doesNotHaveTimeoutOrListener = timeout2 == null && !this.props.addEndListener;
    if (!node3 || doesNotHaveTimeoutOrListener) {
      setTimeout(this.nextCallback, 0);
      return;
    }
    if (this.props.addEndListener) {
      var _ref3 = this.props.nodeRef ? [this.nextCallback] : [node3, this.nextCallback], maybeNode = _ref3[0], maybeNextCallback = _ref3[1];
      this.props.addEndListener(maybeNode, maybeNextCallback);
    }
    if (timeout2 != null) {
      setTimeout(this.nextCallback, timeout2);
    }
  };
  _proto.render = function render() {
    var status = this.state.status;
    if (status === UNMOUNTED) {
      return null;
    }
    var _this$props = this.props, children = _this$props.children, _in = _this$props.in, _mountOnEnter = _this$props.mountOnEnter, _unmountOnExit = _this$props.unmountOnExit, _appear = _this$props.appear, _enter = _this$props.enter, _exit = _this$props.exit, _timeout = _this$props.timeout, _addEndListener = _this$props.addEndListener, _onEnter = _this$props.onEnter, _onEntering = _this$props.onEntering, _onEntered = _this$props.onEntered, _onExit = _this$props.onExit, _onExiting = _this$props.onExiting, _onExited = _this$props.onExited, _nodeRef = _this$props.nodeRef, childProps = _objectWithoutPropertiesLoose(_this$props, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
    return (
      // allows for nested Transitions
      /* @__PURE__ */ import_react10.default.createElement(TransitionGroupContext_default.Provider, {
        value: null
      }, typeof children === "function" ? children(status, childProps) : import_react10.default.cloneElement(import_react10.default.Children.only(children), childProps))
    );
  };
  return Transition2;
}(import_react10.default.Component);
Transition.contextType = TransitionGroupContext_default;
Transition.propTypes = true ? {
  /**
   * A React reference to DOM element that need to transition:
   * https://stackoverflow.com/a/51127130/4671932
   *
   *   - When `nodeRef` prop is used, `node` is not passed to callback functions
   *      (e.g. `onEnter`) because user already has direct access to the node.
   *   - When changing `key` prop of `Transition` in a `TransitionGroup` a new
   *     `nodeRef` need to be provided to `Transition` with changed `key` prop
   *     (see
   *     [test/CSSTransition-test.js](https://github.com/reactjs/react-transition-group/blob/13435f897b3ab71f6e19d724f145596f5910581c/test/CSSTransition-test.js#L362-L437)).
   */
  nodeRef: import_prop_types2.default.shape({
    current: typeof Element === "undefined" ? import_prop_types2.default.any : function(propValue, key, componentName, location, propFullName, secret) {
      var value = propValue[key];
      return import_prop_types2.default.instanceOf(value && "ownerDocument" in value ? value.ownerDocument.defaultView.Element : Element)(propValue, key, componentName, location, propFullName, secret);
    }
  }),
  /**
   * A `function` child can be used instead of a React element. This function is
   * called with the current transition status (`'entering'`, `'entered'`,
   * `'exiting'`, `'exited'`), which can be used to apply context
   * specific props to a component.
   *
   * ```jsx
   * <Transition in={this.state.in} timeout={150}>
   *   {state => (
   *     <MyComponent className={`fade fade-${state}`} />
   *   )}
   * </Transition>
   * ```
   */
  children: import_prop_types2.default.oneOfType([import_prop_types2.default.func.isRequired, import_prop_types2.default.element.isRequired]).isRequired,
  /**
   * Show the component; triggers the enter or exit states
   */
  in: import_prop_types2.default.bool,
  /**
   * By default the child component is mounted immediately along with
   * the parent `Transition` component. If you want to "lazy mount" the component on the
   * first `in={true}` you can set `mountOnEnter`. After the first enter transition the component will stay
   * mounted, even on "exited", unless you also specify `unmountOnExit`.
   */
  mountOnEnter: import_prop_types2.default.bool,
  /**
   * By default the child component stays mounted after it reaches the `'exited'` state.
   * Set `unmountOnExit` if you'd prefer to unmount the component after it finishes exiting.
   */
  unmountOnExit: import_prop_types2.default.bool,
  /**
   * By default the child component does not perform the enter transition when
   * it first mounts, regardless of the value of `in`. If you want this
   * behavior, set both `appear` and `in` to `true`.
   *
   * > **Note**: there are no special appear states like `appearing`/`appeared`, this prop
   * > only adds an additional enter transition. However, in the
   * > `<CSSTransition>` component that first enter transition does result in
   * > additional `.appear-*` classes, that way you can choose to style it
   * > differently.
   */
  appear: import_prop_types2.default.bool,
  /**
   * Enable or disable enter transitions.
   */
  enter: import_prop_types2.default.bool,
  /**
   * Enable or disable exit transitions.
   */
  exit: import_prop_types2.default.bool,
  /**
   * The duration of the transition, in milliseconds.
   * Required unless `addEndListener` is provided.
   *
   * You may specify a single timeout for all transitions:
   *
   * ```jsx
   * timeout={500}
   * ```
   *
   * or individually:
   *
   * ```jsx
   * timeout={{
   *  appear: 500,
   *  enter: 300,
   *  exit: 500,
   * }}
   * ```
   *
   * - `appear` defaults to the value of `enter`
   * - `enter` defaults to `0`
   * - `exit` defaults to `0`
   *
   * @type {number | { enter?: number, exit?: number, appear?: number }}
   */
  timeout: function timeout(props) {
    var pt = timeoutsShape;
    if (!props.addEndListener)
      pt = pt.isRequired;
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }
    return pt.apply(void 0, [props].concat(args));
  },
  /**
   * Add a custom transition end trigger. Called with the transitioning
   * DOM node and a `done` callback. Allows for more fine grained transition end
   * logic. Timeouts are still used as a fallback if provided.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * ```jsx
   * addEndListener={(node, done) => {
   *   // use the css transitionend event to mark the finish of a transition
   *   node.addEventListener('transitionend', done, false);
   * }}
   * ```
   */
  addEndListener: import_prop_types2.default.func,
  /**
   * Callback fired before the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEnter: import_prop_types2.default.func,
  /**
   * Callback fired after the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: import_prop_types2.default.func,
  /**
   * Callback fired after the "entered" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEntered: import_prop_types2.default.func,
  /**
   * Callback fired before the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExit: import_prop_types2.default.func,
  /**
   * Callback fired after the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExiting: import_prop_types2.default.func,
  /**
   * Callback fired after the "exited" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExited: import_prop_types2.default.func
} : {};
function noop2() {
}
Transition.defaultProps = {
  in: false,
  mountOnEnter: false,
  unmountOnExit: false,
  appear: false,
  enter: true,
  exit: true,
  onEnter: noop2,
  onEntering: noop2,
  onEntered: noop2,
  onExit: noop2,
  onExiting: noop2,
  onExited: noop2
};
Transition.UNMOUNTED = UNMOUNTED;
Transition.EXITED = EXITED;
Transition.ENTERING = ENTERING;
Transition.ENTERED = ENTERED;
Transition.EXITING = EXITING;
var Transition_default = Transition;

// node_modules/@progress/kendo-react-animation/node_modules/react-transition-group/esm/CSSTransition.js
var _addClass = function addClass2(node3, classes) {
  return node3 && classes && classes.split(" ").forEach(function(c4) {
    return addClass(node3, c4);
  });
};
var removeClass2 = function removeClass3(node3, classes) {
  return node3 && classes && classes.split(" ").forEach(function(c4) {
    return removeClass(node3, c4);
  });
};
var CSSTransition = /* @__PURE__ */ function(_React$Component) {
  _inheritsLoose(CSSTransition2, _React$Component);
  function CSSTransition2() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.appliedClasses = {
      appear: {},
      enter: {},
      exit: {}
    };
    _this.onEnter = function(maybeNode, maybeAppearing) {
      var _this$resolveArgument = _this.resolveArguments(maybeNode, maybeAppearing), node3 = _this$resolveArgument[0], appearing = _this$resolveArgument[1];
      _this.removeClasses(node3, "exit");
      _this.addClass(node3, appearing ? "appear" : "enter", "base");
      if (_this.props.onEnter) {
        _this.props.onEnter(maybeNode, maybeAppearing);
      }
    };
    _this.onEntering = function(maybeNode, maybeAppearing) {
      var _this$resolveArgument2 = _this.resolveArguments(maybeNode, maybeAppearing), node3 = _this$resolveArgument2[0], appearing = _this$resolveArgument2[1];
      var type = appearing ? "appear" : "enter";
      _this.addClass(node3, type, "active");
      if (_this.props.onEntering) {
        _this.props.onEntering(maybeNode, maybeAppearing);
      }
    };
    _this.onEntered = function(maybeNode, maybeAppearing) {
      var _this$resolveArgument3 = _this.resolveArguments(maybeNode, maybeAppearing), node3 = _this$resolveArgument3[0], appearing = _this$resolveArgument3[1];
      var type = appearing ? "appear" : "enter";
      _this.removeClasses(node3, type);
      _this.addClass(node3, type, "done");
      if (_this.props.onEntered) {
        _this.props.onEntered(maybeNode, maybeAppearing);
      }
    };
    _this.onExit = function(maybeNode) {
      var _this$resolveArgument4 = _this.resolveArguments(maybeNode), node3 = _this$resolveArgument4[0];
      _this.removeClasses(node3, "appear");
      _this.removeClasses(node3, "enter");
      _this.addClass(node3, "exit", "base");
      if (_this.props.onExit) {
        _this.props.onExit(maybeNode);
      }
    };
    _this.onExiting = function(maybeNode) {
      var _this$resolveArgument5 = _this.resolveArguments(maybeNode), node3 = _this$resolveArgument5[0];
      _this.addClass(node3, "exit", "active");
      if (_this.props.onExiting) {
        _this.props.onExiting(maybeNode);
      }
    };
    _this.onExited = function(maybeNode) {
      var _this$resolveArgument6 = _this.resolveArguments(maybeNode), node3 = _this$resolveArgument6[0];
      _this.removeClasses(node3, "exit");
      _this.addClass(node3, "exit", "done");
      if (_this.props.onExited) {
        _this.props.onExited(maybeNode);
      }
    };
    _this.resolveArguments = function(maybeNode, maybeAppearing) {
      return _this.props.nodeRef ? [_this.props.nodeRef.current, maybeNode] : [maybeNode, maybeAppearing];
    };
    _this.getClassNames = function(type) {
      var classNames2 = _this.props.classNames;
      var isStringClassNames = typeof classNames2 === "string";
      var prefix = isStringClassNames && classNames2 ? classNames2 + "-" : "";
      var baseClassName = isStringClassNames ? "" + prefix + type : classNames2[type];
      var activeClassName = isStringClassNames ? baseClassName + "-active" : classNames2[type + "Active"];
      var doneClassName = isStringClassNames ? baseClassName + "-done" : classNames2[type + "Done"];
      return {
        baseClassName,
        activeClassName,
        doneClassName
      };
    };
    return _this;
  }
  var _proto = CSSTransition2.prototype;
  _proto.addClass = function addClass3(node3, type, phase) {
    var className = this.getClassNames(type)[phase + "ClassName"];
    var _this$getClassNames = this.getClassNames("enter"), doneClassName = _this$getClassNames.doneClassName;
    if (type === "appear" && phase === "done" && doneClassName) {
      className += " " + doneClassName;
    }
    if (phase === "active") {
      node3 && node3.scrollTop;
    }
    if (className) {
      this.appliedClasses[type][phase] = className;
      _addClass(node3, className);
    }
  };
  _proto.removeClasses = function removeClasses(node3, type) {
    var _this$appliedClasses$ = this.appliedClasses[type], baseClassName = _this$appliedClasses$.base, activeClassName = _this$appliedClasses$.active, doneClassName = _this$appliedClasses$.done;
    this.appliedClasses[type] = {};
    if (baseClassName) {
      removeClass2(node3, baseClassName);
    }
    if (activeClassName) {
      removeClass2(node3, activeClassName);
    }
    if (doneClassName) {
      removeClass2(node3, doneClassName);
    }
  };
  _proto.render = function render() {
    var _this$props = this.props, _ = _this$props.classNames, props = _objectWithoutPropertiesLoose(_this$props, ["classNames"]);
    return /* @__PURE__ */ import_react11.default.createElement(Transition_default, _extends({}, props, {
      onEnter: this.onEnter,
      onEntered: this.onEntered,
      onEntering: this.onEntering,
      onExit: this.onExit,
      onExiting: this.onExiting,
      onExited: this.onExited
    }));
  };
  return CSSTransition2;
}(import_react11.default.Component);
CSSTransition.defaultProps = {
  classNames: ""
};
CSSTransition.propTypes = true ? _extends({}, Transition_default.propTypes, {
  /**
   * The animation classNames applied to the component as it appears, enters,
   * exits or has finished the transition. A single name can be provided, which
   * will be suffixed for each stage, e.g. `classNames="fade"` applies:
   *
   * - `fade-appear`, `fade-appear-active`, `fade-appear-done`
   * - `fade-enter`, `fade-enter-active`, `fade-enter-done`
   * - `fade-exit`, `fade-exit-active`, `fade-exit-done`
   *
   * A few details to note about how these classes are applied:
   *
   * 1. They are _joined_ with the ones that are already defined on the child
   *    component, so if you want to add some base styles, you can use
   *    `className` without worrying that it will be overridden.
   *
   * 2. If the transition component mounts with `in={false}`, no classes are
   *    applied yet. You might be expecting `*-exit-done`, but if you think
   *    about it, a component cannot finish exiting if it hasn't entered yet.
   *
   * 2. `fade-appear-done` and `fade-enter-done` will _both_ be applied. This
   *    allows you to define different behavior for when appearing is done and
   *    when regular entering is done, using selectors like
   *    `.fade-enter-done:not(.fade-appear-done)`. For example, you could apply
   *    an epic entrance animation when element first appears in the DOM using
   *    [Animate.css](https://daneden.github.io/animate.css/). Otherwise you can
   *    simply use `fade-enter-done` for defining both cases.
   *
   * Each individual classNames can also be specified independently like:
   *
   * ```js
   * classNames={{
   *  appear: 'my-appear',
   *  appearActive: 'my-active-appear',
   *  appearDone: 'my-done-appear',
   *  enter: 'my-enter',
   *  enterActive: 'my-active-enter',
   *  enterDone: 'my-done-enter',
   *  exit: 'my-exit',
   *  exitActive: 'my-active-exit',
   *  exitDone: 'my-done-exit',
   * }}
   * ```
   *
   * If you want to set these classes using CSS Modules:
   *
   * ```js
   * import styles from './styles.css';
   * ```
   *
   * you might want to use camelCase in your CSS file, that way could simply
   * spread them instead of listing them one by one:
   *
   * ```js
   * classNames={{ ...styles }}
   * ```
   *
   * @type {string | {
   *  appear?: string,
   *  appearActive?: string,
   *  appearDone?: string,
   *  enter?: string,
   *  enterActive?: string,
   *  enterDone?: string,
   *  exit?: string,
   *  exitActive?: string,
   *  exitDone?: string,
   * }}
   */
  classNames: classNamesShape,
  /**
   * A `<Transition>` callback fired immediately after the 'enter' or 'appear' class is
   * applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEnter: import_prop_types3.default.func,
  /**
   * A `<Transition>` callback fired immediately after the 'enter-active' or
   * 'appear-active' class is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: import_prop_types3.default.func,
  /**
   * A `<Transition>` callback fired immediately after the 'enter' or
   * 'appear' classes are **removed** and the `done` class is added to the DOM node.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntered: import_prop_types3.default.func,
  /**
   * A `<Transition>` callback fired immediately after the 'exit' class is
   * applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement)
   */
  onExit: import_prop_types3.default.func,
  /**
   * A `<Transition>` callback fired immediately after the 'exit-active' is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement)
   */
  onExiting: import_prop_types3.default.func,
  /**
   * A `<Transition>` callback fired immediately after the 'exit' classes
   * are **removed** and the `exit-done` class is added to the DOM node.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement)
   */
  onExited: import_prop_types3.default.func
}) : {};
var CSSTransition_default = CSSTransition;

// node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}

// node_modules/@progress/kendo-react-animation/node_modules/react-transition-group/esm/TransitionGroup.js
var import_prop_types4 = __toESM(require_prop_types());
var import_react13 = __toESM(require_react());

// node_modules/@progress/kendo-react-animation/node_modules/react-transition-group/esm/utils/ChildMapping.js
var import_react12 = __toESM(require_react());
function getChildMapping(children, mapFn) {
  var mapper = function mapper2(child) {
    return mapFn && (0, import_react12.isValidElement)(child) ? mapFn(child) : child;
  };
  var result = /* @__PURE__ */ Object.create(null);
  if (children)
    import_react12.Children.map(children, function(c4) {
      return c4;
    }).forEach(function(child) {
      result[child.key] = mapper(child);
    });
  return result;
}
function mergeChildMappings(prev, next) {
  prev = prev || {};
  next = next || {};
  function getValueForKey(key) {
    return key in next ? next[key] : prev[key];
  }
  var nextKeysPending = /* @__PURE__ */ Object.create(null);
  var pendingKeys = [];
  for (var prevKey in prev) {
    if (prevKey in next) {
      if (pendingKeys.length) {
        nextKeysPending[prevKey] = pendingKeys;
        pendingKeys = [];
      }
    } else {
      pendingKeys.push(prevKey);
    }
  }
  var i3;
  var childMapping = {};
  for (var nextKey in next) {
    if (nextKeysPending[nextKey]) {
      for (i3 = 0; i3 < nextKeysPending[nextKey].length; i3++) {
        var pendingNextKey = nextKeysPending[nextKey][i3];
        childMapping[nextKeysPending[nextKey][i3]] = getValueForKey(pendingNextKey);
      }
    }
    childMapping[nextKey] = getValueForKey(nextKey);
  }
  for (i3 = 0; i3 < pendingKeys.length; i3++) {
    childMapping[pendingKeys[i3]] = getValueForKey(pendingKeys[i3]);
  }
  return childMapping;
}
function getProp(child, prop, props) {
  return props[prop] != null ? props[prop] : child.props[prop];
}
function getInitialChildMapping(props, onExited) {
  return getChildMapping(props.children, function(child) {
    return (0, import_react12.cloneElement)(child, {
      onExited: onExited.bind(null, child),
      in: true,
      appear: getProp(child, "appear", props),
      enter: getProp(child, "enter", props),
      exit: getProp(child, "exit", props)
    });
  });
}
function getNextChildMapping(nextProps, prevChildMapping, onExited) {
  var nextChildMapping = getChildMapping(nextProps.children);
  var children = mergeChildMappings(prevChildMapping, nextChildMapping);
  Object.keys(children).forEach(function(key) {
    var child = children[key];
    if (!(0, import_react12.isValidElement)(child))
      return;
    var hasPrev = key in prevChildMapping;
    var hasNext = key in nextChildMapping;
    var prevChild = prevChildMapping[key];
    var isLeaving = (0, import_react12.isValidElement)(prevChild) && !prevChild.props.in;
    if (hasNext && (!hasPrev || isLeaving)) {
      children[key] = (0, import_react12.cloneElement)(child, {
        onExited: onExited.bind(null, child),
        in: true,
        exit: getProp(child, "exit", nextProps),
        enter: getProp(child, "enter", nextProps)
      });
    } else if (!hasNext && hasPrev && !isLeaving) {
      children[key] = (0, import_react12.cloneElement)(child, {
        in: false
      });
    } else if (hasNext && hasPrev && (0, import_react12.isValidElement)(prevChild)) {
      children[key] = (0, import_react12.cloneElement)(child, {
        onExited: onExited.bind(null, child),
        in: prevChild.props.in,
        exit: getProp(child, "exit", nextProps),
        enter: getProp(child, "enter", nextProps)
      });
    }
  });
  return children;
}

// node_modules/@progress/kendo-react-animation/node_modules/react-transition-group/esm/TransitionGroup.js
var values = Object.values || function(obj) {
  return Object.keys(obj).map(function(k2) {
    return obj[k2];
  });
};
var defaultProps = {
  component: "div",
  childFactory: function childFactory(child) {
    return child;
  }
};
var TransitionGroup = /* @__PURE__ */ function(_React$Component) {
  _inheritsLoose(TransitionGroup2, _React$Component);
  function TransitionGroup2(props, context) {
    var _this;
    _this = _React$Component.call(this, props, context) || this;
    var handleExited = _this.handleExited.bind(_assertThisInitialized(_this));
    _this.state = {
      contextValue: {
        isMounting: true
      },
      handleExited,
      firstRender: true
    };
    return _this;
  }
  var _proto = TransitionGroup2.prototype;
  _proto.componentDidMount = function componentDidMount() {
    this.mounted = true;
    this.setState({
      contextValue: {
        isMounting: false
      }
    });
  };
  _proto.componentWillUnmount = function componentWillUnmount() {
    this.mounted = false;
  };
  TransitionGroup2.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, _ref) {
    var prevChildMapping = _ref.children, handleExited = _ref.handleExited, firstRender = _ref.firstRender;
    return {
      children: firstRender ? getInitialChildMapping(nextProps, handleExited) : getNextChildMapping(nextProps, prevChildMapping, handleExited),
      firstRender: false
    };
  };
  _proto.handleExited = function handleExited(child, node3) {
    var currentChildMapping = getChildMapping(this.props.children);
    if (child.key in currentChildMapping)
      return;
    if (child.props.onExited) {
      child.props.onExited(node3);
    }
    if (this.mounted) {
      this.setState(function(state) {
        var children = _extends({}, state.children);
        delete children[child.key];
        return {
          children
        };
      });
    }
  };
  _proto.render = function render() {
    var _this$props = this.props, Component3 = _this$props.component, childFactory2 = _this$props.childFactory, props = _objectWithoutPropertiesLoose(_this$props, ["component", "childFactory"]);
    var contextValue = this.state.contextValue;
    var children = values(this.state.children).map(childFactory2);
    delete props.appear;
    delete props.enter;
    delete props.exit;
    if (Component3 === null) {
      return /* @__PURE__ */ import_react13.default.createElement(TransitionGroupContext_default.Provider, {
        value: contextValue
      }, children);
    }
    return /* @__PURE__ */ import_react13.default.createElement(TransitionGroupContext_default.Provider, {
      value: contextValue
    }, /* @__PURE__ */ import_react13.default.createElement(Component3, props, children));
  };
  return TransitionGroup2;
}(import_react13.default.Component);
TransitionGroup.propTypes = true ? {
  /**
   * `<TransitionGroup>` renders a `<div>` by default. You can change this
   * behavior by providing a `component` prop.
   * If you use React v16+ and would like to avoid a wrapping `<div>` element
   * you can pass in `component={null}`. This is useful if the wrapping div
   * borks your css styles.
   */
  component: import_prop_types4.default.any,
  /**
   * A set of `<Transition>` components, that are toggled `in` and out as they
   * leave. the `<TransitionGroup>` will inject specific transition props, so
   * remember to spread them through if you are wrapping the `<Transition>` as
   * with our `<Fade>` example.
   *
   * While this component is meant for multiple `Transition` or `CSSTransition`
   * children, sometimes you may want to have a single transition child with
   * content that you want to be transitioned out and in when you change it
   * (e.g. routes, images etc.) In that case you can change the `key` prop of
   * the transition child as you change its content, this will cause
   * `TransitionGroup` to transition the child out and back in.
   */
  children: import_prop_types4.default.node,
  /**
   * A convenience prop that enables or disables appear animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  appear: import_prop_types4.default.bool,
  /**
   * A convenience prop that enables or disables enter animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  enter: import_prop_types4.default.bool,
  /**
   * A convenience prop that enables or disables exit animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  exit: import_prop_types4.default.bool,
  /**
   * You may need to apply reactive updates to a child as it is exiting.
   * This is generally done by using `cloneElement` however in the case of an exiting
   * child the element has already been removed and not accessible to the consumer.
   *
   * If you do need to update a child as it leaves you can provide a `childFactory`
   * to wrap every child, even the ones that are leaving.
   *
   * @type Function(child: ReactElement) -> ReactElement
   */
  childFactory: import_prop_types4.default.func
} : {};
TransitionGroup.defaultProps = defaultProps;
var TransitionGroup_default = TransitionGroup;

// node_modules/@progress/kendo-react-animation/dist/es/util.js
var outerHeight = function(element) {
  if (!element || !element.ownerDocument.defaultView) {
    return 0;
  }
  var wnd = element.ownerDocument.defaultView;
  var computedStyles = wnd.getComputedStyle(element);
  var marginTop = parseFloat(computedStyles.marginTop);
  var marginBottom = parseFloat(computedStyles.marginBottom);
  return element.offsetHeight + marginTop + marginBottom;
};
var outerWidth = function(element) {
  if (!element || !element.ownerDocument.defaultView) {
    return 0;
  }
  var wnd = element.ownerDocument.defaultView;
  var computedStyles = wnd.getComputedStyle(element);
  var marginLeft = parseFloat(computedStyles.marginLeft);
  var marginRight = parseFloat(computedStyles.marginRight);
  return element.offsetWidth + marginLeft + marginRight;
};
var styles = {
  "animation-container": "k-animation-container",
  "animation-container-relative": "k-animation-container-relative",
  "animation-container-fixed": "k-animation-container-fixed",
  "push-right-enter": "k-push-right-enter",
  "push-right-appear": "k-push-right-appear",
  "push-right-enter-active": "k-push-right-enter-active",
  "push-right-appear-active": "k-push-right-appear-active",
  "push-right-exit": "k-push-right-exit",
  "push-right-exit-active": "k-push-right-exit-active",
  "push-left-enter": "k-push-left-enter",
  "push-left-appear": "k-push-left-appear",
  "push-left-enter-active": "k-push-left-enter-active",
  "push-left-appear-active": "k-push-left-appear-active",
  "push-left-exit": "k-push-left-exit",
  "push-left-exit-active": "k-push-left-exit-active",
  "push-down-enter": "k-push-down-enter",
  "push-down-appear": "k-push-down-appear",
  "push-down-enter-active": "k-push-down-enter-active",
  "push-down-appear-active": "k-push-down-appear-active",
  "push-down-exit": "k-push-down-exit",
  "push-down-exit-active": "k-push-down-exit-active",
  "push-up-enter": "k-push-up-enter",
  "push-up-appear": "k-push-up-appear",
  "push-up-enter-active": "k-push-up-enter-active",
  "push-up-appear-active": "k-push-up-appear-active",
  "push-up-exit": "k-push-up-exit",
  "push-up-exit-active": "k-push-up-exit-active",
  "expand": "k-expand",
  "expand-vertical-enter": "k-expand-vertical-enter",
  "expand-vertical-appear": "k-expand-vertical-appear",
  "expand-vertical-enter-active": "k-expand-vertical-enter-active",
  "expand-vertical-appear-active": "k-expand-vertical-appear-active",
  "expand-vertical-exit": "k-expand-vertical-exit",
  "expand-vertical-exit-active": "k-expand-vertical-exit-active",
  "expand-horizontal-enter": "k-expand-horizontal-enter",
  "expand-horizontal-appear": "k-expand-horizontal-appear",
  "expand-horizontal-enter-active": "k-expand-horizontal-enter-active",
  "expand-horizontal-appear-active": "k-expand-horizontal-appear-active",
  "expand-horizontal-exit": "k-expand-horizontal-exit",
  "expand-horizontal-exit-active": "k-expand-horizontal-exit-active",
  "child-animation-container": "k-child-animation-container",
  "fade-enter": "k-fade-enter",
  "fade-appear": "k-fade-appear",
  "fade-enter-active": "k-fade-enter-active",
  "fade-appear-active": "k-fade-appear-active",
  "fade-exit": "k-fade-exit",
  "fade-exit-active": "k-fade-exit-active",
  "zoom-in-enter": "k-zoom-in-enter",
  "zoom-in-appear": "k-zoom-in-appear",
  "zoom-in-enter-active": "k-zoom-in-enter-active",
  "zoom-in-appear-active": "k-zoom-in-appear-active",
  "zoom-in-exit": "k-zoom-in-exit",
  "zoom-in-exit-active": "k-zoom-in-exit-active",
  "zoom-out-enter": "k-zoom-out-enter",
  "zoom-out-appear": "k-zoom-out-appear",
  "zoom-out-enter-active": "k-zoom-out-enter-active",
  "zoom-out-appear-active": "k-zoom-out-appear-active",
  "zoom-out-exit": "k-zoom-out-exit",
  "zoom-out-exit-active": "k-zoom-out-exit-active",
  "slide-in-appear": "k-slide-in-appear",
  "centered": "k-centered",
  "slide-in-appear-active": "k-slide-in-appear-active",
  "slide-down-enter": "k-slide-down-enter",
  "slide-down-appear": "k-slide-down-appear",
  "slide-down-enter-active": "k-slide-down-enter-active",
  "slide-down-appear-active": "k-slide-down-appear-active",
  "slide-down-exit": "k-slide-down-exit",
  "slide-down-exit-active": "k-slide-down-exit-active",
  "slide-up-enter": "k-slide-up-enter",
  "slide-up-appear": "k-slide-up-appear",
  "slide-up-enter-active": "k-slide-up-enter-active",
  "slide-up-appear-active": "k-slide-up-appear-active",
  "slide-up-exit": "k-slide-up-exit",
  "slide-up-exit-active": "k-slide-up-exit-active",
  "slide-right-enter": "k-slide-right-enter",
  "slide-right-appear": "k-slide-right-appear",
  "slide-right-enter-active": "k-slide-right-enter-active",
  "slide-right-appear-active": "k-slide-right-appear-active",
  "slide-right-exit": "k-slide-right-exit",
  "slide-right-exit-active": "k-slide-right-exit-active",
  "slide-left-enter": "k-slide-left-enter",
  "slide-left-appear": "k-slide-left-appear",
  "slide-left-enter-active": "k-slide-left-enter-active",
  "slide-left-appear-active": "k-slide-left-appear-active",
  "slide-left-exit": "k-slide-left-exit",
  "slide-left-exit-active": "k-slide-left-exit-active",
  "reveal-vertical-enter": "k-reveal-vertical-enter",
  "reveal-vertical-appear": "k-reveal-vertical-appear",
  "reveal-vertical-enter-active": "k-reveal-vertical-enter-active",
  "reveal-vertical-appear-active": "k-reveal-vertical-appear-active",
  "reveal-vertical-exit": "k-reveal-vertical-exit",
  "reveal-vertical-exit-active": "k-reveal-vertical-exit-active",
  "reveal-horizontal-enter": "k-reveal-horizontal-enter",
  "reveal-horizontal-appear": "k-reveal-horizontal-appear",
  "reveal-horizontal-enter-active": "k-reveal-horizontal-enter-active",
  "reveal-horizontal-appear-active": "k-reveal-horizontal-appear-active",
  "reveal-horizontal-exit": "k-reveal-horizontal-exit",
  "reveal-horizontal-exit-active": "k-reveal-horizontal-exit-active"
};
var stylesMap = {
  outerHeight,
  outerWidth,
  styles
};
var util_default = stylesMap;

// node_modules/@progress/kendo-react-animation/dist/es/AnimationChild.js
var __extends = function() {
  var extendStatics = function(d2, b2) {
    extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d3, b3) {
      d3.__proto__ = b3;
    } || function(d3, b3) {
      for (var p2 in b3)
        if (Object.prototype.hasOwnProperty.call(b3, p2))
          d3[p2] = b3[p2];
    };
    return extendStatics(d2, b2);
  };
  return function(d2, b2) {
    if (typeof b2 !== "function" && b2 !== null)
      throw new TypeError("Class extends value " + String(b2) + " is not a constructor or null");
    extendStatics(d2, b2);
    function __() {
      this.constructor = d2;
    }
    d2.prototype = b2 === null ? Object.create(b2) : (__.prototype = b2.prototype, new __());
  };
}();
var __assign = function() {
  __assign = Object.assign || function(t3) {
    for (var s6, i3 = 1, n2 = arguments.length; i3 < n2; i3++) {
      s6 = arguments[i3];
      for (var p2 in s6)
        if (Object.prototype.hasOwnProperty.call(s6, p2))
          t3[p2] = s6[p2];
    }
    return t3;
  };
  return __assign.apply(this, arguments);
};
var __rest = function(s6, e2) {
  var t3 = {};
  for (var p2 in s6)
    if (Object.prototype.hasOwnProperty.call(s6, p2) && e2.indexOf(p2) < 0)
      t3[p2] = s6[p2];
  if (s6 != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i3 = 0, p2 = Object.getOwnPropertySymbols(s6); i3 < p2.length; i3++) {
      if (e2.indexOf(p2[i3]) < 0 && Object.prototype.propertyIsEnumerable.call(s6, p2[i3]))
        t3[p2[i3]] = s6[p2[i3]];
    }
  return t3;
};
var styles2 = util_default.styles;
var AnimationChild = (
  /** @class */
  function(_super) {
    __extends(AnimationChild2, _super);
    function AnimationChild2() {
      var _this = _super !== null && _super.apply(this, arguments) || this;
      _this.elementRef = React6.createRef();
      return _this;
    }
    Object.defineProperty(AnimationChild2.prototype, "element", {
      /**
       * The element that is being animated.
       */
      get: function() {
        return this.elementRef.current;
      },
      enumerable: false,
      configurable: true
    });
    AnimationChild2.prototype.render = function() {
      var _this = this;
      var _a = this.props, children = _a.children, style = _a.style, appear = _a.appear, enter = _a.enter, exit = _a.exit, transitionName = _a.transitionName, transitionEnterDuration = _a.transitionEnterDuration, transitionExitDuration = _a.transitionExitDuration, className = _a.className, onEnter = _a.onEnter, onEntering = _a.onEntering, onEntered = _a.onEntered, onExit = _a.onExit, onExiting = _a.onExiting, onExited = _a.onExited, onAfterExited = _a.onAfterExited, mountOnEnter = _a.mountOnEnter, unmountOnExit = _a.unmountOnExit, animationEnteringStyle = _a.animationEnteringStyle, animationEnteredStyle = _a.animationEnteredStyle, animationExitingStyle = _a.animationExitingStyle, animationExitedStyle = _a.animationExitedStyle, other = __rest(_a, ["children", "style", "appear", "enter", "exit", "transitionName", "transitionEnterDuration", "transitionExitDuration", "className", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "onAfterExited", "mountOnEnter", "unmountOnExit", "animationEnteringStyle", "animationEnteredStyle", "animationExitingStyle", "animationExitedStyle"]);
      var childAnimationContainerClassNames = classNames(className, styles2["child-animation-container"]);
      var defaultStyle = __assign({ transitionDelay: "0ms" }, style);
      var animationStyle = {
        entering: __assign({ transitionDuration: "".concat(transitionEnterDuration, "ms") }, animationEnteringStyle),
        entered: __assign({}, animationEnteredStyle),
        exiting: __assign({ transitionDuration: "".concat(transitionExitDuration, "ms") }, animationExitingStyle),
        exited: __assign({}, animationExitedStyle)
      };
      var transitionProps = {
        in: this.props.in,
        appear,
        enter,
        exit,
        mountOnEnter,
        unmountOnExit,
        timeout: {
          enter: transitionEnterDuration,
          exit: transitionExitDuration
        },
        onEnter: function() {
          if (onEnter) {
            onEnter.call(void 0, { animatedElement: _this.element, target: _this });
          }
        },
        onEntering: function() {
          if (onEntering) {
            onEntering.call(void 0, { animatedElement: _this.element, target: _this });
          }
        },
        onEntered: function() {
          if (onEntered) {
            onEntered.call(void 0, { animatedElement: _this.element, target: _this });
          }
        },
        onExit: function() {
          if (onExit) {
            onExit.call(void 0, { animatedElement: _this.element, target: _this });
          }
        },
        onExiting: function() {
          if (onExiting) {
            onExiting.call(void 0, { animatedElement: _this.element, target: _this });
          }
        },
        onExited: function() {
          if (onAfterExited) {
            onAfterExited.call(void 0, { animatedElement: _this.element, target: _this });
          }
          if (onExited) {
            onExited.call(void 0, { animatedElement: _this.element, target: _this });
          }
        },
        classNames: {
          appear: styles2["".concat(transitionName, "-appear")] || "".concat(transitionName, "-appear"),
          appearActive: styles2["".concat(transitionName, "-appear-active")] || "".concat(transitionName, "-appear-active"),
          enter: styles2["".concat(transitionName, "-enter")] || "".concat(transitionName, "-enter"),
          enterActive: styles2["".concat(transitionName, "-enter-active")] || "".concat(transitionName, "-enter-active"),
          exit: styles2["".concat(transitionName, "-exit")] || "".concat(transitionName, "-exit"),
          exitActive: styles2["".concat(transitionName, "-exit-active")] || "".concat(transitionName, "-exit-active")
        }
      };
      return React6.createElement(CSSTransition_default, __assign({}, transitionProps, other, { nodeRef: this.elementRef }), function(status) {
        return React6.createElement("div", { style: __assign(__assign({}, defaultStyle), animationStyle[status]), className: childAnimationContainerClassNames, ref: _this.elementRef }, children);
      });
    };
    AnimationChild2.propTypes = {
      in: PropTypes5.bool,
      children: PropTypes5.oneOfType([
        PropTypes5.arrayOf(PropTypes5.node),
        PropTypes5.node
      ]),
      transitionName: PropTypes5.string.isRequired,
      className: PropTypes5.string,
      appear: PropTypes5.bool,
      enter: PropTypes5.bool,
      exit: PropTypes5.bool,
      transitionEnterDuration: PropTypes5.number.isRequired,
      transitionExitDuration: PropTypes5.number.isRequired,
      mountOnEnter: PropTypes5.bool,
      unmountOnExit: PropTypes5.bool,
      animationEnteringStyle: PropTypes5.object,
      animationEnteredStyle: PropTypes5.object,
      animationExitingStyle: PropTypes5.object,
      animationExitedStyle: PropTypes5.object
    };
    AnimationChild2.defaultProps = {
      mountOnEnter: true,
      unmountOnExit: false,
      onEnter: noop,
      onEntering: noop,
      onEntered: noop,
      onExit: noop,
      onExiting: noop,
      onExited: noop,
      onAfterExited: noop,
      animationEnteringStyle: {},
      animationEnteredStyle: {},
      animationExitingStyle: {},
      animationExitedStyle: {}
    };
    return AnimationChild2;
  }(React6.Component)
);

// node_modules/@progress/kendo-react-animation/dist/es/package-metadata.js
var packageMetadata2 = {
  name: "@progress/kendo-react-animation",
  productName: "KendoReact",
  productCodes: ["KENDOUIREACT", "KENDOUICOMPLETE"],
  publishDate: 1700063333,
  version: "",
  licensingDocsUrl: "https://www.telerik.com/kendo-react-ui/my-license/?utm_medium=product&utm_source=kendoreact&utm_campaign=kendo-ui-react-purchase-license-keys-warning"
};

// node_modules/@progress/kendo-react-animation/dist/es/Animation.js
var __extends2 = function() {
  var extendStatics = function(d2, b2) {
    extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d3, b3) {
      d3.__proto__ = b3;
    } || function(d3, b3) {
      for (var p2 in b3)
        if (Object.prototype.hasOwnProperty.call(b3, p2))
          d3[p2] = b3[p2];
    };
    return extendStatics(d2, b2);
  };
  return function(d2, b2) {
    if (typeof b2 !== "function" && b2 !== null)
      throw new TypeError("Class extends value " + String(b2) + " is not a constructor or null");
    extendStatics(d2, b2);
    function __() {
      this.constructor = d2;
    }
    d2.prototype = b2 === null ? Object.create(b2) : (__.prototype = b2.prototype, new __());
  };
}();
var __assign2 = function() {
  __assign2 = Object.assign || function(t3) {
    for (var s6, i3 = 1, n2 = arguments.length; i3 < n2; i3++) {
      s6 = arguments[i3];
      for (var p2 in s6)
        if (Object.prototype.hasOwnProperty.call(s6, p2))
          t3[p2] = s6[p2];
    }
    return t3;
  };
  return __assign2.apply(this, arguments);
};
var __rest2 = function(s6, e2) {
  var t3 = {};
  for (var p2 in s6)
    if (Object.prototype.hasOwnProperty.call(s6, p2) && e2.indexOf(p2) < 0)
      t3[p2] = s6[p2];
  if (s6 != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i3 = 0, p2 = Object.getOwnPropertySymbols(s6); i3 < p2.length; i3++) {
      if (e2.indexOf(p2[i3]) < 0 && Object.prototype.propertyIsEnumerable.call(s6, p2[i3]))
        t3[p2[i3]] = s6[p2[i3]];
    }
  return t3;
};
var styles3 = util_default.styles;
var Animation = (
  /** @class */
  function(_super) {
    __extends2(Animation2, _super);
    function Animation2(props) {
      var _this = _super.call(this, props) || this;
      validatePackage(packageMetadata2);
      return _this;
    }
    Animation2.prototype.render = function() {
      var _a = this.props, id = _a.id, style = _a.style, children = _a.children, component = _a.component, className = _a.className, childFactory2 = _a.childFactory, stackChildren = _a.stackChildren, componentChildStyle = _a.componentChildStyle, componentChildClassName = _a.componentChildClassName, other = __rest2(_a, ["id", "style", "children", "component", "className", "childFactory", "stackChildren", "componentChildStyle", "componentChildClassName"]);
      var transitionProps = {
        id,
        style,
        component,
        childFactory: childFactory2,
        className: classNames(styles3["animation-container"], styles3["animation-container-relative"], className)
      };
      var content = React7.Children.map(children || null, function(child) {
        return React7.createElement(AnimationChild, __assign2({}, other, { style: componentChildStyle, className: componentChildClassName }), child);
      });
      return React7.createElement(TransitionGroup_default, __assign2({}, transitionProps), content);
    };
    Animation2.propTypes = {
      children: PropTypes6.oneOfType([
        PropTypes6.arrayOf(PropTypes6.node),
        PropTypes6.node
      ]),
      childFactory: PropTypes6.any,
      className: PropTypes6.string,
      component: PropTypes6.string,
      id: PropTypes6.string,
      style: PropTypes6.any,
      transitionName: PropTypes6.string.isRequired,
      appear: PropTypes6.bool.isRequired,
      enter: PropTypes6.bool.isRequired,
      exit: PropTypes6.bool.isRequired,
      transitionEnterDuration: PropTypes6.number.isRequired,
      transitionExitDuration: PropTypes6.number.isRequired
    };
    Animation2.defaultProps = {
      component: "div"
    };
    return Animation2;
  }(React7.Component)
);

// node_modules/@progress/kendo-react-animation/dist/es/hooks/useAnimation.js
var React8 = __toESM(require_react());
var useAnimation = function(config, deps) {
  var offset = React8.useRef(0);
  var mount = React8.useRef(false);
  var animationFrame = React8.useRef();
  var animate = function(transition) {
    var duration = transition.duration;
    var start;
    var progress;
    var skip = offset.current && 1 - offset.current;
    if (transition.onStart) {
      transition.onStart();
    }
    var frame = function(timestamp) {
      if (!start) {
        start = timestamp;
      }
      progress = timestamp - start + 1;
      var rate = progress / duration + skip;
      if (rate <= 1) {
        if (transition.onUpdate) {
          transition.onUpdate(rate);
        }
        animationFrame.current = window.requestAnimationFrame(frame);
        offset.current = rate;
      } else {
        if (transition.onEnd) {
          transition.onEnd(1);
        }
        offset.current = 0;
      }
    };
    animationFrame.current = window.requestAnimationFrame(frame);
  };
  React8.useEffect(function() {
    animate(config);
    return function() {
      if (animationFrame.current) {
        window.cancelAnimationFrame(animationFrame.current);
      }
    };
  }, deps);
  React8.useEffect(function() {
    mount.current = true;
  }, []);
};

// node_modules/@progress/kendo-react-progressbars/dist/es/progressbar/hooks/usePrevious.js
var React9 = __toESM(require_react());
var usePrevious = function(value) {
  var ref = React9.useRef();
  React9.useEffect(function() {
    ref.current = value;
  });
  return ref.current;
};

// node_modules/@progress/kendo-react-progressbars/dist/es/progressbar/ProgressBar.js
var __assign3 = function() {
  __assign3 = Object.assign || function(t3) {
    for (var s6, i3 = 1, n2 = arguments.length; i3 < n2; i3++) {
      s6 = arguments[i3];
      for (var p2 in s6)
        if (Object.prototype.hasOwnProperty.call(s6, p2))
          t3[p2] = s6[p2];
    }
    return t3;
  };
  return __assign3.apply(this, arguments);
};
var ProgressBar = React10.forwardRef(function(props, target) {
  validatePackage(packageMetadata);
  var animation = props.animation, disabled = props.disabled, _a = props.reverse, reverse = _a === void 0 ? defaultProps2.reverse : _a, orientation = props.orientation, labelVisible = props.labelVisible, labelPlacement = props.labelPlacement, _b = props.max, max = _b === void 0 ? defaultProps2.max : _b, _c2 = props.min, min = _c2 === void 0 ? defaultProps2.min : _c2, tabIndex = props.tabIndex, className = props.className, style = props.style, emptyStyle = props.emptyStyle, emptyClassName = props.emptyClassName, progressStyle = props.progressStyle, progressClassName = props.progressClassName;
  var elementRef = React10.useRef(null);
  var progressStatusRef = React10.useRef(null);
  var progressStatusWrapRef = React10.useRef(null);
  var focusElement = React10.useCallback(function() {
    if (elementRef.current) {
      elementRef.current.focus();
    }
  }, []);
  React10.useImperativeHandle(target, function() {
    return {
      element: elementRef.current,
      progressStatusElement: progressStatusRef.current,
      progressStatusWrapElement: progressStatusWrapRef.current,
      focus: focusElement
    };
  });
  var value = props.value || defaultProps2.value;
  var prevValue = usePrevious(value);
  var indeterminateProp = props.value === null;
  var dir = useRtl(elementRef, props.dir);
  var isVertical = orientation === "vertical";
  var formattedLabel = truncateNumber(value);
  var labelProps = {
    value
  };
  var renderLabel = labelVisible ? props.label ? React10.createElement(
    "span",
    { className: "k-progress-status" },
    React10.createElement(props.label, __assign3({}, labelProps))
  ) : React10.createElement("span", { className: "k-progress-status" }, formattedLabel) : void 0;
  var wrapperProps = {
    className: classNames("k-progressbar", {
      "k-progressbar-horizontal": !isVertical,
      "k-progressbar-vertical": isVertical,
      "k-progressbar-reverse": reverse,
      "k-progressbar-indeterminate": indeterminateProp,
      "k-disabled": disabled
    }, className),
    ref: elementRef,
    dir,
    tabIndex: getTabIndex(tabIndex, disabled),
    role: "progressbar",
    "aria-label": props.ariaLabel,
    "aria-valuemin": min,
    "aria-valuemax": max,
    "aria-valuenow": indeterminateProp ? void 0 : value,
    "aria-disabled": disabled,
    style
  };
  var positionClasses = classNames("k-progress-status-wrap", {
    "k-progress-start": labelPlacement === "start",
    "k-progress-center": labelPlacement === "center",
    "k-progress-end": labelPlacement === "end" || labelPlacement === void 0
  });
  var animationDuration = typeof animation !== "boolean" && animation !== void 0 ? animation.duration : animation ? DEFAULT_ANIMATION_DURATION : NO_ANIMATION;
  var handleStart = React10.useCallback(function() {
    var percentage = calculatePercentage(min, max, prevValue);
    updateProgress(progressStatusRef, progressStatusWrapRef, percentage, isVertical);
  }, [isVertical, max, min, prevValue]);
  var handleUpdate = React10.useCallback(function(progress) {
    var percentage = calculatePercentage(min, max, prevValue + (value - prevValue) * progress);
    updateProgress(progressStatusRef, progressStatusWrapRef, percentage, isVertical);
  }, [min, max, prevValue, value, isVertical]);
  var handleEnd = React10.useCallback(function() {
    var percentage = calculatePercentage(min, max, value);
    updateProgress(progressStatusRef, progressStatusWrapRef, percentage, isVertical);
  }, [isVertical, max, min, value]);
  useAnimation({
    duration: animationDuration,
    onStart: handleStart,
    onUpdate: handleUpdate,
    onEnd: handleEnd
  }, [value, animationDuration]);
  return React10.createElement(
    "div",
    __assign3({}, wrapperProps),
    React10.createElement("span", { className: positionClasses + (emptyClassName ? " " + emptyClassName : ""), style: emptyStyle }, renderLabel),
    React10.createElement(
      "div",
      { className: "k-progressbar-value k-selected", style: progressStyle, ref: progressStatusRef },
      React10.createElement("span", { className: positionClasses + (progressClassName ? " " + progressClassName : ""), ref: progressStatusWrapRef }, renderLabel)
    )
  );
});
ProgressBar.propTypes = {
  animation: PropTypes7.any,
  ariaLabel: PropTypes7.string,
  disabled: PropTypes7.bool,
  reverse: PropTypes7.bool,
  label: PropTypes7.any,
  labelVisible: PropTypes7.bool,
  labelPlacement: PropTypes7.oneOf(["start", "center", "end"]),
  max: PropTypes7.number,
  min: PropTypes7.number,
  value: PropTypes7.number,
  tabIndex: PropTypes7.number,
  emptyStyle: PropTypes7.object,
  emptyClassName: PropTypes7.string,
  progressStyle: PropTypes7.object,
  progressClassName: PropTypes7.string
};
var defaultProps2 = {
  animation: false,
  min: 0,
  max: 100,
  value: 0,
  disabled: false,
  reverse: false,
  labelVisible: true
};
ProgressBar.defaultProps = defaultProps2;
ProgressBar.displayName = "KendoProgressBar";

// app/components/CardLayout.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\CardLayout.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\CardLayout.jsx"
  );
  import.meta.hot.lastModified = "1710765864081.189";
}
function CardLayout({
  mode,
  tab,
  kpiData
}) {
  const emptyStyles = {
    background: "#ef4444"
  };
  const progressStyles = {
    background: "#22c55e"
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { className: "mx-4 my-4 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 ", children: kpiData.map((kpi) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { className: "col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white shadow-xl shadow-slate-900/10 ", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative flex flex-1 flex-col py-2 pl-3", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: `absolute inset-x-0 top-0 h-1 rounded-lg ${kpi.status === "Above Target" ? `bg-green-500` : kpi.status === "Below Target" ? `bg-red-500` : ""}` }, void 0, false, {
        fileName: "app/components/CardLayout.jsx",
        lineNumber: 41,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "my-2 flex items-baseline gap-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-base font-medium text-gray-900", children: kpi.Name }, void 0, false, {
            fileName: "app/components/CardLayout.jsx",
            lineNumber: 44,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-4xl font-bold text-black", children: kpi.Value }, void 0, false, {
            fileName: "app/components/CardLayout.jsx",
            lineNumber: 47,
            columnNumber: 21
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/CardLayout.jsx",
          lineNumber: 43,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "ml-auto overflow-x-hidden px-2  text-center text-base font-medium text-gray-700", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ProgressBar, { value: kpi.TargetAch, style: {
          width: 100,
          height: 12
        }, labelVisible: true, labelPlacement: "start", emptyStyle: emptyStyles, progressStyle: progressStyles }, void 0, false, {
          fileName: "app/components/CardLayout.jsx",
          lineNumber: 52,
          columnNumber: 21
        }, this) }, void 0, false, {
          fileName: "app/components/CardLayout.jsx",
          lineNumber: 51,
          columnNumber: 19
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/CardLayout.jsx",
        lineNumber: 42,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: kpi.container }, void 0, false, {
        fileName: "app/components/CardLayout.jsx",
        lineNumber: 58,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/CardLayout.jsx",
      lineNumber: 40,
      columnNumber: 15
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "-mt-px flex divide-x divide-gray-200 bg-gray-50 h-10 ", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex w-0 flex-1  ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: kpi.Analyze, className: "relative -mr-px inline-flex flex-1 items-center justify-center gap-x-2 border border-transparent text-sm font-semibold hover:bg-rose-500 hover:text-white", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "py-4 inline-flex flex-1 items-cente justify-center gap-x-3 text-sm font-semibold hover:text-white", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WrenchScrewdriverIcon_default, { className: "h-5 w-5", "aria-hidden": "true" }, void 0, false, {
          fileName: "app/components/CardLayout.jsx",
          lineNumber: 65,
          columnNumber: 25
        }, this),
        "Analyze"
      ] }, void 0, true, {
        fileName: "app/components/CardLayout.jsx",
        lineNumber: 64,
        columnNumber: 23
      }, this) }, void 0, false, {
        fileName: "app/components/CardLayout.jsx",
        lineNumber: 63,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/components/CardLayout.jsx",
        lineNumber: 62,
        columnNumber: 19
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "-ml-px flex flex-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/demo/dashboard/salesExp", className: "relative -mr-px inline-flex flex-1 items-center justify-center gap-x-2  border border-transparent text-sm font-semibold  hover:bg-rose-500 hover:text-white", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "py-4 inline-flex flex-1 items-cente justify-center gap-x-3 text-sm font-semibold hover:text-white", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CircleStackIcon_default, { className: "h-5 w-5", "aria-hidden": "true" }, void 0, false, {
          fileName: "app/components/CardLayout.jsx",
          lineNumber: 74,
          columnNumber: 25
        }, this),
        "Explore Data"
      ] }, void 0, true, {
        fileName: "app/components/CardLayout.jsx",
        lineNumber: 73,
        columnNumber: 23
      }, this) }, void 0, false, {
        fileName: "app/components/CardLayout.jsx",
        lineNumber: 72,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/components/CardLayout.jsx",
        lineNumber: 71,
        columnNumber: 19
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "-ml-px flex  flex-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/benchmark", className: "relative -mr-px inline-flex flex-1 items-center justify-center gap-x-2  border border-transparent text-sm font-semibold hover:bg-rose-500 hover:text-white", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "py-4 inline-flex flex-1 items-cente justify-center gap-x-3 text-sm font-semibold hover:text-white", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LightBulbIcon_default, { className: "h-5 w-5", "aria-hidden": "true" }, void 0, false, {
          fileName: "app/components/CardLayout.jsx",
          lineNumber: 82,
          columnNumber: 25
        }, this),
        "Insights"
      ] }, void 0, true, {
        fileName: "app/components/CardLayout.jsx",
        lineNumber: 81,
        columnNumber: 23
      }, this) }, void 0, false, {
        fileName: "app/components/CardLayout.jsx",
        lineNumber: 80,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/components/CardLayout.jsx",
        lineNumber: 79,
        columnNumber: 19
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/CardLayout.jsx",
      lineNumber: 61,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/components/CardLayout.jsx",
      lineNumber: 60,
      columnNumber: 15
    }, this)
  ] }, kpi.Name, true, {
    fileName: "app/components/CardLayout.jsx",
    lineNumber: 39,
    columnNumber: 31
  }, this)) }, void 0, false, {
    fileName: "app/components/CardLayout.jsx",
    lineNumber: 38,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/components/CardLayout.jsx",
    lineNumber: 37,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/CardLayout.jsx",
    lineNumber: 36,
    columnNumber: 10
  }, this);
}
_c = CardLayout;
var _c;
$RefreshReg$(_c, "CardLayout");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  getTabIndex,
  noop,
  Animation,
  T3 as T,
  It,
  qe2 as qe,
  CardLayout
};
//# sourceMappingURL=/build/_shared/chunk-EIQCPSYD.js.map
