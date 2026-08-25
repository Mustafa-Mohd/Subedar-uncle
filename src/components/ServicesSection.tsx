import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Layers, Sofa, Settings2, LayoutGrid, Utensils, Lightbulb, PenTool, Home, Paintbrush, Image, ShieldCheck, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

import { servicesData as services } from '@/data/services';

const ServicesSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current?.children ?? [],
        { y: 50, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 1, stagger: 0.15, ease: 'power3.out',
          scrollTrigger: { trigger: headerRef.current, start: 'top 80%' }
        }
      );

      gsap.fromTo(
        '.service-card',
        { y: 80, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 1.1, stagger: 0.1, ease: 'power3.out',
          scrollTrigger: { trigger: cardsRef.current, start: 'top 75%' }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="services" ref={sectionRef} className="py-10 lg:py-16 bg-ivory dark:bg-charcoal transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Header */}
        <div ref={headerRef} className="mb-16 lg:mb-24 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          <div className="max-w-xl">
            <div className="flex items-center gap-3 mb-5">
              <span className="w-6 h-px bg-copper" />
              <span className="section-label text-copper">Expertise & Services</span>
            </div>
            <h2
              className="font-display font-light leading-tight text-charcoal dark:text-white"
              style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)' }}
            >
              Holistic Interior
              <br />
              <span className="italic" style={{ color: 'hsl(var(--copper))' }}>Craftsmanship</span>
            </h2>
          </div>
          <p
            className="font-body leading-relaxed max-w-md lg:text-right text-charcoal/60 dark:text-white/60"
            style={{ fontSize: '0.95rem' }}
          >
            We provide a comprehensive suite of interior design and contracting services, 
            ensuring a seamless transition from conceptual sketches to finished reality.
          </p>
        </div>

        {/* Service Cards */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, i) => (
            <Link
              key={i}
              to={`/service/${service.id}`}
              className="service-card group relative overflow-hidden rounded-2xl cursor-pointer bg-white dark:bg-white/5 shadow-soft hover:shadow-medium transition-all duration-500 block text-left"
            >
              {/* Image */}
              <div className="relative h-60 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div
                  className="absolute top-4 right-4 font-display font-light text-4xl text-copper/30"
                >
                  {service.number}
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center bg-copper/10"
                  >
                    <service.icon className="w-5 h-5 text-copper" />
                  </div>
                  <span className="section-label text-copper">{service.tagline}</span>
                </div>

                <h3
                  className="font-display font-semibold mb-3 text-xl text-charcoal dark:text-white"
                >
                  {service.title}
                </h3>
                <p
                  className="font-body text-[0.85rem] leading-relaxed mb-6 text-charcoal/60 dark:text-white/60 h-20 overflow-hidden"
                >
                  {service.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="pill bg-ivory dark:bg-charcoal text-copper border border-copper/10 text-[0.6rem] px-2 py-0.5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between mt-auto pt-2">
                  <div
                    className="flex items-center gap-2 font-grotesk text-[0.7rem] font-bold tracking-widest uppercase text-charcoal/40 dark:text-white/40 transition-colors duration-300 group-hover:text-copper"
                  >
                    Learn More
                    <ArrowRight
                      className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </div>
                  
                  <a 
                    href={`https://wa.me/919059252564?text=${encodeURIComponent(`Hello Ansar Ahmed, I am interested in ${service.title} for my project.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 text-green-600 dark:text-green-400 hover:bg-green-500 hover:text-white transition-all duration-300 group/wa"
                    title="Contact on WhatsApp"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span className="font-grotesk text-[0.6rem] font-bold tracking-widest uppercase">WhatsApp</span>
                  </a>
                </div>
              </div>

              {/* Hover border glow */}
              <div
                className="absolute inset-0 rounded-2xl border border-transparent transition-all duration-500 group-hover:border-copper/20 pointer-events-none"
              />
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Link
            to="/services"
            className="magnetic-btn inline-flex items-center gap-3 px-8 py-4 rounded-full font-grotesk text-sm font-medium text-white transition-all shadow-copper"
            style={{ background: 'var(--gradient-copper)' }}
          >
            Explore Detailed Services
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;