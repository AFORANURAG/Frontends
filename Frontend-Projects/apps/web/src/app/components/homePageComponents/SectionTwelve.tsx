"use client";

import Image, { StaticImageData } from "next/image";
import LINKEDINIMAGE from "../../../../public/linkedin.png";
import TWITTERIMAGE from "../../../../public/x.png";
import INSTAGRAM from "../../../../public/instagram.png";
import YOUTUBE from "../../../../public/youtube.png";
import Link from "next/link";
const rightSection: Array<{
  titleImageSrc: StaticImageData;
  divContent: string;
}> = [
  { divContent: "LinkedIn", titleImageSrc: LINKEDINIMAGE },
  { divContent: "Twitter", titleImageSrc: TWITTERIMAGE },
  { divContent: "Instagram", titleImageSrc: INSTAGRAM },
  { divContent: "Youtube", titleImageSrc: YOUTUBE },
];
export default function SectionTwelve() {
  return (
    <section className="bg-[#f5f5f5] pt-16">
      <div className="flex flex-row w-4/5 justify-between mx-auto">
        <div className="flex flex-row gap-x-4 text-[#757575] font-[600]">
          <div>Terms and Conditions</div>
          <div>Privacy Policy</div>
        </div>

        <div className="text-[#757575] font-extralight mb-12">
          © copyright 2024 by Probo Media Technologies Pvt. Ltd.
        </div>
      </div>
    </section>
  );
}
