import React from "react";
import Link from "next/link";

export default function LinkItem({ targetSection, linkText }) {
  const linkTarget = `#${targetSection}`;
  return (
    <li>
      <Link href={linkTarget}>
        <a className="after:bg-popping relative text-sm uppercase after:absolute after:-bottom-1 after:right-1 after:left-1 after:h-0.5 after:scale-0 after:transition-all after:content-[''] hover:after:scale-100 lg:text-lg">
          {linkText}
        </a>
      </Link>
    </li>
  );
}
