import {
  WrapperScatterBubbleChart
} from "/build/_shared/chunk-4I7EBSN3.js";
import {
  WrapperMultiBarChart
} from "/build/_shared/chunk-T5HJ6KPY.js";
import {
  WrapperMultiColumnChart
} from "/build/_shared/chunk-P6FI4LUL.js";
import {
  qe
} from "/build/_shared/chunk-NOVQD6F2.js";
import {
  Ct
} from "/build/_shared/chunk-2TL6DDWT.js";
import "/build/_shared/chunk-6EK66RT6.js";
import {
  _t
} from "/build/_shared/chunk-GY2ISSS6.js";
import "/build/_shared/chunk-GFA5MC6N.js";
import {
  qe as qe2
} from "/build/_shared/chunk-I5FVCQST.js";
import "/build/_shared/chunk-J5ZDEXRM.js";
import "/build/_shared/chunk-FNVTLCHO.js";
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
import "/build/_shared/chunk-OP7Q5FNF.js";
import "/build/_shared/chunk-EZ7JG6XF.js";
import {
  ChevronDoubleRightIcon_default,
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

// app/kendo/rawData/analysis/demandAnalysisData.js
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\kendo\\rawData\\analysis\\demandAnalysisData.js"
  );
  import.meta.hot.lastModified = "1708503722826.148";
}
var bookingCategories_m = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
var bookingSeries_m = [
  {
    name: "Booking",
    data: [370, 270, 300, 250, 370, 270]
  },
  {
    name: "Revenue",
    data: [270, 170, 200, 150, 200, 100]
  },
  {
    name: "Invoiced",
    data: [250, 160, 200, 140, 190, 100]
  }
];
var bookingRevenueData = [
  {
    x: -2500,
    y: 5e4,
    size: 5100,
    category: "SKU12"
  },
  {
    x: 500,
    y: 11e4,
    size: 180,
    category: "SKU25"
  },
  {
    x: 7e3,
    y: 19e3,
    size: 300,
    category: "SKU18"
  },
  {
    x: 1400,
    y: 15e4,
    size: 250,
    category: "SKU14"
  },
  {
    x: 2400,
    y: 3e4,
    size: 200,
    category: "SKU29"
  },
  {
    x: 2450,
    y: 34e3,
    size: 450,
    category: "SKU11"
  },
  {
    x: 2700,
    y: 34e3,
    size: 500,
    category: "SKU66"
  }
];
var topCustCategories_m = ["Amerco", "Csco", "Ariba", "Intel", "Posco", "Marco", "Ceat", "Sumerco"];
var topCustSeries_m = [
  {
    name: "Bookings",
    data: [100, 123, 234, 343, 123, 234, 123, 132]
  },
  {
    name: "Revenue",
    data: [120, 67, 231, 196, 67, 231, 156, 80]
  }
];
var onTimeCategories_m = ["ARG", "ARB", "BEM", "BRZ", "COL", "FRN", "GER", "HLS", "IND", "ITA", "MEX", "SFO", "SIG", "SPA", "SRC"];
var onTimeSeries_m = [
  {
    name: "On Time Shipment",
    data: [70, 55, 30, 25, 10, 40, 30, 27, 37, 50, 37, 80, 37, 10, 10]
  }
];

// app/data/analysis/demandData.js
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\data\\analysis\\demandData.js"
  );
  import.meta.hot.lastModified = "1708503722765.002";
}
var kpiService_m = [
  {
    Name: "Bookings,Invoiced and Revenue Trends",
    container: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WrapperMultiColumnChart, { category: bookingCategories_m, series: bookingSeries_m }, void 0, false, {
      fileName: "app/data/analysis/demandData.js",
      lineNumber: 33,
      columnNumber: 16
    }, this)
  },
  {
    Name: "Bookings and Revenue by Products",
    container: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WrapperScatterBubbleChart, { data: bookingRevenueData }, void 0, false, {
      fileName: "app/data/analysis/demandData.js",
      lineNumber: 37,
      columnNumber: 16
    }, this)
  },
  {
    Name: "Top Customers - Bookings and Revenue",
    container: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WrapperMultiBarChart, { category: topCustCategories_m, series: topCustSeries_m }, void 0, false, {
      fileName: "app/data/analysis/demandData.js",
      lineNumber: 42,
      columnNumber: 15
    }, this)
  },
  {
    Name: "On Time Shipment Performance by Location",
    container: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WrapperMultiColumnChart, { category: onTimeCategories_m, series: onTimeSeries_m }, void 0, false, {
      fileName: "app/data/analysis/demandData.js",
      lineNumber: 47,
      columnNumber: 16
    }, this)
  }
];

