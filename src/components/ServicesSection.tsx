import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Layers, Sofa, Settings2, LayoutGrid, Utensils, Lightbulb, PenTool, Home } from 'lucide-react';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: Home,
    number: '01',
    title: 'Full Home Interiors',
    tagline: 'End-to-End Transformations',
    description:
      'Complete residential design from concept to final styling. We handle everything from space planning to the last piece of decor.',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80',
    tags: ['Space Planning', 'Furniture', 'Styling'],
  },
  {
    icon: Utensils,
    number: '02',
    title: 'Modular Kitchens',
    tagline: 'Ergonomic & Stylish',
    description:
      'Precision-engineered modular kitchen solutions that blend high functionality with contemporary aesthetics. Optimized for your workflow.',
    image: 'https://images.unsplash.com/photo-1556911220-e150213ff7ad?w=800&q=80',
    tags: ['L-Shaped', 'Island Kitchen', 'Custom Cabinets'],
  },
  {
    icon: Settings2,
    number: '03',
    title: 'Aluminium Works',
    tagline: 'Precision Engineering',
    description:
      'Premium aluminium fabrication for windows, doors, and partitions. Durable, sleek, and engineered for modern architectural standards.',
    image: 'https://images.unsplash.com/photo-1572120360610-d971b9d7767c?w=800&q=80',
    tags: ['Windows & Doors', 'Partitions', 'Structural'],
  },
  {
    icon: Lightbulb,
    number: '04',
    title: 'Lighting & Ceilings',
    tagline: 'Ambient Excellence',
    description:
      'Custom false ceiling designs integrated with professional lighting solutions to create the perfect mood for every room.',
    image: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=800&q=80',
    tags: ['False Ceiling', 'LED Solutions', 'Ambient Light'],
  },
  {
    icon: Sofa,
    number: '05',
    title: 'Bespoke Furniture',
    tagline: 'Handcrafted Luxury',
    description:
      'Custom-made furniture pieces that fit your space perfectly. From luxury sofas to executive desks, crafted with the finest materials.',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80',
    tags: ['Custom Sofa', 'Storage Units', 'Dining Sets'],
  },
  {
    icon: LayoutGrid,
    number: '06',
    title: 'Commercial Design',
    tagline: 'Productive Workspaces',
    description:
      'High-end office and retail interiors designed to boost productivity and reflect your brand identity through professional architecture.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
    tags: ['Office Fit-out', 'Retail Display', 'Reception'],
  },
];

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
    <section id="services" ref={sectionRef} className="py-24 lg:py-36 bg-ivory">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Header */}
        <div ref={headerRef} className="mb-16 lg:mb-24 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          <div className="max-w-xl">
            <div className="flex items-center gap-3 mb-5">
              <span className="w-6 h-px bg-copper" />
              <span className="section-label text-copper">Expertise & Services</span>
            </div>
            <h2
              className="font-display font-light leading-tight text-charcoal"
              style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)' }}
            >
              Holistic Interior
              <br />
              <span className="italic" style={{ color: 'hsl(var(--copper))' }}>Craftsmanship</span>
            </h2>
          </div>
          <p
            className="font-body leading-relaxed max-w-md lg:text-right text-charcoal/60"
            style={{ fontSize: '0.95rem' }}
          >
            We provide a comprehensive suite of interior design and contracting services, 
            ensuring a seamless transition from conceptual sketches to finished reality.
          </p>
        </div>

        {/* Service Cards */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, i) => (
            <div
              key={i}
              className="service-card group relative overflow-hidden rounded-2xl cursor-pointer bg-white shadow-soft hover:shadow-medium transition-all duration-500"
            >
              {/* Image */}
              <div className="relative h-60 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0" style={{ background: 'var(--gradient-card)' }} />
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
                  className="font-display font-semibold mb-3 text-xl text-charcoal"
                >
                  {service.title}
                </h3>
                <p
                  className="font-body text-[0.85rem] leading-relaxed mb-6 text-charcoal/60 h-20 overflow-hidden"
                >
                  {service.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="pill bg-ivory text-copper border border-copper/10 text-[0.6rem] px-2 py-0.5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div
                  className="flex items-center gap-2 font-grotesk text-[0.7rem] font-bold tracking-widest uppercase text-charcoal/40 transition-colors duration-300 group-hover:text-copper"
                >
                  Learn More
                  <ArrowRight
                    className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1"
                  />
                </div>
              </div>

              {/* Hover border glow */}
              <div
                className="absolute inset-0 rounded-2xl border border-transparent transition-all duration-500 group-hover:border-copper/20 pointer-events-none"
              />
            </div>
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