import {
  WrapperMultiLineChart
} from "/build/_shared/chunk-XBDTUPGL.js";
import {
  WrapperMultiStackColChart
} from "/build/_shared/chunk-QRAMQPBO.js";
import {
  WrapperMultiColumnChart
} from "/build/_shared/chunk-P6FI4LUL.js";
import {
  createHotContext
} from "/build/_shared/chunk-K4XMOQHS.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/kendo/rawData/analysis/skuAnalysis.js
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\kendo\\rawData\\analysis\\skuAnalysis.js"
  );
  import.meta.hot.lastModified = "1708503722835.15";
}
var serviceCategories_m = [
  "Oct 10",
  "Oct 25",
  "Nov 9",
  "Nov 24",
  "Dec 9",
  "Dec 24"
];
var serviceSeries_m = [
  {
    name: "",
    data: [10, 0, 15, 0, 0, 5, 25, 0, 5, 15, 50]
  },
  {
    name: "",
    data: [0, 0, 15, 0, 0, 5, 10, 0, 0, 15, 5]
  }
];
var service1Categories_m = [
  "Oct 10",
  "Oct 25",
  "Nov 9",
  "Nov 24",
  "Dec 9",
  "Dec 24"
];
var service1Series_m = [
  {
    name: "",
    data: [5, 10, 5, 0, 5, 15, 18]
  }
];
var pastCategories_m = ["Oct 1", "Nov 1", "Dec 1", "Jan 1", "Feb 1", "Mar 1"];
var pastSeries_m = [
  {
    name: "",
    data: [10, 0, 15, 0, 0, 5, 25, 0, 0]
  }
];
var past1Categories_m = [
  "Oct 1",
  "Nov 1",
  "Dec 1",
  "Jan 1",
  "Feb 1",
  "Mar 1"
];
var past1Series_m = [
  {
    name: "",
    data: [10, 6, 15, 6, 4, 5]
  },
  {
    name: "",
    data: [10, 6, 15, 6, 4, 5]
  }
];

// app/data/analysis/skuData.js
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\data\\analysis\\skuData.js"
  );
  import.meta.hot.lastModified = "1711113031666.1145";
}
var kpiService_m = [
  {
    Name: "Service SKU Trends (s1234)",
    sub: "",
    container: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      WrapperMultiLineChart,
      {
        category: serviceCategories_m,
        series: serviceSeries_m
      },
      void 0,
      false,
      {
        fileName: "app/data/analysis/skuData.js",
        lineNumber: 48,
        columnNumber: 7
      },
      this
    )
  },
  {
    Name: "",
    container: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      WrapperMultiColumnChart,
      {
        category: service1Categories_m,
        series: service1Series_m
      },
      void 0,
      false,
      {
        fileName: "app/data/analysis/skuData.js",
        lineNumber: 58,
        columnNumber: 7
      },
      this
    )
  }
];
var kpiInv_m = [
  {
    Name: "Past and Project Inventory (s1234)",
    sub: "",
    container: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      WrapperMultiLineChart,
      {
        category: pastCategories_m,
        series: pastSeries_m
      },
      void 0,
      false,
      {
        fileName: "app/data/analysis/skuData.js",
        lineNumber: 71,
        columnNumber: 7
      },
      this
    )
  },
  {
    Name: "",
    container: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      WrapperMultiStackColChart,
      {
        category: past1Categories_m,
        series: past1Series_m
      },
      void 0,
      false,
      {
        fileName: "app/data/analysis/skuData.js",
        lineNumber: 81,
        columnNumber: 7
      },
      this
    )
  }
];

export {
  kpiService_m,
  kpiInv_m
};
//# sourceMappingURL=/build/_shared/chunk-G4IBPF3J.js.map
