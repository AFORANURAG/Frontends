"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
const SectionNineLinks = {
  firstColumnLinks: { heading: "Company", links: ["About Us", "Culture"] },
  secondColumnLinks: {
    heading: "Resources",
    links: ["Help Centre", "Contact Support", "What's New"],
  },
  thirdColumsLinks: {
    links: ["Open Roles"],
    heading: "Careers",
  },
  fourthColumsLinks: {
    heading: "Contact Us",
    links: ["help@probo.in", "communication.probo.in"],
  },
};

export default function SectionNine() {
  const pathname = usePathname();
  return (
    <section className="bg-[#f5f5f5] pt-4">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {Object.keys(SectionNineLinks).map((key: string) => {
          const column = SectionNineLinks[key as keyof typeof SectionNineLinks];
          return (
            <div key={key}>
              <h2 className="text-lg font-semibold mb-4">
                {SectionNineLinks[key as keyof typeof SectionNineLinks].heading}
              </h2>
              <ul>
                {column.links.map((link: string, index: number) => {
                  return (
                    <li key={index} className="mb-2">
                      {link.includes("@") ? (
                        <a
                          href={`mailto:${link}`}
                          className="hover:font-medium font-[100] leading-6"
                        >
                          {link}
                        </a>
                      ) : (
                        <Link
                          href={`/${link.toLowerCase().replace(/\s+/g, "-")}`}
                          className="hover:font-medium font-[100] leading-6"
                        >
                          {link}
                        </Link>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
      <div className="h-[1px] container mx-auto bg-gray-300"></div>
    </section>
  );
}
