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
  return (
    <>
      {/* Global 3D background */}
      <div style={{ position: "fixed", inset: 0, zIndex: 0 }}>
        <Scene3D />
      </div>

      {/* All app content on top of 3D */}
      <div style={{ position: "relative", zIndex: 10 }}>
        <div>
          <NavBar />
          <Home />
        </div>

        <About />
        <Experience />
        <Skills />
        <Works />
        <Services />
        <Testimonials />

        {/* Contact section with ParticleBackground */}
        <div className="relative min-h-screen">
          {/* Particles behind contact */}
          <div className="absolute inset-0 z-0">
            <ParticleBackground count={50} />
          </div>

          {/* Contact section content */}
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
