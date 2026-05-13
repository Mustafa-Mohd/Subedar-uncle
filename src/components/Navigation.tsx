import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

import { ThemeToggle } from './ThemeToggle';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Story', path: '/story' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 py-4 ${
        isScrolled ? 'lg:py-3' : 'lg:py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div 
          className={`relative flex justify-between items-center px-6 lg:px-8 py-3 rounded-2xl transition-all duration-500 border ${
            isScrolled 
              ? 'bg-white/80 dark:bg-charcoal/80 backdrop-blur-lg border-charcoal/5 dark:border-white/5 shadow-soft' 
              : 'bg-transparent border-transparent'
          }`}
        >
          {/* Logo */}
          <Link to="/" className="group">
            <img 
              src="https://res.cloudinary.com/dvkmvwfkc/image/upload/q_auto/f_auto/v1778589282/IMG_20260505_234313_298_nwhxup.webp" 
              alt="Nexlane Interiors Logo" 
              className="h-10 lg:h-12 w-10 lg:w-12 rounded-full object-cover border border-charcoal/5 dark:border-white/5 transition-all duration-500 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-10">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`relative font-grotesk text-[0.8rem] tracking-widest uppercase transition-colors duration-300 ${
                  location.pathname === item.path ? 'text-copper' : 'text-charcoal/60 dark:text-white/60 hover:text-charcoal dark:hover:text-white'
                }`}
              >
                {item.name}
                {location.pathname === item.path && (
                  <motion.div 
                    layoutId="nav-underline"
                    className="absolute -bottom-1 left-0 w-full h-[1.5px] bg-copper"
                  />
                )}
              </Link>
            ))}
          </div>

          {/* CTA & Theme Toggle */}
          <div className="hidden lg:flex items-center gap-4">
            <ThemeToggle />
            <Link
              to="/contact"
              className="group flex items-center gap-2 px-6 py-2.5 rounded-xl text-[0.75rem] font-grotesk font-bold tracking-widest uppercase transition-all duration-500 bg-charcoal dark:bg-white text-white dark:text-charcoal hover:bg-copper dark:hover:bg-copper dark:hover:text-white"
            >
              Start Project
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-500 group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Mobile Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-charcoal/70 dark:text-white/70 hover:text-copper transition-colors"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 px-6 mt-4 lg:hidden"
          >
            <div className="bg-white/95 dark:bg-charcoal/95 backdrop-blur-xl border border-charcoal/5 dark:border-white/5 rounded-2xl p-8 shadow-hard space-y-6">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`block font-display text-2xl font-light tracking-wide ${
                    location.pathname === item.path ? 'text-copper' : 'text-charcoal/70 dark:text-white/70'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4">
                <Link
                  to="/contact"
                  className="flex items-center justify-center gap-2 w-full py-4 rounded-xl bg-copper text-white font-grotesk text-xs tracking-widest uppercase font-bold"
                  onClick={() => setIsOpen(false)}
                >
                  Book Consultation <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation;