import React, { useState } from "react";
import Navbar from "./Navbar";
import SearchForm from "./SearchForm";
import Image from "next/image";

export default function Header() {
  const [isMenuActive, setIsMenuActive] = useState();

  function toggleMenuBar() {
    console.log(`Toggling Menu`);
    setIsMenuActive((prevVal) => !prevVal);
  }

  return (
    <header className="grid grid-cols-2 grid-rows-3 items-center justify-between overflow-hidden p-3 lg:flex lg:flex-row lg:p-5 lg:px-14">
      <section className="my-2 grow">
        <div className="relative w-fit">
          <h3 className="text-2xl font-medium uppercase tracking-tighter lg:text-3xl">
            Yummy
          </h3>
          <svg width="5" height="5" className="absolute -right-1 bottom-2">
            <rect width="5" height="5" fill="rgb(255, 107, 0)" />
          </svg>
        </div>
      </section>

      <section className="block place-self-end self-center lg:hidden">
        <button
          className="relative h-7 w-7 object-cover"
          onClick={toggleMenuBar}
        >
          <Image
            src="/assets/icons/menu.svg"
            alt="Menu"
            layout="fill"
            objectFit="cover"
          />
        </button>
      </section>

      <Navbar isMenuActive={isMenuActive} />
      <SearchForm isMenuActive={isMenuActive} />
    </header>
  );
}
