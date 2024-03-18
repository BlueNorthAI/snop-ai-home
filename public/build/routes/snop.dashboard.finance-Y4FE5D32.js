import {
  WrapperMultiColumnChart
} from "/build/_shared/chunk-75NNQQDI.js";
import {
  Animation,
  CardLayout,
  It,
  getTabIndex,
  noop,
  qe
} from "/build/_shared/chunk-EIQCPSYD.js";
import "/build/_shared/chunk-CWIOTFXK.js";
import "/build/_shared/chunk-2HNBOA5V.js";
import "/build/_shared/chunk-CO7DHVOA.js";
import {
  WrapperMultiAreaChart
} from "/build/_shared/chunk-C66FNHZW.js";
import {
  WrapperMultiLineChart
} from "/build/_shared/chunk-FRUZNVUY.js";
import {
  WrapperMultiBarChart
} from "/build/_shared/chunk-WLAYZXF5.js";
import {
  GlobalizationContext,
  Popup,
  WatermarkOverlay,
  canUseDOM,
  classNames,
  provideIntlService,
  provideLocalizationService,
  registerForIntl,
  registerForLocalization,
  require_prop_types,
  shouldShowValidationUI,
  validatePackage
} from "/build/_shared/chunk-WAFXOQC7.js";
import {
  CheckIcon_default,
  ChevronDownIcon_default,
  ClipboardDocumentCheckIcon_default,
  DocumentArrowDownIcon_default,
  ShareIcon_default
} from "/build/_shared/chunk-Y4SZVV5C.js";
import "/build/_shared/chunk-ELWJTL4F.js";
import "/build/_shared/chunk-NON4LQMM.js";
import {
  require_react_dom
} from "/build/_shared/chunk-GIAAE3CH.js";
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

// app/routes/snop.dashboard.finance.jsx
var import_react = __toESM(require_react());

// node_modules/@progress/kendo-react-common/dist/es/browser-support.service.js
var getDocument = function() {
  return typeof document !== "undefined" ? document : {};
};
var BrowserSupportService = (
  /** @class */
  function() {
    function BrowserSupportService2() {
      this.scrollbar = 0;
    }
    Object.defineProperty(BrowserSupportService2.prototype, "scrollbarWidth", {
      get: function() {
        var document2 = getDocument();
        if (!this.scrollbar && document2 && document2.createElement) {
          var div = document2.createElement("div");
          div.style.cssText = "overflow:scroll;overflow-x:hidden;zoom:1;clear:both;display:block";
          div.innerHTML = "&nbsp;";
          document2.body.appendChild(div);
          this.scrollbar = div.offsetWidth - div.scrollWidth;
          document2.body.removeChild(div);
        }
        return this.scrollbar;
      },
      enumerable: false,
      configurable: true
    });
    return BrowserSupportService2;
  }()
);

// node_modules/@progress/kendo-react-common/dist/es/constants/index.js
var FIELD_REGEX = /\[(?:(\d+)|['"](.*?)['"])\]|((?:(?!\[.*?\]|\.).)+)/g;

// node_modules/@progress/kendo-react-common/dist/es/fieldList.js
function fieldList(field) {
  var fields = [];
  field.replace(FIELD_REGEX, function(_match, index, indexAccessor, fieldName) {
    fields.push(index !== void 0 ? index : indexAccessor || fieldName);
  });
  return fields;
}

// node_modules/@progress/kendo-react-common/dist/es/getter.js
var getterCache = {};
getterCache.undefined = function() {
  return void 0;
};
function getter(field) {
  if (getterCache[field]) {
    return getterCache[field];
  }
  var fields = fieldList(field);
  getterCache[field] = function(obj) {
    var result = obj;
    for (var idx = 0; idx < fields.length && result; idx++) {
      result = result[fields[idx]];
    }
    return result;
  };
  return getterCache[field];
}

// node_modules/@progress/kendo-react-common/dist/es/guid.js
var guid = function() {
  var id = "";
  var i;
  var random;
  for (i = 0; i < 32; i++) {
    random = Math.random() * 16 | 0;
    if (i === 8 || i === 12 || i === 16 || i === 20) {
      id += "-";
    }
    id += (i === 12 ? 4 : i === 16 ? random & 3 | 8 : random).toString(16);
  }
  return id;
};

// node_modules/@progress/kendo-react-common/dist/es/keys.js
var Keys = {
  backspace: 8,
  tab: 9,
  enter: 13,
  shift: 16,
  esc: 27,
  space: 32,
  pageUp: 33,
  pageDown: 34,
  end: 35,
  home: 36,
  left: 37,
  up: 38,
  right: 39,
  down: 40,
  delete: 46
};

// node_modules/@progress/kendo-react-common/dist/es/scrollbarWidth.js
var getScrollbarWidth = function() {
  if (!canUseDOM || !document.body) {
    return false;
  }
  var scrollbarWidth = new BrowserSupportService().scrollbarWidth;
  return scrollbarWidth;
};
var setScrollbarWidth = function() {
  if (!canUseDOM || !document.body) {
    return false;
  }
  var scrollbarWidth = new BrowserSupportService().scrollbarWidth;
  document.body.style.setProperty("--kendo-scrollbar-width", "".concat(scrollbarWidth, "px"));
};

// node_modules/@progress/kendo-react-common/dist/es/hasRelativeStackingContext.js
var hasRelativeStackingContext = function(elementSource) {
  if (!canUseDOM) {
    return false;
  }
  var currentDocument = elementSource ? elementSource.ownerDocument : document;
  if (!currentDocument || !currentDocument.body) {
    return false;
  }
  var top = 10;
  var parent = currentDocument.createElement("div");
  parent.style.transform = "matrix(10, 0, 0, 10, 0, 0)";
  var child = currentDocument.createElement("div");
  child.appendChild(currentDocument.createTextNode("child"));
  child.style.position = "fixed";
  child.style.top = top + "px";
  parent.appendChild(child);
  currentDocument.body.appendChild(parent);
  var isDifferent = child.getBoundingClientRect().top !== top;
  currentDocument.body.removeChild(parent);
  return isDifferent;
};

// node_modules/@progress/kendo-react-common/dist/es/events/dispatchEvent.js
function dispatchEvent(eventHandler, dispatchedEvent, target, eventData) {
  if (eventHandler) {
    var eventBaseData = {
      syntheticEvent: dispatchedEvent,
      nativeEvent: dispatchedEvent.nativeEvent,
      target
    };
    eventHandler.call(void 0, Object.assign(eventBaseData, eventData));
  }
}

// node_modules/@progress/kendo-react-common/dist/es/hocs/AsyncFocusBlur.js
var React2 = __toESM(require_react());

// node_modules/@progress/kendo-react-common/dist/es/hooks/useAsyncFocusBlur.js
var React = __toESM(require_react());
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
function useAsyncFocusBlur(_a14) {
  var onFocus2 = _a14.onFocus, onBlur = _a14.onBlur, onSyncFocus = _a14.onSyncFocus, onSyncBlur = _a14.onSyncBlur;
  var focused = React.useRef(false);
  var tick = React.useRef(0);
  var nextTick = React.useCallback(function(f) {
    clearTimeout(tick.current);
    tick.current = window.setTimeout(function() {
      return f();
    });
  }, [tick]);
  var handleFocus = React.useCallback(function() {
    var event = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      event[_i] = arguments[_i];
    }
    clearTimeout(tick.current);
    if (onSyncFocus) {
      onSyncFocus.call(void 0, event[0]);
    }
    if (focused.current) {
      return;
    }
    ;
    focused.current = true;
    if (onFocus2) {
      onFocus2.call.apply(onFocus2, __spreadArray([void 0], event, false));
    }
  }, [focused, onFocus2, onSyncFocus]);
  var handleBlur = React.useCallback(function() {
    var event = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      event[_i] = arguments[_i];
    }
    if (onSyncBlur) {
      onSyncBlur.call(void 0, event[0]);
    }
    nextTick(function() {
      if (!focused.current) {
        return;
      }
      if (onBlur) {
        focused.current = false;
        onBlur.call.apply(onBlur, __spreadArray([void 0], event, false));
      }
    });
  }, [focused, nextTick, onBlur, onSyncBlur]);
  React.useEffect(function() {
    return function() {
      clearTimeout(tick.current);
    };
  }, []);
  return {
    onFocus: handleFocus,
    onBlur: handleBlur
  };
}

// node_modules/@progress/kendo-react-common/dist/es/hocs/AsyncFocusBlur.js
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
var AsyncFocusBlur = function(_a14) {
  var children = _a14.children, onFocus2 = _a14.onFocus, onBlur = _a14.onBlur, onSyncFocus = _a14.onSyncFocus, onSyncBlur = _a14.onSyncBlur;
  var args = useAsyncFocusBlur({ onFocus: onFocus2, onBlur, onSyncFocus, onSyncBlur });
  return React2.createElement(React2.Fragment, null, children.call(void 0, __assign({}, args)));
};

// node_modules/@progress/kendo-react-common/dist/es/hocs/withPropsContext.js
var React4 = __toESM(require_react());

// node_modules/@progress/kendo-react-common/dist/es/hooks/usePropsContext.js
var React3 = __toESM(require_react());
var usePropsContext = function(context, props) {
  var contextPropsCallback = React3.useContext(context);
  var contextProps = contextPropsCallback(props);
  return contextProps;
};

// node_modules/@progress/kendo-react-common/dist/es/hocs/withPropsContext.js
var __assign2 = function() {
  __assign2 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign2.apply(this, arguments);
};
var createPropsContext = function() {
  return React4.createContext(function(props) {
    return props;
  });
};
var withPropsContext = function(context, Component42) {
  return React4.forwardRef(function(props, ref) {
    var contextProps = usePropsContext(context, props);
    return React4.createElement(Component42, __assign2({}, contextProps, { ref }));
  });
};

// node_modules/@progress/kendo-react-common/dist/es/hooks/useMouse.js
var React5 = __toESM(require_react());
var useMouse = function(props, target, extend) {
  if (extend === void 0) {
    extend = {};
  }
  var handleMouseDown = React5.useCallback(function(event) {
    if (extend.onMouseDown) {
      extend.onMouseDown.call(void 0, event);
    }
    if (props.onMouseDown) {
      props.onMouseDown.call(void 0, {
        target: target.current,
        syntheticEvent: event
      });
    }
  }, [extend.onMouseDown, props.onMouseDown, target]);
  var handleMouseUp = React5.useCallback(function(event) {
    if (extend.onMouseUp) {
      extend.onMouseUp.call(void 0, event);
    }
    if (props.onMouseUp) {
      props.onMouseUp.call(void 0, {
        target: target.current,
        syntheticEvent: event
      });
    }
  }, [extend.onMouseUp, props.onMouseUp, target]);
  var handleClick = React5.useCallback(function(event) {
    if (extend.onClick) {
      extend.onClick.call(void 0, event);
    }
    if (props.onClick) {
      props.onClick.call(void 0, {
        target: target.current,
        syntheticEvent: event
      });
    }
  }, [extend.onClick, props.onClick, target]);
  var handleDoubleClick = React5.useCallback(function(event) {
    if (extend.onDoubleClick) {
      extend.onDoubleClick.call(void 0, event);
    }
    if (props.onDoubleClick) {
      props.onDoubleClick.call(void 0, {
        target: target.current,
        syntheticEvent: event
      });
    }
  }, [extend.onDoubleClick, props.onDoubleClick, target]);
  var handleMouseEnter = React5.useCallback(function(event) {
    if (extend.onMouseEnter) {
      extend.onMouseEnter.call(void 0, event);
    }
    if (props.onMouseEnter) {
      props.onMouseEnter.call(void 0, {
        target: target.current,
        syntheticEvent: event
      });
    }
  }, [extend.onMouseEnter, props.onMouseEnter, target]);
  var handleMouseLeave = React5.useCallback(function(event) {
    if (extend.onMouseLeave) {
      extend.onMouseLeave.call(void 0, event);
    }
    if (props.onMouseLeave) {
      props.onMouseLeave.call(void 0, {
        target: target.current,
        syntheticEvent: event
      });
    }
  }, [extend.onMouseLeave, props.onMouseLeave, target]);
  var handelMouseMove = React5.useCallback(function(event) {
    if (extend.onMouseMove) {
      extend.onMouseMove.call(void 0, event);
    }
    if (props.onMouseMove) {
      props.onMouseMove.call(void 0, {
        target: target.current,
        syntheticEvent: event
      });
    }
  }, [extend.onMouseMove, props.onMouseMove, target]);
  var handleMouseOut = React5.useCallback(function(event) {
    if (extend.onMouseOut) {
      extend.onMouseOut.call(void 0, event);
    }
    if (props.onMouseOut) {
      props.onMouseOut.call(void 0, {
        target: target.current,
        syntheticEvent: event
      });
    }
  }, [extend.onMouseOut, props.onMouseOut, target]);
  var handleMouseOver = React5.useCallback(function(event) {
    if (extend.onMouseOver) {
      extend.onMouseOver.call(void 0, event);
    }
    if (props.onMouseOver) {
      props.onMouseOver.call(void 0, {
        target: target.current,
        syntheticEvent: event
      });
    }
  }, [extend.onMouseOver, props.onMouseOver, target]);
  return {
    onClick: handleClick,
    onMouseUp: handleMouseUp,
    onMouseDown: handleMouseDown,
    onDoubleClick: handleDoubleClick,
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
    onMouseMove: handelMouseMove,
    onMouseOut: handleMouseOut,
    onMouseOver: handleMouseOver
  };
};

// node_modules/@progress/kendo-react-common/dist/es/hooks/useCustomComponent.js
var useCustomComponent = function(comp) {
  return [comp, {}];
};

// node_modules/@progress/kendo-react-common/dist/es/hooks/useDocument.js
var React6 = __toESM(require_react());
var useDocument = function(ref) {
  var getElement = React6.useCallback(function() {
    return ref.current && ref.current.element ? ref.current.element : ref.current;
  }, [ref]);
  var getDocument3 = React6.useCallback(function() {
    var element2 = getElement();
    return element2 ? element2.ownerDocument || document : document;
  }, [getElement]);
  return getDocument3;
};

// node_modules/@progress/kendo-react-common/dist/es/icons/Icon.js
var React7 = __toESM(require_react());
var PropTypes = __toESM(require_prop_types());

// node_modules/@progress/kendo-react-common/dist/es/icons/constants.js
var SIZE_CLASSES = {
  "default": "",
  "xsmall": "k-icon-xs",
  "small": "k-icon-sm",
  "medium": "k-icon-md",
  "large": "k-icon-lg",
  "xlarge": "k-icon-xl",
  "xxlarge": "k-icon-xxl",
  "xxxlarge": "k-icon-xxxl"
};

// node_modules/@progress/kendo-react-common/dist/es/icons/Icon.js
var __assign3 = function() {
  __assign3 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign3.apply(this, arguments);
};
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
var Icon = React7.forwardRef(function(props, ref) {
  var className = props.className, name = props.name, themeColor = props.themeColor, size = props.size, flip = props.flip, style = props.style, id = props.id, tabIndex = props.tabIndex, others = __rest(props, ["className", "name", "themeColor", "size", "flip", "style", "id", "tabIndex"]);
  var target = React7.useRef(null);
  var elementRef = React7.useRef(null);
  React7.useImperativeHandle(target, function() {
    return {
      element: elementRef.current
    };
  });
  React7.useImperativeHandle(ref, function() {
    return target.current;
  });
  var sizeProp = React7.useMemo(function() {
    return size || defaultProps.size;
  }, [size]);
  var flipProp = React7.useMemo(function() {
    return flip || defaultProps.flip;
  }, [flip]);
  var fontClassNames = React7.useMemo(function() {
    var _a14;
    return classNames("k-icon", "k-font-icon", name && toIconClass(name), (_a14 = {}, _a14["k-color-".concat(themeColor)] = themeColor, _a14["k-flip-h"] = flipProp === "horizontal" || flipProp === "both", _a14["k-flip-v"] = flipProp === "vertical" || flipProp === "both", _a14), SIZE_CLASSES[sizeProp], className);
  }, [name, themeColor, sizeProp, flipProp, className]);
  var mouseProps = useMouse(props, target);
  return React7.createElement("span", __assign3({ ref: elementRef }, others, mouseProps, { className: fontClassNames, id, tabIndex, style, role: "presentation" }));
});
Icon.propTypes = {
  style: PropTypes.object,
  classNames: PropTypes.string,
  name: PropTypes.string,
  themeColor: PropTypes.oneOf([
    "inherit",
    "primary",
    "secondary",
    "tertiary",
    "info",
    "success",
    "error",
    "warning",
    "dark",
    "light",
    "inverse"
  ]),
  size: PropTypes.oneOf(["default", "xsmall", "small", "medium", "large", "xlarge", "xxlarge", "xxxlarge"]),
  flip: PropTypes.oneOf(["default", "horizontal", "vertical", "both"])
};
var defaultProps = {
  size: "default",
  flip: "default"
};
Icon.displayName = "KendoIcon";

// node_modules/@progress/kendo-react-common/dist/es/icons/SvgIcon.js
var React8 = __toESM(require_react());
var PropTypes2 = __toESM(require_prop_types());
var __assign4 = function() {
  __assign4 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign4.apply(this, arguments);
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
var SvgIcon = React8.forwardRef(function(props, ref) {
  var children = props.children, className = props.className, svgClassName = props.svgClassName, icon = props.icon, flip = props.flip, id = props.id, tabIndex = props.tabIndex, size = props.size, style = props.style, svgStyle = props.svgStyle, themeColor = props.themeColor, viewBox = props.viewBox, name = props.name, onClick = props.onClick, others = __rest2(props, ["children", "className", "svgClassName", "icon", "flip", "id", "tabIndex", "size", "style", "svgStyle", "themeColor", "viewBox", "name", "onClick"]);
  var elementRef = React8.useRef(null);
  React8.useImperativeHandle(ref, function() {
    return {
      element: elementRef.current
    };
  });
  var iconNameProp = React8.useMemo(function() {
    return icon ? icon.name : defaultProps2.icon;
  }, [icon]);
  var sizeProp = React8.useMemo(function() {
    return size || defaultProps2.size;
  }, [size]);
  var flipProp = React8.useMemo(function() {
    return flip || defaultProps2.flip;
  }, [flip]);
  var viewBoxProp = React8.useMemo(function() {
    return viewBox || defaultProps2.viewBox;
  }, [viewBox]);
  var elementClassNames = React8.useMemo(function() {
    var _a14;
    return classNames("k-icon", "k-svg-icon", "k-svg-i-" + iconNameProp, (_a14 = {}, _a14["k-color-".concat(themeColor)] = themeColor, _a14["k-flip-h"] = flipProp === "horizontal" || flipProp === "both", _a14["k-flip-v"] = flipProp === "vertical" || flipProp === "both", _a14), SIZE_CLASSES[sizeProp], className);
  }, [iconNameProp, themeColor, sizeProp, flipProp, className]);
  var elementStyle = React8.useMemo(function() {
    if (props.width && props.height) {
      return __assign4({ width: props.width, height: props.height }, style);
    } else if (props.width) {
      return __assign4({ width: props.width, height: props.width }, style);
    } else if (props.height) {
      return __assign4({ width: props.height, height: props.height }, style);
    } else {
      return __assign4({}, style);
    }
  }, [props.width, props.height, style]);
  return React8.createElement(
    "span",
    { className: elementClassNames, style: elementStyle, ref: elementRef, onClick },
    React8.createElement("svg", __assign4({ id, className: svgClassName, style: svgStyle, "aria-hidden": true, tabIndex, focusable: false, xmlns: "http://www.w3.org/2000/svg", viewBox: icon ? icon.viewBox : viewBoxProp, dangerouslySetInnerHTML: icon ? { __html: icon.content } : void 0 }, others), icon ? void 0 : children)
  );
});
SvgIcon.propTypes = {
  style: PropTypes2.object,
  classNames: PropTypes2.string,
  children: PropTypes2.any,
  icon: PropTypes2.object,
  themeColor: PropTypes2.oneOf([
    "inherit",
    "primary",
    "secondary",
    "tertiary",
    "info",
    "success",
    "error",
    "warning",
    "dark",
    "light",
    "inverse"
  ]),
  size: PropTypes2.oneOf(["default", "xsmall", "small", "medium", "large", "xlarge", "xxlarge", "xxxlarge"]),
  flip: PropTypes2.oneOf(["default", "horizontal", "vertical", "both"])
};
var defaultProps2 = {
  size: "default",
  flip: "default",
  icon: "",
  viewBox: "0 0 24 24"
};
SvgIcon.displayName = "KendoSvgIcon";

// node_modules/@progress/kendo-react-common/dist/es/icons/IconWrap.js
var React10 = __toESM(require_react());

// node_modules/@progress/kendo-react-common/dist/es/icons/IconsContext.js
var React9 = __toESM(require_react());
var IconsContext = React9.createContext({ type: "svg" });
IconsContext.displayName = "KendoReactIconsContext";

// node_modules/@progress/kendo-react-common/dist/es/icons/IconWrap.js
var __assign5 = function() {
  __assign5 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign5.apply(this, arguments);
};
var __rest3 = function(s, e) {
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
var IconWrap = React10.forwardRef(function(props, ref) {
  var _a14, _b3;
  var _c6 = React10.useContext(IconsContext), type = _c6.type, icons = _c6.icons;
  var icon = props.icon, fontIconProps = __rest3(props, ["icon"]);
  var name = type === "svg" ? ((_a14 = props.icon) === null || _a14 === void 0 ? void 0 : _a14.name) || props.name : props.name || ((_b3 = props.icon) === null || _b3 === void 0 ? void 0 : _b3.name);
  name = name && icons && icons[name] && typeof icons[name] === "string" ? icons[name] : name;
  var svg = name && icons && icons[name] && typeof icons[name] !== "string" ? icons[name] : icon;
  return type === "svg" && svg ? React10.createElement(SvgIcon, __assign5({}, props, { icon: svg, ref })) : React10.createElement(Icon, __assign5({}, fontIconProps, { name, ref }));
});
IconWrap.displayName = "KendoIconWrap";

// node_modules/@progress/kendo-react-common/dist/es/icons/utils.js
var PropTypes3 = __toESM(require_prop_types());
var toIconClass = function(name) {
  return "k-i-" + name;
};
var svgIconPropType = PropTypes3.shape({
  name: PropTypes3.string.isRequired,
  content: PropTypes3.string.isRequired,
  viewBox: PropTypes3.string.isRequired
});

// node_modules/@progress/kendo-react-common/dist/es/hooks/useDraggable.js
var React13 = __toESM(require_react());

// node_modules/@progress/kendo-draggable-common/dist/es/algorithms/intersect.js
var getRatio = function(element2, target) {
  var elementRect = element2.getBoundingClientRect();
  var targetRect = target.getBoundingClientRect();
  var top = Math.max(targetRect.top, elementRect.top);
  var left2 = Math.max(targetRect.left, elementRect.left);
  var right2 = Math.min(targetRect.left + targetRect.width, elementRect.left + elementRect.width);
  var bottom = Math.min(targetRect.top + targetRect.height, elementRect.top + elementRect.height);
  var width = right2 - left2;
  var height = bottom - top;
  if (left2 < right2 && top < bottom) {
    var targetArea = targetRect.width * targetRect.height;
    var entryArea = elementRect.width * elementRect.height;
    var intersectionArea = width * height;
    var intersectionRatio = intersectionArea / (targetArea + entryArea - intersectionArea);
    return Number(intersectionRatio.toFixed(4));
  }
  return 0;
};
var intersect = function(element2, candidates) {
  var max = 0;
  var result = null;
  candidates.forEach(function(candidate) {
    if (candidate && element2) {
      var ration = getRatio(element2, candidate);
      if (ration > max) {
        max = ration;
        result = candidate;
      }
    }
  });
  return result;
};

// node_modules/@progress/kendo-draggable-common/dist/es/utils/index.js
var detectBrowser = function() {
  var ua = window && window.navigator.userAgent;
  if (!ua) {
    return false;
  }
  var browser = false;
  var match = [];
  var browserRxs = {
    edge: /(edge)[ \/]([\w.]+)/i,
    webkit: /(chrome|crios)[ \/]([\w.]+)/i,
    safari: /(webkit)[ \/]([\w.]+)/i,
    opera: /(opera)(?:.*version|)[ \/]([\w.]+)/i,
    msie: /(msie\s|trident.*? rv:)([\w.]+)/i,
    mozilla: /(mozilla)(?:.*? rv:([\w.]+)|)/i
  };
  for (var agent in browserRxs) {
    if (browserRxs.hasOwnProperty(agent)) {
      match = ua.match(browserRxs[agent]);
      if (match) {
        browser = {};
        browser[agent] = true;
        browser[match[1].toLowerCase().split(" ")[0].split("/")[0]] = true;
        browser.version = parseInt(document.DOCUMENT_NODE || match[2], 10);
        break;
      }
    }
  }
  return browser;
};
var getDocument2 = function(element2) {
  return element2 ? element2.ownerDocument || window.document : window.document;
};
var getWindow = function(element2) {
  var document2 = getDocument2(element2);
  return document2 ? document2.defaultView || window : window;
};
var scrollableRoot = function(element2) {
  var support = { browser: detectBrowser() };
  var document2 = getDocument2(element2);
  return support.browser.edge || support.browser.safari ? document2.body : document2.documentElement;
};
var isScrollable = function(el) {
  if (el && el.className && typeof el.className === "string" && el.className.indexOf("k-auto-scrollable") > -1) {
    return true;
  }
  var overflow = window.getComputedStyle(el, "overflow").overflow;
  return overflow.indexOf("auto") > -1 || overflow.indexOf("scroll") > -1;
};
var getScrollableParent = function(el) {
  var root = scrollableRoot(el);
  if (!el || el === document.body || el === document.documentElement) {
    return root;
  }
  var parent = el;
  while (parent && parent !== document.body && parent.nodeType !== Node.DOCUMENT_FRAGMENT_NODE && parent.nodeType !== Node.DOCUMENT_NODE && !isScrollable(parent)) {
    parent = parent.parentNode;
  }
  if (parent && (parent === document.body || parent.nodeType === Node.DOCUMENT_FRAGMENT_NODE)) {
    return root;
  }
  return parent;
};
var autoScrollVelocity = function(mouseX, mouseY, rect) {
  var velocity = { x: 0, y: 0 };
  var AUTO_SCROLL_AREA = 50;
  if (mouseX - rect.left < AUTO_SCROLL_AREA) {
    velocity.x = -(AUTO_SCROLL_AREA - (mouseX - rect.left));
  } else if (rect.right - mouseX < AUTO_SCROLL_AREA) {
    velocity.x = AUTO_SCROLL_AREA - (rect.right - mouseX);
  }
  if (mouseY - rect.top < AUTO_SCROLL_AREA) {
    velocity.y = -(AUTO_SCROLL_AREA - (mouseY - rect.top));
  } else if (rect.bottom - mouseY < AUTO_SCROLL_AREA) {
    velocity.y = AUTO_SCROLL_AREA - (rect.bottom - mouseY);
  }
  return velocity;
};
var scrollableViewPort = function(el, window2) {
  var root = scrollableRoot(el);
  if (el === root) {
    return {
      top: root.scrollTop,
      left: root.scrollLeft,
      bottom: root.scrollTop + window2.innerHeight,
      right: root.scrollLeft + window2.innerWidth
    };
  } else {
    var rect = el.getBoundingClientRect();
    return {
      bottom: rect.top + rect.height,
      right: rect.left + rect.width,
      left: rect.left,
      top: rect.top
    };
  }
};
var isPointerInsideContainer = function(x, y, container) {
  var rect = container.getBoundingClientRect();
  return rect.top <= y && rect.left <= x && y <= rect.bottom && x <= rect.right;
};

// node_modules/@progress/kendo-draggable-common/dist/es/drag-n-drop.js
var DRAG_AND_DROP_DISPATCH_ACTION;
(function(DRAG_AND_DROP_DISPATCH_ACTION2) {
  DRAG_AND_DROP_DISPATCH_ACTION2["POINTER_DOWN"] = "pointerdown";
  DRAG_AND_DROP_DISPATCH_ACTION2["POINTER_MOVE"] = "pointermove";
  DRAG_AND_DROP_DISPATCH_ACTION2["POINTER_UP"] = "pointerup";
  DRAG_AND_DROP_DISPATCH_ACTION2["POINTER_CANCEL"] = "pointercancel";
  DRAG_AND_DROP_DISPATCH_ACTION2["MOUSE_DOWN"] = "mousedown";
  DRAG_AND_DROP_DISPATCH_ACTION2["MOUSE_MOVE"] = "mousemove";
  DRAG_AND_DROP_DISPATCH_ACTION2["MOUSE_UP"] = "mouseup";
  DRAG_AND_DROP_DISPATCH_ACTION2["CONTEXT_MENU"] = "contextmenu";
  DRAG_AND_DROP_DISPATCH_ACTION2["TOUCH_START"] = "touchstart";
  DRAG_AND_DROP_DISPATCH_ACTION2["TOUCH_MOVE"] = "touchmove";
  DRAG_AND_DROP_DISPATCH_ACTION2["TOUCH_END"] = "touchend";
  DRAG_AND_DROP_DISPATCH_ACTION2["TOUCH_CANCEL"] = "touchcancel";
  DRAG_AND_DROP_DISPATCH_ACTION2["SCROLL"] = "scroll";
  DRAG_AND_DROP_DISPATCH_ACTION2["START"] = "KENDO_DRAG_AND_DROP_START";
  DRAG_AND_DROP_DISPATCH_ACTION2["MOVE"] = "KENDO_DRAG_AND_DROP_MOVE";
  DRAG_AND_DROP_DISPATCH_ACTION2["END"] = "KENDO_DRAG_AND_DROP_END";
  DRAG_AND_DROP_DISPATCH_ACTION2["CANCEL"] = "KENDO_DRAG_AND_DROP_CANCEL";
})(DRAG_AND_DROP_DISPATCH_ACTION || (DRAG_AND_DROP_DISPATCH_ACTION = {}));
var isTouchEvent = function(event) {
  return /^touch/.test(event.type);
};
var isScrollEvent = function(event) {
  return /^(scroll)/.test(event.type);
};
var normalizeEvent = function(event, state) {
  return isTouchEvent(event) ? {
    pageX: event.changedTouches[0].pageX,
    pageY: event.changedTouches[0].pageY,
    clientX: event.changedTouches[0].clientX,
    clientY: event.changedTouches[0].clientY,
    scrollX: state.scrollOffset.x,
    scrollY: state.scrollOffset.y,
    offsetX: state.offset.x,
    offsetY: state.offset.y,
    type: event.type,
    originalEvent: event,
    isTouch: true,
    altKey: false,
    ctrlKey: false,
    shiftKey: false,
    metaKey: false
  } : isScrollEvent(event) ? {
    pageX: state.pageOffset.x,
    pageY: state.pageOffset.y,
    clientX: state.clientOffset.x,
    clientY: state.clientOffset.y,
    scrollX: state.scrollOffset.x,
    scrollY: state.scrollOffset.y,
    offsetX: state.offset.x,
    offsetY: state.offset.y,
    type: event.type,
    originalEvent: event,
    altKey: false,
    ctrlKey: false,
    shiftKey: false,
    metaKey: false
  } : {
    pageX: event.pageX,
    pageY: event.pageY,
    clientX: event.clientX,
    clientY: event.clientY,
    offsetX: event.offsetX,
    offsetY: event.offsetY,
    scrollX: state.scrollOffset.x,
    scrollY: state.scrollOffset.y,
    type: event.type,
    ctrlKey: event.ctrlKey,
    shiftKey: event.shiftKey,
    altKey: event.altKey,
    metaKey: event.metaKey,
    originalEvent: event
  };
};
var noop2 = function() {
};
var dispatchDragAndDrop = function(state, action, callbacks) {
  if (callbacks === void 0) {
    callbacks = {};
  }
  var _a14 = callbacks.onIsPressedChange, onIsPressedChange = _a14 === void 0 ? noop2 : _a14, _b3 = callbacks.onIsScrollingChange, onIsScrollingChange = _b3 === void 0 ? noop2 : _b3, _c6 = callbacks.onVelocityChange, onVelocityChange = _c6 === void 0 ? noop2 : _c6, _d = callbacks.onOffsetChange, onOffsetChange = _d === void 0 ? noop2 : _d, _e = callbacks.onPageOffsetChange, onPageOffsetChange = _e === void 0 ? noop2 : _e, _f = callbacks.onClientOffsetChange, onClientOffsetChange = _f === void 0 ? noop2 : _f, _g = callbacks.onScrollOffsetChange, onScrollOffsetChange = _g === void 0 ? noop2 : _g, _h = callbacks.onInitialScrollOffsetChange, onInitialScrollOffsetChange = _h === void 0 ? noop2 : _h;
  var drag = action.payload;
  var element2 = drag.element;
  var hint = drag.hint;
  var autoScrollDirection = state.autoScrollDirection;
  var overrideScrollableParent = state.scrollableParent;
  var event = normalizeEvent(action.event, state);
  switch (event.type) {
    case DRAG_AND_DROP_DISPATCH_ACTION.POINTER_DOWN:
      if (event.type === DRAG_AND_DROP_DISPATCH_ACTION.POINTER_DOWN && (!event.originalEvent.isPrimary || event.originalEvent.button !== 0)) {
        break;
      }
    case DRAG_AND_DROP_DISPATCH_ACTION.MOUSE_DOWN:
      if (event.type === DRAG_AND_DROP_DISPATCH_ACTION.MOUSE_DOWN && (event.originalEvent.which && event.originalEvent.which > 1) || state.ignoreMouse) {
        break;
      }
    case DRAG_AND_DROP_DISPATCH_ACTION.TOUCH_START:
      if (event.type === DRAG_AND_DROP_DISPATCH_ACTION.TOUCH_START && event.originalEvent.touches.length !== 1) {
        break;
      }
    case DRAG_AND_DROP_DISPATCH_ACTION.START: {
      var scrollableParent_1 = overrideScrollableParent || getScrollableParent(action.payload.element);
      onInitialScrollOffsetChange(scrollableParent_1 instanceof Window ? { x: scrollableParent_1.scrollX, y: scrollableParent_1.scrollY } : { x: scrollableParent_1.scrollLeft, y: scrollableParent_1.scrollTop });
      onClientOffsetChange({
        x: event.clientX,
        y: event.clientY
      });
      onPageOffsetChange({
        x: event.pageX,
        y: event.pageY
      });
      onOffsetChange({
        x: event.offsetX,
        y: event.offsetY
      });
      onIsPressedChange(true);
      if (drag.onPress) {
        drag.onPress(event);
      }
      break;
    }
    case DRAG_AND_DROP_DISPATCH_ACTION.SCROLL:
      if (event.type === DRAG_AND_DROP_DISPATCH_ACTION.SCROLL && !state.pressed) {
        break;
      }
      var scrollableParent = overrideScrollableParent || getScrollableParent(element2);
      var scrollOffset = scrollableParent instanceof Window ? { x: scrollableParent.scrollX, y: scrollableParent.scrollY } : { x: scrollableParent.scrollLeft, y: scrollableParent.scrollTop };
      event.scrollX = scrollOffset.x - state.initialScrollOffset.x;
      event.scrollY = scrollOffset.y - state.initialScrollOffset.y;
      onScrollOffsetChange({
        x: event.scrollX,
        y: event.scrollY
      });
    case DRAG_AND_DROP_DISPATCH_ACTION.POINTER_MOVE:
      if (event.type === DRAG_AND_DROP_DISPATCH_ACTION.POINTER_MOVE && !event.originalEvent.isPrimary) {
        break;
      }
    case DRAG_AND_DROP_DISPATCH_ACTION.MOUSE_MOVE:
    case DRAG_AND_DROP_DISPATCH_ACTION.TOUCH_MOVE:
      if (event.type === DRAG_AND_DROP_DISPATCH_ACTION.TOUCH_MOVE && event.originalEvent.touches.length !== 1) {
        break;
      }
    case DRAG_AND_DROP_DISPATCH_ACTION.MOVE: {
      if (state.pressed) {
        if (state.autoScroll && event.originalEvent.type !== "scroll") {
          if (element2) {
            var document_1 = getDocument2(element2);
            var scrollableParent_2 = overrideScrollableParent || getScrollableParent(document_1.elementFromPoint(event.clientX, event.clientY));
            var newVelocity = autoScrollVelocity(event.clientX, event.clientY, scrollableViewPort(scrollableParent_2, getWindow(element2)));
            onVelocityChange({
              x: autoScrollDirection && autoScrollDirection.horizontal === false ? 0 : newVelocity.x,
              y: autoScrollDirection && autoScrollDirection.vertical === false ? 0 : newVelocity.y
            });
            onIsScrollingChange(newVelocity.y !== 0 || newVelocity.x !== 0);
          }
        }
        if (!state.drag && drag.onDragStart) {
          drag.onDragStart(event);
        }
        if (drag.onDrag) {
          drag.onDrag(event);
        }
        var dropElement_1 = intersect(hint || element2, state.drops.map(function(drop2) {
          return drop2 && drop2.element;
        }).filter(function(d) {
          return d !== (hint || element2);
        }));
        var drop = state.drops.find(function(drop2) {
          return drop2.element === dropElement_1;
        });
        if (drop && dropElement_1 && isPointerInsideContainer(event.clientX, event.clientY, overrideScrollableParent || getScrollableParent(dropElement_1)) && dropElement_1 !== element2) {
          if ((state.drop && state.drop.element) !== dropElement_1) {
            if (state.drop && state.drop.onDragLeave) {
              state.drop.onDragLeave(event);
            }
            if (drop.onDragEnter) {
              drop.onDragEnter(event);
            }
          } else {
            if (drop.onDragOver) {
              drop.onDragOver(event);
            }
          }
        } else if (state.drop && state.drop.onDragLeave) {
          state.drop.onDragLeave(event);
        }
      }
      onClientOffsetChange({
        x: event.clientX,
        y: event.clientY
      });
      onPageOffsetChange({
        x: event.pageX,
        y: event.pageY
      });
      break;
    }
    case DRAG_AND_DROP_DISPATCH_ACTION.POINTER_UP:
      if (event.type === DRAG_AND_DROP_DISPATCH_ACTION.POINTER_UP && !event.originalEvent.isPrimary) {
        break;
      }
    case DRAG_AND_DROP_DISPATCH_ACTION.MOUSE_UP:
    case DRAG_AND_DROP_DISPATCH_ACTION.TOUCH_END:
      if (event.type === DRAG_AND_DROP_DISPATCH_ACTION.TOUCH_END && event.originalEvent.touches.length !== 1) {
        break;
      }
    case DRAG_AND_DROP_DISPATCH_ACTION.END: {
      onIsPressedChange(false);
      onIsScrollingChange(false);
      onScrollOffsetChange({ x: 0, y: 0 });
      if (drag.onRelease) {
        drag.onRelease(event);
      }
      if (state.drop && state.drop.onDrop) {
        state.drop.onDrop(event);
      }
      if (state.drag && drag.onDragEnd) {
        drag.onDragEnd(event);
      }
      break;
    }
    case DRAG_AND_DROP_DISPATCH_ACTION.POINTER_CANCEL:
    case DRAG_AND_DROP_DISPATCH_ACTION.CONTEXT_MENU:
    case DRAG_AND_DROP_DISPATCH_ACTION.TOUCH_CANCEL:
    case DRAG_AND_DROP_DISPATCH_ACTION.CANCEL: {
      onIsPressedChange(false);
      onIsScrollingChange(false);
      onScrollOffsetChange({ x: 0, y: 0 });
      if (drag.onDragEnd) {
        drag.onDragEnd(event);
      }
      if (state.drop && state.drop.onDragLeave) {
        state.drop.onDragLeave(event);
      }
      break;
    }
    default:
      break;
  }
};

// node_modules/@progress/kendo-draggable-common/dist/es/auto-scroll.js
var autoScroll = function(scrollableParent, vel) {
  if (!scrollableParent) {
    return;
  }
  var yIsScrollable;
  var xIsScrollable;
  var isRootNode = scrollableParent === scrollableRoot(scrollableParent);
  if (isRootNode) {
    yIsScrollable = document.body.scrollHeight > window.innerHeight;
    xIsScrollable = document.body.scrollWidth > window.innerWidth;
  } else {
    yIsScrollable = scrollableParent.offsetHeight <= scrollableParent.scrollHeight;
    xIsScrollable = scrollableParent.offsetWidth <= scrollableParent.scrollWidth;
  }
  var yDelta = scrollableParent.scrollTop + vel.y;
  var yInBounds = yIsScrollable && yDelta > 0 && yDelta < scrollableParent.scrollHeight;
  var xDelta = scrollableParent.scrollLeft + vel.x;
  var xInBounds = xIsScrollable && xDelta > 0 && xDelta < scrollableParent.scrollWidth;
  if (yInBounds) {
    scrollableParent.scrollTop += vel.y;
  } else if (yIsScrollable && yDelta < 0) {
    scrollableParent.scrollTop = 0;
  }
  if (xInBounds) {
    scrollableParent.scrollLeft += vel.x;
  } else if (xIsScrollable && xDelta < 0) {
    scrollableParent.scrollLeft = 0;
  }
};

// node_modules/@progress/kendo-react-common/dist/es/hooks/useInheritedState.js
var React11 = __toESM(require_react());
var useInheritedState = function(context, defaultValue) {
  var _a14 = React11.useContext(context), contextValue = _a14[0], contextSetter = _a14[1];
  var _b3 = React11.useState(defaultValue), localValue = _b3[0], localSetter = _b3[1];
  var value = contextValue !== void 0 ? contextValue : localValue;
  var handleValueChange = function() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }
    contextValue !== void 0 ? contextSetter.apply(void 0, args) : localSetter(args[0]);
  };
  return [
    value,
    handleValueChange
  ];
};

// node_modules/@progress/kendo-react-common/dist/es/drag-n-drop/context/index.js
var React12 = __toESM(require_react());
var DragContext = React12.createContext([
  void 0,
  noop
]);
var DropContext = React12.createContext([
  void 0,
  noop
]);
var DragsContext = React12.createContext([[], noop, noop]);
var DropsContext = React12.createContext([[], noop, noop]);

// node_modules/@progress/kendo-react-common/dist/es/hooks/useDraggable.js
var IGNORE_MOUSE_TIMEOUT = 2e3;
function useDraggable(ref, callbacks, options) {
  if (options === void 0) {
    options = {};
  }
  var _a14 = callbacks.onPress, onPress = _a14 === void 0 ? noop : _a14, _b3 = callbacks.onRelease, onRelease = _b3 === void 0 ? noop : _b3, _c6 = callbacks.onDragStart, onDragStart = _c6 === void 0 ? noop : _c6, _d = callbacks.onDrag, onDrag = _d === void 0 ? noop : _d, _e = callbacks.onDragEnd, onDragEnd = _e === void 0 ? noop : _e;
  var _f = options.hint, hint = _f === void 0 ? null : _f, _g = options.mouseOnly, mouseOnly = _g === void 0 ? false : _g, _h = options.autoScroll, autoScroll2 = _h === void 0 ? true : _h, _j = options.scrollContainer, scrollContainer = _j === void 0 ? null : _j;
  var _k = React13.useState(false), pressed = _k[0], setPressed = _k[1];
  var _l = React13.useState(false), scrolling = _l[0], setScrolling = _l[1];
  var drop = useInheritedState(DropContext)[0];
  var _m = useInheritedState(DragContext), drag = _m[0], setDrag = _m[1];
  var drops = React13.useContext(DropsContext)[0];
  var _o = React13.useContext(DragsContext), drags = _o[0], registerDrag = _o[1], deregisterDrag = _o[2];
  var velocity = React13.useRef({ x: 0, y: 0 });
  var scrollInterval = React13.useRef();
  var ignoreMouse = React13.useRef(false);
  var restoreMouseTimeout = React13.useRef();
  var scrollable = React13.useRef(null);
  var unmount = React13.useRef(false);
  var offset = React13.useRef({ x: 0, y: 0 });
  var pageOffset = React13.useRef({ x: 0, y: 0 });
  var clientOffset = React13.useRef({ x: 0, y: 0 });
  var initialClientOffset = React13.useRef({ x: 0, y: 0 });
  var scrollOffset = React13.useRef({ x: 0, y: 0 });
  var initialScrollOffset = React13.useRef({ x: 0, y: 0 });
  var supportPointerEvent = Boolean(typeof window !== "undefined" && window.PointerEvent);
  var pointers = !mouseOnly && supportPointerEvent;
  var getElement = React13.useCallback(function() {
    return ref.current && ref.current.element ? ref.current.element : ref.current;
  }, [ref]);
  var getHintElement = React13.useCallback(function() {
    return hint && hint.current && hint.current.element ? hint.current.element : hint ? hint.current : null;
  }, [hint]);
  var getScrollContainer = React13.useCallback(function() {
    return scrollContainer && scrollContainer.current && scrollContainer.current.element ? scrollContainer.current.element : scrollContainer ? scrollContainer.current : null;
  }, [scrollContainer]);
  var getAutoScrollContainer = React13.useCallback(function() {
    return typeof autoScroll2 === "object" && autoScroll2.boundaryElementRef && autoScroll2.boundaryElementRef.current && autoScroll2.boundaryElementRef.current.element ? autoScroll2.boundaryElementRef.current.element : typeof autoScroll2 === "object" && autoScroll2.boundaryElementRef && autoScroll2.boundaryElementRef.current ? autoScroll2.boundaryElementRef.current : null;
  }, [autoScroll2]);
  var target = React13.useRef(null);
  React13.useImperativeHandle(target, function() {
    return {
      element: getElement(),
      hint: getHintElement(),
      onPress: handlePress,
      onDragStart: handleDragStart,
      onDrag: handleDrag,
      onDragEnd: handleDragEnd,
      onRelease: handleRelease,
      data: ref.current
    };
  });
  var getDocument3 = React13.useCallback(function() {
    var element2 = getElement();
    return element2 ? element2.ownerDocument || document : document;
  }, [getElement]);
  var getWindow2 = React13.useCallback(function() {
    var document2 = getDocument3();
    return document2 ? document2.defaultView || window : window;
  }, [getDocument3]);
  var getState = React13.useCallback(function() {
    return {
      drag: drag ? drag.current : null,
      drop: drop ? drop.current : null,
      drags: drags.map(function(d) {
        return d.current;
      }),
      drops: drops.map(function(d) {
        return d.current;
      }),
      pressed,
      ignoreMouse: ignoreMouse.current,
      scrollOffset: scrollOffset.current,
      offset: offset.current,
      pageOffset: pageOffset.current,
      initialScrollOffset: initialScrollOffset.current,
      clientOffset: clientOffset.current,
      initialClientOffset: initialClientOffset.current,
      velocity: velocity.current,
      autoScroll: Boolean(typeof autoScroll2 === "object" ? autoScroll2.enabled !== false : autoScroll2),
      scrollableParent: getAutoScrollContainer(),
      autoScrollDirection: typeof autoScroll2 === "object" ? autoScroll2.direction : { horizontal: true, vertical: true },
      isScrolling: scrolling
    };
  }, [drag, drop, drags, drops, pressed, autoScroll2, getAutoScrollContainer, scrolling]);
  var handlePressedChange = React13.useCallback(function(value) {
    setPressed(value);
  }, []);
  var handleScrollingChange = React13.useCallback(function(value) {
    setScrolling(value);
  }, []);
  var handleVelocityChange = React13.useCallback(function(value) {
    velocity.current = value;
  }, []);
  var handleOffsetChange = React13.useCallback(function(value) {
    offset.current = value;
  }, []);
  var handleClientOffsetChange = React13.useCallback(function(value) {
    clientOffset.current = value;
  }, []);
  var handlePageOffsetChange = React13.useCallback(function(value) {
    pageOffset.current = value;
  }, []);
  var handleInitialClientOffsetChange = React13.useCallback(function(value) {
    initialClientOffset.current = value;
  }, []);
  var handleScrollOffsetChange = React13.useCallback(function(value) {
    scrollOffset.current = value;
  }, []);
  var handleInitialScrollOffsetChange = React13.useCallback(function(value) {
    initialScrollOffset.current = value;
  }, []);
  var handlePress = React13.useCallback(function(event) {
    onPress(event);
  }, [onPress]);
  var handleRelease = React13.useCallback(function(event) {
    onRelease(event);
  }, [onRelease]);
  var handleDragStart = React13.useCallback(function(event) {
    setDrag(target, { target: ref.current, event });
    onDragStart(event);
  }, [setDrag, ref, onDragStart]);
  var handleDrag = React13.useCallback(function(event) {
    onDrag(event);
  }, [onDrag]);
  var handleDragEnd = React13.useCallback(function(event) {
    if (unmount.current) {
      return;
    }
    setDrag(null, { target: ref.current, event });
    onDragEnd(event);
  }, [onDragEnd, setDrag, ref]);
  var dispatchDragEvent = React13.useCallback(function(event) {
    dispatchDragAndDrop(getState(), { event, payload: target.current }, {
      onVelocityChange: handleVelocityChange,
      onOffsetChange: handleOffsetChange,
      onClientOffsetChange: handleClientOffsetChange,
      onPageOffsetChange: handlePageOffsetChange,
      onInitialClientOffsetChange: handleInitialClientOffsetChange,
      onScrollOffsetChange: handleScrollOffsetChange,
      onInitialScrollOffsetChange: handleInitialScrollOffsetChange,
      onIsPressedChange: handlePressedChange,
      onIsScrollingChange: handleScrollingChange
    });
  }, [
    getState,
    handleVelocityChange,
    handleOffsetChange,
    handlePageOffsetChange,
    handleClientOffsetChange,
    handleInitialClientOffsetChange,
    handleInitialScrollOffsetChange,
    handlePressedChange,
    handleScrollOffsetChange,
    handleScrollingChange
  ]);
  var handlePointerDown = React13.useCallback(function(event) {
    dispatchDragEvent(event);
  }, [dispatchDragEvent]);
  var handlePointerMove = React13.useCallback(function(event) {
    dispatchDragEvent(event);
  }, [dispatchDragEvent]);
  var handlePointerCancel = React13.useCallback(function(event) {
    dispatchDragEvent(event);
  }, [dispatchDragEvent]);
  var handlePointerUp = React13.useCallback(function(event) {
    dispatchDragEvent(event);
  }, [dispatchDragEvent]);
  var handleMouseDown = React13.useCallback(function(event) {
    dispatchDragEvent(event);
  }, [dispatchDragEvent]);
  var handleMouseMove = React13.useCallback(function(event) {
    dispatchDragEvent(event);
  }, [dispatchDragEvent]);
  var handleMouseUp = React13.useCallback(function(event) {
    dispatchDragEvent(event);
  }, [dispatchDragEvent]);
  var handleContextMenu = React13.useCallback(function(event) {
    event.preventDefault();
    dispatchDragEvent(event);
  }, [dispatchDragEvent]);
  var handleTouchStart = React13.useCallback(function(event) {
    event.preventDefault();
    dispatchDragEvent(event);
  }, [dispatchDragEvent]);
  var handleTouchMove = React13.useCallback(function(event) {
    event.preventDefault();
    dispatchDragEvent(event);
  }, [dispatchDragEvent]);
  var handleTouchEnd = React13.useCallback(function(event) {
    if (event.touches.length === 0 && event.changedTouches.length === 1) {
      var currentWindow = getWindow2();
      ignoreMouse.current = true;
      restoreMouseTimeout.current = currentWindow.setTimeout(function() {
        ignoreMouse.current = false;
      }, IGNORE_MOUSE_TIMEOUT);
    }
    dispatchDragEvent(event);
  }, [dispatchDragEvent, getWindow2]);
  var handleScroll = React13.useCallback(function(event) {
    dispatchDragEvent(event);
  }, [dispatchDragEvent]);
  var prerequisites = React13.useCallback(function() {
    var element2 = getElement();
    if (element2) {
      var initialTouchAction_1 = element2.style.touchAction;
      element2.style.touchAction = "none";
      return function() {
        element2.style.touchAction = initialTouchAction_1;
      };
    }
  }, [getElement]);
  var register = React13.useCallback(function() {
    registerDrag(target);
    return function() {
      deregisterDrag(target);
    };
  }, [deregisterDrag, registerDrag]);
  var init = function() {
    var window2 = getWindow2();
    var element2 = getElement();
    var document2 = getDocument3();
    if (pointers) {
      if (element2) {
        scrollable.current = getScrollableParent(element2);
        if (scrollable.current) {
          scrollable.current.addEventListener("scroll", handleScroll, { passive: true });
        }
        element2.addEventListener("pointerdown", handlePointerDown, { passive: true });
      }
      if (pressed) {
        document2.addEventListener("pointermove", handlePointerMove);
        document2.addEventListener("pointerup", handlePointerUp, true);
        document2.addEventListener("contextmenu", handleContextMenu);
        document2.addEventListener("pointercancel", handlePointerCancel, { passive: true });
      }
    } else {
      window2.addEventListener("touchmove", noop, { capture: false, passive: false });
      if (element2) {
        element2.addEventListener("mousedown", handleMouseDown, { passive: true });
        if (!mouseOnly) {
          element2.addEventListener("touchstart", handleTouchStart, { passive: true });
          if (pressed) {
            element2.addEventListener("touchmove", handleTouchMove, { passive: true });
            element2.addEventListener("touchend", handleTouchEnd, { passive: true });
          }
        }
      }
      if (pressed) {
        document2.addEventListener("mousemove", handleMouseMove, { passive: true });
        document2.addEventListener("mouseup", handleMouseUp, { passive: true });
      }
    }
    return function() {
      if (scrollable.current) {
        scrollable.current.removeEventListener("scroll", handleScroll);
      }
      if (element2) {
        element2.removeEventListener("pointerdown", handlePointerDown);
        element2.removeEventListener("mousedown", handleMouseDown);
        element2.removeEventListener("touchstart", handleTouchStart);
        element2.removeEventListener("touchmove", handleTouchMove);
        element2.removeEventListener("touchend", handleTouchEnd);
      }
      document2.removeEventListener("pointermove", handlePointerMove);
      document2.removeEventListener("pointerup", handlePointerUp, true);
      document2.removeEventListener("contextmenu", handleContextMenu);
      document2.removeEventListener("pointercancel", handlePointerCancel);
      document2.removeEventListener("mousemove", handleMouseMove);
      document2.removeEventListener("mouseup", handleMouseUp);
      window2.removeEventListener("touchmove", noop);
      window2.clearTimeout(restoreMouseTimeout.current);
    };
  };
  React13.useEffect(function() {
    var window2 = getWindow2();
    if (scrolling) {
      var scrollableParent_1 = getScrollContainer() || getScrollableParent(document.elementFromPoint(clientOffset.current.x, clientOffset.current.y));
      window2.clearInterval(scrollInterval.current);
      scrollInterval.current = window2.setInterval(function() {
        autoScroll(scrollableParent_1, { x: velocity.current.x, y: velocity.current.y });
      }, 50);
    }
    return function() {
      window2.clearInterval(scrollInterval.current);
    };
  }, [getElement, getScrollContainer, getWindow2, scrolling]);
  React13.useEffect(prerequisites, [prerequisites]);
  React13.useEffect(init, [
    pressed,
    getWindow2,
    getElement,
    getDocument3,
    mouseOnly,
    pointers,
    handleContextMenu,
    handleMouseDown,
    handleMouseMove,
    handleMouseUp,
    handlePointerCancel,
    handlePointerDown,
    handlePointerMove,
    handlePointerUp,
    handleTouchEnd,
    handleTouchMove,
    handleTouchStart,
    handleScroll
  ]);
  React13.useEffect(function() {
    unmount.current = false;
    return function() {
      unmount.current = true;
    };
  }, []);
  React13.useLayoutEffect(register, [register]);
}

// node_modules/@progress/kendo-react-common/dist/es/Draggable.js
var React14 = __toESM(require_react());
var Draggable = React14.forwardRef(function(props, ref) {
  var childRef = React14.useRef(null);
  var target = React14.useRef(null);
  var getElement = React14.useCallback(function() {
    return childRef.current && childRef.current.element ? childRef.current.element : childRef.current;
  }, [childRef]);
  React14.useImperativeHandle(target, function() {
    return { element: getElement() || null };
  });
  React14.useImperativeHandle(ref, function() {
    return target.current;
  });
  React14.useImperativeHandle(props.childRef, function() {
    return childRef.current;
  });
  var handlePress = React14.useCallback(function(event) {
    if (!props.onPress) {
      return;
    }
    props.onPress({
      element: getElement(),
      target: target.current,
      event
    });
  }, [getElement, props.onPress]);
  var handleRelease = React14.useCallback(function(event) {
    if (!props.onRelease) {
      return;
    }
    props.onRelease({
      element: getElement(),
      target: target.current,
      event
    });
  }, [getElement, props.onRelease]);
  var handleDragStart = React14.useCallback(function(event) {
    if (!props.onDragStart) {
      return;
    }
    props.onDragStart({
      element: getElement(),
      target: target.current,
      event
    });
  }, [props, getElement]);
  var handleDrag = React14.useCallback(function(event) {
    if (!props.onDrag) {
      return;
    }
    props.onDrag({
      element: getElement(),
      target: target.current,
      event
    });
  }, [getElement, props.onDrag]);
  var handleDragEnd = React14.useCallback(function(event) {
    if (!props.onDragEnd) {
      return;
    }
    props.onDragEnd({
      element: getElement(),
      target: target.current,
      event
    });
  }, [getElement, props.onDragEnd]);
  useDraggable(childRef, {
    onPress: handlePress,
    onRelease: handleRelease,
    onDragStart: handleDragStart,
    onDrag: handleDrag,
    onDragEnd: handleDragEnd
  }, {
    mouseOnly: props.mouseOnly,
    autoScroll: props.autoScroll,
    hint: props.hint,
    scrollContainer: props.scrollContainer
  });
  return props.children ? React14.cloneElement(React14.Children.only(props.children), { ref: childRef }) : null;
});
Draggable.displayName = "KendoReactDraggable";

// node_modules/@progress/kendo-react-common/dist/es/theme.js
var kendoThemeMaps = {
  sizeMap: {
    small: "sm",
    medium: "md",
    large: "lg"
  },
  roundedMap: {
    small: "sm",
    medium: "md",
    large: "lg"
  },
  orientationMap: {
    vertical: "vstack",
    horizontal: "hstack"
  }
};

// node_modules/@progress/kendo-react-common/dist/es/memoize.js
function isEqual(first, second) {
  return first === second || Number.isNaN(first) && Number.isNaN(second);
}
function areInputsEqual(newInputs, lastInputs) {
  if (newInputs.length !== lastInputs.length) {
    return false;
  }
  for (var i = 0; i < newInputs.length; i++) {
    if (!isEqual(newInputs[i], lastInputs[i])) {
      return false;
    }
  }
  return true;
}
function memoizeOne(resultFn, isEqualFn) {
  if (isEqualFn === void 0) {
    isEqualFn = areInputsEqual;
  }
  var cache = null;
  function memoized() {
    var newArgs = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      newArgs[_i] = arguments[_i];
    }
    if (cache && cache.lastThis === this && isEqualFn(newArgs, cache.lastArgs)) {
      return cache.lastResult;
    }
    var lastResult = resultFn.apply(this, newArgs);
    cache = {
      lastResult,
      lastArgs: newArgs,
      lastThis: this
    };
    return lastResult;
  }
  memoized.clear = function clear2() {
    cache = null;
  };
  return memoized;
}

// node_modules/@progress/kendo-react-common/dist/es/navigation.js
var FOCUSABLE_ELEMENTS = [
  "input:not([disabled]):not([type=hidden])",
  "select:not([disabled])",
  "textarea:not([disabled])",
  "button:not([disabled])",
  "a[href]",
  "area[href]",
  "summary",
  "iframe",
  "object",
  "embed",
  "audio[controls]",
  "video[controls]",
  "[contenteditable]"
];
var Navigation = (
  /** @class */
  function() {
    function Navigation4(options) {
      var _this = this;
      this.rovingTabIndex = true;
      this.update = function() {
      };
      this.focusNextIndex = function(target, indexDiff) {
        var all = _this.elements;
        var index = all.indexOf(target) + indexDiff;
        index = index < 0 ? all.length - 1 : index;
        var next = all[index % all.length];
        _this.focusElement(next, target);
        return next;
      };
      this.tabIndex = options.tabIndex || 0;
      this.root = options.root;
      this.selectors = options.selectors;
      this.focusOptions = options.focusOptions || { preventScroll: true };
      this.rovingTabIndex = options.rovingTabIndex !== void 0 ? options.rovingTabIndex : true;
      this.mouseEvents = options.mouseEvents || {};
      this.keyboardEvents = options.keyboardEvents || {};
    }
    Object.defineProperty(Navigation4.prototype, "elements", {
      /**
       * Returns the collection of DOM elements which the module will navigate in.
       */
      get: function() {
        return this.root.current ? Array.from(this.root.current.querySelectorAll(this.selectors.join(","))) : [];
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(Navigation4.prototype, "first", {
      /**
       * Returns the first navigation DOM element.
       */
      get: function() {
        return this.root.current && this.root.current.querySelector(this.selectors.join(",")) || null;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(Navigation4.prototype, "last", {
      /**
       * Returns the last navigation DOM element.
       */
      get: function() {
        var all = this.elements;
        return all[all.length - 1] || null;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(Navigation4.prototype, "current", {
      /**
       * Returns the focused DOM element from the navigation collection of DOM elements.
       */
      get: function() {
        return this.elements.find(function(el) {
          return el.matches(":focus");
        }) || null;
      },
      enumerable: false,
      configurable: true
    });
    Navigation4.prototype.focusNext = function(target) {
      return this.focusNextIndex(target, 1);
    };
    Navigation4.prototype.focusPrevious = function(target) {
      return this.focusNextIndex(target, -1);
    };
    Navigation4.prototype.triggerKeyboardEvent = function(ev, options) {
      var target = ev.target instanceof Element && ev.target.closest(this.selectors.join(","));
      var key = ev.key === " " ? "Space" : ev.key;
      var eventType = ev.nativeEvent.type;
      if (target && this.keyboardEvents[eventType][key]) {
        this.keyboardEvents[eventType][key].call(void 0, target, this, ev, options);
      }
    };
    Navigation4.prototype.triggerMouseEvent = function(ev) {
      var target = ev.target instanceof Element && ev.target.closest(this.selectors.join(","));
      var eventType = ev.nativeEvent.type;
      if (target) {
        this.mouseEvents[eventType].call(void 0, target, this, ev);
      }
    };
    Navigation4.prototype.focusElement = function(element2, previous) {
      if (element2) {
        if (previous) {
          if (this.rovingTabIndex) {
            previous.removeAttribute("tabindex");
          }
          previous.classList.remove("k-focus");
        }
        if (this.rovingTabIndex) {
          element2.setAttribute("tabindex", String(this.tabIndex));
        }
        element2.focus(this.focusOptions);
      }
    };
    return Navigation4;
  }()
);

// node_modules/@progress/kendo-react-common/dist/es/getActiveElement.js
var getInnerActiveElement = function(element2) {
  var shadowRoot = element2.shadowRoot;
  var contentDocument = element2.contentDocument;
  if (shadowRoot && shadowRoot.activeElement) {
    return getInnerActiveElement(shadowRoot.activeElement);
  }
  if (contentDocument && contentDocument.activeElement) {
    return getInnerActiveElement(contentDocument.activeElement);
  }
  return element2;
};
var getActiveElement = function(document2) {
  if (!document2 || !document2.activeElement) {
    return void 0;
  }
  return getInnerActiveElement(document2.activeElement);
};

// node_modules/@progress/kendo-react-grid/dist/es/Grid.js
var React87 = __toESM(require_react());
var PropTypes27 = __toESM(require_prop_types());

// node_modules/@progress/kendo-react-data-tools/dist/es/pager/Pager.js
var React39 = __toESM(require_react());
var PropTypes16 = __toESM(require_prop_types());

// node_modules/@progress/kendo-react-data-tools/dist/es/pager/PagerNumericButtons.js
var React18 = __toESM(require_react());

// node_modules/@progress/kendo-react-buttons/dist/es/Button.js
var React15 = __toESM(require_react());
var PropTypes4 = __toESM(require_prop_types());

// node_modules/@progress/kendo-react-buttons/dist/es/package-metadata.js
var packageMetadata = {
  name: "@progress/kendo-react-buttons",
  productName: "KendoReact",
  productCodes: ["KENDOUIREACT", "KENDOUICOMPLETE"],
  publishDate: 1700063497,
  version: "",
  licensingDocsUrl: "https://www.telerik.com/kendo-react-ui/my-license/?utm_medium=product&utm_source=kendoreact&utm_campaign=kendo-ui-react-purchase-license-keys-warning"
};

// node_modules/@progress/kendo-react-buttons/dist/es/Button.js
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
var __assign6 = function() {
  __assign6 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign6.apply(this, arguments);
};
var __rest4 = function(s, e) {
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
function iconElement(_a14) {
  var imageUrl = _a14.imageUrl, name = _a14.name, iconClass = _a14.iconClass, svgIcon = _a14.svgIcon, imageAlt = _a14.imageAlt;
  if (imageUrl) {
    return React15.createElement("img", { role: "presentation", className: "k-button-icon", alt: imageAlt, src: imageUrl });
  } else if (name || svgIcon) {
    return React15.createElement(IconWrap, { className: "k-button-icon", name, icon: svgIcon });
  } else if (iconClass) {
    return React15.createElement("span", { role: "presentation", className: classNames("k-button-icon", iconClass) });
  }
  return null;
}
var Button = (
  /** @class */
  function(_super) {
    __extends(Button2, _super);
    function Button2(props) {
      var _this = _super.call(this, props) || this;
      _this._element = null;
      _this.handleClick = function(event) {
        _this.toggleIfApplicable();
        if (_this.props.onClick) {
          _this.props.onClick.call(void 0, event);
        }
      };
      validatePackage(packageMetadata);
      _this.state = { selected: _this.props.togglable === true && _this.props.selected === true };
      return _this;
    }
    Object.defineProperty(Button2.prototype, "element", {
      /**
       * Gets the DOM element of the Button component.
       */
      get: function() {
        return this._element;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(Button2.prototype, "selected", {
      /**
       * Returns `true` when the component is togglable and selected ([see example]({% slug toggleable_button %})).
       * Otherwise, returns `false`.
       */
      get: function() {
        return this._selectedTemp !== void 0 ? this._selectedTemp : this.state.selected;
      },
      enumerable: false,
      configurable: true
    });
    Button2.getDerivedStateFromProps = function(props, state) {
      if (props.togglable && props.selected !== void 0 && props.selected !== state.selected) {
        return { selected: props.selected };
      }
      return null;
    };
    Button2.prototype.render = function() {
      var _a14;
      var _this = this;
      var _b3 = this.props, children = _b3.children, togglable = _b3.togglable, icon = _b3.icon, iconClass = _b3.iconClass, svgIcon = _b3.svgIcon, imageUrl = _b3.imageUrl, imageAlt = _b3.imageAlt, className = _b3.className, onClick = _b3.onClick, _c6 = _b3.size, size = _c6 === void 0 ? Button2.defaultProps.size : _c6, _d = _b3.rounded, rounded = _d === void 0 ? Button2.defaultProps.rounded : _d, _e = _b3.fillMode, fillMode = _e === void 0 ? Button2.defaultProps.fillMode : _e, _f = _b3.themeColor, themeColor = _f === void 0 ? Button2.defaultProps.themeColor : _f, htmlAttributes = __rest4(_b3, ["children", "togglable", "icon", "iconClass", "svgIcon", "imageUrl", "imageAlt", "className", "onClick", "size", "rounded", "fillMode", "themeColor"]);
      var hasIcon = svgIcon !== void 0 || icon !== void 0 || iconClass !== void 0 || imageUrl !== void 0;
      var hasChildren = children !== void 0;
      var iconEl = iconElement({
        name: icon,
        svgIcon,
        iconClass,
        imageUrl,
        imageAlt
      });
      return React15.createElement(
        "button",
        __assign6({ ref: function(button) {
          return _this._element = button;
        }, "aria-pressed": togglable ? this.state.selected : void 0 }, htmlAttributes, { onClick: this.handleClick, className: classNames("k-button", (_a14 = {}, _a14["k-button-".concat(kendoThemeMaps.sizeMap[size] || size)] = size, _a14["k-button-".concat(fillMode)] = fillMode, _a14["k-button-".concat(fillMode, "-").concat(themeColor)] = Boolean(fillMode && themeColor), _a14["k-rounded-".concat(kendoThemeMaps.roundedMap[rounded] || rounded)] = rounded, _a14["k-icon-button"] = !hasChildren && hasIcon, _a14["k-disabled"] = this.props.disabled, _a14["k-selected"] = this.state.selected, _a14["k-rtl"] = this.props.dir === "rtl", _a14), this.props.className) }),
        iconEl,
        children && React15.createElement("span", { className: "k-button-text" }, children)
      );
    };
    Button2.prototype.toggleIfApplicable = function() {
      var _this = this;
      if (this.props.togglable && this.props.selected === void 0) {
        var selected = !this.state.selected;
        this._selectedTemp = selected;
        this.setState({ selected }, function() {
          return _this._selectedTemp = void 0;
        });
      }
    };
    Button2.propTypes = {
      children: PropTypes4.node,
      selected: PropTypes4.bool,
      togglable: PropTypes4.bool,
      icon: PropTypes4.string,
      svgIcon: svgIconPropType,
      iconClass: PropTypes4.string,
      imageUrl: PropTypes4.string,
      imageAlt: PropTypes4.string,
      size: PropTypes4.oneOf([null, "small", "medium", "large"]),
      rounded: PropTypes4.oneOf([null, "small", "medium", "large", "full"]),
      fillMode: PropTypes4.oneOf([null, "flat", "link", "outline", "solid"]),
      // eslint-disable-next-line max-len
      themeColor: PropTypes4.oneOf([null, "base", "primary", "secondary", "tertiary", "info", "success", "warning", "error", "dark", "light", "inverse"])
    };
    Button2.defaultProps = {
      togglable: false,
      size: "medium",
      rounded: "medium",
      fillMode: "solid",
      themeColor: "base"
    };
    return Button2;
  }(React15.Component)
);

// node_modules/@progress/kendo-svg-icons/dist/index.es.js
var caretAltUpIcon = {
  name: "caret-alt-up",
  content: '<path d="m256 160 128 192H128z" />',
  viewBox: "0 0 512 512"
};
var caretAltRightIcon = {
  name: "caret-alt-right",
  content: '<path d="M352 256 160 384V128z" />',
  viewBox: "0 0 512 512"
};
var caretAltDownIcon = {
  name: "caret-alt-down",
  content: '<path d="M256 352 128 160h256z" />',
  viewBox: "0 0 512 512"
};
var caretAltLeftIcon = {
  name: "caret-alt-left",
  content: '<path d="m160 256 192-128v256z" />',
  viewBox: "0 0 512 512"
};
var caretAltToRightIcon = {
  name: "caret-alt-to-right",
  content: '<path d="m128 128 192 128-192 128zm224 256V128h-32v256z" />',
  viewBox: "0 0 512 512"
};
var caretAltToLeftIcon = {
  name: "caret-alt-to-left",
  content: '<path d="M352 384 160 256l192-128zM128 128v256h32V128z" />',
  viewBox: "0 0 512 512"
};
var moreVerticalIcon = {
  name: "more-vertical",
  content: '<path d="M240 128c26.4 0 48-21.6 48-48s-21.6-48-48-48-48 21.6-48 48 21.6 48 48 48m0 64c-26.4 0-48 21.6-48 48s21.6 48 48 48 48-21.6 48-48-21.6-48-48-48m0 160c-26.4 0-48 21.6-48 48s21.6 48 48 48 48-21.6 48-48-21.6-48-48-48" />',
  viewBox: "0 0 512 512"
};
var calendarIcon = {
  name: "calendar",
  content: '<path d="M416 416H288V288h128zm64-352v384c0 17.6-14.4 32-32 32H64c-17.6 0-32-14.4-32-32V64c0-17.6 14.4-32 32-32h64V0h64v32h128V0h64v32h64c17.6 0 32 14.4 32 32m-32 128H64v255.9l.1.1 383.9-.1zm0-127.9c-.1-.1-.1-.1 0 0l-64-.1v32h-64V64H192v32h-64V64H64.1l-.1.1V160h384z" />',
  viewBox: "0 0 512 512"
};
var cancelIcon = {
  name: "cancel",
  content: '<path d="M256 32c-50.3 0-96.8 16.6-134.1 44.6-17.2 12.8-32.4 28.1-45.3 45.3C48.6 159.2 32 205.7 32 256c0 123.7 100.3 224 224 224 50.3 0 96.8-16.6 134.1-44.6 17.2-12.8 32.4-28.1 45.3-45.3 28-37.4 44.6-83.8 44.6-134.1 0-123.7-100.3-224-224-224m0 384c-88.2 0-160-71.8-160-160 0-32.6 9.8-62.9 26.6-88.2l221.6 221.6C318.9 406.2 288.6 416 256 416m133.4-71.8L167.8 122.6C193.1 105.8 223.4 96 256 96c88.2 0 160 71.8 160 160 0 32.6-9.8 62.9-26.6 88.2" />',
  viewBox: "0 0 512 512"
};
var xIcon = {
  name: "x",
  content: '<path d="M416 141.3 301.3 256 416 370.7 370.7 416 256 301.3 141.3 416 96 370.7 210.7 256 96 141.3 141.3 96 256 210.7 370.7 96z" />',
  viewBox: "0 0 512 512"
};
var xCircleIcon = {
  name: "x-circle",
  content: '<path d="M256 32C132.3 32 32 132.3 32 256s100.3 224 224 224 224-100.3 224-224S379.7 32 256 32m128 306.7L338.7 384 256 301.3 173.3 384 128 338.7l82.7-82.7-82.7-82.7 45.3-45.3 82.7 82.7 82.7-82.7 45.3 45.3-82.7 82.7z" />',
  viewBox: "0 0 512 512"
};
var plusIcon = {
  name: "plus",
  content: '<path d="M288 224V96h-64v128H96v64h128v128h64V288h128v-64z" />',
  viewBox: "0 0 512 512"
};
var minusIcon = {
  name: "minus",
  content: '<path d="M96 224v64h320v-64z" />',
  viewBox: "0 0 512 512"
};
var sortAscSmallIcon = {
  name: "sort-asc-small",
  content: '<path d="M256 192v224h-32V192h-96L240 64l112 128z" />',
  viewBox: "0 0 512 512"
};
var sortDescSmallIcon = {
  name: "sort-desc-small",
  content: '<path d="M352 288 240 416 128 288h96V64h32v224z" />',
  viewBox: "0 0 512 512"
};
var filterIcon = {
  name: "filter",
  content: '<path d="M64 64v32l160 160v224l64-64V256L448 96V64z" />',
  viewBox: "0 0 512 512"
};
var filterClearIcon = {
  name: "filter-clear",
  content: '<path d="m143.5 64 168.2 168.2L288 256v160l-64 64V256L64 96V64zm236.1 100.4L448 96V64H279.3l-64-64L192 22l298 298 22-23.3z" />',
  viewBox: "0 0 512 512"
};
var searchIcon = {
  name: "search",
  content: '<path d="M365.3 320h-22.7l-26.7-26.7C338.5 265.7 352 230.4 352 192c0-88.4-71.6-160-160-160S32 103.6 32 192s71.6 160 160 160c38.4 0 73.7-13.5 101.3-36.1l26.7 26.7v22.7L434.7 480l45.3-45.3zM64 192c0-70.7 57.3-128 128-128s128 57.3 128 128-57.3 128-128 128S64 262.7 64 192" />',
  viewBox: "0 0 512 512"
};

// node_modules/@progress/kendo-react-data-tools/dist/es/messages/index.js
var _a;
var pagerInfo = "pager.info";
var pagerFirstPage = "pager.firstPage";
var pagerPreviousPage = "pager.previousPage";
var pagerNextPage = "pager.nextPage";
var pagerLastPage = "pager.lastPage";
var pagerItemPerPage = "pager.itemsPerPage";
var pagerPageSelection = "pager.pageSelection";
var pagerPage = "pager.page";
var pagerOf = "pager.of";
var pagerTotalPages = "pager.totalPages";
var pagerPageNumberLabel = "pager.pageLabel";
var pagerAriaKeyshortcuts = "pager.ariaKeyshortcuts";
var pagerAriaLabel = "pager.ariaLabel";
var pagerPageSizeAriaLabel = "pager.pageSizeAriaLabel";
var pagerMobileSelect = "pager.mobileSelect";
var pagerMoreButtonLabel = "pager.moreButtonLabel";
var filterEqOperator = "filter.eqOperator";
var filterNotEqOperator = "filter.notEqOperator";
var filterIsNullOperator = "filter.isNullOperator";
var filterIsNotNullOperator = "filter.isNotNullOperator";
var filterIsEmptyOperator = "filter.isEmptyOperator";
var filterIsNotEmptyOperator = "filter.isNotEmptyOperator";
var filterStartsWithOperator = "filter.startsWithOperator";
var filterContainsOperator = "filter.containsOperator";
var filterNotContainsOperator = "filter.notContainsOperator";
var filterEndsWithOperator = "filter.endsWithOperator";
var filterGteOperator = "filter.gteOperator";
var filterGtOperator = "filter.gtOperator";
var filterLteOperator = "filter.lteOperator";
var filterLtOperator = "filter.ltOperator";
var filterIsTrue = "filter.isTrue";
var filterIsFalse = "filter.isFalse";
var filterAfterOrEqualOperator = "filter.afterOrEqualOperator";
var filterAfterOperator = "filter.afterOperator";
var filterBeforeOperator = "filter.beforeOperator";
var filterBeforeOrEqualOperator = "filter.beforeOrEqualOperator";
var filterAndLogic = "filter.andLogic";
var filterOrLogic = "filter.orLogic";
var filterAddExpression = "filter.addExpression";
var filterAddGroup = "filter.addGroup";
var filterClose = "filter.close";
var filterGroupAriaLabel = "filter.groupAriaLabel";
var filterExpressionAriaLabel = "filter.expressionAriaLabel";
var filterExpressionDropdownAriaLabel = "filter.expressionDropdownAriaLabel";
var filterExpressionOperatorDropdownAriaLabel = "filter.expressionOperatorDropdownAriaLabel";
var filterEnumFilterDropdownAriaLabel = "filter.enumFilterDropdownAriaLabel";
var filterNumericFilterAriaLabel = "filter.numericFilterAriaLabel";
var filterTextFilterAriaLabel = "filter.textFilterAriaLabel";
var columnMenuFilterClearButton = "columnMenu.filterClearButton";
var columnMenuFilterSubmitButton = "columnMenu.filterSubmitButton";
var columnMenuFilterTitle = "columnMenu.filterTitle";
var columnMenuSortAscending = "columnMenu.sortAscending";
var columnMenuSortDescending = "columnMenu.sortDescending";
var columnMenuFilterEqOperator = "columnMenu.filterEqOperator";
var columnMenuFilterNotEqOperator = "columnMenu.filterNotEqOperator";
var columnMenuFilterIsNullOperator = "columnMenu.filterIsNullOperator";
var columnMenuFilterIsNotNullOperator = "columnMenu.filterIsNotNullOperator";
var columnMenuFilterIsEmptyOperator = "columnMenu.filterIsEmptyOperator";
var columnMenuFilterIsNotEmptyOperator = "columnMenu.filterIsNotEmptyOperator";
var columnMenuFilterStartsWithOperator = "columnMenu.filterStartsWithOperator";
var columnMenuFilterContainsOperator = "columnMenu.filterContainsOperator";
var columnMenuFilterNotContainsOperator = "columnMenu.filterNotContainsOperator";
var columnMenuFilterEndsWithOperator = "columnMenu.filterEndsWithOperator";
var columnMenuFilterGteOperator = "columnMenu.filterGteOperator";
var columnMenuFilterGtOperator = "columnMenu.filterGtOperator";
var columnMenuFilterLteOperator = "columnMenu.filterLteOperator";
var columnMenuFilterLtOperator = "columnMenu.filterLtOperator";
var columnMenuFilterIsTrue = "columnMenu.filterIsTrue";
var columnMenuFilterAfterOrEqualOperator = "columnMenu.filterAfterOrEqualOperator";
var columnMenuFilterAfterOperator = "columnMenu.filterAfterOperator";
var columnMenuFilterBeforeOperator = "columnMenu.filterBeforeOperator";
var columnMenuFilterBeforeOrEqualOperator = "columnMenu.filterBeforeOrEqualOperator";
var columnMenuFilterAndLogic = "columnMenu.filterAndLogic";
var columnMenuFilterOrLogic = "columnMenu.filterOrLogic";
var sortAriaLabel = "sort.ariaLabel";
var filterAriaLabel = "filter.ariaLabel";
var messages = (_a = {}, _a[pagerItemPerPage] = "items per page", _a[pagerPageSelection] = "Select page", _a[pagerInfo] = "{0} - {1} of {2} items", _a[pagerFirstPage] = "Go to the first page", _a[pagerPreviousPage] = "Go to the previous page", _a[pagerNextPage] = "Go to the next page", _a[pagerLastPage] = "Go to the last page", _a[pagerPage] = "Page", _a[pagerOf] = "of", _a[pagerTotalPages] = "{0}", _a[pagerPageNumberLabel] = "Page", _a[pagerAriaKeyshortcuts] = "Enter ArrowRight ArrowLeft", _a[pagerAriaLabel] = "Pager", _a[pagerPageSizeAriaLabel] = "Page size", _a[pagerMobileSelect] = "Select", _a[pagerMoreButtonLabel] = "More pages", _a[sortAriaLabel] = "Sortable", _a[filterAriaLabel] = "Filter", _a[filterEqOperator] = "Is equal to", _a[filterNotEqOperator] = "Is not equal to", _a[filterIsNullOperator] = "Is null", _a[filterIsNotNullOperator] = "Is not null", _a[filterIsEmptyOperator] = "Is empty", _a[filterIsNotEmptyOperator] = "Is not empty", _a[filterStartsWithOperator] = "Starts with", _a[filterContainsOperator] = "Contains", _a[filterNotContainsOperator] = "Does not contain", _a[filterEndsWithOperator] = "Ends with", _a[filterGteOperator] = "Is greater than or equal to", _a[filterGtOperator] = "Is greater than", _a[filterLteOperator] = "Is less than or equal to", _a[filterLtOperator] = "Is less than", _a[filterIsTrue] = "Is true", _a[filterIsFalse] = "Is false", _a[filterAfterOrEqualOperator] = "Is after or equal to", _a[filterAfterOperator] = "Is after", _a[filterBeforeOperator] = "Is before", _a[filterBeforeOrEqualOperator] = "Is before or equal to", _a[filterAndLogic] = "And", _a[filterOrLogic] = "Or", _a[filterAddExpression] = "Add Expression", _a[filterAddGroup] = "Add Group", _a[filterClose] = "Close", _a[filterGroupAriaLabel] = "Filter toolbar", _a[filterExpressionAriaLabel] = "Filter expression row", _a[filterExpressionDropdownAriaLabel] = "Filter dropdown", _a[filterExpressionOperatorDropdownAriaLabel] = "Filter operator dropdown", _a[filterEnumFilterDropdownAriaLabel] = "Select True/False", _a[filterNumericFilterAriaLabel] = "Enter number", _a[filterTextFilterAriaLabel] = "Enter text", _a[columnMenuFilterClearButton] = "Clear", _a[columnMenuFilterSubmitButton] = "Filter", _a[columnMenuFilterTitle] = "Filter", _a[columnMenuSortAscending] = "Sort Ascending", _a[columnMenuSortDescending] = "Sort Descending", _a[columnMenuFilterEqOperator] = "Is equal to", _a[columnMenuFilterNotEqOperator] = "Is not equal to", _a[columnMenuFilterIsNullOperator] = "Is null", _a[columnMenuFilterIsNotNullOperator] = "Is not null", _a[columnMenuFilterIsEmptyOperator] = "Is empty", _a[columnMenuFilterIsNotEmptyOperator] = "Is not empty", _a[columnMenuFilterStartsWithOperator] = "Starts with", _a[columnMenuFilterContainsOperator] = "Contains", _a[columnMenuFilterNotContainsOperator] = "Does not contain", _a[columnMenuFilterEndsWithOperator] = "Ends with", _a[columnMenuFilterGteOperator] = "Is greater than or equal to", _a[columnMenuFilterGtOperator] = "Is greater than", _a[columnMenuFilterLteOperator] = "Is less than or equal to", _a[columnMenuFilterLtOperator] = "Is less than", _a[columnMenuFilterIsTrue] = "Is true", _a[columnMenuFilterAfterOrEqualOperator] = "Is after or equal to", _a[columnMenuFilterAfterOperator] = "Is after", _a[columnMenuFilterBeforeOperator] = "Is before", _a[columnMenuFilterBeforeOrEqualOperator] = "Is before or equal to", _a[columnMenuFilterAndLogic] = "And", _a[columnMenuFilterOrLogic] = "Or", _a);

// node_modules/@progress/kendo-react-intl/dist/es/hooks/useInternationalization.js
var React16 = __toESM(require_react());
var useInternationalization = function() {
  return React16.useContext(GlobalizationContext).intl;
};

// node_modules/@progress/kendo-react-intl/dist/es/hooks/useLocalization.js
var React17 = __toESM(require_react());
var useLocalization = function() {
  return React17.useContext(GlobalizationContext).localization;
};

// node_modules/@progress/kendo-react-data-tools/dist/es/pager/PagerNumericButtons.js
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
var dots = "...";
var PagerNumericButtons = (
  /** @class */
  function(_super) {
    __extends2(PagerNumericButtons2, _super);
    function PagerNumericButtons2() {
      var _this = _super !== null && _super.apply(this, arguments) || this;
      _this.handlePageChange = function(e, page) {
        e.preventDefault();
        _this.props.pageChange(page, e);
      };
      _this.handleSelectPageChange = function(e) {
        e.preventDefault();
        _this.props.pageChange(e.target.value, e);
      };
      return _this;
    }
    PagerNumericButtons2.prototype.render = function() {
      var _a14;
      var _this = this;
      var localizationService = provideLocalizationService(this);
      var mobileSelectMessage = this.props.messagesMap ? this.props.messagesMap(pagerMobileSelect) : { messageKey: pagerMobileSelect, defaultMessage: messages[pagerMobileSelect] };
      var pageNumberLabelMessage = this.props.messagesMap ? this.props.messagesMap(pagerPage) : { messageKey: pagerPage, defaultMessage: messages[pagerPage] };
      var pagerMorePagesLabelMessage = this.props.messagesMap ? this.props.messagesMap(pagerMoreButtonLabel) : { messageKey: pagerMoreButtonLabel, defaultMessage: messages[pagerMoreButtonLabel] };
      var pagerMoreButtonAriaLabel = localizationService.toLanguageString(pagerMorePagesLabelMessage.messageKey, pagerMorePagesLabelMessage.defaultMessage);
      var prevDots = this.start > 1 && this.renderDots(this.start - 1, pagerMoreButtonAriaLabel);
      var postDots = this.end < this.props.totalPages && this.renderDots(this.end + 1, pagerMoreButtonAriaLabel);
      var prevOptionDots = this.start > 1 && this.renderOptionDots(this.start - 1);
      var postOptionDots = this.end < this.props.totalPages && this.renderOptionDots(this.end + 1);
      var buttons = [];
      for (var idx = this.start; idx <= this.end; idx++) {
        buttons.push(idx);
      }
      var numerics = buttons.map(function(page) {
        return React18.createElement(Button, { className: classNames({ "k-selected": _this.props.currentPage === page }), key: page, fillMode: "flat", themeColor: "primary", size: _this.props.size, rounded: null, role: "button", "aria-label": localizationService.toLanguageString(pageNumberLabelMessage.messageKey, pageNumberLabelMessage.defaultMessage) + " " + page, "aria-current": _this.props.currentPage === page ? true : void 0, onClick: function(e) {
          return _this.handlePageChange(e, page);
        } }, page);
      });
      var options = buttons.map(function(page) {
        return React18.createElement("option", { key: page }, page);
      });
      return React18.createElement(
        React18.Fragment,
        null,
        React18.createElement(
          "select",
          { style: { width: "5em", margin: "0px 1em", display: this.props.type === "dropdown" ? "inline-flex" : "none" }, className: classNames("k-picker k-dropdown-list k-dropdown k-rounded-md", (_a14 = {}, _a14["k-picker-".concat(kendoThemeMaps.sizeMap[this.props.size] || this.props.size)] = this.props.size, _a14)), "aria-label": localizationService.toLanguageString(mobileSelectMessage.messageKey, mobileSelectMessage.defaultMessage), value: this.props.currentPage, onChange: function(e) {
            return _this.handleSelectPageChange(e);
          } },
          prevOptionDots,
          options,
          postOptionDots
        ),
        React18.createElement(
          "div",
          { className: "k-pager-numbers", style: { display: this.props.type === "numbers" ? "" : "none" } },
          prevDots,
          numerics,
          postDots
        )
      );
    };
    Object.defineProperty(PagerNumericButtons2.prototype, "end", {
      get: function() {
        return Math.min(this.start + this.props.buttonCount - 1, this.props.totalPages);
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(PagerNumericButtons2.prototype, "start", {
      get: function() {
        var page = this.props.currentPage;
        var buttonCount = this.props.buttonCount;
        if (page > buttonCount) {
          var reminder = page % buttonCount;
          return reminder === 0 ? page - buttonCount + 1 : page - reminder + 1;
        }
        return 1;
      },
      enumerable: false,
      configurable: true
    });
    PagerNumericButtons2.prototype.renderDots = function(page, ariaLabel) {
      var _this = this;
      return React18.createElement(Button, { fillMode: "flat", themeColor: "primary", size: this.props.size, rounded: null, role: "button", "aria-label": ariaLabel, onClick: function(e) {
        return _this.handlePageChange(e, page);
      } }, dots);
    };
    PagerNumericButtons2.prototype.renderOptionDots = function(page) {
      return React18.createElement("option", { value: page }, dots);
    };
    return PagerNumericButtons2;
  }(React18.Component)
);

// node_modules/@progress/kendo-react-data-tools/dist/es/pager/PagerInput.js
var React23 = __toESM(require_react());

// node_modules/@progress/kendo-react-labels/dist/es/messages/index.js
var _a2;
var labelsOptional = "labels.optional";
var messages2 = (_a2 = {}, _a2[labelsOptional] = "(Optional)", _a2);

// node_modules/@progress/kendo-react-labels/dist/es/package-metadata.js
var packageMetadata2 = {
  name: "@progress/kendo-react-labels",
  productName: "KendoReact",
  productCodes: ["KENDOUIREACT", "KENDOUICOMPLETE"],
  publishDate: 1700063806,
  version: "",
  licensingDocsUrl: "https://www.telerik.com/kendo-react-ui/my-license/?utm_medium=product&utm_source=kendoreact&utm_campaign=kendo-ui-react-purchase-license-keys-warning"
};

// node_modules/@progress/kendo-react-labels/dist/es/FloatingLabel.js
var React19 = __toESM(require_react());
var PropTypes5 = __toESM(require_prop_types());
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
var FloatingLabel = (
  /** @class */
  function(_super) {
    __extends3(FloatingLabel2, _super);
    function FloatingLabel2(props) {
      var _this = _super.call(this, props) || this;
      _this.state = {
        focused: false
      };
      _this.handleFocus = function(_) {
        _this.setState({ focused: true });
      };
      _this.handleBlur = function(_) {
        _this.setState({ focused: false });
      };
      validatePackage(packageMetadata2);
      return _this;
    }
    FloatingLabel2.prototype.render = function() {
      var _a14 = this.props, label = _a14.label, editorId = _a14.editorId, className = _a14.className, labelClassName = _a14.labelClassName, editorValue = _a14.editorValue, editorPlaceholder = _a14.editorPlaceholder, editorValid = _a14.editorValid, editorDisabled = _a14.editorDisabled, style = _a14.style, id = _a14.id, optional = _a14.optional;
      var localizationService = provideLocalizationService(this);
      var localizedOptional = optional ? localizationService.toLanguageString(labelsOptional, messages2[labelsOptional]) : "";
      var optionalElement = localizedOptional && React19.createElement("span", { className: "k-label-optional" }, localizedOptional);
      var spanClassNames = classNames({
        "k-floating-label-container": true,
        "k-focus": this.state.focused,
        "k-empty": !editorPlaceholder && !editorValue && editorValue !== 0,
        "k-text-disabled": editorDisabled,
        "k-rtl": this.props.dir === "rtl"
      }, className);
      var labelClassNames = classNames({
        "k-label": true,
        "k-text-error": editorValid === false,
        "k-text-disabled": editorDisabled
      }, labelClassName);
      return React19.createElement(
        "span",
        { id: this.props.id, className: spanClassNames, onFocus: this.handleFocus, onBlur: this.handleBlur, style, dir: this.props.dir },
        this.props.children,
        label ? editorId ? React19.createElement(
          "label",
          { id, htmlFor: editorId, className: labelClassNames },
          label,
          optionalElement
        ) : React19.createElement(
          "span",
          { id, className: labelClassNames },
          label,
          optionalElement
        ) : null
      );
    };
    FloatingLabel2.propTypes = {
      label: PropTypes5.string,
      editorId: PropTypes5.string,
      editorValue: PropTypes5.oneOfType([PropTypes5.string, PropTypes5.bool, PropTypes5.number]),
      editorPlaceholder: PropTypes5.string,
      editorValid: PropTypes5.bool,
      editorDisabled: PropTypes5.bool,
      id: PropTypes5.string,
      style: PropTypes5.object,
      className: PropTypes5.string,
      labelClassName: PropTypes5.string,
      optional: PropTypes5.bool
    };
    return FloatingLabel2;
  }(React19.Component)
);
registerForLocalization(FloatingLabel);

// node_modules/@progress/kendo-react-inputs/dist/es/package-metadata.js
var packageMetadata3 = {
  name: "@progress/kendo-react-inputs",
  productName: "KendoReact",
  productCodes: ["KENDOUIREACT", "KENDOUICOMPLETE"],
  publishDate: 1700064010,
  version: "",
  licensingDocsUrl: "https://www.telerik.com/kendo-react-ui/my-license/?utm_medium=product&utm_source=kendoreact&utm_campaign=kendo-ui-react-purchase-license-keys-warning"
};

// node_modules/@progress/kendo-react-inputs/dist/es/messages/index.js
var _a3;
var numericIncreaseValue = "numerictextbox.increment";
var numericDecreaseValue = "numerictextbox.decrement";
var sliderIncreaseValue = "slider.increment";
var sliderDecreaseValue = "slider.decrement";
var sliderDragTitle = "slider.dragTitle";
var colorGradientR = "colorGradient.r";
var colorGradientG = "colorGradient.g";
var colorGradientB = "colorGradient.b";
var colorGradientA = "colorGradient.a";
var colorGradientHex = "colorGradient.hex";
var colorGradientContrastRatio = "colorGradient.contrastRatio";
var colorGradientAALevel = "colorGradient.colorGradientAALevel";
var colorGradientAAALevel = "colorGradient.colorGradientAAALevel";
var colorGradientPass = "colorGradient.colorGradientPass";
var colorGradientFail = "colorGradient.colorGradientFail";
var colorGradientHueSliderLabel = "colorGradient.hueSliderLabel";
var colorGradientAlphaSliderLabel = "colorGradient.alphaSliderLabel";
var colorGradientToggleInputsButton = "colorGradient.toggleInputsButton";
var flatColorPickerCancelBtn = "flatColorPicker.cancelBtn";
var flatColorPickerApplyBtn = "flatColorPicker.applyBtn";
var flatColorPickerColorGradientBtn = "flatColorPicker.colorGradientBtn";
var flatColorPickerColorPaletteBtn = "flatColorPicker.colorPaletteBtn";
var flatColorPickerClearBtn = "flatColorPicker.clearBtn";
var checkboxValidation = "checkbox.validation";
var checkboxOptionalText = "checkbox.optionalText";
var radioButtonValidation = "radioButton.validation";
var switchValidation = "switch.validation";
var colorPickerDropdownButtonAriaLabel = "colorPicker.dropdownButtonAriaLabel";
var ratingAriaLabel = "rating.ariaLabel";
var signatureClear = "signature.clear";
var signatureMaximize = "signature.maximize";
var signatureMinimize = "signature.minimize";
var messages3 = (_a3 = {}, _a3[numericIncreaseValue] = "Increase value", _a3[numericDecreaseValue] = "Decrease value", _a3[sliderIncreaseValue] = "Increase", _a3[sliderDecreaseValue] = "Decrease", _a3[sliderDragTitle] = "Drag", _a3[colorGradientR] = "r", _a3[colorGradientG] = "g", _a3[colorGradientB] = "b", _a3[colorGradientA] = "a", _a3[colorGradientHex] = "hex", _a3[colorGradientContrastRatio] = "Contrast ratio", _a3[colorGradientAALevel] = "AA", _a3[colorGradientAAALevel] = "AAA", _a3[colorGradientPass] = "Pass", _a3[colorGradientFail] = "Fail", _a3[colorGradientHueSliderLabel] = "Hue slider", _a3[colorGradientAlphaSliderLabel] = "Alpha slider", _a3[colorGradientToggleInputsButton] = "Toggle colorgradient inputs", _a3[flatColorPickerCancelBtn] = "Cancel", _a3[flatColorPickerApplyBtn] = "Apply", _a3[flatColorPickerColorGradientBtn] = "Color Gradient view", _a3[flatColorPickerColorPaletteBtn] = "Color Palette view", _a3[flatColorPickerClearBtn] = "Clear color value", _a3[checkboxValidation] = "Please check this box if you want to proceed!", _a3[checkboxOptionalText] = "(Optional)", _a3[radioButtonValidation] = "Please select option if you want to proceed!", _a3[switchValidation] = "Please turn on if you want to proceed!", _a3[colorPickerDropdownButtonAriaLabel] = "Select", _a3[ratingAriaLabel] = "Rating", _a3[signatureClear] = "Clear", _a3[signatureMaximize] = "Maximize", _a3[signatureMinimize] = "Minimize", _a3);

// node_modules/@progress/kendo-react-inputs/dist/es/numerictextbox/NumericTextBox.js
var React20 = __toESM(require_react());
var PropTypes6 = __toESM(require_prop_types());

// node_modules/@progress/kendo-react-inputs/dist/es/numerictextbox/utils/index.js
var __assign7 = function() {
  __assign7 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign7.apply(this, arguments);
};
var DEFAULT_NUMBER = 11111111111111e-7;
var MAX_DECIMAL = 0.31111111111111117;
var MIN_DECIMAL = 1;
var ONE_NUMBER = 1;
var ZERO_NUMBER = 0;
var DIGITS_REGEX = /\d/;
var MAX_PRECISION = 15;
var getInitialState = function() {
  return {
    eventValue: null,
    prevLooseValue: "",
    currentLooseValue: "",
    focused: false,
    selectionStart: void 0,
    selectionEnd: void 0,
    decimalSelect: false,
    valueIsCorrected: false,
    valueIsOutOfRange: false
  };
};
var getStateOrPropsValue = function(value, stateValue) {
  return value !== void 0 ? value : stateValue;
};
var formatValue = function(value, format, intlService) {
  if (value === null && value === void 0) {
    return "";
  }
  if (typeof value === "string") {
    return value;
  }
  return intlService.formatNumber(value, format);
};
var fractionLength = function(value) {
  return (String(value).split(".")[1] || "").length;
};
var maxFractionLength = function(value1, value2) {
  return Math.max(fractionLength(value1), fractionLength(value2));
};
var limitPrecision = function(precision) {
  return Math.min(precision, MAX_PRECISION);
};
var toFixedPrecision = function(value, precision) {
  var maxPrecision = limitPrecision(precision);
  return parseFloat(value.toFixed(maxPrecision));
};
var increaseValue = function(value, newState, step, min, max, format, intlService) {
  var maxPrecision = maxFractionLength(value || 0, step || 0);
  var increasedValue = rangeValue(toFixedPrecision((value || 0) + (step || 0), maxPrecision), min, max);
  newState.eventValue = increasedValue;
  newState.currentLooseValue = formatValue(increasedValue, format, intlService);
  newState.selectionStart = newState.selectionEnd = getLastNumberIndex(newState.currentLooseValue, DIGITS_REGEX);
};
var decreaseValue = function(value, newState, step, min, max, format, intlService) {
  var maxPrecision = maxFractionLength(value || 0, step || 0);
  var decreasedValue = rangeValue(toFixedPrecision((value || 0) - (step || 0), maxPrecision), min, max);
  newState.eventValue = decreasedValue;
  newState.currentLooseValue = formatValue(decreasedValue, format, intlService);
  newState.selectionStart = newState.selectionEnd = getLastNumberIndex(newState.currentLooseValue, DIGITS_REGEX);
};
var rangeValue = function(value, min, max) {
  if (value == null) {
    return value;
  }
  if (!(value > 1 || value < 1 || value === 1)) {
    return null;
  }
  if (max !== void 0 && min !== void 0 && max < min) {
    return null;
  }
  if (max !== void 0 && value > max) {
    value = max;
  }
  if (min !== void 0 && value < min) {
    value = min;
  }
  return value;
};
var getMaxCursorPosition = function(nextValue, formatInfo) {
  var formatSuffixIndex = formatInfo.findIndex(function(_a14) {
    var _ = _a14[0], currSuffix = _a14[1];
    return Boolean(currSuffix) && nextValue.indexOf(currSuffix) === nextValue.length - currSuffix.length;
  });
  if (formatSuffixIndex === -1) {
    return -1;
  }
  var suffix = formatInfo[formatSuffixIndex][1];
  return nextValue.length - suffix.length;
};
var getMinCursorPosition = function(nextValue, formatInfo) {
  var formatPrefixIndex = formatInfo.findIndex(function(_a14) {
    var currPrefix = _a14[0], _ = _a14[1];
    return Boolean(currPrefix) && nextValue.indexOf(currPrefix) === 0;
  });
  if (formatPrefixIndex === -1) {
    return -1;
  }
  var prefix = formatInfo[formatPrefixIndex][0];
  return prefix.length;
};
var rangeSelection = function(nextLooseValue, formatInfo, newState) {
  var maxPosition = getMaxCursorPosition(nextLooseValue, formatInfo);
  if (maxPosition !== -1 && newState.selectionStart > maxPosition) {
    newState.selectionStart = newState.selectionEnd = maxPosition;
    return;
  }
  if (newState.selectionStart > nextLooseValue.length) {
    newState.selectionStart = newState.selectionEnd = nextLooseValue.length;
  }
  var minPosition = getMinCursorPosition(nextLooseValue, formatInfo);
  if (minPosition !== -1 && newState.selectionStart < minPosition) {
    newState.selectionStart = newState.selectionEnd = minPosition;
  }
  if (newState.selectionStart === -1) {
    newState.selectionStart = newState.selectionEnd = 0;
  }
};
var setSelection = function(newState, newIndex, nextLooseValue, formatInfo) {
  newState.selectionStart = newState.selectionEnd = newIndex;
  rangeSelection(nextLooseValue, formatInfo, newState);
};
var setInvalid = function(newState, format, formatInfo, intlService) {
  newState.eventValue = intlService.parseNumber(newState.prevLooseValue, format);
  newState.currentLooseValue = newState.prevLooseValue;
  newState.valueIsCorrected = true;
  setSelection(newState, newState.selectionStart, newState.currentLooseValue, formatInfo);
};
var isMinusSymbolAdded = function(newState, symbols) {
  var newText = String(newState.currentLooseValue);
  var oldText = String(newState.prevLooseValue);
  return newText.split(symbols.minusSign).length !== oldText.split(symbols.minusSign).length && newText.length === oldText.length + symbols.minusSign.length;
};
var isMinusSymbolRemoved = function(newState, symbols) {
  var newText = String(newState.currentLooseValue);
  var oldText = String(newState.prevLooseValue);
  return newText.indexOf(symbols.minusSign) === -1 && oldText.indexOf(symbols.minusSign) !== -1;
};
var isDecimalDuplicated = function(newState, symbols) {
  var newText = String(newState.currentLooseValue);
  return newText.split(symbols.decimal).length > 2;
};
var getFormatPrefixSufix = function(format, intlService) {
  var positiveResult = intlService.formatNumber(DEFAULT_NUMBER, format);
  var negativeResult = intlService.formatNumber(-DEFAULT_NUMBER, format);
  var zeroResult = intlService.formatNumber(ZERO_NUMBER, format);
  var oneResult = intlService.formatNumber(ONE_NUMBER, format);
  var positivePrefix = getPrefix(positiveResult);
  var negativePrefix = getPrefix(negativeResult);
  var zeroPrefix = getPrefix(zeroResult);
  var onePrefix = getPrefix(oneResult);
  var positiveSuffix = getSuffix(positiveResult);
  var negativeSuffix = getSuffix(negativeResult);
  var zeroSuffix = getSuffix(zeroResult);
  var oneSuffix = getSuffix(oneResult);
  return {
    positiveInfo: [positivePrefix, positiveSuffix],
    negativeInfo: [negativePrefix, negativeSuffix],
    zeroInfo: [zeroPrefix, zeroSuffix],
    oneInfo: [onePrefix, oneSuffix]
  };
};
var getFormatSymbols = function(format, intlService) {
  var positiveResult = intlService.formatNumber(DEFAULT_NUMBER, format);
  var negativeResult = intlService.formatNumber(-DEFAULT_NUMBER, format);
  var zeroResult = intlService.formatNumber(ZERO_NUMBER, format);
  var oneResult = intlService.formatNumber(ONE_NUMBER, format);
  var symbols = intlService.numberSymbols();
  var sanitizeRegex = new RegExp("[\\d\\".concat(symbols.decimal).concat(symbols.group, "]"), "g");
  var resultWithDuplicates = [positiveResult, negativeResult, zeroResult, oneResult].map(function(result) {
    return result.replace(sanitizeRegex, "");
  }).join("");
  return resultWithDuplicates.split("").filter(function(x, n, s) {
    return s.indexOf(x) === n;
  }).join("");
};
var getInitialPosition = function(nextLooseValue, symbols) {
  var decimalIdex = nextLooseValue.indexOf(symbols.decimal);
  if (decimalIdex > -1) {
    return decimalIdex;
  }
  return getLastNumberIndex(nextLooseValue, DIGITS_REGEX);
};
var reverseString = function(str) {
  return str.split("").reverse().join("");
};
var getLastNumberIndex = function(currentLooseValue, inputRegex) {
  return currentLooseValue.length - reverseString(currentLooseValue).search(inputRegex);
};
var getPrefix = function(str) {
  return str.split(str[str.search(DIGITS_REGEX)])[0];
};
var getSuffix = function(str) {
  var reversedString = reverseString(str);
  return reverseString(reversedString.split(reversedString[reversedString.search(DIGITS_REGEX)])[0]);
};
var getFirstNumberIndex = function(prevLooseValue, inputRegex) {
  return prevLooseValue.search(inputRegex);
};
var getDecimalCount = function(value, decimal) {
  var currentDecimalPlace = value.indexOf(decimal);
  return currentDecimalPlace > -1 ? value.length - currentDecimalPlace - 1 : 0;
};
var changeBasedSelection = function(currentValue, nextValue, selectionPosition, isDelete, sanitizeRegex) {
  var isCurrentLeadingZero = currentValue.replace(sanitizeRegex, "")[0] === "0";
  var isNextLeadingZero = nextValue.replace(sanitizeRegex, "")[0] === "0";
  if (isCurrentLeadingZero && !isNextLeadingZero) {
    return selectionPosition - 1;
  }
  if (isNextLeadingZero && isDelete) {
    return selectionPosition + 1;
  }
  var numberCounter = 0;
  for (var idx = 0; idx < selectionPosition; idx++) {
    if (DIGITS_REGEX.test(currentValue.charAt(idx))) {
      numberCounter++;
    }
  }
  var newSelection = 0;
  while (numberCounter > 0 && nextValue.length > newSelection) {
    if (DIGITS_REGEX.test(nextValue.charAt(newSelection))) {
      numberCounter--;
    }
    newSelection++;
  }
  return newSelection;
};
var sanitizeNumber = function(state, format, intlService) {
  var newState = __assign7({}, state);
  var prevLooseValue = newState.prevLooseValue;
  var symbols = intlService.numberSymbols();
  var restrictedSymbols = getFormatSymbols(format, intlService);
  var currentLooseValueAsString = String(newState.currentLooseValue);
  var prevLooseValueAsString = String(prevLooseValue);
  var sanitizeRegex = new RegExp("[^\\d\\".concat(symbols.decimal, "]"), "g");
  var sanitizeGroupRegex = new RegExp("[^\\d\\".concat(symbols.decimal, "\\").concat(symbols.group, "]"), "g");
  var allSymbolsRegex = new RegExp("[\\d\\".concat(symbols.decimal, "\\").concat(symbols.group, "]"));
  var sanitizedString = currentLooseValueAsString.replace(sanitizeRegex, "");
  var numberStart = getFirstNumberIndex(currentLooseValueAsString, DIGITS_REGEX);
  var numberEnd = numberStart === -1 ? -1 : getLastNumberIndex(currentLooseValueAsString, DIGITS_REGEX);
  var decimalIndex = currentLooseValueAsString.indexOf(symbols.decimal);
  var sanitizedFormattedString = (currentLooseValueAsString.substring(0, numberStart) + currentLooseValueAsString.substring(numberStart, numberEnd).replace(sanitizeGroupRegex, "") + currentLooseValueAsString.substring(numberEnd, currentLooseValueAsString.length)).split("").filter(function(s) {
    return restrictedSymbols.indexOf(s) !== -1 || s.search(allSymbolsRegex) !== -1;
  }).join("");
  var formattedMax = intlService.formatNumber(MAX_DECIMAL, format).replace(sanitizeRegex, "");
  var maxDecimalIndex = formattedMax.indexOf(symbols.decimal);
  var maxDecimalCount = maxDecimalIndex > -1 ? formattedMax.length - maxDecimalIndex - 1 : 0;
  var formattedMin = intlService.formatNumber(MIN_DECIMAL, format).replace(sanitizeRegex, "");
  var minDecimalIndex = formattedMin.indexOf(symbols.decimal);
  var minDecimalCount = minDecimalIndex > -1 ? formattedMin.length - minDecimalIndex - 1 : 0;
  var _a14 = getFormatPrefixSufix(format, intlService), positiveInfo = _a14.positiveInfo, negativeInfo = _a14.negativeInfo, zeroInfo = _a14.zeroInfo, oneInfo = _a14.oneInfo;
  var formatInfo = [positiveInfo, negativeInfo, zeroInfo, oneInfo];
  var isFormatContainPrefixSuffix = formatInfo.findIndex(function(info) {
    return info.findIndex(function(nestedInfo) {
      return Boolean(nestedInfo);
    }) !== -1;
  }) !== 1;
  var isDelete = currentLooseValueAsString.length > 0 && currentLooseValueAsString.length < prevLooseValueAsString.length;
  var isPercentFormat = typeof format === "string" && format[0] === "p" && currentLooseValueAsString && currentLooseValueAsString.indexOf(symbols.percentSign) === -1;
  if (!newState.isPaste) {
    if (currentLooseValueAsString === "") {
      newState.eventValue = null;
      newState.currentLooseValue = "";
      return newState;
    }
    if (newState.currentLooseValue === symbols.minusSign && intlService.formatNumber(-0, format) !== prevLooseValueAsString) {
      newState.eventValue = -0;
      newState.currentLooseValue = formatValue(newState.eventValue, format, intlService);
      setSelection(newState, getInitialPosition(newState.currentLooseValue, symbols), newState.currentLooseValue, formatInfo);
      return newState;
    }
    if (newState.currentLooseValue === symbols.decimal) {
      newState.eventValue = 0;
      var valueCandidate = formatValue(newState.eventValue, format, intlService);
      if (minDecimalCount === 0 && maxDecimalCount > 0) {
        var currentLastNumberIndex = getLastNumberIndex(valueCandidate, DIGITS_REGEX);
        newState.currentLooseValue = valueCandidate.substring(0, currentLastNumberIndex) + symbols.decimal + valueCandidate.substring(currentLastNumberIndex);
      } else {
        newState.currentLooseValue = valueCandidate;
      }
      setSelection(newState, getInitialPosition(newState.currentLooseValue, symbols) + 1, newState.currentLooseValue, formatInfo);
      return newState;
    }
    if (isMinusSymbolAdded(newState, symbols)) {
      var nextValue = intlService.parseNumber(prevLooseValue, format);
      newState.eventValue = -(nextValue !== null ? nextValue : 0);
      newState.currentLooseValue = formatValue(newState.eventValue, format, intlService);
      var currentNumberStart = getFirstNumberIndex(newState.currentLooseValue, DIGITS_REGEX);
      var oldNumberStart = getFirstNumberIndex(prevLooseValueAsString, DIGITS_REGEX);
      setSelection(newState, newState.selectionEnd - 1 + (currentNumberStart - oldNumberStart), newState.currentLooseValue, formatInfo);
      return newState;
    }
    if (isMinusSymbolRemoved(newState, symbols)) {
      newState.eventValue = intlService.parseNumber(newState.currentLooseValue, format);
      setSelection(newState, newState.selectionStart, newState.currentLooseValue, formatInfo);
      return newState;
    }
    if (isDecimalDuplicated(newState, symbols)) {
      setInvalid(newState, format, formatInfo, intlService);
      return newState;
    }
    if (isPercentFormat) {
      newState.eventValue = intlService.parseNumber(currentLooseValueAsString, format) / 100;
      newState.currentLooseValue = formatValue(newState.eventValue, format, intlService);
      return newState;
    }
    var numericSymbols = String(newState.currentLooseValue).replace(/[^\d]/g, "");
    if (numericSymbols.length > MAX_PRECISION) {
      setInvalid(newState, format, formatInfo, intlService);
      return newState;
    }
    if (sanitizedString !== currentLooseValueAsString && currentLooseValueAsString && isFormatContainPrefixSuffix) {
      var formatInfoIndex = formatInfo.findIndex(function(_a15) {
        var prefix = _a15[0], suffix = _a15[1];
        var prefixIndex = currentLooseValueAsString.indexOf(prefix);
        var suffixIndex = currentLooseValueAsString.indexOf(suffix);
        var prefixFound = prefixIndex === 0;
        var suffixFound = suffixIndex === currentLooseValueAsString.length - suffix.length;
        var prefixGap = prefixIndex + prefix.length !== numberStart && numberStart !== -1 && currentLooseValueAsString[prefixIndex + prefix.length] !== symbols.decimal;
        var suffixGap = suffixIndex !== numberEnd && numberEnd !== -1 && currentLooseValueAsString[suffixIndex - 1] !== symbols.decimal;
        if (prefix && suffix) {
          if (prefixGap || suffixGap) {
            return false;
          }
          return prefixFound && suffixFound;
        }
        if (prefix) {
          if (prefixGap) {
            return false;
          }
          return prefixFound;
        }
        if (suffix) {
          if (suffixGap) {
            return false;
          }
          return suffixFound;
        }
        return false;
      });
      if (formatInfoIndex === -1) {
        setInvalid(newState, format, formatInfo, intlService);
        return newState;
      }
    }
    if (sanitizedString[sanitizedString.length - 1] === symbols.decimal && maxDecimalCount > 0) {
      newState.eventValue = intlService.parseNumber(currentLooseValueAsString, format);
      newState.currentLooseValue = sanitizedFormattedString;
      return newState;
    }
    if (newState.currentLooseValue && prevLooseValue) {
      var isSpecialSymbolDeleted = (restrictedSymbols + symbols.decimal + symbols.group).split("").findIndex(function(s) {
        if (currentLooseValueAsString.split("").filter(function(x) {
          return x === s;
        }).length < prevLooseValueAsString.split("").filter(function(x) {
          return x === s;
        }).length && currentLooseValueAsString.length + 1 === prevLooseValueAsString.length) {
          if (s === symbols.decimal && getDecimalCount(prevLooseValueAsString.replace(sanitizeRegex, ""), symbols.decimal) === 0) {
            return false;
          }
          return true;
        }
        return false;
      }) > -1;
      if (isSpecialSymbolDeleted) {
        newState.eventValue = intlService.parseNumber(state.prevLooseValue, format);
        newState.currentLooseValue = state.prevLooseValue;
        return newState;
      }
    }
    var currentDecimalCount = getDecimalCount(sanitizedString, symbols.decimal);
    var endsOnDecimal = sanitizedString[sanitizedString.length - 1] === "0";
    if (isDelete && endsOnDecimal && currentDecimalCount < minDecimalCount) {
      newState.eventValue = intlService.parseNumber(newState.currentLooseValue, format);
      newState.currentLooseValue = formatValue(newState.eventValue, format, intlService);
      return newState;
    }
    if (currentDecimalCount > 0) {
      var valueUntillDecimal = currentLooseValueAsString.substring(0, decimalIndex);
      if (endsOnDecimal && (!valueUntillDecimal || prevLooseValueAsString.indexOf(valueUntillDecimal) !== 0)) {
        newState.eventValue = intlService.parseNumber(newState.currentLooseValue, format);
        var nextLooseValue = formatValue(newState.eventValue, format, intlService);
        setSelection(newState, changeBasedSelection(currentLooseValueAsString, nextLooseValue, newState.selectionEnd, isDelete, sanitizeRegex), nextLooseValue, formatInfo);
        newState.currentLooseValue = nextLooseValue;
        return newState;
      }
      if (currentDecimalCount > maxDecimalCount) {
        var looseDecimalPlace = currentLooseValueAsString.indexOf(symbols.decimal);
        var result = currentLooseValueAsString.substring(0, looseDecimalPlace) + currentLooseValueAsString.substring(looseDecimalPlace, looseDecimalPlace + 1 + maxDecimalCount) + currentLooseValueAsString.substring(numberEnd, String(newState.currentLooseValue).length);
        newState.eventValue = intlService.parseNumber(result, format);
        newState.currentLooseValue = result;
        setSelection(newState, newState.selectionStart, result, formatInfo);
        return newState;
      }
      if (minDecimalCount !== maxDecimalCount && currentDecimalCount <= maxDecimalCount && endsOnDecimal) {
        newState.eventValue = intlService.parseNumber(newState.currentLooseValue, format);
        newState.currentLooseValue = sanitizedFormattedString;
        return newState;
      }
      if (currentDecimalCount < minDecimalCount) {
        newState.eventValue = intlService.parseNumber(newState.currentLooseValue, format);
        newState.currentLooseValue = formatValue(newState.eventValue, format, intlService);
        return newState;
      }
    }
  }
  newState.eventValue = intlService.parseNumber(newState.currentLooseValue, format);
  if (isPercentFormat) {
    newState.eventValue = newState.eventValue / 100;
  }
  if (typeof newState.eventValue === "number") {
    var nextLooseValue = formatValue(newState.eventValue, format, intlService);
    if (currentLooseValueAsString.length === 1) {
      setSelection(newState, getInitialPosition(nextLooseValue, symbols), nextLooseValue, formatInfo);
    } else {
      setSelection(newState, changeBasedSelection(currentLooseValueAsString, nextLooseValue, newState.selectionEnd, isDelete, sanitizeRegex), nextLooseValue, formatInfo);
    }
    newState.currentLooseValue = nextLooseValue;
  } else {
    newState.currentLooseValue = formatValue(intlService.parseNumber(sanitizedString), format, intlService);
  }
  return newState;
};

// node_modules/@progress/kendo-react-inputs/dist/es/numerictextbox/NumericTextBox.js
var __assign8 = function() {
  __assign8 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign8.apply(this, arguments);
};
var VALIDATION_MESSAGE = "Please enter a valid value!";
var NumericTextBoxPropsContext = createPropsContext();
var NumericTextBox = React20.forwardRef(function(directProps, target) {
  var _a14;
  validatePackage(packageMetadata3);
  var props = usePropsContext(NumericTextBoxPropsContext, directProps);
  var calculatedId = React20.useMemo(function() {
    return guid();
  }, []);
  var inputId = props.id || calculatedId;
  var intlService = useInternationalization();
  var localizationService = useLocalization();
  var elementRef = React20.useRef(null);
  var valueDuringChangeRef = React20.useRef();
  var _b3 = React20.useState(false), forceUpdate = _b3[0], setForceUpdate = _b3[1];
  var stateRef = React20.useRef(getInitialState());
  var isPasteRef = React20.useRef(false);
  var prevLooseValueRef = React20.useRef();
  var stateValueRef = React20.useRef(props.defaultValue);
  var looseValue = formatValue(stateRef.current.focused && !props.disabled ? stateRef.current.currentLooseValue : getStateOrPropsValue(props.value, stateValueRef.current), props.format, intlService);
  prevLooseValueRef.current = looseValue;
  var Prefix = useCustomComponent(props.prefix)[0];
  var Suffix = useCustomComponent(props.suffix)[0];
  React20.useEffect(function() {
    if (elementRef.current && elementRef.current.setCustomValidity) {
      elementRef.current.setCustomValidity(validityGetter().valid ? "" : props.validationMessage || VALIDATION_MESSAGE);
    }
  });
  var focusElement2 = React20.useCallback(function() {
    if (elementRef.current) {
      elementRef.current.focus();
    }
  }, []);
  var valueGetter = React20.useCallback(function() {
    if (valueDuringChangeRef.current !== void 0) {
      return valueDuringChangeRef.current;
    } else {
      return getStateOrPropsValue(props.value, stateValueRef.current);
    }
  }, [props.value]);
  var nameGetter = React20.useCallback(function() {
    return props.name;
  }, [props.name]);
  var requiredGetter = React20.useCallback(function() {
    return props.required;
  }, [props.required]);
  var validityGetter = React20.useCallback(function() {
    var customError = props.validationMessage !== void 0;
    var currentValue = valueGetter();
    var valid = props.valid !== void 0 ? props.valid : !stateRef.current.valueIsOutOfRange && (!requiredGetter() || currentValue !== null && currentValue !== void 0);
    return {
      customError,
      valid,
      valueMissing: currentValue === null || currentValue === void 0
    };
  }, [props.validationMessage, props.valid, valueGetter, requiredGetter]);
  var validityStylesGetter = React20.useCallback(function() {
    return props.validityStyles;
  }, [props.validityStyles]);
  var propsGetter = React20.useCallback(function() {
    return props;
  }, [props]);
  var getImperativeHandle = React20.useCallback(function() {
    var options = {
      element: elementRef.current,
      focus: focusElement2
    };
    Object.defineProperty(options, "name", { get: nameGetter });
    Object.defineProperty(options, "value", { get: valueGetter });
    Object.defineProperty(options, "validity", { get: validityGetter });
    Object.defineProperty(options, "validityStyles", { get: validityStylesGetter });
    Object.defineProperty(options, "required", { get: requiredGetter });
    Object.defineProperty(options, "props", { get: propsGetter });
    return options;
  }, [nameGetter, valueGetter, validityGetter, validityStylesGetter, requiredGetter, focusElement2, propsGetter]);
  React20.useImperativeHandle(target, getImperativeHandle);
  var getCurrentState = React20.useCallback(function() {
    return {
      eventValue: getStateOrPropsValue(props.value, stateValueRef.current),
      prevLooseValue: prevLooseValueRef.current,
      currentLooseValue: elementRef.current.value,
      selectionStart: elementRef.current.selectionStart,
      selectionEnd: elementRef.current.selectionEnd,
      decimalSelect: false,
      valueIsCorrected: false,
      valueIsOutOfRange: false,
      isPaste: isPasteRef.current,
      focused: stateRef.current.focused
    };
  }, [props.value]);
  var triggerChange = React20.useCallback(function(event, newState) {
    if (props.disabled) {
      return;
    }
    valueDuringChangeRef.current = newState.eventValue;
    stateValueRef.current = newState.eventValue;
    var formattedValue = formatValue(rangeValue(newState.eventValue, props.min, props.max), props.format, intlService);
    var rangedValue = rangeValue(intlService.parseNumber(formattedValue, props.format), props.min, props.max);
    if (rangedValue !== newState.eventValue) {
      newState.valueIsOutOfRange = true;
      newState.eventValue = rangedValue;
      stateValueRef.current = rangedValue;
    }
    var shouldFireEvent = props.value !== newState.eventValue;
    if (shouldFireEvent) {
      dispatchEvent(props.onChange, event, getImperativeHandle(), { value: newState.eventValue });
    }
    valueDuringChangeRef.current = void 0;
    stateRef.current = newState;
    setForceUpdate(function(_x) {
      return !_x;
    });
  }, [props.value, props.onChange, props.disabled, setForceUpdate, getImperativeHandle]);
  var onChangeHandler = React20.useCallback(function(event) {
    var stateCandidate = getCurrentState();
    isPasteRef.current = false;
    triggerChange(event, sanitizeNumber(stateCandidate, props.format, intlService));
  }, [props.format, props.onChange, intlService, triggerChange, getCurrentState]);
  var onKeyDown2 = React20.useCallback(function(event) {
    var newState = getCurrentState();
    var currentValue = intlService.parseNumber(String(newState.currentLooseValue), props.format);
    if (newState.selectionEnd > newState.selectionStart && newState.selectionEnd - newState.selectionStart === String(newState.currentLooseValue).length) {
      var numericSymbols = intlService.numberSymbols();
      var isMinus = numericSymbols && event.key === numericSymbols.minusSign;
      var isDecimal = numericSymbols && event.key === numericSymbols.decimal;
      isPasteRef.current = !isMinus && !isDecimal;
      return;
    }
    switch (event.keyCode) {
      case 38:
        increaseValue(currentValue, newState, props.step, props.min, props.max, props.format, intlService);
        break;
      case 40:
        decreaseValue(currentValue, newState, props.step, props.min, props.max, props.format, intlService);
        break;
      case 13:
        if (props.rangeOnEnter === false) {
          return;
        }
        var formattedValue = formatValue(rangeValue(currentValue, props.min, props.max), props.format, intlService);
        var rangedValue = rangeValue(intlService.parseNumber(formattedValue, props.format), props.min, props.max);
        newState.eventValue = rangedValue;
        newState.currentLooseValue = formatValue(rangedValue, props.format, intlService);
        newState.selectionStart = newState.selectionEnd = newState.currentLooseValue.length;
        break;
      case 110:
        var element2 = elementRef.current;
        var symbols = intlService.numberSymbols();
        if (element2) {
          newState.currentLooseValue = newState.currentLooseValue.slice(0, newState.selectionStart) + symbols.decimal + newState.currentLooseValue.slice(newState.selectionEnd);
          newState.selectionStart = newState.selectionEnd = newState.selectionStart + 1;
          newState = sanitizeNumber(newState, props.format, intlService);
        }
        break;
      default:
        return;
    }
    event.preventDefault();
    triggerChange(event, newState);
  }, [props.format, props.min, props.max, props.step, props.onChange, props.rangeOnEnter, triggerChange, getCurrentState]);
  var onPasteHandler = React20.useCallback(function() {
    isPasteRef.current = true;
  }, []);
  var onIncrease = React20.useCallback(function(event) {
    if (props.readOnly || props.disabled) {
      return;
    }
    var newState = getCurrentState();
    increaseValue(intlService.parseNumber(String(newState.currentLooseValue), props.format), newState, props.step, props.min, props.max, props.format, intlService);
    triggerChange(event, newState);
  }, [props.format, props.min, props.max, props.step, props.onChange, props.readOnly, props.disabled, triggerChange, getCurrentState]);
  var onDecrease = React20.useCallback(function(event) {
    if (props.readOnly || props.disabled) {
      return;
    }
    var newState = getCurrentState();
    decreaseValue(intlService.parseNumber(String(newState.currentLooseValue), props.format), newState, props.step, props.min, props.max, props.format, intlService);
    triggerChange(event, newState);
  }, [props.format, props.min, props.max, props.step, props.onChange, props.readOnly, props.disabled, triggerChange, getCurrentState]);
  var onWheelHandler = React20.useCallback(function(event) {
    var activeElement = getActiveElement(document);
    if (!document || activeElement !== elementRef.current || !elementRef.current || props.readOnly || props.disabled) {
      return;
    }
    if (event.nativeEvent.deltaY < 0) {
      onIncrease(event);
    }
    if (event.nativeEvent.deltaY > 0) {
      onDecrease(event);
    }
  }, [onIncrease, onDecrease, props.disabled, props.readOnly]);
  var onFocus2 = React20.useCallback(function(event) {
    stateRef.current.currentLooseValue = prevLooseValueRef.current;
    stateRef.current.focused = true;
    dispatchEvent(props.onFocus, event, getImperativeHandle(), {});
    setForceUpdate(function(x) {
      return !x;
    });
  }, [props.onFocus, setForceUpdate, getImperativeHandle]);
  var onBlur = React20.useCallback(function(event) {
    stateRef.current = getInitialState();
    dispatchEvent(props.onBlur, event, getImperativeHandle(), {});
    setForceUpdate(function(x) {
      return !x;
    });
  }, [props.onBlur, setForceUpdate, getImperativeHandle]);
  var onMouseDown = React20.useCallback(function(e) {
    if (document && elementRef.current) {
      var activeElement = getActiveElement(document);
      e.preventDefault();
      if (activeElement !== elementRef.current) {
        elementRef.current.focus();
      }
    }
  }, []);
  React20.useLayoutEffect(function() {
    if (elementRef.current && elementRef.current.type !== "number" && stateRef.current.selectionStart !== void 0 && stateRef.current.selectionEnd !== void 0) {
      elementRef.current.selectionStart = stateRef.current.selectionStart;
      elementRef.current.selectionEnd = stateRef.current.selectionEnd;
      stateRef.current.selectionStart = void 0;
      stateRef.current.selectionEnd = void 0;
    }
  }, [forceUpdate]);
  var isValid = !validityStylesGetter() || validityGetter().valid;
  var numerictextbox = React20.createElement(
    "span",
    { dir: props.dir, style: !props.label ? __assign8({ width: props.width }, props.style) : props.style, className: classNames("k-input", "k-numerictextbox", (_a14 = {}, _a14["k-input-".concat(kendoThemeMaps.sizeMap[props.size] || props.size)] = props.size, _a14["k-input-".concat(props.fillMode)] = props.fillMode, _a14["k-rounded-".concat(kendoThemeMaps.roundedMap[props.rounded] || props.rounded)] = props.rounded, _a14["k-invalid"] = !isValid, _a14["k-required"] = props.required, _a14["k-disabled"] = props.disabled, _a14), props.className), "aria-disabled": props.disabled ? "true" : void 0 },
    React20.createElement(Prefix, null),
    React20.createElement("input", { role: "spinbutton", value: looseValue === null ? "" : looseValue, tabIndex: getTabIndex(props.tabIndex, props.disabled), accessKey: props.accessKey, disabled: props.disabled, title: props.title, "aria-disabled": props.disabled ? "true" : void 0, "aria-valuemin": props.min, "aria-valuemax": props.max, "aria-label": props.ariaLabel, "aria-labelledby": props.ariaLabelledBy, "aria-describedby": props.ariaDescribedBy, placeholder: props.placeholder, spellCheck: false, autoComplete: "off", autoCorrect: "off", type: props.inputType || "tel", className: "k-input-inner", id: inputId, name: props.name, readOnly: props.readOnly, style: props.inputStyle, onChange: onChangeHandler, onFocus: onFocus2, onBlur, onKeyDown: onKeyDown2, onPaste: onPasteHandler, onWheel: onWheelHandler, ref: elementRef }),
    React20.createElement(Suffix, null),
    props.children,
    props.spinners && React20.createElement(
      "span",
      { className: "k-input-spinner k-spin-button", onMouseDown },
      React20.createElement(Button, { tabIndex: -1, type: "button", icon: "caret-alt-up", svgIcon: caretAltUpIcon, rounded: null, className: "k-spinner-increase", "aria-label": localizationService.toLanguageString(numericIncreaseValue, messages3[numericIncreaseValue]), title: localizationService.toLanguageString(numericIncreaseValue, messages3[numericIncreaseValue]), onClick: onIncrease }),
      React20.createElement(Button, { tabIndex: -1, type: "button", icon: "caret-alt-down", svgIcon: caretAltDownIcon, rounded: null, className: "k-spinner-decrease", "aria-label": localizationService.toLanguageString(numericDecreaseValue, messages3[numericDecreaseValue]), title: localizationService.toLanguageString(numericDecreaseValue, messages3[numericDecreaseValue]), onClick: onDecrease })
    )
  );
  return props.label ? React20.createElement(FloatingLabel, { label: props.label, editorId: inputId, editorValue: looseValue === null ? "" : looseValue, editorValid: isValid, editorDisabled: props.disabled, editorPlaceholder: props.placeholder, children: numerictextbox, style: { width: props.width }, dir: props.dir }) : numerictextbox;
});
NumericTextBox.propTypes = {
  value: PropTypes6.number,
  defaultValue: PropTypes6.number,
  step: PropTypes6.number,
  format: PropTypes6.oneOfType([
    PropTypes6.string,
    PropTypes6.shape({
      style: PropTypes6.oneOf(["decimal", "currency", "percent", "scientific", "accounting"]),
      currency: PropTypes6.string,
      currencyDisplay: PropTypes6.oneOf(["symbol", "code", "name"]),
      useGrouping: PropTypes6.bool,
      minimumIntegerDigits: PropTypes6.number,
      minimumFractionDigits: PropTypes6.number,
      maximumFractionDigits: PropTypes6.number
    })
  ]),
  width: PropTypes6.oneOfType([
    PropTypes6.string,
    PropTypes6.number
  ]),
  tabIndex: PropTypes6.number,
  accessKey: PropTypes6.string,
  title: PropTypes6.string,
  placeholder: PropTypes6.string,
  min: PropTypes6.number,
  max: PropTypes6.number,
  spinners: PropTypes6.bool,
  disabled: PropTypes6.bool,
  readOnly: PropTypes6.bool,
  dir: PropTypes6.string,
  name: PropTypes6.string,
  label: PropTypes6.string,
  validationMessage: PropTypes6.string,
  required: PropTypes6.bool,
  id: PropTypes6.string,
  rangeOnEnter: PropTypes6.bool,
  ariaLabelledBy: PropTypes6.string,
  ariaDescribedBy: PropTypes6.string,
  ariaLabel: PropTypes6.string,
  onChange: PropTypes6.func,
  onFocus: PropTypes6.func,
  onBlur: PropTypes6.func,
  size: PropTypes6.oneOf([null, "small", "medium", "large"]),
  rounded: PropTypes6.oneOf([null, "small", "medium", "large", "full"]),
  fillMode: PropTypes6.oneOf([null, "solid", "flat", "outline"])
};
NumericTextBox.displayName = "KendoNumericTextBox";
NumericTextBox.defaultProps = {
  prefix: function(_) {
    return null;
  },
  suffix: function(_) {
    return null;
  },
  step: 1,
  spinners: true,
  disabled: false,
  required: false,
  validityStyles: true,
  rangeOnEnter: true,
  onChange: function(_) {
    return;
  },
  onFocus: function(_) {
    return;
  },
  onBlur: function(_) {
    return;
  },
  size: "medium",
  rounded: "medium",
  fillMode: "solid"
};

// node_modules/@progress/kendo-react-inputs/dist/es/textbox/Textbox.js
var React21 = __toESM(require_react());
var PropTypes7 = __toESM(require_prop_types());
var __assign9 = function() {
  __assign9 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign9.apply(this, arguments);
};
var __rest5 = function(s, e) {
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
var TextBox = React21.forwardRef(function(props, ref) {
  var _a14;
  validatePackage(packageMetadata3);
  var element2 = React21.useRef(null);
  var target = React21.useRef(null);
  var valueDuringChangeRef = React21.useRef();
  var valueGetter = React21.useCallback(function() {
    var _a15;
    if (valueDuringChangeRef.current !== void 0) {
      return valueDuringChangeRef.current;
    } else {
      return (_a15 = element2.current) === null || _a15 === void 0 ? void 0 : _a15.value;
    }
  }, []);
  React21.useImperativeHandle(target, function() {
    var result = {
      get element() {
        return element2.current;
      },
      get name() {
        return element2.current && element2.current.name;
      },
      get value() {
        return valueGetter();
      }
    };
    return result;
  });
  React21.useImperativeHandle(ref, function() {
    return target.current;
  });
  var _b3 = props, size = _b3.size, fillMode = _b3.fillMode, rounded = _b3.rounded, className = _b3.className, dir = _b3.dir, style = _b3.style, _c6 = _b3.prefix, prefix = _c6 === void 0 ? defaultProps3.prefix : _c6, _d = _b3.suffix, suffix = _d === void 0 ? defaultProps3.suffix : _d, valid = _b3.valid, _modified = _b3.modified, _touched = _b3.touched, _visited = _b3.visited, other = __rest5(_b3, ["size", "fillMode", "rounded", "className", "dir", "style", "prefix", "suffix", "valid", "modified", "touched", "visited"]);
  var Prefix = useCustomComponent(prefix)[0];
  var Suffix = useCustomComponent(suffix)[0];
  var _e = React21.useState(false), focused = _e[0], setFocused = _e[1];
  var handleFocus = function(_) {
    setFocused(true);
  };
  var handleBlur = function(_) {
    setFocused(false);
  };
  var handleChange = React21.useCallback(function(event) {
    valueDuringChangeRef.current = event.target.value;
    if (props.onChange) {
      props.onChange.call(void 0, {
        syntheticEvent: event,
        nativeEvent: event.nativeEvent,
        value: event.target.value,
        target: target.current
      });
    }
    valueDuringChangeRef.current = void 0;
  }, [props.onChange]);
  var _f = useAsyncFocusBlur({
    onFocus: handleFocus,
    onBlur: handleBlur,
    onSyncFocus: props.onFocus,
    onSyncBlur: props.onBlur
  }), onFocus2 = _f.onFocus, onBlur = _f.onBlur;
  return React21.createElement(
    "span",
    { style, dir, className: classNames("k-textbox k-input", (_a14 = {}, _a14["k-input-".concat(kendoThemeMaps.sizeMap[size] || size)] = size, _a14["k-input-".concat(fillMode)] = fillMode, _a14["k-rounded-".concat(kendoThemeMaps.roundedMap[rounded] || rounded)] = rounded, _a14), {
      "k-focus": focused,
      "k-required": props.required,
      "k-disabled": props.disabled,
      "k-invalid": props.valid === false
    }, className), onFocus: onFocus2, onBlur },
    React21.createElement(Prefix, null),
    React21.createElement("input", __assign9({ ref: element2, className: "k-input-inner" }, other, { onChange: handleChange })),
    React21.createElement(Suffix, null)
  );
});
var defaultProps3 = {
  prefix: function(_) {
    return null;
  },
  suffix: function(_) {
    return null;
  },
  size: "medium",
  rounded: "medium",
  fillMode: "solid"
};
TextBox.propTypes = {
  size: PropTypes7.oneOf([null, "small", "medium", "large"]),
  rounded: PropTypes7.oneOf([null, "small", "medium", "large", "full"]),
  fillMode: PropTypes7.oneOf([null, "solid", "flat", "outline"])
};
TextBox.displayName = "KendoReactTextBoxComponent";
TextBox.defaultProps = defaultProps3;

// node_modules/@progress/kendo-react-inputs/dist/es/input/InputPrefix.js
var React22 = __toESM(require_react());
var __assign10 = function() {
  __assign10 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign10.apply(this, arguments);
};
var InputPrefix = React22.forwardRef(function(props, ref) {
  var target = React22.useRef(null);
  var element2 = React22.useRef(null);
  React22.useImperativeHandle(target, function() {
    return { element: element2.current };
  });
  React22.useImperativeHandle(ref, function() {
    return target.current;
  });
  return React22.createElement("span", __assign10({}, props, { className: classNames("k-input-prefix", props.className) }));
});
InputPrefix.displayName = "KendoReactInputPrefix";

// node_modules/@progress/kendo-react-data-tools/dist/es/pager/PagerInput.js
var __extends4 = function() {
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
var PagerInput = (
  /** @class */
  function(_super) {
    __extends4(PagerInput2, _super);
    function PagerInput2() {
      var _this = _super !== null && _super.apply(this, arguments) || this;
      _this.state = { page: _this.props.currentPage };
      _this.handleOnChange = function(e) {
        _this.setState({ page: e.target.value });
        if (e.target.value) {
          _this.props.pageChange(e.target.value, e);
        }
      };
      return _this;
    }
    PagerInput2.prototype.render = function() {
      var intlService = provideIntlService(this);
      var localizationService = provideLocalizationService(this);
      var pageMessage = this.props.messagesMap ? this.props.messagesMap(pagerPage) : { messageKey: pagerPage, defaultMessage: messages[pagerPage] };
      var ofMessage = this.props.messagesMap ? this.props.messagesMap(pagerOf) : { messageKey: pagerOf, defaultMessage: messages[pagerOf] };
      var totalPagesMessage = this.props.messagesMap ? this.props.messagesMap(pagerTotalPages) : { messageKey: pagerTotalPages, defaultMessage: messages[pagerTotalPages] };
      return React23.createElement(
        React23.Fragment,
        null,
        React23.createElement(
          "span",
          { className: "k-pager-input" },
          React23.createElement("span", null, localizationService.toLanguageString(pageMessage.messageKey, pageMessage.defaultMessage)),
          React23.createElement(NumericTextBox, { value: this.props.currentPage !== void 0 ? this.props.currentPage : this.state.page, onChange: this.handleOnChange, min: 1, spinners: false }),
          React23.createElement("span", null, "".concat(localizationService.toLanguageString(ofMessage.messageKey, ofMessage.defaultMessage), " ").concat(intlService.format(localizationService.toLanguageString(totalPagesMessage.messageKey, totalPagesMessage.defaultMessage), [
            this.props.totalPages
          ])))
        )
      );
    };
    return PagerInput2;
  }(React23.Component)
);
registerForLocalization(PagerInput);

// node_modules/@progress/kendo-react-data-tools/dist/es/pager/PagerPageSizes.js
var React38 = __toESM(require_react());

// node_modules/@progress/kendo-react-dropdowns/dist/es/DropDownList/DropDownList.js
var React37 = __toESM(require_react());
var PropTypes15 = __toESM(require_prop_types());

// node_modules/@progress/kendo-react-dropdowns/dist/es/common/ListContainer.js
var React24 = __toESM(require_react());
var __extends5 = function() {
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
var __assign11 = function() {
  __assign11 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign11.apply(this, arguments);
};
var ListContainer = (
  /** @class */
  function(_super) {
    __extends5(ListContainer2, _super);
    function ListContainer2() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    ListContainer2.prototype.render = function() {
      var _a14 = this.props, children = _a14.children, width = _a14.width, dir = _a14.dir, itemsCount = _a14.itemsCount, popupSettings = _a14.popupSettings;
      return React24.createElement(Popup, __assign11({ style: { width, direction: dir }, contentKey: itemsCount && itemsCount.join() }, popupSettings), children);
    };
    return ListContainer2;
  }(React24.Component)
);
var ListContainer_default = ListContainer;

// node_modules/@progress/kendo-react-dropdowns/dist/es/common/ListFilter.js
var React25 = __toESM(require_react());
var PropTypes8 = __toESM(require_prop_types());
var __assign12 = function() {
  __assign12 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign12.apply(this, arguments);
};
var ListFilter = React25.forwardRef(function(props, ref) {
  var input = React25.useRef(null);
  React25.useImperativeHandle(ref, function() {
    return input.current;
  });
  return React25.createElement(
    "div",
    { className: "k-list-filter" },
    React25.createElement(TextBox, __assign12({}, props, { ref: input, value: props.value || "", onChange: props.onChange, onKeyDown: props.onKeyDown, tabIndex: props.tabIndex, onClick: function(e) {
      return e.stopPropagation();
    }, size: props.size, fillMode: props.fillMode, rounded: props.rounded, prefix: function() {
      return React25.createElement(
        InputPrefix,
        null,
        React25.createElement(IconWrap, { name: "search", icon: searchIcon })
      );
    } }))
  );
});
ListFilter.propTypes = {
  value: PropTypes8.oneOfType([PropTypes8.string, PropTypes8.number, PropTypes8.array]),
  tabIndex: PropTypes8.number,
  onChange: PropTypes8.func,
  onKeyDown: PropTypes8.func,
  size: PropTypes8.oneOf([null, "small", "medium", "large"]),
  rounded: PropTypes8.oneOf([null, "small", "medium", "large", "full"]),
  fillMode: PropTypes8.oneOf([null, "solid", "flat", "outline"])
};
ListFilter.displayName = "KendoReactListFilter";
var ListFilter_default = ListFilter;

// node_modules/@progress/kendo-react-dropdowns/dist/es/common/GroupStickyHeader.js
var React26 = __toESM(require_react());
var __extends6 = function() {
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
var GroupStickyHeader = (
  /** @class */
  function(_super) {
    __extends6(GroupStickyHeader2, _super);
    function GroupStickyHeader2() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    GroupStickyHeader2.prototype.render = function() {
      var _a14 = this.props, group = _a14.group, groupMode = _a14.groupMode, renderer = _a14.render;
      var item = React26.createElement("div", { className: "k-list-group-sticky-header" }, groupMode === "classic" ? group : React26.createElement("div", { className: "k-list-header-text" }, group));
      return renderer !== void 0 ? renderer.call(void 0, item, this.props) : item;
    };
    return GroupStickyHeader2;
  }(React26.Component)
);
var GroupStickyHeader_default = GroupStickyHeader;

// node_modules/@progress/kendo-react-dropdowns/dist/es/common/ListDefaultItem.js
var React27 = __toESM(require_react());

// node_modules/@progress/kendo-react-dropdowns/dist/es/common/utils.js
var isPresent = function(value) {
  return value !== null && value !== void 0;
};
var sameCharsOnly = function(word, character) {
  for (var idx = 0; idx < word.length; idx++) {
    if (word.charAt(idx) !== character) {
      return false;
    }
  }
  return true;
};
var shuffleData = function(data, splitIndex, defaultItem) {
  var result = data;
  if (defaultItem) {
    result = [defaultItem].concat(result);
  }
  return result.slice(splitIndex).concat(result.slice(0, splitIndex));
};
var matchText = function(text, word, ignoreCase) {
  if (!isPresent(text)) {
    return false;
  }
  var temp = String(text);
  if (ignoreCase) {
    temp = temp.toLowerCase();
  }
  return temp.indexOf(word) === 0;
};
var scrollToItem = function(scrollElem, list, itemIndex, translate, virtualScroll) {
  var viewportHeight = scrollElem.offsetHeight;
  var li = list.children.item(itemIndex);
  var itemOffsetTop = li.offsetTop + (virtualScroll ? translate - scrollElem.scrollTop : 0);
  var itemHeight = li.offsetHeight;
  if (virtualScroll) {
    var diff = 0;
    if (itemOffsetTop + itemHeight > viewportHeight) {
      diff = itemOffsetTop + itemHeight - viewportHeight;
    } else if (itemOffsetTop < 0) {
      diff = itemOffsetTop;
    }
    if (diff !== 0) {
      scrollElem.scrollTop += diff;
    } else if (scrollElem.scrollTop === 0 && translate !== 0) {
      scrollElem.scrollTop = translate;
    }
  } else {
    if (itemOffsetTop + itemHeight > viewportHeight + scrollElem.scrollTop) {
      scrollElem.scrollTop = itemOffsetTop + itemHeight - viewportHeight;
    } else if (itemOffsetTop < scrollElem.scrollTop) {
      scrollElem.scrollTop -= scrollElem.scrollTop - itemOffsetTop;
    }
  }
};
var itemIndexStartsWith = function(items, text, field) {
  var result = -1;
  if (text) {
    text = text.toLowerCase();
    for (var i = 0; i < items.length; i++) {
      var itemText = (getItemValue(items[i], field) || "") + "";
      if (itemText && itemText.toLowerCase().startsWith(text)) {
        result = i;
        break;
      }
    }
  }
  return result;
};
var getItemValue = function(item, field) {
  if (field && isPresent(item)) {
    var path = field.split(".");
    var data_1 = item;
    path.forEach(function(p) {
      data_1 = data_1 ? data_1[p] : void 0;
    });
    return data_1;
  }
  return item;
};
var areSame = function(item1, item2, key) {
  return item1 === item2 || isPresent(item1) === isPresent(item2) && getItemValue(item1, key) === getItemValue(item2, key);
};

// node_modules/@progress/kendo-react-dropdowns/dist/es/common/ListDefaultItem.js
var __extends7 = function() {
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
var preventDefault = function(e) {
  return e.preventDefault();
};
var ListDefaultItem = (
  /** @class */
  function(_super) {
    __extends7(ListDefaultItem2, _super);
    function ListDefaultItem2() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    ListDefaultItem2.prototype.render = function() {
      var _a14 = this.props, selected = _a14.selected, defaultItem = _a14.defaultItem, textField = _a14.textField;
      return React27.createElement("div", { onClick: this.props.onClick, onMouseDown: preventDefault, style: { position: "unset" }, className: classNames("k-list-optionlabel", {
        "k-selected": selected
      }) }, getItemValue(defaultItem, textField) || "");
    };
    return ListDefaultItem2;
  }(React27.Component)
);
var ListDefaultItem_default = ListDefaultItem;

// node_modules/@progress/kendo-react-dropdowns/dist/es/common/List.js
var React30 = __toESM(require_react());

// node_modules/@progress/kendo-react-dropdowns/dist/es/common/ListItem.js
var React28 = __toESM(require_react());
var __extends8 = function() {
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
var ListItem = (
  /** @class */
  function(_super) {
    __extends8(ListItem2, _super);
    function ListItem2() {
      var _this = _super !== null && _super.apply(this, arguments) || this;
      _this.handleClick = function(e) {
        return _this.props.onClick(_this.props.index, e);
      };
      return _this;
    }
    ListItem2.prototype.render = function() {
      var _a14 = this.props, selected = _a14.selected, group = _a14.group, dataItem = _a14.dataItem, virtual = _a14.virtual, groupMode = _a14.groupMode, disabled = _a14.disabled, renderer = _a14.render;
      var item = React28.createElement(
        "li",
        { id: this.props.id, role: "option", "aria-selected": selected, "aria-disabled": disabled ? true : void 0, className: classNames("k-list-item", {
          "k-selected": selected,
          "k-focus": this.props.focused,
          "k-first": Boolean(group) && groupMode === "classic",
          "k-disabled": disabled
        }), onClick: this.handleClick, style: { position: virtual ? "relative" : "unset" } },
        React28.createElement("span", { className: "k-list-item-text" }, getItemValue(dataItem, this.props.textField).toString()),
        group !== void 0 && groupMode === "classic" ? React28.createElement("div", { className: "k-list-item-group-label" }, group) : null
      );
      return renderer !== void 0 ? renderer.call(void 0, item, this.props) : item;
    };
    return ListItem2;
  }(React28.Component)
);
var ListItem_default = ListItem;

// node_modules/@progress/kendo-react-dropdowns/dist/es/common/ListGroupItem.js
var React29 = __toESM(require_react());
var __extends9 = function() {
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
var ListGroupItem = (
  /** @class */
  function(_super) {
    __extends9(ListGroupItem2, _super);
    function ListGroupItem2() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    ListGroupItem2.prototype.render = function() {
      var _a14 = this.props, group = _a14.group, virtual = _a14.virtual, renderer = _a14.render, _b3 = _a14.isMultiColumn, isMultiColumn = _b3 === void 0 ? false : _b3;
      var item = React29.createElement(
        "li",
        { id: this.props.id, role: "group", className: isMultiColumn ? "k-table-group-row" : "k-list-group-item", style: isMultiColumn ? { "boxSizing": "inherit" } : { position: virtual ? "relative" : "unset" } },
        React29.createElement("span", { className: !renderer ? isMultiColumn ? "k-table-th" : "k-list-item-text" : void 0 }, group)
      );
      return renderer !== void 0 ? renderer.call(void 0, item, this.props) : item;
    };
    return ListGroupItem2;
  }(React29.Component)
);
var ListGroupItem_default = ListGroupItem;

// node_modules/@progress/kendo-react-dropdowns/dist/es/messages/index.js
var _a4;
var nodata = "dropdowns.nodata";
var clear = "dropdowns.clear";
var comboArrowBtnAriaLabelExpand = "dropdowns.comboArrowBtnAriaLabelExpand";
var comboArrowBtnAriaLabelCollapse = "dropdowns.comboArrowBtnAriaLabelCollapse";
var dropDownListArrowBtnAriaLabel = "dropdowns.dropDownListArrowBtnAriaLabel";
var adaptiveModeFooterApply = "dropdowns.apply";
var adaptiveModeFooterCancel = "dropdowns.cancel";
var messages4 = (_a4 = {}, _a4[clear] = "clear", _a4[nodata] = "NO DATA FOUND.", _a4[comboArrowBtnAriaLabelExpand] = "expand combobox", _a4[comboArrowBtnAriaLabelCollapse] = "collapse combobox", _a4[dropDownListArrowBtnAriaLabel] = "select", _a4[adaptiveModeFooterApply] = "Apply", _a4[adaptiveModeFooterCancel] = "Cancel", _a4);

// node_modules/@progress/kendo-react-dropdowns/dist/es/common/List.js
var __extends10 = function() {
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
var List = (
  /** @class */
  function(_super) {
    __extends10(List2, _super);
    function List2() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    List2.prototype.renderItems = function() {
      var _this = this;
      var _a14 = this.props, textField = _a14.textField, valueField = _a14.valueField, groupField = _a14.groupField, groupMode = _a14.groupMode, isMultiColumn = _a14.isMultiColumn, optionsGuid = _a14.optionsGuid, _b3 = _a14.skip, skip = _b3 === void 0 ? 0 : _b3, virtual = _a14.virtual, focusedIndex = _a14.focusedIndex, _c6 = _a14.highlightSelected, highlightSelected = _c6 === void 0 ? true : _c6, value = _a14.value, data = _a14.data, itemRender = _a14.itemRender, groupHeaderItemRender = _a14.groupHeaderItemRender;
      var isArray = Array.isArray(value);
      var groupCounter = 0;
      return data.map(function(item, index) {
        var realIndex = skip + index;
        var idIndex = skip + index + groupCounter;
        var selected = item.disabled ? false : highlightSelected && (!isArray && areSame(item, value, valueField) || isArray && value.findIndex(function(i) {
          return areSame(i, item, valueField);
        }) !== -1);
        var group = void 0;
        var current, previous;
        if (index > 0 && groupField !== void 0) {
          current = getItemValue(item, groupField);
          previous = getItemValue(data[index - 1], groupField);
          if (current && previous && current !== previous) {
            group = current;
          }
        }
        group !== void 0 && groupMode === "modern" ? groupCounter += 1 : "";
        return [
          group !== void 0 && groupMode === "modern" && React30.createElement(ListGroupItem_default, { id: "option-".concat(optionsGuid, "-").concat(idIndex), virtual, key: realIndex + "-group-item", group, isMultiColumn, render: groupHeaderItemRender }),
          React30.createElement(ListItem_default, { id: "option-".concat(optionsGuid, "-").concat(group !== void 0 && groupMode === "modern" ? idIndex + 1 : idIndex), virtual, dataItem: item, groupMode, selected, focused: focusedIndex === index, index: realIndex, key: realIndex, onClick: _this.props.onClick, textField, group, render: itemRender, disabled: item.disabled })
        ];
      });
    };
    List2.prototype.renderNoValueElement = function(localizationService) {
      var noDataRender = this.props.noDataRender;
      var noDataElement = React30.createElement(
        "div",
        { className: "k-nodata" },
        React30.createElement("div", null, localizationService.toLanguageString(nodata, messages4[nodata]))
      );
      return noDataRender ? noDataRender.call(void 0, noDataElement) : noDataElement;
    };
    List2.prototype.render = function() {
      var localizationService = provideLocalizationService(this);
      var _a14 = this.props, id = _a14.id, show = _a14.show, wrapperCssClass = _a14.wrapperCssClass, wrapperStyle = _a14.wrapperStyle, listStyle = _a14.listStyle, listRef = _a14.listRef, wrapperRef = _a14.wrapperRef, _b3 = _a14.listClassName, listClassName = _b3 === void 0 ? "k-list-ul" : _b3;
      var items = this.renderItems();
      return items.length ? React30.createElement(
        "div",
        { className: wrapperCssClass, style: wrapperStyle, ref: wrapperRef, onMouseDown: this.props.onMouseDown, onBlur: this.props.onBlur, onScroll: this.props.onScroll, unselectable: "on" },
        React30.createElement("ul", { id, role: "listbox", "aria-hidden": !show ? true : void 0, className: listClassName, ref: listRef, style: listStyle }, items),
        this.props.scroller && React30.createElement("div", { className: "k-height-container" }, this.props.scroller)
      ) : this.renderNoValueElement(localizationService);
    };
    return List2;
  }(React30.Component)
);
var List_default = List;
registerForLocalization(List);

// node_modules/@progress/kendo-react-dropdowns/dist/es/common/DropDownBase.js
var React31 = __toESM(require_react());
var PropTypes9 = __toESM(require_prop_types());

// node_modules/@progress/kendo-react-dropdowns/dist/es/common/VirtualScroll.js
var maxHeightIE = 1533915;
var VirtualScroll = (
  /** @class */
  function() {
    function VirtualScroll3() {
      var _this = this;
      this.container = null;
      this.scrollElement = null;
      this.list = null;
      this.containerHeight = 0;
      this.skip = 0;
      this.total = 0;
      this.enabled = false;
      this.pageSize = 0;
      this.itemHeight = 0;
      this.PageChange = null;
      this.prevScrollPos = 0;
      this.listTranslate = 0;
      this.scrollSyncing = false;
      this.scrollerRef = function(element2) {
        var vs = _this;
        vs.container = element2;
        if (element2) {
          element2.setAttribute("unselectable", "on");
          window.setTimeout(vs.calcScrollElementHeight.bind(vs), 0);
        }
      };
      this.calcScrollElementHeight = function() {
        _this.scrollSyncing = true;
        var heightChanged = false;
        _this.itemHeight = _this.list ? _this.list.children[0].offsetHeight : _this.itemHeight;
        _this.containerHeight = Math.min(maxHeightIE, _this.itemHeight * _this.total);
        var newHeight = _this.containerHeight;
        if (_this.scrollElement) {
          heightChanged = _this.scrollElement.style.height !== newHeight + "px";
          if (heightChanged) {
            _this.scrollElement.style.height = newHeight + "px";
          }
        }
        _this.scrollSyncing = false;
        return heightChanged;
      };
      this.scrollHandler = this.scrollHandler.bind(this);
    }
    Object.defineProperty(VirtualScroll3.prototype, "translate", {
      get: function() {
        return this.listTranslate;
      },
      enumerable: false,
      configurable: true
    });
    VirtualScroll3.prototype.changePage = function(skip, e) {
      var newSkip = Math.min(Math.max(0, skip), this.total - this.pageSize);
      if (newSkip !== this.skip && this.PageChange) {
        this.PageChange({ skip: newSkip, take: this.pageSize }, e);
      }
    };
    VirtualScroll3.prototype.translateTo = function(dY) {
      this.listTranslate = dY;
      if (this.list) {
        this.list.style.transform = "translateY(" + dY + "px)";
      }
    };
    VirtualScroll3.prototype.reset = function() {
      if (this.container) {
        this.calcScrollElementHeight();
        this.container.scrollTop = 0;
        this.translateTo(0);
      }
    };
    VirtualScroll3.prototype.scrollToEnd = function() {
      if (this.container && this.list) {
        this.calcScrollElementHeight();
        this.container.scrollTop = this.container.scrollHeight - this.container.offsetHeight;
        this.translateTo(this.container.scrollHeight);
      }
    };
    VirtualScroll3.prototype.localScrollUp = function(e) {
      var height = this.itemHeight;
      var scrollTop = this.container.scrollTop;
      var targetTranslate = this.listTranslate;
      var items;
      var additionalOnTop = scrollTop - targetTranslate;
      if (additionalOnTop > height) {
        return;
      }
      for (items = 0; items < this.skip; items++) {
        if (targetTranslate + height + additionalOnTop <= scrollTop) {
          break;
        }
        targetTranslate -= height;
      }
      targetTranslate = this.validateTranslate(targetTranslate);
      if (this.skip - items <= 0 && targetTranslate >= scrollTop) {
        this.translateTo(0);
        this.changePage(0, e);
        this.container.scrollTop = 0;
        return;
      }
      if (targetTranslate !== this.listTranslate) {
        this.translateTo(targetTranslate);
        this.changePage(this.skip - items, e);
      }
    };
    VirtualScroll3.prototype.localScrollDown = function(e) {
      var height = this.itemHeight;
      var scrollTop = this.container.scrollTop;
      var targetTranslate = this.listTranslate;
      var itemsLenght = this.list.children.length;
      var items;
      for (items = 0; items < itemsLenght; items++) {
        if (targetTranslate + height >= scrollTop) {
          break;
        }
        targetTranslate += height;
      }
      targetTranslate = this.validateTranslate(targetTranslate);
      if (items >= itemsLenght && this.skip + items >= this.total) {
        this.translateTo(targetTranslate);
        this.changePage(this.total - 1, e);
      } else if (targetTranslate !== this.listTranslate) {
        this.translateTo(targetTranslate);
        this.changePage(this.skip + items, e);
      }
    };
    VirtualScroll3.prototype.scrollNonStrict = function(e) {
      var floatItemIndex = this.total * this.prevScrollPos / this.containerHeight;
      var itemIndex = Math.min(Math.floor(floatItemIndex), this.total - 1);
      var targetTranslate = this.containerHeight * floatItemIndex / this.total;
      targetTranslate = this.validateTranslate(targetTranslate);
      this.translateTo(targetTranslate);
      this.changePage(itemIndex, e);
    };
    VirtualScroll3.prototype.scrollHandler = function(e) {
      var scrollTop = this.container ? this.container.scrollTop : 0;
      var prev = this.prevScrollPos;
      this.prevScrollPos = scrollTop;
      if (!this.enabled || !this.list || !this.container || this.scrollSyncing) {
        return;
      }
      if (scrollTop - prev <= 0 && scrollTop > this.listTranslate - this.list.scrollHeight / 10) {
        this.localScrollUp(e);
      } else if (scrollTop - prev > 0 && scrollTop < this.listTranslate + this.list.scrollHeight * 2 / 3) {
        this.localScrollDown(e);
      } else {
        this.scrollNonStrict(e);
      }
    };
    VirtualScroll3.prototype.validateTranslate = function(translate) {
      translate = Math.max(0, translate);
      translate = Math.min(this.containerHeight, translate);
      return translate;
    };
    return VirtualScroll3;
  }()
);
var VirtualScroll_default = VirtualScroll;

// node_modules/@progress/kendo-react-dropdowns/dist/es/common/Navigation.js
var Navigation2 = (
  /** @class */
  function() {
    function Navigation4() {
    }
    Navigation4.prototype.navigate = function(args) {
      var keyCode = args.keyCode;
      if (keyCode === Keys.up || keyCode === Keys.left) {
        return this.next({ current: args.current, min: args.min, max: args.max, step: args.skipItems ? args.skipItems : -1 });
      } else if (keyCode === Keys.down || keyCode === Keys.right) {
        return this.next({ current: args.current, min: args.min, max: args.max, step: args.skipItems ? args.skipItems : 1 });
      } else if (keyCode === Keys.home) {
        return 0;
      } else if (keyCode === Keys.end) {
        return args.max;
      }
    };
    Navigation4.prototype.next = function(args) {
      if (!isPresent(args.current)) {
        return args.min;
      } else {
        return Math.min(args.max, Math.max(args.current + args.step, args.min));
      }
    };
    return Navigation4;
  }()
);

// node_modules/@progress/kendo-react-dropdowns/dist/es/common/DropDownBase.js
var __assign13 = function() {
  __assign13 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign13.apply(this, arguments);
};
var DropDownBase = (
  /** @class */
  function() {
    function DropDownBase2(component) {
      var _this = this;
      this.wrapper = null;
      this.list = null;
      this.vs = new VirtualScroll_default();
      this.navigation = new Navigation2();
      this.handleItemClick = function(index, event) {
        var state = _this.initState();
        state.syntheticEvent = event;
        event.stopPropagation();
        _this.component.handleItemSelect(index, state);
        _this.togglePopup(state);
        _this.applyState(state);
      };
      this.handleFocus = function(event) {
        if (!_this.component.state.focused) {
          var state = _this.initState();
          state.data.focused = true;
          state.events.push({ type: "onFocus" });
          state.syntheticEvent = event;
          _this.applyState(state);
        }
      };
      this.filterChanged = function(text, state) {
        var _a14 = _this.component.props, textField = _a14.textField, filterable = _a14.filterable;
        if (filterable) {
          state.events.push({
            type: "onFilterChange",
            filter: {
              field: textField,
              operator: "contains",
              ignoreCase: true,
              value: text
            }
          });
        }
      };
      this.togglePopup = function(state) {
        var props = _this.component.props;
        var opened = props.opened !== void 0 ? props.opened : _this.component.state.opened;
        if (props.opened === void 0) {
          state.data.opened = !opened;
        }
        if (opened) {
          state.events.push({ type: "onClose" });
        } else {
          state.events.push({ type: "onOpen" });
          _this.calculatePopupWidth();
        }
      };
      this.pageChange = function(page, syntheticEvent) {
        var state = _this.initState();
        state.syntheticEvent = syntheticEvent;
        _this.triggerOnPageChange(state, page.skip, page.take);
        _this.applyState(state);
      };
      this.scrollToVirtualItem = function(virtual, selectedItemIndex) {
        var vs = _this.vs;
        vs.enabled = false;
        if (virtual.skip === 0) {
          vs.reset();
        } else if (virtual.skip + virtual.pageSize === virtual.total) {
          vs.scrollToEnd();
        } else {
          var scrollTop = vs.translate;
          if (scrollTop === 0) {
            vs.calcScrollElementHeight();
            scrollTop = vs.itemHeight * virtual.skip;
            vs.translateTo(scrollTop - vs.itemHeight);
          }
          if (vs.container) {
            vs.container.scrollTop = scrollTop;
          }
          _this.scrollToItem(selectedItemIndex, true);
        }
        window.setTimeout(function() {
          return vs.enabled = true;
        }, 10);
      };
      this.scrollPopupByPageSize = function(direction) {
        var _a14, _b3, _c6, _d, _e, _f;
        var vs = _this.vs;
        var offsetTop = (_b3 = (_a14 = _this.list) === null || _a14 === void 0 ? void 0 : _a14.parentElement) === null || _b3 === void 0 ? void 0 : _b3.scrollTop;
        var itemHeight = vs.enabled && vs.itemHeight ? vs.itemHeight : _this.list ? _this.list.children[0].offsetHeight : 0;
        var height = (_d = (_c6 = _this.list) === null || _c6 === void 0 ? void 0 : _c6.parentElement) === null || _d === void 0 ? void 0 : _d.offsetHeight;
        if (offsetTop !== void 0 && height !== void 0) {
          (_f = (_e = _this.list) === null || _e === void 0 ? void 0 : _e.parentElement) === null || _f === void 0 ? void 0 : _f.scroll({ top: offsetTop + direction * Math.floor(height / itemHeight) * itemHeight });
        }
      };
      this.renderScrollElement = function() {
        var vs = _this.vs;
        return vs.enabled && React31.createElement("div", { ref: function(element2) {
          return vs.scrollElement = element2;
        }, key: "scrollElementKey" });
      };
      this.resetGroupStickyHeader = function(groupName, that) {
        if (groupName !== that.state.group) {
          that.setState(__assign13(__assign13({}, that.state), { group: groupName }));
        }
      };
      this.listBoxId = guid();
      this.guid = guid();
      this.component = component;
      this.vs.PageChange = this.pageChange;
    }
    DropDownBase2.prototype.didMount = function() {
      var props = this.component.props;
      var popupSettings = props.popupSettings || {};
      var style = props.style || {};
      var popupWidth = popupSettings.width;
      var shouldUpdate = props.opened === true;
      if (popupWidth === void 0) {
        this.calculatePopupWidth();
      }
      if (props.dir === void 0 && style.direction === void 0) {
        this.calculateDir();
        shouldUpdate = true;
      }
      if (shouldUpdate) {
        this.component.forceUpdate();
      }
    };
    DropDownBase2.prototype.calculateDir = function() {
      var element2 = this.component.element;
      if (element2 && element2.ownerDocument && element2.ownerDocument.defaultView) {
        this.dirCalculated = element2.ownerDocument.defaultView.getComputedStyle(element2).direction || void 0;
      }
    };
    DropDownBase2.prototype.calculatePopupWidth = function() {
      if (this.wrapper) {
        this.popupWidth = this.wrapper.offsetWidth + "px";
      }
    };
    DropDownBase2.prototype.scrollToItem = function(itemIndex, vsEnabled, once) {
      var _this = this;
      var list = this.list || this.vs.list;
      if (!list && !once) {
        setTimeout(function() {
          _this.scrollToItem(itemIndex, vsEnabled, true);
        }, 10);
      }
      if (list && itemIndex >= 0) {
        var vs = this.vs;
        var scrollElement = vs.container || list.parentNode;
        var virtualScroll = vsEnabled !== void 0 ? vsEnabled : vs.enabled;
        scrollToItem(scrollElement, list, itemIndex, vs.translate, virtualScroll);
      }
    };
    DropDownBase2.prototype.initState = function() {
      var state = {
        data: {},
        events: [],
        syntheticEvent: void 0
      };
      return state;
    };
    DropDownBase2.prototype.applyState = function(state) {
      var _this = this;
      if (Object.keys(state.data).length > 0) {
        this.component.setState(state.data);
      }
      var eventArgs = {
        syntheticEvent: state.syntheticEvent,
        nativeEvent: state.syntheticEvent ? state.syntheticEvent.nativeEvent : void 0,
        target: this.component,
        value: this.component.value
      };
      state.events.forEach(function(eventData) {
        var type = eventData.type;
        delete eventData.type;
        var handler = type && _this.component.props[type];
        if (handler) {
          handler.call(void 0, __assign13(__assign13({}, eventArgs), eventData));
        }
      });
    };
    DropDownBase2.prototype.triggerOnPageChange = function(state, skip, take) {
      var virtual = this.component.props.virtual;
      if (virtual) {
        var newSkip = Math.min(Math.max(0, skip), Math.max(0, virtual.total - take));
        if (newSkip !== virtual.skip) {
          state.events.push({
            type: "onPageChange",
            page: { skip: newSkip, take }
          });
        }
      }
    };
    DropDownBase2.prototype.triggerPageChangeCornerItems = function(item, state) {
      var props = this.component.props;
      var _a14 = props.data, data = _a14 === void 0 ? [] : _a14, dataItemKey = props.dataItemKey, virtual = props.virtual;
      var opened = props.opened !== void 0 ? props.opened : this.component.state.opened;
      if (item && virtual && this.vs.enabled) {
        if (virtual.skip > 0 && areSame(item, data[0], dataItemKey)) {
          this.triggerOnPageChange(state, virtual.skip - 1, virtual.pageSize);
        } else if (!opened && virtual.skip + virtual.pageSize < virtual.total && areSame(item, data[data.length - 1], dataItemKey)) {
          this.triggerOnPageChange(state, virtual.skip + 1, virtual.pageSize);
        }
      }
    };
    DropDownBase2.prototype.getPopupSettings = function() {
      return Object.assign({}, DropDownBase2.defaultProps.popupSettings, this.component.props.popupSettings);
    };
    DropDownBase2.prototype.getGroupedDataModernMode = function(data, groupField) {
      var newData = [];
      data.forEach(function(el, index) {
        var _a14;
        if (data[index - 1] && el[groupField] !== data[index - 1][groupField]) {
          newData.push((_a14 = {}, _a14[groupField] = el[groupField], _a14));
          newData.push(data[index]);
        } else {
          newData.push(data[index]);
        }
      });
      return newData;
    };
    DropDownBase2.basicPropTypes = {
      opened: PropTypes9.bool,
      disabled: PropTypes9.bool,
      dir: PropTypes9.string,
      tabIndex: PropTypes9.number,
      accessKey: PropTypes9.string,
      data: PropTypes9.array,
      textField: PropTypes9.string,
      className: PropTypes9.string,
      label: PropTypes9.string,
      loading: PropTypes9.bool,
      popupSettings: PropTypes9.shape({
        animate: PropTypes9.oneOfType([PropTypes9.bool, PropTypes9.shape({
          openDuration: PropTypes9.number,
          closeDuration: PropTypes9.number
        })]),
        popupClass: PropTypes9.string,
        className: PropTypes9.string,
        appendTo: PropTypes9.any,
        width: PropTypes9.oneOfType([PropTypes9.string, PropTypes9.number]),
        height: PropTypes9.oneOfType([PropTypes9.string, PropTypes9.number])
      }),
      onOpen: PropTypes9.func,
      onClose: PropTypes9.func,
      onFocus: PropTypes9.func,
      onBlur: PropTypes9.func,
      onChange: PropTypes9.func,
      itemRender: PropTypes9.func,
      listNoDataRender: PropTypes9.func,
      focusedItemIndex: PropTypes9.func,
      header: PropTypes9.node,
      footer: PropTypes9.node
    };
    DropDownBase2.propTypes = __assign13(__assign13({}, DropDownBase2.basicPropTypes), { value: PropTypes9.any, defaultValue: PropTypes9.any, filterable: PropTypes9.bool, filter: PropTypes9.string, virtual: PropTypes9.shape({
      pageSize: PropTypes9.number.isRequired,
      skip: PropTypes9.number.isRequired,
      total: PropTypes9.number.isRequired
    }), onFilterChange: PropTypes9.func, onPageChange: PropTypes9.func });
    DropDownBase2.defaultProps = {
      popupSettings: {
        height: "200px"
      },
      required: false,
      validityStyles: true
    };
    return DropDownBase2;
  }()
);
var DropDownBase_default = DropDownBase;

// node_modules/@progress/kendo-react-dropdowns/dist/es/package-metadata.js
var packageMetadata4 = {
  name: "@progress/kendo-react-dropdowns",
  productName: "KendoReact",
  productCodes: ["KENDOUIREACT", "KENDOUICOMPLETE"],
  publishDate: 1700064130,
  version: "",
  licensingDocsUrl: "https://www.telerik.com/kendo-react-ui/my-license/?utm_medium=product&utm_source=kendoreact&utm_campaign=kendo-ui-react-purchase-license-keys-warning"
};

// node_modules/@progress/kendo-react-dropdowns/dist/es/common/constants.js
var MOBILE_SMALL_DEVISE = 500;
var MOBILE_MEDIUM_DEVISE = 768;

// node_modules/@progress/kendo-react-layout/dist/es/package-metadata.js
var packageMetadata5 = {
  name: "@progress/kendo-react-layout",
  productName: "KendoReact",
  productCodes: ["KENDOUIREACT", "KENDOUICOMPLETE"],
  publishDate: 1700063587,
  version: "",
  licensingDocsUrl: "https://www.telerik.com/kendo-react-ui/my-license/?utm_medium=product&utm_source=kendoreact&utm_campaign=kendo-ui-react-purchase-license-keys-warning"
};

// node_modules/@progress/kendo-react-layout/dist/es/actionsheet/ActionSheet.js
var React36 = __toESM(require_react());
var PropTypes14 = __toESM(require_prop_types());

// node_modules/@progress/kendo-react-layout/dist/es/actionsheet/ActionSheetItem.js
var React32 = __toESM(require_react());
var PropTypes10 = __toESM(require_prop_types());
var ActionSheetItem = function(props) {
  var itemRef = React32.useRef(null);
  var onClick = React32.useCallback(function(event) {
    if (props.onClick) {
      props.onClick.call(void 0, {
        syntheticEvent: event,
        item: props.item,
        title: props.title
      });
    }
  }, [props.item, props.title, props.onClick]);
  React32.useEffect(function() {
    if (itemRef.current && props.focused) {
      itemRef.current.focus();
    }
  }, [props.focused]);
  return React32.createElement(
    "span",
    { style: props.style, tabIndex: props.tabIndex, className: classNames("k-actionsheet-item", "k-cursor-pointer", props.disabled && "k-disabled", props.className), ref: itemRef, role: "button", "aria-disabled": props.disabled, onClick },
    React32.createElement(
      "span",
      { className: "k-actionsheet-action" },
      props.icon && React32.createElement("span", { className: "k-icon-wrap" }, props.icon),
      (props.title || props.description) && React32.createElement(
        "span",
        { className: "k-actionsheet-item-text" },
        props.title && React32.createElement("span", { className: "k-actionsheet-item-title" }, props.title),
        props.description && React32.createElement("span", { className: "k-actionsheet-item-description" }, props.description)
      )
    )
  );
};
ActionSheetItem.propTypes = {
  className: PropTypes10.string,
  style: PropTypes10.object,
  description: PropTypes10.string,
  disabled: PropTypes10.bool,
  group: PropTypes10.oneOf(["top", "bottom"]),
  icon: PropTypes10.element,
  title: PropTypes10.string
};

// node_modules/@progress/kendo-react-layout/dist/es/actionsheet/ActionSheetHeader.js
var React33 = __toESM(require_react());
var PropTypes11 = __toESM(require_prop_types());
var headerDisplayName = "ActionSheetHeader";
var ActionSheetHeader = function(props) {
  return React33.createElement("div", { className: classNames("k-actionsheet-titlebar", props.className) }, props.children);
};
ActionSheetHeader.propTypes = {
  className: PropTypes11.string
};
ActionSheetHeader.displayName = headerDisplayName;
ActionSheetHeader.propTypes = {
  children: PropTypes11.any
};

// node_modules/@progress/kendo-react-layout/dist/es/actionsheet/ActionSheetFooter.js
var React34 = __toESM(require_react());
var PropTypes12 = __toESM(require_prop_types());
var footerDisplayName = "ActionSheetFooter";
var ActionSheetFooter = function(props) {
  return React34.createElement("div", { className: classNames("k-actionsheet-footer", props.className) }, props.children);
};
ActionSheetFooter.propTypes = {
  className: PropTypes12.string
};
ActionSheetFooter.displayName = footerDisplayName;
ActionSheetFooter.propTypes = {
  children: PropTypes12.any
};

// node_modules/@progress/kendo-react-layout/dist/es/actionsheet/ActionSheetContent.js
var React35 = __toESM(require_react());
var PropTypes13 = __toESM(require_prop_types());
var contentDisplayName = "ActionSheetContent";
var ActionSheetContent = function(props) {
  return React35.createElement("div", { className: classNames("k-actionsheet-content", props.className) }, props.children);
};
ActionSheetContent.propTypes = {
  className: PropTypes13.string
};
ActionSheetContent.displayName = contentDisplayName;
ActionSheetContent.propTypes = {
  children: PropTypes13.any
};

// node_modules/@progress/kendo-react-layout/dist/es/actionsheet/ActionSheet.js
var __extends11 = function() {
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
var __assign14 = function() {
  __assign14 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign14.apply(this, arguments);
};
var __spreadArray2 = function(to, from, pack) {
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
var ActionSheet = (
  /** @class */
  function(_super) {
    __extends11(ActionSheet2, _super);
    function ActionSheet2(props) {
      var _this = _super.call(this, props) || this;
      _this.actionSheetRef = React36.createRef();
      _this.actionSheetTitleClass = "k-actionsheet-title";
      _this.ariaLabeledBy = _this.actionSheetTitleClass + 1;
      _this.animationDuration = 300;
      _this.bottomPosition = { bottom: "0", width: "100%" };
      _this.handleKeyDown = function(e) {
        if (_this.props.navigatable) {
          _this.navigation.triggerKeyboardEvent(e);
        }
      };
      _this.onTab = function(target, nav, ev) {
        ev.preventDefault();
        if (ev.shiftKey) {
          nav.focusPrevious(target);
        } else {
          nav.focusNext(target);
        }
      };
      _this.handleOverlayClick = function(ev) {
        if (_this.props.onOverlayClick) {
          _this.props.onOverlayClick.call(void 0, ev);
        }
        if (_this.props.onClose) {
          _this.props.onClose.call(void 0, ev);
        }
        if (!_this.props.animation) {
          _this.hideActionSheet();
        }
      };
      _this.handleItemClick = function(ev) {
        if (_this.props.onItemClick) {
          _this.props.onItemClick.call(void 0, ev);
        }
        if (_this.props.onItemSelect) {
          _this.props.onItemSelect.call(void 0, ev);
        }
        if (!_this.props.animation) {
          _this.hideActionSheet();
        }
      };
      _this.onEnter = function(target, nav, ev) {
        if (target.ariaDisabled) {
          return;
        }
        var isItem = target.className && target.className.indexOf ? target.className.indexOf("k-actionsheet-item") !== -1 : false;
        var allItems = nav.elements.filter(function(e) {
          return e.className.indexOf("k-actionsheet-item") !== -1;
        });
        if (isItem && _this.props.onItemClick) {
          ev.preventDefault();
          var item = _this.props.items[allItems.indexOf(target)];
          _this.props.onItemClick.call(void 0, {
            syntheticEvent: ev,
            item,
            title: item && item.title
          });
        }
        if (isItem && _this.props.onItemSelect) {
          ev.preventDefault();
          var item = _this.props.items[allItems.indexOf(target)];
          _this.props.onItemSelect.call(void 0, {
            syntheticEvent: ev,
            item,
            title: item && item.title
          });
        }
        if (!_this.props.animation) {
          _this.hideActionSheet();
        }
      };
      _this.onEscape = function(_target, _nav, ev) {
        if (_this.props.onOverlayClick) {
          ev.preventDefault();
          _this.props.onOverlayClick.call(void 0, ev);
        }
        if (_this.props.onClose) {
          ev.preventDefault();
          _this.props.onClose.call(void 0, ev);
        }
        if (!_this.props.animation) {
          _this.hideActionSheet();
        }
      };
      _this.hideActionSheet = function() {
        _this.setState({ show: false });
      };
      _this.children = function(children) {
        var components = {};
        React36.Children.forEach(children, function(child) {
          if (child) {
            components[child.type.displayName] = child;
          }
          ;
        });
        return components;
      };
      _this.state = {
        show: false,
        slide: false
      };
      validatePackage(packageMetadata5);
      return _this;
    }
    ActionSheet2.prototype.componentDidMount = function() {
      if (this.props.expand && !this.state.show) {
        this.setState({ show: true });
      }
    };
    ActionSheet2.prototype.componentDidUpdate = function(_prevProps, prevState) {
      var _this = this;
      var currentRef = this.actionSheetRef.current;
      if (this.props.expand && !this.state.show) {
        this.setState({ show: true });
      }
      if (this.props.expand && this.state.show && !this.state.slide) {
        this.setState({ slide: true });
      }
      if (!this.props.expand && this.state.show && this.state.slide) {
        this.setState({ slide: false });
      }
      if (prevState !== this.state && this.state.slide && currentRef && !this.props.className) {
        currentRef.style.setProperty("--kendo-actionsheet-height", "auto");
        currentRef.style.setProperty("--kendo-actionsheet-max-height", "none");
      }
      if (currentRef) {
        if (this.props.navigatable) {
          var innerElements = [
            ".k-actionsheet-footer",
            ".k-actionsheet-content",
            ".k-actionsheet-titlebar"
          ].map(function(selector) {
            return FOCUSABLE_ELEMENTS.concat(_this.props.navigatableElements).map(function(focusableSelector) {
              return "".concat(selector, " ").concat(focusableSelector);
            });
          });
          var selectors = __spreadArray2([
            ".k-actionsheet-item"
          ], innerElements.flat(), true);
          this.navigation = new Navigation({
            tabIndex: this.props.tabIndex || 0,
            root: this.actionSheetRef,
            rovingTabIndex: false,
            selectors,
            keyboardEvents: {
              keydown: {
                "Tab": this.onTab,
                "Enter": this.onEnter,
                "Escape": this.onEscape
              }
            }
          });
          this.navigation.focusElement(this.navigation.first, null);
        }
      }
    };
    ;
    ActionSheet2.prototype.render = function() {
      var _this = this;
      var _a14 = this.props, title = _a14.title, subTitle = _a14.subTitle, animationStyles = _a14.animationStyles, animation = _a14.animation, expand = _a14.expand, tabIndex = _a14.tabIndex, items = _a14.items;
      var topGroupItems = items === null || items === void 0 ? void 0 : items.filter(function(item) {
        return !item.group || item.group === "top";
      });
      var bottomGroupItems = items === null || items === void 0 ? void 0 : items.filter(function(item) {
        return item.group === "bottom";
      });
      var shouldRenderSeparator = topGroupItems && topGroupItems.length > 0 && (bottomGroupItems && bottomGroupItems.length > 0);
      var children = this.children(this.props.children);
      var animationDuration = this.props.animationDuration || this.animationDuration;
      var actionSheetPanel = this.state.slide && React36.createElement(
        "div",
        { className: classNames("k-actionsheet", this.props.className, {
          "k-actionsheet-bottom": !this.props.className
        }), role: "dialog", "aria-modal": "true", "aria-hidden": false, "aria-labelledby": this.ariaLabeledBy, ref: this.actionSheetRef, onKeyDown: this.handleKeyDown },
        children[headerDisplayName] && !title && !subTitle && children[headerDisplayName],
        (title || subTitle) && React36.createElement(
          "div",
          { className: "k-actionsheet-titlebar k-text-center" },
          React36.createElement(
            "div",
            { className: "k-actionsheet-titlebar-group k-hbox" },
            React36.createElement(
              "div",
              { className: this.actionSheetTitleClass, id: this.ariaLabeledBy },
              title && React36.createElement("div", null, title),
              subTitle && React36.createElement("div", { className: "k-actionsheet-subtitle" }, subTitle)
            )
          )
        ),
        children[contentDisplayName] || React36.createElement(
          "div",
          { className: "k-actionsheet-content" },
          React36.createElement("div", { className: "k-list-ul", role: "group" }, topGroupItems && topGroupItems.map(function(item, idx) {
            return React36.createElement(ActionSheetItem, __assign14({}, item, { id: idx, key: idx, item, tabIndex: tabIndex || 0, onClick: _this.handleItemClick }));
          })),
          shouldRenderSeparator && React36.createElement("hr", { className: "k-hr" }),
          React36.createElement("div", { className: "k-list-ul", role: "group" }, bottomGroupItems && bottomGroupItems.map(function(item, idx) {
            return React36.createElement(ActionSheetItem, __assign14({}, item, { id: idx + ((topGroupItems === null || topGroupItems === void 0 ? void 0 : topGroupItems.length) || 0), key: idx, item, tabIndex: tabIndex || 0, onClick: _this.handleItemClick }));
          }))
        ),
        children[footerDisplayName]
      );
      return React36.createElement(React36.Fragment, null, expand || this.state.show ? React36.createElement(
        React36.Fragment,
        null,
        React36.createElement(
          "div",
          { className: "k-actionsheet-container" },
          React36.createElement("div", { className: "k-overlay", onClick: this.handleOverlayClick }),
          animation ? React36.createElement(Animation, { transitionName: this.state.slide ? "slide-up" : "slide-down", onExited: this.hideActionSheet, transitionEnterDuration: animationDuration, transitionExitDuration: animationDuration, animationEnteringStyle: animationStyles || this.bottomPosition, animationEnteredStyle: animationStyles || this.bottomPosition, animationExitingStyle: animationStyles || this.bottomPosition, exit: true, enter: true, appear: false }, actionSheetPanel) : actionSheetPanel
        )
      ) : null);
    };
    ;
    ActionSheet2.displayName = "KendoReactActionSheet";
    ActionSheet2.propTypes = {
      items: PropTypes14.array,
      subTitle: PropTypes14.string,
      title: PropTypes14.string,
      navigatable: PropTypes14.bool,
      navigatableElements: PropTypes14.array
    };
    ActionSheet2.defaultProps = {
      navigatable: true,
      navigatableElements: []
    };
    return ActionSheet2;
  }(React36.Component)
);

// node_modules/@progress/kendo-react-dropdowns/dist/es/DropDownList/DropDownList.js
var __extends12 = function() {
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
var __assign15 = function() {
  __assign15 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign15.apply(this, arguments);
};
var VALIDATION_MESSAGE2 = "Please select a value from the list!";
var sizeMap = kendoThemeMaps.sizeMap;
var roundedMap = kendoThemeMaps.roundedMap;
var DropDownListWithoutContext = (
  /** @class */
  function(_super) {
    __extends12(DropDownListWithoutContext2, _super);
    function DropDownListWithoutContext2(props) {
      var _this = _super.call(this, props) || this;
      _this.state = {};
      _this._element = null;
      _this.base = new DropDownBase_default(_this);
      _this.searchState = { word: "", last: "" };
      _this._select = null;
      _this._skipFocusEvent = false;
      _this._filterInput = null;
      _this._navigated = false;
      _this._lastKeypressIsFilter = false;
      _this._inputId = guid();
      _this.itemHeight = 0;
      _this.focus = function() {
        if (_this.base.wrapper) {
          _this.base.wrapper.focus();
        }
      };
      _this.handleItemSelect = function(index, state) {
        var _a14 = _this.props, _b3 = _a14.data, data = _b3 === void 0 ? [] : _b3, virtual = _a14.virtual, dataItemKey = _a14.dataItemKey, defaultItem = _a14.defaultItem;
        var skip = virtual ? virtual.skip : 0;
        var item = index === -1 && defaultItem !== void 0 ? defaultItem : data[index - skip];
        var newSelected = !areSame(item, _this.value, dataItemKey);
        _this.triggerOnChange(item, state);
        if (newSelected) {
          _this.base.triggerPageChangeCornerItems(item, state);
        }
      };
      _this.componentRef = function(element2) {
        _this._element = element2;
        _this.base.wrapper = element2;
      };
      _this.dummySelect = function(value) {
        return React37.createElement(
          "select",
          { name: _this.props.name, ref: function(el) {
            _this._select = el;
          }, tabIndex: -1, "aria-hidden": true, title: _this.props.label, style: { opacity: 0, width: 1, border: 0, zIndex: -1, position: "absolute", left: "50%" } },
          React37.createElement("option", { value: _this.props.valueMap ? _this.props.valueMap.call(void 0, value) : value })
        );
      };
      _this.renderListContainer = function() {
        var _a14;
        var _b3 = _this.props, header = _b3.header, footer = _b3.footer, dir = _b3.dir, _c6 = _b3.data, data = _c6 === void 0 ? [] : _c6, size = _b3.size, groupField = _b3.groupField, groupStickyHeaderItemRender = _b3.groupStickyHeaderItemRender, list = _b3.list;
        var base = _this.base;
        var popupSettings = base.getPopupSettings();
        var opened = _this.props.opened !== void 0 ? _this.props.opened : _this.state.opened;
        var popupWidth = popupSettings.width !== void 0 ? popupSettings.width : base.popupWidth;
        var listContainerProps = {
          dir: dir !== void 0 ? dir : base.dirCalculated,
          width: popupWidth,
          popupSettings: {
            popupClass: classNames(popupSettings.popupClass, "k-list-container", "k-dropdownlist-popup"),
            className: popupSettings.className,
            animate: popupSettings.animate,
            anchor: _this.element,
            show: opened,
            onOpen: _this.onPopupOpened,
            onClose: _this.onPopupClosed,
            appendTo: popupSettings.appendTo
          },
          itemsCount: [data.length]
        };
        var group = _this.state.group;
        if (group === void 0 && groupField !== void 0) {
          group = getItemValue(data[0], groupField);
        }
        return React37.createElement(
          ListContainer_default,
          __assign15({}, listContainerProps),
          _this.renderListFilter(),
          header && React37.createElement("div", { className: "k-list-header" }, header),
          React37.createElement(
            "div",
            { className: classNames("k-list", (_a14 = {}, _a14["k-list-".concat(sizeMap[size] || size)] = size, _a14["k-virtual-list"] = _this.base.vs.enabled, _a14)) },
            _this.renderDefaultItem(),
            !list && group && data.length !== 0 && React37.createElement(GroupStickyHeader_default, { group, groupMode: "modern", render: groupStickyHeaderItemRender }),
            _this.renderList()
          ),
          footer && React37.createElement("div", { className: "k-list-footer" }, footer)
        );
      };
      _this.renderList = function() {
        var _a14 = _this.props, _b3 = _a14.data, data = _b3 === void 0 ? [] : _b3, textField = _a14.textField, dataItemKey = _a14.dataItemKey, _c6 = _a14.virtual, virtual = _c6 === void 0 ? { skip: 0 } : _c6, groupHeaderItemRender = _a14.groupHeaderItemRender, listNoDataRender = _a14.listNoDataRender, itemRender = _a14.itemRender;
        var vs = _this.base.vs;
        var skip = virtual.skip;
        var opened = _this.props.opened !== void 0 ? _this.props.opened : _this.state.opened;
        var popupSettings = _this.base.getPopupSettings();
        var translate = "translateY(".concat(vs.translate, "px)");
        return React37.createElement(List_default, { id: _this.base.listBoxId, show: opened, data: data.slice(), focusedIndex: _this.getFocusedIndex(), value: _this.value, textField, valueField: dataItemKey, optionsGuid: _this.base.guid, groupField: _this.props.groupField, groupMode: "modern", listRef: function(list) {
          return vs.list = _this.base.list = list;
        }, wrapperStyle: { maxHeight: popupSettings.height }, wrapperCssClass: "k-list-content", listStyle: vs.enabled ? { transform: translate } : void 0, key: "listkey", skip, onClick: _this.handleItemClick, itemRender, groupHeaderItemRender, noDataRender: listNoDataRender, onScroll: _this.onScroll, wrapperRef: vs.scrollerRef, scroller: _this.base.renderScrollElement() });
      };
      _this.onScroll = function(event) {
        var _a14 = _this.base, vs = _a14.vs, list = _a14.list;
        vs.scrollHandler(event);
        var groupField = _this.props.groupField;
        var _b3 = _this.props.data, data = _b3 === void 0 ? [] : _b3;
        if (!groupField || !data.length) {
          return;
        }
        if (groupField) {
          var itemHeight = _this.itemHeight = _this.itemHeight || (vs.enabled ? vs.itemHeight : list ? list.children[0].offsetHeight : 0);
          var target = event.target;
          var scrollTop = target.scrollTop - vs.skip * itemHeight;
          data = _this.base.getGroupedDataModernMode(data, groupField);
          var group = data[0][groupField];
          for (var i = 1; i < data.length; i++) {
            if (itemHeight * i > scrollTop) {
              break;
            }
            if (data[i] && data[i][groupField]) {
              group = data[i][groupField];
            }
          }
          if (group !== _this.state.group) {
            _this.setState({
              group
            });
          }
        }
      };
      _this.renderListFilter = function() {
        var filterText = _this.props.filter !== void 0 ? _this.props.filter : _this.state.text;
        return _this.props.filterable && React37.createElement(ListFilter_default, { value: filterText, ref: function(filter) {
          return _this._filterInput = filter && filter.element;
        }, onChange: _this.handleListFilterChange, onKeyDown: _this.handleKeyDown, size: _this.props.size, rounded: _this.props.rounded, fillMode: _this.props.fillMode });
      };
      _this.renderDefaultItem = function() {
        var _a14 = _this.props, textField = _a14.textField, defaultItem = _a14.defaultItem, dataItemKey = _a14.dataItemKey;
        return defaultItem !== void 0 && React37.createElement(ListDefaultItem_default, { defaultItem, textField, selected: areSame(_this.value, defaultItem, dataItemKey), key: "defaultitemkey", onClick: _this.handleDefaultItemClick });
      };
      _this.search = function(event) {
        clearTimeout(_this._typingTimeout);
        if (!_this.props.filterable) {
          _this._typingTimeout = window.setTimeout(function() {
            return _this.searchState.word = "";
          }, _this.props.delay);
          _this.selectNext(event);
        }
      };
      _this.selectNext = function(event) {
        var _a14 = _this.props, _b3 = _a14.data, data = _b3 === void 0 ? [] : _b3, dataItemKey = _a14.dataItemKey;
        var mappedData = data.map(function(item, idx) {
          return { item, itemIndex: idx };
        });
        var word = _this.searchState.word;
        var last = _this.searchState.last;
        var isInLoop = sameCharsOnly(word, last);
        var dataLength = mappedData.length;
        var startIndex = Math.max(0, data.findIndex(function(i) {
          return areSame(i, _this.value, dataItemKey);
        }));
        var defaultItem;
        if (_this.props.defaultItem) {
          defaultItem = { item: _this.props.defaultItem, itemIndex: -1 };
          dataLength += 1;
          startIndex += 1;
        }
        startIndex += isInLoop ? 1 : 0;
        mappedData = shuffleData(mappedData, startIndex, defaultItem);
        var text, loopMatch, nextMatch, index = 0;
        var _c6 = _this.props, textField = _c6.textField, ignoreCase = _c6.ignoreCase;
        for (; index < dataLength; index++) {
          text = getItemValue(mappedData[index].item, textField);
          loopMatch = isInLoop && matchText(text, last, ignoreCase);
          nextMatch = matchText(text, word, ignoreCase);
          if (loopMatch || nextMatch) {
            index = mappedData[index].itemIndex;
            break;
          }
        }
        if (index !== dataLength) {
          var state = _this.base.initState();
          state.syntheticEvent = event;
          _this.handleItemSelect(index, state);
          _this.applyState(state);
          _this._valueDuringOnChange = void 0;
        }
      };
      _this.handleKeyDown = function(event) {
        if (event && event.target instanceof Element && event.target.nodeName === "INPUT") {
          event.stopPropagation && event.stopPropagation();
        }
        var _a14 = _this.props, _b3 = _a14.data, data = _b3 === void 0 ? [] : _b3, filterable = _a14.filterable, disabled = _a14.disabled, defaultItem = _a14.defaultItem, _c6 = _a14.leftRightKeysNavigation, leftRightKeysNavigation = _c6 === void 0 ? true : _c6, _d = _a14.virtual, virtual = _d === void 0 ? { skip: 0, total: 0, pageSize: 0 } : _d, dataItemKey = _a14.dataItemKey, _e = _a14.groupField, groupField = _e === void 0 ? "" : _e, textField = _a14.textField, _f = _a14.skipDisabledItems, skipDisabledItems = _f === void 0 ? true : _f;
        var value = _this.value;
        var selectedIndex = data.findIndex(function(i) {
          return areSame(i, value, dataItemKey);
        });
        var opened = _this.props.opened !== void 0 ? _this.props.opened : _this.state.opened;
        var keyCode = event.keyCode;
        var homeOrEndKeys = keyCode === Keys.home || keyCode === Keys.end;
        var upOrDownKeys = keyCode === Keys.up || keyCode === Keys.down;
        var shouldOpen = !opened && (event.altKey && keyCode === Keys.down || keyCode === Keys.enter || keyCode === Keys.space);
        var shouldClose = opened && (event.altKey && keyCode === Keys.up || keyCode === Keys.esc);
        var leftOrRightKeys = leftRightKeysNavigation && (keyCode === Keys.left || keyCode === Keys.right);
        var shouldNavigate = upOrDownKeys || leftOrRightKeys && !filterable || homeOrEndKeys;
        var state = _this.base.initState();
        state.syntheticEvent = event;
        if (disabled) {
          return;
        } else if (homeOrEndKeys && _this.base.vs.enabled) {
          if (keyCode === Keys.home) {
            if (virtual.skip !== 0) {
              _this.base.triggerOnPageChange(state, 0, virtual.pageSize);
              _this._navigated = true;
            } else {
              _this.triggerOnChange(data[0], state);
            }
          } else {
            if (virtual.skip < virtual.total - virtual.pageSize) {
              _this.base.triggerOnPageChange(state, virtual.total - virtual.pageSize, virtual.pageSize);
              _this._navigated = true;
            } else {
              _this.triggerOnChange(data[data.length - 1], state);
            }
          }
        } else if (opened && keyCode === Keys.pageUp) {
          _this.base.scrollPopupByPageSize(-1);
        } else if (opened && keyCode === Keys.pageDown) {
          _this.base.scrollPopupByPageSize(1);
        } else if (opened && keyCode === Keys.enter) {
          var focusedIndex = _this.getFocusedIndex();
          if (_this.haveFocusedItemAndDataNotEmpty(data, focusedIndex)) {
            _this.triggerOnChange(null, state);
            _this.applyState(state);
          } else {
            _this.handleItemSelect(focusedIndex, state);
          }
          _this.base.togglePopup(state);
          event.preventDefault();
        } else if (shouldOpen || shouldClose) {
          if (shouldClose) {
            _this.resetValueIfDisabledItem();
          }
          _this.base.togglePopup(state);
          event.preventDefault();
        } else if (shouldNavigate) {
          _this._lastKeypressIsFilter = false;
          if (groupField !== "" && textField) {
            if (!skipDisabledItems && opened) {
              _this.onNavigate(state, keyCode);
            } else {
              var newIndex = void 0;
              if (keyCode === Keys.down || keyCode === Keys.right) {
                var tempnewIndex_1 = data.slice(selectedIndex + 1).find(function(i) {
                  return !i.disabled && i[textField];
                });
                newIndex = tempnewIndex_1 && data.findIndex(function(el) {
                  return el[textField] === tempnewIndex_1[textField];
                });
              } else if (keyCode === Keys.up || keyCode === Keys.left) {
                var dataToSearch = void 0;
                if (selectedIndex === 0 && defaultItem) {
                  newIndex = -1;
                } else if (selectedIndex === -1) {
                  dataToSearch = data;
                  newIndex = data.findIndex(function(i) {
                    return !i.disabled && i[textField];
                  });
                } else {
                  dataToSearch = data.slice(0, selectedIndex);
                  var tempnewIndex_2 = dataToSearch.pop();
                  while (tempnewIndex_2 && tempnewIndex_2.disabled) {
                    tempnewIndex_2 = dataToSearch.pop();
                  }
                  newIndex = tempnewIndex_2 && data.findIndex(function(el) {
                    return el[textField] === tempnewIndex_2[textField];
                  });
                }
              }
              if (newIndex !== void 0) {
                var skipItems = newIndex - selectedIndex;
                _this.onNavigate(state, keyCode, skipItems);
              } else if (newIndex === void 0 && data.findIndex(function(el) {
                return el[textField] === value[textField];
              }) === data.length - 1) {
                _this.onNavigate(state, keyCode);
              }
            }
          } else if (!skipDisabledItems && opened || homeOrEndKeys) {
            _this.onNavigate(state, keyCode);
          } else if (textField) {
            var newIndex = void 0;
            if (keyCode === Keys.down || keyCode === Keys.right) {
              var tempnewIndex_3 = data.slice(selectedIndex + 1).find(function(i) {
                return !i.disabled && i[textField];
              });
              newIndex = tempnewIndex_3 && data.findIndex(function(el) {
                return el[textField] === tempnewIndex_3[textField];
              });
            } else if (keyCode === Keys.up || keyCode === Keys.left) {
              var dataTest = void 0;
              if (selectedIndex === 0 && defaultItem) {
                newIndex = -1;
              } else if (selectedIndex === -1) {
                dataTest = data;
                newIndex = data.find(function(i) {
                  return !i.disabled && i[textField];
                });
              } else {
                dataTest = data.slice(0, selectedIndex);
                var tempnewIndex_4 = dataTest.pop();
                while (tempnewIndex_4 && tempnewIndex_4.disabled) {
                  tempnewIndex_4 = dataTest.pop();
                }
                newIndex = tempnewIndex_4 && data.findIndex(function(el) {
                  return el[textField] === tempnewIndex_4[textField];
                });
              }
            }
            if (newIndex !== void 0) {
              var skipItems = newIndex - selectedIndex;
              _this.onNavigate(state, keyCode, skipItems);
            } else if (newIndex === void 0 && data.findIndex(function(el) {
              return el[textField] === value[textField];
            }) === data.length - 1) {
              _this.onNavigate(state, keyCode);
            }
          } else {
            _this.onNavigate(state, keyCode);
          }
          event.preventDefault();
        }
        _this.applyState(state);
      };
      _this.handleItemClick = function(index, event) {
        _this.base.handleItemClick(index, event);
        _this._valueDuringOnChange = void 0;
      };
      _this.handleFocus = function(event) {
        if (_this._skipFocusEvent) {
          return;
        }
        _this.base.handleFocus(event);
      };
      _this.handleBlur = function(event) {
        if (_this._skipFocusEvent || !_this.state.focused) {
          return;
        }
        var opened = _this.props.opened !== void 0 ? _this.props.opened : _this.state.opened;
        var adaptive = _this.props.adaptive;
        var _a14 = _this.state.windowWidth, windowWidth = _a14 === void 0 ? 0 : _a14;
        var renderAdaptive = windowWidth <= MOBILE_MEDIUM_DEVISE && adaptive;
        var state = _this.base.initState();
        state.syntheticEvent = event;
        state.data.focused = false;
        state.events.push({ type: "onBlur" });
        if (opened) {
          _this.resetValueIfDisabledItem();
        }
        if (opened && !renderAdaptive) {
          _this.base.togglePopup(state);
        }
        _this.applyState(state);
      };
      _this.handleDefaultItemClick = function(event) {
        var state = _this.base.initState();
        state.syntheticEvent = event;
        _this.base.togglePopup(state);
        _this.triggerOnChange(_this.props.defaultItem, state);
        _this.applyState(state);
      };
      _this.handleWrapperClick = function(event) {
        if (event.isPropagationStopped()) {
          return;
        }
        var state = _this.base.initState();
        state.syntheticEvent = event;
        if (!_this.state.focused) {
          state.data.focused = true;
        }
        _this.resetValueIfDisabledItem();
        _this.base.togglePopup(state);
        _this.applyState(state);
      };
      _this.handleKeyPress = function(event) {
        if (_this.props.filterable || event.which === 0 || event.keyCode === Keys.enter) {
          return;
        }
        var character = String.fromCharCode(event.charCode || event.keyCode);
        if (_this.props.ignoreCase) {
          character = character.toLowerCase();
        }
        if (character === " ") {
          event.preventDefault();
        }
        _this.searchState = {
          word: _this.searchState.word + character,
          last: _this.searchState.last + character
        };
        _this.search(event);
      };
      _this.handleListFilterChange = function(event) {
        var state = _this.base.initState();
        state.syntheticEvent = event.syntheticEvent;
        if (_this.props.filter === void 0) {
          state.data.text = event.target.value;
        }
        _this.base.filterChanged(event.target.value, state);
        _this._lastKeypressIsFilter = true;
        _this.applyState(state);
        _this.setState({ group: void 0 });
      };
      _this.onPopupOpened = function() {
        if (_this._filterInput) {
          _this.focusElement(_this._filterInput);
        }
        if (_this.props.adaptive) {
          setTimeout(function() {
            if (_this._filterInput) {
              _this.focusElement(_this._filterInput);
            }
          }, 300);
        }
      };
      _this.onPopupClosed = function() {
        if (_this.state.focused) {
          window.setTimeout(function() {
            if (_this.state.focused && _this.base.wrapper) {
              _this.focusElement(_this.base.wrapper);
            }
          });
        }
      };
      _this.setValidity = function() {
        if (_this._select && _this._select.setCustomValidity) {
          _this._select.setCustomValidity(_this.validity.valid ? "" : _this.props.validationMessage || VALIDATION_MESSAGE2);
        }
      };
      validatePackage(packageMetadata4);
      return _this;
    }
    Object.defineProperty(DropDownListWithoutContext2.prototype, "document", {
      get: function() {
        if (!canUseDOM) {
          return;
        }
        return this.element && this.element.ownerDocument || document;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(DropDownListWithoutContext2.prototype, "element", {
      /**
       * @hidden
       */
      get: function() {
        return this._element;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(DropDownListWithoutContext2.prototype, "value", {
      /**
       * The value of the DropDownList.
       */
      get: function() {
        var value;
        if (this._valueDuringOnChange !== void 0) {
          value = this._valueDuringOnChange;
        } else if (this.props.value !== void 0) {
          value = this.props.value;
        } else if (this.state.value !== void 0) {
          value = this.state.value;
        } else if (this.props.defaultValue !== void 0) {
          value = this.props.defaultValue;
        }
        if (!isPresent(value) && this.props.defaultItem !== void 0) {
          value = this.props.defaultItem;
        }
        return value;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(DropDownListWithoutContext2.prototype, "index", {
      /**
       * The index of the selected item.
       */
      get: function() {
        var _a14 = this.props, _b3 = _a14.data, data = _b3 === void 0 ? [] : _b3, dataItemKey = _a14.dataItemKey;
        var value = this.value;
        return data.findIndex(function(i) {
          return areSame(i, value, dataItemKey);
        });
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(DropDownListWithoutContext2.prototype, "name", {
      /**
       * Gets the `name` property of the DropDownList.
       */
      get: function() {
        return this.props.name;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(DropDownListWithoutContext2.prototype, "validity", {
      /**
       * Represents the validity state into which the DropDownList is set.
       */
      get: function() {
        var customError = this.props.validationMessage !== void 0;
        var isValid = !this.required || this.value !== null && this.value !== "" && this.value !== void 0;
        var valid = this.props.valid !== void 0 ? this.props.valid : isValid;
        return {
          customError,
          valid,
          valueMissing: this.value === null
        };
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(DropDownListWithoutContext2.prototype, "validityStyles", {
      get: function() {
        return this.props.validityStyles !== void 0 ? this.props.validityStyles : DropDownListWithoutContext2.defaultProps.validityStyles;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(DropDownListWithoutContext2.prototype, "required", {
      /**
       * @hidden
       */
      get: function() {
        return this.props.required !== void 0 ? this.props.required : DropDownListWithoutContext2.defaultProps.required;
      },
      enumerable: false,
      configurable: true
    });
    DropDownListWithoutContext2.prototype.componentDidUpdate = function(prevProps, prevState) {
      var _a14;
      var _b3 = this.props, dataItemKey = _b3.dataItemKey, virtual = _b3.virtual, _c6 = _b3.groupField, groupField = _c6 === void 0 ? "" : _c6, textField = _b3.textField;
      var _d = this.props.data, data = _d === void 0 ? [] : _d;
      var prevTotal = prevProps.virtual ? prevProps.virtual.total : 0;
      var opened = this.props.opened !== void 0 ? this.props.opened : this.state.opened;
      var prevOpened = prevProps.opened !== void 0 ? prevProps.opened : prevState.opened;
      var opening = !prevOpened && opened;
      var closing = prevOpened && !opened;
      if (!this.base.getPopupSettings().animate) {
        if (opening) {
          this.onPopupOpened();
        } else if (closing) {
        }
      }
      if (virtual && virtual.total !== prevTotal) {
        this.base.vs.calcScrollElementHeight();
        this.base.vs.reset();
      } else {
        var selectedItem_1 = this.value;
        var prevSelectedItem = prevProps.value !== void 0 ? prevProps.value : prevState.value;
        var selectedItemIndex = data.findIndex(function(i) {
          return areSame(i, selectedItem_1, dataItemKey);
        });
        if (groupField !== "" && selectedItem_1 && textField) {
          selectedItemIndex = (_a14 = this.base.getGroupedDataModernMode(data, groupField)) === null || _a14 === void 0 ? void 0 : _a14.map(function(el) {
            return el[textField];
          }).indexOf(selectedItem_1[textField]);
        }
        var selectedItemChanged = !areSame(prevSelectedItem, selectedItem_1, dataItemKey);
        if (opening && virtual) {
          this.base.scrollToVirtualItem(virtual, selectedItemIndex);
        } else if (opening && !virtual) {
          this.onPopupOpened();
          if (data && data.length !== 0) {
            this.base.resetGroupStickyHeader(data[0][groupField], this);
          }
          this.base.scrollToItem(selectedItemIndex);
        } else if (opened && prevOpened && selectedItem_1 && selectedItemChanged && !this._navigated) {
          this.base.scrollToItem(selectedItemIndex);
        } else if (opened && prevOpened && this._navigated) {
          if (this._navigated && virtual && virtual.skip === 0) {
            this.base.vs.reset();
          } else if (this._navigated && virtual && virtual.skip === virtual.total - virtual.pageSize) {
            this.base.vs.scrollToEnd();
          }
        }
      }
      this._navigated = false;
      this.setValidity();
    };
    DropDownListWithoutContext2.prototype.componentDidMount = function() {
      var _a14;
      this.observerResize = canUseDOM && window.ResizeObserver && new window.ResizeObserver(this.calculateMedia.bind(this));
      this.base.didMount();
      this.setValidity();
      if (((_a14 = this.document) === null || _a14 === void 0 ? void 0 : _a14.body) && this.observerResize) {
        this.observerResize.observe(this.document.body);
      }
    };
    DropDownListWithoutContext2.prototype.componentWillUnmount = function() {
      var _a14;
      if (((_a14 = this.document) === null || _a14 === void 0 ? void 0 : _a14.body) && this.observerResize) {
        this.observerResize.disconnect();
      }
    };
    DropDownListWithoutContext2.prototype.render = function() {
      var _a14;
      var _this = this;
      var btnAriaLabel = provideLocalizationService(this).toLanguageString(dropDownListArrowBtnAriaLabel, messages4[dropDownListArrowBtnAriaLabel]);
      var _b3 = this.props, style = _b3.style, className = _b3.className, label = _b3.label, dir = _b3.dir, virtual = _b3.virtual, size = _b3.size, rounded = _b3.rounded, fillMode = _b3.fillMode, adaptive = _b3.adaptive;
      var _c6 = this.state.windowWidth, windowWidth = _c6 === void 0 ? 0 : _c6;
      var opened = this.props.opened !== void 0 ? this.props.opened : this.state.opened;
      var value = this.value;
      var text = getItemValue(value, this.props.textField);
      var isValid = !this.validityStyles || this.validity.valid;
      var base = this.base;
      var vs = base.vs;
      var renderAdaptive = windowWidth <= MOBILE_MEDIUM_DEVISE && adaptive;
      vs.enabled = virtual !== void 0;
      if (virtual !== void 0) {
        base.vs.skip = virtual.skip;
        base.vs.total = virtual.total;
        base.vs.pageSize = virtual.pageSize;
      }
      var _d = this.props, dataItemKey = _d.dataItemKey, _e = _d.data, data = _e === void 0 ? [] : _e, disabled = _d.disabled, tabIndex = _d.tabIndex, loading = _d.loading, iconClassName = _d.iconClassName, valueRender = _d.valueRender;
      var focused = this.state.focused;
      var selectedIndex = data.findIndex(function(i) {
        return areSame(i, value, dataItemKey);
      });
      var valueDefaultRendering = React37.createElement(
        "span",
        { id: this._inputId, className: "k-input-inner" },
        React37.createElement("span", { className: "k-input-value-text" }, text)
      );
      var valueElement = valueRender !== void 0 ? valueRender.call(void 0, valueDefaultRendering, value) : valueDefaultRendering;
      var dropdownlist = React37.createElement(
        React37.Fragment,
        null,
        React37.createElement(
          "span",
          { ref: this.componentRef, className: classNames("k-dropdownlist k-picker", className, (_a14 = {}, _a14["k-picker-".concat(sizeMap[size] || size)] = size, _a14["k-rounded-".concat(roundedMap[rounded] || rounded)] = rounded, _a14["k-picker-".concat(fillMode)] = fillMode, _a14["k-focus"] = focused, _a14["k-disabled"] = disabled, _a14["k-invalid"] = !isValid, _a14["k-loading"] = loading, _a14["k-required"] = this.required, _a14)), style: !label ? style : __assign15(__assign15({}, style), { width: void 0 }), dir, onMouseDown: opened ? function(event) {
            if (event.target.nodeName !== "INPUT") {
              _this.focusElement(_this.base.wrapper);
              event.preventDefault();
            }
          } : void 0, onFocus: this.handleFocus, onBlur: this.handleBlur, tabIndex: getTabIndex(tabIndex, disabled), accessKey: this.props.accessKey, onKeyDown: this.handleKeyDown, onKeyPress: this.handleKeyPress, onClick: disabled ? void 0 : this.handleWrapperClick, role: "combobox", "aria-required": this.required, "aria-disabled": disabled || void 0, "aria-haspopup": "listbox", "aria-expanded": opened || false, "aria-owns": this.base.listBoxId, "aria-activedescendant": opened ? "option-" + this.base.guid + "-" + (selectedIndex + (virtual ? virtual.skip : 0)) : void 0, "aria-label": this.props.ariaLabel || this.props.label, "aria-labelledby": this.props.ariaLabelledBy, "aria-describedby": this.props.ariaDescribedBy || this._inputId, id: this.props.id, title: this.props.title },
          valueElement,
          loading && React37.createElement(IconWrap, { className: "k-input-loading-icon", name: "loading" }),
          React37.createElement(Button, { tabIndex: -1, type: "button", "aria-label": btnAriaLabel, "aria-hidden": true, size, fillMode, iconClass: iconClassName, className: "k-input-button", rounded: null, themeColor: "base", icon: !iconClassName ? "caret-alt-down" : void 0, svgIcon: !iconClassName ? caretAltDownIcon : this.props.svgIcon, onMouseDown: function(e) {
            return _this.state.focused && e.preventDefault();
          } }),
          this.dummySelect(value),
          !renderAdaptive && this.renderListContainer()
        ),
        renderAdaptive && this.renderAdaptiveListContainer()
      );
      return label ? React37.createElement(FloatingLabel, { label, editorValue: text, editorValid: isValid, editorDisabled: this.props.disabled, style: { width: style ? style.width : void 0 }, children: dropdownlist }) : dropdownlist;
    };
    DropDownListWithoutContext2.prototype.onNavigate = function(state, keyCode, skipItems) {
      var _a14 = this.props, _b3 = _a14.data, data = _b3 === void 0 ? [] : _b3, defaultItem = _a14.defaultItem, dataItemKey = _a14.dataItemKey, _c6 = _a14.virtual, virtual = _c6 === void 0 ? { skip: 0, total: 0, pageSize: 0 } : _c6;
      var vs = this.base.vs;
      var value = this.value;
      var index = data.findIndex(function(i) {
        return areSame(i, value, dataItemKey);
      });
      var newIndex = this.base.navigation.navigate({
        current: virtual.skip + index,
        max: (vs.enabled ? virtual.total : data.length) - 1,
        min: defaultItem !== void 0 ? -1 : 0,
        keyCode,
        skipItems: skipItems ? skipItems : void 0
      });
      if (newIndex !== void 0) {
        this.handleItemSelect(newIndex, state);
      }
      this.applyState(state);
    };
    DropDownListWithoutContext2.prototype.renderAdaptiveListContainer = function() {
      var _a14;
      var _this = this;
      var _b3 = this.state.windowWidth, windowWidth = _b3 === void 0 ? 0 : _b3;
      var _c6 = this.props, header = _c6.header, footer = _c6.footer, size = _c6.size, adaptiveTitle = _c6.adaptiveTitle, groupField = _c6.groupField, groupStickyHeaderItemRender = _c6.groupStickyHeaderItemRender, list = _c6.list, _d = _c6.data, data = _d === void 0 ? [] : _d;
      var opened = this.props.opened !== void 0 ? this.props.opened : this.state.opened;
      var actionSheetProps = {
        navigatable: false,
        navigatableElements: [],
        expand: opened,
        animation: true,
        onClose: function(event) {
          return _this.handleWrapperClick(event);
        },
        animationStyles: windowWidth <= MOBILE_SMALL_DEVISE ? { top: 0, width: "100%", height: "100%" } : void 0,
        className: windowWidth <= MOBILE_SMALL_DEVISE ? "k-adaptive-actionsheet k-actionsheet-fullscreen" : "k-adaptive-actionsheet k-actionsheet-bottom"
      };
      var group = this.state.group;
      if (group === void 0 && groupField !== void 0) {
        group = getItemValue(data[0], groupField);
      }
      return React37.createElement(
        React37.Fragment,
        null,
        React37.createElement(
          ActionSheet,
          __assign15({}, actionSheetProps),
          React37.createElement(
            ActionSheetHeader,
            { className: "k-text-center" },
            React37.createElement(
              "div",
              { className: "k-actionsheet-titlebar-group k-hbox" },
              React37.createElement(
                "div",
                { className: "k-actionsheet-title" },
                React37.createElement("div", null, adaptiveTitle)
              ),
              React37.createElement(
                "div",
                { className: "k-actionsheet-actions" },
                React37.createElement(Button, { tabIndex: 0, "aria-label": "Cancel", "aria-disabled": "false", type: "button", fillMode: "flat", onClick: this.handleWrapperClick, icon: "x", svgIcon: xIcon })
              )
            ),
            React37.createElement("div", { className: "k-actionsheet-titlebar-group k-actionsheet-filter" }, this.renderListFilter())
          ),
          React37.createElement(
            ActionSheetContent,
            { className: "!k-overflow-hidden" },
            header && React37.createElement("div", { className: "k-list-header" }, header),
            React37.createElement(
              "div",
              { className: classNames("k-list", (_a14 = {}, _a14["k-list-".concat(sizeMap[size] || size)] = size, _a14["k-virtual-list"] = this.base.vs.enabled, _a14)) },
              this.renderDefaultItem(),
              !list && group && data.length !== 0 && React37.createElement(GroupStickyHeader_default, { group, groupMode: "modern", render: groupStickyHeaderItemRender }),
              this.renderList()
            ),
            footer && React37.createElement("div", { className: "k-list-footer" }, footer)
          )
        )
      );
    };
    DropDownListWithoutContext2.prototype.getFocusedIndex = function() {
      var value = this.value;
      var _a14 = this.props, _b3 = _a14.data, data = _b3 === void 0 ? [] : _b3, textField = _a14.textField, dataItemKey = _a14.dataItemKey, _c6 = _a14.virtual, virtual = _c6 === void 0 ? { skip: 0 } : _c6, _d = _a14.focusedItemIndex, focusedItemIndex = _d === void 0 ? itemIndexStartsWith : _d, filterable = _a14.filterable, _e = _a14.skipDisabledItems, skipDisabledItems = _e === void 0 ? true : _e;
      var text = this.props.filter ? this.props.filter : this.state.text;
      if (skipDisabledItems && textField && !text && !value) {
        return data.findIndex(function(i) {
          return !i.disabled && i[textField];
        });
      } else if (isPresent(value) && text === void 0 || filterable && text === "") {
        return data.findIndex(function(i) {
          return areSame(i, value, dataItemKey);
        });
      } else if (text) {
        if (this._lastKeypressIsFilter) {
          return focusedItemIndex(data, text, textField);
        }
        return data.findIndex(function(i) {
          return areSame(i, value, dataItemKey);
        });
      } else {
        return virtual.skip === 0 ? 0 : -1;
      }
    };
    DropDownListWithoutContext2.prototype.focusElement = function(element2) {
      var _this = this;
      this._skipFocusEvent = true;
      element2.focus();
      window.setTimeout(function() {
        return _this._skipFocusEvent = false;
      }, 30);
    };
    DropDownListWithoutContext2.prototype.triggerOnChange = function(item, state) {
      if (areSame(this.value, item, this.props.dataItemKey)) {
        return;
      }
      if (this.props.value === void 0) {
        state.data.value = item;
      }
      this._valueDuringOnChange = item;
      state.events.push({ type: "onChange" });
    };
    DropDownListWithoutContext2.prototype.applyState = function(state) {
      this.base.applyState(state);
      this._valueDuringOnChange = void 0;
    };
    DropDownListWithoutContext2.prototype.calculateMedia = function(entries) {
      for (var _i = 0, entries_1 = entries; _i < entries_1.length; _i++) {
        var entry = entries_1[_i];
        this.setState({ windowWidth: entry.target.clientWidth });
      }
      ;
    };
    ;
    DropDownListWithoutContext2.prototype.resetValueIfDisabledItem = function() {
      var _a14 = this.props.data, data = _a14 === void 0 ? [] : _a14;
      var state = this.base.initState();
      var focusedIndex = this.getFocusedIndex();
      if (this.haveFocusedItemAndDataNotEmpty(data, focusedIndex)) {
        this.triggerOnChange(null, state);
        this.applyState(state);
      }
    };
    DropDownListWithoutContext2.prototype.haveFocusedItemAndDataNotEmpty = function(data, focusedIndex) {
      return focusedIndex !== void 0 && focusedIndex !== -1 && data && data.length > 0 && data[focusedIndex].disabled;
    };
    DropDownListWithoutContext2.displayName = "DropDownList";
    DropDownListWithoutContext2.propTypes = __assign15({ delay: PropTypes15.number, ignoreCase: PropTypes15.bool, iconClassName: PropTypes15.string, svgIcon: svgIconPropType, defaultItem: PropTypes15.any, valueRender: PropTypes15.func, valueMap: PropTypes15.func, validationMessage: PropTypes15.string, required: PropTypes15.bool, id: PropTypes15.string, ariaLabelledBy: PropTypes15.string, ariaDescribedBy: PropTypes15.string, ariaLabel: PropTypes15.string, leftRightKeysNavigation: PropTypes15.bool, title: PropTypes15.string, groupField: PropTypes15.string, list: PropTypes15.any, skipDisabledItems: PropTypes15.bool }, DropDownBase_default.propTypes);
    DropDownListWithoutContext2.defaultProps = __assign15(__assign15({ delay: 500, tabIndex: 0, ignoreCase: true }, DropDownBase_default.defaultProps), { required: false, size: "medium", rounded: "medium", fillMode: "solid", groupMode: "modern" });
    return DropDownListWithoutContext2;
  }(React37.Component)
);
var DropDownListPropsContext = createPropsContext();
var DropDownList = withPropsContext(DropDownListPropsContext, DropDownListWithoutContext);
DropDownList.displayName = "KendoReactDropDownList";

// node_modules/@progress/kendo-react-data-tools/dist/es/pager/PagerPageSizes.js
var __extends13 = function() {
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
var PagerPageSizes = (
  /** @class */
  function(_super) {
    __extends13(PagerPageSizes2, _super);
    function PagerPageSizes2() {
      var _this = _super !== null && _super.apply(this, arguments) || this;
      _this.pageSizeChange = function(e) {
        if (_this.props.pageChange) {
          _this.props.pageChange({ skip: 0, take: parseInt(e.target.value, 10) }, e);
        }
      };
      return _this;
    }
    PagerPageSizes2.prototype.render = function() {
      var _a14 = this.props, value = _a14.value, pageSizes = _a14.pageSizes, pageSize = _a14.pageSize, messagesMap = _a14.messagesMap;
      var sizes = pageSizes.slice();
      if (value === void 0 && sizes.filter(function(s) {
        return s === pageSize;
      }).length === 0) {
        sizes.unshift(pageSize);
      }
      var itemPerPageMessage = messagesMap ? messagesMap(pagerItemPerPage) : { messageKey: pagerItemPerPage, defaultMessage: messages[pagerItemPerPage] };
      var pageSelectionMessage = messagesMap ? messagesMap(pagerPageSizeAriaLabel) : { messageKey: pagerPageSizeAriaLabel, defaultMessage: messages[pagerPageSizeAriaLabel] };
      return React38.createElement(
        "span",
        { className: "k-pager-sizes" },
        React38.createElement(DropDownList, { value: value !== void 0 ? value : pageSize, data: sizes, onChange: this.pageSizeChange, ariaLabel: provideLocalizationService(this).toLanguageString(pageSelectionMessage.messageKey, pageSelectionMessage.defaultMessage), size: this.props.size }),
        React38.createElement("span", null, provideLocalizationService(this).toLanguageString(itemPerPageMessage.messageKey, itemPerPageMessage.defaultMessage))
      );
    };
    return PagerPageSizes2;
  }(React38.Component)
);
registerForLocalization(PagerPageSizes);

// node_modules/@progress/kendo-react-data-tools/dist/es/package-metadata.js
var packageMetadata6 = {
  name: "@progress/kendo-react-data-tools",
  productName: "KendoReact",
  productCodes: ["KENDOUIREACT", "KENDOUICOMPLETE"],
  publishDate: 1700064209,
  version: "",
  licensingDocsUrl: "https://www.telerik.com/kendo-react-ui/my-license/?utm_medium=product&utm_source=kendoreact&utm_campaign=kendo-ui-react-purchase-license-keys-warning"
};

// node_modules/@progress/kendo-react-data-tools/dist/es/pager/Pager.js
var __extends14 = function() {
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
var __assign16 = function() {
  __assign16 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign16.apply(this, arguments);
};
var RESPONSIVE_BREAKPOINT_MEDIUM = 600;
var RESPONSIVE_BREAKPOINT_LARGE = 768;
var Pager = (
  /** @class */
  function(_super) {
    __extends14(Pager2, _super);
    function Pager2(props) {
      var _this = _super.call(this, props) || this;
      _this._element = null;
      _this.onPageChange = function(eventData, targetEvent) {
        var event = __assign16({ target: _this, syntheticEvent: targetEvent.syntheticEvent, nativeEvent: targetEvent.nativeEvent, targetEvent }, eventData);
        if (_this.props.onPageChange) {
          _this.props.onPageChange.call(void 0, event);
        }
      };
      _this.changePage = function(page, event) {
        if (_this.props.onPageChange && page > 0 && page <= _this.totalPages) {
          _this.props.onPageChange({
            target: _this,
            skip: (page - 1) * _this.props.take,
            take: _this.props.take,
            syntheticEvent: event,
            nativeEvent: event.nativeEvent,
            targetEvent: event
          });
        }
      };
      _this.onWindowResize = function() {
        var element2 = _this.element;
        if (!element2 || !_this.props.responsive) {
          return;
        }
        var width = element2.offsetWidth;
        if (width < RESPONSIVE_BREAKPOINT_MEDIUM) {
          _this.setState({ showPagerSizes: false });
        } else if (width >= RESPONSIVE_BREAKPOINT_MEDIUM && width < RESPONSIVE_BREAKPOINT_LARGE) {
          _this.setState({ showPagerInfo: false, showPagerSizes: true });
        } else {
          _this.setState({ showPagerInfo: true, showPagerSizes: true });
        }
      };
      validatePackage(packageMetadata6);
      _this.state = { showPagerSizes: true, showPagerInfo: true };
      return _this;
    }
    Object.defineProperty(Pager2.prototype, "isRtl", {
      get: function() {
        return this.props.dir === "rtl";
      },
      enumerable: false,
      configurable: true
    });
    ;
    Object.defineProperty(Pager2.prototype, "element", {
      /**
       * Returns the HTML element of the Pager component.
       */
      get: function() {
        return this._element;
      },
      enumerable: false,
      configurable: true
    });
    Pager2.prototype.componentDidMount = function() {
      window.addEventListener("resize", this.onWindowResize);
      this.onWindowResize();
    };
    Pager2.prototype.componentWillUnmount = function() {
      window.removeEventListener("resize", this.onWindowResize);
    };
    Pager2.prototype.render = function() {
      var _a14;
      var _this = this;
      var _b3 = this.state, showPagerSizes = _b3.showPagerSizes, showPagerInfo = _b3.showPagerInfo;
      var _c6 = this.props, skip = _c6.skip, take = _c6.take, total = _c6.total, pageSizes = _c6.pageSizes, size = _c6.size, responsive = _c6.responsive, messagesMap = _c6.messagesMap, pageSizeValue = _c6.pageSizeValue;
      var localizationService = provideLocalizationService(this);
      var intlService = provideIntlService(this);
      var currentPage = Math.floor(skip / take) + 1;
      var changer = this.props.type === "numeric" ? React39.createElement(PagerNumericButtons, { type: responsive && !showPagerSizes ? "dropdown" : "numbers", buttonCount: this.props.buttonCount || 0, totalPages: this.totalPages, currentPage, pageChange: this.changePage, messagesMap: this.props.messagesMap, size: this.props.size }) : React39.createElement(PagerInput, { buttonCount: this.props.buttonCount || 0, totalPages: this.totalPages, currentPage, pageChange: this.changePage, messagesMap, size: this.props.size });
      var firstPageMessage = messagesMap ? messagesMap(pagerFirstPage) : { messageKey: pagerFirstPage, defaultMessage: messages[pagerFirstPage] };
      var previousPageMessage = messagesMap ? messagesMap(pagerPreviousPage) : { messageKey: pagerPreviousPage, defaultMessage: messages[pagerPreviousPage] };
      var nextPageMessage = messagesMap ? messagesMap(pagerNextPage) : { messageKey: pagerNextPage, defaultMessage: messages[pagerNextPage] };
      var lastPageMessage = messagesMap ? messagesMap(pagerLastPage) : { messageKey: pagerLastPage, defaultMessage: messages[pagerLastPage] };
      var infoMessage = messagesMap ? messagesMap(pagerInfo) : { messageKey: pagerInfo, defaultMessage: messages[pagerInfo] };
      var ariaKeyshortcutsMessage = messagesMap ? messagesMap(pagerAriaKeyshortcuts) : { messageKey: pagerAriaKeyshortcuts, defaultMessage: messages[pagerAriaKeyshortcuts] };
      var ariaLabelMessage = messagesMap ? messagesMap(pagerAriaLabel) : { messageKey: pagerAriaLabel, defaultMessage: messages[pagerAriaLabel] };
      var first, prev, next, last;
      if (this.props.previousNext) {
        first = this.renderButton(1, "k-pager-nav k-pager-first" + (currentPage === 1 ? " k-disabled" : ""), localizationService.toLanguageString(firstPageMessage.messageKey, firstPageMessage.defaultMessage), this.isRtl ? "caret-alt-to-right" : "caret-alt-to-left", this.isRtl ? caretAltToRightIcon : caretAltToLeftIcon, currentPage === 1 ? true : void 0);
        prev = this.renderButton(currentPage - 1, "k-pager-nav" + (currentPage === 1 ? " k-disabled" : ""), localizationService.toLanguageString(previousPageMessage.messageKey, previousPageMessage.defaultMessage), this.isRtl ? "caret-alt-right" : "caret-alt-left", this.isRtl ? caretAltRightIcon : caretAltLeftIcon, currentPage === 1 ? true : void 0);
        next = this.renderButton(currentPage + 1, "k-pager-nav" + (currentPage >= this.totalPages ? " k-disabled" : ""), localizationService.toLanguageString(nextPageMessage.messageKey, nextPageMessage.defaultMessage), this.isRtl ? "caret-alt-left" : "caret-alt-right", this.isRtl ? caretAltLeftIcon : caretAltRightIcon, currentPage >= this.totalPages ? true : void 0);
        last = this.renderButton(this.totalPages, "k-pager-nav k-pager-last" + (currentPage >= this.totalPages ? " k-disabled" : ""), localizationService.toLanguageString(lastPageMessage.messageKey, lastPageMessage.defaultMessage), this.isRtl ? "caret-alt-to-left" : "caret-alt-to-right", this.isRtl ? caretAltToLeftIcon : caretAltToRightIcon, currentPage >= this.totalPages ? true : void 0);
      }
      var pagerPageSizes = pageSizes && React39.createElement(PagerPageSizes, { pageChange: this.onPageChange, pageSize: take, pageSizes, value: pageSizeValue, messagesMap, size: this.props.size });
      var info = this.props.info && React39.createElement("span", { className: "k-pager-info" }, intlService.format(localizationService.toLanguageString(infoMessage.messageKey, infoMessage.defaultMessage), [
        Math.min(skip + 1, total),
        Math.min(skip + take, total),
        total
      ]));
      return React39.createElement(
        "div",
        { className: classNames("k-pager", (_a14 = {}, _a14["k-pager-".concat(kendoThemeMaps.sizeMap[size] || size)] = size, _a14), this.props.className), style: this.props.style, role: "application", "aria-roledescription": "pager", dir: this.props.dir, "aria-keyshortcuts": localizationService.toLanguageString(ariaKeyshortcutsMessage.messageKey, ariaKeyshortcutsMessage.defaultMessage), "aria-label": localizationService.toLanguageString(ariaLabelMessage.messageKey, ariaLabelMessage.defaultMessage), ref: function(element2) {
          return _this._element = element2;
        } },
        React39.createElement(
          "div",
          { className: classNames("k-pager-numbers-wrap") },
          first,
          prev,
          changer,
          next,
          last
        ),
        responsive ? showPagerSizes && pagerPageSizes : pagerPageSizes,
        responsive ? showPagerInfo && info : info
      );
    };
    Pager2.prototype.renderButton = function(page, className, title, icon, svgIcon, isDisabled) {
      var _this = this;
      return React39.createElement(Button, { fillMode: "flat", themeColor: "base", size: this.props.size, rounded: null, className, icon, svgIcon, title, role: "button", "aria-disabled": isDisabled, onClick: function(e) {
        e.preventDefault();
        _this.changePage(page, e);
      } });
    };
    Object.defineProperty(Pager2.prototype, "totalPages", {
      get: function() {
        return Math.ceil((this.props.total || 0) / this.props.take);
      },
      enumerable: false,
      configurable: true
    });
    Pager2.propTypes = {
      className: PropTypes16.string,
      style: PropTypes16.object,
      total: PropTypes16.number.isRequired,
      skip: PropTypes16.number.isRequired,
      take: PropTypes16.number.isRequired,
      buttonCount: PropTypes16.number,
      info: PropTypes16.bool,
      type: PropTypes16.oneOf(["numeric", "input"]),
      pageSizes: PropTypes16.arrayOf(PropTypes16.oneOfType([
        PropTypes16.string,
        PropTypes16.number
      ])),
      previousNext: PropTypes16.bool,
      onPageChange: PropTypes16.func,
      messagesMap: PropTypes16.func,
      size: PropTypes16.oneOf([null, "small", "medium", "large"]),
      dir: PropTypes16.string
    };
    Pager2.defaultProps = {
      buttonCount: 10,
      info: true,
      type: "numeric",
      size: "medium"
    };
    return Pager2;
  }(React39.Component)
);
registerForIntl(Pager);
registerForLocalization(Pager);

// node_modules/@progress/kendo-react-dateinputs/dist/es/calendar/components/Calendar.js
var React50 = __toESM(require_react());
var PropTypes23 = __toESM(require_prop_types());

// node_modules/@progress/kendo-date-math/dist/es/clone-date.js
var cloneDate = function(date2) {
  return date2 ? new Date(date2.getTime()) : null;
};

// node_modules/@progress/kendo-date-math/dist/es/adjust-dst.js
var adjustDST = function(date2, hour) {
  var newDate = cloneDate(date2);
  if (hour === 0 && newDate.getHours() === 23) {
    newDate.setHours(newDate.getHours() + 2);
  }
  return newDate;
};

// node_modules/@progress/kendo-date-math/dist/es/add-days.js
var addDays = function(date2, offset) {
  var newDate = cloneDate(date2);
  newDate.setDate(newDate.getDate() + offset);
  return adjustDST(newDate, date2.getHours());
};

// node_modules/@progress/kendo-date-math/dist/es/create-date.js
var createDate = function(year, month, day, hours, minutes, seconds, milliseconds) {
  if (hours === void 0) {
    hours = 0;
  }
  if (minutes === void 0) {
    minutes = 0;
  }
  if (seconds === void 0) {
    seconds = 0;
  }
  if (milliseconds === void 0) {
    milliseconds = 0;
  }
  var date2 = new Date(year, month, day, hours, minutes, seconds, milliseconds);
  if (year > -1 && year < 100) {
    date2.setFullYear(date2.getFullYear() - 1900);
  }
  return adjustDST(date2, hours);
};

// node_modules/@progress/kendo-date-math/dist/es/last-day-of-month.js
var lastDayOfMonth = function(date2) {
  var newDate = createDate(date2.getFullYear(), date2.getMonth() + 1, 1, date2.getHours(), date2.getMinutes(), date2.getSeconds(), date2.getMilliseconds());
  return addDays(newDate, -1);
};

// node_modules/@progress/kendo-date-math/dist/es/add-months.js
var MONTHS_LENGTH = 12;
var normalize = function(date2, expectedMonth) {
  return date2.getMonth() !== expectedMonth ? lastDayOfMonth(addMonths(date2, -1)) : date2;
};
var addMonths = function(date2, offset) {
  var newDate = cloneDate(date2);
  var diff = (newDate.getMonth() + offset) % MONTHS_LENGTH;
  var expectedMonth = (MONTHS_LENGTH + diff) % MONTHS_LENGTH;
  newDate.setMonth(newDate.getMonth() + offset);
  return normalize(adjustDST(newDate, date2.getHours()), expectedMonth);
};

// node_modules/@progress/kendo-date-math/dist/es/set-year.js
var setYear = function(value, year) {
  var month = value.getMonth();
  var candidate = createDate(year, month, value.getDate(), value.getHours(), value.getMinutes(), value.getSeconds(), value.getMilliseconds());
  return candidate.getMonth() === month ? candidate : lastDayOfMonth(addMonths(candidate, -1));
};

// node_modules/@progress/kendo-date-math/dist/es/add-years.js
var addYears = function(value, offset) {
  return adjustDST(setYear(value, value.getFullYear() + offset), value.getHours());
};

// node_modules/@progress/kendo-date-math/dist/es/add-centuries.js
var addCenturies = function(value, offset) {
  return addYears(value, 100 * offset);
};

// node_modules/@progress/kendo-date-math/dist/es/add-decades.js
var addDecades = function(value, offset) {
  return addYears(value, 10 * offset);
};

// node_modules/@progress/kendo-date-math/dist/es/add-weeks.js
var addWeeks = function(date2, offset) {
  return addDays(date2, offset * 7);
};

// node_modules/@progress/kendo-date-math/dist/es/constants.js
var MS_PER_DAY = 864e5;

// node_modules/@progress/kendo-date-math/dist/es/direction.enum.js
var Direction;
(function(Direction2) {
  Direction2[Direction2["Forward"] = 1] = "Forward";
  Direction2[Direction2["Backward"] = -1] = "Backward";
})(Direction || (Direction = {}));

// node_modules/@progress/kendo-date-math/dist/es/day-of-week.js
var dayOfWeek = function(date2, weekDay, direction) {
  if (direction === void 0) {
    direction = Direction.Forward;
  }
  var newDate = cloneDate(date2);
  var newDay = (weekDay - newDate.getDay() + 7 * direction) % 7;
  newDate.setDate(newDate.getDate() + newDay);
  return adjustDST(newDate, date2.getHours());
};

// node_modules/@progress/kendo-date-math/dist/es/day.enum.js
var Day;
(function(Day2) {
  Day2[Day2["Sunday"] = 0] = "Sunday";
  Day2[Day2["Monday"] = 1] = "Monday";
  Day2[Day2["Tuesday"] = 2] = "Tuesday";
  Day2[Day2["Wednesday"] = 3] = "Wednesday";
  Day2[Day2["Thursday"] = 4] = "Thursday";
  Day2[Day2["Friday"] = 5] = "Friday";
  Day2[Day2["Saturday"] = 6] = "Saturday";
})(Day || (Day = {}));

// node_modules/@progress/kendo-date-math/dist/es/normalize-year.js
var normalizeYear = function(value, year) {
  return setYear(value, year(value.getFullYear()));
};

// node_modules/@progress/kendo-date-math/dist/es/first-decade-of-century.js
var firstDecadeOfCentury = function(value) {
  return normalizeYear(value, function(y) {
    return y - y % 100;
  });
};

// node_modules/@progress/kendo-date-math/dist/es/duration-in-centuries.js
var durationInCenturies = function(start2, end2) {
  return (firstDecadeOfCentury(end2).getFullYear() - firstDecadeOfCentury(start2).getFullYear()) / 100;
};

// node_modules/@progress/kendo-date-math/dist/es/first-year-of-decade.js
var firstYearOfDecade = function(value) {
  return normalizeYear(value, function(y) {
    return y - y % 10;
  });
};

// node_modules/@progress/kendo-date-math/dist/es/duration-in-decades.js
var durationInDecades = function(start2, end2) {
  return (firstYearOfDecade(end2).getFullYear() - firstYearOfDecade(start2).getFullYear()) / 10;
};

// node_modules/@progress/kendo-date-math/dist/es/duration-in-months.js
var durationInMonths = function(start2, end2) {
  return (end2.getFullYear() - start2.getFullYear()) * 12 + (end2.getMonth() - start2.getMonth());
};

// node_modules/@progress/kendo-date-math/dist/es/duration-in-years.js
var durationInYears = function(start2, end2) {
  return end2.getFullYear() - start2.getFullYear();
};

// node_modules/@progress/kendo-date-math/dist/es/first-day-of-month.js
var firstDayOfMonth = function(date2) {
  return createDate(date2.getFullYear(), date2.getMonth(), 1, date2.getHours(), date2.getMinutes(), date2.getSeconds(), date2.getMilliseconds());
};

// node_modules/@progress/kendo-date-math/dist/es/set-month.js
var setMonth = function(value, month) {
  var day = value.getDate();
  var candidate = createDate(value.getFullYear(), month, day, value.getHours(), value.getMinutes(), value.getSeconds(), value.getMilliseconds());
  return candidate.getDate() === day ? candidate : lastDayOfMonth(addMonths(candidate, -1));
};

// node_modules/@progress/kendo-date-math/dist/es/first-month-of-year.js
var firstMonthOfYear = function(value) {
  return setMonth(value, 0);
};

// node_modules/@progress/kendo-date-math/dist/es/get-date.js
var getDate = function(date2) {
  return createDate(date2.getFullYear(), date2.getMonth(), date2.getDate(), 0, 0, 0);
};

// node_modules/@progress/kendo-date-math/dist/es/is-equal.js
var isEqual2 = function(candidate, expected) {
  if (!candidate && !expected) {
    return true;
  }
  return candidate && expected && candidate.getTime() === expected.getTime();
};

// node_modules/@progress/kendo-date-math/dist/es/is-equal-date.js
var isEqualDate = function(candidate, expected) {
  if (!candidate && !expected) {
    return true;
  }
  return candidate && expected && isEqual2(getDate(candidate), getDate(expected));
};

// node_modules/@progress/kendo-date-math/dist/es/last-decade-of-century.js
var lastDecadeOfCentury = function(value) {
  return normalizeYear(value, function(y) {
    return y - y % 100 + 90;
  });
};

// node_modules/@progress/kendo-date-math/dist/es/last-month-of-year.js
var lastMonthOfYear = function(value) {
  return setMonth(value, 11);
};

// node_modules/@progress/kendo-date-math/dist/es/last-year-of-decade.js
var lastYearOfDecade = function(value) {
  return normalizeYear(value, function(y) {
    return y - y % 10 + 9;
  });
};

// node_modules/@progress/kendo-date-math/dist/es/prev-day-of-week.js
var prevDayOfWeek = function(date2, weekDay) {
  return dayOfWeek(date2, weekDay, Direction.Backward);
};

// node_modules/@progress/kendo-date-math/dist/es/week-in-year.js
var moveDateToWeekStart = function(date2, weekStartDay) {
  if (weekStartDay !== Day.Monday) {
    return addDays(prevDayOfWeek(date2, weekStartDay), 4);
  }
  return addDays(date2, 4 - (date2.getDay() || 7));
};
var calcWeekInYear = function(date2, weekStartDay) {
  var firstWeekInYear = createDate(date2.getFullYear(), 0, 1, -6);
  var newDate = moveDateToWeekStart(date2, weekStartDay);
  var diffInMS = newDate.getTime() - firstWeekInYear.getTime();
  var days = Math.floor(diffInMS / MS_PER_DAY);
  return 1 + Math.floor(days / 7);
};
var weekInYear = function(date2, weekStartDay) {
  if (weekStartDay === void 0) {
    weekStartDay = Day.Monday;
  }
  date2 = getDate(date2);
  var prevWeekDate = addDays(date2, -7);
  var nextWeekDate = addDays(date2, 7);
  var weekNumber = calcWeekInYear(date2, weekStartDay);
  if (weekNumber === 0) {
    return calcWeekInYear(prevWeekDate, weekStartDay) + 1;
  }
  if (weekNumber === 53 && calcWeekInYear(nextWeekDate, weekStartDay) > 1) {
    return 1;
  }
  return weekNumber;
};

// node_modules/@progress/kendo-react-dateinputs/dist/es/package-metadata.js
var packageMetadata7 = {
  name: "@progress/kendo-react-dateinputs",
  productName: "KendoReact",
  productCodes: ["KENDOUIREACT", "KENDOUICOMPLETE"],
  publishDate: 1700063843,
  version: "",
  licensingDocsUrl: "https://www.telerik.com/kendo-react-ui/my-license/?utm_medium=product&utm_source=kendoreact&utm_campaign=kendo-ui-react-purchase-license-keys-warning"
};

// node_modules/@progress/kendo-react-dateinputs/dist/es/calendar/components/ViewList.js
var React47 = __toESM(require_react());
var PropTypes21 = __toESM(require_prop_types());

// node_modules/@progress/kendo-react-dateinputs/dist/es/virtualization/Virtualization.js
var React40 = __toESM(require_react());
var PropTypes17 = __toESM(require_prop_types());

// node_modules/@progress/kendo-react-dateinputs/dist/es/virtualization/services/RowHeightService.js
var __spreadArray3 = function(to, from, pack) {
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
var update = function(arr, idx, value) {
  return __spreadArray3(__spreadArray3([], arr.slice(0, idx + 1), true), arr.slice(idx + 1).map(function(x) {
    return x + value;
  }), true);
};
var RowHeightService = (
  /** @class */
  function() {
    function RowHeightService3(total, rowHeight, detailRowHeight) {
      if (total === void 0) {
        total = 0;
      }
      this.total = total;
      this.rowHeight = rowHeight;
      this.detailRowHeight = detailRowHeight;
      this.offsets = [];
      this.heights = [];
      var agg = 0;
      for (var idx = 0; idx < total; idx++) {
        this.offsets.push(agg);
        agg += rowHeight;
        this.heights.push(rowHeight);
      }
    }
    RowHeightService3.prototype.height = function(rowIndex) {
      return this.heights[rowIndex];
    };
    RowHeightService3.prototype.expandDetail = function(rowIndex) {
      if (this.height(rowIndex) === this.rowHeight) {
        this.updateRowHeight(rowIndex, this.detailRowHeight);
      }
    };
    RowHeightService3.prototype.collapseDetail = function(rowIndex) {
      if (this.height(rowIndex) > this.rowHeight) {
        this.updateRowHeight(rowIndex, this.detailRowHeight * -1);
      }
    };
    RowHeightService3.prototype.index = function(position) {
      for (var i = 0; i < this.offsets.length; i++) {
        if (position === this.offsets[i]) {
          return i;
        }
        if (position < this.offsets[i]) {
          return i - 1;
        }
      }
      return this.total - 1;
    };
    RowHeightService3.prototype.offset = function(rowIndex) {
      return this.offsets[rowIndex];
    };
    RowHeightService3.prototype.totalHeight = function() {
      return this.heights.reduce(function(prev, curr) {
        return prev + curr;
      }, 0);
    };
    RowHeightService3.prototype.updateRowHeight = function(rowIndex, value) {
      this.heights[rowIndex] += value;
      this.offsets = update(this.offsets, rowIndex, value);
    };
    return RowHeightService3;
  }()
);

// node_modules/@progress/kendo-react-dateinputs/dist/es/virtualization/services/ScrollerService.js
var normalize2 = function(x) {
  return Math.max(x, 0);
};
var ScrollAction = (
  /** @class */
  function() {
    function ScrollAction2(offset) {
      this.offset = offset;
    }
    return ScrollAction2;
  }()
);
var PageAction = (
  /** @class */
  function() {
    function PageAction2(skip) {
      this.skip = skip;
    }
    return PageAction2;
  }()
);
var ScrollerService = (
  /** @class */
  function() {
    function ScrollerService2(onScrollAction, onPageAction) {
      this.onScrollAction = onScrollAction;
      this.onPageAction = onPageAction;
      this.direction = "vertical";
      this.firstLoaded = 0;
      this.lastLoaded = 0;
      this.lastScrollTop = 0;
      this.take = 0;
      this.total = 0;
      this.rowHeightService = null;
      this.bottomOffset = 0;
      this.topOffset = 0;
    }
    ScrollerService2.prototype.create = function(rowHeightService, skip, take, total, topOffset, bottomOffset, direction) {
      if (topOffset === void 0) {
        topOffset = 0;
      }
      if (bottomOffset === void 0) {
        bottomOffset = 0;
      }
      if (direction === void 0) {
        direction = "vertical";
      }
      this.rowHeightService = rowHeightService;
      this.firstLoaded = skip;
      this.lastLoaded = skip + take;
      this.take = take;
      this.total = total;
      this.lastScrollTop = 0;
      this.topOffset = topOffset;
      this.bottomOffset = bottomOffset;
      this.direction = direction;
      var offsetBufferRows = this.rowsForHeight(topOffset);
      var skipWithOffset = normalize2(skip - offsetBufferRows);
      this.onScrollAction(new ScrollAction(this.rowOffset(skipWithOffset)));
      this.onPageAction(new PageAction(skipWithOffset));
    };
    ScrollerService2.prototype.onScroll = function(_a14) {
      var scrollLeft = _a14.scrollLeft, scrollTop = _a14.scrollTop, offsetHeight = _a14.offsetHeight, offsetWidth = _a14.offsetWidth;
      var scrollPosition = this.direction === "vertical" ? scrollTop : scrollLeft;
      var offsetSize = this.direction === "vertical" ? offsetHeight : offsetWidth;
      if (this.lastScrollTop === scrollPosition || !this.rowHeightService) {
        return;
      }
      var up = this.lastScrollTop >= scrollPosition;
      this.lastScrollTop = scrollPosition;
      var firstItemIndex = this.rowHeightService.index(normalize2(scrollPosition - this.topOffset));
      var lastItemIndex = this.rowHeightService.index(normalize2(scrollPosition + offsetSize - this.bottomOffset));
      if (!up && lastItemIndex >= this.lastLoaded && this.lastLoaded < this.total) {
        this.firstLoaded = firstItemIndex;
        this.onScrollAction(new ScrollAction(this.rowOffset(firstItemIndex)));
        this.lastLoaded = Math.min(this.firstLoaded + this.take, this.total);
        this.onPageAction(new PageAction(this.firstLoaded));
      }
      if (up && firstItemIndex <= this.firstLoaded) {
        var nonVisibleBuffer = Math.floor(this.take * 0.3);
        this.firstLoaded = normalize2(firstItemIndex - nonVisibleBuffer);
        this.onScrollAction(new ScrollAction(this.rowOffset(this.firstLoaded)));
        this.lastLoaded = Math.min(this.firstLoaded + this.take, this.total);
        this.onPageAction(new PageAction(this.firstLoaded));
      }
    };
    ScrollerService2.prototype.rowOffset = function(index) {
      return this.rowHeightService ? this.rowHeightService.offset(index) + this.topOffset : 0;
    };
    ScrollerService2.prototype.rowsForHeight = function(height) {
      return this.rowHeightService ? Math.ceil(height / this.rowHeightService.height(0)) : 0;
    };
    return ScrollerService2;
  }()
);

// node_modules/@progress/kendo-react-dateinputs/dist/es/virtualization/Virtualization.js
var __extends15 = function() {
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
var _a5;
var _b;
var _c;
var ScrollDirection;
(function(ScrollDirection2) {
  ScrollDirection2[ScrollDirection2["Backward"] = 0] = "Backward";
  ScrollDirection2[ScrollDirection2["Forward"] = 1] = "Forward";
})(ScrollDirection || (ScrollDirection = {}));
var differenceToScroll = function(scrollTop, staticOffset, maxScrollDifference) {
  return Math.min(Math.abs(staticOffset - scrollTop), maxScrollDifference);
};
var FRAME_DURATION = 17;
var MIN_SCROLL_STEP = 10;
var scrollModifiers = (_a5 = {}, _a5[ScrollDirection.Forward] = function(step) {
  return function(value) {
    return value + step;
  };
}, _a5[ScrollDirection.Backward] = function(step) {
  return function(value) {
    return value - step;
  };
}, _a5);
var scrollNormalizers = (_b = {}, _b[ScrollDirection.Forward] = function(end2) {
  return function(value) {
    return Math.min(value, end2);
  };
}, _b[ScrollDirection.Backward] = function(end2) {
  return function(value) {
    return Math.max(value, end2);
  };
}, _b);
var scrollValidators = (_c = {}, _c[ScrollDirection.Forward] = function(end2) {
  return function(start2) {
    return start2 < end2;
  };
}, _c[ScrollDirection.Backward] = function(end2) {
  return function(start2) {
    return start2 > end2;
  };
}, _c);
var Virtualization = (
  /** @class */
  function(_super) {
    __extends15(Virtualization2, _super);
    function Virtualization2(props) {
      var _this = _super.call(this, props) || this;
      _this.rowHeightService = null;
      _this.scrollContainer = null;
      _this.lastDirection = null;
      _this.lastTotal = 0;
      _this.lastTake = 0;
      _this.animationInProgress = false;
      _this.restrictScroll = false;
      _this.scrollTo = function(value) {
        var scrollProperty = _this.direction === "vertical" ? "scrollTop" : "scrollLeft";
        if (!_this.scrollContainer) {
          return;
        }
        var current = _this.scrollContainer[scrollProperty];
        if (_this.restrictScroll && scrollProperty === "scrollTop" && (!Number.isInteger(current) || !Number.isInteger(value)) && Math.abs(current - value) < MIN_SCROLL_STEP) {
          return;
        }
        _this.scrollContainer[scrollProperty] = value;
      };
      _this.scrollToIndex = function(index) {
        _this.animationInProgress = false;
        if (_this.rowHeightService) {
          _this.scrollTo(_this.rowHeightService.offset(index));
        }
      };
      _this.animateToIndex = function(index) {
        if (!_this.rowHeightService || !window) {
          return;
        }
        window.cancelAnimationFrame(_this.cancelAnimation);
        var indexOffset = _this.rowHeightService.offset(index);
        var direction = _this.getContainerScrollDirection(indexOffset);
        var _a14 = _this.scrollRange(indexOffset, direction), start2 = _a14.start, end2 = _a14.end;
        if (start2 === end2) {
          return;
        }
        var step = _this.scrollStep(start2, end2);
        var modifyScroll = scrollModifiers[direction](step);
        var normalizeScroll = scrollNormalizers[direction](end2);
        var isScrollValid = scrollValidators[direction](modifyScroll(end2));
        var animate = function(progress) {
          _this.animationInProgress = true;
          var next = modifyScroll(progress);
          _this.scrollTo(normalizeScroll(next));
          isScrollValid(next) ? _this.cancelAnimation = window.requestAnimationFrame(function() {
            animate(next);
          }) : _this.animationInProgress = false;
        };
        _this.cancelAnimation = window.requestAnimationFrame(function() {
          animate(start2);
        });
      };
      _this.scrollToBottom = function() {
        if (!_this.rowHeightService) {
          return;
        }
        _this.scrollTo(_this.rowHeightService.totalHeight() + _this.props.bottomOffset);
      };
      _this.scrollStep = function(start2, end2) {
        var duration = _this.props.scrollDuration || Virtualization2.defaultProps.scrollDuration;
        return Math.abs(end2 - start2) / (duration / FRAME_DURATION);
      };
      _this.scrollRange = function(indexOffset, direction) {
        var containerScroll = _this.containerScrollPosition;
        if (parseInt("".concat(indexOffset), 10) === parseInt("".concat(containerScroll), 10)) {
          return { start: indexOffset, end: indexOffset };
        }
        var maxScroll = _this.containerMaxScroll();
        var sign = direction === ScrollDirection.Backward ? 1 : -1;
        var difference = differenceToScroll(containerScroll, indexOffset, _this.props.maxScrollDifference || 0);
        var end2 = Math.min(indexOffset, maxScroll);
        var start2 = Math.min(Math.max(end2 + sign * difference, 0), maxScroll);
        return { start: start2, end: end2 };
      };
      _this.containerMaxScroll = function() {
        return _this.containerScrollSize - _this.containerOffsetSize;
      };
      _this.getContainerScrollDirection = function(indexOffset) {
        return indexOffset < _this.containerScrollPosition ? ScrollDirection.Backward : ScrollDirection.Forward;
      };
      _this.initServices = function(props2) {
        if (props2 === void 0) {
          props2 = _this.props;
        }
        var dimension = _this.direction === "vertical" ? props2.itemHeight : props2.itemWidth;
        if (dimension === void 0) {
          return;
        }
        _this.rowHeightService = new RowHeightService(props2.total, dimension, 0);
        _this.scrollerService.create(_this.rowHeightService, props2.skip, props2.take, props2.total, props2.topOffset, _this.scrollOffsetSize, _this.direction);
      };
      _this.getContainerProperty = function(propertyName) {
        if (!_this.scrollContainer) {
          return 0;
        }
        return _this.scrollContainer[propertyName];
      };
      _this.handleScroll = function(event) {
        if (!_this.scrollContainer || !_this.rowHeightService) {
          return;
        }
        var target = event.target;
        _this.scrollerService.onScroll({
          scrollLeft: target.scrollLeft,
          scrollTop: target.scrollTop,
          offsetHeight: target.offsetHeight,
          offsetWidth: target.offsetWidth
        });
        var index = _this.rowHeightService.index(_this.containerScrollPosition - _this.props.topOffset);
        var onScrollAction = _this.props.onScrollAction;
        var args = {
          index,
          target,
          scrollAction: _this.scrollAction,
          pageAction: _this.pageAction,
          animationInProgress: _this.animationInProgress
        };
        if (_this.props.onScroll) {
          _this.props.onScroll.call(void 0, event);
        }
        if (onScrollAction) {
          onScrollAction.call(void 0, args);
        }
        _this.scrollAction = void 0;
        _this.pageAction = void 0;
      };
      _this.handleScrollAction = function(action) {
        _this.scrollAction = action;
      };
      _this.handlePageAction = function(action) {
        _this.pageAction = action;
      };
      _this.scrollerService = new ScrollerService(_this.handleScrollAction, _this.handlePageAction);
      _this.restrictScroll = Number.parseFloat(React40.version) > 17;
      return _this;
    }
    Object.defineProperty(Virtualization2.prototype, "element", {
      get: function() {
        return this.scrollContainer;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(Virtualization2.prototype, "containerOffsetSize", {
      get: function() {
        return this.getContainerProperty(this.direction === "vertical" ? "offsetHeight" : "offsetWidth");
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(Virtualization2.prototype, "containerScrollSize", {
      get: function() {
        return this.getContainerProperty(this.direction === "vertical" ? "scrollHeight" : "scrollWidth");
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(Virtualization2.prototype, "containerScrollPosition", {
      get: function() {
        return this.getContainerProperty(this.direction === "vertical" ? "scrollTop" : "scrollLeft");
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(Virtualization2.prototype, "direction", {
      get: function() {
        return this.props.direction !== void 0 ? this.props.direction : Virtualization2.defaultProps.direction;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(Virtualization2.prototype, "scrollOffsetSize", {
      get: function() {
        return this.props.scrollOffsetSize !== void 0 ? this.props.scrollOffsetSize : Virtualization2.defaultProps.scrollOffsetSize;
      },
      enumerable: false,
      configurable: true
    });
    Virtualization2.prototype.activeIndex = function() {
      return this.itemIndex(Math.ceil(this.containerScrollPosition));
    };
    Virtualization2.prototype.itemIndex = function(offset) {
      if (!this.rowHeightService) {
        return 0;
      }
      return this.rowHeightService.index(offset);
    };
    Virtualization2.prototype.itemOffset = function(index) {
      if (!this.rowHeightService) {
        return 0;
      }
      return this.rowHeightService.offset(index);
    };
    Virtualization2.prototype.isIndexVisible = function(index) {
      if (!this.rowHeightService) {
        return false;
      }
      var containerTop = this.containerScrollPosition;
      var containerBottom = containerTop + this.containerOffsetSize;
      var top = this.rowHeightService.offset(index);
      var bottom = top + this.rowHeightService.height(index);
      return top >= containerTop && bottom <= containerBottom;
    };
    Virtualization2.prototype.isListScrolled = function(index) {
      if (!this.rowHeightService) {
        return false;
      }
      return this.containerScrollPosition !== this.rowHeightService.offset(index);
    };
    Virtualization2.prototype.componentDidMount = function() {
      var onMount = this.props.onMount;
      if (onMount) {
        onMount.call(void 0, this);
      }
    };
    Virtualization2.prototype.render = function() {
      var _this = this;
      if (this.lastTotal !== this.props.total || this.lastDirection !== this.direction || this.lastTake !== this.props.take) {
        this.initServices();
        this.lastTotal = this.props.total;
        this.lastDirection = this.direction;
        this.lastTake = this.props.take;
      }
      var vertexLength = "".concat((this.rowHeightService ? this.rowHeightService.totalHeight() : 0) + this.props.bottomOffset);
      var placeholderStyle = this.direction === "vertical" ? { height: "".concat(vertexLength, "px") } : { width: "".concat(vertexLength, "px") };
      var rootClassNames = classNames("k-content k-scrollable", {
        "k-scrollable-horizontal": this.direction === "horizontal"
      }, this.props.className);
      var scrollableClassNames = classNames("k-scrollable-placeholder", {
        "k-scrollable-horizontal-placeholder": this.direction === "horizontal"
      });
      return React40.createElement(
        "div",
        { ref: function(el) {
          _this.scrollContainer = el;
        }, onScroll: this.handleScroll, className: rootClassNames, tabIndex: this.props.tabIndex, role: this.props.role },
        this.props.children,
        React40.createElement("div", { style: placeholderStyle, className: scrollableClassNames })
      );
    };
    Virtualization2.propTypes = {
      bottomOffset: PropTypes17.number.isRequired,
      className: PropTypes17.string,
      direction: PropTypes17.oneOf(["horizontal", "vertical"]),
      forceScroll: PropTypes17.bool,
      itemHeight: PropTypes17.number,
      itemWidth: PropTypes17.number,
      maxScrollDifference: PropTypes17.number,
      onScroll: PropTypes17.func,
      onScrollAction: PropTypes17.func,
      scrollDuration: PropTypes17.number,
      scrollOffsetSize: PropTypes17.number,
      skip: PropTypes17.number.isRequired,
      tabIndex: PropTypes17.number,
      take: PropTypes17.number.isRequired,
      topOffset: PropTypes17.number.isRequired,
      total: PropTypes17.number.isRequired,
      role: PropTypes17.string
    };
    Virtualization2.defaultProps = {
      direction: "vertical",
      forceScroll: false,
      scrollOffsetSize: 0,
      maxScrollDifference: 100,
      scrollDuration: 100
    };
    return Virtualization2;
  }(React40.Component)
);

// node_modules/@progress/kendo-react-dateinputs/dist/es/calendar/components/View.js
var React43 = __toESM(require_react());
var PropTypes18 = __toESM(require_prop_types());

// node_modules/@progress/kendo-react-dateinputs/dist/es/calendar/components/CalendarCell.js
var React41 = __toESM(require_react());
var __extends16 = function() {
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
var __assign17 = function() {
  __assign17 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign17.apply(this, arguments);
};
var __rest6 = function(s, e) {
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
var compareProps = function(x, y) {
  var xProps = Object.getOwnPropertyNames(x);
  var yProps = Object.getOwnPropertyNames(y);
  if (xProps.length !== yProps.length) {
    return false;
  }
  for (var i = 0; i < xProps.length; i++) {
    var propName = xProps[i];
    if (x[propName] !== y[propName]) {
      return false;
    }
  }
  return true;
};
var CalendarCell = (
  /** @class */
  function(_super) {
    __extends16(CalendarCell2, _super);
    function CalendarCell2() {
      var _this = _super !== null && _super.apply(this, arguments) || this;
      _this.handleClick = function(event) {
        var _a14 = _this.props, onClick = _a14.onClick, value = _a14.value;
        if (onClick) {
          onClick.call(void 0, value, event);
        }
      };
      _this.handleMouseEnter = function() {
        var _a14 = _this.props, onMouseEnter = _a14.onMouseEnter, value = _a14.value;
        if (onMouseEnter) {
          onMouseEnter.call(void 0, value);
        }
      };
      _this.handleMouseLeave = function() {
        var _a14 = _this.props, onMouseLeave = _a14.onMouseLeave, value = _a14.value;
        if (onMouseLeave) {
          onMouseLeave.call(void 0, value);
        }
      };
      return _this;
    }
    CalendarCell2.prototype.shouldComponentUpdate = function(nextProps) {
      var _a14 = this.props, value = _a14.value, props = __rest6(_a14, ["value"]);
      var newValue = nextProps.value, newProps = __rest6(nextProps, ["value"]);
      var valueEqual = !(value && newValue) || value.getTime() === newValue.getTime();
      return !(valueEqual && compareProps(props, newProps));
    };
    CalendarCell2.prototype.render = function() {
      var _a14 = this.props, className = _a14.className, formattedValue = _a14.formattedValue, isWeekend = _a14.isWeekend, isFocused = _a14.isFocused, isInRange3 = _a14.isInRange, isSelected = _a14.isSelected, isRangeStart = _a14.isRangeStart, isRangeMid = _a14.isRangeMid, isRangeEnd = _a14.isRangeEnd, isRangeSplitStart = _a14.isRangeSplitStart, isRangeSplitEnd = _a14.isRangeSplitEnd, isToday = _a14.isToday, isDisabled = _a14.isDisabled, view = _a14.view, value = _a14.value, other = __rest6(_a14, ["className", "formattedValue", "isWeekend", "isFocused", "isInRange", "isSelected", "isRangeStart", "isRangeMid", "isRangeEnd", "isRangeSplitStart", "isRangeSplitEnd", "isToday", "isDisabled", "view", "value"]);
      var isEndActive = this.props.activeRangeEnd === "end" && isRangeEnd;
      var isStartActive = this.props.activeRangeEnd === "start" && isRangeStart;
      var rootClassName = classNames("k-calendar-td", {
        "k-range-end": isRangeEnd,
        "k-range-mid": isRangeMid,
        "k-range-split-end": isRangeSplitEnd,
        "k-range-split-start": isRangeSplitStart,
        "k-range-start": isRangeStart,
        "k-active": isStartActive || isEndActive,
        "k-state-pending-focus": isFocused,
        "k-selected": isSelected || isRangeStart || isRangeEnd,
        "k-today": isToday,
        "k-weekend": isWeekend,
        "k-disabled": isDisabled
      }, className);
      return React41.createElement(
        "td",
        __assign17({}, other, { className: rootClassName, onClick: this.handleClick, onMouseEnter: this.handleMouseEnter, onMouseLeave: this.handleMouseLeave }),
        React41.createElement("span", { className: "k-link" }, this.props.children)
      );
    };
    return CalendarCell2;
  }(React41.Component)
);

// node_modules/@progress/kendo-react-dateinputs/dist/es/calendar/components/CalendarWeekCell.js
var React42 = __toESM(require_react());
var __extends17 = function() {
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
var __assign18 = function() {
  __assign18 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign18.apply(this, arguments);
};
var __rest7 = function(s, e) {
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
var CalendarWeekCell = (
  /** @class */
  function(_super) {
    __extends17(CalendarWeekCell2, _super);
    function CalendarWeekCell2() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    CalendarWeekCell2.prototype.render = function() {
      var _a14 = this.props, className = _a14.className, firstDate = _a14.firstDate, other = __rest7(_a14, ["className", "firstDate"]);
      return React42.createElement("td", __assign18({ className: classNames("k-calendar-td", className) }, other), this.props.children);
    };
    return CalendarWeekCell2;
  }(React42.Component)
);

// node_modules/@progress/kendo-react-dateinputs/dist/es/calendar/models/NavigationAction.js
var Action;
(function(Action2) {
  Action2[Action2["Left"] = 0] = "Left";
  Action2[Action2["Right"] = 1] = "Right";
  Action2[Action2["Up"] = 2] = "Up";
  Action2[Action2["Down"] = 3] = "Down";
  Action2[Action2["PrevView"] = 4] = "PrevView";
  Action2[Action2["NextView"] = 5] = "NextView";
  Action2[Action2["FirstInView"] = 6] = "FirstInView";
  Action2[Action2["LastInView"] = 7] = "LastInView";
  Action2[Action2["LowerView"] = 8] = "LowerView";
  Action2[Action2["UpperView"] = 9] = "UpperView";
})(Action || (Action = {}));

// node_modules/@progress/kendo-react-dateinputs/dist/es/calendar/models/CalendarViewEnum.js
var CalendarViewEnum;
(function(CalendarViewEnum2) {
  CalendarViewEnum2[CalendarViewEnum2["month"] = 0] = "month";
  CalendarViewEnum2[CalendarViewEnum2["year"] = 1] = "year";
  CalendarViewEnum2[CalendarViewEnum2["decade"] = 2] = "decade";
  CalendarViewEnum2[CalendarViewEnum2["century"] = 3] = "century";
})(CalendarViewEnum || (CalendarViewEnum = {}));

// node_modules/@progress/kendo-react-dateinputs/dist/es/calendar/models/SelectionRange.js
var EMPTY_SELECTIONRANGE = { start: null, end: null };

// node_modules/@progress/kendo-react-dateinputs/dist/es/utils.js
var viewInRange = function(candidate, min, max) {
  if (min === void 0 || max === void 0) {
    return candidate;
  }
  return min <= candidate && candidate <= max ? candidate : candidate < min ? min : max;
};
var MIDNIGHT_DATE = new Date(1980, 0, 1);
var MIN_DATE = new Date(1900, 0, 1);
var MAX_DATE = new Date(2099, 11, 31);
var MIN_TIME = new Date(1980, 0, 1);
var MAX_TIME = new Date(1980, 0, 1, 23, 59, 59);
var setTime = function(origin, candidate) {
  var date2 = cloneDate(origin);
  date2.setHours(candidate.getHours(), candidate.getMinutes(), candidate.getSeconds(), candidate.getMilliseconds());
  return date2;
};
var getToday = function() {
  return getDate(/* @__PURE__ */ new Date());
};
var isInRange = function(candidate, min, max) {
  return !candidate || !(min && min > candidate || max && max < candidate);
};
var isInDateRange = function(candidate, min, max) {
  return candidate === null || !(min && getDate(min) > getDate(candidate) || max && getDate(max) < getDate(candidate));
};
var isInSelectionRange = function(value, selectionRange) {
  var _a14 = selectionRange || EMPTY_SELECTIONRANGE, start2 = _a14.start, end2 = _a14.end;
  if (!start2 || !end2) {
    return false;
  }
  return start2 < value && value < end2;
};
var range = function(start2, end2, step) {
  if (step === void 0) {
    step = 1;
  }
  var result = [];
  for (var i = start2; i < end2; i = i + step) {
    result.push(i);
  }
  return result;
};
var intersects = function(date2, min, max) {
  return min.getTime() <= date2.getTime() && date2.getTime() <= max.getTime();
};
var shiftWeekNames = function(names, offset) {
  return names.slice(offset).concat(names.slice(0, offset));
};
var dateInRange = function(candidate, min, max) {
  if (!candidate) {
    return candidate;
  }
  if (min && candidate < min) {
    return cloneDate(min);
  }
  if (max && candidate > max) {
    return cloneDate(max);
  }
  return candidate;
};
var domContainerFactory = function(type) {
  return function(children, classes, styles) {
    if (classes === void 0) {
      classes = "";
    }
    if (styles === void 0) {
      styles = {};
    }
    var container = document.createElement(type);
    container.className = classes;
    Object.keys(styles).map(function(key) {
      return container.style[key] = styles[key];
    });
    if (typeof children === "string") {
      container.innerHTML = children || "";
    } else {
      (children || []).forEach(function(child) {
        return child && container.appendChild(child);
      });
    }
    return container;
  };
};

// node_modules/@progress/kendo-react-dateinputs/dist/es/calendar/services/CenturyViewService.js
var _a6;
var EMPTY_DATA = [[]];
var CELLS_LENGTH = 4;
var ROWS_LENGTH = 3;
var ACTIONS = (_a6 = {}, _a6[Action.Left] = function(date2) {
  return addDecades(date2, -1);
}, _a6[Action.Up] = function(date2) {
  return addDecades(date2, -5);
}, _a6[Action.Right] = function(date2) {
  return addDecades(date2, 1);
}, _a6[Action.Down] = function(date2) {
  return addDecades(date2, 5);
}, _a6[Action.PrevView] = function(date2) {
  return addCenturies(date2, -1);
}, _a6[Action.NextView] = function(date2) {
  return addCenturies(date2, 1);
}, _a6[Action.FirstInView] = function(date2) {
  return firstDecadeOfCentury(date2);
}, _a6[Action.LastInView] = function(date2) {
  return lastDecadeOfCentury(date2);
}, _a6);
var CenturyViewService = (
  /** @class */
  function() {
    function CenturyViewService2() {
    }
    CenturyViewService2.prototype.addToDate = function(min, skip) {
      return addCenturies(min, skip);
    };
    CenturyViewService2.prototype.datesList = function(start2, count) {
      return range(0, count).map(function(i) {
        return addCenturies(start2, i);
      });
    };
    CenturyViewService2.prototype.data = function(options) {
      var _this = this;
      var cellUID = options.cellUID, focusedDate = options.focusedDate, isActiveView = options.isActiveView, max = options.max, min = options.min, selectedDate = options.selectedDate, _a14 = options.selectionRange, selectionRange = _a14 === void 0 ? EMPTY_SELECTIONRANGE : _a14, viewDate = options.viewDate;
      if (!viewDate) {
        return EMPTY_DATA;
      }
      var cells = range(0, CELLS_LENGTH);
      var firstDate = firstDecadeOfCentury(viewDate);
      var lastDate = lastDecadeOfCentury(viewDate);
      var today2 = getToday();
      return range(0, ROWS_LENGTH).map(function(rowOffset) {
        var baseDate = addDecades(firstDate, rowOffset * CELLS_LENGTH);
        return cells.map(function(cellOffset) {
          var cellDate = _this.normalize(addDecades(baseDate, cellOffset), min, max);
          var isRangeStart = _this.isEqual(cellDate, selectionRange.start);
          var isRangeEnd = _this.isEqual(cellDate, selectionRange.end);
          var isInMiddle = !isRangeStart && !isRangeEnd;
          var isRangeMid = isInMiddle && isInSelectionRange(cellDate, selectionRange);
          var isSelected = isActiveView && (!Array.isArray(selectedDate) ? isInRange(selectedDate, min, max) && _this.isEqual(cellDate, selectedDate) : _this.isSelectedFromArray(cellDate, selectedDate, min, max));
          return intersects(cellDate, firstDate, lastDate) ? {
            formattedValue: _this.value(cellDate),
            id: "".concat(cellUID).concat(cellDate.getTime()),
            isFocused: _this.isEqual(cellDate, focusedDate),
            isSelected,
            isWeekend: false,
            isInRange: isInRange(cellDate, min, max),
            isRangeStart,
            isRangeMid,
            isRangeEnd,
            isRangeSplitEnd: isRangeMid && _this.isEqual(cellDate, lastDate),
            isRangeSplitStart: isRangeMid && _this.isEqual(cellDate, firstDate),
            isToday: _this.isEqual(cellDate, today2),
            title: _this.cellTitle(cellDate),
            value: cellDate
          } : null;
        });
      });
    };
    CenturyViewService2.prototype.isSelectedFromArray = function(candidate, dates, min, max) {
      var _this = this;
      var result = false;
      dates.forEach(function(date2) {
        if (isInRange(candidate, min, max) && _this.isEqual(candidate, date2)) {
          result = true;
        }
      });
      return result;
    };
    CenturyViewService2.prototype.isEqual = function(candidate, expected) {
      if (!candidate || !expected) {
        return false;
      }
      return firstYearOfDecade(candidate).getFullYear() === firstYearOfDecade(expected).getFullYear();
    };
    CenturyViewService2.prototype.isInArray = function(date2, dates) {
      if (!dates.length) {
        return false;
      }
      var year = date2.getFullYear();
      return dates[0].getFullYear() <= year && year <= dates[dates.length - 1].getFullYear() + 99;
    };
    CenturyViewService2.prototype.isInRange = function(candidate, min, max) {
      var year = firstYearOfDecade(candidate).getFullYear();
      var aboveMin = !min || firstYearOfDecade(min).getFullYear() <= year;
      var belowMax = !max || year <= firstYearOfDecade(max).getFullYear();
      return aboveMin && belowMax;
    };
    CenturyViewService2.prototype.isInSameView = function(candidate, value) {
      return durationInCenturies(candidate, value) === 0;
    };
    CenturyViewService2.prototype.isRangeStart = function(value) {
      return value.getFullYear() % 1e3 === 0;
    };
    CenturyViewService2.prototype.move = function(value, action) {
      var modifier = ACTIONS[action];
      if (!modifier) {
        return value;
      }
      return modifier(value);
    };
    CenturyViewService2.prototype.cellTitle = function(value) {
      return firstYearOfDecade(value).getFullYear().toString();
    };
    CenturyViewService2.prototype.navigationTitle = function(value) {
      return value ? firstDecadeOfCentury(value).getFullYear().toString() : "";
    };
    CenturyViewService2.prototype.title = function(value) {
      if (!value) {
        return "";
      }
      return "".concat(firstDecadeOfCentury(value).getFullYear(), " - ").concat(lastDecadeOfCentury(value).getFullYear());
    };
    CenturyViewService2.prototype.rowLength = function(_) {
      return CELLS_LENGTH;
    };
    CenturyViewService2.prototype.skip = function(value, min) {
      return durationInCenturies(min, value);
    };
    CenturyViewService2.prototype.total = function(min, max) {
      return durationInCenturies(min, max) + 1;
    };
    CenturyViewService2.prototype.value = function(current) {
      return current ? firstYearOfDecade(current).getFullYear().toString() : "";
    };
    CenturyViewService2.prototype.viewDate = function(date2, max, border) {
      if (border === void 0) {
        border = 1;
      }
      var renderTwoViews = durationInCenturies(date2, max) < border;
      return renderTwoViews ? addCenturies(date2, -1) : date2;
    };
    CenturyViewService2.prototype.normalize = function(cellDate, min, max) {
      if (cellDate < min && this.isEqual(cellDate, min)) {
        return cloneDate(min);
      }
      if (cellDate > max && this.isEqual(cellDate, max)) {
        return cloneDate(max);
      }
      return cellDate;
    };
    return CenturyViewService2;
  }()
);

// node_modules/@progress/kendo-react-dateinputs/dist/es/calendar/services/DecadeViewService.js
var _a7;
var EMPTY_DATA2 = [[]];
var CELLS_LENGTH2 = 4;
var ROWS_LENGTH2 = 3;
var ACTIONS2 = (_a7 = {}, _a7[Action.Left] = function(date2) {
  return addYears(date2, -1);
}, _a7[Action.Up] = function(date2) {
  return addYears(date2, -5);
}, _a7[Action.Right] = function(date2) {
  return addYears(date2, 1);
}, _a7[Action.Down] = function(date2) {
  return addYears(date2, 5);
}, _a7[Action.PrevView] = function(date2) {
  return addDecades(date2, -1);
}, _a7[Action.NextView] = function(date2) {
  return addDecades(date2, 1);
}, _a7[Action.FirstInView] = function(date2) {
  return firstYearOfDecade(date2);
}, _a7[Action.LastInView] = function(date2) {
  return lastYearOfDecade(date2);
}, _a7);
var DecadeViewService = (
  /** @class */
  function() {
    function DecadeViewService2() {
    }
    DecadeViewService2.prototype.addToDate = function(min, skip) {
      return addDecades(min, skip);
    };
    DecadeViewService2.prototype.datesList = function(start2, count) {
      return range(0, count).map(function(i) {
        return addDecades(start2, i);
      });
    };
    DecadeViewService2.prototype.data = function(options) {
      var _this = this;
      var cellUID = options.cellUID, focusedDate = options.focusedDate, isActiveView = options.isActiveView, max = options.max, min = options.min, selectedDate = options.selectedDate, _a14 = options.selectionRange, selectionRange = _a14 === void 0 ? EMPTY_SELECTIONRANGE : _a14, viewDate = options.viewDate;
      if (!viewDate) {
        return EMPTY_DATA2;
      }
      var cells = range(0, CELLS_LENGTH2);
      var firstDate = firstYearOfDecade(viewDate);
      var lastDate = lastYearOfDecade(viewDate);
      var today2 = getToday();
      return range(0, ROWS_LENGTH2).map(function(rowOffset) {
        var baseDate = addYears(firstDate, rowOffset * CELLS_LENGTH2);
        return cells.map(function(cellOffset) {
          var cellDate = _this.normalize(addYears(baseDate, cellOffset), min, max);
          var isRangeStart = _this.isEqual(cellDate, selectionRange.start);
          var isRangeEnd = _this.isEqual(cellDate, selectionRange.end);
          var isInMiddle = !isRangeStart && !isRangeEnd;
          var isRangeMid = isInMiddle && isInSelectionRange(cellDate, selectionRange);
          var isSelected = isActiveView && (!Array.isArray(selectedDate) ? isInRange(selectedDate, min, max) && _this.isEqual(cellDate, selectedDate) : _this.isSelectedFromArray(cellDate, selectedDate, min, max));
          return intersects(cellDate, firstDate, lastDate) ? {
            formattedValue: _this.value(cellDate),
            id: "".concat(cellUID).concat(cellDate.getTime()),
            isFocused: _this.isEqual(cellDate, focusedDate),
            isSelected,
            isWeekend: false,
            isInRange: isInRange(cellDate, min, max),
            isRangeStart,
            isRangeMid,
            isRangeEnd,
            isRangeSplitEnd: isRangeMid && _this.isEqual(cellDate, lastDate),
            isRangeSplitStart: isRangeMid && _this.isEqual(cellDate, firstDate),
            isToday: _this.isEqual(cellDate, today2),
            title: _this.cellTitle(cellDate),
            value: cellDate
          } : null;
        });
      });
    };
    DecadeViewService2.prototype.isSelectedFromArray = function(candidate, dates, min, max) {
      var _this = this;
      var result = false;
      dates.forEach(function(date2) {
        if (isInRange(candidate, min, max) && _this.isEqual(candidate, date2)) {
          result = true;
        }
      });
      return result;
    };
    DecadeViewService2.prototype.isEqual = function(candidate, expected) {
      if (!candidate || !expected) {
        return false;
      }
      return candidate.getFullYear() === expected.getFullYear();
    };
    DecadeViewService2.prototype.isInArray = function(date2, dates) {
      if (!dates.length) {
        return false;
      }
      var year = date2.getFullYear();
      return dates[0].getFullYear() <= year && year <= dates[dates.length - 1].getFullYear() + 9;
    };
    DecadeViewService2.prototype.isInRange = function(candidate, min, max) {
      var year = candidate.getFullYear();
      var aboveMin = !min || min.getFullYear() <= year;
      var belowMax = !max || year <= max.getFullYear();
      return aboveMin && belowMax;
    };
    DecadeViewService2.prototype.isRangeStart = function(value) {
      return value.getFullYear() % 100 === 0;
    };
    DecadeViewService2.prototype.isInSameView = function(candidate, value) {
      return durationInDecades(candidate, value) === 0;
    };
    DecadeViewService2.prototype.move = function(value, action) {
      var modifier = ACTIONS2[action];
      if (!modifier) {
        return value;
      }
      return modifier(value);
    };
    DecadeViewService2.prototype.cellTitle = function(value) {
      return value.getFullYear().toString();
    };
    DecadeViewService2.prototype.navigationTitle = function(value) {
      return value ? firstYearOfDecade(value).getFullYear().toString() : "";
    };
    DecadeViewService2.prototype.title = function(value) {
      if (!value) {
        return "";
      }
      return "".concat(firstYearOfDecade(value).getFullYear(), " - ").concat(lastYearOfDecade(value).getFullYear());
    };
    DecadeViewService2.prototype.rowLength = function(_) {
      return CELLS_LENGTH2;
    };
    DecadeViewService2.prototype.skip = function(value, min) {
      return durationInDecades(min, value);
    };
    DecadeViewService2.prototype.total = function(min, max) {
      return durationInDecades(min, max) + 1;
    };
    DecadeViewService2.prototype.value = function(current) {
      return current ? current.getFullYear().toString() : "";
    };
    DecadeViewService2.prototype.viewDate = function(date2, max, border) {
      if (border === void 0) {
        border = 1;
      }
      var renderTwoViews = durationInDecades(date2, max) < border;
      return renderTwoViews ? addDecades(date2, -1) : date2;
    };
    DecadeViewService2.prototype.normalize = function(cellDate, min, max) {
      if (cellDate < min && this.isEqual(cellDate, min)) {
        return cloneDate(min);
      }
      if (cellDate > max && this.isEqual(cellDate, max)) {
        return cloneDate(max);
      }
      return cellDate;
    };
    return DecadeViewService2;
  }()
);

// node_modules/@progress/kendo-react-dateinputs/dist/es/calendar/services/MonthViewService.js
var _a8;
var EMPTY_DATA3 = [[]];
var CELLS_LENGTH3 = 7;
var ROWS_LENGTH3 = 6;
var SATURDAY = 6;
var SUNDAY = 0;
var ACTIONS3 = (_a8 = {}, _a8[Action.Left] = function(date2) {
  return addDays(date2, -1);
}, _a8[Action.Up] = function(date2) {
  return addWeeks(date2, -1);
}, _a8[Action.Right] = function(date2) {
  return addDays(date2, 1);
}, _a8[Action.Down] = function(date2) {
  return addWeeks(date2, 1);
}, _a8[Action.PrevView] = function(date2) {
  return addMonths(date2, -1);
}, _a8[Action.NextView] = function(date2) {
  return addMonths(date2, 1);
}, _a8[Action.FirstInView] = function(date2) {
  return firstDayOfMonth(date2);
}, _a8[Action.LastInView] = function(date2) {
  return lastDayOfMonth(date2);
}, _a8);
var MonthViewService = (
  /** @class */
  function() {
    function MonthViewService2(intl) {
      this.intl = intl;
    }
    MonthViewService2.prototype.addToDate = function(min, skip) {
      return addMonths(min, skip);
    };
    MonthViewService2.prototype.datesList = function(start2, count) {
      return range(0, count).map(function(i) {
        return addMonths(start2, i);
      });
    };
    MonthViewService2.prototype.data = function(options) {
      var _this = this;
      var cellUID = options.cellUID, focusedDate = options.focusedDate, isActiveView = options.isActiveView, max = options.max, min = options.min, selectedDate = options.selectedDate, _a14 = options.selectionRange, selectionRange = _a14 === void 0 ? EMPTY_SELECTIONRANGE : _a14, viewDate = options.viewDate;
      if (!viewDate) {
        return EMPTY_DATA3;
      }
      var firstMonthDate = firstDayOfMonth(viewDate);
      var lastMonthDate = lastDayOfMonth(viewDate);
      var backward = -1;
      var date2 = dayOfWeek(firstMonthDate, this.intl.firstDay(), backward);
      var cells = range(0, CELLS_LENGTH3);
      var today2 = getToday();
      return range(0, ROWS_LENGTH3).map(function(rowOffset) {
        var baseDate = addDays(date2, rowOffset * CELLS_LENGTH3);
        return cells.map(function(cellOffset) {
          var cellDate = _this.normalize(addDays(baseDate, cellOffset), min, max);
          var otherMonth = cellDate < firstMonthDate || cellDate > lastMonthDate;
          if (otherMonth) {
            return null;
          }
          var isRangeStart = _this.isEqual(cellDate, selectionRange.start);
          var isRangeEnd = _this.isEqual(cellDate, selectionRange.end);
          var isInMiddle = !isRangeStart && !isRangeEnd;
          var isRangeMid = isInMiddle && isInSelectionRange(cellDate, selectionRange);
          var isSelected = isActiveView && (!Array.isArray(selectedDate) ? isInRange(selectedDate, min, max) && _this.isEqual(cellDate, selectedDate) : _this.isSelectedFromArray(cellDate, selectedDate, min, max));
          var cell = {
            formattedValue: _this.value(cellDate),
            id: "".concat(cellUID).concat(cellDate.getTime()),
            isFocused: _this.isEqual(cellDate, focusedDate),
            isSelected,
            isInRange: isInRange(cellDate, min, max),
            isWeekend: _this.isWeekend(cellDate),
            isRangeStart,
            isRangeMid,
            isRangeEnd,
            isRangeSplitStart: isRangeMid && _this.isEqual(cellDate, firstMonthDate),
            isRangeSplitEnd: isRangeMid && _this.isEqual(cellDate, lastMonthDate),
            isToday: _this.isEqual(cellDate, today2),
            title: _this.cellTitle(cellDate),
            value: cellDate
          };
          return cell;
        });
      });
    };
    MonthViewService2.prototype.isEqual = function(candidate, expected) {
      if (!candidate || !expected) {
        return false;
      }
      return getDate(candidate).getTime() === getDate(expected).getTime();
    };
    MonthViewService2.prototype.isSelectedFromArray = function(candidate, dates, min, max) {
      var _this = this;
      var result = false;
      dates.forEach(function(date2) {
        if (isInRange(candidate, min, max) && _this.isEqual(candidate, date2)) {
          result = true;
        }
      });
      return result;
    };
    MonthViewService2.prototype.isInArray = function(date2, dates) {
      return !!dates.length && firstDayOfMonth(dates[0]) <= date2 && date2 <= lastDayOfMonth(dates[dates.length - 1]);
    };
    MonthViewService2.prototype.isInRange = function(candidate, min, max) {
      var value = getDate(candidate);
      var aboveMin = !min || getDate(min) <= value;
      var belowMax = !max || value <= getDate(max);
      return aboveMin && belowMax;
    };
    MonthViewService2.prototype.isInSameView = function(candidate, value) {
      return durationInMonths(candidate, value) === 0;
    };
    MonthViewService2.prototype.isRangeStart = function(value) {
      return !value.getMonth();
    };
    MonthViewService2.prototype.move = function(value, action) {
      var modifier = ACTIONS3[action];
      if (!modifier) {
        return value;
      }
      return modifier(value);
    };
    MonthViewService2.prototype.cellTitle = function(value) {
      return this.intl.formatDate(value, "D");
    };
    MonthViewService2.prototype.navigationTitle = function(value) {
      if (!value) {
        return "";
      }
      return this.isRangeStart(value) ? value.getFullYear().toString() : this.abbrMonthNames()[value.getMonth()];
    };
    MonthViewService2.prototype.title = function(current) {
      return "".concat(this.wideMonthNames()[current.getMonth()], " ").concat(current.getFullYear());
    };
    MonthViewService2.prototype.rowLength = function(prependCell) {
      return CELLS_LENGTH3 + (prependCell ? 1 : 0);
    };
    MonthViewService2.prototype.skip = function(value, min) {
      return durationInMonths(min, value);
    };
    MonthViewService2.prototype.total = function(min, max) {
      return durationInMonths(min, max) + 1;
    };
    MonthViewService2.prototype.value = function(current) {
      return current ? current.getDate().toString() : "";
    };
    MonthViewService2.prototype.viewDate = function(date2, max, border) {
      if (border === void 0) {
        border = 1;
      }
      var renderTwoViews = durationInMonths(date2, max) < border;
      return renderTwoViews ? addMonths(date2, -1) : date2;
    };
    MonthViewService2.prototype.isWeekend = function(date2) {
      var day = date2.getDay();
      return day === SATURDAY || day === SUNDAY;
    };
    MonthViewService2.prototype.abbrMonthNames = function() {
      return this.intl.dateFormatNames({ nameType: "abbreviated", type: "months" });
    };
    MonthViewService2.prototype.normalize = function(cellDate, min, max) {
      if (cellDate < min && this.isEqual(cellDate, min)) {
        return getDate(min);
      }
      if (cellDate > max && this.isEqual(cellDate, max)) {
        return getDate(max);
      }
      return cellDate;
    };
    MonthViewService2.prototype.wideMonthNames = function() {
      return this.intl.dateFormatNames({ nameType: "wide", type: "months", standAlone: true });
    };
    return MonthViewService2;
  }()
);

// node_modules/@progress/kendo-react-dateinputs/dist/es/calendar/services/YearViewService.js
var _a9;
var EMPTY_DATA4 = [[]];
var CELLS_LENGTH4 = 4;
var ROWS_LENGTH4 = 3;
var upStep = function(month) {
  if (month > 4) {
    return -5;
  }
  if (month < 2) {
    return -2;
  }
  return -7;
};
var downStep = function(month) {
  if (month < 7) {
    return 5;
  }
  if (month < 10) {
    return 7;
  }
  return 2;
};
var ACTIONS4 = (_a9 = {}, _a9[Action.Left] = function(date2) {
  return addMonths(date2, -1);
}, _a9[Action.Up] = function(date2) {
  return addMonths(date2, upStep(date2.getMonth()));
}, _a9[Action.Right] = function(date2) {
  return addMonths(date2, 1);
}, _a9[Action.Down] = function(date2) {
  return addMonths(date2, downStep(date2.getMonth()));
}, _a9[Action.PrevView] = function(date2) {
  return addYears(date2, -1);
}, _a9[Action.NextView] = function(date2) {
  return addYears(date2, 1);
}, _a9[Action.FirstInView] = function(date2) {
  return firstMonthOfYear(date2);
}, _a9[Action.LastInView] = function(date2) {
  return lastMonthOfYear(date2);
}, _a9);
var YearViewService = (
  /** @class */
  function() {
    function YearViewService2(intl) {
      this._intl = intl;
    }
    YearViewService2.prototype.addToDate = function(min, skip) {
      return addYears(min, skip);
    };
    YearViewService2.prototype.datesList = function(start2, count) {
      return range(0, count).map(function(i) {
        return addYears(start2, i);
      });
    };
    YearViewService2.prototype.data = function(options) {
      var _this = this;
      var cellUID = options.cellUID, focusedDate = options.focusedDate, isActiveView = options.isActiveView, max = options.max, min = options.min, selectedDate = options.selectedDate, _a14 = options.selectionRange, selectionRange = _a14 === void 0 ? EMPTY_SELECTIONRANGE : _a14, viewDate = options.viewDate;
      if (!viewDate) {
        return EMPTY_DATA4;
      }
      var months = this.abbrMonthNames();
      var firstDate = firstMonthOfYear(viewDate);
      var lastDate = lastMonthOfYear(viewDate);
      var currentYear = firstDate.getFullYear();
      var cells = range(0, CELLS_LENGTH4);
      var today2 = getToday();
      return range(0, ROWS_LENGTH4).map(function(rowOffset) {
        var baseDate = addMonths(firstDate, rowOffset * CELLS_LENGTH4);
        return cells.map(function(cellOffset) {
          var cellDate = _this.normalize(addMonths(baseDate, cellOffset), min, max);
          var changedYear = currentYear < cellDate.getFullYear();
          if (changedYear) {
            return null;
          }
          var isRangeStart = _this.isEqual(cellDate, selectionRange.start);
          var isRangeEnd = _this.isEqual(cellDate, selectionRange.end);
          var isInMiddle = !isRangeStart && !isRangeEnd;
          var isRangeMid = isInMiddle && isInSelectionRange(cellDate, selectionRange);
          var isSelected = isActiveView && (!Array.isArray(selectedDate) ? isInRange(selectedDate, min, max) && _this.isEqual(cellDate, selectedDate) : _this.isSelectedFromArray(cellDate, selectedDate, min, max));
          return {
            formattedValue: months[cellDate.getMonth()],
            id: "".concat(cellUID).concat(cellDate.getTime()),
            isFocused: _this.isEqual(cellDate, focusedDate),
            isSelected,
            isInRange: isInRange(cellDate, min, max),
            isWeekend: false,
            isRangeStart,
            isRangeMid,
            isRangeEnd,
            isRangeSplitEnd: isRangeMid && _this.isEqual(cellDate, lastDate),
            isRangeSplitStart: isRangeMid && _this.isEqual(cellDate, firstDate),
            isToday: _this.isEqual(cellDate, today2),
            title: _this.cellTitle(cellDate),
            value: cellDate
          };
        });
      });
    };
    YearViewService2.prototype.isSelectedFromArray = function(candidate, dates, min, max) {
      var _this = this;
      var result = false;
      dates.forEach(function(date2) {
        if (isInRange(candidate, min, max) && _this.isEqual(candidate, date2)) {
          result = true;
        }
      });
      return result;
    };
    YearViewService2.prototype.isEqual = function(candidate, expected) {
      if (!candidate || !expected) {
        return false;
      }
      return candidate.getFullYear() === expected.getFullYear() && candidate.getMonth() === expected.getMonth();
    };
    YearViewService2.prototype.isInArray = function(date2, dates) {
      if (!dates.length) {
        return false;
      }
      var year = date2.getFullYear();
      return dates[0].getFullYear() <= year && year <= dates[dates.length - 1].getFullYear();
    };
    YearViewService2.prototype.isInRange = function(candidate, min, max) {
      var candidateValue = createDate(candidate.getFullYear(), candidate.getMonth(), 1);
      var aboveMin = !min || createDate(min.getFullYear(), min.getMonth(), 1) <= candidateValue;
      var belowMax = !max || candidateValue <= createDate(max.getFullYear(), max.getMonth(), 1);
      return aboveMin && belowMax;
    };
    YearViewService2.prototype.isInSameView = function(candidate, value) {
      return durationInYears(candidate, value) === 0;
    };
    YearViewService2.prototype.isRangeStart = function(value) {
      return value.getFullYear() % 10 === 0;
    };
    YearViewService2.prototype.move = function(value, action) {
      var modifier = ACTIONS4[action];
      if (!modifier) {
        return value;
      }
      return modifier(value);
    };
    YearViewService2.prototype.cellTitle = function(value) {
      return "".concat(value.getFullYear(), " ").concat(this.value(value));
    };
    YearViewService2.prototype.navigationTitle = function(value) {
      return this.title(value);
    };
    YearViewService2.prototype.title = function(current) {
      return current ? current.getFullYear().toString() : "";
    };
    YearViewService2.prototype.rowLength = function(_) {
      return CELLS_LENGTH4;
    };
    YearViewService2.prototype.skip = function(value, min) {
      return durationInYears(min, value);
    };
    YearViewService2.prototype.total = function(min, max) {
      return durationInYears(min, max) + 1;
    };
    YearViewService2.prototype.value = function(current) {
      return current ? this.abbrMonthNames()[current.getMonth()] : "";
    };
    YearViewService2.prototype.viewDate = function(date2, max, border) {
      if (border === void 0) {
        border = 1;
      }
      var renderTwoViews = durationInYears(date2, max) < border;
      return renderTwoViews ? addYears(date2, -1) : date2;
    };
    YearViewService2.prototype.abbrMonthNames = function() {
      return this._intl.dateFormatNames({ nameType: "abbreviated", type: "months" });
    };
    YearViewService2.prototype.normalize = function(cellDate, min, max) {
      if (cellDate < min && this.isEqual(cellDate, min)) {
        return cloneDate(min);
      }
      if (cellDate > max && this.isEqual(cellDate, max)) {
        return cloneDate(max);
      }
      return cellDate;
    };
    return YearViewService2;
  }()
);

// node_modules/@progress/kendo-react-dateinputs/dist/es/calendar/services/BusViewService.js
var _a10;
var services = (_a10 = {}, _a10[CalendarViewEnum.month] = MonthViewService, _a10[CalendarViewEnum.year] = YearViewService, _a10[CalendarViewEnum.decade] = DecadeViewService, _a10[CalendarViewEnum.century] = CenturyViewService, _a10);
var viewOffset = function(view, offset) {
  var candidate = CalendarViewEnum[CalendarViewEnum[view + offset]];
  return candidate !== void 0 ? candidate : view;
};
var BusViewService = (
  /** @class */
  function() {
    function BusViewService2(onViewChanged) {
      this.bottom = CalendarViewEnum.month;
      this.top = CalendarViewEnum.century;
      this.onViewChanged = onViewChanged;
    }
    BusViewService2.prototype.configure = function(bottom, top) {
      this.bottom = bottom;
      this.top = top;
    };
    BusViewService2.prototype.service = function(view, intl) {
      return new services["".concat(view)](intl);
    };
    BusViewService2.prototype.moveDown = function(view, event) {
      this.move(view, -1, event);
    };
    BusViewService2.prototype.moveUp = function(view, event) {
      this.move(view, 1, event);
    };
    BusViewService2.prototype.moveToBottom = function(activeView) {
      if (activeView === this.bottom) {
        return;
      }
      this.onViewChanged({ view: this.bottom });
    };
    BusViewService2.prototype.canMoveDown = function(view) {
      return this.bottom < view;
    };
    BusViewService2.prototype.canMoveUp = function(view) {
      return view < this.top;
    };
    BusViewService2.prototype.clamp = function(view) {
      if (view < this.bottom) {
        return this.bottom;
      }
      if (view > this.top) {
        return this.top;
      }
      return view;
    };
    BusViewService2.prototype.move = function(view, offset, event) {
      var candidate = this.clamp(viewOffset(view, offset));
      if (candidate === view) {
        return;
      }
      this.onViewChanged({ view: candidate }, event);
    };
    return BusViewService2;
  }()
);

// node_modules/@progress/kendo-react-dateinputs/dist/es/calendar/services/DOMService.js
var DOMService = (
  /** @class */
  function() {
    function DOMService2() {
      this.calendarHeight = 0;
      this.headerHeight = 0;
      this.monthViewHeight = 0;
      this.yearViewHeight = 0;
      this.decadeViewHeight = 0;
      this.centuryViewHeight = 0;
      this.navigationItemHeight = 0;
      this.scrollableContentHeight = 0;
      this.scrollableYearContentHeight = 0;
      this.calendarWidth = 0;
      this.monthViewWidth = 0;
      this.yearViewWidth = 0;
      this.decadeViewWidth = 0;
      this.centuryViewWidth = 0;
      this.scrollableContentWidth = 0;
      this.didCalculate = false;
      this.hostContainer = null;
    }
    DOMService2.prototype.ensureHeights = function() {
      if (this.calendarHeight !== void 0) {
        return;
      }
      this.calculateHeights();
    };
    DOMService2.prototype.calculateHeights = function(container) {
      var _this = this;
      if (!canUseDOM) {
        return;
      }
      var div = domContainerFactory("div");
      var ul = domContainerFactory("ul");
      var li = domContainerFactory("li");
      var td = domContainerFactory("td");
      var th = domContainerFactory("th");
      var tr = domContainerFactory("tr");
      var tbody = domContainerFactory("tbody");
      var thead = domContainerFactory("thead");
      var table = domContainerFactory("table");
      var monthHeader = function() {
        return div('\n            <span class="k-button k-button-md k-button-rectangle k-button-solid k-button-solid-base k-button-flat k-calendar-title">\n                <span className="k-button-text">March 2017</span>\n            </span>\n            <span class="k-spacer"></span>\n            <span class="k-calendar-nav k-hstack"><button class="k-calendar-nav-today">TODAY</button></span>\n        ', "k-calendar-header k-hstack");
      };
      var monthWeekHeader = function() {
        return table([
          thead([
            tr([th("MO", "k-calendar-th")], "k-calendar-tr")
          ], "k-calendar-thead")
        ], "k-calendar-table k-calendar-weekdays");
      };
      var repeat = function(count, mapper) {
        return new Array(count).fill("1").map(mapper);
      };
      var content = function(rows, cells) {
        if (cells === void 0) {
          cells = 1;
        }
        return table([
          tbody([tr([td("1", "k-calendar-td k-alt")])].concat(repeat(rows, function() {
            return tr(repeat(cells, function(c) {
              return td('<span class="k-link">'.concat(c, "</span>"), "k-calendar-td");
            }), "k-calendar-tr");
          })), "k-calendar-tbody")
        ], "k-calendar-table");
      };
      var scrollable = function(children) {
        return div(children, "k-content k-scrollable");
      };
      var view = function(contentElement, className, renderWeekHeader) {
        return div(renderWeekHeader ? [
          monthHeader(),
          monthWeekHeader(),
          scrollable([contentElement, contentElement])
        ] : [
          monthHeader(),
          scrollable([contentElement, contentElement])
        ], className, { left: "-10000px", position: "absolute" });
      };
      var navigationList = function() {
        var navElement;
        return function() {
          if (!canUseDOM) {
            return null;
          }
          if (!navElement) {
            navElement = div([scrollable([ul([li("<span>FEB</span>")])])], "k-calendar-navigation", { left: "0px", position: "absolute" });
          }
          return navElement;
        };
      }();
      var viewFactory = function(_a14, className, renderWeekHeader) {
        var cells = _a14.cells, rows = _a14.rows;
        var viewElement;
        return function() {
          if (!canUseDOM) {
            return null;
          }
          if (!viewElement) {
            viewElement = view(content(rows, cells), className, renderWeekHeader);
          }
          return viewElement;
        };
      };
      var getScrollable = function(element2) {
        return element2.querySelector(".k-scrollable");
      };
      var horizontal = function(element2) {
        var scrollableElement = getScrollable(element2);
        scrollableElement.className = "".concat(scrollableElement.className, " k-scrollable-horizontal");
        return element2;
      };
      var monthView = viewFactory({ cells: 7, rows: 6 }, "k-calendar-view k-calendar-monthview k-vstack", true);
      var yearView = viewFactory({ cells: 5, rows: 3 }, "k-calendar-view k-calendar-yearview", false);
      var decadeView = viewFactory({ cells: 5, rows: 2 }, "k-calendar-view k-calendar-decadeview", false);
      var horzMonthView = function() {
        return horizontal(monthView());
      };
      var horzYearView = function() {
        return horizontal(yearView());
      };
      var horzDecadeView = function() {
        return horizontal(decadeView());
      };
      var height = function(element2) {
        return parseFloat(window.getComputedStyle(element2).height) || element2.offsetHeight;
      };
      var width = function(element2) {
        var styles = window.getComputedStyle(element2);
        var computed = parseFloat(styles.width) + parseFloat(styles.paddingLeft) + parseFloat(styles.paddingRight);
        return computed || element2.offsetWidth;
      };
      var getBody = function(element2) {
        return element2.querySelector("tbody");
      };
      this.didCalculate = true;
      if (container) {
        this.hostContainer = container;
      }
      this.batch(monthView(), function(contentElement) {
        var viewElement = getBody(contentElement);
        _this.calendarHeight = height(contentElement);
        _this.monthViewHeight = height(viewElement);
        _this.headerHeight = height(viewElement.children[0]);
        _this.scrollableContentHeight = height(getScrollable(contentElement));
      });
      this.batch(horzMonthView(), function(contentElement) {
        var viewElement = getBody(contentElement);
        _this.calendarWidth = width(contentElement);
        _this.monthViewWidth = width(viewElement);
        _this.scrollableContentWidth = width(getScrollable(contentElement));
      });
      this.batch(yearView(), function(contentElement) {
        _this.yearViewHeight = height(getBody(contentElement));
        _this.scrollableYearContentHeight = height(getScrollable(contentElement));
      });
      this.batch(horzYearView(), function(contentElement) {
        _this.yearViewWidth = width(getBody(contentElement));
      });
      this.batch(decadeView(), function(contentElement) {
        _this.decadeViewHeight = height(getBody(contentElement));
        _this.centuryViewHeight = _this.decadeViewHeight;
      });
      this.batch(horzDecadeView(), function(contentElement) {
        _this.decadeViewWidth = width(getBody(contentElement));
        _this.centuryViewWidth = _this.decadeViewWidth;
      });
      this.batch(navigationList(), function(contentElement) {
        _this.navigationItemHeight = height(contentElement.querySelector("li"));
      });
    };
    DOMService2.prototype.viewHeight = function(viewType) {
      return this.viewDimension(viewType, "height");
    };
    DOMService2.prototype.viewWidth = function(viewType) {
      return this.viewDimension(viewType, "width");
    };
    DOMService2.prototype.viewDimension = function(viewType, dimension) {
      var viewProp = dimension === "height" ? "ViewHeight" : "ViewWidth";
      switch (viewType) {
        case CalendarViewEnum.month:
          return this["month".concat(viewProp)];
        case CalendarViewEnum.year:
          return this["year".concat(viewProp)];
        case CalendarViewEnum.decade:
          return this["decade".concat(viewProp)];
        case CalendarViewEnum.century:
          return this["century".concat(viewProp)];
        default:
          return 1;
      }
    };
    DOMService2.prototype.batch = function(contentElement, action) {
      var hostContainer = this.hostContainer || document.body;
      var appendedContent = hostContainer.appendChild(contentElement);
      action(appendedContent);
      hostContainer.removeChild(appendedContent);
    };
    return DOMService2;
  }()
);

// node_modules/@progress/kendo-react-dateinputs/dist/es/calendar/services/NavigationService.js
var KEY_TO_ACTION = {
  "33": Action.PrevView,
  "34": Action.NextView,
  "35": Action.LastInView,
  "36": Action.FirstInView,
  "37": Action.Left,
  "38": Action.Up,
  "39": Action.Right,
  "40": Action.Down,
  "meta+38": Action.UpperView,
  "meta+40": Action.LowerView
};
var NavigationService = (
  /** @class */
  function() {
    function NavigationService2(bus) {
      this.bus = bus;
    }
    NavigationService2.prototype.action = function(event) {
      var action = "".concat(event.ctrlKey || event.metaKey ? "meta+" : "").concat(event.keyCode);
      return KEY_TO_ACTION[action];
    };
    NavigationService2.prototype.move = function(value, action, activeView, service, event) {
      if (!service) {
        return value;
      }
      if (action === Action.UpperView && this.bus.canMoveUp(activeView)) {
        this.bus.moveUp(activeView, event);
        return value;
      }
      if (action === Action.LowerView && this.bus.canMoveDown(activeView)) {
        this.bus.moveDown(activeView, event);
        return value;
      }
      return service.move(value, action);
    };
    return NavigationService2;
  }()
);

// node_modules/@progress/kendo-react-dateinputs/dist/es/calendar/services/ScrollSyncService.js
var divideByMagnitude = function(magnitude) {
  return function(x) {
    return Math.floor(x / magnitude);
  };
};
var powerByMagnitude = function(magnitude) {
  return function(x) {
    return x * magnitude;
  };
};
var ScrollSyncService = (
  /** @class */
  function() {
    function ScrollSyncService2(dom) {
      this.dom = dom;
      this.divideByMagnitude = null;
      this.powerByMagnitude = null;
      this.navigator = null;
      this.view = null;
      this.monthScrolled = false;
      this.navScrolled = false;
    }
    ScrollSyncService2.prototype.configure = function(activeView) {
      var magnitude = Math.max(this.dom.viewHeight(activeView) / this.dom.navigationItemHeight, 1);
      this.divideByMagnitude = divideByMagnitude(magnitude);
      this.powerByMagnitude = powerByMagnitude(magnitude);
    };
    ScrollSyncService2.prototype.sync = function(navigator, view, e) {
      if (!navigator || !view) {
        return;
      }
      this.navigator = navigator;
      this.view = view;
      if (e.target === this.navigator.element) {
        if (this.monthScrolled) {
          this.monthScrolled = false;
          return;
        }
        this.navScrolled = true;
        this.scrollSiblingOf(this.navigator.element);
      }
      if (e.target === this.view.element) {
        if (this.navScrolled) {
          this.navScrolled = false;
          return;
        }
        this.monthScrolled = true;
        this.scrollSiblingOf(this.view.element);
      }
    };
    ScrollSyncService2.prototype.scrollSiblingOf = function(scrolledElement) {
      var component = this.siblingComponent(scrolledElement);
      var scrollTop = this.calculateScroll(component, scrolledElement.scrollTop);
      component.scrollTo(scrollTop);
    };
    ScrollSyncService2.prototype.siblingComponent = function(scrollableElement) {
      return this.navigator.element === scrollableElement ? this.view : this.navigator;
    };
    ScrollSyncService2.prototype.calculateScroll = function(component, scrollTop) {
      var modifier = component === this.navigator ? this.divideByMagnitude : this.powerByMagnitude;
      return modifier ? modifier(scrollTop) : 0;
    };
    return ScrollSyncService2;
  }()
);

// node_modules/@progress/kendo-react-dateinputs/dist/es/calendar/services/WeekNamesService.js
var WeekNamesService = (
  /** @class */
  function() {
    function WeekNamesService2(intl) {
      this.intl = intl;
    }
    WeekNamesService2.prototype.getWeekNames = function(includeWeekNumber) {
      if (includeWeekNumber === void 0) {
        includeWeekNumber = false;
      }
      var weekNames = shiftWeekNames(this.intl.dateFormatNames({ nameType: "short", type: "days" }), this.intl.firstDay());
      return includeWeekNumber ? [""].concat(weekNames) : weekNames;
    };
    return WeekNamesService2;
  }()
);

// node_modules/@progress/kendo-react-dateinputs/dist/es/calendar/components/View.js
var __extends18 = function() {
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
var __assign19 = function() {
  __assign19 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign19.apply(this, arguments);
};
var emptyCell = function(idx) {
  return React43.createElement("td", { key: idx, className: "k-calendar-td" }, "\xA0");
};
var View = (
  /** @class */
  function(_super) {
    __extends18(View2, _super);
    function View2() {
      var _this = _super !== null && _super.apply(this, arguments) || this;
      _this.intl = null;
      _this.weekService = null;
      _this.buildWeekNumber = function(row, idx) {
        var firstDayOfWeek = _this.firstDate(row);
        if (!firstDayOfWeek) {
          return emptyCell("week-cell-".concat(idx));
        }
        var firstDate = _this.firstDate(row);
        var weekCellValue = _this.getWeekNumber(firstDate);
        var uniqueID = "kendo-react-calendar-week-cell-".concat(weekCellValue);
        var cellProps = {
          className: "k-alt",
          value: weekCellValue,
          firstDate
        };
        return _this.props.weekCell ? React43.createElement(_this.props.weekCell, __assign19({}, cellProps, { key: uniqueID }), weekCellValue) : React43.createElement(CalendarWeekCell, __assign19({}, cellProps, { key: uniqueID }), weekCellValue);
      };
      _this.buildRow = function(row) {
        return row.map(function(cell, idx) {
          if (!cell) {
            return emptyCell(idx);
          }
          var aria = { "aria-selected": cell.isSelected };
          var uniqueID = "kendo-react-calendar-cell-".concat(cell.value.getTime());
          var cellProps = __assign19(__assign19(__assign19({}, aria), cell), { isDisabled: !cell.isInRange, view: _this.props.activeView, onClick: _this.handleClick, onMouseEnter: _this.handleMouseEnter, onMouseLeave: _this.handleMouseLeave });
          return _this.props.cell ? React43.createElement(_this.props.cell, __assign19({}, cellProps, { key: uniqueID }), cell.formattedValue) : React43.createElement(CalendarCell, __assign19({}, cellProps, { key: uniqueID }), cell.formattedValue);
        });
      };
      _this.firstDate = function(row) {
        var cell = _this.firstWeekDateContext(row);
        return cell ? cell.value : null;
      };
      _this.firstWeekDateContext = function(rowCtx) {
        if (!_this.weekNumber) {
          return null;
        }
        var idx = 0;
        var ctx = rowCtx[idx];
        while (!ctx && idx < rowCtx.length) {
          ctx = rowCtx[++idx];
        }
        return ctx;
      };
      _this.handleClick = function(value, event) {
        var onChange = _this.props.onChange;
        if (onChange && event) {
          var args = {
            value: cloneDate(value),
            target: _this,
            nativeEvent: event && event.nativeEvent,
            syntheticEvent: event
          };
          onChange.call(void 0, args);
        }
      };
      _this.handleMouseEnter = function(value) {
        var onCellEnter = _this.props.onCellEnter;
        if (onCellEnter) {
          onCellEnter.call(void 0, cloneDate(value));
        }
      };
      _this.handleMouseLeave = function(value) {
        var onCellLeave = _this.props.onCellLeave;
        if (onCellLeave) {
          onCellLeave.call(void 0, cloneDate(value));
        }
      };
      return _this;
    }
    Object.defineProperty(View2.prototype, "min", {
      get: function() {
        return this.props.min;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(View2.prototype, "max", {
      get: function() {
        return this.props.max;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(View2.prototype, "isHorizontal", {
      get: function() {
        return this.props.direction === "horizontal";
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(View2.prototype, "isMonthView", {
      get: function() {
        return this.props.activeView === CalendarViewEnum.month;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(View2.prototype, "weekNumber", {
      get: function() {
        return Boolean(this.props.showWeekNumbers && this.props.activeView === CalendarViewEnum.month);
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(View2.prototype, "selectedDate", {
      get: function() {
        return this.props.selectedDate !== void 0 ? this.props.selectedDate : View2.defaultProps.selectedDate;
      },
      enumerable: false,
      configurable: true
    });
    View2.prototype.render = function() {
      var _this = this;
      this.intl = provideIntlService(this);
      this.weekService = new WeekNamesService(this.intl);
      var weekNames = this.weekService.getWeekNames(this.weekNumber);
      var colSpan = this.props.service.rowLength(this.weekNumber);
      var title = this.props.service.title(this.props.viewDate);
      var time2 = getToday();
      var viewDate = setTime(this.props.viewDate, time2);
      var data = this.props.service.data({
        cellUID: this.props.cellUID,
        min: this.min,
        max: this.max,
        focusedDate: this.props.focusedDate,
        isActiveView: !this.props.bus.canMoveDown(this.props.activeView),
        selectedDate: this.selectedDate,
        selectionRange: this.props.selectionRange,
        viewDate
      });
      return React43.createElement(
        React43.Fragment,
        null,
        this.isMonthView && this.isHorizontal && React43.createElement(
          "thead",
          { role: "rowgroup", className: "k-calendar-thead" },
          React43.createElement("tr", { role: "row", className: "k-calendar-tr" }, weekNames.map(function(name, idx) {
            return React43.createElement("th", { key: idx, className: "k-calendar-th" }, name);
          }))
        ),
        React43.createElement(
          "tbody",
          { role: "rowgroup", className: "k-calendar-tbody" },
          !this.isHorizontal && React43.createElement(
            "tr",
            { role: "presentation", className: "k-calendar-tr" },
            React43.createElement("th", { scope: "col", colSpan, className: "k-calendar-caption" }, title)
          ),
          data.map(function(row, idx) {
            return React43.createElement(
              "tr",
              { role: "row", className: "k-calendar-tr", key: idx },
              _this.weekNumber && _this.buildWeekNumber(row, idx),
              _this.buildRow(row)
            );
          })
        )
      );
    };
    View2.prototype.getWeekNumber = function(date2) {
      if (!this.weekNumber || !this.intl) {
        return null;
      }
      return weekInYear(date2, this.intl.firstDay());
    };
    View2.propTypes = {
      activeRangeEnd: PropTypes18.oneOf(["start", "end", null]),
      activeView: PropTypes18.number.isRequired,
      cellUID: PropTypes18.string.isRequired,
      direction: PropTypes18.oneOf(["horizontal", "vertical"]),
      focusedDate: PropTypes18.instanceOf(Date).isRequired,
      max: PropTypes18.instanceOf(Date).isRequired,
      min: PropTypes18.instanceOf(Date).isRequired,
      onChange: PropTypes18.func,
      selectedDate: PropTypes18.oneOfType([PropTypes18.instanceOf(Date), PropTypes18.arrayOf(PropTypes18.instanceOf(Date))]),
      showWeekNumbers: PropTypes18.bool,
      viewDate: PropTypes18.instanceOf(Date).isRequired
    };
    View2.defaultProps = {
      direction: "vertical",
      selectedDate: getToday(),
      showWeekNumbers: false
    };
    return View2;
  }(React43.Component)
);
registerForIntl(View);

// node_modules/@progress/kendo-react-dateinputs/dist/es/calendar/components/Header.js
var React45 = __toESM(require_react());
var PropTypes19 = __toESM(require_prop_types());

// node_modules/@progress/kendo-react-dateinputs/dist/es/calendar/components/CalendarHeaderTitle.js
var React44 = __toESM(require_react());
var __extends19 = function() {
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
var __assign20 = function() {
  __assign20 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign20.apply(this, arguments);
};
var __rest8 = function(s, e) {
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
var CalendarHeaderTitle = (
  /** @class */
  function(_super) {
    __extends19(CalendarHeaderTitle2, _super);
    function CalendarHeaderTitle2() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    CalendarHeaderTitle2.prototype.render = function() {
      var _a14 = this.props, view = _a14.view, props = __rest8(_a14, ["view"]);
      return React44.createElement(Button, __assign20({ type: "button", fillMode: "flat" }, props), this.props.children);
    };
    return CalendarHeaderTitle2;
  }(React44.PureComponent)
);

// node_modules/@progress/kendo-react-dateinputs/dist/es/calendar/components/Header.js
var __extends20 = function() {
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
var __assign21 = function() {
  __assign21 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign21.apply(this, arguments);
};
var Header = (
  /** @class */
  function(_super) {
    __extends20(Header3, _super);
    function Header3() {
      var _this = _super !== null && _super.apply(this, arguments) || this;
      _this.getTitle = function() {
        if (!_this.props.currentDate) {
          return "";
        }
        var take = _this.rangeLength - 1;
        var title = _this.props.service.title(_this.props.currentDate);
        var nextDate = _this.props.service.addToDate(_this.props.currentDate, take);
        if (take < 1 || !_this.props.service.isInRange(nextDate, _this.min, _this.max)) {
          return title;
        }
        return "".concat(title, " - ").concat(_this.props.service.title(nextDate));
      };
      _this.handleTitleClick = function(event) {
        if (!_this.canMoveUp) {
          return;
        }
        _this.props.bus.moveUp(_this.props.activeView, event);
      };
      return _this;
    }
    Object.defineProperty(Header3.prototype, "min", {
      get: function() {
        return this.props.min !== void 0 ? this.props.min : Header3.defaultProps.min;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(Header3.prototype, "max", {
      get: function() {
        return this.props.max !== void 0 ? this.props.max : Header3.defaultProps.max;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(Header3.prototype, "rangeLength", {
      get: function() {
        return this.props.rangeLength !== void 0 ? this.props.rangeLength : Header3.defaultProps.rangeLength;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(Header3.prototype, "canMoveUp", {
      get: function() {
        return this.props.bus.canMoveUp(this.props.activeView);
      },
      enumerable: false,
      configurable: true
    });
    Header3.prototype.render = function() {
      var title = this.getTitle();
      var titleClassNames = classNames("k-calendar-title");
      var headerTitleProps = {
        children: title,
        value: title,
        view: this.props.activeView,
        className: titleClassNames,
        onClick: this.handleTitleClick,
        disabled: !this.canMoveUp
      };
      var headerTitle = this.props.headerTitle ? React45.createElement(this.props.headerTitle, __assign21({}, headerTitleProps), title) : React45.createElement(CalendarHeaderTitle, __assign21({}, headerTitleProps), title);
      return React45.createElement(
        "div",
        { className: classNames("k-calendar-header", {
          "k-vstack": this.props.verticalView,
          "k-hstack": !this.props.verticalView
        }) },
        headerTitle,
        React45.createElement("span", { className: "k-spacer" }),
        React45.createElement("span", { className: "k-calendar-nav k-hstack" }, this.props.commands)
      );
    };
    Header3.propTypes = {
      activeView: PropTypes19.number.isRequired,
      currentDate: PropTypes19.instanceOf(Date).isRequired,
      max: PropTypes19.instanceOf(Date).isRequired,
      min: PropTypes19.instanceOf(Date).isRequired,
      rangeLength: PropTypes19.number
    };
    Header3.defaultProps = {
      rangeLength: 1,
      min: MIN_DATE,
      max: MAX_DATE
    };
    return Header3;
  }(React45.Component)
);
registerForLocalization(Header);

// node_modules/@progress/kendo-react-dateinputs/dist/es/calendar/components/TodayCommand.js
var React46 = __toESM(require_react());
var PropTypes20 = __toESM(require_prop_types());

// node_modules/@progress/kendo-react-dateinputs/dist/es/messages/index.js
var _a11;
var prevView = "multiviewcalendar.prevView";
var nextView = "multiviewcalendar.nextView";
var increaseValue2 = "dateinput.increment";
var decreaseValue2 = "dateinput.decrement";
var today = "calendar.today";
var toggleCalendar = "datepicker.toggleCalendar";
var swapStartEnd = "daterangepicker.swapStartEnd";
var start = "daterangepicker.start";
var end = "daterangepicker.end";
var separator = "daterangepicker.separator";
var toggleDateTimeSelector = "datetimepicker.toggleDateTimeSelector";
var now = "timepicker.now";
var selectNow = "timepicker.selectNow";
var timePickerCancel = "timepicker.cancel";
var timePickerSet = "timepicker.set";
var toggleTimeSelector = "timepicker.toggleTimeSelector";
var toggleClock = "timepicker.toggleClock";
var date = "datetimepicker.date";
var time = "datetimepicker.time";
var dateTimePickerCancel = "datetimepicker.cancel";
var dateTimePickerSet = "datetimepicker.set";
var dateRangePickerCancel = "daterangepicker.cancel";
var dateRangePickerSet = "daterangepicker.set";
var messages5 = (_a11 = {}, _a11[today] = "TODAY", _a11[now] = "NOW", _a11[timePickerSet] = "Set", _a11[timePickerCancel] = "Cancel", _a11[date] = "Date", _a11[time] = "Time", _a11[dateTimePickerCancel] = "Cancel", _a11[dateTimePickerSet] = "Set", _a11[dateRangePickerCancel] = "Cancel", _a11[dateRangePickerSet] = "Set", _a11[start] = "Start", _a11[end] = "End", _a11[separator] = " ", _a11[selectNow] = "Select Now", _a11[toggleTimeSelector] = "Toggle TimeSelector", _a11[toggleClock] = "Toggle Clock", _a11[increaseValue2] = "Increase value", _a11[decreaseValue2] = "Decrease value", _a11[toggleCalendar] = "Toggle calendar", _a11[prevView] = "Navigate to previous view", _a11[nextView] = "Navigate to next view", _a11[swapStartEnd] = "Swap start and end values", _a11[toggleDateTimeSelector] = "Toggle date-time selector", _a11);

// node_modules/@progress/kendo-react-dateinputs/dist/es/calendar/components/TodayCommand.js
var __extends21 = function() {
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
var TodayCommand = (
  /** @class */
  function(_super) {
    __extends21(TodayCommand2, _super);
    function TodayCommand2() {
      var _this = _super !== null && _super.apply(this, arguments) || this;
      _this.localization = null;
      _this.handleClick = function(syntheticEvent) {
        if (!_this.todayIsInRange) {
          return;
        }
        if (_this.props.onClick) {
          var event_1 = {
            syntheticEvent,
            nativeEvent: syntheticEvent.nativeEvent,
            value: dateInRange(getToday(), _this.min, _this.max),
            target: _this,
            isTodayClick: true
          };
          _this.props.onClick.call(void 0, event_1);
        }
      };
      return _this;
    }
    Object.defineProperty(TodayCommand2.prototype, "min", {
      get: function() {
        return this.props.min !== void 0 ? this.props.min : TodayCommand2.defaultProps.min;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(TodayCommand2.prototype, "max", {
      get: function() {
        return this.props.max !== void 0 ? this.props.max : TodayCommand2.defaultProps.max;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(TodayCommand2.prototype, "todayIsInRange", {
      get: function() {
        return isInRange(getToday(), getDate(this.min), getDate(this.max));
      },
      enumerable: false,
      configurable: true
    });
    TodayCommand2.prototype.render = function() {
      this.localization = provideLocalizationService(this);
      var todayMessage = this.localization.toLanguageString(today, messages5[today]);
      var todayClassNames = classNames("k-calendar-nav-today", {
        "k-disabled": this.props.disabled
      });
      return React46.createElement(Button, { className: todayClassNames, onClick: this.handleClick, tabIndex: this.props.tabIndex, fillMode: "flat" }, todayMessage);
    };
    TodayCommand2.propTypes = {
      max: PropTypes20.instanceOf(Date).isRequired,
      min: PropTypes20.instanceOf(Date).isRequired,
      onClick: PropTypes20.func,
      disabled: PropTypes20.bool
    };
    TodayCommand2.defaultProps = {
      min: MIN_DATE,
      max: MAX_DATE
    };
    return TodayCommand2;
  }(React46.Component)
);
registerForLocalization(TodayCommand);

// node_modules/@progress/kendo-react-dateinputs/dist/es/calendar/components/ViewList.js
var __extends22 = function() {
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
var VIEWS_COUNT = 5;
var ViewList = (
  /** @class */
  function(_super) {
    __extends22(ViewList2, _super);
    function ViewList2(props) {
      var _this = _super.call(this, props) || this;
      _this.virtualization = null;
      _this.calendarView = null;
      _this.table = null;
      _this.intl = null;
      _this.bottomOffset = 0;
      _this.viewOffset = 0;
      _this.viewHeight = 0;
      _this._element = null;
      _this.isActive = false;
      _this.animateToIndex = true;
      _this.shouldScroll = false;
      _this.focusActiveDate = function() {
        if (!_this._element) {
          return;
        }
        var focusedCell = _this._element.querySelector("td.k-focus");
        var nextActiveCell = _this._element.querySelector(".k-state-pending-focus");
        if (focusedCell && focusedCell[0]) {
          focusedCell[0].classList.remove("k-focus");
        }
        if (nextActiveCell) {
          nextActiveCell.classList.add("k-focus");
        }
        _this.isActive = true;
      };
      _this.blurActiveDate = function() {
        if (!_this._element) {
          return;
        }
        var focusedCell = _this._element.querySelector("td.k-focus");
        if (focusedCell) {
          focusedCell.classList.remove("k-focus");
        }
        _this.isActive = false;
      };
      _this.handleVirtualizationMount = function(virtualization) {
        _this.virtualization = virtualization;
        if (_this.virtualization && _this.table) {
          _this.table.style.transform = "translateY(".concat(_this.viewOffset, "px)");
          var viewDate = dateInRange(_this.props.focusedDate, _this.props.min, _this.props.max);
          var indexToScroll = _this.props.service.skip(viewDate, _this.props.min);
          _this.virtualization.scrollToIndex(indexToScroll);
        }
      };
      _this.buildMonthView = function(cols, weekNames) {
        return React47.createElement(
          "table",
          { key: "calendar-view-list-weekdays", className: "k-calendar-table k-calendar-weekdays", role: "grid", tabIndex: _this.props.tabIndex },
          React47.createElement("colgroup", null, cols.map(function(_, idx) {
            return React47.createElement("col", { key: idx });
          })),
          React47.createElement(
            "thead",
            { className: "k-calendar-thead" },
            React47.createElement("tr", { className: "k-calendar-tr" }, weekNames.map(function(name, idx) {
              return React47.createElement("th", { key: idx, className: "k-calendar-th" }, name);
            }))
          )
        );
      };
      _this.buildDates = function(cols, dates) {
        var cellUID = _this.props.cellUID;
        return React47.createElement(
          "table",
          { className: "k-calendar-table", ref: function(table) {
            return _this.table = table;
          }, role: "grid", tabIndex: _this.props.tabIndex, "aria-activedescendant": cellUID + _this.props.focusedDate.getTime() },
          React47.createElement("colgroup", null, cols.map(function(_, idx) {
            return React47.createElement("col", { key: idx });
          })),
          dates.map(function(date2) {
            return React47.createElement(View, { ref: function(el) {
              if (!_this.calendarView) {
                _this.calendarView = el;
              }
            }, key: date2.getTime(), activeView: _this.props.activeView, viewDate: date2, min: _this.props.min, max: _this.props.max, cellUID, focusedDate: _this.props.focusedDate, cell: _this.props.cell, selectedDate: _this.props.value, showWeekNumbers: _this.weekNumber, onChange: _this.handleDateChange, bus: _this.props.bus, service: _this.props.service, weekCell: _this.props.weekCell });
          })
        );
      };
      _this.calculateHeights = function() {
        if (!_this.props.dom) {
          return;
        }
        var scrollableHeight = _this.props.activeView === CalendarViewEnum.month ? _this.props.dom.scrollableContentHeight : _this.props.dom.scrollableYearContentHeight;
        _this.bottomOffset = scrollableHeight - _this.props.dom.viewHeight(_this.props.activeView);
        _this.viewOffset = -1 * _this.props.dom.headerHeight;
        _this.viewHeight = _this.props.dom.viewHeight(_this.props.activeView) || 1;
      };
      _this.getTake = function(skip, total) {
        return Math.min(total - skip, _this.take);
      };
      _this.handleScrollAction = function(_a14) {
        var index = _a14.index, scrollAction = _a14.scrollAction, pageAction = _a14.pageAction;
        var skip = pageAction ? pageAction.skip : _this.state.skip;
        if (_this.state.index !== index || _this.state.skip !== skip) {
          _this.setState({ index, skip });
        }
        if (_this.table && scrollAction) {
          var translate = "translateY(".concat(scrollAction.offset, "px)");
          _this.table.style.transform = translate;
        }
      };
      _this.handleTodayClick = function(event) {
        _this.shouldScroll = true;
        _this.handleDateChange.call(void 0, event, true);
      };
      _this.handleDateChange = function(event, isTodayClick) {
        if (isTodayClick === void 0) {
          isTodayClick = false;
        }
        var onChange = _this.props.onChange;
        if (onChange) {
          var args = {
            syntheticEvent: event.syntheticEvent,
            nativeEvent: event.nativeEvent,
            value: cloneDate(event.value),
            target: _this,
            isTodayClick
          };
          onChange.call(void 0, args);
        }
      };
      _this.lastView = _this.props.activeView;
      _this.lastFocus = _this.props.focusedDate;
      _this.state = {
        skip: _this.props.service.skip(_this.props.focusedDate, _this.props.min),
        index: _this.props.service.skip(_this.props.focusedDate, _this.props.min)
      };
      return _this;
    }
    Object.defineProperty(ViewList2.prototype, "element", {
      get: function() {
        return this._element;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(ViewList2.prototype, "weekNames", {
      get: function() {
        this.intl = provideIntlService(this);
        var weekNames = shiftWeekNames(this.intl.dateFormatNames({ nameType: "short", type: "days" }), this.intl.firstDay());
        return this.weekNumber ? [""].concat(weekNames) : weekNames;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(ViewList2.prototype, "weekNumber", {
      get: function() {
        return Boolean(this.props.showWeekNumbers && this.props.activeView === CalendarViewEnum.month);
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(ViewList2.prototype, "take", {
      get: function() {
        return this.props.take !== void 0 ? this.props.take : ViewList2.defaultProps.take;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(ViewList2.prototype, "animate", {
      get: function() {
        return Boolean(this.props.smoothScroll && this.animateToIndex);
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(ViewList2.prototype, "todayIsInRange", {
      get: function() {
        return isInRange(getToday(), getDate(this.props.min), getDate(this.props.max));
      },
      enumerable: false,
      configurable: true
    });
    ViewList2.prototype.componentDidUpdate = function(_prevProps, _prevState) {
      this.shouldScroll = false;
      if (this.indexToScroll !== void 0 && this.virtualization) {
        this.virtualization[this.animate ? "animateToIndex" : "scrollToIndex"](this.indexToScroll);
      }
      if (this.isActive) {
        this.focusActiveDate();
      }
      this.lastView = this.props.activeView;
      this.indexToScroll = void 0;
    };
    ViewList2.prototype.render = function() {
      var _this = this;
      this.calculateHeights();
      var didViewChange = this.lastView !== this.props.activeView;
      var focusedDate = dateInRange(this.props.focusedDate, this.props.min, this.props.max);
      var skip = !didViewChange ? this.state.skip : this.props.service.skip(focusedDate, this.props.min);
      var total = this.props.service.total(this.props.min, this.props.max);
      var take = this.getTake(skip, total);
      var viewDate = this.props.service.addToDate(this.props.min, skip);
      var activeDate = this.props.service.addToDate(this.props.min, this.state.index);
      var cols = new Array(this.props.service.rowLength(this.weekNumber)).fill("");
      var didViewChanged = this.props.activeView !== this.lastView;
      this.animateToIndex = !didViewChanged;
      if (didViewChanged || !isEqualDate(this.lastFocus, focusedDate) || this.shouldScroll || (!this.props.shouldScroll || this.props.shouldScroll())) {
        this.indexToScroll = this.props.service.skip(focusedDate, this.props.min);
      }
      this.lastFocus = focusedDate;
      var rootClassNames = classNames("k-calendar-view k-vstack", {
        "k-calendar-monthview": this.props.activeView === CalendarViewEnum.month,
        "k-calendar-yearview": this.props.activeView === CalendarViewEnum.year,
        "k-calendar-decadeview": this.props.activeView === CalendarViewEnum.decade,
        "k-calendar-centuryview": this.props.activeView === CalendarViewEnum.century
      });
      var dates = this.buildDates(cols, this.props.service.datesList(viewDate, take));
      var viewListBody = React47.createElement(
        React47.Fragment,
        null,
        React47.createElement(Header, { key: "calendar-view-list-header", currentDate: activeDate, min: this.props.min, max: this.props.max, activeView: this.props.activeView, bus: this.props.bus, service: this.props.service, headerTitle: this.props.headerTitle, commands: React47.createElement(
          React47.Fragment,
          null,
          React47.createElement(TodayCommand, { min: this.props.min, max: this.props.max, onClick: this.handleTodayClick, disabled: !this.todayIsInRange, tabIndex: this.props.tabIndex })
        ) }),
        this.props.activeView === CalendarViewEnum.month && this.buildMonthView(cols, this.weekNames),
        React47.createElement(Virtualization, { key: "calendar-view-list-content", skip, take: this.take, total, itemHeight: this.viewHeight, topOffset: this.viewOffset, bottomOffset: this.bottomOffset, scrollOffsetSize: this.viewOffset, maxScrollDifference: this.viewHeight, onScroll: this.props.onScroll, onScrollAction: this.handleScrollAction, onMount: this.handleVirtualizationMount, children: dates, tabIndex: this.props.tabIndex })
      );
      return React47.createElement("div", { ref: function(el) {
        _this._element = el;
      }, className: rootClassNames }, this.props.dom.didCalculate ? viewListBody : null);
    };
    ViewList2.propTypes = {
      activeView: PropTypes21.number.isRequired,
      bottomOffset: PropTypes21.number,
      cellUID: PropTypes21.string.isRequired,
      focusedDate: PropTypes21.instanceOf(Date).isRequired,
      max: PropTypes21.instanceOf(Date).isRequired,
      min: PropTypes21.instanceOf(Date).isRequired,
      onChange: PropTypes21.func,
      showWeekNumbers: PropTypes21.bool,
      smoothScroll: PropTypes21.bool,
      take: PropTypes21.number,
      value: PropTypes21.instanceOf(Date),
      viewHeight: PropTypes21.number,
      viewOffset: PropTypes21.number,
      tabIndex: PropTypes21.number
    };
    ViewList2.defaultProps = {
      take: VIEWS_COUNT,
      showWeekNumbers: false,
      smoothScroll: true
    };
    return ViewList2;
  }(React47.Component)
);
registerForIntl(ViewList);

// node_modules/@progress/kendo-react-dateinputs/dist/es/calendar/components/Navigation.js
var React49 = __toESM(require_react());
var PropTypes22 = __toESM(require_prop_types());

// node_modules/@progress/kendo-react-dateinputs/dist/es/calendar/components/CalendarNavigationItem.js
var React48 = __toESM(require_react());
var __extends23 = function() {
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
var __assign22 = function() {
  __assign22 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign22.apply(this, arguments);
};
var __rest9 = function(s, e) {
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
var CalendarNavigationItem = (
  /** @class */
  function(_super) {
    __extends23(CalendarNavigationItem2, _super);
    function CalendarNavigationItem2() {
      var _this = _super !== null && _super.apply(this, arguments) || this;
      _this.handleClick = function(event) {
        var _a14 = _this.props, onClick = _a14.onClick, value = _a14.value;
        if (onClick) {
          onClick.call(void 0, value, event);
        }
      };
      return _this;
    }
    CalendarNavigationItem2.prototype.render = function() {
      var _a14 = this.props, isRangeStart = _a14.isRangeStart, value = _a14.value, text = _a14.text, other = __rest9(_a14, ["isRangeStart", "value", "text"]);
      return React48.createElement(
        "li",
        __assign22({}, other, { onClick: this.handleClick }),
        React48.createElement("span", { className: classNames({ "k-calendar-navigation-marker": isRangeStart }) }, this.props.children)
      );
    };
    return CalendarNavigationItem2;
  }(React48.Component)
);

// node_modules/@progress/kendo-react-dateinputs/dist/es/calendar/components/Navigation.js
var __extends24 = function() {
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
var __assign23 = function() {
  __assign23 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign23.apply(this, arguments);
};
var ITEMS_COUNT = 30;
var Navigation3 = (
  /** @class */
  function(_super) {
    __extends24(Navigation4, _super);
    function Navigation4(props) {
      var _this = _super.call(this, props) || this;
      _this.virtualization = null;
      _this.list = null;
      _this.itemHeight = 0;
      _this.topOffset = 0;
      _this.maxViewHeight = 0;
      _this.bottomOffset = 0;
      _this.handleVirtualizationMount = function(virtualization) {
        _this.virtualization = virtualization;
        if (_this.virtualization && _this.list) {
          _this.list.style.transform = "translateY(".concat(_this.topOffset, "px)");
          var viewDate = dateInRange(_this.props.focusedDate, _this.props.min, _this.props.max);
          var indexToScroll = _this.props.service.skip(viewDate, _this.props.min);
          _this.virtualization.scrollToIndex(indexToScroll);
        }
      };
      _this.buildNavigationItem = function(date2) {
        var text = _this.props.service.navigationTitle(date2);
        var isRangeStart = _this.props.service.isRangeStart(date2);
        var uniqueID = "kendo-react-calendar-nav-item-".concat(date2.getTime());
        var navigationItemProps = {
          text,
          value: date2,
          isRangeStart,
          view: _this.props.activeView,
          onClick: _this.handleDateChange
        };
        return _this.props.navigationItem ? React49.createElement(_this.props.navigationItem, __assign23({}, navigationItemProps, { key: uniqueID }), text) : React49.createElement(CalendarNavigationItem, __assign23({}, navigationItemProps, { key: uniqueID }), text);
      };
      _this.calculateHeights = function() {
        var calendarHeight = _this.props.dom.calendarHeight;
        _this.itemHeight = _this.props.dom.navigationItemHeight || 1;
        _this.maxViewHeight = _this.props.dom.monthViewHeight;
        _this.topOffset = (calendarHeight - _this.itemHeight) / 2;
        _this.bottomOffset = calendarHeight - _this.itemHeight;
      };
      _this.handleDateChange = function(value, event) {
        var onChange = _this.props.onChange;
        if (onChange && event) {
          var args = {
            value: cloneDate(value),
            target: _this,
            nativeEvent: event && event.nativeEvent,
            syntheticEvent: event
          };
          onChange.call(void 0, args);
        }
      };
      _this.handleScrollAction = function(_a14) {
        var scrollAction = _a14.scrollAction, pageAction = _a14.pageAction;
        var skip2 = pageAction ? pageAction.skip : _this.state.skip;
        if (_this.state.skip !== skip2) {
          _this.setState({ skip: skip2 });
        }
        if (_this.list && scrollAction) {
          var translate = "translateY(".concat(scrollAction.offset, "px)");
          _this.list.style.transform = translate;
        }
      };
      _this.lastView = _this.props.activeView;
      _this.lastFocus = _this.props.focusedDate;
      var skip = _this.props.service.skip(_this.props.focusedDate, _this.props.min);
      var total = _this.props.service.total(_this.props.min, _this.props.max);
      _this.state = {
        skip: skip - _this.getTake(skip, total) > 0 ? skip : 0
      };
      return _this;
    }
    Object.defineProperty(Navigation4.prototype, "take", {
      get: function() {
        return this.props.take !== void 0 ? this.props.take : Navigation4.defaultProps.take;
      },
      enumerable: false,
      configurable: true
    });
    Navigation4.prototype.componentDidUpdate = function(_prevProps, _prevState) {
      if (this.indexToScroll !== void 0 && this.virtualization) {
        this.virtualization.scrollToIndex(this.indexToScroll);
      }
      this.lastView = this.props.activeView;
      this.lastFocus = this.props.focusedDate;
      this.indexToScroll = void 0;
    };
    Navigation4.prototype.render = function() {
      var _this = this;
      this.calculateHeights();
      var didViewChange = this.lastView !== this.props.activeView;
      var focusedDate = dateInRange(this.props.focusedDate, this.props.min, this.props.max);
      var skip = !didViewChange ? this.state.skip : this.props.service.skip(focusedDate, this.props.min);
      var total = this.props.service.total(this.props.min, this.props.max);
      var take = this.getTake(skip, total);
      var viewDate = this.props.service.addToDate(this.props.min, skip);
      var dates = this.props.service.datesList(viewDate, take);
      if (this.props.activeView !== this.lastView || !isEqual2(focusedDate, this.lastFocus)) {
        this.indexToScroll = this.props.service.skip(focusedDate, this.props.min);
      }
      var navigationBody = React49.createElement(
        Virtualization,
        { skip, take: this.take, total, itemHeight: this.itemHeight, topOffset: this.topOffset, bottomOffset: this.bottomOffset, onScroll: this.props.onScroll, maxScrollDifference: this.maxViewHeight, onScrollAction: this.handleScrollAction, onMount: this.handleVirtualizationMount, tabIndex: this.props.tabIndex },
        React49.createElement("ul", { ref: function(el) {
          _this.list = el;
        }, className: "k-reset" }, dates.map(function(date2) {
          return _this.buildNavigationItem(date2);
        }))
      );
      return React49.createElement(
        "div",
        { className: "k-calendar-navigation" },
        React49.createElement("span", { className: "k-calendar-navigation-highlight" }),
        this.props.dom.didCalculate ? navigationBody : null
      );
    };
    Navigation4.prototype.getTake = function(skip, total) {
      return Math.min(total - skip, this.take);
    };
    Navigation4.propTypes = {
      activeView: PropTypes22.number.isRequired,
      focusedDate: PropTypes22.instanceOf(Date).isRequired,
      max: PropTypes22.instanceOf(Date).isRequired,
      min: PropTypes22.instanceOf(Date).isRequired,
      onChange: PropTypes22.func,
      take: PropTypes22.number,
      tabIndex: PropTypes22.number
    };
    Navigation4.defaultProps = {
      take: ITEMS_COUNT
    };
    return Navigation4;
  }(React49.Component)
);

// node_modules/@progress/kendo-react-dateinputs/dist/es/calendar/components/Calendar.js
var __extends25 = function() {
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
var virtualizationProp = function(x) {
  return x ? x.virtualization : null;
};
var calculateValue = function(min, max, stateValue, propValue) {
  if (min === void 0) {
    min = CalendarWithoutContext.defaultProps.min;
  }
  if (max === void 0) {
    max = CalendarWithoutContext.defaultProps.max;
  }
  return propValue !== void 0 ? propValue !== null && isInRange(getDate(propValue), min, max) ? propValue : null : stateValue !== null && isInRange(getDate(stateValue), min, max) ? stateValue : null;
};
var CalendarWithoutContext = (
  /** @class */
  function(_super) {
    __extends25(CalendarWithoutContext2, _super);
    function CalendarWithoutContext2(props) {
      var _this = _super.call(this, props) || this;
      _this.scrollSyncService = null;
      _this.focusedDate = null;
      _this.cellUID = guid();
      _this.id = guid();
      _this.Navigation = null;
      _this.calendarViewList = null;
      _this._element = null;
      _this.intl = null;
      _this.service = null;
      _this.isActive = false;
      _this.didNavigationChange = false;
      _this.focus = function() {
        if (_this._element) {
          _this._element.focus();
        }
      };
      _this.shouldScroll = function() {
        return _this.didNavigationChange;
      };
      _this.handleScroll = function(event) {
        if (!_this.scrollSyncService) {
          return;
        }
        _this.scrollSyncService.sync(virtualizationProp(_this.Navigation), virtualizationProp(_this.calendarViewList), event);
      };
      _this.handleNavigationChange = function(event) {
        if (_this.props.disabled) {
          return;
        }
        _this.didNavigationChange = true;
        var focusedDate = cloneDate(event.value);
        _this.setState({ focusedDate });
      };
      _this.handleViewChange = function(_a14) {
        var view = _a14.view;
        if (_this.scrollSyncService) {
          _this.scrollSyncService.configure(view);
        }
        _this.setState({ activeView: view });
      };
      _this.handleDateChange = function(event) {
        var value2 = cloneDate(event.value);
        var focusedDate = cloneDate(event.value);
        var canNavigateDown = _this.bus.canMoveDown(_this.state.activeView);
        if (_this.props.disabled) {
          return;
        }
        if (canNavigateDown) {
          if (event.isTodayClick) {
            _this.bus.moveToBottom(_this.state.activeView);
          } else {
            _this.bus.moveDown(_this.state.activeView, event.syntheticEvent);
            _this.setState({ focusedDate });
            return;
          }
        }
        _this.setState({ value: value2, focusedDate });
        _this.valueDuringOnChange = value2;
        var onChange = _this.props.onChange;
        if (onChange) {
          var args = {
            syntheticEvent: event.syntheticEvent,
            nativeEvent: event.nativeEvent,
            value: value2,
            target: _this
          };
          onChange.call(void 0, args);
        }
        _this.valueDuringOnChange = void 0;
      };
      _this.handleFocus = function(event) {
        _this.isActive = true;
        if (!_this.calendarViewList) {
          return;
        }
        _this.calendarViewList.focusActiveDate();
        var onFocus2 = _this.props.onFocus;
        if (onFocus2) {
          onFocus2.call(void 0, event);
        }
      };
      _this.handleBlur = function(event) {
        _this.isActive = false;
        if (!_this.calendarViewList) {
          return;
        }
        _this.calendarViewList.blurActiveDate();
        var onBlur = _this.props.onBlur;
        if (onBlur) {
          onBlur.call(void 0, event);
        }
      };
      _this.handleKeyDown = function(event) {
        var keyCode = event.keyCode;
        if (!_this.focusedDate || !_this.service) {
          return;
        }
        if (keyCode === Keys.enter) {
          if (_this.value !== null && isEqualDate(_this.focusedDate, _this.value)) {
            var viewDate = dateInRange(_this.focusedDate, _this.min, _this.max);
            virtualizationProp(_this.calendarViewList).scrollToIndex(_this.service.skip(viewDate, _this.min));
          }
          var args = {
            syntheticEvent: event,
            nativeEvent: event.nativeEvent,
            value: _this.focusedDate,
            target: _this
          };
          _this.handleDateChange(args);
        } else {
          var candidate = dateInRange(_this.navigation.move(_this.focusedDate, _this.navigation.action(event), _this.state.activeView, _this.service, event), _this.min, _this.max);
          if (isEqualDate(_this.focusedDate, candidate)) {
            return;
          }
          _this.setState({ focusedDate: candidate });
        }
        event.preventDefault();
      };
      _this.handleMouseDown = function(event) {
        event.preventDefault();
      };
      _this.handleClick = function(_) {
        if (_this._element) {
          _this._element.focus({ preventScroll: true });
        }
      };
      validatePackage(packageMetadata7);
      var value = calculateValue(_this.min, _this.max, _this.props.defaultValue || CalendarWithoutContext2.defaultProps.defaultValue, _this.props.value);
      _this.state = {
        value,
        activeView: viewInRange(CalendarViewEnum[props.defaultActiveView], _this.bottomView, _this.topView),
        focusedDate: dateInRange(props.focusedDate || value || getToday(), _this.min, _this.max)
      };
      _this.dom = new DOMService();
      _this.bus = new BusViewService(_this.handleViewChange);
      _this.navigation = new NavigationService(_this.bus);
      _this.oldValue = value;
      return _this;
    }
    Object.defineProperty(CalendarWithoutContext2.prototype, "element", {
      /**
       * Gets the wrapping element of the Calendar.
       */
      get: function() {
        return this._element;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(CalendarWithoutContext2.prototype, "value", {
      /**
       * Gets the value of the Calendar.
       */
      get: function() {
        return this.valueDuringOnChange !== void 0 ? this.valueDuringOnChange : this.props.value !== void 0 ? this.props.value : this.state.value;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(CalendarWithoutContext2.prototype, "min", {
      get: function() {
        return getDate(this.props.min !== void 0 ? this.props.min : CalendarWithoutContext2.defaultProps.min);
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(CalendarWithoutContext2.prototype, "max", {
      get: function() {
        return getDate(this.props.max !== void 0 ? this.props.max : CalendarWithoutContext2.defaultProps.max);
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(CalendarWithoutContext2.prototype, "bottomView", {
      get: function() {
        return CalendarViewEnum[this.props.bottomView !== void 0 ? this.props.bottomView : CalendarWithoutContext2.defaultProps.bottomView];
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(CalendarWithoutContext2.prototype, "topView", {
      get: function() {
        return CalendarViewEnum[this.props.topView !== void 0 ? this.props.topView : CalendarWithoutContext2.defaultProps.topView];
      },
      enumerable: false,
      configurable: true
    });
    CalendarWithoutContext2.prototype.componentDidMount = function() {
      var _this = this;
      Promise.resolve().then(function() {
        setScrollbarWidth();
        if (!_this._element) {
          return;
        }
        _this.dom.calculateHeights(_this._element);
        _this.scrollSyncService = new ScrollSyncService(_this.dom);
        _this.scrollSyncService.configure(_this.state.activeView);
        _this.forceUpdate();
      });
    };
    CalendarWithoutContext2.prototype.componentDidUpdate = function(_, prevState) {
      setScrollbarWidth();
      if (prevState.activeView !== this.state.activeView && this.scrollSyncService) {
        this.scrollSyncService.configure(this.state.activeView);
      }
      if (this.calendarViewList) {
        (this.isActive ? this.calendarViewList.focusActiveDate : this.calendarViewList.blurActiveDate)();
      }
      this.didNavigationChange = false;
      this.oldValue = this.value;
    };
    CalendarWithoutContext2.prototype.render = function() {
      var _this = this;
      if (this.props._ref) {
        this.props._ref(this);
      }
      var didValueChange = this.value !== null && this.oldValue !== null ? !isEqualDate(this.value, this.oldValue) : this.value !== this.oldValue;
      var activeView = viewInRange(this.state.activeView, CalendarViewEnum[this.props.bottomView !== void 0 ? this.props.bottomView : CalendarWithoutContext2.defaultProps.bottomView], CalendarViewEnum[this.props.topView !== void 0 ? this.props.topView : CalendarWithoutContext2.defaultProps.topView]);
      var value = calculateValue(this.min, this.max, this.value, this.value);
      var sanitizedValue = value ? getDate(value) : null;
      this.focusedDate = getDate(dateInRange(didValueChange && value !== null ? value : this.state.focusedDate, this.min, this.max));
      this.intl = provideIntlService(this);
      this.bus.configure(this.bottomView, this.topView);
      this.service = this.bus.service(activeView, this.intl);
      var _a14 = this.props.smoothScroll, smoothScroll = _a14 === void 0 ? Number.parseFloat(React50.version) < 18 : _a14;
      var rootClassNames = classNames("k-widget k-calendar k-calendar-infinite", {
        "k-disabled": this.props.disabled,
        "k-week-number": this.props.weekNumber,
        "k-calendar-lg": this.props.mobileMode
      }, this.props.className);
      var calendarBody = [this.props.navigation && React50.createElement(Navigation3, { key: 0, ref: function(el) {
        _this.Navigation = el;
      }, activeView: this.state.activeView, focusedDate: this.focusedDate, min: this.min, max: this.max, onScroll: this.handleScroll, onChange: this.handleNavigationChange, service: this.service, dom: this.dom, navigationItem: this.props.navigationItem, tabIndex: this.props.tabIndex }), React50.createElement(ViewList, { key: 1, ref: function(el) {
        _this.calendarViewList = el;
      }, activeView: this.state.activeView, focusedDate: this.focusedDate, min: this.min, max: this.max, bus: this.bus, shouldScroll: this.shouldScroll, onScroll: this.handleScroll, service: this.service, cell: this.props.cell, weekCell: this.props.weekCell, dom: this.dom, smoothScroll, showWeekNumbers: this.props.weekNumber, onChange: this.handleDateChange, value: sanitizedValue, cellUID: this.cellUID, headerTitle: this.props.headerTitle, tabIndex: this.props.tabIndex })];
      return React50.createElement("div", { ref: function(el) {
        _this._element = el;
      }, className: rootClassNames, id: this.props.id || this.id, "aria-labelledby": this.props.ariaLabelledBy, "aria-describedby": this.props.ariaDescribedBy, "aria-disabled": this.props.disabled, tabIndex: !this.props.disabled ? this.props.tabIndex || 0 : void 0, onFocus: this.handleFocus, onBlur: this.handleBlur, onKeyDown: this.handleKeyDown, onMouseDown: this.handleMouseDown, onClick: this.handleClick }, calendarBody);
    };
    CalendarWithoutContext2.displayName = "Calendar";
    CalendarWithoutContext2.propTypes = {
      className: PropTypes23.string,
      defaultActiveView: PropTypes23.oneOf(["month", "year", "decade", "century"]),
      defaultValue: PropTypes23.instanceOf(Date),
      disabled: PropTypes23.bool,
      focusedDate: PropTypes23.instanceOf(Date),
      id: PropTypes23.string,
      ariaLabelledBy: PropTypes23.string,
      ariaDescribedBy: PropTypes23.string,
      max: PropTypes23.instanceOf(Date),
      min: PropTypes23.instanceOf(Date),
      navigation: PropTypes23.bool,
      smoothScroll: PropTypes23.bool,
      onBlur: PropTypes23.func,
      onChange: PropTypes23.func,
      onFocus: PropTypes23.func,
      tabIndex: PropTypes23.number,
      value: PropTypes23.instanceOf(Date),
      weekNumber: PropTypes23.bool,
      topView: function(props, propName, componentName) {
        var prop = props[propName];
        var bottomView = props.bottomView;
        if (prop && bottomView && CalendarViewEnum[prop] < CalendarViewEnum[bottomView]) {
          return new Error("Invalid prop + ".concat(propName, " suplied to ").concat(componentName, ".\n                    ").concat(propName, " can not be smaller than bottomView.\n                    "));
        }
        return null;
      },
      bottomView: function(props, propName, componentName) {
        var prop = props[propName];
        var topView = props.topView;
        if (prop && topView && CalendarViewEnum[prop] > CalendarViewEnum[topView]) {
          return new Error("Invalid prop + ".concat(propName, " suplied to ").concat(componentName, ".\n                    ").concat(propName, " can not be bigger than topView.\n                    "));
        }
        return null;
      }
    };
    CalendarWithoutContext2.defaultProps = {
      disabled: false,
      min: MIN_DATE,
      max: MAX_DATE,
      navigation: true,
      defaultActiveView: "month",
      defaultValue: null,
      topView: "century",
      bottomView: "month"
    };
    return CalendarWithoutContext2;
  }(React50.Component)
);
var CalendarPropsContext = createPropsContext();
var Calendar = withPropsContext(CalendarPropsContext, CalendarWithoutContext);
Calendar.displayName = "KendoReactCalendar";
registerForIntl(CalendarWithoutContext);

// node_modules/@progress/kendo-react-dateinputs/dist/es/dateinput/DateInput.js
var React51 = __toESM(require_react());
var PropTypes24 = __toESM(require_prop_types());

// node_modules/@progress/kendo-react-dateinputs/dist/es/dateinput/models/mask.js
var Mask = (
  /** @class */
  function() {
    function Mask2() {
      this.symbols = "";
      this.partMap = [];
    }
    return Mask2;
  }()
);

// node_modules/@progress/kendo-react-dateinputs/dist/es/dateinput/utils.js
var defaultFormat = "d";
var defaultFormatPlaceholder = "wide";
var approximateStringMatching = function(oldTextOrigin, oldFormat, newTextOrigin, selectionStart) {
  var oldTextSeparator = oldTextOrigin[selectionStart + oldTextOrigin.length - newTextOrigin.length];
  var oldText = oldTextOrigin.substring(0, selectionStart + oldTextOrigin.length - newTextOrigin.length);
  var newText = newTextOrigin.substring(0, selectionStart);
  var diff = [];
  if (oldText === newText && selectionStart > 0) {
    diff.push([oldFormat[selectionStart - 1], newText[selectionStart - 1]]);
    return diff;
  }
  if (oldText.indexOf(newText) === 0 && (newText.length === 0 || oldFormat[newText.length - 1] !== oldFormat[newText.length])) {
    var deletedSymbol = "";
    if (newText.length === 1) {
      diff.push([oldFormat[0], newText[0]]);
    }
    for (var i = newText.length; i < oldText.length; i++) {
      if (oldFormat[i] !== deletedSymbol && oldFormat[i] !== "_") {
        deletedSymbol = oldFormat[i];
        diff.push([deletedSymbol, ""]);
      }
    }
    return diff;
  }
  if (newText.indexOf(oldText) === 0 || oldFormat[selectionStart - 1] === "_") {
    var symbol = oldFormat[0];
    for (var i = Math.max(0, oldText.length - 1); i < oldFormat.length; i++) {
      if (oldFormat[i] !== "_") {
        symbol = oldFormat[i];
        break;
      }
    }
    return [[symbol, newText[selectionStart - 1]]];
  }
  if (newText[newText.length - 1] === " " || newText[newText.length - 1] === oldTextSeparator) {
    return [[oldFormat[selectionStart - 1], "_"]];
  }
  return [[oldFormat[selectionStart - 1], newText[selectionStart - 1]]];
};
var dateSymbolMap = function(map, part) {
  map[part.pattern[0]] = part.type;
  return map;
};
var isInRange2 = function(candidate, min, max) {
  return candidate === null || !(min && min > candidate || max && max < candidate);
};
var wrapperClasses = ["k-widget", "k-dateinput"];

// node_modules/@progress/kendo-react-dateinputs/dist/es/dateinput/models/kendo-date.js
var KendoDate = (
  /** @class */
  function() {
    function KendoDate2(intlProvider, formatPlaceholder, format) {
      this.year = true;
      this.month = true;
      this.date = true;
      this.hours = true;
      this.minutes = true;
      this.seconds = true;
      this.milliseconds = true;
      this.leadingZero = null;
      this.typedMonthPart = "";
      this.knownParts = "adHhmMsEy";
      this.symbols = {
        "E": "E",
        "H": "H",
        "M": "M",
        "a": "a",
        "d": "d",
        "h": "h",
        "m": "m",
        "s": "s",
        "y": "y"
      };
      this._value = getDate(/* @__PURE__ */ new Date());
      this.intlProvider = intlProvider;
      this.formatPlaceholder = formatPlaceholder;
      this.format = format;
      this.monthNames = this.allFormatedMonths();
    }
    Object.defineProperty(KendoDate2.prototype, "intl", {
      get: function() {
        return this.intlProvider();
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(KendoDate2.prototype, "value", {
      get: function() {
        return this._value;
      },
      enumerable: false,
      configurable: true
    });
    KendoDate2.prototype.setValue = function(value) {
      if (!value) {
        this._value = getDate(/* @__PURE__ */ new Date());
        this.modifyExisting(false);
      } else if (!isEqual2(value, this._value)) {
        this._value = cloneDate(value);
        this.modifyExisting(true);
      }
    };
    KendoDate2.prototype.hasValue = function() {
      var _this = this;
      var pred = function(a, p) {
        return a || p.type !== "literal" && p.type !== "dayperiod" && _this.getExisting(p.pattern[0]);
      };
      return this.intl.splitDateFormat(this.format).reduce(pred, false);
    };
    KendoDate2.prototype.getDateObject = function() {
      for (var i = 0; i < this.knownParts.length; i++) {
        if (!this.getExisting(this.knownParts[i])) {
          return null;
        }
      }
      return cloneDate(this.value);
    };
    KendoDate2.prototype.getTextAndFormat = function() {
      return this.merge(this.intl.formatDate(this.value, this.format), this.dateFormatString(this.value, this.format));
    };
    KendoDate2.prototype.modifyExisting = function(value) {
      var sampleFormat = this.dateFormatString(this.value, this.format).symbols;
      for (var i = 0; i < sampleFormat.length; i++) {
        this.setExisting(sampleFormat[i], value);
      }
    };
    KendoDate2.prototype.getExisting = function(symbol) {
      switch (symbol) {
        case "y":
          return this.year;
        case "M":
        case "L":
          return this.month;
        case "d":
          return this.date;
        case "E":
          return this.date && this.month && this.year;
        case "h":
        case "H":
          return this.hours;
        case "m":
          return this.minutes;
        case "s":
          return this.seconds;
        default:
          return true;
      }
    };
    KendoDate2.prototype.setExisting = function(symbol, value) {
      switch (symbol) {
        case "y":
          this.year = value;
          if (value === false) {
            this._value.setFullYear(2e3);
          }
          break;
        case "M":
          this.month = value;
          if (value === false) {
            this._value.setMonth(0);
          }
          break;
        case "d":
          this.date = value;
          break;
        case "h":
        case "H":
          this.hours = value;
          break;
        case "m":
          this.minutes = value;
          break;
        case "s":
          this.seconds = value;
          break;
        default:
          return;
      }
    };
    KendoDate2.prototype.modifyPart = function(symbol, offset) {
      var newValue = cloneDate(this.value);
      switch (symbol) {
        case "y":
          newValue.setFullYear(newValue.getFullYear() + offset);
          break;
        case "M":
          newValue = addMonths(this.value, offset);
          break;
        case "d":
        case "E":
          newValue.setDate(newValue.getDate() + offset);
          break;
        case "h":
        case "H":
          newValue.setHours(newValue.getHours() + offset);
          break;
        case "m":
          newValue.setMinutes(newValue.getMinutes() + offset);
          break;
        case "s":
          newValue.setSeconds(newValue.getSeconds() + offset);
          break;
        case "a":
          newValue.setHours(newValue.getHours() + 12 * offset);
          break;
        default:
          break;
      }
      this.setExisting(symbol, true);
      this._value = newValue;
    };
    KendoDate2.prototype.parsePart = function(symbol, currentChar) {
      var _a14;
      this.resetLeadingZero();
      if (!currentChar) {
        this.setExisting(symbol, false);
        return { value: null };
      }
      var baseDate = this.intl.formatDate(this.value, this.format);
      var dateParts = this.dateFormatString(this.value, this.format);
      var baseFormat = dateParts.symbols;
      var replaced = false;
      var prefix = "";
      var current = "";
      var suffix = "";
      for (var i = 0; i < baseDate.length; i++) {
        if (baseFormat[i] === symbol) {
          current += this.getExisting(symbol) ? baseDate[i] : "0";
          replaced = true;
        } else if (!replaced) {
          prefix += baseDate[i];
        } else {
          suffix += baseDate[i];
        }
      }
      var parsedDate = null;
      var month = this.matchMonth(currentChar);
      while (current.length > 0 && current.charAt(0) === "0") {
        current = current.slice(1);
      }
      if (current.length >= 4) {
        current = "";
      }
      for (var i = 0; i < 2; i++) {
        var middle = current + currentChar;
        var middleNumber = parseInt(middle, 10);
        parsedDate = this.intl.parseDate(prefix + middle + suffix, this.format);
        if (!parsedDate && !isNaN(middleNumber) && !isNaN(parseInt(currentChar, 10))) {
          if (symbol === "M" && !month) {
            var monthNumber = middleNumber - 1;
            if (monthNumber > -1 && monthNumber < 12) {
              parsedDate = cloneDate(this.value);
              parsedDate.setMonth(monthNumber);
              if (parsedDate.getMonth() !== monthNumber) {
                parsedDate = lastDayOfMonth(addMonths(parsedDate, -1));
              }
            }
          }
          if (symbol === "y") {
            parsedDate = createDate(parseInt(middle, 10), this.month ? this.value.getMonth() : 0, this.date ? this.value.getDate() : 1, this.hours ? this.value.getHours() : 0, this.minutes ? this.value.getMinutes() : 0, this.seconds ? this.value.getSeconds() : 0, this.milliseconds ? this.value.getMilliseconds() : 0);
            if (this.date && parsedDate.getDate() !== this.value.getDate()) {
              parsedDate = lastDayOfMonth(addMonths(parsedDate, -1));
            }
          }
        }
        if (parsedDate) {
          this._value = parsedDate;
          this.setExisting(symbol, true);
          return { value: this.value };
        }
        current = "";
      }
      if (month) {
        parsedDate = this.intl.parseDate(prefix + month + suffix, this.format);
        if (parsedDate) {
          this._value = parsedDate;
          this.setExisting(symbol, true);
          return { value: this.value };
        }
      }
      if (currentChar === "0") {
        this.leadingZero = !this.isAbbrMonth(dateParts.partMap, symbol) ? (_a14 = {}, _a14[symbol] = true, _a14) : null;
        this.setExisting(symbol, false);
      }
      return { value: null };
    };
    KendoDate2.prototype.symbolMap = function(symbol) {
      return this.intl.splitDateFormat(this.format).reduce(dateSymbolMap, {})[symbol];
    };
    KendoDate2.prototype.resetLeadingZero = function() {
      var hasLeadingZero = this.leadingZero !== null;
      this.leadingZero = null;
      return hasLeadingZero;
    };
    KendoDate2.prototype.isAbbrMonth = function(parts, symbol) {
      var pattern = this.partPattern(parts, symbol);
      return pattern.type === "month" && pattern.names;
    };
    KendoDate2.prototype.partPattern = function(parts, symbol) {
      return parts.filter(function(part) {
        return part.pattern.indexOf(symbol) !== -1;
      })[0];
    };
    KendoDate2.prototype.matchMonth = function(typedChar) {
      this.typedMonthPart += typedChar.toLowerCase();
      if (this.monthNames.length === 0) {
        return "";
      }
      while (this.typedMonthPart.length > 0) {
        for (var i = 0; i < this.monthNames.length; i++) {
          if (this.monthNames[i].toLowerCase().indexOf(this.typedMonthPart) === 0) {
            return this.monthNames[i];
          }
        }
        var monthAsNum = parseInt(this.typedMonthPart, 10);
        if (monthAsNum >= 1 && monthAsNum <= 12 && monthAsNum.toString() === this.typedMonthPart) {
          return this.monthNames[monthAsNum - 1];
        }
        this.typedMonthPart = this.typedMonthPart.substring(1, this.typedMonthPart.length);
      }
      return "";
    };
    KendoDate2.prototype.allFormatedMonths = function() {
      var dateFormatParts = this.intl.splitDateFormat(this.format);
      for (var i = 0; i < dateFormatParts.length; i++) {
        if (dateFormatParts[i].type === "month" && dateFormatParts[i].names) {
          return this.intl.dateFormatNames(dateFormatParts[i].names);
        }
      }
      return [];
    };
    KendoDate2.prototype.dateFormatString = function(date2, format) {
      var dateFormatParts = this.intl.splitDateFormat(format);
      var parts = [];
      var partMap = [];
      for (var i = 0; i < dateFormatParts.length; i++) {
        var partLength = this.intl.formatDate(date2, { pattern: dateFormatParts[i].pattern }).length;
        while (partLength > 0) {
          parts.push(this.symbols[dateFormatParts[i].pattern[0]] || "_");
          partMap.push(dateFormatParts[i]);
          partLength--;
        }
      }
      var returnValue = new Mask();
      returnValue.symbols = parts.join("");
      returnValue.partMap = partMap;
      return returnValue;
    };
    KendoDate2.prototype.merge = function(text, mask) {
      var resultText = "";
      var resultFormat = "";
      var format = mask.symbols;
      for (var r = format.length - 1; r >= 0; r--) {
        if (this.knownParts.indexOf(format[r]) === -1 || this.getExisting(format[r])) {
          resultText = text[r] + resultText;
          resultFormat = format[r] + resultFormat;
        } else {
          var currentSymbol = format[r];
          while (r >= 0 && currentSymbol === format[r]) {
            r--;
          }
          r++;
          if (this.leadingZero && this.leadingZero[currentSymbol]) {
            resultText = "0" + resultText;
          } else {
            resultText = this.dateFieldName(mask.partMap[r]) + resultText;
          }
          while (resultFormat.length < resultText.length) {
            resultFormat = format[r] + resultFormat;
          }
        }
      }
      return { text: resultText, format: resultFormat };
    };
    KendoDate2.prototype.dateFieldName = function(part) {
      var formatPlaceholder = this.formatPlaceholder || "wide";
      if (formatPlaceholder[part.type]) {
        return formatPlaceholder[part.type];
      }
      if (formatPlaceholder === "formatPattern") {
        return part.pattern;
      }
      return this.intl.dateFieldName(Object.assign(part, { nameType: formatPlaceholder }));
    };
    return KendoDate2;
  }()
);

// node_modules/@progress/kendo-react-dateinputs/dist/es/timepicker/models/TimePart.js
var TIME_PART = {
  dayperiod: "dayperiod",
  hour: "hour",
  millisecond: "millisecond",
  minute: "minute",
  second: "second"
};

// node_modules/@progress/kendo-react-dateinputs/dist/es/timepicker/utils.js
var setter = function(method) {
  return function(date2, value) {
    var clone = cloneDate(date2);
    clone[method](value);
    return clone;
  };
};
var defaultGetters = [
  { type: TIME_PART.hour, getter: function(value) {
    return value.getHours();
  } },
  { type: TIME_PART.minute, getter: function(value) {
    return value.getMinutes();
  } },
  { type: TIME_PART.second, getter: function(value) {
    return value.getSeconds();
  } },
  { type: TIME_PART.millisecond, getter: function(value) {
    return value.getMilliseconds();
  } }
];
var left = function(getter2) {
  return function(origin, _) {
    return getter2(origin);
  };
};
var right = function(getter2) {
  return function(_, candidate) {
    return getter2(candidate);
  };
};
var convertToObject = function(parts) {
  return parts.reduce(function(obj, p) {
    obj[p.type] = p.type;
    return obj;
  }, {});
};
var getterByPart = function(parts) {
  return function(g) {
    return parts[g.type] ? right(g.getter) : left(g.getter);
  };
};
var gettersFactory = function(getters) {
  return function(parts) {
    return getters.map(getterByPart(convertToObject(parts)));
  };
};
var snapValue = function(getter2, step, min, type) {
  return function(date2) {
    var value = getter2(date2);
    var minValue = getter2(min);
    if (type === "hour") {
      return value - (value - minValue) % step;
    }
    if (date2.getTime() <= min.getTime() && value !== 0 && value <= minValue) {
      return Math.ceil(value / step) * step;
    }
    return value - value % step;
  };
};
var snappersFactory = function(getters) {
  return function(steps, min) {
    return getters.map(function(g) {
      var step = Math.floor(steps[g.type]);
      return step ? snapValue(g.getter, step, min, g.type) : g.getter;
    });
  };
};
var generateGetters = gettersFactory(defaultGetters);
var generateSnappers = snappersFactory(defaultGetters);
var setHours = setter("setHours");
var setMinutes = setter("setMinutes");
var setSeconds = setter("setSeconds");
var normalizeTimes = function(candidate, min, max) {
  return {
    candidateValue: setTime(MIDNIGHT_DATE, candidate),
    maxValue: addDays(setTime(MIDNIGHT_DATE, max), min.getHours() < max.getHours() ? 0 : 1),
    minValue: setTime(MIDNIGHT_DATE, min)
  };
};
var isInTimeRange = function(candidate, min, max) {
  if (!candidate || !min || !max) {
    return true;
  }
  var _a14 = normalizeTimes(candidate, min, max), candidateValue = _a14.candidateValue, minValue = _a14.minValue, maxValue = _a14.maxValue;
  return minValue <= candidateValue && candidateValue <= maxValue;
};

// node_modules/@progress/kendo-react-dateinputs/dist/es/dateinput/DateInput.js
var __extends26 = function() {
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
var __assign24 = function() {
  __assign24 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign24.apply(this, arguments);
};
var __spreadArray4 = function(to, from, pack) {
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
var VALIDATION_MESSAGE3 = "Please enter a valid value!";
var DateInputWithoutContext = (
  /** @class */
  function(_super) {
    __extends26(DateInputWithoutContext2, _super);
    function DateInputWithoutContext2(props) {
      var _this = _super.call(this, props) || this;
      _this.kendoDate = null;
      _this.currentFormat = "";
      _this.paste = false;
      _this._element = null;
      _this._wrapper = null;
      _this._inputId = guid();
      _this._lastSelectedSymbol = "";
      _this.focus = function() {
        if (_this._element) {
          _this._element.focus();
        }
      };
      _this.setValidity = function() {
        if (_this.element && _this.element.setCustomValidity) {
          _this.element.setCustomValidity(_this.validity.valid ? "" : _this.props.validationMessage || DateInputWithoutContext2.defaultProps.validationMessage);
        }
      };
      _this.updateOnPaste = function(event) {
        if (!_this.element || !_this.kendoDate) {
          return;
        }
        var value = provideIntlService(_this).parseDate(_this.element.value, _this.props.format) || _this.value;
        var oldValue = _this.value;
        _this.kendoDate.setValue(value);
        _this.triggerChange(event, oldValue);
      };
      _this.spinnersMouseDown = function(event) {
        event.preventDefault();
        var activeElement = getActiveElement(document);
        if (_this.element && activeElement !== _this.element) {
          _this.element.focus({ preventScroll: true });
        }
      };
      _this.handlePaste = function() {
        _this.paste = true;
      };
      _this.elementChange = function(event) {
        if (!_this.element || !_this.kendoDate) {
          return;
        }
        if (_this.paste) {
          _this.updateOnPaste(event);
          _this.paste = false;
          return;
        }
        var _a14 = _this.kendoDate.getTextAndFormat(), text = _a14.text, currentFormat = _a14.format;
        _this.currentFormat = currentFormat;
        var dateBeforeChange = _this.value;
        var diff = approximateStringMatching(text, _this.currentFormat, _this.element.value, _this.selection.start);
        var navigationOnly = diff.length === 1 && diff[0][1] === "_";
        if (!navigationOnly) {
          for (var i = 0; i < diff.length; i++) {
            _this.kendoDate.parsePart(diff[i][0], diff[i][1]);
          }
        }
        if (diff.length && diff[0][0] !== "_") {
          _this.setSelection(_this.selectionBySymbol(diff[0][0]));
        }
        if (navigationOnly) {
          _this.switchDateSegment(1);
        }
        _this.triggerChange(event, dateBeforeChange);
      };
      _this.elementClick = function(_) {
        _this.setSelection(_this.selectionByIndex(_this.selection.start));
      };
      _this.nativeWheel = function(event) {
        var activeElement = getActiveElement(document);
        if (activeElement === _this.element) {
          event.preventDefault();
        }
      };
      _this.wheel = function(event) {
        var activeElement = getActiveElement(document);
        if (activeElement !== _this.element) {
          return;
        }
        if (event.nativeEvent.deltaY < 0) {
          _this.increasePart(event);
        }
        if (event.nativeEvent.deltaY > 0) {
          _this.decreasePart(event);
        }
      };
      _this.increasePart = function(event) {
        _this.modifyDateSegmentValue(1, event);
      };
      _this.decreasePart = function(event) {
        _this.modifyDateSegmentValue(-1, event);
      };
      _this.elementKeyDown = function(event) {
        if (event.altKey) {
          return;
        }
        switch (event.keyCode) {
          case 37:
            _this.switchDateSegment(-1);
            break;
          case 38:
            _this.modifyDateSegmentValue(1, event);
            break;
          case 39:
            _this.switchDateSegment(1);
            break;
          case 40:
            _this.modifyDateSegmentValue(-1, event);
            break;
          default:
            return;
        }
        event.preventDefault();
      };
      _this.elementOnFocus = function(_) {
        if (_this.wrapper) {
          _this.wrapper.classList.add("k-focus");
        }
        _this.setState({ focused: true });
      };
      _this.elementOnBlur = function(_) {
        if (_this.wrapper) {
          _this.wrapper.classList.remove("k-focus");
        }
        _this.setState({ focused: false });
      };
      validatePackage(packageMetadata7);
      _this.state = {
        focused: false
      };
      return _this;
    }
    DateInputWithoutContext2.prototype.componentDidMount = function() {
      this.setValidity();
      if (this.wrapper) {
        this.wrapper.addEventListener("wheel", this.nativeWheel, { passive: false });
      }
    };
    DateInputWithoutContext2.prototype.componentDidUpdate = function(_, prevState) {
      if (this._lastSelectedSymbol && prevState.focused === this.state.focused) {
        this.setSelection(this.selectionBySymbol(this._lastSelectedSymbol));
      } else if (this.props.placeholder !== void 0 && this.selection.start === this.selection.end) {
        this.setSelection({ start: 0, end: this.currentFormat.length });
      }
      this.setValidity();
    };
    DateInputWithoutContext2.prototype.componentWillUnmount = function() {
      if (this.wrapper) {
        this.wrapper.removeEventListener("wheel", this.nativeWheel);
      }
    };
    DateInputWithoutContext2.prototype.render = function() {
      var _this = this;
      var _a14 = this.props, _b3 = _a14.size, size = _b3 === void 0 ? DateInputWithoutContext2.defaultProps.size : _b3, _c6 = _a14.fillMode, fillMode = _c6 === void 0 ? DateInputWithoutContext2.defaultProps.fillMode : _c6, _d = _a14.rounded, rounded = _d === void 0 ? DateInputWithoutContext2.defaultProps.rounded : _d;
      if (this.props._ref) {
        this.props._ref.current = this;
      }
      var localizationService = provideLocalizationService(this);
      var props = __assign24(__assign24({}, DateInputWithoutContext2.defaultProps), this.props);
      var name = props.name, label = props.label, id = props.id;
      var currentText = this.text;
      var text = currentText === this.props.placeholder ? "" : currentText;
      var placeholder = currentText === this.props.placeholder ? currentText : void 0;
      var inputId = id || this._inputId;
      var isValid = !this.validityStyles || this.validity.valid;
      var wrapperClassesInstance = __spreadArray4([], wrapperClasses, true);
      if (this.props.className) {
        wrapperClassesInstance.push(this.props.className);
      }
      var dateinput = React51.createElement(AsyncFocusBlur, { onFocus: this.elementOnFocus, onBlur: this.elementOnBlur }, function(_a15) {
        var _b4;
        var onFocus2 = _a15.onFocus, onBlur = _a15.onBlur;
        return React51.createElement(
          "span",
          { ref: function(span) {
            _this._wrapper = span;
          }, style: !label ? { width: _this.props.width } : void 0, dir: _this.props.dir, className: classNames("k-dateinput", "k-input", (_b4 = {}, _b4["k-input-".concat(kendoThemeMaps.sizeMap[size] || size)] = size, _b4["k-input-".concat(fillMode)] = fillMode, _b4["k-rounded-".concat(kendoThemeMaps.roundedMap[rounded] || rounded)] = rounded, _b4["k-invalid"] = !isValid, _b4["k-required"] = _this.required, _b4["k-disabled"] = _this.props.disabled, _b4), _this.props.className), onFocus: onFocus2, onBlur },
          React51.createElement("input", { role: _this.props.ariaRole || "textbox", readOnly: _this.props.readonly, tabIndex: _this.props.tabIndex, disabled: _this.props.disabled, title: _this.props.title !== void 0 ? _this.props.title : currentText, type: "text", spellCheck: false, autoComplete: "off", autoCorrect: "off", className: "k-input-inner", id: inputId, "aria-label": _this.props.ariaLabel, "aria-labelledby": _this.props.ariaLabelledBy, "aria-describedby": _this.props.ariaDescribedBy, "aria-haspopup": _this.props.ariaHasPopup, "aria-disabled": _this.props.disabled, "aria-expanded": _this.props.ariaExpanded, "aria-controls": _this.props.ariaControls, onWheel: _this.wheel, onClick: _this.elementClick, onInput: _this.elementChange, onPaste: _this.handlePaste, onKeyDown: _this.elementKeyDown, onChange: noop, value: text, placeholder, name, ref: function(input) {
            return _this._element = input;
          } }),
          _this.props.children,
          _this.props.spinners && React51.createElement(
            "span",
            { className: "k-input-spinner k-spin-button", onMouseDown: _this.spinnersMouseDown },
            React51.createElement(Button, { tabIndex: -1, type: "button", rounded: null, className: "k-spinner-increase", icon: "caret-alt-up", svgIcon: caretAltUpIcon, "aria-label": localizationService.toLanguageString(increaseValue2, messages5[increaseValue2]), title: localizationService.toLanguageString(increaseValue2, messages5[increaseValue2]), onClick: _this.increasePart }),
            React51.createElement(Button, { tabIndex: -1, type: "button", rounded: null, className: "k-spinner-decrease", icon: "caret-alt-down", svgIcon: caretAltDownIcon, "aria-label": localizationService.toLanguageString(decreaseValue2, messages5[decreaseValue2]), title: localizationService.toLanguageString(decreaseValue2, messages5[decreaseValue2]), onClick: _this.decreasePart })
          )
        );
      });
      return label ? React51.createElement(FloatingLabel, { label, editorId: inputId, editorValue: currentText, editorValid: isValid, editorDisabled: this.props.disabled, children: dateinput, style: { width: this.props.width } }) : dateinput;
    };
    Object.defineProperty(DateInputWithoutContext2.prototype, "value", {
      /* Public Getters */
      /**
       * Gets the value of the DateInput.
       */
      get: function() {
        if (this.valueDuringOnChange !== void 0) {
          return this.valueDuringOnChange;
        }
        return this.kendoDate && this.kendoDate.getDateObject();
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(DateInputWithoutContext2.prototype, "name", {
      /**
       * Gets the `name` property of the DateInput.
       */
      get: function() {
        return this.props.name;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(DateInputWithoutContext2.prototype, "min", {
      get: function() {
        return this.props.min !== void 0 ? this.props.min : DateInputWithoutContext2.defaultProps.min;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(DateInputWithoutContext2.prototype, "max", {
      get: function() {
        return this.props.max !== void 0 ? this.props.max : DateInputWithoutContext2.defaultProps.max;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(DateInputWithoutContext2.prototype, "text", {
      /**
       * @hidden
       */
      get: function() {
        var props = __assign24(__assign24({}, DateInput.defaultProps), this.props);
        var _a14 = props.formatPlaceholder, formatPlaceholder = _a14 === void 0 ? DateInputWithoutContext2.defaultProps.formatPlaceholder : _a14, _b3 = props.format, format = _b3 === void 0 ? DateInputWithoutContext2.defaultProps.format : _b3, value = props.value, defaultValue = props.defaultValue;
        if (this.kendoDate === null) {
          this.kendoDate = new KendoDate(this.intl.bind(this), formatPlaceholder, format);
          this.kendoDate.setValue(value || defaultValue || null);
        } else {
          this.kendoDate.format = format;
          this.kendoDate.formatPlaceholder = formatPlaceholder;
        }
        if (value !== void 0 && this.value !== value) {
          this.kendoDate.setValue(value);
        }
        var _c6 = this.kendoDate.getTextAndFormat(), currentText = _c6.text, currentFormat = _c6.format;
        this.currentFormat = currentFormat;
        return props.placeholder !== null && props.placeholder !== void 0 && !this.state.focused && !this.kendoDate.hasValue() ? props.placeholder : currentText;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(DateInputWithoutContext2.prototype, "validity", {
      /**
       * Represents the validity state into which the DateInput is set.
       */
      get: function() {
        var inRange = isInRange2(this.value, this.min, this.max) && isInTimeRange(this.value, this.props.minTime, this.props.maxTime);
        var customError = this.props.validationMessage !== void 0;
        var isValid = (!this.required || this.value !== null) && inRange;
        var valid = this.props.valid !== void 0 ? this.props.valid : isValid;
        return {
          customError,
          rangeOverflow: this.value && this.max.getTime() < this.value.getTime() || false,
          rangeUnderflow: this.value && this.value.getTime() < this.min.getTime() || false,
          valid,
          valueMissing: this.value === null
        };
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(DateInputWithoutContext2.prototype, "element", {
      /**
       * Gets the element of the DateInput.
       *
       * @return - An `HTMLInputElement`.
       *
       * @example
       * ```jsx
       * class App extends React.Component {
       *     constructor(props) {
       *         super(props);
       *     }
       *     element = null;
       *     render() {
       *         return (
       *             <div>
       *                 <DateInput
       *                     ref={(dateInput) =>
       *                         this.element = dateInput ? dateInput.element : null}
       *                 />
       *                 <button onClick={() => console.log(this.element)}>console.log the element</button>
       *             </div>
       *         );
       *     }
       * }
       *
       * ReactDOM.render(
       *     <App />,
       *     document.getElementsByTagName('my-app')[0]
       * );
       * ```
       */
      get: function() {
        return this._element;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(DateInputWithoutContext2.prototype, "validityStyles", {
      /**
       * @hidden
       */
      get: function() {
        return this.props.validityStyles !== void 0 ? this.props.validityStyles : DateInputWithoutContext2.defaultProps.validityStyles;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(DateInputWithoutContext2.prototype, "required", {
      /**
       * @hidden
       */
      get: function() {
        return this.props.required !== void 0 ? this.props.required : DateInputWithoutContext2.defaultProps.required;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(DateInputWithoutContext2.prototype, "wrapper", {
      /**
       * @hidden
       */
      get: function() {
        return this._wrapper;
      },
      enumerable: false,
      configurable: true
    });
    DateInputWithoutContext2.prototype.intl = function() {
      return provideIntlService(this);
    };
    Object.defineProperty(DateInputWithoutContext2.prototype, "selection", {
      /*  end handlers */
      get: function() {
        var returnValue = { start: 0, end: 0 };
        if (this.element !== null && this.element.selectionStart !== void 0) {
          returnValue = { start: this.element.selectionStart, end: this.element.selectionEnd };
        }
        return returnValue;
      },
      enumerable: false,
      configurable: true
    });
    DateInputWithoutContext2.prototype.setSelection = function(selection) {
      var _this = this;
      this._lastSelectedSymbol = this.currentFormat[selection.start];
      window.requestAnimationFrame(function() {
        var activeElement = getActiveElement(document);
        if (_this.element && activeElement === _this.element && !_this.props.disableSelection) {
          _this.element.setSelectionRange(selection.start, selection.end);
        }
      });
    };
    DateInputWithoutContext2.prototype.triggerChange = function(event, oldValue) {
      this.valueDuringOnChange = this.value;
      this.forceUpdate();
      if (this.props.onChange && !isEqual2(oldValue, this.value)) {
        this.props.onChange.call(void 0, {
          syntheticEvent: event,
          nativeEvent: event.nativeEvent,
          value: this.value,
          target: this
          // inRange: this.props.min && this.props.max ? isInRange(value, this.props.min, this.props.max) : true
        });
      }
      this.valueDuringOnChange = void 0;
    };
    DateInputWithoutContext2.prototype.selectionBySymbol = function(symbol) {
      var start2 = -1;
      var end2 = 0;
      for (var i = 0; i < this.currentFormat.length; i++) {
        if (this.currentFormat[i] === symbol) {
          end2 = i + 1;
          if (start2 === -1) {
            start2 = i;
          }
        }
      }
      if (start2 < 0) {
        start2 = 0;
      }
      return { start: start2, end: end2 };
    };
    DateInputWithoutContext2.prototype.selectionByIndex = function(index) {
      var selection = { start: index, end: index };
      for (var i = index, j = index - 1; i < this.currentFormat.length || j >= 0; i++, j--) {
        if (i < this.currentFormat.length && this.currentFormat[i] !== "_") {
          selection = this.selectionBySymbol(this.currentFormat[i]);
          break;
        }
        if (j >= 0 && this.currentFormat[j] !== "_") {
          selection = this.selectionBySymbol(this.currentFormat[j]);
          break;
        }
      }
      return selection;
    };
    DateInputWithoutContext2.prototype.switchDateSegment = function(offset) {
      var _a14 = this.selection, selectionStart = _a14.start, selectionEnd = _a14.end;
      if (selectionStart < selectionEnd && this.currentFormat[selectionStart] !== this.currentFormat[selectionEnd - 1]) {
        this.setSelection(this.selectionByIndex(offset > 0 ? selectionStart : selectionEnd - 1));
        return;
      }
      var previousFormatSymbol = this.currentFormat[selectionStart];
      var a = selectionStart + offset;
      while (a > 0 && a < this.currentFormat.length) {
        if (this.currentFormat[a] !== previousFormatSymbol && this.currentFormat[a] !== "_") {
          break;
        }
        a += offset;
      }
      if (this.currentFormat[a] === "_") {
        return;
      }
      var b = a;
      while (b >= 0 && b < this.currentFormat.length) {
        if (this.currentFormat[b] !== this.currentFormat[a]) {
          break;
        }
        b += offset;
      }
      if (a > b && (b + 1 !== selectionStart || a + 1 !== selectionEnd)) {
        this.setSelection({ start: b + 1, end: a + 1 });
      } else if (a < b && (a !== selectionStart || b !== selectionEnd)) {
        this.setSelection({ start: a, end: b });
      }
    };
    DateInputWithoutContext2.prototype.modifyDateSegmentValue = function(offset, event) {
      if (!this.kendoDate) {
        return;
      }
      var oldValue = this.value;
      var symbol = this.currentFormat[this.selection.start];
      var currentStepSymbol = this.kendoDate.symbolMap(symbol);
      var step = ((this.props.steps || {})[currentStepSymbol] || 1) * offset;
      this.kendoDate.modifyPart(symbol, step);
      this.triggerChange(event, oldValue);
    };
    DateInputWithoutContext2.displayName = "DateInput";
    DateInputWithoutContext2.propTypes = {
      value: PropTypes24.instanceOf(Date),
      format: PropTypes24.oneOfType([
        PropTypes24.string,
        PropTypes24.shape({
          skeleton: PropTypes24.string,
          pattern: PropTypes24.string,
          date: PropTypes24.oneOf(["short", "medium", "long", "full"]),
          time: PropTypes24.oneOf(["short", "medium", "long", "full"]),
          datetime: PropTypes24.oneOf(["short", "medium", "long", "full"]),
          era: PropTypes24.oneOf(["narrow", "short", "long"]),
          year: PropTypes24.oneOf(["numeric", "2-digit"]),
          month: PropTypes24.oneOf(["numeric", "2-digit", "narrow", "short", "long"]),
          day: PropTypes24.oneOf(["numeric", "2-digit"]),
          weekday: PropTypes24.oneOf(["narrow", "short", "long"]),
          hour: PropTypes24.oneOf(["numeric", "2-digit"]),
          hour12: PropTypes24.bool,
          minute: PropTypes24.oneOf(["numeric", "2-digit"]),
          second: PropTypes24.oneOf(["numeric", "2-digit"]),
          timeZoneName: PropTypes24.oneOf(["short", "long"])
        })
      ]),
      formatPlaceholder: PropTypes24.oneOfType([
        PropTypes24.oneOf(["wide", "narrow", "short", "formatPattern"]),
        PropTypes24.shape({
          year: PropTypes24.string,
          month: PropTypes24.string,
          day: PropTypes24.string,
          hour: PropTypes24.string,
          minute: PropTypes24.string,
          second: PropTypes24.string
        })
      ]),
      width: PropTypes24.oneOfType([
        PropTypes24.string,
        PropTypes24.number
      ]),
      tabIndex: PropTypes24.number,
      title: PropTypes24.string,
      steps: PropTypes24.shape({
        year: PropTypes24.number,
        month: PropTypes24.number,
        day: PropTypes24.number,
        hour: PropTypes24.number,
        minute: PropTypes24.number,
        second: PropTypes24.number
      }),
      min: PropTypes24.instanceOf(Date),
      max: PropTypes24.instanceOf(Date),
      disabled: PropTypes24.bool,
      spinners: PropTypes24.bool,
      name: PropTypes24.string,
      dir: PropTypes24.string,
      label: PropTypes24.string,
      id: PropTypes24.string,
      ariaLabelledBy: PropTypes24.string,
      ariaDescribedBy: PropTypes24.string,
      ariaLabel: PropTypes24.string,
      ariaRole: PropTypes24.string,
      ariaHasPopup: PropTypes24.oneOfType([
        PropTypes24.bool,
        PropTypes24.string
      ]),
      ariaExpanded: PropTypes24.oneOfType([
        PropTypes24.bool
      ]),
      onChange: PropTypes24.func,
      validationMessage: PropTypes24.string,
      required: PropTypes24.bool,
      validate: PropTypes24.bool,
      valid: PropTypes24.bool,
      size: PropTypes24.oneOf([null, "small", "medium", "large"]),
      rounded: PropTypes24.oneOf([null, "small", "medium", "large", "full"]),
      fillMode: PropTypes24.oneOf([null, "solid", "flat", "outline"])
    };
    DateInputWithoutContext2.defaultProps = {
      format: defaultFormat,
      size: "medium",
      rounded: "medium",
      fillMode: "solid",
      formatPlaceholder: defaultFormatPlaceholder,
      // defaultValue: null as Date | null,
      spinners: false,
      disabled: false,
      max: cloneDate(MAX_DATE),
      min: cloneDate(MIN_DATE),
      minTime: cloneDate(MIN_TIME),
      maxTime: cloneDate(MAX_TIME),
      required: false,
      validityStyles: true,
      validationMessage: VALIDATION_MESSAGE3,
      placeholder: null,
      // the rest of the properties are undefined by default
      ariaHasPopup: "grid"
    };
    return DateInputWithoutContext2;
  }(React51.Component)
);
var DateInputPropsContext = createPropsContext();
var DateInput = withPropsContext(DateInputPropsContext, DateInputWithoutContext);
DateInput.displayName = "KendoReactDateInput";
registerForIntl(DateInputWithoutContext);
registerForLocalization(DateInputWithoutContext);

// node_modules/@progress/kendo-react-dateinputs/dist/es/datepicker/DatePicker.js
var React55 = __toESM(require_react());
var PropTypes25 = __toESM(require_prop_types());

// node_modules/@progress/kendo-react-dateinputs/dist/es/datepicker/ToggleButton.js
var ToggleButton = Button;

// node_modules/@progress/kendo-react-dateinputs/dist/es/common/PickerWrap.js
var React52 = __toESM(require_react());
var PickerWrap = React52.forwardRef(function(props, ref) {
  var _ref = props._ref;
  var element2 = React52.useRef(null);
  React52.useImperativeHandle(ref, function() {
    return element2.current;
  });
  React52.useImperativeHandle(_ref, function() {
    return element2.current;
  });
  var className = React52.useMemo(function() {
    return classNames(props.className, "k-picker-wrap");
  }, [props.className]);
  return React52.createElement("span", { ref: element2, id: props.id, style: props.style, className, tabIndex: props.tabIndex }, props.children);
});

// node_modules/@progress/kendo-react-dateinputs/dist/es/hooks/usePickerFloatingLabel.js
var React53 = __toESM(require_react());
var __assign25 = function() {
  __assign25 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign25.apply(this, arguments);
};
var usePickerFloatingLabel = function(dateInput) {
  var _a14 = React53.useState(false), show = _a14[0], setShow = _a14[1];
  var syncText = function() {
    if (dateInput.current) {
      setShow(Boolean(dateInput.current.text));
    }
  };
  React53.useEffect(syncText);
  return {
    editorValue: show
  };
};
var PickerFloatingLabel = function(props) {
  var floatingLabelProps = usePickerFloatingLabel(props.dateInput);
  return React53.createElement(FloatingLabel, __assign25({}, props, floatingLabelProps));
};

// node_modules/@progress/kendo-react-dateinputs/dist/es/common/AdaptiveMode.js
var React54 = __toESM(require_react());
var __assign26 = function() {
  __assign26 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign26.apply(this, arguments);
};
var MOBILE_SMALL_DEVISE2 = 500;
var AdaptiveMode = function(props) {
  var footer = props.footer, children = props.children, _a14 = props.windowWidth, windowWidth = _a14 === void 0 ? 0 : _a14, navigatable = props.navigatable, navigatableElements = props.navigatableElements, expand = props.expand, animation = props.animation, onClose = props.onClose, adaptiveTitle = props.adaptiveTitle, mobileFilter = props.mobileFilter;
  var defaultProps4 = {
    navigatable: navigatable || false,
    navigatableElements: navigatableElements || [],
    expand,
    animation: animation === false ? false : true,
    onClose,
    animationStyles: windowWidth <= MOBILE_SMALL_DEVISE2 ? { top: 0, width: "100%", height: "100%" } : void 0,
    className: windowWidth <= MOBILE_SMALL_DEVISE2 ? "k-adaptive-actionsheet k-actionsheet-fullscreen" : "k-adaptive-actionsheet k-actionsheet-bottom"
  };
  return React54.createElement(
    ActionSheet,
    __assign26({}, defaultProps4),
    React54.createElement(
      ActionSheetHeader,
      { className: "k-text-center" },
      React54.createElement(
        "div",
        { className: "k-actionsheet-titlebar-group k-hbox" },
        React54.createElement(
          "div",
          { className: "k-actionsheet-title" },
          React54.createElement("div", null, adaptiveTitle)
        ),
        React54.createElement(
          "div",
          { className: "k-actionsheet-actions" },
          React54.createElement(Button, { tabIndex: 0, "aria-label": "Cancel", "aria-disabled": "false", type: "button", fillMode: "flat", icon: "x", svgIcon: xIcon, onClick: onClose })
        )
      ),
      mobileFilter && React54.createElement("div", { className: "k-actionsheet-titlebar-group k-actionsheet-filter" }, mobileFilter)
    ),
    children,
    footer && React54.createElement(
      ActionSheetFooter,
      { className: "k-actions k-actions-stretched" },
      React54.createElement(Button, { size: "large", tabIndex: 0, "aria-label": footer.cancelText, "aria-disabled": "false", type: "button", onClick: footer.onCancel }, footer.cancelText),
      React54.createElement(Button, { tabIndex: 0, themeColor: "primary", size: "large", "aria-label": footer.applyText, "aria-disabled": "false", type: "button", onClick: footer.onApply }, footer.applyText)
    )
  );
};

// node_modules/@progress/kendo-react-dateinputs/dist/es/common/constants.js
var MOBILE_MEDIUM_DEVISE2 = 768;

// node_modules/@progress/kendo-react-dateinputs/dist/es/datepicker/DatePicker.js
var __extends27 = function() {
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
var __assign27 = function() {
  __assign27 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign27.apply(this, arguments);
};
var __rest10 = function(s, e) {
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
var DatePickerWithoutContext = (
  /** @class */
  function(_super) {
    __extends27(DatePickerWithoutContext2, _super);
    function DatePickerWithoutContext2(props) {
      var _this = _super.call(this, props) || this;
      _this._popupId = guid();
      _this._element = null;
      _this._dateInput = React55.createRef();
      _this._calendar = null;
      _this.shouldFocusDateInput = false;
      _this.prevShow = false;
      _this.focus = function() {
        if (_this.dateInput) {
          _this.dateInput.focus();
        }
      };
      _this.setCalendarRef = function(calendar) {
        _this._calendar = calendar;
      };
      _this.nextValue = function(nextProps, nextState) {
        return nextProps.value !== void 0 ? nextProps.value : nextState.value;
      };
      _this.nextShow = function(nextProps, nextState) {
        return nextProps.show !== void 0 ? nextProps.show : nextState.show;
      };
      _this.renderPopup = function() {
        var _a14 = _this.props, disabled = _a14.disabled, min = _a14.min, max = _a14.max, weekNumber = _a14.weekNumber, focusedDate = _a14.focusedDate;
        var _b3 = _this.props.popupSettings, popupClass = _b3.popupClass, otherPopupSettings = __rest10(_b3, ["popupClass"]);
        var show = _this.show;
        var value = _this.value;
        var sanitizedValue = value && getDate(value);
        var popupClassNames = classNames("k-calendar-container k-group k-reset", popupClass);
        var popupProps = __assign27({ popupClass: "k-datepicker-popup", show, anchor: _this._element, className: popupClassNames, id: _this._popupId, anchorAlign: {
          horizontal: "left",
          vertical: "bottom"
        }, popupAlign: {
          horizontal: "left",
          vertical: "top"
        } }, otherPopupSettings);
        var calendarProps = {
          disabled,
          value: sanitizedValue,
          min,
          max,
          weekNumber,
          focusedDate,
          className: _this.mobileMode ? "k-calendar-lg" : "",
          navigation: _this.mobileMode ? false : true,
          onChange: _this.handleCalendarValueChange
        };
        if (_this.mobileMode) {
          return React55.createElement(_this.calendarComp, __assign27({ _ref: _this.setCalendarRef }, calendarProps));
        }
        return React55.createElement(
          _this.popupComp,
          __assign27({}, popupProps),
          React55.createElement(_this.calendarComp, __assign27({ _ref: _this.setCalendarRef }, calendarProps))
        );
      };
      _this.renderAdaptivePopup = function() {
        var _a14 = _this.state.windowWidth, windowWidth = _a14 === void 0 ? 0 : _a14;
        var actionSheetProps = {
          expand: _this.show,
          onClose: _this.handleBlur,
          adaptiveTitle: _this.props.adaptiveTitle,
          windowWidth
        };
        return React55.createElement(
          AdaptiveMode,
          __assign27({}, actionSheetProps),
          React55.createElement(ActionSheetContent, { className: "!k-overflow-hidden" }, _this.renderPopup())
        );
      };
      _this.handleInputValueChange = function(event) {
        _this.handleValueChange(event.value, event);
      };
      _this.handleCalendarValueChange = function(event) {
        var value = _this.mergeTime(event.value);
        _this.handleValueChange(value, event);
      };
      _this.handleValueChange = function(value, event) {
        _this.setState({
          value: cloneDate(value || void 0)
        });
        _this.valueDuringOnChange = value;
        _this.showDuringOnChange = false;
        if (!_this.mobileMode) {
          _this.shouldFocusDateInput = true;
        }
        var onChange = _this.props.onChange;
        if (onChange) {
          onChange.call(void 0, {
            syntheticEvent: event.syntheticEvent,
            nativeEvent: event.nativeEvent,
            value: _this.value,
            show: _this.show,
            target: _this
          });
        }
        _this.valueDuringOnChange = void 0;
        _this.showDuringOnChange = void 0;
        _this.setShow(false);
      };
      _this.handleFocus = function() {
        _this.setState({ focused: true });
      };
      _this.handleBlur = function() {
        _this.setState({ focused: false });
        _this.setShow(false);
      };
      _this.handleIconClick = function() {
        if (_this.props.disabled) {
          return;
        }
        _this.shouldFocusDateInput = true;
        _this.setShow(!_this.show);
      };
      _this.handleIconMouseDown = function(event) {
        event.preventDefault();
      };
      _this.handleKeyDown = function(event) {
        var altKey = event.altKey, keyCode = event.keyCode;
        if (keyCode === Keys.esc) {
          _this.shouldFocusDateInput = true;
          _this.setShow(false);
          return;
        }
        if (altKey && (keyCode === Keys.up || keyCode === Keys.down)) {
          event.preventDefault();
          event.stopPropagation();
          _this.shouldFocusDateInput = keyCode === Keys.up;
          _this.setShow(keyCode === Keys.down);
        }
      };
      validatePackage(packageMetadata7);
      _this.state = {
        value: _this.props.defaultValue || DatePickerWithoutContext2.defaultProps.defaultValue,
        show: _this.props.defaultShow || DatePickerWithoutContext2.defaultProps.defaultShow,
        focused: false
      };
      return _this;
    }
    Object.defineProperty(DatePickerWithoutContext2.prototype, "document", {
      get: function() {
        if (!canUseDOM) {
          return;
        }
        return this.element && this.element.ownerDocument || document;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(DatePickerWithoutContext2.prototype, "element", {
      /**
       * Gets the wrapping element of the DatePickerWithoutContext.
       */
      get: function() {
        return this._element;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(DatePickerWithoutContext2.prototype, "mobileMode", {
      /**
       * The mobile mode of the DatePicker.
       */
      get: function() {
        var isAdaptive = this.state.windowWidth && this.state.windowWidth <= MOBILE_MEDIUM_DEVISE2 && this.props.adaptive;
        return !!isAdaptive;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(DatePickerWithoutContext2.prototype, "dateInput", {
      /**
       * Gets the DateInput component inside the DatePicker component.
       */
      get: function() {
        return this._dateInput.current;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(DatePickerWithoutContext2.prototype, "calendar", {
      /**
       * Gets the Calendar component inside the DatePicker component.
       */
      get: function() {
        return this._calendar;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(DatePickerWithoutContext2.prototype, "value", {
      /**
       * Gets the value of the DatePickerWithoutContext.
       */
      get: function() {
        var value = this.valueDuringOnChange !== void 0 ? this.valueDuringOnChange : this.props.value !== void 0 ? this.props.value : this.state.value;
        return value !== null ? cloneDate(value) : null;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(DatePickerWithoutContext2.prototype, "show", {
      /**
       * Gets the popup state of the DatePickerWithoutContext.
       */
      get: function() {
        return this.showDuringOnChange !== void 0 ? this.showDuringOnChange : this.props.show !== void 0 ? this.props.show : this.state.show;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(DatePickerWithoutContext2.prototype, "name", {
      /**
       * Gets the `name` property of the DatePickerWithoutContext.
       */
      get: function() {
        return this.props.name;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(DatePickerWithoutContext2.prototype, "min", {
      get: function() {
        return this.props.min !== void 0 ? this.props.min : DatePickerWithoutContext2.defaultProps.min;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(DatePickerWithoutContext2.prototype, "max", {
      get: function() {
        return this.props.max !== void 0 ? this.props.max : DatePickerWithoutContext2.defaultProps.max;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(DatePickerWithoutContext2.prototype, "dateInputComp", {
      get: function() {
        return this.props.dateInput || DatePickerWithoutContext2.defaultProps.dateInput;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(DatePickerWithoutContext2.prototype, "toggleButtonComp", {
      get: function() {
        return this.props.toggleButton || DatePickerWithoutContext2.defaultProps.toggleButton;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(DatePickerWithoutContext2.prototype, "calendarComp", {
      get: function() {
        return this.props.calendar || DatePickerWithoutContext2.defaultProps.calendar;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(DatePickerWithoutContext2.prototype, "popupComp", {
      get: function() {
        return this.props.popup || DatePickerWithoutContext2.defaultProps.popup;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(DatePickerWithoutContext2.prototype, "pickerWrapComp", {
      get: function() {
        return this.props.pickerWrap || DatePickerWithoutContext2.defaultProps.pickerWrap;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(DatePickerWithoutContext2.prototype, "validity", {
      /**
       * Represents the validity state into which the DatePicker is set.
       */
      get: function() {
        var inRange = isInDateRange(this.value, this.min, this.max);
        var customError = this.props.validationMessage !== void 0;
        var isValid = (!this.required || this.value !== null) && inRange;
        var valid = this.props.valid !== void 0 ? this.props.valid : isValid;
        return {
          customError,
          rangeOverflow: this.value && this.max.getTime() < this.value.getTime() || false,
          rangeUnderflow: this.value && this.value.getTime() < this.min.getTime() || false,
          valid,
          valueMissing: this.value === null
        };
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(DatePickerWithoutContext2.prototype, "validityStyles", {
      /**
       * @hidden
       */
      get: function() {
        return this.props.validityStyles !== void 0 ? this.props.validityStyles : DatePickerWithoutContext2.defaultProps.validityStyles;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(DatePickerWithoutContext2.prototype, "required", {
      /**
       * @hidden
       */
      get: function() {
        return this.props.required !== void 0 ? this.props.required : DatePickerWithoutContext2.defaultProps.required;
      },
      enumerable: false,
      configurable: true
    });
    DatePickerWithoutContext2.prototype.componentDidMount = function() {
      var _a14;
      this.observerResize = canUseDOM && window.ResizeObserver && new window.ResizeObserver(this.calculateMedia.bind(this));
      if (this.show) {
        this.forceUpdate();
      }
      if (((_a14 = this.document) === null || _a14 === void 0 ? void 0 : _a14.body) && this.observerResize) {
        this.observerResize.observe(this.document.body);
      }
    };
    DatePickerWithoutContext2.prototype.componentDidUpdate = function() {
      if (this._calendar && this._calendar.element && this.show && !this.prevShow) {
        this._calendar.element.focus({ preventScroll: true });
      }
      if (this.dateInput && this.dateInput.element && !this.show && this.shouldFocusDateInput) {
        this.dateInput.element.focus({ preventScroll: true });
      }
      this.prevShow = this.show;
      this.shouldFocusDateInput = false;
    };
    DatePickerWithoutContext2.prototype.componentWillUnmount = function() {
      var _a14;
      clearTimeout(this.nextTickId);
      if (((_a14 = this.document) === null || _a14 === void 0 ? void 0 : _a14.body) && this.observerResize) {
        this.observerResize.disconnect();
      }
    };
    DatePickerWithoutContext2.prototype.render = function() {
      var _this = this;
      var _a14 = this.props, _b3 = _a14.size, size = _b3 === void 0 ? DatePickerWithoutContext2.defaultProps.size : _b3, _c6 = _a14.rounded, rounded = _c6 === void 0 ? DatePickerWithoutContext2.defaultProps.rounded : _c6, _d = _a14.fillMode, fillMode = _d === void 0 ? DatePickerWithoutContext2.defaultProps.fillMode : _d, disabled = _a14.disabled, tabIndex = _a14.tabIndex, title = _a14.title, id = _a14.id, format = _a14.format, formatPlaceholder = _a14.formatPlaceholder, min = _a14.min, max = _a14.max, className = _a14.className, width = _a14.width, name = _a14.name, validationMessage = _a14.validationMessage, required = _a14.required, validityStyles = _a14.validityStyles, ariaLabelledBy = _a14.ariaLabelledBy, ariaDescribedBy = _a14.ariaDescribedBy, ariaLabel = _a14.ariaLabel;
      var show = this.show;
      var value = this.value;
      var isValid = !this.validityStyles || this.validity.valid;
      var dateInputProps = {
        disabled,
        format,
        formatPlaceholder,
        id,
        ariaLabelledBy,
        ariaDescribedBy,
        ariaLabel,
        max,
        min,
        name,
        onChange: this.handleInputValueChange,
        required,
        tabIndex: !show ? tabIndex : -1,
        title,
        valid: this.validity.valid,
        validationMessage,
        validityStyles,
        value,
        label: void 0,
        placeholder: !this.state.focused ? this.props.placeholder : null,
        ariaExpanded: this.show,
        size: null,
        fillMode: null,
        rounded: null
      };
      var toggleButtonTitle = provideLocalizationService(this).toLanguageString(toggleCalendar, messages5[toggleCalendar]);
      var datepicker = React55.createElement(AsyncFocusBlur, { onFocus: this.handleFocus, onBlur: this.mobileMode ? void 0 : this.handleBlur, onSyncBlur: this.props.onBlur, onSyncFocus: this.props.onFocus }, function(_a15) {
        var _b4;
        var onFocus2 = _a15.onFocus, onBlur = _a15.onBlur;
        return React55.createElement(
          React55.Fragment,
          null,
          React55.createElement(
            "span",
            { ref: function(span) {
              _this._element = span;
            }, className: classNames("k-input", "k-datepicker", (_b4 = {}, _b4["k-input-".concat(kendoThemeMaps.sizeMap[size] || size)] = size, _b4["k-rounded-".concat(kendoThemeMaps.roundedMap[rounded] || rounded)] = rounded, _b4["k-input-".concat(fillMode)] = fillMode, _b4["k-invalid"] = !isValid, _b4["k-required"] = _this.required, _b4["k-disabled"] = _this.props.disabled, _b4), className), onKeyDown: _this.handleKeyDown, style: { width }, onFocus: onFocus2, onBlur, onClick: _this.mobileMode ? _this.handleIconClick : void 0 },
            React55.createElement(_this.dateInputComp, __assign27({ _ref: _this._dateInput, ariaRole: "combobox", readonly: _this.mobileMode, ariaExpanded: _this.show, ariaControls: _this._popupId }, dateInputProps)),
            React55.createElement(_this.toggleButtonComp, { type: "button", icon: "calendar", svgIcon: calendarIcon, title: toggleButtonTitle, className: "k-input-button", rounded: null, onClick: _this.mobileMode ? void 0 : _this.handleIconClick, "aria-label": toggleButtonTitle, onMouseDown: _this.handleIconMouseDown }),
            !_this.mobileMode && _this.renderPopup()
          ),
          _this.mobileMode && _this.renderAdaptivePopup()
        );
      });
      return this.props.label ? React55.createElement(PickerFloatingLabel, { dateInput: this._dateInput, label: this.props.label, editorId: id, editorValid: isValid, editorDisabled: this.props.disabled, children: datepicker, style: { width: this.props.width } }) : datepicker;
    };
    DatePickerWithoutContext2.prototype.setShow = function(show) {
      var _a14 = this.props, onOpen = _a14.onOpen, onClose = _a14.onClose;
      if (this.show === show) {
        return;
      }
      this.setState({ show });
      if (show && onOpen) {
        onOpen.call(void 0, {
          target: this
        });
      }
      if (!show && onClose) {
        onClose.call(void 0, {
          target: this
        });
      }
    };
    DatePickerWithoutContext2.prototype.mergeTime = function(value) {
      return this.value && value ? setTime(value, this.value) : value;
    };
    DatePickerWithoutContext2.prototype.nextTick = function(f) {
      clearTimeout(this.nextTickId);
      this.nextTickId = window.setTimeout(function() {
        return f();
      });
    };
    DatePickerWithoutContext2.prototype.calculateMedia = function(entries) {
      for (var _i = 0, entries_1 = entries; _i < entries_1.length; _i++) {
        var entry = entries_1[_i];
        this.setState({ windowWidth: entry.target.clientWidth });
      }
      ;
    };
    ;
    DatePickerWithoutContext2.displayName = "DatePicker";
    DatePickerWithoutContext2.propTypes = {
      className: PropTypes25.string,
      defaultShow: PropTypes25.bool,
      defaultValue: PropTypes25.instanceOf(Date),
      disabled: PropTypes25.bool,
      focusedDate: PropTypes25.instanceOf(Date),
      format: PropTypes25.oneOfType([
        PropTypes25.string,
        PropTypes25.shape({
          skeleton: PropTypes25.string,
          pattern: PropTypes25.string,
          date: PropTypes25.oneOf(["short", "medium", "long", "full"]),
          time: PropTypes25.oneOf(["short", "medium", "long", "full"]),
          datetime: PropTypes25.oneOf(["short", "medium", "long", "full"]),
          era: PropTypes25.oneOf(["narrow", "short", "long"]),
          year: PropTypes25.oneOf(["numeric", "2-digit"]),
          month: PropTypes25.oneOf(["numeric", "2-digit", "narrow", "short", "long"]),
          day: PropTypes25.oneOf(["numeric", "2-digit"]),
          weekday: PropTypes25.oneOf(["narrow", "short", "long"]),
          hour: PropTypes25.oneOf(["numeric", "2-digit"]),
          hour12: PropTypes25.bool,
          minute: PropTypes25.oneOf(["numeric", "2-digit"]),
          second: PropTypes25.oneOf(["numeric", "2-digit"]),
          timeZoneName: PropTypes25.oneOf(["short", "long"])
        })
      ]),
      formatPlaceholder: PropTypes25.oneOfType([
        PropTypes25.oneOf(["wide", "narrow", "short", "formatPattern"]),
        PropTypes25.shape({
          year: PropTypes25.string,
          month: PropTypes25.string,
          day: PropTypes25.string,
          hour: PropTypes25.string,
          minute: PropTypes25.string,
          second: PropTypes25.string
        })
      ]),
      id: PropTypes25.string,
      ariaLabelledBy: PropTypes25.string,
      ariaDescribedBy: PropTypes25.string,
      ariaLabel: PropTypes25.string,
      min: PropTypes25.instanceOf(Date),
      max: PropTypes25.instanceOf(Date),
      name: PropTypes25.string,
      popupSettings: PropTypes25.shape({
        animate: PropTypes25.bool,
        appendTo: PropTypes25.any,
        popupClass: PropTypes25.string
      }),
      show: PropTypes25.bool,
      tabIndex: PropTypes25.number,
      title: PropTypes25.string,
      value: PropTypes25.instanceOf(Date),
      weekNumber: PropTypes25.bool,
      width: PropTypes25.oneOfType([PropTypes25.number, PropTypes25.string]),
      validationMessage: PropTypes25.string,
      required: PropTypes25.bool,
      validate: PropTypes25.bool,
      valid: PropTypes25.bool,
      size: PropTypes25.oneOf([null, "small", "medium", "large"]),
      rounded: PropTypes25.oneOf([null, "small", "medium", "large", "full"]),
      fillMode: PropTypes25.oneOf([null, "solid", "flat", "outline"]),
      adaptive: PropTypes25.bool,
      adaptiveTitle: PropTypes25.string
    };
    DatePickerWithoutContext2.defaultProps = {
      defaultShow: false,
      defaultValue: null,
      dateInput: DateInput,
      calendar: Calendar,
      toggleButton: ToggleButton,
      popup: Popup,
      pickerWrap: PickerWrap,
      disabled: false,
      format: "d",
      max: MAX_DATE,
      min: MIN_DATE,
      popupSettings: {},
      tabIndex: 0,
      weekNumber: false,
      required: false,
      validityStyles: true,
      size: "medium",
      rounded: "medium",
      fillMode: "solid"
    };
    return DatePickerWithoutContext2;
  }(React55.Component)
);
var DatePickerPropsContext = createPropsContext();
var DatePicker = withPropsContext(DatePickerPropsContext, DatePickerWithoutContext);
DatePicker.displayName = "KendoReactDatePicker";
registerForLocalization(DatePickerWithoutContext);

// node_modules/@progress/kendo-react-data-tools/dist/es/header/HeaderThElement.js
var React58 = __toESM(require_react());

// node_modules/@progress/kendo-react-data-tools/dist/es/navigation/hooks.js
var React57 = __toESM(require_react());

// node_modules/@progress/kendo-react-data-tools/dist/es/navigation/constants.js
var __spreadArray5 = function(to, from, pack) {
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
var _a12;
var _b2;
var _c2;
var KEYBOARD_NAV_DATA_LEVEL = "data-keyboardnavlevel";
var KEYBOARD_NAV_DATA_SCOPE = "data-keyboardnavscope";
var KEYBOARD_NAV_DATA_HEADER = "data-keyboardnavheader";
var KEYBOARD_NAV_DATA_BODY = "data-keyboardnavbody";
var KEYBOARD_NAV_DATA_ID = "data-keyboardnavid";
var KEYBOARD_NAV_FILTER_COL_SUFFIX = "_filter";
var FOCUSABLE_ELEMENTS_BASE = [
  "input:not([disabled]):not([type=hidden])",
  "select:not([disabled])",
  "textarea:not([disabled])",
  "button:not([disabled])",
  "a[href]",
  "area[href]",
  "summary",
  "iframe",
  "object",
  "embed",
  "audio[controls]",
  "video[controls]",
  "[contenteditable]"
];
var FOCUSABLE_ELEMENTS2 = __spreadArray5(__spreadArray5([], FOCUSABLE_ELEMENTS_BASE, true), ["[tabindex]"], false);
var TABBABLE_ELEMENTS = __spreadArray5(__spreadArray5([], FOCUSABLE_ELEMENTS_BASE, true), ["[tabindex]"], false).map(function(selector) {
  return selector + ':not([tabindex="-1"])';
});
var tableKeyboardNavigationScopeAttributes = (_a12 = {}, _a12[KEYBOARD_NAV_DATA_SCOPE] = true, _a12);
var tableKeyboardNavigationHeaderAttributes = (_b2 = {}, _b2[KEYBOARD_NAV_DATA_HEADER] = true, _b2);
var tableKeyboardNavigationBodyAttributes = (_c2 = {}, _c2[KEYBOARD_NAV_DATA_BODY] = true, _c2);

// node_modules/@progress/kendo-react-data-tools/dist/es/navigation/TableKeyboardNavigationContext.js
var React56 = __toESM(require_react());
var TableKeyboardNavigationContext = React56.createContext(void 0);
TableKeyboardNavigationContext.displayName = "KendoReactTableKeyboardNavigationContext";

// node_modules/@progress/kendo-react-data-tools/dist/es/navigation/hooks.js
var useTableKeyboardNavigation = function(elementId, navigatable) {
  var _a14;
  var navigationContext = React57.useContext(TableKeyboardNavigationContext);
  if (!navigationContext || !elementId || navigatable === false) {
    return {};
  }
  return _a14 = {
    tabIndex: navigationContext && navigationContext.activeId && navigationContext.activeId === elementId ? 0 : -1
  }, _a14[KEYBOARD_NAV_DATA_LEVEL] = navigationContext.level, _a14[KEYBOARD_NAV_DATA_ID] = elementId, _a14;
};

// node_modules/@progress/kendo-react-data-tools/dist/es/header/HeaderThElement.js
var __assign28 = function() {
  __assign28 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign28.apply(this, arguments);
};
var HeaderThElement = function(props) {
  var ariaSort = props.ariaSort, colSpan = props.colSpan, rowSpan = props.rowSpan, className = props.className, style = props.style, columnId = props.columnId, onKeyDown2 = props.onKeyDown, navigatable = props.navigatable, ariaColumnIndex = props.ariaColumnIndex, ariaLabel = props.ariaLabel, role = props.role, ariaSelected = props.ariaSelected;
  var navigationAttributes = useTableKeyboardNavigation(columnId, navigatable);
  return React58.createElement("th", __assign28({
    "aria-sort": ariaSort,
    "aria-label": ariaLabel,
    "aria-colindex": ariaColumnIndex,
    "aria-selected": ariaSelected,
    // TODO: Enable this with React 18. Currently throws warnings
    // aria-description={ariaDescription}
    colSpan,
    rowSpan,
    className,
    style,
    onKeyDown: onKeyDown2,
    role
  }, navigationAttributes), props.children);
};
HeaderThElement.displayName = "KendoReactHeaderThElement";

// node_modules/@progress/kendo-react-data-tools/dist/es/navigation/utils.js
var generateNavigatableId = function(navigationId, idPrefix, type) {
  if (type === void 0) {
    type = "cell";
  }
  return "".concat(idPrefix, "_").concat(navigationId, "_").concat(type);
};
var getNavigatableLevel = function(element2) {
  if (!element2) {
    return;
  }
  return parseInt(element2.getAttribute(KEYBOARD_NAV_DATA_LEVEL) || "", 10);
};
var getNavigatableId = function(element2) {
  if (!element2) {
    return;
  }
  var dataId = element2.getAttribute(KEYBOARD_NAV_DATA_ID);
  return dataId ? dataId : void 0;
};
var isNavigatable = function(element2) {
  if (!element2) {
    return false;
  }
  var dataId = element2.getAttribute(KEYBOARD_NAV_DATA_ID);
  return Boolean(dataId);
};
var getNavigatableElement = function(scope, options) {
  if (options === void 0) {
    options = { level: 0 };
  }
  return scope.querySelector("[".concat(KEYBOARD_NAV_DATA_LEVEL, "='").concat(options.level, "']"));
};
var getClosestNavigatableElement = function(target) {
  return target.parentElement && target.parentElement.closest("[".concat(KEYBOARD_NAV_DATA_LEVEL, "]"));
};
var getActiveElement2 = function(scope, activeId) {
  return scope.querySelector("[".concat(KEYBOARD_NAV_DATA_ID, "='").concat(activeId, "']"));
};
var getClosestScope = function(target) {
  return target.parentElement && target.parentElement.closest("[".concat(KEYBOARD_NAV_DATA_SCOPE, "]"));
};
var getHeaderElement = function(scope) {
  return scope.querySelector("[".concat(KEYBOARD_NAV_DATA_HEADER, "]"));
};
var getBodyElement = function(scope) {
  return scope.querySelector("[".concat(KEYBOARD_NAV_DATA_BODY, "]"));
};
var getFocusableElements = function(scope, options) {
  if (options === void 0) {
    options = { focusable: false };
  }
  var selectors = options.focusable ? FOCUSABLE_ELEMENTS2 : TABBABLE_ELEMENTS;
  return Array.from(scope.querySelectorAll(selectors.join(",")));
};
var getNavigatableElements = function(scope, options) {
  if (options === void 0) {
    options = { level: 0 };
  }
  if (!scope) {
    return [];
  }
  var selector = FOCUSABLE_ELEMENTS2.map(function(el) {
    return el + "[".concat(KEYBOARD_NAV_DATA_LEVEL, "='").concat(options.level, "']");
  }).join(",");
  return Array.from(scope.querySelectorAll(selector));
};
var filterNavigatableElements = function(options) {
  if (options === void 0) {
    options = { level: 0 };
  }
  var selector = FOCUSABLE_ELEMENTS2.map(function(sel) {
    return sel + "[".concat(KEYBOARD_NAV_DATA_LEVEL, "='").concat(options.level, "']");
  }).join(",");
  return function(element2) {
    return element2.matches(selector);
  };
};
var focusElement = function(options) {
  var elementForFocus = options.elementForFocus, event = options.event, contextStateRef = options.contextStateRef, prevElement = options.prevElement;
  if (contextStateRef.current && elementForFocus && elementForFocus.focus) {
    event.preventDefault();
    elementForFocus.focus();
    if (isNavigatable(elementForFocus)) {
      elementForFocus.setAttribute("tabIndex", "0");
      contextStateRef.current.activeId = getNavigatableId(elementForFocus);
    }
    if (prevElement && isNavigatable(prevElement)) {
      prevElement.setAttribute("tabIndex", "-1");
    }
  }
};
var getIdPrefix = function(navigationStateRef) {
  return navigationStateRef.current ? navigationStateRef.current.idPrefix : "";
};
var findNextIdByRowIndex = function(initialRowIndex, cellIndex, elementId, matrix, isReverse) {
  if (!elementId) {
    return [];
  }
  var currentRowIndex = initialRowIndex + (isReverse ? -1 : 1);
  while (currentRowIndex >= 0 && currentRowIndex < matrix.length) {
    var currentId = matrix[currentRowIndex][cellIndex];
    if (currentId !== elementId) {
      return [currentId, [currentRowIndex, cellIndex]];
    }
    currentRowIndex = currentRowIndex + (isReverse ? -1 : 1);
  }
  return [];
};
var findNextIdByCellIndex = function(rowIndex, initialCellIndex, elementId, matrix, isReverse) {
  if (!elementId) {
    return [];
  }
  var currentCellIndex = initialCellIndex + (isReverse ? -1 : 1);
  while (currentCellIndex >= 0 && currentCellIndex < matrix[rowIndex].length) {
    var currentId = matrix[rowIndex][currentCellIndex];
    if (currentId !== elementId) {
      return [currentId, [rowIndex, currentCellIndex]];
    }
    currentCellIndex = currentCellIndex + (isReverse ? -1 : 1);
  }
  return [];
};
var findId = function(navigationMatrix, cellId) {
  if (!cellId) {
    return;
  }
  for (var rowIndex = 0; rowIndex < navigationMatrix.length; rowIndex++) {
    for (var cellIndex = 0; cellIndex < navigationMatrix[rowIndex].length; cellIndex++) {
      if (navigationMatrix[rowIndex][cellIndex] === cellId) {
        return [rowIndex, cellIndex];
      }
    }
  }
};
var getNextNavigationIndex = function(navigationStateRef) {
  return navigationStateRef.current ? navigationStateRef.current.navigationMatrix.length : 0;
};
var getFilterColumnId = function(columnId) {
  return columnId ? "".concat(columnId).concat(KEYBOARD_NAV_FILTER_COL_SUFFIX) : "";
};
var tableKeyboardNavigationTools = {
  generateNavigatableId,
  getNavigatableId,
  getNavigatableLevel,
  getNavigatableElement,
  getClosestNavigatableElement,
  getActiveElement: getActiveElement2,
  getClosestScope,
  getHeaderElement,
  getBodyElement,
  getFocusableElements,
  getNavigatableElements,
  filterNavigatableElements,
  focusElement,
  getIdPrefix,
  isNavigatable,
  findNextIdByRowIndex,
  findNextIdByCellIndex,
  findId,
  getNextNavigationIndex,
  getFilterColumnId
};

// node_modules/@progress/kendo-react-data-tools/dist/es/header/utils/index.js
function nextColumn(columns, current) {
  var currentDepth = columns[current].depth;
  var next = null;
  for (var index = current + 1; index < columns.length; index++) {
    if (columns[index].depth === currentDepth) {
      next = columns[index];
      break;
    }
  }
  return next;
}
var getColumnWidth = function(column) {
  var width = column.width ? parseFloat(column.width.toString()) : 0;
  if (!width && column.children && column.children.length) {
    width = column.children.reduce(function(currentSum, child) {
      return getColumnWidth(child) + currentSum;
    }, 0);
  }
  return width;
};
function mapColumns(columns) {
  var columnsMap = [[]];
  var maxDepth = 0;
  for (var q = columns.length - 1; q >= 0; q--) {
    maxDepth = Math.max(maxDepth, columns[q].depth);
    columns[q].colSpan = columns[q].colSpan || 1;
    if (columns[q].parentIndex !== -1) {
      columns[columns[q].parentIndex].colSpan = (columns[columns[q].parentIndex].colSpan || 0) + columns[q].colSpan;
    }
  }
  var colIndexByLevel = [];
  var rowSpan = 1;
  columns.forEach(function(column, i) {
    columnsMap[column.depth] = columnsMap[column.depth] || [];
    var needKFirst = false;
    if (columnsMap[column.depth].length === 0) {
      if (rowSpan <= 1) {
        rowSpan = 1 + (column.children.length > 0 ? 0 : maxDepth - column.depth);
      } else {
        rowSpan--;
        needKFirst = true;
      }
    }
    column.rowSpan = 1 + (column.children.length > 0 ? 0 : maxDepth - column.depth);
    column.kFirst = needKFirst;
    column.index = columnsMap[column.depth].length;
    columnsMap[column.depth].push(i);
    column.ariaColumnIndex = colIndexByLevel[column.depth] ? colIndexByLevel[column.depth] + 1 : 1;
    for (var ci = column.depth; ci < column.depth + column.rowSpan; ci++) {
      colIndexByLevel[ci] = (colIndexByLevel[ci] || 0) + column.colSpan;
    }
  });
  updateLeft(columnsMap, columns);
  updateRight(columnsMap, columns);
  return columnsMap;
}
function updateLeft(columnsMap, columns, generateLeft) {
  var stickyLeftWidth = new Array(columnsMap.length).fill(0);
  var width = 0;
  columns.forEach(function(column) {
    if (column.locked && (!column.left || generateLeft)) {
      column.left = stickyLeftWidth[column.depth];
      width = getColumnWidth(column);
      if (column.children.length === 0) {
        for (var i = column.depth; i < stickyLeftWidth.length; i++) {
          stickyLeftWidth[i] += width;
        }
      } else {
        stickyLeftWidth[column.depth] += width;
      }
    }
  });
}
function updateRight(columnsMap, columns, generateRight) {
  var width = 0;
  var stickyRightWidth = new Array(columnsMap.length).fill(0);
  for (var i = columns.length - 1; i >= 0; i--) {
    var column = columns[i];
    if (column.locked && (!column.right || generateRight)) {
      column.right = stickyRightWidth[column.depth];
      width = getColumnWidth(column);
      if (column.children.length === 0) {
        for (var j = column.depth; j < stickyRightWidth.length; j++) {
          stickyRightWidth[j] += width;
        }
      } else {
        stickyRightWidth[column.depth] += width;
      }
      var next = nextColumn(columns, i);
      column.rightBorder = !(next && next.locked);
    }
  }
}
function isRtl(element2) {
  return Boolean(element2 && getComputedStyle(element2).direction === "rtl");
}
function getIndex(event, parent) {
  if (!parent || !event || !event.originalEvent) {
    return -1;
  }
  var coord = { x: event.clientX, y: event.originalEvent.clientY };
  var target = parent.ownerDocument ? parent.ownerDocument.elementFromPoint(coord.x, coord.y) : null;
  while (target && target.parentElement !== parent) {
    target = target.parentElement;
  }
  if (!target && parent.matches("tr")) {
    var predicate = function(c) {
      var pos = c.getBoundingClientRect();
      return coord.x > pos.left && coord.x < pos.left + pos.width && coord.y > pos.top && coord.y < pos.top + pos.height;
    };
    target = Array.from(parent.children).find(predicate) || null;
  }
  var children = parent.children;
  for (var i = 0; i < children.length; i++) {
    if (children[i] === target) {
      return i;
    }
  }
  return -1;
}

// node_modules/@progress/kendo-react-data-tools/dist/es/drag/ColumnResizer.js
var React59 = __toESM(require_react());
var __extends28 = function() {
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
var ColumnResizer = (
  /** @class */
  function(_super) {
    __extends28(ColumnResizer2, _super);
    function ColumnResizer2() {
      var _this = _super !== null && _super.apply(this, arguments) || this;
      _this.draggable = null;
      _this.isDragged = false;
      _this.onDrag = function(data) {
        _this.isDragged = true;
        var element2 = _this.draggable && _this.draggable.element;
        if (element2) {
          _this.props.resize(data.event, element2, false);
        }
      };
      _this.onRelease = function(data) {
        if (!_this.isDragged) {
          return;
        }
        var element2 = _this.draggable && _this.draggable.element;
        if (element2) {
          _this.props.resize(data.event, element2, true);
        }
        _this.isDragged = false;
      };
      _this.onDoubleClick = function(event) {
        if (_this.isDragged) {
          return;
        }
        var element2 = _this.draggable && _this.draggable.element;
        if (element2 && _this.props.autofit) {
          _this.props.autofit(event, element2);
        }
      };
      return _this;
    }
    ColumnResizer2.prototype.render = function() {
      var _this = this;
      return React59.createElement(
        Draggable,
        { onPress: function(e) {
          e.event.originalEvent.stopPropagation();
        }, onDrag: this.onDrag, onRelease: this.onRelease, ref: function(component) {
          _this.draggable = component;
        } },
        React59.createElement("span", { className: "k-column-resizer", style: { touchAction: "none" }, draggable: false, onDoubleClick: this.onDoubleClick })
      );
    };
    return ColumnResizer2;
  }(React59.Component)
);

// node_modules/@progress/kendo-react-data-tools/dist/es/virtualization/columns.js
var __spreadArray6 = function(to, from, pack) {
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
function tableColumnsVirtualization(args) {
  var enabled = args.enabled, _a14 = args.columns, columns = _a14 === void 0 ? [] : _a14, tableViewPortWidth = args.tableViewPortWidth, scrollLeft = args.scrollLeft;
  var colSpans = columns.map(function() {
    return 1;
  });
  var hiddenColumns = columns.map(function() {
    return false;
  });
  if (!enabled) {
    return { colSpans, hiddenColumns };
  }
  var widths = columns.map(function(c) {
    return parseFloat((c.width || "").toString()) || 10;
  });
  var widthOfHiddenColumns = 0;
  for (var i = 0; i < columns.length; i++) {
    if (columns[i].locked) {
      continue;
    }
    var considerNext = i < widths.length - 1 ? widths[i + 1] : 0;
    if (widthOfHiddenColumns + widths[i] + considerNext < scrollLeft) {
      hiddenColumns[i] = true;
      widthOfHiddenColumns += widths[i];
    } else {
      break;
    }
  }
  var totalWidth = widths.reduce(function(acc, current) {
    return acc + current;
  }, 0);
  widthOfHiddenColumns = 0;
  for (var i = columns.length - 1; i >= 0; i--) {
    if (columns[i].locked) {
      continue;
    }
    if (widthOfHiddenColumns + 2 * widths[i] < totalWidth - tableViewPortWidth - scrollLeft) {
      hiddenColumns[i] = true;
      widthOfHiddenColumns += widths[i];
    } else {
      break;
    }
  }
  var hiddenCols = __spreadArray6([], hiddenColumns, true);
  var hidden = function(value) {
    return value;
  };
  var lastVisible = hiddenCols.lastIndexOf(false);
  var anyHidden = hiddenCols.some(hidden);
  var allHidden = hiddenCols.every(hidden);
  var hiddenSeqLength;
  var updateIndex;
  while (anyHidden && hiddenCols.length && (lastVisible !== -1 || allHidden)) {
    if (lastVisible < hiddenCols.length - 1) {
      hiddenSeqLength = allHidden ? hiddenCols.length : hiddenCols.length - lastVisible - 1;
      updateIndex = hiddenCols.length - hiddenSeqLength;
      if (updateIndex === 0) {
        updateIndex = hiddenSeqLength - 1;
      }
      hiddenColumns[updateIndex] = false;
      colSpans[updateIndex] = hiddenSeqLength;
      hiddenCols.splice(lastVisible + 1, hiddenSeqLength);
    }
    while (hiddenCols.length && !hiddenCols[hiddenCols.length - 1]) {
      hiddenCols.pop();
    }
    lastVisible = hiddenCols.lastIndexOf(false);
    anyHidden = hiddenCols.some(hidden);
    allHidden = hiddenCols.every(hidden);
  }
  return { colSpans, hiddenColumns };
}

// node_modules/@progress/kendo-react-data-tools/dist/es/drag/DragClue.js
var React60 = __toESM(require_react());
var import_react_dom = __toESM(require_react_dom());
var __extends29 = function() {
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
var DragClue = (
  /** @class */
  function(_super) {
    __extends29(DragClue2, _super);
    function DragClue2(props) {
      var _this = _super.call(this, props) || this;
      _this.elementRef = React60.createRef();
      _this.state = {
        visible: false,
        top: 0,
        left: 0,
        innerText: "",
        status: "k-i-cancel"
      };
      _this.hiddenElementRef = React60.createRef();
      return _this;
    }
    Object.defineProperty(DragClue2.prototype, "element", {
      get: function() {
        return this.elementRef.current;
      },
      enumerable: false,
      configurable: true
    });
    DragClue2.prototype.render = function() {
      var hiddenElement = this.hiddenElementRef.current;
      var status = this.state.status;
      var dragClue = this.state.visible && canUseDOM && (0, import_react_dom.createPortal)(React60.createElement(
        "div",
        { ref: this.elementRef, className: "k-header k-drag-clue", style: {
          display: "block",
          position: "absolute",
          zIndex: 2e4,
          padding: "8px 12px",
          top: this.state.top + "px",
          left: this.state.left + "px"
        } },
        React60.createElement(IconWrap, { className: "k-drag-status", name: status, icon: status === "k-i-cancel" ? cancelIcon : plusIcon }),
        this.state.innerText
      ), hiddenElement && hiddenElement.ownerDocument ? hiddenElement.ownerDocument.body : document.body);
      return React60.createElement(
        React60.Fragment,
        null,
        dragClue,
        React60.createElement("div", { ref: this.hiddenElementRef, style: { display: "none" } })
      );
    };
    return DragClue2;
  }(React60.PureComponent)
);

// node_modules/@progress/kendo-react-data-tools/dist/es/drag/DropClue.js
var React61 = __toESM(require_react());
var import_react_dom2 = __toESM(require_react_dom());
var __extends30 = function() {
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
var DropClue = (
  /** @class */
  function(_super) {
    __extends30(DropClue2, _super);
    function DropClue2(props) {
      var _this = _super.call(this, props) || this;
      _this.state = {
        height: 0,
        visible: false,
        left: 0,
        top: 0
      };
      _this.hiddenElementRef = React61.createRef();
      return _this;
    }
    DropClue2.prototype.render = function() {
      var hiddenElement = this.hiddenElementRef.current;
      var dropClue = this.state.visible && canUseDOM && (0, import_react_dom2.createPortal)(React61.createElement("div", { className: "k-grouping-dropclue", style: {
        zIndex: 1e4,
        display: "block",
        top: this.state.top + "px",
        left: this.state.left + "px",
        height: this.state.height + "px"
      } }), hiddenElement && hiddenElement.ownerDocument ? hiddenElement.ownerDocument.body : document.body);
      return React61.createElement(
        React61.Fragment,
        null,
        dropClue,
        React61.createElement("div", { ref: this.hiddenElementRef, style: { display: "none" } })
      );
    };
    return DropClue2;
  }(React61.PureComponent)
);

// node_modules/@progress/kendo-react-data-tools/dist/es/navigation/TableKeyboardNavigation.js
var __spreadArray7 = function(to, from, pack) {
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
var onConstructor = function(options) {
  var navigatable = options.navigatable, contextStateRef = options.contextStateRef, navigationStateRef = options.navigationStateRef, idPrefix = options.idPrefix;
  if (navigatable) {
    contextStateRef.current = {
      activeId: "",
      level: 0
    };
    navigationStateRef.current = {
      activeElementIsFocused: false,
      prevNavigationIndexes: void 0,
      idPrefix: idPrefix || guid(),
      navigationMatrix: [],
      lastHeaderIndex: -1
    };
  }
};
var onComponentDidMount = function(options) {
  var scope = options.scope, contextStateRef = options.contextStateRef, navigationStateRef = options.navigationStateRef;
  if (contextStateRef.current && navigationStateRef.current && scope) {
    generateMatrix(options);
    var firstId = navigationStateRef.current.navigationMatrix[0][0];
    var firstIdElement = tableKeyboardNavigationTools.getActiveElement(scope, firstId);
    if (firstId && firstIdElement) {
      contextStateRef.current.activeId = firstId;
      firstIdElement.setAttribute("tabIndex", "0");
    }
  }
};
var onGetSnapshotBeforeUpdate = function(options) {
  var contextStateRef = options.contextStateRef, navigationStateRef = options.navigationStateRef, currentDocument = options.document;
  if (contextStateRef.current && navigationStateRef.current && currentDocument) {
    var activeElement = getActiveElement(currentDocument);
    var activeId = tableKeyboardNavigationTools.getNavigatableId(activeElement);
    if (activeId && activeId === contextStateRef.current.activeId) {
      navigationStateRef.current.activeElementIsFocused = true;
    }
  }
};
var onComponentDidUpdate = function(options) {
  var scope = options.scope, contextStateRef = options.contextStateRef, navigationStateRef = options.navigationStateRef;
  generateMatrix(options);
  if (contextStateRef.current && navigationStateRef.current && scope) {
    var activeElement = tableKeyboardNavigationTools.getActiveElement(scope, contextStateRef.current.activeId);
    if (!activeElement) {
      var firstId = navigationStateRef.current.navigationMatrix[0][0];
      var firstIdElement = tableKeyboardNavigationTools.getActiveElement(scope, firstId);
      if (firstId && firstIdElement) {
        contextStateRef.current.activeId = firstId;
        firstIdElement.setAttribute("tabIndex", "0");
        if (navigationStateRef.current.activeElementIsFocused) {
          firstIdElement.focus();
        }
      }
    }
    navigationStateRef.current.activeElementIsFocused = false;
  }
};
var onFocus = function(event, options) {
  var contextStateRef = options.contextStateRef;
  if (event.isDefaultPrevented()) {
    return;
  }
  if (!contextStateRef.current) {
    return;
  }
  var focusedElement = event.target;
  var activeId = tableKeyboardNavigationTools.getNavigatableId(focusedElement);
  if (activeId && activeId !== contextStateRef.current.activeId) {
    var scope = tableKeyboardNavigationTools.getClosestScope(focusedElement);
    if (!scope) {
      return;
    }
    var prevElement = tableKeyboardNavigationTools.getActiveElement(scope, contextStateRef.current.activeId);
    if (prevElement) {
      prevElement.setAttribute("tabIndex", "-1");
    }
    focusedElement.setAttribute("tabIndex", "0");
    contextStateRef.current.activeId = activeId;
  }
};
var onKeyDown = function(event, options) {
  var contextStateRef = options.contextStateRef, navigationStateRef = options.navigationStateRef, onNavigationAction = options.onNavigationAction;
  if (event.isDefaultPrevented()) {
    return;
  }
  if (!contextStateRef.current || !navigationStateRef.current) {
    return;
  }
  if (event.keyCode === Keys.esc) {
    var elementForFocus = tableKeyboardNavigationTools.getClosestNavigatableElement(event.target);
    tableKeyboardNavigationTools.focusElement({ elementForFocus, event, contextStateRef });
    return;
  }
  var element2 = event.target;
  var elementId = tableKeyboardNavigationTools.getNavigatableId(element2);
  var dataLevel = tableKeyboardNavigationTools.getNavigatableLevel(element2);
  var scope = tableKeyboardNavigationTools.getClosestScope(element2);
  var matrix = navigationStateRef.current.navigationMatrix;
  if (dataLevel !== void 0 && scope) {
    if (event.keyCode === Keys.enter) {
      var navigatableElement = tableKeyboardNavigationTools.getNavigatableElement(element2, { level: dataLevel + 1 });
      if (navigatableElement) {
        tableKeyboardNavigationTools.focusElement({
          elementForFocus: navigatableElement,
          event,
          contextStateRef,
          prevElement: element2
        });
        return;
      } else {
        var elementForFocus = tableKeyboardNavigationTools.getFocusableElements(element2)[0];
        tableKeyboardNavigationTools.focusElement({ elementForFocus, event, contextStateRef, prevElement: element2 });
        return;
      }
    }
    if (event.keyCode === Keys.up || event.keyCode === Keys.down || event.keyCode === Keys.left || event.keyCode === Keys.right) {
      var isReverse = event.keyCode === Keys.up || event.keyCode === Keys.left;
      var isVertical = event.keyCode === Keys.up || event.keyCode === Keys.down;
      var currentIdIndexes = void 0;
      if (navigationStateRef.current && navigationStateRef.current.prevNavigationIndexes) {
        var _a14 = navigationStateRef.current.prevNavigationIndexes, rowIndex = _a14[0], cellIndex = _a14[1];
        if (matrix[rowIndex][cellIndex] === elementId) {
          currentIdIndexes = navigationStateRef.current.prevNavigationIndexes;
        } else {
          currentIdIndexes = findId(matrix, elementId);
        }
      } else {
        currentIdIndexes = findId(matrix, elementId);
      }
      if (currentIdIndexes) {
        var rowIndex = currentIdIndexes[0], cellIndex = currentIdIndexes[1];
        var _b3 = isVertical ? findNextIdByRowIndex(rowIndex, cellIndex, elementId, matrix, isReverse) : findNextIdByCellIndex(rowIndex, cellIndex, elementId, matrix, isReverse), idForFocus = _b3[0], currentIndexes = _b3[1];
        if (idForFocus) {
          var elementForFocus = tableKeyboardNavigationTools.getActiveElement(scope, idForFocus);
          tableKeyboardNavigationTools.focusElement({ elementForFocus, event, contextStateRef, prevElement: element2 });
          navigationStateRef.current.prevNavigationIndexes = currentIndexes;
          if (onNavigationAction) {
            onNavigationAction({ focusElement: elementForFocus, event });
          }
        }
      }
    }
  }
};
var generateMatrix = function(options) {
  var navigationStateRef = options.navigationStateRef, scope = options.scope;
  if (!navigationStateRef.current || !scope) {
    return;
  }
  var matrix = [];
  var thead = getHeaderElement(scope);
  var tbody = getBodyElement(scope);
  if (!thead || !tbody) {
    return;
  }
  var headerRows = Array.from(thead.children);
  var bodyRows = Array.from(tbody.children);
  __spreadArray7(__spreadArray7([], headerRows, true), bodyRows, true).forEach(function(row, rowIndex) {
    Array.from(row.children).forEach(function(cell) {
      var cellId = getNavigatableId(cell);
      if (!cellId) {
        return;
      }
      var rowSpan = cell.rowSpan || 1;
      var cellSpan = cell.colSpan || 1;
      var cellIndex;
      for (var depth = rowIndex, maxDepth = rowIndex + rowSpan; depth < maxDepth; depth++) {
        if (!matrix[depth]) {
          matrix[depth] = [];
        }
        if (cellIndex === void 0) {
          var freeSlotIndex = matrix[depth].findIndex(function(mi) {
            return !mi;
          });
          cellIndex = freeSlotIndex > -1 ? freeSlotIndex : matrix[depth].length;
        }
        matrix[depth][cellIndex] = cellId || "";
      }
      for (var depth = cellIndex + 1, maxDepth = cellIndex + cellSpan; depth < maxDepth; depth++) {
        matrix[rowIndex][depth] = cellId || "";
      }
    });
  });
  navigationStateRef.current.navigationMatrix = matrix.filter(function(row) {
    return !!row;
  });
  navigationStateRef.current.lastHeaderIndex = headerRows.length - 1;
};
var tableKeyboardNavigation = {
  onConstructor,
  onComponentDidMount,
  onGetSnapshotBeforeUpdate,
  onComponentDidUpdate,
  onFocus,
  onKeyDown,
  generateMatrix
};

// node_modules/@progress/kendo-react-data-tools/dist/es/selection/TableSelection.js
var React62 = __toESM(require_react());
var ReactDOM = __toESM(require_react_dom());

// node_modules/@progress/kendo-react-data-tools/dist/es/selection/constants.js
var TABLE_ROW_INDEX_ATTRIBUTE = "data-grid-row-index";
var TABLE_COL_INDEX_ATTRIBUTE = "data-grid-col-index";
var TABLE_PREVENT_SELECTION_ELEMENT = "data-prevent-selection";

// node_modules/@progress/kendo-react-data-tools/dist/es/selection/utils.js
var closestTagName = function(target, tagName) {
  var currentTarget = target;
  while (currentTarget) {
    if (currentTarget.tagName === tagName) {
      return currentTarget;
    } else if (currentTarget.tagName === "TABLE") {
      return null;
    }
    currentTarget = currentTarget.parentElement;
  }
  return null;
};
var getRowIndex = function(element2) {
  if (!element2) {
    return;
  }
  var rowIndex = element2.getAttribute(TABLE_ROW_INDEX_ATTRIBUTE);
  return rowIndex ? parseInt(rowIndex, 10) : void 0;
};
var getColumnIndex = function(element2) {
  if (!element2) {
    return;
  }
  var colIndex = element2.getAttribute(TABLE_COL_INDEX_ATTRIBUTE);
  return colIndex ? parseInt(colIndex, 10) : void 0;
};
var HAS_RELATIVE_STACKING_CONTEXT = hasRelativeStackingContext();
var relativeContextElement = function(element2) {
  if (!element2 || !HAS_RELATIVE_STACKING_CONTEXT) {
    return null;
  }
  var node3 = element2.parentElement;
  while (node3) {
    if (window.getComputedStyle(node3).transform !== "none") {
      return node3;
    }
    node3 = node3.parentElement;
  }
};
var getOffset = function(offsetParent) {
  if (offsetParent && offsetParent.ownerDocument) {
    if (offsetParent !== offsetParent.ownerDocument.body) {
      var rect = offsetParent.getBoundingClientRect();
      return {
        left: rect.left - offsetParent.scrollLeft,
        top: rect.top - offsetParent.scrollTop
      };
    }
  }
  return { left: 0, top: 0 };
};
var getSelectionOptions = function(selectable) {
  var enabled = selectable ? typeof selectable.enabled === "boolean" ? selectable.enabled : true : false;
  var drag = selectable ? Boolean(selectable.drag) : false;
  var mode = selectable && selectable.mode ? selectable.mode : "multiple";
  var cell = Boolean(selectable && selectable.cell);
  return { enabled, drag, mode, cell };
};

// node_modules/@progress/kendo-react-data-tools/dist/es/selection/TableSelection.js
var __assign29 = function() {
  __assign29 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign29.apply(this, arguments);
};
var TableSelection = function(props) {
  var _a14;
  var onRelease = props.onRelease, childRef = props.childRef;
  var _b3 = getSelectionOptions(props.selectable), selectionEnabled = _b3.enabled, selectionDrag = _b3.drag, selectionMode = _b3.mode, selectionCell = _b3.cell;
  var draggableRef = React62.useRef(null);
  var overlayElementRef = React62.useRef(null);
  var dragStartRef = React62.useRef({ clientX: 0, clientY: 0 });
  var _c6 = React62.useState(null), overlaySettings = _c6[0], setOverlaySettings = _c6[1];
  var offsetParentRef = React62.useRef();
  var isDraggedRef = React62.useRef(false);
  var isPreventedRef = React62.useRef(false);
  var onPressHandler = React62.useCallback(function(eventData) {
    var event = eventData.event;
    isPreventedRef.current = event.originalEvent.target.hasAttribute(TABLE_PREVENT_SELECTION_ELEMENT);
    if (isPreventedRef.current || !draggableRef.current) {
      return;
    }
    offsetParentRef.current = relativeContextElement(draggableRef.current.element);
    dragStartRef.current = {
      clientY: event.clientY,
      clientX: event.clientX
    };
  }, []);
  var onDragHandler = React62.useCallback(function(eventData) {
    var event = eventData.event;
    var _a15 = dragStartRef.current, clientX = _a15.clientX, clientY = _a15.clientY;
    if (isPreventedRef.current) {
      return;
    }
    if (!selectionDrag || selectionMode === "single") {
      return;
    }
    if (Math.abs(clientY - event.clientY) > 5 || Math.abs(clientX - event.clientX) > 5) {
      isDraggedRef.current = true;
    }
    if (isDraggedRef.current) {
      var offset = getOffset(offsetParentRef.current);
      setOverlaySettings({
        top: Math.min(clientY, event.clientY) - offset.top,
        left: Math.min(clientX, event.clientX) - offset.left,
        width: Math.abs(event.clientX - clientX),
        height: Math.abs(event.clientY - clientY)
      });
    }
  }, [setOverlaySettings, selectionDrag, selectionMode]);
  var onReleaseHandler = React62.useCallback(function(eventData) {
    var event = eventData.event;
    var _a15 = dragStartRef.current, clientX = _a15.clientX, clientY = _a15.clientY;
    if (isPreventedRef.current || !draggableRef.current) {
      return;
    }
    var currentDocument = draggableRef.current.element && draggableRef.current.element.ownerDocument;
    if (!currentDocument) {
      return;
    }
    if (!isDraggedRef.current) {
      var startElement = currentDocument.elementFromPoint(clientX, clientY);
      if (!startElement) {
        return;
      }
      var tdElement = closestTagName(startElement, "TD");
      var trElement = closestTagName(startElement, "TR");
      var colIndex = getColumnIndex(tdElement);
      var rowIndex = getRowIndex(trElement);
      if (tdElement && trElement && rowIndex !== void 0 && colIndex !== void 0) {
        onRelease({
          nativeEvent: event.originalEvent,
          startRowIndex: rowIndex,
          startColIndex: colIndex,
          endRowIndex: rowIndex,
          endColIndex: colIndex,
          altKey: event.altKey,
          shiftKey: event.shiftKey,
          ctrlKey: event.ctrlKey,
          metaKey: event.metaKey,
          mode: selectionMode,
          cell: selectionCell,
          isDrag: false
        });
      }
    } else {
      var top_1 = Math.min(clientY, event.clientY);
      var left2 = Math.min(clientX, event.clientX);
      var bottom = Math.max(clientY, event.clientY);
      var right2 = Math.max(clientX, event.clientX);
      var overlayElement = overlayElementRef.current;
      if (!overlayElement) {
        return;
      }
      overlayElement.style.visibility = "hidden";
      var startElement = currentDocument.elementFromPoint(left2, top_1);
      var endElement = currentDocument.elementFromPoint(right2, bottom);
      overlayElement.style.visibility = "";
      if (!startElement || !endElement) {
        return;
      }
      var startTdElement = closestTagName(startElement, "TD");
      var startTrElement = closestTagName(startTdElement, "TR");
      var endTdElement = closestTagName(endElement, "TD");
      var endTrElement = closestTagName(endTdElement, "TR");
      var startColIndex = getColumnIndex(startTdElement);
      var startRowIndex = getRowIndex(startTrElement);
      var endColIndex = getColumnIndex(endTdElement);
      var endRowIndex = getRowIndex(endTrElement);
      if (startColIndex !== void 0 && startRowIndex !== void 0 && endColIndex !== void 0 && endRowIndex !== void 0) {
        onRelease({
          nativeEvent: event.originalEvent,
          startRowIndex,
          startColIndex,
          endRowIndex,
          endColIndex,
          altKey: event.altKey,
          shiftKey: event.shiftKey,
          ctrlKey: event.ctrlKey,
          metaKey: event.metaKey,
          mode: selectionMode,
          cell: selectionCell,
          isDrag: true
        });
      }
    }
    setOverlaySettings(null);
    isDraggedRef.current = false;
    dragStartRef.current = { clientX: 0, clientY: 0 };
  }, [setOverlaySettings, selectionMode, selectionCell, onRelease]);
  var getDocument3 = useDocument(overlayElementRef);
  if (!selectionEnabled) {
    return React62.cloneElement(React62.Children.only(props.children), { ref: childRef });
  }
  return React62.createElement(
    React62.Fragment,
    null,
    React62.createElement(Draggable, { onPress: onPressHandler, onDrag: onDragHandler, onRelease: onReleaseHandler, ref: draggableRef, childRef }, props.children),
    overlaySettings && ReactDOM.createPortal(React62.createElement("div", { ref: overlayElementRef, style: __assign29(__assign29({}, overlaySettings), { position: "fixed" }), className: "k-marquee k-marquee-color" }), (_a14 = getDocument3()) === null || _a14 === void 0 ? void 0 : _a14.body)
  );
};

// node_modules/@progress/kendo-react-grid/dist/es/cells/GridSelectionCell.js
var React63 = __toESM(require_react());

// node_modules/@progress/kendo-react-grid/dist/es/GridColumn.js
var PropTypes26 = __toESM(require_prop_types());
var GridColumn = function(_) {
  return null;
};
GridColumn.displayName = "KendoReactGridColumn";
GridColumn.defaultProps = {
  filterable: true,
  editable: true,
  sortable: true,
  resizable: true,
  reorderable: true,
  groupable: true
};
GridColumn.propTypes = {
  field: PropTypes26.string,
  title: PropTypes26.string,
  editable: PropTypes26.bool,
  sortable: PropTypes26.oneOfType([
    PropTypes26.bool,
    PropTypes26.shape({
      allowUnsort: PropTypes26.bool.isRequired
    })
  ]),
  cell: PropTypes26.any,
  filterCell: PropTypes26.any,
  filterTitle: PropTypes26.string,
  filterable: PropTypes26.bool,
  filter: PropTypes26.oneOf(["text", "numeric", "boolean", "date"]),
  editor: PropTypes26.oneOf(["text", "numeric", "boolean", "date"]),
  width: PropTypes26.oneOfType([PropTypes26.string, PropTypes26.number]),
  minResizableWidth: PropTypes26.number,
  headerCell: PropTypes26.any,
  footerCell: PropTypes26.any,
  headerSelectionValue: PropTypes26.bool,
  format: PropTypes26.string,
  headerClassName: PropTypes26.string,
  className: PropTypes26.string,
  reorderable: PropTypes26.bool,
  resizable: PropTypes26.bool,
  orderIndex: PropTypes26.number,
  groupable: PropTypes26.bool,
  columnMenu: PropTypes26.any,
  locked: PropTypes26.bool
};

// node_modules/@progress/kendo-react-grid/dist/es/utils/index.js
var __assign30 = function() {
  __assign30 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign30.apply(this, arguments);
};
var __rest11 = function(s, e) {
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
function getNestedValue(fieldName, dataItem) {
  var path = (fieldName || "").split(".");
  var data = dataItem;
  path.forEach(function(p) {
    data = data ? data[p] : void 0;
  });
  return data;
}
function flatData(output, input, footer, dataIndex, groupDefined, field, level) {
  if (level === void 0) {
    level = 0;
  }
  var maxLevel = level;
  for (var i = 0; i < input.length; i++) {
    if (!groupDefined || input[i].value === void 0 || input[i].items === void 0) {
      output[output.length] = {
        dataIndex: dataIndex.index,
        dataItem: input[i],
        rowType: "data",
        level,
        expanded: field === void 0 || getNestedValue(field, input[i])
      };
      dataIndex.index++;
      continue;
    }
    maxLevel = Math.max(maxLevel, level + 1);
    var expanded = field === void 0 || getNestedValue(field, input[i]) === void 0 || getNestedValue(field, input[i]);
    output[output.length] = {
      dataIndex: -1,
      dataItem: input[i],
      level,
      rowType: "groupHeader",
      expanded
    };
    if (expanded) {
      maxLevel = Math.max(flatData(output, input[i].items, footer, dataIndex, groupDefined, field, level + 1), maxLevel);
    }
    if (footer === "always" || expanded && footer === "visible") {
      output[output.length] = {
        dataIndex: -1,
        dataItem: input[i],
        rowType: "groupFooter",
        level,
        expanded
      };
    }
  }
  return maxLevel;
}
function readColumns(elements, oldColumns, idInfo, depth) {
  if (depth === void 0) {
    depth = 0;
  }
  var columns = [];
  if (!elements) {
    return [];
  }
  if (elements && elements.length === void 0) {
    elements = [elements];
  }
  elements.forEach(function(columnProps, index) {
    columnProps = columnProps.props ? columnProps.props : columnProps;
    var oldColumn = oldColumns[index] || null;
    var children = readColumns(columnProps.children, oldColumn && oldColumn.children || [], idInfo, depth + 1);
    columns.push(Object.assign({ depth }, GridColumn.defaultProps, children.length ? { cell: function() {
      return null;
    }, filterCell: function() {
      return null;
    } } : {}, oldColumn ? { width: oldColumn.width, orderIndex: oldColumn.orderIndex } : {}, columnProps, {
      id: columnProps.id ? columnProps.id : tableKeyboardNavigationTools.generateNavigatableId("".concat(idInfo.prevId++), idInfo.idPrefix, "column"),
      declarationIndex: columns.length,
      children,
      rowSpan: 0,
      colSpan: 0,
      isAccessible: true,
      left: oldColumn && Math.floor(oldColumn.left),
      right: oldColumn && Math.floor(oldColumn.right)
    }));
  });
  var comparator = function(a, b) {
    return a.orderIndex === b.orderIndex ? a.declarationIndex - b.declarationIndex : (a.orderIndex || 0) - (b.orderIndex || 0);
  };
  columns.sort(comparator);
  if (depth === 0) {
    var ret_1 = [];
    var flat_1 = function(cols, pIndex) {
      return cols.forEach(function(c) {
        c.parentIndex = pIndex;
        flat_1(c.children, ret_1.push(c) - 1);
      });
    };
    flat_1(columns, -1);
    return ret_1;
  }
  return columns;
}
function autoGenerateColumns(data, group, expandField, idInfo) {
  var propData = [];
  if (Array.isArray(data)) {
    propData = data;
  } else if (data) {
    propData = data.data;
  }
  var columns = [];
  if (propData.length > 0) {
    var itemForColumnsGen = propData[0];
    if (group) {
      for (var i = 0; i < group.length; i++) {
        itemForColumnsGen = itemForColumnsGen.items && itemForColumnsGen.items[0];
      }
    }
    var fields = Object.getOwnPropertyNames(itemForColumnsGen);
    fields.forEach(function(field) {
      if (field !== expandField) {
        columns.push(Object.assign({
          id: tableKeyboardNavigationTools.generateNavigatableId("".concat(idInfo.prevId++), idInfo.idPrefix, "column"),
          declarationIndex: -1,
          parentIndex: -1,
          depth: 0,
          colSpan: 0,
          rowSpan: 0,
          index: 0,
          left: 0,
          right: 0,
          rightBorder: false,
          children: [],
          ariaColumnIndex: 0,
          isAccessible: true
        }, GridColumn.defaultProps, { field }));
      }
    });
  }
  return columns;
}
var hasParentFooterCell = function(columns, column) {
  var parent = columns[column.parentIndex];
  while (parent) {
    if (parent.footerCell) {
      return true;
    }
    parent = columns[parent.parentIndex];
  }
  return false;
};
var footerColumns = function(columns) {
  return columns.filter(function(column) {
    if (hasParentFooterCell(columns, column)) {
      return false;
    }
    return Boolean(column.footerCell) || !(column.children && column.children.length > 0);
  });
};
var getColumnWidth2 = function(column) {
  return column.width !== void 0 ? Math.floor(parseFloat(column.width.toString())) + "px" : void 0;
};
var sanitizeColumns = function(columns) {
  columns.sort(function(a, b) {
    return a.declarationIndex - b.declarationIndex;
  });
  return columns.map(function(column) {
    var declarationIndex = column.declarationIndex, parentIndex = column.parentIndex, depth = column.depth, colSpan = column.colSpan, rowSpan = column.rowSpan, index = column.index, kFirst = column.kFirst, children = column.children, props = __rest11(column, ["declarationIndex", "parentIndex", "depth", "colSpan", "rowSpan", "index", "kFirst", "children"]);
    return children.length ? __assign30({ children: sanitizeColumns(children) }, props) : props;
  });
};
var firefox = typeof window !== "undefined" && /Firefox/.test(window.navigator.userAgent);
var firefoxMaxHeight = 17895697;
var resolveCells = function(gridCells, columnCells) {
  if (!gridCells && !columnCells) {
    return void 0;
  }
  if (!columnCells) {
    return gridCells;
  }
  if (!gridCells) {
    return columnCells;
  }
  return __assign30(__assign30(__assign30({}, gridCells), columnCells), { select: __assign30(__assign30({}, gridCells.select || {}), columnCells.select || {}), hierarchy: __assign30(__assign30({}, gridCells.hierarchy || {}), columnCells.hierarchy || {}), group: __assign30(__assign30({}, gridCells.group || {}), columnCells.group || {}), edit: __assign30(__assign30({}, gridCells.edit || {}), columnCells.edit || {}) });
};

// node_modules/@progress/kendo-react-grid/dist/es/cells/GridSelectionCell.js
var __assign31 = function() {
  __assign31 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign31.apply(this, arguments);
};
var GridSelectionCell = function(props) {
  var _a14;
  var handleOnChange = React63.useCallback(function(syntheticEvent) {
    if (props.selectionChange) {
      props.selectionChange({ syntheticEvent });
    }
  }, [props.selectionChange]);
  var inputId = React63.useMemo(function() {
    return guid();
  }, []);
  var selectedValue = getNestedValue(props.field, props.dataItem);
  var navigationAttributes = useTableKeyboardNavigation(props.id);
  var tdProps = __assign31((_a14 = { colSpan: props.colSpan, style: props.style, className: props.className }, _a14["aria-colindex"] = props.ariaColumnIndex, _a14.role = "gridcell", _a14), navigationAttributes);
  var content = [
    React63.createElement("input", { key: "1", checked: typeof selectedValue === "boolean" && selectedValue, id: inputId, type: "checkbox", className: "k-checkbox k-checkbox-md k-rounded-md", onChange: handleOnChange }),
    React63.createElement("label", { className: "k-checkbox-label", htmlFor: inputId, key: "2" })
  ];
  var defaultRendering = props.rowType !== "groupHeader" ? React63.createElement("td", __assign31({}, tdProps), content) : null;
  var rowTypeSetting = props.rowType || "data";
  var customCells = props.cells;
  if (customCells && customCells.select && customCells.select[rowTypeSetting]) {
    var CustomCell = customCells.select[rowTypeSetting];
    return React63.createElement(CustomCell, __assign31({}, props, { tdProps }), content);
  }
  return props.render ? props.render.call(void 0, defaultRendering, props) : defaultRendering;
};

// node_modules/@progress/kendo-react-grid/dist/es/cells/GridHierarchyCell.js
var React64 = __toESM(require_react());

// node_modules/@progress/kendo-react-grid/dist/es/messages/index.js
var _a13;
var noRecords = "grid.noRecords";
var pagerInfo2 = "grid.pagerInfo";
var pagerFirstPage2 = "grid.pagerFirstPage";
var pagerPreviousPage2 = "grid.pagerPreviousPage";
var pagerNextPage2 = "grid.pagerNextPage";
var pagerLastPage2 = "grid.pagerLastPage";
var pagerItemPerPage2 = "grid.pagerItemsPerPage";
var pagerPage2 = "grid.pagerPage";
var pagerPageSizeAriaLabel2 = "grid.pagerPageSizeAriaLabel";
var pagerOf2 = "grid.pagerOf";
var pagerTotalPages2 = "grid.pagerTotalPages";
var groupPanelEmpty = "grid.groupPanelEmpty";
var groupColumn = "grid.groupColumn";
var ungroupColumn = "grid.ungroupColumn";
var columnMenu = "grid.columnMenu";
var filterClearButton = "grid.filterClearButton";
var filterSubmitButton = "grid.filterSubmitButton";
var filterTitle = "grid.filterTitle";
var sortAscending = "grid.sortAscending";
var sortDescending = "grid.sortDescending";
var searchPlaceholder = "grid.searchPlaceholder";
var filterCheckAll = "grid.filterCheckAll";
var filterChooseOperator = "grid.filterChooseOperator";
var filterSelectedItems = "grid.filterSelectedItems";
var sortAriaLabel2 = "grid.sortAriaLabel";
var filterAriaLabel2 = "grid.filterAriaLabel";
var groupPanelAriaLabel = "grid.groupPanelAriaLabel";
var groupExpand = "grid.groupExpand";
var groupCollapse = "grid.groupCollapse";
var detailExpand = "grid.detailExpand";
var detailCollapse = "grid.detailCollapse";
var messages6 = (_a13 = {}, _a13[detailExpand] = "Expand detail row", _a13[detailCollapse] = "Collapse detail row", _a13[groupExpand] = "Expand group", _a13[groupCollapse] = "Collapse Group", _a13[noRecords] = "No records available", _a13[groupPanelEmpty] = "Drag a column header and drop it here to group by that column", _a13[filterClearButton] = "Clear", _a13[filterSubmitButton] = "Filter", _a13[filterTitle] = "Filter", _a13[sortAscending] = "Sort Ascending", _a13[sortDescending] = "Sort Descending", _a13[sortAriaLabel2] = "Sortable", _a13[groupColumn] = "Group Column", _a13[ungroupColumn] = "Ungroup Column", _a13[columnMenu] = "Column menu", _a13[pagerItemPerPage2] = "items per page", _a13[pagerInfo2] = "{0} - {1} of {2} items", _a13[pagerFirstPage2] = "Go to the first page", _a13[pagerPreviousPage2] = "Go to the previous page", _a13[pagerNextPage2] = "Go to the next page", _a13[pagerLastPage2] = "Go to the last page", _a13[pagerPage2] = "Page", _a13[pagerPageSizeAriaLabel2] = "Page size", _a13[pagerOf2] = "of", _a13[pagerTotalPages2] = "{0}", _a13[searchPlaceholder] = "Search", _a13[filterCheckAll] = "Check All", _a13[filterChooseOperator] = "Choose Operator", _a13[filterSelectedItems] = "selected items", _a13[filterAriaLabel2] = "Filter", _a13[groupPanelAriaLabel] = "Group panel", _a13["grid.filterEqOperator"] = "Is equal to", _a13["grid.filterNotEqOperator"] = "Is not equal to", _a13["grid.filterIsNullOperator"] = "Is null", _a13["grid.filterIsNotNullOperator"] = "Is not null", _a13["grid.filterIsEmptyOperator"] = "Is empty", _a13["grid.filterIsNotEmptyOperator"] = "Is not empty", _a13["grid.filterStartsWithOperator"] = "Starts with", _a13["grid.filterContainsOperator"] = "Contains", _a13["grid.filterNotContainsOperator"] = "Does not contain", _a13["grid.filterEndsWithOperator"] = "Ends with", _a13["grid.filterGteOperator"] = "Is greater than or equal to", _a13["grid.filterGtOperator"] = "Is greater than", _a13["grid.filterLteOperator"] = "Is less than or equal to", _a13["grid.filterLtOperator"] = "Is less than", _a13["grid.filterIsTrue"] = "Is true", _a13["grid.filterIsFalse"] = "Is false", _a13["grid.filterBooleanAll"] = "(All)", _a13["grid.filterAfterOrEqualOperator"] = "Is after or equal to", _a13["grid.filterAfterOperator"] = "Is after", _a13["grid.filterBeforeOperator"] = "Is before", _a13["grid.filterBeforeOrEqualOperator"] = "Is before or equal to", _a13["grid.filterAndLogic"] = "And", _a13["grid.filterOrLogic"] = "Or", _a13);
function pagerMessagesMap(pagerMessageKey) {
  var messageKey = pagerMessageKey.replace(/^pager\.([a-z])/, function(_match, group) {
    return "grid.pager" + group.toUpperCase();
  });
  return { messageKey, defaultMessage: messages6[messageKey] };
}

// node_modules/@progress/kendo-react-grid/dist/es/cells/GridHierarchyCell.js
var __assign32 = function() {
  __assign32 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign32.apply(this, arguments);
};
var GridHierarchyCell = function(props) {
  var defaultRendering = null;
  var tdProps = null;
  var content = null;
  var expanded = getNestedValue(props.field, props.dataItem);
  var navigationAttributes = useTableKeyboardNavigation(props.id);
  var localization = useLocalization();
  var onKeyDownHandler = React64.useCallback(function(event) {
    if (event.isDefaultPrevented()) {
      return;
    }
    if (event.keyCode === Keys.enter && props.onChange) {
      event.preventDefault();
      props.onChange({
        dataItem: props.dataItem,
        dataIndex: props.dataIndex,
        syntheticEvent: event,
        field: props.field,
        value: !expanded
      });
    }
  }, [props.dataItem, props.dataIndex, props.field, props.onChange, expanded]);
  if (props.rowType === "groupFooter") {
    tdProps = __assign32({ className: "k-table-td k-hierarchy-cell", role: "gridcell" }, navigationAttributes);
    defaultRendering = React64.createElement("td", __assign32({}, tdProps));
  } else if (props.rowType !== "groupHeader") {
    var baseMessage = expanded ? detailCollapse : detailExpand;
    var message = localization.toLanguageString(baseMessage, messages6[baseMessage]);
    tdProps = __assign32({ className: "k-table-td k-hierarchy-cell", onKeyDown: onKeyDownHandler, "aria-expanded": expanded ? true : false, role: "gridcell", "aria-colindex": props.ariaColumnIndex }, navigationAttributes);
    content = React64.createElement(
      "a",
      { onClick: function(e) {
        e.preventDefault();
        if (props.onChange) {
          props.onChange({
            dataItem: props.dataItem,
            dataIndex: props.dataIndex,
            syntheticEvent: e,
            field: props.field,
            value: !expanded
          });
        }
      }, "aria-label": message, href: "#", tabIndex: -1 },
      React64.createElement(IconWrap, { name: expanded ? "minus" : "plus", icon: expanded ? minusIcon : plusIcon })
    );
    defaultRendering = React64.createElement("td", __assign32({}, tdProps), content);
  }
  var rowTypeSetting = props.rowType || "data";
  var customCells = props.cells;
  if (customCells && customCells.hierarchy && customCells.hierarchy[rowTypeSetting]) {
    var CustomCell = customCells.hierarchy[rowTypeSetting];
    return React64.createElement(CustomCell, __assign32({}, props, { tdProps }), content);
  }
  return props.render ? props.render.call(void 0, defaultRendering, props) : defaultRendering;
};

// node_modules/@progress/kendo-react-grid/dist/es/cells/GridEditCell.js
var React65 = __toESM(require_react());

// node_modules/@progress/kendo-react-grid/dist/es/constants/index.js
var GRID_ROW_INDEX_ATTRIBUTE = TABLE_ROW_INDEX_ATTRIBUTE;
var GRID_COL_INDEX_ATTRIBUTE = TABLE_COL_INDEX_ATTRIBUTE;

// node_modules/@progress/kendo-react-grid/dist/es/cells/GridEditCell.js
var __assign33 = function() {
  __assign33 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign33.apply(this, arguments);
};
var GridEditCell = function(props) {
  var _a14, _b3, _c6, _d, _e;
  var data = getNestedValue(props.field, props.dataItem);
  var defaultRendering = null;
  var editCellClasses = classNames("k-table-td", "k-grid-edit-cell", (_a14 = {}, _a14["k-selected"] = props.isSelected, _a14), props.className);
  var inputId = React65.useMemo(function() {
    return guid();
  }, []);
  var navigationAttributes = useTableKeyboardNavigation(props.id);
  var tdProps = null;
  var content = null;
  var handleOnChange = React65.useCallback(function(syntheticEvent) {
    if (props.onChange) {
      var value = syntheticEvent.target.type === "checkbox" ? syntheticEvent.target.checked : syntheticEvent.target.value;
      props.onChange({
        dataItem: props.dataItem,
        dataIndex: props.dataIndex,
        field: props.field,
        syntheticEvent,
        value
      });
    }
  }, [props.onChange, props.dataItem, props.dataIndex, props.field]);
  var onContextMenu = React65.useCallback(function(event) {
    if (props.onContextMenu) {
      props.onContextMenu.call(void 0, event, props.dataItem, props.field);
    }
  }, [props.onContextMenu, props.dataItem, props.field]);
  var inputChange = React65.useCallback(function(e) {
    if (props.onChange) {
      props.onChange({
        dataItem: props.dataItem,
        dataIndex: props.dataIndex,
        field: props.field,
        syntheticEvent: e.syntheticEvent,
        value: e.value
      });
    }
  }, [props.onChange, props.dataItem, props.dataIndex, props.field]);
  switch (props.editor) {
    case "numeric":
      tdProps = __assign33((_b3 = { onContextMenu, colSpan: props.colSpan, style: props.style, className: editCellClasses }, _b3["aria-colindex"] = props.ariaColumnIndex, _b3["aria-selected"] = props.isSelected, _b3[GRID_COL_INDEX_ATTRIBUTE] = props.columnIndex, _b3.role = "gridcell", _b3), navigationAttributes);
      content = React65.createElement(NumericTextBox, { width: "100%", value: data === void 0 ? null : data, onChange: inputChange });
      defaultRendering = React65.createElement("td", __assign33({}, tdProps), content);
      break;
    case "date":
      tdProps = __assign33((_c6 = { onContextMenu, colSpan: props.colSpan, style: props.style, className: editCellClasses }, _c6["aria-colindex"] = props.ariaColumnIndex, _c6["aria-selected"] = props.isSelected, _c6[GRID_COL_INDEX_ATTRIBUTE] = props.columnIndex, _c6.role = "gridcell", _c6), navigationAttributes);
      content = React65.createElement(DatePicker, { width: "100%", value: data, onChange: inputChange });
      defaultRendering = React65.createElement("td", __assign33({}, tdProps), content);
      break;
    case "boolean":
      tdProps = __assign33((_d = { onContextMenu, colSpan: props.colSpan, style: props.style, className: editCellClasses }, _d["aria-colindex"] = props.ariaColumnIndex, _d["aria-selected"] = props.isSelected, _d[GRID_COL_INDEX_ATTRIBUTE] = props.columnIndex, _d.role = "gridcell", _d), navigationAttributes);
      content = [
        React65.createElement("input", { checked: data || false, id: inputId, type: "checkbox", className: "k-checkbox k-checkbox-md k-rounded-md", onChange: handleOnChange, key: 1 }),
        React65.createElement("label", { className: "k-checkbox-label", htmlFor: inputId, key: 2 })
      ];
      defaultRendering = React65.createElement("td", __assign33({}, tdProps), content);
      break;
    default:
      tdProps = __assign33((_e = { onContextMenu, colSpan: props.colSpan, style: props.style, className: editCellClasses }, _e["aria-colindex"] = props.ariaColumnIndex, _e["aria-selected"] = props.isSelected, _e[GRID_COL_INDEX_ATTRIBUTE] = props.columnIndex, _e.role = "gridcell", _e), navigationAttributes);
      content = React65.createElement("input", { style: { width: "100%" }, className: "k-input", value: data || "", onChange: handleOnChange });
      defaultRendering = React65.createElement("td", __assign33({}, tdProps), content);
  }
  var editorSetting = props.editor || "text";
  var customCells = props.cells;
  if (customCells && customCells.edit && customCells.edit[editorSetting]) {
    var CustomCell = customCells.edit[editorSetting];
    return React65.createElement(CustomCell, __assign33({}, props, { tdProps }), content);
  }
  return props.render ? props.render.call(void 0, defaultRendering, props) : defaultRendering;
};

// node_modules/@progress/kendo-react-grid/dist/es/header/Header.js
var React66 = __toESM(require_react());
var __extends31 = function() {
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
var __assign34 = function() {
  __assign34 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign34.apply(this, arguments);
};
var Header2 = (
  /** @class */
  function(_super) {
    __extends31(Header3, _super);
    function Header3() {
      var _this = _super !== null && _super.apply(this, arguments) || this;
      _this.headerWrap = null;
      _this.table = null;
      _this.syncScroll = false;
      _this.scrollbarWidth = getScrollbarWidth();
      _this.onScroll = function(_event) {
        if (_this.syncScroll) {
          _this.syncScroll = false;
          return;
        }
        if (!_this.headerWrap) {
          return;
        }
        var scrollLeft = _this.headerWrap.scrollLeft;
        var scrollableDataElement = _this.props.scrollableDataElement();
        if (scrollableDataElement && scrollableDataElement.scrollLeft !== scrollLeft) {
          scrollableDataElement.scrollLeft = scrollLeft;
        }
      };
      return _this;
    }
    Object.defineProperty(Header3.prototype, "element", {
      get: function() {
        return this.props.elemRef.current;
      },
      enumerable: false,
      configurable: true
    });
    Header3.prototype.componentDidMount = function() {
      var rtl = isRtl(this.element);
      if (this.props.columnResize) {
        this.props.columnResize.setIsRtl(rtl);
      }
      this.forceUpdate();
    };
    Header3.prototype.setScrollLeft = function(scrollLeft) {
      if (this.headerWrap && this.headerWrap.scrollLeft !== scrollLeft) {
        this.syncScroll = true;
        this.headerWrap.scrollLeft = scrollLeft;
      }
    };
    Header3.prototype.setWidth = function(width) {
      if (this.table) {
        this.table.style.width = width + "px";
      }
    };
    Header3.prototype.render = function() {
      var _a14;
      var _this = this;
      if (!this.props.staticHeaders) {
        return React66.createElement(
          "thead",
          __assign34({ role: "presentation", className: classNames("k-table-thead", { "k-grid-draggable-header": this.props.draggable }) }, tableKeyboardNavigationHeaderAttributes),
          this.props.headerRow,
          this.props.filterRow
        );
      }
      return React66.createElement(
        "div",
        { ref: this.props.elemRef, className: classNames("k-grid-header", { "k-grid-draggable-header": this.props.draggable }), role: "presentation" },
        React66.createElement(
          "div",
          { ref: function(div) {
            _this.headerWrap = div;
          }, className: "k-grid-header-wrap", style: this.scrollbarWidth ? {} : { borderWidth: 0 }, onScroll: this.onScroll, role: "presentation" },
          React66.createElement(
            "table",
            { ref: function(table) {
              _this.table = table;
            }, className: classNames("k-table k-grid-header-table", (_a14 = {
              "k-table-md": !this.props.size
            }, _a14["k-table-".concat(kendoThemeMaps.sizeMap[this.props.size] || this.props.size)] = this.props.size, _a14), this.props.className), role: "presentation" },
            React66.createElement("colgroup", { ref: function(e) {
              _this.props.columnResize.colGroupHeader = e;
            } }, this.props.cols),
            React66.createElement(
              "thead",
              __assign34({ className: "k-table-thead", role: "rowgroup" }, tableKeyboardNavigationHeaderAttributes),
              this.props.headerRow,
              this.props.filterRow
            )
          )
        )
      );
    };
    return Header3;
  }(React66.Component)
);

// node_modules/@progress/kendo-react-grid/dist/es/header/HeaderRow.js
var React70 = __toESM(require_react());

// node_modules/@progress/kendo-react-grid/dist/es/interfaces/GridSortSettings.js
var __spreadArray8 = function(to, from, pack) {
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
var normalize3 = function() {
  var settings = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    settings[_i] = arguments[_i];
  }
  return Object.assign.apply(Object, __spreadArray8([{ allowUnsort: true, mode: "single" }], settings, false));
};

// node_modules/@progress/kendo-react-grid/dist/es/drag/ColumnDraggable.js
var React67 = __toESM(require_react());
var __extends32 = function() {
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
var ColumnDraggable = (
  /** @class */
  function(_super) {
    __extends32(ColumnDraggable2, _super);
    function ColumnDraggable2() {
      var _this = _super !== null && _super.apply(this, arguments) || this;
      _this.draggable = null;
      _this.onPress = function(data) {
        var element2 = _this.draggable && _this.draggable.element;
        if (element2 && _this.props.pressHandler) {
          _this.props.pressHandler(data.event, element2);
        }
      };
      _this.onDrag = function(data) {
        var element2 = _this.draggable && _this.draggable.element;
        if (element2 && _this.props.dragHandler) {
          _this.props.dragHandler(data.event, element2);
        }
      };
      _this.onRelease = function(data) {
        var element2 = _this.draggable && _this.draggable.element;
        if (element2 && _this.props.releaseHandler) {
          _this.props.releaseHandler(data.event);
        }
      };
      return _this;
    }
    ColumnDraggable2.prototype.render = function() {
      var _this = this;
      return React67.createElement(
        Draggable,
        { onPress: this.onPress, onDrag: this.onDrag, onRelease: this.onRelease, hint: this.props.dragClue, autoScroll: { boundaryElementRef: this.props.headerRef, direction: { horizontal: true, vertical: false } }, scrollContainer: this.props.containerRef || void 0, ref: function(component) {
          _this.draggable = component;
        } },
        React67.createElement("tr", { className: "k-table-row", style: { touchAction: "none" }, role: "row", "aria-rowindex": this.props.ariaRowIndex }, this.props.children)
      );
    };
    return ColumnDraggable2;
  }(React67.PureComponent)
);

// node_modules/@progress/kendo-react-grid/dist/es/header/GridHeaderCell.js
var React69 = __toESM(require_react());

// node_modules/@progress/kendo-react-grid/dist/es/columnMenu/GridColumnMenuWrapper.js
var React68 = __toESM(require_react());
var __extends33 = function() {
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
var __assign35 = function() {
  __assign35 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign35.apply(this, arguments);
};
var __rest12 = function(s, e) {
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
var GridColumnMenuWrapper = (
  /** @class */
  function(_super) {
    __extends33(GridColumnMenuWrapper2, _super);
    function GridColumnMenuWrapper2() {
      var _this = _super !== null && _super.apply(this, arguments) || this;
      _this.state = {
        show: false
      };
      _this._anchor = null;
      _this._content = null;
      _this.blurTimeout = void 0;
      _this.willBlur = false;
      _this.blur = function() {
        if (_this.willBlur) {
          _this.willBlur = false;
          return;
        }
        clearTimeout(_this.blurTimeout);
        _this.blurTimeout = window.setTimeout(function() {
          _this.closeMenu();
        });
      };
      _this.focus = function() {
        clearTimeout(_this.blurTimeout);
      };
      _this.anchorClick = function(event) {
        event.preventDefault();
        _this.setState({
          show: !_this.state.show
        }, function() {
          return _this.state.show && _this._content && _this._content.focus();
        });
      };
      _this.closeMenu = function() {
        _this.setState({ show: false });
      };
      _this.onAnchorMouseDown = function(event) {
        _this.willBlur = _this.state.show && event.currentTarget === _this._anchor;
      };
      _this.onAnchorKeyDown = function(event) {
        var _a14;
        if (event.keyCode === Keys.tab) {
          var elementToFocus = event.target;
          var parentScroll = elementToFocus && ((_a14 = elementToFocus.closest(".k-grid")) === null || _a14 === void 0 ? void 0 : _a14.getElementsByClassName("k-grid-content")[0]);
          var hasHorizontalScrollbar = parentScroll && parentScroll.scrollWidth > parentScroll.clientWidth;
          if (hasHorizontalScrollbar) {
            elementToFocus.scrollIntoView({ inline: "center" });
          }
        }
      };
      return _this;
    }
    GridColumnMenuWrapper2.prototype.render = function() {
      var _this = this;
      var _a14 = this.props, ColumnMenu = _a14.columnMenu, others = __rest12(_a14, ["columnMenu"]);
      var column = this.props.column;
      var localizationService = provideLocalizationService(this);
      var fieldMessage = column.title || column.field;
      var field = fieldMessage ? "".concat(fieldMessage, " ") : "";
      return React68.createElement(
        React68.Fragment,
        null,
        React68.createElement(
          "a",
          { className: "k-grid-header-menu k-grid-column-menu", ref: function(e) {
            return _this._anchor = e;
          }, onClick: this.anchorClick, onMouseDown: this.onAnchorMouseDown, onKeyDown: this.onAnchorKeyDown, href: "#", "aria-label": "".concat(field).concat(localizationService.toLanguageString(columnMenu, messages6[columnMenu])) },
          React68.createElement(IconWrap, { name: "more-vertical", icon: moreVerticalIcon })
        ),
        React68.createElement(
          Popup,
          { anchor: this._anchor, show: this.state.show },
          React68.createElement("div", { ref: function(e) {
            return _this._content = e;
          }, className: "k-grid-columnmenu-popup", tabIndex: 0, onBlur: this.blur, onFocus: this.focus, style: { outline: "none" } }, ColumnMenu && React68.createElement(ColumnMenu, __assign35({}, others, { onCloseMenu: this.closeMenu })))
        )
      );
    };
    return GridColumnMenuWrapper2;
  }(React68.Component)
);

// node_modules/@progress/kendo-react-grid/dist/es/header/GridHeaderCell.js
var __extends34 = function() {
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
var __assign36 = function() {
  __assign36 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign36.apply(this, arguments);
};
var GridHeaderCell = (
  /** @class */
  function(_super) {
    __extends34(GridHeaderCell2, _super);
    function GridHeaderCell2() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    GridHeaderCell2.prototype.render = function() {
      var columnMenuWrapperProps = this.props.columnMenuWrapperProps;
      var clickProps = this.props.onClick ? {
        onClick: this.props.onClick
      } : {};
      var defaultRendering = React69.createElement(
        "span",
        { className: "k-cell-inner" },
        React69.createElement(
          "span",
          __assign36({ className: classNames("k-link", {
            "!k-cursor-default": !this.props.columnMenuWrapperProps.sortable
          }) }, clickProps),
          React69.createElement("span", { className: "k-column-title" }, this.props.title || this.props.field || "\xA0"),
          this.props.children
        ),
        columnMenuWrapperProps.columnMenu && React69.createElement(GridColumnMenuWrapper, __assign36({}, columnMenuWrapperProps))
      );
      if (this.props.render) {
        return this.props.render.call(void 0, defaultRendering, this.props);
      }
      return defaultRendering;
    };
    return GridHeaderCell2;
  }(React69.Component)
);

// node_modules/@progress/kendo-react-grid/dist/es/header/HeaderRow.js
var __extends35 = function() {
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
var __assign37 = function() {
  __assign37 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign37.apply(this, arguments);
};
var sortSeqMap = {
  true: { "asc": "desc", "desc": "", "": "asc" },
  false: { "asc": "desc", "desc": "asc", "": "asc" }
};
var ariaSortMap = {
  "none": "none",
  "asc": "ascending",
  "desc": "descending"
};
var HeaderRow = (
  /** @class */
  function(_super) {
    __extends35(HeaderRow2, _super);
    function HeaderRow2(props) {
      var _this = _super.call(this, props) || this;
      _this.serviceIndex = 0;
      _this.index = -1;
      _this.cellKeyDown = function(event, column) {
        if (event.isDefaultPrevented()) {
          return;
        }
        if (event.keyCode === Keys.enter) {
          _this.cellClick(event, column);
        }
      };
      _this.cells = function(rowIndexes) {
        return rowIndexes.map(function(columnIndex) {
          var column = _this.props.columns[columnIndex];
          var sortable = _this.props.sortable && column.sortable;
          var sortIndex = _this.props.sort ? _this.props.sort.findIndex(function(s) {
            return s.field === column.field;
          }) : -1;
          var sortDir = sortIndex >= 0 ? _this.props.sort[sortIndex].dir || "none" : "none";
          var columnMenu2 = column.columnMenu === null ? null : column.columnMenu || _this.props.columnMenu;
          var className = classNames({
            "k-first": column.kFirst,
            "k-filterable": Boolean(columnMenu2),
            "k-table-th": true,
            "k-header": true,
            "k-grid-header-sticky": column.locked,
            "k-sorted": _this.props.sort && _this.props.sort.some(function(descriptor) {
              return descriptor.field === column.field;
            })
          }, column.headerClassName);
          var style = column.left !== void 0 ? !_this.props.isRtl ? { left: column.left, right: column.right } : { left: column.right, right: column.left } : {};
          var sortLabel = provideLocalizationService(_this).toLanguageString(sortAriaLabel2, messages6[sortAriaLabel2]);
          var ariaAttrs = column.isAccessible ? {
            ariaSort: ariaSortMap[sortDir],
            role: "columnheader",
            ariaColumnIndex: column.ariaColumnIndex,
            ariaSelected: false,
            ariaDescription: sortable ? sortLabel : ""
          } : {
            "role": "presentation"
          };
          var key = column.declarationIndex >= 0 ? ++_this.index : --_this.serviceIndex;
          var HeaderCell = column.headerCell ? column.headerCell : GridHeaderCell;
          var headerCell = React70.createElement(HeaderCell, { key: 1, field: column.field, onClick: sortable && function(e) {
            return _this.cellClick(e, column);
          } || void 0, selectionChange: _this.props.selectionChange, title: column.title, selectionValue: column.headerSelectionValue, render: _this.props.cellRender, children: _this.sortIcon(sortIndex), columnMenuWrapperProps: {
            column: {
              field: column.field,
              title: column.title,
              locked: column.locked,
              filter: column.filter,
              id: column.id
            },
            sortable: sortable && _this.props.sortable,
            sort: _this.props.sort,
            onSortChange: _this.props.sortChange,
            filter: _this.props.filter,
            filterable: _this.props.filterable && column.filterable,
            filterOperators: _this.props.filterOperators,
            onFilterChange: _this.props.filterChange,
            group: _this.props.group,
            groupable: _this.props.groupable,
            onGroupChange: _this.props.groupChange,
            columnMenu: columnMenu2
          } });
          var thProps = __assign37(__assign37({}, ariaAttrs), { key, colSpan: column.colSpan, rowSpan: column.rowSpan, className, style, columnId: column.id, navigatable: column.navigatable, onKeyDown: sortable && function(e) {
            return _this.cellKeyDown(e, column);
          } || void 0, role: "columnheader" });
          var content = [
            headerCell,
            _this.props.columnResize && _this.props.columnResize.resizable && column.resizable && React70.createElement(ColumnResizer, { key: 2, resize: function(e, element2, end2) {
              return _this.props.columnResize && _this.props.columnResize.dragHandler(e, column, element2, end2);
            }, autofit: function(e) {
              return _this.props.columnResize && _this.props.columnResize.dblClickHandler(e, [column.id]);
            } })
          ];
          var customCells = resolveCells(_this.props.cells, column.cells);
          if (customCells && customCells.headerCell) {
            var CustomCell = customCells.headerCell;
            return React70.createElement(CustomCell, { key, thProps, index: columnIndex }, content);
          }
          return React70.createElement(HeaderThElement, __assign37({}, thProps, { key }), content);
        });
      };
      _this.cellClick = _this.cellClick.bind(_this);
      return _this;
    }
    HeaderRow2.prototype.cellClick = function(e, column) {
      e.preventDefault();
      if (!this.props.sortChange) {
        return;
      }
      var _a14 = normalize3(this.props.sortable || false, column.sortable || false), allowUnsort = _a14.allowUnsort, mode = _a14.mode;
      var oldDescriptor = (this.props.sort || []).filter(function(d) {
        return d.field === column.field;
      })[0];
      var dir = sortSeqMap[allowUnsort][oldDescriptor && oldDescriptor.dir || ""];
      var newDescriptor = mode === "single" ? [] : (this.props.sort || []).filter(function(d) {
        return d.field !== column.field;
      });
      if (dir !== "" && column.field) {
        newDescriptor.push({ field: column.field, dir });
      }
      this.props.sortChange(newDescriptor, e);
    };
    HeaderRow2.prototype.sortIcon = function(sortIndex) {
      if (!this.props.sort) {
        return null;
      }
      return sortIndex >= 0 && [
        React70.createElement(
          "span",
          { key: 1, className: "k-sort-icon" },
          React70.createElement(IconWrap, { name: "sort-" + this.props.sort[sortIndex].dir + "-small", icon: this.props.sort[sortIndex].dir === "asc" ? sortAscSmallIcon : sortDescSmallIcon })
        ),
        this.props.sort.length > 1 && React70.createElement(
          "span",
          { key: 2, className: "k-sort-icon" },
          React70.createElement("span", { className: "k-sort-order" }, sortIndex + 1)
        )
      ];
    };
    HeaderRow2.prototype.render = function() {
      var _this = this;
      this.serviceIndex = 0;
      this.index = -1;
      return this.props.columnsMap.map(function(rowIndexes, i) {
        return _this.props.pressHandler && React70.createElement(ColumnDraggable, { key: i, pressHandler: _this.props.pressHandler, dragHandler: _this.props.dragHandler, releaseHandler: _this.props.releaseHandler, ariaRowIndex: i + 1, dragClue: _this.props.dragClue, headerRef: _this.props.headerRef, containerRef: _this.props.containerRef }, _this.cells(rowIndexes)) || React70.createElement("tr", { className: "k-table-row", role: "row", "aria-rowindex": i + 1 }, _this.cells(rowIndexes));
      });
    };
    return HeaderRow2;
  }(React70.Component)
);
registerForLocalization(HeaderRow);

// node_modules/@progress/kendo-react-grid/dist/es/header/FilterRow.js
var React72 = __toESM(require_react());

// node_modules/@progress/kendo-react-grid/dist/es/cells/GridFilterCell.js
var React71 = __toESM(require_react());

// node_modules/@progress/kendo-react-grid/dist/es/filterCommon.js
var operators = {
  "text": [
    { text: "grid.filterContainsOperator", operator: "contains" },
    { text: "grid.filterNotContainsOperator", operator: "doesnotcontain" },
    { text: "grid.filterEqOperator", operator: "eq" },
    { text: "grid.filterNotEqOperator", operator: "neq" },
    { text: "grid.filterStartsWithOperator", operator: "startswith" },
    { text: "grid.filterEndsWithOperator", operator: "endswith" },
    { text: "grid.filterIsNullOperator", operator: "isnull" },
    { text: "grid.filterIsNotNullOperator", operator: "isnotnull" },
    { text: "grid.filterIsEmptyOperator", operator: "isempty" },
    { text: "grid.filterIsNotEmptyOperator", operator: "isnotempty" }
  ],
  "numeric": [
    { text: "grid.filterEqOperator", operator: "eq" },
    { text: "grid.filterNotEqOperator", operator: "neq" },
    { text: "grid.filterGteOperator", operator: "gte" },
    { text: "grid.filterGtOperator", operator: "gt" },
    { text: "grid.filterLteOperator", operator: "lte" },
    { text: "grid.filterLtOperator", operator: "lt" },
    { text: "grid.filterIsNullOperator", operator: "isnull" },
    { text: "grid.filterIsNotNullOperator", operator: "isnotnull" }
  ],
  "date": [
    { text: "grid.filterEqOperator", operator: "eq" },
    { text: "grid.filterNotEqOperator", operator: "neq" },
    { text: "grid.filterAfterOrEqualOperator", operator: "gte" },
    { text: "grid.filterAfterOperator", operator: "gt" },
    { text: "grid.filterBeforeOperator", operator: "lt" },
    { text: "grid.filterBeforeOrEqualOperator", operator: "lte" },
    { text: "grid.filterIsNullOperator", operator: "isnull" },
    { text: "grid.filterIsNotNullOperator", operator: "isnotnull" }
  ],
  "boolean": [
    { text: "grid.filterEqOperator", operator: "eq" }
  ]
};
var IsUnaryFilter = function(operator) {
  return operator === "isnull" || operator === "isnotnull" || operator === "isempty" || operator === "isnotempty";
};
var operatorMap = function(iterable, service) {
  return iterable.map(function(operator) {
    return {
      text: service.toLanguageString(operator.text, messages6[operator.text]),
      operator: operator.operator
    };
  });
};
var defaultBooleanOperator = "eq";
var booleanFilterValues = [
  { text: "grid.filterBooleanAll", operator: "" },
  { text: "grid.filterIsTrue", operator: true },
  { text: "grid.filterIsFalse", operator: false }
];
var cellInputChange = function(value, e, props) {
  var defaultOperator = getDefaultOperator(props.operators);
  var operator = props.operator;
  switch (props.filterType) {
    case "numeric":
      if (!operator || IsUnaryFilter(operator)) {
        operator = defaultOperator;
      }
      if (value === null && operator === defaultOperator) {
        operator = "";
      }
      break;
    case "date":
      if (!operator || IsUnaryFilter(operator)) {
        operator = defaultOperator;
      }
      if (value === null && operator === defaultOperator) {
        operator = "";
      }
      break;
    case "text":
      if (!operator || IsUnaryFilter(operator)) {
        operator = defaultOperator;
      }
      if (!value && operator === defaultOperator) {
        operator = "";
      }
      break;
    default:
      return;
  }
  props.onChange({ value, operator, syntheticEvent: e });
};
var getDefaultOperator = function(filterOperators, filterType) {
  if (filterType) {
    return filterOperators[filterType][0].operator;
  } else {
    return filterOperators[0].operator;
  }
};
var getFilterType = function(filterType) {
  return filterType || "text";
};
var cellBoolDropdownChange = function(event, onChange) {
  var item = event.target.value;
  onChange({
    value: item.operator,
    operator: item.operator === "" ? "" : defaultBooleanOperator,
    syntheticEvent: event.syntheticEvent
  });
};
var cellOperatorChange = function(event, currentValue, onChange) {
  var value = currentValue;
  var item = event.target.value;
  if (!event.target.state.opened) {
    return;
  }
  if (IsUnaryFilter(item.operator)) {
    value = null;
  }
  if (currentValue === null && !IsUnaryFilter(item.operator)) {
    value = void 0;
  }
  onChange({ value, operator: item.operator, syntheticEvent: event.syntheticEvent });
};

// node_modules/@progress/kendo-react-grid/dist/es/cells/GridFilterCell.js
var __extends36 = function() {
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
var GridFilterCell = (
  /** @class */
  function(_super) {
    __extends36(GridFilterCell2, _super);
    function GridFilterCell2(props) {
      var _this = _super.call(this, props) || this;
      _this._inputRef = React71.createRef();
      _this.renderOperatorEditor = function(localization) {
        if (_this.props.filterType === "boolean") {
          return;
        }
        var value = _this.props.operators.find(function(item) {
          return item.operator === _this.props.operator;
        }) || null;
        return React71.createElement(DropDownList, { size: _this.props.size, value, onChange: _this.operatorChange, className: "k-dropdown-operator", iconClassName: "k-i-filter k-icon", svgIcon: filterIcon, data: _this.props.operators, textField: "text", title: localization.toLanguageString(filterChooseOperator, messages6[filterChooseOperator]), popupSettings: {
          width: ""
        } });
      };
      _this.inputChange = _this.inputChange.bind(_this);
      _this.clear = _this.clear.bind(_this);
      _this.operatorChange = _this.operatorChange.bind(_this);
      _this.boolDropdownChange = _this.boolDropdownChange.bind(_this);
      return _this;
    }
    GridFilterCell2.prototype.render = function() {
      var _a14;
      var localizationService = provideLocalizationService(this);
      var defaultRendering = React71.createElement(
        "div",
        { className: "k-filtercell" },
        React71.createElement(
          "div",
          { className: "k-filtercell-wrapper" },
          this.filterComponent(this.props.filterType, this.props.value, this.props.booleanValues),
          React71.createElement(
            "div",
            { className: "k-filtercell-operator" },
            this.renderOperatorEditor(localizationService),
            "\xA0",
            React71.createElement(Button, { size: this.props.size, icon: "filter-clear", svgIcon: filterClearIcon, className: classNames((_a14 = {}, _a14["k-clear-button-visible"] = Boolean(!(this.props.value === null || this.props.value === "") || this.props.operator), _a14)), title: localizationService.toLanguageString(filterClearButton, messages6[filterClearButton]), type: "button", onClick: this.clear, disabled: !(!(this.props.value === null || this.props.value === "") || this.props.operator) })
          )
        )
      );
      if (this.props.render) {
        return this.props.render.call(void 0, defaultRendering, this.props);
      }
      return defaultRendering;
    };
    GridFilterCell2.prototype.inputChange = function(value, e) {
      cellInputChange(value, e, this.props);
    };
    GridFilterCell2.prototype.operatorChange = function(event) {
      cellOperatorChange(event, this.props.value, this.props.onChange);
    };
    GridFilterCell2.prototype.boolDropdownChange = function(event) {
      cellBoolDropdownChange(event, this.props.onChange);
    };
    GridFilterCell2.prototype.clear = function(e) {
      var _this = this;
      e.preventDefault();
      this.props.onChange({ value: "", operator: "", syntheticEvent: e });
      if (this._inputRef.current) {
        this._inputRef.current.element.value = "";
        setTimeout(function() {
          _this._inputRef.current.element.focus();
        }, 0);
      }
    };
    GridFilterCell2.prototype.filterComponent = function(filterType, value, booleanValues) {
      var _this = this;
      switch (filterType) {
        case "numeric":
          return React71.createElement(NumericTextBox, { ref: this._inputRef, size: this.props.size, value, onChange: function(e) {
            _this.inputChange(e.value, e.syntheticEvent);
          }, title: this.props.title, ariaLabel: this.props.ariaLabel });
        case "date":
          return React71.createElement(DatePicker, { ref: this._inputRef, size: this.props.size, value, onChange: function(e) {
            _this.inputChange(e.value, e.syntheticEvent);
          }, title: this.props.title, ariaLabel: this.props.ariaLabel });
        case "boolean":
          var noFilterSet_1 = function(filter) {
            return filter === null || filter === void 0;
          };
          return React71.createElement(DropDownList, { ref: this._inputRef, size: this.props.size, onChange: this.boolDropdownChange, value: booleanValues.find(function(item) {
            return item.operator === (noFilterSet_1(value) ? "" : value);
          }), data: booleanValues, textField: "text", title: this.props.title, ariaLabel: this.props.ariaLabel });
        default:
          return React71.createElement(TextBox, { ref: this._inputRef, size: this.props.size, value: value || "", onChange: function(e) {
            _this.inputChange(e.target.value, e.syntheticEvent);
          }, title: this.props.title, "aria-label": this.props.ariaLabel });
      }
    };
    return GridFilterCell2;
  }(React71.Component)
);
registerForLocalization(GridFilterCell);

// node_modules/@progress/kendo-react-grid/dist/es/header/FilterRow.js
var __extends37 = function() {
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
var __assign38 = function() {
  __assign38 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign38.apply(this, arguments);
};
var FILTER_ROW_CLASS = "k-table-row k-filter-row";
var FilterRow = (
  /** @class */
  function(_super) {
    __extends37(FilterRow2, _super);
    function FilterRow2() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    FilterRow2.prototype.headerCellClassName = function(field, locked) {
      var result = "".concat(locked ? "k-grid-header-sticky" : "");
      if (this.props.sort && this.props.sort.filter(function(descriptor) {
        return descriptor.field === field;
      }).length > 0) {
        result += " k-sorted";
      }
      return result;
    };
    FilterRow2.prototype.setFilter = function(value, operator, field, e) {
      if (!this.props.filterChange) {
        return;
      }
      var filters = [];
      if (value !== "" && value !== null || operator !== "") {
        filters.push({
          field,
          operator,
          value
        });
      }
      if (this.props.filter && this.props.filter.filters) {
        var oldFilters = this.props.filter.filters || [];
        oldFilters.forEach(function(filter) {
          var descriptor = filter;
          if (descriptor && descriptor.field !== field) {
            filters.push(descriptor);
          }
        });
      }
      var logic = this.props.filter && this.props.filter.logic ? this.props.filter.logic : "and";
      this.props.filterChange(filters.length > 0 ? { logic, filters } : null, e);
    };
    FilterRow2.prototype.render = function() {
      var _this = this;
      var intl = provideLocalizationService(this);
      var oldFilters = this.props.filter && this.props.filter.filters || [];
      var activeFilter = function(field) {
        if (field === void 0) {
          return;
        }
        var currentFilters = oldFilters.filter(function(filter) {
          return filter.field === field;
        });
        return currentFilters.length ? currentFilters[0] : void 0;
      };
      var serviceIndex = 0, index = -1;
      var filterCells = this.props.columns.filter(function(c) {
        return c.children.length === 0;
      }).map(function(column) {
        var filterType = getFilterType(column.filter);
        var currentActiveFilter = activeFilter(column.field);
        var ariaLabel = column.filterable ? intl.toLanguageString(filterAriaLabel2, messages6[filterAriaLabel2]) : void 0;
        var value = currentActiveFilter && currentActiveFilter.value;
        if (value === void 0) {
          value = filterType === "text" ? "" : null;
        }
        var filterCellProps = column.filterable && {
          render: _this.props.cellRender,
          field: column.field,
          title: column.filterTitle,
          value,
          operator: currentActiveFilter && currentActiveFilter.operator,
          operators: operatorMap(_this.props.filterOperators[filterType] || [], intl),
          booleanValues: operatorMap(booleanFilterValues, intl),
          filterType,
          ariaLabel,
          onChange: function(e) {
            _this.setFilter(e.value, e.operator, column.field, e.syntheticEvent);
          }
        };
        var key = column.declarationIndex >= 0 ? ++index : --serviceIndex;
        var ariaAttrs = {
          ariaLabel,
          ariaColumnIndex: column.ariaColumnIndex
        };
        var style = column.left !== void 0 ? !_this.props.isRtl ? { left: column.left, right: column.right } : { left: column.right, right: column.left } : {};
        var thProps = __assign38({ columnId: tableKeyboardNavigationTools.getFilterColumnId(column.id), navigatable: column.navigatable, style, className: classNames("k-table-th", _this.headerCellClassName(column.field, column.locked) || void 0), role: "columnheader" }, ariaAttrs);
        var content = filterCellProps && (column.filterCell ? React72.createElement(column.filterCell, __assign38({}, filterCellProps)) : React72.createElement(GridFilterCell, __assign38({ size: _this.props.size }, filterCellProps)));
        var customCells = resolveCells(_this.props.cells, column.cells);
        if (customCells && customCells.filterCell) {
          var CustomCell = customCells.filterCell;
          return React72.createElement(CustomCell, __assign38({ key }, filterCellProps, { thProps, index }), content);
        }
        return React72.createElement(HeaderThElement, __assign38({ key }, thProps), content);
      });
      return React72.createElement("tr", { className: FILTER_ROW_CLASS, "aria-rowindex": this.props.ariaRowIndex, role: "row" }, filterCells);
    };
    return FilterRow2;
  }(React72.Component)
);
registerForLocalization(FilterRow);

// node_modules/@progress/kendo-react-grid/dist/es/header/GroupPanel.js
var React74 = __toESM(require_react());

// node_modules/@progress/kendo-react-grid/dist/es/drag/GroupingIndicator.js
var React73 = __toESM(require_react());
var __extends38 = function() {
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
var __assign39 = function() {
  __assign39 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign39.apply(this, arguments);
};
var GroupingIndicator = (
  /** @class */
  function(_super) {
    __extends38(GroupingIndicator2, _super);
    function GroupingIndicator2() {
      var _this = _super !== null && _super.apply(this, arguments) || this;
      _this.draggable = null;
      _this.onPress = function(data) {
        var element2 = _this.draggable && _this.draggable.element;
        if (element2 && _this.props.onPress) {
          _this.props.onPress(data.event, element2);
        }
      };
      _this.onDrag = function(data) {
        var element2 = _this.draggable && _this.draggable.element;
        if (element2 && _this.props.onDrag) {
          _this.props.onDrag(data.event, element2);
        }
      };
      _this.onRelease = function(data) {
        var element2 = _this.draggable && _this.draggable.element;
        if (element2 && _this.props.onRelease) {
          _this.props.onRelease(data.event);
        }
      };
      _this.sortChange = function(event) {
        event.preventDefault();
        if (_this.props.onSortChange) {
          var sort = _this.props.dir === "asc" ? "desc" : "asc";
          _this.props.onSortChange(event, sort);
        }
      };
      _this.groupRemove = function(event) {
        event.preventDefault();
        event.stopPropagation();
        if (_this.props.onRemove) {
          _this.props.onRemove(event);
        }
      };
      _this.onContextMenu = function(event) {
        var dataItem = {
          title: _this.props.title,
          dir: _this.props.dir,
          index: _this.props.index
        };
        if (_this.props.onContextMenu) {
          _this.props.onContextMenu.call(void 0, event, { dataItem: __assign39({}, dataItem) });
        }
      };
      return _this;
    }
    GroupingIndicator2.prototype.render = function() {
      var _this = this;
      var dir = this.props.dir;
      return React73.createElement(
        Draggable,
        { onPress: this.onPress, onDrag: this.onDrag, onRelease: this.onRelease, ref: function(component) {
          _this.draggable = component;
        } },
        React73.createElement(
          "div",
          { className: "k-chip k-chip-md k-chip-solid k-chip-solid-base k-rounded-md", onClick: this.sortChange, onContextMenu: this.onContextMenu, role: "button", style: { touchAction: "none" } },
          React73.createElement(
            "span",
            null,
            React73.createElement(IconWrap, { name: "sort-" + dir + "-small", icon: dir === "asc" ? sortAscSmallIcon : sortDescSmallIcon, size: "small" })
          ),
          React73.createElement("span", { className: "k-chip-content" }, this.props.title),
          React73.createElement(
            "span",
            { className: "k-chip-actions" },
            React73.createElement(
              "span",
              { className: "k-chip-action k-chip-remove-action", onClick: this.groupRemove },
              React73.createElement(IconWrap, { name: "x-circle", icon: xCircleIcon, size: "small" })
            )
          )
        )
      );
    };
    return GroupingIndicator2;
  }(React73.Component)
);
registerForLocalization(GroupingIndicator);

// node_modules/@progress/kendo-react-grid/dist/es/header/GroupPanel.js
var __extends39 = function() {
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
var GroupPanel = (
  /** @class */
  function(_super) {
    __extends39(GroupPanel2, _super);
    function GroupPanel2() {
      var _this = _super !== null && _super.apply(this, arguments) || this;
      _this.onGroupRemove = function(event, index) {
        var newGroups = _this.props.group.slice();
        newGroups.splice(index, 1);
        _this.props.groupChange(newGroups, event);
      };
      _this.onGroupSortChange = function(event, index, groupDesc, dir) {
        var group = Object.assign({}, groupDesc, { dir });
        var newGroups = _this.props.group.slice();
        newGroups.splice(index, 1, group);
        _this.props.groupChange(newGroups, event);
      };
      return _this;
    }
    GroupPanel2.prototype.render = function() {
      var _this = this;
      var groupsProp = this.props.group || [];
      var groups = groupsProp.map(function(groupDesc, index) {
        return React74.createElement(GroupingIndicator, { key: index, index, dir: groupDesc.dir || "asc", title: _this.props.resolveTitle(groupDesc.field), onRemove: function(event) {
          _this.onGroupRemove(event, index);
        }, onSortChange: function(event, dir) {
          _this.onGroupSortChange(event, index, groupDesc, dir);
        }, onPress: _this.props.pressHandler, onDrag: _this.props.dragHandler, onRelease: _this.props.releaseHandler, onContextMenu: _this.props.onContextMenu });
      });
      return React74.createElement(
        "div",
        { ref: this.props.refCallback, className: "k-grouping-header", role: "toolbar", "aria-label": provideLocalizationService(this).toLanguageString(groupPanelAriaLabel, messages6[groupPanelAriaLabel]), "aria-controls": this.props.ariaControls || "" },
        React74.createElement("div", { className: "k-chip-list k-chip-list-md", role: "none" }, groups),
        React74.createElement(
          "div",
          { className: "k-grouping-drop-container" },
          !groups.length && provideLocalizationService(this).toLanguageString(groupPanelEmpty, messages6[groupPanelEmpty]),
          "\xA0"
        )
      );
    };
    return GroupPanel2;
  }(React74.Component)
);
registerForLocalization(GroupPanel);

// node_modules/@progress/kendo-react-grid/dist/es/footer/Footer.js
var React75 = __toESM(require_react());
var __extends40 = function() {
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
var Footer = (
  /** @class */
  function(_super) {
    __extends40(Footer2, _super);
    function Footer2() {
      var _this = _super !== null && _super.apply(this, arguments) || this;
      _this.footerWrap = null;
      _this.table = null;
      _this.scrollbarWidth = getScrollbarWidth();
      return _this;
    }
    Footer2.prototype.componentDidMount = function() {
      this.setState({});
    };
    Footer2.prototype.setScrollLeft = function(scrollLeft) {
      if (this.footerWrap) {
        this.footerWrap.scrollLeft = scrollLeft;
      }
    };
    Footer2.prototype.setWidth = function(width) {
      if (this.table) {
        this.table.style.width = width + "px";
      }
    };
    Footer2.prototype.render = function() {
      var _a14;
      var _this = this;
      if (!this.props.staticHeaders) {
        return React75.createElement("tfoot", { className: "k-table-tfoot" }, this.props.row);
      }
      return React75.createElement(
        "div",
        { className: "k-grid-footer", role: "presentation" },
        React75.createElement(
          "div",
          { ref: function(div) {
            _this.footerWrap = div;
          }, className: "k-grid-footer-wrap", style: this.scrollbarWidth ? {} : { borderWidth: 0 }, role: "presentation" },
          React75.createElement(
            "table",
            { ref: function(table) {
              _this.table = table;
            }, className: classNames("k-table k-grid-footer-table", (_a14 = {
              "k-table-md": !this.props.size
            }, _a14["k-table-".concat(kendoThemeMaps.sizeMap[this.props.size] || this.props.size)] = this.props.size, _a14), this.props.className), role: "presentation" },
            React75.createElement("colgroup", { ref: function(e) {
              _this.props.columnResize.colGroupFooter = e;
            }, role: "presentation" }, this.props.cols),
            React75.createElement("tfoot", { className: "k-table-tfoot", role: "presentation" }, this.props.row)
          )
        )
      );
    };
    return Footer2;
  }(React75.Component)
);

// node_modules/@progress/kendo-react-grid/dist/es/VirtualScroll.js
var React76 = __toESM(require_react());
var VirtualScroll2 = (
  /** @class */
  function() {
    function VirtualScroll3(cached) {
      var _this = this;
      this.table = null;
      this.containerHeight = 0;
      this.topCacheCount = 0;
      this.attendedSkip = 0;
      this.propsSkip = 0;
      this.total = 0;
      this.scrollableVirtual = false;
      this.realSkip = 0;
      this.pageSize = 0;
      this.PageChange = null;
      this.tableBodyRef = React76.createRef();
      this.fixedScroll = false;
      this.askedSkip = void 0;
      this.containerRef = React76.createRef();
      this.tableTransform = "";
      this.prevScrollPos = 0;
      this.tableTranslate = 0;
      this.scrollSyncing = false;
      this.reactVersion = Number.parseFloat(React76.version);
      this.topItems = function(heights, skipTopBuffer) {
        if (!_this.container || skipTopBuffer) {
          return { topItemsCount: 0, topItemsHeight: 0 };
        }
        var screenHeight = _this.container.clientHeight;
        var itemsOnScreen = Math.ceil(screenHeight / heights[0].line);
        var topItemsCount = Math.ceil((heights.length - itemsOnScreen) / 2);
        var topItemsHeight = 0;
        for (var i = 0; i < topItemsCount; i++) {
          topItemsHeight += heights[i].line + heights[i].acc;
        }
        return {
          topItemsCount,
          topItemsHeight,
          itemsNeededOnScreen: itemsOnScreen + itemsOnScreen / 2
        };
      };
      this.horizontalScrollbarHeight = function() {
        if (!_this.container) {
          return 0;
        }
        return _this.container.offsetHeight - _this.container.clientHeight;
      };
      if (cached) {
        this.topCacheCount = 4;
        this.attendedSkip = -this.topCacheCount;
      }
      this.scrollHandler = this.scrollHandler.bind(this);
    }
    Object.defineProperty(VirtualScroll3.prototype, "container", {
      get: function() {
        return this.containerRef.current;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(VirtualScroll3.prototype, "rowHeights", {
      /**
       * @return - The row heights in an array.
       */
      get: function() {
        var result = [];
        var allRows = this.tableBodyRef.current && this.tableBodyRef.current.children || [];
        var accumulate = 0;
        for (var i = 0; i < allRows.length; i++) {
          if (allRows[i].className.indexOf("k-grouping-row") > -1) {
            accumulate += allRows[i].scrollHeight;
            continue;
          }
          if (allRows[i].className.indexOf("k-detail-row") > -1) {
            result[result.length - 1].line += allRows[i].scrollHeight;
          } else {
            result.push({
              line: allRows[i].scrollHeight,
              acc: accumulate
            });
            accumulate = 0;
          }
        }
        return result;
      },
      enumerable: false,
      configurable: true
    });
    VirtualScroll3.prototype.changePage = function(skip, e) {
      this.attendedSkip = skip - this.topCacheCount;
      if (this.PageChange) {
        this.PageChange({
          skip: Math.max(0, skip - this.topCacheCount),
          take: this.pageSize
        }, e);
      }
    };
    VirtualScroll3.prototype.translate = function(dY, forceSet) {
      this.tableTranslate = dY;
      if (this.scrollableVirtual && this.table) {
        if (this.reactVersion <= 17 || forceSet) {
          this.table.style.transform = "translateY(" + dY + "px)";
        } else {
          this.tableTransform = "translateY(" + dY + "px)";
        }
      }
    };
    VirtualScroll3.prototype.reset = function() {
      this.scrollSyncing = true;
      if (this.fixedScroll) {
        return;
      }
      if (this.container) {
        this.container.scrollTop = 0;
      }
      this.translate(0, true);
    };
    VirtualScroll3.prototype.localScrollUp = function(e) {
      if (!this.container) {
        return;
      }
      var heights = this.rowHeights;
      var scrollTop = this.container.scrollTop;
      var targetTranslate = this.tableTranslate;
      var rowsCount = 0;
      var _a14 = this.topItems(heights, Boolean(this.topCacheCount)), topItemsCount = _a14.topItemsCount, topItemsHeight = _a14.topItemsHeight, itemsNeededOnScreen = _a14.itemsNeededOnScreen;
      var additionalOnTop = scrollTop - targetTranslate;
      if (additionalOnTop > topItemsHeight || heights.length <= itemsNeededOnScreen) {
        return;
      }
      while (rowsCount < this.topCacheCount + this.attendedSkip - this.realSkip + topItemsCount && this.propsSkip - rowsCount > 0 && !(targetTranslate + (heights[heights.length - 1 - rowsCount].line + heights[heights.length - 1 - rowsCount].acc) + additionalOnTop <= scrollTop)) {
        targetTranslate -= heights[heights.length - 1 - rowsCount].line + heights[heights.length - 1 - rowsCount].acc;
        rowsCount++;
      }
      if (rowsCount === 0 && this.topCacheCount === 0 && this.attendedSkip > 0) {
        targetTranslate = Math.max(targetTranslate - heights[0].line, 0);
        rowsCount = 1;
      }
      if (this.propsSkip - rowsCount <= 0 && targetTranslate > scrollTop) {
        this.translate(0);
        this.changePage(0, e);
        this.container.scrollTop = 0;
        return;
      }
      if (targetTranslate > scrollTop) {
        targetTranslate = scrollTop;
      }
      if (targetTranslate !== this.tableTranslate) {
        this.translate(Math.max(0, targetTranslate - topItemsHeight));
        var nextSkip = Math.max(0, this.propsSkip - rowsCount - topItemsCount);
        this.changePage(nextSkip, e);
      }
    };
    VirtualScroll3.prototype.localScrollDown = function(e) {
      if (!this.container) {
        return;
      }
      var heights = this.rowHeights;
      var scrollTop = this.container.scrollTop;
      var targetTranslate = this.tableTranslate;
      var rowsCount = 0;
      var _a14 = this.topItems(heights, Boolean(this.topCacheCount)), topItemsCount = _a14.topItemsCount, topItemsHeight = _a14.topItemsHeight, itemsNeededOnScreen = _a14.itemsNeededOnScreen;
      while (rowsCount < heights.length - this.topCacheCount && !(targetTranslate + heights[rowsCount].line + heights[rowsCount].acc > scrollTop)) {
        targetTranslate += heights[rowsCount].line + heights[rowsCount].acc;
        rowsCount++;
      }
      if (topItemsCount > this.propsSkip + rowsCount || heights.length <= itemsNeededOnScreen) {
        return;
      }
      if (rowsCount >= heights.length - this.topCacheCount && this.propsSkip + rowsCount >= this.total) {
        this.translate(targetTranslate - topItemsHeight);
        this.changePage(this.total - 1 - topItemsCount, e);
      } else if (targetTranslate !== this.tableTranslate && this.propsSkip + rowsCount - topItemsCount !== this.propsSkip) {
        this.translate(targetTranslate - topItemsHeight);
        this.changePage(this.propsSkip + rowsCount - topItemsCount, e);
      }
    };
    VirtualScroll3.prototype.scrollNonStrict = function(e) {
      var floatRowIndex = this.total * this.prevScrollPos / this.containerHeight;
      var rowIndex = Math.floor(floatRowIndex);
      if (rowIndex >= this.total) {
        rowIndex = this.total - 1;
      }
      var rowpercentage = Math.min(floatRowIndex - rowIndex, 1);
      var microAdjust = 0;
      var rowIndexOffset = rowIndex - this.propsSkip;
      var heights = this.rowHeights;
      if (rowIndexOffset >= 0 && rowIndexOffset <= 1) {
        microAdjust = -((heights[0].line + heights[0].acc) * rowpercentage);
      } else if (rowIndexOffset === -1) {
        microAdjust = -((heights[heights.length - 1].line + heights[heights.length - 1].acc) * rowpercentage);
      }
      var _a14 = this.topItems(heights, Boolean(this.topCacheCount)), topItemsCount = _a14.topItemsCount, topItemsHeight = _a14.topItemsHeight;
      this.translate(Math.max(0, microAdjust - topItemsHeight - this.horizontalScrollbarHeight() + this.containerHeight * floatRowIndex / this.total));
      this.changePage(rowIndex - topItemsCount, e);
    };
    VirtualScroll3.prototype.scrollHandler = function(e) {
      if (!this.scrollableVirtual) {
        return;
      }
      if (this.scrollSyncing || !this.container || !this.table) {
        this.scrollSyncing = false;
        return;
      }
      var scrollTop = this.container.scrollTop;
      var prev = this.prevScrollPos;
      this.prevScrollPos = scrollTop;
      if (this.askedSkip !== void 0) {
        this.translate(this.containerHeight * this.askedSkip / this.total);
        this.changePage(this.askedSkip, e);
        this.prevScrollPos = scrollTop;
        this.askedSkip = void 0;
        return;
      }
      if (scrollTop - prev < 0 && scrollTop > this.tableTranslate - this.table.scrollHeight / 10) {
        this.localScrollUp(e);
      } else if (scrollTop - prev > 0 && scrollTop < this.tableTranslate + this.table.scrollHeight * 2 / 3) {
        this.localScrollDown(e);
      } else {
        this.scrollNonStrict(e);
      }
      this.prevScrollPos = scrollTop;
    };
    return VirtualScroll3;
  }()
);

// node_modules/@progress/kendo-react-grid/dist/es/VirtualScrollFixed.js
var React77 = __toESM(require_react());
var RowHeightService2 = (
  /** @class */
  function() {
    function RowHeightService3(total, rowHeight, detailRowHeight, data) {
      if (total === void 0) {
        total = 0;
      }
      this.total = total;
      this.offsets = [];
      this.heights = [];
      var agg = 0;
      for (var idx = 0; idx < total; idx++) {
        this.offsets.push(agg);
        var currHeight = data && data[idx].expanded && data[idx].rowType === "data" ? detailRowHeight : rowHeight;
        agg += currHeight;
        this.heights.push(currHeight);
      }
    }
    RowHeightService3.prototype.height = function(rowIndex) {
      return this.heights[rowIndex];
    };
    RowHeightService3.prototype.index = function(position) {
      if (position < 0) {
        return void 0;
      }
      var result = this.offsets.reduce(function(prev, current, idx) {
        if (prev !== void 0) {
          return prev;
        } else if (current === position) {
          return idx;
        } else if (current > position) {
          return idx - 1;
        }
        return void 0;
      }, void 0);
      return result === void 0 ? this.total - 1 : result;
    };
    RowHeightService3.prototype.offset = function(rowIndex) {
      return this.offsets[rowIndex];
    };
    RowHeightService3.prototype.totalHeight = function() {
      var lastOffset = this.offsets[this.offsets.length - 1];
      var lastHeight = this.heights[this.heights.length - 1];
      return lastOffset + lastHeight;
    };
    return RowHeightService3;
  }()
);
var VirtualScrollFixed = (
  /** @class */
  function() {
    function VirtualScrollFixed2(_cached) {
      this.table = null;
      this.containerHeight = 0;
      this.topCacheCount = 0;
      this.attendedSkip = 0;
      this.propsSkip = 0;
      this.total = 0;
      this.scrollableVirtual = false;
      this.realSkip = 0;
      this.pageSize = 0;
      this.PageChange = null;
      this.tableBodyRef = React77.createRef();
      this.fixedScroll = false;
      this.askedSkip = void 0;
      this.containerRef = React77.createRef();
      this.tableTransform = "";
      this.scrollSyncing = false;
      this.lastLoaded = 0;
      this.firstLoaded = 0;
      this.lastScrollTop = 0;
      this.reactVersion = Number.parseFloat(React77.version);
      this.firstLoaded = this.pageSize;
      this.lastLoaded = this.realSkip + this.pageSize;
      this.scrollHandler = this.scrollHandler.bind(this);
    }
    Object.defineProperty(VirtualScrollFixed2.prototype, "container", {
      get: function() {
        return this.containerRef.current;
      },
      enumerable: false,
      configurable: true
    });
    VirtualScrollFixed2.prototype.translate = function(dY, forceSet) {
      if (this.scrollableVirtual && this.table) {
        if (firefox || this.reactVersion <= 17 || forceSet) {
          this.table.style.transform = "translateY(" + dY + "px)";
        } else {
          this.tableTransform = "translateY(" + dY + "px)";
        }
      }
    };
    VirtualScrollFixed2.prototype.changePage = function(skip, e) {
      if (this.PageChange) {
        this.PageChange({ skip: Math.max(0, skip), take: this.pageSize }, e);
      }
    };
    VirtualScrollFixed2.prototype.reset = function() {
      this.scrollSyncing = true;
      if (this.fixedScroll) {
        return;
      }
      if (this.container) {
        this.container.scrollTop = 0;
      }
      this.translate(0, true);
    };
    VirtualScrollFixed2.prototype.scrollHandler = function(e) {
      if (!this.scrollableVirtual || !this.container || !this.table || !this.rowHeightService || !this.containerRef.current) {
        return;
      }
      if (this.scrollSyncing) {
        this.scrollSyncing = false;
        return;
      }
      var scrollTop = this.container.scrollTop;
      var up = this.lastScrollTop >= scrollTop;
      var down = !up;
      this.lastScrollTop = scrollTop;
      var firstItemIndex = this.rowHeightService.index(scrollTop);
      var firstItemOffset = this.rowHeightService.offset(firstItemIndex);
      var offsetHeight = this.containerRef.current.offsetHeight;
      var lastItemIndex = this.rowHeightService.index(scrollTop + offsetHeight);
      if (down && lastItemIndex >= this.lastLoaded && this.lastLoaded < this.total) {
        var overflow = firstItemIndex + this.pageSize - this.total;
        if (overflow > 0) {
          firstItemIndex = firstItemIndex - overflow;
          firstItemOffset = this.rowHeightService.offset(firstItemIndex);
        }
        this.firstLoaded = firstItemIndex;
        this.translate(firstItemOffset);
        var nextTake = this.firstLoaded + this.pageSize;
        this.lastLoaded = Math.min(nextTake, this.total);
        this.changePage(this.firstLoaded, e);
      } else if (up && firstItemIndex < this.firstLoaded) {
        var nonVisibleBuffer = Math.floor(this.pageSize * 0.3);
        this.firstLoaded = Math.max(firstItemIndex - nonVisibleBuffer, 0);
        this.translate(this.rowHeightService.offset(this.firstLoaded));
        this.lastLoaded = Math.min(this.firstLoaded + this.pageSize, this.total);
        this.changePage(this.firstLoaded, e);
      }
    };
    return VirtualScrollFixed2;
  }()
);

// node_modules/@progress/kendo-react-grid/dist/es/drag/ColumnResize.js
var OFFSET_ROUND = 1;
var LOCK_COLUMN_BUFFER = 20;
var ColumnResize = (
  /** @class */
  function() {
    function ColumnResize2(triggerResize) {
      var _this = this;
      this.columns = [];
      this.resizable = false;
      this.isRtl = false;
      this.setIsRtl = function(isRtl2) {
        _this.isRtl = isRtl2;
      };
      this.dragHandler = function(event, column, dragCue, end2) {
        var e = event.originalEvent;
        if (!end2) {
          e.preventDefault();
          e.stopPropagation();
          e.stopImmediatePropagation();
        }
        var thElement = dragCue.closest("th");
        if (!thElement || !thElement) {
          return;
        }
        var oldWidth = thElement.clientWidth;
        var newWidth = oldWidth;
        if (_this.isRtl) {
          newWidth += dragCue.getBoundingClientRect().right - dragCue.offsetWidth / 2 - event.clientX;
        } else {
          newWidth += event.clientX - dragCue.getBoundingClientRect().left - dragCue.offsetWidth / 2;
        }
        if (!end2 && Math.abs(newWidth - oldWidth) < 1) {
          return;
        }
        _this.fixateInitialWidths(thElement.parentElement.clientWidth);
        _this.setWidths(column, Math.floor(newWidth) / oldWidth);
        var index = _this.columns.filter(function(c) {
          return !c.children.length;
        }).findIndex(function(c) {
          return c.id === column.id;
        });
        _this.onResize(index, oldWidth, newWidth, e, end2, column.id);
      };
      this.dblClickHandler = function(event, columnIds) {
        var columns = _this.columns.filter(function(c) {
          return columnIds.indexOf(c.id) > -1;
        });
        if (!_this.colGroupMain || !columns.length) {
          return;
        }
        var leafsForAdjust = {};
        var stack = columns;
        while (stack.length > 0) {
          var currentCol = stack.pop();
          if (!currentCol) {
            break;
          }
          if (currentCol.children.length) {
            stack.push.apply(stack, currentCol.children);
          } else {
            leafsForAdjust[currentCol.id] = currentCol;
          }
        }
        var leafs = _this.columns.filter(function(c) {
          return !c.children.length;
        });
        var indexesForAdjust = [];
        leafs.forEach(function(currentColumn, index) {
          if (leafsForAdjust[currentColumn.id]) {
            indexesForAdjust.push(index);
          }
        });
        var tables = [_this.colGroupMain.parentElement];
        var colgroups = [_this.colGroupMain];
        if (_this.colGroupHeader) {
          tables.push(_this.colGroupHeader.parentElement);
          colgroups.push(_this.colGroupHeader);
        }
        if (_this.colGroupFooter) {
          tables.push(_this.colGroupFooter.parentElement);
          colgroups.push(_this.colGroupFooter);
        }
        tables.forEach(function(table) {
          return table.classList.add("k-autofitting");
        });
        var maxWidths = [];
        colgroups.forEach(function(colgroup) {
          indexesForAdjust.forEach(function(columnIndex) {
            if (colgroup.children[columnIndex]) {
              colgroup.children[columnIndex].width = "";
              maxWidths[columnIndex] = Math.max(maxWidths[columnIndex] || 0, colgroup.children[columnIndex].offsetWidth + OFFSET_ROUND);
            }
          });
        });
        colgroups.forEach(function(colgroup) {
          indexesForAdjust.forEach(function(columnIndex) {
            if (colgroup.children[columnIndex]) {
              colgroup.children[columnIndex].width = maxWidths[columnIndex] + "px";
              leafs[columnIndex].width = maxWidths[columnIndex];
            }
          });
        });
        tables.forEach(function(table) {
          return table.classList.remove("k-autofitting");
        });
        _this.onResize(indexesForAdjust[0], 0, 0, event, true, columnIds[0]);
      };
      this.updateColElements = function(affectedColumns) {
        var leafColumns = _this.columns.filter(function(c) {
          return !c.children.length;
        });
        var difference = 1e-10;
        var _loop_1 = function(i2) {
          var currentColumn = affectedColumns[i2];
          var colIndex = leafColumns.findIndex(function(c) {
            return c.id === currentColumn.id;
          });
          var currentColumnFloatWidth = parseFloat((currentColumn.width || 0).toString());
          var currentColumnFloorWidth = Math.floor(currentColumnFloatWidth);
          difference += currentColumnFloatWidth - currentColumnFloorWidth;
          var currentWidth = currentColumnFloorWidth + Math.floor(difference);
          difference -= Math.floor(difference);
          if (_this.colGroupMain && _this.colGroupMain.children[colIndex]) {
            var mainWidth = parseInt(_this.colGroupMain.children[colIndex].width, 10);
            _this.colGroupMain.children[colIndex].width = currentWidth + "px";
            _this.updateNextLockedCol(_this.colGroupMain.parentElement, currentColumn, mainWidth - currentWidth);
          }
          if (_this.colGroupHeader && _this.colGroupHeader.children[colIndex]) {
            var headerWidth = parseInt(_this.colGroupHeader.children[colIndex].width, 10);
            _this.colGroupHeader.children[colIndex].width = currentWidth + "px";
            _this.updateNextLockedCol(_this.colGroupHeader.parentElement, currentColumn, headerWidth - currentWidth);
          }
          if (_this.colGroupFooter && _this.colGroupFooter.children[colIndex]) {
            var footerWidth = parseInt(_this.colGroupFooter.children[colIndex].width, 10);
            _this.colGroupFooter.children[colIndex].width = currentWidth + "px";
            _this.updateNextLockedCol(_this.colGroupFooter.parentElement, currentColumn, footerWidth - currentWidth);
          }
        };
        for (var i = 0; i < affectedColumns.length; i++) {
          _loop_1(i);
        }
      };
      this.onResize = triggerResize;
    }
    ColumnResize2.prototype.fixateInitialWidths = function(width) {
      var columns = this.columns.filter(function(c) {
        return !c.children.length;
      });
      var remainingCount = 0;
      var cols = this.colGroupMain ? this.colGroupMain.children : [];
      for (var i = 0; i < cols.length; i++) {
        if (cols[i].width) {
          width -= parseFloat(cols[i].width);
        } else {
          remainingCount++;
        }
      }
      if (remainingCount === 0) {
        return;
      }
      var perCol = Math.floor(width / remainingCount);
      for (var i = 0; i < cols.length; i++) {
        var col = cols[i];
        if (!col.width) {
          col.width = perCol;
          columns[i].width = perCol.toString();
          if (this.colGroupHeader) {
            this.colGroupHeader.children[i].width = perCol;
          }
          if (this.colGroupFooter) {
            this.colGroupFooter.children[i].width = perCol;
          }
        }
      }
    };
    ColumnResize2.prototype.setWidths = function(column, coef) {
      var indexInOriginal = this.columns.findIndex(function(c) {
        return c.id === column.id;
      });
      var toAdjust = [];
      var more = column.children.length;
      for (var i = indexInOriginal + 1; more > 0 && i < this.columns.length; i++, more--) {
        var cc = this.columns[i];
        if (!cc.children.length) {
          toAdjust.push(cc);
        } else {
          more += cc.children.length;
        }
      }
      if (toAdjust.length === 0) {
        toAdjust.push(column);
      }
      toAdjust.forEach(function(colToAdjust) {
        var targetWidth = colToAdjust.width ? parseFloat(colToAdjust.width.toString()) * coef : 0;
        var min = colToAdjust.minResizableWidth === void 0 ? 10 : colToAdjust.minResizableWidth;
        if (targetWidth < min) {
          targetWidth = min;
        }
        colToAdjust.width = targetWidth;
      });
      this.updateColElements(toAdjust);
      return toAdjust;
    };
    ColumnResize2.prototype.updateNextLockedCol = function(element2, current, deltaWidth) {
      var _this = this;
      var currentIndex = current.index;
      var gridWrapperEl = this.colGroupMain.parentElement.closest(".k-grid");
      var maxWidth = gridWrapperEl === null || gridWrapperEl === void 0 ? void 0 : gridWrapperEl.clientWidth;
      var widthOfLocked = this.columns.filter(function(c) {
        return c.locked;
      }).map(function(e) {
        return parseInt(e.width + "", 10);
      }).reduce(function(a, b) {
        return a + b;
      }, 0);
      if (!current.locked || maxWidth <= widthOfLocked + LOCK_COLUMN_BUFFER) {
        return;
      }
      this.columns.forEach(function(nColumn) {
        if ((nColumn === null || nColumn === void 0 ? void 0 : nColumn.locked) && deltaWidth) {
          var allColumnEls = element2 === null || element2 === void 0 ? void 0 : element2.querySelectorAll('[aria-colindex="' + nColumn.ariaColumnIndex + '"]');
          allColumnEls === null || allColumnEls === void 0 ? void 0 : allColumnEls.forEach(function(el) {
            var currentStyle = el.style;
            if (_this.isRtl) {
              if (nColumn.index > currentIndex && currentStyle && currentStyle.right) {
                currentStyle.right = parseInt(currentStyle.right, 10) - deltaWidth + "px";
              }
              if (nColumn.index < currentIndex && currentStyle && currentStyle.left) {
                currentStyle.left = parseInt(currentStyle.left, 10) - deltaWidth + "px";
              }
            } else {
              if (nColumn.index > currentIndex && currentStyle && currentStyle.left) {
                currentStyle.left = parseInt(currentStyle.left, 10) - deltaWidth + "px";
              }
              if (nColumn.index < currentIndex && currentStyle && currentStyle.right) {
                currentStyle.right = parseInt(currentStyle.right, 10) - deltaWidth + "px";
              }
            }
          });
        }
      });
    };
    return ColumnResize2;
  }()
);

// node_modules/@progress/kendo-react-grid/dist/es/drag/CommonDragLogic.js
var React78 = __toESM(require_react());
var CommonDragLogic = (
  /** @class */
  function() {
    function CommonDragLogic2(columnReorder, groupReorder, columnToGroup) {
      var _this = this;
      this.refDragElementClue = React78.createRef();
      this.refDropElementClue = React78.createRef();
      this.columns = [];
      this.reorderable = false;
      this.groupable = false;
      this.startColumn = -1;
      this.startGroup = -1;
      this.currentColumn = -1;
      this.currentGroup = -1;
      this.groupPanelDivElement = null;
      this.refGroupPanelDiv = function(e) {
        _this.groupPanelDivElement = e && e.children ? e.children[0] : e;
      };
      this.pressHandler = function(event, element2) {
        var startColumn = _this.getColumnIndex(event, element2);
        _this.startGroup = _this.getGroupIndex(event);
        if (startColumn >= 0) {
          var col = _this.columns[startColumn];
          if (col.reorderable && _this.reorderable || col.groupable && _this.groupable) {
            _this.startColumn = startColumn;
          }
        }
      };
      this.dragHandler = function(event, element2) {
        if (!event.isTouch) {
          event.originalEvent.preventDefault();
        }
        event.originalEvent.stopPropagation();
        if (_this.startColumn === -1 && _this.startGroup === -1) {
          return;
        }
        _this.currentColumn = _this.getColumnIndex(event, element2);
        var groupPanelChildren = _this.groupPanelDivElement && _this.groupPanelDivElement.children;
        _this.currentGroup = _this.isTargetGroupingContainer(event) ? groupPanelChildren && groupPanelChildren.length ? groupPanelChildren.length : 0 : _this.getGroupIndex(event);
        var invalidIndex = !_this.isValid();
        if (invalidIndex) {
          _this.currentColumn = -1;
          _this.currentGroup = -1;
        }
        var targetElement = _this.currentColumn >= 0 ? element2.children[_this.columns[_this.currentColumn].index] : _this.isTargetGroupingContainer(event) ? event.originalEvent.target : _this.groupPanelDivElement && _this.groupPanelDivElement.children[_this.currentGroup];
        _this.updateDragElementClue(event, element2, targetElement, invalidIndex);
        _this.updateDropElementClue(event, element2, targetElement, invalidIndex);
      };
      this.releaseHandler = function(event) {
        var prevColumnIndex = _this.startColumn;
        var nextColumnIndex = _this.currentColumn;
        var prevGroupIndex = _this.startGroup;
        var nextGroupIndex = _this.currentGroup;
        event.originalEvent.preventDefault();
        if (_this.dropElementClue) {
          _this.dropElementClue.setState({ visible: false });
        }
        if (_this.dragElementClue) {
          _this.dragElementClue.setState({ visible: false });
        }
        var isValid = _this.isValid();
        _this.startColumn = _this.startGroup = _this.currentColumn = _this.currentGroup = -1;
        if (!isValid) {
          return;
        }
        if (prevColumnIndex >= 0 && nextColumnIndex >= 0) {
          _this.columnReorder(prevColumnIndex, nextColumnIndex, event.originalEvent);
        } else if (prevGroupIndex >= 0 && nextGroupIndex >= 0) {
          _this.groupReorder(prevGroupIndex, nextGroupIndex, event.originalEvent);
        } else if (prevColumnIndex >= 0 && nextGroupIndex >= 0) {
          _this.columnToGroup(prevColumnIndex, nextGroupIndex, event.originalEvent);
        }
      };
      this.columnReorder = columnReorder;
      this.groupReorder = groupReorder;
      this.columnToGroup = columnToGroup;
    }
    Object.defineProperty(CommonDragLogic2.prototype, "dragClueRef", {
      get: function() {
        return this.refDragElementClue;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(CommonDragLogic2.prototype, "dropClueRef", {
      get: function() {
        return this.refDropElementClue;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(CommonDragLogic2.prototype, "dragElementClue", {
      get: function() {
        return this.refDragElementClue.current;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(CommonDragLogic2.prototype, "dropElementClue", {
      get: function() {
        return this.refDropElementClue.current;
      },
      enumerable: false,
      configurable: true
    });
    CommonDragLogic2.prototype.getColumnIndex = function(event, parent) {
      if (!parent || parent.parentElement === this.groupPanelDivElement) {
        return -1;
      }
      var index = getIndex(event, parent);
      if (index === -1) {
        return -1;
      }
      var _loop_1 = function(i2) {
        if (parent.parentNode.children[i2] === parent) {
          return { value: this_1.columns.findIndex(function(c) {
            return c.index === index && c.depth === i2;
          }) };
        }
      };
      var this_1 = this;
      for (var i = 0; i < parent.parentNode.children.length; i++) {
        var state_1 = _loop_1(i);
        if (typeof state_1 === "object")
          return state_1.value;
      }
      return -1;
    };
    CommonDragLogic2.prototype.isTargetGroupingContainer = function(event) {
      var target = event.originalEvent.target;
      return target.className.indexOf ? target.className.indexOf("k-grouping-drop-container") !== -1 : false;
    };
    CommonDragLogic2.prototype.getGroupIndex = function(event) {
      return getIndex(event, this.groupPanelDivElement);
    };
    CommonDragLogic2.prototype.isValid = function() {
      if (this.startGroup >= 0) {
        return this.currentGroup >= 0 && this.currentGroup !== this.startGroup;
      }
      if (this.startColumn === -1) {
        return false;
      }
      if (this.currentGroup >= 0) {
        return this.columns[this.startColumn].groupable === true && this.groupable === true;
      }
      return this.reorderable === true && this.currentColumn >= 0 && this.currentColumn !== this.startColumn && this.columns[this.startColumn].reorderable === true && this.columns[this.currentColumn].parentIndex === this.columns[this.startColumn].parentIndex;
    };
    CommonDragLogic2.prototype.updateDragElementClue = function(event, element2, targetElement, invalidIndex) {
      if (!this.dragElementClue) {
        return;
      }
      var innerText = this.startColumn >= 0 ? element2.children[this.columns[this.startColumn].index].innerText : element2.innerText;
      this.dragElementClue.setState({
        visible: true,
        top: event.pageY + 10,
        left: event.pageX,
        innerText,
        status: invalidIndex || !targetElement ? "k-i-cancel" : "k-i-plus"
      });
    };
    CommonDragLogic2.prototype.updateDropElementClue = function(event, element2, targetElement, invalidIndex) {
      if (!this.dropElementClue) {
        return;
      }
      if (invalidIndex || !targetElement) {
        this.dropElementClue.setState({ visible: false });
        return;
      }
      var rect = targetElement.getBoundingClientRect();
      var groupElement = targetElement.closest(".k-grouping-header");
      var rectParent = (groupElement || targetElement).getBoundingClientRect();
      var left2 = rect.left + event.pageX - event.clientX - 6;
      if (!this.isTargetGroupingContainer(event) && (this.currentColumn > this.startColumn || this.currentGroup > this.startGroup && this.startGroup !== -1)) {
        left2 += rect.width;
      }
      var top = rectParent.top + event.pageY - event.clientY;
      this.dropElementClue.setState({
        visible: true,
        top,
        left: left2,
        height: this.currentColumn >= 0 ? element2.clientHeight : rectParent.height
      });
    };
    return CommonDragLogic2;
  }()
);

// node_modules/@progress/kendo-react-grid/dist/es/cells/GridCell.js
var React79 = __toESM(require_react());
var __assign40 = function() {
  __assign40 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign40.apply(this, arguments);
};
var GridCell = function(props) {
  var _a14;
  var defaultRendering = null;
  var intl = useInternationalization();
  var navigationAttributes = useTableKeyboardNavigation(props.id);
  var onContextMenu = React79.useCallback(function(event) {
    if (props.onContextMenu) {
      props.onContextMenu.call(void 0, event, props.dataItem, props.field);
    }
  }, [props.onContextMenu, props.dataItem, props.field]);
  var tdProps = null;
  var content = null;
  if (props.rowType === "groupFooter") {
    tdProps = {
      onContextMenu,
      className: props.className
    };
    defaultRendering = React79.createElement("td", __assign40({}, tdProps));
  } else if (props.rowType !== "groupHeader") {
    if (props.field !== void 0) {
      var data = getNestedValue(props.field, props.dataItem);
      if (data !== void 0 && data !== null) {
        content = props.format ? intl.format(props.format, data) : data.toString();
      }
    }
    var className = classNames("k-table-td", props.className, { "k-selected": props.isSelected });
    tdProps = __assign40((_a14 = { onContextMenu, colSpan: props.colSpan, style: props.style, className, role: "gridcell", "aria-colindex": props.ariaColumnIndex, "aria-selected": props.isSelected }, _a14[GRID_COL_INDEX_ATTRIBUTE] = props.columnIndex, _a14), navigationAttributes);
    defaultRendering = React79.createElement("td", __assign40({}, tdProps), content);
  }
  var rowTypeSetting = props.rowType || "data";
  var customCells = props.cells;
  if (customCells && customCells[rowTypeSetting]) {
    var CustomCell = customCells[rowTypeSetting];
    return React79.createElement(CustomCell, __assign40({}, props, { tdProps }), content);
  }
  return props.render ? props.render.call(void 0, defaultRendering, props) : defaultRendering;
};

// node_modules/@progress/kendo-react-grid/dist/es/cells/GridGroupCell.js
var React80 = __toESM(require_react());
var __assign41 = function() {
  __assign41 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign41.apply(this, arguments);
};
var GridGroupCell = function(props) {
  var defaultRendering = null;
  var columnIndex = props.columnIndex, level = props.level, columnsCount = props.columnsCount, rowType = props.rowType, dataItem = props.dataItem, field = props.field, onChange = props.onChange, expanded = props.expanded, render = props.render, dataIndex = props.dataIndex, ariaColumnIndex = props.ariaColumnIndex, isRtl2 = props.isRtl;
  var definedField = field || "";
  var navigationAttributes = useTableKeyboardNavigation(props.id);
  var localization = useLocalization();
  var tdProps = null;
  var td2Props = null;
  var content = null;
  var onKeyDownHandler = React80.useCallback(function(event) {
    if (event.isDefaultPrevented()) {
      return;
    }
    if (event.keyCode === Keys.enter && onChange) {
      event.preventDefault();
      onChange({
        dataItem,
        dataIndex,
        syntheticEvent: event,
        field: void 0,
        value: !expanded
      });
    }
  }, [expanded, onChange, dataItem, dataIndex]);
  var onContextMenu = React80.useCallback(function(event) {
    if (props.onContextMenu) {
      props.onContextMenu.call(void 0, event, props.dataItem, props.field);
    }
  }, [props.onContextMenu, props.dataItem, props.field]);
  var renderCellCollapse = function(colspan, styles) {
    var _a14;
    var baseMessage = expanded ? groupCollapse : groupExpand;
    var message = localization.toLanguageString(baseMessage, messages6[baseMessage]);
    tdProps = __assign41((_a14 = { className: "k-table-td", style: __assign41(__assign41({}, props.style), styles), colSpan: colspan, key: "g-colspan", role: "gridcell" }, _a14["aria-selected"] = false, _a14["aria-expanded"] = expanded, _a14["aria-colindex"] = ariaColumnIndex, _a14.onKeyDown = onKeyDownHandler, _a14.onContextMenu = onContextMenu, _a14), navigationAttributes);
    content = React80.createElement(
      "p",
      { className: "k-reset" },
      React80.createElement(
        "a",
        { onClick: function(e) {
          e.preventDefault();
          if (onChange) {
            onChange({
              dataItem,
              dataIndex,
              syntheticEvent: e,
              field: void 0,
              value: !expanded
            });
          }
        }, href: "#", tabIndex: -1, "aria-label": message },
        React80.createElement(IconWrap, { name: expanded ? "caret-alt-down" : isRtl2 ? "caret-alt-left" : "caret-alt-right", icon: expanded ? caretAltDownIcon : isRtl2 ? caretAltLeftIcon : caretAltRightIcon })
      ),
      dataItem[definedField] instanceof Date && dataItem[definedField].toString ? dataItem[definedField].toString() : dataItem[definedField]
    );
    return React80.createElement("td", __assign41({}, tdProps), content);
  };
  if (columnIndex === void 0 || level === void 0 || columnIndex < level || columnsCount === void 0 || rowType !== "groupHeader" || dataItem[definedField] === void 0) {
    tdProps = {
      style: props.style,
      key: "g" + columnIndex,
      className: classNames("k-table-td", "k-group-cell", { "k-grid-content-sticky": props.locked }),
      role: "gridcell",
      onContextMenu
    };
    defaultRendering = React80.createElement("td", __assign41({}, tdProps));
  } else if (columnIndex <= level && !props.locked) {
    defaultRendering = renderCellCollapse(columnsCount - columnIndex, {});
  } else if (columnIndex <= level && props.locked) {
    td2Props = {
      className: "k-table-td",
      role: "gridcell",
      colSpan: columnsCount - columnIndex,
      style: { borderLeftWidth: 0, borderRightWidth: 0 },
      onContextMenu
    };
    defaultRendering = React80.createElement(
      React80.Fragment,
      null,
      renderCellCollapse(0, { position: "sticky", zIndex: 2 }),
      React80.createElement("td", __assign41({}, td2Props))
    );
  }
  var rowTypeSetting = props.rowType || "data";
  var customCells = props.cells;
  if (customCells && customCells.group && customCells.group[rowTypeSetting]) {
    var CustomCell = customCells.group[rowTypeSetting];
    return React80.createElement(CustomCell, __assign41({}, props, { tdProps, td2Props }), content);
  }
  return render ? render.call(void 0, defaultRendering, props) : defaultRendering;
};

// node_modules/@progress/kendo-react-grid/dist/es/rows/GridRow.js
var React81 = __toESM(require_react());
var __extends41 = function() {
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
var __assign42 = function() {
  __assign42 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign42.apply(this, arguments);
};
var GridRow = (
  /** @class */
  function(_super) {
    __extends41(GridRow2, _super);
    function GridRow2() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    GridRow2.prototype.render = function() {
      var _a14;
      var className = classNames("k-table-row", {
        "k-grouping-row": this.props.rowType === "groupHeader",
        "k-group-footer": this.props.rowType === "groupFooter",
        "k-master-row": this.props.rowType !== "groupHeader" && this.props.rowType !== "groupFooter",
        "k-table-alt-row k-alt": this.props.rowType !== "groupHeader" && this.props.rowType !== "groupFooter" && this.props.isAltRow,
        "k-selected": this.props.isSelected,
        "k-grid-edit-row": this.props.isInEdit
      });
      var defaultRendering = React81.createElement("tr", __assign42({ id: this.props.id, onClick: this.props.onClick, onDoubleClick: this.props.onDoubleClick, className, style: {
        height: this.props.rowHeight ? this.props.rowHeight + "px" : "",
        visibility: this.props.isHidden ? "hidden" : ""
      }, role: "row", "aria-rowindex": this.props.ariaRowIndex, "absolute-row-index": this.props.absoluteRowIndex, key: this.props.absoluteRowIndex }, (_a14 = {}, _a14[GRID_ROW_INDEX_ATTRIBUTE] = this.props.rowType === "data" ? this.props.dataIndex : void 0, _a14)), this.props.children);
      return this.props.render ? this.props.render.call(void 0, defaultRendering, this.props) : defaultRendering;
    };
    return GridRow2;
  }(React81.Component)
);

// node_modules/@progress/kendo-react-grid/dist/es/header/GridHeaderSelectionCell.js
var React82 = __toESM(require_react());
var __extends42 = function() {
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
var __assign43 = function() {
  __assign43 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign43.apply(this, arguments);
};
var GridHeaderSelectionCell = (
  /** @class */
  function(_super) {
    __extends42(GridHeaderSelectionCell2, _super);
    function GridHeaderSelectionCell2() {
      var _this = _super !== null && _super.apply(this, arguments) || this;
      _this._inputId = guid();
      return _this;
    }
    GridHeaderSelectionCell2.prototype.render = function() {
      var _this = this;
      var columnMenuWrapperProps = this.props.columnMenuWrapperProps;
      var defaultRendering = [
        React82.createElement("input", { key: 0, checked: this.props.selectionValue, id: this._inputId, type: "checkbox", className: "k-checkbox k-checkbox-md k-rounded-md", onChange: function(e) {
          return _this.props.selectionChange({
            field: _this.props.field,
            syntheticEvent: e
          });
        } }),
        React82.createElement("label", { key: 1, className: "k-checkbox-label", htmlFor: this._inputId }),
        columnMenuWrapperProps.columnMenu && React82.createElement(GridColumnMenuWrapper, __assign43({}, columnMenuWrapperProps))
      ];
      return this.props.render ? this.props.render.call(void 0, defaultRendering, this.props) : defaultRendering;
    };
    return GridHeaderSelectionCell2;
  }(React82.Component)
);

// node_modules/@progress/kendo-react-grid/dist/es/GridNoRecords.js
var React83 = __toESM(require_react());
var __extends43 = function() {
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
var GridNoRecords = (
  /** @class */
  function(_super) {
    __extends43(GridNoRecords2, _super);
    function GridNoRecords2() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    GridNoRecords2.prototype.render = function() {
      return this.props.children || provideLocalizationService(this).toLanguageString(noRecords, messages6[noRecords]);
    };
    GridNoRecords2.displayName = "KendoReactGridNoRecords";
    return GridNoRecords2;
  }(React83.Component)
);
registerForLocalization(GridNoRecords);

// node_modules/@progress/kendo-react-grid/dist/es/footer/FooterRow.js
var React84 = __toESM(require_react());
var __extends44 = function() {
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
var __assign44 = function() {
  __assign44 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign44.apply(this, arguments);
};
var FooterRow = (
  /** @class */
  function(_super) {
    __extends44(FooterRow2, _super);
    function FooterRow2() {
      var _this = _super !== null && _super.apply(this, arguments) || this;
      _this._element = null;
      _this.renderCell = function(column, index) {
        var _a14;
        var tdProps = (_a14 = {
          colSpan: column.colSpan !== 1 ? column.colSpan : void 0,
          style: column.left !== void 0 ? !_this.props.isRtl ? { left: column.left, right: column.right } : { left: column.right, right: column.left } : {},
          className: classNames("k-table-td", column.locked && column.left !== void 0 ? "k-grid-footer-sticky" : ""),
          key: index,
          role: "gridcell"
        }, _a14["aria-colindex"] = column.ariaColumnIndex, _a14);
        var cellProps = __assign44({ field: column.field, ariaColumnIndex: column.ariaColumnIndex }, tdProps);
        var customCells = resolveCells(_this.props.cells, column.cells);
        if (customCells && customCells.footerCell) {
          var CustomCell = customCells.footerCell;
          return React84.createElement(CustomCell, __assign44({}, cellProps, { tdProps, index }));
        }
        return column.footerCell && React84.createElement(column.footerCell, __assign44({}, cellProps, { key: index })) || React84.createElement("td", __assign44({}, tdProps));
      };
      return _this;
    }
    Object.defineProperty(FooterRow2.prototype, "element", {
      get: function() {
        return this._element;
      },
      enumerable: false,
      configurable: true
    });
    FooterRow2.prototype.render = function() {
      return React84.createElement("tr", { className: "k-table-row", role: "row", "aria-rowindex": this.props.ariaRowIndex }, footerColumns(this.props.columns).map(this.renderCell));
    };
    return FooterRow2;
  }(React84.Component)
);

// node_modules/@progress/kendo-react-grid/dist/es/paging/GridPagerSettings.js
var normalizeSettings = function(_a14) {
  var _b3 = _a14.buttonCount, buttonCount = _b3 === void 0 ? 10 : _b3, _c6 = _a14.info, info = _c6 === void 0 ? true : _c6, _d = _a14.type, type = _d === void 0 ? "numeric" : _d, _e = _a14.pageSizes, pageSizes = _e === void 0 ? void 0 : _e, _f = _a14.previousNext, previousNext = _f === void 0 ? true : _f, _g = _a14.responsive, responsive = _g === void 0 ? void 0 : _g, _h = _a14.pageSizeValue, pageSizeValue = _h === void 0 ? void 0 : _h;
  return {
    buttonCount,
    info,
    pageSizes: pageSizes === true ? [5, 10, 20] : pageSizes || void 0,
    previousNext,
    responsive: responsive === false ? false : true,
    type,
    pageSizeValue
  };
};
var normalize4 = function(settings) {
  return normalizeSettings(settings === true ? {} : settings);
};

// node_modules/@progress/kendo-react-grid/dist/es/package-metadata.js
var packageMetadata8 = {
  name: "@progress/kendo-react-grid",
  productName: "KendoReact",
  productCodes: ["KENDOUIREACT", "KENDOUICOMPLETE"],
  publishDate: 1700064650,
  version: "",
  licensingDocsUrl: "https://www.telerik.com/kendo-react-ui/my-license/?utm_medium=product&utm_source=kendoreact&utm_campaign=kendo-ui-react-purchase-license-keys-warning"
};

// node_modules/@progress/kendo-react-grid/dist/es/cells/GridDetailCell.js
var React85 = __toESM(require_react());
var __assign45 = function() {
  __assign45 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign45.apply(this, arguments);
};
var GridDetailCell = function(props) {
  var colSpan = props.colSpan, ariaColIndex = props.ariaColIndex, dataItem = props.dataItem, dataIndex = props.dataIndex, id = props.id;
  var navigationAttributes = useTableKeyboardNavigation(id);
  var onContextMenu = React85.useCallback(function(event) {
    if (props.onContextMenu) {
      props.onContextMenu.call(void 0, event, props.dataItem);
    }
  }, [props.onContextMenu, props.dataItem]);
  return React85.createElement(
    "td",
    __assign45({ onContextMenu, className: "k-table-td k-detail-cell", colSpan, "aria-colindex": ariaColIndex, role: "gridcell" }, navigationAttributes),
    React85.createElement(props.detail, { dataItem, dataIndex })
  );
};

// node_modules/@progress/kendo-react-grid/dist/es/cells/GridDetailHierarchyCell.js
var React86 = __toESM(require_react());
var __assign46 = function() {
  __assign46 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign46.apply(this, arguments);
};
var GridDetailHierarchyCell = function(props) {
  var navigationAttributes = useTableKeyboardNavigation(props.id);
  return React86.createElement("td", __assign46({ className: "k-table-td k-hierarchy-cell" }, navigationAttributes, { role: "gridcell" }));
};

// node_modules/@progress/kendo-react-grid/dist/es/Grid.js
var __extends45 = function() {
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
var __assign47 = function() {
  __assign47 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign47.apply(this, arguments);
};
var __spreadArray9 = function(to, from, pack) {
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
var Grid = (
  /** @class */
  function(_super) {
    __extends45(Grid2, _super);
    function Grid2(props) {
      var _this = _super.call(this, props) || this;
      _this._columns = [];
      _this._columnsMap = [[]];
      _this._columnsMutations = 0;
      _this._resized = false;
      _this._shouldUpdateLeftRight = true;
      _this.contextStateRef = { current: void 0 };
      _this.navigationStateRef = { current: void 0 };
      _this._data = [];
      _this._slicedData = void 0;
      _this.wrapperScrollTop = 0;
      _this.showLicenseWatermark = false;
      _this.headerRef = React87.createRef();
      _this.headerElementRef = React87.createRef();
      _this._element = null;
      _this.tableElement = null;
      _this.containerRef = React87.createRef();
      _this.tableBodyRef = React87.createRef();
      _this._footer = null;
      _this.forceUpdateTimeout = void 0;
      _this.isRtl = false;
      _this._gridId = guid();
      _this._gridRoleElementId = guid();
      _this.observer = null;
      _this.handleIntersection = function(entries) {
        var options = { rowIndex: _this.rowIndex };
        entries.forEach(function(entry) {
          if (!entry.isIntersecting) {
            _this.setCurrentOnTop(options);
          }
        });
      };
      _this.setCurrentOnTop = function(options) {
        if (!_this.vs.container || _this.props.scrollable === "none") {
          return;
        }
        if (_this.observer) {
          _this.observer.disconnect();
        }
        var rowIndex = options.rowIndex;
        if (_this.props.scrollable === "virtual") {
          _this.vs.askedSkip = rowIndex;
          _this.vs.container.scroll(0, Math.round(_this.vs.askedSkip / _this.vs.total * _this.vs.container.scrollHeight));
        } else if (_this.element) {
          var selectedRow = rowIndex < 1 ? _this.element.querySelector("tbody > tr:nth-child(".concat(1, ")")) : _this.element.querySelector("tbody > tr:nth-child(".concat(rowIndex + 1, ")"));
          if (selectedRow && _this.containerRef.current) {
            _this.containerRef.current.scrollTop = selectedRow.offsetTop;
          }
        }
      };
      _this.scrollIntoView = function(options) {
        if (!_this.vs.container || _this.props.scrollable === "none") {
          return;
        }
        _this.rowIndex = options.rowIndex;
        var rowIndex = options.rowIndex;
        var element2 = _this.element;
        if (_this.observer && element2) {
          _this.observer.disconnect();
          var target = element2.querySelector('[absolute-row-index="'.concat(rowIndex, '"]'));
          if (target) {
            _this.observer.observe(target);
          } else {
            _this.setCurrentOnTop(options);
          }
        }
      };
      _this.fitColumns = function(columnIds) {
        _this.columnResize.dblClickHandler(null, columnIds);
      };
      _this.onContextMenu = function(event, dataItem, field) {
        if (_this.props.onContextMenu) {
          var ev = {
            target: _this,
            syntheticEvent: event,
            nativeEvent: event.nativeEvent,
            dataItem,
            field
          };
          _this.props.onContextMenu.call(void 0, ev);
        }
      };
      _this.getVirtualScroll = function(props2) {
        var rowHeight = props2.rowHeight, detailRowHeight = props2.detailRowHeight, detail = props2.detail, expandField = props2.expandField, groupable2 = props2.groupable;
        var hasAllData = _this.isAllData();
        var hasRowHeight = rowHeight !== void 0 && rowHeight > 0;
        var hasDetailRowHeight = detailRowHeight !== void 0 && detailRowHeight > 0;
        var isGroupable = groupable2 === true || typeof groupable2 === "object" && groupable2.enabled !== false;
        var hasDetails = Boolean(detail && expandField);
        if (!hasRowHeight || isGroupable && !hasAllData || hasDetails && (!hasDetailRowHeight || !hasAllData)) {
          return VirtualScroll2;
        }
        return VirtualScrollFixed;
      };
      _this.isAllData = function() {
        var _a14 = _this.props, data = _a14.data, total = _a14.total;
        if (Array.isArray(data)) {
          return data.length === total;
        } else if (data) {
          return total === data.total;
        }
        return false;
      };
      _this.initializeVirtualization = function(total, groupable2) {
        _this.reInitVirtualization(_this.props.scrollable === "virtual", _this.props.total, _this.props.filter, _this.props.group, _this.props.sort, groupable2 || _this.props.rowHeight === void 0 || _this.props.rowHeight === 0);
        _this.vs.fixedScroll = _this.props.fixedScroll || false;
        _this.vs.PageChange = _this.pageChange;
        _this.vs.realSkip = _this.props.skip || 0;
        _this.vs.pageSize = (_this.props.take !== void 0 ? _this.props.take : _this.props.pageSize) || 0;
        _this.vs.scrollableVirtual = _this.props.scrollable === "virtual";
        _this.vs.total = total;
        _this.vs.propsSkip = (_this.props.skip || 0) + (_this.props.scrollable === "virtual" ? _this.vs.topCacheCount + (_this.vs.attendedSkip - (_this.props.skip || 0)) : 0);
        if (_this.props.rowHeight !== void 0 && _this.props.rowHeight > 0 && !groupable2) {
          var containerHeight = _this.props.rowHeight * total;
          _this.vs.containerHeight = firefox ? Math.min(firefoxMaxHeight, containerHeight) : containerHeight;
        } else {
          _this.vs.containerHeight = 1533915;
        }
        _this.vs.containerRef = _this.containerRef;
        _this.vs.tableBodyRef = _this.tableBodyRef;
        _this.vs.table = _this.tableElement;
        _this._slicedData = void 0;
        if (_this.vs instanceof VirtualScrollFixed) {
          var _a14 = _this.props, _b3 = _a14.rowHeight, rowHeight = _b3 === void 0 ? 0 : _b3, detail = _a14.detail, expandField = _a14.expandField;
          var _c6 = _this.props.detailRowHeight, detailRowHeight = _c6 === void 0 ? 0 : _c6;
          detailRowHeight = Boolean(detail && expandField) ? detailRowHeight : rowHeight;
          if (_this.isAllData()) {
            _this.vs.total = _this._data.length;
            _this._slicedData = _this._data.slice(_this.vs.realSkip, _this.vs.realSkip + _this.vs.pageSize);
            _this.vs.rowHeightService = _this.rowHeightService(_this.vs, _this._data.length, rowHeight, detailRowHeight, _this._data);
          } else {
            _this.vs.rowHeightService = new RowHeightService2(total, rowHeight, detailRowHeight);
          }
          var containerHeight = _this.vs.rowHeightService.totalHeight();
          _this.vs.containerHeight = firefox ? Math.min(firefoxMaxHeight, containerHeight) : containerHeight;
        }
      };
      _this.scrollHandler = function(event) {
        if (event.target !== event.currentTarget) {
          return;
        }
        clearTimeout(_this.forceUpdateTimeout);
        _this.vs.table = _this.tableElement;
        var scrollLeft = event.currentTarget.scrollLeft;
        var scrollTop = event.currentTarget.scrollTop;
        if (_this.props.columnVirtualization && (!_this.vs.scrollableVirtual || scrollTop === _this.wrapperScrollTop)) {
          _this.forceUpdateTimeout = window.setTimeout(function() {
            _this.forceUpdate();
          }, 0);
        }
        if (_this._header) {
          _this._header.setScrollLeft(scrollLeft);
        }
        if (_this._footer) {
          _this._footer.setScrollLeft(scrollLeft);
        }
        if (_this.vs && scrollTop !== _this.wrapperScrollTop) {
          _this.vs.scrollHandler(event);
        }
        dispatchEvent(_this.props.onScroll, event, _this, void 0);
        _this.wrapperScrollTop = scrollTop;
      };
      _this.onKeyDown = function(event) {
        tableKeyboardNavigation.onKeyDown(event, {
          contextStateRef: _this.contextStateRef,
          navigationStateRef: _this.navigationStateRef,
          onNavigationAction: _this.onNavigationAction
        });
        if (_this.props.onKeyDown) {
          var _a14 = getSelectionOptions(_this.props.selectable), mode = _a14.mode, cell = _a14.cell;
          var ev = __assign47({ dataItems: _this.getLeafDataItems(), mode, cell, componentId: _this._gridId, selectedField: _this.props.selectedField }, _this.getArguments(event));
          _this.props.onKeyDown.call(void 0, ev);
        }
      };
      _this.onFocus = function(event) {
        tableKeyboardNavigation.onFocus(event, {
          contextStateRef: _this.contextStateRef
        });
      };
      _this.onNavigationAction = function(options) {
        if (_this.props.onNavigationAction) {
          var ev = __assign47({ focusElement: options.focusElement }, _this.getArguments(options.event));
          _this.props.onNavigationAction.call(void 0, ev);
        }
      };
      _this.rowClick = function(e, item) {
        if (_this.props.onRowClick && e.target.nodeName === "TD") {
          _this.props.onRowClick.call(void 0, __assign47({ dataItem: item.dataItem }, _this.getArguments(e)));
        }
      };
      _this.rowDblClick = function(e, item) {
        if (_this.props.onRowDoubleClick && e.target.nodeName === "TD") {
          _this.props.onRowDoubleClick.call(void 0, __assign47({ dataItem: item.dataItem }, _this.getArguments(e)));
        }
      };
      _this.itemChange = function(event) {
        var itemChange = _this.props.onItemChange;
        if (event.field === _this.props.expandField || _this.props.group && event.field === void 0) {
          var expandChange = _this.props.onExpandChange;
          if (expandChange) {
            expandChange.call(void 0, __assign47(__assign47({}, _this.getArguments(event.syntheticEvent)), { dataItem: event.dataItem, dataIndex: event.dataIndex, value: event.value }));
          }
          return;
        }
        if (itemChange) {
          itemChange.call(void 0, __assign47(__assign47({}, _this.getArguments(event.syntheticEvent)), { dataItem: event.dataItem, field: event.field, value: event.value }));
        }
      };
      _this.onHeaderSelectionChange = function(event) {
        if (_this.props.onHeaderSelectionChange) {
          _this.props.onHeaderSelectionChange.call(void 0, {
            field: event.field,
            nativeEvent: event.syntheticEvent && event.syntheticEvent.nativeEvent,
            syntheticEvent: event.syntheticEvent,
            target: _this,
            dataItems: _this.getLeafDataItems(),
            selectedField: _this.props.selectedField
          });
        }
      };
      _this.selectionRelease = function(event) {
        if (_this.props.onSelectionChange) {
          var selectionEvent = __assign47({ syntheticEvent: void 0, target: _this, selectedField: _this.props.selectedField || "", componentId: _this._gridId, dataItems: _this.getLeafDataItems(), dataItem: null }, event);
          _this.props.onSelectionChange.call(void 0, selectionEvent);
        }
      };
      _this.pageChange = function(page, syntheticEvent, targetEvent) {
        _this.raiseDataEvent(_this.props.onPageChange, { page }, { skip: page.skip, take: page.take }, syntheticEvent, targetEvent);
      };
      _this.pagerPageChange = function(event) {
        _this.pageChange({ skip: event.skip, take: event.take }, event.syntheticEvent, event.targetEvent);
      };
      _this.sortChange = function(sort, syntheticEvent) {
        _this.raiseDataEvent(_this.props.onSortChange, { sort }, __assign47({ sort }, _this.props.scrollable === "virtual" ? { skip: 0 } : {}), syntheticEvent);
      };
      _this.filterChange = function(filter, syntheticEvent) {
        _this.raiseDataEvent(_this.props.onFilterChange, { filter }, { filter: filter || void 0, skip: 0 }, syntheticEvent);
      };
      _this.groupChange = function(groups, event) {
        var syntheticEvent = event.nativeEvent ? event : { nativeEvent: event.nativeEvent || event.originalEvent };
        _this.raiseDataEvent(_this.props.onGroupChange, { group: groups }, { group: groups, skip: 0 }, syntheticEvent);
      };
      _this.onResize = function(index, newWidth, oldWidth, nativeEvent, end2, targetId) {
        _this.resetTableWidth();
        _this._shouldUpdateLeftRight = true;
        _this._resized = true;
        _this._columnsMutations++;
        if (_this.props.onColumnResize) {
          _this.props.onColumnResize.call(void 0, {
            columns: _this.columns,
            nativeEvent,
            targetColumnId: targetId,
            index,
            newWidth,
            oldWidth,
            end: end2,
            target: _this
          });
        }
      };
      _this.reInitVirtualization = memoizeOne(function(_vScrolling, _total, _filter, _group, _sort, useCached) {
        _this.vs.reset();
        var VS2 = _this.getVirtualScroll(_this.props);
        _this.vs = new VS2(useCached);
      });
      _this.flatData = memoizeOne(function(propsData, groupingFooter, skip, group, expandField, _filter, _sort) {
        var flattedData = [];
        var resolvedGroupsCount = flatData(flattedData, propsData, groupingFooter, { index: skip }, group !== void 0, expandField);
        return { flattedData, resolvedGroupsCount };
      });
      _this.rowHeightService = memoizeOne(function(_vs, total, rowHeight, detailRowHeight, data) {
        return new RowHeightService2(total, rowHeight, detailRowHeight, data);
      });
      _this.childrenToArray = memoizeOne(function(children) {
        return React87.Children.toArray(children);
      });
      _this.readColumns = memoizeOne(function(children, idPrefix, _mutationsCount) {
        var columnElements = children.filter(function(child) {
          return child && child.type && child.type.displayName === "KendoReactGridColumn";
        });
        return readColumns(columnElements, _this.columns, { prevId: 0, idPrefix });
      });
      _this.mapColumns = memoizeOne(function(columns) {
        return mapColumns(columns);
      });
      _this.configureColumns = memoizeOne(function(columns, groupCount, idPrefix) {
        if (_this.props.selectedField) {
          columns.filter(function(c) {
            return c.field === _this.props.selectedField;
          }).forEach(function(c) {
            c.width = c.width || "50px";
            c.cell = c.cell || GridSelectionCell;
            c.headerCell = c.headerCell || GridHeaderSelectionCell;
          });
        }
        var defaultServiceProps = {
          id: "",
          resizable: true,
          width: "32px",
          title: " ",
          declarationIndex: -1,
          orderIndex: -1,
          children: [],
          parentIndex: -1,
          depth: 0,
          colSpan: 0,
          rowSpan: 0,
          left: 0,
          right: 0,
          index: 0,
          rightBorder: false,
          ariaColumnIndex: 0,
          isAccessible: true
        };
        var columnIndexOffset = 0;
        if (_this.props.expandField && _this.props.onExpandChange && _this.props.detail) {
          columns.unshift(__assign47(__assign47({}, defaultServiceProps), { cell: GridHierarchyCell, field: _this.props.expandField, headerClassName: "k-hierarchy-cell k-header", id: tableKeyboardNavigationTools.generateNavigatableId("".concat(_this._columns.length), idPrefix, "column") }));
          columnIndexOffset++;
        }
        for (var i = 0; i < groupCount; i++) {
          columns.unshift(__assign47(__assign47({}, defaultServiceProps), { isAccessible: false, cell: GridGroupCell, field: "value", locked: _this.props.lockGroups }));
          columnIndexOffset++;
        }
        columns.slice(columnIndexOffset).forEach(function(c) {
          return c.parentIndex >= 0 && (c.parentIndex += columnIndexOffset);
        });
      });
      _this.getHeaderRow = memoizeOne(function(sort, sortable, group, groupable2, filter, filterable, filterOperators, headerCellRender, columnMenu2, columns, columnsMap, isHeaderRtl) {
        return React87.createElement(HeaderRow, { cells: _this.props.cells, sort, sortable, sortChange: _this.sortChange, group: group || [], groupable: groupable2, groupChange: _this.groupChange, filter, filterable, filterOperators, filterChange: _this.filterChange, columnMenu: columnMenu2, selectionChange: _this.onHeaderSelectionChange, columns, columnResize: _this.columnResize, pressHandler: _this.dragLogic.pressHandler, dragHandler: _this.dragLogic.dragHandler, releaseHandler: _this.dragLogic.releaseHandler, columnsMap, cellRender: headerCellRender, isRtl: isHeaderRtl, dragClue: _this.dragLogic.dragClueRef, headerRef: _this.headerElementRef, containerRef: _this.containerRef });
      });
      _this.resolveTitle = function(field) {
        var column = _this._columns.find(function(c) {
          return c.field === field;
        });
        var title = column && (column.title || column.field);
        return title === void 0 ? field : title;
      };
      _this.getLeafDataItems = function() {
        return _this._data.filter(function(item) {
          return item.rowType === "data";
        }).map(function(item) {
          return item.dataItem;
        });
      };
      validatePackage(packageMetadata8);
      _this.showLicenseWatermark = shouldShowValidationUI(packageMetadata8);
      var groupable = _this.props.groupable === true || typeof _this.props.groupable === "object" && _this.props.groupable.enabled !== false;
      var VS = _this.getVirtualScroll(props);
      _this.vs = new VS(groupable || props.rowHeight === void 0 || props.rowHeight === 0);
      _this.dragLogic = new CommonDragLogic(_this.columnReorder.bind(_this), _this.groupReorder.bind(_this), _this.columnToGroup.bind(_this));
      _this.columnResize = new ColumnResize(_this.onResize);
      tableKeyboardNavigation.onConstructor({
        navigatable: Boolean(props.navigatable),
        contextStateRef: _this.contextStateRef,
        navigationStateRef: _this.navigationStateRef,
        idPrefix: _this._gridId
      });
      return _this;
    }
    Object.defineProperty(Grid2.prototype, "columns", {
      /* eslint-disable max-len */
      /**
       * A getter of the current columns. Gets the current column width or current columns, or any other [`GridColumnProps`]({% slug api_grid_gridcolumnprops %}) for each defined column. Can be used on each Grid instance. To obtain the instance of the rendered Grid, use the `ref` callback. The following example demonstrates how to reorder the columns by dragging their handlers and check the properties afterwards. You can check the result in the browser console.
       *
       * @example
       * ```jsx
       * class App extends React.Component {
       *     constructor(props) {
       *         super(props);
       *         this.state = {
       *             data: [
       *                 { 'foo': 'A1', 'bar': 'B1' },
       *                 { 'foo': 'A2', 'bar': 'B2' },
       *                 { 'foo': 'A3', 'bar': 'B2' }
       *             ]
       *         };
       *         this.grid = null;
       *     }
       *     render() {
       *         return (
       *             <div>
       *                 <Grid
       *                     data={this.state.data}
       *                     reorderable={true}
       *                     ref={(g) => { this.grid = g; }}
       *                 >
       *                     <GridColumn field="foo" />
       *                     <GridColumn field="bar" />
       *                 </Grid>
       *                 <button onClick={() => console.log(JSON.stringify(this.grid.columns))}>
       *                     log current properties into browser console.
       *                 </button>
       *             </div>
       *         );
       *     }
       * }
       * ReactDOM.render(<App />, document.querySelector('my-app'));
       * ```
       */
      // tslint:enable:max-line-length
      get: function() {
        var shuffledColumns = this._columns.filter(function(q) {
          return q.declarationIndex >= 0 && q.parentIndex === -1;
        });
        return sanitizeColumns(shuffledColumns);
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(Grid2.prototype, "element", {
      /**
       * Returns the HTML element of the Grid component.
       */
      get: function() {
        return this._element;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(Grid2.prototype, "document", {
      get: function() {
        if (!canUseDOM) {
          return;
        }
        return this.element && this.element.ownerDocument || document;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(Grid2.prototype, "_header", {
      get: function() {
        return this.headerRef.current;
      },
      enumerable: false,
      configurable: true
    });
    Grid2.prototype.componentDidMount = function() {
      this.resetTableWidth();
      setScrollbarWidth();
      var rtl = isRtl(this.element);
      this.isRtl = rtl;
      tableKeyboardNavigation.onComponentDidMount({
        scope: this.element || void 0,
        contextStateRef: this.contextStateRef,
        navigationStateRef: this.navigationStateRef
      });
      if (this.isRtl) {
        this.forceUpdate();
      }
      var observerOptions = {
        rootMargin: "0px",
        threshold: 0.9
      };
      this.observer = canUseDOM && window.IntersectionObserver && new window.IntersectionObserver(this.handleIntersection, observerOptions) || null;
    };
    Grid2.prototype.getSnapshotBeforeUpdate = function() {
      tableKeyboardNavigation.onGetSnapshotBeforeUpdate({
        document: this.document,
        contextStateRef: this.contextStateRef,
        navigationStateRef: this.navigationStateRef
      });
      return null;
    };
    Grid2.prototype.componentDidUpdate = function() {
      this.resetTableWidth();
      setScrollbarWidth();
      if (this.vs.tableTransform && this.vs.table) {
        this.vs.table.style.transform = this.vs.tableTransform;
        this.vs.tableTransform = "";
      }
      tableKeyboardNavigation.onComponentDidUpdate({
        scope: this.element || void 0,
        contextStateRef: this.contextStateRef,
        navigationStateRef: this.navigationStateRef
      });
    };
    Grid2.prototype.componentWillUnmount = function() {
      clearTimeout(this.forceUpdateTimeout);
    };
    Grid2.prototype.render = function() {
      var _a14, _b3, _c6, _d;
      var _this = this;
      var _e;
      var total = this.props.total || 0;
      var idPrefix = tableKeyboardNavigationTools.getIdPrefix(this.navigationStateRef);
      var propsData = [];
      if (Array.isArray(this.props.data)) {
        propsData = this.props.data;
        total = total || this.props.data.length;
      } else if (this.props.data) {
        propsData = this.props.data.data;
        total = total || this.props.data.total;
      }
      var groupingFooter = typeof this.props.groupable === "object" && this.props.groupable.footer || "none";
      var _f = this.flatData(propsData, groupingFooter, this.props.skip || 0, this.props.group, this.props.expandField, this.props.filter, this.props.sort), resolvedGroupsCount = _f.resolvedGroupsCount, flattedData = _f.flattedData;
      this._data = flattedData;
      var groupable = this.props.groupable === true || typeof this.props.groupable === "object" && this.props.groupable.enabled !== false;
      this.columnResize.resizable = this.props.resizable || false;
      this.dragLogic.reorderable = this.props.reorderable || false;
      this.dragLogic.groupable = groupable;
      var tableUserSelect = this.props.selectable && this.props.selectable.drag ? "none" : void 0;
      this.initializeVirtualization(total, groupable);
      var children = this.childrenToArray(this.props.children);
      this.initColumns(children, resolvedGroupsCount);
      var toolbar = children.map(function(child) {
        if (child && child.type && child.type.displayName === "KendoReactGridToolbar") {
          return React87.cloneElement(child, __assign47(__assign47({}, child.props), { ariaControls: _this._gridRoleElementId }));
        }
        return null;
      });
      var noRecords2 = children.filter(function(child) {
        return child && child.type && child.type.displayName === "KendoReactGridNoRecords";
      });
      var statusBar = children.filter(function(child) {
        return child && child.type && child.type.displayName === "KendoReactGridStatusBar";
      });
      var leafColumns = this._columns.filter(function(c) {
        return c.children.length === 0;
      });
      var groupingPanel = groupable && React87.createElement(GroupPanel, { group: this.props.group || [], groupChange: this.groupChange, pressHandler: this.dragLogic.pressHandler, dragHandler: this.dragLogic.dragHandler, releaseHandler: this.dragLogic.releaseHandler, refCallback: this.dragLogic.refGroupPanelDiv, resolveTitle: this.resolveTitle, ariaControls: this._gridRoleElementId, onContextMenu: this.onContextMenu });
      var _g = this.props, sort = _g.sort, sortable = _g.sortable, group = _g.group, filter = _g.filter, filterable = _g.filterable, _h = _g.filterOperators, filterOperators = _h === void 0 ? operators : _h, headerCellRender = _g.headerCellRender, columnMenu2 = _g.columnMenu;
      var header = React87.createElement(Header2, { size: this.props.size, columnResize: this.columnResize, staticHeaders: this.props.scrollable !== "none", scrollableDataElement: function() {
        return _this.vs.container;
      }, draggable: this.props.reorderable || groupable, ref: this.headerRef, elemRef: this.headerElementRef, headerRow: this.getHeaderRow(sort, sortable, group, groupable, filter, filterable, filterOperators, headerCellRender, columnMenu2, this._columns, this._columnsMap, this.isRtl), filterRow: this.props.filterable && React87.createElement(FilterRow, { cells: this.props.cells, size: this.props.size, columns: this._columns, filter: this.props.filter, filterOperators: this.props.filterOperators || operators, filterChange: this.filterChange, sort: this.props.sort, cellRender: this.props.filterCellRender, isRtl: this.isRtl, ariaRowIndex: this._columnsMap.length + 1 }) || void 0, cols: leafColumns.map(function(column, index) {
        return React87.createElement("col", { key: index.toString(), width: getColumnWidth2(column) });
      }) });
      var scrollLeft = this.vs && this.vs.container && this.vs.container.scrollLeft || 0;
      var tableWidth = parseFloat(((this.props.style || {}).width || "").toString());
      var _j = tableColumnsVirtualization({
        enabled: this.props.columnVirtualization,
        columns: leafColumns,
        tableViewPortWidth: tableWidth,
        scrollLeft
      }), colSpans = _j.colSpans, isColHidden = _j.hiddenColumns;
      var dataRow = function(item2, rowId, rowDataIndex) {
        var isInEdit = false;
        var selectedValue = _this.props.selectedField ? getNestedValue(_this.props.selectedField, item2.dataItem) : void 0;
        return {
          row: leafColumns.map(function(column, columnIndex) {
            if (isColHidden[columnIndex]) {
              return null;
            }
            var columnKey = column.id ? column.id : columnIndex;
            var className = "".concat(column.className ? column.className + " " : "") + "".concat(column.locked ? "k-grid-content-sticky" : "");
            var style = column.left !== void 0 ? !_this.isRtl ? { left: column.left, right: column.right } : { left: column.right, right: column.left } : {};
            var currentColumnIsInEdit = false;
            if (column.editable && _this.props.editField) {
              var inEdit = getNestedValue(_this.props.editField, item2.dataItem);
              if (inEdit && (inEdit === true || inEdit === column.field)) {
                isInEdit = true;
                currentColumnIsInEdit = true;
              }
            }
            var Cell = column.cell || currentColumnIsInEdit && GridEditCell || GridCell;
            return React87.createElement(Cell, { onContextMenu: _this.onContextMenu, key: columnKey, locked: _this.props.lockGroups, id: tableKeyboardNavigationTools.generateNavigatableId("".concat(rowId, "-").concat(String(columnIndex)), idPrefix), colSpan: colSpans[columnIndex], dataItem: item2.dataItem, field: column.field, editor: column.editor, format: column.format, className, render: _this.props.cellRender, cells: resolveCells(_this.props.cells, column.cells), onChange: _this.itemChange, selectionChange: _this.props.onSelectionChange ? function(e) {
              _this.selectionChange({ event: e, dataItem: item2.dataItem, dataIndex: rowDataIndex, columnIndex });
            } : void 0, columnIndex, columnsCount: leafColumns.length, rowType: item2.rowType, level: item2.level, expanded: item2.expanded, dataIndex: item2.dataIndex, style, ariaColumnIndex: column.ariaColumnIndex, isSelected: Array.isArray(selectedValue) && selectedValue.indexOf(columnIndex) > -1 });
          }),
          isInEdit,
          isSelected: typeof selectedValue === "boolean" && selectedValue
        };
      };
      var hiddenRows = 0;
      if (this.props.scrollable === "virtual") {
        for (var i = 0; i < this.vs.topCacheCount + this.vs.attendedSkip - (this.props.skip || 0); i++) {
          var item = this._data.shift();
          if (item) {
            this._data.push(item);
            hiddenRows++;
            if (item.rowType === "groupHeader") {
              i--;
            }
          } else {
            break;
          }
        }
      }
      var hidden = function(index) {
        return index >= _this._data.length - hiddenRows;
      };
      var absoluteDataIndex = this.vs.realSkip || 0;
      var body = [];
      var rowIndexStart = this._columnsMap.length + (this.props.filterable ? 1 : 0) + 1;
      var currentAriaRowIndex = 0;
      if (this._data.length) {
        var dataIndex_1 = -1;
        var detailRowCount_1 = 0;
        (this._slicedData || this._data).forEach(function(item2, rowIndex) {
          if (item2.rowType === "data") {
            absoluteDataIndex++;
            dataIndex_1++;
          }
          var isAlt = absoluteDataIndex % 2 === 0;
          var dataItemKey = _this.props.dataItemKey && getter(_this.props.dataItemKey)(item2.dataItem);
          var absoluteIndex = rowIndex + (_this.vs.realSkip || 0);
          var rowId = dataItemKey ? dataItemKey : "ai" + absoluteIndex;
          var detailRowId = rowId + "_1";
          var gridRow = dataRow(item2, rowId, dataIndex_1);
          currentAriaRowIndex = absoluteIndex + rowIndexStart + detailRowCount_1;
          body.push(React87.createElement(GridRow, { key: rowId, dataItem: item2.dataItem, isAltRow: isAlt, isInEdit: gridRow.isInEdit, rowType: item2.rowType, isHidden: hidden(rowIndex), onClick: function(e) {
            return _this.rowClick(e, item2);
          }, onDoubleClick: function(e) {
            return _this.rowDblClick(e, item2);
          }, selectedField: _this.props.selectedField, rowHeight: _this.props.rowHeight, render: _this.props.rowRender, ariaRowIndex: currentAriaRowIndex, absoluteRowIndex: absoluteIndex, dataIndex: dataIndex_1, isSelected: gridRow.isSelected }, gridRow.row));
          if (_this.props.detail && item2.rowType === "data" && item2.expanded) {
            var detailColspan = leafColumns.length - (_this.props.expandField ? 1 : 0) - (_this.props.group ? _this.props.group.length : 0) || 1;
            detailRowCount_1++;
            currentAriaRowIndex = absoluteIndex + rowIndexStart + detailRowCount_1;
            body.push(React87.createElement(
              "tr",
              { key: detailRowId, className: classNames("k-table-row", isAlt ? "k-detail-row k-table-alt-row k-alt" : "k-detail-row"), style: { visibility: hidden(rowIndex) ? "hidden" : "", height: _this.props.detailRowHeight }, role: "row", "aria-rowindex": currentAriaRowIndex },
              _this.props.group && _this.props.group.map(function(gr, idx) {
                var _a15;
                var columnStyle = (_a15 = gridRow === null || gridRow === void 0 ? void 0 : gridRow.row[idx]) === null || _a15 === void 0 ? void 0 : _a15.props.style;
                var style = columnStyle ? !_this.isRtl ? { left: columnStyle.left, right: columnStyle.right } : { left: columnStyle.right, right: columnStyle.left } : {};
                return React87.createElement(GridGroupCell, { id: "", dataIndex: item2.dataIndex, field: gr.field, dataItem: item2.dataItem, key: idx, style, ariaColumnIndex: 1 + idx, isSelected: false, locked: _this.props.lockGroups, isRtl: _this.isRtl, cells: _this.props.cells });
              }),
              _this.props.expandField && React87.createElement(GridDetailHierarchyCell, { id: tableKeyboardNavigationTools.generateNavigatableId("".concat(detailRowId, "-dhcell"), idPrefix) }),
              React87.createElement(GridDetailCell, { onContextMenu: _this.onContextMenu, dataItem: item2.dataItem, dataIndex: item2.dataIndex, colSpan: detailColspan, ariaColIndex: 2 + (_this.props.group ? _this.props.group.length : 0), detail: _this.props.detail, id: tableKeyboardNavigationTools.generateNavigatableId("".concat(detailRowId, "-dcell"), idPrefix) })
            ));
          }
        });
      } else {
        body.push(React87.createElement(
          "tr",
          { key: "no-records", className: "k-table-row k-grid-norecords", role: "row", "aria-rowindex": rowIndexStart },
          React87.createElement("td", { className: "k-table-td", colSpan: leafColumns.length, role: "gridcell" }, noRecords2.length ? noRecords2 : React87.createElement(GridNoRecords, null))
        ));
      }
      var pagerProps = __assign47({ size: this.props.size, onPageChange: this.pagerPageChange, total, dir: this.isRtl ? "rtl" : void 0, skip: this.vs.propsSkip || 0, take: (this.props.take !== void 0 ? this.props.take : this.props.pageSize) || 10, messagesMap: pagerMessagesMap }, normalize4(this.props.pageable || {}));
      var pager = this.props.pager ? React87.createElement(this.props.pager, __assign47({}, pagerProps)) : React87.createElement(Pager, __assign47({ className: "k-grid-pager" }, pagerProps));
      var sorted = function(field) {
        return _this.props.sort && _this.props.sort.filter(function(descriptor) {
          return descriptor.field === field;
        }).length > 0;
      };
      var footerCols = function(column, index) {
        return React87.createElement("col", { key: index.toString(), width: getColumnWidth2(column) });
      };
      var footer = Boolean((_e = this.props.cells) === null || _e === void 0 ? void 0 : _e.footerCell) || this._columns.some(function(c) {
        var _a15;
        return Boolean(c.footerCell || Boolean((_a15 = c.cells) === null || _a15 === void 0 ? void 0 : _a15.footerCell));
      }) ? React87.createElement(Footer, { size: this.props.size, columnResize: this.columnResize, staticHeaders: this.props.scrollable !== "none", ref: function(f) {
        return _this._footer = f;
      }, row: React87.createElement(FooterRow, { cells: this.props.cells, columns: this._columns, isRtl: this.isRtl, ariaRowIndex: currentAriaRowIndex + 1 }), cols: leafColumns.map(footerCols) }) : null;
      var colGroups = React87.createElement("colgroup", { ref: function(c) {
        _this.columnResize.colGroupMain = c;
      } }, leafColumns.map(function(column, index) {
        return React87.createElement("col", { key: index.toString(), className: sorted(column.field) ? "k-sorted" : void 0, width: getColumnWidth2(column) });
      }));
      var enableDragClues = this.dragLogic.reorderable || this.dragLogic.groupable;
      var tableDisplay = this.props.columnVirtualization ? "block" : "table";
      if (this.props.scrollable === "none") {
        return React87.createElement(
          TableKeyboardNavigationContext.Provider,
          { value: this.contextStateRef.current },
          React87.createElement(
            "div",
            __assign47({ id: this.props.id, style: this.props.style, className: classNames("k-grid", (_a14 = {
              "k-grid-md": !this.props.size
            }, _a14["k-grid-".concat(kendoThemeMaps.sizeMap[this.props.size] || this.props.size)] = this.props.size, _a14), this.props.className), ref: function(el) {
              _this._element = el;
            }, "aria-label": this.props.ariaLabel, onKeyDown: this.onKeyDown, onFocus: this.onFocus }, tableKeyboardNavigationScopeAttributes),
            toolbar,
            groupingPanel,
            React87.createElement(
              TableSelection,
              { selectable: this.props.selectable, onRelease: this.selectionRelease, childRef: function(table) {
                _this.tableElement = table;
              } },
              React87.createElement(
                "table",
                { className: classNames("k-table k-grid-table", (_b3 = {}, _b3["k-table-".concat(kendoThemeMaps.sizeMap[this.props.size] || this.props.size)] = this.props.size, _b3)), style: { userSelect: tableUserSelect, display: tableDisplay } },
                colGroups,
                header,
                React87.createElement("tbody", __assign47({ role: "rowgroup", className: "k-table-tbody" }, tableKeyboardNavigationBodyAttributes), body),
                footer
              )
            ),
            enableDragClues && React87.createElement(
              React87.Fragment,
              null,
              React87.createElement(DropClue, { ref: this.dragLogic.refDropElementClue }),
              React87.createElement(DragClue, { ref: this.dragLogic.refDragElementClue })
            )
          ),
          statusBar,
          this.props.pageable && pager
        );
      }
      var wrapperStyle = this.props.style || {};
      if (this.props.scrollable === "virtual") {
        if (!wrapperStyle.height) {
          wrapperStyle = Object.assign({}, wrapperStyle, { height: "450px" });
        }
      }
      return React87.createElement(
        TableKeyboardNavigationContext.Provider,
        { value: this.contextStateRef.current },
        React87.createElement(
          "div",
          __assign47({ id: this.props.id, style: wrapperStyle, className: classNames("k-grid", (_c6 = {
            "k-grid-md": !this.props.size
          }, _c6["k-grid-".concat(kendoThemeMaps.sizeMap[this.props.size] || this.props.size)] = this.props.size, _c6["k-grid-virtual"] = this.props.scrollable === "virtual", _c6), this.props.className), ref: function(el) {
            _this._element = el;
          }, "aria-label": this.props.ariaLabel, onKeyDown: this.onKeyDown, onFocus: this.onFocus }, tableKeyboardNavigationScopeAttributes),
          toolbar,
          groupingPanel,
          React87.createElement(
            "div",
            { className: "k-grid-aria-root", role: "grid", "aria-colcount": leafColumns.length, "aria-rowcount": total, id: this._gridRoleElementId },
            header,
            React87.createElement(
              "div",
              { className: "k-grid-container", role: "presentation" },
              React87.createElement(
                "div",
                { ref: this.containerRef, className: "k-grid-content k-virtual-content", onScroll: this.scrollHandler, role: "presentation" },
                React87.createElement(
                  "div",
                  { className: "k-grid-table-wrap", role: "presentation" },
                  React87.createElement(
                    TableSelection,
                    { selectable: this.props.selectable, onRelease: this.selectionRelease, childRef: function(table) {
                      _this.tableElement = table;
                    } },
                    React87.createElement(
                      "table",
                      { className: classNames("k-table k-grid-table", (_d = {
                        "k-table-md": !this.props.size
                      }, _d["k-table-".concat(kendoThemeMaps.sizeMap[this.props.size] || this.props.size)] = this.props.size, _d)), role: "presentation", style: { userSelect: tableUserSelect, display: tableDisplay } },
                      colGroups,
                      React87.createElement("tbody", __assign47({ className: "k-table-tbody", ref: this.tableBodyRef, role: "rowgroup" }, tableKeyboardNavigationBodyAttributes), body)
                    )
                  )
                ),
                React87.createElement(
                  "div",
                  { className: "k-height-container", role: "presentation" },
                  React87.createElement("div", { style: this.props.scrollable === "virtual" ? { "height": this.vs.containerHeight + "px" } : {} })
                )
              )
            ),
            footer,
            enableDragClues && React87.createElement(
              React87.Fragment,
              null,
              React87.createElement(DropClue, { ref: this.dragLogic.refDropElementClue }),
              React87.createElement(DragClue, { ref: this.dragLogic.refDragElementClue })
            ),
            this.showLicenseWatermark && React87.createElement(WatermarkOverlay, null)
          ),
          statusBar,
          this.props.pageable && pager
        )
      );
    };
    Grid2.prototype.selectionChange = function(options) {
      if (this.props.onSelectionChange) {
        var event_1 = options.event, dataItem = options.dataItem, dataIndex = options.dataIndex, columnIndex = options.columnIndex;
        var _a14 = getSelectionOptions(this.props.selectable), mode = _a14.mode, cell = _a14.cell;
        var selectionEvent = __assign47(__assign47({}, this.getArguments(event_1.syntheticEvent)), { dataItem, startColIndex: columnIndex, endColIndex: columnIndex, startRowIndex: dataIndex, endRowIndex: dataIndex, dataItems: this.getLeafDataItems(), altKey: false, ctrlKey: false, shiftKey: false, metaKey: false, mode, cell, isDrag: false, componentId: this._gridId, selectedField: this.props.selectedField || "" });
        this.props.onSelectionChange.call(void 0, selectionEvent);
      }
    };
    Grid2.prototype.raiseDataEvent = function(handler, data, moreData, syntheticEvent, targetEvent) {
      var dataStateChange = this.props.onDataStateChange;
      if (handler) {
        var ev = __assign47(__assign47(__assign47({}, this.getArguments(syntheticEvent)), data), { targetEvent });
        handler.call(void 0, ev);
      } else if (dataStateChange) {
        dataStateChange.call(void 0, __assign47(__assign47({}, this.getArguments(syntheticEvent)), { targetEvent: targetEvent || {}, dataState: __assign47(__assign47({}, this.getDataState()), moreData) }));
      }
    };
    Grid2.prototype.columnReorder = function(prev, next, nativeEvent) {
      var _a14;
      var _this = this;
      var column = this._columns[prev];
      var depth = column.depth;
      var end2 = function(index) {
        do {
          index++;
        } while (index < _this._columns.length && _this._columns[index].depth > depth);
        return index;
      };
      var spliced = this._columns.splice(prev, end2(prev) - prev);
      (_a14 = this._columns).splice.apply(_a14, __spreadArray9([prev < next ? end2(next - spliced.length) : next, 0], spliced, false));
      this._columns.filter(function(q) {
        return q.declarationIndex >= 0;
      }).forEach(function(c, i) {
        return c.orderIndex = i;
      });
      this._columnsMutations++;
      var shouldUpdateRL = this._columns[prev].locked && this._columns[next].locked;
      updateLeft(this._columnsMap, this._columns, shouldUpdateRL || this._shouldUpdateLeftRight);
      updateRight(this._columnsMap, this._columns, shouldUpdateRL || this._shouldUpdateLeftRight);
      if (this._resized) {
        this._shouldUpdateLeftRight = false;
        this._resized = false;
      }
      var eventColumnProps = this.columns;
      this.forceUpdate();
      if (this.props.onColumnReorder) {
        var reorderEvent = {
          target: this,
          columns: eventColumnProps,
          columnId: column.id,
          nativeEvent
        };
        this.props.onColumnReorder.call(void 0, reorderEvent);
      }
    };
    Grid2.prototype.groupReorder = function(prevIndex, nextIndex, nativeEvent) {
      if (this.props.group === void 0) {
        return;
      }
      var group = this.props.group.slice();
      group.splice.apply(group, __spreadArray9([nextIndex, 0], group.splice(prevIndex, 1), false));
      this.groupChange(group, nativeEvent);
    };
    Grid2.prototype.columnToGroup = function(columnIndex, groupIndex, nativeEvent) {
      var field = this._columns[columnIndex].field;
      if (!field) {
        return;
      }
      var group = (this.props.group || []).slice();
      group.splice(groupIndex, 0, { field });
      this.groupChange(group, nativeEvent);
    };
    Grid2.prototype.resetTableWidth = function() {
      var totalWidth = 0;
      if (!this.columnResize.colGroupMain) {
        return;
      }
      var colElements = this.columnResize.colGroupMain.children;
      for (var i = 0; i < colElements.length; i++) {
        var width = colElements[i].width;
        if (!width) {
          return;
        }
        totalWidth += parseFloat(width.toString());
      }
      totalWidth = Math.round(totalWidth);
      if (this._header) {
        this._header.setWidth(totalWidth);
      }
      if (this._footer) {
        this._footer.setWidth(totalWidth);
      }
      if (this.tableElement) {
        this.tableElement.style.width = totalWidth + "px";
      }
    };
    Grid2.prototype.initColumns = function(children, groupCount) {
      var idPrefix = tableKeyboardNavigationTools.getIdPrefix(this.navigationStateRef);
      this._columns = this.readColumns(children, idPrefix, this._columnsMutations);
      if (this._columns.length === 0) {
        this._columns = autoGenerateColumns(this.props.data, this.props.group, this.props.expandField, { prevId: 0, idPrefix });
      }
      this.configureColumns(this._columns, groupCount, idPrefix);
      this._columnsMap = this.mapColumns(this._columns);
      this.columnResize.columns = this._columns;
      this.dragLogic.columns = this._columns;
    };
    Grid2.prototype.getDataState = function() {
      return {
        filter: this.props.filter,
        sort: this.props.sort,
        skip: this.props.skip,
        take: this.props.take !== void 0 ? this.props.take : this.props.pageSize,
        group: this.props.group
      };
    };
    Grid2.prototype.getArguments = function(syntheticEvent) {
      return {
        nativeEvent: syntheticEvent && syntheticEvent.nativeEvent,
        syntheticEvent,
        target: this
      };
    };
    Grid2.displayName = "KendoReactGrid";
    Grid2.defaultProps = {
      // never use this
    };
    Grid2.propTypes = {
      data: PropTypes27.oneOfType([
        PropTypes27.array,
        PropTypes27.shape({
          data: PropTypes27.array,
          total: PropTypes27.number
        })
      ]),
      sortable: PropTypes27.oneOfType([
        PropTypes27.bool,
        PropTypes27.shape({
          mode: PropTypes27.oneOf(["single", "multiple"]),
          allowUnsort: PropTypes27.bool
        })
      ]),
      onSortChange: PropTypes27.func,
      sort: PropTypes27.array,
      filterable: PropTypes27.bool,
      filter: PropTypes27.any,
      onFilterChange: PropTypes27.func,
      pageable: PropTypes27.oneOfType([
        PropTypes27.bool,
        PropTypes27.shape({
          buttonCount: PropTypes27.number,
          info: PropTypes27.bool,
          type: PropTypes27.oneOf(["numeric", "input"]),
          pageSizes: PropTypes27.oneOfType([
            PropTypes27.bool,
            PropTypes27.arrayOf(PropTypes27.oneOfType([
              PropTypes27.string,
              PropTypes27.number
            ]))
          ]),
          previousNext: PropTypes27.bool
        })
      ]),
      pageSize: PropTypes27.number,
      onPageChange: PropTypes27.func,
      total: PropTypes27.number,
      skip: PropTypes27.number,
      take: PropTypes27.number,
      fixedScroll: PropTypes27.bool,
      onExpandChange: PropTypes27.func,
      expandField: PropTypes27.string,
      selectedField: PropTypes27.string,
      onSelectionChange: PropTypes27.func,
      onHeaderSelectionChange: PropTypes27.func,
      resizable: PropTypes27.bool,
      reorderable: PropTypes27.bool,
      group: PropTypes27.any,
      groupable: PropTypes27.oneOfType([
        PropTypes27.bool,
        PropTypes27.shape({
          enabled: PropTypes27.bool,
          footer: PropTypes27.oneOf(["always", "visible", "none"])
        })
      ]),
      onGroupChange: PropTypes27.func,
      onRowClick: PropTypes27.func,
      onRowDoubleClick: PropTypes27.func,
      onItemChange: PropTypes27.func,
      editField: PropTypes27.string,
      scrollable: PropTypes27.oneOf(["none", "scrollable", "virtual"]),
      rowHeight: PropTypes27.number,
      detailRowHeight: PropTypes27.number,
      detail: PropTypes27.any,
      style: PropTypes27.object,
      onDataStateChange: PropTypes27.func,
      onColumnResize: PropTypes27.func,
      onColumnReorder: PropTypes27.func,
      dataItemKey: PropTypes27.string,
      navigatable: PropTypes27.bool,
      size: PropTypes27.oneOf(["small", "medium"])
    };
    Grid2.contextType = TableKeyboardNavigationContext;
    return Grid2;
  }(React87.Component)
);

// app/kendo/grid/kendogrid.client.js
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\kendo\\\\grid\\\\kendogrid.client.js"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\kendo\\grid\\kendogrid.client.js"
  );
  import.meta.hot.lastModified = "1708503722823.1472";
}
function GridContainer({
  data
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Grid, { style: {
    height: "200px"
  }, data, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(GridColumn, { field: "Item Description", width: "250px" }, void 0, false, {
      fileName: "app/kendo/grid/kendogrid.client.js",
      lineNumber: 30,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(GridColumn, { field: "Spend" }, void 0, false, {
      fileName: "app/kendo/grid/kendogrid.client.js",
      lineNumber: 31,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(GridColumn, { field: "MinUnit" }, void 0, false, {
      fileName: "app/kendo/grid/kendogrid.client.js",
      lineNumber: 32,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(GridColumn, { field: "Avg Unit" }, void 0, false, {
      fileName: "app/kendo/grid/kendogrid.client.js",
      lineNumber: 33,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(GridColumn, { field: "Max Unit" }, void 0, false, {
      fileName: "app/kendo/grid/kendogrid.client.js",
      lineNumber: 34,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(GridColumn, { field: "Agreement Price" }, void 0, false, {
      fileName: "app/kendo/grid/kendogrid.client.js",
      lineNumber: 35,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(GridColumn, { field: "Savings Potential" }, void 0, false, {
      fileName: "app/kendo/grid/kendogrid.client.js",
      lineNumber: 36,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/kendo/grid/kendogrid.client.js",
    lineNumber: 27,
    columnNumber: 10
  }, this);
}
_c3 = GridContainer;
var _c3;
$RefreshReg$(_c3, "GridContainer");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/kendo/grid/WrapperGrid.jsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\kendo\\\\grid\\\\WrapperGrid.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\kendo\\grid\\WrapperGrid.jsx"
  );
  import.meta.hot.lastModified = "1708503722822.1455";
}
var Fallback = () => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("svg", { width: 24, height: 24, fill: "none", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("path", { d: "M12 4.75v1.5M17.127 6.873l-1.061 1.061M19.25 12h-1.5M17.127 17.127l-1.061-1.061M12 17.75v1.5M7.934 16.066l-1.06 1.06M6.25 12h-1.5M7.934 7.934l-1.06-1.06", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" }, void 0, false, {
    fileName: "app/kendo/grid/WrapperGrid.jsx",
    lineNumber: 27,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/kendo/grid/WrapperGrid.jsx",
    lineNumber: 26,
    columnNumber: 11
  }, this) }, void 0, false, {
    fileName: "app/kendo/grid/WrapperGrid.jsx",
    lineNumber: 25,
    columnNumber: 10
  }, this);
};
_c4 = Fallback;
function WrapperChartGrid({
  data
}) {
  return typeof document !== "undefined" ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(GridContainer, { data }, void 0, false, {
    fileName: "app/kendo/grid/WrapperGrid.jsx",
    lineNumber: 35,
    columnNumber: 44
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Fallback, {}, void 0, false, {
    fileName: "app/kendo/grid/WrapperGrid.jsx",
    lineNumber: 35,
    columnNumber: 76
  }, this);
}
_c22 = WrapperChartGrid;
var _c4;
var _c22;
$RefreshReg$(_c4, "Fallback");
$RefreshReg$(_c22, "WrapperChartGrid");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/data/dashboard/carData.js
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\data\\dashboard\\carData.js"
  );
  import.meta.hot.lastModified = "1708503722778.004";
}
var carData = [
  { make: "Toyota", model: "Camry", price: 35e3 },
  { make: "Toyota", model: "Corolla", price: 25e3 },
  { make: "Toyota", model: "Prius", price: 3e4 },
  { make: "Honda", model: "Accord", price: 32e3 },
  { make: "Honda", model: "Civic", price: 22e3 },
  { make: "Honda", model: "CR-V", price: 28e3 },
  { make: "Ford", model: "Fusion", price: 3e4 },
  { make: "Ford", model: "Focus", price: 2e4 },
  { make: "Ford", model: "Escape", price: 25e3 },
  { make: "Nissan", model: "Altima", price: 3e4 },
  { make: "Nissan", model: "Sentra", price: 2e4 },
  { make: "Nissan", model: "Rogue", price: 25e3 },
  { make: "Chevrolet", model: "Malibu", price: 3e4 },
  { make: "Chevrolet", model: "Cruze", price: 2e4 },
  { make: "Chevrolet", model: "Equinox", price: 25e3 },
  { make: "Hyundai", model: "Sonata", price: 3e4 },
  { make: "Hyundai", model: "Elantra", price: 2e4 },
  { make: "Hyundai", model: "Santa Fe", price: 25e3 },
  { make: "Kia", model: "Optima", price: 3e4 },
  { make: "Kia", model: "Forte", price: 2e4 },
  { make: "Kia", model: "Sorento", price: 25e3 },
  { make: "Subaru", model: "Legacy", price: 3e4 },
  { make: "Subaru", model: "Impreza", price: 2e4 },
  { make: "Subaru", model: "Forester", price: 25e3 },
  { make: "Volkswagen", model: "Passat", price: 3e4 },
  { make: "Volkswagen", model: "Jetta", price: 2e4 },
  { make: "Volkswagen", model: "Tiguan", price: 25e3 },
  { make: "BMW", model: "3 Series", price: 3e4 },
  { make: "BMW", model: "5 Series", price: 2e4 },
  { make: "BMW", model: "X3", price: 25e3 },
  { make: "Mercedes-Benz", model: "C-Class", price: 3e4 },
  { make: "Mercedes-Benz", model: "E-Class", price: 2e4 },
  { make: "Mercedes-Benz", model: "GLC", price: 25e3 },
  { make: "Audi", model: "A4", price: 3e4 },
  { make: "Audi", model: "A6", price: 2e4 },
  { make: "Audi", model: "Q5", price: 25e3 },
  { make: "Lexus", model: "IS", price: 3e4 },
  { make: "Lexus", model: "ES", price: 2e4 },
  { make: "Lexus", model: "RX", price: 25e3 },
  { make: "Volvo", model: "S60", price: 3e4 },
  { make: "Volvo", model: "S90", price: 2e4 },
  { make: "Volvo", model: "XC60", price: 25e3 },
  { make: "Jaguar", model: "XE", price: 3e4 },
  { make: "Jaguar", model: "XF", price: 2e4 },
  { make: "Jaguar", model: "F-Pace", price: 25e3 },
  { make: "Mazda", model: "6", price: 3e4 },
  { make: "Mazda", model: "CX-5", price: 2e4 },
  { make: "Mazda", model: "CX-9", price: 25e3 },
  { make: "Lincoln", model: "MKZ", price: 3e4 },
  { make: "Lincoln", model: "MKC", price: 2e4 },
  { make: "Lincoln", model: "Navigator", price: 25e3 },
  { make: "Porsche", model: "Cayenne", price: 3e4 },
  { make: "Porsche", model: "Panamera", price: 2e4 },
  { make: "Porsche", model: "Macan", price: 25e3 },
  { make: "Acura", model: "TLX", price: 3e4 },
  { make: "Acura", model: "RDX", price: 2e4 },
  { make: "Acura", model: "MDX", price: 25e3 },
  { make: "Infiniti", model: "Q50", price: 3e4 },
  { make: "Infiniti", model: "QX50", price: 2e4 },
  { make: "Infiniti", model: "QX60", price: 25e3 },
  { make: "Land Rover", model: "Discovery", price: 3e4 },
  { make: "Land Rover", model: "Range Rover", price: 2e4 },
  { make: "Land Rover", model: "Range Rover Sport", price: 25e3 },
  { make: "Cadillac", model: "XT5", price: 3e4 },
  { make: "Cadillac", model: "XTS", price: 2e4 },
  { make: "Cadillac", model: "Escalade", price: 25e3 },
  { make: "Tesla", model: "Model 3", price: 3e4 },
  { make: "Tesla", model: "Model S", price: 2e4 },
  { make: "Tesla", model: "Model X", price: 25e3 },
  { make: "Genesis", model: "G70", price: 3e4 },
  { make: "Genesis", model: "G80", price: 2e4 },
  { make: "Genesis", model: "G90", price: 25e3 },
  { make: "Buick", model: "Envision", price: 3e4 },
  { make: "Buick", model: "Enclave", price: 2e4 },
  { make: "Buick", model: "Regal", price: 25e3 },
  { make: "Mini", model: "Countryman", price: 3e4 },
  { make: "Mini", model: "Cooper", price: 2e4 },
  { make: "Mini", model: "Cooper S", price: 25e3 },
  { make: "Mitsubishi", model: "Outlander", price: 3e4 }
];

// app/kendo/rawData/dashboard/financeDashboard.js
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\kendo\\rawData\\dashboard\\financeDashboard.js"
  );
  import.meta.hot.lastModified = "1708503722840.1506";
}
var ratioCategories_m = ["Jan", "Feb", "Mar", "Apr", "May"];
var ratioSeries_m = [
  {
    name: "",
    data: [300, 400, 450, 470, 500]
  }
];
var currentCategories_m = ["Jan", "Feb", "Mar", "Apr", "May"];
var currentSeries_m = [
  {
    name: "",
    data: [300, 300, 350, 370, 300]
  }
];
var invCategories_m = ["Jan", "Feb", "Mar", "Apr", "May"];
var invSeries_m = [
  {
    name: "",
    data: [100, 98, 100, 110, 120]
  },
  {
    name: "",
    data: [50, 80, 90, 120, 80]
  }
];
var debtCategories_m = ["Jan", "Feb", "Mar", "Apr", "May"];
var debtSeries_m = [
  {
    name: "",
    data: [200, 98, 100, 100, 90]
  }
];
var cashCategories_m = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
var cashSeries_m = [
  {
    name: "",
    data: [400, 300, 400, 400, 200, 600]
  }
];
var fixedCategories_m = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
var fixedSeries_m = [
  {
    name: "",
    data: [400, 300, 400, 400, 200, 600]
  }
];
var equCategories_m = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
var equSeries_m = [
  {
    name: "",
    data: [90, 80, 70, 30, 25, 0]
  }
];
var assCategories_m = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
var assSeries_m = [
  {
    name: "",
    data: [12, 15, 12, 12, 25, 0]
  }
];

// app/data/dashboard/financeData.js
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime());
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\data\\dashboard\\financeData.js"
  );
  import.meta.hot.lastModified = "1708503722779.0051";
}
var kpiService_m = [
  {
    Name: "Operating Expense Ratio %",
    Value: "11.53",
    Trend: "up",
    TargetAch: 75,
    container: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
      WrapperMultiLineChart,
      {
        category: ratioCategories_m,
        series: ratioSeries_m
      },
      void 0,
      false,
      {
        fileName: "app/data/dashboard/financeData.js",
        lineNumber: 57,
        columnNumber: 7
      },
      this
    ),
    status: "Above Target",
    Explore: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(WrapperChartGrid, { rowData: carData }, void 0, false, {
      fileName: "app/data/dashboard/financeData.js",
      lineNumber: 63,
      columnNumber: 14
    }, this),
    Analyze: "/demo/dashboard/analysis/opexpenseAnalysis"
  },
  {
    Name: "Current Ratio",
    Value: "1.14",
    Trend: "up",
    TargetAch: 90,
    container: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
      WrapperMultiLineChart,
      {
        category: currentCategories_m,
        series: currentSeries_m
      },
      void 0,
      false,
      {
        fileName: "app/data/dashboard/financeData.js",
        lineNumber: 72,
        columnNumber: 7
      },
      this
    ),
    status: "Below Target",
    Explore: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(WrapperChartGrid, { rowData: carData }, void 0, false, {
      fileName: "app/data/dashboard/financeData.js",
      lineNumber: 78,
      columnNumber: 14
    }, this),
    Analyze: "/demo/dashboard/analysis/opexpenseAnalysis"
  },
  {
    Name: "Inventory Turnover Ratio",
    Value: "0.00",
    Trend: "down",
    TargetAch: 90,
    container: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(WrapperMultiBarChart, { category: invCategories_m, series: invSeries_m }, void 0, false, {
      fileName: "app/data/dashboard/financeData.js",
      lineNumber: 87,
      columnNumber: 7
    }, this),
    status: "On Track",
    Explore: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(WrapperChartGrid, { rowData: carData }, void 0, false, {
      fileName: "app/data/dashboard/financeData.js",
      lineNumber: 90,
      columnNumber: 14
    }, this),
    Analyze: "/demo/dashboard/analysis/opexpenseAnalysis"
  },
  {
    Name: "Debt to Equity Ratio",
    Value: "0.01",
    Trend: "down",
    TargetAch: 50,
    container: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
      WrapperMultiLineChart,
      {
        category: debtCategories_m,
        series: debtSeries_m
      },
      void 0,
      false,
      {
        fileName: "app/data/dashboard/financeData.js",
        lineNumber: 99,
        columnNumber: 7
      },
      this
    ),
    status: "Below Target",
    Explore: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(WrapperChartGrid, { rowData: carData }, void 0, false, {
      fileName: "app/data/dashboard/financeData.js",
      lineNumber: 105,
      columnNumber: 14
    }, this),
    Analyze: "/demo/dashboard/analysis/profitAnalysis"
  },
  {
    Name: "Cash Conversion Cycle",
    Value: "-$648.06K",
    Trend: "up",
    TargetAch: 90,
    container: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
      WrapperMultiAreaChart,
      {
        category: cashCategories_m,
        series: cashSeries_m
      },
      void 0,
      false,
      {
        fileName: "app/data/dashboard/financeData.js",
        lineNumber: 114,
        columnNumber: 7
      },
      this
    ),
    status: "On Track",
    Explore: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(WrapperChartGrid, { rowData: carData }, void 0, false, {
      fileName: "app/data/dashboard/financeData.js",
      lineNumber: 120,
      columnNumber: 14
    }, this),
    Analyze: "/demo/dashboard/analysis/profitAnalysis"
  },
  {
    Name: "Fixed Assets Turnover Ratio",
    Value: "0.00",
    Trend: "down",
    TargetAch: 90,
    container: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
      WrapperMultiColumnChart,
      {
        category: fixedCategories_m,
        series: fixedSeries_m
      },
      void 0,
      false,
      {
        fileName: "app/data/dashboard/financeData.js",
        lineNumber: 129,
        columnNumber: 7
      },
      this
    ),
    status: "Below Target",
    Explore: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(WrapperChartGrid, { rowData: carData }, void 0, false, {
      fileName: "app/data/dashboard/financeData.js",
      lineNumber: 135,
      columnNumber: 14
    }, this),
    Analyze: "/demo/dashboard/analysis/profitAnalysis"
  },
  {
    Name: "Return on Equity %",
    Value: "0.10",
    Trend: "up",
    TargetAch: 77,
    container: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(WrapperMultiAreaChart, { category: equCategories_m, series: equSeries_m }, void 0, false, {
      fileName: "app/data/dashboard/financeData.js",
      lineNumber: 144,
      columnNumber: 7
    }, this),
    status: "On Track",
    Explore: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(WrapperChartGrid, { rowData: carData }, void 0, false, {
      fileName: "app/data/dashboard/financeData.js",
      lineNumber: 147,
      columnNumber: 14
    }, this),
    Analyze: "//demo/dashboard/analysis/profitAnalysis"
  },
  {
    Name: "Return on Assets %",
    Value: "0.07",
    Trend: "up",
    TargetAch: 95,
    container: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(WrapperMultiAreaChart, { category: assCategories_m, series: assSeries_m }, void 0, false, {
      fileName: "app/data/dashboard/financeData.js",
      lineNumber: 156,
      columnNumber: 7
    }, this),
    status: "Above Target",
    Explore: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(WrapperChartGrid, { rowData: carData }, void 0, false, {
      fileName: "app/data/dashboard/financeData.js",
      lineNumber: 159,
      columnNumber: 14
    }, this),
    Analyze: "/demo/dashboard/analysis/profitAnalysis"
  }
];

// app/routes/snop.dashboard.finance.jsx
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\snop.dashboard.finance.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\snop.dashboard.finance.jsx"
  );
  import.meta.hot.lastModified = "1708503722863.538";
}
function classNames2(...classes) {
  return classes.filter(Boolean).join(" ");
}
function FinanceRoute() {
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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_jsx_dev_runtime4.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "mx-4 mt-1 rounded-lg bg-white   shadow", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex items-center justify-between p-2 ", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "m-2 flex-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h2", { className: "text-3xl font-bold leading-7 text-gray-900", children: "Demand Dashboard" }, void 0, false, {
        fileName: "app/routes/snop.dashboard.finance.jsx",
        lineNumber: 72,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/snop.dashboard.finance.jsx",
        lineNumber: 71,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex p-1 align-middle ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "ml-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(It, { value: mode, onChange: setMode, children: ({
        open
      }) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_jsx_dev_runtime4.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "relative", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "inline-flex divide-x divide-rose-700", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "inline-flex items-center gap-x-1.5 rounded-l-md bg-rose-500 px-3 py-2 text-white shadow-sm", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(CheckIcon_default, { className: "-ml-0.5 h-5 w-5 ", "aria-hidden": "true" }, void 0, false, {
              fileName: "app/routes/snop.dashboard.finance.jsx",
              lineNumber: 85,
              columnNumber: 27
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "text-sm font-semibold", children: mode.name }, void 0, false, {
              fileName: "app/routes/snop.dashboard.finance.jsx",
              lineNumber: 86,
              columnNumber: 27
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/snop.dashboard.finance.jsx",
            lineNumber: 84,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(It.Button, { className: "inline-flex items-center rounded-l-none rounded-r-md bg-rose-500 p-2 hover:bg-rose-700", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(ChevronDownIcon_default, { className: "h-5 w-5 text-white", "aria-hidden": "true" }, void 0, false, {
            fileName: "app/routes/snop.dashboard.finance.jsx",
            lineNumber: 89,
            columnNumber: 27
          }, this) }, void 0, false, {
            fileName: "app/routes/snop.dashboard.finance.jsx",
            lineNumber: 88,
            columnNumber: 25
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/snop.dashboard.finance.jsx",
          lineNumber: 83,
          columnNumber: 23
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(qe, { show: open, as: import_react.Fragment, leave: "transition ease-in duration-100", leaveFrom: "opacity-100", leaveTo: "opacity-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(It.Options, { className: "absolute right-0 z-10 mt-2 w-72 origin-top-right divide-y divide-gray-200 overflow-hidden rounded-md border bg-gray-100 shadow-lg ", children: items.map((option) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(It.Option, { className: ({
          active
        }) => classNames2(active ? "bg-rose-500 text-white" : "text-gray-900", "cursor-default select-none p-4 text-sm"), value: option, children: ({
          selected,
          active
        }) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex flex-col", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex justify-between", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: selected ? "font-semibold" : "font-normal", children: option.name }, void 0, false, {
              fileName: "app/routes/snop.dashboard.finance.jsx",
              lineNumber: 103,
              columnNumber: 37
            }, this),
            selected ? /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: active ? "text-white" : "text-rose-600", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(CheckIcon_default, { className: "h-5 w-5", "aria-hidden": "true" }, void 0, false, {
              fileName: "app/routes/snop.dashboard.finance.jsx",
              lineNumber: 107,
              columnNumber: 41
            }, this) }, void 0, false, {
              fileName: "app/routes/snop.dashboard.finance.jsx",
              lineNumber: 106,
              columnNumber: 49
            }, this) : null
          ] }, void 0, true, {
            fileName: "app/routes/snop.dashboard.finance.jsx",
            lineNumber: 102,
            columnNumber: 35
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: classNames2(active ? "text-rose-200" : "text-gray-500", "mt-2"), children: option.description }, void 0, false, {
            fileName: "app/routes/snop.dashboard.finance.jsx",
            lineNumber: 110,
            columnNumber: 35
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/snop.dashboard.finance.jsx",
          lineNumber: 101,
          columnNumber: 31
        }, this) }, option.name, false, {
          fileName: "app/routes/snop.dashboard.finance.jsx",
          lineNumber: 95,
          columnNumber: 48
        }, this)) }, void 0, false, {
          fileName: "app/routes/snop.dashboard.finance.jsx",
          lineNumber: 94,
          columnNumber: 25
        }, this) }, void 0, false, {
          fileName: "app/routes/snop.dashboard.finance.jsx",
          lineNumber: 93,
          columnNumber: 23
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/snop.dashboard.finance.jsx",
        lineNumber: 82,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/routes/snop.dashboard.finance.jsx",
        lineNumber: 81,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/routes/snop.dashboard.finance.jsx",
        lineNumber: 78,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/routes/snop.dashboard.finance.jsx",
        lineNumber: 77,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/snop.dashboard.finance.jsx",
        lineNumber: 76,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/snop.dashboard.finance.jsx",
      lineNumber: 70,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/snop.dashboard.finance.jsx",
      lineNumber: 69,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("main", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(CardLayout, { mode: mode.name === "Review" ? reviewTabs2 : meetingTabs2, tab: mode.name === "Review" ? reviewIndex : meetingIndex, kpiData: kpiService_m }, void 0, false, {
      fileName: "app/routes/snop.dashboard.finance.jsx",
      lineNumber: 167,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/snop.dashboard.finance.jsx",
      lineNumber: 166,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/snop.dashboard.finance.jsx",
    lineNumber: 68,
    columnNumber: 10
  }, this);
}
_s(FinanceRoute, "qIPK7vxuiHEyfYnEC24NSdDcQ5c=");
_c5 = FinanceRoute;
var _c5;
$RefreshReg$(_c5, "FinanceRoute");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  FinanceRoute as default
};
//# sourceMappingURL=/build/routes/snop.dashboard.finance-Y4FE5D32.js.map
