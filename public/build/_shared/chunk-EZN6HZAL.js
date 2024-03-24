import {
  Animation,
  getTabIndex
} from "/build/_shared/chunk-TNTLQMTW.js";
import {
  GlobalizationContext,
  Popup,
  canUseDOM,
  classNames,
  provideLocalizationService,
  registerForLocalization,
  require_prop_types,
  validatePackage
} from "/build/_shared/chunk-EZ7JG6XF.js";
import {
  require_react
} from "/build/_shared/chunk-BOXFZXVX.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// node_modules/@progress/kendo-react-dropdowns/dist/es/DropDownList/DropDownList.js
var React29 = __toESM(require_react());
var PropTypes15 = __toESM(require_prop_types());

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
function useAsyncFocusBlur(_a4) {
  var onFocus = _a4.onFocus, onBlur = _a4.onBlur, onSyncFocus = _a4.onSyncFocus, onSyncBlur = _a4.onSyncBlur;
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
    if (onFocus) {
      onFocus.call.apply(onFocus, __spreadArray([void 0], event, false));
    }
  }, [focused, onFocus, onSyncFocus]);
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

// node_modules/@progress/kendo-react-common/dist/es/hocs/withPropsContext.js
var React3 = __toESM(require_react());

// node_modules/@progress/kendo-react-common/dist/es/hooks/usePropsContext.js
var React2 = __toESM(require_react());
var usePropsContext = function(context, props) {
  var contextPropsCallback = React2.useContext(context);
  var contextProps = contextPropsCallback(props);
  return contextProps;
};

// node_modules/@progress/kendo-react-common/dist/es/hocs/withPropsContext.js
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
var createPropsContext = function() {
  return React3.createContext(function(props) {
    return props;
  });
};
var withPropsContext = function(context, Component11) {
  return React3.forwardRef(function(props, ref) {
    var contextProps = usePropsContext(context, props);
    return React3.createElement(Component11, __assign({}, contextProps, { ref }));
  });
};

