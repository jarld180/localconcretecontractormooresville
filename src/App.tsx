import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Driveways from './pages/services/Driveways';
import Foundations from './pages/services/Foundations';
import Patios from './pages/services/Patios';
import PoolDecks from './pages/services/PoolDecks';
import GarageFloors from './pages/services/GarageFloors';
import Sidewalks from './pages/services/Sidewalks';
import Services from './pages/Services';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import CityService from './pages/CityService';
import AOS from 'aos';
import { DesignProvider } from './context/DesignContext';
import { HelmetProvider } from 'react-helmet-async';

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();
  
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
      easing: 'ease-out-cubic'
    });
  }, [pathname]);

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    } else {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [pathname, hash]);
  
  return null;
};

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <DesignProvider>
        <Router>
          <ScrollToTop />
          <div className="flex flex-col min-h-screen font-inter text-black">
            <Navbar />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/driveways" element={<Driveways />} />
                <Route path="/foundations" element={<Foundations />} />
                <Route path="/patios" element={<Patios />} />
                <Route path="/pool-decks" element={<PoolDecks />} />
                <Route path="/garage-floors" element={<GarageFloors />} />
                <Route path="/sidewalks" element={<Sidewalks />} />
                <Route path="/services" element={<Services />} />
                <Route path="/kinston" element={<Home cityName="Kinston" />} />
                <Route path="/wilson" element={<Home cityName="Wilson" />} />
                <Route path="/mount-olive" element={<Home cityName="Mount Olive" />} />
                <Route path="/fremont" element={<Home cityName="Fremont" />} />
                <Route path="/la-grange" element={<Home cityName="La Grange" />} />
                <Route path="/dudley" element={<Home cityName="Dudley" />} />
                <Route path="/:city/:service" element={<CityService />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/terms-of-service" element={<TermsOfService />} />
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </DesignProvider>
    </HelmetProvider>
  );
};

export default App;

