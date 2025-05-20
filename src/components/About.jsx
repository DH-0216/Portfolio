import React from "react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const About = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
      className="relative overflow-hidden flex flex-col items-center justify-center py-20 px-6 md:px-20  rounded-2xl shadow-2xl bg-black/70"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 flex justify-center items-center -z-10">
        <div className="w-96 h-96 bg-[#888888] opacity-20 blur-[120px] rounded-full animate-pulse" />
      </div>

      {/* Text Content */}
      <motion.p
        variants={fadeInUp}
        className="text-[#888888] text-sm uppercase tracking-widest mb-2"
      >
        About Me
      </motion.p>

      <motion.h2
        variants={fadeInUp}
        className="text-white font-extrabold text-center text-3xl md:text-5xl leading-tight"
      >
        Transforming Ideas Into Scalable Solutions
      </motion.h2>

      <motion.div
        variants={fadeInUp}
        className="w-16 h-1 bg-[#888888] my-4 rounded-full"
      />

      <motion.p
        variants={fadeInUp}
        className="mt-6 text-white text-[17px] max-w-3xl leading-[30px] text-center"
      >
        I'm a skilled software developer with experience in TypeScript and
        JavaScript, and expertise in frameworks like React, Node.js, and
        Three.js. I'm a quick learner and collaborate closely with clients to
        create efficient, scalable, and user-friendly solutions that solve
        real-world problems. Let's work together to bring your ideas to life!
      </motion.p>
    </motion.div>
  );
};

export default About;