// node_modules/@progress/kendo-react-common/dist/es/hooks/useMouse.js
var React4 = __toESM(require_react());
var useMouse = function(props, target, extend) {
  if (extend === void 0) {
    extend = {};
  }
  var handleMouseDown = React4.useCallback(function(event) {
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
  var handleMouseUp = React4.useCallback(function(event) {
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
  var handleClick = React4.useCallback(function(event) {
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
  var handleDoubleClick = React4.useCallback(function(event) {
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
  var handleMouseEnter = React4.useCallback(function(event) {
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
  var handleMouseLeave = React4.useCallback(function(event) {
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
  var handelMouseMove = React4.useCallback(function(event) {
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
  var handleMouseOut = React4.useCallback(function(event) {
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
  var handleMouseOver = React4.useCallback(function(event) {
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

// node_modules/@progress/kendo-react-common/dist/es/icons/Icon.js
var React5 = __toESM(require_react());
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
var Icon = React5.forwardRef(function(props, ref) {
  var className = props.className, name = props.name, themeColor = props.themeColor, size = props.size, flip = props.flip, style = props.style, id = props.id, tabIndex = props.tabIndex, others = __rest(props, ["className", "name", "themeColor", "size", "flip", "style", "id", "tabIndex"]);
  var target = React5.useRef(null);
  var elementRef = React5.useRef(null);
  React5.useImperativeHandle(target, function() {
    return {
      element: elementRef.current
    };
  });
  React5.useImperativeHandle(ref, function() {
    return target.current;
  });
  var sizeProp = React5.useMemo(function() {
    return size || defaultProps.size;
  }, [size]);
  var flipProp = React5.useMemo(function() {
    return flip || defaultProps.flip;
  }, [flip]);
  var fontClassNames = React5.useMemo(function() {
    var _a4;
    return classNames("k-icon", "k-font-icon", name && toIconClass(name), (_a4 = {}, _a4["k-color-".concat(themeColor)] = themeColor, _a4["k-flip-h"] = flipProp === "horizontal" || flipProp === "both", _a4["k-flip-v"] = flipProp === "vertical" || flipProp === "both", _a4), SIZE_CLASSES[sizeProp], className);
  }, [name, themeColor, sizeProp, flipProp, className]);
  var mouseProps = useMouse(props, target);
  return React5.createElement("span", __assign2({ ref: elementRef }, others, mouseProps, { className: fontClassNames, id, tabIndex, style, role: "presentation" }));
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
var React6 = __toESM(require_react());
var PropTypes2 = __toESM(require_prop_types());
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
var SvgIcon = React6.forwardRef(function(props, ref) {
  var children = props.children, className = props.className, svgClassName = props.svgClassName, icon = props.icon, flip = props.flip, id = props.id, tabIndex = props.tabIndex, size = props.size, style = props.style, svgStyle = props.svgStyle, themeColor = props.themeColor, viewBox = props.viewBox, name = props.name, onClick = props.onClick, others = __rest2(props, ["children", "className", "svgClassName", "icon", "flip", "id", "tabIndex", "size", "style", "svgStyle", "themeColor", "viewBox", "name", "onClick"]);
  var elementRef = React6.useRef(null);
  React6.useImperativeHandle(ref, function() {
    return {
      element: elementRef.current
    };
  });
  var iconNameProp = React6.useMemo(function() {
    return icon ? icon.name : defaultProps2.icon;
  }, [icon]);
  var sizeProp = React6.useMemo(function() {
    return size || defaultProps2.size;
  }, [size]);
  var flipProp = React6.useMemo(function() {
    return flip || defaultProps2.flip;
  }, [flip]);
  var viewBoxProp = React6.useMemo(function() {
    return viewBox || defaultProps2.viewBox;
  }, [viewBox]);
  var elementClassNames = React6.useMemo(function() {
    var _a4;
    return classNames("k-icon", "k-svg-icon", "k-svg-i-" + iconNameProp, (_a4 = {}, _a4["k-color-".concat(themeColor)] = themeColor, _a4["k-flip-h"] = flipProp === "horizontal" || flipProp === "both", _a4["k-flip-v"] = flipProp === "vertical" || flipProp === "both", _a4), SIZE_CLASSES[sizeProp], className);
  }, [iconNameProp, themeColor, sizeProp, flipProp, className]);
  var elementStyle = React6.useMemo(function() {
    if (props.width && props.height) {
      return __assign3({ width: props.width, height: props.height }, style);
    } else if (props.width) {
      return __assign3({ width: props.width, height: props.width }, style);
    } else if (props.height) {
      return __assign3({ width: props.height, height: props.height }, style);
    } else {
      return __assign3({}, style);
    }
  }, [props.width, props.height, style]);
  return React6.createElement(
    "span",
    { className: elementClassNames, style: elementStyle, ref: elementRef, onClick },
    React6.createElement("svg", __assign3({ id, className: svgClassName, style: svgStyle, "aria-hidden": true, tabIndex, focusable: false, xmlns: "http://www.w3.org/2000/svg", viewBox: icon ? icon.viewBox : viewBoxProp, dangerouslySetInnerHTML: icon ? { __html: icon.content } : void 0 }, others), icon ? void 0 : children)
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
var React8 = __toESM(require_react());

// node_modules/@progress/kendo-react-common/dist/es/icons/IconsContext.js
var React7 = __toESM(require_react());
var IconsContext = React7.createContext({ type: "svg" });
IconsContext.displayName = "KendoReactIconsContext";

// node_modules/@progress/kendo-react-common/dist/es/icons/IconWrap.js
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
var IconWrap = React8.forwardRef(function(props, ref) {
  var _a4, _b;
  var _c = React8.useContext(IconsContext), type = _c.type, icons = _c.icons;
  var icon = props.icon, fontIconProps = __rest3(props, ["icon"]);
  var name = type === "svg" ? ((_a4 = props.icon) === null || _a4 === void 0 ? void 0 : _a4.name) || props.name : props.name || ((_b = props.icon) === null || _b === void 0 ? void 0 : _b.name);
  name = name && icons && icons[name] && typeof icons[name] === "string" ? icons[name] : name;
  var svg = name && icons && icons[name] && typeof icons[name] !== "string" ? icons[name] : icon;
  return type === "svg" && svg ? React8.createElement(SvgIcon, __assign4({}, props, { icon: svg, ref })) : React8.createElement(Icon, __assign4({}, fontIconProps, { name, ref }));
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
    function Navigation3(options) {
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
    Object.defineProperty(Navigation3.prototype, "elements", {
      /**
       * Returns the collection of DOM elements which the module will navigate in.
       */
      get: function() {
        return this.root.current ? Array.from(this.root.current.querySelectorAll(this.selectors.join(","))) : [];
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(Navigation3.prototype, "first", {
      /**
       * Returns the first navigation DOM element.
       */
      get: function() {
        return this.root.current && this.root.current.querySelector(this.selectors.join(",")) || null;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(Navigation3.prototype, "last", {
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
    Object.defineProperty(Navigation3.prototype, "current", {
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
    Navigation3.prototype.focusNext = function(target) {
      return this.focusNextIndex(target, 1);
    };
    Navigation3.prototype.focusPrevious = function(target) {
      return this.focusNextIndex(target, -1);
    };
    Navigation3.prototype.triggerKeyboardEvent = function(ev, options) {
      var target = ev.target instanceof Element && ev.target.closest(this.selectors.join(","));
      var key = ev.key === " " ? "Space" : ev.key;
      var eventType = ev.nativeEvent.type;
      if (target && this.keyboardEvents[eventType][key]) {
        this.keyboardEvents[eventType][key].call(void 0, target, this, ev, options);
      }
    };
    Navigation3.prototype.triggerMouseEvent = function(ev) {
      var target = ev.target instanceof Element && ev.target.closest(this.selectors.join(","));
      var eventType = ev.nativeEvent.type;
      if (target) {
        this.mouseEvents[eventType].call(void 0, target, this, ev);
      }
    };
    Navigation3.prototype.focusElement = function(element2, previous) {
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
    return Navigation3;
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

// node_modules/@progress/kendo-react-labels/dist/es/messages/index.js
var _a;
var labelsOptional = "labels.optional";
var messages = (_a = {}, _a[labelsOptional] = "(Optional)", _a);

// node_modules/@progress/kendo-react-intl/dist/es/hooks/useInternationalization.js
var React9 = __toESM(require_react());
var useInternationalization = function() {
  return React9.useContext(GlobalizationContext).intl;
};

// node_modules/@progress/kendo-react-intl/dist/es/hooks/useLocalization.js
var React10 = __toESM(require_react());
var useLocalization = function() {
  return React10.useContext(GlobalizationContext).localization;
};

// node_modules/@progress/kendo-react-labels/dist/es/package-metadata.js
var packageMetadata = {
  name: "@progress/kendo-react-labels",
  productName: "KendoReact",
  productCodes: ["KENDOUIREACT", "KENDOUICOMPLETE"],
  publishDate: 1700063806,
  version: "",
  licensingDocsUrl: "https://www.telerik.com/kendo-react-ui/my-license/?utm_medium=product&utm_source=kendoreact&utm_campaign=kendo-ui-react-purchase-license-keys-warning"
};

// node_modules/@progress/kendo-react-labels/dist/es/FloatingLabel.js
var React11 = __toESM(require_react());
var PropTypes4 = __toESM(require_prop_types());
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
var FloatingLabel = (
  /** @class */
  function(_super) {
    __extends(FloatingLabel2, _super);
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
      validatePackage(packageMetadata);
      return _this;
    }
    FloatingLabel2.prototype.render = function() {
      var _a4 = this.props, label = _a4.label, editorId = _a4.editorId, className = _a4.className, labelClassName = _a4.labelClassName, editorValue = _a4.editorValue, editorPlaceholder = _a4.editorPlaceholder, editorValid = _a4.editorValid, editorDisabled = _a4.editorDisabled, style = _a4.style, id = _a4.id, optional = _a4.optional;
      var localizationService = provideLocalizationService(this);
      var localizedOptional = optional ? localizationService.toLanguageString(labelsOptional, messages[labelsOptional]) : "";
      var optionalElement = localizedOptional && React11.createElement("span", { className: "k-label-optional" }, localizedOptional);
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
      return React11.createElement(
        "span",
        { id: this.props.id, className: spanClassNames, onFocus: this.handleFocus, onBlur: this.handleBlur, style, dir: this.props.dir },
        this.props.children,
        label ? editorId ? React11.createElement(
          "label",
          { id, htmlFor: editorId, className: labelClassNames },
          label,
          optionalElement
        ) : React11.createElement(
          "span",
          { id, className: labelClassNames },
          label,
          optionalElement
        ) : null
      );
    };
    FloatingLabel2.propTypes = {
      label: PropTypes4.string,
      editorId: PropTypes4.string,
      editorValue: PropTypes4.oneOfType([PropTypes4.string, PropTypes4.bool, PropTypes4.number]),
      editorPlaceholder: PropTypes4.string,
      editorValid: PropTypes4.bool,
      editorDisabled: PropTypes4.bool,
      id: PropTypes4.string,
      style: PropTypes4.object,
      className: PropTypes4.string,
      labelClassName: PropTypes4.string,
      optional: PropTypes4.bool
    };
    return FloatingLabel2;
  }(React11.Component)
);
registerForLocalization(FloatingLabel);

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

// node_modules/@progress/kendo-react-dropdowns/dist/es/common/ListContainer.js
var React12 = __toESM(require_react());
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
var ListContainer = (
  /** @class */
  function(_super) {
    __extends2(ListContainer2, _super);
    function ListContainer2() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    ListContainer2.prototype.render = function() {
      var _a4 = this.props, children = _a4.children, width = _a4.width, dir = _a4.dir, itemsCount = _a4.itemsCount, popupSettings = _a4.popupSettings;
      return React12.createElement(Popup, __assign5({ style: { width, direction: dir }, contentKey: itemsCount && itemsCount.join() }, popupSettings), children);
    };
    return ListContainer2;
  }(React12.Component)
);
var ListContainer_default = ListContainer;

// node_modules/@progress/kendo-react-dropdowns/dist/es/common/ListFilter.js
var React17 = __toESM(require_react());
var PropTypes8 = __toESM(require_prop_types());

// node_modules/@progress/kendo-react-inputs/dist/es/package-metadata.js
var packageMetadata2 = {
  name: "@progress/kendo-react-inputs",
  productName: "KendoReact",
  productCodes: ["KENDOUIREACT", "KENDOUICOMPLETE"],
  publishDate: 1700064010,
  version: "",
  licensingDocsUrl: "https://www.telerik.com/kendo-react-ui/my-license/?utm_medium=product&utm_source=kendoreact&utm_campaign=kendo-ui-react-purchase-license-keys-warning"
};

// node_modules/@progress/kendo-react-buttons/dist/es/Button.js
var React13 = __toESM(require_react());
var PropTypes5 = __toESM(require_prop_types());

// node_modules/@progress/kendo-react-buttons/dist/es/package-metadata.js
var packageMetadata3 = {
  name: "@progress/kendo-react-buttons",
  productName: "KendoReact",
  productCodes: ["KENDOUIREACT", "KENDOUICOMPLETE"],
  publishDate: 1700063497,
  version: "",
  licensingDocsUrl: "https://www.telerik.com/kendo-react-ui/my-license/?utm_medium=product&utm_source=kendoreact&utm_campaign=kendo-ui-react-purchase-license-keys-warning"
};

// node_modules/@progress/kendo-react-buttons/dist/es/Button.js
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
function iconElement(_a4) {
  var imageUrl = _a4.imageUrl, name = _a4.name, iconClass = _a4.iconClass, svgIcon = _a4.svgIcon, imageAlt = _a4.imageAlt;
  if (imageUrl) {
    return React13.createElement("img", { role: "presentation", className: "k-button-icon", alt: imageAlt, src: imageUrl });
  } else if (name || svgIcon) {
    return React13.createElement(IconWrap, { className: "k-button-icon", name, icon: svgIcon });
  } else if (iconClass) {
    return React13.createElement("span", { role: "presentation", className: classNames("k-button-icon", iconClass) });
  }
  return null;
}
var Button = (
  /** @class */
  function(_super) {
    __extends3(Button2, _super);
    function Button2(props) {
      var _this = _super.call(this, props) || this;
      _this._element = null;
      _this.handleClick = function(event) {
        _this.toggleIfApplicable();
        if (_this.props.onClick) {
          _this.props.onClick.call(void 0, event);
        }
      };
      validatePackage(packageMetadata3);
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
      var _a4;
      var _this = this;
      var _b = this.props, children = _b.children, togglable = _b.togglable, icon = _b.icon, iconClass = _b.iconClass, svgIcon = _b.svgIcon, imageUrl = _b.imageUrl, imageAlt = _b.imageAlt, className = _b.className, onClick = _b.onClick, _c = _b.size, size = _c === void 0 ? Button2.defaultProps.size : _c, _d = _b.rounded, rounded = _d === void 0 ? Button2.defaultProps.rounded : _d, _e = _b.fillMode, fillMode = _e === void 0 ? Button2.defaultProps.fillMode : _e, _f = _b.themeColor, themeColor = _f === void 0 ? Button2.defaultProps.themeColor : _f, htmlAttributes = __rest4(_b, ["children", "togglable", "icon", "iconClass", "svgIcon", "imageUrl", "imageAlt", "className", "onClick", "size", "rounded", "fillMode", "themeColor"]);
      var hasIcon = svgIcon !== void 0 || icon !== void 0 || iconClass !== void 0 || imageUrl !== void 0;
      var hasChildren = children !== void 0;
      var iconEl = iconElement({
        name: icon,
        svgIcon,
        iconClass,
        imageUrl,
        imageAlt
      });
      return React13.createElement(
        "button",
        __assign6({ ref: function(button) {
          return _this._element = button;
        }, "aria-pressed": togglable ? this.state.selected : void 0 }, htmlAttributes, { onClick: this.handleClick, className: classNames("k-button", (_a4 = {}, _a4["k-button-".concat(kendoThemeMaps.sizeMap[size] || size)] = size, _a4["k-button-".concat(fillMode)] = fillMode, _a4["k-button-".concat(fillMode, "-").concat(themeColor)] = Boolean(fillMode && themeColor), _a4["k-rounded-".concat(kendoThemeMaps.roundedMap[rounded] || rounded)] = rounded, _a4["k-icon-button"] = !hasChildren && hasIcon, _a4["k-disabled"] = this.props.disabled, _a4["k-selected"] = this.state.selected, _a4["k-rtl"] = this.props.dir === "rtl", _a4), this.props.className) }),
        iconEl,
        children && React13.createElement("span", { className: "k-button-text" }, children)
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
      children: PropTypes5.node,
      selected: PropTypes5.bool,
      togglable: PropTypes5.bool,
      icon: PropTypes5.string,
      svgIcon: svgIconPropType,
      iconClass: PropTypes5.string,
      imageUrl: PropTypes5.string,
      imageAlt: PropTypes5.string,
      size: PropTypes5.oneOf([null, "small", "medium", "large"]),
      rounded: PropTypes5.oneOf([null, "small", "medium", "large", "full"]),
      fillMode: PropTypes5.oneOf([null, "flat", "link", "outline", "solid"]),
      // eslint-disable-next-line max-len
      themeColor: PropTypes5.oneOf([null, "base", "primary", "secondary", "tertiary", "info", "success", "warning", "error", "dark", "light", "inverse"])
    };
    Button2.defaultProps = {
      togglable: false,
      size: "medium",
      rounded: "medium",
      fillMode: "solid",
      themeColor: "base"
    };
    return Button2;
  }(React13.Component)
);

// node_modules/@progress/kendo-react-inputs/dist/es/messages/index.js
var _a2;
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
var messages2 = (_a2 = {}, _a2[numericIncreaseValue] = "Increase value", _a2[numericDecreaseValue] = "Decrease value", _a2[sliderIncreaseValue] = "Increase", _a2[sliderDecreaseValue] = "Decrease", _a2[sliderDragTitle] = "Drag", _a2[colorGradientR] = "r", _a2[colorGradientG] = "g", _a2[colorGradientB] = "b", _a2[colorGradientA] = "a", _a2[colorGradientHex] = "hex", _a2[colorGradientContrastRatio] = "Contrast ratio", _a2[colorGradientAALevel] = "AA", _a2[colorGradientAAALevel] = "AAA", _a2[colorGradientPass] = "Pass", _a2[colorGradientFail] = "Fail", _a2[colorGradientHueSliderLabel] = "Hue slider", _a2[colorGradientAlphaSliderLabel] = "Alpha slider", _a2[colorGradientToggleInputsButton] = "Toggle colorgradient inputs", _a2[flatColorPickerCancelBtn] = "Cancel", _a2[flatColorPickerApplyBtn] = "Apply", _a2[flatColorPickerColorGradientBtn] = "Color Gradient view", _a2[flatColorPickerColorPaletteBtn] = "Color Palette view", _a2[flatColorPickerClearBtn] = "Clear color value", _a2[checkboxValidation] = "Please check this box if you want to proceed!", _a2[checkboxOptionalText] = "(Optional)", _a2[radioButtonValidation] = "Please select option if you want to proceed!", _a2[switchValidation] = "Please turn on if you want to proceed!", _a2[colorPickerDropdownButtonAriaLabel] = "Select", _a2[ratingAriaLabel] = "Rating", _a2[signatureClear] = "Clear", _a2[signatureMaximize] = "Maximize", _a2[signatureMinimize] = "Minimize", _a2);

// node_modules/@progress/kendo-react-inputs/dist/es/numerictextbox/NumericTextBox.js
var React14 = __toESM(require_react());
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
  var formatSuffixIndex = formatInfo.findIndex(function(_a4) {
    var _ = _a4[0], currSuffix = _a4[1];
    return Boolean(currSuffix) && nextValue.indexOf(currSuffix) === nextValue.length - currSuffix.length;
  });
  if (formatSuffixIndex === -1) {
    return -1;
  }
  var suffix = formatInfo[formatSuffixIndex][1];
  return nextValue.length - suffix.length;
};
var getMinCursorPosition = function(nextValue, formatInfo) {
  var formatPrefixIndex = formatInfo.findIndex(function(_a4) {
    var currPrefix = _a4[0], _ = _a4[1];
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
  var _a4 = getFormatPrefixSufix(format, intlService), positiveInfo = _a4.positiveInfo, negativeInfo = _a4.negativeInfo, zeroInfo = _a4.zeroInfo, oneInfo = _a4.oneInfo;
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
      var formatInfoIndex = formatInfo.findIndex(function(_a5) {
        var prefix = _a5[0], suffix = _a5[1];
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
var NumericTextBox = React14.forwardRef(function(directProps, target) {
  var _a4;
  validatePackage(packageMetadata2);
  var props = usePropsContext(NumericTextBoxPropsContext, directProps);
  var calculatedId = React14.useMemo(function() {
    return guid();
  }, []);
  var inputId = props.id || calculatedId;
  var intlService = useInternationalization();
  var localizationService = useLocalization();
  var elementRef = React14.useRef(null);
  var valueDuringChangeRef = React14.useRef();
  var _b = React14.useState(false), forceUpdate = _b[0], setForceUpdate = _b[1];
  var stateRef = React14.useRef(getInitialState());
  var isPasteRef = React14.useRef(false);
  var prevLooseValueRef = React14.useRef();
  var stateValueRef = React14.useRef(props.defaultValue);
  var looseValue = formatValue(stateRef.current.focused && !props.disabled ? stateRef.current.currentLooseValue : getStateOrPropsValue(props.value, stateValueRef.current), props.format, intlService);
  prevLooseValueRef.current = looseValue;
  var Prefix = useCustomComponent(props.prefix)[0];
  var Suffix = useCustomComponent(props.suffix)[0];
  React14.useEffect(function() {
    if (elementRef.current && elementRef.current.setCustomValidity) {
      elementRef.current.setCustomValidity(validityGetter().valid ? "" : props.validationMessage || VALIDATION_MESSAGE);
    }
  });
  var focusElement = React14.useCallback(function() {
    if (elementRef.current) {
      elementRef.current.focus();
    }
  }, []);
  var valueGetter = React14.useCallback(function() {
    if (valueDuringChangeRef.current !== void 0) {
      return valueDuringChangeRef.current;
    } else {
      return getStateOrPropsValue(props.value, stateValueRef.current);
    }
  }, [props.value]);
  var nameGetter = React14.useCallback(function() {
    return props.name;
  }, [props.name]);
  var requiredGetter = React14.useCallback(function() {
    return props.required;
  }, [props.required]);
  var validityGetter = React14.useCallback(function() {
    var customError = props.validationMessage !== void 0;
    var currentValue = valueGetter();
    var valid = props.valid !== void 0 ? props.valid : !stateRef.current.valueIsOutOfRange && (!requiredGetter() || currentValue !== null && currentValue !== void 0);
    return {
      customError,
      valid,
      valueMissing: currentValue === null || currentValue === void 0
    };
  }, [props.validationMessage, props.valid, valueGetter, requiredGetter]);
  var validityStylesGetter = React14.useCallback(function() {
    return props.validityStyles;
  }, [props.validityStyles]);
  var propsGetter = React14.useCallback(function() {
    return props;
  }, [props]);
  var getImperativeHandle = React14.useCallback(function() {
    var options = {
      element: elementRef.current,
      focus: focusElement
    };
    Object.defineProperty(options, "name", { get: nameGetter });
    Object.defineProperty(options, "value", { get: valueGetter });
    Object.defineProperty(options, "validity", { get: validityGetter });
    Object.defineProperty(options, "validityStyles", { get: validityStylesGetter });
    Object.defineProperty(options, "required", { get: requiredGetter });
    Object.defineProperty(options, "props", { get: propsGetter });
    return options;
  }, [nameGetter, valueGetter, validityGetter, validityStylesGetter, requiredGetter, focusElement, propsGetter]);
  React14.useImperativeHandle(target, getImperativeHandle);
  var getCurrentState = React14.useCallback(function() {
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
  var triggerChange = React14.useCallback(function(event, newState) {
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
  var onChangeHandler = React14.useCallback(function(event) {
    var stateCandidate = getCurrentState();
    isPasteRef.current = false;
    triggerChange(event, sanitizeNumber(stateCandidate, props.format, intlService));
  }, [props.format, props.onChange, intlService, triggerChange, getCurrentState]);
  var onKeyDown = React14.useCallback(function(event) {
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
  var onPasteHandler = React14.useCallback(function() {
    isPasteRef.current = true;
  }, []);
  var onIncrease = React14.useCallback(function(event) {
    if (props.readOnly || props.disabled) {
      return;
    }
    var newState = getCurrentState();
    increaseValue(intlService.parseNumber(String(newState.currentLooseValue), props.format), newState, props.step, props.min, props.max, props.format, intlService);
    triggerChange(event, newState);
  }, [props.format, props.min, props.max, props.step, props.onChange, props.readOnly, props.disabled, triggerChange, getCurrentState]);
  var onDecrease = React14.useCallback(function(event) {
    if (props.readOnly || props.disabled) {
      return;
    }
    var newState = getCurrentState();
    decreaseValue(intlService.parseNumber(String(newState.currentLooseValue), props.format), newState, props.step, props.min, props.max, props.format, intlService);
    triggerChange(event, newState);
  }, [props.format, props.min, props.max, props.step, props.onChange, props.readOnly, props.disabled, triggerChange, getCurrentState]);
  var onWheelHandler = React14.useCallback(function(event) {
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
  var onFocus = React14.useCallback(function(event) {
    stateRef.current.currentLooseValue = prevLooseValueRef.current;
    stateRef.current.focused = true;
    dispatchEvent(props.onFocus, event, getImperativeHandle(), {});
    setForceUpdate(function(x) {
      return !x;
    });
  }, [props.onFocus, setForceUpdate, getImperativeHandle]);
  var onBlur = React14.useCallback(function(event) {
    stateRef.current = getInitialState();
    dispatchEvent(props.onBlur, event, getImperativeHandle(), {});
    setForceUpdate(function(x) {
      return !x;
    });
  }, [props.onBlur, setForceUpdate, getImperativeHandle]);
  var onMouseDown = React14.useCallback(function(e) {
    if (document && elementRef.current) {
      var activeElement = getActiveElement(document);
      e.preventDefault();
      if (activeElement !== elementRef.current) {
        elementRef.current.focus();
      }
    }
  }, []);
  React14.useLayoutEffect(function() {
    if (elementRef.current && elementRef.current.type !== "number" && stateRef.current.selectionStart !== void 0 && stateRef.current.selectionEnd !== void 0) {
      elementRef.current.selectionStart = stateRef.current.selectionStart;
      elementRef.current.selectionEnd = stateRef.current.selectionEnd;
      stateRef.current.selectionStart = void 0;
      stateRef.current.selectionEnd = void 0;
    }
  }, [forceUpdate]);
  var isValid = !validityStylesGetter() || validityGetter().valid;
  var numerictextbox = React14.createElement(
    "span",
    { dir: props.dir, style: !props.label ? __assign8({ width: props.width }, props.style) : props.style, className: classNames("k-input", "k-numerictextbox", (_a4 = {}, _a4["k-input-".concat(kendoThemeMaps.sizeMap[props.size] || props.size)] = props.size, _a4["k-input-".concat(props.fillMode)] = props.fillMode, _a4["k-rounded-".concat(kendoThemeMaps.roundedMap[props.rounded] || props.rounded)] = props.rounded, _a4["k-invalid"] = !isValid, _a4["k-required"] = props.required, _a4["k-disabled"] = props.disabled, _a4), props.className), "aria-disabled": props.disabled ? "true" : void 0 },
    React14.createElement(Prefix, null),
    React14.createElement("input", { role: "spinbutton", value: looseValue === null ? "" : looseValue, tabIndex: getTabIndex(props.tabIndex, props.disabled), accessKey: props.accessKey, disabled: props.disabled, title: props.title, "aria-disabled": props.disabled ? "true" : void 0, "aria-valuemin": props.min, "aria-valuemax": props.max, "aria-label": props.ariaLabel, "aria-labelledby": props.ariaLabelledBy, "aria-describedby": props.ariaDescribedBy, placeholder: props.placeholder, spellCheck: false, autoComplete: "off", autoCorrect: "off", type: props.inputType || "tel", className: "k-input-inner", id: inputId, name: props.name, readOnly: props.readOnly, style: props.inputStyle, onChange: onChangeHandler, onFocus, onBlur, onKeyDown, onPaste: onPasteHandler, onWheel: onWheelHandler, ref: elementRef }),
    React14.createElement(Suffix, null),
    props.children,
    props.spinners && React14.createElement(
      "span",
      { className: "k-input-spinner k-spin-button", onMouseDown },
      React14.createElement(Button, { tabIndex: -1, type: "button", icon: "caret-alt-up", svgIcon: caretAltUpIcon, rounded: null, className: "k-spinner-increase", "aria-label": localizationService.toLanguageString(numericIncreaseValue, messages2[numericIncreaseValue]), title: localizationService.toLanguageString(numericIncreaseValue, messages2[numericIncreaseValue]), onClick: onIncrease }),
      React14.createElement(Button, { tabIndex: -1, type: "button", icon: "caret-alt-down", svgIcon: caretAltDownIcon, rounded: null, className: "k-spinner-decrease", "aria-label": localizationService.toLanguageString(numericDecreaseValue, messages2[numericDecreaseValue]), title: localizationService.toLanguageString(numericDecreaseValue, messages2[numericDecreaseValue]), onClick: onDecrease })
    )
  );
  return props.label ? React14.createElement(FloatingLabel, { label: props.label, editorId: inputId, editorValue: looseValue === null ? "" : looseValue, editorValid: isValid, editorDisabled: props.disabled, editorPlaceholder: props.placeholder, children: numerictextbox, style: { width: props.width }, dir: props.dir }) : numerictextbox;
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
var React15 = __toESM(require_react());
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
var TextBox = React15.forwardRef(function(props, ref) {
  var _a4;
  validatePackage(packageMetadata2);
  var element2 = React15.useRef(null);
  var target = React15.useRef(null);
  var valueDuringChangeRef = React15.useRef();
  var valueGetter = React15.useCallback(function() {
    var _a5;
    if (valueDuringChangeRef.current !== void 0) {
      return valueDuringChangeRef.current;
    } else {
      return (_a5 = element2.current) === null || _a5 === void 0 ? void 0 : _a5.value;
    }
  }, []);
  React15.useImperativeHandle(target, function() {
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
  React15.useImperativeHandle(ref, function() {
    return target.current;
  });
  var _b = props, size = _b.size, fillMode = _b.fillMode, rounded = _b.rounded, className = _b.className, dir = _b.dir, style = _b.style, _c = _b.prefix, prefix = _c === void 0 ? defaultProps3.prefix : _c, _d = _b.suffix, suffix = _d === void 0 ? defaultProps3.suffix : _d, valid = _b.valid, _modified = _b.modified, _touched = _b.touched, _visited = _b.visited, other = __rest5(_b, ["size", "fillMode", "rounded", "className", "dir", "style", "prefix", "suffix", "valid", "modified", "touched", "visited"]);
  var Prefix = useCustomComponent(prefix)[0];
  var Suffix = useCustomComponent(suffix)[0];
  var _e = React15.useState(false), focused = _e[0], setFocused = _e[1];
  var handleFocus = function(_) {
    setFocused(true);
  };
  var handleBlur = function(_) {
    setFocused(false);
  };
  var handleChange = React15.useCallback(function(event) {
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
  }), onFocus = _f.onFocus, onBlur = _f.onBlur;
  return React15.createElement(
    "span",
    { style, dir, className: classNames("k-textbox k-input", (_a4 = {}, _a4["k-input-".concat(kendoThemeMaps.sizeMap[size] || size)] = size, _a4["k-input-".concat(fillMode)] = fillMode, _a4["k-rounded-".concat(kendoThemeMaps.roundedMap[rounded] || rounded)] = rounded, _a4), {
      "k-focus": focused,
      "k-required": props.required,
      "k-disabled": props.disabled,
      "k-invalid": props.valid === false
    }, className), onFocus, onBlur },
    React15.createElement(Prefix, null),
    React15.createElement("input", __assign9({ ref: element2, className: "k-input-inner" }, other, { onChange: handleChange })),
    React15.createElement(Suffix, null)
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
var React16 = __toESM(require_react());
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
var InputPrefix = React16.forwardRef(function(props, ref) {
  var target = React16.useRef(null);
  var element2 = React16.useRef(null);
  React16.useImperativeHandle(target, function() {
    return { element: element2.current };
  });
  React16.useImperativeHandle(ref, function() {
    return target.current;
  });
  return React16.createElement("span", __assign10({}, props, { className: classNames("k-input-prefix", props.className) }));
});
InputPrefix.displayName = "KendoReactInputPrefix";

// node_modules/@progress/kendo-react-dropdowns/dist/es/common/ListFilter.js
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
var ListFilter = React17.forwardRef(function(props, ref) {
  var input = React17.useRef(null);
  React17.useImperativeHandle(ref, function() {
    return input.current;
  });
  return React17.createElement(
    "div",
    { className: "k-list-filter" },
    React17.createElement(TextBox, __assign11({}, props, { ref: input, value: props.value || "", onChange: props.onChange, onKeyDown: props.onKeyDown, tabIndex: props.tabIndex, onClick: function(e) {
      return e.stopPropagation();
    }, size: props.size, fillMode: props.fillMode, rounded: props.rounded, prefix: function() {
      return React17.createElement(
        InputPrefix,
        null,
        React17.createElement(IconWrap, { name: "search", icon: searchIcon })
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
var React18 = __toESM(require_react());
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
var GroupStickyHeader = (
  /** @class */
  function(_super) {
    __extends4(GroupStickyHeader2, _super);
    function GroupStickyHeader2() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    GroupStickyHeader2.prototype.render = function() {
      var _a4 = this.props, group = _a4.group, groupMode = _a4.groupMode, renderer = _a4.render;
      var item = React18.createElement("div", { className: "k-list-group-sticky-header" }, groupMode === "classic" ? group : React18.createElement("div", { className: "k-list-header-text" }, group));
      return renderer !== void 0 ? renderer.call(void 0, item, this.props) : item;
    };
    return GroupStickyHeader2;
  }(React18.Component)
);
var GroupStickyHeader_default = GroupStickyHeader;

// node_modules/@progress/kendo-react-dropdowns/dist/es/common/ListDefaultItem.js
var React19 = __toESM(require_react());

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
var preventDefault = function(e) {
  return e.preventDefault();
};
var ListDefaultItem = (
  /** @class */
  function(_super) {
    __extends5(ListDefaultItem2, _super);
    function ListDefaultItem2() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    ListDefaultItem2.prototype.render = function() {
      var _a4 = this.props, selected = _a4.selected, defaultItem = _a4.defaultItem, textField = _a4.textField;
      return React19.createElement("div", { onClick: this.props.onClick, onMouseDown: preventDefault, style: { position: "unset" }, className: classNames("k-list-optionlabel", {
        "k-selected": selected
      }) }, getItemValue(defaultItem, textField) || "");
    };
    return ListDefaultItem2;
  }(React19.Component)
);
var ListDefaultItem_default = ListDefaultItem;

// node_modules/@progress/kendo-react-dropdowns/dist/es/common/List.js
var React22 = __toESM(require_react());

// node_modules/@progress/kendo-react-dropdowns/dist/es/common/ListItem.js
var React20 = __toESM(require_react());
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
var ListItem = (
  /** @class */
  function(_super) {
    __extends6(ListItem2, _super);
    function ListItem2() {
      var _this = _super !== null && _super.apply(this, arguments) || this;
      _this.handleClick = function(e) {
        return _this.props.onClick(_this.props.index, e);
      };
      return _this;
    }
    ListItem2.prototype.render = function() {
      var _a4 = this.props, selected = _a4.selected, group = _a4.group, dataItem = _a4.dataItem, virtual = _a4.virtual, groupMode = _a4.groupMode, disabled = _a4.disabled, renderer = _a4.render;
      var item = React20.createElement(
        "li",
        { id: this.props.id, role: "option", "aria-selected": selected, "aria-disabled": disabled ? true : void 0, className: classNames("k-list-item", {
          "k-selected": selected,
          "k-focus": this.props.focused,
          "k-first": Boolean(group) && groupMode === "classic",
          "k-disabled": disabled
        }), onClick: this.handleClick, style: { position: virtual ? "relative" : "unset" } },
        React20.createElement("span", { className: "k-list-item-text" }, getItemValue(dataItem, this.props.textField).toString()),
        group !== void 0 && groupMode === "classic" ? React20.createElement("div", { className: "k-list-item-group-label" }, group) : null
      );
      return renderer !== void 0 ? renderer.call(void 0, item, this.props) : item;
    };
    return ListItem2;
  }(React20.Component)
);
var ListItem_default = ListItem;

// node_modules/@progress/kendo-react-dropdowns/dist/es/common/ListGroupItem.js
var React21 = __toESM(require_react());
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
var ListGroupItem = (
  /** @class */
  function(_super) {
    __extends7(ListGroupItem2, _super);
    function ListGroupItem2() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    ListGroupItem2.prototype.render = function() {
      var _a4 = this.props, group = _a4.group, virtual = _a4.virtual, renderer = _a4.render, _b = _a4.isMultiColumn, isMultiColumn = _b === void 0 ? false : _b;
      var item = React21.createElement(
        "li",
        { id: this.props.id, role: "group", className: isMultiColumn ? "k-table-group-row" : "k-list-group-item", style: isMultiColumn ? { "boxSizing": "inherit" } : { position: virtual ? "relative" : "unset" } },
        React21.createElement("span", { className: !renderer ? isMultiColumn ? "k-table-th" : "k-list-item-text" : void 0 }, group)
      );
      return renderer !== void 0 ? renderer.call(void 0, item, this.props) : item;
    };
    return ListGroupItem2;
  }(React21.Component)
);
var ListGroupItem_default = ListGroupItem;

// node_modules/@progress/kendo-react-dropdowns/dist/es/messages/index.js
var _a3;
var nodata = "dropdowns.nodata";
var clear = "dropdowns.clear";
var comboArrowBtnAriaLabelExpand = "dropdowns.comboArrowBtnAriaLabelExpand";
var comboArrowBtnAriaLabelCollapse = "dropdowns.comboArrowBtnAriaLabelCollapse";
var dropDownListArrowBtnAriaLabel = "dropdowns.dropDownListArrowBtnAriaLabel";
var adaptiveModeFooterApply = "dropdowns.apply";
var adaptiveModeFooterCancel = "dropdowns.cancel";
var messages3 = (_a3 = {}, _a3[clear] = "clear", _a3[nodata] = "NO DATA FOUND.", _a3[comboArrowBtnAriaLabelExpand] = "expand combobox", _a3[comboArrowBtnAriaLabelCollapse] = "collapse combobox", _a3[dropDownListArrowBtnAriaLabel] = "select", _a3[adaptiveModeFooterApply] = "Apply", _a3[adaptiveModeFooterCancel] = "Cancel", _a3);

// node_modules/@progress/kendo-react-dropdowns/dist/es/common/List.js
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
var List = (
  /** @class */
  function(_super) {
    __extends8(List2, _super);
    function List2() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    List2.prototype.renderItems = function() {
      var _this = this;
      var _a4 = this.props, textField = _a4.textField, valueField = _a4.valueField, groupField = _a4.groupField, groupMode = _a4.groupMode, isMultiColumn = _a4.isMultiColumn, optionsGuid = _a4.optionsGuid, _b = _a4.skip, skip = _b === void 0 ? 0 : _b, virtual = _a4.virtual, focusedIndex = _a4.focusedIndex, _c = _a4.highlightSelected, highlightSelected = _c === void 0 ? true : _c, value = _a4.value, data = _a4.data, itemRender = _a4.itemRender, groupHeaderItemRender = _a4.groupHeaderItemRender;
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
          group !== void 0 && groupMode === "modern" && React22.createElement(ListGroupItem_default, { id: "option-".concat(optionsGuid, "-").concat(idIndex), virtual, key: realIndex + "-group-item", group, isMultiColumn, render: groupHeaderItemRender }),
          React22.createElement(ListItem_default, { id: "option-".concat(optionsGuid, "-").concat(group !== void 0 && groupMode === "modern" ? idIndex + 1 : idIndex), virtual, dataItem: item, groupMode, selected, focused: focusedIndex === index, index: realIndex, key: realIndex, onClick: _this.props.onClick, textField, group, render: itemRender, disabled: item.disabled })
        ];
      });
    };
    List2.prototype.renderNoValueElement = function(localizationService) {
      var noDataRender = this.props.noDataRender;
      var noDataElement = React22.createElement(
        "div",
        { className: "k-nodata" },
        React22.createElement("div", null, localizationService.toLanguageString(nodata, messages3[nodata]))
      );
      return noDataRender ? noDataRender.call(void 0, noDataElement) : noDataElement;
    };
    List2.prototype.render = function() {
      var localizationService = provideLocalizationService(this);
      var _a4 = this.props, id = _a4.id, show = _a4.show, wrapperCssClass = _a4.wrapperCssClass, wrapperStyle = _a4.wrapperStyle, listStyle = _a4.listStyle, listRef = _a4.listRef, wrapperRef = _a4.wrapperRef, _b = _a4.listClassName, listClassName = _b === void 0 ? "k-list-ul" : _b;
      var items = this.renderItems();
      return items.length ? React22.createElement(
        "div",
        { className: wrapperCssClass, style: wrapperStyle, ref: wrapperRef, onMouseDown: this.props.onMouseDown, onBlur: this.props.onBlur, onScroll: this.props.onScroll, unselectable: "on" },
        React22.createElement("ul", { id, role: "listbox", "aria-hidden": !show ? true : void 0, className: listClassName, ref: listRef, style: listStyle }, items),
        this.props.scroller && React22.createElement("div", { className: "k-height-container" }, this.props.scroller)
      ) : this.renderNoValueElement(localizationService);
    };
    return List2;
  }(React22.Component)
);
var List_default = List;
registerForLocalization(List);

// node_modules/@progress/kendo-react-dropdowns/dist/es/common/DropDownBase.js
var React23 = __toESM(require_react());
var PropTypes9 = __toESM(require_prop_types());

// node_modules/@progress/kendo-react-dropdowns/dist/es/common/VirtualScroll.js
var maxHeightIE = 1533915;
var VirtualScroll = (
  /** @class */
  function() {
    function VirtualScroll2() {
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
    Object.defineProperty(VirtualScroll2.prototype, "translate", {
      get: function() {
        return this.listTranslate;
      },
      enumerable: false,
      configurable: true
    });
    VirtualScroll2.prototype.changePage = function(skip, e) {
      var newSkip = Math.min(Math.max(0, skip), this.total - this.pageSize);
      if (newSkip !== this.skip && this.PageChange) {
        this.PageChange({ skip: newSkip, take: this.pageSize }, e);
      }
    };
    VirtualScroll2.prototype.translateTo = function(dY) {
      this.listTranslate = dY;
      if (this.list) {
        this.list.style.transform = "translateY(" + dY + "px)";
      }
    };
    VirtualScroll2.prototype.reset = function() {
      if (this.container) {
        this.calcScrollElementHeight();
        this.container.scrollTop = 0;
        this.translateTo(0);
      }
    };
    VirtualScroll2.prototype.scrollToEnd = function() {
      if (this.container && this.list) {
        this.calcScrollElementHeight();
        this.container.scrollTop = this.container.scrollHeight - this.container.offsetHeight;
        this.translateTo(this.container.scrollHeight);
      }
    };
    VirtualScroll2.prototype.localScrollUp = function(e) {
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
    VirtualScroll2.prototype.localScrollDown = function(e) {
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
    VirtualScroll2.prototype.scrollNonStrict = function(e) {
      var floatItemIndex = this.total * this.prevScrollPos / this.containerHeight;
      var itemIndex = Math.min(Math.floor(floatItemIndex), this.total - 1);
      var targetTranslate = this.containerHeight * floatItemIndex / this.total;
      targetTranslate = this.validateTranslate(targetTranslate);
      this.translateTo(targetTranslate);
      this.changePage(itemIndex, e);
    };
    VirtualScroll2.prototype.scrollHandler = function(e) {
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
    VirtualScroll2.prototype.validateTranslate = function(translate) {
      translate = Math.max(0, translate);
      translate = Math.min(this.containerHeight, translate);
      return translate;
    };
    return VirtualScroll2;
  }()
);
var VirtualScroll_default = VirtualScroll;

// node_modules/@progress/kendo-react-dropdowns/dist/es/common/Navigation.js
var Navigation2 = (
  /** @class */
  function() {
    function Navigation3() {
    }
    Navigation3.prototype.navigate = function(args) {
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
    Navigation3.prototype.next = function(args) {
      if (!isPresent(args.current)) {
        return args.min;
      } else {
        return Math.min(args.max, Math.max(args.current + args.step, args.min));
      }
    };
    return Navigation3;
  }()
);

// node_modules/@progress/kendo-react-dropdowns/dist/es/common/DropDownBase.js
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
        var _a4 = _this.component.props, textField = _a4.textField, filterable = _a4.filterable;
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
        var _a4, _b, _c, _d, _e, _f;
        var vs = _this.vs;
        var offsetTop = (_b = (_a4 = _this.list) === null || _a4 === void 0 ? void 0 : _a4.parentElement) === null || _b === void 0 ? void 0 : _b.scrollTop;
        var itemHeight = vs.enabled && vs.itemHeight ? vs.itemHeight : _this.list ? _this.list.children[0].offsetHeight : 0;
        var height = (_d = (_c = _this.list) === null || _c === void 0 ? void 0 : _c.parentElement) === null || _d === void 0 ? void 0 : _d.offsetHeight;
        if (offsetTop !== void 0 && height !== void 0) {
          (_f = (_e = _this.list) === null || _e === void 0 ? void 0 : _e.parentElement) === null || _f === void 0 ? void 0 : _f.scroll({ top: offsetTop + direction * Math.floor(height / itemHeight) * itemHeight });
        }
      };
      this.renderScrollElement = function() {
        var vs = _this.vs;
        return vs.enabled && React23.createElement("div", { ref: function(element2) {
          return vs.scrollElement = element2;
        }, key: "scrollElementKey" });
      };
      this.resetGroupStickyHeader = function(groupName, that) {
        if (groupName !== that.state.group) {
          that.setState(__assign12(__assign12({}, that.state), { group: groupName }));
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
          handler.call(void 0, __assign12(__assign12({}, eventArgs), eventData));
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
      var _a4 = props.data, data = _a4 === void 0 ? [] : _a4, dataItemKey = props.dataItemKey, virtual = props.virtual;
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
        var _a4;
        if (data[index - 1] && el[groupField] !== data[index - 1][groupField]) {
          newData.push((_a4 = {}, _a4[groupField] = el[groupField], _a4));
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
    DropDownBase2.propTypes = __assign12(__assign12({}, DropDownBase2.basicPropTypes), { value: PropTypes9.any, defaultValue: PropTypes9.any, filterable: PropTypes9.bool, filter: PropTypes9.string, virtual: PropTypes9.shape({
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
var React28 = __toESM(require_react());
var PropTypes14 = __toESM(require_prop_types());

// node_modules/@progress/kendo-react-layout/dist/es/actionsheet/ActionSheetItem.js
var React24 = __toESM(require_react());
var PropTypes10 = __toESM(require_prop_types());
var ActionSheetItem = function(props) {
  var itemRef = React24.useRef(null);
  var onClick = React24.useCallback(function(event) {
    if (props.onClick) {
      props.onClick.call(void 0, {
        syntheticEvent: event,
        item: props.item,
        title: props.title
      });
    }
  }, [props.item, props.title, props.onClick]);
  React24.useEffect(function() {
    if (itemRef.current && props.focused) {
      itemRef.current.focus();
    }
  }, [props.focused]);
  return React24.createElement(
    "span",
    { style: props.style, tabIndex: props.tabIndex, className: classNames("k-actionsheet-item", "k-cursor-pointer", props.disabled && "k-disabled", props.className), ref: itemRef, role: "button", "aria-disabled": props.disabled, onClick },
    React24.createElement(
      "span",
      { className: "k-actionsheet-action" },
      props.icon && React24.createElement("span", { className: "k-icon-wrap" }, props.icon),
      (props.title || props.description) && React24.createElement(
        "span",
        { className: "k-actionsheet-item-text" },
        props.title && React24.createElement("span", { className: "k-actionsheet-item-title" }, props.title),
        props.description && React24.createElement("span", { className: "k-actionsheet-item-description" }, props.description)
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
var React25 = __toESM(require_react());
var PropTypes11 = __toESM(require_prop_types());
var headerDisplayName = "ActionSheetHeader";
var ActionSheetHeader = function(props) {
  return React25.createElement("div", { className: classNames("k-actionsheet-titlebar", props.className) }, props.children);
};
ActionSheetHeader.propTypes = {
  className: PropTypes11.string
};
ActionSheetHeader.displayName = headerDisplayName;
ActionSheetHeader.propTypes = {
  children: PropTypes11.any
};

// node_modules/@progress/kendo-react-layout/dist/es/actionsheet/ActionSheetFooter.js
var React26 = __toESM(require_react());
var PropTypes12 = __toESM(require_prop_types());
var footerDisplayName = "ActionSheetFooter";
var ActionSheetFooter = function(props) {
  return React26.createElement("div", { className: classNames("k-actionsheet-footer", props.className) }, props.children);
};
ActionSheetFooter.propTypes = {
  className: PropTypes12.string
};
ActionSheetFooter.displayName = footerDisplayName;
ActionSheetFooter.propTypes = {
  children: PropTypes12.any
};

// node_modules/@progress/kendo-react-layout/dist/es/actionsheet/ActionSheetContent.js
var React27 = __toESM(require_react());
var PropTypes13 = __toESM(require_prop_types());
var contentDisplayName = "ActionSheetContent";
var ActionSheetContent = function(props) {
  return React27.createElement("div", { className: classNames("k-actionsheet-content", props.className) }, props.children);
};
ActionSheetContent.propTypes = {
  className: PropTypes13.string
};
ActionSheetContent.displayName = contentDisplayName;
ActionSheetContent.propTypes = {
  children: PropTypes13.any
};

// node_modules/@progress/kendo-react-layout/dist/es/actionsheet/ActionSheet.js
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
    __extends9(ActionSheet2, _super);
    function ActionSheet2(props) {
      var _this = _super.call(this, props) || this;
      _this.actionSheetRef = React28.createRef();
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
        React28.Children.forEach(children, function(child) {
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
      var _a4 = this.props, title = _a4.title, subTitle = _a4.subTitle, animationStyles = _a4.animationStyles, animation = _a4.animation, expand = _a4.expand, tabIndex = _a4.tabIndex, items = _a4.items;
      var topGroupItems = items === null || items === void 0 ? void 0 : items.filter(function(item) {
        return !item.group || item.group === "top";
      });
      var bottomGroupItems = items === null || items === void 0 ? void 0 : items.filter(function(item) {
        return item.group === "bottom";
      });
      var shouldRenderSeparator = topGroupItems && topGroupItems.length > 0 && (bottomGroupItems && bottomGroupItems.length > 0);
      var children = this.children(this.props.children);
      var animationDuration = this.props.animationDuration || this.animationDuration;
      var actionSheetPanel = this.state.slide && React28.createElement(
        "div",
        { className: classNames("k-actionsheet", this.props.className, {
          "k-actionsheet-bottom": !this.props.className
        }), role: "dialog", "aria-modal": "true", "aria-hidden": false, "aria-labelledby": this.ariaLabeledBy, ref: this.actionSheetRef, onKeyDown: this.handleKeyDown },
        children[headerDisplayName] && !title && !subTitle && children[headerDisplayName],
        (title || subTitle) && React28.createElement(
          "div",
          { className: "k-actionsheet-titlebar k-text-center" },
          React28.createElement(
            "div",
            { className: "k-actionsheet-titlebar-group k-hbox" },
            React28.createElement(
              "div",
              { className: this.actionSheetTitleClass, id: this.ariaLabeledBy },
              title && React28.createElement("div", null, title),
              subTitle && React28.createElement("div", { className: "k-actionsheet-subtitle" }, subTitle)
            )
          )
        ),
        children[contentDisplayName] || React28.createElement(
          "div",
          { className: "k-actionsheet-content" },
          React28.createElement("div", { className: "k-list-ul", role: "group" }, topGroupItems && topGroupItems.map(function(item, idx) {
            return React28.createElement(ActionSheetItem, __assign13({}, item, { id: idx, key: idx, item, tabIndex: tabIndex || 0, onClick: _this.handleItemClick }));
          })),
          shouldRenderSeparator && React28.createElement("hr", { className: "k-hr" }),
          React28.createElement("div", { className: "k-list-ul", role: "group" }, bottomGroupItems && bottomGroupItems.map(function(item, idx) {
            return React28.createElement(ActionSheetItem, __assign13({}, item, { id: idx + ((topGroupItems === null || topGroupItems === void 0 ? void 0 : topGroupItems.length) || 0), key: idx, item, tabIndex: tabIndex || 0, onClick: _this.handleItemClick }));
          }))
        ),
        children[footerDisplayName]
      );
      return React28.createElement(React28.Fragment, null, expand || this.state.show ? React28.createElement(
        React28.Fragment,
        null,
        React28.createElement(
          "div",
          { className: "k-actionsheet-container" },
          React28.createElement("div", { className: "k-overlay", onClick: this.handleOverlayClick }),
          animation ? React28.createElement(Animation, { transitionName: this.state.slide ? "slide-up" : "slide-down", onExited: this.hideActionSheet, transitionEnterDuration: animationDuration, transitionExitDuration: animationDuration, animationEnteringStyle: animationStyles || this.bottomPosition, animationEnteredStyle: animationStyles || this.bottomPosition, animationExitingStyle: animationStyles || this.bottomPosition, exit: true, enter: true, appear: false }, actionSheetPanel) : actionSheetPanel
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
  }(React28.Component)
);

// node_modules/@progress/kendo-react-dropdowns/dist/es/DropDownList/DropDownList.js
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
var VALIDATION_MESSAGE2 = "Please select a value from the list!";
var sizeMap = kendoThemeMaps.sizeMap;
var roundedMap = kendoThemeMaps.roundedMap;
var DropDownListWithoutContext = (
  /** @class */
  function(_super) {
    __extends10(DropDownListWithoutContext2, _super);
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
        var _a4 = _this.props, _b = _a4.data, data = _b === void 0 ? [] : _b, virtual = _a4.virtual, dataItemKey = _a4.dataItemKey, defaultItem = _a4.defaultItem;
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
        return React29.createElement(
          "select",
          { name: _this.props.name, ref: function(el) {
            _this._select = el;
          }, tabIndex: -1, "aria-hidden": true, title: _this.props.label, style: { opacity: 0, width: 1, border: 0, zIndex: -1, position: "absolute", left: "50%" } },
          React29.createElement("option", { value: _this.props.valueMap ? _this.props.valueMap.call(void 0, value) : value })
        );
      };
      _this.renderListContainer = function() {
        var _a4;
        var _b = _this.props, header = _b.header, footer = _b.footer, dir = _b.dir, _c = _b.data, data = _c === void 0 ? [] : _c, size = _b.size, groupField = _b.groupField, groupStickyHeaderItemRender = _b.groupStickyHeaderItemRender, list = _b.list;
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
        return React29.createElement(
          ListContainer_default,
          __assign14({}, listContainerProps),
          _this.renderListFilter(),
          header && React29.createElement("div", { className: "k-list-header" }, header),
          React29.createElement(
            "div",
            { className: classNames("k-list", (_a4 = {}, _a4["k-list-".concat(sizeMap[size] || size)] = size, _a4["k-virtual-list"] = _this.base.vs.enabled, _a4)) },
            _this.renderDefaultItem(),
            !list && group && data.length !== 0 && React29.createElement(GroupStickyHeader_default, { group, groupMode: "modern", render: groupStickyHeaderItemRender }),
            _this.renderList()
          ),
          footer && React29.createElement("div", { className: "k-list-footer" }, footer)
        );
      };
      _this.renderList = function() {
        var _a4 = _this.props, _b = _a4.data, data = _b === void 0 ? [] : _b, textField = _a4.textField, dataItemKey = _a4.dataItemKey, _c = _a4.virtual, virtual = _c === void 0 ? { skip: 0 } : _c, groupHeaderItemRender = _a4.groupHeaderItemRender, listNoDataRender = _a4.listNoDataRender, itemRender = _a4.itemRender;
        var vs = _this.base.vs;
        var skip = virtual.skip;
        var opened = _this.props.opened !== void 0 ? _this.props.opened : _this.state.opened;
        var popupSettings = _this.base.getPopupSettings();
        var translate = "translateY(".concat(vs.translate, "px)");
        return React29.createElement(List_default, { id: _this.base.listBoxId, show: opened, data: data.slice(), focusedIndex: _this.getFocusedIndex(), value: _this.value, textField, valueField: dataItemKey, optionsGuid: _this.base.guid, groupField: _this.props.groupField, groupMode: "modern", listRef: function(list) {
          return vs.list = _this.base.list = list;
        }, wrapperStyle: { maxHeight: popupSettings.height }, wrapperCssClass: "k-list-content", listStyle: vs.enabled ? { transform: translate } : void 0, key: "listkey", skip, onClick: _this.handleItemClick, itemRender, groupHeaderItemRender, noDataRender: listNoDataRender, onScroll: _this.onScroll, wrapperRef: vs.scrollerRef, scroller: _this.base.renderScrollElement() });
      };
      _this.onScroll = function(event) {
        var _a4 = _this.base, vs = _a4.vs, list = _a4.list;
        vs.scrollHandler(event);
        var groupField = _this.props.groupField;
        var _b = _this.props.data, data = _b === void 0 ? [] : _b;
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
        return _this.props.filterable && React29.createElement(ListFilter_default, { value: filterText, ref: function(filter) {
          return _this._filterInput = filter && filter.element;
        }, onChange: _this.handleListFilterChange, onKeyDown: _this.handleKeyDown, size: _this.props.size, rounded: _this.props.rounded, fillMode: _this.props.fillMode });
      };
      _this.renderDefaultItem = function() {
        var _a4 = _this.props, textField = _a4.textField, defaultItem = _a4.defaultItem, dataItemKey = _a4.dataItemKey;
        return defaultItem !== void 0 && React29.createElement(ListDefaultItem_default, { defaultItem, textField, selected: areSame(_this.value, defaultItem, dataItemKey), key: "defaultitemkey", onClick: _this.handleDefaultItemClick });
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
        var _a4 = _this.props, _b = _a4.data, data = _b === void 0 ? [] : _b, dataItemKey = _a4.dataItemKey;
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
        var _c = _this.props, textField = _c.textField, ignoreCase = _c.ignoreCase;
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
        var _a4 = _this.props, _b = _a4.data, data = _b === void 0 ? [] : _b, filterable = _a4.filterable, disabled = _a4.disabled, defaultItem = _a4.defaultItem, _c = _a4.leftRightKeysNavigation, leftRightKeysNavigation = _c === void 0 ? true : _c, _d = _a4.virtual, virtual = _d === void 0 ? { skip: 0, total: 0, pageSize: 0 } : _d, dataItemKey = _a4.dataItemKey, _e = _a4.groupField, groupField = _e === void 0 ? "" : _e, textField = _a4.textField, _f = _a4.skipDisabledItems, skipDisabledItems = _f === void 0 ? true : _f;
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
        var _a4 = _this.state.windowWidth, windowWidth = _a4 === void 0 ? 0 : _a4;
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
        var _a4 = this.props, _b = _a4.data, data = _b === void 0 ? [] : _b, dataItemKey = _a4.dataItemKey;
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
      var _a4;
      var _b = this.props, dataItemKey = _b.dataItemKey, virtual = _b.virtual, _c = _b.groupField, groupField = _c === void 0 ? "" : _c, textField = _b.textField;
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
          selectedItemIndex = (_a4 = this.base.getGroupedDataModernMode(data, groupField)) === null || _a4 === void 0 ? void 0 : _a4.map(function(el) {
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
      var _a4;
      this.observerResize = canUseDOM && window.ResizeObserver && new window.ResizeObserver(this.calculateMedia.bind(this));
      this.base.didMount();
      this.setValidity();
      if (((_a4 = this.document) === null || _a4 === void 0 ? void 0 : _a4.body) && this.observerResize) {
        this.observerResize.observe(this.document.body);
      }
    };
    DropDownListWithoutContext2.prototype.componentWillUnmount = function() {
      var _a4;
      if (((_a4 = this.document) === null || _a4 === void 0 ? void 0 : _a4.body) && this.observerResize) {
        this.observerResize.disconnect();
      }
    };
    DropDownListWithoutContext2.prototype.render = function() {
      var _a4;
      var _this = this;
      var btnAriaLabel = provideLocalizationService(this).toLanguageString(dropDownListArrowBtnAriaLabel, messages3[dropDownListArrowBtnAriaLabel]);
      var _b = this.props, style = _b.style, className = _b.className, label = _b.label, dir = _b.dir, virtual = _b.virtual, size = _b.size, rounded = _b.rounded, fillMode = _b.fillMode, adaptive = _b.adaptive;
      var _c = this.state.windowWidth, windowWidth = _c === void 0 ? 0 : _c;
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
      var valueDefaultRendering = React29.createElement(
        "span",
        { id: this._inputId, className: "k-input-inner" },
        React29.createElement("span", { className: "k-input-value-text" }, text)
      );
      var valueElement = valueRender !== void 0 ? valueRender.call(void 0, valueDefaultRendering, value) : valueDefaultRendering;
      var dropdownlist = React29.createElement(
        React29.Fragment,
        null,
        React29.createElement(
          "span",
          { ref: this.componentRef, className: classNames("k-dropdownlist k-picker", className, (_a4 = {}, _a4["k-picker-".concat(sizeMap[size] || size)] = size, _a4["k-rounded-".concat(roundedMap[rounded] || rounded)] = rounded, _a4["k-picker-".concat(fillMode)] = fillMode, _a4["k-focus"] = focused, _a4["k-disabled"] = disabled, _a4["k-invalid"] = !isValid, _a4["k-loading"] = loading, _a4["k-required"] = this.required, _a4)), style: !label ? style : __assign14(__assign14({}, style), { width: void 0 }), dir, onMouseDown: opened ? function(event) {
            if (event.target.nodeName !== "INPUT") {
              _this.focusElement(_this.base.wrapper);
              event.preventDefault();
            }
          } : void 0, onFocus: this.handleFocus, onBlur: this.handleBlur, tabIndex: getTabIndex(tabIndex, disabled), accessKey: this.props.accessKey, onKeyDown: this.handleKeyDown, onKeyPress: this.handleKeyPress, onClick: disabled ? void 0 : this.handleWrapperClick, role: "combobox", "aria-required": this.required, "aria-disabled": disabled || void 0, "aria-haspopup": "listbox", "aria-expanded": opened || false, "aria-owns": this.base.listBoxId, "aria-activedescendant": opened ? "option-" + this.base.guid + "-" + (selectedIndex + (virtual ? virtual.skip : 0)) : void 0, "aria-label": this.props.ariaLabel || this.props.label, "aria-labelledby": this.props.ariaLabelledBy, "aria-describedby": this.props.ariaDescribedBy || this._inputId, id: this.props.id, title: this.props.title },
          valueElement,
          loading && React29.createElement(IconWrap, { className: "k-input-loading-icon", name: "loading" }),
          React29.createElement(Button, { tabIndex: -1, type: "button", "aria-label": btnAriaLabel, "aria-hidden": true, size, fillMode, iconClass: iconClassName, className: "k-input-button", rounded: null, themeColor: "base", icon: !iconClassName ? "caret-alt-down" : void 0, svgIcon: !iconClassName ? caretAltDownIcon : this.props.svgIcon, onMouseDown: function(e) {
            return _this.state.focused && e.preventDefault();
          } }),
          this.dummySelect(value),
          !renderAdaptive && this.renderListContainer()
        ),
        renderAdaptive && this.renderAdaptiveListContainer()
      );
      return label ? React29.createElement(FloatingLabel, { label, editorValue: text, editorValid: isValid, editorDisabled: this.props.disabled, style: { width: style ? style.width : void 0 }, children: dropdownlist }) : dropdownlist;
    };
    DropDownListWithoutContext2.prototype.onNavigate = function(state, keyCode, skipItems) {
      var _a4 = this.props, _b = _a4.data, data = _b === void 0 ? [] : _b, defaultItem = _a4.defaultItem, dataItemKey = _a4.dataItemKey, _c = _a4.virtual, virtual = _c === void 0 ? { skip: 0, total: 0, pageSize: 0 } : _c;
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
      var _a4;
      var _this = this;
      var _b = this.state.windowWidth, windowWidth = _b === void 0 ? 0 : _b;
      var _c = this.props, header = _c.header, footer = _c.footer, size = _c.size, adaptiveTitle = _c.adaptiveTitle, groupField = _c.groupField, groupStickyHeaderItemRender = _c.groupStickyHeaderItemRender, list = _c.list, _d = _c.data, data = _d === void 0 ? [] : _d;
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
      return React29.createElement(
        React29.Fragment,
        null,
        React29.createElement(
          ActionSheet,
          __assign14({}, actionSheetProps),
          React29.createElement(
            ActionSheetHeader,
            { className: "k-text-center" },
            React29.createElement(
              "div",
              { className: "k-actionsheet-titlebar-group k-hbox" },
              React29.createElement(
                "div",
                { className: "k-actionsheet-title" },
                React29.createElement("div", null, adaptiveTitle)
              ),
              React29.createElement(
                "div",
                { className: "k-actionsheet-actions" },
                React29.createElement(Button, { tabIndex: 0, "aria-label": "Cancel", "aria-disabled": "false", type: "button", fillMode: "flat", onClick: this.handleWrapperClick, icon: "x", svgIcon: xIcon })
              )
            ),
            React29.createElement("div", { className: "k-actionsheet-titlebar-group k-actionsheet-filter" }, this.renderListFilter())
          ),
          React29.createElement(
            ActionSheetContent,
            { className: "!k-overflow-hidden" },
            header && React29.createElement("div", { className: "k-list-header" }, header),
            React29.createElement(
              "div",
              { className: classNames("k-list", (_a4 = {}, _a4["k-list-".concat(sizeMap[size] || size)] = size, _a4["k-virtual-list"] = this.base.vs.enabled, _a4)) },
              this.renderDefaultItem(),
              !list && group && data.length !== 0 && React29.createElement(GroupStickyHeader_default, { group, groupMode: "modern", render: groupStickyHeaderItemRender }),
              this.renderList()
            ),
            footer && React29.createElement("div", { className: "k-list-footer" }, footer)
          )
        )
      );
    };
    DropDownListWithoutContext2.prototype.getFocusedIndex = function() {
      var value = this.value;
      var _a4 = this.props, _b = _a4.data, data = _b === void 0 ? [] : _b, textField = _a4.textField, dataItemKey = _a4.dataItemKey, _c = _a4.virtual, virtual = _c === void 0 ? { skip: 0 } : _c, _d = _a4.focusedItemIndex, focusedItemIndex = _d === void 0 ? itemIndexStartsWith : _d, filterable = _a4.filterable, _e = _a4.skipDisabledItems, skipDisabledItems = _e === void 0 ? true : _e;
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
      var _a4 = this.props.data, data = _a4 === void 0 ? [] : _a4;
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
    DropDownListWithoutContext2.propTypes = __assign14({ delay: PropTypes15.number, ignoreCase: PropTypes15.bool, iconClassName: PropTypes15.string, svgIcon: svgIconPropType, defaultItem: PropTypes15.any, valueRender: PropTypes15.func, valueMap: PropTypes15.func, validationMessage: PropTypes15.string, required: PropTypes15.bool, id: PropTypes15.string, ariaLabelledBy: PropTypes15.string, ariaDescribedBy: PropTypes15.string, ariaLabel: PropTypes15.string, leftRightKeysNavigation: PropTypes15.bool, title: PropTypes15.string, groupField: PropTypes15.string, list: PropTypes15.any, skipDisabledItems: PropTypes15.bool }, DropDownBase_default.propTypes);
    DropDownListWithoutContext2.defaultProps = __assign14(__assign14({ delay: 500, tabIndex: 0, ignoreCase: true }, DropDownBase_default.defaultProps), { required: false, size: "medium", rounded: "medium", fillMode: "solid", groupMode: "modern" });
    return DropDownListWithoutContext2;
  }(React29.Component)
);
var DropDownListPropsContext = createPropsContext();
var DropDownList = withPropsContext(DropDownListPropsContext, DropDownListWithoutContext);
DropDownList.displayName = "KendoReactDropDownList";

export {
  useInternationalization,
  useLocalization,
  guid,
  Keys,
  dispatchEvent,
  useAsyncFocusBlur,
  createPropsContext,
  withPropsContext,
  IconWrap,
  kendoThemeMaps,
  getActiveElement,
  caretAltUpIcon,
  caretAltRightIcon,
  caretAltDownIcon,
  caretAltLeftIcon,
  caretAltToRightIcon,
  caretAltToLeftIcon,
  moreVerticalIcon,
  calendarIcon,
  cancelIcon,
  xIcon,
  xCircleIcon,
  plusIcon,
  minusIcon,
  sortAscSmallIcon,
  sortDescSmallIcon,
  filterIcon,
  filterClearIcon,
  Button,
  ActionSheetHeader,
  ActionSheetFooter,
  ActionSheetContent,
  ActionSheet,
  FloatingLabel,
  NumericTextBox,
  TextBox,
  DropDownList
};
//# sourceMappingURL=/build/_shared/chunk-EZN6HZAL.js.map
