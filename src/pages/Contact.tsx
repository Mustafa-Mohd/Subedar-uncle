import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { Phone, User, MessageCircle, ChevronDown, MapPin } from 'lucide-react';

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

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    location: '',
    services: [] as string[]
  });
  
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

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
  };

  return (
    <div className="bg-ivory dark:bg-charcoal text-charcoal dark:text-white selection:bg-copper selection:text-white min-h-screen transition-colors duration-500">
      <Navigation />

      <main className="pt-24 lg:pt-28">
        <section className="relative pb-16 lg:pb-20 overflow-visible bg-white dark:bg-charcoal transition-colors duration-500">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
              
              {/* Left Column (45%) */}
              <div className="lg:col-span-5 space-y-8">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="w-6 h-px bg-copper" />
                    <span className="section-label text-copper">Get in Touch</span>
                  </div>
                  <h1 className="font-display font-light mb-4 text-charcoal dark:text-white" style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', lineHeight: 1.1 }}>
                    Let's Build Your <br />
                    <span className="italic" style={{ color: 'hsl(var(--copper))' }}>Vision</span> Together
                  </h1>
                  <p className="font-body text-[0.95rem] leading-relaxed text-charcoal/60 dark:text-white/60">
                    Nexlane Interiors is dedicated to transforming spaces with precision and style. Reach out for a bespoke project discussion.
                  </p>
                </div>

                {/* Compact Horizontal Contact Cards */}
                <div className="flex flex-col gap-3 pt-2">
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-ivory dark:bg-white/5 border border-charcoal/5 dark:border-white/5 shadow-sm transition-all hover:shadow-md">
                    <div className="w-10 h-10 rounded-lg bg-copper/10 flex-shrink-0 flex items-center justify-center text-copper">
                      <User className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="font-grotesk text-[0.6rem] tracking-widest uppercase text-charcoal/40 dark:text-white/40 mb-0.5">Contact Person</h3>
                      <p className="font-display text-base text-charcoal dark:text-white">Ansar Ahmed</p>
                    </div>
                  </div>

                  <a href="tel:+919118861979" className="flex items-center gap-4 p-4 rounded-xl bg-ivory dark:bg-white/5 border border-charcoal/5 dark:border-white/5 shadow-sm transition-all hover:shadow-md group">
                    <div className="w-10 h-10 rounded-lg bg-copper/10 flex-shrink-0 flex items-center justify-center text-copper">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="font-grotesk text-[0.6rem] tracking-widest uppercase text-charcoal/40 dark:text-white/40 mb-0.5">Phone & WhatsApp</h3>
                      <p className="font-display text-base text-charcoal dark:text-white group-hover:text-copper transition-colors">+91 91188 61979</p>
                    </div>
                  </a>
                  
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-ivory dark:bg-white/5 border border-charcoal/5 dark:border-white/5 shadow-sm transition-all hover:shadow-md">
                    <div className="w-10 h-10 rounded-lg bg-copper/10 flex-shrink-0 flex items-center justify-center text-copper">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="font-grotesk text-[0.6rem] tracking-widest uppercase text-charcoal/40 dark:text-white/40 mb-0.5">Location</h3>
                      <p className="font-display text-base text-charcoal dark:text-white">Padmavathi Nagar, Borabanda Hyd</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column (55%) Form */}
              <div className="lg:col-span-7 relative z-10">
                <div className="absolute inset-0 bg-copper/5 blur-3xl rounded-full" />
                <div className="relative bg-ivory dark:bg-white/5 p-6 lg:p-8 rounded-2xl border border-ivory-dark dark:border-white/10 shadow-medium">
                  
                  <div className="mb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-charcoal/5 dark:border-white/5 pb-4">
                    <div>
                      <h2 className="font-display text-2xl text-charcoal dark:text-white mb-1">Book Consultation</h2>
                      <p className="font-body text-xs text-charcoal/50 dark:text-white/50">Get a callback from our design experts</p>
                    </div>
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
                          placeholder="e.g. John Doe"
                          className="w-full h-12 px-4 bg-white dark:bg-charcoal border border-ivory-dark dark:border-white/10 rounded-lg focus:border-copper focus:ring-1 focus:ring-copper outline-none transition-all font-body text-sm text-charcoal dark:text-white"
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
                          placeholder="e.g. +91 9876543210"
                          className="w-full h-12 px-4 bg-white dark:bg-charcoal border border-ivory-dark dark:border-white/10 rounded-lg focus:border-copper focus:ring-1 focus:ring-copper outline-none transition-all font-body text-sm text-charcoal dark:text-white"
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
                        placeholder="e.g. Jubilee Hills, Hyderabad"
                        className="w-full h-12 px-4 bg-white dark:bg-charcoal border border-ivory-dark dark:border-white/10 rounded-lg focus:border-copper focus:ring-1 focus:ring-copper outline-none transition-all font-body text-sm text-charcoal dark:text-white"
                      />
                    </div>

                    <div className="space-y-1.5 relative">
                      <label className="font-grotesk text-[9px] tracking-widest uppercase text-charcoal/50 dark:text-white/50">Select Services</label>
                      <div 
                        className="w-full h-12 px-4 flex items-center justify-between bg-white dark:bg-charcoal border border-ivory-dark dark:border-white/10 rounded-lg cursor-pointer outline-none transition-all hover:border-copper/50"
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      >
                        <span className={`font-body text-sm truncate ${formData.services.length === 0 ? "text-charcoal/40 dark:text-white/40" : "text-charcoal dark:text-white"}`}>
                          {formData.services.length > 0 ? `${formData.services.length} service(s) selected` : 'Select required services'}
                        </span>
                        <ChevronDown className={`w-4 h-4 text-charcoal/40 dark:text-white/40 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                      </div>
                      
                      {isDropdownOpen && (
                        <div className="absolute z-20 w-full mt-1 bg-white dark:bg-charcoal border border-ivory-dark dark:border-white/10 rounded-lg shadow-xl max-h-56 overflow-y-auto">
                          {ALL_SERVICES.map(service => (
                            <div 
                              key={service} 
                              className="flex items-center gap-3 px-4 py-2.5 hover:bg-ivory dark:hover:bg-white/5 cursor-pointer border-b border-ivory-dark/50 dark:border-white/5 last:border-0 transition-colors"
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
                      className="w-full mt-2 h-12 rounded-lg bg-copper text-white font-grotesk text-[0.7rem] font-bold tracking-widest uppercase hover:bg-copper-dark transition-all shadow-copper flex items-center justify-center gap-2"
                    >
                      <MessageCircle className="w-4 h-4" />
                      Book Now via WhatsApp
                    </button>
                  </form>
                </div>
              </div>

            </div>
          </div>
        </section>

        <section className="py-16 bg-ivory dark:bg-charcoal-dark transition-colors duration-500">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 text-center">
            <div className="max-w-2xl mx-auto">
              <h2 className="font-display font-light text-2xl text-charcoal dark:text-white mb-4">
                Nexlane Interiors <br />
                <span className="italic" style={{ color: 'hsl(var(--copper))' }}>Craftsmanship & Quality</span>
              </h2>
              <p className="font-body text-sm text-charcoal/60 dark:text-white/60 leading-relaxed">
                We are committed to delivering high-quality interior solutions across the region.
                Our focus remains on precision aluminium work and bespoke furniture design.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Contact;