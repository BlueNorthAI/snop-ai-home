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
  WrapperMultiBarChart
} from "/build/_shared/chunk-T5HJ6KPY.js";
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

// app/routes/snop.dashboard.finance.jsx
var import_react = __toESM(require_react());

// app/kendo/rawData/dashboard/financeDashboard.js
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\kendo\\rawData\\dashboard\\financeDashboard.js"
  );
  import.meta.hot.lastModified = "1708503722840.1506";
}
var ratioCategories_m = ["Jan", "Feb", "Mar", "Apr", "May"];
var ratioSeries_m = [
  {
    name: "",
    data: [300, 400, 450, 470, 500]
  }
];
var currentCategories_m = ["Jan", "Feb", "Mar", "Apr", "May"];
var currentSeries_m = [
  {
    name: "",
    data: [300, 300, 350, 370, 300]
  }
];
var invCategories_m = ["Jan", "Feb", "Mar", "Apr", "May"];
var invSeries_m = [
  {
    name: "",
    data: [100, 98, 100, 110, 120]
  },
  {
    name: "",
    data: [50, 80, 90, 120, 80]
  }
];
var debtCategories_m = ["Jan", "Feb", "Mar", "Apr", "May"];
var debtSeries_m = [
  {
    name: "",
    data: [200, 98, 100, 100, 90]
  }
];
var cashCategories_m = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
var cashSeries_m = [
  {
    name: "",
    data: [400, 300, 400, 400, 200, 600]
  }
];
var fixedCategories_m = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
var fixedSeries_m = [
  {
    name: "",
    data: [400, 300, 400, 400, 200, 600]
  }
];
var equCategories_m = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
var equSeries_m = [
  {
    name: "",
    data: [90, 80, 70, 30, 25, 0]
  }
];
var assCategories_m = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
var assSeries_m = [
  {
    name: "",
    data: [12, 15, 12, 12, 25, 0]
  }
];

