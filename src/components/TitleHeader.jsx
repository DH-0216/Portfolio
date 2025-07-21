import { motion, useAnimation } from "motion/react";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { containerVariants, titleVariants, subVariants } from "../utils/motion";

const TitleHeader = ({ title, sub }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [inView, controls]);

  return (
    <motion.div
      ref={ref}
      className="flex flex-col items-center gap-4 relative z-[1]"
      variants={containerVariants}
      initial="hidden"
      animate={controls}
    >
      <motion.div className="hero-badge" variants={subVariants}>
        <p className="text-[#EEF7FF]">{sub}</p>
      </motion.div>

      <motion.div variants={titleVariants}>
        <h1 className="font-semibold mt-3 md:text-5xl text-3xl text-center bg-gradient-to-r from-[#888888] via-[#aaaaaa] to-[#cccccc] bg-clip-text text-transparent">
          {title.split("").map((char, idx) => (
            <motion.span
              key={idx}
              initial="hidden"
              animate={controls}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    delay: 0.5 + idx * 0.04,
                    duration: 0.4,
                    ease: "easeOut",
                  },
                },
              }}
              style={{ display: "inline-block" }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </h1>
      </motion.div>
    </motion.div>
  );
};

export default TitleHeader;
