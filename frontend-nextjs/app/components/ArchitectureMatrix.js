'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const capabilities = [
  {
    id: '01',
    num: '01',
    label: 'Content-as-Data',
    tag: '01 / Advisory & Support',
    badge: 'Harare • Bulawayo',
    title: 'Enterprise IT Consulting & Support',
    leadTitle: 'The database optimized for enterprise computing',
    leadDesc: 'Store and execute infrastructure blueprints as pure code, with failover architectures engineered to eliminate downtime.',
    desc: 'High-intent strategic tech guidance, infrastructure audits, disaster recovery failover architectures, and round-the-clock enterprise systems support across Zimbabwe.',
    bullets: [
      'Infrastructure as Code (IaC)',
      'High-Availability Failover Clusters',
      'Continuous SLA Monitoring & Audits',
      'Dedicated Zimbabwean Engineering Hub'
    ],
    buttonLabel: 'CONSULTING SPECS',
    link: '/services/it-consulting/',
    linkText: 'Read Consulting Specs',
    meta: 'SLA: 24/7 Response',
    image: '/assets/it-consulting.jpg',
    imageAlt: 'IT Consulting & Enterprise Support Zimbabwe',
    codeSnippet: `// zitrac.config.ts
export const cluster = defineInfrastructure({
  region: 'africa-south-harare',
  redundancy: 'dual-zone',
  slaGuarantee: '99.98%',
  socWatchdog: true,
});`
  },
  {
    id: '02',
    num: '02',
    label: 'Editorial Freedom',
    tag: '02 / Intelligent Systems',
    badge: 'AI Powered',
    title: 'Custom Software & AI Automation',
    leadTitle: 'Automated data pipelines and microservices',
    leadDesc: 'Engineer custom transaction gateways, automated intelligence routines, and high-concurrency business applications.',
    desc: 'Bespoke enterprise applications engineered with automated data pipelines, custom transaction gateways, and scalable cloud microservices.',
    bullets: [
      'Sub-second transaction pipelines',
      'Private enterprise LLM integration',
      'Event-driven microservice clusters',
      'Multi-currency payment gateways'
    ],
    buttonLabel: 'AI ARCHITECTURE',
    link: '/services/software-development/',
    linkText: 'Explore AI Architecture',
    meta: 'Sub-Second Exec',
    image: '/assets/software-development.jpg',
    imageAlt: 'Custom Software Development & AI Zimbabwe',
    codeSnippet: `// pipeline.worker.ts
export const pipeline = createAutomatedStream({
  engine: 'zitrac-ai-core',
  latencyTarget: '<120ms',
  encryption: 'AES-256-GCM',
});`
  },
  {
    id: '03',
    num: '03',
    label: 'Content Agent',
    tag: '03 / Zero-Trust Perimeter',
    badge: 'Active SOC',
    title: 'Cyber Security Watchdogs',
    leadTitle: 'Zero-trust perimeter guarding corporate networks',
    leadDesc: 'Real-time SOC monitoring, intrusion prevention sensors, and automated containment stopping threats in their tracks.',
    desc: 'Continuous threat intrusion monitoring, automated honeypots, penetration testing, and zero-trust protocol enforcement guarding corporate networks.',
    bullets: [
      '24/7 SOC sensor watchdogs',
      'Automated honeypots & traps',
      'Zero-Trust IAM protocol enforcement',
      'Quarterly penetration audits'
    ],
    buttonLabel: 'SECURITY SPECS',
    link: '/services/cyber-security/',
    linkText: 'Inspect Security Protocols',
    meta: '24/7 SOC Monitoring',
    image: '/assets/cyber-1.png',
    imageAlt: 'Cyber Security Watchdogs Zimbabwe',
    codeSnippet: `// perimeter.guard.ts
export const firewall = defineZeroTrustRules({
  authMode: 'mTLS-strict',
  socLiveFeed: true,
  honeypotTrap: 'active',
});`
  },
  {
    id: '04',
    num: '04',
    label: 'Automation at Scale',
    tag: '04 / Performance Engineering',
    badge: 'Sub-Second',
    title: 'Tailored Web Engineering',
    leadTitle: 'High-speed conversion engines built with Next.js',
    leadDesc: 'Sub-second page rendering, flawless Core Web Vitals, and programmatic SEO designed for complete crawler dominance.',
    desc: 'Ultra-fast, accessible digital frontends built for maximum crawler visibility, technical SEO dominance, and instantaneous conversion velocity.',
    bullets: [
      'Next.js static export pipelines',
      '100/100 Core Web Vitals score',
      'Structured JSON-LD schema graphs',
      'Instantaneous crawler indexing'
    ],
    buttonLabel: 'WEB SPECS',
    link: '/services/web-design-development/',
    linkText: 'Review Web Engineering',
    meta: 'Core Web Vitals Optimized',
    image: '/assets/web-eng-1.png',
    imageAlt: 'Tailored Web Engineering Zimbabwe',
    codeSnippet: `// web.performance.ts
export const edgeConfig = definePerformanceTier({
  output: 'static-export',
  lcpTarget: '<0.8s',
  seoOptimization: 'strict',
});`
  },
  {
    id: '05',
    num: '05',
    label: 'Power any Application',
    tag: '05 / Cloud & Domains',
    badge: '99.98% SLA',
    title: 'Hosting, .co.zw & Cloud Migration',
    leadTitle: 'Managed cloud clusters and direct registrar access',
    leadDesc: 'Reliable cPanel hosting, automated .co.zw registrations, and seamless migrations to AWS S3 & Cloudflare R2.',
    desc: 'Reliable cPanel hosting tiers, high-speed regional DNS resolution, automated .co.zw domain registration, and AWS S3/Cloudflare R2 cloud migrations.',
    bullets: [
      'Direct .co.zw registrar channel',
      'Cloudflare R2 & AWS S3 object store',
      'Automated daily off-site backups',
      '99.98% high availability uptime SLA'
    ],
    buttonLabel: 'HOSTING TIERS',
    link: '/services/web-hosting-domain-registration/',
    linkText: 'Choose Hosting Tier',
    meta: 'Direct Registrar Access',
    image: '/assets/server-rack.png',
    imageAlt: 'Hosting, .co.zw & Cloud Migration Zimbabwe',
    codeSnippet: `// cloud.storage.ts
export const cloudBucket = mountObjectStorage({
  cdn: 'Cloudflare-R2',
  replication: 'multi-region',
  backupSchedule: 'daily-cron',
});`
  }
];

