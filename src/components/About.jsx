'use client'

import React from "react"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useRouter } from 'next/navigation'

const fadeIn = ({ direction = "up", delay = 0 }) => ({
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

export default function EnhancedAbout() {
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
    <div className="relative bg-white min-h-screen w-full py-16 md:py-24 lg:py-32 overflow-hidden">
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
        className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row justify-between items-center space-y-12 lg:space-y-0 lg:space-x-12 relative z-10"
      >
        <motion.div
          initial="hidden"
          animate={controls}
          variants={fadeIn({ direction: "up" })}
          className="w-full lg:w-1/2 space-y-6"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-zinc-900 leading-tight">
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
            className="h-1 bg-gradient-to-r from-[#FF8343] to-[#664343] w-24"
          />
        </motion.div>

        <motion.div
          initial="hidden"
          animate={controls}
          variants={fadeIn({ direction: "left", delay: 0.2 })}
          className="w-full lg:w-1/2 space-y-8"
        >
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#664343]">
            Innovating Your Digital Presence
          </h3>
          <motion.div
            initial="hidden"
            animate={controls}
            variants={lineVariants}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="h-1 bg-gradient-to-r from-[#664343] to-[#FF8343] w-24"
          />
          <motion.p
            variants={fadeIn({ direction: "right", delay: 0.4 })}
            className="text-lg sm:text-xl text-zinc-700 leading-relaxed"
          >
            At NAIYO24 PRIVATE LIMITED, we're committed to transforming your digital dreams into reality. As a leading
            provider of online application and website development services, our mission is to deliver cutting-edge
            solutions that propel your business forward in the digital world.
          </motion.p>
          <motion.button
            variants={fadeIn({ direction: "up", delay: 0.6 })}
            whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-[#FF8343] to-[#664343] text-white px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300 hover:from-[#E66A2C] hover:to-[#553232] transform hover:-translate-y-1"
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