"use client"
import AboutCard from '@/components/aboutpage/association_assemblee_bethel/card'
import ChoraleCard from '@/components/aboutpage/chorales/card'
import CoucheSocialCard from '@/components/aboutpage/couche_social/card'
import ServantCard from "@/components/homepage/nos_serviteurs/card";
import HeroSection from '@/components/aboutpage/heroSection';
import Image from 'next/image'
import { homePageContent } from '@/data/homePage'
import { aboutPageContents } from '@/data/aboutPage'

const a_propos = () => {
    const {
       assosiationSection,
       coucheSocialSection,
       choraleSection, 
    } = aboutPageContents
    const{
        nos_seviteurs
    } = homePageContent
  return (
    <main>
      <section className=''>
        <div className="w-full">
          <HeroSection />
        </div>
      </section>
        <h3>{assosiationSection.title}</h3>
        <div></div>
      <section className="w-full flex flex-col items-center">
        <h3 className=" text-4xl text-center font-semibold mb-20 max-w-[50%] text-cblue">
            {nos_seviteurs.title}
        </h3>
        <div className="w-full flex items-center justify-center gap-8">
        {nos_seviteurs.items.map((item) => (
              <ServantCard
                key={item.name}
                name={item.name}
                description={item.description}
                img={item.img}
              />
            ))}
        </div>
      </section>
      <section >
        <h3>
            {coucheSocialSection.title}
        </h3>
        <div></div>
      </section>
      <section>
        <h3>{choraleSection.title}</h3>
        <div></div>
      </section>
    </main>
  )
}

export default a_propos
