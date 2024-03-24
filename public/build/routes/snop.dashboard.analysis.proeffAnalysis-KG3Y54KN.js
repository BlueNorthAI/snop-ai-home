import {
  WrapperDonutChart
} from "/build/_shared/chunk-WZTJMLU2.js";
import {
  WrapperMultiStackColChart
} from "/build/_shared/chunk-QRAMQPBO.js";
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

// app/kendo/rawData/analysis/proEfficencyAnalysis.js
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\kendo\\rawData\\analysis\\proEfficencyAnalysis.js"
  );
  import.meta.hot.lastModified = "1708503722831.1487";
}
var poOpenData = [
  {
    category: "IT consulting",
    value: 0.5
  },
  {
    category: "Marketing",
    value: 0.3
  },
  {
    category: "Human Resources",
    value: 0.25
  },
  {
    category: "Research and Development",
    value: 0.15
  }
];
var topSupplierCategories_m = ["supply", "IT", "Manufacutre", "Supplies", "GE Captial", "Advance"];
var topSupplierSeries_m = [
  {
    name: "",
    data: [34, 27, 15, 12, 10, 5]
  }
];
var cycleTrendCategories_m = ["May", "Jul", "Sep", "Nov", "Jan", "Mar"];
var cycleTrendSeries_m = [
  {
    name: "PR to PO Cycle Time",
    data: [73, 70, 70, 64, 83, 82, 73]
  },
  {
    name: "PO Open Cycle Time",
    data: [73, 70, 70, 64, 83, 82, 73]
  },
  {
    name: "PO Closed Cycle Time",
    data: [73, 70, 70, 64, 83, 82, 73]
  }
];
var cycleTimeCategories_m = ["May", "Jul", "Sep", "Nov", "Jan", "Mar"];
var cycleTimeSeries_m = [
  {
    name: "ABC Consulting",
    data: [50, 150, 200, 300, 40, 70]
  }
];

// app/data/analysis/proEfficencyData.js
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\data\\analysis\\proEfficencyData.js"
  );
  import.meta.hot.lastModified = "1708503722770.003";
}
var kpiService_m = [
  {
    Name: "PO Open Cycle Time by # of Tier-1 Suppliers",
    container: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WrapperDonutChart, { series: poOpenData }, void 0, false, {
      fileName: "app/data/analysis/proEfficencyData.js",
      lineNumber: 36,
      columnNumber: 16
    }, this)
  },
  {
    Name: "Procurement Cycle Time Trend",
    container: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WrapperMultiBarChart, { category: topSupplierCategories_m, series: topSupplierSeries_m }, void 0, false, {
      fileName: "app/data/analysis/proEfficencyData.js",
      lineNumber: 40,
      columnNumber: 16
    }, this)
  },
  {
    Name: "Top Suppliers with Amendments",
    container: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WrapperMultiStackColChart, { category: cycleTrendCategories_m, series: cycleTrendSeries_m }, void 0, false, {
      fileName: "app/data/analysis/proEfficencyData.js",
      lineNumber: 45,
      columnNumber: 16
    }, this)
  },
  {
    Name: "Cycle Time by Category",
    container: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WrapperMultiColumnChart, { category: cycleTimeCategories_m, series: cycleTimeSeries_m }, void 0, false, {
      fileName: "app/data/analysis/proEfficencyData.js",
      lineNumber: 50,
      columnNumber: 16
    }, this)
  }
];

