'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const coreSpecializations = [
  {
    title: 'Enterprise IT Consulting',
    href: '/services/it-consulting/',
    badge: 'Advisory',
    desc: 'Strategic infrastructure audits, DR failover & 24/7 technical support.',
  },
  {
    title: 'Custom Software & AI',
    href: '/services/software-development/',
    badge: 'AI Powered',
    desc: 'Bespoke applications integrated with intelligent automation engines.',
  },
  {
    title: 'Cyber Security Watchdogs',
    href: '/services/cyber-security/',
    badge: 'Zero-Trust',
    desc: 'Automated threat detection watchdogs & proactive penetration audits.',
  },
  {
    title: 'Tailored Web Engineering',
    href: '/services/web-design-development/',
    badge: 'Sub-Second',
    desc: 'Fast, accessible frontends built for maximum search crawler dominance.',
  },
  {
    title: 'Web Hosting & .co.zw Domains',
    href: '/services/web-hosting-domain-registration/',
    badge: '99.98% SLA',
    desc: 'High-availability cPanel hosting tiers & official local DNS delegation.',
  },
];

const insightsAndDelivery = [
  {
    title: 'Engineering Methodologies',
    href: '/about/',
    desc: 'Our zero-downtime split-architecture paradigm & SLA discipline.',
  },
  {
    title: 'Client Deployments & Proof',
    href: '/work/',
    desc: 'Verified enterprise case studies and real-world impact metrics.',
  },
  {
    title: 'Cloudflare R2 Media Vaults',
    href: '/services/software-development/',
    desc: 'Zero-disk server streaming architectures utilizing external S3 storage.',
  },
  {
    title: 'Harare Regional Presence',
    href: '/contact/',
    desc: 'Central engineering hub coordinating operations across Zimbabwe.',
  },
];

const secondaryNav = [
  { href: '/work/', label: 'Our Work' },
  { href: '/pricing/', label: 'Pricing' },
  { href: '/services/web-hosting-domain-registration/', label: 'Hosting & Domains' },
  { href: '/about/', label: 'About' },
];

export default function NavbarLinks() {
  const pathname = usePathname();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const timeoutRef = useRef(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setDropdownOpen(false);
    }, 200);
  };

  useEffect(() => {
    setDropdownOpen(false);
  }, [pathname]);

  const isServicesActive = pathname?.startsWith('/services');

  return (
    <div
      className="flex items-center"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Top Navbar Row */}
      <nav aria-label="Main Navigation" className="hidden lg:flex items-center space-x-1 font-raleway">
        {/* Services Mega-Menu Trigger */}
        <div className="relative">
          <Link
            href="/services/"
            className={`nav-link-item inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.2em] font-light ${
              isServicesActive || dropdownOpen
                ? 'active text-red-600 font-medium'
                : 'text-slate-300 hover:text-white'
            }`}
            aria-expanded={dropdownOpen}
            aria-haspopup="true"
          >
            <span>Services</span>
            <svg
              className={`w-3.5 h-3.5 transition-transform duration-200 ${
                dropdownOpen ? 'rotate-180 text-red-500' : 'text-slate-400'
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
            </svg>
          </Link>
        </div>

        {/* Secondary Links */}
        {secondaryNav.map((item) => {
          const isActive = pathname === item.href || (item.href !== '/' && pathname?.startsWith(item.href));
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`nav-link-item text-xs uppercase tracking-[0.2em] font-light ${
                isActive
                  ? 'active text-red-600 font-medium'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>

      {/* Sanity-Style Full-Width Mega-Menu Dropdown Panel */}
      <div
        className={`absolute left-0 top-full w-full dropdown-panel border-y border-white/5 transition-all duration-300 origin-top overflow-hidden shadow-2xl z-50 ${
          dropdownOpen
            ? 'opacity-100 max-h-[600px] py-12 pointer-events-auto'
            : 'opacity-0 max-h-0 py-0 pointer-events-none'
        } bg-[#0a0a0a]/98 backdrop-blur-3xl`}
      >
        <div className="mx-auto max-w-full px-[30px] grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Column 1: Core Specializations */}
          <div className="lg:col-span-5 space-y-5">
            <div className="dropdown-header text-[10px] font-mono uppercase tracking-[0.2em] text-slate-500 font-semibold flex items-center justify-between pb-3 border-b border-white/5">
              <span>Core Architectural Services</span>
              <Link href="/services/" className="normal-case text-xs font-sans text-slate-400 hover:text-white transition-colors">
                View catalog &rarr;
              </Link>
            </div>

            <div className="space-y-1.5">
              {coreSpecializations.map((item) => {
                const isCurrent = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`dropdown-item-hover group block rounded-xl p-3.5 transition-all duration-300 ${
                      isCurrent
                        ? 'bg-white/5'
                        : 'hover:bg-white/[0.03] hover:translate-x-1'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className={`dropdown-item-title text-[15px] font-semibold transition-colors ${
                        isCurrent ? 'text-white' : 'text-slate-200 group-hover:text-white'
                      }`}>
                        {item.title}
                      </div>
                      <span className="text-[9px] font-mono px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-300 transition-colors group-hover:bg-red-600 group-hover:text-white">
                        {item.badge}
                      </span>
                    </div>
                    <p className="dropdown-item-desc text-[13px] text-slate-500 mt-1.5 line-clamp-1">
                      {item.desc}
                    </p>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Column 2: Architectural Insights & Verification */}
          <div className="lg:col-span-4 space-y-5">
            <div className="dropdown-header text-[10px] font-mono uppercase tracking-[0.2em] text-slate-500 font-semibold pb-3 border-b border-white/5">
              Insights &amp; Deployment
            </div>

            <div className="space-y-1.5">
              {insightsAndDelivery.map((item, idx) => (
                <Link
                  key={idx}
                  href={item.href}
                  className="dropdown-item-hover group block rounded-xl p-3.5 transition-all duration-300 hover:bg-white/[0.03] hover:translate-x-1"
                >
                  <div className="dropdown-item-title text-[14px] font-medium text-slate-200 group-hover:text-white transition-colors">
                    {item.title}
                  </div>
                  <p className="dropdown-item-desc text-[13px] text-slate-500 mt-1 line-clamp-1">
                    {item.desc}
                  </p>
                </Link>
              ))}
            </div>
          </div>

          {/* Column 3: Visual Showcase Card */}
          <div className="lg:col-span-3 flex flex-col justify-between rounded-2xl border border-white/[0.08] bg-gradient-to-br from-slate-900/50 to-black/80 p-7 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-slate-800/20 via-transparent to-transparent pointer-events-none"></div>
            
            <div className="space-y-4 relative z-10">
              <div className="font-raleway text-lg font-light tracking-[0.25em] uppercase text-white/90">
                ZITRAC
              </div>
              <div className="text-[15px] font-semibold text-white leading-snug">
                Zimbabwe Enterprise Cloud Infrastructure
              </div>
              <p className="text-[13px] text-slate-400 leading-relaxed">
                Experience guaranteed 99.98% uptime, sub-second latency, and AI automated defense watchdogs tailored for Harare enterprises.
              </p>
            </div>

            <div className="pt-8 relative z-10">
              <Link
                href="/contact/"
                className="block text-center rounded-xl bg-white text-black py-3 px-4 text-xs font-bold uppercase tracking-widest hover:bg-slate-200 hover:scale-[1.02] transition-all focus:outline-none focus:ring-2 focus:ring-white"
              >
                Schedule Consultation
              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
