var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// app/routes/slideNew.jsx
var require_slideNew = __commonJS({
  "app/routes/slideNew.jsx"() {
    "use strict";
  }
});

// node_modules/remix-utils/build/common/promise.js
var require_promise = __commonJS({
  "node_modules/remix-utils/build/common/promise.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });
    exports.TimeoutError = exports.timeout = exports.promiseHash = void 0;
    async function promiseHash(hash) {
      return Object.fromEntries(await Promise.all(Object.entries(hash).map(async ([key, promise]) => [key, await promise])));
    }
    exports.promiseHash = promiseHash;
    var TIMEOUT = Symbol("TIMEOUT");
    function timeout(promise, options) {
      return new Promise(async (resolve, reject) => {
        let timer = null;
        try {
          let result = await Promise.race([
            promise,
            new Promise((resolve2) => {
              timer = setTimeout(() => resolve2(TIMEOUT), options.ms);
            })
          ]);
          return timer && clearTimeout(timer), result === TIMEOUT ? (options.controller && options.controller.abort(), reject(new TimeoutError(`Timed out after ${options.ms}ms`))) : resolve(result);
        } catch (error) {
          timer && clearTimeout(timer), reject(error);
        }
      });
    }
    exports.timeout = timeout;
    var TimeoutError = class extends Error {
      constructor(message) {
        super(message), this.name = "TimeoutError";
      }
    };
    exports.TimeoutError = TimeoutError;
  }
});

// node_modules/remix-utils/build/common.js
var require_common = __commonJS({
  "node_modules/remix-utils/build/common.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      k2 === void 0 && (k2 = k);
      var desc = Object.getOwnPropertyDescriptor(m, k);
      (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) && (desc = { enumerable: !0, get: function() {
        return m[k];
      } }), Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      k2 === void 0 && (k2 = k), o[k2] = m[k];
    }), __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p) && __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: !0 });
    __exportStar(require_promise(), exports);
  }
});

// node_modules/remix-utils/build/react/cache-assets.js
var require_cache_assets = __commonJS({
  "node_modules/remix-utils/build/react/cache-assets.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });
    exports.cacheAssets = void 0;
    async function cacheAssets({ cacheName = "assets", buildPath = "/build/" } = {}) {
      let paths = getFilePaths(), cache = await caches.open(cacheName), urls = await getCachedUrls(cache, buildPath);
      await removeOldAssets(cache, paths, urls), await addNewAssets(cache, paths, urls);
    }
    exports.cacheAssets = cacheAssets;
    function getFilePaths() {
      try {
        return unique([
          ...Object.values(window.__remixManifest.routes).flatMap((route) => {
            var _a;
            return [route.module, ...(_a = route.imports) !== null && _a !== void 0 ? _a : []];
          }),
          window.__remixManifest.url,
          window.__remixManifest.entry.module,
          ...window.__remixManifest.entry.imports
        ]);
      } catch {
        throw new Error("Failed to get file paths from Remix manifest");
      }
    }
    async function getCachedUrls(cache, buildPath = "/build/") {
      try {
        return (await cache.keys()).map((key) => new URL(key.url)).filter((url) => url.hostname === window.location.hostname).map((url) => url.pathname).filter((pathname) => pathname.startsWith(buildPath));
      } catch {
        throw new Error("Failed to retrieve cached URLs");
      }
    }
    async function removeOldAssets(cache, paths, urls) {
      try {
        await Promise.all(urls.filter((pathname) => !paths.includes(pathname)).map((pathname) => cache.delete(pathname)));
      } catch {
        throw new Error("Failed to remove old assets from the cache");
      }
    }
    async function addNewAssets(cache, paths, urls) {
      try {
        await cache.addAll(paths.filter((path) => !urls.includes(path)));
      } catch {
        throw new Error("Failed to add new assets to the cache");
      }
    }
    function unique(array) {
      return [...new Set(array)];
    }
  }
});

// node_modules/remix-utils/build/react/use-hydrated.js
var require_use_hydrated = __commonJS({
  "node_modules/remix-utils/build/react/use-hydrated.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });
    exports.useHydrated = void 0;
    var react_1 = require("react"), hydrating = !0;
    function useHydrated() {
      let [hydrated, setHydrated] = (0, react_1.useState)(() => !hydrating);
      return (0, react_1.useEffect)(function() {
        hydrating = !1, setHydrated(!0);
      }, []), hydrated;
    }
    exports.useHydrated = useHydrated;
  }
});

// node_modules/remix-utils/build/react/client-only.js
var require_client_only = __commonJS({
  "node_modules/remix-utils/build/react/client-only.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });
    exports.ClientOnly = void 0;
    var jsx_runtime_1 = require("react/jsx-runtime"), use_hydrated_1 = require_use_hydrated();
    function ClientOnly3({ children, fallback = null }) {
      return (0, use_hydrated_1.useHydrated)() ? (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: children() }) : (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: fallback });
    }
    exports.ClientOnly = ClientOnly3;
  }
});

// node_modules/remix-utils/build/react/csrf.js
var require_csrf = __commonJS({
  "node_modules/remix-utils/build/react/csrf.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });
    exports.AuthenticityTokenInput = exports.useAuthenticityToken = exports.AuthenticityTokenProvider = void 0;
    var jsx_runtime_1 = require("react/jsx-runtime"), react_1 = require("react"), context = (0, react_1.createContext)(null);
    function AuthenticityTokenProvider({ children, token }) {
      return (0, jsx_runtime_1.jsx)(context.Provider, { value: token, children });
    }
    exports.AuthenticityTokenProvider = AuthenticityTokenProvider;
    function useAuthenticityToken() {
      let token = (0, react_1.useContext)(context);
      if (!token)
        throw new Error("Missing AuthenticityTokenProvider.");
      return token;
    }
    exports.useAuthenticityToken = useAuthenticityToken;
    function AuthenticityTokenInput({ name = "csrf" }) {
      let token = useAuthenticityToken();
      return (0, jsx_runtime_1.jsx)("input", { type: "hidden", value: token, name });
    }
    exports.AuthenticityTokenInput = AuthenticityTokenInput;
  }
});

// node_modules/remix-utils/build/react/dynamic-links.js
var require_dynamic_links = __commonJS({
  "node_modules/remix-utils/build/react/dynamic-links.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });
    exports.DynamicLinks = void 0;
    var jsx_runtime_1 = require("react/jsx-runtime"), react_1 = require("react"), react_2 = require("@remix-run/react");
    function DynamicLinks() {
      let location = (0, react_2.useLocation)(), links2 = (0, react_2.useMatches)().flatMap((match, index, matches) => {
        var _a;
        let fn = (_a = match.handle) === null || _a === void 0 ? void 0 : _a.dynamicLinks;
        if (typeof fn != "function")
          return [];
        let result = fn({
          id: match.id,
          data: match.data,
          params: match.params,
          location,
          parentsData: matches.slice(0, index).map((match2) => match2.data),
          matches
        });
        return Array.isArray(result) ? result : [];
      });
      return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: links2.map((link) => (0, react_1.createElement)("link", { ...link, key: link.integrity || JSON.stringify(link) })) });
    }
    exports.DynamicLinks = DynamicLinks;
  }
});

// node_modules/remix-utils/build/react/external-scripts.js
var require_external_scripts = __commonJS({
  "node_modules/remix-utils/build/react/external-scripts.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });
    exports.ExternalScripts = void 0;
    var react_1 = require("react"), jsx_runtime_1 = require("react/jsx-runtime"), react_2 = require("@remix-run/react");
    function ExternalScripts() {
      let location = (0, react_2.useLocation)(), scripts = (0, react_2.useMatches)().flatMap((match, index, matches) => {
        var _a;
        let scripts2 = (_a = match.handle) === null || _a === void 0 ? void 0 : _a.scripts;
        if (typeof scripts2 != "function")
          return [];
        let result = scripts2({
          id: match.id,
          data: match.data,
          params: match.params,
          location,
          parentsData: matches.slice(0, index).map((match2) => match2.data),
          matches
        });
        return Array.isArray(result) ? result : [];
      });
      return (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [scripts.map((props) => {
        let rel = props.noModule ? "modulepreload" : "preload", as = props.noModule ? void 0 : "script";
        return (0, jsx_runtime_1.jsx)("link", { rel, href: props.src, as, crossOrigin: props.crossOrigin, integrity: props.integrity, referrerPolicy: props.referrerPolicy }, props.src);
      }), scripts.map((props) => (0, react_1.createElement)("script", { ...props, key: props.src }))] });
    }
    exports.ExternalScripts = ExternalScripts;
  }
});

// node_modules/remix-utils/build/react/matches-type.js
var require_matches_type = __commonJS({
  "node_modules/remix-utils/build/react/matches-type.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });
  }
});

// node_modules/remix-utils/build/react/server-only.js
var require_server_only = __commonJS({
  "node_modules/remix-utils/build/react/server-only.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });
    exports.ServerOnly = void 0;
    var jsx_runtime_1 = require("react/jsx-runtime"), use_hydrated_1 = require_use_hydrated();
    function ServerOnly({ children, fallback = null }) {
      return (0, use_hydrated_1.useHydrated)() ? (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: fallback }) : (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: children() });
    }
    exports.ServerOnly = ServerOnly;
  }
});

// node_modules/remix-utils/build/react/structured-data.js
var require_structured_data = __commonJS({
  "node_modules/remix-utils/build/react/structured-data.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });
    exports.StructuredData = void 0;
    var jsx_runtime_1 = require("react/jsx-runtime"), react_1 = require("@remix-run/react");
    function isHandleStructuredData(handle) {
      return handle !== void 0 && handle.structuredData !== void 0 && typeof handle.structuredData == "function";
    }
    function StructuredData() {
      let location = (0, react_1.useLocation)(), structuredData = (0, react_1.useMatches)().flatMap((match, index, matches) => {
        if (isHandleStructuredData(match.handle)) {
          let result = match.handle.structuredData({
            id: match.id,
            data: match.data,
            params: match.params,
            location,
            parentsData: matches.slice(0, index).map((match2) => match2.data),
            matches
          });
          if (result)
            return result;
        }
        return [];
      });
      if (structuredData.length === 0)
        return null;
      let renderedScript = structuredData.length === 1 ? JSON.stringify(structuredData[0]) : JSON.stringify(structuredData);
      return (0, jsx_runtime_1.jsx)("script", { type: "application/ld+json", dangerouslySetInnerHTML: {
        __html: renderedScript
      } });
    }
    exports.StructuredData = StructuredData;
  }
});

// node_modules/remix-utils/build/react/use-event-source.js
var require_use_event_source = __commonJS({
  "node_modules/remix-utils/build/react/use-event-source.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });
    exports.useEventSource = void 0;
    var react_1 = require("react");
    function useEventSource(url, { event = "message", init } = {}) {
      let [data, setData] = (0, react_1.useState)(null);
      return (0, react_1.useEffect)(() => {
        let eventSource = new EventSource(url, init);
        eventSource.addEventListener(event ?? "message", handler), setData(null);
        function handler(event2) {
          setData(event2.data || "UNKNOWN_EVENT_DATA");
        }
        return () => {
          eventSource.removeEventListener(event ?? "message", handler), eventSource.close();
        };
      }, [url, event, init]), data;
    }
    exports.useEventSource = useEventSource;
  }
});

// node_modules/remix-utils/build/react/use-global-pending-state.js
var require_use_global_pending_state = __commonJS({
  "node_modules/remix-utils/build/react/use-global-pending-state.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });
    exports.useGlobalLoadingState = exports.useGlobalSubmittingState = exports.useGlobalPendingState = exports.useGlobalTransitionStates = void 0;
    var react_1 = require("@remix-run/react"), react_2 = require("react");
    function useGlobalTransitionStates() {
      let transition = (0, react_1.useTransition)(), fetchers = (0, react_1.useFetchers)();
      return (0, react_2.useMemo)(function() {
        return [transition.state, ...fetchers.map((fetcher) => fetcher.state)];
      }, [transition.state, fetchers]);
    }
    exports.useGlobalTransitionStates = useGlobalTransitionStates;
    function useGlobalPendingState() {
      let isSubmitting = useGlobalSubmittingState() === "submitting";
      return useGlobalLoadingState() === "loading" || isSubmitting ? "pending" : "idle";
    }
    exports.useGlobalPendingState = useGlobalPendingState;
    function useGlobalSubmittingState() {
      return useGlobalTransitionStates().includes("submitting") ? "submitting" : "idle";
    }
    exports.useGlobalSubmittingState = useGlobalSubmittingState;
    function useGlobalLoadingState() {
      return useGlobalTransitionStates().includes("loading") ? "loading" : "idle";
    }
    exports.useGlobalLoadingState = useGlobalLoadingState;
  }
});

// node_modules/remix-utils/build/react/use-locales.js
var require_use_locales = __commonJS({
  "node_modules/remix-utils/build/react/use-locales.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });
    exports.useLocales = void 0;
    var react_1 = require("@remix-run/react");
    function useLocales() {
      let matches = (0, react_1.useMatches)();
      if (!matches || matches.length === 0)
        return;
      let [rootMatch] = matches;
      if (!rootMatch || !rootMatch.data)
        return;
      let { data } = rootMatch;
      if (typeof data != "object" || data === null || Array.isArray(data) || !("locales" in data))
        return;
      let { locales } = data;
      if (Array.isArray(locales) && locales.every((value) => typeof value == "string"))
        return locales;
    }
    exports.useLocales = useLocales;
  }
});

// node_modules/remix-utils/build/react/use-should-hydrate.js
var require_use_should_hydrate = __commonJS({
  "node_modules/remix-utils/build/react/use-should-hydrate.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });
    exports.useShouldHydrate = void 0;
    var react_1 = require("@remix-run/react");
    function useShouldHydrate() {
      return (0, react_1.useMatches)().some((match) => {
        if (!match.handle)
          return !1;
        let { handle, data } = match;
        if (typeof handle != "object" || handle === null || Array.isArray(handle))
          return !1;
        let hydrate = handle.hydrate;
        return hydrate ? typeof hydrate == "function" ? hydrate(data) : hydrate : !1;
      });
    }
    exports.useShouldHydrate = useShouldHydrate;
  }
});

// node_modules/remix-utils/build/react/use-delegated-anchors.js
var require_use_delegated_anchors = __commonJS({
  "node_modules/remix-utils/build/react/use-delegated-anchors.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });
    exports.PrefetchPageAnchors = exports.useDelegatedAnchors = exports.isLinkEvent = void 0;
    var jsx_runtime_1 = require("react/jsx-runtime"), react_1 = require("@remix-run/react"), react_2 = require("react"), context = (0, react_2.createContext)(!1);
    function isLinkEvent(event) {
      if (!(event.target instanceof HTMLElement))
        return;
      let a = event.target.closest("a");
      if (a && a.hasAttribute("href") && a.host === window.location.host)
        return a;
    }
    exports.isLinkEvent = isLinkEvent;
    function useDelegatedAnchors(nodeRef) {
      let navigate = (0, react_1.useNavigate)(), hasParentPrefetch = (0, react_2.useContext)(context);
      (0, react_2.useEffect)(() => {
        if (hasParentPrefetch)
          return;
        let node = nodeRef.current;
        return node?.addEventListener("click", handleClick), () => node?.removeEventListener("click", handleClick);
        function handleClick(event) {
          if (!node)
            return;
          let anchor = isLinkEvent(event);
          if (!anchor || event.button !== 0 || anchor.target && anchor.target !== "_self" || event.metaKey || event.altKey || event.ctrlKey || event.shiftKey || anchor.hasAttribute("download"))
            return;
          let { pathname, search, hash } = anchor;
          navigate({ pathname, search, hash }), event.preventDefault();
        }
      }, [hasParentPrefetch, navigate, nodeRef]);
    }
    exports.useDelegatedAnchors = useDelegatedAnchors;
    function PrefetchPageAnchors({ children }) {
      let nodeRef = (0, react_2.useRef)(null), [page, setPage] = (0, react_2.useState)(null), hasParentPrefetch = (0, react_2.useContext)(context);
      return useDelegatedAnchors(nodeRef), (0, react_2.useEffect)(() => {
        if (hasParentPrefetch)
          return;
        let node = nodeRef.current;
        return node?.addEventListener("mouseenter", handleMouseEnter, !0), () => node?.removeEventListener("mouseenter", handleMouseEnter);
        function handleMouseEnter(event) {
          if (!nodeRef.current)
            return;
          let anchor = isLinkEvent(event);
          if (!anchor)
            return;
          let { pathname, search } = anchor;
          setPage(pathname + search);
        }
      }, [hasParentPrefetch]), (0, jsx_runtime_1.jsxs)("div", { ref: nodeRef, style: { display: "contents" }, children: [(0, jsx_runtime_1.jsx)(context.Provider, { value: !0, children }), page && !hasParentPrefetch && (0, jsx_runtime_1.jsx)(react_1.PrefetchPageLinks, { page })] });
    }
    exports.PrefetchPageAnchors = PrefetchPageAnchors;
  }
});

// node_modules/remix-utils/build/react.js
var require_react = __commonJS({
  "node_modules/remix-utils/build/react.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      k2 === void 0 && (k2 = k);
      var desc = Object.getOwnPropertyDescriptor(m, k);
      (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) && (desc = { enumerable: !0, get: function() {
        return m[k];
      } }), Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      k2 === void 0 && (k2 = k), o[k2] = m[k];
    }), __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p) && __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: !0 });
    __exportStar(require_cache_assets(), exports);
    __exportStar(require_client_only(), exports);
    __exportStar(require_csrf(), exports);
    __exportStar(require_dynamic_links(), exports);
    __exportStar(require_external_scripts(), exports);
    __exportStar(require_matches_type(), exports);
    __exportStar(require_server_only(), exports);
    __exportStar(require_structured_data(), exports);
    __exportStar(require_use_event_source(), exports);
    __exportStar(require_use_global_pending_state(), exports);
    __exportStar(require_use_hydrated(), exports);
    __exportStar(require_use_locales(), exports);
    __exportStar(require_use_should_hydrate(), exports);
    __exportStar(require_use_delegated_anchors(), exports);
  }
});

// node_modules/remix-utils/build/server/cors.js
var require_cors = __commonJS({
  "node_modules/remix-utils/build/server/cors.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });
    exports.cors = void 0;
    var DEFAULT_OPTIONS = {
      origin: !0,
      methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
      allowedHeaders: [],
      exposedHeaders: []
    }, CORS = class {
      constructor(options) {
        this.options = Object.assign({}, DEFAULT_OPTIONS, options);
      }
      async exec(request, response) {
        let isPreflight = request.method.toLowerCase() === "options";
        return await this.configureOrigin(response.headers, request), this.configureCredentials(response.headers), this.configureExposedHeaders(response.headers), isPreflight && (this.configureMethods(response.headers), this.configureAllowedHeaders(response.headers, request), this.configureMaxAge(response.headers), response.status === 204 && response.headers.set("Content-Length", "0")), response;
      }
      async resolveOrigin(request) {
        var _a;
        let { origin } = this.options;
        return typeof origin == "function" ? await origin((_a = request.headers.get("origin")) !== null && _a !== void 0 ? _a : "") : origin;
      }
      configureMaxAge(headers) {
        var { maxAge } = this.options;
        return this.isNumber(maxAge) && headers.append("Access-Control-Max-Age", maxAge.toString()), headers;
      }
      configureExposedHeaders(headers) {
        var _a;
        let exposedHeaders = (_a = this.options.exposedHeaders) === null || _a === void 0 ? void 0 : _a.join(",");
        return !this.isString(exposedHeaders) || exposedHeaders === "" ? headers : (headers.append("Access-Control-Expose-Headers", exposedHeaders), null);
      }
      configureAllowedHeaders(headers, request) {
        var _a;
        let allowedHeaders = (_a = this.options.allowedHeaders) === null || _a === void 0 ? void 0 : _a.join(",");
        if (!allowedHeaders) {
          let requestHeaders = request.headers.get("Access-Control-Request-Headers");
          this.isString(requestHeaders) && (allowedHeaders = requestHeaders), headers.append("Vary", "Access-Control-Request-Headers");
        }
        return allowedHeaders && allowedHeaders !== "" && headers.append("Access-Control-Allow-Headers", allowedHeaders), headers;
      }
      configureCredentials(headers) {
        return this.options.credentials === !0 && headers.append("Access-Control-Allow-Credentials", "true"), headers;
      }
      configureMethods(headers) {
        var _a;
        let methods = (_a = this.options.methods) === null || _a === void 0 ? void 0 : _a.join(",");
        return this.isString(methods) && headers.append("Access-Control-Allow-Methods", methods), headers;
      }
      async configureOrigin(headers, request) {
        let origin = await this.resolveOrigin(request), requestOrigin = request.headers.get("origin");
        return !requestOrigin || origin === !1 ? headers : origin === void 0 || origin === "*" ? (headers.append("Access-Control-Allow-Origin", "*"), headers) : this.isString(origin) ? (headers.append("Access-Control-Allow-Origin", origin), headers.append("Vary", "Origin"), headers) : (this.isOriginAllowed(requestOrigin, origin) && (headers.append("Access-Control-Allow-Origin", requestOrigin), headers.append("Vary", "Origin")), headers);
      }
      isOriginAllowed(origin, allowedOrigin) {
        if (Array.isArray(allowedOrigin)) {
          for (let element of allowedOrigin)
            if (this.isOriginAllowed(origin, element))
              return !0;
          return !1;
        }
        return this.isString(allowedOrigin) ? origin === allowedOrigin : allowedOrigin instanceof RegExp ? allowedOrigin.test(origin) : !!allowedOrigin;
      }
      isString(value) {
        return typeof value == "string" || value instanceof String;
      }
      isNumber(value) {
        return typeof value == "number" || value instanceof Number;
      }
    };
    async function cors(request, response, options = DEFAULT_OPTIONS) {
      return new CORS(options).exec(request, response);
    }
    exports.cors = cors;
  }
});

// node_modules/remix-utils/build/server/responses.js
var require_responses = __commonJS({
  "node_modules/remix-utils/build/server/responses.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });
    exports.image = exports.txt = exports.xml = exports.html = exports.pdf = exports.stylesheet = exports.javascript = exports.notModified = exports.serverError = exports.unprocessableEntity = exports.notFound = exports.forbidden = exports.unauthorized = exports.badRequest = exports.redirectBack = exports.created = void 0;
    var server_runtime_1 = require("@remix-run/server-runtime");
    function created(data, init) {
      return (0, server_runtime_1.json)(data, { ...init, status: 201 });
    }
    exports.created = created;
    function redirectBack(request, { fallback, ...init }) {
      var _a;
      return (0, server_runtime_1.redirect)((_a = request.headers.get("Referer")) !== null && _a !== void 0 ? _a : fallback, init);
    }
    exports.redirectBack = redirectBack;
    function badRequest(data, init) {
      return (0, server_runtime_1.json)(data, { ...init, status: 400 });
    }
    exports.badRequest = badRequest;
    function unauthorized(data, init) {
      return (0, server_runtime_1.json)(data, { ...init, status: 401 });
    }
    exports.unauthorized = unauthorized;
    function forbidden(data, init) {
      return (0, server_runtime_1.json)(data, { ...init, status: 403 });
    }
    exports.forbidden = forbidden;
    function notFound(data, init) {
      return (0, server_runtime_1.json)(data, { ...init, status: 404 });
    }
    exports.notFound = notFound;
    function unprocessableEntity(data, init) {
      return (0, server_runtime_1.json)(data, { ...init, status: 422 });
    }
    exports.unprocessableEntity = unprocessableEntity;
    function serverError(data, init) {
      return (0, server_runtime_1.json)(data, { ...init, status: 500 });
    }
    exports.serverError = serverError;
    function notModified(init) {
      return new Response("", { ...init, status: 304 });
    }
    exports.notModified = notModified;
    function javascript(content, init = {}) {
      let responseInit = typeof init == "number" ? { status: init } : init, headers = new Headers(responseInit.headers);
      return headers.has("Content-Type") || headers.set("Content-Type", "application/javascript; charset=utf-8"), new Response(content, {
        ...responseInit,
        headers
      });
    }
    exports.javascript = javascript;
    function stylesheet(content, init = {}) {
      let responseInit = typeof init == "number" ? { status: init } : init, headers = new Headers(responseInit.headers);
      return headers.has("Content-Type") || headers.set("Content-Type", "text/css; charset=utf-8"), new Response(content, {
        ...responseInit,
        headers
      });
    }
    exports.stylesheet = stylesheet;
    function pdf(content, init = {}) {
      let responseInit = typeof init == "number" ? { status: init } : init, headers = new Headers(responseInit.headers);
      return headers.has("Content-Type") || headers.set("Content-Type", "application/pdf"), new Response(content, {
        ...responseInit,
        headers
      });
    }
    exports.pdf = pdf;
    function html(content, init = {}) {
      let responseInit = typeof init == "number" ? { status: init } : init, headers = new Headers(responseInit.headers);
      return headers.has("Content-Type") || headers.set("Content-Type", "text/html; charset=utf-8"), new Response(content, {
        ...responseInit,
        headers
      });
    }
    exports.html = html;
    function xml(content, init = {}) {
      let responseInit = typeof init == "number" ? { status: init } : init, headers = new Headers(responseInit.headers);
      return headers.has("Content-Type") || headers.set("Content-Type", "application/xml; charset=utf-8"), new Response(content, {
        ...responseInit,
        headers
      });
    }
    exports.xml = xml;
    function txt(content, init = {}) {
      let responseInit = typeof init == "number" ? { status: init } : init, headers = new Headers(responseInit.headers);
      return headers.has("Content-Type") || headers.set("Content-Type", "text/plain; charset=utf-8"), new Response(content, {
        ...responseInit,
        headers
      });
    }
    exports.txt = txt;
    function image(content, { type, ...init }) {
      let headers = new Headers(init.headers);
      return headers.has("Content-Type") || headers.set("Content-Type", type), new Response(content, {
        ...init,
        headers
      });
    }
    exports.image = image;
  }
});

// node_modules/remix-utils/build/server/csrf.js
var require_csrf2 = __commonJS({
  "node_modules/remix-utils/build/server/csrf.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });
    exports.verifyAuthenticityToken = exports.createAuthenticityToken = void 0;
    var uuid_1 = require("uuid"), responses_1 = require_responses();
    function createAuthenticityToken(session, sessionKey = "csrf") {
      let token = session.get(sessionKey);
      if (typeof token == "string")
        return token;
      let newToken = (0, uuid_1.v4)();
      return session.set(sessionKey, newToken), newToken;
    }
    exports.createAuthenticityToken = createAuthenticityToken;
    async function verifyAuthenticityToken(data, session, sessionKey = "csrf") {
      if (data instanceof Request && data.bodyUsed)
        throw new Error("The body of the request was read before calling verifyAuthenticityToken. Ensure you clone it before reading it.");
      let formData = data instanceof FormData ? data : await data.clone().formData();
      if (!session.has(sessionKey))
        throw (0, responses_1.unprocessableEntity)({
          message: "Can't find CSRF token in session."
        });
      if (!formData.get(sessionKey))
        throw (0, responses_1.unprocessableEntity)({
          message: "Can't find CSRF token in body."
        });
      if (formData.get(sessionKey) !== session.get(sessionKey))
        throw (0, responses_1.unprocessableEntity)({
          message: "Can't verify CSRF token authenticity."
        });
    }
    exports.verifyAuthenticityToken = verifyAuthenticityToken;
  }
});

// node_modules/remix-utils/build/server/event-stream.js
var require_event_stream = __commonJS({
  "node_modules/remix-utils/build/server/event-stream.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });
    exports.eventStream = void 0;
    function eventStream(signal, init, options = {}) {
      let stream = new ReadableStream({
        start(controller) {
          let encoder = new TextEncoder();
          function send({ event = "message", data }) {
            controller.enqueue(encoder.encode(`event: ${event}
`)), controller.enqueue(encoder.encode(`data: ${data}

`));
          }
          let cleanup = init(send, close), closed = !1;
          function close() {
            closed || (cleanup(), closed = !0, signal.removeEventListener("abort", close), controller.close());
          }
          if (signal.addEventListener("abort", close), signal.aborted)
            return close();
        }
      }), headers = new Headers(options.headers);
      return headers.has("Content-Type") && console.warn("Overriding Content-Type header to `text/event-stream`"), headers.has("Cache-Control") && console.warn("Overriding Cache-Control header to `no-cache`"), headers.has("Connection") && console.warn("Overriding Connection header to `keep-alive`"), headers.set("Content-Type", "text/event-stream"), headers.set("Cache-Control", "no-cache"), headers.set("Connection", "keep-alive"), new Response(stream, { headers });
    }
    exports.eventStream = eventStream;
  }
});

// node_modules/remix-utils/build/server/get-headers.js
var require_get_headers = __commonJS({
  "node_modules/remix-utils/build/server/get-headers.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });
    exports.getHeaders = void 0;
    function getHeaders(requestOrHeaders) {
      return requestOrHeaders instanceof Request ? requestOrHeaders.headers : requestOrHeaders;
    }
    exports.getHeaders = getHeaders;
  }
});

// node_modules/remix-utils/build/server/get-client-ip-address.js
var require_get_client_ip_address = __commonJS({
  "node_modules/remix-utils/build/server/get-client-ip-address.js"(exports) {
    "use strict";
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { default: mod };
    };
    Object.defineProperty(exports, "__esModule", { value: !0 });
    exports.getClientIPAddress = void 0;
    var is_ip_1 = __importDefault(require("is-ip")), get_headers_1 = require_get_headers(), headerNames = Object.freeze([
      "X-Client-IP",
      "X-Forwarded-For",
      "HTTP-X-Forwarded-For",
      "Fly-Client-IP",
      "CF-Connecting-IP",
      "Fastly-Client-Ip",
      "True-Client-Ip",
      "X-Real-IP",
      "X-Cluster-Client-IP",
      "X-Forwarded",
      "Forwarded-For",
      "Forwarded",
      "DO-Connecting-IP",
      "oxygen-buyer-ip"
    ]);
    function getClientIPAddress(requestOrHeaders) {
      let headers = (0, get_headers_1.getHeaders)(requestOrHeaders), ipAddress = headerNames.flatMap((headerName) => {
        let value = headers.get(headerName);
        return headerName === "Forwarded" ? parseForwardedHeader(value) : value?.includes(",") ? value.split(",").map((ip) => ip.trim()) : value;
      }).find((ip) => ip === null ? !1 : (0, is_ip_1.default)(ip));
      return ipAddress ?? null;
    }
    exports.getClientIPAddress = getClientIPAddress;
    function parseForwardedHeader(value) {
      if (!value)
        return null;
      for (let part of value.split(";"))
        if (part.startsWith("for="))
          return part.slice(4);
      return null;
    }
  }
});

// node_modules/remix-utils/build/server/get-client-locales.js
var require_get_client_locales = __commonJS({
  "node_modules/remix-utils/build/server/get-client-locales.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });
    exports.getClientLocales = void 0;
    var intl_parse_accept_language_1 = require("intl-parse-accept-language"), get_headers_1 = require_get_headers();
    function getClientLocales(requestOrHeaders) {
      let acceptLanguage = (0, get_headers_1.getHeaders)(requestOrHeaders).get("Accept-Language");
      if (!acceptLanguage)
        return;
      let locales = (0, intl_parse_accept_language_1.parseAcceptLanguage)(acceptLanguage, {
        validate: Intl.DateTimeFormat.supportedLocalesOf,
        ignoreWildcard: !0
      });
      if (locales.length !== 0)
        return locales;
    }
    exports.getClientLocales = getClientLocales;
  }
});

// node_modules/remix-utils/build/server/is-prefetch.js
var require_is_prefetch = __commonJS({
  "node_modules/remix-utils/build/server/is-prefetch.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });
    exports.isPrefetch = void 0;
    var get_headers_1 = require_get_headers();
    function isPrefetch(requestOrHeaders) {
      let headers = (0, get_headers_1.getHeaders)(requestOrHeaders), purpose = headers.get("Purpose") || headers.get("X-Purpose") || headers.get("Sec-Purpose") || headers.get("Sec-Fetch-Purpose") || headers.get("Moz-Purpose") || headers.get("X-Moz");
      return purpose?.toLowerCase() === "prefetch";
    }
    exports.isPrefetch = isPrefetch;
  }
});

// node_modules/remix-utils/build/server/named-action.js
var require_named_action = __commonJS({
  "node_modules/remix-utils/build/server/named-action.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });
    exports.namedAction = void 0;
    async function namedAction(input, actions3) {
      let name = await getActionName(input);
      if (name && name in actions3)
        return actions3[name]();
      if (name === null && "default" in actions3)
        return actions3.default();
      throw name === null ? new ReferenceError("Action name not found") : new ReferenceError(`Action "${name}" not found`);
    }
    exports.namedAction = namedAction;
    async function getActionName(input) {
      if (input instanceof Request) {
        let actionName = findNameInURL(new URL(input.url).searchParams);
        return actionName || findNameInFormData(await input.clone().formData());
      }
      return input instanceof URL ? findNameInURL(input.searchParams) : input instanceof URLSearchParams ? findNameInURL(input) : input instanceof FormData ? findNameInFormData(input) : null;
    }
    function findNameInURL(searchParams) {
      for (let key of searchParams.keys())
        if (key.startsWith("/"))
          return key.slice(1);
      let actionName = searchParams.get("intent");
      return typeof actionName == "string" || (actionName = searchParams.get("action"), typeof actionName == "string") || (actionName = searchParams.get("_action"), typeof actionName == "string") ? actionName : null;
    }
    function findNameInFormData(formData) {
      for (let key of formData.keys())
        if (key.startsWith("/"))
          return key.slice(1);
      let actionName = formData.get("intent");
      return typeof actionName == "string" || (actionName = formData.get("action"), typeof actionName == "string") || (actionName = formData.get("_action"), typeof actionName == "string") ? actionName : null;
    }
  }
});

// node_modules/remix-utils/build/server/preload-route-assets.js
var require_preload_route_assets = __commonJS({
  "node_modules/remix-utils/build/server/preload-route-assets.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });
    exports.preloadModuleAssets = exports.preloadLinkedAssets = exports.preloadRouteAssets = void 0;
    function preloadRouteAssets(context, headers) {
      preloadLinkedAssets(context, headers), preloadModuleAssets(context, headers);
    }
    exports.preloadRouteAssets = preloadRouteAssets;
    function preloadLinkedAssets(context, headers) {
      let links2 = context.staticHandlerContext.matches.flatMap((match) => {
        let route = context.routeModules[match.route.id];
        return route.links instanceof Function ? route.links() : [];
      }).map((link) => "as" in link && "href" in link ? { href: link.href, as: link.as } : "rel" in link && "href" in link && link.rel === "stylesheet" ? { href: link.href, as: "style" } : null).filter((link) => link !== null && "href" in link).filter((item, index, list) => index === list.findIndex((link) => link.href === item.href));
      for (let link of links2)
        headers.append("Link", `<${link.href}>; rel=preload; as=${link.as}`);
    }
    exports.preloadLinkedAssets = preloadLinkedAssets;
    function preloadModuleAssets(context, headers) {
      var _a;
      let urls = [
        context.manifest.url,
        context.manifest.entry.module,
        ...context.manifest.entry.imports
      ];
      for (let match of context.staticHandlerContext.matches) {
        let route = context.manifest.routes[match.route.id];
        urls.push(route.module, ...(_a = route.imports) !== null && _a !== void 0 ? _a : []);
      }
      for (let url of urls)
        headers.append("Link", `<${url}>; rel=preload; as=script; crossorigin=anonymous`);
    }
    exports.preloadModuleAssets = preloadModuleAssets;
  }
});

// node_modules/remix-utils/build/server/json-hash.js
var require_json_hash = __commonJS({
  "node_modules/remix-utils/build/server/json-hash.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });
    exports.jsonHash = void 0;
    var server_runtime_1 = require("@remix-run/server-runtime");
    async function jsonHash(input, init) {
      let result = {}, resolvedResults = await Promise.all(Object.entries(input).map(async ([key, value]) => (value instanceof Function && (value = value()), value instanceof Promise && (value = await value), [key, value])));
      for (let [key, value] of resolvedResults)
        result[key] = value;
      return (0, server_runtime_1.json)(result, init);
    }
    exports.jsonHash = jsonHash;
  }
});

// node_modules/remix-utils/build/server/rolling-cookie.js
var require_rolling_cookie = __commonJS({
  "node_modules/remix-utils/build/server/rolling-cookie.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });
    exports.rollingCookie = void 0;
    async function rollingCookie(cookie, request, responseHeaders) {
      let value = await cookie.parse(responseHeaders.get("Set-Cookie"));
      value === null && (value = await cookie.parse(request.headers.get("Cookie")), value && responseHeaders.append("Set-Cookie", await cookie.serialize(value)));
    }
    exports.rollingCookie = rollingCookie;
  }
});

// node_modules/remix-utils/build/server/safe-redirect.js
var require_safe_redirect = __commonJS({
  "node_modules/remix-utils/build/server/safe-redirect.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });
    exports.safeRedirect = void 0;
    var DEFAULT_REDIRECT2 = "/";
    function safeRedirect2(to, defaultRedirect = DEFAULT_REDIRECT2) {
      return !to || typeof to != "string" || (to = to.trim(), !to.startsWith("/") || to.startsWith("//")) ? defaultRedirect : to;
    }
    exports.safeRedirect = safeRedirect2;
  }
});

// node_modules/remix-utils/build/server/typed-cookie.js
var require_typed_cookie = __commonJS({
  "node_modules/remix-utils/build/server/typed-cookie.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });
    exports.isTypedCookie = exports.createTypedCookie = void 0;
    var server_runtime_1 = require("@remix-run/server-runtime");
    function createTypedCookie({ cookie, schema }) {
      if (schema._def.typeName === "ZodObject") {
        let flashSchema = {};
        for (let key in schema.shape)
          flashSchema[flash(key)] = schema.shape[key].optional();
      }
      return {
        isTyped: !0,
        get name() {
          return cookie.name;
        },
        get isSigned() {
          return cookie.isSigned;
        },
        get expires() {
          return cookie.expires;
        },
        async parse(cookieHeader, options) {
          if (!cookieHeader)
            return null;
          let value = await cookie.parse(cookieHeader, options);
          return await parseSchemaWithFlashKeys(schema, value);
        },
        async serialize(value, options) {
          let parsedValue = await parseSchemaWithFlashKeys(schema, value);
          return cookie.serialize(parsedValue, options);
        }
      };
    }
    exports.createTypedCookie = createTypedCookie;
    function isTypedCookie(value) {
      return (0, server_runtime_1.isCookie)(value) && value.isTyped === !0;
    }
    exports.isTypedCookie = isTypedCookie;
    function flash(name) {
      return `__flash_${name}__`;
    }
    function parseSchemaWithFlashKeys(schema, value) {
      if (schema._def.typeName !== "ZodObject")
        return schema.nullable().parseAsync(value);
      let objectSchema = schema, flashSchema = {};
      for (let key in objectSchema.shape)
        flashSchema[flash(key)] = objectSchema.shape[key].optional();
      return objectSchema.extend(flashSchema).parseAsync(value);
    }
  }
});

// node_modules/remix-utils/build/server/typed-session.js
var require_typed_session = __commonJS({
  "node_modules/remix-utils/build/server/typed-session.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });
    exports.isTypedSession = exports.createTypedSessionStorage = void 0;
    var server_runtime_1 = require("@remix-run/server-runtime");
    function createTypedSessionStorage({ sessionStorage: sessionStorage2, schema }) {
      return {
        async getSession(cookieHeader, options) {
          let session = await sessionStorage2.getSession(cookieHeader, options);
          return await createTypedSession({ session, schema });
        },
        async commitSession(session, options) {
          return await schema.parseAsync(session.data), await sessionStorage2.commitSession(session, options);
        },
        async destroySession(session) {
          return await schema.parseAsync(session.data), await sessionStorage2.destroySession(session);
        }
      };
    }
    exports.createTypedSessionStorage = createTypedSessionStorage;
    async function createTypedSession({ session, schema }) {
      let flashSchema = {};
      for (let key in schema.shape)
        flashSchema[flash(key)] = schema.shape[key].optional();
      let data = await schema.extend(flashSchema).strict().parseAsync(session.data);
      return {
        get isTyped() {
          return !0;
        },
        get id() {
          return session.id;
        },
        get data() {
          return data;
        },
        has(name) {
          let key = String(safeKey(schema, name));
          return key in data || flash(key) in data;
        },
        get(name) {
          let key = String(safeKey(schema, name));
          if (key in data)
            return data[key];
          let flashKey = flash(key);
          if (flashKey in data) {
            let value = data[flashKey];
            return delete data[flashKey], value;
          }
        },
        set(name, value) {
          let key = String(safeKey(schema, name));
          data[key] = value;
        },
        flash(name, value) {
          let key = String(safeKey(schema, name)), flashKey = flash(key);
          data[flashKey] = value;
        },
        unset(name) {
          let key = String(safeKey(schema, name));
          delete data[key];
        }
      };
    }
    function isTypedSession(value) {
      return (0, server_runtime_1.isSession)(value) && value.isTyped === !0;
    }
    exports.isTypedSession = isTypedSession;
    function flash(name) {
      return `__flash_${name}__`;
    }
    function safeKey(schema, key) {
      return schema.keyof().parse(key);
    }
  }
});

// node_modules/remix-utils/build/server.js
var require_server = __commonJS({
  "node_modules/remix-utils/build/server.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      k2 === void 0 && (k2 = k);
      var desc = Object.getOwnPropertyDescriptor(m, k);
      (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) && (desc = { enumerable: !0, get: function() {
        return m[k];
      } }), Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      k2 === void 0 && (k2 = k), o[k2] = m[k];
    }), __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p) && __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: !0 });
    __exportStar(require_cors(), exports);
    __exportStar(require_csrf2(), exports);
    __exportStar(require_event_stream(), exports);
    __exportStar(require_get_client_ip_address(), exports);
    __exportStar(require_get_client_locales(), exports);
    __exportStar(require_is_prefetch(), exports);
    __exportStar(require_named_action(), exports);
    __exportStar(require_preload_route_assets(), exports);
    __exportStar(require_json_hash(), exports);
    __exportStar(require_responses(), exports);
    __exportStar(require_rolling_cookie(), exports);
    __exportStar(require_safe_redirect(), exports);
    __exportStar(require_typed_cookie(), exports);
    __exportStar(require_typed_session(), exports);
  }
});

// node_modules/remix-utils/build/index.js
var require_build = __commonJS({
  "node_modules/remix-utils/build/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      k2 === void 0 && (k2 = k);
      var desc = Object.getOwnPropertyDescriptor(m, k);
      (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) && (desc = { enumerable: !0, get: function() {
        return m[k];
      } }), Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      k2 === void 0 && (k2 = k), o[k2] = m[k];
    }), __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p) && __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: !0 });
    __exportStar(require_common(), exports);
    __exportStar(require_react(), exports);
    __exportStar(require_server(), exports);
  }
});

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  mode: () => mode,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_node_stream = require("node:stream"), import_node = require("@remix-run/node"), import_react = require("@remix-run/react"), import_isbot = __toESM(require("isbot")), import_server = require("react-dom/server"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return (0, import_isbot.default)(request.headers.get("user-agent")) ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let { abort, pipe } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.tsx",
          lineNumber: 46,
          columnNumber: 7
        },
        this
      ),
      {
        onAllReady() {
          let body = new import_node_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response((0, import_node.createReadableStreamFromReadable)(body), {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let { abort, pipe } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.tsx",
          lineNumber: 88,
          columnNumber: 7
        },
        this
      ),
      {
        onShellReady() {
          let body = new import_node_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response((0, import_node.createReadableStreamFromReadable)(body), {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          console.error(error), responseStatusCode = 500;
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  App: () => App,
  default: () => AppWithProviders,
  links: () => links,
  loader: () => loader
});
var import_node3 = require("@remix-run/node"), import_react2 = require("@remix-run/react"), import_clsx = __toESM(require("clsx")), import_remix_themes2 = require("remix-themes");

// app/session.server.ts
var import_node2 = require("@remix-run/node"), import_tiny_invariant = __toESM(require("tiny-invariant")), import_remix_themes = require("remix-themes");

// app/models/user.server.ts
var import_bcryptjs = __toESM(require("bcryptjs"));

// app/db.server.ts
var import_client = require("@prisma/client");

// app/singleton.server.ts
var singleton = (name, valueFactory) => {
  let g = global;
  return g.__singletons ??= {}, g.__singletons[name] ??= valueFactory(), g.__singletons[name];
};

// app/db.server.ts
var prisma = singleton("prisma", () => new import_client.PrismaClient());
prisma.$connect();

// app/models/user.server.ts
async function getUserById(id) {
  return prisma.user.findUnique({ where: { id } });
}
async function getUserByEmail(email) {
  return prisma.user.findUnique({ where: { email } });
}
async function createUser(email, password) {
  let hashedPassword = await import_bcryptjs.default.hash(password, 10);
  return prisma.user.create({
    data: {
      email,
      password: {
        create: {
          hash: hashedPassword
        }
      }
    }
  });
}
async function verifyLogin(email, password) {
  let userWithPassword = await prisma.user.findUnique({
    where: { email },
    include: {
      password: !0
    }
  });
  if (!userWithPassword || !userWithPassword.password || !await import_bcryptjs.default.compare(
    password,
    userWithPassword.password.hash
  ))
    return null;
  let { password: _password, ...userWithoutPassword } = userWithPassword;
  return userWithoutPassword;
}

// app/session.server.ts
var isProduction = !1;
(0, import_tiny_invariant.default)(process.env.SESSION_SECRET, "SESSION_SECRET must be set");
var sessionStorage = (0, import_node2.createCookieSessionStorage)({
  cookie: {
    name: "theme",
    path: "/",
    httpOnly: !0,
    sameSite: "lax",
    secrets: ["s3cr3t"],
    // Set domain and secure only if in production
    ...isProduction ? { domain: "your-production-domain.com", secure: !0 } : {}
  }
}), themeSessionResolver = (0, import_remix_themes.createThemeSessionResolver)(sessionStorage), USER_SESSION_KEY = "userId";
async function getSession(request) {
  let cookie = request.headers.get("Cookie");
  return sessionStorage.getSession(cookie);
}
async function getUserId(request) {
  return (await getSession(request)).get(USER_SESSION_KEY);
}
async function getUser(request) {
  let userId = await getUserId(request);
  if (userId === void 0)
    return null;
  let user = await getUserById(userId);
  if (user)
    return user;
  throw await logout(request);
}
async function requireUserId(request, redirectTo = new URL(request.url).pathname) {
  let userId = await getUserId(request);
  if (!userId) {
    let searchParams = new URLSearchParams([["redirectTo", redirectTo]]);
    throw (0, import_node2.redirect)(`/login?${searchParams}`);
  }
  return userId;
}
async function createUserSession({
  request,
  userId,
  remember,
  redirectTo
}) {
  let session = await getSession(request);
  return session.set(USER_SESSION_KEY, userId), (0, import_node2.redirect)(redirectTo, {
    headers: {
      "Set-Cookie": await sessionStorage.commitSession(session, {
        maxAge: remember ? 60 * 60 * 24 * 7 : void 0
      })
    }
  });
}
async function logout(request) {
  let session = await getSession(request);
  return (0, import_node2.redirect)("/", {
    headers: {
      "Set-Cookie": await sessionStorage.destroySession(session)
    }
  });
}

// app/styles/layout.css
var layout_default = "/build/_assets/layout-DMLGCO3B.css";

// app/styles/tailwind.css
var tailwind_default = "/build/_assets/tailwind-C6FC4X3Z.css";

// app/root.tsx
var import_jsx_dev_runtime2 = require("react/jsx-dev-runtime"), links = () => [
  { rel: "stylesheet", href: tailwind_default },
  { rel: "stylesheet", href: layout_default }
], loader = async ({ request }) => (0, import_node3.json)({
  user: await getUser(request),
  theme: await themeSessionResolver(request)
});
function AppWithProviders() {
  let data = (0, import_react2.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_remix_themes2.ThemeProvider, { specifiedTheme: data.theme, themeAction: "/action/set-theme", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(App, {}, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 40,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 39,
    columnNumber: 5
  }, this);
}
function App() {
  let data = (0, import_react2.useLoaderData)(), [theme] = (0, import_remix_themes2.useTheme)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("html", { lang: "en", className: (0, import_clsx.default)(theme), children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("meta", { charSet: "utf-8" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 51,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("meta", { name: "viewport", content: "width=device-width,initial-scale=1" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 52,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 53,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_remix_themes2.PreventFlashOnWrongTheme, { ssrTheme: Boolean(data.theme) }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 54,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 55,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 50,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("body", { className: "h-full", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Outlet, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 58,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 59,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 60,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 61,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 57,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 49,
    columnNumber: 5
  }, this);
}

// app/routes/home.distribution.tsx
var home_distribution_exports = {};
__export(home_distribution_exports, {
  default: () => Distribut
});

// app/images/displanning.png
var displanning_default = "/build/_assets/displanning-DZDNGYIW.png";

// app/components/Distribution.jsx
var import_react4 = require("@remix-run/react");

// app/components/Icon.jsx
var import_react3 = require("react"), import_clsx2 = __toESM(require("clsx"));

// app/components/icons/InstallationIcon.jsx
var import_jsx_dev_runtime3 = require("react/jsx-dev-runtime");
function InstallationIcon({ id, color }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_jsx_dev_runtime3.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("defs", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
        Gradient,
        {
          id: `${id}-gradient`,
          color,
          gradientTransform: "matrix(0 21 -21 0 12 3)"
        },
        void 0,
        !1,
        {
          fileName: "app/components/icons/InstallationIcon.jsx",
          lineNumber: 7,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
        Gradient,
        {
          id: `${id}-gradient-dark`,
          color,
          gradientTransform: "matrix(0 21 -21 0 16 7)"
        },
        void 0,
        !1,
        {
          fileName: "app/components/icons/InstallationIcon.jsx",
          lineNumber: 12,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/icons/InstallationIcon.jsx",
      lineNumber: 6,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(LightMode, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("circle", { cx: 12, cy: 12, r: 12, fill: `url(#${id}-gradient)` }, void 0, !1, {
        fileName: "app/components/icons/InstallationIcon.jsx",
        lineNumber: 19,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
        "path",
        {
          d: "m8 8 9 21 2-10 10-2L8 8Z",
          fillOpacity: 0.5,
          className: "fill-[var(--icon-background)] stroke-[color:var(--icon-foreground)]",
          strokeWidth: 2,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        },
        void 0,
        !1,
        {
          fileName: "app/components/icons/InstallationIcon.jsx",
          lineNumber: 20,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/icons/InstallationIcon.jsx",
      lineNumber: 18,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(DarkMode, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
      "path",
      {
        d: "m4 4 10.286 24 2.285-11.429L28 14.286 4 4Z",
        fill: `url(#${id}-gradient-dark)`,
        stroke: `url(#${id}-gradient-dark)`,
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round"
      },
      void 0,
      !1,
      {
        fileName: "app/components/icons/InstallationIcon.jsx",
        lineNumber: 30,
        columnNumber: 9
      },
      this
    ) }, void 0, !1, {
      fileName: "app/components/icons/InstallationIcon.jsx",
      lineNumber: 29,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/icons/InstallationIcon.jsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

// app/components/icons/LightbulbIcon.jsx
var import_jsx_dev_runtime4 = require("react/jsx-dev-runtime");
function LightbulbIcon({ id, color }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_jsx_dev_runtime4.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("defs", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
        Gradient,
        {
          id: `${id}-gradient`,
          color,
          gradientTransform: "matrix(0 21 -21 0 20 11)"
        },
        void 0,
        !1,
        {
          fileName: "app/components/icons/LightbulbIcon.jsx",
          lineNumber: 7,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
        Gradient,
        {
          id: `${id}-gradient-dark`,
          color,
          gradientTransform: "matrix(0 24.5001 -19.2498 0 16 5.5)"
        },
        void 0,
        !1,
        {
          fileName: "app/components/icons/LightbulbIcon.jsx",
          lineNumber: 12,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/icons/LightbulbIcon.jsx",
      lineNumber: 6,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(LightMode, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("circle", { cx: 20, cy: 20, r: 12, fill: `url(#${id}-gradient)` }, void 0, !1, {
        fileName: "app/components/icons/LightbulbIcon.jsx",
        lineNumber: 19,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M20 24.995c0-1.855 1.094-3.501 2.427-4.792C24.61 18.087 26 15.07 26 12.231 26 7.133 21.523 3 16 3S6 7.133 6 12.23c0 2.84 1.389 5.857 3.573 7.973C10.906 21.494 12 23.14 12 24.995V27a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-2.005Z",
          className: "fill-[var(--icon-background)]",
          fillOpacity: 0.5
        },
        void 0,
        !1,
        {
          fileName: "app/components/icons/LightbulbIcon.jsx",
          lineNumber: 20,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
        "path",
        {
          d: "M25 12.23c0 2.536-1.254 5.303-3.269 7.255l1.391 1.436c2.354-2.28 3.878-5.547 3.878-8.69h-2ZM16 4c5.047 0 9 3.759 9 8.23h2C27 6.508 21.998 2 16 2v2Zm-9 8.23C7 7.76 10.953 4 16 4V2C10.002 2 5 6.507 5 12.23h2Zm3.269 7.255C8.254 17.533 7 14.766 7 12.23H5c0 3.143 1.523 6.41 3.877 8.69l1.392-1.436ZM13 27v-2.005h-2V27h2Zm1 1a1 1 0 0 1-1-1h-2a3 3 0 0 0 3 3v-2Zm4 0h-4v2h4v-2Zm1-1a1 1 0 0 1-1 1v2a3 3 0 0 0 3-3h-2Zm0-2.005V27h2v-2.005h-2ZM8.877 20.921C10.132 22.136 11 23.538 11 24.995h2c0-2.253-1.32-4.143-2.731-5.51L8.877 20.92Zm12.854-1.436C20.32 20.852 19 22.742 19 24.995h2c0-1.457.869-2.859 2.122-4.074l-1.391-1.436Z",
          className: "fill-[var(--icon-foreground)]"
        },
        void 0,
        !1,
        {
          fileName: "app/components/icons/LightbulbIcon.jsx",
          lineNumber: 27,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
        "path",
        {
          d: "M20 26a1 1 0 1 0 0-2v2Zm-8-2a1 1 0 1 0 0 2v-2Zm2 0h-2v2h2v-2Zm1 1V13.5h-2V25h2Zm-5-11.5v1h2v-1h-2Zm3.5 4.5h5v-2h-5v2Zm8.5-3.5v-1h-2v1h2ZM20 24h-2v2h2v-2Zm-2 0h-4v2h4v-2Zm-1-10.5V25h2V13.5h-2Zm2.5-2.5a2.5 2.5 0 0 0-2.5 2.5h2a.5.5 0 0 1 .5-.5v-2Zm2.5 2.5a2.5 2.5 0 0 0-2.5-2.5v2a.5.5 0 0 1 .5.5h2ZM18.5 18a3.5 3.5 0 0 0 3.5-3.5h-2a1.5 1.5 0 0 1-1.5 1.5v2ZM10 14.5a3.5 3.5 0 0 0 3.5 3.5v-2a1.5 1.5 0 0 1-1.5-1.5h-2Zm2.5-3.5a2.5 2.5 0 0 0-2.5 2.5h2a.5.5 0 0 1 .5-.5v-2Zm2.5 2.5a2.5 2.5 0 0 0-2.5-2.5v2a.5.5 0 0 1 .5.5h2Z",
          className: "fill-[var(--icon-foreground)]"
        },
        void 0,
        !1,
        {
          fileName: "app/components/icons/LightbulbIcon.jsx",
          lineNumber: 31,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/icons/LightbulbIcon.jsx",
      lineNumber: 18,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(DarkMode, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M16 2C10.002 2 5 6.507 5 12.23c0 3.144 1.523 6.411 3.877 8.691.75.727 1.363 1.52 1.734 2.353.185.415.574.726 1.028.726H12a1 1 0 0 0 1-1v-4.5a.5.5 0 0 0-.5-.5A3.5 3.5 0 0 1 9 14.5V14a3 3 0 1 1 6 0v9a1 1 0 1 0 2 0v-9a3 3 0 1 1 6 0v.5a3.5 3.5 0 0 1-3.5 3.5.5.5 0 0 0-.5.5V23a1 1 0 0 0 1 1h.36c.455 0 .844-.311 1.03-.726.37-.833.982-1.626 1.732-2.353 2.354-2.28 3.878-5.547 3.878-8.69C27 6.507 21.998 2 16 2Zm5 25a1 1 0 0 0-1-1h-8a1 1 0 0 0-1 1 3 3 0 0 0 3 3h4a3 3 0 0 0 3-3Zm-8-13v1.5a.5.5 0 0 1-.5.5 1.5 1.5 0 0 1-1.5-1.5V14a1 1 0 1 1 2 0Zm6.5 2a.5.5 0 0 1-.5-.5V14a1 1 0 1 1 2 0v.5a1.5 1.5 0 0 1-1.5 1.5Z",
        fill: `url(#${id}-gradient-dark)`
      },
      void 0,
      !1,
      {
        fileName: "app/components/icons/LightbulbIcon.jsx",
        lineNumber: 37,
        columnNumber: 9
      },
      this
    ) }, void 0, !1, {
      fileName: "app/components/icons/LightbulbIcon.jsx",
      lineNumber: 36,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/icons/LightbulbIcon.jsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

// app/components/icons/PluginsIcon.jsx
var import_jsx_dev_runtime5 = require("react/jsx-dev-runtime");
function PluginsIcon({ id, color }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_jsx_dev_runtime5.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("defs", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
        Gradient,
        {
          id: `${id}-gradient`,
          color,
          gradientTransform: "matrix(0 21 -21 0 20 11)"
        },
        void 0,
        !1,
        {
          fileName: "app/components/icons/PluginsIcon.jsx",
          lineNumber: 7,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
        Gradient,
        {
          id: `${id}-gradient-dark-1`,
          color,
          gradientTransform: "matrix(0 22.75 -22.75 0 16 6.25)"
        },
        void 0,
        !1,
        {
          fileName: "app/components/icons/PluginsIcon.jsx",
          lineNumber: 12,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
        Gradient,
        {
          id: `${id}-gradient-dark-2`,
          color,
          gradientTransform: "matrix(0 14 -14 0 16 10)"
        },
        void 0,
        !1,
        {
          fileName: "app/components/icons/PluginsIcon.jsx",
          lineNumber: 17,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/icons/PluginsIcon.jsx",
      lineNumber: 6,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(LightMode, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("circle", { cx: 20, cy: 20, r: 12, fill: `url(#${id}-gradient)` }, void 0, !1, {
        fileName: "app/components/icons/PluginsIcon.jsx",
        lineNumber: 24,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
        "g",
        {
          fillOpacity: 0.5,
          className: "fill-[var(--icon-background)] stroke-[color:var(--icon-foreground)]",
          strokeWidth: 2,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("path", { d: "M3 9v14l12 6V15L3 9Z" }, void 0, !1, {
              fileName: "app/components/icons/PluginsIcon.jsx",
              lineNumber: 32,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("path", { d: "M27 9v14l-12 6V15l12-6Z" }, void 0, !1, {
              fileName: "app/components/icons/PluginsIcon.jsx",
              lineNumber: 33,
              columnNumber: 11
            }, this)
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/components/icons/PluginsIcon.jsx",
          lineNumber: 25,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
        "path",
        {
          d: "M11 4h8v2l6 3-10 6L5 9l6-3V4Z",
          fillOpacity: 0.5,
          className: "fill-[var(--icon-background)]"
        },
        void 0,
        !1,
        {
          fileName: "app/components/icons/PluginsIcon.jsx",
          lineNumber: 35,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
        "g",
        {
          className: "stroke-[color:var(--icon-foreground)]",
          strokeWidth: 2,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("path", { d: "M20 5.5 27 9l-12 6L3 9l7-3.5" }, void 0, !1, {
              fileName: "app/components/icons/PluginsIcon.jsx",
              lineNumber: 46,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("path", { d: "M20 5c0 1.105-2.239 2-5 2s-5-.895-5-2m10 0c0-1.105-2.239-2-5-2s-5 .895-5 2m10 0v3c0 1.105-2.239 2-5 2s-5-.895-5-2V5" }, void 0, !1, {
              fileName: "app/components/icons/PluginsIcon.jsx",
              lineNumber: 47,
              columnNumber: 11
            }, this)
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/components/icons/PluginsIcon.jsx",
          lineNumber: 40,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/icons/PluginsIcon.jsx",
      lineNumber: 23,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(DarkMode, { strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
        "path",
        {
          d: "M17.676 3.38a3.887 3.887 0 0 0-3.352 0l-9 4.288C3.907 8.342 3 9.806 3 11.416v9.168c0 1.61.907 3.073 2.324 3.748l9 4.288a3.887 3.887 0 0 0 3.352 0l9-4.288C28.093 23.657 29 22.194 29 20.584v-9.168c0-1.61-.907-3.074-2.324-3.748l-9-4.288Z",
          stroke: `url(#${id}-gradient-dark-1)`
        },
        void 0,
        !1,
        {
          fileName: "app/components/icons/PluginsIcon.jsx",
          lineNumber: 51,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
        "path",
        {
          d: "M16.406 8.087a.989.989 0 0 0-.812 0l-7 3.598A1.012 1.012 0 0 0 8 12.61v6.78c0 .4.233.762.594.925l7 3.598a.989.989 0 0 0 .812 0l7-3.598c.361-.163.594-.525.594-.925v-6.78c0-.4-.233-.762-.594-.925l-7-3.598Z",
          fill: `url(#${id}-gradient-dark-2)`,
          stroke: `url(#${id}-gradient-dark-2)`
        },
        void 0,
        !1,
        {
          fileName: "app/components/icons/PluginsIcon.jsx",
          lineNumber: 55,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/icons/PluginsIcon.jsx",
      lineNumber: 50,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/icons/PluginsIcon.jsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

// app/components/icons/PresetsIcon.jsx
var import_jsx_dev_runtime6 = require("react/jsx-dev-runtime");
function PresetsIcon({ id, color }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_jsx_dev_runtime6.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("defs", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
        Gradient,
        {
          id: `${id}-gradient`,
          color,
          gradientTransform: "matrix(0 21 -21 0 20 3)"
        },
        void 0,
        !1,
        {
          fileName: "app/components/icons/PresetsIcon.jsx",
          lineNumber: 7,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
        Gradient,
        {
          id: `${id}-gradient-dark`,
          color,
          gradientTransform: "matrix(0 22.75 -22.75 0 16 6.25)"
        },
        void 0,
        !1,
        {
          fileName: "app/components/icons/PresetsIcon.jsx",
          lineNumber: 12,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/icons/PresetsIcon.jsx",
      lineNumber: 6,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(LightMode, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("circle", { cx: 20, cy: 12, r: 12, fill: `url(#${id}-gradient)` }, void 0, !1, {
        fileName: "app/components/icons/PresetsIcon.jsx",
        lineNumber: 19,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
        "g",
        {
          className: "fill-[var(--icon-background)] stroke-[color:var(--icon-foreground)]",
          fillOpacity: 0.5,
          strokeWidth: 2,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("path", { d: "M3 5v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2Z" }, void 0, !1, {
              fileName: "app/components/icons/PresetsIcon.jsx",
              lineNumber: 27,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("path", { d: "M18 17v10a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2V17a2 2 0 0 0-2-2h-7a2 2 0 0 0-2 2Z" }, void 0, !1, {
              fileName: "app/components/icons/PresetsIcon.jsx",
              lineNumber: 28,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("path", { d: "M18 5v4a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-7a2 2 0 0 0-2 2Z" }, void 0, !1, {
              fileName: "app/components/icons/PresetsIcon.jsx",
              lineNumber: 29,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("path", { d: "M3 25v2a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2Z" }, void 0, !1, {
              fileName: "app/components/icons/PresetsIcon.jsx",
              lineNumber: 30,
              columnNumber: 11
            }, this)
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/components/icons/PresetsIcon.jsx",
          lineNumber: 20,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/icons/PresetsIcon.jsx",
      lineNumber: 18,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(DarkMode, { fill: `url(#${id}-gradient-dark)`, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M3 17V4a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1Zm16 10v-9a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-6a2 2 0 0 1-2-2Zm0-23v5a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-8a1 1 0 0 0-1 1ZM3 28v-3a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1Z"
        },
        void 0,
        !1,
        {
          fileName: "app/components/icons/PresetsIcon.jsx",
          lineNumber: 34,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("path", { d: "M2 4v13h2V4H2Zm2-2a2 2 0 0 0-2 2h2V2Zm8 0H4v2h8V2Zm2 2a2 2 0 0 0-2-2v2h2Zm0 13V4h-2v13h2Zm-2 2a2 2 0 0 0 2-2h-2v2Zm-8 0h8v-2H4v2Zm-2-2a2 2 0 0 0 2 2v-2H2Zm16 1v9h2v-9h-2Zm3-3a3 3 0 0 0-3 3h2a1 1 0 0 1 1-1v-2Zm6 0h-6v2h6v-2Zm3 3a3 3 0 0 0-3-3v2a1 1 0 0 1 1 1h2Zm0 9v-9h-2v9h2Zm-3 3a3 3 0 0 0 3-3h-2a1 1 0 0 1-1 1v2Zm-6 0h6v-2h-6v2Zm-3-3a3 3 0 0 0 3 3v-2a1 1 0 0 1-1-1h-2Zm2-18V4h-2v5h2Zm0 0h-2a2 2 0 0 0 2 2V9Zm8 0h-8v2h8V9Zm0 0v2a2 2 0 0 0 2-2h-2Zm0-5v5h2V4h-2Zm0 0h2a2 2 0 0 0-2-2v2Zm-8 0h8V2h-8v2Zm0 0V2a2 2 0 0 0-2 2h2ZM2 25v3h2v-3H2Zm2-2a2 2 0 0 0-2 2h2v-2Zm9 0H4v2h9v-2Zm2 2a2 2 0 0 0-2-2v2h2Zm0 3v-3h-2v3h2Zm-2 2a2 2 0 0 0 2-2h-2v2Zm-9 0h9v-2H4v2Zm-2-2a2 2 0 0 0 2 2v-2H2Z" }, void 0, !1, {
        fileName: "app/components/icons/PresetsIcon.jsx",
        lineNumber: 39,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/icons/PresetsIcon.jsx",
      lineNumber: 33,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/icons/PresetsIcon.jsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

// app/components/icons/ThemingIcon.jsx
var import_jsx_dev_runtime7 = require("react/jsx-dev-runtime");
function ThemingIcon({ id, color }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_jsx_dev_runtime7.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("defs", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
        Gradient,
        {
          id: `${id}-gradient`,
          color,
          gradientTransform: "matrix(0 21 -21 0 12 11)"
        },
        void 0,
        !1,
        {
          fileName: "app/components/icons/ThemingIcon.jsx",
          lineNumber: 7,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
        Gradient,
        {
          id: `${id}-gradient-dark`,
          color,
          gradientTransform: "matrix(0 24.5 -24.5 0 16 5.5)"
        },
        void 0,
        !1,
        {
          fileName: "app/components/icons/ThemingIcon.jsx",
          lineNumber: 12,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/icons/ThemingIcon.jsx",
      lineNumber: 6,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(LightMode, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("circle", { cx: 12, cy: 20, r: 12, fill: `url(#${id}-gradient)` }, void 0, !1, {
        fileName: "app/components/icons/ThemingIcon.jsx",
        lineNumber: 19,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
        "path",
        {
          d: "M27 12.13 19.87 5 13 11.87v14.26l14-14Z",
          className: "fill-[var(--icon-background)] stroke-[color:var(--icon-foreground)]",
          fillOpacity: 0.5,
          strokeWidth: 2,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        },
        void 0,
        !1,
        {
          fileName: "app/components/icons/ThemingIcon.jsx",
          lineNumber: 20,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
        "path",
        {
          d: "M3 3h10v22a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V3Z",
          className: "fill-[var(--icon-background)]",
          fillOpacity: 0.5
        },
        void 0,
        !1,
        {
          fileName: "app/components/icons/ThemingIcon.jsx",
          lineNumber: 28,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
        "path",
        {
          d: "M3 9v16a4 4 0 0 0 4 4h2a4 4 0 0 0 4-4V9M3 9V3h10v6M3 9h10M3 15h10M3 21h10",
          className: "stroke-[color:var(--icon-foreground)]",
          strokeWidth: 2,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        },
        void 0,
        !1,
        {
          fileName: "app/components/icons/ThemingIcon.jsx",
          lineNumber: 33,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
        "path",
        {
          d: "M29 29V19h-8.5L13 26c0 1.5-2.5 3-5 3h21Z",
          fillOpacity: 0.5,
          className: "fill-[var(--icon-background)] stroke-[color:var(--icon-foreground)]",
          strokeWidth: 2,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        },
        void 0,
        !1,
        {
          fileName: "app/components/icons/ThemingIcon.jsx",
          lineNumber: 40,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/icons/ThemingIcon.jsx",
      lineNumber: 18,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(DarkMode, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M3 2a1 1 0 0 0-1 1v21a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H3Zm16.752 3.293a1 1 0 0 0-1.593.244l-1.045 2A1 1 0 0 0 17 8v13a1 1 0 0 0 1.71.705l7.999-8.045a1 1 0 0 0-.002-1.412l-6.955-6.955ZM26 18a1 1 0 0 0-.707.293l-10 10A1 1 0 0 0 16 30h13a1 1 0 0 0 1-1V19a1 1 0 0 0-1-1h-3ZM5 18a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2H5Zm-1-5a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1Zm1-7a1 1 0 0 0 0 2h6a1 1 0 1 0 0-2H5Z",
        fill: `url(#${id}-gradient-dark)`
      },
      void 0,
      !1,
      {
        fileName: "app/components/icons/ThemingIcon.jsx",
        lineNumber: 50,
        columnNumber: 9
      },
      this
    ) }, void 0, !1, {
      fileName: "app/components/icons/ThemingIcon.jsx",
      lineNumber: 49,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/icons/ThemingIcon.jsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

// app/components/icons/WarningIcon.jsx
var import_jsx_dev_runtime8 = require("react/jsx-dev-runtime");
function WarningIcon({ id, color }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_jsx_dev_runtime8.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("defs", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
        Gradient,
        {
          id: `${id}-gradient`,
          color,
          gradientTransform: "rotate(65.924 1.519 20.92) scale(25.7391)"
        },
        void 0,
        !1,
        {
          fileName: "app/components/icons/WarningIcon.jsx",
          lineNumber: 7,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
        Gradient,
        {
          id: `${id}-gradient-dark`,
          color,
          gradientTransform: "matrix(0 24.5 -24.5 0 16 5.5)"
        },
        void 0,
        !1,
        {
          fileName: "app/components/icons/WarningIcon.jsx",
          lineNumber: 12,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/icons/WarningIcon.jsx",
      lineNumber: 6,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(LightMode, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("circle", { cx: 20, cy: 20, r: 12, fill: `url(#${id}-gradient)` }, void 0, !1, {
        fileName: "app/components/icons/WarningIcon.jsx",
        lineNumber: 19,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
        "path",
        {
          d: "M3 16c0 7.18 5.82 13 13 13s13-5.82 13-13S23.18 3 16 3 3 8.82 3 16Z",
          fillOpacity: 0.5,
          className: "fill-[var(--icon-background)] stroke-[color:var(--icon-foreground)]",
          strokeWidth: 2,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        },
        void 0,
        !1,
        {
          fileName: "app/components/icons/WarningIcon.jsx",
          lineNumber: 20,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
        "path",
        {
          d: "m15.408 16.509-1.04-5.543a1.66 1.66 0 1 1 3.263 0l-1.039 5.543a.602.602 0 0 1-1.184 0Z",
          className: "fill-[var(--icon-foreground)] stroke-[color:var(--icon-foreground)]",
          strokeWidth: 2,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        },
        void 0,
        !1,
        {
          fileName: "app/components/icons/WarningIcon.jsx",
          lineNumber: 28,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
        "path",
        {
          d: "M16 23a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z",
          fillOpacity: 0.5,
          stroke: "currentColor",
          className: "fill-[var(--icon-background)] stroke-[color:var(--icon-foreground)]",
          strokeWidth: 2,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        },
        void 0,
        !1,
        {
          fileName: "app/components/icons/WarningIcon.jsx",
          lineNumber: 35,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/icons/WarningIcon.jsx",
      lineNumber: 18,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(DarkMode, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M2 16C2 8.268 8.268 2 16 2s14 6.268 14 14-6.268 14-14 14S2 23.732 2 16Zm11.386-4.85a2.66 2.66 0 1 1 5.228 0l-1.039 5.543a1.602 1.602 0 0 1-3.15 0l-1.04-5.543ZM16 20a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z",
        fill: `url(#${id}-gradient-dark)`
      },
      void 0,
      !1,
      {
        fileName: "app/components/icons/WarningIcon.jsx",
        lineNumber: 46,
        columnNumber: 9
      },
      this
    ) }, void 0, !1, {
      fileName: "app/components/icons/WarningIcon.jsx",
      lineNumber: 45,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/icons/WarningIcon.jsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

// app/components/icons/MagnifyingGlass.jsx
var import_jsx_dev_runtime9 = require("react/jsx-dev-runtime");
function MagniIcon({ id, color }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_jsx_dev_runtime9.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("defs", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
        Gradient,
        {
          id: `${id}-gradient`,
          color,
          gradientTransform: "matrix(0 21 -21 0 12 3)"
        },
        void 0,
        !1,
        {
          fileName: "app/components/icons/MagnifyingGlass.jsx",
          lineNumber: 6,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
        Gradient,
        {
          id: `${id}-gradient-dark`,
          color,
          gradientTransform: "matrix(0 21 -21 0 16 7)"
        },
        void 0,
        !1,
        {
          fileName: "app/components/icons/MagnifyingGlass.jsx",
          lineNumber: 11,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/icons/MagnifyingGlass.jsx",
      lineNumber: 5,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(LightMode, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("circle", { cx: 12, cy: 12, r: 15, fill: `url(#${id}-gradient)` }, void 0, !1, {
        fileName: "app/components/icons/MagnifyingGlass.jsx",
        lineNumber: 18,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
        "path",
        {
          d: "m15.75 15.75-2.489-2.489m0 0a3.375 3.375 0 1 0-4.773-4.773 3.375 3.375 0 0 0 4.774 4.774ZM21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z",
          fillOpacity: 0.5,
          className: "fill-[var(--icon-background)] stroke-[color:var(--icon-foreground)]",
          strokeWidth: 2,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        },
        void 0,
        !1,
        {
          fileName: "app/components/icons/MagnifyingGlass.jsx",
          lineNumber: 19,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/icons/MagnifyingGlass.jsx",
      lineNumber: 17,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(DarkMode, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
      "path",
      {
        d: "m15.75 15.75-2.489-2.489m0 0a3.375 3.375 0 1 0-4.773-4.773 3.375 3.375 0 0 0 4.774 4.774ZM21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z",
        stroke: `url(#${id}-gradient-dark)`,
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round"
      },
      void 0,
      !1,
      {
        fileName: "app/components/icons/MagnifyingGlass.jsx",
        lineNumber: 29,
        columnNumber: 9
      },
      this
    ) }, void 0, !1, {
      fileName: "app/components/icons/MagnifyingGlass.jsx",
      lineNumber: 28,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/icons/MagnifyingGlass.jsx",
    lineNumber: 4,
    columnNumber: 5
  }, this);
}

// app/components/icons/Cpuchip.jsx
var import_jsx_dev_runtime10 = require("react/jsx-dev-runtime");
function ChipIcon({ id, color }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_jsx_dev_runtime10.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("defs", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
        Gradient,
        {
          id: `${id}-gradient`,
          color,
          gradientTransform: "matrix(0 21 -21 0 12 3)"
        },
        void 0,
        !1,
        {
          fileName: "app/components/icons/Cpuchip.jsx",
          lineNumber: 6,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
        Gradient,
        {
          id: `${id}-gradient-dark`,
          color,
          gradientTransform: "matrix(0 21 -21 0 16 7)"
        },
        void 0,
        !1,
        {
          fileName: "app/components/icons/Cpuchip.jsx",
          lineNumber: 11,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/icons/Cpuchip.jsx",
      lineNumber: 5,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(LightMode, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("circle", { cx: 12, cy: 12, r: 15, fill: `url(#${id}-gradient)` }, void 0, !1, {
        fileName: "app/components/icons/Cpuchip.jsx",
        lineNumber: 18,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
        "path",
        {
          d: "M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 0 0 2.25-2.25V6.75a2.25 2.25 0 0 0-2.25-2.25H6.75A2.25 2.25 0 0 0 4.5 6.75v10.5a2.25 2.25 0 0 0 2.25 2.25Zm.75-12h9v9h-9v-9Z",
          fillOpacity: 0.5,
          className: "fill-[var(--icon-background)] stroke-[color:var(--icon-foreground)]",
          strokeWidth: 2,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        },
        void 0,
        !1,
        {
          fileName: "app/components/icons/Cpuchip.jsx",
          lineNumber: 19,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/icons/Cpuchip.jsx",
      lineNumber: 17,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(DarkMode, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
      "path",
      {
        d: "M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 0 0 2.25-2.25V6.75a2.25 2.25 0 0 0-2.25-2.25H6.75A2.25 2.25 0 0 0 4.5 6.75v10.5a2.25 2.25 0 0 0 2.25 2.25Zm.75-12h9v9h-9v-9Z",
        stroke: `url(#${id}-gradient-dark)`,
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round"
      },
      void 0,
      !1,
      {
        fileName: "app/components/icons/Cpuchip.jsx",
        lineNumber: 29,
        columnNumber: 9
      },
      this
    ) }, void 0, !1, {
      fileName: "app/components/icons/Cpuchip.jsx",
      lineNumber: 28,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/icons/Cpuchip.jsx",
    lineNumber: 4,
    columnNumber: 5
  }, this);
}

// app/components/icons/Presentation.jsx
var import_jsx_dev_runtime11 = require("react/jsx-dev-runtime");
function PresentationIcon({ id, color }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_jsx_dev_runtime11.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("defs", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
        Gradient,
        {
          id: `${id}-gradient`,
          color,
          gradientTransform: "matrix(0 21 -21 0 12 3)"
        },
        void 0,
        !1,
        {
          fileName: "app/components/icons/Presentation.jsx",
          lineNumber: 6,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
        Gradient,
        {
          id: `${id}-gradient-dark`,
          color,
          gradientTransform: "matrix(0 21 -21 0 16 7)"
        },
        void 0,
        !1,
        {
          fileName: "app/components/icons/Presentation.jsx",
          lineNumber: 11,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/icons/Presentation.jsx",
      lineNumber: 5,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(LightMode, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("circle", { cx: 12, cy: 12, r: 15, fill: `url(#${id}-gradient)` }, void 0, !1, {
        fileName: "app/components/icons/Presentation.jsx",
        lineNumber: 18,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
        "path",
        {
          d: "M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605",
          fillOpacity: 0.5,
          className: "fill-[var(--icon-background)] stroke-[color:var(--icon-foreground)]",
          strokeWidth: 2,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        },
        void 0,
        !1,
        {
          fileName: "app/components/icons/Presentation.jsx",
          lineNumber: 19,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/icons/Presentation.jsx",
      lineNumber: 17,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(DarkMode, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
      "path",
      {
        d: "M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605",
        stroke: `url(#${id}-gradient-dark)`,
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round"
      },
      void 0,
      !1,
      {
        fileName: "app/components/icons/Presentation.jsx",
        lineNumber: 29,
        columnNumber: 9
      },
      this
    ) }, void 0, !1, {
      fileName: "app/components/icons/Presentation.jsx",
      lineNumber: 28,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/icons/Presentation.jsx",
    lineNumber: 4,
    columnNumber: 5
  }, this);
}

// app/components/icons/Impact.jsx
var import_jsx_dev_runtime12 = require("react/jsx-dev-runtime");
function ImpactIcon({ id, color }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_jsx_dev_runtime12.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("defs", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
        Gradient,
        {
          id: `${id}-gradient`,
          color,
          gradientTransform: "matrix(0 21 -21 0 12 3)"
        },
        void 0,
        !1,
        {
          fileName: "app/components/icons/Impact.jsx",
          lineNumber: 8,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
        Gradient,
        {
          id: `${id}-gradient-dark`,
          color,
          gradientTransform: "matrix(0 21 -21 0 16 7)"
        },
        void 0,
        !1,
        {
          fileName: "app/components/icons/Impact.jsx",
          lineNumber: 13,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/icons/Impact.jsx",
      lineNumber: 7,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(LightMode, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("circle", { cx: 12, cy: 12, r: 15, fill: `url(#${id}-gradient)` }, void 0, !1, {
        fileName: "app/components/icons/Impact.jsx",
        lineNumber: 20,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
        "text",
        {
          x: "50%",
          y: "50%",
          textAnchor: "middle",
          dominantBaseline: "middle",
          className: "fill-[var(--icon-background)] stroke-[color:var(--icon-foreground)]",
          strokeWidth: 2,
          fontSize: "12",
          children: "7%"
        },
        void 0,
        !1,
        {
          fileName: "app/components/icons/Impact.jsx",
          lineNumber: 23,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/icons/Impact.jsx",
      lineNumber: 19,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(DarkMode, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("circle", { cx: 15, cy: 12, r: 15, fill: `url(#${id}-gradient)` }, void 0, !1, {
        fileName: "app/components/icons/Impact.jsx",
        lineNumber: 36,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
        "text",
        {
          x: "50%",
          y: "50%",
          stroke: `url(#${id}-gradient-dark)`,
          textAnchor: "middle",
          dominantBaseline: "middle",
          className: "fill-[var(--icon-background)] stroke-[color:var(--icon-foreground)]",
          strokeWidth: 2,
          fontSize: "12",
          children: "7%"
        },
        void 0,
        !1,
        {
          fileName: "app/components/icons/Impact.jsx",
          lineNumber: 38,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/icons/Impact.jsx",
      lineNumber: 35,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/icons/Impact.jsx",
    lineNumber: 6,
    columnNumber: 5
  }, this);
}

// app/components/Icon.jsx
var import_jsx_dev_runtime13 = require("react/jsx-dev-runtime"), icons = {
  installation: InstallationIcon,
  presets: PresetsIcon,
  plugins: PluginsIcon,
  theming: ThemingIcon,
  lightbulb: LightbulbIcon,
  warning: WarningIcon,
  probe: MagniIcon,
  plan: ChipIcon,
  perform: PresentationIcon,
  impact: ImpactIcon
}, iconStyles = {
  blue: "[--icon-foreground:theme(colors.slate.900)] [--icon-background:theme(colors.white)]",
  amber: "[--icon-foreground:theme(colors.amber.900)] [--icon-background:theme(colors.amber.100)]"
};
function Icon({ icon, color = "blue", className, ...props }) {
  let id = (0, import_react3.useId)(), IconComponent = icons[icon];
  return /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
    "svg",
    {
      "aria-hidden": "true",
      viewBox: "0 0 32 32",
      fill: "none",
      className: (0, import_clsx2.default)(className, iconStyles[color]),
      ...props,
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(IconComponent, { id, color }, void 0, !1, {
        fileName: "app/components/Icon.jsx",
        lineNumber: 47,
        columnNumber: 7
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/components/Icon.jsx",
      lineNumber: 40,
      columnNumber: 5
    },
    this
  );
}
var gradients = {
  blue: [
    { stopColor: "#0EA5E9" },
    { stopColor: "#22D3EE", offset: ".527" },
    { stopColor: "#818CF8", offset: 1 }
  ],
  amber: [
    { stopColor: "#FDE68A", offset: ".08" },
    { stopColor: "#F59E0B", offset: ".837" }
  ]
};
function Gradient({ color = "blue", ...props }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
    "radialGradient",
    {
      cx: 0,
      cy: 0,
      r: 1,
      gradientUnits: "userSpaceOnUse",
      ...props,
      children: gradients[color].map((stop, stopIndex) => /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("stop", { ...stop }, stopIndex, !1, {
        fileName: "app/components/Icon.jsx",
        lineNumber: 75,
        columnNumber: 9
      }, this))
    },
    void 0,
    !1,
    {
      fileName: "app/components/Icon.jsx",
      lineNumber: 67,
      columnNumber: 5
    },
    this
  );
}
function LightMode({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("g", { className: (0, import_clsx2.default)("dark:hidden", className), ...props }, void 0, !1, {
    fileName: "app/components/Icon.jsx",
    lineNumber: 82,
    columnNumber: 10
  }, this);
}
function DarkMode({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("g", { className: (0, import_clsx2.default)("hidden dark:inline", className), ...props }, void 0, !1, {
    fileName: "app/components/Icon.jsx",
    lineNumber: 86,
    columnNumber: 10
  }, this);
}

// app/components/Distribution.jsx
var import_jsx_dev_runtime14 = require("react/jsx-dev-runtime"), trans = [
  {
    title: "Inventory Reduction",
    icon: "impact",
    to: "/",
    description: "5%"
  },
  {
    title: "Productivity Improvement",
    icon: "impact",
    to: "/",
    description: "50%"
  },
  {
    title: "Increase in Allocation Accuracy",
    icon: "impact",
    to: "/",
    description: "25%"
  }
], kpiCards = [
  {
    title: "Increased allocation accuracy",
    icon: "perform",
    to: "/",
    description: "Leverage AI & ML to make accurate, data-driven decisions during the planning process."
  },
  {
    title: "Maximize profitability",
    icon: "perform",
    to: "/",
    description: "Translate AI-driven customer insights into strategic inventory movements and replenishments that reduce overall safety stock across your organization."
  },
  {
    title: "Improved customer satisfaction",
    icon: "perform",
    to: "/",
    description: "Make distribution decisions that align with merchant strategy and localized demand, leading to profitable inventory placement decisions and higher customer satisfaction."
  },
  {
    title: "Automated exception-based allocation procedures",
    icon: "perform",
    to: "/",
    description: "Reduce the need for manual changes, saving resources and freeing up decision-makers to focus on other essential tasks."
  },
  {
    title: "Improved productivity",
    icon: "perform",
    to: "/",
    description: "Through effective inventory plan execution, your organization will have the ability to conduct and manage complex allocation and replenishment in less time"
  },
  {
    title: "Improved customer satisfaction",
    icon: "perform",
    to: "/",
    description: "Make distribution decisions that align with merchant strategy and localized demand, leading to profitable inventory placement decisions and higher customer satisfaction."
  }
];
function Distribution() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_jsx_dev_runtime14.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("header", { className: "space-y-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("p", { className: "font-display text-sm font-medium text-sky-500", children: "Plan - Optimization Engine" }, void 0, !1, {
      fileName: "app/components/Distribution.jsx",
      lineNumber: 78,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/Distribution.jsx",
      lineNumber: 77,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "grid grid-cols-3 gap-2 lg:flex", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "relative ", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("p", { className: "inline bg-gradient-to-r from-indigo-200 via-sky-400 to-indigo-200 bg-clip-text font-display text-5xl font-bold tracking-tight dark:text-transparent text-slate-900", children: "Distribution Planning" }, void 0, !1, {
          fileName: "app/components/Distribution.jsx",
          lineNumber: 85,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("p", { className: "mt-2 text-lg  text-slate-800 dark:text-white", children: "In today increasingly omnichannel environment, profitably delivering excellent customer service is becoming more challenging and complex." }, void 0, !1, {
          fileName: "app/components/Distribution.jsx",
          lineNumber: 88,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/Distribution.jsx",
        lineNumber: 84,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/components/Distribution.jsx",
        lineNumber: 83,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "col-span-2 flex items-center rounded-xl", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "not-prose flex items-center ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
        "img",
        {
          className: "rounded-lg",
          src: displanning_default,
          alt: "",
          width: 800,
          height: 800
        },
        void 0,
        !1,
        {
          fileName: "app/components/Distribution.jsx",
          lineNumber: 97,
          columnNumber: 13
        },
        this
      ) }, void 0, !1, {
        fileName: "app/components/Distribution.jsx",
        lineNumber: 96,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/components/Distribution.jsx",
        lineNumber: 95,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Distribution.jsx",
      lineNumber: 82,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "border-b border-black my-12" }, void 0, !1, {
      fileName: "app/components/Distribution.jsx",
      lineNumber: 108,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("h1", { className: "font-bold font-display text-3xl tracking-tight text-slate-900 dark:text-white", children: "Quantitative Impact" }, void 0, !1, {
      fileName: "app/components/Distribution.jsx",
      lineNumber: 110,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "my-6 grid grid-cols-2 gap-6 lg:grid-cols-3", children: trans.map((truck) => /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
      "div",
      {
        className: "group relative rounded-xl border border-slate-200 dark:border-slate-800",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "absolute -inset-px rounded-xl border-2 border-sky-950" }, void 0, !1, {
            fileName: "app/components/Distribution.jsx",
            lineNumber: 121,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "relative overflow-hidden rounded-xl p-4", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("h2", { className: "flex justify-center font-display text-base text-slate-900 dark:text-white", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_react4.Link, { to: truck.to, children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("span", { className: "absolute -inset-px rounded-xl" }, void 0, !1, {
                fileName: "app/components/Distribution.jsx",
                lineNumber: 126,
                columnNumber: 21
              }, this),
              truck.title
            ] }, void 0, !0, {
              fileName: "app/components/Distribution.jsx",
              lineNumber: 125,
              columnNumber: 19
            }, this) }, void 0, !1, {
              fileName: "app/components/Distribution.jsx",
              lineNumber: 124,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "flex justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("p", { className: "p-1 inline-block bg-gradient-blue bg-clip-text text-6xl font-bold text-slate-700 dark:text-transparent", children: truck.description }, void 0, !1, {
              fileName: "app/components/Distribution.jsx",
              lineNumber: 131,
              columnNumber: 19
            }, this) }, void 0, !1, {
              fileName: "app/components/Distribution.jsx",
              lineNumber: 130,
              columnNumber: 17
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/Distribution.jsx",
            lineNumber: 123,
            columnNumber: 15
          }, this)
        ]
      },
      truck.title,
      !0,
      {
        fileName: "app/components/Distribution.jsx",
        lineNumber: 117,
        columnNumber: 13
      },
      this
    )) }, void 0, !1, {
      fileName: "app/components/Distribution.jsx",
      lineNumber: 115,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/Distribution.jsx",
      lineNumber: 114,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "border-b border-black my-12" }, void 0, !1, {
      fileName: "app/components/Distribution.jsx",
      lineNumber: 141,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("h1", { className: "font-bold font-display text-3xl tracking-tight text-slate-900 dark:text-white", children: "Organizational Impact" }, void 0, !1, {
      fileName: "app/components/Distribution.jsx",
      lineNumber: 143,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "my-8 grid grid-cols-2 gap-4 ", children: kpiCards.map((kpi) => /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
      "div",
      {
        className: "rounded-xl bg-sky-50 p-6 lg:grid-cols-3 dark:bg-slate-800/60 dark:ring-1 dark:ring-slate-300/10 ",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "flex overflow-hidden rounded-xl", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(Icon, { icon: kpi.icon, className: "h-10 w-10" }, void 0, !1, {
              fileName: "app/components/Distribution.jsx",
              lineNumber: 153,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("p", { className: "m-0 font-display text-xl text-sky-900 dark:text-sky-400", children: kpi.title }, void 0, !1, {
              fileName: "app/components/Distribution.jsx",
              lineNumber: 154,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/Distribution.jsx",
            lineNumber: 152,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "mt-2.5 text-sky-800 dark:text-slate-300 ", children: kpi.description }, void 0, !1, {
            fileName: "app/components/Distribution.jsx",
            lineNumber: 158,
            columnNumber: 13
          }, this)
        ]
      },
      kpi.title,
      !0,
      {
        fileName: "app/components/Distribution.jsx",
        lineNumber: 148,
        columnNumber: 11
      },
      this
    )) }, void 0, !1, {
      fileName: "app/components/Distribution.jsx",
      lineNumber: 146,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Distribution.jsx",
    lineNumber: 76,
    columnNumber: 5
  }, this);
}

// app/routes/home.distribution.tsx
var import_jsx_dev_runtime15 = require("react/jsx-dev-runtime");
function Distribut() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "min-w-0 max-w-2xl flex-auto px-4 py-16 lg:max-w-none lg:pl-8 lg:pr-0 xl:px-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(Distribution, {}, void 0, !1, {
    fileName: "app/routes/home.distribution.tsx",
    lineNumber: 6,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/home.distribution.tsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

// app/routes/action.set-theme.ts
var action_set_theme_exports = {};
__export(action_set_theme_exports, {
  action: () => action
});
var import_remix_themes3 = require("remix-themes");
var action = (0, import_remix_themes3.createThemeAction)(themeSessionResolver);

// app/routes/home.warehousing.tsx
var home_warehousing_exports = {};
__export(home_warehousing_exports, {
  default: () => Warehouse
});

// app/images/warehousing.png
var warehousing_default = "/build/_assets/warehousing-CDMVZFZU.png";

// app/components/Button.jsx
var import_react5 = require("@remix-run/react"), import_clsx3 = __toESM(require("clsx")), import_jsx_dev_runtime16 = require("react/jsx-dev-runtime"), variantStyles = {
  primary: "rounded-full bg-sky-300 py-2 px-4 text-sm font-semibold text-slate-900 hover:bg-sky-200 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300/50 active:bg-sky-500",
  secondary: "rounded-full bg-slate-800 py-2 px-4 text-sm font-medium text-white hover:bg-slate-700 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/50 active:text-slate-400"
};
function Button({ variant = "primary", className, ...props }) {
  return className = (0, import_clsx3.default)(variantStyles[variant], className), typeof props.href > "u" ? /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("button", { className, ...props }, void 0, !1, {
    fileName: "app/components/Button.jsx",
    lineNumber: 16,
    columnNumber: 5
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_react5.Link, { className, ...props }, void 0, !1, {
    fileName: "app/components/Button.jsx",
    lineNumber: 18,
    columnNumber: 5
  }, this);
}

// app/components/Warehousing.jsx
var import_react6 = require("@remix-run/react");
var import_jsx_dev_runtime17 = require("react/jsx-dev-runtime"), trans2 = [
  {
    title: "Cost Reduction",
    icon: "impact",
    to: "/",
    description: "45%"
  },
  {
    title: "Increased Productivity",
    icon: "impact",
    to: "/",
    description: "10%"
  },
  {
    title: "Improved Accuracy",
    icon: "impact",
    to: "/",
    description: "90%"
  }
], kpiCards2 = [
  {
    title: "Optimized customer service",
    icon: "perform",
    to: "/",
    description: "Support multiple pick methods for travel time reduction and pick efficiency."
  },
  {
    title: "Maximized control and visibility",
    icon: "perform",
    to: "/",
    description: "Gain end-to-end control and visibility with improved management of inventory, quality, date/lot, and assets."
  },
  {
    title: "Optimized receipt processing and storage",
    icon: "perform",
    to: "/",
    description: "Cross dock to identify opportunities and critical loads with priority inventory."
  },
  {
    title: "Improved inbound and outbound processing",
    icon: "perform",
    to: "/",
    description: "Gain shipment visibility to ensure accuracy, timeliness, efficiency and compliance."
  },
  {
    title: "Optimized operation efficiency",
    icon: "perform",
    to: "/",
    description: "Digitize distribution centers and optimize operation steps to ensure accuracy, efficiency, compliance and service."
  },
  {
    title: "Streamlined processes",
    icon: "perform",
    to: "/",
    description: "Manage all aspects of the yard, from gate check-in and check-out to yard and dock location assignments from wireless devices."
  }
];
function Warehousing() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_jsx_dev_runtime17.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("header", { className: "space-y-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("p", { className: "font-display text-sm font-medium text-sky-500", children: "Probe - Diagnostic Engine" }, void 0, !1, {
      fileName: "app/components/Warehousing.jsx",
      lineNumber: 76,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/Warehousing.jsx",
      lineNumber: 75,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "grid grid-cols-3 gap-2 lg:flex", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "relative ", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("p", { className: "inline bg-gradient-to-r from-indigo-200 via-sky-400 to-indigo-200 bg-clip-text font-display text-5xl font-bold tracking-tight text-slate-900 dark:text-transparent", children: "Warehousing" }, void 0, !1, {
          fileName: "app/components/Warehousing.jsx",
          lineNumber: 83,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("p", { className: "mt-2 text-lg  text-slate-800 dark:text-white", children: "Across industries, organizations like yours are pivoting to manage increasingly complex supply chains, while juggling delivery expectations and cost." }, void 0, !1, {
          fileName: "app/components/Warehousing.jsx",
          lineNumber: 86,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/Warehousing.jsx",
        lineNumber: 82,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/components/Warehousing.jsx",
        lineNumber: 81,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "col-span-2 flex items-center rounded-xl", children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "not-prose flex items-center ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
        "img",
        {
          className: "rounded-lg",
          src: warehousing_default,
          alt: "",
          width: 800,
          height: 800
        },
        void 0,
        !1,
        {
          fileName: "app/components/Warehousing.jsx",
          lineNumber: 95,
          columnNumber: 13
        },
        this
      ) }, void 0, !1, {
        fileName: "app/components/Warehousing.jsx",
        lineNumber: 94,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/components/Warehousing.jsx",
        lineNumber: 93,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Warehousing.jsx",
      lineNumber: 80,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("h1", { className: "font-bold font-display text-3xl tracking-tight text-slate-900 dark:text-white", children: "Quantitative Impact" }, void 0, !1, {
      fileName: "app/components/Warehousing.jsx",
      lineNumber: 106,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "my-6 grid grid-cols-2 gap-6 lg:grid-cols-3", children: trans2.map((truck) => /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
      "div",
      {
        className: "group relative rounded-xl border border-slate-200 dark:border-slate-800",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "absolute -inset-px rounded-xl border-2 border-sky-950" }, void 0, !1, {
            fileName: "app/components/Warehousing.jsx",
            lineNumber: 117,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "relative overflow-hidden rounded-xl p-4", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("h2", { className: "flex justify-center font-display text-base text-slate-900 dark:text-white", children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_react6.Link, { to: truck.to, children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("span", { className: "absolute -inset-px rounded-xl" }, void 0, !1, {
                fileName: "app/components/Warehousing.jsx",
                lineNumber: 122,
                columnNumber: 21
              }, this),
              truck.title
            ] }, void 0, !0, {
              fileName: "app/components/Warehousing.jsx",
              lineNumber: 121,
              columnNumber: 19
            }, this) }, void 0, !1, {
              fileName: "app/components/Warehousing.jsx",
              lineNumber: 120,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "flex justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("p", { className: "p-1 inline-block bg-gradient-blue bg-clip-text text-6xl font-bold text-slate-700 dark:text-transparent", children: truck.description }, void 0, !1, {
              fileName: "app/components/Warehousing.jsx",
              lineNumber: 127,
              columnNumber: 19
            }, this) }, void 0, !1, {
              fileName: "app/components/Warehousing.jsx",
              lineNumber: 126,
              columnNumber: 17
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/Warehousing.jsx",
            lineNumber: 119,
            columnNumber: 15
          }, this)
        ]
      },
      truck.title,
      !0,
      {
        fileName: "app/components/Warehousing.jsx",
        lineNumber: 113,
        columnNumber: 13
      },
      this
    )) }, void 0, !1, {
      fileName: "app/components/Warehousing.jsx",
      lineNumber: 111,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/Warehousing.jsx",
      lineNumber: 110,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "border-b border-black my-12" }, void 0, !1, {
      fileName: "app/components/Warehousing.jsx",
      lineNumber: 137,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("h1", { className: "font-bold font-display text-3xl tracking-tight text-slate-900 dark:text-white", children: "Organizational Impact" }, void 0, !1, {
      fileName: "app/components/Warehousing.jsx",
      lineNumber: 139,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "my-8 grid grid-cols-2 gap-4 ", children: kpiCards2.map((kpi) => /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
      "div",
      {
        className: "rounded-xl bg-sky-50 p-6 lg:grid-cols-3 dark:bg-slate-800/60 dark:ring-1 dark:ring-slate-300/10 ",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "flex overflow-hidden rounded-xl", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(Icon, { icon: kpi.icon, className: "h-10 w-10" }, void 0, !1, {
              fileName: "app/components/Warehousing.jsx",
              lineNumber: 149,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("p", { className: "m-0 font-display text-xl text-sky-900 dark:text-sky-400", children: kpi.title }, void 0, !1, {
              fileName: "app/components/Warehousing.jsx",
              lineNumber: 150,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/Warehousing.jsx",
            lineNumber: 148,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "mt-2.5 text-sky-800 dark:text-slate-300 ", children: kpi.description }, void 0, !1, {
            fileName: "app/components/Warehousing.jsx",
            lineNumber: 154,
            columnNumber: 13
          }, this)
        ]
      },
      kpi.title,
      !0,
      {
        fileName: "app/components/Warehousing.jsx",
        lineNumber: 144,
        columnNumber: 11
      },
      this
    )) }, void 0, !1, {
      fileName: "app/components/Warehousing.jsx",
      lineNumber: 142,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Warehousing.jsx",
    lineNumber: 74,
    columnNumber: 5
  }, this);
}

// app/routes/home.warehousing.tsx
var import_jsx_dev_runtime18 = require("react/jsx-dev-runtime");
function Warehouse() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "min-w-0 max-w-2xl flex-auto px-4 py-16 lg:max-w-none lg:pl-8 lg:pr-0 xl:px-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(Warehousing, {}, void 0, !1, {
    fileName: "app/routes/home.warehousing.tsx",
    lineNumber: 7,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/home.warehousing.tsx",
    lineNumber: 6,
    columnNumber: 5
  }, this);
}

// app/routes/home.generative.tsx
var home_generative_exports = {};
__export(home_generative_exports, {
  default: () => GenerativeAI
});

// app/components/Generative.jsx
var import_react7 = require("@remix-run/react");

// app/images/generateAi.png
var generateAi_default = "/build/_assets/generateAi-RTYFE6UT.png";

// app/components/Generative.jsx
var import_jsx_dev_runtime19 = require("react/jsx-dev-runtime"), kpiCards3 = [
  {
    title: "Revenue lift",
    icon: "perform",
    to: "/",
    description: "Increase topline sales through faster reaction to market trends and power sales growth by having the right amount of products available to satisfy consumer demand."
  },
  {
    title: "Improved margin rates",
    icon: "perform",
    to: "/",
    description: "Improve product mix to drive margins and preserve gross margin rates by reducing the need for clearance markdowns."
  },
  {
    title: "Cost Savings",
    icon: "perform",
    to: "/",
    description: "Optimize inventory positions and improve inventory visibility to reduce logistics expenses."
  },
  {
    title: "End-to-end visibility",
    icon: "perform",
    to: "/",
    description: "Visualize the entire flow of goods upstream and downstream with one version of the truth."
  },
  {
    title: "Predict overstock",
    icon: "perform",
    to: "/",
    description: "With insight into when inventory will expire, predict overstocks to reduce Inventory and increase service levels for higher operational efficiency."
  },
  {
    title: "Improved planner efficiency",
    icon: "perform",
    to: "/",
    description: "Leverage automation and predictive decision-making to decrease manual interventions and quicker task completion."
  }
];
function Generative() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_jsx_dev_runtime19.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("header", { className: "space-y-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("p", { className: "font-display text-sm font-medium text-sky-500", children: "Perform - Execution Engine" }, void 0, !1, {
      fileName: "app/components/Generative.jsx",
      lineNumber: 56,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/Generative.jsx",
      lineNumber: 55,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "grid grid-cols-3 gap-2 lg:flex", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "relative ", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("p", { className: "inline bg-gradient-to-r from-indigo-200 via-sky-400 to-indigo-200 bg-clip-text font-display text-5xl font-bold tracking-tight dark:text-transparent text-slate-900", children: "Generative AI Based Control Tower" }, void 0, !1, {
          fileName: "app/components/Generative.jsx",
          lineNumber: 63,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("p", { className: "mt-2 text-lg  text-slate-800 dark:text-white", children: "Across industries, organizations like yours are pivoting to manage increasingly complex supply chains, while juggling delivery expectations and cost." }, void 0, !1, {
          fileName: "app/components/Generative.jsx",
          lineNumber: 66,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/Generative.jsx",
        lineNumber: 62,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/components/Generative.jsx",
        lineNumber: 61,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "col-span-2 flex items-center rounded-xl", children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "not-prose flex items-center ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
        "img",
        {
          className: "rounded-lg",
          src: generateAi_default,
          alt: "",
          width: 800,
          height: 800
        },
        void 0,
        !1,
        {
          fileName: "app/components/Generative.jsx",
          lineNumber: 75,
          columnNumber: 13
        },
        this
      ) }, void 0, !1, {
        fileName: "app/components/Generative.jsx",
        lineNumber: 74,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/components/Generative.jsx",
        lineNumber: 73,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Generative.jsx",
      lineNumber: 60,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "border-b border-black my-12" }, void 0, !1, {
      fileName: "app/components/Generative.jsx",
      lineNumber: 86,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("h1", { className: "font-bold font-display text-3xl tracking-tight text-slate-900 dark:text-white", children: "Organizational Impact" }, void 0, !1, {
      fileName: "app/components/Generative.jsx",
      lineNumber: 89,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "my-8 grid grid-cols-2 gap-4 ", children: kpiCards3.map((kpi) => /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
      "div",
      {
        className: "rounded-xl bg-sky-50 p-6 lg:grid-cols-3 dark:bg-slate-800/60 dark:ring-1 dark:ring-slate-300/10 ",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "flex overflow-hidden rounded-xl", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(Icon, { icon: kpi.icon, className: "h-10 w-10" }, void 0, !1, {
              fileName: "app/components/Generative.jsx",
              lineNumber: 99,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("p", { className: "m-0 font-display text-xl text-sky-900 dark:text-sky-400", children: kpi.title }, void 0, !1, {
              fileName: "app/components/Generative.jsx",
              lineNumber: 100,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/Generative.jsx",
            lineNumber: 98,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "mt-2.5 text-sky-800 dark:text-slate-300 ", children: kpi.description }, void 0, !1, {
            fileName: "app/components/Generative.jsx",
            lineNumber: 104,
            columnNumber: 13
          }, this)
        ]
      },
      kpi.title,
      !0,
      {
        fileName: "app/components/Generative.jsx",
        lineNumber: 94,
        columnNumber: 11
      },
      this
    )) }, void 0, !1, {
      fileName: "app/components/Generative.jsx",
      lineNumber: 92,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Generative.jsx",
    lineNumber: 54,
    columnNumber: 5
  }, this);
}

// app/routes/home.generative.tsx
var import_jsx_dev_runtime20 = require("react/jsx-dev-runtime");
function GenerativeAI() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { className: "min-w-0 max-w-2xl flex-auto px-4 py-16 lg:max-w-none lg:pl-8 lg:pr-0 xl:px-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(Generative, {}, void 0, !1, {
    fileName: "app/routes/home.generative.tsx",
    lineNumber: 6,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/home.generative.tsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

// app/routes/home.production.tsx
var home_production_exports = {};
__export(home_production_exports, {
  default: () => Prod
});

// app/components/Production.jsx
var import_react8 = require("@remix-run/react");

// app/images/productionplaning.png
var productionplaning_default = "/build/_assets/productionplaning-OIPWFFT4.png";

// app/components/Production.jsx
var import_jsx_dev_runtime21 = require("react/jsx-dev-runtime"), trans3 = [
  {
    title: "Reduced Changeover Time",
    icon: "impact",
    to: "/",
    description: "32%%"
  },
  {
    title: "Reduced Production Scheduling",
    icon: "impact",
    to: "/",
    description: "-25%"
  },
  {
    title: "Reduced Inventory",
    icon: "impact",
    to: "/",
    description: "35%"
  }
], kpiCards4 = [
  {
    title: "Improved visibility",
    icon: "perform",
    to: "/",
    description: "Gain visibility into material and capacity issues sooner and easily integrate with MES systems to improve order fulfillment."
  },
  {
    title: "Optimized upstream and downstream productivity",
    icon: "perform",
    to: "/",
    description: "Coordinate schedules among various facilities, reduce inventory and work-in-process while minimizing equipment changeovers."
  },
  {
    title: "Faster response time",
    icon: "perform",
    to: "/",
    description: "Modify rules, assess different scenarios and respond in real-time to any changes on the shop floor."
  },
  {
    title: "Improved asset efficiency",
    icon: "perform",
    to: "/",
    description: "Improve asset utilization and productivity with advanced simulation capabilities to test the results of what-if scenarios before implementing a plan."
  },
  {
    title: "Faster response",
    icon: "perform",
    to: "/",
    description: "Re-sequence customer orders within minutes to continuously adapt to changes in the supply chain."
  },
  {
    title: "Reduced costs",
    icon: "perform",
    to: "/",
    description: "Reduce operating costs with the ability to factor in complex constraints and faster response times to changing demand and supply conditions."
  }
];
function Production() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_jsx_dev_runtime21.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("header", { className: "space-y-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("p", { className: "font-display text-sm font-medium text-sky-500", children: "Plan - Optimization Engine" }, void 0, !1, {
      fileName: "app/components/Production.jsx",
      lineNumber: 76,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/Production.jsx",
      lineNumber: 75,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "grid grid-cols-3 gap-2 lg:flex", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("p", { className: "inline bg-gradient-to-r from-indigo-200 via-sky-400 to-indigo-200 bg-clip-text font-display text-5xl font-bold tracking-tight dark:text-transparent text-slate-900", children: "Production Planning" }, void 0, !1, {
          fileName: "app/components/Production.jsx",
          lineNumber: 82,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("p", { className: "mt-2 text-lg  text-slate-800 dark:text-white", children: "With shrinking product lifecycles, demand fluctuations and more granular customer segmentation, organizations like yours depend on intelligent decision support for their essential production." }, void 0, !1, {
          fileName: "app/components/Production.jsx",
          lineNumber: 85,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/Production.jsx",
        lineNumber: 81,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "col-span-2 flex rounded-xl", children: /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "not-prose flex items-center ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
        "img",
        {
          className: "rounded-lg",
          src: productionplaning_default,
          alt: "",
          width: 800,
          height: 100
        },
        void 0,
        !1,
        {
          fileName: "app/components/Production.jsx",
          lineNumber: 94,
          columnNumber: 13
        },
        this
      ) }, void 0, !1, {
        fileName: "app/components/Production.jsx",
        lineNumber: 93,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/components/Production.jsx",
        lineNumber: 92,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Production.jsx",
      lineNumber: 80,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "border-b border-black my-12" }, void 0, !1, {
      fileName: "app/components/Production.jsx",
      lineNumber: 105,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("h1", { className: "font-bold font-display text-3xl tracking-tight text-slate-900 dark:text-white", children: "Quantitative Impact" }, void 0, !1, {
      fileName: "app/components/Production.jsx",
      lineNumber: 107,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "my-6 grid grid-cols-2 gap-6 lg:grid-cols-3", children: trans3.map((truck) => /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
      "div",
      {
        className: "group relative rounded-xl border border-slate-200 dark:border-slate-800",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "absolute -inset-px rounded-xl border-2 border-sky-950" }, void 0, !1, {
            fileName: "app/components/Production.jsx",
            lineNumber: 118,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "relative overflow-hidden rounded-xl p-4", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("h2", { className: "flex justify-center font-display text-base text-slate-900 dark:text-white", children: /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_react8.Link, { to: truck.to, children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("span", { className: "absolute -inset-px rounded-xl" }, void 0, !1, {
                fileName: "app/components/Production.jsx",
                lineNumber: 123,
                columnNumber: 21
              }, this),
              truck.title
            ] }, void 0, !0, {
              fileName: "app/components/Production.jsx",
              lineNumber: 122,
              columnNumber: 19
            }, this) }, void 0, !1, {
              fileName: "app/components/Production.jsx",
              lineNumber: 121,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "flex justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("p", { className: "p-1 inline-block bg-gradient-blue bg-clip-text text-6xl font-bold text-slate-700 dark:text-transparent", children: truck.description }, void 0, !1, {
              fileName: "app/components/Production.jsx",
              lineNumber: 128,
              columnNumber: 19
            }, this) }, void 0, !1, {
              fileName: "app/components/Production.jsx",
              lineNumber: 127,
              columnNumber: 17
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/Production.jsx",
            lineNumber: 120,
            columnNumber: 15
          }, this)
        ]
      },
      truck.title,
      !0,
      {
        fileName: "app/components/Production.jsx",
        lineNumber: 114,
        columnNumber: 13
      },
      this
    )) }, void 0, !1, {
      fileName: "app/components/Production.jsx",
      lineNumber: 112,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/Production.jsx",
      lineNumber: 111,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "border-b border-black my-12" }, void 0, !1, {
      fileName: "app/components/Production.jsx",
      lineNumber: 138,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("h1", { className: "font-bold font-display text-3xl tracking-tight text-slate-900 dark:text-white", children: "Organizational Impact" }, void 0, !1, {
      fileName: "app/components/Production.jsx",
      lineNumber: 140,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "my-8 grid grid-cols-2 gap-4 ", children: kpiCards4.map((kpi) => /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
      "div",
      {
        className: "rounded-xl bg-sky-50 p-6 lg:grid-cols-3 dark:bg-slate-800/60 dark:ring-1 dark:ring-slate-300/10 ",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "flex overflow-hidden rounded-xl", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(Icon, { icon: kpi.icon, className: "h-10 w-10" }, void 0, !1, {
              fileName: "app/components/Production.jsx",
              lineNumber: 150,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("p", { className: "m-0 font-display text-xl text-sky-900 dark:text-sky-400", children: kpi.title }, void 0, !1, {
              fileName: "app/components/Production.jsx",
              lineNumber: 151,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/Production.jsx",
            lineNumber: 149,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "mt-2.5 text-sky-800 dark:text-slate-300 ", children: kpi.description }, void 0, !1, {
            fileName: "app/components/Production.jsx",
            lineNumber: 155,
            columnNumber: 13
          }, this)
        ]
      },
      kpi.title,
      !0,
      {
        fileName: "app/components/Production.jsx",
        lineNumber: 145,
        columnNumber: 11
      },
      this
    )) }, void 0, !1, {
      fileName: "app/components/Production.jsx",
      lineNumber: 143,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Production.jsx",
    lineNumber: 74,
    columnNumber: 5
  }, this);
}

// app/routes/home.production.tsx
var import_jsx_dev_runtime22 = require("react/jsx-dev-runtime");
function Prod() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: "min-w-0 max-w-2xl flex-auto px-4 py-16 lg:max-w-none lg:pl-8 lg:pr-0 xl:px-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(Production, {}, void 0, !1, {
    fileName: "app/routes/home.production.tsx",
    lineNumber: 7,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/home.production.tsx",
    lineNumber: 6,
    columnNumber: 5
  }, this);
}

// app/routes/home.inventory.tsx
var home_inventory_exports = {};
__export(home_inventory_exports, {
  default: () => Inven
});

// app/images/inventory.png
var inventory_default = "/build/_assets/inventory-7NDMSZUI.png";

// app/components/Inventory.jsx
var import_react9 = require("@remix-run/react"), import_jsx_dev_runtime23 = require("react/jsx-dev-runtime"), trans4 = [
  {
    title: "Return on Investment",
    icon: "impact",
    to: "/",
    description: "250%"
  },
  {
    title: "Faster Approval Times",
    icon: "impact",
    to: "/",
    description: "50%"
  },
  {
    title: "Reduced Inventory",
    icon: "impact",
    to: "/",
    description: "45"
  }
], kpiCards5 = [
  {
    title: "Increased forecast accuracy",
    icon: "perform",
    to: "/",
    description: "Dynamic segmentation enables increased forecast accuracy, allowing you to achieve more accurate inventory positioning in the network and higher fill rates."
  },
  {
    title: "Strategic plan alignment",
    icon: "perform",
    to: "/",
    description: "Align inventory planning, inventory strategy, and inventory execution with your strategic business goals for service, production, and distribution."
  },
  {
    title: "Reduced inventory and waste",
    icon: "perform",
    to: "/",
    description: "Eliminate excess inventory and reduce obsolescence costs while maintaining a high level of customer service."
  },
  {
    title: "Improved customer service",
    icon: "perform",
    to: "/",
    description: "Service-level aware inventory positioning combined with predict and pivot capabilities ensures higher fill rates and better OTIF."
  },
  {
    title: "Improved flexibility and accuracy",
    icon: "perform",
    to: "/",
    description: "Quickly adapt inventory policies and stocking strategies to address changing market conditions."
  },
  {
    title: "Optimized inventory investment",
    icon: "perform",
    to: "/",
    description: "Reduce inventory investment through multi-echelon inventory optimization and dynamic segmentation."
  }
];
function Inventory() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_jsx_dev_runtime23.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("header", { className: "space-y-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("p", { className: "font-display text-sm font-medium text-sky-500", children: "Probe - Diagnostic Engine" }, void 0, !1, {
      fileName: "app/components/Inventory.jsx",
      lineNumber: 75,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/Inventory.jsx",
      lineNumber: 74,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("div", { className: "grid grid-cols-3 gap-2 lg:flex", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("div", { className: "relative ", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("p", { className: "inline bg-gradient-to-r from-indigo-200 via-sky-400 to-indigo-200 bg-clip-text font-display text-5xl font-bold tracking-tight dark:text-transparent text-slate-900", children: "Inventory" }, void 0, !1, {
          fileName: "app/components/Inventory.jsx",
          lineNumber: 82,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("p", { className: "mt-2 text-lg  text-slate-800 dark:text-white", children: "Across industries, organizations like yours are pivoting to manage increasingly complex supply chains, while juggling delivery expectations and cost." }, void 0, !1, {
          fileName: "app/components/Inventory.jsx",
          lineNumber: 85,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/Inventory.jsx",
        lineNumber: 81,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/components/Inventory.jsx",
        lineNumber: 80,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("div", { className: "col-span-2 flex items-center rounded-xl", children: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("div", { className: "not-prose flex items-center ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(
        "img",
        {
          className: "rounded-lg",
          src: inventory_default,
          alt: "",
          width: 800,
          height: 300
        },
        void 0,
        !1,
        {
          fileName: "app/components/Inventory.jsx",
          lineNumber: 94,
          columnNumber: 13
        },
        this
      ) }, void 0, !1, {
        fileName: "app/components/Inventory.jsx",
        lineNumber: 93,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/components/Inventory.jsx",
        lineNumber: 92,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Inventory.jsx",
      lineNumber: 79,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("div", { className: "border-b border-black my-12" }, void 0, !1, {
      fileName: "app/components/Inventory.jsx",
      lineNumber: 105,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("h1", { className: "font-bold font-display text-3xl tracking-tight text-slate-900 dark:text-white", children: "Quantitative Impact" }, void 0, !1, {
      fileName: "app/components/Inventory.jsx",
      lineNumber: 107,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("div", { className: "my-6 grid grid-cols-2 gap-6 lg:grid-cols-3", children: trans4.map((truck) => /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(
      "div",
      {
        className: "group relative rounded-xl border border-slate-200 dark:border-slate-800",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("div", { className: "absolute -inset-px rounded-xl border-2 border-sky-950" }, void 0, !1, {
            fileName: "app/components/Inventory.jsx",
            lineNumber: 118,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("div", { className: "relative overflow-hidden rounded-xl p-4", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("h2", { className: "flex justify-center font-display text-base text-slate-900 dark:text-white", children: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_react9.Link, { to: truck.to, children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("span", { className: "absolute -inset-px rounded-xl" }, void 0, !1, {
                fileName: "app/components/Inventory.jsx",
                lineNumber: 123,
                columnNumber: 21
              }, this),
              truck.title
            ] }, void 0, !0, {
              fileName: "app/components/Inventory.jsx",
              lineNumber: 122,
              columnNumber: 19
            }, this) }, void 0, !1, {
              fileName: "app/components/Inventory.jsx",
              lineNumber: 121,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("div", { className: "flex justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("p", { className: "p-1 inline-block bg-gradient-blue bg-clip-text text-6xl font-bold text-slate-700 dark:text-transparent", children: truck.description }, void 0, !1, {
              fileName: "app/components/Inventory.jsx",
              lineNumber: 128,
              columnNumber: 19
            }, this) }, void 0, !1, {
              fileName: "app/components/Inventory.jsx",
              lineNumber: 127,
              columnNumber: 17
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/Inventory.jsx",
            lineNumber: 120,
            columnNumber: 15
          }, this)
        ]
      },
      truck.title,
      !0,
      {
        fileName: "app/components/Inventory.jsx",
        lineNumber: 114,
        columnNumber: 13
      },
      this
    )) }, void 0, !1, {
      fileName: "app/components/Inventory.jsx",
      lineNumber: 112,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/Inventory.jsx",
      lineNumber: 111,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("div", { className: "border-b border-black my-12" }, void 0, !1, {
      fileName: "app/components/Inventory.jsx",
      lineNumber: 137,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("h1", { className: "font-bold font-display text-3xl tracking-tight text-slate-900 dark:text-white", children: "Organizational Impact" }, void 0, !1, {
      fileName: "app/components/Inventory.jsx",
      lineNumber: 139,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("div", { className: "my-8 grid grid-cols-2 gap-4 ", children: kpiCards5.map((kpi) => /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(
      "div",
      {
        className: "rounded-xl bg-sky-50 p-6 lg:grid-cols-3 dark:bg-slate-800/60 dark:ring-1 dark:ring-slate-300/10 ",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("div", { className: "flex overflow-hidden rounded-xl", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(Icon, { icon: kpi.icon, className: "h-10 w-10" }, void 0, !1, {
              fileName: "app/components/Inventory.jsx",
              lineNumber: 149,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("p", { className: "m-0 font-display text-xl text-sky-900 dark:text-sky-400", children: kpi.title }, void 0, !1, {
              fileName: "app/components/Inventory.jsx",
              lineNumber: 150,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/Inventory.jsx",
            lineNumber: 148,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("div", { className: "mt-2.5 text-sky-800 dark:text-slate-300 ", children: kpi.description }, void 0, !1, {
            fileName: "app/components/Inventory.jsx",
            lineNumber: 154,
            columnNumber: 13
          }, this)
        ]
      },
      kpi.title,
      !0,
      {
        fileName: "app/components/Inventory.jsx",
        lineNumber: 144,
        columnNumber: 11
      },
      this
    )) }, void 0, !1, {
      fileName: "app/components/Inventory.jsx",
      lineNumber: 142,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Inventory.jsx",
    lineNumber: 73,
    columnNumber: 5
  }, this);
}

// app/routes/home.inventory.tsx
var import_jsx_dev_runtime24 = require("react/jsx-dev-runtime");
function Inven() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { className: "min-w-0 max-w-2xl flex-auto px-4 py-16 lg:max-w-none lg:pl-8 lg:pr-0 xl:px-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(Inventory, {}, void 0, !1, {
    fileName: "app/routes/home.inventory.tsx",
    lineNumber: 6,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/home.inventory.tsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

// app/routes/home.transport.tsx
var home_transport_exports = {};
__export(home_transport_exports, {
  default: () => Tripod
});

// app/components/Transportation.jsx
var import_react10 = require("@remix-run/react");

// app/images/truck.png
var truck_default = "/build/_assets/truck-27C3SXN2.png";

// app/components/Transportation.jsx
var import_jsx_dev_runtime25 = require("react/jsx-dev-runtime"), trans5 = [
  {
    title: "Administrative Cost Reduction",
    icon: "impact",
    to: "/",
    description: "7%"
  },
  {
    title: "Annual Cost Reduction",
    icon: "impact",
    to: "/",
    description: "10%"
  },
  {
    title: "Improved Service Levels",
    icon: "impact",
    to: "/",
    description: "35%"
  }
], kpiCards6 = [
  {
    title: "Improved visibility",
    icon: "perform",
    to: "/",
    description: "Gain visibility into material and capacity issues sooner and easily integrate with MES systems to improve order fulfillment."
  },
  {
    title: "Automated and AI-assisted actions",
    icon: "perform",
    to: "/",
    description: "Improve efficiency and reduce spend with automated freight consolidation, rate negotiation and AI-assisted planning."
  },
  {
    title: "Dynamic routes and rates",
    icon: "perform",
    to: "/",
    description: "Balance supply and demand of transportation resources and automate highly manual partner processes."
  },
  {
    title: "Optimized operations ",
    icon: "perform",
    to: "/",
    description: "Change the game with advanced routing and container optimization, which considers inventory, orders and availability."
  },
  {
    title: "Optimized transportation costs",
    icon: "perform",
    to: "/",
    description: "Predictive modeling and integrated business analytics enable precise network performance evaluation and savings."
  },
  {
    title: "Deliver a connected ecosystem",
    icon: "perform",
    to: "/",
    description: "Access a digitally-enabled ecosystem that provides dynamic capacity and price through a connected network."
  }
];
function Transportation() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(import_jsx_dev_runtime25.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("header", { className: "space-y-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("p", { className: "font-display text-sm font-medium text-sky-500", children: "Probe - Diagnostic Engine" }, void 0, !1, {
      fileName: "app/components/Transportation.jsx",
      lineNumber: 70,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/Transportation.jsx",
      lineNumber: 69,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { className: "lg:flex grid grid-cols-3 gap-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { className: "relative ", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("p", { className: "inline bg-gradient-to-r from-indigo-200 via-sky-400 to-indigo-200 bg-clip-text font-display text-5xl font-bold tracking-tight dark:text-transparent text-slate-900", children: "Transportation Diagnostic" }, void 0, !1, {
          fileName: "app/components/Transportation.jsx",
          lineNumber: 77,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("p", { className: "mt-2 text-lg  dark:text-white text-slate-800", children: "Across industries, organizations like yours are pivoting to manage increasingly complex supply chains, while juggling delivery expectations and cost." }, void 0, !1, {
          fileName: "app/components/Transportation.jsx",
          lineNumber: 80,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/Transportation.jsx",
        lineNumber: 76,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/components/Transportation.jsx",
        lineNumber: 75,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { className: "col-span-2 flex items-center rounded-xl", children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { className: "not-prose flex items-center ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
        "img",
        {
          className: "rounded-lg",
          src: truck_default,
          alt: "",
          width: 800,
          height: 800
        },
        void 0,
        !1,
        {
          fileName: "app/components/Transportation.jsx",
          lineNumber: 89,
          columnNumber: 13
        },
        this
      ) }, void 0, !1, {
        fileName: "app/components/Transportation.jsx",
        lineNumber: 88,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/components/Transportation.jsx",
        lineNumber: 87,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Transportation.jsx",
      lineNumber: 74,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { className: "border-b border-black my-12" }, void 0, !1, {
      fileName: "app/components/Transportation.jsx",
      lineNumber: 99,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("h1", { className: "font-bold font-display text-3xl tracking-tight text-slate-900 dark:text-white", children: "Quantitative Impact" }, void 0, !1, {
      fileName: "app/components/Transportation.jsx",
      lineNumber: 101,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { className: "my-6 grid grid-cols-2 gap-6 lg:grid-cols-3", children: trans5.map((truck) => /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
      "div",
      {
        className: "group relative rounded-xl border border-slate-200 dark:border-slate-800",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { className: "absolute -inset-px rounded-xl border-2 border-sky-950" }, void 0, !1, {
            fileName: "app/components/Transportation.jsx",
            lineNumber: 112,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { className: "relative overflow-hidden rounded-xl p-4", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("h2", { className: "flex justify-center font-display text-base text-slate-900 dark:text-white", children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(import_react10.Link, { to: truck.to, children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("span", { className: "absolute -inset-px rounded-xl" }, void 0, !1, {
                fileName: "app/components/Transportation.jsx",
                lineNumber: 117,
                columnNumber: 21
              }, this),
              truck.title
            ] }, void 0, !0, {
              fileName: "app/components/Transportation.jsx",
              lineNumber: 116,
              columnNumber: 19
            }, this) }, void 0, !1, {
              fileName: "app/components/Transportation.jsx",
              lineNumber: 115,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { className: "flex justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("p", { className: "p-1 inline-block bg-gradient-blue bg-clip-text text-6xl font-bold text-slate-700 dark:text-transparent", children: truck.description }, void 0, !1, {
              fileName: "app/components/Transportation.jsx",
              lineNumber: 122,
              columnNumber: 19
            }, this) }, void 0, !1, {
              fileName: "app/components/Transportation.jsx",
              lineNumber: 121,
              columnNumber: 17
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/Transportation.jsx",
            lineNumber: 114,
            columnNumber: 15
          }, this)
        ]
      },
      truck.title,
      !0,
      {
        fileName: "app/components/Transportation.jsx",
        lineNumber: 108,
        columnNumber: 13
      },
      this
    )) }, void 0, !1, {
      fileName: "app/components/Transportation.jsx",
      lineNumber: 106,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/Transportation.jsx",
      lineNumber: 105,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { className: "border-b border-black my-12" }, void 0, !1, {
      fileName: "app/components/Transportation.jsx",
      lineNumber: 132,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("h1", { className: "font-bold font-display text-3xl tracking-tight text-slate-900 dark:text-white", children: "Organizational Impact" }, void 0, !1, {
      fileName: "app/components/Transportation.jsx",
      lineNumber: 134,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { className: "my-8 grid grid-cols-2 gap-4 ", children: kpiCards6.map((kpi) => /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { className: "rounded-xl bg-sky-50 p-6 lg:grid-cols-3 dark:bg-slate-800/60 dark:ring-1 dark:ring-slate-300/10 ", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { className: "flex overflow-hidden rounded-xl", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(Icon, { icon: kpi.icon, className: "h-10 w-10" }, void 0, !1, {
          fileName: "app/components/Transportation.jsx",
          lineNumber: 141,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("p", { className: "m-0 font-display text-xl text-sky-900 dark:text-sky-400", children: kpi.title }, void 0, !1, {
          fileName: "app/components/Transportation.jsx",
          lineNumber: 142,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/Transportation.jsx",
        lineNumber: 140,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { className: "mt-2.5 text-sky-800 dark:text-slate-300 ", children: kpi.description }, void 0, !1, {
        fileName: "app/components/Transportation.jsx",
        lineNumber: 146,
        columnNumber: 11
      }, this)
    ] }, kpi.title, !0, {
      fileName: "app/components/Transportation.jsx",
      lineNumber: 139,
      columnNumber: 9
    }, this)) }, void 0, !1, {
      fileName: "app/components/Transportation.jsx",
      lineNumber: 137,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Transportation.jsx",
    lineNumber: 68,
    columnNumber: 5
  }, this);
}

// app/routes/home.transport.tsx
var import_jsx_dev_runtime26 = require("react/jsx-dev-runtime");
function Tripod() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("div", { className: "min-w-0 max-w-2xl flex-auto px-4 py-16 lg:max-w-none lg:pl-8 lg:pr-0 xl:px-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(Transportation, {}, void 0, !1, {
    fileName: "app/routes/home.transport.tsx",
    lineNumber: 7,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/home.transport.tsx",
    lineNumber: 6,
    columnNumber: 5
  }, this);
}

// app/routes/ai.share_.$id.tsx
var ai_share_id_exports = {};
__export(ai_share_id_exports, {
  default: () => SharePage,
  loader: () => loader2
});
var import_node4 = require("@remix-run/node"), import_react13 = require("@remix-run/react");

// app/components/ui/button.tsx
var React = __toESM(require("react")), import_react_slot = require("@radix-ui/react-slot"), import_class_variance_authority = require("class-variance-authority");

// app/lib/utils.ts
var import_clsx4 = require("clsx"), import_nanoid = require("nanoid"), import_tailwind_merge = require("tailwind-merge");
function cn(...inputs) {
  return (0, import_tailwind_merge.twMerge)((0, import_clsx4.clsx)(inputs));
}
var nanoid = (0, import_nanoid.customAlphabet)(
  "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
  7
);
function formatDate(input) {
  let timestamp = typeof input == "string" ? parseInt(input, 10) : input;
  return new Date(timestamp).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric"
  });
}

// app/components/ui/button.tsx
var import_jsx_dev_runtime27 = require("react/jsx-dev-runtime"), buttonVariants = (0, import_class_variance_authority.cva)(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300",
  {
    variants: {
      variant: {
        default: "bg-slate-900 text-slate-50 hover:bg-slate-900/90 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-50/90",
        destructive: "bg-red-500 text-slate-50 hover:bg-red-500/90 dark:bg-red-900 dark:text-slate-50 dark:hover:bg-red-900/90",
        outline: "border border-slate-200 bg-white hover:bg-slate-100 hover:text-slate-900 dark:border-slate-800 dark:bg-slate-950 dark:hover:bg-slate-800 dark:hover:text-slate-50",
        secondary: "bg-slate-100 text-slate-900 hover:bg-slate-100/80 dark:bg-slate-800 dark:text-slate-50 dark:hover:bg-slate-800/80",
        ghost: "hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-slate-800 dark:hover:text-slate-50",
        link: "text-slate-900 underline-offset-4 hover:underline dark:text-slate-50"
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
), Button2 = React.forwardRef(
  ({ className, variant, size, asChild = !1, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(
    asChild ? import_react_slot.Slot : "button",
    {
      className: cn(buttonVariants({ variant, size, className })),
      ref,
      ...props
    },
    void 0,
    !1,
    {
      fileName: "app/components/ui/button.tsx",
      lineNumber: 46,
      columnNumber: 7
    },
    this
  )
);
Button2.displayName = "Button";

// app/components/ui/icons.tsx
var React2 = __toESM(require("react"));
var import_jsx_dev_runtime28 = require("react/jsx-dev-runtime");
function IconNextChat({
  className,
  inverted,
  ...props
}) {
  let id = React2.useId();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(
    "svg",
    {
      viewBox: "0 0 17 17",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className: cn("size-4", className),
      ...props,
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("defs", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(
            "linearGradient",
            {
              id: `gradient-${id}-1`,
              x1: "10.6889",
              y1: "10.3556",
              x2: "13.8445",
              y2: "14.2667",
              gradientUnits: "userSpaceOnUse",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("stop", { stopColor: inverted ? "white" : "black" }, void 0, !1, {
                  fileName: "app/components/ui/icons.tsx",
                  lineNumber: 34,
                  columnNumber: 11
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(
                  "stop",
                  {
                    offset: 1,
                    stopColor: inverted ? "white" : "black",
                    stopOpacity: 0
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/components/ui/icons.tsx",
                    lineNumber: 35,
                    columnNumber: 11
                  },
                  this
                )
              ]
            },
            void 0,
            !0,
            {
              fileName: "app/components/ui/icons.tsx",
              lineNumber: 26,
              columnNumber: 9
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(
            "linearGradient",
            {
              id: `gradient-${id}-2`,
              x1: "11.7555",
              y1: "4.8",
              x2: "11.7376",
              y2: "9.50002",
              gradientUnits: "userSpaceOnUse",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("stop", { stopColor: inverted ? "white" : "black" }, void 0, !1, {
                  fileName: "app/components/ui/icons.tsx",
                  lineNumber: 49,
                  columnNumber: 11
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(
                  "stop",
                  {
                    offset: 1,
                    stopColor: inverted ? "white" : "black",
                    stopOpacity: 0
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/components/ui/icons.tsx",
                    lineNumber: 50,
                    columnNumber: 11
                  },
                  this
                )
              ]
            },
            void 0,
            !0,
            {
              fileName: "app/components/ui/icons.tsx",
              lineNumber: 41,
              columnNumber: 9
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/components/ui/icons.tsx",
          lineNumber: 25,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(
          "path",
          {
            d: "M1 16L2.58314 11.2506C1.83084 9.74642 1.63835 8.02363 2.04013 6.39052C2.4419 4.75741 3.41171 3.32057 4.776 2.33712C6.1403 1.35367 7.81003 0.887808 9.4864 1.02289C11.1628 1.15798 12.7364 1.8852 13.9256 3.07442C15.1148 4.26363 15.842 5.83723 15.9771 7.5136C16.1122 9.18997 15.6463 10.8597 14.6629 12.224C13.6794 13.5883 12.2426 14.5581 10.6095 14.9599C8.97637 15.3616 7.25358 15.1692 5.74942 14.4169L1 16Z",
            fill: inverted ? "black" : "white",
            stroke: inverted ? "black" : "white",
            strokeWidth: 2,
            strokeLinecap: "round",
            strokeLinejoin: "round"
          },
          void 0,
          !1,
          {
            fileName: "app/components/ui/icons.tsx",
            lineNumber: 57,
            columnNumber: 7
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(
          "mask",
          {
            id: "mask0_91_2047",
            style: { maskType: "alpha" },
            maskUnits: "userSpaceOnUse",
            x: 1,
            y: 0,
            width: 16,
            height: 16,
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("circle", { cx: 9, cy: 8, r: 8, fill: inverted ? "black" : "white" }, void 0, !1, {
              fileName: "app/components/ui/icons.tsx",
              lineNumber: 74,
              columnNumber: 9
            }, this)
          },
          void 0,
          !1,
          {
            fileName: "app/components/ui/icons.tsx",
            lineNumber: 65,
            columnNumber: 7
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("g", { mask: "url(#mask0_91_2047)", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("circle", { cx: 9, cy: 8, r: 8, fill: inverted ? "black" : "white" }, void 0, !1, {
            fileName: "app/components/ui/icons.tsx",
            lineNumber: 77,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(
            "path",
            {
              d: "M14.2896 14.0018L7.146 4.8H5.80005V11.1973H6.87681V6.16743L13.4444 14.6529C13.7407 14.4545 14.0231 14.2369 14.2896 14.0018Z",
              fill: `url(#gradient-${id}-1)`
            },
            void 0,
            !1,
            {
              fileName: "app/components/ui/icons.tsx",
              lineNumber: 78,
              columnNumber: 9
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(
            "rect",
            {
              x: "11.2222",
              y: "4.8",
              width: "1.06667",
              height: "6.4",
              fill: `url(#gradient-${id}-2)`
            },
            void 0,
            !1,
            {
              fileName: "app/components/ui/icons.tsx",
              lineNumber: 82,
              columnNumber: 9
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/components/ui/icons.tsx",
          lineNumber: 76,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/ui/icons.tsx",
      lineNumber: 18,
      columnNumber: 5
    },
    this
  );
}
function IconSeparator({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(
    "svg",
    {
      fill: "none",
      shapeRendering: "geometricPrecision",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "1",
      viewBox: "0 0 24 24",
      "aria-hidden": "true",
      className: cn("size-4", className),
      ...props,
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("path", { d: "M16.88 3.549L7.12 20.451" }, void 0, !1, {
        fileName: "app/components/ui/icons.tsx",
        lineNumber: 177,
        columnNumber: 7
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/components/ui/icons.tsx",
      lineNumber: 165,
      columnNumber: 5
    },
    this
  );
}
function IconArrowDown({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 256 256",
      fill: "currentColor",
      className: cn("size-4", className),
      ...props,
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("path", { d: "m205.66 149.66-72 72a8 8 0 0 1-11.32 0l-72-72a8 8 0 0 1 11.32-11.32L120 196.69V40a8 8 0 0 1 16 0v156.69l58.34-58.35a8 8 0 0 1 11.32 11.32Z" }, void 0, !1, {
        fileName: "app/components/ui/icons.tsx",
        lineNumber: 196,
        columnNumber: 7
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/components/ui/icons.tsx",
      lineNumber: 189,
      columnNumber: 5
    },
    this
  );
}
function IconArrowRight({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 256 256",
      fill: "currentColor",
      className: cn("size-4", className),
      ...props,
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("path", { d: "m221.66 133.66-72 72a8 8 0 0 1-11.32-11.32L196.69 136H40a8 8 0 0 1 0-16h156.69l-58.35-58.34a8 8 0 0 1 11.32-11.32l72 72a8 8 0 0 1 0 11.32Z" }, void 0, !1, {
        fileName: "app/components/ui/icons.tsx",
        lineNumber: 215,
        columnNumber: 7
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/components/ui/icons.tsx",
      lineNumber: 208,
      columnNumber: 5
    },
    this
  );
}
function IconUser({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 256 256",
      fill: "currentColor",
      className: cn("size-4", className),
      ...props,
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("path", { d: "M230.92 212c-15.23-26.33-38.7-45.21-66.09-54.16a72 72 0 1 0-73.66 0c-27.39 8.94-50.86 27.82-66.09 54.16a8 8 0 1 0 13.85 8c18.84-32.56 52.14-52 89.07-52s70.23 19.44 89.07 52a8 8 0 1 0 13.85-8ZM72 96a56 56 0 1 1 56 56 56.06 56.06 0 0 1-56-56Z" }, void 0, !1, {
        fileName: "app/components/ui/icons.tsx",
        lineNumber: 234,
        columnNumber: 7
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/components/ui/icons.tsx",
      lineNumber: 227,
      columnNumber: 5
    },
    this
  );
}
function IconPlus({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 256 256",
      fill: "currentColor",
      className: cn("size-4", className),
      ...props,
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("path", { d: "M224 128a8 8 0 0 1-8 8h-80v80a8 8 0 0 1-16 0v-80H40a8 8 0 0 1 0-16h80V40a8 8 0 0 1 16 0v80h80a8 8 0 0 1 8 8Z" }, void 0, !1, {
        fileName: "app/components/ui/icons.tsx",
        lineNumber: 253,
        columnNumber: 7
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/components/ui/icons.tsx",
      lineNumber: 246,
      columnNumber: 5
    },
    this
  );
}
function IconArrowElbow({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 256 256",
      fill: "currentColor",
      className: cn("size-4", className),
      ...props,
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("path", { d: "M200 32v144a8 8 0 0 1-8 8H67.31l34.35 34.34a8 8 0 0 1-11.32 11.32l-48-48a8 8 0 0 1 0-11.32l48-48a8 8 0 0 1 11.32 11.32L67.31 168H184V32a8 8 0 0 1 16 0Z" }, void 0, !1, {
        fileName: "app/components/ui/icons.tsx",
        lineNumber: 272,
        columnNumber: 7
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/components/ui/icons.tsx",
      lineNumber: 265,
      columnNumber: 5
    },
    this
  );
}
function IconSpinner({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 256 256",
      fill: "currentColor",
      className: cn("size-4 animate-spin", className),
      ...props,
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("path", { d: "M232 128a104 104 0 0 1-208 0c0-41 23.81-78.36 60.66-95.27a8 8 0 0 1 6.68 14.54C60.15 61.59 40 93.27 40 128a88 88 0 0 0 176 0c0-34.73-20.15-66.41-51.34-80.73a8 8 0 0 1 6.68-14.54C208.19 49.64 232 87 232 128Z" }, void 0, !1, {
        fileName: "app/components/ui/icons.tsx",
        lineNumber: 291,
        columnNumber: 7
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/components/ui/icons.tsx",
      lineNumber: 284,
      columnNumber: 5
    },
    this
  );
}
function IconMessage({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 256 256",
      fill: "currentColor",
      className: cn("size-4", className),
      ...props,
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("path", { d: "M216 48H40a16 16 0 0 0-16 16v160a15.84 15.84 0 0 0 9.25 14.5A16.05 16.05 0 0 0 40 240a15.89 15.89 0 0 0 10.25-3.78.69.69 0 0 0 .13-.11L82.5 208H216a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16ZM40 224Zm176-32H82.5a16 16 0 0 0-10.3 3.75l-.12.11L40 224V64h176Z" }, void 0, !1, {
        fileName: "app/components/ui/icons.tsx",
        lineNumber: 310,
        columnNumber: 7
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/components/ui/icons.tsx",
      lineNumber: 303,
      columnNumber: 5
    },
    this
  );
}
function IconTrash({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 256 256",
      fill: "currentColor",
      className: cn("size-4", className),
      ...props,
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("path", { d: "M216 48h-40v-8a24 24 0 0 0-24-24h-48a24 24 0 0 0-24 24v8H40a8 8 0 0 0 0 16h8v144a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16V64h8a8 8 0 0 0 0-16ZM96 40a8 8 0 0 1 8-8h48a8 8 0 0 1 8 8v8H96Zm96 168H64V64h128Zm-80-104v64a8 8 0 0 1-16 0v-64a8 8 0 0 1 16 0Zm48 0v64a8 8 0 0 1-16 0v-64a8 8 0 0 1 16 0Z" }, void 0, !1, {
        fileName: "app/components/ui/icons.tsx",
        lineNumber: 329,
        columnNumber: 7
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/components/ui/icons.tsx",
      lineNumber: 322,
      columnNumber: 5
    },
    this
  );
}
function IconRefresh({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 256 256",
      fill: "currentColor",
      className: cn("size-4", className),
      ...props,
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("path", { d: "M197.67 186.37a8 8 0 0 1 0 11.29C196.58 198.73 170.82 224 128 224c-37.39 0-64.53-22.4-80-39.85V208a8 8 0 0 1-16 0v-48a8 8 0 0 1 8-8h48a8 8 0 0 1 0 16H55.44C67.76 183.35 93 208 128 208c36 0 58.14-21.46 58.36-21.68a8 8 0 0 1 11.31.05ZM216 40a8 8 0 0 0-8 8v23.85C192.53 54.4 165.39 32 128 32c-42.82 0-68.58 25.27-69.66 26.34a8 8 0 0 0 11.3 11.34C69.86 69.46 92 48 128 48c35 0 60.24 24.65 72.56 40H168a8 8 0 0 0 0 16h48a8 8 0 0 0 8-8V48a8 8 0 0 0-8-8Z" }, void 0, !1, {
        fileName: "app/components/ui/icons.tsx",
        lineNumber: 348,
        columnNumber: 7
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/components/ui/icons.tsx",
      lineNumber: 341,
      columnNumber: 5
    },
    this
  );
}
function IconStop({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 256 256",
      fill: "currentColor",
      className: cn("size-4", className),
      ...props,
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("path", { d: "M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24Zm0 192a88 88 0 1 1 88-88 88.1 88.1 0 0 1-88 88Zm24-120h-48a8 8 0 0 0-8 8v48a8 8 0 0 0 8 8h48a8 8 0 0 0 8-8v-48a8 8 0 0 0-8-8Zm-8 48h-32v-32h32Z" }, void 0, !1, {
        fileName: "app/components/ui/icons.tsx",
        lineNumber: 367,
        columnNumber: 7
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/components/ui/icons.tsx",
      lineNumber: 360,
      columnNumber: 5
    },
    this
  );
}
function IconMoon({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 256 256",
      fill: "currentColor",
      className: cn("size-4", className),
      ...props,
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("path", { d: "M233.54 142.23a8 8 0 0 0-8-2 88.08 88.08 0 0 1-109.8-109.8 8 8 0 0 0-10-10 104.84 104.84 0 0 0-52.91 37A104 104 0 0 0 136 224a103.09 103.09 0 0 0 62.52-20.88 104.84 104.84 0 0 0 37-52.91 8 8 0 0 0-1.98-7.98Zm-44.64 48.11A88 88 0 0 1 65.66 67.11a89 89 0 0 1 31.4-26A106 106 0 0 0 96 56a104.11 104.11 0 0 0 104 104 106 106 0 0 0 14.92-1.06 89 89 0 0 1-26.02 31.4Z" }, void 0, !1, {
        fileName: "app/components/ui/icons.tsx",
        lineNumber: 405,
        columnNumber: 7
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/components/ui/icons.tsx",
      lineNumber: 398,
      columnNumber: 5
    },
    this
  );
}
function IconSun({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 256 256",
      fill: "currentColor",
      className: cn("size-4", className),
      ...props,
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("path", { d: "M120 40V16a8 8 0 0 1 16 0v24a8 8 0 0 1-16 0Zm72 88a64 64 0 1 1-64-64 64.07 64.07 0 0 1 64 64Zm-16 0a48 48 0 1 0-48 48 48.05 48.05 0 0 0 48-48ZM58.34 69.66a8 8 0 0 0 11.32-11.32l-16-16a8 8 0 0 0-11.32 11.32Zm0 116.68-16 16a8 8 0 0 0 11.32 11.32l16-16a8 8 0 0 0-11.32-11.32ZM192 72a8 8 0 0 0 5.66-2.34l16-16a8 8 0 0 0-11.32-11.32l-16 16A8 8 0 0 0 192 72Zm5.66 114.34a8 8 0 0 0-11.32 11.32l16 16a8 8 0 0 0 11.32-11.32ZM48 128a8 8 0 0 0-8-8H16a8 8 0 0 0 0 16h24a8 8 0 0 0 8-8Zm80 80a8 8 0 0 0-8 8v24a8 8 0 0 0 16 0v-24a8 8 0 0 0-8-8Zm112-88h-24a8 8 0 0 0 0 16h24a8 8 0 0 0 0-16Z" }, void 0, !1, {
        fileName: "app/components/ui/icons.tsx",
        lineNumber: 424,
        columnNumber: 7
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/components/ui/icons.tsx",
      lineNumber: 417,
      columnNumber: 5
    },
    this
  );
}
function IconCopy({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 256 256",
      fill: "currentColor",
      className: cn("size-4", className),
      ...props,
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("path", { d: "M216 32H88a8 8 0 0 0-8 8v40H40a8 8 0 0 0-8 8v128a8 8 0 0 0 8 8h128a8 8 0 0 0 8-8v-40h40a8 8 0 0 0 8-8V40a8 8 0 0 0-8-8Zm-56 176H48V96h112Zm48-48h-32V88a8 8 0 0 0-8-8H96V48h112Z" }, void 0, !1, {
        fileName: "app/components/ui/icons.tsx",
        lineNumber: 443,
        columnNumber: 7
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/components/ui/icons.tsx",
      lineNumber: 436,
      columnNumber: 5
    },
    this
  );
}
function IconCheck({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 256 256",
      fill: "currentColor",
      className: cn("size-4", className),
      ...props,
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("path", { d: "m229.66 77.66-128 128a8 8 0 0 1-11.32 0l-56-56a8 8 0 0 1 11.32-11.32L96 188.69 218.34 66.34a8 8 0 0 1 11.32 11.32Z" }, void 0, !1, {
        fileName: "app/components/ui/icons.tsx",
        lineNumber: 462,
        columnNumber: 7
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/components/ui/icons.tsx",
      lineNumber: 455,
      columnNumber: 5
    },
    this
  );
}
function IconDownload({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 256 256",
      fill: "currentColor",
      className: cn("size-4", className),
      ...props,
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("path", { d: "M224 152v56a16 16 0 0 1-16 16H48a16 16 0 0 1-16-16v-56a8 8 0 0 1 16 0v56h160v-56a8 8 0 0 1 16 0Zm-101.66 5.66a8 8 0 0 0 11.32 0l40-40a8 8 0 0 0-11.32-11.32L136 132.69V40a8 8 0 0 0-16 0v92.69l-26.34-26.35a8 8 0 0 0-11.32 11.32Z" }, void 0, !1, {
        fileName: "app/components/ui/icons.tsx",
        lineNumber: 481,
        columnNumber: 7
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/components/ui/icons.tsx",
      lineNumber: 474,
      columnNumber: 5
    },
    this
  );
}
function IconShare({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      fill: "currentColor",
      className: cn("size-4", className),
      viewBox: "0 0 256 256",
      ...props,
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("path", { d: "m237.66 106.35-80-80A8 8 0 0 0 144 32v40.35c-25.94 2.22-54.59 14.92-78.16 34.91-28.38 24.08-46.05 55.11-49.76 87.37a12 12 0 0 0 20.68 9.58c11-11.71 50.14-48.74 107.24-52V192a8 8 0 0 0 13.66 5.65l80-80a8 8 0 0 0 0-11.3ZM160 172.69V144a8 8 0 0 0-8-8c-28.08 0-55.43 7.33-81.29 21.8a196.17 196.17 0 0 0-36.57 26.52c5.8-23.84 20.42-46.51 42.05-64.86C99.41 99.77 127.75 88 152 88a8 8 0 0 0 8-8V51.32L220.69 112Z" }, void 0, !1, {
        fileName: "app/components/ui/icons.tsx",
        lineNumber: 544,
        columnNumber: 7
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/components/ui/icons.tsx",
      lineNumber: 537,
      columnNumber: 5
    },
    this
  );
}
function IconUsers({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      fill: "currentColor",
      className: cn("size-4", className),
      viewBox: "0 0 256 256",
      ...props,
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("path", { d: "M117.25 157.92a60 60 0 1 0-66.5 0 95.83 95.83 0 0 0-47.22 37.71 8 8 0 1 0 13.4 8.74 80 80 0 0 1 134.14 0 8 8 0 0 0 13.4-8.74 95.83 95.83 0 0 0-47.22-37.71ZM40 108a44 44 0 1 1 44 44 44.05 44.05 0 0 1-44-44Zm210.14 98.7a8 8 0 0 1-11.07-2.33A79.83 79.83 0 0 0 172 168a8 8 0 0 1 0-16 44 44 0 1 0-16.34-84.87 8 8 0 1 1-5.94-14.85 60 60 0 0 1 55.53 105.64 95.83 95.83 0 0 1 47.22 37.71 8 8 0 0 1-2.33 11.07Z" }, void 0, !1, {
        fileName: "app/components/ui/icons.tsx",
        lineNumber: 563,
        columnNumber: 7
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/components/ui/icons.tsx",
      lineNumber: 556,
      columnNumber: 5
    },
    this
  );
}
function IconExternalLink({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      fill: "currentColor",
      className: cn("size-4", className),
      viewBox: "0 0 256 256",
      ...props,
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("path", { d: "M224 104a8 8 0 0 1-16 0V59.32l-66.33 66.34a8 8 0 0 1-11.32-11.32L196.68 48H152a8 8 0 0 1 0-16h64a8 8 0 0 1 8 8Zm-40 24a8 8 0 0 0-8 8v72H48V80h72a8 8 0 0 0 0-16H48a16 16 0 0 0-16 16v128a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16v-72a8 8 0 0 0-8-8Z" }, void 0, !1, {
        fileName: "app/components/ui/icons.tsx",
        lineNumber: 582,
        columnNumber: 7
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/components/ui/icons.tsx",
      lineNumber: 575,
      columnNumber: 5
    },
    this
  );
}

// app/lib/hooks/use-copy-to-clipboard.tsx
var React3 = __toESM(require("react"));
function useCopyToClipboard({
  timeout = 2e3
}) {
  let [isCopied, setIsCopied] = React3.useState(!1);
  return { isCopied, copyToClipboard: (value) => {
    typeof window > "u" || !navigator.clipboard?.writeText || value && navigator.clipboard.writeText(value).then(() => {
      setIsCopied(!0), setTimeout(() => {
        setIsCopied(!1);
      }, timeout);
    });
  } };
}

// app/components/chat-message-actions.tsx
var import_jsx_dev_runtime29 = require("react/jsx-dev-runtime");
function ChatMessageActions({
  message,
  className,
  ...props
}) {
  let { isCopied, copyToClipboard } = useCopyToClipboard({ timeout: 2e3 }), onCopy = () => {
    isCopied || copyToClipboard(message.content);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(
    "div",
    {
      className: cn(
        "flex items-center justify-end transition-opacity group-hover:opacity-100 md:absolute md:-right-10 md:-top-2 md:opacity-0",
        className
      ),
      ...props,
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(Button2, { variant: "ghost", size: "icon", onClick: onCopy, children: [
        isCopied ? /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(IconCheck, {}, void 0, !1, {
          fileName: "app/components/chat-message-actions.tsx",
          lineNumber: 33,
          columnNumber: 21
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(IconCopy, {}, void 0, !1, {
          fileName: "app/components/chat-message-actions.tsx",
          lineNumber: 33,
          columnNumber: 37
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("span", { className: "sr-only", children: "Copy message" }, void 0, !1, {
          fileName: "app/components/chat-message-actions.tsx",
          lineNumber: 34,
          columnNumber: 9
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/chat-message-actions.tsx",
        lineNumber: 32,
        columnNumber: 7
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/components/chat-message-actions.tsx",
      lineNumber: 25,
      columnNumber: 5
    },
    this
  );
}

// app/components/markdown.tsx
var import_react11 = require("react"), import_jsx_dev_runtime30 = require("react/jsx-dev-runtime"), ReactMarkdownAsync = (0, import_react11.lazy)(() => import("react-markdown")), MemoizedReactMarkdown = (0, import_react11.memo)(
  (props) => /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(import_react11.Suspense, { fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("div", { children: "Loading..." }, void 0, !1, {
    fileName: "app/components/markdown.tsx",
    lineNumber: 10,
    columnNumber: 25
  }, this), children: /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(ReactMarkdownAsync, { ...props }, void 0, !1, {
    fileName: "app/components/markdown.tsx",
    lineNumber: 11,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/markdown.tsx",
    lineNumber: 10,
    columnNumber: 5
  }, this),
  (prevProps, nextProps) => prevProps.children === nextProps.children && prevProps.className === nextProps.className
);

// app/components/ui/codeblock.tsx
var import_react12 = require("react"), import_react_syntax_highlighter = require("react-syntax-highlighter"), import_prism = require("react-syntax-highlighter/dist/cjs/styles/prism");
var import_jsx_dev_runtime31 = require("react/jsx-dev-runtime"), programmingLanguages = {
  javascript: ".js",
  python: ".py",
  java: ".java",
  c: ".c",
  cpp: ".cpp",
  "c++": ".cpp",
  "c#": ".cs",
  ruby: ".rb",
  php: ".php",
  swift: ".swift",
  "objective-c": ".m",
  kotlin: ".kt",
  typescript: ".ts",
  go: ".go",
  perl: ".pl",
  rust: ".rs",
  scala: ".scala",
  haskell: ".hs",
  lua: ".lua",
  shell: ".sh",
  sql: ".sql",
  html: ".html",
  css: ".css"
  // add more file extensions here, make sure the key is same as language prop in CodeBlock.tsx component
}, generateRandomString = (length, lowercase = !1) => {
  let chars = "ABCDEFGHJKLMNPQRSTUVWXY3456789", result = "";
  for (let i = 0; i < length; i++)
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  return lowercase ? result.toLowerCase() : result;
}, CodeBlock = (0, import_react12.memo)(({ language, value }) => {
  let { isCopied, copyToClipboard } = useCopyToClipboard({ timeout: 2e3 });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("div", { className: "relative w-full font-sans codeblock bg-zinc-950", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("div", { className: "flex items-center justify-between w-full px-6 py-2 pr-4 bg-zinc-800 text-zinc-100", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("span", { className: "text-xs lowercase", children: language }, void 0, !1, {
        fileName: "app/components/ui/codeblock.tsx",
        lineNumber: 96,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("div", { className: "flex items-center space-x-1", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(
          Button2,
          {
            variant: "ghost",
            className: "hover:bg-zinc-800 focus-visible:ring-1 focus-visible:ring-slate-700 focus-visible:ring-offset-0",
            onClick: () => {
              if (typeof window > "u")
                return;
              let fileExtension = programmingLanguages[language] || ".file", suggestedFileName = `file-${generateRandomString(
                3,
                !0
              )}${fileExtension}`, fileName = window.prompt("Enter file name", suggestedFileName);
              if (!fileName)
                return;
              let blob = new Blob([value], { type: "text/plain" }), url = URL.createObjectURL(blob), link = document.createElement("a");
              link.download = fileName, link.href = url, link.style.display = "none", document.body.appendChild(link), link.click(), document.body.removeChild(link), URL.revokeObjectURL(url);
            },
            size: "icon",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(IconDownload, {}, void 0, !1, {
                fileName: "app/components/ui/codeblock.tsx",
                lineNumber: 104,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("span", { className: "sr-only", children: "Download" }, void 0, !1, {
                fileName: "app/components/ui/codeblock.tsx",
                lineNumber: 105,
                columnNumber: 13
              }, this)
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/components/ui/codeblock.tsx",
            lineNumber: 98,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(
          Button2,
          {
            variant: "ghost",
            size: "icon",
            className: "text-xs hover:bg-zinc-800 focus-visible:ring-1 focus-visible:ring-slate-700 focus-visible:ring-offset-0",
            onClick: () => {
              isCopied || copyToClipboard(value);
            },
            children: [
              isCopied ? /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(IconCheck, {}, void 0, !1, {
                fileName: "app/components/ui/codeblock.tsx",
                lineNumber: 113,
                columnNumber: 25
              }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(IconCopy, {}, void 0, !1, {
                fileName: "app/components/ui/codeblock.tsx",
                lineNumber: 113,
                columnNumber: 41
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("span", { className: "sr-only", children: "Copy code" }, void 0, !1, {
                fileName: "app/components/ui/codeblock.tsx",
                lineNumber: 114,
                columnNumber: 13
              }, this)
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/components/ui/codeblock.tsx",
            lineNumber: 107,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/components/ui/codeblock.tsx",
        lineNumber: 97,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/ui/codeblock.tsx",
      lineNumber: 95,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(
      import_react_syntax_highlighter.Prism,
      {
        language,
        style: import_prism.coldarkDark,
        PreTag: "div",
        showLineNumbers: !0,
        customStyle: {
          margin: 0,
          width: "100%",
          background: "transparent",
          padding: "1.5rem 1rem"
        },
        lineNumberStyle: {
          userSelect: "none"
        },
        codeTagProps: {
          style: {
            fontSize: "0.9rem",
            fontFamily: "var(--font-mono)"
          }
        },
        children: value
      },
      void 0,
      !1,
      {
        fileName: "app/components/ui/codeblock.tsx",
        lineNumber: 118,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/ui/codeblock.tsx",
    lineNumber: 94,
    columnNumber: 5
  }, this);
});
CodeBlock.displayName = "CodeBlock";

// app/components/chat-message.tsx
var import_jsx_dev_runtime32 = require("react/jsx-dev-runtime");
function ChatMessage({ message, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(
    "div",
    {
      className: cn("group relative mb-4 flex items-start md:-ml-12"),
      ...props,
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(
          "div",
          {
            className: cn(
              "flex items-center justify-center  rounded-full shadow-lg  border",
              message.role === "user" ? "bg-background" : "bg-primary text-primary-foreground"
            ),
            children: message.role === "user" ? /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { className: "relative flex  h-12 w-12  items-center justify-center rounded-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { className: "flex items-center justify-center  rounded-full bg-gradient-to-t from-indigo-400 via-cyan-400 to-sky-500 shadow-lg p-0.5", children: /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(IconUser, { className: "mx-auto bg-white h-11 w-11 justify-center rounded-full p-1.5" }, void 0, !1, {
              fileName: "app/components/chat-message.tsx",
              lineNumber: 43,
              columnNumber: 15
            }, this) }, void 0, !1, {
              fileName: "app/components/chat-message.tsx",
              lineNumber: 42,
              columnNumber: 13
            }, this) }, void 0, !1, {
              fileName: "app/components/chat-message.tsx",
              lineNumber: 41,
              columnNumber: 11
            }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { className: "relative flex  h-12 w-12  items-center justify-center rounded-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { className: "flex items-center justify-center  rounded-full bg-gradient-to-t from-indigo-400 via-cyan-400 to-sky-500 shadow-lg p-0.5", children: /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(
              "img",
              {
                className: "mx-auto bg-white h-11 w-11 justify-center rounded-full p-1.5",
                src: "/assets/logo-4.png",
                alt: "logo"
              },
              void 0,
              !1,
              {
                fileName: "app/components/chat-message.tsx",
                lineNumber: 49,
                columnNumber: 15
              },
              this
            ) }, void 0, !1, {
              fileName: "app/components/chat-message.tsx",
              lineNumber: 48,
              columnNumber: 13
            }, this) }, void 0, !1, {
              fileName: "app/components/chat-message.tsx",
              lineNumber: 47,
              columnNumber: 11
            }, this)
          },
          void 0,
          !1,
          {
            fileName: "app/components/chat-message.tsx",
            lineNumber: 32,
            columnNumber: 7
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { className: "mx-2 w-full  rounded-lg shadow-lg flex-1 space-y-2 overflow-hidden", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(
            MemoizedReactMarkdown,
            {
              className: "flex w-full flex-col relative bg-white p-4 shadow rounded-lg prose break-words dark:prose-invert prose-p:leading-relaxed prose-pre:p-0 text-lg border",
              components: {
                p({ children }) {
                  return /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("p", { className: "mb-2 last:mb-0", children }, void 0, !1, {
                    fileName: "app/components/chat-message.tsx",
                    lineNumber: 65,
                    columnNumber: 22
                  }, this);
                },
                code({
                  inline,
                  className,
                  children,
                  ...props2
                }) {
                  if (Array.isArray(children) && children.length) {
                    if (children[0] === "\u258D")
                      return /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("span", { className: "mt-1 cursor-default animate-pulse", children: "\u258D" }, void 0, !1, {
                        fileName: "app/components/chat-message.tsx",
                        lineNumber: 76,
                        columnNumber: 21
                      }, this);
                    children[0] = children[0].replace("`\u258D`", "\u258D");
                  }
                  let match = /language-(\w+)/.exec(className || "");
                  return inline ? /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("code", { className, ...props2, children }, void 0, !1, {
                    fileName: "app/components/chat-message.tsx",
                    lineNumber: 87,
                    columnNumber: 19
                  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(
                    CodeBlock,
                    {
                      language: match && match[1] || "",
                      value: String(children).replace(/\n$/, ""),
                      ...props2
                    },
                    Math.random(),
                    !1,
                    {
                      fileName: "app/components/chat-message.tsx",
                      lineNumber: 94,
                      columnNumber: 17
                    },
                    this
                  );
                }
              },
              children: message.content
            },
            void 0,
            !1,
            {
              fileName: "app/components/chat-message.tsx",
              lineNumber: 60,
              columnNumber: 9
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(ChatMessageActions, { message }, void 0, !1, {
            fileName: "app/components/chat-message.tsx",
            lineNumber: 106,
            columnNumber: 9
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/chat-message.tsx",
          lineNumber: 59,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/chat-message.tsx",
      lineNumber: 28,
      columnNumber: 5
    },
    this
  );
}

// app/components/chat-list.tsx
var import_jsx_dev_runtime33 = require("react/jsx-dev-runtime"), ChatList = ({
  messages
}) => messages.length ? /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("div", { className: "relative mx-auto max-w-4xl px-4", children: messages.map((message, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(ChatMessage, { message }, void 0, !1, {
  fileName: "app/components/chat-list.tsx",
  lineNumber: 22,
  columnNumber: 11
}, this) }, index, !1, {
  fileName: "app/components/chat-list.tsx",
  lineNumber: 21,
  columnNumber: 9
}, this)) }, void 0, !1, {
  fileName: "app/components/chat-list.tsx",
  lineNumber: 19,
  columnNumber: 5
}, this) : null;

// app/components/external-link.tsx
var import_jsx_dev_runtime34 = require("react/jsx-dev-runtime");
function ExternalLink({
  href,
  children
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(
    "a",
    {
      href,
      target: "_blank",
      className: "inline-flex flex-1 justify-center gap-1 leading-4 hover:underline",
      rel: "noreferrer",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("span", { children }, void 0, !1, {
          fileName: "app/components/external-link.tsx",
          lineNumber: 14,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(
          "svg",
          {
            "aria-hidden": "true",
            height: "7",
            viewBox: "0 0 6 6",
            width: "7",
            className: "opacity-70",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(
              "path",
              {
                d: "M1.25215 5.54731L0.622742 4.9179L3.78169 1.75597H1.3834L1.38936 0.890915H5.27615V4.78069H4.40513L4.41109 2.38538L1.25215 5.54731Z",
                fill: "currentColor"
              },
              void 0,
              !1,
              {
                fileName: "app/components/external-link.tsx",
                lineNumber: 22,
                columnNumber: 9
              },
              this
            )
          },
          void 0,
          !1,
          {
            fileName: "app/components/external-link.tsx",
            lineNumber: 15,
            columnNumber: 7
          },
          this
        )
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/external-link.tsx",
      lineNumber: 9,
      columnNumber: 5
    },
    this
  );
}

// app/components/footer.tsx
var import_jsx_dev_runtime35 = require("react/jsx-dev-runtime");
function FooterText({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(
    "p",
    {
      className: cn(
        "px-2 text-center text-xs leading-normal text-muted-foreground",
        className
      ),
      ...props,
      children: [
        "Open source AI chatbot built with",
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(ExternalLink, { href: "https://nextjs.org", children: "Next.js" }, void 0, !1, {
          fileName: "app/components/footer.tsx",
          lineNumber: 16,
          columnNumber: 7
        }, this),
        " and",
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(ExternalLink, { href: "https://vercel.com/storage/kv", children: "Vercel KV" }, void 0, !1, {
          fileName: "app/components/footer.tsx",
          lineNumber: 17,
          columnNumber: 7
        }, this),
        "."
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/footer.tsx",
      lineNumber: 8,
      columnNumber: 5
    },
    this
  );
}

// app/models/chat.server.ts
var import_kv = require("@vercel/kv");
async function getChats(userId) {
  if (!userId)
    return [];
  try {
    let pipeline = import_kv.kv.pipeline(), chats = await import_kv.kv.zrange(`user:chat:${userId}`, 0, -1, {
      rev: !0
    });
    for (let chat of chats)
      pipeline.hgetall(chat);
    return await pipeline.exec();
  } catch {
    return [];
  }
}
async function getChat(id, userId) {
  let chat = await import_kv.kv.hgetall(`chat:${id}`);
  return !chat || userId && chat.userId !== userId ? null : chat;
}
async function removeChat({
  id,
  userId
}) {
  return userId ? String(await import_kv.kv.hget(`chat:${id}`, "userId")) !== userId ? {
    error: "Unauthorized"
  } : (await import_kv.kv.del(`chat:${id}`), await import_kv.kv.zrem(`user:chat:${userId}`, `chat:${id}`), { success: !0 }) : {
    error: "Unauthorized"
  };
}
async function clearChats(userId) {
  if (!userId)
    return {
      error: "Unauthorized"
    };
  let chats = await import_kv.kv.zrange(`user:chat:${userId}`, 0, -1);
  if (!chats.length)
    return { error: "No chat history" };
  let pipeline = import_kv.kv.pipeline();
  for (let chat of chats)
    pipeline.del(chat), pipeline.zrem(`user:chat:${userId}`, chat);
  return await pipeline.exec(), { success: !0 };
}
async function getSharedChat(id) {
  let chat = await import_kv.kv.hgetall(`chat:${id}`);
  return !chat || !chat.sharePath ? null : chat;
}
async function shareChat(id, userId) {
  if (!userId)
    return {
      error: "Unauthorized"
    };
  let chat = await import_kv.kv.hgetall(`chat:${id}`);
  if (!chat || chat.userId !== userId)
    return {
      error: "Something went wrong"
    };
  let payload = {
    ...chat,
    sharePath: `/share/${chat.id}`
  };
  return await import_kv.kv.hmset(`chat:${chat.id}`, payload), payload;
}

// app/routes/ai.share_.$id.tsx
var import_jsx_dev_runtime36 = require("react/jsx-dev-runtime"), loader2 = async ({ params }) => {
  let chat = await getSharedChat(params.id ?? "");
  return !chat || !chat?.sharePath ? {
    error: "No chat found"
  } : (0, import_node4.json)(chat);
};
function SharePage() {
  let chat = (0, import_react13.useLoaderData)();
  return console.log(chat, "chat"), /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(import_jsx_dev_runtime36.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("div", { className: "flex-1 space-y-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("div", { className: "px-4 py-6 border-b bg-background md:px-6 md:py-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("div", { className: "max-w-2xl mx-auto md:px-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("div", { className: "space-y-1 md:-mx-8", children: [
        chat && "title" in chat ? /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("h1", { className: "text-2xl font-bold", children: chat.title }, void 0, !1, {
          fileName: "app/routes/ai.share_.$id.tsx",
          lineNumber: 48,
          columnNumber: 17
        }, this) : null,
        /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("div", { className: "text-sm text-muted-foreground", children: chat && "createdAt" in chat && "messages" in chat ? /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(import_jsx_dev_runtime36.Fragment, { children: [
          formatDate(chat.createdAt),
          " \xB7 ",
          chat.messages.length,
          " ",
          "messages"
        ] }, void 0, !0, {
          fileName: "app/routes/ai.share_.$id.tsx",
          lineNumber: 52,
          columnNumber: 19
        }, this) : null }, void 0, !1, {
          fileName: "app/routes/ai.share_.$id.tsx",
          lineNumber: 50,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/ai.share_.$id.tsx",
        lineNumber: 46,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/ai.share_.$id.tsx",
        lineNumber: 45,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/ai.share_.$id.tsx",
        lineNumber: 44,
        columnNumber: 9
      }, this),
      chat && "messages" in chat ? /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(ChatList, { messages: chat.messages }, void 0, !1, {
        fileName: "app/routes/ai.share_.$id.tsx",
        lineNumber: 62,
        columnNumber: 11
      }, this) : null
    ] }, void 0, !0, {
      fileName: "app/routes/ai.share_.$id.tsx",
      lineNumber: 43,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(FooterText, { className: "py-8" }, void 0, !1, {
      fileName: "app/routes/ai.share_.$id.tsx",
      lineNumber: 65,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/ai.share_.$id.tsx",
    lineNumber: 42,
    columnNumber: 5
  }, this);
}

// app/routes/notes.$noteId.tsx
var notes_noteId_exports = {};
__export(notes_noteId_exports, {
  ErrorBoundary: () => ErrorBoundary,
  action: () => action2,
  default: () => NoteDetailsPage,
  loader: () => loader3
});
var import_node5 = require("@remix-run/node"), import_react14 = require("@remix-run/react"), import_tiny_invariant2 = __toESM(require("tiny-invariant"));

// app/models/note.server.ts
function getNote({
  id,
  userId
}) {
  return prisma.note.findFirst({
    select: { id: !0, body: !0, title: !0 },
    where: { id, userId }
  });
}
function getNoteListItems({ userId }) {
  return prisma.note.findMany({
    where: { userId },
    select: { id: !0, title: !0 },
    orderBy: { updatedAt: "desc" }
  });
}
function createNote({
  body,
  title,
  userId
}) {
  return prisma.note.create({
    data: {
      title,
      body,
      user: {
        connect: {
          id: userId
        }
      }
    }
  });
}
function deleteNote({
  id,
  userId
}) {
  return prisma.note.deleteMany({
    where: { id, userId }
  });
}

// app/routes/notes.$noteId.tsx
var import_jsx_dev_runtime37 = require("react/jsx-dev-runtime"), loader3 = async ({ params, request }) => {
  let userId = await requireUserId(request);
  (0, import_tiny_invariant2.default)(params.noteId, "noteId not found");
  let note = await getNote({ id: params.noteId, userId });
  if (!note)
    throw new Response("Not Found", { status: 404 });
  return (0, import_node5.json)({ note });
}, action2 = async ({ params, request }) => {
  let userId = await requireUserId(request);
  return (0, import_tiny_invariant2.default)(params.noteId, "noteId not found"), await deleteNote({ id: params.noteId, userId }), (0, import_node5.redirect)("/notes");
};
function NoteDetailsPage() {
  let data = (0, import_react14.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)("h3", { className: "text-2xl font-bold", children: data.note.title }, void 0, !1, {
      fileName: "app/routes/notes.$noteId.tsx",
      lineNumber: 39,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)("p", { className: "py-6", children: data.note.body }, void 0, !1, {
      fileName: "app/routes/notes.$noteId.tsx",
      lineNumber: 40,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)("hr", { className: "my-4" }, void 0, !1, {
      fileName: "app/routes/notes.$noteId.tsx",
      lineNumber: 41,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)(import_react14.Form, { method: "post", children: /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)(
      "button",
      {
        type: "submit",
        className: "rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:bg-blue-400",
        children: "Delete"
      },
      void 0,
      !1,
      {
        fileName: "app/routes/notes.$noteId.tsx",
        lineNumber: 43,
        columnNumber: 9
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/notes.$noteId.tsx",
      lineNumber: 42,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/notes.$noteId.tsx",
    lineNumber: 38,
    columnNumber: 5
  }, this);
}
function ErrorBoundary() {
  let error = (0, import_react14.useRouteError)();
  return error instanceof Error ? /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)("div", { children: [
    "An unexpected error occurred: ",
    error.message
  ] }, void 0, !0, {
    fileName: "app/routes/notes.$noteId.tsx",
    lineNumber: 58,
    columnNumber: 12
  }, this) : (0, import_react14.isRouteErrorResponse)(error) ? error.status === 404 ? /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)("div", { children: "Note not found" }, void 0, !1, {
    fileName: "app/routes/notes.$noteId.tsx",
    lineNumber: 66,
    columnNumber: 12
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)("div", { children: [
    "An unexpected error occurred: ",
    error.statusText
  ] }, void 0, !0, {
    fileName: "app/routes/notes.$noteId.tsx",
    lineNumber: 69,
    columnNumber: 10
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)("h1", { children: "Unknown Error" }, void 0, !1, {
    fileName: "app/routes/notes.$noteId.tsx",
    lineNumber: 62,
    columnNumber: 12
  }, this);
}

// app/routes/ai.chat_.$id.tsx
var ai_chat_id_exports = {};
__export(ai_chat_id_exports, {
  default: () => ChatPage,
  loader: () => loader4
});
var import_node6 = require("@remix-run/node"), import_react30 = require("@remix-run/react");

// app/components/chat.tsx
var import_react21 = require("@remix-run/react"), import_react22 = require("ai/react"), import_react23 = require("react"), import_react_hot_toast2 = require("react-hot-toast");

// app/components/chat-panel.tsx
var React9 = __toESM(require("react"));

// app/lib/hooks/use-at-bottom.tsx
var React4 = __toESM(require("react"));
function useAtBottom(offset = 0) {
  let [isAtBottom, setIsAtBottom] = React4.useState(!1);
  return React4.useEffect(() => {
    let handleScroll = () => {
      setIsAtBottom(
        window.innerHeight + window.scrollY >= document.body.offsetHeight - offset
      );
    };
    return window.addEventListener("scroll", handleScroll, { passive: !0 }), handleScroll(), () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [offset]), isAtBottom;
}

// app/components/button-scroll-to-bottom.tsx
var import_jsx_dev_runtime38 = require("react/jsx-dev-runtime");
function ButtonScrollToBottom({ className, ...props }) {
  let isAtBottom = useAtBottom();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(
    Button2,
    {
      variant: "outline",
      size: "icon",
      className: cn(
        "absolute right-4 top-1 z-10 bg-white transition-opacity duration-300 sm:right-8 md:top-2",
        isAtBottom ? "opacity-0" : "opacity-100",
        className
      ),
      onClick: () => window.scrollTo({
        top: document.body.offsetHeight,
        behavior: "smooth"
      }),
      ...props,
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(IconArrowDown, {}, void 0, !1, {
          fileName: "app/components/button-scroll-to-bottom.tsx",
          lineNumber: 26,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("span", { className: "sr-only", children: "Scroll to bottom" }, void 0, !1, {
          fileName: "app/components/button-scroll-to-bottom.tsx",
          lineNumber: 27,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/button-scroll-to-bottom.tsx",
      lineNumber: 10,
      columnNumber: 5
    },
    this
  );
}

// app/components/chat-share-dialog.tsx
var import_react17 = require("@remix-run/react"), React6 = __toESM(require("react")), import_react_hot_toast = require("react-hot-toast");

// app/components/ui/dialog.tsx
var React5 = __toESM(require("react")), DialogPrimitive = __toESM(require("@radix-ui/react-dialog")), import_lucide_react = require("lucide-react");
var import_jsx_dev_runtime39 = require("react/jsx-dev-runtime"), Dialog = DialogPrimitive.Root;
var DialogPortal = DialogPrimitive.Portal;
var DialogOverlay = React5.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)(
  DialogPrimitive.Overlay,
  {
    ref,
    className: cn(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    ),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/dialog.tsx",
    lineNumber: 19,
    columnNumber: 3
  },
  this
));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;
var DialogContent = React5.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)(DialogPortal, { children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)(DialogOverlay, {}, void 0, !1, {
    fileName: "app/components/ui/dialog.tsx",
    lineNumber: 35,
    columnNumber: 5
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)(
    DialogPrimitive.Content,
    {
      ref,
      className: cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border border-slate-200 bg-white p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg dark:border-slate-800 dark:bg-slate-950",
        className
      ),
      ...props,
      children: [
        children,
        /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)(DialogPrimitive.Close, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-slate-100 data-[state=open]:text-slate-500 dark:ring-offset-slate-950 dark:focus:ring-slate-300 dark:data-[state=open]:bg-slate-800 dark:data-[state=open]:text-slate-400", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)(import_lucide_react.X, { className: "h-4 w-4" }, void 0, !1, {
            fileName: "app/components/ui/dialog.tsx",
            lineNumber: 46,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("span", { className: "sr-only", children: "Close" }, void 0, !1, {
            fileName: "app/components/ui/dialog.tsx",
            lineNumber: 47,
            columnNumber: 9
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/ui/dialog.tsx",
          lineNumber: 45,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/ui/dialog.tsx",
      lineNumber: 36,
      columnNumber: 5
    },
    this
  )
] }, void 0, !0, {
  fileName: "app/components/ui/dialog.tsx",
  lineNumber: 34,
  columnNumber: 3
}, this));
DialogContent.displayName = DialogPrimitive.Content.displayName;
var DialogHeader = ({
  className,
  ...props
}) => /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)(
  "div",
  {
    className: cn(
      "flex flex-col space-y-1.5 text-center sm:text-left",
      className
    ),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/dialog.tsx",
    lineNumber: 58,
    columnNumber: 3
  },
  this
);
DialogHeader.displayName = "DialogHeader";
var DialogFooter = ({
  className,
  ...props
}) => /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)(
  "div",
  {
    className: cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className
    ),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/dialog.tsx",
    lineNumber: 72,
    columnNumber: 3
  },
  this
);
DialogFooter.displayName = "DialogFooter";
var DialogTitle = React5.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)(
  DialogPrimitive.Title,
  {
    ref,
    className: cn(
      "text-lg font-semibold leading-none tracking-tight",
      className
    ),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/dialog.tsx",
    lineNumber: 86,
    columnNumber: 3
  },
  this
));
DialogTitle.displayName = DialogPrimitive.Title.displayName;
var DialogDescription = React5.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)(
  DialogPrimitive.Description,
  {
    ref,
    className: cn("text-sm text-slate-500 dark:text-slate-400", className),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/dialog.tsx",
    lineNumber: 101,
    columnNumber: 3
  },
  this
));
DialogDescription.displayName = DialogPrimitive.Description.displayName;

// app/utils.ts
var import_react15 = require("@remix-run/react"), import_react16 = require("react"), DEFAULT_REDIRECT = "/";
function safeRedirect(to, defaultRedirect = DEFAULT_REDIRECT) {
  return !to || typeof to != "string" || !to.startsWith("/") || to.startsWith("//") ? defaultRedirect : to;
}
function useMatchesData(id) {
  let matchingRoutes = (0, import_react15.useMatches)();
  return (0, import_react16.useMemo)(
    () => matchingRoutes.find((route2) => route2.id === id),
    [matchingRoutes, id]
  )?.data;
}
function isUser(user) {
  return user != null && typeof user == "object" && "email" in user && typeof user.email == "string";
}
function useOptionalUser() {
  let data = useMatchesData("root");
  if (!(!data || !isUser(data.user)))
    return data.user;
}
function useUser() {
  let maybeUser = useOptionalUser();
  if (!maybeUser)
    throw new Error(
      "No user found in root loader, but user is required by useUser. If user is optional, try useOptionalUser instead."
    );
  return maybeUser;
}
function validateEmail(email) {
  return typeof email == "string" && email.length > 3 && email.includes("@");
}

// app/components/chat-share-dialog.tsx
var import_jsx_dev_runtime40 = require("react/jsx-dev-runtime");
function ChatShareDialog({
  chat,
  // shareChat,
  onCopy,
  ...props
}) {
  let { copyToClipboard } = useCopyToClipboard({ timeout: 1e3 }), user = useUser(), fetcher = (0, import_react17.useFetcher)(), isSharePending = fetcher.state === "submitting", result = fetcher.data?.result, prevDataRef = React6.useRef();
  return React6.useEffect(() => {
    let prevData = prevDataRef.current;
    if (fetcher.data && fetcher.data !== prevData) {
      if ("error" in fetcher.data)
        import_react_hot_toast.toast.error("Error while sharing chat");
      else if (fetcher.data.result && fetcher.data.result.sharePath) {
        console.log(
          "inside else if of useEffect for fetcher data",
          fetcher.data.result
        );
        let { sharePath } = fetcher.data.result, url = new URL(window.location.href);
        url.pathname = `/ai${sharePath}`, copyToClipboard(url.toString()), onCopy(), import_react_hot_toast.toast.success("Share link copied to clipboard", {
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
            fontSize: "14px"
          },
          iconTheme: {
            primary: "white",
            secondary: "black"
          }
        });
      }
    }
    prevDataRef.current = fetcher.data;
  }, [fetcher.data, copyToClipboard, onCopy]), /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)(Dialog, { ...props, children: /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)(DialogContent, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)(DialogHeader, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)(DialogTitle, { children: "Share link to chat" }, void 0, !1, {
        fileName: "app/components/chat-share-dialog.tsx",
        lineNumber: 117,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)(DialogDescription, { children: "Anyone with the URL will be able to view the shared chat." }, void 0, !1, {
        fileName: "app/components/chat-share-dialog.tsx",
        lineNumber: 118,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/chat-share-dialog.tsx",
      lineNumber: 116,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("div", { className: "p-4 space-y-1 text-sm border rounded-md", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("div", { className: "font-medium", children: chat.title }, void 0, !1, {
        fileName: "app/components/chat-share-dialog.tsx",
        lineNumber: 123,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("div", { className: "text-muted-foreground", children: [
        chat.messages.length,
        " messages"
      ] }, void 0, !0, {
        fileName: "app/components/chat-share-dialog.tsx",
        lineNumber: 124,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/chat-share-dialog.tsx",
      lineNumber: 122,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)(DialogFooter, { className: "items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)(
      Button2,
      {
        disabled: isSharePending,
        onClick: () => {
          fetcher.submit(
            {
              id: chat.id,
              // path: chat.path,
              userId: user.id,
              intent: "share"
            },
            // Adjust according to your data structure
            { method: "post", action: "/ai" }
            // Adjust the action path
          );
        },
        children: isSharePending ? /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)(import_jsx_dev_runtime40.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)(IconSpinner, { className: "mr-2 animate-spin" }, void 0, !1, {
            fileName: "app/components/chat-share-dialog.tsx",
            lineNumber: 145,
            columnNumber: 17
          }, this),
          "Copying..."
        ] }, void 0, !0, {
          fileName: "app/components/chat-share-dialog.tsx",
          lineNumber: 144,
          columnNumber: 15
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)(import_jsx_dev_runtime40.Fragment, { children: "Copy link" }, void 0, !1, {
          fileName: "app/components/chat-share-dialog.tsx",
          lineNumber: 149,
          columnNumber: 15
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/components/chat-share-dialog.tsx",
        lineNumber: 129,
        columnNumber: 11
      },
      this
    ) }, void 0, !1, {
      fileName: "app/components/chat-share-dialog.tsx",
      lineNumber: 128,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/chat-share-dialog.tsx",
    lineNumber: 115,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/chat-share-dialog.tsx",
    lineNumber: 114,
    columnNumber: 5
  }, this);
}

// app/components/prompt-form.tsx
var import_react19 = require("@remix-run/react"), React8 = __toESM(require("react")), import_react_textarea_autosize = __toESM(require("react-textarea-autosize"));

// app/components/ui/tooltip.tsx
var TooltipPrimitive = __toESM(require("@radix-ui/react-tooltip")), React7 = __toESM(require("react"));
var import_jsx_dev_runtime41 = require("react/jsx-dev-runtime"), TooltipProvider = TooltipPrimitive.Provider, Tooltip = TooltipPrimitive.Root, TooltipTrigger = TooltipPrimitive.Trigger, TooltipContent = React7.forwardRef(({ className, sideOffset = 4, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)(
  TooltipPrimitive.Content,
  {
    ref,
    sideOffset,
    className: cn(
      "z-50 overflow-hidden rounded-md border border-slate-200 bg-white px-3 py-1.5 text-sm text-slate-950 shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50",
      className
    ),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/tooltip.tsx",
    lineNumber: 16,
    columnNumber: 3
  },
  this
));
TooltipContent.displayName = TooltipPrimitive.Content.displayName;

// app/lib/hooks/use-enter-submit.tsx
var import_react18 = require("react");
function useEnterSubmit() {
  let formRef = (0, import_react18.useRef)(null);
  return { formRef, onKeyDown: (event) => {
    event.key === "Enter" && !event.shiftKey && !event.nativeEvent.isComposing && (formRef.current?.requestSubmit(), event.preventDefault());
  } };
}

// app/components/prompt-form.tsx
var import_jsx_dev_runtime42 = require("react/jsx-dev-runtime");
function PromptForm({
  onSubmit,
  input,
  setInput,
  isLoading
}) {
  let { formRef, onKeyDown } = useEnterSubmit(), inputRef = React8.useRef(null), navigate = (0, import_react19.useNavigate)();
  return React8.useEffect(() => {
    inputRef.current && inputRef.current.focus();
  }, []), /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)(
    "form",
    {
      onSubmit: async (e) => {
        e.preventDefault(), input?.trim() && (setInput(""), onSubmit(input));
      },
      ref: formRef,
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)("div", { className: "relative flex flex-col w-full px-8 overflow-hidden max-h-60 grow bg-white sm:rounded-md sm:border sm:px-12", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)(Tooltip, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)(TooltipTrigger, { asChild: !0, children: /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)(
            "button",
            {
              onClick: (e) => {
                e.preventDefault(), navigate("/");
              },
              className: cn(
                buttonVariants({ size: "sm", variant: "outline" }),
                "absolute left-0 top-4 size-8 rounded-full bg-background p-0 sm:left-4"
              ),
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)(IconPlus, {}, void 0, !1, {
                  fileName: "app/components/prompt-form.tsx",
                  lineNumber: 63,
                  columnNumber: 15
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)("span", { className: "sr-only", children: "New Chat" }, void 0, !1, {
                  fileName: "app/components/prompt-form.tsx",
                  lineNumber: 64,
                  columnNumber: 15
                }, this)
              ]
            },
            void 0,
            !0,
            {
              fileName: "app/components/prompt-form.tsx",
              lineNumber: 53,
              columnNumber: 13
            },
            this
          ) }, void 0, !1, {
            fileName: "app/components/prompt-form.tsx",
            lineNumber: 52,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)(TooltipContent, { children: "New Chat" }, void 0, !1, {
            fileName: "app/components/prompt-form.tsx",
            lineNumber: 67,
            columnNumber: 11
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/prompt-form.tsx",
          lineNumber: 51,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)(
          import_react_textarea_autosize.default,
          {
            ref: inputRef,
            tabIndex: 0,
            onKeyDown,
            rows: 1,
            value: input,
            onChange: (e) => setInput(e.target.value),
            placeholder: "Send a message.",
            spellCheck: !1,
            className: "min-h-[60px] w-full resize-none bg-white px-4 py-[1.3rem] focus-within:outline-none sm:text-sm"
          },
          void 0,
          !1,
          {
            fileName: "app/components/prompt-form.tsx",
            lineNumber: 69,
            columnNumber: 9
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)("div", { className: "z-10 absolute right-0 top-4 sm:right-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)(Tooltip, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)(TooltipTrigger, { asChild: !0, children: /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)(
            Button2,
            {
              type: "submit",
              size: "icon",
              disabled: isLoading || input === "",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)(IconArrowElbow, {}, void 0, !1, {
                  fileName: "app/components/prompt-form.tsx",
                  lineNumber: 88,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)("span", { className: "sr-only", children: "Send message" }, void 0, !1, {
                  fileName: "app/components/prompt-form.tsx",
                  lineNumber: 89,
                  columnNumber: 17
                }, this)
              ]
            },
            void 0,
            !0,
            {
              fileName: "app/components/prompt-form.tsx",
              lineNumber: 83,
              columnNumber: 15
            },
            this
          ) }, void 0, !1, {
            fileName: "app/components/prompt-form.tsx",
            lineNumber: 82,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)(TooltipContent, { children: "Send message" }, void 0, !1, {
            fileName: "app/components/prompt-form.tsx",
            lineNumber: 92,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/prompt-form.tsx",
          lineNumber: 81,
          columnNumber: 11
        }, this) }, void 0, !1, {
          fileName: "app/components/prompt-form.tsx",
          lineNumber: 80,
          columnNumber: 9
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/prompt-form.tsx",
        lineNumber: 50,
        columnNumber: 7
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/components/prompt-form.tsx",
      lineNumber: 39,
      columnNumber: 5
    },
    this
  );
}

// app/components/chat-panel.tsx
var import_jsx_dev_runtime43 = require("react/jsx-dev-runtime");
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
  let [shareDialogOpen, setShareDialogOpen] = React9.useState(!1);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("div", { className: "fixed inset-x-0 bottom-0 w-full bg-gradient-to-b from-muted/30 from-0% to-muted/30 to-50% animate-in duration-300 ease-in-out dark:from-background/10 dark:from-10% dark:to-background/80 peer-[[data-state=open]]:group-[]:lg:pl-[250px] peer-[[data-state=open]]:group-[]:xl:pl-[300px]", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(ButtonScrollToBottom, {}, void 0, !1, {
      fileName: "app/components/chat-panel.tsx",
      lineNumber: 44,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("div", { className: "mx-auto sm:max-w-5xl sm:px-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("div", { className: "flex items-center justify-center h-12", children: isLoading ? /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(
        Button2,
        {
          variant: "outline",
          onClick: () => stop(),
          className: "bg-white",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(IconStop, { className: "mr-2" }, void 0, !1, {
              fileName: "app/components/chat-panel.tsx",
              lineNumber: 53,
              columnNumber: 15
            }, this),
            "Stop generating"
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/components/chat-panel.tsx",
          lineNumber: 48,
          columnNumber: 13
        },
        this
      ) : messages?.length >= 2 && /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("div", { className: "flex space-x-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(Button2, { variant: "outline", onClick: () => reload(), children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(IconRefresh, { className: "mr-2" }, void 0, !1, {
            fileName: "app/components/chat-panel.tsx",
            lineNumber: 60,
            columnNumber: 19
          }, this),
          "Regenerate response"
        ] }, void 0, !0, {
          fileName: "app/components/chat-panel.tsx",
          lineNumber: 59,
          columnNumber: 17
        }, this),
        id ? /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(import_jsx_dev_runtime43.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(
            Button2,
            {
              variant: "outline",
              onClick: () => setShareDialogOpen(!0),
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(IconShare, { className: "mr-2" }, void 0, !1, {
                  fileName: "app/components/chat-panel.tsx",
                  lineNumber: 69,
                  columnNumber: 23
                }, this),
                "Share"
              ]
            },
            void 0,
            !0,
            {
              fileName: "app/components/chat-panel.tsx",
              lineNumber: 65,
              columnNumber: 21
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(
            ChatShareDialog,
            {
              open: shareDialogOpen,
              onOpenChange: setShareDialogOpen,
              onCopy: () => setShareDialogOpen(!1),
              chat: {
                id: id ?? "",
                title: title ?? "",
                messages
              }
            },
            void 0,
            !1,
            {
              fileName: "app/components/chat-panel.tsx",
              lineNumber: 72,
              columnNumber: 21
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/components/chat-panel.tsx",
          lineNumber: 64,
          columnNumber: 19
        }, this) : null
      ] }, void 0, !0, {
        fileName: "app/components/chat-panel.tsx",
        lineNumber: 58,
        columnNumber: 15
      }, this) }, void 0, !1, {
        fileName: "app/components/chat-panel.tsx",
        lineNumber: 46,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("div", { className: "mt-4 pb-2 bg-white", children: /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(
        PromptForm,
        {
          onSubmit: async (value) => {
            await append({
              id,
              content: value,
              role: "user"
            });
          },
          input,
          setInput,
          isLoading
        },
        void 0,
        !1,
        {
          fileName: "app/components/chat-panel.tsx",
          lineNumber: 90,
          columnNumber: 11
        },
        this
      ) }, void 0, !1, {
        fileName: "app/components/chat-panel.tsx",
        lineNumber: 89,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/chat-panel.tsx",
      lineNumber: 45,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/chat-panel.tsx",
    lineNumber: 43,
    columnNumber: 5
  }, this);
}

// app/components/chat-scroll-anchor.tsx
var React10 = __toESM(require("react")), import_react_intersection_observer = require("react-intersection-observer");
var import_jsx_dev_runtime44 = require("react/jsx-dev-runtime");
function ChatScrollAnchor({ trackVisibility }) {
  let isAtBottom = useAtBottom(), { ref, entry: entry2, inView } = (0, import_react_intersection_observer.useInView)({
    trackVisibility,
    delay: 100,
    rootMargin: "0px 0px -150px 0px"
  });
  return React10.useEffect(() => {
    isAtBottom && trackVisibility && !inView && entry2?.target.scrollIntoView({
      block: "start"
    });
  }, [inView, entry2, isAtBottom, trackVisibility]), /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)("div", { ref, className: "h-px w-full" }, void 0, !1, {
    fileName: "app/components/chat-scroll-anchor.tsx",
    lineNumber: 28,
    columnNumber: 10
  }, this);
}

// app/components/empty-screen.tsx
var import_jsx_dev_runtime45 = require("react/jsx-dev-runtime"), exampleMessages = [
  {
    heading: "Explain technical concepts",
    message: 'What is a "serverless function"?'
  },
  {
    heading: "Summarize an article",
    message: `Summarize the following article for a 2nd grader: 
`
  },
  {
    heading: "Draft an email",
    message: `Draft an email to my boss about the following: 
`
  }
];
function EmptyScreen({ setInput }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)("div", { className: "mx-auto max-w-2xl px-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)("div", { className: "rounded-lg border bg-background p-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)("h1", { className: "mb-2 text-lg font-semibold", children: "Welcome to Next.js AI Chatbot!" }, void 0, !1, {
      fileName: "app/components/empty-screen.tsx",
      lineNumber: 26,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)("p", { className: "mb-2 leading-normal text-muted-foreground", children: [
      "This is an open source AI chatbot app template built with",
      " ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)(ExternalLink, { href: "https://nextjs.org", children: "Next.js" }, void 0, !1, {
        fileName: "app/components/empty-screen.tsx",
        lineNumber: 31,
        columnNumber: 11
      }, this),
      " and",
      " ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)(ExternalLink, { href: "https://vercel.com/storage/kv", children: "Vercel KV" }, void 0, !1, {
        fileName: "app/components/empty-screen.tsx",
        lineNumber: 32,
        columnNumber: 11
      }, this),
      "."
    ] }, void 0, !0, {
      fileName: "app/components/empty-screen.tsx",
      lineNumber: 29,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)("p", { className: "leading-normal text-muted-foreground", children: "You can start a conversation here or try the following examples:" }, void 0, !1, {
      fileName: "app/components/empty-screen.tsx",
      lineNumber: 37,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)("div", { className: "mt-4 flex flex-col items-start space-y-2", children: exampleMessages.map((message, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)(
      Button2,
      {
        variant: "link",
        className: "h-auto p-0 text-base",
        onClick: () => setInput(message.message),
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)(IconArrowRight, { className: "mr-2 text-muted-foreground" }, void 0, !1, {
            fileName: "app/components/empty-screen.tsx",
            lineNumber: 48,
            columnNumber: 15
          }, this),
          message.heading
        ]
      },
      index,
      !0,
      {
        fileName: "app/components/empty-screen.tsx",
        lineNumber: 42,
        columnNumber: 13
      },
      this
    )) }, void 0, !1, {
      fileName: "app/components/empty-screen.tsx",
      lineNumber: 40,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/empty-screen.tsx",
    lineNumber: 25,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/empty-screen.tsx",
    lineNumber: 24,
    columnNumber: 5
  }, this);
}

// app/components/ui/input.tsx
var React11 = __toESM(require("react"));
var import_jsx_dev_runtime46 = require("react/jsx-dev-runtime"), Input = React11.forwardRef(
  ({ className, type, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)(
    "input",
    {
      type,
      className: cn(
        "flex h-10 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:bg-slate-950 dark:ring-offset-slate-950 dark:placeholder:text-slate-400 dark:focus-visible:ring-slate-300",
        className
      ),
      ref,
      ...props
    },
    void 0,
    !1,
    {
      fileName: "app/components/ui/input.tsx",
      lineNumber: 11,
      columnNumber: 7
    },
    this
  )
);
Input.displayName = "Input";

// app/lib/hooks/use-local-storage.ts
var import_react20 = require("react"), useLocalStorage = (key, initialValue) => {
  let [storedValue, setStoredValue] = (0, import_react20.useState)(initialValue);
  return (0, import_react20.useEffect)(() => {
    let item = window.localStorage.getItem(key);
    item && setStoredValue(JSON.parse(item));
  }, [key]), [storedValue, (value) => {
    setStoredValue(value), window.localStorage.setItem(key, JSON.stringify(value));
  }];
};

// app/components/chat.tsx
var import_jsx_dev_runtime47 = require("react/jsx-dev-runtime");
function Chat({ id, initialMessages, className }) {
  let navigate = (0, import_react21.useNavigate)(), path = (0, import_react21.useLocation)().pathname, [previewToken, setPreviewToken] = useLocalStorage(
    "ai-token",
    null
  ), [previewTokenDialog, setPreviewTokenDialog] = (0, import_react23.useState)(!1), [previewTokenInput, setPreviewTokenInput] = (0, import_react23.useState)(
    previewToken ?? ""
  ), { messages, append, reload, stop, isLoading, input, setInput } = (0, import_react22.useChat)({
    initialMessages,
    id,
    body: {
      id,
      previewToken
    },
    onResponse(response) {
      response.status === 401 && import_react_hot_toast2.toast.error(response.statusText);
    },
    onFinish() {
      path.includes("chat") || navigate(`/ai/chat/${id}`, { replace: !0 });
    }
  });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(import_jsx_dev_runtime47.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)("div", { className: cn("pb-[200px] pt-4 md:pt-10", className), children: messages.length ? /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(import_jsx_dev_runtime47.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(ChatList, { messages }, void 0, !1, {
        fileName: "app/components/chat.tsx",
        lineNumber: 69,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(ChatScrollAnchor, { trackVisibility: isLoading }, void 0, !1, {
        fileName: "app/components/chat.tsx",
        lineNumber: 70,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/chat.tsx",
      lineNumber: 68,
      columnNumber: 11
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(EmptyScreen, { setInput }, void 0, !1, {
      fileName: "app/components/chat.tsx",
      lineNumber: 73,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/components/chat.tsx",
      lineNumber: 66,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(
      ChatPanel,
      {
        id,
        isLoading,
        stop,
        append,
        reload,
        messages,
        input,
        setInput
      },
      void 0,
      !1,
      {
        fileName: "app/components/chat.tsx",
        lineNumber: 76,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(Dialog, { open: previewTokenDialog, onOpenChange: setPreviewTokenDialog, children: /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(DialogContent, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(DialogHeader, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(DialogTitle, { children: "Enter your OpenAI Key" }, void 0, !1, {
          fileName: "app/components/chat.tsx",
          lineNumber: 90,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(DialogDescription, { children: [
          "If you have not obtained your OpenAI API key, you can do so by",
          " ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(
            "a",
            {
              href: "https://platform.openai.com/signup/",
              className: "underline",
              children: "signing up"
            },
            void 0,
            !1,
            {
              fileName: "app/components/chat.tsx",
              lineNumber: 93,
              columnNumber: 15
            },
            this
          ),
          " ",
          "on the OpenAI website. This is only necessary for preview environments so that the open source community can test the app. The token will be saved to your browser's local storage under the name ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)("code", { className: "font-mono", children: "ai-token" }, void 0, !1, {
            fileName: "app/components/chat.tsx",
            lineNumber: 102,
            columnNumber: 24
          }, this),
          "."
        ] }, void 0, !0, {
          fileName: "app/components/chat.tsx",
          lineNumber: 91,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/chat.tsx",
        lineNumber: 89,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(
        Input,
        {
          value: previewTokenInput,
          placeholder: "OpenAI API key",
          onChange: (e) => setPreviewTokenInput(e.target.value)
        },
        void 0,
        !1,
        {
          fileName: "app/components/chat.tsx",
          lineNumber: 105,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(DialogFooter, { className: "items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(
        Button2,
        {
          onClick: () => {
            setPreviewToken(previewTokenInput), setPreviewTokenDialog(!1);
          },
          children: "Save Token"
        },
        void 0,
        !1,
        {
          fileName: "app/components/chat.tsx",
          lineNumber: 111,
          columnNumber: 13
        },
        this
      ) }, void 0, !1, {
        fileName: "app/components/chat.tsx",
        lineNumber: 110,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/chat.tsx",
      lineNumber: 88,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/chat.tsx",
      lineNumber: 87,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/chat.tsx",
    lineNumber: 65,
    columnNumber: 5
  }, this);
}

// app/components/chat-history.tsx
var import_react29 = require("@remix-run/react"), React17 = __toESM(require("react"));

// app/components/sidebar-list.tsx
var import_react28 = require("@remix-run/react");

// app/components/clear-history.tsx
var import_react24 = require("@remix-run/react"), React14 = __toESM(require("react")), import_react_hot_toast3 = require("react-hot-toast");

// app/components/ui/alert-dialog.tsx
var React13 = __toESM(require("react")), AlertDialogPrimitive = __toESM(require("@radix-ui/react-alert-dialog"));
var import_jsx_dev_runtime48 = require("react/jsx-dev-runtime"), AlertDialog = AlertDialogPrimitive.Root, AlertDialogTrigger = AlertDialogPrimitive.Trigger, AlertDialogPortal = AlertDialogPrimitive.Portal, AlertDialogOverlay = React13.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime48.jsxDEV)(
  AlertDialogPrimitive.Overlay,
  {
    className: cn(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    ),
    ...props,
    ref
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/alert-dialog.tsx",
    lineNumber: 17,
    columnNumber: 3
  },
  this
));
AlertDialogOverlay.displayName = AlertDialogPrimitive.Overlay.displayName;
var AlertDialogContent = React13.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime48.jsxDEV)(AlertDialogPortal, { children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime48.jsxDEV)(AlertDialogOverlay, {}, void 0, !1, {
    fileName: "app/components/ui/alert-dialog.tsx",
    lineNumber: 33,
    columnNumber: 5
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime48.jsxDEV)(
    AlertDialogPrimitive.Content,
    {
      ref,
      className: cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border border-slate-200 bg-white p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg dark:border-slate-800 dark:bg-slate-950",
        className
      ),
      ...props
    },
    void 0,
    !1,
    {
      fileName: "app/components/ui/alert-dialog.tsx",
      lineNumber: 34,
      columnNumber: 5
    },
    this
  )
] }, void 0, !0, {
  fileName: "app/components/ui/alert-dialog.tsx",
  lineNumber: 32,
  columnNumber: 3
}, this));
AlertDialogContent.displayName = AlertDialogPrimitive.Content.displayName;
var AlertDialogHeader = ({
  className,
  ...props
}) => /* @__PURE__ */ (0, import_jsx_dev_runtime48.jsxDEV)(
  "div",
  {
    className: cn(
      "flex flex-col space-y-2 text-center sm:text-left",
      className
    ),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/alert-dialog.tsx",
    lineNumber: 50,
    columnNumber: 3
  },
  this
);
AlertDialogHeader.displayName = "AlertDialogHeader";
var AlertDialogFooter = ({
  className,
  ...props
}) => /* @__PURE__ */ (0, import_jsx_dev_runtime48.jsxDEV)(
  "div",
  {
    className: cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className
    ),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/alert-dialog.tsx",
    lineNumber: 64,
    columnNumber: 3
  },
  this
);
AlertDialogFooter.displayName = "AlertDialogFooter";
var AlertDialogTitle = React13.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime48.jsxDEV)(
  AlertDialogPrimitive.Title,
  {
    ref,
    className: cn("text-lg font-semibold", className),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/alert-dialog.tsx",
    lineNumber: 78,
    columnNumber: 3
  },
  this
));
AlertDialogTitle.displayName = AlertDialogPrimitive.Title.displayName;
var AlertDialogDescription = React13.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime48.jsxDEV)(
  AlertDialogPrimitive.Description,
  {
    ref,
    className: cn("text-sm text-slate-500 dark:text-slate-400", className),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/alert-dialog.tsx",
    lineNumber: 90,
    columnNumber: 3
  },
  this
));
AlertDialogDescription.displayName = AlertDialogPrimitive.Description.displayName;
var AlertDialogAction = React13.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime48.jsxDEV)(
  AlertDialogPrimitive.Action,
  {
    ref,
    className: cn(buttonVariants(), className),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/alert-dialog.tsx",
    lineNumber: 103,
    columnNumber: 3
  },
  this
));
AlertDialogAction.displayName = AlertDialogPrimitive.Action.displayName;
var AlertDialogCancel = React13.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime48.jsxDEV)(
  AlertDialogPrimitive.Cancel,
  {
    ref,
    className: cn(
      buttonVariants({ variant: "outline" }),
      "mt-2 sm:mt-0",
      className
    ),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/alert-dialog.tsx",
    lineNumber: 115,
    columnNumber: 3
  },
  this
));
AlertDialogCancel.displayName = AlertDialogPrimitive.Cancel.displayName;

// app/components/clear-history.tsx
var import_jsx_dev_runtime49 = require("react/jsx-dev-runtime");
function ClearHistory({
  isEnabled = !1
  // clearChats,
}) {
  let [open, setOpen] = React14.useState(!1), fetcher = (0, import_react24.useFetcher)(), isPending = fetcher.state === "submitting", navigate = (0, import_react24.useNavigate)();
  return React14.useEffect(() => {
    fetcher.data && !isPending && (fetcher.data.error ? import_react_hot_toast3.toast.error(fetcher.data.error) : (setOpen(!1), navigate("/ai", { state: { showSuccessToast: !0 } }), import_react_hot_toast3.toast.success("Chat history cleared successfully.", {
      style: {
        borderRadius: "10px",
        background: "#333",
        color: "#fff",
        fontSize: "14px"
      },
      iconTheme: {
        primary: "white",
        secondary: "black"
      }
    })));
  }, [fetcher.data, isPending, navigate]), /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)(AlertDialog, { open, onOpenChange: setOpen, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)(AlertDialogTrigger, { asChild: !0, children: /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)(Button2, { className: "bg-blue-600", disabled: !isEnabled || isPending, children: [
      isPending ? /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)(IconSpinner, { className: "mr-2" }, void 0, !1, {
        fileName: "app/components/clear-history.tsx",
        lineNumber: 75,
        columnNumber: 24
      }, this) : null,
      "Clear history"
    ] }, void 0, !0, {
      fileName: "app/components/clear-history.tsx",
      lineNumber: 74,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/clear-history.tsx",
      lineNumber: 73,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)(AlertDialogContent, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)(AlertDialogHeader, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)(AlertDialogTitle, { children: "Are you absolutely sure?" }, void 0, !1, {
          fileName: "app/components/clear-history.tsx",
          lineNumber: 81,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)(AlertDialogDescription, { children: "This will permanently delete your chat history and remove your data from our servers." }, void 0, !1, {
          fileName: "app/components/clear-history.tsx",
          lineNumber: 82,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/clear-history.tsx",
        lineNumber: 80,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)(AlertDialogFooter, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)(AlertDialogCancel, { disabled: isPending, children: "Cancel" }, void 0, !1, {
          fileName: "app/components/clear-history.tsx",
          lineNumber: 88,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)(
          AlertDialogAction,
          {
            disabled: isPending,
            onClick: (event) => {
              event.preventDefault(), fetcher.submit(
                {
                  intent: "clear"
                },
                // Adjust according to your data structure
                { method: "post", action: "/ai" }
                // Adjust the action path
              );
            },
            children: [
              isPending ? /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)(IconSpinner, { className: "mr-2 animate-spin" }, void 0, !1, {
                fileName: "app/components/clear-history.tsx",
                lineNumber: 115,
                columnNumber: 26
              }, this) : null,
              "Delete"
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/components/clear-history.tsx",
            lineNumber: 89,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/components/clear-history.tsx",
        lineNumber: 87,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/clear-history.tsx",
      lineNumber: 79,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/clear-history.tsx",
    lineNumber: 72,
    columnNumber: 5
  }, this);
}

// app/components/sidebar-items.tsx
var import_framer_motion2 = require("framer-motion");

// app/components/sidebar-actions.tsx
var import_react25 = require("@remix-run/react"), React15 = __toESM(require("react")), import_react_hot_toast4 = require("react-hot-toast");
var import_jsx_dev_runtime50 = require("react/jsx-dev-runtime");
function SidebarActions({
  chat,
  // removeChat,
  shareChat: shareChat2
}) {
  let fetcher = (0, import_react25.useFetcher)(), isRemovePending = fetcher.state === "submitting", [deleteDialogOpen, setDeleteDialogOpen] = React15.useState(!1), [shareDialogOpen, setShareDialogOpen] = React15.useState(!1), navigate = (0, import_react25.useNavigate)(), fetcherDataRef = React15.useRef();
  return React15.useEffect(() => {
    console.log("fetcher data for delete", fetcher.data), fetcher.data !== fetcherDataRef.current && (fetcherDataRef.current = fetcher.data, fetcher.data && (fetcher.data.error ? import_react_hot_toast4.toast.error(fetcher.data.error) : (setDeleteDialogOpen(!1), import_react_hot_toast4.toast.success("Chat deleted successfully."), navigate("/ai"))));
  }, [fetcher, navigate]), /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)(import_jsx_dev_runtime50.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)("div", { className: "space-x-1", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)(Tooltip, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)(TooltipTrigger, { asChild: !0, children: /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)(
          Button2,
          {
            variant: "ghost",
            className: "size-6 p-0 hover:bg-background",
            onClick: () => setShareDialogOpen(!0),
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)(IconShare, {}, void 0, !1, {
                fileName: "app/components/sidebar-actions.tsx",
                lineNumber: 79,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)("span", { className: "sr-only", children: "Share" }, void 0, !1, {
                fileName: "app/components/sidebar-actions.tsx",
                lineNumber: 80,
                columnNumber: 15
              }, this)
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/components/sidebar-actions.tsx",
            lineNumber: 74,
            columnNumber: 13
          },
          this
        ) }, void 0, !1, {
          fileName: "app/components/sidebar-actions.tsx",
          lineNumber: 73,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)(TooltipContent, { children: "Share chat" }, void 0, !1, {
          fileName: "app/components/sidebar-actions.tsx",
          lineNumber: 83,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/sidebar-actions.tsx",
        lineNumber: 72,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)(Tooltip, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)(TooltipTrigger, { asChild: !0, children: /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)(
          Button2,
          {
            variant: "ghost",
            className: "size-6 p-0 hover:bg-background",
            disabled: isRemovePending,
            onClick: () => setDeleteDialogOpen(!0),
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)(IconTrash, {}, void 0, !1, {
                fileName: "app/components/sidebar-actions.tsx",
                lineNumber: 93,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)("span", { className: "sr-only", children: "Delete" }, void 0, !1, {
                fileName: "app/components/sidebar-actions.tsx",
                lineNumber: 94,
                columnNumber: 15
              }, this)
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/components/sidebar-actions.tsx",
            lineNumber: 87,
            columnNumber: 13
          },
          this
        ) }, void 0, !1, {
          fileName: "app/components/sidebar-actions.tsx",
          lineNumber: 86,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)(TooltipContent, { children: "Delete chat" }, void 0, !1, {
          fileName: "app/components/sidebar-actions.tsx",
          lineNumber: 97,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/sidebar-actions.tsx",
        lineNumber: 85,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/sidebar-actions.tsx",
      lineNumber: 71,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)(
      ChatShareDialog,
      {
        chat,
        open: shareDialogOpen,
        onOpenChange: setShareDialogOpen,
        onCopy: () => setShareDialogOpen(!1)
      },
      void 0,
      !1,
      {
        fileName: "app/components/sidebar-actions.tsx",
        lineNumber: 100,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)(AlertDialog, { open: deleteDialogOpen, onOpenChange: setDeleteDialogOpen, children: /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)(AlertDialogContent, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)(AlertDialogHeader, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)(AlertDialogTitle, { children: "Are you absolutely sure?" }, void 0, !1, {
          fileName: "app/components/sidebar-actions.tsx",
          lineNumber: 110,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)(AlertDialogDescription, { children: "This will permanently delete your chat message and remove your data from our servers." }, void 0, !1, {
          fileName: "app/components/sidebar-actions.tsx",
          lineNumber: 111,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/sidebar-actions.tsx",
        lineNumber: 109,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)(AlertDialogFooter, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)(AlertDialogCancel, { disabled: isRemovePending, children: "Cancel" }, void 0, !1, {
          fileName: "app/components/sidebar-actions.tsx",
          lineNumber: 117,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)(
          AlertDialogAction,
          {
            disabled: isRemovePending,
            name: "intent",
            onClick: (event) => {
              event.preventDefault(), fetcher.submit(
                {
                  id: chat.id,
                  // path: chat.path,
                  userId: chat.userId,
                  intent: "delete"
                },
                // Adjust according to your data structure
                { method: "post", action: "/ai" }
                // Adjust the action path
              );
            },
            children: [
              isRemovePending ? /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)(IconSpinner, { className: "mr-2 animate-spin" }, void 0, !1, {
                fileName: "app/components/sidebar-actions.tsx",
                lineNumber: 137,
                columnNumber: 17
              }, this) : null,
              "Delete"
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/components/sidebar-actions.tsx",
            lineNumber: 120,
            columnNumber: 13
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/components/sidebar-actions.tsx",
        lineNumber: 116,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/sidebar-actions.tsx",
      lineNumber: 108,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/sidebar-actions.tsx",
      lineNumber: 107,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/sidebar-actions.tsx",
    lineNumber: 70,
    columnNumber: 5
  }, this);
}

// app/components/sidebar-item.tsx
var import_react26 = require("@remix-run/react"), import_framer_motion = require("framer-motion");
var import_jsx_dev_runtime51 = require("react/jsx-dev-runtime");
function SidebarItem({ index, chat, children }) {
  let location = (0, import_react26.useLocation)();
  console.log(location.pathname, chat.path, "location");
  let isActive = location.pathname === `/ai${chat.path}`, [newChatId, setNewChatId] = useLocalStorage("newChatId", null), shouldAnimate = index === 0 && isActive && newChatId;
  return console.log(shouldAnimate, "shouldAnimate"), chat?.id ? /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(
    import_framer_motion.motion.div,
    {
      className: "relative h-8",
      variants: {
        initial: {
          height: 0,
          opacity: 0
        },
        animate: {
          height: "auto",
          opacity: 1
        }
      },
      initial: shouldAnimate ? "initial" : void 0,
      animate: shouldAnimate ? "animate" : void 0,
      transition: {
        duration: 0.25,
        ease: "easeIn"
      },
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)("div", { className: "absolute left-2 top-1 flex size-6 items-center justify-center", children: chat.sharePath ? /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(Tooltip, { delayDuration: 1e3, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(
            TooltipTrigger,
            {
              tabIndex: -1,
              className: "focus:bg-muted focus:ring-1 focus:ring-ring",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(IconUsers, { className: "mr-2" }, void 0, !1, {
                fileName: "app/components/sidebar-item.tsx",
                lineNumber: 62,
                columnNumber: 15
              }, this)
            },
            void 0,
            !1,
            {
              fileName: "app/components/sidebar-item.tsx",
              lineNumber: 58,
              columnNumber: 13
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(TooltipContent, { children: "This is a shared chat." }, void 0, !1, {
            fileName: "app/components/sidebar-item.tsx",
            lineNumber: 64,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/sidebar-item.tsx",
          lineNumber: 57,
          columnNumber: 11
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(IconMessage, { className: "mr-2" }, void 0, !1, {
          fileName: "app/components/sidebar-item.tsx",
          lineNumber: 67,
          columnNumber: 11
        }, this) }, void 0, !1, {
          fileName: "app/components/sidebar-item.tsx",
          lineNumber: 55,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(
          import_react26.Link,
          {
            to: `/ai${chat.path}`,
            className: cn(
              buttonVariants({ variant: "ghost" }),
              "group w-full px-8 transition-colors hover:bg-zinc-200/40 dark:hover:bg-zinc-300/10",
              isActive && "bg-zinc-200 pr-16 font-semibold dark:bg-zinc-800"
            ),
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(
              "div",
              {
                className: "relative max-h-5 flex-1 select-none overflow-hidden text-ellipsis break-all",
                title: chat.title,
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)("span", { className: "whitespace-nowrap", children: shouldAnimate ? chat.title.split("").map((character, index2) => /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(
                  import_framer_motion.motion.span,
                  {
                    variants: {
                      initial: {
                        opacity: 0,
                        x: -100
                      },
                      animate: {
                        opacity: 1,
                        x: 0
                      }
                    },
                    initial: shouldAnimate ? "initial" : void 0,
                    animate: shouldAnimate ? "animate" : void 0,
                    transition: {
                      duration: 0.25,
                      ease: "easeIn",
                      delay: index2 * 0.05,
                      staggerChildren: 0.05
                    },
                    onAnimationComplete: () => {
                      index2 === chat.title.length - 1 && setNewChatId(null);
                    },
                    children: character
                  },
                  index2,
                  !1,
                  {
                    fileName: "app/components/sidebar-item.tsx",
                    lineNumber: 85,
                    columnNumber: 17
                  },
                  this
                )) : /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)("span", { children: chat.title }, void 0, !1, {
                  fileName: "app/components/sidebar-item.tsx",
                  lineNumber: 115,
                  columnNumber: 15
                }, this) }, void 0, !1, {
                  fileName: "app/components/sidebar-item.tsx",
                  lineNumber: 82,
                  columnNumber: 11
                }, this)
              },
              void 0,
              !1,
              {
                fileName: "app/components/sidebar-item.tsx",
                lineNumber: 78,
                columnNumber: 9
              },
              this
            )
          },
          void 0,
          !1,
          {
            fileName: "app/components/sidebar-item.tsx",
            lineNumber: 70,
            columnNumber: 7
          },
          this
        ),
        isActive ? /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)("div", { className: "absolute right-2 top-1", children }, void 0, !1, {
          fileName: "app/components/sidebar-item.tsx",
          lineNumber: 121,
          columnNumber: 9
        }, this) : null
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/sidebar-item.tsx",
      lineNumber: 36,
      columnNumber: 5
    },
    this
  ) : null;
}

// app/components/sidebar-items.tsx
var import_jsx_dev_runtime52 = require("react/jsx-dev-runtime");
function SidebarItems({ chats }) {
  let user = useUser();
  return chats?.length ? /* @__PURE__ */ (0, import_jsx_dev_runtime52.jsxDEV)(import_framer_motion2.AnimatePresence, { children: chats.map(
    (chat, index) => chat && /* @__PURE__ */ (0, import_jsx_dev_runtime52.jsxDEV)(
      import_framer_motion2.motion.div,
      {
        exit: {
          opacity: 0,
          height: 0
        },
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime52.jsxDEV)(SidebarItem, { index, chat, children: /* @__PURE__ */ (0, import_jsx_dev_runtime52.jsxDEV)(
          SidebarActions,
          {
            chat,
            shareChat: (id) => shareChat(id, user.id)
          },
          void 0,
          !1,
          {
            fileName: "app/components/sidebar-items.tsx",
            lineNumber: 35,
            columnNumber: 17
          },
          this
        ) }, void 0, !1, {
          fileName: "app/components/sidebar-items.tsx",
          lineNumber: 34,
          columnNumber: 15
        }, this)
      },
      chat?.id,
      !1,
      {
        fileName: "app/components/sidebar-items.tsx",
        lineNumber: 27,
        columnNumber: 13
      },
      this
    )
  ) }, void 0, !1, {
    fileName: "app/components/sidebar-items.tsx",
    lineNumber: 23,
    columnNumber: 5
  }, this) : null;
}

// app/components/theme-toggle.tsx
var import_react_hot_toast5 = __toESM(require("react-hot-toast"));

// app/context/theme-context.tsx
var import_react27 = require("react"), import_jsx_dev_runtime53 = require("react/jsx-dev-runtime"), defaultContextValue = {
  theme: "light",
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  toggleTheme: () => {
  }
  // This now matches the expected type
}, ThemeContext = (0, import_react27.createContext)(defaultContextValue), ThemeProvider2 = ({
  children
}) => {
  let [theme, setTheme] = (0, import_react27.useState)("light");
  (0, import_react27.useEffect)(() => {
    let storedTheme = localStorage.getItem("theme");
    if (storedTheme)
      setTheme(storedTheme);
    else {
      let systemPreference = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
      setTheme(systemPreference);
    }
  }, []), (0, import_react27.useEffect)(() => {
    document.body.className = theme, localStorage.setItem("theme", theme);
  }, [theme]);
  let toggleTheme = () => {
    setTheme((prevTheme) => prevTheme === "light" ? "dark" : "light");
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime53.jsxDEV)(
    ThemeContext.Provider,
    {
      value: { theme, toggleTheme },
      children
    },
    void 0,
    !1,
    {
      fileName: "app/context/theme-context.tsx",
      lineNumber: 45,
      columnNumber: 5
    },
    this
  );
}, useTheme2 = () => (0, import_react27.useContext)(ThemeContext);

// app/components/theme-toggle.tsx
var import_jsx_dev_runtime54 = require("react/jsx-dev-runtime");
function ThemeToggle() {
  let { toggleTheme, theme } = useTheme2();
  return (
    // <Button variant="ghost" size="icon" onClick={toggleTheme}>
    /* @__PURE__ */ (0, import_jsx_dev_runtime54.jsxDEV)(
      Button2,
      {
        className: "bg-blue-600 text-white",
        size: "icon",
        onClick: () => import_react_hot_toast5.default.success("Theme changed"),
        children: [
          theme === "dark" ? /* @__PURE__ */ (0, import_jsx_dev_runtime54.jsxDEV)(IconMoon, { className: "transition-all" }, void 0, !1, {
            fileName: "app/components/theme-toggle.tsx",
            lineNumber: 19,
            columnNumber: 9
          }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime54.jsxDEV)(IconSun, { className: "transition-all" }, void 0, !1, {
            fileName: "app/components/theme-toggle.tsx",
            lineNumber: 21,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime54.jsxDEV)("span", { className: "sr-only", children: "Toggle theme" }, void 0, !1, {
            fileName: "app/components/theme-toggle.tsx",
            lineNumber: 23,
            columnNumber: 7
          }, this)
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/components/theme-toggle.tsx",
        lineNumber: 13,
        columnNumber: 5
      },
      this
    )
  );
}

// app/components/sidebar-list.tsx
var import_jsx_dev_runtime55 = require("react/jsx-dev-runtime");
function SidebarList({ userId }) {
  let { chats } = (0, import_react28.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime55.jsxDEV)("div", { className: "flex flex-1 flex-col overflow-hidden", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime55.jsxDEV)("div", { className: "flex-1 overflow-auto", children: chats?.length ? /* @__PURE__ */ (0, import_jsx_dev_runtime55.jsxDEV)("div", { className: "space-y-2 px-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime55.jsxDEV)(SidebarItems, { chats }, void 0, !1, {
      fileName: "app/components/sidebar-list.tsx",
      lineNumber: 36,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/components/sidebar-list.tsx",
      lineNumber: 35,
      columnNumber: 11
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime55.jsxDEV)("div", { className: "p-8 text-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime55.jsxDEV)("p", { className: "text-sm text-muted-foreground", children: "No chat history" }, void 0, !1, {
      fileName: "app/components/sidebar-list.tsx",
      lineNumber: 40,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/components/sidebar-list.tsx",
      lineNumber: 39,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/components/sidebar-list.tsx",
      lineNumber: 33,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime55.jsxDEV)("div", { className: "flex items-center justify-between p-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime55.jsxDEV)(ThemeToggle, {}, void 0, !1, {
        fileName: "app/components/sidebar-list.tsx",
        lineNumber: 45,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime55.jsxDEV)(ClearHistory, { isEnabled: chats?.length > 0 }, void 0, !1, {
        fileName: "app/components/sidebar-list.tsx",
        lineNumber: 46,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/sidebar-list.tsx",
      lineNumber: 44,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/sidebar-list.tsx",
    lineNumber: 32,
    columnNumber: 5
  }, this);
}

// app/components/chat-history.tsx
var import_jsx_dev_runtime56 = require("react/jsx-dev-runtime");
function ChatHistory({ userId }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime56.jsxDEV)("div", { className: "flex flex-col h-full", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime56.jsxDEV)("div", { className: "px-2 my-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime56.jsxDEV)(
      import_react29.Link,
      {
        to: "/ai",
        className: cn(
          buttonVariants({ variant: "outline" }),
          "h-10 w-full justify-start bg-zinc-50 px-4 shadow-none transition-colors hover:bg-zinc-200/40 dark:bg-zinc-900 dark:hover:bg-zinc-300/10"
        ),
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime56.jsxDEV)(IconPlus, { className: "-translate-x-2 stroke-2" }, void 0, !1, {
            fileName: "app/components/chat-history.tsx",
            lineNumber: 25,
            columnNumber: 11
          }, this),
          "New Chat"
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/components/chat-history.tsx",
        lineNumber: 18,
        columnNumber: 9
      },
      this
    ) }, void 0, !1, {
      fileName: "app/components/chat-history.tsx",
      lineNumber: 17,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime56.jsxDEV)(
      React17.Suspense,
      {
        fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime56.jsxDEV)("div", { className: "flex flex-col flex-1 px-4 space-y-4 overflow-auto", children: Array.from({ length: 10 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime56.jsxDEV)(
          "div",
          {
            className: "w-full h-6 rounded-md shrink-0 animate-pulse bg-zinc-200 dark:bg-zinc-800"
          },
          i,
          !1,
          {
            fileName: "app/components/chat-history.tsx",
            lineNumber: 33,
            columnNumber: 15
          },
          this
        )) }, void 0, !1, {
          fileName: "app/components/chat-history.tsx",
          lineNumber: 31,
          columnNumber: 11
        }, this),
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime56.jsxDEV)(SidebarList, { userId }, void 0, !1, {
          fileName: "app/components/chat-history.tsx",
          lineNumber: 41,
          columnNumber: 9
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/components/chat-history.tsx",
        lineNumber: 29,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/chat-history.tsx",
    lineNumber: 16,
    columnNumber: 5
  }, this);
}

// app/lib/hooks/use-sidebar.tsx
var React18 = __toESM(require("react")), import_jsx_dev_runtime57 = require("react/jsx-dev-runtime"), LOCAL_STORAGE_KEY = "sidebar", SidebarContext = React18.createContext(
  void 0
);
function useSidebar() {
  let context = React18.useContext(SidebarContext);
  if (!context)
    throw new Error("useSidebarContext must be used within a SidebarProvider");
  return context;
}
function SidebarProvider({ children }) {
  let [isSidebarOpen, setSidebarOpen] = React18.useState(!0), [isLoading, setLoading] = React18.useState(!0);
  React18.useEffect(() => {
    let value = localStorage.getItem(LOCAL_STORAGE_KEY);
    value && setSidebarOpen(JSON.parse(value)), setLoading(!1);
  }, []);
  let toggleSidebar = () => {
    setSidebarOpen((value) => {
      let newState = !value;
      return localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newState)), newState;
    });
  };
  return isLoading ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime57.jsxDEV)(
    SidebarContext.Provider,
    {
      value: { isSidebarOpen, toggleSidebar, isLoading },
      children
    },
    void 0,
    !1,
    {
      fileName: "app/lib/hooks/use-sidebar.tsx",
      lineNumber: 52,
      columnNumber: 5
    },
    this
  );
}

// app/components/sidebar.tsx
var import_jsx_dev_runtime58 = require("react/jsx-dev-runtime");
function Sidebar({ className, children }) {
  let { isSidebarOpen, isLoading } = useSidebar();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(
    "div",
    {
      "data-state": isSidebarOpen && !isLoading ? "open" : "closed",
      className: cn(className, "h-full flex-col bg-slate-100 dark:bg-zinc-950"),
      children
    },
    void 0,
    !1,
    {
      fileName: "app/components/sidebar.tsx",
      lineNumber: 14,
      columnNumber: 5
    },
    this
  );
}

// app/components/sidebar-desktop.tsx
var import_jsx_dev_runtime59 = require("react/jsx-dev-runtime");
function SidebarDesktop() {
  let user = useUser();
  return console.log("user", user), /* @__PURE__ */ (0, import_jsx_dev_runtime59.jsxDEV)(Sidebar, { className: "peer absolute inset-y-0 z-30 hidden -translate-x-full border-r bg-muted duration-300 ease-in-out data-[state=open]:translate-x-0 lg:flex lg:w-[250px] xl:w-[300px]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime59.jsxDEV)(ChatHistory, { userId: user.id }, void 0, !1, {
    fileName: "app/components/sidebar-desktop.tsx",
    lineNumber: 17,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/sidebar-desktop.tsx",
    lineNumber: 16,
    columnNumber: 5
  }, this);
}

// app/routes/ai.chat_.$id.tsx
var import_jsx_dev_runtime60 = require("react/jsx-dev-runtime"), loader4 = async ({ request, params }) => {
  let userId = await requireUserId(request), id = params.id, chat = await getChat(id ?? "", userId), chats = await getChats(userId);
  if (!chat)
    throw new Response("Not Found", { status: 404 });
  if (!chats)
    throw new Response("Not Found", { status: 404 });
  return (0, import_node6.json)({ chat, chats });
};
function ChatPage() {
  let { chat } = (0, import_react30.useLoaderData)(), messages = chat.messages.map((message) => ({
    ...message,
    createdAt: message.createdAt ? new Date(message.createdAt) : void 0,
    ui: message.ui ? JSON.stringify(message.ui) : void 0
    // Convert ui to string
  }));
  return /* @__PURE__ */ (0, import_jsx_dev_runtime60.jsxDEV)("div", { className: "relative flex h-[calc(100vh_-_theme(spacing.16))] overflow-hidden", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime60.jsxDEV)(SidebarDesktop, {}, void 0, !1, {
      fileName: "app/routes/ai.chat_.$id.tsx",
      lineNumber: 59,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime60.jsxDEV)("div", { className: "group w-full overflow-auto pl-0 animate-in duration-300 ease-in-out peer-[[data-state=open]]:lg:pl-[250px] peer-[[data-state=open]]:xl:pl-[300px]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime60.jsxDEV)(Chat, { id: chat.id, initialMessages: messages }, void 0, !1, {
      fileName: "app/routes/ai.chat_.$id.tsx",
      lineNumber: 61,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/ai.chat_.$id.tsx",
      lineNumber: 60,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/ai.chat_.$id.tsx",
    lineNumber: 58,
    columnNumber: 5
  }, this);
}

// app/routes/notes._index.tsx
var notes_index_exports = {};
__export(notes_index_exports, {
  default: () => NoteIndexPage
});
var import_react31 = require("@remix-run/react"), import_jsx_dev_runtime61 = require("react/jsx-dev-runtime");
function NoteIndexPage() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime61.jsxDEV)("p", { children: [
    "No note selected. Select a note on the left, or",
    " ",
    /* @__PURE__ */ (0, import_jsx_dev_runtime61.jsxDEV)(import_react31.Link, { to: "new", className: "text-blue-500 underline", children: "create a new note." }, void 0, !1, {
      fileName: "app/routes/notes._index.tsx",
      lineNumber: 7,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/notes._index.tsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

// app/routes/healthcheck.tsx
var healthcheck_exports = {};
__export(healthcheck_exports, {
  loader: () => loader5
});
var loader5 = async ({ request }) => {
  let host = request.headers.get("X-Forwarded-Host") ?? request.headers.get("host");
  try {
    let url = new URL("/", `http://${host}`);
    return await Promise.all([
      prisma.user.count(),
      fetch(url.toString(), { method: "HEAD" }).then((r) => {
        if (!r.ok)
          return Promise.reject(r);
      })
    ]), new Response("OK");
  } catch (error) {
    return console.log("healthcheck \u274C", { error }), new Response("ERROR", { status: 500 });
  }
};

// app/routes/home.invopt.tsx
var home_invopt_exports = {};
__export(home_invopt_exports, {
  default: () => Inventoryopt
});

// app/components/Inventoryoptimization.jsx
var import_react32 = require("@remix-run/react");

// app/images/inventoryOpt.png
var inventoryOpt_default = "/build/_assets/inventoryOpt-C2EPDLEO.png";

// app/components/Inventoryoptimization.jsx
var import_jsx_dev_runtime62 = require("react/jsx-dev-runtime"), trans6 = [
  {
    title: "Return on Investment",
    icon: "impact",
    to: "/",
    description: "250%"
  },
  {
    title: "Faster Approval Times",
    icon: "impact",
    to: "/",
    description: "50%"
  },
  {
    title: "Reduced Inventory",
    icon: "impact",
    to: "/",
    description: "45%"
  }
], kpiCards7 = [
  {
    title: "Increased forecast accuracy",
    icon: "perform",
    to: "/",
    description: "Dynamic segmentation enables increased forecast accuracy, allowing you to achieve more accurate inventory positioning in the network and higher fill rates."
  },
  {
    title: "Strategic plan alignment",
    icon: "perform",
    to: "/",
    description: "Align inventory planning, inventory strategy, and inventory execution with your strategic business goals for service, production, and distribution."
  },
  {
    title: "Reduced inventory and waste",
    icon: "perform",
    to: "/",
    description: "Eliminate excess inventory and reduce obsolescence costs while maintaining a high level of customer service."
  },
  {
    title: "Improved customer service",
    icon: "perform",
    to: "/",
    description: "Service-level aware inventory positioning combined with predict and pivot capabilities ensures higher fill rates and better OTIF."
  },
  {
    title: "Improved flexibility and accuracy",
    icon: "perform",
    to: "/",
    description: "Quickly adapt inventory policies and stocking strategies to address changing market conditions."
  },
  {
    title: "Optimized inventory investment",
    icon: "perform",
    to: "/",
    description: "Reduce inventory investment through multi-echelon inventory optimization and dynamic segmentation."
  }
];
function Inventoryoptimization() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime62.jsxDEV)(import_jsx_dev_runtime62.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime62.jsxDEV)("header", { className: "space-y-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime62.jsxDEV)("p", { className: "font-display text-sm font-medium text-sky-500", children: "Plan - Optimization Engine" }, void 0, !1, {
      fileName: "app/components/Inventoryoptimization.jsx",
      lineNumber: 74,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/Inventoryoptimization.jsx",
      lineNumber: 73,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime62.jsxDEV)("div", { className: "grid grid-cols-3 gap-2 lg:flex", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime62.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime62.jsxDEV)("div", { className: "relative ", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime62.jsxDEV)("p", { className: "inline bg-gradient-to-r from-indigo-200 via-sky-400 to-indigo-200 bg-clip-text font-display text-5xl font-bold tracking-tight dark:text-transparent text-slate-900", children: "Inventory Optimization" }, void 0, !1, {
          fileName: "app/components/Inventoryoptimization.jsx",
          lineNumber: 81,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime62.jsxDEV)("p", { className: "mt-2 text-lg  text-slate-800 dark:text-white", children: "Across industries, organizations like yours are pivoting to manage increasingly complex supply chains, while juggling delivery expectations and cost." }, void 0, !1, {
          fileName: "app/components/Inventoryoptimization.jsx",
          lineNumber: 84,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/Inventoryoptimization.jsx",
        lineNumber: 80,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/components/Inventoryoptimization.jsx",
        lineNumber: 79,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime62.jsxDEV)("div", { className: "col-span-2 flex items-center rounded-xl", children: /* @__PURE__ */ (0, import_jsx_dev_runtime62.jsxDEV)("div", { className: "not-prose flex items-center ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime62.jsxDEV)(
        "img",
        {
          className: "rounded-lg",
          src: inventoryOpt_default,
          alt: "",
          width: 800,
          height: 800
        },
        void 0,
        !1,
        {
          fileName: "app/components/Inventoryoptimization.jsx",
          lineNumber: 93,
          columnNumber: 13
        },
        this
      ) }, void 0, !1, {
        fileName: "app/components/Inventoryoptimization.jsx",
        lineNumber: 92,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/components/Inventoryoptimization.jsx",
        lineNumber: 91,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Inventoryoptimization.jsx",
      lineNumber: 78,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime62.jsxDEV)("div", { className: "border-b border-black my-12" }, void 0, !1, {
      fileName: "app/components/Inventoryoptimization.jsx",
      lineNumber: 104,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime62.jsxDEV)("h1", { className: "font-bold font-display text-3xl tracking-tight text-slate-900 dark:text-white", children: "Quantitative Impact" }, void 0, !1, {
      fileName: "app/components/Inventoryoptimization.jsx",
      lineNumber: 106,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime62.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime62.jsxDEV)("div", { className: "my-6 grid grid-cols-2 gap-6 lg:grid-cols-3", children: trans6.map((truck) => /* @__PURE__ */ (0, import_jsx_dev_runtime62.jsxDEV)(
      "div",
      {
        className: "group relative rounded-xl border border-slate-200 dark:border-slate-800",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime62.jsxDEV)("div", { className: "absolute -inset-px rounded-xl border-2 border-sky-950" }, void 0, !1, {
            fileName: "app/components/Inventoryoptimization.jsx",
            lineNumber: 117,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime62.jsxDEV)("div", { className: "relative overflow-hidden rounded-xl p-4", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime62.jsxDEV)("h2", { className: "flex justify-center font-display text-base text-slate-900 dark:text-white", children: /* @__PURE__ */ (0, import_jsx_dev_runtime62.jsxDEV)(import_react32.Link, { to: truck.to, children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime62.jsxDEV)("span", { className: "absolute -inset-px rounded-xl" }, void 0, !1, {
                fileName: "app/components/Inventoryoptimization.jsx",
                lineNumber: 122,
                columnNumber: 21
              }, this),
              truck.title
            ] }, void 0, !0, {
              fileName: "app/components/Inventoryoptimization.jsx",
              lineNumber: 121,
              columnNumber: 19
            }, this) }, void 0, !1, {
              fileName: "app/components/Inventoryoptimization.jsx",
              lineNumber: 120,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime62.jsxDEV)("div", { className: "flex justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime62.jsxDEV)("p", { className: "p-1 inline-block bg-gradient-blue bg-clip-text text-6xl font-bold text-slate-700 dark:text-transparent", children: truck.description }, void 0, !1, {
              fileName: "app/components/Inventoryoptimization.jsx",
              lineNumber: 127,
              columnNumber: 19
            }, this) }, void 0, !1, {
              fileName: "app/components/Inventoryoptimization.jsx",
              lineNumber: 126,
              columnNumber: 17
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/Inventoryoptimization.jsx",
            lineNumber: 119,
            columnNumber: 15
          }, this)
        ]
      },
      truck.title,
      !0,
      {
        fileName: "app/components/Inventoryoptimization.jsx",
        lineNumber: 113,
        columnNumber: 13
      },
      this
    )) }, void 0, !1, {
      fileName: "app/components/Inventoryoptimization.jsx",
      lineNumber: 111,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/Inventoryoptimization.jsx",
      lineNumber: 110,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime62.jsxDEV)("div", { className: "border-b border-black my-12" }, void 0, !1, {
      fileName: "app/components/Inventoryoptimization.jsx",
      lineNumber: 137,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime62.jsxDEV)("h1", { className: "font-bold font-display text-3xl tracking-tight text-slate-900 dark:text-white", children: "Organizational Impact" }, void 0, !1, {
      fileName: "app/components/Inventoryoptimization.jsx",
      lineNumber: 139,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime62.jsxDEV)("div", { className: "my-8 grid grid-cols-2 gap-4 ", children: kpiCards7.map((kpi) => /* @__PURE__ */ (0, import_jsx_dev_runtime62.jsxDEV)(
      "div",
      {
        className: "rounded-xl bg-sky-50 p-6 lg:grid-cols-3 dark:bg-slate-800/60 dark:ring-1 dark:ring-slate-300/10 ",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime62.jsxDEV)("div", { className: "flex overflow-hidden rounded-xl", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime62.jsxDEV)(Icon, { icon: kpi.icon, className: "h-10 w-10" }, void 0, !1, {
              fileName: "app/components/Inventoryoptimization.jsx",
              lineNumber: 149,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime62.jsxDEV)("p", { className: "m-0 font-display text-xl text-sky-900 dark:text-sky-400", children: kpi.title }, void 0, !1, {
              fileName: "app/components/Inventoryoptimization.jsx",
              lineNumber: 150,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/Inventoryoptimization.jsx",
            lineNumber: 148,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime62.jsxDEV)("div", { className: "mt-2.5 text-sky-800 dark:text-slate-300 ", children: kpi.description }, void 0, !1, {
            fileName: "app/components/Inventoryoptimization.jsx",
            lineNumber: 154,
            columnNumber: 13
          }, this)
        ]
      },
      kpi.title,
      !0,
      {
        fileName: "app/components/Inventoryoptimization.jsx",
        lineNumber: 144,
        columnNumber: 11
      },
      this
    )) }, void 0, !1, {
      fileName: "app/components/Inventoryoptimization.jsx",
      lineNumber: 142,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Inventoryoptimization.jsx",
    lineNumber: 72,
    columnNumber: 5
  }, this);
}

// app/routes/home.invopt.tsx
var import_jsx_dev_runtime63 = require("react/jsx-dev-runtime");
function Inventoryopt() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime63.jsxDEV)("div", { className: "min-w-0 max-w-2xl flex-auto px-4 py-16 lg:max-w-none lg:pl-8 lg:pr-0 xl:px-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime63.jsxDEV)(Inventoryoptimization, {}, void 0, !1, {
    fileName: "app/routes/home.invopt.tsx",
    lineNumber: 7,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/home.invopt.tsx",
    lineNumber: 6,
    columnNumber: 5
  }, this);
}

// app/routes/home.tripod.tsx
var home_tripod_exports = {};
__export(home_tripod_exports, {
  default: () => Tripod2
});

// app/images/trianglepng.png
var trianglepng_default = "/build/_assets/trianglepng-2KPW6W62.png";

// app/components/Framework.jsx
var import_react33 = require("@remix-run/react");
var import_jsx_dev_runtime64 = require("react/jsx-dev-runtime");
function Framework() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime64.jsxDEV)(import_jsx_dev_runtime64.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime64.jsxDEV)("div", { className: "flex", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime64.jsxDEV)("div", { className: "not-prose ml-4 flex items-center justify-start", children: /* @__PURE__ */ (0, import_jsx_dev_runtime64.jsxDEV)("img", { src: trianglepng_default, alt: "", width: 1e3, height: 1e3 }, void 0, !1, {
      fileName: "app/components/Framework.jsx",
      lineNumber: 12,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/components/Framework.jsx",
      lineNumber: 11,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime64.jsxDEV)("div", { className: "my-6 py-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime64.jsxDEV)("div", { className: "m-2 mb-4 grid grid-cols-2 gap-2 lg:grid-cols-1", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime64.jsxDEV)("div", { className: "group relative rounded-xl border border-slate-200 dark:border-slate-800", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime64.jsxDEV)("div", { className: "absolute -inset-px rounded-xl border-2 border-transparent opacity-0 [background:linear-gradient(var(--quick-links-hover-bg,theme(colors.sky.50)),var(--quick-links-hover-bg,theme(colors.sky.50)))_padding-box,linear-gradient(to_top,theme(colors.indigo.400),theme(colors.cyan.400),theme(colors.sky.500))_border-box] group-hover:opacity-100 dark:[--quick-links-hover-bg:theme(colors.slate.800)]" }, void 0, !1, {
          fileName: "app/components/Framework.jsx",
          lineNumber: 17,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime64.jsxDEV)("div", { className: "relative overflow-hidden rounded-xl p-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime64.jsxDEV)(Icon, { icon: "probe", className: "h-16 w-16" }, void 0, !1, {
            fileName: "app/components/Framework.jsx",
            lineNumber: 19,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime64.jsxDEV)("h2", { className: "not-prose font-display text-base text-slate-900 dark:text-white", children: /* @__PURE__ */ (0, import_jsx_dev_runtime64.jsxDEV)(import_react33.Link, { to: "/docs/transportation", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime64.jsxDEV)("span", { className: "absolute -inset-px rounded-xl" }, void 0, !1, {
              fileName: "app/components/Framework.jsx",
              lineNumber: 23,
              columnNumber: 21
            }, this),
            "Probe"
          ] }, void 0, !0, {
            fileName: "app/components/Framework.jsx",
            lineNumber: 22,
            columnNumber: 19
          }, this) }, void 0, !1, {
            fileName: "app/components/Framework.jsx",
            lineNumber: 21,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime64.jsxDEV)("p", { className: "not-prose mt-1 text-sm text-slate-700 dark:text-slate-400", children: "Step-by-step guides to setting up your system and installing the library." }, void 0, !1, {
            fileName: "app/components/Framework.jsx",
            lineNumber: 27,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/Framework.jsx",
          lineNumber: 18,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/Framework.jsx",
        lineNumber: 16,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime64.jsxDEV)("div", { className: "group relative rounded-xl border border-slate-200 dark:border-slate-800", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime64.jsxDEV)("div", { className: "absolute -inset-px rounded-xl border-2 border-transparent opacity-0 [background:linear-gradient(var(--quick-links-hover-bg,theme(colors.sky.50)),var(--quick-links-hover-bg,theme(colors.sky.50)))_padding-box,linear-gradient(to_top,theme(colors.indigo.400),theme(colors.cyan.400),theme(colors.sky.500))_border-box] group-hover:opacity-100 dark:[--quick-links-hover-bg:theme(colors.slate.800)]" }, void 0, !1, {
          fileName: "app/components/Framework.jsx",
          lineNumber: 35,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime64.jsxDEV)("div", { className: "relative overflow-hidden rounded-xl p-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime64.jsxDEV)(Icon, { icon: "plan", className: "h-16 w-16" }, void 0, !1, {
            fileName: "app/components/Framework.jsx",
            lineNumber: 37,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime64.jsxDEV)("h2", { className: "not-prose font-display text-base text-slate-900 dark:text-white", children: /* @__PURE__ */ (0, import_jsx_dev_runtime64.jsxDEV)(import_react33.Link, { to: "/docs/prod-plan", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime64.jsxDEV)("span", { className: "absolute -inset-px rounded-xl" }, void 0, !1, {
              fileName: "app/components/Framework.jsx",
              lineNumber: 41,
              columnNumber: 21
            }, this),
            "Plan"
          ] }, void 0, !0, {
            fileName: "app/components/Framework.jsx",
            lineNumber: 40,
            columnNumber: 19
          }, this) }, void 0, !1, {
            fileName: "app/components/Framework.jsx",
            lineNumber: 39,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime64.jsxDEV)("p", { className: "not-prose mt-1 text-sm text-slate-700 dark:text-slate-400", children: "Learn how the internals work and contribute." }, void 0, !1, {
            fileName: "app/components/Framework.jsx",
            lineNumber: 45,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/Framework.jsx",
          lineNumber: 36,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/Framework.jsx",
        lineNumber: 34,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime64.jsxDEV)("div", { className: "group relative rounded-xl border border-slate-200 dark:border-slate-800", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime64.jsxDEV)("div", { className: "absolute -inset-px rounded-xl border-2 border-transparent opacity-0 [background:linear-gradient(var(--quick-links-hover-bg,theme(colors.sky.50)),var(--quick-links-hover-bg,theme(colors.sky.50)))_padding-box,linear-gradient(to_top,theme(colors.indigo.400),theme(colors.cyan.400),theme(colors.sky.500))_border-box] group-hover:opacity-100 dark:[--quick-links-hover-bg:theme(colors.slate.800)]" }, void 0, !1, {
          fileName: "app/components/Framework.jsx",
          lineNumber: 52,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime64.jsxDEV)("div", { className: "relative overflow-hidden rounded-xl p-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime64.jsxDEV)(Icon, { icon: "perform", className: "h-16 w-16" }, void 0, !1, {
            fileName: "app/components/Framework.jsx",
            lineNumber: 54,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime64.jsxDEV)("h2", { className: "not-prose font-display text-base text-slate-900 dark:text-white", children: /* @__PURE__ */ (0, import_jsx_dev_runtime64.jsxDEV)(import_react33.Link, { to: "/docs/ai-ct", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime64.jsxDEV)("span", { className: "absolute -inset-px rounded-xl" }, void 0, !1, {
              fileName: "app/components/Framework.jsx",
              lineNumber: 58,
              columnNumber: 21
            }, this),
            "Perform"
          ] }, void 0, !0, {
            fileName: "app/components/Framework.jsx",
            lineNumber: 57,
            columnNumber: 19
          }, this) }, void 0, !1, {
            fileName: "app/components/Framework.jsx",
            lineNumber: 56,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime64.jsxDEV)("p", { className: "not-prose mt-1 text-sm text-slate-700 dark:text-slate-400", children: "Extend the library with third-party plugins or write your own." }, void 0, !1, {
            fileName: "app/components/Framework.jsx",
            lineNumber: 62,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/Framework.jsx",
          lineNumber: 53,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/Framework.jsx",
        lineNumber: 51,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Framework.jsx",
      lineNumber: 15,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/components/Framework.jsx",
      lineNumber: 14,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Framework.jsx",
    lineNumber: 10,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/Framework.jsx",
    lineNumber: 9,
    columnNumber: 5
  }, this);
}

// app/routes/home.tripod.tsx
var import_jsx_dev_runtime65 = require("react/jsx-dev-runtime");
function Tripod2() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime65.jsxDEV)(Framework, {}, void 0, !1, {
    fileName: "app/routes/home.tripod.tsx",
    lineNumber: 5,
    columnNumber: 10
  }, this);
}

// app/routes/home._index.tsx
var home_index_exports = {};
__export(home_index_exports, {
  default: () => HomeIndex
});
var import_jsx_dev_runtime66 = require("react/jsx-dev-runtime");
function HomeIndex() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime66.jsxDEV)("div", { className: "", children: /* @__PURE__ */ (0, import_jsx_dev_runtime66.jsxDEV)(Framework, {}, void 0, !1, {
    fileName: "app/routes/home._index.tsx",
    lineNumber: 7,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/home._index.tsx",
    lineNumber: 6,
    columnNumber: 5
  }, this);
}

// app/routes/indexbackup.tsx
var indexbackup_exports = {};
__export(indexbackup_exports, {
  default: () => Example
});
var import_react36 = require("@remix-run/react"), import_clsx6 = __toESM(require("clsx")), import_react37 = require("react");

// public/assets/blur-cyan.png
var blur_cyan_default = "/build/_assets/blur-cyan-2KFFLBKA.png";

// public/assets/blur-indigo.png
var blur_indigo_default = "/build/_assets/blur-indigo-W5JM65YB.png";

// app/components/sidebar-cap.tsx
var import_react34 = require("@remix-run/react"), import_clsx5 = __toESM(require("clsx"));
var import_jsx_dev_runtime67 = require("react/jsx-dev-runtime"), navigation = [
  {
    title: "Introduction",
    links: [
      { title: "Supply Chain Tripod", href: "/" }
    ]
  },
  {
    title: "Probe - Diagnostic Engine",
    links: [
      {
        title: "Transportation",
        href: "/docs/transportation"
      },
      {
        title: "Warehousing",
        href: "/docs/warehousing"
      },
      { title: "Inventory", href: "/docs/inventory-diag" }
    ]
  },
  {
    title: "Plan - Optimization Engine",
    links: [
      {
        title: "Production Planning & Scheduling",
        href: "/docs/prod-plan"
      },
      {
        title: "Sales & Operations Planning",
        href: "/docs/snop"
      },
      { title: "Distribution Planning", href: "/docs/distr-planning" },
      { title: "Inventory Optimization", href: "/docs/inv-opt" }
    ]
  },
  {
    title: "Perform - Execution Engine",
    links: [
      {
        title: "Generative AI based Control Tower",
        href: "/docs/ai-ct"
      },
      { title: "Cascaded KPI Scorecard", href: "/docs/kpi" }
    ]
  }
];
function Sidebar2({ className, playlists: playlists2 }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime67.jsxDEV)("div", { className: cn("pb-12", className), children: /* @__PURE__ */ (0, import_jsx_dev_runtime67.jsxDEV)("div", { className: "pl-4 space-y-4 py-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime67.jsxDEV)("nav", { className: (0, import_clsx5.default)("text-base lg:text-base", className), children: /* @__PURE__ */ (0, import_jsx_dev_runtime67.jsxDEV)("ul", { className: "space-y-9", children: navigation.map((section) => /* @__PURE__ */ (0, import_jsx_dev_runtime67.jsxDEV)("li", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime67.jsxDEV)("h2", { className: "font-display font-medium  text-white", children: section.title }, void 0, !1, {
      fileName: "app/components/sidebar-cap.tsx",
      lineNumber: 70,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime67.jsxDEV)("ul", { className: "mt-2 space-y-2 border-l-2 lg:mt-4 lg:space-y-4  border-slate-800", children: section.links.map((link) => /* @__PURE__ */ (0, import_jsx_dev_runtime67.jsxDEV)("li", { className: "relative", children: /* @__PURE__ */ (0, import_jsx_dev_runtime67.jsxDEV)(
      import_react34.Link,
      {
        to: link.href,
        className: (0, import_clsx5.default)(
          "block w-full pl-3.5 before:pointer-events-none before:absolute before:-left-1 before:top-1/2 before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full text-slate-400 before:bg-slate-700 hover:text-slate-300"
        ),
        children: link.title
      },
      void 0,
      !1,
      {
        fileName: "app/components/sidebar-cap.tsx",
        lineNumber: 76,
        columnNumber: 23
      },
      this
    ) }, link.href, !1, {
      fileName: "app/components/sidebar-cap.tsx",
      lineNumber: 75,
      columnNumber: 21
    }, this)) }, void 0, !1, {
      fileName: "app/components/sidebar-cap.tsx",
      lineNumber: 73,
      columnNumber: 17
    }, this)
  ] }, section.title, !0, {
    fileName: "app/components/sidebar-cap.tsx",
    lineNumber: 69,
    columnNumber: 15
  }, this)) }, void 0, !1, {
    fileName: "app/components/sidebar-cap.tsx",
    lineNumber: 67,
    columnNumber: 11
  }, this) }, void 0, !1, {
    fileName: "app/components/sidebar-cap.tsx",
    lineNumber: 66,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/components/sidebar-cap.tsx",
    lineNumber: 65,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/sidebar-cap.tsx",
    lineNumber: 64,
    columnNumber: 5
  }, this);
}

// app/components/Capabilities.tsx
var import_jsx_dev_runtime68 = require("react/jsx-dev-runtime"), playlists = [
  "Recently Added",
  "Recently Played",
  "Top Songs",
  "Top Albums",
  "Top Artists",
  "Logic Discography",
  "Bedtime Beats",
  "Feeling Happy",
  "I miss Y2K Pop",
  "Runtober",
  "Mellow Days",
  "Eminem Essentials"
];
function Capabilities() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime68.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime68.jsxDEV)("div", { className: "grid lg:grid-cols-5", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime68.jsxDEV)(Sidebar2, { playlists, className: "hidden lg:block" }, void 0, !1, {
      fileName: "app/components/Capabilities.tsx",
      lineNumber: 31,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime68.jsxDEV)("div", { className: "col-span-3 lg:col-span-4 lg:border-l", children: /* @__PURE__ */ (0, import_jsx_dev_runtime68.jsxDEV)("div", { className: "h-full px-4 py-6 lg:px-8 text-white", children: /* @__PURE__ */ (0, import_jsx_dev_runtime68.jsxDEV)(Framework, {}, void 0, !1, {
      fileName: "app/components/Capabilities.tsx",
      lineNumber: 34,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/components/Capabilities.tsx",
      lineNumber: 33,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/components/Capabilities.tsx",
      lineNumber: 32,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Capabilities.tsx",
    lineNumber: 30,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/Capabilities.tsx",
    lineNumber: 29,
    columnNumber: 5
  }, this);
}

// app/components/HeroBackground.jsx
var import_react35 = require("react"), import_jsx_dev_runtime69 = require("react/jsx-dev-runtime");
function HeroBackground(props) {
  let id = (0, import_react35.useId)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime69.jsxDEV)(
    "svg",
    {
      "aria-hidden": "true",
      viewBox: "0 0 668 1069",
      width: 500,
      height: 800,
      fill: "none",
      ...props,
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime69.jsxDEV)("defs", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime69.jsxDEV)("clipPath", { id: `${id}-clip-path`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime69.jsxDEV)(
          "path",
          {
            fill: "#fff",
            transform: "rotate(-180 334 534.4)",
            d: "M0 0h668v1068.8H0z"
          },
          void 0,
          !1,
          {
            fileName: "app/components/HeroBackground.jsx",
            lineNumber: 17,
            columnNumber: 11
          },
          this
        ) }, void 0, !1, {
          fileName: "app/components/HeroBackground.jsx",
          lineNumber: 16,
          columnNumber: 9
        }, this) }, void 0, !1, {
          fileName: "app/components/HeroBackground.jsx",
          lineNumber: 15,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime69.jsxDEV)("g", { opacity: ".4", clipPath: `url(#${id}-clip-path)`, strokeWidth: 4, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime69.jsxDEV)(
            "path",
            {
              opacity: ".3",
              d: "M584.5 770.4v-474M484.5 770.4v-474M384.5 770.4v-474M283.5 769.4v-474M183.5 768.4v-474M83.5 767.4v-474",
              stroke: "#334155"
            },
            void 0,
            !1,
            {
              fileName: "app/components/HeroBackground.jsx",
              lineNumber: 25,
              columnNumber: 9
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime69.jsxDEV)(
            "path",
            {
              d: "M83.5 221.275v6.587a50.1 50.1 0 0 0 22.309 41.686l55.581 37.054a50.102 50.102 0 0 1 22.309 41.686v6.587M83.5 716.012v6.588a50.099 50.099 0 0 0 22.309 41.685l55.581 37.054a50.102 50.102 0 0 1 22.309 41.686v6.587M183.7 584.5v6.587a50.1 50.1 0 0 0 22.31 41.686l55.581 37.054a50.097 50.097 0 0 1 22.309 41.685v6.588M384.101 277.637v6.588a50.1 50.1 0 0 0 22.309 41.685l55.581 37.054a50.1 50.1 0 0 1 22.31 41.686v6.587M384.1 770.288v6.587a50.1 50.1 0 0 1-22.309 41.686l-55.581 37.054A50.099 50.099 0 0 0 283.9 897.3v6.588",
              stroke: "#334155"
            },
            void 0,
            !1,
            {
              fileName: "app/components/HeroBackground.jsx",
              lineNumber: 30,
              columnNumber: 9
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime69.jsxDEV)(
            "path",
            {
              d: "M384.1 770.288v6.587a50.1 50.1 0 0 1-22.309 41.686l-55.581 37.054A50.099 50.099 0 0 0 283.9 897.3v6.588M484.3 594.937v6.587a50.1 50.1 0 0 1-22.31 41.686l-55.581 37.054A50.1 50.1 0 0 0 384.1 721.95v6.587M484.3 872.575v6.587a50.1 50.1 0 0 1-22.31 41.686l-55.581 37.054a50.098 50.098 0 0 0-22.309 41.686v6.582M584.501 663.824v39.988a50.099 50.099 0 0 1-22.31 41.685l-55.581 37.054a50.102 50.102 0 0 0-22.309 41.686v6.587M283.899 945.637v6.588a50.1 50.1 0 0 1-22.309 41.685l-55.581 37.05a50.12 50.12 0 0 0-22.31 41.69v6.59M384.1 277.637c0 19.946 12.763 37.655 31.686 43.962l137.028 45.676c18.923 6.308 31.686 24.016 31.686 43.962M183.7 463.425v30.69c0 21.564 13.799 40.709 34.257 47.529l134.457 44.819c18.922 6.307 31.686 24.016 31.686 43.962M83.5 102.288c0 19.515 13.554 36.412 32.604 40.645l235.391 52.309c19.05 4.234 32.605 21.13 32.605 40.646M83.5 463.425v-58.45M183.699 542.75V396.625M283.9 1068.8V945.637M83.5 363.225v-141.95M83.5 179.524v-77.237M83.5 60.537V0M384.1 630.425V277.637M484.301 830.824V594.937M584.5 1068.8V663.825M484.301 555.275V452.988M584.5 622.075V452.988M384.1 728.537v-56.362M384.1 1068.8v-20.88M384.1 1006.17V770.287M283.9 903.888V759.85M183.699 1066.71V891.362M83.5 1068.8V716.012M83.5 674.263V505.175",
              stroke: "#334155"
            },
            void 0,
            !1,
            {
              fileName: "app/components/HeroBackground.jsx",
              lineNumber: 34,
              columnNumber: 9
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime69.jsxDEV)(
            "circle",
            {
              cx: "83.5",
              cy: "384.1",
              r: "10.438",
              transform: "rotate(-180 83.5 384.1)",
              fill: "#1E293B",
              stroke: "#334155"
            },
            void 0,
            !1,
            {
              fileName: "app/components/HeroBackground.jsx",
              lineNumber: 38,
              columnNumber: 9
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime69.jsxDEV)(
            "circle",
            {
              cx: "83.5",
              cy: "200.399",
              r: "10.438",
              transform: "rotate(-180 83.5 200.399)",
              stroke: "#334155"
            },
            void 0,
            !1,
            {
              fileName: "app/components/HeroBackground.jsx",
              lineNumber: 47,
              columnNumber: 9
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime69.jsxDEV)(
            "circle",
            {
              cx: "83.5",
              cy: "81.412",
              r: "10.438",
              transform: "rotate(-180 83.5 81.412)",
              stroke: "#334155"
            },
            void 0,
            !1,
            {
              fileName: "app/components/HeroBackground.jsx",
              lineNumber: 54,
              columnNumber: 9
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime69.jsxDEV)(
            "circle",
            {
              cx: "183.699",
              cy: "375.75",
              r: "10.438",
              transform: "rotate(-180 183.699 375.75)",
              fill: "#1E293B",
              stroke: "#334155"
            },
            void 0,
            !1,
            {
              fileName: "app/components/HeroBackground.jsx",
              lineNumber: 61,
              columnNumber: 9
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime69.jsxDEV)(
            "circle",
            {
              cx: "183.699",
              cy: "563.625",
              r: "10.438",
              transform: "rotate(-180 183.699 563.625)",
              fill: "#1E293B",
              stroke: "#334155"
            },
            void 0,
            !1,
            {
              fileName: "app/components/HeroBackground.jsx",
              lineNumber: 69,
              columnNumber: 9
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime69.jsxDEV)(
            "circle",
            {
              cx: "384.1",
              cy: "651.3",
              r: "10.438",
              transform: "rotate(-180 384.1 651.3)",
              fill: "#1E293B",
              stroke: "#334155"
            },
            void 0,
            !1,
            {
              fileName: "app/components/HeroBackground.jsx",
              lineNumber: 77,
              columnNumber: 9
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime69.jsxDEV)(
            "circle",
            {
              cx: "484.301",
              cy: "574.062",
              r: "10.438",
              transform: "rotate(-180 484.301 574.062)",
              fill: "#0EA5E9",
              fillOpacity: ".42",
              stroke: "#0EA5E9"
            },
            void 0,
            !1,
            {
              fileName: "app/components/HeroBackground.jsx",
              lineNumber: 85,
              columnNumber: 9
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime69.jsxDEV)(
            "circle",
            {
              cx: "384.1",
              cy: "749.412",
              r: "10.438",
              transform: "rotate(-180 384.1 749.412)",
              fill: "#1E293B",
              stroke: "#334155"
            },
            void 0,
            !1,
            {
              fileName: "app/components/HeroBackground.jsx",
              lineNumber: 94,
              columnNumber: 9
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime69.jsxDEV)(
            "circle",
            {
              cx: "384.1",
              cy: "1027.05",
              r: "10.438",
              transform: "rotate(-180 384.1 1027.05)",
              stroke: "#334155"
            },
            void 0,
            !1,
            {
              fileName: "app/components/HeroBackground.jsx",
              lineNumber: 102,
              columnNumber: 9
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime69.jsxDEV)(
            "circle",
            {
              cx: "283.9",
              cy: "924.763",
              r: "10.438",
              transform: "rotate(-180 283.9 924.763)",
              stroke: "#334155"
            },
            void 0,
            !1,
            {
              fileName: "app/components/HeroBackground.jsx",
              lineNumber: 109,
              columnNumber: 9
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime69.jsxDEV)(
            "circle",
            {
              cx: "183.699",
              cy: "870.487",
              r: "10.438",
              transform: "rotate(-180 183.699 870.487)",
              stroke: "#334155"
            },
            void 0,
            !1,
            {
              fileName: "app/components/HeroBackground.jsx",
              lineNumber: 116,
              columnNumber: 9
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime69.jsxDEV)(
            "circle",
            {
              cx: "283.9",
              cy: "738.975",
              r: "10.438",
              transform: "rotate(-180 283.9 738.975)",
              fill: "#1E293B",
              stroke: "#334155"
            },
            void 0,
            !1,
            {
              fileName: "app/components/HeroBackground.jsx",
              lineNumber: 123,
              columnNumber: 9
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime69.jsxDEV)(
            "circle",
            {
              cx: "83.5",
              cy: "695.138",
              r: "10.438",
              transform: "rotate(-180 83.5 695.138)",
              fill: "#1E293B",
              stroke: "#334155"
            },
            void 0,
            !1,
            {
              fileName: "app/components/HeroBackground.jsx",
              lineNumber: 131,
              columnNumber: 9
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime69.jsxDEV)(
            "circle",
            {
              cx: "83.5",
              cy: "484.3",
              r: "10.438",
              transform: "rotate(-180 83.5 484.3)",
              fill: "#0EA5E9",
              fillOpacity: ".42",
              stroke: "#0EA5E9"
            },
            void 0,
            !1,
            {
              fileName: "app/components/HeroBackground.jsx",
              lineNumber: 139,
              columnNumber: 9
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime69.jsxDEV)(
            "circle",
            {
              cx: "484.301",
              cy: "432.112",
              r: "10.438",
              transform: "rotate(-180 484.301 432.112)",
              fill: "#1E293B",
              stroke: "#334155"
            },
            void 0,
            !1,
            {
              fileName: "app/components/HeroBackground.jsx",
              lineNumber: 148,
              columnNumber: 9
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime69.jsxDEV)(
            "circle",
            {
              cx: "584.5",
              cy: "432.112",
              r: "10.438",
              transform: "rotate(-180 584.5 432.112)",
              fill: "#1E293B",
              stroke: "#334155"
            },
            void 0,
            !1,
            {
              fileName: "app/components/HeroBackground.jsx",
              lineNumber: 156,
              columnNumber: 9
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime69.jsxDEV)(
            "circle",
            {
              cx: "584.5",
              cy: "642.95",
              r: "10.438",
              transform: "rotate(-180 584.5 642.95)",
              fill: "#1E293B",
              stroke: "#334155"
            },
            void 0,
            !1,
            {
              fileName: "app/components/HeroBackground.jsx",
              lineNumber: 164,
              columnNumber: 9
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime69.jsxDEV)(
            "circle",
            {
              cx: "484.301",
              cy: "851.699",
              r: "10.438",
              transform: "rotate(-180 484.301 851.699)",
              stroke: "#334155"
            },
            void 0,
            !1,
            {
              fileName: "app/components/HeroBackground.jsx",
              lineNumber: 172,
              columnNumber: 9
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime69.jsxDEV)(
            "circle",
            {
              cx: "384.1",
              cy: "256.763",
              r: "10.438",
              transform: "rotate(-180 384.1 256.763)",
              stroke: "#334155"
            },
            void 0,
            !1,
            {
              fileName: "app/components/HeroBackground.jsx",
              lineNumber: 179,
              columnNumber: 9
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/components/HeroBackground.jsx",
          lineNumber: 24,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/HeroBackground.jsx",
      lineNumber: 7,
      columnNumber: 5
    },
    this
  );
}

// app/images/logo1.png
var logo1_default = "/build/_assets/logo1-VOLM65DI.png";

// app/components/Logo.jsx
var import_jsx_dev_runtime70 = require("react/jsx-dev-runtime");
function LogomarkPaths() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime70.jsxDEV)("img", { className: "", src: logo1_default, alt: "", width: 40, height: 40 }, void 0, !1, {
    fileName: "app/components/Logo.jsx",
    lineNumber: 5,
    columnNumber: 10
  }, this);
}
function Logomark(props) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime70.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime70.jsxDEV)(LogomarkPaths, {}, void 0, !1, {
    fileName: "app/components/Logo.jsx",
    lineNumber: 11,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/Logo.jsx",
    lineNumber: 10,
    columnNumber: 5
  }, this);
}
function Logo(props) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime70.jsxDEV)("div", { className: "flex items-center ", "aria-hidden": "true", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime70.jsxDEV)(LogomarkPaths, {}, void 0, !1, {
      fileName: "app/components/Logo.jsx",
      lineNumber: 19,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime70.jsxDEV)("h1", { className: "ml-2 flex items-center text-2xl font-bold tracking-wide dark:text-white", children: "BlueNorth AI" }, void 0, !1, {
      fileName: "app/components/Logo.jsx",
      lineNumber: 20,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Logo.jsx",
    lineNumber: 18,
    columnNumber: 5
  }, this);
}

// app/components/ThemeSelector.jsx
var import_remix_themes4 = require("remix-themes");

// app/components/ui/dropdown-menu.tsx
var React19 = __toESM(require("react")), DropdownMenuPrimitive = __toESM(require("@radix-ui/react-dropdown-menu")), import_lucide_react2 = require("lucide-react");
var import_jsx_dev_runtime71 = require("react/jsx-dev-runtime"), DropdownMenu = DropdownMenuPrimitive.Root, DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;
var DropdownMenuSubTrigger = React19.forwardRef(({ className, inset, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime71.jsxDEV)(
  DropdownMenuPrimitive.SubTrigger,
  {
    ref,
    className: cn(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-slate-100 data-[state=open]:bg-slate-100 dark:focus:bg-slate-800 dark:data-[state=open]:bg-slate-800",
      inset && "pl-8",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ (0, import_jsx_dev_runtime71.jsxDEV)(import_lucide_react2.ChevronRight, { className: "ml-auto h-4 w-4" }, void 0, !1, {
        fileName: "app/components/ui/dropdown-menu.tsx",
        lineNumber: 35,
        columnNumber: 5
      }, this)
    ]
  },
  void 0,
  !0,
  {
    fileName: "app/components/ui/dropdown-menu.tsx",
    lineNumber: 25,
    columnNumber: 3
  },
  this
));
DropdownMenuSubTrigger.displayName = DropdownMenuPrimitive.SubTrigger.displayName;
var DropdownMenuSubContent = React19.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime71.jsxDEV)(
  DropdownMenuPrimitive.SubContent,
  {
    ref,
    className: cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border border-slate-200 bg-white p-1 text-slate-950 shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50",
      className
    ),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/dropdown-menu.tsx",
    lineNumber: 45,
    columnNumber: 3
  },
  this
));
DropdownMenuSubContent.displayName = DropdownMenuPrimitive.SubContent.displayName;
var DropdownMenuContent = React19.forwardRef(({ className, sideOffset = 4, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime71.jsxDEV)(DropdownMenuPrimitive.Portal, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime71.jsxDEV)(
  DropdownMenuPrimitive.Content,
  {
    ref,
    sideOffset,
    className: cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border border-slate-200 bg-white p-1 text-slate-950 shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50",
      className
    ),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/dropdown-menu.tsx",
    lineNumber: 62,
    columnNumber: 5
  },
  this
) }, void 0, !1, {
  fileName: "app/components/ui/dropdown-menu.tsx",
  lineNumber: 61,
  columnNumber: 3
}, this));
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName;
var DropdownMenuItem = React19.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime71.jsxDEV)(
  DropdownMenuPrimitive.Item,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-slate-100 focus:text-slate-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-slate-800 dark:focus:text-slate-50",
      inset && "pl-8",
      className
    ),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/dropdown-menu.tsx",
    lineNumber: 81,
    columnNumber: 3
  },
  this
));
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName;
var DropdownMenuCheckboxItem = React19.forwardRef(({ className, children, checked, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime71.jsxDEV)(
  DropdownMenuPrimitive.CheckboxItem,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-slate-100 focus:text-slate-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-slate-800 dark:focus:text-slate-50",
      className
    ),
    checked,
    ...props,
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime71.jsxDEV)("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime71.jsxDEV)(DropdownMenuPrimitive.ItemIndicator, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime71.jsxDEV)(import_lucide_react2.Check, { className: "h-4 w-4" }, void 0, !1, {
        fileName: "app/components/ui/dropdown-menu.tsx",
        lineNumber: 108,
        columnNumber: 9
      }, this) }, void 0, !1, {
        fileName: "app/components/ui/dropdown-menu.tsx",
        lineNumber: 107,
        columnNumber: 7
      }, this) }, void 0, !1, {
        fileName: "app/components/ui/dropdown-menu.tsx",
        lineNumber: 106,
        columnNumber: 5
      }, this),
      children
    ]
  },
  void 0,
  !0,
  {
    fileName: "app/components/ui/dropdown-menu.tsx",
    lineNumber: 97,
    columnNumber: 3
  },
  this
));
DropdownMenuCheckboxItem.displayName = DropdownMenuPrimitive.CheckboxItem.displayName;
var DropdownMenuRadioItem = React19.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime71.jsxDEV)(
  DropdownMenuPrimitive.RadioItem,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-slate-100 focus:text-slate-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-slate-800 dark:focus:text-slate-50",
      className
    ),
    ...props,
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime71.jsxDEV)("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime71.jsxDEV)(DropdownMenuPrimitive.ItemIndicator, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime71.jsxDEV)(import_lucide_react2.Circle, { className: "h-2 w-2 fill-current" }, void 0, !1, {
        fileName: "app/components/ui/dropdown-menu.tsx",
        lineNumber: 131,
        columnNumber: 9
      }, this) }, void 0, !1, {
        fileName: "app/components/ui/dropdown-menu.tsx",
        lineNumber: 130,
        columnNumber: 7
      }, this) }, void 0, !1, {
        fileName: "app/components/ui/dropdown-menu.tsx",
        lineNumber: 129,
        columnNumber: 5
      }, this),
      children
    ]
  },
  void 0,
  !0,
  {
    fileName: "app/components/ui/dropdown-menu.tsx",
    lineNumber: 121,
    columnNumber: 3
  },
  this
));
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName;
var DropdownMenuLabel = React19.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime71.jsxDEV)(
  DropdownMenuPrimitive.Label,
  {
    ref,
    className: cn(
      "px-2 py-1.5 text-sm font-semibold",
      inset && "pl-8",
      className
    ),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/dropdown-menu.tsx",
    lineNumber: 145,
    columnNumber: 3
  },
  this
));
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName;
var DropdownMenuSeparator = React19.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime71.jsxDEV)(
  DropdownMenuPrimitive.Separator,
  {
    ref,
    className: cn("-mx-1 my-1 h-px bg-slate-100 dark:bg-slate-800", className),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/dropdown-menu.tsx",
    lineNumber: 161,
    columnNumber: 3
  },
  this
));
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName;
var DropdownMenuShortcut = ({
  className,
  ...props
}) => /* @__PURE__ */ (0, import_jsx_dev_runtime71.jsxDEV)(
  "span",
  {
    className: cn("ml-auto text-xs tracking-widest opacity-60", className),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/dropdown-menu.tsx",
    lineNumber: 174,
    columnNumber: 5
  },
  this
);
DropdownMenuShortcut.displayName = "DropdownMenuShortcut";

// app/components/ThemeSelector.jsx
var import_outline = require("@heroicons/react/24/outline"), import_jsx_dev_runtime72 = require("react/jsx-dev-runtime");
function ThemeSelector() {
  let [currentTheme, setTheme] = (0, import_remix_themes4.useTheme)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime72.jsxDEV)(DropdownMenu, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime72.jsxDEV)(DropdownMenuTrigger, { asChild: !0, children: /* @__PURE__ */ (0, import_jsx_dev_runtime72.jsxDEV)(
      "button",
      {
        className: "flex h-10 w-10 items-center justify-center rounded-xl shadow-md shadow-black/5 ring-1 ring-black/5 dark:bg-slate-800 dark:ring-inset dark:ring-white/5 dark:text-sky-500 text-sky-500 ",
        "aria-label": "Theme",
        children: [
          currentTheme === import_remix_themes4.Theme.DARK ? /* @__PURE__ */ (0, import_jsx_dev_runtime72.jsxDEV)(import_outline.MoonIcon, { className: "h-6 w-6  scale-100 transition-all" }, void 0, !1, {
            fileName: "app/components/ThemeSelector.jsx",
            lineNumber: 23,
            columnNumber: 13
          }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime72.jsxDEV)(import_outline.SunIcon, { className: "h-6 w-6 rotate-0 scale-100 transition-all" }, void 0, !1, {
            fileName: "app/components/ThemeSelector.jsx",
            lineNumber: 25,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime72.jsxDEV)("span", { className: "sr-only", children: "Toggle theme" }, void 0, !1, {
            fileName: "app/components/ThemeSelector.jsx",
            lineNumber: 27,
            columnNumber: 11
          }, this)
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/components/ThemeSelector.jsx",
        lineNumber: 18,
        columnNumber: 9
      },
      this
    ) }, void 0, !1, {
      fileName: "app/components/ThemeSelector.jsx",
      lineNumber: 17,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime72.jsxDEV)(DropdownMenuContent, { align: "end", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime72.jsxDEV)(
        DropdownMenuItem,
        {
          className: "hover:bg-sky-500",
          onClick: () => setTheme(import_remix_themes4.Theme.LIGHT),
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime72.jsxDEV)("div", { className: "flex items-center mx-1 p-1 ", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime72.jsxDEV)(import_outline.SunIcon, { className: "h-6 w-6 mr-2" }, void 0, !1, {
              fileName: "app/components/ThemeSelector.jsx",
              lineNumber: 36,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime72.jsxDEV)("p", { children: " Light" }, void 0, !1, {
              fileName: "app/components/ThemeSelector.jsx",
              lineNumber: 37,
              columnNumber: 13
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/ThemeSelector.jsx",
            lineNumber: 35,
            columnNumber: 11
          }, this)
        },
        void 0,
        !1,
        {
          fileName: "app/components/ThemeSelector.jsx",
          lineNumber: 31,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime72.jsxDEV)(DropdownMenuItem, { onClick: () => setTheme(import_remix_themes4.Theme.DARK), children: /* @__PURE__ */ (0, import_jsx_dev_runtime72.jsxDEV)("div", { className: "flex items-center mx-1", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime72.jsxDEV)(import_outline.MoonIcon, { className: "h-6 w-6 mr-2" }, void 0, !1, {
          fileName: "app/components/ThemeSelector.jsx",
          lineNumber: 42,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime72.jsxDEV)("p", { children: "Dark" }, void 0, !1, {
          fileName: "app/components/ThemeSelector.jsx",
          lineNumber: 43,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/ThemeSelector.jsx",
        lineNumber: 41,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/components/ThemeSelector.jsx",
        lineNumber: 40,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/ThemeSelector.jsx",
      lineNumber: 30,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/ThemeSelector.jsx",
    lineNumber: 16,
    columnNumber: 5
  }, this);
}

// app/routes/indexbackup.tsx
var import_jsx_dev_runtime73 = require("react/jsx-dev-runtime");
function GitHubIcon(props) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime73.jsxDEV)("svg", { "aria-hidden": "true", viewBox: "0 0 16 16", ...props, children: /* @__PURE__ */ (0, import_jsx_dev_runtime73.jsxDEV)("path", { d: "M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z" }, void 0, !1, {
    fileName: "app/routes/indexbackup.tsx",
    lineNumber: 17,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/indexbackup.tsx",
    lineNumber: 16,
    columnNumber: 5
  }, this);
}
var actions = [
  {
    name: "Generative AI Based Control Tower",
    to: "/ai",
    img: "/assets/generateAi.png",
    description: " Across industries, organizations like yours are pivoting to manage increasingly complex supply chains, while juggling delivery expectations and cost."
  },
  {
    name: "Diagnostic Engine",
    to: "http://localhost:50288/snop/truck",
    img: "/assets/salesopplanning.png",
    description: "Across industries, organizations like yours are pivoting to manage increasingly complex supply chains, while juggling delivery expectations and cost."
  },
  {
    name: "Optimization Engine",
    to: "/demo/dashboard/demand",
    img: "/assets/diagnostics.png",
    description: "With shrinking product lifecycles, demand fluctuations and more granular customer segmentation, organizations like yours depend on intelligent decision support for their essential production."
  },
  {
    name: "Execution Engine",
    to: "/demo/dashboard/inventory",
    img: "/assets/kpicard.png",
    description: "Across industries, organizations like yours are pivoting to manage increasingly complex supply chains, while juggling delivery expectations and cost."
  }
];
function Header() {
  let [isScrolled, setIsScrolled] = (0, import_react37.useState)(!1);
  return (0, import_react37.useEffect)(() => {
    function onScroll() {
      setIsScrolled(window.scrollY > 0);
    }
    return onScroll(), window.addEventListener("scroll", onScroll, { passive: !0 }), () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []), /* @__PURE__ */ (0, import_jsx_dev_runtime73.jsxDEV)(
    "header",
    {
      className: (0, import_clsx6.default)(
        "sticky top-0 z-50 flex flex-none flex-wrap items-center justify-between bg-white px-4 py-5 shadow-md shadow-slate-900/5 transition duration-500 sm:px-6 lg:px-8 dark:shadow-none",
        isScrolled ? "dark:bg-slate-900/95 dark:backdrop-blur dark:[@supports(backdrop-filter:blur(0))]:bg-slate-900/75" : "dark:bg-transparent"
      ),
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime73.jsxDEV)("div", { className: "mr-6 flex lg:hidden" }, void 0, !1, {
          fileName: "app/routes/indexbackup.tsx",
          lineNumber: 88,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime73.jsxDEV)("div", { className: "relative flex flex-grow basis-0 items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime73.jsxDEV)(import_react36.Link, { to: "/", "aria-label": "Home page", children: /* @__PURE__ */ (0, import_jsx_dev_runtime73.jsxDEV)(Logo, { className: " h-9 w-auto fill-slate-700  dark:fill-sky-100" }, void 0, !1, {
          fileName: "app/routes/indexbackup.tsx",
          lineNumber: 94,
          columnNumber: 11
        }, this) }, void 0, !1, {
          fileName: "app/routes/indexbackup.tsx",
          lineNumber: 92,
          columnNumber: 9
        }, this) }, void 0, !1, {
          fileName: "app/routes/indexbackup.tsx",
          lineNumber: 91,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime73.jsxDEV)("div", { className: "relative flex basis-0 justify-end gap-6 sm:gap-8 md:flex-grow", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime73.jsxDEV)(ThemeSelector, { className: "relative z-10" }, void 0, !1, {
            fileName: "app/routes/indexbackup.tsx",
            lineNumber: 101,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime73.jsxDEV)(import_react36.Link, { to: "https://github.com", className: "group", "aria-label": "GitHub", children: /* @__PURE__ */ (0, import_jsx_dev_runtime73.jsxDEV)(GitHubIcon, { className: "h-6 w-6 fill-slate-400 group-hover:fill-slate-500 dark:group-hover:fill-slate-300" }, void 0, !1, {
            fileName: "app/routes/indexbackup.tsx",
            lineNumber: 103,
            columnNumber: 11
          }, this) }, void 0, !1, {
            fileName: "app/routes/indexbackup.tsx",
            lineNumber: 102,
            columnNumber: 9
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/indexbackup.tsx",
          lineNumber: 100,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/routes/indexbackup.tsx",
      lineNumber: 80,
      columnNumber: 5
    },
    this
  );
}
function Example() {
  let [mobileMenuOpen, setMobileMenuOpen] = (0, import_react37.useState)(!1), [isScrolled, setIsScrolled] = (0, import_react37.useState)(!1);
  return (0, import_react37.useEffect)(() => {
    function onScroll() {
      setIsScrolled(window.scrollY > 0);
    }
    return onScroll(), window.addEventListener("scroll", onScroll, { passive: !0 }), () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []), /* @__PURE__ */ (0, import_jsx_dev_runtime73.jsxDEV)(import_jsx_dev_runtime73.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime73.jsxDEV)("div", { className: "flex w-full flex-col", children: /* @__PURE__ */ (0, import_jsx_dev_runtime73.jsxDEV)(Header, {}, void 0, !1, {
      fileName: "app/routes/indexbackup.tsx",
      lineNumber: 129,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/indexbackup.tsx",
      lineNumber: 128,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime73.jsxDEV)("div", { className: "h-full overflow-y-auto overflow-x-hidden bg-slate-900 dark:-mb-32 dark:mt-[-4.75rem] dark:pb-32 dark:pt-[4.75rem]", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime73.jsxDEV)("div", { className: "my-16 py-16 sm:px-2 lg:relative lg:px-0 lg:py-28 mx-auto flex items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime73.jsxDEV)("div", { className: "mx-auto grid max-w-2xl items-center gap-x-8 gap-y-16 px-4 lg:max-w-4xl lg:px-8 xl:gap-x-16 xl:px-12", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime73.jsxDEV)("div", { className: "relative z-10 text-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime73.jsxDEV)(
            "img",
            {
              className: "absolute bottom-full right-full -mb-56 -mr-72",
              src: blur_cyan_default,
              alt: "",
              width: 530,
              height: 530
            },
            void 0,
            !1,
            {
              fileName: "app/routes/indexbackup.tsx",
              lineNumber: 136,
              columnNumber: 15
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime73.jsxDEV)("div", { className: "relative mt-4", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime73.jsxDEV)("p", { className: "inline bg-gradient-to-r from-indigo-200 via-sky-400 to-indigo-200 bg-clip-text font-display text-7xl font-bold tracking-tight text-transparent", children: "BlueNorth AI" }, void 0, !1, {
              fileName: "app/routes/indexbackup.tsx",
              lineNumber: 144,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime73.jsxDEV)("p", { className: "mt-3 text-4xl tracking-tight text-white", children: "Enterprise AI suite to transform Supply Chain Planning and Execution" }, void 0, !1, {
              fileName: "app/routes/indexbackup.tsx",
              lineNumber: 147,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime73.jsxDEV)("div", { className: "mt-8 flex justify-center gap-4 ", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime73.jsxDEV)(
                "button",
                {
                  className: "rounded-full bg-sky-300 py-2 px-4 text-sm font-semibold text-slate-900 hover:bg-sky-200 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300/50 active:bg-sky-500",
                  to: "/",
                  children: "Get started"
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/indexbackup.tsx",
                  lineNumber: 152,
                  columnNumber: 19
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime73.jsxDEV)("button", { className: "rounded-full bg-slate-700 py-2 px-4 text-sm font-medium text-white hover:bg-slate-700 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/50 active:text-slate-400", children: "Request Demo" }, void 0, !1, {
                fileName: "app/routes/indexbackup.tsx",
                lineNumber: 158,
                columnNumber: 19
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/indexbackup.tsx",
              lineNumber: 151,
              columnNumber: 17
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/indexbackup.tsx",
            lineNumber: 143,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/indexbackup.tsx",
          lineNumber: 135,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime73.jsxDEV)("div", { className: "relative lg:static xl:pl-10", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime73.jsxDEV)("div", { className: "absolute inset-x-[-50vw] -bottom-48 -top-32 [mask-image:linear-gradient(transparent,white,white)] lg:-bottom-32 lg:-top-32 lg:left-[calc(50%+14rem)] lg:right-0 lg:[mask-image:none] dark:[mask-image:linear-gradient(transparent,white,transparent)] lg:dark:[mask-image:linear-gradient(white,white,transparent)]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime73.jsxDEV)(HeroBackground, { className: "absolute left-1/2 top-3/4 -translate-x-1/2 -translate-y-1/2 lg:left-0 lg:translate-x-0 lg:translate-y-[-60%]" }, void 0, !1, {
            fileName: "app/routes/indexbackup.tsx",
            lineNumber: 166,
            columnNumber: 17
          }, this) }, void 0, !1, {
            fileName: "app/routes/indexbackup.tsx",
            lineNumber: 165,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime73.jsxDEV)("div", { className: "relative", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime73.jsxDEV)(
              "img",
              {
                className: "absolute bottom-full  -mb-56 -mr-72 -right-56",
                src: blur_cyan_default,
                alt: "",
                width: 530,
                height: 530
              },
              void 0,
              !1,
              {
                fileName: "app/routes/indexbackup.tsx",
                lineNumber: 169,
                columnNumber: 17
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime73.jsxDEV)(
              "img",
              {
                className: "absolute -bottom-40 -right-44",
                src: blur_indigo_default,
                alt: "",
                width: 567,
                height: 567
              },
              void 0,
              !1,
              {
                fileName: "app/routes/indexbackup.tsx",
                lineNumber: 176,
                columnNumber: 17
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/indexbackup.tsx",
            lineNumber: 168,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/indexbackup.tsx",
          lineNumber: 164,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/indexbackup.tsx",
        lineNumber: 134,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/indexbackup.tsx",
        lineNumber: 133,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime73.jsxDEV)("div", { className: "relative grid  place-items-center mx-8 ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime73.jsxDEV)("ul", { className: "flex w-full gap-4", children: actions.map((action9) => /* @__PURE__ */ (0, import_jsx_dev_runtime73.jsxDEV)(
        "li",
        {
          className: "group relative h-[500px] w-full overflow-hidden rounded-2xl bg-rose-300 flex-1 hover:grow-[1.25]",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime73.jsxDEV)(import_react36.Link, { to: action9.to, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime73.jsxDEV)(
              "img",
              {
                className: "absolute inset-0 w-full h-full object-cover",
                src: action9.img,
                alt: ""
              },
              void 0,
              !1,
              {
                fileName: "app/routes/indexbackup.tsx",
                lineNumber: 195,
                columnNumber: 19
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime73.jsxDEV)("div", { className: "absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 from-30% p-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime73.jsxDEV)("div", { className: "w-48", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime73.jsxDEV)("h2", { className: "text-2xl font-medium text-white", children: action9.name }, void 0, !1, {
                fileName: "app/routes/indexbackup.tsx",
                lineNumber: 203,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime73.jsxDEV)("div", { className: "grid grid-rows-[0fr] transition-all  group-hover:grid-rows-[1fr]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime73.jsxDEV)("p", { className: "mt-2 overflow-hidden text-white/70 opacity-0 transition duration-300 group-hover:opacity-100", children: action9.description }, void 0, !1, {
                fileName: "app/routes/indexbackup.tsx",
                lineNumber: 207,
                columnNumber: 25
              }, this) }, void 0, !1, {
                fileName: "app/routes/indexbackup.tsx",
                lineNumber: 206,
                columnNumber: 23
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/indexbackup.tsx",
              lineNumber: 202,
              columnNumber: 21
            }, this) }, void 0, !1, {
              fileName: "app/routes/indexbackup.tsx",
              lineNumber: 201,
              columnNumber: 19
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/indexbackup.tsx",
            lineNumber: 194,
            columnNumber: 17
          }, this)
        },
        action9.name,
        !1,
        {
          fileName: "app/routes/indexbackup.tsx",
          lineNumber: 190,
          columnNumber: 15
        },
        this
      )) }, void 0, !1, {
        fileName: "app/routes/indexbackup.tsx",
        lineNumber: 188,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/indexbackup.tsx",
        lineNumber: 187,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime73.jsxDEV)("div", { className: "flex h-24 w-full items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime73.jsxDEV)("h1", { className: "max-w-2xl font-display text-5xl tracking-tight text-white ", children: "Our Capabilities" }, void 0, !1, {
        fileName: "app/routes/indexbackup.tsx",
        lineNumber: 220,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/indexbackup.tsx",
        lineNumber: 219,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime73.jsxDEV)("div", { className: "mx-auto h-1 w-1/3 bg-gradient-to-r from-indigo-200 via-sky-400 to-indigo-200 " }, void 0, !1, {
        fileName: "app/routes/indexbackup.tsx",
        lineNumber: 224,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime73.jsxDEV)("div", { className: "mx-auto h-1 w-1/3 bg-gradient-to-r from-indigo-200 via-sky-400 to-indigo-200 " }, void 0, !1, {
        fileName: "app/routes/indexbackup.tsx",
        lineNumber: 226,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime73.jsxDEV)(Capabilities, {}, void 0, !1, {
        fileName: "app/routes/indexbackup.tsx",
        lineNumber: 227,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/indexbackup.tsx",
      lineNumber: 132,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/indexbackup.tsx",
    lineNumber: 127,
    columnNumber: 5
  }, this);
}

// app/routes/ai.explore.tsx
var ai_explore_exports = {};
__export(ai_explore_exports, {
  default: () => Explore
});
var import_jsx_dev_runtime74 = require("react/jsx-dev-runtime");
function Explore() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime74.jsxDEV)("div", { children: "hello" }, void 0, !1, {
    fileName: "app/routes/ai.explore.tsx",
    lineNumber: 7,
    columnNumber: 4
  }, this);
}

// app/routes/home.sales.tsx
var home_sales_exports = {};
__export(home_sales_exports, {
  default: () => Sale
});

// app/images/salesopplanning.png
var salesopplanning_default = "/build/_assets/salesopplanning-JIKHZ5FF.png";

// app/components/Sales.jsx
var import_react38 = require("@remix-run/react");
var import_jsx_dev_runtime75 = require("react/jsx-dev-runtime"), trans7 = [
  {
    title: "Improved Margin",
    icon: "impact",
    to: "/",
    description: "8%"
  },
  {
    title: "Reduced Inventory",
    icon: "impact",
    to: "/",
    description: "45%"
  },
  {
    title: "Reduced Reporting Time",
    icon: "impact",
    to: "/",
    description: "20%"
  }
], kpiCards8 = [
  {
    title: "Mature S&OP process",
    icon: "perform",
    to: "/",
    description: "Continuously improve S&OP processes by moving toward an advanced Integrated Business Planning (IBP) paradigm."
  },
  {
    title: "Optimized decision making",
    icon: "perform",
    to: "/",
    description: "Develop a digital twin capable of taking real-time inputs to run scenarios that accurately mirror the performance of the network, enabling more accurate decision making."
  },
  {
    title: "Improved business alignment",
    icon: "perform",
    to: "/",
    description: "Cascade S&OP/IBP outputs across the supply chain to ensure strategic alignment and outcome-oriented decision making."
  },
  {
    title: "Strategic conformance to business plan",
    icon: "perform",
    to: "/",
    description: "Implement systems that drive long term alignment to help advance strategic goals."
  },
  {
    title: "Profitable decision making",
    icon: "perform",
    to: "/",
    description: "Profitable decision making"
  },
  {
    title: "Financial plan support",
    icon: "perform",
    to: "/",
    description: "Ensure planning and re-alignment drive toward revenue and margin targets while optimizing free cash flow."
  }
];
function Sales() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime75.jsxDEV)(import_jsx_dev_runtime75.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime75.jsxDEV)("header", { className: "space-y-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime75.jsxDEV)("p", { className: "font-display text-sm font-medium text-sky-500", children: "Plan - Optimization Engine" }, void 0, !1, {
      fileName: "app/components/Sales.jsx",
      lineNumber: 77,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/Sales.jsx",
      lineNumber: 76,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime75.jsxDEV)("div", { className: "grid grid-cols-3 gap-2 lg:flex", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime75.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime75.jsxDEV)("div", { className: "relative ", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime75.jsxDEV)("p", { className: "inline bg-gradient-to-r from-indigo-200 via-sky-400 to-indigo-200 bg-clip-text font-display text-5xl font-bold tracking-tight dark:text-transparent text-slate-900", children: "Sales & Operations Planning" }, void 0, !1, {
          fileName: "app/components/Sales.jsx",
          lineNumber: 84,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime75.jsxDEV)("p", { className: "mt-2 text-lg  text-slate-800 dark:text-white", children: "When potential risks, opportunities or threats change your supply chain plan, organizations like yours must act quickly and decisively to get back on track." }, void 0, !1, {
          fileName: "app/components/Sales.jsx",
          lineNumber: 87,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/Sales.jsx",
        lineNumber: 83,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/components/Sales.jsx",
        lineNumber: 82,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime75.jsxDEV)("div", { className: "col-span-2 flex items-center rounded-xl", children: /* @__PURE__ */ (0, import_jsx_dev_runtime75.jsxDEV)("div", { className: "not-prose flex items-center ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime75.jsxDEV)(
        "img",
        {
          className: "rounded-lg",
          src: salesopplanning_default,
          alt: "",
          width: 800,
          height: 800
        },
        void 0,
        !1,
        {
          fileName: "app/components/Sales.jsx",
          lineNumber: 96,
          columnNumber: 13
        },
        this
      ) }, void 0, !1, {
        fileName: "app/components/Sales.jsx",
        lineNumber: 95,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/components/Sales.jsx",
        lineNumber: 94,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Sales.jsx",
      lineNumber: 81,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime75.jsxDEV)("div", { className: "border-b border-black my-12" }, void 0, !1, {
      fileName: "app/components/Sales.jsx",
      lineNumber: 106,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime75.jsxDEV)("h1", { className: "font-bold font-display text-3xl tracking-tight text-slate-900 dark:text-white", children: "Quantitative Impact" }, void 0, !1, {
      fileName: "app/components/Sales.jsx",
      lineNumber: 108,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime75.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime75.jsxDEV)("div", { className: "my-6 grid grid-cols-2 gap-6 lg:grid-cols-3", children: trans7.map((truck) => /* @__PURE__ */ (0, import_jsx_dev_runtime75.jsxDEV)(
      "div",
      {
        className: "group relative rounded-xl border border-slate-200 dark:border-slate-800",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime75.jsxDEV)("div", { className: "absolute -inset-px rounded-xl border-2 border-sky-950" }, void 0, !1, {
            fileName: "app/components/Sales.jsx",
            lineNumber: 119,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime75.jsxDEV)("div", { className: "relative overflow-hidden rounded-xl p-4", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime75.jsxDEV)("h2", { className: "flex justify-center font-display text-base text-slate-900 dark:text-white", children: /* @__PURE__ */ (0, import_jsx_dev_runtime75.jsxDEV)(import_react38.Link, { to: truck.to, children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime75.jsxDEV)("span", { className: "absolute -inset-px rounded-xl" }, void 0, !1, {
                fileName: "app/components/Sales.jsx",
                lineNumber: 124,
                columnNumber: 21
              }, this),
              truck.title
            ] }, void 0, !0, {
              fileName: "app/components/Sales.jsx",
              lineNumber: 123,
              columnNumber: 19
            }, this) }, void 0, !1, {
              fileName: "app/components/Sales.jsx",
              lineNumber: 122,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime75.jsxDEV)("div", { className: "flex justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime75.jsxDEV)("p", { className: "p-1 inline-block bg-gradient-blue bg-clip-text text-6xl font-bold text-slate-700 dark:text-transparent", children: truck.description }, void 0, !1, {
              fileName: "app/components/Sales.jsx",
              lineNumber: 129,
              columnNumber: 19
            }, this) }, void 0, !1, {
              fileName: "app/components/Sales.jsx",
              lineNumber: 128,
              columnNumber: 17
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/Sales.jsx",
            lineNumber: 121,
            columnNumber: 15
          }, this)
        ]
      },
      truck.title,
      !0,
      {
        fileName: "app/components/Sales.jsx",
        lineNumber: 115,
        columnNumber: 13
      },
      this
    )) }, void 0, !1, {
      fileName: "app/components/Sales.jsx",
      lineNumber: 113,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/Sales.jsx",
      lineNumber: 112,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime75.jsxDEV)("div", { className: "border-b border-black my-12" }, void 0, !1, {
      fileName: "app/components/Sales.jsx",
      lineNumber: 139,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime75.jsxDEV)("h1", { className: "font-bold font-display text-3xl tracking-tight text-slate-900 dark:text-white", children: "Organizational Impact" }, void 0, !1, {
      fileName: "app/components/Sales.jsx",
      lineNumber: 141,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime75.jsxDEV)("div", { className: "my-8 grid grid-cols-2 gap-4 ", children: kpiCards8.map((kpi) => /* @__PURE__ */ (0, import_jsx_dev_runtime75.jsxDEV)(
      "div",
      {
        className: "rounded-xl bg-sky-50 p-6 lg:grid-cols-3 dark:bg-slate-800/60 dark:ring-1 dark:ring-slate-300/10 ",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime75.jsxDEV)("div", { className: "flex overflow-hidden rounded-xl", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime75.jsxDEV)(Icon, { icon: kpi.icon, className: "h-10 w-10" }, void 0, !1, {
              fileName: "app/components/Sales.jsx",
              lineNumber: 151,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime75.jsxDEV)("p", { className: "m-0 font-display text-xl text-sky-900 dark:text-sky-400", children: kpi.title }, void 0, !1, {
              fileName: "app/components/Sales.jsx",
              lineNumber: 152,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/Sales.jsx",
            lineNumber: 150,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime75.jsxDEV)("div", { className: "mt-2.5 text-sky-800 dark:text-slate-300 ", children: kpi.description }, void 0, !1, {
            fileName: "app/components/Sales.jsx",
            lineNumber: 156,
            columnNumber: 13
          }, this)
        ]
      },
      kpi.title,
      !0,
      {
        fileName: "app/components/Sales.jsx",
        lineNumber: 146,
        columnNumber: 11
      },
      this
    )) }, void 0, !1, {
      fileName: "app/components/Sales.jsx",
      lineNumber: 144,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Sales.jsx",
    lineNumber: 75,
    columnNumber: 5
  }, this);
}

// app/routes/home.sales.tsx
var import_jsx_dev_runtime76 = require("react/jsx-dev-runtime");
function Sale() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime76.jsxDEV)("div", { className: "min-w-0 max-w-2xl flex-auto px-4 py-16 lg:max-w-none lg:pl-8 lg:pr-0 xl:px-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime76.jsxDEV)(Sales, {}, void 0, !1, {
    fileName: "app/routes/home.sales.tsx",
    lineNumber: 7,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/home.sales.tsx",
    lineNumber: 6,
    columnNumber: 5
  }, this);
}

// app/routes/index-copy.tsx
var index_copy_exports = {};
__export(index_copy_exports, {
  default: () => Index,
  meta: () => meta
});
var import_react39 = require("@remix-run/react");
var import_jsx_dev_runtime77 = require("react/jsx-dev-runtime"), meta = () => [{ title: "Remix Notes" }];
function Index() {
  let user = useOptionalUser();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime77.jsxDEV)("main", { className: "relative min-h-screen bg-white sm:flex sm:items-center sm:justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime77.jsxDEV)("div", { className: "relative sm:pb-16 sm:pt-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime77.jsxDEV)("div", { className: "mx-auto max-w-7xl sm:px-6 lg:px-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime77.jsxDEV)("div", { className: "relative shadow-xl sm:overflow-hidden sm:rounded-2xl", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime77.jsxDEV)("div", { className: "absolute inset-0", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime77.jsxDEV)(
          "img",
          {
            className: "h-full w-full object-cover",
            src: "https://user-images.githubusercontent.com/1500684/157774694-99820c51-8165-4908-a031-34fc371ac0d6.jpg",
            alt: "Sonic Youth On Stage"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/index-copy.tsx",
            lineNumber: 16,
            columnNumber: 15
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime77.jsxDEV)("div", { className: "absolute inset-0 bg-[color:rgba(254,204,27,0.5)] mix-blend-multiply" }, void 0, !1, {
          fileName: "app/routes/index-copy.tsx",
          lineNumber: 21,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/index-copy.tsx",
        lineNumber: 15,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime77.jsxDEV)("div", { className: "relative px-4 pb-8 pt-16 sm:px-6 sm:pb-14 sm:pt-24 lg:px-8 lg:pb-20 lg:pt-32", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime77.jsxDEV)("h1", { className: "text-center text-6xl font-extrabold tracking-tight sm:text-8xl lg:text-9xl", children: /* @__PURE__ */ (0, import_jsx_dev_runtime77.jsxDEV)("span", { className: "block uppercase text-yellow-500 drop-shadow-md", children: "Indie Stack" }, void 0, !1, {
          fileName: "app/routes/index-copy.tsx",
          lineNumber: 25,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "app/routes/index-copy.tsx",
          lineNumber: 24,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime77.jsxDEV)("p", { className: "mx-auto mt-6 max-w-lg text-center text-xl text-white sm:max-w-3xl", children: "Check the README.md file for instructions on how to get this project deployed." }, void 0, !1, {
          fileName: "app/routes/index-copy.tsx",
          lineNumber: 29,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime77.jsxDEV)("div", { className: "mx-auto mt-10 max-w-sm sm:flex sm:max-w-none sm:justify-center", children: user ? /* @__PURE__ */ (0, import_jsx_dev_runtime77.jsxDEV)(
          import_react39.Link,
          {
            to: "/notes",
            className: "flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-3 text-base font-medium text-yellow-700 shadow-sm hover:bg-yellow-50 sm:px-8",
            children: [
              "View Notes for ",
              user.email
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/routes/index-copy.tsx",
            lineNumber: 35,
            columnNumber: 19
          },
          this
        ) : /* @__PURE__ */ (0, import_jsx_dev_runtime77.jsxDEV)("div", { className: "space-y-4 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5 sm:space-y-0", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime77.jsxDEV)(
            import_react39.Link,
            {
              to: "/join",
              className: "flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-3 text-base font-medium text-yellow-700 shadow-sm hover:bg-yellow-50 sm:px-8",
              children: "Sign up"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/index-copy.tsx",
              lineNumber: 43,
              columnNumber: 21
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime77.jsxDEV)(
            import_react39.Link,
            {
              to: "/login",
              className: "flex items-center justify-center rounded-md bg-yellow-500 px-4 py-3 font-medium text-white hover:bg-yellow-600",
              children: "Log In"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/index-copy.tsx",
              lineNumber: 49,
              columnNumber: 21
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/index-copy.tsx",
          lineNumber: 42,
          columnNumber: 19
        }, this) }, void 0, !1, {
          fileName: "app/routes/index-copy.tsx",
          lineNumber: 33,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime77.jsxDEV)("a", { href: "https://remix.run", children: /* @__PURE__ */ (0, import_jsx_dev_runtime77.jsxDEV)(
          "img",
          {
            src: "https://user-images.githubusercontent.com/1500684/158298926-e45dafff-3544-4b69-96d6-d3bcc33fc76a.svg",
            alt: "Remix",
            className: "mx-auto mt-16 w-full max-w-[12rem] md:max-w-[16rem]"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/index-copy.tsx",
            lineNumber: 59,
            columnNumber: 17
          },
          this
        ) }, void 0, !1, {
          fileName: "app/routes/index-copy.tsx",
          lineNumber: 58,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/index-copy.tsx",
        lineNumber: 23,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/index-copy.tsx",
      lineNumber: 14,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/index-copy.tsx",
      lineNumber: 13,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime77.jsxDEV)("div", { className: "mx-auto max-w-7xl px-4 py-2 sm:px-6 lg:px-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime77.jsxDEV)("div", { className: "mt-6 flex flex-wrap justify-center gap-8", children: [
      {
        src: "https://user-images.githubusercontent.com/1500684/157764397-ccd8ea10-b8aa-4772-a99b-35de937319e1.svg",
        alt: "Fly.io",
        href: "https://fly.io"
      },
      {
        src: "https://user-images.githubusercontent.com/1500684/157764395-137ec949-382c-43bd-a3c0-0cb8cb22e22d.svg",
        alt: "SQLite",
        href: "https://sqlite.org"
      },
      {
        src: "https://user-images.githubusercontent.com/1500684/157764484-ad64a21a-d7fb-47e3-8669-ec046da20c1f.svg",
        alt: "Prisma",
        href: "https://prisma.io"
      },
      {
        src: "https://user-images.githubusercontent.com/1500684/157764276-a516a239-e377-4a20-b44a-0ac7b65c8c14.svg",
        alt: "Tailwind",
        href: "https://tailwindcss.com"
      },
      {
        src: "https://user-images.githubusercontent.com/1500684/157764454-48ac8c71-a2a9-4b5e-b19c-edef8b8953d6.svg",
        alt: "Cypress",
        href: "https://www.cypress.io"
      },
      {
        src: "https://user-images.githubusercontent.com/1500684/157772386-75444196-0604-4340-af28-53b236faa182.svg",
        alt: "MSW",
        href: "https://mswjs.io"
      },
      {
        src: "https://user-images.githubusercontent.com/1500684/157772447-00fccdce-9d12-46a3-8bb4-fac612cdc949.svg",
        alt: "Vitest",
        href: "https://vitest.dev"
      },
      {
        src: "https://user-images.githubusercontent.com/1500684/157772662-92b0dd3a-453f-4d18-b8be-9fa6efde52cf.png",
        alt: "Testing Library",
        href: "https://testing-library.com"
      },
      {
        src: "https://user-images.githubusercontent.com/1500684/157772934-ce0a943d-e9d0-40f8-97f3-f464c0811643.svg",
        alt: "Prettier",
        href: "https://prettier.io"
      },
      {
        src: "https://user-images.githubusercontent.com/1500684/157772990-3968ff7c-b551-4c55-a25c-046a32709a8e.svg",
        alt: "ESLint",
        href: "https://eslint.org"
      },
      {
        src: "https://user-images.githubusercontent.com/1500684/157773063-20a0ed64-b9f8-4e0b-9d1e-0b65a3d4a6db.svg",
        alt: "TypeScript",
        href: "https://typescriptlang.org"
      }
    ].map((img) => /* @__PURE__ */ (0, import_jsx_dev_runtime77.jsxDEV)(
      "a",
      {
        href: img.href,
        className: "flex h-16 w-32 justify-center p-1 grayscale transition hover:grayscale-0 focus:grayscale-0",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime77.jsxDEV)("img", { alt: img.alt, src: img.src, className: "object-contain" }, void 0, !1, {
          fileName: "app/routes/index-copy.tsx",
          lineNumber: 133,
          columnNumber: 17
        }, this)
      },
      img.href,
      !1,
      {
        fileName: "app/routes/index-copy.tsx",
        lineNumber: 128,
        columnNumber: 15
      },
      this
    )) }, void 0, !1, {
      fileName: "app/routes/index-copy.tsx",
      lineNumber: 70,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/index-copy.tsx",
      lineNumber: 69,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/index-copy.tsx",
    lineNumber: 12,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/index-copy.tsx",
    lineNumber: 11,
    columnNumber: 5
  }, this);
}

// app/routes/login-blue.jsx
var login_blue_exports = {};
__export(login_blue_exports, {
  default: () => Chart
});
var import_react40 = require("@remix-run/react");
var import_jsx_dev_runtime78 = require("react/jsx-dev-runtime");
function Chart() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime78.jsxDEV)(import_jsx_dev_runtime78.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime78.jsxDEV)("div", { className: "flex min-h-full flex-1", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime78.jsxDEV)("div", { className: "relative h-screen hidden mt-auto lg:block bg-slate-900  w-[60rem]", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime78.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime78.jsxDEV)(HeroBackground, { className: "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 lg:left-0 lg:translate-x-0 lg:translate-y-[-60%]" }, void 0, !1, {
        fileName: "app/routes/login-blue.jsx",
        lineNumber: 14,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/login-blue.jsx",
        lineNumber: 13,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime78.jsxDEV)("div", { className: "relative", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime78.jsxDEV)(
          "img",
          {
            className: "absolute -right-28 -top-40",
            src: blur_cyan_default,
            alt: "",
            width: 530,
            height: 530
          },
          void 0,
          !1,
          {
            fileName: "app/routes/login-blue.jsx",
            lineNumber: 18,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime78.jsxDEV)(
          "img",
          {
            className: "absolute top-8 -right-28",
            src: blur_indigo_default,
            alt: "",
            width: 567,
            height: 567
          },
          void 0,
          !1,
          {
            fileName: "app/routes/login-blue.jsx",
            lineNumber: 25,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime78.jsxDEV)(
          "img",
          {
            className: "absolute -bottom-[59rem] right-[33rem]",
            src: blur_cyan_default,
            alt: "",
            width: 530,
            height: 400
          },
          void 0,
          !1,
          {
            fileName: "app/routes/login-blue.jsx",
            lineNumber: 33,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime78.jsxDEV)(
          "img",
          {
            className: "absolute -bottom-[50rem] right-[23rem]",
            src: blur_indigo_default,
            alt: "",
            width: 567,
            height: 530
          },
          void 0,
          !1,
          {
            fileName: "app/routes/login-blue.jsx",
            lineNumber: 40,
            columnNumber: 13
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/login-blue.jsx",
        lineNumber: 17,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime78.jsxDEV)("div", { className: " flex flex-1 flex-col justify-center items-center mt-auto h-screen px-4 py-12 text-white ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime78.jsxDEV)("div", { className: "relative mt-4 ", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime78.jsxDEV)("p", { className: "flex justify-center bg-gradient-to-r from-indigo-200 via-sky-400 to-indigo-200 bg-clip-text font-display text-7xl font-bold tracking-tight text-transparent ", children: "BlueNorth AI" }, void 0, !1, {
          fileName: "app/routes/login-blue.jsx",
          lineNumber: 50,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime78.jsxDEV)("p", { className: " flex justify-center text-center mt-3 text-3xl tracking-tight text-white", children: "Enterprise AI suite to transform Supply Chain Planning and Execution" }, void 0, !1, {
          fileName: "app/routes/login-blue.jsx",
          lineNumber: 53,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/login-blue.jsx",
        lineNumber: 49,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/login-blue.jsx",
        lineNumber: 48,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/login-blue.jsx",
      lineNumber: 12,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime78.jsxDEV)("div", { className: "flex flex-1 flex-col justify-center items-center px-4 py-12 sm:px-6 lg:px-20 xl:px-24", children: /* @__PURE__ */ (0, import_jsx_dev_runtime78.jsxDEV)("div", { className: "mx-auto w-full max-w-sm lg:w-96 ", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime78.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime78.jsxDEV)(
          "img",
          {
            className: "mx-auto h-10 w-auto",
            src: "/assets/logo.png",
            alt: "Your Company"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/login-blue.jsx",
            lineNumber: 64,
            columnNumber: 15
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime78.jsxDEV)("h2", { className: "mt-8 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900", children: "Sign in to your account" }, void 0, !1, {
          fileName: "app/routes/login-blue.jsx",
          lineNumber: 69,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/login-blue.jsx",
        lineNumber: 63,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime78.jsxDEV)("div", { className: "mt-10", children: /* @__PURE__ */ (0, import_jsx_dev_runtime78.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime78.jsxDEV)("form", { action: "#", method: "POST", className: "space-y-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime78.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime78.jsxDEV)(
            "label",
            {
              htmlFor: "email",
              className: "block text-sm font-medium leading-6 text-gray-900",
              children: "Email address"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/login-blue.jsx",
              lineNumber: 77,
              columnNumber: 21
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime78.jsxDEV)("div", { className: "mt-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime78.jsxDEV)(
            "input",
            {
              id: "email",
              name: "email",
              type: "email",
              autoComplete: "email",
              required: !0,
              className: "block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/login-blue.jsx",
              lineNumber: 84,
              columnNumber: 23
            },
            this
          ) }, void 0, !1, {
            fileName: "app/routes/login-blue.jsx",
            lineNumber: 83,
            columnNumber: 21
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/login-blue.jsx",
          lineNumber: 76,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime78.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime78.jsxDEV)(
            "label",
            {
              htmlFor: "password",
              className: "block text-sm font-medium leading-6 text-gray-900",
              children: "Password"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/login-blue.jsx",
              lineNumber: 96,
              columnNumber: 21
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime78.jsxDEV)("div", { className: "mt-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime78.jsxDEV)(
            "input",
            {
              id: "password",
              name: "password",
              type: "password",
              autoComplete: "current-password",
              required: !0,
              className: "block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/login-blue.jsx",
              lineNumber: 103,
              columnNumber: 23
            },
            this
          ) }, void 0, !1, {
            fileName: "app/routes/login-blue.jsx",
            lineNumber: 102,
            columnNumber: 21
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/login-blue.jsx",
          lineNumber: 95,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime78.jsxDEV)("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime78.jsxDEV)("div", { className: "flex items-center", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime78.jsxDEV)(
              "input",
              {
                id: "remember-me",
                name: "remember-me",
                type: "checkbox",
                className: "h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/login-blue.jsx",
                lineNumber: 116,
                columnNumber: 23
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime78.jsxDEV)(
              "label",
              {
                htmlFor: "remember-me",
                className: "ml-3 block text-sm leading-6 text-gray-700",
                children: "Remember me"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/login-blue.jsx",
                lineNumber: 122,
                columnNumber: 23
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/login-blue.jsx",
            lineNumber: 115,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime78.jsxDEV)("div", { className: "text-sm leading-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime78.jsxDEV)(
            import_react40.Link,
            {
              href: "#",
              className: "font-semibold text-sky-500 hover:text-sky-600",
              children: "Forgot password?"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/login-blue.jsx",
              lineNumber: 131,
              columnNumber: 23
            },
            this
          ) }, void 0, !1, {
            fileName: "app/routes/login-blue.jsx",
            lineNumber: 130,
            columnNumber: 21
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/login-blue.jsx",
          lineNumber: 114,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime78.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime78.jsxDEV)(import_react40.Link, { to: "/demo/dashboard", children: /* @__PURE__ */ (0, import_jsx_dev_runtime78.jsxDEV)(
          "button",
          {
            type: "submit",
            className: "flex w-full justify-center rounded-md bg-gradient-blue px-3 py-1.5 text-sm font-semibold leading-6 text-gray-900 shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
            children: "Sign in"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/login-blue.jsx",
            lineNumber: 142,
            columnNumber: 23
          },
          this
        ) }, void 0, !1, {
          fileName: "app/routes/login-blue.jsx",
          lineNumber: 141,
          columnNumber: 21
        }, this) }, void 0, !1, {
          fileName: "app/routes/login-blue.jsx",
          lineNumber: 140,
          columnNumber: 19
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/login-blue.jsx",
        lineNumber: 75,
        columnNumber: 17
      }, this) }, void 0, !1, {
        fileName: "app/routes/login-blue.jsx",
        lineNumber: 74,
        columnNumber: 15
      }, this) }, void 0, !1, {
        fileName: "app/routes/login-blue.jsx",
        lineNumber: 73,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime78.jsxDEV)("p", { className: "text-center text-sm leading-6 text-gray-500", children: [
        "Not a member?",
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime78.jsxDEV)(
          import_react40.Link,
          {
            href: "#",
            className: "font-semibold text-sky-500 hover:text-sky-600",
            children: "Start a 14-day free trial"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/login-blue.jsx",
            lineNumber: 156,
            columnNumber: 15
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/login-blue.jsx",
        lineNumber: 154,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/login-blue.jsx",
      lineNumber: 62,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/login-blue.jsx",
      lineNumber: 61,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/login-blue.jsx",
    lineNumber: 11,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/login-blue.jsx",
    lineNumber: 10,
    columnNumber: 5
  }, this);
}

// app/routes/ai._index.tsx
var ai_index_exports = {};
__export(ai_index_exports, {
  default: () => ChatLayout,
  loader: () => loader6
});
var import_node7 = require("@remix-run/node");
var import_jsx_dev_runtime79 = require("react/jsx-dev-runtime"), loader6 = async ({ request }) => {
  let userId = await requireUserId(request), chats = await getChats(userId);
  if (!chats)
    throw new Response("Not Found", { status: 404 });
  return (0, import_node7.json)({ chats });
};
function ChatLayout() {
  let id = nanoid();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime79.jsxDEV)("div", { className: "relative flex h-[calc(100vh_-_theme(spacing.16))] overflow-hidden", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime79.jsxDEV)(SidebarDesktop, {}, void 0, !1, {
      fileName: "app/routes/ai._index.tsx",
      lineNumber: 26,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime79.jsxDEV)("div", { className: "group w-full overflow-auto pl-0 animate-in duration-300 ease-in-out peer-[[data-state=open]]:lg:pl-[250px] peer-[[data-state=open]]:xl:pl-[300px]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime79.jsxDEV)(Chat, { id }, void 0, !1, {
      fileName: "app/routes/ai._index.tsx",
      lineNumber: 28,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/ai._index.tsx",
      lineNumber: 27,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/ai._index.tsx",
    lineNumber: 25,
    columnNumber: 5
  }, this);
}

// app/routes/api_.chat.tsx
var api_chat_exports = {};
__export(api_chat_exports, {
  action: () => action3
});
var import_kv2 = require("@vercel/kv"), import_ai = require("ai"), import_openai = __toESM(require("openai"));
async function action3({ request }) {
  let openai = new import_openai.default({
    apiKey: process.env.OPENAI_API_KEY
  }), userId = await requireUserId(request), json11 = await request.json(), { messages, previewToken } = json11;
  if (!userId)
    return new Response("Unauthorized", {
      status: 401
    });
  previewToken && (openai.apiKey = previewToken);
  let res = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages,
    temperature: 0.1,
    stream: !0
  }), stream = (0, import_ai.OpenAIStream)(res, {
    async onCompletion(completion) {
      let title = json11.messages[0].content.substring(0, 100), id = json11.id ?? nanoid(), createdAt = Date.now(), path = `/chat/${id}`, payload = {
        id,
        title,
        userId,
        createdAt,
        path,
        messages: [
          ...messages,
          {
            content: completion,
            role: "assistant"
          }
        ]
      };
      await import_kv2.kv.hmset(`chat:${id}`, payload), await import_kv2.kv.zadd(`user:chat:${userId}`, {
        score: createdAt,
        member: `chat:${id}`
      });
    }
  });
  return new import_ai.StreamingTextResponse(stream);
}

// app/routes/not-found.jsx
var not_found_exports = {};
__export(not_found_exports, {
  default: () => NotFound
});
var import_react41 = require("@remix-run/react"), import_jsx_dev_runtime80 = require("react/jsx-dev-runtime");
function NotFound() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime80.jsxDEV)("div", { className: "min-w-0 max-w-2xl flex-auto px-4 py-16 lg:max-w-none lg:pl-8 lg:pr-0 xl:px-16", children: /* @__PURE__ */ (0, import_jsx_dev_runtime80.jsxDEV)("div", { className: "flex h-full flex-col items-center justify-center text-center", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime80.jsxDEV)("p", { className: "font-display text-sm font-medium text-slate-900 dark:text-white", children: "404" }, void 0, !1, {
      fileName: "app/routes/not-found.jsx",
      lineNumber: 7,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime80.jsxDEV)("h1", { className: "mt-3 font-display text-3xl tracking-tight text-slate-900 dark:text-white", children: "Page not found" }, void 0, !1, {
      fileName: "app/routes/not-found.jsx",
      lineNumber: 10,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime80.jsxDEV)("p", { className: "mt-2 text-sm text-slate-500 dark:text-slate-400", children: "Sorry, we couldn\u2019t find the page you\u2019re looking for." }, void 0, !1, {
      fileName: "app/routes/not-found.jsx",
      lineNumber: 13,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime80.jsxDEV)(
      import_react41.Link,
      {
        to: "/",
        className: "mt-8 text-sm font-medium text-slate-900 dark:text-white",
        children: "Go back home"
      },
      void 0,
      !1,
      {
        fileName: "app/routes/not-found.jsx",
        lineNumber: 16,
        columnNumber: 9
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/routes/not-found.jsx",
    lineNumber: 6,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/not-found.jsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

// app/routes/notes.new.tsx
var notes_new_exports = {};
__export(notes_new_exports, {
  action: () => action4,
  default: () => NewNotePage
});
var import_node8 = require("@remix-run/node"), import_react42 = require("@remix-run/react"), import_react43 = require("react");
var import_jsx_dev_runtime81 = require("react/jsx-dev-runtime"), action4 = async ({ request }) => {
  let userId = await requireUserId(request), formData = await request.formData(), title = formData.get("title"), body = formData.get("body");
  if (typeof title != "string" || title.length === 0)
    return (0, import_node8.json)(
      { errors: { body: null, title: "Title is required" } },
      { status: 400 }
    );
  if (typeof body != "string" || body.length === 0)
    return (0, import_node8.json)(
      { errors: { body: "Body is required", title: null } },
      { status: 400 }
    );
  let note = await createNote({ body, title, userId });
  return (0, import_node8.redirect)(`/notes/${note.id}`);
};
function NewNotePage() {
  let actionData = (0, import_react42.useActionData)(), titleRef = (0, import_react43.useRef)(null), bodyRef = (0, import_react43.useRef)(null);
  return (0, import_react43.useEffect)(() => {
    actionData?.errors?.title ? titleRef.current?.focus() : actionData?.errors?.body && bodyRef.current?.focus();
  }, [actionData]), /* @__PURE__ */ (0, import_jsx_dev_runtime81.jsxDEV)(
    import_react42.Form,
    {
      method: "post",
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 8,
        width: "100%"
      },
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime81.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime81.jsxDEV)("label", { className: "flex w-full flex-col gap-1", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime81.jsxDEV)("span", { children: "Title: " }, void 0, !1, {
              fileName: "app/routes/notes.new.tsx",
              lineNumber: 60,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime81.jsxDEV)(
              "input",
              {
                ref: titleRef,
                name: "title",
                className: "flex-1 rounded-md border-2 border-blue-500 px-3 text-lg leading-loose",
                "aria-invalid": actionData?.errors?.title ? !0 : void 0,
                "aria-errormessage": actionData?.errors?.title ? "title-error" : void 0
              },
              void 0,
              !1,
              {
                fileName: "app/routes/notes.new.tsx",
                lineNumber: 61,
                columnNumber: 11
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/notes.new.tsx",
            lineNumber: 59,
            columnNumber: 9
          }, this),
          actionData?.errors?.title ? /* @__PURE__ */ (0, import_jsx_dev_runtime81.jsxDEV)("div", { className: "pt-1 text-red-700", id: "title-error", children: actionData.errors.title }, void 0, !1, {
            fileName: "app/routes/notes.new.tsx",
            lineNumber: 72,
            columnNumber: 11
          }, this) : null
        ] }, void 0, !0, {
          fileName: "app/routes/notes.new.tsx",
          lineNumber: 58,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime81.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime81.jsxDEV)("label", { className: "flex w-full flex-col gap-1", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime81.jsxDEV)("span", { children: "Body: " }, void 0, !1, {
              fileName: "app/routes/notes.new.tsx",
              lineNumber: 80,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime81.jsxDEV)(
              "textarea",
              {
                ref: bodyRef,
                name: "body",
                rows: 8,
                className: "w-full flex-1 rounded-md border-2 border-blue-500 px-3 py-2 text-lg leading-6",
                "aria-invalid": actionData?.errors?.body ? !0 : void 0,
                "aria-errormessage": actionData?.errors?.body ? "body-error" : void 0
              },
              void 0,
              !1,
              {
                fileName: "app/routes/notes.new.tsx",
                lineNumber: 81,
                columnNumber: 11
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/notes.new.tsx",
            lineNumber: 79,
            columnNumber: 9
          }, this),
          actionData?.errors?.body ? /* @__PURE__ */ (0, import_jsx_dev_runtime81.jsxDEV)("div", { className: "pt-1 text-red-700", id: "body-error", children: actionData.errors.body }, void 0, !1, {
            fileName: "app/routes/notes.new.tsx",
            lineNumber: 93,
            columnNumber: 11
          }, this) : null
        ] }, void 0, !0, {
          fileName: "app/routes/notes.new.tsx",
          lineNumber: 78,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime81.jsxDEV)("div", { className: "text-right", children: /* @__PURE__ */ (0, import_jsx_dev_runtime81.jsxDEV)(
          "button",
          {
            type: "submit",
            className: "rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:bg-blue-400",
            children: "Save"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/notes.new.tsx",
            lineNumber: 100,
            columnNumber: 9
          },
          this
        ) }, void 0, !1, {
          fileName: "app/routes/notes.new.tsx",
          lineNumber: 99,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/routes/notes.new.tsx",
      lineNumber: 49,
      columnNumber: 5
    },
    this
  );
}

// app/routes/home.kpi.tsx
var home_kpi_exports = {};
__export(home_kpi_exports, {
  default: () => Kpicard
});

// app/components/Kpi.jsx
var import_react44 = require("@remix-run/react");

// app/images/kpicard.png
var kpicard_default = "/build/_assets/kpicard-AALESV6W.png";

// app/components/Kpi.jsx
var import_jsx_dev_runtime82 = require("react/jsx-dev-runtime"), trans8 = [
  {
    title: "Administrative Cost Reduction",
    icon: "impact",
    to: "/",
    description: "7%"
  },
  {
    title: "Annual Cost Reduction",
    icon: "impact",
    to: "/",
    description: "10%"
  },
  {
    title: "Improved Service Levels",
    icon: "impact",
    to: "/",
    description: "35%"
  },
  {
    title: "Cost Reduction",
    icon: "impact",
    to: "/",
    description: "45%"
  },
  {
    title: "Increased Productivity",
    icon: "impact",
    to: "/",
    description: "10%"
  },
  {
    title: "Improved Accuracy",
    icon: "impact",
    to: "/",
    description: "90%"
  },
  {
    title: "Return on Investment",
    icon: "impact",
    to: "/",
    description: "250%"
  },
  {
    title: "Faster Approval Times",
    icon: "impact",
    to: "/",
    description: "50%"
  },
  {
    title: "Reduced Inventory",
    icon: "impact",
    to: "/",
    description: "45"
  },
  {
    title: "Reduced Changeover Time",
    icon: "impact",
    to: "/",
    description: "32%%"
  },
  {
    title: "Reduced Production Scheduling",
    icon: "impact",
    to: "/",
    description: "-25%"
  },
  {
    title: "Reduced Inventory",
    icon: "impact",
    to: "/",
    description: "35%"
  },
  {
    title: "Improved Margin",
    icon: "impact",
    to: "/",
    description: "8%"
  },
  {
    title: "Reduced Inventory",
    icon: "impact",
    to: "/",
    description: "45%"
  },
  {
    title: "Reduced Reporting Time",
    icon: "impact",
    to: "/",
    description: "20%"
  },
  {
    title: "Inventory Reduction",
    icon: "impact",
    to: "/",
    description: "5%"
  },
  {
    title: "Productivity Improvement",
    icon: "impact",
    to: "/",
    description: "50%"
  },
  {
    title: "Increase in Allocation Accuracy",
    icon: "impact",
    to: "/",
    description: "25%"
  },
  {
    title: "Return on Investment",
    icon: "impact",
    to: "/",
    description: "250%"
  },
  {
    title: "Faster Approval Times",
    icon: "impact",
    to: "/",
    description: "50%"
  },
  {
    title: "Reduced Inventory",
    icon: "impact",
    to: "/",
    description: "45%"
  }
];
function Kpi() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime82.jsxDEV)(import_jsx_dev_runtime82.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime82.jsxDEV)("header", { className: "space-y-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime82.jsxDEV)("p", { className: "font-display text-sm font-medium text-sky-500", children: "Perform - Execution Engine" }, void 0, !1, {
      fileName: "app/components/Kpi.jsx",
      lineNumber: 141,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/Kpi.jsx",
      lineNumber: 140,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime82.jsxDEV)("div", { className: "grid grid-cols-3 gap-2 lg:flex", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime82.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime82.jsxDEV)("div", { className: "relative ", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime82.jsxDEV)("p", { className: "inline bg-gradient-to-r from-indigo-200 via-sky-400 to-indigo-200 bg-clip-text font-display text-5xl font-bold tracking-tight dark:text-transparent text-slate-900", children: "Cascaded KPI Scorecard" }, void 0, !1, {
          fileName: "app/components/Kpi.jsx",
          lineNumber: 148,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime82.jsxDEV)("p", { className: "mt-2 text-lg  text-slate-800 dark:text-white", children: "Across industries, organizations like yours are pivoting to manage increasingly complex supply chains, while juggling delivery expectations and cost." }, void 0, !1, {
          fileName: "app/components/Kpi.jsx",
          lineNumber: 151,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/Kpi.jsx",
        lineNumber: 147,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/components/Kpi.jsx",
        lineNumber: 146,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime82.jsxDEV)("div", { className: "col-span-2 flex items-center rounded-xl", children: /* @__PURE__ */ (0, import_jsx_dev_runtime82.jsxDEV)("div", { className: "not-prose flex items-center ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime82.jsxDEV)(
        "img",
        {
          className: "rounded-lg",
          src: kpicard_default,
          alt: "",
          width: 800,
          height: 800
        },
        void 0,
        !1,
        {
          fileName: "app/components/Kpi.jsx",
          lineNumber: 160,
          columnNumber: 13
        },
        this
      ) }, void 0, !1, {
        fileName: "app/components/Kpi.jsx",
        lineNumber: 159,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/components/Kpi.jsx",
        lineNumber: 158,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Kpi.jsx",
      lineNumber: 145,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime82.jsxDEV)("div", { className: "border-b border-black my-12" }, void 0, !1, {
      fileName: "app/components/Kpi.jsx",
      lineNumber: 171,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime82.jsxDEV)("h1", { className: "font-bold font-display text-3xl tracking-tight text-slate-900 dark:text-white", children: "Quantitative Impact" }, void 0, !1, {
      fileName: "app/components/Kpi.jsx",
      lineNumber: 173,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime82.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime82.jsxDEV)("div", { className: "my-6 grid grid-cols-2 gap-6 lg:grid-cols-3", children: trans8.map((truck) => /* @__PURE__ */ (0, import_jsx_dev_runtime82.jsxDEV)(
      "div",
      {
        className: "group relative rounded-xl border border-slate-200 dark:border-slate-800",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime82.jsxDEV)("div", { className: "absolute -inset-px rounded-xl border-2 border-sky-950" }, void 0, !1, {
            fileName: "app/components/Kpi.jsx",
            lineNumber: 184,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime82.jsxDEV)("div", { className: "relative overflow-hidden rounded-xl p-4", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime82.jsxDEV)("h2", { className: "flex justify-center font-display text-base text-slate-900 dark:text-white", children: /* @__PURE__ */ (0, import_jsx_dev_runtime82.jsxDEV)(import_react44.Link, { to: truck.to, children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime82.jsxDEV)("span", { className: "absolute -inset-px rounded-xl" }, void 0, !1, {
                fileName: "app/components/Kpi.jsx",
                lineNumber: 189,
                columnNumber: 21
              }, this),
              truck.title
            ] }, void 0, !0, {
              fileName: "app/components/Kpi.jsx",
              lineNumber: 188,
              columnNumber: 19
            }, this) }, void 0, !1, {
              fileName: "app/components/Kpi.jsx",
              lineNumber: 187,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime82.jsxDEV)("div", { className: "flex justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime82.jsxDEV)("p", { className: "p-1 inline-block bg-gradient-blue bg-clip-text text-6xl font-bold text-slate-700 dark:text-transparent", children: truck.description }, void 0, !1, {
              fileName: "app/components/Kpi.jsx",
              lineNumber: 194,
              columnNumber: 19
            }, this) }, void 0, !1, {
              fileName: "app/components/Kpi.jsx",
              lineNumber: 193,
              columnNumber: 17
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/Kpi.jsx",
            lineNumber: 186,
            columnNumber: 15
          }, this)
        ]
      },
      truck.title,
      !0,
      {
        fileName: "app/components/Kpi.jsx",
        lineNumber: 180,
        columnNumber: 13
      },
      this
    )) }, void 0, !1, {
      fileName: "app/components/Kpi.jsx",
      lineNumber: 178,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/Kpi.jsx",
      lineNumber: 177,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Kpi.jsx",
    lineNumber: 139,
    columnNumber: 5
  }, this);
}

// app/routes/home.kpi.tsx
var import_jsx_dev_runtime83 = require("react/jsx-dev-runtime");
function Kpicard() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime83.jsxDEV)("div", { className: "min-w-0 max-w-2xl flex-auto px-4 py-16 lg:max-w-none lg:pl-8 lg:pr-0 xl:px-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime83.jsxDEV)(Kpi, {}, void 0, !1, {
    fileName: "app/routes/home.kpi.tsx",
    lineNumber: 6,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/home.kpi.tsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

// server-entry-module:@remix-run/dev/server-build
var route26 = __toESM(require_slideNew());

// app/routes/logout.tsx
var logout_exports = {};
__export(logout_exports, {
  action: () => action5,
  loader: () => loader7
});
var import_node9 = require("@remix-run/node");
var action5 = async ({ request }) => logout(request), loader7 = async () => (0, import_node9.redirect)("/");

// app/routes/signup.jsx
var signup_exports = {};
__export(signup_exports, {
  default: () => Chart2
});
var import_react45 = require("@remix-run/react");
var import_jsx_dev_runtime84 = require("react/jsx-dev-runtime");
function Chart2() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime84.jsxDEV)(import_jsx_dev_runtime84.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime84.jsxDEV)("div", { className: "flex min-h-full flex-1", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime84.jsxDEV)("div", { className: "relative h-screen hidden mt-auto lg:block bg-slate-900  w-[60rem]", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime84.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime84.jsxDEV)(HeroBackground, { className: "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 lg:left-0 lg:translate-x-0 lg:translate-y-[-60%]" }, void 0, !1, {
        fileName: "app/routes/signup.jsx",
        lineNumber: 14,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/signup.jsx",
        lineNumber: 13,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime84.jsxDEV)("div", { className: "relative", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime84.jsxDEV)(
          "img",
          {
            className: "absolute -right-28 -top-40",
            src: blur_cyan_default,
            alt: "",
            width: 530,
            height: 530
          },
          void 0,
          !1,
          {
            fileName: "app/routes/signup.jsx",
            lineNumber: 18,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime84.jsxDEV)(
          "img",
          {
            className: "absolute top-8 -right-28",
            src: blur_indigo_default,
            alt: "",
            width: 567,
            height: 567
          },
          void 0,
          !1,
          {
            fileName: "app/routes/signup.jsx",
            lineNumber: 25,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime84.jsxDEV)(
          "img",
          {
            className: "absolute -bottom-[59rem] right-[33rem]",
            src: blur_cyan_default,
            alt: "",
            width: 530,
            height: 400
          },
          void 0,
          !1,
          {
            fileName: "app/routes/signup.jsx",
            lineNumber: 33,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime84.jsxDEV)(
          "img",
          {
            className: "absolute -bottom-[50rem] right-[23rem]",
            src: blur_indigo_default,
            alt: "",
            width: 567,
            height: 530
          },
          void 0,
          !1,
          {
            fileName: "app/routes/signup.jsx",
            lineNumber: 40,
            columnNumber: 13
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/signup.jsx",
        lineNumber: 17,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime84.jsxDEV)("div", { className: " flex flex-1 flex-col justify-center items-center mt-auto h-screen px-4 py-12 text-white ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime84.jsxDEV)("div", { className: "relative mt-4 ", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime84.jsxDEV)("p", { className: "flex justify-center bg-gradient-to-r from-indigo-200 via-sky-400 to-indigo-200 bg-clip-text font-display text-7xl font-bold tracking-tight text-transparent ", children: "BlueNorth AI" }, void 0, !1, {
          fileName: "app/routes/signup.jsx",
          lineNumber: 50,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime84.jsxDEV)("p", { className: " flex justify-center text-center mt-3 text-3xl tracking-tight text-white", children: "Enterprise AI suite to transform Supply Chain Planning and Execution" }, void 0, !1, {
          fileName: "app/routes/signup.jsx",
          lineNumber: 53,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/signup.jsx",
        lineNumber: 49,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/signup.jsx",
        lineNumber: 48,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/signup.jsx",
      lineNumber: 12,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime84.jsxDEV)("div", { className: "flex flex-1 flex-col justify-center items-center px-4 py-12 sm:px-6 lg:px-20 xl:px-24", children: /* @__PURE__ */ (0, import_jsx_dev_runtime84.jsxDEV)("div", { className: "mx-auto w-full max-w-sm lg:w-96 ", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime84.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime84.jsxDEV)(
          "img",
          {
            className: "mx-auto h-10 w-auto",
            src: "/assets/logo.png",
            alt: "Your Company"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/signup.jsx",
            lineNumber: 64,
            columnNumber: 15
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime84.jsxDEV)("h2", { className: "mt-8 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900", children: "Sign in to your account" }, void 0, !1, {
          fileName: "app/routes/signup.jsx",
          lineNumber: 69,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/signup.jsx",
        lineNumber: 63,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime84.jsxDEV)("div", { className: "mt-10", children: /* @__PURE__ */ (0, import_jsx_dev_runtime84.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime84.jsxDEV)("form", { action: "#", method: "POST", className: "space-y-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime84.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime84.jsxDEV)(
            "label",
            {
              htmlFor: "email",
              className: "block text-sm font-medium leading-6 text-gray-900",
              children: "Email address"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/signup.jsx",
              lineNumber: 77,
              columnNumber: 21
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime84.jsxDEV)("div", { className: "mt-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime84.jsxDEV)(
            "input",
            {
              id: "email",
              name: "email",
              type: "email",
              autoComplete: "email",
              required: !0,
              className: "block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/signup.jsx",
              lineNumber: 84,
              columnNumber: 23
            },
            this
          ) }, void 0, !1, {
            fileName: "app/routes/signup.jsx",
            lineNumber: 83,
            columnNumber: 21
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/signup.jsx",
          lineNumber: 76,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime84.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime84.jsxDEV)(
            "label",
            {
              htmlFor: "password",
              className: "block text-sm font-medium leading-6 text-gray-900",
              children: "Password"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/signup.jsx",
              lineNumber: 96,
              columnNumber: 21
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime84.jsxDEV)("div", { className: "mt-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime84.jsxDEV)(
            "input",
            {
              id: "password",
              name: "password",
              type: "password",
              autoComplete: "current-password",
              required: !0,
              className: "block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/signup.jsx",
              lineNumber: 103,
              columnNumber: 23
            },
            this
          ) }, void 0, !1, {
            fileName: "app/routes/signup.jsx",
            lineNumber: 102,
            columnNumber: 21
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/signup.jsx",
          lineNumber: 95,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime84.jsxDEV)("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime84.jsxDEV)("div", { className: "flex items-center", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime84.jsxDEV)(
              "input",
              {
                id: "remember-me",
                name: "remember-me",
                type: "checkbox",
                className: "h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/signup.jsx",
                lineNumber: 116,
                columnNumber: 23
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime84.jsxDEV)(
              "label",
              {
                htmlFor: "remember-me",
                className: "ml-3 block text-sm leading-6 text-gray-700",
                children: "Remember me"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/signup.jsx",
                lineNumber: 122,
                columnNumber: 23
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/signup.jsx",
            lineNumber: 115,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime84.jsxDEV)("div", { className: "text-sm leading-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime84.jsxDEV)(
            import_react45.Link,
            {
              href: "#",
              className: "font-semibold text-sky-500 hover:text-sky-600",
              children: "Forgot password?"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/signup.jsx",
              lineNumber: 131,
              columnNumber: 23
            },
            this
          ) }, void 0, !1, {
            fileName: "app/routes/signup.jsx",
            lineNumber: 130,
            columnNumber: 21
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/signup.jsx",
          lineNumber: 114,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime84.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime84.jsxDEV)(import_react45.Link, { to: "/demo/dashboard", children: /* @__PURE__ */ (0, import_jsx_dev_runtime84.jsxDEV)(
          "button",
          {
            type: "submit",
            className: "flex w-full justify-center rounded-md bg-gradient-blue px-3 py-1.5 text-sm font-semibold leading-6 text-gray-900 shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
            children: "Sign in"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/signup.jsx",
            lineNumber: 142,
            columnNumber: 23
          },
          this
        ) }, void 0, !1, {
          fileName: "app/routes/signup.jsx",
          lineNumber: 141,
          columnNumber: 21
        }, this) }, void 0, !1, {
          fileName: "app/routes/signup.jsx",
          lineNumber: 140,
          columnNumber: 19
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/signup.jsx",
        lineNumber: 75,
        columnNumber: 17
      }, this) }, void 0, !1, {
        fileName: "app/routes/signup.jsx",
        lineNumber: 74,
        columnNumber: 15
      }, this) }, void 0, !1, {
        fileName: "app/routes/signup.jsx",
        lineNumber: 73,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime84.jsxDEV)("p", { className: "text-center text-sm leading-6 text-gray-500", children: [
        "Not a member?",
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime84.jsxDEV)(
          import_react45.Link,
          {
            href: "#",
            className: "font-semibold text-sky-500 hover:text-sky-600",
            children: "Start a 14-day free trial"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/signup.jsx",
            lineNumber: 156,
            columnNumber: 15
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/signup.jsx",
        lineNumber: 154,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/signup.jsx",
      lineNumber: 62,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/signup.jsx",
      lineNumber: 61,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/signup.jsx",
    lineNumber: 11,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/signup.jsx",
    lineNumber: 10,
    columnNumber: 5
  }, this);
}

// app/routes/slider.tsx
var slider_exports = {};
__export(slider_exports, {
  default: () => Layout
});
var import_react48 = require("react"), import_react49 = require("@remix-run/react"), import_clsx8 = __toESM(require("clsx"));

// app/components/Cards.tsx
var import_react46 = require("@remix-run/react"), import_jsx_dev_runtime85 = require("react/jsx-dev-runtime"), actions2 = [
  {
    name: "Generative AI Based Control Tower",
    to: "/ai",
    img: "/assets/generateAi.png",
    description: " Across industries, organizations like yours are pivoting to manage increasingly complex supply chains, while juggling delivery expectations and cost."
  },
  {
    name: "Diagnostic Engine",
    to: "http://localhost:50288/snop/truck",
    img: "/assets/salesopplanning.png",
    description: "Across industries, organizations like yours are pivoting to manage increasingly complex supply chains, while juggling delivery expectations and cost."
  },
  {
    name: "Optimization Engine",
    to: "/demo/dashboard/demand",
    img: "/assets/diagnostics.png",
    description: "With shrinking product lifecycles, demand fluctuations and more granular customer segmentation, organizations like yours depend on intelligent decision support for their essential production."
  },
  {
    name: "Execution Engine",
    to: "/demo/dashboard/inventory",
    img: "/assets/kpicard.png",
    description: "Across industries, organizations like yours are pivoting to manage increasingly complex supply chains, while juggling delivery expectations and cost."
  }
];
function Cards() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime85.jsxDEV)("div", { className: "relative grid  place-items-center mx-4 mt-12", children: /* @__PURE__ */ (0, import_jsx_dev_runtime85.jsxDEV)("ul", { className: "flex w-full gap-4", children: actions2.map((action9) => /* @__PURE__ */ (0, import_jsx_dev_runtime85.jsxDEV)(
    "li",
    {
      className: "group relative h-[500px] w-full overflow-hidden rounded-2xl bg-rose-300 flex-1 hover:grow-[1.25]",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime85.jsxDEV)(import_react46.Link, { to: action9.to, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime85.jsxDEV)(
          "img",
          {
            className: "absolute inset-0 w-full h-full object-cover",
            src: action9.img,
            alt: ""
          },
          void 0,
          !1,
          {
            fileName: "app/components/Cards.tsx",
            lineNumber: 45,
            columnNumber: 15
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime85.jsxDEV)("div", { className: "absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/50 p-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime85.jsxDEV)("div", { className: "w-48", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime85.jsxDEV)("h2", { className: "text-2xl font-medium text-white", children: action9.name }, void 0, !1, {
            fileName: "app/components/Cards.tsx",
            lineNumber: 53,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime85.jsxDEV)("div", { className: "grid grid-rows-[0fr] transition-all  group-hover:grid-rows-[1fr]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime85.jsxDEV)("p", { className: "mt-2 overflow-hidden text-white/70 opacity-0 transition duration-300 group-hover:opacity-100", children: action9.description }, void 0, !1, {
            fileName: "app/components/Cards.tsx",
            lineNumber: 57,
            columnNumber: 21
          }, this) }, void 0, !1, {
            fileName: "app/components/Cards.tsx",
            lineNumber: 56,
            columnNumber: 19
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/Cards.tsx",
          lineNumber: 52,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "app/components/Cards.tsx",
          lineNumber: 51,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/Cards.tsx",
        lineNumber: 44,
        columnNumber: 13
      }, this)
    },
    action9.name,
    !1,
    {
      fileName: "app/components/Cards.tsx",
      lineNumber: 40,
      columnNumber: 11
    },
    this
  )) }, void 0, !1, {
    fileName: "app/components/Cards.tsx",
    lineNumber: 38,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/Cards.tsx",
    lineNumber: 37,
    columnNumber: 5
  }, this);
}

// app/components/Hero.jsx
var import_jsx_dev_runtime86 = require("react/jsx-dev-runtime");
function Hero() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime86.jsxDEV)("div", { className: "overflow-hidden bg-slate-900 dark:-mb-32 dark:mt-[-4.75rem] dark:pb-32 dark:pt-[4.75rem]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime86.jsxDEV)("div", { className: "mb-16 py-16 sm:px-2 lg:relative lg:px-0 lg:py-28", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime86.jsxDEV)("div", { className: "mx-auto grid max-w-2xl items-center gap-x-8 gap-y-16 px-4 lg:max-w-8xl lg:px-8 xl:gap-x-16 xl:px-12", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime86.jsxDEV)("div", { className: "relative z-10 text-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime86.jsxDEV)(
          "img",
          {
            className: "absolute bottom-full right-full -mb-56 -mr-72 opacity-50",
            src: blur_cyan_default,
            alt: "",
            width: 530,
            height: 530
          },
          void 0,
          !1,
          {
            fileName: "app/components/Hero.jsx",
            lineNumber: 14,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime86.jsxDEV)("div", { className: "relative mt-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime86.jsxDEV)("p", { className: "inline bg-gradient-to-r from-indigo-200 via-sky-400 to-indigo-200 bg-clip-text font-display text-7xl font-bold tracking-tight text-transparent", children: "BlueNorth AI" }, void 0, !1, {
            fileName: "app/components/Hero.jsx",
            lineNumber: 22,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime86.jsxDEV)("p", { className: "mt-3 text-4xl tracking-tight text-white", children: "Enterprise AI suite to transform Supply Chain Planning and Execution" }, void 0, !1, {
            fileName: "app/components/Hero.jsx",
            lineNumber: 25,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime86.jsxDEV)("div", { className: "mt-8 flex justify-center gap-4 ", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime86.jsxDEV)(Button, { href: "/home", children: "Get started" }, void 0, !1, {
              fileName: "app/components/Hero.jsx",
              lineNumber: 30,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime86.jsxDEV)(Button, { href: "/", variant: "secondary", children: "Our Capabilities" }, void 0, !1, {
              fileName: "app/components/Hero.jsx",
              lineNumber: 31,
              columnNumber: 17
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/Hero.jsx",
            lineNumber: 29,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/Hero.jsx",
          lineNumber: 21,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/Hero.jsx",
        lineNumber: 13,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime86.jsxDEV)("div", { className: "relative lg:static xl:pl-10", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime86.jsxDEV)("div", { className: "absolute inset-x-[-50vw] -bottom-48 -top-32 [mask-image:linear-gradient(transparent,white,white)] lg:-bottom-32 lg:-top-32 lg:left-[calc(50%+14rem)] lg:right-0 lg:[mask-image:none] dark:[mask-image:linear-gradient(transparent,white,transparent)] lg:dark:[mask-image:linear-gradient(white,white,transparent)]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime86.jsxDEV)(HeroBackground, { className: "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 lg:left-0 lg:translate-x-0 lg:translate-y-[-60%]" }, void 0, !1, {
          fileName: "app/components/Hero.jsx",
          lineNumber: 40,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/components/Hero.jsx",
          lineNumber: 39,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime86.jsxDEV)("div", { className: "relative", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime86.jsxDEV)(
            "img",
            {
              className: "absolute -right-64 -top-64",
              src: blur_cyan_default,
              alt: "",
              width: 530,
              height: 530
            },
            void 0,
            !1,
            {
              fileName: "app/components/Hero.jsx",
              lineNumber: 43,
              columnNumber: 15
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime86.jsxDEV)(
            "img",
            {
              className: "absolute -bottom-40 -right-44",
              src: blur_indigo_default,
              alt: "",
              width: 567,
              height: 567
            },
            void 0,
            !1,
            {
              fileName: "app/components/Hero.jsx",
              lineNumber: 50,
              columnNumber: 15
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/components/Hero.jsx",
          lineNumber: 42,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/Hero.jsx",
        lineNumber: 38,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Hero.jsx",
      lineNumber: 12,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime86.jsxDEV)(Cards, {}, void 0, !1, {
      fileName: "app/components/Hero.jsx",
      lineNumber: 60,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Hero.jsx",
    lineNumber: 11,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/Hero.jsx",
    lineNumber: 10,
    columnNumber: 5
  }, this);
}

// app/components/Navigation.jsx
var import_react47 = require("@remix-run/react"), import_clsx7 = __toESM(require("clsx"));

// app/lib/navigation.js
var navigation2 = [
  {
    title: "Introduction",
    links: [{ title: "Supply Chain Tripod", href: "/home/tripod" }]
  },
  {
    title: "Probe - Diagnostic Engine",
    links: [
      {
        title: "Transportation",
        href: "/home/transport"
      },
      {
        title: "Warehousing",
        href: "/home/warehousing"
      },
      { title: "Inventory", href: "/home/inventory" }
    ]
  },
  {
    title: "Plan - Optimization Engine",
    links: [
      {
        title: "Production Planning & Scheduling",
        href: "/home/production"
      },
      {
        title: "Sales & Operations Planning",
        href: "/home/sales"
      },
      { title: "Distribution Planning", href: "/home/distribution" },
      { title: "Inventory Optimization", href: "/home/invopt" }
    ]
  },
  {
    title: "Perform - Execution Engine",
    links: [
      {
        title: "Generative AI based Control Tower",
        href: "/home/generative"
      },
      { title: "Cascaded KPI Scorecard", href: "/home/kpi" }
    ]
  }
];

// app/components/Navigation.jsx
var import_jsx_dev_runtime87 = require("react/jsx-dev-runtime");
function Navigation() {
  let pathname = (0, import_react47.useLocation)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime87.jsxDEV)("nav", { className: (0, import_clsx7.default)("text-base lg:text-base"), children: /* @__PURE__ */ (0, import_jsx_dev_runtime87.jsxDEV)("ul", { className: "space-y-9", children: navigation2.map((section) => /* @__PURE__ */ (0, import_jsx_dev_runtime87.jsxDEV)("li", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime87.jsxDEV)("h2", { className: "font-display font-medium text-slate-900 dark:text-white", children: section.title }, void 0, !1, {
      fileName: "app/components/Navigation.jsx",
      lineNumber: 14,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime87.jsxDEV)(
      "ul",
      {
        className: "mt-2 space-y-2 border-l-2 border-slate-100 lg:mt-4 lg:space-y-4 lg:border-slate-200 dark:border-slate-800",
        children: section.links.map((link) => /* @__PURE__ */ (0, import_jsx_dev_runtime87.jsxDEV)("li", { className: "relative", children: /* @__PURE__ */ (0, import_jsx_dev_runtime87.jsxDEV)(
          import_react47.Link,
          {
            to: link.href,
            className: (0, import_clsx7.default)(
              "block w-full pl-3.5 before:pointer-events-none before:absolute before:-left-1 before:top-1/2 before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full",
              link.href === pathname ? "font-semibold text-sky-500 before:bg-sky-500" : "text-slate-500 before:hidden before:bg-slate-300 hover:text-slate-600 hover:before:block dark:text-slate-400 dark:before:bg-slate-700 dark:hover:text-slate-300"
            ),
            children: link.title
          },
          void 0,
          !1,
          {
            fileName: "app/components/Navigation.jsx",
            lineNumber: 23,
            columnNumber: 19
          },
          this
        ) }, link.href, !1, {
          fileName: "app/components/Navigation.jsx",
          lineNumber: 22,
          columnNumber: 17
        }, this))
      },
      void 0,
      !1,
      {
        fileName: "app/components/Navigation.jsx",
        lineNumber: 17,
        columnNumber: 13
      },
      this
    )
  ] }, section.title, !0, {
    fileName: "app/components/Navigation.jsx",
    lineNumber: 13,
    columnNumber: 11
  }, this)) }, void 0, !1, {
    fileName: "app/components/Navigation.jsx",
    lineNumber: 11,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/Navigation.jsx",
    lineNumber: 10,
    columnNumber: 5
  }, this);
}

// app/routes/slider.tsx
var import_jsx_dev_runtime88 = require("react/jsx-dev-runtime");
function GitHubIcon2(props) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime88.jsxDEV)("svg", { "aria-hidden": "true", viewBox: "0 0 16 16", ...props, children: /* @__PURE__ */ (0, import_jsx_dev_runtime88.jsxDEV)("path", { d: "M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z" }, void 0, !1, {
    fileName: "app/routes/slider.tsx",
    lineNumber: 20,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/slider.tsx",
    lineNumber: 19,
    columnNumber: 5
  }, this);
}
function Header2() {
  let [isScrolled, setIsScrolled] = (0, import_react48.useState)(!1);
  return (0, import_react48.useEffect)(() => {
    function onScroll() {
      setIsScrolled(window.scrollY > 0);
    }
    return onScroll(), window.addEventListener("scroll", onScroll, { passive: !0 }), () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []), /* @__PURE__ */ (0, import_jsx_dev_runtime88.jsxDEV)(
    "header",
    {
      className: (0, import_clsx8.default)(
        "sticky top-0 z-50 flex flex-none flex-wrap items-center justify-between bg-white px-4 py-5 shadow-md shadow-slate-900/5 transition duration-500 sm:px-6 lg:px-8 dark:shadow-none",
        isScrolled ? "dark:bg-slate-900/95 dark:backdrop-blur dark:[@supports(backdrop-filter:blur(0))]:bg-slate-900/75" : "dark:bg-transparent"
      ),
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime88.jsxDEV)("div", { className: "relative flex flex-grow basis-0 items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime88.jsxDEV)(import_react49.Link, { href: "/", "aria-label": "Home page", children: /* @__PURE__ */ (0, import_jsx_dev_runtime88.jsxDEV)(Logo, { className: " h-9 w-auto fill-slate-700  dark:fill-sky-100" }, void 0, !1, {
          fileName: "app/routes/slider.tsx",
          lineNumber: 55,
          columnNumber: 11
        }, this) }, void 0, !1, {
          fileName: "app/routes/slider.tsx",
          lineNumber: 52,
          columnNumber: 9
        }, this) }, void 0, !1, {
          fileName: "app/routes/slider.tsx",
          lineNumber: 51,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime88.jsxDEV)("div", { className: "relative flex basis-0 justify-end gap-6 sm:gap-8 md:flex-grow", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime88.jsxDEV)(ThemeSelector, { className: "relative z-10" }, void 0, !1, {
            fileName: "app/routes/slider.tsx",
            lineNumber: 62,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime88.jsxDEV)(import_react49.Link, { href: "https://github.com", className: "group", "aria-label": "GitHub", children: /* @__PURE__ */ (0, import_jsx_dev_runtime88.jsxDEV)(GitHubIcon2, { className: "h-6 w-6 fill-slate-400 group-hover:fill-slate-500 dark:group-hover:fill-slate-300" }, void 0, !1, {
            fileName: "app/routes/slider.tsx",
            lineNumber: 64,
            columnNumber: 11
          }, this) }, void 0, !1, {
            fileName: "app/routes/slider.tsx",
            lineNumber: 63,
            columnNumber: 9
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/slider.tsx",
          lineNumber: 61,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/routes/slider.tsx",
      lineNumber: 40,
      columnNumber: 5
    },
    this
  );
}
function Layout({ children }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime88.jsxDEV)("div", { className: "flex w-full flex-col", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime88.jsxDEV)(Header2, {}, void 0, !1, {
      fileName: "app/routes/slider.tsx",
      lineNumber: 76,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime88.jsxDEV)(Hero, {}, void 0, !1, {
      fileName: "app/routes/slider.tsx",
      lineNumber: 78,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime88.jsxDEV)("div", { className: "flex h-24 w-full items-center justify-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime88.jsxDEV)("div", { className: "relative", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime88.jsxDEV)(
          "img",
          {
            className: "absolute ",
            src: blur_cyan_default,
            alt: "",
            width: 530,
            height: 530
          },
          void 0,
          !1,
          {
            fileName: "app/routes/slider.tsx",
            lineNumber: 81,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime88.jsxDEV)(
          "img",
          {
            className: "absolute",
            src: blur_indigo_default,
            alt: "",
            width: 567,
            height: 567
          },
          void 0,
          !1,
          {
            fileName: "app/routes/slider.tsx",
            lineNumber: 89,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/slider.tsx",
        lineNumber: 80,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime88.jsxDEV)("h1", { className: "max-w-2xl font-display text-5xl tracking-tight text-slate-900 dark:text-white ", children: "Our Capabilities" }, void 0, !1, {
        fileName: "app/routes/slider.tsx",
        lineNumber: 98,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/slider.tsx",
      lineNumber: 79,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime88.jsxDEV)("div", { className: "mx-auto h-1 w-1/3 bg-gradient-to-r from-indigo-200 via-sky-400 to-indigo-200 " }, void 0, !1, {
      fileName: "app/routes/slider.tsx",
      lineNumber: 103,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime88.jsxDEV)("div", { className: "relative flex w-full flex-auto justify-center sm:px-2 lg:px-8 xl:px-12", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime88.jsxDEV)("div", { className: "hidden lg:relative lg:block lg:flex-none", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime88.jsxDEV)("div", { className: "absolute inset-y-0 right-0 w-[50vw] bg-slate-50 dark:hidden" }, void 0, !1, {
          fileName: "app/routes/slider.tsx",
          lineNumber: 106,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime88.jsxDEV)("div", { className: "absolute bottom-0 right-0 top-16 hidden h-12 w-px bg-gradient-to-t from-slate-800 dark:block" }, void 0, !1, {
          fileName: "app/routes/slider.tsx",
          lineNumber: 107,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime88.jsxDEV)("div", { className: "absolute bottom-0 right-0 top-28 hidden w-px bg-slate-800 dark:block" }, void 0, !1, {
          fileName: "app/routes/slider.tsx",
          lineNumber: 108,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime88.jsxDEV)("div", { className: "sticky top-[4.75rem] -ml-0.5 h-[calc(100vh-4.75rem)] w-96 overflow-y-auto overflow-x-hidden py-16 pl-0.5 pr-8 xl:w-72 xl:pr-16", children: /* @__PURE__ */ (0, import_jsx_dev_runtime88.jsxDEV)(Navigation, {}, void 0, !1, {
          fileName: "app/routes/slider.tsx",
          lineNumber: 110,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/routes/slider.tsx",
          lineNumber: 109,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/slider.tsx",
        lineNumber: 105,
        columnNumber: 9
      }, this),
      children
    ] }, void 0, !0, {
      fileName: "app/routes/slider.tsx",
      lineNumber: 104,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/slider.tsx",
    lineNumber: 75,
    columnNumber: 5
  }, this);
}

// app/routes/_index.tsx
var index_exports = {};
__export(index_exports, {
  default: () => Index2
});
var import_react53 = require("@remix-run/react"), import_clsx9 = __toESM(require("clsx")), import_react54 = require("react");

// app/components/MobileNavigation.jsx
var import_react50 = require("react"), import_react51 = require("@remix-run/react"), import_react52 = require("@headlessui/react");
var import_jsx_dev_runtime89 = require("react/jsx-dev-runtime");
function MenuIcon(props) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime89.jsxDEV)(
    "svg",
    {
      "aria-hidden": "true",
      viewBox: "0 0 24 24",
      fill: "none",
      strokeWidth: "2",
      strokeLinecap: "round",
      ...props,
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime89.jsxDEV)("path", { d: "M4 7h16M4 12h16M4 17h16" }, void 0, !1, {
        fileName: "app/components/MobileNavigation.jsx",
        lineNumber: 21,
        columnNumber: 7
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/components/MobileNavigation.jsx",
      lineNumber: 13,
      columnNumber: 5
    },
    this
  );
}
function CloseIcon(props) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime89.jsxDEV)(
    "svg",
    {
      "aria-hidden": "true",
      viewBox: "0 0 24 24",
      fill: "none",
      strokeWidth: "2",
      strokeLinecap: "round",
      ...props,
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime89.jsxDEV)("path", { d: "M5 5l14 14M19 5l-14 14" }, void 0, !1, {
        fileName: "app/components/MobileNavigation.jsx",
        lineNumber: 36,
        columnNumber: 7
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/components/MobileNavigation.jsx",
      lineNumber: 28,
      columnNumber: 5
    },
    this
  );
}
function CloseOnNavigation({ close }) {
  let pathname = (0, import_react51.useLocation)(), searchParams = (0, import_react51.useParams)();
  return (0, import_react50.useEffect)(() => {
    close();
  }, [pathname, searchParams, close]), null;
}
function MobileNavigation() {
  let [isOpen, setIsOpen] = (0, import_react50.useState)(!1), close = (0, import_react50.useCallback)(() => setIsOpen(!1), [setIsOpen]);
  function onLinkClick(event) {
    let link = event.currentTarget;
    link.pathname + link.search + link.hash === window.location.pathname + window.location.search + window.location.hash && close();
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime89.jsxDEV)(import_jsx_dev_runtime89.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime89.jsxDEV)(
      "button",
      {
        type: "button",
        onClick: () => setIsOpen(!0),
        className: "relative",
        "aria-label": "Open navigation",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime89.jsxDEV)(MenuIcon, { className: "h-6 w-6 stroke-slate-500" }, void 0, !1, {
          fileName: "app/components/MobileNavigation.jsx",
          lineNumber: 74,
          columnNumber: 9
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/components/MobileNavigation.jsx",
        lineNumber: 68,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime89.jsxDEV)(import_react50.Suspense, { fallback: null, children: /* @__PURE__ */ (0, import_jsx_dev_runtime89.jsxDEV)(CloseOnNavigation, { close }, void 0, !1, {
      fileName: "app/components/MobileNavigation.jsx",
      lineNumber: 77,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/MobileNavigation.jsx",
      lineNumber: 76,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime89.jsxDEV)(
      import_react52.Dialog,
      {
        open: isOpen,
        onClose: () => close(),
        className: "fixed inset-0 z-50 flex items-start overflow-y-auto bg-slate-900/50 pr-10 backdrop-blur lg:hidden",
        "aria-label": "Navigation",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime89.jsxDEV)(import_react52.Dialog.Panel, { className: "min-h-full w-full max-w-xs bg-white px-4 pb-12 pt-5 sm:px-6 dark:bg-slate-900", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime89.jsxDEV)("div", { className: "flex items-center", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime89.jsxDEV)(
              "button",
              {
                type: "button",
                onClick: () => close(),
                "aria-label": "Close navigation",
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime89.jsxDEV)(CloseIcon, { className: "h-6 w-6 stroke-slate-500" }, void 0, !1, {
                  fileName: "app/components/MobileNavigation.jsx",
                  lineNumber: 92,
                  columnNumber: 15
                }, this)
              },
              void 0,
              !1,
              {
                fileName: "app/components/MobileNavigation.jsx",
                lineNumber: 87,
                columnNumber: 13
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime89.jsxDEV)(import_react51.Link, { to: "/", className: "ml-6", "aria-label": "Home page", children: /* @__PURE__ */ (0, import_jsx_dev_runtime89.jsxDEV)(Logomark, { className: "h-9 w-9" }, void 0, !1, {
              fileName: "app/components/MobileNavigation.jsx",
              lineNumber: 95,
              columnNumber: 15
            }, this) }, void 0, !1, {
              fileName: "app/components/MobileNavigation.jsx",
              lineNumber: 94,
              columnNumber: 13
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/MobileNavigation.jsx",
            lineNumber: 86,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime89.jsxDEV)(Navigation, { className: "mt-5 px-1", onLinkClick }, void 0, !1, {
            fileName: "app/components/MobileNavigation.jsx",
            lineNumber: 98,
            columnNumber: 11
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/MobileNavigation.jsx",
          lineNumber: 85,
          columnNumber: 9
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/components/MobileNavigation.jsx",
        lineNumber: 79,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/MobileNavigation.jsx",
    lineNumber: 67,
    columnNumber: 5
  }, this);
}

// app/routes/_index.tsx
var import_jsx_dev_runtime90 = require("react/jsx-dev-runtime");
function Header3() {
  let [isScrolled, setIsScrolled] = (0, import_react54.useState)(!1);
  return (0, import_react54.useEffect)(() => {
    function onScroll() {
      setIsScrolled(window.scrollY > 0);
    }
    return onScroll(), window.addEventListener("scroll", onScroll, { passive: !0 }), () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []), /* @__PURE__ */ (0, import_jsx_dev_runtime90.jsxDEV)(
    "header",
    {
      className: (0, import_clsx9.default)(
        "sticky top-0 z-50 flex flex-none flex-wrap items-center justify-between bg-white px-4 py-5 shadow-md shadow-slate-900/5 transition duration-500 sm:px-6 lg:px-8 dark:shadow-none",
        isScrolled ? "dark:bg-slate-900/95 dark:backdrop-blur dark:[@supports(backdrop-filter:blur(0))]:bg-slate-900/75" : "dark:bg-transparent"
      ),
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime90.jsxDEV)("div", { className: "mr-6 flex lg:hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime90.jsxDEV)(MobileNavigation, {}, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 45,
          columnNumber: 9
        }, this) }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 44,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime90.jsxDEV)("div", { className: "relative flex flex-grow basis-0 items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime90.jsxDEV)(import_react53.Link, { to: "/", "aria-label": "Home page", children: /* @__PURE__ */ (0, import_jsx_dev_runtime90.jsxDEV)(Logo, { className: " h-9 w-auto fill-slate-700  dark:fill-sky-100" }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 49,
          columnNumber: 11
        }, this) }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 48,
          columnNumber: 9
        }, this) }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 47,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime90.jsxDEV)("div", { className: "relative flex basis-0 items-center justify-end gap-6 sm:gap-8 md:flex-grow", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime90.jsxDEV)(ThemeSelector, {}, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 56,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime90.jsxDEV)(
            import_react53.Link,
            {
              to: "login-blue",
              className: "hidden lg:block lg:text-sm lg:font-semibold lg:leading-6 lg:text-gray-900",
              children: "Log in"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/_index.tsx",
              lineNumber: 57,
              columnNumber: 9
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime90.jsxDEV)(
            import_react53.Link,
            {
              to: "/signup",
              className: "rounded-md bg-sky-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-sky-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ",
              children: "Sign up"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/_index.tsx",
              lineNumber: 63,
              columnNumber: 9
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 55,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/routes/_index.tsx",
      lineNumber: 36,
      columnNumber: 5
    },
    this
  );
}
function Index2() {
  let isHomePage = (0, import_react53.useLocation)().pathname === "/home";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime90.jsxDEV)("div", { className: "flex w-full flex-col", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime90.jsxDEV)(Header3, {}, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 82,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime90.jsxDEV)(Hero, {}, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 84,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime90.jsxDEV)("div", { className: "flex h-24 w-full items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime90.jsxDEV)("div", { className: "relative", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime90.jsxDEV)(
        "img",
        {
          className: "absolute ",
          src: blur_indigo_default,
          alt: "",
          width: 530,
          height: 530
        },
        void 0,
        !1,
        {
          fileName: "app/routes/_index.tsx",
          lineNumber: 88,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime90.jsxDEV)(
        "img",
        {
          className: "absolute",
          src: blur_cyan_default,
          alt: "",
          width: 567,
          height: 567
        },
        void 0,
        !1,
        {
          fileName: "app/routes/_index.tsx",
          lineNumber: 95,
          columnNumber: 11
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 87,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 86,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 81,
    columnNumber: 5
  }, this);
}

// app/routes/login.tsx
var login_exports = {};
__export(login_exports, {
  action: () => action6,
  default: () => LoginPage,
  loader: () => loader8,
  meta: () => meta2
});
var import_node10 = require("@remix-run/node"), import_react55 = require("@remix-run/react"), import_react56 = require("react");
var import_jsx_dev_runtime91 = require("react/jsx-dev-runtime"), loader8 = async ({ request }) => await getUserId(request) ? (0, import_node10.redirect)("/") : (0, import_node10.json)({}), action6 = async ({ request }) => {
  let formData = await request.formData(), email = formData.get("email"), password = formData.get("password"), redirectTo = safeRedirect(formData.get("redirectTo"), "/"), remember = formData.get("remember");
  if (!validateEmail(email))
    return (0, import_node10.json)(
      { errors: { email: "Email is invalid", password: null } },
      { status: 400 }
    );
  if (typeof password != "string" || password.length === 0)
    return (0, import_node10.json)(
      { errors: { email: null, password: "Password is required" } },
      { status: 400 }
    );
  if (password.length < 8)
    return (0, import_node10.json)(
      { errors: { email: null, password: "Password is too short" } },
      { status: 400 }
    );
  let user = await verifyLogin(email, password);
  return user ? createUserSession({
    redirectTo,
    remember: remember === "on",
    request,
    userId: user.id
  }) : (0, import_node10.json)(
    { errors: { email: "Invalid email or password", password: null } },
    { status: 400 }
  );
}, meta2 = () => [{ title: "Login" }];
function LoginPage() {
  let [searchParams] = (0, import_react55.useSearchParams)(), redirectTo = searchParams.get("redirectTo") || "/notes", actionData = (0, import_react55.useActionData)(), emailRef = (0, import_react56.useRef)(null), passwordRef = (0, import_react56.useRef)(null);
  return (0, import_react56.useEffect)(() => {
    actionData?.errors?.email ? emailRef.current?.focus() : actionData?.errors?.password && passwordRef.current?.focus();
  }, [actionData]), /* @__PURE__ */ (0, import_jsx_dev_runtime91.jsxDEV)("div", { className: "flex min-h-full flex-col justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime91.jsxDEV)("div", { className: "mx-auto w-full max-w-md px-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime91.jsxDEV)(import_react55.Form, { method: "post", className: "space-y-6", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime91.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime91.jsxDEV)(
        "label",
        {
          htmlFor: "email",
          className: "block text-sm font-medium text-gray-700",
          children: "Email address"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/login.tsx",
          lineNumber: 87,
          columnNumber: 13
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime91.jsxDEV)("div", { className: "mt-1", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime91.jsxDEV)(
          "input",
          {
            ref: emailRef,
            id: "email",
            required: !0,
            autoFocus: !0,
            name: "email",
            type: "email",
            autoComplete: "email",
            "aria-invalid": actionData?.errors?.email ? !0 : void 0,
            "aria-describedby": "email-error",
            className: "w-full rounded border border-gray-500 px-2 py-1 text-lg"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/login.tsx",
            lineNumber: 94,
            columnNumber: 15
          },
          this
        ),
        actionData?.errors?.email ? /* @__PURE__ */ (0, import_jsx_dev_runtime91.jsxDEV)("div", { className: "pt-1 text-red-700", id: "email-error", children: actionData.errors.email }, void 0, !1, {
          fileName: "app/routes/login.tsx",
          lineNumber: 108,
          columnNumber: 17
        }, this) : null
      ] }, void 0, !0, {
        fileName: "app/routes/login.tsx",
        lineNumber: 93,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/login.tsx",
      lineNumber: 86,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime91.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime91.jsxDEV)(
        "label",
        {
          htmlFor: "password",
          className: "block text-sm font-medium text-gray-700",
          children: "Password"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/login.tsx",
          lineNumber: 116,
          columnNumber: 13
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime91.jsxDEV)("div", { className: "mt-1", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime91.jsxDEV)(
          "input",
          {
            id: "password",
            ref: passwordRef,
            name: "password",
            type: "password",
            autoComplete: "current-password",
            "aria-invalid": actionData?.errors?.password ? !0 : void 0,
            "aria-describedby": "password-error",
            className: "w-full rounded border border-gray-500 px-2 py-1 text-lg"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/login.tsx",
            lineNumber: 123,
            columnNumber: 15
          },
          this
        ),
        actionData?.errors?.password ? /* @__PURE__ */ (0, import_jsx_dev_runtime91.jsxDEV)("div", { className: "pt-1 text-red-700", id: "password-error", children: actionData.errors.password }, void 0, !1, {
          fileName: "app/routes/login.tsx",
          lineNumber: 134,
          columnNumber: 17
        }, this) : null
      ] }, void 0, !0, {
        fileName: "app/routes/login.tsx",
        lineNumber: 122,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/login.tsx",
      lineNumber: 115,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime91.jsxDEV)("input", { type: "hidden", name: "redirectTo", value: redirectTo }, void 0, !1, {
      fileName: "app/routes/login.tsx",
      lineNumber: 141,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime91.jsxDEV)(
      "button",
      {
        type: "submit",
        className: "w-full rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:bg-blue-400",
        children: "Log in"
      },
      void 0,
      !1,
      {
        fileName: "app/routes/login.tsx",
        lineNumber: 142,
        columnNumber: 11
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime91.jsxDEV)("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime91.jsxDEV)("div", { className: "flex items-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime91.jsxDEV)(
          "input",
          {
            id: "remember",
            name: "remember",
            type: "checkbox",
            className: "h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/login.tsx",
            lineNumber: 150,
            columnNumber: 15
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime91.jsxDEV)(
          "label",
          {
            htmlFor: "remember",
            className: "ml-2 block text-sm text-gray-900",
            children: "Remember me"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/login.tsx",
            lineNumber: 156,
            columnNumber: 15
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/login.tsx",
        lineNumber: 149,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime91.jsxDEV)("div", { className: "text-center text-sm text-gray-500", children: [
        "Don't have an account?",
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime91.jsxDEV)(
          import_react55.Link,
          {
            className: "text-blue-500 underline",
            to: {
              pathname: "/join",
              search: searchParams.toString()
            },
            children: "Sign up"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/login.tsx",
            lineNumber: 165,
            columnNumber: 15
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/login.tsx",
        lineNumber: 163,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/login.tsx",
      lineNumber: 148,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/login.tsx",
    lineNumber: 85,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/routes/login.tsx",
    lineNumber: 84,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/login.tsx",
    lineNumber: 83,
    columnNumber: 5
  }, this);
}

// app/routes/notes.tsx
var notes_exports = {};
__export(notes_exports, {
  default: () => NotesPage,
  loader: () => loader9
});
var import_node11 = require("@remix-run/node"), import_react57 = require("@remix-run/react");
var import_jsx_dev_runtime92 = require("react/jsx-dev-runtime"), loader9 = async ({ request }) => {
  let userId = await requireUserId(request), noteListItems = await getNoteListItems({ userId });
  return (0, import_node11.json)({ noteListItems });
};
function NotesPage() {
  let data = (0, import_react57.useLoaderData)(), user = useUser();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime92.jsxDEV)("div", { className: "flex h-full min-h-screen flex-col", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime92.jsxDEV)("header", { className: "flex items-center justify-between bg-slate-800 p-4 text-white", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime92.jsxDEV)("h1", { className: "text-3xl font-bold", children: /* @__PURE__ */ (0, import_jsx_dev_runtime92.jsxDEV)(import_react57.Link, { to: ".", children: "Notes" }, void 0, !1, {
        fileName: "app/routes/notes.tsx",
        lineNumber: 23,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/notes.tsx",
        lineNumber: 22,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime92.jsxDEV)("p", { children: user.email }, void 0, !1, {
        fileName: "app/routes/notes.tsx",
        lineNumber: 25,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime92.jsxDEV)(import_react57.Form, { action: "/logout", method: "post", children: /* @__PURE__ */ (0, import_jsx_dev_runtime92.jsxDEV)(
        "button",
        {
          type: "submit",
          className: "rounded bg-slate-600 px-4 py-2 text-blue-100 hover:bg-blue-500 active:bg-blue-600",
          children: "Logout"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/notes.tsx",
          lineNumber: 27,
          columnNumber: 11
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/notes.tsx",
        lineNumber: 26,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/notes.tsx",
      lineNumber: 21,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime92.jsxDEV)("main", { className: "flex h-full bg-white", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime92.jsxDEV)("div", { className: "h-full w-80 border-r bg-gray-50", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime92.jsxDEV)(import_react57.Link, { to: "new", className: "block p-4 text-xl text-blue-500", children: "+ New Note" }, void 0, !1, {
          fileName: "app/routes/notes.tsx",
          lineNumber: 38,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime92.jsxDEV)("hr", {}, void 0, !1, {
          fileName: "app/routes/notes.tsx",
          lineNumber: 42,
          columnNumber: 11
        }, this),
        data.noteListItems.length === 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime92.jsxDEV)("p", { className: "p-4", children: "No notes yet" }, void 0, !1, {
          fileName: "app/routes/notes.tsx",
          lineNumber: 45,
          columnNumber: 13
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime92.jsxDEV)("ol", { children: data.noteListItems.map((note) => /* @__PURE__ */ (0, import_jsx_dev_runtime92.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime92.jsxDEV)(
          import_react57.NavLink,
          {
            className: ({ isActive }) => `block border-b p-4 text-xl ${isActive ? "bg-white" : ""}`,
            to: note.id,
            children: [
              "\u{1F4DD} ",
              note.title
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/routes/notes.tsx",
            lineNumber: 50,
            columnNumber: 19
          },
          this
        ) }, note.id, !1, {
          fileName: "app/routes/notes.tsx",
          lineNumber: 49,
          columnNumber: 17
        }, this)) }, void 0, !1, {
          fileName: "app/routes/notes.tsx",
          lineNumber: 47,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/notes.tsx",
        lineNumber: 37,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime92.jsxDEV)("div", { className: "flex-1 p-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime92.jsxDEV)(import_react57.Outlet, {}, void 0, !1, {
        fileName: "app/routes/notes.tsx",
        lineNumber: 65,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/notes.tsx",
        lineNumber: 64,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/notes.tsx",
      lineNumber: 36,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/notes.tsx",
    lineNumber: 20,
    columnNumber: 5
  }, this);
}

// app/routes/auth.jsx
var auth_exports = {};
__export(auth_exports, {
  default: () => Chart3
});
var import_react58 = require("@remix-run/react");
var import_jsx_dev_runtime93 = require("react/jsx-dev-runtime");
function Chart3() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime93.jsxDEV)(import_jsx_dev_runtime93.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime93.jsxDEV)("div", { className: "flex min-h-full flex-1", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime93.jsxDEV)("div", { className: "relative h-screen hidden mt-auto lg:block bg-slate-900  w-[60rem]", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime93.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime93.jsxDEV)(HeroBackground, { className: "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 lg:left-0 lg:translate-x-0 lg:translate-y-[-60%]" }, void 0, !1, {
        fileName: "app/routes/auth.jsx",
        lineNumber: 13,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/auth.jsx",
        lineNumber: 12,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime93.jsxDEV)("div", { className: "relative", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime93.jsxDEV)(
          "img",
          {
            className: "absolute -right-28 -top-40",
            src: blur_cyan_default,
            alt: "",
            width: 530,
            height: 530
          },
          void 0,
          !1,
          {
            fileName: "app/routes/auth.jsx",
            lineNumber: 17,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime93.jsxDEV)(
          "img",
          {
            className: "absolute top-8 -right-28",
            src: blur_indigo_default,
            alt: "",
            width: 567,
            height: 567
          },
          void 0,
          !1,
          {
            fileName: "app/routes/auth.jsx",
            lineNumber: 24,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime93.jsxDEV)(
          "img",
          {
            className: "absolute -bottom-[59rem] right-[33rem]",
            src: blur_cyan_default,
            alt: "",
            width: 530,
            height: 400
          },
          void 0,
          !1,
          {
            fileName: "app/routes/auth.jsx",
            lineNumber: 32,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime93.jsxDEV)(
          "img",
          {
            className: "absolute -bottom-[50rem] right-[23rem]",
            src: blur_indigo_default,
            alt: "",
            width: 567,
            height: 530
          },
          void 0,
          !1,
          {
            fileName: "app/routes/auth.jsx",
            lineNumber: 39,
            columnNumber: 13
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/auth.jsx",
        lineNumber: 16,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime93.jsxDEV)("div", { className: " flex flex-1 flex-col justify-center items-center mt-auto h-screen px-4 py-12 text-white ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime93.jsxDEV)("div", { className: "relative mt-4 ", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime93.jsxDEV)("p", { className: "flex justify-center bg-gradient-to-r from-indigo-200 via-sky-400 to-indigo-200 bg-clip-text font-display text-7xl font-bold tracking-tight text-transparent ", children: "BlueNorth AI" }, void 0, !1, {
          fileName: "app/routes/auth.jsx",
          lineNumber: 49,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime93.jsxDEV)("p", { className: " flex justify-center text-center mt-3 text-3xl tracking-tight text-white", children: "Enterprise AI suite to transform Supply Chain Planning and Execution" }, void 0, !1, {
          fileName: "app/routes/auth.jsx",
          lineNumber: 52,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/auth.jsx",
        lineNumber: 48,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/auth.jsx",
        lineNumber: 47,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/auth.jsx",
      lineNumber: 11,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime93.jsxDEV)("div", { className: "flex flex-1 flex-col justify-center items-center px-4 py-12 sm:px-6 lg:px-20 xl:px-24", children: /* @__PURE__ */ (0, import_jsx_dev_runtime93.jsxDEV)("div", { className: "mx-auto w-full max-w-sm lg:w-96 ", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime93.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime93.jsxDEV)(
          "img",
          {
            className: "mx-auto h-10 w-auto",
            src: "https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600",
            alt: "Your Company"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/auth.jsx",
            lineNumber: 63,
            columnNumber: 15
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime93.jsxDEV)("h2", { className: "mt-8 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900", children: "Sign in to your account" }, void 0, !1, {
          fileName: "app/routes/auth.jsx",
          lineNumber: 68,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/auth.jsx",
        lineNumber: 62,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime93.jsxDEV)("div", { className: "mt-10", children: /* @__PURE__ */ (0, import_jsx_dev_runtime93.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime93.jsxDEV)("form", { action: "#", method: "POST", className: "space-y-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime93.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime93.jsxDEV)(
            "label",
            {
              htmlFor: "email",
              className: "block text-sm font-medium leading-6 text-gray-900",
              children: "Email address"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/auth.jsx",
              lineNumber: 76,
              columnNumber: 21
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime93.jsxDEV)("div", { className: "mt-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime93.jsxDEV)(
            "input",
            {
              id: "email",
              name: "email",
              type: "email",
              autoComplete: "email",
              required: !0,
              className: "block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/auth.jsx",
              lineNumber: 83,
              columnNumber: 23
            },
            this
          ) }, void 0, !1, {
            fileName: "app/routes/auth.jsx",
            lineNumber: 82,
            columnNumber: 21
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/auth.jsx",
          lineNumber: 75,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime93.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime93.jsxDEV)(
            "label",
            {
              htmlFor: "password",
              className: "block text-sm font-medium leading-6 text-gray-900",
              children: "Password"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/auth.jsx",
              lineNumber: 95,
              columnNumber: 21
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime93.jsxDEV)("div", { className: "mt-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime93.jsxDEV)(
            "input",
            {
              id: "password",
              name: "password",
              type: "password",
              autoComplete: "current-password",
              required: !0,
              className: "block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/auth.jsx",
              lineNumber: 102,
              columnNumber: 23
            },
            this
          ) }, void 0, !1, {
            fileName: "app/routes/auth.jsx",
            lineNumber: 101,
            columnNumber: 21
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/auth.jsx",
          lineNumber: 94,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime93.jsxDEV)("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime93.jsxDEV)("div", { className: "flex items-center", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime93.jsxDEV)(
              "input",
              {
                id: "remember-me",
                name: "remember-me",
                type: "checkbox",
                className: "h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/auth.jsx",
                lineNumber: 115,
                columnNumber: 23
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime93.jsxDEV)(
              "label",
              {
                htmlFor: "remember-me",
                className: "ml-3 block text-sm leading-6 text-gray-700",
                children: "Remember me"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/auth.jsx",
                lineNumber: 121,
                columnNumber: 23
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/auth.jsx",
            lineNumber: 114,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime93.jsxDEV)("div", { className: "text-sm leading-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime93.jsxDEV)(
            import_react58.Link,
            {
              href: "#",
              className: "font-semibold text-indigo-600 hover:text-indigo-500",
              children: "Forgot password?"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/auth.jsx",
              lineNumber: 130,
              columnNumber: 23
            },
            this
          ) }, void 0, !1, {
            fileName: "app/routes/auth.jsx",
            lineNumber: 129,
            columnNumber: 21
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/auth.jsx",
          lineNumber: 113,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime93.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime93.jsxDEV)(
          "button",
          {
            type: "submit",
            className: "flex w-full justify-center rounded-md bg-sky-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 border",
            children: "Sign in"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/auth.jsx",
            lineNumber: 140,
            columnNumber: 21
          },
          this
        ) }, void 0, !1, {
          fileName: "app/routes/auth.jsx",
          lineNumber: 139,
          columnNumber: 19
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/auth.jsx",
        lineNumber: 74,
        columnNumber: 17
      }, this) }, void 0, !1, {
        fileName: "app/routes/auth.jsx",
        lineNumber: 73,
        columnNumber: 15
      }, this) }, void 0, !1, {
        fileName: "app/routes/auth.jsx",
        lineNumber: 72,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime93.jsxDEV)("p", { className: "text-center text-sm leading-6 text-gray-500", children: [
        "Not a member?",
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime93.jsxDEV)(
          import_react58.Link,
          {
            href: "#",
            className: "font-semibold text-indigo-600 hover:text-indigo-500",
            children: "Start a 14-day free trial"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/auth.jsx",
            lineNumber: 153,
            columnNumber: 15
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/auth.jsx",
        lineNumber: 151,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/auth.jsx",
      lineNumber: 61,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/auth.jsx",
      lineNumber: 60,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/auth.jsx",
    lineNumber: 10,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/auth.jsx",
    lineNumber: 9,
    columnNumber: 5
  }, this);
}

// app/routes/blue.jsx
var blue_exports = {};
__export(blue_exports, {
  default: () => Example2
});
var import_react59 = require("@headlessui/react"), import_outline2 = require("@heroicons/react/24/outline"), import_react60 = require("@remix-run/react"), import_clsx10 = __toESM(require("clsx")), import_react61 = require("react");
var import_jsx_dev_runtime94 = require("react/jsx-dev-runtime");
function GitHubIcon3(props) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime94.jsxDEV)("svg", { "aria-hidden": "true", viewBox: "0 0 16 16", ...props, children: /* @__PURE__ */ (0, import_jsx_dev_runtime94.jsxDEV)("path", { d: "M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z" }, void 0, !1, {
    fileName: "app/routes/blue.jsx",
    lineNumber: 14,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/blue.jsx",
    lineNumber: 13,
    columnNumber: 5
  }, this);
}
var navigation3 = [
  { name: "Application", to: "/demo/dashboard/optimizer/optimize" },
  { name: "Features", to: "#" },
  { name: "Marketplace", to: "#" },
  { name: "Company", to: "#" }
];
function Example2() {
  let [mobileMenuOpen, setMobileMenuOpen] = (0, import_react61.useState)(!1), [isScrolled, setIsScrolled] = (0, import_react61.useState)(!1);
  return (0, import_react61.useEffect)(() => {
    function onScroll() {
      setIsScrolled(window.scrollY > 0);
    }
    return onScroll(), window.addEventListener("scroll", onScroll, { passive: !0 }), () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []), /* @__PURE__ */ (0, import_jsx_dev_runtime94.jsxDEV)(import_jsx_dev_runtime94.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime94.jsxDEV)(
      "header",
      {
        className: (0, import_clsx10.default)(
          "fixed  w-full top-0 z-50 flex flex-none flex-wrap items-center justify-between bg-white px-4 py-2 shadow-md shadow-slate-900/5 transition duration-500 sm:px-6 lg:px-8 dark:shadow-none",
          isScrolled ? "dark:bg-slate-900/95 dark:backdrop-blur dark:[@supports(backdrop-filter:blur(0))]:bg-slate-900/75" : "dark:bg-transparent"
        ),
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime94.jsxDEV)("div", { className: "flex lg:hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime94.jsxDEV)(
            "button",
            {
              type: "button",
              className: "-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400",
              onClick: () => setMobileMenuOpen(!0),
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime94.jsxDEV)("span", { className: "sr-only", children: "Open main menu" }, void 0, !1, {
                  fileName: "app/routes/blue.jsx",
                  lineNumber: 58,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime94.jsxDEV)(import_outline2.Bars3Icon, { className: "h-6 w-6", "aria-hidden": "true" }, void 0, !1, {
                  fileName: "app/routes/blue.jsx",
                  lineNumber: 59,
                  columnNumber: 13
                }, this)
              ]
            },
            void 0,
            !0,
            {
              fileName: "app/routes/blue.jsx",
              lineNumber: 53,
              columnNumber: 11
            },
            this
          ) }, void 0, !1, {
            fileName: "app/routes/blue.jsx",
            lineNumber: 52,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime94.jsxDEV)("div", { className: "relative mt-6 z-10 mr-6 flex lg:hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime94.jsxDEV)(import_react59.Dialog, { as: "div", open: mobileMenuOpen, onClose: setMobileMenuOpen, children: /* @__PURE__ */ (0, import_jsx_dev_runtime94.jsxDEV)(import_react59.Dialog.Panel, { className: "fixed inset-0 z-50 overflow-y-auto bg-gray-900 px-6 py-6 lg:hidden", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime94.jsxDEV)("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime94.jsxDEV)(import_react60.Link, { to: "#", className: "-m-1.5 p-1.5", children: /* @__PURE__ */ (0, import_jsx_dev_runtime94.jsxDEV)("div", { className: "flex items-center ", "aria-hidden": "true", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime94.jsxDEV)(Logomark, {}, void 0, !1, {
                  fileName: "app/routes/blue.jsx",
                  lineNumber: 68,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime94.jsxDEV)("h1", { className: "ml-2 flex items-center  text-base font-bold tracking-wide text-white", children: "BlueNorth AI" }, void 0, !1, {
                  fileName: "app/routes/blue.jsx",
                  lineNumber: 69,
                  columnNumber: 21
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/blue.jsx",
                lineNumber: 67,
                columnNumber: 19
              }, this) }, void 0, !1, {
                fileName: "app/routes/blue.jsx",
                lineNumber: 66,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime94.jsxDEV)(
                "button",
                {
                  type: "button",
                  className: "-m-2.5 rounded-md p-2.5 text-gray-400",
                  onClick: () => setMobileMenuOpen(!1),
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime94.jsxDEV)("span", { className: "sr-only", children: "Close menu" }, void 0, !1, {
                      fileName: "app/routes/blue.jsx",
                      lineNumber: 79,
                      columnNumber: 19
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime94.jsxDEV)(import_outline2.XMarkIcon, { className: "h-6 w-6", "aria-hidden": "true" }, void 0, !1, {
                      fileName: "app/routes/blue.jsx",
                      lineNumber: 80,
                      columnNumber: 19
                    }, this)
                  ]
                },
                void 0,
                !0,
                {
                  fileName: "app/routes/blue.jsx",
                  lineNumber: 74,
                  columnNumber: 17
                },
                this
              )
            ] }, void 0, !0, {
              fileName: "app/routes/blue.jsx",
              lineNumber: 65,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime94.jsxDEV)("div", { className: "mt-4 flow-root", children: /* @__PURE__ */ (0, import_jsx_dev_runtime94.jsxDEV)("div", { className: "-my-6 divide-y divide-gray-500/25", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime94.jsxDEV)("div", { className: "space-y-2 py-6", children: navigation3.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime94.jsxDEV)(
                import_react60.Link,
                {
                  to: item.to,
                  className: "-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-400/10",
                  children: item.name
                },
                item.name,
                !1,
                {
                  fileName: "app/routes/blue.jsx",
                  lineNumber: 87,
                  columnNumber: 23
                },
                this
              )) }, void 0, !1, {
                fileName: "app/routes/blue.jsx",
                lineNumber: 85,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime94.jsxDEV)("div", { className: "py-6", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime94.jsxDEV)(
                  import_react60.Link,
                  {
                    to: "/join",
                    className: "-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-6 text-white hover:bg-gray-400/10",
                    children: "Sign up"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/blue.jsx",
                    lineNumber: 97,
                    columnNumber: 21
                  },
                  this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime94.jsxDEV)(
                  import_react60.Link,
                  {
                    to: "/login",
                    className: "-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-6 text-white hover:bg-gray-400/10",
                    children: "Log in"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/blue.jsx",
                    lineNumber: 103,
                    columnNumber: 21
                  },
                  this
                )
              ] }, void 0, !0, {
                fileName: "app/routes/blue.jsx",
                lineNumber: 96,
                columnNumber: 19
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/blue.jsx",
              lineNumber: 84,
              columnNumber: 17
            }, this) }, void 0, !1, {
              fileName: "app/routes/blue.jsx",
              lineNumber: 83,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/blue.jsx",
            lineNumber: 64,
            columnNumber: 13
          }, this) }, void 0, !1, {
            fileName: "app/routes/blue.jsx",
            lineNumber: 63,
            columnNumber: 11
          }, this) }, void 0, !1, {
            fileName: "app/routes/blue.jsx",
            lineNumber: 62,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime94.jsxDEV)("div", { className: "grid grid-cols-3 " }, void 0, !1, {
            fileName: "app/routes/blue.jsx",
            lineNumber: 116,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime94.jsxDEV)("div", { className: "relative flex flex-grow basis-0 items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime94.jsxDEV)(import_react60.Link, { to: "/", "aria-label": "Home page", children: /* @__PURE__ */ (0, import_jsx_dev_runtime94.jsxDEV)(Logo, { className: "h-9 w-auto fill-slate-700  dark:fill-sky-100" }, void 0, !1, {
            fileName: "app/routes/blue.jsx",
            lineNumber: 119,
            columnNumber: 13
          }, this) }, void 0, !1, {
            fileName: "app/routes/blue.jsx",
            lineNumber: 118,
            columnNumber: 11
          }, this) }, void 0, !1, {
            fileName: "app/routes/blue.jsx",
            lineNumber: 117,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime94.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime94.jsxDEV)(
            "nav",
            {
              className: "ml-6 pl-6 flex items-center justify-center",
              "aria-label": "Global",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime94.jsxDEV)("div", { className: "hidden lg:flex lg:gap-x-6 lg:justify-center ml-6", children: navigation3.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime94.jsxDEV)(
                import_react60.Link,
                {
                  to: item.to,
                  className: " text-base lg:text-lg font-semibold leading-6 text-gray-600 hover:text-black",
                  children: item.name
                },
                item.name,
                !1,
                {
                  fileName: "app/routes/blue.jsx",
                  lineNumber: 130,
                  columnNumber: 17
                },
                this
              )) }, void 0, !1, {
                fileName: "app/routes/blue.jsx",
                lineNumber: 128,
                columnNumber: 13
              }, this)
            },
            void 0,
            !1,
            {
              fileName: "app/routes/blue.jsx",
              lineNumber: 124,
              columnNumber: 11
            },
            this
          ) }, void 0, !1, {
            fileName: "app/routes/blue.jsx",
            lineNumber: 123,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime94.jsxDEV)("div", { className: "relative flex items-center justify-end  md:flex-grow ", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime94.jsxDEV)("div", { className: "hidden md:mx-2 sm:block md:block lg:block xl:block", children: /* @__PURE__ */ (0, import_jsx_dev_runtime94.jsxDEV)("div", { className: "relative mr-2 text-gray-500 ", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime94.jsxDEV)(
                "input",
                {
                  className: "border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none",
                  type: "search",
                  name: "search",
                  placeholder: "Search"
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/blue.jsx",
                  lineNumber: 145,
                  columnNumber: 15
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime94.jsxDEV)(
                "button",
                {
                  type: "submit",
                  className: "absolute right-0 top-0 mt-3 mr-4",
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime94.jsxDEV)(
                    "svg",
                    {
                      className: "text-gray-600 h-4 w-4 fill-current",
                      xmlns: "http://www.w3.org/2000/svg",
                      xmlnsXlink: "http://www.w3.org/1999/xlink",
                      version: "1.1",
                      id: "Capa_1",
                      x: "0px",
                      y: "0px",
                      viewBox: "0 0 56.966 56.966",
                      style: { enableBackground: "new 0 0 56.966 56.966" },
                      xmlSpace: "preserve",
                      width: "512px",
                      height: "512px",
                      children: /* @__PURE__ */ (0, import_jsx_dev_runtime94.jsxDEV)("path", { d: "M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" }, void 0, !1, {
                        fileName: "app/routes/blue.jsx",
                        lineNumber: 169,
                        columnNumber: 19
                      }, this)
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/routes/blue.jsx",
                      lineNumber: 155,
                      columnNumber: 17
                    },
                    this
                  )
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/blue.jsx",
                  lineNumber: 151,
                  columnNumber: 15
                },
                this
              )
            ] }, void 0, !0, {
              fileName: "app/routes/blue.jsx",
              lineNumber: 144,
              columnNumber: 13
            }, this) }, void 0, !1, {
              fileName: "app/routes/blue.jsx",
              lineNumber: 143,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime94.jsxDEV)("div", { className: "hidden mx-4 lg:flex lg:justify-end lg:text-base text-sm", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime94.jsxDEV)(
                import_react60.Link,
                {
                  to: "/join",
                  className: "font-semibold leading-6 hover:text-black text-gray-500",
                  children: [
                    "Sign up ",
                    /* @__PURE__ */ (0, import_jsx_dev_runtime94.jsxDEV)("span", { "aria-hidden": "true", children: "\u2192" }, void 0, !1, {
                      fileName: "app/routes/blue.jsx",
                      lineNumber: 179,
                      columnNumber: 23
                    }, this)
                  ]
                },
                void 0,
                !0,
                {
                  fileName: "app/routes/blue.jsx",
                  lineNumber: 175,
                  columnNumber: 13
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime94.jsxDEV)("span", { className: "ml-6 inline-flex rounded-md shadow-sm" }, void 0, !1, {
                fileName: "app/routes/blue.jsx",
                lineNumber: 182,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime94.jsxDEV)(
                import_react60.Link,
                {
                  to: "/auth",
                  className: "font-semibold leading-6 hover:text-black text-gray-500",
                  children: [
                    "Log in ",
                    /* @__PURE__ */ (0, import_jsx_dev_runtime94.jsxDEV)("span", { "aria-hidden": "true", children: "\u2192" }, void 0, !1, {
                      fileName: "app/routes/blue.jsx",
                      lineNumber: 187,
                      columnNumber: 22
                    }, this)
                  ]
                },
                void 0,
                !0,
                {
                  fileName: "app/routes/blue.jsx",
                  lineNumber: 183,
                  columnNumber: 13
                },
                this
              )
            ] }, void 0, !0, {
              fileName: "app/routes/blue.jsx",
              lineNumber: 174,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime94.jsxDEV)(import_react60.Link, { to: "https://github.com", className: "group", "aria-label": "GitHub", children: /* @__PURE__ */ (0, import_jsx_dev_runtime94.jsxDEV)(GitHubIcon3, { className: "h-6 w-6 fill-slate-400 group-hover:fill-slate-500 dark:group-hover:fill-slate-300" }, void 0, !1, {
              fileName: "app/routes/blue.jsx",
              lineNumber: 191,
              columnNumber: 13
            }, this) }, void 0, !1, {
              fileName: "app/routes/blue.jsx",
              lineNumber: 190,
              columnNumber: 11
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/blue.jsx",
            lineNumber: 142,
            columnNumber: 9
          }, this)
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/routes/blue.jsx",
        lineNumber: 44,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime94.jsxDEV)("div", { className: "relative isolate h-full w-full overflow-hidden bg-slate-900", children: /* @__PURE__ */ (0, import_jsx_dev_runtime94.jsxDEV)("div", { className: "px-6 lg:px-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime94.jsxDEV)("div", { className: "relative mx-auto max-w-2xl py-32 sm:py-48 lg:py-56", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime94.jsxDEV)("div", { className: "hidden sm:mb-8 sm:flex sm:justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime94.jsxDEV)("div", { className: "relative rounded-full px-3 py-1 text-sm leading-6 text-gray-400 ring-1 ring-white/10 hover:ring-white/20", children: [
          "Announcing our next round of funding.",
          " ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime94.jsxDEV)(import_react60.Link, { to: "#", className: "font-semibold text-white", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime94.jsxDEV)("span", { className: "absolute inset-0", "aria-hidden": "true" }, void 0, !1, {
              fileName: "app/routes/blue.jsx",
              lineNumber: 202,
              columnNumber: 19
            }, this),
            "Read more ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime94.jsxDEV)("span", { "aria-hidden": "true", children: "\u2192" }, void 0, !1, {
              fileName: "app/routes/blue.jsx",
              lineNumber: 203,
              columnNumber: 29
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/blue.jsx",
            lineNumber: 201,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/blue.jsx",
          lineNumber: 199,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/routes/blue.jsx",
          lineNumber: 198,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime94.jsxDEV)("div", { className: "relative z-10 text-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime94.jsxDEV)("h1", { className: "bg-gradient-to-r from-indigo-200 via-sky-400 to-indigo-200 bg-clip-text font-display text-6xl font-bold text-transparent lg:text-8xl", children: "BlueNorth AI" }, void 0, !1, {
            fileName: "app/routes/blue.jsx",
            lineNumber: 208,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime94.jsxDEV)("p", { className: "mt-6 text-base lg:text-lg  text-gray-300", children: "Enterprise AI suite to transform Supply Chain Planning and Execution" }, void 0, !1, {
            fileName: "app/routes/blue.jsx",
            lineNumber: 211,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime94.jsxDEV)("div", { className: "mt-8 flex justify-center gap-4 ", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime94.jsxDEV)(
              "button",
              {
                to: "/",
                type: "button",
                className: "rounded-full bg-sky-300 py-2 px-4 text-sm font-semibold text-slate-900 hover:bg-sky-200 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300/50 active:bg-sky-500",
                children: "Get started"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/blue.jsx",
                lineNumber: 216,
                columnNumber: 17
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime94.jsxDEV)(
              "button",
              {
                type: "button",
                className: "rounded-full bg-slate-800 py-2 px-4 text-sm font-medium text-white hover:bg-slate-700 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/50 active:text-slate-400",
                children: "Request Demo"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/blue.jsx",
                lineNumber: 223,
                columnNumber: 17
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/blue.jsx",
            lineNumber: 215,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/blue.jsx",
          lineNumber: 207,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/blue.jsx",
        lineNumber: 197,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime94.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime94.jsxDEV)(HeroBackground, { className: "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 lg:left-0 lg:translate-x-0 lg:translate-y-[-60%]" }, void 0, !1, {
        fileName: "app/routes/blue.jsx",
        lineNumber: 234,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/blue.jsx",
        lineNumber: 233,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/blue.jsx",
      lineNumber: 196,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/blue.jsx",
      lineNumber: 195,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/blue.jsx",
    lineNumber: 43,
    columnNumber: 5
  }, this);
}

// app/routes/home.tsx
var home_exports = {};
__export(home_exports, {
  default: () => Home
});

// app/components/Layout.tsx
var import_react62 = require("@remix-run/react"), import_clsx11 = __toESM(require("clsx")), import_react63 = require("react");
var import_jsx_dev_runtime95 = require("react/jsx-dev-runtime");
function Header4() {
  let [isScrolled, setIsScrolled] = (0, import_react63.useState)(!1);
  return (0, import_react63.useEffect)(() => {
    function onScroll() {
      setIsScrolled(window.scrollY > 0);
    }
    return onScroll(), window.addEventListener("scroll", onScroll, { passive: !0 }), () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []), /* @__PURE__ */ (0, import_jsx_dev_runtime95.jsxDEV)(
    "header",
    {
      className: (0, import_clsx11.default)(
        "sticky top-0 z-50 flex flex-none flex-wrap items-center justify-between bg-white px-4 py-5 shadow-md shadow-slate-900/5 transition duration-500 sm:px-6 lg:px-8 dark:shadow-none",
        isScrolled ? "dark:bg-slate-900/95 dark:backdrop-blur dark:[@supports(backdrop-filter:blur(0))]:bg-slate-900/75" : "dark:bg-transparent"
      ),
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime95.jsxDEV)("div", { className: "mr-6 flex lg:hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime95.jsxDEV)(MobileNavigation, {}, void 0, !1, {
          fileName: "app/components/Layout.tsx",
          lineNumber: 46,
          columnNumber: 9
        }, this) }, void 0, !1, {
          fileName: "app/components/Layout.tsx",
          lineNumber: 45,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime95.jsxDEV)("div", { className: "relative flex flex-grow basis-0 items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime95.jsxDEV)(import_react62.Link, { to: "/", "aria-label": "Home page", children: /* @__PURE__ */ (0, import_jsx_dev_runtime95.jsxDEV)(Logo, { className: " h-9 w-auto fill-slate-700  dark:fill-sky-100" }, void 0, !1, {
          fileName: "app/components/Layout.tsx",
          lineNumber: 50,
          columnNumber: 11
        }, this) }, void 0, !1, {
          fileName: "app/components/Layout.tsx",
          lineNumber: 49,
          columnNumber: 9
        }, this) }, void 0, !1, {
          fileName: "app/components/Layout.tsx",
          lineNumber: 48,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime95.jsxDEV)("div", { className: "relative flex basis-0 items-center justify-end gap-6 sm:gap-8 md:flex-grow", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime95.jsxDEV)(ThemeSelector, {}, void 0, !1, {
            fileName: "app/components/Layout.tsx",
            lineNumber: 57,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime95.jsxDEV)(
            import_react62.Link,
            {
              to: "/login-blue",
              className: "hidden lg:block lg:text-sm lg:font-semibold lg:leading-6 lg:text-gray-900",
              children: "Log in"
            },
            void 0,
            !1,
            {
              fileName: "app/components/Layout.tsx",
              lineNumber: 59,
              columnNumber: 9
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime95.jsxDEV)(
            import_react62.Link,
            {
              to: "/signup",
              className: "rounded-md bg-sky-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-sky-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ",
              children: "Sign up"
            },
            void 0,
            !1,
            {
              fileName: "app/components/Layout.tsx",
              lineNumber: 65,
              columnNumber: 9
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/components/Layout.tsx",
          lineNumber: 56,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/Layout.tsx",
      lineNumber: 37,
      columnNumber: 5
    },
    this
  );
}
function Layout2() {
  let isHomePage = (0, import_react62.useLocation)().pathname === "/home";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime95.jsxDEV)("div", { className: "flex w-full flex-col", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime95.jsxDEV)(Header4, {}, void 0, !1, {
      fileName: "app/components/Layout.tsx",
      lineNumber: 85,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime95.jsxDEV)(Hero, {}, void 0, !1, {
      fileName: "app/components/Layout.tsx",
      lineNumber: 87,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime95.jsxDEV)("div", { className: "flex h-24 w-full items-center justify-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime95.jsxDEV)("div", { className: "relative", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime95.jsxDEV)(
          "img",
          {
            className: "absolute ",
            src: blur_indigo_default,
            alt: "",
            width: 530,
            height: 530
          },
          void 0,
          !1,
          {
            fileName: "app/components/Layout.tsx",
            lineNumber: 91,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime95.jsxDEV)(
          "img",
          {
            className: "absolute",
            src: blur_cyan_default,
            alt: "",
            width: 567,
            height: 567
          },
          void 0,
          !1,
          {
            fileName: "app/components/Layout.tsx",
            lineNumber: 98,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/components/Layout.tsx",
        lineNumber: 90,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime95.jsxDEV)("h1", { className: "max-w-2xl font-display text-5xl tracking-tight text-slate-900 dark:text-white ", children: "Our Capabilities" }, void 0, !1, {
        fileName: "app/components/Layout.tsx",
        lineNumber: 107,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Layout.tsx",
      lineNumber: 89,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime95.jsxDEV)("div", { className: "mx-auto h-1 w-1/3 bg-gradient-to-r from-indigo-200 via-sky-400 to-indigo-200 " }, void 0, !1, {
      fileName: "app/components/Layout.tsx",
      lineNumber: 112,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime95.jsxDEV)("div", { className: "relative flex w-full flex-auto justify-center sm:px-2 lg:px-8 xl:px-12 ", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime95.jsxDEV)("div", { className: "hidden lg:relative lg:block lg:flex-none", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime95.jsxDEV)("div", { className: "absolute inset-y-0 right-0 w-[50vw] bg-slate-50 dark:hidden" }, void 0, !1, {
          fileName: "app/components/Layout.tsx",
          lineNumber: 115,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime95.jsxDEV)("div", { className: "absolute bottom-0 right-0 top-16 hidden h-12 w-px bg-gradient-to-t from-slate-800 dark:block" }, void 0, !1, {
          fileName: "app/components/Layout.tsx",
          lineNumber: 116,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime95.jsxDEV)("div", { className: "absolute bottom-0 right-0 top-28 hidden w-px bg-slate-800 dark:block" }, void 0, !1, {
          fileName: "app/components/Layout.tsx",
          lineNumber: 117,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime95.jsxDEV)("div", { className: "sticky top-[4.75rem] -ml-0.5 h-[calc(100vh-4.75rem)] w-96 overflow-y-auto overflow-x-hidden py-16 pl-0.5 pr-8 xl:w-72 xl:pr-16", children: /* @__PURE__ */ (0, import_jsx_dev_runtime95.jsxDEV)(Navigation, {}, void 0, !1, {
          fileName: "app/components/Layout.tsx",
          lineNumber: 119,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/components/Layout.tsx",
          lineNumber: 118,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/Layout.tsx",
        lineNumber: 114,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime95.jsxDEV)(import_react62.Outlet, {}, void 0, !1, {
        fileName: "app/components/Layout.tsx",
        lineNumber: 123,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Layout.tsx",
      lineNumber: 113,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Layout.tsx",
    lineNumber: 84,
    columnNumber: 5
  }, this);
}

// app/routes/home.tsx
var import_jsx_dev_runtime96 = require("react/jsx-dev-runtime");
function Home() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime96.jsxDEV)("div", { className: "h-full bg-white dark:bg-slate-900", children: /* @__PURE__ */ (0, import_jsx_dev_runtime96.jsxDEV)(Layout2, {}, void 0, !1, {
    fileName: "app/routes/home.tsx",
    lineNumber: 6,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/home.tsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

// app/routes/join.tsx
var join_exports = {};
__export(join_exports, {
  action: () => action7,
  default: () => Join,
  loader: () => loader10,
  meta: () => meta3
});
var import_node12 = require("@remix-run/node"), import_react64 = require("@remix-run/react"), import_react65 = require("react");
var import_jsx_dev_runtime97 = require("react/jsx-dev-runtime"), loader10 = async ({ request }) => await getUserId(request) ? (0, import_node12.redirect)("/") : (0, import_node12.json)({}), action7 = async ({ request }) => {
  let formData = await request.formData(), email = formData.get("email"), password = formData.get("password"), redirectTo = safeRedirect(formData.get("redirectTo"), "/");
  if (!validateEmail(email))
    return (0, import_node12.json)(
      { errors: { email: "Email is invalid", password: null } },
      { status: 400 }
    );
  if (typeof password != "string" || password.length === 0)
    return (0, import_node12.json)(
      { errors: { email: null, password: "Password is required" } },
      { status: 400 }
    );
  if (password.length < 8)
    return (0, import_node12.json)(
      { errors: { email: null, password: "Password is too short" } },
      { status: 400 }
    );
  if (await getUserByEmail(email))
    return (0, import_node12.json)(
      {
        errors: {
          email: "A user already exists with this email",
          password: null
        }
      },
      { status: 400 }
    );
  let user = await createUser(email, password);
  return createUserSession({
    redirectTo,
    remember: !1,
    request,
    userId: user.id
  });
}, meta3 = () => [{ title: "Sign Up" }];
function Join() {
  let [searchParams] = (0, import_react64.useSearchParams)(), redirectTo = searchParams.get("redirectTo") ?? void 0, actionData = (0, import_react64.useActionData)(), emailRef = (0, import_react65.useRef)(null), passwordRef = (0, import_react65.useRef)(null);
  return (0, import_react65.useEffect)(() => {
    actionData?.errors?.email ? emailRef.current?.focus() : actionData?.errors?.password && passwordRef.current?.focus();
  }, [actionData]), /* @__PURE__ */ (0, import_jsx_dev_runtime97.jsxDEV)("div", { className: "flex min-h-full flex-col justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime97.jsxDEV)("div", { className: "mx-auto w-full max-w-md px-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime97.jsxDEV)(import_react64.Form, { method: "post", className: "space-y-6", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime97.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime97.jsxDEV)(
        "label",
        {
          htmlFor: "email",
          className: "block text-sm font-medium text-gray-700",
          children: "Email address"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/join.tsx",
          lineNumber: 92,
          columnNumber: 13
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime97.jsxDEV)("div", { className: "mt-1", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime97.jsxDEV)(
          "input",
          {
            ref: emailRef,
            id: "email",
            required: !0,
            autoFocus: !0,
            name: "email",
            type: "email",
            autoComplete: "email",
            "aria-invalid": actionData?.errors?.email ? !0 : void 0,
            "aria-describedby": "email-error",
            className: "w-full rounded border border-gray-500 px-2 py-1 text-lg"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/join.tsx",
            lineNumber: 99,
            columnNumber: 15
          },
          this
        ),
        actionData?.errors?.email ? /* @__PURE__ */ (0, import_jsx_dev_runtime97.jsxDEV)("div", { className: "pt-1 text-red-700", id: "email-error", children: actionData.errors.email }, void 0, !1, {
          fileName: "app/routes/join.tsx",
          lineNumber: 113,
          columnNumber: 17
        }, this) : null
      ] }, void 0, !0, {
        fileName: "app/routes/join.tsx",
        lineNumber: 98,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/join.tsx",
      lineNumber: 91,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime97.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime97.jsxDEV)(
        "label",
        {
          htmlFor: "password",
          className: "block text-sm font-medium text-gray-700",
          children: "Password"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/join.tsx",
          lineNumber: 121,
          columnNumber: 13
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime97.jsxDEV)("div", { className: "mt-1", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime97.jsxDEV)(
          "input",
          {
            id: "password",
            ref: passwordRef,
            name: "password",
            type: "password",
            autoComplete: "new-password",
            "aria-invalid": actionData?.errors?.password ? !0 : void 0,
            "aria-describedby": "password-error",
            className: "w-full rounded border border-gray-500 px-2 py-1 text-lg"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/join.tsx",
            lineNumber: 128,
            columnNumber: 15
          },
          this
        ),
        actionData?.errors?.password ? /* @__PURE__ */ (0, import_jsx_dev_runtime97.jsxDEV)("div", { className: "pt-1 text-red-700", id: "password-error", children: actionData.errors.password }, void 0, !1, {
          fileName: "app/routes/join.tsx",
          lineNumber: 139,
          columnNumber: 17
        }, this) : null
      ] }, void 0, !0, {
        fileName: "app/routes/join.tsx",
        lineNumber: 127,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/join.tsx",
      lineNumber: 120,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime97.jsxDEV)("input", { type: "hidden", name: "redirectTo", value: redirectTo }, void 0, !1, {
      fileName: "app/routes/join.tsx",
      lineNumber: 146,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime97.jsxDEV)(
      "button",
      {
        type: "submit",
        className: "w-full rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:bg-blue-400",
        children: "Create Account"
      },
      void 0,
      !1,
      {
        fileName: "app/routes/join.tsx",
        lineNumber: 147,
        columnNumber: 11
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime97.jsxDEV)("div", { className: "flex items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime97.jsxDEV)("div", { className: "text-center text-sm text-gray-500", children: [
      "Already have an account?",
      " ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime97.jsxDEV)(
        import_react64.Link,
        {
          className: "text-blue-500 underline",
          to: {
            pathname: "/login",
            search: searchParams.toString()
          },
          children: "Log in"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/join.tsx",
          lineNumber: 156,
          columnNumber: 15
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/routes/join.tsx",
      lineNumber: 154,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/routes/join.tsx",
      lineNumber: 153,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/join.tsx",
    lineNumber: 90,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/routes/join.tsx",
    lineNumber: 89,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/join.tsx",
    lineNumber: 88,
    columnNumber: 5
  }, this);
}

// app/routes/ai.tsx
var ai_exports = {};
__export(ai_exports, {
  action: () => action8,
  default: () => Ai
});
var import_node13 = require("@remix-run/node"), import_react69 = require("@remix-run/react"), import_react_hot_toast6 = require("react-hot-toast");

// app/components/header.tsx
var import_react67 = require("@remix-run/react"), import_react68 = __toESM(require("react"));

// app/components/ui/navigation-menu.tsx
var React20 = __toESM(require("react")), NavigationMenuPrimitive = __toESM(require("@radix-ui/react-navigation-menu")), import_class_variance_authority2 = require("class-variance-authority"), import_lucide_react3 = require("lucide-react");
var import_jsx_dev_runtime98 = require("react/jsx-dev-runtime"), NavigationMenu = React20.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime98.jsxDEV)(
  NavigationMenuPrimitive.Root,
  {
    ref,
    className: cn(
      "relative z-10 flex max-w-max flex-1 items-center justify-center",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ (0, import_jsx_dev_runtime98.jsxDEV)(NavigationMenuViewport, {}, void 0, !1, {
        fileName: "app/components/ui/navigation-menu.tsx",
        lineNumber: 21,
        columnNumber: 5
      }, this)
    ]
  },
  void 0,
  !0,
  {
    fileName: "app/components/ui/navigation-menu.tsx",
    lineNumber: 12,
    columnNumber: 3
  },
  this
));
NavigationMenu.displayName = NavigationMenuPrimitive.Root.displayName;
var NavigationMenuList = React20.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime98.jsxDEV)(
  NavigationMenuPrimitive.List,
  {
    ref,
    className: cn(
      "group flex flex-1 list-none items-center justify-center space-x-1",
      className
    ),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/navigation-menu.tsx",
    lineNumber: 30,
    columnNumber: 3
  },
  this
));
NavigationMenuList.displayName = NavigationMenuPrimitive.List.displayName;
var NavigationMenuItem = NavigationMenuPrimitive.Item, navigationMenuTriggerStyle = (0, import_class_variance_authority2.cva)(
  "group inline-flex h-10 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-slate-100 hover:text-slate-900 focus:bg-slate-100 focus:text-slate-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-slate-100/50 data-[state=open]:bg-slate-100/50 dark:bg-slate-950 dark:hover:bg-slate-800 dark:hover:text-slate-50 dark:focus:bg-slate-800 dark:focus:text-slate-50 dark:data-[active]:bg-slate-800/50 dark:data-[state=open]:bg-slate-800/50"
), NavigationMenuTrigger = React20.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime98.jsxDEV)(
  NavigationMenuPrimitive.Trigger,
  {
    ref,
    className: cn(navigationMenuTriggerStyle(), "group", className),
    ...props,
    children: [
      children,
      "",
      /* @__PURE__ */ (0, import_jsx_dev_runtime98.jsxDEV)(
        import_lucide_react3.ChevronDown,
        {
          className: "relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180",
          "aria-hidden": "true"
        },
        void 0,
        !1,
        {
          fileName: "app/components/ui/navigation-menu.tsx",
          lineNumber: 57,
          columnNumber: 5
        },
        this
      )
    ]
  },
  void 0,
  !0,
  {
    fileName: "app/components/ui/navigation-menu.tsx",
    lineNumber: 51,
    columnNumber: 3
  },
  this
));
NavigationMenuTrigger.displayName = NavigationMenuPrimitive.Trigger.displayName;
var NavigationMenuContent = React20.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime98.jsxDEV)(
  NavigationMenuPrimitive.Content,
  {
    ref,
    className: cn(
      "top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto",
      className
    ),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/navigation-menu.tsx",
    lineNumber: 69,
    columnNumber: 3
  },
  this
));
NavigationMenuContent.displayName = NavigationMenuPrimitive.Content.displayName;
var NavigationMenuLink = NavigationMenuPrimitive.Link, NavigationMenuViewport = React20.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime98.jsxDEV)("div", { className: cn("absolute top-full flex justify-start mr-96"), children: /* @__PURE__ */ (0, import_jsx_dev_runtime98.jsxDEV)(
  NavigationMenuPrimitive.Viewport,
  {
    className: cn(
      "origin-top-left relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border border-slate-200 bg-white text-slate-950 shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)] dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50",
      className
    ),
    ref,
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/navigation-menu.tsx",
    lineNumber: 87,
    columnNumber: 5
  },
  this
) }, void 0, !1, {
  fileName: "app/components/ui/navigation-menu.tsx",
  lineNumber: 86,
  columnNumber: 3
}, this));
NavigationMenuViewport.displayName = NavigationMenuPrimitive.Viewport.displayName;
var NavigationMenuIndicator = React20.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime98.jsxDEV)(
  NavigationMenuPrimitive.Indicator,
  {
    ref,
    className: cn(
      "top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in",
      className
    ),
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime98.jsxDEV)("div", { className: "relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-slate-200 shadow-md dark:bg-slate-800" }, void 0, !1, {
      fileName: "app/components/ui/navigation-menu.tsx",
      lineNumber: 112,
      columnNumber: 5
    }, this)
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/navigation-menu.tsx",
    lineNumber: 104,
    columnNumber: 3
  },
  this
));
NavigationMenuIndicator.displayName = NavigationMenuPrimitive.Indicator.displayName;

// app/components/user-menu.tsx
var import_react66 = require("@remix-run/react"), import_remix_utils = __toESM(require_build());
var import_jsx_dev_runtime99 = require("react/jsx-dev-runtime");
function getUserInitials(name) {
  let [firstName, lastName] = name.split(" ");
  return lastName ? `${firstName[0]}${lastName[0]}` : firstName.slice(0, 2);
}
function UserMenuClient() {
  let user = useUser(), fetcher = (0, import_react66.useFetcher)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime99.jsxDEV)("div", { className: "flex items-center justify-between", children: /* @__PURE__ */ (0, import_jsx_dev_runtime99.jsxDEV)(DropdownMenu, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime99.jsxDEV)(DropdownMenuTrigger, { asChild: !0, children: /* @__PURE__ */ (0, import_jsx_dev_runtime99.jsxDEV)(Button2, { variant: "ghost", className: "pl-0", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime99.jsxDEV)("div", { className: "flex items-center justify-center text-xs font-medium uppercase rounded-full select-none size-7 shrink-0 bg-muted/50 text-muted-foreground", children: user?.email ? getUserInitials(user?.email) : null }, void 0, !1, {
        fileName: "app/components/user-menu.tsx",
        lineNumber: 33,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime99.jsxDEV)("span", { className: "ml-2", children: user?.email }, void 0, !1, {
        fileName: "app/components/user-menu.tsx",
        lineNumber: 36,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/user-menu.tsx",
      lineNumber: 32,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/components/user-menu.tsx",
      lineNumber: 31,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime99.jsxDEV)(DropdownMenuContent, { sideOffset: 8, align: "start", className: "w-[180px]", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime99.jsxDEV)(DropdownMenuItem, { className: "flex-col items-start", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime99.jsxDEV)("div", { className: "text-xs font-medium", children: user?.email }, void 0, !1, {
          fileName: "app/components/user-menu.tsx",
          lineNumber: 41,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime99.jsxDEV)("div", { className: "text-xs text-zinc-500", children: user?.email }, void 0, !1, {
          fileName: "app/components/user-menu.tsx",
          lineNumber: 42,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/user-menu.tsx",
        lineNumber: 40,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime99.jsxDEV)(DropdownMenuSeparator, {}, void 0, !1, {
        fileName: "app/components/user-menu.tsx",
        lineNumber: 44,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime99.jsxDEV)(DropdownMenuItem, { asChild: !0, children: /* @__PURE__ */ (0, import_jsx_dev_runtime99.jsxDEV)(
        import_react66.Link,
        {
          to: "https://vercel.com",
          target: "_blank",
          rel: "noopener noreferrer",
          className: "inline-flex items-center justify-between w-full text-xs",
          children: [
            "Vercel Homepage",
            /* @__PURE__ */ (0, import_jsx_dev_runtime99.jsxDEV)(IconExternalLink, { className: "size-3 ml-auto" }, void 0, !1, {
              fileName: "app/components/user-menu.tsx",
              lineNumber: 53,
              columnNumber: 15
            }, this)
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/components/user-menu.tsx",
          lineNumber: 46,
          columnNumber: 13
        },
        this
      ) }, void 0, !1, {
        fileName: "app/components/user-menu.tsx",
        lineNumber: 45,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime99.jsxDEV)(
        DropdownMenuItem,
        {
          onClick: () => fetcher.submit({ method: "POST" }, { action: "logout" }),
          className: "text-xs",
          children: "Log Out"
        },
        void 0,
        !1,
        {
          fileName: "app/components/user-menu.tsx",
          lineNumber: 56,
          columnNumber: 11
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/user-menu.tsx",
      lineNumber: 39,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/user-menu.tsx",
    lineNumber: 30,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/user-menu.tsx",
    lineNumber: 29,
    columnNumber: 5
  }, this);
}
function UserMenu() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime99.jsxDEV)(import_remix_utils.ClientOnly, { fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime99.jsxDEV)("div", { children: "Loading..." }, void 0, !1, {
    fileName: "app/components/user-menu.tsx",
    lineNumber: 72,
    columnNumber: 27
  }, this), children: () => /* @__PURE__ */ (0, import_jsx_dev_runtime99.jsxDEV)(UserMenuClient, {}, void 0, !1, {
    fileName: "app/components/user-menu.tsx",
    lineNumber: 73,
    columnNumber: 14
  }, this) }, void 0, !1, {
    fileName: "app/components/user-menu.tsx",
    lineNumber: 72,
    columnNumber: 5
  }, this);
}

// app/components/ui/sheet.tsx
var React21 = __toESM(require("react")), SheetPrimitive = __toESM(require("@radix-ui/react-dialog")), import_class_variance_authority3 = require("class-variance-authority"), import_lucide_react4 = require("lucide-react");
var import_jsx_dev_runtime100 = require("react/jsx-dev-runtime"), Sheet = SheetPrimitive.Root, SheetTrigger = SheetPrimitive.Trigger;
var SheetPortal = SheetPrimitive.Portal, SheetOverlay = React21.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime100.jsxDEV)(
  SheetPrimitive.Overlay,
  {
    className: cn(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    ),
    ...props,
    ref
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/sheet.tsx",
    lineNumber: 20,
    columnNumber: 3
  },
  this
));
SheetOverlay.displayName = SheetPrimitive.Overlay.displayName;
var sheetVariants = (0, import_class_variance_authority3.cva)(
  "fixed z-50 gap-4 bg-white p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500 dark:bg-slate-950",
  {
    variants: {
      side: {
        top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
        bottom: "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
        left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
        right: "inset-y-0 right-0 h-full w-3/4  border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"
      }
    },
    defaultVariants: {
      side: "right"
    }
  }
), SheetContent = React21.forwardRef(({ side = "right", className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime100.jsxDEV)(SheetPortal, { children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime100.jsxDEV)(SheetOverlay, {}, void 0, !1, {
    fileName: "app/components/ui/sheet.tsx",
    lineNumber: 59,
    columnNumber: 5
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime100.jsxDEV)(
    SheetPrimitive.Content,
    {
      ref,
      className: cn(sheetVariants({ side }), className),
      ...props,
      children: [
        children,
        /* @__PURE__ */ (0, import_jsx_dev_runtime100.jsxDEV)(SheetPrimitive.Close, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-slate-100 dark:ring-offset-slate-950 dark:focus:ring-slate-300 dark:data-[state=open]:bg-slate-800", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime100.jsxDEV)(import_lucide_react4.X, { className: "h-4 w-4" }, void 0, !1, {
            fileName: "app/components/ui/sheet.tsx",
            lineNumber: 67,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime100.jsxDEV)("span", { className: "sr-only", children: "Close" }, void 0, !1, {
            fileName: "app/components/ui/sheet.tsx",
            lineNumber: 68,
            columnNumber: 9
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/ui/sheet.tsx",
          lineNumber: 66,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/ui/sheet.tsx",
      lineNumber: 60,
      columnNumber: 5
    },
    this
  )
] }, void 0, !0, {
  fileName: "app/components/ui/sheet.tsx",
  lineNumber: 58,
  columnNumber: 3
}, this));
SheetContent.displayName = SheetPrimitive.Content.displayName;
var SheetHeader = ({
  className,
  ...props
}) => /* @__PURE__ */ (0, import_jsx_dev_runtime100.jsxDEV)(
  "div",
  {
    className: cn(
      "flex flex-col space-y-2 text-center sm:text-left",
      className
    ),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/sheet.tsx",
    lineNumber: 79,
    columnNumber: 3
  },
  this
);
SheetHeader.displayName = "SheetHeader";
var SheetFooter = ({
  className,
  ...props
}) => /* @__PURE__ */ (0, import_jsx_dev_runtime100.jsxDEV)(
  "div",
  {
    className: cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className
    ),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/sheet.tsx",
    lineNumber: 93,
    columnNumber: 3
  },
  this
);
SheetFooter.displayName = "SheetFooter";
var SheetTitle = React21.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime100.jsxDEV)(
  SheetPrimitive.Title,
  {
    ref,
    className: cn("text-lg font-semibold text-slate-950 dark:text-slate-50", className),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/sheet.tsx",
    lineNumber: 107,
    columnNumber: 3
  },
  this
));
SheetTitle.displayName = SheetPrimitive.Title.displayName;
var SheetDescription = React21.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime100.jsxDEV)(
  SheetPrimitive.Description,
  {
    ref,
    className: cn("text-sm text-slate-500 dark:text-slate-400", className),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/sheet.tsx",
    lineNumber: 119,
    columnNumber: 3
  },
  this
));
SheetDescription.displayName = SheetPrimitive.Description.displayName;

// public/assets/lowes.png
var lowes_default = "/build/_assets/lowes-GODDG2UJ.png";

// app/components/sidebar-mobile.tsx
var import_jsx_dev_runtime101 = require("react/jsx-dev-runtime");
function SidebarMobile({ children }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime101.jsxDEV)(Sheet, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime101.jsxDEV)(SheetTrigger, { asChild: !0, children: /* @__PURE__ */ (0, import_jsx_dev_runtime101.jsxDEV)(Button2, { variant: "ghost", className: "-ml-2 flex p-0 lg:hidden", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime101.jsxDEV)("img", { className: "cursor-poniter  h-12 w-16 ", src: lowes_default, alt: "logo" }, void 0, !1, {
        fileName: "app/components/sidebar-mobile.tsx",
        lineNumber: 17,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime101.jsxDEV)("span", { className: "sr-only", children: "Toggle Sidebar" }, void 0, !1, {
        fileName: "app/components/sidebar-mobile.tsx",
        lineNumber: 18,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/sidebar-mobile.tsx",
      lineNumber: 16,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/sidebar-mobile.tsx",
      lineNumber: 15,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime101.jsxDEV)(SheetContent, { className: "inset-y-0 flex h-auto w-[300px] flex-col p-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime101.jsxDEV)(Sidebar, { className: "flex", children }, void 0, !1, {
      fileName: "app/components/sidebar-mobile.tsx",
      lineNumber: 22,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/sidebar-mobile.tsx",
      lineNumber: 21,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/sidebar-mobile.tsx",
    lineNumber: 14,
    columnNumber: 5
  }, this);
}

// app/components/sidebar-toggle.tsx
var import_jsx_dev_runtime102 = require("react/jsx-dev-runtime");
function SidebarToggle() {
  let { toggleSidebar } = useSidebar();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime102.jsxDEV)(
    "button",
    {
      className: "-ml-2 hidden lg:flex",
      onClick: () => {
        toggleSidebar();
      },
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime102.jsxDEV)("img", { className: "cursor-poniter  h-12 w-15 ", src: lowes_default, alt: "logo" }, void 0, !1, {
          fileName: "app/components/sidebar-toggle.tsx",
          lineNumber: 18,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime102.jsxDEV)("span", { className: "sr-only", children: "Toggle Sidebar" }, void 0, !1, {
          fileName: "app/components/sidebar-toggle.tsx",
          lineNumber: 20,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/sidebar-toggle.tsx",
      lineNumber: 12,
      columnNumber: 5
    },
    this
  );
}

// app/components/header.tsx
var import_jsx_dev_runtime103 = require("react/jsx-dev-runtime"), components = [
  {
    title: "Overview",
    href: "/docs/primitives/alert-dialog",
    description: "A modal dialog that interrupts the user with important content and expects a response."
  },
  {
    title: "Demand",
    href: "/docs/primitives/hover-card",
    description: "For sighted users to preview content available behind a link."
  },
  {
    title: "Supply",
    href: "/docs/primitives/progress",
    description: "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar."
  },
  {
    title: "Spend",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content."
  },
  {
    title: "Sales",
    href: "/docs/primitives/tabs",
    description: "A set of layered sections of content\u2014known as tab panels\u2014that are displayed one at a time."
  },
  {
    title: "Finance",
    href: "/docs/primitives/tooltip",
    description: "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it."
  }
], ListItem = import_react68.default.forwardRef(({ className, title, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime103.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime103.jsxDEV)(NavigationMenuLink, { asChild: !0, children: /* @__PURE__ */ (0, import_jsx_dev_runtime103.jsxDEV)(
  "a",
  {
    ref,
    className: cn(
      "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors  hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
      className
    ),
    ...props,
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime103.jsxDEV)("div", { className: "text-sm font-medium leading-none", children: title }, void 0, !1, {
        fileName: "app/components/header.tsx",
        lineNumber: 79,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime103.jsxDEV)("p", { className: "line-clamp-2 text-sm leading-snug text-muted-foreground", children }, void 0, !1, {
        fileName: "app/components/header.tsx",
        lineNumber: 80,
        columnNumber: 11
      }, this)
    ]
  },
  void 0,
  !0,
  {
    fileName: "app/components/header.tsx",
    lineNumber: 71,
    columnNumber: 9
  },
  this
) }, void 0, !1, {
  fileName: "app/components/header.tsx",
  lineNumber: 70,
  columnNumber: 7
}, this) }, void 0, !1, {
  fileName: "app/components/header.tsx",
  lineNumber: 69,
  columnNumber: 5
}, this));
ListItem.displayName = "ListItem";
function UserOrLogin() {
  let user = useUser();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime103.jsxDEV)(import_jsx_dev_runtime103.Fragment, { children: [
    user ? /* @__PURE__ */ (0, import_jsx_dev_runtime103.jsxDEV)(import_jsx_dev_runtime103.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime103.jsxDEV)(SidebarMobile, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime103.jsxDEV)(ChatHistory, { userId: user.id }, void 0, !1, {
        fileName: "app/components/header.tsx",
        lineNumber: 98,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/components/header.tsx",
        lineNumber: 97,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime103.jsxDEV)(SidebarToggle, {}, void 0, !1, {
        fileName: "app/components/header.tsx",
        lineNumber: 100,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/header.tsx",
      lineNumber: 96,
      columnNumber: 9
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime103.jsxDEV)(import_react67.Link, { to: "/", target: "_blank", rel: "nofollow", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime103.jsxDEV)(IconNextChat, { className: "size-6 mr-2 dark:hidden", inverted: !0 }, void 0, !1, {
        fileName: "app/components/header.tsx",
        lineNumber: 104,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime103.jsxDEV)(IconNextChat, { className: "hidden size-6 mr-2 dark:block" }, void 0, !1, {
        fileName: "app/components/header.tsx",
        lineNumber: 105,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/header.tsx",
      lineNumber: 103,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime103.jsxDEV)("div", { className: "flex items-center ", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime103.jsxDEV)(IconSeparator, { className: "size-6 text-muted-foreground/50" }, void 0, !1, {
        fileName: "app/components/header.tsx",
        lineNumber: 109,
        columnNumber: 9
      }, this),
      user ? /* @__PURE__ */ (0, import_jsx_dev_runtime103.jsxDEV)(UserMenu, {}, void 0, !1, {
        fileName: "app/components/header.tsx",
        lineNumber: 111,
        columnNumber: 11
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime103.jsxDEV)(Button2, { variant: "link", asChild: !0, className: "-ml-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime103.jsxDEV)(import_react67.Link, { to: "/sign-in?callbackUrl=/", children: "Login" }, void 0, !1, {
        fileName: "app/components/header.tsx",
        lineNumber: 114,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/components/header.tsx",
        lineNumber: 113,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/header.tsx",
      lineNumber: 108,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/header.tsx",
    lineNumber: 94,
    columnNumber: 5
  }, this);
}
function Header5() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime103.jsxDEV)("header", { className: "sticky top-0 z-50 flex items-center justify-between w-full h-16 px-4 border-b shrink-0 bg-[#272e62]", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime103.jsxDEV)("div", { className: "flex items-center text-white text-lg ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime103.jsxDEV)(import_react68.default.Suspense, { fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime103.jsxDEV)("div", { className: "flex-1 overflow-auto" }, void 0, !1, {
      fileName: "app/components/header.tsx",
      lineNumber: 126,
      columnNumber: 35
    }, this), children: /* @__PURE__ */ (0, import_jsx_dev_runtime103.jsxDEV)(UserOrLogin, {}, void 0, !1, {
      fileName: "app/components/header.tsx",
      lineNumber: 127,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/components/header.tsx",
      lineNumber: 126,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/header.tsx",
      lineNumber: 125,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime103.jsxDEV)("div", { className: "flex items-center justify-end space-x-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime103.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime103.jsxDEV)(NavigationMenu, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime103.jsxDEV)(NavigationMenuList, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime103.jsxDEV)(NavigationMenuItem, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime103.jsxDEV)(NavigationMenuTrigger, { className: "bg-sky-500 text-white", children: "Avatars" }, void 0, !1, {
          fileName: "app/components/header.tsx",
          lineNumber: 136,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime103.jsxDEV)(NavigationMenuContent, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime103.jsxDEV)("ul", { className: "grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]", children: components.map((component) => /* @__PURE__ */ (0, import_jsx_dev_runtime103.jsxDEV)(
          ListItem,
          {
            title: component.title,
            href: component.href,
            children: component.description
          },
          component.title,
          !1,
          {
            fileName: "app/components/header.tsx",
            lineNumber: 142,
            columnNumber: 23
          },
          this
        )) }, void 0, !1, {
          fileName: "app/components/header.tsx",
          lineNumber: 140,
          columnNumber: 19
        }, this) }, void 0, !1, {
          fileName: "app/components/header.tsx",
          lineNumber: 139,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/header.tsx",
        lineNumber: 135,
        columnNumber: 15
      }, this) }, void 0, !1, {
        fileName: "app/components/header.tsx",
        lineNumber: 134,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/components/header.tsx",
        lineNumber: 133,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/components/header.tsx",
        lineNumber: 132,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime103.jsxDEV)(
        import_react67.Link,
        {
          target: "_blank",
          to: "/ai/explore",
          rel: "noopener noreferrer",
          className: " hover:bg-sky-500/20 text-white font-semibold rounded-lg p-3 flex items-center space-x-2 border border-sky-500",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime103.jsxDEV)(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              className: "w-5 h-5",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime103.jsxDEV)("path", { d: "M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" }, void 0, !1, {
                fileName: "app/components/header.tsx",
                lineNumber: 173,
                columnNumber: 13
              }, this)
            },
            void 0,
            !1,
            {
              fileName: "app/components/header.tsx",
              lineNumber: 163,
              columnNumber: 11
            },
            this
          )
        },
        void 0,
        !1,
        {
          fileName: "app/components/header.tsx",
          lineNumber: 157,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/header.tsx",
      lineNumber: 131,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/header.tsx",
    lineNumber: 124,
    columnNumber: 5
  }, this);
}

// app/components/providers.tsx
var import_remix_utils2 = __toESM(require_build());
var import_jsx_dev_runtime104 = require("react/jsx-dev-runtime");
function Providers({ children, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime104.jsxDEV)(import_remix_utils2.ClientOnly, { children: () => /* @__PURE__ */ (0, import_jsx_dev_runtime104.jsxDEV)(ThemeProvider2, { ...props, children: /* @__PURE__ */ (0, import_jsx_dev_runtime104.jsxDEV)(SidebarProvider, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime104.jsxDEV)(TooltipProvider, { children }, void 0, !1, {
    fileName: "app/components/providers.tsx",
    lineNumber: 14,
    columnNumber: 13
  }, this) }, void 0, !1, {
    fileName: "app/components/providers.tsx",
    lineNumber: 13,
    columnNumber: 11
  }, this) }, void 0, !1, {
    fileName: "app/components/providers.tsx",
    lineNumber: 12,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/components/providers.tsx",
    lineNumber: 10,
    columnNumber: 5
  }, this);
}

// app/routes/ai.tsx
var import_jsx_dev_runtime105 = require("react/jsx-dev-runtime"), action8 = async ({ request }) => {
  let userId = await requireUserId(request), formData = await request.formData(), id = String(formData.get("id")), intent = String(formData.get("intent"));
  if (intent === "delete") {
    let result = await removeChat({ id, userId });
    return (0, import_node13.json)({ result });
  }
  if (intent === "share") {
    let result = await shareChat(id, userId);
    return console.log("result", result), (0, import_node13.json)({ result });
  }
  if (intent === "clear") {
    let result = await clearChats(userId);
    return (0, import_node13.json)({ result });
  }
  return (0, import_node13.redirect)("/ai");
};
function Ai() {
  let id = nanoid();
  return console.log("id", id), /* @__PURE__ */ (0, import_jsx_dev_runtime105.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime105.jsxDEV)(import_react_hot_toast6.Toaster, {}, void 0, !1, {
      fileName: "app/routes/ai.tsx",
      lineNumber: 75,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime105.jsxDEV)(
      Providers,
      {
        attribute: "class",
        defaultTheme: "system",
        enableSystem: !0,
        disableTransitionOnChange: !0,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime105.jsxDEV)("div", { className: "flex flex-col min-h-screen", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime105.jsxDEV)(Header5, {}, void 0, !1, {
            fileName: "app/routes/ai.tsx",
            lineNumber: 83,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime105.jsxDEV)("main", { className: "flex flex-col flex-1 bg-muted/50", children: /* @__PURE__ */ (0, import_jsx_dev_runtime105.jsxDEV)(import_react69.Outlet, {}, void 0, !1, {
            fileName: "app/routes/ai.tsx",
            lineNumber: 85,
            columnNumber: 13
          }, this) }, void 0, !1, {
            fileName: "app/routes/ai.tsx",
            lineNumber: 84,
            columnNumber: 11
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/ai.tsx",
          lineNumber: 82,
          columnNumber: 9
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/routes/ai.tsx",
        lineNumber: 76,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/routes/ai.tsx",
    lineNumber: 74,
    columnNumber: 5
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-JCBDRGSJ.js", imports: ["/build/_shared/chunk-ZWGWGGVF.js", "/build/_shared/chunk-NON4LQMM.js", "/build/_shared/chunk-GIAAE3CH.js", "/build/_shared/chunk-K4XMOQHS.js", "/build/_shared/chunk-UWV35TSL.js", "/build/_shared/chunk-XU7DNSPJ.js", "/build/_shared/chunk-BOXFZXVX.js", "/build/_shared/chunk-PNG5AS42.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-NK6OBJ3I.js", imports: ["/build/_shared/chunk-EPFXGX35.js", "/build/_shared/chunk-NMZL6IDN.js", "/build/_shared/chunk-DMZCSMEQ.js", "/build/_shared/chunk-G7CHZRZX.js", "/build/_shared/chunk-Y3Q3TNJF.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-6URWOZRE.js", imports: ["/build/_shared/chunk-MAZOGT2T.js", "/build/_shared/chunk-D4F36K4M.js", "/build/_shared/chunk-KHD6IAOM.js", "/build/_shared/chunk-4GO7GDJN.js", "/build/_shared/chunk-AR7BF74J.js", "/build/_shared/chunk-7UAIT4ON.js", "/build/_shared/chunk-S67NAB4E.js", "/build/_shared/chunk-JI2KNYM7.js", "/build/_shared/chunk-47OZGKAC.js", "/build/_shared/chunk-UWXV354P.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/action.set-theme": { id: "routes/action.set-theme", parentId: "root", path: "action/set-theme", index: void 0, caseSensitive: void 0, module: "/build/routes/action.set-theme-JDBUG4AI.js", imports: void 0, hasAction: !0, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/ai": { id: "routes/ai", parentId: "root", path: "ai", index: void 0, caseSensitive: void 0, module: "/build/routes/ai-EYA3XZG5.js", imports: ["/build/_shared/chunk-7UAIT4ON.js", "/build/_shared/chunk-PKC3REQL.js", "/build/_shared/chunk-47OZGKAC.js", "/build/_shared/chunk-OJ6MM72X.js", "/build/_shared/chunk-XLWUAKDO.js", "/build/_shared/chunk-UWXV354P.js"], hasAction: !0, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/ai._index": { id: "routes/ai._index", parentId: "routes/ai", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/ai._index-2VWJVBJF.js", imports: ["/build/_shared/chunk-7M4ZRIY7.js", "/build/_shared/chunk-64CKQRZN.js", "/build/_shared/chunk-CX4P4NVK.js", "/build/_shared/chunk-7RAWVCLE.js", "/build/_shared/chunk-HADVB6BA.js", "/build/_shared/chunk-CGX3ZKZD.js", "/build/_shared/chunk-WFN5INC3.js", "/build/_shared/chunk-4ZUNKDEO.js", "/build/_shared/chunk-6PCNL4TM.js", "/build/_shared/chunk-ZAUB526Z.js", "/build/_shared/chunk-OOXN5LKO.js", "/build/_shared/chunk-U2SXPY6P.js", "/build/_shared/chunk-3IUYZRBA.js", "/build/_shared/chunk-RUSWU2QV.js", "/build/_shared/chunk-YG54RHS6.js", "/build/_shared/chunk-ASGHICNA.js", "/build/_shared/chunk-UI5MQUAV.js", "/build/_shared/chunk-UAXXVOWY.js", "/build/_shared/chunk-CTSAOQCE.js", "/build/_shared/chunk-HDZP2HUU.js", "/build/_shared/chunk-IFGXONU6.js", "/build/_shared/chunk-S5VRGJYW.js", "/build/_shared/chunk-J3KV3YQE.js", "/build/_shared/chunk-F7MX47RF.js", "/build/_shared/chunk-45YGLRMD.js", "/build/_shared/chunk-XJEJ7DAA.js", "/build/_shared/chunk-2AVIPOP7.js", "/build/_shared/chunk-7GDDGZGV.js", "/build/_shared/chunk-T5MN4NPH.js", "/build/_shared/chunk-7VGWUORS.js", "/build/_shared/chunk-BFGYYBKX.js", "/build/_shared/chunk-CRSD5573.js", "/build/_shared/chunk-CVRNAVSH.js", "/build/_shared/chunk-7MXRD6T4.js", "/build/_shared/chunk-HXBQKVQH.js", "/build/_shared/chunk-WUWAIDDY.js", "/build/_shared/chunk-4ECGHE6U.js", "/build/_shared/chunk-4ZNBTOPG.js", "/build/_shared/chunk-WFXZFCEH.js", "/build/_shared/chunk-2H3H2PLK.js", "/build/_shared/chunk-ZJ43M7ZI.js", "/build/_shared/chunk-UGLR5XS7.js", "/build/_shared/chunk-RRRCXVJ7.js", "/build/_shared/chunk-M36NJSVY.js", "/build/_shared/chunk-PAR5W2M4.js", "/build/_shared/chunk-IPQXJRNB.js", "/build/_shared/chunk-PLAE6JZW.js", "/build/_shared/chunk-TIOODPBB.js", "/build/_shared/chunk-33CZCMA2.js", "/build/_shared/chunk-KLZRXQQP.js", "/build/_shared/chunk-J64XZBRF.js", "/build/_shared/chunk-BMKLJ32X.js", "/build/_shared/chunk-6GWVEUC2.js", "/build/_shared/chunk-MIP4W6XY.js", "/build/_shared/chunk-BY753UDA.js", "/build/_shared/chunk-3XSYU645.js", "/build/_shared/chunk-YKOEDHP2.js", "/build/_shared/chunk-IEIJTQ7D.js", "/build/_shared/chunk-ZAZMA25W.js", "/build/_shared/chunk-6HNMMJFT.js", "/build/_shared/chunk-5K26VJ7P.js", "/build/_shared/chunk-PQXZPWYO.js", "/build/_shared/chunk-AFGULTJA.js", "/build/_shared/chunk-MJNKH2NQ.js", "/build/_shared/chunk-26DCOSP4.js", "/build/_shared/chunk-WFEHRARV.js", "/build/_shared/chunk-RI7YKWQH.js", "/build/_shared/chunk-CPPTORAI.js", "/build/_shared/chunk-K7GZ3H3S.js", "/build/_shared/chunk-B5PB3U27.js", "/build/_shared/chunk-DKO5OKUH.js", "/build/_shared/chunk-WMZWHHHD.js", "/build/_shared/chunk-NMFCGLSY.js", "/build/_shared/chunk-PHVVVDMI.js", "/build/_shared/chunk-72MG477C.js", "/build/_shared/chunk-NWAX33R7.js", "/build/_shared/chunk-KE5WRCEB.js", "/build/_shared/chunk-GVDPKYPW.js", "/build/_shared/chunk-SZ3NQD55.js", "/build/_shared/chunk-U3TG3A6E.js", "/build/_shared/chunk-IOU425TF.js", "/build/_shared/chunk-WAIYGYMH.js", "/build/_shared/chunk-IPGTFSFW.js", "/build/_shared/chunk-YNTYYAHI.js", "/build/_shared/chunk-OTDH4SXV.js", "/build/_shared/chunk-HKTU4ZUM.js", "/build/_shared/chunk-T6Y3H3UF.js", "/build/_shared/chunk-AQALRHD2.js", "/build/_shared/chunk-6BPP6UVZ.js", "/build/_shared/chunk-I2NNM6M4.js", "/build/_shared/chunk-SK66M2SR.js", "/build/_shared/chunk-5YL556B4.js", "/build/_shared/chunk-A74RWQXH.js", "/build/_shared/chunk-A4OEVQAE.js", "/build/_shared/chunk-NEG2HR7O.js", "/build/_shared/chunk-45INBBXV.js", "/build/_shared/chunk-BRW34J3E.js", "/build/_shared/chunk-FZQCMHRT.js", "/build/_shared/chunk-GFXBMFYM.js", "/build/_shared/chunk-QAS5QHFX.js", "/build/_shared/chunk-TMSI5BVB.js", "/build/_shared/chunk-2MNDMCBL.js", "/build/_shared/chunk-O42VBRFC.js", "/build/_shared/chunk-BMHMINR7.js", "/build/_shared/chunk-EYI2IED5.js", "/build/_shared/chunk-V4WTL6NE.js", "/build/_shared/chunk-CZ7UQK5X.js", "/build/_shared/chunk-AUPUFUCO.js", "/build/_shared/chunk-WWXYITKW.js", "/build/_shared/chunk-5ZIZGVXC.js", "/build/_shared/chunk-XVZ224HE.js", "/build/_shared/chunk-M6KYLTQI.js", "/build/_shared/chunk-BWE7T7WM.js", "/build/_shared/chunk-AQEGPAWP.js", "/build/_shared/chunk-OAHKXZFX.js", "/build/_shared/chunk-BLIHSU6X.js", "/build/_shared/chunk-7IZQ7VEV.js", "/build/_shared/chunk-YZ52JJEJ.js", "/build/_shared/chunk-CONOUY67.js", "/build/_shared/chunk-WTQA3CQJ.js", "/build/_shared/chunk-U3MWSGXZ.js", "/build/_shared/chunk-4TS7MSN7.js", "/build/_shared/chunk-5PMD5CCT.js", "/build/_shared/chunk-EYN43M35.js", "/build/_shared/chunk-XAMCBY6Y.js", "/build/_shared/chunk-42O3E5XR.js", "/build/_shared/chunk-PJNZR67K.js", "/build/_shared/chunk-OUXNWVFW.js", "/build/_shared/chunk-N4C5QBPL.js", "/build/_shared/chunk-77GOKQKP.js", "/build/_shared/chunk-EZ3AQHKT.js", "/build/_shared/chunk-5YOWIBYA.js", "/build/_shared/chunk-TDP53JQE.js", "/build/_shared/chunk-R3CR3QYI.js", "/build/_shared/chunk-APQWV4RP.js", "/build/_shared/chunk-APF3PRDC.js", "/build/_shared/chunk-T6NHVAU4.js", "/build/_shared/chunk-7PPAFNQT.js", "/build/_shared/chunk-72BUHTZQ.js", "/build/_shared/chunk-INYDBKTB.js", "/build/_shared/chunk-RASDNQJB.js", "/build/_shared/chunk-FL3QCISY.js", "/build/_shared/chunk-7GPK3LGE.js", "/build/_shared/chunk-O4MKV4U6.js", "/build/_shared/chunk-NWWLRIKQ.js", "/build/_shared/chunk-J7WQTN5K.js", "/build/_shared/chunk-KO3D3O4Z.js", "/build/_shared/chunk-RWAWMXNF.js", "/build/_shared/chunk-RJEYNJCE.js", "/build/_shared/chunk-E7PTAN6Z.js", "/build/_shared/chunk-Q6FKBRFF.js", "/build/_shared/chunk-4BM2YWGP.js", "/build/_shared/chunk-NLBXWLZH.js", "/build/_shared/chunk-5VFYNWAC.js", "/build/_shared/chunk-7RILZP6I.js", "/build/_shared/chunk-KWO5CJBO.js", "/build/_shared/chunk-VZFZM2PF.js", "/build/_shared/chunk-52KB324Y.js", "/build/_shared/chunk-KHPBSLRP.js", "/build/_shared/chunk-JLWWW3LT.js", "/build/_shared/chunk-BUPQJ54J.js", "/build/_shared/chunk-ABHB3NMN.js", "/build/_shared/chunk-DNDQCSC7.js", "/build/_shared/chunk-A75V6PAG.js", "/build/_shared/chunk-TZ5XYIWS.js", "/build/_shared/chunk-A5244RGV.js", "/build/_shared/chunk-LFLNISNY.js", "/build/_shared/chunk-OGQEN3KQ.js", "/build/_shared/chunk-NWDMKUP6.js", "/build/_shared/chunk-4DLKPD3P.js", "/build/_shared/chunk-B5PRIVAL.js", "/build/_shared/chunk-VFTONNHS.js", "/build/_shared/chunk-TK6AZ6CQ.js", "/build/_shared/chunk-4OGHKKJP.js", "/build/_shared/chunk-QGBD2ENQ.js", "/build/_shared/chunk-6UREC26K.js", "/build/_shared/chunk-AYJMM3S3.js", "/build/_shared/chunk-2P36AW5D.js", "/build/_shared/chunk-IZSCZ6XB.js", "/build/_shared/chunk-7QBELXZS.js", "/build/_shared/chunk-YY4SL3XD.js", "/build/_shared/chunk-DVATRYZM.js", "/build/_shared/chunk-GELALDQU.js", "/build/_shared/chunk-WFSXOAKH.js", "/build/_shared/chunk-27LOAFRN.js", "/build/_shared/chunk-MVPLT2V4.js", "/build/_shared/chunk-LFU7J3YZ.js", "/build/_shared/chunk-KKFIE2D7.js", "/build/_shared/chunk-LTK4RT6K.js", "/build/_shared/chunk-ENMZXGUO.js", "/build/_shared/chunk-CARMZYIG.js", "/build/_shared/chunk-TSY6AKUF.js", "/build/_shared/chunk-CNPBC6LJ.js", "/build/_shared/chunk-7RENVUTA.js", "/build/_shared/chunk-TGNKY7WQ.js", "/build/_shared/chunk-7VJS3CLE.js", "/build/_shared/chunk-QA7T2HJ2.js", "/build/_shared/chunk-J4VPHG5E.js", "/build/_shared/chunk-MGYYA3X3.js", "/build/_shared/chunk-U7F37DE4.js", "/build/_shared/chunk-A3W3BJEW.js", "/build/_shared/chunk-OWQEBYXZ.js", "/build/_shared/chunk-SPDGYVEZ.js", "/build/_shared/chunk-RTLKAK5Q.js", "/build/_shared/chunk-23TNGGNQ.js", "/build/_shared/chunk-W2PZZBVI.js", "/build/_shared/chunk-P4YXX546.js", "/build/_shared/chunk-IWFLW7YN.js", "/build/_shared/chunk-KQNI7XAQ.js", "/build/_shared/chunk-EHDBDGBF.js", "/build/_shared/chunk-OG66MHI4.js", "/build/_shared/chunk-DX7CQGI3.js", "/build/_shared/chunk-3BEPGWP7.js", "/build/_shared/chunk-RNUY7D3S.js", "/build/_shared/chunk-BXUIVAW3.js", "/build/_shared/chunk-7RY6QAGP.js", "/build/_shared/chunk-LPTTITQE.js", "/build/_shared/chunk-YHQLDL2P.js", "/build/_shared/chunk-Z2SDVUJ5.js", "/build/_shared/chunk-2O267PQE.js", "/build/_shared/chunk-MRTCNECV.js", "/build/_shared/chunk-RHD4UYUQ.js", "/build/_shared/chunk-B7W7TTGX.js", "/build/_shared/chunk-I4VFOYTC.js", "/build/_shared/chunk-3LA7JZV2.js", "/build/_shared/chunk-FDPXNRAA.js", "/build/_shared/chunk-BQMRWZI7.js", "/build/_shared/chunk-VHCGK5SL.js", "/build/_shared/chunk-G5ZDAQRT.js", "/build/_shared/chunk-WVQXH2Z2.js", "/build/_shared/chunk-BIM7OWVP.js", "/build/_shared/chunk-3B55LJUO.js", "/build/_shared/chunk-TYIZKZ6N.js", "/build/_shared/chunk-RRKVATMX.js", "/build/_shared/chunk-YCO3O7S3.js", "/build/_shared/chunk-VJ36RNE5.js", "/build/_shared/chunk-CBJ5J2MD.js", "/build/_shared/chunk-SIQWUVPY.js", "/build/_shared/chunk-3USXBV66.js", "/build/_shared/chunk-CGLAL7JB.js", "/build/_shared/chunk-TQ4NDH5E.js", "/build/_shared/chunk-WUXWRLCV.js", "/build/_shared/chunk-64T6RIJW.js", "/build/_shared/chunk-77P7CAWM.js", "/build/_shared/chunk-3PMUXNGD.js", "/build/_shared/chunk-NFHGHGND.js", "/build/_shared/chunk-WHH2PYIZ.js", "/build/_shared/chunk-7I7KBSDB.js", "/build/_shared/chunk-5J4VVWUB.js", "/build/_shared/chunk-APPNKTXR.js", "/build/_shared/chunk-BJOTOSXA.js", "/build/_shared/chunk-3NPNH5DL.js", "/build/_shared/chunk-5OAQLO4H.js", "/build/_shared/chunk-O2JFG7WG.js", "/build/_shared/chunk-LNCE7SEA.js", "/build/_shared/chunk-JNFTFJ6I.js", "/build/_shared/chunk-XWGYISL5.js", "/build/_shared/chunk-M7OBKGIP.js", "/build/_shared/chunk-Z5BUR46K.js", "/build/_shared/chunk-6EGY7FHK.js", "/build/_shared/chunk-SFP3CRDE.js", "/build/_shared/chunk-TV57BQHM.js", "/build/_shared/chunk-4MPUWUKQ.js", "/build/_shared/chunk-V3PQAQK4.js", "/build/_shared/chunk-2AUZ6ADR.js", "/build/_shared/chunk-2333ZWFM.js", "/build/_shared/chunk-7UORS3BW.js", "/build/_shared/chunk-RBCAXK2P.js", "/build/_shared/chunk-EZZPIFYJ.js", "/build/_shared/chunk-5PLTTTNZ.js", "/build/_shared/chunk-SPA2ZEHM.js", "/build/_shared/chunk-J62KIN3F.js", "/build/_shared/chunk-7HEEIPZQ.js", "/build/_shared/chunk-4J6ZPUHQ.js", "/build/_shared/chunk-7X6JZFGK.js", "/build/_shared/chunk-UURSWLAX.js", "/build/_shared/chunk-3WDG5RUN.js", "/build/_shared/chunk-2I3VJKEZ.js", "/build/_shared/chunk-JK7SUEIS.js", "/build/_shared/chunk-4RLZ6SN4.js", "/build/_shared/chunk-H2QANQ3O.js", "/build/_shared/chunk-DMZCSMEQ.js", "/build/_shared/chunk-G7CHZRZX.js", "/build/_shared/chunk-Y3Q3TNJF.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/ai.chat_.$id": { id: "routes/ai.chat_.$id", parentId: "routes/ai", path: "chat/:id", index: void 0, caseSensitive: void 0, module: "/build/routes/ai.chat_.$id-ODYQLHYS.js", imports: ["/build/_shared/chunk-7M4ZRIY7.js", "/build/_shared/chunk-64CKQRZN.js", "/build/_shared/chunk-CX4P4NVK.js", "/build/_shared/chunk-7RAWVCLE.js", "/build/_shared/chunk-HADVB6BA.js", "/build/_shared/chunk-CGX3ZKZD.js", "/build/_shared/chunk-WFN5INC3.js", "/build/_shared/chunk-4ZUNKDEO.js", "/build/_shared/chunk-6PCNL4TM.js", "/build/_shared/chunk-ZAUB526Z.js", "/build/_shared/chunk-OOXN5LKO.js", "/build/_shared/chunk-U2SXPY6P.js", "/build/_shared/chunk-3IUYZRBA.js", "/build/_shared/chunk-RUSWU2QV.js", "/build/_shared/chunk-YG54RHS6.js", "/build/_shared/chunk-ASGHICNA.js", "/build/_shared/chunk-UI5MQUAV.js", "/build/_shared/chunk-UAXXVOWY.js", "/build/_shared/chunk-CTSAOQCE.js", "/build/_shared/chunk-HDZP2HUU.js", "/build/_shared/chunk-IFGXONU6.js", "/build/_shared/chunk-S5VRGJYW.js", "/build/_shared/chunk-J3KV3YQE.js", "/build/_shared/chunk-F7MX47RF.js", "/build/_shared/chunk-45YGLRMD.js", "/build/_shared/chunk-XJEJ7DAA.js", "/build/_shared/chunk-2AVIPOP7.js", "/build/_shared/chunk-7GDDGZGV.js", "/build/_shared/chunk-T5MN4NPH.js", "/build/_shared/chunk-7VGWUORS.js", "/build/_shared/chunk-BFGYYBKX.js", "/build/_shared/chunk-CRSD5573.js", "/build/_shared/chunk-CVRNAVSH.js", "/build/_shared/chunk-7MXRD6T4.js", "/build/_shared/chunk-HXBQKVQH.js", "/build/_shared/chunk-WUWAIDDY.js", "/build/_shared/chunk-4ECGHE6U.js", "/build/_shared/chunk-4ZNBTOPG.js", "/build/_shared/chunk-WFXZFCEH.js", "/build/_shared/chunk-2H3H2PLK.js", "/build/_shared/chunk-ZJ43M7ZI.js", "/build/_shared/chunk-UGLR5XS7.js", "/build/_shared/chunk-RRRCXVJ7.js", "/build/_shared/chunk-M36NJSVY.js", "/build/_shared/chunk-PAR5W2M4.js", "/build/_shared/chunk-IPQXJRNB.js", "/build/_shared/chunk-PLAE6JZW.js", "/build/_shared/chunk-TIOODPBB.js", "/build/_shared/chunk-33CZCMA2.js", "/build/_shared/chunk-KLZRXQQP.js", "/build/_shared/chunk-J64XZBRF.js", "/build/_shared/chunk-BMKLJ32X.js", "/build/_shared/chunk-6GWVEUC2.js", "/build/_shared/chunk-MIP4W6XY.js", "/build/_shared/chunk-BY753UDA.js", "/build/_shared/chunk-3XSYU645.js", "/build/_shared/chunk-YKOEDHP2.js", "/build/_shared/chunk-IEIJTQ7D.js", "/build/_shared/chunk-ZAZMA25W.js", "/build/_shared/chunk-6HNMMJFT.js", "/build/_shared/chunk-5K26VJ7P.js", "/build/_shared/chunk-PQXZPWYO.js", "/build/_shared/chunk-AFGULTJA.js", "/build/_shared/chunk-MJNKH2NQ.js", "/build/_shared/chunk-26DCOSP4.js", "/build/_shared/chunk-WFEHRARV.js", "/build/_shared/chunk-RI7YKWQH.js", "/build/_shared/chunk-CPPTORAI.js", "/build/_shared/chunk-K7GZ3H3S.js", "/build/_shared/chunk-B5PB3U27.js", "/build/_shared/chunk-DKO5OKUH.js", "/build/_shared/chunk-WMZWHHHD.js", "/build/_shared/chunk-NMFCGLSY.js", "/build/_shared/chunk-PHVVVDMI.js", "/build/_shared/chunk-72MG477C.js", "/build/_shared/chunk-NWAX33R7.js", "/build/_shared/chunk-KE5WRCEB.js", "/build/_shared/chunk-GVDPKYPW.js", "/build/_shared/chunk-SZ3NQD55.js", "/build/_shared/chunk-U3TG3A6E.js", "/build/_shared/chunk-IOU425TF.js", "/build/_shared/chunk-WAIYGYMH.js", "/build/_shared/chunk-IPGTFSFW.js", "/build/_shared/chunk-YNTYYAHI.js", "/build/_shared/chunk-OTDH4SXV.js", "/build/_shared/chunk-HKTU4ZUM.js", "/build/_shared/chunk-T6Y3H3UF.js", "/build/_shared/chunk-AQALRHD2.js", "/build/_shared/chunk-6BPP6UVZ.js", "/build/_shared/chunk-I2NNM6M4.js", "/build/_shared/chunk-SK66M2SR.js", "/build/_shared/chunk-5YL556B4.js", "/build/_shared/chunk-A74RWQXH.js", "/build/_shared/chunk-A4OEVQAE.js", "/build/_shared/chunk-NEG2HR7O.js", "/build/_shared/chunk-45INBBXV.js", "/build/_shared/chunk-BRW34J3E.js", "/build/_shared/chunk-FZQCMHRT.js", "/build/_shared/chunk-GFXBMFYM.js", "/build/_shared/chunk-QAS5QHFX.js", "/build/_shared/chunk-TMSI5BVB.js", "/build/_shared/chunk-2MNDMCBL.js", "/build/_shared/chunk-O42VBRFC.js", "/build/_shared/chunk-BMHMINR7.js", "/build/_shared/chunk-EYI2IED5.js", "/build/_shared/chunk-V4WTL6NE.js", "/build/_shared/chunk-CZ7UQK5X.js", "/build/_shared/chunk-AUPUFUCO.js", "/build/_shared/chunk-WWXYITKW.js", "/build/_shared/chunk-5ZIZGVXC.js", "/build/_shared/chunk-XVZ224HE.js", "/build/_shared/chunk-M6KYLTQI.js", "/build/_shared/chunk-BWE7T7WM.js", "/build/_shared/chunk-AQEGPAWP.js", "/build/_shared/chunk-OAHKXZFX.js", "/build/_shared/chunk-BLIHSU6X.js", "/build/_shared/chunk-7IZQ7VEV.js", "/build/_shared/chunk-YZ52JJEJ.js", "/build/_shared/chunk-CONOUY67.js", "/build/_shared/chunk-WTQA3CQJ.js", "/build/_shared/chunk-U3MWSGXZ.js", "/build/_shared/chunk-4TS7MSN7.js", "/build/_shared/chunk-5PMD5CCT.js", "/build/_shared/chunk-EYN43M35.js", "/build/_shared/chunk-XAMCBY6Y.js", "/build/_shared/chunk-42O3E5XR.js", "/build/_shared/chunk-PJNZR67K.js", "/build/_shared/chunk-OUXNWVFW.js", "/build/_shared/chunk-N4C5QBPL.js", "/build/_shared/chunk-77GOKQKP.js", "/build/_shared/chunk-EZ3AQHKT.js", "/build/_shared/chunk-5YOWIBYA.js", "/build/_shared/chunk-TDP53JQE.js", "/build/_shared/chunk-R3CR3QYI.js", "/build/_shared/chunk-APQWV4RP.js", "/build/_shared/chunk-APF3PRDC.js", "/build/_shared/chunk-T6NHVAU4.js", "/build/_shared/chunk-7PPAFNQT.js", "/build/_shared/chunk-72BUHTZQ.js", "/build/_shared/chunk-INYDBKTB.js", "/build/_shared/chunk-RASDNQJB.js", "/build/_shared/chunk-FL3QCISY.js", "/build/_shared/chunk-7GPK3LGE.js", "/build/_shared/chunk-O4MKV4U6.js", "/build/_shared/chunk-NWWLRIKQ.js", "/build/_shared/chunk-J7WQTN5K.js", "/build/_shared/chunk-KO3D3O4Z.js", "/build/_shared/chunk-RWAWMXNF.js", "/build/_shared/chunk-RJEYNJCE.js", "/build/_shared/chunk-E7PTAN6Z.js", "/build/_shared/chunk-Q6FKBRFF.js", "/build/_shared/chunk-4BM2YWGP.js", "/build/_shared/chunk-NLBXWLZH.js", "/build/_shared/chunk-5VFYNWAC.js", "/build/_shared/chunk-7RILZP6I.js", "/build/_shared/chunk-KWO5CJBO.js", "/build/_shared/chunk-VZFZM2PF.js", "/build/_shared/chunk-52KB324Y.js", "/build/_shared/chunk-KHPBSLRP.js", "/build/_shared/chunk-JLWWW3LT.js", "/build/_shared/chunk-BUPQJ54J.js", "/build/_shared/chunk-ABHB3NMN.js", "/build/_shared/chunk-DNDQCSC7.js", "/build/_shared/chunk-A75V6PAG.js", "/build/_shared/chunk-TZ5XYIWS.js", "/build/_shared/chunk-A5244RGV.js", "/build/_shared/chunk-LFLNISNY.js", "/build/_shared/chunk-OGQEN3KQ.js", "/build/_shared/chunk-NWDMKUP6.js", "/build/_shared/chunk-4DLKPD3P.js", "/build/_shared/chunk-B5PRIVAL.js", "/build/_shared/chunk-VFTONNHS.js", "/build/_shared/chunk-TK6AZ6CQ.js", "/build/_shared/chunk-4OGHKKJP.js", "/build/_shared/chunk-QGBD2ENQ.js", "/build/_shared/chunk-6UREC26K.js", "/build/_shared/chunk-AYJMM3S3.js", "/build/_shared/chunk-2P36AW5D.js", "/build/_shared/chunk-IZSCZ6XB.js", "/build/_shared/chunk-7QBELXZS.js", "/build/_shared/chunk-YY4SL3XD.js", "/build/_shared/chunk-DVATRYZM.js", "/build/_shared/chunk-GELALDQU.js", "/build/_shared/chunk-WFSXOAKH.js", "/build/_shared/chunk-27LOAFRN.js", "/build/_shared/chunk-MVPLT2V4.js", "/build/_shared/chunk-LFU7J3YZ.js", "/build/_shared/chunk-KKFIE2D7.js", "/build/_shared/chunk-LTK4RT6K.js", "/build/_shared/chunk-ENMZXGUO.js", "/build/_shared/chunk-CARMZYIG.js", "/build/_shared/chunk-TSY6AKUF.js", "/build/_shared/chunk-CNPBC6LJ.js", "/build/_shared/chunk-7RENVUTA.js", "/build/_shared/chunk-TGNKY7WQ.js", "/build/_shared/chunk-7VJS3CLE.js", "/build/_shared/chunk-QA7T2HJ2.js", "/build/_shared/chunk-J4VPHG5E.js", "/build/_shared/chunk-MGYYA3X3.js", "/build/_shared/chunk-U7F37DE4.js", "/build/_shared/chunk-A3W3BJEW.js", "/build/_shared/chunk-OWQEBYXZ.js", "/build/_shared/chunk-SPDGYVEZ.js", "/build/_shared/chunk-RTLKAK5Q.js", "/build/_shared/chunk-23TNGGNQ.js", "/build/_shared/chunk-W2PZZBVI.js", "/build/_shared/chunk-P4YXX546.js", "/build/_shared/chunk-IWFLW7YN.js", "/build/_shared/chunk-KQNI7XAQ.js", "/build/_shared/chunk-EHDBDGBF.js", "/build/_shared/chunk-OG66MHI4.js", "/build/_shared/chunk-DX7CQGI3.js", "/build/_shared/chunk-3BEPGWP7.js", "/build/_shared/chunk-RNUY7D3S.js", "/build/_shared/chunk-BXUIVAW3.js", "/build/_shared/chunk-7RY6QAGP.js", "/build/_shared/chunk-LPTTITQE.js", "/build/_shared/chunk-YHQLDL2P.js", "/build/_shared/chunk-Z2SDVUJ5.js", "/build/_shared/chunk-2O267PQE.js", "/build/_shared/chunk-MRTCNECV.js", "/build/_shared/chunk-RHD4UYUQ.js", "/build/_shared/chunk-B7W7TTGX.js", "/build/_shared/chunk-I4VFOYTC.js", "/build/_shared/chunk-3LA7JZV2.js", "/build/_shared/chunk-FDPXNRAA.js", "/build/_shared/chunk-BQMRWZI7.js", "/build/_shared/chunk-VHCGK5SL.js", "/build/_shared/chunk-G5ZDAQRT.js", "/build/_shared/chunk-WVQXH2Z2.js", "/build/_shared/chunk-BIM7OWVP.js", "/build/_shared/chunk-3B55LJUO.js", "/build/_shared/chunk-TYIZKZ6N.js", "/build/_shared/chunk-RRKVATMX.js", "/build/_shared/chunk-YCO3O7S3.js", "/build/_shared/chunk-VJ36RNE5.js", "/build/_shared/chunk-CBJ5J2MD.js", "/build/_shared/chunk-SIQWUVPY.js", "/build/_shared/chunk-3USXBV66.js", "/build/_shared/chunk-CGLAL7JB.js", "/build/_shared/chunk-TQ4NDH5E.js", "/build/_shared/chunk-WUXWRLCV.js", "/build/_shared/chunk-64T6RIJW.js", "/build/_shared/chunk-77P7CAWM.js", "/build/_shared/chunk-3PMUXNGD.js", "/build/_shared/chunk-NFHGHGND.js", "/build/_shared/chunk-WHH2PYIZ.js", "/build/_shared/chunk-7I7KBSDB.js", "/build/_shared/chunk-5J4VVWUB.js", "/build/_shared/chunk-APPNKTXR.js", "/build/_shared/chunk-BJOTOSXA.js", "/build/_shared/chunk-3NPNH5DL.js", "/build/_shared/chunk-5OAQLO4H.js", "/build/_shared/chunk-O2JFG7WG.js", "/build/_shared/chunk-LNCE7SEA.js", "/build/_shared/chunk-JNFTFJ6I.js", "/build/_shared/chunk-XWGYISL5.js", "/build/_shared/chunk-M7OBKGIP.js", "/build/_shared/chunk-Z5BUR46K.js", "/build/_shared/chunk-6EGY7FHK.js", "/build/_shared/chunk-SFP3CRDE.js", "/build/_shared/chunk-TV57BQHM.js", "/build/_shared/chunk-4MPUWUKQ.js", "/build/_shared/chunk-V3PQAQK4.js", "/build/_shared/chunk-2AUZ6ADR.js", "/build/_shared/chunk-2333ZWFM.js", "/build/_shared/chunk-7UORS3BW.js", "/build/_shared/chunk-RBCAXK2P.js", "/build/_shared/chunk-EZZPIFYJ.js", "/build/_shared/chunk-5PLTTTNZ.js", "/build/_shared/chunk-SPA2ZEHM.js", "/build/_shared/chunk-J62KIN3F.js", "/build/_shared/chunk-7HEEIPZQ.js", "/build/_shared/chunk-4J6ZPUHQ.js", "/build/_shared/chunk-7X6JZFGK.js", "/build/_shared/chunk-UURSWLAX.js", "/build/_shared/chunk-3WDG5RUN.js", "/build/_shared/chunk-2I3VJKEZ.js", "/build/_shared/chunk-JK7SUEIS.js", "/build/_shared/chunk-4RLZ6SN4.js", "/build/_shared/chunk-H2QANQ3O.js", "/build/_shared/chunk-DMZCSMEQ.js", "/build/_shared/chunk-G7CHZRZX.js", "/build/_shared/chunk-Y3Q3TNJF.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/ai.explore": { id: "routes/ai.explore", parentId: "routes/ai", path: "explore", index: void 0, caseSensitive: void 0, module: "/build/routes/ai.explore-QMP45KNA.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/ai.share_.$id": { id: "routes/ai.share_.$id", parentId: "routes/ai", path: "share/:id", index: void 0, caseSensitive: void 0, module: "/build/routes/ai.share_.$id-O32KDCW7.js", imports: ["/build/_shared/chunk-64CKQRZN.js", "/build/_shared/chunk-CX4P4NVK.js", "/build/_shared/chunk-7RAWVCLE.js", "/build/_shared/chunk-HADVB6BA.js", "/build/_shared/chunk-CGX3ZKZD.js", "/build/_shared/chunk-WFN5INC3.js", "/build/_shared/chunk-4ZUNKDEO.js", "/build/_shared/chunk-6PCNL4TM.js", "/build/_shared/chunk-ZAUB526Z.js", "/build/_shared/chunk-OOXN5LKO.js", "/build/_shared/chunk-U2SXPY6P.js", "/build/_shared/chunk-3IUYZRBA.js", "/build/_shared/chunk-RUSWU2QV.js", "/build/_shared/chunk-YG54RHS6.js", "/build/_shared/chunk-ASGHICNA.js", "/build/_shared/chunk-UI5MQUAV.js", "/build/_shared/chunk-UAXXVOWY.js", "/build/_shared/chunk-CTSAOQCE.js", "/build/_shared/chunk-HDZP2HUU.js", "/build/_shared/chunk-IFGXONU6.js", "/build/_shared/chunk-S5VRGJYW.js", "/build/_shared/chunk-J3KV3YQE.js", "/build/_shared/chunk-F7MX47RF.js", "/build/_shared/chunk-45YGLRMD.js", "/build/_shared/chunk-XJEJ7DAA.js", "/build/_shared/chunk-2AVIPOP7.js", "/build/_shared/chunk-7GDDGZGV.js", "/build/_shared/chunk-T5MN4NPH.js", "/build/_shared/chunk-7VGWUORS.js", "/build/_shared/chunk-BFGYYBKX.js", "/build/_shared/chunk-CRSD5573.js", "/build/_shared/chunk-CVRNAVSH.js", "/build/_shared/chunk-7MXRD6T4.js", "/build/_shared/chunk-HXBQKVQH.js", "/build/_shared/chunk-WUWAIDDY.js", "/build/_shared/chunk-4ECGHE6U.js", "/build/_shared/chunk-4ZNBTOPG.js", "/build/_shared/chunk-WFXZFCEH.js", "/build/_shared/chunk-2H3H2PLK.js", "/build/_shared/chunk-ZJ43M7ZI.js", "/build/_shared/chunk-UGLR5XS7.js", "/build/_shared/chunk-RRRCXVJ7.js", "/build/_shared/chunk-M36NJSVY.js", "/build/_shared/chunk-PAR5W2M4.js", "/build/_shared/chunk-IPQXJRNB.js", "/build/_shared/chunk-PLAE6JZW.js", "/build/_shared/chunk-TIOODPBB.js", "/build/_shared/chunk-33CZCMA2.js", "/build/_shared/chunk-KLZRXQQP.js", "/build/_shared/chunk-J64XZBRF.js", "/build/_shared/chunk-BMKLJ32X.js", "/build/_shared/chunk-6GWVEUC2.js", "/build/_shared/chunk-MIP4W6XY.js", "/build/_shared/chunk-BY753UDA.js", "/build/_shared/chunk-3XSYU645.js", "/build/_shared/chunk-YKOEDHP2.js", "/build/_shared/chunk-IEIJTQ7D.js", "/build/_shared/chunk-ZAZMA25W.js", "/build/_shared/chunk-6HNMMJFT.js", "/build/_shared/chunk-5K26VJ7P.js", "/build/_shared/chunk-PQXZPWYO.js", "/build/_shared/chunk-AFGULTJA.js", "/build/_shared/chunk-MJNKH2NQ.js", "/build/_shared/chunk-26DCOSP4.js", "/build/_shared/chunk-WFEHRARV.js", "/build/_shared/chunk-RI7YKWQH.js", "/build/_shared/chunk-CPPTORAI.js", "/build/_shared/chunk-K7GZ3H3S.js", "/build/_shared/chunk-B5PB3U27.js", "/build/_shared/chunk-DKO5OKUH.js", "/build/_shared/chunk-WMZWHHHD.js", "/build/_shared/chunk-NMFCGLSY.js", "/build/_shared/chunk-PHVVVDMI.js", "/build/_shared/chunk-72MG477C.js", "/build/_shared/chunk-NWAX33R7.js", "/build/_shared/chunk-KE5WRCEB.js", "/build/_shared/chunk-GVDPKYPW.js", "/build/_shared/chunk-SZ3NQD55.js", "/build/_shared/chunk-U3TG3A6E.js", "/build/_shared/chunk-IOU425TF.js", "/build/_shared/chunk-WAIYGYMH.js", "/build/_shared/chunk-IPGTFSFW.js", "/build/_shared/chunk-YNTYYAHI.js", "/build/_shared/chunk-OTDH4SXV.js", "/build/_shared/chunk-HKTU4ZUM.js", "/build/_shared/chunk-T6Y3H3UF.js", "/build/_shared/chunk-AQALRHD2.js", "/build/_shared/chunk-6BPP6UVZ.js", "/build/_shared/chunk-I2NNM6M4.js", "/build/_shared/chunk-SK66M2SR.js", "/build/_shared/chunk-5YL556B4.js", "/build/_shared/chunk-A74RWQXH.js", "/build/_shared/chunk-A4OEVQAE.js", "/build/_shared/chunk-NEG2HR7O.js", "/build/_shared/chunk-45INBBXV.js", "/build/_shared/chunk-BRW34J3E.js", "/build/_shared/chunk-FZQCMHRT.js", "/build/_shared/chunk-GFXBMFYM.js", "/build/_shared/chunk-QAS5QHFX.js", "/build/_shared/chunk-TMSI5BVB.js", "/build/_shared/chunk-2MNDMCBL.js", "/build/_shared/chunk-O42VBRFC.js", "/build/_shared/chunk-BMHMINR7.js", "/build/_shared/chunk-EYI2IED5.js", "/build/_shared/chunk-V4WTL6NE.js", "/build/_shared/chunk-CZ7UQK5X.js", "/build/_shared/chunk-AUPUFUCO.js", "/build/_shared/chunk-WWXYITKW.js", "/build/_shared/chunk-5ZIZGVXC.js", "/build/_shared/chunk-XVZ224HE.js", "/build/_shared/chunk-M6KYLTQI.js", "/build/_shared/chunk-BWE7T7WM.js", "/build/_shared/chunk-AQEGPAWP.js", "/build/_shared/chunk-OAHKXZFX.js", "/build/_shared/chunk-BLIHSU6X.js", "/build/_shared/chunk-7IZQ7VEV.js", "/build/_shared/chunk-YZ52JJEJ.js", "/build/_shared/chunk-CONOUY67.js", "/build/_shared/chunk-WTQA3CQJ.js", "/build/_shared/chunk-U3MWSGXZ.js", "/build/_shared/chunk-4TS7MSN7.js", "/build/_shared/chunk-5PMD5CCT.js", "/build/_shared/chunk-EYN43M35.js", "/build/_shared/chunk-XAMCBY6Y.js", "/build/_shared/chunk-42O3E5XR.js", "/build/_shared/chunk-PJNZR67K.js", "/build/_shared/chunk-OUXNWVFW.js", "/build/_shared/chunk-N4C5QBPL.js", "/build/_shared/chunk-77GOKQKP.js", "/build/_shared/chunk-EZ3AQHKT.js", "/build/_shared/chunk-5YOWIBYA.js", "/build/_shared/chunk-TDP53JQE.js", "/build/_shared/chunk-R3CR3QYI.js", "/build/_shared/chunk-APQWV4RP.js", "/build/_shared/chunk-APF3PRDC.js", "/build/_shared/chunk-T6NHVAU4.js", "/build/_shared/chunk-7PPAFNQT.js", "/build/_shared/chunk-72BUHTZQ.js", "/build/_shared/chunk-INYDBKTB.js", "/build/_shared/chunk-RASDNQJB.js", "/build/_shared/chunk-FL3QCISY.js", "/build/_shared/chunk-7GPK3LGE.js", "/build/_shared/chunk-O4MKV4U6.js", "/build/_shared/chunk-NWWLRIKQ.js", "/build/_shared/chunk-J7WQTN5K.js", "/build/_shared/chunk-KO3D3O4Z.js", "/build/_shared/chunk-RWAWMXNF.js", "/build/_shared/chunk-RJEYNJCE.js", "/build/_shared/chunk-E7PTAN6Z.js", "/build/_shared/chunk-Q6FKBRFF.js", "/build/_shared/chunk-4BM2YWGP.js", "/build/_shared/chunk-NLBXWLZH.js", "/build/_shared/chunk-5VFYNWAC.js", "/build/_shared/chunk-7RILZP6I.js", "/build/_shared/chunk-KWO5CJBO.js", "/build/_shared/chunk-VZFZM2PF.js", "/build/_shared/chunk-52KB324Y.js", "/build/_shared/chunk-KHPBSLRP.js", "/build/_shared/chunk-JLWWW3LT.js", "/build/_shared/chunk-BUPQJ54J.js", "/build/_shared/chunk-ABHB3NMN.js", "/build/_shared/chunk-DNDQCSC7.js", "/build/_shared/chunk-A75V6PAG.js", "/build/_shared/chunk-TZ5XYIWS.js", "/build/_shared/chunk-A5244RGV.js", "/build/_shared/chunk-LFLNISNY.js", "/build/_shared/chunk-OGQEN3KQ.js", "/build/_shared/chunk-NWDMKUP6.js", "/build/_shared/chunk-4DLKPD3P.js", "/build/_shared/chunk-B5PRIVAL.js", "/build/_shared/chunk-VFTONNHS.js", "/build/_shared/chunk-TK6AZ6CQ.js", "/build/_shared/chunk-4OGHKKJP.js", "/build/_shared/chunk-QGBD2ENQ.js", "/build/_shared/chunk-6UREC26K.js", "/build/_shared/chunk-AYJMM3S3.js", "/build/_shared/chunk-2P36AW5D.js", "/build/_shared/chunk-IZSCZ6XB.js", "/build/_shared/chunk-7QBELXZS.js", "/build/_shared/chunk-YY4SL3XD.js", "/build/_shared/chunk-DVATRYZM.js", "/build/_shared/chunk-GELALDQU.js", "/build/_shared/chunk-WFSXOAKH.js", "/build/_shared/chunk-27LOAFRN.js", "/build/_shared/chunk-MVPLT2V4.js", "/build/_shared/chunk-LFU7J3YZ.js", "/build/_shared/chunk-KKFIE2D7.js", "/build/_shared/chunk-LTK4RT6K.js", "/build/_shared/chunk-ENMZXGUO.js", "/build/_shared/chunk-CARMZYIG.js", "/build/_shared/chunk-TSY6AKUF.js", "/build/_shared/chunk-CNPBC6LJ.js", "/build/_shared/chunk-7RENVUTA.js", "/build/_shared/chunk-TGNKY7WQ.js", "/build/_shared/chunk-7VJS3CLE.js", "/build/_shared/chunk-QA7T2HJ2.js", "/build/_shared/chunk-J4VPHG5E.js", "/build/_shared/chunk-MGYYA3X3.js", "/build/_shared/chunk-U7F37DE4.js", "/build/_shared/chunk-A3W3BJEW.js", "/build/_shared/chunk-OWQEBYXZ.js", "/build/_shared/chunk-SPDGYVEZ.js", "/build/_shared/chunk-RTLKAK5Q.js", "/build/_shared/chunk-23TNGGNQ.js", "/build/_shared/chunk-W2PZZBVI.js", "/build/_shared/chunk-P4YXX546.js", "/build/_shared/chunk-IWFLW7YN.js", "/build/_shared/chunk-KQNI7XAQ.js", "/build/_shared/chunk-EHDBDGBF.js", "/build/_shared/chunk-OG66MHI4.js", "/build/_shared/chunk-DX7CQGI3.js", "/build/_shared/chunk-3BEPGWP7.js", "/build/_shared/chunk-RNUY7D3S.js", "/build/_shared/chunk-BXUIVAW3.js", "/build/_shared/chunk-7RY6QAGP.js", "/build/_shared/chunk-LPTTITQE.js", "/build/_shared/chunk-YHQLDL2P.js", "/build/_shared/chunk-Z2SDVUJ5.js", "/build/_shared/chunk-2O267PQE.js", "/build/_shared/chunk-MRTCNECV.js", "/build/_shared/chunk-RHD4UYUQ.js", "/build/_shared/chunk-B7W7TTGX.js", "/build/_shared/chunk-I4VFOYTC.js", "/build/_shared/chunk-3LA7JZV2.js", "/build/_shared/chunk-FDPXNRAA.js", "/build/_shared/chunk-BQMRWZI7.js", "/build/_shared/chunk-VHCGK5SL.js", "/build/_shared/chunk-G5ZDAQRT.js", "/build/_shared/chunk-WVQXH2Z2.js", "/build/_shared/chunk-BIM7OWVP.js", "/build/_shared/chunk-3B55LJUO.js", "/build/_shared/chunk-TYIZKZ6N.js", "/build/_shared/chunk-RRKVATMX.js", "/build/_shared/chunk-YCO3O7S3.js", "/build/_shared/chunk-VJ36RNE5.js", "/build/_shared/chunk-CBJ5J2MD.js", "/build/_shared/chunk-SIQWUVPY.js", "/build/_shared/chunk-3USXBV66.js", "/build/_shared/chunk-CGLAL7JB.js", "/build/_shared/chunk-TQ4NDH5E.js", "/build/_shared/chunk-WUXWRLCV.js", "/build/_shared/chunk-64T6RIJW.js", "/build/_shared/chunk-77P7CAWM.js", "/build/_shared/chunk-3PMUXNGD.js", "/build/_shared/chunk-NFHGHGND.js", "/build/_shared/chunk-WHH2PYIZ.js", "/build/_shared/chunk-7I7KBSDB.js", "/build/_shared/chunk-5J4VVWUB.js", "/build/_shared/chunk-APPNKTXR.js", "/build/_shared/chunk-BJOTOSXA.js", "/build/_shared/chunk-3NPNH5DL.js", "/build/_shared/chunk-5OAQLO4H.js", "/build/_shared/chunk-O2JFG7WG.js", "/build/_shared/chunk-LNCE7SEA.js", "/build/_shared/chunk-JNFTFJ6I.js", "/build/_shared/chunk-XWGYISL5.js", "/build/_shared/chunk-M7OBKGIP.js", "/build/_shared/chunk-Z5BUR46K.js", "/build/_shared/chunk-6EGY7FHK.js", "/build/_shared/chunk-SFP3CRDE.js", "/build/_shared/chunk-TV57BQHM.js", "/build/_shared/chunk-4MPUWUKQ.js", "/build/_shared/chunk-V3PQAQK4.js", "/build/_shared/chunk-2AUZ6ADR.js", "/build/_shared/chunk-2333ZWFM.js", "/build/_shared/chunk-7UORS3BW.js", "/build/_shared/chunk-RBCAXK2P.js", "/build/_shared/chunk-EZZPIFYJ.js", "/build/_shared/chunk-5PLTTTNZ.js", "/build/_shared/chunk-SPA2ZEHM.js", "/build/_shared/chunk-J62KIN3F.js", "/build/_shared/chunk-7HEEIPZQ.js", "/build/_shared/chunk-4J6ZPUHQ.js", "/build/_shared/chunk-7X6JZFGK.js", "/build/_shared/chunk-UURSWLAX.js", "/build/_shared/chunk-3WDG5RUN.js", "/build/_shared/chunk-2I3VJKEZ.js", "/build/_shared/chunk-JK7SUEIS.js", "/build/_shared/chunk-4RLZ6SN4.js", "/build/_shared/chunk-H2QANQ3O.js", "/build/_shared/chunk-G7CHZRZX.js", "/build/_shared/chunk-Y3Q3TNJF.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/api_.chat": { id: "routes/api_.chat", parentId: "root", path: "api/chat", index: void 0, caseSensitive: void 0, module: "/build/routes/api_.chat-MYXHRECO.js", imports: void 0, hasAction: !0, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/auth": { id: "routes/auth", parentId: "root", path: "auth", index: void 0, caseSensitive: void 0, module: "/build/routes/auth-H36FPGI3.js", imports: ["/build/_shared/chunk-S67NAB4E.js", "/build/_shared/chunk-JI2KNYM7.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/blue": { id: "routes/blue", parentId: "root", path: "blue", index: void 0, caseSensitive: void 0, module: "/build/routes/blue-QJHALMZS.js", imports: ["/build/_shared/chunk-D4F36K4M.js", "/build/_shared/chunk-AR7BF74J.js", "/build/_shared/chunk-JI2KNYM7.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/healthcheck": { id: "routes/healthcheck", parentId: "root", path: "healthcheck", index: void 0, caseSensitive: void 0, module: "/build/routes/healthcheck-UKIBAX2W.js", imports: void 0, hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/home": { id: "routes/home", parentId: "root", path: "home", index: void 0, caseSensitive: void 0, module: "/build/routes/home-OW463NCP.js", imports: ["/build/_shared/chunk-MAZOGT2T.js", "/build/_shared/chunk-D4F36K4M.js", "/build/_shared/chunk-KHD6IAOM.js", "/build/_shared/chunk-4GO7GDJN.js", "/build/_shared/chunk-AR7BF74J.js", "/build/_shared/chunk-7UAIT4ON.js", "/build/_shared/chunk-S67NAB4E.js", "/build/_shared/chunk-JI2KNYM7.js", "/build/_shared/chunk-47OZGKAC.js", "/build/_shared/chunk-UWXV354P.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/home._index": { id: "routes/home._index", parentId: "routes/home", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/home._index-S745HULF.js", imports: ["/build/_shared/chunk-PJVXSB7S.js", "/build/_shared/chunk-MESSCHDG.js", "/build/_shared/chunk-Y3Q3TNJF.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/home.distribution": { id: "routes/home.distribution", parentId: "routes/home", path: "distribution", index: void 0, caseSensitive: void 0, module: "/build/routes/home.distribution-JMEPZQIY.js", imports: ["/build/_shared/chunk-MESSCHDG.js", "/build/_shared/chunk-Y3Q3TNJF.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/home.generative": { id: "routes/home.generative", parentId: "routes/home", path: "generative", index: void 0, caseSensitive: void 0, module: "/build/routes/home.generative-7DA77RVW.js", imports: ["/build/_shared/chunk-MESSCHDG.js", "/build/_shared/chunk-Y3Q3TNJF.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/home.inventory": { id: "routes/home.inventory", parentId: "routes/home", path: "inventory", index: void 0, caseSensitive: void 0, module: "/build/routes/home.inventory-OA2M4U4O.js", imports: ["/build/_shared/chunk-MESSCHDG.js", "/build/_shared/chunk-Y3Q3TNJF.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/home.invopt": { id: "routes/home.invopt", parentId: "routes/home", path: "invopt", index: void 0, caseSensitive: void 0, module: "/build/routes/home.invopt-EQFHQPLH.js", imports: ["/build/_shared/chunk-MESSCHDG.js", "/build/_shared/chunk-Y3Q3TNJF.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/home.kpi": { id: "routes/home.kpi", parentId: "routes/home", path: "kpi", index: void 0, caseSensitive: void 0, module: "/build/routes/home.kpi-223YWEIT.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/home.production": { id: "routes/home.production", parentId: "routes/home", path: "production", index: void 0, caseSensitive: void 0, module: "/build/routes/home.production-5BL4WWSU.js", imports: ["/build/_shared/chunk-MESSCHDG.js", "/build/_shared/chunk-Y3Q3TNJF.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/home.sales": { id: "routes/home.sales", parentId: "routes/home", path: "sales", index: void 0, caseSensitive: void 0, module: "/build/routes/home.sales-LT3TDDFF.js", imports: ["/build/_shared/chunk-MESSCHDG.js", "/build/_shared/chunk-Y3Q3TNJF.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/home.transport": { id: "routes/home.transport", parentId: "routes/home", path: "transport", index: void 0, caseSensitive: void 0, module: "/build/routes/home.transport-JGDYQTSD.js", imports: ["/build/_shared/chunk-MESSCHDG.js", "/build/_shared/chunk-Y3Q3TNJF.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/home.tripod": { id: "routes/home.tripod", parentId: "routes/home", path: "tripod", index: void 0, caseSensitive: void 0, module: "/build/routes/home.tripod-M5UWJVTB.js", imports: ["/build/_shared/chunk-PJVXSB7S.js", "/build/_shared/chunk-MESSCHDG.js", "/build/_shared/chunk-Y3Q3TNJF.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/home.warehousing": { id: "routes/home.warehousing", parentId: "routes/home", path: "warehousing", index: void 0, caseSensitive: void 0, module: "/build/routes/home.warehousing-BAXEI4EA.js", imports: ["/build/_shared/chunk-MESSCHDG.js", "/build/_shared/chunk-Y3Q3TNJF.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/index-copy": { id: "routes/index-copy", parentId: "root", path: "index-copy", index: void 0, caseSensitive: void 0, module: "/build/routes/index-copy-N5KK6UAC.js", imports: ["/build/_shared/chunk-OJ6MM72X.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/indexbackup": { id: "routes/indexbackup", parentId: "root", path: "indexbackup", index: void 0, caseSensitive: void 0, module: "/build/routes/indexbackup-VWE5ONPV.js", imports: ["/build/_shared/chunk-4GO7GDJN.js", "/build/_shared/chunk-AR7BF74J.js", "/build/_shared/chunk-7UAIT4ON.js", "/build/_shared/chunk-S67NAB4E.js", "/build/_shared/chunk-JI2KNYM7.js", "/build/_shared/chunk-47OZGKAC.js", "/build/_shared/chunk-UWXV354P.js", "/build/_shared/chunk-PJVXSB7S.js", "/build/_shared/chunk-MESSCHDG.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/join": { id: "routes/join", parentId: "root", path: "join", index: void 0, caseSensitive: void 0, module: "/build/routes/join-JGGFKF64.js", imports: ["/build/_shared/chunk-G3ACJGOK.js", "/build/_shared/chunk-OJ6MM72X.js"], hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/login": { id: "routes/login", parentId: "root", path: "login", index: void 0, caseSensitive: void 0, module: "/build/routes/login-3SCHETKX.js", imports: ["/build/_shared/chunk-G3ACJGOK.js", "/build/_shared/chunk-OJ6MM72X.js"], hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/login-blue": { id: "routes/login-blue", parentId: "root", path: "login-blue", index: void 0, caseSensitive: void 0, module: "/build/routes/login-blue-VY4QOZEJ.js", imports: ["/build/_shared/chunk-S67NAB4E.js", "/build/_shared/chunk-JI2KNYM7.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/logout": { id: "routes/logout", parentId: "root", path: "logout", index: void 0, caseSensitive: void 0, module: "/build/routes/logout-GGSXPJWV.js", imports: void 0, hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/not-found": { id: "routes/not-found", parentId: "root", path: "not-found", index: void 0, caseSensitive: void 0, module: "/build/routes/not-found-SWCUCPBS.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/notes": { id: "routes/notes", parentId: "root", path: "notes", index: void 0, caseSensitive: void 0, module: "/build/routes/notes-UK435JP5.js", imports: ["/build/_shared/chunk-2LJDV4EM.js", "/build/_shared/chunk-OJ6MM72X.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/notes.$noteId": { id: "routes/notes.$noteId", parentId: "routes/notes", path: ":noteId", index: void 0, caseSensitive: void 0, module: "/build/routes/notes.$noteId-BX7Y5S6L.js", imports: ["/build/_shared/chunk-DMZCSMEQ.js", "/build/_shared/chunk-G7CHZRZX.js"], hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !0 }, "routes/notes._index": { id: "routes/notes._index", parentId: "routes/notes", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/notes._index-TTIO77GU.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/notes.new": { id: "routes/notes.new", parentId: "routes/notes", path: "new", index: void 0, caseSensitive: void 0, module: "/build/routes/notes.new-REGXRYCF.js", imports: ["/build/_shared/chunk-DMZCSMEQ.js", "/build/_shared/chunk-G7CHZRZX.js"], hasAction: !0, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/signup": { id: "routes/signup", parentId: "root", path: "signup", index: void 0, caseSensitive: void 0, module: "/build/routes/signup-YDS4K7PV.js", imports: ["/build/_shared/chunk-S67NAB4E.js", "/build/_shared/chunk-JI2KNYM7.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/slideNew": { id: "routes/slideNew", parentId: "root", path: "slideNew", index: void 0, caseSensitive: void 0, module: "/build/routes/slideNew-FAXTAEMG.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/slider": { id: "routes/slider", parentId: "root", path: "slider", index: void 0, caseSensitive: void 0, module: "/build/routes/slider-YJX6RKAA.js", imports: ["/build/_shared/chunk-KHD6IAOM.js", "/build/_shared/chunk-4GO7GDJN.js", "/build/_shared/chunk-AR7BF74J.js", "/build/_shared/chunk-7UAIT4ON.js", "/build/_shared/chunk-S67NAB4E.js", "/build/_shared/chunk-JI2KNYM7.js", "/build/_shared/chunk-47OZGKAC.js", "/build/_shared/chunk-UWXV354P.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 } }, version: "b1c9a93a", hmr: { runtime: "/build/_shared\\chunk-K4XMOQHS.js", timestamp: 1710657037007 }, url: "/build/manifest-B1C9A93A.js" };

// server-entry-module:@remix-run/dev/server-build
var mode = "development", assetsBuildDirectory = "public\\build", future = { v3_fetcherPersist: !1, v3_relativeSplatPath: !1, v3_throwAbortReason: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/home.distribution": {
    id: "routes/home.distribution",
    parentId: "routes/home",
    path: "distribution",
    index: void 0,
    caseSensitive: void 0,
    module: home_distribution_exports
  },
  "routes/action.set-theme": {
    id: "routes/action.set-theme",
    parentId: "root",
    path: "action/set-theme",
    index: void 0,
    caseSensitive: void 0,
    module: action_set_theme_exports
  },
  "routes/home.warehousing": {
    id: "routes/home.warehousing",
    parentId: "routes/home",
    path: "warehousing",
    index: void 0,
    caseSensitive: void 0,
    module: home_warehousing_exports
  },
  "routes/home.generative": {
    id: "routes/home.generative",
    parentId: "routes/home",
    path: "generative",
    index: void 0,
    caseSensitive: void 0,
    module: home_generative_exports
  },
  "routes/home.production": {
    id: "routes/home.production",
    parentId: "routes/home",
    path: "production",
    index: void 0,
    caseSensitive: void 0,
    module: home_production_exports
  },
  "routes/home.inventory": {
    id: "routes/home.inventory",
    parentId: "routes/home",
    path: "inventory",
    index: void 0,
    caseSensitive: void 0,
    module: home_inventory_exports
  },
  "routes/home.transport": {
    id: "routes/home.transport",
    parentId: "routes/home",
    path: "transport",
    index: void 0,
    caseSensitive: void 0,
    module: home_transport_exports
  },
  "routes/ai.share_.$id": {
    id: "routes/ai.share_.$id",
    parentId: "routes/ai",
    path: "share/:id",
    index: void 0,
    caseSensitive: void 0,
    module: ai_share_id_exports
  },
  "routes/notes.$noteId": {
    id: "routes/notes.$noteId",
    parentId: "routes/notes",
    path: ":noteId",
    index: void 0,
    caseSensitive: void 0,
    module: notes_noteId_exports
  },
  "routes/ai.chat_.$id": {
    id: "routes/ai.chat_.$id",
    parentId: "routes/ai",
    path: "chat/:id",
    index: void 0,
    caseSensitive: void 0,
    module: ai_chat_id_exports
  },
  "routes/notes._index": {
    id: "routes/notes._index",
    parentId: "routes/notes",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: notes_index_exports
  },
  "routes/healthcheck": {
    id: "routes/healthcheck",
    parentId: "root",
    path: "healthcheck",
    index: void 0,
    caseSensitive: void 0,
    module: healthcheck_exports
  },
  "routes/home.invopt": {
    id: "routes/home.invopt",
    parentId: "routes/home",
    path: "invopt",
    index: void 0,
    caseSensitive: void 0,
    module: home_invopt_exports
  },
  "routes/home.tripod": {
    id: "routes/home.tripod",
    parentId: "routes/home",
    path: "tripod",
    index: void 0,
    caseSensitive: void 0,
    module: home_tripod_exports
  },
  "routes/home._index": {
    id: "routes/home._index",
    parentId: "routes/home",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: home_index_exports
  },
  "routes/indexbackup": {
    id: "routes/indexbackup",
    parentId: "root",
    path: "indexbackup",
    index: void 0,
    caseSensitive: void 0,
    module: indexbackup_exports
  },
  "routes/ai.explore": {
    id: "routes/ai.explore",
    parentId: "routes/ai",
    path: "explore",
    index: void 0,
    caseSensitive: void 0,
    module: ai_explore_exports
  },
  "routes/home.sales": {
    id: "routes/home.sales",
    parentId: "routes/home",
    path: "sales",
    index: void 0,
    caseSensitive: void 0,
    module: home_sales_exports
  },
  "routes/index-copy": {
    id: "routes/index-copy",
    parentId: "root",
    path: "index-copy",
    index: void 0,
    caseSensitive: void 0,
    module: index_copy_exports
  },
  "routes/login-blue": {
    id: "routes/login-blue",
    parentId: "root",
    path: "login-blue",
    index: void 0,
    caseSensitive: void 0,
    module: login_blue_exports
  },
  "routes/ai._index": {
    id: "routes/ai._index",
    parentId: "routes/ai",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: ai_index_exports
  },
  "routes/api_.chat": {
    id: "routes/api_.chat",
    parentId: "root",
    path: "api/chat",
    index: void 0,
    caseSensitive: void 0,
    module: api_chat_exports
  },
  "routes/not-found": {
    id: "routes/not-found",
    parentId: "root",
    path: "not-found",
    index: void 0,
    caseSensitive: void 0,
    module: not_found_exports
  },
  "routes/notes.new": {
    id: "routes/notes.new",
    parentId: "routes/notes",
    path: "new",
    index: void 0,
    caseSensitive: void 0,
    module: notes_new_exports
  },
  "routes/home.kpi": {
    id: "routes/home.kpi",
    parentId: "routes/home",
    path: "kpi",
    index: void 0,
    caseSensitive: void 0,
    module: home_kpi_exports
  },
  "routes/slideNew": {
    id: "routes/slideNew",
    parentId: "root",
    path: "slideNew",
    index: void 0,
    caseSensitive: void 0,
    module: route26
  },
  "routes/logout": {
    id: "routes/logout",
    parentId: "root",
    path: "logout",
    index: void 0,
    caseSensitive: void 0,
    module: logout_exports
  },
  "routes/signup": {
    id: "routes/signup",
    parentId: "root",
    path: "signup",
    index: void 0,
    caseSensitive: void 0,
    module: signup_exports
  },
  "routes/slider": {
    id: "routes/slider",
    parentId: "root",
    path: "slider",
    index: void 0,
    caseSensitive: void 0,
    module: slider_exports
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: index_exports
  },
  "routes/login": {
    id: "routes/login",
    parentId: "root",
    path: "login",
    index: void 0,
    caseSensitive: void 0,
    module: login_exports
  },
  "routes/notes": {
    id: "routes/notes",
    parentId: "root",
    path: "notes",
    index: void 0,
    caseSensitive: void 0,
    module: notes_exports
  },
  "routes/auth": {
    id: "routes/auth",
    parentId: "root",
    path: "auth",
    index: void 0,
    caseSensitive: void 0,
    module: auth_exports
  },
  "routes/blue": {
    id: "routes/blue",
    parentId: "root",
    path: "blue",
    index: void 0,
    caseSensitive: void 0,
    module: blue_exports
  },
  "routes/home": {
    id: "routes/home",
    parentId: "root",
    path: "home",
    index: void 0,
    caseSensitive: void 0,
    module: home_exports
  },
  "routes/join": {
    id: "routes/join",
    parentId: "root",
    path: "join",
    index: void 0,
    caseSensitive: void 0,
    module: join_exports
  },
  "routes/ai": {
    id: "routes/ai",
    parentId: "root",
    path: "ai",
    index: void 0,
    caseSensitive: void 0,
    module: ai_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  mode,
  publicPath,
  routes
});
/*! Bundled license information:

remix-utils/build/server/safe-redirect.js:
  (**
   * This should be used any time the redirect path is user-provided
   * (Like the query string on our login/signup pages). This avoids
   * open-redirect vulnerabilities.
   * @param {string} to The redirect destination
   * @param {string} defaultRedirect The redirect to use if the to is unsafe.
   * @license MIT
   * @author https://github.com/jacob-ebey
   *)
*/
//# sourceMappingURL=index.js.map
