import {
  It
} from "/build/_shared/chunk-X55ANDUC.js";
import {
  CardLayout
} from "/build/_shared/chunk-WPKVYDZN.js";
import "/build/_shared/chunk-TNTLQMTW.js";
import "/build/_shared/chunk-CO7DHVOA.js";
import "/build/_shared/chunk-ELWJTL4F.js";
import {
  WrapperMultiLineChart
} from "/build/_shared/chunk-XBDTUPGL.js";
import "/build/_shared/chunk-NON4LQMM.js";
import {
  WrapperMultiStackColChart
} from "/build/_shared/chunk-QRAMQPBO.js";
import {
  WrapperMultiColumnChart
} from "/build/_shared/chunk-P6FI4LUL.js";
import "/build/_shared/chunk-6EK66RT6.js";
import {
  qe
} from "/build/_shared/chunk-I5FVCQST.js";
import "/build/_shared/chunk-J5ZDEXRM.js";
import "/build/_shared/chunk-FNVTLCHO.js";
import "/build/_shared/chunk-ZSUFT5EU.js";
import "/build/_shared/chunk-X4JIH5W5.js";
import "/build/_shared/chunk-QA7IBH2P.js";
import "/build/_shared/chunk-JKKPAHGM.js";
import "/build/_shared/chunk-OP7Q5FNF.js";
import "/build/_shared/chunk-EZ7JG6XF.js";
import {
  CheckIcon_default,
  ChevronDownIcon_default,
  ClipboardDocumentCheckIcon_default,
  DocumentArrowDownIcon_default,
  ShareIcon_default
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

// app/routes/snop.dashboard.campaign.jsx
var import_react = __toESM(require_react());

// app/kendo/rawData/dashboard/campaignDashboard.js
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\kendo\\rawData\\dashboard\\campaignDashboard.js"
  );
  import.meta.hot.lastModified = "1708503722839.1504";
}
var leadsCategories_m = ["Jan", "Feb", "Mar", "Apr"];
var leadsSeries_m = [
  {
    name: "",
    data: [90, 150, 120, 50]
  },
  {
    name: "",
    data: [20, 40, 50, 20]
  }
];
var attributedCategories_m = ["Jan", "Feb", "Mar", "Apr", "May"];
var attributedSeries_m = [
  {
    name: "",
    data: [2, 4, 7, 10, 2]
  },
  {
    name: "",
    data: [8, 9, 9, 12, 9]
  }
];
var pipelineCategories_m = ["Jan", "Feb", "Mar", "Apr", "May"];
var pipelineSeries_m = [
  {
    name: "",
    data: [2, 4, 7, 10, 2]
  },
  {
    name: "",
    data: [4, 8, 9, 12, 10]
  }
];
var campaignCategories_m = ["Jan", "Feb", "Mar", "Apr", "May"];
var campaignSeries_m = [
  {
    name: "",
    data: [100, 300, 500, 700, 300]
  }
];
var revenueCategories_m = ["Jan", "Feb", "Mar", "Apr", "May"];
var revenueSeries_m = [
  {
    name: "",
    data: [400, 200, 100, 100, 400]
  }
];
var wonCategories_m = ["Jan", "Feb", "Mar", "Apr", "May"];
var wonSeries_m = [
  {
    name: "",
    data: [400, 300, 100, 80, 350]
  }
];
var topCategories_m = ["Jan", "Feb", "Mar", "Apr", "May"];
var topSeries_m = [
  {
    name: "",
    data: [100, 300, 400, 800, 300]
  }
];
var targetedCategories_m = ["Jan", "Feb", "Mar", "Apr", "May"];
var targetedSeries_m = [
  {
    name: "",
    data: [100, 300, 400, 800, 300]
  }
];

