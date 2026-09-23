'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function ReliabilityBenchmark() {
  const [activeIndex, setActiveIndex] = useState(0);
  const itemRefs = useRef([]);

  const benchmarks = [
    {
      id: 'geonav',
      num: '01',
      navLabel: 'Geolocation Perimeter',
      tag: '01 / GEOLOCATION RADAR',
      badge: 'Harare & HQ Active Radar',
      title: 'Harare & Multi-Branch Geocoded Tactical Perimeter',
      metric: '4 Nodes',
      metricLabel: 'Active Geocoded Endpoints',
      desc: 'Tactical geolocation perimeter mapping across Harare Branch (-17.8249° Lat, 31.0530° Lng) and Headquarters. Continuously monitors live bus, wireless listeners, and physical facilities under zero active elevated threats.',
      image: '/assets/artis-geomap-harare.png',
      imageAlt: 'ARTIS CyberSecOps - Geolocation Tactical Perimeter Map for Harare Branch and Multi-Branch Facilities',
      bullets: [
        'Harare Branch & Headquarters geocoded physical facilities tracking',
        'Global WGS84 grid alignment with live wireless bus listeners',
        'Zero elevated alerts & instant tactical fly-to perimeter diagnostics',
        'Real-time physical boundary monitoring across high-security zones',
      ],
      telemetry: {
        node: 'Harare Branch (-17.8249, 31.0530)',
        latency: 'Live WGS84 Grid Active',
        health: 'Risk 20/100 (Normal)',
      },
      buttonLabel: 'Inspect Perimeter Specs',
    },
    {
      id: 'soc-overview',
      num: '02',
      navLabel: 'Host OS & Device Bridge',
      tag: '02 / ENDPOINT SURVEILLANCE',
      badge: 'Zero-Mock Telemetry',
      title: 'Real-Time Host OS Telemetry & Digital Forensics Bridge',
      metric: '100% Genuine',
      metricLabel: 'Live Host OS Telemetry',
      desc: 'Comprehensive CyberSecOps monitoring active host processes, Chrome/Edge SQLite shadow-copy browser history, Windows Event 307 print spools, and hardware USB digital forensics device bridging (Huawei & Arcadyan gateways, Galaxy devices).',
      image: '/assets/artis-soc-overview.png',
      imageAlt: 'ARTIS CyberSecOps - Operations Overview, Monitored Organization Devices and Digital Forensics Bridge',
      bullets: [
        'Cross-platform agent capturing active processes & print spooling',
        'Hardware digital forensics bridge for USB & Wi-Fi ADB devices',
        'Strict zero-mock policy: 100% genuine OS telemetry collection',
        'Sub-second process anomaly alerting and automated sandbox isolation',
      ],
      telemetry: {
        node: 'Monitored Org Devices (4)',
        latency: 'USB Hardware Bus Active',
        health: 'All Endpoints Online',
      },
      buttonLabel: 'Examine Agent Specs',
    },
    {
      id: 'mitre-compliance',
      num: '03',
      navLabel: 'MITRE ATT&CK & Audit',
      tag: '03 / THREAT DETECTION',
      badge: 'FastAPI Detection Engine',
      title: 'MITRE ATT&CK Matrix & Cryptographically Signed Reports',
      metric: 'Ed25519',
      metricLabel: 'Chain-of-Custody Root',
      desc: 'Real-time MITRE ATT&CK evaluation engine (T1059, T1115, T1048, T1052, T1110, T1071) with FastAPI backend. Exports tamper-evident, cryptographically signed PDF incident reports with SHA-256 and Ed25519 root authority.',
      image: '/assets/artis-geomap-hq.png',
      imageAlt: 'ARTIS CyberSecOps - Headquarters Tactical Perimeter and Cryptographic Incident Verification',
      bullets: [
        'Automated MITRE ATT&CK matrix rule evaluation & real-time alerts',
        'Tamper-evident incident PDF reports with Ed25519 & SHA-256 signatures',
        'Immutable audit ledger recording all telemetry & access events',
        'Direct verification endpoint (/verify-report) for court-admissible audit proof',
      ],
      telemetry: {
        node: 'FastAPI MITRE Engine',
        latency: 'Sub-second Rule Match',
        health: 'Ed25519 Root Verified',
      },
      buttonLabel: 'Audit Cryptography',
    },
  ];

  // Scrollspy to automatically update active item based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight * 0.4;
      itemRefs.current.forEach((el, index) => {
        if (!el) return;
        const top = el.offsetTop;
        const height = el.offsetHeight;
        if (scrollPosition >= top && scrollPosition < top + height) {
          setActiveIndex(index);
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToItem = (idx) => {
    setActiveIndex(idx);
    const target = itemRefs.current[idx];
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const activeItem = benchmarks[activeIndex];

  return (
    <section className="reliability-benchmark relative z-10 mx-auto max-w-full border-t border-white/5">
      <div className="relative z-10 px-[30px] py-16 lg:py-24">
        {/* Section Header */}
        <div className="animate-on-scroll mb-12 lg:mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse"></span>
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-red-500 font-semibold">
                Authentic CyberSecOps Telemetry &bull; ARTIS
              </span>
            </div>
            <h2 className="font-raleway text-2xl sm:text-4xl lg:text-5xl font-light tracking-[0.03em] text-white leading-tight">
              Advanced Real-Time Incident Security (ARTIS)
            </h2>
            <p className="font-raleway text-sm sm:text-base text-slate-300 font-light mt-3 leading-relaxed max-w-2xl">
              Production enterprise SOC platform built by ZITRAC for the Cyberus Competitions (COSE). Powered by FastAPI, MITRE ATT&amp;CK, 100% genuine OS telemetry, and Ed25519 cryptographic chain-of-custody.
            </p>
          </div>

          <div className="shrink-0 flex items-center gap-3">
            <Link
              href="/contact/"
              className="benchmark-cta-primary inline-flex items-center justify-center rounded-full bg-red-600 px-7 py-3 text-xs font-mono font-semibold uppercase tracking-[0.2em] text-white hover:bg-red-500 transition-all duration-300 shadow-none border-0"
            >
              <span>Request SOC Brief</span>
            </Link>
            <Link
              href="/services/cyber-security/"
              className="benchmark-cta-secondary inline-flex items-center justify-center rounded-full border border-white/20 bg-transparent px-7 py-3 text-xs font-mono font-semibold uppercase tracking-[0.2em] text-white hover:border-red-500 hover:text-red-500 transition-all duration-300 shadow-none"
            >
              <span>Cyber Security Core</span>
            </Link>
          </div>
        </div>

        {/* 3-Column Scrollytelling Layout matching Architecture Matrix & School Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start relative z-10">
          
          {/* Left Column: Sticky Navigation (2 cols on lg screen) */}
          <div className="matrix-nav-col lg:col-span-2 lg:sticky lg:top-24 self-start space-y-4">
            <div className="space-y-1.5">
              {benchmarks.map((item, idx) => {
                const isActive = idx === activeIndex;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => scrollToItem(idx)}
                    className={`matrix-nav-btn group w-full text-left py-2 px-0 transition-all duration-200 flex items-center gap-2.5 bg-transparent shadow-none border-none outline-none ${
                      isActive
                        ? 'matrix-nav-btn-active text-red-600 font-semibold'
                        : 'text-slate-400 hover:text-white hover:translate-x-0.5'
                    }`}
                  >
                    <span
                      className={`matrix-nav-num font-mono text-[11px] font-semibold transition-colors ${
                        isActive
                          ? 'text-red-600 font-bold'
                          : 'text-slate-500 group-hover:text-slate-300'
                      }`}
                    >
                      {item.num}
                    </span>
                    <span className="text-xs tracking-wide font-light truncate group-hover:underline">
                      {item.navLabel}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Decorative Dot Matrix Rectangle */}
            <div className="matrix-dot-grid hidden lg:block pt-6 pb-2 select-none pointer-events-none opacity-40">
              <div className="grid grid-cols-10 gap-2.5 w-full max-w-[170px]">
                {Array.from({ length: 180 }).map((_, i) => (
                  <div key={i} className="w-1 h-1 rounded-full bg-slate-400"></div>
                ))}
              </div>
            </div>

            {/* Quick Authority Note */}
            <div className="hidden lg:block pt-4 border-t border-white/10 text-[10px] font-mono text-slate-400">
              <div className="text-emerald-400 font-medium mb-1">&bull; Production Live</div>
              <div>FastAPI + MITRE ATT&amp;CK</div>
            </div>
          </div>

          {/* Center Column: Continuously Scrolling Content Flow (4 cols on lg screen) */}
          <div className="matrix-content-col lg:col-span-4 flex flex-col">
            {benchmarks.map((item, idx) => (
              <div
                key={item.id}
                ref={(el) => (itemRefs.current[idx] = el)}
                className="min-h-[75vh] lg:min-h-[85vh] flex flex-col justify-center py-12 lg:py-20"
              >
                {/* Category Tag Pill */}
                <div className="mb-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full border border-white/15 bg-white/5 text-[10px] font-mono text-slate-300 uppercase tracking-wider">
                    {item.badge}
                  </span>
                </div>

                {/* Main Heading */}
                <h3 className="font-raleway text-2xl sm:text-3xl font-light text-white tracking-tight leading-snug mb-5">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="font-raleway text-sm sm:text-base text-slate-300 font-light leading-relaxed mb-6">
                  {item.desc}
                </p>

                {/* Key Bullet Specifications */}
                <div className="space-y-3 mb-8">
                  {item.bullets.map((bullet, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-600 mt-2 shrink-0"></span>
                      <span className="font-raleway text-xs sm:text-sm text-slate-300 font-light leading-normal">
                        {bullet}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Pill CTA Button */}
                <div>
                  <Link
                    href="/services/cyber-security/"
                    className="matrix-cta-btn inline-flex items-center justify-center rounded-full border border-white/60 bg-transparent hover:border-red-500 hover:text-red-500 px-6 py-2.5 font-mono text-xs font-semibold tracking-[0.2em] uppercase text-white transition-all duration-300 group shadow-none"
                  >
                    <span>{item.buttonLabel}</span>
                  </Link>
                </div>

                {/* Mobile-Only Visual Image: Visible only on mobile/tablet where right sticky column is hidden */}
                <div className="mt-8 block lg:hidden">
                  <div className="relative w-full h-64 rounded-none overflow-hidden mb-4 border border-white/10 bg-black/40">
                    <Image
                      src={item.image}
                      alt={item.imageAlt}
                      fill
                      className="object-contain object-top filter contrast-105"
                      unoptimized
                    />
                  </div>

                  <div className="grid grid-cols-3 gap-2 p-2.5 rounded-none bg-[#050505]/95 border border-white/10 text-xs font-mono text-slate-200">
                    <div>
                      <div className="text-[9px] uppercase tracking-wider text-slate-400">Endpoint</div>
                      <div className="text-[10px] text-slate-200 truncate mt-0.5">{item.telemetry.node}</div>
                    </div>
                    <div>
                      <div className="text-[9px] uppercase tracking-wider text-slate-400">Channel</div>
                      <div className="text-[10px] text-emerald-400 truncate mt-0.5">{item.telemetry.latency}</div>
                    </div>
                    <div>
                      <div className="text-[9px] uppercase tracking-wider text-slate-400">State</div>
                      <div className="text-[10px] text-slate-200 truncate mt-0.5">{item.telemetry.health}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Sticky Studio Image Showcase (6 cols on lg screen) */}
          <div className="matrix-image-col hidden lg:block lg:col-span-6 lg:sticky lg:top-20 self-start space-y-4">
            
            {/* Main Studio Frame Container */}
            <div className="relative min-h-[460px] sm:min-h-[500px]">
              {/* Background Studio Browser Card Shell */}
              <div className="matrix-studio-frame absolute inset-0 w-full h-full rounded-none border-0 bg-gradient-to-br from-[#121217] via-[#09090b] to-[#040405] shadow-none p-6 sm:p-8 overflow-hidden z-10 flex flex-col justify-between">
                {/* Studio Browser Header */}
                <div className="matrix-studio-header flex items-center justify-between pb-4 border-0 text-xs font-mono text-slate-400">
                  <div className="flex items-center gap-2.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span className="tracking-wider uppercase text-[11px]">
                      ARTIS SOC Operations / <strong className="matrix-studio-title text-white font-medium transition-all duration-300">{activeItem.navLabel}</strong>
                    </span>
                  </div>
                  <div className="flex items-center gap-2 opacity-70">
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-600"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-600"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-600"></span>
                  </div>
                </div>

                {/* Subtle Ambient Red Core Glow */}
                <div className="absolute -bottom-16 -right-16 w-80 h-80 rounded-full bg-red-600/20 blur-[100px] pointer-events-none"></div>
                <div className="absolute -top-16 -left-16 w-64 h-64 rounded-full bg-emerald-500/10 blur-[90px] pointer-events-none"></div>
              </div>

              {/* Overlapping Main High-Res Image Cards - Fitted cleanly so the entire dashboard is visible */}
              {benchmarks.map((item, idx) => (
                <div
                  key={`img-${item.id}`}
                  className="matrix-main-image-card absolute top-12 right-2 bottom-2 left-2 rounded-none overflow-hidden border-0 shadow-none z-20 group transition-all duration-500 ease-out bg-transparent p-2 sm:p-3"
                  style={{
                    opacity: idx === activeIndex ? 1 : 0,
                    transform: idx === activeIndex ? 'scale(1)' : 'scale(0.98)',
                    pointerEvents: idx === activeIndex ? 'auto' : 'none',
                  }}
                >
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    fill
                    className="object-contain object-top filter contrast-[1.02] brightness-100 transition-transform duration-700 hover:scale-[1.02]"
                    unoptimized
                  />
                </div>
              ))}
            </div>

            {/* 3 Telemetry Metrics Clean Display Below the Studio Frame (No borders, responsive contrast in both light & dark mode) */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-black/10 dark:border-white/10">
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span>
                  <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400 font-semibold">
                    Tactical Endpoint
                  </span>
                </div>
                <div className="text-sm sm:text-base font-mono text-[#0a0a0f] dark:text-white truncate font-medium mt-1">
                  {activeItem.telemetry.node}
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400 font-semibold">
                    Sensor Channel
                  </span>
                </div>
                <div className="text-sm sm:text-base font-mono text-emerald-600 dark:text-emerald-400 truncate font-medium mt-1">
                  {activeItem.telemetry.latency}
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                  <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400 font-semibold">
                    Compliance State
                  </span>
                </div>
                <div className="text-sm sm:text-base font-mono text-[#0a0a0f] dark:text-white truncate font-medium mt-1">
                  {activeItem.telemetry.health}
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
