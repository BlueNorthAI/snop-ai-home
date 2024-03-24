 import React, { useState, useEffect, Fragment } from "react";
import { Form,useLoaderData, useActionData, useSearchParams, Link } from "@remix-run/react";
import { Transition, Listbox, Popover } from "@headlessui/react";

import CardLayout from "~/components/CardLayout";
import { kpiService_m } from "~/data/dashboard/demandData";
import {
  ChevronDownIcon,
  CheckIcon,
  FunnelIcon,
} from "@heroicons/react/20/solid";
import { Check, ChevronsUpDown } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";


import { getSubmittedoptimize } from "~/models/optimize.server";
import { Input } from "~/components/ui/input";
import { Button } from "~/components/ui/button";
import { Label } from "~/components/ui/label";
import { json } from "@remix-run/node";
import { log } from "console";
import { cn } from "~/lib/utils";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const navigation = [
  { id: 1, name: "S&OP", to: "/snop/optimize" },
  { id: 2, name: "Demand", to: "#" },
  { id: 3, name: "Inventory", to: "#" },
  { id: 4, name: "Logistics", to: "#" },
  { id: 5, name: "Procurement", to: "#" },
];




export const loader = async () => {
  const submittedList = await getSubmittedoptimize();
  return json({ submittedList });
};

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

function DemoContainer({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "flex items-center justify-center [&>div]:w-full",
        className,
      )}
      {...props}
    />
  );
}
export default function Results() {
  const { submittedList } = useLoaderData<typeof loader>();

   const [mode, setMode] = useState(items[0]);

   const reviewTabs = ["Month", "Quarter", "Year"];
   const [reviewIndex] = useState(0);

   const meetingTabs = ["Daily", "Weekly"];
   const [meetingIndex] = useState(0);

  return (
    <>
      <div className="m-2">
        <div className="mx-2 py-3.5 rounded-t-lg bg-sky-500 border-b ">
          <nav
            className="ml-6 pl-6 flex items-center justify-center"
            aria-label="Global"
          >
            <div className=" flex gap-x-8 justify-center ">
              {navigation.map((item) => (
                <Link
                  key={item.id}
                  to={item.to}
                  className=" text-base lg:text-lg font-semibold leading-6 text-white hover:text-gray-200"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </nav>
        </div>

        <div className="bg-white mx-2 shadow-md rounded-b-lg pb-6">
          <div className="flex items-center  justify-between">
            <h2 className="text-3xl font-bold ml-4 p-2 text-transparent bg-clip-text   bg-gradient-to-r from-blue-700 via-sky-700 to-blue-700 font-display">
              Results Dashboard
            </h2>
          </div>
          <div className="border rounded-lg mx-4 my-2 flex items-center justify-between shadow">
            <div className="flex items-center  gap-x-2">
              <span className="mx-4 inline-flex">Scenario</span>

              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Scenario" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Scenario</SelectLabel>
                    {submittedList.map((scenario) => (
                      <SelectItem
                        key={scenario.scenario_id}
                        value={scenario.scenario_id ?? ""}
                      >
                        {scenario.scenario_id ?? ""}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="m-2 px-1">
              <button
                type="button"
                className="rounded-full border bg-gray-200 p-2
                   hover:bg-gray-100"
              >
                <FunnelIcon
                  className="h-4 w-4 text-gray-500"
                  aria-hidden="true"
                />
              </button>
            </div>
          </div>
          <div>
            <CardLayout
              mode={mode.name === "Review" ? reviewTabs : meetingTabs}
              tab={mode.name === "Review" ? reviewIndex : meetingIndex}
              kpiData={kpiService_m}
            />
          </div>
        </div>
      </div>
    </>
  );
}
