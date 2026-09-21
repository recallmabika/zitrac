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

      {/* Sanity-Style Full-Width Mega-Menu Dropdown Panel */}
      <div
        className={`absolute left-0 top-full w-full dropdown-panel border-y border-white/10 transition-all duration-300 origin-top overflow-hidden shadow-2xl z-50 ${
          dropdownOpen
            ? 'opacity-100 max-h-[640px] py-10 pointer-events-auto'
            : 'opacity-0 max-h-0 py-0 pointer-events-none'
        } bg-[#080808]/95 backdrop-blur-xl`}
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
                    onMouseEnter={() => setHoveredService(item)}
                    onMouseLeave={() => setHoveredService(null)}
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
                      <span className="text-[9px] font-mono px-2.5 py-0.5 rounded-full bg-transparent text-transparent transition-colors group-hover:bg-red-600 group-hover:text-white">
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

          {/* Column 2: Our Recent Work */}
          <div className="lg:col-span-4 space-y-5">
            <div className="dropdown-header text-[10px] font-mono uppercase tracking-[0.2em] text-slate-500 font-semibold flex items-center justify-between pb-3 border-b border-white/5">
              <span>Our Recent Work</span>
              <Link href="/work/" className="normal-case text-xs font-sans text-slate-400 hover:text-white transition-colors">
                All projects &rarr;
              </Link>
            </div>

            <div className="space-y-2">
              {recentWorkItems.map((item, idx) => (
                <Link
                  key={idx}
                  href={item.href}
                  className="dropdown-item-hover group block rounded-xl p-3.5 transition-all duration-300 hover:bg-white/[0.03] hover:translate-x-1 border border-transparent hover:border-white/5"
                >
                  <div className="flex items-center justify-between mb-1">
                    <div className="dropdown-item-title text-[14px] font-medium text-slate-200 group-hover:text-white transition-colors">
                      {item.title}
                    </div>
                    <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-white/5 text-slate-400 border border-white/5 group-hover:border-red-500/30 group-hover:text-red-400 transition-colors">
                      {item.tag}
                    </span>
                  </div>
                  <p className="dropdown-item-desc text-[12px] text-slate-500 leading-relaxed line-clamp-2">
                    {item.desc}
                  </p>
                </Link>
              ))}
            </div>
          </div>

          {/* Column 3: Visual Showcase Card */}
          <div className="lg:col-span-3 flex flex-col justify-between rounded-2xl border border-white/[0.08] bg-black/60 p-7 relative overflow-hidden">
            {/* Crossfading background images */}
            {(hoveredService ? hoveredService.showcase.images : ['/assets/consulting-1.png', '/assets/consulting-2.png']).map((src, i) => (
              <div
                key={src}
                className="absolute inset-0 transition-opacity duration-700"
                style={{
                  backgroundImage: `url(${src})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  opacity: imgIndex === i ? 0.35 : 0,
                }}
              />
            ))}
            {/* Dark gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/30 pointer-events-none"></div>

            <div className="space-y-4 relative z-10 transition-all duration-300">
              <div className="font-raleway text-lg font-light tracking-[0.25em] uppercase text-white/90">
                ZITRAC
              </div>
              <div className="text-[15px] font-semibold text-white leading-snug">
                {hoveredService ? hoveredService.showcase.title : 'Zimbabwe Enterprise Cloud Infrastructure'}
              </div>
              <p className="text-[13px] text-slate-300 leading-relaxed min-h-[60px]">
                {hoveredService ? hoveredService.showcase.desc : 'Experience guaranteed 99.98% uptime, sub-second latency, and AI automated defense watchdogs tailored for Harare enterprises.'}
              </p>
            </div>

            <div className="pt-8 relative z-10">
              <Link
                href="/contact/"
                className="block text-center rounded-xl bg-white text-black py-3 px-4 text-xs font-bold uppercase tracking-widest hover:bg-slate-200 hover:scale-[1.02] transition-all focus:outline-none"
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
