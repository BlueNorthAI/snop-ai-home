import { useState, Fragment } from "react";
import { Popover, Transition, Listbox, Tab } from "@headlessui/react";
import {
  DocumentArrowDownIcon,
  ShareIcon,
  ClipboardDocumentCheckIcon,
  ChevronDownIcon,
  CheckIcon,
} from "@heroicons/react/20/solid";
import { LightBulbIcon } from "@heroicons/react/24/outline";
import { Link, Outlet } from "@remix-run/react";
import CardLayout from "~/components/CardLayout";
//import { WrapperBulletChart } from '~/kendo/charts/bullet/WrapperBulletChart';
import {
  reviewTabs,
  meetingTabs,
  kpiService_m,
} from "~/data/dashboard/campaignData";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function CampaignRoute() {
  const emptyStyles = { background: "#ef4444" };
  const progressStyles = { background: "#22c55e" };
  // console.log(kpiService_m);
  const items = [
    {
      id: 1,
      name: "Review",
      description:
        "Conduct periodic (month/quarter/year) performance review of key business KPIs",
      to: `review`,
    },
    {
      id: 2,
      name: "Meeting",
      description:
        "Conduct daily/weekly data driven meetings and create plan of action ",
      to: `meeting`,
    },
  ];
  const centericon = [
    { name: "Download as PDF", icon: DocumentArrowDownIcon },
    { name: "Email KPIs", icon: ShareIcon },
    { name: "Copy as Image", icon: ClipboardDocumentCheckIcon },
  ];

  const [mode, setMode] = useState(items[0]);

  const reviewTabs = ["Month", "Quarter", "Year"];
  const [reviewIndex, setReviewIndex] = useState(0);

  const meetingTabs = ["Daily", "Weekly"];
  const [meetingIndex, setMeetingIndex] = useState(0);

  return (
    <>
            <div className="mx-4 mt-1 rounded-lg bg-white   shadow">
        <div className="flex items-center justify-between p-2 ">
          <div className="m-2 flex-1">
            <h2 className="text-3xl font-bold leading-7 text-gray-900">
              Campaign Dashboard
            </h2>
          </div>
          <div className="flex p-1 align-middle ">
            <span className="ml-1">
              <Listbox value={mode} onChange={setMode}>
                {({ open }) => (
                  <>
                    <div className="relative">
                      <div className="inline-flex divide-x divide-rose-700">
                        <div className="inline-flex items-center gap-x-1.5 rounded-l-md bg-rose-500 px-3 py-2 text-white shadow-sm">
                          <CheckIcon
                            className="-ml-0.5 h-5 w-5 "
                            aria-hidden="true"
                          />
                          <p className="text-sm font-semibold">{mode.name}</p>
                        </div>
                        <Listbox.Button className="inline-flex items-center rounded-l-none rounded-r-md bg-rose-500 p-2 hover:bg-rose-700">
                          <ChevronDownIcon
                            className="h-5 w-5 text-white"
                            aria-hidden="true"
                          />
                        </Listbox.Button>
                      </div>

                      <Transition
                        show={open}
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                      >
                        <Listbox.Options className="absolute right-0 z-10 mt-2 w-72 origin-top-right divide-y divide-gray-200 overflow-hidden rounded-md border bg-gray-100 shadow-lg ">
                          {items.map((option) => (
                            <Listbox.Option
                              key={option.name}
                              className={({ active }) =>
                                classNames(
                                  active
                                    ? "bg-rose-500 text-white"
                                    : "text-gray-900",
                                  "cursor-default select-none p-4 text-sm"
                                )
                              }
                              value={option}
                            >
                              {({ selected, active }) => (
                                <div className="flex flex-col">
                                  <div className="flex justify-between">
                                    <p
                                      className={
                                        selected
                                          ? "font-semibold"
                                          : "font-normal"
                                      }
                                    >
                                      {option.name}
                                    </p>
                                    {selected ? (
                                      <span
                                        className={
                                          active
                                            ? "text-white"
                                            : "text-rose-600"
                                        }
                                      >
                                        <CheckIcon
                                          className="h-5 w-5"
                                          aria-hidden="true"
                                        />
                                      </span>
                                    ) : null}
                                  </div>
                                  <p
                                    className={classNames(
                                      active
                                        ? "text-rose-200"
                                        : "text-gray-500",
                                      "mt-2"
                                    )}
                                  >
                                    {option.description}
                                  </p>
                                </div>
                              )}
                            </Listbox.Option>
                          ))}
                        </Listbox.Options>
                      </Transition>
                    </div>
                  </>
                )}
              </Listbox>
            </span>

            
          </div>
        </div>
      </div>
      <main>
        <CardLayout
          mode={mode.name === "Review" ? reviewTabs : meetingTabs}
          tab={mode.name === "Review" ? reviewIndex : meetingIndex}
          kpiData={kpiService_m}
        />
      </main>
    </>
  );
}
