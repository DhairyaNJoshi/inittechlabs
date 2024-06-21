import { cn } from "@/utils/cn";
import { IconX } from "@tabler/icons-react";
import { LazyMotion, domAnimation, m } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Portal } from "../ui/Portal";

type SidebarProps = {
  closeSidebar: () => void;
};

const SIDEBAR_MENU = [
  {
    name: "Services",
    link: "/services",
  },
  {
    name: "Technologies",
    link: "/technologies",
  },
  {
    name: "Buy Courses",
    link: "/training/courses",
  },
  {
    name: "Personalised Training & Bootcamp",
    link: "/training/personalised-training",
  },
  {
    name: "Blog",
    link: "/",
    className: "pointer-events-none",
  },
  {
    name: "Contact",
    link: "/contact-us",
  },
  {
    name: "Portfolio",
    link: "/",
    className: "pointer-events-none",
  },
];
const Sidebar = ({ closeSidebar }: SidebarProps) => {
  return (
    <Portal>
      <LazyMotion features={domAnimation}>
        <m.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="sidebar-backdrop fixed left-0 top-0 z-[55] h-full w-screen bg-gray/60 backdrop-blur-sm"
          onClick={closeSidebar}
        ></m.div>
        <m.div
          initial={{ x: "-100%" }}
          animate={{ x: "0%" }}
          transition={{ ease: "easeIn", duration: 0.1 }}
          exit={{ x: "-100%" }}
          className=" overflow-cst fixed left-0 top-0 z-[60] h-full w-11/12 overflow-auto bg-primary-50 shadow-2xl sm:w-auto"
        >
          <div className="sticky top-0 z-10 flex items-center gap-6 bg-white p-3 shadow-sm sm:p-0">
            <Link
              className="h-full w-full sm:max-w-[100px] max-w-[70px] max-h-[50px]"
              href={"/"}
              onClick={closeSidebar}
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
            <IconX
              onClick={closeSidebar}
              className="ml-auto h-7 w-7 text-gray sm:hidden"
            />
          </div>
          <div className="py-6 pb-6 lg:px-20">
            <ul className="text-20 font-600 leading-10 text-gray grid divide-y divide-gray-100/40">
              {SIDEBAR_MENU?.map((item, i) => (
                <li key={i} className="px-6 py-2 leading-7">
                  <Link
                    onClick={closeSidebar}
                    href={item.link}
                    className={cn(item.className)}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </m.div>
      </LazyMotion>
    </Portal>
  );
};

export default Sidebar;
