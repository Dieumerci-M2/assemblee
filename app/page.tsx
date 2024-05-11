"use client";
import ChurchAdhesionCard from "@/components/homepage/adherer_nos_eglises/card";
import HeroSection from "@/components/homepage/heroSection";
import AboutUsCard from "@/components/homepage/qui_sommes_nous/card";
import { Button } from "@/components/ui/button";
import { homePageContent } from "@/data/homePage";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex w-full min-h-screen flex-col">
      <div className="w-[80rem] m-auto py-6 flex flex-col items-center gap-16">
        <div className="w-full">
          <HeroSection />
        </div>
        <div className="w-full flex flex-col items-center">
          <h3 className=" text-4xl font-semibold mb-16 text-cblue">
            {homePageContent.aboutUsSection.title}
          </h3>
          <div className="w-full items-center justify-center flex gap-14">
            {homePageContent.aboutUsSection.cards.map((card) => (
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
          <h3 className=" text-4xl font-semibold mb-16 text-cblue">
            {homePageContent.predicationsSection.title}
          </h3>
          <div className="w-full flex flex-col items-center">
            <div className="flex flex-col items-center justify-between w-full gap-6">
              <p className=" text-center w-10/12">
                {homePageContent.predicationsSection.description}
              </p>
              {/* Margin bottom is added here after considering margins in the gallery */}
              <div className="w-full mb-20 pb-10 items-center justify-center flex gap-6">
                {homePageContent.predicationsSection.imageGallery.map(
                  (item, index) => (
                    <div
                      key={index}
                      className={`w-64 ${
                        index == 1 && " relative top-20 w-72 h-80"
                      } overflow-hidden relative rounded-2xl h-72`}
                    >
                      <Image
                        fill
                        style={{ objectFit: "cover" }}
                        alt="serviteur"
                        src={item.img}
                      />
                    </div>
                  )
                )}
              </div>
            </div>
            <div className="w-full flex flex-col gap-3 items-center">
              <h3 className=" font-semibold text-xl uppercase">
                {homePageContent.predicationsSection.bottomSection.title}
              </h3>
              <p className=" font-light text-center w-7/12">
                {homePageContent.predicationsSection.bottomSection.description}
              </p>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col items-center">
          <h3 className=" text-4xl text-center font-semibold mb-16 max-w-[50%] text-cblue">
            {homePageContent.churchAdhesionAdvantages.title}
          </h3>
          <div className="w-full mb-16 items-center justify-center flex">
            {homePageContent.churchAdhesionAdvantages.items.map(
              (item, index) => (
                <div
                  key={index}
                  className={`${index % 2 && "relative top-16"}`}
                >
                  <ChurchAdhesionCard
                    title={item.title}
                    description={item.description}
                    img={item.img}
                  />
                </div>
              )
            )}
          </div>
        </div>
        <div className="w-full flex flex-col items-center">
          <h3 className=" text-4xl text-center font-semibold mb-16 max-w-[50%] text-cblue">
            {homePageContent.churchAdhesionAdvantages.title}
          </h3>
          <div className="w-full flex flex-col gap-12">
            <div className="w-full h-[30rem] items-center justify-between flex">
              <div className="flex bg-orange-700/10 flex-col w-1/2 h-full p-14 justify-between">
                <div className="w-full flex justify-between">
                  <p className=" text-cred text-lg">
                    {
                      homePageContent.rejoignez_nous.events.upcomingEvent
                        .headerText
                    }
                  </p>

                  <p className=" text-xl">
                    {homePageContent.rejoignez_nous.events.upcomingEvent.date}
                  </p>
                </div>
                <p className=" font-semibold text-2xl">
                  {homePageContent.rejoignez_nous.events.upcomingEvent.title}
                </p>
                <div className="w-2/3 flex flex-col gap-8">
                  <p className="">
                    {
                      homePageContent.rejoignez_nous.events.upcomingEvent
                        .description
                    }
                  </p>

                  <div className="w-full flex flex-col gap-4">
                    <div className="flex gap-3 items-end">
                      <span className="flex items-center justify-center text-cblue">
                        {homePageContent.rejoignez_nous.events.timeIcon}
                      </span>
                      <span>
                        {
                          homePageContent.rejoignez_nous.events.upcomingEvent
                            .time
                        }
                      </span>
                    </div>
                    <div className="flex gap-3 items-end">
                      <span className="flex items-center justify-center text-cblue">
                        {homePageContent.rejoignez_nous.events.placeIcon}
                      </span>
                      <span>
                        {
                          homePageContent.rejoignez_nous.events.upcomingEvent
                            .place
                        }
                      </span>
                    </div>
                  </div>
                </div>

                <div>
                  <Button>
                    {
                      homePageContent.rejoignez_nous.events.upcomingEvent
                        .registerButton.text
                    }
                  </Button>
                </div>
              </div>
              <div className="relative w-1/2 h-full min-w-80">
                <Image
                  fill
                  style={{ objectFit: "fill" }}
                  alt="flayer"
                  src={
                    homePageContent.rejoignez_nous.events.upcomingEvent.flayer
                  }
                />
              </div>
            </div>
            <div className="w-full h-[35rem] relative flex items-center justify-center">
              <Image
                fill
                style={{ objectFit: "fill" }}
                alt="bgimage "
                src={homePageContent.rejoignez_nous.year_of_attachement.bgImg}
              />
              <div className=" rounded-lg overflow-hidden w-[32rem] h-[22rem] p-10 flex z-30 bg-white relative after:absolute after:w-4/5 after:h-[0.8rem] after:bg-cred after:bottom-0 after:right-0">
                <div className="w-3/5 h-full flex flex-col justify-around shrink-0">
                  <h3 className=" text-xl font-bold uppercase">
                    {homePageContent.rejoignez_nous.year_of_attachement.title}
                  </h3>

                  <p>
                    {
                      homePageContent.rejoignez_nous.year_of_attachement
                        .description
                    }
                  </p>

                  <Button>
                    {
                      homePageContent.rejoignez_nous.year_of_attachement
                        .buttonText
                    }
                  </Button>
                </div>
                <div className=" flex items-center text-cblue justify-center flex-grow">
                  {homePageContent.rejoignez_nous.year_of_attachement.icon}
                  {homePageContent.rejoignez_nous.year_of_attachement.icon}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
