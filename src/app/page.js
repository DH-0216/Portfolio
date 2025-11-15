import About from "@/components/sections/About";
import dynamic from "next/dynamic";
import Hero from "@/components/sections/Hero";
import Loading from "./loading";

const Experience = dynamic(() => import("@/components/sections/Experience"), {
  suspense: true,
});
const Skills = dynamic(() => import("@/components/sections/Skills"), {
  suspense: true,
});
const Works = dynamic(() => import("@/components/sections/Works"), {
  suspense: true,
});
const Services = dynamic(() => import("@/components/sections/Services"), {
  suspense: true,
});
const Testimonials = dynamic(
  () => import("@/components/sections/Testimonials"),
  { suspense: true }
);
const Contact = dynamic(() => import("@/components/sections/Contact"), {
  suspense: true,
});

import { Suspense } from "react";
import { bghero7 } from "@/assets";

export default function Home() {
  return (
    <div className="relative z-10">
      <Hero />
      <About />
      <Suspense fallback={<Loading />}>
        <Experience />
        <Skills />
        <Works />
        <Services />
        <Testimonials />
        <Contact />
      </Suspense>
    </div>
  );
}
