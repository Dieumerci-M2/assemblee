import React from "react";
import Logo from "../header/logo";
import NavBar from "../header/navbar";
import { Button } from "../ui/button";
import { headerZone } from "@/data/headerZone";

function Header() {
  return (
    <div className="w-full h-auto">
      <div className="m-auto text-lg w-[80rem]   h-14 px-6 flex items-center justify-between">
        <Logo />

        <NavBar />

        <Button className=" text-lg">{headerZone.contactButtonText}</Button>
      </div>
    </div>
  );
}

export default Header;
