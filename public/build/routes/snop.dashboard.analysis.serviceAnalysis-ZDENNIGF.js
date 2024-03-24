import {
  kpiInv_m,
  kpiService_m
} from "/build/_shared/chunk-Q3ZRF3CQ.js";
import "/build/_shared/chunk-XBDTUPGL.js";
import {
  Form
} from "/build/_shared/chunk-NON4LQMM.js";
import "/build/_shared/chunk-QRAMQPBO.js";
import {
  _t
} from "/build/_shared/chunk-GY2ISSS6.js";
import "/build/_shared/chunk-GFA5MC6N.js";
import {
  qe
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
  FunnelIcon_default,
  XMarkIcon_default
} from "/build/_shared/chunk-QA7IBH2P.js";
import "/build/_shared/chunk-JKKPAHGM.js";
import "/build/_shared/chunk-OP7Q5FNF.js";
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

// app/routes/snop.dashboard.analysis.serviceAnalysis.jsx
var import_react = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\snop.dashboard.analysis.serviceAnalysis.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\snop.dashboard.analysis.serviceAnalysis.jsx"
  );
  import.meta.hot.lastModified = "1711092397956.346";
}
var navigation = [{
  name: "Service",
  href: "/snop/dashboard/analysis/serviceAnalysis",
  current: true
}, {
  name: "SKU",
  href: "/snop/dashboard/analysis/skuAnalysis",
  current: false
}, {
  name: "SKU Pro",
  href: "/snop/dashboard/analysis/skuproAnalysis",
  current: false
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
var stats2 = [{
  name: "DC 4 Change to last Week",
  stat: "-0.4M"
}, {
  name: "DC 3 Change to last Week ",
  stat: "+0.7M"
}, {
  name: "DC 2 Change to last Week",
  stat: "-4.2M"
}, {
  name: "DC 1 Change to last Week",
  stat: "+5.5M"
}];
var ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
function OverviewAnalysisRoute() {
  _s();
  ;
  const [location, setLocation] = (0, import_react.useState)("");
  const [animal, setAnimal] = (0, import_react.useState)("");
  const [breed, setBreed] = (0, import_react.useState)("");
  const [pets, setPets] = (0, import_react.useState)([]);
  const breeds = [];
  (0, import_react.useEffect)(() => {
    requestPets();
  }, []);
  async function requestPets() {
    const res = await fetch(`http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`);
    const json = await res.json();
    setPets(json.pets);
  }
  function handleChange(e) {
    setLocation(e.target.value);
  }
  const [slideopen, setslideOpen] = (0, import_react.useState)(false);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full h-screen", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: " bg-slate-600 ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "ml-4 flex h-16 items-center justify-start", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "hidden md:block", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-3xl font-bold text-white", children: "Service & Inventory Performance" }, void 0, false, {
        fileName: "app/routes/snop.dashboard.analysis.serviceAnalysis.jsx",
        lineNumber: 106,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "app/routes/snop.dashboard.analysis.serviceAnalysis.jsx",
        lineNumber: 105,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/routes/snop.dashboard.analysis.serviceAnalysis.jsx",
        lineNumber: 104,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/snop.dashboard.analysis.serviceAnalysis.jsx",
        lineNumber: 103,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/snop.dashboard.analysis.serviceAnalysis.jsx",
        lineNumber: 102,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", className: "top-15 fixed right-0 mt-4 flex cursor-pointer items-center \n                rounded-l-lg border bg-white p-2 text-sm font-semibold text-gray-900 shadow-xl hover:bg-rose-600 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2", onClick: () => setslideOpen(!slideopen), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AdjustmentsHorizontalIcon_default, { className: "h-5 w-5 items-center", "aria-hidden": "true" }, void 0, false, {
        fileName: "app/routes/snop.dashboard.analysis.serviceAnalysis.jsx",
        lineNumber: 115,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/snop.dashboard.analysis.serviceAnalysis.jsx",
        lineNumber: 113,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dl", { className: "mx-4 my-2 grid grid-cols-1 gap-6  lg:grid-cols-4", children: stats.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "items-center overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dt", { className: "truncate text-center text-lg font-medium text-gray-500", children: item.name }, void 0, false, {
            fileName: "app/routes/snop.dashboard.analysis.serviceAnalysis.jsx",
            lineNumber: 123,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dd", { className: "mt-1 text-center text-4xl font-bold tracking-tight  text-gray-900  lg:text-5xl", children: item.stat }, void 0, false, {
            fileName: "app/routes/snop.dashboard.analysis.serviceAnalysis.jsx",
            lineNumber: 126,
            columnNumber: 17
          }, this)
        ] }, item.name, true, {
          fileName: "app/routes/snop.dashboard.analysis.serviceAnalysis.jsx",
          lineNumber: 122,
          columnNumber: 32
        }, this)) }, void 0, false, {
          fileName: "app/routes/snop.dashboard.analysis.serviceAnalysis.jsx",
          lineNumber: 121,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute inset-0 flex items-center", "aria-hidden": "true", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mx-4 w-full border-t border-gray-200" }, void 0, false, {
          fileName: "app/routes/snop.dashboard.analysis.serviceAnalysis.jsx",
          lineNumber: 133,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/snop.dashboard.analysis.serviceAnalysis.jsx",
          lineNumber: 132,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/routes/snop.dashboard.analysis.serviceAnalysis.jsx",
          lineNumber: 131,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/snop.dashboard.analysis.serviceAnalysis.jsx",
        lineNumber: 120,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { className: "mx-4 my-4 grid grid-cols-1  gap-6 md:grid-cols-2 ", children: kpiService_m.map((kpi) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { className: "col-span-1 flex flex-col divide-y divide-white rounded-lg bg-white shadow-xl shadow-slate-900/10", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative flex flex-1 flex-col py-2 pl-3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-baseline gap-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-base m-2 font-medium text-gray-900", children: kpi.Name }, void 0, false, {
            fileName: "app/routes/snop.dashboard.analysis.serviceAnalysis.jsx",
            lineNumber: 145,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "font-display  mb-3 text-4xl font-bold text-black", children: kpi.Value }, void 0, false, {
            fileName: "app/routes/snop.dashboard.analysis.serviceAnalysis.jsx",
            lineNumber: 148,
            columnNumber: 21
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/snop.dashboard.analysis.serviceAnalysis.jsx",
          lineNumber: 144,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "app/routes/snop.dashboard.analysis.serviceAnalysis.jsx",
          lineNumber: 143,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: kpi.container }, void 0, false, {
          fileName: "app/routes/snop.dashboard.analysis.serviceAnalysis.jsx",
          lineNumber: 153,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/snop.dashboard.analysis.serviceAnalysis.jsx",
        lineNumber: 142,
        columnNumber: 15
      }, this) }, kpi.Name, false, {
        fileName: "app/routes/snop.dashboard.analysis.serviceAnalysis.jsx",
        lineNumber: 141,
        columnNumber: 36
      }, this)) }, void 0, false, {
        fileName: "app/routes/snop.dashboard.analysis.serviceAnalysis.jsx",
        lineNumber: 140,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dl", { className: "mx-4 mb-2 mt-4 grid grid-cols-1 gap-6  lg:grid-cols-4", children: stats2.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "items-center overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dt", { className: "truncate text-center text-lg font-medium text-gray-500", children: item.name }, void 0, false, {
            fileName: "app/routes/snop.dashboard.analysis.serviceAnalysis.jsx",
            lineNumber: 161,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dd", { className: "mt-1 text-center text-4xl font-bold tracking-tight  text-gray-900  lg:text-5xl", children: item.stat }, void 0, false, {
            fileName: "app/routes/snop.dashboard.analysis.serviceAnalysis.jsx",
            lineNumber: 164,
            columnNumber: 17
          }, this)
        ] }, item.name, true, {
          fileName: "app/routes/snop.dashboard.analysis.serviceAnalysis.jsx",
          lineNumber: 160,
          columnNumber: 33
        }, this)) }, void 0, false, {
          fileName: "app/routes/snop.dashboard.analysis.serviceAnalysis.jsx",
          lineNumber: 159,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute inset-0 flex items-center", "aria-hidden": "true", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mx-4 w-full border-t border-gray-200" }, void 0, false, {
          fileName: "app/routes/snop.dashboard.analysis.serviceAnalysis.jsx",
          lineNumber: 171,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/snop.dashboard.analysis.serviceAnalysis.jsx",
          lineNumber: 170,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/routes/snop.dashboard.analysis.serviceAnalysis.jsx",
          lineNumber: 169,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/snop.dashboard.analysis.serviceAnalysis.jsx",
        lineNumber: 158,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { className: "mx-4 my-4 grid grid-cols-1 gap-6  ", children: kpiInv_m.map((kpi) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { className: "col-span-1 flex flex-col divide-y divide-white rounded-lg bg-white shadow-xl shadow-slate-900/10", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative flex flex-1 flex-col py-2 pl-3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-baseline gap-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-base m-2 font-medium text-gray-900", children: kpi.Name }, void 0, false, {
            fileName: "app/routes/snop.dashboard.analysis.serviceAnalysis.jsx",
            lineNumber: 183,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "font-display  mb-3 text-4xl font-bold text-black", children: kpi.Value }, void 0, false, {
            fileName: "app/routes/snop.dashboard.analysis.serviceAnalysis.jsx",
            lineNumber: 186,
            columnNumber: 21
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/snop.dashboard.analysis.serviceAnalysis.jsx",
          lineNumber: 182,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "app/routes/snop.dashboard.analysis.serviceAnalysis.jsx",
          lineNumber: 181,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: kpi.container }, void 0, false, {
          fileName: "app/routes/snop.dashboard.analysis.serviceAnalysis.jsx",
          lineNumber: 191,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/snop.dashboard.analysis.serviceAnalysis.jsx",
        lineNumber: 180,
        columnNumber: 15
      }, this) }, kpi.Name, false, {
        fileName: "app/routes/snop.dashboard.analysis.serviceAnalysis.jsx",
        lineNumber: 179,
        columnNumber: 32
      }, this)) }, void 0, false, {
        fileName: "app/routes/snop.dashboard.analysis.serviceAnalysis.jsx",
        lineNumber: 178,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("footer", { className: "mt-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Ae, { as: "nav", className: "h-16 border-t bg-white", children: ({
        open
      }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full px-2 py-2 sm:px-2 lg:px-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex h-12 items-center justify-start", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-md mr-2 font-bold text-gray-500", children: "Demand Analysis" }, void 0, false, {
            fileName: "app/routes/snop.dashboard.analysis.serviceAnalysis.jsx",
            lineNumber: 203,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChevronDoubleRightIcon_default, { className: "-mr-1 ml-1 h-5 w-5 flex-shrink-0 items-center text-gray-400 group-hover:text-gray-500", "aria-hidden": "true" }, void 0, false, {
            fileName: "app/routes/snop.dashboard.analysis.serviceAnalysis.jsx",
            lineNumber: 206,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "hidden md:block", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-baseline", children: navigation.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: item.href, className: classNames(item.current ? "bg-blue-500 text-white" : "text-black hover:bg-blue-500 hover:text-white", "text-md mx-2 rounded-md px-5 py-2 font-medium"), "aria-current": item.current ? "page" : void 0, children: item.name }, item.name, false, {
            fileName: "app/routes/snop.dashboard.analysis.serviceAnalysis.jsx",
            lineNumber: 211,
            columnNumber: 51
          }, this)) }, void 0, false, {
            fileName: "app/routes/snop.dashboard.analysis.serviceAnalysis.jsx",
            lineNumber: 210,
            columnNumber: 25
          }, this) }, void 0, false, {
            fileName: "app/routes/snop.dashboard.analysis.serviceAnalysis.jsx",
            lineNumber: 208,
            columnNumber: 23
          }, this) }, void 0, false, {
            fileName: "app/routes/snop.dashboard.analysis.serviceAnalysis.jsx",
            lineNumber: 207,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "-mr-2 flex md:hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Ae.Button, { className: "inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "sr-only", children: "Open main menu" }, void 0, false, {
              fileName: "app/routes/snop.dashboard.analysis.serviceAnalysis.jsx",
              lineNumber: 221,
              columnNumber: 25
            }, this),
            open ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(XMarkIcon_default, { className: "block h-6 w-6", "aria-hidden": "true" }, void 0, false, {
              fileName: "app/routes/snop.dashboard.analysis.serviceAnalysis.jsx",
              lineNumber: 222,
              columnNumber: 33
            }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Bars3Icon_default, { className: "block h-6 w-6", "aria-hidden": "true" }, void 0, false, {
              fileName: "app/routes/snop.dashboard.analysis.serviceAnalysis.jsx",
              lineNumber: 222,
              columnNumber: 94
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/snop.dashboard.analysis.serviceAnalysis.jsx",
            lineNumber: 220,
            columnNumber: 23
          }, this) }, void 0, false, {
            fileName: "app/routes/snop.dashboard.analysis.serviceAnalysis.jsx",
            lineNumber: 218,
            columnNumber: 21
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/snop.dashboard.analysis.serviceAnalysis.jsx",
          lineNumber: 202,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "app/routes/snop.dashboard.analysis.serviceAnalysis.jsx",
          lineNumber: 201,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Ae.Panel, { className: "md:hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-1 px-2 pb-3 pt-2 sm:px-3", children: navigation.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Ae.Button, { as: "a", href: item.href, className: classNames(item.current ? "bg-gray-900 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white", "block rounded-md px-3 py-2 text-base font-medium"), "aria-current": item.current ? "page" : void 0, children: item.name }, item.name, false, {
          fileName: "app/routes/snop.dashboard.analysis.serviceAnalysis.jsx",
          lineNumber: 230,
          columnNumber: 45
        }, this)) }, void 0, false, {
          fileName: "app/routes/snop.dashboard.analysis.serviceAnalysis.jsx",
          lineNumber: 229,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "app/routes/snop.dashboard.analysis.serviceAnalysis.jsx",
          lineNumber: 228,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/snop.dashboard.analysis.serviceAnalysis.jsx",
        lineNumber: 200,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "app/routes/snop.dashboard.analysis.serviceAnalysis.jsx",
        lineNumber: 197,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/snop.dashboard.analysis.serviceAnalysis.jsx",
        lineNumber: 196,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/snop.dashboard.analysis.serviceAnalysis.jsx",
      lineNumber: 101,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(qe.Root, { show: slideopen, as: import_react.Fragment, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(_t, { as: "div", className: "relative z-10", onClose: setslideOpen, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "fixed inset-0 mt-10", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "pointer-events-none ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(qe.Child, { as: import_react.Fragment, enter: "transform transition ease-in-out duration-500 sm:duration-700", enterFrom: "translate-x-full -translate-y-1/3", enterTo: "translate-x-0", leave: "transform transition ease-in-out duration-500 sm:duration-700", leaveFrom: "translate-x-0", leaveTo: "translate-x-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(_t.Panel, { className: "top-15 pointer-events-auto fixed right-0 z-10", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: " ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { "aria-labelledby": "filter-heading", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "my-4 rounded-lg border bg-white py-2 shadow-2xl", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "px-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flow-root", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "-mx-4  flex items-center divide-x divide-gray-200", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "mx-4 inline-flex", children: "Filters" }, void 0, false, {
        fileName: "app/routes/snop.dashboard.analysis.serviceAnalysis.jsx",
        lineNumber: 255,
        columnNumber: 33
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { onSubmit: (e) => {
        e.preventDefault();
        requestPets();
      }, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "location", className: "ml-4", children: [
          "Location",
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { id: "location", value: location, placeholder: "Location", onChange: handleChange, className: "mx-4" }, void 0, false, {
            fileName: "app/routes/snop.dashboard.analysis.serviceAnalysis.jsx",
            lineNumber: 264,
            columnNumber: 37
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/snop.dashboard.analysis.serviceAnalysis.jsx",
          lineNumber: 262,
          columnNumber: 35
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "animal", className: "mx-2", children: [
          "Animal",
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("select", { id: "animal", value: animal, className: "mx-2", onChange: (e) => setAnimal(e.target.value), children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", {}, void 0, false, {
              fileName: "app/routes/snop.dashboard.analysis.serviceAnalysis.jsx",
              lineNumber: 270,
              columnNumber: 39
            }, this),
            ANIMALS.map((animal2) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: animal2, children: animal2 }, animal2, false, {
              fileName: "app/routes/snop.dashboard.analysis.serviceAnalysis.jsx",
              lineNumber: 271,
              columnNumber: 62
            }, this))
          ] }, void 0, true, {
            fileName: "app/routes/snop.dashboard.analysis.serviceAnalysis.jsx",
            lineNumber: 269,
            columnNumber: 37
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/snop.dashboard.analysis.serviceAnalysis.jsx",
          lineNumber: 267,
          columnNumber: 35
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "breed", className: "mx-2", children: [
          "Breed",
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("select", { disabled: !breeds.length, id: "breed", value: breed, onChange: (e) => setBreed(e.target.value), onBlur: (e) => setBreed(e.target.value), className: "mx-2", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", {}, void 0, false, {
              fileName: "app/routes/snop.dashboard.analysis.serviceAnalysis.jsx",
              lineNumber: 280,
              columnNumber: 39
            }, this),
            breeds.map((breed2) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: breed2, children: breed2 }, breed2, false, {
              fileName: "app/routes/snop.dashboard.analysis.serviceAnalysis.jsx",
              lineNumber: 281,
              columnNumber: 60
            }, this))
          ] }, void 0, true, {
            fileName: "app/routes/snop.dashboard.analysis.serviceAnalysis.jsx",
            lineNumber: 279,
            columnNumber: 37
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/snop.dashboard.analysis.serviceAnalysis.jsx",
          lineNumber: 277,
          columnNumber: 35
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "m-1 inline-flex ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", className: "rounded-full border bg-gray-200 p-2 hover:bg-gray-100 ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FunnelIcon_default, { className: "h-4 w-4 text-gray-500", "aria-hidden": "true" }, void 0, false, {
          fileName: "app/routes/snop.dashboard.analysis.serviceAnalysis.jsx",
          lineNumber: 289,
          columnNumber: 39
        }, this) }, void 0, false, {
          fileName: "app/routes/snop.dashboard.analysis.serviceAnalysis.jsx",
          lineNumber: 288,
          columnNumber: 37
        }, this) }, void 0, false, {
          fileName: "app/routes/snop.dashboard.analysis.serviceAnalysis.jsx",
          lineNumber: 287,
          columnNumber: 35
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/snop.dashboard.analysis.serviceAnalysis.jsx",
        lineNumber: 258,
        columnNumber: 33
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", className: "mx-2 flex items-center pr-2 text-gray-500 hover:text-gray-900", onClick: () => setslideOpen(false), children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "sr-only", children: "Close panel" }, void 0, false, {
          fileName: "app/routes/snop.dashboard.analysis.serviceAnalysis.jsx",
          lineNumber: 294,
          columnNumber: 35
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(XMarkIcon_default, { className: "h-4 w-4  ", "aria-hidden": "true" }, void 0, false, {
          fileName: "app/routes/snop.dashboard.analysis.serviceAnalysis.jsx",
          lineNumber: 295,
          columnNumber: 35
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/snop.dashboard.analysis.serviceAnalysis.jsx",
        lineNumber: 293,
        columnNumber: 33
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/snop.dashboard.analysis.serviceAnalysis.jsx",
      lineNumber: 254,
      columnNumber: 31
    }, this) }, void 0, false, {
      fileName: "app/routes/snop.dashboard.analysis.serviceAnalysis.jsx",
      lineNumber: 253,
      columnNumber: 29
    }, this) }, void 0, false, {
      fileName: "app/routes/snop.dashboard.analysis.serviceAnalysis.jsx",
      lineNumber: 252,
      columnNumber: 27
    }, this) }, void 0, false, {
      fileName: "app/routes/snop.dashboard.analysis.serviceAnalysis.jsx",
      lineNumber: 251,
      columnNumber: 25
    }, this) }, void 0, false, {
      fileName: "app/routes/snop.dashboard.analysis.serviceAnalysis.jsx",
      lineNumber: 250,
      columnNumber: 23
    }, this) }, void 0, false, {
      fileName: "app/routes/snop.dashboard.analysis.serviceAnalysis.jsx",
      lineNumber: 248,
      columnNumber: 21
    }, this) }, void 0, false, {
      fileName: "app/routes/snop.dashboard.analysis.serviceAnalysis.jsx",
      lineNumber: 247,
      columnNumber: 19
    }, this) }, void 0, false, {
      fileName: "app/routes/snop.dashboard.analysis.serviceAnalysis.jsx",
      lineNumber: 246,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/routes/snop.dashboard.analysis.serviceAnalysis.jsx",
      lineNumber: 245,
      columnNumber: 15
    }, this) }, void 0, false, {
      fileName: "app/routes/snop.dashboard.analysis.serviceAnalysis.jsx",
      lineNumber: 244,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/routes/snop.dashboard.analysis.serviceAnalysis.jsx",
      lineNumber: 243,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/snop.dashboard.analysis.serviceAnalysis.jsx",
      lineNumber: 242,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/snop.dashboard.analysis.serviceAnalysis.jsx",
      lineNumber: 241,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/snop.dashboard.analysis.serviceAnalysis.jsx",
    lineNumber: 100,
    columnNumber: 10
  }, this);
}
_s(OverviewAnalysisRoute, "xoFHocUktJrWL3a13L1AzP/KnwI=");
_c = OverviewAnalysisRoute;
var _c;
$RefreshReg$(_c, "OverviewAnalysisRoute");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  OverviewAnalysisRoute as default
};
//# sourceMappingURL=/build/routes/snop.dashboard.analysis.serviceAnalysis-ZDENNIGF.js.map
