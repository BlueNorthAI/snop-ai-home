import {
  Chart,
  ChartCategoryAxis,
  ChartCategoryAxisItem,
  ChartLegend,
  ChartSeries,
  ChartSeriesItem,
  ChartTitle,
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

// app/kendo/charts/column/kendoColumnChart.client.js
var import_hammerjs = __toESM(require_hammer());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\kendo\\\\charts\\\\column\\\\kendoColumnChart.client.js"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\kendo\\charts\\column\\kendoColumnChart.client.js"
  );
  import.meta.hot.lastModified = "1708503722806.1125";
}
function MultiColumnChartContainer({
  categories,
  series
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Chart, { style: {
    height: 250
  }, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChartLegend, { position: "top", orientation: "horizontal" }, void 0, false, {
      fileName: "app/kendo/charts/column/kendoColumnChart.client.js",
      lineNumber: 31,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChartCategoryAxis, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChartCategoryAxisItem, { categories }, void 0, false, {
      fileName: "app/kendo/charts/column/kendoColumnChart.client.js",
      lineNumber: 33,
      columnNumber: 15
    }, this) }, void 0, false, {
      fileName: "app/kendo/charts/column/kendoColumnChart.client.js",
      lineNumber: 32,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChartSeries, { children: series.map((s) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChartSeriesItem, { name: s.name, data: s.data, type: "column" }, s.name, false, {
      fileName: "app/kendo/charts/column/kendoColumnChart.client.js",
      lineNumber: 37,
      columnNumber: 30
    }, this)) }, void 0, false, {
      fileName: "app/kendo/charts/column/kendoColumnChart.client.js",
      lineNumber: 36,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/kendo/charts/column/kendoColumnChart.client.js",
    lineNumber: 27,
    columnNumber: 10
  }, this);
}
_c = MultiColumnChartContainer;
function SingleColumnChartContainer({
  categories,
  firstSeries,
  name
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Chart, { style: {
    height: 200
  }, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChartLegend, { position: "bottom", orientation: "horizontal" }, void 0, false, {
      fileName: "app/kendo/charts/column/kendoColumnChart.client.js",
      lineNumber: 51,
      columnNumber: 14
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChartTitle, {}, void 0, false, {
      fileName: "app/kendo/charts/column/kendoColumnChart.client.js",
      lineNumber: 52,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChartCategoryAxis, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChartCategoryAxisItem, { categories }, void 0, false, {
      fileName: "app/kendo/charts/column/kendoColumnChart.client.js",
      lineNumber: 54,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/kendo/charts/column/kendoColumnChart.client.js",
      lineNumber: 53,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChartSeries, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChartSeriesItem, { name: name[0], type: "column", gap: 2, spacing: 0.25, data: firstSeries, labels: {
      visible: true
    } }, void 0, false, {
      fileName: "app/kendo/charts/column/kendoColumnChart.client.js",
      lineNumber: 59,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/kendo/charts/column/kendoColumnChart.client.js",
      lineNumber: 58,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/kendo/charts/column/kendoColumnChart.client.js",
    lineNumber: 48,
    columnNumber: 10
  }, this);
}
_c2 = SingleColumnChartContainer;
function DoubleColumnChartContainer({
  categories,
  firstSeries,
  secondSeries
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Chart, { style: {
    height: 200
  }, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChartLegend, { position: "bottom", orientation: "horizontal" }, void 0, false, {
      fileName: "app/kendo/charts/column/kendoColumnChart.client.js",
      lineNumber: 75,
      columnNumber: 14
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChartTitle, {}, void 0, false, {
      fileName: "app/kendo/charts/column/kendoColumnChart.client.js",
      lineNumber: 76,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChartCategoryAxis, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChartCategoryAxisItem, { categories }, void 0, false, {
      fileName: "app/kendo/charts/column/kendoColumnChart.client.js",
      lineNumber: 78,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/kendo/charts/column/kendoColumnChart.client.js",
      lineNumber: 77,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChartSeries, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChartSeriesItem, { type: "column", gap: 2, spacing: 0.25, data: firstSeries, labels: {
        visible: true
      } }, void 0, false, {
        fileName: "app/kendo/charts/column/kendoColumnChart.client.js",
        lineNumber: 83,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChartSeriesItem, { type: "column", data: secondSeries, labels: {
        visible: true
      } }, void 0, false, {
        fileName: "app/kendo/charts/column/kendoColumnChart.client.js",
        lineNumber: 86,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/kendo/charts/column/kendoColumnChart.client.js",
      lineNumber: 82,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/kendo/charts/column/kendoColumnChart.client.js",
    lineNumber: 72,
    columnNumber: 10
  }, this);
}
_c3 = DoubleColumnChartContainer;
function TripleColumnChartContainer({
  categories,
  firstSeries,
  secondSeries,
  thirdSeries,
  name
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Chart, { style: {
    height: 200
  }, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChartLegend, { position: "bottom", orientation: "horizontal" }, void 0, false, {
      fileName: "app/kendo/charts/column/kendoColumnChart.client.js",
      lineNumber: 105,
      columnNumber: 14
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChartTitle, { text: "" }, void 0, false, {
      fileName: "app/kendo/charts/column/kendoColumnChart.client.js",
      lineNumber: 106,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChartCategoryAxis, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChartCategoryAxisItem, { categories }, void 0, false, {
      fileName: "app/kendo/charts/column/kendoColumnChart.client.js",
      lineNumber: 108,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/kendo/charts/column/kendoColumnChart.client.js",
      lineNumber: 107,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChartSeries, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChartSeriesItem, { type: "column", gap: 2, spacing: 0.25, data: firstSeries, labels: {
        visible: true
      } }, void 0, false, {
        fileName: "app/kendo/charts/column/kendoColumnChart.client.js",
        lineNumber: 113,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChartSeriesItem, { type: "column", data: secondSeries, labels: {
        visible: true
      } }, void 0, false, {
        fileName: "app/kendo/charts/column/kendoColumnChart.client.js",
        lineNumber: 116,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChartSeriesItem, { type: "column", data: thirdSeries, labels: {
        visible: true
      } }, void 0, false, {
        fileName: "app/kendo/charts/column/kendoColumnChart.client.js",
        lineNumber: 119,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/kendo/charts/column/kendoColumnChart.client.js",
      lineNumber: 112,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/kendo/charts/column/kendoColumnChart.client.js",
    lineNumber: 102,
    columnNumber: 10
  }, this);
}
_c4 = TripleColumnChartContainer;
function QuadColumnChartContainer({
  categories,
  firstSeries,
  secondSeries,
  thirdSeries,
  fourthSeries,
  name
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Chart, { style: {
    height: 200
  }, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChartLegend, { position: "bottom", orientation: "horizontal" }, void 0, false, {
      fileName: "app/kendo/charts/column/kendoColumnChart.client.js",
      lineNumber: 139,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChartTitle, { text: "" }, void 0, false, {
      fileName: "app/kendo/charts/column/kendoColumnChart.client.js",
      lineNumber: 140,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChartCategoryAxis, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChartCategoryAxisItem, { categories }, void 0, false, {
      fileName: "app/kendo/charts/column/kendoColumnChart.client.js",
      lineNumber: 142,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/kendo/charts/column/kendoColumnChart.client.js",
      lineNumber: 141,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChartSeries, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChartSeriesItem, { type: "column", gap: 2, spacing: 0.25, data: firstSeries, labels: {
        visible: true
      } }, void 0, false, {
        fileName: "app/kendo/charts/column/kendoColumnChart.client.js",
        lineNumber: 147,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChartSeriesItem, { type: "column", data: secondSeries, labels: {
        visible: true
      } }, void 0, false, {
        fileName: "app/kendo/charts/column/kendoColumnChart.client.js",
        lineNumber: 150,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChartSeriesItem, { type: "column", data: thirdSeries, labels: {
        visible: true
      } }, void 0, false, {
        fileName: "app/kendo/charts/column/kendoColumnChart.client.js",
        lineNumber: 153,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChartSeriesItem, { type: "column", data: fourthSeries, labels: {
        visible: true
      } }, void 0, false, {
        fileName: "app/kendo/charts/column/kendoColumnChart.client.js",
        lineNumber: 156,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/kendo/charts/column/kendoColumnChart.client.js",
      lineNumber: 146,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/kendo/charts/column/kendoColumnChart.client.js",
    lineNumber: 136,
    columnNumber: 10
  }, this);
}
_c5 = QuadColumnChartContainer;
var _c;
var _c2;
var _c3;
var _c4;
var _c5;
$RefreshReg$(_c, "MultiColumnChartContainer");
$RefreshReg$(_c2, "SingleColumnChartContainer");
$RefreshReg$(_c3, "DoubleColumnChartContainer");
$RefreshReg$(_c4, "TripleColumnChartContainer");
$RefreshReg$(_c5, "QuadColumnChartContainer");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/kendo/charts/column/WrapperColumnChart.jsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\kendo\\\\charts\\\\column\\\\WrapperColumnChart.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\kendo\\charts\\column\\WrapperColumnChart.jsx"
  );
  import.meta.hot.lastModified = "1708576686651.5522";
}
var Fallback = () => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("svg", { width: 24, height: 24, fill: "none", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("path", { d: "M12 4.75v1.5M17.127 6.873l-1.061 1.061M19.25 12h-1.5M17.127 17.127l-1.061-1.061M12 17.75v1.5M7.934 16.066l-1.06 1.06M6.25 12h-1.5M7.934 7.934l-1.06-1.06", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" }, void 0, false, {
    fileName: "app/kendo/charts/column/WrapperColumnChart.jsx",
    lineNumber: 26,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/kendo/charts/column/WrapperColumnChart.jsx",
    lineNumber: 25,
    columnNumber: 11
  }, this) }, void 0, false, {
    fileName: "app/kendo/charts/column/WrapperColumnChart.jsx",
    lineNumber: 24,
    columnNumber: 10
  }, this);
};
_c6 = Fallback;
function WrapperMultiColumnChart({
  category,
  series
}) {
  return typeof document !== "undefined" ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(MultiColumnChartContainer, { categories: category, series }, void 0, false, {
    fileName: "app/kendo/charts/column/WrapperColumnChart.jsx",
    lineNumber: 35,
    columnNumber: 44
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Fallback, {}, void 0, false, {
    fileName: "app/kendo/charts/column/WrapperColumnChart.jsx",
    lineNumber: 35,
    columnNumber: 114
  }, this);
}
_c22 = WrapperMultiColumnChart;
var _c6;
var _c22;
$RefreshReg$(_c6, "Fallback");
$RefreshReg$(_c22, "WrapperMultiColumnChart");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  WrapperMultiColumnChart
};
//# sourceMappingURL=/build/_shared/chunk-P6FI4LUL.js.map
