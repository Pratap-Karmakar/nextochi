"use client"

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const teamData = [
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

export default function TeamSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % teamData.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + teamData.length) % teamData.length)
  }

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide()
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  const fadeVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  }

  return (
    <div className="bg-[#FFF5CD] min-h-screen flex flex-col justify-center items-center p-4 md:p-8">
      <div className="max-w-4xl w-full text-center mb-12">
        <h2 className="text-5xl md:text-7xl font-bold text-zinc-900 mb-6">Our Team at Naiyo24</h2>
        <p className="text-lg md:text-xl text-gray-800">
          We founded Naiyo24 with the belief that a powerful presentation can spark interest and drive business outcomes more effectively than words alone. Our mission is to help you captivate colleagues and clients by crafting presentations that make a lasting impact.
        </p>
      </div>

      <div className="relative w-full max-w-4xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            variants={fadeVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{ duration: 0.5 }}
            className="bg-[#212121] backdrop-blur-md rounded-lg shadow-2xl p-8 md:p-12"
          >
            <div className="flex ml-0 md:ml-11 lg:ml-11 xl:ml-11 flex-col md:flex-row items-center justify-between">
              <div className="mb-6 md:mb-0 md:mr-8">
                <img
                  src={`https://api.dicebear.com/6.x/initials/svg?seed=${teamData[currentIndex].name}`}
                  alt={teamData[currentIndex].name}
                  className="w-32 h-32 rounded-full border-4 border-[#ffe787]"
                />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-semibold text-white mb-2">{teamData[currentIndex].name}</h3>
                <p className="text-[#ffe787] mb-4">{teamData[currentIndex].title}</p>
                <p className="text-gray-300 italic">&quot;{teamData[currentIndex].quote}&quot;</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-[#FFF5CD] hover:bg-[#fff0b5] text-zinc-900 rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-opacity-50 transition-all duration-200"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-[#FFF5CD] hover:bg-[#fff0b5]  text-zinc-900 rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-opacity-50 transition-all duration-200"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      <div className="mt-8 flex justify-center space-x-2">
        {teamData.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === currentIndex ? 'bg-[#ffe787] w-6' : 'bg-[#9f9980]'
            }`}
          />
        ))}
      </div>
    </div>
  )
}