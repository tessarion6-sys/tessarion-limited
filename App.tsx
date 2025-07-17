import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Services from "./pages/Services";
import Dashboard from "./pages/Dashboard";
import AdminPanel from "./pages/AdminPanel";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Testimonials from "./pages/Testimonials";
import Support from "./pages/Support";
import Roadmap from "./pages/Roadmap";

function App() {
  return (
    <Router>
      <Header />
      <main className="min-h-screen bg-black text-white pt-20 px-4">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/adminpanel" element={<AdminPanel />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/support" element={<Support />} />
          <Route path="/roadmap" element={<Roadmap />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
