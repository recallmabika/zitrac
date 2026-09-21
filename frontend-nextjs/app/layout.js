import './globals.css';
import Link from 'next/link';

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
    logo: 'https://media.zitrac.co.zw/logo.png',
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
    <html lang="en" className="h-full bg-slate-950 text-slate-100 antialiased">
      <head>
        <link rel="canonical" href="https://zitrac.co.zw/" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="flex min-h-full flex-col bg-slate-950 text-slate-100">
        {/* Accessible Skip Link */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:bg-red-600 focus:text-white focus:px-4 focus:py-2 focus:rounded shadow-lg"
        >
          Skip to main content
        </a>

        {/* Global Navigation */}
        <header className="sticky top-0 z-40 w-full border-b border-slate-800/80 bg-slate-950/90 backdrop-blur">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
            <Link
              href="/"
              className="flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-red-600 rounded-md"
              aria-label="ZITRAC Technologies Homepage"
            >
              <span className="text-2xl font-black tracking-tight text-white">
                ZITRAC<span className="text-red-500">.</span>
              </span>
              <span className="text-xs uppercase tracking-widest text-slate-400 font-semibold border-l border-slate-700 pl-2">
                Zimbabwe
              </span>
            </Link>

            <nav aria-label="Main Navigation" className="hidden md:flex items-center space-x-8 text-sm font-medium">
              <Link
                href="/services/"
                className="text-slate-300 hover:text-white transition focus:outline-none focus:ring-2 focus:ring-red-600 rounded px-2 py-1"
              >
                Services
              </Link>
              <Link
                href="/services/it-consulting/"
                className="text-slate-300 hover:text-white transition focus:outline-none focus:ring-2 focus:ring-red-600 rounded px-2 py-1"
              >
                IT Consulting
              </Link>
              <Link
                href="/services/software-development/"
                className="text-slate-300 hover:text-white transition focus:outline-none focus:ring-2 focus:ring-red-600 rounded px-2 py-1"
              >
                Software & AI
              </Link>
              <Link
                href="/services/cyber-security/"
                className="text-slate-300 hover:text-white transition focus:outline-none focus:ring-2 focus:ring-red-600 rounded px-2 py-1"
              >
                Cyber Security
              </Link>
              <Link
                href="/services/web-hosting-domain-registration/"
                className="text-slate-300 hover:text-white transition focus:outline-none focus:ring-2 focus:ring-red-600 rounded px-2 py-1"
              >
                Hosting & Domains
              </Link>
              <Link
                href="/about/"
                className="text-slate-300 hover:text-white transition focus:outline-none focus:ring-2 focus:ring-red-600 rounded px-2 py-1"
              >
                About
              </Link>
              <Link
                href="/contact/"
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-semibold shadow-md transition focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2 focus:ring-offset-slate-950"
              >
                Contact Us
              </Link>
            </nav>
          </div>
        </header>

        {/* Core Content View */}
        <main id="main-content" className="flex-grow">
          {children}
        </main>

        {/* Accessible Footer */}
        <footer className="border-t border-slate-800 bg-slate-900/60 py-12 text-sm text-slate-400">
          <div className="mx-auto max-w-7xl px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <span className="text-xl font-black text-white">
                ZITRAC<span className="text-red-500">.</span>
              </span>
              <p className="text-xs leading-relaxed text-slate-400">
                Premier enterprise IT support company in Zimbabwe. Engineering mission-critical infrastructure, custom software, and AI threat defense systems from Harare.
              </p>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-200 mb-3">
                Core Capabilities
              </h3>
              <ul className="space-y-2 text-xs">
                <li><Link href="/services/it-consulting/" className="hover:text-red-400 focus:ring-2 focus:ring-red-600">IT Consulting Zimbabwe</Link></li>
                <li><Link href="/services/software-development/" className="hover:text-red-400 focus:ring-2 focus:ring-red-600">Enterprise AI Software</Link></li>
                <li><Link href="/services/web-design-development/" className="hover:text-red-400 focus:ring-2 focus:ring-red-600">Web Design Harare</Link></li>
                <li><Link href="/services/cyber-security/" className="hover:text-red-400 focus:ring-2 focus:ring-red-600">Automated Threat Defense</Link></li>
                <li><Link href="/services/web-hosting-domain-registration/" className="hover:text-red-400 focus:ring-2 focus:ring-red-600">.co.zw Domain Registration</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-200 mb-3">
                Corporate Footprint
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed mb-2">
                Harare Innovation Corridor<br />
                Harare, Zimbabwe
              </p>
              <p className="text-xs text-slate-400">
                Email: <a href="mailto:info@zitrac.co.zw" className="text-red-400 underline focus:ring-2 focus:ring-red-600">info@zitrac.co.zw</a>
              </p>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-200 mb-3">
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
                  className="w-full rounded bg-slate-800 border border-slate-700 px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-red-600"
                />
                <button
                  type="submit"
                  className="w-full bg-red-600 hover:bg-red-700 text-white text-xs font-semibold py-2 rounded focus:outline-none focus:ring-2 focus:ring-red-600"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          <div className="mx-auto max-w-7xl px-6 mt-8 pt-6 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
            <div>&copy; {new Date().getFullYear()} ZITRAC Technologies. All rights reserved.</div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/about/" className="hover:text-slate-400 focus:ring-2 focus:ring-red-600">Corporate Trust</Link>
              <Link href="/contact/" className="hover:text-slate-400 focus:ring-2 focus:ring-red-600">Direct Dispatch</Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
