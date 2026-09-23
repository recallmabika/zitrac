import Link from 'next/link';
import Image from 'next/image';

import HeroBackground from './components/HeroBackground';
import MetricsBanner from './components/MetricsBanner';
import ArchitectureMatrix from './components/ArchitectureMatrix';
import ReliabilityBenchmark from './components/ReliabilityBenchmark';
import SchoolManagementShowcase from './components/SchoolManagementShowcase';
import GlobalReach from './components/GlobalReach';
import Testimonials from './components/Testimonials';
import FAQSection from './components/FAQSection';

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
        
        {/* Orange-Red Scrolling Marquee Brand Strip - Styled after uploaded reference */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden bg-[#ff3b00] py-3.5 z-20 shadow-md">
          <div className="marquee-track flex whitespace-nowrap">
            {[0, 1].map((i) => (
              <div key={i} className="marquee-content flex items-center gap-12 sm:gap-16 px-6 shrink-0" aria-hidden={i === 1}>
                {/* ZIMPARKS (Authentic Crest in Black & White) */}
                <div className="inline-flex items-center gap-2.5 text-black">
                  <div className="relative h-9 w-8 shrink-0">
                    <Image
                      src="/assets/brands/zimparks-bw-crest.png"
                      alt="ZimParks Logo"
                      fill
                      className="object-contain"
                      unoptimized
                    />
                  </div>
                  <span className="font-raleway text-sm font-black tracking-tight uppercase">
                    ZIMPARKS <span className="font-medium text-xs tracking-normal lowercase opacity-80">(Chipinge Safari)</span>
                  </span>
                </div>

                {/* ARTIS (Authentic Logo Artwork) */}
                <div className="inline-flex items-center gap-2 text-black">
                  <div className="relative h-7 w-7 shrink-0">
                    <Image
                      src="/assets/brands/artis-logo.png"
                      alt="ARTIS Logo"
                      fill
                      className="object-contain"
                      unoptimized
                    />
                  </div>
                  <span className="font-mono font-black text-xs tracking-tight uppercase">
                    CyberSecOps
                  </span>
                </div>

                {/* Redis (Authentic Logo) */}
                <div className="inline-flex items-center text-black">
                  <div className="relative h-6 w-20 shrink-0">
                    <Image
                      src="/assets/brands/redis-logo.png"
                      alt="Redis Logo"
                      fill
                      className="object-contain"
                      unoptimized
                    />
                  </div>
                </div>

                {/* cPanel (Authentic Logo) */}
                <div className="inline-flex items-center text-black">
                  <div className="relative h-6 w-24 shrink-0">
                    <Image
                      src="/assets/brands/cpanel-logo.png"
                      alt="cPanel Logo"
                      fill
                      className="object-contain"
                      unoptimized
                    />
                  </div>
                </div>

                {/* Next.js (Authentic Logo) */}
                <div className="inline-flex items-center text-black">
                  <div className="relative h-6 w-24 shrink-0">
                    <Image
                      src="/assets/brands/nextjs-logo.png"
                      alt="Next.js Logo"
                      fill
                      className="object-contain"
                      unoptimized
                    />
                  </div>
                </div>

                {/* Education Plus */}
                <div className="inline-flex items-center gap-2 text-black">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  </svg>
                  <span className="font-sans font-black text-sm tracking-tight">
                    EDUCATION<span className="text-black/70 font-light">+</span>
                  </span>
                </div>

                {/* Python */}
                <div className="inline-flex items-center gap-1.5 text-black">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M11.914 0C5.834 0 6.2 2.64 6.2 2.64l.006 2.736h5.82v.825H3.854s-3.854.437-3.854 6.136c0 5.7 3.36 5.508 3.36 5.508h2.007v-2.825s-.108-3.36 3.3-3.36h5.674s3.19.053 3.19-3.134V3.134S17.986 0 11.914 0zm-3.23 1.834a1.01 1.01 0 1 1 0 2.02 1.01 1.01 0 0 1 0-2.02zm3.402 22.166c6.08 0 5.714-2.64 5.714-2.64l-.006-2.736h-5.82v-.825h8.172s3.854-.437 3.854-6.136c0-5.7-3.36-5.508-3.36-5.508h-2.007v2.825s.108 3.36-3.3 3.36h-5.674s-3.19-.053-3.19 3.134v5.388s-.456 3.136 5.617 3.136zm3.23-1.834a1.01 1.01 0 1 1 0-2.02 1.01 1.01 0 0 1 0 2.02z"/>
                  </svg>
                  <span className="font-sans font-bold text-sm tracking-tight">
                    python
                  </span>
                </div>

                {/* Cloudflare */}
                <div className="inline-flex items-center gap-2 text-black">
                  <svg className="w-6 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M18.3 10.3c-.3-1.9-1.9-3.3-3.9-3.3-.8 0-1.5.2-2.1.6C11.5 5.5 9.5 4 7.2 4 4.3 4 2 6.3 2 9.2c0 .3 0 .7.1 1C.8 11 .1 12.2.1 13.5.1 15.4 1.7 17 3.6 17h14.7c1.9 0 3.5-1.6 3.5-3.5 0-1.7-1.3-3.1-3.5-3.2z"/>
                  </svg>
                  <span className="font-sans font-extrabold text-sm tracking-tight">
                    CLOUDFLARE
                  </span>
                </div>

                {/* Kenny Tech College */}
                <div className="inline-flex items-center gap-1.5 text-black">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm5 12.73l-5 2.73-5-2.73v-4.64l5 2.73 5-2.73v4.64z"/>
                  </svg>
                  <span className="font-sans font-black text-sm tracking-wider uppercase">
                    KENNY <span className="font-light">TECH</span>
                  </span>
                </div>

                {/* Harare IXP */}
                <div className="inline-flex items-center gap-1.5 text-black">
                  <span className="w-2 h-2 rounded-full bg-black"></span>
                  <span className="font-mono text-xs font-black tracking-widest uppercase">
                    HARARE IXP
                  </span>
                </div>
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

      {/* Authentic Live Product Showcase: Education Plus - Advanced School Management System */}
      <SchoolManagementShowcase />

      {/* Global Infrastructure Reach */}
      <GlobalReach />

      {/* What People Say About Us - Authentic Client Testimonials */}
      <Testimonials />

      {/* Frequently Asked Questions */}
      <FAQSection />
    </div>
  );
}
