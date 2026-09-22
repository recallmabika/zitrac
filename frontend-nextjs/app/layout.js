import './globals.css';
import Link from 'next/link';
import Image from 'next/image';
import ScrollAnimator from './components/ScrollAnimator';
import NavbarScrollEffect from './components/NavbarScrollEffect';
import NavbarLinks from './components/NavbarLinks';
import ThemeToggle from './components/ThemeToggle';
import ScrollToTop from './components/ScrollToTop';
import ChatWithUs from './components/ChatWithUs';

export const metadata = {
  metadataBase: new URL('https://zitrac.co.zw'),
  title: {
    default: 'Managed IT Services & Software Development Zimbabwe | ZITRAC',
    template: '%s | ZITRAC Technologies',
  },
  description: 'Partner with ZITRAC Technologies, a premier IT consulting firm in Zimbabwe. We deliver enterprise software development, cybersecurity, and hosting solutions.',
  openGraph: {
    type: 'website',
    locale: 'en_ZW',
    url: 'https://zitrac.co.zw/',
    siteName: 'ZITRAC Technologies',
    title: 'Managed IT Services & Software Development Zimbabwe | ZITRAC',
    description: 'Partner with ZITRAC Technologies, a premier IT consulting firm in Zimbabwe. Enterprise IT, cybersecurity, and custom software.',
    images: [
      {
        url: 'https://media.zitrac.co.zw/og-general-1200x630.jpg',
        width: 1200,
        height: 630,
        alt: 'ZITRAC Technologies Enterprise IT & Software Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@zitractech',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.png', type: 'image/png', sizes: '32x32' },
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ITServices',
    name: 'ZITRAC Technologies',
    alternateName: 'ZITRAC',
    url: 'https://zitrac.co.zw/',
    logo: 'https://zitrac.co.zw/assets/zitrac-logo.jpg',
    telephone: '+263718001031',
    email: 'info@zitrac.co.zw',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Harare',
      addressRegion: 'Harare Province',
      addressCountry: 'ZW',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: -17.8252,
      longitude: 31.0335,
    },
    areaServed: 'Zimbabwe',
    sameAs: [
      'https://linkedin.com/company/zitractech',
      'https://www.youtube.com/@zitractech',
      'https://www.facebook.com/zitractech',
    ],
  };

  return (
    <html
      lang="en"
      className="h-full bg-black text-slate-100 antialiased selection:bg-red-600 selection:text-white"
      suppressHydrationWarning
    >
      <head>
        <link rel="canonical" href="https://zitrac.co.zw/" />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function() {
              try {
                var theme = localStorage.getItem('zitrac-theme');
                var root = document.documentElement;
                if (theme === 'light') {
                  root.classList.add('light');
                  root.classList.remove('dark');
                } else if (theme === 'dark') {
                  root.classList.add('dark');
                  root.classList.remove('light');
                } else if (theme === 'system') {
                  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
                    root.classList.add('dark');
                    root.classList.remove('light');
                  } else {
                    root.classList.add('light');
                    root.classList.remove('dark');
                  }
                }
              } catch (e) {}
            })();`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="flex min-h-full flex-col bg-black text-slate-100 relative">
        <ScrollAnimator />
        <NavbarScrollEffect />
        <ScrollToTop />
        <ChatWithUs />

        {/* Accessible Skip Link */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:bg-red-600 focus:text-white focus:px-4 focus:py-2 focus:rounded shadow-lg"
        >
          Skip to main content
        </a>

        <header
          id="main-navbar"
          className="fixed top-0 z-40 w-full border-none bg-transparent transition-all duration-300"
        >
          <div className="mx-auto flex max-w-full items-center justify-between px-[30px] py-4 md:py-5">
            <Link
              href="/"
              className="flex items-center gap-2 outline-none rounded-lg group"
              aria-label="ZITRAC Technologies Homepage"
            >
              {/* Elegant Thin Raleway Typography with Relaxed Letter Spacing */}
              <div className="flex flex-col leading-none">
                <span className="brand-title font-raleway text-2xl sm:text-3xl font-light tracking-[0.3em] uppercase text-white transition-colors duration-300">
                  ZITRAC
                </span>
                <span className="brand-subtext text-[9px] font-mono uppercase tracking-[0.25em] text-slate-400 mt-1 transition-colors duration-300">
                  Technologies <span className="mx-1 opacity-50">|</span> Zimbabwe
                </span>
              </div>
            </Link>

            <NavbarLinks />

            <div className="flex items-center gap-4">
              <Link
                href="#"
                className="nav-link-item font-raleway text-xs uppercase tracking-[0.2em] font-light text-slate-300 hover:text-white transition-colors"
              >
                Log In
              </Link>
              <Link
                href="/contact/"
                className="btn-glow inline-flex items-center justify-center rounded-full bg-red-600 px-5 py-2 text-xs font-semibold tracking-wide text-white shadow-md transition-all hover:bg-red-500 hover:scale-105 focus:outline-none"
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </header>

        {/* Core Content View */}
        <main id="main-content" className="flex-grow">
          {children}
        </main>

        {/* Architectural Enterprise Footer - Modeled on Sanity.io */}
        <footer className="border-t border-white/10 bg-black text-white py-20 relative z-20">
          <div className="mx-auto max-w-full px-[30px]">
            {/* Top Row: Giant Display Header + Newsletter & Community */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-20 border-b border-white/10">
              {/* Left Column: Headlines & Pill Form */}
              <div className="lg:col-span-6 space-y-6">
                <div>
                  <Link
                    href="/contact/"
                    className="group inline-flex items-center gap-2 font-raleway text-2xl sm:text-4xl lg:text-[2.6rem] font-light tracking-tight text-white hover:text-red-400 transition-colors"
                  >
                    <span className="group-hover:underline underline-offset-8 decoration-1 decoration-red-500/60">Connect with our engineering team</span>
                    <span className="text-red-500 transition-transform group-hover:translate-x-2">&rarr;</span>
                  </Link>
                  <h2 className="font-raleway text-2xl sm:text-4xl lg:text-[2.6rem] font-light tracking-tight text-slate-300 mt-2">
                    Subscribe to technical briefings
                  </h2>
                </div>

                {/* Pill Newsletter Form */}
                <form
                  action="#"
                  method="POST"
                  className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-3 max-w-xl"
                >
                  <label htmlFor="footer-newsletter-email" className="sr-only">
                    Work email address
                  </label>
                  <input
                    type="email"
                    id="footer-newsletter-email"
                    placeholder="you@company.co.zw"
                    required
                    className="flex-1 rounded-full border border-white/15 bg-white/[0.04] px-6 py-3.5 text-xs font-mono text-white placeholder-slate-500 backdrop-blur-md focus:border-red-500 focus:bg-white/[0.07] transition-all"
                  />
                  <button
                    type="submit"
                    className="rounded-full border border-white/20 bg-white/10 hover:bg-white hover:text-black px-7 py-3.5 text-xs font-mono font-semibold uppercase tracking-[0.18em] text-white transition-all hover:scale-105 active:scale-95 whitespace-nowrap"
                  >
                    Subscribe
                  </button>
                </form>
                <p className="text-[11px] font-mono text-slate-500">
                  Critical CVE security advisories, Zimbabwe enterprise IT alerts &bull; No spam.
                </p>

                {/* Direct Operational Inquiries */}
                <div className="pt-2 font-mono text-xs text-slate-400 flex flex-wrap items-center gap-2.5">
                  <span className="text-[11px] uppercase tracking-wider text-slate-500 font-semibold">Direct Desk:</span>
                  <a
                    href="mailto:support@zitrac.co.zw"
                    className="text-slate-300 hover:text-white hover:underline transition"
                  >
                    support@zitrac.co.zw
                  </a>
                  <span className="text-slate-600">|</span>
                  <a
                    href="mailto:info@zitrac.co.zw"
                    className="text-slate-300 hover:text-white hover:underline transition"
                  >
                    info@zitrac.co.zw
                  </a>
                </div>
              </div>

              {/* Right Column: Structured Navigation Grid (Capabilities, Infrastructure, Company, Help, Trust) */}
              <div className="lg:col-span-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 font-mono text-xs">
                {/* Capabilities */}
                <div className="space-y-4">
                  <div className="text-[11px] uppercase tracking-[0.2em] text-slate-500 font-semibold">
                    Capabilities
                  </div>
                  <ul className="space-y-2.5 text-slate-300">
                    <li><Link href="/services/it-consulting/" className="hover:text-white hover:underline transition">IT Consulting</Link></li>
                    <li><Link href="/services/software-development/" className="hover:text-white hover:underline transition">AI &amp; Automation</Link></li>
                    <li><Link href="/services/cyber-security/" className="hover:text-white hover:underline transition">Zero-Trust SOC</Link></li>
                    <li><Link href="/services/web-design-development/" className="hover:text-white hover:underline transition">Web Engineering</Link></li>
                    <li><Link href="/services/web-hosting-domain-registration/" className="hover:text-white hover:underline transition">cPanel &amp; DNS</Link></li>
                    <li><Link href="/services/software-development/" className="hover:text-white hover:underline transition">School Portals</Link></li>
                    <li><Link href="/services/it-consulting/" className="hover:text-white hover:underline transition">Cloud Migration</Link></li>
                  </ul>
                </div>

                {/* Infrastructure */}
                <div className="space-y-4">
                  <div className="text-[11px] uppercase tracking-[0.2em] text-slate-500 font-semibold">
                    Infrastructure
                  </div>
                  <ul className="space-y-2.5 text-slate-300">
                    <li><Link href="/services/web-hosting-domain-registration/" className="hover:text-white hover:underline transition">.co.zw Registry</Link></li>
                    <li><Link href="/services/cyber-security/" className="hover:text-white hover:underline transition">Penetration Audits</Link></li>
                    <li><Link href="/services/it-consulting/" className="hover:text-white hover:underline transition">Disaster Recovery</Link></li>
                    <li><Link href="/services/software-development/" className="hover:text-white hover:underline transition">REST &amp; APIs</Link></li>
                    <li><Link href="/services/it-consulting/" className="hover:text-white hover:underline transition">AWS / Cloudflare</Link></li>
                    <li><Link href="/services/it-consulting/" className="hover:text-white hover:underline transition">SLA Benchmarks</Link></li>
                  </ul>
                </div>

                {/* Company */}
                <div className="space-y-4">
                  <div className="text-[11px] uppercase tracking-[0.2em] text-slate-500 font-semibold">
                    Company
                  </div>
                  <ul className="space-y-2.5 text-slate-300">
                    <li><Link href="/about/" className="hover:text-white hover:underline transition">About ZITRAC</Link></li>
                    <li><Link href="/work/" className="hover:text-white hover:underline transition">Recent Work</Link></li>
                    <li><Link href="/pricing/" className="hover:text-white hover:underline transition">Pricing</Link></li>
                    <li><Link href="/contact/" className="hover:text-white hover:underline transition">Contact Sales</Link></li>
                  </ul>
                </div>

                {/* Help & Support */}
                <div className="space-y-4">
                  <div className="text-[11px] uppercase tracking-[0.2em] text-slate-500 font-semibold">
                    Help
                  </div>
                  <ul className="space-y-2.5 text-slate-300">
                    <li><Link href="/contact/" className="hover:text-white hover:underline transition">Support Desk</Link></li>
                    <li><a href="mailto:support@zitrac.co.zw" className="hover:text-white hover:underline transition">Email Support</a></li>
                    <li><a href="https://wa.me/263718001031" target="_blank" rel="noopener noreferrer" className="hover:text-white hover:underline transition">WhatsApp Help</a></li>
                    <li><a href="tel:+263718001031" className="hover:text-white hover:underline transition">Call Hotline</a></li>
                    <li><Link href="/pricing/" className="hover:text-white hover:underline transition">Billing &amp; SLAs</Link></li>
                    <li><Link href="/contact/" className="hover:text-white hover:underline transition">Other</Link></li>
                  </ul>
                </div>

                {/* Trust & Legal */}
                <div className="space-y-4">
                  <div className="text-[11px] uppercase tracking-[0.2em] text-slate-500 font-semibold">
                    Trust &amp; Legal
                  </div>
                  <ul className="space-y-2.5 text-slate-300">
                    <li><Link href="/about/" className="hover:text-white hover:underline transition">Privacy Policy</Link></li>
                    <li><Link href="/about/" className="hover:text-white hover:underline transition">Terms of Service</Link></li>
                    <li><Link href="/about/" className="hover:text-white hover:underline transition">Security Protocol</Link></li>
                    <li><Link href="/about/" className="hover:text-white hover:underline transition">SLA Guarantee</Link></li>
                    <li><Link href="/contact/" className="hover:text-white hover:underline transition">Incident Dispatch</Link></li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Giant Monolithic Brand Wordmark (Modeled on Sanity's massive centerpiece) */}
            <div className="py-24 text-center select-none overflow-hidden animate-on-scroll">
              <div className="footer-wordmark font-raleway text-6xl sm:text-8xl md:text-9xl lg:text-[11rem] font-light uppercase text-white/90 hover:text-white cursor-default inline-flex items-center justify-center">
                <span className="wordmark-part wordmark-zi">ZI</span>
                <span className="wordmark-part wordmark-tr">TR</span>
                <span className="wordmark-part wordmark-ac">AC</span>
              </div>
              <p className="font-mono text-xs uppercase tracking-[0.35em] text-slate-500 mt-2">
                Enterprise Computing &bull; Harare, Zimbabwe
              </p>
            </div>

            {/* Sanity-Inspired Architectural Footer Toolbar & Theme Feature */}
            <div className="pt-8 border-t border-white/10 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between text-xs text-slate-400">
              {/* Left Column: Social Icons */}
              <div className="flex items-center gap-5">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500 hidden sm:inline-block">
                  Keep In Touch
                </span>
                <div className="flex items-center gap-4 text-slate-400">
                  {/* LinkedIn */}
                  <a
                    href="https://linkedin.com/company/zitractech"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="ZITRAC on LinkedIn"
                    className="hover:text-white transition-colors"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                    </svg>
                  </a>
                  {/* YouTube */}
                  <a
                    href="https://www.youtube.com/@zitractech"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="ZITRAC on YouTube"
                    className="hover:text-white transition-colors"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                  </a>
                  {/* Facebook */}
                  <a
                    href="https://www.facebook.com/zitractech"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="ZITRAC on Facebook"
                    className="hover:text-white transition-colors"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>
                  {/* GitHub */}
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="ZITRAC on GitHub"
                    className="hover:text-white transition-colors"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                    </svg>
                  </a>
                  {/* Discord */}
                  <a
                    href="https://discord.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="ZITRAC Engineering Community"
                    className="hover:text-white transition-colors"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Middle: Copyright & Regional Timezones */}
              <div className="flex flex-wrap items-center gap-6 font-mono text-[11px] text-slate-500">
                <span>&copy; ZITRAC {new Date().getFullYear()}</span>
                <span>HRE, ZWE (CAT)</span>
                <span>LND, UK (GMT)</span>
              </div>

              {/* Right: Operational Status Pill + Segmented Theme Toggle */}
              <div className="flex items-center gap-5 self-start lg:self-auto">
                <Link
                  href="/contact/"
                  className="status-pill inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-950/20 px-3.5 py-1.5 font-mono text-[10px] tracking-wider uppercase text-emerald-400 hover:bg-emerald-950/50 hover:border-emerald-500/50 transition-all"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span className="font-semibold tracking-[0.14em]">All Systems Operational</span>
                </Link>

                <ThemeToggle />
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
