"use client";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import { medal } from "@/assets";
import { experiences } from "@/utils/index";
import TitleHeader from "@/components/TitleHeader";
import GlowCard from "@/components/GlowCard";
import { staggerContainer } from "@/utils/motion";
import "react-vertical-timeline-component/style.min.css";
import Image from "next/image";

const MotionImage = motion(Image);

const ExperienceCard = ({ experience, index }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "transparent",
        color: "#fff",
        boxShadow: "none",
        padding: 0,
      }}
      contentArrowStyle={{ borderRight: "7px solid #374151" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <Image
            src={experience.icon}
            alt={experience.company_name}
            width={40}
            height={40}
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
    <motion.section
      id="experience"
      className="relative mt-32  pt-10"
      variants={staggerContainer(0.15, 0.5)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
    >
      <div
        className="absolute inset-0 bg-fixed bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url(/images/bg2.jpg)",
          filter: "grayscale(90%) brightness(0.3)",
        }}
      ></div>
      <div className="relative z-10">
        <TitleHeader
          title="What I have done so far"
          sub={
            <span className="flex items-center gap-1 justify-center">
              <MotionImage
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                src={medal}
                alt=""
                width={24}
                height={24}
                unoptimized
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
      </div>
    </motion.section>
  );
};

export default Experience;
