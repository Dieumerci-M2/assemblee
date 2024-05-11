import React from "react";
import logo from "@/public/assets/logo.png";
import Image from "next/image";

function Logo() {
  return (
    <div className="  flex items-center justify-center h-14 w-28 relative">
      <Image fill style={{ objectFit: "contain" }} alt="logo" src={logo} />
    </div>
  );
}

export default Logo;
