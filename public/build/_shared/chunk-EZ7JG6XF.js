import {
  require_react_dom
} from "/build/_shared/chunk-GIAAE3CH.js";
import {
  require_react
} from "/build/_shared/chunk-BOXFZXVX.js";
import {
  __commonJS,
  __export,
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// node_modules/prop-types/node_modules/react-is/cjs/react-is.development.js
var require_react_is_development = __commonJS({
  "node_modules/prop-types/node_modules/react-is/cjs/react-is.development.js"(exports) {
    "use strict";
    if (true) {
      (function() {
        "use strict";
        var hasSymbol = typeof Symbol === "function" && Symbol.for;
        var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for("react.element") : 60103;
        var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for("react.portal") : 60106;
        var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for("react.fragment") : 60107;
        var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for("react.strict_mode") : 60108;
        var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for("react.profiler") : 60114;
        var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for("react.provider") : 60109;
        var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for("react.context") : 60110;
        var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for("react.async_mode") : 60111;
        var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for("react.concurrent_mode") : 60111;
        var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for("react.forward_ref") : 60112;
        var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for("react.suspense") : 60113;
        var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for("react.suspense_list") : 60120;
        var REACT_MEMO_TYPE = hasSymbol ? Symbol.for("react.memo") : 60115;
        var REACT_LAZY_TYPE = hasSymbol ? Symbol.for("react.lazy") : 60116;
        var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for("react.block") : 60121;
        var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for("react.fundamental") : 60117;
        var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for("react.responder") : 60118;
        var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for("react.scope") : 60119;
        function isValidElementType(type) {
          return typeof type === "string" || typeof type === "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
          type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === "object" && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
        }
        function typeOf(object2) {
          if (typeof object2 === "object" && object2 !== null) {
            var $$typeof = object2.$$typeof;
            switch ($$typeof) {
              case REACT_ELEMENT_TYPE:
                var type = object2.type;
                switch (type) {
                  case REACT_ASYNC_MODE_TYPE:
                  case REACT_CONCURRENT_MODE_TYPE:
                  case REACT_FRAGMENT_TYPE:
                  case REACT_PROFILER_TYPE:
                  case REACT_STRICT_MODE_TYPE:
                  case REACT_SUSPENSE_TYPE:
                    return type;
                  default:
                    var $$typeofType = type && type.$$typeof;
                    switch ($$typeofType) {
                      case REACT_CONTEXT_TYPE:
                      case REACT_FORWARD_REF_TYPE:
                      case REACT_LAZY_TYPE:
                      case REACT_MEMO_TYPE:
                      case REACT_PROVIDER_TYPE:
                        return $$typeofType;
                      default:
                        return $$typeof;
                    }
                }
              case REACT_PORTAL_TYPE:
                return $$typeof;
            }
          }
          return void 0;
        }
        var AsyncMode = REACT_ASYNC_MODE_TYPE;
        var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
        var ContextConsumer = REACT_CONTEXT_TYPE;
        var ContextProvider = REACT_PROVIDER_TYPE;
        var Element = REACT_ELEMENT_TYPE;
        var ForwardRef = REACT_FORWARD_REF_TYPE;
        var Fragment = REACT_FRAGMENT_TYPE;
        var Lazy = REACT_LAZY_TYPE;
        var Memo = REACT_MEMO_TYPE;
        var Portal = REACT_PORTAL_TYPE;
        var Profiler = REACT_PROFILER_TYPE;
        var StrictMode = REACT_STRICT_MODE_TYPE;
        var Suspense = REACT_SUSPENSE_TYPE;
        var hasWarnedAboutDeprecatedIsAsyncMode = false;
        function isAsyncMode(object2) {
          {
            if (!hasWarnedAboutDeprecatedIsAsyncMode) {
              hasWarnedAboutDeprecatedIsAsyncMode = true;
              console["warn"]("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.");
            }
          }
          return isConcurrentMode(object2) || typeOf(object2) === REACT_ASYNC_MODE_TYPE;
        }
        function isConcurrentMode(object2) {
          return typeOf(object2) === REACT_CONCURRENT_MODE_TYPE;
        }
        function isContextConsumer(object2) {
          return typeOf(object2) === REACT_CONTEXT_TYPE;
        }
        function isContextProvider(object2) {
          return typeOf(object2) === REACT_PROVIDER_TYPE;
        }
        function isElement(object2) {
          return typeof object2 === "object" && object2 !== null && object2.$$typeof === REACT_ELEMENT_TYPE;
        }
        function isForwardRef(object2) {
          return typeOf(object2) === REACT_FORWARD_REF_TYPE;
        }
        function isFragment(object2) {
          return typeOf(object2) === REACT_FRAGMENT_TYPE;
        }
        function isLazy(object2) {
          return typeOf(object2) === REACT_LAZY_TYPE;
        }
        function isMemo(object2) {
          return typeOf(object2) === REACT_MEMO_TYPE;
        }
        function isPortal(object2) {
          return typeOf(object2) === REACT_PORTAL_TYPE;
        }
        function isProfiler(object2) {
          return typeOf(object2) === REACT_PROFILER_TYPE;
        }
        function isStrictMode(object2) {
          return typeOf(object2) === REACT_STRICT_MODE_TYPE;
        }
        function isSuspense(object2) {
          return typeOf(object2) === REACT_SUSPENSE_TYPE;
        }
        exports.AsyncMode = AsyncMode;
        exports.ConcurrentMode = ConcurrentMode;
        exports.ContextConsumer = ContextConsumer;
        exports.ContextProvider = ContextProvider;
        exports.Element = Element;
        exports.ForwardRef = ForwardRef;
        exports.Fragment = Fragment;
        exports.Lazy = Lazy;
        exports.Memo = Memo;
        exports.Portal = Portal;
        exports.Profiler = Profiler;
        exports.StrictMode = StrictMode;
        exports.Suspense = Suspense;
        exports.isAsyncMode = isAsyncMode;
        exports.isConcurrentMode = isConcurrentMode;
        exports.isContextConsumer = isContextConsumer;
        exports.isContextProvider = isContextProvider;
        exports.isElement = isElement;
        exports.isForwardRef = isForwardRef;
        exports.isFragment = isFragment;
        exports.isLazy = isLazy;
        exports.isMemo = isMemo;
        exports.isPortal = isPortal;
        exports.isProfiler = isProfiler;
        exports.isStrictMode = isStrictMode;
        exports.isSuspense = isSuspense;
        exports.isValidElementType = isValidElementType;
        exports.typeOf = typeOf;
      })();
    }
  }
});

// node_modules/prop-types/node_modules/react-is/index.js
var require_react_is = __commonJS({
  "node_modules/prop-types/node_modules/react-is/index.js"(exports, module) {
    "use strict";
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_react_is_development();
    }
  }
});

// node_modules/object-assign/index.js
var require_object_assign = __commonJS({
  "node_modules/object-assign/index.js"(exports, module) {
    "use strict";
    var getOwnPropertySymbols = Object.getOwnPropertySymbols;
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    var propIsEnumerable = Object.prototype.propertyIsEnumerable;
    function toObject(val) {
      if (val === null || val === void 0) {
        throw new TypeError("Object.assign cannot be called with null or undefined");
      }
      return Object(val);
    }
    function shouldUseNative() {
      try {
        if (!Object.assign) {
          return false;
        }
        var test1 = new String("abc");
        test1[5] = "de";
        if (Object.getOwnPropertyNames(test1)[0] === "5") {
          return false;
        }
        var test2 = {};
        for (var i = 0; i < 10; i++) {
          test2["_" + String.fromCharCode(i)] = i;
        }
        var order2 = Object.getOwnPropertyNames(test2).map(function(n) {
          return test2[n];
        });
        if (order2.join("") !== "0123456789") {
          return false;
        }
        var test3 = {};
        "abcdefghijklmnopqrst".split("").forEach(function(letter) {
          test3[letter] = letter;
        });
        if (Object.keys(Object.assign({}, test3)).join("") !== "abcdefghijklmnopqrst") {
          return false;
        }
        return true;
      } catch (err) {
        return false;
      }
    }
    module.exports = shouldUseNative() ? Object.assign : function(target, source) {
      var from;
      var to = toObject(target);
      var symbols;
      for (var s = 1; s < arguments.length; s++) {
        from = Object(arguments[s]);
        for (var key in from) {
          if (hasOwnProperty.call(from, key)) {
            to[key] = from[key];
          }
        }
        if (getOwnPropertySymbols) {
          symbols = getOwnPropertySymbols(from);
          for (var i = 0; i < symbols.length; i++) {
            if (propIsEnumerable.call(from, symbols[i])) {
              to[symbols[i]] = from[symbols[i]];
            }
          }
        }
      }
      return to;
    };
  }
});

// node_modules/prop-types/lib/ReactPropTypesSecret.js
var require_ReactPropTypesSecret = __commonJS({
  "node_modules/prop-types/lib/ReactPropTypesSecret.js"(exports, module) {
    "use strict";
    var ReactPropTypesSecret = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    module.exports = ReactPropTypesSecret;
  }
});

// node_modules/prop-types/lib/has.js
var require_has = __commonJS({
  "node_modules/prop-types/lib/has.js"(exports, module) {
    module.exports = Function.call.bind(Object.prototype.hasOwnProperty);
  }
});

// node_modules/prop-types/checkPropTypes.js
var require_checkPropTypes = __commonJS({
  "node_modules/prop-types/checkPropTypes.js"(exports, module) {
    "use strict";
    var printWarning = function() {
    };
    if (true) {
      ReactPropTypesSecret = require_ReactPropTypesSecret();
      loggedTypeFailures = {};
      has = require_has();
      printWarning = function(text) {
        var message = "Warning: " + text;
        if (typeof console !== "undefined") {
          console.error(message);
        }
        try {
          throw new Error(message);
        } catch (x) {
        }
      };
    }
    var ReactPropTypesSecret;
    var loggedTypeFailures;
    var has;
    function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
      if (true) {
        for (var typeSpecName in typeSpecs) {
          if (has(typeSpecs, typeSpecName)) {
            var error2;
            try {
              if (typeof typeSpecs[typeSpecName] !== "function") {
                var err = Error(
                  (componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
                );
                err.name = "Invariant Violation";
                throw err;
              }
              error2 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
            } catch (ex) {
              error2 = ex;
            }
            if (error2 && !(error2 instanceof Error)) {
              printWarning(
                (componentName || "React class") + ": type specification of " + location + " `" + typeSpecName + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof error2 + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
              );
            }
            if (error2 instanceof Error && !(error2.message in loggedTypeFailures)) {
              loggedTypeFailures[error2.message] = true;
              var stack = getStack ? getStack() : "";
              printWarning(
                "Failed " + location + " type: " + error2.message + (stack != null ? stack : "")
              );
            }
          }
        }
      }
    }
    checkPropTypes.resetWarningCache = function() {
      if (true) {
        loggedTypeFailures = {};
      }
    };
    module.exports = checkPropTypes;
  }
});

