"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { words } from "@/utils/index";
import { about_me } from "@/assets";
import Image from "next/image";
const Hero = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".hero-text h1",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: "power2.inOut" }
    );
  });

  return (
    <div className="relative z-10 min-h-screen flex flex-col md:flex-row items-center justify-between p-4 overflow-hidden bg-[url(https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/hero/green-gradient-bg.svg)]">
      {/* Background Layer */}

      {/* Content Layer */}
      <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
        <div className="sm:px-16 px-6 absolute inset-0 top-[120px] md:top-[180px] mx-10 flex flex-row items-start gap-5">
          <div className="flex flex-col justify-center items-center mt-5">
            <div className="w-5 h-5 rounded-full bg-[#888888]" />
            <div className="w-1 sm:h-80 h-40 gray-gradient" />
          </div>
          <div>
            <h1 className="font-black lg:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] lg:leading-[80px] mt-2 text-[#F8F8FF]">
              Hi, I'm <span className="text-[#888888]">Dulaj Hashmika</span>
            </h1>
            <p className="text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px] mt-5">
              I develop modern web <br className="sm:block hidden" />
              experiences and applications.
            </p>

            <div className="hero-text text-[#F8F8FF] mt-10 md:mt-15">
              <h1>
                Shaping
                <span className="slide">
                  <span className="wrapper">
                    {words.map((word, index) => (
                      <span
                        key={index}
                        className="flex items-center md:gap-3 gap-1 pb-2"
                      >
                        <Image
                          src={word.imgPath}
                          alt={word.text}
                          width={40}
                          height={40}
                          className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                        />
                        <span>{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
              <h1>into Real Projects</h1>
              <h1>that Deliver Results</h1>
            </div>
          </div>
        </div>
      </header>

      {/* RIGHT: Hero Image */}
      <div className="relative w-full md:w-1/2 flex justify-center md:justify-start top-[-60px] md:top-[-60px] lg:top-10">
        <Image
          src={about_me}
          alt="about me"
          width={400}
          height={400}
          className="w-[180px] sm:w-[280px] md:w-[240px] lg:w-[400px] object-contain"
        />
      </div>
    </div>
  );
};

export default Hero;
