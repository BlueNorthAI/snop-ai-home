import {
  ChatHistory,
  ChatShareDialog,
  Sidebar,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  n,
  useLocalStorage
} from "/build/_shared/chunk-W7IBBSE7.js";
import {
  useUser
} from "/build/_shared/chunk-OJ6MM72X.js";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle
} from "/build/_shared/chunk-LF3PVE3T.js";
import {
  ChatList,
  ExternalLink
} from "/build/_shared/chunk-B27JPXHH.js";
import {
  IconArrowDown,
  IconArrowElbow,
  IconArrowRight,
  IconPlus,
  IconRefresh,
  IconShare,
  IconStop
} from "/build/_shared/chunk-YP6UTSP6.js";
import {
  _objectWithoutPropertiesLoose
} from "/build/_shared/chunk-CO7DHVOA.js";
import {
  Input
} from "/build/_shared/chunk-OOZ4X63L.js";
import {
  Button,
  buttonVariants
} from "/build/_shared/chunk-4U2ZCKCX.js";
import {
  cn
} from "/build/_shared/chunk-TRC5XD27.js";
import {
  _extends
} from "/build/_shared/chunk-ELWJTL4F.js";
import {
  useLocation,
  useNavigate
} from "/build/_shared/chunk-NON4LQMM.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  createHotContext
} from "/build/_shared/chunk-K4XMOQHS.js";
import {
  require_react
} from "/build/_shared/chunk-BOXFZXVX.js";
import {
  __commonJS,
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.development.js
var require_use_sync_external_store_shim_development = __commonJS({
  "node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.development.js"(exports) {
    "use strict";
    if (true) {
      (function() {
        "use strict";
        if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart === "function") {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
        }
        var React10 = require_react();
        var ReactSharedInternals = React10.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
        function error(format) {
          {
            {
              for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
                args[_key2 - 1] = arguments[_key2];
              }
              printWarning("error", format, args);
            }
          }
        }
        function printWarning(level, format, args) {
          {
            var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
            var stack = ReactDebugCurrentFrame.getStackAddendum();
            if (stack !== "") {
              format += "%s";
              args = args.concat([stack]);
            }
            var argsWithFormat = args.map(function(item) {
              return String(item);
            });
            argsWithFormat.unshift("Warning: " + format);
            Function.prototype.apply.call(console[level], console, argsWithFormat);
          }
        }
        function is(x, y) {
          return x === y && (x !== 0 || 1 / x === 1 / y) || x !== x && y !== y;
        }
        var objectIs = typeof Object.is === "function" ? Object.is : is;
        var useState8 = React10.useState, useEffect7 = React10.useEffect, useLayoutEffect4 = React10.useLayoutEffect, useDebugValue2 = React10.useDebugValue;
        var didWarnOld18Alpha = false;
        var didWarnUncachedGetSnapshot = false;
        function useSyncExternalStore2(subscribe, getSnapshot, getServerSnapshot) {
          {
            if (!didWarnOld18Alpha) {
              if (React10.startTransition !== void 0) {
                didWarnOld18Alpha = true;
                error("You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release.");
              }
            }
          }
          var value = getSnapshot();
          {
            if (!didWarnUncachedGetSnapshot) {
              var cachedValue = getSnapshot();
              if (!objectIs(value, cachedValue)) {
                error("The result of getSnapshot should be cached to avoid an infinite loop");
                didWarnUncachedGetSnapshot = true;
              }
            }
          }
          var _useState = useState8({
            inst: {
              value,
              getSnapshot
            }
          }), inst = _useState[0].inst, forceUpdate = _useState[1];
          useLayoutEffect4(function() {
            inst.value = value;
            inst.getSnapshot = getSnapshot;
            if (checkIfSnapshotChanged(inst)) {
              forceUpdate({
                inst
              });
            }
          }, [subscribe, value, getSnapshot]);
          useEffect7(function() {
            if (checkIfSnapshotChanged(inst)) {
              forceUpdate({
                inst
              });
            }
            var handleStoreChange = function() {
              if (checkIfSnapshotChanged(inst)) {
                forceUpdate({
                  inst
                });
              }
            };
            return subscribe(handleStoreChange);
          }, [subscribe]);
          useDebugValue2(value);
          return value;
        }
        function checkIfSnapshotChanged(inst) {
          var latestGetSnapshot = inst.getSnapshot;
          var prevValue = inst.value;
          try {
            var nextValue = latestGetSnapshot();
            return !objectIs(prevValue, nextValue);
          } catch (error2) {
            return true;
          }
        }
        function useSyncExternalStore$1(subscribe, getSnapshot, getServerSnapshot) {
          return getSnapshot();
        }
        var canUseDOM = !!(typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined");
        var isServerEnvironment = !canUseDOM;
        var shim = isServerEnvironment ? useSyncExternalStore$1 : useSyncExternalStore2;
        var useSyncExternalStore$2 = React10.useSyncExternalStore !== void 0 ? React10.useSyncExternalStore : shim;
        exports.useSyncExternalStore = useSyncExternalStore$2;
        if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop === "function") {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
        }
      })();
    }
  }
});

// node_modules/use-sync-external-store/shim/index.js
var require_shim = __commonJS({
  "node_modules/use-sync-external-store/shim/index.js"(exports, module) {
    "use strict";
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_use_sync_external_store_shim_development();
    }
  }
});

// node_modules/ai/react/dist/index.mjs
var import_react3 = __toESM(require_react(), 1);

// node_modules/swr/core/dist/index.mjs
var import_react2 = __toESM(require_react(), 1);
var import_shim = __toESM(require_shim(), 1);

