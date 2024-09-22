"use client";

import { useEffect, useRef, useState } from "react";

export default function SectionTwo(): JSX.Element {
  const slides = ["isSamacharActive", "isVicharActive", "isVyapaarActive"];
  const [activeText, setActiveText] = useState<{ [key: string]: boolean }>({
    isSamacharActive: true,
    isVicharActive: false,
    isVyapaarActive: false,
  });
  const [slideNumber, setSlideNumber] = useState(3);
  const videoRef = useRef(null);
  const changeActiveText = (data: {
    isSamacharActive: boolean;
    isVicharActive: boolean;
    isVyapaarActive: boolean;
  }) => {
    setActiveText(data);
  };
  useEffect(() => {
    const id = setInterval(() => {
      const slideNumbers = slideNumber % 3;
      console.log("slideNumbers", slideNumbers);
      const property = slides[slideNumbers] as keyof typeof activeText;
      setActiveText({
        isSamacharActive: false,
        isVicharActive: false,
        isVyapaarActive: false,
        [property]: true,
      });
      setSlideNumber(slideNumber + 1);
    }, 3000);

    return () => clearInterval(id);
  });
  useEffect(() => {
    skipAhead();
  }, [activeText]);
  const skipAhead = () => {
    const video: { currentTime: number; duration: number } | null =
      videoRef.current;
    //@ts-ignore
    let seconds = 0;
    if (activeText.isSamacharActive) {
      seconds = 0;
    } else if (activeText.isVicharActive) {
      seconds = 7;
    } else if (activeText.isVyapaarActive) {
      seconds = 11;
    }
    //@ts-ignore
    video.currentTime = seconds; // Skip ahead by the specified seconds
  };
  return (
    <section className="bg-[#262626]">
      <div className="mx-auto max-w-[1440px]">
        <div className="flex flex-row justify-center  pb-8">
          <div className="flex flex-col  w-6/12 mt-48 mr-32">
            <div className="flex flex-row justify-start gap-8">
              <div
                className={
                  activeText.isSamacharActive
                    ? "text-[#ffffff] cursor-pointer text-[48px]"
                    : "text-[48px] text-[#757575] cursor-pointer"
                }
                onClick={() =>
                  changeActiveText({
                    isSamacharActive: true,
                    isVicharActive: false,
                    isVyapaarActive: false,
                  })
                }
              >
                Samachar
              </div>
              <div
                onClick={() =>
                  changeActiveText({
                    isVicharActive: true,
                    isSamacharActive: false,
                    isVyapaarActive: false,
                  })
                }
                className={
                  activeText.isVicharActive
                    ? "text-[#ffffff] cursor-pointer text-[48px]"
                    : "text-[48px] text-[#757575] cursor-pointer"
                }
              >
                Vichaar{" "}
              </div>
              <div
                onClick={() =>
                  changeActiveText({
                    isVyapaarActive: true,
                    isSamacharActive: false,
                    isVicharActive: false,
                  })
                }
                className={
                  activeText.isVyapaarActive
                    ? "text-[#ffffff] cursor-pointer text-[48px]"
                    : "text-[48px] text-[#757575] cursor-pointer"
                }
              >
                Vyapaar
              </div>
            </div>

            <div className="flex flex-col text-[36px] mt-8 ">
              <div className="font-semibold	text-[#ffffff]">
                {activeText.isSamacharActive ? (
                  <>Be in the know</>
                ) : activeText.isVicharActive ? (
                  <>Use what you know</>
                ) : (
                  <>Trade and grow</>
                )}
              </div>
              <div className="font-normal text-[#ffffff] leading-lg w-full ">
                {activeText.isSamacharActive ? (
                  <>
                    From Sports to Entertainment, Economy, Finance and more.
                    Keep an eye on events in your field of interest.
                  </>
                ) : activeText.isVicharActive ? (
                  <>
                    Build your knowledge and form your opinions and views about
                    upcoming events in the world.
                  </>
                ) : (
                  <>
                    Invest in your opinions about future events and use your
                    knowledge to trade & benefit.
                  </>
                )}
              </div>
            </div>
          </div>

          <div className=" flex flex-row items-center mt-8  mr-32 pr-28">
            <div className="">
              <div className="p-2 shadow-3xl rounded-large">
                <video
                  ref={videoRef}
                  autoPlay
                  className="max-w-[270px] min-w-[270px] min-h-[580px] max-h-[580px] rounded-large object-contain	"
                  src="./info-video.mp4"
                ></video>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
