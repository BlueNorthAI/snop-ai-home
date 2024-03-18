import React from "react";
import { Link, Form, useNavigate, useParams } from "@remix-run/react";
import { Input } from "~/components/ui/input";
import { Button } from "~/components/ui/button";
import DemandInput from "~/components/demand-form";
import CostInput from "~/components/cost-form";
import EmpInput from "~/components/empcost-form";
import OutsourcingInput from "~/components/outcost-form";
import ConstraintInput from "~/components/constraint-form";
import EmpConstraintInput from "~/components/empconstraint-form";
import ProductConstraintInput from "~/components/proconstraint-form";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { format } from "date-fns";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "~/components/ui/popover";
import { Calendar } from "~/components/ui/calendar";
import { ArrowUpTrayIcon, CalendarIcon } from "@heroicons/react/20/solid";

import { cn } from "~/lib/utils";

const navigation = [
  { id: 1, name: "S&OP", to: "/snop/optimize" },
  { id: 2, name: "Demand", to: "#" },
  { id: 3, name: "Inventory", to: "#" },
  { id: 4, name: "Logistics", to: "#" },
  { id: 5, name: "Procurement", to: "#" },
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

function convertToNumbers(obj) {
  const numericFields = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
    "material_cost_pu",
    "inv_hold_cost_pupm",
    "stockout_cost_pupm",
    "hiring_cost_pw",
    "firing_cost_pw",
    "worker_cost_pm",
    "overtime_cost_phr",
    "outsourcing_cost_pu",
    "max_work_hrs_pwpm",
    "max_overtime_hrs_pwpm",
    "inventory_start",
    "inventory_end",
    "backlog_start",
    "backlog_end",
    "num_workers_start",
    "min_end_workers",
    "max_end_workers",
    "labor_hrs_pu",
  ];

  const converted = { ...obj };

  numericFields.forEach((field) => {
    if (converted[field]) {
      converted[field] = parseFloat(converted[field]);
    }
  });

  return converted;
}

