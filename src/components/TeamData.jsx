"use client"

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const teamData = [
  {
    quote: "Ongoing Projects - Naiyo24, Luriana, Nariii",
    name: "Srijani Ghosh",
    title: "BDM SEO and Marketing",
    isFeaturted: true,
  },
  {
    quote: "Ongoing Projects - Niayo24, Nariii",
    name: "Sambik Karmakar",
    title: "IT Full Stack Graphic Designer",
    isFeaturted: true,
  },
  {
    quote: "Ongoing Projects - Nariii",
    name: "Aaryan Sinha Roy",
    title: "API, Server-side programming and App Deployment",
    isFeaturted: true,
  },
  {
    quote: "Ongoing Projects - Naiyo24, Nariii",
    name: "Rohit Ghosh",
    title: "Full Stack, Backend Professional",
    isFeaturted: true,
  },
  {
    quote: "Ongoing Projects - Luriana",
    name: "Pratap Karmakar",
    title: "Full Stack Web Developer Professional",
    isFeaturted: true,
  },
  {
    quote: "Ongoing Projects - Nariii",
    name: "Rana Kobiraj",
    title: "Backend Developer",
    isFeaturted: true,
  },
  {
    quote: "Ongoing Projects - Naiyo24, Nariii",
    name: "Subhankar Das",
    title: "Frontend Developer",
    isFeaturted: true,
  },
  {
    quote: "Ongoing Projects - Naiyo24",
    name: "Kaustubh Upadhyay",
    title: "IT Backend Developer",
    isFeaturted: true,
  },
  {
    quote: "Intern",
    name: "Samadrita Banarjee",
    title: "IT Frontend Developer",
    isFeaturted: true,
  },
  {
    quote: "Ongoing Projects - Naiyo24, Luriana, Nariii",
    name: "Tamashree Halder",
    title: "BDM, SEO And Marketing",
    isFeaturted: true,
  },
  {
    quote: "Ongoing Projects - Naiyo24",
    name: "Souvik Nandy",
    title: "Full Stack Developer",
    isFeaturted: true,
  },
]
const FloatingShape = ({ animate }) => (
  <motion.div
    className="absolute rounded-full bg-gradient-to-r from-yellow-200 to-yellow-400 opacity-20"
    style={{
      width: Math.random() * 100 + 50,
      height: Math.random() * 100 + 50,
    }}
    animate={animate}
    transition={{
      duration: Math.random() * 20 + 10,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut",
    }}
  />
)

export default function Component() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const timerRef = useRef(null)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % teamData.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + teamData.length) % teamData.length)
  }

  useEffect(() => {
    if (!isHovered) {
      timerRef.current = setInterval(() => {
        nextSlide()
      }, 5000)
    }

    return () => clearInterval(timerRef.current)
  }, [isHovered])

  const fadeVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <div className="bg-white min-h-screen flex flex-col justify-center items-center p-4 md:p-8 relative overflow-hidden">
      {[...Array(15)].map((_, index) => (
        <FloatingShape
          key={index}
          animate={{
            x: [Math.random() * window.innerWidth, Math.random() * window.innerWidth],
            y: [Math.random() * window.innerHeight, Math.random() * window.innerHeight],
            rotate: [0, 360],
          }}
        />
      ))}

      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-4xl w-full text-center mb-12 relative z-10"
      >
        <h2 className="text-5xl md:text-7xl font-bold text-zinc-900 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-yellow-600 to-yellow-800">
          Our Team at Naiyo24 pvt ltd.
        </h2>
        <p className="text-lg md:text-xl text-gray-800 bg-white bg-opacity-50 p-4 rounded-lg shadow-lg">
          We founded Naiyo24 pvt ltd. with the belief that a powerful presentation can spark interest and drive business outcomes more effectively than words alone. Our mission is to help you captivate colleagues and clients by crafting presentations that make a lasting impact.
        </p>
      </motion.div>

      <div 
        className="relative w-full max-w-4xl z-10"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            variants={fadeVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-gray-900 to-gray-800 backdrop-blur-md rounded-lg shadow-2xl p-8 md:p-12 border border-yellow-300"
          >
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-6 md:mb-0 md:mr-8">
                <motion.img
                  src={`https://api.dicebear.com/6.x/initials/svg?seed=${teamData[currentIndex].name}`}
                  alt={teamData[currentIndex].name}
                  className="md:ml-16 lg:ml-16 xl:ml-16 ml-0  w-32 h-32 rounded-full border-4 border-yellow-400 shadow-lg"
                  initial={{ scale: 0.8, rotate: -10 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.5 }}
                />
              </div>
              <div className="flex-1 text-center md:text-left">
                <motion.h3
                  className="text-2xl font-semibold text-yellow-400 mb-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  {teamData[currentIndex].name}
                </motion.h3>
                <motion.p
                  className="text-yellow-200 mb-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  {teamData[currentIndex].title}
                </motion.p>
                <motion.p
                  className="text-gray-300 italic"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  &quot;{teamData[currentIndex].quote}&quot;
                </motion.p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={prevSlide}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-yellow-400 hover:bg-yellow-500 text-gray-900 rounded-full p-3 focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:ring-opacity-50 transition-all duration-200 shadow-lg"
        >
          <ChevronLeft className="w-6 h-6" />
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={nextSlide}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-yellow-400 hover:bg-yellow-500 text-gray-900 rounded-full p-3 focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:ring-opacity-50 transition-all duration-200 shadow-lg"
        >
          <ChevronRight className="w-6 h-6" />
        </motion.button>
      </div>

      <div className="mt-8 flex justify-center space-x-2 relative z-10">
        {teamData.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === currentIndex ? 'bg-yellow-400 w-6' : 'bg-gray-400'
            }`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
          />
        ))}
      </div>
    </div>
  )
}