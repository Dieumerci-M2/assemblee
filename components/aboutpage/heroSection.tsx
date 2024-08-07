import React from 'react'
import Image from "next/image";
import { aboutPageContents } from '@/data/aboutPage';

const HeroSection = () => {
  return (
    <div>
       <div className=" w-full m-auto relative h-[35rem] md:h-[45rem]">
        <Image
          alt="heroIMage"
          className=" absolute"
          fill
          style={{objectFit : "cover"}}
          src={aboutPageContents.heroSection.coverImage}
        />
        <div className=" absolute w-full h-full flex items-center justify-center gap-16 flex-col">
          <h3 className={  ` text-black text-xl md:text-3xl px-2 font-bold uppercase`}>{aboutPageContents.heroSection.title0}</h3>
          <h3 className={  ` text-black text-lg md:text-3xl text-center px-2 font-bold uppercase`}>{aboutPageContents.heroSection.title1}</h3>
        </div>
      </div>
    </div>
  )
}

export default HeroSection

