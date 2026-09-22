'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function GlobalReach() {
  const metrics = [
    {
      label: 'Harare Core DC',
      val: 'Primary Alpha',
      sub: 'Tier III Peering Hub',
    },
    {
      label: 'Bulawayo Failover',
      val: 'Dual Zone',
      sub: 'Sub-second DNS Sync',
    },
    {
      label: 'Regional Transit',
      val: '<12ms',
      sub: 'Cross-Border Fiber Hop',
    },
  ];

  return (
    <section className="global-reach-section relative z-10 mx-auto max-w-full px-[30px] py-16 lg:py-24 border-t border-white/5">
      <div className="relative z-10 max-w-[1400px] mx-auto">
        
        {/* Section Header matching Sanity design */}
        <div className="animate-on-scroll mb-12 lg:mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse"></span>
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-red-500 font-semibold">
                Global Network Architecture
              </span>
            </div>
            <h2 className="font-raleway text-2xl sm:text-4xl lg:text-5xl font-light tracking-[0.03em] text-white leading-tight">
              Connected Infrastructure Across Every Enterprise Endpoint
            </h2>
          </div>

          <div className="shrink-0">
            <Link
              href="/services/"
              className="global-reach-cta inline-flex items-center justify-center rounded-full border border-white/20 bg-transparent px-7 py-3 text-xs font-mono font-semibold uppercase tracking-[0.2em] text-white hover:border-red-500 hover:text-red-500 transition-all duration-300 shadow-none"
            >
              <span>Explore Architecture &rarr;</span>
            </Link>
          </div>
        </div>

        {/* Main Content Showcase: Flat Sanity-Studio Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Visual Showcase Canvas matching Architecture Studio */}
          <div className="animate-slide-left global-reach-visual-col lg:col-span-7 relative min-h-[440px] sm:min-h-[500px] rounded-none overflow-hidden border-0 bg-gradient-to-br from-[#121217] via-[#09090b] to-[#040405] shadow-none p-6 sm:p-8 flex flex-col justify-between">
            {/* Ambient Lighting */}
            <div className="absolute -bottom-16 -left-16 w-80 h-80 rounded-full bg-red-600/15 blur-[100px] pointer-events-none"></div>
            <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-emerald-500/10 blur-[90px] pointer-events-none"></div>

            {/* Studio Browser Header Bar */}
            <div className="matrix-studio-header relative z-10 flex items-center justify-between pb-3 border-0 text-xs font-mono text-slate-400">
              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                <span className="tracking-wider uppercase text-[11px]">
                  Global Routing Canvas / <strong className="global-reach-title text-white font-medium">Border Edge v4</strong>
                </span>
              </div>
              <div className="flex items-center gap-2 opacity-70">
                <span className="w-2 h-2 rounded-full bg-slate-600"></span>
                <span className="w-2 h-2 rounded-full bg-slate-600"></span>
                <span className="w-2 h-2 rounded-full bg-slate-600"></span>
              </div>
            </div>

            {/* Network Vector Illustration Visual */}
            <div className="relative z-0 my-auto py-4 flex items-center justify-center overflow-hidden">
              <div className="relative w-full max-w-[540px] h-[280px] sm:h-[340px]">
                <Image
                  src="/assets/global-network.png"
                  alt="Global network infrastructure with connected endpoints"
                  fill
                  className="global-reach-img object-contain filter contrast-105 brightness-105 transition-transform duration-700 hover:scale-105"
                  unoptimized
                />
              </div>
            </div>

            {/* Bottom Live Routing Status Bar */}
            <div className="relative z-10 pt-4 border-0 flex items-center justify-between text-[11px] font-mono text-slate-400">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
                <span className="text-slate-300 font-mono">BGP Autonomous System Routing</span>
              </div>
              <span className="text-emerald-400 font-mono">Peered &bull; 100% Guaranteed</span>
            </div>
          </div>

          {/* Right Column: Editorial Overview & Key Interconnect Points */}
          <div className="animate-slide-right delay-200 lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="p-6 rounded-none bg-white/[0.02] border-0">
                <h3 className="font-raleway text-xl sm:text-2xl font-light text-white tracking-tight mb-3">
                  Enterprise Interconnectivity Without Geographic Compromise
                </h3>
                <p className="font-raleway text-sm text-slate-300 font-light leading-relaxed mb-4">
                  From sub-second CDN distribution edge nodes to real-time SOC monitoring centers, ZITRAC deploys interconnected digital pipelines that keep your packets flowing fast, your communications uninterrupted, and your perimeter sealed.
                </p>
                <p className="font-raleway text-xs text-slate-400 font-light leading-relaxed">
                  Dual-homed fiber links, Cloudflare edge caching tiers, and direct peering at local internet exchange points (IXPs) ensure your corporate users experience minimal latency and zero packet drop.
                </p>
              </div>

              {/* 3 Metric Cards matching the matrix-code-card style */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {metrics.map((m, i) => (
                  <div
                    key={i}
                    className="global-metric-box p-3.5 rounded-none bg-[#050505]/95 backdrop-blur-2xl border-0 shadow-none"
                  >
                    <div className="text-[9px] font-mono uppercase tracking-wider text-slate-400 mb-1">{m.label}</div>
                    <div className="text-sm font-mono text-white font-medium">{m.val}</div>
                    <div className="text-[10px] font-mono text-slate-400 mt-1">{m.sub}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Authority Callout Bar */}
            <div className="p-4 rounded-none border-0 bg-white/[0.02] flex items-center justify-between text-xs font-mono text-slate-400">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
                <span>Regional Routing Gateways</span>
              </div>
              <span className="text-emerald-400 font-medium">99.98% High-Availability</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
