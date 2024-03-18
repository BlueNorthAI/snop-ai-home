import {
  Chart,
  ChartLegend,
  ChartSeries,
  ChartSeriesItem,
  require_hammer
} from "/build/_shared/chunk-WAFXOQC7.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  createHotContext
} from "/build/_shared/chunk-K4XMOQHS.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/kendo/charts/pie/kendoPieChart.client.js
var import_hammerjs = __toESM(require_hammer());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\kendo\\\\charts\\\\pie\\\\kendoPieChart.client.js"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\kendo\\charts\\pie\\kendoPieChart.client.js"
  );
  import.meta.hot.lastModified = "1708503722814.1143";
}
var labelContent = (props) => {
  let formatedNumber = Number(props.dataItem.value).toLocaleString(void 0, {
    style: "percent",
    minimumFractionDigits: 2
  });
  return `${formatedNumber}`;
};
function PieChartContainer({
  series
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Chart, { style: {
    height: 250
  }, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChartLegend, { position: "top", orientation: "horizontal" }, void 0, false, {
      fileName: "app/kendo/charts/pie/kendoPieChart.client.js",
      lineNumber: 37,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChartSeries, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChartSeriesItem, { type: "pie", data: series, field: "value", categoryField: "category", labels: {
      visible: true,
      // content: labelContent,
      position: "insideEnd"
    } }, void 0, false, {
      fileName: "app/kendo/charts/pie/kendoPieChart.client.js",
      lineNumber: 40,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/kendo/charts/pie/kendoPieChart.client.js",
      lineNumber: 38,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChartLegend, { visible: true }, void 0, false, {
      fileName: "app/kendo/charts/pie/kendoPieChart.client.js",
      lineNumber: 47,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/kendo/charts/pie/kendoPieChart.client.js",
    lineNumber: 33,
    columnNumber: 10
  }, this);
}
_c = PieChartContainer;
function PieChartContainerVisible({
  series
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Chart, { style: {
    height: 200
  }, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChartLegend, { position: "bottom", orientation: "horizontal" }, void 0, false, {
      fileName: "app/kendo/charts/pie/kendoPieChart.client.js",
      lineNumber: 58,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChartSeries, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChartSeriesItem, { type: "pie", data: series, field: "value", categoryField: "category", labels: {
      visible: true,
      content: labelContent
    }, overlay: {
      gradient: "sharpBevel"
    }, tooltip: {
      visible: true
    } }, void 0, false, {
      fileName: "app/kendo/charts/pie/kendoPieChart.client.js",
      lineNumber: 60,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/kendo/charts/pie/kendoPieChart.client.js",
      lineNumber: 59,
      columnNumber: 11
    }, this)
  ] }, void 0, true, {
    fileName: "app/kendo/charts/pie/kendoPieChart.client.js",
    lineNumber: 54,
    columnNumber: 10
  }, this);
}
_c2 = PieChartContainerVisible;
var _c;
var _c2;
$RefreshReg$(_c, "PieChartContainer");
$RefreshReg$(_c2, "PieChartContainerVisible");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/kendo/charts/pie/WrapperPieChart.jsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\kendo\\\\charts\\\\pie\\\\WrapperPieChart.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\kendo\\charts\\pie\\WrapperPieChart.jsx"
  );
  import.meta.hot.lastModified = "1708503722814.1143";
}
var Fallback = () => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("svg", { width: 24, height: 24, fill: "none", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("path", { d: "M12 4.75v1.5M17.127 6.873l-1.061 1.061M19.25 12h-1.5M17.127 17.127l-1.061-1.061M12 17.75v1.5M7.934 16.066l-1.06 1.06M6.25 12h-1.5M7.934 7.934l-1.06-1.06", stroke: "currentColor", strokeWidth: 0, strokeLinecap: "round", strokeLinejoin: "round" }, void 0, false, {
    fileName: "app/kendo/charts/pie/WrapperPieChart.jsx",
    lineNumber: 25,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/kendo/charts/pie/WrapperPieChart.jsx",
    lineNumber: 24,
    columnNumber: 11
  }, this) }, void 0, false, {
    fileName: "app/kendo/charts/pie/WrapperPieChart.jsx",
    lineNumber: 23,
    columnNumber: 10
  }, this);
};
_c3 = Fallback;
function WrapperPieChart({
  series
}) {
  return typeof document !== "undefined" ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(PieChartContainer, { series }, void 0, false, {
    fileName: "app/kendo/charts/pie/WrapperPieChart.jsx",
    lineNumber: 33,
    columnNumber: 44
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Fallback, {}, void 0, false, {
    fileName: "app/kendo/charts/pie/WrapperPieChart.jsx",
    lineNumber: 33,
    columnNumber: 84
  }, this);
}
_c22 = WrapperPieChart;
var _c3;
var _c22;
$RefreshReg$(_c3, "Fallback");
$RefreshReg$(_c22, "WrapperPieChart");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  WrapperPieChart
};
//# sourceMappingURL=/build/_shared/chunk-XAXQLYNX.js.map