// node_modules/swr/_internal/dist/index.mjs
var import_react = __toESM(require_react(), 1);
var noop = () => {
};
var UNDEFINED = (
  /*#__NOINLINE__*/
  noop()
);
var OBJECT = Object;
var isUndefined = (v) => v === UNDEFINED;
var isFunction = (v) => typeof v == "function";
var mergeObjects = (a, b) => ({
  ...a,
  ...b
});
var isPromiseLike = (x) => isFunction(x.then);
var table = /* @__PURE__ */ new WeakMap();
var counter = 0;
var stableHash = (arg) => {
  const type = typeof arg;
  const constructor = arg && arg.constructor;
  const isDate = constructor == Date;
  let result;
  let index3;
  if (OBJECT(arg) === arg && !isDate && constructor != RegExp) {
    result = table.get(arg);
    if (result)
      return result;
    result = ++counter + "~";
    table.set(arg, result);
    if (constructor == Array) {
      result = "@";
      for (index3 = 0; index3 < arg.length; index3++) {
        result += stableHash(arg[index3]) + ",";
      }
      table.set(arg, result);
    }
    if (constructor == OBJECT) {
      result = "#";
      const keys = OBJECT.keys(arg).sort();
      while (!isUndefined(index3 = keys.pop())) {
        if (!isUndefined(arg[index3])) {
          result += index3 + ":" + stableHash(arg[index3]) + ",";
        }
      }
      table.set(arg, result);
    }
  } else {
    result = isDate ? arg.toJSON() : type == "symbol" ? arg.toString() : type == "string" ? JSON.stringify(arg) : "" + arg;
  }
  return result;
};
var SWRGlobalState = /* @__PURE__ */ new WeakMap();
var EMPTY_CACHE = {};
var INITIAL_CACHE = {};
var STR_UNDEFINED = "undefined";
var isWindowDefined = typeof window != STR_UNDEFINED;
var isDocumentDefined = typeof document != STR_UNDEFINED;
var hasRequestAnimationFrame = () => isWindowDefined && typeof window["requestAnimationFrame"] != STR_UNDEFINED;
var createCacheHelper = (cache2, key) => {
  const state = SWRGlobalState.get(cache2);
  return [
    // Getter
    () => !isUndefined(key) && cache2.get(key) || EMPTY_CACHE,
    // Setter
    (info) => {
      if (!isUndefined(key)) {
        const prev = cache2.get(key);
        if (!(key in INITIAL_CACHE)) {
          INITIAL_CACHE[key] = prev;
        }
        state[5](key, mergeObjects(prev, info), prev || EMPTY_CACHE);
      }
    },
    // Subscriber
    state[6],
    // Get server cache snapshot
    () => {
      if (!isUndefined(key)) {
        if (key in INITIAL_CACHE)
          return INITIAL_CACHE[key];
      }
      return !isUndefined(key) && cache2.get(key) || EMPTY_CACHE;
    }
  ];
};
var online = true;
var isOnline = () => online;
var [onWindowEvent, offWindowEvent] = isWindowDefined && window.addEventListener ? [
  window.addEventListener.bind(window),
  window.removeEventListener.bind(window)
] : [
  noop,
  noop
];
var isVisible = () => {
  const visibilityState = isDocumentDefined && document.visibilityState;
  return isUndefined(visibilityState) || visibilityState !== "hidden";
};
var initFocus = (callback) => {
  if (isDocumentDefined) {
    document.addEventListener("visibilitychange", callback);
  }
  onWindowEvent("focus", callback);
  return () => {
    if (isDocumentDefined) {
      document.removeEventListener("visibilitychange", callback);
    }
    offWindowEvent("focus", callback);
  };
};
var initReconnect = (callback) => {
  const onOnline = () => {
    online = true;
    callback();
  };
  const onOffline = () => {
    online = false;
  };
  onWindowEvent("online", onOnline);
  onWindowEvent("offline", onOffline);
  return () => {
    offWindowEvent("online", onOnline);
    offWindowEvent("offline", onOffline);
  };
};
var preset = {
  isOnline,
  isVisible
};
var defaultConfigOptions = {
  initFocus,
  initReconnect
};
var IS_REACT_LEGACY = !import_react.default.useId;
var IS_SERVER = !isWindowDefined || "Deno" in window;
var rAF = (f) => hasRequestAnimationFrame() ? window["requestAnimationFrame"](f) : setTimeout(f, 1);
var useIsomorphicLayoutEffect = IS_SERVER ? import_react.useEffect : import_react.useLayoutEffect;
var navigatorConnection = typeof navigator !== "undefined" && navigator.connection;
var slowConnection = !IS_SERVER && navigatorConnection && ([
  "slow-2g",
  "2g"
].includes(navigatorConnection.effectiveType) || navigatorConnection.saveData);
var serialize = (key) => {
  if (isFunction(key)) {
    try {
      key = key();
    } catch (err) {
      key = "";
    }
  }
  const args = key;
  key = typeof key == "string" ? key : (Array.isArray(key) ? key.length : key) ? stableHash(key) : "";
  return [
    key,
    args
  ];
};
var __timestamp = 0;
var getTimestamp = () => ++__timestamp;
var FOCUS_EVENT = 0;
var RECONNECT_EVENT = 1;
var MUTATE_EVENT = 2;
var ERROR_REVALIDATE_EVENT = 3;
var constants = {
  __proto__: null,
  ERROR_REVALIDATE_EVENT,
  FOCUS_EVENT,
  MUTATE_EVENT,
  RECONNECT_EVENT
};
async function internalMutate(...args) {
  const [cache2, _key, _data, _opts] = args;
  const options = mergeObjects({
    populateCache: true,
    throwOnError: true
  }, typeof _opts === "boolean" ? {
    revalidate: _opts
  } : _opts || {});
  let populateCache = options.populateCache;
  const rollbackOnErrorOption = options.rollbackOnError;
  let optimisticData = options.optimisticData;
  const revalidate = options.revalidate !== false;
  const rollbackOnError = (error) => {
    return typeof rollbackOnErrorOption === "function" ? rollbackOnErrorOption(error) : rollbackOnErrorOption !== false;
  };
  const throwOnError = options.throwOnError;
  if (isFunction(_key)) {
    const keyFilter = _key;
    const matchedKeys = [];
    const it = cache2.keys();
    for (const key of it) {
      if (
        // Skip the special useSWRInfinite and useSWRSubscription keys.
        !/^\$(inf|sub)\$/.test(key) && keyFilter(cache2.get(key)._k)
      ) {
        matchedKeys.push(key);
      }
    }
    return Promise.all(matchedKeys.map(mutateByKey));
  }
  return mutateByKey(_key);
  async function mutateByKey(_k) {
    const [key] = serialize(_k);
    if (!key)
      return;
    const [get, set] = createCacheHelper(cache2, key);
    const [EVENT_REVALIDATORS, MUTATION, FETCH, PRELOAD] = SWRGlobalState.get(cache2);
    const revalidators = EVENT_REVALIDATORS[key];
    const startRevalidate = () => {
      if (revalidate) {
        delete FETCH[key];
        delete PRELOAD[key];
        if (revalidators && revalidators[0]) {
          return revalidators[0](MUTATE_EVENT).then(() => get().data);
        }
      }
      return get().data;
    };
    if (args.length < 3) {
      return startRevalidate();
    }
    let data = _data;
    let error;
    const beforeMutationTs = getTimestamp();
    MUTATION[key] = [
      beforeMutationTs,
      0
    ];
    const hasOptimisticData = !isUndefined(optimisticData);
    const state = get();
    const displayedData = state.data;
    const currentData = state._c;
    const committedData = isUndefined(currentData) ? displayedData : currentData;
    if (hasOptimisticData) {
      optimisticData = isFunction(optimisticData) ? optimisticData(committedData, displayedData) : optimisticData;
      set({
        data: optimisticData,
        _c: committedData
      });
    }
    if (isFunction(data)) {
      try {
        data = data(committedData);
      } catch (err) {
        error = err;
      }
    }
    if (data && isPromiseLike(data)) {
      data = await data.catch((err) => {
        error = err;
      });
      if (beforeMutationTs !== MUTATION[key][0]) {
        if (error)
          throw error;
        return data;
      } else if (error && hasOptimisticData && rollbackOnError(error)) {
        populateCache = true;
        data = committedData;
        set({
          data,
          _c: UNDEFINED
        });
      }
    }
    if (populateCache) {
      if (!error) {
        if (isFunction(populateCache)) {
          data = populateCache(data, committedData);
        }
        set({
          data,
          error: UNDEFINED,
          _c: UNDEFINED
        });
      }
    }
    MUTATION[key][1] = getTimestamp();
    const res = await startRevalidate();
    set({
      _c: UNDEFINED
    });
    if (error) {
      if (throwOnError)
        throw error;
      return;
    }
    return populateCache ? res : data;
  }
}
var revalidateAllKeys = (revalidators, type) => {
  for (const key in revalidators) {
    if (revalidators[key][0])
      revalidators[key][0](type);
  }
};
var initCache = (provider, options) => {
  if (!SWRGlobalState.has(provider)) {
    const opts = mergeObjects(defaultConfigOptions, options);
    const EVENT_REVALIDATORS = {};
    const mutate2 = internalMutate.bind(UNDEFINED, provider);
    let unmount = noop;
    const subscriptions = {};
    const subscribe = (key, callback) => {
      const subs = subscriptions[key] || [];
      subscriptions[key] = subs;
      subs.push(callback);
      return () => subs.splice(subs.indexOf(callback), 1);
    };
    const setter = (key, value, prev) => {
      provider.set(key, value);
      const subs = subscriptions[key];
      if (subs) {
        for (const fn of subs) {
          fn(value, prev);
        }
      }
    };
    const initProvider = () => {
      if (!SWRGlobalState.has(provider)) {
        SWRGlobalState.set(provider, [
          EVENT_REVALIDATORS,
          {},
          {},
          {},
          mutate2,
          setter,
          subscribe
        ]);
        if (!IS_SERVER) {
          const releaseFocus = opts.initFocus(setTimeout.bind(UNDEFINED, revalidateAllKeys.bind(UNDEFINED, EVENT_REVALIDATORS, FOCUS_EVENT)));
          const releaseReconnect = opts.initReconnect(setTimeout.bind(UNDEFINED, revalidateAllKeys.bind(UNDEFINED, EVENT_REVALIDATORS, RECONNECT_EVENT)));
          unmount = () => {
            releaseFocus && releaseFocus();
            releaseReconnect && releaseReconnect();
            SWRGlobalState.delete(provider);
          };
        }
      }
    };
    initProvider();
    return [
      provider,
      mutate2,
      initProvider,
      unmount
    ];
  }
  return [
    provider,
    SWRGlobalState.get(provider)[4]
  ];
};
var onErrorRetry = (_, __, config, revalidate, opts) => {
  const maxRetryCount = config.errorRetryCount;
  const currentRetryCount = opts.retryCount;
  const timeout = ~~((Math.random() + 0.5) * (1 << (currentRetryCount < 8 ? currentRetryCount : 8))) * config.errorRetryInterval;
  if (!isUndefined(maxRetryCount) && currentRetryCount > maxRetryCount) {
    return;
  }
  setTimeout(revalidate, timeout, opts);
};
var compare = (currentData, newData) => stableHash(currentData) == stableHash(newData);
var [cache, mutate] = initCache(/* @__PURE__ */ new Map());
var defaultConfig = mergeObjects(
  {
    // events
    onLoadingSlow: noop,
    onSuccess: noop,
    onError: noop,
    onErrorRetry,
    onDiscarded: noop,
    // switches
    revalidateOnFocus: true,
    revalidateOnReconnect: true,
    revalidateIfStale: true,
    shouldRetryOnError: true,
    // timeouts
    errorRetryInterval: slowConnection ? 1e4 : 5e3,
    focusThrottleInterval: 5 * 1e3,
    dedupingInterval: 2 * 1e3,
    loadingTimeout: slowConnection ? 5e3 : 3e3,
    // providers
    compare,
    isPaused: () => false,
    cache,
    mutate,
    fallback: {}
  },
  // use web preset by default
  preset
);
var mergeConfigs = (a, b) => {
  const v = mergeObjects(a, b);
  if (b) {
    const { use: u1, fallback: f1 } = a;
    const { use: u2, fallback: f2 } = b;
    if (u1 && u2) {
      v.use = u1.concat(u2);
    }
    if (f1 && f2) {
      v.fallback = mergeObjects(f1, f2);
    }
  }
  return v;
};
var SWRConfigContext = (0, import_react.createContext)({});
var SWRConfig = (props) => {
  const { value } = props;
  const parentConfig = (0, import_react.useContext)(SWRConfigContext);
  const isFunctionalConfig = isFunction(value);
  const config = (0, import_react.useMemo)(() => isFunctionalConfig ? value(parentConfig) : value, [
    isFunctionalConfig,
    parentConfig,
    value
  ]);
  const extendedConfig = (0, import_react.useMemo)(() => isFunctionalConfig ? config : mergeConfigs(parentConfig, config), [
    isFunctionalConfig,
    parentConfig,
    config
  ]);
  const provider = config && config.provider;
  const cacheContextRef = (0, import_react.useRef)(UNDEFINED);
  if (provider && !cacheContextRef.current) {
    cacheContextRef.current = initCache(provider(extendedConfig.cache || cache), config);
  }
  const cacheContext = cacheContextRef.current;
  if (cacheContext) {
    extendedConfig.cache = cacheContext[0];
    extendedConfig.mutate = cacheContext[1];
  }
  useIsomorphicLayoutEffect(() => {
    if (cacheContext) {
      cacheContext[2] && cacheContext[2]();
      return cacheContext[3];
    }
  }, []);
  return (0, import_react.createElement)(SWRConfigContext.Provider, mergeObjects(props, {
    value: extendedConfig
  }));
};
var enableDevtools = isWindowDefined && window.__SWR_DEVTOOLS_USE__;
var use = enableDevtools ? window.__SWR_DEVTOOLS_USE__ : [];
var setupDevTools = () => {
  if (enableDevtools) {
    window.__SWR_DEVTOOLS_REACT__ = import_react.default;
  }
};
var normalize = (args) => {
  return isFunction(args[1]) ? [
    args[0],
    args[1],
    args[2] || {}
  ] : [
    args[0],
    null,
    (args[1] === null ? args[2] : args[1]) || {}
  ];
};
var useSWRConfig = () => {
  return mergeObjects(defaultConfig, (0, import_react.useContext)(SWRConfigContext));
};
var middleware = (useSWRNext) => (key_, fetcher_, config) => {
  const fetcher = fetcher_ && ((...args) => {
    const [key] = serialize(key_);
    const [, , , PRELOAD] = SWRGlobalState.get(cache);
    const req = PRELOAD[key];
    if (isUndefined(req))
      return fetcher_(...args);
    delete PRELOAD[key];
    return req;
  });
  return useSWRNext(key_, fetcher, config);
};
var BUILT_IN_MIDDLEWARE = use.concat(middleware);
var withArgs = (hook) => {
  return function useSWRArgs(...args) {
    const fallbackConfig = useSWRConfig();
    const [key, fn, _config] = normalize(args);
    const config = mergeConfigs(fallbackConfig, _config);
    let next = hook;
    const { use: use3 } = config;
    const middleware2 = (use3 || []).concat(BUILT_IN_MIDDLEWARE);
    for (let i = middleware2.length; i--; ) {
      next = middleware2[i](next);
    }
    return next(key, fn || config.fetcher || null, config);
  };
};
var subscribeCallback = (key, callbacks, callback) => {
  const keyedRevalidators = callbacks[key] || (callbacks[key] = []);
  keyedRevalidators.push(callback);
  return () => {
    const index3 = keyedRevalidators.indexOf(callback);
    if (index3 >= 0) {
      keyedRevalidators[index3] = keyedRevalidators[keyedRevalidators.length - 1];
      keyedRevalidators.pop();
    }
  };
};
setupDevTools();

