import React, { useEffect, useRef } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ArrowLeft, MessageCircle } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { servicesData } from '@/data/services';

const ServiceDetail = () => {
  const { id } = useParams<{ id: string }>();
  const service = servicesData.find(s => s.id === id);
  
  const headerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!service) return;
    
    // Scroll to top when page loads
    window.scrollTo(0, 0);

    const ctx = gsap.context(() => {
      // Animate Hero text
      gsap.fromTo(
        headerRef.current?.children ?? [],
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.15, ease: 'power3.out', delay: 0.2 }
      );

      // Animate content blocks
      gsap.fromTo(
        contentRef.current?.children ?? [],
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.1, ease: 'power3.out', delay: 0.6 }
      );
    });

    return () => ctx.revert();
  }, [service]);

  if (!service) {
    return <Navigate to="/not-found" replace />;
  }

  const handleWhatsApp = () => {
    const text = `Hello Ansar Ahmed, I am interested in your ${service.title} service and would like to know more.`;
    window.open(`https://wa.me/919059252564?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="bg-ivory dark:bg-charcoal text-charcoal dark:text-white min-h-screen transition-colors duration-500">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={service.image} 
            alt={service.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-charcoal/80 dark:bg-black/80 backdrop-blur-sm" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-10 text-center" ref={headerRef}>
          <Link 
            to="/#services" 
            className="inline-flex items-center gap-2 mb-8 text-white/70 hover:text-white transition-colors font-body text-sm"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Services
          </Link>
          
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="w-8 h-px bg-copper" />
            <span className="font-grotesk text-xs tracking-[0.2em] uppercase text-copper">{service.tagline}</span>
            <span className="w-8 h-px bg-copper" />
          </div>
          
          <h1 className="font-display font-light text-white mb-8" style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', lineHeight: 1.1 }}>
            {service.title}
          </h1>
          
          <p className="font-body text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            {service.description}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 lg:py-32">
        <div className="max-w-3xl mx-auto px-6 lg:px-10" ref={contentRef}>
          
          <div className="flex items-center gap-4 mb-12">
            <div className="w-16 h-16 rounded-2xl bg-copper/10 flex items-center justify-center">
              <service.icon className="w-8 h-8 text-copper" />
            </div>
            <div>
              <h2 className="font-display text-2xl md:text-3xl">Service Details</h2>
              <div className="flex gap-2 mt-2">
                {service.tags.map(tag => (
                  <span key={tag} className="text-[0.65rem] font-bold tracking-widest uppercase text-copper/80">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6 text-charcoal/70 dark:text-white/70 font-body text-lg leading-relaxed mb-16">
            {service.detailedContent.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

          {/* CTA Box */}
          <div className="bg-white dark:bg-white/5 border border-ivory-dark dark:border-white/10 rounded-3xl p-8 md:p-12 text-center shadow-soft">
            <h3 className="font-display text-2xl mb-4">Ready to elevate your space?</h3>
            <p className="font-body text-charcoal/60 dark:text-white/60 mb-8 max-w-lg mx-auto">
              Get in touch with us to discuss your requirements for {service.title} and receive a personalized quote.
            </p>
            <button
              onClick={handleWhatsApp}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-copper text-white font-grotesk text-sm font-bold tracking-widest uppercase hover:bg-copper-dark transition-all shadow-copper mx-auto"
            >
              <MessageCircle className="w-5 h-5" />
              Book Consultation
            </button>
          </div>

        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default ServiceDetail;
