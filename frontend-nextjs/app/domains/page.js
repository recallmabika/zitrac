'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const tldList = [
  {
    tld: '.co.zw',
    type: 'Official Commercial (Zimbabwe)',
    popular: true,
    price: '$5',
    period: '/year',
    renewal: '$5/yr renewal',
    desc: 'The gold standard for Zimbabwean companies, startups, and commercial entities.',
  },
  {
    tld: '.org.zw',
    type: 'Non-Profit & NGOs (Zimbabwe)',
    popular: false,
    price: '$5',
    period: '/year',
    renewal: '$5/yr renewal',
    desc: 'Ideal for Zimbabwean non-profit organizations, charities, and community trusts.',
  },
  {
    tld: '.ac.zw',
    type: 'Academic & Schools (Zimbabwe)',
    popular: false,
    price: '$5',
    period: '/year',
    renewal: '$5/yr renewal',
    desc: 'Dedicated to accredited Zimbabwean schools, colleges, and educational institutes.',
  },
  {
    tld: '.com',
    type: 'Global Commercial',
    popular: true,
    price: '$14',
    period: '/year',
    renewal: '$14/yr renewal',
    desc: 'The most recognized global domain extension for worldwide market presence.',
  },
  {
    tld: '.net',
    type: 'Global Network & Tech',
    popular: false,
    price: '$16',
    period: '/year',
    renewal: '$16/yr renewal',
    desc: 'Trusted globally for technology infrastructure, telecom, and digital platforms.',
  },
  {
    tld: '.org',
    type: 'Global Non-Profit & Institutions',
    popular: false,
    price: '$15',
    period: '/year',
    renewal: '$15/yr renewal',
    desc: 'Standard worldwide top-level domain for global foundations and NGOs.',
  },
];

