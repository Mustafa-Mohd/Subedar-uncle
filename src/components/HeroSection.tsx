import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const servicesData = [
  { title: 'POP / Gypsum False Ceiling', img: 'https://images.openai.com/static-rsc-4/Bp_DULGF3NIEs5aeJZjWiv9RrG6wT3jRjInp-lb0zqySWLygEtPu_Z-khgVw1T5EcwJ_mTNk7aam8orOXRmSA_HyXATrSoNjwMi8eljLqIpNq7nILy4QUVSz3IuXB6xeB8dPwrahYrwAO_8Rtp1c8LB2AIJ5rtkahey9oY0Gyde1cGCV5bi0c9DB7JcPKbhx?purpose=fullsize' },
  { title: 'PVC / WPC / Fluted Panels', img: 'https://images.openai.com/static-rsc-4/PlKaP4Ulg5uCfjMDeqIX1DZbx1wmciAtAgXIgTbiRZZAOD05zOgnvhHXsGMFhr6X5Y1VUUzi5fkAjfg0FxPqArvSJ3pHLZggJpD7yKu_sUL9E430NKaHRysEbgZN9NOBLh8WVfcPHHPz7WyFQ8v2c-VhQO5Swfg4TDuS1_AUTajB08079R0G4tb--anuZGTA?purpose=fullsize' },
  { title: 'Grid / Thermocol Ceiling', img: 'https://images.openai.com/static-rsc-4/iZIHmCeGh0CUnwiZobxpqng_n16LEd1UaJ1dQTZUyAJ-SFOu2ewjqVgqI4zMw-16gvlVDtNCEWzqKPDhT9nJ7qiwTPEEaEyHLVTn6K7NT0X4rSrtleYzTeh-neifeiUhNCKfd6CerpdRsSRvBLjcNao0WjgSpmv8ANQ_mW1KQ57Y7ri_rnnsQjK2T7l4Syxg?purpose=fullsize' },
  { title: 'Wall Moulding & Design', img: 'https://images.openai.com/static-rsc-4/b2Yy5oyhDB7rCtM205DXj1-9F4gmd_EQ-z199NXMB0-J_leYyh3q1fWJj1M_GmWipcA0HTtfbEYMXKO6h1jS1kS6gZdiYZ4SX32ZBpV6zN1cnnRWXsVzC3nadVAy7b02IH4kCTLYvWBW3QTme6L1ucSyvAtjIK9Rucc8o8cDiEIQqGITQicvUT9-X-MVVVP6?purpose=fullsize' },
  { title: 'Electrical Solutions', img: 'https://images.openai.com/static-rsc-4/7Yb5d__693cQOIYRadImF5obJPb1_KTk_thgXYNAj7rHNqn2V6RkNotug6X20_rQJGZ4mek0KnbblSasAEOVZUYV_SlD8E5MrIOje1nlJUkbfxcwsOXL3IBabJPRLYaO5oUMywIpaRrsyfZh8sIk94DdzhdN_I9QtuJjoh9AUuiql9LXURcXkWwgVmkmkqds?purpose=fullsize' },
  { title: 'Professional Painting', img: 'https://images.openai.com/static-rsc-4/A7-Jq4XfgwdyyvI-B1ltj_f63aEg8lGscUwr8NELPDtm9L_LnLSkyIkLGJS6dBrLt2sasO9mSPmMKcIx3EyaBPxfx3G1nMAB2_-_HP3_OJEf7J8NaXQjI0KxbX0P36BDQARCDRQmejbJjIndviI1XEugFfTQObHPH52BQbDbhWR9KhdVhg1tZqPCQDJdyRUZ?purpose=fullsize' },
  { title: 'Wallpaper / Customizable', img: 'https://images.openai.com/static-rsc-4/B31YgqOdBAnukubg1_T-F125QkHoVe9__7281-bRGR_OGAEm7W4EC2AGoHDylwDdHfK8BqwbLGFSJRuZu0Tj-EncFcV91F1ZIuHEBDMU4cjP_DtqAZgl5W0orjWYPBky8It10ZetbdBUfIqSq1C6B9JZfyVdaU7f0G3CvcbpEgbbxh9nLtEz4hsWFf8lFhCZ?purpose=fullsize' },
  { title: 'Invisible Grills', img: 'https://images.openai.com/static-rsc-4/8Hlvh70-dFsObho17Lbi-8V0GTxY6t-idwjVJmfm2Ny5W7HXN-UfFe_z1c5QeMsWCD0DEx8JSGV40ctzlI4V8P2gwL4QgO7g301rOp8-gHHy9GHNv4uAz1aSpsy4Z2Pchb1j5667sEdPpavGd2iQyaxKfRDLMFD1HFUTRTfCEAEKibGg9BAzBc98PT42OfIO?purpose=fullsize' },
  { title: 'Complete Wooden Work', img: 'https://images.openai.com/static-rsc-4/41bIWtrwPFpN-Jy4T9yXqmNdHEayF4GXugmghS5Hp1L-FFIbJWLQpYlOeDxUqowV0dEoTNPhhmBtO7Qc0AZ7ZGjbxrM8W6YTos-C7Np70PDjldOcwQgomhcbzGIAPng0He9TIfaswdItdrnTraOQvAQ4-9Wl4chlws_HZJNiaL-KNW_-PqMkxwkyutNsQ_yq?purpose=fullsize' },
  { title: 'Kitchen Modular Work', img: 'https://images.openai.com/static-rsc-4/JG2X1TsnN2w8erajIwMcXL1sDoJ3MXaBQZeFwOnPLeF0bn0_RylAsesQNBBxZYEbU26Z_KNcrE4ST5Gm2NoNHKiP-Fx35PXG1bWIIpliaErvWoMiy6JLgwvsMcCp78qSs8PMWC4FsyYIBbD1DUBNniZTmaX81Hiu37fnvdqO65lymZVGmsMyCF4na6U80GiY?purpose=fullsize' },
  { title: '2D Drawings', img: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1000&auto=format&fit=crop' },
  { title: '3D Visualisation', img: 'https://images.unsplash.com/photo-1558442074-3c1985715fb6?q=80&w=1000&auto=format&fit=crop' },
];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % servicesData.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      
      {/* Background Carousel */}
      <AnimatePresence mode="sync">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 z-0"
        >
          <img 
            src={servicesData[currentIndex].img} 
            alt={servicesData[currentIndex].title} 
            className="w-full h-full object-cover" 
          />
        </motion.div>
      </AnimatePresence>

      {/* Overlays for better text readability */}
      <div className="absolute inset-0 z-1 bg-charcoal/60" />
      <div className="absolute inset-0 z-1 bg-gradient-to-t from-charcoal-dark via-transparent to-transparent opacity-80" />
      <div className="absolute inset-0 z-1 bg-gradient-to-r from-charcoal-dark/70 via-charcoal-dark/20 to-transparent" />
      
      {/* Noise Texture */}
      <div className="absolute inset-0 z-1 opacity-[0.03] pointer-events-none" 
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")` }} 
      />

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-10 flex flex-col justify-center min-h-screen">
        
        <div className="max-w-3xl text-center lg:text-left pt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <div className="flex items-center justify-center lg:justify-start gap-3 mb-6">
              <span className="w-10 h-px bg-copper" />
              <span className="font-grotesk text-[0.6rem] lg:text-[0.7rem] tracking-[0.4em] uppercase text-ivory/80 font-bold">
                Nexlane Interiors • Our Expertise
              </span>
            </div>

            <h1 
              className="font-display text-white leading-[1.1] mb-6 lg:mb-8 drop-shadow-lg"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}
            >
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="block"
                >
                  {servicesData[currentIndex].title}
                </motion.span>
              </AnimatePresence>
            </h1>

            <p className="font-body text-ivory/80 text-base lg:text-xl leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0">
              Crafting spaces that define your legacy with absolute precision and luxury artistry.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 lg:gap-5">
              <Link
                to="/services"
                className="w-full sm:w-auto group relative flex items-center justify-center gap-3 px-8 lg:px-10 py-4 lg:py-5 bg-copper text-white rounded-xl overflow-hidden transition-all duration-500 hover:bg-copper-dark shadow-hard shadow-copper/20"
              >
                <span className="relative z-10 font-grotesk text-[0.7rem] lg:text-[0.8rem] tracking-widest uppercase font-bold">Explore All Services</span>
                <ArrowRight className="relative z-10 w-4 h-4 transition-transform duration-500 group-hover:translate-x-1" />
              </Link>

              <Link
                to="/contact"
                className="w-full sm:w-auto group flex items-center justify-center gap-3 px-8 lg:px-10 py-4 lg:py-5 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-xl transition-all duration-500 hover:bg-white/20"
              >
                <span className="font-grotesk text-[0.7rem] lg:text-[0.8rem] tracking-widest uppercase font-bold text-white/90">Start Consultation</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Progress indicators / Pagination */}
      <div className="absolute bottom-10 left-0 right-0 z-10 flex justify-center gap-2">
        {servicesData.map((_, i) => (
          <div 
            key={i} 
            className={`h-1.5 rounded-full transition-all duration-500 ${i === currentIndex ? 'w-8 bg-copper' : 'w-2 bg-white/30'}`}
          />
        ))}
      </div>

    </section>
  );
};

export default HeroSection;