import React from 'react';
import AboutSection from '../components/AboutSection';
import HeroSection from '../components/HeroSection';
import ProjectSection from '../components/ProjectSection';
import ServicesSection from '../components/ServicesSection';
import TestimonialsSection from '../components/TestimonialsSection';
import ContactBanner from '../components/ContactBanner';
import FooterSection from '../components/FooterSection';

const Home = () => (
  <div>
    <HeroSection />
    <AboutSection />
    <ServicesSection />
    <ProjectSection />
    <TestimonialsSection />
    <ContactBanner />
    <FooterSection />
  </div>
);

export default Home;
