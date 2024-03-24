import {
  _objectWithoutPropertiesLoose
} from "/build/_shared/chunk-CO7DHVOA.js";
import {
  _extends
} from "/build/_shared/chunk-ELWJTL4F.js";
import {
  classNames,
  require_prop_types,
  validatePackage
} from "/build/_shared/chunk-EZ7JG6XF.js";
import {
  require_react_dom
} from "/build/_shared/chunk-GIAAE3CH.js";
import {
  require_react
} from "/build/_shared/chunk-BOXFZXVX.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// node_modules/@progress/kendo-react-common/dist/es/getTabIndex.js
var DISABLED_TABINDEX = -1;
var DEFAULT_TABINDEX = 0;
var getTabIndex = function(tabIndex, disabled, useDefaultTabIndexWhenDisabled) {
  var parsedTabIndex = typeof tabIndex === "string" ? parseInt(tabIndex, void 0) : tabIndex;
  if (parsedTabIndex === NaN) {
    return void 0;
  }
  return parsedTabIndex !== void 0 ? parsedTabIndex : disabled ? useDefaultTabIndexWhenDisabled ? void 0 : DISABLED_TABINDEX : DEFAULT_TABINDEX;
};

// node_modules/@progress/kendo-react-animation/dist/es/Animation.js
var React6 = __toESM(require_react());
var PropTypes6 = __toESM(require_prop_types());

// node_modules/@progress/kendo-react-common/dist/es/noop.js
var noop = function() {
};

// node_modules/@progress/kendo-react-animation/dist/es/AnimationChild.js
var React5 = __toESM(require_react());
var PropTypes5 = __toESM(require_prop_types());

// node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf2(o2, p2) {
    o2.__proto__ = p2;
    return o2;
  };
  return _setPrototypeOf(o, p);
}

// node_modules/@babel/runtime/helpers/esm/inheritsLoose.js
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  _setPrototypeOf(subClass, superClass);
}

// node_modules/@progress/kendo-react-animation/node_modules/react-transition-group/esm/CSSTransition.js
var import_prop_types3 = __toESM(require_prop_types());

// node_modules/dom-helpers/esm/hasClass.js
function hasClass(element, className) {
  if (element.classList)
    return !!className && element.classList.contains(className);
  return (" " + (element.className.baseVal || element.className) + " ").indexOf(" " + className + " ") !== -1;
}

// node_modules/dom-helpers/esm/addClass.js
function addClass(element, className) {
  if (element.classList)
    element.classList.add(className);
  else if (!hasClass(element, className))
    if (typeof element.className === "string")
      element.className = element.className + " " + className;
    else
      element.setAttribute("class", (element.className && element.className.baseVal || "") + " " + className);
}

// node_modules/dom-helpers/esm/removeClass.js
function replaceClassName(origClass, classToRemove) {
  return origClass.replace(new RegExp("(^|\\s)" + classToRemove + "(?:\\s|$)", "g"), "$1").replace(/\s+/g, " ").replace(/^\s*|\s*$/g, "");
}
function removeClass(element, className) {
  if (element.classList) {
    element.classList.remove(className);
  } else if (typeof element.className === "string") {
    element.className = replaceClassName(element.className, className);
  } else {
    element.setAttribute("class", replaceClassName(element.className && element.className.baseVal || "", className));
  }
}

// node_modules/@progress/kendo-react-animation/node_modules/react-transition-group/esm/CSSTransition.js
var import_react3 = __toESM(require_react());

// node_modules/@progress/kendo-react-animation/node_modules/react-transition-group/esm/Transition.js
var import_prop_types2 = __toESM(require_prop_types());
var import_react2 = __toESM(require_react());
var import_react_dom = __toESM(require_react_dom());

// node_modules/@progress/kendo-react-animation/node_modules/react-transition-group/esm/config.js
var config_default = {
  disabled: false
};

// node_modules/@progress/kendo-react-animation/node_modules/react-transition-group/esm/utils/PropTypes.js
var import_prop_types = __toESM(require_prop_types());
var timeoutsShape = true ? import_prop_types.default.oneOfType([import_prop_types.default.number, import_prop_types.default.shape({
  enter: import_prop_types.default.number,
  exit: import_prop_types.default.number,
  appear: import_prop_types.default.number
}).isRequired]) : null;
var classNamesShape = true ? import_prop_types.default.oneOfType([import_prop_types.default.string, import_prop_types.default.shape({
  enter: import_prop_types.default.string,
  exit: import_prop_types.default.string,
  active: import_prop_types.default.string
}), import_prop_types.default.shape({
  enter: import_prop_types.default.string,
  enterDone: import_prop_types.default.string,
  enterActive: import_prop_types.default.string,
  exit: import_prop_types.default.string,
  exitDone: import_prop_types.default.string,
  exitActive: import_prop_types.default.string
})]) : null;

// node_modules/@progress/kendo-react-animation/node_modules/react-transition-group/esm/TransitionGroupContext.js
var import_react = __toESM(require_react());
var TransitionGroupContext_default = import_react.default.createContext(null);

