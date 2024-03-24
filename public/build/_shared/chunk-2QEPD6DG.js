import {
  ActionSheet,
  ActionSheetContent,
  ActionSheetFooter,
  ActionSheetHeader,
  Button,
  DropDownList,
  FloatingLabel,
  IconWrap,
  Keys,
  NumericTextBox,
  TextBox,
  calendarIcon,
  cancelIcon,
  caretAltDownIcon,
  caretAltLeftIcon,
  caretAltRightIcon,
  caretAltToLeftIcon,
  caretAltToRightIcon,
  caretAltUpIcon,
  createPropsContext,
  dispatchEvent,
  filterClearIcon,
  filterIcon,
  getActiveElement,
  guid,
  kendoThemeMaps,
  minusIcon,
  moreVerticalIcon,
  plusIcon,
  sortAscSmallIcon,
  sortDescSmallIcon,
  useAsyncFocusBlur,
  useInternationalization,
  useLocalization,
  withPropsContext,
  xCircleIcon,
  xIcon
} from "/build/_shared/chunk-EZN6HZAL.js";
import {
  noop
} from "/build/_shared/chunk-TNTLQMTW.js";
import {
  WatermarkOverlay
} from "/build/_shared/chunk-OP7Q5FNF.js";
import {
  Popup,
  canUseDOM,
  classNames,
  provideIntlService,
  provideLocalizationService,
  registerForIntl,
  registerForLocalization,
  require_prop_types,
  shouldShowValidationUI,
  validatePackage
} from "/build/_shared/chunk-EZ7JG6XF.js";
import {
  require_react_dom
} from "/build/_shared/chunk-GIAAE3CH.js";
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

// node_modules/@progress/kendo-react-grid/dist/es/Grid.js
var React58 = __toESM(require_react());
var PropTypes12 = __toESM(require_prop_types());

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

// node_modules/@progress/kendo-react-common/dist/es/hocs/AsyncFocusBlur.js
var React = __toESM(require_react());
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
var AsyncFocusBlur = function(_a11) {
  var children = _a11.children, onFocus2 = _a11.onFocus, onBlur = _a11.onBlur, onSyncFocus = _a11.onSyncFocus, onSyncBlur = _a11.onSyncBlur;
  var args = useAsyncFocusBlur({ onFocus: onFocus2, onBlur, onSyncFocus, onSyncBlur });
  return React.createElement(React.Fragment, null, children.call(void 0, __assign({}, args)));
};

// node_modules/@progress/kendo-react-common/dist/es/hooks/useDocument.js
var React2 = __toESM(require_react());
var useDocument = function(ref) {
  var getElement = React2.useCallback(function() {
    return ref.current && ref.current.element ? ref.current.element : ref.current;
  }, [ref]);
  var getDocument3 = React2.useCallback(function() {
    var element = getElement();
    return element ? element.ownerDocument || document : document;
  }, [getElement]);
  return getDocument3;
};

// node_modules/@progress/kendo-react-common/dist/es/hooks/useDraggable.js
var React5 = __toESM(require_react());

