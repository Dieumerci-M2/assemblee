import React from 'react'
import Image, { StaticImageData } from "next/image";

interface IProps {
  title: string;
  description: string;
  image: StaticImageData;
}
const ChoraleCard = (props: IProps) => {
  return (
    <div className='flex flex-col items-center w-[25%] border-t after:absolute after:w-full after:h-[0.5rem] overflow-hidden relative after:bottom-0 after:left-0 after:bg-cblue'>
      <div className='w-[100%] h-[20rem] relative'>
        <Image fill style={{objectFit : 'cover'}} alt="card" src={props.image} />
      </div>
      <div className='flex flex-col py-10 gap-2 justify-center items-center'>
        <h3 className='flex flex-col font-semibold gap-6'>{props.title}</h3>
        <span className='text-justify'>{props.description}</span>
      </div>

    </div>
  )
}

export default ChoraleCard