// node_modules/@progress/kendo-react-animation/node_modules/react-transition-group/esm/Transition.js
var UNMOUNTED = "unmounted";
var EXITED = "exited";
var ENTERING = "entering";
var ENTERED = "entered";
var EXITING = "exiting";
var Transition = /* @__PURE__ */ function(_React$Component) {
  _inheritsLoose(Transition2, _React$Component);
  function Transition2(props, context) {
    var _this;
    _this = _React$Component.call(this, props, context) || this;
    var parentGroup = context;
    var appear = parentGroup && !parentGroup.isMounting ? props.enter : props.appear;
    var initialStatus;
    _this.appearStatus = null;
    if (props.in) {
      if (appear) {
        initialStatus = EXITED;
        _this.appearStatus = ENTERING;
      } else {
        initialStatus = ENTERED;
      }
    } else {
      if (props.unmountOnExit || props.mountOnEnter) {
        initialStatus = UNMOUNTED;
      } else {
        initialStatus = EXITED;
      }
    }
    _this.state = {
      status: initialStatus
    };
    _this.nextCallback = null;
    return _this;
  }
  Transition2.getDerivedStateFromProps = function getDerivedStateFromProps(_ref, prevState) {
    var nextIn = _ref.in;
    if (nextIn && prevState.status === UNMOUNTED) {
      return {
        status: EXITED
      };
    }
    return null;
  };
  var _proto = Transition2.prototype;
  _proto.componentDidMount = function componentDidMount() {
    this.updateStatus(true, this.appearStatus);
  };
  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var nextStatus = null;
    if (prevProps !== this.props) {
      var status = this.state.status;
      if (this.props.in) {
        if (status !== ENTERING && status !== ENTERED) {
          nextStatus = ENTERING;
        }
      } else {
        if (status === ENTERING || status === ENTERED) {
          nextStatus = EXITING;
        }
      }
    }
    this.updateStatus(false, nextStatus);
  };
  _proto.componentWillUnmount = function componentWillUnmount() {
    this.cancelNextCallback();
  };
  _proto.getTimeouts = function getTimeouts() {
    var timeout2 = this.props.timeout;
    var exit, enter, appear;
    exit = enter = appear = timeout2;
    if (timeout2 != null && typeof timeout2 !== "number") {
      exit = timeout2.exit;
      enter = timeout2.enter;
      appear = timeout2.appear !== void 0 ? timeout2.appear : enter;
    }
    return {
      exit,
      enter,
      appear
    };
  };
  _proto.updateStatus = function updateStatus(mounting, nextStatus) {
    if (mounting === void 0) {
      mounting = false;
    }
    if (nextStatus !== null) {
      this.cancelNextCallback();
      if (nextStatus === ENTERING) {
        this.performEnter(mounting);
      } else {
        this.performExit();
      }
    } else if (this.props.unmountOnExit && this.state.status === EXITED) {
      this.setState({
        status: UNMOUNTED
      });
    }
  };
  _proto.performEnter = function performEnter(mounting) {
    var _this2 = this;
    var enter = this.props.enter;
    var appearing = this.context ? this.context.isMounting : mounting;
    var _ref2 = this.props.nodeRef ? [appearing] : [import_react_dom.default.findDOMNode(this), appearing], maybeNode = _ref2[0], maybeAppearing = _ref2[1];
    var timeouts = this.getTimeouts();
    var enterTimeout = appearing ? timeouts.appear : timeouts.enter;
    if (!mounting && !enter || config_default.disabled) {
      this.safeSetState({
        status: ENTERED
      }, function() {
        _this2.props.onEntered(maybeNode);
      });
      return;
    }
    this.props.onEnter(maybeNode, maybeAppearing);
    this.safeSetState({
      status: ENTERING
    }, function() {
      _this2.props.onEntering(maybeNode, maybeAppearing);
      _this2.onTransitionEnd(enterTimeout, function() {
        _this2.safeSetState({
          status: ENTERED
        }, function() {
          _this2.props.onEntered(maybeNode, maybeAppearing);
        });
      });
    });
  };
  _proto.performExit = function performExit() {
    var _this3 = this;
    var exit = this.props.exit;
    var timeouts = this.getTimeouts();
    var maybeNode = this.props.nodeRef ? void 0 : import_react_dom.default.findDOMNode(this);
    if (!exit || config_default.disabled) {
      this.safeSetState({
        status: EXITED
      }, function() {
        _this3.props.onExited(maybeNode);
      });
      return;
    }
    this.props.onExit(maybeNode);
    this.safeSetState({
      status: EXITING
    }, function() {
      _this3.props.onExiting(maybeNode);
      _this3.onTransitionEnd(timeouts.exit, function() {
        _this3.safeSetState({
          status: EXITED
        }, function() {
          _this3.props.onExited(maybeNode);
        });
      });
    });
  };
  _proto.cancelNextCallback = function cancelNextCallback() {
    if (this.nextCallback !== null) {
      this.nextCallback.cancel();
      this.nextCallback = null;
    }
  };
  _proto.safeSetState = function safeSetState(nextState, callback) {
    callback = this.setNextCallback(callback);
    this.setState(nextState, callback);
  };
  _proto.setNextCallback = function setNextCallback(callback) {
    var _this4 = this;
    var active = true;
    this.nextCallback = function(event) {
      if (active) {
        active = false;
        _this4.nextCallback = null;
        callback(event);
      }
    };
    this.nextCallback.cancel = function() {
      active = false;
    };
    return this.nextCallback;
  };
  _proto.onTransitionEnd = function onTransitionEnd(timeout2, handler) {
    this.setNextCallback(handler);
    var node3 = this.props.nodeRef ? this.props.nodeRef.current : import_react_dom.default.findDOMNode(this);
    var doesNotHaveTimeoutOrListener = timeout2 == null && !this.props.addEndListener;
    if (!node3 || doesNotHaveTimeoutOrListener) {
      setTimeout(this.nextCallback, 0);
      return;
    }
    if (this.props.addEndListener) {
      var _ref3 = this.props.nodeRef ? [this.nextCallback] : [node3, this.nextCallback], maybeNode = _ref3[0], maybeNextCallback = _ref3[1];
      this.props.addEndListener(maybeNode, maybeNextCallback);
    }
    if (timeout2 != null) {
      setTimeout(this.nextCallback, timeout2);
    }
  };
  _proto.render = function render() {
    var status = this.state.status;
    if (status === UNMOUNTED) {
      return null;
    }
    var _this$props = this.props, children = _this$props.children, _in = _this$props.in, _mountOnEnter = _this$props.mountOnEnter, _unmountOnExit = _this$props.unmountOnExit, _appear = _this$props.appear, _enter = _this$props.enter, _exit = _this$props.exit, _timeout = _this$props.timeout, _addEndListener = _this$props.addEndListener, _onEnter = _this$props.onEnter, _onEntering = _this$props.onEntering, _onEntered = _this$props.onEntered, _onExit = _this$props.onExit, _onExiting = _this$props.onExiting, _onExited = _this$props.onExited, _nodeRef = _this$props.nodeRef, childProps = _objectWithoutPropertiesLoose(_this$props, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
    return (
      // allows for nested Transitions
      /* @__PURE__ */ import_react2.default.createElement(TransitionGroupContext_default.Provider, {
        value: null
      }, typeof children === "function" ? children(status, childProps) : import_react2.default.cloneElement(import_react2.default.Children.only(children), childProps))
    );
  };
  return Transition2;
}(import_react2.default.Component);
Transition.contextType = TransitionGroupContext_default;
Transition.propTypes = true ? {
  /**
   * A React reference to DOM element that need to transition:
   * https://stackoverflow.com/a/51127130/4671932
   *
   *   - When `nodeRef` prop is used, `node` is not passed to callback functions
   *      (e.g. `onEnter`) because user already has direct access to the node.
   *   - When changing `key` prop of `Transition` in a `TransitionGroup` a new
   *     `nodeRef` need to be provided to `Transition` with changed `key` prop
   *     (see
   *     [test/CSSTransition-test.js](https://github.com/reactjs/react-transition-group/blob/13435f897b3ab71f6e19d724f145596f5910581c/test/CSSTransition-test.js#L362-L437)).
   */
  nodeRef: import_prop_types2.default.shape({
    current: typeof Element === "undefined" ? import_prop_types2.default.any : function(propValue, key, componentName, location, propFullName, secret) {
      var value = propValue[key];
      return import_prop_types2.default.instanceOf(value && "ownerDocument" in value ? value.ownerDocument.defaultView.Element : Element)(propValue, key, componentName, location, propFullName, secret);
    }
  }),
  /**
   * A `function` child can be used instead of a React element. This function is
   * called with the current transition status (`'entering'`, `'entered'`,
   * `'exiting'`, `'exited'`), which can be used to apply context
   * specific props to a component.
   *
   * ```jsx
   * <Transition in={this.state.in} timeout={150}>
   *   {state => (
   *     <MyComponent className={`fade fade-${state}`} />
   *   )}
   * </Transition>
   * ```
   */
  children: import_prop_types2.default.oneOfType([import_prop_types2.default.func.isRequired, import_prop_types2.default.element.isRequired]).isRequired,
  /**
   * Show the component; triggers the enter or exit states
   */
  in: import_prop_types2.default.bool,
  /**
   * By default the child component is mounted immediately along with
   * the parent `Transition` component. If you want to "lazy mount" the component on the
   * first `in={true}` you can set `mountOnEnter`. After the first enter transition the component will stay
   * mounted, even on "exited", unless you also specify `unmountOnExit`.
   */
  mountOnEnter: import_prop_types2.default.bool,
  /**
   * By default the child component stays mounted after it reaches the `'exited'` state.
   * Set `unmountOnExit` if you'd prefer to unmount the component after it finishes exiting.
   */
  unmountOnExit: import_prop_types2.default.bool,
  /**
   * By default the child component does not perform the enter transition when
   * it first mounts, regardless of the value of `in`. If you want this
   * behavior, set both `appear` and `in` to `true`.
   *
   * > **Note**: there are no special appear states like `appearing`/`appeared`, this prop
   * > only adds an additional enter transition. However, in the
   * > `<CSSTransition>` component that first enter transition does result in
   * > additional `.appear-*` classes, that way you can choose to style it
   * > differently.
   */
  appear: import_prop_types2.default.bool,
  /**
   * Enable or disable enter transitions.
   */
  enter: import_prop_types2.default.bool,
  /**
   * Enable or disable exit transitions.
   */
  exit: import_prop_types2.default.bool,
  /**
   * The duration of the transition, in milliseconds.
   * Required unless `addEndListener` is provided.
   *
   * You may specify a single timeout for all transitions:
   *
   * ```jsx
   * timeout={500}
   * ```
   *
   * or individually:
   *
   * ```jsx
   * timeout={{
   *  appear: 500,
   *  enter: 300,
   *  exit: 500,
   * }}
   * ```
   *
   * - `appear` defaults to the value of `enter`
   * - `enter` defaults to `0`
   * - `exit` defaults to `0`
   *
   * @type {number | { enter?: number, exit?: number, appear?: number }}
   */
  timeout: function timeout(props) {
    var pt = timeoutsShape;
    if (!props.addEndListener)
      pt = pt.isRequired;
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }
    return pt.apply(void 0, [props].concat(args));
  },
  /**
   * Add a custom transition end trigger. Called with the transitioning
   * DOM node and a `done` callback. Allows for more fine grained transition end
   * logic. Timeouts are still used as a fallback if provided.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * ```jsx
   * addEndListener={(node, done) => {
   *   // use the css transitionend event to mark the finish of a transition
   *   node.addEventListener('transitionend', done, false);
   * }}
   * ```
   */
  addEndListener: import_prop_types2.default.func,
  /**
   * Callback fired before the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEnter: import_prop_types2.default.func,
  /**
   * Callback fired after the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: import_prop_types2.default.func,
  /**
   * Callback fired after the "entered" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEntered: import_prop_types2.default.func,
  /**
   * Callback fired before the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExit: import_prop_types2.default.func,
  /**
   * Callback fired after the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExiting: import_prop_types2.default.func,
  /**
   * Callback fired after the "exited" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExited: import_prop_types2.default.func
} : {};
function noop2() {
}
Transition.defaultProps = {
  in: false,
  mountOnEnter: false,
  unmountOnExit: false,
  appear: false,
  enter: true,
  exit: true,
  onEnter: noop2,
  onEntering: noop2,
  onEntered: noop2,
  onExit: noop2,
  onExiting: noop2,
  onExited: noop2
};
Transition.UNMOUNTED = UNMOUNTED;
Transition.EXITED = EXITED;
Transition.ENTERING = ENTERING;
Transition.ENTERED = ENTERED;
Transition.EXITING = EXITING;
var Transition_default = Transition;

// node_modules/@progress/kendo-react-animation/node_modules/react-transition-group/esm/CSSTransition.js
var _addClass = function addClass2(node3, classes) {
  return node3 && classes && classes.split(" ").forEach(function(c) {
    return addClass(node3, c);
  });
};
var removeClass2 = function removeClass3(node3, classes) {
  return node3 && classes && classes.split(" ").forEach(function(c) {
    return removeClass(node3, c);
  });
};
var CSSTransition = /* @__PURE__ */ function(_React$Component) {
  _inheritsLoose(CSSTransition2, _React$Component);
  function CSSTransition2() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.appliedClasses = {
      appear: {},
      enter: {},
      exit: {}
    };
    _this.onEnter = function(maybeNode, maybeAppearing) {
      var _this$resolveArgument = _this.resolveArguments(maybeNode, maybeAppearing), node3 = _this$resolveArgument[0], appearing = _this$resolveArgument[1];
      _this.removeClasses(node3, "exit");
      _this.addClass(node3, appearing ? "appear" : "enter", "base");
      if (_this.props.onEnter) {
        _this.props.onEnter(maybeNode, maybeAppearing);
      }
    };
    _this.onEntering = function(maybeNode, maybeAppearing) {
      var _this$resolveArgument2 = _this.resolveArguments(maybeNode, maybeAppearing), node3 = _this$resolveArgument2[0], appearing = _this$resolveArgument2[1];
      var type = appearing ? "appear" : "enter";
      _this.addClass(node3, type, "active");
      if (_this.props.onEntering) {
        _this.props.onEntering(maybeNode, maybeAppearing);
      }
    };
    _this.onEntered = function(maybeNode, maybeAppearing) {
      var _this$resolveArgument3 = _this.resolveArguments(maybeNode, maybeAppearing), node3 = _this$resolveArgument3[0], appearing = _this$resolveArgument3[1];
      var type = appearing ? "appear" : "enter";
      _this.removeClasses(node3, type);
      _this.addClass(node3, type, "done");
      if (_this.props.onEntered) {
        _this.props.onEntered(maybeNode, maybeAppearing);
      }
    };
    _this.onExit = function(maybeNode) {
      var _this$resolveArgument4 = _this.resolveArguments(maybeNode), node3 = _this$resolveArgument4[0];
      _this.removeClasses(node3, "appear");
      _this.removeClasses(node3, "enter");
      _this.addClass(node3, "exit", "base");
      if (_this.props.onExit) {
        _this.props.onExit(maybeNode);
      }
    };
    _this.onExiting = function(maybeNode) {
      var _this$resolveArgument5 = _this.resolveArguments(maybeNode), node3 = _this$resolveArgument5[0];
      _this.addClass(node3, "exit", "active");
      if (_this.props.onExiting) {
        _this.props.onExiting(maybeNode);
      }
    };
    _this.onExited = function(maybeNode) {
      var _this$resolveArgument6 = _this.resolveArguments(maybeNode), node3 = _this$resolveArgument6[0];
      _this.removeClasses(node3, "exit");
      _this.addClass(node3, "exit", "done");
      if (_this.props.onExited) {
        _this.props.onExited(maybeNode);
      }
    };
    _this.resolveArguments = function(maybeNode, maybeAppearing) {
      return _this.props.nodeRef ? [_this.props.nodeRef.current, maybeNode] : [maybeNode, maybeAppearing];
    };
    _this.getClassNames = function(type) {
      var classNames2 = _this.props.classNames;
      var isStringClassNames = typeof classNames2 === "string";
      var prefix = isStringClassNames && classNames2 ? classNames2 + "-" : "";
      var baseClassName = isStringClassNames ? "" + prefix + type : classNames2[type];
      var activeClassName = isStringClassNames ? baseClassName + "-active" : classNames2[type + "Active"];
      var doneClassName = isStringClassNames ? baseClassName + "-done" : classNames2[type + "Done"];
      return {
        baseClassName,
        activeClassName,
        doneClassName
      };
    };
    return _this;
  }
  var _proto = CSSTransition2.prototype;
  _proto.addClass = function addClass3(node3, type, phase) {
    var className = this.getClassNames(type)[phase + "ClassName"];
    var _this$getClassNames = this.getClassNames("enter"), doneClassName = _this$getClassNames.doneClassName;
    if (type === "appear" && phase === "done" && doneClassName) {
      className += " " + doneClassName;
    }
    if (phase === "active") {
      node3 && node3.scrollTop;
    }
    if (className) {
      this.appliedClasses[type][phase] = className;
      _addClass(node3, className);
    }
  };
  _proto.removeClasses = function removeClasses(node3, type) {
    var _this$appliedClasses$ = this.appliedClasses[type], baseClassName = _this$appliedClasses$.base, activeClassName = _this$appliedClasses$.active, doneClassName = _this$appliedClasses$.done;
    this.appliedClasses[type] = {};
    if (baseClassName) {
      removeClass2(node3, baseClassName);
    }
    if (activeClassName) {
      removeClass2(node3, activeClassName);
    }
    if (doneClassName) {
      removeClass2(node3, doneClassName);
    }
  };
  _proto.render = function render() {
    var _this$props = this.props, _ = _this$props.classNames, props = _objectWithoutPropertiesLoose(_this$props, ["classNames"]);
    return /* @__PURE__ */ import_react3.default.createElement(Transition_default, _extends({}, props, {
      onEnter: this.onEnter,
      onEntered: this.onEntered,
      onEntering: this.onEntering,
      onExit: this.onExit,
      onExiting: this.onExiting,
      onExited: this.onExited
    }));
  };
  return CSSTransition2;
}(import_react3.default.Component);
CSSTransition.defaultProps = {
  classNames: ""
};
CSSTransition.propTypes = true ? _extends({}, Transition_default.propTypes, {
  /**
   * The animation classNames applied to the component as it appears, enters,
   * exits or has finished the transition. A single name can be provided, which
   * will be suffixed for each stage, e.g. `classNames="fade"` applies:
   *
   * - `fade-appear`, `fade-appear-active`, `fade-appear-done`
   * - `fade-enter`, `fade-enter-active`, `fade-enter-done`
   * - `fade-exit`, `fade-exit-active`, `fade-exit-done`
   *
   * A few details to note about how these classes are applied:
   *
   * 1. They are _joined_ with the ones that are already defined on the child
   *    component, so if you want to add some base styles, you can use
   *    `className` without worrying that it will be overridden.
   *
   * 2. If the transition component mounts with `in={false}`, no classes are
   *    applied yet. You might be expecting `*-exit-done`, but if you think
   *    about it, a component cannot finish exiting if it hasn't entered yet.
   *
   * 2. `fade-appear-done` and `fade-enter-done` will _both_ be applied. This
   *    allows you to define different behavior for when appearing is done and
   *    when regular entering is done, using selectors like
   *    `.fade-enter-done:not(.fade-appear-done)`. For example, you could apply
   *    an epic entrance animation when element first appears in the DOM using
   *    [Animate.css](https://daneden.github.io/animate.css/). Otherwise you can
   *    simply use `fade-enter-done` for defining both cases.
   *
   * Each individual classNames can also be specified independently like:
   *
   * ```js
   * classNames={{
   *  appear: 'my-appear',
   *  appearActive: 'my-active-appear',
   *  appearDone: 'my-done-appear',
   *  enter: 'my-enter',
   *  enterActive: 'my-active-enter',
   *  enterDone: 'my-done-enter',
   *  exit: 'my-exit',
   *  exitActive: 'my-active-exit',
   *  exitDone: 'my-done-exit',
   * }}
   * ```
   *
   * If you want to set these classes using CSS Modules:
   *
   * ```js
   * import styles from './styles.css';
   * ```
   *
   * you might want to use camelCase in your CSS file, that way could simply
   * spread them instead of listing them one by one:
   *
   * ```js
   * classNames={{ ...styles }}
   * ```
   *
   * @type {string | {
   *  appear?: string,
   *  appearActive?: string,
   *  appearDone?: string,
   *  enter?: string,
   *  enterActive?: string,
   *  enterDone?: string,
   *  exit?: string,
   *  exitActive?: string,
   *  exitDone?: string,
   * }}
   */
  classNames: classNamesShape,
  /**
   * A `<Transition>` callback fired immediately after the 'enter' or 'appear' class is
   * applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEnter: import_prop_types3.default.func,
  /**
   * A `<Transition>` callback fired immediately after the 'enter-active' or
   * 'appear-active' class is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: import_prop_types3.default.func,
  /**
   * A `<Transition>` callback fired immediately after the 'enter' or
   * 'appear' classes are **removed** and the `done` class is added to the DOM node.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntered: import_prop_types3.default.func,
  /**
   * A `<Transition>` callback fired immediately after the 'exit' class is
   * applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement)
   */
  onExit: import_prop_types3.default.func,
  /**
   * A `<Transition>` callback fired immediately after the 'exit-active' is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement)
   */
  onExiting: import_prop_types3.default.func,
  /**
   * A `<Transition>` callback fired immediately after the 'exit' classes
   * are **removed** and the `exit-done` class is added to the DOM node.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement)
   */
  onExited: import_prop_types3.default.func
}) : {};
var CSSTransition_default = CSSTransition;