// node_modules/swr/core/dist/index.mjs
var use2 = import_react2.default.use || ((promise) => {
  if (promise.status === "pending") {
    throw promise;
  } else if (promise.status === "fulfilled") {
    return promise.value;
  } else if (promise.status === "rejected") {
    throw promise.reason;
  } else {
    promise.status = "pending";
    promise.then((v) => {
      promise.status = "fulfilled";
      promise.value = v;
    }, (e) => {
      promise.status = "rejected";
      promise.reason = e;
    });
    throw promise;
  }
});
var WITH_DEDUPE = {
  dedupe: true
};
var useSWRHandler = (_key, fetcher, config) => {
  const { cache: cache2, compare: compare2, suspense, fallbackData, revalidateOnMount, revalidateIfStale, refreshInterval, refreshWhenHidden, refreshWhenOffline, keepPreviousData } = config;
  const [EVENT_REVALIDATORS, MUTATION, FETCH, PRELOAD] = SWRGlobalState.get(cache2);
  const [key, fnArg] = serialize(_key);
  const initialMountedRef = (0, import_react2.useRef)(false);
  const unmountedRef = (0, import_react2.useRef)(false);
  const keyRef = (0, import_react2.useRef)(key);
  const fetcherRef = (0, import_react2.useRef)(fetcher);
  const configRef = (0, import_react2.useRef)(config);
  const getConfig = () => configRef.current;
  const isActive = () => getConfig().isVisible() && getConfig().isOnline();
  const [getCache, setCache, subscribeCache, getInitialCache] = createCacheHelper(cache2, key);
  const stateDependencies = (0, import_react2.useRef)({}).current;
  const fallback = isUndefined(fallbackData) ? config.fallback[key] : fallbackData;
  const isEqual = (prev, current) => {
    for (const _ in stateDependencies) {
      const t = _;
      if (t === "data") {
        if (!compare2(prev[t], current[t])) {
          if (!isUndefined(prev[t])) {
            return false;
          }
          if (!compare2(returnedData, current[t])) {
            return false;
          }
        }
      } else {
        if (current[t] !== prev[t]) {
          return false;
        }
      }
    }
    return true;
  };
  const getSnapshot = (0, import_react2.useMemo)(() => {
    const shouldStartRequest = (() => {
      if (!key)
        return false;
      if (!fetcher)
        return false;
      if (!isUndefined(revalidateOnMount))
        return revalidateOnMount;
      if (getConfig().isPaused())
        return false;
      if (suspense)
        return false;
      if (!isUndefined(revalidateIfStale))
        return revalidateIfStale;
      return true;
    })();
    const getSelectedCache = (state) => {
      const snapshot = mergeObjects(state);
      delete snapshot._k;
      if (!shouldStartRequest) {
        return snapshot;
      }
      return {
        isValidating: true,
        isLoading: true,
        ...snapshot
      };
    };
    const cachedData2 = getCache();
    const initialData = getInitialCache();
    const clientSnapshot = getSelectedCache(cachedData2);
    const serverSnapshot = cachedData2 === initialData ? clientSnapshot : getSelectedCache(initialData);
    let memorizedSnapshot = clientSnapshot;
    return [
      () => {
        const newSnapshot = getSelectedCache(getCache());
        const compareResult = isEqual(newSnapshot, memorizedSnapshot);
        if (compareResult) {
          memorizedSnapshot.data = newSnapshot.data;
          memorizedSnapshot.isLoading = newSnapshot.isLoading;
          memorizedSnapshot.isValidating = newSnapshot.isValidating;
          memorizedSnapshot.error = newSnapshot.error;
          return memorizedSnapshot;
        } else {
          memorizedSnapshot = newSnapshot;
          return newSnapshot;
        }
      },
      () => serverSnapshot
    ];
  }, [
    cache2,
    key
  ]);
  const cached = (0, import_shim.useSyncExternalStore)((0, import_react2.useCallback)(
    (callback) => subscribeCache(key, (current, prev) => {
      if (!isEqual(prev, current))
        callback();
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      cache2,
      key
    ]
  ), getSnapshot[0], getSnapshot[1]);
  const isInitialMount = !initialMountedRef.current;
  const hasRevalidator = EVENT_REVALIDATORS[key] && EVENT_REVALIDATORS[key].length > 0;
  const cachedData = cached.data;
  const data = isUndefined(cachedData) ? fallback : cachedData;
  const error = cached.error;
  const laggyDataRef = (0, import_react2.useRef)(data);
  const returnedData = keepPreviousData ? isUndefined(cachedData) ? laggyDataRef.current : cachedData : data;
  const shouldDoInitialRevalidation = (() => {
    if (hasRevalidator && !isUndefined(error))
      return false;
    if (isInitialMount && !isUndefined(revalidateOnMount))
      return revalidateOnMount;
    if (getConfig().isPaused())
      return false;
    if (suspense)
      return isUndefined(data) ? false : revalidateIfStale;
    return isUndefined(data) || revalidateIfStale;
  })();
  const defaultValidatingState = !!(key && fetcher && isInitialMount && shouldDoInitialRevalidation);
  const isValidating = isUndefined(cached.isValidating) ? defaultValidatingState : cached.isValidating;
  const isLoading = isUndefined(cached.isLoading) ? defaultValidatingState : cached.isLoading;
  const revalidate = (0, import_react2.useCallback)(
    async (revalidateOpts) => {
      const currentFetcher = fetcherRef.current;
      if (!key || !currentFetcher || unmountedRef.current || getConfig().isPaused()) {
        return false;
      }
      let newData;
      let startAt;
      let loading = true;
      const opts = revalidateOpts || {};
      const shouldStartNewRequest = !FETCH[key] || !opts.dedupe;
      const callbackSafeguard = () => {
        if (IS_REACT_LEGACY) {
          return !unmountedRef.current && key === keyRef.current && initialMountedRef.current;
        }
        return key === keyRef.current;
      };
      const finalState = {
        isValidating: false,
        isLoading: false
      };
      const finishRequestAndUpdateState = () => {
        setCache(finalState);
      };
      const cleanupState = () => {
        const requestInfo = FETCH[key];
        if (requestInfo && requestInfo[1] === startAt) {
          delete FETCH[key];
        }
      };
      const initialState = {
        isValidating: true
      };
      if (isUndefined(getCache().data)) {
        initialState.isLoading = true;
      }
      try {
        if (shouldStartNewRequest) {
          setCache(initialState);
          if (config.loadingTimeout && isUndefined(getCache().data)) {
            setTimeout(() => {
              if (loading && callbackSafeguard()) {
                getConfig().onLoadingSlow(key, config);
              }
            }, config.loadingTimeout);
          }
          FETCH[key] = [
            currentFetcher(fnArg),
            getTimestamp()
          ];
        }
        [newData, startAt] = FETCH[key];
        newData = await newData;
        if (shouldStartNewRequest) {
          setTimeout(cleanupState, config.dedupingInterval);
        }
        if (!FETCH[key] || FETCH[key][1] !== startAt) {
          if (shouldStartNewRequest) {
            if (callbackSafeguard()) {
              getConfig().onDiscarded(key);
            }
          }
          return false;
        }
        finalState.error = UNDEFINED;
        const mutationInfo = MUTATION[key];
        if (!isUndefined(mutationInfo) && // case 1
        (startAt <= mutationInfo[0] || // case 2
        startAt <= mutationInfo[1] || // case 3
        mutationInfo[1] === 0)) {
          finishRequestAndUpdateState();
          if (shouldStartNewRequest) {
            if (callbackSafeguard()) {
              getConfig().onDiscarded(key);
            }
          }
          return false;
        }
        const cacheData = getCache().data;
        finalState.data = compare2(cacheData, newData) ? cacheData : newData;
        if (shouldStartNewRequest) {
          if (callbackSafeguard()) {
            getConfig().onSuccess(newData, key, config);
          }
        }
      } catch (err) {
        cleanupState();
        const currentConfig = getConfig();
        const { shouldRetryOnError } = currentConfig;
        if (!currentConfig.isPaused()) {
          finalState.error = err;
          if (shouldStartNewRequest && callbackSafeguard()) {
            currentConfig.onError(err, key, currentConfig);
            if (shouldRetryOnError === true || isFunction(shouldRetryOnError) && shouldRetryOnError(err)) {
              if (isActive()) {
                currentConfig.onErrorRetry(err, key, currentConfig, (_opts) => {
                  const revalidators = EVENT_REVALIDATORS[key];
                  if (revalidators && revalidators[0]) {
                    revalidators[0](constants.ERROR_REVALIDATE_EVENT, _opts);
                  }
                }, {
                  retryCount: (opts.retryCount || 0) + 1,
                  dedupe: true
                });
              }
            }
          }
        }
      }
      loading = false;
      finishRequestAndUpdateState();
      return true;
    },
    // `setState` is immutable, and `eventsCallback`, `fnArg`, and
    // `keyValidating` are depending on `key`, so we can exclude them from
    // the deps array.
    //
    // FIXME:
    // `fn` and `config` might be changed during the lifecycle,
    // but they might be changed every render like this.
    // `useSWR('key', () => fetch('/api/'), { suspense: true })`
    // So we omit the values from the deps array
    // even though it might cause unexpected behaviors.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      key,
      cache2
    ]
  );
  const boundMutate = (0, import_react2.useCallback)(
    // Use callback to make sure `keyRef.current` returns latest result every time
    (...args) => {
      return internalMutate(cache2, keyRef.current, ...args);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
  useIsomorphicLayoutEffect(() => {
    fetcherRef.current = fetcher;
    configRef.current = config;
    if (!isUndefined(cachedData)) {
      laggyDataRef.current = cachedData;
    }
  });
  useIsomorphicLayoutEffect(() => {
    if (!key)
      return;
    const softRevalidate = revalidate.bind(UNDEFINED, WITH_DEDUPE);
    let nextFocusRevalidatedAt = 0;
    const onRevalidate = (type, opts = {}) => {
      if (type == constants.FOCUS_EVENT) {
        const now = Date.now();
        if (getConfig().revalidateOnFocus && now > nextFocusRevalidatedAt && isActive()) {
          nextFocusRevalidatedAt = now + getConfig().focusThrottleInterval;
          softRevalidate();
        }
      } else if (type == constants.RECONNECT_EVENT) {
        if (getConfig().revalidateOnReconnect && isActive()) {
          softRevalidate();
        }
      } else if (type == constants.MUTATE_EVENT) {
        return revalidate();
      } else if (type == constants.ERROR_REVALIDATE_EVENT) {
        return revalidate(opts);
      }
      return;
    };
    const unsubEvents = subscribeCallback(key, EVENT_REVALIDATORS, onRevalidate);
    unmountedRef.current = false;
    keyRef.current = key;
    initialMountedRef.current = true;
    setCache({
      _k: fnArg
    });
    if (shouldDoInitialRevalidation) {
      if (isUndefined(data) || IS_SERVER) {
        softRevalidate();
      } else {
        rAF(softRevalidate);
      }
    }
    return () => {
      unmountedRef.current = true;
      unsubEvents();
    };
  }, [
    key
  ]);
  useIsomorphicLayoutEffect(() => {
    let timer;
    function next() {
      const interval = isFunction(refreshInterval) ? refreshInterval(getCache().data) : refreshInterval;
      if (interval && timer !== -1) {
        timer = setTimeout(execute, interval);
      }
    }
    function execute() {
      if (!getCache().error && (refreshWhenHidden || getConfig().isVisible()) && (refreshWhenOffline || getConfig().isOnline())) {
        revalidate(WITH_DEDUPE).then(next);
      } else {
        next();
      }
    }
    next();
    return () => {
      if (timer) {
        clearTimeout(timer);
        timer = -1;
      }
    };
  }, [
    refreshInterval,
    refreshWhenHidden,
    refreshWhenOffline,
    key
  ]);
  (0, import_react2.useDebugValue)(returnedData);
  if (suspense && isUndefined(data) && key) {
    if (!IS_REACT_LEGACY && IS_SERVER) {
      throw new Error("Fallback data is required when using suspense in SSR.");
    }
    fetcherRef.current = fetcher;
    configRef.current = config;
    unmountedRef.current = false;
    const req = PRELOAD[key];
    if (!isUndefined(req)) {
      const promise = boundMutate(req);
      use2(promise);
    }
    if (isUndefined(error)) {
      const promise = revalidate(WITH_DEDUPE);
      if (!isUndefined(returnedData)) {
        promise.status = "fulfilled";
        promise.value = true;
      }
      use2(promise);
    } else {
      throw error;
    }
  }
  return {
    mutate: boundMutate,
    get data() {
      stateDependencies.data = true;
      return returnedData;
    },
    get error() {
      stateDependencies.error = true;
      return error;
    },
    get isValidating() {
      stateDependencies.isValidating = true;
      return isValidating;
    },
    get isLoading() {
      stateDependencies.isLoading = true;
      return isLoading;
    }
  };
};
var SWRConfig2 = OBJECT.defineProperty(SWRConfig, "defaultValue", {
  value: defaultConfig
});
var useSWR = withArgs(useSWRHandler);

// node_modules/nanoid/non-secure/index.js
var customAlphabet = (alphabet, defaultSize = 21) => {
  return (size = defaultSize) => {
    let id = "";
    let i = size;
    while (i--) {
      id += alphabet[Math.random() * alphabet.length | 0];
    }
    return id;
  };
};

// node_modules/ai/react/dist/index.mjs
var import_react4 = __toESM(require_react(), 1);
var import_react5 = __toESM(require_react(), 1);
"use client";
var textStreamPart = {
  code: "0",
  name: "text",
  parse: (value) => {
    if (typeof value !== "string") {
      throw new Error('"text" parts expect a string value.');
    }
    return { type: "text", value };
  }
};
var functionCallStreamPart = {
  code: "1",
  name: "function_call",
  parse: (value) => {
    if (value == null || typeof value !== "object" || !("function_call" in value) || typeof value.function_call !== "object" || value.function_call == null || !("name" in value.function_call) || !("arguments" in value.function_call) || typeof value.function_call.name !== "string" || typeof value.function_call.arguments !== "string") {
      throw new Error(
        '"function_call" parts expect an object with a "function_call" property.'
      );
    }
    return {
      type: "function_call",
      value
    };
  }
};
var dataStreamPart = {
  code: "2",
  name: "data",
  parse: (value) => {
    if (!Array.isArray(value)) {
      throw new Error('"data" parts expect an array value.');
    }
    return { type: "data", value };
  }
};
var errorStreamPart = {
  code: "3",
  name: "error",
  parse: (value) => {
    if (typeof value !== "string") {
      throw new Error('"error" parts expect a string value.');
    }
    return { type: "error", value };
  }
};
var assistantMessageStreamPart = {
  code: "4",
  name: "assistant_message",
  parse: (value) => {
    if (value == null || typeof value !== "object" || !("id" in value) || !("role" in value) || !("content" in value) || typeof value.id !== "string" || typeof value.role !== "string" || value.role !== "assistant" || !Array.isArray(value.content) || !value.content.every(
      (item) => item != null && typeof item === "object" && "type" in item && item.type === "text" && "text" in item && item.text != null && typeof item.text === "object" && "value" in item.text && typeof item.text.value === "string"
    )) {
      throw new Error(
        '"assistant_message" parts expect an object with an "id", "role", and "content" property.'
      );
    }
    return {
      type: "assistant_message",
      value
    };
  }
};
var assistantControlDataStreamPart = {
  code: "5",
  name: "assistant_control_data",
  parse: (value) => {
    if (value == null || typeof value !== "object" || !("threadId" in value) || !("messageId" in value) || typeof value.threadId !== "string" || typeof value.messageId !== "string") {
      throw new Error(
        '"assistant_control_data" parts expect an object with a "threadId" and "messageId" property.'
      );
    }
    return {
      type: "assistant_control_data",
      value: {
        threadId: value.threadId,
        messageId: value.messageId
      }
    };
  }
};
var dataMessageStreamPart = {
  code: "6",
  name: "data_message",
  parse: (value) => {
    if (value == null || typeof value !== "object" || !("role" in value) || !("data" in value) || typeof value.role !== "string" || value.role !== "data") {
      throw new Error(
        '"data_message" parts expect an object with a "role" and "data" property.'
      );
    }
    return {
      type: "data_message",
      value
    };
  }
};
var toolCallStreamPart = {
  code: "7",
  name: "tool_calls",
  parse: (value) => {
    if (value == null || typeof value !== "object" || !("tool_calls" in value) || typeof value.tool_calls !== "object" || value.tool_calls == null || !Array.isArray(value.tool_calls) || value.tool_calls.some((tc) => {
      tc == null || typeof tc !== "object" || !("id" in tc) || typeof tc.id !== "string" || !("type" in tc) || typeof tc.type !== "string" || !("function" in tc) || tc.function == null || typeof tc.function !== "object" || !("arguments" in tc.function) || typeof tc.function.name !== "string" || typeof tc.function.arguments !== "string";
    })) {
      throw new Error(
        '"tool_calls" parts expect an object with a ToolCallPayload.'
      );
    }
    return {
      type: "tool_calls",
      value
    };
  }
};
var messageAnnotationsStreamPart = {
  code: "8",
  name: "message_annotations",
  parse: (value) => {
    if (!Array.isArray(value)) {
      throw new Error('"message_annotations" parts expect an array value.');
    }
    return { type: "message_annotations", value };
  }
};
var streamParts = [
  textStreamPart,
  functionCallStreamPart,
  dataStreamPart,
  errorStreamPart,
  assistantMessageStreamPart,
  assistantControlDataStreamPart,
  dataMessageStreamPart,
  toolCallStreamPart,
  messageAnnotationsStreamPart
];
var streamPartsByCode = {
  [textStreamPart.code]: textStreamPart,
  [functionCallStreamPart.code]: functionCallStreamPart,
  [dataStreamPart.code]: dataStreamPart,
  [errorStreamPart.code]: errorStreamPart,
  [assistantMessageStreamPart.code]: assistantMessageStreamPart,
  [assistantControlDataStreamPart.code]: assistantControlDataStreamPart,
  [dataMessageStreamPart.code]: dataMessageStreamPart,
  [toolCallStreamPart.code]: toolCallStreamPart,
  [messageAnnotationsStreamPart.code]: messageAnnotationsStreamPart
};
var StreamStringPrefixes = {
  [textStreamPart.name]: textStreamPart.code,
  [functionCallStreamPart.name]: functionCallStreamPart.code,
  [dataStreamPart.name]: dataStreamPart.code,
  [errorStreamPart.name]: errorStreamPart.code,
  [assistantMessageStreamPart.name]: assistantMessageStreamPart.code,
  [assistantControlDataStreamPart.name]: assistantControlDataStreamPart.code,
  [dataMessageStreamPart.name]: dataMessageStreamPart.code,
  [toolCallStreamPart.name]: toolCallStreamPart.code,
  [messageAnnotationsStreamPart.name]: messageAnnotationsStreamPart.code
};
var validCodes = streamParts.map((part) => part.code);
var parseStreamPart = (line) => {
  const firstSeparatorIndex = line.indexOf(":");
  if (firstSeparatorIndex === -1) {
    throw new Error("Failed to parse stream string. No separator found.");
  }
  const prefix = line.slice(0, firstSeparatorIndex);
  if (!validCodes.includes(prefix)) {
    throw new Error(`Failed to parse stream string. Invalid code ${prefix}.`);
  }
  const code = prefix;
  const textValue = line.slice(firstSeparatorIndex + 1);
  const jsonValue = JSON.parse(textValue);
  return streamPartsByCode[code].parse(jsonValue);
};
var NEWLINE = "\n".charCodeAt(0);
function concatChunks(chunks, totalLength) {
  const concatenatedChunks = new Uint8Array(totalLength);
  let offset = 0;
  for (const chunk of chunks) {
    concatenatedChunks.set(chunk, offset);
    offset += chunk.length;
  }
  chunks.length = 0;
  return concatenatedChunks;
}
async function* readDataStream(reader, {
  isAborted
} = {}) {
  const decoder = new TextDecoder();
  const chunks = [];
  let totalLength = 0;
  while (true) {
    const { value } = await reader.read();
    if (value) {
      chunks.push(value);
      totalLength += value.length;
      if (value[value.length - 1] !== NEWLINE) {
        continue;
      }
    }
    if (chunks.length === 0) {
      break;
    }
    const concatenatedChunks = concatChunks(chunks, totalLength);
    totalLength = 0;
    const streamParts2 = decoder.decode(concatenatedChunks, { stream: true }).split("\n").filter((line) => line !== "").map(parseStreamPart);
    for (const streamPart of streamParts2) {
      yield streamPart;
    }
    if (isAborted == null ? void 0 : isAborted()) {
      reader.cancel();
      break;
    }
  }
}
var nanoid = customAlphabet(
  "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
  7
);
function createChunkDecoder(complex) {
  const decoder = new TextDecoder();
  if (!complex) {
    return function(chunk) {
      if (!chunk)
        return "";
      return decoder.decode(chunk, { stream: true });
    };
  }
  return function(chunk) {
    const decoded = decoder.decode(chunk, { stream: true }).split("\n").filter((line) => line !== "");
    return decoded.map(parseStreamPart).filter(Boolean);
  };
}
var COMPLEX_HEADER = "X-Experimental-Stream-Data";
function assignAnnotationsToMessage(message, annotations) {
  if (!message || !annotations || !annotations.length)
    return message;
  return { ...message, annotations: [...annotations] };
}
async function parseComplexResponse({
  reader,
  abortControllerRef,
  update,
  onFinish,
  generateId = nanoid,
  getCurrentDate = () => /* @__PURE__ */ new Date()
}) {
  const createdAt = getCurrentDate();
  const prefixMap = {
    data: []
  };
  let message_annotations = void 0;
  for await (const { type, value } of readDataStream(reader, {
    isAborted: () => (abortControllerRef == null ? void 0 : abortControllerRef.current) === null
  })) {
    if (type === "text") {
      if (prefixMap["text"]) {
        prefixMap["text"] = {
          ...prefixMap["text"],
          content: (prefixMap["text"].content || "") + value
        };
      } else {
        prefixMap["text"] = {
          id: generateId(),
          role: "assistant",
          content: value,
          createdAt
        };
      }
    }
    let functionCallMessage = null;
    if (type === "function_call") {
      prefixMap["function_call"] = {
        id: generateId(),
        role: "assistant",
        content: "",
        function_call: value.function_call,
        name: value.function_call.name,
        createdAt
      };
      functionCallMessage = prefixMap["function_call"];
    }
    let toolCallMessage = null;
    if (type === "tool_calls") {
      prefixMap["tool_calls"] = {
        id: generateId(),
        role: "assistant",
        content: "",
        tool_calls: value.tool_calls,
        createdAt
      };
      toolCallMessage = prefixMap["tool_calls"];
    }
    if (type === "data") {
      prefixMap["data"].push(...value);
    }
    let responseMessage = prefixMap["text"];
    if (type === "message_annotations") {
      if (!message_annotations) {
        message_annotations = [...value];
      } else {
        message_annotations.push(...value);
      }
      functionCallMessage = assignAnnotationsToMessage(
        prefixMap["function_call"],
        message_annotations
      );
      toolCallMessage = assignAnnotationsToMessage(
        prefixMap["tool_calls"],
        message_annotations
      );
      responseMessage = assignAnnotationsToMessage(
        prefixMap["text"],
        message_annotations
      );
    }
    if (message_annotations == null ? void 0 : message_annotations.length) {
      const messagePrefixKeys = [
        "text",
        "function_call",
        "tool_calls"
      ];
      messagePrefixKeys.forEach((key) => {
        if (prefixMap[key]) {
          prefixMap[key].annotations = [...message_annotations];
        }
      });
    }
    const merged = [functionCallMessage, toolCallMessage, responseMessage].filter(Boolean).map((message) => ({
      ...assignAnnotationsToMessage(message, message_annotations)
    }));
    update(merged, [...prefixMap["data"]]);
  }
  onFinish == null ? void 0 : onFinish(prefixMap);
  return {
    messages: [
      prefixMap.text,
      prefixMap.function_call,
      prefixMap.tool_calls
    ].filter(Boolean),
    data: prefixMap.data
  };
}
async function callChatApi({
  api,
  messages,
  body,
  credentials,
  headers,
  abortController,
  appendMessage,
  restoreMessagesOnFailure,
  onResponse,
  onUpdate,
  onFinish,
  generateId
}) {
  var _a;
  const response = await fetch(api, {
    method: "POST",
    body: JSON.stringify({
      messages,
      ...body
    }),
    headers: {
      "Content-Type": "application/json",
      ...headers
    },
    signal: (_a = abortController == null ? void 0 : abortController()) == null ? void 0 : _a.signal,
    credentials
  }).catch((err) => {
    restoreMessagesOnFailure();
    throw err;
  });
  if (onResponse) {
    try {
      await onResponse(response);
    } catch (err) {
      throw err;
    }
  }
  if (!response.ok) {
    restoreMessagesOnFailure();
    throw new Error(
      await response.text() || "Failed to fetch the chat response."
    );
  }
  if (!response.body) {
    throw new Error("The response body is empty.");
  }
  const reader = response.body.getReader();
  const isComplexMode = response.headers.get(COMPLEX_HEADER) === "true";
  if (isComplexMode) {
    return await parseComplexResponse({
      reader,
      abortControllerRef: abortController != null ? { current: abortController() } : void 0,
      update: onUpdate,
      onFinish(prefixMap) {
        if (onFinish && prefixMap.text != null) {
          onFinish(prefixMap.text);
        }
      },
      generateId
    });
  } else {
    const createdAt = /* @__PURE__ */ new Date();
    const decode = createChunkDecoder(false);
    let streamedResponse = "";
    const replyId = generateId();
    let responseMessage = {
      id: replyId,
      createdAt,
      content: "",
      role: "assistant"
    };
    while (true) {
      const { done, value } = await reader.read();
      if (done) {
        break;
      }
      streamedResponse += decode(value);
      if (streamedResponse.startsWith('{"function_call":')) {
        responseMessage["function_call"] = streamedResponse;
      } else if (streamedResponse.startsWith('{"tool_calls":')) {
        responseMessage["tool_calls"] = streamedResponse;
      } else {
        responseMessage["content"] = streamedResponse;
      }
      appendMessage({ ...responseMessage });
      if ((abortController == null ? void 0 : abortController()) === null) {
        reader.cancel();
        break;
      }
    }
    if (streamedResponse.startsWith('{"function_call":')) {
      const parsedFunctionCall = JSON.parse(streamedResponse).function_call;
      responseMessage["function_call"] = parsedFunctionCall;
      appendMessage({ ...responseMessage });
    }
    if (streamedResponse.startsWith('{"tool_calls":')) {
      const parsedToolCalls = JSON.parse(streamedResponse).tool_calls;
      responseMessage["tool_calls"] = parsedToolCalls;
      appendMessage({ ...responseMessage });
    }
    if (onFinish) {
      onFinish(responseMessage);
    }
    return responseMessage;
  }
}
async function processChatStream({
  getStreamedResponse: getStreamedResponse2,
  experimental_onFunctionCall,
  experimental_onToolCall,
  updateChatRequest,
  getCurrentMessages
}) {
  while (true) {
    const messagesAndDataOrJustMessage = await getStreamedResponse2();
    if ("messages" in messagesAndDataOrJustMessage) {
      let hasFollowingResponse = false;
      for (const message of messagesAndDataOrJustMessage.messages) {
        if ((message.function_call === void 0 || typeof message.function_call === "string") && (message.tool_calls === void 0 || typeof message.tool_calls === "string")) {
          continue;
        }
        hasFollowingResponse = true;
        if (experimental_onFunctionCall) {
          const functionCall = message.function_call;
          if (typeof functionCall !== "object") {
            console.warn(
              "experimental_onFunctionCall should not be defined when using tools"
            );
            continue;
          }
          const functionCallResponse = await experimental_onFunctionCall(
            getCurrentMessages(),
            functionCall
          );
          if (functionCallResponse === void 0) {
            hasFollowingResponse = false;
            break;
          }
          updateChatRequest(functionCallResponse);
        }
        if (experimental_onToolCall) {
          const toolCalls = message.tool_calls;
          if (!Array.isArray(toolCalls) || toolCalls.some((toolCall) => typeof toolCall !== "object")) {
            console.warn(
              "experimental_onToolCall should not be defined when using tools"
            );
            continue;
          }
          const toolCallResponse = await experimental_onToolCall(getCurrentMessages(), toolCalls);
          if (toolCallResponse === void 0) {
            hasFollowingResponse = false;
            break;
          }
          updateChatRequest(toolCallResponse);
        }
      }
      if (!hasFollowingResponse) {
        break;
      }
    } else {
      let fixFunctionCallArguments2 = function(response) {
        for (const message of response.messages) {
          if (message.tool_calls !== void 0) {
            for (const toolCall of message.tool_calls) {
              if (typeof toolCall === "object") {
                if (toolCall.function.arguments && typeof toolCall.function.arguments !== "string") {
                  toolCall.function.arguments = JSON.stringify(
                    toolCall.function.arguments
                  );
                }
              }
            }
          }
          if (message.function_call !== void 0) {
            if (typeof message.function_call === "object") {
              if (message.function_call.arguments && typeof message.function_call.arguments !== "string") {
                message.function_call.arguments = JSON.stringify(
                  message.function_call.arguments
                );
              }
            }
          }
        }
      };
      var fixFunctionCallArguments = fixFunctionCallArguments2;
      const streamedResponseMessage = messagesAndDataOrJustMessage;
      if ((streamedResponseMessage.function_call === void 0 || typeof streamedResponseMessage.function_call === "string") && (streamedResponseMessage.tool_calls === void 0 || typeof streamedResponseMessage.tool_calls === "string")) {
        break;
      }
      if (experimental_onFunctionCall) {
        const functionCall = streamedResponseMessage.function_call;
        if (!(typeof functionCall === "object")) {
          console.warn(
            "experimental_onFunctionCall should not be defined when using tools"
          );
          continue;
        }
        const functionCallResponse = await experimental_onFunctionCall(getCurrentMessages(), functionCall);
        if (functionCallResponse === void 0)
          break;
        fixFunctionCallArguments2(functionCallResponse);
        updateChatRequest(functionCallResponse);
      }
      if (experimental_onToolCall) {
        const toolCalls = streamedResponseMessage.tool_calls;
        if (!(typeof toolCalls === "object")) {
          console.warn(
            "experimental_onToolCall should not be defined when using functions"
          );
          continue;
        }
        const toolCallResponse = await experimental_onToolCall(getCurrentMessages(), toolCalls);
        if (toolCallResponse === void 0)
          break;
        fixFunctionCallArguments2(toolCallResponse);
        updateChatRequest(toolCallResponse);
      }
    }
  }
}
var getStreamedResponse = async (api, chatRequest, mutate2, mutateStreamData, existingData, extraMetadataRef, messagesRef, abortControllerRef, generateId, onFinish, onResponse, sendExtraMessageFields) => {
  var _a, _b;
  const previousMessages = messagesRef.current;
  mutate2(chatRequest.messages, false);
  const constructedMessagesPayload = sendExtraMessageFields ? chatRequest.messages : chatRequest.messages.map(
    ({ role, content, name, function_call, tool_calls, tool_call_id }) => ({
      role,
      content,
      tool_call_id,
      ...name !== void 0 && { name },
      ...function_call !== void 0 && {
        function_call
      },
      ...tool_calls !== void 0 && {
        tool_calls
      }
    })
  );
  if (typeof api !== "string") {
    const replyId = generateId();
    const createdAt = /* @__PURE__ */ new Date();
    let responseMessage = {
      id: replyId,
      createdAt,
      content: "",
      role: "assistant"
    };
    async function readRow(promise) {
      const { content, ui, next } = await promise;
      responseMessage["content"] = content;
      responseMessage["ui"] = await ui;
      mutate2([...chatRequest.messages, { ...responseMessage }], false);
      if (next) {
        await readRow(next);
      }
    }
    try {
      const promise = api({
        messages: constructedMessagesPayload,
        data: chatRequest.data
      });
      await readRow(promise);
    } catch (e) {
      mutate2(previousMessages, false);
      throw e;
    }
    if (onFinish) {
      onFinish(responseMessage);
    }
    return responseMessage;
  }
  return await callChatApi({
    api,
    messages: constructedMessagesPayload,
    body: {
      data: chatRequest.data,
      ...extraMetadataRef.current.body,
      ...(_a = chatRequest.options) == null ? void 0 : _a.body,
      ...chatRequest.functions !== void 0 && {
        functions: chatRequest.functions
      },
      ...chatRequest.function_call !== void 0 && {
        function_call: chatRequest.function_call
      },
      ...chatRequest.tools !== void 0 && {
        tools: chatRequest.tools
      },
      ...chatRequest.tool_choice !== void 0 && {
        tool_choice: chatRequest.tool_choice
      }
    },
    credentials: extraMetadataRef.current.credentials,
    headers: {
      ...extraMetadataRef.current.headers,
      ...(_b = chatRequest.options) == null ? void 0 : _b.headers
    },
    abortController: () => abortControllerRef.current,
    appendMessage(message) {
      mutate2([...chatRequest.messages, message], false);
    },
    restoreMessagesOnFailure() {
      mutate2(previousMessages, false);
    },
    onResponse,
    onUpdate(merged, data) {
      mutate2([...chatRequest.messages, ...merged], false);
      mutateStreamData([...existingData || [], ...data || []], false);
    },
    onFinish,
    generateId
  });
};
function useChat({
  api = "/api/chat",
  id,
  initialMessages,
  initialInput = "",
  sendExtraMessageFields,
  experimental_onFunctionCall,
  experimental_onToolCall,
  onResponse,
  onFinish,
  onError,
  credentials,
  headers,
  body,
  generateId = nanoid
} = {}) {
  const hookId = (0, import_react3.useId)();
  const idKey = id != null ? id : hookId;
  const chatKey = typeof api === "string" ? [api, idKey] : idKey;
  const [initialMessagesFallback] = (0, import_react3.useState)([]);
  const { data: messages, mutate: mutate2 } = useSWR(
    [chatKey, "messages"],
    null,
    { fallbackData: initialMessages != null ? initialMessages : initialMessagesFallback }
  );
  const { data: isLoading = false, mutate: mutateLoading } = useSWR(
    [chatKey, "loading"],
    null
  );
  const { data: streamData, mutate: mutateStreamData } = useSWR([chatKey, "streamData"], null);
  const { data: error = void 0, mutate: setError } = useSWR([chatKey, "error"], null);
  const messagesRef = (0, import_react3.useRef)(messages || []);
  (0, import_react3.useEffect)(() => {
    messagesRef.current = messages || [];
  }, [messages]);
  const abortControllerRef = (0, import_react3.useRef)(null);
  const extraMetadataRef = (0, import_react3.useRef)({
    credentials,
    headers,
    body
  });
  (0, import_react3.useEffect)(() => {
    extraMetadataRef.current = {
      credentials,
      headers,
      body
    };
  }, [credentials, headers, body]);
  const triggerRequest = (0, import_react3.useCallback)(
    async (chatRequest) => {
      try {
        mutateLoading(true);
        setError(void 0);
        const abortController = new AbortController();
        abortControllerRef.current = abortController;
        await processChatStream({
          getStreamedResponse: () => getStreamedResponse(
            api,
            chatRequest,
            mutate2,
            mutateStreamData,
            streamData,
            extraMetadataRef,
            messagesRef,
            abortControllerRef,
            generateId,
            onFinish,
            onResponse,
            sendExtraMessageFields
          ),
          experimental_onFunctionCall,
          experimental_onToolCall,
          updateChatRequest: (chatRequestParam) => {
            chatRequest = chatRequestParam;
          },
          getCurrentMessages: () => messagesRef.current
        });
        abortControllerRef.current = null;
      } catch (err) {
        if (err.name === "AbortError") {
          abortControllerRef.current = null;
          return null;
        }
        if (onError && err instanceof Error) {
          onError(err);
        }
        setError(err);
      } finally {
        mutateLoading(false);
      }
    },
    [
      mutate2,
      mutateLoading,
      api,
      extraMetadataRef,
      onResponse,
      onFinish,
      onError,
      setError,
      mutateStreamData,
      streamData,
      sendExtraMessageFields,
      experimental_onFunctionCall,
      experimental_onToolCall,
      messagesRef,
      abortControllerRef,
      generateId
    ]
  );
  const append = (0, import_react3.useCallback)(
    async (message, {
      options,
      functions,
      function_call,
      tools,
      tool_choice,
      data
    } = {}) => {
      if (!message.id) {
        message.id = generateId();
      }
      const chatRequest = {
        messages: messagesRef.current.concat(message),
        options,
        data,
        ...functions !== void 0 && { functions },
        ...function_call !== void 0 && { function_call },
        ...tools !== void 0 && { tools },
        ...tool_choice !== void 0 && { tool_choice }
      };
      return triggerRequest(chatRequest);
    },
    [triggerRequest, generateId]
  );
  const reload = (0, import_react3.useCallback)(
    async ({
      options,
      functions,
      function_call,
      tools,
      tool_choice
    } = {}) => {
      if (messagesRef.current.length === 0)
        return null;
      const lastMessage = messagesRef.current[messagesRef.current.length - 1];
      if (lastMessage.role === "assistant") {
        const chatRequest2 = {
          messages: messagesRef.current.slice(0, -1),
          options,
          ...functions !== void 0 && { functions },
          ...function_call !== void 0 && { function_call },
          ...tools !== void 0 && { tools },
          ...tool_choice !== void 0 && { tool_choice }
        };
        return triggerRequest(chatRequest2);
      }
      const chatRequest = {
        messages: messagesRef.current,
        options,
        ...functions !== void 0 && { functions },
        ...function_call !== void 0 && { function_call },
        ...tools !== void 0 && { tools },
        ...tool_choice !== void 0 && { tool_choice }
      };
      return triggerRequest(chatRequest);
    },
    [triggerRequest]
  );
  const stop = (0, import_react3.useCallback)(() => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
      abortControllerRef.current = null;
    }
  }, []);
  const setMessages = (0, import_react3.useCallback)(
    (messages2) => {
      mutate2(messages2, false);
      messagesRef.current = messages2;
    },
    [mutate2]
  );
  const [input, setInput] = (0, import_react3.useState)(initialInput);
  const handleSubmit = (0, import_react3.useCallback)(
    (e, options = {}, metadata) => {
      if (metadata) {
        extraMetadataRef.current = {
          ...extraMetadataRef.current,
          ...metadata
        };
      }
      e.preventDefault();
      if (!input)
        return;
      append(
        {
          content: input,
          role: "user",
          createdAt: /* @__PURE__ */ new Date()
        },
        options
      );
      setInput("");
    },
    [input, append]
  );
  const handleInputChange = (e) => {
    setInput(e.target.value);
  };
  return {
    messages: messages || [],
    error,
    append,
    reload,
    stop,
    setMessages,
    input,
    setInput,
    handleInputChange,
    handleSubmit,
    isLoading,
    data: streamData
  };
}

