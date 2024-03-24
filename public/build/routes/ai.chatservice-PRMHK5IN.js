import {
  $e
} from "/build/_shared/chunk-6BTHVKS6.js";
import {
  Button
} from "/build/_shared/chunk-LFFJ36YN.js";
import "/build/_shared/chunk-TRC5XD27.js";
import "/build/_shared/chunk-ELWJTL4F.js";
import {
  kpiChat
} from "/build/_shared/chunk-Q3ZRF3CQ.js";
import "/build/_shared/chunk-XBDTUPGL.js";
import "/build/_shared/chunk-Y3Q3TNJF.js";
import {
  Link
} from "/build/_shared/chunk-NON4LQMM.js";
import "/build/_shared/chunk-QRAMQPBO.js";
import "/build/_shared/chunk-FNVTLCHO.js";
import "/build/_shared/chunk-ZSUFT5EU.js";
import {
  CircleStackIcon_default,
  LightBulbIcon_default,
  WrenchScrewdriverIcon_default
} from "/build/_shared/chunk-QA7IBH2P.js";
import "/build/_shared/chunk-JKKPAHGM.js";
import "/build/_shared/chunk-OP7Q5FNF.js";
import "/build/_shared/chunk-EZ7JG6XF.js";
import {
  AdjustmentsVerticalIcon_default,
  ArrowDownIcon_default,
  ArrowUpTrayIcon_default,
  ChatBubbleLeftEllipsisIcon_default,
  ChatBubbleOvalLeftEllipsisIcon_default,
  ChatBubbleOvalLeftIcon_default,
  EyeIcon_default,
  HandThumbUpIcon_default,
  HeartIcon_default,
  InformationCircleIcon_default,
  PaperAirplaneIcon_default,
  ShareIcon_default,
  TrashIcon_default,
  XMarkIcon_default
} from "/build/_shared/chunk-RRHQD3BR.js";
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

