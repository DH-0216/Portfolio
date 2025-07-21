import { motion } from "framer-motion";
import { staggerContainer, fadeInUp } from "../utils/motion";
import TitleHeader from "../components/TitleHeader";
import {WaveHello} from "../assets"; // Adjust the path as necessary

const About = () => {
  return (
    <section id="about">
      <motion.div
        variants={staggerContainer(0.15, 0)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        className="relative overflow-hidden flex flex-col items-center justify-center pt-20 px-6 md:px-20  rounded-2xl shadow-2xl bg-black/70"
      >
        {/* Background Glow */}
        <div className="absolute inset-0 flex justify-center items-center -z-10">
          <div className="w-96 h-96 bg-[#888888] opacity-20 blur-[120px] rounded-full animate-pulse" />
        </div>

        {/* Text Content */}
        <motion.div
          variants={fadeInUp()}
          className="text-[#F8F8FF] text-sm tracking-widest mb-2"
        >
          <TitleHeader
            title="Transforming Ideas Into Scalable Solutions"
            sub={
              <span className="flex items-center gap-1 justify-center">
                <img
                  src={WaveHello}
                  alt="wave hello"
                  className="size-6 inline-block"
                />
                About Me
              </span>
            }
          />
        </motion.div>

        <motion.div
          variants={fadeInUp()}
          className="w-16 h-1 bg-[#888888] my-4 rounded-full"
        />

        <motion.h2
          variants={fadeInUp()}
          className="text-2xl font-bold text-[#F8F8FF] mt-16"
        >
          Hi, I'm Dulaj{" "}
          <span className="text-[#888888]">| Software Developer</span>
        </motion.h2>

        <motion.p
          variants={fadeInUp()}
          className="mt-10 text-[#F8F8FF] text-[17px] max-w-3xl leading-[30px] text-center"
        >
          I'm a skilled software developer with experience in TypeScript and
          JavaScript, and expertise in frameworks like React, Node.js, and
          Three.js. I'm a quick learner and collaborate closely with clients to
          create efficient, scalable, and user-friendly solutions that solve
          real-world problems. Let's work together to bring your ideas to life!
        </motion.p>
        <div className="rainbow relative z-0 bg-white/15 overflow-hidden p-0.5 flex items-center justify-center rounded-full hover:scale-105 transition duration-300 active:scale-100 mt-10">
          <button className="px-8 text-sm py-3 text-white rounded-full font-medium bg-gray-900/80 backdrop-blur">
            <a href="#contact">Let's Connect</a>
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
