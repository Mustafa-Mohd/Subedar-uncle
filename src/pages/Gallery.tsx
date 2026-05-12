import React, { useEffect, useRef, useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { motion, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Maximize2, X } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const GALLERY_IMAGES = [
  "https://res.cloudinary.com/dvkmvwfkc/image/upload/q_auto/f_auto/v1778589292/SAVE_20251126_165241_zokqci.jpg",
  "https://res.cloudinary.com/dvkmvwfkc/image/upload/q_auto/f_auto/v1778589287/SAVE_20251122_120538_ai9adw.jpg",
  "https://res.cloudinary.com/dvkmvwfkc/image/upload/q_auto/f_auto/v1778589287/SAVE_20251122_120545_bhp6ry.jpg",
  "https://res.cloudinary.com/dvkmvwfkc/image/upload/q_auto/f_auto/v1778589290/SAVE_20251126_165248_zrtm8q.jpg",
  "https://res.cloudinary.com/dvkmvwfkc/image/upload/q_auto/f_auto/v1778589286/SAVE_20251122_120556_jyyu7t.jpg",
  "https://res.cloudinary.com/dvkmvwfkc/image/upload/q_auto/f_auto/v1778589284/IMG-20251030-WA0028_c9vt5y.jpg",
  "https://res.cloudinary.com/dvkmvwfkc/image/upload/q_auto/f_auto/v1778589283/IMG-20250127-WA0019_1_umb9fo.jpg",
  "https://res.cloudinary.com/dvkmvwfkc/image/upload/q_auto/f_auto/v1778589282/IMG-20250127-WA0016_1_jbbbf3.jpg",
  "https://res.cloudinary.com/dvkmvwfkc/image/upload/q_auto/f_auto/v1778589282/carpenterbabu-20250726-0007_twuw3q.jpg",
  "https://res.cloudinary.com/dvkmvwfkc/image/upload/q_auto/f_auto/v1778589282/IMG_20260402_170603_909_gphvfz.jpg",
  "https://res.cloudinary.com/dvkmvwfkc/image/upload/q_auto/f_auto/v1778589281/ar_interiorbyabhay-20250816-0008_v6khag.jpg",
  "https://res.cloudinary.com/dvkmvwfkc/image/upload/q_auto/f_auto/v1778589281/ar_interiorbyabhay-20250816-0004_ejlrna.jpg",
  "https://res.cloudinary.com/dvkmvwfkc/image/upload/q_auto/f_auto/v1778589281/ar_interiorbyabhay-20250816-0007_fvka0r.jpg",
  "https://res.cloudinary.com/dvkmvwfkc/image/upload/q_auto/f_auto/v1778589281/IMG-20250127-WA0003_1_u8kuiq.jpg",
  "https://res.cloudinary.com/dvkmvwfkc/image/upload/q_auto/f_auto/v1778589280/ar_interiorbyabhay-20250816-0005_admqja.jpg",
  "https://res.cloudinary.com/dvkmvwfkc/image/upload/q_auto/f_auto/v1778589280/ar_interiorbyabhay-20250816-0009_moz2o9.jpg",
  "https://res.cloudinary.com/dvkmvwfkc/image/upload/q_auto/f_auto/v1778589280/ar_interiorbyabhay-20250816-0006_wq22bh.jpg",
  "https://res.cloudinary.com/dvkmvwfkc/image/upload/q_auto/f_auto/v1778589280/ar_interiorbyabhay-20250816-0002_e23yri.jpg",
  "https://res.cloudinary.com/dvkmvwfkc/image/upload/q_auto/f_auto/v1778589280/IMG-20250127-WA0002_1_sv3m4a.jpg",
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(headerRef.current?.children ?? [],
        { y: 50, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 1, stagger: 0.15, ease: 'power3.out',
          scrollTrigger: { trigger: headerRef.current, start: 'top 80%' },
        }
      );

      gsap.fromTo('.gallery-item',
        { y: 60, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.8, stagger: 0.05, ease: 'power3.out',
          scrollTrigger: { trigger: gridRef.current, start: 'top 85%' },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="bg-ivory text-charcoal selection:bg-copper selection:text-white min-h-screen">
      <Navigation />
      
      <main className="pt-32 pb-20 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          
          {/* Header */}
          <div ref={headerRef} className="text-center mb-20">
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="w-8 h-px bg-copper" />
              <span className="section-label text-copper uppercase tracking-[0.2em]">Our Portfolio</span>
              <span className="w-8 h-px bg-copper" />
            </div>
            
            <h1 className="font-display font-light mb-8 text-charcoal" style={{ fontSize: 'clamp(3rem, 7vw, 5.5rem)', lineHeight: 1.1 }}>
              Project <span className="italic" style={{ color: 'hsl(var(--copper))' }}>Gallery</span>
            </h1>
            
            <p className="font-body text-lg leading-relaxed max-w-2xl mx-auto text-charcoal/60">
              A curated collection of our finest works across residential and commercial spaces. 
              Witness the precision and artistry we bring to every project.
            </p>
          </div>

          {/* Gallery Grid */}
          {GALLERY_IMAGES.length > 0 ? (
            <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {GALLERY_IMAGES.map((src, index) => (
                <motion.div
                  key={index}
                  className="gallery-item relative aspect-square overflow-hidden rounded-2xl group cursor-pointer bg-white border border-ivory-dark shadow-soft hover:shadow-hard transition-shadow duration-500"
                  whileHover={{ y: -5 }}
                  onClick={() => setSelectedImage(src)}
                >
                  <img 
                    src={src} 
                    alt={`Project ${index + 1}`} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-charcoal/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/30 transform scale-50 group-hover:scale-100 transition-transform duration-500">
                      <Maximize2 className="w-5 h-5" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-32 bg-white rounded-3xl border border-ivory-dark shadow-soft">
              <p className="font-body text-charcoal/40 italic">
                Our portfolio is currently being updated with our latest projects. <br />
                Please check back soon to see our recent work.
              </p>
            </div>
          )}
        </div>
      </main>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-charcoal/95 backdrop-blur-xl flex items-center justify-center p-6 lg:p-20"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-10 right-10 text-white/50 hover:text-white transition-colors p-2"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-8 h-8" />
            </button>
            
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-full max-h-full rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={selectedImage} 
                alt="Enlarged project" 
                className="max-w-full max-h-[85vh] object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Gallery;
