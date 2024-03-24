import {
  It
} from "/build/_shared/chunk-X55ANDUC.js";
import {
  CardLayout
} from "/build/_shared/chunk-WPKVYDZN.js";
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
  WrapperPieChart
} from "/build/_shared/chunk-2VSZFGL3.js";
import {
  WrapperMultiAreaChart
} from "/build/_shared/chunk-JEBE5WMW.js";
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

// app/routes/snop.dashboard.inventory.jsx
var import_react = __toESM(require_react());

// app/kendo/rawData/dashboard/inventoryDashboard.js
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\kendo\\rawData\\dashboard\\inventoryDashboard.js"
  );
  import.meta.hot.lastModified = "1708503722840.1506";
}
var handbalance_m = [{
  category: "APAC",
  value: 59.51
}, {
  category: "JAPAN",
  value: 13.77
}, {
  category: "EMEA",
  value: 9.61
}, {
  category: "NORTH AMERICA",
  value: 17.11
}];
var avgInventoryCategories_m = ["APAC", "EMEA", "JAPAN", "AMERICA"];
var avgInventorySeries_m = [
  {
    name: "Invoiced Amount",
    data: [300, 323, 634, 943]
  }
];
var mapeCategories_m = ["2021 Q1", "2021 Q2", "2021 Q3", "2021 Q4"];
var mapeSeries_m = [
  {
    name: "Custom",
    data: [100, 300, 200, 343]
  },
  {
    name: "Model",
    data: [350, 500, 300, 650]
  },
  {
    name: "Standard",
    data: [350, 500, 300, 650]
  }
];
var unitCategories_m = ["2020 Q3", "2020 Q4", "2021 Q2", "2021 Q3", "2021 Q4"];
var unitSeries_m = [
  {
    name: "Custom",
    data: [100, 300, 200, 343]
  },
  {
    name: "Model",
    data: [350, 500, 300, 650]
  },
  {
    name: "Standard",
    data: [350, 500, 300, 650]
  }
];
var resourceCategories_m = ["2020 Q3", "2020 Q4", "2021 Q1", "2021 Q2", "2021 Q3", "2021 Q4"];
var resourceSeries_m = [
  {
    name: "",
    data: [123, 276, 310, 212, 240, 156]
  }
];
var overheadCategories_m = ["2020 Q3", "2020 Q4", "2021 Q1", "2021 Q2", "2021 Q3", "2021 Q4"];
var overheadSeries_m = [
  {
    name: "",
    data: [123, 276, 310, 212, 240, 156]
  }
];
var materialCategories_m = ["Custom", "Modal", "Standard"];
var materialSeries_m = [
  {
    name: "",
    data: [300, 323, 634]
  }
];
var turnsCategories_m = ["APT", "BEM", "HLS", "SCR"];
var turnsSeries_m = [
  {
    name: "Japan",
    data: [8, 6, 7, 5]
  }
];

