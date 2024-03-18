import {
  require_input
} from "/build/_shared/chunk-CSUUZOAU.js";
import {
  $5d3850c4d0b4e6c7$export$602eac185826482c,
  $5d3850c4d0b4e6c7$export$7c6e2c02157bb7d2,
  $5d3850c4d0b4e6c7$export$be92b6f5f03c0fe9,
  $5d3850c4d0b4e6c7$export$c6fdb837b070b4ff,
  Dialog,
  DialogContent
} from "/build/_shared/chunk-HDQ5XP3S.js";
import {
  Label,
  Popover,
  PopoverContent,
  PopoverTrigger
} from "/build/_shared/chunk-4KGWMUJO.js";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from "/build/_shared/chunk-MTT4DDXE.js";
import {
  Input
} from "/build/_shared/chunk-FDWYIRIF.js";
import "/build/_shared/chunk-S4R52IIC.js";
import {
  $8927f6f2acc4f386$export$250ffa63cdc0d034,
  Check,
  ChevronsUpDown,
  Search
} from "/build/_shared/chunk-2AYV67AV.js";
import {
  Button
} from "/build/_shared/chunk-C2XBONP3.js";
import {
  cn
} from "/build/_shared/chunk-FBY72YCO.js";
import {
  require_node
} from "/build/_shared/chunk-G7CHZRZX.js";
import "/build/_shared/chunk-Y3Q3TNJF.js";
import {
  MapIcon_default,
  PresentationChartLineIcon_default,
  TruckIcon_default
} from "/build/_shared/chunk-2HNBOA5V.js";
import {
  Chart,
  ChartSeries,
  ChartSeriesItem,
  ChartSeriesLabels,
  ChartValueAxis,
  ChartValueAxisItem,
  require_hammer
} from "/build/_shared/chunk-WAFXOQC7.js";
import "/build/_shared/chunk-ELWJTL4F.js";
import {
  Form,
  Link,
  useLoaderData,
  useNavigate,
  useParams
} from "/build/_shared/chunk-NON4LQMM.js";
import "/build/_shared/chunk-GIAAE3CH.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  createHotContext
} from "/build/_shared/chunk-K4XMOQHS.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  require_react
} from "/build/_shared/chunk-BOXFZXVX.js";
import {
  __commonJS,
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// empty-module:~/models/truck.server
var require_truck = __commonJS({
  "empty-module:~/models/truck.server"(exports, module) {
    module.exports = {};
  }
});

// app/routes/snop.truck.tsx
var import_node = __toESM(require_node());

// app/components/TruckForm.tsx
var React2 = __toESM(require_react());

// app/components/admin-form.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\admin-form.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\admin-form.tsx"
  );
  import.meta.hot.lastModified = "1709193784140.088";
}
function AdminInput({
  admin
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid w-full  gap-10", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-2 items-center gap-1", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, { className: "text-lg", htmlFor: "lyf", children: [
        "Life",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-400 text-sm" }, void 0, false, {
          fileName: "app/components/admin-form.tsx",
          lineNumber: 30,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/admin-form.tsx",
        lineNumber: 28,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, { id: "lyf", name: "life", defaultValue: admin["life"], className: "text-lg text-gray-500 text-center" }, void 0, false, {
        fileName: "app/components/admin-form.tsx",
        lineNumber: 32,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/admin-form.tsx",
      lineNumber: 27,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-2 items-center gap-1", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, { className: "text-lg", htmlFor: "disesel", children: [
        "Diesel Price",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-400 text-sm" }, void 0, false, {
          fileName: "app/components/admin-form.tsx",
          lineNumber: 38,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/admin-form.tsx",
        lineNumber: 36,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, { id: "disesel", name: "diesel_price", defaultValue: admin["diesel_price"], className: "text-lg text-gray-500 text-center" }, void 0, false, {
        fileName: "app/components/admin-form.tsx",
        lineNumber: 40,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/admin-form.tsx",
      lineNumber: 35,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-2 items-center gap-1", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, { className: "text-lg", htmlFor: "load", children: [
        "Loading/ Unloading",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-400 text-sm" }, void 0, false, {
          fileName: "app/components/admin-form.tsx",
          lineNumber: 46,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/admin-form.tsx",
        lineNumber: 44,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, { id: "load", name: "loading_unloading", defaultValue: admin["loading_unloading"], className: "text-lg text-gray-500 text-center" }, void 0, false, {
        fileName: "app/components/admin-form.tsx",
        lineNumber: 48,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/admin-form.tsx",
      lineNumber: 43,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-2 items-center gap-1", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, { className: "text-lg", htmlFor: "tol", children: [
        "Toll",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-400 text-sm" }, void 0, false, {
          fileName: "app/components/admin-form.tsx",
          lineNumber: 54,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/admin-form.tsx",
        lineNumber: 52,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, { id: "tol", name: "toll", defaultValue: admin["toll"], className: "text-lg text-gray-500 text-center" }, void 0, false, {
        fileName: "app/components/admin-form.tsx",
        lineNumber: 56,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/admin-form.tsx",
      lineNumber: 51,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-2 items-center gap-1", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, { className: "text-lg", htmlFor: "route", children: [
        "Route Expenses",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-400 text-sm" }, void 0, false, {
          fileName: "app/components/admin-form.tsx",
          lineNumber: 62,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/admin-form.tsx",
        lineNumber: 60,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, { id: "route", name: "route_expenses", defaultValue: admin["route_expenses"], className: "text-lg text-gray-500 text-center" }, void 0, false, {
        fileName: "app/components/admin-form.tsx",
        lineNumber: 64,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/admin-form.tsx",
      lineNumber: 59,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-2 items-center gap-1", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, { className: "text-lg", htmlFor: "driver", children: [
        "Driver & Cleaner Expenses",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-400 text-sm" }, void 0, false, {
          fileName: "app/components/admin-form.tsx",
          lineNumber: 70,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/admin-form.tsx",
        lineNumber: 68,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, { id: "driver", name: "driver_expenses", defaultValue: admin["driver_expenses"], className: "text-lg text-gray-500 text-center" }, void 0, false, {
        fileName: "app/components/admin-form.tsx",
        lineNumber: 72,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/admin-form.tsx",
      lineNumber: 67,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-2 items-center gap-1", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, { className: "text-lg", htmlFor: "tyr", children: [
        "Tyres",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-400 text-sm" }, void 0, false, {
          fileName: "app/components/admin-form.tsx",
          lineNumber: 78,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/admin-form.tsx",
        lineNumber: 76,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, { id: "tyr", name: "tyres", defaultValue: admin["tyres"], className: "text-lg text-gray-500 text-center" }, void 0, false, {
        fileName: "app/components/admin-form.tsx",
        lineNumber: 80,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/admin-form.tsx",
      lineNumber: 75,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/admin-form.tsx",
    lineNumber: 26,
    columnNumber: 10
  }, this);
}
_c = AdminInput;
var _c;
$RefreshReg$(_c, "AdminInput");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/truck-form.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\truck-form.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\truck-form.tsx"
  );
  import.meta.hot.lastModified = "1709192886535.8079";
}
function TruckInput({
  truck
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "grid w-full  gap-10", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "grid grid-cols-2 items-center gap-1", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Label, { className: "text-lg", htmlFor: "pc", children: [
        "Purchase Cost",
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "text-gray-400 text-sm", children: "inculing Fabrication" }, void 0, false, {
          fileName: "app/components/truck-form.tsx",
          lineNumber: 30,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/truck-form.tsx",
        lineNumber: 28,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Input, { id: "pc", name: "purchase_cost", defaultValue: truck["purchase_cost"], className: "text-lg text-gray-500 text-center" }, void 0, false, {
        fileName: "app/components/truck-form.tsx",
        lineNumber: 32,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/truck-form.tsx",
      lineNumber: 27,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "grid grid-cols-2 items-center gap-1", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Label, { className: "text-lg", htmlFor: "mileagewithload", children: [
        "Mileage with Load",
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "text-gray-400 text-sm" }, void 0, false, {
          fileName: "app/components/truck-form.tsx",
          lineNumber: 38,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/truck-form.tsx",
        lineNumber: 36,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Input, { id: "mileagewithload", name: "mileage_with_load", defaultValue: truck["mileage_with_load"], className: "text-lg text-gray-500 text-center" }, void 0, false, {
        fileName: "app/components/truck-form.tsx",
        lineNumber: 40,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/truck-form.tsx",
      lineNumber: 35,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "grid grid-cols-2 items-center gap-1", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Label, { className: "text-lg", htmlFor: "mileagewithoutload", children: [
        "Mileage without Load",
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "text-gray-400 text-sm" }, void 0, false, {
          fileName: "app/components/truck-form.tsx",
          lineNumber: 46,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/truck-form.tsx",
        lineNumber: 44,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Input, { id: "mileagewithoutload", name: "mileage_without_load", defaultValue: truck["mileage_without_load"], className: "text-lg text-gray-500 text-center" }, void 0, false, {
        fileName: "app/components/truck-form.tsx",
        lineNumber: 48,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/truck-form.tsx",
      lineNumber: 43,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "grid grid-cols-2 items-center gap-1", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Label, { className: "text-lg", htmlFor: "main", children: [
        "Maintenance",
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "text-gray-400 text-sm" }, void 0, false, {
          fileName: "app/components/truck-form.tsx",
          lineNumber: 54,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/truck-form.tsx",
        lineNumber: 52,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Input, { id: "main", name: "maintenance", defaultValue: truck["maintenance"], className: "text-lg text-gray-500 text-center" }, void 0, false, {
        fileName: "app/components/truck-form.tsx",
        lineNumber: 56,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/truck-form.tsx",
      lineNumber: 51,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "grid grid-cols-2 items-center gap-1", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Label, { className: "text-lg", htmlFor: "cap", children: [
        "Capacity",
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "text-gray-400 text-sm" }, void 0, false, {
          fileName: "app/components/truck-form.tsx",
          lineNumber: 62,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/truck-form.tsx",
        lineNumber: 60,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Input, { id: "cap", name: "capacity", defaultValue: truck["capacity"], className: "text-lg text-gray-500 text-center" }, void 0, false, {
        fileName: "app/components/truck-form.tsx",
        lineNumber: 64,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/truck-form.tsx",
      lineNumber: 59,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "grid grid-cols-2 items-center gap-1", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Label, { className: "text-lg", htmlFor: "annual", children: [
        "Annual Distance",
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "text-gray-400 text-sm" }, void 0, false, {
          fileName: "app/components/truck-form.tsx",
          lineNumber: 70,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/truck-form.tsx",
        lineNumber: 68,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Input, { id: "annual", name: "annual_distance", defaultValue: truck["annual_distance"], className: "text-lg text-gray-500 text-center" }, void 0, false, {
        fileName: "app/components/truck-form.tsx",
        lineNumber: 72,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/truck-form.tsx",
      lineNumber: 67,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/truck-form.tsx",
    lineNumber: 26,
    columnNumber: 10
  }, this);
}
_c2 = TruckInput;
var _c2;
$RefreshReg$(_c2, "TruckInput");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/ui/command.tsx
var React = __toESM(require_react());

// node_modules/cmdk/dist/chunk-NZJY6EH4.mjs
var U = 1;
var Y = 0.9;
var H = 0.8;
var J = 0.17;
var p = 0.1;
var u = 0.999;
var $ = 0.9999;
var k = 0.99;
var m = /[\\\/_+.#"@\[\(\{&]/;
var B = /[\\\/_+.#"@\[\(\{&]/g;
var K = /[\s-]/;
var X = /[\s-]/g;
function G(_, C, h, P, A, f, O) {
  if (f === C.length)
    return A === _.length ? U : k;
  var T2 = `${A},${f}`;
  if (O[T2] !== void 0)
    return O[T2];
  for (var L = P.charAt(f), c = h.indexOf(L, A), S = 0, E, N2, R, M2; c >= 0; )
    E = G(_, C, h, P, c + 1, f + 1, O), E > S && (c === A ? E *= U : m.test(_.charAt(c - 1)) ? (E *= H, R = _.slice(A, c - 1).match(B), R && A > 0 && (E *= Math.pow(u, R.length))) : K.test(_.charAt(c - 1)) ? (E *= Y, M2 = _.slice(A, c - 1).match(X), M2 && A > 0 && (E *= Math.pow(u, M2.length))) : (E *= J, A > 0 && (E *= Math.pow(u, c - A))), _.charAt(c) !== C.charAt(f) && (E *= $)), (E < p && h.charAt(c - 1) === P.charAt(f + 1) || P.charAt(f + 1) === P.charAt(f) && h.charAt(c - 1) !== P.charAt(f)) && (N2 = G(_, C, h, P, c + 1, f + 2, O), N2 * p > E && (E = N2 * p)), E > S && (S = E), c = h.indexOf(L, c + 1);
  return O[T2] = S, S;
}
function D(_) {
  return _.toLowerCase().replace(X, " ");
}
function W(_, C, h) {
  return _ = h && h.length > 0 ? `${_ + " " + h.join(" ")}` : _, G(_, C, D(_), D(C), 0, 0, {});
}

// node_modules/cmdk/dist/index.mjs
var t = __toESM(require_react(), 1);
var V = '[cmdk-group=""]';
var X2 = '[cmdk-group-items=""]';
var ge = '[cmdk-group-heading=""]';
var Y2 = '[cmdk-item=""]';
var le = `${Y2}:not([aria-disabled="true"])`;
var Q = "cmdk-item-select";
var M = "data-value";
var Re = (r, o, n) => W(r, o, n);
var ue = t.createContext(void 0);
var G2 = () => t.useContext(ue);
var de = t.createContext(void 0);
var Z = () => t.useContext(de);
var fe = t.createContext(void 0);
var me = t.forwardRef((r, o) => {
  let n = k2(() => {
    var e, s;
    return { search: "", value: (s = (e = r.value) != null ? e : r.defaultValue) != null ? s : "", filtered: { count: 0, items: /* @__PURE__ */ new Map(), groups: /* @__PURE__ */ new Set() } };
  }), u2 = k2(() => /* @__PURE__ */ new Set()), c = k2(() => /* @__PURE__ */ new Map()), d = k2(() => /* @__PURE__ */ new Map()), f = k2(() => /* @__PURE__ */ new Set()), p2 = pe(r), { label: v, children: b, value: l, onValueChange: y, filter: S, shouldFilter: C, loop: L, disablePointerSelection: ee = false, vimBindings: j = true, ...H2 } = r, te = t.useId(), $2 = t.useId(), K2 = t.useId(), x = t.useRef(null), g = Me();
  T(() => {
    if (l !== void 0) {
      let e = l.trim();
      n.current.value = e, h.emit();
    }
  }, [l]), T(() => {
    g(6, re);
  }, []);
  let h = t.useMemo(() => ({ subscribe: (e) => (f.current.add(e), () => f.current.delete(e)), snapshot: () => n.current, setState: (e, s, i) => {
    var a, m2, R;
    if (!Object.is(n.current[e], s)) {
      if (n.current[e] = s, e === "search")
        z(), q(), g(1, U2);
      else if (e === "value" && (i || g(5, re), ((a = p2.current) == null ? void 0 : a.value) !== void 0)) {
        let E = s != null ? s : "";
        (R = (m2 = p2.current).onValueChange) == null || R.call(m2, E);
        return;
      }
      h.emit();
    }
  }, emit: () => {
    f.current.forEach((e) => e());
  } }), []), B2 = t.useMemo(() => ({ value: (e, s, i) => {
    var a;
    s !== ((a = d.current.get(e)) == null ? void 0 : a.value) && (d.current.set(e, { value: s, keywords: i }), n.current.filtered.items.set(e, ne(s, i)), g(2, () => {
      q(), h.emit();
    }));
  }, item: (e, s) => (u2.current.add(e), s && (c.current.has(s) ? c.current.get(s).add(e) : c.current.set(s, /* @__PURE__ */ new Set([e]))), g(3, () => {
    z(), q(), n.current.value || U2(), h.emit();
  }), () => {
    d.current.delete(e), u2.current.delete(e), n.current.filtered.items.delete(e);
    let i = O();
    g(4, () => {
      z(), (i == null ? void 0 : i.getAttribute("id")) === e && U2(), h.emit();
    });
  }), group: (e) => (c.current.has(e) || c.current.set(e, /* @__PURE__ */ new Set()), () => {
    d.current.delete(e), c.current.delete(e);
  }), filter: () => p2.current.shouldFilter, label: v || r["aria-label"], disablePointerSelection: ee, listId: te, inputId: K2, labelId: $2, listInnerRef: x }), []);
  function ne(e, s) {
    var a, m2;
    let i = (m2 = (a = p2.current) == null ? void 0 : a.filter) != null ? m2 : Re;
    return e ? i(e, n.current.search, s) : 0;
  }
  function q() {
    if (!n.current.search || p2.current.shouldFilter === false)
      return;
    let e = n.current.filtered.items, s = [];
    n.current.filtered.groups.forEach((a) => {
      let m2 = c.current.get(a), R = 0;
      m2.forEach((E) => {
        let P = e.get(E);
        R = Math.max(P, R);
      }), s.push([a, R]);
    });
    let i = x.current;
    A().sort((a, m2) => {
      var P, _;
      let R = a.getAttribute("id"), E = m2.getAttribute("id");
      return ((P = e.get(E)) != null ? P : 0) - ((_ = e.get(R)) != null ? _ : 0);
    }).forEach((a) => {
      let m2 = a.closest(X2);
      m2 ? m2.appendChild(a.parentElement === m2 ? a : a.closest(`${X2} > *`)) : i.appendChild(a.parentElement === i ? a : a.closest(`${X2} > *`));
    }), s.sort((a, m2) => m2[1] - a[1]).forEach((a) => {
      let m2 = x.current.querySelector(`${V}[${M}="${encodeURIComponent(a[0])}"]`);
      m2 == null || m2.parentElement.appendChild(m2);
    });
  }
  function U2() {
    let e = A().find((i) => i.getAttribute("aria-disabled") !== "true"), s = e == null ? void 0 : e.getAttribute(M);
    h.setState("value", s || void 0);
  }
  function z() {
    var s, i, a, m2;
    if (!n.current.search || p2.current.shouldFilter === false) {
      n.current.filtered.count = u2.current.size;
      return;
    }
    n.current.filtered.groups = /* @__PURE__ */ new Set();
    let e = 0;
    for (let R of u2.current) {
      let E = (i = (s = d.current.get(R)) == null ? void 0 : s.value) != null ? i : "", P = (m2 = (a = d.current.get(R)) == null ? void 0 : a.keywords) != null ? m2 : [], _ = ne(E, P);
      n.current.filtered.items.set(R, _), _ > 0 && e++;
    }
    for (let [R, E] of c.current)
      for (let P of E)
        if (n.current.filtered.items.get(P) > 0) {
          n.current.filtered.groups.add(R);
          break;
        }
    n.current.filtered.count = e;
  }
  function re() {
    var s, i, a;
    let e = O();
    e && (((s = e.parentElement) == null ? void 0 : s.firstChild) === e && ((a = (i = e.closest(V)) == null ? void 0 : i.querySelector(ge)) == null || a.scrollIntoView({ block: "nearest" })), e.scrollIntoView({ block: "nearest" }));
  }
  function O() {
    var e;
    return (e = x.current) == null ? void 0 : e.querySelector(`${Y2}[aria-selected="true"]`);
  }
  function A() {
    var e;
    return Array.from((e = x.current) == null ? void 0 : e.querySelectorAll(le));
  }
  function W2(e) {
    let i = A()[e];
    i && h.setState("value", i.getAttribute(M));
  }
  function J2(e) {
    var R;
    let s = O(), i = A(), a = i.findIndex((E) => E === s), m2 = i[a + e];
    (R = p2.current) != null && R.loop && (m2 = a + e < 0 ? i[i.length - 1] : a + e === i.length ? i[0] : i[a + e]), m2 && h.setState("value", m2.getAttribute(M));
  }
  function oe(e) {
    let s = O(), i = s == null ? void 0 : s.closest(V), a;
    for (; i && !a; )
      i = e > 0 ? we(i, V) : Ie(i, V), a = i == null ? void 0 : i.querySelector(le);
    a ? h.setState("value", a.getAttribute(M)) : J2(e);
  }
  let ie = () => W2(A().length - 1), ae = (e) => {
    e.preventDefault(), e.metaKey ? ie() : e.altKey ? oe(1) : J2(1);
  }, se = (e) => {
    e.preventDefault(), e.metaKey ? W2(0) : e.altKey ? oe(-1) : J2(-1);
  };
  return t.createElement($8927f6f2acc4f386$export$250ffa63cdc0d034.div, { ref: o, tabIndex: -1, ...H2, "cmdk-root": "", onKeyDown: (e) => {
    var s;
    if ((s = H2.onKeyDown) == null || s.call(H2, e), !e.defaultPrevented)
      switch (e.key) {
        case "n":
        case "j": {
          j && e.ctrlKey && ae(e);
          break;
        }
        case "ArrowDown": {
          ae(e);
          break;
        }
        case "p":
        case "k": {
          j && e.ctrlKey && se(e);
          break;
        }
        case "ArrowUp": {
          se(e);
          break;
        }
        case "Home": {
          e.preventDefault(), W2(0);
          break;
        }
        case "End": {
          e.preventDefault(), ie();
          break;
        }
        case "Enter":
          if (!e.nativeEvent.isComposing && e.keyCode !== 229) {
            e.preventDefault();
            let i = O();
            if (i) {
              let a = new Event(Q);
              i.dispatchEvent(a);
            }
          }
      }
  } }, t.createElement("label", { "cmdk-label": "", htmlFor: B2.inputId, id: B2.labelId, style: De }, v), F(r, (e) => t.createElement(de.Provider, { value: h }, t.createElement(ue.Provider, { value: B2 }, e))));
});
var be = t.forwardRef((r, o) => {
  var K2, x;
  let n = t.useId(), u2 = t.useRef(null), c = t.useContext(fe), d = G2(), f = pe(r), p2 = (x = (K2 = f.current) == null ? void 0 : K2.forceMount) != null ? x : c == null ? void 0 : c.forceMount;
  T(() => {
    if (!p2)
      return d.item(n, c == null ? void 0 : c.id);
  }, [p2]);
  let v = ve(n, u2, [r.value, r.children, u2], r.keywords), b = Z(), l = D2((g) => g.value && g.value === v.current), y = D2((g) => p2 || d.filter() === false ? true : g.search ? g.filtered.items.get(n) > 0 : true);
  t.useEffect(() => {
    let g = u2.current;
    if (!(!g || r.disabled))
      return g.addEventListener(Q, S), () => g.removeEventListener(Q, S);
  }, [y, r.onSelect, r.disabled]);
  function S() {
    var g, h;
    C(), (h = (g = f.current).onSelect) == null || h.call(g, v.current);
  }
  function C() {
    b.setState("value", v.current, true);
  }
  if (!y)
    return null;
  let { disabled: L, value: ee, onSelect: j, forceMount: H2, keywords: te, ...$2 } = r;
  return t.createElement($8927f6f2acc4f386$export$250ffa63cdc0d034.div, { ref: N([u2, o]), ...$2, id: n, "cmdk-item": "", role: "option", "aria-disabled": !!L, "aria-selected": !!l, "data-disabled": !!L, "data-selected": !!l, onPointerMove: L || d.disablePointerSelection ? void 0 : C, onClick: L ? void 0 : S }, r.children);
});
var he = t.forwardRef((r, o) => {
  let { heading: n, children: u2, forceMount: c, ...d } = r, f = t.useId(), p2 = t.useRef(null), v = t.useRef(null), b = t.useId(), l = G2(), y = D2((C) => c || l.filter() === false ? true : C.search ? C.filtered.groups.has(f) : true);
  T(() => l.group(f), []), ve(f, p2, [r.value, r.heading, v]);
  let S = t.useMemo(() => ({ id: f, forceMount: c }), [c]);
  return t.createElement($8927f6f2acc4f386$export$250ffa63cdc0d034.div, { ref: N([p2, o]), ...d, "cmdk-group": "", role: "presentation", hidden: y ? void 0 : true }, n && t.createElement("div", { ref: v, "cmdk-group-heading": "", "aria-hidden": true, id: b }, n), F(r, (C) => t.createElement("div", { "cmdk-group-items": "", role: "group", "aria-labelledby": n ? b : void 0 }, t.createElement(fe.Provider, { value: S }, C))));
});
var ye = t.forwardRef((r, o) => {
  let { alwaysRender: n, ...u2 } = r, c = t.useRef(null), d = D2((f) => !f.search);
  return !n && !d ? null : t.createElement($8927f6f2acc4f386$export$250ffa63cdc0d034.div, { ref: N([c, o]), ...u2, "cmdk-separator": "", role: "separator" });
});
var Ee = t.forwardRef((r, o) => {
  let { onValueChange: n, ...u2 } = r, c = r.value != null, d = Z(), f = D2((l) => l.search), p2 = D2((l) => l.value), v = G2(), b = t.useMemo(() => {
    var y;
    let l = (y = v.listInnerRef.current) == null ? void 0 : y.querySelector(`${Y2}[${M}="${encodeURIComponent(p2)}"]`);
    return l == null ? void 0 : l.getAttribute("id");
  }, []);
  return t.useEffect(() => {
    r.value != null && d.setState("search", r.value);
  }, [r.value]), t.createElement($8927f6f2acc4f386$export$250ffa63cdc0d034.input, { ref: o, ...u2, "cmdk-input": "", autoComplete: "off", autoCorrect: "off", spellCheck: false, "aria-autocomplete": "list", role: "combobox", "aria-expanded": true, "aria-controls": v.listId, "aria-labelledby": v.labelId, "aria-activedescendant": b, id: v.inputId, type: "text", value: c ? r.value : f, onChange: (l) => {
    c || d.setState("search", l.target.value), n == null || n(l.target.value);
  } });
});
var Se = t.forwardRef((r, o) => {
  let { children: n, label: u2 = "Suggestions", ...c } = r, d = t.useRef(null), f = t.useRef(null), p2 = G2();
  return t.useEffect(() => {
    if (f.current && d.current) {
      let v = f.current, b = d.current, l, y = new ResizeObserver(() => {
        l = requestAnimationFrame(() => {
          let S = v.offsetHeight;
          b.style.setProperty("--cmdk-list-height", S.toFixed(1) + "px");
        });
      });
      return y.observe(v), () => {
        cancelAnimationFrame(l), y.unobserve(v);
      };
    }
  }, []), t.createElement($8927f6f2acc4f386$export$250ffa63cdc0d034.div, { ref: N([d, o]), ...c, "cmdk-list": "", role: "listbox", "aria-label": u2, id: p2.listId }, F(r, (v) => t.createElement("div", { ref: N([f, p2.listInnerRef]), "cmdk-list-sizer": "" }, v)));
});
var Ce = t.forwardRef((r, o) => {
  let { open: n, onOpenChange: u2, overlayClassName: c, contentClassName: d, container: f, ...p2 } = r;
  return t.createElement($5d3850c4d0b4e6c7$export$be92b6f5f03c0fe9, { open: n, onOpenChange: u2 }, t.createElement($5d3850c4d0b4e6c7$export$602eac185826482c, { container: f }, t.createElement($5d3850c4d0b4e6c7$export$c6fdb837b070b4ff, { "cmdk-overlay": "", className: c }), t.createElement($5d3850c4d0b4e6c7$export$7c6e2c02157bb7d2, { "aria-label": r.label, "cmdk-dialog": "", className: d }, t.createElement(me, { ref: o, ...p2 }))));
});
var xe = t.forwardRef((r, o) => D2((u2) => u2.filtered.count === 0) ? t.createElement($8927f6f2acc4f386$export$250ffa63cdc0d034.div, { ref: o, ...r, "cmdk-empty": "", role: "presentation" }) : null);
var Pe = t.forwardRef((r, o) => {
  let { progress: n, children: u2, label: c = "Loading...", ...d } = r;
  return t.createElement($8927f6f2acc4f386$export$250ffa63cdc0d034.div, { ref: o, ...d, "cmdk-loading": "", role: "progressbar", "aria-valuenow": n, "aria-valuemin": 0, "aria-valuemax": 100, "aria-label": c }, F(r, (f) => t.createElement("div", { "aria-hidden": true }, f)));
});
var He = Object.assign(me, { List: Se, Item: be, Input: Ee, Group: he, Separator: ye, Dialog: Ce, Empty: xe, Loading: Pe });
function we(r, o) {
  let n = r.nextElementSibling;
  for (; n; ) {
    if (n.matches(o))
      return n;
    n = n.nextElementSibling;
  }
}
function Ie(r, o) {
  let n = r.previousElementSibling;
  for (; n; ) {
    if (n.matches(o))
      return n;
    n = n.previousElementSibling;
  }
}
function pe(r) {
  let o = t.useRef(r);
  return T(() => {
    o.current = r;
  }), o;
}
var T = typeof window == "undefined" ? t.useEffect : t.useLayoutEffect;
function k2(r) {
  let o = t.useRef();
  return o.current === void 0 && (o.current = r()), o;
}
function N(r) {
  return (o) => {
    r.forEach((n) => {
      typeof n == "function" ? n(o) : n != null && (n.current = o);
    });
  };
}
function D2(r) {
  let o = Z(), n = () => r(o.snapshot());
  return t.useSyncExternalStore(o.subscribe, n, n);
}
function ve(r, o, n, u2 = []) {
  let c = t.useRef(), d = G2();
  return T(() => {
    var v;
    let f = (() => {
      var b;
      for (let l of n) {
        if (typeof l == "string")
          return l.trim();
        if (typeof l == "object" && "current" in l)
          return l.current ? (b = l.current.textContent) == null ? void 0 : b.trim() : c.current;
      }
    })(), p2 = u2.map((b) => b.trim());
    d.value(r, f, p2), (v = o.current) == null || v.setAttribute(M, f), c.current = f;
  }), c;
}
var Me = () => {
  let [r, o] = t.useState(), n = k2(() => /* @__PURE__ */ new Map());
  return T(() => {
    n.current.forEach((u2) => u2()), n.current = /* @__PURE__ */ new Map();
  }, [r]), (u2, c) => {
    n.current.set(u2, c), o({});
  };
};
function Te(r) {
  let o = r.type;
  return typeof o == "function" ? o(r.props) : "render" in o ? o.render(r.props) : r;
}
function F({ asChild: r, children: o }, n) {
  return r && t.isValidElement(o) ? t.cloneElement(Te(o), { ref: o.ref }, n(o.props.children)) : n(o);
}
var De = { position: "absolute", width: "1px", height: "1px", padding: "0", margin: "-1px", overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0" };

// app/components/ui/command.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\ui\\\\command.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\ui\\command.tsx"
  );
  import.meta.hot.lastModified = "1710226278143.4185";
}
var Command = React.forwardRef(_c3 = ({
  className,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(He, { ref, className: cn("flex h-full w-full flex-col overflow-hidden rounded-md bg-white text-slate-950 dark:bg-slate-950 dark:text-slate-50", className), ...props }, void 0, false, {
  fileName: "app/components/ui/command.tsx",
  lineNumber: 29,
  columnNumber: 12
}, this));
_c22 = Command;
Command.displayName = He.displayName;
var CommandDialog = ({
  children,
  ...props
}) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Dialog, { ...props, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(DialogContent, { className: "overflow-hidden p-0 shadow-lg", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Command, { className: "[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-slate-500 [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5 dark:[&_[cmdk-group-heading]]:text-slate-400", children }, void 0, false, {
    fileName: "app/components/ui/command.tsx",
    lineNumber: 38,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/components/ui/command.tsx",
    lineNumber: 37,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/ui/command.tsx",
    lineNumber: 36,
    columnNumber: 10
  }, this);
};
_c32 = CommandDialog;
var CommandInput = React.forwardRef(_c4 = ({
  className,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex items-center border-b px-3", "cmdk-input-wrapper": "", children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Search, { className: "mr-2 h-4 w-4 shrink-0 opacity-50" }, void 0, false, {
    fileName: "app/components/ui/command.tsx",
    lineNumber: 49,
    columnNumber: 5
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(He.Input, { ref, className: cn("flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-slate-500 disabled:cursor-not-allowed disabled:opacity-50 dark:placeholder:text-slate-400", className), ...props }, void 0, false, {
    fileName: "app/components/ui/command.tsx",
    lineNumber: 50,
    columnNumber: 5
  }, this)
] }, void 0, true, {
  fileName: "app/components/ui/command.tsx",
  lineNumber: 48,
  columnNumber: 12
}, this));
_c5 = CommandInput;
CommandInput.displayName = He.Input.displayName;
var CommandList = React.forwardRef(_c6 = ({
  className,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(He.List, { ref, className: cn("max-h-[300px] overflow-y-auto overflow-x-hidden", className), ...props }, void 0, false, {
  fileName: "app/components/ui/command.tsx",
  lineNumber: 57,
  columnNumber: 12
}, this));
_c7 = CommandList;
CommandList.displayName = He.List.displayName;
var CommandEmpty = React.forwardRef(_c8 = (props, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(He.Empty, { ref, className: "py-6 text-center text-sm", ...props }, void 0, false, {
  fileName: "app/components/ui/command.tsx",
  lineNumber: 60,
  columnNumber: 61
}, this));
_c9 = CommandEmpty;
CommandEmpty.displayName = He.Empty.displayName;
var CommandGroup = React.forwardRef(_c10 = ({
  className,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(He.Group, { ref, className: cn("overflow-hidden p-1 text-slate-950 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-slate-500 dark:text-slate-50 dark:[&_[cmdk-group-heading]]:text-slate-400", className), ...props }, void 0, false, {
  fileName: "app/components/ui/command.tsx",
  lineNumber: 66,
  columnNumber: 12
}, this));
_c11 = CommandGroup;
CommandGroup.displayName = He.Group.displayName;
var CommandSeparator = React.forwardRef(_c12 = ({
  className,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(He.Separator, { ref, className: cn("-mx-1 h-px bg-slate-200 dark:bg-slate-800", className), ...props }, void 0, false, {
  fileName: "app/components/ui/command.tsx",
  lineNumber: 72,
  columnNumber: 12
}, this));
_c13 = CommandSeparator;
CommandSeparator.displayName = He.Separator.displayName;
var CommandItem = React.forwardRef(_c14 = ({
  className,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(He.Item, { ref, className: cn("relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-slate-100 aria-selected:text-slate-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:aria-selected:bg-slate-800 dark:aria-selected:text-slate-50", className), ...props }, void 0, false, {
  fileName: "app/components/ui/command.tsx",
  lineNumber: 78,
  columnNumber: 12
}, this));
_c15 = CommandItem;
CommandItem.displayName = He.Item.displayName;
var CommandShortcut = ({
  className,
  ...props
}) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: cn("ml-auto text-xs tracking-widest text-slate-500 dark:text-slate-400", className), ...props }, void 0, false, {
    fileName: "app/components/ui/command.tsx",
    lineNumber: 85,
    columnNumber: 10
  }, this);
};
_c16 = CommandShortcut;
CommandShortcut.displayName = "CommandShortcut";
var _c3;
var _c22;
var _c32;
var _c4;
var _c5;
var _c6;
var _c7;
var _c8;
var _c9;
var _c10;
var _c11;
var _c12;
var _c13;
var _c14;
var _c15;
var _c16;
$RefreshReg$(_c3, "Command$React.forwardRef");
$RefreshReg$(_c22, "Command");
$RefreshReg$(_c32, "CommandDialog");
$RefreshReg$(_c4, "CommandInput$React.forwardRef");
$RefreshReg$(_c5, "CommandInput");
$RefreshReg$(_c6, "CommandList$React.forwardRef");
$RefreshReg$(_c7, "CommandList");
$RefreshReg$(_c8, "CommandEmpty$React.forwardRef");
$RefreshReg$(_c9, "CommandEmpty");
$RefreshReg$(_c10, "CommandGroup$React.forwardRef");
$RefreshReg$(_c11, "CommandGroup");
$RefreshReg$(_c12, "CommandSeparator$React.forwardRef");
$RefreshReg$(_c13, "CommandSeparator");
$RefreshReg$(_c14, "CommandItem$React.forwardRef");
$RefreshReg$(_c15, "CommandItem");
$RefreshReg$(_c16, "CommandShortcut");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/kendo/charts/waterfall/kendoWaterfallChart.client.js
var import_hammerjs = __toESM(require_hammer());
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\kendo\\\\charts\\\\waterfall\\\\kendoWaterfallChart.client.js"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\kendo\\charts\\waterfall\\kendoWaterfallChart.client.js"
  );
  import.meta.hot.lastModified = "1709718900948.271";
}
function pointColor(point) {
  let summary = point.dataItem.summary;
  if (summary) {
    return summary === "total" ? "#f43f5e" : "gray";
  }
  if (point.value > 0) {
    return "skyblue";
  } else {
    return "red";
  }
}
function WaterfallChartContainer({
  data,
  field,
  category,
  summary,
  format = "n0",
  position = "insideEnd"
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Chart, { style: {
    height: 250
  }, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(ChartSeries, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(ChartSeriesItem, { type: "waterfall", data, color: pointColor, field: "field", categoryField: "category", summaryField: "summary", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(ChartSeriesLabels, { format }, void 0, false, {
      fileName: "app/kendo/charts/waterfall/kendoWaterfallChart.client.js",
      lineNumber: 49,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/kendo/charts/waterfall/kendoWaterfallChart.client.js",
      lineNumber: 48,
      columnNumber: 7
    }, this) }, void 0, false, {
      fileName: "app/kendo/charts/waterfall/kendoWaterfallChart.client.js",
      lineNumber: 47,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(ChartValueAxis, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(ChartValueAxisItem, {}, void 0, false, {
      fileName: "app/kendo/charts/waterfall/kendoWaterfallChart.client.js",
      lineNumber: 53,
      columnNumber: 7
    }, this) }, void 0, false, {
      fileName: "app/kendo/charts/waterfall/kendoWaterfallChart.client.js",
      lineNumber: 52,
      columnNumber: 5
    }, this)
  ] }, void 0, true, {
    fileName: "app/kendo/charts/waterfall/kendoWaterfallChart.client.js",
    lineNumber: 43,
    columnNumber: 10
  }, this);
}
_c17 = WaterfallChartContainer;
var _c17;
$RefreshReg$(_c17, "WaterfallChartContainer");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/kendo/charts/waterfall/WrapperWaterfallChart.jsx
var import_jsx_dev_runtime5 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\kendo\\\\charts\\\\waterfall\\\\WrapperWaterfallChart.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\kendo\\charts\\waterfall\\WrapperWaterfallChart.jsx"
  );
  import.meta.hot.lastModified = "1708503722820.1165";
}
var Fallback = () => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("svg", { width: 24, height: 24, fill: "none", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("path", { d: "M12 4.75v1.5M17.127 6.873l-1.061 1.061M19.25 12h-1.5M17.127 17.127l-1.061-1.061M12 17.75v1.5M7.934 16.066l-1.06 1.06M6.25 12h-1.5M7.934 7.934l-1.06-1.06", stroke: "currentColor", strokeWidth: 0, strokeLinecap: "round", strokeLinejoin: "round" }, void 0, false, {
    fileName: "app/kendo/charts/waterfall/WrapperWaterfallChart.jsx",
    lineNumber: 25,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/kendo/charts/waterfall/WrapperWaterfallChart.jsx",
    lineNumber: 24,
    columnNumber: 11
  }, this) }, void 0, false, {
    fileName: "app/kendo/charts/waterfall/WrapperWaterfallChart.jsx",
    lineNumber: 23,
    columnNumber: 10
  }, this);
};
_c18 = Fallback;
function WrapperWaterfallChart({
  data,
  field,
  category,
  summary,
  format = "C0",
  position = "insideEnd"
}) {
  return typeof document !== "undefined" ? /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(WaterfallChartContainer, { data }, void 0, false, {
    fileName: "app/kendo/charts/waterfall/WrapperWaterfallChart.jsx",
    lineNumber: 38,
    columnNumber: 44
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Fallback, {}, void 0, false, {
    fileName: "app/kendo/charts/waterfall/WrapperWaterfallChart.jsx",
    lineNumber: 38,
    columnNumber: 86
  }, this);
}
_c23 = WrapperWaterfallChart;
var _c18;
var _c23;
$RefreshReg$(_c18, "Fallback");
$RefreshReg$(_c23, "WrapperWaterfallChart");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/kendo/rawData/truckData.js
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\kendo\\rawData\\truckData.js"
  );
  import.meta.hot.lastModified = "1708503722852.157";
}
var tripData = [
  {
    category: "Variable cost per trip",
    field: 100168
  },
  {
    category: "Fixed cost per Trip",
    field: 21640
  },
  {
    category: "Admin Cost per Trip",
    field: 16197
  },
  {
    category: "Return of sale cost per trip",
    field: -1.26
  },
  // {
  //   category: "Total",
  //   field: 136744,
  // },
  {
    category: "Total",
    summary: "total"
  }
];
var bikeData = [
  {
    category: "Variable Cost",
    field: 1518
  },
  {
    category: "Fixed Cost",
    field: 309
  },
  {
    category: "Admin Cost",
    field: 245
  },
  {
    category: "Profit per bike",
    field: 207
  },
  //  {
  //    category: "Total",
  //    field: 2279,
  //  },
  {
    category: "Total",
    summary: "total"
  }
];

// app/data/truckData.js
var import_jsx_dev_runtime6 = __toESM(require_jsx_dev_runtime());
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\data\\truckData.js"
  );
  import.meta.hot.lastModified = "1710768510836.412";
}
var kpiService_m = [
  {
    Name: "Cost per Trip",
    container: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(WrapperWaterfallChart, { data: tripData }, void 0, false, {
      fileName: "app/data/truckData.js",
      lineNumber: 30,
      columnNumber: 16
    }, this)
  },
  {
    Name: "Cost per Unit",
    container: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(WrapperWaterfallChart, { data: bikeData }, void 0, false, {
      fileName: "app/data/truckData.js",
      lineNumber: 34,
      columnNumber: 16
    }, this)
  }
];

// app/components/TruckForm.tsx
var import_jsx_dev_runtime7 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\TruckForm.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\TruckForm.tsx"
  );
  import.meta.hot.lastModified = "1710768488189.4062";
}
var navigation = [{
  id: 1,
  name: "S&OP",
  to: "/snop/optimize"
}, {
  id: 2,
  name: "Demand",
  to: "#"
}, {
  id: 3,
  name: "Inventory",
  to: "#"
}, {
  id: 4,
  name: "Logistics",
  to: "#"
}, {
  id: 5,
  name: "Procurement",
  to: "#"
}];
var stats = [{
  name: "Cost per Unit (INR/Unit)",
  stat: "2,279"
}, {
  name: "Cost per Trip Margin",
  stat: "136,744"
}, {
  name: "Cost per km",
  stat: "41"
}];
var frameworks = [{
  value: "next.js",
  label: "Kolkata"
}, {
  value: "sveltekit",
  label: "Chennai"
}, {
  value: "nuxt.js",
  label: "Nuxt.js"
}, {
  value: "remix",
  label: "Remix"
}, {
  value: "astro",
  label: "Astro"
}];
function DemoContainer({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: cn("flex items-center justify-center [&>div]:w-full", className), ...props }, void 0, false, {
    fileName: "app/components/TruckForm.tsx",
    lineNumber: 98,
    columnNumber: 10
  }, this);
}
_c19 = DemoContainer;
function TruckForm({
  truckData
}) {
  _s();
  const navigate = useNavigate();
  const params = useParams();
  const [tyopen, settyOpen] = React2.useState(false);
  const [value, setValue] = React2.useState("");
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "m-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Form, { method: "post", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "mx-2 py-3.5 rounded-t-lg bg-sky-500 border-b ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("nav", { className: "ml-6 pl-6 flex items-center justify-center", "aria-label": "Global", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: " flex gap-x-8 justify-center ", children: navigation.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Link, { to: item.to, className: " text-base lg:text-lg font-semibold leading-6 text-white hover:text-gray-200", children: item.name }, item.id, false, {
      fileName: "app/components/TruckForm.tsx",
      lineNumber: 131,
      columnNumber: 39
    }, this)) }, void 0, false, {
      fileName: "app/components/TruckForm.tsx",
      lineNumber: 130,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/components/TruckForm.tsx",
      lineNumber: 129,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/TruckForm.tsx",
      lineNumber: 128,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "bg-white mx-2 shadow-md rounded-b-lg", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "flex items-center  justify-between ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("h2", { className: "text-xl lg:text-3xl font-bold ml-4 p-2 text-transparent bg-clip-text  bg-gradient-to-r from-blue-700 via-sky-700 to-blue-700 font-display", children: "Transportation Cleansheet" }, void 0, false, {
        fileName: "app/components/TruckForm.tsx",
        lineNumber: 139,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/TruckForm.tsx",
        lineNumber: 138,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "mt-2 items-start justify-center gap-6 rounded-lg p-4 md:grid lg:grid-cols-2 xl:grid-cols-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "flex items-center space-x-4 justify-between mb-4 p-2 border-b rounded-lg", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "flex items-center space-x-4", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Input, { className: "text-blue-900 w-40", name: "origin", defaultValue: truckData?.origin || "Chennai" }, void 0, false, {
              fileName: "app/components/TruckForm.tsx",
              lineNumber: 147,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Input, { className: "mx-2 text-blue-900 w-40", name: "destination", defaultValue: truckData?.destination || "Kolkata" }, void 0, false, {
              fileName: "app/components/TruckForm.tsx",
              lineNumber: 149,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Input, { className: "mx-2 text-blue-900 w-40", name: "distance", defaultValue: truckData?.distance || "1,676" }, void 0, false, {
              fileName: "app/components/TruckForm.tsx",
              lineNumber: 151,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Input, { className: "mx-2 text-blue-900 w-40", name: "backhaul", defaultValue: truckData?.backhaul || "backhaul" }, void 0, false, {
              fileName: "app/components/TruckForm.tsx",
              lineNumber: 153,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/TruckForm.tsx",
            lineNumber: 146,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/components/TruckForm.tsx",
            lineNumber: 145,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "mt-8 items-start justify-center gap-6 grid grid-cols-1 lg:grid-cols-2", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(DemoContainer, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Card, { className: "  text-blue-900", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(CardHeader, { className: "space-y-1 ", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(CardTitle, { className: "flex items-center", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(TruckIcon_default, { className: "h-8 w-8 mr-2" }, void 0, false, {
                    fileName: "app/components/TruckForm.tsx",
                    lineNumber: 162,
                    columnNumber: 25
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("span", { className: "text-2xl", children: "Truck Parameters" }, void 0, false, {
                    fileName: "app/components/TruckForm.tsx",
                    lineNumber: 163,
                    columnNumber: 25
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/components/TruckForm.tsx",
                  lineNumber: 161,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "border-b" }, void 0, false, {
                  fileName: "app/components/TruckForm.tsx",
                  lineNumber: 166,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "app/components/TruckForm.tsx",
                lineNumber: 160,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(CardContent, { className: "grid gap-10 mb-2", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "grid grid-cols-2 items-center gap-1", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "text-xl text-blue-900 font-semibold ", children: "Truck Type" }, void 0, false, {
                    fileName: "app/components/TruckForm.tsx",
                    lineNumber: 171,
                    columnNumber: 25
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Popover, { open: tyopen, onOpenChange: settyOpen, children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(PopoverTrigger, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Button, { variant: "outline", role: "combobox", "aria-expanded": tyopen, className: " w-[155px] justify-between text-xl ", children: [
                      value ? frameworks.find((framework) => framework.value === value)?.label : "Kolkata",
                      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(ChevronsUpDown, { className: "ml-2 h-4 w-4 shrink-0 opacity-50" }, void 0, false, {
                        fileName: "app/components/TruckForm.tsx",
                        lineNumber: 179,
                        columnNumber: 33
                      }, this)
                    ] }, void 0, true, {
                      fileName: "app/components/TruckForm.tsx",
                      lineNumber: 177,
                      columnNumber: 31
                    }, this) }, void 0, false, {
                      fileName: "app/components/TruckForm.tsx",
                      lineNumber: 176,
                      columnNumber: 29
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(PopoverContent, { className: "w-[200px] p-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Command, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(CommandGroup, { children: frameworks.map((framework) => /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(CommandItem, { value: framework.value, onSelect: (currentValue) => {
                      setValue(currentValue === value ? "" : currentValue);
                      settyOpen(false);
                    }, children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Check, { className: cn("mr-2 h-4 w-4", value === framework.value ? "opacity-100" : "opacity-0") }, void 0, false, {
                        fileName: "app/components/TruckForm.tsx",
                        lineNumber: 189,
                        columnNumber: 39
                      }, this),
                      framework.label
                    ] }, framework.value, true, {
                      fileName: "app/components/TruckForm.tsx",
                      lineNumber: 185,
                      columnNumber: 64
                    }, this)) }, void 0, false, {
                      fileName: "app/components/TruckForm.tsx",
                      lineNumber: 184,
                      columnNumber: 33
                    }, this) }, void 0, false, {
                      fileName: "app/components/TruckForm.tsx",
                      lineNumber: 183,
                      columnNumber: 31
                    }, this) }, void 0, false, {
                      fileName: "app/components/TruckForm.tsx",
                      lineNumber: 182,
                      columnNumber: 29
                    }, this)
                  ] }, void 0, true, {
                    fileName: "app/components/TruckForm.tsx",
                    lineNumber: 175,
                    columnNumber: 27
                  }, this) }, void 0, false, {
                    fileName: "app/components/TruckForm.tsx",
                    lineNumber: 174,
                    columnNumber: 25
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/components/TruckForm.tsx",
                  lineNumber: 170,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(TruckInput, { truck: truckData }, void 0, false, {
                  fileName: "app/components/TruckForm.tsx",
                  lineNumber: 199,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "app/components/TruckForm.tsx",
                lineNumber: 169,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/components/TruckForm.tsx",
              lineNumber: 159,
              columnNumber: 19
            }, this) }, void 0, false, {
              fileName: "app/components/TruckForm.tsx",
              lineNumber: 158,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(DemoContainer, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Card, { className: " text-blue-900", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(CardHeader, { className: "space-y-1", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(CardTitle, { className: "flex items-center", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(MapIcon_default, { className: "h-8 w-8 mr-2" }, void 0, false, {
                    fileName: "app/components/TruckForm.tsx",
                    lineNumber: 207,
                    columnNumber: 25
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("span", { className: "text-2xl", children: " Route Admin Expenses" }, void 0, false, {
                    fileName: "app/components/TruckForm.tsx",
                    lineNumber: 208,
                    columnNumber: 25
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/components/TruckForm.tsx",
                  lineNumber: 206,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "border-b" }, void 0, false, {
                  fileName: "app/components/TruckForm.tsx",
                  lineNumber: 211,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "app/components/TruckForm.tsx",
                lineNumber: 205,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(CardContent, { className: "grid gap-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(AdminInput, { admin: truckData }, void 0, false, {
                fileName: "app/components/TruckForm.tsx",
                lineNumber: 214,
                columnNumber: 23
              }, this) }, void 0, false, {
                fileName: "app/components/TruckForm.tsx",
                lineNumber: 213,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/components/TruckForm.tsx",
              lineNumber: 204,
              columnNumber: 19
            }, this) }, void 0, false, {
              fileName: "app/components/TruckForm.tsx",
              lineNumber: 203,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/TruckForm.tsx",
            lineNumber: 157,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "flex justify-end  pt-6 rounded-lg", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Button, { className: "bg-blue-900 hover:bg-blue-800 text-lg", children: params.bkt ? "Submitting" : "Submit" }, void 0, false, {
            fileName: "app/components/TruckForm.tsx",
            lineNumber: 220,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/components/TruckForm.tsx",
            lineNumber: 219,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/TruckForm.tsx",
          lineNumber: 144,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(DemoContainer, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Card, { className: "shadow-lg text-blue-900", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(CardHeader, { className: "space-y-1", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(CardTitle, { className: "flex items-center", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(PresentationChartLineIcon_default, { className: "h-8 w-8 mr-2" }, void 0, false, {
                fileName: "app/components/TruckForm.tsx",
                lineNumber: 231,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("span", { className: "text-2xl", children: "Cleansheet Summary" }, void 0, false, {
                fileName: "app/components/TruckForm.tsx",
                lineNumber: 232,
                columnNumber: 23
              }, this)
            ] }, void 0, true, {
              fileName: "app/components/TruckForm.tsx",
              lineNumber: 230,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "border-b" }, void 0, false, {
              fileName: "app/components/TruckForm.tsx",
              lineNumber: 235,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/TruckForm.tsx",
            lineNumber: 229,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(CardContent, { className: "grid gap-4", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("dl", { className: "grid grid-cols-1 gap-6 sm:grid-cols-3", children: stats.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "rounded-2xl bg-gray-100 border px-4 py-5 shadow", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("dd", { className: "flex justify-center mt-1 text-3xl font-semibold tracking-tight text-blue-900", children: item.stat }, void 0, false, {
                fileName: "app/components/TruckForm.tsx",
                lineNumber: 240,
                columnNumber: 29
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("dt", { className: "mt-2 flex justify-center truncate text-sm font-medium text-gray-500", children: item.name }, void 0, false, {
                fileName: "app/components/TruckForm.tsx",
                lineNumber: 243,
                columnNumber: 29
              }, this)
            ] }, item.name, true, {
              fileName: "app/components/TruckForm.tsx",
              lineNumber: 239,
              columnNumber: 44
            }, this)) }, void 0, false, {
              fileName: "app/components/TruckForm.tsx",
              lineNumber: 238,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("ul", { role: "list", className: "grid grid-cols-1 gap-2 mt-2", children: kpiService_m.map((kpi) => /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { className: "col-span-1 flex flex-col divide-y divide-white", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "relative flex flex-1 flex-col p-2", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "flex items-baseline gap-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("h3", { className: "text-base font-medium text-gray-900", children: kpi.Name }, void 0, false, {
                fileName: "app/components/TruckForm.tsx",
                lineNumber: 255,
                columnNumber: 33
              }, this) }, void 0, false, {
                fileName: "app/components/TruckForm.tsx",
                lineNumber: 253,
                columnNumber: 29
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "mt-2", children: kpi.container }, void 0, false, {
                fileName: "app/components/TruckForm.tsx",
                lineNumber: 260,
                columnNumber: 29
              }, this)
            ] }, void 0, true, {
              fileName: "app/components/TruckForm.tsx",
              lineNumber: 252,
              columnNumber: 27
            }, this) }, kpi.Name, false, {
              fileName: "app/components/TruckForm.tsx",
              lineNumber: 251,
              columnNumber: 48
            }, this)) }, void 0, false, {
              fileName: "app/components/TruckForm.tsx",
              lineNumber: 250,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/TruckForm.tsx",
            lineNumber: 237,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/TruckForm.tsx",
          lineNumber: 228,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/components/TruckForm.tsx",
          lineNumber: 227,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/components/TruckForm.tsx",
          lineNumber: 226,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/TruckForm.tsx",
        lineNumber: 143,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/TruckForm.tsx",
      lineNumber: 137,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/TruckForm.tsx",
    lineNumber: 127,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/TruckForm.tsx",
    lineNumber: 126,
    columnNumber: 10
  }, this);
}
_s(TruckForm, "a4ejNUju6YGMN8HCgVmhwTXGZD0=", false, function() {
  return [useNavigate, useParams];
});
_c24 = TruckForm;
var _c19;
var _c24;
$RefreshReg$(_c19, "DemoContainer");
$RefreshReg$(_c24, "TruckForm");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/snop.truck.tsx
var import_input4 = __toESM(require_input());
var import_truck = __toESM(require_truck());
var import_jsx_dev_runtime8 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\snop.truck.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\snop.truck.tsx"
  );
  import.meta.hot.lastModified = "1710756168338.3523";
}
function SnopInput() {
  _s2();
  const {
    snopTruck
  } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(TruckForm, { truckData: snopTruck }, void 0, false, {
    fileName: "app/routes/snop.truck.tsx",
    lineNumber: 57,
    columnNumber: 10
  }, this);
}
_s2(SnopInput, "MX2T+/mrJxNDRWNiqVo4M2meCWI=", false, function() {
  return [useLoaderData];
});
_c20 = SnopInput;
var _c20;
$RefreshReg$(_c20, "SnopInput");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  SnopInput as default
};
//# sourceMappingURL=/build/routes/snop.truck-CMTVQJJY.js.map
