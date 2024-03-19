import {
  ChatHistory,
  Ie,
  Sidebar,
  SidebarProvider,
  ThemeProvider,
  TooltipProvider,
  useSidebar
} from "/build/_shared/chunk-W7IBBSE7.js";
import {
  useUser
} from "/build/_shared/chunk-OJ6MM72X.js";
import {
  $5d3850c4d0b4e6c7$export$393edc798c47379d,
  $5d3850c4d0b4e6c7$export$41fb9f06171c75f4,
  $5d3850c4d0b4e6c7$export$602eac185826482c,
  $5d3850c4d0b4e6c7$export$7c6e2c02157bb7d2,
  $5d3850c4d0b4e6c7$export$be92b6f5f03c0fe9,
  $5d3850c4d0b4e6c7$export$c6fdb837b070b4ff,
  $5d3850c4d0b4e6c7$export$f39c2d165cd861fe,
  $5d3850c4d0b4e6c7$export$f99233281efd08a0
} from "/build/_shared/chunk-LF3PVE3T.js";
import {
  IconExternalLink,
  IconNextChat,
  IconSeparator,
  require_chat
} from "/build/_shared/chunk-YP6UTSP6.js";
import {
  require_jsx_runtime
} from "/build/_shared/chunk-NMZL6IDN.js";
import {
  require_session
} from "/build/_shared/chunk-DMZCSMEQ.js";
import {
  $010c2913dbd2fe3d$export$5cae361ad82dce8b
} from "/build/_shared/chunk-XFJ7VQR3.js";
import {
  $ea1ef594cf570d83$export$be92b6f5f03c0fe9
} from "/build/_shared/chunk-66XC2EWC.js";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "/build/_shared/chunk-WMPYSF63.js";
import {
  $e02a7d9cb1dc128c$export$c74125a8e3af6bb2,
  $f631663db3294ace$export$b39126d51d94e6f3
} from "/build/_shared/chunk-DQMH5JL2.js";
import {
  $921a889cee6df7e8$export$99c2b779aa4e8b8b
} from "/build/_shared/chunk-YOJGWH76.js";
import {
  $1746a345f3d73bb7$export$f680877a34711e37,
  $5cb92bef7577960e$export$177fb62ff3ec1f22,
  $71cd76cc60e0454e$export$6f32135080cb4c3,
  $8927f6f2acc4f386$export$250ffa63cdc0d034,
  $8927f6f2acc4f386$export$6d1a0317bde7de7f,
  $9f79659886946c16$export$e5c5a5f917a5871c,
  $b1b2314f5f9a1d84$export$25bec8c6f54ee79a,
  $c512c27ab02ef895$export$50c7b4e9d9f19c1,
  $e42e1063c40fb3ef$export$b9ecd428b558ff10,
  ChevronDown,
  X
} from "/build/_shared/chunk-KTF7K347.js";
import {
  Button,
  cva
} from "/build/_shared/chunk-4U2ZCKCX.js";
import {
  $6ed0406888f73fc4$export$43e446d32b3d21af,
  $6ed0406888f73fc4$export$c7b2cbe3552a0d05,
  cn,
  nanoid
} from "/build/_shared/chunk-TRC5XD27.js";
import {
  _extends
} from "/build/_shared/chunk-ELWJTL4F.js";
import {
  require_node
} from "/build/_shared/chunk-G7CHZRZX.js";
import "/build/_shared/chunk-Y3Q3TNJF.js";
import {
  Link,
  Outlet,
  useFetcher
} from "/build/_shared/chunk-NON4LQMM.js";
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

// app/routes/ai.tsx
var import_node = __toESM(require_node());

// app/components/header.tsx
var import_react5 = __toESM(require_react());

// app/components/ui/navigation-menu.tsx
var React = __toESM(require_react());

