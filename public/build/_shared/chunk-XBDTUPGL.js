import {
  Chart,
  ChartCategoryAxis,
  ChartCategoryAxisItem,
  ChartLegend,
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

// app/kendo/charts/line/kendoLineChart.client.js
var import_hammerjs = __toESM(require_hammer());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\kendo\\\\charts\\\\line\\\\kendoLineChart.client.js"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\kendo\\charts\\line\\kendoLineChart.client.js"
  );
  import.meta.hot.lastModified = "1708503722812.1145";
}
function MultiLineChartContainer({
  categories,
  series
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Chart, { style: {
    height: 250
  }, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChartLegend, { position: "top", orientation: "horizontal" }, void 0, false, {
      fileName: "app/kendo/charts/line/kendoLineChart.client.js",
      lineNumber: 31,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChartCategoryAxis, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChartCategoryAxisItem, { categories }, void 0, false, {
      fileName: "app/kendo/charts/line/kendoLineChart.client.js",
      lineNumber: 33,
      columnNumber: 15
    }, this) }, void 0, false, {
      fileName: "app/kendo/charts/line/kendoLineChart.client.js",
      lineNumber: 32,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChartSeries, { children: series.map((s) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChartSeriesItem, { name: s.name, data: s.data, type: "line", labels: {
      visible: true
    } }, s.name, false, {
      fileName: "app/kendo/charts/line/kendoLineChart.client.js",
      lineNumber: 36,
      columnNumber: 30
    }, this)) }, void 0, false, {
      fileName: "app/kendo/charts/line/kendoLineChart.client.js",
      lineNumber: 35,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/kendo/charts/line/kendoLineChart.client.js",
    lineNumber: 27,
    columnNumber: 10
  }, this);
}
_c = MultiLineChartContainer;
var _c;
$RefreshReg$(_c, "MultiLineChartContainer");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/kendo/charts/line/WrapperLineChart.jsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\kendo\\\\charts\\\\line\\\\WrapperLineChart.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\kendo\\charts\\line\\WrapperLineChart.jsx"
  );
  import.meta.hot.lastModified = "1708503722812.1145";
}
var Fallback = () => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("svg", { width: 24, height: 24, fill: "none", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("path", { d: "M12 4.75v1.5M17.127 6.873l-1.061 1.061M19.25 12h-1.5M17.127 17.127l-1.061-1.061M12 17.75v1.5M7.934 16.066l-1.06 1.06M6.25 12h-1.5M7.934 7.934l-1.06-1.06", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" }, void 0, false, {
    fileName: "app/kendo/charts/line/WrapperLineChart.jsx",
    lineNumber: 26,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/kendo/charts/line/WrapperLineChart.jsx",
    lineNumber: 25,
    columnNumber: 11
  }, this) }, void 0, false, {
    fileName: "app/kendo/charts/line/WrapperLineChart.jsx",
    lineNumber: 24,
    columnNumber: 10
  }, this);
};
_c2 = Fallback;
function WrapperMultiLineChart({
  category,
  series
}) {
  return typeof document !== "undefined" ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(MultiLineChartContainer, { categories: category, series }, void 0, false, {
    fileName: "app/kendo/charts/line/WrapperLineChart.jsx",
    lineNumber: 35,
    columnNumber: 44
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Fallback, {}, void 0, false, {
    fileName: "app/kendo/charts/line/WrapperLineChart.jsx",
    lineNumber: 35,
    columnNumber: 112
  }, this);
}
_c22 = WrapperMultiLineChart;
var _c2;
var _c22;
$RefreshReg$(_c2, "Fallback");
$RefreshReg$(_c22, "WrapperMultiLineChart");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  WrapperMultiLineChart
};
//# sourceMappingURL=/build/_shared/chunk-XBDTUPGL.js.map
