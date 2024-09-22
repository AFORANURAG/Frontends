import Image, { StaticImageData } from "next/image";
import SectionThreeRightImageOne from "../../../../public/IMAGE_1_Section_Three_Right.png";
import SectionThreeRightImageTwo from "../../../../public/Bar_Chart_Section_Three_Right.png";

export default function SectionThreeRightCard(props: {
  src: StaticImageData;
  numberOfTraders: number;
  opinion: string;
  yesAmount: number;
  noAmount: number;
}): JSX.Element {
  const { src, noAmount, opinion, numberOfTraders, yesAmount } = props;
  return (
    <div className="border-[1px] max-w-[300px] mx-auto text-center flex flex-col min-h-[270px] p-[16px] rounded-md shadow-4xl pl-4 bg-[#ffffff]">
      <div>
        <span>
          <Image alt="image1SectionThreeRight" src={src} />
        </span>
      </div>

      <div className="flex flex-row flex-1 gap-x-2 mt-4 text-[#536070] font-semibold">
        <div>
          <Image
            src={SectionThreeRightImageTwo}
            alt="image2SectionThreeRight"
          />
        </div>

        <div className="font-semibold text-[12px]">
          {numberOfTraders || 19701} traders
        </div>
      </div>

      <div className="text-[16px] mb-[16px] leading-6 font-normal text-left tracking-widest text-[#262626] mt-4">
        {opinion}
      </div>

      <div className="flex flex-1 flex-row  gap-4 justify-around mt-8">
        {/* <div className="bg-[#197bff]  bg-[linear-gradient(104.13deg,_hsla(0,_0%,_100%,_.25)_3.11%,_rgba(94,_163,_255,_.125)_34.12%),_#e8f2ff]" id='btn_1'> */}
        <button
          className="text-[14px] leading-5	rounded-md	 px-[32px] py-[12px] font-semibold"
          style={{
            color: "#197bff",
            background:
              "linear-gradient(104.13deg, hsla(0, 0%, 100%, .25) 3.11%, rgba(94, 163, 255, .125) 34.12%), #e8f2ff",
          }}
        >
          Yes ${yesAmount}
        </button>
        {/* </div> */}
        {/* <div className="bg-[#dc2804]"> */}
        <button
          className="leading-5 rounded-md		text-[14px] font-semibold py-[12px] px-[32px]"
          style={{
            color: "#dc2804",
            background:
              "linear-gradient(104.13deg,hsla(0,0%,100%,.25) 3.11%,hsla(6,75%,63%,.125) 34.12%),#fdf3f2",
          }}
        >
          No ${noAmount}
        </button>
        {/* </div> */}
      </div>
    </div>
  );
}
