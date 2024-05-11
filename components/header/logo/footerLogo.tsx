import React from "react";
import logo from "@/public/assets/logo.png";
import Image from "next/image";

function FooterLogo() {
  return (
    <div className=" flex items-center justify-center h-20 w-42 relative">
      <Image fill style={{ objectFit: "contain" }} alt="logo" src={logo} />
    </div>
  );
}

export default FooterLogo;
