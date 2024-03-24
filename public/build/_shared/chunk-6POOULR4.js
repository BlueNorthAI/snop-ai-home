import {
  Hero,
  Navigation
} from "/build/_shared/chunk-TBLI4NQ3.js";
import {
  ThemeSelector
} from "/build/_shared/chunk-UZRWJVST.js";
import {
  Logo,
  Logomark
} from "/build/_shared/chunk-CBFE7VJO.js";
import {
  blur_cyan_default,
  blur_indigo_default
} from "/build/_shared/chunk-S67NAB4E.js";
import {
  Framework
} from "/build/_shared/chunk-H4GH54LY.js";
import {
  clsx_default
} from "/build/_shared/chunk-Y3Q3TNJF.js";
import {
  Link,
  Outlet,
  useLocation,
  useParams
} from "/build/_shared/chunk-NON4LQMM.js";
import {
  _t
} from "/build/_shared/chunk-GY2ISSS6.js";
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

// app/components/Layout.tsx
var import_react5 = __toESM(require_react());

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

// app/components/Layout.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\Layout.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s3 = $RefreshSig$();
var _s22 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\Layout.tsx"
  );
  import.meta.hot.lastModified = "1710744547319.7249";
}
function GitHubIcon(props) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("svg", { "aria-hidden": "true", viewBox: "0 0 16 16", ...props, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("path", { d: "M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z" }, void 0, false, {
    fileName: "app/components/Layout.tsx",
    lineNumber: 37,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/Layout.tsx",
    lineNumber: 36,
    columnNumber: 10
  }, this);
}
_c5 = GitHubIcon;
function Header() {
  _s3();
  const [isScrolled, setIsScrolled] = (0, import_react5.useState)(false);
  (0, import_react5.useEffect)(() => {
    function onScroll() {
      setIsScrolled(window.scrollY > 0);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, {
      passive: true
    });
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("header", { className: clsx_default("sticky top-0 z-50 flex flex-none flex-wrap items-center justify-between bg-white px-4 py-5 shadow-md shadow-slate-900/5 transition duration-500 sm:px-6 lg:px-8 dark:shadow-none", isScrolled ? "dark:bg-slate-900/95 dark:backdrop-blur dark:[@supports(backdrop-filter:blur(0))]:bg-slate-900/75" : "dark:bg-transparent"), children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "mr-6 flex lg:hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(MobileNavigation, {}, void 0, false, {
      fileName: "app/components/Layout.tsx",
      lineNumber: 58,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/Layout.tsx",
      lineNumber: 57,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "relative flex flex-grow basis-0 items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Link, { to: "/", "aria-label": "Home page", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Logo, { className: " h-9 w-auto fill-slate-700  dark:fill-sky-100" }, void 0, false, {
      fileName: "app/components/Layout.tsx",
      lineNumber: 62,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/Layout.tsx",
      lineNumber: 61,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/Layout.tsx",
      lineNumber: 60,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "relative flex basis-0 items-center justify-end gap-6 sm:gap-8 md:flex-grow", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ThemeSelector, {}, void 0, false, {
        fileName: "app/components/Layout.tsx",
        lineNumber: 69,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Link, { to: "/login-blue", className: "hidden lg:block lg:text-sm lg:font-semibold lg:leading-6 lg:text-gray-900", children: "Log in" }, void 0, false, {
        fileName: "app/components/Layout.tsx",
        lineNumber: 71,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Link, { to: "/signup", className: "rounded-md bg-sky-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-sky-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ", children: "Sign up" }, void 0, false, {
        fileName: "app/components/Layout.tsx",
        lineNumber: 74,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Layout.tsx",
      lineNumber: 68,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Layout.tsx",
    lineNumber: 56,
    columnNumber: 10
  }, this);
}
_s3(Header, "UCaI8lpZVGvPrsRoIFYRt2wv0+o=");
_c22 = Header;
function Layout() {
  _s22();
  const pathname = useLocation().pathname;
  const isHomePage = pathname === "/";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex w-full flex-col", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Header, {}, void 0, false, {
      fileName: "app/components/Layout.tsx",
      lineNumber: 90,
      columnNumber: 7
    }, this),
    isHomePage ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Hero, {}, void 0, false, {
      fileName: "app/components/Layout.tsx",
      lineNumber: 91,
      columnNumber: 21
    }, this) : null,
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex h-24 w-full items-center justify-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "relative", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("img", { className: "absolute ", src: blur_indigo_default, alt: "", width: 530, height: 530 }, void 0, false, {
          fileName: "app/components/Layout.tsx",
          lineNumber: 96,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("img", { className: "absolute", src: blur_cyan_default, alt: "", width: 567, height: 567 }, void 0, false, {
          fileName: "app/components/Layout.tsx",
          lineNumber: 97,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/Layout.tsx",
        lineNumber: 95,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h1", { className: "max-w-2xl font-display text-5xl tracking-tight text-slate-900 dark:text-white ", children: "Our Capabilities" }, void 0, false, {
        fileName: "app/components/Layout.tsx",
        lineNumber: 100,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Layout.tsx",
      lineNumber: 94,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "mx-auto h-1 w-1/3 bg-gradient-to-r from-indigo-200 via-sky-400 to-indigo-200 " }, void 0, false, {
      fileName: "app/components/Layout.tsx",
      lineNumber: 105,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "relative flex w-full flex-auto justify-center sm:px-2 lg:px-8 xl:px-12 ", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "hidden lg:relative lg:block lg:flex-none", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "absolute inset-y-0 right-0 w-[50vw] bg-slate-50 dark:hidden" }, void 0, false, {
          fileName: "app/components/Layout.tsx",
          lineNumber: 108,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "absolute bottom-0 right-0 top-16 hidden h-12 w-px bg-gradient-to-t from-slate-800 dark:block" }, void 0, false, {
          fileName: "app/components/Layout.tsx",
          lineNumber: 109,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "absolute bottom-0 right-0 top-28 hidden w-px bg-slate-800 dark:block" }, void 0, false, {
          fileName: "app/components/Layout.tsx",
          lineNumber: 110,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "sticky top-[4.75rem] -ml-0.5 h-[calc(100vh-4.75rem)] w-96 overflow-y-auto overflow-x-hidden py-16 pl-0.5 pr-8 xl:w-72 xl:pr-16", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Navigation, {}, void 0, false, {
          fileName: "app/components/Layout.tsx",
          lineNumber: 112,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/components/Layout.tsx",
          lineNumber: 111,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/Layout.tsx",
        lineNumber: 107,
        columnNumber: 9
      }, this),
      isHomePage ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Framework, {}, void 0, false, {
        fileName: "app/components/Layout.tsx",
        lineNumber: 115,
        columnNumber: 23
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Outlet, {}, void 0, false, {
        fileName: "app/components/Layout.tsx",
        lineNumber: 115,
        columnNumber: 39
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Layout.tsx",
      lineNumber: 106,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Layout.tsx",
    lineNumber: 89,
    columnNumber: 10
  }, this);
}
_s22(Layout, "EuD9q2dZ34PfN/QO2OBhBzeMxmY=", false, function() {
  return [useLocation];
});
_c32 = Layout;
var _c5;
var _c22;
var _c32;
$RefreshReg$(_c5, "GitHubIcon");
$RefreshReg$(_c22, "Header");
$RefreshReg$(_c32, "Layout");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  Layout
};
//# sourceMappingURL=/build/_shared/chunk-6POOULR4.js.map
