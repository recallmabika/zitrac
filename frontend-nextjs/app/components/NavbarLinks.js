'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const servicesDropdown = [
  {
    title: 'Enterprise IT Consulting',
    desc: 'Strategic infrastructure audits & round-the-clock technical support',
    href: '/services/it-consulting/',
    tag: 'Advisory',
  },
  {
    title: 'Custom Software & AI Automation',
    desc: 'Bespoke applications integrated with intelligent automation engines',
    href: '/services/software-development/',
    tag: 'AI Integrated',
  },
  {
    title: 'Cyber Security & Autonomous Watchdogs',
    desc: 'Zero-trust perimeter defense and AI threat detection monitors',
    href: '/services/cyber-security/',
    tag: 'Zero-Trust',
  },
  {
    title: 'Custom Web Design & Engineering',
    desc: 'Sub-second static architectures optimized for high search visibility',
    href: '/services/web-design-development/',
    tag: 'Technical SEO',
  },
  {
    title: 'Web Hosting & .co.zw Domain Registration',
    desc: 'High-availability cPanel hosting tiers & official DNS delegation',
    href: '/services/web-hosting-domain-registration/',
    tag: '99.98% SLA',
  },
];

const mainNavItems = [
  { href: '/work/', label: 'Our Work' },
  { href: '/pricing/', label: 'Pricing' },
  { href: '/about/', label: 'About' },
];

export default function NavbarLinks() {
  const pathname = usePathname();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const timeoutRef = useRef(null);
  const dropdownRef = useRef(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setDropdownOpen(false);
    }, 180);
  };

  // Close dropdown on click outside or navigation
  useEffect(() => {
    setDropdownOpen(false);
  }, [pathname]);

  const isServicesActive = pathname?.startsWith('/services');

  return (
    <nav aria-label="Main Navigation" className="hidden lg:flex items-center space-x-1.5 text-sm font-medium">
      {/* Services Dropdown Trigger */}
      <div
        ref={dropdownRef}
        className="relative"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Link
          href="/services/"
          className={`nav-link-item inline-flex items-center gap-1.5 ${
            isServicesActive
              ? 'active text-red-600 font-semibold'
              : 'text-slate-300 hover:text-white'
          }`}
          aria-expanded={dropdownOpen}
          aria-haspopup="true"
        >
          <span>Services</span>
          <svg
            className={`w-3.5 h-3.5 transition-transform duration-200 ${dropdownOpen ? 'rotate-180 text-red-500' : 'text-slate-400'}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
          </svg>
        </Link>

        {/* Dropdown Menu Panel with Smooth Flyout */}
        <div
          className={`absolute left-0 top-full pt-3 w-80 md:w-96 transition-all duration-200 origin-top-left z-50 ${
            dropdownOpen
              ? 'opacity-100 scale-100 pointer-events-auto visible'
              : 'opacity-0 scale-95 pointer-events-none invisible'
          }`}
        >
          <div className="rounded-2xl border border-white/10 bg-slate-950/95 p-3 shadow-2xl backdrop-blur-2xl divide-y divide-white/5">
            <div className="px-3 py-2 text-[10px] font-mono uppercase tracking-widest text-slate-400 flex items-center justify-between">
              <span>CORE SPECIALIZATIONS</span>
              <Link href="/services/" className="text-red-400 hover:text-red-300 normal-case font-sans text-xs">
                View All &rarr;
              </Link>
            </div>
            <div className="py-2 space-y-1">
              {servicesDropdown.map((svc) => {
                const isCurrent = pathname === svc.href;
                return (
                  <Link
                    key={svc.href}
                    href={svc.href}
                    className={`block rounded-xl p-3 transition-all ${
                      isCurrent
                        ? 'bg-red-950/50 border border-red-800/40 text-white'
                        : 'hover:bg-white/5 hover:translate-x-1'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <div className={`text-xs font-bold ${isCurrent ? 'text-red-400' : 'text-white'}`}>
                        {svc.title}
                      </div>
                      <span className="text-[9px] font-mono px-2 py-0.5 rounded-full bg-red-950/80 text-red-300 border border-red-800/30">
                        {svc.tag}
                      </span>
                    </div>
                    <div className="text-[11px] text-slate-400 leading-snug">
                      {svc.desc}
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Main Secondary Links: Our Work, Pricing, About */}
      {mainNavItems.map((item) => {
        const isActive = pathname === item.href || (item.href !== '/' && pathname?.startsWith(item.href));
        return (
          <Link
            key={item.href}
            href={item.href}
            className={`nav-link-item ${
              isActive
                ? 'active text-red-600 font-semibold'
                : 'text-slate-300 hover:text-white'
            }`}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
