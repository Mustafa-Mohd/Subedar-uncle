import React, { useEffect } from 'react';
import * as THREE from 'three';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Story.css';
import Navigation from '@/components/Navigation';

gsap.registerPlugin(ScrollTrigger);

const storyHTML = `
<!-- CURSOR -->
<div id="cur"></div>
<div id="cur-r"></div>
<div id="prog"></div>

<!-- ATMOSPHERE -->
<canvas id="grain-c"></canvas>
<canvas id="dust"></canvas>
<div class="amb amb-warm"></div>
<div class="amb amb-cool"></div>
<div class="amb amb-mid"></div>

<!-- THREE.JS -->
<canvas id="three-canvas"></canvas>

<div class="sc">

<!-- ══════════════ SECTION 1 — ARRIVAL ══════════════ -->
<section id="s1">
  <div class="s1-pin">
    <div class="s1-eyebrow">Nexlane Interiors · Where Spaces Breathe</div>
    <h1 class="s1-title">
      <span class="ln"><span class="wd">Design</span></span>
      <span class="ln"><span class="wd">Beyond</span></span>
      <span class="ln"><span class="wd gold">Imagination</span></span>
    </h1>
    <p class="s1-tagline">Crafting interiors for those who refuse <b>the ordinary</b></p>
    <div class="s1-badge">
      <p>Trusted by</p>
      <strong>2,400+</strong>
      <p>Discerning Clients Worldwide</p>
    </div>
    <div class="s1-award">
      <div class="s1-award-ring">
        <svg viewBox="0 0 24 24"><polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/></svg>
      </div>
      <div class="s1-award-txt">Awwwards 2024</div>
    </div>
    <div class="scroll-cue">
      <span>Scroll to Discover</span>
      <div class="sc-line"></div>
    </div>
    <!-- MARQUEE -->
    <div class="marquee-wrap">
      <div class="marquee-track">
        <span class="mq-item">Residential Design</span><span class="mq-dot">✦</span>
        <span class="mq-item">Commercial Spaces</span><span class="mq-dot">✦</span>
        <span class="mq-item">Luxury Hospitality</span><span class="mq-dot">✦</span>
        <span class="mq-item">Architectural Consulting</span><span class="mq-dot">✦</span>
        <span class="mq-item">Bespoke Furniture</span><span class="mq-dot">✦</span>
        <span class="mq-item">Material Curation</span><span class="mq-dot">✦</span>
        <span class="mq-item">Spatial Planning</span><span class="mq-dot">✦</span>
        <span class="mq-item">Lighting Design</span><span class="mq-dot">✦</span>
        <!-- duplicate for seamless loop -->
        <span class="mq-item">Residential Design</span><span class="mq-dot">✦</span>
        <span class="mq-item">Commercial Spaces</span><span class="mq-dot">✦</span>
        <span class="mq-item">Luxury Hospitality</span><span class="mq-dot">✦</span>
        <span class="mq-item">Architectural Consulting</span><span class="mq-dot">✦</span>
        <span class="mq-item">Bespoke Furniture</span><span class="mq-dot">✦</span>
        <span class="mq-item">Material Curation</span><span class="mq-dot">✦</span>
        <span class="mq-item">Spatial Planning</span><span class="mq-dot">✦</span>
        <span class="mq-item">Lighting Design</span><span class="mq-dot">✦</span>
      </div>
    </div>
  </div>
</section>

<!-- ══════════════ SECTION 2 — COUNTERS ══════════════ -->
<section id="s2">
  <div class="s2-inner">
    <div class="sec-label" id="s2lbl">By The Numbers</div>
    <h2 class="sec-title" id="s2ttl">A Legacy of <em>Extraordinary</em> Spaces</h2>
    <p class="sec-sub" id="s2sub">For over 15 years, Nexlane Interiors has been the trusted name behind some of the world's most celebrated private residences, luxury hotels, and commercial masterpieces.</p>

    <div class="counters">
      <div class="c-card" id="cc1">
        <div class="c-icon"><svg viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg></div>
        <div class="c-num"><span id="cn1">0</span><span class="c-plus">+</span></div>
        <div class="c-label">Projects Completed</div>
        <div class="c-desc">Across 3 Continents</div>
      </div>
      <div class="c-card" id="cc2">
        <div class="c-icon"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg></div>
        <div class="c-num"><span id="cn2">0</span></div>
        <div class="c-label">Countries Served</div>
        <div class="c-desc">Global Presence</div>
      </div>
      <div class="c-card" id="cc3">
        <div class="c-icon"><svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26"/></svg></div>
        <div class="c-num"><span id="cn3">0</span></div>
        <div class="c-label">Design Awards</div>
        <div class="c-desc">International Recognition</div>
      </div>
      <div class="c-card" id="cc4">
        <div class="c-icon"><svg viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg></div>
        <div class="c-num"><span id="cn4">0</span><span class="c-plus">K</span></div>
        <div class="c-label">Happy Clients</div>
        <div class="c-desc">Lifetime Satisfaction</div>
      </div>
    </div>

    <div class="awards-row" id="awardsRow">
      <div class="award-pill"><span class="ap-yr">2024</span><span class="ap-txt">Awwwards<br>Site of the Year</span></div>
      <div class="award-pill"><span class="ap-yr">2023</span><span class="ap-txt">AD100<br>Top Interior Studio</span></div>
      <div class="award-pill"><span class="ap-yr">2022</span><span class="ap-txt">Dezeen<br>Studio of the Year</span></div>
      <div class="award-pill"><span class="ap-yr">2021</span><span class="ap-txt">Elle Décor<br>A-List Design</span></div>
    </div>
  </div>
</section>

<!-- ══════════════ SECTION 3 — INTERIOR SHOWCASE ══════════════ -->
<section id="s3">
  <div class="s3-pin">
    <!-- LEFT: TEXT PANEL -->
    <div class="s3-text">
      <div class="s3-progress-bar"><div class="s3-progress-fill" id="s3pf"></div></div>
      <div id="steps-wrap">
        <div class="s3-step act" id="st0"><div class="s3-step-dot"></div><span>Living Room</span></div>
        <div class="s3-step" id="st1"><div class="s3-step-dot"></div><span>Dining Suite</span></div>
        <div class="s3-step" id="st2"><div class="s3-step-dot"></div><span>Master Bedroom</span></div>
      </div>
      <h2 class="s3-heading" id="s3h">Every Corner<br>Tells a <em>Story</em></h2>
      <p class="s3-body" id="s3b">A meticulously curated living room where warm walnut tones meet Italian Carrara marble. Bespoke sofas, layered lighting, and objects of art come together in perfect harmony — crafted to last a lifetime.</p>
      <div class="mat-chips" id="s3chips">
        <div class="chip">Carrara Marble</div>
        <div class="chip">Walnut Wood</div>
        <div class="chip">Velvet</div>
        <div class="chip">Travertine</div>
        <div class="chip">Brushed Brass</div>
      </div>
      <div class="mini-stats" id="s3ms">
        <div class="ms"><div class="ms-num">480<span>m²</span></div><div class="ms-lbl">Living Area</div></div>
        <div class="ms"><div class="ms-num">12<span>mo</span></div><div class="ms-lbl">Project Duration</div></div>
        <div class="ms"><div class="ms-num">₹4.2<span>Cr</span></div><div class="ms-lbl">Project Value</div></div>
        <div class="ms"><div class="ms-num">38<span>+</span></div><div class="ms-lbl">Custom Pieces</div></div>
      </div>
    </div>
    <!-- RIGHT: CSS 3D ROOM -->
    <div class="s3-visual" id="s3v">
      <div class="room-viewer">
        <div class="int-scene">
          <div class="int-room" id="intRoom">
            <div class="w-back"></div>
            <div class="w-left"></div>
            <div class="w-right"></div>
            <!-- CEILING -->
            <div class="w-ceil"></div>
            <!-- FLOOR -->
            <div class="w-floor"><div class="floor-tiles"></div></div>
            <!-- WINDOWS -->
            <div class="win win1"><div class="win-cross-h"></div><div class="win-cross-v"></div></div>
            <div class="win win2"><div class="win-cross-h"></div><div class="win-cross-v"></div></div>
            <!-- CHANDELIER -->
            <div class="chandelier" style="top:0;left:45%">
              <div class="ch-rod"></div>
              <div class="ch-body">
                <div class="ch-crystals">
                  <div class="ch-c" style="height:16px"></div>
                  <div class="ch-c" style="height:22px"></div>
                  <div class="ch-c" style="height:12px"></div>
                  <div class="ch-c" style="height:18px"></div>
                  <div class="ch-c" style="height:14px"></div>
                </div>
              </div>
              <div class="ch-glow"></div>
            </div>
            <!-- WALL ART -->
            <div class="art" style="top:10%;left:10%;width:18%;height:35%"></div>
            <div class="art" style="top:10%;left:30%;width:10%;height:25%"></div>
            <!-- BOOKSHELF -->
            <div class="shelf">
              <div class="shelf-shelf" style="top:25%"></div>
              <div class="shelf-shelf" style="top:50%"></div>
              <div class="shelf-shelf" style="top:75%"></div>
              <div class="shelf-book" style="height:20%;left:5%;top:5%;background:#5a3d1a"></div>
              <div class="shelf-book" style="height:18%;left:40%;top:5%;background:#3d2810"></div>
              <div class="shelf-book" style="height:17%;left:65%;top:6%;background:#4a3415"></div>
              <div class="shelf-book" style="height:16%;left:5%;top:28%;background:#2a1b0a"></div>
              <div class="shelf-book" style="height:15%;left:35%;top:28%;background:#5a3d1a"></div>
            </div>
            <!-- SOFA -->
            <div class="sofa-wrap">
              <div class="sofa-back"></div>
              <div class="sofa-seat">
                <div class="cushion c1"></div>
                <div class="cushion c2"></div>
                <div class="cushion c3"></div>
              </div>
              <div class="sofa-arm-l"></div>
              <div class="sofa-arm-r"></div>
            </div>
            <!-- COFFEE TABLE -->
            <div class="table">
              <div class="table-top"></div>
              <div class="table-legs"><div class="tleg"></div><div class="tleg"></div><div class="tleg"></div><div class="tleg"></div></div>
            </div>
            <!-- SIDE TABLE -->
            <div class="side-tbl"><div class="st-top"></div><div class="st-leg"></div></div>
            <!-- FLOOR LAMP -->
            <div class="flamp">
              <div class="flamp-shade"></div>
              <div class="flamp-rod"></div>
              <div class="flamp-base"></div>
              <div class="flamp-glow"></div>
            </div>
            <!-- PLANT -->
            <div class="plant" style="bottom:38%;right:3%">
              <div class="plant-pot"></div>
              <div class="plant-stem">
                <div class="leaf" style="top:-40px;transform:rotate(-30deg)"></div>
                <div class="leaf" style="top:-30px;left:2px;transform:rotate(40deg) scaleX(-1)"></div>
                <div class="leaf" style="top:-55px;left:-5px;transform:rotate(-50deg)"></div>
              </div>
            </div>
            <!-- FLOATING TAGS -->
            <div class="ftag" id="ft1" style="top:20%;left:-2%;transition-delay:.5s">
              <div class="ftag-label">Material</div>
              <div class="ftag-val">Italian Carrara Marble</div>
              <div class="ftag-sub">Grade A · Honed Finish</div>
            </div>
            <div class="ftag" id="ft2" style="top:50%;right:-2%;transition-delay:.7s">
              <div class="ftag-label">Lighting</div>
              <div class="ftag-val">Custom Chandelier</div>
              <div class="ftag-sub">2700K Warm White</div>
            </div>
            <div class="ftag" id="ft3" style="bottom:30%;left:-2%;transition-delay:.9s">
              <div class="ftag-label">Furniture</div>
              <div class="ftag-val">Bespoke Velvet Sofa</div>
              <div class="ftag-sub">Made in Florence, Italy</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ══════════════ SECTION 4 — SERVICES ══════════════ -->
<section id="s4">
  <div style="max-width:1200px;margin:0 auto;width:100%">
    <div class="sec-label" id="s4lbl">What We Do</div>
    <h2 class="sec-title" id="s4ttl">Our <em>Signature</em> Services</h2>
    <p class="sec-sub" id="s4sub">Six pillars of design excellence, each executed with obsessive attention to detail and an unwavering commitment to craft.</p>
    <div class="s4-grid">
      <div class="serv-card" id="sv1">
        <div class="serv-num">01</div>
        <div class="serv-icon"><svg viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg></div>
        <div class="serv-name">Residential Design</div>
        <div class="serv-desc">Complete turnkey transformation of private homes — from concept boards to final white-glove installation.</div>
        <div class="serv-arrow"><svg viewBox="0 0 24 24"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg></div>
        <div class="serv-bar"></div>
      </div>
      <div class="serv-card" id="sv2">
        <div class="serv-num">02</div>
        <div class="serv-icon"><svg viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg></div>
        <div class="serv-name">Commercial Spaces</div>
        <div class="serv-desc">Offices, showrooms, and retail environments that command attention and convert visitors into believers.</div>
        <div class="serv-arrow"><svg viewBox="0 0 24 24"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg></div>
        <div class="serv-bar"></div>
      </div>
      <div class="serv-card" id="sv3">
        <div class="serv-num">03</div>
        <div class="serv-icon"><svg viewBox="0 0 24 24"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg></div>
        <div class="serv-name">Luxury Hospitality</div>
        <div class="serv-desc">Hotels, resorts, and spas that transcend accommodation — immersive environments guests never want to leave.</div>
        <div class="serv-arrow"><svg viewBox="0 0 24 24"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg></div>
        <div class="serv-bar"></div>
      </div>
      <div class="serv-card" id="sv4">
        <div class="serv-num">04</div>
        <div class="serv-icon"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M19.07 4.93A10 10 0 1 1 4.93 19.07"/><path d="M12 2v4M12 18v4M2 12h4M18 12h4"/></svg></div>
        <div class="serv-name">Lighting Design</div>
        <div class="serv-desc">Bespoke illumination strategies that sculpt atmosphere — from warm intimate glows to dramatic architectural statements.</div>
        <div class="serv-arrow"><svg viewBox="0 0 24 24"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg></div>
        <div class="serv-bar"></div>
      </div>
      <div class="serv-card" id="sv5">
        <div class="serv-num">05</div>
        <div class="serv-icon"><svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></div>
        <div class="serv-name">Material Curation</div>
        <div class="serv-desc">Global sourcing of rare stones, exotic woods, heritage textiles, and artisanal finishes from master craftspeople.</div>
        <div class="serv-arrow"><svg viewBox="0 0 24 24"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg></div>
        <div class="serv-bar"></div>
      </div>
      <div class="serv-card" id="sv6">
        <div class="serv-num">06</div>
        <div class="serv-icon"><svg viewBox="0 0 24 24"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg></div>
        <div class="serv-name">Bespoke Furniture</div>
        <div class="serv-desc">Custom-designed, handcrafted furniture pieces built to exacting specifications — each one a functional work of art.</div>
        <div class="serv-arrow"><svg viewBox="0 0 24 24"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg></div>
        <div class="serv-bar"></div>
      </div>
    </div>
  </div>
</section>

<!-- ══════════════ SECTION 5 — FUTURE / CTA ══════════════ -->
<section id="s5">
  <div class="s5-pin">
    <!-- HALLWAY BG -->
    <div class="hall-bg">
      <div class="hall-tunnel">
        <div class="h-floor"><div class="h-lines"></div></div>
        <div class="h-neon-l"></div><div class="h-neon-r"></div>
        <div class="h-neon-t"></div><div class="h-neon-b"></div>
        <!-- Tunnel frames -->
        <div class="htile" style="top:15%;left:15%;right:15%;bottom:15%;border-color:rgba(201,169,110,.06)"></div>
        <div class="htile" style="top:25%;left:25%;right:25%;bottom:25%;border-color:rgba(201,169,110,.04)"></div>
        <div class="htile" style="top:35%;left:35%;right:35%;bottom:35%;border-color:rgba(0,100,200,.06)"></div>
        <!-- Wireframes -->
        <div class="wf" style="width:180px;height:180px;top:15%;left:8%;border-color:rgba(0,120,255,.2)"></div>
        <div class="wf wf2" style="width:120px;height:120px;top:25%;right:10%;border-color:rgba(201,169,110,.25)"></div>
        <div class="wf wf3" style="width:90px;height:90px;bottom:20%;left:12%;border-color:rgba(0,120,255,.15)"></div>
        <div class="wf wf2" style="width:200px;height:140px;bottom:10%;right:8%"></div>
      </div>
    </div>
    <div class="h-vp-frame" id="vpFrame" style="width:50vw;height:60vh"></div>
    <!-- CONTENT -->
    <div class="s5-content">
      <div class="s5-brand">NEXLANE</div>
      <div class="s5-eye" id="s5eye">The Nexlane Philosophy</div>
      <h2 class="s5-title" id="s5ttl">We Don't Design Spaces.<br>We Design <em>Emotions.</em></h2>
      <p class="s5-sub" id="s5sub">Every project begins with a question: how should this space make you feel? The answer becomes the architecture, the materials, the light — every decision made in service of one profound emotional truth.</p>
      <!-- HOLO ROOMS -->
      <div class="holo-grid" id="holoGrid">
        <div class="holo-room">
          <svg viewBox="0 0 60 45"><rect x="5" y="5" width="50" height="35" fill="none"/><line x1="5" y1="30" x2="55" y2="30"/><line x1="15" y1="5" x2="15" y2="30"/><line x1="45" y1="5" x2="45" y2="30"/></svg>
          <div class="holo-lbl">Living Room</div>
        </div>
        <div class="holo-room">
          <svg viewBox="0 0 60 45"><rect x="5" y="15" width="50" height="25" fill="none"/><rect x="15" y="5" width="30" height="10" fill="none"/><line x1="5" y1="35" x2="55" y2="35"/></svg>
          <div class="holo-lbl">Dining Suite</div>
        </div>
        <div class="holo-room">
          <svg viewBox="0 0 60 45"><rect x="5" y="10" width="50" height="30" fill="none"/><rect x="15" y="15" width="30" height="20" fill="none"/><circle cx="30" cy="8" r="3" fill="none"/></svg>
          <div class="holo-lbl">Master Suite</div>
        </div>
        <div class="holo-room">
          <svg viewBox="0 0 60 45"><rect x="5" y="5" width="25" height="35" fill="none"/><rect x="35" y="15" width="20" height="25" fill="none"/><line x1="5" y1="40" x2="55" y2="40"/></svg>
          <div class="holo-lbl">Study</div>
        </div>
      </div>
      <!-- CTA -->
      <div class="final-cta" id="finalCta">
        <a href="#" class="btn-main"><span>Begin Your Interior Journey</span></a>
        <a href="#" class="btn-ghost">View Portfolio</a>
        <div class="cta-note">Private consultation · No commitment required</div>
      </div>
    </div>
  </div>
</section>
</div>
`;

