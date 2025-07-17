import React from "react";
import { Link } from "react-router-dom";

const Homepage = () => (
  <section className="text-center mt-20 px-4">
    <h1 className="text-4xl md:text-6xl font-bold mb-4">
      Smarter Investments. Powered by Intelligence.
    </h1>
    <p className="mb-6 text-lg text-gray-300 max-w-xl mx-auto">
      Tessarion-X combines AI forecasting, digital asset management, and risk intelligence to empower the future of investing.
    </p>
    <div className="space-x-4">
      <Link to="/register" className="px-6 py-2 bg-blue-600 rounded-xl hover:bg-blue-700">Get Started</Link>
      <Link to="/services" className="px-6 py-2 bg-gray-700 rounded-xl hover:bg-gray-800">Explore Portfolio</Link>
    </div>
    <div className="mt-12 text-left max-w-3xl mx-auto">
      <h2 className="text-2xl font-semibold mb-2">About Us</h2>
      <p className="text-gray-400">
        We democratize investment using AI, blockchain infrastructure, and secure cloud networks. Powered by advanced data analytics and clone portfolio strategies.
      </p>
    </div>
  </section>
);

export default Homepage;