// node_modules/@radix-ui/react-navigation-menu/dist/index.mjs
var import_react = __toESM(require_react(), 1);
var import_react_dom = __toESM(require_react_dom(), 1);
var $322c88a641701f3b$var$NAVIGATION_MENU_NAME = "NavigationMenu";
var [$322c88a641701f3b$var$Collection, $322c88a641701f3b$var$useCollection, $322c88a641701f3b$var$createCollectionScope] = $e02a7d9cb1dc128c$export$c74125a8e3af6bb2($322c88a641701f3b$var$NAVIGATION_MENU_NAME);
var [$322c88a641701f3b$var$FocusGroupCollection, $322c88a641701f3b$var$useFocusGroupCollection, $322c88a641701f3b$var$createFocusGroupCollectionScope] = $e02a7d9cb1dc128c$export$c74125a8e3af6bb2($322c88a641701f3b$var$NAVIGATION_MENU_NAME);
var [$322c88a641701f3b$var$createNavigationMenuContext, $322c88a641701f3b$export$fb8ea5af8c9fcdf0] = $c512c27ab02ef895$export$50c7b4e9d9f19c1($322c88a641701f3b$var$NAVIGATION_MENU_NAME, [
  $322c88a641701f3b$var$createCollectionScope,
  $322c88a641701f3b$var$createFocusGroupCollectionScope
]);
var [$322c88a641701f3b$var$NavigationMenuProviderImpl, $322c88a641701f3b$var$useNavigationMenuContext] = $322c88a641701f3b$var$createNavigationMenuContext($322c88a641701f3b$var$NAVIGATION_MENU_NAME);
var [$322c88a641701f3b$var$ViewportContentProvider, $322c88a641701f3b$var$useViewportContentContext] = $322c88a641701f3b$var$createNavigationMenuContext($322c88a641701f3b$var$NAVIGATION_MENU_NAME);
var $322c88a641701f3b$export$5b2278cf1e8bcae2 = /* @__PURE__ */ (0, import_react.forwardRef)((props, forwardedRef) => {
  const { __scopeNavigationMenu, value: valueProp, onValueChange, defaultValue, delayDuration = 200, skipDelayDuration = 300, orientation = "horizontal", dir, ...NavigationMenuProps } = props;
  const [navigationMenu, setNavigationMenu] = (0, import_react.useState)(null);
  const composedRef = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(
    forwardedRef,
    (node) => setNavigationMenu(node)
  );
  const direction = $f631663db3294ace$export$b39126d51d94e6f3(dir);
  const openTimerRef = (0, import_react.useRef)(0);
  const closeTimerRef = (0, import_react.useRef)(0);
  const skipDelayTimerRef = (0, import_react.useRef)(0);
  const [isOpenDelayed, setIsOpenDelayed] = (0, import_react.useState)(true);
  const [value1 = "", setValue] = $71cd76cc60e0454e$export$6f32135080cb4c3({
    prop: valueProp,
    onChange: (value) => {
      const isOpen = value !== "";
      const hasSkipDelayDuration = skipDelayDuration > 0;
      if (isOpen) {
        window.clearTimeout(skipDelayTimerRef.current);
        if (hasSkipDelayDuration)
          setIsOpenDelayed(false);
      } else {
        window.clearTimeout(skipDelayTimerRef.current);
        skipDelayTimerRef.current = window.setTimeout(
          () => setIsOpenDelayed(true),
          skipDelayDuration
        );
      }
      onValueChange === null || onValueChange === void 0 || onValueChange(value);
    },
    defaultProp: defaultValue
  });
  const startCloseTimer = (0, import_react.useCallback)(() => {
    window.clearTimeout(closeTimerRef.current);
    closeTimerRef.current = window.setTimeout(
      () => setValue(""),
      150
    );
  }, [
    setValue
  ]);
  const handleOpen = (0, import_react.useCallback)((itemValue) => {
    window.clearTimeout(closeTimerRef.current);
    setValue(itemValue);
  }, [
    setValue
  ]);
  const handleDelayedOpen = (0, import_react.useCallback)((itemValue) => {
    const isOpenItem = value1 === itemValue;
    if (isOpenItem)
      window.clearTimeout(closeTimerRef.current);
    else
      openTimerRef.current = window.setTimeout(() => {
        window.clearTimeout(closeTimerRef.current);
        setValue(itemValue);
      }, delayDuration);
  }, [
    value1,
    setValue,
    delayDuration
  ]);
  (0, import_react.useEffect)(() => {
    return () => {
      window.clearTimeout(openTimerRef.current);
      window.clearTimeout(closeTimerRef.current);
      window.clearTimeout(skipDelayTimerRef.current);
    };
  }, []);
  return /* @__PURE__ */ (0, import_react.createElement)($322c88a641701f3b$var$NavigationMenuProvider, {
    scope: __scopeNavigationMenu,
    isRootMenu: true,
    value: value1,
    dir: direction,
    orientation,
    rootNavigationMenu: navigationMenu,
    onTriggerEnter: (itemValue) => {
      window.clearTimeout(openTimerRef.current);
      if (isOpenDelayed)
        handleDelayedOpen(itemValue);
      else
        handleOpen(itemValue);
    },
    onTriggerLeave: () => {
      window.clearTimeout(openTimerRef.current);
      startCloseTimer();
    },
    onContentEnter: () => window.clearTimeout(closeTimerRef.current),
    onContentLeave: startCloseTimer,
    onItemSelect: (itemValue) => {
      setValue(
        (prevValue) => prevValue === itemValue ? "" : itemValue
      );
    },
    onItemDismiss: () => setValue("")
  }, /* @__PURE__ */ (0, import_react.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.nav, _extends({
    "aria-label": "Main",
    "data-orientation": orientation,
    dir: direction
  }, NavigationMenuProps, {
    ref: composedRef
  })));
});
var $322c88a641701f3b$var$NavigationMenuProvider = (props) => {
  const { scope, isRootMenu, rootNavigationMenu, dir, orientation, children, value, onItemSelect, onItemDismiss, onTriggerEnter, onTriggerLeave, onContentEnter, onContentLeave } = props;
  const [viewport, setViewport] = (0, import_react.useState)(null);
  const [viewportContent, setViewportContent] = (0, import_react.useState)(/* @__PURE__ */ new Map());
  const [indicatorTrack, setIndicatorTrack] = (0, import_react.useState)(null);
  return /* @__PURE__ */ (0, import_react.createElement)($322c88a641701f3b$var$NavigationMenuProviderImpl, {
    scope,
    isRootMenu,
    rootNavigationMenu,
    value,
    previousValue: $010c2913dbd2fe3d$export$5cae361ad82dce8b(value),
    baseId: $1746a345f3d73bb7$export$f680877a34711e37(),
    dir,
    orientation,
    viewport,
    onViewportChange: setViewport,
    indicatorTrack,
    onIndicatorTrackChange: setIndicatorTrack,
    onTriggerEnter: $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onTriggerEnter),
    onTriggerLeave: $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onTriggerLeave),
    onContentEnter: $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onContentEnter),
    onContentLeave: $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onContentLeave),
    onItemSelect: $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onItemSelect),
    onItemDismiss: $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onItemDismiss),
    onViewportContentChange: (0, import_react.useCallback)((contentValue, contentData) => {
      setViewportContent((prevContent) => {
        prevContent.set(contentValue, contentData);
        return new Map(prevContent);
      });
    }, []),
    onViewportContentRemove: (0, import_react.useCallback)((contentValue) => {
      setViewportContent((prevContent) => {
        if (!prevContent.has(contentValue))
          return prevContent;
        prevContent.delete(contentValue);
        return new Map(prevContent);
      });
    }, [])
  }, /* @__PURE__ */ (0, import_react.createElement)($322c88a641701f3b$var$Collection.Provider, {
    scope
  }, /* @__PURE__ */ (0, import_react.createElement)($322c88a641701f3b$var$ViewportContentProvider, {
    scope,
    items: viewportContent
  }, children)));
};
var $322c88a641701f3b$var$LIST_NAME = "NavigationMenuList";
var $322c88a641701f3b$export$c361068a95fd2286 = /* @__PURE__ */ (0, import_react.forwardRef)((props, forwardedRef) => {
  const { __scopeNavigationMenu, ...listProps } = props;
  const context = $322c88a641701f3b$var$useNavigationMenuContext($322c88a641701f3b$var$LIST_NAME, __scopeNavigationMenu);
  const list = /* @__PURE__ */ (0, import_react.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.ul, _extends({
    "data-orientation": context.orientation
  }, listProps, {
    ref: forwardedRef
  }));
  return /* @__PURE__ */ (0, import_react.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.div, {
    style: {
      position: "relative"
    },
    ref: context.onIndicatorTrackChange
  }, /* @__PURE__ */ (0, import_react.createElement)($322c88a641701f3b$var$Collection.Slot, {
    scope: __scopeNavigationMenu
  }, context.isRootMenu ? /* @__PURE__ */ (0, import_react.createElement)($322c88a641701f3b$var$FocusGroup, {
    asChild: true
  }, list) : list));
});
var $322c88a641701f3b$var$ITEM_NAME = "NavigationMenuItem";
var [$322c88a641701f3b$var$NavigationMenuItemContextProvider, $322c88a641701f3b$var$useNavigationMenuItemContext] = $322c88a641701f3b$var$createNavigationMenuContext($322c88a641701f3b$var$ITEM_NAME);
var $322c88a641701f3b$export$ffdbb83a2de845c2 = /* @__PURE__ */ (0, import_react.forwardRef)((props, forwardedRef) => {
  const { __scopeNavigationMenu, value: valueProp, ...itemProps } = props;
  const autoValue = $1746a345f3d73bb7$export$f680877a34711e37();
  const value = valueProp || autoValue || "LEGACY_REACT_AUTO_VALUE";
  const contentRef = (0, import_react.useRef)(null);
  const triggerRef = (0, import_react.useRef)(null);
  const focusProxyRef = (0, import_react.useRef)(null);
  const restoreContentTabOrderRef = (0, import_react.useRef)(() => {
  });
  const wasEscapeCloseRef = (0, import_react.useRef)(false);
  const handleContentEntry = (0, import_react.useCallback)((side = "start") => {
    if (contentRef.current) {
      restoreContentTabOrderRef.current();
      const candidates = $322c88a641701f3b$var$getTabbableCandidates(contentRef.current);
      if (candidates.length)
        $322c88a641701f3b$var$focusFirst(side === "start" ? candidates : candidates.reverse());
    }
  }, []);
  const handleContentExit = (0, import_react.useCallback)(() => {
    if (contentRef.current) {
      const candidates = $322c88a641701f3b$var$getTabbableCandidates(contentRef.current);
      if (candidates.length)
        restoreContentTabOrderRef.current = $322c88a641701f3b$var$removeFromTabOrder(candidates);
    }
  }, []);
  return /* @__PURE__ */ (0, import_react.createElement)($322c88a641701f3b$var$NavigationMenuItemContextProvider, {
    scope: __scopeNavigationMenu,
    value,
    triggerRef,
    contentRef,
    focusProxyRef,
    wasEscapeCloseRef,
    onEntryKeyDown: handleContentEntry,
    onFocusProxyEnter: handleContentEntry,
    onRootContentClose: handleContentExit,
    onContentFocusOutside: handleContentExit
  }, /* @__PURE__ */ (0, import_react.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.li, _extends({}, itemProps, {
    ref: forwardedRef
  })));
});
var $322c88a641701f3b$var$TRIGGER_NAME = "NavigationMenuTrigger";
var $322c88a641701f3b$export$37fe8002734d8f2 = /* @__PURE__ */ (0, import_react.forwardRef)((props, forwardedRef) => {
  const { __scopeNavigationMenu, disabled, ...triggerProps } = props;
  const context = $322c88a641701f3b$var$useNavigationMenuContext($322c88a641701f3b$var$TRIGGER_NAME, props.__scopeNavigationMenu);
  const itemContext = $322c88a641701f3b$var$useNavigationMenuItemContext($322c88a641701f3b$var$TRIGGER_NAME, props.__scopeNavigationMenu);
  const ref = (0, import_react.useRef)(null);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(ref, itemContext.triggerRef, forwardedRef);
  const triggerId = $322c88a641701f3b$var$makeTriggerId(context.baseId, itemContext.value);
  const contentId = $322c88a641701f3b$var$makeContentId(context.baseId, itemContext.value);
  const hasPointerMoveOpenedRef = (0, import_react.useRef)(false);
  const wasClickCloseRef = (0, import_react.useRef)(false);
  const open = itemContext.value === context.value;
  return /* @__PURE__ */ (0, import_react.createElement)(import_react.Fragment, null, /* @__PURE__ */ (0, import_react.createElement)($322c88a641701f3b$var$Collection.ItemSlot, {
    scope: __scopeNavigationMenu,
    value: itemContext.value
  }, /* @__PURE__ */ (0, import_react.createElement)($322c88a641701f3b$var$FocusGroupItem, {
    asChild: true
  }, /* @__PURE__ */ (0, import_react.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.button, _extends({
    id: triggerId,
    disabled,
    "data-disabled": disabled ? "" : void 0,
    "data-state": $322c88a641701f3b$var$getOpenState(open),
    "aria-expanded": open,
    "aria-controls": contentId
  }, triggerProps, {
    ref: composedRefs,
    onPointerEnter: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onPointerEnter, () => {
      wasClickCloseRef.current = false;
      itemContext.wasEscapeCloseRef.current = false;
    }),
    onPointerMove: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onPointerMove, $322c88a641701f3b$var$whenMouse(() => {
      if (disabled || wasClickCloseRef.current || itemContext.wasEscapeCloseRef.current || hasPointerMoveOpenedRef.current)
        return;
      context.onTriggerEnter(itemContext.value);
      hasPointerMoveOpenedRef.current = true;
    })),
    onPointerLeave: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onPointerLeave, $322c88a641701f3b$var$whenMouse(() => {
      if (disabled)
        return;
      context.onTriggerLeave();
      hasPointerMoveOpenedRef.current = false;
    })),
    onClick: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onClick, () => {
      context.onItemSelect(itemContext.value);
      wasClickCloseRef.current = open;
    }),
    onKeyDown: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onKeyDown, (event) => {
      const verticalEntryKey = context.dir === "rtl" ? "ArrowLeft" : "ArrowRight";
      const entryKey = {
        horizontal: "ArrowDown",
        vertical: verticalEntryKey
      }[context.orientation];
      if (open && event.key === entryKey) {
        itemContext.onEntryKeyDown();
        event.preventDefault();
      }
    })
  })))), open && /* @__PURE__ */ (0, import_react.createElement)(import_react.Fragment, null, /* @__PURE__ */ (0, import_react.createElement)($ea1ef594cf570d83$export$be92b6f5f03c0fe9, {
    "aria-hidden": true,
    tabIndex: 0,
    ref: itemContext.focusProxyRef,
    onFocus: (event) => {
      const content = itemContext.contentRef.current;
      const prevFocusedElement = event.relatedTarget;
      const wasTriggerFocused = prevFocusedElement === ref.current;
      const wasFocusFromContent = content === null || content === void 0 ? void 0 : content.contains(prevFocusedElement);
      if (wasTriggerFocused || !wasFocusFromContent)
        itemContext.onFocusProxyEnter(wasTriggerFocused ? "start" : "end");
    }
  }), context.viewport && /* @__PURE__ */ (0, import_react.createElement)("span", {
    "aria-owns": contentId
  })));
});
var $322c88a641701f3b$var$LINK_SELECT = "navigationMenu.linkSelect";
var $322c88a641701f3b$export$6893bf21536567da = /* @__PURE__ */ (0, import_react.forwardRef)((props, forwardedRef) => {
  const { __scopeNavigationMenu, active, onSelect, ...linkProps } = props;
  return /* @__PURE__ */ (0, import_react.createElement)($322c88a641701f3b$var$FocusGroupItem, {
    asChild: true
  }, /* @__PURE__ */ (0, import_react.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.a, _extends({
    "data-active": active ? "" : void 0,
    "aria-current": active ? "page" : void 0
  }, linkProps, {
    ref: forwardedRef,
    onClick: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onClick, (event1) => {
      const target = event1.target;
      const linkSelectEvent = new CustomEvent($322c88a641701f3b$var$LINK_SELECT, {
        bubbles: true,
        cancelable: true
      });
      target.addEventListener(
        $322c88a641701f3b$var$LINK_SELECT,
        (event) => onSelect === null || onSelect === void 0 ? void 0 : onSelect(event),
        {
          once: true
        }
      );
      $8927f6f2acc4f386$export$6d1a0317bde7de7f(target, linkSelectEvent);
      if (!linkSelectEvent.defaultPrevented && !event1.metaKey) {
        const rootContentDismissEvent = new CustomEvent($322c88a641701f3b$var$ROOT_CONTENT_DISMISS, {
          bubbles: true,
          cancelable: true
        });
        $8927f6f2acc4f386$export$6d1a0317bde7de7f(target, rootContentDismissEvent);
      }
    }, {
      checkForDefaultPrevented: false
    })
  })));
});
var $322c88a641701f3b$var$INDICATOR_NAME = "NavigationMenuIndicator";
var $322c88a641701f3b$export$8ddb526647c0d8fb = /* @__PURE__ */ (0, import_react.forwardRef)((props, forwardedRef) => {
  const { forceMount, ...indicatorProps } = props;
  const context = $322c88a641701f3b$var$useNavigationMenuContext($322c88a641701f3b$var$INDICATOR_NAME, props.__scopeNavigationMenu);
  const isVisible = Boolean(context.value);
  return context.indicatorTrack ? /* @__PURE__ */ import_react_dom.default.createPortal(/* @__PURE__ */ (0, import_react.createElement)($921a889cee6df7e8$export$99c2b779aa4e8b8b, {
    present: forceMount || isVisible
  }, /* @__PURE__ */ (0, import_react.createElement)($322c88a641701f3b$var$NavigationMenuIndicatorImpl, _extends({}, indicatorProps, {
    ref: forwardedRef
  }))), context.indicatorTrack) : null;
});
var $322c88a641701f3b$var$NavigationMenuIndicatorImpl = /* @__PURE__ */ (0, import_react.forwardRef)((props, forwardedRef) => {
  const { __scopeNavigationMenu, ...indicatorProps } = props;
  const context = $322c88a641701f3b$var$useNavigationMenuContext($322c88a641701f3b$var$INDICATOR_NAME, __scopeNavigationMenu);
  const getItems = $322c88a641701f3b$var$useCollection(__scopeNavigationMenu);
  const [activeTrigger, setActiveTrigger] = (0, import_react.useState)(null);
  const [position, setPosition] = (0, import_react.useState)(null);
  const isHorizontal = context.orientation === "horizontal";
  const isVisible = Boolean(context.value);
  (0, import_react.useEffect)(() => {
    var _items$find;
    const items = getItems();
    const triggerNode = (_items$find = items.find(
      (item) => item.value === context.value
    )) === null || _items$find === void 0 ? void 0 : _items$find.ref.current;
    if (triggerNode)
      setActiveTrigger(triggerNode);
  }, [
    getItems,
    context.value
  ]);
  const handlePositionChange = () => {
    if (activeTrigger)
      setPosition({
        size: isHorizontal ? activeTrigger.offsetWidth : activeTrigger.offsetHeight,
        offset: isHorizontal ? activeTrigger.offsetLeft : activeTrigger.offsetTop
      });
  };
  $322c88a641701f3b$var$useResizeObserver(activeTrigger, handlePositionChange);
  $322c88a641701f3b$var$useResizeObserver(context.indicatorTrack, handlePositionChange);
  return position ? /* @__PURE__ */ (0, import_react.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends({
    "aria-hidden": true,
    "data-state": isVisible ? "visible" : "hidden",
    "data-orientation": context.orientation
  }, indicatorProps, {
    ref: forwardedRef,
    style: {
      position: "absolute",
      ...isHorizontal ? {
        left: 0,
        width: position.size + "px",
        transform: `translateX(${position.offset}px)`
      } : {
        top: 0,
        height: position.size + "px",
        transform: `translateY(${position.offset}px)`
      },
      ...indicatorProps.style
    }
  })) : null;
});
var $322c88a641701f3b$var$CONTENT_NAME = "NavigationMenuContent";
var $322c88a641701f3b$export$38e00e996c2f93f7 = /* @__PURE__ */ (0, import_react.forwardRef)((props, forwardedRef) => {
  const { forceMount, ...contentProps } = props;
  const context = $322c88a641701f3b$var$useNavigationMenuContext($322c88a641701f3b$var$CONTENT_NAME, props.__scopeNavigationMenu);
  const itemContext = $322c88a641701f3b$var$useNavigationMenuItemContext($322c88a641701f3b$var$CONTENT_NAME, props.__scopeNavigationMenu);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(itemContext.contentRef, forwardedRef);
  const open = itemContext.value === context.value;
  const commonProps = {
    value: itemContext.value,
    triggerRef: itemContext.triggerRef,
    focusProxyRef: itemContext.focusProxyRef,
    wasEscapeCloseRef: itemContext.wasEscapeCloseRef,
    onContentFocusOutside: itemContext.onContentFocusOutside,
    onRootContentClose: itemContext.onRootContentClose,
    ...contentProps
  };
  return !context.viewport ? /* @__PURE__ */ (0, import_react.createElement)($921a889cee6df7e8$export$99c2b779aa4e8b8b, {
    present: forceMount || open
  }, /* @__PURE__ */ (0, import_react.createElement)($322c88a641701f3b$var$NavigationMenuContentImpl, _extends({
    "data-state": $322c88a641701f3b$var$getOpenState(open)
  }, commonProps, {
    ref: composedRefs,
    onPointerEnter: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onPointerEnter, context.onContentEnter),
    onPointerLeave: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onPointerLeave, $322c88a641701f3b$var$whenMouse(context.onContentLeave)),
    style: {
      // Prevent interaction when animating out
      pointerEvents: !open && context.isRootMenu ? "none" : void 0,
      ...commonProps.style
    }
  }))) : /* @__PURE__ */ (0, import_react.createElement)($322c88a641701f3b$var$ViewportContentMounter, _extends({
    forceMount
  }, commonProps, {
    ref: composedRefs
  }));
});
var $322c88a641701f3b$var$ViewportContentMounter = /* @__PURE__ */ (0, import_react.forwardRef)((props, forwardedRef) => {
  const context = $322c88a641701f3b$var$useNavigationMenuContext($322c88a641701f3b$var$CONTENT_NAME, props.__scopeNavigationMenu);
  const { onViewportContentChange, onViewportContentRemove } = context;
  $9f79659886946c16$export$e5c5a5f917a5871c(() => {
    onViewportContentChange(props.value, {
      ref: forwardedRef,
      ...props
    });
  }, [
    props,
    forwardedRef,
    onViewportContentChange
  ]);
  $9f79659886946c16$export$e5c5a5f917a5871c(() => {
    return () => onViewportContentRemove(props.value);
  }, [
    props.value,
    onViewportContentRemove
  ]);
  return null;
});
var $322c88a641701f3b$var$ROOT_CONTENT_DISMISS = "navigationMenu.rootContentDismiss";
var $322c88a641701f3b$var$NavigationMenuContentImpl = /* @__PURE__ */ (0, import_react.forwardRef)((props, forwardedRef) => {
  const { __scopeNavigationMenu, value, triggerRef, focusProxyRef, wasEscapeCloseRef, onRootContentClose, onContentFocusOutside, ...contentProps } = props;
  const context = $322c88a641701f3b$var$useNavigationMenuContext($322c88a641701f3b$var$CONTENT_NAME, __scopeNavigationMenu);
  const ref = (0, import_react.useRef)(null);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(ref, forwardedRef);
  const triggerId = $322c88a641701f3b$var$makeTriggerId(context.baseId, value);
  const contentId = $322c88a641701f3b$var$makeContentId(context.baseId, value);
  const getItems = $322c88a641701f3b$var$useCollection(__scopeNavigationMenu);
  const prevMotionAttributeRef = (0, import_react.useRef)(null);
  const { onItemDismiss } = context;
  (0, import_react.useEffect)(() => {
    const content = ref.current;
    if (context.isRootMenu && content) {
      const handleClose = () => {
        var _triggerRef$current;
        onItemDismiss();
        onRootContentClose();
        if (content.contains(document.activeElement))
          (_triggerRef$current = triggerRef.current) === null || _triggerRef$current === void 0 || _triggerRef$current.focus();
      };
      content.addEventListener($322c88a641701f3b$var$ROOT_CONTENT_DISMISS, handleClose);
      return () => content.removeEventListener($322c88a641701f3b$var$ROOT_CONTENT_DISMISS, handleClose);
    }
  }, [
    context.isRootMenu,
    props.value,
    triggerRef,
    onItemDismiss,
    onRootContentClose
  ]);
  const motionAttribute = (0, import_react.useMemo)(() => {
    const items = getItems();
    const values = items.map(
      (item) => item.value
    );
    if (context.dir === "rtl")
      values.reverse();
    const index = values.indexOf(context.value);
    const prevIndex = values.indexOf(context.previousValue);
    const isSelected = value === context.value;
    const wasSelected = prevIndex === values.indexOf(value);
    if (!isSelected && !wasSelected)
      return prevMotionAttributeRef.current;
    const attribute = (() => {
      if (index !== prevIndex) {
        if (isSelected && prevIndex !== -1)
          return index > prevIndex ? "from-end" : "from-start";
        if (wasSelected && index !== -1)
          return index > prevIndex ? "to-start" : "to-end";
      }
      return null;
    })();
    prevMotionAttributeRef.current = attribute;
    return attribute;
  }, [
    context.previousValue,
    context.value,
    context.dir,
    getItems,
    value
  ]);
  return /* @__PURE__ */ (0, import_react.createElement)($322c88a641701f3b$var$FocusGroup, {
    asChild: true
  }, /* @__PURE__ */ (0, import_react.createElement)($5cb92bef7577960e$export$177fb62ff3ec1f22, _extends({
    id: contentId,
    "aria-labelledby": triggerId,
    "data-motion": motionAttribute,
    "data-orientation": context.orientation
  }, contentProps, {
    ref: composedRefs,
    onDismiss: () => {
      var _ref$current;
      const rootContentDismissEvent = new Event($322c88a641701f3b$var$ROOT_CONTENT_DISMISS, {
        bubbles: true,
        cancelable: true
      });
      (_ref$current = ref.current) === null || _ref$current === void 0 || _ref$current.dispatchEvent(rootContentDismissEvent);
    },
    onFocusOutside: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onFocusOutside, (event) => {
      var _context$rootNavigati;
      onContentFocusOutside();
      const target = event.target;
      if ((_context$rootNavigati = context.rootNavigationMenu) !== null && _context$rootNavigati !== void 0 && _context$rootNavigati.contains(target))
        event.preventDefault();
    }),
    onPointerDownOutside: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onPointerDownOutside, (event) => {
      var _context$viewport;
      const target = event.target;
      const isTrigger = getItems().some((item) => {
        var _item$ref$current;
        return (_item$ref$current = item.ref.current) === null || _item$ref$current === void 0 ? void 0 : _item$ref$current.contains(target);
      });
      const isRootViewport = context.isRootMenu && ((_context$viewport = context.viewport) === null || _context$viewport === void 0 ? void 0 : _context$viewport.contains(target));
      if (isTrigger || isRootViewport || !context.isRootMenu)
        event.preventDefault();
    }),
    onKeyDown: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onKeyDown, (event) => {
      const isMetaKey = event.altKey || event.ctrlKey || event.metaKey;
      const isTabKey = event.key === "Tab" && !isMetaKey;
      if (isTabKey) {
        const candidates = $322c88a641701f3b$var$getTabbableCandidates(event.currentTarget);
        const focusedElement = document.activeElement;
        const index = candidates.findIndex(
          (candidate) => candidate === focusedElement
        );
        const isMovingBackwards = event.shiftKey;
        const nextCandidates = isMovingBackwards ? candidates.slice(0, index).reverse() : candidates.slice(index + 1, candidates.length);
        if ($322c88a641701f3b$var$focusFirst(nextCandidates))
          event.preventDefault();
        else {
          var _focusProxyRef$curren;
          (_focusProxyRef$curren = focusProxyRef.current) === null || _focusProxyRef$curren === void 0 || _focusProxyRef$curren.focus();
        }
      }
    }),
    onEscapeKeyDown: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onEscapeKeyDown, (event) => {
      wasEscapeCloseRef.current = true;
    })
  })));
});
var $322c88a641701f3b$var$VIEWPORT_NAME = "NavigationMenuViewport";
var $322c88a641701f3b$export$ee880b97cc6d44a5 = /* @__PURE__ */ (0, import_react.forwardRef)((props, forwardedRef) => {
  const { forceMount, ...viewportProps } = props;
  const context = $322c88a641701f3b$var$useNavigationMenuContext($322c88a641701f3b$var$VIEWPORT_NAME, props.__scopeNavigationMenu);
  const open = Boolean(context.value);
  return /* @__PURE__ */ (0, import_react.createElement)($921a889cee6df7e8$export$99c2b779aa4e8b8b, {
    present: forceMount || open
  }, /* @__PURE__ */ (0, import_react.createElement)($322c88a641701f3b$var$NavigationMenuViewportImpl, _extends({}, viewportProps, {
    ref: forwardedRef
  })));
});
var $322c88a641701f3b$var$NavigationMenuViewportImpl = /* @__PURE__ */ (0, import_react.forwardRef)((props1, forwardedRef) => {
  const { __scopeNavigationMenu, children, ...viewportImplProps } = props1;
  const context = $322c88a641701f3b$var$useNavigationMenuContext($322c88a641701f3b$var$VIEWPORT_NAME, __scopeNavigationMenu);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, context.onViewportChange);
  const viewportContentContext = $322c88a641701f3b$var$useViewportContentContext($322c88a641701f3b$var$CONTENT_NAME, props1.__scopeNavigationMenu);
  const [size, setSize] = (0, import_react.useState)(null);
  const [content, setContent] = (0, import_react.useState)(null);
  const viewportWidth = size ? (size === null || size === void 0 ? void 0 : size.width) + "px" : void 0;
  const viewportHeight = size ? (size === null || size === void 0 ? void 0 : size.height) + "px" : void 0;
  const open = Boolean(context.value);
  const activeContentValue = open ? context.value : context.previousValue;
  const handleSizeChange = () => {
    if (content)
      setSize({
        width: content.offsetWidth,
        height: content.offsetHeight
      });
  };
  $322c88a641701f3b$var$useResizeObserver(content, handleSizeChange);
  return /* @__PURE__ */ (0, import_react.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends({
    "data-state": $322c88a641701f3b$var$getOpenState(open),
    "data-orientation": context.orientation
  }, viewportImplProps, {
    ref: composedRefs,
    style: {
      // Prevent interaction when animating out
      pointerEvents: !open && context.isRootMenu ? "none" : void 0,
      ["--radix-navigation-menu-viewport-width"]: viewportWidth,
      ["--radix-navigation-menu-viewport-height"]: viewportHeight,
      ...viewportImplProps.style
    },
    onPointerEnter: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props1.onPointerEnter, context.onContentEnter),
    onPointerLeave: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props1.onPointerLeave, $322c88a641701f3b$var$whenMouse(context.onContentLeave))
  }), Array.from(viewportContentContext.items).map(([value, { ref, forceMount, ...props }]) => {
    const isActive = activeContentValue === value;
    return /* @__PURE__ */ (0, import_react.createElement)($921a889cee6df7e8$export$99c2b779aa4e8b8b, {
      key: value,
      present: forceMount || isActive
    }, /* @__PURE__ */ (0, import_react.createElement)($322c88a641701f3b$var$NavigationMenuContentImpl, _extends({}, props, {
      ref: $6ed0406888f73fc4$export$43e446d32b3d21af(ref, (node) => {
        if (isActive && node)
          setContent(node);
      })
    })));
  }));
});
var $322c88a641701f3b$var$FOCUS_GROUP_NAME = "FocusGroup";
var $322c88a641701f3b$var$FocusGroup = /* @__PURE__ */ (0, import_react.forwardRef)((props, forwardedRef) => {
  const { __scopeNavigationMenu, ...groupProps } = props;
  const context = $322c88a641701f3b$var$useNavigationMenuContext($322c88a641701f3b$var$FOCUS_GROUP_NAME, __scopeNavigationMenu);
  return /* @__PURE__ */ (0, import_react.createElement)($322c88a641701f3b$var$FocusGroupCollection.Provider, {
    scope: __scopeNavigationMenu
  }, /* @__PURE__ */ (0, import_react.createElement)($322c88a641701f3b$var$FocusGroupCollection.Slot, {
    scope: __scopeNavigationMenu
  }, /* @__PURE__ */ (0, import_react.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends({
    dir: context.dir
  }, groupProps, {
    ref: forwardedRef
  }))));
});
var $322c88a641701f3b$var$ARROW_KEYS = [
  "ArrowRight",
  "ArrowLeft",
  "ArrowUp",
  "ArrowDown"
];
var $322c88a641701f3b$var$FOCUS_GROUP_ITEM_NAME = "FocusGroupItem";
var $322c88a641701f3b$var$FocusGroupItem = /* @__PURE__ */ (0, import_react.forwardRef)((props, forwardedRef) => {
  const { __scopeNavigationMenu, ...groupProps } = props;
  const getItems = $322c88a641701f3b$var$useFocusGroupCollection(__scopeNavigationMenu);
  const context = $322c88a641701f3b$var$useNavigationMenuContext($322c88a641701f3b$var$FOCUS_GROUP_ITEM_NAME, __scopeNavigationMenu);
  return /* @__PURE__ */ (0, import_react.createElement)($322c88a641701f3b$var$FocusGroupCollection.ItemSlot, {
    scope: __scopeNavigationMenu
  }, /* @__PURE__ */ (0, import_react.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.button, _extends({}, groupProps, {
    ref: forwardedRef,
    onKeyDown: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onKeyDown, (event) => {
      const isFocusNavigationKey = [
        "Home",
        "End",
        ...$322c88a641701f3b$var$ARROW_KEYS
      ].includes(event.key);
      if (isFocusNavigationKey) {
        let candidateNodes = getItems().map(
          (item) => item.ref.current
        );
        const prevItemKey = context.dir === "rtl" ? "ArrowRight" : "ArrowLeft";
        const prevKeys = [
          prevItemKey,
          "ArrowUp",
          "End"
        ];
        if (prevKeys.includes(event.key))
          candidateNodes.reverse();
        if ($322c88a641701f3b$var$ARROW_KEYS.includes(event.key)) {
          const currentIndex = candidateNodes.indexOf(event.currentTarget);
          candidateNodes = candidateNodes.slice(currentIndex + 1);
        }
        setTimeout(
          () => $322c88a641701f3b$var$focusFirst(candidateNodes)
        );
        event.preventDefault();
      }
    })
  })));
});
function $322c88a641701f3b$var$getTabbableCandidates(container) {
  const nodes = [];
  const walker = document.createTreeWalker(container, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (node) => {
      const isHiddenInput = node.tagName === "INPUT" && node.type === "hidden";
      if (node.disabled || node.hidden || isHiddenInput)
        return NodeFilter.FILTER_SKIP;
      return node.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  while (walker.nextNode())
    nodes.push(walker.currentNode);
  return nodes;
}
function $322c88a641701f3b$var$focusFirst(candidates) {
  const previouslyFocusedElement = document.activeElement;
  return candidates.some((candidate) => {
    if (candidate === previouslyFocusedElement)
      return true;
    candidate.focus();
    return document.activeElement !== previouslyFocusedElement;
  });
}
function $322c88a641701f3b$var$removeFromTabOrder(candidates) {
  candidates.forEach((candidate) => {
    candidate.dataset.tabindex = candidate.getAttribute("tabindex") || "";
    candidate.setAttribute("tabindex", "-1");
  });
  return () => {
    candidates.forEach((candidate) => {
      const prevTabIndex = candidate.dataset.tabindex;
      candidate.setAttribute("tabindex", prevTabIndex);
    });
  };
}
function $322c88a641701f3b$var$useResizeObserver(element, onResize) {
  const handleResize = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onResize);
  $9f79659886946c16$export$e5c5a5f917a5871c(() => {
    let rAF = 0;
    if (element) {
      const resizeObserver = new ResizeObserver(() => {
        cancelAnimationFrame(rAF);
        rAF = window.requestAnimationFrame(handleResize);
      });
      resizeObserver.observe(element);
      return () => {
        window.cancelAnimationFrame(rAF);
        resizeObserver.unobserve(element);
      };
    }
  }, [
    element,
    handleResize
  ]);
}
function $322c88a641701f3b$var$getOpenState(open) {
  return open ? "open" : "closed";
}
function $322c88a641701f3b$var$makeTriggerId(baseId, value) {
  return `${baseId}-trigger-${value}`;
}
function $322c88a641701f3b$var$makeContentId(baseId, value) {
  return `${baseId}-content-${value}`;
}
function $322c88a641701f3b$var$whenMouse(handler) {
  return (event) => event.pointerType === "mouse" ? handler(event) : void 0;
}
var $322c88a641701f3b$export$be92b6f5f03c0fe9 = $322c88a641701f3b$export$5b2278cf1e8bcae2;
var $322c88a641701f3b$export$54c2e3dc7acea9f5 = $322c88a641701f3b$export$c361068a95fd2286;
var $322c88a641701f3b$export$6d08773d2e66f8f2 = $322c88a641701f3b$export$ffdbb83a2de845c2;
var $322c88a641701f3b$export$41fb9f06171c75f4 = $322c88a641701f3b$export$37fe8002734d8f2;
var $322c88a641701f3b$export$a6c7ac8248d6e38a = $322c88a641701f3b$export$6893bf21536567da;
var $322c88a641701f3b$export$adb584737d712b70 = $322c88a641701f3b$export$8ddb526647c0d8fb;
var $322c88a641701f3b$export$7c6e2c02157bb7d2 = $322c88a641701f3b$export$38e00e996c2f93f7;
var $322c88a641701f3b$export$d5c6c08dc2d3ca7 = $322c88a641701f3b$export$ee880b97cc6d44a5;

// app/components/ui/navigation-menu.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\ui\\\\navigation-menu.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\ui\\navigation-menu.tsx"
  );
  import.meta.hot.lastModified = "1710306669211.007";
}
var NavigationMenu = React.forwardRef(_c = ({
  className,
  children,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)($322c88a641701f3b$export$be92b6f5f03c0fe9, { ref, className: cn("relative z-10 flex max-w-max flex-1 items-center justify-center", className), ...props, children: [
  children,
  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavigationMenuViewport, {}, void 0, false, {
    fileName: "app/components/ui/navigation-menu.tsx",
    lineNumber: 32,
    columnNumber: 5
  }, this)
] }, void 0, true, {
  fileName: "app/components/ui/navigation-menu.tsx",
  lineNumber: 30,
  columnNumber: 12
}, this));
_c2 = NavigationMenu;
NavigationMenu.displayName = $322c88a641701f3b$export$be92b6f5f03c0fe9.displayName;
var NavigationMenuList = React.forwardRef(_c3 = ({
  className,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)($322c88a641701f3b$export$54c2e3dc7acea9f5, { ref, className: cn("group flex flex-1 list-none items-center justify-center space-x-1", className), ...props }, void 0, false, {
  fileName: "app/components/ui/navigation-menu.tsx",
  lineNumber: 39,
  columnNumber: 12
}, this));
_c4 = NavigationMenuList;
NavigationMenuList.displayName = $322c88a641701f3b$export$54c2e3dc7acea9f5.displayName;
var NavigationMenuItem = $322c88a641701f3b$export$6d08773d2e66f8f2;
var navigationMenuTriggerStyle = cva("group inline-flex h-10 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-slate-100 hover:text-slate-900 focus:bg-slate-100 focus:text-slate-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-slate-100/50 data-[state=open]:bg-slate-100/50 dark:bg-slate-950 dark:hover:bg-slate-800 dark:hover:text-slate-50 dark:focus:bg-slate-800 dark:focus:text-slate-50 dark:data-[active]:bg-slate-800/50 dark:data-[state=open]:bg-slate-800/50");
var NavigationMenuTrigger = React.forwardRef(_c5 = ({
  className,
  children,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)($322c88a641701f3b$export$41fb9f06171c75f4, { ref, className: cn(navigationMenuTriggerStyle(), "group", className), ...props, children: [
  children,
  "",
  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChevronDown, { className: "relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180", "aria-hidden": "true" }, void 0, false, {
    fileName: "app/components/ui/navigation-menu.tsx",
    lineNumber: 50,
    columnNumber: 5
  }, this)
] }, void 0, true, {
  fileName: "app/components/ui/navigation-menu.tsx",
  lineNumber: 48,
  columnNumber: 12
}, this));
_c6 = NavigationMenuTrigger;
NavigationMenuTrigger.displayName = $322c88a641701f3b$export$41fb9f06171c75f4.displayName;
var NavigationMenuContent = React.forwardRef(_c7 = ({
  className,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)($322c88a641701f3b$export$7c6e2c02157bb7d2, { ref, className: cn("top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto", className), ...props }, void 0, false, {
  fileName: "app/components/ui/navigation-menu.tsx",
  lineNumber: 57,
  columnNumber: 12
}, this));
_c8 = NavigationMenuContent;
NavigationMenuContent.displayName = $322c88a641701f3b$export$7c6e2c02157bb7d2.displayName;
var NavigationMenuLink = $322c88a641701f3b$export$a6c7ac8248d6e38a;
var NavigationMenuViewport = React.forwardRef(_c9 = ({
  className,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: cn("absolute top-full flex justify-start mr-96"), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)($322c88a641701f3b$export$d5c6c08dc2d3ca7, { className: cn("origin-top-left relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border border-slate-200 bg-white text-slate-950 shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)] dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50", className), ref, ...props }, void 0, false, {
  fileName: "app/components/ui/navigation-menu.tsx",
  lineNumber: 65,
  columnNumber: 5
}, this) }, void 0, false, {
  fileName: "app/components/ui/navigation-menu.tsx",
  lineNumber: 64,
  columnNumber: 12
}, this));
_c10 = NavigationMenuViewport;
NavigationMenuViewport.displayName = $322c88a641701f3b$export$d5c6c08dc2d3ca7.displayName;
var NavigationMenuIndicator = React.forwardRef(_c11 = ({
  className,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)($322c88a641701f3b$export$adb584737d712b70, { ref, className: cn("top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in", className), ...props, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-slate-200 shadow-md dark:bg-slate-800" }, void 0, false, {
  fileName: "app/components/ui/navigation-menu.tsx",
  lineNumber: 73,
  columnNumber: 5
}, this) }, void 0, false, {
  fileName: "app/components/ui/navigation-menu.tsx",
  lineNumber: 72,
  columnNumber: 12
}, this));
_c12 = NavigationMenuIndicator;
NavigationMenuIndicator.displayName = $322c88a641701f3b$export$adb584737d712b70.displayName;
var _c;
var _c2;
var _c3;
var _c4;
var _c5;
var _c6;
var _c7;
var _c8;
var _c9;
var _c10;
var _c11;
var _c12;
$RefreshReg$(_c, "NavigationMenu$React.forwardRef");
$RefreshReg$(_c2, "NavigationMenu");
$RefreshReg$(_c3, "NavigationMenuList$React.forwardRef");
$RefreshReg$(_c4, "NavigationMenuList");
$RefreshReg$(_c5, "NavigationMenuTrigger$React.forwardRef");
$RefreshReg$(_c6, "NavigationMenuTrigger");
$RefreshReg$(_c7, "NavigationMenuContent$React.forwardRef");
$RefreshReg$(_c8, "NavigationMenuContent");
$RefreshReg$(_c9, "NavigationMenuViewport$React.forwardRef");
$RefreshReg$(_c10, "NavigationMenuViewport");
$RefreshReg$(_c11, "NavigationMenuIndicator$React.forwardRef");
$RefreshReg$(_c12, "NavigationMenuIndicator");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// node_modules/remix-utils/browser/react/client-only.js
var import_jsx_runtime = __toESM(require_jsx_runtime());

