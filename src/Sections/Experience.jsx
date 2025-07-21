import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import { medal } from "../assets"; 
import "react-vertical-timeline-component/style.min.css";
import { experiences } from "../utils/index";
import TitleHeader from "../components/TitleHeader";
import GlowCard from "../components/GlowCard"; // <-- Add this import

const ExperienceCard = ({ experience, index }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "transparent", // Changed from "#1d1836"
        color: "#fff",
        boxShadow: "none",
        padding: 0,
      }}
      contentArrowStyle={{ borderRight: "7px solid #ffffff1f" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      <GlowCard card={experience} index={index}>
        <div>
          <h3 className="text-white text-[24px] font-bold">
            {experience.title}
          </h3>
          <p
            className="text-secondary text-[16px] font-semibold"
            style={{ margin: 0 }}
          >
            {experience.company_name}
          </p>
        </div>

        <ul className="mt-5 list-disc ml-5 space-y-2">
          {experience.points.map((point, idx) => (
            <li
              key={`experience-point-${idx}`}
              className="text-white-100 text-[14px] pl-1 tracking-wider"
            >
              {point}
            </li>
          ))}
        </ul>
      </GlowCard>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="relative mt-32">
      <TitleHeader
        title="What I have done so far"
        sub={
          <span className="flex items-center gap-1 justify-center">
            <motion.img
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
              src={medal}
              alt=""
              className="size-6 inline-block drop-shadow-[0_0_8px_rgba(56,189,248,0.5)]"
            />
            My Career Overview
          </span>
        }
      />

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
              index={index}
            />
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default Experience;
