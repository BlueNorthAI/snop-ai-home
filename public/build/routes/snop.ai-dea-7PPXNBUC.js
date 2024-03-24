import {
  DataTableRowActions,
  priorities,
  statuses
} from "/build/_shared/chunk-EAG7C74O.js";
import {
  DataTableColumnHeader,
  DataTableFacetedFilter,
  DataTablePagination,
  DataTableViewOptions
} from "/build/_shared/chunk-L66TXA4L.js";
import "/build/_shared/chunk-YSPQ2ZCH.js";
import "/build/_shared/chunk-OZOMGVIH.js";
import "/build/_shared/chunk-ZPK2AWEZ.js";
import "/build/_shared/chunk-YSJMGTXM.js";
import {
  Badge,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  flexRender,
  getCoreRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable
} from "/build/_shared/chunk-CYDWZMPA.js";
import "/build/_shared/chunk-FJ6576BF.js";
import "/build/_shared/chunk-XFJ7VQR3.js";
import "/build/_shared/chunk-66XC2EWC.js";
import {
  Input
} from "/build/_shared/chunk-HIZXLO3O.js";
import {
  ArrowDownIcon,
  ArrowRightIcon,
  ArrowUpIcon,
  CheckCircledIcon,
  CircleIcon,
  Cross2Icon,
  CrossCircledIcon,
  QuestionMarkCircledIcon,
  StopwatchIcon
} from "/build/_shared/chunk-AIC7NVQ5.js";
import "/build/_shared/chunk-CPS4G365.js";
import "/build/_shared/chunk-DQMH5JL2.js";
import "/build/_shared/chunk-YOJGWH76.js";
import "/build/_shared/chunk-KTF7K347.js";
import {
  Button
} from "/build/_shared/chunk-LFFJ36YN.js";
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
import {
  require_react
} from "/build/_shared/chunk-BOXFZXVX.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/snop.ai-dea.tsx
var import_node = __toESM(require_node());

// app/data/ideadata/data.tsx
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\data\\ideadata\\data.tsx"
  );
  import.meta.hot.lastModified = "1710849687985.206";
}
var labels = [
  {
    value: "Logistics",
    label: "Logistics",
    color: "bg-blue-100",
    textClr: "text-blue-800"
  },
  {
    value: "Demand-Planning",
    label: "Demand Planning",
    color: "bg-green-100",
    textClr: "text-green-800"
  },
  {
    value: "Inventory",
    label: "Inventory",
    color: "bg-rose-100",
    textClr: "text-rose-800"
  }
];
var statuses2 = [
  {
    value: "backlog",
    label: "Backlog",
    icon: QuestionMarkCircledIcon
  },
  {
    value: "todo",
    label: "Todo",
    icon: CircleIcon
  },
  {
    value: "in progress",
    label: "In Progress",
    icon: StopwatchIcon
  },
  {
    value: "done",
    label: "Done",
    icon: CheckCircledIcon
  },
  {
    value: "canceled",
    label: "Canceled",
    icon: CrossCircledIcon
  }
];
var priorities2 = [
  {
    label: "Low",
    value: "low",
    icon: ArrowDownIcon
  },
  {
    label: "Medium",
    value: "medium",
    icon: ArrowRightIcon
  },
  {
    label: "High",
    value: "high",
    icon: ArrowUpIcon
  }
];

