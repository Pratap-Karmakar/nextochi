"use client"

import React, { useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'

export default function Component() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1])
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  }

  return (
    <motion.div 
      ref={ref}
      className="w-full min-h-screen bg-gradient-to-b from-gray-900 via-purple-900 to-gray-900 text-gray-100 flex flex-col justify-center items-center overflow-hidden relative"
      // initial="hidden"
      // animate={isInView ? "visible" : "hidden"}
      // variants={containerVariants}
      // style={{ opacity, scale }}
    >
      {/* Enhanced space-like background effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="stars"></div>
        <div className="stars2"></div>
        <div className="stars3"></div>
        <div className="twinkling"></div>
      </div>

      <div className="px-4 pt-14 md:px-10 lg:px-20 md:pt-20 relative z-10">
        <motion.div variants={itemVariants}>
          <motion.p 
            className="text-5xl sm:text-6xl md:text-7xl lg:text-9xl font-bold text-center py-2 md:py-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Ready
          </motion.p>
        </motion.div>
        <motion.div variants={itemVariants}>
          <motion.p 
            className="text-5xl sm:text-6xl md:text-7xl lg:text-9xl font-bold text-center py-2 md:py-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            To Start
          </motion.p>
        </motion.div>
        <motion.div variants={itemVariants}>
          <motion.p 
            className="text-5xl sm:text-6xl md:text-7xl lg:text-9xl font-bold text-center py-2 md:py-4"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            The <span className="uppercase font-extrabold relative text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-blue-300">
              PROJECT?
              <motion.span
                className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300"
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
              />
            </span>
          </motion.p>
        </motion.div>
      </div>
      <motion.div 
        className="flex py-6 md:py-12 justify-center items-center"
        variants={itemVariants}
      >
        <motion.div
          className="relative overflow-hidden rounded-full"
          whileHover="hover"
          initial="initial"
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
            initial={{ y: "100%" }}
            variants={{
              hover: { y: 0 },
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          />
          <motion.button
            className="relative z-10 text-lg sm:text-xl md:text-4xl lg:text-5xl px-8 md:px-12 lg:px-16 py-3 md:py-4 transition-colors duration-300 bg-transparent border-2 border-gray-100 rounded-full"
            variants={{
              initial: { color: "#f3f4f6" },
              hover: { color: "#ffffff" },
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Say Hello!
          </motion.button>
        </motion.div>
      </motion.div>
      
      {/* Additional space objects */}
      {[...Array(20)].map((_, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full bg-white"
          style={{
            width: Math.random() * 3 + 1,
            height: Math.random() * 3 + 1,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            boxShadow: "0 0 10px 2px rgba(255, 255, 255, 0.4)",
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.7, 1, 0.7],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      ))}
    </motion.div>
  )
}