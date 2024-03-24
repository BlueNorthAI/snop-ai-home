import {
  Hero,
  Navigation
} from "/build/_shared/chunk-TBLI4NQ3.js";
import {
  ThemeSelector
} from "/build/_shared/chunk-UZRWJVST.js";
import {
  Logo
} from "/build/_shared/chunk-CBFE7VJO.js";
import "/build/_shared/chunk-RK6Z65JK.js";
import {
  blur_cyan_default,
  blur_indigo_default
} from "/build/_shared/chunk-S67NAB4E.js";
import "/build/_shared/chunk-JI2KNYM7.js";
import "/build/_shared/chunk-CPS4G365.js";
import "/build/_shared/chunk-DQMH5JL2.js";
import "/build/_shared/chunk-YOJGWH76.js";
import "/build/_shared/chunk-KTF7K347.js";
import "/build/_shared/chunk-TRC5XD27.js";
import "/build/_shared/chunk-ELWJTL4F.js";
import "/build/_shared/chunk-EPFXGX35.js";
import "/build/_shared/chunk-NMZL6IDN.js";
import {
  clsx_default
} from "/build/_shared/chunk-Y3Q3TNJF.js";
import {
  Link
} from "/build/_shared/chunk-NON4LQMM.js";
import "/build/_shared/chunk-QA7IBH2P.js";
import "/build/_shared/chunk-GIAAE3CH.js";
import {
  createHotContext
} from "/build/_shared/chunk-K4XMOQHS.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  require_react
} from "/build/_shared/chunk-BOXFZXVX.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/slider.tsx
var import_react = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\slider.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\slider.tsx"
  );
  import.meta.hot.lastModified = "1710575505855.7188";
}
function GitHubIcon(props) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { "aria-hidden": "true", viewBox: "0 0 16 16", ...props, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { d: "M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z" }, void 0, false, {
    fileName: "app/routes/slider.tsx",
    lineNumber: 35,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/slider.tsx",
    lineNumber: 34,
    columnNumber: 10
  }, this);
}
_c = GitHubIcon;
function Header() {
  _s();
  let [isScrolled, setIsScrolled] = (0, import_react.useState)(false);
  (0, import_react.useEffect)(() => {
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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", { className: clsx_default("sticky top-0 z-50 flex flex-none flex-wrap items-center justify-between bg-white px-4 py-5 shadow-md shadow-slate-900/5 transition duration-500 sm:px-6 lg:px-8 dark:shadow-none", isScrolled ? "dark:bg-slate-900/95 dark:backdrop-blur dark:[@supports(backdrop-filter:blur(0))]:bg-slate-900/75" : "dark:bg-transparent"), children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative flex flex-grow basis-0 items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { href: "/", "aria-label": "Home page", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Logo, { className: " h-9 w-auto fill-slate-700  dark:fill-sky-100" }, void 0, false, {
      fileName: "app/routes/slider.tsx",
      lineNumber: 62,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/slider.tsx",
      lineNumber: 59,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/slider.tsx",
      lineNumber: 58,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative flex basis-0 justify-end gap-6 sm:gap-8 md:flex-grow", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ThemeSelector, { className: "relative z-10" }, void 0, false, {
        fileName: "app/routes/slider.tsx",
        lineNumber: 69,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { href: "https://github.com", className: "group", "aria-label": "GitHub", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(GitHubIcon, { className: "h-6 w-6 fill-slate-400 group-hover:fill-slate-500 dark:group-hover:fill-slate-300" }, void 0, false, {
        fileName: "app/routes/slider.tsx",
        lineNumber: 71,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/slider.tsx",
        lineNumber: 70,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/slider.tsx",
      lineNumber: 68,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/slider.tsx",
    lineNumber: 54,
    columnNumber: 10
  }, this);
}
_s(Header, "UCaI8lpZVGvPrsRoIFYRt2wv0+o=");
_c2 = Header;
function Layout({
  children
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex w-full flex-col", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Header, {}, void 0, false, {
      fileName: "app/routes/slider.tsx",
      lineNumber: 82,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Hero, {}, void 0, false, {
      fileName: "app/routes/slider.tsx",
      lineNumber: 84,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex h-24 w-full items-center justify-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { className: "absolute ", src: blur_cyan_default, alt: "", width: 530, height: 530 }, void 0, false, {
          fileName: "app/routes/slider.tsx",
          lineNumber: 87,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { className: "absolute", src: blur_indigo_default, alt: "", width: 567, height: 567 }, void 0, false, {
          fileName: "app/routes/slider.tsx",
          lineNumber: 88,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/slider.tsx",
        lineNumber: 86,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "max-w-2xl font-display text-5xl tracking-tight text-slate-900 dark:text-white ", children: "Our Capabilities" }, void 0, false, {
        fileName: "app/routes/slider.tsx",
        lineNumber: 91,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/slider.tsx",
      lineNumber: 85,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mx-auto h-1 w-1/3 bg-gradient-to-r from-indigo-200 via-sky-400 to-indigo-200 " }, void 0, false, {
      fileName: "app/routes/slider.tsx",
      lineNumber: 96,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative flex w-full flex-auto justify-center sm:px-2 lg:px-8 xl:px-12", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "hidden lg:relative lg:block lg:flex-none", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute inset-y-0 right-0 w-[50vw] bg-slate-50 dark:hidden" }, void 0, false, {
          fileName: "app/routes/slider.tsx",
          lineNumber: 99,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute bottom-0 right-0 top-16 hidden h-12 w-px bg-gradient-to-t from-slate-800 dark:block" }, void 0, false, {
          fileName: "app/routes/slider.tsx",
          lineNumber: 100,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute bottom-0 right-0 top-28 hidden w-px bg-slate-800 dark:block" }, void 0, false, {
          fileName: "app/routes/slider.tsx",
          lineNumber: 101,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "sticky top-[4.75rem] -ml-0.5 h-[calc(100vh-4.75rem)] w-96 overflow-y-auto overflow-x-hidden py-16 pl-0.5 pr-8 xl:w-72 xl:pr-16", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Navigation, {}, void 0, false, {
          fileName: "app/routes/slider.tsx",
          lineNumber: 103,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/routes/slider.tsx",
          lineNumber: 102,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/slider.tsx",
        lineNumber: 98,
        columnNumber: 9
      }, this),
      children
    ] }, void 0, true, {
      fileName: "app/routes/slider.tsx",
      lineNumber: 97,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/slider.tsx",
    lineNumber: 81,
    columnNumber: 10
  }, this);
}
_c3 = Layout;
var _c;
var _c2;
var _c3;
$RefreshReg$(_c, "GitHubIcon");
$RefreshReg$(_c2, "Header");
$RefreshReg$(_c3, "Layout");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Layout as default
};
//# sourceMappingURL=/build/routes/slider-PP3JJYKT.js.map
