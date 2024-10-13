"use client"

import React, { useState, useEffect } from "react"
import { motion, useAnimation } from "framer-motion"

const Footer = () => {
  const controls = useAnimation()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    controls.start("visible")
  }, [controls])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  }

  return (
    <motion.footer
      className="relative text-white pt-44 w-full min-h-screen bg-zinc-900 py-28 px-4 sm:px-6 lg:px-8 flex flex-col overflow-hidden"
      initial="hidden"
      animate={controls}
      variants={containerVariants}
    >
      <ParticleBackground />
      <div className="max-w-7xl mx-auto flex-grow flex flex-col lg:flex-row gap-12 lg:gap-20 relative z-10">
        <motion.div className="lg:w-1/2 flex flex-col justify-between" variants={itemVariants}>
          <div className="space-y-6">
            <motion.h2
              className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
              variants={itemVariants}
            >
              About.
            </motion.h2>
            <motion.p className="max-w-md text-lg text-gray-300" variants={itemVariants}>
              NAIYO24 PRIVATE LIMITED specializes in crafting innovative web and
              mobile solutions tailored to your business. We're committed to
              turning your digital ideas into reality with cutting-edge
              technology and expert services.
            </motion.p>
          </div>
          <motion.div className="mt-16 lg:mt-0 font-semibold text-2xl text-gray-300" variants={itemVariants}>
            Naiyo24.
          </motion.div>
        </motion.div>
        <motion.div className="lg:w-1/2 space-y-12" variants={itemVariants}>
          <motion.h3 className="text-4xl sm:text-5xl font-semibold text-gray-100" variants={itemVariants}>
            Quick Links.
          </motion.h3>
          <motion.div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8" variants={containerVariants}>
            <LinkSection title="Social" links={["Facebook", "LinkedIn", "Twitter"]} variants={itemVariants} />
            <LinkSection title="Company" links={["About Us", "Careers", "Contact"]} variants={itemVariants} />
            <LinkSection title="Resources" links={["Blog", "Documentation", "Support"]} variants={itemVariants} />
          </motion.div>
          {/* <motion.div className="mt-12" variants={itemVariants}>
            <h4 className="text-2xl font-semibold mb-4 text-gray-100">Subscribe to our newsletter</h4>
            <form className="flex space-x-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow px-4 py-2 rounded-md bg-zinc-800 border border-zinc-700 text-zinc-100 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-purple-500 text-white rounded-md hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-zinc-800"
              >
                Subscribe
              </button>
            </form>
          </motion.div> */}
        </motion.div>
      </div>
      <motion.div
        className="mt-16 pt-8 border-t border-zinc-800 text-center text-sm text-gray-400"
        variants={itemVariants}
      >
        © {new Date().getFullYear()} NAIYO24 PRIVATE LIMITED. All Rights Reserved.
      </motion.div>
    </motion.footer>
  )
}

const LinkSection = ({ title, links, variants }) => (
  <motion.div className="space-y-4" variants={variants}>
    <h4 className="text-2xl font-semibold text-gray-200">{title}.</h4>
    <ul className="space-y-2">
      {links.map((link, index) => (
        <motion.li key={index} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <a href="#" className="text-gray-300 hover:text-purple-400 transition-colors">
            {link}
          </a>
        </motion.li>
      ))}
    </ul>
  </motion.div>
)

const ParticleBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(50)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white rounded-full"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            opacity: Math.random(),
          }}
          animate={{
            y: [null, Math.random() * window.innerHeight],
            opacity: [null, Math.random(), 0],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  )
}

export default Footer