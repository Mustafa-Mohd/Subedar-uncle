import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { Send, Phone, User, MessageCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Replace this with your Google Apps Script Web App URL
  const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzQUgFWRZeYhth8CzpTLExEnLBx6xZbAyPF01h73eLx2H8fteRzjgpF4QzG6xflVg6qoA/exec";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      // Create FormData to send
      const formDataToSend = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        formDataToSend.append(key, value);
      });

      // Send to Google Apps Script
      const response = await fetch(SCRIPT_URL, {
        method: 'POST',
        body: formDataToSend,
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', phone: '', subject: 'General Inquiry', message: '' });
      } else {
        throw new Error('Failed to submit form');
      }
    } catch (err) {
      console.error('Submission error:', err);
      setError('Something went wrong. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="bg-ivory dark:bg-charcoal text-charcoal dark:text-white selection:bg-copper selection:text-white min-h-screen transition-colors duration-500">
      <Navigation />

      <main className="pt-20">
        {/* Contact Hero */}
        <section className="relative py-24 lg:py-32 overflow-hidden bg-white dark:bg-charcoal transition-colors duration-500">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

              {/* Left: Brand Message & New Contact Info */}
              <div className="space-y-12">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <span className="w-8 h-px bg-copper" />
                    <span className="section-label text-copper">Get in Touch</span>
                  </div>
                  <h1 className="font-display font-light mb-8 text-charcoal dark:text-white" style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', lineHeight: 1.1 }}>
                    Let's Build Your <br />
                    <span className="italic" style={{ color: 'hsl(var(--copper))' }}>Vision</span> Together
                  </h1>
                  <p className="font-body text-lg leading-relaxed max-w-md text-charcoal/60 dark:text-white/60">
                    Nexlane Interiors is dedicated to transforming spaces with precision and style.
                    Reach out to our principal consultant for a bespoke project discussion.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="p-6 rounded-2xl bg-ivory dark:bg-white/5 border border-charcoal/5 dark:border-white/5 shadow-soft">
                    <div className="w-10 h-10 rounded-xl bg-copper/10 flex items-center justify-center text-copper mb-4">
                      <User className="w-5 h-5" />
                    </div>
                    <h3 className="font-grotesk text-[0.6rem] tracking-widest uppercase text-charcoal/40 dark:text-white/40 mb-1">Contact Person</h3>
                    <p className="font-display text-xl text-charcoal dark:text-white">Ansar Ahmed</p>
                  </div>

                  <div className="p-6 rounded-2xl bg-ivory dark:bg-white/5 border border-charcoal/5 dark:border-white/5 shadow-soft">
                    <div className="w-10 h-10 rounded-xl bg-copper/10 flex items-center justify-center text-copper mb-4">
                      <Phone className="w-5 h-5" />
                    </div>
                    <h3 className="font-grotesk text-[0.6rem] tracking-widest uppercase text-charcoal/40 dark:text-white/40 mb-1">Phone & WhatsApp</h3>
                    <a href="tel:+919118861979" className="font-display text-xl text-charcoal dark:text-white hover:text-copper dark:hover:text-copper transition-colors">+91 91188 61979</a>
                  </div>
                </div>

                <div className="pt-4">
                  <h3 className="font-grotesk text-xs tracking-widest uppercase text-charcoal/40 dark:text-white/40 mb-6">Connect with Nexlane</h3>
                  <div className="flex gap-4">
                    {['Instagram', 'LinkedIn'].map((platform) => (
                      <a
                        key={platform}
                        href="#"
                        className="px-6 py-2 rounded-full border border-ivory-dark dark:border-white/10 font-body text-sm hover:bg-copper hover:border-copper hover:text-white transition-all text-charcoal/70 dark:text-white/70"
                      >
                        {platform}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right: Form */}
              <div className="relative">
                <div className="absolute inset-0 bg-copper/5 blur-3xl rounded-full" />
                <div className="relative bg-ivory dark:bg-white/5 p-8 lg:p-12 rounded-3xl border border-ivory-dark dark:border-white/10 shadow-medium">
                  {submitted ? (
                    <div className="py-20 text-center space-y-6">
                      <div className="w-20 h-20 bg-copper/10 rounded-full flex items-center justify-center mx-auto">
                        <Send className="w-8 h-8 text-copper" />
                      </div>
                      <h2 className="font-display text-3xl text-charcoal dark:text-white">Thank You!</h2>
                      <p className="font-body text-charcoal/60 dark:text-white/60">Your message has been sent. Ansar Ahmed will contact you shortly.</p>
                      <button
                        onClick={() => setSubmitted(false)}
                        className="text-copper font-grotesk text-sm tracking-widest uppercase border-b border-copper"
                      >
                        Send another message
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="font-grotesk text-[10px] tracking-widest uppercase text-charcoal/40 dark:text-white/40">Full Name</label>
                          <input
                            required
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="Your Name"
                            className="w-full bg-white dark:bg-charcoal border-b border-ivory-dark dark:border-white/10 py-3 focus:border-copper outline-none transition-colors font-body text-charcoal dark:text-white"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="font-grotesk text-[10px] tracking-widest uppercase text-charcoal/40 dark:text-white/40">Email Address</label>
                          <input
                            required
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="email@example.com"
                            className="w-full bg-white dark:bg-charcoal border-b border-ivory-dark dark:border-white/10 py-3 focus:border-copper outline-none transition-colors font-body text-charcoal dark:text-white"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="font-grotesk text-[10px] tracking-widest uppercase text-charcoal/40 dark:text-white/40">Subject</label>
                        <select
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          className="w-full bg-white dark:bg-charcoal border-b border-ivory-dark dark:border-white/10 py-3 focus:border-copper outline-none transition-colors font-body text-charcoal dark:text-white appearance-none"
                        >
                          <option>General Inquiry</option>
                          <option>Project Consultation</option>
                          <option>Aluminium Works</option>
                          <option>Furniture Contract</option>
                        </select>
                      </div>

                      <div className="space-y-2">
                        <label className="font-grotesk text-[10px] tracking-widest uppercase text-charcoal/40 dark:text-white/40">Message</label>
                        <textarea
                          required
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          rows={4}
                          placeholder="Tell us about your project..."
                          className="w-full bg-white dark:bg-charcoal border-b border-ivory-dark dark:border-white/10 py-3 focus:border-copper outline-none transition-colors font-body text-charcoal dark:text-white resize-none"
                        />
                      </div>

                      {error && (
                        <div className="p-4 rounded-xl bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 text-xs font-grotesk tracking-wide text-center">
                          {error}
                        </div>
                      )}

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-5 rounded-xl bg-copper text-white font-grotesk text-sm font-bold tracking-widest uppercase hover:bg-copper-dark transition-all disabled:opacity-50 shadow-copper"
                      >
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                      </button>
                    </form>
                  )}
                </div>
              </div>

            </div>
          </div>
        </section>

        <section className="py-24 bg-ivory dark:bg-charcoal-dark transition-colors duration-500">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 text-center">
            <div className="max-w-2xl mx-auto">
              <h2 className="font-display font-light text-3xl text-charcoal dark:text-white mb-6">
                Nexlane Interiors <br />
                <span className="italic" style={{ color: 'hsl(var(--copper))' }}>Craftsmanship & Quality</span>
              </h2>
              <p className="font-body text-charcoal/60 dark:text-white/60 leading-relaxed">
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