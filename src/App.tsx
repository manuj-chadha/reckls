import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Pillars from "./components/Pillars/Pillars";
import CreativeStudio from "./components/CreativeStudio";
import Events from "./components/Events";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    // #232323
    // #C3936E
    <div className="min-h-screen bg-[#121212] text-gray-100 outfit-font">
      <Navbar />
      <main>
        <Hero />
        <Pillars />
        {/* <CreativeStudio /> */}
        <Events />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
