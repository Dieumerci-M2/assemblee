import React from "react";
import Image, { StaticImageData } from "next/image";

interface IProps {
    title : string;
    description : string;
    img : StaticImageData;
}

function ChurchAdhesionCard(props : IProps) {
  return (
    <div className="w-[18rem] h-[25rem] relative border">
      <Image fill style={{ objectFit: "cover" }} alt="card" src={props.img} />
      <div className="w-full flex justify-end items-end text-white bg-gradient-to-t from-black to-transparent via-transparent absolute h-full">
        <div className="p-6 flex flex-col gap-3">
          <h4 className=" font-medium text-xl">{props.title}</h4>
          <p className=" text-sm">{props.description}</p>
        </div>
      </div>
    </div>
  );
}

export default ChurchAdhesionCard;
