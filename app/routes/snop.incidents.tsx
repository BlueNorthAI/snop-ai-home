import { promises as fs } from "fs";
import path from "path";

import { json } from "@remix-run/node";
import { useLoaderData, Link } from "@remix-run/react";
import { z } from "zod";

import { columns } from "../components/columns-inci";
import { DataTable } from "../components/data-table-inci";
import { UserNav } from "../components/user-nav-inc";
import { taskSchema } from "../data/columndata/schema";
import taskData from "../data/columndata/tasks.json";


const navigation = [
  { id: 1, name: "S&OP", to: "/snop/optimize" },
  { id: 2, name: "Demand", to: "#" },
  { id: 3, name: "Inventory", to: "#" },
  { id: 4, name: "Logistics", to: "#" },
  { id: 5, name: "Procurement", to: "#" },
];


async function getTasks() {
  const data = await taskData;

  //   const tasks = JSON.parse(data.toString());

  return data;
}

export const loader = async () => {
  const tasks = await getTasks();
  return json({ tasks });
};

// // Simulate a database read for tasks.
// async function getTasks() {
//   const data = await fs.readFile(
//     path.join(process.cwd(), "app/examples/tasks/data/tasks.json"),
//   );

//   const tasks = JSON.parse(data.toString());

//   return z.array(taskSchema).parse(tasks);
// }

export default function TaskPage() {
  const { tasks } = useLoaderData();
  //   const tasks = await getTasks();

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
              Control Tower - List of Actions
            </h2>
          </div>

          <div className="m-4 bg-white rounded-lg p-4">
            <DataTable data={tasks} columns={columns} />
          </div>
        </div>
      </div>
      {/* <div className="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex">
        <div className="flex items-center justify-between space-y-2">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Welcome back!</h2>
            <p className="text-muted-foreground">
              Here&apos;s a list of your tasks for this month!
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <UserNav />
          </div>
        </div>
        <DataTable data={tasks} columns={columns} />
      </div> */}
    </>
  );
}