// node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}

// node_modules/@progress/kendo-react-animation/node_modules/react-transition-group/esm/TransitionGroup.js
var import_prop_types4 = __toESM(require_prop_types());
var import_react5 = __toESM(require_react());

// node_modules/@progress/kendo-react-animation/node_modules/react-transition-group/esm/utils/ChildMapping.js
var import_react4 = __toESM(require_react());
function getChildMapping(children, mapFn) {
  var mapper = function mapper2(child) {
    return mapFn && (0, import_react4.isValidElement)(child) ? mapFn(child) : child;
  };
  var result = /* @__PURE__ */ Object.create(null);
  if (children)
    import_react4.Children.map(children, function(c) {
      return c;
    }).forEach(function(child) {
      result[child.key] = mapper(child);
    });
  return result;
}
function mergeChildMappings(prev, next) {
  prev = prev || {};
  next = next || {};
  function getValueForKey(key) {
    return key in next ? next[key] : prev[key];
  }
  var nextKeysPending = /* @__PURE__ */ Object.create(null);
  var pendingKeys = [];
  for (var prevKey in prev) {
    if (prevKey in next) {
      if (pendingKeys.length) {
        nextKeysPending[prevKey] = pendingKeys;
        pendingKeys = [];
      }
    } else {
      pendingKeys.push(prevKey);
    }
  }
  var i;
  var childMapping = {};
  for (var nextKey in next) {
    if (nextKeysPending[nextKey]) {
      for (i = 0; i < nextKeysPending[nextKey].length; i++) {
        var pendingNextKey = nextKeysPending[nextKey][i];
        childMapping[nextKeysPending[nextKey][i]] = getValueForKey(pendingNextKey);
      }
    }
    childMapping[nextKey] = getValueForKey(nextKey);
  }
  for (i = 0; i < pendingKeys.length; i++) {
    childMapping[pendingKeys[i]] = getValueForKey(pendingKeys[i]);
  }
  return childMapping;
}
function getProp(child, prop, props) {
  return props[prop] != null ? props[prop] : child.props[prop];
}
function getInitialChildMapping(props, onExited) {
  return getChildMapping(props.children, function(child) {
    return (0, import_react4.cloneElement)(child, {
      onExited: onExited.bind(null, child),
      in: true,
      appear: getProp(child, "appear", props),
      enter: getProp(child, "enter", props),
      exit: getProp(child, "exit", props)
    });
  });
}
function getNextChildMapping(nextProps, prevChildMapping, onExited) {
  var nextChildMapping = getChildMapping(nextProps.children);
  var children = mergeChildMappings(prevChildMapping, nextChildMapping);
  Object.keys(children).forEach(function(key) {
    var child = children[key];
    if (!(0, import_react4.isValidElement)(child))
      return;
    var hasPrev = key in prevChildMapping;
    var hasNext = key in nextChildMapping;
    var prevChild = prevChildMapping[key];
    var isLeaving = (0, import_react4.isValidElement)(prevChild) && !prevChild.props.in;
    if (hasNext && (!hasPrev || isLeaving)) {
      children[key] = (0, import_react4.cloneElement)(child, {
        onExited: onExited.bind(null, child),
        in: true,
        exit: getProp(child, "exit", nextProps),
        enter: getProp(child, "enter", nextProps)
      });
    } else if (!hasNext && hasPrev && !isLeaving) {
      children[key] = (0, import_react4.cloneElement)(child, {
        in: false
      });
    } else if (hasNext && hasPrev && (0, import_react4.isValidElement)(prevChild)) {
      children[key] = (0, import_react4.cloneElement)(child, {
        onExited: onExited.bind(null, child),
        in: prevChild.props.in,
        exit: getProp(child, "exit", nextProps),
        enter: getProp(child, "enter", nextProps)
      });
    }
  });
  return children;
}

