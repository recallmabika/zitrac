import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Enterprise IT Services & Engineering Solutions | ZITRAC',
  description: 'Explore the full spectrum of IT consulting, web hosting, custom software development, web engineering, and cybersecurity solutions offered by ZITRAC in Zimbabwe.',
  openGraph: {
    title: 'Services Directory | ZITRAC Technologies Zimbabwe',
    description: 'Comprehensive IT services directory including software development, cybersecurity, and hosting.',
    url: 'https://zitrac.co.zw/services/',
    images: [{ url: 'https://media.zitrac.co.zw/og-services-1200x630.jpg', width: 1200, height: 630 }],
  },
};

const services = [
  {
    slug: 'it-consulting',
    number: '01',
    badge: 'Enterprise Advisory',
    title: 'IT Consulting & Infrastructure Advisory',
    tagline: 'Strategic architecture, hardware deployment, and technical support for businesses across Zimbabwe.',
    description: 'We translate complex corporate IT requirements into resilient infrastructure. From robust multi-ISP network failovers engineered for Zimbabwean telecom realities to automated disaster recovery runbooks, our consulting guarantees enterprise continuity.',
    metrics: [
      {
        stat: '24/7',
        desc: 'ENTERPRISE SLA UPTIME & CRITICAL TELECOM FAILOVER SUPPORT.',
      },
      {
        stat: '100%',
        desc: 'ZERO DOWNTIME INFRASTRUCTURE REPLICATION & RECOVERY PROTOCOL.',
      },
    ],
    features: [
      'Corporate Network & VPN Architecture',
      'Automated Disaster Recovery & Replication',
      'Hardware Sourcing & Server Room Setup',
    ],
    image: '/assets/it-support-dialing.png',
    imageAlt: 'ZITRAC IT Support and Corporate Telecom Infrastructure Dialing',
    ctaText: 'Explore IT Consulting',
  },
  {
    slug: 'web-hosting-domain-registration',
    number: '02',
    badge: 'Cloud Hosting & Domains',
    title: 'Web Hosting & .co.zw Domain Registration',
    tagline: 'High-speed NVMe storage tiers, local domain registrations, and round-the-clock technical care.',
    description: 'Provide your applications with lightning-fast SSD storage, automated SSL provisioning, and unmetered network pipelines. We manage direct local .co.zw domain registration and high-uptime cPanel hosting tiers.',
    metrics: [
      {
        stat: '99.98%',
        desc: 'HIGH-AVAILABILITY UPTIME SLA WITH ENTERPRISE NVME TIERS.',
      },
      {
        stat: 'Direct',
        desc: 'LOCAL .CO.ZW DOMAIN REGISTRATION & HARARE DNS PROVISIONING.',
      },
    ],
    features: [
      'Official .co.zw & Global Domain Registration',
      'Enterprise NVMe cPanel Hosting Tiers',
      'Daily Automated Backups & DDoS Guard',
    ],
    image: '/assets/web-hosting-hero.png',
    imageAlt: 'ZITRAC Cloud Hosting and Server Infrastructure',
    ctaText: 'Explore Hosting & Domains',
  },
  {
    slug: 'software-development',
    number: '03',
    badge: 'AI & Custom Engineering',
    title: 'Custom Software Development & AI Integration',
    tagline: 'Full-stack software engineering integrated with machine intelligence to automate operations.',
    description: 'We build tailor-made enterprise software platforms that eliminate administrative bottlenecks. From high-throughput school and inventory management systems to AI automation pipelines that process real-time relational data.',
    metrics: [
      {
        stat: '5X',
        desc: 'OPERATIONAL CLEARANCE SPEED WITH TAILORED ERP ARCHITECTURE.',
      },
      {
        stat: '100%',
        desc: 'CUSTOM FULL-STACK APPLICATION LOGIC & MACHINE INTELLIGENCE.',
      },
    ],
    features: [
      'Bespoke Enterprise Resource Planning (ERP)',
      'Automated Predictive Analytics Pipelines',
      'API-Driven Cross-Platform Integrations',
    ],
    image: '/assets/software-development.jpg',
    imageAlt: 'ZITRAC Custom Software Engineering and AI Solutions',
    ctaText: 'Explore Software Solutions',
  },
  {
    slug: 'web-design-development',
    number: '04',
    badge: 'Full-Stack Web Engineering',
    title: 'Custom Web Design & Full-Stack Development',
    tagline: 'High-converting, ultra-fast web architectures engineered for top search engine indexing.',
    description: 'We engineer bespoke digital frontends compiled into lightweight static assets to achieve 100/100 Core Web Vitals. No bloated templates—just pure, responsive engineering tailored for high engagement and conversions.',
    metrics: [
      {
        stat: '100%',
        desc: 'CORE WEB VITALS SCORE COMPILED TO STATIC CDN CACHES.',
      },
      {
        stat: '<0.8s',
        desc: 'GLOBAL TIME-TO-INTERACTIVE WITH NEXT-GEN JAMSTACK FRONTENDS.',
      },
    ],
    features: [
      'Static-First Jamstack Architecture',
      'Native Technical SEO & Schema Integration',
      'Responsive Mobile-First UI/UX Engineering',
    ],
    image: '/assets/web-eng-1.png',
    imageAlt: 'ZITRAC Web Design and Full-Stack Development',
    ctaText: 'Explore Web Development',
  },
  {
    slug: 'cyber-security',
    number: '05',
    badge: 'Zero-Trust Architecture',
    title: 'Cyber Security & Automated Threat Mitigation',
    tagline: 'Hardened corporate perimeters guarded by 24/7 automated threat detection watchdogs.',
    description: 'Defend corporate data assets against sophisticated automated attacks. We deploy continuous zero-trust defense routines, penetration testing protocols, and real-time monitoring daemons that block intrusions before endpoints are breached.',
    metrics: [
      {
        stat: '24/7',
        desc: 'AUTONOMOUS THREAT DETECTION WATCHDOGS GUARDING DATA BOUNDS.',
      },
      {
        stat: '99.9%',
        desc: 'PERIMETER DEFENSE RELIABILITY UNDER ZERO-TRUST COMPLIANCE.',
      },
    ],
    features: [
      'Autonomous AI Threat Detection Watchdogs',
      'Vulnerability & Penetration Audits',
      'Encrypted Perimeter & Endpoint Hardening',
    ],
    image: '/assets/cyber-security-network.png',
    imageAlt: 'ZITRAC Global Cyber Security Network and Lock Shield',
    ctaText: 'Explore Cyber Security',
  },
];

