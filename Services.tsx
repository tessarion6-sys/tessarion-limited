import React from "react";

const Services = () => (
  <section className="mt-20 max-w-5xl mx-auto px-4">
    <h2 className="text-3xl font-bold mb-6">Our Services</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-gray-800 p-6 rounded-xl">
        <h3 className="text-xl font-semibold mb-2">AI Clone Asset Recovery</h3>
        <p className="text-gray-400">Track, sync, and restore fragmented investment portfolios using intelligent blockchain scanning.</p>
      </div>
      <div className="bg-gray-800 p-6 rounded-xl">
        <h3 className="text-xl font-semibold mb-2">Capsule Moveable House</h3>
        <p className="text-gray-400">Investment-backed modular living built for a sustainable future. Powered by Tessarion grant tokens.</p>
      </div>
    </div>
  </section>
);

export default Services;
