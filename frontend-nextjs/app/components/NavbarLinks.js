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
    title: 'Education Plus (SMS Platform)',
    href: '/work/',
    desc: 'Advanced School Management System (SMS) & digital admissions with payment integration.',
    tag: 'Education Plus',
  },
];

const secondaryNav = [
  { href: '/work/', label: 'Our Work' },
  { href: '/services/web-hosting-domain-registration/', label: 'Hosting' },
  { href: '/domains/', label: 'Domains' },
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

  // Determine active states cleanly without dual-highlighting
  const isHostingPage = pathname === '/services/web-hosting-domain-registration' || pathname === '/services/web-hosting-domain-registration/';
  const isServicesActive = pathname?.startsWith('/services') && !isHostingPage;

  return (
    <div className="flex items-center">
      {/* Top Navbar Row */}
      <nav aria-label="Main Navigation" className="hidden lg:flex items-center space-x-1 font-raleway">
        {/* Services Mega-Menu Trigger - Scoped strictly to Services (excluding Hosting) */}
        <div
          className="relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
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

        {/* Secondary Links (Portfolio, About, Careers, Contact, etc.) */}
        {secondaryNav.map((item) => {
          let isActive = false;
          if (item.href === '/services/web-hosting-domain-registration/') {
            isActive = isHostingPage;
          } else if (item.href === '/domains/') {
            isActive = pathname === '/domains' || pathname === '/domains/';
          } else {
            isActive = pathname === item.href || (item.href !== '/' && pathname?.startsWith(item.href));
          }

          return (
            <Link
              key={item.href}
              href={item.href}
              onMouseEnter={() => {
                if (timeoutRef.current) clearTimeout(timeoutRef.current);
                setDropdownOpen(false);
              }}
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

      {/* Minimalist Sanity-Style Clean Dropdown Panel - Preserves open state while hovering inside */}
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
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

          {/* Column 3: Flagship Platform Showcase with Full Background Image (No shadows, No rounded corners, No unnecessary borders) */}
          <div className="lg:col-span-5 relative overflow-hidden bg-black p-6 sm:p-7 flex flex-col justify-between min-h-[380px] group">
            {/* Full Background Image - Bright and Clear */}
            <Image
              src="/assets/chibuwe-student-profile.png"
              alt="ZITRAC Advanced School Management System Architecture"
              fill
              className="object-cover object-top opacity-85 group-hover:opacity-95 group-hover:scale-102 transition-all duration-500 pointer-events-none"
              priority
              unoptimized
            />
            {/* Subtle bottom & top gradient so the image shines through cleanly while preserving text legibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/70 pointer-events-none" />

            {/* Top Bar: Status */}
            <div className="relative z-10">
              <div className="flex items-center justify-between">
                <div className="font-mono text-xs text-emerald-400 tracking-[0.2em] font-semibold uppercase flex items-center gap-2">
                  <span className="w-2 h-2 bg-emerald-400"></span>
                  FLAGSHIP PLATFORM &bull; EDUCATION PLUS
                </div>
                <span className="font-mono text-[10px] text-slate-300 uppercase tracking-widest bg-white/10 px-2 py-0.5">
                  ENTERPRISE SMS DEPLOYMENT
                </span>
              </div>
            </div>

            {/* Center Content Lockup */}
            <div className="relative z-10 py-6 space-y-2">
              <h4 className="font-raleway text-2xl sm:text-3xl font-light tracking-tight text-white leading-tight">
                Education Plus &mdash; School Management
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed max-w-md">
                Production architecture supporting 150+ staff (including 60+ teachers), 2,000+ students, automated timetable scheduling &amp; tamper-proof UUID student dossiers.
              </p>
            </div>

            {/* Bottom Action Footer */}
            <div className="relative z-10 flex items-center justify-between pt-2">
              <span className="font-mono text-xs text-emerald-400 font-semibold tracking-wide">
                150+ Staff &bull; 60+ Teachers
              </span>
              <Link
                href="/work/"
                className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.15em] font-semibold text-white hover:text-emerald-400 transition-colors"
              >
                <span>EXPLORE WORK</span>
                <span className="text-emerald-400 group-hover:translate-x-1 transition-transform">&rarr;</span>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
