import React from 'react'
import { programmesPageContents } from '@/data/programsPage'
import Image from 'next/image'
const HeroSection = () => {
  return (
    <div>
       <div className=" w-full m-auto relative h-[40rem]">
        <Image
          alt="heroIMage"
          className=" absolute"
          fill
          style={{objectFit : "cover"}}
          src={programmesPageContents.heroSection.coverImage}
        />
        <div className=" absolute w-full h-full flex items-center justify-center gap-16 flex-col">
          <h3 className={  ` text-black text-3xl font-bold uppercase`}>{programmesPageContents.heroSection.title0}</h3>
          <h3 className={  ` text-black text-3xl font-bold uppercase`}>{programmesPageContents.heroSection.title1}</h3>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
