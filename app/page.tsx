"use client";
import HeroSection from "@/components/homepage/heroSection";
import AboutUsCard from "@/components/homepage/qui_sommes_nous/card";
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
            <div className="w-full flex flex-col gap-4 items-center">
              <h3 className=" font-semibold text-xl uppercase">
                {homePageContent.predicationsSection.bottomSection.title}
              </h3>
              <p className=" font-light text-center w-7/12">
                {homePageContent.predicationsSection.bottomSection.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