// app/components/columns-idea.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\columns-idea.tsx"
  );
  import.meta.hot.lastModified = "1710851053351.6492";
}
var columns = [
  {
    id: "select",
    header: ({ table }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
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
        fileName: "app/components/columns-idea.tsx",
        lineNumber: 26,
        columnNumber: 7
      },
      this
    ),
    cell: ({ row }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
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
        fileName: "app/components/columns-idea.tsx",
        lineNumber: 34,
        columnNumber: 7
      },
      this
    ),
    enableSorting: false,
    enableHiding: false
  },
  {
    accessorKey: "id",
    header: ({ column }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DataTableColumnHeader, { column, title: "Idea" }, void 0, false, {
      fileName: "app/components/columns-idea.tsx",
      lineNumber: 47,
      columnNumber: 7
    }, this),
    cell: ({ row }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-[80px]", children: row.getValue("id") }, void 0, false, {
      fileName: "app/components/columns-idea.tsx",
      lineNumber: 49,
      columnNumber: 24
    }, this),
    enableSorting: false,
    enableHiding: false
  },
  {
    accessorKey: "priority",
    header: ({ column }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DataTableColumnHeader, { column, title: "Impact" }, void 0, false, {
      fileName: "app/components/columns-idea.tsx",
      lineNumber: 56,
      columnNumber: 7
    }, this),
    cell: ({ row }) => {
      const priority = priorities2.find(
        (priority2) => priority2.value === row.getValue("priority")
      );
      if (!priority) {
        return null;
      }
      return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center", children: [
        priority.icon ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(priority.icon, { className: "mr-2 h-4 w-4 text-muted-foreground" }, void 0, false, {
          fileName: "app/components/columns-idea.tsx",
          lineNumber: 70,
          columnNumber: 13
        }, this) : null,
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: priority.label }, void 0, false, {
          fileName: "app/components/columns-idea.tsx",
          lineNumber: 72,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/columns-idea.tsx",
        lineNumber: 68,
        columnNumber: 9
      }, this);
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    }
  },
  {
    accessorKey: "title",
    header: ({ column }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DataTableColumnHeader, { column, title: "Title" }, void 0, false, {
      fileName: "app/components/columns-idea.tsx",
      lineNumber: 83,
      columnNumber: 7
    }, this),
    cell: ({ row }) => {
      const label = labels.find((label2) => label2.value === row.original.label);
      return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex space-x-2", children: [
        label ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          Badge,
          {
            className: `${label.color} ${label.textClr}`,
            variant: "outline",
            children: label.label
          },
          void 0,
          false,
          {
            fileName: "app/components/columns-idea.tsx",
            lineNumber: 91,
            columnNumber: 13
          },
          this
        ) : null,
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "max-w-[500px] truncate font-medium ", children: row.getValue("title") }, void 0, false, {
          fileName: "app/components/columns-idea.tsx",
          lineNumber: 98,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/columns-idea.tsx",
        lineNumber: 89,
        columnNumber: 9
      }, this);
    }
  },
  {
    accessorKey: "status",
    header: ({ column }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DataTableColumnHeader, { column, title: "Status" }, void 0, false, {
      fileName: "app/components/columns-idea.tsx",
      lineNumber: 108,
      columnNumber: 7
    }, this),
    cell: ({ row }) => {
      const status = statuses2.find(
        (status2) => status2.value === row.getValue("status")
      );
      if (!status) {
        return null;
      }
      return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex w-[100px] items-center", children: [
        status.icon ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(status.icon, { className: "mr-2 h-4 w-4 text-muted-foreground" }, void 0, false, {
          fileName: "app/components/columns-idea.tsx",
          lineNumber: 122,
          columnNumber: 13
        }, this) : null,
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: status.label }, void 0, false, {
          fileName: "app/components/columns-idea.tsx",
          lineNumber: 124,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/columns-idea.tsx",
        lineNumber: 120,
        columnNumber: 9
      }, this);
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    }
  },
  {
    id: "actions",
    cell: ({ row }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DataTableRowActions, { row }, void 0, false, {
      fileName: "app/components/columns-idea.tsx",
      lineNumber: 135,
      columnNumber: 24
    }, this)
  }
];

// app/components/data-table-idea.tsx
var React = __toESM(require_react());