// node_modules/remix-utils/browser/react/use-hydrated.js
var import_react2 = __toESM(require_react());
var hydrating = true;
function useHydrated() {
  let [hydrated, setHydrated] = (0, import_react2.useState)(() => !hydrating);
  (0, import_react2.useEffect)(function hydrate() {
    hydrating = false;
    setHydrated(true);
  }, []);
  return hydrated;
}

// node_modules/remix-utils/browser/react/client-only.js
function ClientOnly({ children, fallback = null }) {
  return useHydrated() ? (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: children() }) : (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: fallback });
}

// app/components/user-menu.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\user-menu.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\user-menu.tsx"
  );
  import.meta.hot.lastModified = "1710131653000";
}
function getUserInitials(name) {
  const [firstName, lastName] = name.split(" ");
  return lastName ? `${firstName[0]}${lastName[0]}` : firstName.slice(0, 2);
}
function UserMenuClient() {
  _s();
  const user = useUser();
  const fetcher = useFetcher();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex items-center justify-between", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DropdownMenu, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button, { variant: "ghost", className: "pl-0", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex items-center justify-center text-xs font-medium uppercase rounded-full select-none size-7 shrink-0 bg-muted/50 text-muted-foreground", children: user?.email ? getUserInitials(user?.email) : null }, void 0, false, {
        fileName: "app/components/user-menu.tsx",
        lineNumber: 46,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "ml-2", children: user?.email }, void 0, false, {
        fileName: "app/components/user-menu.tsx",
        lineNumber: 49,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/user-menu.tsx",
      lineNumber: 45,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/user-menu.tsx",
      lineNumber: 44,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DropdownMenuContent, { sideOffset: 8, align: "start", className: "w-[180px]", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DropdownMenuItem, { className: "flex-col items-start", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "text-xs font-medium", children: user?.email }, void 0, false, {
          fileName: "app/components/user-menu.tsx",
          lineNumber: 54,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "text-xs text-zinc-500", children: user?.email }, void 0, false, {
          fileName: "app/components/user-menu.tsx",
          lineNumber: 55,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/user-menu.tsx",
        lineNumber: 53,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DropdownMenuSeparator, {}, void 0, false, {
        fileName: "app/components/user-menu.tsx",
        lineNumber: 57,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DropdownMenuItem, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Link, { to: "https://vercel.com", target: "_blank", rel: "noopener noreferrer", className: "inline-flex items-center justify-between w-full text-xs", children: [
        "Vercel Homepage",
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(IconExternalLink, { className: "size-3 ml-auto" }, void 0, false, {
          fileName: "app/components/user-menu.tsx",
          lineNumber: 61,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/user-menu.tsx",
        lineNumber: 59,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/user-menu.tsx",
        lineNumber: 58,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DropdownMenuItem, { onClick: () => fetcher.submit({
        method: "POST"
      }, {
        action: "logout"
      }), className: "text-xs", children: "Log Out" }, void 0, false, {
        fileName: "app/components/user-menu.tsx",
        lineNumber: 64,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/user-menu.tsx",
      lineNumber: 52,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/user-menu.tsx",
    lineNumber: 43,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/user-menu.tsx",
    lineNumber: 42,
    columnNumber: 10
  }, this);
}
_s(UserMenuClient, "ycj8IOeoSfghj9PThcRX4KB99hA=", false, function() {
  return [useUser, useFetcher];
});
_c13 = UserMenuClient;
function UserMenu() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ClientOnly, { fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: "Loading..." }, void 0, false, {
    fileName: "app/components/user-menu.tsx",
    lineNumber: 80,
    columnNumber: 32
  }, this), children: () => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(UserMenuClient, {}, void 0, false, {
    fileName: "app/components/user-menu.tsx",
    lineNumber: 81,
    columnNumber: 14
  }, this) }, void 0, false, {
    fileName: "app/components/user-menu.tsx",
    lineNumber: 80,
    columnNumber: 10
  }, this);
}
_c22 = UserMenu;
var _c13;
var _c22;
$RefreshReg$(_c13, "UserMenuClient");
$RefreshReg$(_c22, "UserMenu");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/ui/sheet.tsx
var React2 = __toESM(require_react());
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\ui\\\\sheet.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\ui\\sheet.tsx"
  );
  import.meta.hot.lastModified = "1710131653000";
}
var Sheet = $5d3850c4d0b4e6c7$export$be92b6f5f03c0fe9;
var SheetTrigger = $5d3850c4d0b4e6c7$export$41fb9f06171c75f4;
var SheetPortal = $5d3850c4d0b4e6c7$export$602eac185826482c;
var SheetOverlay = React2.forwardRef(_c14 = ({
  className,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)($5d3850c4d0b4e6c7$export$c6fdb837b070b4ff, { className: cn("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className), ...props, ref }, void 0, false, {
  fileName: "app/components/ui/sheet.tsx",
  lineNumber: 33,
  columnNumber: 12
}, this));
_c23 = SheetOverlay;
SheetOverlay.displayName = $5d3850c4d0b4e6c7$export$c6fdb837b070b4ff.displayName;
var sheetVariants = cva("fixed z-50 gap-4 bg-white p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500 dark:bg-slate-950", {
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
});
var SheetContent = React2.forwardRef(_c32 = ({
  side = "right",
  className,
  children,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(SheetPortal, { children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(SheetOverlay, {}, void 0, false, {
    fileName: "app/components/ui/sheet.tsx",
    lineNumber: 55,
    columnNumber: 5
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)($5d3850c4d0b4e6c7$export$7c6e2c02157bb7d2, { ref, className: cn(sheetVariants({
    side
  }), className), ...props, children: [
    children,
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)($5d3850c4d0b4e6c7$export$f39c2d165cd861fe, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-slate-100 dark:ring-offset-slate-950 dark:focus:ring-slate-300 dark:data-[state=open]:bg-slate-800", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(X, { className: "h-4 w-4" }, void 0, false, {
        fileName: "app/components/ui/sheet.tsx",
        lineNumber: 61,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "sr-only", children: "Close" }, void 0, false, {
        fileName: "app/components/ui/sheet.tsx",
        lineNumber: 62,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/ui/sheet.tsx",
      lineNumber: 60,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/ui/sheet.tsx",
    lineNumber: 56,
    columnNumber: 5
  }, this)
] }, void 0, true, {
  fileName: "app/components/ui/sheet.tsx",
  lineNumber: 54,
  columnNumber: 12
}, this));
_c42 = SheetContent;
SheetContent.displayName = $5d3850c4d0b4e6c7$export$7c6e2c02157bb7d2.displayName;
var SheetHeader = ({
  className,
  ...props
}) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: cn("flex flex-col space-y-2 text-center sm:text-left", className), ...props }, void 0, false, {
  fileName: "app/components/ui/sheet.tsx",
  lineNumber: 71,
  columnNumber: 7
}, this);
_c52 = SheetHeader;
SheetHeader.displayName = "SheetHeader";
var SheetFooter = ({
  className,
  ...props
}) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className), ...props }, void 0, false, {
  fileName: "app/components/ui/sheet.tsx",
  lineNumber: 77,
  columnNumber: 7
}, this);
_c62 = SheetFooter;
SheetFooter.displayName = "SheetFooter";
var SheetTitle = React2.forwardRef(_c72 = ({
  className,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)($5d3850c4d0b4e6c7$export$f99233281efd08a0, { ref, className: cn("text-lg font-semibold text-slate-950 dark:text-slate-50", className), ...props }, void 0, false, {
  fileName: "app/components/ui/sheet.tsx",
  lineNumber: 83,
  columnNumber: 12
}, this));
_c82 = SheetTitle;
SheetTitle.displayName = $5d3850c4d0b4e6c7$export$f99233281efd08a0.displayName;
var SheetDescription = React2.forwardRef(_c92 = ({
  className,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)($5d3850c4d0b4e6c7$export$393edc798c47379d, { ref, className: cn("text-sm text-slate-500 dark:text-slate-400", className), ...props }, void 0, false, {
  fileName: "app/components/ui/sheet.tsx",
  lineNumber: 89,
  columnNumber: 12
}, this));
_c102 = SheetDescription;
SheetDescription.displayName = $5d3850c4d0b4e6c7$export$393edc798c47379d.displayName;
var _c14;
var _c23;
var _c32;
var _c42;
var _c52;
var _c62;
var _c72;
var _c82;
var _c92;
var _c102;
$RefreshReg$(_c14, "SheetOverlay$React.forwardRef");
$RefreshReg$(_c23, "SheetOverlay");
$RefreshReg$(_c32, "SheetContent$React.forwardRef");
$RefreshReg$(_c42, "SheetContent");
$RefreshReg$(_c52, "SheetHeader");
$RefreshReg$(_c62, "SheetFooter");
$RefreshReg$(_c72, "SheetTitle$React.forwardRef");
$RefreshReg$(_c82, "SheetTitle");
$RefreshReg$(_c92, "SheetDescription$React.forwardRef");
$RefreshReg$(_c102, "SheetDescription");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// public/assets/lowes.png
var lowes_default = "/build/_assets/lowes-GODDG2UJ.png";

// app/components/sidebar-mobile.tsx
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\sidebar-mobile.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\sidebar-mobile.tsx"
  );
  import.meta.hot.lastModified = "1710236947185.1138";
}
function SidebarMobile({
  children
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Sheet, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(SheetTrigger, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Button, { variant: "ghost", className: "-ml-2 flex p-0 lg:hidden", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("img", { className: "cursor-poniter  h-12 w-16 ", src: lowes_default, alt: "logo" }, void 0, false, {
        fileName: "app/components/sidebar-mobile.tsx",
        lineNumber: 31,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "sr-only", children: "Toggle Sidebar" }, void 0, false, {
        fileName: "app/components/sidebar-mobile.tsx",
        lineNumber: 32,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/sidebar-mobile.tsx",
      lineNumber: 30,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/sidebar-mobile.tsx",
      lineNumber: 29,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(SheetContent, { className: "inset-y-0 flex h-auto w-[300px] flex-col p-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Sidebar, { className: "flex", children }, void 0, false, {
      fileName: "app/components/sidebar-mobile.tsx",
      lineNumber: 36,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/sidebar-mobile.tsx",
      lineNumber: 35,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/sidebar-mobile.tsx",
    lineNumber: 28,
    columnNumber: 10
  }, this);
}
_c15 = SidebarMobile;
var _c15;
$RefreshReg$(_c15, "SidebarMobile");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/sidebar-toggle.tsx
var import_jsx_dev_runtime5 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\sidebar-toggle.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\sidebar-toggle.tsx"
  );
  import.meta.hot.lastModified = "1710236758892.9028";
}
function SidebarToggle() {
  _s2();
  const {
    toggleSidebar
  } = useSidebar();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("button", { className: "-ml-2 hidden lg:flex", onClick: () => {
    toggleSidebar();
  }, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("img", { className: "cursor-poniter  h-12 w-15 ", src: lowes_default, alt: "logo" }, void 0, false, {
      fileName: "app/components/sidebar-toggle.tsx",
      lineNumber: 35,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { className: "sr-only", children: "Toggle Sidebar" }, void 0, false, {
      fileName: "app/components/sidebar-toggle.tsx",
      lineNumber: 37,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/sidebar-toggle.tsx",
    lineNumber: 32,
    columnNumber: 10
  }, this);
}
_s2(SidebarToggle, "dRnjPhQbCChcVGr4xvQkpNxnqyg=", false, function() {
  return [useSidebar];
});
_c16 = SidebarToggle;
var _c16;
$RefreshReg$(_c16, "SidebarToggle");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/header.tsx
var import_jsx_dev_runtime6 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\header.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s3 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\header.tsx"
  );
  import.meta.hot.lastModified = "1710764306038.7588";
}
var components = [{
  title: "Overview",
  href: "/docs/primitives/alert-dialog",
  description: "A modal dialog that interrupts the user with important content and expects a response."
}, {
  title: "Demand",
  href: "/docs/primitives/hover-card",
  description: "For sighted users to preview content available behind a link."
}, {
  title: "Supply",
  href: "/docs/primitives/progress",
  description: "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar."
}, {
  title: "Spend",
  href: "/docs/primitives/scroll-area",
  description: "Visually or semantically separates content."
}, {
  title: "Sales",
  href: "/docs/primitives/tabs",
  description: "A set of layered sections of content\u2014known as tab panels\u2014that are displayed one at a time."
}, {
  title: "Finance",
  href: "/docs/primitives/tooltip",
  description: "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it."
}];
var ListItem = import_react5.default.forwardRef(_c17 = ({
  className,
  title,
  children,
  ...props
}, ref) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(NavigationMenuLink, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("a", { ref, className: cn("block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors  hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground", className), ...props, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "text-sm font-medium leading-none", children: title }, void 0, false, {
      fileName: "app/components/header.tsx",
      lineNumber: 67,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { className: "line-clamp-2 text-sm leading-snug text-muted-foreground", children }, void 0, false, {
      fileName: "app/components/header.tsx",
      lineNumber: 68,
      columnNumber: 11
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/header.tsx",
    lineNumber: 66,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/components/header.tsx",
    lineNumber: 65,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/header.tsx",
    lineNumber: 64,
    columnNumber: 10
  }, this);
});
_c24 = ListItem;
ListItem.displayName = "ListItem";
function UserOrLogin() {
  _s3();
  const user = useUser();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_jsx_dev_runtime6.Fragment, { children: [
    user ? /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_jsx_dev_runtime6.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(SidebarMobile, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(ChatHistory, { userId: user.id }, void 0, false, {
        fileName: "app/components/header.tsx",
        lineNumber: 84,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/header.tsx",
        lineNumber: 83,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(SidebarToggle, {}, void 0, false, {
        fileName: "app/components/header.tsx",
        lineNumber: 86,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/header.tsx",
      lineNumber: 82,
      columnNumber: 15
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Link, { to: "/", target: "_blank", rel: "nofollow", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(IconNextChat, { className: "size-6 mr-2 dark:hidden", inverted: true }, void 0, false, {
        fileName: "app/components/header.tsx",
        lineNumber: 88,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(IconNextChat, { className: "hidden size-6 mr-2 dark:block" }, void 0, false, {
        fileName: "app/components/header.tsx",
        lineNumber: 89,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/header.tsx",
      lineNumber: 87,
      columnNumber: 15
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "flex items-center ", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(IconSeparator, { className: "size-6 text-muted-foreground/50" }, void 0, false, {
        fileName: "app/components/header.tsx",
        lineNumber: 92,
        columnNumber: 9
      }, this),
      user ? /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(UserMenu, {}, void 0, false, {
        fileName: "app/components/header.tsx",
        lineNumber: 93,
        columnNumber: 17
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Button, { variant: "link", asChild: true, className: "-ml-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Link, { to: "/sign-in?callbackUrl=/", children: "Login" }, void 0, false, {
        fileName: "app/components/header.tsx",
        lineNumber: 94,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/header.tsx",
        lineNumber: 93,
        columnNumber: 32
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/header.tsx",
      lineNumber: 91,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/header.tsx",
    lineNumber: 81,
    columnNumber: 10
  }, this);
}
_s3(UserOrLogin, "BPnln+wUpxLjLAxQmw7xYz9C+QI=", false, function() {
  return [useUser];
});
_c33 = UserOrLogin;
function Header() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("header", { className: "sticky top-0 z-50 flex items-center justify-between w-full h-16 px-4 border-b shrink-0 bg-[#272e62]", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "flex items-center text-white text-lg ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react5.default.Suspense, { fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "flex-1 overflow-auto" }, void 0, false, {
      fileName: "app/components/header.tsx",
      lineNumber: 106,
      columnNumber: 35
    }, this), children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(UserOrLogin, {}, void 0, false, {
      fileName: "app/components/header.tsx",
      lineNumber: 107,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/header.tsx",
      lineNumber: 106,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/header.tsx",
      lineNumber: 105,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "flex items-center justify-end space-x-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(NavigationMenu, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(NavigationMenuList, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(NavigationMenuItem, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(NavigationMenuTrigger, { className: "bg-sky-500 text-white", children: "Avatars" }, void 0, false, {
          fileName: "app/components/header.tsx",
          lineNumber: 116,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(NavigationMenuContent, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("ul", { className: " grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-white", children: components.map((component) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(ListItem, { title: component.title, href: component.href, children: component.description }, component.title, false, {
          fileName: "app/components/header.tsx",
          lineNumber: 121,
          columnNumber: 50
        }, this)) }, void 0, false, {
          fileName: "app/components/header.tsx",
          lineNumber: 120,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "app/components/header.tsx",
          lineNumber: 119,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/header.tsx",
        lineNumber: 115,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/components/header.tsx",
        lineNumber: 114,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/header.tsx",
        lineNumber: 113,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/components/header.tsx",
        lineNumber: 112,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Link, { target: "_blank", to: "/ai/explore", rel: "noopener noreferrer", className: " hover:bg-sky-500/20 text-white font-semibold rounded-lg p-3 flex items-center space-x-2 border border-sky-500", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: "w-5 h-5", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("path", { d: "M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" }, void 0, false, {
        fileName: "app/components/header.tsx",
        lineNumber: 133,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/header.tsx",
        lineNumber: 132,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/components/header.tsx",
        lineNumber: 131,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/header.tsx",
      lineNumber: 111,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/header.tsx",
    lineNumber: 104,
    columnNumber: 10
  }, this);
}
_c43 = Header;
var _c17;
var _c24;
var _c33;
var _c43;
$RefreshReg$(_c17, "ListItem$React.forwardRef");
$RefreshReg$(_c24, "ListItem");
$RefreshReg$(_c33, "UserOrLogin");
$RefreshReg$(_c43, "Header");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/providers.tsx
var import_jsx_dev_runtime7 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\providers.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\providers.tsx"
  );
  import.meta.hot.lastModified = "1710131653000";
}
function Providers({
  children,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(ClientOnly, { children: () => /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(ThemeProvider, { ...props, children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(SidebarProvider, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(TooltipProvider, { children }, void 0, false, {
    fileName: "app/components/providers.tsx",
    lineNumber: 33,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/components/providers.tsx",
    lineNumber: 32,
    columnNumber: 11
  }, this) }, void 0, false, {
    fileName: "app/components/providers.tsx",
    lineNumber: 31,
    columnNumber: 14
  }, this) }, void 0, false, {
    fileName: "app/components/providers.tsx",
    lineNumber: 30,
    columnNumber: 10
  }, this);
}
_c18 = Providers;
var _c18;
$RefreshReg$(_c18, "Providers");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/ai.tsx
var import_chat = __toESM(require_chat());
var import_session = __toESM(require_session());
var import_jsx_dev_runtime8 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\ai.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\ai.tsx"
  );
}
function Ai() {
  const id = nanoid();
  console.log("id", id);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Ie, {}, void 0, false, {
      fileName: "app/routes/ai.tsx",
      lineNumber: 107,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Providers, { attribute: "class", defaultTheme: "system", enableSystem: true, disableTransitionOnChange: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "flex flex-col min-h-screen", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Header, {}, void 0, false, {
        fileName: "app/routes/ai.tsx",
        lineNumber: 111,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("main", { className: "flex flex-col flex-1 bg-muted/50", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Outlet, {}, void 0, false, {
        fileName: "app/routes/ai.tsx",
        lineNumber: 113,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/ai.tsx",
        lineNumber: 112,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/ai.tsx",
      lineNumber: 110,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/ai.tsx",
      lineNumber: 108,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/ai.tsx",
    lineNumber: 106,
    columnNumber: 10
  }, this);
}
_c19 = Ai;
var _c19;
$RefreshReg$(_c19, "Ai");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Ai as default
};
//# sourceMappingURL=/build/routes/ai-MYEDJ6RA.js.map
