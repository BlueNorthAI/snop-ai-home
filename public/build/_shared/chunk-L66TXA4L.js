import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator
} from "/build/_shared/chunk-YSPQ2ZCH.js";
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from "/build/_shared/chunk-ZPK2AWEZ.js";
import {
  Badge
} from "/build/_shared/chunk-CYDWZMPA.js";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "/build/_shared/chunk-FJ6576BF.js";
import {
  ArrowDownIcon,
  ArrowUpIcon,
  CaretSortIcon,
  CheckIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  DoubleArrowLeftIcon,
  DoubleArrowRightIcon,
  EyeNoneIcon,
  MixerHorizontalIcon,
  PlusCircledIcon
} from "/build/_shared/chunk-AIC7NVQ5.js";
import {
  $d08ef79370b62062$export$d2469213b3befba9,
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "/build/_shared/chunk-CPS4G365.js";
import {
  $8927f6f2acc4f386$export$250ffa63cdc0d034
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

// app/components/data-table-column-header-inci.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\data-table-column-header-inci.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\data-table-column-header-inci.tsx"
  );
  import.meta.hot.lastModified = "1710846420298.8203";
}
function DataTableColumnHeader({
  column,
  title,
  className
}) {
  if (!column.getCanSort()) {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: cn(className), children: title }, void 0, false, {
      fileName: "app/components/data-table-column-header-inci.tsx",
      lineNumber: 31,
      columnNumber: 12
    }, this);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: cn("flex items-center space-x-2", className), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenu, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { variant: "ghost", size: "sm", className: "-ml-3 h-8 data-[state=open]:bg-accent", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: title }, void 0, false, {
        fileName: "app/components/data-table-column-header-inci.tsx",
        lineNumber: 37,
        columnNumber: 13
      }, this),
      column.getIsSorted() === "desc" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowDownIcon, { className: "ml-2 h-4 w-4" }, void 0, false, {
        fileName: "app/components/data-table-column-header-inci.tsx",
        lineNumber: 38,
        columnNumber: 48
      }, this) : column.getIsSorted() === "asc" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowUpIcon, { className: "ml-2 h-4 w-4" }, void 0, false, {
        fileName: "app/components/data-table-column-header-inci.tsx",
        lineNumber: 38,
        columnNumber: 126
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CaretSortIcon, { className: "ml-2 h-4 w-4" }, void 0, false, {
        fileName: "app/components/data-table-column-header-inci.tsx",
        lineNumber: 38,
        columnNumber: 169
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/data-table-column-header-inci.tsx",
      lineNumber: 36,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/data-table-column-header-inci.tsx",
      lineNumber: 35,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuContent, { align: "start", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuItem, { onClick: () => column.toggleSorting(false), children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowUpIcon, { className: "mr-2 h-3.5 w-3.5 text-muted-foreground/70" }, void 0, false, {
          fileName: "app/components/data-table-column-header-inci.tsx",
          lineNumber: 43,
          columnNumber: 13
        }, this),
        "Asc"
      ] }, void 0, true, {
        fileName: "app/components/data-table-column-header-inci.tsx",
        lineNumber: 42,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuItem, { onClick: () => column.toggleSorting(true), children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowDownIcon, { className: "mr-2 h-3.5 w-3.5 text-muted-foreground/70" }, void 0, false, {
          fileName: "app/components/data-table-column-header-inci.tsx",
          lineNumber: 47,
          columnNumber: 13
        }, this),
        "Desc"
      ] }, void 0, true, {
        fileName: "app/components/data-table-column-header-inci.tsx",
        lineNumber: 46,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuSeparator, {}, void 0, false, {
        fileName: "app/components/data-table-column-header-inci.tsx",
        lineNumber: 50,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuItem, { onClick: () => column.toggleVisibility(false), children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(EyeNoneIcon, { className: "mr-2 h-3.5 w-3.5 text-muted-foreground/70" }, void 0, false, {
          fileName: "app/components/data-table-column-header-inci.tsx",
          lineNumber: 52,
          columnNumber: 13
        }, this),
        "Hide"
      ] }, void 0, true, {
        fileName: "app/components/data-table-column-header-inci.tsx",
        lineNumber: 51,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/data-table-column-header-inci.tsx",
      lineNumber: 41,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/data-table-column-header-inci.tsx",
    lineNumber: 34,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/data-table-column-header-inci.tsx",
    lineNumber: 33,
    columnNumber: 10
  }, this);
}
_c = DataTableColumnHeader;
var _c;
$RefreshReg$(_c, "DataTableColumnHeader");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/data-table-pagination-inci.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\data-table-pagination-inci.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\data-table-pagination-inci.tsx"
  );
  import.meta.hot.lastModified = "1710845836666.3855";
}
function DataTablePagination({
  table
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex items-center justify-between px-2", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex-1 text-sm text-muted-foreground", children: [
      table.getFilteredSelectedRowModel().rows.length,
      " of",
      " ",
      table.getFilteredRowModel().rows.length,
      " row(s) selected."
    ] }, void 0, true, {
      fileName: "app/components/data-table-pagination-inci.tsx",
      lineNumber: 28,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex items-center space-x-6 lg:space-x-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex items-center space-x-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "text-sm font-medium", children: "Rows per page" }, void 0, false, {
          fileName: "app/components/data-table-pagination-inci.tsx",
          lineNumber: 34,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Select, { value: `${table.getState().pagination.pageSize}`, onValueChange: (value) => {
          table.setPageSize(Number(value));
        }, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(SelectTrigger, { className: "h-8 w-[70px]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(SelectValue, { placeholder: table.getState().pagination.pageSize }, void 0, false, {
            fileName: "app/components/data-table-pagination-inci.tsx",
            lineNumber: 39,
            columnNumber: 15
          }, this) }, void 0, false, {
            fileName: "app/components/data-table-pagination-inci.tsx",
            lineNumber: 38,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(SelectContent, { side: "top", children: [10, 20, 30, 40, 50].map((pageSize) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(SelectItem, { value: `${pageSize}`, children: pageSize }, pageSize, false, {
            fileName: "app/components/data-table-pagination-inci.tsx",
            lineNumber: 42,
            columnNumber: 53
          }, this)) }, void 0, false, {
            fileName: "app/components/data-table-pagination-inci.tsx",
            lineNumber: 41,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/data-table-pagination-inci.tsx",
          lineNumber: 35,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/data-table-pagination-inci.tsx",
        lineNumber: 33,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex w-[100px] items-center justify-center text-sm font-medium", children: [
        "Page ",
        table.getState().pagination.pageIndex + 1,
        " of",
        " ",
        table.getPageCount()
      ] }, void 0, true, {
        fileName: "app/components/data-table-pagination-inci.tsx",
        lineNumber: 48,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex items-center space-x-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button, { variant: "outline", className: "hidden h-8 w-8 p-0 lg:flex", onClick: () => table.setPageIndex(0), disabled: !table.getCanPreviousPage(), children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "sr-only", children: "Go to first page" }, void 0, false, {
            fileName: "app/components/data-table-pagination-inci.tsx",
            lineNumber: 54,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DoubleArrowLeftIcon, { className: "h-4 w-4" }, void 0, false, {
            fileName: "app/components/data-table-pagination-inci.tsx",
            lineNumber: 55,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/data-table-pagination-inci.tsx",
          lineNumber: 53,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button, { variant: "outline", className: "h-8 w-8 p-0", onClick: () => table.previousPage(), disabled: !table.getCanPreviousPage(), children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "sr-only", children: "Go to previous page" }, void 0, false, {
            fileName: "app/components/data-table-pagination-inci.tsx",
            lineNumber: 58,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ChevronLeftIcon, { className: "h-4 w-4" }, void 0, false, {
            fileName: "app/components/data-table-pagination-inci.tsx",
            lineNumber: 59,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/data-table-pagination-inci.tsx",
          lineNumber: 57,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button, { variant: "outline", className: "h-8 w-8 p-0", onClick: () => table.nextPage(), disabled: !table.getCanNextPage(), children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "sr-only", children: "Go to next page" }, void 0, false, {
            fileName: "app/components/data-table-pagination-inci.tsx",
            lineNumber: 62,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ChevronRightIcon, { className: "h-4 w-4" }, void 0, false, {
            fileName: "app/components/data-table-pagination-inci.tsx",
            lineNumber: 63,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/data-table-pagination-inci.tsx",
          lineNumber: 61,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button, { variant: "outline", className: "hidden h-8 w-8 p-0 lg:flex", onClick: () => table.setPageIndex(table.getPageCount() - 1), disabled: !table.getCanNextPage(), children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "sr-only", children: "Go to last page" }, void 0, false, {
            fileName: "app/components/data-table-pagination-inci.tsx",
            lineNumber: 66,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DoubleArrowRightIcon, { className: "h-4 w-4" }, void 0, false, {
            fileName: "app/components/data-table-pagination-inci.tsx",
            lineNumber: 67,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/data-table-pagination-inci.tsx",
          lineNumber: 65,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/data-table-pagination-inci.tsx",
        lineNumber: 52,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/data-table-pagination-inci.tsx",
      lineNumber: 32,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/data-table-pagination-inci.tsx",
    lineNumber: 27,
    columnNumber: 10
  }, this);
}
_c2 = DataTablePagination;
var _c2;
$RefreshReg$(_c2, "DataTablePagination");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/ui/separator.tsx
var React = __toESM(require_react());

// node_modules/@radix-ui/react-separator/dist/index.mjs
var import_react = __toESM(require_react(), 1);
var $89eedd556c436f6a$var$DEFAULT_ORIENTATION = "horizontal";
var $89eedd556c436f6a$var$ORIENTATIONS = [
  "horizontal",
  "vertical"
];
var $89eedd556c436f6a$export$1ff3c3f08ae963c0 = /* @__PURE__ */ (0, import_react.forwardRef)((props, forwardedRef) => {
  const { decorative, orientation: orientationProp = $89eedd556c436f6a$var$DEFAULT_ORIENTATION, ...domProps } = props;
  const orientation = $89eedd556c436f6a$var$isValidOrientation(orientationProp) ? orientationProp : $89eedd556c436f6a$var$DEFAULT_ORIENTATION;
  const ariaOrientation = orientation === "vertical" ? orientation : void 0;
  const semanticProps = decorative ? {
    role: "none"
  } : {
    "aria-orientation": ariaOrientation,
    role: "separator"
  };
  return /* @__PURE__ */ (0, import_react.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends({
    "data-orientation": orientation
  }, semanticProps, domProps, {
    ref: forwardedRef
  }));
});
$89eedd556c436f6a$export$1ff3c3f08ae963c0.propTypes = {
  orientation(props, propName, componentName) {
    const propValue = props[propName];
    const strVal = String(propValue);
    if (propValue && !$89eedd556c436f6a$var$isValidOrientation(propValue))
      return new Error($89eedd556c436f6a$var$getInvalidOrientationError(strVal, componentName));
    return null;
  }
};
function $89eedd556c436f6a$var$getInvalidOrientationError(value, componentName) {
  return `Invalid prop \`orientation\` of value \`${value}\` supplied to \`${componentName}\`, expected one of:
  - horizontal
  - vertical

Defaulting to \`${$89eedd556c436f6a$var$DEFAULT_ORIENTATION}\`.`;
}
function $89eedd556c436f6a$var$isValidOrientation(orientation) {
  return $89eedd556c436f6a$var$ORIENTATIONS.includes(orientation);
}
var $89eedd556c436f6a$export$be92b6f5f03c0fe9 = $89eedd556c436f6a$export$1ff3c3f08ae963c0;

// app/components/ui/separator.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\ui\\\\separator.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\ui\\separator.tsx"
  );
  import.meta.hot.lastModified = "1710131653000";
}
var Separator = React.forwardRef(_c3 = ({
  className,
  orientation = "horizontal",
  decorative = true,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)($89eedd556c436f6a$export$be92b6f5f03c0fe9, { ref, decorative, orientation, className: cn("shrink-0 bg-slate-200 dark:bg-slate-800", orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]", className), ...props }, void 0, false, {
  fileName: "app/components/ui/separator.tsx",
  lineNumber: 29,
  columnNumber: 12
}, this));
_c22 = Separator;
Separator.displayName = $89eedd556c436f6a$export$be92b6f5f03c0fe9.displayName;
var _c3;
var _c22;
$RefreshReg$(_c3, "Separator$React.forwardRef");
$RefreshReg$(_c22, "Separator");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/data-table-faceted-filter-inci.tsx
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\data-table-faceted-filter-inci.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\data-table-faceted-filter-inci.tsx"
  );
  import.meta.hot.lastModified = "1710846365401.6404";
}
function DataTableFacetedFilter({
  column,
  title,
  options
}) {
  const facets = column?.getFacetedUniqueValues();
  const selectedValues = new Set(column?.getFilterValue());
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Popover, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(PopoverTrigger, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Button, { variant: "outline", size: "sm", className: "h-8 border-dashed", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(PlusCircledIcon, { className: "mr-2 h-4 w-4" }, void 0, false, {
        fileName: "app/components/data-table-faceted-filter-inci.tsx",
        lineNumber: 39,
        columnNumber: 11
      }, this),
      title,
      selectedValues?.size > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_jsx_dev_runtime4.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Separator, { orientation: "vertical", className: "mx-2 h-4" }, void 0, false, {
          fileName: "app/components/data-table-faceted-filter-inci.tsx",
          lineNumber: 42,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Badge, { variant: "secondary", className: "rounded-sm px-1 font-normal lg:hidden", children: selectedValues.size }, void 0, false, {
          fileName: "app/components/data-table-faceted-filter-inci.tsx",
          lineNumber: 43,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "hidden space-x-1 lg:flex", children: selectedValues.size > 2 ? /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Badge, { variant: "secondary", className: "rounded-sm px-1 font-normal", children: [
          selectedValues.size,
          " selected"
        ] }, void 0, true, {
          fileName: "app/components/data-table-faceted-filter-inci.tsx",
          lineNumber: 47,
          columnNumber: 44
        }, this) : options.filter((option) => selectedValues.has(option.value)).map((option) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Badge, { variant: "secondary", className: "rounded-sm px-1 font-normal", children: option.label }, option.value, false, {
          fileName: "app/components/data-table-faceted-filter-inci.tsx",
          lineNumber: 49,
          columnNumber: 103
        }, this)) }, void 0, false, {
          fileName: "app/components/data-table-faceted-filter-inci.tsx",
          lineNumber: 46,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/data-table-faceted-filter-inci.tsx",
        lineNumber: 41,
        columnNumber: 39
      }, this) : null
    ] }, void 0, true, {
      fileName: "app/components/data-table-faceted-filter-inci.tsx",
      lineNumber: 38,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/data-table-faceted-filter-inci.tsx",
      lineNumber: 37,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(PopoverContent, { className: "w-[200px] p-0", align: "start", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Command, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(CommandInput, { placeholder: title }, void 0, false, {
        fileName: "app/components/data-table-faceted-filter-inci.tsx",
        lineNumber: 58,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(CommandList, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(CommandEmpty, { children: "No results found." }, void 0, false, {
          fileName: "app/components/data-table-faceted-filter-inci.tsx",
          lineNumber: 60,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(CommandGroup, { children: options.map((option) => {
          const isSelected = selectedValues.has(option.value);
          return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(CommandItem, { onSelect: () => {
            if (isSelected) {
              selectedValues.delete(option.value);
            } else {
              selectedValues.add(option.value);
            }
            const filterValues = Array.from(selectedValues);
            column?.setFilterValue(filterValues.length ? filterValues : void 0);
          }, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: cn("mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary", isSelected ? "bg-primary text-primary-foreground" : "opacity-50 [&_svg]:invisible"), children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(CheckIcon, { className: cn("h-4 w-4") }, void 0, false, {
              fileName: "app/components/data-table-faceted-filter-inci.tsx",
              lineNumber: 74,
              columnNumber: 23
            }, this) }, void 0, false, {
              fileName: "app/components/data-table-faceted-filter-inci.tsx",
              lineNumber: 73,
              columnNumber: 21
            }, this),
            option.icon ? /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(option.icon, { className: "mr-2 h-4 w-4 text-muted-foreground" }, void 0, false, {
              fileName: "app/components/data-table-faceted-filter-inci.tsx",
              lineNumber: 76,
              columnNumber: 36
            }, this) : null,
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { children: option.label }, void 0, false, {
              fileName: "app/components/data-table-faceted-filter-inci.tsx",
              lineNumber: 77,
              columnNumber: 21
            }, this),
            facets?.get(option.value) ? /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "ml-auto flex h-4 w-4 items-center justify-center font-mono text-xs", children: facets.get(option.value) }, void 0, false, {
              fileName: "app/components/data-table-faceted-filter-inci.tsx",
              lineNumber: 78,
              columnNumber: 50
            }, this) : null
          ] }, option.value, true, {
            fileName: "app/components/data-table-faceted-filter-inci.tsx",
            lineNumber: 64,
            columnNumber: 22
          }, this);
        }) }, void 0, false, {
          fileName: "app/components/data-table-faceted-filter-inci.tsx",
          lineNumber: 61,
          columnNumber: 13
        }, this),
        selectedValues.size > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_jsx_dev_runtime4.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(CommandSeparator, {}, void 0, false, {
            fileName: "app/components/data-table-faceted-filter-inci.tsx",
            lineNumber: 85,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(CommandGroup, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(CommandItem, { onSelect: () => column?.setFilterValue(void 0), className: "justify-center text-center", children: "Clear filters" }, void 0, false, {
            fileName: "app/components/data-table-faceted-filter-inci.tsx",
            lineNumber: 87,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "app/components/data-table-faceted-filter-inci.tsx",
            lineNumber: 86,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/data-table-faceted-filter-inci.tsx",
          lineNumber: 84,
          columnNumber: 40
        }, this) : null
      ] }, void 0, true, {
        fileName: "app/components/data-table-faceted-filter-inci.tsx",
        lineNumber: 59,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/data-table-faceted-filter-inci.tsx",
      lineNumber: 57,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/data-table-faceted-filter-inci.tsx",
      lineNumber: 56,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/data-table-faceted-filter-inci.tsx",
    lineNumber: 36,
    columnNumber: 10
  }, this);
}
_c4 = DataTableFacetedFilter;
var _c4;
$RefreshReg$(_c4, "DataTableFacetedFilter");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/data-table-view-options-inci.tsx
var import_jsx_dev_runtime5 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\data-table-view-options-inci.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\data-table-view-options-inci.tsx"
  );
  import.meta.hot.lastModified = "1710846529228.4883";
}
function DataTableViewOptions({
  table
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(DropdownMenu, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)($d08ef79370b62062$export$d2469213b3befba9, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Button, { variant: "outline", size: "sm", className: "ml-auto hidden h-8 lg:flex", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(MixerHorizontalIcon, { className: "mr-2 h-4 w-4" }, void 0, false, {
        fileName: "app/components/data-table-view-options-inci.tsx",
        lineNumber: 31,
        columnNumber: 11
      }, this),
      "View"
    ] }, void 0, true, {
      fileName: "app/components/data-table-view-options-inci.tsx",
      lineNumber: 30,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/data-table-view-options-inci.tsx",
      lineNumber: 29,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(DropdownMenuContent, { align: "end", className: "w-[150px]", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(DropdownMenuLabel, { children: "Toggle columns" }, void 0, false, {
        fileName: "app/components/data-table-view-options-inci.tsx",
        lineNumber: 36,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(DropdownMenuSeparator, {}, void 0, false, {
        fileName: "app/components/data-table-view-options-inci.tsx",
        lineNumber: 37,
        columnNumber: 9
      }, this),
      table.getAllColumns().filter((column) => typeof column.accessorFn !== "undefined" && column.getCanHide()).map((column) => {
        return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(DropdownMenuCheckboxItem, { className: "capitalize", checked: column.getIsVisible(), onCheckedChange: (value) => column.toggleVisibility(!!value), children: column.id }, column.id, false, {
          fileName: "app/components/data-table-view-options-inci.tsx",
          lineNumber: 39,
          columnNumber: 16
        }, this);
      })
    ] }, void 0, true, {
      fileName: "app/components/data-table-view-options-inci.tsx",
      lineNumber: 35,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/data-table-view-options-inci.tsx",
    lineNumber: 28,
    columnNumber: 10
  }, this);
}
_c5 = DataTableViewOptions;
var _c5;
$RefreshReg$(_c5, "DataTableViewOptions");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  DataTableColumnHeader,
  DataTablePagination,
  DataTableFacetedFilter,
  DataTableViewOptions
};
//# sourceMappingURL=/build/_shared/chunk-L66TXA4L.js.map
