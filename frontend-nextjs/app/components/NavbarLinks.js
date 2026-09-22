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
    showcase: {
      title: 'Strategic IT Consulting',
      desc: 'Expert guidance for enterprise architecture, risk management, and digital transformation in Zimbabwe.',
      images: ['/assets/it-consulting.jpg', '/assets/consulting-1.png'],
    }
  },
  {
    title: 'Custom Software & AI',
    href: '/services/software-development/',
    badge: 'AI Powered',
    desc: 'Bespoke applications integrated with intelligent automation engines.',
    showcase: {
      title: 'Next-Gen Software & AI',
      desc: 'Scalable cloud applications and AI-driven internal tools engineered for performance and reliability.',
      images: ['/assets/software-development.jpg', '/assets/software-1.png'],
    }
  },
  {
    title: 'Cyber Security Watchdogs',
    href: '/services/cyber-security/',
    badge: 'Zero-Trust',
    desc: 'Automated threat detection watchdogs & proactive penetration audits.',
    showcase: {
      title: 'Zero-Trust Security Watchdogs',
      desc: 'Military-grade encryption, automated threat intrusion monitoring, and proactive penetration testing tailored for enterprise assets.',
      images: ['/assets/cyber-1.png', '/assets/cyber-2.jpg', '/assets/cyber-3.png'],
    }
  },
  {
    title: 'Tailored Web Engineering',
    href: '/services/web-design-development/',
    badge: 'Sub-Second',
    desc: 'Fast, accessible frontends built for maximum search crawler dominance.',
    showcase: {
      title: 'High-Performance Web Engineering',
      desc: 'Custom modern frontends and interactive web applications engineered with Next.js, sub-second speeds, and world-class design systems.',
      images: ['/assets/web-eng-1.png', '/assets/web-eng-2.png'],
    }
  },
  {
    title: 'Web Hosting & .co.zw Domains',
    href: '/services/web-hosting-domain-registration/',
    badge: '99.98% SLA',
    desc: 'High-availability cPanel hosting tiers & official local DNS delegation.',
    showcase: {
      title: 'Enterprise Cloud Hosting',
      desc: '99.98% SLA uptime, automated backups, and instant .co.zw domain provisioning in Harare.',
      images: ['/assets/server-rack.png', '/assets/global-network.png'],
    }
  },
];

const recentWorkItems = [
  {
    title: 'Chipinge Safari Area (ZimParks)',
    href: '/work/',
    desc: 'Conservation & safari ecotourism platform with interactive experience bookings.',
    tag: 'Ecotourism Portal',
  },
  {
    title: 'Kenny Technologies College',
    href: '/work/',
    desc: 'Online student application system with automated payment gateway integrations.',
    tag: 'EdTech Portal',
  },
  {
    title: 'Chibuwe Technical High School',
    href: '/work/',
    desc: 'School Management System (SMS) & digital admissions with payment integration.',
    tag: 'SMS & Payments',
  },
];

const secondaryNav = [
  { href: '/work/', label: 'Our Work' },
  { href: '/pricing/', label: 'Pricing' },
  { href: '/services/web-hosting-domain-registration/', label: 'Hosting' },
  { href: '/services/web-hosting-domain-registration/#domains', label: 'Domains' },
  { href: '/about/', label: 'About' },
];

