import {
  WrapperMultiStackColChart
} from "/build/_shared/chunk-QRAMQPBO.js";
import "/build/_shared/chunk-T5HJ6KPY.js";
import "/build/_shared/chunk-2VSZFGL3.js";
import {
  WrapperWaterfallChart
} from "/build/_shared/chunk-K47VYUL6.js";
import {
  WrapperMultiAreaChart
} from "/build/_shared/chunk-JEBE5WMW.js";
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

// app/kendo/rawData/analysis/scmOverviewData.js
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\kendo\\rawData\\analysis\\scmOverviewData.js"
  );
  import.meta.hot.lastModified = "1708503722834.1494";
}
var orderTrendCategories_m = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
var orderTrendSeries_m = [
  {
    name: "Booking",
    data: [100, 98, 100, 110, 120, 130]
  },
  {
    name: "Invoice",
    data: [210, 190, 200, 200, 250, 250]
  },
  {
    name: "Sales",
    data: [580, 480, 510, 480, 600, 500]
  }
];
var topCustomers = [
  {
    category: "Amerco",
    field: 435.61
  },
  {
    category: "Csco",
    field: 237.46
  },
  {
    category: "Ariba",
    field: 188.33
  },
  {
    category: "Intel",
    field: 120
  },
  {
    category: "Posco",
    field: 120
  },
  {
    category: "Marco",
    field: 94.8
  },
  {
    category: "Ceat",
    field: 60.1
  },
  {
    category: "Sumerco",
    field: 60.1
  },
  {
    category: "Anz",
    field: 59.25
  },
  {
    category: "Total",
    summary: "total"
  }
];
var discountproductCategories_m = ["Consumer Goods", "Industrials", "Services"];
var discountproductSeries_m = [
  {
    name: "Channel",
    data: [3.5, 3.5, 3.5]
  },
  {
    name: "Partner",
    data: [5, 4, 4]
  },
  {
    name: "Online",
    data: [16, 15, 16]
  },
  {
    name: "Direct",
    data: [80, 20, 13]
  }
];
var cancellationCategories_m = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"];
var cancellationSeries_m = [
  {
    name: "Material",
    data: [3.5, 3.5, 3.5, 6, 3.5, 3, 3, 5]
  },
  {
    name: "Labor",
    data: [5, 4, 4, 7, 5, 5, 5, 7]
  },
  {
    name: "Overhead",
    data: [16, 15, 16, 18, 19, 18, 16, 19]
  }
];

// app/data/analysis/scmOverviewData.js
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\data\\analysis\\scmOverviewData.js"
  );
  import.meta.hot.lastModified = "1708503722772.0032";
}
var kpiService_m = [
  {
    Name: "Orders Trend",
    container: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WrapperMultiAreaChart, { category: orderTrendCategories_m, series: orderTrendSeries_m }, void 0, false, {
      fileName: "app/data/analysis/scmOverviewData.js",
      lineNumber: 38,
      columnNumber: 14
    }, this)
  },
  {
    Name: "Top Customers",
    container: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WrapperWaterfallChart, { data: topCustomers }, void 0, false, {
      fileName: "app/data/analysis/scmOverviewData.js",
      lineNumber: 42,
      columnNumber: 14
    }, this)
  },
  {
    Name: "Discounts by Product Category & Channel",
    container: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WrapperMultiStackColChart, { category: discountproductCategories_m, series: discountproductSeries_m }, void 0, false, {
      fileName: "app/data/analysis/scmOverviewData.js",
      lineNumber: 46,
      columnNumber: 14
    }, this)
  },
  {
    Name: "Cancellations & Return Trends",
    container: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WrapperMultiColumnChart, { category: cancellationCategories_m, series: cancellationSeries_m }, void 0, false, {
      fileName: "app/data/analysis/scmOverviewData.js",
      lineNumber: 50,
      columnNumber: 16
    }, this)
  }
];

