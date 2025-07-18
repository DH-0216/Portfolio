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
import ParticleBackground from "./components/ParticleBackground";

function App() {
  return (
    <>
      <div style={{ position: "relative" }}>
        {/* <div className="absolute inset-0 z-0" style={{ opacity: 0.5 }}>
          <ParticleBackground count={50} />
        </div> */}
        <div style={{ position: "relative", zIndex: 10 }}>
          <NavBar />
          <Home />
          <About />
          <Experience />
          <Skills />
          <Works />
          <Services />
          <Testimonials />
          <Contact />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
