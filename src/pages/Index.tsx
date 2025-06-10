
import React from 'react';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import PropertiesSection from '../components/PropertiesSection';
import ServicesSection from '../components/ServicesSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-20">
        <HeroSection />
        <PropertiesSection />
        <ServicesSection />
        <ContactSection />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
