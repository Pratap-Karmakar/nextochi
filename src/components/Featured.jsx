import { motion, useTransform } from "framer-motion";
import React from "react";

const Featured = () => {
  // const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);
  // const translateY = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);

  return (
    <motion.div
      // style={{ scale, translateY }}
      className="bg-zinc-900 w-full py-20 text-[#F9EFDB] relative"
    >
      <div className="w-full px-20 border-b-[1px] pb-20">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="xl:text-8xl md:text-7xl sm:text-4xl"
        >
          What we do.
        </motion.h1>
      </div>
      <div className="cards w-full flex flex-col md:flex-row gap-10 mt-10 px-20">
        {/* First Card */}
        <motion.div
          className="cardcontainer relative w-full md:w-1/2 h-[60vh] overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="absolute left-full -translate-x-1/2 top-1/2 -translate-y-1/2 z-50 text-6xl font-bold text-[#9DBC98]">
            Flowers
          </h1>
          <div className="w-full h-full rounded-xl overflow-hidden">
            <img
              src="https://images.pexels.com/photos/19298281/pexels-photo-19298281/free-photo-of-woman-holding-a-bunch-of-sunflowers.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              className="w-full h-full object-cover"
              alt="flowers"
            />
          </div>
        </motion.div>

        {/* Second Card */}
        <motion.div
          className="cardcontainer relative w-full md:w-1/2 h-[60vh] overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="absolute right-full translate-x-1/2 top-1/2 -translate-y-1/2 z-50 text-6xl font-bold text-[#9DBC98]">
            Nature
          </h1>
          <div className="w-full h-full rounded-xl overflow-hidden">
            <img
              src="https://images.pexels.com/photos/19298281/pexels-photo-19298281/free-photo-of-woman-holding-a-bunch-of-sunflowers.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              className="w-full h-full object-cover"
              alt="nature"
            />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Featured;
