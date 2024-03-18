import {
  WrapperMultiStackColChart
} from "/build/_shared/chunk-TTN7GJHC.js";
import {
  WrapperMultiColumnChart
} from "/build/_shared/chunk-75NNQQDI.js";
import {
  CardLayout,
  It,
  qe
} from "/build/_shared/chunk-EIQCPSYD.js";
import "/build/_shared/chunk-CWIOTFXK.js";
import "/build/_shared/chunk-2HNBOA5V.js";
import "/build/_shared/chunk-CO7DHVOA.js";
import {
  WrapperMultiBarChart
} from "/build/_shared/chunk-WLAYZXF5.js";
import {
  Chart,
  ChartLegend,
  ChartSeries,
  ChartSeriesItem,
  ChartSeriesLabels,
  require_hammer
} from "/build/_shared/chunk-WAFXOQC7.js";
import {
  CheckIcon_default,
  ChevronDownIcon_default,
  ClipboardDocumentCheckIcon_default,
  DocumentArrowDownIcon_default,
  ShareIcon_default
} from "/build/_shared/chunk-Y4SZVV5C.js";
import "/build/_shared/chunk-ELWJTL4F.js";
import "/build/_shared/chunk-NON4LQMM.js";
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
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/snop.dashboard.sales.jsx
var import_react = __toESM(require_react());

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

// app/kendo/rawData/dashboard/salesDashboard.js
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\kendo\\rawData\\dashboard\\salesDashboard.js"
  );
  import.meta.hot.lastModified = "1708503722843.1516";
}
var leadData_m = [
  {
    category: "Dirtect mail",
    value: 0.2545
  },
  {
    category: "E-Mail",
    value: 0.1552
  },
  {
    category: "Phone",
    value: 0.4059
  },
  {
    category: "Sales visit",
    value: 0.0911
  },
  {
    category: "Twitter",
    value: 0.0933
  },
  {
    category: "Web",
    value: 0.0933
  }
];
var campaignCategories_m = ["Jan", "Feb", "Mar", "Apr", "May"];
var campaignSeries_m = [
  {
    name: "",
    data: [8, 2, 6, 2, 8]
  }
];
var pipelineCategories_m = ["Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
var pipelineSeries_m = [
  {
    name: "Event",
    data: [300, 323, 634, 943, 1e3, 1200]
  },
  {
    name: "Newsletter",
    data: [520, 267, 831, 596, 700, 800]
  },
  {
    name: "Nurture",
    data: [145, 524, 600, 423, 500, 600]
  },
  {
    name: "Product Updates",
    data: [145, 524, 600, 423, 500, 600]
  },
  {
    name: "Promotion",
    data: [145, 524, 600, 423, 500, 600]
  }
];
var openCategories_m = [
  "Jan",
  "Feb",
  "Mar",
  "Apr"
];
var openSeries_m = [
  {
    name: "Event",
    data: [300, 323, 634, 943]
  }
];
var wonCategories_m = ["Lost", "Won"];
var wonSeries_m = [
  {
    name: "Call",
    data: [200, 600]
  },
  {
    name: "Demo",
    data: [100, 200]
  },
  {
    name: "E-mail",
    data: [0, 0]
  },
  {
    name: "Meeting",
    data: [50, 100]
  }
];
var productCategories_m = ["Fit", "Gladia", "Ninja", "Optim", "Refresh", "Soul", "Vibrance", "Welleness", "Xerves"];
var productSeries_m = [
  {
    name: "Created",
    data: [50, 0, 10, 0, 0, 0, 0, 80]
  },
  {
    name: "Ordered",
    data: [60, 50, 60, 50, 70, 30, 20, 100]
  },
  {
    name: "Rejected",
    data: [200, 50, 150, 50, 100, 100, 50, 50]
  }
];
var activeCategories_m = ["Custom", "Modal", "Standard"];
var activeSeries_m = [
  {
    name: "",
    data: [300, 323, 634]
  }
];
var criticalCategories_m = ["APT", "BEM", "HLS", "SCR"];
var criticalSeries_m = [
  {
    name: "Austin",
    data: [8, 6, 7, 5]
  }
];

// app/data/dashboard/salesData.js
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime());
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\data\\dashboard\\salesData.js"
  );
  import.meta.hot.lastModified = "1708503722784.0054";
}
var kpiService_m = [
  {
    Name: "Lead Conversion Rate",
    Value: "14.91",
    Trend: "up",
    TargetAch: "83",
    container: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(WrapperDonutChart, { series: leadData_m }, void 0, false, {
      fileName: "app/data/dashboard/salesData.js",
      lineNumber: 39,
      columnNumber: 15
    }, this),
    status: "Above Target",
    Analyze: "/demo/dashboard/analysis/pipelineAnalysis"
  },
  {
    Name: "Campaign ROI",
    Value: "4.33",
    Trend: "up",
    TargetAch: "$291.96",
    container: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(WrapperMultiBarChart, { category: campaignCategories_m, series: campaignSeries_m }, void 0, false, {
      fileName: "app/data/dashboard/salesData.js",
      lineNumber: 49,
      columnNumber: 15
    }, this),
    status: "Above Target",
    Analyze: "/demo/dashboard/analysis/pipelineAnalysis"
  },
  {
    Name: "Campaign Attributed Pipeline",
    Value: "7.49M",
    Trend: "down",
    TargetAch: 0,
    container: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(WrapperMultiStackColChart, { category: pipelineCategories_m, series: pipelineSeries_m }, void 0, false, {
      fileName: "app/data/dashboard/salesData.js",
      lineNumber: 58,
      columnNumber: 16
    }, this),
    status: "On Track",
    Analyze: "/demo/dashboard/analysis/pipelineAnalysis"
  },
  {
    Name: "Open Pipeline",
    Value: "$10.02M",
    Trend: "down",
    TargetAch: "$47.13k",
    container: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(WrapperMultiColumnChart, { category: openCategories_m, series: openSeries_m }, void 0, false, {
      fileName: "app/data/dashboard/salesData.js",
      lineNumber: 67,
      columnNumber: 16
    }, this),
    status: "Above Target",
    Analyze: "/demo/dashboard/analysis/pipelineAnalysis"
  },
  {
    Name: "Activity Rate - Won Oppty",
    Value: "3.61",
    Trend: "up",
    TargetAch: 90,
    container: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(WrapperMultiStackColChart, { category: wonCategories_m, series: wonSeries_m }, void 0, false, {
      fileName: "app/data/dashboard/salesData.js",
      lineNumber: 76,
      columnNumber: 16
    }, this),
    status: "Above Target",
    Analyze: "/demo/dashboard/analysis/wonAnalysis"
  },
  {
    Name: "Avg Contract Value by Product",
    Value: "$968.20k",
    Trend: "down",
    TargetAch: 90,
    container: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(WrapperMultiStackColChart, { category: productCategories_m, series: productSeries_m }, void 0, false, {
      fileName: "app/data/dashboard/salesData.js",
      lineNumber: 85,
      columnNumber: 16
    }, this),
    status: "On Track",
    Analyze: "/demo/dashboard/analysis/quoteAnalysis"
  },
  {
    Name: "Active MRR",
    Value: "$130.80M",
    Trend: "up",
    TargetAch: 77,
    container: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(WrapperMultiColumnChart, { category: activeCategories_m, series: activeSeries_m }, void 0, false, {
      fileName: "app/data/dashboard/salesData.js",
      lineNumber: 94,
      columnNumber: 16
    }, this),
    status: "/demo/dashboard/analysis/winAnalysis"
  },
  {
    Name: "Open Critical SRs",
    Value: "7",
    Trend: "up",
    TargetAch: 95,
    container: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(WrapperMultiColumnChart, { category: criticalCategories_m, series: criticalSeries_m }, void 0, false, {
      fileName: "app/data/dashboard/salesData.js",
      lineNumber: 102,
      columnNumber: 16
    }, this),
    status: "Above Target",
    Analyze: "/demo/dashboard/analysis/wonAnalysis"
  }
];

