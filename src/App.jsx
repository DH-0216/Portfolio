import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Services from "./components/Services";
import Experience from "./components/Experience";
import Works from "./components/Works";
import Skills from "./components/Skills";

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
    </>
  );
}

export default App;
