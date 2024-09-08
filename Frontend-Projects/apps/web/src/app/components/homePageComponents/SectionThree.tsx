


import { useEffect, useRef, useState } from "react";
import SectionThreeRightCard from "./SectionThreeRightCard";
import SectionThreeRightImageOne from "../../../../public/IMAGE_1_Section_Three_Right.png"
export default function SectionThree(): JSX.Element {
    return (
        <section className="bg-[#f5f5f5]">
            <div className="mx-auto max-w-[1440px] py-[32px] ">
                <div className="w-full flex flex-row">
                    <div className="flex flex-col w-6/12 justify-center min-h-[625px] max-h-[625px]">
                        <div className="font-semibold text-[84px] text-[#262626] leading-[80px]">
                            Trade when you like,
                        </div>

                        <div className="text-[48px] text-left font-semibold">
                            on what you like.

                        </div>

                    </div>


                    <div>
                        <SectionThreeRightCard  />
                    </div>
                </div>

            </div>
        </section>
    )

}
