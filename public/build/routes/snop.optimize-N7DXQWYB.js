import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from "/build/_shared/chunk-UZJGRGSS.js";
import "/build/_shared/chunk-XFJ7VQR3.js";
import "/build/_shared/chunk-H7UTOGHP.js";
import "/build/_shared/chunk-C2HJSZWP.js";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from "/build/_shared/chunk-MTT4DDXE.js";
import {
  Input
} from "/build/_shared/chunk-FDWYIRIF.js";
import "/build/_shared/chunk-2AYV67AV.js";
import {
  Button
} from "/build/_shared/chunk-C2XBONP3.js";
import {
  cn
} from "/build/_shared/chunk-FBY72YCO.js";
import {
  require_node
} from "/build/_shared/chunk-G7CHZRZX.js";
import "/build/_shared/chunk-Y3Q3TNJF.js";
import "/build/_shared/chunk-ELWJTL4F.js";
import {
  Form,
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
  __commonJS,
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// empty-module:~/models/optimize.server
var require_optimize = __commonJS({
  "empty-module:~/models/optimize.server"(exports, module) {
    module.exports = {};
  }
});

// app/routes/snop.optimize.tsx
var import_optimize = __toESM(require_optimize());
var import_node = __toESM(require_node());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\snop.optimize.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\snop.optimize.tsx"
  );
  import.meta.hot.lastModified = "1708941686045.0608";
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
function DemoContainer({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: cn("flex items-center justify-center [&>div]:w-full", className), ...props }, void 0, false, {
    fileName: "app/routes/snop.optimize.tsx",
    lineNumber: 65,
    columnNumber: 10
  }, this);
}
_c = DemoContainer;
function Optimizer() {
  _s();
  const {
    submittedList
  } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "m-2", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mx-2 py-3.5 rounded-t-lg bg-sky-500 border-b ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", { className: "ml-6 pl-6 flex items-center justify-center", "aria-label": "Global", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: " flex gap-x-8 justify-center ", children: navigation.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: item.to, className: " text-base lg:text-lg font-semibold leading-6 text-white hover:text-gray-200", children: item.name }, item.id, false, {
      fileName: "app/routes/snop.optimize.tsx",
      lineNumber: 78,
      columnNumber: 39
    }, this)) }, void 0, false, {
      fileName: "app/routes/snop.optimize.tsx",
      lineNumber: 77,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/routes/snop.optimize.tsx",
      lineNumber: 76,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/snop.optimize.tsx",
      lineNumber: 75,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white mx-2 shadow-md rounded-b-lg pb-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center  justify-between", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-3xl font-bold ml-4 p-2 text-transparent bg-clip-text   bg-gradient-to-r from-blue-700 via-sky-700 to-blue-700 font-display", children: "Optimizer Dashboard" }, void 0, false, {
        fileName: "app/routes/snop.optimize.tsx",
        lineNumber: 87,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/snop.optimize.tsx",
        lineNumber: 86,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "items-start justify-center gap-6 rounded-lg p-4 md:grid lg:grid-cols-2 xl:grid-cols-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "col-span-2 grid items-start  gap-2 lg:col-span-2 lg:grid-cols-2 xl:col-span-1 xl:grid-cols-1 ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DemoContainer, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { className: "shadow-lg text-blue-900", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardHeader, { className: "space-y-1 ", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardTitle, { className: "text-2xl flex", children: "Scenario Summary" }, void 0, false, {
              fileName: "app/routes/snop.optimize.tsx",
              lineNumber: 97,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "border-b" }, void 0, false, {
              fileName: "app/routes/snop.optimize.tsx",
              lineNumber: 101,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/snop.optimize.tsx",
            lineNumber: 96,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardContent, { className: "grid gap-4 space-y-4", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center space-x-4", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "font-semibold", children: "Select for Optimization" }, void 0, false, {
                fileName: "app/routes/snop.optimize.tsx",
                lineNumber: 106,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Select, { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectTrigger, { className: "w-[180px]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectValue, { placeholder: "Scenario" }, void 0, false, {
                  fileName: "app/routes/snop.optimize.tsx",
                  lineNumber: 111,
                  columnNumber: 27
                }, this) }, void 0, false, {
                  fileName: "app/routes/snop.optimize.tsx",
                  lineNumber: 110,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectContent, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectGroup, { children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectLabel, { children: "Scenario" }, void 0, false, {
                    fileName: "app/routes/snop.optimize.tsx",
                    lineNumber: 115,
                    columnNumber: 29
                  }, this),
                  submittedList.map((scenario) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectItem, { value: scenario.scenario_id ?? "", children: scenario.scenario_id ?? "" }, scenario.scenario_id, false, {
                    fileName: "app/routes/snop.optimize.tsx",
                    lineNumber: 116,
                    columnNumber: 60
                  }, this))
                ] }, void 0, true, {
                  fileName: "app/routes/snop.optimize.tsx",
                  lineNumber: 114,
                  columnNumber: 27
                }, this) }, void 0, false, {
                  fileName: "app/routes/snop.optimize.tsx",
                  lineNumber: 113,
                  columnNumber: 25
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/snop.optimize.tsx",
                lineNumber: 109,
                columnNumber: 23
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/snop.optimize.tsx",
              lineNumber: 105,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center space-x-4 ", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "w-[160px] font-semibold", children: "Spare threshold" }, void 0, false, {
                fileName: "app/routes/snop.optimize.tsx",
                lineNumber: 124,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, { className: "w-[180px]", type: "email", id: "email", placeholder: "20" }, void 0, false, {
                fileName: "app/routes/snop.optimize.tsx",
                lineNumber: 127,
                columnNumber: 23
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/snop.optimize.tsx",
              lineNumber: 123,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center space-x-4 ", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "w-[160px] font-semibold", children: "Number of Knives" }, void 0, false, {
                fileName: "app/routes/snop.optimize.tsx",
                lineNumber: 131,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, { className: "w-[180px]", type: "email", id: "email", placeholder: "0" }, void 0, false, {
                fileName: "app/routes/snop.optimize.tsx",
                lineNumber: 134,
                columnNumber: 23
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/snop.optimize.tsx",
              lineNumber: 130,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { className: "flex border-t justify-center pt-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { type: "submit", name: "start", value: "yes", className: "text-base bg-blue-500  text-white hover:bg-blue-600", children: "Optimize" }, void 0, false, {
              fileName: "app/routes/snop.optimize.tsx",
              lineNumber: 138,
              columnNumber: 23
            }, this) }, void 0, false, {
              fileName: "app/routes/snop.optimize.tsx",
              lineNumber: 137,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/snop.optimize.tsx",
            lineNumber: 104,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/snop.optimize.tsx",
          lineNumber: 95,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/routes/snop.optimize.tsx",
          lineNumber: 94,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/snop.optimize.tsx",
          lineNumber: 93,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "col-span-2 grid items-start gap-6 lg:col-span-2 lg:grid-cols-2 xl:col-span-1 xl:grid-cols-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DemoContainer, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { className: "shadow-lg text-blue-900", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardHeader, { className: "space-y-1", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardTitle, { className: "text-2xl", children: "Optimization Parameters" }, void 0, false, {
              fileName: "app/routes/snop.optimize.tsx",
              lineNumber: 151,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "border-b" }, void 0, false, {
              fileName: "app/routes/snop.optimize.tsx",
              lineNumber: 154,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/snop.optimize.tsx",
            lineNumber: 150,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardContent, { className: "grid gap-4 space-y-4", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center space-x-4 ", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "w-[160px] font-semibold", children: "Optimization Status" }, void 0, false, {
                fileName: "app/routes/snop.optimize.tsx",
                lineNumber: 158,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, { className: "w-[290px]", type: "email", id: "email", placeholder: "Completed @ 1:51:32 PM - 2/23/2021" }, void 0, false, {
                fileName: "app/routes/snop.optimize.tsx",
                lineNumber: 161,
                columnNumber: 23
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/snop.optimize.tsx",
              lineNumber: 157,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center space-x-4 ", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "w-[160px] font-semibold", children: "Solver Status" }, void 0, false, {
                fileName: "app/routes/snop.optimize.tsx",
                lineNumber: 165,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, { className: "w-[290px]", type: "email", id: "email", placeholder: "OPTIMAL" }, void 0, false, {
                fileName: "app/routes/snop.optimize.tsx",
                lineNumber: 168,
                columnNumber: 23
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/snop.optimize.tsx",
              lineNumber: 164,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center space-x-4 ", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "w-[160px] font-semibold", children: "Job ID" }, void 0, false, {
                fileName: "app/routes/snop.optimize.tsx",
                lineNumber: 172,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, { className: "w-[290px]", type: "email", id: "email", placeholder: "eeeb3265-3cf4-44f4-944d-ea7dad4c12ed" }, void 0, false, {
                fileName: "app/routes/snop.optimize.tsx",
                lineNumber: 173,
                columnNumber: 23
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/snop.optimize.tsx",
              lineNumber: 171,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { className: "flex border-t justify-center pt-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { type: "submit", name: "start", value: "yes", className: "text-base bg-blue-500  text-white hover:bg-blue-600", children: "Log" }, void 0, false, {
              fileName: "app/routes/snop.optimize.tsx",
              lineNumber: 176,
              columnNumber: 23
            }, this) }, void 0, false, {
              fileName: "app/routes/snop.optimize.tsx",
              lineNumber: 175,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/snop.optimize.tsx",
            lineNumber: 156,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/snop.optimize.tsx",
          lineNumber: 149,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/routes/snop.optimize.tsx",
          lineNumber: 148,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/snop.optimize.tsx",
          lineNumber: 147,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/snop.optimize.tsx",
        lineNumber: 92,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/snop.optimize.tsx",
      lineNumber: 85,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/snop.optimize.tsx",
    lineNumber: 74,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/snop.optimize.tsx",
    lineNumber: 73,
    columnNumber: 10
  }, this);
}
_s(Optimizer, "XMHUeoEo+3tQ3kbrXlVBXbkVHZM=", false, function() {
  return [useLoaderData];
});
_c2 = Optimizer;
var _c;
var _c2;
$RefreshReg$(_c, "DemoContainer");
$RefreshReg$(_c2, "Optimizer");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Optimizer as default
};
//# sourceMappingURL=/build/routes/snop.optimize-N7DXQWYB.js.map
