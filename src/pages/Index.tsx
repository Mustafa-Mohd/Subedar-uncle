import React from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import StudioSection from '@/components/StudioSection';
import ServicesSection from '@/components/ServicesSection';
import WhyChooseUs from '@/components/WhyChooseUs';
import TestimonialsSection from '@/components/TestimonialsSection';
import Footer from '@/components/Footer';

import ScrollToTop from '@/components/ScrollToTop';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

const Index = () => {
  return (
    <div className="bg-ivory dark:bg-charcoal text-charcoal dark:text-white selection:bg-copper selection:text-white transition-colors duration-500">
      <div className="min-h-screen transition-opacity duration-1000 opacity-100">
        <Navigation />
        <main>
          <HeroSection />
          <StudioSection />
          <ServicesSection />
          <WhyChooseUs />
          <TestimonialsSection />
        </main>
        <Footer />
        <ScrollToTop />
        <FloatingWhatsApp />
      </div>
    </div>
  );
};

export default Index;
