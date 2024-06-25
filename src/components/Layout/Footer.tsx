import { cn } from "@/utils/cn";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandX,
  IconBrandYoutube,
} from "@tabler/icons-react";
import Link from "next/link";
import Section from "../Section";

const SocialMediaIcons = [
  {
    Icon: <IconBrandFacebook stroke={2} className="h-8 w-8" />,
    tooltipName: "Facebook",
    link: "https://www.facebook.com/profile.php?id=100084945152681",
  },
  {
    Icon: <IconBrandX stroke={2} className="h-8 w-8" />,
    tooltipName: "Twitter",
    link: "",
  },
  {
    Icon: <IconBrandYoutube stroke={2} className="h-8 w-8" />,
    tooltipName: "Youtube",
    link: "https://www.youtube.com/@inittechlabs",
  },
  {
    Icon: <IconBrandInstagram stroke={2} className="h-8 w-8" />,
    tooltipName: "Instagram",
    link: "https://www.instagram.com/inittechlabs/",
  },
  {
    Icon: <IconBrandLinkedin stroke={2} className="h-8 w-8" />,
    tooltipName: "Linkedin",
    link: "#",
  },
];
const Footer = () => {
  return (
    <Section className="bg-blue-800 pb-0 lg:pb-1">
      <div className="container">
        <ul className="tooltip-wrapper">
          {SocialMediaIcons.map((item, i) => (
            <li
              className={cn("icon", item?.tooltipName?.toLowerCase())}
              key={i}
            >
              <span className="tooltip">{item?.tooltipName}</span>
              <Link href={item?.link}>{item?.Icon}</Link>
            </li>
          ))}
        </ul>
      </div>
      <hr className="border border-gray-300 w-full" />
      <div className="container">
        <p className="text-white text-center py-2 text-12">
          Copyright © Init Tech Labs. All Rights Reserved.
        </p>
      </div>
    </Section>
  );
};

export default Footer;