// app/routes/snop.dashboard.analysis.orderAnalysis.jsx
var import_react = __toESM(require_react());
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\snop.dashboard.analysis.orderAnalysis.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\snop.dashboard.analysis.orderAnalysis.jsx"
  );
  import.meta.hot.lastModified = "1711092367013.1074";
}
var navigation = [{
  name: "Order to Cash",
  href: "/snop/dashboard/analysis/demandAnalysis",
  current: false
}, {
  name: "Order Analysis",
  href: "/snop/dashboard/analysis/orderAnalysis",
  current: true
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
var stats = [
  {
    name: "Bookings",
    stat: "$1.88B"
  },
  {
    name: "Open Orders",
    stat: "$719.5M"
  },
  {
    name: "Past Due",
    stat: "$466.2M"
  },
  // { name: "Avg Order Size", stat:"$1.66k"},
  {
    name: "On Time Shipment %",
    stat: "66.8%"
  }
];
var activeFilters = [{
  value: "objects",
  label: "Objects"
}];
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
function OverviewAnalysisRoute() {
  _s();
  const [open, setOpen] = (0, import_react.useState)(false);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "w-full bg-slate-600", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "ml-4 flex h-16 items-center justify-start", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "hidden md:block", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "text-3xl font-bold text-white", children: "Order Analysis" }, void 0, false, {
      fileName: "app/routes/snop.dashboard.analysis.orderAnalysis.jsx",
      lineNumber: 145,
      columnNumber: 15
    }, this) }, void 0, false, {
      fileName: "app/routes/snop.dashboard.analysis.orderAnalysis.jsx",
      lineNumber: 144,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/routes/snop.dashboard.analysis.orderAnalysis.jsx",
      lineNumber: 143,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/snop.dashboard.analysis.orderAnalysis.jsx",
      lineNumber: 142,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/snop.dashboard.analysis.orderAnalysis.jsx",
      lineNumber: 141,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-col", style: {
      minHeight: `calc(100vh - 4rem)`
    }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "bg-white", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(qe2.Root, { show: open, as: import_react.Fragment, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(_t, { as: "div", className: "relative z-40 sm:hidden", onClose: setOpen, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(qe2.Child, { as: import_react.Fragment, enter: "transition-opacity ease-linear duration-300", enterFrom: "opacity-0", enterTo: "opacity-100", leave: "transition-opacity ease-linear duration-300", leaveFrom: "opacity-100", leaveTo: "opacity-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "fixed inset-0 bg-black bg-opacity-25" }, void 0, false, {
            fileName: "app/routes/snop.dashboard.analysis.orderAnalysis.jsx",
            lineNumber: 163,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/snop.dashboard.analysis.orderAnalysis.jsx",
            lineNumber: 162,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "fixed inset-0 z-40 flex", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(qe2.Child, { as: import_react.Fragment, enter: "transition ease-in-out duration-300 transform", enterFrom: "translate-x-full", enterTo: "translate-x-0", leave: "transition ease-in-out duration-300 transform", leaveFrom: "translate-x-0", leaveTo: "translate-x-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(_t.Panel, { className: "relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex items-center justify-between px-4", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h2", { className: "text-lg font-medium text-gray-900", children: "Filters" }, void 0, false, {
                fileName: "app/routes/snop.dashboard.analysis.orderAnalysis.jsx",
                lineNumber: 170,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("button", { type: "button", className: "-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400", onClick: () => setOpen(false), children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "sr-only", children: "Close menu" }, void 0, false, {
                  fileName: "app/routes/snop.dashboard.analysis.orderAnalysis.jsx",
                  lineNumber: 174,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(XMarkIcon_default, { className: "h-6 w-6", "aria-hidden": "true" }, void 0, false, {
                  fileName: "app/routes/snop.dashboard.analysis.orderAnalysis.jsx",
                  lineNumber: 175,
                  columnNumber: 25
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/snop.dashboard.analysis.orderAnalysis.jsx",
                lineNumber: 173,
                columnNumber: 23
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/snop.dashboard.analysis.orderAnalysis.jsx",
              lineNumber: 169,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("form", { className: "mt-4", children: filters.map((section) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Ae, { as: "div", className: "border-t border-gray-200 px-4 py-6", children: ({
              open: open2
            }) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h3", { className: "-mx-2 -my-3 flow-root", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Ae.Button, { className: "flex w-full items-center justify-between bg-white px-2 py-3 text-sm text-gray-400", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "font-medium text-gray-900", children: section.name }, void 0, false, {
                  fileName: "app/routes/snop.dashboard.analysis.orderAnalysis.jsx",
                  lineNumber: 187,
                  columnNumber: 35
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "ml-6 flex items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ChevronDownIcon_default, { className: classNames(open2 ? "-rotate-180" : "rotate-0", "h-5 w-5 transform"), "aria-hidden": "true" }, void 0, false, {
                  fileName: "app/routes/snop.dashboard.analysis.orderAnalysis.jsx",
                  lineNumber: 191,
                  columnNumber: 37
                }, this) }, void 0, false, {
                  fileName: "app/routes/snop.dashboard.analysis.orderAnalysis.jsx",
                  lineNumber: 190,
                  columnNumber: 35
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/snop.dashboard.analysis.orderAnalysis.jsx",
                lineNumber: 186,
                columnNumber: 33
              }, this) }, void 0, false, {
                fileName: "app/routes/snop.dashboard.analysis.orderAnalysis.jsx",
                lineNumber: 185,
                columnNumber: 31
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Ae.Panel, { className: "pt-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "space-y-6", children: section.options.map((option, optionIdx) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex items-center", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("input", { id: `filter-mobile-${section.id}-${optionIdx}`, name: `${section.id}[]`, defaultValue: option.value, type: "checkbox", defaultChecked: option.checked, className: "h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" }, void 0, false, {
                  fileName: "app/routes/snop.dashboard.analysis.orderAnalysis.jsx",
                  lineNumber: 198,
                  columnNumber: 39
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("label", { htmlFor: `filter-mobile-${section.id}-${optionIdx}`, className: "ml-3 text-sm text-gray-500", children: option.label }, void 0, false, {
                  fileName: "app/routes/snop.dashboard.analysis.orderAnalysis.jsx",
                  lineNumber: 199,
                  columnNumber: 39
                }, this)
              ] }, option.value, true, {
                fileName: "app/routes/snop.dashboard.analysis.orderAnalysis.jsx",
                lineNumber: 197,
                columnNumber: 79
              }, this)) }, void 0, false, {
                fileName: "app/routes/snop.dashboard.analysis.orderAnalysis.jsx",
                lineNumber: 196,
                columnNumber: 33
              }, this) }, void 0, false, {
                fileName: "app/routes/snop.dashboard.analysis.orderAnalysis.jsx",
                lineNumber: 195,
                columnNumber: 31
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/snop.dashboard.analysis.orderAnalysis.jsx",
              lineNumber: 184,
              columnNumber: 29
            }, this) }, section.name, false, {
              fileName: "app/routes/snop.dashboard.analysis.orderAnalysis.jsx",
              lineNumber: 181,
              columnNumber: 47
            }, this)) }, void 0, false, {
              fileName: "app/routes/snop.dashboard.analysis.orderAnalysis.jsx",
              lineNumber: 180,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/snop.dashboard.analysis.orderAnalysis.jsx",
            lineNumber: 168,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "app/routes/snop.dashboard.analysis.orderAnalysis.jsx",
            lineNumber: 167,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/snop.dashboard.analysis.orderAnalysis.jsx",
            lineNumber: 166,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/snop.dashboard.analysis.orderAnalysis.jsx",
          lineNumber: 161,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/routes/snop.dashboard.analysis.orderAnalysis.jsx",
          lineNumber: 160,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("section", { "aria-labelledby": "filter-heading", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h2", { id: "filter-heading", className: "sr-only", children: "Filters" }, void 0, false, {
            fileName: "app/routes/snop.dashboard.analysis.orderAnalysis.jsx",
            lineNumber: 217,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "border-b border-gray-200 bg-white py-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "mr-64 flex items-center  px-4 sm:px-4 lg:px-4", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(qe, { as: "div", className: "relative inline-block text-left", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(qe2, { as: import_react.Fragment, enter: "transition ease-out duration-100", enterFrom: "transform opacity-0 scale-95", enterTo: "transform opacity-100 scale-100", leave: "transition ease-in duration-75", leaveFrom: "transform opacity-100 scale-100", leaveTo: "transform opacity-0 scale-95", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(qe.Items, { className: "absolute left-0 z-10 mt-2 w-40 origin-top-left rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "py-1", children: sortOptions.map((option) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(qe.Item, { children: ({
              active
            }) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { href: option.href, className: classNames(option.current ? "font-medium text-gray-900" : "text-gray-500", active ? "bg-gray-100" : "", "block px-4 py-2 text-sm"), children: option.name }, void 0, false, {
              fileName: "app/routes/snop.dashboard.analysis.orderAnalysis.jsx",
              lineNumber: 230,
              columnNumber: 31
            }, this) }, option.name, false, {
              fileName: "app/routes/snop.dashboard.analysis.orderAnalysis.jsx",
              lineNumber: 227,
              columnNumber: 52
            }, this)) }, void 0, false, {
              fileName: "app/routes/snop.dashboard.analysis.orderAnalysis.jsx",
              lineNumber: 226,
              columnNumber: 23
            }, this) }, void 0, false, {
              fileName: "app/routes/snop.dashboard.analysis.orderAnalysis.jsx",
              lineNumber: 225,
              columnNumber: 21
            }, this) }, void 0, false, {
              fileName: "app/routes/snop.dashboard.analysis.orderAnalysis.jsx",
              lineNumber: 224,
              columnNumber: 19
            }, this) }, void 0, false, {
              fileName: "app/routes/snop.dashboard.analysis.orderAnalysis.jsx",
              lineNumber: 223,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("button", { type: "button", className: "inline-block text-sm font-medium text-gray-700 hover:text-gray-900 sm:hidden", onClick: () => setOpen(true), children: "Filters" }, void 0, false, {
              fileName: "app/routes/snop.dashboard.analysis.orderAnalysis.jsx",
              lineNumber: 239,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "hidden sm:block", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flow-root", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Ct.Group, { className: "-mx-4 flex items-center divide-x divide-gray-200", children: filters.map((section, sectionIdx) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Ct, { className: "relative inline-block px-4 text-left", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Ct.Button, { className: "group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { children: section.name }, void 0, false, {
                  fileName: "app/routes/snop.dashboard.analysis.orderAnalysis.jsx",
                  lineNumber: 248,
                  columnNumber: 29
                }, this),
                sectionIdx === 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "ml-1.5 rounded bg-gray-200 px-1.5 py-0.5 text-xs font-semibold tabular-nums text-gray-700", children: "1" }, void 0, false, {
                  fileName: "app/routes/snop.dashboard.analysis.orderAnalysis.jsx",
                  lineNumber: 249,
                  columnNumber: 49
                }, this) : null,
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ChevronDownIcon_default, { className: "-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500", "aria-hidden": "true" }, void 0, false, {
                  fileName: "app/routes/snop.dashboard.analysis.orderAnalysis.jsx",
                  lineNumber: 252,
                  columnNumber: 29
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/snop.dashboard.analysis.orderAnalysis.jsx",
                lineNumber: 247,
                columnNumber: 27
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(qe2, { as: import_react.Fragment, enter: "transition ease-out duration-100", enterFrom: "transform opacity-0 scale-95", enterTo: "transform opacity-100 scale-100", leave: "transition ease-in duration-75", leaveFrom: "transform opacity-100 scale-100", leaveTo: "transform opacity-0 scale-95", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Ct.Panel, { className: "absolute right-0 z-10 mt-2 origin-top-right rounded-md bg-white p-4 shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("form", { className: "space-y-4", children: section.options.map((option, optionIdx) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex items-center", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("input", { id: `filter-${section.id}-${optionIdx}`, name: `${section.id}[]`, defaultValue: option.value, type: "checkbox", defaultChecked: option.checked, className: "h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" }, void 0, false, {
                  fileName: "app/routes/snop.dashboard.analysis.orderAnalysis.jsx",
                  lineNumber: 259,
                  columnNumber: 37
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("label", { htmlFor: `filter-${section.id}-${optionIdx}`, className: "ml-3 whitespace-nowrap pr-6 text-sm font-medium text-gray-900", children: option.label }, void 0, false, {
                  fileName: "app/routes/snop.dashboard.analysis.orderAnalysis.jsx",
                  lineNumber: 260,
                  columnNumber: 37
                }, this)
              ] }, option.value, true, {
                fileName: "app/routes/snop.dashboard.analysis.orderAnalysis.jsx",
                lineNumber: 258,
                columnNumber: 77
              }, this)) }, void 0, false, {
                fileName: "app/routes/snop.dashboard.analysis.orderAnalysis.jsx",
                lineNumber: 257,
                columnNumber: 31
              }, this) }, void 0, false, {
                fileName: "app/routes/snop.dashboard.analysis.orderAnalysis.jsx",
                lineNumber: 256,
                columnNumber: 29
              }, this) }, void 0, false, {
                fileName: "app/routes/snop.dashboard.analysis.orderAnalysis.jsx",
                lineNumber: 255,
                columnNumber: 27
              }, this)
            ] }, section.name, true, {
              fileName: "app/routes/snop.dashboard.analysis.orderAnalysis.jsx",
              lineNumber: 246,
              columnNumber: 61
            }, this)) }, void 0, false, {
              fileName: "app/routes/snop.dashboard.analysis.orderAnalysis.jsx",
              lineNumber: 245,
              columnNumber: 21
            }, this) }, void 0, false, {
              fileName: "app/routes/snop.dashboard.analysis.orderAnalysis.jsx",
              lineNumber: 244,
              columnNumber: 19
            }, this) }, void 0, false, {
              fileName: "app/routes/snop.dashboard.analysis.orderAnalysis.jsx",
              lineNumber: 243,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "ml-16  flex px-4 sm:flex sm:items-center sm:px-4 lg:px-4", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h3", { className: "text-sm font-medium text-gray-500", children: [
                "Filters",
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "sr-only", children: ", active" }, void 0, false, {
                  fileName: "app/routes/snop.dashboard.analysis.orderAnalysis.jsx",
                  lineNumber: 277,
                  columnNumber: 21
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/snop.dashboard.analysis.orderAnalysis.jsx",
                lineNumber: 275,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { "aria-hidden": "true", className: "hidden h-5 w-px bg-gray-300 sm:ml-4 sm:block" }, void 0, false, {
                fileName: "app/routes/snop.dashboard.analysis.orderAnalysis.jsx",
                lineNumber: 280,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "mt-2 sm:ml-4 sm:mt-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "-m-1 flex flex-wrap items-center", children: activeFilters.map((activeFilter) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "m-1 inline-flex items-center rounded-full border border-gray-200 bg-white py-1.5 pl-3 pr-2 text-sm font-medium text-gray-900", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { children: activeFilter.label }, void 0, false, {
                  fileName: "app/routes/snop.dashboard.analysis.orderAnalysis.jsx",
                  lineNumber: 285,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("button", { type: "button", className: "ml-1 inline-flex h-4 w-4 flex-shrink-0 rounded-full p-1 text-gray-400 hover:bg-gray-200 hover:text-gray-500", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "sr-only", children: [
                    "Remove filter for ",
                    activeFilter.label
                  ] }, void 0, true, {
                    fileName: "app/routes/snop.dashboard.analysis.orderAnalysis.jsx",
                    lineNumber: 287,
                    columnNumber: 29
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("svg", { className: "h-2 w-2", stroke: "currentColor", fill: "none", viewBox: "0 0 8 8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("path", { strokeLinecap: "round", strokeWidth: "1.5", d: "M1 1l6 6m0-6L1 7" }, void 0, false, {
                    fileName: "app/routes/snop.dashboard.analysis.orderAnalysis.jsx",
                    lineNumber: 291,
                    columnNumber: 31
                  }, this) }, void 0, false, {
                    fileName: "app/routes/snop.dashboard.analysis.orderAnalysis.jsx",
                    lineNumber: 290,
                    columnNumber: 29
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/snop.dashboard.analysis.orderAnalysis.jsx",
                  lineNumber: 286,
                  columnNumber: 27
                }, this)
              ] }, activeFilter.value, true, {
                fileName: "app/routes/snop.dashboard.analysis.orderAnalysis.jsx",
                lineNumber: 284,
                columnNumber: 58
              }, this)) }, void 0, false, {
                fileName: "app/routes/snop.dashboard.analysis.orderAnalysis.jsx",
                lineNumber: 283,
                columnNumber: 21
              }, this) }, void 0, false, {
                fileName: "app/routes/snop.dashboard.analysis.orderAnalysis.jsx",
                lineNumber: 282,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/snop.dashboard.analysis.orderAnalysis.jsx",
              lineNumber: 274,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/snop.dashboard.analysis.orderAnalysis.jsx",
            lineNumber: 222,
            columnNumber: 15
          }, this) }, void 0, false, {
            fileName: "app/routes/snop.dashboard.analysis.orderAnalysis.jsx",
            lineNumber: 221,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/snop.dashboard.analysis.orderAnalysis.jsx",
          lineNumber: 216,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/snop.dashboard.analysis.orderAnalysis.jsx",
        lineNumber: 158,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("dl", { className: "mx-4 mb-2 mt-4 grid grid-cols-1 gap-6  lg:grid-cols-4", children: stats.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "items-center overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("dt", { className: "truncate text-center text-lg font-medium text-gray-500", children: item.name }, void 0, false, {
            fileName: "app/routes/snop.dashboard.analysis.orderAnalysis.jsx",
            lineNumber: 308,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("dd", { className: "mt-1 text-center text-4xl font-bold tracking-tight  text-gray-900  lg:text-5xl", children: item.stat }, void 0, false, {
            fileName: "app/routes/snop.dashboard.analysis.orderAnalysis.jsx",
            lineNumber: 311,
            columnNumber: 17
          }, this)
        ] }, item.name, true, {
          fileName: "app/routes/snop.dashboard.analysis.orderAnalysis.jsx",
          lineNumber: 307,
          columnNumber: 32
        }, this)) }, void 0, false, {
          fileName: "app/routes/snop.dashboard.analysis.orderAnalysis.jsx",
          lineNumber: 306,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "relative", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "absolute inset-0 flex items-center", "aria-hidden": "true", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "mx-4 w-full border-t border-gray-200" }, void 0, false, {
          fileName: "app/routes/snop.dashboard.analysis.orderAnalysis.jsx",
          lineNumber: 318,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/snop.dashboard.analysis.orderAnalysis.jsx",
          lineNumber: 317,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/routes/snop.dashboard.analysis.orderAnalysis.jsx",
          lineNumber: 316,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/snop.dashboard.analysis.orderAnalysis.jsx",
        lineNumber: 305,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("ul", { className: "mx-4 my-4 grid grid-cols-1 grid-rows-2 gap-6 md:grid-cols-2 ", children: kpiService_m.map((kpi) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { className: "col-span-1 flex flex-col divide-y divide-white rounded-lg bg-white shadow-xl shadow-slate-900/10", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "relative flex flex-1 flex-col py-2 pl-3", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex items-baseline gap-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h3", { className: "text-md mt-6 font-medium text-gray-900", children: kpi.Name }, void 0, false, {
              fileName: "app/routes/snop.dashboard.analysis.orderAnalysis.jsx",
              lineNumber: 331,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h1", { className: "font-display text-d-h3 mb-3 text-4xl font-bold text-black", children: kpi.Value }, void 0, false, {
              fileName: "app/routes/snop.dashboard.analysis.orderAnalysis.jsx",
              lineNumber: 334,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/snop.dashboard.analysis.orderAnalysis.jsx",
            lineNumber: 330,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "app/routes/snop.dashboard.analysis.orderAnalysis.jsx",
            lineNumber: 329,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: kpi.container }, void 0, false, {
            fileName: "app/routes/snop.dashboard.analysis.orderAnalysis.jsx",
            lineNumber: 339,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/snop.dashboard.analysis.orderAnalysis.jsx",
          lineNumber: 328,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", {}, void 0, false, {
          fileName: "app/routes/snop.dashboard.analysis.orderAnalysis.jsx",
          lineNumber: 341,
          columnNumber: 15
        }, this)
      ] }, kpi.Name, true, {
        fileName: "app/routes/snop.dashboard.analysis.orderAnalysis.jsx",
        lineNumber: 327,
        columnNumber: 36
      }, this)) }, void 0, false, {
        fileName: "app/routes/snop.dashboard.analysis.orderAnalysis.jsx",
        lineNumber: 325,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("footer", { className: "mt-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Ae, { as: "nav", className: "h-16 border-t bg-white", children: ({
        open: open2
      }) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "w-full px-2 py-2 sm:px-2 lg:px-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex h-12 items-center justify-start", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h2", { className: "text-md mr-2 font-bold text-gray-500", children: "Demand Analysis" }, void 0, false, {
            fileName: "app/routes/snop.dashboard.analysis.orderAnalysis.jsx",
            lineNumber: 393,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ChevronDoubleRightIcon_default, { className: "-mr-1 ml-1 h-5 w-5 flex-shrink-0 items-center text-gray-400 group-hover:text-gray-500", "aria-hidden": "true" }, void 0, false, {
            fileName: "app/routes/snop.dashboard.analysis.orderAnalysis.jsx",
            lineNumber: 396,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "hidden md:block", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex items-baseline", children: navigation.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { href: item.href, className: classNames(item.current ? "bg-blue-500 text-white" : "text-black hover:bg-blue-500 hover:text-white", "text-md mx-2 rounded-md px-5 py-2 font-medium"), "aria-current": item.current ? "page" : void 0, children: item.name }, item.name, false, {
            fileName: "app/routes/snop.dashboard.analysis.orderAnalysis.jsx",
            lineNumber: 401,
            columnNumber: 51
          }, this)) }, void 0, false, {
            fileName: "app/routes/snop.dashboard.analysis.orderAnalysis.jsx",
            lineNumber: 400,
            columnNumber: 25
          }, this) }, void 0, false, {
            fileName: "app/routes/snop.dashboard.analysis.orderAnalysis.jsx",
            lineNumber: 398,
            columnNumber: 23
          }, this) }, void 0, false, {
            fileName: "app/routes/snop.dashboard.analysis.orderAnalysis.jsx",
            lineNumber: 397,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "-mr-2 flex md:hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Ae.Button, { className: "inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "sr-only", children: "Open main menu" }, void 0, false, {
              fileName: "app/routes/snop.dashboard.analysis.orderAnalysis.jsx",
              lineNumber: 411,
              columnNumber: 25
            }, this),
            open2 ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(XMarkIcon_default, { className: "block h-6 w-6", "aria-hidden": "true" }, void 0, false, {
              fileName: "app/routes/snop.dashboard.analysis.orderAnalysis.jsx",
              lineNumber: 412,
              columnNumber: 33
            }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Bars3Icon_default, { className: "block h-6 w-6", "aria-hidden": "true" }, void 0, false, {
              fileName: "app/routes/snop.dashboard.analysis.orderAnalysis.jsx",
              lineNumber: 412,
              columnNumber: 94
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/snop.dashboard.analysis.orderAnalysis.jsx",
            lineNumber: 410,
            columnNumber: 23
          }, this) }, void 0, false, {
            fileName: "app/routes/snop.dashboard.analysis.orderAnalysis.jsx",
            lineNumber: 408,
            columnNumber: 21
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/snop.dashboard.analysis.orderAnalysis.jsx",
          lineNumber: 392,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "app/routes/snop.dashboard.analysis.orderAnalysis.jsx",
          lineNumber: 391,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Ae.Panel, { className: "md:hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "space-y-1 px-2 pb-3 pt-2 sm:px-3", children: navigation.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Ae.Button, { as: "a", href: item.href, className: classNames(item.current ? "bg-gray-900 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white", "block rounded-md px-3 py-2 text-base font-medium"), "aria-current": item.current ? "page" : void 0, children: item.name }, item.name, false, {
          fileName: "app/routes/snop.dashboard.analysis.orderAnalysis.jsx",
          lineNumber: 420,
          columnNumber: 45
        }, this)) }, void 0, false, {
          fileName: "app/routes/snop.dashboard.analysis.orderAnalysis.jsx",
          lineNumber: 419,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "app/routes/snop.dashboard.analysis.orderAnalysis.jsx",
          lineNumber: 418,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/snop.dashboard.analysis.orderAnalysis.jsx",
        lineNumber: 390,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "app/routes/snop.dashboard.analysis.orderAnalysis.jsx",
        lineNumber: 387,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/snop.dashboard.analysis.orderAnalysis.jsx",
        lineNumber: 386,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/snop.dashboard.analysis.orderAnalysis.jsx",
      lineNumber: 152,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/snop.dashboard.analysis.orderAnalysis.jsx",
    lineNumber: 140,
    columnNumber: 10
  }, this);
}
_s(OverviewAnalysisRoute, "xG1TONbKtDWtdOTrXaTAsNhPg/Q=");
_c = OverviewAnalysisRoute;
var _c;
$RefreshReg$(_c, "OverviewAnalysisRoute");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  OverviewAnalysisRoute as default
};
//# sourceMappingURL=/build/routes/snop.dashboard.analysis.orderAnalysis-3K6XHOWJ.js.map
