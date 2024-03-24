import { Squares2X2Icon } from "@heroicons/react/20/solid";
import {
  CubeIcon,
  GearIcon,
  PieChartIcon,
  MixIcon,
  BarChartIcon,
  EnvelopeOpenIcon,
} from "@radix-ui/react-icons";
import { type LinksFunction } from "@remix-run/node";
import { Outlet, NavLink, Link } from "@remix-run/react";
import { useState } from "react";

import logoAssetUrl from "../images/logo1.png";
import styles from "../tailwind.css";


export const links: LinksFunction = () => [
  { rel: "stylesheet", href: styles },
  { rel: "icon", type: "image/svg+xml", href: logoAssetUrl },
];

const menus = [
  {
    id: 1,
    name: "Input Data",
    to: "/snop/input",
    icon: CubeIcon,
    current: false,
  },

  {
    id: 2,
    name: "Scenario",
    to: "/snop/scenario",
    icon: GearIcon,
    current: false,
  },
  {
    id: 3,
    name: "Optimizer",
    to: "/snop/optimize",
    icon: MixIcon,
    current: true,
  },
  {
    id: 4,
    name: "Incidents",
    to: "/snop/incidents",
    icon: EnvelopeOpenIcon,
    current: false,
  },
  {
    id: 5,
    name: "Truck",
    to: "/snop/truck",
    icon: BarChartIcon,
    current: false,
  },
  {
    id: 6,
    name: "Report",
    to: "/snop/dashboard/overview",
    icon: PieChartIcon,
    current: false,
  },
  {
    id: 7,
    name: "Email",
    to: "/snop/email",
    icon: EnvelopeOpenIcon,
    current: false,
  },
];
function classNames(
  ...classes: (string | undefined | null | boolean | number)[]
): string {
  return classes.filter(Boolean).join(" ");
}

export default function Sidebar() {
  const [open, setOpen] = useState(true);

  return (
    <div className="flex h-screen">
      <div
        className={`bg-blue-900  ${
          open ? "w-20" : "w-16"
        } flex flex-col text-gray-100 duration-500 `}
      >
        <div className="flex-1">
          <div className="flex items-center justify-center bg-white py-1">
            <img
              className="cursor-poniter mx-auto h-14 w-14 justify-center "
              src={logoAssetUrl}
              alt="logo"
              onClick={() => setOpen(!open)}
            />
          </div>

          <nav aria-label="Sidebar" className="flex items-center">
            <div className="static mt-4 w-full  space-y-1 px-2">
              {menus.map((item, index) => (
                <NavLink
                  to={item.to}
                  key={item.id}
                  className={({ isActive }) =>
                    classNames(
                      isActive
                        ? "bg-sky-500 text-white"
                        : "text-white hover:bg-blue-800 hover:text-blue-200",
                      "group flex w-full flex-col items-center rounded-md p-3 text-sm font-medium",
                    )
                  }
                >
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                  <h2
                    style={{
                      transitionDelay: `${index * 100}ms`,
                    }}
                    className={`whitespace-pre duration-500 ${
                      !open && "translate-x-28 overflow-hidden opacity-0 "
                    }`}
                  >
                    {item?.name}
                  </h2>
                  <h2
                    className={`${
                      open && "hidden"
                    } absolute left-48 z-10 w-0 overflow-hidden whitespace-pre rounded-md bg-blue-800 px-0 py-0 font-semibold text-blue-100 drop-shadow-lg group-hover:left-14 group-hover:w-fit group-hover:px-2 group-hover:py-1 group-hover:duration-300  `}
                  >
                    {item?.name}
                  </h2>
                </NavLink>
              ))}
            </div>
          </nav>
        </div>
        <div className="">
          <Link to="/snop/appbar">
            <div
              className={classNames(
                "text-blue-100 hover:bg-blue-800 hover:text-white",
                "group flex w-full flex-col items-center rounded-md p-3 text-xs font-medium",
              )}
            >
              <div className="">
                <Squares2X2Icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <h2
                className={`whitespace-pre duration-500 ${
                  !open && "translate-x-28 overflow-hidden opacity-0"
                }`}
              >
                Appbar
              </h2>
              <h2
                className={`${
                  open && "hidden"
                } absolute left-48 z-10 w-0 overflow-hidden whitespace-pre rounded-md bg-blue-800 px-0 py-0 font-semibold text-blue-100 drop-shadow-lg group-hover:left-14 group-hover:w-fit group-hover:px-2 group-hover:py-1 group-hover:duration-300  `}
              >
                User Profile
              </h2>
            </div>
          </Link>
        </div>
      </div>

      {/* appbar */}
      <div className="flex flex-1 flex-col overflow-y-auto bg-gray-100">
        <Outlet />
      </div>
    </div>
  );
}
