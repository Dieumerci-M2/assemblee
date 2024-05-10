"use client";
import HeroSection from "@/components/homepage/heroSection";
import AboutUsCard from "@/components/homepage/qui_sommes_nous/card";
import { homePageContent } from "@/data/homePage";

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
      </div>
    </main>
  );
}
