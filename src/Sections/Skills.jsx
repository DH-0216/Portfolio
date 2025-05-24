import React from "react";
import TitleHeader from "../components/TitleHeader";
import { bulb } from "../assets";
import { skills } from "../utils";
import { motion } from "motion/react";
import { fadeInUp } from "../utils/motion";

const Skills = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeInUp()}
      className="mt-20 mx-10"
    >
      <TitleHeader
        title="Tools that drive my work"
        sub={
          <span className="flex items-center gap-3 justify-center">
            <img src={bulb} alt="bulb" className="size-5 inline-block" /> My
            Skills
          </span>
        }
      />
      <div className="flex flex-row flex-wrap justify-center items-center mt-16 gap-10 p-10 ">
        {skills.map((skill, idx) => (
          <motion.img
            key={skill.alt + idx}
            src={skill.src}
            alt={skill.alt}
            className={`size-18 ${skill.className || ""}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: idx * 0.1 }}
            whileHover={{ scale: 1.1 }}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;
