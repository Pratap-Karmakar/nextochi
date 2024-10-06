import { useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";
import { motion } from "framer-motion";
import logo from '../assets/images/logo.jpeg'
import Image from "next/image";

export default function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navLinks = ["Services", "Our Work", "About Us", "Insights", "Contact"];

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

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
  };

  return (
    <nav className="w-full fixed z-50 px-6 md:px-20 py-4 md:py-8 bg-zinc-900 text-white font-['Neue Montreal'] flex justify-between items-center">
      {/* Logo */}
      <div className="logo">
        <Image src={logo} alt="Logo" className="w-10 md:w-12 h-auto rounded-full" />
      </div>

      {/* Menu for larger screens */}
      <motion.div
        className="hidden md:flex links gap-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {navLinks.map((item, index) => (
          <motion.a
            href={`#${item.toLowerCase().replace(' ', '-')}`}
            className={`text-lg capitalize font-light ${index === 4 && "ml-16 lg:ml-32"}`}
            key={index}
            variants={itemVariants}
          >
            {item}
          </motion.a>
        ))}
      </motion.div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-3xl focus:outline-none"
        onClick={toggleMobileMenu}
      >
        {isMobileMenuOpen ? <IoClose /> : <IoMenu />}
      </button>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          className="absolute top-0 left-0 w-full h-screen bg-zinc-900 flex flex-col justify-center items-center"
          initial={{ opacity: 0, y: "-100%" }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: "-100%" }}
          transition={{ duration: 0.3 }}
        >
          {/* Close button inside the mobile menu */}
          <button
            className="absolute top-5 right-5 text-4xl text-white focus:outline-none"
            onClick={toggleMobileMenu}
          >
            <IoClose />
          </button>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {navLinks.map((item, index) => (
              <motion.a
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className="text-2xl capitalize font-light mb-8 block"
                key={index}
                onClick={toggleMobileMenu}
                variants={itemVariants}
              >
                {item}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      )}
    </nav>
  );
}