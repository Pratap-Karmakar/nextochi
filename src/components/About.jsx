"use client"

import React from "react"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useRouter } from 'next/navigation'

const fadeIn = ({ direction = "up", delay = 0 }) => ({
  hidden: {
    opacity: 0,
    y: direction === "up" ? 50 : direction === "down" ? -50 : 0,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 15,
      stiffness: 100,
      delay,
      duration: 0.8,
    },
  },
})

const lineVariants = {
  hidden: { width: "0%" },
  visible: { width: "100%" },
}

const FloatingShape = ({ animate }) => (
  <motion.div
    className="absolute rounded-full bg-gradient-to-r from-[#FF8343] to-[#664343] opacity-10"
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
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  })

  const controls = useAnimation()
  const router = useRouter()

  React.useEffect(() => {
    if (inView) {
      controls.start("show")
    }
  }, [controls, inView])

  const handleLearnMore = () => {
    router.push('/about')
  }

  return (
    <div className="relative bg-white w-full min-h-screen overflow-hidden flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=600&width=800')] opacity-5 bg-repeat" />

      {/* Animated Background */}
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

      <div
        ref={ref}
        className="container mx-auto flex flex-col items-center justify-center space-y-8 sm:space-y-12 relative z-10 text-center"
      >
        <motion.div
          initial="hidden"
          animate={controls}
          variants={fadeIn({ direction: "up" })}
          className="space-y-4 sm:space-y-6"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-zinc-900 leading-tight">
            Welcome to{" "}
            <span className="text-[#FF8343] block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-[#FF8343] to-[#664343]">
              NAIYO24 PRIVATE LIMITED
            </span>
          </h2>
          <motion.div
            initial="hidden"
            animate={controls}
            variants={lineVariants}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="h-1 bg-gradient-to-r from-[#FF8343] to-[#664343] w-24 mx-auto"
          />
        </motion.div>

        <motion.div
          initial="hidden"
          animate={controls}
          variants={fadeIn({ direction: "up", delay: 0.2 })}
          className="space-y-6 sm:space-y-8 max-w-2xl"
        >
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#664343]">
            Innovating Your Digital Presence
          </h3>
          <motion.div
            initial="hidden"
            animate={controls}
            variants={lineVariants}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="h-1 bg-gradient-to-r from-[#664343] to-[#FF8343] w-24 mx-auto"
          />
          <motion.p
            variants={fadeIn({ direction: "up", delay: 0.4 })}
            className="text-base sm:text-lg md:text-xl text-zinc-700 leading-relaxed px-4 sm:px-0"
          >
            At NAIYO24 PRIVATE LIMITED, we're committed to transforming your digital dreams into reality. As a leading
            provider of online application and website development services, our mission is to deliver cutting-edge
            solutions that propel your business forward in the digital world.
          </motion.p>
          <motion.button
            variants={fadeIn({ direction: "up", delay: 0.6 })}
            whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-[#FF8343] to-[#664343] text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full font-semibold text-base sm:text-lg transition-all duration-300 hover:from-[#E66A2C] hover:to-[#553232] transform hover:-translate-y-1"
            onClick={handleLearnMore}
          >
            Learn More
          </motion.button>
        </motion.div>
      </div>

      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={inView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-[#664343] via-[#FF8343] to-[#664343]"
      />
    </div>
  )
}
