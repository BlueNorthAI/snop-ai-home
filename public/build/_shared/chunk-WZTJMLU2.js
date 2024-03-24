import {
  Chart,
  ChartLegend,
  ChartSeries,
  ChartSeriesItem,
  ChartSeriesLabels,
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

// app/kendo/charts/donut/kendoDonutChart.client.js
var import_hammerjs = __toESM(require_hammer());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\kendo\\\\charts\\\\donut\\\\kendoDonutChart.client.js"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\kendo\\charts\\donut\\kendoDonutChart.client.js"
  );
  import.meta.hot.lastModified = "1708503722810.114";
}
var labelContent = (props) => {
  let formatedNumber = Number(props.dataItem.value).toLocaleString(void 0, {
    style: "percent",
    minimumFractionDigits: 2
  });
  return `${formatedNumber}`;
};
var labelContent1 = (e) => `${e.category}: 
 ${e.value}%`;
function DonutChartContainer({
  series
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Chart, { style: {
    height: 250
  }, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChartSeries, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChartSeriesItem, { type: "donut", data: series, categoryField: "category", field: "value", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChartSeriesLabels, { color: "#fff", background: "none", content: labelContent }, void 0, false, {
      fileName: "app/kendo/charts/donut/kendoDonutChart.client.js",
      lineNumber: 41,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/kendo/charts/donut/kendoDonutChart.client.js",
      lineNumber: 40,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/kendo/charts/donut/kendoDonutChart.client.js",
      lineNumber: 39,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChartLegend, { visible: true }, void 0, false, {
      fileName: "app/kendo/charts/donut/kendoDonutChart.client.js",
      lineNumber: 44,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/kendo/charts/donut/kendoDonutChart.client.js",
    lineNumber: 36,
    columnNumber: 10
  }, this);
}
_c = DonutChartContainer;
var DountDoubleChartContainer = ({
  series,
  index,
  array
}) => {
  const mapSeries = (series2, index2, array2) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChartSeriesItem, { type: "donut", startAngle: 150, name: series2.name, data: series2.data, field: "value", categoryField: "category", colorField: "color", children: index2 === array2.length - 1 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChartSeriesLabels, { position: "outsideEnd", background: "none", content: labelContent1 }, void 0, false, {
    fileName: "app/kendo/charts/donut/kendoDonutChart.client.js",
    lineNumber: 54,
    columnNumber: 38
  }, this) }, void 0, false, {
    fileName: "app/kendo/charts/donut/kendoDonutChart.client.js",
    lineNumber: 53,
    columnNumber: 47
  }, this);
  const renderTooltip = (context) => {
    const {
      category,
      series: series2,
      value
    } = context.point || context;
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
      category,
      " (",
      series2.name,
      "): ",
      value,
      "%"
    ] }, void 0, true, {
      fileName: "app/kendo/charts/donut/kendoDonutChart.client.js",
      lineNumber: 62,
      columnNumber: 12
    }, this);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Chart, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChartSeries, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChartTooltip, { render: renderTooltip }, void 0, false, {
      fileName: "app/kendo/charts/donut/kendoDonutChart.client.js",
      lineNumber: 68,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChartLegend, { visible: false }, void 0, false, {
      fileName: "app/kendo/charts/donut/kendoDonutChart.client.js",
      lineNumber: 70,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChartArea, { background: "none" }, void 0, false, {
      fileName: "app/kendo/charts/donut/kendoDonutChart.client.js",
      lineNumber: 71,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/kendo/charts/donut/kendoDonutChart.client.js",
    lineNumber: 67,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/kendo/charts/donut/kendoDonutChart.client.js",
    lineNumber: 66,
    columnNumber: 10
  }, this);
};
_c2 = DountDoubleChartContainer;
var _c;
var _c2;
$RefreshReg$(_c, "DonutChartContainer");
$RefreshReg$(_c2, "DountDoubleChartContainer");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/kendo/charts/donut/WrapperDonutChart.jsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\kendo\\\\charts\\\\donut\\\\WrapperDonutChart.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\kendo\\charts\\donut\\WrapperDonutChart.jsx"
  );
  import.meta.hot.lastModified = "1708503722809.1138";
}
var Fallback = () => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("svg", { width: 20, height: 20, fill: "none", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("path", { d: "M12 4.75v1.5M17.127 6.873l-1.061 1.061M19.25 12h-1.5M17.127 17.127l-1.061-1.061M12 17.75v1.5M7.934 16.066l-1.06 1.06M6.25 12h-1.5M7.934 7.934l-1.06-1.06", stroke: "currentColor", strokeWidth: 0, strokeLinecap: "round", strokeLinejoin: "round" }, void 0, false, {
    fileName: "app/kendo/charts/donut/WrapperDonutChart.jsx",
    lineNumber: 25,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/kendo/charts/donut/WrapperDonutChart.jsx",
    lineNumber: 24,
    columnNumber: 11
  }, this) }, void 0, false, {
    fileName: "app/kendo/charts/donut/WrapperDonutChart.jsx",
    lineNumber: 23,
    columnNumber: 10
  }, this);
};
_c3 = Fallback;
function WrapperDonutChart({
  series
}) {
  return typeof document !== "undefined" ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DonutChartContainer, { series }, void 0, false, {
    fileName: "app/kendo/charts/donut/WrapperDonutChart.jsx",
    lineNumber: 33,
    columnNumber: 44
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Fallback, {}, void 0, false, {
    fileName: "app/kendo/charts/donut/WrapperDonutChart.jsx",
    lineNumber: 33,
    columnNumber: 86
  }, this);
}
_c22 = WrapperDonutChart;
var _c3;
var _c22;
$RefreshReg$(_c3, "Fallback");
$RefreshReg$(_c22, "WrapperDonutChart");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  WrapperDonutChart
};
//# sourceMappingURL=/build/_shared/chunk-WZTJMLU2.js.map
