import { testimonials } from "../utils/index";
import TitleHeader from "../components/TitleHeader";
import GlowCard from "../components/GlowCard";
import { motion } from "motion/react";
import { staggerContainer, fadeInUp } from "../utils/motion";
import { star } from "../assets";

const Testimonials = () => {
  return (
    <section id="testimonials" className="relative py-15">
      <div className="max-w-7xl mx-auto px-4 md:px-8 ">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative z-10 "
        >
          <TitleHeader
            title="What People Say About Me?"
            sub={
              <span className="flex items-center gap-1 justify-center">
                <img src={star} alt="" className="size-6 inline-block" />
                Customer feedback highlights
              </span>
            }
          />
        </motion.div>

        <div className="relative mt-16">
          <div className="flex gap-6 overflow-x-auto no-scrollbar py-5 ">
            {testimonials.map((testimonial, index) => (
              <motion.div
                variants={staggerContainer(0.15, 0)}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                whileHover={{
                  scale: 1.05,
                  height: "auto",
                  transition: {
                    duration: 0.3,
                  },
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                key={index}
                style={{ perspective: 1000 }}
                className="relative flex-shrink-0 w-[300px] min-h-[240px] max-w-[90vw] overflow-hidden rounded-2xl"
              >
                <GlowCard card={testimonial} index={index}>
                  <div className="transition-all duration-300">
                    <div className="flex justify-between gap-10 h-auto">
                      <div className="flex gap-3">
                        <div>
                          <img
                            src={testimonial.imgPath}
                            alt=""
                            className="size-8"
                          />
                        </div>
                        <div className="text-[12px]">
                          <p className="font-bold">{testimonial.name}</p>
                          <p className="text-[#F8F8FF]/90">
                            {testimonial.mentions}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center mb-5">
                        {Array.from({ length: 5 }, (_, i) => (
                          <img
                            key={i}
                            src="/images/gold-star.png"
                            alt="star"
                            className="size-3"
                          />
                        ))}
                      </div>
                    </div>
                    <div className="mt-10 ">
                      <p className="text-slate-300/90 text-sm">{testimonial.review}</p>
                    </div>
                  </div>
                </GlowCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
