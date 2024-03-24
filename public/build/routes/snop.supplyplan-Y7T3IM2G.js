import {
  Link
} from "/build/_shared/chunk-NON4LQMM.js";
import {
  WrapperPieChart
} from "/build/_shared/chunk-2VSZFGL3.js";
import {
  arc_gauge_default,
  baseTheme,
  drawDOM,
  group_default,
  instance_observer_default
} from "/build/_shared/chunk-OP7Q5FNF.js";
import {
  canUseDOM,
  classNames,
  provideIntlService,
  registerForIntl,
  require_prop_types,
  validatePackage
} from "/build/_shared/chunk-EZ7JG6XF.js";
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

// app/kendo/rawData/dashboard/supplyPlanDashboard.js
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\kendo\\rawData\\dashboard\\supplyPlanDashboard.js"
  );
  import.meta.hot.lastModified = "1711023818893.1873";
}
var inv_m = [
  {
    category: "A",
    value: 1.2
  },
  {
    category: "B",
    value: 2.3
  }
];
var purchase_m = [
  {
    category: "A",
    value: 2
  },
  {
    category: "B",
    value: 8
  }
];

// app/data/dashboard/supplyPlanData.js
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\data\\dashboard\\supplyPlanData.js"
  );
  import.meta.hot.lastModified = "1711092787053.358";
}
var kpiInv_m = [
  {
    Name: "PO Amount",
    Value: "$128M",
    Trend: "up",
    TargetAch: 100,
    container: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WrapperPieChart, { series: inv_m }, void 0, false, {
      fileName: "app/data/dashboard/supplyPlanData.js",
      lineNumber: 36,
      columnNumber: 16
    }, this),
    status: "Below Target",
    Analyze: "/snop/dashboard/analysis/proeffAnalysis"
  }
];
var kpiPurchase_m = [
  {
    Name: "PO Amount",
    Value: "$128M",
    Trend: "up",
    TargetAch: 100,
    container: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WrapperPieChart, { series: purchase_m }, void 0, false, {
      fileName: "app/data/dashboard/supplyPlanData.js",
      lineNumber: 47,
      columnNumber: 16
    }, this),
    status: "Below Target",
    Analyze: "/snop/dashboard/analysis/proeffAnalysis"
  }
];

// node_modules/@progress/kendo-react-gauges/dist/es/ArcGauge.js
var React4 = __toESM(require_react());

// node_modules/@progress/kendo-react-gauges/dist/es/BaseGauge.js
var React2 = __toESM(require_react());
var PropTypes = __toESM(require_prop_types());

// node_modules/@progress/kendo-react-gauges/dist/es/theming/theme-service.js
var template = '\n    <div class="k-var--gauge-pointer"></div>\n    <div class="k-var--gauge-track"></div>\n    <div class="k-var--normal-text-color"></div>\n';
var ThemeService = (
  /** @class */
  function() {
    function ThemeService2(store) {
      this.store = store;
    }
    ThemeService2.prototype.setStyle = function(field, value3) {
      this.store.dispatch({ type: "set", payload: { field, value: value3 } });
    };
    ThemeService2.prototype.setColors = function() {
      this.mapColor("pointer.color", "gauge-pointer");
      this.mapColor("scale.rangePlaceholderColor", "gauge-track");
      this.mapColor("scale.labels.color", "normal-text-color");
      this.mapColor("scale.minorTicks.color", "normal-text-color");
      this.mapColor("scale.majorTicks.color", "normal-text-color");
      this.mapColor("scale.line.color", "normal-text-color");
    };
    ThemeService2.prototype.mapColor = function(key, varName) {
      this.setStyle(key, this.queryStyle(varName).backgroundColor);
    };
    ThemeService2.prototype.queryStyle = function(varName) {
      var element = this.element;
      return window.getComputedStyle(element.querySelector(".k-var--".concat(varName)));
    };
    return ThemeService2;
  }()
);
var loadTheme = function(store, done, doc) {
  var service = new ThemeService(store);
  if (typeof doc === "undefined") {
    store.dispatch({ type: "push", payload: baseTheme() });
    return;
  }
  var container = service.element = doc.createElement("div");
  container.style.display = "none";
  container.innerHTML = template;
  doc.body.appendChild(container);
  try {
    store.dispatch({ type: "push", payload: baseTheme() });
    service.setColors();
  } finally {
    doc.body.removeChild(service.element);
    delete service.element;
    done();
  }
};

// node_modules/@progress/kendo-react-gauges/dist/es/store/store.js
var THROTTLE_MS = 1e3 / 60;
var createStore = function(reducer) {
  var state;
  var timerId;
  var listeners = [];
  var getState = function() {
    return state;
  };
  var dispatch = function(action) {
    state = reducer(state, action);
    if (canUseDOM) {
      window.clearTimeout(timerId);
      timerId = window.setTimeout(function() {
        return listeners.forEach(function(l) {
          return l();
        });
      }, THROTTLE_MS);
    }
  };
  var subscribe = function(listener) {
    listeners.push(listener);
    return function() {
      return listeners = listeners.filter(function(l) {
        return l !== listener;
      });
    };
  };
  dispatch({});
  return { getState, dispatch, subscribe };
};
var store_default = createStore;

