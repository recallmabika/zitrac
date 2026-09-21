import './globals.css';
import Link from 'next/link';
import Image from 'next/image';
import ScrollAnimator from './components/ScrollAnimator';
import NavbarScrollEffect from './components/NavbarScrollEffect';
import NavbarLinks from './components/NavbarLinks';
import ThemeToggle from './components/ThemeToggle';

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
    telephone: '+263770000000',
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
      'https://www.linkedin.com/company/zitrac-technologies',
      'https://facebook.com/zitractech',
    ],
  };

  return (
    <html lang="en" className="h-full bg-black text-slate-100 antialiased selection:bg-red-600 selection:text-white">
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

        {/* Accessible Footer with Modern Styling */}
        <footer className="border-t border-slate-900 bg-slate-950 py-16 text-sm text-slate-400">
          <div className="mx-auto max-w-full px-[30px] grid grid-cols-1 md:grid-cols-4 gap-10">
            <div className="space-y-4">
              <span className="font-raleway text-2xl sm:text-3xl font-light tracking-[0.3em] uppercase text-white">
                ZITRAC
              </span>
              <p className="text-xs leading-relaxed text-slate-400 font-normal">
                Premier enterprise IT support company in Zimbabwe. Engineering mission-critical infrastructure, custom software, and AI threat defense systems from Harare.
              </p>
            </div>

            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-slate-200 mb-3">
                Core Capabilities
              </h3>
              <ul className="space-y-2 text-xs">
                <li><Link href="/services/it-consulting/" className="hover:text-red-400 transition">IT Consulting Zimbabwe</Link></li>
                <li><Link href="/services/software-development/" className="hover:text-red-400 transition">Enterprise AI Software</Link></li>
                <li><Link href="/services/web-design-development/" className="hover:text-red-400 transition">Web Design Harare</Link></li>
                <li><Link href="/services/cyber-security/" className="hover:text-red-400 transition">Automated Threat Defense</Link></li>
                <li><Link href="/services/web-hosting-domain-registration/" className="hover:text-red-400 transition">.co.zw Domain Registration</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-slate-200 mb-3">
                Corporate Footprint
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed mb-2 font-mono">
                Harare Innovation Corridor<br />
                Harare, Zimbabwe
              </p>
              <p className="text-xs text-slate-400 font-mono">
                Email: <a href="mailto:info@zitrac.co.zw" className="text-red-400 underline">info@zitrac.co.zw</a>
              </p>
            </div>

            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-slate-200 mb-3">
                Technical Briefings
              </h3>
              <p className="text-xs text-slate-400 mb-3">
                Stay updated on security advisories and enterprise computing developments.
              </p>
              <form action="#" method="POST" className="space-y-2">
                <label htmlFor="footer-subscriber-email" className="sr-only">Work Email</label>
                <input
                  type="email"
                  id="footer-subscriber-email"
                  placeholder="name@company.co.zw"
                  className="w-full rounded-lg bg-slate-900 border border-slate-800 px-3.5 py-2 text-xs text-white placeholder-slate-500 focus:outline-none"
                />
                <button
                  type="submit"
                  className="w-full bg-red-600 hover:bg-red-500 text-white text-xs font-semibold py-2 rounded-lg transition focus:outline-none"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          {/* Sanity-Inspired Architectural Footer Toolbar & Theme Feature */}
          <div className="mx-auto max-w-full px-[30px] mt-16 pt-8 border-t border-white/10 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between text-xs text-slate-400">
            {/* Left Column: Social Links / Keep in touch */}
            <div className="flex items-center gap-4">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500 mr-1 hidden sm:inline-block">
                Keep In Touch
              </span>
              <div className="flex items-center gap-3 text-slate-400">
                {/* GitHub */}
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="ZITRAC on GitHub"
                  className="hover:text-white transition-colors p-1"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                </a>
                {/* LinkedIn */}
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="ZITRAC on LinkedIn"
                  className="hover:text-white transition-colors p-1"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                  </svg>
                </a>
                {/* X / Twitter */}
                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="ZITRAC on X"
                  className="hover:text-white transition-colors p-1"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Middle Column: Copyright, Timezones & Trust */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-slate-400 font-mono text-[11px]">
              <span className="text-slate-400">
                &copy; {new Date().getFullYear()} ZITRAC
              </span>
              <span className="hidden xl:inline-block text-slate-500 font-mono text-[10px]">
                HRE (CAT) &bull; LND (GMT)
              </span>
              <div className="flex items-center space-x-4 text-xs font-sans">
                <Link href="/about/" className="hover:text-slate-200 transition">Corporate Trust</Link>
                <Link href="/contact/" className="hover:text-slate-200 transition">Direct Dispatch</Link>
              </div>
            </div>

            {/* Right Column: Status Indicator & Segmented Theme Toggle */}
            <div className="flex items-center gap-4 sm:gap-5 self-start lg:self-auto">
              {/* Operational Status Pill (like Sanity's "ALL SYSTEMS OPERATIONAL") */}
              <Link
                href="/contact/"
                className="inline-flex items-center gap-2 rounded-full border border-emerald-500/25 bg-emerald-950/30 px-3.5 py-1.5 font-mono text-[10px] tracking-wider uppercase text-emerald-400 backdrop-blur hover:bg-emerald-950/60 hover:border-emerald-500/40 transition-all"
              >
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
                </span>
                <span className="font-semibold">All Systems Operational</span>
              </Link>

              {/* Segmented Light / System / Dark Toggle */}
              <ThemeToggle />
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
