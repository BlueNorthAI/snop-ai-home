import {
  DataTable,
  columns
} from "/build/_shared/chunk-ZPP3DRRC.js";
import "/build/_shared/chunk-UZJGRGSS.js";
import "/build/_shared/chunk-XFJ7VQR3.js";
import "/build/_shared/chunk-H7UTOGHP.js";
import "/build/_shared/chunk-W7HC3WPJ.js";
import "/build/_shared/chunk-OJGXK62L.js";
import "/build/_shared/chunk-C2HJSZWP.js";
import "/build/_shared/chunk-FDWYIRIF.js";
import {
  require_scenario
} from "/build/_shared/chunk-T5F5GXJC.js";
import "/build/_shared/chunk-S4R52IIC.js";
import "/build/_shared/chunk-2AYV67AV.js";
import "/build/_shared/chunk-C2XBONP3.js";
import "/build/_shared/chunk-FBY72YCO.js";
import {
  require_node
} from "/build/_shared/chunk-G7CHZRZX.js";
import "/build/_shared/chunk-Y3Q3TNJF.js";
import "/build/_shared/chunk-ELWJTL4F.js";
import {
  Link,
  useLoaderData
} from "/build/_shared/chunk-NON4LQMM.js";
import "/build/_shared/chunk-GIAAE3CH.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  createHotContext
} from "/build/_shared/chunk-K4XMOQHS.js";
import "/build/_shared/chunk-UWV35TSL.js";
import "/build/_shared/chunk-BOXFZXVX.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/snop.scenario_.$scenId_.archive.tsx
var import_scenario = __toESM(require_scenario());
var import_node = __toESM(require_node());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\snop.scenario_.$scenId_.archive.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\snop.scenario_.$scenId_.archive.tsx"
  );
  import.meta.hot.lastModified = "1708694338866.838";
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
function ArchivePage() {
  _s();
  const {
    scenarioArchiveList
  } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "m-2", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mx-2 py-3.5 rounded-t-lg bg-sky-500 border-b ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", { className: "ml-6 pl-6 flex items-center justify-center", "aria-label": "Global", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: " flex gap-x-8 justify-center ", children: navigation.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: item.to, className: " text-base lg:text-lg font-semibold leading-6 text-white hover:text-gray-200", children: item.name }, item.id, false, {
      fileName: "app/routes/snop.scenario_.$scenId_.archive.tsx",
      lineNumber: 88,
      columnNumber: 39
    }, this)) }, void 0, false, {
      fileName: "app/routes/snop.scenario_.$scenId_.archive.tsx",
      lineNumber: 87,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/routes/snop.scenario_.$scenId_.archive.tsx",
      lineNumber: 86,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/snop.scenario_.$scenId_.archive.tsx",
      lineNumber: 85,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white mx-2 shadow-md rounded-b-lg", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center  justify-between", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-3xl font-bold ml-4 p-2 text-transparent bg-clip-text   bg-gradient-to-r from-blue-700 via-sky-700 to-blue-700 font-display", children: "Sales & Operations Planning - List of Archive" }, void 0, false, {
        fileName: "app/routes/snop.scenario_.$scenId_.archive.tsx",
        lineNumber: 96,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/snop.scenario_.$scenId_.archive.tsx",
        lineNumber: 95,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "m-4 bg-white rounded-lg p-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DataTable, { data: scenarioArchiveList, columns }, void 0, false, {
        fileName: "app/routes/snop.scenario_.$scenId_.archive.tsx",
        lineNumber: 102,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/snop.scenario_.$scenId_.archive.tsx",
        lineNumber: 101,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/snop.scenario_.$scenId_.archive.tsx",
      lineNumber: 94,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/snop.scenario_.$scenId_.archive.tsx",
    lineNumber: 84,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/snop.scenario_.$scenId_.archive.tsx",
    lineNumber: 83,
    columnNumber: 10
  }, this);
}
_s(ArchivePage, "I0spRHtWEOv3uCIjQkEQC/GqufQ=", false, function() {
  return [useLoaderData];
});
_c = ArchivePage;
var _c;
$RefreshReg$(_c, "ArchivePage");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  ArchivePage as default
};
//# sourceMappingURL=/build/routes/snop.scenario_.$scenId_.archive-Z6DPLWFX.js.map
