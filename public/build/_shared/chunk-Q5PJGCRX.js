import {
  cn
} from "/build/_shared/chunk-TRC5XD27.js";
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

// app/components/ui/card.tsx
var React = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\ui\\\\card.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\ui\\card.tsx"
  );
  import.meta.hot.lastModified = "1710418241797.87";
}
var Card = React.forwardRef(_c = ({
  className,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { ref, className: cn("rounded-lg border border-slate-200 bg-white text-slate-950 shadow-sm dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50", className), ...props }, void 0, false, {
  fileName: "app/components/ui/card.tsx",
  lineNumber: 26,
  columnNumber: 12
}, this));
_c2 = Card;
Card.displayName = "Card";
var CardHeader = React.forwardRef(_c3 = ({
  className,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { ref, className: cn("flex flex-col space-y-1.5 p-6", className), ...props }, void 0, false, {
  fileName: "app/components/ui/card.tsx",
  lineNumber: 32,
  columnNumber: 12
}, this));
_c4 = CardHeader;
CardHeader.displayName = "CardHeader";
var CardTitle = React.forwardRef(_c5 = ({
  className,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { ref, className: cn("text-2xl font-semibold leading-none tracking-tight", className), ...props }, void 0, false, {
  fileName: "app/components/ui/card.tsx",
  lineNumber: 38,
  columnNumber: 12
}, this));
_c6 = CardTitle;
CardTitle.displayName = "CardTitle";
var CardDescription = React.forwardRef(_c7 = ({
  className,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { ref, className: cn("text-sm text-slate-500 dark:text-slate-400", className), ...props }, void 0, false, {
  fileName: "app/components/ui/card.tsx",
  lineNumber: 44,
  columnNumber: 12
}, this));
_c8 = CardDescription;
CardDescription.displayName = "CardDescription";
var CardContent = React.forwardRef(_c9 = ({
  className,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { ref, className: cn("p-6 pt-0", className), ...props }, void 0, false, {
  fileName: "app/components/ui/card.tsx",
  lineNumber: 50,
  columnNumber: 12
}, this));
_c10 = CardContent;
CardContent.displayName = "CardContent";
var CardFooter = React.forwardRef(_c11 = ({
  className,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { ref, className: cn("flex items-center p-6 pt-0", className), ...props }, void 0, false, {
  fileName: "app/components/ui/card.tsx",
  lineNumber: 56,
  columnNumber: 12
}, this));
_c12 = CardFooter;
CardFooter.displayName = "CardFooter";
var _c;
var _c2;
var _c3;
var _c4;
var _c5;
var _c6;
var _c7;
var _c8;
var _c9;
var _c10;
var _c11;
var _c12;
$RefreshReg$(_c, "Card$React.forwardRef");
$RefreshReg$(_c2, "Card");
$RefreshReg$(_c3, "CardHeader$React.forwardRef");
$RefreshReg$(_c4, "CardHeader");
$RefreshReg$(_c5, "CardTitle$React.forwardRef");
$RefreshReg$(_c6, "CardTitle");
$RefreshReg$(_c7, "CardDescription$React.forwardRef");
$RefreshReg$(_c8, "CardDescription");
$RefreshReg$(_c9, "CardContent$React.forwardRef");
$RefreshReg$(_c10, "CardContent");
$RefreshReg$(_c11, "CardFooter$React.forwardRef");
$RefreshReg$(_c12, "CardFooter");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  Card,
  CardHeader,
  CardTitle,
  CardContent
};
//# sourceMappingURL=/build/_shared/chunk-Q5PJGCRX.js.map
