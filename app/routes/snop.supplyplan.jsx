import { Link } from "@remix-run/react";

import {
  kpiService_m,
  kpiInv_m,
  kpiPurchase_m,
} from "~/data/dashboard/supplyPlanData";
import {
  LightBulbIcon,
  WrenchScrewdriverIcon,
  CircleStackIcon,
} from "@heroicons/react/24/outline";
import {
  ArcGauge,
  CircularGauge,
  LinearGauge,
  RadialGauge,
} from "@progress/kendo-react-gauges";
const navigation = [
  { id: 1, name: "S&OP", to: "/snop/optimize" },
  { id: 2, name: "Demand", to: "#" },
  { id: 3, name: "Inventory", to: "#" },
  { id: 4, name: "Logistics", to: "#" },
  { id: 5, name: "Procurement", to: "#" },
];
const value = 30;
const value2 = 70;
const centerRenderer = (currentValue, color) => {
  return (
    <h3
      style={{
        color: color,
      }}
    >
      {currentValue}%
    </h3>
  );
};
const gaugeStyles = {
  display: "block",
};
export default function TaskPage() {
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
        <div className="bg-white m-2 shadow-md rounded-b-lg py-2">
          <div className="flex items-center  justify-between">
            <h2 className="text-3xl font-bold ml-4 p-2 text-transparent bg-clip-text   bg-gradient-to-r from-blue-700 via-sky-700 to-blue-700 font-display">
              Sales & Operations Planning - List of Scenarios
            </h2>
          </div>
          <ul className="m-4 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg bg-white border shadow-xl shadow-slate-900/10 m-2">
              <div className="p-4">
                <h1 className="text-xl font-bold text-black">Supply Network</h1>
              </div>
              <div className="relative flex flex-col  pl-3">
                <ul className="divide-y divide-gray-200 dark:divide-gray-700 ">
                  <li className="py-3 ">
                    <div className="flex items-center mr-4 ">
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                          Products
                        </p>
                      </div>
                      <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                        16,390
                      </div>
                    </div>
                  </li>
                  <li className="py-3 ">
                    <div className="flex items-center mr-4 ">
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                          Sites
                        </p>
                      </div>
                      <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                        5
                      </div>
                    </div>
                  </li>

                  <li className="pt-3 ">
                    <div className="flex items-center mr-4 ">
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                          Suppliers
                        </p>
                      </div>
                      <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                        432
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className=" rounded-lg bg-white border shadow-xl shadow-slate-900/10  m-2">
              <div className="p-4">
                <h1 className="text-xl font-bold text-black">
                  Inventory Orders
                </h1>
              </div>
              <div className="mx-4 grid grid-cols-2 gap-2">
                <ul className="divide-y divide-gray-200 dark:divide-gray-700 ">
                  <li className="py-3 ">
                    <div className="flex items-center mr-4 ">
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                          Products
                        </p>
                      </div>
                      <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                        16,390
                      </div>
                    </div>
                  </li>
                  <li className="py-3 ">
                    <div className="flex items-center mr-4 ">
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                          Sites
                        </p>
                      </div>
                      <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                        5
                      </div>
                    </div>
                  </li>

                  <li className="py-3 ">
                    <div className="flex items-center mr-4 ">
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                          Suppliers
                        </p>
                      </div>
                      <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                        432
                      </div>
                    </div>
                  </li>
                </ul>

                <div>
                  {kpiInv_m.map((kpi) => (
                    <li key={kpi.Name} className="">
                      <div className="">
                        <div>{kpi.container}</div>
                      </div>
                    </li>
                  ))}
                </div>
              </div>
            </div>
            <div className="rounded-lg bg-white border shadow-xl shadow-slate-900/10  m-2">
              <div className="p-4">
                <h1 className="text-xl font-bold text-black">Purchase Plan</h1>
              </div>
              <div className="mx-4 grid grid-cols-2 gap-2">
                <ul className="divide-y divide-gray-200 dark:divide-gray-700 ">
                  <li className="py-3 ">
                    <div className="flex items-center mr-4 ">
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                          Products
                        </p>
                      </div>
                      <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                        16,390
                      </div>
                    </div>
                  </li>
                  <li className="py-3 ">
                    <div className="flex items-center mr-4 ">
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                          Sites
                        </p>
                      </div>
                      <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                        5
                      </div>
                    </div>
                  </li>

                  <li className="py-3 ">
                    <div className="flex items-center mr-4 ">
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                          Suppliers
                        </p>
                      </div>
                      <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                        432
                      </div>
                    </div>
                  </li>
                </ul>

                <div>
                  {kpiPurchase_m.map((kpi) => (
                    <li key={kpi.Name} className="">
                      <div className="">
                        <div>{kpi.container}</div>
                      </div>
                    </li>
                  ))}
                </div>
              </div>
            </div>
            <div className=" rounded-lg bg-white border shadow-xl shadow-slate-900/10  m-2">
              <div className="p-4">
                <h1 className="text-xl font-bold text-black">
                  Purchase Order Automation Percentage
                </h1>
              </div>

              <div className="mx-4 grid grid-cols-2 gap-2">
                <ul className="divide-y divide-gray-200 dark:divide-gray-700 ">
                  <li className="py-3 ">
                    <div className="flex items-center mr-4 ">
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                          Products
                        </p>
                      </div>
                      <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                        16,390
                      </div>
                    </div>
                  </li>
                  <li className="py-3 ">
                    <div className="flex items-center mr-4 ">
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                          Sites
                        </p>
                      </div>
                      <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                        5
                      </div>
                    </div>
                  </li>

                  <li className="py-3 ">
                    <div className="flex items-center mr-4 ">
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                          Suppliers
                        </p>
                      </div>
                      <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                        432
                      </div>
                    </div>
                  </li>
                </ul>

                <div>
                  <ArcGauge
                    style={gaugeStyles}
                    value={value}
                    centerRender={centerRenderer}
                  />
                </div>
              </div>
            </div>
            <div className="rounded-lg bg-white border shadow-xl shadow-slate-900/10  m-2">
              <div className="p-4">
                <h1 className="text-xl font-bold text-black">
                  Purchase Order Automation Percentage
                </h1>
              </div>
              <div className="mx-4 grid grid-cols-2 gap-2">
                <ul className="divide-y divide-gray-200 dark:divide-gray-700 ">
                  <li className="py-3 ">
                    <div className="flex items-center mr-4 ">
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                          Products
                        </p>
                      </div>
                      <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                        16,390
                      </div>
                    </div>
                  </li>
                  <li className="py-3 ">
                    <div className="flex items-center mr-4 ">
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                          Sites
                        </p>
                      </div>
                      <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                        5
                      </div>
                    </div>
                  </li>

                  <li className="py-3 ">
                    <div className="flex items-center mr-4 ">
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                          Suppliers
                        </p>
                      </div>
                      <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                        432
                      </div>
                    </div>
                  </li>
                </ul>

                <div>
                  <ArcGauge
                    style={gaugeStyles}
                    value={value2}
                    centerRender={centerRenderer}
                  />
                </div>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </>
  );
}
