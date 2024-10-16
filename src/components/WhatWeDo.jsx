"use client"

import React, { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Link from "next/link"
import { Swiper, SwiperSlide } from "swiper/react"
import { FreeMode, Pagination } from "swiper/modules"
import { RxCrop, RxPencil2, RxDesktop, RxReader, RxRocket, RxArrowTopRight } from "react-icons/rx"

import "swiper/css"
import "swiper/css/free-mode"
import "swiper/css/pagination"

const fadeIn = (direction = "up", delay = 0.3) => {
  let x = 0,
    y = 0

  if (direction === "up") y = 30
  if (direction === "down") y = -30
  if (direction === "left") x = 30
  if (direction === "right") x = -30

  return {
    hidden: {
      opacity: 0,
      x,
      y,
    },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.7,
        delay: delay,
      },
    },
    exit: {
      opacity: 0,
      x: direction === "right" ? -30 : direction === "left" ? 30 : 0,
      y: direction === "up" ? -30 : direction === "down" ? 30 : 0,
      transition: {
        duration: 0.7,
      },
    },
  }
}

const serviceData = [
  {
    icon: <RxCrop />,
    title: "Custom Web Applications",
    description:
      "From dynamic web apps to sophisticated online platforms, we design and develop tailor-made web applications that cater to your unique business needs. Our solutions are built with the latest technologies, ensuring optimal performance, security, and scalability.",
    link: "/webapp",
  },
  {
    icon: <RxPencil2 />,
    title: "Website Design & Development",
    description:
      "Your website is the face of your business online. Our team of expert designers and developers craft stunning, user-friendly websites that not only look great but also function seamlessly across all devices. We focus on creating engaging experiences that drive user interaction and conversion.",
    link: "/webapp",
  },
  {
    icon: <RxDesktop />,
    title: "E-Commerce Solutions",
    description:
      "Elevate your online store with our comprehensive e-commerce solutions. We create robust, secure, and scalable e-commerce platforms that provide a seamless shopping experience for your customers, helping you grow your business effortlessly.",
    link: "/ecommercesollution",
  },
  {
    icon: <RxReader />,
    title: "Mobile App Development",
    description:
      "Expand your reach with our mobile app development services. Whether you need an iOS app, an Android app, or a cross-platform solution, we have the expertise to deliver high-quality mobile applications that engage and retain users.",
    link: "/mobileapp",
  },
  {
    icon: <RxRocket />,
    title: "Digital Strategy & Consulting",
    description:
      "Navigating the digital landscape can be complex. Our digital strategy and consulting services offer you the guidance and insights needed to make informed decisions, optimize your digital presence, and achieve your business goals.",
    link: "/digitalstrategy",
  },
]

export default function CenteredServices() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-zinc-900 text-[#FFF5CD] py-12 px-4 sm:px-8 md:px-16 overflow-hidden">
      {/* Blurred Top Edge */}
      <div className="absolute top-0 left-0 w-full h-60 bg-gradient-to-b from-zinc-900 to-transparent blur-3xl"></div>
      
      <div className="container mx-auto" ref={ref}>
        <div className="flex flex-col items-center justify-center gap-12">
          <motion.div
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            exit="exit"
            className="text-center max-w-3xl"
          >
            <h2 className="text-4xl md:text-5xl lg:text-7xl text-[#FFF0D1] font-bold inter-var mb-6">
              What we do.
            </h2>
            <p className="text-sm md:text-base text-[#FFF0D1] mb-8">
              NAIYO24 PRIVATE LIMITED specializes in crafting innovative web and mobile solutions
              tailored to your business. We're committed to turning your digital ideas into reality
              with cutting-edge technology and expert services.
            </p>
          </motion.div>

          <motion.div
            variants={fadeIn("up", 0.7)}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            exit="exit"
            className="w-full max-w-6xl"
          >
            <Swiper
              breakpoints={{
                340: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                700: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
              }}
              freeMode={true}
              pagination={{
                clickable: true,
              }}
              modules={[FreeMode, Pagination]}
              className="w-full h-auto"
            >
              {serviceData.map((item, index) => (
                <SwiperSlide key={index}>
                  <Link href={item.link} passHref>
                    <div className="bg-gradient-to-br from-[#2A2A2A] to-[#1A1A1A] h-[400px] text-[#FFF0D1] rounded-xl px-6 py-8 flex flex-col justify-between gap-x-6 sm:gap-x-0 group cursor-pointer hover:shadow-lg hover:shadow-[#FFF0D1]/10 transition-all duration-300">
                      <div className="flex items-center justify-between mb-4">
                        <div className="text-4xl text-[#FFF0D1] bg-[#313131] p-3 rounded-full">{item.icon}</div>
                        <div className="text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <RxArrowTopRight className="text-[#FFF0D1]" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2 text-[#FFF0D1] group-hover:text-[#FFD700] transition-colors duration-300">
                          {item.title}
                        </h3>
                        <p className="text-sm leading-relaxed text-[#B0B0B0] group-hover:text-[#FFF0D1] transition-colors duration-300">
                          {item.description}
                        </p>
                      </div>
                      <div className="h-1 w-full bg-gradient-to-r from-[#FFD700] to-[#FFA500] mt-4 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                    </div>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        </div>
      </div>
    </div>
  );
}