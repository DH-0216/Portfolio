import { Routes, Route } from "react-router-dom";
import NavBar from "./Sections/NavBar";
import Home from "./Sections/Home";
import About from "./Sections/About";
import Contact from "./Sections/Contact";
import Services from "./Sections/Services";
import Experience from "./Sections/Experience";
import Works from "./Sections/Works";
import Skills from "./Sections/Skills";
import Footer from "./Sections/Footer";

function App() {
  return (
    <>
      <div className="bg-hero h-screen bg-no-repeat">
        <NavBar />
        <Home />
      </div>
      <About />
      <Experience />
      <Skills />
      <Works />
      <Services />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
