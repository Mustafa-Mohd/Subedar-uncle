import React, { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { ArrowUp } from 'lucide-react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const total = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = total > 0 ? (scrollY / total) * 100 : 0;
      
      setProgress(currentProgress);
      setIsVisible(scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const radius = 22;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <div 
      className={`fixed bottom-8 left-8 z-[45] transition-all duration-500 transform ${
        isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-50 pointer-events-none'
      }`}
    >
      <button
        onClick={scrollToTop}
        className="group relative w-14 h-14 rounded-full bg-white dark:bg-charcoal flex items-center justify-center shadow-hard border border-ivory-dark dark:border-white/5 overflow-hidden transition-all active:scale-90"
        aria-label="Scroll to top"
      >
        <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none">
          <circle
            cx="28"
            cy="28"
            r={radius}
            fill="transparent"
            stroke="currentColor"
            strokeWidth="2"
            className="text-charcoal/[0.05] dark:text-white/[0.05]"
          />
          <circle
            cx="28"
            cy="28"
            r={radius}
            fill="transparent"
            stroke="hsl(var(--copper))"
            strokeWidth="2"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            className="transition-all duration-200"
          />
        </svg>

        <ArrowUp className="w-5 h-5 text-charcoal dark:text-white group-hover:text-copper transition-colors duration-300 transform group-hover:-translate-y-1" />
        
        <div className="absolute right-full mr-4 px-3 py-1.5 bg-white dark:bg-charcoal border border-ivory-dark dark:border-white/5 rounded-lg opacity-0 translate-x-[10px] group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 whitespace-nowrap pointer-events-none shadow-medium">
          <span className="font-grotesk text-[10px] tracking-widest uppercase text-charcoal/80 dark:text-white/80">Scroll to top</span>
        </div>
      </button>
    </div>
  );
};

export default ScrollToTop;