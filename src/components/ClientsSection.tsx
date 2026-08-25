import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const CLIENTS_DATA = [
  {
    category: "Energy & Petrochemicals",
    clients: [
      { name: "Saudi Aramco", link: "https://www.aramco.com" },
      { name: "SATORP", link: "https://www.satorp.com.sa" },
      { name: "S-Chem", link: "https://www.s-chem.com" },
      { name: "NMDC Energy", link: "https://www.nmdc-group.com" },
      { name: "Advanced Petrochemical", link: "https://www.advancedpetrochem.com" }
    ]
  },
  {
    category: "Giga-Projects & Infra",
    clients: [
      { name: "NEOM", link: "https://www.neom.com" },
      { name: "Ma'aden", link: "https://www.maaden.com.sa" },
      { name: "Red Sea Aluminium", link: "https://www.redsea-al.com" },
      { name: "OXAGON", link: "https://www.oxagon.com" },
      { name: "Makkah Transit", link: "https://www.mmrtc.com.sa" }
    ]
  },
  {
    category: "Water & Utilities",
    clients: [
      { name: "NWC", link: "https://www.nwc.com.sa" },
      { name: "SWA", link: "https://www.swa.gov.sa" },
      { name: "TWESCO", link: "https://www.twesco.com.sa" },
      { name: "TAQAAT", link: "https://www.taqaat.com" },
      { name: "SEEC", link: "https://www.seec.gov.sa" },
      { name: "MARAFIQ", link: "https://www.marafiq.com.sa" }
    ]
  },
  {
    category: "Government & Financial",
    clients: [
      { name: "SAMA", link: "https://www.sama.gov.sa" },
      { name: "Mawani", link: "https://www.mawani.gov.sa" },
      { name: "RCRC", link: "https://www.rcrc.gov.sa" },
      { name: "GAMI", link: "https://www.gami.gov.sa" }
    ]
  },
  {
    category: "EPC & Engineering",
    clients: [
      { name: "Worley", link: "https://www.worley.com" },
      { name: "Wood Plc", link: "https://www.woodplc.com" },
      { name: "SLFE", link: "https://www.slfe.com" },
      { name: "KBR", link: "https://www.kbr.com" },
      { name: "IDOM", link: "https://www.idom.com" },
      { name: "Siemens", link: "https://www.siemens.com" },
      { name: "L&T Energy", link: "https://www.larsentoubro.com" },
      { name: "Samsung", link: "https://www.samsungengineering.com" },
      { name: "Doosan", link: "https://www.doosanenerbility.com" }
    ]
  },
  {
    category: "Private Sector",
    clients: [
      { name: "The Ritz-Carlton", link: "https://www.ritzcarlton.com" },
      { name: "Red Sea Global", link: "https://www.redseaglobal.com" },
      { name: "Amazon", link: "https://www.amazon.com" }
    ]
  }
];

const MarqueeRow = ({ category, clients, direction = 1, speed = 40 }: { category: string, clients: any[], direction?: number, speed?: number }) => {
  return (
    <div className="flex flex-col md:flex-row items-center border-b border-copper/10 dark:border-white/5 group">
      {/* Side Heading */}
      <div className="w-full md:w-[300px] flex-shrink-0 py-6 px-6 md:px-10 border-b md:border-b-0 md:border-r border-copper/10 dark:border-white/5 bg-white/50 dark:bg-white/5 backdrop-blur-sm z-10 transition-colors group-hover:bg-copper/5">
        <h3 className="font-grotesk font-medium text-lg text-charcoal dark:text-white flex items-center justify-between">
          {category}
          <span className="w-2 h-2 rounded-full bg-copper/40 group-hover:bg-copper transition-colors" />
        </h3>
      </div>

      {/* Marquee Track */}
      <div className="relative w-full overflow-hidden flex items-center h-24 sm:h-32 bg-ivory/30 dark:bg-charcoal/30">
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-ivory dark:from-charcoal to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-ivory dark:from-charcoal to-transparent z-10 pointer-events-none" />
        
        <motion.div
          className="flex whitespace-nowrap gap-8 px-4"
          animate={{ x: direction === 1 ? [0, -1000] : [-1000, 0] }}
          transition={{ repeat: Infinity, duration: speed, ease: "linear" }}
          style={{ width: "fit-content" }}
          whileHover={{ animationPlayState: "paused" }}
        >
          {/* Duplicate clients arrays to create seamless loop */}
          {[...clients, ...clients, ...clients, ...clients].map((client, idx) => (
            <a
              key={idx}
              href={client.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group/item relative flex-shrink-0 flex items-center justify-center bg-white dark:bg-[#2A2A2A] border border-copper/10 dark:border-white/5 hover:border-copper/50 rounded-xl px-6 py-4 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              style={{ width: "180px", height: "80px" }}
            >
              <img
                src={`https://ui-avatars.com/api/?name=${encodeURIComponent(client.name)}&background=random&color=fff&size=150&font-size=0.33&bold=true`}
                alt={`${client.name} logo`}
                className="max-h-full max-w-full object-contain filter grayscale group-hover/item:grayscale-0 transition-all duration-500 opacity-80 group-hover/item:opacity-100"
              />
              <div className="absolute -bottom-8 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300 text-xs font-grotesk font-medium text-copper bg-white dark:bg-[#1A1A1A] px-3 py-1 rounded shadow-md pointer-events-none">
                {client.name}
              </div>
            </a>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

const ClientsSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const headerY = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section ref={containerRef} className="py-24 bg-ivory dark:bg-charcoal transition-colors duration-500 overflow-hidden relative">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(ellipse_at_top_right,rgba(184,115,51,0.05),transparent_50%)] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/2 h-full bg-[radial-gradient(ellipse_at_bottom_left,rgba(184,115,51,0.05),transparent_50%)] pointer-events-none" />
      
      <div className="max-w-[1400px] mx-auto">
        <motion.div 
          style={{ y: headerY }}
          className="text-center mb-20 px-6"
        >
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="w-8 h-px bg-copper" />
            <span className="section-label text-copper uppercase tracking-[0.2em] text-xs font-bold font-grotesk">Our Partners</span>
            <span className="w-8 h-px bg-copper" />
          </div>
          <h2
            className="font-display font-light text-charcoal dark:text-white mb-6"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
          >
            Trusted by the <span className="italic text-copper">Best</span>.
          </h2>
          <p className="font-body text-charcoal/60 dark:text-white/60 max-w-2xl mx-auto text-sm sm:text-base">
            Collaborating with industry leaders across the region to deliver uncompromising quality and absolute precision in every project.
          </p>
        </motion.div>

        <div className="border-t border-copper/10 dark:border-white/5">
          {CLIENTS_DATA.map((group, idx) => (
            <MarqueeRow 
              key={idx} 
              category={group.category} 
              clients={group.clients} 
              direction={idx % 2 === 0 ? 1 : -1} 
              speed={45 + (idx * 5)} // varied speeds for organic feel
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
