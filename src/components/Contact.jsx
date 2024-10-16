"use client"

import React, { useRef, useEffect } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'
import { useRouter } from 'next/navigation'

export default function Contact() {
  const router = useRouter()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

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

  const handleExplore = () => {
    router.push('/services')
  }

  return (
    <motion.div 
      ref={ref}
      className="w-full min-h-screen bg-black text-white flex flex-col justify-center items-center overflow-hidden relative"
      initial="hidden"
      animate={controls}
      variants={containerVariants}
    >
      {/* Stars background */}
      {[...Array(100)].map((_, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full bg-white"
          style={{
            width: Math.random() * 2 + 1,
            height: Math.random() * 2 + 1,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.7, 1, 0.7],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      ))}

      {/* Animated planet */}
      <motion.div
        className="absolute w-64 h-64 rounded-full bg-gradient-to-br from-blue-500 to-purple-500"
        style={{
          top: '10%',
          right: '10%',
        }}
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 200,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {/* Planet rings */}
        <motion.div
          className="absolute top-1/2 left-1/2 w-80 h-16 border-t-4 border-opacity-50 border-gray-300 rounded-full"
          style={{
            transform: 'translate(-50%, -50%) rotateX(75deg)',
          }}
        />
      </motion.div>

      {/* Animated spaceship */}
      <motion.div
        className="absolute w-16 h-24"
        style={{
          left: '-10%',
          top: '50%',
        }}
        animate={{
          x: ['0%', '120%'],
          y: [0, -50, 50, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
        }}
      >
        <div className="w-full h-full bg-gray-300 clip-path-spaceship" />
        <motion.div
          className="absolute bottom-0 left-1/2 w-4 h-8 bg-orange-500 rounded-full"
          animate={{
            scaleY: [1, 1.5, 1],
          }}
          transition={{
            duration: 0.5,
            repeat: Infinity,
          }}
        />
      </motion.div>

      <div className="px-4 pt-14 md:px-10 lg:px-20 md:pt-20 relative z-10">
        <motion.div variants={itemVariants}>
          <motion.p 
            className="text-5xl sm:text-6xl md:text-7xl lg:text-9xl font-bold text-center py-2 md:py-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Explore
          </motion.p>
        </motion.div>
        <motion.div variants={itemVariants}>
          <motion.p 
            className="text-5xl sm:text-6xl md:text-7xl lg:text-9xl font-bold text-center py-2 md:py-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            The Cosmos
          </motion.p>
        </motion.div>
        <motion.div variants={itemVariants}>
          <motion.p 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center py-2 md:py-4"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Your <span className="uppercase font-extrabold relative text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500">
              Adventure
              <motion.span
                className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-pink-500 to-blue-500"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
              />
            </span> Awaits
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
            className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600"
            initial={{ y: "100%" }}
            variants={{
              hover: { y: 0 },
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          />
          <motion.button
            className="relative z-10 text-lg sm:text-xl md:text-4xl lg:text-5xl px-8 md:px-12 lg:px-16 py-3 md:py-4 transition-colors duration-300 bg-transparent border-2 border-white rounded-full"
            variants={{
              initial: { color: "#ffffff" },
              hover: { color: "#ffffff" },
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleExplore}
          >
            Launch Mission
          </motion.button>
        </motion.div>
      </motion.div>
      
      {/* Floating asteroids */}
      {[...Array(10)].map((_, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full bg-gray-600"
          style={{
            width: Math.random() * 10 + 5,
            height: Math.random() * 10 + 5,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            x: [0, Math.random() * 100 - 50],
            y: [0, Math.random() * 100 - 50],
            rotate: 360,
          }}
          transition={{
            duration: Math.random() * 20 + 10,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      ))}
    </motion.div>
  )
}