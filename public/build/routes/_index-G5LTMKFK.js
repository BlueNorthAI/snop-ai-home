import {
  Layout,
  layout_default
} from "/build/_shared/chunk-PYI6CFE6.js";
import {
  tailwind_default
} from "/build/_shared/chunk-4W37GSIF.js";
import "/build/_shared/chunk-4BYQ5DBH.js";
import "/build/_shared/chunk-JGNUSCMO.js";
import "/build/_shared/chunk-74355OUN.js";
import "/build/_shared/chunk-G6F2U5QD.js";
import "/build/_shared/chunk-Z5QCNIYB.js";
import "/build/_shared/chunk-S67NAB4E.js";
import "/build/_shared/chunk-H76KZIRE.js";
import "/build/_shared/chunk-6ZN2N7Q2.js";
import "/build/_shared/chunk-IBOINGU4.js";
import "/build/_shared/chunk-EPFXGX35.js";
import "/build/_shared/chunk-NMZL6IDN.js";
import "/build/_shared/chunk-OJGXK62L.js";
import "/build/_shared/chunk-C2HJSZWP.js";
import "/build/_shared/chunk-S4R52IIC.js";
import "/build/_shared/chunk-2AYV67AV.js";
import "/build/_shared/chunk-FBY72YCO.js";
import "/build/_shared/chunk-Y3Q3TNJF.js";
import "/build/_shared/chunk-CWIOTFXK.js";
import "/build/_shared/chunk-2HNBOA5V.js";
import "/build/_shared/chunk-ELWJTL4F.js";
import "/build/_shared/chunk-NON4LQMM.js";
import "/build/_shared/chunk-GIAAE3CH.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  createHotContext
} from "/build/_shared/chunk-K4XMOQHS.js";
import "/build/_shared/chunk-UWV35TSL.js";
import "/build/_shared/chunk-BOXFZXVX.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/_index.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\_index.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\_index.tsx"
  );
}
var links = () => [{
  rel: "stylesheet",
  href: tailwind_default
}, {
  rel: "stylesheet",
  href: layout_default
}];
function Index() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-full bg-white dark:bg-slate-900", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Layout, {}, void 0, false, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 32,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 31,
    columnNumber: 10
  }, this);
}
_c = Index;
var _c;
$RefreshReg$(_c, "Index");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Index as default,
  links
};
//# sourceMappingURL=/build/routes/_index-G5LTMKFK.js.map