// app/data/dashboard/inventoryData.js
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\data\\dashboard\\inventoryData.js"
  );
  import.meta.hot.lastModified = "1711092764076.441";
}
var kpiService_m = [
  {
    Name: "On Hand Balance",
    Value: "$8.46B",
    Trend: "up",
    TargetAch: 83,
    container: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WrapperPieChart, { series: handbalance_m }, void 0, false, {
      fileName: "app/data/dashboard/inventoryData.js",
      lineNumber: 54,
      columnNumber: 16
    }, this),
    status: "Above Target",
    Analyze: "/snop/dashboard/analysis/inventoryAnalysis"
  },
  {
    Name: "Avg Inventory Valuation",
    Value: "$233.57M",
    Trend: "up",
    TargetAch: 80,
    container: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      WrapperMultiBarChart,
      {
        category: avgInventoryCategories_m,
        series: avgInventorySeries_m
      },
      void 0,
      false,
      {
        fileName: "app/data/dashboard/inventoryData.js",
        lineNumber: 64,
        columnNumber: 7
      },
      this
    ),
    status: "Below Target",
    Analyze: "/snop/dashboard/analysis/inventoryAnalysis"
  },
  {
    Name: "MAPE",
    Value: "24%",
    Trend: "down",
    TargetAch: 0,
    container: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      WrapperMultiLineChart,
      {
        category: mapeCategories_m,
        series: mapeSeries_m
      },
      void 0,
      false,
      {
        fileName: "app/data/dashboard/inventoryData.js",
        lineNumber: 78,
        columnNumber: 7
      },
      this
    ),
    status: "On Track",
    Analyze: "/snop/dashboard/analysis/inventoryAnalysis"
  },
  {
    Name: "Unit Cost",
    Value: "$52.37K",
    Trend: "down",
    TargetAch: 10,
    container: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      WrapperMultiLineChart,
      {
        category: unitCategories_m,
        series: unitSeries_m
      },
      void 0,
      false,
      {
        fileName: "app/data/dashboard/inventoryData.js",
        lineNumber: 92,
        columnNumber: 7
      },
      this
    ),
    status: "Below Target",
    Analyze: "/snop/dashboard/analysis/invcostAnalysis"
  },
  {
    Name: "Resource Cost",
    Value: "$24.94M",
    Trend: "up",
    TargetAch: 90,
    container: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      WrapperMultiAreaChart,
      {
        category: resourceCategories_m,
        series: resourceSeries_m
      },
      void 0,
      false,
      {
        fileName: "app/data/dashboard/inventoryData.js",
        lineNumber: 106,
        columnNumber: 7
      },
      this
    ),
    status: "Above Target",
    Analyze: "/snop/dashboard/analysis/invcostAnalysis"
  },
  {
    Name: "Overhead Cost",
    Value: "$2.74M",
    Trend: "down",
    TargetAch: 90,
    container: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      WrapperMultiLineChart,
      {
        category: overheadCategories_m,
        series: overheadSeries_m
      },
      void 0,
      false,
      {
        fileName: "app/data/dashboard/inventoryData.js",
        lineNumber: 120,
        columnNumber: 7
      },
      this
    ),
    status: "Below Target",
    Analyze: "/snop/dashboard/analysis/invcostAnalysis"
  },
  {
    Name: "Material Cost",
    Value: "$4.17B",
    Trend: "up",
    TargetAch: 77,
    container: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      WrapperMultiBarChart,
      {
        category: materialCategories_m,
        series: materialSeries_m
      },
      void 0,
      false,
      {
        fileName: "app/data/dashboard/inventoryData.js",
        lineNumber: 134,
        columnNumber: 7
      },
      this
    ),
    status: "Below Target",
    Analyze: "/snop/dashboard/analysis/invcostAnalysis"
  },
  {
    Name: "Inventory Turns",
    Value: "7",
    Trend: "up",
    TargetAch: 95,
    container: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      WrapperMultiBarChart,
      {
        category: turnsCategories_m,
        series: turnsSeries_m
      },
      void 0,
      false,
      {
        fileName: "app/data/dashboard/inventoryData.js",
        lineNumber: 148,
        columnNumber: 7
      },
      this
    ),
    status: "Above Target",
    Analyze: "/snop/dashboard/analysis/inventoryAnalysis"
  }
];

