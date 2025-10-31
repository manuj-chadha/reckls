import React from "react";

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-16 sm:py-24 bg-[#1E1E1E]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h3 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-50 header-font">Get Reckls. Get Connected.</h3>
        <p className="mt-4 text-lg text-gray-400">We're actively seeking new collaborations. Let's create something unforgettable together.</p>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          <div className="bg-[#2C2C2C] p-6 rounded-lg shadow-sm border border-gray-700">
            <h4 className="font-bold text-gray-50">New Artist Partnerships</h4>
            <p className="text-gray-400 mt-2">Talented artists looking for strategic management and production support.</p>
          </div>
          <div className="bg-[#2C2C2C] p-6 rounded-lg shadow-sm border border-gray-700">
            <h4 className="font-bold text-gray-50">Venue & Promoter Collaborations</h4>
            <p className="text-gray-400 mt-2">Partners interested in co-hosting high-energy live events.</p>
          </div>
          <div className="bg-[#2C2C2C] p-6 rounded-lg shadow-sm border border-gray-700">
            <h4 className="font-bold text-gray-50">Brand Sponsorship Opportunities</h4>
            <p className="text-gray-400 mt-2">Brands looking to connect with a dynamic and engaged audience.</p>
          </div>
        </div>

        <div className="mt-12 p-8 bg-teal-500/10 rounded-xl shadow-inner border border-teal-500/50">
          <h4 className="text-2xl font-bold text-gray-50 mb-4 header-font">Direct Connect</h4>
          <div className="space-y-3">
            <p className="text-lg sm:text-lg text-gray-200 font-medium">
              📞 Mobile: <a href="tel:+919352506858" className="text-teal-400 hover:text-teal-300 transition-colors">+919352506858</a>
            </p>
            <p className="text-lg sm:text-lg text-gray-200 font-medium">
              📧 Email: <a href="mailto:recklsentertainment@gmail.com" className="text-teal-400 hover:text-teal-300 transition-colors">recklsentertainment@gmail.com</a>
            </p>
            <p className="text-lg sm:text-lg text-gray-200 font-medium">
              📸 Instagram: <a href="https://www.instagram.com/reckls.entertainment/" target="_blank" rel="noreferrer" className="text-teal-400 hover:text-teal-300 transition-colors">@reckls.entertainment</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
