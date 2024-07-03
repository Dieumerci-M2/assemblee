"use client";

import React from "react";
import { DotButton, useDotButton } from "./dotButtons";
import { PrevButton, NextButton, usePrevNextButtons } from "./arrowButtons";
import useEmblaCarousel from "embla-carousel-react";
import HeroSection from "../homepage/heroSection";
import Autoplay from 'embla-carousel-autoplay'

const HeroCarousel: React.FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    slidesToScroll: "auto",
    loop: true,
  },[Autoplay()]);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  const slides = Array.from(Array(3).keys());

  return (
    <section className="w-full flex flex-col items-center gap-2 bg-transparent">
      <div className=" overflow-hidden w-full relative" ref={emblaRef}>
        <div className="flex">
          {slides.map((index) => (
            <div className=" shrink-0 min-w-0 w-full grow-0" key={index}>
              <HeroSection />
            </div>
          ))}
        </div>
        <PrevButton
          className=" absolute top-1/2 left-3 text-primary"
          onClick={onPrevButtonClick}
          disabled={prevBtnDisabled}
        />
        <NextButton
          className=" absolute top-1/2 right-3 text-primary"
          onClick={onNextButtonClick}
          disabled={nextBtnDisabled}
        />
        <div className="flex items-center justify-center gap-2 bg-inherit absolute bottom-3 left-1/2">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={" h-[.55rem] w-[.55rem] border rounded-full touch-manipulation".concat(
                index === selectedIndex
                  ? " border-primary"
                  : " border-slate-300"
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroCarousel;