// node_modules/@progress/kendo-react-gauges/dist/es/store/reducer.js
var __spreadArray = function(to, from, pack) {
  if (pack || arguments.length === 2)
    for (var i = 0, l = from.length, ar; i < l; i++) {
      if (ar || !(i in from)) {
        if (!ar)
          ar = Array.prototype.slice.call(from, 0, i);
        ar[i] = from[i];
      }
    }
  return to.concat(ar || Array.prototype.slice.call(from));
};
var themeReducer = function(currentState, action) {
  if (action.type) {
    switch (action.type) {
      case "set":
        return reducers.themeItem(currentState, action);
      case "push":
        return Object.assign(currentState, action.payload);
      default:
        return currentState;
    }
  } else {
    return {};
  }
};
var observersReducer = function(currentState, action) {
  if (action.type) {
    switch (action.type) {
      case "add":
        return __spreadArray(__spreadArray([], currentState, true), [action.payload], false);
      case "remove":
        return currentState.filter(function(element) {
          return element !== action.payload;
        });
      default:
        return currentState;
    }
  } else {
    return [];
  }
};
var reducers = {
  configurationItem: function(currentState, action) {
    var _a;
    return Object.assign(currentState, (_a = {}, _a[action.gaugeKey] = action.payload, _a));
  },
  collectionConfigurationItem: function(currentState, action) {
    var _a;
    var inCollection = false;
    var _b = action.gaugeCollectionIdxKey.split("_"), collectionName = _b[0], collectionIdx = _b[1];
    var collection = currentState[collectionName].map(function(item, index) {
      if (parseInt(collectionIdx, 10) === index) {
        inCollection = true;
        return action.payload;
      }
      return item;
    });
    if (inCollection === false) {
      collection.splice(parseInt(collectionIdx, 10), 0, action.payload);
    }
    return Object.assign(currentState, (_a = {}, _a[collectionName] = collection, _a));
  },
  themeItem: function(currentState, action) {
    var store = {};
    var nextStore = Object.assign(store, currentState);
    var _a = action.payload, field = _a.field, value3 = _a.value;
    var parts = field.split(".");
    var key = parts.shift();
    while (parts.length > 0) {
      store = store[key] = store[key] || {};
      key = parts.shift();
    }
    store[key] = value3;
    return nextStore;
  }
};

// node_modules/@progress/kendo-react-gauges/dist/es/utils/common.js
var isObject = function(value3) {
  return typeof value3 === "object";
};
var diffOptions = function(original, current) {
  if (Object.keys(original).length !== Object.keys(current).length) {
    return true;
  }
  for (var field in original) {
    if (field !== "value" && original.hasOwnProperty(field)) {
      var originalValue = original[field];
      var currentValue = current[field];
      var diff = isObject(originalValue) && isObject(currentValue) ? diffOptions(originalValue, currentValue) : originalValue !== currentValue;
      if (diff) {
        return true;
      }
    }
  }
  return false;
};
var isOptionsChanged = function(original, current) {
  if (!original || !current) {
    return true;
  }
  original = [].concat(original);
  current = [].concat(current);
  if (original.length !== current.length) {
    return true;
  }
  for (var idx = 0; idx < original.length; idx++) {
    if (diffOptions(original[idx], current[idx])) {
      return true;
    }
  }
  return false;
};

// node_modules/@progress/kendo-react-gauges/dist/es/GaugeContext.js
var React = __toESM(require_react());
var GaugeContext = React.createContext(null);
GaugeContext.displayName = "GaugeContext";

// node_modules/@progress/kendo-react-gauges/dist/es/package-metadata.js
var packageMetadata = {
  name: "@progress/kendo-react-gauges",
  productName: "KendoReact",
  productCodes: ["KENDOUIREACT", "KENDOUICOMPLETE"],
  publishDate: 1700064599,
  version: "",
  licensingDocsUrl: "https://www.telerik.com/kendo-react-ui/my-license/?utm_medium=product&utm_source=kendoreact&utm_campaign=kendo-ui-react-purchase-license-keys-warning"
};

