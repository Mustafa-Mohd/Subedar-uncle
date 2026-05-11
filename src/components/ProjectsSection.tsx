import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const FEATURED_PROJECTS = [
  {
    title: 'The Meridian Residence',
    category: 'Residential Interior',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=900&q=80',
    size: 'large',
  },
  {
    title: 'Celio Office Hub',
    category: 'Commercial Fitout',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80',
    size: 'small',
  },
  {
    title: 'Villa Amara',
    category: 'Luxury Villa',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&q=80',
    size: 'small',
  },
  {
    title: 'The Loft Collective',
    category: 'Loft Renovation',
    image: 'https://images.unsplash.com/photo-1556912173-3bb406ef7e8f?w=900&q=80',
    size: 'large',
  },
];

const ProjectsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(headerRef.current?.children ?? [],
        { y: 50, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 1, stagger: 0.15, ease: 'power3.out',
          scrollTrigger: { trigger: headerRef.current, start: 'top 80%' },
        }
      );

      gsap.fromTo('.project-card',
        { y: 70, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 1, stagger: 0.12, ease: 'power3.out',
          scrollTrigger: { trigger: '.projects-grid', start: 'top 78%' },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="py-24 lg:py-36" style={{ background: 'hsl(var(--charcoal))' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Header */}
        <div ref={headerRef} className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <span className="w-6 h-px" style={{ background: 'hsl(var(--copper))' }} />
              <span className="section-label text-copper">Featured Work</span>
            </div>
            <h2
              className="font-display font-light"
              style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.8rem)', color: 'hsl(var(--ivory))' }}
            >
              Spaces That
              <br />
              <span className="italic" style={{ color: 'hsl(var(--copper-light))' }}>Inspire</span>
            </h2>
          </div>
          <Link
            to="/contact"
            className="animated-underline flex items-center gap-2 font-grotesk text-sm font-medium self-start lg:self-auto"
            style={{ color: 'hsl(var(--copper))' }}
          >
            Start Your Project
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Masonry Grid */}
        <div className="projects-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {/* Large card — col span 2 */}
          <div
            className="project-card group col-span-1 md:col-span-2 relative overflow-hidden rounded-2xl cursor-pointer"
            style={{ height: '420px' }}
          >
            <img
              src={FEATURED_PROJECTS[0].image}
              alt={FEATURED_PROJECTS[0].title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div
              className="absolute inset-0 transition-opacity duration-500"
              style={{ background: 'linear-gradient(to top, hsl(var(--charcoal)/0.85) 0%, transparent 60%)' }}
            />
            <div className="absolute bottom-0 left-0 p-8 translate-y-2 group-hover:translate-y-0 transition-transform duration-400">
              <span className="pill mb-3" style={{ background: 'hsl(var(--copper)/0.2)', color: 'hsl(var(--copper-light))', border: '1px solid hsl(var(--copper)/0.3)', fontSize: '0.62rem' }}>
                {FEATURED_PROJECTS[0].category}
              </span>
              <h3 className="font-display font-semibold text-2xl" style={{ color: 'hsl(var(--ivory))' }}>
                {FEATURED_PROJECTS[0].title}
              </h3>
            </div>
          </div>

          {/* Small cards */}
          {[FEATURED_PROJECTS[1], FEATURED_PROJECTS[2]].map((p, i) => (
            <div
              key={i}
              className="project-card group relative overflow-hidden rounded-2xl cursor-pointer"
              style={{ height: '420px' }}
            >
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(to top, hsl(var(--charcoal)/0.85) 0%, transparent 60%)' }}
              />
              <div className="absolute bottom-0 left-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-400">
                <span className="pill mb-2" style={{ background: 'hsl(var(--copper)/0.2)', color: 'hsl(var(--copper-light))', border: '1px solid hsl(var(--copper)/0.3)', fontSize: '0.62rem' }}>
                  {p.category}
                </span>
                <h3 className="font-display font-semibold text-lg" style={{ color: 'hsl(var(--ivory))' }}>
                  {p.title}
                </h3>
              </div>
            </div>
          ))}

          {/* Wide card — full width */}
          <div
            className="project-card group col-span-1 md:col-span-2 lg:col-span-3 relative overflow-hidden rounded-2xl cursor-pointer"
            style={{ height: '360px' }}
          >
            <img
              src={FEATURED_PROJECTS[3].image}
              alt={FEATURED_PROJECTS[3].title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div
              className="absolute inset-0"
              style={{ background: 'linear-gradient(to right, hsl(var(--charcoal)/0.8) 0%, transparent 60%)' }}
            />
            <div className="absolute left-0 top-1/2 -translate-y-1/2 p-10">
              <span className="pill mb-4" style={{ background: 'hsl(var(--copper)/0.2)', color: 'hsl(var(--copper-light))', border: '1px solid hsl(var(--copper)/0.3)', fontSize: '0.62rem' }}>
                {FEATURED_PROJECTS[3].category}
              </span>
              <h3 className="font-display font-semibold text-3xl lg:text-4xl" style={{ color: 'hsl(var(--ivory))' }}>
                {FEATURED_PROJECTS[3].title}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