// node_modules/prop-types/factoryWithTypeCheckers.js
var require_factoryWithTypeCheckers = __commonJS({
  "node_modules/prop-types/factoryWithTypeCheckers.js"(exports, module) {
    "use strict";
    var ReactIs = require_react_is();
    var assign = require_object_assign();
    var ReactPropTypesSecret = require_ReactPropTypesSecret();
    var has = require_has();
    var checkPropTypes = require_checkPropTypes();
    var printWarning = function() {
    };
    if (true) {
      printWarning = function(text) {
        var message = "Warning: " + text;
        if (typeof console !== "undefined") {
          console.error(message);
        }
        try {
          throw new Error(message);
        } catch (x) {
        }
      };
    }
    function emptyFunctionThatReturnsNull() {
      return null;
    }
    module.exports = function(isValidElement, throwOnDirectAccess) {
      var ITERATOR_SYMBOL = typeof Symbol === "function" && Symbol.iterator;
      var FAUX_ITERATOR_SYMBOL = "@@iterator";
      function getIteratorFn(maybeIterable) {
        var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
        if (typeof iteratorFn === "function") {
          return iteratorFn;
        }
      }
      var ANONYMOUS = "<<anonymous>>";
      var ReactPropTypes = {
        array: createPrimitiveTypeChecker("array"),
        bigint: createPrimitiveTypeChecker("bigint"),
        bool: createPrimitiveTypeChecker("boolean"),
        func: createPrimitiveTypeChecker("function"),
        number: createPrimitiveTypeChecker("number"),
        object: createPrimitiveTypeChecker("object"),
        string: createPrimitiveTypeChecker("string"),
        symbol: createPrimitiveTypeChecker("symbol"),
        any: createAnyTypeChecker(),
        arrayOf: createArrayOfTypeChecker,
        element: createElementTypeChecker(),
        elementType: createElementTypeTypeChecker(),
        instanceOf: createInstanceTypeChecker,
        node: createNodeChecker(),
        objectOf: createObjectOfTypeChecker,
        oneOf: createEnumTypeChecker,
        oneOfType: createUnionTypeChecker,
        shape: createShapeTypeChecker,
        exact: createStrictShapeTypeChecker
      };
      function is(x, y) {
        if (x === y) {
          return x !== 0 || 1 / x === 1 / y;
        } else {
          return x !== x && y !== y;
        }
      }
      function PropTypeError(message, data) {
        this.message = message;
        this.data = data && typeof data === "object" ? data : {};
        this.stack = "";
      }
      PropTypeError.prototype = Error.prototype;
      function createChainableTypeChecker(validate) {
        if (true) {
          var manualPropTypeCallCache = {};
          var manualPropTypeWarningCount = 0;
        }
        function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
          componentName = componentName || ANONYMOUS;
          propFullName = propFullName || propName;
          if (secret !== ReactPropTypesSecret) {
            if (throwOnDirectAccess) {
              var err = new Error(
                "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
              );
              err.name = "Invariant Violation";
              throw err;
            } else if (typeof console !== "undefined") {
              var cacheKey = componentName + ":" + propName;
              if (!manualPropTypeCallCache[cacheKey] && // Avoid spamming the console because they are often not actionable except for lib authors
              manualPropTypeWarningCount < 3) {
                printWarning(
                  "You are manually calling a React.PropTypes validation function for the `" + propFullName + "` prop on `" + componentName + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
                );
                manualPropTypeCallCache[cacheKey] = true;
                manualPropTypeWarningCount++;
              }
            }
          }
          if (props[propName] == null) {
            if (isRequired) {
              if (props[propName] === null) {
                return new PropTypeError("The " + location + " `" + propFullName + "` is marked as required " + ("in `" + componentName + "`, but its value is `null`."));
              }
              return new PropTypeError("The " + location + " `" + propFullName + "` is marked as required in " + ("`" + componentName + "`, but its value is `undefined`."));
            }
            return null;
          } else {
            return validate(props, propName, componentName, location, propFullName);
          }
        }
        var chainedCheckType = checkType.bind(null, false);
        chainedCheckType.isRequired = checkType.bind(null, true);
        return chainedCheckType;
      }
      function createPrimitiveTypeChecker(expectedType) {
        function validate(props, propName, componentName, location, propFullName, secret) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== expectedType) {
            var preciseType = getPreciseType(propValue);
            return new PropTypeError(
              "Invalid " + location + " `" + propFullName + "` of type " + ("`" + preciseType + "` supplied to `" + componentName + "`, expected ") + ("`" + expectedType + "`."),
              { expectedType }
            );
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createAnyTypeChecker() {
        return createChainableTypeChecker(emptyFunctionThatReturnsNull);
      }
      function createArrayOfTypeChecker(typeChecker) {
        function validate(props, propName, componentName, location, propFullName) {
          if (typeof typeChecker !== "function") {
            return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside arrayOf.");
          }
          var propValue = props[propName];
          if (!Array.isArray(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an array."));
          }
          for (var i = 0; i < propValue.length; i++) {
            var error2 = typeChecker(propValue, i, componentName, location, propFullName + "[" + i + "]", ReactPropTypesSecret);
            if (error2 instanceof Error) {
              return error2;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createElementTypeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          if (!isValidElement(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected a single ReactElement."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createElementTypeTypeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          if (!ReactIs.isValidElementType(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected a single ReactElement type."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createInstanceTypeChecker(expectedClass) {
        function validate(props, propName, componentName, location, propFullName) {
          if (!(props[propName] instanceof expectedClass)) {
            var expectedClassName = expectedClass.name || ANONYMOUS;
            var actualClassName = getClassName(props[propName]);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + actualClassName + "` supplied to `" + componentName + "`, expected ") + ("instance of `" + expectedClassName + "`."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createEnumTypeChecker(expectedValues) {
        if (!Array.isArray(expectedValues)) {
          if (true) {
            if (arguments.length > 1) {
              printWarning(
                "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
              );
            } else {
              printWarning("Invalid argument supplied to oneOf, expected an array.");
            }
          }
          return emptyFunctionThatReturnsNull;
        }
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          for (var i = 0; i < expectedValues.length; i++) {
            if (is(propValue, expectedValues[i])) {
              return null;
            }
          }
          var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
            var type = getPreciseType(value);
            if (type === "symbol") {
              return String(value);
            }
            return value;
          });
          return new PropTypeError("Invalid " + location + " `" + propFullName + "` of value `" + String(propValue) + "` " + ("supplied to `" + componentName + "`, expected one of " + valuesString + "."));
        }
        return createChainableTypeChecker(validate);
      }
      function createObjectOfTypeChecker(typeChecker) {
        function validate(props, propName, componentName, location, propFullName) {
          if (typeof typeChecker !== "function") {
            return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside objectOf.");
          }
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== "object") {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an object."));
          }
          for (var key in propValue) {
            if (has(propValue, key)) {
              var error2 = typeChecker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
              if (error2 instanceof Error) {
                return error2;
              }
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createUnionTypeChecker(arrayOfTypeCheckers) {
        if (!Array.isArray(arrayOfTypeCheckers)) {
          true ? printWarning("Invalid argument supplied to oneOfType, expected an instance of array.") : void 0;
          return emptyFunctionThatReturnsNull;
        }
        for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
          var checker = arrayOfTypeCheckers[i];
          if (typeof checker !== "function") {
            printWarning(
              "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + getPostfixForTypeWarning(checker) + " at index " + i + "."
            );
            return emptyFunctionThatReturnsNull;
          }
        }
        function validate(props, propName, componentName, location, propFullName) {
          var expectedTypes = [];
          for (var i2 = 0; i2 < arrayOfTypeCheckers.length; i2++) {
            var checker2 = arrayOfTypeCheckers[i2];
            var checkerResult = checker2(props, propName, componentName, location, propFullName, ReactPropTypesSecret);
            if (checkerResult == null) {
              return null;
            }
            if (checkerResult.data && has(checkerResult.data, "expectedType")) {
              expectedTypes.push(checkerResult.data.expectedType);
            }
          }
          var expectedTypesMessage = expectedTypes.length > 0 ? ", expected one of type [" + expectedTypes.join(", ") + "]" : "";
          return new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to " + ("`" + componentName + "`" + expectedTypesMessage + "."));
        }
        return createChainableTypeChecker(validate);
      }
      function createNodeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
          if (!isNode(props[propName])) {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to " + ("`" + componentName + "`, expected a ReactNode."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function invalidValidatorError(componentName, location, propFullName, key, type) {
        return new PropTypeError(
          (componentName || "React class") + ": " + location + " type `" + propFullName + "." + key + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + type + "`."
        );
      }
      function createShapeTypeChecker(shapeTypes) {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== "object") {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `object`."));
          }
          for (var key in shapeTypes) {
            var checker = shapeTypes[key];
            if (typeof checker !== "function") {
              return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
            }
            var error2 = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
            if (error2) {
              return error2;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createStrictShapeTypeChecker(shapeTypes) {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== "object") {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `object`."));
          }
          var allKeys = assign({}, props[propName], shapeTypes);
          for (var key in allKeys) {
            var checker = shapeTypes[key];
            if (has(shapeTypes, key) && typeof checker !== "function") {
              return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
            }
            if (!checker) {
              return new PropTypeError(
                "Invalid " + location + " `" + propFullName + "` key `" + key + "` supplied to `" + componentName + "`.\nBad object: " + JSON.stringify(props[propName], null, "  ") + "\nValid keys: " + JSON.stringify(Object.keys(shapeTypes), null, "  ")
              );
            }
            var error2 = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
            if (error2) {
              return error2;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function isNode(propValue) {
        switch (typeof propValue) {
          case "number":
          case "string":
          case "undefined":
            return true;
          case "boolean":
            return !propValue;
          case "object":
            if (Array.isArray(propValue)) {
              return propValue.every(isNode);
            }
            if (propValue === null || isValidElement(propValue)) {
              return true;
            }
            var iteratorFn = getIteratorFn(propValue);
            if (iteratorFn) {
              var iterator = iteratorFn.call(propValue);
              var step;
              if (iteratorFn !== propValue.entries) {
                while (!(step = iterator.next()).done) {
                  if (!isNode(step.value)) {
                    return false;
                  }
                }
              } else {
                while (!(step = iterator.next()).done) {
                  var entry = step.value;
                  if (entry) {
                    if (!isNode(entry[1])) {
                      return false;
                    }
                  }
                }
              }
            } else {
              return false;
            }
            return true;
          default:
            return false;
        }
      }
      function isSymbol(propType, propValue) {
        if (propType === "symbol") {
          return true;
        }
        if (!propValue) {
          return false;
        }
        if (propValue["@@toStringTag"] === "Symbol") {
          return true;
        }
        if (typeof Symbol === "function" && propValue instanceof Symbol) {
          return true;
        }
        return false;
      }
      function getPropType(propValue) {
        var propType = typeof propValue;
        if (Array.isArray(propValue)) {
          return "array";
        }
        if (propValue instanceof RegExp) {
          return "object";
        }
        if (isSymbol(propType, propValue)) {
          return "symbol";
        }
        return propType;
      }
      function getPreciseType(propValue) {
        if (typeof propValue === "undefined" || propValue === null) {
          return "" + propValue;
        }
        var propType = getPropType(propValue);
        if (propType === "object") {
          if (propValue instanceof Date) {
            return "date";
          } else if (propValue instanceof RegExp) {
            return "regexp";
          }
        }
        return propType;
      }
      function getPostfixForTypeWarning(value) {
        var type = getPreciseType(value);
        switch (type) {
          case "array":
          case "object":
            return "an " + type;
          case "boolean":
          case "date":
          case "regexp":
            return "a " + type;
          default:
            return type;
        }
      }
      function getClassName(propValue) {
        if (!propValue.constructor || !propValue.constructor.name) {
          return ANONYMOUS;
        }
        return propValue.constructor.name;
      }
      ReactPropTypes.checkPropTypes = checkPropTypes;
      ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
      ReactPropTypes.PropTypes = ReactPropTypes;
      return ReactPropTypes;
    };
  }
});

// node_modules/prop-types/index.js
var require_prop_types = __commonJS({
  "node_modules/prop-types/index.js"(exports, module) {
    if (true) {
      ReactIs = require_react_is();
      throwOnDirectAccess = true;
      module.exports = require_factoryWithTypeCheckers()(ReactIs.isElement, throwOnDirectAccess);
    } else {
      module.exports = null();
    }
    var ReactIs;
    var throwOnDirectAccess;
  }
});

// node_modules/@progress/kendo-intl/dist/es/cldr/default-data.js
var defaultData = {
  en: {
    name: "en",
    identity: {
      version: {
        _unicodeVersion: "14.0.0",
        _cldrVersion: "41"
      },
      language: "en"
    },
    territory: "US",
    numbers: {
      symbols: {
        decimal: ".",
        group: ",",
        list: ";",
        percentSign: "%",
        plusSign: "+",
        minusSign: "-",
        exponential: "E",
        superscriptingExponent: "\xD7",
        perMille: "\u2030",
        infinity: "\u221E",
        nan: "NaN",
        timeSeparator: ":",
        approximatelySign: "~"
      },
      decimal: {
        patterns: [
          "n"
        ],
        groupSize: [
          3
        ]
      },
      scientific: {
        patterns: [
          "nEn"
        ],
        groupSize: []
      },
      percent: {
        patterns: [
          "n%"
        ],
        groupSize: [
          3
        ]
      },
      currency: {
        patterns: [
          "$n"
        ],
        groupSize: [
          3
        ],
        "unitPattern-count-one": "n $",
        "unitPattern-count-other": "n $"
      },
      currencies: {
        BGN: {
          displayName: "Bulgarian Lev",
          "displayName-count-one": "Bulgarian lev",
          "displayName-count-other": "Bulgarian leva",
          symbol: "BGN"
        },
        EUR: {
          displayName: "Euro",
          "displayName-count-one": "euro",
          "displayName-count-other": "euros",
          symbol: "\u20AC",
          "symbol-alt-narrow": "\u20AC"
        },
        USD: {
          displayName: "US Dollar",
          "displayName-count-one": "US dollar",
          "displayName-count-other": "US dollars",
          symbol: "$",
          "symbol-alt-narrow": "$"
        }
      },
      localeCurrency: "USD",
      accounting: {
        patterns: [
          "$n",
          "($n)"
        ],
        groupSize: [
          3
        ]
      }
    },
    calendar: {
      gmtFormat: "GMT{0}",
      gmtZeroFormat: "GMT",
      patterns: {
        d: "M/d/y",
        D: "EEEE, MMMM d, y",
        m: "MMM d",
        M: "MMMM d",
        y: "MMM y",
        Y: "MMMM y",
        F: "EEEE, MMMM d, y h:mm:ss a",
        g: "M/d/y h:mm a",
        G: "M/d/y h:mm:ss a",
        t: "h:mm a",
        T: "h:mm:ss a",
        s: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
        u: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'"
      },
      dateTimeFormats: {
        full: "{1} 'at' {0}",
        long: "{1} 'at' {0}",
        medium: "{1}, {0}",
        short: "{1}, {0}",
        availableFormats: {
          Bh: "h B",
          Bhm: "h:mm B",
          Bhms: "h:mm:ss B",
          d: "d",
          E: "ccc",
          EBhm: "E h:mm B",
          EBhms: "E h:mm:ss B",
          Ed: "d E",
          Ehm: "E h:mm a",
          EHm: "E HH:mm",
          Ehms: "E h:mm:ss a",
          EHms: "E HH:mm:ss",
          Gy: "y G",
          GyMd: "M/d/y GGGGG",
          GyMMM: "MMM y G",
          GyMMMd: "MMM d, y G",
          GyMMMEd: "E, MMM d, y G",
          h: "h a",
          H: "HH",
          hm: "h:mm a",
          Hm: "HH:mm",
          hms: "h:mm:ss a",
          Hms: "HH:mm:ss",
          hmsv: "h:mm:ss a v",
          Hmsv: "HH:mm:ss v",
          hmv: "h:mm a v",
          Hmv: "HH:mm v",
          M: "L",
          Md: "M/d",
          MEd: "E, M/d",
          MMM: "LLL",
          MMMd: "MMM d",
          MMMEd: "E, MMM d",
          MMMMd: "MMMM d",
          "MMMMW-count-one": "'week' W 'of' MMMM",
          "MMMMW-count-other": "'week' W 'of' MMMM",
          ms: "mm:ss",
          y: "y",
          yM: "M/y",
          yMd: "M/d/y",
          yMEd: "E, M/d/y",
          yMMM: "MMM y",
          yMMMd: "MMM d, y",
          yMMMEd: "E, MMM d, y",
          yMMMM: "MMMM y",
          yQQQ: "QQQ y",
          yQQQQ: "QQQQ y",
          "yw-count-one": "'week' w 'of' Y",
          "yw-count-other": "'week' w 'of' Y"
        }
      },
      timeFormats: {
        full: "h:mm:ss a zzzz",
        long: "h:mm:ss a z",
        medium: "h:mm:ss a",
        short: "h:mm a"
      },
      dateFormats: {
        full: "EEEE, MMMM d, y",
        long: "MMMM d, y",
        medium: "MMM d, y",
        short: "M/d/yy"
      },
      days: {
        format: {
          abbreviated: [
            "Sun",
            "Mon",
            "Tue",
            "Wed",
            "Thu",
            "Fri",
            "Sat"
          ],
          narrow: [
            "S",
            "M",
            "T",
            "W",
            "T",
            "F",
            "S"
          ],
          short: [
            "Su",
            "Mo",
            "Tu",
            "We",
            "Th",
            "Fr",
            "Sa"
          ],
          wide: [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
          ]
        },
        "stand-alone": {
          abbreviated: [
            "Sun",
            "Mon",
            "Tue",
            "Wed",
            "Thu",
            "Fri",
            "Sat"
          ],
          narrow: [
            "S",
            "M",
            "T",
            "W",
            "T",
            "F",
            "S"
          ],
          short: [
            "Su",
            "Mo",
            "Tu",
            "We",
            "Th",
            "Fr",
            "Sa"
          ],
          wide: [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
          ]
        }
      },
      months: {
        format: {
          abbreviated: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec"
          ],
          narrow: [
            "J",
            "F",
            "M",
            "A",
            "M",
            "J",
            "J",
            "A",
            "S",
            "O",
            "N",
            "D"
          ],
          wide: [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December"
          ]
        },
        "stand-alone": {
          abbreviated: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec"
          ],
          narrow: [
            "J",
            "F",
            "M",
            "A",
            "M",
            "J",
            "J",
            "A",
            "S",
            "O",
            "N",
            "D"
          ],
          wide: [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December"
          ]
        }
      },
      quarters: {
        format: {
          abbreviated: [
            "Q1",
            "Q2",
            "Q3",
            "Q4"
          ],
          narrow: [
            "1",
            "2",
            "3",
            "4"
          ],
          wide: [
            "1st quarter",
            "2nd quarter",
            "3rd quarter",
            "4th quarter"
          ]
        },
        "stand-alone": {
          abbreviated: [
            "Q1",
            "Q2",
            "Q3",
            "Q4"
          ],
          narrow: [
            "1",
            "2",
            "3",
            "4"
          ],
          wide: [
            "1st quarter",
            "2nd quarter",
            "3rd quarter",
            "4th quarter"
          ]
        }
      },
      dayPeriods: {
        format: {
          abbreviated: {
            midnight: "midnight",
            am: "AM",
            "am-alt-variant": "am",
            noon: "noon",
            pm: "PM",
            "pm-alt-variant": "pm",
            morning1: "in the morning",
            afternoon1: "in the afternoon",
            evening1: "in the evening",
            night1: "at night"
          },
          narrow: {
            midnight: "mi",
            am: "a",
            "am-alt-variant": "am",
            noon: "n",
            pm: "p",
            "pm-alt-variant": "pm",
            morning1: "in the morning",
            afternoon1: "in the afternoon",
            evening1: "in the evening",
            night1: "at night"
          },
          wide: {
            midnight: "midnight",
            am: "AM",
            "am-alt-variant": "am",
            noon: "noon",
            pm: "PM",
            "pm-alt-variant": "pm",
            morning1: "in the morning",
            afternoon1: "in the afternoon",
            evening1: "in the evening",
            night1: "at night"
          }
        },
        "stand-alone": {
          abbreviated: {
            midnight: "midnight",
            am: "AM",
            "am-alt-variant": "am",
            noon: "noon",
            pm: "PM",
            "pm-alt-variant": "pm",
            morning1: "morning",
            afternoon1: "afternoon",
            evening1: "evening",
            night1: "night"
          },
          narrow: {
            midnight: "midnight",
            am: "AM",
            "am-alt-variant": "am",
            noon: "noon",
            pm: "PM",
            "pm-alt-variant": "pm",
            morning1: "morning",
            afternoon1: "afternoon",
            evening1: "evening",
            night1: "night"
          },
          wide: {
            midnight: "midnight",
            am: "AM",
            "am-alt-variant": "am",
            noon: "noon",
            pm: "PM",
            "pm-alt-variant": "pm",
            morning1: "morning",
            afternoon1: "afternoon",
            evening1: "evening",
            night1: "night"
          }
        }
      },
      eras: {
        format: {
          wide: {
            "0": "Before Christ",
            "1": "Anno Domini",
            "0-alt-variant": "Before Common Era",
            "1-alt-variant": "Common Era"
          },
          abbreviated: {
            "0": "BC",
            "1": "AD",
            "0-alt-variant": "BCE",
            "1-alt-variant": "CE"
          },
          narrow: {
            "0": "B",
            "1": "A",
            "0-alt-variant": "BCE",
            "1-alt-variant": "CE"
          }
        }
      },
      dateFields: {
        era: {
          wide: "era",
          short: "era",
          narrow: "era"
        },
        year: {
          wide: "year",
          short: "yr.",
          narrow: "yr."
        },
        quarter: {
          wide: "quarter",
          short: "qtr.",
          narrow: "qtr."
        },
        month: {
          wide: "month",
          short: "mo.",
          narrow: "mo."
        },
        week: {
          wide: "week",
          short: "wk.",
          narrow: "wk."
        },
        weekOfMonth: {
          wide: "week of month",
          short: "wk. of mo.",
          narrow: "wk. of mo."
        },
        day: {
          wide: "day",
          short: "day",
          narrow: "day"
        },
        dayOfYear: {
          wide: "day of year",
          short: "day of yr.",
          narrow: "day of yr."
        },
        weekday: {
          wide: "day of the week",
          short: "day of wk.",
          narrow: "day of wk."
        },
        weekdayOfMonth: {
          wide: "weekday of the month",
          short: "wkday. of mo.",
          narrow: "wkday. of mo."
        },
        dayperiod: {
          short: "AM/PM",
          wide: "AM/PM",
          narrow: "AM/PM"
        },
        hour: {
          wide: "hour",
          short: "hr.",
          narrow: "hr."
        },
        minute: {
          wide: "minute",
          short: "min.",
          narrow: "min."
        },
        second: {
          wide: "second",
          short: "sec.",
          narrow: "sec."
        },
        zone: {
          wide: "time zone",
          short: "zone",
          narrow: "zone"
        },
        millisecond: {
          narrow: "ms",
          short: "ms",
          wide: "millisecond"
        }
      }
    }
  },
  supplemental: {
    likelySubtags: {
      en: "en-Latn-US"
    },
    currencyData: {
      region: {
        US: [
          {
            USD: {
              _from: "1792-01-01"
            }
          }
        ]
      }
    },
    weekData: {
      firstDay: {
        US: "sun"
      },
      weekendStart: {
        "001": "sat"
      },
      weekendEnd: {
        "001": "sun"
      }
    }
  }
};
var default_data_default = defaultData;

// node_modules/@progress/kendo-intl/dist/es/common/is-string.js
function isString(value) {
  return typeof value === "string";
}

// node_modules/@progress/kendo-intl/dist/es/error-details.js
var error_details_default = {
  "NoLocale": "Missing locale info for '{0}'",
  "NoCurrency": "Cannot determine currency information. Please load the locale currencies data.",
  "NoSupplementalCurrency": "Cannot determine currency. Please load the supplemental currencyData.",
  "NoCurrencyRegion": "No currency data for region '{0}'",
  "NoCurrencyDisplay": "Cannot determine currency display information. Please load the locale currencies data. The default culture does not include the all currencies data.",
  "NoGMTInfo": "Cannot determine locale GMT format. Please load the locale timeZoneNames data.",
  "NoWeekData": "Cannot determine locale first day of week. Please load the supplemental weekData.",
  "NoFirstDay": "Cannot determine locale first day of week. Please load the supplemental weekData. The default culture includes only the 'en-US' first day info.",
  "NoValidCurrency": "Cannot determine a default currency for the {0} locale. Please specify explicitly the currency with the format options.",
  "NoDateFieldNames": "Cannot determine the locale date field names. Please load the locale dateFields data."
};

// node_modules/@progress/kendo-intl/dist/es/errors.js
var formatRegExp = /\{(\d+)}?\}/g;
var IntlError = function IntlError2(ref) {
  var name = ref.name;
  var message = ref.message;
  if (!name || !message) {
    throw new Error("{ name: string, message: string } object is required!");
  }
  this.name = name;
  this.message = message;
};
IntlError.prototype.formatMessage = function formatMessage() {
  var values = [], len = arguments.length;
  while (len--)
    values[len] = arguments[len];
  var flattenValues = flatten(values);
  var formattedMessage = this.message.replace(formatRegExp, function(match, index) {
    return flattenValues[parseInt(index, 10)];
  });
  return this.name + ": " + formattedMessage;
};
IntlError.prototype.error = function error() {
  var values = [], len = arguments.length;
  while (len--)
    values[len] = arguments[len];
  return new Error(this.formatMessage(values));
};
var flatten = function(arr) {
  return arr.reduce(function(a, b) {
    return a.concat(b);
  }, []);
};
var toIntlErrors = function(errors2) {
  var predicate = function(prev, name) {
    prev[name] = new IntlError({ name, message: errors2[name] });
    return prev;
  };
  return Object.keys(errors2).reduce(predicate, {});
};
var errors = toIntlErrors(error_details_default);

// node_modules/@progress/kendo-intl/dist/es/cldr/info.js
function availableLocaleInfo(fullName, suffixes) {
  var parts = fullName.split("-");
  var language = parts[0];
  var script = parts[1];
  var territory = parts[2];
  return cldr[fullName] || suffixes.indexOf(territory) !== -1 && cldr[language + "-" + territory] || suffixes.indexOf(script) !== -1 && cldr[language + "-" + script] || cldr[language];
}
function localeFullName(language, suffixes) {
  var likelySubtags = cldr.supplemental.likelySubtags;
  for (var idx = 0; idx < suffixes.length; idx++) {
    var name = likelySubtags[language + "-" + suffixes[idx]];
    if (name) {
      return name;
    }
  }
  if (likelySubtags[language]) {
    return likelySubtags[language];
  }
}
var cldr = default_data_default;
function getLocaleInfo(locale) {
  var info;
  if (isString(locale)) {
    info = localeInfo(locale);
  } else {
    info = locale;
  }
  return info;
}
function localeInfo(locale) {
  if (cldr[locale]) {
    return cldr[locale];
  }
  var likelySubtags = cldr.supplemental.likelySubtags;
  if (likelySubtags) {
    var parts = locale.split("-");
    var language = parts[0];
    var suffixes = parts.slice(1);
    var fullName = localeFullName(language, suffixes);
    var info = fullName ? availableLocaleInfo(fullName, suffixes) : null;
    if (info) {
      return info;
    }
  }
  throw errors.NoLocale.error(locale);
}

// node_modules/@progress/kendo-intl/dist/es/common/constants.js
var DECIMAL = "decimal";
var CURRENCY = "currency";
var ACCOUNTING = "accounting";
var PERCENT = "percent";
var SCIENTIFIC = "scientific";
var CURRENCY_PLACEHOLDER = "$";
var PERCENT_PLACEHOLDER = "%";
var NUMBER_PLACEHOLDER = "n";
var LIST_SEPARATOR = ";";
var GROUP_SEPARATOR = ",";
var POINT = ".";
var EMPTY = "";
var DEFAULT_LOCALE = "en";

// node_modules/@progress/kendo-intl/dist/es/cldr/territory.js
function territoryFromName(name, identity) {
  var likelySubtags = cldr.supplemental.likelySubtags;
  var parts = name.split("-");
  if (likelySubtags) {
    var likelyName = likelySubtags[name] || likelySubtags[parts[0]];
    if (likelyName) {
      parts = likelyName.split("-");
    }
  }
  if (identity) {
    for (var idx = parts.length - 1; idx >= 1; idx--) {
      var part = parts[idx];
      if (part === identity.variant || part === identity.script) {
        parts.splice(idx, 1);
      }
    }
  }
  var length = parts.length;
  if (length > 1) {
    var territory = parts[length - 1];
    return territory.toUpperCase();
  }
}
function localeTerritory(info) {
  if (info.territory) {
    return info.territory;
  }
  var name = info.name;
  var identity = info.identity;
  var territory;
  if (identity && identity.territory) {
    territory = identity.territory;
  } else {
    territory = territoryFromName(name, identity);
  }
  info.territory = territory;
  return territory;
}

// node_modules/@progress/kendo-intl/dist/es/cldr/date-field-name.js
function dateFieldName(options, locale) {
  if (locale === void 0)
    locale = DEFAULT_LOCALE;
  var info = localeInfo(locale);
  var dateFields = info.calendar.dateFields;
  if (!dateFields) {
    throw errors.NoDateFieldNames.error();
  }
  var fieldNameInfo = dateFields[options.type] || {};
  return fieldNameInfo[options.nameType] || fieldNameInfo["wide"];
}

// node_modules/@progress/kendo-intl/dist/es/cldr/date-format-names.js
function lowerArray(arr) {
  var result = [];
  for (var idx = 0; idx < arr.length; idx++) {
    result.push(arr[idx].toLowerCase());
  }
  return result;
}
function lowerObject(obj) {
  var result = {};
  for (var field in obj) {
    result[field] = obj[field].toLowerCase();
  }
  return result;
}
function cloneLower(obj) {
  var result = Array.isArray(obj) ? lowerArray(obj) : lowerObject(obj);
  return result;
}
function dateFormatNames(locale, options) {
  var type = options.type;
  var nameType = options.nameType;
  var standAlone = options.standAlone;
  var lower = options.lower;
  var info = getLocaleInfo(locale);
  var formatType = standAlone ? "stand-alone" : "format";
  var lowerNameType = (lower ? "lower-" : EMPTY) + nameType;
  var formatNames2 = info.calendar[type][formatType];
  var result = formatNames2[lowerNameType];
  if (!result && lower) {
    result = formatNames2[lowerNameType] = cloneLower(formatNames2[nameType]);
  }
  return result;
}

// node_modules/@progress/kendo-intl/dist/es/cldr/parse-range-date.js
function parseRangeDate(value) {
  var parts = value.split("-");
  var year = parseInt(parts[0], 10);
  var month = parseInt(parts[1], 10) - 1;
  var day = parseInt(parts[2], 10);
  return new Date(year, month, day);
}

// node_modules/@progress/kendo-intl/dist/es/cldr/currency.js
var NoCurrency = errors.NoCurrency;
var NoCurrencyDisplay = errors.NoCurrencyDisplay;
var NoSupplementalCurrency = errors.NoSupplementalCurrency;
var NoCurrencyRegion = errors.NoCurrencyRegion;
var NoValidCurrency = errors.NoValidCurrency;
var DEFAULT_CURRENCY_FRACTIONS = 2;
var SYMBOL = "symbol";
var INVALID_CURRENCY_CODE = "XXX";
var GLOBAL_CURRENCIES = {
  "001": "USD",
  // 001 refers to world. not sure if it is correct to assume USD but seems better than throw an error
  "150": "EUR"
  // 150 territory for Europe
};
function getCurrencyInfo(locale, currency, throwIfNoValid) {
  var info = getLocaleInfo(locale);
  var currencies = info.numbers.currencies;
  if (!currencies) {
    if (throwIfNoValid) {
      throw NoCurrency.error();
    }
    return;
  }
  var currencyDisplayInfo = currencies[currency];
  if (!currencyDisplayInfo) {
    if (throwIfNoValid) {
      throw NoCurrencyDisplay.error();
    }
    return;
  }
  return currencyDisplayInfo;
}
function lengthComparer(a, b) {
  return b.length - a.length;
}
function regionCurrency(regionCurrencies) {
  var latestValidUntil, latestValidUntilRange;
  var latestStillValid, latestStillValidDate;
  for (var idx = 0; idx < regionCurrencies.length; idx++) {
    var currency = regionCurrencies[idx];
    var code = Object.keys(currency)[0];
    var info = currency[code];
    if (code !== INVALID_CURRENCY_CODE && info._tender !== "false" && info._from) {
      if (!info._to) {
        var stillValidDate = parseRangeDate(info._from);
        if (!latestStillValidDate || latestStillValidDate < stillValidDate) {
          latestStillValid = code;
          latestStillValidDate = stillValidDate;
        }
      } else if (!latestStillValid) {
        var validFrom = parseRangeDate(info._from);
        var validTo = parseRangeDate(info._to);
        if (!latestValidUntilRange || latestValidUntilRange.to < validTo || latestValidUntilRange.from < validFrom) {
          latestValidUntil = code;
          latestValidUntilRange = {
            from: validFrom,
            to: validTo
          };
        }
      }
    }
  }
  return latestStillValid || latestValidUntil;
}
function currencyDisplays(locale, currency, throwIfNoValid) {
  if (throwIfNoValid === void 0)
    throwIfNoValid = true;
  var currencyInfo = getCurrencyInfo(locale, currency, throwIfNoValid);
  if (!currencyInfo) {
    return;
  }
  if (!currencyInfo.displays) {
    var displays = [currency];
    for (var field in currencyInfo) {
      displays.push(currencyInfo[field]);
    }
    displays.sort(lengthComparer);
    currencyInfo.displays = displays;
  }
  return currencyInfo.displays;
}
function currencyDisplay(locale, options) {
  var value = options.value;
  var currency = options.currency;
  var currencyDisplay2 = options.currencyDisplay;
  if (currencyDisplay2 === void 0)
    currencyDisplay2 = SYMBOL;
  if (currencyDisplay2 === "code") {
    return currency;
  }
  var currencyInfo = getCurrencyInfo(locale, currency, true);
  var result;
  if (currencyDisplay2 === SYMBOL) {
    result = currencyInfo["symbol-alt-narrow"] || currencyInfo[SYMBOL] || currency;
  } else {
    if (typeof value === "undefined" || value !== 1) {
      result = currencyInfo["displayName-count-other"];
    } else {
      result = currencyInfo["displayName-count-one"];
    }
  }
  return result;
}
function currencyFractionOptions(code) {
  var minimumFractionDigits = DEFAULT_CURRENCY_FRACTIONS;
  var maximumFractionDigits = DEFAULT_CURRENCY_FRACTIONS;
  var fractions = ((cldr.supplemental.currencyData || {}).fractions || {})[code];
  if (fractions && fractions._digits) {
    maximumFractionDigits = minimumFractionDigits = parseInt(fractions._digits, 10);
  }
  return {
    minimumFractionDigits,
    maximumFractionDigits
  };
}
function territoryCurrencyCode(territory, throwIfNoValid) {
  if (throwIfNoValid === void 0)
    throwIfNoValid = true;
  if (GLOBAL_CURRENCIES[territory]) {
    return GLOBAL_CURRENCIES[territory];
  }
  var currencyData = cldr.supplemental.currencyData;
  if (!currencyData) {
    if (throwIfNoValid) {
      throw NoSupplementalCurrency.error();
    }
    return;
  }
  var regionCurrencies = currencyData.region[territory];
  if (!regionCurrencies) {
    if (throwIfNoValid) {
      throw NoCurrencyRegion.error(territory);
    }
    return;
  }
  var currencyCode = regionCurrency(regionCurrencies);
  return currencyCode;
}
function localeCurrency(locale, throwIfNoValid) {
  var info = getLocaleInfo(locale);
  var numbers = info.numbers;
  if (!numbers.localeCurrency) {
    var currency = territoryCurrencyCode(localeTerritory(info), throwIfNoValid);
    if (!currency && throwIfNoValid) {
      throw NoValidCurrency.error(info.name);
    }
    numbers.localeCurrency = currency;
  }
  return numbers.localeCurrency;
}

// node_modules/@progress/kendo-intl/dist/es/cldr/constants.js
var DAYS_OF_WEEK = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
var DEFAULT_TERRITORY = "001";

// node_modules/@progress/kendo-intl/dist/es/cldr/first-day.js
var NoWeekData = errors.NoWeekData;
var NoFirstDay = errors.NoFirstDay;
function firstDay(locale) {
  var info = getLocaleInfo(locale);
  if (!isNaN(info.firstDay)) {
    return info.firstDay;
  }
  var weekData = cldr.supplemental.weekData;
  if (!weekData) {
    throw NoWeekData.error();
  }
  var firstDay2 = weekData.firstDay[localeTerritory(info)] || weekData.firstDay[DEFAULT_TERRITORY];
  if (!firstDay2) {
    throw NoFirstDay.error();
  }
  info.firstDay = DAYS_OF_WEEK.indexOf(firstDay2);
  return info.firstDay;
}

// node_modules/@progress/kendo-intl/dist/es/cldr/weekend-range.js
var NoWeekData2 = errors.NoWeekData;

// node_modules/@progress/kendo-intl/dist/es/cldr/number-symbols.js
function numberSymbols(locale) {
  var info = getLocaleInfo(locale);
  return info.numbers.symbols;
}

// node_modules/@progress/kendo-intl/dist/es/common/is-negative-zero.js
function isNegativeZero(value) {
  return 1 / value === -Infinity;
}

// node_modules/@progress/kendo-intl/dist/es/numbers/format-currency-symbol.js
function formatCurrencySymbol(info, options) {
  if (options === void 0)
    options = {};
  if (!options.currency) {
    options.currency = localeCurrency(info, true);
  }
  var display = currencyDisplay(info, options);
  return display;
}

// node_modules/@progress/kendo-intl/dist/es/numbers/group-integer.js
function groupInteger(number2, start, end, options, info) {
  var symbols = info.numbers.symbols;
  var decimalIndex = number2.indexOf(symbols.decimal);
  var groupSizes = options.groupSize.slice();
  var groupSize = groupSizes.shift();
  var integerEnd = decimalIndex !== -1 ? decimalIndex : end + 1;
  var integer = number2.substring(start, integerEnd);
  var result = number2;
  var integerLength = integer.length;
  if (integerLength >= groupSize) {
    var idx = integerLength;
    var parts = [];
    while (idx > -1) {
      var value = integer.substring(idx - groupSize, idx);
      if (value) {
        parts.push(value);
      }
      idx -= groupSize;
      var newGroupSize = groupSizes.shift();
      groupSize = newGroupSize !== void 0 ? newGroupSize : groupSize;
      if (groupSize === 0) {
        value = integer.substring(0, idx);
        if (value) {
          parts.push(value);
        }
        break;
      }
    }
    integer = parts.reverse().join(symbols.group);
    result = number2.substring(0, start) + integer + number2.substring(integerEnd);
  }
  return result;
}

// node_modules/@progress/kendo-intl/dist/es/numbers/is-currency-style.js
function isCurrencyStyle(style) {
  return style === CURRENCY || style === ACCOUNTING;
}

// node_modules/@progress/kendo-intl/dist/es/common/pad.js
function pad(number2, digits, right) {
  if (digits === void 0)
    digits = 2;
  if (right === void 0)
    right = false;
  var count = digits - String(number2).length;
  var result = number2;
  if (count > 0) {
    var padString = new Array(count + 1).join("0");
    result = right ? number2 + padString : padString + number2;
  }
  return result;
}

// node_modules/@progress/kendo-intl/dist/es/common/round.js
var MAX_PRECISION = 20;
function round(value, precision) {
  var result = value;
  var decimals = precision || 0;
  result = result.toString().split("e");
  result = Math.round(Number(result[0] + "e" + (result[1] ? Number(result[1]) + decimals : decimals)));
  result = result.toString().split("e");
  result = Number(result[0] + "e" + (result[1] ? Number(result[1]) - decimals : -decimals));
  return result.toFixed(Math.min(decimals, MAX_PRECISION));
}

// node_modules/@progress/kendo-intl/dist/es/numbers/standard-number-format.js
var DEFAULT_DECIMAL_ROUNDING = 3;
var DEFAULT_PERCENT_ROUNDING = 0;
var trailingZeroRegex = /0+$/;
function fractionOptions(options) {
  var minimumFractionDigits = options.minimumFractionDigits;
  var maximumFractionDigits = options.maximumFractionDigits;
  var style = options.style;
  var isCurrency = isCurrencyStyle(style);
  var currencyFractions;
  if (isCurrency) {
    currencyFractions = currencyFractionOptions(options.currency);
  }
  if (minimumFractionDigits === void 0) {
    minimumFractionDigits = isCurrency ? currencyFractions.minimumFractionDigits : 0;
  }
  if (maximumFractionDigits === void 0) {
    if (style === PERCENT) {
      maximumFractionDigits = Math.max(minimumFractionDigits, DEFAULT_PERCENT_ROUNDING);
    } else if (isCurrency) {
      maximumFractionDigits = Math.max(minimumFractionDigits, currencyFractions.maximumFractionDigits);
    } else {
      maximumFractionDigits = Math.max(minimumFractionDigits, DEFAULT_DECIMAL_ROUNDING);
    }
  }
  return {
    minimumFractionDigits,
    maximumFractionDigits
  };
}
function applyPattern(value, pattern, symbol) {
  var result = EMPTY;
  for (var idx = 0, length = pattern.length; idx < length; idx++) {
    var ch = pattern.charAt(idx);
    if (ch === NUMBER_PLACEHOLDER) {
      result += value;
    } else if (ch === CURRENCY_PLACEHOLDER || ch === PERCENT_PLACEHOLDER) {
      result += symbol;
    } else {
      result += ch;
    }
  }
  return result;
}
function currencyUnitPattern(info, value) {
  var currencyInfo = info.numbers.currency;
  var pattern = value !== 1 ? currencyInfo["unitPattern-count-other"] : currencyInfo["unitPattern-count-one"];
  if (value < 0) {
    pattern = pattern.replace(NUMBER_PLACEHOLDER, "-" + NUMBER_PLACEHOLDER);
  }
  return pattern;
}
function standardNumberFormat(number2, options, info) {
  var symbols = info.numbers.symbols;
  var style = options.style;
  var isCurrency = isCurrencyStyle(style);
  if (style === SCIENTIFIC) {
    var exponential = options.minimumFractionDigits !== void 0 ? number2.toExponential(options.minimumFractionDigits) : number2.toExponential();
    return exponential.replace(POINT, symbols.decimal);
  }
  var value = number2;
  var symbol;
  if (isCurrency) {
    options.value = value;
    symbol = formatCurrencySymbol(info, options);
  }
  if (style === PERCENT) {
    value *= 100;
    symbol = symbols.percentSign;
  }
  var ref = fractionOptions(options);
  var minimumFractionDigits = ref.minimumFractionDigits;
  var maximumFractionDigits = ref.maximumFractionDigits;
  value = round(value, maximumFractionDigits);
  var negative = value < 0;
  var negativeZero = isNegativeZero(number2);
  var parts = value.split(POINT);
  var integer = parts[0];
  var fraction = pad(parts[1] ? parts[1].replace(trailingZeroRegex, EMPTY) : EMPTY, minimumFractionDigits, true);
  if (negative) {
    integer = integer.substring(1);
  }
  if (options.minimumIntegerDigits) {
    integer = pad(integer, options.minimumIntegerDigits);
  }
  var formattedValue = options.useGrouping !== false ? groupInteger(integer, 0, integer.length, options, info) : integer;
  if (fraction) {
    formattedValue += symbols.decimal + fraction;
  }
  var pattern;
  if (isCurrency && options.currencyDisplay === "name") {
    pattern = currencyUnitPattern(info, number2);
  } else {
    var patterns = options.patterns;
    pattern = negative || negativeZero ? patterns[1] || "-" + patterns[0] : patterns[0];
  }
  if (pattern === NUMBER_PLACEHOLDER && !negative) {
    return formattedValue;
  }
  var result = applyPattern(formattedValue, pattern, symbol);
  return result;
}

// node_modules/@progress/kendo-intl/dist/es/numbers/utils.js
var literalRegExp = /(\\.)|(['][^']*[']?)|(["][^"]*["]?)/g;
var PLACEHOLDER = "__??__";
function setStyleOptions(formatOptions2, info) {
  var format2 = formatOptions2.format;
  if (format2.indexOf(PERCENT_PLACEHOLDER) !== -1) {
    formatOptions2.style = PERCENT;
    formatOptions2.symbol = info.numbers.symbols.percentSign;
    formatOptions2.number *= 100;
  }
  if (format2.indexOf(CURRENCY_PLACEHOLDER) !== -1) {
    formatOptions2.style = CURRENCY;
    formatOptions2.symbol = formatCurrencySymbol(info);
  }
}
function setFormatLiterals(formatOptions2) {
  var format2 = formatOptions2.format;
  if (format2.indexOf("'") > -1 || format2.indexOf('"') > -1 || format2.indexOf("\\") > -1) {
    var literals = formatOptions2.literals = [];
    formatOptions2.format = format2.replace(literalRegExp, function(match) {
      var quoteChar = match.charAt(0).replace("\\", EMPTY);
      var literal = match.slice(1).replace(quoteChar, EMPTY);
      literals.push(literal);
      return PLACEHOLDER;
    });
  }
}
function replaceLiterals(number2, literals) {
  var result = number2;
  if (literals) {
    var length = literals.length;
    for (var idx = 0; idx < length; idx++) {
      result = result.replace(PLACEHOLDER, literals[idx]);
    }
  }
  return result;
}

// node_modules/@progress/kendo-intl/dist/es/numbers/custom-number-format.js
var SHARP = "#";
var ZERO = "0";
var trailingZerosRegExp = /(\.(?:[0-9]*[1-9])?)0+$/g;
var trailingPointRegExp = /\.$/;
var commaRegExp = /,/g;
function trimTrailingZeros(value, lastZero) {
  var trimRegex;
  if (lastZero === 0) {
    trimRegex = trailingZerosRegExp;
  } else {
    trimRegex = new RegExp("(\\.[0-9]{" + lastZero + "}[1-9]*)0+$", "g");
  }
  return value.replace(trimRegex, "$1").replace(trailingPointRegExp, EMPTY);
}
function roundNumber(formatOptions2) {
  var number2 = formatOptions2.number;
  var format2 = formatOptions2.format;
  var decimalIndex = format2.indexOf(POINT);
  if (decimalIndex !== -1) {
    var zeroIndex = format2.lastIndexOf(ZERO) - decimalIndex;
    var sharpIndex = format2.lastIndexOf(SHARP) - decimalIndex;
    var hasZero = zeroIndex > -1;
    var hasSharp = sharpIndex > -1;
    var fraction = number2.toString().split("e");
    if (fraction[1]) {
      fraction = round(number2, Math.abs(fraction[1]));
    } else {
      fraction = fraction[0];
    }
    fraction = fraction.split(POINT)[1] || EMPTY;
    var precision = fraction.length;
    var trailingZeros = -1;
    if (!hasZero && !hasSharp) {
      formatOptions2.format = format2.substring(0, decimalIndex) + format2.substring(decimalIndex + 1);
      decimalIndex = -1;
      precision = 0;
    } else if (hasZero && zeroIndex > sharpIndex) {
      precision = zeroIndex;
    } else if (sharpIndex > zeroIndex) {
      if (hasSharp && precision > sharpIndex) {
        precision = sharpIndex;
      } else if (hasZero && precision < zeroIndex) {
        precision = zeroIndex;
      }
      trailingZeros = hasZero ? zeroIndex : 0;
    }
    if (precision > -1) {
      number2 = round(number2, precision);
      if (trailingZeros > -1) {
        number2 = trimTrailingZeros(number2, trailingZeros);
      }
    }
  } else {
    number2 = round(number2);
  }
  if (formatOptions2.negative && number2 * -1 >= 0 && !formatOptions2.negativeZero) {
    formatOptions2.negative = false;
  }
  formatOptions2.number = number2;
  formatOptions2.decimalIndex = decimalIndex;
}
function isConstantFormat(format2) {
  return format2.indexOf(SHARP) === -1 && format2.indexOf(ZERO) === -1;
}
function setValueSpecificFormat(formatOptions2) {
  var number2 = formatOptions2.number;
  var format2 = formatOptions2.format;
  format2 = format2.split(LIST_SEPARATOR);
  if ((formatOptions2.negative || formatOptions2.negativeZero) && format2[1]) {
    format2 = format2[1];
    formatOptions2.hasNegativeFormat = true;
  } else if (number2 === 0) {
    var zeroFormat = format2[2];
    format2 = zeroFormat || format2[0];
    if (zeroFormat && isConstantFormat(zeroFormat)) {
      formatOptions2.constant = zeroFormat;
    }
  } else {
    format2 = format2[0];
  }
  formatOptions2.format = format2;
}
function setGroupOptions(formatOptions2) {
  formatOptions2.hasGroup = formatOptions2.format.indexOf(GROUP_SEPARATOR) > -1;
  if (formatOptions2.hasGroup) {
    formatOptions2.format = formatOptions2.format.replace(commaRegExp, EMPTY);
  }
}
function placeholderIndex(index1, index2, start) {
  var index;
  if (index1 === -1 && index2 !== -1) {
    index = index2;
  } else if (index1 !== -1 && index2 === -1) {
    index = index1;
  } else {
    index = start ? Math.min(index1, index2) : Math.max(index1, index2);
  }
  return index;
}
function setPlaceholderIndices(formatOptions2) {
  var format2 = formatOptions2.format;
  var sharpIndex = format2.indexOf(SHARP);
  var zeroIndex = format2.indexOf(ZERO);
  var start = placeholderIndex(sharpIndex, zeroIndex, true);
  sharpIndex = format2.lastIndexOf(SHARP);
  zeroIndex = format2.lastIndexOf(ZERO);
  var end = placeholderIndex(sharpIndex, zeroIndex);
  if (start === format2.length) {
    end = start;
  }
  formatOptions2.start = start;
  formatOptions2.end = end;
  formatOptions2.lastZeroIndex = zeroIndex;
}
function replaceStyleSymbols(number2, style, symbol) {
  var result = number2;
  if (style === CURRENCY || style === PERCENT) {
    result = EMPTY;
    for (var idx = 0, length = number2.length; idx < length; idx++) {
      var ch = number2.charAt(idx);
      result += ch === CURRENCY_PLACEHOLDER || ch === PERCENT_PLACEHOLDER ? symbol : ch;
    }
  }
  return result;
}
function replacePlaceHolders(formatOptions2, info) {
  var start = formatOptions2.start;
  var end = formatOptions2.end;
  var negative = formatOptions2.negative;
  var negativeZero = formatOptions2.negativeZero;
  var format2 = formatOptions2.format;
  var decimalIndex = formatOptions2.decimalIndex;
  var lastZeroIndex = formatOptions2.lastZeroIndex;
  var hasNegativeFormat = formatOptions2.hasNegativeFormat;
  var hasGroup = formatOptions2.hasGroup;
  var number2 = formatOptions2.number;
  var value = number2.toString().split(POINT);
  var length = format2.length;
  var integer = value[0];
  var fraction = value[1] || EMPTY;
  var integerLength = integer.length;
  var replacement = EMPTY;
  number2 = format2.substring(0, start);
  if ((negative || negativeZero) && !hasNegativeFormat) {
    number2 += "-";
  }
  for (var idx = start; idx < length; idx++) {
    var ch = format2.charAt(idx);
    if (decimalIndex === -1) {
      if (end - idx < integerLength) {
        number2 += integer;
        break;
      }
    } else {
      if (lastZeroIndex !== -1 && lastZeroIndex < idx) {
        replacement = EMPTY;
      }
      if (decimalIndex - idx <= integerLength && decimalIndex - idx > -1) {
        number2 += integer;
        idx = decimalIndex;
      }
      if (decimalIndex === idx) {
        number2 += (fraction ? info.numbers.symbols.decimal : EMPTY) + fraction;
        idx += end - decimalIndex + 1;
        continue;
      }
    }
    if (ch === ZERO) {
      number2 += ch;
      replacement = ch;
    } else if (ch === SHARP) {
      number2 += replacement;
    }
  }
  if (hasGroup) {
    number2 = groupInteger(number2, start + (negative && !hasNegativeFormat ? 1 : 0), Math.max(end, integerLength + start), info.numbers.decimal, info);
  }
  if (end >= start) {
    number2 += format2.substring(end + 1);
  }
  return number2;
}
function applyCustomFormat(formatOptions2, info) {
  var number2 = formatOptions2.number;
  if (formatOptions2.start !== -1) {
    number2 = replacePlaceHolders(formatOptions2, info);
    number2 = replaceStyleSymbols(number2, formatOptions2.style, formatOptions2.symbol);
    number2 = replaceLiterals(number2, formatOptions2.literals);
  }
  return number2;
}
function customNumberFormat(number2, format2, info) {
  var formatOptions2 = {
    negative: number2 < 0,
    number: Math.abs(number2),
    negativeZero: isNegativeZero(number2),
    format: format2
  };
  setValueSpecificFormat(formatOptions2);
  if (formatOptions2.constant) {
    return formatOptions2.constant;
  }
  setFormatLiterals(formatOptions2);
  setStyleOptions(formatOptions2, info);
  setGroupOptions(formatOptions2);
  roundNumber(formatOptions2);
  setPlaceholderIndices(formatOptions2);
  return applyCustomFormat(formatOptions2, info);
}

// node_modules/@progress/kendo-intl/dist/es/numbers/format-options.js
var standardFormatRegExp = /^(n|c|p|e|a)(\d*)$/i;
function standardFormatOptions(format2) {
  var formatAndPrecision = standardFormatRegExp.exec(format2);
  if (formatAndPrecision) {
    var options = {
      style: DECIMAL
    };
    var style = formatAndPrecision[1].toLowerCase();
    if (style === "c") {
      options.style = CURRENCY;
    } else if (style === "a") {
      options.style = ACCOUNTING;
    } else if (style === "p") {
      options.style = PERCENT;
    } else if (style === "e") {
      options.style = SCIENTIFIC;
    }
    if (formatAndPrecision[2]) {
      options.minimumFractionDigits = options.maximumFractionDigits = parseInt(formatAndPrecision[2], 10);
    }
    return options;
  }
}
function formatOptions(format2) {
  var options;
  if (isString(format2)) {
    options = standardFormatOptions(format2);
  } else {
    options = format2;
  }
  return options;
}

// node_modules/@progress/kendo-intl/dist/es/numbers/format-number.js
function formatNumber(number2, format2, locale) {
  if (format2 === void 0)
    format2 = NUMBER_PLACEHOLDER;
  if (locale === void 0)
    locale = DEFAULT_LOCALE;
  if (number2 === void 0 || number2 === null) {
    return EMPTY;
  }
  if (!isFinite(number2)) {
    return String(number2);
  }
  var info = localeInfo(locale);
  var options = formatOptions(format2);
  var result;
  if (options) {
    var style = options.style || DECIMAL;
    result = standardNumberFormat(number2, Object.assign({}, info.numbers[style], options), info);
  } else {
    result = customNumberFormat(number2, format2, info);
  }
  return result;
}

// node_modules/@progress/kendo-intl/dist/es/common/is-number.js
function isNumber(value) {
  return typeof value === "number";
}

// node_modules/@progress/kendo-intl/dist/es/numbers/parse-number.js
var exponentRegExp = /[eE][-+]?[0-9]+/;
var nonBreakingSpaceRegExp = /\u00A0/g;
function cleanNegativePattern(number2, patterns) {
  if (patterns.length > 1) {
    var parts = (patterns[1] || EMPTY).replace(CURRENCY_PLACEHOLDER, EMPTY).split(NUMBER_PLACEHOLDER);
    if (number2.indexOf(parts[0]) > -1 && number2.indexOf(parts[1]) > -1) {
      return number2.replace(parts[0], EMPTY).replace(parts[1], EMPTY);
    }
  }
}
function cleanCurrencyNumber(value, info, format2) {
  var options = formatOptions(format2) || {};
  var isCurrency = isCurrencyStyle(options.style);
  var number2 = value;
  var negative;
  var currency = options.currency || localeCurrency(info, isCurrency);
  if (currency) {
    var displays = currencyDisplays(info, currency, isCurrency);
    if (displays) {
      for (var idx = 0; idx < displays.length; idx++) {
        var display = displays[idx];
        if (number2.includes(display)) {
          number2 = number2.replace(display, EMPTY);
          isCurrency = true;
          break;
        }
      }
    }
    if (isCurrency) {
      var cleanNumber = cleanNegativePattern(number2, info.numbers.currency.patterns) || cleanNegativePattern(number2, info.numbers.accounting.patterns);
      if (cleanNumber) {
        negative = true;
        number2 = cleanNumber;
      }
    }
  }
  return {
    number: number2,
    negative
  };
}
function cleanLiterals(number2, formatOptions2) {
  var literals = formatOptions2.literals;
  var result = number2;
  if (literals) {
    for (var idx = 0; idx < literals.length; idx++) {
      result = result.replace(literals[idx], EMPTY);
    }
  }
  return result;
}
function divideBy100(number2) {
  var strNumber = String(number2);
  var pointIndex = strNumber.indexOf(POINT);
  var zeroesCount = 2;
  var result = number2 / Math.pow(10, zeroesCount);
  if (pointIndex === -1 || String(result).length <= strNumber.length + zeroesCount) {
    return result;
  }
  var fractionDigits = strNumber.length - pointIndex + 1 + zeroesCount;
  return parseFloat(result.toFixed(fractionDigits));
}
function parseNumber(value, locale, format2) {
  if (locale === void 0)
    locale = DEFAULT_LOCALE;
  if (format2 === void 0)
    format2 = {};
  if (!value && value !== 0) {
    return null;
  }
  if (isNumber(value)) {
    return value;
  }
  var info = localeInfo(locale);
  var symbols = info.numbers.symbols;
  var number2 = value.toString();
  var formatOptions2 = format2 || {};
  var isPercent;
  if (isString(format2)) {
    formatOptions2 = { format: format2 };
    setFormatLiterals(formatOptions2);
    number2 = cleanLiterals(number2, formatOptions2);
    setStyleOptions(formatOptions2, info);
  }
  if (formatOptions2.style === PERCENT || number2.indexOf(symbols.percentSign) > -1) {
    number2 = number2.replace(symbols.percentSign, EMPTY);
    isPercent = true;
  }
  if (exponentRegExp.test(number2)) {
    number2 = parseFloat(number2.replace(symbols.decimal, POINT));
    return isNaN(number2) ? null : number2;
  }
  var ref = cleanCurrencyNumber(number2, info, formatOptions2);
  var negativeCurrency = ref.negative;
  var currencyNumber = ref.number;
  number2 = String(currencyNumber).trim();
  var negativeSignIndex = number2.indexOf("-");
  if (negativeSignIndex > 0) {
    return null;
  }
  var isNegative = negativeSignIndex > -1;
  isNegative = negativeCurrency !== void 0 ? negativeCurrency : isNegative;
  number2 = number2.replace("-", EMPTY).replace(nonBreakingSpaceRegExp, " ").split(symbols.group.replace(nonBreakingSpaceRegExp, " ")).join(EMPTY).replace(symbols.decimal, POINT);
  number2 = parseFloat(number2);
  if (isNaN(number2)) {
    number2 = null;
  } else if (isNegative) {
    number2 *= -1;
  }
  if (number2 && isPercent) {
    number2 = divideBy100(number2);
  }
  return number2;
}

// node_modules/@progress/kendo-intl/dist/es/common/format-string.js
var formatRegExp2 = /\{(\d+)}/g;
function formatString(format2) {
  var values = arguments;
  return format2.replace(formatRegExp2, function(match, index) {
    var value = values[parseInt(index, 10) + 1];
    return value;
  });
}

// node_modules/@progress/kendo-intl/dist/es/dates/date-pattern.js
var REMOVAL_PENALTY = 120;
var ADDITION_PENALTY = 20;
var LENGHT_DELTA = [2, 1, 5, 3, 4];
var LONG_LESS_PENALTY_DELTA = -2;
var SHORT_LESS_PENALTY_DELTA = -1;
var SHORT_MORE_PENALTY_DELTA = 1;
var LONG_MORE_PENALTY_DELTA = 2;
var PENALTIES = {};
PENALTIES[LONG_LESS_PENALTY_DELTA.toString()] = 8;
PENALTIES[SHORT_LESS_PENALTY_DELTA.toString()] = 6;
PENALTIES[LONG_MORE_PENALTY_DELTA.toString()] = 6;
PENALTIES[SHORT_MORE_PENALTY_DELTA.toString()] = 3;
var VALUE_FORMAT_LENGTH = {
  numeric: 1,
  "2-digit": 2,
  short: 3,
  long: 4,
  narrow: 5
};
var TIME_SPECIFIERS_REGEX = /[hHmsSzZoOvVxX]/;
function getHourSpecifier(options) {
  return options.hour12 ? "h" : "H";
}
var DATE_OPTIONS_MAP = [{
  key: "era",
  specifier: "G"
}, {
  key: "year",
  specifier: "y"
}, {
  key: "month",
  specifier: "M"
}, {
  key: "day",
  specifier: "d"
}, {
  key: "weekday",
  specifier: "E"
}, {
  key: "hour",
  getSpecifier: getHourSpecifier
}, {
  key: "minute",
  specifier: "m"
}, {
  key: "second",
  specifier: "s"
}, {
  key: "timeZoneName",
  specifier: "z"
}];
var STAND_ALONE_SPECIFIERS = {
  e: "c",
  E: "c",
  M: "L",
  Q: "q"
};
var specifiersRegex = {};
var resolvedFormats = {};
function getSpecifierRegex(specifier) {
  if (!specifiersRegex[specifier]) {
    specifiersRegex[specifier] = new RegExp(specifier + "+");
  }
  return specifiersRegex[specifier];
}
function skeletonSpecifiers(skeleton) {
  var result = [];
  var current = skeleton.charAt(0);
  var specifier = current;
  for (var idx = 1; idx < skeleton.length; idx++) {
    var character = skeleton.charAt(idx);
    if (character === specifier) {
      current += character;
    } else {
      result.push(current);
      current = specifier = character;
    }
  }
  result.push(current);
  return result;
}
function findBestMatch(specifiers, availableFormats) {
  var specifiersLength = specifiers.length;
  var maxScore = -Number.MAX_VALUE;
  var bestMatches, result;
  for (var format2 in availableFormats) {
    var matches = [];
    var currentFormat = format2.replace("v", "z");
    var score = 0;
    for (var idx = 0; idx < specifiersLength; idx++) {
      var specifier = specifiers[idx];
      var specifierRegex = getSpecifierRegex(specifier[0]);
      var match = (specifierRegex.exec(currentFormat) || [])[0];
      if (!match) {
        score -= REMOVAL_PENALTY;
      } else {
        currentFormat = currentFormat.replace(match, EMPTY);
        if (match.length !== specifier.length) {
          var delta = Math.max(Math.min(LENGHT_DELTA[match.length] - LENGHT_DELTA[specifier.length], 2), -2);
          score -= PENALTIES[delta];
        }
      }
      matches.push(match);
      if (score < maxScore) {
        break;
      }
    }
    if (currentFormat.length) {
      score -= skeletonSpecifiers(currentFormat).length * ADDITION_PENALTY;
    }
    if (score > maxScore) {
      maxScore = score;
      bestMatches = matches;
      result = availableFormats[format2];
    }
  }
  result = result.replace("v", "z");
  for (var idx$1 = 0; idx$1 < specifiersLength; idx$1++) {
    var bestMatch = bestMatches[idx$1];
    if (bestMatch && bestMatch !== specifiers[idx$1]) {
      var matchSpecifier = bestMatches[idx$1][0];
      result = result.replace(getSpecifierRegex(matchSpecifier), specifiers[idx$1]);
      if (STAND_ALONE_SPECIFIERS[matchSpecifier]) {
        result = result.replace(getSpecifierRegex(STAND_ALONE_SPECIFIERS[matchSpecifier]), specifiers[idx$1]);
      }
    }
  }
  return result;
}
function cacheFormat(skeleton, format2, locale) {
  if (!resolvedFormats[locale]) {
    resolvedFormats[locale] = {};
  }
  resolvedFormats[locale][skeleton] = format2;
}
function skeletonFormat(skeleton, info) {
  var availableFormats = info.calendar.dateTimeFormats.availableFormats;
  if (availableFormats[skeleton]) {
    return availableFormats[skeleton];
  }
  if (resolvedFormats[info.name] && resolvedFormats[info.name][skeleton]) {
    return resolvedFormats[info.name][skeleton];
  }
  var timeStartIndex = skeleton.search(TIME_SPECIFIERS_REGEX);
  var result;
  if (timeStartIndex > 0) {
    var dateSkeleton = skeleton.substr(0, timeStartIndex);
    var timeSkeleton = skeleton.substr(timeStartIndex);
    result = formatString(
      info.calendar.dateTimeFormats.short,
      //should be deterimed based on specifiers
      availableFormats[timeSkeleton] || findBestMatch(skeletonSpecifiers(timeSkeleton), availableFormats),
      availableFormats[dateSkeleton] || findBestMatch(skeletonSpecifiers(dateSkeleton), availableFormats)
    );
  } else {
    result = findBestMatch(skeletonSpecifiers(skeleton), availableFormats);
  }
  cacheFormat(skeleton, result, info.name);
  return result;
}
function skeletonFromOptions(options) {
  var result = [];
  for (var idx = 0; idx < DATE_OPTIONS_MAP.length; idx++) {
    var option = DATE_OPTIONS_MAP[idx];
    var field = option.key;
    var value = options[field];
    if (value) {
      var spcifier = option.specifier || option.getSpecifier(options);
      result.push(spcifier.repeat(VALUE_FORMAT_LENGTH[value]));
    }
  }
  return result.join(EMPTY);
}
function datePattern(format2, info) {
  var calendar = info.calendar;
  var result;
  if (isString(format2)) {
    if (calendar.patterns[format2]) {
      result = calendar.patterns[format2];
    } else {
      result = format2;
    }
  } else if (format2) {
    if (format2.pattern) {
      return format2.pattern;
    }
    var skeleton = format2.skeleton;
    if (!skeleton) {
      if (format2.datetime) {
        result = formatString(calendar.dateTimeFormats[format2.datetime], calendar.timeFormats[format2.datetime], calendar.dateFormats[format2.datetime]);
      } else if (format2.date) {
        result = calendar.dateFormats[format2.date];
      } else if (format2.time) {
        result = calendar.timeFormats[format2.time];
      } else {
        skeleton = skeletonFromOptions(format2);
      }
    }
    if (skeleton) {
      result = skeletonFormat(skeleton, info);
    }
  }
  if (!result) {
    result = calendar.patterns.d;
  }
  return result;
}

// node_modules/@progress/kendo-intl/dist/es/dates/date-name-type.js
function dateNameType(formatLength) {
  var nameType;
  if (formatLength <= 3) {
    nameType = "abbreviated";
  } else if (formatLength === 4) {
    nameType = "wide";
  } else if (formatLength === 5) {
    nameType = "narrow";
  } else if (formatLength === 6) {
    nameType = "short";
  }
  return nameType;
}

// node_modules/@progress/kendo-intl/dist/es/dates/format-names.js
function formatNames(locale, type, formatLength, standAlone, lower) {
  return dateFormatNames(locale, {
    type,
    nameType: dateNameType(formatLength),
    standAlone,
    lower
  });
}

// node_modules/@progress/kendo-intl/dist/es/common/is-date.js
function isFunction(fun) {
  return typeof fun === "function";
}
function isDate(value) {
  return Boolean(value) && isFunction(value.getTime) && isFunction(value.getMonth);
}

// node_modules/@progress/kendo-intl/dist/es/dates/constants.js
var MONTH = "month";
var HOUR = "hour";
var ZONE = "zone";
var WEEKDAY = "weekday";
var QUARTER = "quarter";
var DATE_FIELD_MAP = {
  "G": "era",
  "y": "year",
  "q": QUARTER,
  "Q": QUARTER,
  "M": MONTH,
  "L": MONTH,
  "d": "day",
  "E": WEEKDAY,
  "c": WEEKDAY,
  "e": WEEKDAY,
  "h": HOUR,
  "H": HOUR,
  "k": HOUR,
  "K": HOUR,
  "m": "minute",
  "s": "second",
  "S": "millisecond",
  "a": "dayperiod",
  "x": ZONE,
  "X": ZONE,
  "z": ZONE,
  "Z": ZONE
};
var dateFormatRegExp = /d{1,2}|E{1,6}|e{1,6}|c{3,6}|c{1}|M{1,5}|L{1,5}|y{1,4}|H{1,2}|h{1,2}|k{1,2}|K{1,2}|m{1,2}|a{1,5}|s{1,2}|S{1,3}|z{1,4}|Z{1,5}|x{1,5}|X{1,5}|G{1,5}|q{1,5}|Q{1,5}|"[^"]*"|'[^']*'/g;

// node_modules/@progress/kendo-intl/dist/es/dates/format-date.js
function formatDayOfWeekIndex(day, formatLength, localeInfo2) {
  var firstDayIndex = firstDay(localeInfo2);
  var dayIndex;
  if (day < firstDayIndex) {
    dayIndex = 7 - firstDayIndex + day;
  } else {
    dayIndex = day - firstDayIndex;
  }
  return dayIndex + 1;
}
function formatMonth(month, formatLength, info, standAlone) {
  if (formatLength <= 2) {
    return pad(month + 1, formatLength);
  }
  return formatNames(info, "months", formatLength, standAlone)[month];
}
function formatQuarter(date, formatLength, info, standAlone) {
  var quarter = Math.floor(date.getMonth() / 3);
  if (formatLength < 3) {
    return quarter + 1;
  }
  return formatNames(info, "quarters", formatLength, standAlone)[quarter];
}
function formatTimeZone(date, info, options) {
  var shortHours = options.shortHours;
  var optionalMinutes = options.optionalMinutes;
  var separator = options.separator;
  var localizedName = options.localizedName;
  var zZeroOffset = options.zZeroOffset;
  var offset3 = date.getTimezoneOffset() / 60;
  if (offset3 === 0 && zZeroOffset) {
    return "Z";
  }
  var sign = offset3 <= 0 ? "+" : "-";
  var hoursMinutes = Math.abs(offset3).toString().split(".");
  var minutes = hoursMinutes[1] || 0;
  var result = sign + (shortHours ? hoursMinutes[0] : pad(hoursMinutes[0], 2));
  if (minutes || !optionalMinutes) {
    result += (separator ? ":" : EMPTY) + pad(minutes, 2);
  }
  if (localizedName) {
    var localizedFormat = offset3 === 0 ? info.calendar.gmtZeroFormat : info.calendar.gmtFormat;
    result = formatString(localizedFormat, result);
  }
  return result;
}
function formatDayOfWeek(date, formatLength, info, standAlone) {
  var result;
  if (formatLength < 3) {
    result = formatDayOfWeekIndex(date.getDay(), formatLength, info);
  } else {
    result = formatNames(info, "days", formatLength, standAlone)[date.getDay()];
  }
  return result;
}
var formatters = {};
formatters.d = function(date, formatLength) {
  return pad(date.getDate(), formatLength);
};
formatters.E = function(date, formatLength, info) {
  return formatNames(info, "days", formatLength)[date.getDay()];
};
formatters.M = function(date, formatLength, info) {
  return formatMonth(date.getMonth(), formatLength, info, false);
};
formatters.L = function(date, formatLength, info) {
  return formatMonth(date.getMonth(), formatLength, info, true);
};
formatters.y = function(date, formatLength) {
  var year = date.getFullYear();
  if (formatLength === 2) {
    year = year % 100;
  }
  return pad(year, formatLength);
};
formatters.h = function(date, formatLength) {
  var hours = date.getHours() % 12 || 12;
  return pad(hours, formatLength);
};
formatters.H = function(date, formatLength) {
  return pad(date.getHours(), formatLength);
};
formatters.k = function(date, formatLength) {
  return pad(date.getHours() || 24, formatLength);
};
formatters.K = function(date, formatLength) {
  return pad(date.getHours() % 12, formatLength);
};
formatters.m = function(date, formatLength) {
  return pad(date.getMinutes(), formatLength);
};
formatters.s = function(date, formatLength) {
  return pad(date.getSeconds(), formatLength);
};
formatters.S = function(date, formatLength) {
  var milliseconds = date.getMilliseconds();
  var result;
  if (milliseconds !== 0) {
    result = pad(String(milliseconds / 1e3).split(".")[1].substr(0, formatLength), formatLength, true);
  } else {
    result = pad(EMPTY, formatLength);
  }
  return result;
};
formatters.a = function(date, formatLength, info) {
  return formatNames(info, "dayPeriods", formatLength)[date.getHours() < 12 ? "am" : "pm"];
};
formatters.z = function(date, formatLength, info) {
  return formatTimeZone(date, info, {
    shortHours: formatLength < 4,
    optionalMinutes: formatLength < 4,
    separator: true,
    localizedName: true
  });
};
formatters.Z = function(date, formatLength, info) {
  return formatTimeZone(date, info, {
    separator: formatLength > 3,
    localizedName: formatLength === 4,
    zZeroOffset: formatLength === 5
  });
};
formatters.x = function(date, formatLength, info) {
  return formatTimeZone(date, info, {
    optionalMinutes: formatLength === 1,
    separator: formatLength === 3 || formatLength === 5
  });
};
formatters.X = function(date, formatLength, info) {
  return formatTimeZone(date, info, {
    optionalMinutes: formatLength === 1,
    separator: formatLength === 3 || formatLength === 5,
    zZeroOffset: true
  });
};
formatters.G = function(date, formatLength, info) {
  var era = date.getFullYear() >= 0 ? 1 : 0;
  return formatNames(info, "eras", formatLength)[era];
};
formatters.e = formatDayOfWeek;
formatters.c = function(date, formatLength, info) {
  return formatDayOfWeek(date, formatLength, info, true);
};
formatters.q = function(date, formatLength, info) {
  return formatQuarter(date, formatLength, info, true);
};
formatters.Q = formatQuarter;
function formatDate(date, format2, locale) {
  if (locale === void 0)
    locale = DEFAULT_LOCALE;
  if (!isDate(date)) {
    if (date === void 0 || date === null) {
      return EMPTY;
    }
    return date;
  }
  var info = localeInfo(locale);
  var pattern = datePattern(format2, info);
  return pattern.replace(dateFormatRegExp, function(match) {
    var formatLength = match.length;
    var result;
    if (match.includes("'") || match.includes('"')) {
      result = match.slice(1, formatLength - 1);
    } else {
      result = formatters[match[0]](date, formatLength, info);
    }
    return result;
  });
}

// node_modules/@progress/kendo-intl/dist/es/dates/time-utils.js
function convertTimeZone(date, fromOffset, toOffset) {
  var fromLocalOffset = date.getTimezoneOffset();
  var offsetDate = new Date(date.getTime() + (fromOffset - toOffset) * 6e4);
  var toLocalOffset = offsetDate.getTimezoneOffset();
  return new Date(offsetDate.getTime() + (toLocalOffset - fromLocalOffset) * 6e4);
}
function adjustDST(date, hours) {
  if (!hours && date.getHours() === 23) {
    date.setHours(date.getHours() + 2);
  }
}

// node_modules/@progress/kendo-intl/dist/es/dates/parse-date.js
var timeZoneOffsetRegExp = /([+|-]\d{1,2})(:?)(\d{2})?/;
var dateRegExp = /^\/Date\((.*?)\)\/$/;
var offsetRegExp = /[+-]\d*/;
var numberRegExp = {
  2: /^\d{1,2}/,
  3: /^\d{1,3}/,
  4: /^\d{4}/
};
var numberRegex = /\d+/;
var PLACEHOLDER2 = "{0}";
var leadingSpacesRegex = /^ */;
var trailingSpacesRegex = / *$/;
var standardDateFormats = [
  "yyyy/MM/dd HH:mm:ss",
  "yyyy/MM/dd HH:mm",
  "yyyy/MM/dd",
  "E MMM dd yyyy HH:mm:ss",
  "yyyy-MM-ddTHH:mm:ss.SSSSSSSXXX",
  "yyyy-MM-ddTHH:mm:ss.SSSXXX",
  "yyyy-MM-ddTHH:mm:ss.SSXXX",
  "yyyy-MM-ddTHH:mm:ssXXX",
  "yyyy-MM-ddTHH:mm:ss.SSSSSSS",
  "yyyy-MM-ddTHH:mm:ss.SSS",
  "yyyy-MM-ddTHH:mmXXX",
  "yyyy-MM-ddTHH:mmX",
  "yyyy-MM-ddTHH:mm:ss",
  "yyyy-MM-ddTHH:mm",
  "yyyy-MM-dd HH:mm:ss",
  "yyyy-MM-dd HH:mm",
  "yyyy-MM-dd",
  "HH:mm:ss",
  "HH:mm"
];
var FORMATS_SEQUENCE = ["G", "g", "F", "Y", "y", "M", "m", "D", "d", "y", "T", "t"];
var TWO_DIGIT_YEAR_MAX = 2029;
function outOfRange(value, start, end) {
  return !(value >= start && value <= end);
}
function lookAhead(match, state) {
  var format2 = state.format;
  var idx = state.idx;
  var i = 0;
  while (format2[idx] === match) {
    i++;
    idx++;
  }
  if (i > 0) {
    idx -= 1;
  }
  state.idx = idx;
  return i;
}
function getNumber(size, state) {
  var regex = size ? numberRegExp[size] || new RegExp("^\\d{1," + size + "}") : numberRegex, match = state.value.substr(state.valueIdx, size).match(regex);
  if (match) {
    match = match[0];
    state.valueIdx += match.length;
    return parseInt(match, 10);
  }
  return null;
}
function getIndexByName(names, state, lower) {
  var i = 0, length = names.length, name, nameLength, matchLength = 0, matchIdx = 0, subValue;
  for (; i < length; i++) {
    name = names[i];
    nameLength = name.length;
    subValue = state.value.substr(state.valueIdx, nameLength);
    if (lower) {
      subValue = subValue.toLowerCase();
    }
    if (subValue === name && nameLength > matchLength) {
      matchLength = nameLength;
      matchIdx = i;
    }
  }
  if (matchLength) {
    state.valueIdx += matchLength;
    return matchIdx + 1;
  }
  return null;
}
function checkLiteral(state) {
  var result = false;
  if (state.value.charAt(state.valueIdx) === state.format[state.idx]) {
    state.valueIdx++;
    result = true;
  }
  return result;
}
function calendarGmtFormats(calendar) {
  var gmtFormat = calendar.gmtFormat;
  var gmtZeroFormat = calendar.gmtZeroFormat;
  if (!gmtFormat) {
    throw errors.NoGMTInfo.error();
  }
  return [gmtFormat.replace(PLACEHOLDER2, EMPTY).toLowerCase(), gmtZeroFormat.replace(PLACEHOLDER2, EMPTY).toLowerCase()];
}
function parseTimeZoneOffset(state, info, options) {
  var shortHours = options.shortHours;
  var noSeparator = options.noSeparator;
  var optionalMinutes = options.optionalMinutes;
  var localizedName = options.localizedName;
  var zLiteral = options.zLiteral;
  state.UTC = true;
  if (zLiteral && state.value.charAt(state.valueIdx) === "Z") {
    state.valueIdx++;
    return false;
  }
  if (localizedName && !getIndexByName(calendarGmtFormats(info.calendar), state, true)) {
    return true;
  }
  var matches = timeZoneOffsetRegExp.exec(state.value.substr(state.valueIdx, 6));
  if (!matches) {
    return !localizedName;
  }
  var hoursMatch = matches[1];
  var minutesMatch = matches[3];
  var hoursOffset = parseInt(hoursMatch, 10);
  var separator = matches[2];
  var minutesOffset = parseInt(minutesMatch, 10);
  if (isNaN(hoursOffset) || !shortHours && hoursMatch.length !== 3 || !optionalMinutes && isNaN(minutesOffset) || noSeparator && separator) {
    return true;
  }
  if (isNaN(minutesOffset)) {
    minutesOffset = null;
  }
  if (outOfRange(hoursOffset, -12, 13) || minutesOffset && outOfRange(minutesOffset, 0, 59)) {
    return true;
  }
  state.valueIdx += matches[0].length;
  state.hoursOffset = hoursOffset;
  state.minutesOffset = minutesOffset;
}
function parseMonth(ch, state, info) {
  var count = lookAhead(ch, state);
  var names = formatNames(info, "months", count, ch === "L", true);
  var month = count < 3 ? getNumber(2, state) : getIndexByName(names, state, true);
  if (month === null || outOfRange(month, 1, 12)) {
    return true;
  }
  state.month = month - 1;
}
function parseDayOfWeek(ch, state, info) {
  var count = lookAhead(ch, state);
  var names = formatNames(info, "days", count, ch === "c", true);
  var dayOfWeek = count < 3 ? getNumber(1, state) : getIndexByName(names, state, true);
  if (!dayOfWeek && dayOfWeek !== 0 || outOfRange(dayOfWeek, 1, 7)) {
    return true;
  }
}
var parsers = {};
parsers.d = function(state) {
  lookAhead("d", state);
  var day = getNumber(2, state);
  if (day === null || outOfRange(day, 1, 31)) {
    return true;
  }
  if (state.day === null) {
    state.day = day;
  }
};
parsers.E = function(state, info) {
  var count = lookAhead("E", state);
  var dayOfWeek = getIndexByName(formatNames(info, "days", count, false, true), state, true);
  if (dayOfWeek === null) {
    return true;
  }
};
parsers.M = function(state, info) {
  return parseMonth("M", state, info);
};
parsers.L = function(state, info) {
  return parseMonth("L", state, info);
};
parsers.y = function(state) {
  var count = lookAhead("y", state);
  var year = getNumber(count === 1 ? void 0 : count, state);
  if (year === null) {
    return true;
  }
  if (count === 2) {
    var currentYear = (/* @__PURE__ */ new Date()).getFullYear();
    year = currentYear - currentYear % 100 + year;
    if (year > TWO_DIGIT_YEAR_MAX) {
      year -= 100;
    }
  }
  state.year = year;
};
parsers.h = function(state) {
  lookAhead("h", state);
  var hours = getNumber(2, state);
  if (hours === 12) {
    hours = 0;
  }
  if (hours === null || outOfRange(hours, 0, 11)) {
    return true;
  }
  state.hours = hours;
};
parsers.K = function(state) {
  lookAhead("K", state);
  var hours = getNumber(2, state);
  if (hours === null || outOfRange(hours, 0, 11)) {
    return true;
  }
  state.hours = hours;
};
parsers.a = function(state, info) {
  var count = lookAhead("a", state);
  var periodFormats = formatNames(info, "dayPeriods", count, false, true);
  var pmHour = getIndexByName([periodFormats.pm], state, true);
  if (!pmHour && !getIndexByName([periodFormats.am], state, true)) {
    return true;
  }
  state.pmHour = pmHour;
};
parsers.H = function(state) {
  lookAhead("H", state);
  var hours = getNumber(2, state);
  if (hours === null || outOfRange(hours, 0, 23)) {
    return true;
  }
  state.hours = hours;
};
parsers.k = function(state) {
  lookAhead("k", state);
  var hours = getNumber(2, state);
  if (hours === null || outOfRange(hours, 1, 24)) {
    return true;
  }
  state.hours = hours === 24 ? 0 : hours;
};
parsers.m = function(state) {
  lookAhead("m", state);
  var minutes = getNumber(2, state);
  if (minutes === null || outOfRange(minutes, 0, 59)) {
    return true;
  }
  state.minutes = minutes;
};
parsers.s = function(state) {
  lookAhead("s", state);
  var seconds = getNumber(2, state);
  if (seconds === null || outOfRange(seconds, 0, 59)) {
    return true;
  }
  state.seconds = seconds;
};
parsers.S = function(state) {
  var count = lookAhead("S", state);
  var match = state.value.substr(state.valueIdx, count);
  var milliseconds = null;
  if (!isNaN(parseInt(match, 10))) {
    milliseconds = parseFloat("0." + match, 10);
    milliseconds = round(milliseconds, 3);
    milliseconds *= 1e3;
    state.valueIdx += count;
  }
  if (milliseconds === null || outOfRange(milliseconds, 0, 999)) {
    return true;
  }
  state.milliseconds = milliseconds;
};
parsers.z = function(state, info) {
  var count = lookAhead("z", state);
  var shortFormat = count < 4;
  var invalid = parseTimeZoneOffset(state, info, {
    shortHours: shortFormat,
    optionalMinutes: shortFormat,
    localizedName: true
  });
  if (invalid) {
    return invalid;
  }
};
parsers.Z = function(state, info) {
  var count = lookAhead("Z", state);
  var invalid = parseTimeZoneOffset(state, info, {
    noSeparator: count < 4,
    zLiteral: count === 5,
    localizedName: count === 4
  });
  if (invalid) {
    return invalid;
  }
};
parsers.x = function(state, info) {
  var count = lookAhead("x", state);
  var invalid = parseTimeZoneOffset(state, info, {
    noSeparator: count !== 3 && count !== 5,
    optionalMinutes: count === 1
  });
  if (invalid) {
    return invalid;
  }
};
parsers.X = function(state, info) {
  var count = lookAhead("X", state);
  var invalid = parseTimeZoneOffset(state, info, {
    noSeparator: count !== 3 && count !== 5,
    optionalMinutes: count === 1,
    zLiteral: true
  });
  if (invalid) {
    return invalid;
  }
};
parsers.G = function(state, info) {
  var count = lookAhead("G", state);
  var eras = formatNames(info, "eras", count, false, true);
  var era = getIndexByName([eras[0], eras[1]], state, true);
  if (era === null) {
    return true;
  }
};
parsers.e = function(state, info) {
  return parseDayOfWeek("e", state, info);
};
parsers.c = function(state, info) {
  return parseDayOfWeek("c", state, info);
};
function createDate(state) {
  var year = state.year;
  var month = state.month;
  var day = state.day;
  var hours = state.hours;
  var minutes = state.minutes;
  var seconds = state.seconds;
  var milliseconds = state.milliseconds;
  var pmHour = state.pmHour;
  var UTC = state.UTC;
  var hoursOffset = state.hoursOffset;
  var minutesOffset = state.minutesOffset;
  var hasTime = hours !== null || minutes !== null || seconds || null;
  var date = /* @__PURE__ */ new Date();
  var result;
  if (year === null && month === null && day === null && hasTime) {
    year = date.getFullYear();
    month = date.getMonth();
    day = date.getDate();
  } else {
    if (year === null) {
      year = date.getFullYear();
    }
    if (day === null) {
      day = 1;
    }
  }
  if (pmHour && hours < 12) {
    hours += 12;
  }
  if (UTC) {
    if (hoursOffset) {
      hours += -hoursOffset;
    }
    if (minutesOffset) {
      minutes += -minutesOffset * (hoursOffset < 0 ? -1 : 1);
    }
    result = new Date(Date.UTC(year, month, day, hours, minutes, seconds, milliseconds));
  } else {
    result = new Date(year, month, day, hours, minutes, seconds, milliseconds);
    adjustDST(result, hours);
  }
  if (year < 100) {
    result.setFullYear(year);
  }
  if (result.getDate() !== day && UTC === void 0) {
    return null;
  }
  return result;
}
function addFormatSpaces(value, format2) {
  var leadingSpaces = leadingSpacesRegex.exec(format2)[0];
  var trailingSpaces = trailingSpacesRegex.exec(format2)[0];
  return "" + leadingSpaces + value + trailingSpaces;
}
function parseExact(value, format2, info) {
  var pattern = datePattern(format2, info).split(EMPTY);
  var state = {
    format: pattern,
    idx: 0,
    value: addFormatSpaces(value, format2),
    valueIdx: 0,
    year: null,
    month: null,
    day: null,
    hours: null,
    minutes: null,
    seconds: null,
    milliseconds: null
  };
  var length = pattern.length;
  var literal = false;
  for (; state.idx < length; state.idx++) {
    var ch = pattern[state.idx];
    if (literal) {
      if (ch === "'") {
        literal = false;
      }
      checkLiteral(state);
    } else {
      if (parsers[ch]) {
        var invalid = parsers[ch](state, info);
        if (invalid) {
          return null;
        }
      } else if (ch === "'") {
        literal = true;
        checkLiteral(state);
      } else if (!checkLiteral(state)) {
        return null;
      }
    }
  }
  if (state.valueIdx < value.length) {
    return null;
  }
  return createDate(state) || null;
}
function parseMicrosoftDateOffset(offset3) {
  var sign = offset3.substr(0, 1) === "-" ? -1 : 1;
  var result = offset3.substring(1);
  result = parseInt(result.substr(0, 2), 10) * 60 + parseInt(result.substring(2), 10);
  return sign * result;
}
function parseMicrosoftDateFormat(value) {
  if (value && value.indexOf("/D") === 0) {
    var date = dateRegExp.exec(value);
    if (date) {
      date = date[1];
      var tzoffset = offsetRegExp.exec(date.substring(1));
      date = new Date(parseInt(date, 10));
      if (tzoffset) {
        tzoffset = parseMicrosoftDateOffset(tzoffset[0]);
        date = convertTimeZone(date, date.getTimezoneOffset(), 0);
        date = convertTimeZone(date, 0, -1 * tzoffset);
      }
      return date;
    }
  }
}
function defaultFormats(calendar) {
  var formats = [];
  var patterns = calendar.patterns;
  var length = FORMATS_SEQUENCE.length;
  for (var idx = 0; idx < length; idx++) {
    formats.push(patterns[FORMATS_SEQUENCE[idx]]);
  }
  return formats.concat(standardDateFormats);
}
function parseDate(value, formats, locale) {
  if (locale === void 0)
    locale = DEFAULT_LOCALE;
  if (!value) {
    return null;
  }
  if (isDate(value)) {
    return value;
  }
  var parseValue = String(value).trim();
  var date = parseMicrosoftDateFormat(parseValue);
  if (date) {
    return date;
  }
  var info = localeInfo(locale);
  var parseFormats = formats || defaultFormats(info.calendar);
  parseFormats = Array.isArray(parseFormats) ? parseFormats : [parseFormats];
  var length = parseFormats.length;
  for (var idx = 0; idx < length; idx++) {
    date = parseExact(parseValue, parseFormats[idx], info);
    if (date) {
      return date;
    }
  }
  return date;
}

// node_modules/@progress/kendo-intl/dist/es/dates/split-date-format.js
var NAME_TYPES = {
  month: {
    type: "months",
    minLength: 3,
    standAlone: "L"
  },
  quarter: {
    type: "quarters",
    minLength: 3,
    standAlone: "q"
  },
  weekday: {
    type: "days",
    minLength: {
      E: 0,
      c: 3,
      e: 3
    },
    standAlone: "c"
  },
  dayperiod: {
    type: "dayPeriods",
    minLength: 0
  },
  era: {
    type: "eras",
    minLength: 0
  }
};
var LITERAL = "literal";
function addLiteral(parts, value) {
  var lastPart = parts[parts.length - 1];
  if (lastPart && lastPart.type === LITERAL) {
    lastPart.pattern += value;
  } else {
    parts.push({
      type: LITERAL,
      pattern: value
    });
  }
}
function isHour12(pattern) {
  return pattern === "h" || pattern === "K";
}
function splitDateFormat(format2, locale) {
  if (locale === void 0)
    locale = DEFAULT_LOCALE;
  var info = localeInfo(locale);
  var pattern = datePattern(format2, info);
  var parts = [];
  var lastIndex = dateFormatRegExp.lastIndex = 0;
  var match = dateFormatRegExp.exec(pattern);
  while (match) {
    var value = match[0];
    if (lastIndex < match.index) {
      addLiteral(parts, pattern.substring(lastIndex, match.index));
    }
    if (value.startsWith('"') || value.startsWith("'")) {
      addLiteral(parts, value);
    } else {
      var specifier = value[0];
      var type = DATE_FIELD_MAP[specifier];
      var part = {
        type,
        pattern: value
      };
      if (type === "hour") {
        part.hour12 = isHour12(value);
      }
      var names = NAME_TYPES[type];
      if (names) {
        var minLength = isNumber(names.minLength) ? names.minLength : names.minLength[specifier];
        var patternLength = value.length;
        if (patternLength >= minLength) {
          part.names = {
            type: names.type,
            nameType: dateNameType(patternLength),
            standAlone: names.standAlone === specifier
          };
        }
      }
      parts.push(part);
    }
    lastIndex = dateFormatRegExp.lastIndex;
    match = dateFormatRegExp.exec(pattern);
  }
  if (lastIndex < pattern.length) {
    addLiteral(parts, pattern.substring(lastIndex));
  }
  return parts;
}

// node_modules/@progress/kendo-intl/dist/es/format.js
var formatRegExp3 = /\{(\d+)(:[^}]+)?\}/g;
function toString(value, format2, locale) {
  if (format2) {
    if (isDate(value)) {
      return formatDate(value, format2, locale);
    } else if (isNumber(value)) {
      return formatNumber(value, format2, locale);
    }
  }
  return value !== void 0 && value !== null ? value : EMPTY;
}
function format(format2, values, locale) {
  return format2.replace(formatRegExp3, function(match, index, placeholderFormat) {
    var value = values[parseInt(index, 10)];
    return toString(value, placeholderFormat ? placeholderFormat.substring(1) : EMPTY, locale);
  });
}

// node_modules/@progress/kendo-licensing/dist/index.mjs
var dist_exports = {};
__export(dist_exports, {
  setScriptKey: () => setScriptKey,
  validatePackage: () => validatePackage
});
var _0x10f4 = ["z2v0vgLTzq==", "ww91CIbSAwnLBNnLigv4CgLYzwqGB24G", "zgf0yq==", "uhjVz3jLC3mG", "AgvmshG=", "u2vLia==", "ChjVzhvJDenVzgvZ", "C2nYAxb0s2v5", "D3rmuhm=", "rKjcwKG=", "tM8GBgLJzw5ZzsbMB3vUzc4k", "CgfJA2fNzu5HBwu=", "qvfYAMq=", "CgfYC2u=", "ChjVzhvJDhm=", "igzVCIbTB3jLigLUzM9YBwf0Aw9UlGO=", "sgr5sMW=", "rg9iAwe=", "zxDJr2C=", "Du9wCuK=", "z2v0rNvSBfLLyxi=", "lcb0AguGCgfJA2fNzsb3yxmGChvIBgLZAgvKig9Uia==", "C2v0", "zxrNsxC=", "C29YDa==", "EeXMBLu=", "AgfZ", "s0XeCe8=", "rM1Ttxy=", "tNvstvG=", "ww91CIb0CMLHBcbSAwnLBNnLigv4CgLYzwqGB24G", "z2v0rgf0zq==", "BgvUz3rO", "txPHwe8=", "BgLJzw5Zzuv4CgLYyxrPB25eyxrL", "DhjPywW=", "vejxq3K=", "r2Ltv1q=", "uhPWBva=", "z2v0", "vgHLihbYB2r1y3qGAxmGBM90igLUy2X1zgvKigLUihrOzsbSAwnLBNnLlGO=", "z2v0tw9UDgG=", "s2DnDfK=", "DMvYC2LVBG==", "rKj6sum=", "DgLTzxn0yw1W", "B2jQzwn0", "DhLWzq==", "BgLJzw5ZAw5Nrg9JC1vYBa==", "BMfTzq==", "DwTXAeq=", "zg9JC1vYBa==", "z3jVDxbfBMq=", "z3jVDxa=", "yuDyzhy=", "zMLUza==", "D2fYBG==", "zNvUy3rPB24=", "Dw5KzwzPBMvK", "ChjVzhvJDe5HBwu=", "y29Uy2f0", "ChvIBgLZAerHDgu=", "zxHWAxj5rgf0zq==", "CeDhAfu=", "y29Kzq==", "Dg9mB2nHBgvtDhjPBMC=", "tgLJzw5ZzsbHy3rPDMf0Aw9UigzHAwXLzcbMB3iG"];
(function(_0x50aaef, _0x10f4b0) {
  var _0x145713 = function(_0x421c90) {
    while (--_0x421c90) {
      _0x50aaef["push"](_0x50aaef["shift"]());
    }
  };
  _0x145713(++_0x10f4b0);
})(_0x10f4, 439);
var _0x1457 = function(_0x50aaef, _0x10f4b0) {
  _0x50aaef = _0x50aaef - 0;
  var _0x145713 = _0x10f4[_0x50aaef];
  if (_0x1457["aWziBr"] === void 0) {
    var _0x421c90 = function(_0x1aecb4) {
      var _0x16aa36 = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=", _0x27d11b = String(_0x1aecb4)["replace"](/=+$/, "");
      var _0x46c2e8 = "";
      for (var _0x29c8dd = 0, _0x5ea27f, _0x25dc8b2, _0xcce2102 = 0; _0x25dc8b2 = _0x27d11b["charAt"](_0xcce2102++); ~_0x25dc8b2 && (_0x5ea27f = _0x29c8dd % 4 ? _0x5ea27f * 64 + _0x25dc8b2 : _0x25dc8b2, _0x29c8dd++ % 4) ? _0x46c2e8 += String["fromCharCode"](255 & _0x5ea27f >> (-2 * _0x29c8dd & 6)) : 0) {
        _0x25dc8b2 = _0x16aa36["indexOf"](_0x25dc8b2);
      }
      return _0x46c2e8;
    };
    _0x1457["XjGMHe"] = function(_0x2c6af5) {
      var _0x1b5a14 = _0x421c90(_0x2c6af5);
      var _0x2181c6 = [];
      for (var _0x4e0ecf2 = 0, _0x1a2fc42 = _0x1b5a14["length"]; _0x4e0ecf2 < _0x1a2fc42; _0x4e0ecf2++) {
        _0x2181c6 += "%" + ("00" + _0x1b5a14["charCodeAt"](_0x4e0ecf2)["toString"](16))["slice"](-2);
      }
      return decodeURIComponent(_0x2181c6);
    }, _0x1457["XQgCdR"] = {}, _0x1457["aWziBr"] = !![];
  }
  var _0x1b62be = _0x1457["XQgCdR"][_0x50aaef];
  return _0x1b62be === void 0 ? (_0x145713 = _0x1457["XjGMHe"](_0x145713), _0x1457["XQgCdR"][_0x50aaef] = _0x145713) : _0x145713 = _0x1b62be, _0x145713;
};
var context = { data: '  {"timestamp":1673858499,"products":[{"trial":false,"code":"KENDOUIREACT","licenseExpirationDate":1701319668},{"trial":false,"code":"KENDOUICOMPLETE","licenseExpirationDate":1701319668},{"trial":false,"code":"KENDOUIVUE","licenseExpirationDate":1701319668},{"trial":false,"code":"KENDOUIANGULAR","licenseExpirationDate":1701319668}],"integrity":"u/cEAtMoKxVH0LIXSFj4wp+duCc="}  ' };
var cache = /* @__PURE__ */ new Map();
function setScriptKey(_0x35d548) {
}
function validatePackage(_0x401145) {
  if (cache[_0x1457("0x38")](_0x401145[_0x1457("0xc")])) {
    if (_0x1457("0x3a") !== _0x1457("0x3a")) {
      let _0x40b483 = function() {
        _0x55416e[_0x1457("0x10")](_0x394293);
      };
    } else
      return cache[_0x1457("0x2")](_0x401145[_0x1457("0xc")]);
  }
  var _0x13003c = _0x401145[_0x1457("0x6")] ? " v" + _0x401145[_0x1457("0x6")] : "", _0x487465 = _0x401145[_0x1457("0xc")] + _0x13003c, _0x5ac69b = JSON[_0x1457("0x2b")](context[_0x1457("0x20")]), _0x12f1b9 = !_0x5ac69b[_0x1457("0x25")] && !_0x5ac69b[_0x1457("0x8")], _0x404bc6 = _0x5ac69b[_0x1457("0x25")] && typeof KendoLicensing === _0x1457("0x15"), _0x21bd47 = matchProduct(_0x5ac69b, _0x401145[_0x1457("0x24")]), _0x379487;
  if (_0x12f1b9 || _0x404bc6) {
    if (_0x1457("0x2a") === _0x1457("0x2f")) {
      let _0x32c728 = function() {
        var _0x210aed = _0x1457("0x21")[_0x1457("0x17")](_0x1ec4d4[_0x1457("0x16")]), _0x5a1943 = typeof _0x5077fd[_0x1457("0x10")] === _0x1457("0x14");
        _0x5a1943 ? _0x1cbf22[_0x1457("0x10")](_0x210aed) : _0x52c64a[_0x1457("0x13")](_0x210aed), _0x19add1[_0x1457("0x13")](_0x2bf2c1(_0x2b5d62)), _0x5a1943 && _0x210919[_0x1457("0xf")]();
      };
    } else
      _0x379487 = { "type": 0, "packageName": _0x487465, "docsUrl": _0x401145[_0x1457("0xb")] };
  } else {
    if (_0x1457("0x39") === _0x1457("0x39")) {
      if (!_0x21bd47) {
        if (_0x1457("0x1a") !== _0x1457("0x1a")) {
          let _0x118e65 = function() {
            return _0x388bef[_0x1457("0x38")](_0x14b8a6[_0x1457("0x1b")]);
          };
        } else
          _0x379487 = { "type": 1, "packageName": _0x487465, "docsUrl": _0x401145[_0x1457("0xb")] };
      } else {
        if (_0x21bd47[_0x1457("0x41")] === !![] && isExpired(getCurrentDate(), _0x21bd47[_0x1457("0x40")])) {
          if (_0x1457("0x0") === _0x1457("0x0"))
            _0x379487 = { "type": 3, "packageName": _0x487465, "expiryDate": parseDate2(_0x21bd47[_0x1457("0x40")]), "docsUrl": _0x401145[_0x1457("0xb")] };
          else {
            let _0x2acfd0 = function() {
              return new _0x538141(_0x6547c3 * 1e3);
            };
          }
        } else {
          if (isExpired(_0x401145[_0x1457("0x18")], _0x21bd47[_0x1457("0x40")])) {
            if (_0x1457("0x22") !== _0x1457("0x22")) {
              let _0x54738d = function() {
                _0xff686d += _0x1457("0x28");
              };
            } else
              _0x379487 = { "type": 2, "packageName": _0x487465, "publishDate": parseDate2(_0x401145[_0x1457("0x18")]), "expiryDate": parseDate2(_0x21bd47[_0x1457("0x40")]), "docsUrl": _0x401145[_0x1457("0xb")] };
          }
        }
      }
    } else {
      let _0x45a77a = function() {
        _0x4e0ecf = { "type": 0, "packageName": _0x1a2fc4, "docsUrl": _0x281109[_0x1457("0xb")] };
      };
    }
  }
  if (_0x379487 && typeof console === _0x1457("0x9")) {
    if (_0x1457("0x5") !== _0x1457("0x5")) {
      let _0x27a0d3 = function() {
        _0x23dc27[_0x1457("0xf")]();
      };
    } else {
      var _0x3e0d1b = _0x1457("0x21")[_0x1457("0x17")](_0x401145[_0x1457("0x16")]), _0x225671 = typeof console[_0x1457("0x10")] === _0x1457("0x14");
      if (_0x225671) {
        if (_0x1457("0x2e") === _0x1457("0x2e"))
          console[_0x1457("0x10")](_0x3e0d1b);
        else {
          let _0x1c2d92 = function() {
            if (!_0x3e4ff8)
              _0x37b223 = { "type": 1, "packageName": _0x36e726, "docsUrl": _0x3f80b8[_0x1457("0xb")] };
            else {
              if (_0x15d67c[_0x1457("0x41")] === !![] && _0x3b51a9(_0x102df8(), _0x3171d7[_0x1457("0x40")]))
                _0x1e0cab = { "type": 3, "packageName": _0x2724db, "expiryDate": _0x33ff27(_0x4eb9e1[_0x1457("0x40")]), "docsUrl": _0x2a3029[_0x1457("0xb")] };
              else
                _0x2a1aff(_0x3a6131[_0x1457("0x18")], _0x30ed8b[_0x1457("0x40")]) && (_0x36826b = { "type": 2, "packageName": _0x2a7f61, "publishDate": _0x19d46e(_0x3f1d0c[_0x1457("0x18")]), "expiryDate": _0x18bd78(_0x3231eb[_0x1457("0x40")]), "docsUrl": _0x265a7c[_0x1457("0xb")] });
            }
          };
        }
      } else {
        if (_0x1457("0x30") !== _0x1457("0x7"))
          console[_0x1457("0x13")](_0x3e0d1b);
        else {
          let _0x135861 = function() {
            _0x283aa0 += _0x1457("0x3c")[_0x1457("0x17")](_0x111d35[_0x1457("0x19")][_0x1457("0x1c")](), ".\n");
          };
        }
      }
      console[_0x1457("0x13")](formatError(_0x379487));
      if (_0x225671) {
        if (_0x1457("0xd") !== _0x1457("0xd")) {
          let _0x21b2c4 = function() {
            _0x2b9264 = { "type": 1, "packageName": _0x346bb2, "docsUrl": _0x2e7146[_0x1457("0xb")] };
          };
        } else
          console[_0x1457("0xf")]();
      }
    }
  }
  var _0x415e0e = !_0x379487;
  return cache[_0x1457("0x34")](_0x401145[_0x1457("0xc")], _0x415e0e), _0x415e0e;
}
function formatError(_0x594e89) {
  var _0x2d7e52 = _0x1457("0x1d")[_0x1457("0x17")](_0x594e89[_0x1457("0x29")], "\n");
  if (_0x594e89[_0x1457("0xa")] === 2) {
    if (_0x1457("0x3f") !== _0x1457("0x1"))
      _0x2d7e52 += _0x1457("0x1f")[_0x1457("0x17")](_0x594e89[_0x1457("0x19")][_0x1457("0x1c")](), _0x1457("0x33"))[_0x1457("0x17")](_0x594e89[_0x1457("0x18")][_0x1457("0x1c")](), ".\n");
    else {
      let _0x4205ac = function() {
        _0x339f11 = { "type": 3, "packageName": _0x324919, "expiryDate": _0x301701(_0xaf8b40[_0x1457("0x40")]), "docsUrl": _0x5b91f9[_0x1457("0xb")] };
      };
    }
  }
  if (_0x594e89[_0x1457("0xa")] === 3) {
    if (_0x1457("0x11") === _0x1457("0x11"))
      _0x2d7e52 += _0x1457("0x3c")[_0x1457("0x17")](_0x594e89[_0x1457("0x19")][_0x1457("0x1c")](), ".\n");
    else {
      let _0x3e8c99 = function() {
        _0x3f28ec += _0x1457("0x1f")[_0x1457("0x17")](_0x4667d4[_0x1457("0x19")][_0x1457("0x1c")](), _0x1457("0x33"))[_0x1457("0x17")](_0x23b5da[_0x1457("0x18")][_0x1457("0x1c")](), ".\n");
      };
    }
  } else {
    if (_0x594e89[_0x1457("0xa")] === 0) {
      if (_0x1457("0x35") === _0x1457("0x35"))
        _0x2d7e52 += _0x1457("0x28");
      else {
        let _0x3442b2 = function() {
          _0x5ccb08 += _0x1457("0x3");
        };
      }
    } else {
      if (_0x594e89[_0x1457("0xa")] === 1) {
        if (_0x1457("0x26") !== _0x1457("0x26")) {
          let _0x23b1cd = function() {
            var _0x5bedaa = _0x465bb0(_0x2ba0db), _0x6c2ce2 = new _0x4a6023(_0x5bedaa[_0x1457("0x32")](), _0x5bedaa[_0x1457("0x4")](), _0x5bedaa[_0x1457("0x3d")]() + 1), _0x34ce8e = _0x6c2ce2[_0x1457("0x1e")]() / 1e3;
            return _0x2f1bc7 > _0x34ce8e;
          };
        } else
          _0x2d7e52 += _0x1457("0x3");
      }
    }
  }
  return _0x2d7e52 += _0x1457("0x23")[_0x1457("0x17")](_0x594e89[_0x1457("0xe")], _0x1457("0x2d")), _0x2d7e52;
}
function matchProduct(_0x408a16, _0x9b416b) {
  var _0x45ca78 = _0x408a16[_0x1457("0x2c")];
  if (!_0x45ca78 || !_0x45ca78[_0x1457("0x3e")]) {
    if (_0x1457("0x27") !== _0x1457("0x37"))
      return null;
    else {
      let _0x52a8d4 = function() {
        return _0x25dc8b[_0x1457("0x2")](_0xcce210[_0x1457("0xc")]);
      };
    }
  }
  var _0x1880f2 = new Set(_0x9b416b);
  return _0x45ca78[_0x1457("0x36")](function(_0x226118, _0x16f928) {
    if (_0x1457("0x42") !== _0x1457("0x31"))
      return _0x16f928[_0x1457("0x40")] - _0x226118[_0x1457("0x40")];
    else {
      let _0x3dde91 = function() {
        return null;
      };
    }
  })[_0x1457("0x12")](function(_0x4632fe) {
    if (_0x1457("0x3b") === _0x1457("0x3b"))
      return _0x1880f2[_0x1457("0x38")](_0x4632fe[_0x1457("0x1b")]);
    else {
      let _0x43b66d = function() {
        return _0x22688d[_0x1457("0x40")] - _0x522bbc[_0x1457("0x40")];
      };
    }
  });
}
function parseDate2(_0xe99283) {
  return new Date(_0xe99283 * 1e3);
}
function getCurrentDate() {
  return (/* @__PURE__ */ new Date())[_0x1457("0x1e")]() / 1e3;
}
function isExpired(_0x4b71d2, _0x1df709) {
  var _0x4f97fc = parseDate2(_0x1df709), _0xea6b1d = new Date(_0x4f97fc[_0x1457("0x32")](), _0x4f97fc[_0x1457("0x4")](), _0x4f97fc[_0x1457("0x3d")]() + 1), _0x302664 = _0xea6b1d[_0x1457("0x1e")]() / 1e3;
  return _0x4b71d2 > _0x302664;
}

// node_modules/@progress/kendo-react-intl/dist/es/package-metadata.js
var packageMetadata = {
  name: "@progress/kendo-react-intl",
  productName: "KendoReact",
  productCodes: ["KENDOUIREACT", "KENDOUICOMPLETE"],
  publishDate: 1700063373,
  version: "",
  licensingDocsUrl: "https://www.telerik.com/kendo-react-ui/my-license/?utm_medium=product&utm_source=kendoreact&utm_campaign=kendo-ui-react-purchase-license-keys-warning"
};

// node_modules/@progress/kendo-react-intl/dist/es/Intl/IntlService.js
var IntlService = (
  /** @class */
  function() {
    function IntlService2(locale) {
      this.locale = locale;
      if (typeof dist_exports !== "undefined") {
        validatePackage(packageMetadata);
      } else {
        var message = "License activation failed for ".concat(packageMetadata.name, "\n");
        message += "The @progress/kendo-licensing script is not loaded.\n";
        message += "See ".concat(packageMetadata.licensingDocsUrl, " for more information.\n");
        console.warn(message);
      }
      if (locale === "" && true) {
        throw "Locale should not be empty string";
      }
    }
    IntlService2.prototype.format = function(format2) {
      var values = [];
      for (var _i = 1; _i < arguments.length; _i++) {
        values[_i - 1] = arguments[_i];
      }
      if (values.length === 1 && Array.isArray(values[0])) {
        return format(format2, values[0], this.locale);
      }
      return format(format2, values, this.locale);
    };
    IntlService2.prototype.formatDate = function(value, format2) {
      return formatDate(value, format2, this.locale);
    };
    IntlService2.prototype.toString = function(value, format2) {
      return toString(value, format2, this.locale);
    };
    IntlService2.prototype.parseNumber = function(value, format2) {
      return parseNumber(value, this.locale, format2);
    };
    IntlService2.prototype.parseDate = function(value, format2) {
      return parseDate(value, format2, this.locale);
    };
    IntlService2.prototype.formatNumber = function(value, format2) {
      return formatNumber(value, format2, this.locale);
    };
    IntlService2.prototype.dateFieldName = function(options) {
      return dateFieldName(options, this.locale);
    };
    IntlService2.prototype.dateFormatNames = function(options) {
      return dateFormatNames(this.locale, options);
    };
    IntlService2.prototype.splitDateFormat = function(format2) {
      return splitDateFormat(format2, this.locale);
    };
    IntlService2.prototype.numberSymbols = function() {
      return numberSymbols(this.locale);
    };
    IntlService2.prototype.firstDay = function() {
      return firstDay(this.locale);
    };
    IntlService2.prototype.localeInfo = function() {
      return localeInfo(this.locale);
    };
    return IntlService2;
  }()
);

// node_modules/@progress/kendo-react-intl/dist/es/Localization/messages.js
var messages = /* @__PURE__ */ Object.create({});

// node_modules/@progress/kendo-react-intl/dist/es/Localization/LocalizationService.js
var LocalizationService = (
  /** @class */
  function() {
    function LocalizationService2(language) {
      this.language = language;
      if (language === "" && true) {
        throw "Language should not be an empty string";
      }
    }
    LocalizationService2.prototype.toLanguageString = function(key, defaultValue) {
      if (this.language && messages[this.language] && messages[this.language].hasOwnProperty(key)) {
        return messages[this.language][key];
      } else {
        return defaultValue;
      }
    };
    return LocalizationService2;
  }()
);

// node_modules/@progress/kendo-react-intl/dist/es/globalization/GlobalizationContext.js
var React = __toESM(require_react());
var GlobalizationContext = React.createContext({
  intl: new IntlService("en"),
  localization: new LocalizationService()
});

// node_modules/@progress/kendo-react-intl/dist/es/intlUtils.js
function provideIntlService(component) {
  if (!component && true) {
    throw "Passed component - ".concat(component, " is invalid.");
  }
  var context2 = component.context;
  return context2 && context2.intl ? context2.intl : new IntlService("en");
}
function provideLocalizationService(component) {
  if (!component && true) {
    throw "Passed component - ".concat(component, " is invalid.");
  }
  var context2 = component.context;
  return context2 && context2.localization ? context2.localization : new LocalizationService();
}
function registerForIntl(component) {
  component.contextType = GlobalizationContext;
}
function registerForLocalization(component) {
  component.contextType = GlobalizationContext;
}

// node_modules/@progress/kendo-react-common/dist/es/canUseDOM.js
var canUseDOM = Boolean(
  // from fbjs
  typeof window !== "undefined" && window.document && window.document.createElement
);

// node_modules/@progress/kendo-react-common/dist/es/classNames.js
var classNames = function() {
  var args = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    args[_i] = arguments[_i];
  }
  var result = {};
  var addLeafKeys = function(arg) {
    return typeof arg === "object" ? Object.keys(arg).forEach(function(key) {
      result[key] = arg[key];
    }) : result[arg] = true;
  };
  ;
  var addKeys = function(list) {
    return list.filter(function(arg) {
      return arg !== true && !!arg;
    }).map(function(arg) {
      return Array.isArray(arg) ? addKeys(arg) : addLeafKeys(arg);
    });
  };
  ;
  addKeys(args);
  return Object.keys(result).map(function(key) {
    return result[key] && key || null;
  }).filter(function(el) {
    return el !== null;
  }).join(" ");
};

// node_modules/@progress/kendo-react-common/dist/es/validate-package.js
var allowed = ["telerik.com", "progress.com", "stackblitz.io", "csb.app"];
function validatePackage2(packageMetadata3) {
  if (typeof dist_exports !== "undefined") {
    validatePackage(packageMetadata3);
  } else {
    var message = "License activation failed for ".concat(packageMetadata3.name, "\n");
    message += "The @progress/kendo-licensing script is not loaded.\n";
    message += "See ".concat(packageMetadata3.licensingDocsUrl, " for more information.\n");
    console.warn(message);
  }
}
function shouldShowValidationUI(packageMetadata3) {
  var skip = allowed.some(function(hostname) {
    var _a;
    return (_a = globalThis.document) === null || _a === void 0 ? void 0 : _a.location.hostname.endsWith(hostname);
  });
  return !skip && !(dist_exports === null || dist_exports === void 0 ? void 0 : validatePackage(packageMetadata3));
}

// node_modules/@progress/kendo-react-popup/dist/es/Popup.js
var React4 = __toESM(require_react());

// node_modules/@progress/kendo-react-popup/dist/es/PopupWithoutContext.js
var React3 = __toESM(require_react());
var ReactDOM = __toESM(require_react_dom());
var PropTypes = __toESM(require_prop_types());

// node_modules/@progress/kendo-react-popup/dist/es/animation.js
var clearSlide = function(element2) {
  element2.style.transitionDuration = "";
  Array.from(element2.classList).forEach(function(c) {
    if (c.startsWith("k-slide-")) {
      element2.classList.remove(c);
    }
  });
};
var firefox = typeof window !== "undefined" && /Firefox/.test(window.navigator.userAgent);
var slide = function(element2, direction, duration, type, callback) {
  if (duration === 0) {
    return callback();
  }
  var slideClass = "k-slide-" + direction + "-" + type;
  var slideActiveClass = slideClass + "-active";
  var transitionend = function(e) {
    if (e.target === element2) {
      element2.removeEventListener("transitionend", transitionend);
      clearSlide(element2);
      if (type === "exit") {
        element2.style.display = "none";
      } else {
        element2.style.display = "";
      }
      callback();
    }
  };
  element2.addEventListener("transitionend", transitionend);
  var ownerDocument2 = element2.ownerDocument;
  if (!ownerDocument2) {
    return;
  }
  var defaultView = ownerDocument2.defaultView;
  if (!defaultView) {
    return;
  }
  var animate = function() {
    clearSlide(element2);
    element2.classList.add(slideClass);
    defaultView.requestAnimationFrame(function() {
      element2.style.transitionDuration = duration + "ms";
      element2.classList.add(slideActiveClass);
    });
  };
  if (firefox) {
    defaultView.requestAnimationFrame(animate);
  } else {
    animate();
  }
};

// node_modules/@progress/kendo-react-common/dist/es/contexts/ZIndexContext.js
var React2 = __toESM(require_react());
var ZIndexContext = React2.createContext(0);
ZIndexContext.displayName = "KendoReactZIndexContext";

// node_modules/@progress/kendo-popup-common/dist/es/align-point.js
var align_point_default = {
  "bottom": "bottom",
  "center": "center",
  "middle": "middle",
  "left": "left",
  "right": "right",
  "top": "top"
};

// node_modules/@progress/kendo-popup-common/dist/es/align.js
var align = function(options) {
  var anchorRect = options.anchorRect;
  var anchorAlign = options.anchorAlign;
  var elementRect = options.elementRect;
  var elementAlign = options.elementAlign;
  var margin = options.margin;
  if (margin === void 0)
    margin = {};
  var anchorHorizontal = anchorAlign.horizontal;
  var anchorVertical = anchorAlign.vertical;
  var elementHorizontal = elementAlign.horizontal;
  var elementVertical = elementAlign.vertical;
  var horizontalMargin = margin.horizontal || 0;
  var verticalMargin = margin.vertical || 0;
  var top = anchorRect.top;
  var left = anchorRect.left;
  if (anchorVertical === align_point_default.bottom) {
    top += anchorRect.height;
  }
  if (anchorVertical === align_point_default.center || anchorVertical === align_point_default.middle) {
    top += Math.round(anchorRect.height / 2);
  }
  if (elementVertical === align_point_default.bottom) {
    top -= elementRect.height;
    verticalMargin *= -1;
  }
  if (elementVertical === align_point_default.center || elementVertical === align_point_default.middle) {
    top -= Math.round(elementRect.height / 2);
    verticalMargin *= -1;
  }
  if (anchorHorizontal === align_point_default.right) {
    left += anchorRect.width;
  }
  if (anchorHorizontal === align_point_default.center || anchorHorizontal === align_point_default.middle) {
    left += Math.round(anchorRect.width / 2);
  }
  if (elementHorizontal === align_point_default.right) {
    left -= elementRect.width;
    horizontalMargin *= -1;
  }
  if (elementHorizontal === align_point_default.center || elementHorizontal === align_point_default.middle) {
    left -= Math.round(elementRect.width / 2);
    horizontalMargin *= -1;
  }
  return {
    top: top + verticalMargin,
    left: left + horizontalMargin
  };
};
var align_default = align;

// node_modules/@progress/kendo-popup-common/dist/es/add-scroll.js
function addScroll(rect, scroll) {
  return {
    top: rect.top + scroll.y,
    left: rect.left + scroll.x,
    height: rect.height,
    width: rect.width
  };
}

// node_modules/@progress/kendo-popup-common/dist/es/owner-document.js
function ownerDocument(element2) {
  return element2.ownerDocument || element2.document || element2;
}

// node_modules/@progress/kendo-popup-common/dist/es/window.js
var getWindow = function(element2) {
  return ownerDocument(element2).defaultView;
};
var window_default = getWindow;

// node_modules/@progress/kendo-popup-common/dist/es/document.js
var getDocument = function(element2) {
  return ownerDocument(element2).documentElement;
};
var document_default = getDocument;

// node_modules/@progress/kendo-popup-common/dist/es/scrollbar-width.js
var cachedWidth = 0;
function scrollbarWidth() {
  if (!cachedWidth && typeof document !== "undefined") {
    var div = document.createElement("div");
    div.style.cssText = "overflow:scroll;overflow-x:hidden;zoom:1;clear:both;display:block";
    div.innerHTML = "&nbsp;";
    document.body.appendChild(div);
    cachedWidth = div.offsetWidth - div.scrollWidth;
    document.body.removeChild(div);
  }
  return cachedWidth;
}

// node_modules/@progress/kendo-popup-common/dist/es/window-viewport.js
function windowViewport(element2) {
  var win = window_default(element2);
  var document2 = document_default(element2);
  var result = {
    height: win.innerHeight,
    width: win.innerWidth
  };
  if (document2.scrollHeight - document2.clientHeight > 0) {
    result.width -= scrollbarWidth();
  }
  return result;
}

// node_modules/@progress/kendo-popup-common/dist/es/bounding-offset.js
var boundingOffset = function(element2) {
  if (!element2.getBoundingClientRect) {
    var viewport = windowViewport(element2);
    return {
      bottom: viewport.height,
      left: 0,
      right: viewport.width,
      top: 0
    };
  }
  var ref = element2.getBoundingClientRect();
  var bottom = ref.bottom;
  var left = ref.left;
  var right = ref.right;
  var top = ref.top;
  return {
    bottom,
    left,
    right,
    top
  };
};
var bounding_offset_default = boundingOffset;

// node_modules/@progress/kendo-popup-common/dist/es/offset-parent.js
var offsetParent = function(element2) {
  var offsetParent2 = element2.offsetParent;
  while (offsetParent2 && offsetParent2.style.position === "static") {
    offsetParent2 = offsetParent2.offsetParent;
  }
  return offsetParent2 || document_default(element2);
};
var offset_parent_default = offsetParent;

// node_modules/@progress/kendo-popup-common/dist/es/offset.js
var rectOfHiddenElement = function(element2) {
  var ref = element2.style;
  var display = ref.display;
  var left = ref.left;
  var position3 = ref.position;
  element2.style.display = "";
  element2.style.left = "-10000px";
  element2.style.position = "absolute";
  var rect = element2.getBoundingClientRect();
  element2.style.display = display;
  element2.style.left = left;
  element2.style.position = position3;
  return rect;
};
var offset = function(element2) {
  var rect = element2.getBoundingClientRect();
  var left = rect.left;
  var top = rect.top;
  if (!rect.height && !rect.width) {
    rect = rectOfHiddenElement(element2);
  }
  return {
    top,
    left,
    height: rect.height,
    width: rect.width
  };
};
var offset_default = offset;

// node_modules/@progress/kendo-popup-common/dist/es/parents.js
function parents_default(element2, until) {
  var result = [];
  var next = element2.parentNode;
  while (next) {
    result.push(next);
    if (next === until) {
      break;
    }
    next = next.parentNode;
  }
  return result;
}

// node_modules/@progress/kendo-popup-common/dist/es/scroll-position.js
function scrollPosition(element2) {
  var documentElement = document_default(element2);
  var win = window_default(element2);
  return {
    x: win.pageXOffset || documentElement.scrollLeft || 0,
    y: win.pageYOffset || documentElement.scrollTop || 0
  };
}

// node_modules/@progress/kendo-popup-common/dist/es/element-scroll-position.js
function element_scroll_position_default(element2) {
  if (element2 === (element2.ownerDocument || {}).body) {
    return scrollPosition(element2);
  }
  return {
    x: element2.scrollLeft,
    y: element2.scrollTop
  };
}

// node_modules/@progress/kendo-popup-common/dist/es/parent-scroll-position.js
function parentScrollPosition(element2) {
  var parent = offset_parent_default(element2);
  return parent ? element_scroll_position_default(parent) : { x: 0, y: 0 };
}

// node_modules/@progress/kendo-popup-common/dist/es/position.js
var position = function(element2, parent) {
  var win = window_default(element2);
  var elementStyles = win.getComputedStyle(element2);
  var offset3 = offset_default(element2);
  var parentElement = parent || offset_parent_default(element2);
  var ownerDocument2 = element2.ownerDocument;
  var useRelative = parentElement !== ownerDocument2.body && parentElement !== ownerDocument2.documentElement;
  var parentOffset = { top: 0, left: 0 };
  if (elementStyles.position !== "fixed" && useRelative) {
    var parentStyles = win.getComputedStyle(parentElement);
    parentOffset = offset_default(parentElement);
    parentOffset.top += parseInt(parentStyles.borderTopWidth, 10);
    parentOffset.left += parseInt(parentStyles.borderLeftWidth, 10);
  }
  return {
    top: offset3.top - parentOffset.top,
    left: offset3.left - parentOffset.left,
    height: offset3.height,
    width: offset3.width
  };
};
var position_default = position;

// node_modules/@progress/kendo-popup-common/dist/es/offset-parent-scroll-position.js
function offset_parent_scroll_position_default(offsetParentElement, element2) {
  return (
    // eslint-disable-line no-arrow-condition
    offsetParentElement ? element_scroll_position_default(offsetParentElement) : parentScrollPosition(element2)
  );
}

// node_modules/@progress/kendo-popup-common/dist/es/position-with-scroll.js
function position_with_scroll_default(element2, parent, scale) {
  if (scale === void 0)
    scale = 1;
  var offsetParentElement = parent ? offset_parent_default(parent) : null;
  var ref = position_default(element2, offsetParentElement);
  var top = ref.top;
  var left = ref.left;
  var height = ref.height;
  var width = ref.width;
  var ref$1 = offset_parent_scroll_position_default(offsetParentElement, element2);
  var x = ref$1.x;
  var y = ref$1.y;
  var ownerDocument2 = element2.ownerDocument;
  var positionScale = offsetParentElement === ownerDocument2.body || offsetParentElement === ownerDocument2.documentElement ? 1 : scale;
  return {
    top: top + y * positionScale,
    left: left + x * positionScale,
    height,
    width
  };
}

// node_modules/@progress/kendo-popup-common/dist/es/remove-scroll.js
function removeScroll(rect, scroll) {
  return {
    top: rect.top - scroll.y,
    left: rect.left - scroll.x,
    height: rect.height,
    width: rect.width
  };
}

// node_modules/@progress/kendo-popup-common/dist/es/collision.js
var collision_default = {
  "fit": "fit",
  "flip": "flip",
  "none": "none"
};

// node_modules/@progress/kendo-popup-common/dist/es/restrict-to-view.js
var fit = function(position3, size, viewPortSize) {
  var output = 0;
  if (position3 + size > viewPortSize) {
    output = viewPortSize - (position3 + size);
  }
  if (position3 < 0) {
    output = -position3;
  }
  return output;
};
var flip = function(ref) {
  var offset3 = ref.offset;
  var size = ref.size;
  var anchorSize = ref.anchorSize;
  var viewPortSize = ref.viewPortSize;
  var anchorAlignPoint = ref.anchorAlignPoint;
  var elementAlignPoint = ref.elementAlignPoint;
  var margin = ref.margin;
  var output = 0;
  var isPositionCentered = elementAlignPoint === align_point_default.center || elementAlignPoint === align_point_default.middle;
  var isOriginCentered = anchorAlignPoint === align_point_default.center || anchorAlignPoint === align_point_default.middle;
  var marginToAdd = 2 * margin;
  if (elementAlignPoint !== anchorAlignPoint && !isPositionCentered && !isOriginCentered) {
    var isBeforeAnchor = anchorAlignPoint === align_point_default.top || anchorAlignPoint === align_point_default.left;
    if (offset3 < 0 && isBeforeAnchor) {
      output = size + anchorSize + marginToAdd;
      if (offset3 + output + size > viewPortSize) {
        output = 0;
      }
    } else if (offset3 >= 0 && !isBeforeAnchor) {
      if (offset3 + size > viewPortSize) {
        output += -(anchorSize + size + marginToAdd);
      }
      if (offset3 + output < 0) {
        output = 0;
      }
    }
  }
  return output;
};
var restrictToView = function(options) {
  var anchorRect = options.anchorRect;
  var anchorAlign = options.anchorAlign;
  var elementRect = options.elementRect;
  var elementAlign = options.elementAlign;
  var collisions = options.collisions;
  var viewPort = options.viewPort;
  var margin = options.margin;
  if (margin === void 0)
    margin = {};
  var elementTop = elementRect.top;
  var elementLeft = elementRect.left;
  var elementHeight = elementRect.height;
  var elementWidth = elementRect.width;
  var viewPortHeight = viewPort.height;
  var viewPortWidth = viewPort.width;
  var horizontalMargin = margin.horizontal || 0;
  var verticalMargin = margin.vertical || 0;
  var left = 0;
  var top = 0;
  var isVerticalFit = collisions.vertical === collision_default.fit;
  var isHorizontalFit = collisions.horizontal === collision_default.fit;
  var isVerticalFlip = collisions.vertical === collision_default.flip;
  var isHorizontalFlip = collisions.horizontal === collision_default.flip;
  if (isVerticalFit) {
    top += fit(elementTop, elementHeight, viewPortHeight);
  }
  if (isHorizontalFit) {
    left += fit(elementLeft, elementWidth, viewPortWidth);
  }
  if (isVerticalFlip) {
    top += flip({
      margin: verticalMargin,
      offset: elementTop,
      size: elementHeight,
      anchorSize: anchorRect.height,
      viewPortSize: viewPortHeight,
      anchorAlignPoint: anchorAlign.vertical,
      elementAlignPoint: elementAlign.vertical
    });
  }
  if (isHorizontalFlip) {
    left += flip({
      margin: horizontalMargin,
      offset: elementLeft,
      size: elementWidth,
      anchorSize: anchorRect.width,
      viewPortSize: viewPortWidth,
      anchorAlignPoint: anchorAlign.horizontal,
      elementAlignPoint: elementAlign.horizontal
    });
  }
  var flippedVertical = isVerticalFlip && top !== 0;
  var flippedHorizontal = isHorizontalFlip && left !== 0;
  var fittedVertical = isVerticalFit && top !== 0;
  var fittedHorizontal = isHorizontalFit && left !== 0;
  return {
    flipped: flippedHorizontal || flippedVertical,
    fitted: fittedVertical || fittedHorizontal,
    flip: {
      horizontal: flippedHorizontal,
      vertical: flippedVertical
    },
    fit: {
      horizontal: fittedHorizontal,
      vertical: fittedVertical
    },
    offset: {
      left,
      top
    }
  };
};
var restrict_to_view_default = restrictToView;

// node_modules/@progress/kendo-popup-common/dist/es/siblings.js
function siblings_default(element2) {
  var result = [];
  var sibling = element2.parentNode.firstElementChild;
  while (sibling) {
    if (sibling !== element2) {
      result.push(sibling);
    }
    sibling = sibling.nextElementSibling;
  }
  return result;
}

// node_modules/@progress/kendo-popup-common/dist/es/sibling-container.js
function sibling_container_default(anchor, container) {
  var parentElements = parents_default(anchor);
  var containerElement = container;
  var siblingElements;
  var result;
  while (containerElement) {
    siblingElements = siblings_default(containerElement);
    result = parentElements.reduce(
      function(list, p) {
        return list.concat(siblingElements.filter(function(s) {
          return s === p;
        }));
      },
      []
    )[0];
    if (result) {
      break;
    }
    containerElement = containerElement.parentElement;
  }
  return result;
}

// node_modules/@progress/kendo-popup-common/dist/es/utils.js
var eitherRect = function(rect, offset3) {
  if (!rect) {
    return { height: 0, left: offset3.left, top: offset3.top, width: 0 };
  }
  return rect;
};
var scaleRect = function(rect, scale) {
  if (!rect || scale === 1) {
    return rect;
  }
  return {
    height: rect.height / scale,
    left: rect.left / scale,
    top: rect.top / scale,
    width: rect.width / scale
  };
};
var removeStackingOffset = function(rect, stackingOffset) {
  if (!stackingOffset) {
    return rect;
  }
  var result = {
    height: rect.height,
    left: rect.left - stackingOffset.left,
    top: rect.top - stackingOffset.top,
    width: rect.width
  };
  return result;
};
function memoize(fun) {
  var result;
  var called = false;
  return function() {
    var args = [], len = arguments.length;
    while (len--)
      args[len] = arguments[len];
    if (called) {
      return result;
    }
    result = fun.apply(void 0, args);
    called = true;
    return result;
  };
}
var hasRelativeStackingContext = memoize(function(elementSource) {
  if (!canUseDOM2()) {
    return false;
  }
  var currentDocument = elementSource ? elementSource.ownerDocument : document;
  if (!currentDocument || !currentDocument.body) {
    return false;
  }
  var top = 10;
  var parent = currentDocument.createElement("div");
  parent.style.transform = "matrix(10, 0, 0, 10, 0, 0)";
  parent.innerHTML = '<div style="position: fixed; top: ' + top + 'px;">child</div>';
  currentDocument.body.appendChild(parent);
  var isDifferent = parent.children[0].getBoundingClientRect().top !== top;
  currentDocument.body.removeChild(parent);
  return isDifferent;
});
var canUseDOM2 = function() {
  return Boolean(
    // from fbjs
    typeof window !== "undefined" && window.document && window.document.createElement
  );
};
var utils = {
  eitherRect,
  scaleRect,
  removeStackingOffset,
  hasRelativeStackingContext,
  canUseDOM: canUseDOM2
};
var utils_default = utils;

// node_modules/@progress/kendo-popup-common/dist/es/dom-utils.js
var STYLES = [
  "font-size",
  "font-family",
  "font-stretch",
  "font-style",
  "font-weight",
  "line-height"
];
var addOffset = function(current, addition) {
  return {
    left: current.left + addition.left,
    top: current.top + addition.top
  };
};
var getWindow2 = function() {
  return utils_default.canUseDOM() ? window : null;
};
var getFontStyles = function(el) {
  var window2 = getWindow2();
  if (!window2 || !el) {
    return [];
  }
  var computedStyles = window2.getComputedStyle(el);
  return STYLES.map(function(font) {
    return { key: font, value: computedStyles[font] };
  });
};
var hasOffsetParent = function(el) {
  if (!el) {
    return false;
  }
  return Boolean(el.offsetParent);
};
var offset2 = function(el) {
  if (!el) {
    return null;
  }
  return offset_default(el);
};
var offsetAtPoint = function(element2, currentLocation) {
  if (!element2) {
    return null;
  }
  var ref = element2.style;
  var left = ref.left;
  var top = ref.top;
  var transition = ref.transition;
  element2.style.transition = "none";
  element2.style.left = currentLocation.left + "px";
  element2.style.top = currentLocation.top + "px";
  var currentOffset = offset_default(element2);
  element2.style.left = left;
  element2.style.top = top;
  element2.offsetHeight;
  element2.style.transition = transition;
  return currentOffset;
};
var position2 = function(element2, popupElement, scale) {
  if (!element2 || !popupElement) {
    return null;
  }
  var currentScale = scale || 1;
  return position_with_scroll_default(element2, popupElement, currentScale);
};
var OVERFLOW_REGEXP = /auto|scroll/;
var overflowElementStyle = function(element2) {
  return "" + element2.style.overflow + element2.style.overflowX + element2.style.overflowY;
};
var overflowComputedStyle = function(element2) {
  var styles = window.getComputedStyle(element2);
  return "" + styles.overflow + styles.overflowX + styles.overflowY;
};
var overflowStyle = function(element2) {
  return overflowElementStyle(element2) || overflowComputedStyle(element2);
};
var scrollableParents = function(element2) {
  var parentElements = [];
  if (!utils_default.canUseDOM()) {
    return parentElements;
  }
  var parent = element2.parentElement;
  while (parent) {
    if (OVERFLOW_REGEXP.test(overflowStyle(parent)) || parent.hasAttribute("data-scrollable")) {
      parentElements.push(parent);
    }
    parent = parent.parentElement;
  }
  parentElements.push(window);
  return parentElements;
};
var getRelativeContextElement = function(el) {
  if (!el || !utils_default.hasRelativeStackingContext()) {
    return null;
  }
  var parent = el.parentElement;
  while (parent) {
    if (window.getComputedStyle(parent).transform !== "none") {
      return parent;
    }
    parent = parent.parentElement;
  }
  return null;
};
var stackingElementOffset = function(el) {
  var relativeContextElement = getRelativeContextElement(el);
  if (!relativeContextElement) {
    return null;
  }
  return offset_default(relativeContextElement);
};
var stackingElementScroll = function(el) {
  var relativeContextElement = getRelativeContextElement(el);
  if (!relativeContextElement) {
    return { x: 0, y: 0 };
  }
  return {
    x: relativeContextElement.scrollLeft,
    y: relativeContextElement.scrollTop
  };
};
var stackingElementViewPort = function(el) {
  var relativeContextElement = getRelativeContextElement(el);
  if (!relativeContextElement) {
    return null;
  }
  return {
    height: relativeContextElement.scrollHeight,
    width: relativeContextElement.scrollWidth
  };
};
var useRelativePosition = function(el) {
  return Boolean(getRelativeContextElement(el));
};
var zoomLevel = function() {
  if (!utils_default.canUseDOM()) {
    return 1;
  }
  return parseFloat((document.documentElement.clientWidth / window.innerWidth).toFixed(2)) || 1;
};
var isZoomed = function() {
  return zoomLevel() > 1;
};
var zIndex = function(anchor, container) {
  if (!anchor || !utils_default.canUseDOM()) {
    return null;
  }
  var sibling = sibling_container_default(anchor, container);
  if (!sibling) {
    return null;
  }
  var result = [anchor].concat(parents_default(anchor, sibling)).reduce(
    function(index, p) {
      var zIndexStyle = p.style.zIndex || window.getComputedStyle(p).zIndex;
      var current = parseInt(zIndexStyle, 10);
      return current > index ? current : index;
    },
    0
  );
  return result ? result + 1 : null;
};
var domUtils = {
  addOffset,
  addScroll,
  align: align_default,
  boundingOffset: bounding_offset_default,
  getFontStyles,
  getWindow: getWindow2,
  hasOffsetParent,
  offset: offset2,
  offsetAtPoint,
  position: position2,
  removeScroll,
  restrictToView: restrict_to_view_default,
  scrollPosition,
  scrollableParents,
  getRelativeContextElement,
  stackingElementOffset,
  stackingElementScroll,
  stackingElementViewPort,
  useRelativePosition,
  windowViewPort: windowViewport,
  zoomLevel,
  isZoomed,
  zIndex
};
var dom_utils_default = domUtils;

// node_modules/@progress/kendo-popup-common/dist/es/align-element.js
var absoluteRect = function(anchor, element2, offset3, scale) {
  var scrollPos = elementScrollPosition(anchor, element2);
  var rect = utils_default.eitherRect(dom_utils_default.offset(anchor), offset3);
  var stackScale = 2 * scale;
  var stackScroll = dom_utils_default.stackingElementScroll(element2);
  if (scale !== 1 && stackScroll) {
    stackScroll.x /= stackScale;
    stackScroll.y /= stackScale;
  }
  var stackOffset = dom_utils_default.stackingElementOffset(element2);
  if (scale !== 1 && stackOffset) {
    stackOffset.left /= stackScale;
    stackOffset.top /= stackScale;
  }
  return dom_utils_default.removeScroll(
    dom_utils_default.addScroll(
      utils_default.removeStackingOffset(
        utils_default.scaleRect(rect, scale),
        stackOffset
      ),
      stackScroll
    ),
    scrollPos
  );
};
var relativeRect = function(anchor, element2, offset3, scale) {
  var rect = utils_default.eitherRect(dom_utils_default.position(anchor, element2, scale), offset3);
  return utils_default.scaleRect(rect, scale);
};
var elementScrollPosition = function(anchor, element2) {
  return anchor ? { x: 0, y: 0 } : dom_utils_default.scrollPosition(element2);
};
var alignElement = function(settings) {
  var anchor = settings.anchor;
  var element2 = settings.element;
  var anchorAlign = settings.anchorAlign;
  var elementAlign = settings.elementAlign;
  var margin = settings.margin;
  var offset3 = settings.offset;
  var positionMode = settings.positionMode;
  var scale = settings.scale;
  var currentScale = scale || 1;
  var fixedMode = positionMode === "fixed" || !dom_utils_default.hasOffsetParent(element2);
  var anchorRect = fixedMode ? absoluteRect(anchor, element2, offset3, currentScale) : relativeRect(anchor, element2, offset3, currentScale);
  var elementRect = utils_default.scaleRect(dom_utils_default.offset(element2), currentScale);
  var result = dom_utils_default.align({
    anchorAlign,
    anchorRect,
    elementAlign,
    elementRect,
    margin
  });
  return result;
};
var align_element_default = alignElement;

// node_modules/@progress/kendo-popup-common/dist/es/position-element.js
var positionElement = function(settings) {
  var anchor = settings.anchor;
  var currentLocation = settings.currentLocation;
  var element2 = settings.element;
  var anchorAlign = settings.anchorAlign;
  var elementAlign = settings.elementAlign;
  var collisions = settings.collisions;
  var margin = settings.margin;
  var scale = settings.scale;
  var currentScale = scale || 1;
  var elementOffset = dom_utils_default.offsetAtPoint(element2, currentLocation);
  var elementRect = utils_default.scaleRect(elementOffset, currentScale);
  var anchorOffset = utils_default.scaleRect(dom_utils_default.offset(anchor), currentScale);
  var anchorRect = utils_default.eitherRect(anchorOffset, currentLocation);
  var viewPort = settings.viewPort || dom_utils_default.windowViewPort(element2);
  viewPort.width = viewPort.width / currentScale;
  viewPort.height = viewPort.height / currentScale;
  var result = dom_utils_default.restrictToView({
    anchorAlign,
    anchorRect,
    collisions,
    elementAlign,
    elementRect,
    margin,
    viewPort
  });
  var offset3 = dom_utils_default.addOffset(currentLocation, result.offset);
  return {
    flip: result.flip,
    flipped: result.flipped,
    fit: result.fit,
    fitted: result.fitted,
    offset: offset3
  };
};
var position_element_default = positionElement;

// node_modules/@progress/kendo-react-popup/dist/es/util.js
var FRAME_DURATION = 1e3 / 60;
var throttle = function(func2, wait, options) {
  if (options === void 0) {
    options = {};
  }
  var timeout, context2, args, result;
  var previous = 0;
  options = options || {};
  var later = function() {
    previous = options.leading === false ? 0 : (/* @__PURE__ */ new Date()).getTime();
    timeout = void 0;
    result = func2.apply(context2, args);
    if (!timeout) {
      context2 = args = null;
    }
  };
  var throttled = function() {
    var now = (/* @__PURE__ */ new Date()).getTime();
    if (!previous && options.leading === false) {
      previous = now;
    }
    var remaining = wait - (now - previous);
    context2 = void 0;
    args = arguments;
    if (remaining <= 0 || remaining > wait) {
      if (timeout) {
        clearTimeout(timeout);
        timeout = void 0;
      }
      previous = now;
      result = func2.apply(context2, args);
      if (!timeout) {
        context2 = args = null;
      }
    } else if (!timeout && options.trailing !== false) {
      timeout = window.setTimeout(later, remaining);
    }
    return result;
  };
  return throttled;
};

// node_modules/@progress/kendo-react-popup/dist/es/package-metadata.js
var packageMetadata2 = {
  name: "@progress/kendo-react-popup",
  productName: "KendoReact",
  productCodes: ["KENDOUIREACT", "KENDOUICOMPLETE"],
  publishDate: 1700063458,
  version: "",
  licensingDocsUrl: "https://www.telerik.com/kendo-react-ui/my-license/?utm_medium=product&utm_source=kendoreact&utm_campaign=kendo-ui-react-purchase-license-keys-warning"
};

// node_modules/@progress/kendo-react-popup/dist/es/PopupWithoutContext.js
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
var DEFAULT_POPUP_ZINDEX = 100;
var ZINDEX_POPUP_STEP = 1;
function isEquivalent(a, b) {
  if (a === b) {
    return true;
  }
  if (!!a !== !!b) {
    return false;
  }
  var aProps = Object.getOwnPropertyNames(a);
  var bProps = Object.getOwnPropertyNames(b);
  if (aProps.length !== bProps.length) {
    return false;
  }
  for (var i = 0; i < aProps.length; i++) {
    var propName = aProps[i];
    if (a[propName] !== b[propName]) {
      return false;
    }
  }
  return true;
}
var DEFAULT_OFFSET = {
  left: -1e3,
  top: 0
};
var Status;
(function(Status2) {
  Status2["hiding"] = "hiding";
  Status2["hidden"] = "hidden";
  Status2["showing"] = "showing";
  Status2["shown"] = "shown";
  Status2["reposition"] = "reposition";
})(Status || (Status = {}));
var ANIMATION_CONTAINER = "k-animation-container";
var ANIMATION_CONTAINER_SHOWN = "k-animation-container-shown";
var ANIMATION_CONTAINER_CHILD = "k-child-animation-container";
var K_POPUP = "k-popup";
var PopupWithoutContext = (
  /** @class */
  function(_super) {
    __extends(PopupWithoutContext2, _super);
    function PopupWithoutContext2(props) {
      var _this = _super.call(this, props) || this;
      _this.context = 0;
      _this.state = { current: Status.hidden, previous: Status.hidden, props: {} };
      _this._popup = null;
      _this.show = function(popup) {
        _this.setPosition(popup);
        _this.animate(popup.firstChild, "enter", _this.onOpened);
        _this.setState({ current: Status.shown, previous: _this.state.current });
      };
      _this.setPosition = function(popup) {
        var _a = _this.props, anchorAlign = _a.anchorAlign, popupAlign = _a.popupAlign, collision = _a.collision, offset3 = _a.offset, anchor = _a.anchor, margin = _a.margin, scale = _a.scale, positionMode = _a.positionMode;
        var _b = popup.style, width = _b.width, height = _b.height;
        popup.style.width = popup.offsetWidth + "px";
        popup.style.height = popup.offsetHeight + "px";
        var alignedOffset = align_element_default({
          anchor,
          anchorAlign,
          element: popup,
          elementAlign: popupAlign,
          offset: offset3,
          margin,
          positionMode,
          scale
        });
        var position3 = position_element_default({
          anchor,
          anchorAlign,
          element: popup,
          elementAlign: popupAlign,
          collisions: collision,
          currentLocation: alignedOffset,
          margin: _this.props.margin
        });
        popup.style.top = position3.offset.top + "px";
        popup.style.left = position3.offset.left + "px";
        popup.style.width = width;
        popup.style.height = height;
        _this._collisions = {
          fit: position3.fit,
          fitted: position3.fitted,
          flip: position3.flip,
          flipped: position3.flipped
        };
        if (_this.props.onPosition) {
          var event_1 = {
            target: _this,
            flipped: position3.flipped,
            fitted: position3.fitted
          };
          _this.props.onPosition.call(void 0, event_1);
        }
      };
      _this.onOpened = function() {
        var element2 = _this._popup;
        if (!element2) {
          return;
        }
        if (_this.props.show) {
          element2.classList.add(ANIMATION_CONTAINER_SHOWN);
        }
        _this.attachRepositionHandlers(element2);
        if (_this.props.onOpen) {
          _this.props.onOpen.call(void 0, { target: _this });
        }
      };
      _this.animate = function(element2, type, callback) {
        if (!_this.props.popupAlign) {
          return;
        }
        var animationDirection;
        var _a = _this.props.popupAlign, horizontal = _a.horizontal, vertical = _a.vertical;
        if (horizontal === "left" && vertical === "center") {
          animationDirection = "right";
        } else if (horizontal === "right" && vertical === "center") {
          animationDirection = "left";
        } else if (vertical === "top") {
          animationDirection = "down";
        } else {
          animationDirection = "up";
        }
        var flipPositions = {
          down: "up",
          up: "down",
          left: "right",
          right: "left"
        };
        if (_this._collisions && _this._collisions.flipped) {
          animationDirection = flipPositions[animationDirection];
        }
        slide(element2, animationDirection, _this.animationDuration[type], type, callback);
      };
      _this.onClosing = function(popup) {
        if (!_this.props.show) {
          popup.classList.remove(ANIMATION_CONTAINER_SHOWN);
        }
        _this.detachRepositionHandlers();
      };
      _this.onClosed = function() {
        if (_this.state.current === Status.hiding && _this.state.previous === Status.shown) {
          _this.setState({ current: Status.hidden, previous: _this.state.current });
        }
        if (_this.props.onClose) {
          _this.props.onClose.call(void 0, { target: _this });
        }
      };
      _this.getCurrentZIndex = function() {
        return _this.context ? _this.context + ZINDEX_POPUP_STEP : DEFAULT_POPUP_ZINDEX;
      };
      validatePackage2(packageMetadata2);
      _this.reposition = throttle(_this.reposition.bind(_this), FRAME_DURATION);
      return _this;
    }
    Object.defineProperty(PopupWithoutContext2.prototype, "element", {
      /**
       * Represents the Popup DOM element.
       */
      get: function() {
        return this._popup;
      },
      enumerable: false,
      configurable: true
    });
    PopupWithoutContext2.getDerivedStateFromProps = function(props, state) {
      var show = props.show, anchor = props.anchor, anchorAlign = props.anchorAlign, appendTo = props.appendTo, collision = props.collision, popupAlign = props.popupAlign, className = props.className, popupClass = props.popupClass, style = props.style, offset3 = props.offset, contentKey = props.contentKey;
      var nextState = __assign(__assign({}, state), { props: {
        show,
        anchor,
        anchorAlign,
        appendTo,
        collision,
        popupAlign,
        className,
        popupClass,
        style,
        offset: offset3,
        contentKey
      } });
      if (props.show) {
        if (state.current === Status.hidden || state.current === Status.hiding) {
          return __assign(__assign({}, nextState), { current: Status.showing, previous: state.current });
        }
        if (state.current === Status.showing) {
          return __assign(__assign({}, nextState), { current: Status.shown, previous: state.current });
        }
        if (state.current === Status.shown && (!isEquivalent(offset3, state.props.offset) || !isEquivalent(anchorAlign, state.props.anchorAlign) || !isEquivalent(appendTo, state.props.appendTo) || !isEquivalent(collision, state.props.collision) || !isEquivalent(popupAlign, state.props.popupAlign) || !isEquivalent(style, state.props.style) || anchor !== state.props.anchor || popupClass !== state.props.popupClass || className !== state.props.className)) {
          return __assign(__assign({}, nextState), { current: Status.reposition, previous: state.current });
        }
        return nextState;
      }
      if (state.current === Status.hiding || state.current === Status.hidden) {
        return __assign(__assign({}, nextState), { current: Status.hidden, previous: state.current });
      }
      return __assign(__assign({}, nextState), { current: Status.hiding, previous: state.current });
    };
    PopupWithoutContext2.prototype.componentDidUpdate = function(prevProps) {
      if (this.state.current === Status.showing && this._popup) {
        this.show(this._popup);
      } else if (this.state.current === Status.hiding && this._popup) {
        this.onClosing(this._popup);
        this.animate(this._popup.firstChild, "exit", this.onClosed);
      } else if (this.state.current === Status.reposition && this.state.previous === Status.shown) {
        this.setState({ current: Status.shown, previous: this.state.current });
      } else if (this.state.current === Status.shown && prevProps.contentKey !== this.props.contentKey && this._popup) {
        this.setPosition(this._popup);
      }
    };
    PopupWithoutContext2.prototype.componentDidMount = function() {
      if (this.state.current === Status.showing && this._popup) {
        this.show(this._popup);
      }
    };
    PopupWithoutContext2.prototype.componentWillUnmount = function() {
      this.detachRepositionHandlers();
    };
    PopupWithoutContext2.prototype.render = function() {
      var _this = this;
      var _a = this.props, children = _a.children, className = _a.className, popupClass = _a.popupClass, show = _a.show, id = _a.id, positionMode = _a.positionMode;
      var calculatedAppendTo = this.props.appendTo ? this.props.appendTo : canUseDOM ? this.props.anchor && this.props.anchor.ownerDocument ? this.props.anchor.ownerDocument.body : document.body : void 0;
      if (this.state.current === Status.reposition && this.state.previous === Status.shown && this._popup) {
        this.setPosition(this._popup);
      }
      var style = Object.assign({}, { position: positionMode, top: 0, left: -1e4 }, this.props.style || {});
      var closing = this.state.current === Status.hiding;
      if ((show || closing) && calculatedAppendTo) {
        var currentZIndex = this.getCurrentZIndex();
        var popupElement = React3.createElement(
          ZIndexContext.Provider,
          { value: currentZIndex },
          React3.createElement(
            "div",
            { className: classNames(ANIMATION_CONTAINER, className), id, ref: function(e) {
              return _this._popup = e;
            }, style: __assign({ zIndex: currentZIndex }, style) },
            React3.createElement(
              "div",
              { className: classNames(ANIMATION_CONTAINER_CHILD), style: { transitionDelay: "0ms" } },
              React3.createElement("div", { role: this.props.role, className: classNames(K_POPUP, popupClass) }, children)
            )
          )
        );
        return this.props.appendTo !== null ? ReactDOM.createPortal(popupElement, calculatedAppendTo) : popupElement;
      }
      return null;
    };
    Object.defineProperty(PopupWithoutContext2.prototype, "animationDuration", {
      get: function() {
        var animate = this.props.animate;
        var enter = 0;
        var exit = 0;
        if (animate) {
          if (animate === true) {
            enter = exit = 300;
          } else {
            enter = animate.openDuration || 0;
            exit = animate.closeDuration || 0;
          }
        }
        return { enter, exit };
      },
      enumerable: false,
      configurable: true
    });
    PopupWithoutContext2.prototype.attachRepositionHandlers = function(element2) {
      var _this = this;
      this.detachRepositionHandlers();
      this._scrollableParents = dom_utils_default.scrollableParents(this.props.anchor || element2);
      if (this._scrollableParents) {
        this._scrollableParents.map(function(p) {
          return p.addEventListener("scroll", _this.reposition);
        });
      }
      window.addEventListener("resize", this.reposition);
    };
    PopupWithoutContext2.prototype.detachRepositionHandlers = function() {
      var _this = this;
      if (this._scrollableParents) {
        this._scrollableParents.map(function(p) {
          return p.removeEventListener("scroll", _this.reposition);
        });
        this._scrollableParents = void 0;
      }
      window.removeEventListener("resize", this.reposition);
    };
    PopupWithoutContext2.prototype.reposition = function() {
      this.setState({ current: Status.reposition, previous: this.state.current });
    };
    PopupWithoutContext2.propTypes = {
      anchor: function(props) {
        var anchor = props.anchor;
        if (anchor && typeof anchor.nodeType !== "number") {
          return new Error("Invalid prop `anchor` supplied to `Kendo React Popup`. Validation failed.");
        }
        return null;
      },
      appendTo: function(props) {
        var element2 = props.appendTo;
        if (element2 && typeof element2.nodeType !== "number") {
          return new Error("Invalid prop `appendTo` supplied to `Kendo React Popup`. Validation failed.");
        }
        return null;
      },
      className: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.string),
        PropTypes.object
      ]),
      id: PropTypes.string,
      popupClass: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.string),
        PropTypes.object
      ]),
      collision: PropTypes.shape({
        horizontal: PropTypes.oneOf([
          collision_default.fit,
          collision_default.flip,
          collision_default.none
        ]),
        vertical: PropTypes.oneOf([
          collision_default.fit,
          collision_default.flip,
          collision_default.none
        ])
      }),
      anchorAlign: PropTypes.shape({
        horizontal: PropTypes.oneOf([
          align_point_default.left,
          align_point_default.center,
          align_point_default.right
        ]),
        vertical: PropTypes.oneOf([
          align_point_default.top,
          align_point_default.center,
          align_point_default.bottom
        ])
      }),
      popupAlign: PropTypes.shape({
        horizontal: PropTypes.oneOf([
          align_point_default.left,
          align_point_default.center,
          align_point_default.right
        ]),
        vertical: PropTypes.oneOf([
          align_point_default.top,
          align_point_default.center,
          align_point_default.bottom
        ])
      }),
      offset: PropTypes.shape({
        left: PropTypes.number,
        top: PropTypes.number
      }),
      children: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.node
      ]),
      show: PropTypes.bool,
      animate: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.shape({
          openDuration: PropTypes.number,
          closeDuration: PropTypes.number
        })
      ]),
      margin: PropTypes.shape({
        horizontal: PropTypes.number,
        vertical: PropTypes.number
      }),
      positionMode: PropTypes.oneOf([
        "fixed",
        "absolute"
      ]),
      scale: PropTypes.number,
      style: PropTypes.object,
      onClose: PropTypes.func,
      onPosition: PropTypes.func,
      onOpen: PropTypes.func
    };
    PopupWithoutContext2.defaultProps = {
      collision: {
        horizontal: collision_default.fit,
        vertical: collision_default.flip
      },
      anchorAlign: {
        horizontal: align_point_default.left,
        vertical: align_point_default.bottom
      },
      popupAlign: {
        horizontal: align_point_default.left,
        vertical: align_point_default.top
      },
      offset: DEFAULT_OFFSET,
      animate: true,
      show: false,
      margin: {
        horizontal: 0,
        vertical: 0
      },
      positionMode: "absolute"
    };
    PopupWithoutContext2.contextType = ZIndexContext;
    PopupWithoutContext2.displayName = "PopupComponent";
    return PopupWithoutContext2;
  }(React3.Component)
);

// node_modules/@progress/kendo-react-popup/dist/es/Popup.js
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
var PopupPropsContext = React4.createContext(function(props) {
  return props;
});
var Popup = React4.forwardRef(function(props, ref) {
  var contextPropsCallback = React4.useContext(PopupPropsContext);
  var popupProps = contextPropsCallback.call(void 0, props);
  return React4.createElement(PopupWithoutContext, __assign2({ ref }, popupProps));
});
Popup.displayName = "Popup";

export {
  require_prop_types,
  GlobalizationContext,
  provideIntlService,
  provideLocalizationService,
  registerForIntl,
  registerForLocalization,
  canUseDOM,
  classNames,
  validatePackage2 as validatePackage,
  shouldShowValidationUI,
  Popup
};
/*! Bundled license information:

react-is/cjs/react-is.development.js:
  (** @license React v16.13.1
   * react-is.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

object-assign/index.js:
  (*
  object-assign
  (c) Sindre Sorhus
  @license MIT
  *)
*/
//# sourceMappingURL=/build/_shared/chunk-EZ7JG6XF.js.map
