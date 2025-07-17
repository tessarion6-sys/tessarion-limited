import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
  <header className="fixed top-0 left-0 right-0 bg-opacity-80 backdrop-blur-md bg-black z-50 p-4 flex justify-between items-center shadow-md">
    <Link to="/" className="text-xl font-bold text-blue-400">Tessarion-X</Link>
    <nav className="space-x-4 text-sm">
      <Link to="/services">Services</Link>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/roadmap">Roadmap</Link>
      <Link to="/login" className="text-blue-300">Login</Link>
    </nav>
  </header>
);

export default Header;
