import { Link, useLocation, Outlet } from "@remix-run/react";
import clsx from "clsx";
import { useEffect, useState } from "react";

import blurIndigoImage from "../../public/assets/blur-cyan.png";
import blurCyanImage from "../../public/assets/blur-indigo.png";
import { Hero } from "../components/Hero";
import { Logo } from "../components/Logo";
import { MobileNavigation } from "../components/MobileNavigation";
 import  Search  from "../components/Search";
import { ThemeSelector } from "../components/ThemeSelector";

function GitHubIcon(props) {
  return (
    <svg aria-hidden="true" viewBox="0 0 16 16" {...props}>
      <path d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z" />
    </svg>
  );
}

function Header() {
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
    <header
      className={clsx(
        "sticky top-0 z-50 flex flex-none flex-wrap items-center justify-between bg-white px-4 py-5 shadow-md shadow-slate-900/5 transition duration-500 sm:px-6 lg:px-8 dark:shadow-none",
        isScrolled
          ? "dark:bg-slate-900/95 dark:backdrop-blur dark:[@supports(backdrop-filter:blur(0))]:bg-slate-900/75"
          : "dark:bg-transparent",
      )}
    >
      <div className="mr-6 flex lg:hidden">
        <MobileNavigation />
      </div>
      <div className="relative flex flex-grow basis-0 items-center">
        <Link to="/" aria-label="Home page">
          <Logo className=" h-9 w-auto fill-slate-700  dark:fill-sky-100" />
        </Link>
      </div>
      {/* <div className="">
        <Search />
      </div> */}
      <div className="relative flex basis-0 items-center justify-end gap-6 sm:gap-8 md:flex-grow">
        <ThemeSelector />
        <Link
          to="login-blue"
          className="hidden lg:block lg:text-sm lg:font-semibold lg:leading-6 lg:text-gray-900"
        >
          Log in
        </Link>
        <Link
          to="/signup"
          className="rounded-md bg-sky-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-sky-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 "
        >
          Sign up
        </Link>
        {/* <Link to="https://github.com" className="group" aria-label="GitHub">
          <GitHubIcon className="h-6 w-6 fill-slate-400 group-hover:fill-slate-500 dark:group-hover:fill-slate-300" />
        </Link> */}
      </div>
    </header>
  );
}

export default function Index() {
   const pathname = useLocation().pathname;
   const isHomePage = pathname === "/home";
  return (
    <div className="flex w-full flex-col">
      <Header />

      <Hero />
   
      <div className="flex h-24 w-full items-center justify-center">
        <div className="relative">
          <img
            className="absolute "
            src={blurCyanImage}
            alt=""
            width={530}
            height={530}
          />
          <img
            className="absolute"
            src={blurIndigoImage}
            alt=""
            width={567}
            height={567}
          />
        </div>

      
      </div>

    
    
    </div>
  ) 
}