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
export default function SectionEleven() {
  return (
    <section className="bg-[#f5f5f5] ">
      <div className="flex flex-row justify-center gap-x-8 h-[100px] py-2">
        {rightSection.map((link) => {
          return (
            <div className="flex flex-row">
              <Link href={"www.linkedIn.com"}>
                <span>
                  <Image
                    src={link.titleImageSrc}
                    alt={`${link.divContent}Image`}
                  />
                </span>
              </Link>
              <div className="inline font-[600] mt-[12px] ml-4">
                {link.divContent}
              </div>
            </div>
          );
        })}
      </div>
      <div className="h-[1px] container mx-auto bg-gray-300  "></div>
    </section>
  );
}
