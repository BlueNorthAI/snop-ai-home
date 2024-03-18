import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  createHotContext
} from "/build/_shared/chunk-K4XMOQHS.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/images/logo1.png
var logo1_default = "/build/_assets/logo1-VOLM65DI.png";

// app/components/Logo.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\Logo.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\Logo.jsx"
  );
  import.meta.hot.lastModified = "1710586681048.4746";
}
function LogomarkPaths() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { className: "", src: logo1_default, alt: "", width: 40, height: 40 }, void 0, false, {
    fileName: "app/components/Logo.jsx",
    lineNumber: 23,
    columnNumber: 10
  }, this);
}
_c = LogomarkPaths;
function Logomark(props) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LogomarkPaths, {}, void 0, false, {
    fileName: "app/components/Logo.jsx",
    lineNumber: 28,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/Logo.jsx",
    lineNumber: 27,
    columnNumber: 10
  }, this);
}
_c2 = Logomark;
function Logo(props) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center ", "aria-hidden": "true", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LogomarkPaths, {}, void 0, false, {
      fileName: "app/components/Logo.jsx",
      lineNumber: 34,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "ml-2 flex items-center text-2xl font-bold tracking-wide dark:text-white", children: "BlueNorth AI" }, void 0, false, {
      fileName: "app/components/Logo.jsx",
      lineNumber: 35,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Logo.jsx",
    lineNumber: 33,
    columnNumber: 10
  }, this);
}
_c3 = Logo;
var _c;
var _c2;
var _c3;
$RefreshReg$(_c, "LogomarkPaths");
$RefreshReg$(_c2, "Logomark");
$RefreshReg$(_c3, "Logo");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  Logomark,
  Logo
};
//# sourceMappingURL=/build/_shared/chunk-Z5QCNIYB.js.map