// app/data/dashboard/financeData.js
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\data\\dashboard\\financeData.js"
  );
  import.meta.hot.lastModified = "1711092759288.828";
}
var kpiService_m = [
  {
    Name: "Operating Expense Ratio %",
    Value: "11.53",
    Trend: "up",
    TargetAch: 75,
    container: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      WrapperMultiLineChart,
      {
        category: ratioCategories_m,
        series: ratioSeries_m
      },
      void 0,
      false,
      {
        fileName: "app/data/dashboard/financeData.js",
        lineNumber: 57,
        columnNumber: 7
      },
      this
    ),
    status: "Above Target",
    Explore: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WrapperChartGrid, { rowData: carData }, void 0, false, {
      fileName: "app/data/dashboard/financeData.js",
      lineNumber: 63,
      columnNumber: 14
    }, this),
    Analyze: "/snop/dashboard/analysis/opexpenseAnalysis"
  },
  {
    Name: "Current Ratio",
    Value: "1.14",
    Trend: "up",
    TargetAch: 90,
    container: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      WrapperMultiLineChart,
      {
        category: currentCategories_m,
        series: currentSeries_m
      },
      void 0,
      false,
      {
        fileName: "app/data/dashboard/financeData.js",
        lineNumber: 72,
        columnNumber: 7
      },
      this
    ),
    status: "Below Target",
    Explore: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WrapperChartGrid, { rowData: carData }, void 0, false, {
      fileName: "app/data/dashboard/financeData.js",
      lineNumber: 78,
      columnNumber: 14
    }, this),
    Analyze: "/snop/dashboard/analysis/opexpenseAnalysis"
  },
  {
    Name: "Inventory Turnover Ratio",
    Value: "0.00",
    Trend: "down",
    TargetAch: 90,
    container: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WrapperMultiBarChart, { category: invCategories_m, series: invSeries_m }, void 0, false, {
      fileName: "app/data/dashboard/financeData.js",
      lineNumber: 87,
      columnNumber: 7
    }, this),
    status: "On Track",
    Explore: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WrapperChartGrid, { rowData: carData }, void 0, false, {
      fileName: "app/data/dashboard/financeData.js",
      lineNumber: 90,
      columnNumber: 14
    }, this),
    Analyze: "/snop/dashboard/analysis/opexpenseAnalysis"
  },
  {
    Name: "Debt to Equity Ratio",
    Value: "0.01",
    Trend: "down",
    TargetAch: 50,
    container: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      WrapperMultiLineChart,
      {
        category: debtCategories_m,
        series: debtSeries_m
      },
      void 0,
      false,
      {
        fileName: "app/data/dashboard/financeData.js",
        lineNumber: 99,
        columnNumber: 7
      },
      this
    ),
    status: "Below Target",
    Explore: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WrapperChartGrid, { rowData: carData }, void 0, false, {
      fileName: "app/data/dashboard/financeData.js",
      lineNumber: 105,
      columnNumber: 14
    }, this),
    Analyze: "/snop/dashboard/analysis/profitAnalysis"
  },
  {
    Name: "Cash Conversion Cycle",
    Value: "-$648.06K",
    Trend: "up",
    TargetAch: 90,
    container: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      WrapperMultiAreaChart,
      {
        category: cashCategories_m,
        series: cashSeries_m
      },
      void 0,
      false,
      {
        fileName: "app/data/dashboard/financeData.js",
        lineNumber: 114,
        columnNumber: 7
      },
      this
    ),
    status: "On Track",
    Explore: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WrapperChartGrid, { rowData: carData }, void 0, false, {
      fileName: "app/data/dashboard/financeData.js",
      lineNumber: 120,
      columnNumber: 14
    }, this),
    Analyze: "/snop/dashboard/analysis/profitAnalysis"
  },
  {
    Name: "Fixed Assets Turnover Ratio",
    Value: "0.00",
    Trend: "down",
    TargetAch: 90,
    container: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      WrapperMultiColumnChart,
      {
        category: fixedCategories_m,
        series: fixedSeries_m
      },
      void 0,
      false,
      {
        fileName: "app/data/dashboard/financeData.js",
        lineNumber: 129,
        columnNumber: 7
      },
      this
    ),
    status: "Below Target",
    Explore: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WrapperChartGrid, { rowData: carData }, void 0, false, {
      fileName: "app/data/dashboard/financeData.js",
      lineNumber: 135,
      columnNumber: 14
    }, this),
    Analyze: "/snop/dashboard/analysis/profitAnalysis"
  },
  {
    Name: "Return on Equity %",
    Value: "0.10",
    Trend: "up",
    TargetAch: 77,
    container: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WrapperMultiAreaChart, { category: equCategories_m, series: equSeries_m }, void 0, false, {
      fileName: "app/data/dashboard/financeData.js",
      lineNumber: 144,
      columnNumber: 7
    }, this),
    status: "On Track",
    Explore: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WrapperChartGrid, { rowData: carData }, void 0, false, {
      fileName: "app/data/dashboard/financeData.js",
      lineNumber: 147,
      columnNumber: 14
    }, this),
    Analyze: "//snop/dashboard/analysis/profitAnalysis"
  },
  {
    Name: "Return on Assets %",
    Value: "0.07",
    Trend: "up",
    TargetAch: 95,
    container: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WrapperMultiAreaChart, { category: assCategories_m, series: assSeries_m }, void 0, false, {
      fileName: "app/data/dashboard/financeData.js",
      lineNumber: 156,
      columnNumber: 7
    }, this),
    status: "Above Target",
    Explore: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WrapperChartGrid, { rowData: carData }, void 0, false, {
      fileName: "app/data/dashboard/financeData.js",
      lineNumber: 159,
      columnNumber: 14
    }, this),
    Analyze: "/snop/dashboard/analysis/profitAnalysis"
  }
];