// app/components/chat.tsx
var import_react12 = __toESM(require_react());

// app/components/chat-panel.tsx
var React6 = __toESM(require_react());

// app/lib/hooks/use-at-bottom.tsx
var React2 = __toESM(require_react());
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\lib\\hooks\\use-at-bottom.tsx"
  );
  import.meta.hot.lastModified = "1710131653000";
}
function useAtBottom(offset = 0) {
  const [isAtBottom, setIsAtBottom] = React2.useState(false);
  React2.useEffect(() => {
    const handleScroll = () => {
      setIsAtBottom(
        window.innerHeight + window.scrollY >= document.body.offsetHeight - offset
      );
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [offset]);
  return isAtBottom;
}

// app/components/button-scroll-to-bottom.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\button-scroll-to-bottom.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\button-scroll-to-bottom.tsx"
  );
  import.meta.hot.lastModified = "1710142398538.281";
}
function ButtonScrollToBottom({
  className,
  ...props
}) {
  _s();
  const isAtBottom = useAtBottom();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { variant: "outline", size: "icon", className: cn("absolute right-4 top-1 z-10 bg-white transition-opacity duration-300 sm:right-8 md:top-2", isAtBottom ? "opacity-0" : "opacity-100", className), onClick: () => window.scrollTo({
    top: document.body.offsetHeight,
    behavior: "smooth"
  }), ...props, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IconArrowDown, {}, void 0, false, {
      fileName: "app/components/button-scroll-to-bottom.tsx",
      lineNumber: 36,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "sr-only", children: "Scroll to bottom" }, void 0, false, {
      fileName: "app/components/button-scroll-to-bottom.tsx",
      lineNumber: 37,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/button-scroll-to-bottom.tsx",
    lineNumber: 32,
    columnNumber: 10
  }, this);
}
_s(ButtonScrollToBottom, "XcoaZ4M/lEcBO7DIOaddQ/aGJNQ=", false, function() {
  return [useAtBottom];
});
_c = ButtonScrollToBottom;
var _c;
$RefreshReg$(_c, "ButtonScrollToBottom");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/prompt-form.tsx
var React5 = __toESM(require_react());

