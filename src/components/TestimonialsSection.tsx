import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Quote } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const TESTIMONIALS = [
  {
    quote:
      "Nexlane completely transformed our apartment into something we could not have imagined. Every detail was thoughtful, every material perfect. Truly exceptional work.",
    name: "Priya Mehta",
    role: "Residential Client, Hyderabad",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
  },
  {
    quote:
      "Their aluminium fabrication work for our commercial space was flawless. The precision and finish quality set them apart from any contractor we've worked with.",
    name: "Arjun Rao",
    role: "Commercial Client, Bangalore",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
  },
  {
    quote:
      "From concept to handover, the Nexlane team was professional, creative, and responsive. Our office space is now a place people love to work in.",
    name: "Sana Qureshi",
    role: "Corporate Client, Mumbai",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80",
  },
];

const MARQUEE_BRANDS = [
  'Residential', 'Commercial', 'Hospitality', 'Retail', 'Healthcare',
  'Education', 'Luxury Villas', 'Corporate', 'Residential', 'Commercial', 'Hospitality', 'Retail',
];

const TestimonialsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.testimonial-card',
        { y: 60, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 1, stagger: 0.18, ease: 'power3.out',
          scrollTrigger: { trigger: cardsRef.current, start: 'top 78%' },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="overflow-hidden bg-ivory dark:bg-charcoal transition-colors duration-500">
      {/* Marquee strip */}
      <div
        className="py-5 overflow-hidden border-y bg-white dark:bg-white/5 border-copper/10 dark:border-white/5"
      >
        <div className="marquee-track">
          {[...MARQUEE_BRANDS, ...MARQUEE_BRANDS].map((b, i) => (
            <span
              key={i}
              className="flex items-center gap-6 px-6 font-grotesk text-xs tracking-[0.18em] uppercase whitespace-nowrap"
              style={{ color: i % 2 === 0 ? 'hsl(var(--copper))' : 'hsl(var(--charcoal) / 0.2)' }}
            >
              {b}
              <span className="w-1 h-1 rounded-full bg-copper/20 inline-block" />
            </span>
          ))}
        </div>
      </div>

      {/* Testimonials */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24 lg:py-32">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="w-6 h-px bg-copper" />
            <span className="section-label text-copper">Testimonials</span>
            <span className="w-6 h-px bg-copper" />
          </div>
          <h2
            className="font-display font-light text-charcoal dark:text-white"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.4rem)' }}
          >
            What Our Clients Say
          </h2>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={i}
              className="testimonial-card relative p-8 rounded-2xl transition-all duration-500 bg-white dark:bg-white/5 shadow-soft border border-copper/5 dark:border-white/5 hover:shadow-medium"
            >
              <Quote
                className="mb-6 w-8 h-8 text-copper/40"
              />
              <p
                className="font-body leading-relaxed mb-8 text-sm italic text-charcoal/70 dark:text-white/70"
              >
                "{t.quote}"
              </p>
              <div className="flex items-center gap-4">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-11 h-11 rounded-full object-cover border-2 border-copper/20"
                />
                <div>
                  <div className="font-grotesk font-medium text-sm text-charcoal dark:text-white">
                    {t.name}
                  </div>
                  <div className="font-body text-xs text-charcoal/40 dark:text-white/40">
                    {t.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
