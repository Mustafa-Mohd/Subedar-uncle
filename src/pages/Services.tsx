import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ServicesSection from '@/components/ServicesSection';
import CtaBanner from '@/components/CtaBanner';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { ArrowRight, Layers, Sofa, Settings2, LayoutGrid, CheckCircle2 } from 'lucide-react';

const Services = () => {
  return (
    <div className="bg-ivory text-charcoal selection:bg-copper selection:text-white">
      <Navigation />
      
      <main className="pt-20">
        {/* Services Hero */}
        <section className="relative py-24 lg:py-36 overflow-hidden flex items-center justify-center text-center">
          <div className="absolute inset-0 opacity-10">
            <img 
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1800&q=80" 
              alt="Services background" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-ivory" />
          </div>
          
          <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-10">
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="w-8 h-px bg-copper" />
              <span className="section-label text-copper">Our Expertise</span>
              <span className="w-8 h-px bg-copper" />
            </div>
            
            <h1 className="font-display font-light mb-8 text-charcoal" style={{ fontSize: 'clamp(3rem, 7vw, 5.5rem)', lineHeight: 1.1 }}>
              Bespoke Solutions for <br />
              <span className="italic" style={{ color: 'hsl(var(--copper))' }}>Exceptional</span> Living
            </h1>
            
            <p className="font-body text-lg leading-relaxed max-w-2xl mx-auto mb-12 text-charcoal/60">
              From contemporary false ceiling concepts to detailed wall moulding and complete 
              interior execution. We deliver excellence tailored to your lifestyle and budget.
            </p>
            
            <div className="flex justify-center gap-6">
               <a href="#services-list" className="w-12 h-12 rounded-full border border-charcoal/10 flex items-center justify-center animate-bounce hover:border-copper transition-colors">
                  <ArrowRight className="w-5 h-5 rotate-90 text-charcoal/40" />
               </a>
            </div>
          </div>
        </section>

        {/* Detailed Services Grid */}
        <div id="services-list">
          <ServicesSection />
        </div>

        {/* Quality Standards */}
        <section className="py-24 lg:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              <div className="order-2 lg:order-1">
                <div className="flex items-center gap-3 mb-5">
                  <span className="w-6 h-px bg-copper" />
                  <span className="section-label text-copper">Quality Standards</span>
                </div>
                <h2 className="font-display font-light text-charcoal mb-8" style={{ fontSize: 'clamp(2.2rem, 4vw, 3.5rem)' }}>
                  Uncompromising <br />
                  <span className="italic" style={{ color: 'hsl(var(--copper))' }}>Craftsmanship</span>
                </h2>
                <p className="font-body text-charcoal/60 leading-relaxed mb-8">
                  At Nexlane Interiors, we believe that true luxury lies in the details. Our service standards 
                  ensure that every project, whether it's a single aluminium window or a complete villa fit-out, 
                  receives the same level of meticulous attention.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    'Premium Grade Materials',
                    'Precision Engineering',
                    'Sustainable Practices',
                    'Dedicated Project Lead',
                    'Transparent Timeline',
                    'Post-Delivery Support'
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-copper" />
                      <span className="font-body text-sm font-medium text-charcoal/80">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="order-1 lg:order-2 rounded-2xl overflow-hidden shadow-hard aspect-[4/3] bg-ivory">
                <img 
                  src="https://images.unsplash.com/photo-1556912173-3bb406ef7e8f?w=1200&q=80" 
                  alt="Craftsmanship" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <CtaBanner />
      </main>
      
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Services;