// node_modules/@progress/kendo-react-gauges/dist/es/BaseGauge.js
var __extends = function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2)
        if (Object.prototype.hasOwnProperty.call(b2, p))
          d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    if (typeof b !== "function" && b !== null)
      throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var __rest = function(s, e) {
  var t = {};
  for (var p in s)
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
};
var BaseGauge = (
  /** @class */
  function(_super) {
    __extends(BaseGauge2, _super);
    function BaseGauge2(props) {
      var _this = _super.call(this, props) || this;
      _this.gaugeInstance = null;
      _this.surface = null;
      _this._element = null;
      _this.themeStore = {};
      _this.themeUnsubscriber = Function.prototype;
      _this.observersStore = {};
      _this.onWindowResize = function() {
        if (_this.gaugeInstance !== null) {
          _this.gaugeInstance.resize();
          _this.trigger("render", { sender: _this });
        }
      };
      validatePackage(packageMetadata);
      _this.themeStore = store_default(themeReducer);
      _this.observersStore = store_default(observersReducer);
      _this.contextValue = {
        observersStore: _this.observersStore
      };
      return _this;
    }
    Object.defineProperty(BaseGauge2.prototype, "element", {
      /**
       * @hidden
       */
      get: function() {
        return this._element;
      },
      enumerable: false,
      configurable: true
    });
    BaseGauge2.prototype.componentDidMount = function() {
      var _a;
      var doc = ((_a = this._element) === null || _a === void 0 ? void 0 : _a.ownerDocument) || document;
      loadTheme(this.themeStore, this.instantiateCoreGauge.bind(this), doc);
      this.themeUnsubscriber = this.themeStore.subscribe(this.refresh.bind(this));
      window.addEventListener("resize", this.onWindowResize);
      this.trigger("render", { sender: this });
    };
    BaseGauge2.prototype.componentDidUpdate = function(prevProps) {
      var _a = this.props, dir = _a.dir, children = _a.children, deriveOptionsFromParent = _a.deriveOptionsFromParent, getTarget = _a.getTarget, gaugeConstructor = _a.gaugeConstructor, className = _a.className, renderAs = _a.renderAs, currentOthers = __rest(_a, ["dir", "children", "deriveOptionsFromParent", "getTarget", "gaugeConstructor", "className", "renderAs"]);
      var prevDir = prevProps.dir, prevChildren = prevProps.children, prevDeriveOptionsFromParent = prevProps.deriveOptionsFromParent, prevGetTarget = prevProps.getTarget, prevGaugeConstructor = prevProps.gaugeConstructor, prevClassName = prevProps.className, prevRenderAs = prevProps.renderAs, prevOthers = __rest(prevProps, ["dir", "children", "deriveOptionsFromParent", "getTarget", "gaugeConstructor", "className", "renderAs"]);
      if (this.gaugeInstance !== null) {
        var currentIntlService = provideIntlService(this);
        var gaugeService = this.gaugeInstance.contextService;
        var localeChanged = currentIntlService.locale !== gaugeService._intlService.locale;
        var optionsChanged = isOptionsChanged(prevOthers, currentOthers);
        var typedCurrentOthers = currentOthers;
        if (localeChanged) {
          this.gaugeInstance.contextService._intlService = currentIntlService;
          this.gaugeInstance.contextService.format._intlService = currentIntlService;
          if (!optionsChanged) {
            this.gaugeInstance.noTransitionsRedraw();
          }
        }
        if (optionsChanged || (renderAs || "svg") !== (prevRenderAs || "svg")) {
          this.refresh();
        } else {
          if (Object.keys(currentOthers).indexOf("pointer") > -1) {
            var isPointerArray = Array.isArray(typedCurrentOthers.pointer);
            if (isPointerArray) {
              this.refreshAllValues(typedCurrentOthers.pointer.map(function(item) {
                return item.value;
              }));
            } else {
              this.refreshValue((typedCurrentOthers.pointer || {}).value);
            }
          } else {
            this.refreshValue(typedCurrentOthers.value);
          }
        }
        if (prevProps.dir !== dir) {
          this.gaugeInstance.setDirection(this.getDirection(dir));
        }
        this.trigger("render", { sender: this });
      }
    };
    BaseGauge2.prototype.componentWillUnmount = function() {
      this.themeUnsubscriber();
      var surfaceElement = this.gaugeInstance && this.gaugeInstance.surfaceElement;
      if (surfaceElement && surfaceElement.parentNode) {
        surfaceElement.parentNode.removeChild(surfaceElement);
      }
      if (this.gaugeInstance !== null) {
        this.gaugeInstance.destroy();
        this.gaugeInstance = null;
      }
      window.removeEventListener("resize", this.onWindowResize);
    };
    BaseGauge2.prototype.render = function() {
      var _this = this;
      var _a = this.props, _b = _a.style, style = _b === void 0 ? {} : _b, className = _a.className, children = _a.children;
      var gaugeStyles2 = Object.assign({}, style, { position: "relative" });
      return React2.createElement(
        GaugeContext.Provider,
        { value: this.contextValue },
        React2.createElement("div", { style: gaugeStyles2, ref: function(el) {
          return _this._element = el;
        }, className }, children)
      );
    };
    BaseGauge2.prototype.instantiateCoreGauge = function() {
      var _a = this.props, dir = _a.dir, gaugeConstructor = _a.gaugeConstructor;
      var gaugeOptions = this.getGaugeOptions();
      this.gaugeInstance = new gaugeConstructor(this.element, gaugeOptions, this.themeStore.getState(), {
        rtl: this.getDirection(dir),
        intlService: provideIntlService(this),
        sender: this
      });
    };
    BaseGauge2.prototype.refresh = function() {
      if (this.gaugeInstance !== null) {
        var themeOptions = this.themeStore.getState();
        var gaugeOptions = this.getGaugeOptions();
        this.gaugeInstance.setOptions(gaugeOptions, themeOptions);
      }
    };
    BaseGauge2.prototype.refreshValue = function(value3) {
      this.gaugeInstance.value(value3);
    };
    BaseGauge2.prototype.refreshAllValues = function(values) {
      this.gaugeInstance.allValues(values);
    };
    BaseGauge2.prototype.getDirection = function(dir) {
      var _this = this;
      var directionFromWindow = function() {
        return canUseDOM && window.getComputedStyle(_this.element).direction;
      };
      var direction = dir !== void 0 ? dir : directionFromWindow() || "ltr";
      return direction === "rtl";
    };
    BaseGauge2.prototype.getGaugeOptions = function() {
      var _a = this.props, renderAs = _a.renderAs, transitions = _a.transitions, deriveOptionsFromParent = _a.deriveOptionsFromParent;
      var gaugeOptions = Object.assign({
        renderAs,
        transitions
      });
      if (deriveOptionsFromParent) {
        gaugeOptions = deriveOptionsFromParent(gaugeOptions);
      }
      return gaugeOptions;
    };
    BaseGauge2.prototype.trigger = function(name, e) {
      var observers = this.observersStore.getState();
      for (var idx = 0; idx < observers.length; idx++) {
        observers[idx].trigger(name, e);
      }
    };
    BaseGauge2.propTypes = {
      dir: PropTypes.string,
      renderAs: PropTypes.oneOf(["svg", "canvas"])
    };
    BaseGauge2.defaultProps = {
      renderAs: "svg"
    };
    return BaseGauge2;
  }(React2.Component)
);
registerForIntl(BaseGauge);

