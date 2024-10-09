import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import TeamDataSlider from './TeamDataSlider'

const TeamData = () => {
  const ref = useRef(null); // Create ref to monitor when the component is in view
  const isInView = useInView(ref, { once: false }); // Tracks visibility

  return (
    <div className='py-10 md:py-12 lg:py-12 xl:py-12 h-screen bg-[#FFF4CD]'>
      <div
        className="h-auto md:h-screen md:pt-10 md:pb-10 lg:pt-10 lg:pb-10 xl:pt-24 xl:pb-24 bg-[#FFF4CD] text-[#FFF0D1] py-16 md:py-32 flex items-center justify-center"
        ref={ref}
      >
        {/* Fullscreen container */}
        <div className="container mx-auto h-full flex flex-col justify-center xl:px-10 px-4 md:px-10 lg:px-10">
          {/* Text */}
          <motion.h2
            initial={{ x: 150, opacity: 0 }} // Animation starts with the element off-screen (to the right)
            animate={isInView ? { x: 0, opacity: 1 } : { x: 150, opacity: 0 }} // Animate to visible when in view
            transition={{ type: 'tween', duration: 2, delay: 0.2, ease: [0.4, 0, 0.2, 1] }} // Smooth transition with delay
            className="text-4xl md:text-5xl font-bold lg:text-6xl xl:text-7xl text-zinc-900 inter-var pb-6 md:pb-8"
          >
            <span>Meet our </span>

            {/* "Team" animation */}
            <motion.span
              initial={{ x: -150, opacity: 0 }} // Start with the element off-screen (to the left)
              animate={isInView ? { x: 0, opacity: 1 } : { x: -150, opacity: 0 }} // Animate to visible when in view
              transition={{ type: 'tween', duration: 2, delay: 0.3, ease: [0.4, 0, 0.2, 1] }} // Smooth transition with delay
              className="text-zinc-900"
            >
              team.
            </motion.span>
          </motion.h2>

          <div className="text-zinc-900 text-sm md:text-lg lg:text-xl xl:text-xl text-left md:text-left">
            We founded Naiyo24 with the belief that a powerful presentation can spark interest and drive business outcomes more effectively than words alone. Our mission is to help you captivate colleagues and clients by crafting presentations that make a lasting impact.
          </div>

          {/* Slider */}
          <motion.div
            initial={{ y: 150, opacity: 0 }} // Start with the element off-screen (below)
            animate={isInView ? { y: 0, opacity: 1 } : { y: 150, opacity: 0 }} // Animate to visible when in view
            transition={{ type: 'tween', duration: 2, delay: 0.4, ease: [0.4, 0, 0.2, 1] }} // Smooth transition with delay
            className="mt-10 md:mt-12 xl:mt-16"
          >
            <TeamDataSlider />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default TeamData;
