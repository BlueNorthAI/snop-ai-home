import {
  DataTable,
  Progress,
  statuses
} from "/build/_shared/chunk-QRSDUAJR.js";
import {
  DataTableColumnHeader
} from "/build/_shared/chunk-L66TXA4L.js";
import "/build/_shared/chunk-YSPQ2ZCH.js";
import "/build/_shared/chunk-OZOMGVIH.js";
import "/build/_shared/chunk-ZPK2AWEZ.js";
import {
  Badge,
  Checkbox
} from "/build/_shared/chunk-CYDWZMPA.js";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "/build/_shared/chunk-FJ6576BF.js";
import "/build/_shared/chunk-XFJ7VQR3.js";
import "/build/_shared/chunk-66XC2EWC.js";
import "/build/_shared/chunk-HIZXLO3O.js";
import "/build/_shared/chunk-AIC7NVQ5.js";
import "/build/_shared/chunk-CPS4G365.js";
import "/build/_shared/chunk-DQMH5JL2.js";
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

// app/routes/snop.insight.tsx
var import_node = __toESM(require_node());

// app/components/data-table-row-actions-insight.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\data-table-row-actions-insight.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\data-table-row-actions-insight.tsx"
  );
  import.meta.hot.lastModified = "1711198583760.1375";
}
function DataTableRowActions({
  row
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Select, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectTrigger, { className: "w-[110px] border", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectValue, { placeholder: "Select" }, void 0, false, {
      fileName: "app/components/data-table-row-actions-insight.tsx",
      lineNumber: 29,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/data-table-row-actions-insight.tsx",
      lineNumber: 28,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectContent, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectGroup, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectItem, { value: "apple", children: "New Insights" }, void 0, false, {
        fileName: "app/components/data-table-row-actions-insight.tsx",
        lineNumber: 33,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectItem, { value: "banana", children: "In Review" }, void 0, false, {
        fileName: "app/components/data-table-row-actions-insight.tsx",
        lineNumber: 34,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/data-table-row-actions-insight.tsx",
      lineNumber: 32,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/data-table-row-actions-insight.tsx",
      lineNumber: 31,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/data-table-row-actions-insight.tsx",
    lineNumber: 27,
    columnNumber: 10
  }, this);
}
_c = DataTableRowActions;
var _c;
$RefreshReg$(_c, "DataTableRowActions");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/columns-insight.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\columns-insight.tsx"
  );
  import.meta.hot.lastModified = "1711199287037.9893";
}
var columns = [
  {
    id: "select",
    header: ({ table }) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
      Checkbox,
      {
        checked: table.getIsAllPageRowsSelected(),
        onCheckedChange: (value) => table.toggleAllPageRowsSelected(!!value),
        "aria-label": "Select all",
        className: "translate-y-[2px]"
      },
      void 0,
      false,
      {
        fileName: "app/components/columns-insight.tsx",
        lineNumber: 25,
        columnNumber: 7
      },
      this
    ),
    cell: ({ row }) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
      Checkbox,
      {
        checked: row.getIsSelected(),
        onCheckedChange: (value) => row.toggleSelected(!!value),
        "aria-label": "Select row",
        className: "translate-y-[2px]"
      },
      void 0,
      false,
      {
        fileName: "app/components/columns-insight.tsx",
        lineNumber: 33,
        columnNumber: 7
      },
      this
    ),
    enableSorting: false,
    enableHiding: false
  },
  {
    accessorKey: "id",
    header: ({ column }) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DataTableColumnHeader, { column, title: "Insight" }, void 0, false, {
      fileName: "app/components/columns-insight.tsx",
      lineNumber: 46,
      columnNumber: 7
    }, this),
    cell: ({ row }) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "w-[80px]", children: row.getValue("id") }, void 0, false, {
      fileName: "app/components/columns-insight.tsx",
      lineNumber: 48,
      columnNumber: 24
    }, this),
    enableSorting: false,
    enableHiding: false
  },
  {
    accessorKey: "status",
    header: ({ column }) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DataTableColumnHeader, { column, title: "Status" }, void 0, false, {
      fileName: "app/components/columns-insight.tsx",
      lineNumber: 55,
      columnNumber: 7
    }, this),
    cell: ({ row }) => {
      const status = statuses.find(
        (status2) => status2.value === row.getValue("status")
      );
      if (!status) {
        return null;
      }
      return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex w-[150px] items-center", children: [
        status && status.icon ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
          "svg",
          {
            className: `${status.fill} mr-2 h-2 w-2`,
            viewBox: "0 0 6 6",
            "aria-hidden": "true",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("circle", { cx: 3, cy: 3, r: 3 }, void 0, false, {
              fileName: "app/components/columns-insight.tsx",
              lineNumber: 74,
              columnNumber: 15
            }, this)
          },
          void 0,
          false,
          {
            fileName: "app/components/columns-insight.tsx",
            lineNumber: 69,
            columnNumber: 13
          },
          this
        ) : null,
        status && status.label ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { children: status.label }, void 0, false, {
          fileName: "app/components/columns-insight.tsx",
          lineNumber: 77,
          columnNumber: 37
        }, this) : null,
        " "
      ] }, void 0, true, {
        fileName: "app/components/columns-insight.tsx",
        lineNumber: 67,
        columnNumber: 9
      }, this);
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    }
  },
  {
    accessorKey: "module",
    header: ({ column }) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DataTableColumnHeader, { column, title: "Module" }, void 0, false, {
      fileName: "app/components/columns-insight.tsx",
      lineNumber: 88,
      columnNumber: 7
    }, this),
    cell: ({ row }) => {
      const status = statuses.find(
        (status2) => status2.value === row.getValue("status")
      );
      return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: status ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
        Badge,
        {
          className: `${status.color} ${status.textClr}`,
          variant: "outline",
          children: row.getValue("module")
        },
        void 0,
        false,
        {
          fileName: "app/components/columns-insight.tsx",
          lineNumber: 98,
          columnNumber: 13
        },
        this
      ) : null }, void 0, false, {
        fileName: "app/components/columns-insight.tsx",
        lineNumber: 96,
        columnNumber: 9
      }, this);
    }
  },
  {
    accessorKey: "title",
    header: ({ column }) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DataTableColumnHeader, { column, title: "Title" }, void 0, false, {
      fileName: "app/components/columns-insight.tsx",
      lineNumber: 112,
      columnNumber: 7
    }, this),
    cell: ({ row }) => {
      return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex space-x-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "max-w-[500px] truncate font-medium ", children: row.getValue("title") }, void 0, false, {
        fileName: "app/components/columns-insight.tsx",
        lineNumber: 117,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/components/columns-insight.tsx",
        lineNumber: 116,
        columnNumber: 9
      }, this);
    }
  },
  {
    accessorKey: "avg",
    header: ({ column }) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DataTableColumnHeader, { column, title: "Avg.Deviation" }, void 0, false, {
      fileName: "app/components/columns-insight.tsx",
      lineNumber: 127,
      columnNumber: 7
    }, this),
    cell: ({ row }) => {
      const avg = row.getValue("avg");
      return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "flex max-w-[100px] truncate font-medium ", children: avg["av1"] }, void 0, false, {
          fileName: "app/components/columns-insight.tsx",
          lineNumber: 133,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "flex truncate", children: avg["av2"] }, void 0, false, {
          fileName: "app/components/columns-insight.tsx",
          lineNumber: 137,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/columns-insight.tsx",
        lineNumber: 132,
        columnNumber: 9
      }, this);
    }
  },
  {
    accessorKey: "inv",
    header: ({ column }) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DataTableColumnHeader, { column, title: "On Hand Inventory" }, void 0, false, {
      fileName: "app/components/columns-insight.tsx",
      lineNumber: 145,
      columnNumber: 7
    }, this),
    cell: ({ row }) => {
      return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex space-x-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "max-w-[100px] truncate font-medium ", children: row.getValue("inv") }, void 0, false, {
        fileName: "app/components/columns-insight.tsx",
        lineNumber: 150,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/components/columns-insight.tsx",
        lineNumber: 149,
        columnNumber: 9
      }, this);
    }
  },
  {
    accessorKey: "safe",
    header: ({ column }) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DataTableColumnHeader, { column, title: "Safety Stock" }, void 0, false, {
      fileName: "app/components/columns-insight.tsx",
      lineNumber: 160,
      columnNumber: 7
    }, this),
    cell: ({ row }) => {
      return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex space-x-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "max-w-[100px] truncate font-medium ", children: row.getValue("safe") }, void 0, false, {
        fileName: "app/components/columns-insight.tsx",
        lineNumber: 165,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/components/columns-insight.tsx",
        lineNumber: 164,
        columnNumber: 9
      }, this);
    }
  },
  {
    accessorKey: "progress",
    header: ({ column }) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DataTableColumnHeader, { column, title: "Module" }, void 0, false, {
      fileName: "app/components/columns-insight.tsx",
      lineNumber: 175,
      columnNumber: 7
    }, this),
    cell: ({ row }) => {
      return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
        Progress,
        {
          indicatorColor: `${Number(row.getValue("progress")) > 50 ? "bg-green-400" : "bg-red-400"}`,
          value: row.getValue("progress")
        },
        void 0,
        false,
        {
          fileName: "app/components/columns-insight.tsx",
          lineNumber: 180,
          columnNumber: 11
        },
        this
      ) }, void 0, false, {
        fileName: "app/components/columns-insight.tsx",
        lineNumber: 179,
        columnNumber: 9
      }, this);
    }
  },
  {
    id: "actions",
    cell: ({ row }) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DataTableRowActions, { row }, void 0, false, {
      fileName: "app/components/columns-insight.tsx",
      lineNumber: 195,
      columnNumber: 24
    }, this)
  }
];

