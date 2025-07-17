import React from "react";

const Support = () => (
  <section className="mt-20 max-w-4xl mx-auto px-4">
    <h2 className="text-3xl font-bold mb-4">Support & Help Center</h2>
    <p className="text-gray-300 mb-6">Need help? Our support team is available 24/7. Submit your query below.</p>
    <form className="space-y-4">
      <input
        type="email"
        placeholder="Your Email"
        className="w-full p-2 rounded bg-gray-800 text-white"
      />
      <textarea
        placeholder="Your Message"
        className="w-full p-2 rounded bg-gray-800 text-white"
        rows={5}
      />
      <button type="submit" className="bg-blue-600 px-6 py-2 rounded hover:bg-blue-700">Submit</button>
    </form>
  </section>
);

export default Support;
