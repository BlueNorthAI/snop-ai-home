import {
  blur_cyan_default,
  blur_indigo_default
} from "/build/_shared/chunk-S67NAB4E.js";
import {
  HeroBackground
} from "/build/_shared/chunk-JI2KNYM7.js";
import {
  Link,
  useLocation
} from "/build/_shared/chunk-NON4LQMM.js";
import {
  clsx_default
} from "/build/_shared/chunk-Y3Q3TNJF.js";
import {
  createHotContext
} from "/build/_shared/chunk-K4XMOQHS.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/components/Button.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\Button.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\Button.jsx"
  );
  import.meta.hot.lastModified = "1710582232230.8179";
}
var variantStyles = {
  primary: "rounded-full bg-sky-300 py-2 px-4 text-sm font-semibold text-slate-900 hover:bg-sky-200 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300/50 active:bg-sky-500",
  secondary: "rounded-full bg-slate-800 py-2 px-4 text-sm font-medium text-white hover:bg-slate-700 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/50 active:text-slate-400"
};
function Button({
  variant = "primary",
  className,
  ...props
}) {
  className = clsx_default(variantStyles[variant], className);
  return typeof props.href === "undefined" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className, ...props }, void 0, false, {
    fileName: "app/components/Button.jsx",
    lineNumber: 33,
    columnNumber: 46
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { className, ...props }, void 0, false, {
    fileName: "app/components/Button.jsx",
    lineNumber: 33,
    columnNumber: 92
  }, this);
}
_c = Button;
var _c;
$RefreshReg$(_c, "Button");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/Cards.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\Cards.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\Cards.tsx"
  );
  import.meta.hot.lastModified = "1710611194059.3271";
}
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
  to: "/demo/dashboard/demand",
  img: "/assets/diagnostics.png",
  description: "With shrinking product lifecycles, demand fluctuations and more granular customer segmentation, organizations like yours depend on intelligent decision support for their essential production."
}, {
  name: "Execution Engine",
  to: "/demo/dashboard/inventory",
  img: "/assets/kpicard.png",
  description: "Across industries, organizations like yours are pivoting to manage increasingly complex supply chains, while juggling delivery expectations and cost."
}];
function Cards() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "relative grid  place-items-center mx-4 mt-12", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("ul", { className: "flex w-full gap-4", children: actions.map((action) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { className: "group relative h-[500px] w-full overflow-hidden rounded-2xl bg-rose-300 flex-1 hover:grow-[1.25]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Link, { to: action.to, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("img", { className: "absolute inset-0 w-full h-full object-cover", src: action.img, alt: "" }, void 0, false, {
      fileName: "app/components/Cards.tsx",
      lineNumber: 48,
      columnNumber: 15
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/50 p-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "w-48", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h2", { className: "text-2xl font-medium text-white", children: action.name }, void 0, false, {
        fileName: "app/components/Cards.tsx",
        lineNumber: 52,
        columnNumber: 19
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "grid grid-rows-[0fr] transition-all  group-hover:grid-rows-[1fr]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "mt-2 overflow-hidden text-white/70 opacity-0 transition duration-300 group-hover:opacity-100", children: action.description }, void 0, false, {
        fileName: "app/components/Cards.tsx",
        lineNumber: 56,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/components/Cards.tsx",
        lineNumber: 55,
        columnNumber: 19
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Cards.tsx",
      lineNumber: 51,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/components/Cards.tsx",
      lineNumber: 50,
      columnNumber: 15
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Cards.tsx",
    lineNumber: 47,
    columnNumber: 13
  }, this) }, action.name, false, {
    fileName: "app/components/Cards.tsx",
    lineNumber: 46,
    columnNumber: 32
  }, this)) }, void 0, false, {
    fileName: "app/components/Cards.tsx",
    lineNumber: 45,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/Cards.tsx",
    lineNumber: 44,
    columnNumber: 10
  }, this);
}
_c2 = Cards;
var _c2;
$RefreshReg$(_c2, "Cards");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/Hero.jsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\Hero.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\Hero.jsx"
  );
  import.meta.hot.lastModified = "1710655845249.7812";
}
function Hero() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "overflow-hidden bg-slate-900 dark:-mb-32 dark:mt-[-4.75rem] dark:pb-32 dark:pt-[4.75rem]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "mb-16 py-16 sm:px-2 lg:relative lg:px-0 lg:py-28", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "mx-auto grid max-w-2xl items-center gap-x-8 gap-y-16 px-4 lg:max-w-8xl lg:px-8 xl:gap-x-16 xl:px-12", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "relative z-10 text-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { className: "absolute bottom-full right-full -mb-56 -mr-72 opacity-50", src: blur_cyan_default, alt: "", width: 530, height: 530 }, void 0, false, {
          fileName: "app/components/Hero.jsx",
          lineNumber: 31,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "relative mt-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { className: "inline bg-gradient-to-r from-indigo-200 via-sky-400 to-indigo-200 bg-clip-text font-display text-7xl font-bold tracking-tight text-transparent", children: "BlueNorth AI" }, void 0, false, {
            fileName: "app/components/Hero.jsx",
            lineNumber: 33,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { className: "mt-3 text-4xl tracking-tight text-white", children: "Enterprise AI suite to transform Supply Chain Planning and Execution" }, void 0, false, {
            fileName: "app/components/Hero.jsx",
            lineNumber: 36,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "mt-8 flex justify-center gap-4 ", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Button, { href: "/home", children: "Get started" }, void 0, false, {
              fileName: "app/components/Hero.jsx",
              lineNumber: 41,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Button, { href: "/", variant: "secondary", children: "Our Capabilities" }, void 0, false, {
              fileName: "app/components/Hero.jsx",
              lineNumber: 42,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/Hero.jsx",
            lineNumber: 40,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/Hero.jsx",
          lineNumber: 32,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/Hero.jsx",
        lineNumber: 30,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "relative lg:static xl:pl-10", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "absolute inset-x-[-50vw] -bottom-48 -top-32 [mask-image:linear-gradient(transparent,white,white)] lg:-bottom-32 lg:-top-32 lg:left-[calc(50%+14rem)] lg:right-0 lg:[mask-image:none] dark:[mask-image:linear-gradient(transparent,white,transparent)] lg:dark:[mask-image:linear-gradient(white,white,transparent)]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(HeroBackground, { className: "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 lg:left-0 lg:translate-x-0 lg:translate-y-[-60%]" }, void 0, false, {
          fileName: "app/components/Hero.jsx",
          lineNumber: 51,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/components/Hero.jsx",
          lineNumber: 50,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "relative", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { className: "absolute -right-64 -top-64", src: blur_cyan_default, alt: "", width: 530, height: 530 }, void 0, false, {
            fileName: "app/components/Hero.jsx",
            lineNumber: 54,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { className: "absolute -bottom-40 -right-44", src: blur_indigo_default, alt: "", width: 567, height: 567 }, void 0, false, {
            fileName: "app/components/Hero.jsx",
            lineNumber: 55,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/Hero.jsx",
          lineNumber: 53,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/Hero.jsx",
        lineNumber: 49,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Hero.jsx",
      lineNumber: 29,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Cards, {}, void 0, false, {
      fileName: "app/components/Hero.jsx",
      lineNumber: 59,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Hero.jsx",
    lineNumber: 28,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/Hero.jsx",
    lineNumber: 27,
    columnNumber: 10
  }, this);
}
_c3 = Hero;
var _c3;
$RefreshReg$(_c3, "Hero");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/lib/navigation.js
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\lib\\navigation.js"
  );
  import.meta.hot.lastModified = "1710596573217.3013";
}
var navigation = [
  {
    title: "Introduction",
    links: [{ title: "Supply Chain Tripod", href: "/home/tripod" }]
  },
  {
    title: "Probe - Diagnostic Engine",
    links: [
      {
        title: "Transportation",
        href: "/home/transport"
      },
      {
        title: "Warehousing",
        href: "/home/warehousing"
      },
      { title: "Inventory", href: "/home/inventory" }
    ]
  },
  {
    title: "Plan - Optimization Engine",
    links: [
      {
        title: "Production Planning & Scheduling",
        href: "/home/production"
      },
      {
        title: "Sales & Operations Planning",
        href: "/home/sales"
      },
      { title: "Distribution Planning", href: "/home/distribution" },
      { title: "Inventory Optimization", href: "/home/invopt" }
    ]
  },
  {
    title: "Perform - Execution Engine",
    links: [
      {
        title: "Generative AI based Control Tower",
        href: "/home/generative"
      },
      { title: "Cascaded KPI Scorecard", href: "/home/kpi" }
    ]
  }
];

// app/components/Navigation.jsx
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\Navigation.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\Navigation.jsx"
  );
  import.meta.hot.lastModified = "1710585545312.7134";
}
function Navigation() {
  _s();
  let pathname = useLocation();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("nav", { className: clsx_default("text-base lg:text-base"), children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("ul", { className: "space-y-9", children: navigation.map((section) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h2", { className: "font-display font-medium text-slate-900 dark:text-white", children: section.title }, void 0, false, {
      fileName: "app/components/Navigation.jsx",
      lineNumber: 31,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("ul", { className: "mt-2 space-y-2 border-l-2 border-slate-100 lg:mt-4 lg:space-y-4 lg:border-slate-200 dark:border-slate-800", children: section.links.map((link) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { className: "relative", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Link, { to: link.href, className: clsx_default("block w-full pl-3.5 before:pointer-events-none before:absolute before:-left-1 before:top-1/2 before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full", link.href === pathname ? "font-semibold text-sky-500 before:bg-sky-500" : "text-slate-500 before:hidden before:bg-slate-300 hover:text-slate-600 hover:before:block dark:text-slate-400 dark:before:bg-slate-700 dark:hover:text-slate-300"), children: link.title }, void 0, false, {
      fileName: "app/components/Navigation.jsx",
      lineNumber: 36,
      columnNumber: 19
    }, this) }, link.href, false, {
      fileName: "app/components/Navigation.jsx",
      lineNumber: 35,
      columnNumber: 42
    }, this)) }, void 0, false, {
      fileName: "app/components/Navigation.jsx",
      lineNumber: 34,
      columnNumber: 13
    }, this)
  ] }, section.title, true, {
    fileName: "app/components/Navigation.jsx",
    lineNumber: 30,
    columnNumber: 36
  }, this)) }, void 0, false, {
    fileName: "app/components/Navigation.jsx",
    lineNumber: 29,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/Navigation.jsx",
    lineNumber: 28,
    columnNumber: 10
  }, this);
}
_s(Navigation, "NJZLm5hhiD972C3D3KWnelx4ONw=", false, function() {
  return [useLocation];
});
_c4 = Navigation;
var _c4;
$RefreshReg$(_c4, "Navigation");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  Hero,
  Navigation
};
//# sourceMappingURL=/build/_shared/chunk-KHD6IAOM.js.map
