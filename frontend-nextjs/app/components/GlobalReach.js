'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function GlobalReach() {
  const [activeIdx, setActiveIdx] = useState(1);
  const [isBtnHovered, setIsBtnHovered] = useState(false);

  const hostingPlans = [
    {
      id: 'starter',
      tier: 'Starter Tier',
      tag: 'Local SMEs & Brands',
      name: 'Starter Web Hosting',
      storage: '10 GB NVMe SSD',
      bandwidth: 'Unmetered Bandwidth',
      domain: '1 Free .co.zw Domain',
      mail: '5 Professional Mailboxes',
      highlight: '99.98% SLA Uptime',
      desc: 'High-speed cPanel web hosting ideal for Zimbabwean startups, small enterprises, and professional brand portfolios. Complete with free TLS/SSL certificates and DNSSEC protection.',
      specs: [
        'Free .co.zw domain registration included',
        'Pure NVMe SSD high-throughput disk array',
        'cPanel control panel with 1-click script installers',
        'Automated daily offsite cloud backups',
      ],
    },
    {
      id: 'business',
      tier: 'Business Tier',
      tag: 'Most Popular &bull; Portals & Apps',
      name: 'Business Web Hosting',
      storage: '35 GB NVMe SSD',
      bandwidth: 'Unmetered Bandwidth',
      domain: '1 Free .co.zw Domain',
      mail: 'Unlimited Mailboxes',
      highlight: 'Python / Node.js Runtimes',
      desc: 'Engineered for growing Zimbabwean companies, dynamic web portals, and database-driven software applications. Backed by high CPU allocation and Phusion WSGI execution on our owned server array.',
      specs: [
        'Native Python WSGI & Node.js app environment',
        'Unlimited business email addresses on mail.zitrac.co.zw',
        'Direct peering at Harare IXP for lowest local latency',
        'Zero-trust DDoS protection & automated spam filtering',
      ],
    },
    {
      id: 'enterprise',
      tier: 'Enterprise Tier',
      tag: 'Mission-Critical & High Traffic',
      name: 'Enterprise Web Hosting',
      storage: '100 GB NVMe SSD',
      bandwidth: 'Priority Fiber Routing',
      domain: 'Free Multiple .co.zw Domains',
      mail: 'Enterprise Mail Gateway',
      highlight: 'Owned Hardware Core',
      desc: 'Heavyweight computing environments running on our own purchased enterprise hardware servers, built for high-concurrency educational portals, corporate ERPs, and database-driven web applications.',
      specs: [
        'Company-owned enterprise hardware infrastructure',
        'Direct peering at Harare IXP for low regional latency',
        'Custom Cloudflare R2 object store integration',
        '24/7 technical engineering support & 15-minute response SLA',
      ],
    },
  ];

  const current = hostingPlans[activeIdx];

  return (
    <section className="global-reach-section relative z-10 w-full py-20 lg:py-28">
      <div className="max-w-[1400px] mx-auto px-[30px]">
        
        {/* Minimal Header — smooth scroll reveal */}
        <div className="animate-on-scroll mb-16 lg:mb-20">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-red-500 mb-4">
            Cloud Infrastructure &bull; Web Hosting &bull; .co.zw Domains
          </p>
          <h2 className="hosting-heading font-raleway text-3xl sm:text-4xl lg:text-[3.2rem] font-extralight tracking-tight leading-[1.15] text-[#1a1a2e] max-w-3xl">
            Enterprise Web Hosting &amp; Domain Registration
          </h2>
          <p className="font-raleway text-sm sm:text-base text-[#686882] font-light mt-4 leading-relaxed max-w-2xl">
            Ultra-fast cPanel hosting backed by pure NVMe SSDs, native Python and Node.js runtimes, official Zimbabwean .co.zw registry, and 99.98% high-availability uptime discipline.
          </p>
        </div>

        {/* Clean Flat Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Left Column: Image drops from top, text slides from left to right */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-8">
            
            {/* 1. Image drops from top */}
            <div className="animate-drop-top relative w-full h-[320px] sm:h-[400px] flex items-center justify-center p-2 bg-transparent">
              <div className="relative w-full max-w-[520px] h-full">
                <Image
                  src="/assets/web-hosting-hero.png"
                  alt="ZITRAC Web Hosting and Cloud Infrastructure"
                  fill
                  className="object-contain transition-transform duration-700 hover:scale-105"
                  priority
                  unoptimized
                />
              </div>
            </div>

            {/* 2. Text slides in from left to right */}
            <div className="animate-slide-left delay-200 pt-4 space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <span className="font-mono text-xs uppercase tracking-widest text-red-500 font-semibold">
                    {current.tier}
                  </span>
                  <h3 className="hosting-active-title font-raleway text-2xl sm:text-3xl font-light text-[#1a1a2e] mt-1">
                    {current.name}
                  </h3>
                </div>
                <div className="text-right">
                  <span className="inline-block px-3 py-1 rounded-full text-[11px] font-mono font-medium bg-red-50 text-red-600">
                    {current.highlight}
                  </span>
                </div>
              </div>

              <p className="font-raleway text-base text-[#4a4a62] font-light leading-relaxed">
                {current.desc}
              </p>

              {/* Specification Bullet Points */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {current.specs.map((spec, sIdx) => (
                  <div key={sIdx} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 shrink-0"></span>
                    <span className="font-raleway text-xs sm:text-sm text-[#4a4a62] font-light leading-normal">
                      {spec}
                    </span>
                  </div>
                ))}
              </div>

              {/* Active Plan Key Metrics Row with subtle hairline */}
              <div className="hosting-divider grid grid-cols-3 gap-6 pt-6 border-t border-slate-200/50">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-[#8888a0]">Storage</p>
                  <p className="font-raleway text-lg font-light text-[#1a1a2e] mt-1">{current.storage}</p>
                </div>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-[#8888a0]">Bandwidth</p>
                  <p className="font-raleway text-lg font-light text-[#1a1a2e] mt-1">{current.bandwidth}</p>
                </div>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-[#8888a0]">Domain</p>
                  <p className="font-raleway text-lg font-light text-emerald-600 mt-1">{current.domain}</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Tier Selector slides up from bottom */}
          <div className="animate-slide-up delay-300 lg:col-span-5 flex flex-col gap-0">
            {hostingPlans.map((plan, idx) => {
              const isActive = idx === activeIdx;
              return (
                <button
                  key={plan.id}
                  type="button"
                  onClick={() => setActiveIdx(idx)}
                  className={`hosting-tier-btn w-full text-left py-7 px-2 transition-all duration-300 ${
                    isActive
                      ? 'opacity-100'
                      : 'opacity-50 hover:opacity-75'
                  }`}
                  style={{
                    borderTop: idx === 0 ? 'none' : '1px solid rgba(226, 232, 240, 0.4)',
                  }}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className={`font-mono text-[10px] uppercase tracking-[0.2em] transition-colors ${
                          isActive ? 'text-red-500 font-semibold' : 'text-[#b0b0c0]'
                        }`}>
                          {plan.tier}
                        </span>
                        {plan.popular && (
                          <span className="text-[9px] font-mono px-2 py-0.5 rounded-full bg-red-50 text-red-600 font-semibold uppercase">
                            Popular
                          </span>
                        )}
                      </div>
                      <h4 className="hosting-tier-name font-raleway text-lg font-medium text-[#1a1a2e] leading-snug">
                        {plan.name}
                      </h4>
                      <p className="font-raleway text-xs text-[#8888a0] mt-1 line-clamp-1">
                        {plan.storage} &bull; {plan.mail}
                      </p>
                    </div>

                    <div className={`shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                      isActive
                        ? 'bg-red-500 text-white shadow-md shadow-red-500/20'
                        : 'bg-[#f0f0f5] text-[#b0b0c0]'
                    }`}>
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </button>
              );
            })}

            {/* Quick Authority Callout with subtle hairline */}
            <div className="hosting-divider mt-8 pt-6 space-y-5 border-t border-slate-200/50">
              <div className="flex items-center justify-between text-xs font-mono text-[#8888a0]">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span>Harare Data Center Core</span>
                </div>
                <span className="text-emerald-600 font-medium">99.98% SLA</span>
              </div>

              {/* Primary Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-1">
                <Link
                  href="/services/web-hosting-domain-registration/"
                  className="inline-flex items-center justify-center rounded-full bg-[#1a1a2e] px-7 py-3 text-xs font-mono font-medium uppercase tracking-[0.15em] text-white hover:bg-red-500 transition-colors duration-300"
                >
                  View All Packages
                </Link>
                <Link
                  href="/contact/"
                  className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-[0.15em] text-[#8888a0] hover:text-red-500 transition-colors"
                >
                  <span>Domain Pricing</span>
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>

              {/* BIG "GET YOUR FREEDOMAIN" BUTTON with Video Background on Hover */}
              <div className="pt-3">
                <Link
                  href="/contact/"
                  onMouseEnter={() => setIsBtnHovered(true)}
                  onMouseLeave={() => setIsBtnHovered(false)}
                  className="group relative flex w-full items-center justify-center overflow-hidden rounded-full bg-red-600 px-8 py-5 text-center font-raleway text-lg sm:text-xl font-bold uppercase tracking-wider text-white shadow-none border-0 transition-all duration-500 hover:bg-red-700 active:scale-[0.99]"
                >
                  {/* Background Video — smoothly fades in on hover */}
                  <video
                    src="/assets/networking.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 pointer-events-none ${
                      isBtnHovered ? 'opacity-40' : 'opacity-0'
                    }`}
                  />

                  {/* Darkening tint over the video to preserve text readability */}
                  <div
                    className={`absolute inset-0 bg-black/30 transition-opacity duration-500 pointer-events-none ${
                      isBtnHovered ? 'opacity-100' : 'opacity-0'
                    }`}
                  />

                  {/* Button Label */}
                  <span className="relative z-10 select-none">
                    GET YOUR FREEDOMAIN
                  </span>
                </Link>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
