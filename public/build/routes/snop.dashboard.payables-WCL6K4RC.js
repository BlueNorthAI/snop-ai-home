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

// app/routes/snop.dashboard.payables.jsx
var import_react = __toESM(require_react());

// app/kendo/rawData/dashboard/payablesDashboard.js
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\kendo\\rawData\\dashboard\\payablesDashboard.js"
  );
  import.meta.hot.lastModified = "1708503722842.1516";
}
var invCategories_m = ["Jan", "Feb", "Mar", "Apr", "May"];
var invSeries_m = [
  {
    name: "Port",
    data: [120, 67, 100, 80, 90]
  },
  {
    name: "Fran",
    data: [110, 90, 80, 70, 120]
  },
  {
    name: "San ",
    data: [80, 100, 110, 70, 50]
  }
];
var outCategories_m = ["Jan", "Feb", "Mar", "Apr", "May"];
var outSeries_m = [
  {
    name: "",
    data: [300, 400, 450, 470, 500]
  }
];
var overCategories_m = ["Jan", "Feb", "Mar", "Apr", "May"];
var overSeries_m = [
  {
    name: "",
    data: [100, 98, 100, 110, 120]
  }
];
var dueCategories_m = ["Jan", "Feb", "Mar", "Apr", "May"];
var dueSeries_m = [
  {
    name: "",
    data: [50, 98, 200, 10, 120]
  }
];
var payCategories_m = ["Jan", "Feb", "Mar", "Apr", "May"];
var paySeries_m = [
  {
    name: "",
    data: [30, 90, 40, 10, 120]
  }
];
var avgCategories_m = ["Jan", "Feb", "Mar", "Apr", "May"];
var avgSeries_m = [
  {
    name: "",
    data: [250, 270, 280, 290, 300]
  }
];
var ontimeCategories_m = ["Jan", "Feb", "Mar", "Apr", "May"];
var ontimeSeries_m = [
  {
    name: "",
    data: [100, 0, 5, 20, 20]
  }
];
var assCategories_m = ["Jan", "Feb", "Mar", "Apr", "May"];
var assSeries_m = [
  {
    name: "",
    data: [60, 100, 20, 10, 120]
  }
];

