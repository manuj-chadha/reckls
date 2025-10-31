import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Pillars from "./components/Pillars/Pillars";
import Events from "./components/Events";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#121212] text-gray-100 outfit-font">
      <Navbar />
      <main>
        <Hero />
        <Pillars />
        <Events />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
