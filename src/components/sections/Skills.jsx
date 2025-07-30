"use client";

import TitleHeader from "@/components/TitleHeader";
import { motion } from "framer-motion";
import { bulb } from "@/assets";
import { skills } from "@/utils";
import { fadeInUp } from "@/utils/motion";
import Image from "next/image";

const Skills = () => {
  const MotionImage = motion.create(Image);
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
      variants={fadeInUp()}
      className="mt-32 px-10 section-top-gradient"
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
      <div className="flex flex-row flex-wrap justify-center items-center mt-16 gap-10 p-10 ">
        {skills.map((skill, idx) => (
          <MotionImage
            key={skill.alt + idx}
            src={skill.src}
            alt={skill.alt}
            className={`size-18 ${skill.className || ""}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0 }}
            transition={{ duration: 0.3, ease: "easeOut", delay: idx * 0.1 }}
            whileHover={{ scale: 1.3, transition: { duration: 0.3 } }}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;
