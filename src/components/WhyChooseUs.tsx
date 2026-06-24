import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Users, Tag, Clock, Star, Paintbrush, ShieldCheck } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

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

const WhyChooseUs = () => {
  const processRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.why-card',
        { y: 40, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.9, stagger: 0.1, ease: 'power3.out',
          scrollTrigger: { trigger: processRef.current, start: 'top 78%' }
        }
      );
    }, processRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={processRef} className="py-10 lg:py-16 bg-ivory dark:bg-charcoal transition-colors duration-500 border-t border-charcoal/5 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="w-6 h-px bg-copper" />
            <span className="section-label text-copper">The Nexlane Advantage</span>
            <span className="w-6 h-px bg-copper" />
          </div>
          <h2
            className="font-display font-light text-charcoal dark:text-white"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)' }}
          >
            Why Choose Us
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {WHY_CHOOSE_US_CARDS.map((card, i) => {
            const Icon = card.icon;
            return (
              <div
                key={i}
                className={`why-card relative p-8 lg:p-10 rounded-3xl group transition-all duration-500 hover:-translate-y-2 shadow-soft hover:shadow-medium bg-gradient-to-br border ${card.colorClass}`}
              >
                <div className="flex flex-col sm:flex-row items-start gap-5">
                  <div className={`p-4 rounded-2xl bg-white dark:bg-charcoal-dark shadow-sm border border-charcoal/5 dark:border-white/5 ${card.iconColor} group-hover:scale-110 transition-transform duration-500`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="pt-1">
                    <h3 className="font-display font-semibold mb-3 text-xl text-inherit">
                      {card.title}
                    </h3>
                    <p className="font-body text-[0.9rem] leading-relaxed opacity-80 text-inherit">
                      {card.desc}
                    </p>
                  </div>
                </div>
                
                <div className="absolute inset-0 rounded-3xl border border-transparent group-hover:border-copper/30 transition-all duration-500 pointer-events-none" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
