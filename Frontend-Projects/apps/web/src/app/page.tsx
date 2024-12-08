import Image from "next/image";
import { Card } from "@repo/ui/card";
import Navbar from "./components/homePageComponents/Navbar";
import SectionOne from "./components/homePageComponents/SectionOne";
import SectionTwo from "./components/homePageComponents/SectionTwo";
import SectionThree from "./components/homePageComponents/SectionThree";
import SectionFour from "./components/homePageComponents/SectionFour";
import SectionFive from "./components/homePageComponents/SectionFive";
import SectionSeven from "./components/homePageComponents/SectionSeven";
import { Work_Sans } from "next/font/google";
import SectionEight from "./components/homePageComponents/SectionEight";
import SectionNine from "./components/homePageComponents/SectionNine";
import SectionTen from "./components/homePageComponents/SectionTen";
import SectionEleven from "./components/homePageComponents/SectionEleven";
import SectionTwelve from "./components/homePageComponents/SectionTwelve";
import SectionThirteen from "./components/homePageComponents/SectionThirteen";
const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"], // Adjust weights as needed
});
export default function Page(): JSX.Element {
  return (
    <>
      <div className={workSans.className}>
        <Navbar />
        <SectionOne />
        <SectionTwo />
        <SectionThree />
        <SectionFour />
        <SectionFive />
        <SectionSeven />
        <SectionEight />
        {/* <SectionSix/> */}
        <SectionNine />
        <SectionTen />
        <SectionEleven />
        <SectionTwelve />
        <SectionThirteen />
      </div>
    </>
  );
}
