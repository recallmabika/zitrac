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
    <section className="reliability-benchmark relative z-10 mx-auto max-w-full px-[30px] py-16 lg:py-24 border-b border-white/5 overflow-hidden">
      {/* Background Decorative Grid */}
      <div className="absolute inset-0 pointer-events-none opacity-20 dark:opacity-10 hero-dots"></div>

      {/* Main Container */}
      <div className="relative z-10 max-w-[1400px] mx-auto">
        
        {/* Section Header */}
        <div className="mb-12 lg:mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
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
              className="benchmark-cta-primary inline-flex items-center justify-center rounded-full bg-red-600 px-7 py-3 text-xs font-mono font-semibold uppercase tracking-[0.2em] text-white hover:bg-red-500 transition-all duration-300"
            >
              <span>Initiate Brief</span>
            </Link>
            <Link
              href="/about/"
              className="benchmark-cta-secondary inline-flex items-center justify-center rounded-full border border-white/20 bg-transparent px-7 py-3 text-xs font-mono font-semibold uppercase tracking-[0.2em] text-white hover:border-red-500 hover:text-red-500 transition-all duration-300"
            >
              <span>Corporate Profile</span>
            </Link>
          </div>
        </div>

        {/* Interactive Split Showcase (Sanity-Inspired Architecture) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Interactive Pillars Selector */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              {benchmarks.map((item, idx) => {
                const isActive = idx === activeTab;
                return (
                  <div
                    key={item.id}
                    onClick={() => setActiveTab(idx)}
                    className={`benchmark-tab-card cursor-pointer p-6 transition-all duration-300 rounded-2xl border ${
                      isActive
                        ? 'benchmark-tab-active bg-white/[0.04] border-red-500/40 shadow-lg shadow-red-500/5'
                        : 'bg-transparent border-white/5 hover:border-white/15 hover:bg-white/[0.02]'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-4 mb-2">
                      <span className={`font-mono text-[10px] tracking-widest uppercase transition-colors ${
                        isActive ? 'text-red-500 font-bold' : 'text-slate-400'
                      }`}>
                        {item.tag}
                      </span>
                      <span className={`font-mono text-xs font-semibold px-2 py-0.5 rounded-full ${
                        isActive ? 'bg-red-500/10 text-red-400 border border-red-500/20' : 'text-slate-500'
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
            <div className="p-4 rounded-xl border border-white/5 bg-white/[0.02] flex items-center justify-between text-xs font-mono text-slate-400 mt-2">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
                <span>ZITRAC Network Operations Center (NOC)</span>
              </div>
              <span className="text-emerald-400 font-medium">Active Monitoring</span>
            </div>
          </div>

          {/* Right Column: Hardware & Telemetry Showcase */}
          <div className="benchmark-visual-col lg:col-span-7 relative min-h-[460px] rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-[#0c0d12] via-[#07080b] to-[#020203] p-8 sm:p-10 flex flex-col justify-between">
            {/* Ambient Lighting */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-red-600/15 rounded-full blur-[100px] pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-[90px] pointer-events-none"></div>

            {/* Background Server Hardware Image Overlay */}
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
              <Image
                src="/assets/server-rack.png"
                alt="ZITRAC Cloud & Server Infrastructure"
                fill
                className="object-cover object-right-bottom opacity-25 mix-blend-screen transition-transform duration-1000 scale-105 hover:scale-100"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
            </div>

            {/* Top Telemetry Header */}
            <div className="relative z-10 flex items-center justify-between pb-4 border-b border-white/10 text-xs font-mono text-slate-400">
              <div className="flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                <span className="uppercase tracking-widest text-slate-300">Live SLA Telemetry</span>
              </div>
              <div className="flex items-center gap-2 text-[10px] text-slate-500 uppercase">
                <span>Core Spec: v4.2-ZW</span>
              </div>
            </div>

            {/* Center Visual Callout */}
            <div className="relative z-10 my-auto py-8">
              <div className="inline-block mb-3 px-3 py-1 rounded-full border border-red-500/30 bg-red-600/10 text-red-400 text-[11px] font-mono uppercase tracking-widest">
                {current.metricLabel}
              </div>
              <div className="text-5xl sm:text-7xl font-extralight text-white font-raleway tracking-tighter mb-4">
                {current.metric}
              </div>
              <p className="max-w-md font-raleway text-sm sm:text-base text-slate-300 font-light leading-relaxed">
                {current.desc}
              </p>
            </div>

            {/* Bottom Status Grid */}
            <div className="relative z-10 grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-white/10">
              <div className="p-3 rounded-xl bg-black/40 border border-white/10 backdrop-blur-md">
                <div className="text-[10px] font-mono uppercase text-slate-400">Designated Node</div>
                <div className="text-xs font-mono text-white font-medium truncate mt-0.5">{current.telemetry.node}</div>
              </div>
              <div className="p-3 rounded-xl bg-black/40 border border-white/10 backdrop-blur-md">
                <div className="text-[10px] font-mono uppercase text-slate-400">Latency Target</div>
                <div className="text-xs font-mono text-emerald-400 font-medium truncate mt-0.5">{current.telemetry.latency}</div>
              </div>
              <div className="p-3 rounded-xl bg-black/40 border border-white/10 backdrop-blur-md">
                <div className="text-[10px] font-mono uppercase text-slate-400">Health State</div>
                <div className="text-xs font-mono text-white font-medium truncate mt-0.5">{current.telemetry.health}</div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
