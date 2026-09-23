'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState(0);
  const [isBtnHovered, setIsBtnHovered] = useState(false);

  const faqs = [
    {
      q: 'How do I claim my free .co.zw or .com domain registration?',
      a: 'Every annual Web Hosting package (Starter, Business, or Enterprise) includes one complimentary official Zimbabwean .co.zw or standard .com domain registration. When you sign up, our engineering team handles DNS propagation, nameserver linking, and WHOIS security at zero additional cost.',
      category: 'Domains & DNS',
    },
    {
      q: 'Can ZITRAC migrate my existing website and email accounts with zero downtime?',
      a: 'Yes. Our Harare cloud engineers perform managed migrations covering your complete cPanel environment, MySQL/MariaDB databases, WordPress or custom framework codebases, and existing IMAP/POP3 business mailboxes with dual-routing cutover to eliminate message drops or downtime.',
      category: 'Migrations',
    },
    {
      q: 'Do your servers support custom Python (Flask) and Node.js runtimes?',
      a: 'Yes. Our web hosting environments include native WSGI execution for Python web applications built on Flask, alongside reverse-proxied Node.js runtime environments and traditional PHP/cPanel web stacks.',
      category: 'Developer Stacks',
    },
    {
      q: 'What server infrastructure do you use and what uptime SLA do you guarantee?',
      a: 'We operate on our own purchased enterprise hardware servers, deployed and maintained directly by our engineering team in Zimbabwe. Peered at the local Harare Internet Exchange Point (IXP) for low latency, we guarantee a 99.98% high-availability uptime SLA.',
      category: 'Infrastructure & SLA',
    },
    {
      q: 'How does the Advanced School Management System deployment work for institutions?',
      a: 'With our Education Plus platform, we conduct an initial data audit, import student profiles, configure automated timetable matrices, train bursars and administrators, and deploy dedicated role-based portals supporting 2,000+ students and 150+ staff.',
      category: 'Education Portals',
    },
    {
      q: 'What cybersecurity defenses and threat monitoring are included?',
      a: 'Our hosting and server environments include automated zero-trust perimeter firewalls, automated brute-force honeypots, free Let’s Encrypt TLS 1.3 certificates, DNSSEC signing, and 24/7 ARTIS CyberSecOps SOC threat monitoring.',
      category: 'Cyber Security',
    },
  ];

  const toggle = (idx) => {
    setOpenIdx(openIdx === idx ? -1 : idx);
  };

  return (
    <section className="faq-section relative z-10 w-full py-20 lg:py-28">
      <div className="max-w-[1400px] mx-auto px-[30px]">
        
        {/* Section Header */}
        <div className="animate-on-scroll mb-16 lg:mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-3xl">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#8888a0] mb-4">
              Answers &bull; Knowledge Base &bull; Help
            </p>
            <h2 className="faq-heading font-raleway text-3xl sm:text-4xl lg:text-[3.2rem] font-extralight tracking-tight leading-[1.15] text-[#1a1a2e]">
              Frequently Asked Questions
            </h2>
            <p className="font-raleway text-sm sm:text-base text-[#686882] font-light mt-4 leading-relaxed max-w-2xl">
              Clear answers regarding our web hosting packages, free domain registration, custom software deployments, and corporate IT support across Zimbabwe.
            </p>
          </div>

          <div className="shrink-0 flex items-center gap-3">
            <Link
              href="/contact/"
              className="inline-flex items-center justify-center rounded-full bg-[#1a1a2e] px-7 py-3 text-xs font-mono font-medium uppercase tracking-[0.15em] text-white hover:bg-slate-800 transition-colors duration-300"
            >
              Ask an Engineer
            </Link>
          </div>
        </div>

        {/* Flat Accordion Grid */}
        <div className="animate-slide-up delay-200 max-w-4xl mx-auto space-y-0">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="faq-item py-6 transition-colors duration-200"
                style={{
                  borderTop: idx === 0 ? 'none' : '1px solid rgba(226, 232, 240, 0.4)',
                }}
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full text-left flex items-start justify-between gap-6 group cursor-pointer bg-transparent border-0 outline-none p-0"
                >
                  <div className="flex-1">
                    <span className="faq-category font-mono text-[10px] uppercase tracking-widest text-[#71718a] mb-1.5 block">
                      {faq.category}
                    </span>
                    <h3 className="faq-question font-raleway text-lg sm:text-xl font-medium text-[#1a1a2e] transition-colors leading-snug">
                      {faq.q}
                    </h3>
                  </div>

                  <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 mt-1 ${
                    isOpen
                      ? 'bg-[#1a1a2e] text-white rotate-180'
                      : 'bg-slate-100 text-slate-500 group-hover:bg-slate-200'
                  }`}>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>

                {isOpen && (
                  <div className="pt-4 pr-12 animate-fade-in">
                    <p className="font-raleway text-sm sm:text-base text-[#4a4a62] font-light leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have a Question? — Soft Subtle Separator & Substantially Larger Video Hover Button */}
        <div className="faq-still-card mt-16 pt-10 text-center max-w-4xl mx-auto" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.05)' }}>
          <p className="faq-still-title font-raleway text-lg sm:text-xl font-light text-[#1a1a2e] mb-2">
            Still have a question?
          </p>
          <p className="font-raleway text-xs sm:text-sm text-[#8888a0] font-light max-w-lg mx-auto mb-8">
            Our Harare software and cloud engineering team is on standby to help you architect and deploy your solution.
          </p>

          {/* Substantially Larger Button for "ASK YOUR QUESTION" with Video Background on Hover */}
          <div className="flex justify-center">
            <Link
              href="/contact/"
              onMouseEnter={() => setIsBtnHovered(true)}
              onMouseLeave={() => setIsBtnHovered(false)}
              className="group relative flex w-full max-w-xl sm:max-w-2xl items-center justify-center overflow-hidden rounded-full bg-[#1a1a2e] px-10 sm:px-16 py-6 sm:py-7 text-center font-raleway text-xl sm:text-2xl font-bold uppercase tracking-[0.18em] text-white shadow-none border-0 transition-all duration-500 hover:bg-[#252538] active:scale-[0.99]"
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

              {/* Darkening tint over the video to preserve high text contrast */}
              <div
                className={`absolute inset-0 bg-black/40 transition-opacity duration-500 pointer-events-none ${
                  isBtnHovered ? 'opacity-100' : 'opacity-0'
                }`}
              />

              {/* Button Label */}
              <span className="relative z-10 select-none">
                ASK YOUR QUESTION
              </span>
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
