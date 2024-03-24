import {
  logo1_default
} from "/build/_shared/chunk-RK6Z65JK.js";
import {
  BarChartIcon,
  CubeIcon,
  EnvelopeOpenIcon,
  GearIcon,
  MixIcon,
  PieChartIcon
} from "/build/_shared/chunk-AIC7NVQ5.js";
import {
  Link,
  NavLink,
  Outlet
} from "/build/_shared/chunk-NON4LQMM.js";
import {
  Squares2X2Icon_default
} from "/build/_shared/chunk-RRHQD3BR.js";
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

// app/routes/snop.tsx
var import_react2 = __toESM(require_react());

// app/tailwind.css
var tailwind_default = "/build/_assets/tailwind-VICJ2GDF.css";

// app/routes/snop.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\snop.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\snop.tsx"
  );
}
var links = () => [{
  rel: "stylesheet",
  href: tailwind_default
}, {
  rel: "icon",
  type: "image/svg+xml",
  href: logo1_default
}];
var menus = [{
  id: 1,
  name: "Input Data",
  to: "/snop/input",
  icon: CubeIcon,
  current: false
}, {
  id: 2,
  name: "Scenario",
  to: "/snop/scenario",
  icon: GearIcon,
  current: false
}, {
  id: 3,
  name: "Optimizer",
  to: "/snop/optimize",
  icon: MixIcon,
  current: true
}, {
  id: 4,
  name: "Incidents",
  to: "/snop/incidents",
  icon: EnvelopeOpenIcon,
  current: false
}, {
  id: 5,
  name: "Truck",
  to: "/snop/truck",
  icon: BarChartIcon,
  current: false
}, {
  id: 6,
  name: "Report",
  to: "/snop/dashboard/overview",
  icon: PieChartIcon,
  current: false
}, {
  id: 7,
  name: "Email",
  to: "/snop/email",
  icon: EnvelopeOpenIcon,
  current: false
}];
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
function Sidebar() {
  _s();
  const [open, setOpen] = (0, import_react2.useState)(true);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex h-screen", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `bg-blue-900  ${open ? "w-20" : "w-16"} flex flex-col text-gray-100 duration-500 `, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex-1", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-center bg-white py-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { className: "cursor-poniter mx-auto h-14 w-14 justify-center ", src: logo1_default, alt: "logo", onClick: () => setOpen(!open) }, void 0, false, {
          fileName: "app/routes/snop.tsx",
          lineNumber: 89,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/routes/snop.tsx",
          lineNumber: 88,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", { "aria-label": "Sidebar", className: "flex items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "static mt-4 w-full  space-y-1 px-2", children: menus.map((item, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, { to: item.to, className: ({
          isActive
        }) => classNames(isActive ? "bg-sky-500 text-white" : "text-white hover:bg-blue-800 hover:text-blue-200", "group flex w-full flex-col items-center rounded-md p-3 text-sm font-medium"), children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(item.icon, { className: "h-6 w-6", "aria-hidden": "true" }, void 0, false, {
            fileName: "app/routes/snop.tsx",
            lineNumber: 100,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { style: {
            transitionDelay: `${index * 100}ms`
          }, className: `whitespace-pre duration-500 ${!open && "translate-x-28 overflow-hidden opacity-0 "}`, children: item?.name }, void 0, false, {
            fileName: "app/routes/snop.tsx",
            lineNumber: 101,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: `${open && "hidden"} absolute left-48 z-10 w-0 overflow-hidden whitespace-pre rounded-md bg-blue-800 px-0 py-0 font-semibold text-blue-100 drop-shadow-lg group-hover:left-14 group-hover:w-fit group-hover:px-2 group-hover:py-1 group-hover:duration-300  `, children: item?.name }, void 0, false, {
            fileName: "app/routes/snop.tsx",
            lineNumber: 107,
            columnNumber: 19
          }, this)
        ] }, item.id, true, {
          fileName: "app/routes/snop.tsx",
          lineNumber: 95,
          columnNumber: 43
        }, this)) }, void 0, false, {
          fileName: "app/routes/snop.tsx",
          lineNumber: 94,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/routes/snop.tsx",
          lineNumber: 93,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/snop.tsx",
        lineNumber: 87,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/snop/appbar", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: classNames("text-blue-100 hover:bg-blue-800 hover:text-white", "group flex w-full flex-col items-center rounded-md p-3 text-xs font-medium"), children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Squares2X2Icon_default, { className: "h-6 w-6", "aria-hidden": "true" }, void 0, false, {
          fileName: "app/routes/snop.tsx",
          lineNumber: 120,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/routes/snop.tsx",
          lineNumber: 119,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: `whitespace-pre duration-500 ${!open && "translate-x-28 overflow-hidden opacity-0"}`, children: "Appbar" }, void 0, false, {
          fileName: "app/routes/snop.tsx",
          lineNumber: 122,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: `${open && "hidden"} absolute left-48 z-10 w-0 overflow-hidden whitespace-pre rounded-md bg-blue-800 px-0 py-0 font-semibold text-blue-100 drop-shadow-lg group-hover:left-14 group-hover:w-fit group-hover:px-2 group-hover:py-1 group-hover:duration-300  `, children: "User Profile" }, void 0, false, {
          fileName: "app/routes/snop.tsx",
          lineNumber: 126,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/snop.tsx",
        lineNumber: 117,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/snop.tsx",
        lineNumber: 116,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/snop.tsx",
        lineNumber: 115,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/snop.tsx",
      lineNumber: 85,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-1 flex-col overflow-y-auto bg-gray-100", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Outlet, {}, void 0, false, {
      fileName: "app/routes/snop.tsx",
      lineNumber: 137,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/snop.tsx",
      lineNumber: 136,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/snop.tsx",
    lineNumber: 84,
    columnNumber: 10
  }, this);
}
_s(Sidebar, "dVkDIfRb5RN4FjtonjBYYwpg89o=");
_c = Sidebar;
var _c;
$RefreshReg$(_c, "Sidebar");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Sidebar as default,
  links
};
//# sourceMappingURL=/build/routes/snop-M4D3LNPK.js.map
