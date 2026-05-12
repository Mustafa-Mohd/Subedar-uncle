import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Linkedin, Phone, Mail, MapPin, ArrowRight } from 'lucide-react';

const Footer = () => {
  const year = new Date().getFullYear();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  const serviceLinks = [
    'POP / Gypsum False Ceiling',
    'PVC / WPC / Fluted Panels',
    'Wall Moulding & Design',
    'Kitchen Modular Work',
    'Complete Wooden Work',
    'Electricals & Painting',
  ];

  return (
    <footer className="relative overflow-hidden bg-white dark:bg-charcoal-dark border-t border-ivory-dark dark:border-white/5 transition-colors duration-500">
      {/* Decorative gradient accent line at top */}
      <div className="h-[2px] w-full" style={{ background: 'var(--gradient-copper)' }} />

      {/* Noise overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.02] dark:opacity-[0.05]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-14">
          
          {/* Brand column */}
          <div className="lg:col-span-2 space-y-6">
            <Link to="/" className="group w-fit block">
              <img 
                src="https://res.cloudinary.com/dvkmvwfkc/image/upload/q_auto/f_auto/v1778589282/IMG_20260505_234313_298_nwhxup.webp" 
                alt="Nexlane Interiors Logo" 
                className="h-12 w-12 rounded-full object-cover border border-charcoal/5 dark:border-white/10 transition-transform duration-500 group-hover:scale-105"
              />
            </Link>

            <p className="font-body text-sm leading-relaxed max-w-sm text-charcoal/50 dark:text-white/50">
              Redefining living and working spaces with precision craftsmanship, innovative design,
              and an unwavering commitment to excellence.
            </p>

            <div className="space-y-3">
              <div className="flex flex-col gap-1">
                <span className="font-grotesk text-[0.6rem] tracking-widest uppercase text-copper font-bold">Contact Person</span>
                <span className="font-display text-lg text-charcoal dark:text-white">Ansar Ahmed</span>
              </div>
              <a
                href="tel:+919118861979"
                className="flex items-center gap-3 group/link animated-underline w-fit text-charcoal/60 dark:text-white/60"
              >
                <Phone className="w-4 h-4 flex-shrink-0 text-copper" />
                <span className="font-body text-sm group-hover/link:text-copper transition-colors">+91 91188 61979</span>
              </a>
            </div>

            <div className="flex items-center gap-3">
              {[
                { icon: Instagram, href: '#' },
                { icon: Linkedin, href: '#' },
              ].map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 hover:-translate-y-0.5 bg-copper/5 border border-copper/10"
                >
                  <Icon className="w-4 h-4 text-copper" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-5">
            <h3 className="font-grotesk font-semibold text-xs tracking-[0.16em] uppercase text-copper">
              Navigation
            </h3>
            <ul className="space-y-3">
              {navLinks.map(link => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="animated-underline font-body text-sm transition-colors duration-300 hover:text-copper text-charcoal/60 dark:text-white/60"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-5">
            <h3 className="font-grotesk font-semibold text-xs tracking-[0.16em] uppercase text-copper">
              Services
            </h3>
            <ul className="space-y-3">
              {serviceLinks.map(s => (
                <li key={s}>
                  <span className="font-body text-sm text-charcoal/40 dark:text-white/40">
                    {s}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="rounded-2xl p-8 mb-12 bg-ivory dark:bg-white/5 shadow-soft">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <h4 className="font-display font-semibold mb-1 text-xl text-charcoal dark:text-white">
                Stay Inspired
              </h4>
              <p className="font-body text-sm text-charcoal/40 dark:text-white/40">
                Design trends, project reveals, and exclusive insights — delivered monthly.
              </p>
            </div>
            <div className="flex gap-3 flex-1 max-w-md">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-xl font-body text-sm outline-none transition-all duration-300 bg-white dark:bg-charcoal border border-ivory-dark dark:border-white/10 text-charcoal dark:text-white"
              />
              <button
                className="magnetic-btn flex items-center gap-2 px-5 py-3 rounded-xl font-grotesk text-sm font-medium text-white whitespace-nowrap shadow-copper"
                style={{ background: 'var(--gradient-copper)' }}
              >
                Subscribe <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-6 border-t border-ivory-dark dark:border-white/5">
          <p className="font-body text-xs text-charcoal/30 dark:text-white/30">
            © {year} Nexlane Interiors. All rights reserved.
          </p>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Service'].map(l => (
              <a key={l} href="#" className="font-body text-xs animated-underline transition-colors hover:text-copper text-charcoal/30 dark:text-white/30">
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;