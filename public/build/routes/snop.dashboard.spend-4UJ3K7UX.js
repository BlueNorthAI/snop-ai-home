import {
  WrapperMultiColumnChart
} from "/build/_shared/chunk-75NNQQDI.js";
import {
  WrapperPieChart
} from "/build/_shared/chunk-XAXQLYNX.js";
import {
  CardLayout,
  It,
  qe
} from "/build/_shared/chunk-EIQCPSYD.js";
import "/build/_shared/chunk-CWIOTFXK.js";
import "/build/_shared/chunk-2HNBOA5V.js";
import "/build/_shared/chunk-CO7DHVOA.js";
import {
  WrapperMultiLineChart
} from "/build/_shared/chunk-FRUZNVUY.js";
import {
  WrapperMultiBarChart
} from "/build/_shared/chunk-WLAYZXF5.js";
import "/build/_shared/chunk-WAFXOQC7.js";
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

// app/routes/snop.dashboard.spend.jsx
var import_react = __toESM(require_react());

// app/kendo/rawData/dashboard/spendDashboard.js
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\kendo\\rawData\\dashboard\\spendDashboard.js"
  );
  import.meta.hot.lastModified = "1708503722844.1516";
}
var totalSpend_m = [
  {
    category: "Direct1",
    value: 26.47
  },
  {
    category: "Online2",
    value: 0.09
  },
  {
    category: "Partner3",
    value: 0.28
  },
  {
    category: "Direct4",
    value: 0.08
  },
  {
    category: "Online5",
    value: 3.14
  },
  {
    category: "Partner6",
    value: 15.65
  },
  {
    category: "Direct7",
    value: 7.76
  },
  {
    category: "Online8",
    value: 16.2
  },
  {
    category: "Partner9",
    value: 9.25
  },
  {
    category: "Online10",
    value: 0
  },
  {
    category: "Partner11",
    value: 17.74
  },
  {
    category: "Partner12",
    value: 3.35
  }
];
var addressableCategories_m = ["2019Q2", "2019Q3", "2019Q4", "2020Q1", "2020Q2", "2020Q3"];
var addressableSeries_m = [
  {
    name: "Addressable",
    data: [80, 85, 90, 95, 95, 95]
  },
  {
    name: "Total Spend",
    data: [90, 95, 95, 120, 120, 120]
  }
];
var leakageCategories_m = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
var leakageSeries_m = [
  {
    name: "Off-Contract",
    data: [5, 15, 10, 5, 10, 15]
  },
  {
    name: "Contract",
    data: [75, 70, 75, 85, 80, 80]
  }
];
var offContractCategories_m = ["Hardware", "Production", "Supplies", "Servies", "Maintance", "Team"];
var offContractSeries_m = [
  {
    name: "",
    data: [70, 70, 80, 90, 90, 90]
  }
];
var employeeCategories_m = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"];
var employeeSeries_m = [
  {
    name: "",
    data: [1.2, 0.7, 1.5, 0.8, 0.9, 0.1, 0.6, 0.7, 0.5]
  }
];
var savingsCategories_m = ["Electric", "Products", "Manufacturing", "Advanced Crop"];
var savingsSeries_m = [
  {
    name: "",
    data: [40, 38, 36, 40]
  }
];
var payableCategories_m = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
var payableSeries_m = [
  {
    name: "",
    data: [40, 45, 40, 38, 36, 40]
  }
];
var overdueCategories_m = ["30 Days", "60 Days", "90 Days"];
var overdueSeries_m = [
  {
    name: "",
    data: [24, 19, 5]
  }
];

