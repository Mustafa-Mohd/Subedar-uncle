import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Layers, Sofa, Settings2, LayoutGrid, Utensils, Lightbulb, PenTool, Home, Paintbrush, Image, ShieldCheck, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: Lightbulb,
    number: '01',
    title: 'POP / Gypsum False Ceiling',
    tagline: 'Ambient Excellence',
    description: 'Custom false ceiling designs integrated with professional lighting solutions to create the perfect mood for every room.',
    image: 'https://images.openai.com/static-rsc-4/Bp_DULGF3NIEs5aeJZjWiv9RrG6wT3jRjInp-lb0zqySWLygEtPu_Z-khgVw1T5EcwJ_mTNk7aam8orOXRmSA_HyXATrSoNjwMi8eljLqIpNq7nILy4QUVSz3IuXB6xeB8dPwrahYrwAO_8Rtp1c8LB2AIJ5rtkahey9oY0Gyde1cGCV5bi0c9DB7JcPKbhx?purpose=fullsize',
    tags: ['False Ceiling', 'POP', 'Gypsum'],
  },
  {
    icon: LayoutGrid,
    number: '02',
    title: 'PVC / WPC / Fluted Panels',
    tagline: 'Modern Wall Solutions',
    description: 'Durable and stylish PVC, WPC paneling and Fluted panels for walls and ceilings, providing a contemporary aesthetic.',
    image: 'https://images.openai.com/static-rsc-4/PlKaP4Ulg5uCfjMDeqIX1DZbx1wmciAtAgXIgTbiRZZAOD05zOgnvhHXsGMFhr6X5Y1VUUzi5fkAjfg0FxPqArvSJ3pHLZggJpD7yKu_sUL9E430NKaHRysEbgZN9NOBLh8WVfcPHHPz7WyFQ8v2c-VhQO5Swfg4TDuS1_AUTajB08079R0G4tb--anuZGTA?purpose=fullsize',
    tags: ['PVC', 'WPC', 'Fluted Panels'],
  },
  {
    icon: Layers,
    number: '03',
    title: 'Grid / Thermocol Ceiling',
    tagline: 'Functional Systems',
    description: 'Professional grid ceiling and thermocol insulation solutions for commercial and residential utility spaces.',
    image: 'https://images.openai.com/static-rsc-4/iZIHmCeGh0CUnwiZobxpqng_n16LEd1UaJ1dQTZUyAJ-SFOu2ewjqVgqI4zMw-16gvlVDtNCEWzqKPDhT9nJ7qiwTPEEaEyHLVTn6K7NT0X4rSrtleYzTeh-neifeiUhNCKfd6CerpdRsSRvBLjcNao0WjgSpmv8ANQ_mW1KQ57Y7ri_rnnsQjK2T7l4Syxg?purpose=fullsize',
    tags: ['Grid Ceiling', 'Thermocol', 'Acoustic'],
  },
  {
    icon: PenTool,
    number: '04',
    title: 'Wall Moulding & Design',
    tagline: 'Classical Elegance',
    description: 'Sophisticated wall moulding and architectural design elements that add character and depth to your interior spaces.',
    image: 'https://images.openai.com/static-rsc-4/b2Yy5oyhDB7rCtM205DXj1-9F4gmd_EQ-z199NXMB0-J_leYyh3q1fWJj1M_GmWipcA0HTtfbEYMXKO6h1jS1kS6gZdiYZ4SX32ZBpV6zN1cnnRWXsVzC3nadVAy7b02IH4kCTLYvWBW3QTme6L1ucSyvAtjIK9Rucc8o8cDiEIQqGITQicvUT9-X-MVVVP6?purpose=fullsize',
    tags: ['Moulding', 'Wall Design', 'Elegance'],
  },
  {
    icon: Settings2,
    number: '05',
    title: 'Electrical Solutions',
    tagline: 'Safe & Smart',
    description: 'Comprehensive electrical planning, wiring, and smart home integration for a safe and functional modern living environment.',
    image: 'https://images.openai.com/static-rsc-4/7Yb5d__693cQOIYRadImF5obJPb1_KTk_thgXYNAj7rHNqn2V6RkNotug6X20_rQJGZ4mek0KnbblSasAEOVZUYV_SlD8E5MrIOje1nlJUkbfxcwsOXL3IBabJPRLYaO5oUMywIpaRrsyfZh8sIk94DdzhdN_I9QtuJjoh9AUuiql9LXURcXkWwgVmkmkqds?purpose=fullsize',
    tags: ['Wiring', 'Lighting', 'Smart Home'],
  },
  {
    icon: Paintbrush,
    number: '06',
    title: 'Professional Painting',
    tagline: 'Vibrant Finishes',
    description: 'Expert interior and exterior painting services with premium finishes, textures, and professional color consultations.',
    image: 'https://images.openai.com/static-rsc-4/A7-Jq4XfgwdyyvI-B1ltj_f63aEg8lGscUwr8NELPDtm9L_LnLSkyIkLGJS6dBrLt2sasO9mSPmMKcIx3EyaBPxfx3G1nMAB2_-_HP3_OJEf7J8NaXQjI0KxbX0P36BDQARCDRQmejbJjIndviI1XEugFfTQObHPH52BQbDbhWR9KhdVhg1tZqPCQDJdyRUZ?purpose=fullsize',
    tags: ['Interior', 'Exterior', 'Texture'],
  },
  {
    icon: Image,
    number: '07',
    title: 'Wallpaper / Customizable',
    tagline: 'Artistic Walls',
    description: 'A wide range of customizable wallpaper designs and wall coverings to suit your unique aesthetic and lifestyle.',
    image: 'https://images.openai.com/static-rsc-4/B31YgqOdBAnukubg1_T-F125QkHoVe9__7281-bRGR_OGAEm7W4EC2AGoHDylwDdHfK8BqwbLGFSJRuZu0Tj-EncFcV91F1ZIuHEBDMU4cjP_DtqAZgl5W0orjWYPBky8It10ZetbdBUfIqSq1C6B9JZfyVdaU7f0G3CvcbpEgbbxh9nLtEz4hsWFf8lFhCZ?purpose=fullsize',
    tags: ['Wallpaper', 'Custom Design', 'Artistic'],
  },
  {
    icon: ShieldCheck,
    number: '08',
    title: 'Invisible Grills',
    tagline: 'Safety First',
    description: 'Modern invisible grill solutions for balconies and windows, providing maximum safety without obstructing your view.',
    image: 'https://images.openai.com/static-rsc-4/8Hlvh70-dFsObho17Lbi-8V0GTxY6t-idwjVJmfm2Ny5W7HXN-UfFe_z1c5QeMsWCD0DEx8JSGV40ctzlI4V8P2gwL4QgO7g301rOp8-gHHy9GHNv4uAz1aSpsy4Z2Pchb1j5667sEdPpavGd2iQyaxKfRDLMFD1HFUTRTfCEAEKibGg9BAzBc98PT42OfIO?purpose=fullsize',
    tags: ['Safety', 'Balcony', 'Invisible'],
  },
  {
    icon: Home,
    number: '09',
    title: 'Complete Wooden Work',
    tagline: 'Handcrafted Interiors',
    description: 'End-to-end wooden interior solutions including wardrobes, beds, and bespoke storage units crafted from premium timber.',
    image: 'https://images.openai.com/static-rsc-4/41bIWtrwPFpN-Jy4T9yXqmNdHEayF4GXugmghS5Hp1L-FFIbJWLQpYlOeDxUqowV0dEoTNPhhmBtO7Qc0AZ7ZGjbxrM8W6YTos-C7Np70PDjldOcwQgomhcbzGIAPng0He9TIfaswdItdrnTraOQvAQ4-9Wl4chlws_HZJNiaL-KNW_-PqMkxwkyutNsQ_yq?purpose=fullsize',
    tags: ['Wardrobes', 'Beds', 'Storage'],
  },
  {
    icon: Utensils,
    number: '10',
    title: 'Kitchen Modular Work',
    tagline: 'Ergonomic Excellence',
    description: 'State-of-the-art modular kitchen designs optimized for functionality, space efficiency, and modern aesthetics.',
    image: 'https://images.openai.com/static-rsc-4/JG2X1TsnN2w8erajIwMcXL1sDoJ3MXaBQZeFwOnPLeF0bn0_RylAsesQNBBxZYEbU26Z_KNcrE4ST5Gm2NoNHKiP-Fx35PXG1bWIIpliaErvWoMiy6JLgwvsMcCp78qSs8PMWC4FsyYIBbD1DUBNniZTmaX81Hiu37fnvdqO65lymZVGmsMyCF4na6U80GiY?purpose=fullsize',
    tags: ['Ergonomic', 'Storage', 'Modular'],
  },
  {
    icon: PenTool,
    number: '11',
    title: '2D Drawings',
    tagline: 'Precision Blueprints',
    description: 'Detailed 2D architectural drawings and floor plans to layout every inch of your space with absolute accuracy.',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1000&auto=format&fit=crop',
    tags: ['2D', 'Drawings', 'Planning'],
  },
  {
    icon: Image,
    number: '12',
    title: '3D Visualisation',
    tagline: 'Realistic Renderings',
    description: 'High-quality 3D visualizations and walk-throughs to preview your dream space before execution.',
    image: 'https://images.unsplash.com/photo-1558442074-3c1985715fb6?q=80&w=1000&auto=format&fit=crop',
    tags: ['3D', 'Render', 'Visualization'],
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
            <div
              key={i}
              className="service-card group relative overflow-hidden rounded-2xl cursor-pointer bg-white dark:bg-white/5 shadow-soft hover:shadow-medium transition-all duration-500"
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
                    href={`https://wa.me/919118861979?text=${encodeURIComponent(`Hello Ansar Ahmed, I am interested in ${service.title} for my project.`)}`}
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