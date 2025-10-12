import React from "react";

const Events: React.FC = () => {
  return (
    <section id="events" className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h3 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-50 header-font">From Vision to Venue</h3>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-400">We connect event holders—from private parties to major festivals—with all necessary entertainment resources.</p>
        </div>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-[#1E1E1E] p-6 rounded-xl text-center shadow-md hover:shadow-teal-500/30 transition-shadow border border-gray-700">
            <span className="text-4xl">🎤</span>
            <h4 className="mt-4 text-lg font-semibold text-gray-50">Talent Booking</h4>
            <p className="mt-1 text-gray-400">Connecting you with the perfect artists for your event.</p>
          </div>
          <div className="bg-[#1E1E1E] p-6 rounded-xl text-center shadow-md hover:shadow-teal-500/30 transition-shadow border border-gray-700">
            <span className="text-4xl">🚚</span>
            <h4 className="mt-4 text-lg font-semibold text-gray-50">Venue & Logistics</h4>
            <p className="mt-1 text-gray-400">Seamless coordination for a flawless experience.</p>
          </div>
          <div className="bg-[#1E1E1E] p-6 rounded-xl text-center shadow-md hover:shadow-teal-500/30 transition-shadow border border-gray-700">
            <span className="text-4xl">🎟️</span>
            <h4 className="mt-4 text-lg font-semibold text-gray-50">Ticket Sales & Promo</h4>
            <p className="mt-1 text-gray-400">Maximizing reach and ensuring a sold-out crowd.</p>
          </div>
          <div className="bg-[#1E1E1E] p-6 rounded-xl text-center shadow-md hover:shadow-teal-500/30 transition-shadow border border-gray-700">
            <span className="text-4xl">🎉</span>
            <h4 className="mt-4 text-lg font-semibold text-gray-50">Tailored Packages</h4>
            <p className="mt-1 text-gray-400">Custom solutions for corporate and private clients.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
