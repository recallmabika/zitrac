import './globals.css';
import Link from 'next/link';
import Image from 'next/image';
import ScrollAnimator from './components/ScrollAnimator';
import NavbarScrollEffect from './components/NavbarScrollEffect';
import NavbarLinks from './components/NavbarLinks';

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

        {/* Top Notification Announcement Bar - Inspired by Sanity Style */}
        <div className="w-full bg-slate-950 border-b border-slate-900 py-1.5 px-4 text-center text-[11px] font-mono tracking-tight text-slate-400">
          <span className="text-red-500 font-bold mr-1.5">LIVE</span>
          <span>Enterprise IT Engineering, AI Automation &amp; Cloud Migration in Harare &bull; </span>
          <Link href="/contact/" className="text-slate-300 underline underline-offset-2 hover:text-white transition">
            Book strategic audit &rarr;
          </Link>
        </div>

        {/* Global Navigation with Glassmorphism, Red Hover State & Logo */}
        <header
          id="main-navbar"
          className="sticky top-0 z-40 w-full navbar-glass border-b border-white/5 bg-black/80 hover:bg-red-950/90 transition-all duration-500 group/nav"
        >
          <div className="mx-auto flex max-w-full items-center justify-between px-[30px] py-3.5 md:py-4">
            <Link
              href="/"
              className="flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-red-600 rounded-lg group"
              aria-label="ZITRAC Technologies Homepage"
            >
              {/* Emblem Logo Badge */}
              <div className="logo-badge-container relative h-9 w-14 sm:h-10 sm:w-16 rounded-lg overflow-hidden border border-white/15 bg-black shadow-md transition-all duration-300 group-hover:scale-105 group-hover:border-red-500/50">
                <Image
                  src="/assets/zitrac-logo.jpg"
                  alt="ZITRAC 3D Emblem"
                  fill
                  priority
                  className="object-contain p-0.5"
                />
              </div>

              {/* Explicit ZITRAC brand title & location label */}
              <div className="flex flex-col leading-none">
                <span className="brand-title text-xl sm:text-2xl font-black tracking-tight text-white transition-colors duration-300">
                  ZITRAC<span className="text-red-500">.</span>
                </span>
                <span className="brand-subtext text-[10px] font-mono uppercase tracking-widest text-slate-400 mt-0.5 transition-colors duration-300">
                  Zimbabwe
                </span>
              </div>
            </Link>

            <NavbarLinks />

            <div className="flex items-center gap-3">
              <Link
                href="/contact/"
                className="btn-glow inline-flex items-center justify-center rounded-full bg-red-600 px-5 py-2 text-xs font-semibold tracking-wide text-white shadow-md transition-all hover:bg-red-500 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2 focus:ring-offset-black"
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
              <div className="relative h-10 w-28 rounded-md overflow-hidden border border-white/10">
                <Image
                  src="/assets/zitrac-logo.jpg"
                  alt="ZITRAC Logo"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-xs leading-relaxed text-slate-400 font-normal">
                Premier enterprise IT support company in Zimbabwe. Engineering mission-critical infrastructure, custom software, and AI threat defense systems from Harare.
              </p>
            </div>

            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-slate-200 mb-3">
                Core Capabilities
              </h3>
              <ul className="space-y-2 text-xs">
                <li><Link href="/services/it-consulting/" className="hover:text-red-400 transition focus:ring-2 focus:ring-red-600">IT Consulting Zimbabwe</Link></li>
                <li><Link href="/services/software-development/" className="hover:text-red-400 transition focus:ring-2 focus:ring-red-600">Enterprise AI Software</Link></li>
                <li><Link href="/services/web-design-development/" className="hover:text-red-400 transition focus:ring-2 focus:ring-red-600">Web Design Harare</Link></li>
                <li><Link href="/services/cyber-security/" className="hover:text-red-400 transition focus:ring-2 focus:ring-red-600">Automated Threat Defense</Link></li>
                <li><Link href="/services/web-hosting-domain-registration/" className="hover:text-red-400 transition focus:ring-2 focus:ring-red-600">.co.zw Domain Registration</Link></li>
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
                Email: <a href="mailto:info@zitrac.co.zw" className="text-red-400 underline focus:ring-2 focus:ring-red-600">info@zitrac.co.zw</a>
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
                  className="w-full rounded-lg bg-slate-900 border border-slate-800 px-3.5 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-red-600"
                />
                <button
                  type="submit"
                  className="w-full bg-red-600 hover:bg-red-500 text-white text-xs font-semibold py-2 rounded-lg transition focus:outline-none focus:ring-2 focus:ring-red-600"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          <div className="mx-auto max-w-full px-[30px] mt-12 pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
            <div>&copy; {new Date().getFullYear()} ZITRAC Technologies. All rights reserved.</div>
            <div className="flex space-x-6 mt-4 md:mt-0 font-medium">
              <Link href="/about/" className="hover:text-slate-300 transition focus:ring-2 focus:ring-red-600">Corporate Trust</Link>
              <Link href="/contact/" className="hover:text-slate-300 transition focus:ring-2 focus:ring-red-600">Direct Dispatch</Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
