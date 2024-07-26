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
    <div className='flex w-full'>
      <div className='flex flex-col gap-6 px-6 py-10 w-[50%] bg-[#f9f7f5] shadow-md border-t'>
        <h3 className='font-semibold text-1xl text-center'>{props.title}</h3>
        <span>{props.description}</span>
        <div className="flex font-semibold gap-4">
          <span className="mt-3">{props.icon}</span>
          <div className="">
            <span>{props.heure}</span>
            <div>
              <span>{props.timeZoneTitle}</span>
              <span>{props.timeZoneResponse}</span>
            </div>
          </div>
        </div>
        <div className="flex gap-4">
          <span>{props.iconAdress}</span>
          <span>{props.adressChurch}</span>
        </div>
      </div>
      <div className='w-[50%] h-[24rem] relative'>
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