// app/routes/snop.dashboard.analysis.demandAnalysis.jsx
var import_react = __toESM(require_react());
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\snop.dashboard.analysis.demandAnalysis.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\snop.dashboard.analysis.demandAnalysis.jsx"
  );
  import.meta.hot.lastModified = "1711090750632.2722";
}
var navigation = [{
  name: "Order to Cash",
  href: "/snop/dashboard/analysis/demandAnalysis",
  current: true
}, {
  name: "Order Analysis",
  href: "/snop/dashboard/analysis/orderAnalysis",
  current: false
}];
var sortOptions = [{
  name: "Most Popular",
  href: "#",
  current: true
}, {
  name: "Best Rating",
  href: "#",
  current: false
}, {
  name: "Newest",
  href: "#",
  current: false
}];
var filters = [{
  id: "year",
  name: "Year",
  options: [{
    value: "new-arrivals",
    label: "All New Arrivals",
    checked: false
  }, {
    value: "tees",
    label: "Tees",
    checked: false
  }, {
    value: "all",
    label: "All",
    checked: true
  }]
}, {
  id: "quarter",
  name: "Quarter",
  options: [{
    value: "all",
    label: "All",
    checked: false
  }, {
    value: "beige",
    label: "Beige",
    checked: false
  }, {
    value: "blue",
    label: "Blue",
    checked: false
  }]
}, {
  id: "region",
  name: "Region",
  options: [{
    value: "s",
    label: "S",
    checked: false
  }, {
    value: "m",
    label: "M",
    checked: false
  }, {
    value: "l",
    label: "L",
    checked: false
  }]
}, {
  id: "country",
  name: "Country",
  options: [{
    value: "all",
    label: "All",
    checked: false
  }, {
    value: "beige",
    label: "Beige",
    checked: false
  }, {
    value: "blue",
    label: "Blue",
    checked: false
  }]
}];
var stats = [{
  name: "Bookings",
  stat: "$1.88B"
}, {
  name: "Invoiced",
  stat: "$1.1B"
}, {
  name: "Revenue",
  stat: "$1.2B"
}, {
  name: "On Time Shipment %",
  stat: "66.8%"
}];
var activeFilters = [{
  value: "objects",
  label: "Objects"
}];
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
function DemandAnalysisRoute() {
  _s();
  const [open, setOpen] = (0, import_react.useState)(false);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "w-full bg-slate-600", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "ml-4 flex h-16 items-center justify-start", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "hidden md:block", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "text-3xl font-bold text-white", children: "Order to Cash" }, void 0, false, {
      fileName: "app/routes/snop.dashboard.analysis.demandAnalysis.jsx",
      lineNumber: 142,
      columnNumber: 15
    }, this) }, void 0, false, {
      fileName: "app/routes/snop.dashboard.analysis.demandAnalysis.jsx",
      lineNumber: 141,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/routes/snop.dashboard.analysis.demandAnalysis.jsx",
      lineNumber: 140,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/snop.dashboard.analysis.demandAnalysis.jsx",
      lineNumber: 139,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/snop.dashboard.analysis.demandAnalysis.jsx",
      lineNumber: 138,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-col", style: {
      minHeight: `calc(100vh - 4rem)`
    }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "bg-white", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(qe2.Root, { show: open, as: import_react.Fragment, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(_t, { as: "div", className: "relative z-40 sm:hidden", onClose: setOpen, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(qe2.Child, { as: import_react.Fragment, enter: "transition-opacity ease-linear duration-300", enterFrom: "opacity-0", enterTo: "opacity-100", leave: "transition-opacity ease-linear duration-300", leaveFrom: "opacity-100", leaveTo: "opacity-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "fixed inset-0 bg-black bg-opacity-25" }, void 0, false, {
            fileName: "app/routes/snop.dashboard.analysis.demandAnalysis.jsx",
            lineNumber: 161,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/snop.dashboard.analysis.demandAnalysis.jsx",
            lineNumber: 160,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "fixed inset-0 z-40 flex", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(qe2.Child, { as: import_react.Fragment, enter: "transition ease-in-out duration-300 transform", enterFrom: "translate-x-full", enterTo: "translate-x-0", leave: "transition ease-in-out duration-300 transform", leaveFrom: "translate-x-0", leaveTo: "translate-x-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(_t.Panel, { className: "relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex items-center justify-between px-4", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h2", { className: "text-lg font-medium text-gray-900", children: "Filters" }, void 0, false, {
                fileName: "app/routes/snop.dashboard.analysis.demandAnalysis.jsx",
                lineNumber: 168,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("button", { type: "button", className: "-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400", onClick: () => setOpen(false), children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "sr-only", children: "Close menu" }, void 0, false, {
                  fileName: "app/routes/snop.dashboard.analysis.demandAnalysis.jsx",
                  lineNumber: 172,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(XMarkIcon_default, { className: "h-6 w-6", "aria-hidden": "true" }, void 0, false, {
                  fileName: "app/routes/snop.dashboard.analysis.demandAnalysis.jsx",
                  lineNumber: 173,
                  columnNumber: 25
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/snop.dashboard.analysis.demandAnalysis.jsx",
                lineNumber: 171,
                columnNumber: 23
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/snop.dashboard.analysis.demandAnalysis.jsx",
              lineNumber: 167,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("form", { className: "mt-4", children: filters.map((section) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Ae, { as: "div", className: "border-t border-gray-200 px-4 py-6", children: ({
              open: open2
            }) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h3", { className: "-mx-2 -my-3 flow-root", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Ae.Button, { className: "flex w-full items-center justify-between bg-white px-2 py-3 text-sm text-gray-400", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "font-medium text-gray-900", children: section.name }, void 0, false, {
                  fileName: "app/routes/snop.dashboard.analysis.demandAnalysis.jsx",
                  lineNumber: 185,
                  columnNumber: 35
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "ml-6 flex items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ChevronDownIcon_default, { className: classNames(open2 ? "-rotate-180" : "rotate-0", "h-5 w-5 transform"), "aria-hidden": "true" }, void 0, false, {
                  fileName: "app/routes/snop.dashboard.analysis.demandAnalysis.jsx",
                  lineNumber: 189,
                  columnNumber: 37
                }, this) }, void 0, false, {
                  fileName: "app/routes/snop.dashboard.analysis.demandAnalysis.jsx",
                  lineNumber: 188,
                  columnNumber: 35
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/snop.dashboard.analysis.demandAnalysis.jsx",
                lineNumber: 184,
                columnNumber: 33
              }, this) }, void 0, false, {
                fileName: "app/routes/snop.dashboard.analysis.demandAnalysis.jsx",
                lineNumber: 183,
                columnNumber: 31
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Ae.Panel, { className: "pt-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "space-y-6", children: section.options.map((option, optionIdx) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex items-center", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("input", { id: `filter-mobile-${section.id}-${optionIdx}`, name: `${section.id}[]`, defaultValue: option.value, type: "checkbox", defaultChecked: option.checked, className: "h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" }, void 0, false, {
                  fileName: "app/routes/snop.dashboard.analysis.demandAnalysis.jsx",
                  lineNumber: 196,
                  columnNumber: 39
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("label", { htmlFor: `filter-mobile-${section.id}-${optionIdx}`, className: "ml-3 text-sm text-gray-500", children: option.label }, void 0, false, {
                  fileName: "app/routes/snop.dashboard.analysis.demandAnalysis.jsx",
                  lineNumber: 197,
                  columnNumber: 39
                }, this)
              ] }, option.value, true, {
                fileName: "app/routes/snop.dashboard.analysis.demandAnalysis.jsx",
                lineNumber: 195,
                columnNumber: 79
              }, this)) }, void 0, false, {
                fileName: "app/routes/snop.dashboard.analysis.demandAnalysis.jsx",
                lineNumber: 194,
                columnNumber: 33
              }, this) }, void 0, false, {
                fileName: "app/routes/snop.dashboard.analysis.demandAnalysis.jsx",
                lineNumber: 193,
                columnNumber: 31
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/snop.dashboard.analysis.demandAnalysis.jsx",
              lineNumber: 182,
              columnNumber: 29
            }, this) }, section.name, false, {
              fileName: "app/routes/snop.dashboard.analysis.demandAnalysis.jsx",
              lineNumber: 179,
              columnNumber: 47
            }, this)) }, void 0, false, {
              fileName: "app/routes/snop.dashboard.analysis.demandAnalysis.jsx",
              lineNumber: 178,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/snop.dashboard.analysis.demandAnalysis.jsx",
            lineNumber: 166,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "app/routes/snop.dashboard.analysis.demandAnalysis.jsx",
            lineNumber: 165,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/snop.dashboard.analysis.demandAnalysis.jsx",
            lineNumber: 164,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/snop.dashboard.analysis.demandAnalysis.jsx",
          lineNumber: 159,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/routes/snop.dashboard.analysis.demandAnalysis.jsx",
          lineNumber: 158,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("section", { "aria-labelledby": "filter-heading", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h2", { id: "filter-heading", className: "sr-only", children: "Filters" }, void 0, false, {
            fileName: "app/routes/snop.dashboard.analysis.demandAnalysis.jsx",
            lineNumber: 215,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "border-b border-gray-200 bg-white py-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "mr-64 flex items-center  px-4 sm:px-4 lg:px-4", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(qe, { as: "div", className: "relative inline-block text-left", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(qe2, { as: import_react.Fragment, enter: "transition ease-out duration-100", enterFrom: "transform opacity-0 scale-95", enterTo: "transform opacity-100 scale-100", leave: "transition ease-in duration-75", leaveFrom: "transform opacity-100 scale-100", leaveTo: "transform opacity-0 scale-95", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(qe.Items, { className: "absolute left-0 z-10 mt-2 w-40 origin-top-left rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "py-1", children: sortOptions.map((option) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(qe.Item, { children: ({
              active
            }) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { href: option.href, className: classNames(option.current ? "font-medium text-gray-900" : "text-gray-500", active ? "bg-gray-100" : "", "block px-4 py-2 text-sm"), children: option.name }, void 0, false, {
              fileName: "app/routes/snop.dashboard.analysis.demandAnalysis.jsx",
              lineNumber: 228,
              columnNumber: 31
            }, this) }, option.name, false, {
              fileName: "app/routes/snop.dashboard.analysis.demandAnalysis.jsx",
              lineNumber: 225,
              columnNumber: 52
            }, this)) }, void 0, false, {
              fileName: "app/routes/snop.dashboard.analysis.demandAnalysis.jsx",
              lineNumber: 224,
              columnNumber: 23
            }, this) }, void 0, false, {
              fileName: "app/routes/snop.dashboard.analysis.demandAnalysis.jsx",
              lineNumber: 223,
              columnNumber: 21
            }, this) }, void 0, false, {
              fileName: "app/routes/snop.dashboard.analysis.demandAnalysis.jsx",
              lineNumber: 222,
              columnNumber: 19
            }, this) }, void 0, false, {
              fileName: "app/routes/snop.dashboard.analysis.demandAnalysis.jsx",
              lineNumber: 221,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("button", { type: "button", className: "inline-block text-sm font-medium text-gray-700 hover:text-gray-900 sm:hidden", onClick: () => setOpen(true), children: "Filters" }, void 0, false, {
              fileName: "app/routes/snop.dashboard.analysis.demandAnalysis.jsx",
              lineNumber: 237,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "hidden sm:block", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flow-root", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Ct.Group, { className: "-mx-4 flex items-center divide-x divide-gray-200", children: filters.map((section, sectionIdx) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Ct, { className: "relative inline-block px-4 text-left", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Ct.Button, { className: "group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { children: section.name }, void 0, false, {
                  fileName: "app/routes/snop.dashboard.analysis.demandAnalysis.jsx",
                  lineNumber: 246,
                  columnNumber: 29
                }, this),
                sectionIdx === 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "ml-1.5 rounded bg-gray-200 px-1.5 py-0.5 text-xs font-semibold tabular-nums text-gray-700", children: "1" }, void 0, false, {
                  fileName: "app/routes/snop.dashboard.analysis.demandAnalysis.jsx",
                  lineNumber: 247,
                  columnNumber: 49
                }, this) : null,
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ChevronDownIcon_default, { className: "-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500", "aria-hidden": "true" }, void 0, false, {
                  fileName: "app/routes/snop.dashboard.analysis.demandAnalysis.jsx",
                  lineNumber: 250,
                  columnNumber: 29
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/snop.dashboard.analysis.demandAnalysis.jsx",
                lineNumber: 245,
                columnNumber: 27
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(qe2, { as: import_react.Fragment, enter: "transition ease-out duration-100", enterFrom: "transform opacity-0 scale-95", enterTo: "transform opacity-100 scale-100", leave: "transition ease-in duration-75", leaveFrom: "transform opacity-100 scale-100", leaveTo: "transform opacity-0 scale-95", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Ct.Panel, { className: "absolute right-0 z-10 mt-2 origin-top-right rounded-md bg-white p-4 shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("form", { className: "space-y-4", children: section.options.map((option, optionIdx) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex items-center", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("input", { id: `filter-${section.id}-${optionIdx}`, name: `${section.id}[]`, defaultValue: option.value, type: "checkbox", defaultChecked: option.checked, className: "h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" }, void 0, false, {
                  fileName: "app/routes/snop.dashboard.analysis.demandAnalysis.jsx",
                  lineNumber: 257,
                  columnNumber: 37
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("label", { htmlFor: `filter-${section.id}-${optionIdx}`, className: "ml-3 whitespace-nowrap pr-6 text-sm font-medium text-gray-900", children: option.label }, void 0, false, {
                  fileName: "app/routes/snop.dashboard.analysis.demandAnalysis.jsx",
                  lineNumber: 258,
                  columnNumber: 37
                }, this)
              ] }, option.value, true, {
                fileName: "app/routes/snop.dashboard.analysis.demandAnalysis.jsx",
                lineNumber: 256,
                columnNumber: 77
              }, this)) }, void 0, false, {
                fileName: "app/routes/snop.dashboard.analysis.demandAnalysis.jsx",
                lineNumber: 255,
                columnNumber: 31
              }, this) }, void 0, false, {
                fileName: "app/routes/snop.dashboard.analysis.demandAnalysis.jsx",
                lineNumber: 254,
                columnNumber: 29
              }, this) }, void 0, false, {
                fileName: "app/routes/snop.dashboard.analysis.demandAnalysis.jsx",
                lineNumber: 253,
                columnNumber: 27
              }, this)
            ] }, section.name, true, {
              fileName: "app/routes/snop.dashboard.analysis.demandAnalysis.jsx",
              lineNumber: 244,
              columnNumber: 61
            }, this)) }, void 0, false, {
              fileName: "app/routes/snop.dashboard.analysis.demandAnalysis.jsx",
              lineNumber: 243,
              columnNumber: 21
            }, this) }, void 0, false, {
              fileName: "app/routes/snop.dashboard.analysis.demandAnalysis.jsx",
              lineNumber: 242,
              columnNumber: 19
            }, this) }, void 0, false, {
              fileName: "app/routes/snop.dashboard.analysis.demandAnalysis.jsx",
              lineNumber: 241,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "ml-16  flex px-4 sm:flex sm:items-center sm:px-4 lg:px-4", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h3", { className: "text-sm font-medium text-gray-500", children: [
                "Filters",
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "sr-only", children: ", active" }, void 0, false, {
                  fileName: "app/routes/snop.dashboard.analysis.demandAnalysis.jsx",
                  lineNumber: 275,
                  columnNumber: 21
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/snop.dashboard.analysis.demandAnalysis.jsx",
                lineNumber: 273,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { "aria-hidden": "true", className: "hidden h-5 w-px bg-gray-300 sm:ml-4 sm:block" }, void 0, false, {
                fileName: "app/routes/snop.dashboard.analysis.demandAnalysis.jsx",
                lineNumber: 278,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "mt-2 sm:ml-4 sm:mt-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "-m-1 flex flex-wrap items-center", children: activeFilters.map((activeFilter) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "m-1 inline-flex items-center rounded-full border border-gray-200 bg-white py-1.5 pl-3 pr-2 text-sm font-medium text-gray-900", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { children: activeFilter.label }, void 0, false, {
                  fileName: "app/routes/snop.dashboard.analysis.demandAnalysis.jsx",
                  lineNumber: 283,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("button", { type: "button", className: "ml-1 inline-flex h-4 w-4 flex-shrink-0 rounded-full p-1 text-gray-400 hover:bg-gray-200 hover:text-gray-500", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "sr-only", children: [
                    "Remove filter for ",
                    activeFilter.label
                  ] }, void 0, true, {
                    fileName: "app/routes/snop.dashboard.analysis.demandAnalysis.jsx",
                    lineNumber: 285,
                    columnNumber: 29
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("svg", { className: "h-2 w-2", stroke: "currentColor", fill: "none", viewBox: "0 0 8 8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("path", { strokeLinecap: "round", strokeWidth: "1.5", d: "M1 1l6 6m0-6L1 7" }, void 0, false, {
                    fileName: "app/routes/snop.dashboard.analysis.demandAnalysis.jsx",
                    lineNumber: 289,
                    columnNumber: 31
                  }, this) }, void 0, false, {
                    fileName: "app/routes/snop.dashboard.analysis.demandAnalysis.jsx",
                    lineNumber: 288,
                    columnNumber: 29
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/snop.dashboard.analysis.demandAnalysis.jsx",
                  lineNumber: 284,
                  columnNumber: 27
                }, this)
              ] }, activeFilter.value, true, {
                fileName: "app/routes/snop.dashboard.analysis.demandAnalysis.jsx",
                lineNumber: 282,
                columnNumber: 58
              }, this)) }, void 0, false, {
                fileName: "app/routes/snop.dashboard.analysis.demandAnalysis.jsx",
                lineNumber: 281,
                columnNumber: 21
              }, this) }, void 0, false, {
                fileName: "app/routes/snop.dashboard.analysis.demandAnalysis.jsx",
                lineNumber: 280,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/snop.dashboard.analysis.demandAnalysis.jsx",
              lineNumber: 272,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/snop.dashboard.analysis.demandAnalysis.jsx",
            lineNumber: 220,
            columnNumber: 15
          }, this) }, void 0, false, {
            fileName: "app/routes/snop.dashboard.analysis.demandAnalysis.jsx",
            lineNumber: 219,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/snop.dashboard.analysis.demandAnalysis.jsx",
          lineNumber: 214,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/snop.dashboard.analysis.demandAnalysis.jsx",
        lineNumber: 156,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("dl", { className: "mx-4 mb-2 mt-4 grid grid-cols-1 gap-6  lg:grid-cols-4", children: stats.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "items-center overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("dt", { className: "truncate text-center text-lg font-medium text-gray-500", children: item.name }, void 0, false, {
            fileName: "app/routes/snop.dashboard.analysis.demandAnalysis.jsx",
            lineNumber: 306,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("dd", { className: "mt-1 text-center text-4xl font-bold tracking-tight  text-gray-900  lg:text-5xl", children: item.stat }, void 0, false, {
            fileName: "app/routes/snop.dashboard.analysis.demandAnalysis.jsx",
            lineNumber: 309,
            columnNumber: 17
          }, this)
        ] }, item.name, true, {
          fileName: "app/routes/snop.dashboard.analysis.demandAnalysis.jsx",
          lineNumber: 305,
          columnNumber: 32
        }, this)) }, void 0, false, {
          fileName: "app/routes/snop.dashboard.analysis.demandAnalysis.jsx",
          lineNumber: 304,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "relative", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "absolute inset-0 flex items-center", "aria-hidden": "true", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "mx-4 w-full border-t border-gray-200" }, void 0, false, {
          fileName: "app/routes/snop.dashboard.analysis.demandAnalysis.jsx",
          lineNumber: 316,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/snop.dashboard.analysis.demandAnalysis.jsx",
          lineNumber: 315,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/routes/snop.dashboard.analysis.demandAnalysis.jsx",
          lineNumber: 314,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/snop.dashboard.analysis.demandAnalysis.jsx",
        lineNumber: 303,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("ul", { className: "mx-4 my-4 grid grid-cols-1 grid-rows-2 gap-6 md:grid-cols-2", children: kpiService_m.map((kpi) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { className: "col-span-1 flex flex-col divide-y divide-white rounded-lg bg-white shadow-xl shadow-slate-900/10", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "relative flex flex-1 flex-col py-2 pl-3", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex items-baseline gap-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h3", { className: "text-md mt-6 font-medium text-gray-900", children: kpi.Name }, void 0, false, {
              fileName: "app/routes/snop.dashboard.analysis.demandAnalysis.jsx",
              lineNumber: 330,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h1", { className: "font-display text-d-h3 mb-3 text-4xl font-bold text-black", children: kpi.Value }, void 0, false, {
              fileName: "app/routes/snop.dashboard.analysis.demandAnalysis.jsx",
              lineNumber: 333,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/snop.dashboard.analysis.demandAnalysis.jsx",
            lineNumber: 329,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "app/routes/snop.dashboard.analysis.demandAnalysis.jsx",
            lineNumber: 328,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: kpi.container }, void 0, false, {
            fileName: "app/routes/snop.dashboard.analysis.demandAnalysis.jsx",
            lineNumber: 338,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/snop.dashboard.analysis.demandAnalysis.jsx",
          lineNumber: 327,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", {}, void 0, false, {
          fileName: "app/routes/snop.dashboard.analysis.demandAnalysis.jsx",
          lineNumber: 340,
          columnNumber: 15
        }, this)
      ] }, kpi.Name, true, {
        fileName: "app/routes/snop.dashboard.analysis.demandAnalysis.jsx",
        lineNumber: 326,
        columnNumber: 36
      }, this)) }, void 0, false, {
        fileName: "app/routes/snop.dashboard.analysis.demandAnalysis.jsx",
        lineNumber: 323,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("footer", { className: "mt-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Ae, { as: "nav", className: "bg-white h-16 border-t", children: ({
        open: open2
      }) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "w-full px-2 py-2 sm:px-2 lg:px-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex h-12 items-center justify-", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h2", { className: "text-md font-bold text-gray-500 mr-2", children: "Demand Analysis" }, void 0, false, {
            fileName: "app/routes/snop.dashboard.analysis.demandAnalysis.jsx",
            lineNumber: 350,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ChevronDoubleRightIcon_default, { className: "-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500 items-center", "aria-hidden": "true" }, void 0, false, {
            fileName: "app/routes/snop.dashboard.analysis.demandAnalysis.jsx",
            lineNumber: 353,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "hidden md:block", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex items-baseline", children: navigation.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { href: item.href, className: classNames(item.current ? "bg-blue-500 text-white" : "text-black hover:bg-blue-500 hover:text-white", "text-md rounded-md px-5 py-2 mx-2 font-medium"), "aria-current": item.current ? "page" : void 0, children: item.name }, item.name, false, {
            fileName: "app/routes/snop.dashboard.analysis.demandAnalysis.jsx",
            lineNumber: 358,
            columnNumber: 51
          }, this)) }, void 0, false, {
            fileName: "app/routes/snop.dashboard.analysis.demandAnalysis.jsx",
            lineNumber: 357,
            columnNumber: 25
          }, this) }, void 0, false, {
            fileName: "app/routes/snop.dashboard.analysis.demandAnalysis.jsx",
            lineNumber: 355,
            columnNumber: 23
          }, this) }, void 0, false, {
            fileName: "app/routes/snop.dashboard.analysis.demandAnalysis.jsx",
            lineNumber: 354,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "-mr-2 flex md:hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Ae.Button, { className: "inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "sr-only", children: "Open main menu" }, void 0, false, {
              fileName: "app/routes/snop.dashboard.analysis.demandAnalysis.jsx",
              lineNumber: 368,
              columnNumber: 25
            }, this),
            open2 ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(XMarkIcon_default, { className: "block h-6 w-6", "aria-hidden": "true" }, void 0, false, {
              fileName: "app/routes/snop.dashboard.analysis.demandAnalysis.jsx",
              lineNumber: 369,
              columnNumber: 33
            }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Bars3Icon_default, { className: "block h-6 w-6", "aria-hidden": "true" }, void 0, false, {
              fileName: "app/routes/snop.dashboard.analysis.demandAnalysis.jsx",
              lineNumber: 369,
              columnNumber: 94
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/snop.dashboard.analysis.demandAnalysis.jsx",
            lineNumber: 367,
            columnNumber: 23
          }, this) }, void 0, false, {
            fileName: "app/routes/snop.dashboard.analysis.demandAnalysis.jsx",
            lineNumber: 365,
            columnNumber: 21
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/snop.dashboard.analysis.demandAnalysis.jsx",
          lineNumber: 349,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "app/routes/snop.dashboard.analysis.demandAnalysis.jsx",
          lineNumber: 348,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Ae.Panel, { className: "md:hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "space-y-1 px-2 pb-3 pt-2 sm:px-3", children: navigation.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Ae.Button, { as: "a", href: item.href, className: classNames(item.current ? "bg-gray-900 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white", "block rounded-md px-3 py-2 text-base font-medium"), "aria-current": item.current ? "page" : void 0, children: item.name }, item.name, false, {
          fileName: "app/routes/snop.dashboard.analysis.demandAnalysis.jsx",
          lineNumber: 377,
          columnNumber: 45
        }, this)) }, void 0, false, {
          fileName: "app/routes/snop.dashboard.analysis.demandAnalysis.jsx",
          lineNumber: 376,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "app/routes/snop.dashboard.analysis.demandAnalysis.jsx",
          lineNumber: 375,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/snop.dashboard.analysis.demandAnalysis.jsx",
        lineNumber: 347,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "app/routes/snop.dashboard.analysis.demandAnalysis.jsx",
        lineNumber: 344,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/snop.dashboard.analysis.demandAnalysis.jsx",
        lineNumber: 343,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/snop.dashboard.analysis.demandAnalysis.jsx",
      lineNumber: 152,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/snop.dashboard.analysis.demandAnalysis.jsx",
    lineNumber: 137,
    columnNumber: 10
  }, this);
}
_s(DemandAnalysisRoute, "xG1TONbKtDWtdOTrXaTAsNhPg/Q=");
_c = DemandAnalysisRoute;
var _c;
$RefreshReg$(_c, "DemandAnalysisRoute");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  DemandAnalysisRoute as default
};
//# sourceMappingURL=/build/routes/snop.dashboard.analysis.demandAnalysis-XZP44MYX.js.map
