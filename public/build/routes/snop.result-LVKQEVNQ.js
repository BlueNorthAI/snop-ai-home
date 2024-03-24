import {
  require_optimize
} from "/build/_shared/chunk-JJILAZXF.js";
import {
  kpiService_m
} from "/build/_shared/chunk-XAEYC267.js";
import {
  CardLayout
} from "/build/_shared/chunk-WPKVYDZN.js";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from "/build/_shared/chunk-FJ6576BF.js";
import "/build/_shared/chunk-XFJ7VQR3.js";
import "/build/_shared/chunk-66XC2EWC.js";
import "/build/_shared/chunk-DQMH5JL2.js";
import "/build/_shared/chunk-KTF7K347.js";
import {
  cn
} from "/build/_shared/chunk-TRC5XD27.js";
import "/build/_shared/chunk-TNTLQMTW.js";
import "/build/_shared/chunk-CO7DHVOA.js";
import "/build/_shared/chunk-ELWJTL4F.js";
import "/build/_shared/chunk-XBDTUPGL.js";
import {
  require_node
} from "/build/_shared/chunk-G7CHZRZX.js";
import "/build/_shared/chunk-Y3Q3TNJF.js";
import {
  Link,
  useLoaderData
} from "/build/_shared/chunk-NON4LQMM.js";
import "/build/_shared/chunk-T5HJ6KPY.js";
import "/build/_shared/chunk-2VSZFGL3.js";
import "/build/_shared/chunk-JEBE5WMW.js";
import "/build/_shared/chunk-P6FI4LUL.js";
import "/build/_shared/chunk-QA7IBH2P.js";
import "/build/_shared/chunk-OP7Q5FNF.js";
import "/build/_shared/chunk-EZ7JG6XF.js";
import {
  FunnelIcon_default
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

// app/routes/snop.result.tsx
var import_react = __toESM(require_react());
var import_optimize = __toESM(require_optimize());
var import_node = __toESM(require_node());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\snop.result.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\snop.result.tsx"
  );
  import.meta.hot.lastModified = "1710754729555.3545";
}
var navigation = [{
  id: 1,
  name: "S&OP",
  to: "/snop/optimize"
}, {
  id: 2,
  name: "Demand",
  to: "#"
}, {
  id: 3,
  name: "Inventory",
  to: "#"
}, {
  id: 4,
  name: "Logistics",
  to: "#"
}, {
  id: 5,
  name: "Procurement",
  to: "#"
}];
var items = [{
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
function DemoContainer({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: cn("flex items-center justify-center [&>div]:w-full", className), ...props }, void 0, false, {
    fileName: "app/routes/snop.result.tsx",
    lineNumber: 76,
    columnNumber: 10
  }, this);
}
_c = DemoContainer;
function Results() {
  _s();
  const {
    submittedList
  } = useLoaderData();
  const [mode, setMode] = (0, import_react.useState)(items[0]);
  const reviewTabs = ["Month", "Quarter", "Year"];
  const [reviewIndex] = (0, import_react.useState)(0);
  const meetingTabs = ["Daily", "Weekly"];
  const [meetingIndex] = (0, import_react.useState)(0);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "m-2", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mx-2 py-3.5 rounded-t-lg bg-sky-500 border-b ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", { className: "ml-6 pl-6 flex items-center justify-center", "aria-label": "Global", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: " flex gap-x-8 justify-center ", children: navigation.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: item.to, className: " text-base lg:text-lg font-semibold leading-6 text-white hover:text-gray-200", children: item.name }, item.id, false, {
      fileName: "app/routes/snop.result.tsx",
      lineNumber: 94,
      columnNumber: 39
    }, this)) }, void 0, false, {
      fileName: "app/routes/snop.result.tsx",
      lineNumber: 93,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/routes/snop.result.tsx",
      lineNumber: 92,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/snop.result.tsx",
      lineNumber: 91,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white mx-2 shadow-md rounded-b-lg pb-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center  justify-between", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-3xl font-bold ml-4 p-2 text-transparent bg-clip-text   bg-gradient-to-r from-blue-700 via-sky-700 to-blue-700 font-display", children: "Results Dashboard" }, void 0, false, {
        fileName: "app/routes/snop.result.tsx",
        lineNumber: 103,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/snop.result.tsx",
        lineNumber: 102,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "border rounded-lg mx-4 my-2 flex items-center justify-between shadow", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center  gap-x-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "mx-4 inline-flex", children: "Scenario" }, void 0, false, {
            fileName: "app/routes/snop.result.tsx",
            lineNumber: 109,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Select, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectTrigger, { className: "w-[180px]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectValue, { placeholder: "Scenario" }, void 0, false, {
              fileName: "app/routes/snop.result.tsx",
              lineNumber: 113,
              columnNumber: 19
            }, this) }, void 0, false, {
              fileName: "app/routes/snop.result.tsx",
              lineNumber: 112,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectContent, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectGroup, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectLabel, { children: "Scenario" }, void 0, false, {
                fileName: "app/routes/snop.result.tsx",
                lineNumber: 117,
                columnNumber: 21
              }, this),
              submittedList.map((scenario) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectItem, { value: scenario.scenario_id ?? "", children: scenario.scenario_id ?? "" }, scenario.scenario_id, false, {
                fileName: "app/routes/snop.result.tsx",
                lineNumber: 118,
                columnNumber: 52
              }, this))
            ] }, void 0, true, {
              fileName: "app/routes/snop.result.tsx",
              lineNumber: 116,
              columnNumber: 19
            }, this) }, void 0, false, {
              fileName: "app/routes/snop.result.tsx",
              lineNumber: 115,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/snop.result.tsx",
            lineNumber: 111,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/snop.result.tsx",
          lineNumber: 108,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "m-2 px-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", className: "rounded-full border bg-gray-200 p-2\r\n                   hover:bg-gray-100", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FunnelIcon_default, { className: "h-4 w-4 text-gray-500", "aria-hidden": "true" }, void 0, false, {
          fileName: "app/routes/snop.result.tsx",
          lineNumber: 128,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/routes/snop.result.tsx",
          lineNumber: 126,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/snop.result.tsx",
          lineNumber: 125,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/snop.result.tsx",
        lineNumber: 107,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardLayout, { mode: mode.name === "Review" ? reviewTabs : meetingTabs, tab: mode.name === "Review" ? reviewIndex : meetingIndex, kpiData: kpiService_m }, void 0, false, {
        fileName: "app/routes/snop.result.tsx",
        lineNumber: 133,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/snop.result.tsx",
        lineNumber: 132,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/snop.result.tsx",
      lineNumber: 101,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/snop.result.tsx",
    lineNumber: 90,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/snop.result.tsx",
    lineNumber: 89,
    columnNumber: 10
  }, this);
}
_s(Results, "T5ynt8uLdV14K3l0b/uIXr2FNHE=", false, function() {
  return [useLoaderData];
});
_c2 = Results;
var _c;
var _c2;
$RefreshReg$(_c, "DemoContainer");
$RefreshReg$(_c2, "Results");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Results as default
};
//# sourceMappingURL=/build/routes/snop.result-LVKQEVNQ.js.map
