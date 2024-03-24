import {
  Chart,
  ChartSeries,
  ChartSeriesItem,
  ChartSeriesLabels,
  ChartValueAxis,
  ChartValueAxisItem,
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

// app/kendo/charts/waterfall/kendoWaterfallChart.client.js
var import_hammerjs = __toESM(require_hammer());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Chart, { style: {
    height: 250
  }, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChartSeries, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChartSeriesItem, { type: "waterfall", data, color: pointColor, field: "field", categoryField: "category", summaryField: "summary", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChartSeriesLabels, { format }, void 0, false, {
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
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChartValueAxis, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChartValueAxisItem, {}, void 0, false, {
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
_c = WaterfallChartContainer;
var _c;
$RefreshReg$(_c, "WaterfallChartContainer");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/kendo/charts/waterfall/WrapperWaterfallChart.jsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("svg", { width: 24, height: 24, fill: "none", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("path", { d: "M12 4.75v1.5M17.127 6.873l-1.061 1.061M19.25 12h-1.5M17.127 17.127l-1.061-1.061M12 17.75v1.5M7.934 16.066l-1.06 1.06M6.25 12h-1.5M7.934 7.934l-1.06-1.06", stroke: "currentColor", strokeWidth: 0, strokeLinecap: "round", strokeLinejoin: "round" }, void 0, false, {
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
_c2 = Fallback;
function WrapperWaterfallChart({
  data,
  field,
  category,
  summary,
  format = "C0",
  position = "insideEnd"
}) {
  return typeof document !== "undefined" ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(WaterfallChartContainer, { data }, void 0, false, {
    fileName: "app/kendo/charts/waterfall/WrapperWaterfallChart.jsx",
    lineNumber: 38,
    columnNumber: 44
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Fallback, {}, void 0, false, {
    fileName: "app/kendo/charts/waterfall/WrapperWaterfallChart.jsx",
    lineNumber: 38,
    columnNumber: 86
  }, this);
}
_c22 = WrapperWaterfallChart;
var _c2;
var _c22;
$RefreshReg$(_c2, "Fallback");
$RefreshReg$(_c22, "WrapperWaterfallChart");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  WrapperWaterfallChart
};
//# sourceMappingURL=/build/_shared/chunk-K47VYUL6.js.map
