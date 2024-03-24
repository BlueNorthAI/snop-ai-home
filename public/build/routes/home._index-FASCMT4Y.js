import {
  Framework
} from "/build/_shared/chunk-H4GH54LY.js";
import "/build/_shared/chunk-6PGZ4XCT.js";
import "/build/_shared/chunk-Y3Q3TNJF.js";
import "/build/_shared/chunk-NON4LQMM.js";
import "/build/_shared/chunk-GIAAE3CH.js";
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

// app/styles/layout.css?url
var layout_default = "/build/_assets/layout-DMLGCO3B.css?url";

// app/styles/tailwind.css?url
var tailwind_default = "/build/_assets/tailwind-PNKRGFT2.css?url";

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
}
var links = () => [{
  rel: "stylesheet",
  href: layout_default
}, {
  rel: "stylesheet",
  href: tailwind_default
}];
function HomeIndex() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Framework, {}, void 0, false, {
    fileName: "app/routes/home._index.tsx",
    lineNumber: 33,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/home._index.tsx",
    lineNumber: 32,
    columnNumber: 10
  }, this);
}
_c = HomeIndex;
var _c;
$RefreshReg$(_c, "HomeIndex");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  HomeIndex as default,
  links
};
//# sourceMappingURL=/build/routes/home._index-FASCMT4Y.js.map
