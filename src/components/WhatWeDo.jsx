import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import WorkSlider from "./WhatWeDoSlider";

// Fade-in function to create animations
const fadeIn = (direction = "up", delay = 0.3) => {
  let x = 0, y = 0;

  if (direction === "up") y = 30;
  if (direction === "down") y = -30;
  if (direction === "left") x = 30;
  if (direction === "right") x = -30;

  return {
    hidden: {
      opacity: 0,
      x,
      y,
    },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.7,
        delay: delay,
      },
    },
    exit: {
      opacity: 0,
      x: direction === "right" ? -30 : direction === "left" ? 30 : 0,
      y: direction === "up" ? -30 : direction === "down" ? 30 : 0,
      transition: {
        duration: 0.7,
      },
    },
  };
};

const WhatWeDo = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <div
      className="h-full  bg-zinc-900 text-[#FFF5CD] py-12 md:py-16 lg:py-36 flex items-center px-4 sm:px-8 md:px-16"
      ref={ref}
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-8 items-center">
          <motion.div
            variants={fadeIn("up", 0.7)}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            exit="exit"
            className="w-full xl:max-w-[65%] md:mt-12 lg:mt-16"
          >
            <WorkSlider />
          </motion.div>

          <div className="flex flex-col text-center xl:w-[30vw] lg:text-left mb-12 md:mb-16">
            <motion.h2
              variants={fadeIn("right", 0.3)}
              initial="hidden"
              animate={isInView ? "show" : "hidden"}
              exit="exit"
              className="text-2xl md:text-4xl lg:text-7xl text-[#FFF0D1] font-bold inter-var text-center"
            >
              What we do.
            </motion.h2>

            <motion.p
              variants={fadeIn("down", 0.5)}
              initial="hidden"
              animate={isInView ? "show" : "hidden"}
              exit="exit"
              className="text-sm text-[#FFF0D1] md:text-base mb-4 max-w-[400px] mx-auto mt-6 lg:mt-10 lg:mx-0"
            >
              NAIYO24 PRIVATE LIMITED specializes in crafting innovative web and
              mobile solutions tailored to your business. We're committed to
              turning your digital ideas into reality with cutting-edge
              technology and expert services.
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
