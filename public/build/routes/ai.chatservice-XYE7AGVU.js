import {
  $e
} from "/build/_shared/chunk-L4UBQWNJ.js";
import {
  kpiChat
} from "/build/_shared/chunk-657MOTET.js";
import "/build/_shared/chunk-ZHRRJYGJ.js";
import "/build/_shared/chunk-TTN7GJHC.js";
import {
  CircleStackIcon_default,
  LightBulbIcon_default,
  WrenchScrewdriverIcon_default
} from "/build/_shared/chunk-BWWX2MUZ.js";
import "/build/_shared/chunk-ZSUFT5EU.js";
import "/build/_shared/chunk-JKKPAHGM.js";
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
} from "/build/_shared/chunk-6EOJRDC7.js";
import "/build/_shared/chunk-P5OGMUJN.js";
import "/build/_shared/chunk-WAFXOQC7.js";
import {
  Button
} from "/build/_shared/chunk-4U2ZCKCX.js";
import "/build/_shared/chunk-TRC5XD27.js";
import "/build/_shared/chunk-ELWJTL4F.js";
import "/build/_shared/chunk-Y3Q3TNJF.js";
import {
  Link
} from "/build/_shared/chunk-NON4LQMM.js";
import "/build/_shared/chunk-GIAAE3CH.js";
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

