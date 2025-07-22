import About from "@/components/sections/About";
import dynamic from "next/dynamic";
import Hero from "@/components/sections/Hero";
import Navbar from "@/components/sections/NavBar";

const Experience = dynamic(() => import("@/components/sections/Experience"), { suspense: true });
const Skills = dynamic(() => import("@/components/sections/Skills"), { suspense: true });
const Works = dynamic(() => import("@/components/sections/Works"), { suspense: true });
const Services = dynamic(() => import("@/components/sections/Services"), { suspense: true });
const Testimonials = dynamic(() => import("@/components/sections/Testimonials"), { suspense: true });
const Contact = dynamic(() => import("@/components/sections/Contact"), { suspense: true });
const Footer = dynamic(() => import("@/components/sections/Footer"), { suspense: true });

import { Suspense } from "react";

export default function Home() {
  return (
    <div className="relative z-10">
      <Navbar />
      <Hero />
      <About />
      <Suspense fallback={<div className="text-center py-10 text-gray-400">Loading...</div>}>
        <Experience />
        <Skills />
        <Works />
        <Services />
        <Testimonials />
        <Contact />
        <Footer />
      </Suspense>
    </div>
  );
}
