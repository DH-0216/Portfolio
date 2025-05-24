import React from "react";
import TitleHeader from "../components/TitleHeader";
import { bulb } from "../assets";
import { skills } from "../utils";

const Skills = () => {
  return (
    <div className="mt-20 mx-10">
      <TitleHeader
        title="Tools that drive my work"
        sub={
          <span className="flex items-center gap-2 justify-center">
            <img src={bulb} alt="bulb" className="size-5 inline-block" /> My Skills
          </span>
        }
      />
      <div className="flex flex-row flex-wrap justify-center items-center my-10 gap-5 p-5">
        {skills.map((skill, idx) => (
          <img
            key={skill.alt + idx}
            src={skill.src}
            alt={skill.alt}
            className={`size-12 ${skill.className || ""}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Skills;