export default function DomainsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTld, setSelectedTld] = useState('.co.zw');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [status, setStatus] = useState(null);
  const dropdownRef = useRef(null);

  const [viewMode, setViewMode] = useState('list'); // 'list' is default as requested
  const [activeHeroBg, setActiveHeroBg] = useState(0);

  const heroImages = [
    { src: '/assets/domain-hero-1.png', alt: 'Domain Name Registry & Server Architecture' },
    { src: '/assets/domain-hero-2.png', alt: 'Global Internet & Domain Delegation Search' },
  ];

  // Rotate hero background images
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveHeroBg((prev) => (prev + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [heroImages.length]);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (!searchTerm.trim()) return;
    
    // Clean domain formatting
    let clean = searchTerm.trim().toLowerCase().replace(/^(https?:\/\/)?(www\.)?/, '');
    if (!clean.includes('.')) {
      clean += selectedTld;
    }
    
    setStatus({
      domain: clean,
      message: 'Ready for delegation check. Proceed to register with our Harare registry team.',
    });
  };

  return (
    <div className="services-page-wrapper relative bg-white dark:bg-black transition-colors duration-300">
      {/* ──────────────────────────────────────────────────────────
          HERO SECTION: FULL WINDOW (min-h-screen)
          - Clear image background
          - Docked content card with breadcrumbs
          ────────────────────────────────────────────────────────── */}
      <section className="relative z-10 w-full min-h-screen flex flex-col justify-end bg-black overflow-hidden">
        <div className="absolute inset-0 pointer-events-none z-0">
          {heroImages.map((img, idx) => (
            <div
              key={img.src}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                activeHeroBg === idx ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover object-center"
                unoptimized
                priority={idx === 0}
              />
            </div>
          ))}
          {/* Subtle dark vignette overlay to ensure pristine contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/40" />
        </div>

        {/* Docked Content Card */}
        <div className="relative z-10 w-full flex justify-end">
          <div className="relative w-full md:w-[62%] lg:w-[56%] min-h-[46vh] lg:min-h-[48vh] bg-white text-slate-900 rounded-none rounded-tl-[48px] sm:rounded-tl-[64px] shadow-2xl p-8 sm:p-12 lg:p-14 flex flex-col justify-center animate-drop-top">
            {/* Floating Breadcrumb Tab */}
            <nav
              aria-label="Breadcrumb"
              className="absolute -top-3.5 left-8 sm:left-14 px-4 py-0.5 bg-white inline-flex items-center gap-2 rounded-t-lg shadow-none"
            >
              <Link
                href="/"
                className="font-raleway text-xs sm:text-sm font-semibold uppercase tracking-[0.22em] text-slate-500 hover:text-red-600 transition-colors"
              >
                HOME
              </Link>
              <span className="text-slate-400 font-raleway text-xs sm:text-sm select-none">/</span>
              <span className="font-raleway text-xs sm:text-sm font-semibold uppercase tracking-[0.22em] text-slate-900">
                Domains
              </span>
            </nav>

            <div className="space-y-4">
              <h1 className="hero-title-drop font-raleway text-2xl sm:text-4xl lg:text-[2.6rem] font-light tracking-[0.03em] text-slate-900 leading-[1.25] sm:leading-[1.3]">
                Domain Name Registration in Zimbabwe
              </h1>

              <p className="hero-desc-zoom font-raleway text-sm sm:text-base text-slate-600 leading-relaxed font-light text-justify">
                Search, claim, and secure your corporate digital identity. Direct delegation for official Zimbabwean extensions (.co.zw, .org.zw, .ac.zw) and international domains with cryptographic DNSSEC security.
              </p>

              <div className="flex items-center gap-2 pt-2 text-xs font-mono text-slate-500">
                <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Direct Harare Registry Delegation &bull; Instant DNSSEC Validation</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────
          MAIN DOMAIN REGISTRY CONTAINER (Expanded full-width margins)
          ────────────────────────────────────────────────────────── */}
      <main className="relative z-10 mx-auto max-w-full px-[30px] py-16 lg:py-24">
        {/* 1. DOMAIN SEARCH SECTION (DISPLAYED FIRST) */}
        <section id="domain-lookup" className="w-full space-y-8">
          <div className="text-center sm:text-left space-y-2">
            <div className="font-mono text-xs tracking-[0.2em] uppercase font-bold text-slate-500 dark:text-slate-400">
              Domain Search
            </div>
            <h2 className="font-raleway text-3xl sm:text-4xl font-light tracking-[0.02em] text-slate-900 dark:text-white">
              Find Your Domain Name
            </h2>
            <p className="font-raleway text-sm text-slate-600 dark:text-slate-400 font-light">
              Enter your desired business or brand name to check availability and register.
            </p>
          </div>

          {/* Big Rounded Search Form - Full Width Container */}
          <form
            onSubmit={handleSearch}
            className="w-full flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3 bg-white dark:bg-[#0c121d] p-2.5 sm:p-3 rounded-3xl sm:rounded-full border border-slate-200 dark:border-zinc-800 shadow-lg shadow-slate-200/40 dark:shadow-none transition-all"
          >
            {/* Input field */}
            <div className="relative flex-1 flex items-center min-w-0">
              <span className="pl-5 sm:pl-7 text-slate-400 font-mono text-sm sm:text-base select-none">
                www.
              </span>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="yourcompanyname"
                className="w-full bg-transparent px-2.5 sm:px-3 py-4 sm:py-5 text-base sm:text-lg font-raleway text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none"
              />
            </div>

            {/* Custom Styled Options Dropdown */}
            <div className="relative shrink-0" ref={dropdownRef}>
              <button
                type="button"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="w-full sm:w-auto flex items-center justify-between gap-3 bg-slate-100 hover:bg-slate-200/80 dark:bg-[#151c2c] dark:hover:bg-[#1a2336] text-slate-900 dark:text-slate-100 text-sm sm:text-base font-mono font-bold py-3.5 sm:py-4.5 px-6 rounded-full border border-slate-200/80 dark:border-zinc-700/60 focus:outline-none focus:ring-2 focus:ring-red-500/20 transition-all cursor-pointer"
                aria-haspopup="listbox"
                aria-expanded={isDropdownOpen}
              >
                <span>{selectedTld}</span>
                <svg
                  className={`w-4 h-4 text-slate-500 dark:text-slate-400 transition-transform duration-200 ${
                    isDropdownOpen ? 'rotate-180 text-red-600' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Custom Dropdown Menu Floating Popup */}
              {isDropdownOpen && (
                <div
                  className="absolute left-0 sm:left-auto sm:right-0 mt-2 w-48 bg-white dark:bg-[#0c121d] rounded-2xl border border-slate-200 dark:border-zinc-800 shadow-xl overflow-hidden z-50 animate-drop-top p-1.5 space-y-1"
                  role="listbox"
                >
                  {tldList.map((item) => {
                    const isSelected = selectedTld === item.tld;
                    return (
                      <button
                        key={item.tld}
                        type="button"
                        onClick={() => {
                          setSelectedTld(item.tld);
                          setIsDropdownOpen(false);
                        }}
                        className={`w-full flex items-center justify-between px-4 py-2.5 rounded-xl text-xs sm:text-sm font-mono transition-all text-left ${
                          isSelected
                            ? 'bg-red-600 text-white font-bold shadow-sm'
                            : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-zinc-800/80 font-medium'
                        }`}
                        role="option"
                        aria-selected={isSelected}
                      >
                        <span>{item.tld}</span>
                        {isSelected && (
                          <span className="text-white text-xs">&#10003;</span>
                        )}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Big Rounded Action Button */}
            <button
              type="submit"
              className="service-interactive-btn service-interactive-btn-primary service-btn-primary px-8 sm:px-10 py-4 sm:py-4.5 text-xs sm:text-sm font-bold uppercase tracking-wider rounded-full transition-all focus:outline-none shrink-0"
            >
              Search Domain
            </button>
          </form>

          {/* Search Feedback / Result */}
          {status && (
            <div className="w-full rounded-2xl border border-slate-200 dark:border-zinc-800 bg-slate-50/50 dark:bg-[#0c121d] p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <span className="font-mono text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400">Queried Domain:</span>
                <h4 className="font-raleway text-lg sm:text-xl font-bold text-slate-900 dark:text-white">{status.domain}</h4>
                <p className="font-raleway text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-0.5">{status.message}</p>
              </div>

              <Link
                href={`/contact/?service=Domain+Registration&domain=${encodeURIComponent(status.domain)}`}
                className="service-interactive-btn service-interactive-btn-primary service-btn-primary px-7 py-3 text-xs font-bold uppercase tracking-wider rounded-full transition-all focus:outline-none shrink-0"
              >
                Register {status.domain}
              </Link>
            </div>
          )}
        </section>

        {/* 2. TLD OFFERINGS SECTION (WITH LIST / GRID VIEW TOGGLE) */}
        <section className="mt-20 w-full space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-2">
            <div className="space-y-1">
              <div className="font-mono text-xs tracking-[0.2em] uppercase font-bold text-slate-500 dark:text-slate-400">
                Extensions &amp; Pricing
              </div>
              <h3 className="font-raleway text-2xl sm:text-3xl font-light text-slate-900 dark:text-white">
                Available Top-Level Domains (TLDs)
              </h3>
            </div>

            {/* List vs Grid View Toggle Switch */}
            <div className="inline-flex items-center p-1 bg-slate-100 dark:bg-[#131926] rounded-full border border-slate-200 dark:border-zinc-800 self-start sm:self-auto">
              <button
                type="button"
                onClick={() => setViewMode('list')}
                className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-mono font-medium transition-all ${
                  viewMode === 'list'
                    ? 'bg-white dark:bg-zinc-800 text-slate-900 dark:text-white shadow-sm'
                    : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                <span>List View</span>
              </button>

              <button
                type="button"
                onClick={() => setViewMode('grid')}
                className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-mono font-medium transition-all ${
                  viewMode === 'grid'
                    ? 'bg-white dark:bg-zinc-800 text-slate-900 dark:text-white shadow-sm'
                    : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
                <span>Grid View</span>
              </button>
            </div>
          </div>

          {/* DEFAULT: LIST VIEW */}
          {viewMode === 'list' ? (
            <div className="w-full bg-white dark:bg-[#0c121d] rounded-2xl border border-slate-200 dark:border-white/[0.07] overflow-hidden divide-y divide-slate-100 dark:divide-white/[0.06] transition-colors">
              {tldList.map((item) => (
                <div
                  key={item.tld}
                  className="p-5 sm:p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-slate-50/60 dark:hover:bg-white/[0.02] transition-colors"
                >
                  <div className="flex items-start md:items-center gap-4 flex-1">
                    <div className="w-24 shrink-0 flex items-center gap-2">
                      <span className="font-raleway text-2xl font-bold text-slate-900 dark:text-white">
                        {item.tld}
                      </span>
                    </div>

                    <div className="space-y-0.5 flex-1">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono font-medium text-slate-500 dark:text-slate-400">
                          {item.type}
                        </span>
                        {item.popular && (
                          <span className="text-[10px] font-mono uppercase tracking-wider bg-slate-900 text-white dark:bg-zinc-800 dark:text-slate-200 px-2 py-0.5 rounded-full font-bold">
                            Popular
                          </span>
                        )}
                      </div>
                      <p className="font-raleway text-xs text-slate-600 dark:text-slate-400 font-light max-w-2xl">
                        {item.desc}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between md:justify-end gap-6 pt-2 md:pt-0 border-t md:border-t-0 border-slate-100 dark:border-white/[0.06] shrink-0">
                    <div className="text-left md:text-right">
                      <div className="flex items-baseline gap-0.5 md:justify-end">
                        <span className="font-raleway text-2xl font-bold text-slate-900 dark:text-white">{item.price}</span>
                        <span className="text-xs font-mono text-slate-500">{item.period}</span>
                      </div>
                      <span className="text-[10px] font-mono text-slate-400 block">{item.renewal}</span>
                    </div>

                    <Link
                      href={`/contact/?service=Domain+Registration&tld=${encodeURIComponent(item.tld)}`}
                      className="service-interactive-btn service-interactive-btn-secondary service-btn-secondary px-6 py-2.5 text-xs font-bold uppercase tracking-wider rounded-full border transition-all focus:outline-none shrink-0"
                    >
                      Select
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* ALTERNATE: GRID VIEW */
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
              {tldList.map((item) => (
                <div
                  key={item.tld}
                  className="relative rounded-2xl bg-white dark:bg-[#0c121d] border border-slate-200 dark:border-zinc-800/80 p-6 flex flex-col justify-between shadow-none transition-colors"
                >
                  <div>
                    <div className="flex justify-between items-center mb-3">
                      <span className="font-raleway text-2xl font-bold text-slate-900 dark:text-white">
                        {item.tld}
                      </span>
                      {item.popular && (
                        <span className="text-[10px] font-mono uppercase tracking-wider bg-slate-900 text-white dark:bg-zinc-800 dark:text-slate-200 px-2.5 py-0.5 rounded-full font-bold">
                          Popular
                        </span>
                      )}
                    </div>

                    <div className="text-xs font-mono font-medium text-slate-500 dark:text-slate-400 mb-2">
                      {item.type}
                    </div>

                    <p className="font-raleway text-xs text-slate-600 dark:text-slate-400 font-light leading-relaxed mb-6">
                      {item.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 dark:border-zinc-850 flex items-center justify-between">
                    <div>
                      <div className="flex items-baseline gap-0.5">
                        <span className="font-raleway text-2xl font-bold text-slate-900 dark:text-white">{item.price}</span>
                        <span className="text-xs font-mono text-slate-500">{item.period}</span>
                      </div>
                      <span className="text-[10px] font-mono text-slate-400 block">{item.renewal}</span>
                    </div>

                    <Link
                      href={`/contact/?service=Domain+Registration&tld=${encodeURIComponent(item.tld)}`}
                      className="service-interactive-btn service-interactive-btn-secondary service-btn-secondary px-5 py-2 text-xs font-bold uppercase tracking-wider rounded-full border transition-all focus:outline-none"
                    >
                      Select
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

      </main>
    </div>
  );
}
