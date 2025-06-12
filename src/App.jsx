import { useState, useEffect, useRef } from "react";
import NavBar from "./Sections/NavBar";
import Home from "./Sections/Home";
import About from "./Sections/About";
import Contact from "./Sections/Contact";
import Services from "./Sections/Services";
import Experience from "./Sections/Experience";
import Works from "./Sections/Works";
import Testimonials from "./Sections/Testimonials";
import Skills from "./Sections/Skills";
import Footer from "./Sections/Footer";
import Scene3D from "./components/Scene3D";
import ParticleBackground from "./components/ParticleBackground";

function App() {
  const [showScene3D, setShowScene3D] = useState(true);
  const contactRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      if (!contactRef.current) return;

      const rect = contactRef.current.getBoundingClientRect();
      // If top of contact section is near viewport top (e.g., visible)
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        setShowScene3D(false);
      } else {
        setShowScene3D(true);
      }
    };

    window.addEventListener("scroll", onScroll);
    onScroll(); // call initially

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Conditionally render Scene3D background */}
      {showScene3D && (
        <div style={{ position: "fixed", inset: 0, zIndex: 0 }}>
          <Scene3D />
        </div>
      )}

      <div style={{ position: "relative", zIndex: 10 }}>
        <NavBar />
        <Home />
        <About />
        <Experience />
        <Skills />
        <Works />
        <Services />
        <Testimonials />

        <div ref={contactRef} className="relative min-h-screen">
          <div className="absolute inset-0 z-0">
            <ParticleBackground count={50} />
          </div>
          <div className="relative z-10">
            <Contact />
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}

export default App;
