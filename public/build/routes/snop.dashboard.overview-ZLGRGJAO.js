import {
  carData
} from "/build/_shared/chunk-OBRALRDY.js";
import {
  It
} from "/build/_shared/chunk-X55ANDUC.js";
import {
  CardLayout
} from "/build/_shared/chunk-WPKVYDZN.js";
import {
  WrapperChartGrid
} from "/build/_shared/chunk-2QEPD6DG.js";
import "/build/_shared/chunk-EZN6HZAL.js";
import "/build/_shared/chunk-TNTLQMTW.js";
import "/build/_shared/chunk-CO7DHVOA.js";
import "/build/_shared/chunk-ELWJTL4F.js";
import {
  WrapperMultiLineChart
} from "/build/_shared/chunk-XBDTUPGL.js";
import "/build/_shared/chunk-NON4LQMM.js";
import {
  WrapperMultiStackColChart
} from "/build/_shared/chunk-QRAMQPBO.js";
import {
  WrapperMultiBarChart
} from "/build/_shared/chunk-T5HJ6KPY.js";
import {
  WrapperPieChart
} from "/build/_shared/chunk-2VSZFGL3.js";
import {
  WrapperMultiAreaChart
} from "/build/_shared/chunk-JEBE5WMW.js";
import {
  WrapperMultiColumnChart
} from "/build/_shared/chunk-P6FI4LUL.js";
import "/build/_shared/chunk-6EK66RT6.js";
import {
  qe
} from "/build/_shared/chunk-I5FVCQST.js";
import "/build/_shared/chunk-J5ZDEXRM.js";
import "/build/_shared/chunk-FNVTLCHO.js";
import "/build/_shared/chunk-ZSUFT5EU.js";
import "/build/_shared/chunk-X4JIH5W5.js";
import "/build/_shared/chunk-QA7IBH2P.js";
import "/build/_shared/chunk-JKKPAHGM.js";
import "/build/_shared/chunk-OP7Q5FNF.js";
import "/build/_shared/chunk-EZ7JG6XF.js";
import {
  CheckIcon_default,
  ChevronDownIcon_default,
  ClipboardDocumentCheckIcon_default,
  DocumentArrowDownIcon_default,
  ShareIcon_default
} from "/build/_shared/chunk-RRHQD3BR.js";
import "/build/_shared/chunk-GIAAE3CH.js";
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

// app/routes/snop.dashboard.overview.jsx
var import_react = __toESM(require_react());

// app/kendo/rawData/dashboard/overviewDashboard.js
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\kendo\\rawData\\dashboard\\overviewDashboard.js"
  );
  import.meta.hot.lastModified = "1708503722842.1516";
}
var salesCategory_m = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
var salesData_m = [
  {
    name: "APAC",
    data: [100, 123, 234, 343, 123, 234]
  },
  {
    name: "Japan",
    data: [120, 67, 231, 196, 67, 231]
  },
  {
    name: "America",
    data: [45, 124, 189, 143, 124, 189]
  }
];
var forecastCategories_m = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
var forecastSeries_m = [
  {
    name: "APAC",
    data: [100, 123, 234, 343, 123, 234]
  },
  {
    name: "Japan",
    data: [120, 67, 231, 196, 67, 231]
  },
  {
    name: "America",
    data: [45, 124, 189, 143, 124, 189]
  }
];
var ontimeCategories_m = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
var ontimeSeries_m = [
  {
    name: "Japan",
    data: [100, 123, 234, 343, 123, 234]
  },
  {
    name: "America",
    data: [120, 67, 231, 196, 67, 231]
  },
  {
    name: "EMEA",
    data: [45, 124, 189, 143, 124, 189]
  }
];
var backlogData_m = [
  {
    category: "AT & solution",
    value: 0.51
  },
  {
    category: "Hilman and assocation",
    value: 8.11
  },
  {
    category: "INFINO services",
    value: 27.06
  },
  {
    category: "Internal-Vision",
    value: 61.2
  },
  {
    category: "National Science",
    value: 3.11
  }
];
var costCategories_m = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
var costSeries_m = [
  {
    name: "Japan",
    data: [100, 123, 234, 343, 123, 234]
  },
  {
    name: "America",
    data: [120, 67, 231, 196, 67, 231]
  },
  {
    name: "EMEA",
    data: [45, 124, 189, 143, 124, 189]
  }
];
var inventoryCategories_m = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
var inventorySeries_m = [{
  name: "",
  data: [123, 276, 310, 212, 240, 156]
}];
var marketingCategories_m = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
var marketingSeries_m = [{
  name: "",
  data: [123, 276, 310, 212, 240, 156]
}];
var logisticsCategories_m = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
var logisticsSeries_m = [{
  name: "",
  data: [123, 276, 310, 212, 240, 156]
}];

