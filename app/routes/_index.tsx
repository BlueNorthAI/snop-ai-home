import { LinksFunction } from "@remix-run/node";

import { Layout } from "../components/Layout";




import layoutStylesheetUrl from "../styles/layout.css";
import tailwindStylesheetUrl from "../styles/tailwind.css";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: tailwindStylesheetUrl },
  { rel: "stylesheet", href: layoutStylesheetUrl },
];

export default function Index() {
  return (
    <div className="h-full bg-white dark:bg-slate-900">
      <Layout />
    </div>
  );
}
