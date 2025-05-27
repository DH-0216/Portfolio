import React, { useState, useRef } from "react";
import { AnimatePresence } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import TitleHeader from "../components/TitleHeader";
import { github, coding, Arrow, external_link } from "../assets";
import SectionWrapper from "../components/SectionWrapper";
import { works } from "../utils";
import { fadeIn, textVariant } from "../utils/motion";

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
    <div id="work">
      <motion.div
        variants={fadeIn("up", "spring", index * 0.2, 0.75)}
        initial="hidden"
        animate={forceShow ? "show" : undefined}
        whileInView={forceShow ? undefined : "show"}
        viewport={forceShow ? undefined : { once: true, amount: 0 }}
      >
        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <Tilt
            options={{
              max: 45,
              scale: 1,
              speed: 450,
            }}
            className="bg-tertiary p-4 sm:p-5 rounded-2xl w-full max-w-[320px] sm:max-w-[360px] mx-auto"
          >
            <div className="relative w-full h-[230px]">
              {video ? (
                <video
                  ref={videoRef}
                  src={video}
                  className="w-full h-full object-cover rounded-2xl"
                  poster={image || ""}
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  style={{ objectFit: "cover" }}
                />
              ) : (
                <img
                  src={image}
                  alt="project_image"
                  className="w-full h-full object-cover rounded-2xl"
                />
              )}
              {hovered && (
                <div className="absolute inset-0 flex justify-end m-3 card-img_hover gap-5">
                  {source_code_link && (
                    <div
                      onClick={() => window.open(source_code_link, "_blank")}
                      className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
                    >
                      <img
                        src={github}
                        alt="source code"
                        className="w-1/2 h-1/2 object-contain"
                      />
                    </div>
                  )}
                </div>
              )}
            </div>

            <div className="mt-5">
              <h3 className="text-[#F8F8FF] font-bold text-[24px]">{name}</h3>
              <p className="mt-2 text-secondary text-[14px]">{description}</p>
            </div>

            <div className="mt-4 flex flex-wrap items-center gap-2">
              {tags.map((tag) => (
                <p
                  key={`${name}-${tag.name}`}
                  className={`text-[14px] ${tag.color}`}
                >
                  #{tag.name}
                </p>
              ))}

              {url && (
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-auto py-1 px-3 text-sm font-medium text-white bg-gray-700/80 border border-white/10 rounded-lg flex items-center gap-1 hover:bg-gray-700/90 transition"
                >
                  Visit
                  <img
                    src={external_link}
                    alt="external link"
                    className="w-4 h-4"
                  />
                </a>
              )}
            </div>
          </Tilt>
        </div>
      </motion.div>
    </div>
  );
};

const Works = () => {
  const [showAll, setShowAll] = useState(false);

  const displayedWorks = showAll ? works : works.slice(0, 3);

  return (
    <>
      <motion.div variants={textVariant()}>
        <TitleHeader
          title="Projects & Works"
          sub={
            <span className="flex items-center gap-2 justify-center">
              <img src={coding} alt="coding" className="size-6 inline-block" />
              My works & projects
            </span>
          }
        />
      </motion.div>

      <div className="w-full flex justify-center items-center text-center mt-10">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[15px] sm:text-[17px] max-w-3xl leading-[28px] sm:leading-[30px] px-4 sm:px-0"
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      <div className="mt-16 sm:mt-20 grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
        <AnimatePresence>
          {displayedWorks.map((work, index) => (
            <motion.div
              key={work.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.4 }}
              layout
            >
              <WorkCard index={index} {...work} forceShow={showAll} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

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
            className="px-6 py-2 text-[#F8F8FF] rounded-full shadow hover:bg-primary-dark transition bg-gray-700/40 border border-white/20 hover:border-white/30"
          >
            {showAll ? "See Less" : "See More"} &nbsp;
            <img
              src={Arrow}
              alt="arrow"
              className={`w-8 h-8 inline-block transition-transform duration-300 ${
                showAll ? "rotate-180" : ""
              }`}
            />
          </button>
        </div>
      )}
    </>
  );
};

export default SectionWrapper(Works, "");
