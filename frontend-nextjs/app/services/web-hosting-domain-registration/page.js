import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Affordable Web Hosting Plans For Zimbabwe | ZITRAC Technologies',
  description: 'Affordable cPanel web hosting packages in Zimbabwe starting at US $3.50/mo. Fast NVMe storage, free SSL certificates, 1-click WordPress, and official .co.zw domain registration.',
  openGraph: {
    title: 'Affordable Web Hosting Plans For Zimbabwe | ZITRAC',
    description: 'Fast, affordable cPanel web hosting with free SSL, high-speed NVMe storage, and local .co.zw domain registration in Zimbabwe.',
    url: 'https://zitrac.co.zw/services/web-hosting-domain-registration/',
    images: [{ url: 'https://media.zitrac.co.zw/og-hosting-1200x630.jpg', width: 1200, height: 630 }],
  },
};


const packages = [
  {
    name: 'BRONZE',
    price: '3.50',
    currency: 'US $',
    period: '/Month',
    badge: 'Starter',
    tagline: 'Perfect for basic personal blogs, small portfolios, and starter websites.',
    specs: [
      '1 GB Disk Space',
      '20 Email Accounts',
      'Host 1-10 Domains',
      '10 MySQL Databases',
      'FREE SSL Certificate',
      'FAST One-Click WordPress Installer',
    ],
    popular: false,
  },
  {
    name: 'SILVER',
    price: '7',
    currency: 'US $',
    period: '/Month',
    badge: 'Best Seller',
    tagline: 'Ideal for small-to-medium businesses, corporate profiles, and active websites.',
    specs: [
      '2 GB Disk Space',
      '50 Email Accounts',
      'Host 1-30 Domains',
      '30 MySQL Databases',
      'FREE SSL Certificate',
      'FAST One-Click WordPress Installer',
    ],
    popular: true,
  },
  {
    name: 'GOLD',
    price: '17.50',
    currency: 'US $',
    period: '/Month',
    badge: 'Growing Business',
    tagline: 'Designed for expanding companies, dynamic web portals, and e-commerce stores.',
    specs: [
      '5 GB Disk Space',
      '150 Email Accounts',
      'Host 1-100 Domains',
      '100 MySQL Databases',
      'FREE SSL Certificate',
      'FAST One-Click WordPress Installer',
    ],
    popular: false,
  },
  {
    name: 'PLATINUM',
    price: '35',
    currency: 'US $',
    period: '/Month',
    badge: 'Enterprise',
    tagline: 'High-capacity infrastructure for busy organizations, multi-site networks, and heavy traffic.',
    specs: [
      '10 GB Disk Space',
      '500 Email Accounts',
      'Host 1-500 Domains',
      '500 MySQL Databases',
      'FREE SSL Certificate',
      'FAST One-Click WordPress Installer',
    ],
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
                Affordable Web Hosting Packages in Zimbabwe
              </h1>

              <p className="hero-desc-zoom font-raleway text-sm sm:text-base text-slate-600 leading-relaxed font-light text-justify">
                High-speed cPanel web hosting and local .co.zw domain registration built for Zimbabwean businesses, organizations, and startups. Reliable NVMe SSD performance, fast WordPress setup, and free SSL certificates with 99.9% uptime.
              </p>

              <div className="flex items-center gap-2 pt-2 text-xs font-mono text-slate-500">
                <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Transparent Monthly &amp; Annual Billing &bull; Harare Direct Registry Delegation</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────
          MAIN CONTENT CONTAINER
          1. Cloud Hosting Packages (Displayed First)
          2. Alternating Architecture Rows (cPanel & Domains)
          3. Domain Delegation Procedures & DNSSEC Card
          4. Bottom Consultation Callout
          ────────────────────────────────────────────────────────── */}
      <main className="relative z-10 mx-auto max-w-full px-[30px] py-16 lg:py-24">
        {/* ──────────────────────────────────────────────────────────
            1. PRICING TIERS SECTION (Displayed First)
            ────────────────────────────────────────────────────────── */}
        <section id="hosting-plans" className="space-y-10">
          <div className="text-center sm:text-left space-y-2 max-w-3xl">
            <div className="font-mono text-xs tracking-[0.2em] uppercase font-bold text-red-600 dark:text-red-500">
              Web Hosting Plans
            </div>
            <h2 className="font-raleway text-3xl sm:text-4xl lg:text-5xl font-light tracking-[0.02em] text-slate-900 dark:text-white">
              Affordable Web Hosting Plans For Zimbabwe
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {packages.map((pkg, idx) => {
              // Directional slow-motion entrance:
              // idx 0 (BRONZE): from left
              // idx 1 (SILVER): drop from top
              // idx 2 (GOLD): drop from top
              // idx 3 (PLATINUM): from right
              const animClass =
                idx === 0
                  ? 'plan-card-left'
                  : idx === 1
                  ? 'plan-card-drop-1'
                  : idx === 2
                  ? 'plan-card-drop-2'
                  : 'plan-card-right';

              return (
                <div
                  key={pkg.name}
                  className={`relative rounded-2xl bg-white dark:bg-[#0c121d] border overflow-hidden flex flex-col justify-between shadow-none transition-all ${animClass} ${
                    pkg.popular
                      ? 'border-red-600 dark:border-red-500 ring-2 ring-red-600/10 dark:ring-red-500/20'
                      : 'border-slate-200 dark:border-zinc-800'
                  }`}
                >
                  {/* Popular / Best Seller Top Ribbon */}
                  {pkg.popular && (
                    <div className="w-full bg-red-600 text-white text-center py-1.5 text-[11px] font-raleway font-bold uppercase tracking-wider">
                      {pkg.badge}
                    </div>
                  )}

                  <div className="p-6">
                    {/* Tier Title */}
                    <div className="text-center pb-4">
                      <h3 className="font-raleway text-lg sm:text-xl font-bold tracking-wider text-slate-900 dark:text-white uppercase">
                        {pkg.name}
                      </h3>
                    </div>

                    {/* Price Banner Box */}
                    <div
                      className={`rounded-xl py-6 px-4 text-center my-2 text-white transition-colors ${
                        pkg.popular
                          ? 'bg-red-600 dark:bg-red-600'
                          : 'bg-[#1a1a2e] dark:bg-[#131926]'
                      }`}
                    >
                      <div className="flex items-baseline justify-center gap-1">
                        <span className="text-lg sm:text-xl font-bold tracking-tight">{pkg.currency}</span>
                        <span className="text-3xl sm:text-4xl font-extrabold tracking-tight">{pkg.price}</span>
                        <span className="text-xs font-light opacity-90">{pkg.period}</span>
                      </div>

                      <div className="mt-4">
                        <Link
                          href={`/contact/?service=Web+Hosting&tier=${encodeURIComponent(pkg.name)}`}
                          className={`inline-block w-full max-w-[160px] py-2.5 px-6 rounded-full font-raleway text-xs font-bold uppercase tracking-wider transition-colors shadow-sm ${
                            pkg.popular
                              ? 'bg-white text-red-600 hover:bg-slate-100'
                              : 'bg-white text-slate-900 hover:bg-slate-100'
                          }`}
                        >
                          SIGN UP
                        </Link>
                      </div>
                    </div>

                    {/* Specifications List */}
                    <ul className="space-y-3.5 text-xs sm:text-[13px] font-raleway text-slate-700 dark:text-slate-300 mt-6 text-center divide-y divide-slate-100 dark:divide-zinc-850">
                      {pkg.specs.map((spec, sIdx) => {
                        const isBoldHighlight = spec.startsWith('FREE') || spec.startsWith('FAST');
                        return (
                          <li key={sIdx} className="pt-3 first:pt-0">
                            {isBoldHighlight ? (
                              <span>
                                <strong className="text-red-600 dark:text-red-400 font-bold">
                                  {spec.split(' ')[0]}{' '}
                                </strong>
                                {spec.substring(spec.indexOf(' ') + 1)}
                              </span>
                            ) : (
                              <span>{spec}</span>
                            )}
                          </li>
                        );
                      })}
                    </ul>
                  </div>

                  {/* Bottom Action Button (Rounded-full) */}
                  <div className="p-6 pt-2 border-t border-slate-100 dark:border-zinc-800/60">
                    <Link
                      href={`/contact/?service=Web+Hosting&tier=${encodeURIComponent(pkg.name)}`}
                      className={`service-interactive-btn w-full inline-flex items-center justify-center py-3 text-xs font-bold uppercase tracking-wider rounded-full transition-all focus:outline-none ${
                        pkg.popular
                          ? 'service-interactive-btn-primary service-btn-primary'
                          : 'service-interactive-btn-secondary service-btn-secondary border'
                      }`}
                    >
                      Select {pkg.name}
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </section>


        {/* ──────────────────────────────────────────────────────────
            DOMAIN PROCEDURES & REGISTRY GOVERNANCE (Monochrome & Clean)
            ────────────────────────────────────────────────────────── */}
        <section
          id="domain-search"
          className="mt-20 sm:mt-24 rounded-2xl border border-slate-200 dark:border-zinc-800/80 bg-white dark:bg-[#0c121d] p-8 sm:p-12 lg:p-14 shadow-none transition-colors"
        >
          <div className="max-w-4xl space-y-4 text-left">
            <div className="inline-flex items-center gap-2">
              <span className="font-mono text-xs uppercase tracking-[0.25em] font-semibold text-slate-500 dark:text-slate-400">
                Official Registry Delegation
              </span>
            </div>

            <h2 className="font-raleway text-2xl sm:text-3xl lg:text-4xl font-light tracking-[0.02em] text-slate-900 dark:text-white leading-tight">
              Official .co.zw, .org.zw &amp; .ac.zw Registry Governance
            </h2>

            <p className="font-raleway text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-light text-justify">
              We directly handle official registry delegation with local Zimbabwean authority bodies, ensuring domain name servers, MX mail records, and SPF/DKIM/DMARC routing parameters are validated cryptographically against tampering. Low-TTL nameservers ensure immediate propagation across regional telecom carriers.
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-6 sm:gap-10 border-t border-slate-100 dark:border-zinc-800/70 text-xs font-mono text-slate-600 dark:text-slate-400">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-400 dark:bg-slate-500" />
                <span>Direct Harare Registry Connection</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-400 dark:bg-slate-500" />
                <span>DNSSEC Cryptographic Signing</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-400 dark:bg-slate-500" />
                <span>Automated Renewal Daemons</span>
              </div>
            </div>
          </div>
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
