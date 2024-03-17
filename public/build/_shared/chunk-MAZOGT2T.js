import {
  _t
} from "/build/_shared/chunk-D4F36K4M.js";
import {
  Navigation
} from "/build/_shared/chunk-KHD6IAOM.js";
import {
  Logomark
} from "/build/_shared/chunk-AR7BF74J.js";
import {
  Link,
  useLocation,
  useParams
} from "/build/_shared/chunk-NON4LQMM.js";
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

// app/components/MobileNavigation.jsx
var import_react = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\MobileNavigation.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\MobileNavigation.jsx"
  );
  import.meta.hot.lastModified = "1710573554852.3447";
}
function MenuIcon(props) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { "aria-hidden": "true", viewBox: "0 0 24 24", fill: "none", strokeWidth: "2", strokeLinecap: "round", ...props, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { d: "M4 7h16M4 12h16M4 17h16" }, void 0, false, {
    fileName: "app/components/MobileNavigation.jsx",
    lineNumber: 32,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/MobileNavigation.jsx",
    lineNumber: 31,
    columnNumber: 10
  }, this);
}
_c = MenuIcon;
function CloseIcon(props) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { "aria-hidden": "true", viewBox: "0 0 24 24", fill: "none", strokeWidth: "2", strokeLinecap: "round", ...props, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { d: "M5 5l14 14M19 5l-14 14" }, void 0, false, {
    fileName: "app/components/MobileNavigation.jsx",
    lineNumber: 38,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/MobileNavigation.jsx",
    lineNumber: 37,
    columnNumber: 10
  }, this);
}
_c2 = CloseIcon;
function CloseOnNavigation({
  close
}) {
  _s();
  let pathname = useLocation();
  let searchParams = useParams();
  (0, import_react.useEffect)(() => {
    close();
  }, [pathname, searchParams, close]);
  return null;
}
_s(CloseOnNavigation, "OPLCWvGUdsR20owBEJYuGncfAhc=", false, function() {
  return [useLocation, useParams];
});
_c3 = CloseOnNavigation;
function MobileNavigation() {
  _s2();
  let [isOpen, setIsOpen] = (0, import_react.useState)(false);
  let close = (0, import_react.useCallback)(() => setIsOpen(false), [setIsOpen]);
  function onLinkClick(event) {
    let link = event.currentTarget;
    if (link.pathname + link.search + link.hash === window.location.pathname + window.location.search + window.location.hash) {
      close();
    }
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", onClick: () => setIsOpen(true), className: "relative", "aria-label": "Open navigation", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MenuIcon, { className: "h-6 w-6 stroke-slate-500" }, void 0, false, {
      fileName: "app/components/MobileNavigation.jsx",
      lineNumber: 69,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/MobileNavigation.jsx",
      lineNumber: 68,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.Suspense, { fallback: null, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CloseOnNavigation, { close }, void 0, false, {
      fileName: "app/components/MobileNavigation.jsx",
      lineNumber: 72,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/MobileNavigation.jsx",
      lineNumber: 71,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(_t, { open: isOpen, onClose: () => close(), className: "fixed inset-0 z-50 flex items-start overflow-y-auto bg-slate-900/50 pr-10 backdrop-blur lg:hidden", "aria-label": "Navigation", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(_t.Panel, { className: "min-h-full w-full max-w-xs bg-white px-4 pb-12 pt-5 sm:px-6 dark:bg-slate-900", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", onClick: () => close(), "aria-label": "Close navigation", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CloseIcon, { className: "h-6 w-6 stroke-slate-500" }, void 0, false, {
          fileName: "app/components/MobileNavigation.jsx",
          lineNumber: 78,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/components/MobileNavigation.jsx",
          lineNumber: 77,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/", className: "ml-6", "aria-label": "Home page", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Logomark, { className: "h-9 w-9" }, void 0, false, {
          fileName: "app/components/MobileNavigation.jsx",
          lineNumber: 81,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/components/MobileNavigation.jsx",
          lineNumber: 80,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/MobileNavigation.jsx",
        lineNumber: 76,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Navigation, { className: "mt-5 px-1", onLinkClick }, void 0, false, {
        fileName: "app/components/MobileNavigation.jsx",
        lineNumber: 84,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/MobileNavigation.jsx",
      lineNumber: 75,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/MobileNavigation.jsx",
      lineNumber: 74,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/MobileNavigation.jsx",
    lineNumber: 67,
    columnNumber: 10
  }, this);
}
_s2(MobileNavigation, "Tf17uhiMOFxyVgnTUyhMtb27svY=");
_c4 = MobileNavigation;
var _c;
var _c2;
var _c3;
var _c4;
$RefreshReg$(_c, "MenuIcon");
$RefreshReg$(_c2, "CloseIcon");
$RefreshReg$(_c3, "CloseOnNavigation");
$RefreshReg$(_c4, "MobileNavigation");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  MobileNavigation
};
//# sourceMappingURL=/build/_shared/chunk-MAZOGT2T.js.map
