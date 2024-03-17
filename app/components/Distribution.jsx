import dis from "../images/displanning.png"
import { Link } from "@remix-run/react";

import { Icon } from "../components/Icon";

const trans = [
  {
    title: "Inventory Reduction",
    icon: "impact",
    to: "/",
    description: "5%",
  },
  {
    title: "Productivity Improvement",
    icon: "impact",
    to: "/",
    description: "50%",
  },
  {
    title: "Increase in Allocation Accuracy",
    icon: "impact",
    to: "/",
    description: "25%",
  },
];

const kpiCards = [
  {
    title: "Increased allocation accuracy",
    icon: "perform",
    to: "/",
    description:
      "Leverage AI & ML to make accurate, data-driven decisions during the planning process.",
  },
  {
    title: "Maximize profitability",
    icon: "perform",
    to: "/",
    description:
      "Translate AI-driven customer insights into strategic inventory movements and replenishments that reduce overall safety stock across your organization.",
  },
  {
    title: "Improved customer satisfaction",
    icon: "perform",
    to: "/",
    description:
      "Make distribution decisions that align with merchant strategy and localized demand, leading to profitable inventory placement decisions and higher customer satisfaction.",
  },
  {
    title: "Automated exception-based allocation procedures",
    icon: "perform",
    to: "/",
    description:
      "Reduce the need for manual changes, saving resources and freeing up decision-makers to focus on other essential tasks.",
  },
  {
    title: "Improved productivity",
    icon: "perform",
    to: "/",
    description:
      "Through effective inventory plan execution, your organization will have the ability to conduct and manage complex allocation and replenishment in less time",
  },
  {
    title: "Improved customer satisfaction",
    icon: "perform",
    to: "/",
    description:
      "Make distribution decisions that align with merchant strategy and localized demand, leading to profitable inventory placement decisions and higher customer satisfaction.",
  },
];



export default function Distribution() {
  return (
    <>
      <header className="space-y-1">
        <p className="font-display text-sm font-medium text-sky-500">
          Plan - Optimization Engine
        </p>
      </header>
      <div className="grid grid-cols-3 gap-2 lg:flex">
        <div>
          <div className="relative ">
            <p className="inline bg-gradient-to-r from-indigo-200 via-sky-400 to-indigo-200 bg-clip-text font-display text-5xl font-bold tracking-tight dark:text-transparent text-slate-900">
              Distribution Planning
            </p>
            <p className="mt-2 text-lg  text-slate-800 dark:text-white">
              In today increasingly omnichannel environment, profitably
              delivering excellent customer service is becoming more challenging
              and complex.
            </p>
          </div>
        </div>
        <div className="col-span-2 flex items-center rounded-xl">
          <div className="not-prose flex items-center ">
            <img
              className="rounded-lg"
              src={dis}
              alt=""
              width={800}
              height={800}
            />
          </div>
        </div>
      </div>

      <div className="border-b border-black my-12"></div>

      <h1 className="font-bold font-display text-3xl tracking-tight text-slate-900 dark:text-white">
        Quantitative Impact
      </h1>

      <div>
        <div className="my-6 grid grid-cols-2 gap-6 lg:grid-cols-3">
          {trans.map((truck) => (
            <div
              key={truck.title}
              className="group relative rounded-xl border border-slate-200 dark:border-slate-800"
            >
              <div className="absolute -inset-px rounded-xl border-2 border-sky-950" />

              <div className="relative overflow-hidden rounded-xl p-4">
                <h2 className="flex justify-center font-display text-base text-slate-900 dark:text-white">
                  <Link to={truck.to}>
                    <span className="absolute -inset-px rounded-xl" />
                    {truck.title}
                  </Link>
                </h2>
                <div className="flex justify-center">
                  <p className="p-1 inline-block bg-gradient-blue bg-clip-text text-6xl font-bold text-slate-700 dark:text-transparent">
                    {truck.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="border-b border-black my-12"></div>

      <h1 className="font-bold font-display text-3xl tracking-tight text-slate-900 dark:text-white">
        Organizational Impact
      </h1>
      <div className="my-8 grid grid-cols-2 gap-4 ">
        {kpiCards.map((kpi) => (
          <div
            key={kpi.title}
            className="rounded-xl bg-sky-50 p-6 lg:grid-cols-3 dark:bg-slate-800/60 dark:ring-1 dark:ring-slate-300/10 "
          >
            <div className="flex overflow-hidden rounded-xl">
              <Icon icon={kpi.icon} className="h-10 w-10" />
              <p className="m-0 font-display text-xl text-sky-900 dark:text-sky-400">
                {kpi.title}
              </p>
            </div>
            <div className="mt-2.5 text-sky-800 dark:text-slate-300 ">
              {kpi.description}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

