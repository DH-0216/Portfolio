import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Services from "./components/Services";

function App() {
  return (
    <>
      <div className="bg-hero h-screen bg-no-repeat">
        <NavBar />
        <Home />
        <About />
        <Contact />
        <Services />
      </div>
    </>
  );
}

export default App;
