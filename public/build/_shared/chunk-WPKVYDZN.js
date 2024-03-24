import {
  getTabIndex,
  useAnimation
} from "/build/_shared/chunk-TNTLQMTW.js";
import {
  Link
} from "/build/_shared/chunk-NON4LQMM.js";
import {
  CircleStackIcon_default,
  LightBulbIcon_default,
  WrenchScrewdriverIcon_default
} from "/build/_shared/chunk-QA7IBH2P.js";
import {
  classNames,
  require_prop_types,
  validatePackage
} from "/build/_shared/chunk-EZ7JG6XF.js";
import {
  createHotContext
} from "/build/_shared/chunk-K4XMOQHS.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  require_react
} from "/build/_shared/chunk-BOXFZXVX.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// node_modules/@progress/kendo-react-common/dist/es/hooks/useRtl.js
var React = __toESM(require_react());
function useRtl(elementRef, initialDir, args) {
  var _a = React.useState(initialDir), dir = _a[0], setDir = _a[1];
  React.useEffect(function() {
    if (!dir && window && elementRef.current) {
      var rtlCandidate = window.getComputedStyle(elementRef.current).direction;
      if (rtlCandidate) {
        setDir(rtlCandidate);
      }
    }
  }, args);
  return dir;
}

// node_modules/@progress/kendo-react-progressbars/dist/es/common/constants.js
var LABEL_DECIMALS = 3;
var DEFAULT_ANIMATION_DURATION = 400;
var NO_ANIMATION = 0;

// node_modules/@progress/kendo-react-progressbars/dist/es/common/utils.js
var truncateNumber = function(value) {
  var numberParts = value.toString().split(".");
  return numberParts.length === 1 ? "".concat(numberParts[0]) : "".concat(numberParts[0], ".").concat(numberParts[1].substr(0, LABEL_DECIMALS));
};
var calculatePercentage = function(min, max, value) {
  var onePercent = Math.abs((max - min) / 100);
  return Math.abs((value - min) / onePercent);
};
var updateProgress = function(progressRef, progressWrapRef, percentage, isVertical) {
  var progressPercentage = Math.max(percentage, 0.01);
  var progressWrapPercentage = 100 / progressPercentage * 100;
  if (progressRef.current && progressWrapRef.current) {
    progressRef.current.style.width = !isVertical ? "".concat(progressPercentage, "%") : "100%";
    progressWrapRef.current.style.width = !isVertical ? "".concat(progressWrapPercentage, "%") : "100%";
    progressRef.current.style.height = isVertical ? "".concat(progressPercentage, "%") : "100%";
    progressWrapRef.current.style.height = isVertical ? "".concat(progressWrapPercentage, "%") : "100%";
  }
};

// node_modules/@progress/kendo-react-progressbars/dist/es/package-metadata.js
var packageMetadata = {
  name: "@progress/kendo-react-progressbars",
  productName: "KendoReact",
  productCodes: ["KENDOUIREACT", "KENDOUICOMPLETE"],
  publishDate: 1700063549,
  version: "",
  licensingDocsUrl: "https://www.telerik.com/kendo-react-ui/my-license/?utm_medium=product&utm_source=kendoreact&utm_campaign=kendo-ui-react-purchase-license-keys-warning"
};

// node_modules/@progress/kendo-react-progressbars/dist/es/progressbar/ProgressBar.js
var React3 = __toESM(require_react());
var PropTypes = __toESM(require_prop_types());

// node_modules/@progress/kendo-react-progressbars/dist/es/progressbar/hooks/usePrevious.js
var React2 = __toESM(require_react());
var usePrevious = function(value) {
  var ref = React2.useRef();
  React2.useEffect(function() {
    ref.current = value;
  });
  return ref.current;
};

