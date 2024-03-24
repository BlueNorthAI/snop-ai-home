import {
  z
} from "/build/_shared/chunk-YSJMGTXM.js";
import {
  ArrowDownIcon,
  ArrowRightIcon,
  ArrowUpIcon,
  CheckCircledIcon,
  CircleIcon,
  CrossCircledIcon,
  DotsHorizontalIcon,
  QuestionMarkCircledIcon,
  StopwatchIcon
} from "/build/_shared/chunk-AIC7NVQ5.js";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger
} from "/build/_shared/chunk-CPS4G365.js";
import {
  Button
} from "/build/_shared/chunk-LFFJ36YN.js";
import {
  createHotContext
} from "/build/_shared/chunk-K4XMOQHS.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/data/columndata/data.tsx
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\data\\columndata\\data.tsx"
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
var statuses = [
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

// app/data/columndata/schema.ts
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\data\\columndata\\schema.ts"
  );
  import.meta.hot.lastModified = "1699816360000";
}
var taskSchema = z.object({
  id: z.string(),
  title: z.string(),
  status: z.string(),
  label: z.string(),
  priority: z.string()
});

// app/components/data-table-row-actions-inci.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\data-table-row-actions-inci.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\data-table-row-actions-inci.tsx"
  );
  import.meta.hot.lastModified = "1711178135222.2534";
}
function DataTableRowActions({
  row
}) {
  const task = taskSchema.parse(row.original);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenu, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { variant: "ghost", className: "flex h-8 w-8 p-0 data-[state=open]:bg-muted", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DotsHorizontalIcon, { className: "h-4 w-4" }, void 0, false, {
        fileName: "app/components/data-table-row-actions-inci.tsx",
        lineNumber: 33,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "sr-only", children: "Open menu" }, void 0, false, {
        fileName: "app/components/data-table-row-actions-inci.tsx",
        lineNumber: 34,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/data-table-row-actions-inci.tsx",
      lineNumber: 32,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/data-table-row-actions-inci.tsx",
      lineNumber: 31,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuContent, { align: "end", className: "w-[160px]", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuItem, { children: "Edit" }, void 0, false, {
        fileName: "app/components/data-table-row-actions-inci.tsx",
        lineNumber: 38,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuItem, { children: "Make a copy" }, void 0, false, {
        fileName: "app/components/data-table-row-actions-inci.tsx",
        lineNumber: 39,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuItem, { children: "Favorite" }, void 0, false, {
        fileName: "app/components/data-table-row-actions-inci.tsx",
        lineNumber: 40,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuSeparator, {}, void 0, false, {
        fileName: "app/components/data-table-row-actions-inci.tsx",
        lineNumber: 41,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuSub, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuSubTrigger, { children: "Labels" }, void 0, false, {
          fileName: "app/components/data-table-row-actions-inci.tsx",
          lineNumber: 43,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuSubContent, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuRadioGroup, { value: task.label, children: labels.map((label) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuRadioItem, { value: label.value, children: label.label }, label.value, false, {
          fileName: "app/components/data-table-row-actions-inci.tsx",
          lineNumber: 46,
          columnNumber: 36
        }, this)) }, void 0, false, {
          fileName: "app/components/data-table-row-actions-inci.tsx",
          lineNumber: 45,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/components/data-table-row-actions-inci.tsx",
          lineNumber: 44,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/data-table-row-actions-inci.tsx",
        lineNumber: 42,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuSeparator, {}, void 0, false, {
        fileName: "app/components/data-table-row-actions-inci.tsx",
        lineNumber: 52,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuItem, { children: [
        "Delete",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuShortcut, { children: "\u2318\u232B" }, void 0, false, {
          fileName: "app/components/data-table-row-actions-inci.tsx",
          lineNumber: 55,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/data-table-row-actions-inci.tsx",
        lineNumber: 53,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/data-table-row-actions-inci.tsx",
      lineNumber: 37,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/data-table-row-actions-inci.tsx",
    lineNumber: 30,
    columnNumber: 10
  }, this);
}
_c = DataTableRowActions;
var _c;
$RefreshReg$(_c, "DataTableRowActions");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  labels,
  statuses,
  priorities,
  DataTableRowActions
};
//# sourceMappingURL=/build/_shared/chunk-EAG7C74O.js.map