// app/data/dashboard/payablesData.js
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\data\\dashboard\\payablesData.js"
  );
  import.meta.hot.lastModified = "1708503722783.0056";
}
var kpiService_m = [
  {
    Name: "AP Invoices Processed",
    Value: "$2.16M",
    Trend: "up",
    TargetAch: 75,
    container: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WrapperMultiStackColChart, { category: invCategories_m, series: invSeries_m }, void 0, false, {
      fileName: "app/data/dashboard/payablesData.js",
      lineNumber: 54,
      columnNumber: 16
    }, this),
    status: "Above Target",
    Explore: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WrapperChartGrid, { rowData: carData }, void 0, false, {
      fileName: "app/data/dashboard/payablesData.js",
      lineNumber: 56,
      columnNumber: 13
    }, this),
    Analyze: "demandAnalysis"
  },
  {
    Name: "AP Outstanding",
    Value: "$404.44M",
    Trend: "up",
    TargetAch: 90,
    container: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WrapperMultiColumnChart, { category: outCategories_m, series: outSeries_m }, void 0, false, {
      fileName: "app/data/dashboard/payablesData.js",
      lineNumber: 64,
      columnNumber: 16
    }, this),
    status: "Below Target",
    Explore: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WrapperChartGrid, { rowData: carData }, void 0, false, {
      fileName: "app/data/dashboard/payablesData.js",
      lineNumber: 66,
      columnNumber: 13
    }, this),
    Analyze: "demandAnalysis"
  },
  {
    Name: "AP Overdue",
    Value: "0.00",
    Trend: "down",
    TargetAch: 90,
    container: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WrapperMultiColumnChart, { category: overCategories_m, series: overSeries_m }, void 0, false, {
      fileName: "app/data/dashboard/payablesData.js",
      lineNumber: 74,
      columnNumber: 16
    }, this),
    status: "On Track",
    Explore: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WrapperChartGrid, { rowData: carData }, void 0, false, {
      fileName: "app/data/dashboard/payablesData.js",
      lineNumber: 76,
      columnNumber: 13
    }, this),
    Analyze: "demandAnalysis"
  },
  {
    Name: "AP Due in 30 Days",
    Value: "0.01",
    Trend: "down",
    TargetAch: 50,
    container: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WrapperMultiColumnChart, { category: dueCategories_m, series: dueSeries_m }, void 0, false, {
      fileName: "app/data/dashboard/payablesData.js",
      lineNumber: 84,
      columnNumber: 16
    }, this),
    status: "Below Target",
    Explore: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WrapperChartGrid, { rowData: carData }, void 0, false, {
      fileName: "app/data/dashboard/payablesData.js",
      lineNumber: 86,
      columnNumber: 13
    }, this),
    Analyze: "demandAnalysis"
  },
  {
    Name: "AP Payments Processed",
    Value: "$11.70M",
    Trend: "up",
    TargetAch: 90,
    container: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WrapperMultiColumnChart, { category: payCategories_m, series: paySeries_m }, void 0, false, {
      fileName: "app/data/dashboard/payablesData.js",
      lineNumber: 94,
      columnNumber: 15
    }, this),
    status: "On Track",
    Explore: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WrapperChartGrid, { rowData: carData }, void 0, false, {
      fileName: "app/data/dashboard/payablesData.js",
      lineNumber: 96,
      columnNumber: 13
    }, this),
    Analyze: "demandAnalysis"
  },
  {
    Name: "AP Average Payment Days",
    Value: "0.00",
    Trend: "down",
    TargetAch: 90,
    container: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WrapperMultiLineChart, { category: avgCategories_m, series: avgSeries_m }, void 0, false, {
      fileName: "app/data/dashboard/payablesData.js",
      lineNumber: 104,
      columnNumber: 16
    }, this),
    status: "Below Target",
    Explore: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WrapperChartGrid, { rowData: carData }, void 0, false, {
      fileName: "app/data/dashboard/payablesData.js",
      lineNumber: 106,
      columnNumber: 13
    }, this),
    Analyze: "demandAnalysis"
  },
  {
    Name: "Ontime Payment Performance",
    Value: "0.10",
    Trend: "up",
    TargetAch: 77,
    container: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WrapperMultiLineChart, { category: ontimeCategories_m, series: ontimeSeries_m }, void 0, false, {
      fileName: "app/data/dashboard/payablesData.js",
      lineNumber: 114,
      columnNumber: 16
    }, this),
    status: "On Track",
    Explore: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WrapperChartGrid, { rowData: carData }, void 0, false, {
      fileName: "app/data/dashboard/payablesData.js",
      lineNumber: 116,
      columnNumber: 13
    }, this),
    Analyze: "demandAnalysis"
  },
  {
    Name: "Return on Assets %",
    Value: "0.07",
    Trend: "up",
    TargetAch: 95,
    container: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WrapperMultiColumnChart, { category: assCategories_m, series: assSeries_m }, void 0, false, {
      fileName: "app/data/dashboard/payablesData.js",
      lineNumber: 124,
      columnNumber: 16
    }, this),
    status: "Above Target",
    Explore: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WrapperChartGrid, { rowData: carData }, void 0, false, {
      fileName: "app/data/dashboard/payablesData.js",
      lineNumber: 126,
      columnNumber: 13
    }, this),
    Analyze: "demandAnalysis"
  }
];

