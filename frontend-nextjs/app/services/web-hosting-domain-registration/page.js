import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Fast Web Hosting & .co.zw Domain Registration Zimbabwe | ZITRAC',
  description: 'Enterprise cPanel cloud hosting packages, NVMe storage tiers, and official local .co.zw domain registration engineered for Zimbabwean businesses by ZITRAC Technologies.',
  openGraph: {
    title: 'Fast Web Hosting and Domain Registration Zimbabwe | ZITRAC',
    description: 'Secure your digital visibility with fast cPanel hosting and local .co.zw domain registration.',
    url: 'https://zitrac.co.zw/services/web-hosting-domain-registration/',
    images: [{ url: 'https://media.zitrac.co.zw/og-hosting-1200x630.jpg', width: 1200, height: 630 }],
  },
};

const hostingFeatures = [
  {
    slug: 'cpanel-hosting',
    number: '01',
    badge: 'Enterprise Cloud Hosting',
    title: 'High-Availability NVMe cPanel Hosting Tiers',
    tagline: 'Lightning-fast SSD storage tiers, unmetered network pipelines, and round-the-clock technical care.',
    description: 'We deliver ultra-performant cloud hosting infrastructure backed by high-speed NVMe storage, automated SSL provisioning, and daily offsite backup replication. Our hosting environment is fine-tuned for high throughput on PHP, Node.js, and Python WSGI workloads.',
    metrics: [
      {
        stat: '99.98%',
        desc: 'HIGH-AVAILABILITY UPTIME SLA WITH ENTERPRISE NVME TIERS.',
      },
      {
        stat: '<0.8s',
        desc: 'SERVER TIME-TO-FIRST-BYTE ACCELERATING REGIONAL LOAD SPEEDS.',
      },
    ],
    features: [
      'High-Speed Enterprise NVMe Storage & Dedicated CPU Resources',
      'Automated Daily Offsite Backups & Rapid Disaster Recovery',
      'cPanel Control Panel with Python, Node.js & PHP Multi-Version Support',
    ],
    image: '/assets/cloud-hosting-server.png',
    imageAlt: 'ZITRAC Enterprise Cloud Hosting and Server Infrastructure',
    ctaText: 'Explore Hosting Tiers',
    ctaHref: '#hosting-plans',
  },
  {
    slug: 'domain-registration',
    number: '02',
    badge: 'Official Domains Registry',
    title: 'Local .co.zw & Global Domain Registration & DNSSEC',
    tagline: 'Direct local registry delegation with high-speed DNS propagation and enterprise nameserver security.',
    description: 'Protect your corporate brand and identity across Zimbabwe and globally. We handle direct registration and renewals for official Zimbabwean extensions (.co.zw, .org.zw, .ac.zw) and top-level global domains (.com, .net, .org) with DNSSEC security.',
    metrics: [
      {
        stat: 'Direct',
        desc: 'LOCAL .CO.ZW REGISTRY DELEGATION & HARARE DNS PROVISIONING.',
      },
      {
        stat: '100%',
        desc: 'DNSSEC CRYPTOGRAPHIC RECORD VALIDATION AGAINST HIJACKING.',
      },
    ],
    features: [
      'Official .co.zw, .org.zw & Global Domain Registrations',
      'Cryptographically Signed DNSSEC Records & Low-TTL Nameservers',
      'Instant WHOIS Privacy Protection & Automated Renewal Daemons',
    ],
    image: '/assets/global-network.png',
    imageAlt: 'ZITRAC Global Network and Domain Registration Infrastructure',
    ctaText: 'Register Your Domain',
    ctaHref: '#domain-search',
  },
];

const packages = [
  {
    name: 'Starter Tier',
    badge: 'Standard',
    tagline: 'Ideal for local SMEs, personal brands, and static web profiles.',
    storage: '10 GB NVMe SSD Storage',
    bandwidth: 'Unmetered Bandwidth',
    domains: '1 Free .co.zw Domain',
    emails: '5 Professional Mailboxes',
    popular: false,
  },
  {
    name: 'Business Tier',
    badge: 'Most Popular',
    tagline: 'Engineered for growing businesses, portals, and dynamic web apps.',
    storage: '35 GB NVMe SSD Storage',
    bandwidth: 'Unmetered Bandwidth',
    domains: '1 Free .co.zw Domain',
    emails: 'Unlimited Mailboxes',
    popular: true,
  },
  {
    name: 'Enterprise Tier',
    badge: 'High Performance',
    tagline: 'Dedicated CPU allocation for mission-critical software and high-traffic sites.',
    storage: '100 GB NVMe SSD Storage',
    bandwidth: 'Priority Fiber Routing',
    domains: 'Free Multiple .co.zw Domains',
    emails: 'Enterprise Mail Gateway',
    popular: false,
  },
];

