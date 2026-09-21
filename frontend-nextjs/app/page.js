import Link from 'next/link';

export const metadata = {
  title: 'Managed IT Services & Software Development Zimbabwe | ZITRAC',
  description: 'Partner with ZITRAC Technologies, a leading IT consulting firm in Zimbabwe. We deliver enterprise software development, cybersecurity, and hosting solutions.',
  openGraph: {
    title: 'Managed IT Services & Software Development Zimbabwe | ZITRAC',
    description: 'Partner with ZITRAC Technologies, a leading IT consulting firm in Zimbabwe. Enterprise software, cybersecurity, and hosting.',
    url: 'https://zitrac.co.zw/',
    images: [{ url: 'https://media.zitrac.co.zw/og-general-1200x630.jpg', width: 1200, height: 630 }],
  },
};

export default function HomePage() {
  return (
    <div className="space-y-24 py-12 md:py-20">
      {/* Hero Section */}
      <section className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-950/40 px-3 py-1 text-xs font-semibold text-red-400">
            <span className="h-2 w-2 rounded-full bg-red-500 animate-pulse"></span>
            Enterprise Computing & Digital Architecture
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl sm:leading-none">
            Enterprise IT Consulting and Custom Software Development in Zimbabwe
          </h1>
          <p className="text-lg leading-relaxed text-slate-300">
            At ZITRAC Technologies, we bridge the gap between complex computing concepts and active enterprise deployment. As a premier <strong className="text-white font-semibold">IT support company in Zimbabwe</strong>, we engineer bespoke technological solutions designed to streamline workflows, protect digital assets, and drive operational efficiency. From our engineering hub, our <strong className="text-white font-semibold">tech consultants in Harare</strong> provide end-to-end management of corporate networks, cloud computing transitions, and full-stack systems built to stay working.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <Link
              href="/contact/"
              className="rounded-lg bg-red-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg transition hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2 focus:ring-offset-slate-950"
            >
              Request Strategic Consultation
            </Link>
            <Link
              href="/services/"
              className="rounded-lg border border-slate-700 bg-slate-900 px-6 py-3.5 text-sm font-semibold text-slate-200 transition hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-red-600"
            >
              Explore Solutions Directory
            </Link>
          </div>
        </div>
      </section>

      {/* Service Capabilities Grid */}
      <section className="mx-auto max-w-7xl px-6">
        <div className="mb-12">
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Integrated Technical Core Competencies
          </h2>
          <p className="mt-2 text-sm text-slate-400">
            Engineered specifically to satisfy enterprise availability thresholds and regional infrastructure demands.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-6 transition hover:border-slate-700">
            <h3 className="text-xl font-bold text-white mb-2">IT Consulting & Support</h3>
            <p className="text-sm text-slate-400 mb-4 leading-relaxed">
              High-intent strategic tech guidance, infrastructure audits, and round-the-clock systems support across Harare and broader Zimbabwe.
            </p>
            <Link href="/services/it-consulting/" className="text-xs font-semibold text-red-400 hover:text-red-300">
              Read Consulting Specs &rarr;
            </Link>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-6 transition hover:border-slate-700">
            <h3 className="text-xl font-bold text-white mb-2">Custom Software & AI</h3>
            <p className="text-sm text-slate-400 mb-4 leading-relaxed">
              Bespoke applications engineered with intelligent automation algorithms, tailored database transactions, and scalable cloud microservices.
            </p>
            <Link href="/services/software-development/" className="text-xs font-semibold text-red-400 hover:text-red-300">
              Explore AI Software Architecture &rarr;
            </Link>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-6 transition hover:border-slate-700">
            <h3 className="text-xl font-bold text-white mb-2">Cyber Security Watchdogs</h3>
            <p className="text-sm text-slate-400 mb-4 leading-relaxed">
              Continuous threat mitigation and AI-driven automated surveillance algorithms guarding enterprise corporate perimeters.
            </p>
            <Link href="/services/cyber-security/" className="text-xs font-semibold text-red-400 hover:text-red-300">
              Inspect Security Protocols &rarr;
            </Link>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-6 transition hover:border-slate-700">
            <h3 className="text-xl font-bold text-white mb-2">Web Design & Development</h3>
            <p className="text-sm text-slate-400 mb-4 leading-relaxed">
              Ultra-fast, accessible digital frontends built for maximum search visibility, flawless technical SEO, and conversion velocity in Harare.
            </p>
            <Link href="/services/web-design-development/" className="text-xs font-semibold text-red-400 hover:text-red-300">
              Review Web Engineering &rarr;
            </Link>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-6 transition hover:border-slate-700">
            <h3 className="text-xl font-bold text-white mb-2">Web Hosting & .co.zw Domains</h3>
            <p className="text-sm text-slate-400 mb-4 leading-relaxed">
              Reliable cPanel hosting tiers, high-speed regional DNS resolution, and automated official .co.zw domain registration processing.
            </p>
            <Link href="/services/web-hosting-domain-registration/" className="text-xs font-semibold text-red-400 hover:text-red-300">
              Choose Hosting Tier &rarr;
            </Link>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-6 transition hover:border-slate-700">
            <h3 className="text-xl font-bold text-white mb-2">Corporate Cloud Migration</h3>
            <p className="text-sm text-slate-400 mb-4 leading-relaxed">
              Seamless migration of legacy files, on-premise hardware, and unstructured media to modern Cloudflare R2 and AWS architectures.
            </p>
            <Link href="/contact/" className="text-xs font-semibold text-red-400 hover:text-red-300">
              Schedule Migration Audit &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Trust & Authority Signals Banner */}
      <section className="mx-auto max-w-7xl px-6">
        <div className="rounded-2xl border border-slate-800 bg-gradient-to-r from-slate-900 via-slate-900/90 to-red-950/40 p-8 md:p-12">
          <div className="max-w-2xl space-y-4">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              Engineered for Zero Downtime & Maximum Technical Compliance
            </h2>
            <p className="text-sm leading-relaxed text-slate-300">
              Whether you require emergency server stabilization in Harare or an end-to-end multi-tier software rollout, ZITRAC delivers verified engineering precision backed by SLA commitments.
            </p>
            <div className="pt-2">
              <Link
                href="/contact/"
                className="inline-block rounded-lg bg-red-600 px-5 py-2.5 text-xs font-semibold text-white hover:bg-red-700 transition focus:outline-none focus:ring-2 focus:ring-red-600"
              >
                Initiate Project Brief
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
