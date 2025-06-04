import { Routes, Route } from "react-router-dom";
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

function App() {
  return (
    <>
      {/* 3D canvas fixed behind everything */}
      <div style={{ position: "fixed", inset: 0, zIndex: 0 }}>
        <Scene3D />
      </div>

      {/* Your UI content with higher z-index */}
      <div style={{ position: "relative", zIndex: 10 }}>
        <div className="">
          <NavBar />
          <Home />
        </div>
        <About />
        <Experience />
        <Skills />
        <Works />
        <Services />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
