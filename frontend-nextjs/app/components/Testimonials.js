'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Testimonials() {
  const [activeIdx, setActiveIdx] = useState(0);

  const testimonials = [
    {
      id: 'education-plus',
      quote:
        'ZITRAC transformed our entire school operations with Education Plus. Managing over 2,000 students, 150+ staff members (including 60+ teachers), and over 1 million academic and financial records was a major administrative headache before. Their custom system with real-time timetable generation, automated grade dossiers, and secure parent SMS notifications runs without a single hitch.',
      author: 'Administration & ICT Directorate',
      role: 'Education Plus Institutional Network',
      location: 'Regional High School, Zimbabwe',
      metric: '150+ Staff',
      metricLabel: '60+ Teachers & 2,000+ Students',
      tag: 'Education Plus',
    },
    {
      id: 'fintech',
      quote:
        'In the multi-currency financial environment of Zimbabwe, transaction reconciliation bottlenecks can be devastating. ZITRAC engineered an automated transaction daemon that processes high-volume payments with sub-second validation and tamper-proof ledger logging. Their technical depth is rare.',
      author: 'Senior Systems Architect',
      role: 'Southern African Financial Services Group',
      location: 'Harare',
      metric: '< 1.2s',
      metricLabel: 'Latency',
      tag: 'Fintech',
    },
    {
      id: 'soc-enterprise',
      quote:
        'Having our branch perimeters and corporate network monitored around the clock with zero-trust protocols has provided absolute operational peace of mind. Their rapid threat mitigation and cryptographically verifiable audit reports exceed the highest enterprise standards.',
      author: 'Head of Infrastructure & Security',
      role: 'Industrial Logistics & Supply Chain Operator',
      location: 'Harare',
      metric: '99.98%',
      metricLabel: 'Uptime SLA',
      tag: 'CyberSec',
    },
  ];

  const current = testimonials[activeIdx];

  return (
    <section className="testimonials-section relative z-10 w-full py-20 lg:py-28">
      <div className="max-w-[1400px] mx-auto px-[30px]">
        
        {/* Minimal Header — slides up on scroll */}
        <div className="animate-on-scroll mb-16 lg:mb-20">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-red-500 mb-4">
            Testimonials
          </p>
          <h2 className="testimonial-heading font-raleway text-3xl sm:text-4xl lg:text-[3.2rem] font-extralight tracking-tight leading-[1.15] text-[#1a1a2e] max-w-2xl">
            What people say about us
          </h2>
        </div>

        {/* Clean Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">

          {/* Left: Quote — slides in from left */}
          <div className="animate-slide-left flex flex-col justify-between">
            {/* Big Quote */}
            <div className="testimonial-quote-text">
              <p className="font-raleway text-xl sm:text-2xl lg:text-[1.7rem] font-light leading-[1.6] text-[#2d2d44] tracking-normal transition-opacity duration-500">
                {current.quote}
              </p>
            </div>

            {/* Author */}
            <div className="mt-10 pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="testimonial-author font-raleway text-sm font-semibold text-[#1a1a2e]">
                    {current.author}
                  </p>
                  <p className="font-raleway text-sm text-[#8888a0] mt-0.5">
                    {current.role}
                  </p>
                </div>
                <div className="text-right">
                  <p className="testimonial-metric font-raleway text-3xl font-extralight text-[#1a1a2e] tracking-tight">
                    {current.metric}
                  </p>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-[#8888a0]">
                    {current.metricLabel}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Client Selector Cards — slides in from right */}
          <div className="animate-slide-right delay-200 flex flex-col gap-0">
            {testimonials.map((item, idx) => {
              const isActive = idx === activeIdx;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveIdx(idx)}
                  className={`testimonial-card w-full text-left py-7 px-1 transition-all duration-300 ${
                    isActive
                      ? 'opacity-100'
                      : 'opacity-50 hover:opacity-75'
                  }`}
                  style={{
                    borderTop: idx === 0 ? 'none' : '1px solid #ebebf0',
                  }}
                >
                  <div className="flex items-start justify-between gap-6">
                    <div className="flex-1">
                      <p className={`font-mono text-[10px] uppercase tracking-[0.2em] mb-2 transition-colors ${
                        isActive ? 'text-red-500' : 'text-[#b0b0c0]'
                      }`}>
                        {item.tag}
                      </p>
                      <h3 className="font-raleway text-base sm:text-lg font-medium text-[#1a1a2e] leading-snug">
                        {item.role}
                      </h3>
                      <p className="font-raleway text-sm text-[#8888a0] mt-1">
                        {item.location}
                      </p>
                    </div>

                    <div className={`shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                      isActive
                        ? 'bg-red-500 text-white'
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

            {/* Simple CTA — fades up with delay */}
            <div className="animate-on-scroll delay-400 mt-8 flex items-center gap-4">
              <Link
                href="/contact/"
                className="inline-flex items-center justify-center rounded-full bg-[#1a1a2e] px-7 py-3 text-xs font-mono font-medium uppercase tracking-[0.15em] text-white hover:bg-red-500 transition-colors duration-300"
              >
                Partner with us
              </Link>
              <Link
                href="/work/"
                className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-[0.15em] text-[#8888a0] hover:text-red-500 transition-colors"
              >
                <span>Case studies</span>
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