// app/routes/ai.chatservice.jsx
var import_react = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\ai.chatservice.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\ai.chatservice.jsx"
  );
  import.meta.hot.lastModified = "1710838767226.3672";
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
  const [messages, setMessages] = (0, import_react.useState)([]);
  const [isSidebarOpen, setIsSidebarOpen] = (0, import_react.useState)(false);
  const [isSubmitting, setIsSubmitting] = (0, import_react.useState)(false);
  const endOfMessagesRef = (0, import_react.useRef)(null);
  const textareaRef = (0, import_react.useRef)(null);
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
  (0, import_react.useEffect)(() => {
    endOfMessagesRef.current?.scrollIntoView({
      behavior: "smooth"
    });
  }, [messages]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `flex ${isSidebarOpen ? "" : "xl:flex"} h-screen`, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex h-screen w-full flex-col items-center bg-white", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "max-w-4xl w-4/6 mx-auto  flex-grow overflow-y-auto", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mx-auto mt-2 flex w-full max-w-full text-base", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative flex  h-10 w-10  items-center justify-center rounded-lg bg-white border text-blue-900 ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChatBubbleOvalLeftEllipsisIcon_default, { className: "h-6 w-6" }, void 0, false, {
            fileName: "app/routes/ai.chatservice.jsx",
            lineNumber: 144,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/ai.chatservice.jsx",
            lineNumber: 143,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative inset-0 mx-2 flex w-full flex-col rounded-lg border p-4 text-gray-800 shadow-lg bg-white", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "font-semibold text-blue-900", children: "ChatGPT" }, void 0, false, {
              fileName: "app/routes/ai.chatservice.jsx",
              lineNumber: 148,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "break-words text-lg", children: "Hello! It's great to connect with you. How can I assist you today?" }, void 0, false, {
              fileName: "app/routes/ai.chatservice.jsx",
              lineNumber: 149,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/ai.chatservice.jsx",
            lineNumber: 147,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/ai.chatservice.jsx",
          lineNumber: 142,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "my-4 flex text-base", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative flex  h-10 w-10  items-center justify-center rounded-lg", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { className: "h-10 w-10 rounded-lg", src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80", alt: "profile" }, void 0, false, {
            fileName: "app/routes/ai.chatservice.jsx",
            lineNumber: 159,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/ai.chatservice.jsx",
            lineNumber: 158,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mx-2 w-full p-0.5 rounded-lg bg-gradient-to-t from-indigo-400 via-cyan-400 to-sky-500 shadow-lg", children: [
            " ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex\r\n          w-full flex-col relative  bg-white p-4 shadow rounded-lg ", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-base font-medium text-gray-900", children: "What would you have done differently if you ran Jurassic Park?" }, void 0, false, {
                fileName: "app/routes/ai.chatservice.jsx",
                lineNumber: 165,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-1 break-words text-lg", children: "Hello! It great to connect with you. How can I assist you today?, Hello! It great to connect with you. How can I assist you today?, Hello! It great to connect with you. How can I assist you today?" }, void 0, false, {
                fileName: "app/routes/ai.chatservice.jsx",
                lineNumber: 169,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-4 pt-2 flex justify-between border-t", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex space-x-4", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "inline-flex items-center text-sm", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", className: "inline-flex  text-gray-400 hover:text-gray-500", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HandThumbUpIcon_default, { className: "h-5 w-5", "aria-hidden": "true" }, void 0, false, {
                    fileName: "app/routes/ai.chatservice.jsx",
                    lineNumber: 180,
                    columnNumber: 27
                  }, this) }, void 0, false, {
                    fileName: "app/routes/ai.chatservice.jsx",
                    lineNumber: 179,
                    columnNumber: 25
                  }, this) }, void 0, false, {
                    fileName: "app/routes/ai.chatservice.jsx",
                    lineNumber: 178,
                    columnNumber: 23
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "inline-flex items-center text-sm", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", className: "inline-flex space-x-2 text-gray-400 hover:text-gray-500", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChatBubbleLeftEllipsisIcon_default, { className: "h-5 w-5", "aria-hidden": "true" }, void 0, false, {
                    fileName: "app/routes/ai.chatservice.jsx",
                    lineNumber: 185,
                    columnNumber: 27
                  }, this) }, void 0, false, {
                    fileName: "app/routes/ai.chatservice.jsx",
                    lineNumber: 184,
                    columnNumber: 25
                  }, this) }, void 0, false, {
                    fileName: "app/routes/ai.chatservice.jsx",
                    lineNumber: 183,
                    columnNumber: 23
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "inline-flex items-center text-sm", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", className: "inline-flex space-x-2 text-gray-400 hover:text-gray-500", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(EyeIcon_default, { className: "h-5 w-5", "aria-hidden": "true" }, void 0, false, {
                    fileName: "app/routes/ai.chatservice.jsx",
                    lineNumber: 190,
                    columnNumber: 27
                  }, this) }, void 0, false, {
                    fileName: "app/routes/ai.chatservice.jsx",
                    lineNumber: 189,
                    columnNumber: 25
                  }, this) }, void 0, false, {
                    fileName: "app/routes/ai.chatservice.jsx",
                    lineNumber: 188,
                    columnNumber: 23
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/ai.chatservice.jsx",
                  lineNumber: 177,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex text-sm", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "inline-flex items-center text-sm", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", className: "inline-flex space-x-2 text-gray-400 hover:text-gray-500", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ShareIcon_default, { className: "h-5 w-5", "aria-hidden": "true" }, void 0, false, {
                  fileName: "app/routes/ai.chatservice.jsx",
                  lineNumber: 197,
                  columnNumber: 27
                }, this) }, void 0, false, {
                  fileName: "app/routes/ai.chatservice.jsx",
                  lineNumber: 196,
                  columnNumber: 25
                }, this) }, void 0, false, {
                  fileName: "app/routes/ai.chatservice.jsx",
                  lineNumber: 195,
                  columnNumber: 23
                }, this) }, void 0, false, {
                  fileName: "app/routes/ai.chatservice.jsx",
                  lineNumber: 194,
                  columnNumber: 21
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/ai.chatservice.jsx",
                lineNumber: 176,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/ai.chatservice.jsx",
              lineNumber: 163,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/ai.chatservice.jsx",
            lineNumber: 161,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/ai.chatservice.jsx",
          lineNumber: 157,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "my-4 flex text-base", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative flex  h-10 w-10  items-center justify-center rounded-lg", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { className: "h-10 w-10 rounded-lg", src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80", alt: "profile" }, void 0, false, {
            fileName: "app/routes/ai.chatservice.jsx",
            lineNumber: 210,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/ai.chatservice.jsx",
            lineNumber: 209,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mx-2 w-full p-0.5 rounded-lg bg-gradient-to-t from-indigo-400 via-cyan-400 to-sky-500 shadow-lg", children: [
            " ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex\r\n          w-full flex-col relative  bg-white p-4 shadow rounded-lg ", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-base font-medium text-gray-900", children: "What would you have done differently if you ran Jurassic Park?" }, void 0, false, {
                fileName: "app/routes/ai.chatservice.jsx",
                lineNumber: 216,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { className: "p-4 grid grid-cols-1 gap-2 k-list-disc", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: "1" }, void 0, false, {
                  fileName: "app/routes/ai.chatservice.jsx",
                  lineNumber: 221,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: "1" }, void 0, false, {
                  fileName: "app/routes/ai.chatservice.jsx",
                  lineNumber: 222,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: "1" }, void 0, false, {
                  fileName: "app/routes/ai.chatservice.jsx",
                  lineNumber: 223,
                  columnNumber: 21
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/ai.chatservice.jsx",
                lineNumber: 220,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { className: "grid grid-cols-1 gap-6 md:grid-cols-2 rounded-lg  p-4", children: kpiChat.map((kpi) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { className: "col-span-1 flex flex-col divide-y divide-white  bg-white  rounded-lg border shadow-lg", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative flex flex-1 flex-col py-2 pl-2", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-baseline gap-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-base m-2 font-medium text-gray-900", children: kpi.Name }, void 0, false, {
                    fileName: "app/routes/ai.chatservice.jsx",
                    lineNumber: 231,
                    columnNumber: 31
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "font-display text-d-h3 mb-3 text-4xl font-bold text-black", children: kpi.Value }, void 0, false, {
                    fileName: "app/routes/ai.chatservice.jsx",
                    lineNumber: 234,
                    columnNumber: 31
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/ai.chatservice.jsx",
                  lineNumber: 230,
                  columnNumber: 29
                }, this) }, void 0, false, {
                  fileName: "app/routes/ai.chatservice.jsx",
                  lineNumber: 229,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: kpi.container }, void 0, false, {
                  fileName: "app/routes/ai.chatservice.jsx",
                  lineNumber: 239,
                  columnNumber: 27
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/ai.chatservice.jsx",
                lineNumber: 228,
                columnNumber: 25
              }, this) }, kpi.Name, false, {
                fileName: "app/routes/ai.chatservice.jsx",
                lineNumber: 227,
                columnNumber: 41
              }, this)) }, void 0, false, {
                fileName: "app/routes/ai.chatservice.jsx",
                lineNumber: 226,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "pt-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "m-2 h-10 flex justify-between", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { className: "k-bg-inverse flex-1  mx-2 text-white", variant: "outline", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WrenchScrewdriverIcon_default, { className: "h-5 w-5 ", "aria-hidden": "true" }, void 0, false, {
                    fileName: "app/routes/ai.chatservice.jsx",
                    lineNumber: 246,
                    columnNumber: 25
                  }, this),
                  "Analyze"
                ] }, void 0, true, {
                  fileName: "app/routes/ai.chatservice.jsx",
                  lineNumber: 245,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { className: " k-bg-inverse flex-1 mx-2 text-white", variant: "outline", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CircleStackIcon_default, { className: "mr-2 h-5 w-5", "aria-hidden": "true" }, void 0, false, {
                    fileName: "app/routes/ai.chatservice.jsx",
                    lineNumber: 250,
                    columnNumber: 25
                  }, this),
                  "Explore Data"
                ] }, void 0, true, {
                  fileName: "app/routes/ai.chatservice.jsx",
                  lineNumber: 249,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { className: "k-bg-inverse flex-1 mx-2 text-white", variant: "outline", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LightBulbIcon_default, { className: "mr-2 h-5 w-5", "aria-hidden": "true" }, void 0, false, {
                    fileName: "app/routes/ai.chatservice.jsx",
                    lineNumber: 254,
                    columnNumber: 25
                  }, this),
                  "Insights"
                ] }, void 0, true, {
                  fileName: "app/routes/ai.chatservice.jsx",
                  lineNumber: 253,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/ai.chatservice.jsx",
                lineNumber: 244,
                columnNumber: 21
              }, this) }, void 0, false, {
                fileName: "app/routes/ai.chatservice.jsx",
                lineNumber: 243,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/ai.chatservice.jsx",
              lineNumber: 214,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/ai.chatservice.jsx",
            lineNumber: 212,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/ai.chatservice.jsx",
          lineNumber: 208,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/ai.chatservice.jsx",
        lineNumber: 141,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", className: "rounded-full p-2 text-black border shadow-lg", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowDownIcon_default, { className: "h-5 w-5", "aria-hidden": "true" }, void 0, false, {
        fileName: "app/routes/ai.chatservice.jsx",
        lineNumber: 267,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/routes/ai.chatservice.jsx",
        lineNumber: 266,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/ai.chatservice.jsx",
        lineNumber: 265,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", { onSubmit: handleSubmit, className: "mx-auto flex h-20 w-full max-w-7xl p-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-grow rounded-md bg-gray-100 p-2.5", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("textarea", { required: true, name: "prompt", id: "prompt", placeholder: "Message ChatGPT...", ref: textareaRef, className: "flex-grow text-lg bg-gray-100 outline-none", style: {
            resize: "none"
          } }, void 0, false, {
            fileName: "app/routes/ai.chatservice.jsx",
            lineNumber: 273,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", disabled: isSubmitting, className: `ml-2 rounded-md text-white ${isSubmitting ? "opacity-50" : ""}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PaperAirplaneIcon_default, { className: "h-5 w-5 text-gray-500" }, void 0, false, {
            fileName: "app/routes/ai.chatservice.jsx",
            lineNumber: 277,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/ai.chatservice.jsx",
            lineNumber: 276,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/ai.chatservice.jsx",
          lineNumber: 272,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex text-blue-900 ", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", disabled: isSubmitting, className: `mx-2 flex items-center justify-center rounded-md bg-gray-100 p-2.5 ${isSubmitting ? "opacity-50" : ""}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowUpTrayIcon_default, { className: "h-5 w-5 font-bold stroke-2" }, void 0, false, {
            fileName: "app/routes/ai.chatservice.jsx",
            lineNumber: 283,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/ai.chatservice.jsx",
            lineNumber: 282,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", disabled: isSubmitting, className: `flex items-center justify-center rounded-md bg-gray-100 p-2.5 ${isSubmitting ? "opacity-50" : ""}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AdjustmentsVerticalIcon_default, { className: "h-5 w-5 font-bold stroke-2" }, void 0, false, {
            fileName: "app/routes/ai.chatservice.jsx",
            lineNumber: 286,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/ai.chatservice.jsx",
            lineNumber: 285,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/ai.chatservice.jsx",
          lineNumber: 281,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/ai.chatservice.jsx",
        lineNumber: 271,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/ai.chatservice.jsx",
      lineNumber: 140,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `sidebar bg-slate-50 px-4  ${isSidebarOpen ? "block" : "hidden"} w-96 transition delay-150 duration-300 shadow-lg `, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex  h-screen flex-col gap-y-4 pb-4 ", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex my-4 justify-between ", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { href: "#", className: "flex rounded-md p-2 mr-2 text-base font-semibold leading-6 bg-white text-blue-900 hover:bg-gray-100 hover:text-gray-200 border", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(XMarkIcon_default, { className: "h-6 w-6 shrink-0", "aria-hidden": "true" }, void 0, false, {
          fileName: "app/routes/ai.chatservice.jsx",
          lineNumber: 296,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/routes/ai.chatservice.jsx",
          lineNumber: 295,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { href: "#", className: "flex-1 rounded-md px-2 py-2 text-base font-semibold leading-6 bg-white text-blue-900 hover:bg-gray-100 hover:text-gray-white border", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChatBubbleOvalLeftIcon_default, { className: "h-6 w-6 mr-2", "aria-hidden": "true" }, void 0, false, {
            fileName: "app/routes/ai.chatservice.jsx",
            lineNumber: 300,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "flex items-center text-sm ", children: "New Conversation" }, void 0, false, {
            fileName: "app/routes/ai.chatservice.jsx",
            lineNumber: 301,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/ai.chatservice.jsx",
          lineNumber: 299,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/routes/ai.chatservice.jsx",
          lineNumber: 298,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/ai.chatservice.jsx",
        lineNumber: 294,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "rounded-lg", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)($e.Group, { className: "flex justify-between", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)($e.List, { className: "", children: tabs.map((tab) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)($e, { className: ({
        selected
      }) => classNames("flex flex-col border-black p-2 text-center text-base font-semibold mx-1 outline-none", selected ? "border-b-2 text-blue-900" : "text-gray-400 hover:text-gray-700"), children: tab.name }, tab.name, false, {
        fileName: "app/routes/ai.chatservice.jsx",
        lineNumber: 310,
        columnNumber: 36
      }, this)) }, void 0, false, {
        fileName: "app/routes/ai.chatservice.jsx",
        lineNumber: 309,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "app/routes/ai.chatservice.jsx",
        lineNumber: 308,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/routes/ai.chatservice.jsx",
        lineNumber: 307,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", { className: "mt-4 flex flex-1 flex-col gap-y-7", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-1 flex-col ", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white  rounded-md p-4 font-semibold leading-6 border", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { className: "flex items-center justify-between text-base text-blue-900 hover:text-gray-700", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Hello, World!" }, void 0, false, {
            fileName: "app/routes/ai.chatservice.jsx",
            lineNumber: 322,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "flex items-center justify-between space-x-2 mr-2", children: [
            " ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HeartIcon_default, { className: " h-4 w-4" }, void 0, false, {
              fileName: "app/routes/ai.chatservice.jsx",
              lineNumber: 326,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TrashIcon_default, { className: "h-4 w-4" }, void 0, false, {
              fileName: "app/routes/ai.chatservice.jsx",
              lineNumber: 327,
              columnNumber: 23
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/ai.chatservice.jsx",
            lineNumber: 324,
            columnNumber: 21
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/ai.chatservice.jsx",
          lineNumber: 321,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "app/routes/ai.chatservice.jsx",
          lineNumber: 320,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-auto m-2 rounded-md p-2 font-semibold leading-6 text-gray-400  hover:text-gray-500 ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { href: "#", className: "flex items-center justify-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InformationCircleIcon_default, { className: "h-6 w-6", "aria-hidden": "true" }, void 0, false, {
            fileName: "app/routes/ai.chatservice.jsx",
            lineNumber: 334,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "flex items-center ml-4 text-lg", children: [
            " ",
            "Information"
          ] }, void 0, true, {
            fileName: "app/routes/ai.chatservice.jsx",
            lineNumber: 335,
            columnNumber: 21
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/ai.chatservice.jsx",
          lineNumber: 333,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "app/routes/ai.chatservice.jsx",
          lineNumber: 332,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/ai.chatservice.jsx",
        lineNumber: 319,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/routes/ai.chatservice.jsx",
        lineNumber: 318,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/ai.chatservice.jsx",
      lineNumber: 293,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/ai.chatservice.jsx",
      lineNumber: 292,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/ai.chatservice.jsx",
    lineNumber: 139,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/ai.chatservice.jsx",
    lineNumber: 138,
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
//# sourceMappingURL=/build/routes/ai.chatservice-XYE7AGVU.js.map
