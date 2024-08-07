import React from 'react'
import { useDotButton } from "./dotButtons";
import { PrevButton, NextButton, usePrevNextButtons } from "./arrowButtons";
import useEmblaCarousel from "embla-carousel-react";
import ChoraleCard from '../aboutpage/chorales/card';
import { aboutPageContents } from '@/data/aboutPage';
const ChoraleCarousel : React.FC = () => {
    
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
    <section className="w-[90%] flex flex-col items-center gap-2 bg-transparent">
      <div className=" overflow-hidden w-full relative" ref={emblaRef}>
        <div className="flex">
            {aboutPageContents.choraleSection.table.map((item, index)=>(
                <div className=" shrink-0 min-w-0 grow-0 pl-2 basis-1/1 md:basis-1/4 " key={index}>
                    <ChoraleCard
                         key={item.title}
                         title={item.title}
                         description={item.description}
                         image={item.image}
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
  )
}

export default ChoraleCarousel
