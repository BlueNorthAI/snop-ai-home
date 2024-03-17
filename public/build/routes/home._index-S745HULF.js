import {
  Framework
} from "/build/_shared/chunk-PJVXSB7S.js";
import "/build/_shared/chunk-NON4LQMM.js";
import "/build/_shared/chunk-GIAAE3CH.js";
import "/build/_shared/chunk-MESSCHDG.js";
import "/build/_shared/chunk-Y3Q3TNJF.js";
import {
  createHotContext
} from "/build/_shared/chunk-K4XMOQHS.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import "/build/_shared/chunk-BOXFZXVX.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/home._index.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\home._index.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\home._index.tsx"
  );
  import.meta.hot.lastModified = "1710584892364.9094";
}
function HomeIndex() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Framework, {}, void 0, false, {
    fileName: "app/routes/home._index.tsx",
    lineNumber: 25,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/home._index.tsx",
    lineNumber: 24,
    columnNumber: 10
  }, this);
}
_c = HomeIndex;
var _c;
$RefreshReg$(_c, "HomeIndex");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  HomeIndex as default
};
//# sourceMappingURL=/build/routes/home._index-S745HULF.js.map
