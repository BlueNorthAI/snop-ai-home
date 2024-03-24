import {
  It
} from "/build/_shared/chunk-X55ANDUC.js";
import {
  CardLayout
} from "/build/_shared/chunk-WPKVYDZN.js";
import "/build/_shared/chunk-TNTLQMTW.js";
import "/build/_shared/chunk-CO7DHVOA.js";
import "/build/_shared/chunk-ELWJTL4F.js";
import "/build/_shared/chunk-NON4LQMM.js";
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
  ChevronDownIcon_default
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

// app/routes/snop.dashboard.supply.jsx
var import_react = __toESM(require_react());

// app/kendo/rawData/dashboard/supplyDashboard.js
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\kendo\\rawData\\dashboard\\supplyDashboard.js"
  );
  import.meta.hot.lastModified = "1708503722844.1516";
}
var poamount_m = [
  {
    category: "A",
    value: 26.47
  },
  {
    category: "B",
    value: 0.09
  },
  {
    category: "C",
    value: 3.14
  },
  {
    category: "D",
    value: 7.76
  },
  {
    category: "E",
    value: 16.2
  },
  {
    category: "F",
    value: 9.25
  },
  {
    category: "G",
    value: 0
  },
  {
    category: "H",
    value: 17.74
  },
  {
    category: "I",
    value: 3.35
  }
];
var receivedCategories_m = ["2019Q2", "2019Q3", "2019Q4", "2020Q1", "2020Q2", "2020Q3"];
var receivedSeries_m = [
  {
    name: "Received Amount",
    data: [80, 80, 80, 90, 90, 90]
  },
  {
    name: "PO Amount",
    data: [100, 100, 100, 120, 120, 120]
  }
];
var agreementCategories_m = ["2019Q2", "2019Q3", "2019Q4", "2020Q1", "2020Q2", "2020Q3"];
var agreementSeries_m = [
  {
    name: "Agreement",
    data: [70, 70, 80, 90, 90, 90]
  },
  {
    name: "Non-Agreement",
    data: [5, 10, 20, 10, 10, 10]
  }
];
var savings_m = [
  {
    category: "A",
    value: 26.47
  },
  {
    category: "B",
    value: 0.09
  },
  {
    category: "C",
    value: 3.14
  },
  {
    category: "D",
    value: 7.76
  },
  {
    category: "E",
    value: 16.2
  },
  {
    category: "F",
    value: 9.25
  },
  {
    category: "G",
    value: 0
  },
  {
    category: "H",
    value: 17.74
  },
  {
    category: "I",
    value: 3.35
  }
];
var supplierCategories_m = [
  "2020 Q3",
  "2020 Q4",
  "2021 Q1",
  "2021 Q2",
  "2021 Q3",
  "2021 Q4"
];
var supplierSeries_m = [
  {
    name: "",
    data: [40, 45, 40, 40, 30, 40]
  }
];
var lateCategories_m = [
  "2020 Q3",
  "2020 Q4",
  "2021 Q1",
  "2021 Q2",
  "2021 Q3",
  "2021 Q4"
];
var lateSeries_m = [
  {
    name: "",
    data: [123, 276, 310, 212, 240, 156]
  }
];
var cycleCategories_m = ["Bluetooth", "Bulb", "Chip", "Circuit", "Packing", "plug", "Receiver", "Wire"];
var cycleSeries_m = [
  {
    name: "",
    data: [100, 30, 50, 30, 45, 50, 35, 30, 20]
  }
];
var overdueCategories_m = ["30 Days", "60 Days", "90 Days"];
var overdueSeries_m = [
  {
    name: "",
    data: [24, 19, 5]
  }
];

