'use client'

import { useRef } from 'react'
import { useScroll } from 'framer-motion'

import About from '@/components/About'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import LandingPage from '@/components/LandingPage'
import Marquee from '@/components/Marquee'
import Navbar from '@/components/Navbar'
import TeamData from '@/components/TeamData'
import WhatWeDo from '@/components/WhatWeDo'

export default function Home() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  return (
    <div className="relative w-full bg-zinc-900 text-[#FAF7F0]">
      <Navbar />
      <div ref={containerRef}>
        <section className="h-screen sticky top-0">
          <LandingPage scrollYProgress={scrollYProgress} />
        </section>

        <section className="h-screen sticky top-0">
          <Marquee />
        </section>

        <section className="h-screen sticky top-0">
          <About />
        </section>

        <section className="h-screen sticky top-0">
          <WhatWeDo />
        </section>

        <section className="h-screen sticky top-0">
          <TeamData />
        </section>

        <section className="h-screen sticky top-0">
          <Contact />
        </section>

        <section className="h-screen sticky top-0">
          <Footer scrollYProgress={scrollYProgress} />
        </section>
      </div>
    </div>
  )
}