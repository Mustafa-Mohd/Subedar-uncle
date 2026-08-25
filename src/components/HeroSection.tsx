import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

import { servicesData } from '@/data/services';

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % servicesData.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      
      {/* Background Carousel */}
      <AnimatePresence mode="sync">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 z-0"
        >
          <img 
            src={servicesData[currentIndex].image} 
            alt={servicesData[currentIndex].title} 
            className="w-full h-full object-cover" 
          />
        </motion.div>
      </AnimatePresence>

      {/* Overlays for better text readability */}
      <div className="absolute inset-0 z-1 bg-charcoal/60" />
      <div className="absolute inset-0 z-1 bg-gradient-to-t from-charcoal-dark via-transparent to-transparent opacity-80" />
      <div className="absolute inset-0 z-1 bg-gradient-to-r from-charcoal-dark/70 via-charcoal-dark/20 to-transparent" />
      
      {/* Noise Texture */}
      <div className="absolute inset-0 z-1 opacity-[0.03] pointer-events-none" 
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")` }} 
      />

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-10 flex flex-col justify-center min-h-screen">
        
        <div className="max-w-3xl text-center lg:text-left pt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <div className="flex items-center justify-center lg:justify-start gap-3 mb-6">
              <span className="w-10 h-px bg-copper" />
              <span className="font-grotesk text-[0.6rem] lg:text-[0.7rem] tracking-[0.4em] uppercase text-ivory/80 font-bold">
                Nexlane Interiors • Our Expertise
              </span>
            </div>

            <h1 
              className="font-display text-white leading-[1.1] mb-6 lg:mb-8 drop-shadow-lg"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}
            >
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="block"
                >
                  {servicesData[currentIndex].title}
                </motion.span>
              </AnimatePresence>
            </h1>

            <p className="font-body text-ivory/80 text-base lg:text-xl leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0">
              Crafting spaces that define your legacy with absolute precision and luxury artistry.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 lg:gap-5">
              <Link
                to="/services"
                className="w-full sm:w-auto group relative flex items-center justify-center gap-3 px-8 lg:px-10 py-4 lg:py-5 bg-copper text-white rounded-xl overflow-hidden transition-all duration-500 hover:bg-copper-dark shadow-hard shadow-copper/20"
              >
                <span className="relative z-10 font-grotesk text-[0.7rem] lg:text-[0.8rem] tracking-widest uppercase font-bold">Explore All Services</span>
                <ArrowRight className="relative z-10 w-4 h-4 transition-transform duration-500 group-hover:translate-x-1" />
              </Link>

              <Link
                to="/contact"
                className="w-full sm:w-auto group flex items-center justify-center gap-3 px-8 lg:px-10 py-4 lg:py-5 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-xl transition-all duration-500 hover:bg-white/20"
              >
                <span className="font-grotesk text-[0.7rem] lg:text-[0.8rem] tracking-widest uppercase font-bold text-white/90">Book Consultation</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Progress indicators / Pagination */}
      <div className="absolute bottom-10 left-0 right-0 z-10 flex justify-center gap-2">
        {servicesData.map((_, i) => (
          <div 
            key={i} 
            className={`h-1.5 rounded-full transition-all duration-500 ${i === currentIndex ? 'w-8 bg-copper' : 'w-2 bg-white/30'}`}
          />
        ))}
      </div>

    </section>
  );
};

export default HeroSection;