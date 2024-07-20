import React from 'react'
import { useDotButton } from "./dotButtons";
import { PrevButton, NextButton, usePrevNextButtons } from "./arrowButtons";
import useEmblaCarousel from "embla-carousel-react";
import CoucheSocialCard from '../aboutpage/couche_social/card';
import { aboutPageContents } from '@/data/aboutPage';


const couchesSocialCarousel : React.FC = () => {

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
    <section>
      
    </section>
  )
}

export default couchesSocialCarousel
