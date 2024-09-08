import Image from 'next/image';
import SectionThreeRightImageOne from '../../../../public/IMAGE_1_Section_Three_Right.png';
import SectionThreeRightImageTwo from '../../../../public/Bar_Chart_Section_Three_Right.png';

export default function SectionThreeRightCard(): JSX.Element {
  return (
    <div className="border-[1px] max-w-[277px] mx-auto text-center flex flex-col min-h-[290px] p-[20px] rounded-md shadow-4xl bg-[#ffffff]" >
      <div>
        <span>
          <Image alt="image1SectionThreeRight" src={SectionThreeRightImageOne} />
        </span>
      </div>

      <div className="flex flex-row flex-1 gap-x-2">
        <div>
          <Image src={SectionThreeRightImageTwo} alt="image2SectionThreeRight" />
        </div>

        <div className="font-semibold text-[12px]">
          19701 traders
        </div>
      </div>

      <div className="text-[16px] mb-[16px] leading-6 font-normal text-left">
        Centre to constitute the 8th Pay Commission?
      </div>

      <div className="flex flex-1 flex-row items-end gap-4">
        {/* <div className="bg-[#197bff]  bg-[linear-gradient(104.13deg,_hsla(0,_0%,_100%,_.25)_3.11%,_rgba(94,_163,_255,_.125)_34.12%),_#e8f2ff]" id='btn_1'> */}
          <button className="text-[14px] leading-5	rounded-md	 px-[20px] py-[10px] font-semibold"  style={{color:"#197bff",background:'linear-gradient(104.13deg, hsla(0, 0%, 100%, .25) 3.11%, rgba(94, 163, 255, .125) 34.12%), #e8f2ff'}}>
            Yes $1.5
          </button>
        {/* </div> */}
        {/* <div className="bg-[#dc2804]"> */}
          <button className="leading-5 rounded-md		text-[14px] font-semibold py-[10px] px-[20px]" style={{color:'#dc2804',background:'linear-gradient(104.13deg,hsla(0,0%,100%,.25) 3.11%,hsla(6,75%,63%,.125) 34.12%),#fdf3f2'}}>
            No $2.5
          </button>
        {/* </div> */}
      </div>
    </div>
  );
}
