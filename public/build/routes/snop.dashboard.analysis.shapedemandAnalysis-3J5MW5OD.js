import {
  WrapperMultiBarColorChart
} from "/build/_shared/chunk-EKAJ3JAC.js";
import "/build/_shared/chunk-P6FI4LUL.js";
import {
  Ae
} from "/build/_shared/chunk-RIJWRO2S.js";
import "/build/_shared/chunk-ZSUFT5EU.js";
import "/build/_shared/chunk-X4JIH5W5.js";
import {
  Bars3Icon_default,
  XMarkIcon_default
} from "/build/_shared/chunk-QA7IBH2P.js";
import "/build/_shared/chunk-JKKPAHGM.js";
import {
  Chart,
  ChartPane,
  ChartPanes,
  ChartSeries,
  ChartSeriesItem,
  ChartValueAxis,
  ChartValueAxisItem
} from "/build/_shared/chunk-OP7Q5FNF.js";
import "/build/_shared/chunk-EZ7JG6XF.js";
import {
  AdjustmentsHorizontalIcon_default,
  ChevronDoubleRightIcon_default
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

// app/kendo/rawData/analysis/shapedemandAnalysis.js
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\kendo\\rawData\\analysis\\shapedemandAnalysis.js"
  );
  import.meta.hot.lastModified = "1711168982671.9634";
}
var pro4Data = [
  {
    categories: "pro1",
    data: 46,
    color: "#2196F3"
  },
  {
    categories: "pro2",
    data: 15,
    color: "#bc83ee"
  },
  {
    categories: "pro3",
    data: 20,
    color: "#ff7668"
  },
  {
    categories: "pro4",
    data: 22,
    color: "#ffa600"
  },
  {
    categories: "pro5",
    data: 50,
    color: "#aa46be"
  },
  {
    categories: "pro6",
    data: 16,
    color: "#59b0f6"
  },
  {
    categories: "pro7",
    data: 47,
    color: "#cda2f2"
  },
  {
    categories: "pro8",
    data: 17,
    color: "#ff8fc9"
  },
  {
    categories: "pro9",
    data: 7,
    color: "#ff988e"
  },
  {
    categories: "pro10",
    data: 9,
    color: "#ffbc40"
  },
  {
    categories: "pro11",
    data: 46,
    color: "#2196F3"
  },
  {
    categories: "pro12",
    data: 15,
    color: "#bc83ee"
  },
  {
    categories: "pro13",
    data: 20,
    color: "#ff7668"
  },
  {
    categories: "pro14",
    data: 22,
    color: "#ffa600"
  },
  {
    categories: "pro15",
    data: 50,
    color: "#aa46be"
  },
  {
    categories: "pro16",
    data: 16,
    color: "#59b0f6"
  },
  {
    categories: "pro17",
    data: 47,
    color: "#cda2f2"
  },
  {
    categories: "pro18",
    data: 17,
    color: "#ff8fc9"
  },
  {
    categories: "pro19",
    data: 7,
    color: "#ff988e"
  },
  {
    categories: "pro20",
    data: 9,
    color: "#ffbc40"
  }
];

// app/data/analysis/shapedemand.js
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\data\\analysis\\shapedemand.js"
  );
  import.meta.hot.lastModified = "1711116322514.1235";
}
var kpiInv_m = [
  {
    Name: "Shortage in 8 weeks",
    sub: "",
    container: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WrapperMultiBarColorChart, { seriesData: pro4Data }, void 0, false, {
      fileName: "app/data/analysis/shapedemand.js",
      lineNumber: 56,
      columnNumber: 16
    }, this)
  }
];

