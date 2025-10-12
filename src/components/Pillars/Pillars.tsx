import React, { useState } from "react";

type PillarKey = "management" | "production" | "promotion";

const pillarData: Record<PillarKey, { title: string; text: string; short: string }> = {
  management: {
    title: "Talent Development",
    text: "We provide comprehensive career planning, branding, and strategic positioning to ensure our musical artists not only grow their talent but also build a sustainable and impactful career in the competitive music industry.",
    short: "Talent Development & Strategic Growth"
  },
  production: {
    title: "Content Creation",
    text: "Our services cover the entire production lifecycle: from initial concept and beat-making to professional mixing, mastering, and ensuring polished tracks are ready for digital distribution across all major platforms.",
    short: "Content Creation & Digital Distribution"
  },
  promotion: {
    title: "Experiential Marketing",
    text: "We specialize in the planning, ticketing, and flawless execution of large-scale, high-profile events and parties. Our goal is to create memorable experiences that connect artists with their audiences.",
    short: "Experiential Marketing & Execution"
  }
};

const Pillars: React.FC = () => {
  const [active, setActive] = useState<PillarKey>("management");

  return (
    <section id="pillars" className="py-16 sm:py-24 bg-[#1E1E1E] shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h3 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-50 header-font">Our Pillars of Business</h3>
          <p className="mt-4 text-lg text-gray-400">We handle the complexity so our artists and clients can focus on creativity and experience. Explore our core services.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <div className="flex flex-col space-y-6">
            <div
              id="pillar-management"
              onClick={() => setActive("management")}
              className={`pillar-card cursor-pointer p-6 bg-[#2C2C2C] rounded-xl border-2 ${active === "management" ? "active" : "border-transparent"}`}
            >
              <h4 className="text-xl font-bold text-gray-50">Artist Management</h4>
              <p className="mt-2 text-gray-400">{pillarData.management.short}</p>
            </div>

            <div
              id="pillar-production"
              onClick={() => setActive("production")}
              className={`pillar-card cursor-pointer p-6 bg-[#2C2C2C] rounded-xl border-2 ${active === "production" ? "active" : "border-transparent"}`}
            >
              <h4 className="text-xl font-bold text-gray-50">Music Production</h4>
              <p className="mt-2 text-gray-400">{pillarData.production.short}</p>
            </div>

            <div
              id="pillar-promotion"
              onClick={() => setActive("promotion")}
              className={`pillar-card cursor-pointer p-6 bg-[#2C2C2C] rounded-xl border-2 ${active === "promotion" ? "active" : "border-transparent"}`}
            >
              <h4 className="text-xl font-bold text-gray-50">Live Event Promotion</h4>
              <p className="mt-2 text-gray-400">{pillarData.promotion.short}</p>
            </div>
          </div>

          <div className="lg:col-span-2 p-8 bg-teal-500/20 rounded-2xl min-h-[250px] lg:min-h-[350px] flex items-center border border-teal-500/50">
            <div id="pillar-display">
              <h4 id="pillar-title" className="text-2xl font-bold text-teal-300">{pillarData[active].title}</h4>
              <p id="pillar-text" className="mt-4 text-lg text-teal-100">{pillarData[active].text}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pillars;
