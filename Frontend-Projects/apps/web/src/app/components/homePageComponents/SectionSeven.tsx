import PersonLeftImg from "../../../../public/person-left.jpeg";
import PersonRightImg from "../../../../public/person-right.jpeg";
import Image from "next/image";
export default function SectionSeven(): JSX.Element {
  return (
    <section className="bg-[#262626] text-[#ffffff]">
      <div>
        <div className="flex flex-col items-center justify-center gap-y-8">
          <div className="w-[1376px] flex items-center justify-center m-auto">
            <div className="text-[96px] w-3/4 border-4 text-center leading-[120px]">
              What will be the return on your opinions?
            </div>
          </div>
          <button className="text-[20px] max-w-[277px] w-[277px] h-[66px] rounded-full border-[2px] text-center pr-4">
            Download App
            <span className="absolute ml-2 mt-2">
              <svg
                width="20"
                height="16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.692.933a.625.625 0 10-.884.884l4.558 4.558H1.125a.625.625 0 100 1.25h12.241l-4.558 4.558a.625.625 0 10.884.884l5.625-5.625a.623.623 0 000-.884L9.692.933z"
                  fill="#FFFFFF"
                />
              </svg>{" "}
            </span>
          </button>
        </div>
        <div className="flex flex-row justify-between w-4/5 m-auto">
          <div>
            <Image src={PersonLeftImg} alt="Left person image" />
          </div>
          <div>
            <Image src={PersonRightImg} alt="Right person image" />
          </div>
        </div>
      </div>
    </section>
  );
}
