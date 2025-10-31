import React from "react";

const Navbar: React.FC = () => {
  return (
    <header className="py-6 px-4 sm:px-6 lg:px-8 border-b border-gray-800">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-3xl font-bold tracking-tight header-font">
          {/* <span className="logo-text">R</span>
          <span className="logo-e">E</span>
          <span className="logo-text">CKLS</span>
          <span className="text-xs tracking-widest block pt-0.5 opacity-70">ENTERTAINMENT</span> */}
          <img src="./reckls.png" alt="logo" className="h-12" />
        </div>
        <a href="#contact" className="hidden sm:inline-block bg-[#C3936E] text-white font-semibold py-2 px-4 rounded-lg shadow-xl hover:bg-teal-400 transition-colors">Connect</a>
      </div>
    </header>
  );
};

export default Navbar;
