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
  useReactTable,
  z
} from "/build/_shared/chunk-2AWGSZ33.js";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "/build/_shared/chunk-TT7DNJ63.js";
import {
  Input
} from "/build/_shared/chunk-OOZ4X63L.js";
import {
  ArrowDownIcon,
  ArrowUpIcon,
  CaretSortIcon,
  CheckCircledIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  CircleIcon,
  Cross2Icon,
  CrossCircledIcon,
  DotsHorizontalIcon,
  DoubleArrowLeftIcon,
  DoubleArrowRightIcon,
  EyeNoneIcon,
  QuestionMarkCircledIcon,
  StopwatchIcon
} from "/build/_shared/chunk-AIC7NVQ5.js";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "/build/_shared/chunk-WMPYSF63.js";
import {
  Button
} from "/build/_shared/chunk-4U2ZCKCX.js";
import {
  cn
} from "/build/_shared/chunk-TRC5XD27.js";
import {
  Link,
  useFetcher
} from "/build/_shared/chunk-NON4LQMM.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  createHotContext
} from "/build/_shared/chunk-K4XMOQHS.js";
import {
  require_react
} from "/build/_shared/chunk-BOXFZXVX.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/data/ui/data.tsx
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\data\\ui\\data.tsx"
  );
  import.meta.hot.lastModified = "1708695361245.7703";
}
var statuses = [
  {
    value: "Open",
    label: "Open",
    icon: QuestionMarkCircledIcon
  },
  {
    value: "Submitted",
    label: "Submitted",
    icon: CircleIcon
  },
  {
    value: "In-Progress",
    label: "In Progress",
    icon: StopwatchIcon
  },
  {
    value: "Archived",
    label: "Archived",
    icon: StopwatchIcon
  },
  {
    value: "Completed",
    label: "Completed",
    icon: CheckCircledIcon
  },
  {
    value: "Canceled",
    label: "Canceled",
    icon: CrossCircledIcon
  }
];

// app/components/data-table-column-header.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\data-table-column-header.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\data-table-column-header.tsx"
  );
  import.meta.hot.lastModified = "1708503722744.743";
}
function DataTableColumnHeader({
  column,
  title,
  className
}) {
  if (!column.getCanSort()) {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: cn(className), children: title }, void 0, false, {
      fileName: "app/components/data-table-column-header.tsx",
      lineNumber: 31,
      columnNumber: 12
    }, this);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: cn("flex items-center space-x-2", className), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenu, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { variant: "ghost", size: "sm", className: "-ml-3 h-8 data-[state=open]:bg-accent", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: title }, void 0, false, {
        fileName: "app/components/data-table-column-header.tsx",
        lineNumber: 37,
        columnNumber: 13
      }, this),
      column.getIsSorted() === "desc" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowDownIcon, { className: "ml-2 h-4 w-4" }, void 0, false, {
        fileName: "app/components/data-table-column-header.tsx",
        lineNumber: 38,
        columnNumber: 48
      }, this) : column.getIsSorted() === "asc" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowUpIcon, { className: "ml-2 h-4 w-4" }, void 0, false, {
        fileName: "app/components/data-table-column-header.tsx",
        lineNumber: 38,
        columnNumber: 126
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CaretSortIcon, { className: "ml-2 h-4 w-4" }, void 0, false, {
        fileName: "app/components/data-table-column-header.tsx",
        lineNumber: 38,
        columnNumber: 169
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/data-table-column-header.tsx",
      lineNumber: 36,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/data-table-column-header.tsx",
      lineNumber: 35,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuContent, { align: "start", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuItem, { onClick: () => column.toggleSorting(false), children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowUpIcon, { className: "mr-2 h-3.5 w-3.5 text-muted-foreground/70" }, void 0, false, {
          fileName: "app/components/data-table-column-header.tsx",
          lineNumber: 43,
          columnNumber: 13
        }, this),
        "Asc"
      ] }, void 0, true, {
        fileName: "app/components/data-table-column-header.tsx",
        lineNumber: 42,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuItem, { onClick: () => column.toggleSorting(true), children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowDownIcon, { className: "mr-2 h-3.5 w-3.5 text-muted-foreground/70" }, void 0, false, {
          fileName: "app/components/data-table-column-header.tsx",
          lineNumber: 47,
          columnNumber: 13
        }, this),
        "Desc"
      ] }, void 0, true, {
        fileName: "app/components/data-table-column-header.tsx",
        lineNumber: 46,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuSeparator, {}, void 0, false, {
        fileName: "app/components/data-table-column-header.tsx",
        lineNumber: 50,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuItem, { onClick: () => column.toggleVisibility(false), children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(EyeNoneIcon, { className: "mr-2 h-3.5 w-3.5 text-muted-foreground/70" }, void 0, false, {
          fileName: "app/components/data-table-column-header.tsx",
          lineNumber: 52,
          columnNumber: 13
        }, this),
        "Hide"
      ] }, void 0, true, {
        fileName: "app/components/data-table-column-header.tsx",
        lineNumber: 51,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/data-table-column-header.tsx",
      lineNumber: 41,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/data-table-column-header.tsx",
    lineNumber: 34,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/data-table-column-header.tsx",
    lineNumber: 33,
    columnNumber: 10
  }, this);
}
_c = DataTableColumnHeader;
var _c;
$RefreshReg$(_c, "DataTableColumnHeader");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/data/ui/schema.ts
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\data\\ui\\schema.ts"
  );
  import.meta.hot.lastModified = "1708503722794.0076";
}
var taskSchema = z.object({
  scenario_id: z.string(),
  description: z.string(),
  CreatedAt: z.string(),
  UpdatedAt: z.string(),
  module: z.string(),
  Status: z.string()
});

