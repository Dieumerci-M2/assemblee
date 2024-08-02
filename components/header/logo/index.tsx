import React from "react";
import logo from "@/public/assets/logo.png";
import Image from "next/image";

function Logo() {
  return (
    <div className="flex relative items-center justify-center h-8 lg:h-14 w-14 lg:w-28">
      <Image fill style={{ objectFit: "contain" }} alt="logo" src={logo} />
    </div>
  );
}

export default Logo;
 