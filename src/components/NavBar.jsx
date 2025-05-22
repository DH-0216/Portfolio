import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "motion/react";
import logo from "../assets/logo.png";
import menu from "../assets/menu.svg";
import close from "../assets/close.svg";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [nav, setNav] = useState(false);
  const location = useLocation();
  const isNotHomePage = location.pathname !== "/";

  useEffect(() => {
    const changeValueOnScroll = () => {
      const scrollValue = window.scrollY;
      setNav(scrollValue > 100);
    };

    window.addEventListener("scroll", changeValueOnScroll);
    return () => {
      window.removeEventListener("scroll", changeValueOnScroll);
    };
  }, []);

  const navItems = [
    { title: "Home", path: "/" },
    { title: "About", path: "/about" },
    { title: "Services", path: "/services" },
    { title: "Contact", path: "/contact" },
  ];

  return (
    <motion.nav
      initial={{ top: "2rem", opacity: 0 }}
      animate={{
        top: nav || isNotHomePage ? "0rem" : "2rem",
        opacity: 1,
      }}
      transition={{ duration: 0.75, ease: "easeInOut" }}
      className={`fixed left-1/2 transform -translate-x-1/2 z-80 px-6 py-3 ${
        nav || isNotHomePage
          ? "w-full bg-black/70 rounded-none"
          : "w-[90%] backdrop-blur-md border-2 border-white/10 rounded-xl"
      } shadow-md flex justify-between items-center`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("Home");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-auto h-12 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            Dulaj Hashmika
          </p>
        </Link>

        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navItems.map((item) => (
            <li key={item.title}>
              <Link
                to={item.path}
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
          <img
            src={toggle ? close : menu}
            alt="menu"
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
                  {navItems.map((item) => (
                    <li key={item.title}>
                      <Link
                        to={item.path}
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
