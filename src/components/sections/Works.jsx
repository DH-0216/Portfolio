"use client";

import { useState, useRef, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TitleHeader from "@/components/TitleHeader";
import { github, coding, Arrow, external_link } from "@/assets";
import { works, projectCategories, projectStatus, categoryKeywords } from "@/utils";
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
  status = "completed",
  complexity = "medium",
  developmentTime = "2-3 months",
  teamSize = "Solo",
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

  const complexityColors = {
    easy: "text-green-400",
    medium: "text-yellow-400",
    hard: "text-red-400"
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

          {/* Status Badge */}
          <div className="absolute top-3 left-3">
            <span className={`px-2 py-1 rounded-full text-xs font-medium border ${projectStatus[status]?.color || projectStatus.completed.color}`}>
              {projectStatus[status]?.label || "Completed"}
            </span>
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

        <div className="mt-5">
          <h3 className="text-[#F8F8FF] font-bold text-[22px] group-hover:text-cyan-400 transition-colors">
            {name}
          </h3>
          <p className="mt-3 text-secondary text-[13px] leading-relaxed">
            {description}
          </p>
        </div>

        {/* Project Details */}
        {hovered && (
          <div className="mt-4 space-y-3">
            {/* Project Stats */}
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="flex items-center gap-1">
                <span className="text-gray-400">Complexity:</span>
                <span className={complexityColors[complexity] || complexityColors.medium}>
                  {complexity.charAt(0).toUpperCase() + complexity.slice(1)}
                </span>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-gray-400">Team:</span>
                <span className="text-cyan-400">{teamSize}</span>
              </div>
              <div className="flex items-center gap-1 col-span-2">
                <span className="text-gray-400">Duration:</span>
                <span className="text-purple-400">{developmentTime}</span>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-1">
              {tags.map((tag) => (
                <p
                  key={`${name}-${tag.name}`}
                  className={`text-[12px] px-2 py-1 rounded-full bg-white/5 border border-white/10 ${tag.color} hover:bg-white/10 transition-colors`}
                >
                  #{tag.name}
                </p>
              ))}
            </div>

            {/* Visit Button */}
            {url && (
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2 px-3 text-sm font-medium text-white bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-lg flex items-center justify-center gap-1 hover:from-cyan-500/30 hover:to-blue-500/30 hover:border-cyan-400/50 transition-all duration-200 hover:scale-105"
              >
                Visit Project
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
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  // Filter and search works
  const filteredWorks = useMemo(() => {
    let filtered = works;

    // Filter by category
    if (selectedCategory !== "all") {
      filtered = filtered.filter(work => {
        const workTags = work.tags.map(tag => tag.name.toLowerCase());
        return categoryKeywords[selectedCategory]?.some(keyword =>
          workTags.some(tag => tag.includes(keyword))
        );
      });
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(work =>
        work.name.toLowerCase().includes(query) ||
        work.description.toLowerCase().includes(query) ||
        work.tags.some(tag => tag.name.toLowerCase().includes(query))
      );
    }

    return filtered;
  }, [selectedCategory, searchQuery]);

  const displayedWorks = showAll ? filteredWorks : filteredWorks.slice(0, 3);

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

        {/* Search and Filter Section */}
        <motion.div
          variants={fadeIn("up", "spring", 0.2, 0.75)}
          className="max-w-4xl mx-auto mt-12 space-y-6"
        >
          {/* Search Bar */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search projects by name, description, or technology..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500/50 focus:bg-white/10 transition-all duration-300"
            />
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3">
            {projectCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${selectedCategory === category.id
                  ? `bg-gradient-to-r ${category.color} text-white shadow-lg scale-105`
                  : "bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white border border-white/10"
                  }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Results Count */}
          <div className="text-center text-gray-400 text-sm">
            Showing {displayedWorks.length} of {filteredWorks.length} projects
            {searchQuery && ` for "${searchQuery}"`}
            {selectedCategory !== "all" && ` in ${projectCategories.find(c => c.id === selectedCategory)?.name}`}
          </div>
        </motion.div>

        {/* Work Grid using WorkCard components */}
        <div className="max-w-7xl mx-auto mt-16 sm:mt-20 grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
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
                status={work.status || "completed"}
                complexity={work.complexity || "medium"}
                developmentTime={work.developmentTime || "2-3 months"}
                teamSize={work.teamSize || "Solo"}
              />
            ))}
          </AnimatePresence>
        </div>

        {/* No Results Message */}
        {filteredWorks.length === 0 && (
          <motion.div
            variants={fadeIn("up", "spring", 0.3, 0.75)}
            className="text-center py-12"
          >
            <div className="text-gray-400 text-lg mb-4">No projects found</div>
            <button
              onClick={() => {
                setSelectedCategory("all");
                setSearchQuery("");
              }}
              className="px-6 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-lg text-cyan-400 hover:from-cyan-500/30 hover:to-blue-500/30 transition-all duration-200"
            >
              Clear Filters
            </button>
          </motion.div>
        )}

        {/* Show More/Less Button */}
        {filteredWorks.length > 3 && (
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
                className={`w-8 h-8 inline-block transition-transform duration-300 ${showAll ? "rotate-180" : ""
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