// app/routes/ai.chatservice.tsx
var import_react3 = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\ai.chatservice.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\ai.chatservice.tsx"
  );
  import.meta.hot.lastModified = "1711109725294.4204";
}
function handleChatGPTStream(prompt, onData) {
  const eventSource = new EventSource(`/demo/gpt?prompt=${encodeURIComponent(prompt)}`);
  eventSource.onmessage = (event) => {
    const data = JSON.parse(event.data);
    if (data.type === "done") {
      eventSource.close();
    } else {
      let content = data?.choices?.[0]?.delta?.content;
      if (content) {
        onData(content);
      }
    }
  };
  eventSource.onerror = (event) => {
    console.error("EventSource failed:", event);
    eventSource.close();
  };
}
var tabs = [{
  name: "Conversations",
  href: "#",
  count: "52",
  current: false
}, {
  name: "Prompts",
  href: "#",
  count: "6",
  current: true
}];
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
function MyComponent() {
  _s();
  const [messages, setMessages] = (0, import_react3.useState)([]);
  const [isSidebarOpen, setIsSidebarOpen] = (0, import_react3.useState)(false);
  const [isSubmitting, setIsSubmitting] = (0, import_react3.useState)(false);
  const endOfMessagesRef = (0, import_react3.useRef)(null);
  const textareaRef = (0, import_react3.useRef)(null);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const appendToLastMessage = (newText) => {
    setMessages((prevMessages) => {
      const lastMessage = prevMessages[prevMessages.length - 1];
      if (lastMessage && lastMessage.role === "gpt") {
        return [...prevMessages.slice(0, -1), {
          ...lastMessage,
          content: lastMessage.content + newText
        }];
      } else {
        return [...prevMessages, {
          role: "gpt",
          content: newText
        }];
      }
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(e.target);
    const prompt = formData.get("prompt");
    setMessages((prevMessages) => [...prevMessages, {
      role: "user",
      content: prompt
    }]);
    textareaRef.current.value = "";
    handleChatGPTStream(prompt, appendToLastMessage, () => {
      setIsSubmitting(false);
      console.log("Streaming complete");
    });
  };
  (0, import_react3.useEffect)(() => {
    endOfMessagesRef.current?.scrollIntoView({
      behavior: "smooth"
    });
  }, [messages]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `flex ${isSidebarOpen ? "" : "xl:flex"} h-screen`, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex h-screen w-full flex-col items-center bg-white", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "max-w-4xl w-4/6 mx-auto  flex-grow overflow-y-auto", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mx-auto mt-2 flex w-full max-w-full text-base", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative flex  h-10 w-10  items-center justify-center rounded-lg bg-white border text-blue-900 ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChatBubbleOvalLeftEllipsisIcon_default, { className: "h-6 w-6" }, void 0, false, {
            fileName: "app/routes/ai.chatservice.tsx",
            lineNumber: 143,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/ai.chatservice.tsx",
            lineNumber: 142,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative inset-0 mx-2 flex w-full flex-col rounded-lg border p-4 text-gray-800 shadow-lg bg-white", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "font-semibold text-blue-900", children: "ChatGPT" }, void 0, false, {
              fileName: "app/routes/ai.chatservice.tsx",
              lineNumber: 147,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "break-words text-lg", children: "Hello! It's great to connect with you. How can I assist you today?" }, void 0, false, {
              fileName: "app/routes/ai.chatservice.tsx",
              lineNumber: 148,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/ai.chatservice.tsx",
            lineNumber: 146,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/ai.chatservice.tsx",
          lineNumber: 141,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "my-4 flex text-base", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative flex  h-10 w-10  items-center justify-center rounded-lg", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { className: "h-10 w-10 rounded-lg", src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80", alt: "profile" }, void 0, false, {
            fileName: "app/routes/ai.chatservice.tsx",
            lineNumber: 158,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/ai.chatservice.tsx",
            lineNumber: 157,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mx-2 w-full p-0.5 rounded-lg bg-gradient-to-t from-indigo-400 via-cyan-400 to-sky-500 shadow-lg", children: [
            " ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex\r\n          w-full flex-col relative  bg-white p-4 shadow rounded-lg ", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-base font-medium text-gray-900", children: "What would you have done differently if you ran Jurassic Park?" }, void 0, false, {
                fileName: "app/routes/ai.chatservice.tsx",
                lineNumber: 164,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-1 break-words text-lg", children: "Hello! It great to connect with you. How can I assist you today?, Hello! It great to connect with you. How can I assist you today?, Hello! It great to connect with you. How can I assist you today?" }, void 0, false, {
                fileName: "app/routes/ai.chatservice.tsx",
                lineNumber: 168,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-4 pt-2 flex justify-between border-t", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex space-x-4", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "inline-flex items-center text-sm", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", className: "inline-flex  text-gray-400 hover:text-gray-500", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HandThumbUpIcon_default, { className: "h-5 w-5", "aria-hidden": "true" }, void 0, false, {
                    fileName: "app/routes/ai.chatservice.tsx",
                    lineNumber: 179,
                    columnNumber: 27
                  }, this) }, void 0, false, {
                    fileName: "app/routes/ai.chatservice.tsx",
                    lineNumber: 178,
                    columnNumber: 25
                  }, this) }, void 0, false, {
                    fileName: "app/routes/ai.chatservice.tsx",
                    lineNumber: 177,
                    columnNumber: 23
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "inline-flex items-center text-sm", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", className: "inline-flex space-x-2 text-gray-400 hover:text-gray-500", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChatBubbleLeftEllipsisIcon_default, { className: "h-5 w-5", "aria-hidden": "true" }, void 0, false, {
                    fileName: "app/routes/ai.chatservice.tsx",
                    lineNumber: 184,
                    columnNumber: 27
                  }, this) }, void 0, false, {
                    fileName: "app/routes/ai.chatservice.tsx",
                    lineNumber: 183,
                    columnNumber: 25
                  }, this) }, void 0, false, {
                    fileName: "app/routes/ai.chatservice.tsx",
                    lineNumber: 182,
                    columnNumber: 23
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "inline-flex items-center text-sm", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", className: "inline-flex space-x-2 text-gray-400 hover:text-gray-500", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(EyeIcon_default, { className: "h-5 w-5", "aria-hidden": "true" }, void 0, false, {
                    fileName: "app/routes/ai.chatservice.tsx",
                    lineNumber: 189,
                    columnNumber: 27
                  }, this) }, void 0, false, {
                    fileName: "app/routes/ai.chatservice.tsx",
                    lineNumber: 188,
                    columnNumber: 25
                  }, this) }, void 0, false, {
                    fileName: "app/routes/ai.chatservice.tsx",
                    lineNumber: 187,
                    columnNumber: 23
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/ai.chatservice.tsx",
                  lineNumber: 176,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex text-sm", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "inline-flex items-center text-sm", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", className: "inline-flex space-x-2 text-gray-400 hover:text-gray-500", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ShareIcon_default, { className: "h-5 w-5", "aria-hidden": "true" }, void 0, false, {
                  fileName: "app/routes/ai.chatservice.tsx",
                  lineNumber: 196,
                  columnNumber: 27
                }, this) }, void 0, false, {
                  fileName: "app/routes/ai.chatservice.tsx",
                  lineNumber: 195,
                  columnNumber: 25
                }, this) }, void 0, false, {
                  fileName: "app/routes/ai.chatservice.tsx",
                  lineNumber: 194,
                  columnNumber: 23
                }, this) }, void 0, false, {
                  fileName: "app/routes/ai.chatservice.tsx",
                  lineNumber: 193,
                  columnNumber: 21
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/ai.chatservice.tsx",
                lineNumber: 175,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/ai.chatservice.tsx",
              lineNumber: 162,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/ai.chatservice.tsx",
            lineNumber: 160,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/ai.chatservice.tsx",
          lineNumber: 156,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "my-4 flex text-base", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative flex  h-10 w-10  items-center justify-center rounded-lg", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { className: "h-10 w-10 rounded-lg", src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80", alt: "profile" }, void 0, false, {
            fileName: "app/routes/ai.chatservice.tsx",
            lineNumber: 209,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/ai.chatservice.tsx",
            lineNumber: 208,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mx-2 w-full p-0.5 rounded-lg bg-gradient-to-t from-indigo-400 via-cyan-400 to-sky-500 shadow-lg", children: [
            " ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex\r\n          w-full flex-col relative  bg-white p-4 shadow rounded-lg ", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-base font-medium text-gray-900", children: "What would you have done differently if you ran Jurassic Park?" }, void 0, false, {
                fileName: "app/routes/ai.chatservice.tsx",
                lineNumber: 215,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { className: "p-4 grid grid-cols-1 gap-2 k-list-disc", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: "1" }, void 0, false, {
                  fileName: "app/routes/ai.chatservice.tsx",
                  lineNumber: 220,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: "1" }, void 0, false, {
                  fileName: "app/routes/ai.chatservice.tsx",
                  lineNumber: 221,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: "1" }, void 0, false, {
                  fileName: "app/routes/ai.chatservice.tsx",
                  lineNumber: 222,
                  columnNumber: 21
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/ai.chatservice.tsx",
                lineNumber: 219,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { className: "grid grid-cols-1 gap-6 md:grid-cols-2 rounded-lg  p-4", children: kpiChat.map((kpi) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { className: "col-span-1 flex flex-col divide-y divide-white  bg-white  rounded-lg border shadow-lg", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative flex flex-1 flex-col py-2 pl-2", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-baseline gap-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-base m-2 font-medium text-gray-900", children: kpi.Name }, void 0, false, {
                    fileName: "app/routes/ai.chatservice.tsx",
                    lineNumber: 230,
                    columnNumber: 31
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "font-display text-d-h3 mb-3 text-4xl font-bold text-black", children: kpi.Value }, void 0, false, {
                    fileName: "app/routes/ai.chatservice.tsx",
                    lineNumber: 233,
                    columnNumber: 31
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/ai.chatservice.tsx",
                  lineNumber: 229,
                  columnNumber: 29
                }, this) }, void 0, false, {
                  fileName: "app/routes/ai.chatservice.tsx",
                  lineNumber: 228,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: kpi.container }, void 0, false, {
                  fileName: "app/routes/ai.chatservice.tsx",
                  lineNumber: 238,
                  columnNumber: 27
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/ai.chatservice.tsx",
                lineNumber: 227,
                columnNumber: 25
              }, this) }, kpi.Name, false, {
                fileName: "app/routes/ai.chatservice.tsx",
                lineNumber: 226,
                columnNumber: 41
              }, this)) }, void 0, false, {
                fileName: "app/routes/ai.chatservice.tsx",
                lineNumber: 225,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "pt-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "m-2 h-10 flex justify-between", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { className: "k-bg-inverse flex-1  mx-2 text-white", variant: "outline", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WrenchScrewdriverIcon_default, { className: "h-5 w-5 ", "aria-hidden": "true" }, void 0, false, {
                    fileName: "app/routes/ai.chatservice.tsx",
                    lineNumber: 245,
                    columnNumber: 25
                  }, this),
                  "Analyze"
                ] }, void 0, true, {
                  fileName: "app/routes/ai.chatservice.tsx",
                  lineNumber: 244,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { className: " k-bg-inverse flex-1 mx-2 text-white", variant: "outline", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CircleStackIcon_default, { className: "mr-2 h-5 w-5", "aria-hidden": "true" }, void 0, false, {
                    fileName: "app/routes/ai.chatservice.tsx",
                    lineNumber: 249,
                    columnNumber: 25
                  }, this),
                  "Explore Data"
                ] }, void 0, true, {
                  fileName: "app/routes/ai.chatservice.tsx",
                  lineNumber: 248,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { className: "k-bg-inverse flex-1 mx-2 text-white", variant: "outline", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LightBulbIcon_default, { className: "mr-2 h-5 w-5", "aria-hidden": "true" }, void 0, false, {
                    fileName: "app/routes/ai.chatservice.tsx",
                    lineNumber: 253,
                    columnNumber: 25
                  }, this),
                  "Insights"
                ] }, void 0, true, {
                  fileName: "app/routes/ai.chatservice.tsx",
                  lineNumber: 252,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/ai.chatservice.tsx",
                lineNumber: 243,
                columnNumber: 21
              }, this) }, void 0, false, {
                fileName: "app/routes/ai.chatservice.tsx",
                lineNumber: 242,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/ai.chatservice.tsx",
              lineNumber: 213,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/ai.chatservice.tsx",
            lineNumber: 211,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/ai.chatservice.tsx",
          lineNumber: 207,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/ai.chatservice.tsx",
        lineNumber: 140,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", className: "rounded-full p-2 text-black border shadow-lg", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowDownIcon_default, { className: "h-5 w-5", "aria-hidden": "true" }, void 0, false, {
        fileName: "app/routes/ai.chatservice.tsx",
        lineNumber: 266,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/routes/ai.chatservice.tsx",
        lineNumber: 265,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/ai.chatservice.tsx",
        lineNumber: 264,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", { onSubmit: handleSubmit, className: "mx-auto flex h-20 w-full max-w-7xl p-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-grow rounded-md bg-gray-100 p-2.5", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("textarea", { required: true, name: "prompt", id: "prompt", placeholder: "Message ChatGPT...", ref: textareaRef, className: "flex-grow text-lg bg-gray-100 outline-none", style: {
            resize: "none"
          } }, void 0, false, {
            fileName: "app/routes/ai.chatservice.tsx",
            lineNumber: 272,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", disabled: isSubmitting, className: `ml-2 rounded-md text-white ${isSubmitting ? "opacity-50" : ""}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PaperAirplaneIcon_default, { className: "h-5 w-5 text-gray-500" }, void 0, false, {
            fileName: "app/routes/ai.chatservice.tsx",
            lineNumber: 276,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/ai.chatservice.tsx",
            lineNumber: 275,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/ai.chatservice.tsx",
          lineNumber: 271,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex text-blue-900 ", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", disabled: isSubmitting, className: `mx-2 flex items-center justify-center rounded-md bg-gray-100 p-2.5 ${isSubmitting ? "opacity-50" : ""}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowUpTrayIcon_default, { className: "h-5 w-5 font-bold stroke-2" }, void 0, false, {
            fileName: "app/routes/ai.chatservice.tsx",
            lineNumber: 282,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/ai.chatservice.tsx",
            lineNumber: 281,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", disabled: isSubmitting, className: `flex items-center justify-center rounded-md bg-gray-100 p-2.5 ${isSubmitting ? "opacity-50" : ""}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AdjustmentsVerticalIcon_default, { className: "h-5 w-5 font-bold stroke-2" }, void 0, false, {
            fileName: "app/routes/ai.chatservice.tsx",
            lineNumber: 285,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/ai.chatservice.tsx",
            lineNumber: 284,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/ai.chatservice.tsx",
          lineNumber: 280,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/ai.chatservice.tsx",
        lineNumber: 270,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/ai.chatservice.tsx",
      lineNumber: 139,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `sidebar bg-slate-50 px-4  ${isSidebarOpen ? "block" : "hidden"} w-96 transition delay-150 duration-300 shadow-lg `, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex  h-screen flex-col gap-y-4 pb-4 ", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex my-4 justify-between ", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { href: "#", className: "flex rounded-md p-2 mr-2 text-base font-semibold leading-6 bg-white text-blue-900 hover:bg-gray-100 hover:text-gray-200 border", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(XMarkIcon_default, { className: "h-6 w-6 shrink-0", "aria-hidden": "true" }, void 0, false, {
          fileName: "app/routes/ai.chatservice.tsx",
          lineNumber: 295,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/routes/ai.chatservice.tsx",
          lineNumber: 294,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { href: "#", className: "flex-1 rounded-md px-2 py-2 text-base font-semibold leading-6 bg-white text-blue-900 hover:bg-gray-100 hover:text-gray-white border", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChatBubbleOvalLeftIcon_default, { className: "h-6 w-6 mr-2", "aria-hidden": "true" }, void 0, false, {
            fileName: "app/routes/ai.chatservice.tsx",
            lineNumber: 299,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "flex items-center text-sm ", children: "New Conversation" }, void 0, false, {
            fileName: "app/routes/ai.chatservice.tsx",
            lineNumber: 300,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/ai.chatservice.tsx",
          lineNumber: 298,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/routes/ai.chatservice.tsx",
          lineNumber: 297,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/ai.chatservice.tsx",
        lineNumber: 293,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "rounded-lg", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)($e.Group, { className: "flex justify-between", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)($e.List, { className: "", children: tabs.map((tab) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)($e, { className: ({
        selected
      }) => classNames("flex flex-col border-black p-2 text-center text-base font-semibold mx-1 outline-none", selected ? "border-b-2 text-blue-900" : "text-gray-400 hover:text-gray-700"), children: tab.name }, tab.name, false, {
        fileName: "app/routes/ai.chatservice.tsx",
        lineNumber: 309,
        columnNumber: 36
      }, this)) }, void 0, false, {
        fileName: "app/routes/ai.chatservice.tsx",
        lineNumber: 308,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "app/routes/ai.chatservice.tsx",
        lineNumber: 307,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/routes/ai.chatservice.tsx",
        lineNumber: 306,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", { className: "mt-4 flex flex-1 flex-col gap-y-7", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-1 flex-col ", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white  rounded-md p-4 font-semibold leading-6 border", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { className: "flex items-center justify-between text-base text-blue-900 hover:text-gray-700", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Hello, World!" }, void 0, false, {
            fileName: "app/routes/ai.chatservice.tsx",
            lineNumber: 321,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "flex items-center justify-between space-x-2 mr-2", children: [
            " ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HeartIcon_default, { className: " h-4 w-4" }, void 0, false, {
              fileName: "app/routes/ai.chatservice.tsx",
              lineNumber: 325,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TrashIcon_default, { className: "h-4 w-4" }, void 0, false, {
              fileName: "app/routes/ai.chatservice.tsx",
              lineNumber: 326,
              columnNumber: 23
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/ai.chatservice.tsx",
            lineNumber: 323,
            columnNumber: 21
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/ai.chatservice.tsx",
          lineNumber: 320,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "app/routes/ai.chatservice.tsx",
          lineNumber: 319,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-auto m-2 rounded-md p-2 font-semibold leading-6 text-gray-400  hover:text-gray-500 ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { href: "#", className: "flex items-center justify-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InformationCircleIcon_default, { className: "h-6 w-6", "aria-hidden": "true" }, void 0, false, {
            fileName: "app/routes/ai.chatservice.tsx",
            lineNumber: 333,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "flex items-center ml-4 text-lg", children: [
            " ",
            "Information"
          ] }, void 0, true, {
            fileName: "app/routes/ai.chatservice.tsx",
            lineNumber: 334,
            columnNumber: 21
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/ai.chatservice.tsx",
          lineNumber: 332,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "app/routes/ai.chatservice.tsx",
          lineNumber: 331,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/ai.chatservice.tsx",
        lineNumber: 318,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/routes/ai.chatservice.tsx",
        lineNumber: 317,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/ai.chatservice.tsx",
      lineNumber: 292,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/ai.chatservice.tsx",
      lineNumber: 291,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/ai.chatservice.tsx",
    lineNumber: 138,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/ai.chatservice.tsx",
    lineNumber: 137,
    columnNumber: 10
  }, this);
}
_s(MyComponent, "ouFE6sl+I3GAnNVIkcLTp1oeyOo=");
_c = MyComponent;
var _c;
$RefreshReg$(_c, "MyComponent");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  MyComponent as default
};
//# sourceMappingURL=/build/routes/ai.chatservice-PRMHK5IN.js.map
