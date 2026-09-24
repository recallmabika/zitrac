import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Engineering Portfolio & Enterprise Deployments | ZITRAC',
  description: 'Explore verified enterprise technology deployments, bespoke software case studies, and mission-critical cloud migrations engineered by ZITRAC Technologies across Zimbabwe.',
  openGraph: {
    title: 'Our Work & Enterprise Case Studies | ZITRAC Technologies',
    description: 'Explore enterprise technology deployments and software systems engineered by ZITRAC in Zimbabwe.',
    url: 'https://zitrac.co.zw/work/',
    images: [{ url: 'https://media.zitrac.co.zw/og-general-1200x630.jpg', width: 1200, height: 630 }],
  },
};

const caseStudies = [
  {
    slug: 'education-plus-sms',
    number: '01',
    badge: 'EdTech & Enterprise School Management',
    client: 'Chibuwe High School & Regional Educational Institutions',
    title: 'Education Plus — Advanced School Management System (SMS)',
    tagline: 'Comprehensive educational ERP managing 2,000+ students, automated timetable scheduling, and grade reporting.',
    description: 'Engineered a mission-critical institutional platform linking verified student dossiers, boarding room allocations, guardian contacts, and financial ledger accounting. Features automated conflict-free timetable generation matrices and real-time parent SMS notifications.',
    metrics: [
      {
        stat: '2,000+',
        desc: 'ACTIVE ENROLLED STUDENTS MANAGED UNDER TAMPER-PROOF UUID DOSSIERS.',
      },
      {
        stat: '100%',
        desc: 'CONFLICT-FREE AUTOMATED TIMETABLE & BURSARY RECONCILIATION ACCURACY.',
      },
    ],
    features: [
      'Encrypted Student Dossiers & National ID Record Linking',
      'Multi-Variant Algorithmic Timetable Generator & Conflict Resolver',
      'Bursary Financial Reconciliations & Real-Time Parent SMS Gateways',
    ],
    image: '/assets/chibuwe-student-profile.png',
    imageAlt: 'ZITRAC Education Plus - Verified Student Profile Interface',
    ctaText: 'Explore Education Plus',
  },
  {
    slug: 'artis-cybersecops',
    number: '02',
    badge: 'Cybersecurity & Digital Forensics',
    client: 'Advanced Real-Time Incident Security (ARTIS)',
    title: 'ARTIS CyberSecOps & Tactical Perimeter Forensics Bridge',
    tagline: 'Host OS telemetry, tactical geolocation mapping, and digital forensics device bridging.',
    description: 'Developed an elite cybersecurity and digital forensics intelligence suite providing real-time WGS84 tactical perimeter radar for Harare facilities, SQLite shadow-copy browser history audits, Windows Event 307 print spool forensics, and USB hardware bus device bridging.',
    metrics: [
      {
        stat: '24/7',
        desc: 'TACTICAL GEOLOCATION RADAR MONITORING ACROSS HARARE FACILITY NODES.',
      },
      {
        stat: '100%',
        desc: 'GENUINE OS TELEMETRY, FORENSICS BRIDGING & SANDBOX ISOLATION.',
      },
    ],
    features: [
      'Harare Branch Geocoded Tactical Radar & WGS84 Physical Perimeter Mapping',
      'Host OS Digital Forensics Bridge for Hardware USB & Wi-Fi Gateway Devices',
      'Automated Sandbox Process Anomaly Detection & Threat Containment Daemons',
    ],
    image: '/assets/artis-soc-overview.png',
    imageAlt: 'ARTIS CyberSecOps - Operations Overview and Digital Forensics Bridge',
    ctaText: 'Explore ARTIS Security',
  },
  {
    slug: 'chipinge-safari-zimparks',
    number: '03',
    badge: 'Ecotourism & National Conservation Portal',
    client: 'Chipinge Safari Area (ZimParks)',
    title: 'Chipinge Safari Area — Ecotourism & Wildlife Conservation Portal',
    tagline: 'High-availability public conservation portal with interactive safari bookings and park telemetry.',
    description: 'Designed and deployed a responsive, high-performance web platform for ZimParks Chipinge Safari Area. Features digital visitor permits, wildlife conservation telemetry, interactive safari activity guides, and direct payment gateway processing for international and local tourists.',
    metrics: [
      {
        stat: '<0.8s',
        desc: 'GLOBAL PAGE LOAD SPEED OPTIMIZED FOR INTERNATIONAL ECOTOURISTS.',
      },
      {
        stat: '100%',
        desc: 'MOBILE RESPONSIVE ACCESSIBILITY ACROSS FIELD TELEMETRY MAPS.',
      },
    ],
    features: [
      'Interactive Ecotourism Experience Booking & Visitor Permit Engine',
      'Wildlife Sanctuary Zone Mapping & Environmental Conservation Telemetry',
      'Multi-Currency Payment Gateway Integration (USD & Local Currency)',
    ],
    image: '/assets/chipinge-safari.png',
    imageAlt: 'ZITRAC ZimParks Chipinge Safari Area Conservation & Booking Platform',
    ctaText: 'Explore Safari Portal',
  },
  {
    slug: 'fintech-reconciliation',
    number: '04',
    badge: 'Custom Software & AI Automation',
    client: 'Southern African Financial Services Group',
    title: 'Fintech Automated Multi-Currency Reconciliation Engine',
    tagline: 'High-throughput currency valuation and automated ledger reconciliation engineered for Southern African finance.',
    description: 'Architected an automated transaction matching daemon processing high-volume daily payments with automatic currency valuation, PBKDF2 cryptography, and real-time fraud mitigation watchdogs.',
    metrics: [
      {
        stat: '99.99%',
        desc: 'LEDGER RECONCILIATION ACCURACY ACROSS MULTI-CURRENCY TRANSACTIONS.',
      },
      {
        stat: '<1.2s',
        desc: 'BATCH EXECUTION LATENCY WITH REAL-TIME FRAUD DETECTION WATCHDOGS.',
      },
    ],
    features: [
      'Python Flask & FastAPI High-Concurrency Microservices',
      'MariaDB Distributed Relational Database Architecture',
      'Zero-Trust IAM & PBKDF2 Cryptographic Validation',
    ],
    image: '/assets/software-2.png',
    imageAlt: 'ZITRAC Fintech Multi-Currency Reconciliation Architecture',
    ctaText: 'Explore Fintech Solutions',
  },
];