export default function NavbarLinks() {
  const pathname = usePathname();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [hoveredService, setHoveredService] = useState(null);
  const [imgIndex, setImgIndex] = useState(0);
  const timeoutRef = useRef(null);
  const imgIntervalRef = useRef(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setDropdownOpen(false);
    }, 200);
  };

  // Crossfade between images every 2.4s while hovering a service
  useEffect(() => {
    if (hoveredService && hoveredService.showcase?.images?.length > 1) {
      setImgIndex(0);
      const total = hoveredService.showcase.images.length;
      imgIntervalRef.current = setInterval(() => {
        setImgIndex(i => (i + 1) % total);
      }, 2400);
    } else {
      clearInterval(imgIntervalRef.current);
      setImgIndex(0);
    }
    return () => clearInterval(imgIntervalRef.current);
  }, [hoveredService]);

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

      {/* Minimalist Sanity-Style Clean Dropdown Panel */}
      <div
        className={`absolute left-0 top-full w-full dropdown-panel border-b border-white/10 transition-all duration-300 origin-top overflow-hidden shadow-2xl z-50 ${
          dropdownOpen
            ? 'opacity-100 max-h-[640px] py-8 pointer-events-auto'
            : 'opacity-0 max-h-0 py-0 pointer-events-none'
        } bg-black/95 backdrop-blur-2xl`}
      >
        <div className="mx-auto max-w-full px-[30px] grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          
          {/* Column 1: Core Architectural Services (Restored original services) */}
          <div className="lg:col-span-3 space-y-4">
            <div className="text-[10px] font-mono uppercase tracking-[0.25em] text-slate-500 font-semibold pb-2 border-b border-white/10 flex items-center justify-between">
              <span>Core Architectural Services</span>
              <Link href="/services/" className="normal-case text-xs font-sans text-slate-400 hover:text-white transition-colors">
                All services &rarr;
              </Link>
            </div>

            <div className="space-y-1">
              {coreSpecializations.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group flex items-center justify-between py-2 text-slate-200 hover:text-white transition-colors"
                >
                  <span className="font-raleway text-lg font-normal tracking-tight group-hover:underline group-hover:translate-x-1 transition-transform">
                    {item.title}
                  </span>
                </Link>
              ))}
            </div>

            {/* Decorative Dot Matrix Long Rectangle */}
            <div className="pt-6 select-none pointer-events-none opacity-25 hover:opacity-40 transition-opacity">
              <div className="grid grid-cols-12 gap-2 w-48 sm:w-56">
                {Array.from({ length: 48 }).map((_, i) => (
                  <div key={i} className="w-1 h-1 rounded-full bg-slate-400"></div>
                ))}
              </div>
            </div>
          </div>

          {/* Column 2: Our Recent Work (Restored original portfolio projects) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="text-[10px] font-mono uppercase tracking-[0.25em] text-slate-500 font-semibold pb-2 border-b border-white/10 flex items-center justify-between">
              <span>Our Recent Work</span>
              <Link href="/work/" className="normal-case text-xs font-sans text-slate-400 hover:text-white transition-colors">
                All projects &rarr;
              </Link>
            </div>

            <div className="space-y-1">
              {recentWorkItems.map((item, idx) => (
                <Link
                  key={idx}
                  href={item.href}
                  className="group flex items-center justify-between py-2 text-slate-200 hover:text-white transition-colors"
                >
                  <span className="font-raleway text-lg font-normal tracking-tight group-hover:underline group-hover:translate-x-1 transition-transform truncate pr-2">
                    {item.title}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Column 3: Sanity-Style Graphic Announcement Banner - Expanded & Bigger */}
          <div className="lg:col-span-5 rounded-3xl border border-white/15 bg-gradient-to-br from-black via-slate-950 to-black p-8 sm:p-9 relative overflow-hidden flex flex-col justify-between min-h-[340px] group shadow-2xl">
            {/* Ambient Background Grid */}
            <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-500/30 via-transparent to-transparent"></div>
            
            {/* Top Bold Typographic Lockup */}
            <div className="space-y-2 relative z-10">
              <div className="font-mono text-xs sm:text-sm text-emerald-400 tracking-[0.25em] font-semibold uppercase flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                ZITRAC CORE
              </div>
              <h4 className="font-raleway text-3xl sm:text-4xl lg:text-[2.6rem] font-light tracking-tight text-white leading-[1.08]">
                EVERYTHING<br />
                <span className="font-mono text-emerald-400 font-semibold tracking-tight">*HARARE</span> 2026
              </h4>
            </div>

            {/* Wireframe geometric graphic accent */}
            <div className="py-3 text-xs sm:text-sm font-mono text-slate-400 relative z-10 leading-relaxed max-w-md">
              Explore our latest enterprise cloud benchmarks, automated zero-trust protocols &amp; Next.js deployments.
            </div>

            {/* Bottom Action Pill */}
            <div className="pt-3 relative z-10">
              <Link
                href="/services/"
                className="inline-flex items-center gap-2.5 font-mono text-xs uppercase tracking-[0.2em] font-semibold text-white bg-black/90 hover:bg-white hover:text-black border border-white/25 px-6 py-3 rounded-full transition-all duration-300 shadow-lg group-hover:border-emerald-500/40"
              >
                <span>SEE WHAT WE ANNOUNCED</span>
                <span className="text-emerald-400 group-hover:text-black transition-transform group-hover:translate-x-1">&rarr;</span>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
