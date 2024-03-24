import { LinksFunction } from "@remix-run/node";
import React from "react";

import Framework from "~/components/Framework";

import layoutStylesheetUrl from "../styles/layout.css?url";
import tailwindStylesheetUrl from "../styles/tailwind.css?url";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: layoutStylesheetUrl },
  { rel: "stylesheet", href: tailwindStylesheetUrl },
];
export default function HomeIndex() {
  return (
    <div className="">
      <Framework />
    </div>
  );
}