export default function Story() {
  useEffect(() => {
    // Need document to be ready and styles applied
    let reqCur: number;
    let reqGrain: number;
    let reqDust: number;
    let reqThree: number;
    
    // ══════════════════════════════════════
    // CURSOR
    // ══════════════════════════════════════
    const cur = document.getElementById('cur');
    const curR = document.getElementById('cur-r');
    let mx=0, my=0, rx=0, ry=0;
    
    const handleMouseMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      if (cur) {
        cur.style.left = mx + 'px';
        cur.style.top = my + 'px';
      }
    };
    document.addEventListener('mousemove', handleMouseMove);
    
    function aC() {
      rx += (mx - rx) * 0.1;
      ry += (my - ry) * 0.1;
      if (curR) {
        curR.style.left = rx + 'px';
        curR.style.top = ry + 'px';
      }
      reqCur = requestAnimationFrame(aC);
    }
    aC();
    
    const hovEls = document.querySelectorAll('.story-page a, .story-page button, .serv-card, .holo-room, .c-card');
    const onEnter = () => curR?.classList.add('hov');
    const onLeave = () => curR?.classList.remove('hov');
    hovEls.forEach(el => {
      el.addEventListener('mouseenter', onEnter);
      el.addEventListener('mouseleave', onLeave);
    });

    // ══════════════════════════════════════
    // SCROLL PROGRESS
    // ══════════════════════════════════════
    const handleScroll = () => {
      const prog = document.getElementById('prog');
      if (prog) {
        prog.style.width = (window.scrollY / (document.body.scrollHeight - window.innerHeight) * 100) + '%';
      }
    };
    window.addEventListener('scroll', handleScroll);

    // ══════════════════════════════════════
    // GRAIN
    // ══════════════════════════════════════
    const grainCanvas = document.getElementById('grain-c') as HTMLCanvasElement;
    if (grainCanvas) {
      const ctx = grainCanvas.getContext('2d');
      if (ctx) {
        grainCanvas.width = 300;
        grainCanvas.height = 300;
        function g() {
          if (!ctx) return;
          const d = ctx.createImageData(300, 300);
          for (let i = 0; i < d.data.length; i += 4) {
            const v = Math.random() * 255;
            d.data[i] = d.data[i+1] = d.data[i+2] = v;
            d.data[i+3] = 255;
          }
          ctx.putImageData(d, 0, 0);
          reqGrain = requestAnimationFrame(g);
        }
        g();
      }
    }

    // ══════════════════════════════════════
    // DUST PARTICLES
    // ══════════════════════════════════════
    const dustCanvas = document.getElementById('dust') as HTMLCanvasElement;
    if (dustCanvas) {
      const ctx = dustCanvas.getContext('2d');
      if (ctx) {
        dustCanvas.width = window.innerWidth;
        dustCanvas.height = window.innerHeight;
        const pts = Array.from({length: 80}, () => ({
          x: Math.random() * dustCanvas.width,
          y: Math.random() * dustCanvas.height,
          vx: (Math.random() - 0.5) * 0.25,
          vy: (Math.random() - 0.5) * 0.25,
          r: Math.random() * 1.8 + 0.3,
          o: Math.random() * 0.35 + 0.08
        }));
        
        function drawDust() {
          if (!ctx) return;
          ctx.clearRect(0, 0, dustCanvas.width, dustCanvas.height);
          pts.forEach(p => {
            p.x += p.vx; p.y += p.vy;
            if (p.x < 0 || p.x > dustCanvas.width) p.vx *= -1;
            if (p.y < 0 || p.y > dustCanvas.height) p.vy *= -1;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(201,169,110,${p.o})`;
            ctx.fill();
          });
          // connectors
          pts.forEach((a, i) => pts.slice(i+1).forEach(b => {
            const d = Math.hypot(a.x - b.x, a.y - b.y);
            if (d < 130) {
              ctx.beginPath();
              ctx.moveTo(a.x, a.y);
              ctx.lineTo(b.x, b.y);
              ctx.strokeStyle = `rgba(201,169,110,${(1 - d / 130) * 0.05})`;
              ctx.stroke();
            }
          }));
          reqDust = requestAnimationFrame(drawDust);
        }
        drawDust();
      }
    }

    const handleResize = () => {
      if (dustCanvas) {
        dustCanvas.width = window.innerWidth;
        dustCanvas.height = window.innerHeight;
      }
    };
    window.addEventListener('resize', handleResize);

    // ══════════════════════════════════════
    // THREE.JS — VILLA + INTERIOR
    // ══════════════════════════════════════
    let renderer: THREE.WebGLRenderer | null = null;
    let scene: THREE.Scene;
    const canvas = document.getElementById('three-canvas') as HTMLCanvasElement;
    if (canvas) {
      renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 0.85;
      renderer.shadowMap.enabled = true;

      scene = new THREE.Scene();
      scene.fog = new THREE.FogExp2(0x000000, 0.038);

      const cam = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 300);
      cam.position.set(0, 2, 16);

      // LIGHTS
      scene.add(new THREE.AmbientLight(0xffeedd, 0.12));
      const wL = new THREE.PointLight(0xc9a96e, 3.5, 22); wL.position.set(2, 5, 3); wL.castShadow = true; scene.add(wL);
      const cL = new THREE.PointLight(0x1a5f9e, 2, 28); cL.position.set(-5, 3, -5); scene.add(cL);
      const dL = new THREE.DirectionalLight(0xffeedd, 0.6); dL.position.set(0, 10, 5); scene.add(dL);
      const mL = new THREE.PointLight(0xc9a96e, 1.2, 18); mL.position.set(0, 3, 8); scene.add(mL);
      const acL = new THREE.PointLight(0xffeedd, 0.8, 12); acL.position.set(0, 8, -5); scene.add(acL);

      // MATERIALS
      const M = {
        wall: new THREE.MeshStandardMaterial({ color: 0x1a1008, roughness: 0.85, metalness: 0.08 }),
        dWall: new THREE.MeshStandardMaterial({ color: 0x0d0806, roughness: 0.9, metalness: 0.05 }),
        gold: new THREE.MeshStandardMaterial({ color: 0xc9a96e, roughness: 0.25, metalness: 0.75, emissive: 0x3d2a10, emissiveIntensity: 0.25 }),
        glass: new THREE.MeshStandardMaterial({ color: 0x88aacc, roughness: 0, metalness: 0.95, transparent: true, opacity: 0.12 }),
        floor: new THREE.MeshStandardMaterial({ color: 0x1a1008, roughness: 0.18, metalness: 0.35 }),
        marble: new THREE.MeshStandardMaterial({ color: 0x1f1812, roughness: 0.12, metalness: 0.42 }),
        wood: new THREE.MeshStandardMaterial({ color: 0x2d1a08, roughness: 0.65, metalness: 0.1 }),
        velvet: new THREE.MeshStandardMaterial({ color: 0x6b4a28, roughness: 0.9, metalness: 0.05 }),
        neon: new THREE.MeshBasicMaterial({ color: 0x0066ff }),
        brass: new THREE.MeshStandardMaterial({ color: 0xb8860b, roughness: 0.3, metalness: 0.8 }),
      };

      const box = (w: number, h: number, d: number, mat: THREE.Material, x: number, y: number, z: number, rx = 0, ry = 0) => {
        const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat);
        m.position.set(x, y, z); m.rotation.x = rx; m.rotation.y = ry;
        m.castShadow = m.receiveShadow = true; scene.add(m); return m;
      };

      // ── FLOOR & CEILING ──
      const flr = new THREE.Mesh(new THREE.PlaneGeometry(40, 40), M.floor);
      flr.rotation.x = -Math.PI / 2; flr.position.y = -2; flr.receiveShadow = true; scene.add(flr);
      box(14, 0.15, 12, M.wall, 0, 5, -1);

      // ── VILLA WALLS ──
      box(14, 7, 0.25, M.wall, 0, 1.5, -7);
      box(0.25, 7, 12, M.dWall, -7, 1.5, -1);
      box(0.25, 7, 12, M.dWall, 7, 1.5, -1);

      [[-3.5, -6], [3.5, -6]].forEach(([x, z]) => {
        box(4, 3.5, 0.1, M.gold, x, 2, z);
        box(3.8, 3.3, 0.08, M.glass, x, 2, z + 0.05);
        box(0.05, 3.5, 0.05, M.gold, x, 2, z + 0.1);
        box(3.8, 0.05, 0.05, M.gold, x, 2, z + 0.1);
      });

      box(0.12, 4.5, 0.12, M.gold, -1.8, -0.25, 7);
      box(0.12, 4.5, 0.12, M.gold, 1.8, -0.25, 7);
      box(3.72, 0.12, 0.12, M.gold, 0, 2.25, 7);
      const arch = new THREE.Mesh(new THREE.TorusGeometry(1.86, 0.08, 8, 20, Math.PI), M.gold);
      arch.position.set(0, 2.25, 7); arch.rotation.z = Math.PI; scene.add(arch);

      [[-4.5, 6], [4.5, 6], [-4.5, -6.9], [4.5, -6.9]].forEach(([x, z]) => {
        box(0.35, 7, 0.35, M.gold, x, 1.5, z);
        box(0.6, 0.2, 0.6, M.marble, x, -1.9, z);
        box(0.6, 0.2, 0.6, M.marble, x, 5, z);
      });

      box(14, 0.12, 0.12, M.gold, 0, -1.85, -7);
      box(14, 0.12, 0.12, M.gold, 0, 4.98, -7);

      box(5.5, 0.65, 0.25, M.velvet, 0, 0.15, -2);
      box(5.5, 0.38, 1.6, M.velvet, 0, -0.4, -2.6);
      box(0.28, 0.65, 1.6, M.velvet, -2.9, -0.07, -2.6);
      box(0.28, 0.65, 1.6, M.velvet, 2.9, -0.07, -2.6);
      
      const sofaLight = new THREE.PointLight(0xffddaa, 2.5, 10);
      sofaLight.position.set(0, 2.5, -2);
      scene.add(sofaLight);

      [[-1.8, -0.15, -2.55], [-0.2, -0.15, -2.55], [1.4, -0.15, -2.55]].forEach(([x, y, z]) => {
        box(1.2, 0.4, 0.9, new THREE.MeshStandardMaterial({ color: 0x5a3d1a, roughness: 0.9 }), x, y, z);
      });

      box(2.5, 0.08, 1.1, M.marble, 0, -1.15, -1);
      [[-0.9, -1.65, -1.4], [0.9, -1.65, -1.4], [-0.9, -1.65, -0.6], [0.9, -1.65, -0.6]].forEach(([x, y, z]) => {
        box(0.05, 0.5, 0.05, M.brass, x, y, z);
      });
      const vase = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.12, 0.35, 12), M.brass);
      vase.position.set(0, -0.88, -1); scene.add(vase);

      box(0.7, 0.06, 0.7, M.marble, -3.5, -1.25, -2.6);
      box(0.06, 0.65, 0.06, M.brass, -3.5, -1.6, -2.6);
      box(0.7, 0.06, 0.7, M.marble, 3.5, -1.25, -2.6);
      box(0.06, 0.65, 0.06, M.brass, 3.5, -1.6, -2.6);

      box(0.05, 3.5, 0.05, M.brass, 4.5, 0, -1.5);
      const shade = new THREE.Mesh(new THREE.ConeGeometry(0.4, 0.3, 12, 1, true),
        new THREE.MeshStandardMaterial({ color: 0xc9a96e, roughness: 0.4, metalness: 0.3, side: THREE.DoubleSide }));
      shade.position.set(4.5, 1.9, -1.5); shade.rotation.x = Math.PI; scene.add(shade);
      const shdLight = new THREE.PointLight(0xffeedd, 2, 5); shdLight.position.set(4.5, 1.7, -1.5); scene.add(shdLight);

      [[-4.5, 2, -6.85], [-1.5, 2.5, -6.85], [2, 2, -6.85]].forEach(([x, y, z], i) => {
        const s = [1.5, 1, 2]; const t = [1.2, 0.8, 1.5];
        box(s[i], t[i], 0.04, new THREE.MeshStandardMaterial({ color: [0x3d2810, 0x1a0e05, 0x2a1808][i], roughness: 0.9 }), x, y, z);
        box(s[i] + 0.12, 0.06, 0.06, M.gold, x, y + t[i] / 2 + 0.03, z);
        box(s[i] + 0.12, 0.06, 0.06, M.gold, x, y - t[i] / 2 - 0.03, z);
        box(0.06, t[i] + 0.12, 0.06, M.gold, x - s[i] / 2 - 0.03, y, z);
        box(0.06, t[i] + 0.12, 0.06, M.gold, x + s[i] / 2 + 0.03, y, z);
      });

      box(0.3, 4, 0.8, M.wood, -6.5, 0, -4);
      [-0.9, 0.1, 1.1, 2].forEach(y => box(0.3, 0.04, 0.8, M.gold, -6.5, y, -4));
      [[-1.2, -0.7], [-0.8, -0.5], [-0.5, -0.55], [-0.2, -0.65], [0.1, -0.58]].forEach(([y, z]) => {
        box(0.05, 0.3, 0.12, new THREE.MeshStandardMaterial({ color: [0x5a3d1a, 0x3d2810, 0x4a3415, 0x2a1b0a, 0x5a4020][Math.floor(Math.random() * 5)], roughness: 0.8 }), -6.78, y, -4 + z * 0.8);
      });

      const pot = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.15, 0.3, 10), M.wood);
      pot.position.set(5.5, -1.85, -3); scene.add(pot);
      const stem = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.03, 0.8, 8),
        new THREE.MeshStandardMaterial({ color: 0x2d4a1e, roughness: 0.9 }));
      stem.position.set(5.5, -1.25, -3); scene.add(stem);
      [0, 1.2, 2.4, 3.6].forEach(a => {
        const leaf = new THREE.Mesh(new THREE.SphereGeometry(0.25, 0.6, 8, 0, Math.PI),
          new THREE.MeshStandardMaterial({ color: 0x3d6b28, roughness: 0.9, side: THREE.DoubleSide }));
        leaf.position.set(5.5 + Math.cos(a) * 0.3, -0.8, -3 + Math.sin(a) * 0.3);
        leaf.rotation.z = 0.5; leaf.scale.set(1, 0.3, 1); scene.add(leaf);
      });

      box(0.05, 1, 0.05, M.gold, 0, 5, -4);
      const cBody = new THREE.Mesh(new THREE.CylinderGeometry(0.8, 0.6, 0.3, 16, 1, true),
        new THREE.MeshStandardMaterial({ color: 0xc9a96e, roughness: 0.2, metalness: 0.8, side: THREE.DoubleSide }));
      cBody.position.set(0, 4.1, -4); scene.add(cBody);
      for (let i = 0; i < 12; i++) {
        const a = i * (Math.PI * 2 / 12), r = 0.6;
        box(0.02, 0.4, 0.02, M.gold, Math.cos(a) * r, 3.8 + Math.random() * 0.2, -4 + Math.sin(a) * r);
      }
      const cLight = new THREE.PointLight(0xfff5e0, 3, 10); cLight.position.set(0, 3.5, -4); scene.add(cLight);

      for (let i = 0; i < 4; i++) box(5, 0.18, 0.7, M.marble, 0, -1.82 + i * 0.18, 7.2 + i * 0.5);

      for (let i = 0; i < 12; i++) {
        const z = -14 - i * 9;
        box(16, 0.08, 0.4, M.marble, 0, -2, z);
        box(16, 0.08, 0.4, M.marble, 0, 6, z);
        box(0.08, 8, 0.4, M.gold, -8, 2, z);
        box(0.08, 8, 0.4, M.gold, 8, 2, z);
        const nL = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.04, 0.4), M.neon);
        nL.position.set(-7.5, 5.8, z); const nR = nL.clone(); nR.position.set(7.5, 5.8, z);
        scene.add(nL, nR);
        const nB = nL.clone(); nB.position.set(0, -1.95, z); nB.scale.x = 15;
        const nB2 = nB.clone(); nB2.position.y = 5.95; scene.add(nB, nB2);
      }

      [[0, 3, -35], [5, 2, -45], [-6, 4, -55]].forEach(([x, y, z]) => {
        const g = new THREE.Mesh(new THREE.BoxGeometry(4, 5, 3),
          new THREE.MeshBasicMaterial({ color: 0x0055aa, wireframe: true, transparent: true, opacity: 0.12 }));
        g.position.set(x, y, z); g.userData.spin = 0.004 + Math.random() * 0.003; scene.add(g);
      });
      const ico = new THREE.Mesh(new THREE.IcosahedronGeometry(1.5, 0),
        new THREE.MeshBasicMaterial({ color: 0xc9a96e, wireframe: true, transparent: true, opacity: 0.1 }));
      ico.position.set(0, 2, -50); ico.userData.spin = 0.005; scene.add(ico);

      const pGeo = new THREE.BufferGeometry();
      const pN = 1000, pArr = new Float32Array(pN * 3);
      for (let i = 0; i < pN; i++) { pArr[i * 3] = (Math.random() - 0.5) * 28; pArr[i * 3 + 1] = (Math.random() - 0.5) * 10 + 2; pArr[i * 3 + 2] = (Math.random() - 0.5) * 20 - 5; }
      pGeo.setAttribute('position', new THREE.BufferAttribute(pArr, 3));
      const pMat = new THREE.PointsMaterial({ color: 0xc9a96e, size: 0.04, transparent: true, opacity: 0.55, sizeAttenuation: true });
      scene.add(new THREE.Points(pGeo, pMat));

      let tZ = 16, tY = 2, tX = 0, mX = 0, mY = 0;
      const handleThreeMouseMove = (e: MouseEvent) => {
        const nx = (e.clientX / window.innerWidth) * 2 - 1, ny = -(e.clientY / window.innerHeight) * 2 + 1;
        mX = nx * 0.7; mY = ny * 0.35;
        mL.position.x = nx * 6; mL.position.y = ny * 3 + 3;
        wL.intensity = 2.8 + Math.abs(nx) * 1.8;
      };
      document.addEventListener('mousemove', handleThreeMouseMove);

      ScrollTrigger.create({
        trigger: '#s1', start: 'top top', end: 'bottom top',
        onUpdate: s => { const p = s.progress; tZ = 16 - p * 22; tY = 2 - p; cam.fov = 60 + p * 8; cam.updateProjectionMatrix(); (scene.fog as THREE.FogExp2).density = 0.038 + p * 0.04; }
      });
      ScrollTrigger.create({
        trigger: '#s2', start: 'top top', end: 'bottom top',
        onUpdate: s => { const p = s.progress; tZ = -6 - p * 5; tX = p * 1.5; tY = 1 - p * 0.5; }
      });
      ScrollTrigger.create({
        trigger: '#s3', start: 'top top', end: 'bottom top',
        onUpdate: s => { const p = s.progress; tZ = -11 - p * 8; cL.intensity = 2 + p * 3; wL.intensity = 3 - p * 1; }
      });
      ScrollTrigger.create({
        trigger: '#s4', start: 'top top', end: 'bottom top',
        onUpdate: s => { const p = s.progress; tZ = -19 - p * 6; tY = 0.5 + p * 2; }
      });
      ScrollTrigger.create({
        trigger: '#s5', start: 'top top', end: 'bottom top',
        onUpdate: s => { const p = s.progress; tZ = -25 - p * 30; cam.fov = 68 + p * 18; cam.updateProjectionMatrix(); (scene.fog as THREE.FogExp2).density = 0.08 + p * 0.07; cL.intensity = 5 + p * 5; wL.intensity = 1 - p * 0.5; }
      });

      let t = 0;
      function loop() {
        if (!renderer) return;
        t += 0.007;
        cam.position.z += (tZ - cam.position.z) * 0.05;
        cam.position.y += (tY - cam.position.y) * 0.05;
        cam.position.x += (tX + mX - cam.position.x) * 0.04;
        cam.lookAt(cam.position.x * 0.08, mY * 0.3, cam.position.z - 12);
        const pa = pGeo.attributes.position.array as Float32Array;
        for (let i = 0; i < pN; i++) { pa[i * 3 + 1] += 0.0018; if (pa[i * 3 + 1] > 8) pa[i * 3 + 1] = -5; }
        pGeo.attributes.position.needsUpdate = true;
        wL.intensity = 2.8 + Math.sin(t * 0.6) * 0.5;
        cLight.intensity = 2.8 + Math.sin(t * 0.4) * 0.4;
        scene.children.forEach(c => { if (c.userData.spin) { c.rotation.x += c.userData.spin; c.rotation.y += c.userData.spin * 1.4; } });
        renderer.render(scene, cam);
        reqThree = requestAnimationFrame(loop);
      }
      loop();

      window.addEventListener('resize', () => {
        cam.aspect = window.innerWidth / window.innerHeight;
        cam.updateProjectionMatrix();
        renderer?.setSize(window.innerWidth, window.innerHeight);
      });
    }

    // ══════════════════════════════════════
    // GSAP SCROLL TRIGGERS
    // ══════════════════════════════════════
    function revealOn(id: string, delay = 0) {
      ScrollTrigger.create({
        trigger: `#${id}`, start: 'top 70%', once: true,
        onEnter: () => setTimeout(() => document.getElementById(id)?.classList.add('v'), delay)
      });
    }

    ['s2lbl', 's2ttl', 's2sub'].forEach((id, i) => revealOn(id, i * 80));
    revealOn('awardsRow', 400);

    const intervals: any[] = [];
    function animC(id: string, to: number, suffix = '') {
      const el = document.getElementById(id);
      let v = 0; const s = to / 70;
      const t = setInterval(() => {
        v = Math.min(v + s, to);
        if (el) el.textContent = Math.floor(v) + suffix;
        if (v >= to) clearInterval(t);
      }, 18);
      intervals.push(t);
    }

    ScrollTrigger.create({
      trigger: '#s2', start: 'top 55%', once: true, onEnter: () => {
        ['cc1', 'cc2', 'cc3', 'cc4'].forEach((id, i) => setTimeout(() => document.getElementById(id)?.classList.add('v'), i * 120));
        setTimeout(() => { animC('cn1', 485); animC('cn2', 26); animC('cn3', 48); animC('cn4', 2.4, ''); }, 400);
      }
    });

    ScrollTrigger.create({
      trigger: '#s3', start: 'top 65%', once: true, onEnter: () => {
        ['s3h', 's3b', 's3chips', 's3ms'].forEach((id, i) => setTimeout(() => document.getElementById(id)?.classList.add('v'), i * 120));
        setTimeout(() => ['ft1', 'ft2', 'ft3'].forEach((id, i) => setTimeout(() => document.getElementById(id)?.classList.add('show'), i * 200)), 700);
      }
    });

    ScrollTrigger.create({
      trigger: '#s3', start: 'top top', end: 'bottom top',
      onUpdate: s => {
        const p = s.progress;
        const rm = document.getElementById('intRoom');
        if (rm) rm.style.transform = `rotateY(${p * 18}deg) rotateX(${p * -4}deg)`;
        const pf = document.getElementById('s3pf');
        if (pf) pf.style.height = (p * 100) + '%';
        const si = Math.floor(p * 3);
        ['st0', 'st1', 'st2'].forEach((id, i) => {
          const el = document.getElementById(id);
          if (el) el.classList.toggle('act', i === Math.min(si, 2));
        });
        const h = document.getElementById('s3h'), b = document.getElementById('s3b');
        const texts = [
          { h: "Every Corner<br>Tells a <em>Story</em>", b: "A meticulously curated living room where warm walnut tones meet Italian Carrara marble. Bespoke sofas, layered lighting, and objects of art come together in perfect harmony." },
          { h: "Where Meals Become<br><em>Memories</em>", b: "A dining suite that transforms every evening into an occasion. Custom walnut table, sculptural pendant lighting, and hand-woven textiles create an atmosphere of effortless elegance." },
          { h: "Your Private<br><em>Sanctuary</em>", b: "A master bedroom crafted for the deepest rest. Silk wallcoverings, bespoke joinery, and a considered material palette create a retreat that soothes the senses completely." },
        ];
        const idx = Math.min(si, 2);
        if (h) h.innerHTML = texts[idx].h;
        if (b) b.textContent = texts[idx].b;
      }
    });

    ScrollTrigger.create({
      trigger: '#s4', start: 'top 65%', once: true, onEnter: () => {
        ['s4lbl', 's4ttl', 's4sub'].forEach((id, i) => setTimeout(() => document.getElementById(id)?.classList.add('v'), i * 80));
        ['sv1', 'sv2', 'sv3', 'sv4', 'sv5', 'sv6'].forEach((id, i) => setTimeout(() => document.getElementById(id)?.classList.add('v'), 200 + i * 100));
      }
    });

    ['s5eye', 's5ttl', 's5sub', 'holoGrid', 'finalCta'].forEach((id, i) => {
      ScrollTrigger.create({
        trigger: '#s5', start: 'top 65%', once: true,
        onEnter: () => setTimeout(() => document.getElementById(id)?.classList.add('v'), i * 130)
      });
    });

    ScrollTrigger.create({
      trigger: '#s5', start: 'top top', end: 'bottom top',
      onUpdate: s => {
        const p = s.progress;
        const f = document.getElementById('vpFrame');
        if (f) { f.style.transform = `translate(-50%,-50%) scale(${1 + p * 0.6})`; f.style.opacity = (1 - p * 0.8).toString(); }
      }
    });

    let glitchDone = false;
    let glitchInterval: any;
    ScrollTrigger.create({
      trigger: '#s5', start: 'top center', once: true, onEnter: () => {
        if (glitchDone) return; glitchDone = true;
        let g = 0, max = 7;
        glitchInterval = setInterval(() => {
          if (g++ > max) {
            clearInterval(glitchInterval);
            const el = document.getElementById('s5ttl');
            if (el) { el.style.transform = ''; el.style.filter = ''; el.style.letterSpacing = ''; }
            return;
          }
          const el = document.getElementById('s5ttl');
          if (el) {
            el.style.transform = `translate(${(Math.random() - 0.5) * 6}px,${(Math.random() - 0.5) * 3}px)`;
            el.style.filter = `hue-rotate(${Math.random() * 40}deg) brightness(${1 + Math.random() * 0.3})`;
            el.style.letterSpacing = (Math.random() > 0.5 ? '0.02em' : '0em');
          }
          setTimeout(() => { const e = document.getElementById('s5ttl'); if (e) { e.style.transform = ''; e.style.filter = ''; e.style.letterSpacing = ''; } }, 90);
        }, 180);
      }
    });

    const magneticBtns = document.querySelectorAll('.btn-main, .ncta, .btn-ghost');
    const onBtnMove = (e: Event) => {
      const btn = e.currentTarget as HTMLElement;
      const me = e as MouseEvent;
      const r = btn.getBoundingClientRect();
      btn.style.transform = `translate(${(me.clientX - r.left - r.width / 2) * 0.18}px,${(me.clientY - r.top - r.height / 2) * 0.18}px)`;
    };
    const onBtnLeave = (e: Event) => {
      const btn = e.currentTarget as HTMLElement;
      btn.style.transform = '';
    };
    magneticBtns.forEach(btn => {
      btn.addEventListener('mousemove', onBtnMove);
      btn.addEventListener('mouseleave', onBtnLeave);
    });

    return () => {
      // CLEANUP
      cancelAnimationFrame(reqCur);
      cancelAnimationFrame(reqGrain);
      cancelAnimationFrame(reqDust);
      cancelAnimationFrame(reqThree);
      
      document.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      
      hovEls.forEach(el => {
        el.removeEventListener('mouseenter', onEnter);
        el.removeEventListener('mouseleave', onLeave);
      });
      magneticBtns.forEach(btn => {
        btn.removeEventListener('mousemove', onBtnMove);
        btn.removeEventListener('mouseleave', onBtnLeave);
      });
      
      intervals.forEach(i => clearInterval(i));
      if (glitchInterval) clearInterval(glitchInterval);
      
      ScrollTrigger.getAll().forEach(t => t.kill());
      
      if (renderer) {
        renderer.dispose();
      }
    };
  }, []);

  return (
    <div className="story-page">
      <Navigation />
      <div dangerouslySetInnerHTML={{ __html: storyHTML }} />
    </div>
  );
}
