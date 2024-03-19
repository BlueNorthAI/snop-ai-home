import {
  WrapperMultiStackColChart
} from "/build/_shared/chunk-TTN7GJHC.js";
import {
  Ae
} from "/build/_shared/chunk-JWNV2IEY.js";
import "/build/_shared/chunk-X4JIH5W5.js";
import {
  Bars3Icon_default,
  XMarkIcon_default
} from "/build/_shared/chunk-BWWX2MUZ.js";
import "/build/_shared/chunk-ZSUFT5EU.js";
import "/build/_shared/chunk-JKKPAHGM.js";
import {
  AdjustmentsHorizontalIcon_default,
  ChevronDoubleRightIcon_default
} from "/build/_shared/chunk-6EOJRDC7.js";
import {
  WrapperMultiColumnChart
} from "/build/_shared/chunk-75NNQQDI.js";
import {
  WrapperMultiLineChart
} from "/build/_shared/chunk-P5OGMUJN.js";
import "/build/_shared/chunk-WAFXOQC7.js";
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

// app/kendo/rawData/analysis/skuAnalysis.js
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\kendo\\rawData\\analysis\\skuAnalysis.js"
  );
  import.meta.hot.lastModified = "1708503722835.15";
}
var serviceCategories_m = [
  "Oct 10",
  "Oct 25",
  "Nov 9",
  "Nov 24",
  "Dec 9",
  "Dec 24"
];
var serviceSeries_m = [
  {
    name: "",
    data: [10, 0, 15, 0, 0, 5, 25, 0, 5, 15, 50]
  },
  {
    name: "",
    data: [0, 0, 15, 0, 0, 5, 10, 0, 0, 15, 5]
  }
];
var service1Categories_m = [
  "Oct 10",
  "Oct 25",
  "Nov 9",
  "Nov 24",
  "Dec 9",
  "Dec 24"
];
var service1Series_m = [
  {
    name: "",
    data: [5, 10, 5, 0, 5, 15, 18]
  }
];
var pastCategories_m = ["Oct 1", "Nov 1", "Dec 1", "Jan 1", "Feb 1", "Mar 1"];
var pastSeries_m = [
  {
    name: "",
    data: [10, 0, 15, 0, 0, 5, 25, 0, 0]
  }
];
var past1Categories_m = [
  "Oct 1",
  "Nov 1",
  "Dec 1",
  "Jan 1",
  "Feb 1",
  "Mar 1"
];
var past1Series_m = [
  {
    name: "",
    data: [10, 6, 15, 6, 4, 5]
  },
  {
    name: "",
    data: [10, 6, 15, 6, 4, 5]
  }
];

// app/data/analysis/skuData.js
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\data\\analysis\\skuData.js"
  );
  import.meta.hot.lastModified = "1708503722773.0027";
}
var kpiService_m = [
  {
    Name: "Service SKU Trends",
    container: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      WrapperMultiLineChart,
      {
        category: serviceCategories_m,
        series: serviceSeries_m
      },
      void 0,
      false,
      {
        fileName: "app/data/analysis/skuData.js",
        lineNumber: 47,
        columnNumber: 7
      },
      this
    )
  },
  {
    Name: "",
    container: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      WrapperMultiColumnChart,
      {
        category: service1Categories_m,
        series: service1Series_m
      },
      void 0,
      false,
      {
        fileName: "app/data/analysis/skuData.js",
        lineNumber: 57,
        columnNumber: 7
      },
      this
    )
  }
];
var kpiInv_m = [
  {
    Name: "Past and Project Inventory",
    container: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      WrapperMultiLineChart,
      {
        category: pastCategories_m,
        series: pastSeries_m
      },
      void 0,
      false,
      {
        fileName: "app/data/analysis/skuData.js",
        lineNumber: 69,
        columnNumber: 7
      },
      this
    )
  },
  {
    Name: "",
    container: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      WrapperMultiStackColChart,
      {
        category: past1Categories_m,
        series: past1Series_m
      },
      void 0,
      false,
      {
        fileName: "app/data/analysis/skuData.js",
        lineNumber: 79,
        columnNumber: 7
      },
      this
    )
  }
];

