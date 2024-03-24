import {
  DataTable,
  Progress,
  statuses
} from "/build/_shared/chunk-QRSDUAJR.js";
import {
  DataTableColumnHeader
} from "/build/_shared/chunk-L66TXA4L.js";
import "/build/_shared/chunk-YSPQ2ZCH.js";
import "/build/_shared/chunk-OZOMGVIH.js";
import "/build/_shared/chunk-ZPK2AWEZ.js";
import {
  Badge,
  Checkbox
} from "/build/_shared/chunk-CYDWZMPA.js";
import "/build/_shared/chunk-FJ6576BF.js";
import "/build/_shared/chunk-XFJ7VQR3.js";
import "/build/_shared/chunk-66XC2EWC.js";
import "/build/_shared/chunk-HIZXLO3O.js";
import "/build/_shared/chunk-AIC7NVQ5.js";
import "/build/_shared/chunk-CPS4G365.js";
import "/build/_shared/chunk-DQMH5JL2.js";
import "/build/_shared/chunk-YOJGWH76.js";
import "/build/_shared/chunk-KTF7K347.js";
import "/build/_shared/chunk-LFFJ36YN.js";
import "/build/_shared/chunk-TRC5XD27.js";
import "/build/_shared/chunk-ELWJTL4F.js";
import {
  require_node
} from "/build/_shared/chunk-G7CHZRZX.js";
import "/build/_shared/chunk-Y3Q3TNJF.js";
import {
  useLoaderData
} from "/build/_shared/chunk-NON4LQMM.js";
import {
  ChatBubbleOvalLeftEllipsisIcon_default
} from "/build/_shared/chunk-QA7IBH2P.js";
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

// app/routes/ai.data.tsx
var import_node = __toESM(require_node());
var import_react2 = __toESM(require_react());

// app/components/columns-insight-chat.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\columns-insight-chat.tsx"
  );
  import.meta.hot.lastModified = "1711201442653.572";
}
var columns = [
  {
    id: "select",
    header: ({ table }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      Checkbox,
      {
        checked: table.getIsAllPageRowsSelected(),
        onCheckedChange: (value) => table.toggleAllPageRowsSelected(!!value),
        "aria-label": "Select all",
        className: "translate-y-[2px]"
      },
      void 0,
      false,
      {
        fileName: "app/components/columns-insight-chat.tsx",
        lineNumber: 25,
        columnNumber: 7
      },
      this
    ),
    cell: ({ row }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      Checkbox,
      {
        checked: row.getIsSelected(),
        onCheckedChange: (value) => row.toggleSelected(!!value),
        "aria-label": "Select row",
        className: "translate-y-[2px]"
      },
      void 0,
      false,
      {
        fileName: "app/components/columns-insight-chat.tsx",
        lineNumber: 33,
        columnNumber: 7
      },
      this
    ),
    enableSorting: false,
    enableHiding: false
  },
  {
    accessorKey: "id",
    header: ({ column }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DataTableColumnHeader, { column, title: "Insight" }, void 0, false, {
      fileName: "app/components/columns-insight-chat.tsx",
      lineNumber: 46,
      columnNumber: 7
    }, this),
    cell: ({ row }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-[20px]", children: row.getValue("id") }, void 0, false, {
      fileName: "app/components/columns-insight-chat.tsx",
      lineNumber: 48,
      columnNumber: 24
    }, this),
    enableSorting: false,
    enableHiding: false
  },
  {
    accessorKey: "status",
    header: ({ column }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DataTableColumnHeader, { column, title: "Status" }, void 0, false, {
      fileName: "app/components/columns-insight-chat.tsx",
      lineNumber: 55,
      columnNumber: 7
    }, this),
    cell: ({ row }) => {
      const status = statuses.find(
        (status2) => status2.value === row.getValue("status")
      );
      if (!status) {
        return null;
      }
      return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex w-[100px] items-center", children: [
        status && status.icon ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "svg",
          {
            className: `${status.fill} mr-2 h-2 w-2`,
            viewBox: "0 0 6 6",
            "aria-hidden": "true",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("circle", { cx: 3, cy: 3, r: 3 }, void 0, false, {
              fileName: "app/components/columns-insight-chat.tsx",
              lineNumber: 77,
              columnNumber: 17
            }, this)
          },
          void 0,
          false,
          {
            fileName: "app/components/columns-insight-chat.tsx",
            lineNumber: 72,
            columnNumber: 15
          },
          this
        ) : null,
        status && status.label ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: status.label }, void 0, false, {
          fileName: "app/components/columns-insight-chat.tsx",
          lineNumber: 80,
          columnNumber: 39
        }, this) : null,
        " "
      ] }, void 0, true, {
        fileName: "app/components/columns-insight-chat.tsx",
        lineNumber: 70,
        columnNumber: 11
      }, this);
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    }
  },
  {
    accessorKey: "module",
    header: ({ column }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DataTableColumnHeader, { column, title: "Availabilty" }, void 0, false, {
      fileName: "app/components/columns-insight-chat.tsx",
      lineNumber: 92,
      columnNumber: 7
    }, this),
    cell: ({ row }) => {
      const status = statuses.find(
        (status2) => status2.value === row.getValue("status")
      );
      return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: status ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        Badge,
        {
          className: `${status.color} ${status.textClr}`,
          variant: "outline",
          children: row.getValue("module")
        },
        void 0,
        false,
        {
          fileName: "app/components/columns-insight-chat.tsx",
          lineNumber: 102,
          columnNumber: 13
        },
        this
      ) : null }, void 0, false, {
        fileName: "app/components/columns-insight-chat.tsx",
        lineNumber: 100,
        columnNumber: 9
      }, this);
    }
  },
  {
    accessorKey: "title",
    header: ({ column }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DataTableColumnHeader, { column, title: "Title" }, void 0, false, {
      fileName: "app/components/columns-insight-chat.tsx",
      lineNumber: 116,
      columnNumber: 7
    }, this),
    cell: ({ row }) => {
      return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex space-x-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "max-w-[500px] truncate font-medium ", children: row.getValue("title") }, void 0, false, {
        fileName: "app/components/columns-insight-chat.tsx",
        lineNumber: 121,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/components/columns-insight-chat.tsx",
        lineNumber: 120,
        columnNumber: 9
      }, this);
    }
  },
  {
    accessorKey: "progress",
    header: ({ column }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DataTableColumnHeader, { column, title: "Projection" }, void 0, false, {
      fileName: "app/components/columns-insight-chat.tsx",
      lineNumber: 134,
      columnNumber: 7
    }, this),
    cell: ({ row }) => {
      return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        Progress,
        {
          indicatorColor: `${Number(row.getValue("progress")) > 50 ? "bg-green-400" : "bg-red-400"}`,
          value: row.getValue("progress")
        },
        void 0,
        false,
        {
          fileName: "app/components/columns-insight-chat.tsx",
          lineNumber: 139,
          columnNumber: 11
        },
        this
      ) }, void 0, false, {
        fileName: "app/components/columns-insight-chat.tsx",
        lineNumber: 138,
        columnNumber: 9
      }, this);
    }
  }
];

