import { json } from "@remix-run/node";
import { useLoaderData, Link } from "@remix-run/react";
import { useState, useRef, useEffect } from "react";
import { z } from "zod";

import { columns } from "../components/columns-insight-chat";
import { DataTable } from "../components/data-table-insights";
import taskData from "../data/insightdata/tasks.json";
import { ChatBubbleOvalLeftEllipsisIcon } from "@heroicons/react/24/outline";

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
async function getTasks() {
  const data = await taskData;

  //   const tasks = JSON.parse(data.toString());

  return data;
}

export const loader = async () => {
  const tasks = await getTasks();
  return json({ tasks });
};
export default function MyComponent() {
  const { tasks } = useLoaderData();

  const [messages, setMessages] = useState([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const endOfMessagesRef = useRef(null);
  const textareaRef = useRef(null);

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

                  <div className="bg-white rounded-lg my-2">
                    <DataTable data={tasks} columns={columns} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
