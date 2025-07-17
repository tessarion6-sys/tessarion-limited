import React, { useState } from "react";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    country: "",
    risk: 5,
    referral: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="max-w-xl mx-auto mt-20 px-4">
      <h2 className="text-3xl mb-4 font-bold">Create Your Tessarion-X Account</h2>
      <form className="space-y-4">
        <input name="name" type="text" placeholder="Full Name" onChange={handleChange} className="w-full p-2 rounded bg-gray-800" />
        <input name="email" type="email" placeholder="Email" onChange={handleChange} className="w-full p-2 rounded bg-gray-800" />
        <input name="country" type="text" placeholder="Country" onChange={handleChange} className="w-full p-2 rounded bg-gray-800" />
        <label className="block text-sm">Risk Level: {formData.risk}</label>
        <input name="risk" type="range" min="0" max="10" value={formData.risk} onChange={handleChange} className="w-full" />
        <input name="referral" type="text" placeholder="Referral Code (Optional)" onChange={handleChange} className="w-full p-2 rounded bg-gray-800" />
        <button type="submit" className="bg-blue-600 px-6 py-2 rounded">Register</button>
      </form>
    </section>
  );
};

export default Register;
