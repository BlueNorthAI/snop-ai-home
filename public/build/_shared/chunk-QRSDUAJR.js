import {
  DataTableFacetedFilter,
  DataTablePagination,
  DataTableViewOptions
} from "/build/_shared/chunk-L66TXA4L.js";
import {
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
import {
  $8927f6f2acc4f386$export$250ffa63cdc0d034,
  $c512c27ab02ef895$export$50c7b4e9d9f19c1
} from "/build/_shared/chunk-KTF7K347.js";
import {
  Button
} from "/build/_shared/chunk-LFFJ36YN.js";
import {
  cn
} from "/build/_shared/chunk-TRC5XD27.js";
import {
  _extends
} from "/build/_shared/chunk-ELWJTL4F.js";
import {
  createHotContext
} from "/build/_shared/chunk-K4XMOQHS.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  require_react
} from "/build/_shared/chunk-BOXFZXVX.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/components/data-table-insights.tsx
var React = __toESM(require_react());

// app/data/insightdata/data.tsx
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\data\\insightdata\\data.tsx"
  );
  import.meta.hot.lastModified = "1711190496855.1726";
}
var statuses = [
  {
    value: "backlog",
    label: "Backlog",
    icon: QuestionMarkCircledIcon,
    fill: "fill-blue-800",
    color: "bg-rose-100",
    textClr: "text-rose-800"
  },
  {
    value: "todo",
    label: "Todo",
    icon: CircleIcon,
    fill: "fill-blue-800",
    textClr: "fill-green-800"
  },
  {
    value: "progress",
    label: "Stock Out",
    icon: StopwatchIcon,
    fill: "fill-rose-500",
    color: "bg-rose-100",
    textClr: "text-rose-800"
  },
  {
    value: "done",
    label: "Excess Stock",
    icon: CheckCircledIcon,
    fill: "fill-blue-500",
    color: "bg-blue-100",
    textClr: "text-blue-800"
  },
  {
    value: "canceled",
    label: "Canceled",
    icon: CrossCircledIcon,
    fill: "fill-blue-800",
    color: "bg-blue-100",
    textClr: "fill-green-800"
  }
];
var priorities = [
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

// app/components/data-table-toolbar-insights.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\data-table-toolbar-insights.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\data-table-toolbar-insights.tsx"
  );
  import.meta.hot.lastModified = "1711287659338.1997";
}
function DataTableToolbar({
  table
}) {
  const isFiltered = table.getState().columnFilters.length > 0;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-between", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-1 items-center space-x-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, { placeholder: "Filter Sku...", value: table.getColumn("title")?.getFilterValue() ?? "", onChange: (event) => table.getColumn("title")?.setFilterValue(event.target.value), className: "h-8 w-[150px] lg:w-[250px]" }, void 0, false, {
        fileName: "app/components/data-table-toolbar-insights.tsx",
        lineNumber: 33,
        columnNumber: 9
      }, this),
      table.getColumn("status") && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DataTableFacetedFilter, { column: table.getColumn("status"), title: "Status", options: statuses }, void 0, false, {
        fileName: "app/components/data-table-toolbar-insights.tsx",
        lineNumber: 34,
        columnNumber: 39
      }, this),
      table.getColumn("priority") && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DataTableFacetedFilter, { column: table.getColumn("priority"), title: "Priority", options: priorities }, void 0, false, {
        fileName: "app/components/data-table-toolbar-insights.tsx",
        lineNumber: 35,
        columnNumber: 41
      }, this),
      isFiltered && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { variant: "ghost", onClick: () => table.resetColumnFilters(), className: "h-8 px-2 lg:px-3", children: [
        "Reset",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Cross2Icon, { className: "ml-2 h-4 w-4" }, void 0, false, {
          fileName: "app/components/data-table-toolbar-insights.tsx",
          lineNumber: 38,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/data-table-toolbar-insights.tsx",
        lineNumber: 36,
        columnNumber: 24
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/data-table-toolbar-insights.tsx",
      lineNumber: 32,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DataTableViewOptions, { table }, void 0, false, {
      fileName: "app/components/data-table-toolbar-insights.tsx",
      lineNumber: 41,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/data-table-toolbar-insights.tsx",
    lineNumber: 31,
    columnNumber: 10
  }, this);
}
_c = DataTableToolbar;
var _c;
$RefreshReg$(_c, "DataTableToolbar");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/data-table-insights.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\data-table-insights.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\data-table-insights.tsx"
  );
  import.meta.hot.lastModified = "1711197682095.8418";
}
function DataTable({
  columns,
  data
}) {
  _s();
  const [rowSelection, setRowSelection] = React.useState({});
  const [columnVisibility, setColumnVisibility] = React.useState({});
  const [columnFilters, setColumnFilters] = React.useState([]);
  const [sorting, setSorting] = React.useState([]);
  const table = useReactTable({
    data,
    columns,
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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "space-y-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DataTableToolbar, { table }, void 0, false, {
      fileName: "app/components/data-table-insights.tsx",
      lineNumber: 58,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "rounded-md border", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Table, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(TableHeader, { children: table.getHeaderGroups().map((headerGroup) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(TableRow, { children: headerGroup.headers.map((header) => {
        return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(TableHead, { colSpan: header.colSpan, children: header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext()) }, header.id, false, {
          fileName: "app/components/data-table-insights.tsx",
          lineNumber: 64,
          columnNumber: 22
        }, this);
      }) }, headerGroup.id, false, {
        fileName: "app/components/data-table-insights.tsx",
        lineNumber: 62,
        columnNumber: 57
      }, this)) }, void 0, false, {
        fileName: "app/components/data-table-insights.tsx",
        lineNumber: 61,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(TableBody, { children: table.getRowModel().rows?.length ? table.getRowModel().rows.map((row) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(TableRow, { "data-state": row.getIsSelected() && "selected", children: row.getVisibleCells().map((cell) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(TableCell, { children: flexRender(cell.column.columnDef.cell, cell.getContext()) }, cell.id, false, {
        fileName: "app/components/data-table-insights.tsx",
        lineNumber: 72,
        columnNumber: 54
      }, this)) }, row.id, false, {
        fileName: "app/components/data-table-insights.tsx",
        lineNumber: 71,
        columnNumber: 85
      }, this)) : /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(TableRow, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(TableCell, { colSpan: columns.length, className: "h-24 text-center", children: "No results." }, void 0, false, {
        fileName: "app/components/data-table-insights.tsx",
        lineNumber: 76,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "app/components/data-table-insights.tsx",
        lineNumber: 75,
        columnNumber: 32
      }, this) }, void 0, false, {
        fileName: "app/components/data-table-insights.tsx",
        lineNumber: 70,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/data-table-insights.tsx",
      lineNumber: 60,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/data-table-insights.tsx",
      lineNumber: 59,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DataTablePagination, { table }, void 0, false, {
      fileName: "app/components/data-table-insights.tsx",
      lineNumber: 83,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/data-table-insights.tsx",
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

// app/components/ui/progress.tsx
var React2 = __toESM(require_react());

// node_modules/@radix-ui/react-progress/dist/index.mjs
var import_react = __toESM(require_react(), 1);
var $67824d98245208a0$var$PROGRESS_NAME = "Progress";
var $67824d98245208a0$var$DEFAULT_MAX = 100;
var [$67824d98245208a0$var$createProgressContext, $67824d98245208a0$export$388eb2d8f6d3261f] = $c512c27ab02ef895$export$50c7b4e9d9f19c1($67824d98245208a0$var$PROGRESS_NAME);
var [$67824d98245208a0$var$ProgressProvider, $67824d98245208a0$var$useProgressContext] = $67824d98245208a0$var$createProgressContext($67824d98245208a0$var$PROGRESS_NAME);
var $67824d98245208a0$export$b25a304ec7d746bb = /* @__PURE__ */ (0, import_react.forwardRef)((props, forwardedRef) => {
  const { __scopeProgress, value: valueProp, max: maxProp, getValueLabel = $67824d98245208a0$var$defaultGetValueLabel, ...progressProps } = props;
  const max = $67824d98245208a0$var$isValidMaxNumber(maxProp) ? maxProp : $67824d98245208a0$var$DEFAULT_MAX;
  const value = $67824d98245208a0$var$isValidValueNumber(valueProp, max) ? valueProp : null;
  const valueLabel = $67824d98245208a0$var$isNumber(value) ? getValueLabel(value, max) : void 0;
  return /* @__PURE__ */ (0, import_react.createElement)($67824d98245208a0$var$ProgressProvider, {
    scope: __scopeProgress,
    value,
    max
  }, /* @__PURE__ */ (0, import_react.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends({
    "aria-valuemax": max,
    "aria-valuemin": 0,
    "aria-valuenow": $67824d98245208a0$var$isNumber(value) ? value : void 0,
    "aria-valuetext": valueLabel,
    role: "progressbar",
    "data-state": $67824d98245208a0$var$getProgressState(value, max),
    "data-value": value !== null && value !== void 0 ? value : void 0,
    "data-max": max
  }, progressProps, {
    ref: forwardedRef
  })));
});
$67824d98245208a0$export$b25a304ec7d746bb.propTypes = {
  max(props, propName, componentName) {
    const propValue = props[propName];
    const strVal = String(propValue);
    if (propValue && !$67824d98245208a0$var$isValidMaxNumber(propValue))
      return new Error($67824d98245208a0$var$getInvalidMaxError(strVal, componentName));
    return null;
  },
  value(props, propName, componentName) {
    const valueProp = props[propName];
    const strVal = String(valueProp);
    const max = $67824d98245208a0$var$isValidMaxNumber(props.max) ? props.max : $67824d98245208a0$var$DEFAULT_MAX;
    if (valueProp != null && !$67824d98245208a0$var$isValidValueNumber(valueProp, max))
      return new Error($67824d98245208a0$var$getInvalidValueError(strVal, componentName));
    return null;
  }
};
var $67824d98245208a0$var$INDICATOR_NAME = "ProgressIndicator";
var $67824d98245208a0$export$2b776f7e7ee60dbd = /* @__PURE__ */ (0, import_react.forwardRef)((props, forwardedRef) => {
  var _context$value;
  const { __scopeProgress, ...indicatorProps } = props;
  const context = $67824d98245208a0$var$useProgressContext($67824d98245208a0$var$INDICATOR_NAME, __scopeProgress);
  return /* @__PURE__ */ (0, import_react.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends({
    "data-state": $67824d98245208a0$var$getProgressState(context.value, context.max),
    "data-value": (_context$value = context.value) !== null && _context$value !== void 0 ? _context$value : void 0,
    "data-max": context.max
  }, indicatorProps, {
    ref: forwardedRef
  }));
});
function $67824d98245208a0$var$defaultGetValueLabel(value, max) {
  return `${Math.round(value / max * 100)}%`;
}
function $67824d98245208a0$var$getProgressState(value, maxValue) {
  return value == null ? "indeterminate" : value === maxValue ? "complete" : "loading";
}
function $67824d98245208a0$var$isNumber(value) {
  return typeof value === "number";
}
function $67824d98245208a0$var$isValidMaxNumber(max) {
  return $67824d98245208a0$var$isNumber(max) && !isNaN(max) && max > 0;
}
function $67824d98245208a0$var$isValidValueNumber(value, max) {
  return $67824d98245208a0$var$isNumber(value) && !isNaN(value) && value <= max && value >= 0;
}
function $67824d98245208a0$var$getInvalidMaxError(propValue, componentName) {
  return `Invalid prop \`max\` of value \`${propValue}\` supplied to \`${componentName}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${$67824d98245208a0$var$DEFAULT_MAX}\`.`;
}
function $67824d98245208a0$var$getInvalidValueError(propValue, componentName) {
  return `Invalid prop \`value\` of value \`${propValue}\` supplied to \`${componentName}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${$67824d98245208a0$var$DEFAULT_MAX} if no \`max\` prop is set)
  - \`null\` if the progress is indeterminate.

Defaulting to \`null\`.`;
}
var $67824d98245208a0$export$be92b6f5f03c0fe9 = $67824d98245208a0$export$b25a304ec7d746bb;
var $67824d98245208a0$export$adb584737d712b70 = $67824d98245208a0$export$2b776f7e7ee60dbd;

// app/components/ui/progress.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\ui\\\\progress.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\ui\\progress.tsx"
  );
  import.meta.hot.lastModified = "1711195102292.3108";
}
var Progress = React2.forwardRef(_c3 = ({
  className,
  value,
  indicatorColor,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)($67824d98245208a0$export$be92b6f5f03c0fe9, { ref, className: cn("relative h-4 w-full overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800", className), ...props, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)($67824d98245208a0$export$adb584737d712b70, { className: `h-full w-full flex-1  transition-all 
      ${indicatorColor}`, style: {
  transform: `translateX(-${100 - (value || 0)}%)`
} }, void 0, false, {
  fileName: "app/components/ui/progress.tsx",
  lineNumber: 30,
  columnNumber: 5
}, this) }, void 0, false, {
  fileName: "app/components/ui/progress.tsx",
  lineNumber: 29,
  columnNumber: 12
}, this));
_c22 = Progress;
Progress.displayName = $67824d98245208a0$export$be92b6f5f03c0fe9.displayName;
var _c3;
var _c22;
$RefreshReg$(_c3, "Progress$React.forwardRef");
$RefreshReg$(_c22, "Progress");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  statuses,
  Progress,
  DataTable
};
//# sourceMappingURL=/build/_shared/chunk-QRSDUAJR.js.map