// app/data/dashboard/scmOverviewData.js
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\data\\dashboard\\scmOverviewData.js"
  );
  import.meta.hot.lastModified = "1711092779252.936";
}
var kpiService_m = [
  {
    Name: "Sales",
    Value: "$2.2B",
    Trend: "up",
    TargetAch: 75,
    container: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      WrapperMultiStackColChart,
      {
        category: salesCategory_m,
        series: salesData_m
      },
      void 0,
      false,
      {
        fileName: "app/data/dashboard/scmOverviewData.js",
        lineNumber: 58,
        columnNumber: 7
      },
      this
    ),
    status: "Above Target",
    Explore: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WrapperChartGrid, { rowData: carData }, void 0, false, {
      fileName: "app/data/dashboard/scmOverviewData.js",
      lineNumber: 64,
      columnNumber: 14
    }, this),
    Analyze: "/snop/dashboard/analysis/demandAnalysis"
  },
  {
    Name: "Forecast Accuracy",
    Value: "75%",
    Trend: "up",
    TargetAch: 90,
    container: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      WrapperMultiColumnChart,
      {
        category: forecastCategories_m,
        series: forecastSeries_m
      },
      void 0,
      false,
      {
        fileName: "app/data/dashboard/scmOverviewData.js",
        lineNumber: 73,
        columnNumber: 7
      },
      this
    ),
    status: "Below Target",
    Explore: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WrapperChartGrid, { rowData: carData }, void 0, false, {
      fileName: "app/data/dashboard/scmOverviewData.js",
      lineNumber: 79,
      columnNumber: 14
    }, this),
    Analyze: "/snop/dashboard/analysis/orderAnalysis"
  },
  {
    Name: "On-Time & In-Full",
    Value: "80%",
    Trend: "down",
    TargetAch: 90,
    // container: <WrapperTripleLineChart category={lineCategories_m} first={TripleLineFirstSeries_m} second={TripleLineSecondSeries_m} third={TripleLineThirdSeries_m}/>,
    container: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      WrapperMultiLineChart,
      {
        category: ontimeCategories_m,
        series: ontimeSeries_m
      },
      void 0,
      false,
      {
        fileName: "app/data/dashboard/scmOverviewData.js",
        lineNumber: 89,
        columnNumber: 7
      },
      this
    ),
    status: "On Track",
    Explore: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WrapperChartGrid, { rowData: carData }, void 0, false, {
      fileName: "app/data/dashboard/scmOverviewData.js",
      lineNumber: 95,
      columnNumber: 14
    }, this),
    Analyze: "/snop/dashboard/analysis/ontimeAnalysis"
  },
  {
    Name: "Backlog",
    Value: "$1.2M",
    Trend: "down",
    TargetAch: 50,
    container: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WrapperPieChart, { series: backlogData_m }, void 0, false, {
      fileName: "app/data/dashboard/scmOverviewData.js",
      lineNumber: 103,
      columnNumber: 16
    }, this),
    status: "Below Target",
    Explore: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WrapperChartGrid, { rowData: carData }, void 0, false, {
      fileName: "app/data/dashboard/scmOverviewData.js",
      lineNumber: 105,
      columnNumber: 14
    }, this),
    Analyze: "/snop/dashboard/analysis/agreementAnalysis"
  },
  {
    Name: "Cost of Goods",
    Value: "$1.2B",
    Trend: "up",
    TargetAch: 90,
    container: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      WrapperMultiColumnChart,
      {
        category: costCategories_m,
        series: costSeries_m
      },
      void 0,
      false,
      {
        fileName: "app/data/dashboard/scmOverviewData.js",
        lineNumber: 114,
        columnNumber: 7
      },
      this
    ),
    status: "On Track",
    Explore: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WrapperChartGrid, { rowData: carData }, void 0, false, {
      fileName: "app/data/dashboard/scmOverviewData.js",
      lineNumber: 120,
      columnNumber: 14
    }, this),
    Analyze: "/snop/dashboard/analysis/costAnalysis"
  },
  {
    Name: "Inventory",
    Value: "$600M",
    Trend: "down",
    TargetAch: 50,
    container: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      WrapperMultiAreaChart,
      {
        category: inventoryCategories_m,
        series: inventorySeries_m
      },
      void 0,
      false,
      {
        fileName: "app/data/dashboard/scmOverviewData.js",
        lineNumber: 129,
        columnNumber: 7
      },
      this
    ),
    status: "Below Target",
    Explore: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WrapperChartGrid, { rowData: carData }, void 0, false, {
      fileName: "app/data/dashboard/scmOverviewData.js",
      lineNumber: 135,
      columnNumber: 14
    }, this),
    Analyze: "/snop/dashboard/analysis/inventoryAnalysis"
  },
  {
    Name: "Sales & Marketing",
    Value: "$300M",
    Trend: "up",
    TargetAch: 80,
    container: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      WrapperMultiBarChart,
      {
        category: marketingCategories_m,
        series: marketingSeries_m
      },
      void 0,
      false,
      {
        fileName: "app/data/dashboard/scmOverviewData.js",
        lineNumber: 144,
        columnNumber: 7
      },
      this
    ),
    status: "On Track",
    Explore: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WrapperChartGrid, { rowData: carData }, void 0, false, {
      fileName: "app/data/dashboard/scmOverviewData.js",
      lineNumber: 150,
      columnNumber: 14
    }, this),
    Analyze: "/snop/dashboard/analysis/invcostAnalysis"
  },
  {
    Name: "Logistics",
    Value: "$300M",
    Trend: "up",
    TargetAch: 95,
    container: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      WrapperMultiLineChart,
      {
        category: logisticsCategories_m,
        series: logisticsSeries_m
      },
      void 0,
      false,
      {
        fileName: "app/data/dashboard/scmOverviewData.js",
        lineNumber: 159,
        columnNumber: 7
      },
      this
    ),
    status: "Above Target",
    Explore: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WrapperChartGrid, { rowData: carData }, void 0, false, {
      fileName: "app/data/dashboard/scmOverviewData.js",
      lineNumber: 165,
      columnNumber: 14
    }, this),
    Analyze: "/snop/dashboard/analysis/inventoryAnalysis"
  }
];

