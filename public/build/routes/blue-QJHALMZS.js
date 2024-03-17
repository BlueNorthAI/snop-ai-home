import {
  _t
} from "/build/_shared/chunk-D4F36K4M.js";
import {
  Bars3Icon_default,
  Logo,
  Logomark,
  XMarkIcon_default
} from "/build/_shared/chunk-AR7BF74J.js";
import {
  HeroBackground
} from "/build/_shared/chunk-JI2KNYM7.js";
import {
  Link
} from "/build/_shared/chunk-NON4LQMM.js";
import "/build/_shared/chunk-GIAAE3CH.js";
import {
  clsx_default
} from "/build/_shared/chunk-Y3Q3TNJF.js";
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

// app/routes/blue.jsx
var import_react3 = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\blue.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\blue.jsx"
  );
  import.meta.hot.lastModified = "1710408103081.7603";
}
function GitHubIcon(props) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { "aria-hidden": "true", viewBox: "0 0 16 16", ...props, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { d: "M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z" }, void 0, false, {
    fileName: "app/routes/blue.jsx",
    lineNumber: 31,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/blue.jsx",
    lineNumber: 30,
    columnNumber: 10
  }, this);
}
_c = GitHubIcon;
var navigation = [{
  name: "Application",
  to: "/demo/dashboard/optimizer/optimize"
}, {
  name: "Features",
  to: "#"
}, {
  name: "Marketplace",
  to: "#"
}, {
  name: "Company",
  to: "#"
}];
function Example() {
  _s();
  const [mobileMenuOpen, setMobileMenuOpen] = (0, import_react3.useState)(false);
  const [isScrolled, setIsScrolled] = (0, import_react3.useState)(false);
  (0, import_react3.useEffect)(() => {
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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", { className: clsx_default("fixed  w-full top-0 z-50 flex flex-none flex-wrap items-center justify-between bg-white px-4 py-2 shadow-md shadow-slate-900/5 transition duration-500 sm:px-6 lg:px-8 dark:shadow-none", isScrolled ? "dark:bg-slate-900/95 dark:backdrop-blur dark:[@supports(backdrop-filter:blur(0))]:bg-slate-900/75" : "dark:bg-transparent"), children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex lg:hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", className: "-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400", onClick: () => setMobileMenuOpen(true), children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "sr-only", children: "Open main menu" }, void 0, false, {
          fileName: "app/routes/blue.jsx",
          lineNumber: 68,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Bars3Icon_default, { className: "h-6 w-6", "aria-hidden": "true" }, void 0, false, {
          fileName: "app/routes/blue.jsx",
          lineNumber: 69,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/blue.jsx",
        lineNumber: 67,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/blue.jsx",
        lineNumber: 66,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative mt-6 z-10 mr-6 flex lg:hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(_t, { as: "div", open: mobileMenuOpen, onClose: setMobileMenuOpen, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(_t.Panel, { className: "fixed inset-0 z-50 overflow-y-auto bg-gray-900 px-6 py-6 lg:hidden", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "#", className: "-m-1.5 p-1.5", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center ", "aria-hidden": "true", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Logomark, {}, void 0, false, {
              fileName: "app/routes/blue.jsx",
              lineNumber: 78,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "ml-2 flex items-center  text-base font-bold tracking-wide text-white", children: "BlueNorth AI" }, void 0, false, {
              fileName: "app/routes/blue.jsx",
              lineNumber: 79,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/blue.jsx",
            lineNumber: 77,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "app/routes/blue.jsx",
            lineNumber: 76,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", className: "-m-2.5 rounded-md p-2.5 text-gray-400", onClick: () => setMobileMenuOpen(false), children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "sr-only", children: "Close menu" }, void 0, false, {
              fileName: "app/routes/blue.jsx",
              lineNumber: 85,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(XMarkIcon_default, { className: "h-6 w-6", "aria-hidden": "true" }, void 0, false, {
              fileName: "app/routes/blue.jsx",
              lineNumber: 86,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/blue.jsx",
            lineNumber: 84,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/blue.jsx",
          lineNumber: 75,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-4 flow-root", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "-my-6 divide-y divide-gray-500/25", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-2 py-6", children: navigation.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: item.to, className: "-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-400/10", children: item.name }, item.name, false, {
            fileName: "app/routes/blue.jsx",
            lineNumber: 92,
            columnNumber: 45
          }, this)) }, void 0, false, {
            fileName: "app/routes/blue.jsx",
            lineNumber: 91,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "py-6", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/join", className: "-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-6 text-white hover:bg-gray-400/10", children: "Sign up" }, void 0, false, {
              fileName: "app/routes/blue.jsx",
              lineNumber: 97,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/login", className: "-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-6 text-white hover:bg-gray-400/10", children: "Log in" }, void 0, false, {
              fileName: "app/routes/blue.jsx",
              lineNumber: 100,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/blue.jsx",
            lineNumber: 96,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/blue.jsx",
          lineNumber: 90,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/routes/blue.jsx",
          lineNumber: 89,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/blue.jsx",
        lineNumber: 74,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/blue.jsx",
        lineNumber: 73,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/blue.jsx",
        lineNumber: 72,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-3 " }, void 0, false, {
        fileName: "app/routes/blue.jsx",
        lineNumber: 110,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative flex flex-grow basis-0 items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/", "aria-label": "Home page", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Logo, { className: "h-9 w-auto fill-slate-700  dark:fill-sky-100" }, void 0, false, {
        fileName: "app/routes/blue.jsx",
        lineNumber: 113,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/blue.jsx",
        lineNumber: 112,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/blue.jsx",
        lineNumber: 111,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", { className: "ml-6 pl-6 flex items-center justify-center", "aria-label": "Global", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "hidden lg:flex lg:gap-x-6 lg:justify-center ml-6", children: navigation.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: item.to, className: " text-base lg:text-lg font-semibold leading-6 text-gray-600 hover:text-black", children: item.name }, item.name, false, {
        fileName: "app/routes/blue.jsx",
        lineNumber: 120,
        columnNumber: 39
      }, this)) }, void 0, false, {
        fileName: "app/routes/blue.jsx",
        lineNumber: 119,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/blue.jsx",
        lineNumber: 118,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/blue.jsx",
        lineNumber: 117,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative flex items-center justify-end  md:flex-grow ", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "hidden md:mx-2 sm:block md:block lg:block xl:block", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative mr-2 text-gray-500 ", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { className: "border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none", type: "search", name: "search", placeholder: "Search" }, void 0, false, {
            fileName: "app/routes/blue.jsx",
            lineNumber: 130,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", className: "absolute right-0 top-0 mt-3 mr-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { className: "text-gray-600 h-4 w-4 fill-current", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", version: "1.1", id: "Capa_1", x: "0px", y: "0px", viewBox: "0 0 56.966 56.966", style: {
            enableBackground: "new 0 0 56.966 56.966"
          }, xmlSpace: "preserve", width: "512px", height: "512px", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { d: "M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" }, void 0, false, {
            fileName: "app/routes/blue.jsx",
            lineNumber: 135,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "app/routes/blue.jsx",
            lineNumber: 132,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/blue.jsx",
            lineNumber: 131,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/blue.jsx",
          lineNumber: 129,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/routes/blue.jsx",
          lineNumber: 128,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "hidden mx-4 lg:flex lg:justify-end lg:text-base text-sm", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/join", className: "font-semibold leading-6 hover:text-black text-gray-500", children: [
            "Sign up ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { "aria-hidden": "true", children: "\u2192" }, void 0, false, {
              fileName: "app/routes/blue.jsx",
              lineNumber: 142,
              columnNumber: 23
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/blue.jsx",
            lineNumber: 141,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "ml-6 inline-flex rounded-md shadow-sm" }, void 0, false, {
            fileName: "app/routes/blue.jsx",
            lineNumber: 145,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/auth", className: "font-semibold leading-6 hover:text-black text-gray-500", children: [
            "Log in ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { "aria-hidden": "true", children: "\u2192" }, void 0, false, {
              fileName: "app/routes/blue.jsx",
              lineNumber: 147,
              columnNumber: 22
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/blue.jsx",
            lineNumber: 146,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/blue.jsx",
          lineNumber: 140,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "https://github.com", className: "group", "aria-label": "GitHub", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(GitHubIcon, { className: "h-6 w-6 fill-slate-400 group-hover:fill-slate-500 dark:group-hover:fill-slate-300" }, void 0, false, {
          fileName: "app/routes/blue.jsx",
          lineNumber: 151,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/routes/blue.jsx",
          lineNumber: 150,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/blue.jsx",
        lineNumber: 127,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/blue.jsx",
      lineNumber: 65,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative isolate h-full w-full overflow-hidden bg-slate-900", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "px-6 lg:px-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative mx-auto max-w-2xl py-32 sm:py-48 lg:py-56", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "hidden sm:mb-8 sm:flex sm:justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative rounded-full px-3 py-1 text-sm leading-6 text-gray-400 ring-1 ring-white/10 hover:ring-white/20", children: [
          "Announcing our next round of funding.",
          " ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "#", className: "font-semibold text-white", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "absolute inset-0", "aria-hidden": "true" }, void 0, false, {
              fileName: "app/routes/blue.jsx",
              lineNumber: 162,
              columnNumber: 19
            }, this),
            "Read more ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { "aria-hidden": "true", children: "\u2192" }, void 0, false, {
              fileName: "app/routes/blue.jsx",
              lineNumber: 163,
              columnNumber: 29
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/blue.jsx",
            lineNumber: 161,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/blue.jsx",
          lineNumber: 159,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/blue.jsx",
          lineNumber: 158,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative z-10 text-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "bg-gradient-to-r from-indigo-200 via-sky-400 to-indigo-200 bg-clip-text font-display text-6xl font-bold text-transparent lg:text-8xl", children: "BlueNorth AI" }, void 0, false, {
            fileName: "app/routes/blue.jsx",
            lineNumber: 168,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-6 text-base lg:text-lg  text-gray-300", children: "Enterprise AI suite to transform Supply Chain Planning and Execution" }, void 0, false, {
            fileName: "app/routes/blue.jsx",
            lineNumber: 171,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-8 flex justify-center gap-4 ", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { to: "/", type: "button", className: "rounded-full bg-sky-300 py-2 px-4 text-sm font-semibold text-slate-900 hover:bg-sky-200 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300/50 active:bg-sky-500", children: "Get started" }, void 0, false, {
              fileName: "app/routes/blue.jsx",
              lineNumber: 176,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", className: "rounded-full bg-slate-800 py-2 px-4 text-sm font-medium text-white hover:bg-slate-700 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/50 active:text-slate-400", children: "Request Demo" }, void 0, false, {
              fileName: "app/routes/blue.jsx",
              lineNumber: 179,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/blue.jsx",
            lineNumber: 175,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/blue.jsx",
          lineNumber: 167,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/blue.jsx",
        lineNumber: 157,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HeroBackground, { className: "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 lg:left-0 lg:translate-x-0 lg:translate-y-[-60%]" }, void 0, false, {
        fileName: "app/routes/blue.jsx",
        lineNumber: 187,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/blue.jsx",
        lineNumber: 186,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/blue.jsx",
      lineNumber: 156,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/blue.jsx",
      lineNumber: 155,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/blue.jsx",
    lineNumber: 64,
    columnNumber: 10
  }, this);
}
_s(Example, "/8SauWscXt79oOQuuHV5sqonLwY=");
_c2 = Example;
var _c;
var _c2;
$RefreshReg$(_c, "GitHubIcon");
$RefreshReg$(_c2, "Example");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Example as default
};
//# sourceMappingURL=/build/routes/blue-QJHALMZS.js.map