// app/components/data-table-toolbar-idea.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\data-table-toolbar-idea.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\data-table-toolbar-idea.tsx"
  );
  import.meta.hot.lastModified = "1710850965507.9646";
}
function DataTableToolbar({
  table
}) {
  const isFiltered = table.getState().columnFilters.length > 0;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex items-center justify-between", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-1 items-center space-x-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Input, { placeholder: "Filter Idea...", value: table.getColumn("title")?.getFilterValue() ?? "", onChange: (event) => table.getColumn("title")?.setFilterValue(event.target.value), className: "h-8 w-[150px] lg:w-[250px]" }, void 0, false, {
        fileName: "app/components/data-table-toolbar-idea.tsx",
        lineNumber: 33,
        columnNumber: 9
      }, this),
      table.getColumn("status") && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DataTableFacetedFilter, { column: table.getColumn("status"), title: "Status", options: statuses }, void 0, false, {
        fileName: "app/components/data-table-toolbar-idea.tsx",
        lineNumber: 34,
        columnNumber: 39
      }, this),
      table.getColumn("priority") && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DataTableFacetedFilter, { column: table.getColumn("priority"), title: "Priority", options: priorities }, void 0, false, {
        fileName: "app/components/data-table-toolbar-idea.tsx",
        lineNumber: 35,
        columnNumber: 41
      }, this),
      isFiltered && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button, { variant: "ghost", onClick: () => table.resetColumnFilters(), className: "h-8 px-2 lg:px-3", children: [
        "Reset",
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Cross2Icon, { className: "ml-2 h-4 w-4" }, void 0, false, {
          fileName: "app/components/data-table-toolbar-idea.tsx",
          lineNumber: 38,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/data-table-toolbar-idea.tsx",
        lineNumber: 36,
        columnNumber: 24
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/data-table-toolbar-idea.tsx",
      lineNumber: 32,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DataTableViewOptions, { table }, void 0, false, {
      fileName: "app/components/data-table-toolbar-idea.tsx",
      lineNumber: 41,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/data-table-toolbar-idea.tsx",
    lineNumber: 31,
    columnNumber: 10
  }, this);
}
_c = DataTableToolbar;
var _c;
$RefreshReg$(_c, "DataTableToolbar");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/data-table-idea.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\data-table-idea.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\data-table-idea.tsx"
  );
  import.meta.hot.lastModified = "1710850953390.4934";
}
function DataTable({
  columns: columns2,
  data
}) {
  _s();
  const [rowSelection, setRowSelection] = React.useState({});
  const [columnVisibility, setColumnVisibility] = React.useState({});
  const [columnFilters, setColumnFilters] = React.useState([]);
  const [sorting, setSorting] = React.useState([]);
  const table = useReactTable({
    data,
    columns: columns2,
    state: {
      sorting,
      columnVisibility,
      rowSelection,
      columnFilters
    },
    enableRowSelection: true,
    onRowSelectionChange: setRowSelection,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues()
  });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "space-y-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(DataTableToolbar, { table }, void 0, false, {
      fileName: "app/components/data-table-idea.tsx",
      lineNumber: 58,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "rounded-md border", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Table, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(TableHeader, { children: table.getHeaderGroups().map((headerGroup) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(TableRow, { children: headerGroup.headers.map((header) => {
        return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(TableHead, { colSpan: header.colSpan, children: header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext()) }, header.id, false, {
          fileName: "app/components/data-table-idea.tsx",
          lineNumber: 64,
          columnNumber: 22
        }, this);
      }) }, headerGroup.id, false, {
        fileName: "app/components/data-table-idea.tsx",
        lineNumber: 62,
        columnNumber: 57
      }, this)) }, void 0, false, {
        fileName: "app/components/data-table-idea.tsx",
        lineNumber: 61,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(TableBody, { children: table.getRowModel().rows?.length ? table.getRowModel().rows.map((row) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(TableRow, { "data-state": row.getIsSelected() && "selected", children: row.getVisibleCells().map((cell) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(TableCell, { children: flexRender(cell.column.columnDef.cell, cell.getContext()) }, cell.id, false, {
        fileName: "app/components/data-table-idea.tsx",
        lineNumber: 72,
        columnNumber: 54
      }, this)) }, row.id, false, {
        fileName: "app/components/data-table-idea.tsx",
        lineNumber: 71,
        columnNumber: 85
      }, this)) : /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(TableRow, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(TableCell, { colSpan: columns2.length, className: "h-24 text-center", children: "No results." }, void 0, false, {
        fileName: "app/components/data-table-idea.tsx",
        lineNumber: 76,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "app/components/data-table-idea.tsx",
        lineNumber: 75,
        columnNumber: 32
      }, this) }, void 0, false, {
        fileName: "app/components/data-table-idea.tsx",
        lineNumber: 70,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/data-table-idea.tsx",
      lineNumber: 60,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/data-table-idea.tsx",
      lineNumber: 59,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(DataTablePagination, { table }, void 0, false, {
      fileName: "app/components/data-table-idea.tsx",
      lineNumber: 83,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/data-table-idea.tsx",
    lineNumber: 57,
    columnNumber: 10
  }, this);
}
_s(DataTable, "AjGf1qisLuzPDW1m9DjbiLObyNE=", false, function() {
  return [useReactTable];
});
_c2 = DataTable;
var _c2;
$RefreshReg$(_c2, "DataTable");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/snop.ai-dea.tsx
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\snop.ai-dea.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\snop.ai-dea.tsx"
  );
  import.meta.hot.lastModified = "1710851013967.373";
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
  _s2();
  const {
    tasks
  } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_jsx_dev_runtime4.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "m-2", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "mx-2 py-3.5 rounded-t-lg bg-sky-500 border-b ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("nav", { className: "ml-6 pl-6 flex items-center justify-center", "aria-label": "Global", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: " flex gap-x-8 justify-center ", children: navigation.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Link, { to: item.to, className: " text-base lg:text-lg font-semibold leading-6 text-white hover:text-gray-200", children: item.name }, item.id, false, {
      fileName: "app/routes/snop.ai-dea.tsx",
      lineNumber: 85,
      columnNumber: 39
    }, this)) }, void 0, false, {
      fileName: "app/routes/snop.ai-dea.tsx",
      lineNumber: 84,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/routes/snop.ai-dea.tsx",
      lineNumber: 83,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/snop.ai-dea.tsx",
      lineNumber: 82,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "bg-white mx-2 shadow-md rounded-b-lg", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex items-center  justify-between", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h2", { className: "text-3xl font-bold ml-4 p-2 text-transparent bg-clip-text   bg-gradient-to-r from-blue-700 via-sky-700 to-blue-700 font-display", children: "Control Tower - List of Idea" }, void 0, false, {
        fileName: "app/routes/snop.ai-dea.tsx",
        lineNumber: 93,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/snop.ai-dea.tsx",
        lineNumber: 92,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "m-4 bg-white rounded-lg p-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(DataTable, { data: tasks, columns }, void 0, false, {
        fileName: "app/routes/snop.ai-dea.tsx",
        lineNumber: 99,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/snop.ai-dea.tsx",
        lineNumber: 98,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/snop.ai-dea.tsx",
      lineNumber: 91,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/snop.ai-dea.tsx",
    lineNumber: 81,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/snop.ai-dea.tsx",
    lineNumber: 80,
    columnNumber: 10
  }, this);
}
_s2(TaskPage, "JwSV+PV394aTvUddxZmmlRZ6904=", false, function() {
  return [useLoaderData];
});
_c3 = TaskPage;
var _c3;
$RefreshReg$(_c3, "TaskPage");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  TaskPage as default
};
//# sourceMappingURL=/build/routes/snop.ai-dea-7PPXNBUC.js.map
