import React from "react";
import Image, { StaticImageData } from "next/image";
import { Button } from "@/components/ui/button";
import { DialogHeader, DialogFooter } from "@/components/ui/dialog";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

interface IProps {
  title: string;
  description: string;
  img: StaticImageData;
}

function ChurchAdhesionCard(props: IProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="w-[18rem] h-[25rem] relative border cursor-pointer">
          <Image
            fill
            style={{ objectFit: "cover" }}
            alt="card"
            src={props.img}
          />
          <div className="w-full flex justify-end items-end text-white bg-gradient-to-t from-black to-transparent via-transparent absolute h-full">
            <div className="p-6 flex flex-col gap-3">
              <h4 className=" font-medium text-xl">{props.title}</h4>
              <p className=" text-sm">{props.description}</p>
            </div>
          </div>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{props.title}</DialogTitle>
          {/* <DialogDescription>
           Descr
          </DialogDescription> */}
        </DialogHeader>
        <div>{props.description}</div>
        {/* <DialogFooter>
          <Button type="submit">OK</Button>
        </DialogFooter> */}
      </DialogContent>
    </Dialog>
  );
}

export default ChurchAdhesionCard;
