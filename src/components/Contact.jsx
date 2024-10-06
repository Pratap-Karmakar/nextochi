import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <div className="w-full h-screen md:h-screen bg-[#6256CA] text-[#FFF5CD] flex flex-col justify-center items-center">
      <div className="px-4 pt-14 md:px-10 lg:px-20 md:pt-20">
        {/* Text */}
        <div>
          <p className="text-5xl sm:text-6xl md:text-7xl lg:text-9xl font-bold text-center py-2 md:py-4">
            Ready
          </p>
        </div>
        <div>
          <p className="text-5xl sm:text-6xl md:text-7xl lg:text-9xl font-bold text-center py-2 md:py-4">
            To Start
          </p>
        </div>
        <div>
          <p className="text-5xl sm:text-6xl md:text-7xl lg:text-9xl font-bold text-center py-2 md:py-4">
            The <span className="uppercase font-extrabold">Project?</span>
          </p>
        </div>
      </div>
      <div className="flex py-6 md:py-12 justify-center items-center">
        <motion.div
          className="relative overflow-hidden bg-zinc-800"
          whileHover="hover"
          initial="initial"
        >
          <motion.div
            className="absolute inset-0 bg-[#FEFAE0]"
            initial={{ y: "100%" }}
            variants={{
              hover: { y: 0 },
            }}
            transition={{ duration: 0.1, ease: "easeInOut" }}
          />
          <motion.button
            className="relative z-10 text-lg sm:text-xl md:text-4xl lg:text-5xl px-6 md:px-8 lg:px-12 py-2 transition-colors duration-100"
            variants={{
              initial: { color: "#ffffff" },
              hover: { color: "#18181b" },
            }}
          >
            Say Hello!
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
