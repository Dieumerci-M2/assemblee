import React from 'react'
import Image, { StaticImageData } from "next/image";
interface Iprops {
  coverImage : StaticImageData,
  date : string,
  author : string,
  theme  : string,
  summary : string,
  buttonTitle : string
}
const PredicationRecente = (props : Iprops) => {
  return (
    <div>
      <div>
      <Image fill style={{objectFit : 'cover'}} alt="card" src={props.coverImage} />
      </div>
      <div>
        <div>
          <span>{props.date}</span>
          <span>{props.author}</span>
        </div>
        <div>
          <h3>{props.theme}</h3>
        </div>
        <div>
            <span>{props.summary}</span>
        </div>
        <div>
          <button>{props.buttonTitle}</button>
        </div>
      </div>
    </div>
  )
}

export default PredicationRecente
