import React from "react";
import Image from "next/image";

export default function SearchForm({ isMenuActive }) {
  const searchBarStyle = `col-span-2 row-start-2 ${
    !isMenuActive ? "opacity-0 -translate-x-full" : "opacity-100 translate-x-0"
  } items-center flex lg:w-1/4 mt-3 lg:mt-0 transition-[transform_opacity] duration-500`;

  return (
    <section className={searchBarStyle}>
      <form className="mr-2 flex grow rounded-lg shadow-lg">
        <input
          type="search"
          placeholder="Search"
          className="grow rounded-l-lg border-0 p-2 outline-0"
        />
        <button className="rounded-r-lg px-2">
          <div className="relative h-5 w-5 object-cover">
            <Image
              src="/assets/icons/search.svg"
              alt="Search"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </button>
      </form>

      <div className="relative h-5 w-5 object-cover">
        <Image
          src="/assets/icons/bag.svg"
          alt="Cart Bag"
          layout="fill"
          objectFit="cover"
        />

        <svg
          width="6"
          height="6"
          className="absolute -right-1 top-0 rounded-full"
        >
          <circle cx="3" cy="3" r="3" fill="rgb(255, 107, 0)" />
        </svg>
      </div>
    </section>
  );
}
