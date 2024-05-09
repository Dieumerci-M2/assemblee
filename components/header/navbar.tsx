"use client";

import React, { useState } from "react";
import { navigations } from "@/data/navigation";
import Link from "next/link";

function NavBar() {
  const [active, setActive] = useState(navigations.defaultActive);

  return (
    <ul className="flex h-12 px-3 items-center  justify-center gap-4">
      {navigations.items.map((nav) => (
        <li
          onClick={() => setActive(nav.label)}
          className={`${active == nav.label ? " text-cblue" : " text-black"}`}
          key={nav.path}
        >
          <Link href={nav.path}>
            <span className=" capitalize">{nav.label}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default NavBar;