// node_modules/@progress/kendo-react-animation/node_modules/react-transition-group/esm/TransitionGroup.js
var values = Object.values || function(obj) {
  return Object.keys(obj).map(function(k) {
    return obj[k];
  });
};
var defaultProps = {
  component: "div",
  childFactory: function childFactory(child) {
    return child;
  }
};
var TransitionGroup = /* @__PURE__ */ function(_React$Component) {
  _inheritsLoose(TransitionGroup2, _React$Component);
  function TransitionGroup2(props, context) {
    var _this;
    _this = _React$Component.call(this, props, context) || this;
    var handleExited = _this.handleExited.bind(_assertThisInitialized(_this));
    _this.state = {
      contextValue: {
        isMounting: true
      },
      handleExited,
      firstRender: true
    };
    return _this;
  }
  var _proto = TransitionGroup2.prototype;
  _proto.componentDidMount = function componentDidMount() {
    this.mounted = true;
    this.setState({
      contextValue: {
        isMounting: false
      }
    });
  };
  _proto.componentWillUnmount = function componentWillUnmount() {
    this.mounted = false;
  };
  TransitionGroup2.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, _ref) {
    var prevChildMapping = _ref.children, handleExited = _ref.handleExited, firstRender = _ref.firstRender;
    return {
      children: firstRender ? getInitialChildMapping(nextProps, handleExited) : getNextChildMapping(nextProps, prevChildMapping, handleExited),
      firstRender: false
    };
  };
  _proto.handleExited = function handleExited(child, node3) {
    var currentChildMapping = getChildMapping(this.props.children);
    if (child.key in currentChildMapping)
      return;
    if (child.props.onExited) {
      child.props.onExited(node3);
    }
    if (this.mounted) {
      this.setState(function(state) {
        var children = _extends({}, state.children);
        delete children[child.key];
        return {
          children
        };
      });
    }
  };
  _proto.render = function render() {
    var _this$props = this.props, Component3 = _this$props.component, childFactory2 = _this$props.childFactory, props = _objectWithoutPropertiesLoose(_this$props, ["component", "childFactory"]);
    var contextValue = this.state.contextValue;
    var children = values(this.state.children).map(childFactory2);
    delete props.appear;
    delete props.enter;
    delete props.exit;
    if (Component3 === null) {
      return /* @__PURE__ */ import_react5.default.createElement(TransitionGroupContext_default.Provider, {
        value: contextValue
      }, children);
    }
    return /* @__PURE__ */ import_react5.default.createElement(TransitionGroupContext_default.Provider, {
      value: contextValue
    }, /* @__PURE__ */ import_react5.default.createElement(Component3, props, children));
  };
  return TransitionGroup2;
}(import_react5.default.Component);
TransitionGroup.propTypes = true ? {
  /**
   * `<TransitionGroup>` renders a `<div>` by default. You can change this
   * behavior by providing a `component` prop.
   * If you use React v16+ and would like to avoid a wrapping `<div>` element
   * you can pass in `component={null}`. This is useful if the wrapping div
   * borks your css styles.
   */
  component: import_prop_types4.default.any,
  /**
   * A set of `<Transition>` components, that are toggled `in` and out as they
   * leave. the `<TransitionGroup>` will inject specific transition props, so
   * remember to spread them through if you are wrapping the `<Transition>` as
   * with our `<Fade>` example.
   *
   * While this component is meant for multiple `Transition` or `CSSTransition`
   * children, sometimes you may want to have a single transition child with
   * content that you want to be transitioned out and in when you change it
   * (e.g. routes, images etc.) In that case you can change the `key` prop of
   * the transition child as you change its content, this will cause
   * `TransitionGroup` to transition the child out and back in.
   */
  children: import_prop_types4.default.node,
  /**
   * A convenience prop that enables or disables appear animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  appear: import_prop_types4.default.bool,
  /**
   * A convenience prop that enables or disables enter animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  enter: import_prop_types4.default.bool,
  /**
   * A convenience prop that enables or disables exit animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  exit: import_prop_types4.default.bool,
  /**
   * You may need to apply reactive updates to a child as it is exiting.
   * This is generally done by using `cloneElement` however in the case of an exiting
   * child the element has already been removed and not accessible to the consumer.
   *
   * If you do need to update a child as it leaves you can provide a `childFactory`
   * to wrap every child, even the ones that are leaving.
   *
   * @type Function(child: ReactElement) -> ReactElement
   */
  childFactory: import_prop_types4.default.func
} : {};
TransitionGroup.defaultProps = defaultProps;
var TransitionGroup_default = TransitionGroup;

