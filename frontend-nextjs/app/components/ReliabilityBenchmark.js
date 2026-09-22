'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function ReliabilityBenchmark() {
  const [activeTab, setActiveTab] = useState(0);

  const benchmarks = [
    {
      id: 'sla',
      tag: '01 / INFRASTRUCTURE',
      title: '99.98% High-Availability Uptime',
      metric: '99.98%',
      metricLabel: 'Guaranteed SLA Commitment',
      desc: 'Dual-zone failover architecture between Harare and Bulawayo nodes ensures uninterrupted corporate workflows and instant disaster mitigation.',
      bullets: [
        'Automated multi-region failover triggers',
        'Sub-second DNS failover propagation',
        'Continuous uptime telemetry monitoring',
      ],
      telemetry: {
        node: 'Harare Core Node Alpha',
        latency: '4ms local peering',
        health: 'Optimal 100%',
      }
    },
    {
      id: 'latency',
      tag: '02 / SPEED & PERFORMANCE',
      title: 'Sub-120ms National Latency Target',
      metric: '<120ms',
      metricLabel: 'Edge Routing Latency',
      desc: 'Direct peering with regional transit providers and edge cache caching layer ensures rapid packet delivery for transaction gateways and apps.',
      bullets: [
        'Direct fiber exchange interconnects',
        'Cloudflare R2 & AWS edge distribution',
        'Optimized Next.js dynamic hydration',
      ],
      telemetry: {
        node: 'Bulawayo Edge Gateway',
        latency: '18ms regional hop',
        health: 'Clean 0% Packet Loss',
      }
    },
    {
      id: 'compliance',
      tag: '03 / TECHNICAL AUDITS',
      title: 'Zero-Trust Protocol Enforcement',
      metric: '24/7',
      metricLabel: 'Automated SOC Watchdogs',
      desc: 'Stringent enterprise access control, automated vulnerability scans, and strict mTLS encryption keeping institutional infrastructure impenetrable.',
      bullets: [
        'Role-based granular identity governance',
        'Quarterly penetration audits & reports',
        'Real-time intrusion containment triggers',
      ],
      telemetry: {
        node: 'SOC Security Perimeter',
        latency: 'Real-time sensor feed',
        health: 'Protected Active',
      }
    }
  ];

  const current = benchmarks[activeTab];

  return (
    <section className="reliability-benchmark relative z-10 mx-auto max-w-full px-[30px] py-16 lg:py-24">
      {/* Background Decorative Grid */}
      <div className="absolute inset-0 pointer-events-none opacity-20 dark:opacity-10 hero-dots"></div>

      {/* Main Container */}
      <div className="relative z-10 max-w-[1400px] mx-auto">
        
        {/* Section Header — scroll entrance */}
        <div className="animate-on-scroll mb-12 lg:mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse"></span>
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-red-500 font-semibold">
                Reliability Benchmark
              </span>
            </div>
            <h2 className="font-raleway text-2xl sm:text-4xl lg:text-5xl font-light tracking-[0.03em] text-white leading-tight">
              Engineered for Zero Downtime &amp; Technical Compliance
            </h2>
          </div>

          <div className="shrink-0 flex items-center gap-3">
            <Link
              href="/contact/"
              className="benchmark-cta-primary inline-flex items-center justify-center rounded-none bg-red-600 px-7 py-3 text-xs font-mono font-semibold uppercase tracking-[0.2em] text-white hover:bg-red-500 transition-all duration-300 shadow-none border-0"
            >
              <span>Initiate Brief</span>
            </Link>
            <Link
              href="/about/"
              className="benchmark-cta-secondary inline-flex items-center justify-center rounded-none border border-white/20 bg-transparent px-7 py-3 text-xs font-mono font-semibold uppercase tracking-[0.2em] text-white hover:border-red-500 hover:text-red-500 transition-all duration-300 shadow-none"
            >
              <span>Corporate Profile</span>
            </Link>
          </div>
        </div>

        {/* Interactive Split Showcase (Sanity-Inspired Architecture) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Interactive Pillars Selector — slide in from left */}
          <div className="animate-slide-left lg:col-span-5 flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              {benchmarks.map((item, idx) => {
                const isActive = idx === activeTab;
                return (
                  <div
                    key={item.id}
                    onClick={() => setActiveTab(idx)}
                    className={`benchmark-tab-card cursor-pointer p-6 transition-all duration-300 rounded-none border-0 ${
                      isActive
                        ? 'benchmark-tab-active bg-white/[0.04] shadow-none'
                        : 'bg-transparent hover:bg-white/[0.02]'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-4 mb-2">
                      <span className={`font-mono text-[10px] tracking-widest uppercase transition-colors ${
                        isActive ? 'text-red-500 font-bold' : 'text-slate-400'
                      }`}>
                        {item.tag}
                      </span>
                      <span className={`font-mono text-xs font-semibold px-2 py-0.5 rounded-none ${
                        isActive ? 'bg-red-500/10 text-red-500' : 'text-slate-500'
                      }`}>
                        {item.metric}
                      </span>
                    </div>

                    <h3 className={`font-raleway text-lg sm:text-xl font-medium tracking-tight transition-colors ${
                      isActive ? 'text-white font-semibold' : 'text-slate-300'
                    }`}>
                      {item.title}
                    </h3>

                    {isActive && (
                      <div className="mt-3 pt-3 border-t border-white/10 animate-fade-in">
                        <p className="font-raleway text-xs sm:text-sm text-slate-300 font-light leading-relaxed mb-3">
                          {item.desc}
                        </p>
                        <ul className="space-y-1.5">
                          {item.bullets.map((bullet, bIdx) => (
                            <li key={bIdx} className="flex items-center gap-2 text-xs text-slate-200">
                              <span className="w-1 h-1 rounded-full bg-red-500"></span>
                              <span className="font-raleway font-light">{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Quick Authority Note */}
            <div className="p-4 rounded-none border-0 bg-white/[0.02] flex items-center justify-between text-xs font-mono text-slate-400 mt-2">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
                <span>ZITRAC Network Operations Center (NOC)</span>
              </div>
              <span className="text-emerald-400 font-medium">Active Monitoring</span>
            </div>
          </div>

          {/* Right Column: Hardware & Telemetry Showcase — Architecture Studio style matching section above */}
          <div className="animate-slide-right delay-200 benchmark-visual-col lg:col-span-7 relative min-h-[500px] sm:min-h-[540px] rounded-none overflow-hidden border-0 bg-gradient-to-br from-[#121217] via-[#09090b] to-[#040405] shadow-none p-6 sm:p-8 flex flex-col justify-between">
            {/* Ambient Lighting matching Architecture Studio */}
            <div className="absolute -bottom-16 -right-16 w-80 h-80 rounded-full bg-red-600/20 blur-[100px] pointer-events-none"></div>
            <div className="absolute -top-16 -left-16 w-64 h-64 rounded-full bg-emerald-500/10 blur-[90px] pointer-events-none"></div>

            {/* Background Server Hardware Image Overlay — calibrated for clarity & Sanity aesthetic */}
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
              <Image
                src="/assets/server-rack.png"
                alt="ZITRAC Cloud & Server Infrastructure"
                fill
                className="benchmark-server-img object-cover object-right-bottom opacity-25 mix-blend-screen transition-transform duration-1000 scale-105 hover:scale-100"
                unoptimized
              />
              <div className="benchmark-server-overlay absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
            </div>

            {/* Studio Browser Header matching ArchitectureMatrix exactly */}
            <div className="matrix-studio-header relative z-10 flex items-center justify-between pb-3 border-0 text-xs font-mono text-slate-400">
              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                <span className="tracking-wider uppercase text-[11px]">
                  Telemetry Studio / <strong className="benchmark-studio-title text-white font-medium">{current.title}</strong>
                </span>
              </div>
              <div className="flex items-center gap-2 opacity-70">
                <span className="w-2 h-2 rounded-full bg-slate-600"></span>
                <span className="w-2 h-2 rounded-full bg-slate-600"></span>
                <span className="w-2 h-2 rounded-full bg-slate-600"></span>
              </div>
            </div>

            {/* Center Visual Callout */}
            <div className="relative z-10 my-auto py-6">
              <div className="inline-block mb-3 px-3 py-1 rounded-none bg-red-600/10 text-red-500 text-[10px] font-mono uppercase tracking-[0.2em] font-semibold">
                {current.metricLabel}
              </div>
              <div className="text-5xl sm:text-7xl font-light text-white font-raleway tracking-tight mb-3">
                {current.metric}
              </div>
              <p className="max-w-md font-raleway text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                {current.desc}
              </p>
            </div>

            {/* Bottom Status Grid — matching matrix-code-card style */}
            <div className="relative z-10 grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-4 border-0">
              <div className="benchmark-metric-box p-3 rounded-none bg-[#050505]/95 backdrop-blur-2xl border-0 shadow-none">
                <div className="text-[9px] font-mono uppercase tracking-wider text-slate-400">Designated Node</div>
                <div className="text-xs font-mono text-slate-200 font-medium truncate mt-1">{current.telemetry.node}</div>
              </div>
              <div className="benchmark-metric-box p-3 rounded-none bg-[#050505]/95 backdrop-blur-2xl border-0 shadow-none">
                <div className="text-[9px] font-mono uppercase tracking-wider text-slate-400">Latency Target</div>
                <div className="text-xs font-mono text-emerald-400 font-medium truncate mt-1">{current.telemetry.latency}</div>
              </div>
              <div className="benchmark-metric-box p-3 rounded-none bg-[#050505]/95 backdrop-blur-2xl border-0 shadow-none">
                <div className="text-[9px] font-mono uppercase tracking-wider text-slate-400">Health State</div>
                <div className="text-xs font-mono text-slate-200 font-medium truncate mt-1">{current.telemetry.health}</div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
