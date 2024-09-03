import SectionOneBG from "../../../../public/SectionOneBG.svg";
import Image from "next/image"
import SectionOneRight from "../../../../public/sectionOneRight.jpeg"
import SectionOneRightBG from "../../../../public/SectionOneBG.svg"
export default function SectionOne(): JSX.Element {
  return (
    <section className="border-2">
      <div
        className="bg-no-repeat  bg-bottom bg-SectionOneRightBGRight font-sans border"
      >
        <div className="flex flex-row justify-around ml-4 border-4  ">
          {/** 
                 * left side section
                */}
          <div className="flex flex-col text-left justify-center font-normal pb-16 pl-24 pt-16 tracking-widest">
            <div className="text-[80px] leading-[1rem] mb-6 ">
              Invest in your
            </div>
            <div className="text-[56px] mb-8 tracking-widest">
              point of view
            </div>

            <div className="text-[22px] text-[#545454] font-normal tracking-widest">
              Sports, Entertainment, Economy or Finance.
            </div>

            <div className="flex flex-row gap-3 mt-16 mb-3">
              <div>
             <button className="border py-2 px-10 text-sm font-semibold w-42 h-10  text-[14px] rounded leading-5	text-center">Download App</button>
              </div>
              <div>
              <button className="border py-2 px-10 text-sm font-semibold w-42 h-10  text-[14px] rounded leading-5	text-center bg-black text-white">Trade Online</button>
              </div>
              
            </div>
            <div className="text-[#757575] text-[12px] tracking-normal">
              <input type="checkbox" className="mr-[10px]"  checked />
              For 18 years and above only
            </div>
            
            <div></div>
          </div>


          <div>
            <span>
              <span>
                <span>
                  {/* <Image src={SectionOneRightBG} alt="SectionOneRightBG"/> */}
                </span>
                <Image alt="SectionOneRight" src={SectionOneRight} />
              </span>

            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
