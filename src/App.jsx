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
import Home3D from "./components/Home3D";

function App() {
  const [showScene3D, setShowScene3D] = useState(true);
  const [showHome3D, setShowHome3D] = useState(false);
  const [showParticles, setShowParticles] = useState(false);

  const homeRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      const homeInView = isInViewport(homeRef);
      const contactInView = isInViewport(contactRef);

      setShowHome3D(homeInView);
      setShowParticles(contactInView);
      setShowScene3D(!homeInView && !contactInView);
    };

    const isInViewport = (ref) => {
      if (!ref.current) return false;
      const rect = ref.current.getBoundingClientRect();
      return rect.top < window.innerHeight && rect.bottom > 0;
    };

    window.addEventListener("scroll", onScroll);
    onScroll(); // trigger on load

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Global 3D Background */}
      {showScene3D && (
        <div style={{ position: "fixed", inset: 0, zIndex: 0 }}>
          <Scene3D />
        </div>
      )}

      {/* Home-specific 3D Background */}
      {showHome3D && (
        <div style={{ position: "fixed", inset: 0, zIndex: 0 }}>
          <Home3D />
        </div>
      )}

      <div style={{ position: "relative", zIndex: 10 }}>
        <NavBar />

        <div ref={homeRef}>
          <Home />
        </div>

        <About />
        <Experience />
        <Skills />
        <Works />
        <Services />
        <Testimonials />

        <div ref={contactRef} className="relative min-h-screen">
          {/* Contact-specific Particle Background */}
          {showParticles && (
            <div className="absolute inset-0 z-0">
              <ParticleBackground count={50} />
            </div>
          )}

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
