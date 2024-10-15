'use client'

import { useState, useEffect } from "react"
import { motion, useAnimation } from "framer-motion"

const Bubble = ({ size, position, delay }) => {
  const controls = useAnimation()

  useEffect(() => {
    controls.start({
      y: [0, -window.innerHeight],
      x: [position.x, position.x + Math.sin(position.y) * 50],
      transition: {
        duration: 10 + Math.random() * 20,
        delay: delay,
        repeat: Infinity,
        ease: "linear"
      }
    })
  }, [controls, position, delay])

  return (
    <motion.div
      className="absolute rounded-full bg-yellow-200 opacity-20"
      style={{
        width: size,
        height: size,
        bottom: -size,
        left: position.x,
      }}
      animate={controls}
    />
  )
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [bubbles, setBubbles] = useState([])

  useEffect(() => {
    const newBubbles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      size: Math.random() * 60 + 20,
      position: {
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
      },
      delay: Math.random() * 5,
    }))
    setBubbles(newBubbles)
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here, you would typically send the form data to a backend or email service
    console.log(formData)
    alert("Message sent!")
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <div className="relative px-4 md:px-0 lg:px-0 xl:px-0 min-h-screen flex items-center justify-center overflow-hidden">
      <motion.div
        className="absolute inset-0 z-0"
        animate={{
          background: [
            "linear-gradient(to right, #4a5568, #1a202c)",
            "linear-gradient(to right, #1a202c, #2d3748)",
            "linear-gradient(to right, #2d3748, #4a5568)",
          ],
        }}
        transition={{
          duration: 10,
          ease: "linear",
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      {bubbles.map((bubble) => (
        <Bubble key={bubble.id} size={bubble.size} position={bubble.position} delay={bubble.delay} />
      ))}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
        className="relative z-10 w-full max-w-md bg-zinc-800/80 p-8 rounded-lg shadow-lg backdrop-blur-sm"
      >
        <h2 className="text-3xl font-semibold text-yellow-400 text-center mb-8">
          Contact Us
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <label htmlFor="name" className="block text-yellow-400 text-sm font-bold mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg bg-yellow-50 text-zinc-800 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <label htmlFor="email" className="block text-yellow-400 text-sm font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg bg-yellow-50 text-zinc-800 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <label htmlFor="message" className="block text-yellow-400 text-sm font-bold mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full p-3 rounded-lg bg-yellow-50 text-zinc-800 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            ></textarea>
          </motion.div>

          <motion.button
            type="submit"
            className="w-full bg-yellow-400 text-zinc-900 font-semibold py-3 rounded-lg shadow-lg hover:bg-yellow-300 transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Message
          </motion.button>
        </form>
      </motion.div>
    </div>
  )
}