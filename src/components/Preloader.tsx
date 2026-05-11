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
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden"
      style={{ background: 'hsl(var(--ivory))' }}
    >
      {/* Noise texture */}
      <div className="absolute inset-0 opacity-[0.04]"
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
        <div ref={logoRef} className="mb-10">
          {/* Logo mark */}
          <div className="flex items-center justify-center mb-6">
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center"
              style={{ background: 'var(--gradient-copper)' }}
            >
              <span
                className="text-2xl font-bold"
                style={{ fontFamily: 'Cormorant Garamond, serif', color: 'white' }}
              >
                N
              </span>
            </div>
          </div>

          <h1
            style={{ fontFamily: 'Cormorant Garamond, serif', color: 'hsl(var(--charcoal))', fontSize: '2.8rem', fontWeight: 300, letterSpacing: '0.15em' }}
          >
            NEXLANE
          </h1>
          <p
            style={{ fontFamily: 'Space Grotesk, sans-serif', color: 'hsl(var(--copper))', fontSize: '0.65rem', letterSpacing: '0.35em', marginTop: '0.4rem' }}
          >
            INTERIORS
          </p>
        </div>

        {/* Separator line */}
        <div
          ref={lineRef}
          style={{ width: '180px', height: '1px', background: 'hsl(var(--copper)/0.2)', margin: '0 auto 1.5rem' }}
        />

        {/* Progress bar */}
        <div
          style={{ width: '180px', height: '2px', background: 'hsl(var(--charcoal)/0.05)', margin: '0 auto', borderRadius: '99px', overflow: 'hidden' }}
        >
          <div
            ref={progressRef}
            style={{ height: '100%', background: 'var(--gradient-copper)', borderRadius: '99px' }}
          />
        </div>

        <p
          style={{ fontFamily: 'Space Grotesk, sans-serif', color: 'hsl(var(--charcoal)/0.35)', fontSize: '0.65rem', letterSpacing: '0.2em', marginTop: '2rem' }}
        >
          REDEFINING LIVING SPACES
        </p>
      </div>

      {/* Slide-out overlay */}
      <div
        ref={overlayRef}
        className="absolute inset-0"
        style={{ background: 'hsl(var(--copper)/0.04)' }}
      />
    </div>
  );
};

export default Preloader;