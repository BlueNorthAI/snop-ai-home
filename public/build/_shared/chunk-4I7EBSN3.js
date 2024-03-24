import {
  Chart,
  ChartLegend,
  ChartSeries,
  ChartSeriesItem,
  ChartTitle,
  ChartTooltip,
  ChartXAxis,
  ChartXAxisItem,
  ChartYAxis,
  ChartYAxisItem,
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

// app/kendo/charts/bubble/kendoScatterBubbleChart.client.js
var import_hammerjs = __toESM(require_hammer());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\kendo\\\\charts\\\\bubble\\\\kendoScatterBubbleChart.client.js"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\kendo\\charts\\bubble\\kendoScatterBubbleChart.client.js"
  );
  import.meta.hot.lastModified = "1708503722803.1123";
}
function ScatterBubbleChartContainer({
  data
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Chart, { style: {
    height: 250
  }, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChartTitle, { text: "" }, void 0, false, {
      fileName: "app/kendo/charts/bubble/kendoScatterBubbleChart.client.js",
      lineNumber: 30,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChartSeries, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChartSeriesItem, { type: "bubble", xField: "x", yField: "y", sizeField: "size", categoryField: "category", data }, void 0, false, {
      fileName: "app/kendo/charts/bubble/kendoScatterBubbleChart.client.js",
      lineNumber: 32,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/kendo/charts/bubble/kendoScatterBubbleChart.client.js",
      lineNumber: 31,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChartXAxis, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChartXAxisItem, { axisCrossingValue: -5e3, majorUnit: 2e3, labels: {
      format: "{0:N0}",
      skip: 1,
      rotation: "auto"
    } }, void 0, false, {
      fileName: "app/kendo/charts/bubble/kendoScatterBubbleChart.client.js",
      lineNumber: 35,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/kendo/charts/bubble/kendoScatterBubbleChart.client.js",
      lineNumber: 34,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChartYAxis, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChartYAxisItem, { labels: {
      format: "{0:N0}",
      visible: true
    } }, void 0, false, {
      fileName: "app/kendo/charts/bubble/kendoScatterBubbleChart.client.js",
      lineNumber: 42,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/kendo/charts/bubble/kendoScatterBubbleChart.client.js",
      lineNumber: 41,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChartLegend, { visible: true }, void 0, false, {
      fileName: "app/kendo/charts/bubble/kendoScatterBubbleChart.client.js",
      lineNumber: 47,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChartTooltip, { format: "{3}: {2:N0} applications", opacity: 1 }, void 0, false, {
      fileName: "app/kendo/charts/bubble/kendoScatterBubbleChart.client.js",
      lineNumber: 48,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/kendo/charts/bubble/kendoScatterBubbleChart.client.js",
    lineNumber: 27,
    columnNumber: 10
  }, this);
}
_c = ScatterBubbleChartContainer;
var _c;
$RefreshReg$(_c, "ScatterBubbleChartContainer");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/kendo/charts/bubble/WrapperScatterBubbleChart.jsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\kendo\\\\charts\\\\bubble\\\\WrapperScatterBubbleChart.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\kendo\\charts\\bubble\\WrapperScatterBubbleChart.jsx"
  );
  import.meta.hot.lastModified = "1708503722802.1118";
}
var Fallback = () => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("svg", { width: 24, height: 24, fill: "none", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("path", { d: "M12 4.75v1.5M17.127 6.873l-1.061 1.061M19.25 12h-1.5M17.127 17.127l-1.061-1.061M12 17.75v1.5M7.934 16.066l-1.06 1.06M6.25 12h-1.5M7.934 7.934l-1.06-1.06", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" }, void 0, false, {
    fileName: "app/kendo/charts/bubble/WrapperScatterBubbleChart.jsx",
    lineNumber: 25,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/kendo/charts/bubble/WrapperScatterBubbleChart.jsx",
    lineNumber: 24,
    columnNumber: 11
  }, this) }, void 0, false, {
    fileName: "app/kendo/charts/bubble/WrapperScatterBubbleChart.jsx",
    lineNumber: 23,
    columnNumber: 10
  }, this);
};
_c2 = Fallback;
function WrapperScatterBubbleChart({
  data
}) {
  return typeof document !== "undefined" ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ScatterBubbleChartContainer, { data }, void 0, false, {
    fileName: "app/kendo/charts/bubble/WrapperScatterBubbleChart.jsx",
    lineNumber: 33,
    columnNumber: 44
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Fallback, {}, void 0, false, {
    fileName: "app/kendo/charts/bubble/WrapperScatterBubbleChart.jsx",
    lineNumber: 33,
    columnNumber: 90
  }, this);
}
_c22 = WrapperScatterBubbleChart;
var _c2;
var _c22;
$RefreshReg$(_c2, "Fallback");
$RefreshReg$(_c22, "WrapperScatterBubbleChart");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  WrapperScatterBubbleChart
};
//# sourceMappingURL=/build/_shared/chunk-4I7EBSN3.js.map
