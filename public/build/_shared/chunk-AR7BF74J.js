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

// node_modules/@heroicons/react/24/outline/esm/Bars3Icon.js
var React = __toESM(require_react(), 1);
function Bars3Icon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React.createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
  }));
}
var ForwardRef = React.forwardRef(Bars3Icon);
var Bars3Icon_default = ForwardRef;

// node_modules/@heroicons/react/24/outline/esm/XMarkIcon.js
var React2 = __toESM(require_react(), 1);
function XMarkIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /* @__PURE__ */ React2.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React2.createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React2.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M6 18 18 6M6 6l12 12"
  }));
}
var ForwardRef2 = React2.forwardRef(XMarkIcon);
var XMarkIcon_default = ForwardRef2;

// node_modules/@heroicons/react/24/outline/esm/MoonIcon.js
var React3 = __toESM(require_react(), 1);
function MoonIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /* @__PURE__ */ React3.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React3.createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React3.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
  }));
}
var ForwardRef3 = React3.forwardRef(MoonIcon);
var MoonIcon_default = ForwardRef3;

// node_modules/@heroicons/react/24/outline/esm/SunIcon.js
var React4 = __toESM(require_react(), 1);
function SunIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /* @__PURE__ */ React4.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React4.createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React4.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
  }));
}
var ForwardRef4 = React4.forwardRef(SunIcon);
var SunIcon_default = ForwardRef4;

export {
  Logomark,
  Logo,
  Bars3Icon_default,
  MoonIcon_default,
  SunIcon_default,
  XMarkIcon_default
};
//# sourceMappingURL=/build/_shared/chunk-AR7BF74J.js.map
