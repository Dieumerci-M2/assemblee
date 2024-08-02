import React, { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface IProps {
  icon: ReactNode;
  title: string;
  description: string;
  buttonText: string;
}

function AboutUsCard(props: IProps) {
  return (
    <div className="w-[30%] md:w-80 shadow p-2 md:p-8 h-72 md:h-96 rounded-b flex flex-col justify-between relative after:absolute after:w-full after:h-2 after:bg-cblue after:top-0 after:left-0">
      <div className=" text-cblue w-8 md:w-16 bg-primary h-8 md:h-16 rounded-full p-1 md:p-5 flex items-center justify-center">
        {props.icon}
      </div>
      <div className="w-full flex flex-col gap-2">
        <h4 className=" font-semibold text-sm md:text-2xl">{props.title}</h4>
        <p className="text-[10px] md:text-sm">{props.description}</p>
      </div>
      <div className="w-[100%]">
        <Link href="/a_propos">
          <Button variant="secondary" className="w-full h-7 md:h-10 text-[10px] md:text-sm">{props.buttonText}</Button>
        </Link>
      </div>
    </div>
  );
}

export default AboutUsCard;