// app/routes/snop.dashboard.payables.jsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\snop.dashboard.payables.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\snop.dashboard.payables.jsx"
  );
  import.meta.hot.lastModified = "1711094854429.826";
}
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
function MyplRoute() {
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
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "m-2 flex-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h2", { className: "text-3xl font-bold leading-7 text-gray-900", children: "Payables Dashboard" }, void 0, false, {
        fileName: "app/routes/snop.dashboard.payables.jsx",
        lineNumber: 62,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/snop.dashboard.payables.jsx",
        lineNumber: 61,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex p-1 align-middle ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "ml-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(It, { value: mode, onChange: setMode, children: ({
        open
      }) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "relative", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "inline-flex divide-x divide-rose-700", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "inline-flex items-center gap-x-1.5 rounded-l-md bg-rose-500 px-3 py-2 text-white shadow-sm", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CheckIcon_default, { className: "-ml-0.5 h-5 w-5 ", "aria-hidden": "true" }, void 0, false, {
              fileName: "app/routes/snop.dashboard.payables.jsx",
              lineNumber: 75,
              columnNumber: 27
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "text-sm font-semibold", children: mode.name }, void 0, false, {
              fileName: "app/routes/snop.dashboard.payables.jsx",
              lineNumber: 76,
              columnNumber: 27
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/snop.dashboard.payables.jsx",
            lineNumber: 74,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(It.Button, { className: "inline-flex items-center rounded-l-none rounded-r-md bg-rose-500 p-2 hover:bg-rose-700", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ChevronDownIcon_default, { className: "h-5 w-5 text-white", "aria-hidden": "true" }, void 0, false, {
            fileName: "app/routes/snop.dashboard.payables.jsx",
            lineNumber: 79,
            columnNumber: 27
          }, this) }, void 0, false, {
            fileName: "app/routes/snop.dashboard.payables.jsx",
            lineNumber: 78,
            columnNumber: 25
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/snop.dashboard.payables.jsx",
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
              fileName: "app/routes/snop.dashboard.payables.jsx",
              lineNumber: 93,
              columnNumber: 37
            }, this),
            selected ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: active ? "text-white" : "text-rose-600", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CheckIcon_default, { className: "h-5 w-5", "aria-hidden": "true" }, void 0, false, {
              fileName: "app/routes/snop.dashboard.payables.jsx",
              lineNumber: 97,
              columnNumber: 41
            }, this) }, void 0, false, {
              fileName: "app/routes/snop.dashboard.payables.jsx",
              lineNumber: 96,
              columnNumber: 49
            }, this) : null
          ] }, void 0, true, {
            fileName: "app/routes/snop.dashboard.payables.jsx",
            lineNumber: 92,
            columnNumber: 35
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: classNames(active ? "text-rose-200" : "text-gray-500", "mt-2"), children: option.description }, void 0, false, {
            fileName: "app/routes/snop.dashboard.payables.jsx",
            lineNumber: 100,
            columnNumber: 35
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/snop.dashboard.payables.jsx",
          lineNumber: 91,
          columnNumber: 31
        }, this) }, option.name, false, {
          fileName: "app/routes/snop.dashboard.payables.jsx",
          lineNumber: 85,
          columnNumber: 48
        }, this)) }, void 0, false, {
          fileName: "app/routes/snop.dashboard.payables.jsx",
          lineNumber: 84,
          columnNumber: 25
        }, this) }, void 0, false, {
          fileName: "app/routes/snop.dashboard.payables.jsx",
          lineNumber: 83,
          columnNumber: 23
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/snop.dashboard.payables.jsx",
        lineNumber: 72,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/routes/snop.dashboard.payables.jsx",
        lineNumber: 71,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/routes/snop.dashboard.payables.jsx",
        lineNumber: 68,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/routes/snop.dashboard.payables.jsx",
        lineNumber: 67,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/snop.dashboard.payables.jsx",
        lineNumber: 66,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/snop.dashboard.payables.jsx",
      lineNumber: 60,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/snop.dashboard.payables.jsx",
      lineNumber: 59,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("main", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CardLayout, { mode: mode.name === "Review" ? reviewTabs : meetingTabs, tab: mode.name === "Review" ? reviewIndex : meetingIndex, kpiData: kpiService_m }, void 0, false, {
      fileName: "app/routes/snop.dashboard.payables.jsx",
      lineNumber: 157,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/snop.dashboard.payables.jsx",
      lineNumber: 156,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/snop.dashboard.payables.jsx",
    lineNumber: 58,
    columnNumber: 10
  }, this);
}
_s(MyplRoute, "qIPK7vxuiHEyfYnEC24NSdDcQ5c=");
_c = MyplRoute;
var _c;
$RefreshReg$(_c, "MyplRoute");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  MyplRoute as default
};
//# sourceMappingURL=/build/routes/snop.dashboard.payables-WCL6K4RC.js.map
