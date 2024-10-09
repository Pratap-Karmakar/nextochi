"use client";

import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import LandingPage from "@/components/LandingPage";
import Marquee from "@/components/Marquee";
import Navbar from "@/components/Navbar";
import TeamData from "@/components/TeamData";
import WhatWeDo from "@/components/WhatWeDo";
import { motion, useScroll } from "framer-motion";
import { useRef } from "react";

export default function Home() {
  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <div>
      <div ref={container} className="relative w-full bg-zinc-900 text-[#FAF7F0]">
        <Navbar />

        {/* LandingPage with sticky behavior */}
        <section className="h-screen sticky top-0">
          <LandingPage scrollYProgress={scrollYProgress} />
        </section>

        {/* Marquee with no rotation */}
        <section className="h-screen sticky top-0">
          <Marquee />
        </section>

        {/* About section */}
        <section className="h-screen sticky top-0">
          <About />
        </section>

        {/* WhatWeDo section */}
        <section className="h-screen sticky top-0">
          <WhatWeDo />
        </section>

        {/* TeamData section */}
        <section className="h-screen sticky top-0">
          <TeamData />
        </section>

        {/* Contact section */}
        <section className="h-screen sticky top-0">
          <Contact />
        </section>

        {/* Footer section */}
        <section className="h-screen sticky top-0">
          <Footer scrollYProgress={scrollYProgress} />
        </section>
      </div>
    </div>
  );
}
