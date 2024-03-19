import {
  WrapperMultiStackColChart
} from "/build/_shared/chunk-TTN7GJHC.js";
import {
  WrapperMultiLineChart
} from "/build/_shared/chunk-P5OGMUJN.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  createHotContext
} from "/build/_shared/chunk-K4XMOQHS.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/kendo/rawData/analysis/serviceAnalysis.js
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\kendo\\rawData\\analysis\\serviceAnalysis.js"
  );
  import.meta.hot.lastModified = "1708503722835.15";
}
var discountproductCategories_m = ["40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52"];
var discountproductSeries_m = [
  {
    name: "",
    data: [0.1, 0.2, 0.3, 0.2, 0.2, 0.3, 0.3, 0.2, 0.3, 0.2, 0.3, 0.1, 0.2]
  },
  {
    name: "",
    data: [0.2, 0.2, 0.3, 0.3, 0.4, 0.5, 0.5, 0.4, 0.2, 0.3, 0.2, 0.4, 0.4]
  },
  {
    name: "",
    data: [0.3, 0.3, 0.4, 0.3, 0.3, 0.4, 0.2, 0.3, 0.2, 0.2, 0.2, 0.1, 0.1]
  },
  {
    name: "",
    data: [0.4, 0.6, 0.6, 0.6, 0.6, 0.8, 0.8, 0.8, 1, 1, 1]
  },
  {
    name: "",
    data: [0, 0, 0, 0.6, 0.2, 0.2]
  }
];
var invCategories_m = [
  "40",
  "41",
  "42",
  "43",
  "44",
  "45",
  "46",
  "47",
  "48",
  "49",
  "50",
  "51",
  "52"
];
var invSeries_m = [
  {
    name: "",
    data: [35, 40, 40, 39, 50, 45, 45, 50, 52, 50, 52, 52, 50]
  },
  {
    name: "",
    data: [60, 60, 58, 60, 78, 60, 60, 80, 70, 70, 75, 80, 80]
  },
  {
    name: "",
    data: [64, 64, 62, 70, 80, 68, 68, 82, 72, 75, 81, 89, 90]
  }
];
var cancellationCategories_m = ["Oct 3", "Oct 13", "Oct 23", "Nov 2", "Nov 12", "Dec 2", "Dec 12", "Dec 22", "Jan 1"];
var cancellationSeries_m = [
  {
    name: "",
    data: [92, 90, 85, 85, 80, 86, 82, 80, 80, 76]
  },
  {
    name: "",
    data: [93, 90, 90, 90, 92, 85, 82, 80, 78]
  }
];

// app/data/analysis/serviceData.js
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\data\\analysis\\serviceData.js"
  );
  import.meta.hot.lastModified = "1710827168965.9258";
}
var kpiChat = [
  {
    Name: "End Customer backorder Performance",
    container: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      WrapperMultiStackColChart,
      {
        category: discountproductCategories_m,
        series: discountproductSeries_m
      },
      void 0,
      false,
      {
        fileName: "app/data/analysis/serviceData.js",
        lineNumber: 38,
        columnNumber: 7
      },
      this
    )
  },
  {
    Name: "OTIF Performance",
    container: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      WrapperMultiLineChart,
      {
        category: cancellationCategories_m,
        series: cancellationSeries_m
      },
      void 0,
      false,
      {
        fileName: "app/data/analysis/serviceData.js",
        lineNumber: 48,
        columnNumber: 7
      },
      this
    )
  }
];
var kpiService_m = [
  {
    Name: "End Customer backorder Performance",
    container: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      WrapperMultiStackColChart,
      {
        category: discountproductCategories_m,
        series: discountproductSeries_m
      },
      void 0,
      false,
      {
        fileName: "app/data/analysis/serviceData.js",
        lineNumber: 60,
        columnNumber: 7
      },
      this
    )
  },
  {
    Name: "OTIF Performance",
    container: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      WrapperMultiLineChart,
      {
        category: cancellationCategories_m,
        series: cancellationSeries_m
      },
      void 0,
      false,
      {
        fileName: "app/data/analysis/serviceData.js",
        lineNumber: 70,
        columnNumber: 7
      },
      this
    )
  }
];
var kpiInv_m = [
  {
    Name: "Inventory Performance",
    container: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      WrapperMultiStackColChart,
      {
        category: invCategories_m,
        series: invSeries_m
      },
      void 0,
      false,
      {
        fileName: "app/data/analysis/serviceData.js",
        lineNumber: 83,
        columnNumber: 7
      },
      this
    )
  }
];

export {
  kpiChat,
  kpiService_m,
  kpiInv_m
};
//# sourceMappingURL=/build/_shared/chunk-657MOTET.js.map
