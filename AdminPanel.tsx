import React from "react";

const AdminPanel = () => (
  <section className="mt-20 px-4 max-w-4xl mx-auto">
    <h2 className="text-4xl font-bold mb-4">Admin Control Panel</h2>
    <p className="text-gray-300 mb-6">Manage investors, oversee analytics, and configure platform controls.</p>
    <ul className="space-y-4">
      <li className="bg-gray-800 p-4 rounded">🔒 View Registered Users</li>
      <li className="bg-gray-800 p-4 rounded">📈 Adjust Risk Models</li>
      <li className="bg-gray-800 p-4 rounded">🧠 Update Forecast API</li>
    </ul>
  </section>
);

export default AdminPanel;