// app/routes/snop.dashboard.analysis.proeffAnalysis.jsx
var import_react = __toESM(require_react());
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\snop.dashboard.analysis.proeffAnalysis.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\snop.dashboard.analysis.proeffAnalysis.jsx"
  );
  import.meta.hot.lastModified = "1711092380369.091";
}
var navigation = [{
  name: "Supply Analysis",
  href: "/snop/dashboard/analysis/supplyAnalysis",
  current: false
}, {
  name: "Savings Analysis",
  href: "/snop/dashboard/analysis/savingsAnalysis",
  current: false
}, {
  name: "Procurement Efficinecy",
  href: "/snop/dashboard/analysis/proeffAnalysis",
  current: true
}, {
  name: "Spend Analysis",
  href: "/snop/dashboard/analysis/spendAnalysis",
  current: false
}, {
  name: "Procure to Pay",
  href: "/snop/dashboard/analysis/procureAnalysis",
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
  name: "PR to PO Cycle Time",
  stat: "30.0"
}, {
  name: "PO Open Cycle Time",
  stat: "20.4"
}, {
  name: "PO Closed Cycle Time",
  stat: "24.2"
}, {
  name: "Amendments",
  stat: "100"
}];
var activeFilters = [{
  value: "objects",
  label: "Objects"
}];
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
function ProEffieciencyAnalysisRoute() {
  _s();
  const [open, setOpen] = (0, import_react.useState)(false);
  const emptyStyles = {
    background: "#ef4444"
  };
  const progressStyles = {
    background: "#22c55e"
  };
  console.log(kpiService_m);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-col", style: {
    minHeight: `calc(100vh - 4rem)`
  }, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "bg-white", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(qe2.Root, { show: open, as: import_react.Fragment, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(_t, { as: "div", className: "relative z-40 sm:hidden", onClose: setOpen, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(qe2.Child, { as: import_react.Fragment, enter: "transition-opacity ease-linear duration-300", enterFrom: "opacity-0", enterTo: "opacity-100", leave: "transition-opacity ease-linear duration-300", leaveFrom: "opacity-100", leaveTo: "opacity-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "fixed inset-0 bg-black bg-opacity-25" }, void 0, false, {
          fileName: "app/routes/snop.dashboard.analysis.proeffAnalysis.jsx",
          lineNumber: 184,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/routes/snop.dashboard.analysis.proeffAnalysis.jsx",
          lineNumber: 183,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "fixed inset-0 z-40 flex", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(qe2.Child, { as: import_react.Fragment, enter: "transition ease-in-out duration-300 transform", enterFrom: "translate-x-full", enterTo: "translate-x-0", leave: "transition ease-in-out duration-300 transform", leaveFrom: "translate-x-0", leaveTo: "translate-x-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(_t.Panel, { className: "relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex items-center justify-between px-4", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h2", { className: "text-lg font-medium text-gray-900", children: "Filters" }, void 0, false, {
              fileName: "app/routes/snop.dashboard.analysis.proeffAnalysis.jsx",
              lineNumber: 191,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("button", { type: "button", className: "-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400", onClick: () => setOpen(false), children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "sr-only", children: "Close menu" }, void 0, false, {
                fileName: "app/routes/snop.dashboard.analysis.proeffAnalysis.jsx",
                lineNumber: 195,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(XMarkIcon_default, { className: "h-6 w-6", "aria-hidden": "true" }, void 0, false, {
                fileName: "app/routes/snop.dashboard.analysis.proeffAnalysis.jsx",
                lineNumber: 196,
                columnNumber: 25
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/snop.dashboard.analysis.proeffAnalysis.jsx",
              lineNumber: 194,
              columnNumber: 23
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/snop.dashboard.analysis.proeffAnalysis.jsx",
            lineNumber: 190,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("form", { className: "mt-4", children: filters.map((section) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Ae, { as: "div", className: "border-t border-gray-200 px-4 py-6", children: ({
            open: open2
          }) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h3", { className: "-mx-2 -my-3 flow-root", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Ae.Button, { className: "flex w-full items-center justify-between bg-white px-2 py-3 text-sm text-gray-400", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "font-medium text-gray-900", children: section.name }, void 0, false, {
                fileName: "app/routes/snop.dashboard.analysis.proeffAnalysis.jsx",
                lineNumber: 208,
                columnNumber: 35
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "ml-6 flex items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ChevronDownIcon_default, { className: classNames(open2 ? "-rotate-180" : "rotate-0", "h-5 w-5 transform"), "aria-hidden": "true" }, void 0, false, {
                fileName: "app/routes/snop.dashboard.analysis.proeffAnalysis.jsx",
                lineNumber: 212,
                columnNumber: 37
              }, this) }, void 0, false, {
                fileName: "app/routes/snop.dashboard.analysis.proeffAnalysis.jsx",
                lineNumber: 211,
                columnNumber: 35
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/snop.dashboard.analysis.proeffAnalysis.jsx",
              lineNumber: 207,
              columnNumber: 33
            }, this) }, void 0, false, {
              fileName: "app/routes/snop.dashboard.analysis.proeffAnalysis.jsx",
              lineNumber: 206,
              columnNumber: 31
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Ae.Panel, { className: "pt-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "space-y-6", children: section.options.map((option, optionIdx) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex items-center", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("input", { id: `filter-mobile-${section.id}-${optionIdx}`, name: `${section.id}[]`, defaultValue: option.value, type: "checkbox", defaultChecked: option.checked, className: "h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" }, void 0, false, {
                fileName: "app/routes/snop.dashboard.analysis.proeffAnalysis.jsx",
                lineNumber: 219,
                columnNumber: 39
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("label", { htmlFor: `filter-mobile-${section.id}-${optionIdx}`, className: "ml-3 text-sm text-gray-500", children: option.label }, void 0, false, {
                fileName: "app/routes/snop.dashboard.analysis.proeffAnalysis.jsx",
                lineNumber: 220,
                columnNumber: 39
              }, this)
            ] }, option.value, true, {
              fileName: "app/routes/snop.dashboard.analysis.proeffAnalysis.jsx",
              lineNumber: 218,
              columnNumber: 79
            }, this)) }, void 0, false, {
              fileName: "app/routes/snop.dashboard.analysis.proeffAnalysis.jsx",
              lineNumber: 217,
              columnNumber: 33
            }, this) }, void 0, false, {
              fileName: "app/routes/snop.dashboard.analysis.proeffAnalysis.jsx",
              lineNumber: 216,
              columnNumber: 31
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/snop.dashboard.analysis.proeffAnalysis.jsx",
            lineNumber: 205,
            columnNumber: 29
          }, this) }, section.name, false, {
            fileName: "app/routes/snop.dashboard.analysis.proeffAnalysis.jsx",
            lineNumber: 202,
            columnNumber: 47
          }, this)) }, void 0, false, {
            fileName: "app/routes/snop.dashboard.analysis.proeffAnalysis.jsx",
            lineNumber: 201,
            columnNumber: 21
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/snop.dashboard.analysis.proeffAnalysis.jsx",
          lineNumber: 189,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "app/routes/snop.dashboard.analysis.proeffAnalysis.jsx",
          lineNumber: 188,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/routes/snop.dashboard.analysis.proeffAnalysis.jsx",
          lineNumber: 187,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/snop.dashboard.analysis.proeffAnalysis.jsx",
        lineNumber: 182,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/snop.dashboard.analysis.proeffAnalysis.jsx",
        lineNumber: 181,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("section", { "aria-labelledby": "filter-heading", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h2", { id: "filter-heading", className: "sr-only", children: "Filters" }, void 0, false, {
          fileName: "app/routes/snop.dashboard.analysis.proeffAnalysis.jsx",
          lineNumber: 238,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "border-b border-gray-200 bg-white py-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "mr-64 flex items-center  px-4 sm:px-4 lg:px-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(qe, { as: "div", className: "relative inline-block text-left", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(qe2, { as: import_react.Fragment, enter: "transition ease-out duration-100", enterFrom: "transform opacity-0 scale-95", enterTo: "transform opacity-100 scale-100", leave: "transition ease-in duration-75", leaveFrom: "transform opacity-100 scale-100", leaveTo: "transform opacity-0 scale-95", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(qe.Items, { className: "absolute left-0 z-10 mt-2 w-40 origin-top-left rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "py-1", children: sortOptions.map((option) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(qe.Item, { children: ({
            active
          }) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { href: option.href, className: classNames(option.current ? "font-medium text-gray-900" : "text-gray-500", active ? "bg-gray-100" : "", "block px-4 py-2 text-sm"), children: option.name }, void 0, false, {
            fileName: "app/routes/snop.dashboard.analysis.proeffAnalysis.jsx",
            lineNumber: 251,
            columnNumber: 31
          }, this) }, option.name, false, {
            fileName: "app/routes/snop.dashboard.analysis.proeffAnalysis.jsx",
            lineNumber: 248,
            columnNumber: 52
          }, this)) }, void 0, false, {
            fileName: "app/routes/snop.dashboard.analysis.proeffAnalysis.jsx",
            lineNumber: 247,
            columnNumber: 23
          }, this) }, void 0, false, {
            fileName: "app/routes/snop.dashboard.analysis.proeffAnalysis.jsx",
            lineNumber: 246,
            columnNumber: 21
          }, this) }, void 0, false, {
            fileName: "app/routes/snop.dashboard.analysis.proeffAnalysis.jsx",
            lineNumber: 245,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "app/routes/snop.dashboard.analysis.proeffAnalysis.jsx",
            lineNumber: 244,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("button", { type: "button", className: "inline-block text-sm font-medium text-gray-700 hover:text-gray-900 sm:hidden", onClick: () => setOpen(true), children: "Filters" }, void 0, false, {
            fileName: "app/routes/snop.dashboard.analysis.proeffAnalysis.jsx",
            lineNumber: 260,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "hidden sm:block", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flow-root", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Ct.Group, { className: "-mx-4 flex items-center divide-x divide-gray-200", children: filters.map((section, sectionIdx) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Ct, { className: "relative inline-block px-4 text-left", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Ct.Button, { className: "group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { children: section.name }, void 0, false, {
                fileName: "app/routes/snop.dashboard.analysis.proeffAnalysis.jsx",
                lineNumber: 269,
                columnNumber: 29
              }, this),
              sectionIdx === 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "ml-1.5 rounded bg-gray-200 px-1.5 py-0.5 text-xs font-semibold tabular-nums text-gray-700", children: "1" }, void 0, false, {
                fileName: "app/routes/snop.dashboard.analysis.proeffAnalysis.jsx",
                lineNumber: 270,
                columnNumber: 49
              }, this) : null,
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ChevronDownIcon_default, { className: "-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500", "aria-hidden": "true" }, void 0, false, {
                fileName: "app/routes/snop.dashboard.analysis.proeffAnalysis.jsx",
                lineNumber: 273,
                columnNumber: 29
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/snop.dashboard.analysis.proeffAnalysis.jsx",
              lineNumber: 268,
              columnNumber: 27
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(qe2, { as: import_react.Fragment, enter: "transition ease-out duration-100", enterFrom: "transform opacity-0 scale-95", enterTo: "transform opacity-100 scale-100", leave: "transition ease-in duration-75", leaveFrom: "transform opacity-100 scale-100", leaveTo: "transform opacity-0 scale-95", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Ct.Panel, { className: "absolute right-0 z-10 mt-2 origin-top-right rounded-md bg-white p-4 shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("form", { className: "space-y-4", children: section.options.map((option, optionIdx) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex items-center", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("input", { id: `filter-${section.id}-${optionIdx}`, name: `${section.id}[]`, defaultValue: option.value, type: "checkbox", defaultChecked: option.checked, className: "h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" }, void 0, false, {
                fileName: "app/routes/snop.dashboard.analysis.proeffAnalysis.jsx",
                lineNumber: 280,
                columnNumber: 37
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("label", { htmlFor: `filter-${section.id}-${optionIdx}`, className: "ml-3 whitespace-nowrap pr-6 text-sm font-medium text-gray-900", children: option.label }, void 0, false, {
                fileName: "app/routes/snop.dashboard.analysis.proeffAnalysis.jsx",
                lineNumber: 281,
                columnNumber: 37
              }, this)
            ] }, option.value, true, {
              fileName: "app/routes/snop.dashboard.analysis.proeffAnalysis.jsx",
              lineNumber: 279,
              columnNumber: 77
            }, this)) }, void 0, false, {
              fileName: "app/routes/snop.dashboard.analysis.proeffAnalysis.jsx",
              lineNumber: 278,
              columnNumber: 31
            }, this) }, void 0, false, {
              fileName: "app/routes/snop.dashboard.analysis.proeffAnalysis.jsx",
              lineNumber: 277,
              columnNumber: 29
            }, this) }, void 0, false, {
              fileName: "app/routes/snop.dashboard.analysis.proeffAnalysis.jsx",
              lineNumber: 276,
              columnNumber: 27
            }, this)
          ] }, section.name, true, {
            fileName: "app/routes/snop.dashboard.analysis.proeffAnalysis.jsx",
            lineNumber: 267,
            columnNumber: 61
          }, this)) }, void 0, false, {
            fileName: "app/routes/snop.dashboard.analysis.proeffAnalysis.jsx",
            lineNumber: 266,
            columnNumber: 21
          }, this) }, void 0, false, {
            fileName: "app/routes/snop.dashboard.analysis.proeffAnalysis.jsx",
            lineNumber: 265,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "app/routes/snop.dashboard.analysis.proeffAnalysis.jsx",
            lineNumber: 264,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "ml-16  flex px-4 sm:flex sm:items-center sm:px-4 lg:px-4", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h3", { className: "text-sm font-medium text-gray-500", children: [
              "Filters",
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "sr-only", children: ", active" }, void 0, false, {
                fileName: "app/routes/snop.dashboard.analysis.proeffAnalysis.jsx",
                lineNumber: 298,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/snop.dashboard.analysis.proeffAnalysis.jsx",
              lineNumber: 296,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { "aria-hidden": "true", className: "hidden h-5 w-px bg-gray-300 sm:ml-4 sm:block" }, void 0, false, {
              fileName: "app/routes/snop.dashboard.analysis.proeffAnalysis.jsx",
              lineNumber: 301,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "mt-2 sm:ml-4 sm:mt-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "-m-1 flex flex-wrap items-center", children: activeFilters.map((activeFilter) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "m-1 inline-flex items-center rounded-full border border-gray-200 bg-white py-1.5 pl-3 pr-2 text-sm font-medium text-gray-900", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { children: activeFilter.label }, void 0, false, {
                fileName: "app/routes/snop.dashboard.analysis.proeffAnalysis.jsx",
                lineNumber: 306,
                columnNumber: 27
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("button", { type: "button", className: "ml-1 inline-flex h-4 w-4 flex-shrink-0 rounded-full p-1 text-gray-400 hover:bg-gray-200 hover:text-gray-500", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "sr-only", children: [
                  "Remove filter for ",
                  activeFilter.label
                ] }, void 0, true, {
                  fileName: "app/routes/snop.dashboard.analysis.proeffAnalysis.jsx",
                  lineNumber: 308,
                  columnNumber: 29
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("svg", { className: "h-2 w-2", stroke: "currentColor", fill: "none", viewBox: "0 0 8 8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("path", { strokeLinecap: "round", strokeWidth: "1.5", d: "M1 1l6 6m0-6L1 7" }, void 0, false, {
                  fileName: "app/routes/snop.dashboard.analysis.proeffAnalysis.jsx",
                  lineNumber: 312,
                  columnNumber: 31
                }, this) }, void 0, false, {
                  fileName: "app/routes/snop.dashboard.analysis.proeffAnalysis.jsx",
                  lineNumber: 311,
                  columnNumber: 29
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/snop.dashboard.analysis.proeffAnalysis.jsx",
                lineNumber: 307,
                columnNumber: 27
              }, this)
            ] }, activeFilter.value, true, {
              fileName: "app/routes/snop.dashboard.analysis.proeffAnalysis.jsx",
              lineNumber: 305,
              columnNumber: 58
            }, this)) }, void 0, false, {
              fileName: "app/routes/snop.dashboard.analysis.proeffAnalysis.jsx",
              lineNumber: 304,
              columnNumber: 21
            }, this) }, void 0, false, {
              fileName: "app/routes/snop.dashboard.analysis.proeffAnalysis.jsx",
              lineNumber: 303,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/snop.dashboard.analysis.proeffAnalysis.jsx",
            lineNumber: 295,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/snop.dashboard.analysis.proeffAnalysis.jsx",
          lineNumber: 243,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/snop.dashboard.analysis.proeffAnalysis.jsx",
          lineNumber: 242,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/snop.dashboard.analysis.proeffAnalysis.jsx",
        lineNumber: 237,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/snop.dashboard.analysis.proeffAnalysis.jsx",
      lineNumber: 179,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("dl", { className: "mx-4 mb-2 mt-4 grid grid-cols-1 gap-6  lg:grid-cols-4", children: stats.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "items-center overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("dt", { className: "truncate text-center text-lg font-medium text-gray-500", children: item.name }, void 0, false, {
          fileName: "app/routes/snop.dashboard.analysis.proeffAnalysis.jsx",
          lineNumber: 329,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("dd", { className: "mt-1 text-center text-4xl font-bold tracking-tight  text-gray-900  lg:text-5xl", children: item.stat }, void 0, false, {
          fileName: "app/routes/snop.dashboard.analysis.proeffAnalysis.jsx",
          lineNumber: 332,
          columnNumber: 17
        }, this)
      ] }, item.name, true, {
        fileName: "app/routes/snop.dashboard.analysis.proeffAnalysis.jsx",
        lineNumber: 328,
        columnNumber: 32
      }, this)) }, void 0, false, {
        fileName: "app/routes/snop.dashboard.analysis.proeffAnalysis.jsx",
        lineNumber: 327,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "relative", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "absolute inset-0 flex items-center", "aria-hidden": "true", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "mx-4 w-full border-t border-gray-200" }, void 0, false, {
        fileName: "app/routes/snop.dashboard.analysis.proeffAnalysis.jsx",
        lineNumber: 339,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/routes/snop.dashboard.analysis.proeffAnalysis.jsx",
        lineNumber: 338,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/snop.dashboard.analysis.proeffAnalysis.jsx",
        lineNumber: 337,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/snop.dashboard.analysis.proeffAnalysis.jsx",
      lineNumber: 326,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("ul", { role: "list", className: "mx-4 my-4 grid grid-cols-1 grid-rows-2 gap-6 md:grid-cols-2", children: kpiService_m.map((kpi) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { className: "col-span-1 flex flex-col divide-y divide-white rounded-lg bg-white shadow-xl shadow-slate-900/10", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "relative flex flex-1 flex-col py-2 pl-3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex items-baseline gap-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h3", { className: "text-md mt-6 font-medium text-gray-900", children: kpi.Name }, void 0, false, {
            fileName: "app/routes/snop.dashboard.analysis.proeffAnalysis.jsx",
            lineNumber: 352,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h1", { className: "font-display text-d-h3 mb-3 text-4xl font-bold text-black", children: kpi.Value }, void 0, false, {
            fileName: "app/routes/snop.dashboard.analysis.proeffAnalysis.jsx",
            lineNumber: 355,
            columnNumber: 21
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/snop.dashboard.analysis.proeffAnalysis.jsx",
          lineNumber: 351,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "app/routes/snop.dashboard.analysis.proeffAnalysis.jsx",
          lineNumber: 350,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: kpi.container }, void 0, false, {
          fileName: "app/routes/snop.dashboard.analysis.proeffAnalysis.jsx",
          lineNumber: 360,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/snop.dashboard.analysis.proeffAnalysis.jsx",
        lineNumber: 349,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", {}, void 0, false, {
        fileName: "app/routes/snop.dashboard.analysis.proeffAnalysis.jsx",
        lineNumber: 362,
        columnNumber: 15
      }, this)
    ] }, kpi.Name, true, {
      fileName: "app/routes/snop.dashboard.analysis.proeffAnalysis.jsx",
      lineNumber: 348,
      columnNumber: 36
    }, this)) }, void 0, false, {
      fileName: "app/routes/snop.dashboard.analysis.proeffAnalysis.jsx",
      lineNumber: 346,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("footer", { className: "mt-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Ae, { as: "nav", className: "h-16 border-t bg-white", children: ({
      open: open2
    }) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "w-full px-2 py-2 sm:px-2 lg:px-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "justify- flex h-12 items-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h2", { className: "text-md mr-2 font-bold text-gray-500", children: "Supply Analysis" }, void 0, false, {
          fileName: "app/routes/snop.dashboard.analysis.proeffAnalysis.jsx",
          lineNumber: 374,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ChevronDoubleRightIcon_default, { className: "-mr-1 ml-1 h-5 w-5 flex-shrink-0 items-center text-gray-400 group-hover:text-gray-500", "aria-hidden": "true" }, void 0, false, {
          fileName: "app/routes/snop.dashboard.analysis.proeffAnalysis.jsx",
          lineNumber: 377,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "hidden md:block", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex items-baseline", children: navigation.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { href: item.href, className: classNames(item.current ? "bg-blue-500 text-white" : "text-black hover:bg-blue-500 hover:text-white", "text-md mx-2 rounded-md px-5 py-2 font-medium"), "aria-current": item.current ? "page" : void 0, children: item.name }, item.name, false, {
          fileName: "app/routes/snop.dashboard.analysis.proeffAnalysis.jsx",
          lineNumber: 382,
          columnNumber: 51
        }, this)) }, void 0, false, {
          fileName: "app/routes/snop.dashboard.analysis.proeffAnalysis.jsx",
          lineNumber: 381,
          columnNumber: 25
        }, this) }, void 0, false, {
          fileName: "app/routes/snop.dashboard.analysis.proeffAnalysis.jsx",
          lineNumber: 379,
          columnNumber: 23
        }, this) }, void 0, false, {
          fileName: "app/routes/snop.dashboard.analysis.proeffAnalysis.jsx",
          lineNumber: 378,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "-mr-2 flex md:hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Ae.Button, { className: "inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "sr-only", children: "Open main menu" }, void 0, false, {
            fileName: "app/routes/snop.dashboard.analysis.proeffAnalysis.jsx",
            lineNumber: 392,
            columnNumber: 25
          }, this),
          open2 ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(XMarkIcon_default, { className: "block h-6 w-6", "aria-hidden": "true" }, void 0, false, {
            fileName: "app/routes/snop.dashboard.analysis.proeffAnalysis.jsx",
            lineNumber: 393,
            columnNumber: 33
          }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Bars3Icon_default, { className: "block h-6 w-6", "aria-hidden": "true" }, void 0, false, {
            fileName: "app/routes/snop.dashboard.analysis.proeffAnalysis.jsx",
            lineNumber: 393,
            columnNumber: 94
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/snop.dashboard.analysis.proeffAnalysis.jsx",
          lineNumber: 391,
          columnNumber: 23
        }, this) }, void 0, false, {
          fileName: "app/routes/snop.dashboard.analysis.proeffAnalysis.jsx",
          lineNumber: 389,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/snop.dashboard.analysis.proeffAnalysis.jsx",
        lineNumber: 373,
        columnNumber: 19
      }, this) }, void 0, false, {
        fileName: "app/routes/snop.dashboard.analysis.proeffAnalysis.jsx",
        lineNumber: 372,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Ae.Panel, { className: "md:hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "space-y-1 px-2 pb-3 pt-2 sm:px-3", children: navigation.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Ae.Button, { as: "a", href: item.href, className: classNames(item.current ? "bg-gray-900 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white", "block rounded-md px-3 py-2 text-base font-medium"), "aria-current": item.current ? "page" : void 0, children: item.name }, item.name, false, {
        fileName: "app/routes/snop.dashboard.analysis.proeffAnalysis.jsx",
        lineNumber: 401,
        columnNumber: 45
      }, this)) }, void 0, false, {
        fileName: "app/routes/snop.dashboard.analysis.proeffAnalysis.jsx",
        lineNumber: 400,
        columnNumber: 19
      }, this) }, void 0, false, {
        fileName: "app/routes/snop.dashboard.analysis.proeffAnalysis.jsx",
        lineNumber: 399,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/snop.dashboard.analysis.proeffAnalysis.jsx",
      lineNumber: 371,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/routes/snop.dashboard.analysis.proeffAnalysis.jsx",
      lineNumber: 368,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/snop.dashboard.analysis.proeffAnalysis.jsx",
      lineNumber: 367,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/snop.dashboard.analysis.proeffAnalysis.jsx",
    lineNumber: 176,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/snop.dashboard.analysis.proeffAnalysis.jsx",
    lineNumber: 172,
    columnNumber: 10
  }, this);
}
_s(ProEffieciencyAnalysisRoute, "xG1TONbKtDWtdOTrXaTAsNhPg/Q=");
_c = ProEffieciencyAnalysisRoute;
var _c;
$RefreshReg$(_c, "ProEffieciencyAnalysisRoute");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  ProEffieciencyAnalysisRoute as default
};
//# sourceMappingURL=/build/routes/snop.dashboard.analysis.proeffAnalysis-KG3Y54KN.js.map
