import React, { useState, useEffect } from 'react';
import { X, MessageCircle, ChevronDown } from 'lucide-react';

const ALL_SERVICES = [
  'POP / Gypsum False Ceiling',
  'PVC / WPC / Fluted Panels',
  'Grid / Thermocol Ceiling',
  'Wall Moulding & Design',
  'Electrical Solutions',
  'Professional Painting',
  'Wallpaper / Customizable',
  'Invisible Grills',
  'Complete Wooden Work',
  'Kitchen Modular Work',
  '2D Drawings',
  '3D Visualisation'
];

const ContactPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasBeenDismissed, setHasBeenDismissed] = useState(false);
  
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    location: '',
    services: [] as string[]
  });
  
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    // Only set timer if not dismissed
    if (hasBeenDismissed) return;
    
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, [hasBeenDismissed]);

  if (!isVisible) return null;

  const handleClose = () => {
    setIsVisible(false);
    setHasBeenDismissed(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const toggleService = (service: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service]
    }));
  };

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    let text = `Hello Ansar Ahmed,\n\nI would like to book a free consultation.\n\n`;
    text += `*Name:* ${formData.name}\n`;
    text += `*Phone:* ${formData.phone}\n`;
    text += `*Location:* ${formData.location}\n`;
    
    if (formData.services.length > 0) {
      text += `\n*Interested Services:*\n`;
      formData.services.forEach(s => {
        text += `- ${s}\n`;
      });
    }

    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/919118861979?text=${encodedText}`, '_blank');
    handleClose(); // Close popup after submit
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-charcoal/80 backdrop-blur-sm animate-in fade-in duration-500">
      <div className="relative w-full max-w-lg bg-ivory dark:bg-charcoal p-6 sm:p-8 rounded-2xl shadow-2xl border border-charcoal/40 dark:border-white/30 animate-in zoom-in-95 duration-500">
        <button 
          onClick={handleClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/5 transition-colors text-charcoal/60 dark:text-white/60 hover:text-charcoal dark:hover:text-white"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-6">
          <h2 className="font-display text-2xl text-charcoal dark:text-white mb-1">Let's Connect</h2>
          <p className="font-body text-xs text-charcoal/60 dark:text-white/60">Get a free consultation from our design experts</p>
        </div>

        <form onSubmit={handleWhatsAppSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="font-grotesk text-[9px] tracking-widest uppercase text-charcoal/50 dark:text-white/50">Your Name</label>
              <input
                required
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full h-11 px-4 bg-white dark:bg-charcoal-dark border border-charcoal/40 dark:border-white/30 rounded-lg focus:border-copper focus:ring-1 focus:ring-copper outline-none transition-all font-body text-sm text-charcoal dark:text-white"
              />
            </div>
            
            <div className="space-y-1.5">
              <label className="font-grotesk text-[9px] tracking-widest uppercase text-charcoal/50 dark:text-white/50">Phone Number</label>
              <input
                required
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full h-11 px-4 bg-white dark:bg-charcoal-dark border border-charcoal/40 dark:border-white/30 rounded-lg focus:border-copper focus:ring-1 focus:ring-copper outline-none transition-all font-body text-sm text-charcoal dark:text-white"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="font-grotesk text-[9px] tracking-widest uppercase text-charcoal/50 dark:text-white/50">Your Location</label>
            <input
              required
              type="text"
              name="location"
              value={formData.location}
              onChange={handleInputChange}
              className="w-full h-11 px-4 bg-white dark:bg-charcoal-dark border border-charcoal/40 dark:border-white/30 rounded-lg focus:border-copper focus:ring-1 focus:ring-copper outline-none transition-all font-body text-sm text-charcoal dark:text-white"
            />
          </div>

          <div className="space-y-1.5 relative">
            <label className="font-grotesk text-[9px] tracking-widest uppercase text-charcoal/50 dark:text-white/50">Select Services</label>
            <div 
              className="w-full h-11 px-4 flex items-center justify-between bg-white dark:bg-charcoal-dark border border-charcoal/40 dark:border-white/30 rounded-lg cursor-pointer outline-none transition-all hover:border-copper/50"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <span className={`font-body text-sm truncate ${formData.services.length === 0 ? "text-charcoal/40 dark:text-white/40" : "text-charcoal dark:text-white"}`}>
                {formData.services.length > 0 ? `${formData.services.length} service(s) selected` : 'Select required services'}
              </span>
              <ChevronDown className={`w-4 h-4 text-charcoal/40 dark:text-white/40 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
            </div>
            
            {isDropdownOpen && (
              <div className="absolute z-20 w-full mt-1 bg-white dark:bg-charcoal-dark border border-charcoal/40 dark:border-white/30 rounded-lg shadow-xl max-h-48 overflow-y-auto">
                {ALL_SERVICES.map(service => (
                  <div 
                    key={service} 
                    className="flex items-center gap-3 px-4 py-2 hover:bg-ivory dark:hover:bg-white/5 cursor-pointer border-b border-charcoal/5 dark:border-white/5 last:border-0 transition-colors"
                    onClick={() => toggleService(service)}
                  >
                    <div className={`w-4 h-4 rounded flex-shrink-0 border flex items-center justify-center transition-colors ${formData.services.includes(service) ? 'bg-copper border-copper' : 'border-charcoal/30 dark:border-white/30'}`}>
                      {formData.services.includes(service) && <div className="w-2 h-2 bg-white rounded-sm" />}
                    </div>
                    <span className="font-body text-xs text-charcoal dark:text-white">{service}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          <button
            type="submit"
            className="w-full mt-4 h-11 rounded-lg bg-copper text-white font-grotesk text-[0.7rem] font-bold tracking-widest uppercase hover:bg-copper-dark transition-all shadow-copper flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-4 h-4" />
            Book Now via WhatsApp
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPopup;