// app/routes/snop.dashboard.finance.jsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\snop.dashboard.finance.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\snop.dashboard.finance.jsx"
  );
  import.meta.hot.lastModified = "1711093316270.2607";
}
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
function FinanceRoute() {
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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "mx-4 mt-1 rounded-lg bg-white   shadow", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex items-center justify-between p-2 ", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "m-2 flex-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h2", { className: "text-3xl font-bold leading-7 text-gray-900", children: "Finance Dashboard" }, void 0, false, {
        fileName: "app/routes/snop.dashboard.finance.jsx",
        lineNumber: 72,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/snop.dashboard.finance.jsx",
        lineNumber: 71,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex p-1 align-middle ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "ml-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(It, { value: mode, onChange: setMode, children: ({
        open
      }) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "relative", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "inline-flex divide-x divide-rose-700", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "inline-flex items-center gap-x-1.5 rounded-l-md bg-rose-500 px-3 py-2 text-white shadow-sm", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CheckIcon_default, { className: "-ml-0.5 h-5 w-5 ", "aria-hidden": "true" }, void 0, false, {
              fileName: "app/routes/snop.dashboard.finance.jsx",
              lineNumber: 85,
              columnNumber: 27
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "text-sm font-semibold", children: mode.name }, void 0, false, {
              fileName: "app/routes/snop.dashboard.finance.jsx",
              lineNumber: 86,
              columnNumber: 27
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/snop.dashboard.finance.jsx",
            lineNumber: 84,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(It.Button, { className: "inline-flex items-center rounded-l-none rounded-r-md bg-rose-500 p-2 hover:bg-rose-700", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ChevronDownIcon_default, { className: "h-5 w-5 text-white", "aria-hidden": "true" }, void 0, false, {
            fileName: "app/routes/snop.dashboard.finance.jsx",
            lineNumber: 89,
            columnNumber: 27
          }, this) }, void 0, false, {
            fileName: "app/routes/snop.dashboard.finance.jsx",
            lineNumber: 88,
            columnNumber: 25
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/snop.dashboard.finance.jsx",
          lineNumber: 83,
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
              fileName: "app/routes/snop.dashboard.finance.jsx",
              lineNumber: 103,
              columnNumber: 37
            }, this),
            selected ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: active ? "text-white" : "text-rose-600", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CheckIcon_default, { className: "h-5 w-5", "aria-hidden": "true" }, void 0, false, {
              fileName: "app/routes/snop.dashboard.finance.jsx",
              lineNumber: 107,
              columnNumber: 41
            }, this) }, void 0, false, {
              fileName: "app/routes/snop.dashboard.finance.jsx",
              lineNumber: 106,
              columnNumber: 49
            }, this) : null
          ] }, void 0, true, {
            fileName: "app/routes/snop.dashboard.finance.jsx",
            lineNumber: 102,
            columnNumber: 35
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: classNames(active ? "text-rose-200" : "text-gray-500", "mt-2"), children: option.description }, void 0, false, {
            fileName: "app/routes/snop.dashboard.finance.jsx",
            lineNumber: 110,
            columnNumber: 35
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/snop.dashboard.finance.jsx",
          lineNumber: 101,
          columnNumber: 31
        }, this) }, option.name, false, {
          fileName: "app/routes/snop.dashboard.finance.jsx",
          lineNumber: 95,
          columnNumber: 48
        }, this)) }, void 0, false, {
          fileName: "app/routes/snop.dashboard.finance.jsx",
          lineNumber: 94,
          columnNumber: 25
        }, this) }, void 0, false, {
          fileName: "app/routes/snop.dashboard.finance.jsx",
          lineNumber: 93,
          columnNumber: 23
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/snop.dashboard.finance.jsx",
        lineNumber: 82,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/routes/snop.dashboard.finance.jsx",
        lineNumber: 81,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/routes/snop.dashboard.finance.jsx",
        lineNumber: 78,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/routes/snop.dashboard.finance.jsx",
        lineNumber: 77,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/snop.dashboard.finance.jsx",
        lineNumber: 76,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/snop.dashboard.finance.jsx",
      lineNumber: 70,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/snop.dashboard.finance.jsx",
      lineNumber: 69,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("main", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CardLayout, { mode: mode.name === "Review" ? reviewTabs2 : meetingTabs2, tab: mode.name === "Review" ? reviewIndex : meetingIndex, kpiData: kpiService_m }, void 0, false, {
      fileName: "app/routes/snop.dashboard.finance.jsx",
      lineNumber: 167,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/snop.dashboard.finance.jsx",
      lineNumber: 166,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/snop.dashboard.finance.jsx",
    lineNumber: 68,
    columnNumber: 10
  }, this);
}
_s(FinanceRoute, "qIPK7vxuiHEyfYnEC24NSdDcQ5c=");
_c = FinanceRoute;
var _c;
$RefreshReg$(_c, "FinanceRoute");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  FinanceRoute as default
};
//# sourceMappingURL=/build/routes/snop.dashboard.finance-57PG33K3.js.map
