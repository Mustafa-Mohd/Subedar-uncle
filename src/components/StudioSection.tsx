import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CheckCircle2, Users, Tag, Clock, Star, Paintbrush, ShieldCheck } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const WHY_US_BULLETS = [
  'Modern & customized interior solutions',
  'Expertise in false ceiling and decorative wall designs',
  'Affordable pricing with premium finishing',
  'Quality materials and professional execution',
  'Client-focused approach with on-time delivery',
];

const WHY_CHOOSE_US_CARDS = [
  {
    title: 'Experienced Team',
    desc: "Years of expertise in Hyderabad's interior industry.",
    icon: Users,
    colorClass: 'from-amber-50 to-orange-50/50 dark:from-amber-500/5 dark:to-orange-500/5 border-amber-200/50 dark:border-amber-500/20 text-amber-950 dark:text-amber-50',
    iconColor: 'text-amber-600 dark:text-amber-400'
  },
  {
    title: 'Affordable Pricing',
    desc: 'Premium quality at competitive, transparent prices.',
    icon: Tag,
    colorClass: 'from-emerald-50 to-teal-50/50 dark:from-emerald-500/5 dark:to-teal-500/5 border-emerald-200/50 dark:border-emerald-500/20 text-emerald-950 dark:text-emerald-50',
    iconColor: 'text-emerald-600 dark:text-emerald-400'
  },
  {
    title: 'On-Time Delivery',
    desc: 'We respect your timelines and deliver on schedule.',
    icon: Clock,
    colorClass: 'from-blue-50 to-indigo-50/50 dark:from-blue-500/5 dark:to-indigo-500/5 border-blue-200/50 dark:border-blue-500/20 text-blue-950 dark:text-blue-50',
    iconColor: 'text-blue-600 dark:text-blue-400'
  },
  {
    title: 'Premium Finishing',
    desc: 'Top-quality materials with impeccable finishing.',
    icon: Star,
    colorClass: 'from-rose-50 to-pink-50/50 dark:from-rose-500/5 dark:to-pink-500/5 border-rose-200/50 dark:border-rose-500/20 text-rose-950 dark:text-rose-50',
    iconColor: 'text-rose-600 dark:text-rose-400'
  },
  {
    title: 'Custom Designs',
    desc: 'Unique solutions tailored to your style and needs.',
    icon: Paintbrush,
    colorClass: 'from-purple-50 to-fuchsia-50/50 dark:from-purple-500/5 dark:to-fuchsia-500/5 border-purple-200/50 dark:border-purple-500/20 text-purple-950 dark:text-purple-50',
    iconColor: 'text-purple-600 dark:text-purple-400'
  },
  {
    title: 'Warranty & Support',
    desc: 'Post-project support with service warranty assured.',
    icon: ShieldCheck,
    colorClass: 'from-cyan-50 to-sky-50/50 dark:from-cyan-500/5 dark:to-sky-500/5 border-cyan-200/50 dark:border-cyan-500/20 text-cyan-950 dark:text-cyan-50',
    iconColor: 'text-cyan-600 dark:text-cyan-400'
  }
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

      gsap.fromTo('.why-card',
        { y: 40, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.9, stagger: 0.1, ease: 'power3.out',
          scrollTrigger: { trigger: processRef.current, start: 'top 78%' }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="overflow-hidden bg-white dark:bg-charcoal transition-colors duration-500">
      {/* ── Studio Intro ── */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-10 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div ref={leftRef} className="space-y-7">
            <div className="flex items-center gap-3">
              <span className="w-6 h-px bg-copper inline-block" />
              <span className="section-label text-copper">The Studio</span>
            </div>

            <h2
              className="font-display font-light leading-tight text-charcoal dark:text-white"
              style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.8rem)' }}
            >
              Redefining the Art of{' '}
              <span className="italic" style={{ color: 'hsl(var(--copper))' }}>Spatial Design</span>
            </h2>

            <p className="font-body leading-relaxed text-charcoal/60 dark:text-white/60" style={{ fontSize: '1rem' }}>
              Welcome to Nexlane Interiors, where creativity meets functionality to transform everyday spaces into modern, elegant interiors.
            </p>

            <p className="font-body leading-relaxed text-charcoal/60 dark:text-white/60" style={{ fontSize: '1rem' }}>
              We specialize in false ceiling solutions, wall moulding, PVC/WPVC works, custom wall designs, and complete interior execution tailored to suit every lifestyle and budget. Our goal is to create spaces that not only look premium but also feel comfortable, practical, and timeless.
            </p>

            <p className="font-body leading-relaxed text-charcoal/60 dark:text-white/60" style={{ fontSize: '1rem' }}>
              At Nexlane Interiors, we believe every space has the potential to stand out. From contemporary ceiling concepts to detailed finishing touches, we focus on quality craftsmanship, clean execution, and modern design aesthetics.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {WHY_US_BULLETS.map((item) => (
                <div key={item} className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 flex-shrink-0 text-copper" />
                  <span className="font-body text-sm text-charcoal/75 dark:text-white/75">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div ref={rightRef} className="relative h-[520px] lg:h-[580px]">
            <div className="absolute inset-0 top-8 left-8 rounded-2xl overflow-hidden shadow-hard bg-ivory dark:bg-white/5">
              <img
                src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=900&q=80"
                alt="Our studio work"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute bottom-0 left-0 w-48 h-48 rounded-2xl overflow-hidden shadow-hard border-4 border-white dark:border-charcoal">
              <img
                src="https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?w=400&q=80"
                alt="Interior detail"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="absolute top-0 right-0 px-6 py-5 rounded-2xl shadow-medium bg-charcoal dark:bg-white w-[160px]">
              <div className="stat-number text-4xl font-display font-light text-copper-light dark:text-copper">27+</div>
              <div className="font-body text-xs mt-1 text-white/50 dark:text-charcoal/50">Years of Excellence</div>
            </div>

            <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full border-2 animate-spin-slow pointer-events-none border-copper/10" />
          </div>
        </div>
      </div>

    </section>
  );
};

export default StudioSection;
