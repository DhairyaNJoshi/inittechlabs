import { IconX } from "@tabler/icons-react";
import { LazyMotion, domAnimation, m } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Portal } from "../ui/Portal";

type SidebarProps = {
  closeSidebar: () => void;
};
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
          className=" overflow-cst fixed left-0 top-0 z-[60] h-full w-11/12 overflow-auto bg-white shadow-2xl sm:w-auto"
        >
          <div className="sticky top-0 z-10 flex items-center gap-6 bg-white p-3 shadow-sm sm:p-0">
            <Link
              className="h-full w-full sm:max-w-[100px] max-w-[70px] max-h-[50px]"
              href={"/"}
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
          <div className="px-6 py-6 pb-6 lg:px-20">
            <ul className=" text-20 font-600 leading-10 text-gray">
              <li>
                <Link onClick={closeSidebar} href="/services">
                  Services
                </Link>
              </li>
              <li>
                <Link onClick={closeSidebar} href="/technologies">
                  Technologies
                </Link>
              </li>
              <li>
                <Link onClick={closeSidebar} href="/training/courses">
                  Buy Courses
                </Link>
              </li>
              <li>
                <Link
                  onClick={closeSidebar}
                  href="/training/personalised-training"
                >
                  Personalised Training
                </Link>
              </li>
              <li>
                <Link onClick={closeSidebar} href="/">
                  Bootcamp
                </Link>
              </li>
              <li>
                <Link onClick={closeSidebar} href="/">
                  Blog
                </Link>
              </li>
              <li>
                <Link onClick={closeSidebar} href="/">
                  Contact
                </Link>
              </li>
              <li>
                <Link onClick={closeSidebar} href="/">
                  Portfolio
                </Link>
              </li>
            </ul>
          </div>
        </m.div>
      </LazyMotion>
    </Portal>
  );
};

export default Sidebar;
