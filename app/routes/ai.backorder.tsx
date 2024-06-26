import { Tab } from "@headlessui/react";
import {
  XMarkIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  PaperAirplaneIcon,
  ArrowUpTrayIcon,
  AdjustmentsVerticalIcon,
  InformationCircleIcon,
  ChatBubbleOvalLeftIcon,
  HeartIcon,
  TrashIcon,
  ArrowDownIcon,
  HandThumbUpIcon,
  ChatBubbleLeftEllipsisIcon,
  EyeIcon,
  ShareIcon,
} from "@heroicons/react/20/solid";
import {
  LightBulbIcon,
  WrenchScrewdriverIcon,
  CircleStackIcon,
} from "@heroicons/react/24/outline";
import { Link } from "@remix-run/react";
import { useState, useRef, useEffect } from "react";

import { kpiChat, kpiService_m, kpiInv_m } from "~/data/analysis/skuProData";

import { Button } from "../components/ui/button";
import { Icons } from "../components/ui/icons";

function formatText(text) {
  const formattedText = text
    .replace(/\*([^\*]+)\*/g, "<strong>$1</strong>") // Bold: *text*
    .replace(/_([^_]+)_/g, "<em>$1</em>") // Italics: _text_
    .replace(/- ([^\n]+)/g, "<li>$1</li>"); // Bullets: - item

  return formattedText.split("\n").map((item, index) => {
    if (item.startsWith("<li>")) {
      return (
        <ul key={index}>
          <li>{item.substring(4, item.length - 5)}</li>
        </ul>
      );
    } else {
      return <p key={index} dangerouslySetInnerHTML={{ __html: item }} />;
    }
  });
}

