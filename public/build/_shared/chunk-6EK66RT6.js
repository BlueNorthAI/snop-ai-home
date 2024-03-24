import {
  o
} from "/build/_shared/chunk-JKKPAHGM.js";
import {
  require_react
} from "/build/_shared/chunk-BOXFZXVX.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// node_modules/@headlessui/react/dist/hooks/use-tracked-pointer.js
var import_react = __toESM(require_react(), 1);
function t(e) {
  return [e.screenX, e.screenY];
}
function u() {
  let e = (0, import_react.useRef)([-1, -1]);
  return { wasMoved(r) {
    let n = t(r);
    return e.current[0] === n[0] && e.current[1] === n[1] ? false : (e.current = n, true);
  }, update(r) {
    e.current = t(r);
  } };
}

// node_modules/@headlessui/react/dist/utils/calculate-active-index.js
function u2(l2) {
  throw new Error("Unexpected object: " + l2);
}
var c = ((i) => (i[i.First = 0] = "First", i[i.Previous = 1] = "Previous", i[i.Next = 2] = "Next", i[i.Last = 3] = "Last", i[i.Specific = 4] = "Specific", i[i.Nothing = 5] = "Nothing", i))(c || {});
function f(l2, n) {
  let t2 = n.resolveItems();
  if (t2.length <= 0)
    return null;
  let r = n.resolveActiveIndex(), s2 = r != null ? r : -1;
  switch (l2.focus) {
    case 0: {
      for (let e = 0; e < t2.length; ++e)
        if (!n.resolveDisabled(t2[e], e, t2))
          return e;
      return r;
    }
    case 1: {
      for (let e = s2 - 1; e >= 0; --e)
        if (!n.resolveDisabled(t2[e], e, t2))
          return e;
      return r;
    }
    case 2: {
      for (let e = s2 + 1; e < t2.length; ++e)
        if (!n.resolveDisabled(t2[e], e, t2))
          return e;
      return r;
    }
    case 3: {
      for (let e = t2.length - 1; e >= 0; --e)
        if (!n.resolveDisabled(t2[e], e, t2))
          return e;
      return r;
    }
    case 4: {
      for (let e = 0; e < t2.length; ++e)
        if (n.resolveId(t2[e], e, t2) === l2.id)
          return e;
      return r;
    }
    case 5:
      return null;
    default:
      u2(l2);
  }
}

// node_modules/@headlessui/react/dist/hooks/use-text-value.js
var import_react2 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/utils/get-text-value.js
var a = /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;
function o3(e) {
  var r, i;
  let n = (r = e.innerText) != null ? r : "", t2 = e.cloneNode(true);
  if (!(t2 instanceof HTMLElement))
    return n;
  let u3 = false;
  for (let f2 of t2.querySelectorAll('[hidden],[aria-hidden],[role="img"]'))
    f2.remove(), u3 = true;
  let l2 = u3 ? (i = t2.innerText) != null ? i : "" : n;
  return a.test(l2) && (l2 = l2.replace(a, "")), l2;
}
function g(e) {
  let n = e.getAttribute("aria-label");
  if (typeof n == "string")
    return n.trim();
  let t2 = e.getAttribute("aria-labelledby");
  if (t2) {
    let u3 = t2.split(" ").map((l2) => {
      let r = document.getElementById(l2);
      if (r) {
        let i = r.getAttribute("aria-label");
        return typeof i == "string" ? i.trim() : o3(r).trim();
      }
      return null;
    }).filter(Boolean);
    if (u3.length > 0)
      return u3.join(", ");
  }
  return o3(e).trim();
}

// node_modules/@headlessui/react/dist/hooks/use-text-value.js
function s(c2) {
  let t2 = (0, import_react2.useRef)(""), r = (0, import_react2.useRef)("");
  return o(() => {
    let e = c2.current;
    if (!e)
      return "";
    let u3 = e.innerText;
    if (t2.current === u3)
      return r.current;
    let n = g(e).trim().toLowerCase();
    return t2.current = u3, r.current = n, n;
  });
}

export {
  u,
  c,
  f,
  s
};
//# sourceMappingURL=/build/_shared/chunk-6EK66RT6.js.map
