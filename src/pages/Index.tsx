import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import StudioSection from '@/components/StudioSection';
import ServicesSection from '@/components/ServicesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import CtaBanner from '@/components/CtaBanner';
import Footer from '@/components/Footer';
import Preloader from '@/components/Preloader';
import ScrollToTop from '@/components/ScrollToTop';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="bg-ivory text-charcoal selection:bg-copper selection:text-white">
      {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}
      
      <div className={`min-h-screen transition-opacity duration-1000 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        <Navigation />
        <main>
          <HeroSection />
          <StudioSection />
          <ServicesSection />
          <TestimonialsSection />
          <CtaBanner />
        </main>
        <Footer />
        <ScrollToTop />
        <FloatingWhatsApp />
      </div>
    </div>
  );
};

export default Index;
