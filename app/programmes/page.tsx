"use client"

import React from 'react'
import HeroSection from '@/components/programmesPage/heroSection'
import ProgrammeDimeancheCarousel from '@/components/carousels/programmeDimeancheCarousel'
import ProgrammeSemaineCarousel from '@/components/carousels/programmeSemaineCarousel'
import { programmesPageContents } from '@/data/programsPage'

const programmes = () => {
  const {
    programmeDimancheSection,
    programmesSemaineSection
  } = programmesPageContents
  return (
    <main>
      <section className='[&>*:last-child]:mb-20'>
        <HeroSection />
      </section>
      <article className='px-[10rem] [&>*:last-child]:mb-20'>
        <section className="w-full flex flex-col items-center [&>*:last-child]:mb-20">
          <h3 className=" text-4xl font-semibold mb-20 text-cblue">
            {programmeDimancheSection.title}
          </h3>
          <div className="w-full flex items-center justify-center gap-8">
            <ProgrammeDimeancheCarousel />
          </div>
        </section>
        <section className="w-full flex flex-col items-center">
          <h3 className="text-4xl font-semibold mb-20 text-cblue">
            {programmesSemaineSection.title}
          </h3>
          <div className='w-full flex items-center justify-center gap-6'>
            <ProgrammeSemaineCarousel/>
          </div>
        </section>
      </article>
    </main>
  )
}

export default programmes