// app/routes/snop.insight.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\snop.insight.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\snop.insight.tsx"
  );
  import.meta.hot.lastModified = "1711185231673.7004";
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
    tasks
  } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_jsx_dev_runtime3.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "m-2", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "mx-2 py-3.5 rounded-t-lg bg-sky-500 border-b ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("nav", { className: "ml-6 pl-6 flex items-center justify-center", "aria-label": "Global", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: " flex gap-x-8 justify-center ", children: navigation.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Link, { to: item.to, className: " text-base lg:text-lg font-semibold leading-6 text-white hover:text-gray-200", children: item.name }, item.id, false, {
      fileName: "app/routes/snop.insight.tsx",
      lineNumber: 85,
      columnNumber: 39
    }, this)) }, void 0, false, {
      fileName: "app/routes/snop.insight.tsx",
      lineNumber: 84,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/routes/snop.insight.tsx",
      lineNumber: 83,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/snop.insight.tsx",
      lineNumber: 82,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "bg-white mx-2 shadow-md rounded-b-lg", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex items-center  justify-between", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h2", { className: "text-3xl font-bold ml-4 p-2 text-transparent bg-clip-text   bg-gradient-to-r from-blue-700 via-sky-700 to-blue-700 font-display", children: "Control Tower - List of Idea" }, void 0, false, {
        fileName: "app/routes/snop.insight.tsx",
        lineNumber: 93,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/snop.insight.tsx",
        lineNumber: 92,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "m-4 bg-white rounded-lg p-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(DataTable, { data: tasks, columns }, void 0, false, {
        fileName: "app/routes/snop.insight.tsx",
        lineNumber: 99,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/snop.insight.tsx",
        lineNumber: 98,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/snop.insight.tsx",
      lineNumber: 91,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/snop.insight.tsx",
    lineNumber: 81,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/snop.insight.tsx",
    lineNumber: 80,
    columnNumber: 10
  }, this);
}
_s(TaskPage, "JwSV+PV394aTvUddxZmmlRZ6904=", false, function() {
  return [useLoaderData];
});
_c2 = TaskPage;
var _c2;
$RefreshReg$(_c2, "TaskPage");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  TaskPage as default
};
//# sourceMappingURL=/build/routes/snop.insight-OZMMX43I.js.map
