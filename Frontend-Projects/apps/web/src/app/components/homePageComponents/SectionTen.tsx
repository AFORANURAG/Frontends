"use client";

import Image, { StaticImageData } from "next/image";
import TradingView from "../../../../public/trading-view-sectionten1.jpeg";
import AuthBridge from "../../../../public/authbridge_section_ten_logo_2-no-bg.png";
import Datamuni from "../../../../public/datamuni_section_10_logo_3-no-bg.png";
import GoogleCloud from "../../../../public/google-cloud_section_ten_logo_4-no-bg.png";
import Firebase from "../../../../public/google-firebase_section_ten_logo_5-no-bg.png";
const rightSection: Array<{
  titleImageSrc: StaticImageData;
  title: string;
}> = [
  { title: "Trading View", titleImageSrc: TradingView },
  { title: "AuthBridge", titleImageSrc: AuthBridge },
  { title: "Datamuni", titleImageSrc: Datamuni },
  { title: "Google Cloud", titleImageSrc: GoogleCloud },
  { title: "Google Firebase", titleImageSrc: Firebase },
];
export default function SectionTen() {
  return (
    <section className="bg-[#f5f5f5] pt-4">
      <div className="flex flex-row container mx-auto justify-between">
        <div className="w-1/2">
          <h2 className="font-semibold ">Probo Partnerships</h2>
          <p className="font-light leading-relaxed">
            Probo’s experience is made possible by our partnerships with{" "}
            <strong>TradingView</strong> (track upcoming events with{" "}
            <em>Economic Calendar</em> or browse stocks in the <em>Screener</em>
            ), <strong>Authbridge</strong> for verification technology,{" "}
            <strong>DataMuni</strong> for data & analytics,{" "}
            <strong>Google Firebase</strong>, <strong>Google Cloud</strong> &{" "}
            <strong>AWS</strong>. Probo is also a member of{" "}
            <strong>FICCI</strong> and <strong>ASSOCHAM</strong>.
          </p>
        </div>
        <div className="flex flex-row">
          {rightSection.map(
            (obj: { title: string; titleImageSrc: StaticImageData }) => (
              <Image
                className="mr-8 w-[50px] h-[50px] mt-10"
                src={obj.titleImageSrc}
                alt={obj.title}
              />
            )
          )}
        </div>
      </div>
      <div className="h-[1px] container mx-auto bg-gray-300 my-4"></div>
    </section>
  );
}