// app/data/dashboard/campaignData.js
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\data\\dashboard\\campaignData.js"
  );
  import.meta.hot.lastModified = "1708503722778.004";
}
var kpiService_m = [
  {
    Name: "Attributed Leads",
    Value: "378.00",
    Trend: "up",
    TargetAch: 83,
    container: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WrapperMultiColumnChart, { category: leadsCategories_m, series: leadsSeries_m }, void 0, false, {
      fileName: "app/data/dashboard/campaignData.js",
      lineNumber: 38,
      columnNumber: 15
    }, this),
    status: "Above Target"
  },
  {
    Name: "Attributed Opportunities",
    Value: "41.00",
    Trend: "up",
    TargetAch: 20,
    container: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WrapperMultiStackColChart, { category: attributedCategories_m, series: attributedSeries_m }, void 0, false, {
      fileName: "app/data/dashboard/campaignData.js",
      lineNumber: 46,
      columnNumber: 15
    }, this),
    status: "Above Target"
  },
  {
    Name: "Attributed Pipeline",
    Value: "$5.03M",
    Trend: "down",
    TargetAch: 0,
    container: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WrapperMultiStackColChart, { category: pipelineCategories_m, series: pipelineSeries_m }, void 0, false, {
      fileName: "app/data/dashboard/campaignData.js",
      lineNumber: 54,
      columnNumber: 16
    }, this),
    status: "On Track"
  },
  {
    Name: "Campaign ROI",
    Value: "345%",
    Trend: "down",
    TargetAch: 47,
    container: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WrapperMultiColumnChart, { category: campaignCategories_m, series: campaignSeries_m }, void 0, false, {
      fileName: "app/data/dashboard/campaignData.js",
      lineNumber: 62,
      columnNumber: 16
    }, this),
    status: "Above Target"
  },
  {
    Name: "Cost Per Revenue Line",
    Value: "$18.52K",
    Trend: "up",
    TargetAch: 0,
    container: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WrapperMultiColumnChart, { category: revenueCategories_m, series: revenueSeries_m }, void 0, false, {
      fileName: "app/data/dashboard/campaignData.js",
      lineNumber: 70,
      columnNumber: 16
    }, this),
    status: "Above Target"
  },
  {
    Name: "Cost Per Won Revenue",
    Value: "0.54",
    Trend: "down",
    TargetAch: 90,
    container: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WrapperMultiColumnChart, { category: wonCategories_m, series: wonSeries_m }, void 0, false, {
      fileName: "app/data/dashboard/campaignData.js",
      lineNumber: 78,
      columnNumber: 16
    }, this),
    status: "On Track"
  },
  {
    Name: "Top Campaigns",
    Value: "$2.09M",
    Trend: "up",
    TargetAch: 77,
    container: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WrapperMultiColumnChart, { category: topCategories_m, series: topSeries_m }, void 0, false, {
      fileName: "app/data/dashboard/campaignData.js",
      lineNumber: 86,
      columnNumber: 16
    }, this),
    status: "Above Target"
  },
  {
    Name: "Targeted Accounts",
    Value: "39.00",
    Trend: "up",
    TargetAch: 95,
    container: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WrapperMultiLineChart, { category: targetedCategories_m, series: targetedSeries_m }, void 0, false, {
      fileName: "app/data/dashboard/campaignData.js",
      lineNumber: 94,
      columnNumber: 16
    }, this),
    status: "Above Target"
  }
];

