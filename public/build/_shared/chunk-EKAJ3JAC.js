import {
  Chart,
  ChartSeries,
  ChartSeriesItem,
  require_hammer
} from "/build/_shared/chunk-OP7Q5FNF.js";
import {
  createHotContext
} from "/build/_shared/chunk-K4XMOQHS.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/kendo/charts/barColor/kendoBarColorChart.client.js
var import_hammerjs = __toESM(require_hammer());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\kendo\\\\charts\\\\barColor\\\\kendoBarColorChart.client.js"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\kendo\\charts\\barColor\\kendoBarColorChart.client.js"
  );
  import.meta.hot.lastModified = "1708503722801.1118";
}
function BarColorChartContainer({
  seriesData
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Chart, { style: {
    height: 250
  }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChartSeries, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChartSeriesItem, { data: seriesData, type: "bar", field: "data", categoryField: "categories" }, void 0, false, {
    fileName: "app/kendo/charts/barColor/kendoBarColorChart.client.js",
    lineNumber: 33,
    columnNumber: 17
  }, this) }, void 0, false, {
    fileName: "app/kendo/charts/barColor/kendoBarColorChart.client.js",
    lineNumber: 32,
    columnNumber: 15
  }, this) }, void 0, false, {
    fileName: "app/kendo/charts/barColor/kendoBarColorChart.client.js",
    lineNumber: 29,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/kendo/charts/barColor/kendoBarColorChart.client.js",
    lineNumber: 28,
    columnNumber: 11
  }, this) }, void 0, false, {
    fileName: "app/kendo/charts/barColor/kendoBarColorChart.client.js",
    lineNumber: 27,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/kendo/charts/barColor/kendoBarColorChart.client.js",
    lineNumber: 26,
    columnNumber: 10
  }, this);
}
_c = BarColorChartContainer;
var _c;
$RefreshReg$(_c, "BarColorChartContainer");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/kendo/charts/barColor/WrapperColorBarChart.jsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\kendo\\\\charts\\\\barColor\\\\WrapperColorBarChart.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\kendo\\charts\\barColor\\WrapperColorBarChart.jsx"
  );
  import.meta.hot.lastModified = "1710825397902.982";
}
var Fallback = () => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("svg", { width: 24, height: 24, fill: "none", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("path", { d: "M12 4.75v1.5M17.127 6.873l-1.061 1.061M19.25 12h-1.5M17.127 17.127l-1.061-1.061M12 17.75v1.5M7.934 16.066l-1.06 1.06M6.25 12h-1.5M7.934 7.934l-1.06-1.06", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" }, void 0, false, {
    fileName: "app/kendo/charts/barColor/WrapperColorBarChart.jsx",
    lineNumber: 25,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/kendo/charts/barColor/WrapperColorBarChart.jsx",
    lineNumber: 24,
    columnNumber: 11
  }, this) }, void 0, false, {
    fileName: "app/kendo/charts/barColor/WrapperColorBarChart.jsx",
    lineNumber: 23,
    columnNumber: 10
  }, this);
};
_c2 = Fallback;
function WrapperMultiBarColorChart({
  seriesData
}) {
  return typeof document !== "undefined" ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(BarColorChartContainer, { seriesData }, void 0, false, {
    fileName: "app/kendo/charts/barColor/WrapperColorBarChart.jsx",
    lineNumber: 33,
    columnNumber: 44
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Fallback, {}, void 0, false, {
    fileName: "app/kendo/charts/barColor/WrapperColorBarChart.jsx",
    lineNumber: 33,
    columnNumber: 97
  }, this);
}
_c22 = WrapperMultiBarColorChart;
var _c2;
var _c22;
$RefreshReg$(_c2, "Fallback");
$RefreshReg$(_c22, "WrapperMultiBarColorChart");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  WrapperMultiBarColorChart
};
//# sourceMappingURL=/build/_shared/chunk-EKAJ3JAC.js.map
