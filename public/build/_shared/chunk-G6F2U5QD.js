import {
  require_build
} from "/build/_shared/chunk-EPFXGX35.js";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "/build/_shared/chunk-OJGXK62L.js";
import {
  MoonIcon_default,
  SunIcon_default
} from "/build/_shared/chunk-2HNBOA5V.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  createHotContext
} from "/build/_shared/chunk-K4XMOQHS.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/components/ThemeSelector.jsx
var import_remix_themes = __toESM(require_build());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\ThemeSelector.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\ThemeSelector.jsx"
  );
  import.meta.hot.lastModified = "1710752924813.1975";
}
function ThemeSelector() {
  _s();
  const [currentTheme, setTheme] = (0, import_remix_themes.useTheme)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenu, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "flex h-10 w-10 items-center justify-center rounded-xl shadow-md shadow-black/5  dark:bg-slate-800 dark:text-sky-500 text-sky-500 ring:outline-none focus:ring-2 focus:ring-sky-500 focus:outline-none transition-all duration-300 ease-in-out", "aria-label": "Theme", children: [
      currentTheme === import_remix_themes.Theme.DARK ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MoonIcon_default, { className: "h-6 w-6  scale-100 transition-all" }, void 0, false, {
        fileName: "app/components/ThemeSelector.jsx",
        lineNumber: 33,
        columnNumber: 42
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SunIcon_default, { className: "h-6 w-6 rotate-0 scale-100 transition-all" }, void 0, false, {
        fileName: "app/components/ThemeSelector.jsx",
        lineNumber: 33,
        columnNumber: 103
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "sr-only", children: "Toggle theme" }, void 0, false, {
        fileName: "app/components/ThemeSelector.jsx",
        lineNumber: 34,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/ThemeSelector.jsx",
      lineNumber: 32,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/ThemeSelector.jsx",
      lineNumber: 31,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuContent, { align: "end", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuItem, { className: "hover:bg-sky-500", onClick: () => setTheme(import_remix_themes.Theme.LIGHT), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center mx-1 p-1 ", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SunIcon_default, { className: "h-6 w-6 mr-2" }, void 0, false, {
          fileName: "app/components/ThemeSelector.jsx",
          lineNumber: 40,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: " Light" }, void 0, false, {
          fileName: "app/components/ThemeSelector.jsx",
          lineNumber: 41,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/ThemeSelector.jsx",
        lineNumber: 39,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/components/ThemeSelector.jsx",
        lineNumber: 38,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropdownMenuItem, { onClick: () => setTheme(import_remix_themes.Theme.DARK), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center mx-1", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MoonIcon_default, { className: "h-6 w-6 mr-2" }, void 0, false, {
          fileName: "app/components/ThemeSelector.jsx",
          lineNumber: 46,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Dark" }, void 0, false, {
          fileName: "app/components/ThemeSelector.jsx",
          lineNumber: 47,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/ThemeSelector.jsx",
        lineNumber: 45,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/components/ThemeSelector.jsx",
        lineNumber: 44,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/ThemeSelector.jsx",
      lineNumber: 37,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/ThemeSelector.jsx",
    lineNumber: 30,
    columnNumber: 10
  }, this);
}
_s(ThemeSelector, "BpJjTYdkUjk9UJBG5f44zK17SYY=", false, function() {
  return [import_remix_themes.useTheme];
});
_c = ThemeSelector;
var _c;
$RefreshReg$(_c, "ThemeSelector");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  ThemeSelector
};
//# sourceMappingURL=/build/_shared/chunk-G6F2U5QD.js.map
