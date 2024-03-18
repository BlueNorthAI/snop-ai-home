import {
  CubeIcon,
  GearIcon,
  PersonIcon,
  PieChartIcon,
  MixIcon,
  BarChartIcon,
  EnvelopeOpenIcon,

} from "@radix-ui/react-icons";
import {
  TableCellsIcon,
  ArrowTrendingUpIcon,
  ChartBarIcon,
  UserCircleIcon,
  CpuChipIcon,
  Squares2X2Icon,
  Cog8ToothIcon,
  ChatBubbleBottomCenterTextIcon,
  TicketIcon,
  ExclamationTriangleIcon,
  WrenchScrewdriverIcon,
  ArrowRightOnRectangleIcon,
  TruckIcon,
} from "@heroicons/react/20/solid";
import {  LinksFunction } from "@remix-run/node";
import { Outlet, NavLink, Link } from "@remix-run/react";
import { useState } from "react";

// import { v4 as uuidv4 } from "uuid";
// eslint-disable-next-line import/no-unresolved
import logoAssetUrl from "../../public/assets/logo.png";
// import kendoStylesheetUrl from "../styles/kendo.css";
// import tailwindStylesheetUrl from "../styles/tailwind.css";

// export const links: LinksFunction = () => [
//   { rel: "stylesheet", href: tailwindStylesheetUrl },
//   { rel: "stylesheet", href: kendoStylesheetUrl },
// ];

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
    name: "Truck",
    to: "/snop/truck",
    icon: BarChartIcon,
    current: false,
  },
  {
    id: 5,
    name: "Report",
    to: "/snop/dashboard/overview",
    icon: PieChartIcon,
    current: false,
  },
  {
    id: 6,
    name: "Email",
    to: "/snop/email",
    icon: EnvelopeOpenIcon,
    current: false,
}

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
           <img
              className="cursor-poniter mx-auto h-8 w-8 justify-center "
              src={logoAssetUrl}
              alt="logo"
              onClick={() => setOpen(!open)}
            />

          <nav aria-label="Sidebar" className="flex flex-col items-center">
            <div className="static mt-2 w-full space-y-1 px-2">
              {menus?.map((item) => (
                <NavLink
                  to={item.to}
                  key={item.name}
                  className={({ isActive }) =>
                    classNames(
                      isActive
                        ? "bg-blue-800 text-white"
                        : "text-blue-100 hover:bg-blue-800 hover:text-white",
                      "group flex w-full flex-col items-center rounded-md p-1 text-xs font-medium",
                    )
                  }
                >
                  <div className="p-1">
                    <item.icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <h2
                    style={{
                      transitionDelay: `${item + 3}00ms`,
                    }}
                    className={`whitespace-pre duration-500 ${
                      !open && "translate-x-28  opacity-0"
                    }`}
                  >
                    {item?.name}
                  </h2>
                  <h2
                    className={`${
                      open && "hidden"
                    } absolute left-48  z-10 w-0 overflow-hidden whitespace-pre rounded-md bg-blue-800 px-0 py-0 font-semibold text-blue-100 drop-shadow-lg group-hover:left-14 group-hover:w-fit group-hover:px-2 group-hover:py-1 group-hover:duration-300  `}
                  >
                    {item?.name}
                  </h2>
                </NavLink>
              ))}
            </div>
          </nav>
        </div>

        <div className="mb-2">
          <Link to="/demo/appbar">
            <div
              className={classNames(
                "text-blue-100 hover:bg-blue-800 hover:text-white",
                "group flex w-full flex-col items-center rounded-md p-2 text-xs font-medium",
              )}
            >
              <div className="p-1">
                <Squares2X2Icon className="h-5 w-5" aria-hidden="true" />
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
                Appbar
              </h2>
            </div>
          </Link>
        </div>
      </div>

      {/* appbar */}
      <div className="flex flex-1 flex-col h-screen overflow-y-auto bg-gray-100">
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
}
