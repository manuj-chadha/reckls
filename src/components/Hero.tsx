import React, { useEffect, useState } from "react";
import Typewriter from "typewriter-effect";

const Hero: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 640);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const text = isMobile
    ? "Stage-Forger<br/>Artist Builder<br/>Culture Starter"
    : "Stage-Forger | Artist Builder | Culture Starter";

  return (
    <section id="hero" className="py-20 sm:py-32">
      <div className="flex justify-center px-4 sm:px-6 lg:px-8">
        {/* Fixed width & fixed height for mobile to prevent layout shift */}
        <div
          className={`w-full max-w-[700px] text-center ${
            isMobile ? "min-h-[9rem]" : ""
          }`}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tighter text-gray-50 leading-tight header-font">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString(text)
                  .pauseFor(2000)
                  .deleteAll()
                  .start();
              }}
              options={{
                delay: 100,
                deleteSpeed: 50,
                loop: true,
                html: true,
                cursor: "|",
              }}
            />
          </h2>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-6">
        <p className="text-xl font-bold text-teal-500 max-w-2xl mx-auto">
          That's RECKLS.
        </p>

        <p className="mt-6 text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto">
          We are the architects of impact, dedicated to forging careers, mastering live experiences,
          and propelling new talent into the global spotlight.
        </p>
      </div>
    </section>
  );
};

export default Hero;
