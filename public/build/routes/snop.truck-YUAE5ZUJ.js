import {
  require_input
} from "/build/_shared/chunk-CSUUZOAU.js";
import {
  Command,
  CommandGroup,
  CommandItem
} from "/build/_shared/chunk-YSPQ2ZCH.js";
import "/build/_shared/chunk-OZOMGVIH.js";
import {
  Label
} from "/build/_shared/chunk-24RM3C4N.js";
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from "/build/_shared/chunk-ZPK2AWEZ.js";
import {
  Input
} from "/build/_shared/chunk-HIZXLO3O.js";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from "/build/_shared/chunk-Q5PJGCRX.js";
import "/build/_shared/chunk-YOJGWH76.js";
import {
  Check,
  ChevronsUpDown
} from "/build/_shared/chunk-KTF7K347.js";
import {
  Button
} from "/build/_shared/chunk-LFFJ36YN.js";
import {
  cn
} from "/build/_shared/chunk-TRC5XD27.js";
import "/build/_shared/chunk-ELWJTL4F.js";
import {
  require_node
} from "/build/_shared/chunk-G7CHZRZX.js";
import "/build/_shared/chunk-Y3Q3TNJF.js";
import {
  Form,
  Link,
  useLoaderData,
  useNavigate,
  useParams
} from "/build/_shared/chunk-NON4LQMM.js";
import {
  WrapperWaterfallChart
} from "/build/_shared/chunk-K47VYUL6.js";
import {
  MapIcon_default,
  PresentationChartLineIcon_default,
  TruckIcon_default
} from "/build/_shared/chunk-QA7IBH2P.js";
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
  __commonJS,
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// empty-module:~/models/truck.server
var require_truck = __commonJS({
  "empty-module:~/models/truck.server"(exports, module) {
    module.exports = {};
  }
});

// app/routes/snop.truck.tsx
var import_node = __toESM(require_node());

// app/components/TruckForm.tsx
var React = __toESM(require_react());

