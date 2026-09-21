import Link from 'next/link';
import Image from 'next/image';

import HeroBackground from './components/HeroBackground';
import MetricsBanner from './components/MetricsBanner';

export const metadata = {
  title: 'Managed IT Services & Software Development Zimbabwe | ZITRAC',
  description: 'Partner with ZITRAC Technologies, a leading IT consulting firm in Zimbabwe. We deliver enterprise software development, cybersecurity, and hosting solutions.',
  openGraph: {
    title: 'Managed IT Services & Software Development Zimbabwe | ZITRAC',
    description: 'Partner with ZITRAC Technologies, a premier IT consulting firm in Zimbabwe. Enterprise software, cybersecurity, and hosting.',
    url: 'https://zitrac.co.zw/',
    images: [{ url: 'https://media.zitrac.co.zw/og-general-1200x630.jpg', width: 1200, height: 630 }],
  },
};

export default function HomePage() {
  return (
    <div className="relative overflow-hidden bg-black">
      {/* Hero Section with Ambient Cinematic Video Background & Converging Glow Animations */}
      <section className="relative z-10 w-full min-h-screen flex items-center pt-24 pb-8 border-b border-white/5">
        <HeroBackground />

        <div className="relative z-10 w-full mx-auto px-[30px]">
          <div className="max-w-5xl space-y-6 py-10 md:py-14">
            {/* Mega Display H1 - Drop down from topbar */}
          <div className="overflow-hidden">
            <h1 className="hero-title-drop font-raleway text-[2.1rem] sm:text-4xl md:text-5xl lg:text-[3.25rem] font-light tracking-[0.04em] text-white leading-[1.5]">
              Enterprise IT Consulting and Custom Software Development in Zimbabwe
            </h1>
          </div>

          {/* Subheading text block - Zoom in from place */}
          <p className="hero-desc-zoom font-raleway text-sm sm:text-base md:text-lg text-slate-300 leading-relaxed max-w-4xl font-light tracking-wide">
            At ZITRAC Technologies, we bridge the gap between complex computing concepts and active enterprise deployment. As a premier <strong className="text-white font-medium">IT support company in Zimbabwe</strong>, we engineer bespoke technological solutions designed to streamline workflows, protect digital assets, and drive operational efficiency. From our engineering hub, our <strong className="text-white font-medium">tech consultants in Harare</strong> provide end-to-end management of corporate networks, cloud computing transitions, and full-stack systems built to stay working.
          </p>

          {/* Action Button Row - Smoothly slide from right to left */}
          <div className="hero-buttons-slide-right flex flex-wrap items-center gap-4 pt-2">
            <Link
              href="/contact/"
              className="btn-glow rounded-full bg-red-600 px-10 py-5 text-sm font-bold text-white shadow-xl hover:bg-red-500 hover:scale-105 active:scale-95 transition-all focus:outline-none"
            >
              Start Building With Us
            </Link>

            <Link
              href="/services/"
              className="rounded-full border border-white/20 bg-white/10 hover:bg-white hover:text-black backdrop-blur px-10 py-5 text-sm font-medium text-white transition-all hover:scale-105 focus:outline-none"
            >
              Explore Solutions
            </Link>
          </div>

          {/* Authority Trust Metrics (Logo removed) */}
          <div className="hero-fade-up pt-2 flex items-center gap-3">
            <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></div>
            <span className="text-xs font-mono text-slate-400">
              Active Enterprise Cloud Deployments in Harare &bull; 99.98% High Availability Uptime SLA
            </span>
          </div>
          </div>
        </div>
        
        {/* Red Scrolling Marquee Trust Strip - Docked to bottom of hero */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden bg-red-600/95 backdrop-blur py-5 z-20 border-y border-red-500/30">
          <div className="marquee-track flex whitespace-nowrap">
            {[0, 1].map((i) => (
              <div key={i} className="marquee-content flex items-center gap-8 px-4 shrink-0" aria-hidden={i === 1}>
                <span className="font-raleway text-xs font-semibold uppercase tracking-[0.25em] text-white/90">Next.js</span>
                <span className="text-white/40">✦</span>
                <span className="font-raleway text-xs font-semibold uppercase tracking-[0.25em] text-white/90">Python Flask</span>
                <span className="text-white/40">✦</span>
                <span className="font-raleway text-xs font-semibold uppercase tracking-[0.25em] text-white/90">Cloudflare R2</span>
                <span className="text-white/40">✦</span>
                <span className="font-raleway text-xs font-semibold uppercase tracking-[0.25em] text-white/90">Zero-Trust IAM</span>
                <span className="text-white/40">✦</span>
                <span className="font-raleway text-xs font-semibold uppercase tracking-[0.25em] text-white/90">AI Automation</span>
                <span className="text-white/40">✦</span>
                <span className="font-raleway text-xs font-semibold uppercase tracking-[0.25em] text-white/90">cPanel Hosting</span>
                <span className="text-white/40">✦</span>
                <span className="font-raleway text-xs font-semibold uppercase tracking-[0.25em] text-white/90">DNSSEC</span>
                <span className="text-white/40">✦</span>
                <span className="font-raleway text-xs font-semibold uppercase tracking-[0.25em] text-white/90">TLS 1.3</span>
                <span className="text-white/40">✦</span>
                <span className="font-raleway text-xs font-semibold uppercase tracking-[0.25em] text-white/90">.co.zw Domains</span>
                <span className="text-white/40">✦</span>
                <span className="font-raleway text-xs font-semibold uppercase tracking-[0.25em] text-white/90">AWS S3</span>
                <span className="text-white/40">✦</span>
                <span className="font-raleway text-xs font-semibold uppercase tracking-[0.25em] text-white/90">99.98% Uptime SLA</span>
                <span className="text-white/40">✦</span>
                <span className="font-raleway text-xs font-semibold uppercase tracking-[0.25em] text-white/90">SOC Monitoring</span>
                <span className="text-white/40">✦</span>
                <span className="font-raleway text-xs font-semibold uppercase tracking-[0.25em] text-white/90">Harare Engineering Hub</span>
                <span className="text-white/40">✦</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Metrics Impact Banner - Directly below marquee */}
      <MetricsBanner />

      {/* Service Capabilities Architecture - Editorial Asymmetric Bento Grid */}

      <section className="relative z-10 mx-auto max-w-full px-[30px] py-24 border-b border-white/5">
        {/* Section Header with Hero-aligned typography */}
        <div className="animate-on-scroll mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse"></span>
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-red-500 font-semibold">
                Architecture Matrix
              </span>
            </div>
            <h2 className="font-raleway text-3xl sm:text-5xl font-light tracking-[0.03em] text-white leading-tight">
              Integrated Technical Core Competencies
            </h2>
          </div>
          <p className="font-raleway text-sm sm:text-base text-slate-400 font-light max-w-md leading-relaxed">
            Engineered specifically to satisfy enterprise availability thresholds, zero-downtime requirements, and regional infrastructure demands.
          </p>
        </div>

        {/* Asymmetric Technical Grid - No Icons, Pure Visual Imagery & Typography */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

          {/* 01: IT Consulting & Enterprise Support - Featured 7 cols */}
          <div className="md:col-span-7 animate-on-scroll group relative rounded-2xl border border-white/10 bg-[#070707] overflow-hidden min-h-[380px] flex flex-col justify-between transition-all duration-700 hover:border-red-600/40">
            {/* Background Image with Layered Gradient */}
            <div className="absolute inset-0 z-0">
              <Image
                src="/assets/it-consulting.jpg"
                alt="IT Consulting & Support Zimbabwe"
                fill
                className="object-cover opacity-35 transition-transform duration-1000 group-hover:scale-105"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent"></div>
            </div>

            {/* Top Bar: Monospace Tag & Live Technical Indicator */}
            <div className="relative z-10 p-8 pb-0 flex items-center justify-between">
              <span className="font-mono text-xs tracking-[0.2em] text-red-400 uppercase font-medium">
                01 / Advisory &amp; Support
              </span>
              <span className="font-mono text-[10px] tracking-wider text-slate-400 border border-white/10 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full uppercase">
                Harare &bull; Bulawayo
              </span>
            </div>

            {/* Bottom Content */}
            <div className="relative z-10 p-8 pt-6">
              <h3 className="font-raleway text-2xl sm:text-3xl font-normal tracking-wide text-white mb-3 group-hover:text-red-50 transition-colors">
                Enterprise IT Consulting &amp; Support
              </h3>
              <p className="font-raleway text-sm text-slate-300 font-light leading-relaxed max-w-xl mb-6">
                High-intent strategic tech guidance, infrastructure audits, disaster recovery failover architectures, and round-the-clock enterprise systems support across Zimbabwe.
              </p>
              <div className="flex items-center justify-between pt-4 border-t border-white/10">
                <Link
                  href="/services/it-consulting/"
                  className="font-mono text-xs font-semibold text-white group-hover:text-red-400 tracking-[0.15em] uppercase inline-flex items-center gap-2 transition-colors"
                >
                  <span>Read Consulting Specs</span>
                  <span className="text-red-500 transition-transform group-hover:translate-x-1.5">&rarr;</span>
                </Link>
                <span className="font-mono text-[11px] text-slate-500 hidden sm:inline-block">SLA: 24/7 Response</span>
              </div>
            </div>
          </div>

          {/* 02: Custom Software & AI - 5 cols */}
          <div className="md:col-span-5 animate-on-scroll delay-100 group relative rounded-2xl border border-white/10 bg-[#070707] overflow-hidden min-h-[380px] flex flex-col justify-between transition-all duration-700 hover:border-red-600/40">
            <div className="absolute inset-0 z-0">
              <Image
                src="/assets/software-development.jpg"
                alt="Custom Software Development & AI"
                fill
                className="object-cover opacity-30 transition-transform duration-1000 group-hover:scale-105"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/40 to-transparent"></div>
            </div>

            <div className="relative z-10 p-8 pb-0 flex items-center justify-between">
              <span className="font-mono text-xs tracking-[0.2em] text-red-400 uppercase font-medium">
                02 / Intelligent Systems
              </span>
              <span className="font-mono text-[10px] tracking-wider text-emerald-400 border border-emerald-500/20 bg-emerald-950/40 backdrop-blur-md px-3 py-1 rounded-full uppercase">
                AI Powered
              </span>
            </div>

            <div className="relative z-10 p-8 pt-6">
              <h3 className="font-raleway text-2xl sm:text-3xl font-normal tracking-wide text-white mb-3 group-hover:text-red-50 transition-colors">
                Custom Software &amp; AI
              </h3>
              <p className="font-raleway text-sm text-slate-300 font-light leading-relaxed mb-6">
                Bespoke enterprise applications engineered with automated data pipelines, custom transaction gateways, and scalable cloud microservices.
              </p>
              <div className="flex items-center justify-between pt-4 border-t border-white/10">
                <Link
                  href="/services/software-development/"
                  className="font-mono text-xs font-semibold text-white group-hover:text-red-400 tracking-[0.15em] uppercase inline-flex items-center gap-2 transition-colors"
                >
                  <span>Explore AI Architecture</span>
                  <span className="text-red-500 transition-transform group-hover:translate-x-1.5">&rarr;</span>
                </Link>
                <span className="font-mono text-[11px] text-slate-500 hidden sm:inline-block">Sub-Second Exec</span>
              </div>
            </div>
          </div>

          {/* 03: Cyber Security Watchdogs - 4 cols */}
          <div className="md:col-span-4 animate-on-scroll delay-200 group relative rounded-2xl border border-white/10 bg-[#070707] overflow-hidden min-h-[380px] flex flex-col justify-between transition-all duration-700 hover:border-red-600/40">
            <div className="absolute inset-0 z-0">
              <Image
                src="/assets/cyber-1.png"
                alt="Cyber Security Watchdogs"
                fill
                className="object-cover opacity-35 transition-transform duration-1000 group-hover:scale-105"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/85 to-black/60"></div>
            </div>

            <div className="relative z-10 p-8 pb-0 flex items-center justify-between">
              <span className="font-mono text-xs tracking-[0.2em] text-red-400 uppercase font-medium">
                03 / Zero-Trust Perimeter
              </span>
              <span className="font-mono text-[10px] tracking-wider text-red-400 border border-red-500/20 bg-red-950/40 backdrop-blur-md px-3 py-1 rounded-full uppercase">
                Active SOC
              </span>
            </div>

            <div className="relative z-10 p-8 pt-6">
              <h3 className="font-raleway text-xl sm:text-2xl font-normal tracking-wide text-white mb-3 group-hover:text-red-50 transition-colors">
                Cyber Security Watchdogs
              </h3>
              <p className="font-raleway text-sm text-slate-300 font-light leading-relaxed mb-6">
                Continuous threat intrusion monitoring, automated honeypots, penetration testing, and zero-trust protocol enforcement guarding corporate networks.
              </p>
              <div className="pt-4 border-t border-white/10">
                <Link
                  href="/services/cyber-security/"
                  className="font-mono text-xs font-semibold text-white group-hover:text-red-400 tracking-[0.15em] uppercase inline-flex items-center gap-2 transition-colors"
                >
                  <span>Inspect Security Protocols</span>
                  <span className="text-red-500 transition-transform group-hover:translate-x-1.5">&rarr;</span>
                </Link>
              </div>
            </div>
          </div>

          {/* 04: Web Engineering - 4 cols */}
          <div className="md:col-span-4 animate-on-scroll group relative rounded-2xl border border-white/10 bg-[#070707] overflow-hidden min-h-[380px] flex flex-col justify-between transition-all duration-700 hover:border-red-600/40">
            <div className="absolute inset-0 z-0">
              <Image
                src="/assets/web-eng-1.png"
                alt="Tailored Web Engineering"
                fill
                className="object-cover opacity-35 transition-transform duration-1000 group-hover:scale-105"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/85 to-black/60"></div>
            </div>

            <div className="relative z-10 p-8 pb-0 flex items-center justify-between">
              <span className="font-mono text-xs tracking-[0.2em] text-red-400 uppercase font-medium">
                04 / Performance Engineering
              </span>
              <span className="font-mono text-[10px] tracking-wider text-slate-400 border border-white/10 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full uppercase">
                Sub-Second
              </span>
            </div>

            <div className="relative z-10 p-8 pt-6">
              <h3 className="font-raleway text-xl sm:text-2xl font-normal tracking-wide text-white mb-3 group-hover:text-red-50 transition-colors">
                Tailored Web Engineering
              </h3>
              <p className="font-raleway text-sm text-slate-300 font-light leading-relaxed mb-6">
                Ultra-fast, accessible digital frontends built for maximum crawler visibility, technical SEO dominance, and instantaneous conversion velocity.
              </p>
              <div className="pt-4 border-t border-white/10">
                <Link
                  href="/services/web-design-development/"
                  className="font-mono text-xs font-semibold text-white group-hover:text-red-400 tracking-[0.15em] uppercase inline-flex items-center gap-2 transition-colors"
                >
                  <span>Review Web Engineering</span>
                  <span className="text-red-500 transition-transform group-hover:translate-x-1.5">&rarr;</span>
                </Link>
              </div>
            </div>
          </div>

          {/* 05: Infrastructure, Domains & Cloud - 4 cols */}
          <div className="md:col-span-4 animate-on-scroll delay-100 group relative rounded-2xl border border-white/10 bg-[#070707] overflow-hidden min-h-[380px] flex flex-col justify-between transition-all duration-700 hover:border-red-600/40">
            <div className="absolute inset-0 z-0">
              <Image
                src="/assets/server-rack.png"
                alt="Web Hosting & .co.zw Domains"
                fill
                className="object-cover opacity-35 transition-transform duration-1000 group-hover:scale-105"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/85 to-black/60"></div>
            </div>

            <div className="relative z-10 p-8 pb-0 flex items-center justify-between">
              <span className="font-mono text-xs tracking-[0.2em] text-red-400 uppercase font-medium">
                05 / Cloud &amp; Domains
              </span>
              <span className="font-mono text-[10px] tracking-wider text-slate-400 border border-white/10 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full uppercase">
                99.98% SLA
              </span>
            </div>

            <div className="relative z-10 p-8 pt-6">
              <h3 className="font-raleway text-xl sm:text-2xl font-normal tracking-wide text-white mb-3 group-hover:text-red-50 transition-colors">
                Hosting, .co.zw &amp; Cloud Migration
              </h3>
              <p className="font-raleway text-sm text-slate-300 font-light leading-relaxed mb-6">
                Reliable cPanel hosting tiers, high-speed regional DNS resolution, automated .co.zw domain registration, and AWS S3/Cloudflare R2 cloud migrations.
              </p>
              <div className="pt-4 border-t border-white/10">
                <Link
                  href="/services/web-hosting-domain-registration/"
                  className="font-mono text-xs font-semibold text-white group-hover:text-red-400 tracking-[0.15em] uppercase inline-flex items-center gap-2 transition-colors"
                >
                  <span>Choose Hosting Tier</span>
                  <span className="text-red-500 transition-transform group-hover:translate-x-1.5">&rarr;</span>
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Trust & Authority Signals Banner with Modern Sanity Styling */}
      <section className="relative z-10 mx-auto max-w-full px-[30px]">
        <div className="animate-on-scroll rounded-3xl border border-white/10 bg-gradient-to-b from-slate-950 to-black p-10 md:p-16 relative overflow-hidden">
          <div className="absolute right-0 top-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none"></div>
          
          {/* Cloud Infrastructure Visual - decorative right side */}
          <div className="absolute right-0 bottom-0 w-[45%] h-full pointer-events-none hidden md:block">
            <Image
              src="/assets/server-rack.png"
              alt=""
              width={700}
              height={450}
              className="absolute bottom-0 right-0 w-full h-auto opacity-20 object-contain mix-blend-screen"
              unoptimized
              aria-hidden="true"
            />
          </div>

          <div className="max-w-3xl space-y-6 relative z-10">
            <div className="text-xs font-mono font-bold tracking-widest text-red-500 uppercase">
              RELIABILITY BENCHMARK
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Engineered for Zero Downtime &amp; Maximum Technical Compliance
            </h2>
            <p className="text-base text-slate-300 leading-relaxed font-normal">
              Whether you require emergency server stabilization in Harare or an end-to-end multi-tier software rollout, ZITRAC delivers verified engineering precision backed by SLA commitments.
            </p>
            <div className="pt-4 flex flex-wrap gap-4">
              <Link
                href="/contact/"
                className="btn-glow inline-block rounded-full bg-red-600 px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-red-500 hover:scale-105 transition-all focus:outline-none"
              >
                Initiate Project Brief
              </Link>
              <Link
                href="/about/"
                className="inline-block rounded-full border border-white/20 bg-white/5 hover:bg-white/10 px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-white hover:scale-105 transition-all focus:outline-none"
              >
                Corporate Profile
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Global Network Reach Visual Section */}
      <section className="relative z-10 mx-auto max-w-full px-[30px]">
        <div className="animate-on-scroll rounded-3xl border border-white/10 bg-slate-950/80 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-center">
            {/* Visual Side */}
            <div className="relative p-8 md:p-12 flex items-center justify-center">
              <Image
                src="/assets/global-network.png"
                alt="Global network infrastructure with connected endpoints"
                width={600}
                height={450}
                className="w-full h-auto max-w-md object-contain"
                unoptimized
              />
            </div>
            {/* Content Side */}
            <div className="p-8 md:p-12 space-y-5">
              <div className="text-xs font-mono font-bold tracking-widest text-red-500 uppercase">
                GLOBAL REACH
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight">
                Connected Infrastructure Across Every Endpoint
              </h2>
              <p className="text-sm text-slate-400 leading-relaxed">
                From enterprise CDN distribution to real-time SOC monitoring nodes, ZITRAC deploys interconnected systems that keep your data flowing and your perimeter sealed — with 100% deployment completion guarantees.
              </p>
              <Link
                href="/services/"
                className="inline-flex items-center text-xs font-bold text-red-400 hover:text-red-300 tracking-wider uppercase"
              >
                Explore Full Architecture <span className="ml-1.5">&rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
