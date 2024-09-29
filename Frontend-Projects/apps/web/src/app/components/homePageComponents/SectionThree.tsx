import { useEffect, useRef, useState } from "react";
import SectionThreeRightCard from "./SectionThreeRightCard";
import SectionThreeRightImageOne from "../../../../public/IMAGE_1_Section_Three_Right.png";
import SectionThreeCard2ImageOne from "../../../../public/SECTIONTHREECARD2IMAGE1 (5).jpg";
import SectionThreeCard3ImageOne from "../../../../public/SECTIONTHREECARD3IMAGE1.png";
import SectionThreeCard4ImageOne from "../../../../public/SECTIONTHREECARD4IMAGE1.jpg";
import SectionThreeCard5ImageOne from "../../../../public/SECTIONTHREECARD5IMAGE1.jpg";
import SectionThreeCard6ImageOne from "../../../../public/SECTIONTHREECARDSIXIMAGE1.jpg";
import SectionThreeCard7ImageOne from "../../../../public/SECTIONTHREECARD7IMAGE1.jpg";
import SectionThreeCard8ImageOne from "../../../../public/SECTIONTHREECARD8IMAGE1.jpg";

import { StaticImageData } from "next/image";
const cardsData: Array<{
  src: StaticImageData;
  numberOfTraders: number;
  opinion: string;
  yesAmount: number;
  noAmount: number;
}> = [
  {
    noAmount: 6.5,
    yesAmount: 3.5,
    numberOfTraders: 24429,
    opinion: "Centre to constitute the 8th Pay Commission?",
    src: SectionThreeRightImageOne,
  },
  {
    noAmount: 6,
    numberOfTraders: 5285,
    src: SectionThreeCard2ImageOne,
    yesAmount: 4,
    opinion:
      "Kane Williamson to announce his retirement from international T20 cricket?",
  },
  {
    yesAmount: 7.5,
    noAmount: 2.5,
    numberOfTraders: 4075,
    opinion: "India AI mission to launch an app in collaboration with OpenAI?",
    src: SectionThreeCard3ImageOne,
  },
  {
    yesAmount: 7,
    noAmount: 3,
    numberOfTraders: 806,
    opinion: "Manchester City to win the 2024-25 Premier League title?",
    src: SectionThreeCard4ImageOne,
  },
  {
    yesAmount: 4,
    noAmount: 6,
    numberOfTraders: 5765,
    opinion: "Tesla to open their first showroom in India by the end of 2024?",
    src: SectionThreeCard5ImageOne,
  },
  {
    yesAmount: 3.5,
    noAmount: 6.5,
    numberOfTraders: 288,
    opinion: "Bayern Munich to win the 2024-25 Bundesliga?",
    src: SectionThreeCard6ImageOne,
  },
  {
    yesAmount: 0.5,
    noAmount: 9.5,
    opinion:
      'Central Government to introduce any "super-app" for multiple train services by September 30?',
    src: SectionThreeCard7ImageOne,
    numberOfTraders: 2719,
  },
  {
    yesAmount: 4.5,
    noAmount: 5.5,
    opinion: "Red Bull Racing to win the F1 Constructors Championship 2024?",
    src: SectionThreeCard8ImageOne,
    numberOfTraders: 821,
  },
];
export default function SectionThree(): JSX.Element {
  return (
    <section className="bg-[#f5f5f5] max-h-[570px]">
      <div className="mx-auto max-w-[1440px] py-[32px] ">
        <div className="w-full flex flex-row gap-x-10">
          <div className="flex flex-col w-2/6 justify-center min-h-[625px] max-h-[625px] ml-8">
            <div className="font-semibold text-[84px] text-[#262626] leading-[100px]">
              Trade when you like,
            </div>

            <div className="text-[48px] text-left font-semibold text-[#262626] mt-4 tracking-wide">
              on what you like.
            </div>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-2 gap-4 overflow-y-auto max-h-[500px] scrollbar-hide ml-48">
            {cardsData.map((cardData, index) => (
              <SectionThreeRightCard key={index} {...cardData} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