// app/routes/snop.dashboard.campaign.jsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\snop.dashboard.campaign.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\snop.dashboard.campaign.jsx"
  );
  import.meta.hot.lastModified = "1711093871768.4932";
}
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
function CampaignRoute() {
  _s();
  const emptyStyles = {
    background: "#ef4444"
  };
  const progressStyles = {
    background: "#22c55e"
  };
  const items = [{
    id: 1,
    name: "Review",
    description: "Conduct periodic (month/quarter/year) performance review of key business KPIs",
    to: `review`
  }, {
    id: 2,
    name: "Meeting",
    description: "Conduct daily/weekly data driven meetings and create plan of action ",
    to: `meeting`
  }];
  const centericon = [{
    name: "Download as PDF",
    icon: DocumentArrowDownIcon_default
  }, {
    name: "Email KPIs",
    icon: ShareIcon_default
  }, {
    name: "Copy as Image",
    icon: ClipboardDocumentCheckIcon_default
  }];
  const [mode, setMode] = (0, import_react.useState)(items[0]);
  const reviewTabs2 = ["Month", "Quarter", "Year"];
  const [reviewIndex, setReviewIndex] = (0, import_react.useState)(0);
  const meetingTabs2 = ["Daily", "Weekly"];
  const [meetingIndex, setMeetingIndex] = (0, import_react.useState)(0);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "mx-4 mt-1 rounded-lg bg-white   shadow", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex items-center justify-between p-2 ", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "m-2 flex-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h2", { className: "text-3xl font-bold leading-7 text-gray-900", children: "Campaign Dashboard" }, void 0, false, {
        fileName: "app/routes/snop.dashboard.campaign.jsx",
        lineNumber: 72,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/snop.dashboard.campaign.jsx",
        lineNumber: 71,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex p-1 align-middle ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "ml-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(It, { value: mode, onChange: setMode, children: ({
        open
      }) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "relative", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "inline-flex divide-x divide-rose-700", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "inline-flex items-center gap-x-1.5 rounded-l-md bg-rose-500 px-3 py-2 text-white shadow-sm", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CheckIcon_default, { className: "-ml-0.5 h-5 w-5 ", "aria-hidden": "true" }, void 0, false, {
              fileName: "app/routes/snop.dashboard.campaign.jsx",
              lineNumber: 85,
              columnNumber: 27
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "text-sm font-semibold", children: mode.name }, void 0, false, {
              fileName: "app/routes/snop.dashboard.campaign.jsx",
              lineNumber: 86,
              columnNumber: 27
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/snop.dashboard.campaign.jsx",
            lineNumber: 84,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(It.Button, { className: "inline-flex items-center rounded-l-none rounded-r-md bg-rose-500 p-2 hover:bg-rose-700", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ChevronDownIcon_default, { className: "h-5 w-5 text-white", "aria-hidden": "true" }, void 0, false, {
            fileName: "app/routes/snop.dashboard.campaign.jsx",
            lineNumber: 89,
            columnNumber: 27
          }, this) }, void 0, false, {
            fileName: "app/routes/snop.dashboard.campaign.jsx",
            lineNumber: 88,
            columnNumber: 25
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/snop.dashboard.campaign.jsx",
          lineNumber: 83,
          columnNumber: 23
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(qe, { show: open, as: import_react.Fragment, leave: "transition ease-in duration-100", leaveFrom: "opacity-100", leaveTo: "opacity-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(It.Options, { className: "absolute right-0 z-10 mt-2 w-72 origin-top-right divide-y divide-gray-200 overflow-hidden rounded-md border bg-gray-100 shadow-lg ", children: items.map((option) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(It.Option, { className: ({
          active
        }) => classNames(active ? "bg-rose-500 text-white" : "text-gray-900", "cursor-default select-none p-4 text-sm"), value: option, children: ({
          selected,
          active
        }) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-col", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex justify-between", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: selected ? "font-semibold" : "font-normal", children: option.name }, void 0, false, {
              fileName: "app/routes/snop.dashboard.campaign.jsx",
              lineNumber: 103,
              columnNumber: 37
            }, this),
            selected ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: active ? "text-white" : "text-rose-600", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CheckIcon_default, { className: "h-5 w-5", "aria-hidden": "true" }, void 0, false, {
              fileName: "app/routes/snop.dashboard.campaign.jsx",
              lineNumber: 107,
              columnNumber: 41
            }, this) }, void 0, false, {
              fileName: "app/routes/snop.dashboard.campaign.jsx",
              lineNumber: 106,
              columnNumber: 49
            }, this) : null
          ] }, void 0, true, {
            fileName: "app/routes/snop.dashboard.campaign.jsx",
            lineNumber: 102,
            columnNumber: 35
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: classNames(active ? "text-rose-200" : "text-gray-500", "mt-2"), children: option.description }, void 0, false, {
            fileName: "app/routes/snop.dashboard.campaign.jsx",
            lineNumber: 110,
            columnNumber: 35
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/snop.dashboard.campaign.jsx",
          lineNumber: 101,
          columnNumber: 31
        }, this) }, option.name, false, {
          fileName: "app/routes/snop.dashboard.campaign.jsx",
          lineNumber: 95,
          columnNumber: 48
        }, this)) }, void 0, false, {
          fileName: "app/routes/snop.dashboard.campaign.jsx",
          lineNumber: 94,
          columnNumber: 25
        }, this) }, void 0, false, {
          fileName: "app/routes/snop.dashboard.campaign.jsx",
          lineNumber: 93,
          columnNumber: 23
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/snop.dashboard.campaign.jsx",
        lineNumber: 82,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/routes/snop.dashboard.campaign.jsx",
        lineNumber: 81,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/routes/snop.dashboard.campaign.jsx",
        lineNumber: 78,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/routes/snop.dashboard.campaign.jsx",
        lineNumber: 77,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/snop.dashboard.campaign.jsx",
        lineNumber: 76,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/snop.dashboard.campaign.jsx",
      lineNumber: 70,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/snop.dashboard.campaign.jsx",
      lineNumber: 69,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("main", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CardLayout, { mode: mode.name === "Review" ? reviewTabs2 : meetingTabs2, tab: mode.name === "Review" ? reviewIndex : meetingIndex, kpiData: kpiService_m }, void 0, false, {
      fileName: "app/routes/snop.dashboard.campaign.jsx",
      lineNumber: 127,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/snop.dashboard.campaign.jsx",
      lineNumber: 126,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/snop.dashboard.campaign.jsx",
    lineNumber: 68,
    columnNumber: 10
  }, this);
}
_s(CampaignRoute, "qIPK7vxuiHEyfYnEC24NSdDcQ5c=");
_c = CampaignRoute;
var _c;
$RefreshReg$(_c, "CampaignRoute");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  CampaignRoute as default
};
//# sourceMappingURL=/build/routes/snop.dashboard.campaign-VV5RENJP.js.map
