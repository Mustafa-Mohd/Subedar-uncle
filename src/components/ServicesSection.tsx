import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Layers, Sofa, Settings2, LayoutGrid, Utensils, Lightbulb, PenTool, Home, Paintbrush, Image, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: Lightbulb,
    number: '01',
    title: 'POP / Gypsum False Ceiling',
    tagline: 'Ambient Excellence',
    description: 'Custom false ceiling designs integrated with professional lighting solutions to create the perfect mood for every room.',
    image: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=800&q=80',
    tags: ['False Ceiling', 'POP', 'Gypsum'],
  },
  {
    icon: LayoutGrid,
    number: '02',
    title: 'PVC / WPC / Fluted Panels',
    tagline: 'Modern Wall Solutions',
    description: 'Durable and stylish PVC, WPC paneling and Fluted panels for walls and ceilings, providing a contemporary aesthetic.',
    image: 'https://images.unsplash.com/photo-1620626011761-9963d7521477?w=800&q=80',
    tags: ['PVC', 'WPC', 'Fluted Panels'],
  },
  {
    icon: Layers,
    number: '03',
    title: 'Grid / Thermocol Ceiling',
    tagline: 'Functional Systems',
    description: 'Professional grid ceiling and thermocol insulation solutions for commercial and residential utility spaces.',
    image: 'https://images.unsplash.com/photo-1505691938895-1758d7eaa511?w=800&q=80',
    tags: ['Grid Ceiling', 'Thermocol', 'Acoustic'],
  },
  {
    icon: PenTool,
    number: '04',
    title: 'Wall Moulding & Design',
    tagline: 'Classical Elegance',
    description: 'Sophisticated wall moulding and architectural design elements that add character and depth to your interior spaces.',
    image: 'https://images.unsplash.com/photo-1594904351111-a072f80b1a71?w=800&q=80',
    tags: ['Moulding', 'Wall Design', 'Elegance'],
  },
  {
    icon: Settings2,
    number: '05',
    title: 'Electrical Solutions',
    tagline: 'Safe & Smart',
    description: 'Comprehensive electrical planning, wiring, and smart home integration for a safe and functional modern living environment.',
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?w=800&q=80',
    tags: ['Wiring', 'Lighting', 'Smart Home'],
  },
  {
    icon: Paintbrush,
    number: '06',
    title: 'Professional Painting',
    tagline: 'Vibrant Finishes',
    description: 'Expert interior and exterior painting services with premium finishes, textures, and professional color consultations.',
    image: 'https://images.unsplash.com/photo-1589939705384-5185138a047a?w=800&q=80',
    tags: ['Interior', 'Exterior', 'Texture'],
  },
  {
    icon: Image,
    number: '07',
    title: 'Wallpaper / Customizable',
    tagline: 'Artistic Walls',
    description: 'A wide range of customizable wallpaper designs and wall coverings to suit your unique aesthetic and lifestyle.',
    image: 'https://images.unsplash.com/photo-1615529182904-14819c35db37?w=800&q=80',
    tags: ['Wallpaper', 'Custom Design', 'Artistic'],
  },
  {
    icon: ShieldCheck,
    number: '08',
    title: 'Invisible Grills',
    tagline: 'Safety First',
    description: 'Modern invisible grill solutions for balconies and windows, providing maximum safety without obstructing your view.',
    image: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?w=800&q=80',
    tags: ['Safety', 'Balcony', 'Invisible'],
  },
  {
    icon: Home,
    number: '09',
    title: 'Complete Wooden Work',
    tagline: 'Handcrafted Interiors',
    description: 'End-to-end wooden interior solutions including wardrobes, beds, and bespoke storage units crafted from premium timber.',
    image: 'https://images.unsplash.com/photo-1556912173-3bb406ef7e8f?w=800&q=80',
    tags: ['Wardrobes', 'Beds', 'Storage'],
  },
  {
    icon: Utensils,
    number: '10',
    title: 'Kitchen Modular Work',
    tagline: 'Ergonomic Excellence',
    description: 'State-of-the-art modular kitchen designs optimized for functionality, space efficiency, and modern aesthetics.',
    image: 'https://images.unsplash.com/photo-1556911220-e150213ff7ad?w=800&q=80',
    tags: ['Ergonomic', 'Storage', 'Modular'],
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