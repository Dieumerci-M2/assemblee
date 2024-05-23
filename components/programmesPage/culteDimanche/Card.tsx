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
    <div>
      <div>
        <h3>{props.title}</h3>
        <span>{props.description}</span>
        <div>
          <span>{props.icon}</span>
          <div>
            <span>{props.heure}</span>
            <div>
              <span>{props.timeZoneTitle}</span>
              <span>{props.timeZoneResponse}</span>
            </div>
          </div>
        </div>
        <div>
          <span>{props.iconAdress}</span>
          <span>{props.adressChurch}</span>
        </div>
      </div>
      <div>
        <Image
          style={{ objectFit: "cover" }}
          alt={props.title}
          src={props.img}
        />
      </div>
    </div>
  )
}

export default CulteDimanche
