"use client"
import ChoraleCard from '@/components/aboutpage/chorales/card'
import CoucheSocialCard from '@/components/aboutpage/couche_social/card'
import HeroSection from '@/components/aboutpage/heroSection';
import Image, { StaticImageData } from "next/image";
import { homePageContent } from '@/data/homePage'
import { aboutPageContents } from '@/data/aboutPage'
import NosServiteursCarousel from '@/components/carousels/ServiteurCarousel';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const a_propos = () => {
  const {
    assosiationSection,
    coucheSocialSection,
    choraleSection,
  } = aboutPageContents
  const {
    nos_seviteurs
  } = homePageContent
  return (
    <main className='[&>*:last-child]:mb-20'>
      <section className=''>
        <div className="w-full">
          <HeroSection />
        </div>
      </section>
      <article className='px-[10rem]'>
        <section className="w-full flex flex-col items-center gap-10">
          <h3 className=" text-4xl text-center font-semibold my-20 max-w-[50%] text-cblue">
            {assosiationSection.title}
          </h3>
          <div className='flex gap-10 w-full'>
            <div className='flex flex-col items-start gap-6 w-[50%]'>
              <h3 className='font-semibold text-2xl'>{assosiationSection.table[0].title}</h3>
              <span>{assosiationSection.table[0].description}</span>
             <Link href="/a_propos/association"><Button variant="secondary" className="px-10">{assosiationSection.table[0].buttonText}</Button></Link>
            </div>
            <div className='w-[50%] h-[25rem] relative'>
              <Image
                fill
                style={{objectFit: "cover" }}
                alt="card"
                src={assosiationSection.table[0].image}
              />
            </div>
          </div>
          <div className='flex gap-10'>
            <div className='w-[50%] h-[25rem] relative'>
              <Image
                fill 
                style={{objectFit : 'fill'}} 
                alt="card" 
                src={assosiationSection.table[1].image} 
              />
            </div>
            <div className='flex flex-col items-start gap-6 py-4 w-[50%] h-300'>
              <h3 className='font-semibold text-2xl'>{assosiationSection.table[1].title}</h3>
              <span>{assosiationSection.table[1].description}</span>
              <Button variant="secondary" className="px-10">{assosiationSection.table[1].buttonText}</Button>
            </div>
          </div>
          <div className='flex gap-10'>
            <div className='flex items-start flex-col py-10 gap-6 w-[50%] h-300'>
              <h3 className='font-semibold text-2xl'>{assosiationSection.table[2].title}</h3>
              <span>{assosiationSection.table[2].description}</span>
              <Button variant="secondary" className="px-10">{assosiationSection.table[2].buttonText}</Button>
            </div>
            <div className='w-[50%] h-[25rem] relative'>
              <Image
                fill 
                style={{objectFit : 'fill'}} 
                alt="card" 
                src={assosiationSection.table[2].image} 
              />
            </div>
          </div>
          <div className='flex flex-row gap-10'>
            <div className='w-[50%] h-[25rem] relative'>
              <Image
                fill 
                style={{objectFit : 'fill'}} 
                alt="card" 
                src={assosiationSection.table[3].image} 
              />
            </div>
            <div className='flex items-start flex-col gap-10 py-10 w-[50%] h-300'>
              <h3 className='font-semibold text-2xl'>{assosiationSection.table[3].title}</h3>
              <span>{assosiationSection.table[3].description}</span>
              <Button variant="secondary" className="px-10">{assosiationSection.table[3].buttonText}</Button>
            </div>
          </div>
        </section>
        <section className="w-full flex flex-col items-center">
          <h3 className=" text-4xl text-center font-semibold my-20 max-w-[50%] text-cblue">
            {nos_seviteurs.title}
          </h3>
          <div className="w-full flex items-center justify-center gap-8">
           <NosServiteursCarousel />
          </div>
        </section >
        <section className="w-full flex flex-col items-center">
          <h3 className=" text-4xl text-center font-semibold my-20 max-w-[50%] text-cblue">
            {coucheSocialSection.title}
          </h3>
          <div className="w-full flex items-center justify-center gap-8">
            {coucheSocialSection.table.map((tab) => (
              <CoucheSocialCard
                key={tab.title}
                title={tab.title}
                description={tab.description}
                image={tab.image}
              />
            ))}
          </div>
        </section>
        <section className="w-full flex flex-col items-center">
          <h3 className=" text-4xl text-center font-semibold my-20 max-w-[50%] text-cblue">
            {choraleSection.title}
          </h3>
          <div className='flex gap-6'>
            {choraleSection.table.map((tab) => (
              <ChoraleCard
                key={tab.title}
                title={tab.title}
                description={tab.description}
                image={tab.image}
              />
            ))}
          </div>
        </section>
      </article>
    </main>
  )
}

export default a_propos
