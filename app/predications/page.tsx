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
    <main>
      <section>
        <div>
          <h3>{precationRecenteSection.title}</h3>
        </div>
        <div>
          <PredicationRecente
            coverImage = {precationRecenteSection.coverImage}
            date = {precationRecenteSection.date}
            author = {precationRecenteSection.author}
            theme = {precationRecenteSection.theme}
            summary = {precationRecenteSection.summary}
            buttonTitle = {precationRecenteSection.buttonTitle}
          />
        </div>
      </section>
      <section>
          <div>
            <h3>{toutesLesPrediSection.title}</h3>
          </div>
          <div>
            {toutesLesPrediSection.card.map((item)=>(
              <ToutePredication 
                nomEglise = {item.nomEglise}
                theme = {item.theme}
                summary = {item.summary}
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
