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
    Icon: <IconBrandFacebook stroke={2} className="h-8 w-8 text-white" />,
    link: "https://www.facebook.com/profile.php?id=80090273675841",
  },
  {
    Icon: <IconBrandX stroke={2} className="h-8 w-8 text-white" />,
    link: "https://x.com/inittechlabs?s=21&t=WxtNzy0EY9v6A4fPIj8sdA",
  },
  {
    Icon: <IconBrandYoutube stroke={2} className="h-8 w-8 text-white" />,
    link: "https://youtube.com/@inittechlabs?si=Gi0eywjGcW1rndrQ",
  },
  {
    Icon: <IconBrandInstagram stroke={2} className="h-8 w-8 text-white" />,
    link: "https://www.instagram.com/inittechlabs?igsh=MWlmZ2lodm02cTFtdQ==",
  },
  {
    Icon: <IconBrandLinkedin stroke={2} className="h-8 w-8 text-white" />,
    link: "#",
  },
];
const Footer = () => {
  return (
    <Section className="bg-blue-800 pb-0 lg:pb-1">
      <div className="container">
        <div className="flex gap-x-4 pb-4 md:pb-6 justify-end">
          {SocialMediaIcons.map((item, i) => (
            <Link href={item.link} key={i}>
              {item.Icon}
            </Link>
          ))}
        </div>
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
