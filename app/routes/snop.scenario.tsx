import { json, redirect } from "@remix-run/node";
import { Link, useLoaderData, Form, useNavigate } from "@remix-run/react";

import {
  getScenarioItems,
  updateScenario,
  deleteScenarioById,
  duplicateScenario,
  archiveSenario
} from "~/models/scenario.server";

import { columns } from "../components/columns";
import { DataTable } from "../components/data-table";
import table from "../data/ui/tasks.json";



const navigation = [
  { id: 1, name: "S&OP", to: "/snop/optimize" },
  { id: 2, name: "Demand", to: "#" },
  { id: 3, name: "Inventory", to: "#" },
  { id: 4, name: "Logistics", to: "#" },
  { id: 5, name: "Procurement", to: "#" },
];

export const loader = async () => {
  const scenarioList = await getScenarioItems();
  // console.log(scenarioList);

  return json({ scenarioList });
};

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  const intent = formData.get("intent");
  const scenarioId = formData.get("scenario_id");
  console.log("Intent-->", intent);
  console.log("scenario id-->", scenarioId);
  console.log("Intent-->", intent);
  console.log("scenario id-->", scenarioId);
  if (intent === "optimize") {
    await updateScenario(scenarioId, "Submitted");
  }
  if (intent === "delete") {
    await deleteScenarioById(scenarioId);
  }
  if (intent === "duplicate") {
    await duplicateScenario(scenarioId);
  }
   if (intent === "archive") {
     await updateScenario(scenarioId, "Archived");
     await archiveSenario(scenarioId);
  }

  return redirect(".");
  // if (intent === 'optimize'){
  //   await updateScenario()
  // }
};

export default function TaskPage() {
  const { scenarioList } = useLoaderData<typeof loader>();
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
        <div className="bg-white mx-2 shadow-md rounded-b-lg">
          <div className="flex items-center  justify-between">
            <h2 className="text-3xl font-bold ml-4 p-2 text-transparent bg-clip-text   bg-gradient-to-r from-blue-700 via-sky-700 to-blue-700 font-display">
              Sales & Operations Planning - List of Scenarios
            </h2>
          </div>

          <div className="m-4 bg-white rounded-lg">
            <DataTable data={scenarioList} columns={columns} />
          </div>
        </div>
      </div>
    </>
  );
}
