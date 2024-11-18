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
export default function SectionEleven() {
  return <section className="bg-[#f5f5f5] pt-4"></section>;
}