// node_modules/@progress/kendo-react-gauges/dist/es/ArcCenter.js
var React3 = __toESM(require_react());
var __extends2 = function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2)
        if (Object.prototype.hasOwnProperty.call(b2, p))
          d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    if (typeof b !== "function" && b !== null)
      throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var ArcCenter = (
  /** @class */
  function(_super) {
    __extends2(ArcCenter2, _super);
    function ArcCenter2(props, context) {
      var _this = _super.call(this, props, context) || this;
      _this.state = {
        arcCenterStyles: null,
        arcCenterValue: {
          value: 0,
          color: ""
        }
      };
      _this._element = null;
      _this.gaugeObserver = new instance_observer_default(_this, {
        render: "onRender"
      });
      context.observersStore.dispatch({
        type: "add",
        payload: _this.gaugeObserver
      });
      return _this;
    }
    ArcCenter2.prototype.render = function() {
      var _this = this;
      var render = this.props.render;
      var _a = this.state, arcCenterStyles = _a.arcCenterStyles, arcCenterValue = _a.arcCenterValue;
      var divStyle = arcCenterStyles ? arcCenterStyles : { zIndex: -1 };
      var renderer = null;
      if (render) {
        renderer = React3.createElement("div", { className: "k-arcgauge-label", ref: function(element) {
          return _this._element = element;
        }, style: divStyle }, render(arcCenterValue.value, arcCenterValue.color));
      }
      return renderer;
    };
    ArcCenter2.prototype.onRender = function(e) {
      if (!this._element) {
        return;
      }
      var gaugeInstance = e.sender.gaugeInstance;
      var width = this._element.offsetWidth;
      var height = this._element.offsetHeight;
      var position = gaugeInstance.centerLabelPosition(width, height);
      this.setState({
        arcCenterStyles: {
          left: position.left,
          top: position.top
        },
        arcCenterValue: {
          value: gaugeInstance.value(),
          color: gaugeInstance.currentColor()
        }
      });
    };
    ArcCenter2.contextType = GaugeContext;
    return ArcCenter2;
  }(React3.Component)
);

