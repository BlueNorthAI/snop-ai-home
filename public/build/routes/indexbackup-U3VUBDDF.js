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
import {
  HeroBackground
} from "/build/_shared/chunk-JI2KNYM7.js";
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

// app/routes/indexbackup.tsx
var import_react2 = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\indexbackup.tsx"' + id);
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
    "app\\routes\\indexbackup.tsx"
  );
  import.meta.hot.lastModified = "1711092848951.111";
}
function GitHubIcon(props) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { "aria-hidden": "true", viewBox: "0 0 16 16", ...props, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { d: "M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z" }, void 0, false, {
    fileName: "app/routes/indexbackup.tsx",
    lineNumber: 34,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/indexbackup.tsx",
    lineNumber: 33,
    columnNumber: 10
  }, this);
}
_c = GitHubIcon;
var actions = [{
  name: "Generative AI Based Control Tower",
  to: "/ai",
  img: "/assets/generateAi.png",
  description: " Across industries, organizations like yours are pivoting to manage increasingly complex supply chains, while juggling delivery expectations and cost."
}, {
  name: "Diagnostic Engine",
  to: "http://localhost:50288/snop/truck",
  img: "/assets/salesopplanning.png",
  description: "Across industries, organizations like yours are pivoting to manage increasingly complex supply chains, while juggling delivery expectations and cost."
}, {
  name: "Optimization Engine",
  to: "/snop/dashboard/demand",
  img: "/assets/diagnostics.png",
  description: "With shrinking product lifecycles, demand fluctuations and more granular customer segmentation, organizations like yours depend on intelligent decision support for their essential production."
}, {
  name: "Execution Engine",
  to: "/snop/dashboard/inventory",
  img: "/assets/kpicard.png",
  description: "Across industries, organizations like yours are pivoting to manage increasingly complex supply chains, while juggling delivery expectations and cost."
}];
function Header() {
  _s();
  let [isScrolled, setIsScrolled] = (0, import_react2.useState)(false);
  (0, import_react2.useEffect)(() => {
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
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mr-6 flex lg:hidden" }, void 0, false, {
      fileName: "app/routes/indexbackup.tsx",
      lineNumber: 89,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative flex flex-grow basis-0 items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/", "aria-label": "Home page", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Logo, { className: " h-9 w-auto fill-slate-700  dark:fill-sky-100" }, void 0, false, {
      fileName: "app/routes/indexbackup.tsx",
      lineNumber: 92,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/indexbackup.tsx",
      lineNumber: 91,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/indexbackup.tsx",
      lineNumber: 90,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative flex basis-0 justify-end gap-6 sm:gap-8 md:flex-grow", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ThemeSelector, { className: "relative z-10" }, void 0, false, {
        fileName: "app/routes/indexbackup.tsx",
        lineNumber: 99,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "https://github.com", className: "group", "aria-label": "GitHub", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(GitHubIcon, { className: "h-6 w-6 fill-slate-400 group-hover:fill-slate-500 dark:group-hover:fill-slate-300" }, void 0, false, {
        fileName: "app/routes/indexbackup.tsx",
        lineNumber: 101,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/indexbackup.tsx",
        lineNumber: 100,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/indexbackup.tsx",
      lineNumber: 98,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/indexbackup.tsx",
    lineNumber: 88,
    columnNumber: 10
  }, this);
}
_s(Header, "UCaI8lpZVGvPrsRoIFYRt2wv0+o=");
_c2 = Header;
function Example() {
  _s2();
  const [mobileMenuOpen, setMobileMenuOpen] = (0, import_react2.useState)(false);
  const [isScrolled, setIsScrolled] = (0, import_react2.useState)(false);
  (0, import_react2.useEffect)(() => {
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
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex w-full flex-col", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Header, {}, void 0, false, {
      fileName: "app/routes/indexbackup.tsx",
      lineNumber: 126,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/indexbackup.tsx",
      lineNumber: 125,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-full overflow-y-auto overflow-x-hidden bg-slate-900 dark:-mb-32 dark:mt-[-4.75rem] dark:pb-32 dark:pt-[4.75rem]", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "my-16 py-16 sm:px-2 lg:relative lg:px-0 lg:py-28 mx-auto flex items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mx-auto grid max-w-2xl items-center gap-x-8 gap-y-16 px-4 lg:max-w-4xl lg:px-8 xl:gap-x-16 xl:px-12", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative z-10 text-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { className: "absolute bottom-full right-full -mb-56 -mr-72", src: blur_cyan_default, alt: "", width: 530, height: 530 }, void 0, false, {
            fileName: "app/routes/indexbackup.tsx",
            lineNumber: 133,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative mt-4", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "inline bg-gradient-to-r from-indigo-200 via-sky-400 to-indigo-200 bg-clip-text font-display text-7xl font-bold tracking-tight text-transparent", children: "BlueNorth AI" }, void 0, false, {
              fileName: "app/routes/indexbackup.tsx",
              lineNumber: 135,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-3 text-4xl tracking-tight text-white", children: "Enterprise AI suite to transform Supply Chain Planning and Execution" }, void 0, false, {
              fileName: "app/routes/indexbackup.tsx",
              lineNumber: 138,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-8 flex justify-center gap-4 ", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "rounded-full bg-sky-300 py-2 px-4 text-sm font-semibold text-slate-900 hover:bg-sky-200 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300/50 active:bg-sky-500", to: "/", children: "Get started" }, void 0, false, {
                fileName: "app/routes/indexbackup.tsx",
                lineNumber: 143,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "rounded-full bg-slate-700 py-2 px-4 text-sm font-medium text-white hover:bg-slate-700 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/50 active:text-slate-400", children: "Request Demo" }, void 0, false, {
                fileName: "app/routes/indexbackup.tsx",
                lineNumber: 146,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/indexbackup.tsx",
              lineNumber: 142,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/indexbackup.tsx",
            lineNumber: 134,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/indexbackup.tsx",
          lineNumber: 132,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative lg:static xl:pl-10", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute inset-x-[-50vw] -bottom-48 -top-32 [mask-image:linear-gradient(transparent,white,white)] lg:-bottom-32 lg:-top-32 lg:left-[calc(50%+14rem)] lg:right-0 lg:[mask-image:none] dark:[mask-image:linear-gradient(transparent,white,transparent)] lg:dark:[mask-image:linear-gradient(white,white,transparent)]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HeroBackground, { className: "absolute left-1/2 top-3/4 -translate-x-1/2 -translate-y-1/2 lg:left-0 lg:translate-x-0 lg:translate-y-[-60%]" }, void 0, false, {
            fileName: "app/routes/indexbackup.tsx",
            lineNumber: 154,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/indexbackup.tsx",
            lineNumber: 153,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { className: "absolute bottom-full  -mb-56 -mr-72 -right-56", src: blur_cyan_default, alt: "", width: 530, height: 530 }, void 0, false, {
              fileName: "app/routes/indexbackup.tsx",
              lineNumber: 157,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { className: "absolute -bottom-40 -right-44", src: blur_indigo_default, alt: "", width: 567, height: 567 }, void 0, false, {
              fileName: "app/routes/indexbackup.tsx",
              lineNumber: 158,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/indexbackup.tsx",
            lineNumber: 156,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/indexbackup.tsx",
          lineNumber: 152,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/indexbackup.tsx",
        lineNumber: 131,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/indexbackup.tsx",
        lineNumber: 130,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative grid  place-items-center mx-8 ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { className: "flex w-full gap-4", children: actions.map((action) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { className: "group relative h-[500px] w-full overflow-hidden rounded-2xl bg-rose-300 flex-1 hover:grow-[1.25]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: action.to, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { className: "absolute inset-0 w-full h-full object-cover", src: action.img, alt: "" }, void 0, false, {
          fileName: "app/routes/indexbackup.tsx",
          lineNumber: 167,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 from-30% p-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-48", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-2xl font-medium text-white", children: action.name }, void 0, false, {
            fileName: "app/routes/indexbackup.tsx",
            lineNumber: 171,
            columnNumber: 23
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-rows-[0fr] transition-all  group-hover:grid-rows-[1fr]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-2 overflow-hidden text-white/70 opacity-0 transition duration-300 group-hover:opacity-100", children: action.description }, void 0, false, {
            fileName: "app/routes/indexbackup.tsx",
            lineNumber: 175,
            columnNumber: 25
          }, this) }, void 0, false, {
            fileName: "app/routes/indexbackup.tsx",
            lineNumber: 174,
            columnNumber: 23
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/indexbackup.tsx",
          lineNumber: 170,
          columnNumber: 21
        }, this) }, void 0, false, {
          fileName: "app/routes/indexbackup.tsx",
          lineNumber: 169,
          columnNumber: 19
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/indexbackup.tsx",
        lineNumber: 166,
        columnNumber: 17
      }, this) }, action.name, false, {
        fileName: "app/routes/indexbackup.tsx",
        lineNumber: 165,
        columnNumber: 36
      }, this)) }, void 0, false, {
        fileName: "app/routes/indexbackup.tsx",
        lineNumber: 164,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/indexbackup.tsx",
        lineNumber: 163,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex h-24 w-full items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "max-w-2xl font-display text-5xl tracking-tight text-white ", children: "Our Capabilities" }, void 0, false, {
        fileName: "app/routes/indexbackup.tsx",
        lineNumber: 187,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/indexbackup.tsx",
        lineNumber: 186,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mx-auto h-1 w-1/3 bg-gradient-to-r from-indigo-200 via-sky-400 to-indigo-200 " }, void 0, false, {
        fileName: "app/routes/indexbackup.tsx",
        lineNumber: 191,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mx-auto h-1 w-1/3 bg-gradient-to-r from-indigo-200 via-sky-400 to-indigo-200 " }, void 0, false, {
        fileName: "app/routes/indexbackup.tsx",
        lineNumber: 193,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Capabilities, {}, void 0, false, {
        fileName: "app/routes/indexbackup.tsx",
        lineNumber: 194,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/indexbackup.tsx",
      lineNumber: 129,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/indexbackup.tsx",
    lineNumber: 124,
    columnNumber: 10
  }, this);
}
_s2(Example, "/8SauWscXt79oOQuuHV5sqonLwY=");
_c3 = Example;
var _c;
var _c2;
var _c3;
$RefreshReg$(_c, "GitHubIcon");
$RefreshReg$(_c2, "Header");
$RefreshReg$(_c3, "Example");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Example as default
};
//# sourceMappingURL=/build/routes/indexbackup-U3VUBDDF.js.map
