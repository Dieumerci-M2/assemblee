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
    <div className='flex w-full p-10 gap-10'>
      <div className='w-[50%]'>
      <Image style={{objectFit : 'cover'}} alt="card" src={props.coverImage} />
      </div>
      <div className='w-[50%] flex flex-col gap-10'>
        <div className='flex justify-between'>
          <span>{props.date}</span>
          <span>{props.author}</span>
        </div>
        <div>
          <h3 className='text-2xl font-semibold'>{props.theme}</h3>
        </div>
        <div className='-mt-5'>
            <span>{props.summary}</span>
        </div>
        <div>
          <button className='px-6 py-2 bg-primary rounded-md'>{props.buttonTitle}</button>
        </div>
      </div>
    </div>
  )
}

export default PredicationRecente