// node_modules/@progress/kendo-react-gauges/dist/es/ArcGauge.js
var __extends3 = function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2)
        if (Object.prototype.hasOwnProperty.call(b2, p))
          d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    if (typeof b !== "function" && b !== null)
      throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
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
var __rest2 = function(s, e) {
  var t = {};
  for (var p in s)
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
};
var ArcGauge = (
  /** @class */
  function(_super) {
    __extends3(ArcGauge2, _super);
    function ArcGauge2() {
      var _this = _super !== null && _super.apply(this, arguments) || this;
      _this._baseGauge = null;
      _this.gaugeType = arc_gauge_default;
      _this.getTarget = function() {
        return _this;
      };
      _this.deriveOptionsFromParent = function(options) {
        var _a = _this.props, value3 = _a.value, color = _a.color, colors = _a.colors, opacity = _a.opacity, scale = _a.scale;
        return Object.assign({}, options, {
          value: value3,
          color,
          colors,
          opacity,
          scale
        });
      };
      return _this;
    }
    Object.defineProperty(ArcGauge2.prototype, "gaugeInstance", {
      /**
       * @hidden
       */
      get: function() {
        if (this._baseGauge) {
          return this._baseGauge.gaugeInstance;
        }
        return null;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(ArcGauge2.prototype, "surface", {
      /**
       * The Drawing `Surface` of the Gauge.
       */
      get: function() {
        if (this._baseGauge) {
          return this._baseGauge.surface;
        }
        return null;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(ArcGauge2.prototype, "element", {
      /**
       * The DOM element of the Gauge.
       */
      get: function() {
        if (this._baseGauge) {
          return this._baseGauge.element;
        }
        return null;
      },
      enumerable: false,
      configurable: true
    });
    ArcGauge2.prototype.render = function() {
      var _this = this;
      var _a = this.props, children = _a.children, arcCenterRender = _a.arcCenterRender, centerRender = _a.centerRender, className = _a.className, baseGaugeProps = __rest2(_a, ["children", "arcCenterRender", "centerRender", "className"]);
      return React4.createElement(
        BaseGauge,
        __assign({}, baseGaugeProps, { deriveOptionsFromParent: this.deriveOptionsFromParent, ref: function(baseGauge) {
          return _this._baseGauge = baseGauge;
        }, gaugeConstructor: this.gaugeType, getTarget: this.getTarget, className: classNames("k-gauge k-arcgauge", className) }),
        children,
        React4.createElement(ArcCenter, { render: centerRender || arcCenterRender })
      );
    };
    ArcGauge2.prototype.exportVisual = function(options) {
      if (this.gaugeInstance !== null && this.element) {
        return drawDOM(this.element, options);
      }
      return Promise.resolve(new group_default());
    };
    return ArcGauge2;
  }(React4.Component)
);

// app/routes/snop.supplyplan.jsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\snop.supplyplan.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\snop.supplyplan.jsx"
  );
  import.meta.hot.lastModified = "1711027196910.3025";
}
var navigation = [{
  id: 1,
  name: "S&OP",
  to: "/snop/optimize"
}, {
  id: 2,
  name: "Demand",
  to: "#"
}, {
  id: 3,
  name: "Inventory",
  to: "#"
}, {
  id: 4,
  name: "Logistics",
  to: "#"
}, {
  id: 5,
  name: "Procurement",
  to: "#"
}];
var value = 30;
var value2 = 70;
var centerRenderer = (currentValue, color) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h3", { style: {
    color
  }, children: [
    currentValue,
    "%"
  ] }, void 0, true, {
    fileName: "app/routes/snop.supplyplan.jsx",
    lineNumber: 49,
    columnNumber: 10
  }, this);
};
var gaugeStyles = {
  display: "block"
};
function TaskPage() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "m-2", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "mx-2 py-3.5 rounded-t-lg bg-sky-500 border-b ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("nav", { className: "ml-6 pl-6 flex items-center justify-center", "aria-label": "Global", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: " flex gap-x-8 justify-center ", children: navigation.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Link, { to: item.to, className: " text-base lg:text-lg font-semibold leading-6 text-white hover:text-gray-200", children: item.name }, item.id, false, {
      fileName: "app/routes/snop.supplyplan.jsx",
      lineNumber: 64,
      columnNumber: 39
    }, this)) }, void 0, false, {
      fileName: "app/routes/snop.supplyplan.jsx",
      lineNumber: 63,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/routes/snop.supplyplan.jsx",
      lineNumber: 62,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/snop.supplyplan.jsx",
      lineNumber: 61,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "bg-white m-2 shadow-md rounded-b-lg py-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex items-center  justify-between", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h2", { className: "text-3xl font-bold ml-4 p-2 text-transparent bg-clip-text   bg-gradient-to-r from-blue-700 via-sky-700 to-blue-700 font-display", children: "Sales & Operations Planning - List of Scenarios" }, void 0, false, {
        fileName: "app/routes/snop.supplyplan.jsx",
        lineNumber: 72,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/snop.supplyplan.jsx",
        lineNumber: 71,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("ul", { className: "m-4 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "rounded-lg bg-white border shadow-xl shadow-slate-900/10 m-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "p-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h1", { className: "text-xl font-bold text-black", children: "Supply Network" }, void 0, false, {
            fileName: "app/routes/snop.supplyplan.jsx",
            lineNumber: 79,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/snop.supplyplan.jsx",
            lineNumber: 78,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "relative flex flex-col  pl-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("ul", { className: "divide-y divide-gray-200 dark:divide-gray-700 ", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { className: "py-3 ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex items-center mr-4 ", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex-1 min-w-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "text-sm font-medium text-gray-900 truncate dark:text-white", children: "Products" }, void 0, false, {
                fileName: "app/routes/snop.supplyplan.jsx",
                lineNumber: 86,
                columnNumber: 25
              }, this) }, void 0, false, {
                fileName: "app/routes/snop.supplyplan.jsx",
                lineNumber: 85,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "inline-flex items-center text-base font-semibold text-gray-900 dark:text-white", children: "16,390" }, void 0, false, {
                fileName: "app/routes/snop.supplyplan.jsx",
                lineNumber: 90,
                columnNumber: 23
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/snop.supplyplan.jsx",
              lineNumber: 84,
              columnNumber: 21
            }, this) }, void 0, false, {
              fileName: "app/routes/snop.supplyplan.jsx",
              lineNumber: 83,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { className: "py-3 ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex items-center mr-4 ", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex-1 min-w-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "text-sm font-medium text-gray-900 truncate dark:text-white", children: "Sites" }, void 0, false, {
                fileName: "app/routes/snop.supplyplan.jsx",
                lineNumber: 98,
                columnNumber: 25
              }, this) }, void 0, false, {
                fileName: "app/routes/snop.supplyplan.jsx",
                lineNumber: 97,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "inline-flex items-center text-base font-semibold text-gray-900 dark:text-white", children: "5" }, void 0, false, {
                fileName: "app/routes/snop.supplyplan.jsx",
                lineNumber: 102,
                columnNumber: 23
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/snop.supplyplan.jsx",
              lineNumber: 96,
              columnNumber: 21
            }, this) }, void 0, false, {
              fileName: "app/routes/snop.supplyplan.jsx",
              lineNumber: 95,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { className: "pt-3 ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex items-center mr-4 ", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex-1 min-w-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "text-sm font-medium text-gray-900 truncate dark:text-white", children: "Suppliers" }, void 0, false, {
                fileName: "app/routes/snop.supplyplan.jsx",
                lineNumber: 111,
                columnNumber: 25
              }, this) }, void 0, false, {
                fileName: "app/routes/snop.supplyplan.jsx",
                lineNumber: 110,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "inline-flex items-center text-base font-semibold text-gray-900 dark:text-white", children: "432" }, void 0, false, {
                fileName: "app/routes/snop.supplyplan.jsx",
                lineNumber: 115,
                columnNumber: 23
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/snop.supplyplan.jsx",
              lineNumber: 109,
              columnNumber: 21
            }, this) }, void 0, false, {
              fileName: "app/routes/snop.supplyplan.jsx",
              lineNumber: 108,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/snop.supplyplan.jsx",
            lineNumber: 82,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/snop.supplyplan.jsx",
            lineNumber: 81,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/snop.supplyplan.jsx",
          lineNumber: 77,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: " rounded-lg bg-white border shadow-xl shadow-slate-900/10  m-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "p-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h1", { className: "text-xl font-bold text-black", children: "Inventory Orders" }, void 0, false, {
            fileName: "app/routes/snop.supplyplan.jsx",
            lineNumber: 126,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/snop.supplyplan.jsx",
            lineNumber: 125,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "mx-4 grid grid-cols-2 gap-2", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("ul", { className: "divide-y divide-gray-200 dark:divide-gray-700 ", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { className: "py-3 ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex items-center mr-4 ", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex-1 min-w-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "text-sm font-medium text-gray-900 truncate dark:text-white", children: "Products" }, void 0, false, {
                  fileName: "app/routes/snop.supplyplan.jsx",
                  lineNumber: 135,
                  columnNumber: 25
                }, this) }, void 0, false, {
                  fileName: "app/routes/snop.supplyplan.jsx",
                  lineNumber: 134,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "inline-flex items-center text-base font-semibold text-gray-900 dark:text-white", children: "16,390" }, void 0, false, {
                  fileName: "app/routes/snop.supplyplan.jsx",
                  lineNumber: 139,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/snop.supplyplan.jsx",
                lineNumber: 133,
                columnNumber: 21
              }, this) }, void 0, false, {
                fileName: "app/routes/snop.supplyplan.jsx",
                lineNumber: 132,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { className: "py-3 ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex items-center mr-4 ", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex-1 min-w-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "text-sm font-medium text-gray-900 truncate dark:text-white", children: "Sites" }, void 0, false, {
                  fileName: "app/routes/snop.supplyplan.jsx",
                  lineNumber: 147,
                  columnNumber: 25
                }, this) }, void 0, false, {
                  fileName: "app/routes/snop.supplyplan.jsx",
                  lineNumber: 146,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "inline-flex items-center text-base font-semibold text-gray-900 dark:text-white", children: "5" }, void 0, false, {
                  fileName: "app/routes/snop.supplyplan.jsx",
                  lineNumber: 151,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/snop.supplyplan.jsx",
                lineNumber: 145,
                columnNumber: 21
              }, this) }, void 0, false, {
                fileName: "app/routes/snop.supplyplan.jsx",
                lineNumber: 144,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { className: "py-3 ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex items-center mr-4 ", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex-1 min-w-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "text-sm font-medium text-gray-900 truncate dark:text-white", children: "Suppliers" }, void 0, false, {
                  fileName: "app/routes/snop.supplyplan.jsx",
                  lineNumber: 160,
                  columnNumber: 25
                }, this) }, void 0, false, {
                  fileName: "app/routes/snop.supplyplan.jsx",
                  lineNumber: 159,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "inline-flex items-center text-base font-semibold text-gray-900 dark:text-white", children: "432" }, void 0, false, {
                  fileName: "app/routes/snop.supplyplan.jsx",
                  lineNumber: 164,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/snop.supplyplan.jsx",
                lineNumber: 158,
                columnNumber: 21
              }, this) }, void 0, false, {
                fileName: "app/routes/snop.supplyplan.jsx",
                lineNumber: 157,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/snop.supplyplan.jsx",
              lineNumber: 131,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: kpiInv_m.map((kpi) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { className: "", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: kpi.container }, void 0, false, {
              fileName: "app/routes/snop.supplyplan.jsx",
              lineNumber: 174,
              columnNumber: 25
            }, this) }, void 0, false, {
              fileName: "app/routes/snop.supplyplan.jsx",
              lineNumber: 173,
              columnNumber: 23
            }, this) }, kpi.Name, false, {
              fileName: "app/routes/snop.supplyplan.jsx",
              lineNumber: 172,
              columnNumber: 40
            }, this)) }, void 0, false, {
              fileName: "app/routes/snop.supplyplan.jsx",
              lineNumber: 171,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/snop.supplyplan.jsx",
            lineNumber: 130,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/snop.supplyplan.jsx",
          lineNumber: 124,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "rounded-lg bg-white border shadow-xl shadow-slate-900/10  m-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "p-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h1", { className: "text-xl font-bold text-black", children: "Purchase Plan" }, void 0, false, {
            fileName: "app/routes/snop.supplyplan.jsx",
            lineNumber: 182,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/snop.supplyplan.jsx",
            lineNumber: 181,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "mx-4 grid grid-cols-2 gap-2", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("ul", { className: "divide-y divide-gray-200 dark:divide-gray-700 ", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { className: "py-3 ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex items-center mr-4 ", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex-1 min-w-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "text-sm font-medium text-gray-900 truncate dark:text-white", children: "Products" }, void 0, false, {
                  fileName: "app/routes/snop.supplyplan.jsx",
                  lineNumber: 189,
                  columnNumber: 25
                }, this) }, void 0, false, {
                  fileName: "app/routes/snop.supplyplan.jsx",
                  lineNumber: 188,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "inline-flex items-center text-base font-semibold text-gray-900 dark:text-white", children: "16,390" }, void 0, false, {
                  fileName: "app/routes/snop.supplyplan.jsx",
                  lineNumber: 193,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/snop.supplyplan.jsx",
                lineNumber: 187,
                columnNumber: 21
              }, this) }, void 0, false, {
                fileName: "app/routes/snop.supplyplan.jsx",
                lineNumber: 186,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { className: "py-3 ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex items-center mr-4 ", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex-1 min-w-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "text-sm font-medium text-gray-900 truncate dark:text-white", children: "Sites" }, void 0, false, {
                  fileName: "app/routes/snop.supplyplan.jsx",
                  lineNumber: 201,
                  columnNumber: 25
                }, this) }, void 0, false, {
                  fileName: "app/routes/snop.supplyplan.jsx",
                  lineNumber: 200,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "inline-flex items-center text-base font-semibold text-gray-900 dark:text-white", children: "5" }, void 0, false, {
                  fileName: "app/routes/snop.supplyplan.jsx",
                  lineNumber: 205,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/snop.supplyplan.jsx",
                lineNumber: 199,
                columnNumber: 21
              }, this) }, void 0, false, {
                fileName: "app/routes/snop.supplyplan.jsx",
                lineNumber: 198,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { className: "py-3 ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex items-center mr-4 ", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex-1 min-w-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "text-sm font-medium text-gray-900 truncate dark:text-white", children: "Suppliers" }, void 0, false, {
                  fileName: "app/routes/snop.supplyplan.jsx",
                  lineNumber: 214,
                  columnNumber: 25
                }, this) }, void 0, false, {
                  fileName: "app/routes/snop.supplyplan.jsx",
                  lineNumber: 213,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "inline-flex items-center text-base font-semibold text-gray-900 dark:text-white", children: "432" }, void 0, false, {
                  fileName: "app/routes/snop.supplyplan.jsx",
                  lineNumber: 218,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/snop.supplyplan.jsx",
                lineNumber: 212,
                columnNumber: 21
              }, this) }, void 0, false, {
                fileName: "app/routes/snop.supplyplan.jsx",
                lineNumber: 211,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/snop.supplyplan.jsx",
              lineNumber: 185,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: kpiPurchase_m.map((kpi) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { className: "", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: kpi.container }, void 0, false, {
              fileName: "app/routes/snop.supplyplan.jsx",
              lineNumber: 228,
              columnNumber: 25
            }, this) }, void 0, false, {
              fileName: "app/routes/snop.supplyplan.jsx",
              lineNumber: 227,
              columnNumber: 23
            }, this) }, kpi.Name, false, {
              fileName: "app/routes/snop.supplyplan.jsx",
              lineNumber: 226,
              columnNumber: 45
            }, this)) }, void 0, false, {
              fileName: "app/routes/snop.supplyplan.jsx",
              lineNumber: 225,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/snop.supplyplan.jsx",
            lineNumber: 184,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/snop.supplyplan.jsx",
          lineNumber: 180,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: " rounded-lg bg-white border shadow-xl shadow-slate-900/10  m-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "p-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h1", { className: "text-xl font-bold text-black", children: "Purchase Order Automation Percentage" }, void 0, false, {
            fileName: "app/routes/snop.supplyplan.jsx",
            lineNumber: 236,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/snop.supplyplan.jsx",
            lineNumber: 235,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "mx-4 grid grid-cols-2 gap-2", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("ul", { className: "divide-y divide-gray-200 dark:divide-gray-700 ", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { className: "py-3 ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex items-center mr-4 ", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex-1 min-w-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "text-sm font-medium text-gray-900 truncate dark:text-white", children: "Products" }, void 0, false, {
                  fileName: "app/routes/snop.supplyplan.jsx",
                  lineNumber: 246,
                  columnNumber: 25
                }, this) }, void 0, false, {
                  fileName: "app/routes/snop.supplyplan.jsx",
                  lineNumber: 245,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "inline-flex items-center text-base font-semibold text-gray-900 dark:text-white", children: "16,390" }, void 0, false, {
                  fileName: "app/routes/snop.supplyplan.jsx",
                  lineNumber: 250,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/snop.supplyplan.jsx",
                lineNumber: 244,
                columnNumber: 21
              }, this) }, void 0, false, {
                fileName: "app/routes/snop.supplyplan.jsx",
                lineNumber: 243,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { className: "py-3 ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex items-center mr-4 ", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex-1 min-w-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "text-sm font-medium text-gray-900 truncate dark:text-white", children: "Sites" }, void 0, false, {
                  fileName: "app/routes/snop.supplyplan.jsx",
                  lineNumber: 258,
                  columnNumber: 25
                }, this) }, void 0, false, {
                  fileName: "app/routes/snop.supplyplan.jsx",
                  lineNumber: 257,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "inline-flex items-center text-base font-semibold text-gray-900 dark:text-white", children: "5" }, void 0, false, {
                  fileName: "app/routes/snop.supplyplan.jsx",
                  lineNumber: 262,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/snop.supplyplan.jsx",
                lineNumber: 256,
                columnNumber: 21
              }, this) }, void 0, false, {
                fileName: "app/routes/snop.supplyplan.jsx",
                lineNumber: 255,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { className: "py-3 ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex items-center mr-4 ", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex-1 min-w-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "text-sm font-medium text-gray-900 truncate dark:text-white", children: "Suppliers" }, void 0, false, {
                  fileName: "app/routes/snop.supplyplan.jsx",
                  lineNumber: 271,
                  columnNumber: 25
                }, this) }, void 0, false, {
                  fileName: "app/routes/snop.supplyplan.jsx",
                  lineNumber: 270,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "inline-flex items-center text-base font-semibold text-gray-900 dark:text-white", children: "432" }, void 0, false, {
                  fileName: "app/routes/snop.supplyplan.jsx",
                  lineNumber: 275,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/snop.supplyplan.jsx",
                lineNumber: 269,
                columnNumber: 21
              }, this) }, void 0, false, {
                fileName: "app/routes/snop.supplyplan.jsx",
                lineNumber: 268,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/snop.supplyplan.jsx",
              lineNumber: 242,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ArcGauge, { style: gaugeStyles, value, centerRender: centerRenderer }, void 0, false, {
              fileName: "app/routes/snop.supplyplan.jsx",
              lineNumber: 283,
              columnNumber: 19
            }, this) }, void 0, false, {
              fileName: "app/routes/snop.supplyplan.jsx",
              lineNumber: 282,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/snop.supplyplan.jsx",
            lineNumber: 241,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/snop.supplyplan.jsx",
          lineNumber: 234,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "rounded-lg bg-white border shadow-xl shadow-slate-900/10  m-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "p-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h1", { className: "text-xl font-bold text-black", children: "Purchase Order Automation Percentage" }, void 0, false, {
            fileName: "app/routes/snop.supplyplan.jsx",
            lineNumber: 289,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/snop.supplyplan.jsx",
            lineNumber: 288,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "mx-4 grid grid-cols-2 gap-2", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("ul", { className: "divide-y divide-gray-200 dark:divide-gray-700 ", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { className: "py-3 ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex items-center mr-4 ", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex-1 min-w-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "text-sm font-medium text-gray-900 truncate dark:text-white", children: "Products" }, void 0, false, {
                  fileName: "app/routes/snop.supplyplan.jsx",
                  lineNumber: 298,
                  columnNumber: 25
                }, this) }, void 0, false, {
                  fileName: "app/routes/snop.supplyplan.jsx",
                  lineNumber: 297,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "inline-flex items-center text-base font-semibold text-gray-900 dark:text-white", children: "16,390" }, void 0, false, {
                  fileName: "app/routes/snop.supplyplan.jsx",
                  lineNumber: 302,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/snop.supplyplan.jsx",
                lineNumber: 296,
                columnNumber: 21
              }, this) }, void 0, false, {
                fileName: "app/routes/snop.supplyplan.jsx",
                lineNumber: 295,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { className: "py-3 ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex items-center mr-4 ", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex-1 min-w-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "text-sm font-medium text-gray-900 truncate dark:text-white", children: "Sites" }, void 0, false, {
                  fileName: "app/routes/snop.supplyplan.jsx",
                  lineNumber: 310,
                  columnNumber: 25
                }, this) }, void 0, false, {
                  fileName: "app/routes/snop.supplyplan.jsx",
                  lineNumber: 309,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "inline-flex items-center text-base font-semibold text-gray-900 dark:text-white", children: "5" }, void 0, false, {
                  fileName: "app/routes/snop.supplyplan.jsx",
                  lineNumber: 314,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/snop.supplyplan.jsx",
                lineNumber: 308,
                columnNumber: 21
              }, this) }, void 0, false, {
                fileName: "app/routes/snop.supplyplan.jsx",
                lineNumber: 307,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { className: "py-3 ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex items-center mr-4 ", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex-1 min-w-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "text-sm font-medium text-gray-900 truncate dark:text-white", children: "Suppliers" }, void 0, false, {
                  fileName: "app/routes/snop.supplyplan.jsx",
                  lineNumber: 323,
                  columnNumber: 25
                }, this) }, void 0, false, {
                  fileName: "app/routes/snop.supplyplan.jsx",
                  lineNumber: 322,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "inline-flex items-center text-base font-semibold text-gray-900 dark:text-white", children: "432" }, void 0, false, {
                  fileName: "app/routes/snop.supplyplan.jsx",
                  lineNumber: 327,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/snop.supplyplan.jsx",
                lineNumber: 321,
                columnNumber: 21
              }, this) }, void 0, false, {
                fileName: "app/routes/snop.supplyplan.jsx",
                lineNumber: 320,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/snop.supplyplan.jsx",
              lineNumber: 294,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ArcGauge, { style: gaugeStyles, value: value2, centerRender: centerRenderer }, void 0, false, {
              fileName: "app/routes/snop.supplyplan.jsx",
              lineNumber: 335,
              columnNumber: 19
            }, this) }, void 0, false, {
              fileName: "app/routes/snop.supplyplan.jsx",
              lineNumber: 334,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/snop.supplyplan.jsx",
            lineNumber: 293,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/snop.supplyplan.jsx",
          lineNumber: 287,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/snop.supplyplan.jsx",
        lineNumber: 76,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/snop.supplyplan.jsx",
      lineNumber: 70,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/snop.supplyplan.jsx",
    lineNumber: 60,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/snop.supplyplan.jsx",
    lineNumber: 59,
    columnNumber: 10
  }, this);
}
_c = TaskPage;
var _c;
$RefreshReg$(_c, "TaskPage");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  TaskPage as default
};
//# sourceMappingURL=/build/routes/snop.supplyplan-Y7T3IM2G.js.map
