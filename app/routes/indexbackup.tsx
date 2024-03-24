import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "@remix-run/react";
import clsx from "clsx";
import { useEffect, useState } from "react";

import blurCyanImage from "../../public/assets/blur-cyan.png";
import blurIndigoImage from "../../public/assets/blur-indigo.png";
// import Capabilities from "../components/Capabilities";
import { HeroBackground } from "../components/HeroBackground";
import { Logo, Logomark } from "../components/Logo";
import { ThemeSelector } from "../components/ThemeSelector";

function GitHubIcon(props) {
  return (
    <svg aria-hidden="true" viewBox="0 0 16 16" {...props}>
      <path d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z" />
    </svg>
  );
}

const imageIds = [
  "1500462918059-b1a0cb512f1d",
  "1531581147762-5961e6e2e6b1",
  "1626204327506-0d3ee11d7752",
  "1549068106-b024baf5062d",
];
const actions = [
  {
    name: "Generative AI Based Control Tower",
    to: "/ai",
    img: "/assets/generateAi.png",
    description:
      " Across industries, organizations like yours are pivoting to manage increasingly complex supply chains, while juggling delivery expectations and cost.",
  },
  {
    name: "Diagnostic Engine",
    to: "http://localhost:50288/snop/truck",
    img: "/assets/salesopplanning.png",
    description:
      "Across industries, organizations like yours are pivoting to manage increasingly complex supply chains, while juggling delivery expectations and cost.",
  },
  {
    name: "Optimization Engine",
    to: "/snop/dashboard/demand",
    img: "/assets/diagnostics.png",
    description:
      "With shrinking product lifecycles, demand fluctuations and more granular customer segmentation, organizations like yours depend on intelligent decision support for their essential production.",
  },

  {
    name: "Execution Engine",
    to: "/snop/dashboard/inventory",
    img: "/assets/kpicard.png",
    description:
      "Across industries, organizations like yours are pivoting to manage increasingly complex supply chains, while juggling delivery expectations and cost.",
  },
];
const navigation = [
  { name: "Application", to: "/snop/dashboard/optimizer/optimize" },
  { name: "Features", to: "#" },
  { name: "Marketplace", to: "#" },
  { name: "Company", to: "#" },
];
function Header() {
  let [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setIsScrolled(window.scrollY > 0);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <header
      className={clsx(
        "sticky top-0 z-50 flex flex-none flex-wrap items-center justify-between bg-white px-4 py-5 shadow-md shadow-slate-900/5 transition duration-500 sm:px-6 lg:px-8 dark:shadow-none",
        isScrolled
          ? "dark:bg-slate-900/95 dark:backdrop-blur dark:[@supports(backdrop-filter:blur(0))]:bg-slate-900/75"
          : "dark:bg-transparent",
      )}
    >
      <div className="mr-6 flex lg:hidden">{/* <MobileNavigation /> */}</div>
      <div className="relative flex flex-grow basis-0 items-center">
        <Link to="/" aria-label="Home page">
          <Logo className=" h-9 w-auto fill-slate-700  dark:fill-sky-100" />
        </Link>
      </div>
      {/* <div className="-my-5 mr-6 sm:mr-8 md:mr-0">
        <Search />
      </div> */}
      <div className="relative flex basis-0 justify-end gap-6 sm:gap-8 md:flex-grow">
        <ThemeSelector className="relative z-10" />
        <Link to="https://github.com" className="group" aria-label="GitHub">
          <GitHubIcon className="h-6 w-6 fill-slate-400 group-hover:fill-slate-500 dark:group-hover:fill-slate-300" />
        </Link>
      </div>
    </header>
  );
}

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setIsScrolled(window.scrollY > 0);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <>
      <div className="flex w-full flex-col">
        <Header />
      </div>

      <div className="h-full overflow-y-auto overflow-x-hidden bg-slate-900 dark:-mb-32 dark:mt-[-4.75rem] dark:pb-32 dark:pt-[4.75rem]">
        <div className="my-16 py-16 sm:px-2 lg:relative lg:px-0 lg:py-28 mx-auto flex items-center">
          <div className="mx-auto grid max-w-2xl items-center gap-x-8 gap-y-16 px-4 lg:max-w-4xl lg:px-8 xl:gap-x-16 xl:px-12">
            <div className="relative z-10 text-center">
              <img
                className="absolute bottom-full right-full -mb-56 -mr-72"
                src={blurCyanImage}
                alt=""
                width={530}
                height={530}
              />
              <div className="relative mt-4">
                <p className="inline bg-gradient-to-r from-indigo-200 via-sky-400 to-indigo-200 bg-clip-text font-display text-7xl font-bold tracking-tight text-transparent">
                  BlueNorth AI
                </p>
                <p className="mt-3 text-4xl tracking-tight text-white">
                  Enterprise AI suite to transform Supply Chain Planning and
                  Execution
                </p>
                <div className="mt-8 flex justify-center gap-4 ">
                  <button
                    className="rounded-full bg-sky-300 py-2 px-4 text-sm font-semibold text-slate-900 hover:bg-sky-200 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300/50 active:bg-sky-500"
                    to="/"
                  >
                    Get started
                  </button>
                  <button className="rounded-full bg-slate-700 py-2 px-4 text-sm font-medium text-white hover:bg-slate-700 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/50 active:text-slate-400">
                    Request Demo
                  </button>
                </div>
              </div>
            </div>
            <div className="relative lg:static xl:pl-10">
              <div className="absolute inset-x-[-50vw] -bottom-48 -top-32 [mask-image:linear-gradient(transparent,white,white)] lg:-bottom-32 lg:-top-32 lg:left-[calc(50%+14rem)] lg:right-0 lg:[mask-image:none] dark:[mask-image:linear-gradient(transparent,white,transparent)] lg:dark:[mask-image:linear-gradient(white,white,transparent)]">
                <HeroBackground className="absolute left-1/2 top-3/4 -translate-x-1/2 -translate-y-1/2 lg:left-0 lg:translate-x-0 lg:translate-y-[-60%]" />
              </div>
              <div className="relative">
                <img
                  className="absolute bottom-full  -mb-56 -mr-72 -right-56"
                  src={blurCyanImage}
                  alt=""
                  width={530}
                  height={530}
                />
                <img
                  className="absolute -bottom-40 -right-44"
                  src={blurIndigoImage}
                  alt=""
                  width={567}
                  height={567}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="relative grid  place-items-center mx-8 ">
          <ul className="flex w-full gap-4">
            {actions.map((action) => (
              <li
                key={action.name}
                className="group relative h-[500px] w-full overflow-hidden rounded-2xl bg-rose-300 flex-1 hover:grow-[1.25]"
              >
                <Link to={action.to}>
                  <img
                    className="absolute inset-0 w-full h-full object-cover"
                    src={action.img}
                    alt=""
                  />

                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 from-30% p-4">
                    <div className="w-48">
                      <h2 className="text-2xl font-medium text-white">
                        {action.name}
                      </h2>
                      <div className="grid grid-rows-[0fr] transition-all  group-hover:grid-rows-[1fr]">
                        <p className="mt-2 overflow-hidden text-white/70 opacity-0 transition duration-300 group-hover:opacity-100">
                          {action.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex h-24 w-full items-center justify-center">
          <h1 className="max-w-2xl font-display text-5xl tracking-tight text-white ">
            Our Capabilities
          </h1>
        </div>
        <div className="mx-auto h-1 w-1/3 bg-gradient-to-r from-indigo-200 via-sky-400 to-indigo-200 "></div>

        <div className="mx-auto h-1 w-1/3 bg-gradient-to-r from-indigo-200 via-sky-400 to-indigo-200 "></div>
        <Capabilities />
      </div>
    </>
  );
}
