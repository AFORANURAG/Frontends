import SectionOneBG from "../../../../public/SectionOneBG.svg";
import Image from "next/image"
import SectionOneRight from "../../../../public/sectionOneRight.jpeg"
export default function SectionOne(): JSX.Element {
  return (
    <section className="border-2">
      <div
        style={{ backgroundImage: `url(${SectionOneBG})` }}
        className="bg-no-repeat bg-cover bg-bottom"
      >
              <div className="flex flex-row">
                {/** 
                 * left side section
                */}
                  <div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                  </div>


                  <div>
                      <span>
                          <span>
                              <span>
                              </span>
                              <Image alt="SectionOneRight" src={SectionOneRight}/>
                          </span>  
                        
                      </span>
                  </div>
    </div>
      </div>
    </section>
  );
}