// app/components/admin-form.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\admin-form.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\admin-form.tsx"
  );
  import.meta.hot.lastModified = "1709193784140.088";
}
function AdminInput({
  admin
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid w-full  gap-10", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-2 items-center gap-1", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, { className: "text-lg", htmlFor: "lyf", children: [
        "Life",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-400 text-sm" }, void 0, false, {
          fileName: "app/components/admin-form.tsx",
          lineNumber: 30,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/admin-form.tsx",
        lineNumber: 28,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, { id: "lyf", name: "life", defaultValue: admin["life"], className: "text-lg text-gray-500 text-center" }, void 0, false, {
        fileName: "app/components/admin-form.tsx",
        lineNumber: 32,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/admin-form.tsx",
      lineNumber: 27,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-2 items-center gap-1", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, { className: "text-lg", htmlFor: "disesel", children: [
        "Diesel Price",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-400 text-sm" }, void 0, false, {
          fileName: "app/components/admin-form.tsx",
          lineNumber: 38,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/admin-form.tsx",
        lineNumber: 36,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, { id: "disesel", name: "diesel_price", defaultValue: admin["diesel_price"], className: "text-lg text-gray-500 text-center" }, void 0, false, {
        fileName: "app/components/admin-form.tsx",
        lineNumber: 40,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/admin-form.tsx",
      lineNumber: 35,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-2 items-center gap-1", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, { className: "text-lg", htmlFor: "load", children: [
        "Loading/ Unloading",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-400 text-sm" }, void 0, false, {
          fileName: "app/components/admin-form.tsx",
          lineNumber: 46,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/admin-form.tsx",
        lineNumber: 44,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, { id: "load", name: "loading_unloading", defaultValue: admin["loading_unloading"], className: "text-lg text-gray-500 text-center" }, void 0, false, {
        fileName: "app/components/admin-form.tsx",
        lineNumber: 48,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/admin-form.tsx",
      lineNumber: 43,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-2 items-center gap-1", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, { className: "text-lg", htmlFor: "tol", children: [
        "Toll",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-400 text-sm" }, void 0, false, {
          fileName: "app/components/admin-form.tsx",
          lineNumber: 54,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/admin-form.tsx",
        lineNumber: 52,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, { id: "tol", name: "toll", defaultValue: admin["toll"], className: "text-lg text-gray-500 text-center" }, void 0, false, {
        fileName: "app/components/admin-form.tsx",
        lineNumber: 56,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/admin-form.tsx",
      lineNumber: 51,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-2 items-center gap-1", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, { className: "text-lg", htmlFor: "route", children: [
        "Route Expenses",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-400 text-sm" }, void 0, false, {
          fileName: "app/components/admin-form.tsx",
          lineNumber: 62,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/admin-form.tsx",
        lineNumber: 60,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, { id: "route", name: "route_expenses", defaultValue: admin["route_expenses"], className: "text-lg text-gray-500 text-center" }, void 0, false, {
        fileName: "app/components/admin-form.tsx",
        lineNumber: 64,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/admin-form.tsx",
      lineNumber: 59,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-2 items-center gap-1", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, { className: "text-lg", htmlFor: "driver", children: [
        "Driver & Cleaner Expenses",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-400 text-sm" }, void 0, false, {
          fileName: "app/components/admin-form.tsx",
          lineNumber: 70,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/admin-form.tsx",
        lineNumber: 68,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, { id: "driver", name: "driver_expenses", defaultValue: admin["driver_expenses"], className: "text-lg text-gray-500 text-center" }, void 0, false, {
        fileName: "app/components/admin-form.tsx",
        lineNumber: 72,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/admin-form.tsx",
      lineNumber: 67,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-2 items-center gap-1", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, { className: "text-lg", htmlFor: "tyr", children: [
        "Tyres",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-400 text-sm" }, void 0, false, {
          fileName: "app/components/admin-form.tsx",
          lineNumber: 78,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/admin-form.tsx",
        lineNumber: 76,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, { id: "tyr", name: "tyres", defaultValue: admin["tyres"], className: "text-lg text-gray-500 text-center" }, void 0, false, {
        fileName: "app/components/admin-form.tsx",
        lineNumber: 80,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/admin-form.tsx",
      lineNumber: 75,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/admin-form.tsx",
    lineNumber: 26,
    columnNumber: 10
  }, this);
}
_c = AdminInput;
var _c;
$RefreshReg$(_c, "AdminInput");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/truck-form.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\truck-form.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\truck-form.tsx"
  );
  import.meta.hot.lastModified = "1709192886535.8079";
}
function TruckInput({
  truck
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "grid w-full  gap-10", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "grid grid-cols-2 items-center gap-1", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Label, { className: "text-lg", htmlFor: "pc", children: [
        "Purchase Cost",
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "text-gray-400 text-sm", children: "inculing Fabrication" }, void 0, false, {
          fileName: "app/components/truck-form.tsx",
          lineNumber: 30,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/truck-form.tsx",
        lineNumber: 28,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Input, { id: "pc", name: "purchase_cost", defaultValue: truck["purchase_cost"], className: "text-lg text-gray-500 text-center" }, void 0, false, {
        fileName: "app/components/truck-form.tsx",
        lineNumber: 32,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/truck-form.tsx",
      lineNumber: 27,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "grid grid-cols-2 items-center gap-1", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Label, { className: "text-lg", htmlFor: "mileagewithload", children: [
        "Mileage with Load",
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "text-gray-400 text-sm" }, void 0, false, {
          fileName: "app/components/truck-form.tsx",
          lineNumber: 38,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/truck-form.tsx",
        lineNumber: 36,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Input, { id: "mileagewithload", name: "mileage_with_load", defaultValue: truck["mileage_with_load"], className: "text-lg text-gray-500 text-center" }, void 0, false, {
        fileName: "app/components/truck-form.tsx",
        lineNumber: 40,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/truck-form.tsx",
      lineNumber: 35,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "grid grid-cols-2 items-center gap-1", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Label, { className: "text-lg", htmlFor: "mileagewithoutload", children: [
        "Mileage without Load",
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "text-gray-400 text-sm" }, void 0, false, {
          fileName: "app/components/truck-form.tsx",
          lineNumber: 46,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/truck-form.tsx",
        lineNumber: 44,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Input, { id: "mileagewithoutload", name: "mileage_without_load", defaultValue: truck["mileage_without_load"], className: "text-lg text-gray-500 text-center" }, void 0, false, {
        fileName: "app/components/truck-form.tsx",
        lineNumber: 48,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/truck-form.tsx",
      lineNumber: 43,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "grid grid-cols-2 items-center gap-1", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Label, { className: "text-lg", htmlFor: "main", children: [
        "Maintenance",
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "text-gray-400 text-sm" }, void 0, false, {
          fileName: "app/components/truck-form.tsx",
          lineNumber: 54,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/truck-form.tsx",
        lineNumber: 52,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Input, { id: "main", name: "maintenance", defaultValue: truck["maintenance"], className: "text-lg text-gray-500 text-center" }, void 0, false, {
        fileName: "app/components/truck-form.tsx",
        lineNumber: 56,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/truck-form.tsx",
      lineNumber: 51,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "grid grid-cols-2 items-center gap-1", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Label, { className: "text-lg", htmlFor: "cap", children: [
        "Capacity",
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "text-gray-400 text-sm" }, void 0, false, {
          fileName: "app/components/truck-form.tsx",
          lineNumber: 62,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/truck-form.tsx",
        lineNumber: 60,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Input, { id: "cap", name: "capacity", defaultValue: truck["capacity"], className: "text-lg text-gray-500 text-center" }, void 0, false, {
        fileName: "app/components/truck-form.tsx",
        lineNumber: 64,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/truck-form.tsx",
      lineNumber: 59,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "grid grid-cols-2 items-center gap-1", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Label, { className: "text-lg", htmlFor: "annual", children: [
        "Annual Distance",
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "text-gray-400 text-sm" }, void 0, false, {
          fileName: "app/components/truck-form.tsx",
          lineNumber: 70,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/truck-form.tsx",
        lineNumber: 68,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Input, { id: "annual", name: "annual_distance", defaultValue: truck["annual_distance"], className: "text-lg text-gray-500 text-center" }, void 0, false, {
        fileName: "app/components/truck-form.tsx",
        lineNumber: 72,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/truck-form.tsx",
      lineNumber: 67,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/truck-form.tsx",
    lineNumber: 26,
    columnNumber: 10
  }, this);
}
_c2 = TruckInput;
var _c2;
$RefreshReg$(_c2, "TruckInput");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/kendo/rawData/truckData.js
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\kendo\\rawData\\truckData.js"
  );
  import.meta.hot.lastModified = "1708503722852.157";
}
var tripData = [
  {
    category: "Variable cost per trip",
    field: 100168
  },
  {
    category: "Fixed cost per Trip",
    field: 21640
  },
  {
    category: "Admin Cost per Trip",
    field: 16197
  },
  {
    category: "Return of sale cost per trip",
    field: -1.26
  },
  // {
  //   category: "Total",
  //   field: 136744,
  // },
  {
    category: "Total",
    summary: "total"
  }
];
var bikeData = [
  {
    category: "Variable Cost",
    field: 1518
  },
  {
    category: "Fixed Cost",
    field: 309
  },
  {
    category: "Admin Cost",
    field: 245
  },
  {
    category: "Profit per bike",
    field: 207
  },
  //  {
  //    category: "Total",
  //    field: 2279,
  //  },
  {
    category: "Total",
    summary: "total"
  }
];

// app/data/truckData.js
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime());
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\data\\truckData.js"
  );
  import.meta.hot.lastModified = "1710768510836.412";
}
var kpiService_m = [
  {
    Name: "Cost per Trip",
    container: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(WrapperWaterfallChart, { data: tripData }, void 0, false, {
      fileName: "app/data/truckData.js",
      lineNumber: 30,
      columnNumber: 16
    }, this)
  },
  {
    Name: "Cost per Unit",
    container: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(WrapperWaterfallChart, { data: bikeData }, void 0, false, {
      fileName: "app/data/truckData.js",
      lineNumber: 34,
      columnNumber: 16
    }, this)
  }
];

// app/components/TruckForm.tsx
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\TruckForm.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\TruckForm.tsx"
  );
  import.meta.hot.lastModified = "1710768488189.4062";
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
var stats = [{
  name: "Cost per Unit (INR/Unit)",
  stat: "2,279"
}, {
  name: "Cost per Trip Margin",
  stat: "136,744"
}, {
  name: "Cost per km",
  stat: "41"
}];
var frameworks = [{
  value: "next.js",
  label: "Kolkata"
}, {
  value: "sveltekit",
  label: "Chennai"
}, {
  value: "nuxt.js",
  label: "Nuxt.js"
}, {
  value: "remix",
  label: "Remix"
}, {
  value: "astro",
  label: "Astro"
}];
function DemoContainer({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: cn("flex items-center justify-center [&>div]:w-full", className), ...props }, void 0, false, {
    fileName: "app/components/TruckForm.tsx",
    lineNumber: 98,
    columnNumber: 10
  }, this);
}
_c3 = DemoContainer;
function TruckForm({
  truckData
}) {
  _s();
  const navigate = useNavigate();
  const params = useParams();
  const [tyopen, settyOpen] = React.useState(false);
  const [value, setValue] = React.useState("");
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "m-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Form, { method: "post", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "mx-2 py-3.5 rounded-t-lg bg-sky-500 border-b ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("nav", { className: "ml-6 pl-6 flex items-center justify-center", "aria-label": "Global", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: " flex gap-x-8 justify-center ", children: navigation.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Link, { to: item.to, className: " text-base lg:text-lg font-semibold leading-6 text-white hover:text-gray-200", children: item.name }, item.id, false, {
      fileName: "app/components/TruckForm.tsx",
      lineNumber: 131,
      columnNumber: 39
    }, this)) }, void 0, false, {
      fileName: "app/components/TruckForm.tsx",
      lineNumber: 130,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/components/TruckForm.tsx",
      lineNumber: 129,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/TruckForm.tsx",
      lineNumber: 128,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "bg-white mx-2 shadow-md rounded-b-lg", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex items-center  justify-between ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h2", { className: "text-xl lg:text-3xl font-bold ml-4 p-2 text-transparent bg-clip-text  bg-gradient-to-r from-blue-700 via-sky-700 to-blue-700 font-display", children: "Transportation Cleansheet" }, void 0, false, {
        fileName: "app/components/TruckForm.tsx",
        lineNumber: 139,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/TruckForm.tsx",
        lineNumber: 138,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "mt-2 items-start justify-center gap-6 rounded-lg p-4 md:grid lg:grid-cols-2 xl:grid-cols-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex items-center space-x-4 justify-between mb-4 p-2 border-b rounded-lg", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex items-center space-x-4", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Input, { className: "text-blue-900 w-40", name: "origin", defaultValue: truckData?.origin || "Chennai" }, void 0, false, {
              fileName: "app/components/TruckForm.tsx",
              lineNumber: 147,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Input, { className: "mx-2 text-blue-900 w-40", name: "destination", defaultValue: truckData?.destination || "Kolkata" }, void 0, false, {
              fileName: "app/components/TruckForm.tsx",
              lineNumber: 149,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Input, { className: "mx-2 text-blue-900 w-40", name: "distance", defaultValue: truckData?.distance || "1,676" }, void 0, false, {
              fileName: "app/components/TruckForm.tsx",
              lineNumber: 151,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Input, { className: "mx-2 text-blue-900 w-40", name: "backhaul", defaultValue: truckData?.backhaul || "backhaul" }, void 0, false, {
              fileName: "app/components/TruckForm.tsx",
              lineNumber: 153,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/TruckForm.tsx",
            lineNumber: 146,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/components/TruckForm.tsx",
            lineNumber: 145,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "mt-8 items-start justify-center gap-6 grid grid-cols-1 lg:grid-cols-2", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(DemoContainer, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Card, { className: "  text-blue-900", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(CardHeader, { className: "space-y-1 ", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(CardTitle, { className: "flex items-center", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(TruckIcon_default, { className: "h-8 w-8 mr-2" }, void 0, false, {
                    fileName: "app/components/TruckForm.tsx",
                    lineNumber: 162,
                    columnNumber: 25
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "text-2xl", children: "Truck Parameters" }, void 0, false, {
                    fileName: "app/components/TruckForm.tsx",
                    lineNumber: 163,
                    columnNumber: 25
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/components/TruckForm.tsx",
                  lineNumber: 161,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "border-b" }, void 0, false, {
                  fileName: "app/components/TruckForm.tsx",
                  lineNumber: 166,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "app/components/TruckForm.tsx",
                lineNumber: 160,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(CardContent, { className: "grid gap-10 mb-2", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "grid grid-cols-2 items-center gap-1", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "text-xl text-blue-900 font-semibold ", children: "Truck Type" }, void 0, false, {
                    fileName: "app/components/TruckForm.tsx",
                    lineNumber: 171,
                    columnNumber: 25
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Popover, { open: tyopen, onOpenChange: settyOpen, children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(PopoverTrigger, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Button, { variant: "outline", role: "combobox", "aria-expanded": tyopen, className: " w-[155px] justify-between text-xl ", children: [
                      value ? frameworks.find((framework) => framework.value === value)?.label : "Kolkata",
                      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(ChevronsUpDown, { className: "ml-2 h-4 w-4 shrink-0 opacity-50" }, void 0, false, {
                        fileName: "app/components/TruckForm.tsx",
                        lineNumber: 179,
                        columnNumber: 33
                      }, this)
                    ] }, void 0, true, {
                      fileName: "app/components/TruckForm.tsx",
                      lineNumber: 177,
                      columnNumber: 31
                    }, this) }, void 0, false, {
                      fileName: "app/components/TruckForm.tsx",
                      lineNumber: 176,
                      columnNumber: 29
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(PopoverContent, { className: "w-[200px] p-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Command, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(CommandGroup, { children: frameworks.map((framework) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(CommandItem, { value: framework.value, onSelect: (currentValue) => {
                      setValue(currentValue === value ? "" : currentValue);
                      settyOpen(false);
                    }, children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Check, { className: cn("mr-2 h-4 w-4", value === framework.value ? "opacity-100" : "opacity-0") }, void 0, false, {
                        fileName: "app/components/TruckForm.tsx",
                        lineNumber: 189,
                        columnNumber: 39
                      }, this),
                      framework.label
                    ] }, framework.value, true, {
                      fileName: "app/components/TruckForm.tsx",
                      lineNumber: 185,
                      columnNumber: 64
                    }, this)) }, void 0, false, {
                      fileName: "app/components/TruckForm.tsx",
                      lineNumber: 184,
                      columnNumber: 33
                    }, this) }, void 0, false, {
                      fileName: "app/components/TruckForm.tsx",
                      lineNumber: 183,
                      columnNumber: 31
                    }, this) }, void 0, false, {
                      fileName: "app/components/TruckForm.tsx",
                      lineNumber: 182,
                      columnNumber: 29
                    }, this)
                  ] }, void 0, true, {
                    fileName: "app/components/TruckForm.tsx",
                    lineNumber: 175,
                    columnNumber: 27
                  }, this) }, void 0, false, {
                    fileName: "app/components/TruckForm.tsx",
                    lineNumber: 174,
                    columnNumber: 25
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/components/TruckForm.tsx",
                  lineNumber: 170,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(TruckInput, { truck: truckData }, void 0, false, {
                  fileName: "app/components/TruckForm.tsx",
                  lineNumber: 199,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "app/components/TruckForm.tsx",
                lineNumber: 169,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/components/TruckForm.tsx",
              lineNumber: 159,
              columnNumber: 19
            }, this) }, void 0, false, {
              fileName: "app/components/TruckForm.tsx",
              lineNumber: 158,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(DemoContainer, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Card, { className: " text-blue-900", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(CardHeader, { className: "space-y-1", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(CardTitle, { className: "flex items-center", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(MapIcon_default, { className: "h-8 w-8 mr-2" }, void 0, false, {
                    fileName: "app/components/TruckForm.tsx",
                    lineNumber: 207,
                    columnNumber: 25
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "text-2xl", children: " Route Admin Expenses" }, void 0, false, {
                    fileName: "app/components/TruckForm.tsx",
                    lineNumber: 208,
                    columnNumber: 25
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/components/TruckForm.tsx",
                  lineNumber: 206,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "border-b" }, void 0, false, {
                  fileName: "app/components/TruckForm.tsx",
                  lineNumber: 211,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "app/components/TruckForm.tsx",
                lineNumber: 205,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(CardContent, { className: "grid gap-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(AdminInput, { admin: truckData }, void 0, false, {
                fileName: "app/components/TruckForm.tsx",
                lineNumber: 214,
                columnNumber: 23
              }, this) }, void 0, false, {
                fileName: "app/components/TruckForm.tsx",
                lineNumber: 213,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/components/TruckForm.tsx",
              lineNumber: 204,
              columnNumber: 19
            }, this) }, void 0, false, {
              fileName: "app/components/TruckForm.tsx",
              lineNumber: 203,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/TruckForm.tsx",
            lineNumber: 157,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex justify-end  pt-6 rounded-lg", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Button, { className: "bg-blue-900 hover:bg-blue-800 text-lg", children: params.bkt ? "Submitting" : "Submit" }, void 0, false, {
            fileName: "app/components/TruckForm.tsx",
            lineNumber: 220,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/components/TruckForm.tsx",
            lineNumber: 219,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/TruckForm.tsx",
          lineNumber: 144,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(DemoContainer, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Card, { className: "shadow-lg text-blue-900", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(CardHeader, { className: "space-y-1", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(CardTitle, { className: "flex items-center", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(PresentationChartLineIcon_default, { className: "h-8 w-8 mr-2" }, void 0, false, {
                fileName: "app/components/TruckForm.tsx",
                lineNumber: 231,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "text-2xl", children: "Cleansheet Summary" }, void 0, false, {
                fileName: "app/components/TruckForm.tsx",
                lineNumber: 232,
                columnNumber: 23
              }, this)
            ] }, void 0, true, {
              fileName: "app/components/TruckForm.tsx",
              lineNumber: 230,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "border-b" }, void 0, false, {
              fileName: "app/components/TruckForm.tsx",
              lineNumber: 235,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/TruckForm.tsx",
            lineNumber: 229,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(CardContent, { className: "grid gap-4", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("dl", { className: "grid grid-cols-1 gap-6 sm:grid-cols-3", children: stats.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "rounded-2xl bg-gray-100 border px-4 py-5 shadow", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("dd", { className: "flex justify-center mt-1 text-3xl font-semibold tracking-tight text-blue-900", children: item.stat }, void 0, false, {
                fileName: "app/components/TruckForm.tsx",
                lineNumber: 240,
                columnNumber: 29
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("dt", { className: "mt-2 flex justify-center truncate text-sm font-medium text-gray-500", children: item.name }, void 0, false, {
                fileName: "app/components/TruckForm.tsx",
                lineNumber: 243,
                columnNumber: 29
              }, this)
            ] }, item.name, true, {
              fileName: "app/components/TruckForm.tsx",
              lineNumber: 239,
              columnNumber: 44
            }, this)) }, void 0, false, {
              fileName: "app/components/TruckForm.tsx",
              lineNumber: 238,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("ul", { role: "list", className: "grid grid-cols-1 gap-2 mt-2", children: kpiService_m.map((kpi) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { className: "col-span-1 flex flex-col divide-y divide-white", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "relative flex flex-1 flex-col p-2", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex items-baseline gap-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h3", { className: "text-base font-medium text-gray-900", children: kpi.Name }, void 0, false, {
                fileName: "app/components/TruckForm.tsx",
                lineNumber: 255,
                columnNumber: 33
              }, this) }, void 0, false, {
                fileName: "app/components/TruckForm.tsx",
                lineNumber: 253,
                columnNumber: 29
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "mt-2", children: kpi.container }, void 0, false, {
                fileName: "app/components/TruckForm.tsx",
                lineNumber: 260,
                columnNumber: 29
              }, this)
            ] }, void 0, true, {
              fileName: "app/components/TruckForm.tsx",
              lineNumber: 252,
              columnNumber: 27
            }, this) }, kpi.Name, false, {
              fileName: "app/components/TruckForm.tsx",
              lineNumber: 251,
              columnNumber: 48
            }, this)) }, void 0, false, {
              fileName: "app/components/TruckForm.tsx",
              lineNumber: 250,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/TruckForm.tsx",
            lineNumber: 237,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/TruckForm.tsx",
          lineNumber: 228,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/components/TruckForm.tsx",
          lineNumber: 227,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/components/TruckForm.tsx",
          lineNumber: 226,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/TruckForm.tsx",
        lineNumber: 143,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/TruckForm.tsx",
      lineNumber: 137,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/TruckForm.tsx",
    lineNumber: 127,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/TruckForm.tsx",
    lineNumber: 126,
    columnNumber: 10
  }, this);
}
_s(TruckForm, "a4ejNUju6YGMN8HCgVmhwTXGZD0=", false, function() {
  return [useNavigate, useParams];
});
_c22 = TruckForm;
var _c3;
var _c22;
$RefreshReg$(_c3, "DemoContainer");
$RefreshReg$(_c22, "TruckForm");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/snop.truck.tsx
var import_input4 = __toESM(require_input());
var import_truck = __toESM(require_truck());
var import_jsx_dev_runtime5 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\snop.truck.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\snop.truck.tsx"
  );
  import.meta.hot.lastModified = "1710756168338.3523";
}
function SnopInput() {
  _s2();
  const {
    snopTruck
  } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(TruckForm, { truckData: snopTruck }, void 0, false, {
    fileName: "app/routes/snop.truck.tsx",
    lineNumber: 57,
    columnNumber: 10
  }, this);
}
_s2(SnopInput, "MX2T+/mrJxNDRWNiqVo4M2meCWI=", false, function() {
  return [useLoaderData];
});
_c4 = SnopInput;
var _c4;
$RefreshReg$(_c4, "SnopInput");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  SnopInput as default
};
//# sourceMappingURL=/build/routes/snop.truck-YUAE5ZUJ.js.map