// app/routes/ai.data.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\ai.data.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\ai.data.tsx"
  );
  import.meta.hot.lastModified = "1711201555234.0923";
}
function MyComponent() {
  _s();
  const {
    tasks
  } = useLoaderData();
  const [messages, setMessages] = (0, import_react2.useState)([]);
  const [isSidebarOpen, setIsSidebarOpen] = (0, import_react2.useState)(false);
  const [isSubmitting, setIsSubmitting] = (0, import_react2.useState)(false);
  const endOfMessagesRef = (0, import_react2.useRef)(null);
  const textareaRef = (0, import_react2.useRef)(null);
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
  (0, import_react2.useEffect)(() => {
    endOfMessagesRef.current?.scrollIntoView({
      behavior: "smooth"
    });
  }, [messages]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "w-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: `flex ${isSidebarOpen ? "" : "xl:flex"} h-screen`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex h-screen w-full flex-col items-center bg-white", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "max-w-4xl w-4/6 mx-auto  flex-grow overflow-y-auto", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "mx-auto mt-2 flex w-full max-w-full text-base", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "relative flex  h-10 w-10  items-center justify-center rounded-lg bg-white border text-blue-900 ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ChatBubbleOvalLeftEllipsisIcon_default, { className: "h-6 w-6" }, void 0, false, {
        fileName: "app/routes/ai.data.tsx",
        lineNumber: 111,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "app/routes/ai.data.tsx",
        lineNumber: 110,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "relative inset-0 mx-2 flex w-full flex-col rounded-lg border p-4 text-gray-800 shadow-lg bg-white", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "font-semibold text-blue-900", children: "ChatGPT" }, void 0, false, {
          fileName: "app/routes/ai.data.tsx",
          lineNumber: 115,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "break-words text-lg", children: "what are the backorders within product families and SKUs" }, void 0, false, {
          fileName: "app/routes/ai.data.tsx",
          lineNumber: 116,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/ai.data.tsx",
        lineNumber: 114,
        columnNumber: 15
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/ai.data.tsx",
      lineNumber: 109,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "my-4 flex text-base", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "mx-2 w-full p-0.5 rounded-lg bg-gradient-to-t from-indigo-400 via-cyan-400 to-sky-500 shadow-lg", children: [
      " ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex\r\n          w-full flex-col relative  bg-white p-4 shadow rounded-lg ", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h2", { className: "text-base font-medium text-gray-900", children: "What would you have done differently if you ran Jurassic Park?" }, void 0, false, {
          fileName: "app/routes/ai.data.tsx",
          lineNumber: 130,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "bg-white rounded-lg my-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DataTable, { data: tasks, columns }, void 0, false, {
          fileName: "app/routes/ai.data.tsx",
          lineNumber: 136,
          columnNumber: 21
        }, this) }, void 0, false, {
          fileName: "app/routes/ai.data.tsx",
          lineNumber: 135,
          columnNumber: 19
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/ai.data.tsx",
        lineNumber: 128,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/ai.data.tsx",
      lineNumber: 126,
      columnNumber: 15
    }, this) }, void 0, false, {
      fileName: "app/routes/ai.data.tsx",
      lineNumber: 124,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/ai.data.tsx",
    lineNumber: 108,
    columnNumber: 11
  }, this) }, void 0, false, {
    fileName: "app/routes/ai.data.tsx",
    lineNumber: 107,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/routes/ai.data.tsx",
    lineNumber: 106,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/ai.data.tsx",
    lineNumber: 105,
    columnNumber: 10
  }, this);
}
_s(MyComponent, "ptcno2qIRekrGreDrxNRtiF8EcY=", false, function() {
  return [useLoaderData];
});
_c = MyComponent;
var _c;
$RefreshReg$(_c, "MyComponent");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  MyComponent as default
};
//# sourceMappingURL=/build/routes/ai.data-7EOJICY2.js.map