// app/components/data-table-row-actions.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\data-table-row-actions.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\data-table-row-actions.tsx"
  );
  import.meta.hot.lastModified = "1708924052779.3477";
}
function DataTableRowActions({
  row
}) {
  _s();
  const task = taskSchema.parse(row.original);
  const fetcher = useFetcher();
  console.log(`inside row action`, row.original);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DropdownMenu, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button, { variant: "ghost", className: "flex h-8 w-8 p-0 data-[state=open]:bg-muted", disabled: !row.getIsSelected(), children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DotsHorizontalIcon, { className: "h-4 w-4" }, void 0, false, {
        fileName: "app/components/data-table-row-actions.tsx",
        lineNumber: 38,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "sr-only", children: "Open menu" }, void 0, false, {
        fileName: "app/components/data-table-row-actions.tsx",
        lineNumber: 39,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/data-table-row-actions.tsx",
      lineNumber: 37,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/data-table-row-actions.tsx",
      lineNumber: 36,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DropdownMenuContent, { align: "end", className: "w-[140px]", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Link, { to: `/snop/scenario/${row.original.scenario_id}`, hidden: row.original.Status !== "Open", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DropdownMenuItem, { children: "Edit" }, void 0, false, {
        fileName: "app/components/data-table-row-actions.tsx",
        lineNumber: 44,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/components/data-table-row-actions.tsx",
        lineNumber: 43,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DropdownMenuItem, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("button", { type: "submit", name: "intent", value: "duplicate", className: "w-full", onClick: () => fetcher.submit({
        scenario_id: row.original.scenario_id,
        intent: "duplicate"
      }, {
        method: "post"
      }), children: "Make a Copy" }, void 0, false, {
        fileName: "app/components/data-table-row-actions.tsx",
        lineNumber: 47,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/components/data-table-row-actions.tsx",
        lineNumber: 46,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DropdownMenuItem, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("button", { type: "submit", name: "intent", value: "archive", className: "w-full", hidden: row.original.Status === "Open", onClick: () => fetcher.submit({
        scenario_id: row.original.scenario_id,
        intent: "archive"
      }, {
        method: "post"
      }), children: "Archive" }, void 0, false, {
        fileName: "app/components/data-table-row-actions.tsx",
        lineNumber: 57,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/components/data-table-row-actions.tsx",
        lineNumber: 56,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DropdownMenuItem, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("button", { type: "submit", name: "intent", value: "delete", className: "w-full", hidden: row.original.Status !== "Open", onClick: () => fetcher.submit({
        scenario_id: row.original.scenario_id,
        intent: "delete"
      }, {
        method: "post"
      }), children: "Delete" }, void 0, false, {
        fileName: "app/components/data-table-row-actions.tsx",
        lineNumber: 67,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/components/data-table-row-actions.tsx",
        lineNumber: 66,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DropdownMenuSeparator, {}, void 0, false, {
        fileName: "app/components/data-table-row-actions.tsx",
        lineNumber: 77,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DropdownMenuItem, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Link, { to: `/snop/scenario/${row.original.scenario_id}/analyze`, hidden: row.original.Status !== "Open", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DropdownMenuItem, { children: "Analyze" }, void 0, false, {
        fileName: "app/components/data-table-row-actions.tsx",
        lineNumber: 80,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/data-table-row-actions.tsx",
        lineNumber: 79,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/components/data-table-row-actions.tsx",
        lineNumber: 78,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/data-table-row-actions.tsx",
      lineNumber: 42,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/data-table-row-actions.tsx",
    lineNumber: 35,
    columnNumber: 10
  }, this);
}
_s(DataTableRowActions, "2WHaGQTcUOgkXDaibwUgjUp1MBY=", false, function() {
  return [useFetcher];
});
_c2 = DataTableRowActions;
var _c2;
$RefreshReg$(_c2, "DataTableRowActions");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/data-table-row-submit.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\data-table-row-submit.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\data-table-row-submit.tsx"
  );
  import.meta.hot.lastModified = "1710764340067.6675";
}
function DataTableRowSubmit({
  row
}) {
  _s2();
  const task = taskSchema.parse(row.original);
  const fetcher = useFetcher();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(DropdownMenu, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
    Button,
    {
      className: "bg-blue-900 hover:bg-blue-800",
      disabled: row.getIsSelected() ? row.original.Status === "Open" ? false : true : true,
      type: "submit",
      onClick: () => fetcher.submit({
        scenario_id: row.original.scenario_id,
        intent: "optimize"
      }, {
        method: "post"
      }),
      children: [
        "Submit",
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "sr-only", children: "Open menu" }, void 0, false, {
          fileName: "app/components/data-table-row-submit.tsx",
          lineNumber: 59,
          columnNumber: 11
        }, this)
      ]
    },
    void 0,
    true,
    {
      fileName: "app/components/data-table-row-submit.tsx",
      lineNumber: 49,
      columnNumber: 9
    },
    this
  ) }, void 0, false, {
    fileName: "app/components/data-table-row-submit.tsx",
    lineNumber: 38,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/data-table-row-submit.tsx",
    lineNumber: 37,
    columnNumber: 10
  }, this);
}
_s2(DataTableRowSubmit, "2WHaGQTcUOgkXDaibwUgjUp1MBY=", false, function() {
  return [useFetcher];
});
_c3 = DataTableRowSubmit;
var _c3;
$RefreshReg$(_c3, "DataTableRowSubmit");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/columns.tsx
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime());
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\columns.tsx"
  );
  import.meta.hot.lastModified = "1709199041288.93";
}
var formatDate = (dateString) => {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
  }).format(date);
};
var columns = [
  {
    id: "select",
    header: ({ table }) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
      Checkbox,
      {
        checked: table.getIsAllPageRowsSelected() || table.getIsSomePageRowsSelected() && "indeterminate",
        onCheckedChange: (value) => table.toggleAllPageRowsSelected(!!value),
        "aria-label": "Select all",
        className: "translate-y-[2px] "
      },
      void 0,
      false,
      {
        fileName: "app/components/columns.tsx",
        lineNumber: 41,
        columnNumber: 7
      },
      this
    ),
    cell: ({ row }) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
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
        fileName: "app/components/columns.tsx",
        lineNumber: 52,
        columnNumber: 7
      },
      this
    ),
    enableSorting: false,
    enableHiding: false
  },
  {
    accessorKey: "scenario_id",
    header: ({ column }) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(DataTableColumnHeader, { column, title: "Scenario Id" }, void 0, false, {
      fileName: "app/components/columns.tsx",
      lineNumber: 65,
      columnNumber: 7
    }, this),
    cell: ({ row }) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "w-[80px]", children: row.getValue("scenario_id") }, void 0, false, {
      fileName: "app/components/columns.tsx",
      lineNumber: 68,
      columnNumber: 7
    }, this),
    enableSorting: false,
    enableHiding: false
  },
  {
    accessorKey: "description",
    header: ({ column }) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(DataTableColumnHeader, { column, title: "Description" }, void 0, false, {
      fileName: "app/components/columns.tsx",
      lineNumber: 77,
      columnNumber: 7
    }, this),
    cell: ({ row }) => {
      return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "w-[50px] truncate font-medium ", children: row.getValue("description") }, void 0, false, {
        fileName: "app/components/columns.tsx",
        lineNumber: 81,
        columnNumber: 9
      }, this);
    }
  },
  {
    accessorKey: "CreatedAt",
    header: ({ column }) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(DataTableColumnHeader, { column, title: "Created Date" }, void 0, false, {
      fileName: "app/components/columns.tsx",
      lineNumber: 90,
      columnNumber: 7
    }, this),
    cell: ({ row }) => {
      return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Badge, { variant: "outline", children: formatDate(row.getValue("CreatedAt")) }, void 0, false, {
        fileName: "app/components/columns.tsx",
        lineNumber: 97,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/components/columns.tsx",
        lineNumber: 96,
        columnNumber: 9
      }, this);
    }
  },
  {
    accessorKey: "UpdatedAt",
    header: ({ column }) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(DataTableColumnHeader, { column, title: "Updated Date" }, void 0, false, {
      fileName: "app/components/columns.tsx",
      lineNumber: 108,
      columnNumber: 7
    }, this),
    cell: ({ row }) => {
      return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { children: [
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Badge, { variant: "outline", children: formatDate(row.getValue("UpdatedAt")) }, void 0, false, {
          fileName: "app/components/columns.tsx",
          lineNumber: 114,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/columns.tsx",
        lineNumber: 112,
        columnNumber: 9
      }, this);
    }
  },
  {
    accessorKey: "module",
    header: ({ column }) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(DataTableColumnHeader, { column, title: "Module" }, void 0, false, {
      fileName: "app/components/columns.tsx",
      lineNumber: 126,
      columnNumber: 7
    }, this),
    cell: ({ row }) => {
      return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Badge, { variant: "outline", className: "bg-green-100 text-green-900", children: row.getValue("module") }, void 0, false, {
        fileName: "app/components/columns.tsx",
        lineNumber: 131,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/components/columns.tsx",
        lineNumber: 130,
        columnNumber: 9
      }, this);
    }
  },
  {
    accessorKey: "Status",
    header: ({ column }) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(DataTableColumnHeader, { column, title: "Status" }, void 0, false, {
      fileName: "app/components/columns.tsx",
      lineNumber: 141,
      columnNumber: 7
    }, this),
    cell: ({ row }) => {
      const status = statuses.find(
        (status2) => status2.value === row.getValue("Status")
      );
      if (!status) {
        return null;
      }
      return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex w-[100px] items-center", children: [
        status.icon && /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(status.icon, { className: "mr-2 h-4 w-4 text-muted-foreground" }, void 0, false, {
          fileName: "app/components/columns.tsx",
          lineNumber: 155,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { children: status.label }, void 0, false, {
          fileName: "app/components/columns.tsx",
          lineNumber: 157,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/columns.tsx",
        lineNumber: 153,
        columnNumber: 9
      }, this);
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    }
  },
  {
    id: "submit",
    header: ({ column }) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(DataTableColumnHeader, { column, title: "Submit to Optimizer" }, void 0, false, {
      fileName: "app/components/columns.tsx",
      lineNumber: 169,
      columnNumber: 7
    }, this),
    cell: ({ row }) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(DataTableRowSubmit, { row }, void 0, false, {
      fileName: "app/components/columns.tsx",
      lineNumber: 171,
      columnNumber: 24
    }, this)
  },
  {
    id: "actions",
    header: ({ column }) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(DataTableColumnHeader, { column, title: "Actions" }, void 0, false, {
      fileName: "app/components/columns.tsx",
      lineNumber: 176,
      columnNumber: 7
    }, this),
    cell: ({ row }) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(DataTableRowActions, { row }, void 0, false, {
      fileName: "app/components/columns.tsx",
      lineNumber: 178,
      columnNumber: 24
    }, this)
  }
];

