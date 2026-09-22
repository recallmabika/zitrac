'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const capabilities = [
  {
    id: '01',
    num: '01',
    label: 'Advisory & Support',
    tag: '01 / Advisory & Support',
    badge: 'Harare • Bulawayo',
    title: 'Enterprise IT Consulting & Support',
    desc: 'High-intent strategic tech guidance, infrastructure audits, disaster recovery failover architectures, and round-the-clock enterprise systems support across Zimbabwe.',
    link: '/services/it-consulting/',
    linkText: 'Read Consulting Specs',
    meta: 'SLA: 24/7 Response',
    image: '/assets/it-consulting.jpg',
    imageAlt: 'IT Consulting & Enterprise Support Zimbabwe'
  },
  {
    id: '02',
    num: '02',
    label: 'Intelligent Systems',
    tag: '02 / Intelligent Systems',
    badge: 'AI Powered',
    title: 'Custom Software & AI',
    desc: 'Bespoke enterprise applications engineered with automated data pipelines, custom transaction gateways, and scalable cloud microservices.',
    link: '/services/software-development/',
    linkText: 'Explore AI Architecture',
    meta: 'Sub-Second Exec',
    image: '/assets/software-development.jpg',
    imageAlt: 'Custom Software Development & AI Zimbabwe'
  },
  {
    id: '03',
    num: '03',
    label: 'Zero-Trust Perimeter',
    tag: '03 / Zero-Trust Perimeter',
    badge: 'Active SOC',
    title: 'Cyber Security Watchdogs',
    desc: 'Continuous threat intrusion monitoring, automated honeypots, penetration testing, and zero-trust protocol enforcement guarding corporate networks.',
    link: '/services/cyber-security/',
    linkText: 'Inspect Security Protocols',
    meta: '24/7 SOC Monitoring',
    image: '/assets/cyber-1.png',
    imageAlt: 'Cyber Security Watchdogs Zimbabwe'
  },
  {
    id: '04',
    num: '04',
    label: 'Performance Engineering',
    tag: '04 / Performance Engineering',
    badge: 'Sub-Second',
    title: 'Tailored Web Engineering',
    desc: 'Ultra-fast, accessible digital frontends built for maximum crawler visibility, technical SEO dominance, and instantaneous conversion velocity.',
    link: '/services/web-design-development/',
    linkText: 'Review Web Engineering',
    meta: 'Core Web Vitals Optimized',
    image: '/assets/web-eng-1.png',
    imageAlt: 'Tailored Web Engineering Zimbabwe'
  },
  {
    id: '05',
    num: '05',
    label: 'Cloud & Domains',
    tag: '05 / Cloud & Domains',
    badge: '99.98% SLA',
    title: 'Hosting, .co.zw & Cloud Migration',
    desc: 'Reliable cPanel hosting tiers, high-speed regional DNS resolution, automated .co.zw domain registration, and AWS S3/Cloudflare R2 cloud migrations.',
    link: '/services/web-hosting-domain-registration/',
    linkText: 'Choose Hosting Tier',
    meta: 'Direct Registrar Access',
    image: '/assets/server-rack.png',
    imageAlt: 'Hosting, .co.zw & Cloud Migration Zimbabwe'
  }
];

