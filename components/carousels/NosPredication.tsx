"use client";

import React from "react";
import { PrevButton, NextButton, usePrevNextButtons } from "./arrowButtons";
import useEmblaCarousel from "embla-carousel-react";
import ServantCard from "../homepage/nos_serviteurs/card";
import { homePageContent } from "@/data/homePage";
import { Link } from "lucide-react";
import Image from "next/image";

const NosPredicationCarousel: React.FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    slidesToScroll: "auto",
    loop: true,
  });

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <section className="w-full flex flex-col items-center gap-2 bg-transparent">
      <div className=" overflow-hidden w-full relative" ref={emblaRef}>
        <div className="flex mb-20 pb-10">
          {homePageContent.predicationsSection.imageGallery.map(
            (item, index) => (
              <div
                className=" shrink-0 min-w-0 grow-0  flex items-center justify-center pl-2 basis-1/3 "
                key={index}
              >
                <div

                  className={` w-[20rem] border ${
                    index % 2 && " relative top-20 w-72"
                  } overflow-hidden relative rounded-2xl h-96`}
                >
                  <Link href="/predications"> 
                    <Image
                      fill
                      style={{ objectFit: "cover" }}
                      alt="serviteur"
                      src={item.img}
                    />
                  </Link> 
                  
                </div>
               </div>
            )
          )}
        </div>
        <PrevButton
          className=" absolute top-1/2 left-6 text-blue-600"
          onClick={onPrevButtonClick}
          disabled={prevBtnDisabled}
        />
        <NextButton
          className=" absolute top-1/2 right-6 text-blue-600"
          onClick={onNextButtonClick}
          disabled={nextBtnDisabled}
        />
      </div>
    </section>
  );
};

export default NosPredicationCarousel;
