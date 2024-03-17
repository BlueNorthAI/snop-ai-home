import {
  $5e63c961fc1ce211$export$8c6ed5c666ac1360,
  cn
} from "/build/_shared/chunk-UWXV354P.js";
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
  __commonJS,
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// empty-module:~/models/chat.server
var require_chat = __commonJS({
  "empty-module:~/models/chat.server"(exports, module) {
    module.exports = {};
  }
});

// app/components/ui/button.tsx
var React = __toESM(require_react());

// node_modules/class-variance-authority/node_modules/clsx/dist/clsx.mjs
function r(e) {
  var t, f, n = "";
  if ("string" == typeof e || "number" == typeof e)
    n += e;
  else if ("object" == typeof e)
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (f = r(e[t])) && (n && (n += " "), n += f);
    else
      for (t in e)
        e[t] && (n && (n += " "), n += t);
  return n;
}
function clsx() {
  for (var e, t, f = 0, n = ""; f < arguments.length; )
    (e = arguments[f++]) && (t = r(e)) && (n && (n += " "), n += t);
  return n;
}

// node_modules/class-variance-authority/dist/index.mjs
var falsyToString = (value) => typeof value === "boolean" ? "".concat(value) : value === 0 ? "0" : value;
var cx = clsx;
var cva = (base, config) => {
  return (props) => {
    var ref;
    if ((config === null || config === void 0 ? void 0 : config.variants) == null)
      return cx(base, props === null || props === void 0 ? void 0 : props.class, props === null || props === void 0 ? void 0 : props.className);
    const { variants, defaultVariants } = config;
    const getVariantClassNames = Object.keys(variants).map((variant) => {
      const variantProp = props === null || props === void 0 ? void 0 : props[variant];
      const defaultVariantProp = defaultVariants === null || defaultVariants === void 0 ? void 0 : defaultVariants[variant];
      if (variantProp === null)
        return null;
      const variantKey = falsyToString(variantProp) || falsyToString(defaultVariantProp);
      return variants[variant][variantKey];
    });
    const propsWithoutUndefined = props && Object.entries(props).reduce((acc, param) => {
      let [key, value] = param;
      if (value === void 0) {
        return acc;
      }
      acc[key] = value;
      return acc;
    }, {});
    const getCompoundVariantClassNames = config === null || config === void 0 ? void 0 : (ref = config.compoundVariants) === null || ref === void 0 ? void 0 : ref.reduce((acc, param1) => {
      let { class: cvClass, className: cvClassName, ...compoundVariantOptions } = param1;
      return Object.entries(compoundVariantOptions).every((param) => {
        let [key, value] = param;
        return Array.isArray(value) ? value.includes({
          ...defaultVariants,
          ...propsWithoutUndefined
        }[key]) : {
          ...defaultVariants,
          ...propsWithoutUndefined
        }[key] === value;
      }) ? [
        ...acc,
        cvClass,
        cvClassName
      ] : acc;
    }, []);
    return cx(base, getVariantClassNames, getCompoundVariantClassNames, props === null || props === void 0 ? void 0 : props.class, props === null || props === void 0 ? void 0 : props.className);
  };
};

