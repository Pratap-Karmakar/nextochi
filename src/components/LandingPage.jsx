'use client'

import React from "react"
import { motion } from "framer-motion"
import { IoArrowForwardCircleOutline } from "react-icons/io5"

export default function LandingPage() {
  return (
    <div className="relative flex flex-col justify-between min-h-screen overflow-hidden bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 text-white">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-purple-500/20 to-transparent rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-yellow-500/20 to-transparent rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [360, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      <main className="relative flex-grow flex items-center px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="w-full max-w-6xl mx-auto">
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold uppercase text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.span
              className="block text-[#FFF0D1] mb-2"
              initial={{ x: -1000 }}
              animate={{ x: 0 }}
              transition={{ type: "spring", damping: 12, stiffness: 100, delay: 0.4 }}
            >
              Transforming Concepts
            </motion.span>
            <motion.span
              className="block font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-2"
              initial={{ x: 1000 }}
              animate={{ x: 0 }}
              transition={{ type: "spring", damping: 12, stiffness: 100, delay: 0.6 }}
            >
              into seamless
            </motion.span>
            <motion.span
              className="block text-[#FFEB55] text-5xl sm:text-6xl md:text-7xl lg:text-8xl mt-4"
              initial={{ y: 1000 }}
              animate={{ y: 0 }}
              transition={{ type: "spring", damping: 12, stiffness: 100, delay: 0.8 }}
            >
              user experiences
            </motion.span>
          </motion.h1>
        </div>
      </main>

      <footer className="relative mt-auto border-t border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-4">
            <motion.p
              className="text-sm text-gray-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              Naiyo24, Innovating Tomorrow, <span className="text-purple-400">Today.</span>
            </motion.p>
            <motion.p
              className="text-sm text-gray-300 text-center md:text-left"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4 }}
            >
              Building the Future, One Line of Code at a Time.
            </motion.p>
            <motion.button
              className="group py-3 px-8 bg-gradient-to-r from-purple-500 to-yellow-500 rounded-full cursor-pointer flex items-center gap-2 transition-all duration-300 hover:from-purple-600 hover:to-yellow-600 hover:scale-105 shadow-lg hover:shadow-xl"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="font-semibold">Start the Project</span>
              <IoArrowForwardCircleOutline className="text-2xl transition-all duration-300 group-hover:translate-x-1 group-hover:scale-110" />
            </motion.button>
          </div>
        </div>
      </footer>
    </div>
  )
}