import React from 'react'
import PredicationRecente from '@/components/predications/predicationRecente/card'
import ToutePredication from '@/components/predications/toutesPredications/card'
import { predicationPageContent } from '@/data/pedications'

const predications = () => {
  const {
    precationRecenteSection,
    toutesLesPrediSection
  }  = predicationPageContent
  return (
    <main className='px-0 md:px-[10rem] bg-[#f9f7f5]'>
      <section className='md:mt-20'>
        <div className='flex justify-center'>
          <h3 className="text-lg md:text-4xl text-center font-semibold my-20 max-w-[50%] text-cblue">
            {precationRecenteSection.title}
          </h3>
        </div>
        <div className='bg-[#ffffff]'>
          <PredicationRecente
            coverImage = {precationRecenteSection.coverImage}
            date = {precationRecenteSection.date}
            author = {precationRecenteSection.author}
            theme = {precationRecenteSection.theme}
            verse = {precationRecenteSection.verses}
            summary = {precationRecenteSection.summary}
            buttonTitle = {precationRecenteSection.buttonTitle}
          />
        </div>
      </section>
      <section className='mt-10 md:my-20'>
          <div className='flex justify-center'>
            <h3 className="text-lg lg:text-4xl text-center font-semibold mb-10 max-w-[80%] md:max-w-[50%] text-cblue">
              {toutesLesPrediSection.title}
            </h3>
          </div>
          <div className='flex flex-wrap gap-10 justify-center'>
            {toutesLesPrediSection.card.map((item,index)=>(
              <ToutePredication 
              key={index}
                nomEglise = {item.nomEglise}
                theme = {item.theme}
                summary = {item.summary}
                verse = {item.verses}
                author = {item.author}
                date = {item.date}
              />
            ))}
          </div>
      </section>
    </main>
  )
}

export default predications
