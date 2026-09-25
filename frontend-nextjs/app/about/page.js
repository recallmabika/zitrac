'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function AboutPage() {
  const [activeValueIndex, setActiveValueIndex] = useState(0);
  const valueItemRefs = useRef([]);

  const coreValues = [
    {
      id: '01',
      num: '01',
      label: 'Hardened Resilience',
      tag: '01 / Operational Durability',
      title: 'Hardened Resilience',
      leadTitle: 'Engineered for reality, not ideal conditions',
      leadDesc: 'We do not build for ideal conditions; we design for real-world operational realities. ZITRAC systems are engineered to endure Southern Africa’s unique infrastructure, economic, and environmental pressures. If it isn\'t built to stay working, it isn\'t finished.',
      bullets: [
        'Tolerant to power, network & ISP disruptions',
        'Dual-zone automated failover topologies',
        'Continuous self-healing health sensors',
        'Sub-second disaster recovery runbooks'
      ],
      buttonLabel: 'RESILIENCE SPECS',
      link: '/contact/',
      image: '/assets/server-rack.png',
      imageAlt: 'High-availability enterprise server rack infrastructure',
      codeSnippet: `// resilience.core.ts
export const failoverCluster = defineResilienceTier({
  region: 'africa-south-harare',
  gridTolerance: 'extreme',
  zeroDowntimeSLA: '99.98%',
  healthPulse: 'continuous'
});`
    },
    {
      id: '02',
      num: '02',
      label: 'Pragmatic Ingenuity',
      tag: '02 / High-Availability Architecture',
      title: 'Pragmatic Ingenuity',
      leadTitle: 'Practical tools that solve immediate bottlenecks',
      leadDesc: 'We reject technology for technology\'s sake. We translate elite global cloud and software architectures into practical, high-availability tools that solve immediate, tangible operational bottlenecks for our clients.',
      bullets: [
        'Tailored business automation pipelines',
        'Zero bloat, lean purpose-driven execution',
        'High-concurrency database optimizations',
        'Direct integration with existing workflows'
      ],
      buttonLabel: 'INGENUITY SPECS',
      link: '/contact/',
      image: '/assets/consulting-1.png',
      imageAlt: 'Pragmatic enterprise architectural consulting and software modeling',
      codeSnippet: `// pragmatic.worker.ts
export const automationPipeline = createPragmaticFlow({
  eliminateBottlenecks: true,
  concurrencyTarget: '10k-ops/s',
  latency: '<150ms',
  auditable: true
});`
    },
    {
      id: '03',
      num: '03',
      label: 'Ironclad Sovereignty',
      tag: '03 / Zero-Trust Security',
      title: 'Ironclad Sovereignty',
      leadTitle: 'Security as a pillar of structural integrity',
      leadDesc: 'Trust is built on security. We treat cybersecurity and data protection as core pillars of structural integrity, shielding the critical digital assets of the region\'s finance, education, conservation, and commercial sectors.',
      bullets: [
        'Autonomous AI threat detection watchdogs',
        'Military-grade cryptographic encryption at rest',
        'Zero-trust identity & perimeter governance',
        'Sovereign data residency compliance'
      ],
      buttonLabel: 'SECURITY SPECS',
      link: '/contact/',
      image: '/assets/cyber-1.png',
      imageAlt: 'Hardened cyber defense, encrypted integrity, and data sovereignty',
      codeSnippet: `// sovereignty.guard.ts
export const securityPerimeter = enforceSovereignSecurity({
  dataVault: 'encrypted-aes256',
  zeroTrustIAM: 'strict-mTLS',
  watchdogs: 'active-ai-daemon',
  domesticCompliance: true
});`
    },
    {
      id: '04',
      num: '04',
      label: 'Indigenous Leadership',
      tag: '04 / Homegrown Excellence',
      title: 'Indigenous Leadership',
      leadTitle: 'World-class engineering right here in Zimbabwe',
      leadDesc: 'We take immense pride in building a world-class technology consulting powerhouse right here in Zimbabwe. We prove every day that homegrown talent can deliver elite enterprise engineering on par with global giants.',
      bullets: [
        'Harare-based primary engineering desk',
        'Direct local registrar & registry delegation',
        'Deep contextual knowledge of local dynamics',
        'Global-benchmark software craftsmanship'
      ],
      buttonLabel: 'LOCAL FOOTPRINT',
      link: '/contact/',
      image: '/assets/zimbabwe-dots-map.png',
      imageAlt: 'Zimbabwe national footprint and regional indigenous engineering leadership',
      codeSnippet: `// indigenous.registry.ts
export const nationalHQ = defineRegistryHub({
  jurisdiction: 'Harare, Zimbabwe',
  talentBase: 'Indigenous-Elite-Engineers',
  globalBenchmark: true,
  directDelegation: '.co.zw'
});`
    },
    {
      id: '05',
      num: '05',
      label: 'Technological Self-Reliance',
      tag: '05 / Sustainable Independence',
      title: 'Technological Self-Reliance',
      leadTitle: 'Enabling African enterprises to own their destiny',
      leadDesc: 'Our ultimate metric of success is the independence of our clients and our region. We foster sustainable digital transformation that reduces dependency on external legacy systems, allowing African enterprises to control their own digital destinies.',
      bullets: [
        'Reduction of external legacy lock-in',
        'Sovereign cloud & storage architectures',
        'Transferable skills & internal empowerment',
        'Future-proof, open standard infrastructure'
      ],
      buttonLabel: 'INDEPENDENCE SPECS',
      link: '/contact/',
      image: '/assets/hero-world-map.png',
      imageAlt: 'Global telecommunication routing and autonomous African technological sovereignty',
      codeSnippet: `// self-reliance.arch.ts
export const sovereignSystem = fosterIndependence({
  externalDependency: 'minimized',
  openStandards: true,
  sustainableTransformation: true,
  dataOwnership: '100%-client-held'
});`
    },
  ];

  // Scroll observer to update active value index
  useEffect(() => {
    const handleScroll = () => {
      const viewportCenter = window.innerHeight * 0.45;
      let closestIdx = 0;
      let minDistance = Infinity;

      for (let i = 0; i < coreValues.length; i++) {
        const el = valueItemRefs.current[i];
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        const itemCenter = rect.top + rect.height * 0.4;
        const distance = Math.abs(itemCenter - viewportCenter);
        if (distance < minDistance) {
          minDistance = distance;
          closestIdx = i;
        }
      }

      setActiveValueIndex(closestIdx);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [coreValues.length]);

  const scrollToValue = (idx) => {
    setActiveValueIndex(idx);
    const target = valueItemRefs.current[idx];
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const activeValue = coreValues[activeValueIndex];

  return (
    <div className="services-page-wrapper relative bg-white dark:bg-black transition-colors duration-300">
      {/* ──────────────────────────────────────────────────────────
          HERO SECTION: FULL WINDOW (min-h-screen)
          - Clear image background
          - Docked content card with breadcrumbs
          ────────────────────────────────────────────────────────── */}
      <section className="relative z-10 w-full min-h-screen flex flex-col justify-end bg-black overflow-hidden">
        {/* Crisp background imagery */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <Image
            src="/assets/hero-business-meeting.jpg"
            alt="ZITRAC Executive Leadership & Indigenous Enterprise Engineering"
            fill
            className="object-cover object-center"
            unoptimized
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/40" />
        </div>

        {/* Docked Content Card */}
        <div className="relative z-10 w-full flex justify-end">
          <div className="relative w-full md:w-[62%] lg:w-[56%] min-h-[46vh] lg:min-h-[48vh] bg-white text-slate-900 rounded-none rounded-tl-[48px] sm:rounded-tl-[64px] shadow-2xl p-8 sm:p-12 lg:p-14 flex flex-col justify-center animate-drop-top">
            {/* Floating Breadcrumb Tab */}
            <nav
              aria-label="Breadcrumb"
              className="absolute -top-3.5 left-8 sm:left-14 px-4 py-0.5 bg-white inline-flex items-center gap-2 rounded-t-lg shadow-none"
            >
              <Link
                href="/"
                className="font-raleway text-xs sm:text-sm font-semibold uppercase tracking-[0.22em] text-slate-500 hover:text-red-600 transition-colors"
              >
                HOME
              </Link>
              <span className="text-slate-400 font-raleway text-xs sm:text-sm select-none">/</span>
              <span className="font-raleway text-xs sm:text-sm font-semibold uppercase tracking-[0.22em] text-slate-900">
                About Us
              </span>
            </nav>

            <div className="space-y-4">
              <div className="text-xs font-mono uppercase tracking-[0.2em] text-slate-500">
                Zimbabwe&apos;s Indigenous Enterprise Engineering House
              </div>

              <h1 className="hero-title-drop font-raleway text-2xl sm:text-4xl lg:text-[2.6rem] font-light tracking-[0.03em] text-slate-900 leading-[1.2] sm:leading-[1.25]">
                Engineered for Resilience. <br className="hidden sm:inline" />
                <span className="font-medium text-slate-950">Built to Stay Working.</span>
              </h1>

              <p className="hero-desc-zoom font-raleway text-sm sm:text-base text-slate-600 leading-relaxed font-light text-justify">
                ZITRAC Technologies is Zimbabwe’s foremost indigenous enterprise engineering house. We bridge the gap between world-class software and cloud architectures and Southern Africa’s real-world operational challenges.
              </p>

              <div className="flex items-center gap-2 pt-2 text-xs font-mono text-slate-500">
                <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Harare Headquarters &bull; Zero Single Points of Failure</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────
          MAIN BODY: EXPANDED FULL-WIDTH CONTAINER (px-[30px])
          ────────────────────────────────────────────────────────── */}
      <main className="relative z-10 mx-auto max-w-full px-[30px] py-16 lg:py-24 space-y-24">
        
        {/* Core Narrative with Supporting Image */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-400">
              <span className="w-1.5 h-1.5 rounded-full bg-neutral-900 dark:bg-white" />
              Corporate Philosophy
            </div>

            <h2 className="font-raleway text-2xl sm:text-3xl lg:text-4xl font-light text-neutral-900 dark:text-white leading-tight">
              Technology should never be a single point of failure.
            </h2>

            <p className="text-neutral-600 dark:text-neutral-400 text-sm sm:text-base leading-relaxed font-light text-justify">
              At our core, we believe that technology should empower, not constrain. We partner with organizations across the region to deploy high-availability infrastructure, intelligent automation, and hardened security systems that keep business moving forward.
            </p>

            <p className="text-neutral-600 dark:text-neutral-400 text-sm sm:text-base leading-relaxed font-light text-justify">
              Whether orchestrating sovereign data vaults, provisioning unthrottled local DNS and NVMe hosting pipelines, or authoring custom multi-tenant ERP software for schools and corporate enterprises, we engineer solutions designed to excel under real Southern African conditions.
            </p>
          </div>

          <div className="lg:col-span-5 relative h-[360px] sm:h-[420px] rounded-3xl overflow-hidden border border-neutral-200 dark:border-white/[0.08] shadow-lg">
            <Image
              src="/assets/artis-soc-overview.png"
              alt="ZITRAC Real-time System Monitoring and High-Availability Engineering"
              fill
              className="object-cover object-center"
              unoptimized
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
              <div className="text-xs font-mono uppercase tracking-[0.18em] text-neutral-300">
                System Observability
              </div>
              <div className="font-raleway text-base font-medium">
                Autonomous Reliability & Operational Continuity
              </div>
            </div>
          </div>
        </section>

        {/* Our Foundation: Vision & Mission Dual Presentation */}
        <section className="space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-neutral-200 dark:border-white/[0.08] pb-6">
            <div>
              <div className="text-xs font-mono uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-400 mb-2">
                Our Foundation
              </div>
              <h2 className="font-raleway text-2xl sm:text-3xl font-light text-neutral-900 dark:text-white">
                Purpose &amp; Direction
              </h2>
            </div>
            <span className="text-xs font-mono text-neutral-500 dark:text-neutral-400">
              STRATEGIC CHARTER
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Vision Card */}
            <div className="group rounded-3xl border border-neutral-200 dark:border-white/[0.08] bg-neutral-50 dark:bg-neutral-950/60 overflow-hidden flex flex-col justify-between">
              <div className="p-8 sm:p-10 space-y-4">
                <div className="text-xs font-mono uppercase tracking-[0.22em] text-neutral-500 dark:text-neutral-400">
                  OUR VISION
                </div>
                <h3 className="font-raleway text-2xl font-light text-neutral-900 dark:text-white">
                  Southern Africa&apos;s Premier Infrastructure Powerhouse
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed font-light text-justify">
                  To become Southern Africa&apos;s premier technology infrastructure and software consulting powerhouse, delivering resilient enterprise systems that drive digital transformation across education, conservation, finance, and industrial commerce.
                </p>
              </div>

              <div className="relative h-48 w-full border-t border-neutral-200 dark:border-white/[0.08]">
                <Image
                  src="/assets/chipinge-safari.png"
                  alt="ZITRAC systems driving conservation and commercial industry"
                  fill
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  unoptimized
                />
                <div className="absolute inset-0 bg-neutral-950/40" />
                <div className="absolute bottom-4 left-6 text-xs font-mono text-white tracking-widest uppercase">
                  Conservation &bull; Education &bull; Finance &bull; Industry
                </div>
              </div>
            </div>

            {/* Mission Card */}
            <div className="group rounded-3xl border border-neutral-200 dark:border-white/[0.08] bg-neutral-50 dark:bg-neutral-950/60 overflow-hidden flex flex-col justify-between">
              <div className="p-8 sm:p-10 space-y-4">
                <div className="text-xs font-mono uppercase tracking-[0.22em] text-neutral-500 dark:text-neutral-400">
                  OUR MISSION
                </div>
                <h3 className="font-raleway text-2xl font-light text-neutral-900 dark:text-white">
                  Eliminating Operational Bottlenecks
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed font-light text-justify">
                  To engineer purpose-built, high-availability technological infrastructure, intelligent software automation, and hardened cybersecurity systems that eliminate operational bottlenecks, ensure business continuity, and foster technological self-reliance in Africa.
                </p>
              </div>

              <div className="relative h-48 w-full border-t border-neutral-200 dark:border-white/[0.08]">
                <Image
                  src="/assets/chibuwe-timetable-builder.png"
                  alt="ZITRAC intelligent software automation and operational platforms"
                  fill
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  unoptimized
                />
                <div className="absolute inset-0 bg-neutral-950/40" />
                <div className="absolute bottom-4 left-6 text-xs font-mono text-white tracking-widest uppercase">
                  Continuous Operations &bull; Intelligent Automation
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ──────────────────────────────────────────────────────────
            OUR CORE VALUES: SCROLLYTELLING STUDIO MATRIX STYLE
            - Exactly matches the requested 3-column layout:
              * Left: Sticky Nav with 01..05 & dot-matrix grid
              * Middle: Scrolling content blocks with tag pill, headline, bullets, outline pill button
              * Right: Sticky Studio Image showcase with header breadcrumb, live crossfade, and floating code terminal
            ────────────────────────────────────────────────────────── */}
        <section className="architecture-matrix relative z-10 pt-4 border-t border-neutral-200 dark:border-white/5">
          {/* Section Header */}
          <div className="mb-12 lg:mb-16 max-w-3xl">
            <div className="flex items-center gap-3 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse"></span>
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-red-500 font-semibold">
                Our Core Values
              </span>
            </div>
            <h2 className="font-raleway text-2xl sm:text-4xl lg:text-5xl font-light tracking-[0.03em] text-neutral-900 dark:text-white leading-tight">
              Principles Guiding Every Architecture
            </h2>
            <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-400 font-light max-w-2xl">
              The principles that guide every line of code we write and every architecture we deploy.
            </p>
          </div>

          {/* 3-Column Scrollytelling Grid */}
          <div className="matrix-layout-container grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start relative z-10">
            
            {/* Left Column: Sticky Nav (2 cols on lg screen) */}
            <div className="matrix-nav-col lg:col-span-2 lg:sticky lg:top-24 self-start space-y-4">
              {/* Nav Items List */}
              <div className="space-y-1.5">
                {coreValues.map((item, idx) => {
                  const isActive = idx === activeValueIndex;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => scrollToValue(idx)}
                      className={`matrix-nav-btn group w-full text-left py-1.5 px-0 transition-all duration-200 flex items-center gap-2.5 bg-transparent shadow-none border-none outline-none cursor-pointer ${
                        isActive
                          ? 'matrix-nav-btn-active text-red-600 font-semibold'
                          : 'text-neutral-500 dark:text-slate-400 hover:text-neutral-900 dark:hover:text-white hover:translate-x-0.5'
                      }`}
                    >
                      <span
                        className={`matrix-nav-num font-mono text-[11px] font-semibold transition-colors ${
                          isActive
                            ? 'text-red-600 font-bold'
                            : 'text-neutral-400 dark:text-slate-500 group-hover:text-neutral-700 dark:group-hover:text-slate-300'
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

              {/* Decorative Dot Matrix Rectangle */}
              <div className="matrix-dot-grid hidden lg:block pt-6 pb-2 select-none pointer-events-none opacity-40">
                <div className="grid grid-cols-10 gap-2.5 w-full max-w-[170px]">
                  {Array.from({ length: 220 }).map((_, i) => (
                    <div key={i} className="w-1 h-1 rounded-full bg-neutral-400 dark:bg-slate-400"></div>
                  ))}
                </div>
              </div>
            </div>

            {/* Center Column: Continuously Scrolling Content Flow (4 cols on lg screen) */}
            <div className="matrix-content-col lg:col-span-4 flex flex-col">
              {coreValues.map((item, idx) => (
                <div
                  key={item.id}
                  ref={(el) => (valueItemRefs.current[idx] = el)}
                  className="min-h-[75vh] lg:min-h-[85vh] flex flex-col justify-center py-12 lg:py-24"
                >
                  {/* Category Tag Pill */}
                  <div className="mb-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full border border-neutral-300 dark:border-white/15 bg-neutral-100 dark:bg-white/5 text-[11px] font-mono text-neutral-700 dark:text-slate-300 uppercase tracking-wider">
                      {item.tag}
                    </span>
                  </div>

                  {/* Big Bold Headline */}
                  <h3 className="font-raleway text-3xl sm:text-4xl lg:text-[2.65rem] font-medium tracking-tight text-neutral-900 dark:text-white leading-[1.15] mb-5">
                    {item.leadTitle}
                  </h3>

                  {/* Lead Body Paragraph */}
                  <p className="font-raleway text-sm sm:text-base text-neutral-600 dark:text-slate-200 leading-relaxed font-light mb-6 text-justify">
                    {item.leadDesc}
                  </p>

                  {/* Bullet Points */}
                  <ul className="space-y-3 mb-8">
                    {item.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-3 text-sm text-neutral-800 dark:text-white">
                        <span className="text-red-500 font-bold leading-none mt-1 text-base">•</span>
                        <span className="font-raleway font-normal tracking-wide text-neutral-700 dark:text-slate-100">{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Pill Button - Transparent border-only */}
                  <div>
                    <Link
                      href={item.link}
                      className="matrix-cta-btn inline-flex items-center justify-center rounded-full border border-neutral-400 dark:border-white/60 bg-transparent hover:border-red-500 hover:text-red-500 px-6 py-2.5 font-mono text-xs font-semibold tracking-[0.2em] uppercase text-neutral-900 dark:text-white transition-all duration-300 group shadow-none"
                    >
                      <span>{item.buttonLabel}</span>
                    </Link>
                  </div>

                  {/* Mobile-Only Visual Card */}
                  <div className="mt-8 block lg:hidden">
                    <div className="relative w-full h-64 rounded-2xl overflow-hidden mb-4 border border-neutral-200 dark:border-white/10">
                      <Image
                        src={item.image}
                        alt={item.imageAlt}
                        fill
                        className="object-cover filter contrast-105"
                        unoptimized
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                    </div>

                    <div className="rounded-xl border border-neutral-200 dark:border-0 bg-neutral-900/95 dark:bg-[#050505]/95 p-3 font-mono text-xs text-slate-200 max-w-xs shadow-lg">
                      <div className="flex items-center justify-between pb-1.5 mb-1.5 border-0 text-[9px] text-slate-400">
                        <div className="flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                        </div>
                        <span className="text-slate-500 text-[8.5px]">CORE.VALUES.TS</span>
                      </div>
                      <pre className="text-slate-200 leading-tight overflow-x-auto text-[9.5px]">
                        <code>{item.codeSnippet}</code>
                      </pre>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Column: Sticky Studio Image Showcase (6 cols on lg screen) */}
            <div className="matrix-image-col hidden lg:block lg:col-span-6 lg:sticky lg:top-20 self-start relative min-h-[520px] sm:min-h-[560px]">
              
              {/* Background Studio Browser Card Shell */}
              <div className="matrix-studio-frame absolute inset-0 w-full h-full rounded-2xl border border-neutral-200 dark:border-0 bg-neutral-900 dark:bg-gradient-to-br dark:from-[#121217] dark:via-[#09090b] dark:to-[#040405] shadow-2xl p-6 sm:p-8 overflow-hidden z-10 flex flex-col justify-between">
                {/* Studio Browser Header */}
                <div className="matrix-studio-header flex items-center justify-between pb-4 border-0 text-xs font-mono text-slate-400">
                  <div className="flex items-center gap-2.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span className="tracking-wider uppercase">
                      Core Values / <strong className="matrix-studio-title text-white font-medium transition-all duration-300">{activeValue.title}</strong>
                    </span>
                  </div>
                  <div className="flex items-center gap-2 opacity-70">
                    <span className="w-2 h-2 rounded-full bg-slate-600"></span>
                    <span className="w-2 h-2 rounded-full bg-slate-600"></span>
                    <span className="w-2 h-2 rounded-full bg-slate-600"></span>
                  </div>
                </div>

                {/* Subtle Ambient Red Glow */}
                <div className="absolute -bottom-16 -right-16 w-80 h-80 rounded-full bg-red-600/20 blur-[100px] pointer-events-none"></div>
              </div>

              {/* Overlapping Main High-Res Image Cards with Crossfade */}
              {coreValues.map((item, idx) => (
                <div
                  key={`img-${item.id}`}
                  className="matrix-main-image-card absolute top-16 right-5 bottom-16 left-[12%] rounded-xl overflow-hidden border border-white/10 shadow-2xl z-20 group transition-all duration-500 ease-out"
                  style={{
                    opacity: idx === activeValueIndex ? 1 : 0,
                    transform: idx === activeValueIndex ? 'scale(1)' : 'scale(0.96)',
                    pointerEvents: idx === activeValueIndex ? 'auto' : 'none',
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

              {/* Overlapping Floating Code Terminals */}
              {coreValues.map((item, idx) => (
                <div
                  key={`code-${item.id}`}
                  className="matrix-code-card absolute -bottom-2 left-4 sm:left-6 w-[52%] max-w-[300px] rounded-xl border border-white/10 bg-[#050505]/95 backdrop-blur-2xl p-2.5 sm:p-3 shadow-2xl z-30 font-mono text-xs text-slate-200 overflow-hidden transition-all duration-500 ease-out"
                  style={{
                    opacity: idx === activeValueIndex ? 1 : 0,
                    transform: idx === activeValueIndex ? 'translateY(0)' : 'translateY(8px)',
                    pointerEvents: idx === activeValueIndex ? 'auto' : 'none',
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
        </section>

        {/* Action Callout (Neutral Monochrome with rounded-full button) */}
        <section className="rounded-3xl bg-neutral-900 text-white p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 max-w-2xl">
            <h3 className="font-raleway text-2xl sm:text-3xl font-light text-white">
              Partner with Zimbabwe&apos;s Enterprise Engineering House
            </h3>
            <p className="text-neutral-400 text-sm leading-relaxed font-light">
              Talk directly with our engineers in Harare about deploying high-availability cloud infrastructure, hardened security, or bespoke automation platforms.
            </p>
          </div>
          <Link
            href="/contact/"
            className="shrink-0 px-8 py-4 rounded-full bg-white text-neutral-900 font-raleway text-xs font-bold uppercase tracking-[0.16em] hover:bg-neutral-200 transition-colors shadow-lg"
          >
            Contact Engineering
          </Link>
        </section>

      </main>
    </div>
  );
}
