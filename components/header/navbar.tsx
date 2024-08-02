"use client";

import React, { useState } from "react";
import { navigations } from "@/data/navigation";
import Link from "next/link";

function NavBar() {
  const [active, setActive] = useState(navigations.defaultActive);

  return (
    <ul className="flex h-8 lg:h-12 px-1 lg:px-3 items-center  justify-center gap-1 lg:gap-4">
      {navigations.items.map((nav) => (
        <li
          onClick={() => setActive(nav.label)}
          className={` p-1${active == nav.label ? " text-cblue relative after:absolute after:w-full after:left-0 after:bottom-0 after:h-[2px] after:bg-cblue" : " text-black"}`}
          key={nav.path}
        >
          <Link href={nav.path}>
            <span className=" text-[6px] md:text-xl">{nav.label}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default NavBar;
