import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from "/build/_shared/chunk-Q5PJGCRX.js";
import {
  DotsHorizontalIcon
} from "/build/_shared/chunk-AIC7NVQ5.js";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "/build/_shared/chunk-CPS4G365.js";
import "/build/_shared/chunk-DQMH5JL2.js";
import {
  require_scenario
} from "/build/_shared/chunk-T5F5GXJC.js";
import "/build/_shared/chunk-YOJGWH76.js";
import "/build/_shared/chunk-KTF7K347.js";
import {
  Button
} from "/build/_shared/chunk-LFFJ36YN.js";
import {
  cn
} from "/build/_shared/chunk-TRC5XD27.js";
import "/build/_shared/chunk-ELWJTL4F.js";
import {
  WrapperMultiLineChart
} from "/build/_shared/chunk-XBDTUPGL.js";
import {
  require_node
} from "/build/_shared/chunk-G7CHZRZX.js";
import "/build/_shared/chunk-Y3Q3TNJF.js";
import {
  Link,
  useFetcher,
  useLoaderData
} from "/build/_shared/chunk-NON4LQMM.js";
import {
  WrapperMultiBarChart
} from "/build/_shared/chunk-T5HJ6KPY.js";
import {
  WrapperMultiAreaChart
} from "/build/_shared/chunk-JEBE5WMW.js";
import {
  WrapperMultiColumnChart
} from "/build/_shared/chunk-P6FI4LUL.js";
import "/build/_shared/chunk-OP7Q5FNF.js";
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

