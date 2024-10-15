'use client'

import React from 'react'
import { motion } from 'framer-motion'

const MarqueeItem = ({ children }, { children: React,ReactNode }) => (
  <motion.div
    initial={{ x: '0%' }}
    animate={{ x: '-100%' }}
    transition={{
      repeat: Infinity,
      repeatType: 'loop',
      duration: 20,
      ease: 'linear',
    }}
    className="flex-shrink-0 flex items-center justify-center"
  >
    {children}
  </motion.div>
)

export default function Marquee() {
  return (
    <div className="relative w-full py-6 sm:py-10 md:py-16 lg:py-20 bg-gradient-to-r from-[#664343] to-[#8B5E5E] overflow-hidden">
      <div className="border-t-2 border-b-2 border-[#F9EFDB]/20 flex whitespace-nowrap">
        <div className="flex animate-marquee">
          {[...Array(2)].map((_, index) => (
            <MarqueeItem key={index}>
              <motion.span
                className="text-4xl sm:text-6xl md:text-7xl lg:text-[10vw] xl:text-[12vw] leading-none font-extrabold uppercase py-4 md:py-6 lg:py-8 px-4 text-transparent bg-clip-text bg-gradient-to-r from-[#F9EFDB] to-[#E6D0B1]"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                We are Naiyo24 pvt ltd.
              </motion.span>
            </MarqueeItem>
          ))}
        </div>
        <div className="flex animate-marquee2" aria-hidden="true">
          {[...Array(2)].map((_, index) => (
            <MarqueeItem key={index}>
              <motion.span
                className="text-4xl sm:text-6xl md:text-7xl lg:text-[10vw] xl:text-[12vw] leading-none font-extrabold uppercase py-4 md:py-6 lg:py-8 px-4 text-transparent bg-clip-text bg-gradient-to-r from-[#F9EFDB] to-[#E6D0B1]"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 + 0.4 }}
              >
                We are Naiyo24 pvt ltd.
              </motion.span>
            </MarqueeItem>
          ))}
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-[#664343] via-transparent to-[#664343] pointer-events-none" />
    </div>
  )
}