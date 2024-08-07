import React from 'react'
import Image, { StaticImageData } from "next/image";

interface IProps {
    title : string;
    description : string;
    image : StaticImageData;
}

const CoucheSocialCard = (props : IProps) => {
  return (
    <div className='flex flex-col-reverse justify-center items-center md:flex-row w-full'>
      <div className='flex flex-col gap-10 py-10 w-[60%] md:w-[50%] h-[20rem] justify-center items-center shadow-md border-t'>
        <h3 className='font-semibold text-1xl'>{props.title}</h3>
        <span className='px-10 text-center'>{props.description}</span>
      </div>
      <div className='w-full md:w-[50%] h-[20rem] relative'>
        <Image
          fill 
          style={{objectFit : 'cover'}} 
          alt="card" 
          src={props.image} />
      </div>
    </div>
  )
}

export default CoucheSocialCard
