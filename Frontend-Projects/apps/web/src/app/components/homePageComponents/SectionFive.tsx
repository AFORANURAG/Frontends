import { StaticImageData } from "next/image";
import SECTIONFIVECARDONEIMAGE from "../../../../public/SECTIONFIVEIMAGEONE.png";
import SECTIONFIVECARDTWOIMAGE from "../../../../public/SECTIONFIVEIMAGETWO.png";
import SECTIONFIVECARDTHREEIMAGE from "../../../../public/SECTIONFIVEIMAGETHREE.png";
import SECTIONFIVECARDFOURIMAGE from "../../../../public/SECTIONFIVEIMAGEFOUR.png";
import SectionFiveCard from "./SectionFiveCard";

const sectionFiveCardsContent: Array<{
  titleImageSrc: StaticImageData;
  title: string;
  content: string;
}> = [
  {
    titleImageSrc: SECTIONFIVECARDONEIMAGE,
    content:
      "Probo is all about understanding the world around us and bene fitting from our knowledge. Everything on Probo is based on real events that you can learn about, verify and follow yourself.",
    title: "Fastest news feed in the game",
  },
  {
    titleImageSrc: SECTIONFIVECARDTWOIMAGE,
    content:
      "Our experts go through tons of information to get to the very core of a world event. They help you develop not only an opinion about events but also a better understanding of the world around us.",
    title: "All the news without the noise",
  },
  {
    titleImageSrc: SECTIONFIVECARDTHREEIMAGE,
    content:
      "Probo is an opinion trading platform. And, like a true trading platform, Probo gives you the power to exit. You can withdraw from a trade, if it’s not going in the direction you thought it will go.",
    title: "The power to exit trades, anytime",
  },

  {
    titleImageSrc: SECTIONFIVECARDFOURIMAGE,
    title: "The pulse of society is on Probo",
    content:
      "Besides helping you learn important financial & trading skills, Probo also helps you understand the collective thoughts of Indians. Knowledge that is crucial for the betterment of our country.",
  },
];

export default function SectionFive(): JSX.Element {
  return (
    <section >
      <div className="flex flex-col w-4/5 m-auto justify-end  content-end mt-8 pl-24 gap-y-20">
        <div>
          <div className="text-[64px] font-semibold leading-[80px]">Probo takes care of you,
             <br />
             so you take care of your trades.</div>
          <div></div>
        </div>

        <div className="flex flex-row">
          {sectionFiveCardsContent.map((cardContent, index) => (
            <SectionFiveCard {...cardContent} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
