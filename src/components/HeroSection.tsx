import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Trophy, Users, Star, ArrowDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const images = [
    'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1800&q=90',
    'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1800&q=90',
  ];

  const stats = [
    { icon: Trophy, label: 'Excellence', value: '27+', sub: 'Years Experience' },
    { icon: Users, label: 'Community', value: '200+', sub: 'Luxury Projects' },
    { icon: Star, label: 'Quality', value: '98%', sub: 'Client Rating' },
  ];

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center">
      {/* Background with Ambient Zoom */}
      <motion.div 
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 15, repeat: Infinity, repeatType: 'reverse', ease: 'linear' }}
        className="absolute inset-0 z-0"
      >
        <img
          src={images[0]}
          alt="Luxury Interior"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Cinematic Overlays */}
      <div className="absolute inset-0 z-1 bg-gradient-to-r from-charcoal/80 via-charcoal/40 to-transparent" />
      <div className="absolute inset-0 z-1 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent" />
      <div className="absolute inset-0 z-1 backdrop-brightness-75" />
      
      {/* Noise Texture */}
      <div className="absolute inset-0 z-1 opacity-[0.03] pointer-events-none" 
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")` }} 
      />

      {/* Main Content Layout */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-10 flex flex-col justify-center h-full pt-20">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Typography */}
          <div className="lg:col-span-8 xl:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="w-10 h-px bg-copper" />
                <span className="font-grotesk text-[0.7rem] tracking-[0.4em] uppercase text-ivory/80 font-bold">
                  Est. 1997 • Bespoke Interiors
                </span>
              </div>

              <h1 
                className="font-display text-white leading-[1.1] mb-8"
                style={{ fontSize: 'clamp(2.5rem, 6vw, 4.8rem)' }}
              >
                Crafting Spaces That <br />
                <span className="italic font-light text-copper-light">Define Your Legacy</span>
              </h1>

              <p className="font-body text-ivory/70 text-lg lg:text-xl leading-relaxed mb-10 max-w-xl">
                Nexlane Interiors merges architectural precision with luxury artistry to create 
                living environments that are as unique as your own story.
              </p>

              <div className="flex flex-wrap gap-5">
                <Link
                  to="/gallery"
                  className="group relative flex items-center gap-3 px-10 py-5 bg-charcoal text-white rounded-xl overflow-hidden transition-all duration-500 hover:shadow-hard"
                >
                  <span className="relative z-10 font-grotesk text-[0.8rem] tracking-widest uppercase font-bold">Discover Collection</span>
                  <ArrowRight className="relative z-10 w-4 h-4 transition-transform duration-500 group-hover:translate-x-1" />
                </Link>

                <Link
                  to="/contact"
                  className="group flex items-center gap-3 px-10 py-5 bg-ivory-dark/40 backdrop-blur-md border border-charcoal/10 text-charcoal rounded-xl transition-all duration-500 hover:bg-ivory-dark/60"
                >
                  <span className="font-grotesk text-[0.8rem] tracking-widest uppercase font-bold text-charcoal/80">Start Consultation</span>
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Floating Visual Element (Stats Cards) */}
          <div className="hidden lg:flex lg:col-span-4 xl:col-span-5 justify-end">
            <div className="flex flex-col gap-6">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 + i * 0.15, ease: 'easeOut' }}
                  whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                  className="group relative bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-2xl w-64 lg:w-72 shadow-hard overflow-hidden"
                >
                  {/* Glass highlight effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="flex items-center gap-4 relative z-10">
                    <div className="w-12 h-12 rounded-xl bg-copper/20 flex items-center justify-center text-copper">
                      <stat.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="font-display text-2xl text-white font-medium">{stat.value}</div>
                      <div className="font-grotesk text-[0.6rem] tracking-widest uppercase text-ivory/50">{stat.sub}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Floating Particles Placeholder (Simulated with simple spans for now) */}
      <div className="absolute inset-0 z-2 pointer-events-none overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-copper/20 rounded-full"
            initial={{ 
              x: Math.random() * 100 + '%', 
              y: Math.random() * 100 + '%',
              opacity: 0.1
            }}
            animate={{ 
              y: [null, '-20px', '20px'],
              opacity: [0.1, 0.4, 0.1]
            }}
            transition={{ 
              duration: 5 + Math.random() * 5, 
              repeat: Infinity, 
              ease: 'easeInOut' 
            }}
          />
        ))}
      </div>

      {/* Scroll Down Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3 cursor-pointer group"
        onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <span className="font-grotesk text-[0.6rem] tracking-[0.3em] uppercase text-ivory/40 group-hover:text-copper transition-colors">Discover</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-copper to-transparent relative">
          <motion.div 
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-0 left-[-1.5px] w-1 h-1 bg-white rounded-full"
          />
        </div>
      </motion.div>

    </section>
  );
};

export default HeroSection;