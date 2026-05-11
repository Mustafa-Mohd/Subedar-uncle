import React from 'react';
import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const FloatingWhatsApp = () => {
  const phoneNumber = "919118861979";
  const message = "Hello Ansar Ahmed, I'm interested in Nexlane Interiors services.";
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <motion.a
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-[100] group"
      aria-label="Contact Ansar Ahmed on WhatsApp"
    >
      <div className="relative flex items-center justify-center">
        {/* Pulsing background rings */}
        <div className="absolute inset-0 rounded-full bg-green-500/20 animate-ping" style={{ animationDuration: '3s' }} />
        <div className="absolute inset-0 rounded-full bg-green-500/10 animate-pulse" />
        
        {/* The Button */}
        <div className="relative w-14 h-14 rounded-full bg-green-500 flex items-center justify-center shadow-hard transition-transform group-hover:scale-110 active:scale-95">
          <MessageCircle className="w-7 h-7 text-white" />
        </div>

        {/* Tooltip */}
        <div className="absolute right-full mr-4 px-4 py-2 bg-white border border-ivory-dark rounded-xl opacity-0 translate-x-[10px] group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 whitespace-nowrap pointer-events-none shadow-medium">
          <div className="flex flex-col items-end">
            <span className="font-grotesk text-[0.6rem] tracking-widest uppercase text-charcoal/40 mb-0.5">Contact Person</span>
            <span className="font-display text-sm text-charcoal">Ansar Ahmed</span>
          </div>
        </div>
      </div>
    </motion.a>
  );
};

export default FloatingWhatsApp;