// node_modules/@progress/kendo-react-animation/dist/es/util.js
var outerHeight = function(element) {
  if (!element || !element.ownerDocument.defaultView) {
    return 0;
  }
  var wnd = element.ownerDocument.defaultView;
  var computedStyles = wnd.getComputedStyle(element);
  var marginTop = parseFloat(computedStyles.marginTop);
  var marginBottom = parseFloat(computedStyles.marginBottom);
  return element.offsetHeight + marginTop + marginBottom;
};
var outerWidth = function(element) {
  if (!element || !element.ownerDocument.defaultView) {
    return 0;
  }
  var wnd = element.ownerDocument.defaultView;
  var computedStyles = wnd.getComputedStyle(element);
  var marginLeft = parseFloat(computedStyles.marginLeft);
  var marginRight = parseFloat(computedStyles.marginRight);
  return element.offsetWidth + marginLeft + marginRight;
};
var styles = {
  "animation-container": "k-animation-container",
  "animation-container-relative": "k-animation-container-relative",
  "animation-container-fixed": "k-animation-container-fixed",
  "push-right-enter": "k-push-right-enter",
  "push-right-appear": "k-push-right-appear",
  "push-right-enter-active": "k-push-right-enter-active",
  "push-right-appear-active": "k-push-right-appear-active",
  "push-right-exit": "k-push-right-exit",
  "push-right-exit-active": "k-push-right-exit-active",
  "push-left-enter": "k-push-left-enter",
  "push-left-appear": "k-push-left-appear",
  "push-left-enter-active": "k-push-left-enter-active",
  "push-left-appear-active": "k-push-left-appear-active",
  "push-left-exit": "k-push-left-exit",
  "push-left-exit-active": "k-push-left-exit-active",
  "push-down-enter": "k-push-down-enter",
  "push-down-appear": "k-push-down-appear",
  "push-down-enter-active": "k-push-down-enter-active",
  "push-down-appear-active": "k-push-down-appear-active",
  "push-down-exit": "k-push-down-exit",
  "push-down-exit-active": "k-push-down-exit-active",
  "push-up-enter": "k-push-up-enter",
  "push-up-appear": "k-push-up-appear",
  "push-up-enter-active": "k-push-up-enter-active",
  "push-up-appear-active": "k-push-up-appear-active",
  "push-up-exit": "k-push-up-exit",
  "push-up-exit-active": "k-push-up-exit-active",
  "expand": "k-expand",
  "expand-vertical-enter": "k-expand-vertical-enter",
  "expand-vertical-appear": "k-expand-vertical-appear",
  "expand-vertical-enter-active": "k-expand-vertical-enter-active",
  "expand-vertical-appear-active": "k-expand-vertical-appear-active",
  "expand-vertical-exit": "k-expand-vertical-exit",
  "expand-vertical-exit-active": "k-expand-vertical-exit-active",
  "expand-horizontal-enter": "k-expand-horizontal-enter",
  "expand-horizontal-appear": "k-expand-horizontal-appear",
  "expand-horizontal-enter-active": "k-expand-horizontal-enter-active",
  "expand-horizontal-appear-active": "k-expand-horizontal-appear-active",
  "expand-horizontal-exit": "k-expand-horizontal-exit",
  "expand-horizontal-exit-active": "k-expand-horizontal-exit-active",
  "child-animation-container": "k-child-animation-container",
  "fade-enter": "k-fade-enter",
  "fade-appear": "k-fade-appear",
  "fade-enter-active": "k-fade-enter-active",
  "fade-appear-active": "k-fade-appear-active",
  "fade-exit": "k-fade-exit",
  "fade-exit-active": "k-fade-exit-active",
  "zoom-in-enter": "k-zoom-in-enter",
  "zoom-in-appear": "k-zoom-in-appear",
  "zoom-in-enter-active": "k-zoom-in-enter-active",
  "zoom-in-appear-active": "k-zoom-in-appear-active",
  "zoom-in-exit": "k-zoom-in-exit",
  "zoom-in-exit-active": "k-zoom-in-exit-active",
  "zoom-out-enter": "k-zoom-out-enter",
  "zoom-out-appear": "k-zoom-out-appear",
  "zoom-out-enter-active": "k-zoom-out-enter-active",
  "zoom-out-appear-active": "k-zoom-out-appear-active",
  "zoom-out-exit": "k-zoom-out-exit",
  "zoom-out-exit-active": "k-zoom-out-exit-active",
  "slide-in-appear": "k-slide-in-appear",
  "centered": "k-centered",
  "slide-in-appear-active": "k-slide-in-appear-active",
  "slide-down-enter": "k-slide-down-enter",
  "slide-down-appear": "k-slide-down-appear",
  "slide-down-enter-active": "k-slide-down-enter-active",
  "slide-down-appear-active": "k-slide-down-appear-active",
  "slide-down-exit": "k-slide-down-exit",
  "slide-down-exit-active": "k-slide-down-exit-active",
  "slide-up-enter": "k-slide-up-enter",
  "slide-up-appear": "k-slide-up-appear",
  "slide-up-enter-active": "k-slide-up-enter-active",
  "slide-up-appear-active": "k-slide-up-appear-active",
  "slide-up-exit": "k-slide-up-exit",
  "slide-up-exit-active": "k-slide-up-exit-active",
  "slide-right-enter": "k-slide-right-enter",
  "slide-right-appear": "k-slide-right-appear",
  "slide-right-enter-active": "k-slide-right-enter-active",
  "slide-right-appear-active": "k-slide-right-appear-active",
  "slide-right-exit": "k-slide-right-exit",
  "slide-right-exit-active": "k-slide-right-exit-active",
  "slide-left-enter": "k-slide-left-enter",
  "slide-left-appear": "k-slide-left-appear",
  "slide-left-enter-active": "k-slide-left-enter-active",
  "slide-left-appear-active": "k-slide-left-appear-active",
  "slide-left-exit": "k-slide-left-exit",
  "slide-left-exit-active": "k-slide-left-exit-active",
  "reveal-vertical-enter": "k-reveal-vertical-enter",
  "reveal-vertical-appear": "k-reveal-vertical-appear",
  "reveal-vertical-enter-active": "k-reveal-vertical-enter-active",
  "reveal-vertical-appear-active": "k-reveal-vertical-appear-active",
  "reveal-vertical-exit": "k-reveal-vertical-exit",
  "reveal-vertical-exit-active": "k-reveal-vertical-exit-active",
  "reveal-horizontal-enter": "k-reveal-horizontal-enter",
  "reveal-horizontal-appear": "k-reveal-horizontal-appear",
  "reveal-horizontal-enter-active": "k-reveal-horizontal-enter-active",
  "reveal-horizontal-appear-active": "k-reveal-horizontal-appear-active",
  "reveal-horizontal-exit": "k-reveal-horizontal-exit",
  "reveal-horizontal-exit-active": "k-reveal-horizontal-exit-active"
};
var stylesMap = {
  outerHeight,
  outerWidth,
  styles
};
var util_default = stylesMap;

