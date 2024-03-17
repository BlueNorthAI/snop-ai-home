import { Link } from "@remix-run/react"
import clsx from "clsx";

import { Button } from "../components/ui/button";
import { ScrollArea } from "../components/ui/scroll-area";
import { cn } from "../lib/utils";
export const navigation = [
  {
    title: "Introduction",
    links: [
      { title: "Supply Chain Tripod", href: "/" },
    ],
  },
  {
    title: "Probe - Diagnostic Engine",
    links: [
      {
        title: "Transportation",
        href: "/docs/transportation",
      },
      {
        title: "Warehousing",
        href: "/docs/warehousing",
      },
      { title: "Inventory", href: "/docs/inventory-diag" },

    ],
  },
  {
    title: "Plan - Optimization Engine",
    links: [
      {
        title: "Production Planning & Scheduling",
        href: "/docs/prod-plan",
      },
      {
        title: "Sales & Operations Planning",
        href: "/docs/snop",
      },
      { title: "Distribution Planning", href: "/docs/distr-planning" },
      { title: "Inventory Optimization", href: "/docs/inv-opt" },

    ],
  },
  {
    title: "Perform - Execution Engine",
    links: [
      {
        title: "Generative AI based Control Tower",
        href: "/docs/ai-ct",
      },
      { title: "Cascaded KPI Scorecard", href: "/docs/kpi" },

    
    ],
  },

];

export type Playlist = (typeof playlists)[number];

export function Sidebar({ className, playlists }: SidebarProps) {
  return (
    <div className={cn("pb-12", className)}>
      <div className="pl-4 space-y-4 py-4">
        <nav className={clsx("text-base lg:text-base", className)}>
          <ul className="space-y-9">
            {navigation.map((section) => (
              <li key={section.title}>
                <h2 className="font-display font-medium  text-white">
                  {section.title}
                </h2>
                <ul className="mt-2 space-y-2 border-l-2 lg:mt-4 lg:space-y-4  border-slate-800">
                  {section.links.map((link) => (
                    <li key={link.href} className="relative">
                      <Link
                        to={link.href}
                        className={clsx(
                          "block w-full pl-3.5 before:pointer-events-none before:absolute before:-left-1 before:top-1/2 before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full text-slate-400 before:bg-slate-700 hover:text-slate-300",
                         
                        )}
                      >
                        {link.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </nav>

  
      </div>
    </div>
  );
}
