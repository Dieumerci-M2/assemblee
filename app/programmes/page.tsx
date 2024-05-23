import React from 'react'
import HeroSection from '@/components/programmesPage/heroSection'
import CulteDimanche from '@/components/programmesPage/culteDimanche/Card'
import CulteSemaine from '@/components/programmesPage/culteSemaine/Card'
import { programmesPageContents } from '@/data/programsPage'

const programmes = () => {
  const{
    programmeDimancheSection,
    programmesSemaineSection
  } = programmesPageContents
  return (
    <main>
      <section className='[&>*:last-child]:mb-20'>
        <HeroSection/>
      </section>
      <section className="w-full flex flex-col items-center">
        <h3 className=" text-4xl font-semibold mb-20 text-cblue">
          {programmeDimancheSection.title}
        </h3>
        <div>
          { programmeDimancheSection.cards.map((card)=>(
            <CulteDimanche
              key={card.title}
              title={card.title}
              description={card.description}
              icon = {card.iconHeure}
              iconAdress = {card.iconAdress}
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
        <div>
          <CulteSemaine />
        </div>
      </section>
    </main>
  )
}

export default programmes
