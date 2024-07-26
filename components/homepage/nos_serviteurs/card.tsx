import Image, { StaticImageData } from "next/image";
import React from "react";

interface IProps {
    name : string;
    description : string;
    img : StaticImageData;
}

function ServantCard(props : IProps) {

  return (
    <div className=" h-[20rem]  p-6 flex flex-col items-center justify-around shadow-md border-t rounded-md after:absolute after:w-full after:h-[0.5rem] overflow-hidden relative after:bottom-0 after:left-0 after:bg-cblue">
      <div className=" w-24 h-24 rounded-full overflow-hidden relative">
        <Image
          fill
          style={{ objectFit: "fill" }}
          alt={props.name}
          src={props.img}
        />
      </div>
      <div className="w-full flex flex-col items-center justify-center gap-6">
        <h3 className=" font-semibold text-lg">{props.name}</h3>
        <p className=" text-center text-sm">{props.description}</p>
      </div>
    </div>
  );
}

export default ServantCard;