export default function ArchitectureMatrix() {
  const [activeIndex, setActiveIndex] = useState(0);
  const itemRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      const viewportCenter = window.innerHeight * 0.45;
      let closestIdx = 0;
      let minDistance = Infinity;

      for (let i = 0; i < capabilities.length; i++) {
        const el = itemRefs.current[i];
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        const itemCenter = rect.top + rect.height * 0.4;
        const distance = Math.abs(itemCenter - viewportCenter);
        if (distance < minDistance) {
          minDistance = distance;
          closestIdx = i;
        }
      }

      setActiveIndex(closestIdx);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  const scrollToItem = (idx) => {
    setActiveIndex(idx);
    const target = itemRefs.current[idx];
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const activeItem = capabilities[activeIndex];

  return (
    <section className="architecture-matrix relative z-10 mx-auto max-w-full border-b border-white/5">
      {/* Full-Window Sticky Zimbabwe Dotted Map Background */}
      <div className="architecture-matrix-map-layer">
        <div className="architecture-matrix-map-layer-inner" />
      </div>

      <div className="relative z-10 px-[30px] py-16 lg:py-24">
        {/* Section Header */}
        <div className="mb-12 lg:mb-16 max-w-3xl">
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

      {/* Sanity-Inspired 3-Column Scrollytelling Grid */}
      <div className="matrix-layout-container grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start relative z-10">
        
        {/* Left Column: Sticky Nav (2 cols on lg screen) */}
        <div className="matrix-nav-col lg:col-span-2 lg:sticky lg:top-24 self-start space-y-4">
          {/* Nav Items List */}
          <div className="space-y-1.5">
            {capabilities.map((item, idx) => {
              const isActive = idx === activeIndex;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => scrollToItem(idx)}
                  className={`matrix-nav-btn group w-full text-left py-1.5 px-0 transition-all duration-200 flex items-center gap-2.5 bg-transparent shadow-none border-none outline-none ${
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
                    {item.label}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Decorative Dot Matrix Rectangle - Starts right below the links with generous height */}
          <div className="matrix-dot-grid hidden lg:block pt-6 pb-2 select-none pointer-events-none opacity-40">
            <div className="grid grid-cols-10 gap-2.5 w-full max-w-[170px]">
              {Array.from({ length: 220 }).map((_, i) => (
                <div key={i} className="w-1 h-1 rounded-full bg-slate-400"></div>
              ))}
            </div>
          </div>
        </div>

        {/* Center Column: Continuously Scrolling Content Flow (4 cols on lg screen) */}
        <div className="matrix-content-col lg:col-span-4 flex flex-col">
          {capabilities.map((item, idx) => (
            <div
              key={item.id}
              ref={(el) => (itemRefs.current[idx] = el)}
              className="min-h-[75vh] lg:min-h-[85vh] flex flex-col justify-center py-12 lg:py-24"
            >
              {/* Category Tag Pill */}
              <div className="mb-4">
                <span className="inline-flex items-center px-3 py-1 rounded-full border border-white/15 bg-white/5 text-[11px] font-mono text-slate-300 uppercase tracking-wider">
                  {item.tag}
                </span>
              </div>

              {/* Big Bold Headline */}
              <h3 className="font-raleway text-3xl sm:text-4xl lg:text-[2.65rem] font-medium tracking-tight text-white leading-[1.15] mb-5">
                {item.leadTitle}
              </h3>

              {/* Lead Body Paragraph */}
              <p className="font-raleway text-sm sm:text-base text-slate-200 leading-relaxed font-light mb-6">
                {item.leadDesc}
              </p>

              {/* Bullet Points with Crisp White Text */}
              <ul className="space-y-3 mb-8">
                {item.bullets.map((bullet, bIdx) => (
                  <li key={bIdx} className="flex items-start gap-3 text-sm text-white">
                    <span className="text-red-500 font-bold leading-none mt-1 text-base">•</span>
                    <span className="font-raleway font-normal tracking-wide text-slate-100">{bullet}</span>
                  </li>
                ))}
              </ul>

              {/* Pill Button - Transparent border-only */}
              <div>
                <Link
                  href={item.link}
                  className="matrix-cta-btn inline-flex items-center justify-center rounded-full border border-white/60 bg-transparent hover:border-red-500 hover:text-red-500 px-6 py-2.5 font-mono text-xs font-semibold tracking-[0.2em] uppercase text-white transition-all duration-300 group shadow-none"
                >
                  <span>{item.buttonLabel}</span>
                </Link>
              </div>

              {/* Mobile-Only Visual Card: Visible only on mobile/tablet where right sticky column is hidden */}
              <div className="mt-8 block lg:hidden">
                <div className="relative w-full h-64 rounded-none overflow-hidden mb-4">
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    fill
                    className="object-cover filter contrast-105"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                </div>

                <div className="rounded-none border-0 bg-[#050505]/95 p-2.5 font-mono text-xs text-slate-200 max-w-xs">
                  <div className="flex items-center justify-between pb-1.5 mb-1.5 border-0 text-[9px] text-slate-400">
                    <div className="flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                    </div>
                    <span className="text-slate-500 text-[8.5px]">ARCHITECTURE.CONFIG.TS</span>
                  </div>
                  <pre className="text-slate-200 leading-tight overflow-x-auto text-[9.5px]">
                    <code>{item.codeSnippet}</code>
                  </pre>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right Column: Sticky Studio Image Showcase (6 cols on lg screen, moved higher up) */}
        <div className="matrix-image-col hidden lg:block lg:col-span-6 lg:sticky lg:top-20 self-start relative min-h-[520px] sm:min-h-[560px]">
          
          {/* Background Studio Browser Card Shell (Borders removed) */}
          <div className="matrix-studio-frame absolute inset-0 w-full h-full rounded-none border-0 bg-gradient-to-br from-[#121217] via-[#09090b] to-[#040405] shadow-none p-6 sm:p-8 overflow-hidden z-10 flex flex-col justify-between">
            {/* Studio Browser Header */}
            <div className="matrix-studio-header flex items-center justify-between pb-4 border-0 text-xs font-mono text-slate-400">
              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                <span className="tracking-wider uppercase">
                  Architecture Studio / <strong className="matrix-studio-title text-white font-medium transition-all duration-300">{activeItem.title}</strong>
                </span>
              </div>
              <div className="flex items-center gap-2 opacity-70">
                <span className="w-2 h-2 rounded-full bg-slate-600"></span>
                <span className="w-2 h-2 rounded-full bg-slate-600"></span>
                <span className="w-2 h-2 rounded-full bg-slate-600"></span>
              </div>
            </div>

            {/* Subtle Ambient Red Core Glow */}
            <div className="absolute -bottom-16 -right-16 w-80 h-80 rounded-full bg-red-600/20 blur-[100px] pointer-events-none"></div>
          </div>

          {/* Overlapping Main High-Res Image Cards - Stacked with smooth crossfade, zero borders, badges removed */}
          {capabilities.map((item, idx) => (
            <div
              key={`img-${item.id}`}
              className="matrix-main-image-card absolute top-16 right-5 bottom-16 left-[12%] rounded-none overflow-hidden border-0 shadow-none z-20 group transition-all duration-500 ease-out"
              style={{
                opacity: idx === activeIndex ? 1 : 0,
                transform: idx === activeIndex ? 'scale(1)' : 'scale(0.96)',
                pointerEvents: idx === activeIndex ? 'auto' : 'none',
              }}
            >
              <Image
                src={item.image}
                alt={item.imageAlt}
                fill
                className="object-cover filter contrast-105 brightness-100 transition-transform duration-700 group-hover:scale-105"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent pointer-events-none"></div>
            </div>
          ))}

          {/* Overlapping Floating Code Terminals - Small, compact, non-rounded, zero borders */}
          {capabilities.map((item, idx) => (
            <div
              key={`code-${item.id}`}
              className="matrix-code-card absolute -bottom-2 left-4 sm:left-6 w-[50%] max-w-[280px] rounded-none border-0 bg-[#050505]/95 backdrop-blur-2xl p-2.5 sm:p-3 shadow-none z-30 font-mono text-xs text-slate-200 overflow-hidden transition-all duration-500 ease-out"
              style={{
                opacity: idx === activeIndex ? 1 : 0,
                transform: idx === activeIndex ? 'translateY(0)' : 'translateY(8px)',
                pointerEvents: idx === activeIndex ? 'auto' : 'none',
              }}
            >
              <div className="flex items-center justify-between pb-1.5 mb-1.5 border-0 text-[9px] text-slate-400">
                <div className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                </div>
                <span className="text-slate-500 tracking-wider text-[8.5px]">ARCHITECTURE.CONFIG.TS</span>
              </div>
              <pre className="text-slate-200 leading-tight overflow-x-auto text-[9px] sm:text-[9.5px]">
                <code>{item.codeSnippet}</code>
              </pre>
            </div>
          ))}

        </div>

      </div>
      </div>
    </section>
  );
}
