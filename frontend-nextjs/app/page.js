import Link from 'next/link';
import Image from 'next/image';
import ShellSnippet from './components/ShellSnippet';

export const metadata = {
  title: 'Managed IT Services & Software Development Zimbabwe | ZITRAC',
  description: 'Partner with ZITRAC Technologies, a leading IT consulting firm in Zimbabwe. We deliver enterprise software development, cybersecurity, and hosting solutions.',
  openGraph: {
    title: 'Managed IT Services & Software Development Zimbabwe | ZITRAC',
    description: 'Partner with ZITRAC Technologies, a premier IT consulting firm in Zimbabwe. Enterprise software, cybersecurity, and hosting.',
    url: 'https://zitrac.co.zw/',
    images: [{ url: 'https://media.zitrac.co.zw/og-general-1200x630.jpg', width: 1200, height: 630 }],
  },
};

export default function HomePage() {
  return (
    <div className="space-y-32 py-12 md:py-24 relative overflow-hidden">
      {/* Background terminal/matrix code watermark mimicking the Sanity reference image */}
      <div 
        aria-hidden="true" 
        className="absolute inset-0 pointer-events-none select-none z-0 overflow-hidden font-mono text-[16px] sm:text-[20px] md:text-[26px] leading-[1.8] text-white/[0.035] whitespace-pre pl-6 pt-8"
      >
{`create-agent with sanity context
  → Install: universal agents
  → Link: Claude Code, Cursor, Codex
The Content Operations Platform
  → Power content applications and AI workflows at scale
  → Fast API endpoints & direct streaming
  → Automated threat watchdogs guarding enterprise data`}
      </div>

      {/* Hero Section - Sanity Styled Typography & Spacing */}
      <section className="relative z-10 mx-auto max-w-full px-[30px]">
        <div className="max-w-5xl space-y-8">
          
          {/* Subtle Tag / Pill */}
          <div className="animate-on-scroll inline-flex items-center gap-2.5 rounded-full border border-red-500/20 bg-red-950/30 px-3.5 py-1 text-xs font-medium text-red-400">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
            </span>
            <span className="tracking-wide">Enterprise Computing &amp; Digital Architecture</span>
          </div>

          {/* Mega Display H1 - Sanity Reference Style (Extra Large, Tight Tracking, Clean Sans) */}
          <div className="overflow-hidden">
            <h1 className="hero-title-line text-5xl sm:text-7xl md:text-8xl lg:text-[92px] font-extrabold tracking-tight text-white leading-[1.02]">
              Enterprise IT Consulting and Custom Software Development in Zimbabwe
            </h1>
          </div>

          {/* Subheading text block */}
          <p className="hero-fade-up text-lg sm:text-xl md:text-2xl text-slate-300 leading-relaxed max-w-4xl font-normal">
            At ZITRAC Technologies, we bridge the gap between complex computing concepts and active enterprise deployment. As a premier <strong className="text-white font-semibold">IT support company in Zimbabwe</strong>, we engineer bespoke technological solutions designed to streamline workflows, protect digital assets, and drive operational efficiency. From our engineering hub, our <strong className="text-white font-semibold">tech consultants in Harare</strong> provide end-to-end management of corporate networks, cloud computing transitions, and full-stack systems built to stay working.
          </p>

          {/* Action Button Row - Rounded Pills and Interactive Code Snippet as in Sanity Image */}
          <div className="hero-fade-up flex flex-wrap items-center gap-4 pt-4">
            <Link
              href="/contact/"
              className="btn-glow rounded-full bg-red-600 px-8 py-4 text-sm sm:text-base font-bold text-white shadow-xl hover:bg-red-500 hover:scale-105 active:scale-95 transition-all focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2 focus:ring-offset-black"
            >
              Start Building With Us
            </Link>

            <Link
              href="/services/"
              className="rounded-full border border-white/20 bg-white/5 hover:bg-white/10 px-8 py-4 text-sm sm:text-base font-medium text-white transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-600"
            >
              Explore Solutions
            </Link>

            {/* Interactive Shell Snippet like in Sanity image */}
            <ShellSnippet />
          </div>

          {/* Logo Showcase Callout */}
          <div className="pt-6 flex items-center gap-4">
            <div className="relative h-12 w-28 rounded-lg overflow-hidden border border-white/15 shadow-xl">
              <Image
                src="/assets/zitrac-logo.jpg"
                alt="ZITRAC Logo Badge"
                fill
                className="object-cover"
              />
            </div>
            <span className="text-xs font-mono text-slate-400">
              Trusted by enterprise leaders across Zimbabwe &bull; 99.98% High Availability Uptime SLA
            </span>
          </div>

        </div>
      </section>

      {/* Service Capabilities Grid with Smooth Motion & Lift */}
      <section className="relative z-10 mx-auto max-w-full px-[30px]">
        <div className="animate-on-scroll mb-14">
          <div className="text-xs font-mono font-semibold tracking-widest text-red-500 uppercase mb-2">
            ARCHITECTURE MATRIX
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Integrated Technical Core Competencies
          </h2>
          <p className="mt-3 text-base text-slate-400 max-w-3xl">
            Engineered specifically to satisfy enterprise availability thresholds and regional infrastructure demands.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="animate-on-scroll card-hover rounded-2xl border border-white/10 bg-slate-950/80 p-8 flex flex-col justify-between">
            <div>
              <div className="text-xs font-mono text-red-400 mb-3 tracking-wider uppercase font-semibold">01 / Advisory</div>
              <h3 className="text-2xl font-bold text-white mb-3">IT Consulting &amp; Support</h3>
              <p className="text-sm text-slate-400 leading-relaxed mb-6">
                High-intent strategic tech guidance, infrastructure audits, and round-the-clock systems support across Harare and broader Zimbabwe.
              </p>
            </div>
            <Link href="/services/it-consulting/" className="inline-flex items-center text-xs font-bold text-red-400 hover:text-red-300 tracking-wider uppercase">
              Read Consulting Specs <span className="ml-1.5">&rarr;</span>
            </Link>
          </div>

          <div className="animate-on-scroll delay-100 card-hover rounded-2xl border border-white/10 bg-slate-950/80 p-8 flex flex-col justify-between">
            <div>
              <div className="text-xs font-mono text-red-400 mb-3 tracking-wider uppercase font-semibold">02 / AI &amp; Automation</div>
              <h3 className="text-2xl font-bold text-white mb-3">Custom Software &amp; AI</h3>
              <p className="text-sm text-slate-400 leading-relaxed mb-6">
                Bespoke applications engineered with intelligent automation algorithms, tailored database transactions, and scalable cloud microservices.
              </p>
            </div>
            <Link href="/services/software-development/" className="inline-flex items-center text-xs font-bold text-red-400 hover:text-red-300 tracking-wider uppercase">
              Explore AI Architecture <span className="ml-1.5">&rarr;</span>
            </Link>
          </div>

          <div className="animate-on-scroll delay-200 card-hover rounded-2xl border border-white/10 bg-slate-950/80 p-8 flex flex-col justify-between">
            <div>
              <div className="text-xs font-mono text-red-400 mb-3 tracking-wider uppercase font-semibold">03 / Zero-Trust</div>
              <h3 className="text-2xl font-bold text-white mb-3">Cyber Security Watchdogs</h3>
              <p className="text-sm text-slate-400 leading-relaxed mb-6">
                Continuous threat mitigation and AI-driven automated surveillance algorithms guarding enterprise corporate perimeters.
              </p>
            </div>
            <Link href="/services/cyber-security/" className="inline-flex items-center text-xs font-bold text-red-400 hover:text-red-300 tracking-wider uppercase">
              Inspect Security Protocols <span className="ml-1.5">&rarr;</span>
            </Link>
          </div>

          <div className="animate-on-scroll delay-100 card-hover rounded-2xl border border-white/10 bg-slate-950/80 p-8 flex flex-col justify-between">
            <div>
              <div className="text-xs font-mono text-red-400 mb-3 tracking-wider uppercase font-semibold">04 / Frontend UI</div>
              <h3 className="text-2xl font-bold text-white mb-3">Web Design &amp; Development</h3>
              <p className="text-sm text-slate-400 leading-relaxed mb-6">
                Ultra-fast, accessible digital frontends built for maximum search visibility, flawless technical SEO, and conversion velocity in Harare.
              </p>
            </div>
            <Link href="/services/web-design-development/" className="inline-flex items-center text-xs font-bold text-red-400 hover:text-red-300 tracking-wider uppercase">
              Review Web Engineering <span className="ml-1.5">&rarr;</span>
            </Link>
          </div>

          <div className="animate-on-scroll delay-200 card-hover rounded-2xl border border-white/10 bg-slate-950/80 p-8 flex flex-col justify-between">
            <div>
              <div className="text-xs font-mono text-red-400 mb-3 tracking-wider uppercase font-semibold">05 / Infrastructure</div>
              <h3 className="text-2xl font-bold text-white mb-3">Web Hosting &amp; .co.zw Domains</h3>
              <p className="text-sm text-slate-400 leading-relaxed mb-6">
                Reliable cPanel hosting tiers, high-speed regional DNS resolution, and automated official .co.zw domain registration processing.
              </p>
            </div>
            <Link href="/services/web-hosting-domain-registration/" className="inline-flex items-center text-xs font-bold text-red-400 hover:text-red-300 tracking-wider uppercase">
              Choose Hosting Tier <span className="ml-1.5">&rarr;</span>
            </Link>
          </div>

          <div className="animate-on-scroll delay-300 card-hover rounded-2xl border border-white/10 bg-slate-950/80 p-8 flex flex-col justify-between">
            <div>
              <div className="text-xs font-mono text-red-400 mb-3 tracking-wider uppercase font-semibold">06 / Cloud Vaults</div>
              <h3 className="text-2xl font-bold text-white mb-3">Cloud Storage &amp; Migration</h3>
              <p className="text-sm text-slate-400 leading-relaxed mb-6">
                Seamless migration of legacy files and media to modern Cloudflare R2 and AWS S3 architectures with zero local disk footprint.
              </p>
            </div>
            <Link href="/contact/" className="inline-flex items-center text-xs font-bold text-red-400 hover:text-red-300 tracking-wider uppercase">
              Schedule Migration Audit <span className="ml-1.5">&rarr;</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Trust & Authority Signals Banner with Modern Sanity Styling */}
      <section className="relative z-10 mx-auto max-w-full px-[30px]">
        <div className="animate-on-scroll rounded-3xl border border-white/10 bg-gradient-to-b from-slate-950 to-black p-10 md:p-16 relative overflow-hidden">
          <div className="absolute right-0 top-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="max-w-3xl space-y-6 relative z-10">
            <div className="text-xs font-mono font-bold tracking-widest text-red-500 uppercase">
              RELIABILITY BENCHMARK
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Engineered for Zero Downtime &amp; Maximum Technical Compliance
            </h2>
            <p className="text-base text-slate-300 leading-relaxed font-normal">
              Whether you require emergency server stabilization in Harare or an end-to-end multi-tier software rollout, ZITRAC delivers verified engineering precision backed by SLA commitments.
            </p>
            <div className="pt-4 flex flex-wrap gap-4">
              <Link
                href="/contact/"
                className="btn-glow inline-block rounded-full bg-red-600 px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-red-500 hover:scale-105 transition-all focus:outline-none focus:ring-2 focus:ring-red-600"
              >
                Initiate Project Brief
              </Link>
              <Link
                href="/about/"
                className="inline-block rounded-full border border-white/20 bg-white/5 hover:bg-white/10 px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-white hover:scale-105 transition-all focus:outline-none focus:ring-2 focus:ring-red-600"
              >
                Corporate Profile
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
