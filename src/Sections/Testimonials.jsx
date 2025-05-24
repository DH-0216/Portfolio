import { testimonials } from "../utils/index";
import TitleHeader from "../components/TitleHeader";
import GlowCard from "../components/GlowCard";
import { motion } from "motion/react";
import { staggerContainer, fadeInUp } from "../utils/motion";

const Testimonials = () => {
  return (
    <section id="testimonials" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="What People Say About Me?"
          sub="⭐️ Customer feedback highlights"
        />

        <div className="flex gap-6 mt-16 pb-4 no-scrollbar overflow-x-auto overflow-visible">
          {testimonials.map((testimonial, index) => (
            <motion.div
              variants={staggerContainer(0.15, 0)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              key={index}
              className="flex-shrink-0 w-[300px] h-[320px] max-w-[90vw] flex hover:h-full"
            >
              <GlowCard card={testimonial} index={index}>
                <div className="">
                  <div className="flex justify-between gap-10">
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
                        <p className="text-white-50">{testimonial.mentions}</p>
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
                    <p>{testimonial.review}</p>
                  </div>
                </div>
              </GlowCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
