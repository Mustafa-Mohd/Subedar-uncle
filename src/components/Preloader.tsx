import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface PreloaderProps {
  onComplete: () => void;
}

const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const preloaderRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    gsap.set(logoRef.current, { y: 60, opacity: 0 });
    gsap.set(lineRef.current, { scaleX: 0, transformOrigin: 'left' });
    gsap.set(progressRef.current, { scaleX: 0, transformOrigin: 'left' });

    tl
      .to(logoRef.current, {
        duration: 1.2,
        y: 0,
        opacity: 1,
        ease: 'power4.out',
      })
      .to(lineRef.current, {
        duration: 0.8,
        scaleX: 1,
        ease: 'power3.inOut',
      }, '-=0.4')
      .to(progressRef.current, {
        duration: 2,
        scaleX: 1,
        ease: 'power2.inOut',
      }, '-=0.2')
      .to(overlayRef.current, {
        duration: 0.6,
        scaleY: 0,
        transformOrigin: 'bottom',
        ease: 'power3.inOut',
      }, '+=0.3')
      .to(preloaderRef.current, {
        duration: 0.8,
        yPercent: -100,
        ease: 'power4.inOut',
        onComplete,
      }, '-=0.1');

    return () => { tl.kill(); };
  }, [onComplete]);

  return (
    <div
      ref={preloaderRef}
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-ivory dark:bg-charcoal transition-colors duration-500"
    >
      {/* Noise texture */}
      <div className="absolute inset-0 opacity-[0.04] dark:opacity-[0.08]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Decorative corner lines */}
      <div className="absolute top-8 left-8 w-16 h-16 border-l border-t border-copper/20" />
      <div className="absolute top-8 right-8 w-16 h-16 border-r border-t border-copper/20" />
      <div className="absolute bottom-8 left-8 w-16 h-16 border-l border-b border-copper/20" />
      <div className="absolute bottom-8 right-8 w-16 h-16 border-r border-b border-copper/20" />

      <div className="text-center relative z-10">
        <div ref={logoRef} className="mb-10 flex flex-col items-center">
          <img 
            src="https://res.cloudinary.com/dvkmvwfkc/image/upload/q_auto/f_auto/v1778589282/IMG_20260505_234313_298_nwhxup.webp" 
            alt="Nexlane Interiors Logo" 
            className="h-24 w-24 rounded-full object-cover border-2 border-copper/20 mb-4 shadow-hard"
          />
        </div>

        {/* Separator line */}
        <div
          ref={lineRef}
          className="w-[180px] h-[1px] bg-copper/20 mx-auto mb-6"
        />

        {/* Progress bar */}
        <div
          className="w-[180px] h-[2px] bg-charcoal/5 dark:bg-white/5 mx-auto rounded-full overflow-hidden"
        >
          <div
            ref={progressRef}
            className="h-full bg-gradient-to-r from-copper to-copper-light rounded-full"
          />
        </div>

        <p
          className="font-grotesk text-[0.65rem] tracking-[0.2em] uppercase mt-8 text-charcoal/35 dark:text-white/35"
        >
          REDEFINING LIVING SPACES
        </p>
      </div>

      {/* Slide-out overlay */}
      <div
        ref={overlayRef}
        className="absolute inset-0 bg-copper/[0.04]"
      />
    </div>
  );
};

export default Preloader;