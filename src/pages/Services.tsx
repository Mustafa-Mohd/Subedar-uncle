import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import * as THREE from 'three';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle } from 'lucide-react';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

import './Services.css';

gsap.registerPlugin(ScrollTrigger);

import { servicesData } from '@/data/services';

export default function Services() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorRingRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  
  const galleryWrapperRef = useRef<HTMLDivElement>(null);
  const galleryContainerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    let reqThree: number;
    let reqCur: number;
    let renderer: THREE.WebGLRenderer | null = null;
    let scene: THREE.Scene;
    let camera: THREE.PerspectiveCamera;

    // ─── CUSTOM CURSOR ───
    let mx = 0, my = 0, rx = 0, ry = 0;
    const handleMouseMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      if (cursorRef.current) {
        cursorRef.current.style.left = mx + 'px';
        cursorRef.current.style.top = my + 'px';
      }
    };
    
    function animateCursor() {
      rx += (mx - rx) * 0.15;
      ry += (my - ry) * 0.15;
      if (cursorRingRef.current) {
        cursorRingRef.current.style.left = rx + 'px';
        cursorRingRef.current.style.top = ry + 'px';
      }
      reqCur = requestAnimationFrame(animateCursor);
    }
    
    document.addEventListener('mousemove', handleMouseMove);
    animateCursor();

    const hoverElements = document.querySelectorAll('a, button');
    const onEnter = () => cursorRingRef.current?.classList.add('active');
    const onLeave = () => cursorRingRef.current?.classList.remove('active');
    hoverElements.forEach(el => {
      el.addEventListener('mouseenter', onEnter);
      el.addEventListener('mouseleave', onLeave);
    });

    // ─── SCROLL PROGRESS ───
    const handleScroll = () => {
      if (progressRef.current) {
        const scrolled = window.scrollY / (document.body.scrollHeight - window.innerHeight);
        progressRef.current.style.width = `${scrolled * 100}%`;
      }
    };
    window.addEventListener('scroll', handleScroll);

    // ─── THREE.JS BACKGROUND ───
    if (canvasRef.current) {
      renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, alpha: true, antialias: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

      scene = new THREE.Scene();
      const isDark = document.documentElement.classList.contains('dark');
      scene.fog = new THREE.FogExp2(isDark ? 0x080604 : 0xfcfcfc, 0.02);

      camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
      camera.position.z = 30;

      // Lights
      const ambientLight = new THREE.AmbientLight(0xffeedd, 0.1);
      scene.add(ambientLight);
      
      const pointLight1 = new THREE.PointLight(0xc9a96e, 2, 50);
      pointLight1.position.set(10, 10, 10);
      scene.add(pointLight1);
      
      const pointLight2 = new THREE.PointLight(0x3a5f8e, 1.5, 50);
      pointLight2.position.set(-10, -10, -10);
      scene.add(pointLight2);

      // Particles / Abstract Geometry
      const geometry = new THREE.IcosahedronGeometry(0.8, 0);
      const material = new THREE.MeshStandardMaterial({
        color: 0xc9a96e,
        roughness: 0.2,
        metalness: 0.8,
        wireframe: true,
        transparent: true,
        opacity: 0.15
      });

      const objects: { mesh: THREE.Mesh, rx: number, ry: number, yv: number }[] = [];
      for (let i = 0; i < 70; i++) {
        const mesh = new THREE.Mesh(geometry, material);
        mesh.position.set(
          (Math.random() - 0.5) * 60,
          (Math.random() - 0.5) * 60,
          (Math.random() - 0.5) * 40 - 10
        );
        mesh.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, 0);
        const s = Math.random() * 1.5 + 0.5;
        mesh.scale.set(s, s, s);
        
        scene.add(mesh);
        objects.push({
          mesh,
          rx: (Math.random() - 0.5) * 0.01,
          ry: (Math.random() - 0.5) * 0.01,
          yv: (Math.random() - 0.5) * 0.03
        });
      }

      const clock = new THREE.Clock();
      let scrollTarget = 0;

      function renderThree() {
        if (!renderer) return;
        const time = clock.getElapsedTime();
        
        // Rotate objects slowly
        objects.forEach(obj => {
          obj.mesh.rotation.x += obj.rx;
          obj.mesh.rotation.y += obj.ry;
          obj.mesh.position.y += Math.sin(time + obj.mesh.position.x) * 0.005 + obj.yv * 0.1;
        });

        // Move camera slightly based on scroll
        scrollTarget = window.scrollY * 0.01;
        camera.position.y += (-scrollTarget - camera.position.y) * 0.05;
        camera.position.x += (mx * 0.002 - camera.position.x) * 0.05;
        
        pointLight1.intensity = 2 + Math.sin(time * 2) * 0.5;

        renderer.render(scene, camera);
        reqThree = requestAnimationFrame(renderThree);
      }
      renderThree();

      const handleResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer?.setSize(window.innerWidth, window.innerHeight);
      };
      window.addEventListener('resize', handleResize);
    }

    // ─── GSAP ANIMATIONS ───
    const ctx = gsap.context(() => {
      // Intro Text Animation
      gsap.to('.svc-eyebrow, .svc-sub', {
        y: 0, opacity: 1, duration: 1.2, stagger: 0.3, ease: 'power3.out', delay: 0.2
      });
      
      gsap.to('.svc-title .word', {
        y: '0%', opacity: 1, duration: 1.2, stagger: 0.15, ease: 'power4.out', delay: 0.5
      });

      // Horizontal Scroll Logic
      const panels = gsap.utils.toArray('.svc-panel');
      if (galleryContainerRef.current && galleryWrapperRef.current) {
        const totalWidth = galleryContainerRef.current.scrollWidth - window.innerWidth;
        
        const scrollTween = gsap.to(panels, {
          x: () => -totalWidth,
          ease: "none",
          scrollTrigger: {
            trigger: galleryWrapperRef.current,
            pin: true,
            scrub: 1,
            end: () => "+=" + galleryContainerRef.current!.offsetWidth,
            invalidateOnRefresh: true
          }
        });

        // Parallax image within horizontal scroll
        panels.forEach((panel: any, i) => {
          const img = panel.querySelector('.svc-img');
          gsap.to(img, {
            xPercent: 20,
            ease: "none",
            scrollTrigger: {
              trigger: panel,
              containerAnimation: scrollTween,
              start: "left right",
              end: "right left",
              scrub: true
            }
          });
        });
      }
      
      // Outro Reveal
      ScrollTrigger.create({
        trigger: '.svc-outro',
        start: 'top 70%',
        once: true,
        onEnter: () => {
          gsap.fromTo('.svc-outro-title', { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1.2, ease: 'power3.out' });
          gsap.fromTo('.svc-outro-sub', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 1, delay: 0.2, ease: 'power3.out' });
          gsap.fromTo('.svc-outro-btn', { scale: 0.9, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.8, delay: 0.4, ease: 'back.out(1.7)' });
        }
      });
    }, containerRef);

    // ─── CLEANUP ───
    return () => {
      cancelAnimationFrame(reqCur);
      cancelAnimationFrame(reqThree);
      document.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', () => {});
      hoverElements.forEach(el => {
        el.removeEventListener('mouseenter', onEnter);
        el.removeEventListener('mouseleave', onLeave);
      });
      ctx.revert();
      if (renderer) renderer.dispose();
    };
  }, []);

  return (
    <div className="cinematic-services" ref={containerRef}>
      <Navigation />
      
      {/* Canvas & Global Elements */}
      <canvas id="svc-canvas" ref={canvasRef}></canvas>
      <div className="svc-cursor" ref={cursorRef}></div>
      <div className="svc-cursor-ring" ref={cursorRingRef}></div>
      <div className="svc-progress" ref={progressRef}></div>

      {/* Hero Section */}
      <section className="svc-hero">
        <div className="svc-hero-sticky">
          <div className="svc-eyebrow">The Masterpieces</div>
          <h1 className="svc-title">
            <span className="line"><span className="word">Our</span></span>
            <br />
            <span className="line"><span className="word gold">Expertise</span></span>
          </h1>
          <p className="svc-sub">Ten pillars of craftsmanship, elevating every corner of your space. Designed with absolute precision.</p>
          <div className="svc-scroll-cue">
            <div className="cue-text">Scroll</div>
            <div className="cue-line"></div>
          </div>
        </div>
      </section>

      {/* Horizontal Scroll Gallery */}
      <section className="svc-gallery-wrapper" ref={galleryWrapperRef}>
        <div className="svc-gallery-container" ref={galleryContainerRef}>
          {servicesData.map((s, i) => (
            <div className="svc-panel" key={i}>
              <div className="svc-panel-inner">
                <div className="svc-panel-left">
                  <div className="svc-num">{s.number}</div>
                  <div className="svc-subtext">{s.tagline}</div>
                  <h2 className="svc-panel-title">{s.title}</h2>
                  <p className="svc-panel-desc">{s.description}</p>
                  
                  <div className="flex items-center gap-4 flex-wrap mt-6">
                    <Link 
                      to={`/service/${s.id}`}
                      className="svc-whatsapp-btn !bg-copper hover:!bg-copper-dark !text-black border-0 !px-5"
                    >
                      <span>View Details</span>
                    </Link>
                    <a 
                      href={`https://wa.me/919059252564?text=${encodeURIComponent(`Hello Ansar Ahmed, I am interested in your ${s.title} service for my space.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="svc-whatsapp-btn !bg-green-600 hover:!bg-green-700 !text-white !border-green-600 shadow-md"
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </div>
                <div className="svc-panel-right">
                  <div className="svc-img-wrapper">
                    <img src={s.image} alt={s.title} className="svc-img" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Outro CTA */}
      <section className="svc-outro">
        <div className="svc-outro-bg"></div>
        <h2 className="svc-outro-title">Ready to <em>Transform</em><br />Your Space?</h2>
        <p className="svc-outro-sub">
          Let us bring your vision to life with uncompromising quality and extraordinary design. 
          Book a private consultation with our lead architects today.
        </p>
        <Link to="/contact" className="svc-outro-btn">
          <span>Start Your Project</span>
          <ArrowRight />
        </Link>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}