import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "@remix-run/react";
import clsx from "clsx";
import { useEffect, useState } from "react";

import { HeroBackground } from "../components/HeroBackground";
import { Logo, Logomark } from "../components/Logo";


function GitHubIcon(props) {
  return (
    <svg aria-hidden="true" viewBox="0 0 16 16" {...props}>
      <path d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z" />
    </svg>
  );
}

const navigation = [
  { name: "Application", to: "/demo/dashboard/optimizer/optimize" },
  { name: "Features", to: "#" },
  { name: "Marketplace", to: "#" },
  { name: "Company", to: "#" },
];

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
      <header
        className={clsx(
          "fixed  w-full top-0 z-50 flex flex-none flex-wrap items-center justify-between bg-white px-4 py-2 shadow-md shadow-slate-900/5 transition duration-500 sm:px-6 lg:px-8 dark:shadow-none",
          isScrolled
            ? "dark:bg-slate-900/95 dark:backdrop-blur dark:[@supports(backdrop-filter:blur(0))]:bg-slate-900/75"
            : "dark:bg-transparent",
        )}
      >
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="relative mt-6 z-10 mr-6 flex lg:hidden">
          <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
            <Dialog.Panel className="fixed inset-0 z-50 overflow-y-auto bg-gray-900 px-6 py-6 lg:hidden">
              <div className="flex items-center justify-between">
                <Link to="#" className="-m-1.5 p-1.5">
                  <div className="flex items-center " aria-hidden="true">
                    <Logomark />
                    <h1 className="ml-2 flex items-center  text-base font-bold tracking-wide text-white">
                      BlueNorth AI
                    </h1>
                  </div>
                </Link>
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-gray-400"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-4 flow-root">
                <div className="-my-6 divide-y divide-gray-500/25">
                  <div className="space-y-2 py-6">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.to}
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-400/10"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                  <div className="py-6">
                    <Link
                      to="/join"
                      className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-6 text-white hover:bg-gray-400/10"
                    >
                      Sign up
                    </Link>
                    <Link
                      to="/login"
                      className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-6 text-white hover:bg-gray-400/10"
                    >
                      Log in
                    </Link>
                  </div>
                </div>
              </div>
            </Dialog.Panel>
          </Dialog>
        </div>
        {/* lg */}
        <div className="grid grid-cols-3 "></div>
        <div className="relative flex flex-grow basis-0 items-center">
          <Link to="/" aria-label="Home page">
            <Logo className="h-9 w-auto fill-slate-700  dark:fill-sky-100" />
          </Link>
        </div>

        <div>
          <nav
            className="ml-6 pl-6 flex items-center justify-center"
            aria-label="Global"
          >
            <div className="hidden lg:flex lg:gap-x-6 lg:justify-center ml-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.to}
                  className=" text-base lg:text-lg font-semibold leading-6 text-gray-600 hover:text-black"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </nav>
        </div>

        <div className="relative flex items-center justify-end  md:flex-grow ">
          <div className="hidden md:mx-2 sm:block md:block lg:block xl:block">
            <div className="relative mr-2 text-gray-500 ">
              <input
                className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
                type="search"
                name="search"
                placeholder="Search"
              />
              <button
                type="submit"
                className="absolute right-0 top-0 mt-3 mr-4"
              >
                <svg
                  className="text-gray-600 h-4 w-4 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  version="1.1"
                  id="Capa_1"
                  x="0px"
                  y="0px"
                  viewBox="0 0 56.966 56.966"
                  style={{ enableBackground: "new 0 0 56.966 56.966" }}
                  xmlSpace="preserve"
                  width="512px"
                  height="512px"
                >
                  <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                </svg>
              </button>
            </div>
          </div>
          <div className="hidden mx-4 lg:flex lg:justify-end lg:text-base text-sm">
            <Link
              to="/join"
              className="font-semibold leading-6 hover:text-black text-gray-500"
            >
              Sign up <span aria-hidden="true">&rarr;</span>
            </Link>

            <span className="ml-6 inline-flex rounded-md shadow-sm" />
            <Link
              to="/auth"
              className="font-semibold leading-6 hover:text-black text-gray-500"
            >
              Log in <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
          <Link to="https://github.com" className="group" aria-label="GitHub">
            <GitHubIcon className="h-6 w-6 fill-slate-400 group-hover:fill-slate-500 dark:group-hover:fill-slate-300" />
          </Link>
        </div>
      </header>
      <div className="relative isolate h-full w-full overflow-hidden bg-slate-900">
        <div className="px-6 lg:px-8">
          <div className="relative mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
            <div className="hidden sm:mb-8 sm:flex sm:justify-center">
              <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-400 ring-1 ring-white/10 hover:ring-white/20">
                Announcing our next round of funding.{" "}
                <Link to="#" className="font-semibold text-white">
                  <span className="absolute inset-0" aria-hidden="true" />
                  Read more <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </div>
            <div className="relative z-10 text-center">
              <h1 className="bg-gradient-to-r from-indigo-200 via-sky-400 to-indigo-200 bg-clip-text font-display text-6xl font-bold text-transparent lg:text-8xl">
                BlueNorth AI
              </h1>
              <p className="mt-6 text-base lg:text-lg  text-gray-300">
                Enterprise AI suite to transform Supply Chain Planning and
                Execution
              </p>
              <div className="mt-8 flex justify-center gap-4 ">
                <button
                  to="/"
                  type="button"
                  className="rounded-full bg-sky-300 py-2 px-4 text-sm font-semibold text-slate-900 hover:bg-sky-200 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300/50 active:bg-sky-500"
                >
                  Get started
                </button>
                <button
                  type="button"
                  className="rounded-full bg-slate-800 py-2 px-4 text-sm font-medium text-white hover:bg-slate-700 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/50 active:text-slate-400"
                >
                  Request Demo
                </button>
              </div>
            </div>
          </div>

          <div>
            <HeroBackground className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 lg:left-0 lg:translate-x-0 lg:translate-y-[-60%]" />
          </div>
        </div>
      </div>
    </>
  );
}