// app/routes/snop.dashboard.inventory.jsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\snop.dashboard.inventory.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\snop.dashboard.inventory.jsx"
  );
  import.meta.hot.lastModified = "1711093205914.5334";
}
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
function InventoryRoute() {
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
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "m-2 flex-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h2", { className: "text-3xl font-bold leading-7 text-gray-900", children: "Inventory Dashboard" }, void 0, false, {
        fileName: "app/routes/snop.dashboard.inventory.jsx",
        lineNumber: 62,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/snop.dashboard.inventory.jsx",
        lineNumber: 61,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex p-1 align-middle ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "ml-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(It, { value: mode, onChange: setMode, children: ({
        open
      }) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "relative", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "inline-flex divide-x divide-rose-700", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "inline-flex items-center gap-x-1.5 rounded-l-md bg-rose-500 px-3 py-2 text-white shadow-sm", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CheckIcon_default, { className: "-ml-0.5 h-5 w-5 ", "aria-hidden": "true" }, void 0, false, {
              fileName: "app/routes/snop.dashboard.inventory.jsx",
              lineNumber: 75,
              columnNumber: 27
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "text-sm font-semibold", children: mode.name }, void 0, false, {
              fileName: "app/routes/snop.dashboard.inventory.jsx",
              lineNumber: 76,
              columnNumber: 27
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/snop.dashboard.inventory.jsx",
            lineNumber: 74,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(It.Button, { className: "inline-flex items-center rounded-l-none rounded-r-md bg-rose-500 p-2 hover:bg-rose-700", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ChevronDownIcon_default, { className: "h-5 w-5 text-white", "aria-hidden": "true" }, void 0, false, {
            fileName: "app/routes/snop.dashboard.inventory.jsx",
            lineNumber: 79,
            columnNumber: 27
          }, this) }, void 0, false, {
            fileName: "app/routes/snop.dashboard.inventory.jsx",
            lineNumber: 78,
            columnNumber: 25
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/snop.dashboard.inventory.jsx",
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
              fileName: "app/routes/snop.dashboard.inventory.jsx",
              lineNumber: 93,
              columnNumber: 37
            }, this),
            selected ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: active ? "text-white" : "text-rose-600", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CheckIcon_default, { className: "h-5 w-5", "aria-hidden": "true" }, void 0, false, {
              fileName: "app/routes/snop.dashboard.inventory.jsx",
              lineNumber: 97,
              columnNumber: 41
            }, this) }, void 0, false, {
              fileName: "app/routes/snop.dashboard.inventory.jsx",
              lineNumber: 96,
              columnNumber: 49
            }, this) : null
          ] }, void 0, true, {
            fileName: "app/routes/snop.dashboard.inventory.jsx",
            lineNumber: 92,
            columnNumber: 35
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: classNames(active ? "text-rose-200" : "text-gray-500", "mt-2"), children: option.description }, void 0, false, {
            fileName: "app/routes/snop.dashboard.inventory.jsx",
            lineNumber: 100,
            columnNumber: 35
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/snop.dashboard.inventory.jsx",
          lineNumber: 91,
          columnNumber: 31
        }, this) }, option.name, false, {
          fileName: "app/routes/snop.dashboard.inventory.jsx",
          lineNumber: 85,
          columnNumber: 48
        }, this)) }, void 0, false, {
          fileName: "app/routes/snop.dashboard.inventory.jsx",
          lineNumber: 84,
          columnNumber: 25
        }, this) }, void 0, false, {
          fileName: "app/routes/snop.dashboard.inventory.jsx",
          lineNumber: 83,
          columnNumber: 23
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/snop.dashboard.inventory.jsx",
        lineNumber: 72,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/routes/snop.dashboard.inventory.jsx",
        lineNumber: 71,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/routes/snop.dashboard.inventory.jsx",
        lineNumber: 68,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/routes/snop.dashboard.inventory.jsx",
        lineNumber: 67,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/snop.dashboard.inventory.jsx",
        lineNumber: 66,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/snop.dashboard.inventory.jsx",
      lineNumber: 60,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/snop.dashboard.inventory.jsx",
      lineNumber: 59,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("main", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CardLayout, { mode: mode.name === "Review" ? reviewTabs : meetingTabs, tab: mode.name === "Review" ? reviewIndex : meetingIndex, kpiData: kpiService_m }, void 0, false, {
      fileName: "app/routes/snop.dashboard.inventory.jsx",
      lineNumber: 157,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/snop.dashboard.inventory.jsx",
      lineNumber: 156,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/snop.dashboard.inventory.jsx",
    lineNumber: 58,
    columnNumber: 10
  }, this);
}
_s(InventoryRoute, "qIPK7vxuiHEyfYnEC24NSdDcQ5c=");
_c = InventoryRoute;
var _c;
$RefreshReg$(_c, "InventoryRoute");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  InventoryRoute as default
};
//# sourceMappingURL=/build/routes/snop.dashboard.inventory-FLP6WV5H.js.map
