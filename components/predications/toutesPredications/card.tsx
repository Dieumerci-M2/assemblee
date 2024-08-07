import React from 'react'
interface Iprops{
  nomEglise : string,
  theme : string,
  summary : string,
  verse : String,
  author : string,
  date : string
}
const ToutePredication = (props : Iprops) => {
  return (
    <div
    className='flex flex-col gap-6 md:w-[30%] border-t after:absolute after:w-full after:h-[0.5rem]
    overflow-hidden relative shadow-md p-12 after:bottom-0 after:left-0 after:bg-cblue'
    >
      <div>
        <span className='text-sm'>{props.nomEglise}</span>
      </div>
      <div>
        <h3 className='font-semibold text-sm md:text-lg'>{props.theme}</h3>
      </div>
      <div className='flex flex-col gap-4'>
        <span className='text-sm md:text-lg'>{props.summary}</span>
        <span className='font-semibold text-sm md:text-lg'>{props.verse}</span>
      </div>
      <div className='flex flex-col'>
        <span className='font-semibold text-sm md:text-lg'>{props.author}</span>
        <span>{props.date}</span>
      </div>
    </div>
  )
}

export default ToutePredication