// app/routes/snop.dashboard.analysis.shapedemandAnalysis.jsx
var import_react = __toESM(require_react());
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\snop.dashboard.analysis.shapedemandAnalysis.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\snop.dashboard.analysis.shapedemandAnalysis.jsx"
  );
  import.meta.hot.lastModified = "1711208072593.022";
}
var seriesData = [[1, 2, 3, 5], [0, 1, 0, 1]];
var navigation = [{
  name: "Service",
  href: "/snop/dashboard/analysis/serviceAnalysis",
  current: false
}, {
  name: "SKU",
  href: "/snop/dashboard/analysis/skuAnalysis",
  current: false
}, {
  name: "SKU Pro",
  href: "/snop/dashboard/analysis/skuproAnalysis",
  current: true
}, {
  name: "Under/shape",
  href: "/snop/dashboard/analysis/underAnalysis",
  current: false
}, {
  name: "Action:Redeploy",
  href: "/snop/dashboard/analysis/actionAnalysis",
  current: false
}];
var stats = [{
  name: "Backorders",
  stat: "+66K"
}, {
  name: "OTIF (commit)",
  stat: "-1.0%"
}, {
  name: "OTIF (ship)",
  stat: "-2.0%"
}, {
  name: "Total Change to last",
  stat: "+1.5M"
}];
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
function OverviewAnalysisRoute() {
  _s();
  ;
  const [slideopen, setslideOpen] = (0, import_react.useState)(false);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "w-full h-screen", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: " bg-slate-600 ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "ml-4 flex h-16 items-center justify-start", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "hidden md:block", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "text-3xl font-bold text-white", children: "2 SKU Prioritization Overview" }, void 0, false, {
      fileName: "app/routes/snop.dashboard.analysis.shapedemandAnalysis.jsx",
      lineNumber: 77,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/routes/snop.dashboard.analysis.shapedemandAnalysis.jsx",
      lineNumber: 76,
      columnNumber: 15
    }, this) }, void 0, false, {
      fileName: "app/routes/snop.dashboard.analysis.shapedemandAnalysis.jsx",
      lineNumber: 75,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/routes/snop.dashboard.analysis.shapedemandAnalysis.jsx",
      lineNumber: 74,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/snop.dashboard.analysis.shapedemandAnalysis.jsx",
      lineNumber: 73,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("button", { type: "button", className: "top-15 fixed right-0 mt-4 flex cursor-pointer items-center \n                rounded-l-lg border bg-white p-2 text-sm font-semibold text-gray-900 shadow-xl hover:bg-rose-600 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2", onClick: () => setslideOpen(!slideopen), children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(AdjustmentsHorizontalIcon_default, { className: "h-5 w-5 items-center", "aria-hidden": "true" }, void 0, false, {
      fileName: "app/routes/snop.dashboard.analysis.shapedemandAnalysis.jsx",
      lineNumber: 86,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/snop.dashboard.analysis.shapedemandAnalysis.jsx",
      lineNumber: 84,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("dl", { className: "mx-4 my-2 grid grid-cols-1 gap-6  lg:grid-cols-4", children: stats.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "items-center overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("dt", { className: "truncate text-center text-lg font-medium text-gray-500", children: item.name }, void 0, false, {
          fileName: "app/routes/snop.dashboard.analysis.shapedemandAnalysis.jsx",
          lineNumber: 92,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("dd", { className: "mt-1 text-center text-4xl font-bold tracking-tight  text-gray-900  lg:text-5xl", children: item.stat }, void 0, false, {
          fileName: "app/routes/snop.dashboard.analysis.shapedemandAnalysis.jsx",
          lineNumber: 95,
          columnNumber: 17
        }, this)
      ] }, item.name, true, {
        fileName: "app/routes/snop.dashboard.analysis.shapedemandAnalysis.jsx",
        lineNumber: 91,
        columnNumber: 32
      }, this)) }, void 0, false, {
        fileName: "app/routes/snop.dashboard.analysis.shapedemandAnalysis.jsx",
        lineNumber: 90,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "relative", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "absolute inset-0 flex items-center", "aria-hidden": "true", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "mx-4 w-full border-t border-gray-200" }, void 0, false, {
        fileName: "app/routes/snop.dashboard.analysis.shapedemandAnalysis.jsx",
        lineNumber: 102,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/routes/snop.dashboard.analysis.shapedemandAnalysis.jsx",
        lineNumber: 101,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/snop.dashboard.analysis.shapedemandAnalysis.jsx",
        lineNumber: 100,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/snop.dashboard.analysis.shapedemandAnalysis.jsx",
      lineNumber: 89,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "m-4 rounded-lg bg-white shadow-xl shadow-slate-900/10", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h3", { className: "pl-3 py-2 text-lg mx-2 font-medium text-gray-900", children: "Service metrics by product group" }, void 0, false, {
        fileName: "app/routes/snop.dashboard.analysis.shapedemandAnalysis.jsx",
        lineNumber: 108,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("ul", { className: "grid grid-cols-1  rounded-lg bg-white", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Chart, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ChartPanes, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ChartPane, { name: "top" }, void 0, false, {
            fileName: "app/routes/snop.dashboard.analysis.shapedemandAnalysis.jsx",
            lineNumber: 114,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ChartPane, { name: "bottom", height: 100 }, void 0, false, {
            fileName: "app/routes/snop.dashboard.analysis.shapedemandAnalysis.jsx",
            lineNumber: 115,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/snop.dashboard.analysis.shapedemandAnalysis.jsx",
          lineNumber: 113,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ChartSeries, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ChartSeriesItem, { data: seriesData[0] }, void 0, false, {
            fileName: "app/routes/snop.dashboard.analysis.shapedemandAnalysis.jsx",
            lineNumber: 118,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ChartSeriesItem, { type: "line", data: seriesData[1], axis: "bottom" }, void 0, false, {
            fileName: "app/routes/snop.dashboard.analysis.shapedemandAnalysis.jsx",
            lineNumber: 119,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/snop.dashboard.analysis.shapedemandAnalysis.jsx",
          lineNumber: 117,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ChartValueAxis, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ChartValueAxisItem, { name: "top" }, void 0, false, {
            fileName: "app/routes/snop.dashboard.analysis.shapedemandAnalysis.jsx",
            lineNumber: 122,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ChartValueAxisItem, { name: "bottom", pane: "bottom" }, void 0, false, {
            fileName: "app/routes/snop.dashboard.analysis.shapedemandAnalysis.jsx",
            lineNumber: 123,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/snop.dashboard.analysis.shapedemandAnalysis.jsx",
          lineNumber: 121,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/snop.dashboard.analysis.shapedemandAnalysis.jsx",
        lineNumber: 112,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/snop.dashboard.analysis.shapedemandAnalysis.jsx",
        lineNumber: 111,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/snop.dashboard.analysis.shapedemandAnalysis.jsx",
      lineNumber: 107,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "m-4 rounded-lg bg-white shadow-xl shadow-slate-900/10", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h3", { className: "pl-3 py-2 text-lg mx-2 font-medium text-gray-900", children: "Service Metrics by SKU for products" }, void 0, false, {
        fileName: "app/routes/snop.dashboard.analysis.shapedemandAnalysis.jsx",
        lineNumber: 133,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("ul", { className: "p-1 grid grid-cols-1 md:grid-cols-3 rounded-lg bg-white", children: kpiInv_m.map((kpi) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { className: "col-span-1 flex flex-col divide-y divide-white", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "relative flex flex-1 flex-col py-2 pl-3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h3", { className: "text-base font-medium text-gray-900", children: kpi.Name }, void 0, false, {
          fileName: "app/routes/snop.dashboard.analysis.shapedemandAnalysis.jsx",
          lineNumber: 140,
          columnNumber: 21
        }, this) }, void 0, false, {
          fileName: "app/routes/snop.dashboard.analysis.shapedemandAnalysis.jsx",
          lineNumber: 139,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: kpi.container }, void 0, false, {
          fileName: "app/routes/snop.dashboard.analysis.shapedemandAnalysis.jsx",
          lineNumber: 145,
          columnNumber: 19
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/snop.dashboard.analysis.shapedemandAnalysis.jsx",
        lineNumber: 138,
        columnNumber: 17
      }, this) }, kpi.Name, false, {
        fileName: "app/routes/snop.dashboard.analysis.shapedemandAnalysis.jsx",
        lineNumber: 137,
        columnNumber: 34
      }, this)) }, void 0, false, {
        fileName: "app/routes/snop.dashboard.analysis.shapedemandAnalysis.jsx",
        lineNumber: 136,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/snop.dashboard.analysis.shapedemandAnalysis.jsx",
      lineNumber: 132,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("footer", { className: "mt-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Ae, { as: "nav", className: "h-16 border-t bg-white", children: ({
      open
    }) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "w-full px-2 py-2 sm:px-2 lg:px-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex h-12 items-center justify-start", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h2", { className: "text-md mr-2 font-bold text-gray-500", children: "Demand Analysis" }, void 0, false, {
          fileName: "app/routes/snop.dashboard.analysis.shapedemandAnalysis.jsx",
          lineNumber: 158,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ChevronDoubleRightIcon_default, { className: "-mr-1 ml-1 h-5 w-5 flex-shrink-0 items-center text-gray-400 group-hover:text-gray-500", "aria-hidden": "true" }, void 0, false, {
          fileName: "app/routes/snop.dashboard.analysis.shapedemandAnalysis.jsx",
          lineNumber: 161,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "hidden md:block", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex items-baseline", children: navigation.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { href: item.href, className: classNames(item.current ? "bg-blue-500 text-white" : "text-black hover:bg-blue-500 hover:text-white", "text-md mx-2 rounded-md px-5 py-2 font-medium"), "aria-current": item.current ? "page" : void 0, children: item.name }, item.name, false, {
          fileName: "app/routes/snop.dashboard.analysis.shapedemandAnalysis.jsx",
          lineNumber: 166,
          columnNumber: 51
        }, this)) }, void 0, false, {
          fileName: "app/routes/snop.dashboard.analysis.shapedemandAnalysis.jsx",
          lineNumber: 165,
          columnNumber: 25
        }, this) }, void 0, false, {
          fileName: "app/routes/snop.dashboard.analysis.shapedemandAnalysis.jsx",
          lineNumber: 163,
          columnNumber: 23
        }, this) }, void 0, false, {
          fileName: "app/routes/snop.dashboard.analysis.shapedemandAnalysis.jsx",
          lineNumber: 162,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "-mr-2 flex md:hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Ae.Button, { className: "inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "sr-only", children: "Open main menu" }, void 0, false, {
            fileName: "app/routes/snop.dashboard.analysis.shapedemandAnalysis.jsx",
            lineNumber: 176,
            columnNumber: 25
          }, this),
          open ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(XMarkIcon_default, { className: "block h-6 w-6", "aria-hidden": "true" }, void 0, false, {
            fileName: "app/routes/snop.dashboard.analysis.shapedemandAnalysis.jsx",
            lineNumber: 177,
            columnNumber: 33
          }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Bars3Icon_default, { className: "block h-6 w-6", "aria-hidden": "true" }, void 0, false, {
            fileName: "app/routes/snop.dashboard.analysis.shapedemandAnalysis.jsx",
            lineNumber: 177,
            columnNumber: 94
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/snop.dashboard.analysis.shapedemandAnalysis.jsx",
          lineNumber: 175,
          columnNumber: 23
        }, this) }, void 0, false, {
          fileName: "app/routes/snop.dashboard.analysis.shapedemandAnalysis.jsx",
          lineNumber: 173,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/snop.dashboard.analysis.shapedemandAnalysis.jsx",
        lineNumber: 157,
        columnNumber: 19
      }, this) }, void 0, false, {
        fileName: "app/routes/snop.dashboard.analysis.shapedemandAnalysis.jsx",
        lineNumber: 156,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Ae.Panel, { className: "md:hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "space-y-1 px-2 pb-3 pt-2 sm:px-3", children: navigation.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Ae.Button, { as: "a", href: item.href, className: classNames(item.current ? "bg-gray-900 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white", "block rounded-md px-3 py-2 text-base font-medium"), "aria-current": item.current ? "page" : void 0, children: item.name }, item.name, false, {
        fileName: "app/routes/snop.dashboard.analysis.shapedemandAnalysis.jsx",
        lineNumber: 185,
        columnNumber: 45
      }, this)) }, void 0, false, {
        fileName: "app/routes/snop.dashboard.analysis.shapedemandAnalysis.jsx",
        lineNumber: 184,
        columnNumber: 19
      }, this) }, void 0, false, {
        fileName: "app/routes/snop.dashboard.analysis.shapedemandAnalysis.jsx",
        lineNumber: 183,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/snop.dashboard.analysis.shapedemandAnalysis.jsx",
      lineNumber: 155,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/routes/snop.dashboard.analysis.shapedemandAnalysis.jsx",
      lineNumber: 152,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/snop.dashboard.analysis.shapedemandAnalysis.jsx",
      lineNumber: 151,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/snop.dashboard.analysis.shapedemandAnalysis.jsx",
    lineNumber: 72,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/snop.dashboard.analysis.shapedemandAnalysis.jsx",
    lineNumber: 71,
    columnNumber: 10
  }, this);
}
_s(OverviewAnalysisRoute, "ehoBJIlkESukqJH+dhoTgBhbd8o=");
_c = OverviewAnalysisRoute;
var _c;
$RefreshReg$(_c, "OverviewAnalysisRoute");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  OverviewAnalysisRoute as default
};
//# sourceMappingURL=/build/routes/snop.dashboard.analysis.shapedemandAnalysis-3J5MW5OD.js.map
