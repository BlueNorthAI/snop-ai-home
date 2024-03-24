import {
  SnopForm
} from "/build/_shared/chunk-VYG5DFR7.js";
import "/build/_shared/chunk-24RM3C4N.js";
import "/build/_shared/chunk-ZPK2AWEZ.js";
import "/build/_shared/chunk-HIZXLO3O.js";
import "/build/_shared/chunk-Q5PJGCRX.js";
import {
  require_scenario
} from "/build/_shared/chunk-T5F5GXJC.js";
import "/build/_shared/chunk-YOJGWH76.js";
import "/build/_shared/chunk-KTF7K347.js";
import "/build/_shared/chunk-LFFJ36YN.js";
import "/build/_shared/chunk-TRC5XD27.js";
import "/build/_shared/chunk-ELWJTL4F.js";
import {
  require_node
} from "/build/_shared/chunk-G7CHZRZX.js";
import "/build/_shared/chunk-Y3Q3TNJF.js";
import {
  useLoaderData
} from "/build/_shared/chunk-NON4LQMM.js";
import "/build/_shared/chunk-RRHQD3BR.js";
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

// app/routes/snop.scenario_.$scenId copy.tsx
var import_react = __toESM(require_react());
var import_node = __toESM(require_node());
var import_scenario = __toESM(require_scenario());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\snop.scenario_.$scenId copy.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\snop.scenario_.$scenId copy.tsx"
  );
  import.meta.hot.lastModified = "1709199796533.66";
}
function UpdateScenario() {
  _s();
  const [date, setDate] = import_react.default.useState(/* @__PURE__ */ new Date());
  const {
    scenarioData
  } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SnopForm, { inputData: scenarioData }, void 0, false, {
    fileName: "app/routes/snop.scenario_.$scenId copy.tsx",
    lineNumber: 52,
    columnNumber: 10
  }, this);
}
_s(UpdateScenario, "Cb48HX5qptjBWUXJq/a4JUQ58P0=", false, function() {
  return [useLoaderData];
});
_c = UpdateScenario;
var _c;
$RefreshReg$(_c, "UpdateScenario");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  UpdateScenario as default
};
//# sourceMappingURL=/build/routes/snop.scenario_.$scenId copy-234CM6BM.js.map