// node_modules/react-textarea-autosize/dist/react-textarea-autosize.browser.esm.js
var React4 = __toESM(require_react());

// node_modules/use-latest/dist/use-latest.esm.js
var React3 = __toESM(require_react());

// node_modules/use-isomorphic-layout-effect/dist/use-isomorphic-layout-effect.browser.esm.js
var import_react6 = __toESM(require_react());
var index = import_react6.useLayoutEffect;
var use_isomorphic_layout_effect_browser_esm_default = index;

// node_modules/use-latest/dist/use-latest.esm.js
var useLatest = function useLatest2(value) {
  var ref = React3.useRef(value);
  use_isomorphic_layout_effect_browser_esm_default(function() {
    ref.current = value;
  });
  return ref;
};

// node_modules/use-composed-ref/dist/use-composed-ref.esm.js
var import_react7 = __toESM(require_react());
var updateRef = function updateRef2(ref, value) {
  if (typeof ref === "function") {
    ref(value);
    return;
  }
  ref.current = value;
};
var useComposedRef = function useComposedRef2(libRef, userRef) {
  var prevUserRef = (0, import_react7.useRef)();
  return (0, import_react7.useCallback)(function(instance) {
    libRef.current = instance;
    if (prevUserRef.current) {
      updateRef(prevUserRef.current, null);
    }
    prevUserRef.current = userRef;
    if (!userRef) {
      return;
    }
    updateRef(userRef, instance);
  }, [userRef]);
};
var use_composed_ref_esm_default = useComposedRef;

