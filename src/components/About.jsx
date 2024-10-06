import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Fade-in animation helper
const fadeIn = ({ direction = "up", delay = 0 },) => ({
  hidden: {
    opacity: 0,
    x: direction === "left" ? -50 : direction === "right" ? 50 : 0,
    y: direction === "up" ? 50 : direction === "down" ? -50 : 0,
  },
  show: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      delay: delay,
      duration: 0.6,
      ease: "easeInOut",
    },
  },
});

// Line animation for purple line
const lineVariants = {
  hidden: { width: "0%" },
  visible: { width: "100%" },
};

const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.3, // Trigger when 30% of the element is in view
  });

  return (
    <div className="relative bg-[#FFF5CD] min-h-[100vh] sm:min-h-full text-zinc-900 w-full py-10 md:py-16 lg:py-20">
      {/* Sticky scroll trigger section */}
      <div className="absolute top-0 w-full h-[200vh] bg-transparent" />

      <div
        ref={ref}
        className="flex flex-col md:flex-row justify-center items-center w-full min-h-[80vh] px-4 sm:px-6 md:px-12 lg:px-20"
      >
        {/* First Block: Text coming from the top */}
        <motion.div
          initial="hidden"
          animate={inView ? "show" : "hidden"} // animation based on visibility
          variants={fadeIn({ direction: "up" })} // fade in from 'up' direction
          className="w-full md:w-1/2 flex flex-col items-start text-left py-4 px-4 sm:px-6 md:px-8"
        >
          <h2 className="bg-clip-text text-zinc-900 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-sans py-4 relative z-20 font-bold tracking-tight uppercase">
            Welcome to <br />
            <span className="text-[#FF8343]">NAIYO24 PRIVATE LIMITED</span>
          </h2>
        </motion.div>

        {/* Second Block: Text coming from the left */}
        <div className="w-full md:w-1/2 flex flex-col items-start text-left py-4 px-4 sm:px-6 md:px-8">
          <motion.div
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            variants={fadeIn({ direction: "left", delay: 0.2 })} // fade in from 'left' with delay
          >
            <h2 className="text-[#664343] bg-clip-text text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-sans py-4 relative z-20 font-bold tracking-tight">
              Innovating Your Digital Presence
            </h2>

            {/* Animated Purple Line */}
            <motion.div
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={lineVariants}
              transition={{ duration: 0.6, ease: "easeInOut" }} // smooth transition for line animation
              className="h-1 bg-[#664343] mt-2"
            />
          </motion.div>

          {/* Paragraph text coming from the right */}
          <motion.p
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            variants={fadeIn({ direction: "right", delay: 0.4 })} // fade in from 'right' with delay
            className="w-full text-sm sm:text-base md:text-lg lg:text-xl text-zinc-500 mt-4"
          >
            At NAIYO24 PRIVATE LIMITED, we&apos;re committed to transforming your
            digital dreams into reality. As a leading provider of online
            application and website development services, our mission is to
            deliver cutting-edge solutions that propel your business forward in
            the digital world.
          </motion.p>
        </div>
      </div>

      {/* Line under all content */}
      <div className='bg-zinc-900 w-full h-[1px] mt-4 sm:mt-6 md:mt-8 lg:mt-9'/>
    </div>
  );
};

export default About;
