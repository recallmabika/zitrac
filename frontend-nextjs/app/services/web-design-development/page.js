import Link from 'next/link';

export const metadata = {
  title: 'Custom Web Design & Development Services Harare | ZITRAC',
  description: 'Get fast, reliable, custom-made websites. ZITRAC delivers high-converting web design and development solutions for businesses throughout Zimbabwe.',
  openGraph: {
    title: 'Custom Web Design & Development Services Harare | ZITRAC',
    description: 'Get fast, reliable, custom-made websites with ZITRAC Technologies.',
    url: 'https://zitrac.co.zw/services/web-design-development/',
    images: [{ url: 'https://media.zitrac.co.zw/og-web-design-1200x630.jpg', width: 1200, height: 630 }],
  },
};

export default function WebDesignDevelopmentPage() {
  return (
    <div className="py-12 md:py-20">
      <div className="mx-auto max-w-full px-[30px] space-y-12">
        <header className="space-y-4">
          <div className="text-xs font-bold uppercase tracking-widest text-red-500">Frontend Engineering</div>
          <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
            Tailored Web Design and Full-Stack Development Solutions
          </h1>
          <p className="text-base leading-relaxed text-slate-300">
            Slow, template-heavy websites damage search visibility and lose prospective clients. ZITRAC delivers premier <strong className="text-white font-semibold">Custom Web Design & Development Services in Harare</strong>. We architect ultra-fast, accessible digital frontends compiled directly into static assets to guarantee sub-second page loads and top-tier search engine indexing.
          </p>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 border-t border-slate-800 pt-8">
          <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-6 space-y-3">
            <div className="text-red-400 font-bold text-sm uppercase">100/100 Core Web Vitals</div>
            <h2 className="text-lg font-bold text-white">Split-Architecture Speed</h2>
            <p className="text-xs text-slate-400 leading-relaxed">
              We separate public marketing layers from heavy backend computations, ensuring instant delivery directly out of high-speed static CDN caches.
            </p>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-6 space-y-3">
            <div className="text-red-400 font-bold text-sm uppercase">Technical SEO Groundwork</div>
            <h2 className="text-lg font-bold text-white">Search Crawler Dominance</h2>
            <p className="text-xs text-slate-400 leading-relaxed">
              Automated sitemaps, JSON-LD structured schema injections, clean canonical paths, and rich Open Graph protocols embedded at build time.
            </p>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-6 space-y-3">
            <div className="text-red-400 font-bold text-sm uppercase">Universal a11y</div>
            <h2 className="text-lg font-bold text-white">Full Accessibility</h2>
            <p className="text-xs text-slate-400 leading-relaxed">
              High-contrast keyboard focus indicators, strict label bindings, and ARIA live regions that guarantee complete compliance for all users.
            </p>
          </div>
        </section>

        <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h3 className="text-xl font-bold text-white mb-1">Build Your Next Digital Platform</h3>
            <p className="text-xs text-slate-400">Launch a website engineered for conversion and technical excellence.</p>
          </div>
          <Link
            href="/contact/"
            className="rounded-lg bg-red-600 px-6 py-3 text-xs font-semibold text-white hover:bg-red-700 transition focus:outline-none focus:ring-2 focus:ring-red-600"
          >
            Start Web Project Brief
          </Link>
        </div>
      </div>
    </div>
  );
}