// node_modules/react-textarea-autosize/dist/react-textarea-autosize.browser.esm.js
var HIDDEN_TEXTAREA_STYLE = {
  "min-height": "0",
  "max-height": "none",
  height: "0",
  visibility: "hidden",
  overflow: "hidden",
  position: "absolute",
  "z-index": "-1000",
  top: "0",
  right: "0"
};
var forceHiddenStyles = function forceHiddenStyles2(node) {
  Object.keys(HIDDEN_TEXTAREA_STYLE).forEach(function(key) {
    node.style.setProperty(key, HIDDEN_TEXTAREA_STYLE[key], "important");
  });
};
var forceHiddenStyles$1 = forceHiddenStyles;
var hiddenTextarea = null;
var getHeight = function getHeight2(node, sizingData) {
  var height = node.scrollHeight;
  if (sizingData.sizingStyle.boxSizing === "border-box") {
    return height + sizingData.borderSize;
  }
  return height - sizingData.paddingSize;
};
function calculateNodeHeight(sizingData, value, minRows, maxRows) {
  if (minRows === void 0) {
    minRows = 1;
  }
  if (maxRows === void 0) {
    maxRows = Infinity;
  }
  if (!hiddenTextarea) {
    hiddenTextarea = document.createElement("textarea");
    hiddenTextarea.setAttribute("tabindex", "-1");
    hiddenTextarea.setAttribute("aria-hidden", "true");
    forceHiddenStyles$1(hiddenTextarea);
  }
  if (hiddenTextarea.parentNode === null) {
    document.body.appendChild(hiddenTextarea);
  }
  var paddingSize = sizingData.paddingSize, borderSize = sizingData.borderSize, sizingStyle = sizingData.sizingStyle;
  var boxSizing = sizingStyle.boxSizing;
  Object.keys(sizingStyle).forEach(function(_key) {
    var key = _key;
    hiddenTextarea.style[key] = sizingStyle[key];
  });
  forceHiddenStyles$1(hiddenTextarea);
  hiddenTextarea.value = value;
  var height = getHeight(hiddenTextarea, sizingData);
  hiddenTextarea.value = value;
  height = getHeight(hiddenTextarea, sizingData);
  hiddenTextarea.value = "x";
  var rowHeight = hiddenTextarea.scrollHeight - paddingSize;
  var minHeight = rowHeight * minRows;
  if (boxSizing === "border-box") {
    minHeight = minHeight + paddingSize + borderSize;
  }
  height = Math.max(minHeight, height);
  var maxHeight = rowHeight * maxRows;
  if (boxSizing === "border-box") {
    maxHeight = maxHeight + paddingSize + borderSize;
  }
  height = Math.min(maxHeight, height);
  return [height, rowHeight];
}
var noop2 = function noop3() {
};
var pick = function pick2(props, obj) {
  return props.reduce(function(acc, prop) {
    acc[prop] = obj[prop];
    return acc;
  }, {});
};
var SIZING_STYLE = [
  "borderBottomWidth",
  "borderLeftWidth",
  "borderRightWidth",
  "borderTopWidth",
  "boxSizing",
  "fontFamily",
  "fontSize",
  "fontStyle",
  "fontWeight",
  "letterSpacing",
  "lineHeight",
  "paddingBottom",
  "paddingLeft",
  "paddingRight",
  "paddingTop",
  // non-standard
  "tabSize",
  "textIndent",
  // non-standard
  "textRendering",
  "textTransform",
  "width",
  "wordBreak"
];
var isIE = !!document.documentElement.currentStyle;
var getSizingData = function getSizingData2(node) {
  var style = window.getComputedStyle(node);
  if (style === null) {
    return null;
  }
  var sizingStyle = pick(SIZING_STYLE, style);
  var boxSizing = sizingStyle.boxSizing;
  if (boxSizing === "") {
    return null;
  }
  if (isIE && boxSizing === "border-box") {
    sizingStyle.width = parseFloat(sizingStyle.width) + parseFloat(sizingStyle.borderRightWidth) + parseFloat(sizingStyle.borderLeftWidth) + parseFloat(sizingStyle.paddingRight) + parseFloat(sizingStyle.paddingLeft) + "px";
  }
  var paddingSize = parseFloat(sizingStyle.paddingBottom) + parseFloat(sizingStyle.paddingTop);
  var borderSize = parseFloat(sizingStyle.borderBottomWidth) + parseFloat(sizingStyle.borderTopWidth);
  return {
    sizingStyle,
    paddingSize,
    borderSize
  };
};
var getSizingData$1 = getSizingData;
function useListener(target, type, listener) {
  var latestListener = useLatest(listener);
  React4.useLayoutEffect(function() {
    var handler = function handler2(ev) {
      return latestListener.current(ev);
    };
    if (!target) {
      return;
    }
    target.addEventListener(type, handler);
    return function() {
      return target.removeEventListener(type, handler);
    };
  }, []);
}
var useWindowResizeListener = function useWindowResizeListener2(listener) {
  useListener(window, "resize", listener);
};
var useFontsLoadedListener = function useFontsLoadedListener2(listener) {
  useListener(document.fonts, "loadingdone", listener);
};
var _excluded = ["cacheMeasurements", "maxRows", "minRows", "onChange", "onHeightChange"];
var TextareaAutosize = function TextareaAutosize2(_ref, userRef) {
  var cacheMeasurements = _ref.cacheMeasurements, maxRows = _ref.maxRows, minRows = _ref.minRows, _ref$onChange = _ref.onChange, onChange = _ref$onChange === void 0 ? noop2 : _ref$onChange, _ref$onHeightChange = _ref.onHeightChange, onHeightChange = _ref$onHeightChange === void 0 ? noop2 : _ref$onHeightChange, props = _objectWithoutPropertiesLoose(_ref, _excluded);
  var isControlled = props.value !== void 0;
  var libRef = React4.useRef(null);
  var ref = use_composed_ref_esm_default(libRef, userRef);
  var heightRef = React4.useRef(0);
  var measurementsCacheRef = React4.useRef();
  var resizeTextarea = function resizeTextarea2() {
    var node = libRef.current;
    var nodeSizingData = cacheMeasurements && measurementsCacheRef.current ? measurementsCacheRef.current : getSizingData$1(node);
    if (!nodeSizingData) {
      return;
    }
    measurementsCacheRef.current = nodeSizingData;
    var _calculateNodeHeight = calculateNodeHeight(nodeSizingData, node.value || node.placeholder || "x", minRows, maxRows), height = _calculateNodeHeight[0], rowHeight = _calculateNodeHeight[1];
    if (heightRef.current !== height) {
      heightRef.current = height;
      node.style.setProperty("height", height + "px", "important");
      onHeightChange(height, {
        rowHeight
      });
    }
  };
  var handleChange = function handleChange2(event) {
    if (!isControlled) {
      resizeTextarea();
    }
    onChange(event);
  };
  {
    React4.useLayoutEffect(resizeTextarea);
    useWindowResizeListener(resizeTextarea);
    useFontsLoadedListener(resizeTextarea);
    return /* @__PURE__ */ React4.createElement("textarea", _extends({}, props, {
      onChange: handleChange,
      ref
    }));
  }
};
var index2 = /* @__PURE__ */ React4.forwardRef(TextareaAutosize);

