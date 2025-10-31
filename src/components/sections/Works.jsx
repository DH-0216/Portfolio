"use client";

import { useState, useRef, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TitleHeader from "@/components/TitleHeader";
import { coding, Arrow } from "@/assets";
import {
  works,
  projectCategories,
  projectStatus,
} from "@/utils";
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
  status = "completed",
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
      variants={fadeIn("up", "spring", index * 0.15, 0.6)}
      initial="hidden"
      animate={forceShow ? "show" : undefined}
      whileInView={forceShow ? undefined : "show"}
      viewport={forceShow ? undefined : { once: true, amount: 0.2 }}
      className="w-full max-w-[380px] mx-auto"
    >
      <motion.div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="relative group perspective-1000"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Glass Card */}
        <div
          className={`relative bg-gradient-to-br from-white/10 via-white/5 to-white/[0.02] backdrop-blur-2xl rounded-[0.5rem] overflow-hidden border border-white/20 transition-all duration-500 flex flex-col ${
            hovered
              ? "scale-105 shadow-[0_4px_12px_0_rgba(255,255,255,0.2)] z-10"
              : ""
          }`}
        >
          {/* Inner Glass Highlight */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-50 pointer-events-none" />

          {/* Image/Video */}
          <div className="relative w-full aspect-[16/10] overflow-hidden flex-shrink-0">
            <Image
              src={image}
              alt={name}
              className="w-full h-full object-cover"
            />

            {video && hovered && (
              <motion.video
                ref={videoRef}
                src={video}
                className="absolute inset-0 w-full h-full object-cover"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                muted
                loop
                playsInline
                preload="metadata"
                autoPlay
              />
            )}

            {/* Status Badge */}

            {hovered && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute top-4 left-4"
              >
                <span
                  className={`px-4 py-2 rounded-full text-xs font-bold backdrop-blur-xl bg-white/20 border border-white/40 shadow-lg ${
                    projectStatus[status]?.color ||
                    projectStatus.completed.color
                  }`}
                  style={{
                    boxShadow:
                      "0 4px 16px rgba(255, 255, 255, 0.2), inset 0 1px 2px rgba(255, 255, 255, 0.4)",
                  }}
                >
                  {projectStatus[status]?.label || "Completed"}
                </span>
              </motion.div>
            )}

            {/* Action buttons */}
            <AnimatePresence>
              {hovered && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="absolute top-4 right-4 flex gap-2"
                >
                  {source_code_link && (
                    <motion.button
                      whileHover={{ scale: 1.15, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => window.open(source_code_link, "_blank")}
                      className="w-11 h-11 rounded-full bg-white/20 backdrop-blur-xl border border-white/40 flex items-center justify-center transition-all shadow-lg"
                      style={{
                        boxShadow:
                          "0 4px 16px rgba(255, 255, 255, 0.15), inset 0 1px 2px rgba(255, 255, 255, 0.3)",
                      }}
                    >
                      <svg
                        className="w-5 h-5 text-white drop-shadow-lg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                      </svg>
                    </motion.button>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Content */}
          <div className="p-6 relative flex flex-col">
            {/* Subtle divider line */}
            <div className="absolute top-0 left-6 right-6 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent" />

            <motion.h3 className="text-lg font-bold text-white mb-2 drop-shadow-lg transition-all duration-300 line-clamp-2">
              {name}
            </motion.h3>

            <motion.p
              className={`text-white/80 text-[0.75rem] leading-relaxed mb-4 drop-shadow ${
                hovered ? "" : "line-clamp-3"
              }`}
            >
              {description}
            </motion.p>

            {/* Tags */}
            <motion.div className="flex flex-wrap gap-2 mb-4">
              {tags.slice(0, hovered ? tags.length : 3).map((tag, i) => (
                <motion.span
                  key={`${name}-${tag.name}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.05 }}
                  className={`text-xs px-3 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/30 ${tag.color} transition-colors cursor-default shadow-lg`}
                >
                  #{tag.name}
                </motion.span>
              ))}
            </motion.div>

            {/* Expanded Section */}
            <AnimatePresence>
              {hovered && url && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4 border-t border-white/20 pt-4"
                >
                  <motion.a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-3 px-4 text-sm font-bold text-white backdrop-blur-xl rounded-lg flex items-center justify-center gap-2 transition-all border border-white/30"
                   
                  >
                    View Project
                    <svg
                      className="w-4 h-4 transition-transform drop-shadow-lg"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </motion.a>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Works = () => {
  const [showAll, setShowAll] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  // Filter and search works
  // Replace your filteredWorks useMemo with this:

  const filteredWorks = useMemo(() => {
    let filtered = works;

    // Filter by category - Use the category field directly
    if (selectedCategory !== "all") {
      filtered = filtered.filter((work) => work.category === selectedCategory);
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (work) =>
          work.name.toLowerCase().includes(query) ||
          work.description.toLowerCase().includes(query) ||
          work.tags.some((tag) => tag.name.toLowerCase().includes(query))
      );
    }

    return filtered;
  }, [selectedCategory, searchQuery]);

  const displayedWorks = showAll ? filteredWorks : filteredWorks.slice(0, 3);

  return (
    <div
      id="work"
      className="relative min-h-screen overflow-hidden section-top-gradient"
    >
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
              <svg
                className="w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3">
            {projectCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category.id
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
            {selectedCategory !== "all" &&
              ` in ${
                projectCategories.find((c) => c.id === selectedCategory)?.name
              }`}
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
              className="px-6 py-2 text-[#F8F8FF] rounded-xl  hover:bg-primary-dark transition bg-gray-700/40   border-0 font-semibold shadow-[0_0_0_1px_theme(colors.cyan.500)] hover:shadow-[0_0_0_1px_theme(colors.cyan.600)] hover:scale-105 "
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
