'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function SchoolManagementShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const itemRefs = useRef([]);

  const views = [
    {
      id: 'student-profile',
      num: '01',
      navLabel: 'Student Records & Enrollment',
      badge: 'UUID Identity Architecture',
      title: 'Individual Academic Records & Verified Student Dossier',
      desc: 'Complete student dossier linking verified National IDs, boarding room allocations (e.g. Garahwa Room Block A), parent/guardian synchronization, and real-time enrollment status across Zimbabwe. Built with tamper-proof UUID entity referencing.',
      image: '/assets/chibuwe-student-profile.png',
      imageAlt: 'ZITRAC Education Plus - Verified Student Profile Interface',
      codeSnippet: `// student.profile.model.ts
export const StudentDossier = defineSchema({
  uuid: primaryKey(UUID_v4),
  nationalId: encryptedString(),
  enrollmentStatus: 'ACTIVE',
  boarding: { block: 'Garahwa', room: 'Block-A' },
  curriculum: 'Upper 6th Sciences',
  guardianContact: '+263718001031',
  auditTrail: immutableLedger()
});`,
      telemetry: {
        school: 'Education Plus Core',
        module: 'Student Identity Hub',
        status: 'Active Dossier Verified',
      },
      bullets: [
        'Tamper-proof UUID architecture across 1M+ database entries',
        'Direct parent/guardian contact indexing & real-time attendance sync',
        'Upper 6th Sciences stream routing & Cambridge/ZIMSEC separation',
        'Sub-second query response under 2,000+ concurrent active portal users',
      ],
      buttonLabel: 'Explore Student Core',
    },
    {
      id: 'timetable',
      num: '02',
      navLabel: 'Conflict-Free Timetable Builder',
      badge: 'Celery + Redis Engine',
      title: 'Real-Time Conflict-Free Institutional Timetable Engine',
      desc: 'Engineered specifically for Zimbabwean high school curricula. Powered by Redis in-memory caching and background Celery task queues to calculate Form 1 to 6 periods, specialist science labs, and teacher period distribution with zero scheduling collisions.',
      image: '/assets/chibuwe-timetable-builder.png',
      imageAlt: 'ZITRAC Education Plus - Conflict-Free Timetable Builder',
      codeSnippet: `// scheduler.celery.worker.py
@celery.task(bind=True, max_retries=3)
def optimize_school_timetable(self, school_id):
    redis_lock = redis.acquire_lock(f"sched:{school_id}")
    matrix = LabRoomMatrix.resolve_clashes(
        tier="A-Level 6th Form",
        subjects=["PMAT-601", "CHEM-601", "AGRI-601"],
        collision_policy="ZERO_TOLERANCE"
    )
    return matrix.dispatch_live()`,
      telemetry: {
        school: 'Education Plus Core',
        module: 'Celery Task Queue Active',
        status: '8 Lessons Auto-Scheduled',
      },
      bullets: [
        'ZIMSEC & Cambridge curriculum tier separation (Forms 1–4 vs. Forms 5–6)',
        'Automated collision detection for specialist science labs & room matrices',
        'Background Celery task distribution ensuring zero UI freeze during generation',
        'One-click PDF generation, master printable grids, and teacher schedule sync',
      ],
      buttonLabel: 'Inspect Timetable Engine',
    },
    {
      id: 'settings',
      num: '03',
      navLabel: 'School Governance & Security',
      badge: 'Zero-Trust SOC Watchdogs',
      title: 'Institutional Configuration & Emergency Disaster Controls',
      desc: 'Centralized administrative control center empowering school heads, administrators, and bursars with granular role-based identity governance (RBAC), one-click emergency non-admin account lockdown, automated fee structure defaults, and permanent activity audit trails.',
      image: '/assets/chibuwe-school-settings.png',
      imageAlt: 'ZITRAC Education Plus - School Settings & Configuration Dashboard',
      codeSnippet: `// governance.security.config.ts
export const SecurityPerimeter = {
  activeAdminAccounts: 13,
  emergencyLockdown: async () => {
    await redis.set("institution:lockdown", "TRUE");
    await sessionManager.terminateNonAdmins();
    auditLogger.recordEvent("MASS_ACCOUNT_LOCK");
  },
  auditLedger: "IMMUTABLE_LOGS_ENABLED",
  feeDefaultReconciliation: "AUTO_BANKING_GATEWAY"
};`,
      telemetry: {
        school: 'Education Plus Core',
        module: 'Admin Control Center',
        status: '13 Admin Accounts Active',
      },
      bullets: [
        'One-click institutional lockdown & immediate non-admin session termination',
        'Granular role-based access control across 150+ staff (Head, Bursars, 60+ Teachers)',
        'Immutable activity history audit trails & diagnostic error inspection',
        'Automated fee structure updates & institutional banking reconciliation',
      ],
      buttonLabel: 'Review Security Controls',
    }
  ];

  // Precise viewport-center scroll detection matching ArchitectureMatrix
  useEffect(() => {
    const handleScroll = () => {
      const viewportCenter = window.innerHeight * 0.45;
      let closestIdx = 0;
      let minDistance = Infinity;

      for (let i = 0; i < views.length; i++) {
        const el = itemRefs.current[i];
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        const itemCenter = rect.top + rect.height * 0.4;
        const distance = Math.abs(itemCenter - viewportCenter);
        if (distance < minDistance) {
          minDistance = distance;
          closestIdx = i;
        }
      }

      setActiveIndex(closestIdx);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [views.length]);

  const scrollToItem = (idx) => {
    setActiveIndex(idx);
    const target = itemRefs.current[idx];
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const activeItem = views[activeIndex];

  return (
    <section className="school-showcase-section relative z-10 mx-auto max-w-full px-[30px] py-16 lg:py-24 border-t border-white/5">
      <div className="relative z-10 max-w-[1400px] mx-auto">
        
        {/* Section Header */}
        <div className="animate-on-scroll mb-12 lg:mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse"></span>
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-red-500 font-semibold">
                Enterprise Product Showcase
              </span>
            </div>
            <h2 className="font-raleway text-2xl sm:text-4xl lg:text-5xl font-light tracking-[0.03em] text-white leading-tight">
              Education Plus &mdash; School Management System
            </h2>
            <p className="font-raleway text-sm sm:text-base text-slate-300 font-light mt-3 leading-relaxed max-w-2xl">
              Authentic custom software engineered and actively deployed by ZITRAC Technologies for institutional education hubs across Zimbabwe. Designed to operate smoothly with <strong className="text-white font-medium">2,000+ students</strong>, <strong className="text-white font-medium">150+ staff (including 60+ teachers)</strong>, and over <strong className="text-white font-medium">1M+ database records</strong>.
            </p>
          </div>

          <div className="shrink-0 flex items-center gap-3">
            <Link
              href="/contact/"
              className="school-cta-primary inline-flex items-center justify-center rounded-full bg-red-600 px-7 py-3 text-xs font-mono font-semibold uppercase tracking-[0.2em] text-white hover:bg-red-500 transition-all duration-300 shadow-none border-0"
            >
              <span>Request System Demo</span>
            </Link>
            <Link
              href="/services/software-development/"
              className="school-cta-secondary inline-flex items-center justify-center rounded-full border border-white/20 bg-transparent px-7 py-3 text-xs font-mono font-semibold uppercase tracking-[0.2em] text-white hover:border-red-500 hover:text-red-500 transition-all duration-300 shadow-none"
            >
              <span>Software Engineering Core</span>
            </Link>
          </div>
        </div>

        {/* 3-Column Scrollytelling Layout matching Architecture Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start relative z-10">
          
          {/* Left Column: Sticky Nav (2 cols on lg screen) */}
          <div className="matrix-nav-col lg:col-span-2 lg:sticky lg:top-24 self-start space-y-4">
            <div className="space-y-1.5">
              {views.map((item, idx) => {
                const isActive = idx === activeIndex;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => scrollToItem(idx)}
                    className={`matrix-nav-btn group w-full text-left py-2 px-0 transition-all duration-200 flex items-center gap-2.5 bg-transparent shadow-none border-none outline-none ${
                      isActive
                        ? 'matrix-nav-btn-active text-red-600 font-semibold'
                        : 'text-slate-400 hover:text-white hover:translate-x-0.5'
                    }`}
                  >
                    <span
                      className={`matrix-nav-num font-mono text-[11px] font-semibold transition-colors ${
                        isActive
                          ? 'text-red-600 font-bold'
                          : 'text-slate-500 group-hover:text-slate-300'
                      }`}
                    >
                      {item.num}
                    </span>
                    <span className="text-xs tracking-wide font-light truncate group-hover:underline">
                      {item.navLabel}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Decorative Dot Matrix Rectangle matching ArchitectureMatrix */}
            <div className="matrix-dot-grid hidden lg:block pt-6 pb-2 select-none pointer-events-none opacity-40">
              <div className="grid grid-cols-10 gap-2.5 w-full max-w-[170px]">
                {Array.from({ length: 180 }).map((_, i) => (
                  <div key={i} className="w-1 h-1 rounded-full bg-slate-400"></div>
                ))}
              </div>
            </div>

            {/* Quick Authority Note */}
            <div className="hidden lg:block pt-4 border-t border-white/10 text-[10px] font-mono text-slate-400">
              <div className="text-emerald-400 font-medium mb-1">&bull; Production Live</div>
              <div>Next.js + Flask + Redis</div>
            </div>
          </div>

          {/* Center Column: Continuously Scrolling Content Flow (4 cols on lg screen) */}
          <div className="matrix-content-col lg:col-span-4 flex flex-col">
            {views.map((item, idx) => (
              <div
                key={item.id}
                ref={(el) => (itemRefs.current[idx] = el)}
                className="min-h-[75vh] lg:min-h-[85vh] flex flex-col justify-center py-12 lg:py-20"
              >
                {/* Category Tag Pill */}
                <div className="mb-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full border border-white/15 bg-white/5 text-[10px] font-mono text-slate-300 uppercase tracking-wider">
                    {item.badge}
                  </span>
                </div>

                {/* Main Heading */}
                <h3 className="font-raleway text-2xl sm:text-3xl font-light text-white tracking-tight leading-snug mb-5">
                  {item.title}
                </h3>

                {/* Description Body */}
                <p className="font-raleway text-sm text-slate-300 leading-relaxed font-light mb-6">
                  {item.desc}
                </p>

                {/* Key Technical Bullets */}
                <ul className="space-y-3 mb-8">
                  {item.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-3 text-xs sm:text-sm text-white">
                      <span className="text-red-500 font-bold leading-none mt-1 text-base">&bull;</span>
                      <span className="font-raleway font-normal tracking-wide text-slate-100">{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Pill Button - Transparent border-only matching ArchitectureMatrix */}
                <div>
                  <Link
                    href="/contact/"
                    className="matrix-cta-btn inline-flex items-center justify-center rounded-full border border-white/60 bg-transparent hover:border-red-500 hover:text-red-500 px-6 py-2.5 font-mono text-xs font-semibold tracking-[0.2em] uppercase text-white transition-all duration-300 group shadow-none"
                  >
                    <span>{item.buttonLabel}</span>
                  </Link>
                </div>

                {/* Mobile-Only Visual Card */}
                <div className="mt-8 block lg:hidden">
                  <div className="relative w-full h-64 rounded-none overflow-hidden mb-4 border border-white/10">
                    <Image
                      src={item.image}
                      alt={item.imageAlt}
                      fill
                      className="object-contain"
                      unoptimized
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Sticky Studio Image Showcase (6 cols on lg screen) */}
          <div className="matrix-image-col hidden lg:block lg:col-span-6 lg:sticky lg:top-20 self-start space-y-4">
            
            {/* Main Studio Frame Container */}
            <div className="relative min-h-[460px] sm:min-h-[500px]">
              {/* Background Studio Browser Card Shell */}
              <div className="matrix-studio-frame absolute inset-0 w-full h-full rounded-none border-0 bg-gradient-to-br from-[#121217] via-[#09090b] to-[#040405] shadow-none p-6 sm:p-8 overflow-hidden z-10 flex flex-col justify-between">
                {/* Studio Browser Header */}
                <div className="matrix-studio-header flex items-center justify-between pb-4 border-0 text-xs font-mono text-slate-400">
                  <div className="flex items-center gap-2.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span className="tracking-wider uppercase text-[11px]">
                      Education Plus Platform / <strong className="matrix-studio-title text-white font-medium transition-all duration-300">{activeItem.navLabel}</strong>
                    </span>
                  </div>
                  <div className="flex items-center gap-2 opacity-70">
                    <span className="w-2 h-2 rounded-full bg-slate-600"></span>
                    <span className="w-2 h-2 rounded-full bg-slate-600"></span>
                    <span className="w-2 h-2 rounded-full bg-slate-600"></span>
                  </div>
                </div>

                {/* Subtle Ambient Red Core Glow */}
                <div className="absolute -bottom-16 -right-16 w-80 h-80 rounded-full bg-red-600/20 blur-[100px] pointer-events-none"></div>
              </div>

              {/* Overlapping Main High-Res Image Cards - Fitted cleanly so the entire dashboard is visible */}
              {views.map((item, idx) => (
                <div
                  key={`img-${item.id}`}
                  className="matrix-main-image-card absolute top-12 right-2 bottom-2 left-2 rounded-none overflow-hidden border-0 shadow-none z-20 group transition-all duration-500 ease-out bg-transparent p-2 sm:p-3"
                  style={{
                    opacity: idx === activeIndex ? 1 : 0,
                    transform: idx === activeIndex ? 'scale(1)' : 'scale(0.98)',
                    pointerEvents: idx === activeIndex ? 'auto' : 'none',
                  }}
                >
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    fill
                    className="object-contain object-top filter contrast-[1.02] brightness-100 transition-transform duration-700 hover:scale-[1.02]"
                    unoptimized
                  />
                </div>
              ))}
            </div>

            {/* 3 Stats Clean Display Below the Image Frame (No borders, responsive contrast in both light & dark mode) */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-black/10 dark:border-white/10">
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span>
                  <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400 font-semibold">
                    Institutional Demos
                  </span>
                </div>
                <div className="text-3xl sm:text-4xl font-light font-raleway text-[#0a0a0f] dark:text-white tracking-tighter mt-1">
                  20+
                </div>
                <div className="text-[10px] sm:text-[11px] font-mono text-slate-600 dark:text-slate-400 uppercase leading-relaxed font-medium">
                  Requested Demos
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400 font-semibold">
                    Institutional Staff
                  </span>
                </div>
                <div className="text-3xl sm:text-4xl font-light font-raleway text-emerald-600 dark:text-emerald-400 tracking-tighter mt-1">
                  150+
                </div>
                <div className="text-[10px] sm:text-[11px] font-mono text-slate-600 dark:text-slate-400 uppercase leading-relaxed font-medium">
                  Staff &bull; 60+ Teachers
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                  <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400 font-semibold">
                    Data Scale
                  </span>
                </div>
                <div className="text-3xl sm:text-4xl font-light font-raleway text-[#0a0a0f] dark:text-white tracking-tighter mt-1">
                  1M+
                </div>
                <div className="text-[10px] sm:text-[11px] font-mono text-slate-600 dark:text-slate-400 uppercase leading-relaxed font-medium">
                  Database Records
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
