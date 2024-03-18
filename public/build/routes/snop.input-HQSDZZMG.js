import {
  require_input
} from "/build/_shared/chunk-CSUUZOAU.js";
import {
  SnopForm
} from "/build/_shared/chunk-6FR73DNZ.js";
import "/build/_shared/chunk-4KGWMUJO.js";
import "/build/_shared/chunk-MTT4DDXE.js";
import "/build/_shared/chunk-FDWYIRIF.js";
import {
  require_scenario
} from "/build/_shared/chunk-T5F5GXJC.js";
import "/build/_shared/chunk-S4R52IIC.js";
import "/build/_shared/chunk-2AYV67AV.js";
import "/build/_shared/chunk-C2XBONP3.js";
import "/build/_shared/chunk-FBY72YCO.js";
import {
  require_node
} from "/build/_shared/chunk-G7CHZRZX.js";
import "/build/_shared/chunk-Y3Q3TNJF.js";
import "/build/_shared/chunk-Y4SZVV5C.js";
import "/build/_shared/chunk-ELWJTL4F.js";
import {
  useLoaderData,
  useNavigate
} from "/build/_shared/chunk-NON4LQMM.js";
import "/build/_shared/chunk-GIAAE3CH.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  createHotContext
} from "/build/_shared/chunk-K4XMOQHS.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  require_react
} from "/build/_shared/chunk-BOXFZXVX.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/snop.input.tsx
var import_react = __toESM(require_react());
var import_input = __toESM(require_input());
var import_scenario = __toESM(require_scenario());
var import_node = __toESM(require_node());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\snop.input.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\snop.input.tsx"
  );
  import.meta.hot.lastModified = "1709182697458.6855";
}
function SnopInput() {
  _s();
  const [date, setDate] = import_react.default.useState(/* @__PURE__ */ new Date());
  const {
    snopInput
  } = useLoaderData();
  const navigate = useNavigate();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SnopForm, { inputData: snopInput }, void 0, false, {
    fileName: "app/routes/snop.input.tsx",
    lineNumber: 64,
    columnNumber: 10
  }, this);
}
_s(SnopInput, "gFr9IggDDycnA3h/uSvZOfvuPeY=", false, function() {
  return [useLoaderData, useNavigate];
});
_c = SnopInput;
var _c;
$RefreshReg$(_c, "SnopInput");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  SnopInput as default
};
//# sourceMappingURL=/build/routes/snop.input-HQSDZZMG.js.map