// app/routes/demo.dashboard.analysis.skuAnalysis.jsx
var import_react = __toESM(require_react());
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\demo.dashboard.analysis.skuAnalysis.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\demo.dashboard.analysis.skuAnalysis.jsx"
  );
  import.meta.hot.lastModified = "1703773690913.8113";
}
var navigation = [{
  name: "Service",
  href: "/demo/dashboard/analysis/serviceAnalysis",
  current: false
}, {
  name: "SKU",
  href: "/demo/dashboard/analysis/skuAnalysis",
  current: true
}, {
  name: "SKU Pro",
  href: "/demo/dashboard/analysis/skuproAnalysis",
  current: false
}, {
  name: "Under/shape",
  href: "/demo/dashboard/analysis/underAnalysis",
  current: false
}, {
  name: "Action:Redeploy",
  href: "/demo/dashboard/analysis/actionAnalysis",
  current: false
}];
var stats = [{
  name: "Understand/decrease demand",
  stat: "+66K"
}, {
  name: "Redeploy stock",
  stat: "-1.0%"
}, {
  name: "Increase Supply",
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
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: " bg-slate-600 ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "ml-4 flex h-16 items-center justify-start", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "hidden md:block", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "text-3xl font-bold text-white", children: "SKU Views" }, void 0, false, {
      fileName: "app/routes/demo.dashboard.analysis.skuAnalysis.jsx",
      lineNumber: 74,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/routes/demo.dashboard.analysis.skuAnalysis.jsx",
      lineNumber: 73,
      columnNumber: 15
    }, this) }, void 0, false, {
      fileName: "app/routes/demo.dashboard.analysis.skuAnalysis.jsx",
      lineNumber: 72,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/routes/demo.dashboard.analysis.skuAnalysis.jsx",
      lineNumber: 71,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/demo.dashboard.analysis.skuAnalysis.jsx",
      lineNumber: 70,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("button", { type: "button", className: "top-15 fixed right-0 mt-4 flex cursor-pointer items-center \n                rounded-l-lg border bg-white p-2 text-sm font-semibold text-gray-900 shadow-xl hover:bg-rose-600 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2", onClick: () => setslideOpen(!slideopen), children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(AdjustmentsHorizontalIcon_default, { className: "h-5 w-5 items-center", "aria-hidden": "true" }, void 0, false, {
      fileName: "app/routes/demo.dashboard.analysis.skuAnalysis.jsx",
      lineNumber: 81,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/demo.dashboard.analysis.skuAnalysis.jsx",
      lineNumber: 79,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("dl", { className: "mx-4 my-2 grid grid-cols-1 gap-6  lg:grid-cols-4", children: stats.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "items-center overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("dt", { className: "truncate text-center text-lg font-medium text-gray-500", children: item.name }, void 0, false, {
          fileName: "app/routes/demo.dashboard.analysis.skuAnalysis.jsx",
          lineNumber: 89,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("dd", { className: "mt-1 text-center text-4xl font-bold tracking-tight  text-gray-900  lg:text-5xl", children: item.stat }, void 0, false, {
          fileName: "app/routes/demo.dashboard.analysis.skuAnalysis.jsx",
          lineNumber: 92,
          columnNumber: 17
        }, this)
      ] }, item.name, true, {
        fileName: "app/routes/demo.dashboard.analysis.skuAnalysis.jsx",
        lineNumber: 88,
        columnNumber: 32
      }, this)) }, void 0, false, {
        fileName: "app/routes/demo.dashboard.analysis.skuAnalysis.jsx",
        lineNumber: 87,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "relative", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "absolute inset-0 flex items-center", "aria-hidden": "true", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "mx-4 w-full border-t border-gray-200" }, void 0, false, {
        fileName: "app/routes/demo.dashboard.analysis.skuAnalysis.jsx",
        lineNumber: 99,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/routes/demo.dashboard.analysis.skuAnalysis.jsx",
        lineNumber: 98,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/demo.dashboard.analysis.skuAnalysis.jsx",
        lineNumber: 97,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/demo.dashboard.analysis.skuAnalysis.jsx",
      lineNumber: 86,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("ul", { className: "mx-4 my-4 p-1 grid grid-cols-1 md:grid-cols-2 rounded-lg bg-white shadow-xl shadow-slate-900/10", children: kpiService_m.map((kpi) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { className: "col-span-1 flex flex-col divide-y divide-white", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "relative flex flex-1 flex-col py-2 pl-3", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex items-baseline gap-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h3", { className: "text-base m-2 font-medium text-gray-900", children: kpi.Name }, void 0, false, {
          fileName: "app/routes/demo.dashboard.analysis.skuAnalysis.jsx",
          lineNumber: 111,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h1", { className: "font-display  mb-3 text-4xl font-bold text-black", children: kpi.Value }, void 0, false, {
          fileName: "app/routes/demo.dashboard.analysis.skuAnalysis.jsx",
          lineNumber: 114,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/demo.dashboard.analysis.skuAnalysis.jsx",
        lineNumber: 110,
        columnNumber: 19
      }, this) }, void 0, false, {
        fileName: "app/routes/demo.dashboard.analysis.skuAnalysis.jsx",
        lineNumber: 109,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: kpi.container }, void 0, false, {
        fileName: "app/routes/demo.dashboard.analysis.skuAnalysis.jsx",
        lineNumber: 119,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/demo.dashboard.analysis.skuAnalysis.jsx",
      lineNumber: 108,
      columnNumber: 15
    }, this) }, kpi.Name, false, {
      fileName: "app/routes/demo.dashboard.analysis.skuAnalysis.jsx",
      lineNumber: 107,
      columnNumber: 36
    }, this)) }, void 0, false, {
      fileName: "app/routes/demo.dashboard.analysis.skuAnalysis.jsx",
      lineNumber: 106,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("ul", { className: "mx-4 my-4 p-1 grid grid-cols-1 md:grid-cols-2 rounded-lg bg-white shadow-xl shadow-slate-900/10", children: kpiInv_m.map((kpi) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { className: "col-span-1 flex flex-col divide-y divide-white", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "relative flex flex-1 flex-col py-2 pl-3", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex items-baseline gap-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h3", { className: "text-base m-2 font-medium text-gray-900", children: kpi.Name }, void 0, false, {
          fileName: "app/routes/demo.dashboard.analysis.skuAnalysis.jsx",
          lineNumber: 131,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h1", { className: "font-display  mb-3 text-4xl font-bold text-black", children: kpi.Value }, void 0, false, {
          fileName: "app/routes/demo.dashboard.analysis.skuAnalysis.jsx",
          lineNumber: 134,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/demo.dashboard.analysis.skuAnalysis.jsx",
        lineNumber: 130,
        columnNumber: 19
      }, this) }, void 0, false, {
        fileName: "app/routes/demo.dashboard.analysis.skuAnalysis.jsx",
        lineNumber: 129,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: kpi.container }, void 0, false, {
        fileName: "app/routes/demo.dashboard.analysis.skuAnalysis.jsx",
        lineNumber: 139,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/demo.dashboard.analysis.skuAnalysis.jsx",
      lineNumber: 128,
      columnNumber: 15
    }, this) }, kpi.Name, false, {
      fileName: "app/routes/demo.dashboard.analysis.skuAnalysis.jsx",
      lineNumber: 127,
      columnNumber: 32
    }, this)) }, void 0, false, {
      fileName: "app/routes/demo.dashboard.analysis.skuAnalysis.jsx",
      lineNumber: 126,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("footer", { className: "mt-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Ae, { as: "nav", className: "h-16 border-t bg-white", children: ({
      open
    }) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "w-full px-2 py-2 sm:px-2 lg:px-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex h-12 items-center justify-start", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h2", { className: "text-md mr-2 font-bold text-gray-500", children: "Demand Analysis" }, void 0, false, {
          fileName: "app/routes/demo.dashboard.analysis.skuAnalysis.jsx",
          lineNumber: 151,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ChevronDoubleRightIcon_default, { className: "-mr-1 ml-1 h-5 w-5 flex-shrink-0 items-center text-gray-400 group-hover:text-gray-500", "aria-hidden": "true" }, void 0, false, {
          fileName: "app/routes/demo.dashboard.analysis.skuAnalysis.jsx",
          lineNumber: 154,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "hidden md:block", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex items-baseline", children: navigation.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { href: item.href, className: classNames(item.current ? "bg-blue-500 text-white" : "text-black hover:bg-blue-500 hover:text-white", "text-md mx-2 rounded-md px-5 py-2 font-medium"), "aria-current": item.current ? "page" : void 0, children: item.name }, item.name, false, {
          fileName: "app/routes/demo.dashboard.analysis.skuAnalysis.jsx",
          lineNumber: 159,
          columnNumber: 51
        }, this)) }, void 0, false, {
          fileName: "app/routes/demo.dashboard.analysis.skuAnalysis.jsx",
          lineNumber: 158,
          columnNumber: 25
        }, this) }, void 0, false, {
          fileName: "app/routes/demo.dashboard.analysis.skuAnalysis.jsx",
          lineNumber: 156,
          columnNumber: 23
        }, this) }, void 0, false, {
          fileName: "app/routes/demo.dashboard.analysis.skuAnalysis.jsx",
          lineNumber: 155,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "-mr-2 flex md:hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Ae.Button, { className: "inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "sr-only", children: "Open main menu" }, void 0, false, {
            fileName: "app/routes/demo.dashboard.analysis.skuAnalysis.jsx",
            lineNumber: 169,
            columnNumber: 25
          }, this),
          open ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(XMarkIcon_default, { className: "block h-6 w-6", "aria-hidden": "true" }, void 0, false, {
            fileName: "app/routes/demo.dashboard.analysis.skuAnalysis.jsx",
            lineNumber: 170,
            columnNumber: 33
          }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Bars3Icon_default, { className: "block h-6 w-6", "aria-hidden": "true" }, void 0, false, {
            fileName: "app/routes/demo.dashboard.analysis.skuAnalysis.jsx",
            lineNumber: 170,
            columnNumber: 94
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/demo.dashboard.analysis.skuAnalysis.jsx",
          lineNumber: 168,
          columnNumber: 23
        }, this) }, void 0, false, {
          fileName: "app/routes/demo.dashboard.analysis.skuAnalysis.jsx",
          lineNumber: 166,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/demo.dashboard.analysis.skuAnalysis.jsx",
        lineNumber: 150,
        columnNumber: 19
      }, this) }, void 0, false, {
        fileName: "app/routes/demo.dashboard.analysis.skuAnalysis.jsx",
        lineNumber: 149,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Ae.Panel, { className: "md:hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "space-y-1 px-2 pb-3 pt-2 sm:px-3", children: navigation.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Ae.Button, { as: "a", href: item.href, className: classNames(item.current ? "bg-gray-900 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white", "block rounded-md px-3 py-2 text-base font-medium"), "aria-current": item.current ? "page" : void 0, children: item.name }, item.name, false, {
        fileName: "app/routes/demo.dashboard.analysis.skuAnalysis.jsx",
        lineNumber: 178,
        columnNumber: 45
      }, this)) }, void 0, false, {
        fileName: "app/routes/demo.dashboard.analysis.skuAnalysis.jsx",
        lineNumber: 177,
        columnNumber: 19
      }, this) }, void 0, false, {
        fileName: "app/routes/demo.dashboard.analysis.skuAnalysis.jsx",
        lineNumber: 176,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/demo.dashboard.analysis.skuAnalysis.jsx",
      lineNumber: 148,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/routes/demo.dashboard.analysis.skuAnalysis.jsx",
      lineNumber: 145,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/demo.dashboard.analysis.skuAnalysis.jsx",
      lineNumber: 144,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/demo.dashboard.analysis.skuAnalysis.jsx",
    lineNumber: 69,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/demo.dashboard.analysis.skuAnalysis.jsx",
    lineNumber: 68,
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
//# sourceMappingURL=/build/routes/demo.dashboard.analysis.skuAnalysis-TIXBIP5L.js.map