// node_modules/@progress/kendo-react-animation/dist/es/AnimationChild.js
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
var styles2 = util_default.styles;
var AnimationChild = (
  /** @class */
  function(_super) {
    __extends(AnimationChild2, _super);
    function AnimationChild2() {
      var _this = _super !== null && _super.apply(this, arguments) || this;
      _this.elementRef = React5.createRef();
      return _this;
    }
    Object.defineProperty(AnimationChild2.prototype, "element", {
      /**
       * The element that is being animated.
       */
      get: function() {
        return this.elementRef.current;
      },
      enumerable: false,
      configurable: true
    });
    AnimationChild2.prototype.render = function() {
      var _this = this;
      var _a = this.props, children = _a.children, style = _a.style, appear = _a.appear, enter = _a.enter, exit = _a.exit, transitionName = _a.transitionName, transitionEnterDuration = _a.transitionEnterDuration, transitionExitDuration = _a.transitionExitDuration, className = _a.className, onEnter = _a.onEnter, onEntering = _a.onEntering, onEntered = _a.onEntered, onExit = _a.onExit, onExiting = _a.onExiting, onExited = _a.onExited, onAfterExited = _a.onAfterExited, mountOnEnter = _a.mountOnEnter, unmountOnExit = _a.unmountOnExit, animationEnteringStyle = _a.animationEnteringStyle, animationEnteredStyle = _a.animationEnteredStyle, animationExitingStyle = _a.animationExitingStyle, animationExitedStyle = _a.animationExitedStyle, other = __rest(_a, ["children", "style", "appear", "enter", "exit", "transitionName", "transitionEnterDuration", "transitionExitDuration", "className", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "onAfterExited", "mountOnEnter", "unmountOnExit", "animationEnteringStyle", "animationEnteredStyle", "animationExitingStyle", "animationExitedStyle"]);
      var childAnimationContainerClassNames = classNames(className, styles2["child-animation-container"]);
      var defaultStyle = __assign({ transitionDelay: "0ms" }, style);
      var animationStyle = {
        entering: __assign({ transitionDuration: "".concat(transitionEnterDuration, "ms") }, animationEnteringStyle),
        entered: __assign({}, animationEnteredStyle),
        exiting: __assign({ transitionDuration: "".concat(transitionExitDuration, "ms") }, animationExitingStyle),
        exited: __assign({}, animationExitedStyle)
      };
      var transitionProps = {
        in: this.props.in,
        appear,
        enter,
        exit,
        mountOnEnter,
        unmountOnExit,
        timeout: {
          enter: transitionEnterDuration,
          exit: transitionExitDuration
        },
        onEnter: function() {
          if (onEnter) {
            onEnter.call(void 0, { animatedElement: _this.element, target: _this });
          }
        },
        onEntering: function() {
          if (onEntering) {
            onEntering.call(void 0, { animatedElement: _this.element, target: _this });
          }
        },
        onEntered: function() {
          if (onEntered) {
            onEntered.call(void 0, { animatedElement: _this.element, target: _this });
          }
        },
        onExit: function() {
          if (onExit) {
            onExit.call(void 0, { animatedElement: _this.element, target: _this });
          }
        },
        onExiting: function() {
          if (onExiting) {
            onExiting.call(void 0, { animatedElement: _this.element, target: _this });
          }
        },
        onExited: function() {
          if (onAfterExited) {
            onAfterExited.call(void 0, { animatedElement: _this.element, target: _this });
          }
          if (onExited) {
            onExited.call(void 0, { animatedElement: _this.element, target: _this });
          }
        },
        classNames: {
          appear: styles2["".concat(transitionName, "-appear")] || "".concat(transitionName, "-appear"),
          appearActive: styles2["".concat(transitionName, "-appear-active")] || "".concat(transitionName, "-appear-active"),
          enter: styles2["".concat(transitionName, "-enter")] || "".concat(transitionName, "-enter"),
          enterActive: styles2["".concat(transitionName, "-enter-active")] || "".concat(transitionName, "-enter-active"),
          exit: styles2["".concat(transitionName, "-exit")] || "".concat(transitionName, "-exit"),
          exitActive: styles2["".concat(transitionName, "-exit-active")] || "".concat(transitionName, "-exit-active")
        }
      };
      return React5.createElement(CSSTransition_default, __assign({}, transitionProps, other, { nodeRef: this.elementRef }), function(status) {
        return React5.createElement("div", { style: __assign(__assign({}, defaultStyle), animationStyle[status]), className: childAnimationContainerClassNames, ref: _this.elementRef }, children);
      });
    };
    AnimationChild2.propTypes = {
      in: PropTypes5.bool,
      children: PropTypes5.oneOfType([
        PropTypes5.arrayOf(PropTypes5.node),
        PropTypes5.node
      ]),
      transitionName: PropTypes5.string.isRequired,
      className: PropTypes5.string,
      appear: PropTypes5.bool,
      enter: PropTypes5.bool,
      exit: PropTypes5.bool,
      transitionEnterDuration: PropTypes5.number.isRequired,
      transitionExitDuration: PropTypes5.number.isRequired,
      mountOnEnter: PropTypes5.bool,
      unmountOnExit: PropTypes5.bool,
      animationEnteringStyle: PropTypes5.object,
      animationEnteredStyle: PropTypes5.object,
      animationExitingStyle: PropTypes5.object,
      animationExitedStyle: PropTypes5.object
    };
    AnimationChild2.defaultProps = {
      mountOnEnter: true,
      unmountOnExit: false,
      onEnter: noop,
      onEntering: noop,
      onEntered: noop,
      onExit: noop,
      onExiting: noop,
      onExited: noop,
      onAfterExited: noop,
      animationEnteringStyle: {},
      animationEnteredStyle: {},
      animationExitingStyle: {},
      animationExitedStyle: {}
    };
    return AnimationChild2;
  }(React5.Component)
);