// app/routes/snop.dashboard.overview.jsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\snop.dashboard.overview.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\snop.dashboard.overview.jsx"
  );
  import.meta.hot.lastModified = "1711093029680.8777";
}
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
function OverviewRoute() {
  _s();
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
  const reviewTabs = ["Month", "Quarter", "Year"];
  const [reviewIndex, setReviewIndex] = (0, import_react.useState)(0);
  const meetingTabs = ["Daily", "Weekly"];
  const [meetingIndex, setMeetingIndex] = (0, import_react.useState)(0);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "mx-4 mt-1 rounded-lg bg-white   shadow", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex items-center justify-between p-2 ", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "m-2 flex-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h2", { className: "text-3xl font-bold leading-7 text-gray-900", children: "Overview Dashboard" }, void 0, false, {
        fileName: "app/routes/snop.dashboard.overview.jsx",
        lineNumber: 62,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/snop.dashboard.overview.jsx",
        lineNumber: 61,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex p-1 align-middle ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "ml-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(It, { value: mode, onChange: setMode, children: ({
        open
      }) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "relative", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "inline-flex divide-x divide-rose-700", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "inline-flex items-center gap-x-1.5 rounded-l-md bg-rose-500 px-3 py-2 text-white shadow-sm", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CheckIcon_default, { className: "-ml-0.5 h-5 w-5 ", "aria-hidden": "true" }, void 0, false, {
              fileName: "app/routes/snop.dashboard.overview.jsx",
              lineNumber: 75,
              columnNumber: 27
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "text-sm font-semibold", children: mode.name }, void 0, false, {
              fileName: "app/routes/snop.dashboard.overview.jsx",
              lineNumber: 76,
              columnNumber: 27
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/snop.dashboard.overview.jsx",
            lineNumber: 74,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(It.Button, { className: "inline-flex items-center rounded-l-none rounded-r-md bg-rose-500 p-2 hover:bg-rose-700", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ChevronDownIcon_default, { className: "h-5 w-5 text-white", "aria-hidden": "true" }, void 0, false, {
            fileName: "app/routes/snop.dashboard.overview.jsx",
            lineNumber: 79,
            columnNumber: 27
          }, this) }, void 0, false, {
            fileName: "app/routes/snop.dashboard.overview.jsx",
            lineNumber: 78,
            columnNumber: 25
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/snop.dashboard.overview.jsx",
          lineNumber: 73,
          columnNumber: 23
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(qe, { show: open, as: import_react.Fragment, leave: "transition ease-in duration-100", leaveFrom: "opacity-100", leaveTo: "opacity-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(It.Options, { className: "absolute right-0 z-10 mt-2 w-72 origin-top-right divide-y divide-gray-200 overflow-hidden rounded-md border bg-gray-100 shadow-lg ", children: items.map((option) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(It.Option, { className: ({
          active
        }) => classNames(active ? "bg-rose-500 text-white" : "text-gray-900", "cursor-default select-none p-4 text-sm"), value: option, children: ({
          selected,
          active
        }) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-col", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex justify-between", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: selected ? "font-semibold" : "font-normal", children: option.name }, void 0, false, {
              fileName: "app/routes/snop.dashboard.overview.jsx",
              lineNumber: 93,
              columnNumber: 37
            }, this),
            selected ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: active ? "text-white" : "text-rose-600", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CheckIcon_default, { className: "h-5 w-5", "aria-hidden": "true" }, void 0, false, {
              fileName: "app/routes/snop.dashboard.overview.jsx",
              lineNumber: 97,
              columnNumber: 41
            }, this) }, void 0, false, {
              fileName: "app/routes/snop.dashboard.overview.jsx",
              lineNumber: 96,
              columnNumber: 49
            }, this) : null
          ] }, void 0, true, {
            fileName: "app/routes/snop.dashboard.overview.jsx",
            lineNumber: 92,
            columnNumber: 35
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: classNames(active ? "text-rose-200" : "text-gray-500", "mt-2"), children: option.description }, void 0, false, {
            fileName: "app/routes/snop.dashboard.overview.jsx",
            lineNumber: 100,
            columnNumber: 35
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/snop.dashboard.overview.jsx",
          lineNumber: 91,
          columnNumber: 31
        }, this) }, option.name, false, {
          fileName: "app/routes/snop.dashboard.overview.jsx",
          lineNumber: 85,
          columnNumber: 48
        }, this)) }, void 0, false, {
          fileName: "app/routes/snop.dashboard.overview.jsx",
          lineNumber: 84,
          columnNumber: 25
        }, this) }, void 0, false, {
          fileName: "app/routes/snop.dashboard.overview.jsx",
          lineNumber: 83,
          columnNumber: 23
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/snop.dashboard.overview.jsx",
        lineNumber: 72,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/routes/snop.dashboard.overview.jsx",
        lineNumber: 71,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/routes/snop.dashboard.overview.jsx",
        lineNumber: 68,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/routes/snop.dashboard.overview.jsx",
        lineNumber: 67,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/snop.dashboard.overview.jsx",
        lineNumber: 66,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/snop.dashboard.overview.jsx",
      lineNumber: 60,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/snop.dashboard.overview.jsx",
      lineNumber: 59,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("main", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CardLayout, { mode: mode.name === "Review" ? reviewTabs : meetingTabs, tab: mode.name === "Review" ? reviewIndex : meetingIndex, kpiData: kpiService_m }, void 0, false, {
      fileName: "app/routes/snop.dashboard.overview.jsx",
      lineNumber: 158,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/snop.dashboard.overview.jsx",
      lineNumber: 157,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/snop.dashboard.overview.jsx",
    lineNumber: 58,
    columnNumber: 10
  }, this);
}
_s(OverviewRoute, "qIPK7vxuiHEyfYnEC24NSdDcQ5c=");
_c = OverviewRoute;
var _c;
$RefreshReg$(_c, "OverviewRoute");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  OverviewRoute as default
};
//# sourceMappingURL=/build/routes/snop.dashboard.overview-ZLGRGJAO.js.map
