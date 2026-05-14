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

const servicesData = [
  { num: '01', title: 'POP / Gypsum Ceiling', sub: 'Ambient Excellence', img: 'https://images.openai.com/static-rsc-4/Bp_DULGF3NIEs5aeJZjWiv9RrG6wT3jRjInp-lb0zqySWLygEtPu_Z-khgVw1T5EcwJ_mTNk7aam8orOXRmSA_HyXATrSoNjwMi8eljLqIpNq7nILy4QUVSz3IuXB6xeB8dPwrahYrwAO_8Rtp1c8LB2AIJ5rtkahey9oY0Gyde1cGCV5bi0c9DB7JcPKbhx?purpose=fullsize', desc: 'Custom false ceiling designs integrated with professional lighting solutions to create the perfect mood for every room.' },
  { num: '02', title: 'PVC / WPC Panels', sub: 'Modern Wall Solutions', img: 'https://images.openai.com/static-rsc-4/PlKaP4Ulg5uCfjMDeqIX1DZbx1wmciAtAgXIgTbiRZZAOD05zOgnvhHXsGMFhr6X5Y1VUUzi5fkAjfg0FxPqArvSJ3pHLZggJpD7yKu_sUL9E430NKaHRysEbgZN9NOBLh8WVfcPHHPz7WyFQ8v2c-VhQO5Swfg4TDuS1_AUTajB08079R0G4tb--anuZGTA?purpose=fullsize', desc: 'Durable and stylish PVC, WPC paneling and Fluted panels for walls and ceilings, providing a contemporary aesthetic.' },
  { num: '03', title: 'Grid / Thermocol', sub: 'Functional Systems', img: 'https://images.openai.com/static-rsc-4/iZIHmCeGh0CUnwiZobxpqng_n16LEd1UaJ1dQTZUyAJ-SFOu2ewjqVgqI4zMw-16gvlVDtNCEWzqKPDhT9nJ7qiwTPEEaEyHLVTn6K7NT0X4rSrtleYzTeh-neifeiUhNCKfd6CerpdRsSRvBLjcNao0WjgSpmv8ANQ_mW1KQ57Y7ri_rnnsQjK2T7l4Syxg?purpose=fullsize', desc: 'Professional grid ceiling and thermocol insulation solutions for commercial and residential utility spaces.' },
  { num: '04', title: 'Wall Moulding', sub: 'Classical Elegance', img: 'https://images.openai.com/static-rsc-4/b2Yy5oyhDB7rCtM205DXj1-9F4gmd_EQ-z199NXMB0-J_leYyh3q1fWJj1M_GmWipcA0HTtfbEYMXKO6h1jS1kS6gZdiYZ4SX32ZBpV6zN1cnnRWXsVzC3nadVAy7b02IH4kCTLYvWBW3QTme6L1ucSyvAtjIK9Rucc8o8cDiEIQqGITQicvUT9-X-MVVVP6?purpose=fullsize', desc: 'Sophisticated wall moulding and architectural design elements that add character and depth to your interior spaces.' },
  { num: '05', title: 'Electrical Solutions', sub: 'Safe & Smart', img: 'https://images.openai.com/static-rsc-4/7Yb5d__693cQOIYRadImF5obJPb1_KTk_thgXYNAj7rHNqn2V6RkNotug6X20_rQJGZ4mek0KnbblSasAEOVZUYV_SlD8E5MrIOje1nlJUkbfxcwsOXL3IBabJPRLYaO5oUMywIpaRrsyfZh8sIk94DdzhdN_I9QtuJjoh9AUuiql9LXURcXkWwgVmkmkqds?purpose=fullsize', desc: 'Comprehensive electrical planning, wiring, and smart home integration for a safe and functional modern living environment.' },
  { num: '06', title: 'Professional Painting', sub: 'Vibrant Finishes', img: 'https://images.openai.com/static-rsc-4/A7-Jq4XfgwdyyvI-B1ltj_f63aEg8lGscUwr8NELPDtm9L_LnLSkyIkLGJS6dBrLt2sasO9mSPmMKcIx3EyaBPxfx3G1nMAB2_-_HP3_OJEf7J8NaXQjI0KxbX0P36BDQARCDRQmejbJjIndviI1XEugFfTQObHPH52BQbDbhWR9KhdVhg1tZqPCQDJdyRUZ?purpose=fullsize', desc: 'Expert interior and exterior painting services with premium finishes, textures, and professional color consultations.' },
  { num: '07', title: 'Wallpaper', sub: 'Artistic Walls', img: 'https://images.openai.com/static-rsc-4/B31YgqOdBAnukubg1_T-F125QkHoVe9__7281-bRGR_OGAEm7W4EC2AGoHDylwDdHfK8BqwbLGFSJRuZu0Tj-EncFcV91F1ZIuHEBDMU4cjP_DtqAZgl5W0orjWYPBky8It10ZetbdBUfIqSq1C6B9JZfyVdaU7f0G3CvcbpEgbbxh9nLtEz4hsWFf8lFhCZ?purpose=fullsize', desc: 'A wide range of customizable wallpaper designs and wall coverings to suit your unique aesthetic and lifestyle.' },
  { num: '08', title: 'Invisible Grills', sub: 'Safety First', img: 'https://images.openai.com/static-rsc-4/8Hlvh70-dFsObho17Lbi-8V0GTxY6t-idwjVJmfm2Ny5W7HXN-UfFe_z1c5QeMsWCD0DEx8JSGV40ctzlI4V8P2gwL4QgO7g301rOp8-gHHy9GHNv4uAz1aSpsy4Z2Pchb1j5667sEdPpavGd2iQyaxKfRDLMFD1HFUTRTfCEAEKibGg9BAzBc98PT42OfIO?purpose=fullsize', desc: 'Modern invisible grill solutions for balconies and windows, providing maximum safety without obstructing your view.' },
  { num: '09', title: 'Complete Wooden Work', sub: 'Handcrafted Interiors', img: 'https://images.openai.com/static-rsc-4/41bIWtrwPFpN-Jy4T9yXqmNdHEayF4GXugmghS5Hp1L-FFIbJWLQpYlOeDxUqowV0dEoTNPhhmBtO7Qc0AZ7ZGjbxrM8W6YTos-C7Np70PDjldOcwQgomhcbzGIAPng0He9TIfaswdItdrnTraOQvAQ4-9Wl4chlws_HZJNiaL-KNW_-PqMkxwkyutNsQ_yq?purpose=fullsize', desc: 'End-to-end wooden interior solutions including wardrobes, beds, and bespoke storage units crafted from premium timber.' },
  { num: '10', title: 'Kitchen Modular Work', sub: 'Ergonomic Excellence', img: 'https://images.openai.com/static-rsc-4/JG2X1TsnN2w8erajIwMcXL1sDoJ3MXaBQZeFwOnPLeF0bn0_RylAsesQNBBxZYEbU26Z_KNcrE4ST5Gm2NoNHKiP-Fx35PXG1bWIIpliaErvWoMiy6JLgwvsMcCp78qSs8PMWC4FsyYIBbD1DUBNniZTmaX81Hiu37fnvdqO65lymZVGmsMyCF4na6U80GiY?purpose=fullsize', desc: 'State-of-the-art modular kitchen designs optimized for functionality, space efficiency, and modern aesthetics.' },
];

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
      scene.fog = new THREE.FogExp2(0x080604, 0.02);

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
                  <div className="svc-num">{s.num}</div>
                  <div className="svc-subtext">{s.sub}</div>
                  <h2 className="svc-panel-title">{s.title}</h2>
                  <p className="svc-panel-desc">{s.desc}</p>
                  
                  <a 
                    href={`https://wa.me/919118861979?text=${encodeURIComponent(`Hello Ansar Ahmed, I am interested in your ${s.title} service for my space.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="svc-whatsapp-btn"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    <span>Contact on WhatsApp</span>
                  </a>
                </div>
                <div className="svc-panel-right">
                  <div className="svc-img-wrapper">
                    <img src={s.img} alt={s.title} className="svc-img" />
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