export default function WebHostingDomainRegistrationPage() {
  return (
    <div className="services-page-wrapper relative bg-white dark:bg-black transition-colors duration-300">
      {/* ──────────────────────────────────────────────────────────
          HERO SECTION: FULL WINDOW (min-h-screen)
          - Single completely clear image (NO blur, NO opacity reduction)
          - Docked white content card:
            * Touches right and bottom margins of the hero
            * Height is half the viewport space from bottom of navbar going down
            * Extends slightly past center towards the left
            * Top-left corner is rounded
            * Floating Breadcrumb Tab on top border: HOME / Hosting & Domains
          ────────────────────────────────────────────────────────── */}
      <section className="relative z-10 w-full min-h-screen flex flex-col justify-end bg-black overflow-hidden">
        {/* Completely clear image: NO blur, full clarity */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <Image
            src="/assets/web-hosting-hero.png"
            alt="ZITRAC Cloud Web Hosting & Domain Registration Facility"
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
                Hosting &amp; Domains
              </span>
            </nav>

            <div className="space-y-4">
              <h1 className="hero-title-drop font-raleway text-2xl sm:text-4xl lg:text-[2.6rem] font-light tracking-[0.03em] text-slate-900 leading-[1.25] sm:leading-[1.3]">
                High-Availability Cloud Hosting &amp; .co.zw Registry
              </h1>

              <p className="hero-desc-zoom font-raleway text-sm sm:text-base text-slate-600 leading-relaxed font-light text-justify">
                Establish and protect your corporate online identity with enterprise cPanel cloud hosting packages and official Zimbabwean domain delegation. Engineered with NVMe solid-state storage and direct regional DNS connectivity.
              </p>

              <div className="flex items-center gap-2 pt-2 text-xs font-mono text-slate-500">
                <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>99.98% High Availability SLA &bull; Harare Direct Registry Delegation</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────
          MAIN ARCHITECTURAL SECTIONS: ALTERNATING FLAT ROWS
          - Hosting Section: Text Left, Image Right
          - Domains Section: Image Left, Text Right
          ────────────────────────────────────────────────────────── */}
      <main className="relative z-10 mx-auto max-w-full px-[30px] py-20 lg:py-28">
        <div className="space-y-24 lg:space-y-32">
          {hostingFeatures.map((featItem, index) => {
            const isImageLeft = index % 2 === 1;

            return (
              <section
                key={featItem.slug}
                id={featItem.slug}
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
                      {featItem.title}
                    </h2>

                    <p className="service-tagline font-raleway text-base font-normal leading-relaxed text-left">
                      {featItem.tagline}
                    </p>

                    <p className="service-desc font-raleway text-sm sm:text-base font-light leading-relaxed text-justify">
                      {featItem.description}
                    </p>

                    {/* Features List */}
                    <div className="space-y-2.5 pt-1">
                      {featItem.features.map((feat, fIdx) => (
                        <div key={fIdx} className="service-feature-item flex items-center gap-3 text-xs sm:text-sm font-mono">
                          <span className="font-bold text-slate-400 dark:text-slate-500">&bull;</span>
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>

                    {/* Metrics Banner - Softened borders in dark mode & high-contrast visible text */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3">
                      {featItem.metrics.map((m, mIdx) => (
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
                      <a
                        href={featItem.ctaHref}
                        className="service-interactive-btn service-interactive-btn-primary service-btn-primary inline-flex items-center justify-center px-8 py-4 text-xs font-bold uppercase tracking-wider rounded-full transition-all focus:outline-none"
                      >
                        {featItem.ctaText}
                      </a>

                      <Link
                        href="/contact/?service=Web+Hosting"
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
                      {/* Floating Category Title on top of the image's margin like hero div */}
                      <div className="absolute -top-3.5 left-6 sm:left-10 px-4 py-0.5 bg-white dark:bg-black inline-flex items-center rounded-t-lg z-20 shadow-none">
                        <span className="service-tab-title font-raleway text-xs sm:text-sm font-semibold uppercase tracking-[0.22em]">
                          {featItem.number} / {featItem.badge}
                        </span>
                      </div>

                      {/* Borderless Image Container */}
                      <div className="relative w-full h-full overflow-hidden bg-slate-100 dark:bg-zinc-900 border-0 border-none rounded-none shadow-none">
                        <Image
                          src={featItem.image}
                          alt={featItem.imageAlt}
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
            PRICING TIERS SECTION (Flat, modern cards, no harsh shadows)
            ────────────────────────────────────────────────────────── */}
        <section id="hosting-plans" className="mt-28 space-y-12">
          <div className="text-left space-y-3 max-w-3xl">
            <div className="font-mono text-xs tracking-[0.2em] uppercase font-bold text-red-600 dark:text-red-400">
              Cloud Hosting Packages
            </div>
            <h2 className="font-raleway text-3xl sm:text-4xl lg:text-5xl font-light tracking-[0.02em] text-slate-900 dark:text-white">
              Transparent, Scalable cPanel Cloud Tiers
            </h2>
            <p className="font-raleway text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-light text-justify">
              All tiers include unmetered bandwidth, automated SSL encryption, and high-performance NVMe storage. Upgrade or scale your infrastructure anytime without service interruption.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className="relative rounded-2xl bg-white dark:bg-[#0c121d] border border-slate-200 dark:border-zinc-800 p-8 flex flex-col justify-between shadow-none transition-colors"
              >
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-xs font-mono font-semibold uppercase tracking-wider text-red-600 dark:text-red-400">
                      {pkg.badge}
                    </span>
                    {pkg.popular && (
                      <span className="text-[10px] font-mono uppercase tracking-wider bg-red-600 text-white px-2.5 py-0.5 rounded-full font-bold">
                        Recommended
                      </span>
                    )}
                  </div>
                  <h3 className="font-raleway text-2xl font-light text-slate-900 dark:text-white mb-2">{pkg.name}</h3>
                  <p className="font-raleway text-xs text-slate-600 dark:text-slate-400 mb-6 font-light">{pkg.tagline}</p>

                  <ul className="space-y-3.5 text-xs sm:text-sm font-mono text-slate-700 dark:text-slate-300 mb-8 border-t border-slate-200 dark:border-zinc-800/80 pt-6">
                    <li className="flex items-center gap-3">
                      <span className="text-red-600 dark:text-red-400 font-bold">&#10003;</span>
                      <span>{pkg.storage}</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-red-600 dark:text-red-400 font-bold">&#10003;</span>
                      <span>{pkg.bandwidth}</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-red-600 dark:text-red-400 font-bold">&#10003;</span>
                      <span>{pkg.domains}</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-red-600 dark:text-red-400 font-bold">&#10003;</span>
                      <span>{pkg.emails}</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-red-600 dark:text-red-400 font-bold">&#10003;</span>
                      <span>Automated SSL Certificate Included</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-2">
                  <Link
                    href={`/contact/?service=Web+Hosting&tier=${encodeURIComponent(pkg.name)}`}
                    className={`service-interactive-btn w-full inline-flex items-center justify-center py-4 text-xs font-bold uppercase tracking-wider rounded-full transition-all focus:outline-none ${
                      pkg.popular
                        ? 'service-interactive-btn-primary service-btn-primary'
                        : 'service-interactive-btn-secondary service-btn-secondary border'
                    }`}
                  >
                    Request {pkg.name}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ──────────────────────────────────────────────────────────
            DOMAIN PROCEDURES & DNSSEC CARD
            ────────────────────────────────────────────────────────── */}
        <section id="domain-search" className="mt-24 rounded-2xl border border-slate-200 dark:border-zinc-800 bg-slate-50 dark:bg-[#0c121d] p-8 sm:p-12 space-y-4">
          <div className="font-mono text-xs tracking-[0.2em] uppercase font-bold text-red-600 dark:text-red-400">
            Zimbabwean Domain Delegation
          </div>
          <h2 className="font-raleway text-2xl sm:text-3xl font-light text-slate-900 dark:text-white">
            Official .co.zw, .org.zw &amp; .ac.zw Registry Governance
          </h2>
          <p className="font-raleway text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-light text-justify">
            We directly handle official registry delegation with local Zimbabwean authority bodies, ensuring domain name servers, MX mail records, and SPF/DKIM/DMARC routing parameters are validated cryptographically against tampering. Low-TTL nameservers ensure immediate propagation across regional telecom carriers.
          </p>
        </section>

        {/* ──────────────────────────────────────────────────────────
            BOTTOM CONSULTATION CALLOUT
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
                Need Enterprise Cloud Infrastructure or Domain Assistance?
              </h2>

              <p className="font-raleway text-sm sm:text-base lg:text-lg text-slate-300 leading-[1.8] sm:leading-[1.9] tracking-wide font-light text-justify">
                Our Harare engineering team configures high-uptime cloud servers, dedicated mail exchangers, and custom local domain delegations. Contact us today to deploy your infrastructure.
              </p>
            </div>

            {/* Right Column: Contact details on top of Action Button */}
            <div className="w-full lg:w-auto shrink-0 flex flex-col items-start lg:items-end gap-5">
              {/* Call */}
              <div className="contact-item-card w-full sm:w-[380px] bg-[#141d2e] dark:bg-[#0f1726] rounded-xl overflow-hidden flex items-stretch shadow-sm cursor-pointer">
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

              {/* Email */}
              <div className="contact-item-card w-full sm:w-[380px] bg-[#141d2e] dark:bg-[#0f1726] rounded-xl overflow-hidden flex items-stretch shadow-sm cursor-pointer">
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

              {/* Action Button */}
              <div className="w-full sm:w-[380px]">
                <Link
                  href="/contact/?service=Web+Hosting"
                  className="service-interactive-btn service-interactive-btn-cta w-full inline-flex items-center justify-center py-5 sm:py-5 text-sm sm:text-base font-bold uppercase tracking-wider rounded-full bg-red-600 text-white hover:scale-105 active:scale-95 transition-all focus:outline-none shadow-none text-center"
                >
                  Initiate Hosting Setup
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
