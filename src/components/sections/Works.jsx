"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TitleHeader from "@/components/TitleHeader";
import { github, coding, Arrow, external_link } from "@/assets";
import { works } from "@/utils";
import { fadeIn, textVariant } from "@/utils/motion";
import Image from "next/image";

const WorkCard = ({
  index,
  name,
  description,
  tags,
  image,
  video,
  url,
  source_code_link,
  forceShow = false,
}) => {
  const [hovered, setHovered] = useState(false);
  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    setHovered(true);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    setHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.2, 0.75)}
      initial="hidden"
      animate={forceShow ? "show" : undefined}
      whileInView={forceShow ? undefined : "show"}
      viewport={forceShow ? undefined : { once: false, amount: 0 }}
    >
      <motion.div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        layout
        initial={{ maxHeight: 380 }}
        animate={{ maxHeight: hovered ? 1000 : 380 }}
        transition={{ type: "spring", duration: 0.1 }}
        className="bg-tertiary/80 sm:p-3 w-full max-w-[320px] sm:max-w-[360px] overflow-hidden mx-auto hover:bg-tertiary/90 hover:border-white/20 group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20"
      >
        <div className="relative w-full h-[200px]">
          <div className="w-full h-full">
            <Image
              src={image}
              alt="project_image"
              className="w-full h-full object-cover rounded-2xl"
            />
            {video && hovered && (
              <video
                ref={videoRef}
                src={video}
                className="w-full h-full object-cover rounded-2xl absolute top-0 left-0"
                poster={image || ""}
                muted
                loop
                playsInline
                preload="metadata"
                style={{ objectFit: "cover" }}
                autoPlay
              />
            )}
          </div>
          {hovered && (
            <div className="absolute inset-0 flex justify-end m-3 card-img_hover gap-5">
              {source_code_link && (
                <div
                  onClick={() => window.open(source_code_link, "_blank")}
                  className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:scale-110 transition-transform duration-200"
                >
                  <Image
                    src={github}
                    alt="source code"
                    className="w-1/2 h-1/2 object-contain"
                  />
                </div>
              )}
            </div>
          )}
        </div>

        <div className="mt-5 ">
          <h3 className="text-[#F8F8FF] font-bold text-[22px] group-hover:text-cyan-400 transition-colors">
            {name}
          </h3>
          <p className="mt-3 text-secondary text-[13px] leading-relaxed">
            {description}
          </p>
        </div>


        {hovered && (
        <div className="mt-5 flex items-center gap-2">
          <div className="max-w-3/4 flex flex-wrap gap-1">
            {tags.map((tag) => (
              <p
                key={`${name}-${tag.name}`}
                className={`text-[14px] px-2 py-1 rounded-full bg-white/5 border border-white/10 ${tag.color} hover:bg-white/10 transition-colors`}
              >
                #{tag.name}
              </p>
            ))}
          </div>

          {url && (
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-auto py-1 px-3 text-sm font-medium text-white bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-lg flex items-center gap-1 hover:from-cyan-500/30 hover:to-blue-500/30 hover:border-cyan-400/50 transition-all duration-200 hover:scale-105"
            >
              Visit
              <Image
                src={external_link}
                alt="external link"
                className="w-4 h-4"
              />
            </a>
          )}
        </div>
        )}
      </motion.div>
    </motion.div>
  );
};

const Works = () => {
  const [showAll, setShowAll] = useState(false);

  const displayedWorks = showAll ? works : works.slice(0, 3);

  return (
    <div id="work" className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-20">
        <motion.div variants={textVariant()}>
          <TitleHeader
            title="Projects & Works"
            sub={
              <span className="flex items-center gap-2 justify-center ">
                <Image
                  src={coding}
                  alt="coding"
                  className="size-6 inline-block"
                />
                My works & projects
              </span>
            }
          />
        </motion.div>

        <div className="w-full flex justify-center items-center text-center mt-10">
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-3 text-secondary text-[15px] sm:text-[17px] max-w-3xl leading-[28px] sm:leading-[30px] px-4 sm:px-0 "
          >
            Following projects showcases my skills and experience through
            real-world examples of my work. Each project is briefly described
            with links to code repositories and live demos in it. It reflects my
            ability to solve complex problems, work with different technologies,
            and manage projects effectively.
          </motion.p>
        </div>

        {/* Work Grid using WorkCard components */}
        <div className=" max-w-7xl mx-auto mt-16 sm:mt-20 grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
          <AnimatePresence>
            {displayedWorks.map((work, index) => (
              <WorkCard
                key={work.id || `work-${index}`}
                index={index}
                name={work.name}
                description={work.description}
                tags={work.tags}
                image={work.image}
                video={work.video}
                url={work.url}
                source_code_link={work.source_code_link}
              />
            ))}
          </AnimatePresence>
        </div>

        {/* Show More/Less Button */}
        {works.length > 3 && (
          <div className="w-full flex justify-center mt-6 sm:mt-8 px-4 sm:px-0">
            <button
              onClick={() => {
                setShowAll((prev) => {
                  const newValue = !prev;

                  // Scroll to bottom after showing all
                  if (!prev) {
                    setTimeout(() => {
                      window.scrollBy({
                        top: 300, // adjust as needed to bring new cards into view
                        behavior: "smooth",
                      });
                    }, 100); // slight delay to allow layout update
                  }

                  return newValue;
                });
              }}
              className="px-6 py-2 text-[#F8F8FF] rounded-full  hover:bg-primary-dark transition bg-gray-700/40   border-0 font-semibold shadow-[0_0_0_1px_theme(colors.cyan.500)] hover:shadow-[0_0_0_1px_theme(colors.cyan.600)] hover:scale-105 "
            >
              {showAll ? "See Less" : "See More"} &nbsp;
              <Image
                src={Arrow}
                alt="arrow"
                className={`w-8 h-8 inline-block transition-transform duration-300 ${
                  showAll ? "rotate-180" : ""
                }`}
              />
            </button>
          </div>
        )}
      </div>

      {/* Animated background elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-xl animate-pulse"></div>
      <div
        className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-xl animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute top-1/2 left-10 w-24 h-24 bg-gradient-to-r from-green-500/10 to-teal-500/10 rounded-full blur-xl animate-pulse"
        style={{ animationDelay: "2s" }}
      ></div>
    </div>
  );
};

export default Works;
