// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './component/Navbar';
import Footer from './component/Footer';

import Home from './pages/Home';
import Activities from './pages/Activities';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';

const App = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-white text-gray-800">
      {/* Navigation Bar */}
      <Navbar />

      {/* Page Content */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
