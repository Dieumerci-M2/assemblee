"use client";
import HeroCarousel from "@/components/carousels/HeroCarousel";
import NosPredicationCarousel from "@/components/carousels/NosPredication";
import NosServiteursCarousel from "@/components/carousels/ServiteurCarousel";
import ChurchAdhesionCard from "@/components/homepage/adherer_nos_eglises/card";
import HeroSection from "@/components/homepage/heroSection";
import ServantCard from "@/components/homepage/nos_serviteurs/card";
import AboutUsCard from "@/components/homepage/qui_sommes_nous/card";
import { Button } from "@/components/ui/button";
import { homePageContent } from "@/data/homePage";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const {
    aboutUsSection,
    predicationsSection,
    churchAdhesionAdvantages,
    rejoignez_nous,
    nos_seviteurs,
  } = homePageContent;

  return (
    <main className="flex flex-col w-full min-h-screen ">
      <div className="w-full border mb-10 lg:mb-20">
        <HeroCarousel />
      </div>
      <div className="w-full md:w-[80rem] [&>*:last-child]:mb-10 lg:[&>*:last-child]:mb-20 m-auto py-3 lg:py-6 flex flex-col items-center gap-6 lg:gap-20">
        <div className="w-full flex flex-col items-center">
          <h3 className=" text-lg lg:text-4xl font-semibold mb-10 lg:mb-20 text-cblue">
            {aboutUsSection.title}
          </h3>
          <div className="w-full flex items-center justify-center gap-2 lg:gap-14">
            {aboutUsSection.cards.map((card) => (
              <AboutUsCard
                key={card.title}
                icon={card.icon}
                title={card.title}
                description={card.description}
                buttonText={card.buttonText}
              />
            ))}
          </div>
        </div>
        <div className="w-full  flex flex-col items-center">
          <h3 className="text-lg lg:text-4xl font-semibold my-8 md:mb-20 text-cblue">
            {predicationsSection.title}
          </h3>
          <div className="w-full flex flex-col items-center">
            <div className="flex flex-col items-center justify-center md:justify-between w-full gap-6 md:gap-10">
              <p className="text-[10px] md:text-lg text-center w-10/12">
                {predicationsSection.description}
              </p>
              <div className="w-9/12 md:w-10/12">
                <NosPredicationCarousel />
              </div>
            </div>
            <div className="w-[90%] flex flex-col gap-3 items-center mt-[-20px] md:mt-0">
              <h3 className="text-sm md:font-semibold md:text-xl uppercase">
                {predicationsSection.bottomSection.title}
              </h3>
              <p className="text-[10px] md:text-xl font-light text-center w-[80%] md:w-7/12">
                {predicationsSection.bottomSection.description}
              </p>
            </div>
          </div>
        </div>
        <div className="w-full hidden md:flex flex-col items-center">
          <h3 className="text-lg lg:text-4xl text-center font-semibold mb-20 max-w-[90%] md:max-w-[50%] text-cblue">
            {churchAdhesionAdvantages.title}
          </h3>
          <div className="w-full mb-16 items-center justify-center flex">
            {churchAdhesionAdvantages.items.map((item, index) => (
              <div key={index} className={`${index % 2 && "md:relative top-16"}`}>
                <ChurchAdhesionCard
                  title={item.title}
                  description={item.description}
                  img={item.img}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="w-full flex flex-col items-center">
          <h3 className="text-lg text-center lg:text-4xl font-semibold mb-10 md:mb-20 max-w-[90%]  md:max-w-[50%] text-cblue">
            {rejoignez_nous.title}
          </h3>
          <div className="w-full flex flex-col gap-12">
            <div className="w-full h-[30rem] items-center justify-between flex">
              <div className=" bg-orange-700/10 flex-col w-[90%] md:w-1/2 h-full p-2 md:p-14 justify-between">
                <div className="w-full flex justify-between mb-6 pt-8 md:pt-0">
                  <p className=" text-cred text-sm md:text-lg">
                    {rejoignez_nous.events.upcomingEvent.headerText}
                  </p>
                  <p className=" text-sm md:text-xl">
                    {rejoignez_nous.events.upcomingEvent.date}
                  </p>
                </div>
                <p className="font-semibold text-center md:text-left text-lg md:text-2xl my-6">
                  {rejoignez_nous.events.upcomingEvent.title}
                </p>
                <div className="w-full md:w-2/3 flex justify-center md:justify-start items-center md:items-start flex-col gap-8 mb-6">
                  <p className="text-center text-sm md:text-lg">
                    {rejoignez_nous.events.upcomingEvent.description}
                  </p>
                  <div className="w-full flex justify-center items-center md:justify-start md:items-start flex-col gap-4 mb-6">
                    <div className="flex gap-3 items-end">
                      <span className="flex size-5 md:size-10 items-center justify-center text-cblue">
                        {rejoignez_nous.events.timeIcon}
                      </span>
                      <span className="text-sm md:text-lg">{rejoignez_nous.events.upcomingEvent.time}</span>
                    </div>
                    <div className="flex gap-3 items-end">
                      <span className="flex size-6 md:size-10 items-center justify-center text-cblue">
                        {rejoignez_nous.events.placeIcon}
                      </span>
                      <span className="text-sm md:text-lg">{rejoignez_nous.events.upcomingEvent.place}</span>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center md:justify-start items-center md:items-start">
                  <Button className="text-sm md:text-lg">
                    {rejoignez_nous.events.upcomingEvent.registerButton.text}
                  </Button>
                </div>
              </div>
              <div className="hidden md:flex relative w-1/2 h-full min-w-80">
                <Image
                  fill
                  style={{ objectFit: "fill" }}
                  alt="flayer"
                  src={rejoignez_nous.events.upcomingEvent.flayer}
                />
              </div>
            </div>
            <div className="flex flex-col items-center mb-[-60px] md:mb-0 mt-[-20px] md:mt-0">
              <h3 className="text-lg lg:text-4xl text-center font-semibold mb-10 max-w-[80%] md:max-w-[50%] text-cblue">
                {rejoignez_nous.year_of_attachement.title}
              </h3>
            </div>
            <div className="w-full h-[35rem] relative flex items-center justify-center">
              <Image
                fill
                style={{ objectFit: "cover" }}
                alt="bgimage "
                src={rejoignez_nous.year_of_attachement.bgImg}
                className="rounded-2xl md:rounded-lg"
              />
              <div className=" rounded-lg overflow-hidden w-[22rem] md:w-[32rem] h-[22rem] p-10 flex z-30 bg-white relative after:absolute after:w-4/5 after:h-[0.8rem] after:rounded-tl-lg after:bg-cred after:bottom-0 after:right-0">
                <div className="w-3/5 h-full flex flex-col justify-around shrink-0">
                  <h3 className=" text-sm md:text-xl font-bold uppercase">
                    {rejoignez_nous.year_of_attachement.title}
                  </h3>
                  <p className="text-sm md:text-lg">{rejoignez_nous.year_of_attachement.description}</p>
                  <Link href="/a_propos/association">
                    <Button className="w-full text-[10px] md:text-lg h-8 md:h-12">
                      {rejoignez_nous.year_of_attachement.buttonText}
                    </Button>
                  </Link>
                </div>
                <div className=" flex items-center text-cblue text-[8px] md:text-lg justify-center flex-grow">
                  {rejoignez_nous.year_of_attachement.icon}
                  {rejoignez_nous.year_of_attachement.icon}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col items-center">
          <h3 className="text-lg lg:text-4xl text-center font-semibold mb-20 max-w-[80%] md:max-w-[50%] text-cblue">
            {nos_seviteurs.title}
          </h3>
          <div className="w-full px-10 md:px-0 flex items-center justify-center gap-1 md:gap-8">
            <NosServiteursCarousel />
          </div>
        </div>
      </div>
    </main>
  );
}