// app/data/dashboard/supplyData.js
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\data\\dashboard\\supplyData.js"
  );
  import.meta.hot.lastModified = "1711092781784.0833";
}
var kpiService_m = [
  {
    Name: "PO Amount",
    Value: "$128M",
    Trend: "up",
    TargetAch: 100,
    container: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WrapperPieChart, { series: poamount_m }, void 0, false, {
      fileName: "app/data/dashboard/supplyData.js",
      lineNumber: 53,
      columnNumber: 16
    }, this),
    status: "Below Target",
    Analyze: "/snop/dashboard/analysis/proeffAnalysis"
  },
  {
    Name: "Received Amount",
    Value: "$113M",
    Trend: "up",
    TargetAch: 94,
    container: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      WrapperMultiColumnChart,
      {
        category: receivedCategories_m,
        series: receivedSeries_m
      },
      void 0,
      false,
      {
        fileName: "app/data/dashboard/supplyData.js",
        lineNumber: 63,
        columnNumber: 7
      },
      this
    ),
    status: "Below Target",
    Analyze: "/snop/dashboard/analysis/supplyAnalysis"
  },
  {
    Name: "Agreement Leakage",
    Value: "$14.89M",
    Trend: "down",
    TargetAch: 0,
    container: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      WrapperMultiColumnChart,
      {
        category: agreementCategories_m,
        series: agreementSeries_m
      },
      void 0,
      false,
      {
        fileName: "app/data/dashboard/supplyData.js",
        lineNumber: 77,
        columnNumber: 7
      },
      this
    ),
    status: "On Track",
    Analyze: "/snop/dashboard/analysis/procureAnalysis"
  },
  {
    Name: "Savings Opportunities",
    Value: "$32M",
    Trend: "down",
    TargetAch: 50,
    container: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WrapperPieChart, { series: savings_m }, void 0, false, {
      fileName: "app/data/dashboard/supplyData.js",
      lineNumber: 90,
      columnNumber: 16
    }, this),
    status: "Below Target",
    Analyze: "/snop/dashboard/analysis/savingsAnalysis"
  },
  {
    Name: "Supplier Count",
    Value: "40",
    Trend: "up",
    TargetAch: 90,
    container: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      WrapperMultiColumnChart,
      {
        category: supplierCategories_m,
        series: supplierSeries_m
      },
      void 0,
      false,
      {
        fileName: "app/data/dashboard/supplyData.js",
        lineNumber: 100,
        columnNumber: 7
      },
      this
    ),
    status: "Above Target",
    Analyze: "/snop/dashboard/analysis/supplyAnalysis"
  },
  {
    Name: "Received Late %",
    Value: "18%",
    Trend: "down",
    TargetAch: 90,
    container: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      WrapperMultiAreaChart,
      {
        category: lateCategories_m,
        series: lateSeries_m
      },
      void 0,
      false,
      {
        fileName: "app/data/dashboard/supplyData.js",
        lineNumber: 114,
        columnNumber: 7
      },
      this
    ),
    status: "Below Target",
    Analyze: "/snop/dashboard/analysis/spendAnalysis"
  },
  {
    Name: "PR to PO Cycle Time",
    Value: "46.08",
    Trend: "up",
    TargetAch: 77,
    container: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      WrapperMultiBarChart,
      {
        category: cycleCategories_m,
        series: cycleSeries_m
      },
      void 0,
      false,
      {
        fileName: "app/data/dashboard/supplyData.js",
        lineNumber: 128,
        columnNumber: 7
      },
      this
    ),
    status: "Below Target",
    Analyze: "/snop/dashboard/analysis/proeffAnalysis"
  },
  {
    Name: "AP OverDue",
    Value: "$51M",
    Trend: "up",
    TargetAch: 95,
    container: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      WrapperMultiColumnChart,
      {
        category: overdueCategories_m,
        series: overdueSeries_m
      },
      void 0,
      false,
      {
        fileName: "app/data/dashboard/supplyData.js",
        lineNumber: 142,
        columnNumber: 7
      },
      this
    ),
    status: "Above Target",
    Analyze: "/snop/dashboard/analysis/spendAnalysis"
  }
];

