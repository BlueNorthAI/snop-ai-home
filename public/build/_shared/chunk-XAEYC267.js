import {
  WrapperMultiLineChart
} from "/build/_shared/chunk-XBDTUPGL.js";
import {
  WrapperMultiBarChart
} from "/build/_shared/chunk-T5HJ6KPY.js";
import {
  WrapperPieChart
} from "/build/_shared/chunk-2VSZFGL3.js";
import {
  WrapperMultiAreaChart
} from "/build/_shared/chunk-JEBE5WMW.js";
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

// app/kendo/rawData/dashboard/demandDashboard.js
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\kendo\\rawData\\dashboard\\demandDashboard.js"
  );
  import.meta.hot.lastModified = "1708503722840.1506";
}
var shipmentsData_m = [
  {
    category: "Direct",
    value: 41.73
  },
  {
    category: "Online",
    value: 18.7
  },
  {
    category: "Partner",
    value: 39.57
  }
];
var cancelCategories_m = ["APAC", "EMEA", "LATAM", "NA"];
var cancelSeries_m = [
  {
    name: "Invoiced Amount",
    data: [100, 300, 200, 343]
  },
  {
    name: "Order Amount",
    data: [350, 500, 300, 650]
  }
];
var mapeCategories_m = ["APAC", "EMEA", "LATAM", "NA"];
var mapeSeries_m = [
  {
    name: "Invoiced Amount",
    data: [100, 300, 200, 343]
  },
  {
    name: "Order Amount",
    data: [350, 500, 300, 650]
  }
];
var locationCategories_m = ["ARG", "ARB", "BEM", "BRZ", "COL", "FRN", "GER", "HLS", "IND", "ITA", "MEX", "SFO", "SIG", "SPA", "SRC"];
var locationSeries_m = [
  {
    name: "",
    data: [70, 55, 30, 25, 10, 40, 30, 27, 37, 50, 37, 80, 37, 10, 10]
  },
  ,
];
var lateCategories_m = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
var lateSeries_m = [
  {
    name: "",
    data: [100, 123, 234, 343, 123, 234]
  }
];
var ontimeCategories_m = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
var ontimeSeries_m = [
  {
    name: "Japan",
    data: [60, 62, 64, 80, 70, 90]
  }
];
var perfectCategories_m = ["Jan", "Feb", "Mar", "Apr", "May"];
var perfectFirstSeries_m = [{
  name: "",
  data: [78, 55, 62, 74, 70]
}];
var invoiceCategories_m = ["Jan", "Feb", "Mar", "Apr", "May"];
var invoiceSeries_m = [
  {
    name: "Austin",
    data: [123, 276, 310, 212, 240]
  },
  {
    name: "Nashvile",
    data: [13, 26, 30, 21, 40]
  },
  {
    name: "Seattle",
    data: [23, 76, 10, 21, 20]
  }
];