// node_modules/@progress/kendo-draggable-common/dist/es/algorithms/intersect.js
var getRatio = function(element, target) {
  var elementRect = element.getBoundingClientRect();
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
var intersect = function(element, candidates) {
  var max = 0;
  var result = null;
  candidates.forEach(function(candidate) {
    if (candidate && element) {
      var ration = getRatio(element, candidate);
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
var getDocument2 = function(element) {
  return element ? element.ownerDocument || window.document : window.document;
};
var getWindow = function(element) {
  var document2 = getDocument2(element);
  return document2 ? document2.defaultView || window : window;
};
var scrollableRoot = function(element) {
  var support = { browser: detectBrowser() };
  var document2 = getDocument2(element);
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
  var _a11 = callbacks.onIsPressedChange, onIsPressedChange = _a11 === void 0 ? noop2 : _a11, _b3 = callbacks.onIsScrollingChange, onIsScrollingChange = _b3 === void 0 ? noop2 : _b3, _c5 = callbacks.onVelocityChange, onVelocityChange = _c5 === void 0 ? noop2 : _c5, _d = callbacks.onOffsetChange, onOffsetChange = _d === void 0 ? noop2 : _d, _e = callbacks.onPageOffsetChange, onPageOffsetChange = _e === void 0 ? noop2 : _e, _f = callbacks.onClientOffsetChange, onClientOffsetChange = _f === void 0 ? noop2 : _f, _g = callbacks.onScrollOffsetChange, onScrollOffsetChange = _g === void 0 ? noop2 : _g, _h = callbacks.onInitialScrollOffsetChange, onInitialScrollOffsetChange = _h === void 0 ? noop2 : _h;
  var drag = action.payload;
  var element = drag.element;
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
      var scrollableParent = overrideScrollableParent || getScrollableParent(element);
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
          if (element) {
            var document_1 = getDocument2(element);
            var scrollableParent_2 = overrideScrollableParent || getScrollableParent(document_1.elementFromPoint(event.clientX, event.clientY));
            var newVelocity = autoScrollVelocity(event.clientX, event.clientY, scrollableViewPort(scrollableParent_2, getWindow(element)));
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
        var dropElement_1 = intersect(hint || element, state.drops.map(function(drop2) {
          return drop2 && drop2.element;
        }).filter(function(d) {
          return d !== (hint || element);
        }));
        var drop = state.drops.find(function(drop2) {
          return drop2.element === dropElement_1;
        });
        if (drop && dropElement_1 && isPointerInsideContainer(event.clientX, event.clientY, overrideScrollableParent || getScrollableParent(dropElement_1)) && dropElement_1 !== element) {
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
var React3 = __toESM(require_react());
var useInheritedState = function(context, defaultValue) {
  var _a11 = React3.useContext(context), contextValue = _a11[0], contextSetter = _a11[1];
  var _b3 = React3.useState(defaultValue), localValue = _b3[0], localSetter = _b3[1];
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
var React4 = __toESM(require_react());
var DragContext = React4.createContext([
  void 0,
  noop
]);
var DropContext = React4.createContext([
  void 0,
  noop
]);
var DragsContext = React4.createContext([[], noop, noop]);
var DropsContext = React4.createContext([[], noop, noop]);

// node_modules/@progress/kendo-react-common/dist/es/hooks/useDraggable.js
var IGNORE_MOUSE_TIMEOUT = 2e3;
function useDraggable(ref, callbacks, options) {
  if (options === void 0) {
    options = {};
  }
  var _a11 = callbacks.onPress, onPress = _a11 === void 0 ? noop : _a11, _b3 = callbacks.onRelease, onRelease = _b3 === void 0 ? noop : _b3, _c5 = callbacks.onDragStart, onDragStart = _c5 === void 0 ? noop : _c5, _d = callbacks.onDrag, onDrag = _d === void 0 ? noop : _d, _e = callbacks.onDragEnd, onDragEnd = _e === void 0 ? noop : _e;
  var _f = options.hint, hint = _f === void 0 ? null : _f, _g = options.mouseOnly, mouseOnly = _g === void 0 ? false : _g, _h = options.autoScroll, autoScroll2 = _h === void 0 ? true : _h, _j = options.scrollContainer, scrollContainer = _j === void 0 ? null : _j;
  var _k = React5.useState(false), pressed = _k[0], setPressed = _k[1];
  var _l = React5.useState(false), scrolling = _l[0], setScrolling = _l[1];
  var drop = useInheritedState(DropContext)[0];
  var _m = useInheritedState(DragContext), drag = _m[0], setDrag = _m[1];
  var drops = React5.useContext(DropsContext)[0];
  var _o = React5.useContext(DragsContext), drags = _o[0], registerDrag = _o[1], deregisterDrag = _o[2];
  var velocity = React5.useRef({ x: 0, y: 0 });
  var scrollInterval = React5.useRef();
  var ignoreMouse = React5.useRef(false);
  var restoreMouseTimeout = React5.useRef();
  var scrollable = React5.useRef(null);
  var unmount = React5.useRef(false);
  var offset = React5.useRef({ x: 0, y: 0 });
  var pageOffset = React5.useRef({ x: 0, y: 0 });
  var clientOffset = React5.useRef({ x: 0, y: 0 });
  var initialClientOffset = React5.useRef({ x: 0, y: 0 });
  var scrollOffset = React5.useRef({ x: 0, y: 0 });
  var initialScrollOffset = React5.useRef({ x: 0, y: 0 });
  var supportPointerEvent = Boolean(typeof window !== "undefined" && window.PointerEvent);
  var pointers = !mouseOnly && supportPointerEvent;
  var getElement = React5.useCallback(function() {
    return ref.current && ref.current.element ? ref.current.element : ref.current;
  }, [ref]);
  var getHintElement = React5.useCallback(function() {
    return hint && hint.current && hint.current.element ? hint.current.element : hint ? hint.current : null;
  }, [hint]);
  var getScrollContainer = React5.useCallback(function() {
    return scrollContainer && scrollContainer.current && scrollContainer.current.element ? scrollContainer.current.element : scrollContainer ? scrollContainer.current : null;
  }, [scrollContainer]);
  var getAutoScrollContainer = React5.useCallback(function() {
    return typeof autoScroll2 === "object" && autoScroll2.boundaryElementRef && autoScroll2.boundaryElementRef.current && autoScroll2.boundaryElementRef.current.element ? autoScroll2.boundaryElementRef.current.element : typeof autoScroll2 === "object" && autoScroll2.boundaryElementRef && autoScroll2.boundaryElementRef.current ? autoScroll2.boundaryElementRef.current : null;
  }, [autoScroll2]);
  var target = React5.useRef(null);
  React5.useImperativeHandle(target, function() {
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
  var getDocument3 = React5.useCallback(function() {
    var element = getElement();
    return element ? element.ownerDocument || document : document;
  }, [getElement]);
  var getWindow2 = React5.useCallback(function() {
    var document2 = getDocument3();
    return document2 ? document2.defaultView || window : window;
  }, [getDocument3]);
  var getState = React5.useCallback(function() {
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
  var handlePressedChange = React5.useCallback(function(value) {
    setPressed(value);
  }, []);
  var handleScrollingChange = React5.useCallback(function(value) {
    setScrolling(value);
  }, []);
  var handleVelocityChange = React5.useCallback(function(value) {
    velocity.current = value;
  }, []);
  var handleOffsetChange = React5.useCallback(function(value) {
    offset.current = value;
  }, []);
  var handleClientOffsetChange = React5.useCallback(function(value) {
    clientOffset.current = value;
  }, []);
  var handlePageOffsetChange = React5.useCallback(function(value) {
    pageOffset.current = value;
  }, []);
  var handleInitialClientOffsetChange = React5.useCallback(function(value) {
    initialClientOffset.current = value;
  }, []);
  var handleScrollOffsetChange = React5.useCallback(function(value) {
    scrollOffset.current = value;
  }, []);
  var handleInitialScrollOffsetChange = React5.useCallback(function(value) {
    initialScrollOffset.current = value;
  }, []);
  var handlePress = React5.useCallback(function(event) {
    onPress(event);
  }, [onPress]);
  var handleRelease = React5.useCallback(function(event) {
    onRelease(event);
  }, [onRelease]);
  var handleDragStart = React5.useCallback(function(event) {
    setDrag(target, { target: ref.current, event });
    onDragStart(event);
  }, [setDrag, ref, onDragStart]);
  var handleDrag = React5.useCallback(function(event) {
    onDrag(event);
  }, [onDrag]);
  var handleDragEnd = React5.useCallback(function(event) {
    if (unmount.current) {
      return;
    }
    setDrag(null, { target: ref.current, event });
    onDragEnd(event);
  }, [onDragEnd, setDrag, ref]);
  var dispatchDragEvent = React5.useCallback(function(event) {
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
  var handlePointerDown = React5.useCallback(function(event) {
    dispatchDragEvent(event);
  }, [dispatchDragEvent]);
  var handlePointerMove = React5.useCallback(function(event) {
    dispatchDragEvent(event);
  }, [dispatchDragEvent]);
  var handlePointerCancel = React5.useCallback(function(event) {
    dispatchDragEvent(event);
  }, [dispatchDragEvent]);
  var handlePointerUp = React5.useCallback(function(event) {
    dispatchDragEvent(event);
  }, [dispatchDragEvent]);
  var handleMouseDown = React5.useCallback(function(event) {
    dispatchDragEvent(event);
  }, [dispatchDragEvent]);
  var handleMouseMove = React5.useCallback(function(event) {
    dispatchDragEvent(event);
  }, [dispatchDragEvent]);
  var handleMouseUp = React5.useCallback(function(event) {
    dispatchDragEvent(event);
  }, [dispatchDragEvent]);
  var handleContextMenu = React5.useCallback(function(event) {
    event.preventDefault();
    dispatchDragEvent(event);
  }, [dispatchDragEvent]);
  var handleTouchStart = React5.useCallback(function(event) {
    event.preventDefault();
    dispatchDragEvent(event);
  }, [dispatchDragEvent]);
  var handleTouchMove = React5.useCallback(function(event) {
    event.preventDefault();
    dispatchDragEvent(event);
  }, [dispatchDragEvent]);
  var handleTouchEnd = React5.useCallback(function(event) {
    if (event.touches.length === 0 && event.changedTouches.length === 1) {
      var currentWindow = getWindow2();
      ignoreMouse.current = true;
      restoreMouseTimeout.current = currentWindow.setTimeout(function() {
        ignoreMouse.current = false;
      }, IGNORE_MOUSE_TIMEOUT);
    }
    dispatchDragEvent(event);
  }, [dispatchDragEvent, getWindow2]);
  var handleScroll = React5.useCallback(function(event) {
    dispatchDragEvent(event);
  }, [dispatchDragEvent]);
  var prerequisites = React5.useCallback(function() {
    var element = getElement();
    if (element) {
      var initialTouchAction_1 = element.style.touchAction;
      element.style.touchAction = "none";
      return function() {
        element.style.touchAction = initialTouchAction_1;
      };
    }
  }, [getElement]);
  var register = React5.useCallback(function() {
    registerDrag(target);
    return function() {
      deregisterDrag(target);
    };
  }, [deregisterDrag, registerDrag]);
  var init = function() {
    var window2 = getWindow2();
    var element = getElement();
    var document2 = getDocument3();
    if (pointers) {
      if (element) {
        scrollable.current = getScrollableParent(element);
        if (scrollable.current) {
          scrollable.current.addEventListener("scroll", handleScroll, { passive: true });
        }
        element.addEventListener("pointerdown", handlePointerDown, { passive: true });
      }
      if (pressed) {
        document2.addEventListener("pointermove", handlePointerMove);
        document2.addEventListener("pointerup", handlePointerUp, true);
        document2.addEventListener("contextmenu", handleContextMenu);
        document2.addEventListener("pointercancel", handlePointerCancel, { passive: true });
      }
    } else {
      window2.addEventListener("touchmove", noop, { capture: false, passive: false });
      if (element) {
        element.addEventListener("mousedown", handleMouseDown, { passive: true });
        if (!mouseOnly) {
          element.addEventListener("touchstart", handleTouchStart, { passive: true });
          if (pressed) {
            element.addEventListener("touchmove", handleTouchMove, { passive: true });
            element.addEventListener("touchend", handleTouchEnd, { passive: true });
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
      if (element) {
        element.removeEventListener("pointerdown", handlePointerDown);
        element.removeEventListener("mousedown", handleMouseDown);
        element.removeEventListener("touchstart", handleTouchStart);
        element.removeEventListener("touchmove", handleTouchMove);
        element.removeEventListener("touchend", handleTouchEnd);
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
  React5.useEffect(function() {
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
  React5.useEffect(prerequisites, [prerequisites]);
  React5.useEffect(init, [
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
  React5.useEffect(function() {
    unmount.current = false;
    return function() {
      unmount.current = true;
    };
  }, []);
  React5.useLayoutEffect(register, [register]);
}

// node_modules/@progress/kendo-react-common/dist/es/Draggable.js
var React6 = __toESM(require_react());
var Draggable = React6.forwardRef(function(props, ref) {
  var childRef = React6.useRef(null);
  var target = React6.useRef(null);
  var getElement = React6.useCallback(function() {
    return childRef.current && childRef.current.element ? childRef.current.element : childRef.current;
  }, [childRef]);
  React6.useImperativeHandle(target, function() {
    return { element: getElement() || null };
  });
  React6.useImperativeHandle(ref, function() {
    return target.current;
  });
  React6.useImperativeHandle(props.childRef, function() {
    return childRef.current;
  });
  var handlePress = React6.useCallback(function(event) {
    if (!props.onPress) {
      return;
    }
    props.onPress({
      element: getElement(),
      target: target.current,
      event
    });
  }, [getElement, props.onPress]);
  var handleRelease = React6.useCallback(function(event) {
    if (!props.onRelease) {
      return;
    }
    props.onRelease({
      element: getElement(),
      target: target.current,
      event
    });
  }, [getElement, props.onRelease]);
  var handleDragStart = React6.useCallback(function(event) {
    if (!props.onDragStart) {
      return;
    }
    props.onDragStart({
      element: getElement(),
      target: target.current,
      event
    });
  }, [props, getElement]);
  var handleDrag = React6.useCallback(function(event) {
    if (!props.onDrag) {
      return;
    }
    props.onDrag({
      element: getElement(),
      target: target.current,
      event
    });
  }, [getElement, props.onDrag]);
  var handleDragEnd = React6.useCallback(function(event) {
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
  return props.children ? React6.cloneElement(React6.Children.only(props.children), { ref: childRef }) : null;
});
Draggable.displayName = "KendoReactDraggable";

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
  memoized.clear = function clear() {
    cache = null;
  };
  return memoized;
}

// node_modules/@progress/kendo-react-data-tools/dist/es/pager/Pager.js
var React10 = __toESM(require_react());
var PropTypes = __toESM(require_prop_types());

// node_modules/@progress/kendo-react-data-tools/dist/es/pager/PagerNumericButtons.js
var React7 = __toESM(require_react());

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

// node_modules/@progress/kendo-react-data-tools/dist/es/pager/PagerNumericButtons.js
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
var dots = "...";
var PagerNumericButtons = (
  /** @class */
  function(_super) {
    __extends(PagerNumericButtons2, _super);
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
      var _a11;
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
        return React7.createElement(Button, { className: classNames({ "k-selected": _this.props.currentPage === page }), key: page, fillMode: "flat", themeColor: "primary", size: _this.props.size, rounded: null, role: "button", "aria-label": localizationService.toLanguageString(pageNumberLabelMessage.messageKey, pageNumberLabelMessage.defaultMessage) + " " + page, "aria-current": _this.props.currentPage === page ? true : void 0, onClick: function(e) {
          return _this.handlePageChange(e, page);
        } }, page);
      });
      var options = buttons.map(function(page) {
        return React7.createElement("option", { key: page }, page);
      });
      return React7.createElement(
        React7.Fragment,
        null,
        React7.createElement(
          "select",
          { style: { width: "5em", margin: "0px 1em", display: this.props.type === "dropdown" ? "inline-flex" : "none" }, className: classNames("k-picker k-dropdown-list k-dropdown k-rounded-md", (_a11 = {}, _a11["k-picker-".concat(kendoThemeMaps.sizeMap[this.props.size] || this.props.size)] = this.props.size, _a11)), "aria-label": localizationService.toLanguageString(mobileSelectMessage.messageKey, mobileSelectMessage.defaultMessage), value: this.props.currentPage, onChange: function(e) {
            return _this.handleSelectPageChange(e);
          } },
          prevOptionDots,
          options,
          postOptionDots
        ),
        React7.createElement(
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
      return React7.createElement(Button, { fillMode: "flat", themeColor: "primary", size: this.props.size, rounded: null, role: "button", "aria-label": ariaLabel, onClick: function(e) {
        return _this.handlePageChange(e, page);
      } }, dots);
    };
    PagerNumericButtons2.prototype.renderOptionDots = function(page) {
      return React7.createElement("option", { value: page }, dots);
    };
    return PagerNumericButtons2;
  }(React7.Component)
);

// node_modules/@progress/kendo-react-data-tools/dist/es/pager/PagerInput.js
var React8 = __toESM(require_react());
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
var PagerInput = (
  /** @class */
  function(_super) {
    __extends2(PagerInput2, _super);
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
      return React8.createElement(
        React8.Fragment,
        null,
        React8.createElement(
          "span",
          { className: "k-pager-input" },
          React8.createElement("span", null, localizationService.toLanguageString(pageMessage.messageKey, pageMessage.defaultMessage)),
          React8.createElement(NumericTextBox, { value: this.props.currentPage !== void 0 ? this.props.currentPage : this.state.page, onChange: this.handleOnChange, min: 1, spinners: false }),
          React8.createElement("span", null, "".concat(localizationService.toLanguageString(ofMessage.messageKey, ofMessage.defaultMessage), " ").concat(intlService.format(localizationService.toLanguageString(totalPagesMessage.messageKey, totalPagesMessage.defaultMessage), [
            this.props.totalPages
          ])))
        )
      );
    };
    return PagerInput2;
  }(React8.Component)
);
registerForLocalization(PagerInput);

// node_modules/@progress/kendo-react-data-tools/dist/es/pager/PagerPageSizes.js
var React9 = __toESM(require_react());
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
var PagerPageSizes = (
  /** @class */
  function(_super) {
    __extends3(PagerPageSizes2, _super);
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
      var _a11 = this.props, value = _a11.value, pageSizes = _a11.pageSizes, pageSize = _a11.pageSize, messagesMap = _a11.messagesMap;
      var sizes = pageSizes.slice();
      if (value === void 0 && sizes.filter(function(s) {
        return s === pageSize;
      }).length === 0) {
        sizes.unshift(pageSize);
      }
      var itemPerPageMessage = messagesMap ? messagesMap(pagerItemPerPage) : { messageKey: pagerItemPerPage, defaultMessage: messages[pagerItemPerPage] };
      var pageSelectionMessage = messagesMap ? messagesMap(pagerPageSizeAriaLabel) : { messageKey: pagerPageSizeAriaLabel, defaultMessage: messages[pagerPageSizeAriaLabel] };
      return React9.createElement(
        "span",
        { className: "k-pager-sizes" },
        React9.createElement(DropDownList, { value: value !== void 0 ? value : pageSize, data: sizes, onChange: this.pageSizeChange, ariaLabel: provideLocalizationService(this).toLanguageString(pageSelectionMessage.messageKey, pageSelectionMessage.defaultMessage), size: this.props.size }),
        React9.createElement("span", null, provideLocalizationService(this).toLanguageString(itemPerPageMessage.messageKey, itemPerPageMessage.defaultMessage))
      );
    };
    return PagerPageSizes2;
  }(React9.Component)
);
registerForLocalization(PagerPageSizes);

// node_modules/@progress/kendo-react-data-tools/dist/es/package-metadata.js
var packageMetadata = {
  name: "@progress/kendo-react-data-tools",
  productName: "KendoReact",
  productCodes: ["KENDOUIREACT", "KENDOUICOMPLETE"],
  publishDate: 1700064209,
  version: "",
  licensingDocsUrl: "https://www.telerik.com/kendo-react-ui/my-license/?utm_medium=product&utm_source=kendoreact&utm_campaign=kendo-ui-react-purchase-license-keys-warning"
};

// node_modules/@progress/kendo-react-data-tools/dist/es/pager/Pager.js
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
var RESPONSIVE_BREAKPOINT_MEDIUM = 600;
var RESPONSIVE_BREAKPOINT_LARGE = 768;
var Pager = (
  /** @class */
  function(_super) {
    __extends4(Pager2, _super);
    function Pager2(props) {
      var _this = _super.call(this, props) || this;
      _this._element = null;
      _this.onPageChange = function(eventData, targetEvent) {
        var event = __assign2({ target: _this, syntheticEvent: targetEvent.syntheticEvent, nativeEvent: targetEvent.nativeEvent, targetEvent }, eventData);
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
        var element = _this.element;
        if (!element || !_this.props.responsive) {
          return;
        }
        var width = element.offsetWidth;
        if (width < RESPONSIVE_BREAKPOINT_MEDIUM) {
          _this.setState({ showPagerSizes: false });
        } else if (width >= RESPONSIVE_BREAKPOINT_MEDIUM && width < RESPONSIVE_BREAKPOINT_LARGE) {
          _this.setState({ showPagerInfo: false, showPagerSizes: true });
        } else {
          _this.setState({ showPagerInfo: true, showPagerSizes: true });
        }
      };
      validatePackage(packageMetadata);
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
      var _a11;
      var _this = this;
      var _b3 = this.state, showPagerSizes = _b3.showPagerSizes, showPagerInfo = _b3.showPagerInfo;
      var _c5 = this.props, skip = _c5.skip, take = _c5.take, total = _c5.total, pageSizes = _c5.pageSizes, size = _c5.size, responsive = _c5.responsive, messagesMap = _c5.messagesMap, pageSizeValue = _c5.pageSizeValue;
      var localizationService = provideLocalizationService(this);
      var intlService = provideIntlService(this);
      var currentPage = Math.floor(skip / take) + 1;
      var changer = this.props.type === "numeric" ? React10.createElement(PagerNumericButtons, { type: responsive && !showPagerSizes ? "dropdown" : "numbers", buttonCount: this.props.buttonCount || 0, totalPages: this.totalPages, currentPage, pageChange: this.changePage, messagesMap: this.props.messagesMap, size: this.props.size }) : React10.createElement(PagerInput, { buttonCount: this.props.buttonCount || 0, totalPages: this.totalPages, currentPage, pageChange: this.changePage, messagesMap, size: this.props.size });
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
      var pagerPageSizes = pageSizes && React10.createElement(PagerPageSizes, { pageChange: this.onPageChange, pageSize: take, pageSizes, value: pageSizeValue, messagesMap, size: this.props.size });
      var info = this.props.info && React10.createElement("span", { className: "k-pager-info" }, intlService.format(localizationService.toLanguageString(infoMessage.messageKey, infoMessage.defaultMessage), [
        Math.min(skip + 1, total),
        Math.min(skip + take, total),
        total
      ]));
      return React10.createElement(
        "div",
        { className: classNames("k-pager", (_a11 = {}, _a11["k-pager-".concat(kendoThemeMaps.sizeMap[size] || size)] = size, _a11), this.props.className), style: this.props.style, role: "application", "aria-roledescription": "pager", dir: this.props.dir, "aria-keyshortcuts": localizationService.toLanguageString(ariaKeyshortcutsMessage.messageKey, ariaKeyshortcutsMessage.defaultMessage), "aria-label": localizationService.toLanguageString(ariaLabelMessage.messageKey, ariaLabelMessage.defaultMessage), ref: function(element) {
          return _this._element = element;
        } },
        React10.createElement(
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
      return React10.createElement(Button, { fillMode: "flat", themeColor: "base", size: this.props.size, rounded: null, className, icon, svgIcon, title, role: "button", "aria-disabled": isDisabled, onClick: function(e) {
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
      className: PropTypes.string,
      style: PropTypes.object,
      total: PropTypes.number.isRequired,
      skip: PropTypes.number.isRequired,
      take: PropTypes.number.isRequired,
      buttonCount: PropTypes.number,
      info: PropTypes.bool,
      type: PropTypes.oneOf(["numeric", "input"]),
      pageSizes: PropTypes.arrayOf(PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
      ])),
      previousNext: PropTypes.bool,
      onPageChange: PropTypes.func,
      messagesMap: PropTypes.func,
      size: PropTypes.oneOf([null, "small", "medium", "large"]),
      dir: PropTypes.string
    };
    Pager2.defaultProps = {
      buttonCount: 10,
      info: true,
      type: "numeric",
      size: "medium"
    };
    return Pager2;
  }(React10.Component)
);
registerForIntl(Pager);
registerForLocalization(Pager);

// node_modules/@progress/kendo-react-dateinputs/dist/es/calendar/components/Calendar.js
var React21 = __toESM(require_react());
var PropTypes8 = __toESM(require_prop_types());

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
var packageMetadata2 = {
  name: "@progress/kendo-react-dateinputs",
  productName: "KendoReact",
  productCodes: ["KENDOUIREACT", "KENDOUICOMPLETE"],
  publishDate: 1700063843,
  version: "",
  licensingDocsUrl: "https://www.telerik.com/kendo-react-ui/my-license/?utm_medium=product&utm_source=kendoreact&utm_campaign=kendo-ui-react-purchase-license-keys-warning"
};

// node_modules/@progress/kendo-react-dateinputs/dist/es/calendar/components/ViewList.js
var React18 = __toESM(require_react());
var PropTypes6 = __toESM(require_prop_types());

// node_modules/@progress/kendo-react-dateinputs/dist/es/virtualization/Virtualization.js
var React11 = __toESM(require_react());
var PropTypes2 = __toESM(require_prop_types());

// node_modules/@progress/kendo-react-dateinputs/dist/es/virtualization/services/RowHeightService.js
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
var update = function(arr, idx, value) {
  return __spreadArray(__spreadArray([], arr.slice(0, idx + 1), true), arr.slice(idx + 1).map(function(x) {
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
    ScrollerService2.prototype.onScroll = function(_a11) {
      var scrollLeft = _a11.scrollLeft, scrollTop = _a11.scrollTop, offsetHeight = _a11.offsetHeight, offsetWidth = _a11.offsetWidth;
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
var _a2;
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
var scrollModifiers = (_a2 = {}, _a2[ScrollDirection.Forward] = function(step) {
  return function(value) {
    return value + step;
  };
}, _a2[ScrollDirection.Backward] = function(step) {
  return function(value) {
    return value - step;
  };
}, _a2);
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
    __extends5(Virtualization2, _super);
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
        var _a11 = _this.scrollRange(indexOffset, direction), start2 = _a11.start, end2 = _a11.end;
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
      _this.restrictScroll = Number.parseFloat(React11.version) > 17;
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
      return React11.createElement(
        "div",
        { ref: function(el) {
          _this.scrollContainer = el;
        }, onScroll: this.handleScroll, className: rootClassNames, tabIndex: this.props.tabIndex, role: this.props.role },
        this.props.children,
        React11.createElement("div", { style: placeholderStyle, className: scrollableClassNames })
      );
    };
    Virtualization2.propTypes = {
      bottomOffset: PropTypes2.number.isRequired,
      className: PropTypes2.string,
      direction: PropTypes2.oneOf(["horizontal", "vertical"]),
      forceScroll: PropTypes2.bool,
      itemHeight: PropTypes2.number,
      itemWidth: PropTypes2.number,
      maxScrollDifference: PropTypes2.number,
      onScroll: PropTypes2.func,
      onScrollAction: PropTypes2.func,
      scrollDuration: PropTypes2.number,
      scrollOffsetSize: PropTypes2.number,
      skip: PropTypes2.number.isRequired,
      tabIndex: PropTypes2.number,
      take: PropTypes2.number.isRequired,
      topOffset: PropTypes2.number.isRequired,
      total: PropTypes2.number.isRequired,
      role: PropTypes2.string
    };
    Virtualization2.defaultProps = {
      direction: "vertical",
      forceScroll: false,
      scrollOffsetSize: 0,
      maxScrollDifference: 100,
      scrollDuration: 100
    };
    return Virtualization2;
  }(React11.Component)
);

// node_modules/@progress/kendo-react-dateinputs/dist/es/calendar/components/View.js
var React14 = __toESM(require_react());
var PropTypes3 = __toESM(require_prop_types());

// node_modules/@progress/kendo-react-dateinputs/dist/es/calendar/components/CalendarCell.js
var React12 = __toESM(require_react());
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
    __extends6(CalendarCell2, _super);
    function CalendarCell2() {
      var _this = _super !== null && _super.apply(this, arguments) || this;
      _this.handleClick = function(event) {
        var _a11 = _this.props, onClick = _a11.onClick, value = _a11.value;
        if (onClick) {
          onClick.call(void 0, value, event);
        }
      };
      _this.handleMouseEnter = function() {
        var _a11 = _this.props, onMouseEnter = _a11.onMouseEnter, value = _a11.value;
        if (onMouseEnter) {
          onMouseEnter.call(void 0, value);
        }
      };
      _this.handleMouseLeave = function() {
        var _a11 = _this.props, onMouseLeave = _a11.onMouseLeave, value = _a11.value;
        if (onMouseLeave) {
          onMouseLeave.call(void 0, value);
        }
      };
      return _this;
    }
    CalendarCell2.prototype.shouldComponentUpdate = function(nextProps) {
      var _a11 = this.props, value = _a11.value, props = __rest(_a11, ["value"]);
      var newValue = nextProps.value, newProps = __rest(nextProps, ["value"]);
      var valueEqual = !(value && newValue) || value.getTime() === newValue.getTime();
      return !(valueEqual && compareProps(props, newProps));
    };
    CalendarCell2.prototype.render = function() {
      var _a11 = this.props, className = _a11.className, formattedValue = _a11.formattedValue, isWeekend = _a11.isWeekend, isFocused = _a11.isFocused, isInRange3 = _a11.isInRange, isSelected = _a11.isSelected, isRangeStart = _a11.isRangeStart, isRangeMid = _a11.isRangeMid, isRangeEnd = _a11.isRangeEnd, isRangeSplitStart = _a11.isRangeSplitStart, isRangeSplitEnd = _a11.isRangeSplitEnd, isToday = _a11.isToday, isDisabled = _a11.isDisabled, view = _a11.view, value = _a11.value, other = __rest(_a11, ["className", "formattedValue", "isWeekend", "isFocused", "isInRange", "isSelected", "isRangeStart", "isRangeMid", "isRangeEnd", "isRangeSplitStart", "isRangeSplitEnd", "isToday", "isDisabled", "view", "value"]);
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
      return React12.createElement(
        "td",
        __assign3({}, other, { className: rootClassName, onClick: this.handleClick, onMouseEnter: this.handleMouseEnter, onMouseLeave: this.handleMouseLeave }),
        React12.createElement("span", { className: "k-link" }, this.props.children)
      );
    };
    return CalendarCell2;
  }(React12.Component)
);

// node_modules/@progress/kendo-react-dateinputs/dist/es/calendar/components/CalendarWeekCell.js
var React13 = __toESM(require_react());
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
var CalendarWeekCell = (
  /** @class */
  function(_super) {
    __extends7(CalendarWeekCell2, _super);
    function CalendarWeekCell2() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    CalendarWeekCell2.prototype.render = function() {
      var _a11 = this.props, className = _a11.className, firstDate = _a11.firstDate, other = __rest2(_a11, ["className", "firstDate"]);
      return React13.createElement("td", __assign4({ className: classNames("k-calendar-td", className) }, other), this.props.children);
    };
    return CalendarWeekCell2;
  }(React13.Component)
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
  var _a11 = selectionRange || EMPTY_SELECTIONRANGE, start2 = _a11.start, end2 = _a11.end;
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
var _a3;
var EMPTY_DATA = [[]];
var CELLS_LENGTH = 4;
var ROWS_LENGTH = 3;
var ACTIONS = (_a3 = {}, _a3[Action.Left] = function(date2) {
  return addDecades(date2, -1);
}, _a3[Action.Up] = function(date2) {
  return addDecades(date2, -5);
}, _a3[Action.Right] = function(date2) {
  return addDecades(date2, 1);
}, _a3[Action.Down] = function(date2) {
  return addDecades(date2, 5);
}, _a3[Action.PrevView] = function(date2) {
  return addCenturies(date2, -1);
}, _a3[Action.NextView] = function(date2) {
  return addCenturies(date2, 1);
}, _a3[Action.FirstInView] = function(date2) {
  return firstDecadeOfCentury(date2);
}, _a3[Action.LastInView] = function(date2) {
  return lastDecadeOfCentury(date2);
}, _a3);
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
      var cellUID = options.cellUID, focusedDate = options.focusedDate, isActiveView = options.isActiveView, max = options.max, min = options.min, selectedDate = options.selectedDate, _a11 = options.selectionRange, selectionRange = _a11 === void 0 ? EMPTY_SELECTIONRANGE : _a11, viewDate = options.viewDate;
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
var _a4;
var EMPTY_DATA2 = [[]];
var CELLS_LENGTH2 = 4;
var ROWS_LENGTH2 = 3;
var ACTIONS2 = (_a4 = {}, _a4[Action.Left] = function(date2) {
  return addYears(date2, -1);
}, _a4[Action.Up] = function(date2) {
  return addYears(date2, -5);
}, _a4[Action.Right] = function(date2) {
  return addYears(date2, 1);
}, _a4[Action.Down] = function(date2) {
  return addYears(date2, 5);
}, _a4[Action.PrevView] = function(date2) {
  return addDecades(date2, -1);
}, _a4[Action.NextView] = function(date2) {
  return addDecades(date2, 1);
}, _a4[Action.FirstInView] = function(date2) {
  return firstYearOfDecade(date2);
}, _a4[Action.LastInView] = function(date2) {
  return lastYearOfDecade(date2);
}, _a4);
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
      var cellUID = options.cellUID, focusedDate = options.focusedDate, isActiveView = options.isActiveView, max = options.max, min = options.min, selectedDate = options.selectedDate, _a11 = options.selectionRange, selectionRange = _a11 === void 0 ? EMPTY_SELECTIONRANGE : _a11, viewDate = options.viewDate;
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
var _a5;
var EMPTY_DATA3 = [[]];
var CELLS_LENGTH3 = 7;
var ROWS_LENGTH3 = 6;
var SATURDAY = 6;
var SUNDAY = 0;
var ACTIONS3 = (_a5 = {}, _a5[Action.Left] = function(date2) {
  return addDays(date2, -1);
}, _a5[Action.Up] = function(date2) {
  return addWeeks(date2, -1);
}, _a5[Action.Right] = function(date2) {
  return addDays(date2, 1);
}, _a5[Action.Down] = function(date2) {
  return addWeeks(date2, 1);
}, _a5[Action.PrevView] = function(date2) {
  return addMonths(date2, -1);
}, _a5[Action.NextView] = function(date2) {
  return addMonths(date2, 1);
}, _a5[Action.FirstInView] = function(date2) {
  return firstDayOfMonth(date2);
}, _a5[Action.LastInView] = function(date2) {
  return lastDayOfMonth(date2);
}, _a5);
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
      var cellUID = options.cellUID, focusedDate = options.focusedDate, isActiveView = options.isActiveView, max = options.max, min = options.min, selectedDate = options.selectedDate, _a11 = options.selectionRange, selectionRange = _a11 === void 0 ? EMPTY_SELECTIONRANGE : _a11, viewDate = options.viewDate;
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
var _a6;
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
var ACTIONS4 = (_a6 = {}, _a6[Action.Left] = function(date2) {
  return addMonths(date2, -1);
}, _a6[Action.Up] = function(date2) {
  return addMonths(date2, upStep(date2.getMonth()));
}, _a6[Action.Right] = function(date2) {
  return addMonths(date2, 1);
}, _a6[Action.Down] = function(date2) {
  return addMonths(date2, downStep(date2.getMonth()));
}, _a6[Action.PrevView] = function(date2) {
  return addYears(date2, -1);
}, _a6[Action.NextView] = function(date2) {
  return addYears(date2, 1);
}, _a6[Action.FirstInView] = function(date2) {
  return firstMonthOfYear(date2);
}, _a6[Action.LastInView] = function(date2) {
  return lastMonthOfYear(date2);
}, _a6);
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
      var cellUID = options.cellUID, focusedDate = options.focusedDate, isActiveView = options.isActiveView, max = options.max, min = options.min, selectedDate = options.selectedDate, _a11 = options.selectionRange, selectionRange = _a11 === void 0 ? EMPTY_SELECTIONRANGE : _a11, viewDate = options.viewDate;
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
var _a7;
var services = (_a7 = {}, _a7[CalendarViewEnum.month] = MonthViewService, _a7[CalendarViewEnum.year] = YearViewService, _a7[CalendarViewEnum.decade] = DecadeViewService, _a7[CalendarViewEnum.century] = CenturyViewService, _a7);
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
      var viewFactory = function(_a11, className, renderWeekHeader) {
        var cells = _a11.cells, rows = _a11.rows;
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
      var getScrollable = function(element) {
        return element.querySelector(".k-scrollable");
      };
      var horizontal = function(element) {
        var scrollableElement = getScrollable(element);
        scrollableElement.className = "".concat(scrollableElement.className, " k-scrollable-horizontal");
        return element;
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
      var height = function(element) {
        return parseFloat(window.getComputedStyle(element).height) || element.offsetHeight;
      };
      var width = function(element) {
        var styles = window.getComputedStyle(element);
        var computed = parseFloat(styles.width) + parseFloat(styles.paddingLeft) + parseFloat(styles.paddingRight);
        return computed || element.offsetWidth;
      };
      var getBody = function(element) {
        return element.querySelector("tbody");
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
var emptyCell = function(idx) {
  return React14.createElement("td", { key: idx, className: "k-calendar-td" }, "\xA0");
};
var View = (
  /** @class */
  function(_super) {
    __extends8(View2, _super);
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
        return _this.props.weekCell ? React14.createElement(_this.props.weekCell, __assign5({}, cellProps, { key: uniqueID }), weekCellValue) : React14.createElement(CalendarWeekCell, __assign5({}, cellProps, { key: uniqueID }), weekCellValue);
      };
      _this.buildRow = function(row) {
        return row.map(function(cell, idx) {
          if (!cell) {
            return emptyCell(idx);
          }
          var aria = { "aria-selected": cell.isSelected };
          var uniqueID = "kendo-react-calendar-cell-".concat(cell.value.getTime());
          var cellProps = __assign5(__assign5(__assign5({}, aria), cell), { isDisabled: !cell.isInRange, view: _this.props.activeView, onClick: _this.handleClick, onMouseEnter: _this.handleMouseEnter, onMouseLeave: _this.handleMouseLeave });
          return _this.props.cell ? React14.createElement(_this.props.cell, __assign5({}, cellProps, { key: uniqueID }), cell.formattedValue) : React14.createElement(CalendarCell, __assign5({}, cellProps, { key: uniqueID }), cell.formattedValue);
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
      return React14.createElement(
        React14.Fragment,
        null,
        this.isMonthView && this.isHorizontal && React14.createElement(
          "thead",
          { role: "rowgroup", className: "k-calendar-thead" },
          React14.createElement("tr", { role: "row", className: "k-calendar-tr" }, weekNames.map(function(name, idx) {
            return React14.createElement("th", { key: idx, className: "k-calendar-th" }, name);
          }))
        ),
        React14.createElement(
          "tbody",
          { role: "rowgroup", className: "k-calendar-tbody" },
          !this.isHorizontal && React14.createElement(
            "tr",
            { role: "presentation", className: "k-calendar-tr" },
            React14.createElement("th", { scope: "col", colSpan, className: "k-calendar-caption" }, title)
          ),
          data.map(function(row, idx) {
            return React14.createElement(
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
      activeRangeEnd: PropTypes3.oneOf(["start", "end", null]),
      activeView: PropTypes3.number.isRequired,
      cellUID: PropTypes3.string.isRequired,
      direction: PropTypes3.oneOf(["horizontal", "vertical"]),
      focusedDate: PropTypes3.instanceOf(Date).isRequired,
      max: PropTypes3.instanceOf(Date).isRequired,
      min: PropTypes3.instanceOf(Date).isRequired,
      onChange: PropTypes3.func,
      selectedDate: PropTypes3.oneOfType([PropTypes3.instanceOf(Date), PropTypes3.arrayOf(PropTypes3.instanceOf(Date))]),
      showWeekNumbers: PropTypes3.bool,
      viewDate: PropTypes3.instanceOf(Date).isRequired
    };
    View2.defaultProps = {
      direction: "vertical",
      selectedDate: getToday(),
      showWeekNumbers: false
    };
    return View2;
  }(React14.Component)
);
registerForIntl(View);

// node_modules/@progress/kendo-react-dateinputs/dist/es/calendar/components/Header.js
var React16 = __toESM(require_react());
var PropTypes4 = __toESM(require_prop_types());

// node_modules/@progress/kendo-react-dateinputs/dist/es/calendar/components/CalendarHeaderTitle.js
var React15 = __toESM(require_react());
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
var CalendarHeaderTitle = (
  /** @class */
  function(_super) {
    __extends9(CalendarHeaderTitle2, _super);
    function CalendarHeaderTitle2() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    CalendarHeaderTitle2.prototype.render = function() {
      var _a11 = this.props, view = _a11.view, props = __rest3(_a11, ["view"]);
      return React15.createElement(Button, __assign6({ type: "button", fillMode: "flat" }, props), this.props.children);
    };
    return CalendarHeaderTitle2;
  }(React15.PureComponent)
);

// node_modules/@progress/kendo-react-dateinputs/dist/es/calendar/components/Header.js
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
var Header = (
  /** @class */
  function(_super) {
    __extends10(Header3, _super);
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
      var headerTitle = this.props.headerTitle ? React16.createElement(this.props.headerTitle, __assign7({}, headerTitleProps), title) : React16.createElement(CalendarHeaderTitle, __assign7({}, headerTitleProps), title);
      return React16.createElement(
        "div",
        { className: classNames("k-calendar-header", {
          "k-vstack": this.props.verticalView,
          "k-hstack": !this.props.verticalView
        }) },
        headerTitle,
        React16.createElement("span", { className: "k-spacer" }),
        React16.createElement("span", { className: "k-calendar-nav k-hstack" }, this.props.commands)
      );
    };
    Header3.propTypes = {
      activeView: PropTypes4.number.isRequired,
      currentDate: PropTypes4.instanceOf(Date).isRequired,
      max: PropTypes4.instanceOf(Date).isRequired,
      min: PropTypes4.instanceOf(Date).isRequired,
      rangeLength: PropTypes4.number
    };
    Header3.defaultProps = {
      rangeLength: 1,
      min: MIN_DATE,
      max: MAX_DATE
    };
    return Header3;
  }(React16.Component)
);
registerForLocalization(Header);

// node_modules/@progress/kendo-react-dateinputs/dist/es/calendar/components/TodayCommand.js
var React17 = __toESM(require_react());
var PropTypes5 = __toESM(require_prop_types());

// node_modules/@progress/kendo-react-dateinputs/dist/es/messages/index.js
var _a8;
var prevView = "multiviewcalendar.prevView";
var nextView = "multiviewcalendar.nextView";
var increaseValue = "dateinput.increment";
var decreaseValue = "dateinput.decrement";
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
var messages2 = (_a8 = {}, _a8[today] = "TODAY", _a8[now] = "NOW", _a8[timePickerSet] = "Set", _a8[timePickerCancel] = "Cancel", _a8[date] = "Date", _a8[time] = "Time", _a8[dateTimePickerCancel] = "Cancel", _a8[dateTimePickerSet] = "Set", _a8[dateRangePickerCancel] = "Cancel", _a8[dateRangePickerSet] = "Set", _a8[start] = "Start", _a8[end] = "End", _a8[separator] = " ", _a8[selectNow] = "Select Now", _a8[toggleTimeSelector] = "Toggle TimeSelector", _a8[toggleClock] = "Toggle Clock", _a8[increaseValue] = "Increase value", _a8[decreaseValue] = "Decrease value", _a8[toggleCalendar] = "Toggle calendar", _a8[prevView] = "Navigate to previous view", _a8[nextView] = "Navigate to next view", _a8[swapStartEnd] = "Swap start and end values", _a8[toggleDateTimeSelector] = "Toggle date-time selector", _a8);

// node_modules/@progress/kendo-react-dateinputs/dist/es/calendar/components/TodayCommand.js
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
var TodayCommand = (
  /** @class */
  function(_super) {
    __extends11(TodayCommand2, _super);
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
      var todayMessage = this.localization.toLanguageString(today, messages2[today]);
      var todayClassNames = classNames("k-calendar-nav-today", {
        "k-disabled": this.props.disabled
      });
      return React17.createElement(Button, { className: todayClassNames, onClick: this.handleClick, tabIndex: this.props.tabIndex, fillMode: "flat" }, todayMessage);
    };
    TodayCommand2.propTypes = {
      max: PropTypes5.instanceOf(Date).isRequired,
      min: PropTypes5.instanceOf(Date).isRequired,
      onClick: PropTypes5.func,
      disabled: PropTypes5.bool
    };
    TodayCommand2.defaultProps = {
      min: MIN_DATE,
      max: MAX_DATE
    };
    return TodayCommand2;
  }(React17.Component)
);
registerForLocalization(TodayCommand);

// node_modules/@progress/kendo-react-dateinputs/dist/es/calendar/components/ViewList.js
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
var VIEWS_COUNT = 5;
var ViewList = (
  /** @class */
  function(_super) {
    __extends12(ViewList2, _super);
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
        return React18.createElement(
          "table",
          { key: "calendar-view-list-weekdays", className: "k-calendar-table k-calendar-weekdays", role: "grid", tabIndex: _this.props.tabIndex },
          React18.createElement("colgroup", null, cols.map(function(_, idx) {
            return React18.createElement("col", { key: idx });
          })),
          React18.createElement(
            "thead",
            { className: "k-calendar-thead" },
            React18.createElement("tr", { className: "k-calendar-tr" }, weekNames.map(function(name, idx) {
              return React18.createElement("th", { key: idx, className: "k-calendar-th" }, name);
            }))
          )
        );
      };
      _this.buildDates = function(cols, dates) {
        var cellUID = _this.props.cellUID;
        return React18.createElement(
          "table",
          { className: "k-calendar-table", ref: function(table) {
            return _this.table = table;
          }, role: "grid", tabIndex: _this.props.tabIndex, "aria-activedescendant": cellUID + _this.props.focusedDate.getTime() },
          React18.createElement("colgroup", null, cols.map(function(_, idx) {
            return React18.createElement("col", { key: idx });
          })),
          dates.map(function(date2) {
            return React18.createElement(View, { ref: function(el) {
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
      _this.handleScrollAction = function(_a11) {
        var index = _a11.index, scrollAction = _a11.scrollAction, pageAction = _a11.pageAction;
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
      var viewListBody = React18.createElement(
        React18.Fragment,
        null,
        React18.createElement(Header, { key: "calendar-view-list-header", currentDate: activeDate, min: this.props.min, max: this.props.max, activeView: this.props.activeView, bus: this.props.bus, service: this.props.service, headerTitle: this.props.headerTitle, commands: React18.createElement(
          React18.Fragment,
          null,
          React18.createElement(TodayCommand, { min: this.props.min, max: this.props.max, onClick: this.handleTodayClick, disabled: !this.todayIsInRange, tabIndex: this.props.tabIndex })
        ) }),
        this.props.activeView === CalendarViewEnum.month && this.buildMonthView(cols, this.weekNames),
        React18.createElement(Virtualization, { key: "calendar-view-list-content", skip, take: this.take, total, itemHeight: this.viewHeight, topOffset: this.viewOffset, bottomOffset: this.bottomOffset, scrollOffsetSize: this.viewOffset, maxScrollDifference: this.viewHeight, onScroll: this.props.onScroll, onScrollAction: this.handleScrollAction, onMount: this.handleVirtualizationMount, children: dates, tabIndex: this.props.tabIndex })
      );
      return React18.createElement("div", { ref: function(el) {
        _this._element = el;
      }, className: rootClassNames }, this.props.dom.didCalculate ? viewListBody : null);
    };
    ViewList2.propTypes = {
      activeView: PropTypes6.number.isRequired,
      bottomOffset: PropTypes6.number,
      cellUID: PropTypes6.string.isRequired,
      focusedDate: PropTypes6.instanceOf(Date).isRequired,
      max: PropTypes6.instanceOf(Date).isRequired,
      min: PropTypes6.instanceOf(Date).isRequired,
      onChange: PropTypes6.func,
      showWeekNumbers: PropTypes6.bool,
      smoothScroll: PropTypes6.bool,
      take: PropTypes6.number,
      value: PropTypes6.instanceOf(Date),
      viewHeight: PropTypes6.number,
      viewOffset: PropTypes6.number,
      tabIndex: PropTypes6.number
    };
    ViewList2.defaultProps = {
      take: VIEWS_COUNT,
      showWeekNumbers: false,
      smoothScroll: true
    };
    return ViewList2;
  }(React18.Component)
);
registerForIntl(ViewList);

// node_modules/@progress/kendo-react-dateinputs/dist/es/calendar/components/Navigation.js
var React20 = __toESM(require_react());
var PropTypes7 = __toESM(require_prop_types());

// node_modules/@progress/kendo-react-dateinputs/dist/es/calendar/components/CalendarNavigationItem.js
var React19 = __toESM(require_react());
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
var CalendarNavigationItem = (
  /** @class */
  function(_super) {
    __extends13(CalendarNavigationItem2, _super);
    function CalendarNavigationItem2() {
      var _this = _super !== null && _super.apply(this, arguments) || this;
      _this.handleClick = function(event) {
        var _a11 = _this.props, onClick = _a11.onClick, value = _a11.value;
        if (onClick) {
          onClick.call(void 0, value, event);
        }
      };
      return _this;
    }
    CalendarNavigationItem2.prototype.render = function() {
      var _a11 = this.props, isRangeStart = _a11.isRangeStart, value = _a11.value, text = _a11.text, other = __rest4(_a11, ["isRangeStart", "value", "text"]);
      return React19.createElement(
        "li",
        __assign8({}, other, { onClick: this.handleClick }),
        React19.createElement("span", { className: classNames({ "k-calendar-navigation-marker": isRangeStart }) }, this.props.children)
      );
    };
    return CalendarNavigationItem2;
  }(React19.Component)
);

// node_modules/@progress/kendo-react-dateinputs/dist/es/calendar/components/Navigation.js
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
var ITEMS_COUNT = 30;
var Navigation = (
  /** @class */
  function(_super) {
    __extends14(Navigation2, _super);
    function Navigation2(props) {
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
        return _this.props.navigationItem ? React20.createElement(_this.props.navigationItem, __assign9({}, navigationItemProps, { key: uniqueID }), text) : React20.createElement(CalendarNavigationItem, __assign9({}, navigationItemProps, { key: uniqueID }), text);
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
      _this.handleScrollAction = function(_a11) {
        var scrollAction = _a11.scrollAction, pageAction = _a11.pageAction;
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
    Object.defineProperty(Navigation2.prototype, "take", {
      get: function() {
        return this.props.take !== void 0 ? this.props.take : Navigation2.defaultProps.take;
      },
      enumerable: false,
      configurable: true
    });
    Navigation2.prototype.componentDidUpdate = function(_prevProps, _prevState) {
      if (this.indexToScroll !== void 0 && this.virtualization) {
        this.virtualization.scrollToIndex(this.indexToScroll);
      }
      this.lastView = this.props.activeView;
      this.lastFocus = this.props.focusedDate;
      this.indexToScroll = void 0;
    };
    Navigation2.prototype.render = function() {
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
      var navigationBody = React20.createElement(
        Virtualization,
        { skip, take: this.take, total, itemHeight: this.itemHeight, topOffset: this.topOffset, bottomOffset: this.bottomOffset, onScroll: this.props.onScroll, maxScrollDifference: this.maxViewHeight, onScrollAction: this.handleScrollAction, onMount: this.handleVirtualizationMount, tabIndex: this.props.tabIndex },
        React20.createElement("ul", { ref: function(el) {
          _this.list = el;
        }, className: "k-reset" }, dates.map(function(date2) {
          return _this.buildNavigationItem(date2);
        }))
      );
      return React20.createElement(
        "div",
        { className: "k-calendar-navigation" },
        React20.createElement("span", { className: "k-calendar-navigation-highlight" }),
        this.props.dom.didCalculate ? navigationBody : null
      );
    };
    Navigation2.prototype.getTake = function(skip, total) {
      return Math.min(total - skip, this.take);
    };
    Navigation2.propTypes = {
      activeView: PropTypes7.number.isRequired,
      focusedDate: PropTypes7.instanceOf(Date).isRequired,
      max: PropTypes7.instanceOf(Date).isRequired,
      min: PropTypes7.instanceOf(Date).isRequired,
      onChange: PropTypes7.func,
      take: PropTypes7.number,
      tabIndex: PropTypes7.number
    };
    Navigation2.defaultProps = {
      take: ITEMS_COUNT
    };
    return Navigation2;
  }(React20.Component)
);

// node_modules/@progress/kendo-react-dateinputs/dist/es/calendar/components/Calendar.js
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
    __extends15(CalendarWithoutContext2, _super);
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
      _this.handleViewChange = function(_a11) {
        var view = _a11.view;
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
      validatePackage(packageMetadata2);
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
      var _a11 = this.props.smoothScroll, smoothScroll = _a11 === void 0 ? Number.parseFloat(React21.version) < 18 : _a11;
      var rootClassNames = classNames("k-widget k-calendar k-calendar-infinite", {
        "k-disabled": this.props.disabled,
        "k-week-number": this.props.weekNumber,
        "k-calendar-lg": this.props.mobileMode
      }, this.props.className);
      var calendarBody = [this.props.navigation && React21.createElement(Navigation, { key: 0, ref: function(el) {
        _this.Navigation = el;
      }, activeView: this.state.activeView, focusedDate: this.focusedDate, min: this.min, max: this.max, onScroll: this.handleScroll, onChange: this.handleNavigationChange, service: this.service, dom: this.dom, navigationItem: this.props.navigationItem, tabIndex: this.props.tabIndex }), React21.createElement(ViewList, { key: 1, ref: function(el) {
        _this.calendarViewList = el;
      }, activeView: this.state.activeView, focusedDate: this.focusedDate, min: this.min, max: this.max, bus: this.bus, shouldScroll: this.shouldScroll, onScroll: this.handleScroll, service: this.service, cell: this.props.cell, weekCell: this.props.weekCell, dom: this.dom, smoothScroll, showWeekNumbers: this.props.weekNumber, onChange: this.handleDateChange, value: sanitizedValue, cellUID: this.cellUID, headerTitle: this.props.headerTitle, tabIndex: this.props.tabIndex })];
      return React21.createElement("div", { ref: function(el) {
        _this._element = el;
      }, className: rootClassNames, id: this.props.id || this.id, "aria-labelledby": this.props.ariaLabelledBy, "aria-describedby": this.props.ariaDescribedBy, "aria-disabled": this.props.disabled, tabIndex: !this.props.disabled ? this.props.tabIndex || 0 : void 0, onFocus: this.handleFocus, onBlur: this.handleBlur, onKeyDown: this.handleKeyDown, onMouseDown: this.handleMouseDown, onClick: this.handleClick }, calendarBody);
    };
    CalendarWithoutContext2.displayName = "Calendar";
    CalendarWithoutContext2.propTypes = {
      className: PropTypes8.string,
      defaultActiveView: PropTypes8.oneOf(["month", "year", "decade", "century"]),
      defaultValue: PropTypes8.instanceOf(Date),
      disabled: PropTypes8.bool,
      focusedDate: PropTypes8.instanceOf(Date),
      id: PropTypes8.string,
      ariaLabelledBy: PropTypes8.string,
      ariaDescribedBy: PropTypes8.string,
      max: PropTypes8.instanceOf(Date),
      min: PropTypes8.instanceOf(Date),
      navigation: PropTypes8.bool,
      smoothScroll: PropTypes8.bool,
      onBlur: PropTypes8.func,
      onChange: PropTypes8.func,
      onFocus: PropTypes8.func,
      tabIndex: PropTypes8.number,
      value: PropTypes8.instanceOf(Date),
      weekNumber: PropTypes8.bool,
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
  }(React21.Component)
);
var CalendarPropsContext = createPropsContext();
var Calendar = withPropsContext(CalendarPropsContext, CalendarWithoutContext);
Calendar.displayName = "KendoReactCalendar";
registerForIntl(CalendarWithoutContext);

// node_modules/@progress/kendo-react-dateinputs/dist/es/dateinput/DateInput.js
var React22 = __toESM(require_react());
var PropTypes9 = __toESM(require_prop_types());

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
      var _a11;
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
        this.leadingZero = !this.isAbbrMonth(dateParts.partMap, symbol) ? (_a11 = {}, _a11[symbol] = true, _a11) : null;
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
  var _a11 = normalizeTimes(candidate, min, max), candidateValue = _a11.candidateValue, minValue = _a11.minValue, maxValue = _a11.maxValue;
  return minValue <= candidateValue && candidateValue <= maxValue;
};

// node_modules/@progress/kendo-react-dateinputs/dist/es/dateinput/DateInput.js
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
var VALIDATION_MESSAGE = "Please enter a valid value!";
var DateInputWithoutContext = (
  /** @class */
  function(_super) {
    __extends16(DateInputWithoutContext2, _super);
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
        var _a11 = _this.kendoDate.getTextAndFormat(), text = _a11.text, currentFormat = _a11.format;
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
      validatePackage(packageMetadata2);
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
      var _a11 = this.props, _b3 = _a11.size, size = _b3 === void 0 ? DateInputWithoutContext2.defaultProps.size : _b3, _c5 = _a11.fillMode, fillMode = _c5 === void 0 ? DateInputWithoutContext2.defaultProps.fillMode : _c5, _d = _a11.rounded, rounded = _d === void 0 ? DateInputWithoutContext2.defaultProps.rounded : _d;
      if (this.props._ref) {
        this.props._ref.current = this;
      }
      var localizationService = provideLocalizationService(this);
      var props = __assign10(__assign10({}, DateInputWithoutContext2.defaultProps), this.props);
      var name = props.name, label = props.label, id = props.id;
      var currentText = this.text;
      var text = currentText === this.props.placeholder ? "" : currentText;
      var placeholder = currentText === this.props.placeholder ? currentText : void 0;
      var inputId = id || this._inputId;
      var isValid = !this.validityStyles || this.validity.valid;
      var wrapperClassesInstance = __spreadArray2([], wrapperClasses, true);
      if (this.props.className) {
        wrapperClassesInstance.push(this.props.className);
      }
      var dateinput = React22.createElement(AsyncFocusBlur, { onFocus: this.elementOnFocus, onBlur: this.elementOnBlur }, function(_a12) {
        var _b4;
        var onFocus2 = _a12.onFocus, onBlur = _a12.onBlur;
        return React22.createElement(
          "span",
          { ref: function(span) {
            _this._wrapper = span;
          }, style: !label ? { width: _this.props.width } : void 0, dir: _this.props.dir, className: classNames("k-dateinput", "k-input", (_b4 = {}, _b4["k-input-".concat(kendoThemeMaps.sizeMap[size] || size)] = size, _b4["k-input-".concat(fillMode)] = fillMode, _b4["k-rounded-".concat(kendoThemeMaps.roundedMap[rounded] || rounded)] = rounded, _b4["k-invalid"] = !isValid, _b4["k-required"] = _this.required, _b4["k-disabled"] = _this.props.disabled, _b4), _this.props.className), onFocus: onFocus2, onBlur },
          React22.createElement("input", { role: _this.props.ariaRole || "textbox", readOnly: _this.props.readonly, tabIndex: _this.props.tabIndex, disabled: _this.props.disabled, title: _this.props.title !== void 0 ? _this.props.title : currentText, type: "text", spellCheck: false, autoComplete: "off", autoCorrect: "off", className: "k-input-inner", id: inputId, "aria-label": _this.props.ariaLabel, "aria-labelledby": _this.props.ariaLabelledBy, "aria-describedby": _this.props.ariaDescribedBy, "aria-haspopup": _this.props.ariaHasPopup, "aria-disabled": _this.props.disabled, "aria-expanded": _this.props.ariaExpanded, "aria-controls": _this.props.ariaControls, onWheel: _this.wheel, onClick: _this.elementClick, onInput: _this.elementChange, onPaste: _this.handlePaste, onKeyDown: _this.elementKeyDown, onChange: noop, value: text, placeholder, name, ref: function(input) {
            return _this._element = input;
          } }),
          _this.props.children,
          _this.props.spinners && React22.createElement(
            "span",
            { className: "k-input-spinner k-spin-button", onMouseDown: _this.spinnersMouseDown },
            React22.createElement(Button, { tabIndex: -1, type: "button", rounded: null, className: "k-spinner-increase", icon: "caret-alt-up", svgIcon: caretAltUpIcon, "aria-label": localizationService.toLanguageString(increaseValue, messages2[increaseValue]), title: localizationService.toLanguageString(increaseValue, messages2[increaseValue]), onClick: _this.increasePart }),
            React22.createElement(Button, { tabIndex: -1, type: "button", rounded: null, className: "k-spinner-decrease", icon: "caret-alt-down", svgIcon: caretAltDownIcon, "aria-label": localizationService.toLanguageString(decreaseValue, messages2[decreaseValue]), title: localizationService.toLanguageString(decreaseValue, messages2[decreaseValue]), onClick: _this.decreasePart })
          )
        );
      });
      return label ? React22.createElement(FloatingLabel, { label, editorId: inputId, editorValue: currentText, editorValid: isValid, editorDisabled: this.props.disabled, children: dateinput, style: { width: this.props.width } }) : dateinput;
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
        var props = __assign10(__assign10({}, DateInput.defaultProps), this.props);
        var _a11 = props.formatPlaceholder, formatPlaceholder = _a11 === void 0 ? DateInputWithoutContext2.defaultProps.formatPlaceholder : _a11, _b3 = props.format, format = _b3 === void 0 ? DateInputWithoutContext2.defaultProps.format : _b3, value = props.value, defaultValue = props.defaultValue;
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
        var _c5 = this.kendoDate.getTextAndFormat(), currentText = _c5.text, currentFormat = _c5.format;
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
      var _a11 = this.selection, selectionStart = _a11.start, selectionEnd = _a11.end;
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
      value: PropTypes9.instanceOf(Date),
      format: PropTypes9.oneOfType([
        PropTypes9.string,
        PropTypes9.shape({
          skeleton: PropTypes9.string,
          pattern: PropTypes9.string,
          date: PropTypes9.oneOf(["short", "medium", "long", "full"]),
          time: PropTypes9.oneOf(["short", "medium", "long", "full"]),
          datetime: PropTypes9.oneOf(["short", "medium", "long", "full"]),
          era: PropTypes9.oneOf(["narrow", "short", "long"]),
          year: PropTypes9.oneOf(["numeric", "2-digit"]),
          month: PropTypes9.oneOf(["numeric", "2-digit", "narrow", "short", "long"]),
          day: PropTypes9.oneOf(["numeric", "2-digit"]),
          weekday: PropTypes9.oneOf(["narrow", "short", "long"]),
          hour: PropTypes9.oneOf(["numeric", "2-digit"]),
          hour12: PropTypes9.bool,
          minute: PropTypes9.oneOf(["numeric", "2-digit"]),
          second: PropTypes9.oneOf(["numeric", "2-digit"]),
          timeZoneName: PropTypes9.oneOf(["short", "long"])
        })
      ]),
      formatPlaceholder: PropTypes9.oneOfType([
        PropTypes9.oneOf(["wide", "narrow", "short", "formatPattern"]),
        PropTypes9.shape({
          year: PropTypes9.string,
          month: PropTypes9.string,
          day: PropTypes9.string,
          hour: PropTypes9.string,
          minute: PropTypes9.string,
          second: PropTypes9.string
        })
      ]),
      width: PropTypes9.oneOfType([
        PropTypes9.string,
        PropTypes9.number
      ]),
      tabIndex: PropTypes9.number,
      title: PropTypes9.string,
      steps: PropTypes9.shape({
        year: PropTypes9.number,
        month: PropTypes9.number,
        day: PropTypes9.number,
        hour: PropTypes9.number,
        minute: PropTypes9.number,
        second: PropTypes9.number
      }),
      min: PropTypes9.instanceOf(Date),
      max: PropTypes9.instanceOf(Date),
      disabled: PropTypes9.bool,
      spinners: PropTypes9.bool,
      name: PropTypes9.string,
      dir: PropTypes9.string,
      label: PropTypes9.string,
      id: PropTypes9.string,
      ariaLabelledBy: PropTypes9.string,
      ariaDescribedBy: PropTypes9.string,
      ariaLabel: PropTypes9.string,
      ariaRole: PropTypes9.string,
      ariaHasPopup: PropTypes9.oneOfType([
        PropTypes9.bool,
        PropTypes9.string
      ]),
      ariaExpanded: PropTypes9.oneOfType([
        PropTypes9.bool
      ]),
      onChange: PropTypes9.func,
      validationMessage: PropTypes9.string,
      required: PropTypes9.bool,
      validate: PropTypes9.bool,
      valid: PropTypes9.bool,
      size: PropTypes9.oneOf([null, "small", "medium", "large"]),
      rounded: PropTypes9.oneOf([null, "small", "medium", "large", "full"]),
      fillMode: PropTypes9.oneOf([null, "solid", "flat", "outline"])
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
      validationMessage: VALIDATION_MESSAGE,
      placeholder: null,
      // the rest of the properties are undefined by default
      ariaHasPopup: "grid"
    };
    return DateInputWithoutContext2;
  }(React22.Component)
);
var DateInputPropsContext = createPropsContext();
var DateInput = withPropsContext(DateInputPropsContext, DateInputWithoutContext);
DateInput.displayName = "KendoReactDateInput";
registerForIntl(DateInputWithoutContext);
registerForLocalization(DateInputWithoutContext);

// node_modules/@progress/kendo-react-dateinputs/dist/es/datepicker/DatePicker.js
var React26 = __toESM(require_react());
var PropTypes10 = __toESM(require_prop_types());

// node_modules/@progress/kendo-react-dateinputs/dist/es/datepicker/ToggleButton.js
var ToggleButton = Button;

// node_modules/@progress/kendo-react-dateinputs/dist/es/common/PickerWrap.js
var React23 = __toESM(require_react());
var PickerWrap = React23.forwardRef(function(props, ref) {
  var _ref = props._ref;
  var element = React23.useRef(null);
  React23.useImperativeHandle(ref, function() {
    return element.current;
  });
  React23.useImperativeHandle(_ref, function() {
    return element.current;
  });
  var className = React23.useMemo(function() {
    return classNames(props.className, "k-picker-wrap");
  }, [props.className]);
  return React23.createElement("span", { ref: element, id: props.id, style: props.style, className, tabIndex: props.tabIndex }, props.children);
});

// node_modules/@progress/kendo-react-dateinputs/dist/es/hooks/usePickerFloatingLabel.js
var React24 = __toESM(require_react());
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
var usePickerFloatingLabel = function(dateInput) {
  var _a11 = React24.useState(false), show = _a11[0], setShow = _a11[1];
  var syncText = function() {
    if (dateInput.current) {
      setShow(Boolean(dateInput.current.text));
    }
  };
  React24.useEffect(syncText);
  return {
    editorValue: show
  };
};
var PickerFloatingLabel = function(props) {
  var floatingLabelProps = usePickerFloatingLabel(props.dateInput);
  return React24.createElement(FloatingLabel, __assign11({}, props, floatingLabelProps));
};

// node_modules/@progress/kendo-react-dateinputs/dist/es/common/AdaptiveMode.js
var React25 = __toESM(require_react());
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
var MOBILE_SMALL_DEVISE = 500;
var AdaptiveMode = function(props) {
  var footer = props.footer, children = props.children, _a11 = props.windowWidth, windowWidth = _a11 === void 0 ? 0 : _a11, navigatable = props.navigatable, navigatableElements = props.navigatableElements, expand = props.expand, animation = props.animation, onClose = props.onClose, adaptiveTitle = props.adaptiveTitle, mobileFilter = props.mobileFilter;
  var defaultProps = {
    navigatable: navigatable || false,
    navigatableElements: navigatableElements || [],
    expand,
    animation: animation === false ? false : true,
    onClose,
    animationStyles: windowWidth <= MOBILE_SMALL_DEVISE ? { top: 0, width: "100%", height: "100%" } : void 0,
    className: windowWidth <= MOBILE_SMALL_DEVISE ? "k-adaptive-actionsheet k-actionsheet-fullscreen" : "k-adaptive-actionsheet k-actionsheet-bottom"
  };
  return React25.createElement(
    ActionSheet,
    __assign12({}, defaultProps),
    React25.createElement(
      ActionSheetHeader,
      { className: "k-text-center" },
      React25.createElement(
        "div",
        { className: "k-actionsheet-titlebar-group k-hbox" },
        React25.createElement(
          "div",
          { className: "k-actionsheet-title" },
          React25.createElement("div", null, adaptiveTitle)
        ),
        React25.createElement(
          "div",
          { className: "k-actionsheet-actions" },
          React25.createElement(Button, { tabIndex: 0, "aria-label": "Cancel", "aria-disabled": "false", type: "button", fillMode: "flat", icon: "x", svgIcon: xIcon, onClick: onClose })
        )
      ),
      mobileFilter && React25.createElement("div", { className: "k-actionsheet-titlebar-group k-actionsheet-filter" }, mobileFilter)
    ),
    children,
    footer && React25.createElement(
      ActionSheetFooter,
      { className: "k-actions k-actions-stretched" },
      React25.createElement(Button, { size: "large", tabIndex: 0, "aria-label": footer.cancelText, "aria-disabled": "false", type: "button", onClick: footer.onCancel }, footer.cancelText),
      React25.createElement(Button, { tabIndex: 0, themeColor: "primary", size: "large", "aria-label": footer.applyText, "aria-disabled": "false", type: "button", onClick: footer.onApply }, footer.applyText)
    )
  );
};

// node_modules/@progress/kendo-react-dateinputs/dist/es/common/constants.js
var MOBILE_MEDIUM_DEVISE = 768;

// node_modules/@progress/kendo-react-dateinputs/dist/es/datepicker/DatePicker.js
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
var DatePickerWithoutContext = (
  /** @class */
  function(_super) {
    __extends17(DatePickerWithoutContext2, _super);
    function DatePickerWithoutContext2(props) {
      var _this = _super.call(this, props) || this;
      _this._popupId = guid();
      _this._element = null;
      _this._dateInput = React26.createRef();
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
        var _a11 = _this.props, disabled = _a11.disabled, min = _a11.min, max = _a11.max, weekNumber = _a11.weekNumber, focusedDate = _a11.focusedDate;
        var _b3 = _this.props.popupSettings, popupClass = _b3.popupClass, otherPopupSettings = __rest5(_b3, ["popupClass"]);
        var show = _this.show;
        var value = _this.value;
        var sanitizedValue = value && getDate(value);
        var popupClassNames = classNames("k-calendar-container k-group k-reset", popupClass);
        var popupProps = __assign13({ popupClass: "k-datepicker-popup", show, anchor: _this._element, className: popupClassNames, id: _this._popupId, anchorAlign: {
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
          return React26.createElement(_this.calendarComp, __assign13({ _ref: _this.setCalendarRef }, calendarProps));
        }
        return React26.createElement(
          _this.popupComp,
          __assign13({}, popupProps),
          React26.createElement(_this.calendarComp, __assign13({ _ref: _this.setCalendarRef }, calendarProps))
        );
      };
      _this.renderAdaptivePopup = function() {
        var _a11 = _this.state.windowWidth, windowWidth = _a11 === void 0 ? 0 : _a11;
        var actionSheetProps = {
          expand: _this.show,
          onClose: _this.handleBlur,
          adaptiveTitle: _this.props.adaptiveTitle,
          windowWidth
        };
        return React26.createElement(
          AdaptiveMode,
          __assign13({}, actionSheetProps),
          React26.createElement(ActionSheetContent, { className: "!k-overflow-hidden" }, _this.renderPopup())
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
      validatePackage(packageMetadata2);
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
        var isAdaptive = this.state.windowWidth && this.state.windowWidth <= MOBILE_MEDIUM_DEVISE && this.props.adaptive;
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
      var _a11;
      this.observerResize = canUseDOM && window.ResizeObserver && new window.ResizeObserver(this.calculateMedia.bind(this));
      if (this.show) {
        this.forceUpdate();
      }
      if (((_a11 = this.document) === null || _a11 === void 0 ? void 0 : _a11.body) && this.observerResize) {
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
      var _a11;
      clearTimeout(this.nextTickId);
      if (((_a11 = this.document) === null || _a11 === void 0 ? void 0 : _a11.body) && this.observerResize) {
        this.observerResize.disconnect();
      }
    };
    DatePickerWithoutContext2.prototype.render = function() {
      var _this = this;
      var _a11 = this.props, _b3 = _a11.size, size = _b3 === void 0 ? DatePickerWithoutContext2.defaultProps.size : _b3, _c5 = _a11.rounded, rounded = _c5 === void 0 ? DatePickerWithoutContext2.defaultProps.rounded : _c5, _d = _a11.fillMode, fillMode = _d === void 0 ? DatePickerWithoutContext2.defaultProps.fillMode : _d, disabled = _a11.disabled, tabIndex = _a11.tabIndex, title = _a11.title, id = _a11.id, format = _a11.format, formatPlaceholder = _a11.formatPlaceholder, min = _a11.min, max = _a11.max, className = _a11.className, width = _a11.width, name = _a11.name, validationMessage = _a11.validationMessage, required = _a11.required, validityStyles = _a11.validityStyles, ariaLabelledBy = _a11.ariaLabelledBy, ariaDescribedBy = _a11.ariaDescribedBy, ariaLabel = _a11.ariaLabel;
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
      var toggleButtonTitle = provideLocalizationService(this).toLanguageString(toggleCalendar, messages2[toggleCalendar]);
      var datepicker = React26.createElement(AsyncFocusBlur, { onFocus: this.handleFocus, onBlur: this.mobileMode ? void 0 : this.handleBlur, onSyncBlur: this.props.onBlur, onSyncFocus: this.props.onFocus }, function(_a12) {
        var _b4;
        var onFocus2 = _a12.onFocus, onBlur = _a12.onBlur;
        return React26.createElement(
          React26.Fragment,
          null,
          React26.createElement(
            "span",
            { ref: function(span) {
              _this._element = span;
            }, className: classNames("k-input", "k-datepicker", (_b4 = {}, _b4["k-input-".concat(kendoThemeMaps.sizeMap[size] || size)] = size, _b4["k-rounded-".concat(kendoThemeMaps.roundedMap[rounded] || rounded)] = rounded, _b4["k-input-".concat(fillMode)] = fillMode, _b4["k-invalid"] = !isValid, _b4["k-required"] = _this.required, _b4["k-disabled"] = _this.props.disabled, _b4), className), onKeyDown: _this.handleKeyDown, style: { width }, onFocus: onFocus2, onBlur, onClick: _this.mobileMode ? _this.handleIconClick : void 0 },
            React26.createElement(_this.dateInputComp, __assign13({ _ref: _this._dateInput, ariaRole: "combobox", readonly: _this.mobileMode, ariaExpanded: _this.show, ariaControls: _this._popupId }, dateInputProps)),
            React26.createElement(_this.toggleButtonComp, { type: "button", icon: "calendar", svgIcon: calendarIcon, title: toggleButtonTitle, className: "k-input-button", rounded: null, onClick: _this.mobileMode ? void 0 : _this.handleIconClick, "aria-label": toggleButtonTitle, onMouseDown: _this.handleIconMouseDown }),
            !_this.mobileMode && _this.renderPopup()
          ),
          _this.mobileMode && _this.renderAdaptivePopup()
        );
      });
      return this.props.label ? React26.createElement(PickerFloatingLabel, { dateInput: this._dateInput, label: this.props.label, editorId: id, editorValid: isValid, editorDisabled: this.props.disabled, children: datepicker, style: { width: this.props.width } }) : datepicker;
    };
    DatePickerWithoutContext2.prototype.setShow = function(show) {
      var _a11 = this.props, onOpen = _a11.onOpen, onClose = _a11.onClose;
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
      className: PropTypes10.string,
      defaultShow: PropTypes10.bool,
      defaultValue: PropTypes10.instanceOf(Date),
      disabled: PropTypes10.bool,
      focusedDate: PropTypes10.instanceOf(Date),
      format: PropTypes10.oneOfType([
        PropTypes10.string,
        PropTypes10.shape({
          skeleton: PropTypes10.string,
          pattern: PropTypes10.string,
          date: PropTypes10.oneOf(["short", "medium", "long", "full"]),
          time: PropTypes10.oneOf(["short", "medium", "long", "full"]),
          datetime: PropTypes10.oneOf(["short", "medium", "long", "full"]),
          era: PropTypes10.oneOf(["narrow", "short", "long"]),
          year: PropTypes10.oneOf(["numeric", "2-digit"]),
          month: PropTypes10.oneOf(["numeric", "2-digit", "narrow", "short", "long"]),
          day: PropTypes10.oneOf(["numeric", "2-digit"]),
          weekday: PropTypes10.oneOf(["narrow", "short", "long"]),
          hour: PropTypes10.oneOf(["numeric", "2-digit"]),
          hour12: PropTypes10.bool,
          minute: PropTypes10.oneOf(["numeric", "2-digit"]),
          second: PropTypes10.oneOf(["numeric", "2-digit"]),
          timeZoneName: PropTypes10.oneOf(["short", "long"])
        })
      ]),
      formatPlaceholder: PropTypes10.oneOfType([
        PropTypes10.oneOf(["wide", "narrow", "short", "formatPattern"]),
        PropTypes10.shape({
          year: PropTypes10.string,
          month: PropTypes10.string,
          day: PropTypes10.string,
          hour: PropTypes10.string,
          minute: PropTypes10.string,
          second: PropTypes10.string
        })
      ]),
      id: PropTypes10.string,
      ariaLabelledBy: PropTypes10.string,
      ariaDescribedBy: PropTypes10.string,
      ariaLabel: PropTypes10.string,
      min: PropTypes10.instanceOf(Date),
      max: PropTypes10.instanceOf(Date),
      name: PropTypes10.string,
      popupSettings: PropTypes10.shape({
        animate: PropTypes10.bool,
        appendTo: PropTypes10.any,
        popupClass: PropTypes10.string
      }),
      show: PropTypes10.bool,
      tabIndex: PropTypes10.number,
      title: PropTypes10.string,
      value: PropTypes10.instanceOf(Date),
      weekNumber: PropTypes10.bool,
      width: PropTypes10.oneOfType([PropTypes10.number, PropTypes10.string]),
      validationMessage: PropTypes10.string,
      required: PropTypes10.bool,
      validate: PropTypes10.bool,
      valid: PropTypes10.bool,
      size: PropTypes10.oneOf([null, "small", "medium", "large"]),
      rounded: PropTypes10.oneOf([null, "small", "medium", "large", "full"]),
      fillMode: PropTypes10.oneOf([null, "solid", "flat", "outline"]),
      adaptive: PropTypes10.bool,
      adaptiveTitle: PropTypes10.string
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
  }(React26.Component)
);
var DatePickerPropsContext = createPropsContext();
var DatePicker = withPropsContext(DatePickerPropsContext, DatePickerWithoutContext);
DatePicker.displayName = "KendoReactDatePicker";
registerForLocalization(DatePickerWithoutContext);

// node_modules/@progress/kendo-react-data-tools/dist/es/header/HeaderThElement.js
var React29 = __toESM(require_react());

// node_modules/@progress/kendo-react-data-tools/dist/es/navigation/hooks.js
var React28 = __toESM(require_react());

// node_modules/@progress/kendo-react-data-tools/dist/es/navigation/constants.js
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
var _a9;
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
var FOCUSABLE_ELEMENTS = __spreadArray3(__spreadArray3([], FOCUSABLE_ELEMENTS_BASE, true), ["[tabindex]"], false);
var TABBABLE_ELEMENTS = __spreadArray3(__spreadArray3([], FOCUSABLE_ELEMENTS_BASE, true), ["[tabindex]"], false).map(function(selector) {
  return selector + ':not([tabindex="-1"])';
});
var tableKeyboardNavigationScopeAttributes = (_a9 = {}, _a9[KEYBOARD_NAV_DATA_SCOPE] = true, _a9);
var tableKeyboardNavigationHeaderAttributes = (_b2 = {}, _b2[KEYBOARD_NAV_DATA_HEADER] = true, _b2);
var tableKeyboardNavigationBodyAttributes = (_c2 = {}, _c2[KEYBOARD_NAV_DATA_BODY] = true, _c2);

// node_modules/@progress/kendo-react-data-tools/dist/es/navigation/TableKeyboardNavigationContext.js
var React27 = __toESM(require_react());
var TableKeyboardNavigationContext = React27.createContext(void 0);
TableKeyboardNavigationContext.displayName = "KendoReactTableKeyboardNavigationContext";

// node_modules/@progress/kendo-react-data-tools/dist/es/navigation/hooks.js
var useTableKeyboardNavigation = function(elementId, navigatable) {
  var _a11;
  var navigationContext = React28.useContext(TableKeyboardNavigationContext);
  if (!navigationContext || !elementId || navigatable === false) {
    return {};
  }
  return _a11 = {
    tabIndex: navigationContext && navigationContext.activeId && navigationContext.activeId === elementId ? 0 : -1
  }, _a11[KEYBOARD_NAV_DATA_LEVEL] = navigationContext.level, _a11[KEYBOARD_NAV_DATA_ID] = elementId, _a11;
};

// node_modules/@progress/kendo-react-data-tools/dist/es/header/HeaderThElement.js
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
var HeaderThElement = function(props) {
  var ariaSort = props.ariaSort, colSpan = props.colSpan, rowSpan = props.rowSpan, className = props.className, style = props.style, columnId = props.columnId, onKeyDown2 = props.onKeyDown, navigatable = props.navigatable, ariaColumnIndex = props.ariaColumnIndex, ariaLabel = props.ariaLabel, role = props.role, ariaSelected = props.ariaSelected;
  var navigationAttributes = useTableKeyboardNavigation(columnId, navigatable);
  return React29.createElement("th", __assign14({
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
var getNavigatableLevel = function(element) {
  if (!element) {
    return;
  }
  return parseInt(element.getAttribute(KEYBOARD_NAV_DATA_LEVEL) || "", 10);
};
var getNavigatableId = function(element) {
  if (!element) {
    return;
  }
  var dataId = element.getAttribute(KEYBOARD_NAV_DATA_ID);
  return dataId ? dataId : void 0;
};
var isNavigatable = function(element) {
  if (!element) {
    return false;
  }
  var dataId = element.getAttribute(KEYBOARD_NAV_DATA_ID);
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
  var selectors = options.focusable ? FOCUSABLE_ELEMENTS : TABBABLE_ELEMENTS;
  return Array.from(scope.querySelectorAll(selectors.join(",")));
};
var getNavigatableElements = function(scope, options) {
  if (options === void 0) {
    options = { level: 0 };
  }
  if (!scope) {
    return [];
  }
  var selector = FOCUSABLE_ELEMENTS.map(function(el) {
    return el + "[".concat(KEYBOARD_NAV_DATA_LEVEL, "='").concat(options.level, "']");
  }).join(",");
  return Array.from(scope.querySelectorAll(selector));
};
var filterNavigatableElements = function(options) {
  if (options === void 0) {
    options = { level: 0 };
  }
  var selector = FOCUSABLE_ELEMENTS.map(function(sel) {
    return sel + "[".concat(KEYBOARD_NAV_DATA_LEVEL, "='").concat(options.level, "']");
  }).join(",");
  return function(element) {
    return element.matches(selector);
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
function isRtl(element) {
  return Boolean(element && getComputedStyle(element).direction === "rtl");
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
var React30 = __toESM(require_react());
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
var ColumnResizer = (
  /** @class */
  function(_super) {
    __extends18(ColumnResizer2, _super);
    function ColumnResizer2() {
      var _this = _super !== null && _super.apply(this, arguments) || this;
      _this.draggable = null;
      _this.isDragged = false;
      _this.onDrag = function(data) {
        _this.isDragged = true;
        var element = _this.draggable && _this.draggable.element;
        if (element) {
          _this.props.resize(data.event, element, false);
        }
      };
      _this.onRelease = function(data) {
        if (!_this.isDragged) {
          return;
        }
        var element = _this.draggable && _this.draggable.element;
        if (element) {
          _this.props.resize(data.event, element, true);
        }
        _this.isDragged = false;
      };
      _this.onDoubleClick = function(event) {
        if (_this.isDragged) {
          return;
        }
        var element = _this.draggable && _this.draggable.element;
        if (element && _this.props.autofit) {
          _this.props.autofit(event, element);
        }
      };
      return _this;
    }
    ColumnResizer2.prototype.render = function() {
      var _this = this;
      return React30.createElement(
        Draggable,
        { onPress: function(e) {
          e.event.originalEvent.stopPropagation();
        }, onDrag: this.onDrag, onRelease: this.onRelease, ref: function(component) {
          _this.draggable = component;
        } },
        React30.createElement("span", { className: "k-column-resizer", style: { touchAction: "none" }, draggable: false, onDoubleClick: this.onDoubleClick })
      );
    };
    return ColumnResizer2;
  }(React30.Component)
);

// node_modules/@progress/kendo-react-data-tools/dist/es/virtualization/columns.js
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
function tableColumnsVirtualization(args) {
  var enabled = args.enabled, _a11 = args.columns, columns = _a11 === void 0 ? [] : _a11, tableViewPortWidth = args.tableViewPortWidth, scrollLeft = args.scrollLeft;
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
  var hiddenCols = __spreadArray4([], hiddenColumns, true);
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
var React31 = __toESM(require_react());
var import_react_dom = __toESM(require_react_dom());
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
var DragClue = (
  /** @class */
  function(_super) {
    __extends19(DragClue2, _super);
    function DragClue2(props) {
      var _this = _super.call(this, props) || this;
      _this.elementRef = React31.createRef();
      _this.state = {
        visible: false,
        top: 0,
        left: 0,
        innerText: "",
        status: "k-i-cancel"
      };
      _this.hiddenElementRef = React31.createRef();
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
      var dragClue = this.state.visible && canUseDOM && (0, import_react_dom.createPortal)(React31.createElement(
        "div",
        { ref: this.elementRef, className: "k-header k-drag-clue", style: {
          display: "block",
          position: "absolute",
          zIndex: 2e4,
          padding: "8px 12px",
          top: this.state.top + "px",
          left: this.state.left + "px"
        } },
        React31.createElement(IconWrap, { className: "k-drag-status", name: status, icon: status === "k-i-cancel" ? cancelIcon : plusIcon }),
        this.state.innerText
      ), hiddenElement && hiddenElement.ownerDocument ? hiddenElement.ownerDocument.body : document.body);
      return React31.createElement(
        React31.Fragment,
        null,
        dragClue,
        React31.createElement("div", { ref: this.hiddenElementRef, style: { display: "none" } })
      );
    };
    return DragClue2;
  }(React31.PureComponent)
);

// node_modules/@progress/kendo-react-data-tools/dist/es/drag/DropClue.js
var React32 = __toESM(require_react());
var import_react_dom2 = __toESM(require_react_dom());
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
var DropClue = (
  /** @class */
  function(_super) {
    __extends20(DropClue2, _super);
    function DropClue2(props) {
      var _this = _super.call(this, props) || this;
      _this.state = {
        height: 0,
        visible: false,
        left: 0,
        top: 0
      };
      _this.hiddenElementRef = React32.createRef();
      return _this;
    }
    DropClue2.prototype.render = function() {
      var hiddenElement = this.hiddenElementRef.current;
      var dropClue = this.state.visible && canUseDOM && (0, import_react_dom2.createPortal)(React32.createElement("div", { className: "k-grouping-dropclue", style: {
        zIndex: 1e4,
        display: "block",
        top: this.state.top + "px",
        left: this.state.left + "px",
        height: this.state.height + "px"
      } }), hiddenElement && hiddenElement.ownerDocument ? hiddenElement.ownerDocument.body : document.body);
      return React32.createElement(
        React32.Fragment,
        null,
        dropClue,
        React32.createElement("div", { ref: this.hiddenElementRef, style: { display: "none" } })
      );
    };
    return DropClue2;
  }(React32.PureComponent)
);

// node_modules/@progress/kendo-react-data-tools/dist/es/navigation/TableKeyboardNavigation.js
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
  var element = event.target;
  var elementId = tableKeyboardNavigationTools.getNavigatableId(element);
  var dataLevel = tableKeyboardNavigationTools.getNavigatableLevel(element);
  var scope = tableKeyboardNavigationTools.getClosestScope(element);
  var matrix = navigationStateRef.current.navigationMatrix;
  if (dataLevel !== void 0 && scope) {
    if (event.keyCode === Keys.enter) {
      var navigatableElement = tableKeyboardNavigationTools.getNavigatableElement(element, { level: dataLevel + 1 });
      if (navigatableElement) {
        tableKeyboardNavigationTools.focusElement({
          elementForFocus: navigatableElement,
          event,
          contextStateRef,
          prevElement: element
        });
        return;
      } else {
        var elementForFocus = tableKeyboardNavigationTools.getFocusableElements(element)[0];
        tableKeyboardNavigationTools.focusElement({ elementForFocus, event, contextStateRef, prevElement: element });
        return;
      }
    }
    if (event.keyCode === Keys.up || event.keyCode === Keys.down || event.keyCode === Keys.left || event.keyCode === Keys.right) {
      var isReverse = event.keyCode === Keys.up || event.keyCode === Keys.left;
      var isVertical = event.keyCode === Keys.up || event.keyCode === Keys.down;
      var currentIdIndexes = void 0;
      if (navigationStateRef.current && navigationStateRef.current.prevNavigationIndexes) {
        var _a11 = navigationStateRef.current.prevNavigationIndexes, rowIndex = _a11[0], cellIndex = _a11[1];
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
          tableKeyboardNavigationTools.focusElement({ elementForFocus, event, contextStateRef, prevElement: element });
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
  __spreadArray5(__spreadArray5([], headerRows, true), bodyRows, true).forEach(function(row, rowIndex) {
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
var React33 = __toESM(require_react());
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
var getRowIndex = function(element) {
  if (!element) {
    return;
  }
  var rowIndex = element.getAttribute(TABLE_ROW_INDEX_ATTRIBUTE);
  return rowIndex ? parseInt(rowIndex, 10) : void 0;
};
var getColumnIndex = function(element) {
  if (!element) {
    return;
  }
  var colIndex = element.getAttribute(TABLE_COL_INDEX_ATTRIBUTE);
  return colIndex ? parseInt(colIndex, 10) : void 0;
};
var HAS_RELATIVE_STACKING_CONTEXT = hasRelativeStackingContext();
var relativeContextElement = function(element) {
  if (!element || !HAS_RELATIVE_STACKING_CONTEXT) {
    return null;
  }
  var node = element.parentElement;
  while (node) {
    if (window.getComputedStyle(node).transform !== "none") {
      return node;
    }
    node = node.parentElement;
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
var TableSelection = function(props) {
  var _a11;
  var onRelease = props.onRelease, childRef = props.childRef;
  var _b3 = getSelectionOptions(props.selectable), selectionEnabled = _b3.enabled, selectionDrag = _b3.drag, selectionMode = _b3.mode, selectionCell = _b3.cell;
  var draggableRef = React33.useRef(null);
  var overlayElementRef = React33.useRef(null);
  var dragStartRef = React33.useRef({ clientX: 0, clientY: 0 });
  var _c5 = React33.useState(null), overlaySettings = _c5[0], setOverlaySettings = _c5[1];
  var offsetParentRef = React33.useRef();
  var isDraggedRef = React33.useRef(false);
  var isPreventedRef = React33.useRef(false);
  var onPressHandler = React33.useCallback(function(eventData) {
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
  var onDragHandler = React33.useCallback(function(eventData) {
    var event = eventData.event;
    var _a12 = dragStartRef.current, clientX = _a12.clientX, clientY = _a12.clientY;
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
  var onReleaseHandler = React33.useCallback(function(eventData) {
    var event = eventData.event;
    var _a12 = dragStartRef.current, clientX = _a12.clientX, clientY = _a12.clientY;
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
    return React33.cloneElement(React33.Children.only(props.children), { ref: childRef });
  }
  return React33.createElement(
    React33.Fragment,
    null,
    React33.createElement(Draggable, { onPress: onPressHandler, onDrag: onDragHandler, onRelease: onReleaseHandler, ref: draggableRef, childRef }, props.children),
    overlaySettings && ReactDOM.createPortal(React33.createElement("div", { ref: overlayElementRef, style: __assign15(__assign15({}, overlaySettings), { position: "fixed" }), className: "k-marquee k-marquee-color" }), (_a11 = getDocument3()) === null || _a11 === void 0 ? void 0 : _a11.body)
  );
};

// node_modules/@progress/kendo-react-grid/dist/es/cells/GridSelectionCell.js
var React34 = __toESM(require_react());

// node_modules/@progress/kendo-react-grid/dist/es/GridColumn.js
var PropTypes11 = __toESM(require_prop_types());
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
  field: PropTypes11.string,
  title: PropTypes11.string,
  editable: PropTypes11.bool,
  sortable: PropTypes11.oneOfType([
    PropTypes11.bool,
    PropTypes11.shape({
      allowUnsort: PropTypes11.bool.isRequired
    })
  ]),
  cell: PropTypes11.any,
  filterCell: PropTypes11.any,
  filterTitle: PropTypes11.string,
  filterable: PropTypes11.bool,
  filter: PropTypes11.oneOf(["text", "numeric", "boolean", "date"]),
  editor: PropTypes11.oneOf(["text", "numeric", "boolean", "date"]),
  width: PropTypes11.oneOfType([PropTypes11.string, PropTypes11.number]),
  minResizableWidth: PropTypes11.number,
  headerCell: PropTypes11.any,
  footerCell: PropTypes11.any,
  headerSelectionValue: PropTypes11.bool,
  format: PropTypes11.string,
  headerClassName: PropTypes11.string,
  className: PropTypes11.string,
  reorderable: PropTypes11.bool,
  resizable: PropTypes11.bool,
  orderIndex: PropTypes11.number,
  groupable: PropTypes11.bool,
  columnMenu: PropTypes11.any,
  locked: PropTypes11.bool
};

// node_modules/@progress/kendo-react-grid/dist/es/utils/index.js
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
    var declarationIndex = column.declarationIndex, parentIndex = column.parentIndex, depth = column.depth, colSpan = column.colSpan, rowSpan = column.rowSpan, index = column.index, kFirst = column.kFirst, children = column.children, props = __rest6(column, ["declarationIndex", "parentIndex", "depth", "colSpan", "rowSpan", "index", "kFirst", "children"]);
    return children.length ? __assign16({ children: sanitizeColumns(children) }, props) : props;
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
  return __assign16(__assign16(__assign16({}, gridCells), columnCells), { select: __assign16(__assign16({}, gridCells.select || {}), columnCells.select || {}), hierarchy: __assign16(__assign16({}, gridCells.hierarchy || {}), columnCells.hierarchy || {}), group: __assign16(__assign16({}, gridCells.group || {}), columnCells.group || {}), edit: __assign16(__assign16({}, gridCells.edit || {}), columnCells.edit || {}) });
};

// node_modules/@progress/kendo-react-grid/dist/es/cells/GridSelectionCell.js
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
var GridSelectionCell = function(props) {
  var _a11;
  var handleOnChange = React34.useCallback(function(syntheticEvent) {
    if (props.selectionChange) {
      props.selectionChange({ syntheticEvent });
    }
  }, [props.selectionChange]);
  var inputId = React34.useMemo(function() {
    return guid();
  }, []);
  var selectedValue = getNestedValue(props.field, props.dataItem);
  var navigationAttributes = useTableKeyboardNavigation(props.id);
  var tdProps = __assign17((_a11 = { colSpan: props.colSpan, style: props.style, className: props.className }, _a11["aria-colindex"] = props.ariaColumnIndex, _a11.role = "gridcell", _a11), navigationAttributes);
  var content = [
    React34.createElement("input", { key: "1", checked: typeof selectedValue === "boolean" && selectedValue, id: inputId, type: "checkbox", className: "k-checkbox k-checkbox-md k-rounded-md", onChange: handleOnChange }),
    React34.createElement("label", { className: "k-checkbox-label", htmlFor: inputId, key: "2" })
  ];
  var defaultRendering = props.rowType !== "groupHeader" ? React34.createElement("td", __assign17({}, tdProps), content) : null;
  var rowTypeSetting = props.rowType || "data";
  var customCells = props.cells;
  if (customCells && customCells.select && customCells.select[rowTypeSetting]) {
    var CustomCell = customCells.select[rowTypeSetting];
    return React34.createElement(CustomCell, __assign17({}, props, { tdProps }), content);
  }
  return props.render ? props.render.call(void 0, defaultRendering, props) : defaultRendering;
};

// node_modules/@progress/kendo-react-grid/dist/es/cells/GridHierarchyCell.js
var React35 = __toESM(require_react());

// node_modules/@progress/kendo-react-grid/dist/es/messages/index.js
var _a10;
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
var messages3 = (_a10 = {}, _a10[detailExpand] = "Expand detail row", _a10[detailCollapse] = "Collapse detail row", _a10[groupExpand] = "Expand group", _a10[groupCollapse] = "Collapse Group", _a10[noRecords] = "No records available", _a10[groupPanelEmpty] = "Drag a column header and drop it here to group by that column", _a10[filterClearButton] = "Clear", _a10[filterSubmitButton] = "Filter", _a10[filterTitle] = "Filter", _a10[sortAscending] = "Sort Ascending", _a10[sortDescending] = "Sort Descending", _a10[sortAriaLabel2] = "Sortable", _a10[groupColumn] = "Group Column", _a10[ungroupColumn] = "Ungroup Column", _a10[columnMenu] = "Column menu", _a10[pagerItemPerPage2] = "items per page", _a10[pagerInfo2] = "{0} - {1} of {2} items", _a10[pagerFirstPage2] = "Go to the first page", _a10[pagerPreviousPage2] = "Go to the previous page", _a10[pagerNextPage2] = "Go to the next page", _a10[pagerLastPage2] = "Go to the last page", _a10[pagerPage2] = "Page", _a10[pagerPageSizeAriaLabel2] = "Page size", _a10[pagerOf2] = "of", _a10[pagerTotalPages2] = "{0}", _a10[searchPlaceholder] = "Search", _a10[filterCheckAll] = "Check All", _a10[filterChooseOperator] = "Choose Operator", _a10[filterSelectedItems] = "selected items", _a10[filterAriaLabel2] = "Filter", _a10[groupPanelAriaLabel] = "Group panel", _a10["grid.filterEqOperator"] = "Is equal to", _a10["grid.filterNotEqOperator"] = "Is not equal to", _a10["grid.filterIsNullOperator"] = "Is null", _a10["grid.filterIsNotNullOperator"] = "Is not null", _a10["grid.filterIsEmptyOperator"] = "Is empty", _a10["grid.filterIsNotEmptyOperator"] = "Is not empty", _a10["grid.filterStartsWithOperator"] = "Starts with", _a10["grid.filterContainsOperator"] = "Contains", _a10["grid.filterNotContainsOperator"] = "Does not contain", _a10["grid.filterEndsWithOperator"] = "Ends with", _a10["grid.filterGteOperator"] = "Is greater than or equal to", _a10["grid.filterGtOperator"] = "Is greater than", _a10["grid.filterLteOperator"] = "Is less than or equal to", _a10["grid.filterLtOperator"] = "Is less than", _a10["grid.filterIsTrue"] = "Is true", _a10["grid.filterIsFalse"] = "Is false", _a10["grid.filterBooleanAll"] = "(All)", _a10["grid.filterAfterOrEqualOperator"] = "Is after or equal to", _a10["grid.filterAfterOperator"] = "Is after", _a10["grid.filterBeforeOperator"] = "Is before", _a10["grid.filterBeforeOrEqualOperator"] = "Is before or equal to", _a10["grid.filterAndLogic"] = "And", _a10["grid.filterOrLogic"] = "Or", _a10);
function pagerMessagesMap(pagerMessageKey) {
  var messageKey = pagerMessageKey.replace(/^pager\.([a-z])/, function(_match, group) {
    return "grid.pager" + group.toUpperCase();
  });
  return { messageKey, defaultMessage: messages3[messageKey] };
}

// node_modules/@progress/kendo-react-grid/dist/es/cells/GridHierarchyCell.js
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
var GridHierarchyCell = function(props) {
  var defaultRendering = null;
  var tdProps = null;
  var content = null;
  var expanded = getNestedValue(props.field, props.dataItem);
  var navigationAttributes = useTableKeyboardNavigation(props.id);
  var localization = useLocalization();
  var onKeyDownHandler = React35.useCallback(function(event) {
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
    tdProps = __assign18({ className: "k-table-td k-hierarchy-cell", role: "gridcell" }, navigationAttributes);
    defaultRendering = React35.createElement("td", __assign18({}, tdProps));
  } else if (props.rowType !== "groupHeader") {
    var baseMessage = expanded ? detailCollapse : detailExpand;
    var message = localization.toLanguageString(baseMessage, messages3[baseMessage]);
    tdProps = __assign18({ className: "k-table-td k-hierarchy-cell", onKeyDown: onKeyDownHandler, "aria-expanded": expanded ? true : false, role: "gridcell", "aria-colindex": props.ariaColumnIndex }, navigationAttributes);
    content = React35.createElement(
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
      React35.createElement(IconWrap, { name: expanded ? "minus" : "plus", icon: expanded ? minusIcon : plusIcon })
    );
    defaultRendering = React35.createElement("td", __assign18({}, tdProps), content);
  }
  var rowTypeSetting = props.rowType || "data";
  var customCells = props.cells;
  if (customCells && customCells.hierarchy && customCells.hierarchy[rowTypeSetting]) {
    var CustomCell = customCells.hierarchy[rowTypeSetting];
    return React35.createElement(CustomCell, __assign18({}, props, { tdProps }), content);
  }
  return props.render ? props.render.call(void 0, defaultRendering, props) : defaultRendering;
};

// node_modules/@progress/kendo-react-grid/dist/es/cells/GridEditCell.js
var React36 = __toESM(require_react());

// node_modules/@progress/kendo-react-grid/dist/es/constants/index.js
var GRID_ROW_INDEX_ATTRIBUTE = TABLE_ROW_INDEX_ATTRIBUTE;
var GRID_COL_INDEX_ATTRIBUTE = TABLE_COL_INDEX_ATTRIBUTE;

// node_modules/@progress/kendo-react-grid/dist/es/cells/GridEditCell.js
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
var GridEditCell = function(props) {
  var _a11, _b3, _c5, _d, _e;
  var data = getNestedValue(props.field, props.dataItem);
  var defaultRendering = null;
  var editCellClasses = classNames("k-table-td", "k-grid-edit-cell", (_a11 = {}, _a11["k-selected"] = props.isSelected, _a11), props.className);
  var inputId = React36.useMemo(function() {
    return guid();
  }, []);
  var navigationAttributes = useTableKeyboardNavigation(props.id);
  var tdProps = null;
  var content = null;
  var handleOnChange = React36.useCallback(function(syntheticEvent) {
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
  var onContextMenu = React36.useCallback(function(event) {
    if (props.onContextMenu) {
      props.onContextMenu.call(void 0, event, props.dataItem, props.field);
    }
  }, [props.onContextMenu, props.dataItem, props.field]);
  var inputChange = React36.useCallback(function(e) {
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
      tdProps = __assign19((_b3 = { onContextMenu, colSpan: props.colSpan, style: props.style, className: editCellClasses }, _b3["aria-colindex"] = props.ariaColumnIndex, _b3["aria-selected"] = props.isSelected, _b3[GRID_COL_INDEX_ATTRIBUTE] = props.columnIndex, _b3.role = "gridcell", _b3), navigationAttributes);
      content = React36.createElement(NumericTextBox, { width: "100%", value: data === void 0 ? null : data, onChange: inputChange });
      defaultRendering = React36.createElement("td", __assign19({}, tdProps), content);
      break;
    case "date":
      tdProps = __assign19((_c5 = { onContextMenu, colSpan: props.colSpan, style: props.style, className: editCellClasses }, _c5["aria-colindex"] = props.ariaColumnIndex, _c5["aria-selected"] = props.isSelected, _c5[GRID_COL_INDEX_ATTRIBUTE] = props.columnIndex, _c5.role = "gridcell", _c5), navigationAttributes);
      content = React36.createElement(DatePicker, { width: "100%", value: data, onChange: inputChange });
      defaultRendering = React36.createElement("td", __assign19({}, tdProps), content);
      break;
    case "boolean":
      tdProps = __assign19((_d = { onContextMenu, colSpan: props.colSpan, style: props.style, className: editCellClasses }, _d["aria-colindex"] = props.ariaColumnIndex, _d["aria-selected"] = props.isSelected, _d[GRID_COL_INDEX_ATTRIBUTE] = props.columnIndex, _d.role = "gridcell", _d), navigationAttributes);
      content = [
        React36.createElement("input", { checked: data || false, id: inputId, type: "checkbox", className: "k-checkbox k-checkbox-md k-rounded-md", onChange: handleOnChange, key: 1 }),
        React36.createElement("label", { className: "k-checkbox-label", htmlFor: inputId, key: 2 })
      ];
      defaultRendering = React36.createElement("td", __assign19({}, tdProps), content);
      break;
    default:
      tdProps = __assign19((_e = { onContextMenu, colSpan: props.colSpan, style: props.style, className: editCellClasses }, _e["aria-colindex"] = props.ariaColumnIndex, _e["aria-selected"] = props.isSelected, _e[GRID_COL_INDEX_ATTRIBUTE] = props.columnIndex, _e.role = "gridcell", _e), navigationAttributes);
      content = React36.createElement("input", { style: { width: "100%" }, className: "k-input", value: data || "", onChange: handleOnChange });
      defaultRendering = React36.createElement("td", __assign19({}, tdProps), content);
  }
  var editorSetting = props.editor || "text";
  var customCells = props.cells;
  if (customCells && customCells.edit && customCells.edit[editorSetting]) {
    var CustomCell = customCells.edit[editorSetting];
    return React36.createElement(CustomCell, __assign19({}, props, { tdProps }), content);
  }
  return props.render ? props.render.call(void 0, defaultRendering, props) : defaultRendering;
};

// node_modules/@progress/kendo-react-grid/dist/es/header/Header.js
var React37 = __toESM(require_react());
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
var Header2 = (
  /** @class */
  function(_super) {
    __extends21(Header3, _super);
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
      var _a11;
      var _this = this;
      if (!this.props.staticHeaders) {
        return React37.createElement(
          "thead",
          __assign20({ role: "presentation", className: classNames("k-table-thead", { "k-grid-draggable-header": this.props.draggable }) }, tableKeyboardNavigationHeaderAttributes),
          this.props.headerRow,
          this.props.filterRow
        );
      }
      return React37.createElement(
        "div",
        { ref: this.props.elemRef, className: classNames("k-grid-header", { "k-grid-draggable-header": this.props.draggable }), role: "presentation" },
        React37.createElement(
          "div",
          { ref: function(div) {
            _this.headerWrap = div;
          }, className: "k-grid-header-wrap", style: this.scrollbarWidth ? {} : { borderWidth: 0 }, onScroll: this.onScroll, role: "presentation" },
          React37.createElement(
            "table",
            { ref: function(table) {
              _this.table = table;
            }, className: classNames("k-table k-grid-header-table", (_a11 = {
              "k-table-md": !this.props.size
            }, _a11["k-table-".concat(kendoThemeMaps.sizeMap[this.props.size] || this.props.size)] = this.props.size, _a11), this.props.className), role: "presentation" },
            React37.createElement("colgroup", { ref: function(e) {
              _this.props.columnResize.colGroupHeader = e;
            } }, this.props.cols),
            React37.createElement(
              "thead",
              __assign20({ className: "k-table-thead", role: "rowgroup" }, tableKeyboardNavigationHeaderAttributes),
              this.props.headerRow,
              this.props.filterRow
            )
          )
        )
      );
    };
    return Header3;
  }(React37.Component)
);

// node_modules/@progress/kendo-react-grid/dist/es/header/HeaderRow.js
var React41 = __toESM(require_react());

// node_modules/@progress/kendo-react-grid/dist/es/interfaces/GridSortSettings.js
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
var normalize3 = function() {
  var settings = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    settings[_i] = arguments[_i];
  }
  return Object.assign.apply(Object, __spreadArray6([{ allowUnsort: true, mode: "single" }], settings, false));
};

// node_modules/@progress/kendo-react-grid/dist/es/drag/ColumnDraggable.js
var React38 = __toESM(require_react());
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
var ColumnDraggable = (
  /** @class */
  function(_super) {
    __extends22(ColumnDraggable2, _super);
    function ColumnDraggable2() {
      var _this = _super !== null && _super.apply(this, arguments) || this;
      _this.draggable = null;
      _this.onPress = function(data) {
        var element = _this.draggable && _this.draggable.element;
        if (element && _this.props.pressHandler) {
          _this.props.pressHandler(data.event, element);
        }
      };
      _this.onDrag = function(data) {
        var element = _this.draggable && _this.draggable.element;
        if (element && _this.props.dragHandler) {
          _this.props.dragHandler(data.event, element);
        }
      };
      _this.onRelease = function(data) {
        var element = _this.draggable && _this.draggable.element;
        if (element && _this.props.releaseHandler) {
          _this.props.releaseHandler(data.event);
        }
      };
      return _this;
    }
    ColumnDraggable2.prototype.render = function() {
      var _this = this;
      return React38.createElement(
        Draggable,
        { onPress: this.onPress, onDrag: this.onDrag, onRelease: this.onRelease, hint: this.props.dragClue, autoScroll: { boundaryElementRef: this.props.headerRef, direction: { horizontal: true, vertical: false } }, scrollContainer: this.props.containerRef || void 0, ref: function(component) {
          _this.draggable = component;
        } },
        React38.createElement("tr", { className: "k-table-row", style: { touchAction: "none" }, role: "row", "aria-rowindex": this.props.ariaRowIndex }, this.props.children)
      );
    };
    return ColumnDraggable2;
  }(React38.PureComponent)
);

// node_modules/@progress/kendo-react-grid/dist/es/header/GridHeaderCell.js
var React40 = __toESM(require_react());

// node_modules/@progress/kendo-react-grid/dist/es/columnMenu/GridColumnMenuWrapper.js
var React39 = __toESM(require_react());
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
var GridColumnMenuWrapper = (
  /** @class */
  function(_super) {
    __extends23(GridColumnMenuWrapper2, _super);
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
        var _a11;
        if (event.keyCode === Keys.tab) {
          var elementToFocus = event.target;
          var parentScroll = elementToFocus && ((_a11 = elementToFocus.closest(".k-grid")) === null || _a11 === void 0 ? void 0 : _a11.getElementsByClassName("k-grid-content")[0]);
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
      var _a11 = this.props, ColumnMenu = _a11.columnMenu, others = __rest7(_a11, ["columnMenu"]);
      var column = this.props.column;
      var localizationService = provideLocalizationService(this);
      var fieldMessage = column.title || column.field;
      var field = fieldMessage ? "".concat(fieldMessage, " ") : "";
      return React39.createElement(
        React39.Fragment,
        null,
        React39.createElement(
          "a",
          { className: "k-grid-header-menu k-grid-column-menu", ref: function(e) {
            return _this._anchor = e;
          }, onClick: this.anchorClick, onMouseDown: this.onAnchorMouseDown, onKeyDown: this.onAnchorKeyDown, href: "#", "aria-label": "".concat(field).concat(localizationService.toLanguageString(columnMenu, messages3[columnMenu])) },
          React39.createElement(IconWrap, { name: "more-vertical", icon: moreVerticalIcon })
        ),
        React39.createElement(
          Popup,
          { anchor: this._anchor, show: this.state.show },
          React39.createElement("div", { ref: function(e) {
            return _this._content = e;
          }, className: "k-grid-columnmenu-popup", tabIndex: 0, onBlur: this.blur, onFocus: this.focus, style: { outline: "none" } }, ColumnMenu && React39.createElement(ColumnMenu, __assign21({}, others, { onCloseMenu: this.closeMenu })))
        )
      );
    };
    return GridColumnMenuWrapper2;
  }(React39.Component)
);

// node_modules/@progress/kendo-react-grid/dist/es/header/GridHeaderCell.js
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
var GridHeaderCell = (
  /** @class */
  function(_super) {
    __extends24(GridHeaderCell2, _super);
    function GridHeaderCell2() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    GridHeaderCell2.prototype.render = function() {
      var columnMenuWrapperProps = this.props.columnMenuWrapperProps;
      var clickProps = this.props.onClick ? {
        onClick: this.props.onClick
      } : {};
      var defaultRendering = React40.createElement(
        "span",
        { className: "k-cell-inner" },
        React40.createElement(
          "span",
          __assign22({ className: classNames("k-link", {
            "!k-cursor-default": !this.props.columnMenuWrapperProps.sortable
          }) }, clickProps),
          React40.createElement("span", { className: "k-column-title" }, this.props.title || this.props.field || "\xA0"),
          this.props.children
        ),
        columnMenuWrapperProps.columnMenu && React40.createElement(GridColumnMenuWrapper, __assign22({}, columnMenuWrapperProps))
      );
      if (this.props.render) {
        return this.props.render.call(void 0, defaultRendering, this.props);
      }
      return defaultRendering;
    };
    return GridHeaderCell2;
  }(React40.Component)
);

// node_modules/@progress/kendo-react-grid/dist/es/header/HeaderRow.js
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
    __extends25(HeaderRow2, _super);
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
          var sortLabel = provideLocalizationService(_this).toLanguageString(sortAriaLabel2, messages3[sortAriaLabel2]);
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
          var headerCell = React41.createElement(HeaderCell, { key: 1, field: column.field, onClick: sortable && function(e) {
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
          var thProps = __assign23(__assign23({}, ariaAttrs), { key, colSpan: column.colSpan, rowSpan: column.rowSpan, className, style, columnId: column.id, navigatable: column.navigatable, onKeyDown: sortable && function(e) {
            return _this.cellKeyDown(e, column);
          } || void 0, role: "columnheader" });
          var content = [
            headerCell,
            _this.props.columnResize && _this.props.columnResize.resizable && column.resizable && React41.createElement(ColumnResizer, { key: 2, resize: function(e, element, end2) {
              return _this.props.columnResize && _this.props.columnResize.dragHandler(e, column, element, end2);
            }, autofit: function(e) {
              return _this.props.columnResize && _this.props.columnResize.dblClickHandler(e, [column.id]);
            } })
          ];
          var customCells = resolveCells(_this.props.cells, column.cells);
          if (customCells && customCells.headerCell) {
            var CustomCell = customCells.headerCell;
            return React41.createElement(CustomCell, { key, thProps, index: columnIndex }, content);
          }
          return React41.createElement(HeaderThElement, __assign23({}, thProps, { key }), content);
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
      var _a11 = normalize3(this.props.sortable || false, column.sortable || false), allowUnsort = _a11.allowUnsort, mode = _a11.mode;
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
        React41.createElement(
          "span",
          { key: 1, className: "k-sort-icon" },
          React41.createElement(IconWrap, { name: "sort-" + this.props.sort[sortIndex].dir + "-small", icon: this.props.sort[sortIndex].dir === "asc" ? sortAscSmallIcon : sortDescSmallIcon })
        ),
        this.props.sort.length > 1 && React41.createElement(
          "span",
          { key: 2, className: "k-sort-icon" },
          React41.createElement("span", { className: "k-sort-order" }, sortIndex + 1)
        )
      ];
    };
    HeaderRow2.prototype.render = function() {
      var _this = this;
      this.serviceIndex = 0;
      this.index = -1;
      return this.props.columnsMap.map(function(rowIndexes, i) {
        return _this.props.pressHandler && React41.createElement(ColumnDraggable, { key: i, pressHandler: _this.props.pressHandler, dragHandler: _this.props.dragHandler, releaseHandler: _this.props.releaseHandler, ariaRowIndex: i + 1, dragClue: _this.props.dragClue, headerRef: _this.props.headerRef, containerRef: _this.props.containerRef }, _this.cells(rowIndexes)) || React41.createElement("tr", { className: "k-table-row", role: "row", "aria-rowindex": i + 1 }, _this.cells(rowIndexes));
      });
    };
    return HeaderRow2;
  }(React41.Component)
);
registerForLocalization(HeaderRow);

// node_modules/@progress/kendo-react-grid/dist/es/header/FilterRow.js
var React43 = __toESM(require_react());

// node_modules/@progress/kendo-react-grid/dist/es/cells/GridFilterCell.js
var React42 = __toESM(require_react());

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
      text: service.toLanguageString(operator.text, messages3[operator.text]),
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
var GridFilterCell = (
  /** @class */
  function(_super) {
    __extends26(GridFilterCell2, _super);
    function GridFilterCell2(props) {
      var _this = _super.call(this, props) || this;
      _this._inputRef = React42.createRef();
      _this.renderOperatorEditor = function(localization) {
        if (_this.props.filterType === "boolean") {
          return;
        }
        var value = _this.props.operators.find(function(item) {
          return item.operator === _this.props.operator;
        }) || null;
        return React42.createElement(DropDownList, { size: _this.props.size, value, onChange: _this.operatorChange, className: "k-dropdown-operator", iconClassName: "k-i-filter k-icon", svgIcon: filterIcon, data: _this.props.operators, textField: "text", title: localization.toLanguageString(filterChooseOperator, messages3[filterChooseOperator]), popupSettings: {
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
      var _a11;
      var localizationService = provideLocalizationService(this);
      var defaultRendering = React42.createElement(
        "div",
        { className: "k-filtercell" },
        React42.createElement(
          "div",
          { className: "k-filtercell-wrapper" },
          this.filterComponent(this.props.filterType, this.props.value, this.props.booleanValues),
          React42.createElement(
            "div",
            { className: "k-filtercell-operator" },
            this.renderOperatorEditor(localizationService),
            "\xA0",
            React42.createElement(Button, { size: this.props.size, icon: "filter-clear", svgIcon: filterClearIcon, className: classNames((_a11 = {}, _a11["k-clear-button-visible"] = Boolean(!(this.props.value === null || this.props.value === "") || this.props.operator), _a11)), title: localizationService.toLanguageString(filterClearButton, messages3[filterClearButton]), type: "button", onClick: this.clear, disabled: !(!(this.props.value === null || this.props.value === "") || this.props.operator) })
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
          return React42.createElement(NumericTextBox, { ref: this._inputRef, size: this.props.size, value, onChange: function(e) {
            _this.inputChange(e.value, e.syntheticEvent);
          }, title: this.props.title, ariaLabel: this.props.ariaLabel });
        case "date":
          return React42.createElement(DatePicker, { ref: this._inputRef, size: this.props.size, value, onChange: function(e) {
            _this.inputChange(e.value, e.syntheticEvent);
          }, title: this.props.title, ariaLabel: this.props.ariaLabel });
        case "boolean":
          var noFilterSet_1 = function(filter) {
            return filter === null || filter === void 0;
          };
          return React42.createElement(DropDownList, { ref: this._inputRef, size: this.props.size, onChange: this.boolDropdownChange, value: booleanValues.find(function(item) {
            return item.operator === (noFilterSet_1(value) ? "" : value);
          }), data: booleanValues, textField: "text", title: this.props.title, ariaLabel: this.props.ariaLabel });
        default:
          return React42.createElement(TextBox, { ref: this._inputRef, size: this.props.size, value: value || "", onChange: function(e) {
            _this.inputChange(e.target.value, e.syntheticEvent);
          }, title: this.props.title, "aria-label": this.props.ariaLabel });
      }
    };
    return GridFilterCell2;
  }(React42.Component)
);
registerForLocalization(GridFilterCell);

// node_modules/@progress/kendo-react-grid/dist/es/header/FilterRow.js
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
var FILTER_ROW_CLASS = "k-table-row k-filter-row";
var FilterRow = (
  /** @class */
  function(_super) {
    __extends27(FilterRow2, _super);
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
        var ariaLabel = column.filterable ? intl.toLanguageString(filterAriaLabel2, messages3[filterAriaLabel2]) : void 0;
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
        var thProps = __assign24({ columnId: tableKeyboardNavigationTools.getFilterColumnId(column.id), navigatable: column.navigatable, style, className: classNames("k-table-th", _this.headerCellClassName(column.field, column.locked) || void 0), role: "columnheader" }, ariaAttrs);
        var content = filterCellProps && (column.filterCell ? React43.createElement(column.filterCell, __assign24({}, filterCellProps)) : React43.createElement(GridFilterCell, __assign24({ size: _this.props.size }, filterCellProps)));
        var customCells = resolveCells(_this.props.cells, column.cells);
        if (customCells && customCells.filterCell) {
          var CustomCell = customCells.filterCell;
          return React43.createElement(CustomCell, __assign24({ key }, filterCellProps, { thProps, index }), content);
        }
        return React43.createElement(HeaderThElement, __assign24({ key }, thProps), content);
      });
      return React43.createElement("tr", { className: FILTER_ROW_CLASS, "aria-rowindex": this.props.ariaRowIndex, role: "row" }, filterCells);
    };
    return FilterRow2;
  }(React43.Component)
);
registerForLocalization(FilterRow);

// node_modules/@progress/kendo-react-grid/dist/es/header/GroupPanel.js
var React45 = __toESM(require_react());

// node_modules/@progress/kendo-react-grid/dist/es/drag/GroupingIndicator.js
var React44 = __toESM(require_react());
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
var GroupingIndicator = (
  /** @class */
  function(_super) {
    __extends28(GroupingIndicator2, _super);
    function GroupingIndicator2() {
      var _this = _super !== null && _super.apply(this, arguments) || this;
      _this.draggable = null;
      _this.onPress = function(data) {
        var element = _this.draggable && _this.draggable.element;
        if (element && _this.props.onPress) {
          _this.props.onPress(data.event, element);
        }
      };
      _this.onDrag = function(data) {
        var element = _this.draggable && _this.draggable.element;
        if (element && _this.props.onDrag) {
          _this.props.onDrag(data.event, element);
        }
      };
      _this.onRelease = function(data) {
        var element = _this.draggable && _this.draggable.element;
        if (element && _this.props.onRelease) {
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
          _this.props.onContextMenu.call(void 0, event, { dataItem: __assign25({}, dataItem) });
        }
      };
      return _this;
    }
    GroupingIndicator2.prototype.render = function() {
      var _this = this;
      var dir = this.props.dir;
      return React44.createElement(
        Draggable,
        { onPress: this.onPress, onDrag: this.onDrag, onRelease: this.onRelease, ref: function(component) {
          _this.draggable = component;
        } },
        React44.createElement(
          "div",
          { className: "k-chip k-chip-md k-chip-solid k-chip-solid-base k-rounded-md", onClick: this.sortChange, onContextMenu: this.onContextMenu, role: "button", style: { touchAction: "none" } },
          React44.createElement(
            "span",
            null,
            React44.createElement(IconWrap, { name: "sort-" + dir + "-small", icon: dir === "asc" ? sortAscSmallIcon : sortDescSmallIcon, size: "small" })
          ),
          React44.createElement("span", { className: "k-chip-content" }, this.props.title),
          React44.createElement(
            "span",
            { className: "k-chip-actions" },
            React44.createElement(
              "span",
              { className: "k-chip-action k-chip-remove-action", onClick: this.groupRemove },
              React44.createElement(IconWrap, { name: "x-circle", icon: xCircleIcon, size: "small" })
            )
          )
        )
      );
    };
    return GroupingIndicator2;
  }(React44.Component)
);
registerForLocalization(GroupingIndicator);

// node_modules/@progress/kendo-react-grid/dist/es/header/GroupPanel.js
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
var GroupPanel = (
  /** @class */
  function(_super) {
    __extends29(GroupPanel2, _super);
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
        return React45.createElement(GroupingIndicator, { key: index, index, dir: groupDesc.dir || "asc", title: _this.props.resolveTitle(groupDesc.field), onRemove: function(event) {
          _this.onGroupRemove(event, index);
        }, onSortChange: function(event, dir) {
          _this.onGroupSortChange(event, index, groupDesc, dir);
        }, onPress: _this.props.pressHandler, onDrag: _this.props.dragHandler, onRelease: _this.props.releaseHandler, onContextMenu: _this.props.onContextMenu });
      });
      return React45.createElement(
        "div",
        { ref: this.props.refCallback, className: "k-grouping-header", role: "toolbar", "aria-label": provideLocalizationService(this).toLanguageString(groupPanelAriaLabel, messages3[groupPanelAriaLabel]), "aria-controls": this.props.ariaControls || "" },
        React45.createElement("div", { className: "k-chip-list k-chip-list-md", role: "none" }, groups),
        React45.createElement(
          "div",
          { className: "k-grouping-drop-container" },
          !groups.length && provideLocalizationService(this).toLanguageString(groupPanelEmpty, messages3[groupPanelEmpty]),
          "\xA0"
        )
      );
    };
    return GroupPanel2;
  }(React45.Component)
);
registerForLocalization(GroupPanel);

// node_modules/@progress/kendo-react-grid/dist/es/footer/Footer.js
var React46 = __toESM(require_react());
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
var Footer = (
  /** @class */
  function(_super) {
    __extends30(Footer2, _super);
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
      var _a11;
      var _this = this;
      if (!this.props.staticHeaders) {
        return React46.createElement("tfoot", { className: "k-table-tfoot" }, this.props.row);
      }
      return React46.createElement(
        "div",
        { className: "k-grid-footer", role: "presentation" },
        React46.createElement(
          "div",
          { ref: function(div) {
            _this.footerWrap = div;
          }, className: "k-grid-footer-wrap", style: this.scrollbarWidth ? {} : { borderWidth: 0 }, role: "presentation" },
          React46.createElement(
            "table",
            { ref: function(table) {
              _this.table = table;
            }, className: classNames("k-table k-grid-footer-table", (_a11 = {
              "k-table-md": !this.props.size
            }, _a11["k-table-".concat(kendoThemeMaps.sizeMap[this.props.size] || this.props.size)] = this.props.size, _a11), this.props.className), role: "presentation" },
            React46.createElement("colgroup", { ref: function(e) {
              _this.props.columnResize.colGroupFooter = e;
            }, role: "presentation" }, this.props.cols),
            React46.createElement("tfoot", { className: "k-table-tfoot", role: "presentation" }, this.props.row)
          )
        )
      );
    };
    return Footer2;
  }(React46.Component)
);

// node_modules/@progress/kendo-react-grid/dist/es/VirtualScroll.js
var React47 = __toESM(require_react());
var VirtualScroll = (
  /** @class */
  function() {
    function VirtualScroll2(cached) {
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
      this.tableBodyRef = React47.createRef();
      this.fixedScroll = false;
      this.askedSkip = void 0;
      this.containerRef = React47.createRef();
      this.tableTransform = "";
      this.prevScrollPos = 0;
      this.tableTranslate = 0;
      this.scrollSyncing = false;
      this.reactVersion = Number.parseFloat(React47.version);
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
    Object.defineProperty(VirtualScroll2.prototype, "container", {
      get: function() {
        return this.containerRef.current;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(VirtualScroll2.prototype, "rowHeights", {
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
    VirtualScroll2.prototype.changePage = function(skip, e) {
      this.attendedSkip = skip - this.topCacheCount;
      if (this.PageChange) {
        this.PageChange({
          skip: Math.max(0, skip - this.topCacheCount),
          take: this.pageSize
        }, e);
      }
    };
    VirtualScroll2.prototype.translate = function(dY, forceSet) {
      this.tableTranslate = dY;
      if (this.scrollableVirtual && this.table) {
        if (this.reactVersion <= 17 || forceSet) {
          this.table.style.transform = "translateY(" + dY + "px)";
        } else {
          this.tableTransform = "translateY(" + dY + "px)";
        }
      }
    };
    VirtualScroll2.prototype.reset = function() {
      this.scrollSyncing = true;
      if (this.fixedScroll) {
        return;
      }
      if (this.container) {
        this.container.scrollTop = 0;
      }
      this.translate(0, true);
    };
    VirtualScroll2.prototype.localScrollUp = function(e) {
      if (!this.container) {
        return;
      }
      var heights = this.rowHeights;
      var scrollTop = this.container.scrollTop;
      var targetTranslate = this.tableTranslate;
      var rowsCount = 0;
      var _a11 = this.topItems(heights, Boolean(this.topCacheCount)), topItemsCount = _a11.topItemsCount, topItemsHeight = _a11.topItemsHeight, itemsNeededOnScreen = _a11.itemsNeededOnScreen;
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
    VirtualScroll2.prototype.localScrollDown = function(e) {
      if (!this.container) {
        return;
      }
      var heights = this.rowHeights;
      var scrollTop = this.container.scrollTop;
      var targetTranslate = this.tableTranslate;
      var rowsCount = 0;
      var _a11 = this.topItems(heights, Boolean(this.topCacheCount)), topItemsCount = _a11.topItemsCount, topItemsHeight = _a11.topItemsHeight, itemsNeededOnScreen = _a11.itemsNeededOnScreen;
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
    VirtualScroll2.prototype.scrollNonStrict = function(e) {
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
      var _a11 = this.topItems(heights, Boolean(this.topCacheCount)), topItemsCount = _a11.topItemsCount, topItemsHeight = _a11.topItemsHeight;
      this.translate(Math.max(0, microAdjust - topItemsHeight - this.horizontalScrollbarHeight() + this.containerHeight * floatRowIndex / this.total));
      this.changePage(rowIndex - topItemsCount, e);
    };
    VirtualScroll2.prototype.scrollHandler = function(e) {
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
    return VirtualScroll2;
  }()
);

// node_modules/@progress/kendo-react-grid/dist/es/VirtualScrollFixed.js
var React48 = __toESM(require_react());
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
      this.tableBodyRef = React48.createRef();
      this.fixedScroll = false;
      this.askedSkip = void 0;
      this.containerRef = React48.createRef();
      this.tableTransform = "";
      this.scrollSyncing = false;
      this.lastLoaded = 0;
      this.firstLoaded = 0;
      this.lastScrollTop = 0;
      this.reactVersion = Number.parseFloat(React48.version);
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
    ColumnResize2.prototype.updateNextLockedCol = function(element, current, deltaWidth) {
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
          var allColumnEls = element === null || element === void 0 ? void 0 : element.querySelectorAll('[aria-colindex="' + nColumn.ariaColumnIndex + '"]');
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
var React49 = __toESM(require_react());
var CommonDragLogic = (
  /** @class */
  function() {
    function CommonDragLogic2(columnReorder, groupReorder, columnToGroup) {
      var _this = this;
      this.refDragElementClue = React49.createRef();
      this.refDropElementClue = React49.createRef();
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
      this.pressHandler = function(event, element) {
        var startColumn = _this.getColumnIndex(event, element);
        _this.startGroup = _this.getGroupIndex(event);
        if (startColumn >= 0) {
          var col = _this.columns[startColumn];
          if (col.reorderable && _this.reorderable || col.groupable && _this.groupable) {
            _this.startColumn = startColumn;
          }
        }
      };
      this.dragHandler = function(event, element) {
        if (!event.isTouch) {
          event.originalEvent.preventDefault();
        }
        event.originalEvent.stopPropagation();
        if (_this.startColumn === -1 && _this.startGroup === -1) {
          return;
        }
        _this.currentColumn = _this.getColumnIndex(event, element);
        var groupPanelChildren = _this.groupPanelDivElement && _this.groupPanelDivElement.children;
        _this.currentGroup = _this.isTargetGroupingContainer(event) ? groupPanelChildren && groupPanelChildren.length ? groupPanelChildren.length : 0 : _this.getGroupIndex(event);
        var invalidIndex = !_this.isValid();
        if (invalidIndex) {
          _this.currentColumn = -1;
          _this.currentGroup = -1;
        }
        var targetElement = _this.currentColumn >= 0 ? element.children[_this.columns[_this.currentColumn].index] : _this.isTargetGroupingContainer(event) ? event.originalEvent.target : _this.groupPanelDivElement && _this.groupPanelDivElement.children[_this.currentGroup];
        _this.updateDragElementClue(event, element, targetElement, invalidIndex);
        _this.updateDropElementClue(event, element, targetElement, invalidIndex);
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
    CommonDragLogic2.prototype.updateDragElementClue = function(event, element, targetElement, invalidIndex) {
      if (!this.dragElementClue) {
        return;
      }
      var innerText = this.startColumn >= 0 ? element.children[this.columns[this.startColumn].index].innerText : element.innerText;
      this.dragElementClue.setState({
        visible: true,
        top: event.pageY + 10,
        left: event.pageX,
        innerText,
        status: invalidIndex || !targetElement ? "k-i-cancel" : "k-i-plus"
      });
    };
    CommonDragLogic2.prototype.updateDropElementClue = function(event, element, targetElement, invalidIndex) {
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
        height: this.currentColumn >= 0 ? element.clientHeight : rectParent.height
      });
    };
    return CommonDragLogic2;
  }()
);

// node_modules/@progress/kendo-react-grid/dist/es/cells/GridCell.js
var React50 = __toESM(require_react());
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
var GridCell = function(props) {
  var _a11;
  var defaultRendering = null;
  var intl = useInternationalization();
  var navigationAttributes = useTableKeyboardNavigation(props.id);
  var onContextMenu = React50.useCallback(function(event) {
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
    defaultRendering = React50.createElement("td", __assign26({}, tdProps));
  } else if (props.rowType !== "groupHeader") {
    if (props.field !== void 0) {
      var data = getNestedValue(props.field, props.dataItem);
      if (data !== void 0 && data !== null) {
        content = props.format ? intl.format(props.format, data) : data.toString();
      }
    }
    var className = classNames("k-table-td", props.className, { "k-selected": props.isSelected });
    tdProps = __assign26((_a11 = { onContextMenu, colSpan: props.colSpan, style: props.style, className, role: "gridcell", "aria-colindex": props.ariaColumnIndex, "aria-selected": props.isSelected }, _a11[GRID_COL_INDEX_ATTRIBUTE] = props.columnIndex, _a11), navigationAttributes);
    defaultRendering = React50.createElement("td", __assign26({}, tdProps), content);
  }
  var rowTypeSetting = props.rowType || "data";
  var customCells = props.cells;
  if (customCells && customCells[rowTypeSetting]) {
    var CustomCell = customCells[rowTypeSetting];
    return React50.createElement(CustomCell, __assign26({}, props, { tdProps }), content);
  }
  return props.render ? props.render.call(void 0, defaultRendering, props) : defaultRendering;
};

// node_modules/@progress/kendo-react-grid/dist/es/cells/GridGroupCell.js
var React51 = __toESM(require_react());
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
var GridGroupCell = function(props) {
  var defaultRendering = null;
  var columnIndex = props.columnIndex, level = props.level, columnsCount = props.columnsCount, rowType = props.rowType, dataItem = props.dataItem, field = props.field, onChange = props.onChange, expanded = props.expanded, render = props.render, dataIndex = props.dataIndex, ariaColumnIndex = props.ariaColumnIndex, isRtl2 = props.isRtl;
  var definedField = field || "";
  var navigationAttributes = useTableKeyboardNavigation(props.id);
  var localization = useLocalization();
  var tdProps = null;
  var td2Props = null;
  var content = null;
  var onKeyDownHandler = React51.useCallback(function(event) {
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
  var onContextMenu = React51.useCallback(function(event) {
    if (props.onContextMenu) {
      props.onContextMenu.call(void 0, event, props.dataItem, props.field);
    }
  }, [props.onContextMenu, props.dataItem, props.field]);
  var renderCellCollapse = function(colspan, styles) {
    var _a11;
    var baseMessage = expanded ? groupCollapse : groupExpand;
    var message = localization.toLanguageString(baseMessage, messages3[baseMessage]);
    tdProps = __assign27((_a11 = { className: "k-table-td", style: __assign27(__assign27({}, props.style), styles), colSpan: colspan, key: "g-colspan", role: "gridcell" }, _a11["aria-selected"] = false, _a11["aria-expanded"] = expanded, _a11["aria-colindex"] = ariaColumnIndex, _a11.onKeyDown = onKeyDownHandler, _a11.onContextMenu = onContextMenu, _a11), navigationAttributes);
    content = React51.createElement(
      "p",
      { className: "k-reset" },
      React51.createElement(
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
        React51.createElement(IconWrap, { name: expanded ? "caret-alt-down" : isRtl2 ? "caret-alt-left" : "caret-alt-right", icon: expanded ? caretAltDownIcon : isRtl2 ? caretAltLeftIcon : caretAltRightIcon })
      ),
      dataItem[definedField] instanceof Date && dataItem[definedField].toString ? dataItem[definedField].toString() : dataItem[definedField]
    );
    return React51.createElement("td", __assign27({}, tdProps), content);
  };
  if (columnIndex === void 0 || level === void 0 || columnIndex < level || columnsCount === void 0 || rowType !== "groupHeader" || dataItem[definedField] === void 0) {
    tdProps = {
      style: props.style,
      key: "g" + columnIndex,
      className: classNames("k-table-td", "k-group-cell", { "k-grid-content-sticky": props.locked }),
      role: "gridcell",
      onContextMenu
    };
    defaultRendering = React51.createElement("td", __assign27({}, tdProps));
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
    defaultRendering = React51.createElement(
      React51.Fragment,
      null,
      renderCellCollapse(0, { position: "sticky", zIndex: 2 }),
      React51.createElement("td", __assign27({}, td2Props))
    );
  }
  var rowTypeSetting = props.rowType || "data";
  var customCells = props.cells;
  if (customCells && customCells.group && customCells.group[rowTypeSetting]) {
    var CustomCell = customCells.group[rowTypeSetting];
    return React51.createElement(CustomCell, __assign27({}, props, { tdProps, td2Props }), content);
  }
  return render ? render.call(void 0, defaultRendering, props) : defaultRendering;
};

// node_modules/@progress/kendo-react-grid/dist/es/rows/GridRow.js
var React52 = __toESM(require_react());
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
var GridRow = (
  /** @class */
  function(_super) {
    __extends31(GridRow2, _super);
    function GridRow2() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    GridRow2.prototype.render = function() {
      var _a11;
      var className = classNames("k-table-row", {
        "k-grouping-row": this.props.rowType === "groupHeader",
        "k-group-footer": this.props.rowType === "groupFooter",
        "k-master-row": this.props.rowType !== "groupHeader" && this.props.rowType !== "groupFooter",
        "k-table-alt-row k-alt": this.props.rowType !== "groupHeader" && this.props.rowType !== "groupFooter" && this.props.isAltRow,
        "k-selected": this.props.isSelected,
        "k-grid-edit-row": this.props.isInEdit
      });
      var defaultRendering = React52.createElement("tr", __assign28({ id: this.props.id, onClick: this.props.onClick, onDoubleClick: this.props.onDoubleClick, className, style: {
        height: this.props.rowHeight ? this.props.rowHeight + "px" : "",
        visibility: this.props.isHidden ? "hidden" : ""
      }, role: "row", "aria-rowindex": this.props.ariaRowIndex, "absolute-row-index": this.props.absoluteRowIndex, key: this.props.absoluteRowIndex }, (_a11 = {}, _a11[GRID_ROW_INDEX_ATTRIBUTE] = this.props.rowType === "data" ? this.props.dataIndex : void 0, _a11)), this.props.children);
      return this.props.render ? this.props.render.call(void 0, defaultRendering, this.props) : defaultRendering;
    };
    return GridRow2;
  }(React52.Component)
);

// node_modules/@progress/kendo-react-grid/dist/es/header/GridHeaderSelectionCell.js
var React53 = __toESM(require_react());
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
var GridHeaderSelectionCell = (
  /** @class */
  function(_super) {
    __extends32(GridHeaderSelectionCell2, _super);
    function GridHeaderSelectionCell2() {
      var _this = _super !== null && _super.apply(this, arguments) || this;
      _this._inputId = guid();
      return _this;
    }
    GridHeaderSelectionCell2.prototype.render = function() {
      var _this = this;
      var columnMenuWrapperProps = this.props.columnMenuWrapperProps;
      var defaultRendering = [
        React53.createElement("input", { key: 0, checked: this.props.selectionValue, id: this._inputId, type: "checkbox", className: "k-checkbox k-checkbox-md k-rounded-md", onChange: function(e) {
          return _this.props.selectionChange({
            field: _this.props.field,
            syntheticEvent: e
          });
        } }),
        React53.createElement("label", { key: 1, className: "k-checkbox-label", htmlFor: this._inputId }),
        columnMenuWrapperProps.columnMenu && React53.createElement(GridColumnMenuWrapper, __assign29({}, columnMenuWrapperProps))
      ];
      return this.props.render ? this.props.render.call(void 0, defaultRendering, this.props) : defaultRendering;
    };
    return GridHeaderSelectionCell2;
  }(React53.Component)
);

// node_modules/@progress/kendo-react-grid/dist/es/GridNoRecords.js
var React54 = __toESM(require_react());
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
var GridNoRecords = (
  /** @class */
  function(_super) {
    __extends33(GridNoRecords2, _super);
    function GridNoRecords2() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    GridNoRecords2.prototype.render = function() {
      return this.props.children || provideLocalizationService(this).toLanguageString(noRecords, messages3[noRecords]);
    };
    GridNoRecords2.displayName = "KendoReactGridNoRecords";
    return GridNoRecords2;
  }(React54.Component)
);
registerForLocalization(GridNoRecords);

// node_modules/@progress/kendo-react-grid/dist/es/footer/FooterRow.js
var React55 = __toESM(require_react());
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
var FooterRow = (
  /** @class */
  function(_super) {
    __extends34(FooterRow2, _super);
    function FooterRow2() {
      var _this = _super !== null && _super.apply(this, arguments) || this;
      _this._element = null;
      _this.renderCell = function(column, index) {
        var _a11;
        var tdProps = (_a11 = {
          colSpan: column.colSpan !== 1 ? column.colSpan : void 0,
          style: column.left !== void 0 ? !_this.props.isRtl ? { left: column.left, right: column.right } : { left: column.right, right: column.left } : {},
          className: classNames("k-table-td", column.locked && column.left !== void 0 ? "k-grid-footer-sticky" : ""),
          key: index,
          role: "gridcell"
        }, _a11["aria-colindex"] = column.ariaColumnIndex, _a11);
        var cellProps = __assign30({ field: column.field, ariaColumnIndex: column.ariaColumnIndex }, tdProps);
        var customCells = resolveCells(_this.props.cells, column.cells);
        if (customCells && customCells.footerCell) {
          var CustomCell = customCells.footerCell;
          return React55.createElement(CustomCell, __assign30({}, cellProps, { tdProps, index }));
        }
        return column.footerCell && React55.createElement(column.footerCell, __assign30({}, cellProps, { key: index })) || React55.createElement("td", __assign30({}, tdProps));
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
      return React55.createElement("tr", { className: "k-table-row", role: "row", "aria-rowindex": this.props.ariaRowIndex }, footerColumns(this.props.columns).map(this.renderCell));
    };
    return FooterRow2;
  }(React55.Component)
);

// node_modules/@progress/kendo-react-grid/dist/es/paging/GridPagerSettings.js
var normalizeSettings = function(_a11) {
  var _b3 = _a11.buttonCount, buttonCount = _b3 === void 0 ? 10 : _b3, _c5 = _a11.info, info = _c5 === void 0 ? true : _c5, _d = _a11.type, type = _d === void 0 ? "numeric" : _d, _e = _a11.pageSizes, pageSizes = _e === void 0 ? void 0 : _e, _f = _a11.previousNext, previousNext = _f === void 0 ? true : _f, _g = _a11.responsive, responsive = _g === void 0 ? void 0 : _g, _h = _a11.pageSizeValue, pageSizeValue = _h === void 0 ? void 0 : _h;
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
var packageMetadata3 = {
  name: "@progress/kendo-react-grid",
  productName: "KendoReact",
  productCodes: ["KENDOUIREACT", "KENDOUICOMPLETE"],
  publishDate: 1700064650,
  version: "",
  licensingDocsUrl: "https://www.telerik.com/kendo-react-ui/my-license/?utm_medium=product&utm_source=kendoreact&utm_campaign=kendo-ui-react-purchase-license-keys-warning"
};

// node_modules/@progress/kendo-react-grid/dist/es/cells/GridDetailCell.js
var React56 = __toESM(require_react());
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
var GridDetailCell = function(props) {
  var colSpan = props.colSpan, ariaColIndex = props.ariaColIndex, dataItem = props.dataItem, dataIndex = props.dataIndex, id = props.id;
  var navigationAttributes = useTableKeyboardNavigation(id);
  var onContextMenu = React56.useCallback(function(event) {
    if (props.onContextMenu) {
      props.onContextMenu.call(void 0, event, props.dataItem);
    }
  }, [props.onContextMenu, props.dataItem]);
  return React56.createElement(
    "td",
    __assign31({ onContextMenu, className: "k-table-td k-detail-cell", colSpan, "aria-colindex": ariaColIndex, role: "gridcell" }, navigationAttributes),
    React56.createElement(props.detail, { dataItem, dataIndex })
  );
};

// node_modules/@progress/kendo-react-grid/dist/es/cells/GridDetailHierarchyCell.js
var React57 = __toESM(require_react());
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
var GridDetailHierarchyCell = function(props) {
  var navigationAttributes = useTableKeyboardNavigation(props.id);
  return React57.createElement("td", __assign32({ className: "k-table-td k-hierarchy-cell" }, navigationAttributes, { role: "gridcell" }));
};

// node_modules/@progress/kendo-react-grid/dist/es/Grid.js
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
var Grid = (
  /** @class */
  function(_super) {
    __extends35(Grid2, _super);
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
      _this.headerRef = React58.createRef();
      _this.headerElementRef = React58.createRef();
      _this._element = null;
      _this.tableElement = null;
      _this.containerRef = React58.createRef();
      _this.tableBodyRef = React58.createRef();
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
        var element = _this.element;
        if (_this.observer && element) {
          _this.observer.disconnect();
          var target = element.querySelector('[absolute-row-index="'.concat(rowIndex, '"]'));
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
          return VirtualScroll;
        }
        return VirtualScrollFixed;
      };
      _this.isAllData = function() {
        var _a11 = _this.props, data = _a11.data, total = _a11.total;
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
          var _a11 = _this.props, _b3 = _a11.rowHeight, rowHeight = _b3 === void 0 ? 0 : _b3, detail = _a11.detail, expandField = _a11.expandField;
          var _c5 = _this.props.detailRowHeight, detailRowHeight = _c5 === void 0 ? 0 : _c5;
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
          var _a11 = getSelectionOptions(_this.props.selectable), mode = _a11.mode, cell = _a11.cell;
          var ev = __assign33({ dataItems: _this.getLeafDataItems(), mode, cell, componentId: _this._gridId, selectedField: _this.props.selectedField }, _this.getArguments(event));
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
          var ev = __assign33({ focusElement: options.focusElement }, _this.getArguments(options.event));
          _this.props.onNavigationAction.call(void 0, ev);
        }
      };
      _this.rowClick = function(e, item) {
        if (_this.props.onRowClick && e.target.nodeName === "TD") {
          _this.props.onRowClick.call(void 0, __assign33({ dataItem: item.dataItem }, _this.getArguments(e)));
        }
      };
      _this.rowDblClick = function(e, item) {
        if (_this.props.onRowDoubleClick && e.target.nodeName === "TD") {
          _this.props.onRowDoubleClick.call(void 0, __assign33({ dataItem: item.dataItem }, _this.getArguments(e)));
        }
      };
      _this.itemChange = function(event) {
        var itemChange = _this.props.onItemChange;
        if (event.field === _this.props.expandField || _this.props.group && event.field === void 0) {
          var expandChange = _this.props.onExpandChange;
          if (expandChange) {
            expandChange.call(void 0, __assign33(__assign33({}, _this.getArguments(event.syntheticEvent)), { dataItem: event.dataItem, dataIndex: event.dataIndex, value: event.value }));
          }
          return;
        }
        if (itemChange) {
          itemChange.call(void 0, __assign33(__assign33({}, _this.getArguments(event.syntheticEvent)), { dataItem: event.dataItem, field: event.field, value: event.value }));
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
          var selectionEvent = __assign33({ syntheticEvent: void 0, target: _this, selectedField: _this.props.selectedField || "", componentId: _this._gridId, dataItems: _this.getLeafDataItems(), dataItem: null }, event);
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
        _this.raiseDataEvent(_this.props.onSortChange, { sort }, __assign33({ sort }, _this.props.scrollable === "virtual" ? { skip: 0 } : {}), syntheticEvent);
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
        return React58.Children.toArray(children);
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
          columns.unshift(__assign33(__assign33({}, defaultServiceProps), { cell: GridHierarchyCell, field: _this.props.expandField, headerClassName: "k-hierarchy-cell k-header", id: tableKeyboardNavigationTools.generateNavigatableId("".concat(_this._columns.length), idPrefix, "column") }));
          columnIndexOffset++;
        }
        for (var i = 0; i < groupCount; i++) {
          columns.unshift(__assign33(__assign33({}, defaultServiceProps), { isAccessible: false, cell: GridGroupCell, field: "value", locked: _this.props.lockGroups }));
          columnIndexOffset++;
        }
        columns.slice(columnIndexOffset).forEach(function(c) {
          return c.parentIndex >= 0 && (c.parentIndex += columnIndexOffset);
        });
      });
      _this.getHeaderRow = memoizeOne(function(sort, sortable, group, groupable2, filter, filterable, filterOperators, headerCellRender, columnMenu2, columns, columnsMap, isHeaderRtl) {
        return React58.createElement(HeaderRow, { cells: _this.props.cells, sort, sortable, sortChange: _this.sortChange, group: group || [], groupable: groupable2, groupChange: _this.groupChange, filter, filterable, filterOperators, filterChange: _this.filterChange, columnMenu: columnMenu2, selectionChange: _this.onHeaderSelectionChange, columns, columnResize: _this.columnResize, pressHandler: _this.dragLogic.pressHandler, dragHandler: _this.dragLogic.dragHandler, releaseHandler: _this.dragLogic.releaseHandler, columnsMap, cellRender: headerCellRender, isRtl: isHeaderRtl, dragClue: _this.dragLogic.dragClueRef, headerRef: _this.headerElementRef, containerRef: _this.containerRef });
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
      validatePackage(packageMetadata3);
      _this.showLicenseWatermark = shouldShowValidationUI(packageMetadata3);
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
      var _a11, _b3, _c5, _d;
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
          return React58.cloneElement(child, __assign33(__assign33({}, child.props), { ariaControls: _this._gridRoleElementId }));
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
      var groupingPanel = groupable && React58.createElement(GroupPanel, { group: this.props.group || [], groupChange: this.groupChange, pressHandler: this.dragLogic.pressHandler, dragHandler: this.dragLogic.dragHandler, releaseHandler: this.dragLogic.releaseHandler, refCallback: this.dragLogic.refGroupPanelDiv, resolveTitle: this.resolveTitle, ariaControls: this._gridRoleElementId, onContextMenu: this.onContextMenu });
      var _g = this.props, sort = _g.sort, sortable = _g.sortable, group = _g.group, filter = _g.filter, filterable = _g.filterable, _h = _g.filterOperators, filterOperators = _h === void 0 ? operators : _h, headerCellRender = _g.headerCellRender, columnMenu2 = _g.columnMenu;
      var header = React58.createElement(Header2, { size: this.props.size, columnResize: this.columnResize, staticHeaders: this.props.scrollable !== "none", scrollableDataElement: function() {
        return _this.vs.container;
      }, draggable: this.props.reorderable || groupable, ref: this.headerRef, elemRef: this.headerElementRef, headerRow: this.getHeaderRow(sort, sortable, group, groupable, filter, filterable, filterOperators, headerCellRender, columnMenu2, this._columns, this._columnsMap, this.isRtl), filterRow: this.props.filterable && React58.createElement(FilterRow, { cells: this.props.cells, size: this.props.size, columns: this._columns, filter: this.props.filter, filterOperators: this.props.filterOperators || operators, filterChange: this.filterChange, sort: this.props.sort, cellRender: this.props.filterCellRender, isRtl: this.isRtl, ariaRowIndex: this._columnsMap.length + 1 }) || void 0, cols: leafColumns.map(function(column, index) {
        return React58.createElement("col", { key: index.toString(), width: getColumnWidth2(column) });
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
            return React58.createElement(Cell, { onContextMenu: _this.onContextMenu, key: columnKey, locked: _this.props.lockGroups, id: tableKeyboardNavigationTools.generateNavigatableId("".concat(rowId, "-").concat(String(columnIndex)), idPrefix), colSpan: colSpans[columnIndex], dataItem: item2.dataItem, field: column.field, editor: column.editor, format: column.format, className, render: _this.props.cellRender, cells: resolveCells(_this.props.cells, column.cells), onChange: _this.itemChange, selectionChange: _this.props.onSelectionChange ? function(e) {
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
          body.push(React58.createElement(GridRow, { key: rowId, dataItem: item2.dataItem, isAltRow: isAlt, isInEdit: gridRow.isInEdit, rowType: item2.rowType, isHidden: hidden(rowIndex), onClick: function(e) {
            return _this.rowClick(e, item2);
          }, onDoubleClick: function(e) {
            return _this.rowDblClick(e, item2);
          }, selectedField: _this.props.selectedField, rowHeight: _this.props.rowHeight, render: _this.props.rowRender, ariaRowIndex: currentAriaRowIndex, absoluteRowIndex: absoluteIndex, dataIndex: dataIndex_1, isSelected: gridRow.isSelected }, gridRow.row));
          if (_this.props.detail && item2.rowType === "data" && item2.expanded) {
            var detailColspan = leafColumns.length - (_this.props.expandField ? 1 : 0) - (_this.props.group ? _this.props.group.length : 0) || 1;
            detailRowCount_1++;
            currentAriaRowIndex = absoluteIndex + rowIndexStart + detailRowCount_1;
            body.push(React58.createElement(
              "tr",
              { key: detailRowId, className: classNames("k-table-row", isAlt ? "k-detail-row k-table-alt-row k-alt" : "k-detail-row"), style: { visibility: hidden(rowIndex) ? "hidden" : "", height: _this.props.detailRowHeight }, role: "row", "aria-rowindex": currentAriaRowIndex },
              _this.props.group && _this.props.group.map(function(gr, idx) {
                var _a12;
                var columnStyle = (_a12 = gridRow === null || gridRow === void 0 ? void 0 : gridRow.row[idx]) === null || _a12 === void 0 ? void 0 : _a12.props.style;
                var style = columnStyle ? !_this.isRtl ? { left: columnStyle.left, right: columnStyle.right } : { left: columnStyle.right, right: columnStyle.left } : {};
                return React58.createElement(GridGroupCell, { id: "", dataIndex: item2.dataIndex, field: gr.field, dataItem: item2.dataItem, key: idx, style, ariaColumnIndex: 1 + idx, isSelected: false, locked: _this.props.lockGroups, isRtl: _this.isRtl, cells: _this.props.cells });
              }),
              _this.props.expandField && React58.createElement(GridDetailHierarchyCell, { id: tableKeyboardNavigationTools.generateNavigatableId("".concat(detailRowId, "-dhcell"), idPrefix) }),
              React58.createElement(GridDetailCell, { onContextMenu: _this.onContextMenu, dataItem: item2.dataItem, dataIndex: item2.dataIndex, colSpan: detailColspan, ariaColIndex: 2 + (_this.props.group ? _this.props.group.length : 0), detail: _this.props.detail, id: tableKeyboardNavigationTools.generateNavigatableId("".concat(detailRowId, "-dcell"), idPrefix) })
            ));
          }
        });
      } else {
        body.push(React58.createElement(
          "tr",
          { key: "no-records", className: "k-table-row k-grid-norecords", role: "row", "aria-rowindex": rowIndexStart },
          React58.createElement("td", { className: "k-table-td", colSpan: leafColumns.length, role: "gridcell" }, noRecords2.length ? noRecords2 : React58.createElement(GridNoRecords, null))
        ));
      }
      var pagerProps = __assign33({ size: this.props.size, onPageChange: this.pagerPageChange, total, dir: this.isRtl ? "rtl" : void 0, skip: this.vs.propsSkip || 0, take: (this.props.take !== void 0 ? this.props.take : this.props.pageSize) || 10, messagesMap: pagerMessagesMap }, normalize4(this.props.pageable || {}));
      var pager = this.props.pager ? React58.createElement(this.props.pager, __assign33({}, pagerProps)) : React58.createElement(Pager, __assign33({ className: "k-grid-pager" }, pagerProps));
      var sorted = function(field) {
        return _this.props.sort && _this.props.sort.filter(function(descriptor) {
          return descriptor.field === field;
        }).length > 0;
      };
      var footerCols = function(column, index) {
        return React58.createElement("col", { key: index.toString(), width: getColumnWidth2(column) });
      };
      var footer = Boolean((_e = this.props.cells) === null || _e === void 0 ? void 0 : _e.footerCell) || this._columns.some(function(c) {
        var _a12;
        return Boolean(c.footerCell || Boolean((_a12 = c.cells) === null || _a12 === void 0 ? void 0 : _a12.footerCell));
      }) ? React58.createElement(Footer, { size: this.props.size, columnResize: this.columnResize, staticHeaders: this.props.scrollable !== "none", ref: function(f) {
        return _this._footer = f;
      }, row: React58.createElement(FooterRow, { cells: this.props.cells, columns: this._columns, isRtl: this.isRtl, ariaRowIndex: currentAriaRowIndex + 1 }), cols: leafColumns.map(footerCols) }) : null;
      var colGroups = React58.createElement("colgroup", { ref: function(c) {
        _this.columnResize.colGroupMain = c;
      } }, leafColumns.map(function(column, index) {
        return React58.createElement("col", { key: index.toString(), className: sorted(column.field) ? "k-sorted" : void 0, width: getColumnWidth2(column) });
      }));
      var enableDragClues = this.dragLogic.reorderable || this.dragLogic.groupable;
      var tableDisplay = this.props.columnVirtualization ? "block" : "table";
      if (this.props.scrollable === "none") {
        return React58.createElement(
          TableKeyboardNavigationContext.Provider,
          { value: this.contextStateRef.current },
          React58.createElement(
            "div",
            __assign33({ id: this.props.id, style: this.props.style, className: classNames("k-grid", (_a11 = {
              "k-grid-md": !this.props.size
            }, _a11["k-grid-".concat(kendoThemeMaps.sizeMap[this.props.size] || this.props.size)] = this.props.size, _a11), this.props.className), ref: function(el) {
              _this._element = el;
            }, "aria-label": this.props.ariaLabel, onKeyDown: this.onKeyDown, onFocus: this.onFocus }, tableKeyboardNavigationScopeAttributes),
            toolbar,
            groupingPanel,
            React58.createElement(
              TableSelection,
              { selectable: this.props.selectable, onRelease: this.selectionRelease, childRef: function(table) {
                _this.tableElement = table;
              } },
              React58.createElement(
                "table",
                { className: classNames("k-table k-grid-table", (_b3 = {}, _b3["k-table-".concat(kendoThemeMaps.sizeMap[this.props.size] || this.props.size)] = this.props.size, _b3)), style: { userSelect: tableUserSelect, display: tableDisplay } },
                colGroups,
                header,
                React58.createElement("tbody", __assign33({ role: "rowgroup", className: "k-table-tbody" }, tableKeyboardNavigationBodyAttributes), body),
                footer
              )
            ),
            enableDragClues && React58.createElement(
              React58.Fragment,
              null,
              React58.createElement(DropClue, { ref: this.dragLogic.refDropElementClue }),
              React58.createElement(DragClue, { ref: this.dragLogic.refDragElementClue })
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
      return React58.createElement(
        TableKeyboardNavigationContext.Provider,
        { value: this.contextStateRef.current },
        React58.createElement(
          "div",
          __assign33({ id: this.props.id, style: wrapperStyle, className: classNames("k-grid", (_c5 = {
            "k-grid-md": !this.props.size
          }, _c5["k-grid-".concat(kendoThemeMaps.sizeMap[this.props.size] || this.props.size)] = this.props.size, _c5["k-grid-virtual"] = this.props.scrollable === "virtual", _c5), this.props.className), ref: function(el) {
            _this._element = el;
          }, "aria-label": this.props.ariaLabel, onKeyDown: this.onKeyDown, onFocus: this.onFocus }, tableKeyboardNavigationScopeAttributes),
          toolbar,
          groupingPanel,
          React58.createElement(
            "div",
            { className: "k-grid-aria-root", role: "grid", "aria-colcount": leafColumns.length, "aria-rowcount": total, id: this._gridRoleElementId },
            header,
            React58.createElement(
              "div",
              { className: "k-grid-container", role: "presentation" },
              React58.createElement(
                "div",
                { ref: this.containerRef, className: "k-grid-content k-virtual-content", onScroll: this.scrollHandler, role: "presentation" },
                React58.createElement(
                  "div",
                  { className: "k-grid-table-wrap", role: "presentation" },
                  React58.createElement(
                    TableSelection,
                    { selectable: this.props.selectable, onRelease: this.selectionRelease, childRef: function(table) {
                      _this.tableElement = table;
                    } },
                    React58.createElement(
                      "table",
                      { className: classNames("k-table k-grid-table", (_d = {
                        "k-table-md": !this.props.size
                      }, _d["k-table-".concat(kendoThemeMaps.sizeMap[this.props.size] || this.props.size)] = this.props.size, _d)), role: "presentation", style: { userSelect: tableUserSelect, display: tableDisplay } },
                      colGroups,
                      React58.createElement("tbody", __assign33({ className: "k-table-tbody", ref: this.tableBodyRef, role: "rowgroup" }, tableKeyboardNavigationBodyAttributes), body)
                    )
                  )
                ),
                React58.createElement(
                  "div",
                  { className: "k-height-container", role: "presentation" },
                  React58.createElement("div", { style: this.props.scrollable === "virtual" ? { "height": this.vs.containerHeight + "px" } : {} })
                )
              )
            ),
            footer,
            enableDragClues && React58.createElement(
              React58.Fragment,
              null,
              React58.createElement(DropClue, { ref: this.dragLogic.refDropElementClue }),
              React58.createElement(DragClue, { ref: this.dragLogic.refDragElementClue })
            ),
            this.showLicenseWatermark && React58.createElement(WatermarkOverlay, null)
          ),
          statusBar,
          this.props.pageable && pager
        )
      );
    };
    Grid2.prototype.selectionChange = function(options) {
      if (this.props.onSelectionChange) {
        var event_1 = options.event, dataItem = options.dataItem, dataIndex = options.dataIndex, columnIndex = options.columnIndex;
        var _a11 = getSelectionOptions(this.props.selectable), mode = _a11.mode, cell = _a11.cell;
        var selectionEvent = __assign33(__assign33({}, this.getArguments(event_1.syntheticEvent)), { dataItem, startColIndex: columnIndex, endColIndex: columnIndex, startRowIndex: dataIndex, endRowIndex: dataIndex, dataItems: this.getLeafDataItems(), altKey: false, ctrlKey: false, shiftKey: false, metaKey: false, mode, cell, isDrag: false, componentId: this._gridId, selectedField: this.props.selectedField || "" });
        this.props.onSelectionChange.call(void 0, selectionEvent);
      }
    };
    Grid2.prototype.raiseDataEvent = function(handler, data, moreData, syntheticEvent, targetEvent) {
      var dataStateChange = this.props.onDataStateChange;
      if (handler) {
        var ev = __assign33(__assign33(__assign33({}, this.getArguments(syntheticEvent)), data), { targetEvent });
        handler.call(void 0, ev);
      } else if (dataStateChange) {
        dataStateChange.call(void 0, __assign33(__assign33({}, this.getArguments(syntheticEvent)), { targetEvent: targetEvent || {}, dataState: __assign33(__assign33({}, this.getDataState()), moreData) }));
      }
    };
    Grid2.prototype.columnReorder = function(prev, next, nativeEvent) {
      var _a11;
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
      (_a11 = this._columns).splice.apply(_a11, __spreadArray7([prev < next ? end2(next - spliced.length) : next, 0], spliced, false));
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
      group.splice.apply(group, __spreadArray7([nextIndex, 0], group.splice(prevIndex, 1), false));
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
      data: PropTypes12.oneOfType([
        PropTypes12.array,
        PropTypes12.shape({
          data: PropTypes12.array,
          total: PropTypes12.number
        })
      ]),
      sortable: PropTypes12.oneOfType([
        PropTypes12.bool,
        PropTypes12.shape({
          mode: PropTypes12.oneOf(["single", "multiple"]),
          allowUnsort: PropTypes12.bool
        })
      ]),
      onSortChange: PropTypes12.func,
      sort: PropTypes12.array,
      filterable: PropTypes12.bool,
      filter: PropTypes12.any,
      onFilterChange: PropTypes12.func,
      pageable: PropTypes12.oneOfType([
        PropTypes12.bool,
        PropTypes12.shape({
          buttonCount: PropTypes12.number,
          info: PropTypes12.bool,
          type: PropTypes12.oneOf(["numeric", "input"]),
          pageSizes: PropTypes12.oneOfType([
            PropTypes12.bool,
            PropTypes12.arrayOf(PropTypes12.oneOfType([
              PropTypes12.string,
              PropTypes12.number
            ]))
          ]),
          previousNext: PropTypes12.bool
        })
      ]),
      pageSize: PropTypes12.number,
      onPageChange: PropTypes12.func,
      total: PropTypes12.number,
      skip: PropTypes12.number,
      take: PropTypes12.number,
      fixedScroll: PropTypes12.bool,
      onExpandChange: PropTypes12.func,
      expandField: PropTypes12.string,
      selectedField: PropTypes12.string,
      onSelectionChange: PropTypes12.func,
      onHeaderSelectionChange: PropTypes12.func,
      resizable: PropTypes12.bool,
      reorderable: PropTypes12.bool,
      group: PropTypes12.any,
      groupable: PropTypes12.oneOfType([
        PropTypes12.bool,
        PropTypes12.shape({
          enabled: PropTypes12.bool,
          footer: PropTypes12.oneOf(["always", "visible", "none"])
        })
      ]),
      onGroupChange: PropTypes12.func,
      onRowClick: PropTypes12.func,
      onRowDoubleClick: PropTypes12.func,
      onItemChange: PropTypes12.func,
      editField: PropTypes12.string,
      scrollable: PropTypes12.oneOf(["none", "scrollable", "virtual"]),
      rowHeight: PropTypes12.number,
      detailRowHeight: PropTypes12.number,
      detail: PropTypes12.any,
      style: PropTypes12.object,
      onDataStateChange: PropTypes12.func,
      onColumnResize: PropTypes12.func,
      onColumnReorder: PropTypes12.func,
      dataItemKey: PropTypes12.string,
      navigatable: PropTypes12.bool,
      size: PropTypes12.oneOf(["small", "medium"])
    };
    Grid2.contextType = TableKeyboardNavigationContext;
    return Grid2;
  }(React58.Component)
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

export {
  WrapperChartGrid
};
//# sourceMappingURL=/build/_shared/chunk-2QEPD6DG.js.map
