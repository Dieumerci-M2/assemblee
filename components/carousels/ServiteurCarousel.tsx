"use client";

import React from "react";
import { useDotButton } from "./dotButtons";
import { PrevButton, NextButton, usePrevNextButtons } from "./arrowButtons";
import useEmblaCarousel from "embla-carousel-react";
import ServantCard from "../homepage/nos_serviteurs/card";
import { homePageContent } from "@/data/homePage";

const NosServiteursCarousel: React.FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    slidesToScroll: "auto",
    loop: true,
  });

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);


  return (
    <section className="w-full flex flex-col items-center gap-2 bg-transparent">
      <div className=" overflow-hidden w-full relative" ref={emblaRef}>
        <div className="flex">
          {homePageContent.nos_seviteurs.items.map((item, index) => (
            <div className=" shrink-0 min-w-0 grow-0 pl-2 basis-1/1 md:basis-1/4 " key={index}>
              <ServantCard
                key={item.name}
                name={item.name}
                description={item.description}
                img={item.img}
              />
            </div>
          ))}
        </div>
        <PrevButton
          className=" absolute top-1/2 left-2 text-blue-600"
          onClick={onPrevButtonClick}
          disabled={prevBtnDisabled}
        />
        <NextButton
          className=" absolute top-1/2 right-2 text-blue-600"
          onClick={onNextButtonClick}
          disabled={nextBtnDisabled}
        />
      </div>
    </section>
  );
};

export default NosServiteursCarousel;
