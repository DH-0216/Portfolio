"use client";

import TitleHeader from "@/components/TitleHeader";
import { motion } from "framer-motion";
import { bulb } from "@/assets";
import { enhancedSkills } from "@/utils";
import { fadeInUp } from "@/utils/motion";
import Image from "next/image";
import { useState } from "react";

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const getProficiencyColor = (level) => {
    if (level >= 90) return "from-emerald-400 to-emerald-600";
    if (level >= 80) return "from-blue-400 to-blue-600";
    if (level >= 70) return "from-yellow-400 to-yellow-600";
    return "from-gray-400 to-gray-600";
  };

  const getProficiencyText = (level) => {
    if (level >= 90) return "Expert";
    if (level >= 80) return "Advanced";
    if (level >= 70) return "Intermediate";
    return "Beginner";
  };

  return (
    <motion.div
      initial="visible"
      className="mt-32 px-10"
    >
      <TitleHeader
        title="Tools that drive my work"
        sub={
          <span className="flex items-center gap-3 justify-center">
            <Image src={bulb} alt="bulb" width={20} height={20} className="size-5 inline-block" /> My
            Skills
          </span>
        }
      />

      <div className="mt-16 space-y-12">
        {enhancedSkills.map((category, categoryIdx) => (
          <motion.div
            key={category.category}
            initial={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: categoryIdx * 0.1 }}
            className="space-y-6"
          >
            {/* Category Header */}
            <motion.h3
              className="text-2xl font-bold text-center bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              {category.category}
            </motion.h3>

            {/* Skills Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
              {category.skills.map((skill, skillIdx) => (
                <motion.div
                  key={skill.alt + skillIdx}
                  className="relative group"
                  initial={{ opacity: 0, y: 50, scale: 0.8 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{
                    duration: 0.5,
                    delay: skillIdx * 0.1,
                    ease: "easeOut"
                  }}
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.2 }
                  }}
                  onMouseEnter={() => setHoveredSkill(skill.alt)}
                  onMouseLeave={() => setHoveredSkill(null)}
                >
                  {/* Skill Card */}
                  <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-4 hover:border-blue-500/50 transition-all duration-200 group-hover:shadow-lg group-hover:shadow-blue-500/10">
                    {/* Skill Icon */}
                    <div className="flex justify-center mb-3">
                      <Image
                        src={skill.src}
                        alt={skill.alt}
                        width={64}
                        height={64}
                        className={`${skill.className || ""} transition-transform duration-300 group-hover:rotate-12 hover:rotate-12`}
                      />
                    </div>

                    {/* Skill Name */}
                    <h4 className="text-center text-sm font-semibold text-gray-200 capitalize mb-2">
                      {skill.alt}
                    </h4>

                    {/* Proficiency Bar */}
                    <div className="space-y-1">
                      <div className="flex justify-between text-xs text-gray-400">
                        <span>{getProficiencyText(skill.proficiency)}</span>
                        <span>{skill.proficiency}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <motion.div
                          className={`h-2 rounded-full bg-gradient-to-r ${getProficiencyColor(skill.proficiency)}`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.proficiency}%` }}
                          viewport={{ once: true, amount: 0.3 }}
                          transition={{
                            duration: 0.8,
                            delay: skillIdx * 0.15,
                            ease: "easeOut"
                          }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Tooltip */}
                  {hoveredSkill === skill.alt && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.9 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.9 }}
                      className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 z-50"
                    >
                      <div className="bg-gray-800 border border-gray-600 rounded-lg p-3 shadow-xl max-w-xs">
                        <p className="text-sm text-gray-200 text-center">
                          {skill.description}
                        </p>
                        <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gray-800 border-l border-t border-gray-600 rotate-45"></div>
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Legend */}
      <motion.div
        initial={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="mt-12 text-center"
      >
        <div className="inline-flex items-center gap-6 text-sm text-gray-400">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full"></div>
            <span>Expert (90%+)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full"></div>
            <span>Advanced (80-89%)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full"></div>
            <span>Intermediate (70-79%)</span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Skills;
