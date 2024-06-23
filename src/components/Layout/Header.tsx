"use client";
import { IconMenu2 } from "@tabler/icons-react";
import { AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { HoverMenu, HoverMenuItem } from "../ui/HoverMenu";
import Sidebar from "./Sidebar";

const Header = () => {
  const [activeHoverMenu, setActiveHoverMenu] = useState<string | null>(null);
  const [toggleSidebar, setToggleSidebar] = useState(false);
  const closeSidebar = () => {
    setToggleSidebar(false);
  };
  const handleToggleSidebar = () => {
    setToggleSidebar(!toggleSidebar);
  };
  return (
    <div className="sticky top-0 z-[28] w-full bg-white shadow-md">
      <div className="container mx-auto p-4">
        <div className="flex justify-between">
          <Link
            href="/"
            className="h-full w-full sm:max-w-[100px] max-w-[70px] max-h-[50px]"
          >
            <Image
              src={"/images/INITlogo.png"}
              alt="logo"
              width={0}
              height={0}
              sizes="100vw"
              className="h-full w-full"
            />
          </Link>
          <div className="hidden md:flex gap-x-5 md:gap-x-8 items-center text-gray font-600 lg:text-18">
            <Link href="/services" className="hover:font-600 hover:scale-105">
              Services
            </Link>
            <Link
              href="/technologies"
              className="hover:font-600 hover:scale-105"
            >
              Technologies
            </Link>
            <HoverMenu setActive={setActiveHoverMenu}>
              <HoverMenuItem
                setActive={setActiveHoverMenu}
                active={activeHoverMenu}
                item="Training"
              >
                <div className="grid gap-3 font-500 px-3">
                  <Link
                    href="/training/courses"
                    className="hover:font-600 hover:scale-105"
                  >
                    Buy Courses
                  </Link>
                  <Link
                    href="/training/personalised-training"
                    className="hover:font-600 hover:scale-105"
                  >
                    Personalised Training & Bootcamp
                  </Link>
                </div>
              </HoverMenuItem>
            </HoverMenu>
            <Link href="/blog" className="hover:font-600 hover:scale-105">
              Blog
            </Link>
            <Link href="/contact-us" className="hover:font-600 hover:scale-105">
              Contact
            </Link>
            <Link href="/portfolio" className="hover:font-600 hover:scale-105">
              Portfolio
            </Link>
          </div>
          <div
            className="flex items-center md:hidden"
            onClick={handleToggleSidebar}
          >
            <IconMenu2 stroke={2} />
          </div>
        </div>
      </div>
      <AnimatePresence>
        {toggleSidebar && <Sidebar closeSidebar={closeSidebar}></Sidebar>}
      </AnimatePresence>
    </div>
  );
};

export default Header;
