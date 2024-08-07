import Image, { StaticImageData } from "next/image";
import React, { ReactNode } from "react";

interface IProps {
  title: string;
  description: string;
  icon: ReactNode,
  heure: string,
  timeZoneTitle: string,
  timeZoneResponse: string,
  iconAdress: ReactNode,
  adressChurch: string,
  img: StaticImageData;
}

const CulteDimanche = (props: IProps) => {

  return (
    <div className='flex flex-col-reverse md:flex-row w-full'>
      <div className='flex flex-col justify-center md:justify-start items-center md:items-start gap-6 px-6 py-10 w-[90%] md:w-[50%] bg-[#f9f7f5] shadow-md border-t'>
        <h3 className='font-semibold text-1xl text-center'>{props.title}</h3>
        <span className="text-sm md:text-lg w-[40%] md:w-full text-center md:text-left">{props.description}</span>
        <div className="flex text-sm md:text-lg font-semibold gap-4">
          <span className="mt-3">{props.icon}</span>
          <div className="">
            <span>{props.heure}</span>
            <div>
              <span>{props.timeZoneTitle}</span>
              <span>{props.timeZoneResponse}</span>
            </div>
          </div>
        </div>
        <div className="flex text-sm md:text-lg justify-center items-center gap-4">
          <span>{props.iconAdress}</span>
          <span>{props.adressChurch}</span>
        </div>
      </div>
      <div className='w-full md:w-[50%] h-[28rem] rounded-lg md:rounded-none relative '>
        <Image
          fill
          style={{ objectFit: "cover" }}
          alt={props.title}
          src={props.img}
        />
      </div>
    </div>
  )
}

export default CulteDimanche