// app/routes/snop.dashboard.sales.jsx
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\snop.dashboard.sales.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\snop.dashboard.sales.jsx"
  );
  import.meta.hot.lastModified = "1708503722864.8657";
}
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
function SalesRoute() {
  _s();
  const emptyStyles = {
    background: "#ef4444"
  };
  const progressStyles = {
    background: "#22c55e"
  };
  const items = [{
    id: 1,
    name: "Review",
    description: "Conduct periodic (month/quarter/year) performance review of key business KPIs",
    to: `review`
  }, {
    id: 2,
    name: "Meeting",
    description: "Conduct daily/weekly data driven meetings and create plan of action ",
    to: `meeting`
  }];
  const centericon = [{
    name: "Download as PDF",
    icon: DocumentArrowDownIcon_default
  }, {
    name: "Email KPIs",
    icon: ShareIcon_default
  }, {
    name: "Copy as Image",
    icon: ClipboardDocumentCheckIcon_default
  }];
  const [mode, setMode] = (0, import_react.useState)(items[0]);
  const reviewTabs2 = ["Month", "Quarter", "Year"];
  const [reviewIndex, setReviewIndex] = (0, import_react.useState)(0);
  const meetingTabs2 = ["Daily", "Weekly"];
  const [meetingIndex, setMeetingIndex] = (0, import_react.useState)(0);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_jsx_dev_runtime4.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "mx-4 mt-1 rounded-lg bg-white   shadow", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex items-center justify-between p-2 ", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "m-2 flex-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h2", { className: "text-3xl font-bold leading-7 text-gray-900", children: "Demand Dashboard" }, void 0, false, {
        fileName: "app/routes/snop.dashboard.sales.jsx",
        lineNumber: 72,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/snop.dashboard.sales.jsx",
        lineNumber: 71,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex p-1 align-middle ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "ml-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(It, { value: mode, onChange: setMode, children: ({
        open
      }) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_jsx_dev_runtime4.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "relative", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "inline-flex divide-x divide-rose-700", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "inline-flex items-center gap-x-1.5 rounded-l-md bg-rose-500 px-3 py-2 text-white shadow-sm", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(CheckIcon_default, { className: "-ml-0.5 h-5 w-5 ", "aria-hidden": "true" }, void 0, false, {
              fileName: "app/routes/snop.dashboard.sales.jsx",
              lineNumber: 85,
              columnNumber: 27
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "text-sm font-semibold", children: mode.name }, void 0, false, {
              fileName: "app/routes/snop.dashboard.sales.jsx",
              lineNumber: 86,
              columnNumber: 27
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/snop.dashboard.sales.jsx",
            lineNumber: 84,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(It.Button, { className: "inline-flex items-center rounded-l-none rounded-r-md bg-rose-500 p-2 hover:bg-rose-700", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(ChevronDownIcon_default, { className: "h-5 w-5 text-white", "aria-hidden": "true" }, void 0, false, {
            fileName: "app/routes/snop.dashboard.sales.jsx",
            lineNumber: 89,
            columnNumber: 27
          }, this) }, void 0, false, {
            fileName: "app/routes/snop.dashboard.sales.jsx",
            lineNumber: 88,
            columnNumber: 25
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/snop.dashboard.sales.jsx",
          lineNumber: 83,
          columnNumber: 23
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(qe, { show: open, as: import_react.Fragment, leave: "transition ease-in duration-100", leaveFrom: "opacity-100", leaveTo: "opacity-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(It.Options, { className: "absolute right-0 z-10 mt-2 w-72 origin-top-right divide-y divide-gray-200 overflow-hidden rounded-md border bg-gray-100 shadow-lg ", children: items.map((option) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(It.Option, { className: ({
          active
        }) => classNames(active ? "bg-rose-500 text-white" : "text-gray-900", "cursor-default select-none p-4 text-sm"), value: option, children: ({
          selected,
          active
        }) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex flex-col", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex justify-between", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: selected ? "font-semibold" : "font-normal", children: option.name }, void 0, false, {
              fileName: "app/routes/snop.dashboard.sales.jsx",
              lineNumber: 103,
              columnNumber: 37
            }, this),
            selected ? /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: active ? "text-white" : "text-rose-600", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(CheckIcon_default, { className: "h-5 w-5", "aria-hidden": "true" }, void 0, false, {
              fileName: "app/routes/snop.dashboard.sales.jsx",
              lineNumber: 107,
              columnNumber: 41
            }, this) }, void 0, false, {
              fileName: "app/routes/snop.dashboard.sales.jsx",
              lineNumber: 106,
              columnNumber: 49
            }, this) : null
          ] }, void 0, true, {
            fileName: "app/routes/snop.dashboard.sales.jsx",
            lineNumber: 102,
            columnNumber: 35
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: classNames(active ? "text-rose-200" : "text-gray-500", "mt-2"), children: option.description }, void 0, false, {
            fileName: "app/routes/snop.dashboard.sales.jsx",
            lineNumber: 110,
            columnNumber: 35
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/snop.dashboard.sales.jsx",
          lineNumber: 101,
          columnNumber: 31
        }, this) }, option.name, false, {
          fileName: "app/routes/snop.dashboard.sales.jsx",
          lineNumber: 95,
          columnNumber: 48
        }, this)) }, void 0, false, {
          fileName: "app/routes/snop.dashboard.sales.jsx",
          lineNumber: 94,
          columnNumber: 25
        }, this) }, void 0, false, {
          fileName: "app/routes/snop.dashboard.sales.jsx",
          lineNumber: 93,
          columnNumber: 23
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/snop.dashboard.sales.jsx",
        lineNumber: 82,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/routes/snop.dashboard.sales.jsx",
        lineNumber: 81,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/routes/snop.dashboard.sales.jsx",
        lineNumber: 78,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/routes/snop.dashboard.sales.jsx",
        lineNumber: 77,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/snop.dashboard.sales.jsx",
        lineNumber: 76,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/snop.dashboard.sales.jsx",
      lineNumber: 70,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/snop.dashboard.sales.jsx",
      lineNumber: 69,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("main", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(CardLayout, { mode: mode.name === "Review" ? reviewTabs2 : meetingTabs2, tab: mode.name === "Review" ? reviewIndex : meetingIndex, kpiData: kpiService_m }, void 0, false, {
      fileName: "app/routes/snop.dashboard.sales.jsx",
      lineNumber: 167,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/snop.dashboard.sales.jsx",
      lineNumber: 166,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/snop.dashboard.sales.jsx",
    lineNumber: 68,
    columnNumber: 10
  }, this);
}
_s(SalesRoute, "qIPK7vxuiHEyfYnEC24NSdDcQ5c=");
_c4 = SalesRoute;
var _c4;
$RefreshReg$(_c4, "SalesRoute");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  SalesRoute as default
};
//# sourceMappingURL=/build/routes/snop.dashboard.sales-XAS4EX76.js.map
