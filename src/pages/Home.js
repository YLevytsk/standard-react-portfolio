import React from 'react';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import ProjectsSection from '../components/ProjectsSection';
// import TestimonialsSection from '../components/TestimonialsSection';
import ContactBanner from '../components/ContactBanner';
import HeroSection from '../components/HeroSection';

const Home = () => (
  <div>
    <HeroSection />
    <AboutSection />
    <ServicesSection />
    <ProjectsSection />
    {/* <TestimonialsSection /> */}
    <ContactBanner />
  </div>
);

export default React.memo(Home);
