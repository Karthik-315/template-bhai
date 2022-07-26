import React from "react";
import LinkItem from "./LinkItem";

export default function Navbar({ isMenuActive }) {
  const navStyle = `col-span-2 row-start-3 mt-5 ${
    !isMenuActive ? "opacity-0 translate-x-full" : "opacity-100 translate-x-0"
  } lg:mt-0 lg:flex lg:grow lg:justify-center transition-[transform_opacity] duration-500`;

  console.log(navStyle);

  return (
    <nav className={navStyle}>
      <ul className="flex h-full w-full justify-between lg:w-auto lg:gap-x-7">
        <LinkItem targetSection="hero" linkText="Home" />
        <LinkItem targetSection="hero" linkText="Restaurant" />
        <LinkItem targetSection="hero" linkText="Services" />
        <div className="relative">
          <LinkItem targetSection="hero" linkText="Menu" />
          <div className="bg-popping after:border-t-popping after:border-l-popping absolute left-0 -top-full rounded-full p-0.5 px-2 after:absolute after:-bottom-1.5 after:left-2.5 after:top-auto after:right-auto after:-z-10 after:h-0 after:w-0  after:border-4 after:border-solid after:border-transparent after:content-[''] lg:left-2">
            <p className="text-secondary text-xs">New</p>
          </div>
        </div>
      </ul>
    </nav>
  );
}
