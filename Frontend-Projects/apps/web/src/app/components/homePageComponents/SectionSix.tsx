import Image, { StaticImageData } from "next/image";
import SECTIONSIXOPENQUOTES from "../../../../public/SECTIONSIXOPENQUOTES.png";
import SECTIONSIXCLOSEQUOTES from "../../../../public/CLOSINGQUOTES.png";
import SECTIONSIXIMAGEONE from "../../../../public/SECTIONSIXIMAGE1.png";
import SECTIONSIXIMAGETWO from "../../../../public/SECTIONSIXIMAGE2.png";
import SECTIONSIXIMAGETHREE from "../../../../public/SECTIONSIXIMAGE3.png";
import SECTIONSIXIMAGEFOUR from "../../../../public/SECTIONSIXIMAGE4.png";
import SectionSixCard from "./SectionSixCards";

const sectionSixCardsContent: Array<{
  titleImageSrc: StaticImageData;
  title: string;
  content: string;
}> = [
  {
    titleImageSrc: SECTIONSIXIMAGEONE,
    content:
      "Keep an eye on the happenings around you. Be it Politics, Sports, Entertainment and more.",
    title: "Nazar",
  },
  {
    titleImageSrc: SECTIONSIXIMAGETWO,
    content:
      "Understand the news without the noise. Get to the crux of every matter and develop an opinion.",
    title: "Khabar",
  },
  {
    titleImageSrc: SECTIONSIXIMAGETHREE,
    content:
      "Have the courage to stand by your opinions about upcoming world events by investing in them.",
    title: "Jigar",
  },

  {
    titleImageSrc: SECTIONSIXIMAGEFOUR,
    title: "Sabar",
    content:
      "Have the patience to negotiate market ups and downs, and take a decision as events unfold.",
  },
];
export default function SectionSix(): JSX.Element {
  return (
    <section>
      <div className="flex flex-col w-4/5 m-auto">
        <div className="flex flex-col">
          <div className="text-[64px] font-bold flex flex-row ml-64">
            <div className="mt-4 mr-2">
              {/* open quotes section six */}
              <Image src={SECTIONSIXOPENQUOTES} width={40} alt="open quotes" />
            </div>
            <div>News that creates trading</div>
          </div>

          <div className="text-[64px] font-bold flex flex-row ml-[520px]">
            <div className="text-[64px] font-bold">opportunity, everyday</div>
            <div className="mt-4 ml-2" style={{ transform: "rotateY(180deg)" }}>
              <Image
                src={SECTIONSIXCLOSEQUOTES}
                width={40}
                alt="Closing quotes"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-row mt-24">
        {sectionSixCardsContent.map((card, index) => (
          <SectionSixCard {...card} key={index} />
        ))}
      </div>
    </section>
  );
}
