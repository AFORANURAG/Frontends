import Image from "next/image";
import { Card } from "@repo/ui/card";
import Navbar from "./components/homePageComponents/Navbar";
import SectionOne from "./components/homePageComponents/SectionOne";
import SectionTwo from "./components/homePageComponents/SectionTwo";
import SectionThree from "./components/homePageComponents/SectionThree";
import SectionFour from "./components/homePageComponents/SectionFour";
import SectionFive from "./components/homePageComponents/SectionFive";
import SectionSix from "./components/homePageComponents/SectionSix";


export default function Page(): JSX.Element {
  return (
    <>
      <div className="font-sans bg-[#f5f5f5] box-border">
        <Navbar />
        <SectionOne />
        <SectionTwo />
        <SectionThree />
        <SectionFour/>
        <SectionFive/>
        <SectionSix/>
      </div>
    </>
  );
}
