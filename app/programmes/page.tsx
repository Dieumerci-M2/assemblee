import React from 'react'
import HeroSection from '@/components/programmesPage/heroSection'
import CulteDimanche from '@/components/programmesPage/culteDimanche/Card'
import CulteSemaine from '@/components/programmesPage/culteSemaine/Card'
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
            {programmeDimancheSection.cards.map((card) => (
              <CulteDimanche
                key={card.title}
                title={card.title}
                description={card.description}
                icon={card.iconHeure}
                iconAdress={card.iconAdress}
                heure={card.heure}
                timeZoneTitle={card.timeZoneTitle}
                timeZoneResponse={card.timeZoneResponse}
                adressChurch={card.adresseChurch}
                img={card.image}
              />
            ))
            }
          </div>
        </section>
        <section className="w-full flex flex-col items-center">
          <h3 className="text-4xl font-semibold mb-20 text-cblue">
            {programmesSemaineSection.title}
          </h3>
          <h3 className='font-bold text-2xl mb-10 text-cblue'>
            {programmesSemaineSection.subTitle}
          </h3>
          <div className='flex gap-6'>
            {programmesSemaineSection.cards.map((card) => (
              <CulteSemaine
                title={card.title}
                subtitle={card.subtitle}
                iconHeure={card.iconHeure}
                iconAdress={card.iconAdress}
                heure={card.heure}
                timeZoneResponse={card.timeZoneResponse}
                timeZoneTitle={card.timeZoneTitle}
                adressChurch={card.adresseChurch}
              />
            ))}

          </div>
        </section>
      </article>
    </main>
  )
}

export default programmes