export default function SnopForm({ inputData }) {
  const [date, setDate] = React.useState<Date>(new Date());
  const navigate = useNavigate();
  const params = useParams();

  return (
    <div className="m-2">
      <Form method="post">
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
              Sales & Operations Planning Input
            </h2>
            <div className="flex items-center ">
              <Input
                className="mx-2 text-blue-900 w-50"
                name="description"
                defaultValue={inputData.description || "Describe your scenario"}
                // placeholder="Describe your scenario"
              />
              <Input
                className="mx-2 text-blue-900 w-50 "
                name="customer"
                defaultValue="All"
                hidden
              />
              <Input
                className="mx-2 text-blue-900 w-50"
                name="site"
                defaultValue="All"
                hidden
              />
              <Input
                className="mx-2 text-blue-900 w-50"
                name="sku"
                defaultValue="All"
                hidden
              />
              <Input
                className="mx-2 text-blue-900 w-50"
                name="Status"
                defaultValue="Open"
                hidden
              />
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={"outline"}
                    className={cn(
                      "w-[180px] justify-start text-left font-normal",
                      !date && "text-muted-foreground",
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4 text-blue-900" />
                    {date ? (
                      <span className="text-blue-900">
                        {format(date, "PPP")}
                      </span>
                    ) : (
                      <span className="text-blue-900">Pick a date</span>
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0 ">
                  <Calendar
                    className="text-blue-900"
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>

              <div className="ml-2 flex max-w-sm items-center">
                <Input type="file" />

                <Button className="mr-4  p-1 rounded-md border bg-blue-500 hover:bg-blue-600">
                  <div className="flex items-center space-x-1 mx-2 ">
                    <ArrowUpTrayIcon className="text-white h-5 w-5" />
                    <span className="mx-1 text-sm p-1 text-white ">Upload</span>
                  </div>
                </Button>
              </div>
            </div>
          </div>
          <div className="items-start justify-center gap-6 rounded-lg p-4 md:grid lg:grid-cols-2 xl:grid-cols-4">
            <div className="col-span-2 grid items-start  gap-2 lg:col-span-2 lg:grid-cols-2 xl:col-span-1 xl:grid-cols-1 ">
              <DemoContainer>
                <Card className="shadow-lg text-blue-900">
                  <CardHeader className="space-y-1 ">
                    <CardTitle className="text-2xl flex">Demand</CardTitle>
                    <p className="text-gray-400 text-sm">Units per month</p>
                    <div className="border-b" />
                  </CardHeader>

                  <CardContent className="grid gap-4">
                    <DemandInput demands={inputData} />
                  </CardContent>
                </Card>
              </DemoContainer>
            </div>

            <div className="col-span-2 grid items-start gap-6 lg:col-span-2 lg:grid-cols-2 xl:col-span-1 xl:grid-cols-1">
              <DemoContainer>
                <Card className="shadow-lg text-blue-900">
                  <CardHeader className="space-y-1">
                    <CardTitle className="text-2xl">
                      Material & Inventory Cost
                    </CardTitle>
                    <div className="border-b" />
                  </CardHeader>
                  <CardContent className="grid gap-4">
                    <CostInput cost={inputData} />
                  </CardContent>
                </Card>
              </DemoContainer>
              <DemoContainer>
                <Card className="shadow-lg text-blue-900">
                  <CardHeader className="space-y-1">
                    <CardTitle className="text-2xl">Employee Cost</CardTitle>
                    <div className="border-b" />
                  </CardHeader>
                  <CardContent className="grid gap-4">
                    <EmpInput cost={inputData} />
                  </CardContent>
                </Card>
              </DemoContainer>
            </div>

            <div className="col-span-2 grid items-start gap-6 lg:col-span-2 lg:grid-cols-2 xl:col-span-1 xl:grid-cols-1">
              <DemoContainer>
                <Card className="shadow-lg text-blue-900">
                  <CardHeader className="space-y-1">
                    <CardTitle className="text-2xl">Outsourcing Cost</CardTitle>
                    <div className="border-b" />
                  </CardHeader>
                  <CardContent className="grid gap-4">
                    <OutsourcingInput cost={inputData} />
                  </CardContent>
                </Card>
              </DemoContainer>
              <DemoContainer>
                <Card className="shadow-lg text-blue-900">
                  <CardHeader className="space-y-1">
                    <CardTitle className="text-2xl">
                      Inventory Constraint
                    </CardTitle>
                    <div className="border-b" />
                  </CardHeader>
                  <CardContent className="grid gap-4">
                    <ConstraintInput constraint={inputData} />
                  </CardContent>
                </Card>
              </DemoContainer>
            </div>
            <div className="col-span-2 grid items-start gap-6 lg:col-span-2 lg:grid-cols-2 xl:col-span-1 xl:grid-cols-1">
              <DemoContainer>
                <Card className="shadow-lg text-blue-900">
                  <CardHeader className="space-y-1">
                    <CardTitle className="text-2xl">
                      Employee Constraint
                    </CardTitle>
                    <div className="border-b" />
                  </CardHeader>
                  <CardContent className="grid gap-4">
                    <EmpConstraintInput constraint={inputData} />
                  </CardContent>
                </Card>
              </DemoContainer>
              <DemoContainer>
                <Card className="shadow-lg text-blue-900">
                  <CardHeader className="space-y-1">
                    <CardTitle className="text-2xl">
                      Product Constraint
                    </CardTitle>
                    <div className="border-b" />
                  </CardHeader>
                  <CardContent className="grid gap-4">
                    <ProductConstraintInput constraint={inputData} />
                  </CardContent>
                </Card>
              </DemoContainer>
            </div>
          </div>

          <div className="py-4 border-t flex justify-end space-x-2 mr-2">
            <Button className="bg-blue-500 hover:bg-blue-600">
              {params.scenId ? "Update Scenario" : "Create Scenario"}
            </Button>

            {params.scenId == null && (
              <Button variant="outline">Save Input</Button>
            )}
            <div className="mr-2">
              <Button
                onClick={() => navigate(-1)}
                type="button"
                className=""
                variant="default"
              >
                Cancel
              </Button>
            </div>
          </div>
        </div>
      </Form>
    </div>
  );
}
