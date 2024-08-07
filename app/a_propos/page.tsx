"use client"
import ChoraleCard from '@/components/aboutpage/chorales/card'
import CoucheSocialCard from '@/components/aboutpage/couche_social/card'
import HeroSection from '@/components/aboutpage/heroSection';
import Image, { StaticImageData } from "next/image";
import { homePageContent } from '@/data/homePage'
import { aboutPageContents } from '@/data/aboutPage'
import NosServiteursCarousel from '@/components/carousels/ServiteurCarousel';
import CouchesSocialCarousel from '@/components/carousels/couchesSocialCarousel';
import ChoraleCarousel from '@/components/carousels/choraleCarousel';
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
      <article className='md:px-[10rem]'>
        <section className="w-full flex flex-col justify-center items-center gap-0 md:gap-10">
          <h3 className="text-lg md:text-4xl text-center font-semibold my-4 md:my-20 max-w-[50%] text-cblue">
            {assosiationSection.title}
          </h3>
          <div className='flex flex-col md:flex-row gap-10 w-full'>
            <div className='flex flex-col items-center justify-center md:justify-start md:items-start gap-6 w-[90%] md:w-[50%]'>
              <h3 className='font-semibold text-lg md:text-2xl'>{assosiationSection.table[0].title}</h3>
              <span className='text-sm text-center md:text-lg md:text-left'>{assosiationSection.table[0].description}</span>
              <Link href="/a_propos/association">
                <Button variant="secondary" className="px-24 md:px-10 text-sm md:text-lg">
                  {assosiationSection.table[0].buttonText}
                </Button>
              </Link>
            </div>
            <div className='w-full md:w-[50%] h-[25rem] relative'>
              <Image
                fill
                style={{ objectFit: "cover" }}
                alt="card"
                src={assosiationSection.table[0].image}
              />
            </div>
          </div>
          <div className='flex flex-col-reverse md:flex-row gap-10'>
            <div className='w-full md:w-[50%] h-[25rem] relative'>
              <Image
                fill
                style={{ objectFit: 'fill' }}
                alt="card"
                src={assosiationSection.table[1].image}
              />
            </div>
            <div className='flex flex-col items-center justify-center md:justify-start md:items-start gap-6 w-[90%] md:w-[50%] mt-10 md:mt-0'>
              <h3 className='font-semibold text-lg md:text-2xl'>{assosiationSection.table[1].title}</h3>
              <span className='text-sm text-center md:text-lg md:text-left'>{assosiationSection.table[1].description}</span>
              <Link href="/a_propos/association">
                <Button variant="secondary" className="px-24 md:px-10 text-sm md:text-lg">
                  {assosiationSection.table[1].buttonText}
                </Button>
              </Link>
            </div>
          </div>
          <div className='flex flex-col md:flex-row gap-10 w-full'>
            <div className='flex flex-col items-center justify-center md:justify-start md:items-start gap-6 w-[90%] md:w-[50%] mt-10 md:mt-0'>
              <h3 className='font-semibold text-lg md:text-2xl'>{assosiationSection.table[2].title}</h3>
              <span className='text-sm text-center md:text-lg md:text-left'>{assosiationSection.table[2].description}</span>
              <Link href="/a_propos/association">
                <Button variant="secondary" className="px-24 md:px-10 text-sm md:text-lg">
                  {assosiationSection.table[2].buttonText}
                </Button>
              </Link>
            </div>
            <div className='w-full md:w-[50%] h-[25rem] relative'>
              <Image
                fill
                style={{ objectFit: 'fill' }}
                alt="card"
                src={assosiationSection.table[2].image}
              />
            </div>
          </div>
          <div className='flex flex-col-reverse md:flex-row gap-10'>
            <div className='w-full md:w-[50%] h-[25rem] relative'>
              <Image
                fill
                style={{ objectFit: 'fill' }}
                alt="card"
                src={assosiationSection.table[3].image}
              />
            </div>
            <div className='flex flex-col items-center justify-center md:justify-start md:items-start gap-6 w-[90%] md:w-[50%] mt-10 md:mt-0'>
              <h3 className='font-semibold text-lg md:text-2xl'>{assosiationSection.table[3].title}</h3>
              <span className='text-sm text-center md:text-lg md:text-left'>{assosiationSection.table[3].description}</span>
              <Link href="/a_propos/association">
                <Button variant="secondary" className="px-24 md:px-10 text-sm md:text-lg">
                  {assosiationSection.table[3].buttonText}
                </Button>
              </Link>
            </div>
          </div>
        </section>
        <section className="w-full flex flex-col items-center">
          <h3 className="text-lg md:text-4xl text-center font-semibold my-8 md:my-20 max-w-[50%] text-cblue">
            {nos_seviteurs.title}
          </h3>
          <div className="w-full flex items-center justify-center gap-8">
            <NosServiteursCarousel />
          </div>
        </section>
        <section className="w-full flex flex-col items-center">
          <h3 className="text-lg md:text-4xl text-center font-semibold my-8 md:my-20 max-w-[50%] text-cblue">
            {coucheSocialSection.title}
          </h3>
          <div className="w-full flex items-center justify-center gap-8">
            <CouchesSocialCarousel />
          </div>
        </section>
        <section className="w-full flex flex-col items-center">
          <h3 className="text-lg md:text-4xl text-center font-semibold my-8 md:my-20 max-w-[50%] text-cblue">
            {choraleSection.title}
          </h3>
          <div className='flex gap-6'>
            <ChoraleCarousel />
          </div>
        </section>
      </article>
    </main>
  )
}

export default a_propos