// app/components/data-table.tsx
var React = __toESM(require_react());

// app/components/data-table-pagination.tsx
var import_jsx_dev_runtime5 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\data-table-pagination.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\data-table-pagination.tsx"
  );
  import.meta.hot.lastModified = "1708503722745.7434";
}
function DataTablePagination({
  table
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex items-center justify-between px-2", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex-1 text-sm text-muted-foreground", children: [
      table.getFilteredSelectedRowModel().rows.length,
      " of",
      " ",
      table.getFilteredRowModel().rows.length,
      " row(s) selected."
    ] }, void 0, true, {
      fileName: "app/components/data-table-pagination.tsx",
      lineNumber: 28,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex items-center space-x-6 lg:space-x-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex items-center space-x-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { className: "text-sm font-medium", children: "Rows per page" }, void 0, false, {
          fileName: "app/components/data-table-pagination.tsx",
          lineNumber: 34,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Select, { value: `${table.getState().pagination.pageSize}`, onValueChange: (value) => {
          table.setPageSize(Number(value));
        }, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(SelectTrigger, { className: "h-8 w-[70px]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(SelectValue, { placeholder: table.getState().pagination.pageSize }, void 0, false, {
            fileName: "app/components/data-table-pagination.tsx",
            lineNumber: 39,
            columnNumber: 15
          }, this) }, void 0, false, {
            fileName: "app/components/data-table-pagination.tsx",
            lineNumber: 38,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(SelectContent, { side: "top", children: [10, 20, 30, 40, 50].map((pageSize) => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(SelectItem, { value: `${pageSize}`, children: pageSize }, pageSize, false, {
            fileName: "app/components/data-table-pagination.tsx",
            lineNumber: 42,
            columnNumber: 53
          }, this)) }, void 0, false, {
            fileName: "app/components/data-table-pagination.tsx",
            lineNumber: 41,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/data-table-pagination.tsx",
          lineNumber: 35,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/data-table-pagination.tsx",
        lineNumber: 33,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex w-[100px] items-center justify-center text-sm font-medium", children: [
        "Page ",
        table.getState().pagination.pageIndex + 1,
        " of",
        " ",
        table.getPageCount()
      ] }, void 0, true, {
        fileName: "app/components/data-table-pagination.tsx",
        lineNumber: 48,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex items-center space-x-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Button, { variant: "outline", className: "hidden h-8 w-8 p-0 lg:flex", onClick: () => table.setPageIndex(0), disabled: !table.getCanPreviousPage(), children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { className: "sr-only", children: "Go to first page" }, void 0, false, {
            fileName: "app/components/data-table-pagination.tsx",
            lineNumber: 54,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(DoubleArrowLeftIcon, { className: "h-4 w-4" }, void 0, false, {
            fileName: "app/components/data-table-pagination.tsx",
            lineNumber: 55,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/data-table-pagination.tsx",
          lineNumber: 53,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Button, { variant: "outline", className: "h-8 w-8 p-0", onClick: () => table.previousPage(), disabled: !table.getCanPreviousPage(), children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { className: "sr-only", children: "Go to previous page" }, void 0, false, {
            fileName: "app/components/data-table-pagination.tsx",
            lineNumber: 58,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(ChevronLeftIcon, { className: "h-4 w-4" }, void 0, false, {
            fileName: "app/components/data-table-pagination.tsx",
            lineNumber: 59,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/data-table-pagination.tsx",
          lineNumber: 57,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Button, { variant: "outline", className: "h-8 w-8 p-0", onClick: () => table.nextPage(), disabled: !table.getCanNextPage(), children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { className: "sr-only", children: "Go to next page" }, void 0, false, {
            fileName: "app/components/data-table-pagination.tsx",
            lineNumber: 62,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(ChevronRightIcon, { className: "h-4 w-4" }, void 0, false, {
            fileName: "app/components/data-table-pagination.tsx",
            lineNumber: 63,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/data-table-pagination.tsx",
          lineNumber: 61,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Button, { variant: "outline", className: "hidden h-8 w-8 p-0 lg:flex", onClick: () => table.setPageIndex(table.getPageCount() - 1), disabled: !table.getCanNextPage(), children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { className: "sr-only", children: "Go to last page" }, void 0, false, {
            fileName: "app/components/data-table-pagination.tsx",
            lineNumber: 66,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(DoubleArrowRightIcon, { className: "h-4 w-4 text-red-500" }, void 0, false, {
            fileName: "app/components/data-table-pagination.tsx",
            lineNumber: 67,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/data-table-pagination.tsx",
          lineNumber: 65,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/data-table-pagination.tsx",
        lineNumber: 52,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/data-table-pagination.tsx",
      lineNumber: 32,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/data-table-pagination.tsx",
    lineNumber: 27,
    columnNumber: 10
  }, this);
}
_c4 = DataTablePagination;
var _c4;
$RefreshReg$(_c4, "DataTablePagination");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/data-table-toolbar.tsx
var import_jsx_dev_runtime6 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\data-table-toolbar.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\data-table-toolbar.tsx"
  );
  import.meta.hot.lastModified = "1708598960788.2917";
}
function DataTableToolbar({
  table
}) {
  const isFiltered = table.getState().columnFilters.length > 0;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "flex items-center justify-between", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "flex flex-1 items-center space-x-2", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Input, { placeholder: "Filter Scenario...", value: table.getColumn("description")?.getFilterValue() ?? "", onChange: (event) => table.getColumn("description")?.setFilterValue(event.target.value), className: "h-8 w-[150px] lg:w-[250px]" }, void 0, false, {
      fileName: "app/components/data-table-toolbar.tsx",
      lineNumber: 31,
      columnNumber: 9
    }, this),
    isFiltered && /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Button, { variant: "ghost", onClick: () => table.resetColumnFilters(), className: "h-8 px-2 lg:px-3 ", children: [
      "Reset",
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Cross2Icon, { className: "ml-2 h-4 w-4" }, void 0, false, {
        fileName: "app/components/data-table-toolbar.tsx",
        lineNumber: 36,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/data-table-toolbar.tsx",
      lineNumber: 34,
      columnNumber: 24
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/data-table-toolbar.tsx",
    lineNumber: 30,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/data-table-toolbar.tsx",
    lineNumber: 29,
    columnNumber: 10
  }, this);
}
_c5 = DataTableToolbar;
var _c5;
$RefreshReg$(_c5, "DataTableToolbar");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/data-table.tsx
var import_jsx_dev_runtime7 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\data-table.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s3 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\data-table.tsx"
  );
  import.meta.hot.lastModified = "1708503722747.7434";
}
function DataTable({
  columns: columns2,
  data
}) {
  _s3();
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
    enableMultiRowSelection: false,
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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "space-y-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(DataTableToolbar, { table }, void 0, false, {
      fileName: "app/components/data-table.tsx",
      lineNumber: 59,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "rounded-md border", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Table, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(TableHeader, { children: table.getHeaderGroups().map((headerGroup) => /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(TableRow, { children: headerGroup.headers.map((header) => {
        return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(TableHead, { colSpan: header.colSpan, children: header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext()) }, header.id, false, {
          fileName: "app/components/data-table.tsx",
          lineNumber: 65,
          columnNumber: 22
        }, this);
      }) }, headerGroup.id, false, {
        fileName: "app/components/data-table.tsx",
        lineNumber: 63,
        columnNumber: 57
      }, this)) }, void 0, false, {
        fileName: "app/components/data-table.tsx",
        lineNumber: 62,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(TableBody, { children: table.getRowModel().rows?.length ? table.getRowModel().rows.map(
        (row) => (
          // <Form method="post" key={row.id}>
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(TableRow, { "data-state": row.getIsSelected() && "selected", children: row.getVisibleCells().map((cell) => /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(TableCell, { children: flexRender(cell.column.columnDef.cell, cell.getContext()) }, cell.id, false, {
            fileName: "app/components/data-table.tsx",
            lineNumber: 75,
            columnNumber: 54
          }, this)) }, row.id, false, {
            fileName: "app/components/data-table.tsx",
            lineNumber: 74,
            columnNumber: 11
          }, this)
        )
        // </Form>
      ) : /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(TableRow, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(TableCell, { colSpan: columns2.length, className: "h-24 text-center", children: "No results." }, void 0, false, {
        fileName: "app/components/data-table.tsx",
        lineNumber: 81,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "app/components/data-table.tsx",
        lineNumber: 80,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/components/data-table.tsx",
        lineNumber: 71,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/data-table.tsx",
      lineNumber: 61,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/data-table.tsx",
      lineNumber: 60,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(DataTablePagination, { table }, void 0, false, {
      fileName: "app/components/data-table.tsx",
      lineNumber: 88,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/data-table.tsx",
    lineNumber: 58,
    columnNumber: 10
  }, this);
}
_s3(DataTable, "AjGf1qisLuzPDW1m9DjbiLObyNE=", false, function() {
  return [useReactTable];
});
_c6 = DataTable;
var _c6;
$RefreshReg$(_c6, "DataTable");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  columns,
  DataTable
};
//# sourceMappingURL=/build/_shared/chunk-MVTFDJTX.js.map
