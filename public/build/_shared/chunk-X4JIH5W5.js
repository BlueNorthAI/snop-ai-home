import {
  require_react
} from "/build/_shared/chunk-BOXFZXVX.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// node_modules/@headlessui/react/dist/internal/open-closed.js
var import_react = __toESM(require_react(), 1);
var n = (0, import_react.createContext)(null);
n.displayName = "OpenClosedContext";
var d = ((e) => (e[e.Open = 1] = "Open", e[e.Closed = 2] = "Closed", e[e.Closing = 4] = "Closing", e[e.Opening = 8] = "Opening", e))(d || {});
function u() {
  return (0, import_react.useContext)(n);
}
function s({ value: o, children: r2 }) {
  return import_react.default.createElement(n.Provider, { value: o }, r2);
}

// node_modules/@headlessui/react/dist/utils/bugs.js
function r(n2) {
  let e = n2.parentElement, l2 = null;
  for (; e && !(e instanceof HTMLFieldSetElement); )
    e instanceof HTMLLegendElement && (l2 = e), e = e.parentElement;
  let t2 = (e == null ? void 0 : e.getAttribute("disabled")) === "";
  return t2 && i(l2) ? false : t2;
}
function i(n2) {
  if (!n2)
    return false;
  let e = n2.previousElementSibling;
  for (; e !== null; ) {
    if (e instanceof HTMLLegendElement)
      return false;
    e = e.previousElementSibling;
  }
  return true;
}

export {
  d,
  u,
  s,
  r
};
//# sourceMappingURL=/build/_shared/chunk-X4JIH5W5.js.map