export default function WorkPage() {
  return (
    <div className="services-page-wrapper relative bg-white dark:bg-black transition-colors duration-300">
      {/* ──────────────────────────────────────────────────────────
          HERO SECTION: FULL WINDOW (min-h-screen)
          - Single completely clear image with people (NO blur, NO opacity reduction)
          - Docked white content card:
            * Touches right and bottom margins of the hero
            * Height is half the viewport space from bottom of navbar going down
            * Extends slightly past center towards the left
            * Top-left corner is rounded
            * Floating Breadcrumb Tab on top border: HOME / Our Work
          ────────────────────────────────────────────────────────── */}
      <section className="relative z-10 w-full min-h-screen flex flex-col justify-end bg-black overflow-hidden">
        {/* Completely clear image: NO blur, full clarity */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <Image
            src="/assets/consulting-1.png"
            alt="ZITRAC Engineering Deployments & Client Partnerships"
            fill
            className="object-cover object-center"
            unoptimized
            priority
          />
        </div>

        {/* Docked Content Card */}
        <div className="relative z-10 w-full flex justify-end">
          <div className="relative w-full md:w-[62%] lg:w-[56%] min-h-[46vh] lg:min-h-[48vh] bg-white text-slate-900 rounded-none rounded-tl-[48px] sm:rounded-tl-[64px] shadow-2xl p-8 sm:p-12 lg:p-14 flex flex-col justify-center animate-drop-top">
            {/* Floating Breadcrumb Label sitting on top border - BORDERLESS & SHADOWLESS */}
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
                Our Work
              </span>
            </nav>

            <div className="space-y-4">
              <h1 className="hero-title-drop font-raleway text-2xl sm:text-4xl lg:text-[2.6rem] font-light tracking-[0.03em] text-slate-900 leading-[1.25] sm:leading-[1.3]">
                Enterprise Systems Built to Stay Working
              </h1>

              <p className="hero-desc-zoom font-raleway text-sm sm:text-base text-slate-600 leading-relaxed font-light text-justify">
                Explore verified deployment case studies where ZITRAC Technologies converted complex operational bottlenecks into resilient, automated technological infrastructure across Zimbabwe.
              </p>

              <div className="flex items-center gap-2 pt-2 text-xs font-mono text-slate-500">
                <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Production Proven Deployments &bull; Zero Downtime Architectures</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────
          MAIN CASE STUDIES: ALTERNATING FLAT ROWS
          - Service 1: Text LEFT, Image RIGHT
          - Service 2: Image LEFT, Text RIGHT
          - Flat design, borderless images
          - Floating category title on top margin of image
          - Softened divider lines on metrics in dark mode
          - Interactive rounded buttons with loading wipe
          ────────────────────────────────────────────────────────── */}
      <main className="relative z-10 mx-auto max-w-full px-[30px] py-20 lg:py-28">
        <div className="space-y-24 lg:space-y-32">
          {caseStudies.map((cs, index) => {
            // Even index (0, 2): Text on LEFT, Image on RIGHT
            // Odd index (1, 3): Image on LEFT, Text on RIGHT
            const isImageLeft = index % 2 === 1;

            return (
              <section
                key={cs.slug}
                id={cs.slug}
                className="service-row group border-b service-row-divider pb-20 lg:pb-28 last:border-b-0 last:pb-0"
              >
                <div
                  className={`flex flex-col gap-10 lg:gap-16 items-center ${
                    isImageLeft ? 'lg:flex-row-reverse' : 'lg:flex-row'
                  }`}
                >
                  {/* TEXT EXPLANATION COLUMN (Smooth slow-motion drop from top) */}
                  <div className="w-full lg:w-1/2 space-y-6 animate-drop-top">
                    {/* Verified Enterprise Client Attribution */}
                    <div className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-red-600 dark:text-red-400 font-semibold">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-600 dark:bg-red-400 animate-pulse" />
                      <span>{cs.client}</span>
                    </div>

                    {/* Headline - Raleway consistent with theme */}
                    <h2 className="service-title font-raleway text-2xl sm:text-3xl lg:text-4xl font-light tracking-[0.02em] leading-tight text-left">
                      {cs.title}
                    </h2>

                    <p className="service-tagline font-raleway text-base font-normal leading-relaxed text-left">
                      {cs.tagline}
                    </p>

                    <p className="service-desc font-raleway text-sm sm:text-base font-light leading-relaxed text-justify">
                      {cs.description}
                    </p>

                    {/* Features List */}
                    <div className="space-y-2.5 pt-1">
                      {cs.features.map((feat, fIdx) => (
                        <div key={fIdx} className="service-feature-item flex items-center gap-3 text-xs sm:text-sm font-mono">
                          <span className="font-bold text-slate-400 dark:text-slate-500">&bull;</span>
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>

                    {/* Metrics Banner - Softened borders in dark mode & high-contrast visible text */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3">
                      {cs.metrics.map((m, mIdx) => (
                        <div
                          key={mIdx}
                          className="service-metric-card flex items-center gap-4 border-l pl-4 py-2"
                        >
                          {/* Big Stat */}
                          <div className="service-metric-stat font-raleway text-3xl sm:text-4xl font-light tracking-tighter">
                            {m.stat}
                          </div>
                          {/* Description */}
                          <div className="max-w-[210px]">
                            <p className="service-metric-desc text-[10px] md:text-[11px] font-mono uppercase leading-relaxed text-justify">
                              {m.desc}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Actions: Rounded buttons, Loading style hover/focus wipe */}
                    <div className="pt-4 flex flex-wrap items-center gap-4">
                      <Link
                        href="/contact/"
                        className="service-interactive-btn service-interactive-btn-primary service-btn-primary inline-flex items-center justify-center px-8 py-4 text-xs font-bold uppercase tracking-wider rounded-full transition-all focus:outline-none"
                      >
                        {cs.ctaText}
                      </Link>

                      <Link
                        href="/contact/"
                        className="service-interactive-btn service-interactive-btn-secondary service-btn-secondary inline-flex items-center justify-center px-8 py-4 text-xs font-bold uppercase tracking-wider rounded-full border transition-all focus:outline-none"
                      >
                        Request Case Study Brief
                      </Link>
                    </div>
                  </div>

                  {/* IMAGE COLUMN (Smooth slow-motion slide from side, NOT rounded, NO shadow, BORDERLESS with top floating title) */}
                  <div
                    className={`w-full lg:w-1/2 pt-5 ${
                      isImageLeft ? 'animate-slide-left' : 'animate-slide-right'
                    }`}
                  >
                    <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] lg:aspect-[4/3]">
                      {/* Floating Category Title on top of the image's margin like hero div */}
                      <div className="absolute -top-3.5 left-6 sm:left-10 px-4 py-0.5 bg-white dark:bg-black inline-flex items-center rounded-t-lg z-20 shadow-none">
                        <span className="service-tab-title font-raleway text-xs sm:text-sm font-semibold uppercase tracking-[0.22em]">
                          {cs.number} / {cs.badge}
                        </span>
                      </div>

                      {/* Borderless Image Container */}
                      <div className="relative w-full h-full overflow-hidden bg-slate-100 dark:bg-zinc-900 border-0 border-none rounded-none shadow-none">
                        <Image
                          src={cs.image}
                          alt={cs.imageAlt}
                          fill
                          className="object-cover rounded-none shadow-none transition-transform duration-700 ease-out group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, 50vw"
                          unoptimized
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            );
          })}
        </div>

        {/* ──────────────────────────────────────────────────────────
            BOTTOM CONSULTATION CALLOUT
            - Rounded top-right and bottom-left corners
            - Floating label on top border WITHOUT border, rounded top corners
            - Call has its own div with big flush icon, HOVER BG COLOR
            - Email has its own div with big flush icon, HOVER BG COLOR
            - Longer width, no borders on contact divs
            - Button on the right
            ────────────────────────────────────────────────────────── */}
        <section className="relative mt-24 bg-[#0c121d] dark:bg-[#070b12] text-white p-10 sm:p-16 lg:p-20 rounded-none rounded-tr-[56px] sm:rounded-tr-[72px] rounded-bl-[56px] sm:rounded-bl-[72px] shadow-none animate-drop-top">
          {/* Floating Label sitting on top border - BORDERLESS with rounded top two corners */}
          <div className="absolute -top-4 left-8 sm:left-14 px-5 py-1 bg-[#0c121d] dark:bg-[#070b12] inline-flex items-center rounded-t-xl shadow-none">
            <span className="font-raleway text-xs sm:text-sm font-semibold uppercase tracking-[0.22em] text-slate-300">
              Enterprise Deployment Inquiries
            </span>
          </div>

          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12 lg:gap-16 pt-3">
            {/* Left Column: Heading and Justified Description */}
            <div className="flex-1 space-y-6 max-w-2xl text-left">
              <h2 className="font-raleway text-2xl sm:text-4xl lg:text-[2.75rem] font-light tracking-[0.04em] text-white leading-[1.3] sm:leading-[1.35]">
                Have an Enterprise System Requirement?
              </h2>

              <p className="font-raleway text-sm sm:text-base lg:text-lg text-slate-300 leading-[1.8] sm:leading-[1.9] tracking-wide font-light text-justify">
                Our engineering team directly assesses infrastructure requirements and delivers actionable technical roadmaps. Contact us today to discuss your timeline and technical scope.
              </p>
            </div>

            {/* Right Column: Contact details (each in their own longer div, borderless, big flush icons, hover bg color) on top of Action Button */}
            <div className="w-full lg:w-auto shrink-0 flex flex-col items-start lg:items-end gap-5">
              {/* Call: Own Div, Longer Width, No Border, Big Flush Icon, Hover bg-color */}
              <div className="contact-item-card w-full sm:w-[380px] bg-[#141d2e] dark:bg-[#0f1726] rounded-xl overflow-hidden flex items-stretch shadow-sm cursor-pointer">
                {/* Big Flush Phone Icon Container */}
                <div className="w-14 sm:w-16 bg-red-600 flex items-center justify-center shrink-0">
                  <svg
                    className="w-7 h-7 sm:w-8 sm:h-8 text-white fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.24 1.01l-2.21 2.2z" />
                  </svg>
                </div>
                <div className="px-5 py-3.5 flex flex-col justify-center flex-1">
                  <span className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold font-mono">Telephone Hotline</span>
                  <a
                    href="tel:+263718001031"
                    className="text-white hover:text-red-400 font-bold text-sm sm:text-base font-raleway transition-colors"
                  >
                    +263 71 800 1031
                  </a>
                </div>
              </div>

              {/* Email: Own Div, Longer Width, No Border, Big Flush Icon, Hover bg-color */}
              <div className="contact-item-card w-full sm:w-[380px] bg-[#141d2e] dark:bg-[#0f1726] rounded-xl overflow-hidden flex items-stretch shadow-sm cursor-pointer">
                {/* Big Flush Mail Icon Container */}
                <div className="w-14 sm:w-16 bg-slate-800 dark:bg-slate-700 flex items-center justify-center shrink-0">
                  <svg
                    className="w-7 h-7 sm:w-8 sm:h-8 text-white fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                </div>
                <div className="px-5 py-3.5 flex flex-col justify-center flex-1">
                  <span className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold font-mono">Direct Technical Email</span>
                  <a
                    href="mailto:info@zitrac.co.zw"
                    className="text-slate-200 hover:text-white font-semibold text-xs sm:text-sm font-raleway transition-colors"
                  >
                    info@zitrac.co.zw
                  </a>
                </div>
              </div>

              {/* Action Button on the right with loading-style hover/focus wipe */}
              <div className="w-full sm:w-[380px]">
                <Link
                  href="/contact/"
                  className="service-interactive-btn service-interactive-btn-cta w-full inline-flex items-center justify-center py-5 sm:py-5 text-sm sm:text-base font-bold uppercase tracking-wider rounded-full bg-red-600 text-white hover:scale-105 active:scale-95 transition-all focus:outline-none shadow-none text-center"
                >
                  Initiate Architectural Brief
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
