import React from "react";

const Login = () => (
  <section className="max-w-md mx-auto mt-20 px-4">
    <h2 className="text-3xl font-bold mb-6">Login to Your Dashboard</h2>
    <form className="space-y-4">
      <input type="email" placeholder="Email" className="w-full p-2 rounded bg-gray-800" />
      <input type="password" placeholder="Password" className="w-full p-2 rounded bg-gray-800" />
      <button className="bg-blue-500 px-6 py-2 rounded">Login</button>
    </form>
  </section>
);

export default Login;
