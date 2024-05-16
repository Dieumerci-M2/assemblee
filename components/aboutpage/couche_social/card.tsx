import React from 'react'
import Image, { StaticImageData } from "next/image";

interface IProps {
    title : string;
    description : string;
    image : StaticImageData;
}

const CoucheSocialCard = (props : IProps) => {
  return (
    <div>
      <div>
        <h3>{props.title}</h3>
        <span>{props.description}</span>
      </div>
      <div>
        <Image style={{}} alt="card" src={props.image} />
      </div>
    </div>
  )
}

export default CoucheSocialCard
