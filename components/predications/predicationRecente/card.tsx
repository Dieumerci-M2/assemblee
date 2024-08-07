import React from 'react'
import Image, { StaticImageData } from "next/image";
interface Iprops {
  coverImage : StaticImageData,
  date : string,
  author : string,
  verse : string,
  theme  : string,
  summary : string,
  buttonTitle : string
}
const PredicationRecente = (props : Iprops) => {
  return (
    <div className='flex w-full md:p-10 md:gap-10'>
      <div className='w-[50%]'>
      <Image style={{objectFit : 'cover'}} alt="card" src={props.coverImage} />
      </div>
      <div className='w-[50%] flex flex-col gap-2 md:gap-8 px-1 mt-1'>
        <div className='flex justify-between'>
          <span className='text-[6px] md:text-lg'>{props.date}</span>
          <span className='text-[6px] md:text-lg'>{props.author}</span>
        </div>
        <div className='flex flex-col gap-0 md:gap-5'>
          <h3 className='text-[10px] md:text-2xl font-semibold'>{props.theme}</h3>
          <h4 className='font-semibold text-[8px] md:text-lg'>{props.verse}</h4>
        </div>
        <div className='-mt-2 md:-mt-5 leading-[8px]'>
            <span className='text-[8px] md:text-lg '>{props.summary}</span>
        </div>
        <div className='-mt-2 mb-2'>
          <button className='px-3 text-[6px] md:text-lg md:px-6 py-1 md:py-2 bg-primary rounded-sm md:rounded-md'>{props.buttonTitle}</button>
        </div>
      </div>
    </div>
  )
}

export default PredicationRecente