export default function ArchitectureMatrix() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const totalHeight = rect.height - window.innerHeight;
      
      if (totalHeight <= 0) return;

      // How far down we scrolled inside the sticky track (from top entering view to bottom leaving)
      const scrolled = -rect.top;
      const progress = Math.min(Math.max(scrolled / totalHeight, 0), 1);

      // Map progress cleanly to the 5 capability indices (0, 1, 2, 3, 4)
      const index = Math.min(
        Math.floor(progress * capabilities.length),
        capabilities.length - 1
      );

      setActiveIndex(index);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const activeItem = capabilities[activeIndex];

  return (
    // Outer scroll container creates height for scroll-driven progression
    <section
      ref={containerRef}
      className="architecture-matrix relative z-10 mx-auto max-w-full border-b border-white/5 h-[320vh]"
    >
      {/* Sticky viewport frame that locks in place while user scrolls through the 5 items */}
      <div className="sticky top-0 min-h-screen flex flex-col justify-center px-[30px] py-12">
        {/* Section Header */}
        <div className="mb-8 lg:mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse"></span>
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-red-500 font-semibold">
                Architecture Matrix
              </span>
            </div>
            <h2 className="font-raleway text-2xl sm:text-4xl lg:text-5xl font-light tracking-[0.03em] text-white leading-tight">
              Integrated Technical Core Competencies
            </h2>
          </div>
          <div className="flex items-center gap-3 text-xs font-mono text-slate-400">
            <span>Scroll to explore</span>
            <span className="text-red-500 animate-bounce">↓</span>
            <span className="px-2.5 py-1 rounded-full bg-white/10 text-white font-semibold">
              {activeItem.num} / 05
            </span>
          </div>
        </div>

        {/* 3-Column Interactive Architecture Matrix View */}
        <div className="matrix-layout-container grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          
          {/* Left Column: 01 - Label Navigation Items */}
          <div className="matrix-nav-col lg:col-span-3 flex flex-col justify-center space-y-2.5">
            {capabilities.map((item, idx) => {
              const isActive = idx === activeIndex;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveIndex(idx)}
                  className={`matrix-nav-btn group w-full text-left p-3.5 sm:p-4 rounded-xl transition-all duration-300 flex items-center justify-between border ${
                    isActive
                      ? 'bg-white/10 border-white/25 shadow-lg shadow-black/40 translate-x-2'
                      : 'bg-white/[0.02] border-white/5 hover:bg-white/[0.06] hover:border-white/15'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`font-mono text-xs font-semibold tracking-wider transition-colors ${
                        isActive ? 'text-red-500' : 'text-slate-500 group-hover:text-slate-300'
                      }`}
                    >
                      {item.num}
                    </span>
                    <span className="text-slate-600">-</span>
                    <span
                      className={`font-raleway text-sm font-medium tracking-wide transition-colors ${
                        isActive ? 'text-white font-semibold' : 'text-slate-400 group-hover:text-slate-200'
                      }`}
                    >
                      {item.label}
                    </span>
                  </div>
                  <div
                    className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                      isActive ? 'bg-red-500 scale-125 shadow-[0_0_8px_rgba(239,68,68,0.8)]' : 'bg-transparent'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Center Column: Content/Text Box (Square Box with prominent border) */}
          <div className="matrix-content-col lg:col-span-5 flex flex-col justify-between p-6 sm:p-10 rounded-2xl border-2 border-white/20 bg-[#080808]/90 backdrop-blur-md relative overflow-hidden transition-all duration-500 shadow-2xl min-h-[380px]">
            {/* Ambient red subtle glow in background */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>

            <div>
              {/* Top metadata tags */}
              <div className="flex items-center justify-between gap-3 mb-5 pb-3.5 border-b border-white/10">
                <span className="font-mono text-xs tracking-[0.2em] text-red-400 uppercase font-medium">
                  {activeItem.tag}
                </span>
                <span className="font-mono text-[10px] tracking-wider text-slate-300 border border-white/15 bg-white/5 backdrop-blur-md px-3 py-1 rounded-full uppercase">
                  {activeItem.badge}
                </span>
              </div>

              {/* Main Title */}
              <h3 className="font-raleway text-2xl sm:text-3xl font-normal tracking-wide text-white mb-3.5 leading-tight transition-all duration-300">
                {activeItem.title}
              </h3>

              {/* Description */}
              <p className="font-raleway text-sm sm:text-base text-slate-300 font-light leading-relaxed mb-6 transition-all duration-300">
                {activeItem.desc}
              </p>
            </div>

            {/* Footer Action */}
            <div className="pt-5 border-t border-white/10 flex items-center justify-between gap-4 mt-auto">
              <Link
                href={activeItem.link}
                className="font-mono text-xs font-semibold text-white hover:text-red-400 tracking-[0.15em] uppercase inline-flex items-center gap-2 transition-colors group"
              >
                <span>{activeItem.linkText}</span>
                <span className="text-red-500 transition-transform group-hover:translate-x-1.5">&rarr;</span>
              </Link>
              <span className="font-mono text-[11px] text-slate-500 hidden sm:inline-block">
                {activeItem.meta}
              </span>
            </div>
          </div>

          {/* Right Column: Image Box (Large smoothly rounded container) */}
          <div className="matrix-image-col lg:col-span-4 relative rounded-[2.5rem] border-2 border-white/15 overflow-hidden min-h-[340px] sm:min-h-[400px] bg-[#050505] shadow-2xl flex items-center justify-center group">
            <Image
              key={activeItem.image}
              src={activeItem.image}
              alt={activeItem.imageAlt}
              fill
              className="object-cover transition-all duration-700 filter brightness-95 contrast-105"
              unoptimized
            />
            
            {/* Multi-layer gradient overlays for cinematic look */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/30 pointer-events-none"></div>
            
            {/* Bottom indicator badge */}
            <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between pointer-events-none z-10">
              <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-white/90 bg-black/75 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20">
                Capability {activeItem.num} of 05
              </span>
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
