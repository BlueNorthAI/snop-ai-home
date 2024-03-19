import {
  l
} from "/build/_shared/chunk-JKKPAHGM.js";
import {
  require_react
} from "/build/_shared/chunk-BOXFZXVX.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// node_modules/@headlessui/react/dist/hooks/use-resolve-button-type.js
var import_react = __toESM(require_react(), 1);
function i(t) {
  var n;
  if (t.type)
    return t.type;
  let e = (n = t.as) != null ? n : "button";
  if (typeof e == "string" && e.toLowerCase() === "button")
    return "button";
}
function T(t, e) {
  let [n, u] = (0, import_react.useState)(() => i(t));
  return l(() => {
    u(i(t));
  }, [t.type, t.as]), l(() => {
    n || e.current && e.current instanceof HTMLButtonElement && !e.current.hasAttribute("type") && u("button");
  }, [n, e]), n;
}

export {
  T
};
//# sourceMappingURL=/build/_shared/chunk-ZSUFT5EU.js.map
