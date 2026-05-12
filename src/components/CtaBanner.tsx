import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const CtaBanner = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(contentRef.current?.children ?? [],
        { y: 50, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 1, stagger: 0.15, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden py-24 lg:py-32 bg-ivory dark:bg-charcoal transition-colors duration-500"
    >
      {/* Decorative BG circle */}
      <div
        className="absolute -top-32 -right-32 w-96 h-96 rounded-full pointer-events-none bg-copper/5 dark:bg-copper/10"
      />
      <div
        className="absolute -bottom-24 -left-24 w-64 h-64 rounded-full pointer-events-none bg-copper/5 dark:bg-copper/10"
      />

      <div className="relative max-w-4xl mx-auto px-6 lg:px-10 text-center" ref={contentRef}>
        <div className="flex items-center justify-center gap-3 mb-6">
          <span className="w-8 h-px bg-copper" />
          <span className="section-label text-copper">Let's Create Together</span>
          <span className="w-8 h-px bg-copper" />
        </div>

        <h2
          className="font-display font-light mb-6 text-charcoal dark:text-white"
          style={{ fontSize: 'clamp(2.4rem, 5.5vw, 4.2rem)', lineHeight: 1.1 }}
        >
          Your Dream Space{' '}
          <span className="italic" style={{ color: 'hsl(var(--copper))' }}>Awaits</span>
        </h2>

        <p
          className="font-body text-lg leading-relaxed mb-10 max-w-2xl mx-auto text-charcoal/60 dark:text-white/60"
        >
          Ready to transform your space into something extraordinary? Let's start a conversation
          and bring your vision to life with Nexlane's expertise.
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            to="/contact"
            className="magnetic-btn flex items-center gap-2.5 px-8 py-4 rounded-full font-grotesk font-medium text-white text-sm bg-gradient-to-r from-copper to-copper-light shadow-copper"
          >
            Book a Free Consultation
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            to="/services"
            className="magnetic-btn flex items-center gap-2.5 px-8 py-4 rounded-full font-grotesk font-medium text-sm transition-all border border-charcoal/20 dark:border-white/20 text-charcoal dark:text-white hover:bg-charcoal/5 dark:hover:bg-white/5"
          >
            View Our Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CtaBanner;
