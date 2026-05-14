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
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-10 flex flex-col justify-center min-h-screen py-20 lg:py-0">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center mt-10 lg:mt-0">
          
          {/* Left Column: Typography */}
          <div className="lg:col-span-7 xl:col-span-7 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <div className="flex items-center justify-center lg:justify-start gap-3 mb-6">
                <span className="w-10 h-px bg-copper" />
                <span className="font-grotesk text-[0.6rem] lg:text-[0.7rem] tracking-[0.4em] uppercase text-ivory/80 font-bold">
                  Est. 1997 • Bespoke Interiors
                </span>
              </div>

              <h1 
                className="font-display text-white leading-[1.1] mb-6 lg:mb-8"
                style={{ fontSize: 'clamp(2.2rem, 8vw, 4.8rem)' }}
              >
                Crafting Spaces That <br />
                <span className="italic font-light text-copper-light">Define Your Legacy</span>
              </h1>

              <p className="font-body text-ivory/70 text-base lg:text-xl leading-relaxed mb-8 lg:mb-10 max-w-xl mx-auto lg:mx-0">
                Nexlane Interiors merges architectural precision with luxury artistry to create 
                living environments that are as unique as your own story.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 lg:gap-5">
                <Link
                  to="/gallery"
                  className="w-full sm:w-auto group relative flex items-center justify-center gap-3 px-8 lg:px-10 py-4 lg:py-5 bg-charcoal text-white rounded-xl overflow-hidden transition-all duration-500 hover:shadow-hard"
                >
                  <span className="relative z-10 font-grotesk text-[0.7rem] lg:text-[0.8rem] tracking-widest uppercase font-bold">Discover Collection</span>
                  <ArrowRight className="relative z-10 w-4 h-4 transition-transform duration-500 group-hover:translate-x-1" />
                </Link>

                <Link
                  to="/contact"
                  className="w-full sm:w-auto group flex items-center justify-center gap-3 px-8 lg:px-10 py-4 lg:py-5 bg-ivory-dark/40 backdrop-blur-md border border-charcoal/10 text-charcoal rounded-xl transition-all duration-500 hover:bg-ivory-dark/60"
                >
                  <span className="font-grotesk text-[0.7rem] lg:text-[0.8rem] tracking-widest uppercase font-bold text-charcoal/80">Start Consultation</span>
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Right Column: 3D Furniture Model & Counters */}
          <div className="lg:col-span-5 xl:col-span-5 flex flex-col items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="w-full aspect-square max-w-[300px] lg:max-w-[450px] relative mb-8 lg:mb-12"
            >
              {/* @ts-ignore - model-viewer is a custom element */}
              <model-viewer
                src="https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/SheenChair/glTF-Binary/SheenChair.glb"
                alt="Luxury Furniture Model"
                auto-rotate
                camera-controls
                shadow-intensity="2"
                environment-image="neutral"
                exposure="1.5"
                interaction-prompt="auto"
                style={{ width: '100%', height: '100%', backgroundColor: 'transparent', cursor: 'grab' }}
              >
              </model-viewer>
              
              {/* Subtle background glow behind the model */}
              <div className="absolute inset-0 bg-copper/5 blur-[60px] lg:blur-[100px] rounded-full -z-10" />
            </motion.div>

            {/* Counters Row */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex items-center gap-6 lg:gap-12 w-full justify-center border-t border-white/10 pt-6 lg:pt-8"
            >
              {stats.map((stat, i) => (
                <div key={i} className="text-center group">
                  <div className="font-display text-xl lg:text-3xl text-white font-light mb-1 group-hover:text-copper transition-colors duration-300">
                    {stat.value}
                  </div>
                  <div className="font-grotesk text-[0.5rem] lg:text-[0.6rem] tracking-[0.2em] uppercase text-ivory/40 whitespace-nowrap">
                    {stat.sub.split(' ')[0]} <br className="hidden lg:block" /> {stat.sub.split(' ').slice(1).join(' ')}
                  </div>
                </div>
              ))}
            </motion.div>
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