export default function ServicesIndexPage() {
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
            * Floating label "Capabilities Directory" on its top border WITHOUT border
          ────────────────────────────────────────────────────────── */}
      <section className="relative z-10 w-full min-h-screen flex flex-col justify-end bg-black overflow-hidden">
        {/* Completely clear image with people: NO blur, full clarity */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <Image
            src="/assets/it-consulting.jpg"
            alt="ZITRAC Professional Team & Consulting Collaboration"
            fill
            className="object-cover object-center"
            unoptimized
            priority
          />
        </div>

        {/* Docked Content Card: Touches right & bottom margins, height is half the screen below navbar, extends slightly past center */}
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
                Services
              </span>
            </nav>

            <div className="space-y-4">
              <h1 className="hero-title-drop font-raleway text-2xl sm:text-4xl lg:text-[2.6rem] font-light tracking-[0.03em] text-slate-900 leading-[1.25] sm:leading-[1.3]">
                Enterprise Solutions &amp; Engineering Capabilities
              </h1>

              <p className="hero-desc-zoom font-raleway text-sm sm:text-base text-slate-600 leading-relaxed font-light text-justify">
                ZITRAC delivers end-to-end technical execution across critical enterprise technological categories. Explore our specialized solutions engineered for performance, security, and scalability.
              </p>

              <div className="hero-fade-up pt-1 flex items-center gap-2.5">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span className="text-xs font-mono text-slate-500">
                  End-to-End Enterprise Architecture &bull; 99.98% High Availability Uptime SLA
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────
          MAIN SERVICES SHOWCASE (Alternating Rows, Exact Margin Alignment)
          ────────────────────────────────────────────────────────── */}
      <div className="relative z-10 w-full mx-auto px-[30px] py-16 md:py-24 space-y-24 lg:space-y-32">
        <div className="space-y-24 lg:space-y-32">
          {services.map((svc, index) => {
            // Even index (0, 2, 4): Text on LEFT, Image on RIGHT
            // Odd index (1, 3): Image on LEFT, Text on RIGHT
            const isImageLeft = index % 2 === 1;

            return (
              <section
                key={svc.slug}
                id={svc.slug}
                className="service-row group border-b service-row-divider pb-20 lg:pb-28 last:border-b-0 last:pb-0"
              >
                <div
                  className={`flex flex-col gap-10 lg:gap-16 items-center ${
                    isImageLeft ? 'lg:flex-row-reverse' : 'lg:flex-row'
                  }`}
                >
                  {/* TEXT EXPLANATION COLUMN (Smooth slow-motion drop from top) */}
                  <div className="w-full lg:w-1/2 space-y-6 animate-drop-top">
                    {/* Headline - Raleway consistent with theme */}
                    <h2 className="service-title font-raleway text-2xl sm:text-3xl lg:text-4xl font-light tracking-[0.02em] leading-tight text-left">
                      {svc.title}
                    </h2>

                    <p className="service-tagline font-raleway text-base font-normal leading-relaxed text-left">
                      {svc.tagline}
                    </p>

                    <p className="service-desc font-raleway text-sm sm:text-base font-light leading-relaxed text-justify">
                      {svc.description}
                    </p>

                    {/* Features List */}
                    <div className="space-y-2.5 pt-1">
                      {svc.features.map((feat, fIdx) => (
                        <div key={fIdx} className="service-feature-item flex items-center gap-3 text-xs sm:text-sm font-mono">
                          <span className="font-bold text-slate-400 dark:text-slate-500">&bull;</span>
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>

                    {/* Metrics Banner - Softened borders in dark mode & high-contrast visible text */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3">
                      {svc.metrics.map((m, mIdx) => (
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
                        href={`/services/${svc.slug}/`}
                        className="service-interactive-btn service-interactive-btn-primary service-btn-primary inline-flex items-center justify-center px-8 py-4 text-xs font-bold uppercase tracking-wider rounded-full transition-all focus:outline-none"
                      >
                        {svc.ctaText}
                      </Link>

                      <Link
                        href="/contact/"
                        className="service-interactive-btn service-interactive-btn-secondary service-btn-secondary inline-flex items-center justify-center px-8 py-4 text-xs font-bold uppercase tracking-wider rounded-full border transition-all focus:outline-none"
                      >
                        Request Consultation
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
                      {/* Floating Service Title on top of the image's margin like hero div */}
                      <div className="absolute -top-3.5 left-6 sm:left-10 px-4 py-0.5 bg-white dark:bg-black inline-flex items-center rounded-t-lg z-20 shadow-none">
                        <span className="service-tab-title font-raleway text-xs sm:text-sm font-semibold uppercase tracking-[0.22em]">
                          {svc.number} / {svc.badge}
                        </span>
                      </div>

                      {/* Borderless Image Container */}
                      <div className="relative w-full h-full overflow-hidden bg-slate-100 dark:bg-zinc-900 border-0 border-none rounded-none shadow-none">
                        <Image
                          src={svc.image}
                          alt={svc.imageAlt}
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
            - Floating label on top border WITHOUT border, rounded top corners
            - Call has its own div with big flush icon, HOVER BG COLOR
            - Email has its own div with big flush icon, HOVER BG COLOR
            - Longer width, no borders on contact divs
            - Button on the right
            ────────────────────────────────────────────────────────── */}
        <section className="relative mt-16 bg-[#0c121d] dark:bg-[#070b12] text-white p-10 sm:p-16 lg:p-20 rounded-none rounded-tr-[56px] sm:rounded-tr-[72px] rounded-bl-[56px] sm:rounded-bl-[72px] shadow-none animate-drop-top">
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
                Need a Custom Architecture or Dedicated Project Team?
              </h2>

              <p className="font-raleway text-sm sm:text-base lg:text-lg text-slate-300 leading-[1.8] sm:leading-[1.9] tracking-wide font-light text-justify">
                Our engineering team directly assesses infrastructure requirements and delivers actionable technical roadmaps. Contact us today to discuss your timeline.
              </p>
            </div>

            {/* Right Column: Contact details (each in their own longer div, borderless, big flush icons, hover bg color) on top of Action Button */}
            <div className="w-full lg:w-auto shrink-0 flex flex-col items-start lg:items-end gap-5">
              {/* Call: Own Div, Longer Width, No Border, Big Flush Icon, Hover bg-color */}
              <div className="contact-item-card w-full sm:w-[380px] bg-[#141d2e] dark:bg-[#0f1726] rounded-xl overflow-hidden flex items-stretch shadow-sm cursor-pointer">
                {/* Big Flush Phone Icon Container (no padding gap, flush against edges) */}
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
                {/* Big Flush Mail Icon Container (no padding gap, flush against edges) */}
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
                  Initiate Project Discussion
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