// app/lib/hooks/use-enter-submit.tsx
var import_react8 = __toESM(require_react());
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\lib\\hooks\\use-enter-submit.tsx"
  );
  import.meta.hot.lastModified = "1710131653000";
}
function useEnterSubmit() {
  const formRef = (0, import_react8.useRef)(null);
  const handleKeyDown = (event) => {
    if (event.key === "Enter" && !event.shiftKey && !event.nativeEvent.isComposing) {
      formRef.current?.requestSubmit();
      event.preventDefault();
    }
  };
  return { formRef, onKeyDown: handleKeyDown };
}

// app/components/prompt-form.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\prompt-form.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\prompt-form.tsx"
  );
  import.meta.hot.lastModified = "1710161756660.067";
}
function PromptForm({
  onSubmit,
  input,
  setInput,
  isLoading
}) {
  _s2();
  const {
    formRef,
    onKeyDown
  } = useEnterSubmit();
  const inputRef = React5.useRef(null);
  const navigate = useNavigate();
  React5.useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("form", { onSubmit: async (e) => {
    e.preventDefault();
    if (!input?.trim()) {
      return;
    }
    setInput("");
    onSubmit(input);
  }, ref: formRef, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "relative flex flex-col w-full px-8 overflow-hidden max-h-60 grow bg-white sm:rounded-md sm:border sm:px-12", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Tooltip, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(TooltipTrigger, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("button", { onClick: (e) => {
        e.preventDefault();
        navigate("/");
      }, className: cn(buttonVariants({
        size: "sm",
        variant: "outline"
      }), "absolute left-0 top-4 size-8 rounded-full bg-background p-0 sm:left-4"), children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(IconPlus, {}, void 0, false, {
          fileName: "app/components/prompt-form.tsx",
          lineNumber: 66,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "sr-only", children: "New Chat" }, void 0, false, {
          fileName: "app/components/prompt-form.tsx",
          lineNumber: 67,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/prompt-form.tsx",
        lineNumber: 59,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/prompt-form.tsx",
        lineNumber: 58,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(TooltipContent, { children: "New Chat" }, void 0, false, {
        fileName: "app/components/prompt-form.tsx",
        lineNumber: 70,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/prompt-form.tsx",
      lineNumber: 57,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(index2, { ref: inputRef, tabIndex: 0, onKeyDown, rows: 1, value: input, onChange: (e) => setInput(e.target.value), placeholder: "Send a message.", spellCheck: false, className: "min-h-[60px] w-full resize-none bg-white px-4 py-[1.3rem] focus-within:outline-none sm:text-sm" }, void 0, false, {
      fileName: "app/components/prompt-form.tsx",
      lineNumber: 72,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "z-10 absolute right-0 top-4 sm:right-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Tooltip, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(TooltipTrigger, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button, { type: "submit", size: "icon", disabled: isLoading || input === "", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(IconArrowElbow, {}, void 0, false, {
          fileName: "app/components/prompt-form.tsx",
          lineNumber: 77,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "sr-only", children: "Send message" }, void 0, false, {
          fileName: "app/components/prompt-form.tsx",
          lineNumber: 78,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/prompt-form.tsx",
        lineNumber: 76,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/components/prompt-form.tsx",
        lineNumber: 75,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(TooltipContent, { children: "Send message" }, void 0, false, {
        fileName: "app/components/prompt-form.tsx",
        lineNumber: 81,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/prompt-form.tsx",
      lineNumber: 74,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/prompt-form.tsx",
      lineNumber: 73,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/prompt-form.tsx",
    lineNumber: 56,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/prompt-form.tsx",
    lineNumber: 48,
    columnNumber: 10
  }, this);
}
_s2(PromptForm, "QzYNlpvW4dzQnn9W/s7eJg1PCOE=", false, function() {
  return [useEnterSubmit, useNavigate];
});
_c2 = PromptForm;
var _c2;
$RefreshReg$(_c2, "PromptForm");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/chat-panel.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\chat-panel.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s3 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\chat-panel.tsx"
  );
  import.meta.hot.lastModified = "1710245747685.292";
}
function ChatPanel({
  id,
  title,
  isLoading,
  stop,
  append,
  reload,
  input,
  setInput,
  messages
}) {
  _s3();
  const [shareDialogOpen, setShareDialogOpen] = React6.useState(false);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "fixed inset-x-0 bottom-0 w-full bg-gradient-to-b from-muted/30 from-0% to-muted/30 to-50% animate-in duration-300 ease-in-out dark:from-background/10 dark:from-10% dark:to-background/80 peer-[[data-state=open]]:group-[]:lg:pl-[250px] peer-[[data-state=open]]:group-[]:xl:pl-[300px]", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(ButtonScrollToBottom, {}, void 0, false, {
      fileName: "app/components/chat-panel.tsx",
      lineNumber: 47,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "mx-auto sm:max-w-5xl sm:px-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex items-center justify-center h-12", children: isLoading ? /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Button, { variant: "outline", onClick: () => stop(), className: "bg-white", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(IconStop, { className: "mr-2" }, void 0, false, {
          fileName: "app/components/chat-panel.tsx",
          lineNumber: 51,
          columnNumber: 15
        }, this),
        "Stop generating"
      ] }, void 0, true, {
        fileName: "app/components/chat-panel.tsx",
        lineNumber: 50,
        columnNumber: 24
      }, this) : messages?.length >= 2 && /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex space-x-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Button, { variant: "outline", onClick: () => reload(), children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(IconRefresh, { className: "mr-2" }, void 0, false, {
            fileName: "app/components/chat-panel.tsx",
            lineNumber: 55,
            columnNumber: 19
          }, this),
          "Regenerate response"
        ] }, void 0, true, {
          fileName: "app/components/chat-panel.tsx",
          lineNumber: 54,
          columnNumber: 17
        }, this),
        id ? /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_jsx_dev_runtime3.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Button, { variant: "outline", onClick: () => setShareDialogOpen(true), children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(IconShare, { className: "mr-2" }, void 0, false, {
              fileName: "app/components/chat-panel.tsx",
              lineNumber: 60,
              columnNumber: 23
            }, this),
            "Share"
          ] }, void 0, true, {
            fileName: "app/components/chat-panel.tsx",
            lineNumber: 59,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
            ChatShareDialog,
            {
              open: shareDialogOpen,
              onOpenChange: setShareDialogOpen,
              onCopy: () => setShareDialogOpen(false),
              chat: {
                id: id ?? "",
                title: title ?? "",
                messages
              }
            },
            void 0,
            false,
            {
              fileName: "app/components/chat-panel.tsx",
              lineNumber: 63,
              columnNumber: 21
            },
            this
          )
        ] }, void 0, true, {
          fileName: "app/components/chat-panel.tsx",
          lineNumber: 58,
          columnNumber: 23
        }, this) : null
      ] }, void 0, true, {
        fileName: "app/components/chat-panel.tsx",
        lineNumber: 53,
        columnNumber: 50
      }, this) }, void 0, false, {
        fileName: "app/components/chat-panel.tsx",
        lineNumber: 49,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "mt-4 pb-2 bg-white", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(PromptForm, { onSubmit: async (value) => {
        await append({
          id,
          content: value,
          role: "user"
        });
      }, input, setInput, isLoading }, void 0, false, {
        fileName: "app/components/chat-panel.tsx",
        lineNumber: 74,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/components/chat-panel.tsx",
        lineNumber: 73,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/chat-panel.tsx",
      lineNumber: 48,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/chat-panel.tsx",
    lineNumber: 46,
    columnNumber: 10
  }, this);
}
_s3(ChatPanel, "8n3HTBrq93IYgrNTeDi+X8/XUbI=");
_c3 = ChatPanel;
var _c3;
$RefreshReg$(_c3, "ChatPanel");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/chat-scroll-anchor.tsx
var React8 = __toESM(require_react());

