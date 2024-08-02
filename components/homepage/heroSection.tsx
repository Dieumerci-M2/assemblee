import React from "react";
import Image, { StaticImageData } from "next/image";
import { homePageContent } from "@/data/homePage";
import { Button } from "../ui/button";
import {Diplomata_SC} from "next/font/google"
import Link from 'next/link'

const diploma = Diplomata_SC({
    subsets :['latin'],
    weight: ["400"],
    style: "normal",
    display: "swap",
    variable: "--diploma",
})

function HeroSection({imgUrl} : {imgUrl : StaticImageData}) {
  return (
    <div className="w-full h-auto">
      <div className=" w-full m-auto relative h-[40rem]">
        <Image
          alt="heroIMage"
          className=" absolute"
          fill
          style={{objectFit : "cover"}}
          src={imgUrl}
        />
        <div className=" absolute w-full h-full flex items-center justify-center gap-8 flex-col">
          <h3 className={  ` ${diploma.className} m-2 lg:m-0 text-white text-center text-lg lg:text-3xl font-bold uppercase`}>{homePageContent.heroSection.text}</h3>
          <Button size="lg" className=""><Link href="/a_propos">{homePageContent.heroSection.buttonText}</Link></Button>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
