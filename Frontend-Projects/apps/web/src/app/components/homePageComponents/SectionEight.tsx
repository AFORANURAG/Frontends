"use client";
import Link from "next/link";
import Image from "next/image";
import websiteLogo from "../../../../public/logo-removebg-preview.png";
import languageLogo from "../../../../public/translation.jpg";
import { usePathname } from "next/navigation";

const NAV_LEFT_SIDE_LINKS: Array<{
  title: string;
  href: string;
  description: string;
}> = [
  {
    title: "Trading",
    href: "/events",
    description: "It will redirect the user to Trading section",
  },
  {
    title: "Team 11",
    href: "/team-11",
    description: "It will redirect the user to Team11 section",
  },
  {
    title: "Read",
    href: "/read",
    description: "It will redirect the user to Read section",
  },
  {
    title: "Cares",
    href: "/cares",
    description: "It will redirect the user to Cares section",
  },
  {
    title: "Careers",
    href: "/careers",
    description: "It will redirect the user to Careers section",
  },
];

const RIGHT_SIDE_LINKS: Array<{
  title: string;
  href?: string;
  description?: string;
  className?: string;
}> = [
  {
    title: "Download App",
    description: "link for downloading our mobile app.",
    className:
      "border py-2 px-10 text-sm font-semibold w-42 h-10  text-[14px] rounded leading-5	text-center",
  },
  {
    title: "Trade Online",
    description: "redirect to trading page.",
    href: "/dashboard",
    className:
      "border py-2 px-10 text-sm font-semibold w-42 h-10  text-[14px] rounded leading-5	text-center bg-black text-white",
  },
  // { title: "Login/Signup", description: "User will login/signup from here using phoneNumber authentication", href: "/dashboard" ,className:''}
];

export default function SectionEight() {
  const pathname = usePathname();
  return (
    <section className="bg-[#f5f5f5]">
      <div className="sticky z-50 bg-[#f5f5f5] pt-8 w-4/5 mx-auto">
        <div className="flex flex-row justify-between py-4   gap-4">
          <div className="flex flex-row gap items-center	leading-normal ">
            <div className="mr-16">
              <Image
                alt="Website Logo"
                src={websiteLogo}
                className="w-24 h-8"
              />
            </div>
          </div>

          <div className="flex flex-row gap-10 ">
            <ul className="flex gap-4">
              <div>
                <li className="text-xs w-28 text-right text-[#262626]">
                  For 18 years and above only.
                </li>
              </div>

              {RIGHT_SIDE_LINKS.map((link) => (
                <li key={link.title}>
                  <button className={link.className}>{link.title}</button>
                </li>
              ))}
              {/* <li className="">
            <Image src={languageLogo} alt="languageSelectionLogo"/>
          </li> */}
            </ul>
          </div>
        </div>
      </div>
      <div className="h-[1px] container mx-auto bg-gray-300"></div>
    </section>
  );
}