// app/routes/snop.dashboard.supply.jsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\snop.dashboard.supply.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\snop.dashboard.supply.jsx"
  );
  import.meta.hot.lastModified = "1711093060817.8584";
}
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
function SupplyRoute() {
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
  const [mode, setMode] = (0, import_react.useState)(items[0]);
  const reviewTabs = ["Month", "Quarter", "Year"];
  const [reviewIndex, setReviewIndex] = (0, import_react.useState)(0);
  const meetingTabs = ["Daily", "Weekly"];
  const [meetingIndex, setMeetingIndex] = (0, import_react.useState)(0);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "mx-4 mt-1 rounded-lg bg-white   shadow", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex items-center justify-between p-2 ", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "m-2 flex-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h2", { className: "text-3xl font-bold leading-7 text-gray-900", children: "Supply Dashboard" }, void 0, false, {
        fileName: "app/routes/snop.dashboard.supply.jsx",
        lineNumber: 65,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/snop.dashboard.supply.jsx",
        lineNumber: 64,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex p-1 align-middle ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "ml-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(It, { value: mode, onChange: setMode, children: ({
        open
      }) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "relative", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "inline-flex divide-x divide-rose-700", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "inline-flex items-center gap-x-1.5 rounded-l-md bg-rose-500 px-3 py-2 text-white shadow-sm", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CheckIcon_default, { className: "-ml-0.5 h-5 w-5 ", "aria-hidden": "true" }, void 0, false, {
              fileName: "app/routes/snop.dashboard.supply.jsx",
              lineNumber: 78,
              columnNumber: 27
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "text-sm font-semibold", children: mode.name }, void 0, false, {
              fileName: "app/routes/snop.dashboard.supply.jsx",
              lineNumber: 79,
              columnNumber: 27
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/snop.dashboard.supply.jsx",
            lineNumber: 77,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(It.Button, { className: "inline-flex items-center rounded-l-none rounded-r-md bg-rose-500 p-2 hover:bg-rose-700", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ChevronDownIcon_default, { className: "h-5 w-5 text-white", "aria-hidden": "true" }, void 0, false, {
            fileName: "app/routes/snop.dashboard.supply.jsx",
            lineNumber: 82,
            columnNumber: 27
          }, this) }, void 0, false, {
            fileName: "app/routes/snop.dashboard.supply.jsx",
            lineNumber: 81,
            columnNumber: 25
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/snop.dashboard.supply.jsx",
          lineNumber: 76,
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
              fileName: "app/routes/snop.dashboard.supply.jsx",
              lineNumber: 96,
              columnNumber: 37
            }, this),
            selected ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: active ? "text-white" : "text-rose-600", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CheckIcon_default, { className: "h-5 w-5", "aria-hidden": "true" }, void 0, false, {
              fileName: "app/routes/snop.dashboard.supply.jsx",
              lineNumber: 100,
              columnNumber: 41
            }, this) }, void 0, false, {
              fileName: "app/routes/snop.dashboard.supply.jsx",
              lineNumber: 99,
              columnNumber: 49
            }, this) : null
          ] }, void 0, true, {
            fileName: "app/routes/snop.dashboard.supply.jsx",
            lineNumber: 95,
            columnNumber: 35
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: classNames(active ? "text-rose-200" : "text-gray-500", "mt-2"), children: option.description }, void 0, false, {
            fileName: "app/routes/snop.dashboard.supply.jsx",
            lineNumber: 103,
            columnNumber: 35
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/snop.dashboard.supply.jsx",
          lineNumber: 94,
          columnNumber: 31
        }, this) }, option.name, false, {
          fileName: "app/routes/snop.dashboard.supply.jsx",
          lineNumber: 88,
          columnNumber: 48
        }, this)) }, void 0, false, {
          fileName: "app/routes/snop.dashboard.supply.jsx",
          lineNumber: 87,
          columnNumber: 25
        }, this) }, void 0, false, {
          fileName: "app/routes/snop.dashboard.supply.jsx",
          lineNumber: 86,
          columnNumber: 23
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/snop.dashboard.supply.jsx",
        lineNumber: 75,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/routes/snop.dashboard.supply.jsx",
        lineNumber: 74,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/routes/snop.dashboard.supply.jsx",
        lineNumber: 71,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/routes/snop.dashboard.supply.jsx",
        lineNumber: 70,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/snop.dashboard.supply.jsx",
        lineNumber: 69,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/snop.dashboard.supply.jsx",
      lineNumber: 63,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/snop.dashboard.supply.jsx",
      lineNumber: 62,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("main", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CardLayout, { mode: mode.name === "Review" ? reviewTabs : meetingTabs, tab: mode.name === "Review" ? reviewIndex : meetingIndex, kpiData: kpiService_m }, void 0, false, {
      fileName: "app/routes/snop.dashboard.supply.jsx",
      lineNumber: 343,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/snop.dashboard.supply.jsx",
      lineNumber: 342,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/snop.dashboard.supply.jsx",
    lineNumber: 61,
    columnNumber: 10
  }, this);
}
_s(SupplyRoute, "qIPK7vxuiHEyfYnEC24NSdDcQ5c=");
_c = SupplyRoute;
var _c;
$RefreshReg$(_c, "SupplyRoute");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  SupplyRoute as default
};
//# sourceMappingURL=/build/routes/snop.dashboard.supply-FWPUBZSQ.js.map
