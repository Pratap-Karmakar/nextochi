'use client'

import { useRef } from 'react'
import { useScroll } from 'framer-motion'
import dynamic from 'next/dynamic'

const Navbar = dynamic(() => import('@/components/Navbar'), { ssr: false })
const LandingPage = dynamic(() => import('@/components/LandingPage'), { ssr: false })
const Marquee = dynamic(() => import('@/components/Marquee'), { ssr: false })
const About = dynamic(() => import('@/components/About'), { ssr: false })
const WhatWeDo = dynamic(() => import('@/components/WhatWeDo'), { ssr: false })
const TeamData = dynamic(() => import('@/components/TeamData'), { ssr: false })
const Contact = dynamic(() => import('@/components/Contact'), { ssr: false })
const Footer = dynamic(() => import('@/components/Footer'), { ssr: false })

export default function Home() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  return (
    <div className="relative w-full bg-zinc-900 text-[#FAF7F0]">
      <Navbar />
      <div ref={containerRef} className="flex flex-col">
        <section className="min-h-screen sticky top-0">
          <LandingPage scrollYProgress={scrollYProgress} />
        </section>

        <section className="min-h-screen sticky top-0">
          <Marquee />
        </section>

        <section className="min-h-screen sticky top-0 md:min-h-[120vh]">
          <About />
        </section>

        <section className="min-h-screen sticky top-0 md:min-h-[120vh]">
          <WhatWeDo />
        </section>

        <section className="min-h-screen sticky top-0 md:min-h-[120vh]">
          <TeamData />
        </section>

        <section className="min-h-screen sticky top-0 md:min-h-[120vh]">
          <Contact />
        </section>

        <section className="min-h-screen sticky top-0">
          <Footer scrollYProgress={scrollYProgress} />
        </section>
      </div>
    </div>
  )
}