// app/data/dashboard/spendData.js
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\data\\dashboard\\spendData.js"
  );
  import.meta.hot.lastModified = "1708503722785.0066";
}
var kpiService_m = [
  {
    Name: "Total Spend",
    Value: "$128M",
    Trend: "up",
    TargetAch: 5,
    container: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WrapperPieChart, { series: totalSpend_m }, void 0, false, {
      fileName: "app/data/dashboard/spendData.js",
      lineNumber: 41,
      columnNumber: 16
    }, this),
    status: "Below Target",
    Analyze: "/demo/dashboard/analysis/spendAnalysis"
  },
  {
    Name: "Addressable Spend",
    Value: "$133M",
    Trend: "up",
    TargetAch: 94,
    container: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WrapperMultiColumnChart, { category: addressableCategories_m, series: addressableSeries_m }, void 0, false, {
      fileName: "app/data/dashboard/spendData.js",
      lineNumber: 50,
      columnNumber: 16
    }, this),
    status: "Below Target",
    Analyze: "/demo/dashboard/analysis/spendAnalysis"
  },
  {
    Name: "Contract Leakage",
    Value: "13%",
    Trend: "down",
    TargetAch: 0,
    container: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WrapperMultiColumnChart, { category: leakageCategories_m, series: leakageSeries_m }, void 0, false, {
      fileName: "app/data/dashboard/spendData.js",
      lineNumber: 59,
      columnNumber: 16
    }, this),
    status: "On Track",
    Analyze: "/demo/dashboard/analysis/offContractAnalysis"
  },
  {
    Name: "Off-Contract Spend",
    Value: "$52.37K",
    Trend: "down",
    TargetAch: 47,
    container: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WrapperMultiColumnChart, { category: offContractCategories_m, series: offContractSeries_m }, void 0, false, {
      fileName: "app/data/dashboard/spendData.js",
      lineNumber: 68,
      columnNumber: 16
    }, this),
    status: "Below Target",
    Analyze: "/demo/dashboard/analysis/offContractAnalysis"
  },
  {
    Name: "Employee Expenses",
    Value: "$8M",
    Trend: "up",
    TargetAch: 90,
    container: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WrapperMultiColumnChart, { category: employeeCategories_m, series: employeeSeries_m }, void 0, false, {
      fileName: "app/data/dashboard/spendData.js",
      lineNumber: 77,
      columnNumber: 16
    }, this),
    status: "Above Target",
    Analyze: "/demo/dashboard/analysis/expenseAnalysis"
  },
  {
    Name: "Realized Savings",
    Value: "$10M",
    Trend: "down",
    TargetAch: 90,
    container: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WrapperMultiLineChart, { category: savingsCategories_m, series: savingsSeries_m }, void 0, false, {
      fileName: "app/data/dashboard/spendData.js",
      lineNumber: 86,
      columnNumber: 16
    }, this),
    status: "Below Target",
    Analyze: "/demo/dashboard/analysis/apAnalysis"
  },
  {
    Name: "Days Payable Outstanding",
    Value: "40",
    Trend: "up",
    TargetAch: 77,
    container: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WrapperMultiColumnChart, { category: payableCategories_m, series: payableSeries_m }, void 0, false, {
      fileName: "app/data/dashboard/spendData.js",
      lineNumber: 95,
      columnNumber: 16
    }, this),
    status: "Below Target",
    Analyze: "/demo/dashboard/analysis/apAnalysis"
  },
  {
    Name: "AP OverDue",
    Value: "$51M",
    Trend: "up",
    TargetAch: 95,
    container: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WrapperMultiBarChart, { category: overdueCategories_m, series: overdueSeries_m }, void 0, false, {
      fileName: "app/data/dashboard/spendData.js",
      lineNumber: 104,
      columnNumber: 16
    }, this),
    status: "Above Target",
    Analyze: "/demo/dashboard/analysis/categoryAnalysis"
  }
];

