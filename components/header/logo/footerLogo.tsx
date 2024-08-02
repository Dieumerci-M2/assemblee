import React from "react";
import logo from "@/public/assets/logo.png";
import Image from "next/image";

function FooterLogo() {
  return (
    <div className=" flex relative items-center justify-center h-8 md:h-20 w-14 md:w-40">
      <Image fill style={{ objectFit: "contain" }} alt="logo" src={logo} />
    </div>
  );
}

export default FooterLogo;
