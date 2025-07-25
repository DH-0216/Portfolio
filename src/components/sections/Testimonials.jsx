"use client";
import { motion } from "framer-motion";
import { testimonials } from "@/utils/index";
import TitleHeader from "@/components/TitleHeader";
import GlowCard from "@/components/GlowCard";
import { star } from "@/assets";
import { useState } from "react";
import Image from "next/image";

const Testimonials = () => {
  const cardsData = testimonials;

  const CreateCard = ({ card }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
      <motion.div
        className="p-4 rounded-lg mx-2 shadow hover:shadow-lg transition-all duration-200 w-72 overflow-hidden shrink-0"
        transition={{ duration: 0.5 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <GlowCard>
          <div className="flex gap-2">
            <Image
              className="size-11 rounded-full"
              src={card.imgPath}
              alt="User Image"
              width={44}
              height={44}
            />
            <div className="flex flex-col">
              <div className="flex items-center gap-1">
                <p>{card.name}</p>
                <svg
                  className="mt-0.5"
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4.555.72a4 4 0 0 1-.297.24c-.179.12-.38.202-.59.244a4 4 0 0 1-.38.041c-.48.039-.721.058-.922.129a1.63 1.63 0 0 0-.992.992c-.071.2-.09.441-.129.922a4 4 0 0 1-.041.38 1.6 1.6 0 0 1-.245.59 3 3 0 0 1-.239.297c-.313.368-.47.551-.56.743-.213.444-.213.96 0 1.404.09.192.247.375.56.743.125.146.187.219.24.297.12.179.202.38.244.59.018.093.026.189.041.38.039.48.058.721.129.922.163.464.528.829.992.992.2.071.441.09.922.129.191.015.287.023.38.041.21.042.411.125.59.245.078.052.151.114.297.239.368.313.551.47.743.56.444.213.96.213 1.404 0 .192-.09.375-.247.743-.56.146-.125.219-.187.297-.24.179-.12.38-.202.59-.244a4 4 0 0 1 .38-.041c.48-.039.721-.058.922-.129.464-.163.829-.528.992-.992.071-.2.09-.441.129-.922a4 4 0 0 1 .041-.38c.042-.21.125-.411.245-.59.052-.078.114-.151.239-.297.313-.368.47-.551.56-.743.213-.444.213-.96 0-1.404-.09-.192-.247-.375-.56-.743a4 4 0 0 1-.24-.297 1.6 1.6 0 0 1-.244-.59 3 3 0 0 1-.041-.38c-.039-.48-.058-.721-.129-.922a1.63 1.63 0 0 0-.992-.992c-.2-.071-.441-.09-.922-.129a4 4 0 0 1-.38-.041 1.6 1.6 0 0 1-.59-.245A3 3 0 0 1 7.445.72C7.077.407 6.894.25 6.702.16a1.63 1.63 0 0 0-1.404 0c-.192.09-.375.247-.743.56m4.07 3.998a.488.488 0 0 0-.691-.69l-2.91 2.91-.958-.957a.488.488 0 0 0-.69.69l1.302 1.302c.19.191.5.191.69 0z"
                    fill="#2196F3"
                  />
                </svg>
              </div>
            </div>
          </div>
          <motion.p
            className="text-sm py-4 text-gray-400 overflow-hidden"
            animate={{
              maxHeight: isHovered ? 1000 : 80,
              opacity: isHovered ? 1 : 0.85
            }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
          >
            {card.review}
          </motion.p>
          <div className="flex items-center justify-between text-slate-500 text-xs">
            <div className="flex items-center gap-1">
              <span>Posted on</span>
              <a
                href="https://x.com"
                target="_blank"
                className="hover:text-sky-500"
              >
                <svg
                  width="11"
                  height="10"
                  viewBox="0 0 11 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="m.027 0 4.247 5.516L0 10h.962l3.742-3.926L7.727 10H11L6.514 4.174 10.492 0H9.53L6.084 3.616 3.3 0zM1.44.688h1.504l6.64 8.624H8.082z"
                    fill="currentColor"
                  />
                </svg>
              </a>
            </div>
            <p>{card.date}</p>
          </div>
        </GlowCard>
      </motion.div>
    );
  };

  return (
    <section id="testimonials" className="relative mt-24">
      <div className="max-w-[90%] mx-auto px-4 md:px-8 ">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative z-10 "
        >
          <TitleHeader
            title="What People Say About Me?"
            sub={
              <span className="flex items-center gap-1 justify-center">
                <Image src={star} alt="" width={24} height={24} className="size-6 inline-block" />
                Customer feedback highlights
              </span>
            }
          />
        </motion.div>

        {/* First marquee row */}
        <div className="marquee-row w-full mx-auto max-w-[90%] overflow-hidden relative mt-16">
          <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none"></div>
          <div className="marquee-inner flex transform-gpu min-w-[200%] pb-5">
            {[...cardsData, ...cardsData].map((card, index) => (
              <CreateCard key={`${card.name || index}-${index}`} card={card} />
            ))}
          </div>
          <div className="absolute right-0 top-0 h-full w-20 md:w-40 z-10 pointer-events-none bg-gradient-to-l"></div>
        </div>

        {/* Second reverse marquee row */}
        <div className="marquee-row w-full mx-auto max-w-[90%] overflow-hidden relative">
          <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-r"></div>
          <div className="marquee-inner marquee-reverse flex transform-gpu min-w-[200%] pb-5">
            {[...cardsData, ...cardsData].map((card, index) => (
              <CreateCard key={`${card.name || index}-${index}`} card={card} />
            ))}
          </div>
          <div className="absolute right-0 top-0 h-full w-20 md:w-40 z-10 pointer-events-none bg-gradient-to-l"></div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