// app/routes/snop.scenario_.$scenId_.analyze.tsx
var import_react = __toESM(require_react());
var import_node = __toESM(require_node());
var import_scenario = __toESM(require_scenario());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\snop.scenario_.$scenId_.analyze.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\snop.scenario_.$scenId_.analyze.tsx"
  );
  import.meta.hot.lastModified = "1709710232355.6804";
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
var monthCategory = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
var materialCategory = ["Material Cost", "Holding Cost", "Stockout Cost"];
var empCategory = ["Hiring Cost", "Layoff Cost", "Employee Cost", "Overtime Cost"];
var outCategory = ["Material Cost", "Manufacturing Cost", "Logistics Cost"];
var invConstCategory = ["Starting Inventory", "Ending Inventory", "Starting Backlog", "Ending Backlog"];
var empConstCategory = ["Max overtime hours", "Starting # of employee", "Min ending # of employees", "Max ending # of employees"];
var proConstCategory = ["Labour Hours"];
function DemoContainer({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: cn("flex items-center justify-center [&>div]:w-full bg-gradient-to-t from-indigo-400 via-cyan-400 to-sky-500 p-0.5 rounded-xl ", className), ...props }, void 0, false, {
    fileName: "app/routes/snop.scenario_.$scenId_.analyze.tsx",
    lineNumber: 67,
    columnNumber: 10
  }, this);
}
_c = DemoContainer;
function AnalyzeScenario() {
  _s();
  const [date, setDate] = import_react.default.useState(/* @__PURE__ */ new Date());
  const {
    scenarioData
  } = useLoaderData();
  console.log("Scenario data", scenarioData);
  const fetcher = useFetcher();
  const demandSeries = [{
    name: "Demand",
    data: [scenarioData["Jan"], scenarioData["Feb"], scenarioData["Mar"], scenarioData["Apr"], scenarioData["May"], scenarioData["Jun"], scenarioData["Jul"], scenarioData["Aug"], scenarioData["Sep"], scenarioData["Oct"], scenarioData["Nov"], scenarioData["Dec"]]
  }];
  const materialSeries = [{
    name: "Material Cost",
    data: [{
      value: scenarioData["material_cost_pu"],
      color: "#67e8f9"
    }, {
      value: scenarioData["inv_hold_cost_pupm"],
      color: "#06b6d4"
    }, {
      value: scenarioData["stockout_cost_pupm"],
      color: "#0e7490"
    }]
  }];
  const empSeries = [{
    name: "Material Cost",
    data: [scenarioData["hiring_cost_pw"], scenarioData["firing_cost_pw"], scenarioData["worker_cost_pm"], scenarioData["overtime_cost_phr"]]
  }];
  const outSeries = [{
    name: "Material Cost",
    data: [scenarioData["outsourcing_cost_pu"], scenarioData["max_work_hrs_pwpm"], scenarioData["max_overtime_hrs_pwpm"]]
  }];
  const invConstSeries = [{
    name: "Material Cost",
    data: [scenarioData["inventory_start"], scenarioData["inventory_end"], scenarioData["backlog_start"], scenarioData["backlog_end"]]
  }];
  const empConstSeries = [{
    name: "Material Cost",
    data: [scenarioData["max_overtime_hrs_pwpm"], scenarioData["num_workers_start"], scenarioData["min_end_workers"], scenarioData["max_end_workers"]]
  }];
  const proConstSeries = [{
    name: "Material Cost",
    data: [scenarioData["labor_hrs_pu"]]
  }];
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "m-2", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mx-2 py-3.5 rounded-t-lg bg-sky-500 border-b ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", { className: "ml-6 pl-6 flex items-center justify-center", "aria-label": "Global", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: " flex gap-x-8 justify-center ", children: navigation.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: item.to, className: " text-base lg:text-lg font-semibold leading-6 text-white hover:text-gray-200", children: item.name }, item.id, false, {
      fileName: "app/routes/snop.scenario_.$scenId_.analyze.tsx",
      lineNumber: 130,
      columnNumber: 39
    }, this)) }, void 0, false, {
      fileName: "app/routes/snop.scenario_.$scenId_.analyze.tsx",
      lineNumber: 129,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/routes/snop.scenario_.$scenId_.analyze.tsx",
      lineNumber: 128,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/snop.scenario_.$scenId_.analyze.tsx",
      lineNumber: 127,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white mx-2 shadow-md rounded-b-lg", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center  justify-between", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-3xl font-bold ml-4 p-2 text-transparent bg-clip-text   bg-gradient-to-r from-blue-700 via-sky-700 to-blue-700 font-display", children: "Sales & Operations Planning - List of Scenarios" }, void 0, false, {
        fileName: "app/routes/snop.scenario_.$scenId_.analyze.tsx",
        lineNumber: 138,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/snop.scenario_.$scenId_.analyze.tsx",
        lineNumber: 137,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: " shadow-lg items-start justify-center gap-y-4 rounded-lg p-4 md:grid lg:grid-cols-1 xl:grid-cols-1", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "col-span-2 grid items-start  gap-2 lg:col-span-2 lg:grid-cols-1 xl:col-span-1 xl:grid-cols-1 ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DemoContainer, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { className: "shadow-lg text-blue-900", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardHeader, { className: "space-y-1 ", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardTitle, { className: "flex justify-between items-center", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-2xl", children: "Demand" }, void 0, false, {
                fileName: "app/routes/snop.scenario_.$scenId_.analyze.tsx",
                lineNumber: 148,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenu, { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { variant: "ghost", className: "flex h-8 w-8 p-0 data-[state=open]:bg-muted", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DotsHorizontalIcon, { className: "h-4 w-4" }, void 0, false, {
                    fileName: "app/routes/snop.scenario_.$scenId_.analyze.tsx",
                    lineNumber: 153,
                    columnNumber: 31
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "sr-only", children: "Open menu" }, void 0, false, {
                    fileName: "app/routes/snop.scenario_.$scenId_.analyze.tsx",
                    lineNumber: 154,
                    columnNumber: 31
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/snop.scenario_.$scenId_.analyze.tsx",
                  lineNumber: 152,
                  columnNumber: 29
                }, this) }, void 0, false, {
                  fileName: "app/routes/snop.scenario_.$scenId_.analyze.tsx",
                  lineNumber: 151,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuContent, { align: "end", className: "w-[140px]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: `/snop/scenario/${scenarioData}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuItem, { children: "Edit" }, void 0, false, {
                  fileName: "app/routes/snop.scenario_.$scenId_.analyze.tsx",
                  lineNumber: 159,
                  columnNumber: 31
                }, this) }, void 0, false, {
                  fileName: "app/routes/snop.scenario_.$scenId_.analyze.tsx",
                  lineNumber: 158,
                  columnNumber: 29
                }, this) }, void 0, false, {
                  fileName: "app/routes/snop.scenario_.$scenId_.analyze.tsx",
                  lineNumber: 157,
                  columnNumber: 27
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/snop.scenario_.$scenId_.analyze.tsx",
                lineNumber: 150,
                columnNumber: 25
              }, this) }, void 0, false, {
                fileName: "app/routes/snop.scenario_.$scenId_.analyze.tsx",
                lineNumber: 149,
                columnNumber: 23
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/snop.scenario_.$scenId_.analyze.tsx",
              lineNumber: 147,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "border-b" }, void 0, false, {
              fileName: "app/routes/snop.scenario_.$scenId_.analyze.tsx",
              lineNumber: 166,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/snop.scenario_.$scenId_.analyze.tsx",
            lineNumber: 146,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardContent, { className: "grid gap-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WrapperMultiColumnChart, { category: monthCategory, series: demandSeries }, void 0, false, {
            fileName: "app/routes/snop.scenario_.$scenId_.analyze.tsx",
            lineNumber: 170,
            columnNumber: 21
          }, this) }, void 0, false, {
            fileName: "app/routes/snop.scenario_.$scenId_.analyze.tsx",
            lineNumber: 169,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/snop.scenario_.$scenId_.analyze.tsx",
          lineNumber: 145,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/routes/snop.scenario_.$scenId_.analyze.tsx",
          lineNumber: 144,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/snop.scenario_.$scenId_.analyze.tsx",
          lineNumber: 143,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "col-span-2 grid items-start  gap-2 lg:col-span-2 lg:grid-cols-3 ", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DemoContainer, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { className: "shadow-lg text-blue-900", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardHeader, { className: "space-y-1 ", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardTitle, { className: "flex justify-between items-center", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-2xl", children: [
                  " ",
                  "Material & Inventory Cost"
                ] }, void 0, true, {
                  fileName: "app/routes/snop.scenario_.$scenId_.analyze.tsx",
                  lineNumber: 180,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenu, { children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { variant: "ghost", className: "flex h-8 w-8 p-0 data-[state=open]:bg-muted", children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DotsHorizontalIcon, { className: "h-4 w-4" }, void 0, false, {
                      fileName: "app/routes/snop.scenario_.$scenId_.analyze.tsx",
                      lineNumber: 188,
                      columnNumber: 31
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "sr-only", children: "Open menu" }, void 0, false, {
                      fileName: "app/routes/snop.scenario_.$scenId_.analyze.tsx",
                      lineNumber: 189,
                      columnNumber: 31
                    }, this)
                  ] }, void 0, true, {
                    fileName: "app/routes/snop.scenario_.$scenId_.analyze.tsx",
                    lineNumber: 187,
                    columnNumber: 29
                  }, this) }, void 0, false, {
                    fileName: "app/routes/snop.scenario_.$scenId_.analyze.tsx",
                    lineNumber: 186,
                    columnNumber: 27
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuContent, { align: "end", className: "w-[140px]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: `/snop/scenario/${scenarioData}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuItem, { children: "Edit" }, void 0, false, {
                    fileName: "app/routes/snop.scenario_.$scenId_.analyze.tsx",
                    lineNumber: 194,
                    columnNumber: 31
                  }, this) }, void 0, false, {
                    fileName: "app/routes/snop.scenario_.$scenId_.analyze.tsx",
                    lineNumber: 193,
                    columnNumber: 29
                  }, this) }, void 0, false, {
                    fileName: "app/routes/snop.scenario_.$scenId_.analyze.tsx",
                    lineNumber: 192,
                    columnNumber: 27
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/snop.scenario_.$scenId_.analyze.tsx",
                  lineNumber: 185,
                  columnNumber: 25
                }, this) }, void 0, false, {
                  fileName: "app/routes/snop.scenario_.$scenId_.analyze.tsx",
                  lineNumber: 184,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/snop.scenario_.$scenId_.analyze.tsx",
                lineNumber: 179,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "border-b" }, void 0, false, {
                fileName: "app/routes/snop.scenario_.$scenId_.analyze.tsx",
                lineNumber: 201,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/snop.scenario_.$scenId_.analyze.tsx",
              lineNumber: 178,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardContent, { className: "grid gap-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WrapperMultiColumnChart, { category: materialCategory, series: materialSeries }, void 0, false, {
              fileName: "app/routes/snop.scenario_.$scenId_.analyze.tsx",
              lineNumber: 205,
              columnNumber: 21
            }, this) }, void 0, false, {
              fileName: "app/routes/snop.scenario_.$scenId_.analyze.tsx",
              lineNumber: 204,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/snop.scenario_.$scenId_.analyze.tsx",
            lineNumber: 177,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/snop.scenario_.$scenId_.analyze.tsx",
            lineNumber: 176,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DemoContainer, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { className: "shadow-lg text-blue-900", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardHeader, { className: "space-y-1 ", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardTitle, { className: "flex justify-between items-center", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-2xl", children: " Employee Cost" }, void 0, false, {
                  fileName: "app/routes/snop.scenario_.$scenId_.analyze.tsx",
                  lineNumber: 214,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenu, { children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { variant: "ghost", className: "flex h-8 w-8 p-0 data-[state=open]:bg-muted", children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DotsHorizontalIcon, { className: "h-4 w-4" }, void 0, false, {
                      fileName: "app/routes/snop.scenario_.$scenId_.analyze.tsx",
                      lineNumber: 219,
                      columnNumber: 31
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "sr-only", children: "Open menu" }, void 0, false, {
                      fileName: "app/routes/snop.scenario_.$scenId_.analyze.tsx",
                      lineNumber: 220,
                      columnNumber: 31
                    }, this)
                  ] }, void 0, true, {
                    fileName: "app/routes/snop.scenario_.$scenId_.analyze.tsx",
                    lineNumber: 218,
                    columnNumber: 29
                  }, this) }, void 0, false, {
                    fileName: "app/routes/snop.scenario_.$scenId_.analyze.tsx",
                    lineNumber: 217,
                    columnNumber: 27
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuContent, { align: "end", className: "w-[140px]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: `/snop/scenario/${scenarioData}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuItem, { children: "Edit" }, void 0, false, {
                    fileName: "app/routes/snop.scenario_.$scenId_.analyze.tsx",
                    lineNumber: 225,
                    columnNumber: 31
                  }, this) }, void 0, false, {
                    fileName: "app/routes/snop.scenario_.$scenId_.analyze.tsx",
                    lineNumber: 224,
                    columnNumber: 29
                  }, this) }, void 0, false, {
                    fileName: "app/routes/snop.scenario_.$scenId_.analyze.tsx",
                    lineNumber: 223,
                    columnNumber: 27
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/snop.scenario_.$scenId_.analyze.tsx",
                  lineNumber: 216,
                  columnNumber: 25
                }, this) }, void 0, false, {
                  fileName: "app/routes/snop.scenario_.$scenId_.analyze.tsx",
                  lineNumber: 215,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/snop.scenario_.$scenId_.analyze.tsx",
                lineNumber: 213,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "border-b" }, void 0, false, {
                fileName: "app/routes/snop.scenario_.$scenId_.analyze.tsx",
                lineNumber: 231,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/snop.scenario_.$scenId_.analyze.tsx",
              lineNumber: 212,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardContent, { className: "grid gap-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WrapperMultiAreaChart, { category: empCategory, series: empSeries }, void 0, false, {
              fileName: "app/routes/snop.scenario_.$scenId_.analyze.tsx",
              lineNumber: 235,
              columnNumber: 21
            }, this) }, void 0, false, {
              fileName: "app/routes/snop.scenario_.$scenId_.analyze.tsx",
              lineNumber: 234,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/snop.scenario_.$scenId_.analyze.tsx",
            lineNumber: 211,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/snop.scenario_.$scenId_.analyze.tsx",
            lineNumber: 210,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DemoContainer, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { className: "shadow-lg text-blue-900", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardHeader, { className: "space-y-1 ", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardTitle, { className: "flex justify-between items-center", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-2xl", children: "Outsourcing Cost" }, void 0, false, {
                  fileName: "app/routes/snop.scenario_.$scenId_.analyze.tsx",
                  lineNumber: 244,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenu, { children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { variant: "ghost", className: "flex h-8 w-8 p-0 data-[state=open]:bg-muted", children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DotsHorizontalIcon, { className: "h-4 w-4" }, void 0, false, {
                      fileName: "app/routes/snop.scenario_.$scenId_.analyze.tsx",
                      lineNumber: 249,
                      columnNumber: 31
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "sr-only", children: "Open menu" }, void 0, false, {
                      fileName: "app/routes/snop.scenario_.$scenId_.analyze.tsx",
                      lineNumber: 250,
                      columnNumber: 31
                    }, this)
                  ] }, void 0, true, {
                    fileName: "app/routes/snop.scenario_.$scenId_.analyze.tsx",
                    lineNumber: 248,
                    columnNumber: 29
                  }, this) }, void 0, false, {
                    fileName: "app/routes/snop.scenario_.$scenId_.analyze.tsx",
                    lineNumber: 247,
                    columnNumber: 27
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuContent, { align: "end", className: "w-[140px]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: `/snop/scenario/${scenarioData}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuItem, { children: "Edit" }, void 0, false, {
                    fileName: "app/routes/snop.scenario_.$scenId_.analyze.tsx",
                    lineNumber: 255,
                    columnNumber: 31
                  }, this) }, void 0, false, {
                    fileName: "app/routes/snop.scenario_.$scenId_.analyze.tsx",
                    lineNumber: 254,
                    columnNumber: 29
                  }, this) }, void 0, false, {
                    fileName: "app/routes/snop.scenario_.$scenId_.analyze.tsx",
                    lineNumber: 253,
                    columnNumber: 27
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/snop.scenario_.$scenId_.analyze.tsx",
                  lineNumber: 246,
                  columnNumber: 25
                }, this) }, void 0, false, {
                  fileName: "app/routes/snop.scenario_.$scenId_.analyze.tsx",
                  lineNumber: 245,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/snop.scenario_.$scenId_.analyze.tsx",
                lineNumber: 243,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "border-b" }, void 0, false, {
                fileName: "app/routes/snop.scenario_.$scenId_.analyze.tsx",
                lineNumber: 262,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/snop.scenario_.$scenId_.analyze.tsx",
              lineNumber: 242,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardContent, { className: "grid gap-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WrapperMultiLineChart, { category: outCategory, series: outSeries }, void 0, false, {
              fileName: "app/routes/snop.scenario_.$scenId_.analyze.tsx",
              lineNumber: 266,
              columnNumber: 21
            }, this) }, void 0, false, {
              fileName: "app/routes/snop.scenario_.$scenId_.analyze.tsx",
              lineNumber: 265,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/snop.scenario_.$scenId_.analyze.tsx",
            lineNumber: 241,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/snop.scenario_.$scenId_.analyze.tsx",
            lineNumber: 240,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/snop.scenario_.$scenId_.analyze.tsx",
          lineNumber: 175,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "col-span-2 grid items-start  gap-2 lg:col-span-2 lg:grid-cols-3", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DemoContainer, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { className: "shadow-lg text-blue-900", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardHeader, { className: "space-y-1 ", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardTitle, { className: "flex justify-between items-center", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-2xl", children: "Inventory Constraint" }, void 0, false, {
                  fileName: "app/routes/snop.scenario_.$scenId_.analyze.tsx",
                  lineNumber: 277,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenu, { children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { variant: "ghost", className: "flex h-8 w-8 p-0 data-[state=open]:bg-muted", children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DotsHorizontalIcon, { className: "h-4 w-4" }, void 0, false, {
                      fileName: "app/routes/snop.scenario_.$scenId_.analyze.tsx",
                      lineNumber: 282,
                      columnNumber: 31
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "sr-only", children: "Open menu" }, void 0, false, {
                      fileName: "app/routes/snop.scenario_.$scenId_.analyze.tsx",
                      lineNumber: 283,
                      columnNumber: 31
                    }, this)
                  ] }, void 0, true, {
                    fileName: "app/routes/snop.scenario_.$scenId_.analyze.tsx",
                    lineNumber: 281,
                    columnNumber: 29
                  }, this) }, void 0, false, {
                    fileName: "app/routes/snop.scenario_.$scenId_.analyze.tsx",
                    lineNumber: 280,
                    columnNumber: 27
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuContent, { align: "end", className: "w-[140px]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: `/snop/scenario/${scenarioData}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuItem, { children: "Edit" }, void 0, false, {
                    fileName: "app/routes/snop.scenario_.$scenId_.analyze.tsx",
                    lineNumber: 288,
                    columnNumber: 31
                  }, this) }, void 0, false, {
                    fileName: "app/routes/snop.scenario_.$scenId_.analyze.tsx",
                    lineNumber: 287,
                    columnNumber: 29
                  }, this) }, void 0, false, {
                    fileName: "app/routes/snop.scenario_.$scenId_.analyze.tsx",
                    lineNumber: 286,
                    columnNumber: 27
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/snop.scenario_.$scenId_.analyze.tsx",
                  lineNumber: 279,
                  columnNumber: 25
                }, this) }, void 0, false, {
                  fileName: "app/routes/snop.scenario_.$scenId_.analyze.tsx",
                  lineNumber: 278,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/snop.scenario_.$scenId_.analyze.tsx",
                lineNumber: 276,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "border-b" }, void 0, false, {
                fileName: "app/routes/snop.scenario_.$scenId_.analyze.tsx",
                lineNumber: 295,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/snop.scenario_.$scenId_.analyze.tsx",
              lineNumber: 275,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardContent, { className: "grid gap-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WrapperMultiBarChart, { category: invConstCategory, series: invConstSeries }, void 0, false, {
              fileName: "app/routes/snop.scenario_.$scenId_.analyze.tsx",
              lineNumber: 299,
              columnNumber: 21
            }, this) }, void 0, false, {
              fileName: "app/routes/snop.scenario_.$scenId_.analyze.tsx",
              lineNumber: 298,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/snop.scenario_.$scenId_.analyze.tsx",
            lineNumber: 274,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/snop.scenario_.$scenId_.analyze.tsx",
            lineNumber: 273,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DemoContainer, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { className: "shadow-lg text-blue-900", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardHeader, { className: "space-y-1 ", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardTitle, { className: "flex justify-between items-center", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-2xl", children: " Employee Constraint" }, void 0, false, {
                  fileName: "app/routes/snop.scenario_.$scenId_.analyze.tsx",
                  lineNumber: 308,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenu, { children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { variant: "ghost", className: "flex h-8 w-8 p-0 data-[state=open]:bg-muted", children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DotsHorizontalIcon, { className: "h-4 w-4" }, void 0, false, {
                      fileName: "app/routes/snop.scenario_.$scenId_.analyze.tsx",
                      lineNumber: 313,
                      columnNumber: 31
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "sr-only", children: "Open menu" }, void 0, false, {
                      fileName: "app/routes/snop.scenario_.$scenId_.analyze.tsx",
                      lineNumber: 314,
                      columnNumber: 31
                    }, this)
                  ] }, void 0, true, {
                    fileName: "app/routes/snop.scenario_.$scenId_.analyze.tsx",
                    lineNumber: 312,
                    columnNumber: 29
                  }, this) }, void 0, false, {
                    fileName: "app/routes/snop.scenario_.$scenId_.analyze.tsx",
                    lineNumber: 311,
                    columnNumber: 27
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuContent, { align: "end", className: "w-[140px]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: `/snop/scenario/${scenarioData}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuItem, { children: "Edit" }, void 0, false, {
                    fileName: "app/routes/snop.scenario_.$scenId_.analyze.tsx",
                    lineNumber: 319,
                    columnNumber: 31
                  }, this) }, void 0, false, {
                    fileName: "app/routes/snop.scenario_.$scenId_.analyze.tsx",
                    lineNumber: 318,
                    columnNumber: 29
                  }, this) }, void 0, false, {
                    fileName: "app/routes/snop.scenario_.$scenId_.analyze.tsx",
                    lineNumber: 317,
                    columnNumber: 27
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/snop.scenario_.$scenId_.analyze.tsx",
                  lineNumber: 310,
                  columnNumber: 25
                }, this) }, void 0, false, {
                  fileName: "app/routes/snop.scenario_.$scenId_.analyze.tsx",
                  lineNumber: 309,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/snop.scenario_.$scenId_.analyze.tsx",
                lineNumber: 307,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "border-b" }, void 0, false, {
                fileName: "app/routes/snop.scenario_.$scenId_.analyze.tsx",
                lineNumber: 326,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/snop.scenario_.$scenId_.analyze.tsx",
              lineNumber: 306,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardContent, { className: "grid gap-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WrapperMultiColumnChart, { category: empConstCategory, series: empConstSeries }, void 0, false, {
              fileName: "app/routes/snop.scenario_.$scenId_.analyze.tsx",
              lineNumber: 330,
              columnNumber: 21
            }, this) }, void 0, false, {
              fileName: "app/routes/snop.scenario_.$scenId_.analyze.tsx",
              lineNumber: 329,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/snop.scenario_.$scenId_.analyze.tsx",
            lineNumber: 305,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/snop.scenario_.$scenId_.analyze.tsx",
            lineNumber: 304,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DemoContainer, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { className: "shadow-lg text-blue-900", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardHeader, { className: "space-y-1 ", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardTitle, { className: "flex justify-between items-center", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-2xl", children: " Product Constraint" }, void 0, false, {
                  fileName: "app/routes/snop.scenario_.$scenId_.analyze.tsx",
                  lineNumber: 339,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenu, { children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { variant: "ghost", className: "flex h-8 w-8 p-0 data-[state=open]:bg-muted", children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DotsHorizontalIcon, { className: "h-4 w-4" }, void 0, false, {
                      fileName: "app/routes/snop.scenario_.$scenId_.analyze.tsx",
                      lineNumber: 344,
                      columnNumber: 31
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "sr-only", children: "Open menu" }, void 0, false, {
                      fileName: "app/routes/snop.scenario_.$scenId_.analyze.tsx",
                      lineNumber: 345,
                      columnNumber: 31
                    }, this)
                  ] }, void 0, true, {
                    fileName: "app/routes/snop.scenario_.$scenId_.analyze.tsx",
                    lineNumber: 343,
                    columnNumber: 29
                  }, this) }, void 0, false, {
                    fileName: "app/routes/snop.scenario_.$scenId_.analyze.tsx",
                    lineNumber: 342,
                    columnNumber: 27
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuContent, { align: "end", className: "w-[140px]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: `/snop/scenario/${scenarioData}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuItem, { children: "Edit" }, void 0, false, {
                    fileName: "app/routes/snop.scenario_.$scenId_.analyze.tsx",
                    lineNumber: 350,
                    columnNumber: 31
                  }, this) }, void 0, false, {
                    fileName: "app/routes/snop.scenario_.$scenId_.analyze.tsx",
                    lineNumber: 349,
                    columnNumber: 29
                  }, this) }, void 0, false, {
                    fileName: "app/routes/snop.scenario_.$scenId_.analyze.tsx",
                    lineNumber: 348,
                    columnNumber: 27
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/snop.scenario_.$scenId_.analyze.tsx",
                  lineNumber: 341,
                  columnNumber: 25
                }, this) }, void 0, false, {
                  fileName: "app/routes/snop.scenario_.$scenId_.analyze.tsx",
                  lineNumber: 340,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/snop.scenario_.$scenId_.analyze.tsx",
                lineNumber: 338,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "border-b" }, void 0, false, {
                fileName: "app/routes/snop.scenario_.$scenId_.analyze.tsx",
                lineNumber: 357,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/snop.scenario_.$scenId_.analyze.tsx",
              lineNumber: 337,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardContent, { className: "grid gap-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WrapperMultiColumnChart, { category: proConstCategory, series: proConstSeries }, void 0, false, {
              fileName: "app/routes/snop.scenario_.$scenId_.analyze.tsx",
              lineNumber: 361,
              columnNumber: 21
            }, this) }, void 0, false, {
              fileName: "app/routes/snop.scenario_.$scenId_.analyze.tsx",
              lineNumber: 360,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/snop.scenario_.$scenId_.analyze.tsx",
            lineNumber: 336,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/snop.scenario_.$scenId_.analyze.tsx",
            lineNumber: 335,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/snop.scenario_.$scenId_.analyze.tsx",
          lineNumber: 272,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/snop.scenario_.$scenId_.analyze.tsx",
        lineNumber: 142,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/snop.scenario_.$scenId_.analyze.tsx",
      lineNumber: 136,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/snop.scenario_.$scenId_.analyze.tsx",
    lineNumber: 126,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/snop.scenario_.$scenId_.analyze.tsx",
    lineNumber: 125,
    columnNumber: 10
  }, this);
}
_s(AnalyzeScenario, "mgmTWBCfBaw6PoledA2Sw/cA7Rk=", false, function() {
  return [useLoaderData, useFetcher];
});
_c2 = AnalyzeScenario;
var _c;
var _c2;
$RefreshReg$(_c, "DemoContainer");
$RefreshReg$(_c2, "AnalyzeScenario");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  AnalyzeScenario as default
};
//# sourceMappingURL=/build/routes/snop.scenario_.$scenId_.analyze-ZETH7MJW.js.map
