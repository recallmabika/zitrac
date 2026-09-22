import Link from 'next/link';
import Image from 'next/image';

import HeroBackground from './components/HeroBackground';
import MetricsBanner from './components/MetricsBanner';
import ArchitectureMatrix from './components/ArchitectureMatrix';
import ReliabilityBenchmark from './components/ReliabilityBenchmark';
import GlobalReach from './components/GlobalReach';

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
    <div className="relative bg-black">
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

      {/* Architecture + Reliability Sections — shared sticky Zimbabwe map background */}
      <div className="map-sections-wrapper relative">
        {/* Full-Window Sticky Zimbabwe Dotted Map Background */}
        <div className="architecture-matrix-map-layer">
          <div className="architecture-matrix-map-layer-inner" />
        </div>

        {/* Service Capabilities Architecture - Split editorial panels */}
        <ArchitectureMatrix />

        {/* Trust & Authority Signals Banner with Modern Sanity Styling */}
        <ReliabilityBenchmark />
      </div>

      {/* Global Network Reach Visual Section */}
      <GlobalReach />
    </div>
  );
}
