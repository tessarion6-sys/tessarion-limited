import React from "react";

const Dashboard = () => (
  <section className="mt-20 px-4 max-w-5xl mx-auto">
    <h2 className="text-4xl font-bold mb-4">Investor Dashboard</h2>
    <p className="text-gray-300 mb-6">Track performance, forecast trends, and manage your investments using AI intelligence.</p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="p-4 bg-gray-800 rounded-xl shadow">
        <h3 className="text-lg font-semibold">Portfolio Value</h3>
        <p className="text-2xl mt-2">$124,000</p>
      </div>
      <div className="p-4 bg-gray-800 rounded-xl shadow">
        <h3 className="text-lg font-semibold">Forecasted ROI</h3>
        <p className="text-2xl mt-2">+8.5%</p>
      </div>
    </div>
  </section>
);

export default Dashboard;
