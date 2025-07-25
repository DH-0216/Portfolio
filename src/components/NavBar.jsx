"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence} from "framer-motion";
import { logo, menu, close } from "@/assets";
import Link from "next/link";
import { navLinks } from "@/utils";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [nav, setNav] = useState(false);
  const pathname = usePathname();
  const isNotHomePage = pathname !== "/";

  useEffect(() => {
    let timeoutId;
    const changeValueOnScroll = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        const scrollValue = window.scrollY;
        setNav(scrollValue > 100);
      }, 50); // 50ms debounce
    };

    window.addEventListener("scroll", changeValueOnScroll);
    return () => {
      window.removeEventListener("scroll", changeValueOnScroll);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <motion.nav
      initial={{ top: "2rem", opacity: 0 }}
      animate={{
        top: nav || isNotHomePage ? "0rem" : "2rem",
        opacity: 1,
      }}
      transition={{ duration: 0.75, ease: "easeInOut" }}
      className={`fixed left-1/2 transform -translate-x-1/2 z-80 px-4 sm:px-6 py-2 sm:py-3 ${
        nav || isNotHomePage
          ? "w-full bg-gradient-to-r from-black/90 via-[#050d1a]/90  to-[#101a2b]/90 rounded-none"
          : "w-[90%] backdrop-blur-md border-2 border-white/10 rounded-xl"
      } shadow-md flex justify-between items-center navbar-text`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          href="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("Home");
            window.scrollTo(0, 0);
          }}
        >
          <Image
            src={logo}
            alt="logo"
            width={40}
            height={40}
            className="w-auto h-6 sm:h-8 md:h-9 object-contain transition-all duration-300"
          />
        </Link>

        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((item) => (
            <li key={item.title}>
              <Link
                href={item.path}
                className={`${
                  active === item.title ? "text-[#888888]" : "text-white"
                } hover:text-[#888888] text-[18px] font-medium cursor-pointer`}
                onClick={() => {
                  setActive(item.title);
                  if (item.title === "Home") window.scrollTo(0, 0);
                }}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <Image
            src={toggle ? close : menu}
            alt="menu"
            width={28}
            height={28}
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <AnimatePresence>
              {toggle && (
                <motion.ul
                  className="list-none flex justify-end items-start flex-1 flex-col gap-4"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                  {navLinks.map((item) => (
                    <li key={item.title}>
                      <Link
                        href={item.path}
                        className={`${
                          active === item.title
                            ? "text-[#888888]"
                            : "text-white"
                        } hover:text-[#888888] text-[18px] font-medium cursor-pointer`}
                        onClick={() => {
                          setActive(item.title);
                          if (item.title === "Home") window.scrollTo(0, 0);
                        }}
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