// node_modules/@progress/kendo-react-animation/dist/es/package-metadata.js
var packageMetadata = {
  name: "@progress/kendo-react-animation",
  productName: "KendoReact",
  productCodes: ["KENDOUIREACT", "KENDOUICOMPLETE"],
  publishDate: 1700063333,
  version: "",
  licensingDocsUrl: "https://www.telerik.com/kendo-react-ui/my-license/?utm_medium=product&utm_source=kendoreact&utm_campaign=kendo-ui-react-purchase-license-keys-warning"
};

// node_modules/@progress/kendo-react-animation/dist/es/Animation.js
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
var styles3 = util_default.styles;
var Animation = (
  /** @class */
  function(_super) {
    __extends2(Animation2, _super);
    function Animation2(props) {
      var _this = _super.call(this, props) || this;
      validatePackage(packageMetadata);
      return _this;
    }
    Animation2.prototype.render = function() {
      var _a = this.props, id = _a.id, style = _a.style, children = _a.children, component = _a.component, className = _a.className, childFactory2 = _a.childFactory, stackChildren = _a.stackChildren, componentChildStyle = _a.componentChildStyle, componentChildClassName = _a.componentChildClassName, other = __rest2(_a, ["id", "style", "children", "component", "className", "childFactory", "stackChildren", "componentChildStyle", "componentChildClassName"]);
      var transitionProps = {
        id,
        style,
        component,
        childFactory: childFactory2,
        className: classNames(styles3["animation-container"], styles3["animation-container-relative"], className)
      };
      var content = React6.Children.map(children || null, function(child) {
        return React6.createElement(AnimationChild, __assign2({}, other, { style: componentChildStyle, className: componentChildClassName }), child);
      });
      return React6.createElement(TransitionGroup_default, __assign2({}, transitionProps), content);
    };
    Animation2.propTypes = {
      children: PropTypes6.oneOfType([
        PropTypes6.arrayOf(PropTypes6.node),
        PropTypes6.node
      ]),
      childFactory: PropTypes6.any,
      className: PropTypes6.string,
      component: PropTypes6.string,
      id: PropTypes6.string,
      style: PropTypes6.any,
      transitionName: PropTypes6.string.isRequired,
      appear: PropTypes6.bool.isRequired,
      enter: PropTypes6.bool.isRequired,
      exit: PropTypes6.bool.isRequired,
      transitionEnterDuration: PropTypes6.number.isRequired,
      transitionExitDuration: PropTypes6.number.isRequired
    };
    Animation2.defaultProps = {
      component: "div"
    };
    return Animation2;
  }(React6.Component)
);

