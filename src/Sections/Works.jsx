import React, { useState, useRef } from "react";
import { AnimatePresence } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import TitleHeader from "../components/TitleHeader";
import { github } from "../assets";
import SectionWrapper from "../components/SectionWrapper";
import { works } from "../utils";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  video,
  source_code_link,
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
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <Tilt
            options={{
              max: 45,
              scale: 1,
              speed: 450,
            }}
            className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
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
                <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
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
              <h3 className="text-white font-bold text-[24px]">{name}</h3>
              <p className="mt-2 text-secondary text-[14px]">{description}</p>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <p
                  key={`${name}-${tag.name}`}
                  className={`text-[14px] ${tag.color}`}
                >
                  #{tag.name}
                </p>
              ))}
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
        <TitleHeader title="Projects & Works" sub="💼 My works & projects" />
      </motion.div>

      <div className="w-full flex justify-center items-center text-center mt-10">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
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
              <ProjectCard index={index} {...work} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {works.length > 3 && (
        <div className="w-full flex justify-center mt-8">
          <button
            onClick={() => setShowAll((prev) => !prev)}
            className="px-6 py-2 text-white rounded-full shadow hover:bg-primary-dark transition bg-gray-700/40 border border-white/20 hover:border-white/30"
          >
            {showAll ? "See Less" : "See More"}
          </button>
        </div>
      )}
    </>
  );
};

export default SectionWrapper(Works, "");
