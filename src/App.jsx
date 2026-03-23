import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar/Navbar';
import { Footer } from './sections/Footer/Footer';
import { Home } from './pages/Home/Home';
import { Terms } from './pages/Legal/Terms';
import { Privacy } from './pages/Legal/Privacy';
import { Refund } from './pages/Legal/Refund';
import { CookieBanner } from './components/CookieBanner/CookieBanner';

function App() {
  return (
    <div className="app-wrapper">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/refund" element={<Refund />} />
      </Routes>
      <Footer />
      <CookieBanner />
    </div>
  );
}

export default App;
