import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CheckCircle2 } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const PROCESS_STEPS = [
  {
    num: '01',
    title: 'Discovery & Brief',
    desc: 'We begin with an in-depth consultation to understand your vision, lifestyle, and requirements.',
  },
  {
    num: '02',
    title: 'Concept Design',
    desc: 'Our team develops mood boards, space plans, and 3D visualisations tailored to your aesthetic.',
  },
  {
    num: '03',
    title: 'Execution',
    desc: 'Skilled craftsmen bring the design to life with precision — on time and to specification.',
  },
  {
    num: '04',
    title: 'Handover',
    desc: 'We deliver a fully styled, move-in-ready space that exceeds every expectation.',
  },
];

const WHY_US = [
  'Modern & customized interior solutions',
  'Expertise in false ceiling and decorative wall designs',
  'Affordable pricing with premium finishing',
  'Quality materials and professional execution',
  'Client-focused approach with on-time delivery',
];

const StudioSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const processRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(leftRef.current?.children ?? [],
        { x: -60, opacity: 0 },
        {
          x: 0, opacity: 1, duration: 1.1, stagger: 0.12, ease: 'power3.out',
          scrollTrigger: { trigger: leftRef.current, start: 'top 75%' }
        }
      );

      gsap.fromTo(rightRef.current,
        { x: 60, opacity: 0 },
        {
          x: 0, opacity: 1, duration: 1.2, ease: 'power3.out',
          scrollTrigger: { trigger: rightRef.current, start: 'top 75%' }
        }
      );

      gsap.fromTo('.process-step',
        { y: 40, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.9, stagger: 0.15, ease: 'power3.out',
          scrollTrigger: { trigger: processRef.current, start: 'top 78%' }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="overflow-hidden bg-white">
      {/* ── Studio Intro ── */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24 lg:py-36">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div ref={leftRef} className="space-y-7">
            <div className="flex items-center gap-3">
              <span className="w-6 h-px bg-copper inline-block" />
              <span className="section-label text-copper">The Studio</span>
            </div>

            <h2
              className="font-display font-light leading-tight text-charcoal"
              style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.8rem)' }}
            >
              Redefining the Art of{' '}
              <span className="italic" style={{ color: 'hsl(var(--copper))' }}>Spatial Design</span>
            </h2>

            <p className="font-body leading-relaxed text-charcoal/60" style={{ fontSize: '1rem' }}>
              Welcome to Nexlane Interiors, where creativity meets functionality to transform everyday spaces into modern, elegant interiors.
            </p>

            <p className="font-body leading-relaxed text-charcoal/60" style={{ fontSize: '1rem' }}>
              We specialize in false ceiling solutions, wall moulding, PVC/WPVC works, custom wall designs, and complete interior execution tailored to suit every lifestyle and budget. Our goal is to create spaces that not only look premium but also feel comfortable, practical, and timeless.
            </p>

            <p className="font-body leading-relaxed text-charcoal/60" style={{ fontSize: '1rem' }}>
              At Nexlane Interiors, we believe every space has the potential to stand out. From contemporary ceiling concepts to detailed finishing touches, we focus on quality craftsmanship, clean execution, and modern design aesthetics.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {WHY_US.map((item) => (
                <div key={item} className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 flex-shrink-0 text-copper" />
                  <span className="font-body text-sm text-charcoal/75">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div ref={rightRef} className="relative h-[520px] lg:h-[580px]">
            <div className="absolute inset-0 top-8 left-8 rounded-2xl overflow-hidden shadow-hard bg-ivory">
              <img
                src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=900&q=80"
                alt="Our studio work"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute bottom-0 left-0 w-48 h-48 rounded-2xl overflow-hidden shadow-hard border-4 border-white">
              <img
                src="https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?w=400&q=80"
                alt="Interior detail"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="absolute top-0 right-0 px-6 py-5 rounded-2xl shadow-medium bg-charcoal w-[160px]">
              <div className="stat-number text-4xl font-display font-light text-copper-light">27+</div>
              <div className="font-body text-xs mt-1 text-white/50">Years of Excellence</div>
            </div>

            <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full border-2 animate-spin-slow pointer-events-none border-copper/10" />
          </div>
        </div>
      </div>

      {/* ── Process ── */}
      <div ref={processRef} className="py-20 lg:py-28 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-5">
              <span className="w-6 h-px bg-copper" />
              <span className="section-label text-copper">Our Process</span>
              <span className="w-6 h-px bg-copper" />
            </div>
            <h2
              className="font-display font-light text-charcoal"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)' }}
            >
              How We Work
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROCESS_STEPS.map((step, i) => (
              <div
                key={i}
                className="process-step relative p-8 rounded-2xl group transition-all duration-400 hover:-translate-y-2 bg-white shadow-soft"
              >
                {i < PROCESS_STEPS.length - 1 && (
                  <div className="absolute top-14 right-0 w-6 h-px hidden lg:block translate-x-3 bg-copper/20" />
                )}
                <div className="font-display text-5xl font-light mb-4 text-copper/20">
                  {step.num}
                </div>
                <h3 className="font-display font-semibold mb-3 text-xl text-charcoal">
                  {step.title}
                </h3>
                <p className="font-body text-sm leading-relaxed text-charcoal/50">
                  {step.desc}
                </p>
                <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-copper/10 transition-all duration-400 pointer-events-none" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudioSection;
