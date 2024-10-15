'use client'

import { useState, useEffect } from "react"
import { IoMenu, IoClose } from "react-icons/io5"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import logo from '../assets/images/logo.jpeg'

export default function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [prevScrollPos, setPrevScrollPos] = useState(0)
  const navLinks = ["Services", "About Us", "Contact"]

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset
      const visible = prevScrollPos > currentScrollPos || currentScrollPos < 10

      setIsVisible(visible)
      setPrevScrollPos(currentScrollPos)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [prevScrollPos])

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24,
      },
    },
  }

  const logoVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300, 
        damping: 20,
      },
    },
  }

  const renderNavLink = (item, index) => {
    const href = item === "About Us" ? "/about" : 
                 item === "Services" ? "/services" :
                 item === "Contact" ? "/contact" :
                 `#${item.toLowerCase().replace(' ', '-')}`

    return (
      <Link href={href} key={index} passHref legacyBehavior>
        <motion.a
          className="text-sm lg:text-base xl:text-lg capitalize font-light hover:text-yellow-400 transition-colors duration-300 relative group"
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {item}
          <motion.span
            className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 group-hover:w-full transition-all duration-300"
            layoutId="underline"
          />
        </motion.a>
      </Link>
    )
  }

  return (
    <motion.nav
      className="fixed top-0 left-0 w-full z-50 bg-zinc-800/90 shadow-lg backdrop-blur-sm text-white font-['Neue Montreal'] "
      initial={{ y: 0 }}
      animate={{ y: isVisible ? 0 : -100 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 md:py-6">
          {/* Logo */}
          <motion.div
            className="logo"
            variants={logoVariants}
            initial="hidden"
            animate="visible"
          >
            <Link href='/'>
              <Image src={logo} alt="Logo" width={48} height={48} className="rounded-full hover:shadow-lg transition-shadow duration-300" />
            </Link>
          </motion.div>

          {/* Menu for larger screens */}
          <motion.div
            className="hidden md:flex space-x-6 lg:space-x-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {navLinks.map((item, index) => renderNavLink(item, index))}
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            className={`md:hidden text-2xl focus:outline-none z-50 ${isMobileMenuOpen ? 'text-yellow-400' : ''}`}
            onClick={toggleMobileMenu}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={isMobileMenuOpen ? "close" : "menu"}
                initial={{ opacity: 0, rotate: isMobileMenuOpen ? -90 : 90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: isMobileMenuOpen ? 90 : -90 }}
                transition={{ duration: 0.2 }}
              >
                {isMobileMenuOpen ? <IoClose /> : <IoMenu />}
              </motion.div>
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-90 z-40 flex items-center justify-center h-screen w-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="flex flex-col items-center gap-y-10"
            >
              {navLinks.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link 
                    href={item === "About Us" ? "/about" : 
                          item === "Services" ? "/services" :
                          item === "Contact" ? "/contact" :
                          `#${item.toLowerCase().replace(' ', '-')}`} 
                    passHref
                  >
                    <motion.a
                      className="text-2xl capitalize font-light mb-6 hover:text-yellow-400 transition-colors duration-300"
                      onClick={toggleMobileMenu}
                    >
                      {item}
                    </motion.a>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}