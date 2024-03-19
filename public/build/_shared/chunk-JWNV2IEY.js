import {
  d,
  r,
  s,
  u as u2
} from "/build/_shared/chunk-X4JIH5W5.js";
import {
  T
} from "/build/_shared/chunk-ZSUFT5EU.js";
import {
  C,
  I,
  I2,
  O,
  T as T2,
  U,
  o,
  o2,
  o3,
  u,
  y
} from "/build/_shared/chunk-JKKPAHGM.js";
import {
  require_react
} from "/build/_shared/chunk-BOXFZXVX.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// node_modules/@headlessui/react/dist/components/disclosure/disclosure.js
var import_react2 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/utils/start-transition.js
var import_react = __toESM(require_react(), 1);
var t;
var a = (t = import_react.default.startTransition) != null ? t : function(i) {
  i();
};

// node_modules/@headlessui/react/dist/components/disclosure/disclosure.js
var Q = ((o4) => (o4[o4.Open = 0] = "Open", o4[o4.Closed = 1] = "Closed", o4))(Q || {});
var V = ((t2) => (t2[t2.ToggleDisclosure = 0] = "ToggleDisclosure", t2[t2.CloseDisclosure = 1] = "CloseDisclosure", t2[t2.SetButtonId = 2] = "SetButtonId", t2[t2.SetPanelId = 3] = "SetPanelId", t2[t2.LinkPanel = 4] = "LinkPanel", t2[t2.UnlinkPanel = 5] = "UnlinkPanel", t2))(V || {});
var Y = { [0]: (e) => ({ ...e, disclosureState: u(e.disclosureState, { [0]: 1, [1]: 0 }) }), [1]: (e) => e.disclosureState === 1 ? e : { ...e, disclosureState: 1 }, [4](e) {
  return e.linkedPanel === true ? e : { ...e, linkedPanel: true };
}, [5](e) {
  return e.linkedPanel === false ? e : { ...e, linkedPanel: false };
}, [2](e, n) {
  return e.buttonId === n.buttonId ? e : { ...e, buttonId: n.buttonId };
}, [3](e, n) {
  return e.panelId === n.panelId ? e : { ...e, panelId: n.panelId };
} };
var M = (0, import_react2.createContext)(null);
M.displayName = "DisclosureContext";
function _(e) {
  let n = (0, import_react2.useContext)(M);
  if (n === null) {
    let o4 = new Error(`<${e} /> is missing a parent <Disclosure /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(o4, _), o4;
  }
  return n;
}
var v = (0, import_react2.createContext)(null);
v.displayName = "DisclosureAPIContext";
function K(e) {
  let n = (0, import_react2.useContext)(v);
  if (n === null) {
    let o4 = new Error(`<${e} /> is missing a parent <Disclosure /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(o4, K), o4;
  }
  return n;
}
var F = (0, import_react2.createContext)(null);
F.displayName = "DisclosurePanelContext";
function Z() {
  return (0, import_react2.useContext)(F);
}
function ee(e, n) {
  return u(n.type, Y, e, n);
}
var te = import_react2.Fragment;
function ne(e, n) {
  let { defaultOpen: o4 = false, ...i } = e, f = (0, import_react2.useRef)(null), l = y(n, T2((u3) => {
    f.current = u3;
  }, e.as === void 0 || e.as === import_react2.Fragment)), t2 = (0, import_react2.useRef)(null), d2 = (0, import_react2.useRef)(null), s2 = (0, import_react2.useReducer)(ee, { disclosureState: o4 ? 0 : 1, linkedPanel: false, buttonRef: d2, panelRef: t2, buttonId: null, panelId: null }), [{ disclosureState: c, buttonId: a2 }, D] = s2, p = o((u3) => {
    D({ type: 1 });
    let y2 = o2(f);
    if (!y2 || !a2)
      return;
    let r3 = (() => u3 ? u3 instanceof HTMLElement ? u3 : u3.current instanceof HTMLElement ? u3.current : y2.getElementById(a2) : y2.getElementById(a2))();
    r3 == null || r3.focus();
  }), P = (0, import_react2.useMemo)(() => ({ close: p }), [p]), T3 = (0, import_react2.useMemo)(() => ({ open: c === 0, close: p }), [c, p]), C2 = { ref: l };
  return import_react2.default.createElement(M.Provider, { value: s2 }, import_react2.default.createElement(v.Provider, { value: P }, import_react2.default.createElement(s, { value: u(c, { [0]: d.Open, [1]: d.Closed }) }, C({ ourProps: C2, theirProps: i, slot: T3, defaultTag: te, name: "Disclosure" }))));
}
var le = "button";
function oe(e, n) {
  let o4 = I(), { id: i = `headlessui-disclosure-button-${o4}`, ...f } = e, [l, t2] = _("Disclosure.Button"), d2 = Z(), s2 = d2 === null ? false : d2 === l.panelId, c = (0, import_react2.useRef)(null), a2 = y(c, n, s2 ? null : l.buttonRef), D = I2();
  (0, import_react2.useEffect)(() => {
    if (!s2)
      return t2({ type: 2, buttonId: i }), () => {
        t2({ type: 2, buttonId: null });
      };
  }, [i, t2, s2]);
  let p = o((r3) => {
    var m;
    if (s2) {
      if (l.disclosureState === 1)
        return;
      switch (r3.key) {
        case o3.Space:
        case o3.Enter:
          r3.preventDefault(), r3.stopPropagation(), t2({ type: 0 }), (m = l.buttonRef.current) == null || m.focus();
          break;
      }
    } else
      switch (r3.key) {
        case o3.Space:
        case o3.Enter:
          r3.preventDefault(), r3.stopPropagation(), t2({ type: 0 });
          break;
      }
  }), P = o((r3) => {
    switch (r3.key) {
      case o3.Space:
        r3.preventDefault();
        break;
    }
  }), T3 = o((r3) => {
    var m;
    r(r3.currentTarget) || e.disabled || (s2 ? (t2({ type: 0 }), (m = l.buttonRef.current) == null || m.focus()) : t2({ type: 0 }));
  }), C2 = (0, import_react2.useMemo)(() => ({ open: l.disclosureState === 0 }), [l]), u3 = T(e, c), y2 = s2 ? { ref: a2, type: u3, onKeyDown: p, onClick: T3 } : { ref: a2, id: i, type: u3, "aria-expanded": l.disclosureState === 0, "aria-controls": l.linkedPanel ? l.panelId : void 0, onKeyDown: p, onKeyUp: P, onClick: T3 };
  return C({ mergeRefs: D, ourProps: y2, theirProps: f, slot: C2, defaultTag: le, name: "Disclosure.Button" });
}
var re = "div";
var se = O.RenderStrategy | O.Static;
function ue(e, n) {
  let o4 = I(), { id: i = `headlessui-disclosure-panel-${o4}`, ...f } = e, [l, t2] = _("Disclosure.Panel"), { close: d2 } = K("Disclosure.Panel"), s2 = I2(), c = y(n, l.panelRef, (T3) => {
    a(() => t2({ type: T3 ? 4 : 5 }));
  });
  (0, import_react2.useEffect)(() => (t2({ type: 3, panelId: i }), () => {
    t2({ type: 3, panelId: null });
  }), [i, t2]);
  let a2 = u2(), D = (() => a2 !== null ? (a2 & d.Open) === d.Open : l.disclosureState === 0)(), p = (0, import_react2.useMemo)(() => ({ open: l.disclosureState === 0, close: d2 }), [l, d2]), P = { ref: c, id: i };
  return import_react2.default.createElement(F.Provider, { value: l.panelId }, C({ mergeRefs: s2, ourProps: P, theirProps: f, slot: p, defaultTag: re, features: se, visible: D, name: "Disclosure.Panel" }));
}
var ie = U(ne);
var ae = U(oe);
var pe = U(ue);
var Ae = Object.assign(ie, { Button: ae, Panel: pe });

export {
  Ae
};
//# sourceMappingURL=/build/_shared/chunk-JWNV2IEY.js.map
