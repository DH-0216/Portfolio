import TitleHeader from '../components/TitleHeader'
import { motion } from 'motion/react';
import { staggerContainer } from '../utils/motion';
import { services } from '../utils';
import { Service } from '../assets';

const Services = () => {
  return (
    <div className="relative py-10">
      <div className="max-w-[90%] mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative z-10"
        >
          <TitleHeader
            title="Services I Offer"
            sub={
              <span className="flex items-center gap-2 justify-center">
                <motion.img
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  src={Service}
                  alt=""
                  className="size-6 inline-block drop-shadow-[0_0_8px_rgba(56,189,248,0.5)]"
                />
                Services
              </span>
            }
          />
        </motion.div>

        <div className="relative mt-16">
          <div className="flex space-x-8 overflow-x-auto no-scrollbar py-5">
            {services.map((service, index) => (
              <motion.div
                variants={staggerContainer(0.15, 0)}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                whileHover={{ scale: 1.03, y: -5 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                key={index}
                style={{ perspective: 1000 }}
                className="relative flex-shrink-0 w-[340px] min-h-[360px] max-w-[90vw]"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-slate-900/50 to-slate-900/50 backdrop-blur-xl shadow-lg border border-sky-600/20 group-hover:border-sky-400/50 transform preserve-3d" />
                
                <div className="relative z-10 flex flex-col items-center gap-6 p-8 w-full h-full">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                    className="p-3 bg-sky-500/10 rounded-2xl shadow-inner"
                  >
                    <img
                      src={service.img}
                      alt=""
                      className="w-20 h-20 rounded-xl object-cover filter drop-shadow-[0_0_8px_rgba(56,189,248,0.3)]"
                    />
                  </motion.div>
                  
                  <div className="text-center space-y-4">
                    <h3 className="font-bold text-xl text-[#F8F8FF]">
                      {service.title}
                    </h3>
                    <p className="text-slate-300/90 text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-auto px-6 py-2 rounded-lg bg-sky-200/10 hover:bg-sky-500/20 text-[#F8F8FF] text-sm font-medium transition-colors duration-200"
                  >
                    Learn More
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services