// app/data/dashboard/demandData.js
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\data\\dashboard\\demandData.js"
  );
  import.meta.hot.lastModified = "1711092755488.8745";
}
var kpiChat = [
  {
    Name: "Shipments by channel",
    Value: "$357M",
    Trend: "up",
    TargetAch: 75,
    container: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WrapperPieChart, { series: shipmentsData_m }, void 0, false, {
      fileName: "app/data/dashboard/demandData.js",
      lineNumber: 55,
      columnNumber: 16
    }, this),
    status: "Above Target",
    Analyze: "/snop/dashboard/analysis/demandAnalysis"
  },
  {
    Name: "Cancellations",
    Value: "$15M",
    Trend: "up",
    TargetAch: 90,
    container: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      WrapperMultiBarChart,
      {
        category: cancelCategories_m,
        series: cancelSeries_m
      },
      void 0,
      false,
      {
        fileName: "app/data/dashboard/demandData.js",
        lineNumber: 65,
        columnNumber: 7
      },
      this
    ),
    status: "Below Target",
    Analyze: "/snop/dashboard/analysis/demandAnalysis"
  }
];
var kpiService_m = [
  {
    Name: "Shipments by channel",
    Value: "$357M",
    Trend: "up",
    TargetAch: 75,
    container: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WrapperPieChart, { series: shipmentsData_m }, void 0, false, {
      fileName: "app/data/dashboard/demandData.js",
      lineNumber: 81,
      columnNumber: 16
    }, this),
    status: "Above Target",
    Analyze: "/snop/dashboard/analysis/demandAnalysis"
  },
  {
    Name: "Cancellations",
    Value: "$15M",
    Trend: "up",
    TargetAch: 90,
    container: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      WrapperMultiBarChart,
      {
        category: cancelCategories_m,
        series: cancelSeries_m
      },
      void 0,
      false,
      {
        fileName: "app/data/dashboard/demandData.js",
        lineNumber: 91,
        columnNumber: 7
      },
      this
    ),
    status: "Below Target",
    Analyze: "/snop/dashboard/analysis/demandAnalysis"
  },
  {
    Name: "MAPE",
    Value: "80%",
    Trend: "down",
    TargetAch: 90,
    container: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      WrapperMultiLineChart,
      {
        category: mapeCategories_m,
        series: mapeSeries_m
      },
      void 0,
      false,
      {
        fileName: "app/data/dashboard/demandData.js",
        lineNumber: 105,
        columnNumber: 7
      },
      this
    ),
    status: "On Track",
    Analyze: "/snop/dashboard/analysis/demandAnalysis"
  },
  {
    Name: "Top return locations",
    Value: "$27M",
    Trend: "down",
    TargetAch: 50,
    container: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      WrapperMultiColumnChart,
      {
        category: locationCategories_m,
        series: locationSeries_m
      },
      void 0,
      false,
      {
        fileName: "app/data/dashboard/demandData.js",
        lineNumber: 119,
        columnNumber: 7
      },
      this
    ),
    status: "Below Target",
    Analyze: "/snop/dashboard/analysis/demandAnalysis"
  },
  {
    Name: "Late Shipments",
    Value: "$361.89M",
    Trend: "up",
    TargetAch: 90,
    container: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      WrapperMultiColumnChart,
      {
        category: lateCategories_m,
        series: lateSeries_m
      },
      void 0,
      false,
      {
        fileName: "app/data/dashboard/demandData.js",
        lineNumber: 133,
        columnNumber: 7
      },
      this
    ),
    status: "On Track",
    Analyze: "/snop/dashboard/analysis/orderAnalysis"
  },
  {
    Name: "On Time Shipment %",
    Value: "73.8%",
    Trend: "down",
    TargetAch: 90,
    container: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      WrapperMultiAreaChart,
      {
        category: ontimeCategories_m,
        series: ontimeSeries_m
      },
      void 0,
      false,
      {
        fileName: "app/data/dashboard/demandData.js",
        lineNumber: 147,
        columnNumber: 7
      },
      this
    ),
    status: "Below Target",
    Analyze: "/snop/dashboard/analysis/demandAnalysis"
  },
  {
    Name: "Perfect Order %",
    Value: "$300M",
    Trend: "up",
    TargetAch: 77,
    container: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      WrapperMultiBarChart,
      {
        category: perfectCategories_m,
        series: perfectFirstSeries_m
      },
      void 0,
      false,
      {
        fileName: "app/data/dashboard/demandData.js",
        lineNumber: 161,
        columnNumber: 7
      },
      this
    ),
    status: "On Track",
    Analyze: "/snop/dashboard/analysis/orderAnalysis"
  },
  {
    Name: "Order to Invoice Cycle Time",
    Value: "75",
    Trend: "up",
    TargetAch: 95,
    container: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      WrapperMultiLineChart,
      {
        category: invoiceCategories_m,
        series: invoiceSeries_m
      },
      void 0,
      false,
      {
        fileName: "app/data/dashboard/demandData.js",
        lineNumber: 175,
        columnNumber: 7
      },
      this
    ),
    status: "Above Target",
    Analyze: "/snop/dashboard/analysis/orderAnalysis"
  }
];

export {
  kpiChat,
  kpiService_m
};
//# sourceMappingURL=/build/_shared/chunk-XAEYC267.js.map