// app/routes/snop.dashboard.spend.jsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\snop.dashboard.spend.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\snop.dashboard.spend.jsx"
  );
  import.meta.hot.lastModified = "1708503722864.8657";
}
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
function SpendRoute() {
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
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "m-2 flex-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h2", { className: "text-3xl font-bold leading-7 text-gray-900", children: "Demand Dashboard" }, void 0, false, {
        fileName: "app/routes/snop.dashboard.spend.jsx",
        lineNumber: 62,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/snop.dashboard.spend.jsx",
        lineNumber: 61,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex p-1 align-middle ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "ml-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(It, { value: mode, onChange: setMode, children: ({
        open
      }) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "relative", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "inline-flex divide-x divide-rose-700", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "inline-flex items-center gap-x-1.5 rounded-l-md bg-rose-500 px-3 py-2 text-white shadow-sm", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CheckIcon_default, { className: "-ml-0.5 h-5 w-5 ", "aria-hidden": "true" }, void 0, false, {
              fileName: "app/routes/snop.dashboard.spend.jsx",
              lineNumber: 75,
              columnNumber: 27
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "text-sm font-semibold", children: mode.name }, void 0, false, {
              fileName: "app/routes/snop.dashboard.spend.jsx",
              lineNumber: 76,
              columnNumber: 27
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/snop.dashboard.spend.jsx",
            lineNumber: 74,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(It.Button, { className: "inline-flex items-center rounded-l-none rounded-r-md bg-rose-500 p-2 hover:bg-rose-700", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ChevronDownIcon_default, { className: "h-5 w-5 text-white", "aria-hidden": "true" }, void 0, false, {
            fileName: "app/routes/snop.dashboard.spend.jsx",
            lineNumber: 79,
            columnNumber: 27
          }, this) }, void 0, false, {
            fileName: "app/routes/snop.dashboard.spend.jsx",
            lineNumber: 78,
            columnNumber: 25
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/snop.dashboard.spend.jsx",
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
              fileName: "app/routes/snop.dashboard.spend.jsx",
              lineNumber: 93,
              columnNumber: 37
            }, this),
            selected ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: active ? "text-white" : "text-rose-600", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CheckIcon_default, { className: "h-5 w-5", "aria-hidden": "true" }, void 0, false, {
              fileName: "app/routes/snop.dashboard.spend.jsx",
              lineNumber: 97,
              columnNumber: 41
            }, this) }, void 0, false, {
              fileName: "app/routes/snop.dashboard.spend.jsx",
              lineNumber: 96,
              columnNumber: 49
            }, this) : null
          ] }, void 0, true, {
            fileName: "app/routes/snop.dashboard.spend.jsx",
            lineNumber: 92,
            columnNumber: 35
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: classNames(active ? "text-rose-200" : "text-gray-500", "mt-2"), children: option.description }, void 0, false, {
            fileName: "app/routes/snop.dashboard.spend.jsx",
            lineNumber: 100,
            columnNumber: 35
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/snop.dashboard.spend.jsx",
          lineNumber: 91,
          columnNumber: 31
        }, this) }, option.name, false, {
          fileName: "app/routes/snop.dashboard.spend.jsx",
          lineNumber: 85,
          columnNumber: 48
        }, this)) }, void 0, false, {
          fileName: "app/routes/snop.dashboard.spend.jsx",
          lineNumber: 84,
          columnNumber: 25
        }, this) }, void 0, false, {
          fileName: "app/routes/snop.dashboard.spend.jsx",
          lineNumber: 83,
          columnNumber: 23
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/snop.dashboard.spend.jsx",
        lineNumber: 72,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/routes/snop.dashboard.spend.jsx",
        lineNumber: 71,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/routes/snop.dashboard.spend.jsx",
        lineNumber: 68,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/routes/snop.dashboard.spend.jsx",
        lineNumber: 67,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/snop.dashboard.spend.jsx",
        lineNumber: 66,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/snop.dashboard.spend.jsx",
      lineNumber: 60,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/snop.dashboard.spend.jsx",
      lineNumber: 59,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("main", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CardLayout, { mode: mode.name === "Review" ? reviewTabs : meetingTabs, tab: mode.name === "Review" ? reviewIndex : meetingIndex, kpiData: kpiService_m }, void 0, false, {
      fileName: "app/routes/snop.dashboard.spend.jsx",
      lineNumber: 157,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/snop.dashboard.spend.jsx",
      lineNumber: 156,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/snop.dashboard.spend.jsx",
    lineNumber: 58,
    columnNumber: 10
  }, this);
}
_s(SpendRoute, "qIPK7vxuiHEyfYnEC24NSdDcQ5c=");
_c = SpendRoute;
var _c;
$RefreshReg$(_c, "SpendRoute");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  SpendRoute as default
};
//# sourceMappingURL=/build/routes/snop.dashboard.spend-4UJ3K7UX.js.map
