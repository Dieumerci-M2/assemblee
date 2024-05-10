import React, { ReactNode } from "react";
import { homePageContent } from "@/data/homePage";
import { Button } from "@/components/ui/button";

interface IProps {
  icon: ReactNode;
  title: string;
  description: string;
  buttonText: string;
}

function AboutUsCard(props: IProps) {
  return (
    <div className="w-80 shadow p-8 h-96  rounded-b flex flex-col justify-between  relative after:absolute after:w-full after:h-2 after:bg-cblue after:top-0 after:left-0">
      <div className=" text-cblue w-16 bg-primary h-16 rounded-full p-5 flex items-center justify-center">
        {props.icon}
      </div>
      <div className="w-full flex flex-col gap-4">
        <h4 className=" font-semibold text-2xl">{props.title}</h4>
        <p className=" text-sm">{props.description}</p>
      </div>
      <Button variant="secondary">{props.buttonText}</Button>
    </div>
  );
}

export default AboutUsCard;
