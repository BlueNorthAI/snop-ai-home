import {
  AdjustmentsHorizontalIcon_default
} from "/build/_shared/chunk-RRHQD3BR.js";
import {
  createHotContext
} from "/build/_shared/chunk-K4XMOQHS.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  require_react
} from "/build/_shared/chunk-BOXFZXVX.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/snop.dashboard.analysis.actionAnalysis.jsx
var import_react = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\snop.dashboard.analysis.actionAnalysis.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\snop.dashboard.analysis.actionAnalysis.jsx"
  );
  import.meta.hot.lastModified = "1711090705095.757";
}
var stats = [{
  name: "Understand/decrease demand",
  stat: "+66K"
}, {
  name: "Redeploy stock",
  stat: "-1.0%"
}, {
  name: "Increase Supply",
  stat: "-2.0%"
}, {
  name: "Total Change to last",
  stat: "+1.5M"
}];
function OverviewAnalysisRoute() {
  _s();
  ;
  const [slideopen, setslideOpen] = (0, import_react.useState)(false);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full h-screen", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: " bg-slate-600 ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "ml-4 flex h-16 items-center justify-start", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "hidden md:block", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-3xl font-bold text-white", children: "Action:Redeploy Stock" }, void 0, false, {
      fileName: "app/routes/snop.dashboard.analysis.actionAnalysis.jsx",
      lineNumber: 75,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/routes/snop.dashboard.analysis.actionAnalysis.jsx",
      lineNumber: 74,
      columnNumber: 15
    }, this) }, void 0, false, {
      fileName: "app/routes/snop.dashboard.analysis.actionAnalysis.jsx",
      lineNumber: 73,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/routes/snop.dashboard.analysis.actionAnalysis.jsx",
      lineNumber: 72,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/snop.dashboard.analysis.actionAnalysis.jsx",
      lineNumber: 71,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", className: "top-15 fixed right-0 mt-4 flex cursor-pointer items-center \n                rounded-l-lg border bg-white p-2 text-sm font-semibold text-gray-900 shadow-xl hover:bg-rose-600 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2", onClick: () => setslideOpen(!slideopen), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AdjustmentsHorizontalIcon_default, { className: "h-5 w-5 items-center", "aria-hidden": "true" }, void 0, false, {
      fileName: "app/routes/snop.dashboard.analysis.actionAnalysis.jsx",
      lineNumber: 84,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/snop.dashboard.analysis.actionAnalysis.jsx",
      lineNumber: 82,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mx-4 my-2 k-grid k-grid-cols-4 gap-6", children: stats.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "items-center overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "truncate text-center text-lg font-medium text-gray-500", children: item.name }, void 0, false, {
          fileName: "app/routes/snop.dashboard.analysis.actionAnalysis.jsx",
          lineNumber: 92,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "mt-1 text-center text-4xl font-bold tracking-tight  text-gray-900  lg:text-5xl", children: item.stat }, void 0, false, {
          fileName: "app/routes/snop.dashboard.analysis.actionAnalysis.jsx",
          lineNumber: 95,
          columnNumber: 17
        }, this)
      ] }, item.name, true, {
        fileName: "app/routes/snop.dashboard.analysis.actionAnalysis.jsx",
        lineNumber: 91,
        columnNumber: 32
      }, this)) }, void 0, false, {
        fileName: "app/routes/snop.dashboard.analysis.actionAnalysis.jsx",
        lineNumber: 90,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute inset-0 flex items-center", "aria-hidden": "true", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mx-4 w-full border-t border-gray-200" }, void 0, false, {
        fileName: "app/routes/snop.dashboard.analysis.actionAnalysis.jsx",
        lineNumber: 102,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/routes/snop.dashboard.analysis.actionAnalysis.jsx",
        lineNumber: 101,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/snop.dashboard.analysis.actionAnalysis.jsx",
        lineNumber: 100,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/snop.dashboard.analysis.actionAnalysis.jsx",
      lineNumber: 89,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/snop.dashboard.analysis.actionAnalysis.jsx",
    lineNumber: 70,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/snop.dashboard.analysis.actionAnalysis.jsx",
    lineNumber: 69,
    columnNumber: 10
  }, this);
}
_s(OverviewAnalysisRoute, "ehoBJIlkESukqJH+dhoTgBhbd8o=");
_c = OverviewAnalysisRoute;
var _c;
$RefreshReg$(_c, "OverviewAnalysisRoute");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  OverviewAnalysisRoute as default
};
//# sourceMappingURL=/build/routes/snop.dashboard.analysis.actionAnalysis-MYH6DK32.js.map