// app/components/ui/button.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\ui\\\\button.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\ui\\button.tsx"
  );
  import.meta.hot.lastModified = "1710131653000";
}
var buttonVariants = cva("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300", {
  variants: {
    variant: {
      default: "bg-slate-900 text-slate-50 hover:bg-slate-900/90 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-50/90",
      destructive: "bg-red-500 text-slate-50 hover:bg-red-500/90 dark:bg-red-900 dark:text-slate-50 dark:hover:bg-red-900/90",
      outline: "border border-slate-200 bg-white hover:bg-slate-100 hover:text-slate-900 dark:border-slate-800 dark:bg-slate-950 dark:hover:bg-slate-800 dark:hover:text-slate-50",
      secondary: "bg-slate-100 text-slate-900 hover:bg-slate-100/80 dark:bg-slate-800 dark:text-slate-50 dark:hover:bg-slate-800/80",
      ghost: "hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-slate-800 dark:hover:text-slate-50",
      link: "text-slate-900 underline-offset-4 hover:underline dark:text-slate-50"
    },
    size: {
      default: "h-10 px-4 py-2",
      sm: "h-9 rounded-md px-3",
      lg: "h-11 rounded-md px-8",
      icon: "h-10 w-10"
    }
  },
  defaultVariants: {
    variant: "default",
    size: "default"
  }
});
var Button = React.forwardRef(_c = ({
  className,
  variant,
  size,
  asChild = false,
  ...props
}, ref) => {
  const Comp = asChild ? $5e63c961fc1ce211$export$8c6ed5c666ac1360 : "button";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Comp, { className: cn(buttonVariants({
    variant,
    size,
    className
  })), ref, ...props }, void 0, false, {
    fileName: "app/components/ui/button.tsx",
    lineNumber: 55,
    columnNumber: 10
  }, this);
});
_c2 = Button;
Button.displayName = "Button";
var _c;
var _c2;
$RefreshReg$(_c, "Button$React.forwardRef");
$RefreshReg$(_c2, "Button");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/ui/icons.tsx
var React2 = __toESM(require_react());
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\ui\\\\icons.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\ui\\icons.tsx"
  );
  import.meta.hot.lastModified = "1710131653000";
}
function IconNextChat({
  className,
  inverted,
  ...props
}) {
  _s();
  const id = React2.useId();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("svg", { viewBox: "0 0 17 17", fill: "none", xmlns: "http://www.w3.org/2000/svg", className: cn("size-4", className), ...props, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("defs", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("linearGradient", { id: `gradient-${id}-1`, x1: "10.6889", y1: "10.3556", x2: "13.8445", y2: "14.2667", gradientUnits: "userSpaceOnUse", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("stop", { stopColor: inverted ? "white" : "black" }, void 0, false, {
          fileName: "app/components/ui/icons.tsx",
          lineNumber: 35,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("stop", { offset: 1, stopColor: inverted ? "white" : "black", stopOpacity: 0 }, void 0, false, {
          fileName: "app/components/ui/icons.tsx",
          lineNumber: 36,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/ui/icons.tsx",
        lineNumber: 34,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("linearGradient", { id: `gradient-${id}-2`, x1: "11.7555", y1: "4.8", x2: "11.7376", y2: "9.50002", gradientUnits: "userSpaceOnUse", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("stop", { stopColor: inverted ? "white" : "black" }, void 0, false, {
          fileName: "app/components/ui/icons.tsx",
          lineNumber: 39,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("stop", { offset: 1, stopColor: inverted ? "white" : "black", stopOpacity: 0 }, void 0, false, {
          fileName: "app/components/ui/icons.tsx",
          lineNumber: 40,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/ui/icons.tsx",
        lineNumber: 38,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/ui/icons.tsx",
      lineNumber: 33,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("path", { d: "M1 16L2.58314 11.2506C1.83084 9.74642 1.63835 8.02363 2.04013 6.39052C2.4419 4.75741 3.41171 3.32057 4.776 2.33712C6.1403 1.35367 7.81003 0.887808 9.4864 1.02289C11.1628 1.15798 12.7364 1.8852 13.9256 3.07442C15.1148 4.26363 15.842 5.83723 15.9771 7.5136C16.1122 9.18997 15.6463 10.8597 14.6629 12.224C13.6794 13.5883 12.2426 14.5581 10.6095 14.9599C8.97637 15.3616 7.25358 15.1692 5.74942 14.4169L1 16Z", fill: inverted ? "black" : "white", stroke: inverted ? "black" : "white", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }, void 0, false, {
      fileName: "app/components/ui/icons.tsx",
      lineNumber: 43,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("mask", { id: "mask0_91_2047", style: {
      maskType: "alpha"
    }, maskUnits: "userSpaceOnUse", x: 1, y: 0, width: 16, height: 16, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("circle", { cx: 9, cy: 8, r: 8, fill: inverted ? "black" : "white" }, void 0, false, {
      fileName: "app/components/ui/icons.tsx",
      lineNumber: 47,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/ui/icons.tsx",
      lineNumber: 44,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("g", { mask: "url(#mask0_91_2047)", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("circle", { cx: 9, cy: 8, r: 8, fill: inverted ? "black" : "white" }, void 0, false, {
        fileName: "app/components/ui/icons.tsx",
        lineNumber: 50,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("path", { d: "M14.2896 14.0018L7.146 4.8H5.80005V11.1973H6.87681V6.16743L13.4444 14.6529C13.7407 14.4545 14.0231 14.2369 14.2896 14.0018Z", fill: `url(#gradient-${id}-1)` }, void 0, false, {
        fileName: "app/components/ui/icons.tsx",
        lineNumber: 51,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("rect", { x: "11.2222", y: "4.8", width: "1.06667", height: "6.4", fill: `url(#gradient-${id}-2)` }, void 0, false, {
        fileName: "app/components/ui/icons.tsx",
        lineNumber: 52,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/ui/icons.tsx",
      lineNumber: 49,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/ui/icons.tsx",
    lineNumber: 32,
    columnNumber: 10
  }, this);
}
_s(IconNextChat, "WhsuKpSQZEWeFcB7gWlfDRQktoQ=", false, function() {
  return [React2.useId];
});
_c3 = IconNextChat;
function IconOpenAI({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("svg", { fill: "currentColor", viewBox: "0 0 24 24", role: "img", xmlns: "http://www.w3.org/2000/svg", className: cn("size-4", className), ...props, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("title", { children: "OpenAI icon" }, void 0, false, {
      fileName: "app/components/ui/icons.tsx",
      lineNumber: 65,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("path", { d: "M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z" }, void 0, false, {
      fileName: "app/components/ui/icons.tsx",
      lineNumber: 66,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/ui/icons.tsx",
    lineNumber: 64,
    columnNumber: 10
  }, this);
}
_c22 = IconOpenAI;
function IconVercel({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("svg", { "aria-label": "Vercel logomark", role: "img", viewBox: "0 0 74 64", className: cn("size-4", className), ...props, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("path", { d: "M37.5896 0.25L74.5396 64.25H0.639648L37.5896 0.25Z", fill: "currentColor" }, void 0, false, {
    fileName: "app/components/ui/icons.tsx",
    lineNumber: 75,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/ui/icons.tsx",
    lineNumber: 74,
    columnNumber: 10
  }, this);
}
_c32 = IconVercel;
function IconGitHub({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("svg", { role: "img", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", fill: "currentColor", className: cn("size-4", className), ...props, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("title", { children: "GitHub" }, void 0, false, {
      fileName: "app/components/ui/icons.tsx",
      lineNumber: 84,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("path", { d: "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" }, void 0, false, {
      fileName: "app/components/ui/icons.tsx",
      lineNumber: 85,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/ui/icons.tsx",
    lineNumber: 83,
    columnNumber: 10
  }, this);
}
_c4 = IconGitHub;
function IconSeparator({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("svg", { fill: "none", shapeRendering: "geometricPrecision", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1", viewBox: "0 0 24 24", "aria-hidden": "true", className: cn("size-4", className), ...props, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("path", { d: "M16.88 3.549L7.12 20.451" }, void 0, false, {
    fileName: "app/components/ui/icons.tsx",
    lineNumber: 94,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/ui/icons.tsx",
    lineNumber: 93,
    columnNumber: 10
  }, this);
}
_c5 = IconSeparator;
function IconArrowDown({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256", fill: "currentColor", className: cn("size-4", className), ...props, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("path", { d: "m205.66 149.66-72 72a8 8 0 0 1-11.32 0l-72-72a8 8 0 0 1 11.32-11.32L120 196.69V40a8 8 0 0 1 16 0v156.69l58.34-58.35a8 8 0 0 1 11.32 11.32Z" }, void 0, false, {
    fileName: "app/components/ui/icons.tsx",
    lineNumber: 103,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/ui/icons.tsx",
    lineNumber: 102,
    columnNumber: 10
  }, this);
}
_c6 = IconArrowDown;
function IconArrowRight({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256", fill: "currentColor", className: cn("size-4", className), ...props, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("path", { d: "m221.66 133.66-72 72a8 8 0 0 1-11.32-11.32L196.69 136H40a8 8 0 0 1 0-16h156.69l-58.35-58.34a8 8 0 0 1 11.32-11.32l72 72a8 8 0 0 1 0 11.32Z" }, void 0, false, {
    fileName: "app/components/ui/icons.tsx",
    lineNumber: 112,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/ui/icons.tsx",
    lineNumber: 111,
    columnNumber: 10
  }, this);
}
_c7 = IconArrowRight;
function IconUser({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256", fill: "currentColor", className: cn("size-4", className), ...props, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("path", { d: "M230.92 212c-15.23-26.33-38.7-45.21-66.09-54.16a72 72 0 1 0-73.66 0c-27.39 8.94-50.86 27.82-66.09 54.16a8 8 0 1 0 13.85 8c18.84-32.56 52.14-52 89.07-52s70.23 19.44 89.07 52a8 8 0 1 0 13.85-8ZM72 96a56 56 0 1 1 56 56 56.06 56.06 0 0 1-56-56Z" }, void 0, false, {
    fileName: "app/components/ui/icons.tsx",
    lineNumber: 121,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/ui/icons.tsx",
    lineNumber: 120,
    columnNumber: 10
  }, this);
}
_c8 = IconUser;
function IconPlus({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256", fill: "currentColor", className: cn("size-4", className), ...props, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("path", { d: "M224 128a8 8 0 0 1-8 8h-80v80a8 8 0 0 1-16 0v-80H40a8 8 0 0 1 0-16h80V40a8 8 0 0 1 16 0v80h80a8 8 0 0 1 8 8Z" }, void 0, false, {
    fileName: "app/components/ui/icons.tsx",
    lineNumber: 130,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/ui/icons.tsx",
    lineNumber: 129,
    columnNumber: 10
  }, this);
}
_c9 = IconPlus;
function IconArrowElbow({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256", fill: "currentColor", className: cn("size-4", className), ...props, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("path", { d: "M200 32v144a8 8 0 0 1-8 8H67.31l34.35 34.34a8 8 0 0 1-11.32 11.32l-48-48a8 8 0 0 1 0-11.32l48-48a8 8 0 0 1 11.32 11.32L67.31 168H184V32a8 8 0 0 1 16 0Z" }, void 0, false, {
    fileName: "app/components/ui/icons.tsx",
    lineNumber: 139,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/ui/icons.tsx",
    lineNumber: 138,
    columnNumber: 10
  }, this);
}
_c10 = IconArrowElbow;
function IconSpinner({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256", fill: "currentColor", className: cn("size-4 animate-spin", className), ...props, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("path", { d: "M232 128a104 104 0 0 1-208 0c0-41 23.81-78.36 60.66-95.27a8 8 0 0 1 6.68 14.54C60.15 61.59 40 93.27 40 128a88 88 0 0 0 176 0c0-34.73-20.15-66.41-51.34-80.73a8 8 0 0 1 6.68-14.54C208.19 49.64 232 87 232 128Z" }, void 0, false, {
    fileName: "app/components/ui/icons.tsx",
    lineNumber: 148,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/ui/icons.tsx",
    lineNumber: 147,
    columnNumber: 10
  }, this);
}
_c11 = IconSpinner;
function IconMessage({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256", fill: "currentColor", className: cn("size-4", className), ...props, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("path", { d: "M216 48H40a16 16 0 0 0-16 16v160a15.84 15.84 0 0 0 9.25 14.5A16.05 16.05 0 0 0 40 240a15.89 15.89 0 0 0 10.25-3.78.69.69 0 0 0 .13-.11L82.5 208H216a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16ZM40 224Zm176-32H82.5a16 16 0 0 0-10.3 3.75l-.12.11L40 224V64h176Z" }, void 0, false, {
    fileName: "app/components/ui/icons.tsx",
    lineNumber: 157,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/ui/icons.tsx",
    lineNumber: 156,
    columnNumber: 10
  }, this);
}
_c12 = IconMessage;
function IconTrash({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256", fill: "currentColor", className: cn("size-4", className), ...props, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("path", { d: "M216 48h-40v-8a24 24 0 0 0-24-24h-48a24 24 0 0 0-24 24v8H40a8 8 0 0 0 0 16h8v144a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16V64h8a8 8 0 0 0 0-16ZM96 40a8 8 0 0 1 8-8h48a8 8 0 0 1 8 8v8H96Zm96 168H64V64h128Zm-80-104v64a8 8 0 0 1-16 0v-64a8 8 0 0 1 16 0Zm48 0v64a8 8 0 0 1-16 0v-64a8 8 0 0 1 16 0Z" }, void 0, false, {
    fileName: "app/components/ui/icons.tsx",
    lineNumber: 166,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/ui/icons.tsx",
    lineNumber: 165,
    columnNumber: 10
  }, this);
}
_c13 = IconTrash;
function IconRefresh({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256", fill: "currentColor", className: cn("size-4", className), ...props, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("path", { d: "M197.67 186.37a8 8 0 0 1 0 11.29C196.58 198.73 170.82 224 128 224c-37.39 0-64.53-22.4-80-39.85V208a8 8 0 0 1-16 0v-48a8 8 0 0 1 8-8h48a8 8 0 0 1 0 16H55.44C67.76 183.35 93 208 128 208c36 0 58.14-21.46 58.36-21.68a8 8 0 0 1 11.31.05ZM216 40a8 8 0 0 0-8 8v23.85C192.53 54.4 165.39 32 128 32c-42.82 0-68.58 25.27-69.66 26.34a8 8 0 0 0 11.3 11.34C69.86 69.46 92 48 128 48c35 0 60.24 24.65 72.56 40H168a8 8 0 0 0 0 16h48a8 8 0 0 0 8-8V48a8 8 0 0 0-8-8Z" }, void 0, false, {
    fileName: "app/components/ui/icons.tsx",
    lineNumber: 175,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/ui/icons.tsx",
    lineNumber: 174,
    columnNumber: 10
  }, this);
}
_c14 = IconRefresh;
function IconStop({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256", fill: "currentColor", className: cn("size-4", className), ...props, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("path", { d: "M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24Zm0 192a88 88 0 1 1 88-88 88.1 88.1 0 0 1-88 88Zm24-120h-48a8 8 0 0 0-8 8v48a8 8 0 0 0 8 8h48a8 8 0 0 0 8-8v-48a8 8 0 0 0-8-8Zm-8 48h-32v-32h32Z" }, void 0, false, {
    fileName: "app/components/ui/icons.tsx",
    lineNumber: 184,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/ui/icons.tsx",
    lineNumber: 183,
    columnNumber: 10
  }, this);
}
_c15 = IconStop;
function IconSidebar({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256", fill: "currentColor", className: cn("size-4", className), ...props, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("path", { d: "M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16ZM40 56h40v144H40Zm176 144H96V56h120v144Z" }, void 0, false, {
    fileName: "app/components/ui/icons.tsx",
    lineNumber: 193,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/ui/icons.tsx",
    lineNumber: 192,
    columnNumber: 10
  }, this);
}
_c16 = IconSidebar;
function IconMoon({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256", fill: "currentColor", className: cn("size-4", className), ...props, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("path", { d: "M233.54 142.23a8 8 0 0 0-8-2 88.08 88.08 0 0 1-109.8-109.8 8 8 0 0 0-10-10 104.84 104.84 0 0 0-52.91 37A104 104 0 0 0 136 224a103.09 103.09 0 0 0 62.52-20.88 104.84 104.84 0 0 0 37-52.91 8 8 0 0 0-1.98-7.98Zm-44.64 48.11A88 88 0 0 1 65.66 67.11a89 89 0 0 1 31.4-26A106 106 0 0 0 96 56a104.11 104.11 0 0 0 104 104 106 106 0 0 0 14.92-1.06 89 89 0 0 1-26.02 31.4Z" }, void 0, false, {
    fileName: "app/components/ui/icons.tsx",
    lineNumber: 202,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/ui/icons.tsx",
    lineNumber: 201,
    columnNumber: 10
  }, this);
}
_c17 = IconMoon;
function IconSun({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256", fill: "currentColor", className: cn("size-4", className), ...props, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("path", { d: "M120 40V16a8 8 0 0 1 16 0v24a8 8 0 0 1-16 0Zm72 88a64 64 0 1 1-64-64 64.07 64.07 0 0 1 64 64Zm-16 0a48 48 0 1 0-48 48 48.05 48.05 0 0 0 48-48ZM58.34 69.66a8 8 0 0 0 11.32-11.32l-16-16a8 8 0 0 0-11.32 11.32Zm0 116.68-16 16a8 8 0 0 0 11.32 11.32l16-16a8 8 0 0 0-11.32-11.32ZM192 72a8 8 0 0 0 5.66-2.34l16-16a8 8 0 0 0-11.32-11.32l-16 16A8 8 0 0 0 192 72Zm5.66 114.34a8 8 0 0 0-11.32 11.32l16 16a8 8 0 0 0 11.32-11.32ZM48 128a8 8 0 0 0-8-8H16a8 8 0 0 0 0 16h24a8 8 0 0 0 8-8Zm80 80a8 8 0 0 0-8 8v24a8 8 0 0 0 16 0v-24a8 8 0 0 0-8-8Zm112-88h-24a8 8 0 0 0 0 16h24a8 8 0 0 0 0-16Z" }, void 0, false, {
    fileName: "app/components/ui/icons.tsx",
    lineNumber: 211,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/ui/icons.tsx",
    lineNumber: 210,
    columnNumber: 10
  }, this);
}
_c18 = IconSun;
function IconCopy({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256", fill: "currentColor", className: cn("size-4", className), ...props, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("path", { d: "M216 32H88a8 8 0 0 0-8 8v40H40a8 8 0 0 0-8 8v128a8 8 0 0 0 8 8h128a8 8 0 0 0 8-8v-40h40a8 8 0 0 0 8-8V40a8 8 0 0 0-8-8Zm-56 176H48V96h112Zm48-48h-32V88a8 8 0 0 0-8-8H96V48h112Z" }, void 0, false, {
    fileName: "app/components/ui/icons.tsx",
    lineNumber: 220,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/ui/icons.tsx",
    lineNumber: 219,
    columnNumber: 10
  }, this);
}
_c19 = IconCopy;
function IconCheck({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256", fill: "currentColor", className: cn("size-4", className), ...props, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("path", { d: "m229.66 77.66-128 128a8 8 0 0 1-11.32 0l-56-56a8 8 0 0 1 11.32-11.32L96 188.69 218.34 66.34a8 8 0 0 1 11.32 11.32Z" }, void 0, false, {
    fileName: "app/components/ui/icons.tsx",
    lineNumber: 229,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/ui/icons.tsx",
    lineNumber: 228,
    columnNumber: 10
  }, this);
}
_c20 = IconCheck;
function IconDownload({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256", fill: "currentColor", className: cn("size-4", className), ...props, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("path", { d: "M224 152v56a16 16 0 0 1-16 16H48a16 16 0 0 1-16-16v-56a8 8 0 0 1 16 0v56h160v-56a8 8 0 0 1 16 0Zm-101.66 5.66a8 8 0 0 0 11.32 0l40-40a8 8 0 0 0-11.32-11.32L136 132.69V40a8 8 0 0 0-16 0v92.69l-26.34-26.35a8 8 0 0 0-11.32 11.32Z" }, void 0, false, {
    fileName: "app/components/ui/icons.tsx",
    lineNumber: 238,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/ui/icons.tsx",
    lineNumber: 237,
    columnNumber: 10
  }, this);
}
_c21 = IconDownload;
function IconClose({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256", fill: "currentColor", className: cn("size-4", className), ...props, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("path", { d: "M205.66 194.34a8 8 0 0 1-11.32 11.32L128 139.31l-66.34 66.35a8 8 0 0 1-11.32-11.32L116.69 128 50.34 61.66a8 8 0 0 1 11.32-11.32L128 116.69l66.34-66.35a8 8 0 0 1 11.32 11.32L139.31 128Z" }, void 0, false, {
    fileName: "app/components/ui/icons.tsx",
    lineNumber: 247,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/ui/icons.tsx",
    lineNumber: 246,
    columnNumber: 10
  }, this);
}
_c222 = IconClose;
function IconEdit({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: cn("size-4", className), ...props, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" }, void 0, false, {
    fileName: "app/components/ui/icons.tsx",
    lineNumber: 256,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/ui/icons.tsx",
    lineNumber: 255,
    columnNumber: 10
  }, this);
}
_c23 = IconEdit;
function IconShare({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "currentColor", className: cn("size-4", className), viewBox: "0 0 256 256", ...props, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("path", { d: "m237.66 106.35-80-80A8 8 0 0 0 144 32v40.35c-25.94 2.22-54.59 14.92-78.16 34.91-28.38 24.08-46.05 55.11-49.76 87.37a12 12 0 0 0 20.68 9.58c11-11.71 50.14-48.74 107.24-52V192a8 8 0 0 0 13.66 5.65l80-80a8 8 0 0 0 0-11.3ZM160 172.69V144a8 8 0 0 0-8-8c-28.08 0-55.43 7.33-81.29 21.8a196.17 196.17 0 0 0-36.57 26.52c5.8-23.84 20.42-46.51 42.05-64.86C99.41 99.77 127.75 88 152 88a8 8 0 0 0 8-8V51.32L220.69 112Z" }, void 0, false, {
    fileName: "app/components/ui/icons.tsx",
    lineNumber: 265,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/ui/icons.tsx",
    lineNumber: 264,
    columnNumber: 10
  }, this);
}
_c24 = IconShare;
function IconUsers({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "currentColor", className: cn("size-4", className), viewBox: "0 0 256 256", ...props, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("path", { d: "M117.25 157.92a60 60 0 1 0-66.5 0 95.83 95.83 0 0 0-47.22 37.71 8 8 0 1 0 13.4 8.74 80 80 0 0 1 134.14 0 8 8 0 0 0 13.4-8.74 95.83 95.83 0 0 0-47.22-37.71ZM40 108a44 44 0 1 1 44 44 44.05 44.05 0 0 1-44-44Zm210.14 98.7a8 8 0 0 1-11.07-2.33A79.83 79.83 0 0 0 172 168a8 8 0 0 1 0-16 44 44 0 1 0-16.34-84.87 8 8 0 1 1-5.94-14.85 60 60 0 0 1 55.53 105.64 95.83 95.83 0 0 1 47.22 37.71 8 8 0 0 1-2.33 11.07Z" }, void 0, false, {
    fileName: "app/components/ui/icons.tsx",
    lineNumber: 274,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/ui/icons.tsx",
    lineNumber: 273,
    columnNumber: 10
  }, this);
}
_c25 = IconUsers;
function IconExternalLink({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "currentColor", className: cn("size-4", className), viewBox: "0 0 256 256", ...props, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("path", { d: "M224 104a8 8 0 0 1-16 0V59.32l-66.33 66.34a8 8 0 0 1-11.32-11.32L196.68 48H152a8 8 0 0 1 0-16h64a8 8 0 0 1 8 8Zm-40 24a8 8 0 0 0-8 8v72H48V80h72a8 8 0 0 0 0-16H48a16 16 0 0 0-16 16v128a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16v-72a8 8 0 0 0-8-8Z" }, void 0, false, {
    fileName: "app/components/ui/icons.tsx",
    lineNumber: 283,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/ui/icons.tsx",
    lineNumber: 282,
    columnNumber: 10
  }, this);
}
_c26 = IconExternalLink;
function IconChevronUpDown({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "currentColor", className: cn("size-4", className), viewBox: "0 0 256 256", ...props, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("path", { d: "M181.66 170.34a8 8 0 0 1 0 11.32l-48 48a8 8 0 0 1-11.32 0l-48-48a8 8 0 0 1 11.32-11.32L128 212.69l42.34-42.35a8 8 0 0 1 11.32 0Zm-96-84.68L128 43.31l42.34 42.35a8 8 0 0 0 11.32-11.32l-48-48a8 8 0 0 0-11.32 0l-48 48a8 8 0 0 0 11.32 11.32Z" }, void 0, false, {
    fileName: "app/components/ui/icons.tsx",
    lineNumber: 292,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/ui/icons.tsx",
    lineNumber: 291,
    columnNumber: 10
  }, this);
}
_c27 = IconChevronUpDown;
var _c3;
var _c22;
var _c32;
var _c4;
var _c5;
var _c6;
var _c7;
var _c8;
var _c9;
var _c10;
var _c11;
var _c12;
var _c13;
var _c14;
var _c15;
var _c16;
var _c17;
var _c18;
var _c19;
var _c20;
var _c21;
var _c222;
var _c23;
var _c24;
var _c25;
var _c26;
var _c27;
$RefreshReg$(_c3, "IconNextChat");
$RefreshReg$(_c22, "IconOpenAI");
$RefreshReg$(_c32, "IconVercel");
$RefreshReg$(_c4, "IconGitHub");
$RefreshReg$(_c5, "IconSeparator");
$RefreshReg$(_c6, "IconArrowDown");
$RefreshReg$(_c7, "IconArrowRight");
$RefreshReg$(_c8, "IconUser");
$RefreshReg$(_c9, "IconPlus");
$RefreshReg$(_c10, "IconArrowElbow");
$RefreshReg$(_c11, "IconSpinner");
$RefreshReg$(_c12, "IconMessage");
$RefreshReg$(_c13, "IconTrash");
$RefreshReg$(_c14, "IconRefresh");
$RefreshReg$(_c15, "IconStop");
$RefreshReg$(_c16, "IconSidebar");
$RefreshReg$(_c17, "IconMoon");
$RefreshReg$(_c18, "IconSun");
$RefreshReg$(_c19, "IconCopy");
$RefreshReg$(_c20, "IconCheck");
$RefreshReg$(_c21, "IconDownload");
$RefreshReg$(_c222, "IconClose");
$RefreshReg$(_c23, "IconEdit");
$RefreshReg$(_c24, "IconShare");
$RefreshReg$(_c25, "IconUsers");
$RefreshReg$(_c26, "IconExternalLink");
$RefreshReg$(_c27, "IconChevronUpDown");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/lib/hooks/use-copy-to-clipboard.tsx
var React3 = __toESM(require_react());
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\lib\\hooks\\use-copy-to-clipboard.tsx"
  );
  import.meta.hot.lastModified = "1710131653000";
}
function useCopyToClipboard({
  timeout = 2e3
}) {
  const [isCopied, setIsCopied] = React3.useState(false);
  const copyToClipboard = (value) => {
    if (typeof window === "undefined" || !navigator.clipboard?.writeText) {
      return;
    }
    if (!value) {
      return;
    }
    navigator.clipboard.writeText(value).then(() => {
      setIsCopied(true);
      setTimeout(() => {
        setIsCopied(false);
      }, timeout);
    });
  };
  return { isCopied, copyToClipboard };
}

export {
  cva,
  buttonVariants,
  Button,
  IconNextChat,
  IconSeparator,
  IconArrowDown,
  IconArrowRight,
  IconUser,
  IconPlus,
  IconArrowElbow,
  IconSpinner,
  IconMessage,
  IconTrash,
  IconRefresh,
  IconStop,
  IconMoon,
  IconSun,
  IconCopy,
  IconCheck,
  IconDownload,
  IconShare,
  IconUsers,
  IconExternalLink,
  useCopyToClipboard,
  require_chat
};
//# sourceMappingURL=/build/_shared/chunk-XLWUAKDO.js.map