// node_modules/@progress/kendo-react-animation/dist/es/hooks/useAnimation.js
var React7 = __toESM(require_react());
var useAnimation = function(config, deps) {
  var offset = React7.useRef(0);
  var mount = React7.useRef(false);
  var animationFrame = React7.useRef();
  var animate = function(transition) {
    var duration = transition.duration;
    var start;
    var progress;
    var skip = offset.current && 1 - offset.current;
    if (transition.onStart) {
      transition.onStart();
    }
    var frame = function(timestamp) {
      if (!start) {
        start = timestamp;
      }
      progress = timestamp - start + 1;
      var rate = progress / duration + skip;
      if (rate <= 1) {
        if (transition.onUpdate) {
          transition.onUpdate(rate);
        }
        animationFrame.current = window.requestAnimationFrame(frame);
        offset.current = rate;
      } else {
        if (transition.onEnd) {
          transition.onEnd(1);
        }
        offset.current = 0;
      }
    };
    animationFrame.current = window.requestAnimationFrame(frame);
  };
  React7.useEffect(function() {
    animate(config);
    return function() {
      if (animationFrame.current) {
        window.cancelAnimationFrame(animationFrame.current);
      }
    };
  }, deps);
  React7.useEffect(function() {
    mount.current = true;
  }, []);
};

export {
  getTabIndex,
  noop,
  Animation,
  useAnimation
};
//# sourceMappingURL=/build/_shared/chunk-TNTLQMTW.js.map
