import {
  DropDownList
} from "/build/_shared/chunk-EZN6HZAL.js";
import "/build/_shared/chunk-TNTLQMTW.js";
import "/build/_shared/chunk-CO7DHVOA.js";
import "/build/_shared/chunk-ELWJTL4F.js";
import {
  Link
} from "/build/_shared/chunk-NON4LQMM.js";
import {
  _t
} from "/build/_shared/chunk-GY2ISSS6.js";
import "/build/_shared/chunk-GFA5MC6N.js";
import {
  qe
} from "/build/_shared/chunk-I5FVCQST.js";
import "/build/_shared/chunk-J5ZDEXRM.js";
import "/build/_shared/chunk-FNVTLCHO.js";
import "/build/_shared/chunk-X4JIH5W5.js";
import {
  CheckBadgeIcon_default,
  CheckCircleIcon_default,
  ExclamationTriangleIcon_default,
  ShieldExclamationIcon_default,
  XMarkIcon_default
} from "/build/_shared/chunk-QA7IBH2P.js";
import "/build/_shared/chunk-JKKPAHGM.js";
import "/build/_shared/chunk-EZ7JG6XF.js";
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

// app/routes/snop.dashboard.actions.overview.jsx
var import_react = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\snop.dashboard.actions.overview.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\snop.dashboard.actions.overview.jsx"
  );
  import.meta.hot.lastModified = "1711090692734.6086";
}
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
var summary = [{
  type: "MOM Sales Forcast Change",
  high: "23",
  medium: "54",
  low: "-",
  total: "77"
}, {
  type: "Unsatisfied Demand by Item",
  high: "23",
  medium: "54",
  low: "374",
  total: "374"
}, {
  type: "Unsatisfied Demand by Product Line",
  high: "-",
  medium: "-",
  low: "8",
  total: "8"
}];
var details = [{
  site: "Dallas",
  customer: "Best Buy",
  item: "GS25-227-2.5G",
  week: "08W14-Apr07",
  date: "12/30/2023",
  month: "2500",
  forcast: "1",
  forechange: "99.96",
  action: "-",
  resolution: "-"
}, {
  site: "Dallas",
  customer: "Best Buy",
  item: "GS25-227-2.5G",
  week: "08W14-Apr14",
  date: "12/30/2023",
  month: "2500",
  forcast: "1",
  forechange: "99.96",
  action: "-",
  resolution: "-"
}, {
  site: "Dallas",
  customer: "Best Buy",
  item: "GS25-227-2.5G",
  week: "08W14-Apr21",
  date: "12/30/2023",
  month: "2500",
  forcast: "1",
  forechange: "99.96",
  action: "-",
  resolution: "-"
}, {
  site: "Dallas",
  customer: "Best Buy",
  item: "GS25-227-2.5G",
  week: "08W14-Apr28",
  date: "12/30/2023",
  month: "1670",
  forcast: "2",
  forechange: "99.88",
  action: "-",
  resolution: "-"
}, {
  site: "Dallas",
  customer: "Best Buy",
  item: "GS25-227-2.5G",
  week: "08W14-May05",
  date: "12/30/2023",
  month: "2500",
  forcast: "1",
  forechange: "99.96",
  action: "-",
  resolution: "-"
}, {
  site: "Dallas",
  customer: "Best Buy",
  item: "GS25-227-2.5G",
  week: "08W14-May12",
  date: "12/30/2023",
  month: "2500",
  forcast: "1",
  forechange: "99.96",
  action: "-",
  resolution: "-"
}, {
  site: "Dallas",
  customer: "Best Buy",
  item: "GS25-227-2.5G",
  week: "08W14-May19",
  date: "12/30/2023",
  month: "2500",
  forcast: "1",
  forechange: "99.96",
  action: "-",
  resolution: "-"
}, {
  site: "Dallas",
  customer: "Best Buy",
  item: "GS25-227-2.5G",
  week: "08W14-May26",
  date: "12/30/2023",
  month: "1670",
  forcast: "2",
  forechange: "99.88",
  action: "-",
  resolution: "-"
}, {
  site: "Dallas",
  customer: "Best Buy",
  item: "GS25-227-2.5G",
  week: "08W14-Jun02",
  date: "12/30/2023",
  month: "1999",
  forcast: "1",
  forechange: "99.95",
  action: "-",
  resolution: "-"
}, {
  site: "Miami",
  customer: "Wal Mart",
  item: "LC36-2500",
  week: "08W14-Apr07",
  date: "12/30/2023",
  month: "275",
  forcast: "106",
  forechange: "61.45",
  action: "-",
  resolution: "-"
}, {
  site: "Miami",
  customer: "Wal Buy",
  item: "LC36-2500",
  week: "08W14-Apr14",
  date: "12/30/2023",
  month: "275",
  forcast: "106",
  forechange: "61.45",
  action: "-",
  resolution: "-"
}, {
  site: "Miami",
  customer: "Wal Buy",
  item: "LC36-2500",
  week: "08W14-Apr21",
  date: "12/30/2023",
  month: "275",
  forcast: "105",
  forechange: "61.82",
  action: "-",
  resolution: "-"
}, {
  site: "Miami",
  customer: "Wal Buy",
  item: "LC36-2500",
  week: "08W14-May05",
  date: "12/30/2023",
  month: "285",
  forcast: "105",
  forechange: "63.16",
  action: "-",
  resolution: "-"
}, {
  site: "Miami",
  customer: "Wal Buy",
  item: "LC36-2500",
  week: "08W14-May12",
  date: "12/30/2023",
  month: "284",
  forcast: "105",
  forechange: "63.03",
  action: "-",
  resolution: "-"
}, {
  site: "Miami",
  customer: "Wal Buy",
  item: "LC36-2500",
  week: "08W14-May19",
  date: "12/30/2023",
  month: "284",
  forcast: "105",
  forechange: "63.03",
  action: "-",
  resolution: "-"
}, {
  site: "Miami",
  customer: "Wal Buy",
  item: "LC36-2500",
  week: "08W14-Jun02",
  date: "12/30/2023",
  month: "210",
  forcast: "89",
  forechange: "57.62",
  action: "-",
  resolution: "-"
}];
var option = ["Price drop", "Rebate", "Tv ad"];
var status = ["Open"];
var assign = ["Admin", "Sales", "Marketing"];
var meeting = ["Supply Review Mfg", "Demand Review Mfg", "Executive Review Mfg"];
var card = [{
  id: 1,
  name: "Exceptions",
  value: "20",
  icon: CheckBadgeIcon_default,
  iconForeground: "text-rose-700",
  iconBackground: "bg-rose-100",
  to: "/snop/dashboard/campaign"
}, {
  id: 2,
  name: "Action Items",
  icon: ShieldExclamationIcon_default,
  iconForeground: "text-blue-700",
  iconBackground: "bg-blue-100",
  value: "30",
  to: "/snop/dashboard/campaign"
}, {
  id: 3,
  name: "Alerts",
  icon: ExclamationTriangleIcon_default,
  iconForeground: "text-yellow-700",
  iconBackground: "bg-yellow-100",
  value: "50",
  to: "/snop/dashboard/campaign"
}, {
  id: 4,
  name: "Approvals",
  icon: CheckCircleIcon_default,
  iconForeground: "text-green-700",
  iconBackground: "bg-green-100",
  value: "49",
  to: "/snop/dashboard/campaign"
}];
function Example() {
  _s();
  const checkbox = (0, import_react.useRef)();
  const [checked, setChecked] = (0, import_react.useState)(false);
  const [indeterminate, setIndeterminate] = (0, import_react.useState)(false);
  const [selecteddetails, setSelecteddetails] = (0, import_react.useState)([]);
  (0, import_react.useLayoutEffect)(() => {
    const isIndeterminate = selecteddetails.length > 0 && selecteddetails.length < details.length;
    setChecked(selecteddetails.length === details.length);
    setIndeterminate(isIndeterminate);
    checkbox.current.indeterminate = isIndeterminate;
  }, [selecteddetails]);
  function toggleAll() {
    setSelecteddetails(checked || indeterminate ? [] : details);
    setChecked(!checked && !indeterminate);
    setIndeterminate(false);
  }
  const [openRes, setOpenRes] = (0, import_react.useState)(false);
  const [openAction, setOpenAction] = (0, import_react.useState)(false);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full bg-sky-500", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "ml-4 flex h-16 items-center justify-start", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "hidden md:block", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-3xl font-bold text-white", children: "Alerts & Notification" }, void 0, false, {
      fileName: "app/routes/snop.dashboard.actions.overview.jsx",
      lineNumber: 287,
      columnNumber: 15
    }, this) }, void 0, false, {
      fileName: "app/routes/snop.dashboard.actions.overview.jsx",
      lineNumber: 286,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/routes/snop.dashboard.actions.overview.jsx",
      lineNumber: 285,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/snop.dashboard.actions.overview.jsx",
      lineNumber: 284,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/snop.dashboard.actions.overview.jsx",
      lineNumber: 283,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mx-auto w-full px-4 py-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { className: "grid grid-cols-2 gap-5 lg:grid-cols-4", children: card.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { value: card, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: item.to, className: "focus:outline ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { className: classNames(item.iconBackground, " rounded-lg border p-4 shadow-lg "), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center align-middle", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: classNames(item.iconBackground, item.iconForeground, "mr-6"), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(item.icon, { className: "h-16 w-16 " }, void 0, false, {
        fileName: "app/routes/snop.dashboard.actions.overview.jsx",
        lineNumber: 302,
        columnNumber: 25
      }, this) }, void 0, false, {
        fileName: "app/routes/snop.dashboard.actions.overview.jsx",
        lineNumber: 301,
        columnNumber: 23
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col justify-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: classNames(item.iconForeground, "text-base font-semibold uppercase"), children: item.name }, void 0, false, {
          fileName: "app/routes/snop.dashboard.actions.overview.jsx",
          lineNumber: 306,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-5xl font-medium text-gray-700", children: item.value }, void 0, false, {
          fileName: "app/routes/snop.dashboard.actions.overview.jsx",
          lineNumber: 309,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/snop.dashboard.actions.overview.jsx",
        lineNumber: 305,
        columnNumber: 23
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/snop.dashboard.actions.overview.jsx",
      lineNumber: 300,
      columnNumber: 21
    }, this) }, void 0, false, {
      fileName: "app/routes/snop.dashboard.actions.overview.jsx",
      lineNumber: 299,
      columnNumber: 19
    }, this) }, void 0, false, {
      fileName: "app/routes/snop.dashboard.actions.overview.jsx",
      lineNumber: 298,
      columnNumber: 17
    }, this) }, card.name, false, {
      fileName: "app/routes/snop.dashboard.actions.overview.jsx",
      lineNumber: 297,
      columnNumber: 31
    }, this)) }, void 0, false, {
      fileName: "app/routes/snop.dashboard.actions.overview.jsx",
      lineNumber: 296,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/snop.dashboard.actions.overview.jsx",
      lineNumber: 295,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/snop.dashboard.actions.overview.jsx",
      lineNumber: 294,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mx-4 border-b-2  border-gray-300" }, void 0, false, {
      fileName: "app/routes/snop.dashboard.actions.overview.jsx",
      lineNumber: 322,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mx-4 my-4 grid grid-cols-3 ", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mr-3 rounded-lg bg-white p-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "rounded-lg border bg-slate-600 md:flex md:items-center md:justify-between", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "min-w-0 flex-1 p-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-xl font-semibold leading-6 text-white", children: "Exception Summary" }, void 0, false, {
            fileName: "app/routes/snop.dashboard.actions.overview.jsx",
            lineNumber: 329,
            columnNumber: 15
          }, this) }, void 0, false, {
            fileName: "app/routes/snop.dashboard.actions.overview.jsx",
            lineNumber: 328,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mr-2 mt-4 flex md:ml-4 md:mt-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", className: "ml-3 inline-flex items-center rounded-md bg-rose-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-rose-600", children: "Publish" }, void 0, false, {
            fileName: "app/routes/snop.dashboard.actions.overview.jsx",
            lineNumber: 334,
            columnNumber: 15
          }, this) }, void 0, false, {
            fileName: "app/routes/snop.dashboard.actions.overview.jsx",
            lineNumber: 333,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/snop.dashboard.actions.overview.jsx",
          lineNumber: 327,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white pt-4 ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-4 ring-1 ring-gray-200 sm:mx-0 sm:rounded-lg ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "items-center overflow-x-auto align-middle", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("table", { className: "min-w-full divide-y divide-gray-300 ", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("thead", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { scope: "col", className: "bg-gray-100 px-2 py-3.5 text-center text-sm  font-semibold text-gray-700 ring-gray-500/10", children: "Exception Type" }, void 0, false, {
              fileName: "app/routes/snop.dashboard.actions.overview.jsx",
              lineNumber: 346,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { scope: "col", className: "bg-red-50 px-4 py-3.5 text-center text-sm font-semibold text-red-700 ring-red-600/10", children: "High" }, void 0, false, {
              fileName: "app/routes/snop.dashboard.actions.overview.jsx",
              lineNumber: 349,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { scope: "col", className: "bg-green-50 px-4 py-3.5 text-center text-sm font-semibold text-green-700 ring-green-600/20", children: "Medium" }, void 0, false, {
              fileName: "app/routes/snop.dashboard.actions.overview.jsx",
              lineNumber: 352,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { scope: "col", className: "bg-yellow-50 py-3.5 pl-4 pr-4 text-center text-sm font-semibold text-yellow-600 ring-yellow-500/10 sm:pr-0", children: "Low" }, void 0, false, {
              fileName: "app/routes/snop.dashboard.actions.overview.jsx",
              lineNumber: 355,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { scope: "col", className: "bg-blue-50 py-3.5 pl-4 pr-4 text-center text-sm font-semibold text-blue-600 ring-blue-500/10", children: "Total" }, void 0, false, {
              fileName: "app/routes/snop.dashboard.actions.overview.jsx",
              lineNumber: 358,
              columnNumber: 23
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/snop.dashboard.actions.overview.jsx",
            lineNumber: 345,
            columnNumber: 21
          }, this) }, void 0, false, {
            fileName: "app/routes/snop.dashboard.actions.overview.jsx",
            lineNumber: 344,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tbody", { className: "bg-white", children: summary.map((summary2) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { className: "mx-2 even:bg-gray-100", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "whitespace-nowrap p-4 text-left text-sm font-medium text-gray-900 ", children: summary2.type }, void 0, false, {
              fileName: "app/routes/snop.dashboard.actions.overview.jsx",
              lineNumber: 366,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "whitespace-nowrap p-4 text-center text-sm", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { href: "#", className: "text-blue-500 hover:text-blue-900 hover:underline", children: summary2.high }, void 0, false, {
              fileName: "app/routes/snop.dashboard.actions.overview.jsx",
              lineNumber: 370,
              columnNumber: 27
            }, this) }, void 0, false, {
              fileName: "app/routes/snop.dashboard.actions.overview.jsx",
              lineNumber: 369,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "whitespace-nowrap p-4 text-center text-sm ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { href: "#", className: "text-blue-500 hover:text-blue-900 hover:underline", children: summary2.medium }, void 0, false, {
              fileName: "app/routes/snop.dashboard.actions.overview.jsx",
              lineNumber: 375,
              columnNumber: 27
            }, this) }, void 0, false, {
              fileName: "app/routes/snop.dashboard.actions.overview.jsx",
              lineNumber: 374,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "whitespace-nowrap p-4 text-center text-sm", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { href: "#", className: "text-blue-500 hover:text-blue-900 hover:underline", children: summary2.low }, void 0, false, {
              fileName: "app/routes/snop.dashboard.actions.overview.jsx",
              lineNumber: 380,
              columnNumber: 27
            }, this) }, void 0, false, {
              fileName: "app/routes/snop.dashboard.actions.overview.jsx",
              lineNumber: 379,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "whitespace-nowrap py-4 pl-4 pr-4 text-center text-sm font-medium sm:pr-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { href: "#", className: "text-blue-500 hover:text-blue-900 hover:underline", children: summary2.total }, void 0, false, {
              fileName: "app/routes/snop.dashboard.actions.overview.jsx",
              lineNumber: 385,
              columnNumber: 27
            }, this) }, void 0, false, {
              fileName: "app/routes/snop.dashboard.actions.overview.jsx",
              lineNumber: 384,
              columnNumber: 25
            }, this)
          ] }, summary2, true, {
            fileName: "app/routes/snop.dashboard.actions.overview.jsx",
            lineNumber: 365,
            columnNumber: 45
          }, this)) }, void 0, false, {
            fileName: "app/routes/snop.dashboard.actions.overview.jsx",
            lineNumber: 364,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/snop.dashboard.actions.overview.jsx",
          lineNumber: 343,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/routes/snop.dashboard.actions.overview.jsx",
          lineNumber: 342,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/snop.dashboard.actions.overview.jsx",
          lineNumber: 341,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/routes/snop.dashboard.actions.overview.jsx",
          lineNumber: 340,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/snop.dashboard.actions.overview.jsx",
        lineNumber: 325,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "col-span-2 ml-1.5 rounded-lg", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "rounded-lg bg-white p-4 ", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "rounded-lg border bg-slate-600 md:flex md:items-center md:justify-between", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "min-w-0 flex-1 p-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-xl font-semibold leading-6 text-white", children: "Exception Details" }, void 0, false, {
            fileName: "app/routes/snop.dashboard.actions.overview.jsx",
            lineNumber: 403,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/snop.dashboard.actions.overview.jsx",
            lineNumber: 402,
            columnNumber: 15
          }, this),
          selecteddetails.length > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mr-2 mt-4 flex md:ml-4 md:mt-0", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", className: "text-md ml-3 inline-flex items-center rounded-md  bg-rose-500 px-3 py-2 font-semibold text-white shadow-sm hover:bg-rose-600 ", onClick: () => setOpenAction(!openAction), children: "Link to Action" }, void 0, false, {
              fileName: "app/routes/snop.dashboard.actions.overview.jsx",
              lineNumber: 408,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", className: "text-md ml-3 inline-flex items-center rounded-md  bg-rose-500 px-3 py-2 font-semibold text-white shadow-sm hover:bg-rose-600", onClick: () => setOpenRes(!openRes), children: "Resolution" }, void 0, false, {
              fileName: "app/routes/snop.dashboard.actions.overview.jsx",
              lineNumber: 412,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/snop.dashboard.actions.overview.jsx",
            lineNumber: 407,
            columnNumber: 45
          }, this) : null
        ] }, void 0, true, {
          fileName: "app/routes/snop.dashboard.actions.overview.jsx",
          lineNumber: 401,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white pt-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "rounded-lg border p-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-[576px] overflow-y-auto p-2 align-middle ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("table", { className: "min-w-full divide-y  divide-gray-300", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("thead", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { className: "bg-gray-100", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { scope: "col", className: "relative px-7  sm:w-12 sm:px-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "checkbox", className: "absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-blue-900 focus:ring-blue-900", ref: checkbox, checked, onChange: toggleAll }, void 0, false, {
              fileName: "app/routes/snop.dashboard.actions.overview.jsx",
              lineNumber: 425,
              columnNumber: 27
            }, this) }, void 0, false, {
              fileName: "app/routes/snop.dashboard.actions.overview.jsx",
              lineNumber: 424,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { scope: "col", className: "px-4 py-3.5  text-center text-sm font-semibold text-gray-900 sm:pl-0", children: "Site" }, void 0, false, {
              fileName: "app/routes/snop.dashboard.actions.overview.jsx",
              lineNumber: 427,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { scope: "col", className: "px-4 py-3.5 text-center text-sm font-semibold text-gray-900", children: "Customer" }, void 0, false, {
              fileName: "app/routes/snop.dashboard.actions.overview.jsx",
              lineNumber: 430,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { scope: "col", className: "px-4 py-3.5 text-center text-sm font-semibold text-gray-900", children: "Item" }, void 0, false, {
              fileName: "app/routes/snop.dashboard.actions.overview.jsx",
              lineNumber: 433,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { scope: "col", className: "py-3.5 pl-4 pr-4 text-center text-sm font-semibold text-gray-900 sm:pr-0", children: "Fiscal Week" }, void 0, false, {
              fileName: "app/routes/snop.dashboard.actions.overview.jsx",
              lineNumber: 436,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { scope: "col", className: "py-3.5 pl-4 pr-4 text-center text-sm font-semibold text-gray-900 sm:pr-0", children: "Date Created" }, void 0, false, {
              fileName: "app/routes/snop.dashboard.actions.overview.jsx",
              lineNumber: 439,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { scope: "col", className: "py-3.5 pl-4 pr-4 text-center text-sm font-semibold text-gray-900 sm:pr-0", children: "Previous Month Sales Forecast" }, void 0, false, {
              fileName: "app/routes/snop.dashboard.actions.overview.jsx",
              lineNumber: 442,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { scope: "col", className: "py-3.5 pl-4 pr-4 text-center text-sm font-semibold text-gray-900 sm:pr-0", children: "Sales Forecast" }, void 0, false, {
              fileName: "app/routes/snop.dashboard.actions.overview.jsx",
              lineNumber: 445,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { scope: "col", className: "py-3.5 pl-4 pr-4 text-center text-sm font-semibold text-gray-900 sm:pr-0", children: "MOM Sales Forecast change" }, void 0, false, {
              fileName: "app/routes/snop.dashboard.actions.overview.jsx",
              lineNumber: 448,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { scope: "col", className: "py-3.5 pl-4 pr-4 text-center text-sm font-semibold text-gray-900 sm:pr-0", children: "Action Items" }, void 0, false, {
              fileName: "app/routes/snop.dashboard.actions.overview.jsx",
              lineNumber: 451,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { scope: "col", className: "py-3.5 pl-4 pr-4 text-center text-sm font-semibold text-gray-900 sm:pr-0", children: "Resolution" }, void 0, false, {
              fileName: "app/routes/snop.dashboard.actions.overview.jsx",
              lineNumber: 454,
              columnNumber: 25
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/snop.dashboard.actions.overview.jsx",
            lineNumber: 423,
            columnNumber: 23
          }, this) }, void 0, false, {
            fileName: "app/routes/snop.dashboard.actions.overview.jsx",
            lineNumber: 422,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tbody", { className: " bg-white", children: details.map((detail) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { className: "even:bg-gray-100", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "relative px-7 sm:w-12 sm:px-6", children: [
              selecteddetails.includes(detail) ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute inset-y-0 left-0 w-0.5 bg-blue-500" }, void 0, false, {
                fileName: "app/routes/snop.dashboard.actions.overview.jsx",
                lineNumber: 462,
                columnNumber: 65
              }, this) : null,
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "checkbox", className: "absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-blue-900", value: detail.description, checked: selecteddetails.includes(detail), onChange: (e) => setSelecteddetails(e.target.checked ? [...selecteddetails, detail] : selecteddetails.filter((p) => p !== detail)) }, void 0, false, {
                fileName: "app/routes/snop.dashboard.actions.overview.jsx",
                lineNumber: 463,
                columnNumber: 29
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/snop.dashboard.actions.overview.jsx",
              lineNumber: 461,
              columnNumber: 27
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "whitespace-nowrap py-4 pl-4 pr-4 text-center text-sm font-medium text-gray-900 sm:pl-0", children: detail.site }, void 0, false, {
              fileName: "app/routes/snop.dashboard.actions.overview.jsx",
              lineNumber: 465,
              columnNumber: 27
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "whitespace-nowrap p-4 text-center text-sm text-gray-500", children: detail.customer }, void 0, false, {
              fileName: "app/routes/snop.dashboard.actions.overview.jsx",
              lineNumber: 468,
              columnNumber: 27
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "whitespace-nowrap p-4 text-center text-sm text-gray-500", children: detail.item }, void 0, false, {
              fileName: "app/routes/snop.dashboard.actions.overview.jsx",
              lineNumber: 471,
              columnNumber: 27
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "whitespace-nowrap p-4 text-sm text-gray-500", children: detail.week }, void 0, false, {
              fileName: "app/routes/snop.dashboard.actions.overview.jsx",
              lineNumber: 474,
              columnNumber: 27
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "whitespace-nowrap px-4 py-4 text-sm text-gray-500", children: detail.date }, void 0, false, {
              fileName: "app/routes/snop.dashboard.actions.overview.jsx",
              lineNumber: 477,
              columnNumber: 27
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "whitespace-nowrap py-4 pl-4 pr-4 text-center text-sm text-gray-500 sm:pr-0", children: detail.month }, void 0, false, {
              fileName: "app/routes/snop.dashboard.actions.overview.jsx",
              lineNumber: 480,
              columnNumber: 27
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "whitespace-nowrap py-4 pl-4 pr-4 text-center text-sm text-gray-500 sm:pr-0", children: detail.forcast }, void 0, false, {
              fileName: "app/routes/snop.dashboard.actions.overview.jsx",
              lineNumber: 483,
              columnNumber: 27
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "whitespace-nowrap py-4 pl-4 pr-4 text-center text-sm text-gray-500 sm:pr-0", children: detail.forechange }, void 0, false, {
              fileName: "app/routes/snop.dashboard.actions.overview.jsx",
              lineNumber: 486,
              columnNumber: 27
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "whitespace-nowrap py-4 pl-4 pr-4 text-center text-sm text-gray-500 sm:pr-0", children: detail.action }, void 0, false, {
              fileName: "app/routes/snop.dashboard.actions.overview.jsx",
              lineNumber: 489,
              columnNumber: 27
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "whitespace-nowrap py-4 pl-4 pr-4 text-center text-sm text-gray-500 sm:pr-0", children: detail.resolution }, void 0, false, {
              fileName: "app/routes/snop.dashboard.actions.overview.jsx",
              lineNumber: 492,
              columnNumber: 27
            }, this)
          ] }, detail, true, {
            fileName: "app/routes/snop.dashboard.actions.overview.jsx",
            lineNumber: 460,
            columnNumber: 46
          }, this)) }, void 0, false, {
            fileName: "app/routes/snop.dashboard.actions.overview.jsx",
            lineNumber: 459,
            columnNumber: 21
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/snop.dashboard.actions.overview.jsx",
          lineNumber: 421,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "app/routes/snop.dashboard.actions.overview.jsx",
          lineNumber: 420,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/routes/snop.dashboard.actions.overview.jsx",
          lineNumber: 419,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/snop.dashboard.actions.overview.jsx",
          lineNumber: 418,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/snop.dashboard.actions.overview.jsx",
        lineNumber: 399,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/snop.dashboard.actions.overview.jsx",
        lineNumber: 398,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/snop.dashboard.actions.overview.jsx",
      lineNumber: 324,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(qe.Root, { show: openAction, as: import_react.Fragment, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(_t, { as: "div", className: "relative z-10", onClose: setOpenAction, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute inset-0 overflow-hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(qe.Child, { as: import_react.Fragment, enter: "transform transition ease-in-out duration-500 sm:duration-700", enterFrom: "translate-x-full", enterTo: "translate-x-0", leave: "transform transition ease-in-out duration-500 sm:duration-700", leaveFrom: "translate-x-0", leaveTo: "translate-x-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(_t.Panel, { className: "pointer-events-auto w-screen max-w-md", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", { className: "flex h-full flex-col divide-y divide-gray-200 bg-white shadow-xl", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-0 flex-1 overflow-y-auto", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-blue-900 px-4 py-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-start justify-between", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(_t.Title, { className: "py-1 text-base font-semibold leading-6 text-white", children: "Action Items" }, void 0, false, {
            fileName: "app/routes/snop.dashboard.actions.overview.jsx",
            lineNumber: 515,
            columnNumber: 27
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "ml-3 flex h-7 items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", className: "text-slate-300 hover:text-white", onClick: () => setOpenAction(false), children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "sr-only", children: "Close panel" }, void 0, false, {
              fileName: "app/routes/snop.dashboard.actions.overview.jsx",
              lineNumber: 521,
              columnNumber: 31
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(XMarkIcon_default, { className: "h-6 w-6", "aria-hidden": "true" }, void 0, false, {
              fileName: "app/routes/snop.dashboard.actions.overview.jsx",
              lineNumber: 522,
              columnNumber: 31
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/snop.dashboard.actions.overview.jsx",
            lineNumber: 520,
            columnNumber: 29
          }, this) }, void 0, false, {
            fileName: "app/routes/snop.dashboard.actions.overview.jsx",
            lineNumber: 519,
            columnNumber: 27
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/snop.dashboard.actions.overview.jsx",
          lineNumber: 514,
          columnNumber: 25
        }, this) }, void 0, false, {
          fileName: "app/routes/snop.dashboard.actions.overview.jsx",
          lineNumber: 513,
          columnNumber: 23
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "px-4 py-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-md block font-medium leading-6 text-gray-900", children: "Site" }, void 0, false, {
            fileName: "app/routes/snop.dashboard.actions.overview.jsx",
            lineNumber: 528,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "block w-full rounded-md p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Dallas" }, void 0, false, {
            fileName: "app/routes/snop.dashboard.actions.overview.jsx",
            lineNumber: 533,
            columnNumber: 29
          }, this) }, void 0, false, {
            fileName: "app/routes/snop.dashboard.actions.overview.jsx",
            lineNumber: 532,
            columnNumber: 27
          }, this) }, void 0, false, {
            fileName: "app/routes/snop.dashboard.actions.overview.jsx",
            lineNumber: 531,
            columnNumber: 25
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/snop.dashboard.actions.overview.jsx",
          lineNumber: 527,
          columnNumber: 23
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "px-4 py-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-md block font-medium leading-6 text-gray-900", children: "Customer" }, void 0, false, {
            fileName: "app/routes/snop.dashboard.actions.overview.jsx",
            lineNumber: 539,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "block w-full rounded-md p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Best Buy" }, void 0, false, {
            fileName: "app/routes/snop.dashboard.actions.overview.jsx",
            lineNumber: 544,
            columnNumber: 29
          }, this) }, void 0, false, {
            fileName: "app/routes/snop.dashboard.actions.overview.jsx",
            lineNumber: 543,
            columnNumber: 27
          }, this) }, void 0, false, {
            fileName: "app/routes/snop.dashboard.actions.overview.jsx",
            lineNumber: 542,
            columnNumber: 25
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/snop.dashboard.actions.overview.jsx",
          lineNumber: 538,
          columnNumber: 23
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "px-4 py-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-md block font-medium leading-6 text-gray-900", children: "Item" }, void 0, false, {
            fileName: "app/routes/snop.dashboard.actions.overview.jsx",
            lineNumber: 550,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "block w-full rounded-md p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "GS25-227-2.5G" }, void 0, false, {
            fileName: "app/routes/snop.dashboard.actions.overview.jsx",
            lineNumber: 555,
            columnNumber: 29
          }, this) }, void 0, false, {
            fileName: "app/routes/snop.dashboard.actions.overview.jsx",
            lineNumber: 554,
            columnNumber: 27
          }, this) }, void 0, false, {
            fileName: "app/routes/snop.dashboard.actions.overview.jsx",
            lineNumber: 553,
            columnNumber: 25
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/snop.dashboard.actions.overview.jsx",
          lineNumber: 549,
          columnNumber: 23
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "px-4 py-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-md block font-medium leading-6 text-gray-900", children: "Week" }, void 0, false, {
            fileName: "app/routes/snop.dashboard.actions.overview.jsx",
            lineNumber: 561,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "block w-full rounded-md p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "08W14-Apr07" }, void 0, false, {
            fileName: "app/routes/snop.dashboard.actions.overview.jsx",
            lineNumber: 566,
            columnNumber: 29
          }, this) }, void 0, false, {
            fileName: "app/routes/snop.dashboard.actions.overview.jsx",
            lineNumber: 565,
            columnNumber: 27
          }, this) }, void 0, false, {
            fileName: "app/routes/snop.dashboard.actions.overview.jsx",
            lineNumber: 564,
            columnNumber: 25
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/snop.dashboard.actions.overview.jsx",
          lineNumber: 560,
          columnNumber: 23
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-md block font-medium leading-6 text-gray-900", children: "Action" }, void 0, false, {
            fileName: "app/routes/snop.dashboard.actions.overview.jsx",
            lineNumber: 572,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-md mt-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("select", { id: "location", name: "location", className: "mt-2 block w-full rounded-md border-0 px-2 py-3 text-gray-900 ring-1 ring-inset ring-gray-300 sm:text-sm sm:leading-6", defaultValue: "Critical Supply Shortage", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { children: "Critical Supply Shortage" }, void 0, false, {
              fileName: "app/routes/snop.dashboard.actions.overview.jsx",
              lineNumber: 578,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { children: "Check Capacity increase" }, void 0, false, {
              fileName: "app/routes/snop.dashboard.actions.overview.jsx",
              lineNumber: 579,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { children: "MOM Change" }, void 0, false, {
              fileName: "app/routes/snop.dashboard.actions.overview.jsx",
              lineNumber: 580,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { children: "NPI Review" }, void 0, false, {
              fileName: "app/routes/snop.dashboard.actions.overview.jsx",
              lineNumber: 581,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { children: "Prepare a quarterly summary" }, void 0, false, {
              fileName: "app/routes/snop.dashboard.actions.overview.jsx",
              lineNumber: 582,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { children: "Fix Demand Mismatch" }, void 0, false, {
              fileName: "app/routes/snop.dashboard.actions.overview.jsx",
              lineNumber: 583,
              columnNumber: 29
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/snop.dashboard.actions.overview.jsx",
            lineNumber: 577,
            columnNumber: 27
          }, this) }, void 0, false, {
            fileName: "app/routes/snop.dashboard.actions.overview.jsx",
            lineNumber: 576,
            columnNumber: 25
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/snop.dashboard.actions.overview.jsx",
          lineNumber: 571,
          columnNumber: 23
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "px-4 py-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "value", className: "text-md block font-medium leading-6 text-gray-900", children: "Due Date" }, void 0, false, {
            fileName: "app/routes/snop.dashboard.actions.overview.jsx",
            lineNumber: 598,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "block w-full rounded-md p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "9/5/2023" }, void 0, false, {
            fileName: "app/routes/snop.dashboard.actions.overview.jsx",
            lineNumber: 603,
            columnNumber: 29
          }, this) }, void 0, false, {
            fileName: "app/routes/snop.dashboard.actions.overview.jsx",
            lineNumber: 602,
            columnNumber: 27
          }, this) }, void 0, false, {
            fileName: "app/routes/snop.dashboard.actions.overview.jsx",
            lineNumber: 601,
            columnNumber: 25
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/snop.dashboard.actions.overview.jsx",
          lineNumber: 597,
          columnNumber: 23
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "px-4 py-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "value", className: "text-md block font-medium leading-6 text-gray-900", children: "Assigned To" }, void 0, false, {
            fileName: "app/routes/snop.dashboard.actions.overview.jsx",
            lineNumber: 609,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-md mt-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropDownList, { style: {
            width: "415px",
            height: "40px"
          }, data: assign, defaultValue: "Admin" }, void 0, false, {
            fileName: "app/routes/snop.dashboard.actions.overview.jsx",
            lineNumber: 614,
            columnNumber: 27
          }, this) }, void 0, false, {
            fileName: "app/routes/snop.dashboard.actions.overview.jsx",
            lineNumber: 613,
            columnNumber: 25
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/snop.dashboard.actions.overview.jsx",
          lineNumber: 608,
          columnNumber: 23
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "px-4 py-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "value", className: "text-md block font-medium leading-6 text-gray-900", children: "Status" }, void 0, false, {
            fileName: "app/routes/snop.dashboard.actions.overview.jsx",
            lineNumber: 622,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-md mt-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropDownList, { style: {
            width: "415px",
            height: "40px"
          }, data: status, defaultValue: "Open" }, void 0, false, {
            fileName: "app/routes/snop.dashboard.actions.overview.jsx",
            lineNumber: 627,
            columnNumber: 27
          }, this) }, void 0, false, {
            fileName: "app/routes/snop.dashboard.actions.overview.jsx",
            lineNumber: 626,
            columnNumber: 25
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/snop.dashboard.actions.overview.jsx",
          lineNumber: 621,
          columnNumber: 23
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "px-4 py-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "value", className: "text-md block font-medium leading-6 text-gray-900", children: "Meeting" }, void 0, false, {
            fileName: "app/routes/snop.dashboard.actions.overview.jsx",
            lineNumber: 635,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-md mt-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropDownList, { style: {
            width: "415px",
            height: "40px"
          }, data: meeting, defaultValue: "Supply Review Mfg" }, void 0, false, {
            fileName: "app/routes/snop.dashboard.actions.overview.jsx",
            lineNumber: 640,
            columnNumber: 27
          }, this) }, void 0, false, {
            fileName: "app/routes/snop.dashboard.actions.overview.jsx",
            lineNumber: 639,
            columnNumber: 25
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/snop.dashboard.actions.overview.jsx",
          lineNumber: 634,
          columnNumber: 23
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "px-4 py-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "description", className: "text-md block font-medium leading-6 text-gray-900", children: "Comments" }, void 0, false, {
            fileName: "app/routes/snop.dashboard.actions.overview.jsx",
            lineNumber: 648,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("textarea", { id: "description", name: "description", rows: 3, className: "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400", defaultValue: "" }, void 0, false, {
            fileName: "app/routes/snop.dashboard.actions.overview.jsx",
            lineNumber: 652,
            columnNumber: 27
          }, this) }, void 0, false, {
            fileName: "app/routes/snop.dashboard.actions.overview.jsx",
            lineNumber: 651,
            columnNumber: 25
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/snop.dashboard.actions.overview.jsx",
          lineNumber: 647,
          columnNumber: 23
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/snop.dashboard.actions.overview.jsx",
        lineNumber: 512,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-shrink-0 justify-center px-4 py-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", className: "rounded-md  bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm ring-1 ring-inset  ring-gray-300\n                        hover:bg-indigo-600", onClick: () => setOpenAction(false), children: "Cancel" }, void 0, false, {
          fileName: "app/routes/snop.dashboard.actions.overview.jsx",
          lineNumber: 658,
          columnNumber: 23
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", className: "ml-4 inline-flex justify-center rounded-md bg-rose-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-rose-600 ", children: "Create Action" }, void 0, false, {
          fileName: "app/routes/snop.dashboard.actions.overview.jsx",
          lineNumber: 662,
          columnNumber: 23
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/snop.dashboard.actions.overview.jsx",
        lineNumber: 657,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/snop.dashboard.actions.overview.jsx",
      lineNumber: 511,
      columnNumber: 19
    }, this) }, void 0, false, {
      fileName: "app/routes/snop.dashboard.actions.overview.jsx",
      lineNumber: 510,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/routes/snop.dashboard.actions.overview.jsx",
      lineNumber: 509,
      columnNumber: 15
    }, this) }, void 0, false, {
      fileName: "app/routes/snop.dashboard.actions.overview.jsx",
      lineNumber: 508,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/routes/snop.dashboard.actions.overview.jsx",
      lineNumber: 507,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/snop.dashboard.actions.overview.jsx",
      lineNumber: 506,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/snop.dashboard.actions.overview.jsx",
      lineNumber: 505,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(qe.Root, { show: openRes, as: import_react.Fragment, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(_t, { as: "div", className: "relative z-10", onClose: setOpenRes, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "fixed inset-0" }, void 0, false, {
        fileName: "app/routes/snop.dashboard.actions.overview.jsx",
        lineNumber: 676,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "fixed inset-0 overflow-hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute inset-0 overflow-hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(qe.Child, { as: import_react.Fragment, enter: "transform transition ease-in-out duration-500 sm:duration-700", enterFrom: "translate-x-full", enterTo: "translate-x-0", leave: "transform transition ease-in-out duration-500 sm:duration-700", leaveFrom: "translate-x-0", leaveTo: "translate-x-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(_t.Panel, { className: "pointer-events-auto w-screen max-w-md", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", { className: "flex h-full flex-col divide-y divide-gray-200 bg-white shadow-xl", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-0 flex-1 overflow-y-auto", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-blue-900 px-4 py-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-start justify-between", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(_t.Title, { className: "py-1 text-base font-semibold leading-6 text-white", children: "Resolution Options" }, void 0, false, {
              fileName: "app/routes/snop.dashboard.actions.overview.jsx",
              lineNumber: 687,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "ml-3 flex h-7 items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", className: "rounded-md  text-slate-300 hover:text-white", onClick: () => setOpenRes(false), children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "sr-only", children: "Close panel" }, void 0, false, {
                fileName: "app/routes/snop.dashboard.actions.overview.jsx",
                lineNumber: 693,
                columnNumber: 33
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(XMarkIcon_default, { className: "h-6 w-6", "aria-hidden": "true" }, void 0, false, {
                fileName: "app/routes/snop.dashboard.actions.overview.jsx",
                lineNumber: 694,
                columnNumber: 33
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/snop.dashboard.actions.overview.jsx",
              lineNumber: 692,
              columnNumber: 31
            }, this) }, void 0, false, {
              fileName: "app/routes/snop.dashboard.actions.overview.jsx",
              lineNumber: 691,
              columnNumber: 29
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/snop.dashboard.actions.overview.jsx",
            lineNumber: 686,
            columnNumber: 27
          }, this) }, void 0, false, {
            fileName: "app/routes/snop.dashboard.actions.overview.jsx",
            lineNumber: 685,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "px-4 py-2", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-md block font-medium leading-6 text-gray-900", children: "Site" }, void 0, false, {
              fileName: "app/routes/snop.dashboard.actions.overview.jsx",
              lineNumber: 701,
              columnNumber: 27
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "block w-full rounded-md p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Dallas" }, void 0, false, {
              fileName: "app/routes/snop.dashboard.actions.overview.jsx",
              lineNumber: 706,
              columnNumber: 31
            }, this) }, void 0, false, {
              fileName: "app/routes/snop.dashboard.actions.overview.jsx",
              lineNumber: 705,
              columnNumber: 29
            }, this) }, void 0, false, {
              fileName: "app/routes/snop.dashboard.actions.overview.jsx",
              lineNumber: 704,
              columnNumber: 27
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/snop.dashboard.actions.overview.jsx",
            lineNumber: 700,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "px-4 py-2", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-md block font-medium leading-6 text-gray-900", children: "Customer" }, void 0, false, {
              fileName: "app/routes/snop.dashboard.actions.overview.jsx",
              lineNumber: 712,
              columnNumber: 27
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "block w-full rounded-md p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Best Buy" }, void 0, false, {
              fileName: "app/routes/snop.dashboard.actions.overview.jsx",
              lineNumber: 717,
              columnNumber: 31
            }, this) }, void 0, false, {
              fileName: "app/routes/snop.dashboard.actions.overview.jsx",
              lineNumber: 716,
              columnNumber: 29
            }, this) }, void 0, false, {
              fileName: "app/routes/snop.dashboard.actions.overview.jsx",
              lineNumber: 715,
              columnNumber: 27
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/snop.dashboard.actions.overview.jsx",
            lineNumber: 711,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "px-4 py-2", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-md block font-medium leading-6 text-gray-900", children: "Item" }, void 0, false, {
              fileName: "app/routes/snop.dashboard.actions.overview.jsx",
              lineNumber: 723,
              columnNumber: 27
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "block w-full rounded-md p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "GS25-227-2.5G" }, void 0, false, {
              fileName: "app/routes/snop.dashboard.actions.overview.jsx",
              lineNumber: 728,
              columnNumber: 31
            }, this) }, void 0, false, {
              fileName: "app/routes/snop.dashboard.actions.overview.jsx",
              lineNumber: 727,
              columnNumber: 29
            }, this) }, void 0, false, {
              fileName: "app/routes/snop.dashboard.actions.overview.jsx",
              lineNumber: 726,
              columnNumber: 27
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/snop.dashboard.actions.overview.jsx",
            lineNumber: 722,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "px-4 py-2", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-md block font-medium leading-6 text-gray-900", children: "Week" }, void 0, false, {
              fileName: "app/routes/snop.dashboard.actions.overview.jsx",
              lineNumber: 734,
              columnNumber: 27
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "block w-full rounded-md p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "08W14-Apr07" }, void 0, false, {
              fileName: "app/routes/snop.dashboard.actions.overview.jsx",
              lineNumber: 739,
              columnNumber: 31
            }, this) }, void 0, false, {
              fileName: "app/routes/snop.dashboard.actions.overview.jsx",
              lineNumber: 738,
              columnNumber: 29
            }, this) }, void 0, false, {
              fileName: "app/routes/snop.dashboard.actions.overview.jsx",
              lineNumber: 737,
              columnNumber: 27
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/snop.dashboard.actions.overview.jsx",
            lineNumber: 733,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "px-4 py-2", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-md block font-medium leading-6 text-gray-900", children: "Resolution" }, void 0, false, {
              fileName: "app/routes/snop.dashboard.actions.overview.jsx",
              lineNumber: 745,
              columnNumber: 27
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-md mt-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropDownList, { style: {
              width: "420px",
              height: "40px"
            }, data: option, defaultValue: "Price drop" }, void 0, false, {
              fileName: "app/routes/snop.dashboard.actions.overview.jsx",
              lineNumber: 750,
              columnNumber: 29
            }, this) }, void 0, false, {
              fileName: "app/routes/snop.dashboard.actions.overview.jsx",
              lineNumber: 749,
              columnNumber: 27
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/snop.dashboard.actions.overview.jsx",
            lineNumber: 744,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "px-4 py-2", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "value", className: "text-md block font-medium leading-6 text-gray-900", children: "Description" }, void 0, false, {
              fileName: "app/routes/snop.dashboard.actions.overview.jsx",
              lineNumber: 758,
              columnNumber: 27
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "block w-full rounded-md p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Initiate Price drop" }, void 0, false, {
              fileName: "app/routes/snop.dashboard.actions.overview.jsx",
              lineNumber: 763,
              columnNumber: 31
            }, this) }, void 0, false, {
              fileName: "app/routes/snop.dashboard.actions.overview.jsx",
              lineNumber: 762,
              columnNumber: 29
            }, this) }, void 0, false, {
              fileName: "app/routes/snop.dashboard.actions.overview.jsx",
              lineNumber: 761,
              columnNumber: 27
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/snop.dashboard.actions.overview.jsx",
            lineNumber: 757,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "px-4 py-2", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "value", className: "text-md block font-medium leading-6 text-gray-900", children: "Count" }, void 0, false, {
              fileName: "app/routes/snop.dashboard.actions.overview.jsx",
              lineNumber: 769,
              columnNumber: 27
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "block w-full rounded-md p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "2" }, void 0, false, {
              fileName: "app/routes/snop.dashboard.actions.overview.jsx",
              lineNumber: 774,
              columnNumber: 31
            }, this) }, void 0, false, {
              fileName: "app/routes/snop.dashboard.actions.overview.jsx",
              lineNumber: 773,
              columnNumber: 29
            }, this) }, void 0, false, {
              fileName: "app/routes/snop.dashboard.actions.overview.jsx",
              lineNumber: 772,
              columnNumber: 27
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/snop.dashboard.actions.overview.jsx",
            lineNumber: 768,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "px-4 py-2", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "value", className: "text-md block font-medium leading-6 text-gray-900", children: "Measure" }, void 0, false, {
              fileName: "app/routes/snop.dashboard.actions.overview.jsx",
              lineNumber: 779,
              columnNumber: 27
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "block w-full rounded-md p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Consensus Forecast" }, void 0, false, {
              fileName: "app/routes/snop.dashboard.actions.overview.jsx",
              lineNumber: 784,
              columnNumber: 31
            }, this) }, void 0, false, {
              fileName: "app/routes/snop.dashboard.actions.overview.jsx",
              lineNumber: 783,
              columnNumber: 29
            }, this) }, void 0, false, {
              fileName: "app/routes/snop.dashboard.actions.overview.jsx",
              lineNumber: 782,
              columnNumber: 27
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/snop.dashboard.actions.overview.jsx",
            lineNumber: 778,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "px-4 py-2", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "value", className: "text-md block font-medium leading-6 text-gray-900", children: "Value" }, void 0, false, {
              fileName: "app/routes/snop.dashboard.actions.overview.jsx",
              lineNumber: 790,
              columnNumber: 27
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", name: "value-name", id: "value-name", className: "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400" }, void 0, false, {
              fileName: "app/routes/snop.dashboard.actions.overview.jsx",
              lineNumber: 794,
              columnNumber: 29
            }, this) }, void 0, false, {
              fileName: "app/routes/snop.dashboard.actions.overview.jsx",
              lineNumber: 793,
              columnNumber: 27
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/snop.dashboard.actions.overview.jsx",
            lineNumber: 789,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "px-4 py-2", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "description", className: "text-md block font-medium leading-6 text-gray-900", children: "Notes" }, void 0, false, {
              fileName: "app/routes/snop.dashboard.actions.overview.jsx",
              lineNumber: 798,
              columnNumber: 27
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("textarea", { id: "description", name: "description", rows: 4, className: "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400", defaultValue: "" }, void 0, false, {
              fileName: "app/routes/snop.dashboard.actions.overview.jsx",
              lineNumber: 802,
              columnNumber: 29
            }, this) }, void 0, false, {
              fileName: "app/routes/snop.dashboard.actions.overview.jsx",
              lineNumber: 801,
              columnNumber: 27
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/snop.dashboard.actions.overview.jsx",
            lineNumber: 797,
            columnNumber: 25
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/snop.dashboard.actions.overview.jsx",
          lineNumber: 684,
          columnNumber: 23
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-shrink-0 justify-center px-4 py-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", className: "rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-indigo-600", onClick: () => setOpenRes(false), children: "Cancel" }, void 0, false, {
            fileName: "app/routes/snop.dashboard.actions.overview.jsx",
            lineNumber: 808,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", className: "ml-4 inline-flex justify-center rounded-md bg-rose-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-rose-600", children: "Resolve Exception" }, void 0, false, {
            fileName: "app/routes/snop.dashboard.actions.overview.jsx",
            lineNumber: 812,
            columnNumber: 25
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/snop.dashboard.actions.overview.jsx",
          lineNumber: 807,
          columnNumber: 23
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/snop.dashboard.actions.overview.jsx",
        lineNumber: 683,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/routes/snop.dashboard.actions.overview.jsx",
        lineNumber: 682,
        columnNumber: 19
      }, this) }, void 0, false, {
        fileName: "app/routes/snop.dashboard.actions.overview.jsx",
        lineNumber: 681,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "app/routes/snop.dashboard.actions.overview.jsx",
        lineNumber: 680,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/routes/snop.dashboard.actions.overview.jsx",
        lineNumber: 679,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/snop.dashboard.actions.overview.jsx",
        lineNumber: 678,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/snop.dashboard.actions.overview.jsx",
      lineNumber: 675,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/snop.dashboard.actions.overview.jsx",
      lineNumber: 674,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/snop.dashboard.actions.overview.jsx",
    lineNumber: 282,
    columnNumber: 10
  }, this);
}
_s(Example, "Ne2DQrcDVZtkIRpdIY87pY5l3z8=");
_c = Example;
var _c;
$RefreshReg$(_c, "Example");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Example as default
};
//# sourceMappingURL=/build/routes/snop.dashboard.actions.overview-JVG6FTXE.js.map
