import Image, { StaticImageData } from "next/image";


export default function SectionFiveCard(props: {
  titleImageSrc: StaticImageData;
  content: string;
  title: string;
}): JSX.Element {
  const { titleImageSrc, content, title } = props;
  return (
    <div className="w-[344px] h-[360px] ">
      <div className="flex flex-col w-[280px] content-center">
        <div>
          <Image src={titleImageSrc} alt="titleImage" width={80} height={80}/>
        </div>

        <div className="font-bold text-[20px] mt-20">{title}</div>

        <div className="text-[14px] text-[#554a45] w-[250px] mt-4">{content}</div>
      </div>
    </div>
  );
}
