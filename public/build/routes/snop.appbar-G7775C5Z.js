import {
  Link
} from "/build/_shared/chunk-NON4LQMM.js";
import {
  ArchiveBoxArrowDownIcon_default,
  ArrowUpRightIcon_default,
  BanknotesIcon_default,
  CircleStackIcon_default,
  CubeIcon_default,
  DocumentMagnifyingGlassIcon_default,
  PresentationChartLineIcon_default,
  ShoppingCartIcon_default,
  SpeakerWaveIcon_default
} from "/build/_shared/chunk-RRHQD3BR.js";
import "/build/_shared/chunk-GIAAE3CH.js";
import {
  createHotContext
} from "/build/_shared/chunk-K4XMOQHS.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import "/build/_shared/chunk-BOXFZXVX.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/snop.appbar.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\snop.appbar.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\snop.appbar.jsx"
  );
  import.meta.hot.lastModified = "1711094604984.4214";
}
var actions = [{
  icon: DocumentMagnifyingGlassIcon_default,
  name: "Overview",
  to: "/snop/dashboard/overview",
  iconForeground: "text-indigo-700",
  iconBackground: "bg-indigo-100",
  description: "Last message sent an hour ago"
}, {
  icon: PresentationChartLineIcon_default,
  name: "Demand",
  to: "/snop/dashboard/demand",
  iconForeground: "text-green-700",
  iconBackground: "bg-green-100",
  description: "Last message sent an hour ago"
}, {
  icon: CubeIcon_default,
  name: "Supply",
  to: "/snop/dashboard/supply",
  iconForeground: "text-rose-500",
  iconBackground: "bg-rose-100",
  description: "Last message sent an hour ago"
}, {
  icon: ArchiveBoxArrowDownIcon_default,
  name: "Inventory",
  to: "/snop/dashboard/inventory",
  iconForeground: "text-yellow-600",
  iconBackground: "bg-yellow-100",
  description: "Last message sent an hour ago"
}, {
  icon: ShoppingCartIcon_default,
  name: "Spend",
  to: "/snop/dashboard/spend",
  iconForeground: "text-gray-700",
  iconBackground: "bg-gray-300",
  description: "Last message sent an hour ago"
}, {
  icon: BanknotesIcon_default,
  name: "Finance",
  to: "/snop/dashboard/finance",
  iconForeground: "text-blue-700",
  iconBackground: "bg-blue-100",
  description: "Last message sent an hour ago"
}, {
  icon: CircleStackIcon_default,
  name: "Sales & Marketing",
  to: "/snop/dashboard/sales",
  iconForeground: "text-sky-600",
  iconBackground: "bg-sky-100",
  description: "Last message sent an hour ago"
}, {
  icon: SpeakerWaveIcon_default,
  name: "Campaign",
  to: "/snop/dashboard/campaign",
  iconForeground: "text-violet-700",
  iconBackground: "bg-violet-100",
  description: "Last message sent an hour ago"
}, {
  icon: SpeakerWaveIcon_default,
  name: "Balance Sheet",
  to: "/snop/dashboard/balance",
  iconForeground: "text-orange-700",
  iconBackground: "bg-orange-100",
  description: "Last message sent an hour ago"
}, {
  icon: SpeakerWaveIcon_default,
  name: "Manufacturing Analytics",
  to: "/snop/dashboard/mfg",
  iconForeground: "text-lime-700",
  iconBackground: "bg-lime-100",
  description: "Last message sent an hour ago"
}, {
  icon: SpeakerWaveIcon_default,
  name: "My P&l",
  to: "/snop/dashboard/mypl",
  iconForeground: "text-purple-700",
  iconBackground: "bg-purple-100",
  description: "Last message sent an hour ago"
}, {
  icon: SpeakerWaveIcon_default,
  name: "Order-to-Cash",
  to: "/snop/dashboard/order",
  iconForeground: "text-pink-700",
  iconBackground: "bg-pink-100",
  description: "Last message sent an hour ago"
}, {
  icon: SpeakerWaveIcon_default,
  name: "Payables",
  to: "/snop/dashboard/payables",
  iconForeground: "text-indigo-700",
  iconBackground: "bg-indigo-100",
  description: "Last message sent an hour ago"
}, {
  icon: SpeakerWaveIcon_default,
  name: "Profit",
  to: "/snop/dashboard/profit",
  iconForeground: "text-red-700",
  iconBackground: "bg-red-100",
  description: "Last message sent an hour ago"
}];
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
function Appbar() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mx-4 mt-2 rounded-lg bg-white shadow  ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-between p-2  ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "m-2 flex-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-3xl font-bold leading-7 text-gray-800 ", children: "Appbar" }, void 0, false, {
      fileName: "app/routes/snop.appbar.jsx",
      lineNumber: 130,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/routes/snop.appbar.jsx",
      lineNumber: 129,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/snop.appbar.jsx",
      lineNumber: 128,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/snop.appbar.jsx",
      lineNumber: 127,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "m-4 ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { className: "grid grid-cols-1 gap-4 lg:grid-cols-2 xl:grid-cols-4 ", children: actions.map((action) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { className: "overflow-hidden rounded-xl border border-gray-200 bg-white hover:bg-gray-100 ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: action.to, className: "focus:outline-none", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center border-b border-gray-900/5 p-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: classNames(action.iconBackground, action.iconForeground, "inline-flex rounded-lg p-2"), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(action.icon, { className: "h-8 w-8 flex-none rounded-lg", "aria-hidden": "true" }, void 0, false, {
          fileName: "app/routes/snop.appbar.jsx",
          lineNumber: 143,
          columnNumber: 21
        }, this) }, void 0, false, {
          fileName: "app/routes/snop.appbar.jsx",
          lineNumber: 142,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "ml-4 text-xl font-semibold text-gray-900", children: action.name }, void 0, false, {
          fileName: "app/routes/snop.appbar.jsx",
          lineNumber: 145,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative ml-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "-m-2.5 block p-2.5 text-gray-400 hover:text-gray-500", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowUpRightIcon_default, { className: "h-6 w-6", "aria-hidden": "true" }, void 0, false, {
          fileName: "app/routes/snop.appbar.jsx",
          lineNumber: 150,
          columnNumber: 23
        }, this) }, void 0, false, {
          fileName: "app/routes/snop.appbar.jsx",
          lineNumber: 149,
          columnNumber: 21
        }, this) }, void 0, false, {
          fileName: "app/routes/snop.appbar.jsx",
          lineNumber: 148,
          columnNumber: 19
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/snop.appbar.jsx",
        lineNumber: 141,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "px-6 py-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-base text-gray-500", children: "Doloribus dolores nostrum quia qui natus officia quod et dolorem. Sit repellendus qui ut at blanditiis et quo et molestiae." }, void 0, false, {
        fileName: "app/routes/snop.appbar.jsx",
        lineNumber: 156,
        columnNumber: 19
      }, this) }, void 0, false, {
        fileName: "app/routes/snop.appbar.jsx",
        lineNumber: 155,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/snop.appbar.jsx",
      lineNumber: 140,
      columnNumber: 15
    }, this) }, action.name, false, {
      fileName: "app/routes/snop.appbar.jsx",
      lineNumber: 139,
      columnNumber: 34
    }, this)) }, void 0, false, {
      fileName: "app/routes/snop.appbar.jsx",
      lineNumber: 138,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/snop.appbar.jsx",
      lineNumber: 137,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/snop.appbar.jsx",
    lineNumber: 126,
    columnNumber: 10
  }, this);
}
_c = Appbar;
var _c;
$RefreshReg$(_c, "Appbar");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Appbar as default
};
//# sourceMappingURL=/build/routes/snop.appbar-G7775C5Z.js.map
