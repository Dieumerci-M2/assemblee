import React from "react";
import Logo from "../header/logo";
import NavBar from "../header/navbar";
import { Button } from "../ui/button";
import { headerZone } from "@/data/headerZone";

function Header() {
  return (
    <div className="w-full shadow h-20 ">
      <div className="m-1 lg:m-auto w-full h-14 px-1 lg:px-6 flex items-center justify-center lg:justify-between gap-1">
        <div className="">
          <Logo />
        </div>
        <div>
          <NavBar />
        </div>
        <div>
          <Button className=" text-[6px] md:text-lg h-6 lg:h-12 p-2 md:p-6"><a href="#footer">{headerZone.contactButtonText}</a></Button>
        </div>
      </div>
    </div>
  );
}

export default Header;