// node_modules/react-intersection-observer/index.mjs
var React7 = __toESM(require_react(), 1);
var React22 = __toESM(require_react(), 1);
"use client";
var observerMap = /* @__PURE__ */ new Map();
var RootIds = /* @__PURE__ */ new WeakMap();
var rootId = 0;
var unsupportedValue = void 0;
function getRootId(root) {
  if (!root)
    return "0";
  if (RootIds.has(root))
    return RootIds.get(root);
  rootId += 1;
  RootIds.set(root, rootId.toString());
  return RootIds.get(root);
}
function optionsToId(options) {
  return Object.keys(options).sort().filter(
    (key) => options[key] !== void 0
  ).map((key) => {
    return `${key}_${key === "root" ? getRootId(options.root) : options[key]}`;
  }).toString();
}
function createObserver(options) {
  const id = optionsToId(options);
  let instance = observerMap.get(id);
  if (!instance) {
    const elements = /* @__PURE__ */ new Map();
    let thresholds;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        var _a;
        const inView = entry.isIntersecting && thresholds.some((threshold) => entry.intersectionRatio >= threshold);
        if (options.trackVisibility && typeof entry.isVisible === "undefined") {
          entry.isVisible = inView;
        }
        (_a = elements.get(entry.target)) == null ? void 0 : _a.forEach((callback) => {
          callback(inView, entry);
        });
      });
    }, options);
    thresholds = observer.thresholds || (Array.isArray(options.threshold) ? options.threshold : [options.threshold || 0]);
    instance = {
      id,
      observer,
      elements
    };
    observerMap.set(id, instance);
  }
  return instance;
}
function observe(element, callback, options = {}, fallbackInView = unsupportedValue) {
  if (typeof window.IntersectionObserver === "undefined" && fallbackInView !== void 0) {
    const bounds = element.getBoundingClientRect();
    callback(fallbackInView, {
      isIntersecting: fallbackInView,
      target: element,
      intersectionRatio: typeof options.threshold === "number" ? options.threshold : 0,
      time: 0,
      boundingClientRect: bounds,
      intersectionRect: bounds,
      rootBounds: bounds
    });
    return () => {
    };
  }
  const { id, observer, elements } = createObserver(options);
  const callbacks = elements.get(element) || [];
  if (!elements.has(element)) {
    elements.set(element, callbacks);
  }
  callbacks.push(callback);
  observer.observe(element);
  return function unobserve() {
    callbacks.splice(callbacks.indexOf(callback), 1);
    if (callbacks.length === 0) {
      elements.delete(element);
      observer.unobserve(element);
    }
    if (elements.size === 0) {
      observer.disconnect();
      observerMap.delete(id);
    }
  };
}
function useInView({
  threshold,
  delay,
  trackVisibility,
  rootMargin,
  root,
  triggerOnce,
  skip,
  initialInView,
  fallbackInView,
  onChange
} = {}) {
  var _a;
  const [ref, setRef] = React22.useState(null);
  const callback = React22.useRef();
  const [state, setState] = React22.useState({
    inView: !!initialInView,
    entry: void 0
  });
  callback.current = onChange;
  React22.useEffect(
    () => {
      if (skip || !ref)
        return;
      let unobserve;
      unobserve = observe(
        ref,
        (inView, entry) => {
          setState({
            inView,
            entry
          });
          if (callback.current)
            callback.current(inView, entry);
          if (entry.isIntersecting && triggerOnce && unobserve) {
            unobserve();
            unobserve = void 0;
          }
        },
        {
          root,
          rootMargin,
          threshold,
          // @ts-ignore
          trackVisibility,
          // @ts-ignore
          delay
        },
        fallbackInView
      );
      return () => {
        if (unobserve) {
          unobserve();
        }
      };
    },
    // We break the rule here, because we aren't including the actual `threshold` variable
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      // If the threshold is an array, convert it to a string, so it won't change between renders.
      Array.isArray(threshold) ? threshold.toString() : threshold,
      ref,
      root,
      rootMargin,
      triggerOnce,
      skip,
      trackVisibility,
      fallbackInView,
      delay
    ]
  );
  const entryTarget = (_a = state.entry) == null ? void 0 : _a.target;
  const previousEntryTarget = React22.useRef();
  if (!ref && entryTarget && !triggerOnce && !skip && previousEntryTarget.current !== entryTarget) {
    previousEntryTarget.current = entryTarget;
    setState({
      inView: !!initialInView,
      entry: void 0
    });
  }
  const result = [setRef, state.inView, state.entry];
  result.ref = result[0];
  result.inView = result[1];
  result.entry = result[2];
  return result;
}

// app/components/chat-scroll-anchor.tsx
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\chat-scroll-anchor.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s4 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\chat-scroll-anchor.tsx"
  );
  import.meta.hot.lastModified = "1710131653000";
}
function ChatScrollAnchor({
  trackVisibility
}) {
  _s4();
  const isAtBottom = useAtBottom();
  const {
    ref,
    entry,
    inView
  } = useInView({
    trackVisibility,
    delay: 100,
    rootMargin: "0px 0px -150px 0px"
  });
  React8.useEffect(() => {
    if (isAtBottom && trackVisibility && !inView) {
      entry?.target.scrollIntoView({
        block: "start"
      });
    }
  }, [inView, entry, isAtBottom, trackVisibility]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { ref, className: "h-px w-full" }, void 0, false, {
    fileName: "app/components/chat-scroll-anchor.tsx",
    lineNumber: 48,
    columnNumber: 10
  }, this);
}
_s4(ChatScrollAnchor, "J4/KpF3wGEr75gzISmQqrVFlQn4=", false, function() {
  return [useAtBottom, useInView];
});
_c4 = ChatScrollAnchor;
var _c4;
$RefreshReg$(_c4, "ChatScrollAnchor");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/empty-screen.tsx
var import_jsx_dev_runtime5 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\empty-screen.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\empty-screen.tsx"
  );
  import.meta.hot.lastModified = "1710131653000";
}
var exampleMessages = [{
  heading: "Explain technical concepts",
  message: `What is a "serverless function"?`
}, {
  heading: "Summarize an article",
  message: "Summarize the following article for a 2nd grader: \n"
}, {
  heading: "Draft an email",
  message: `Draft an email to my boss about the following: 
`
}];
function EmptyScreen({
  setInput
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "mx-auto max-w-2xl px-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "rounded-lg border bg-background p-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h1", { className: "mb-2 text-lg font-semibold", children: "Welcome to Next.js AI Chatbot!" }, void 0, false, {
      fileName: "app/components/empty-screen.tsx",
      lineNumber: 39,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { className: "mb-2 leading-normal text-muted-foreground", children: [
      "This is an open source AI chatbot app template built with",
      " ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(ExternalLink, { href: "https://nextjs.org", children: "Next.js" }, void 0, false, {
        fileName: "app/components/empty-screen.tsx",
        lineNumber: 44,
        columnNumber: 11
      }, this),
      " and",
      " ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(ExternalLink, { href: "https://vercel.com/storage/kv", children: "Vercel KV" }, void 0, false, {
        fileName: "app/components/empty-screen.tsx",
        lineNumber: 45,
        columnNumber: 11
      }, this),
      "."
    ] }, void 0, true, {
      fileName: "app/components/empty-screen.tsx",
      lineNumber: 42,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { className: "leading-normal text-muted-foreground", children: "You can start a conversation here or try the following examples:" }, void 0, false, {
      fileName: "app/components/empty-screen.tsx",
      lineNumber: 50,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "mt-4 flex flex-col items-start space-y-2", children: exampleMessages.map((message, index3) => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Button, { variant: "link", className: "h-auto p-0 text-base", onClick: () => setInput(message.message), children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(IconArrowRight, { className: "mr-2 text-muted-foreground" }, void 0, false, {
        fileName: "app/components/empty-screen.tsx",
        lineNumber: 55,
        columnNumber: 15
      }, this),
      message.heading
    ] }, index3, true, {
      fileName: "app/components/empty-screen.tsx",
      lineNumber: 54,
      columnNumber: 52
    }, this)) }, void 0, false, {
      fileName: "app/components/empty-screen.tsx",
      lineNumber: 53,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/empty-screen.tsx",
    lineNumber: 38,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/empty-screen.tsx",
    lineNumber: 37,
    columnNumber: 10
  }, this);
}
_c5 = EmptyScreen;
var _c5;
$RefreshReg$(_c5, "EmptyScreen");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/chat.tsx
var import_jsx_dev_runtime6 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\chat.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s5 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\chat.tsx"
  );
  import.meta.hot.lastModified = "1710131653000";
}
function Chat({
  id,
  initialMessages,
  className
}) {
  _s5();
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname;
  const [previewToken, setPreviewToken] = useLocalStorage("ai-token", null);
  const [previewTokenDialog, setPreviewTokenDialog] = (0, import_react12.useState)(false);
  const [previewTokenInput, setPreviewTokenInput] = (0, import_react12.useState)(previewToken ?? "");
  const {
    messages,
    append,
    reload,
    stop,
    isLoading,
    input,
    setInput
  } = useChat({
    initialMessages,
    id,
    body: {
      id,
      previewToken
    },
    onResponse(response) {
      if (response.status === 401) {
        n.error(response.statusText);
      }
    },
    onFinish() {
      if (!path.includes("chat")) {
        navigate(`/ai/chat/${id}`, {
          replace: true
        });
      }
    }
  });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_jsx_dev_runtime6.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: cn("pb-[200px] pt-4 md:pt-10", className), children: messages.length ? /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_jsx_dev_runtime6.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(ChatList, { messages }, void 0, false, {
        fileName: "app/components/chat.tsx",
        lineNumber: 85,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(ChatScrollAnchor, { trackVisibility: isLoading }, void 0, false, {
        fileName: "app/components/chat.tsx",
        lineNumber: 86,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/chat.tsx",
      lineNumber: 84,
      columnNumber: 28
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(EmptyScreen, { setInput }, void 0, false, {
      fileName: "app/components/chat.tsx",
      lineNumber: 87,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/components/chat.tsx",
      lineNumber: 83,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(ChatPanel, { id, isLoading, stop, append, reload, messages, input, setInput }, void 0, false, {
      fileName: "app/components/chat.tsx",
      lineNumber: 89,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Dialog, { open: previewTokenDialog, onOpenChange: setPreviewTokenDialog, children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(DialogContent, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(DialogHeader, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(DialogTitle, { children: "Enter your OpenAI Key" }, void 0, false, {
          fileName: "app/components/chat.tsx",
          lineNumber: 94,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(DialogDescription, { children: [
          "If you have not obtained your OpenAI API key, you can do so by",
          " ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("a", { href: "https://platform.openai.com/signup/", className: "underline", children: "signing up" }, void 0, false, {
            fileName: "app/components/chat.tsx",
            lineNumber: 97,
            columnNumber: 15
          }, this),
          " ",
          "on the OpenAI website. This is only necessary for preview environments so that the open source community can test the app. The token will be saved to your browser's local storage under the name ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("code", { className: "font-mono", children: "ai-token" }, void 0, false, {
            fileName: "app/components/chat.tsx",
            lineNumber: 103,
            columnNumber: 24
          }, this),
          "."
        ] }, void 0, true, {
          fileName: "app/components/chat.tsx",
          lineNumber: 95,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/chat.tsx",
        lineNumber: 93,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Input, { value: previewTokenInput, placeholder: "OpenAI API key", onChange: (e) => setPreviewTokenInput(e.target.value) }, void 0, false, {
        fileName: "app/components/chat.tsx",
        lineNumber: 106,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(DialogFooter, { className: "items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Button, { onClick: () => {
        setPreviewToken(previewTokenInput);
        setPreviewTokenDialog(false);
      }, children: "Save Token" }, void 0, false, {
        fileName: "app/components/chat.tsx",
        lineNumber: 108,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/chat.tsx",
        lineNumber: 107,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/chat.tsx",
      lineNumber: 92,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/chat.tsx",
      lineNumber: 91,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/chat.tsx",
    lineNumber: 82,
    columnNumber: 10
  }, this);
}
_s5(Chat, "p/gERXYb+lKOvlj53m7Y63P5w/U=", false, function() {
  return [useNavigate, useLocation, useLocalStorage, useChat];
});
_c6 = Chat;
var _c6;
$RefreshReg$(_c6, "Chat");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/sidebar-desktop.tsx
var import_jsx_dev_runtime7 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\sidebar-desktop.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s6 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\sidebar-desktop.tsx"
  );
  import.meta.hot.lastModified = "1710142610463.2146";
}
function SidebarDesktop() {
  _s6();
  const user = useUser();
  console.log("user", user);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Sidebar, { className: "peer absolute inset-y-0 z-30 hidden -translate-x-full border-r bg-muted duration-300 ease-in-out data-[state=open]:translate-x-0 lg:flex lg:w-[250px] xl:w-[300px]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(ChatHistory, { userId: user.id }, void 0, false, {
    fileName: "app/components/sidebar-desktop.tsx",
    lineNumber: 38,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/sidebar-desktop.tsx",
    lineNumber: 37,
    columnNumber: 10
  }, this);
}
_s6(SidebarDesktop, "BPnln+wUpxLjLAxQmw7xYz9C+QI=", false, function() {
  return [useUser];
});
_c7 = SidebarDesktop;
var _c7;
$RefreshReg$(_c7, "SidebarDesktop");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  Chat,
  SidebarDesktop
};
/*! Bundled license information:

use-sync-external-store/cjs/use-sync-external-store-shim.development.js:
  (**
   * @license React
   * use-sync-external-store-shim.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
//# sourceMappingURL=/build/_shared/chunk-IM6JU3K6.js.map