// node_modules/@progress/kendo-react-progressbars/dist/es/progressbar/ProgressBar.js
var __assign = function() {
  __assign = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
var ProgressBar = React3.forwardRef(function(props, target) {
  validatePackage(packageMetadata);
  var animation = props.animation, disabled = props.disabled, _a = props.reverse, reverse = _a === void 0 ? defaultProps.reverse : _a, orientation = props.orientation, labelVisible = props.labelVisible, labelPlacement = props.labelPlacement, _b = props.max, max = _b === void 0 ? defaultProps.max : _b, _c2 = props.min, min = _c2 === void 0 ? defaultProps.min : _c2, tabIndex = props.tabIndex, className = props.className, style = props.style, emptyStyle = props.emptyStyle, emptyClassName = props.emptyClassName, progressStyle = props.progressStyle, progressClassName = props.progressClassName;
  var elementRef = React3.useRef(null);
  var progressStatusRef = React3.useRef(null);
  var progressStatusWrapRef = React3.useRef(null);
  var focusElement = React3.useCallback(function() {
    if (elementRef.current) {
      elementRef.current.focus();
    }
  }, []);
  React3.useImperativeHandle(target, function() {
    return {
      element: elementRef.current,
      progressStatusElement: progressStatusRef.current,
      progressStatusWrapElement: progressStatusWrapRef.current,
      focus: focusElement
    };
  });
  var value = props.value || defaultProps.value;
  var prevValue = usePrevious(value);
  var indeterminateProp = props.value === null;
  var dir = useRtl(elementRef, props.dir);
  var isVertical = orientation === "vertical";
  var formattedLabel = truncateNumber(value);
  var labelProps = {
    value
  };
  var renderLabel = labelVisible ? props.label ? React3.createElement(
    "span",
    { className: "k-progress-status" },
    React3.createElement(props.label, __assign({}, labelProps))
  ) : React3.createElement("span", { className: "k-progress-status" }, formattedLabel) : void 0;
  var wrapperProps = {
    className: classNames("k-progressbar", {
      "k-progressbar-horizontal": !isVertical,
      "k-progressbar-vertical": isVertical,
      "k-progressbar-reverse": reverse,
      "k-progressbar-indeterminate": indeterminateProp,
      "k-disabled": disabled
    }, className),
    ref: elementRef,
    dir,
    tabIndex: getTabIndex(tabIndex, disabled),
    role: "progressbar",
    "aria-label": props.ariaLabel,
    "aria-valuemin": min,
    "aria-valuemax": max,
    "aria-valuenow": indeterminateProp ? void 0 : value,
    "aria-disabled": disabled,
    style
  };
  var positionClasses = classNames("k-progress-status-wrap", {
    "k-progress-start": labelPlacement === "start",
    "k-progress-center": labelPlacement === "center",
    "k-progress-end": labelPlacement === "end" || labelPlacement === void 0
  });
  var animationDuration = typeof animation !== "boolean" && animation !== void 0 ? animation.duration : animation ? DEFAULT_ANIMATION_DURATION : NO_ANIMATION;
  var handleStart = React3.useCallback(function() {
    var percentage = calculatePercentage(min, max, prevValue);
    updateProgress(progressStatusRef, progressStatusWrapRef, percentage, isVertical);
  }, [isVertical, max, min, prevValue]);
  var handleUpdate = React3.useCallback(function(progress) {
    var percentage = calculatePercentage(min, max, prevValue + (value - prevValue) * progress);
    updateProgress(progressStatusRef, progressStatusWrapRef, percentage, isVertical);
  }, [min, max, prevValue, value, isVertical]);
  var handleEnd = React3.useCallback(function() {
    var percentage = calculatePercentage(min, max, value);
    updateProgress(progressStatusRef, progressStatusWrapRef, percentage, isVertical);
  }, [isVertical, max, min, value]);
  useAnimation({
    duration: animationDuration,
    onStart: handleStart,
    onUpdate: handleUpdate,
    onEnd: handleEnd
  }, [value, animationDuration]);
  return React3.createElement(
    "div",
    __assign({}, wrapperProps),
    React3.createElement("span", { className: positionClasses + (emptyClassName ? " " + emptyClassName : ""), style: emptyStyle }, renderLabel),
    React3.createElement(
      "div",
      { className: "k-progressbar-value k-selected", style: progressStyle, ref: progressStatusRef },
      React3.createElement("span", { className: positionClasses + (progressClassName ? " " + progressClassName : ""), ref: progressStatusWrapRef }, renderLabel)
    )
  );
});
ProgressBar.propTypes = {
  animation: PropTypes.any,
  ariaLabel: PropTypes.string,
  disabled: PropTypes.bool,
  reverse: PropTypes.bool,
  label: PropTypes.any,
  labelVisible: PropTypes.bool,
  labelPlacement: PropTypes.oneOf(["start", "center", "end"]),
  max: PropTypes.number,
  min: PropTypes.number,
  value: PropTypes.number,
  tabIndex: PropTypes.number,
  emptyStyle: PropTypes.object,
  emptyClassName: PropTypes.string,
  progressStyle: PropTypes.object,
  progressClassName: PropTypes.string
};
var defaultProps = {
  animation: false,
  min: 0,
  max: 100,
  value: 0,
  disabled: false,
  reverse: false,
  labelVisible: true
};
ProgressBar.defaultProps = defaultProps;
ProgressBar.displayName = "KendoProgressBar";

// app/components/CardLayout.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\CardLayout.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\CardLayout.jsx"
  );
  import.meta.hot.lastModified = "1711092733256.5525";
}
function CardLayout({
  mode,
  tab,
  kpiData
}) {
  const emptyStyles = {
    background: "#ef4444"
  };
  const progressStyles = {
    background: "#22c55e"
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { className: "mx-4 my-4 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 ", children: kpiData.map((kpi) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { className: "col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white shadow-xl shadow-slate-900/10 ", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative flex flex-1 flex-col py-2 pl-3", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: `absolute inset-x-0 top-0 h-1 rounded-lg ${kpi.status === "Above Target" ? `bg-green-500` : kpi.status === "Below Target" ? `bg-red-500` : ""}` }, void 0, false, {
        fileName: "app/components/CardLayout.jsx",
        lineNumber: 40,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "my-2 flex items-baseline gap-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-base font-medium text-gray-900", children: kpi.Name }, void 0, false, {
            fileName: "app/components/CardLayout.jsx",
            lineNumber: 43,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-4xl font-bold text-black", children: kpi.Value }, void 0, false, {
            fileName: "app/components/CardLayout.jsx",
            lineNumber: 46,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/CardLayout.jsx",
          lineNumber: 42,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "ml-auto overflow-x-hidden px-2  text-center text-base font-medium text-gray-700", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ProgressBar, { value: kpi.TargetAch, style: {
          width: 100,
          height: 12
        }, labelVisible: true, labelPlacement: "start", emptyStyle: emptyStyles, progressStyle: progressStyles }, void 0, false, {
          fileName: "app/components/CardLayout.jsx",
          lineNumber: 49,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "app/components/CardLayout.jsx",
          lineNumber: 48,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/CardLayout.jsx",
        lineNumber: 41,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: kpi.container }, void 0, false, {
        fileName: "app/components/CardLayout.jsx",
        lineNumber: 55,
        columnNumber: 15
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/CardLayout.jsx",
      lineNumber: 39,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "-mt-px flex divide-x divide-gray-200 bg-gray-50 h-10 ", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex w-0 flex-1  ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: kpi.Analyze, className: "relative -mr-px inline-flex flex-1 items-center justify-center gap-x-2 border border-transparent text-sm font-semibold hover:bg-rose-500 hover:text-white", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "py-4 inline-flex flex-1 items-cente justify-center gap-x-3 text-sm font-semibold hover:text-white", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WrenchScrewdriverIcon_default, { className: "h-5 w-5", "aria-hidden": "true" }, void 0, false, {
          fileName: "app/components/CardLayout.jsx",
          lineNumber: 62,
          columnNumber: 23
        }, this),
        "Analyze"
      ] }, void 0, true, {
        fileName: "app/components/CardLayout.jsx",
        lineNumber: 61,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/components/CardLayout.jsx",
        lineNumber: 60,
        columnNumber: 19
      }, this) }, void 0, false, {
        fileName: "app/components/CardLayout.jsx",
        lineNumber: 59,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "-ml-px flex flex-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/snop/dashboard/salesExp", className: "relative -mr-px inline-flex flex-1 items-center justify-center gap-x-2  border border-transparent text-sm font-semibold  hover:bg-rose-500 hover:text-white", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "py-4 inline-flex flex-1 items-cente justify-center gap-x-3 text-sm font-semibold hover:text-white", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CircleStackIcon_default, { className: "h-5 w-5", "aria-hidden": "true" }, void 0, false, {
          fileName: "app/components/CardLayout.jsx",
          lineNumber: 71,
          columnNumber: 23
        }, this),
        "Explore Data"
      ] }, void 0, true, {
        fileName: "app/components/CardLayout.jsx",
        lineNumber: 70,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/components/CardLayout.jsx",
        lineNumber: 69,
        columnNumber: 19
      }, this) }, void 0, false, {
        fileName: "app/components/CardLayout.jsx",
        lineNumber: 68,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "-ml-px flex  flex-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/benchmark", className: "relative -mr-px inline-flex flex-1 items-center justify-center gap-x-2  border border-transparent text-sm font-semibold hover:bg-rose-500 hover:text-white", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "py-4 inline-flex flex-1 items-cente justify-center gap-x-3 text-sm font-semibold hover:text-white", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LightBulbIcon_default, { className: "h-5 w-5", "aria-hidden": "true" }, void 0, false, {
          fileName: "app/components/CardLayout.jsx",
          lineNumber: 79,
          columnNumber: 23
        }, this),
        "Insights"
      ] }, void 0, true, {
        fileName: "app/components/CardLayout.jsx",
        lineNumber: 78,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/components/CardLayout.jsx",
        lineNumber: 77,
        columnNumber: 19
      }, this) }, void 0, false, {
        fileName: "app/components/CardLayout.jsx",
        lineNumber: 76,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/CardLayout.jsx",
      lineNumber: 58,
      columnNumber: 15
    }, this) }, void 0, false, {
      fileName: "app/components/CardLayout.jsx",
      lineNumber: 57,
      columnNumber: 13
    }, this)
  ] }, kpi.Name, true, {
    fileName: "app/components/CardLayout.jsx",
    lineNumber: 38,
    columnNumber: 29
  }, this)) }, void 0, false, {
    fileName: "app/components/CardLayout.jsx",
    lineNumber: 37,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/CardLayout.jsx",
    lineNumber: 36,
    columnNumber: 10
  }, this);
}
_c = CardLayout;
var _c;
$RefreshReg$(_c, "CardLayout");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  CardLayout
};
//# sourceMappingURL=/build/_shared/chunk-WPKVYDZN.js.map
