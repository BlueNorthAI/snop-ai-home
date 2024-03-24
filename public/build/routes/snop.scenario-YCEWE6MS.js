import {
  DataTable,
  columns
} from "/build/_shared/chunk-KJ5N6XQJ.js";
import "/build/_shared/chunk-YSJMGTXM.js";
import "/build/_shared/chunk-CYDWZMPA.js";
import "/build/_shared/chunk-FJ6576BF.js";
import "/build/_shared/chunk-XFJ7VQR3.js";
import "/build/_shared/chunk-66XC2EWC.js";
import "/build/_shared/chunk-HIZXLO3O.js";
import "/build/_shared/chunk-AIC7NVQ5.js";
import "/build/_shared/chunk-CPS4G365.js";
import "/build/_shared/chunk-DQMH5JL2.js";
import {
  require_scenario
} from "/build/_shared/chunk-T5F5GXJC.js";
import "/build/_shared/chunk-YOJGWH76.js";
import "/build/_shared/chunk-KTF7K347.js";
import "/build/_shared/chunk-LFFJ36YN.js";
import "/build/_shared/chunk-TRC5XD27.js";
import "/build/_shared/chunk-ELWJTL4F.js";
import {
  require_node
} from "/build/_shared/chunk-G7CHZRZX.js";
import "/build/_shared/chunk-Y3Q3TNJF.js";
import {
  Link,
  useLoaderData
} from "/build/_shared/chunk-NON4LQMM.js";
import "/build/_shared/chunk-GIAAE3CH.js";
import {
  createHotContext
} from "/build/_shared/chunk-K4XMOQHS.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import "/build/_shared/chunk-BOXFZXVX.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/snop.scenario.tsx
var import_node = __toESM(require_node());
var import_scenario = __toESM(require_scenario());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\snop.scenario.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\snop.scenario.tsx"
  );
  import.meta.hot.lastModified = "1711012498829.4058";
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
function TaskPage() {
  _s();
  const {
    scenarioList
  } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "m-2", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mx-2 py-3.5 rounded-t-lg bg-sky-500 border-b ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", { className: "ml-6 pl-6 flex items-center justify-center", "aria-label": "Global", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: " flex gap-x-8 justify-center ", children: navigation.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: item.to, className: " text-base lg:text-lg font-semibold leading-6 text-white hover:text-gray-200", children: item.name }, item.id, false, {
      fileName: "app/routes/snop.scenario.tsx",
      lineNumber: 95,
      columnNumber: 39
    }, this)) }, void 0, false, {
      fileName: "app/routes/snop.scenario.tsx",
      lineNumber: 94,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/routes/snop.scenario.tsx",
      lineNumber: 93,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/snop.scenario.tsx",
      lineNumber: 92,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white mx-2 shadow-md rounded-b-lg", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center  justify-between", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-3xl font-bold ml-4 p-2 text-transparent bg-clip-text   bg-gradient-to-r from-blue-700 via-sky-700 to-blue-700 font-display", children: "Sales & Operations Planning - List of Scenarios" }, void 0, false, {
        fileName: "app/routes/snop.scenario.tsx",
        lineNumber: 103,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/snop.scenario.tsx",
        lineNumber: 102,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "m-4 bg-white rounded-lg", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DataTable, { data: scenarioList, columns }, void 0, false, {
        fileName: "app/routes/snop.scenario.tsx",
        lineNumber: 109,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/snop.scenario.tsx",
        lineNumber: 108,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/snop.scenario.tsx",
      lineNumber: 101,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/snop.scenario.tsx",
    lineNumber: 91,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/snop.scenario.tsx",
    lineNumber: 90,
    columnNumber: 10
  }, this);
}
_s(TaskPage, "ognHGA7ERGtZK5VPvXa2Dm9wtPQ=", false, function() {
  return [useLoaderData];
});
_c = TaskPage;
var _c;
$RefreshReg$(_c, "TaskPage");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  TaskPage as default
};
//# sourceMappingURL=/build/routes/snop.scenario-YCEWE6MS.js.map