function handleChatGPTStream(prompt, onData) {
  const eventSource = new EventSource(
    `/demo/gpt?prompt=${encodeURIComponent(prompt)}`,
  );

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

const tabs = [
  { name: "Conversations", href: "#", count: "52", current: false },
  { name: "Prompts", href: "#", count: "6", current: true },
];


function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function MyComponent() {
  const [messages, setMessages] = useState([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const endOfMessagesRef = useRef(null);
  const textareaRef = useRef(null);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const appendToLastMessage = (newText) => {
    setMessages((prevMessages) => {
      const lastMessage = prevMessages[prevMessages.length - 1];
      if (lastMessage && lastMessage.role === "gpt") {
        return [
          ...prevMessages.slice(0, -1),
          { ...lastMessage, content: lastMessage.content + newText },
        ];
      } else {
        return [...prevMessages, { role: "gpt", content: newText }];
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(e.target);
    const prompt = formData.get("prompt");
    setMessages((prevMessages) => [
      ...prevMessages,
      { role: "user", content: prompt },
    ]);
    textareaRef.current.value = "";

    handleChatGPTStream(prompt, appendToLastMessage, () => {
      setIsSubmitting(false);
      console.log("Streaming complete");
    });
  };

  useEffect(() => {
    endOfMessagesRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="w-full">
      <div className={`flex ${isSidebarOpen ? "" : "xl:flex"} h-screen`}>
        <div className="flex h-screen w-full flex-col items-center bg-white">
          <div className="max-w-4xl w-4/6 mx-auto  flex-grow overflow-y-auto">
            <div className="mx-auto mt-2 flex w-full max-w-full text-base">
              <div className="relative flex  h-10 w-10  items-center justify-center rounded-lg bg-white border text-blue-900 ">
                <ChatBubbleOvalLeftEllipsisIcon className="h-6 w-6" />
              </div>

              <div className="relative inset-0 mx-2 flex w-full flex-col rounded-lg border p-4 text-gray-800 shadow-lg bg-white">
                <div className="font-semibold text-blue-900">ChatGPT</div>
                <p className="break-words text-lg">
                  what are the backorders within product families and SKUs
                </p>
              </div>
            </div>

            {/* chat with cahrt */}

            <div className="my-4 flex text-base">
              <div className="relative flex  h-10 w-10  items-center justify-center rounded-lg">
                <img
                  className="h-10 w-10 rounded-lg"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt="profile"
                />
              </div>
              <div className="mx-2 w-full p-0.5 rounded-lg bg-gradient-to-t from-indigo-400 via-cyan-400 to-sky-500 shadow-lg">
                {" "}
                <div
                  className="flex
          w-full flex-col relative  bg-white p-4 shadow rounded-lg "
                >
                  <h2 className="text-base font-medium text-gray-900">
                    What would you have done differently if you ran Jurassic
                    Park?
                  </h2>
                  <ul className="p-4 grid grid-cols-1 gap-2 list-disc">
                    <li>1</li>
                    <li>1</li>
                    <li>1</li>
                  </ul>

                  <ul className="grid grid-cols-1 gap-2 md:grid-cols-2 rounded-lg">
                    {kpiService_m.map((kpi) => (
                      <li
                        key={kpi.Name}
                        className="col-span-1 flex flex-col divide-y divide-white  bg-white  rounded-lg border"
                      >
                        <div className="relative flex flex-1 flex-col py-2 pl-2">
                          <div className="flex items-baseline gap-2">
                            <div>
                              <h1 className="text-base m-2  text-gray-900 font-bold">
                                {kpi.Name}
                              </h1>
                              <h3 className="font-display m-2 text-sm font-medium">
                                {kpi.sub}
                              </h3>
                            </div>
                          </div>
                          <div>{kpi.container}</div>
                        </div>
                      </li>
                    ))}
                  </ul>

                  <ul className="mt-2 grid grid-cols-1 gap-4  rounded-lg">
                    {kpiInv_m.map((kpi) => (
                      <li
                        key={kpi.Name}
                        className="col-span-1 flex flex-col divide-y divide-white  bg-white  rounded-lg border"
                      >
                        <div className="relative flex flex-1 flex-col py-2 pl-2">
                          <div className="flex items-baseline gap-2">
                            <div>
                              <h1 className="text-base m-2  text-gray-900 font-bold">
                                {kpi.Name}
                              </h1>
                              <h3 className="font-display m-2 text-sm font-medium">
                                {kpi.sub}
                              </h3>
                            </div>
                          </div>
                          <div>{kpi.container}</div>
                        </div>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-2 p-2 bg-white rounded-lg border">
                    <div className="-mt-px flex divide-x divide-gray-200 h-10 ">
                      <div className="flex w-0 flex-1  ">
                        <Link
                          to=""
                          className="relative -mr-px inline-flex flex-1 items-center justify-center gap-x-2 border border-transparent text-sm font-semibold hover:bg-rose-500 hover:text-white"
                        >
                          <span className="py-4 inline-flex flex-1 items-cente justify-center gap-x-3 text-sm font-semibold hover:text-white">
                            <WrenchScrewdriverIcon
                              className="size-5"
                              aria-hidden="true"
                            />
                            Analyze
                          </span>
                        </Link>
                      </div>

                      <div className="-ml-px flex flex-1">
                        <Link
                          to="/snop/dashboard/salesExp"
                          className="relative -mr-px inline-flex flex-1 items-center justify-center gap-x-2  border border-transparent text-sm font-semibold  hover:bg-rose-500 hover:text-white"
                        >
                          <span className="py-4 inline-flex flex-1 items-cente justify-center gap-x-3 text-sm font-semibold hover:text-white">
                            <CircleStackIcon
                              className="size-5"
                              aria-hidden="true"
                            />
                            Explore Data
                          </span>
                        </Link>
                      </div>
                      <div className="-ml-px flex  flex-1">
                        <Link
                          to="/benchmark"
                          className="relative -mr-px inline-flex flex-1 items-center justify-center gap-x-2  border border-transparent text-sm font-semibold hover:bg-rose-500 hover:text-white"
                        >
                          <span className="py-4 inline-flex flex-1 items-cente justify-center gap-x-3 text-sm font-semibold hover:text-white">
                            <LightBulbIcon
                              className="size-5"
                              aria-hidden="true"
                            />
                            Insights
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* rest */}
          </div>
          <div className="relative ">
            <button
              type="button"
              className="rounded-full p-2 text-black border shadow-lg"
            >
              <ArrowDownIcon className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>

          <form
            onSubmit={handleSubmit}
            className="mx-auto flex h-20 w-full max-w-7xl p-4"
          >
            <div className="flex flex-grow rounded-md bg-gray-100 p-2.5">
              <textarea
                required
                name="prompt"
                id="prompt"
                placeholder="Message ChatGPT..."
                ref={textareaRef}
                className="flex-grow text-lg bg-gray-100 outline-none"
                style={{ resize: "none" }}
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className={`ml-2 rounded-md text-white ${
                  isSubmitting ? "opacity-50" : ""
                }`}
              >
                <PaperAirplaneIcon className="h-5 w-5 text-gray-500" />
              </button>
            </div>

            <div className="flex text-blue-900 ">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`mx-2 flex items-center justify-center rounded-md bg-gray-100 p-2.5 ${
                  isSubmitting ? "opacity-50" : ""
                }`}
              >
                <ArrowUpTrayIcon className="h-5 w-5 font-bold stroke-2" />
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`flex items-center justify-center rounded-md bg-gray-100 p-2.5 ${
                  isSubmitting ? "opacity-50" : ""
                }`}
              >
                <AdjustmentsVerticalIcon className="h-5 w-5 font-bold stroke-2" />
              </button>
            </div>
          </form>
        </div>

        <div
          className={`sidebar bg-slate-50 px-4  ${
            isSidebarOpen ? "block" : "hidden"
          } w-96 transition delay-150 duration-300 shadow-lg `}
        >
          <div className="flex  h-screen flex-col gap-y-4 pb-4 ">
            <div className="flex my-4 justify-between ">
              <Link
                href="#"
                className="flex rounded-md p-2 mr-2 text-base font-semibold leading-6 bg-white text-blue-900 hover:bg-gray-100 hover:text-gray-200 border"
              >
                <XMarkIcon className="h-6 w-6 shrink-0" aria-hidden="true" />
              </Link>
              <Link
                href="#"
                className="flex-1 rounded-md px-2 py-2 text-base font-semibold leading-6 bg-white text-blue-900 hover:bg-gray-100 hover:text-gray-white border"
              >
                <div className="flex items-center">
                  <ChatBubbleOvalLeftIcon
                    className="h-6 w-6 mr-2"
                    aria-hidden="true"
                  />
                  <span className="flex items-center text-sm ">
                    New Conversation
                  </span>
                </div>
              </Link>
            </div>
            <div className="rounded-lg">
              <Tab.Group className="flex justify-between">
                <Tab.List className="">
                  {tabs.map((tab) => (
                    <Tab
                      key={tab.name}
                      className={({ selected }) =>
                        classNames(
                          "flex flex-col border-black p-2 text-center text-base font-semibold mx-1 outline-none",
                          selected
                            ? "border-b-2 text-blue-900"
                            : "text-gray-400 hover:text-gray-700",
                        )
                      }
                    >
                      {tab.name}
                    </Tab>
                  ))}
                </Tab.List>
              </Tab.Group>
            </div>
            <nav className="mt-4 flex flex-1 flex-col gap-y-7">
              <div className="flex flex-1 flex-col ">
                <div className="bg-white  rounded-md p-4 font-semibold leading-6 border">
                  <Link className="flex items-center justify-between text-base text-blue-900 hover:text-gray-700">
                    <span>Hello, World!</span>

                    <span className="flex items-center justify-between space-x-2 mr-2">
                      {" "}
                      <HeartIcon className=" h-4 w-4" />
                      <TrashIcon className="h-4 w-4" />
                    </span>
                  </Link>
                </div>

                <div className="mt-auto m-2 rounded-md p-2 font-semibold leading-6 text-gray-400  hover:text-gray-500 ">
                  <Link href="#" className="flex items-center justify-center">
                    <InformationCircleIcon
                      className="h-6 w-6"
                      aria-hidden="true"
                    />
                    <span className="flex items-center ml-4 text-lg">
                      {" "}
                      Information
                    </span>
                  </Link>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}
