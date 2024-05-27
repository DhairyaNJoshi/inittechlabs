"use client";
import { IconMenu2 } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { HoverMenu, HoverMenuItem } from "../ui/HoverMenu";

const Header = () => {
  const [activeHoverMenu, setActiveHoverMenu] = useState<string | null>(null);
  return (
    <div className="sticky top-0 z-[28] w-full bg-white shadow-md">
      <div className="container mx-auto p-4">
        <div className="flex justify-between">
          <Image
            src={"/images/INITlogo.png"}
            alt="logo"
            width={0}
            height={0}
            sizes="100vw"
            className="h-full w-full sm:max-w-[100px] sm:max-h-[50px] max-w-[75px] max-h-[50px]"
          />
          <div className="hidden md:flex gap-x-5 md:gap-x-8 items-center text-gray font-600 lg:text-18">
            <Link href="/" className="hover:font-600 hover:scale-105">
              Services
            </Link>
            <Link href="/" className="hover:font-600 hover:scale-105">
              Technologies
            </Link>
            <HoverMenu setActive={setActiveHoverMenu}>
              <HoverMenuItem
                setActive={setActiveHoverMenu}
                active={activeHoverMenu}
                item="Training"
              >
                <div className="grid gap-3 font-500 px-3">
                  <Link href="/" className="hover:font-600 hover:scale-105">
                    Buy Courses
                  </Link>
                  <Link href="/" className="hover:font-600 hover:scale-105">
                    Personalised Training
                  </Link>
                  <Link href="/" className="hover:font-600 hover:scale-105">
                    Bootcamp
                  </Link>
                </div>
              </HoverMenuItem>
            </HoverMenu>
            <Link href="/" className="hover:font-600 hover:scale-105">
              Blog
            </Link>
            <Link href="/" className="hover:font-600 hover:scale-105">
              Contact
            </Link>
            <Link href="/" className="hover:font-600 hover:scale-105">
              Portfolio{" "}
            </Link>
          </div>
          <div className="flex items-center md:hidden">
            <IconMenu2 stroke={2} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;