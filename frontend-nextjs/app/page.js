import Link from 'next/link';
import Image from 'next/image';

import HeroBackground from './components/HeroBackground';

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
    <div className="relative overflow-hidden bg-black">
      {/* Hero Section with Ambient Cinematic Video Background & Converging Glow Animations */}
      <section className="relative z-10 w-full min-h-screen flex items-center pt-24 pb-8 border-b border-white/5">
        <HeroBackground />

        <div className="relative z-10 w-full mx-auto px-[30px]">
          <div className="max-w-5xl space-y-6 py-10 md:py-14">
            {/* Mega Display H1 - Elegant Raleway Typography matching company mark */}
          <div className="overflow-hidden">
            <h1 className="hero-title-line font-raleway text-[2.1rem] sm:text-4xl md:text-5xl lg:text-[3.25rem] font-light tracking-[0.04em] text-white leading-[1.3]">
              Enterprise IT Consulting and Custom Software Development in Zimbabwe
            </h1>
          </div>

          {/* Subheading text block with relaxed letter spacing */}
          <p className="hero-fade-up font-raleway text-sm sm:text-base md:text-lg text-slate-300 leading-relaxed max-w-4xl font-light tracking-wide">
            At ZITRAC Technologies, we bridge the gap between complex computing concepts and active enterprise deployment. As a premier <strong className="text-white font-medium">IT support company in Zimbabwe</strong>, we engineer bespoke technological solutions designed to streamline workflows, protect digital assets, and drive operational efficiency. From our engineering hub, our <strong className="text-white font-medium">tech consultants in Harare</strong> provide end-to-end management of corporate networks, cloud computing transitions, and full-stack systems built to stay working.
          </p>

          {/* Action Button Row - Rounded Pills */}
          <div className="hero-fade-up flex flex-wrap items-center gap-4 pt-2">
            <Link
              href="/contact/"
              className="btn-glow rounded-full bg-red-600 px-8 py-3.5 text-sm font-bold text-white shadow-xl hover:bg-red-500 hover:scale-105 active:scale-95 transition-all focus:outline-none"
            >
              Start Building With Us
            </Link>

            <Link
              href="/services/"
              className="rounded-full border border-white/20 bg-white/10 hover:bg-white hover:text-black backdrop-blur px-8 py-3.5 text-sm font-medium text-white transition-all hover:scale-105 focus:outline-none"
            >
              Explore Solutions
            </Link>
          </div>

          {/* Authority Trust Metrics (Logo removed) */}
          <div className="hero-fade-up pt-2 flex items-center gap-3">
            <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></div>
            <span className="text-xs font-mono text-slate-400">
              Active Enterprise Cloud Deployments in Harare &bull; 99.98% High Availability Uptime SLA
            </span>
          </div>
          </div>
        </div>
        
        {/* Red Scrolling Marquee Trust Strip - Docked to bottom of hero */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden bg-red-600/95 backdrop-blur py-5 z-20 border-y border-red-500/30">
          <div className="marquee-track flex whitespace-nowrap">
            {[0, 1].map((i) => (
              <div key={i} className="marquee-content flex items-center gap-8 px-4 shrink-0" aria-hidden={i === 1}>
                <span className="font-raleway text-xs font-semibold uppercase tracking-[0.25em] text-white/90">Next.js</span>
                <span className="text-white/40">✦</span>
                <span className="font-raleway text-xs font-semibold uppercase tracking-[0.25em] text-white/90">Python Flask</span>
                <span className="text-white/40">✦</span>
                <span className="font-raleway text-xs font-semibold uppercase tracking-[0.25em] text-white/90">Cloudflare R2</span>
                <span className="text-white/40">✦</span>
                <span className="font-raleway text-xs font-semibold uppercase tracking-[0.25em] text-white/90">Zero-Trust IAM</span>
                <span className="text-white/40">✦</span>
                <span className="font-raleway text-xs font-semibold uppercase tracking-[0.25em] text-white/90">AI Automation</span>
                <span className="text-white/40">✦</span>
                <span className="font-raleway text-xs font-semibold uppercase tracking-[0.25em] text-white/90">cPanel Hosting</span>
                <span className="text-white/40">✦</span>
                <span className="font-raleway text-xs font-semibold uppercase tracking-[0.25em] text-white/90">DNSSEC</span>
                <span className="text-white/40">✦</span>
                <span className="font-raleway text-xs font-semibold uppercase tracking-[0.25em] text-white/90">TLS 1.3</span>
                <span className="text-white/40">✦</span>
                <span className="font-raleway text-xs font-semibold uppercase tracking-[0.25em] text-white/90">.co.zw Domains</span>
                <span className="text-white/40">✦</span>
                <span className="font-raleway text-xs font-semibold uppercase tracking-[0.25em] text-white/90">AWS S3</span>
                <span className="text-white/40">✦</span>
                <span className="font-raleway text-xs font-semibold uppercase tracking-[0.25em] text-white/90">99.98% Uptime SLA</span>
                <span className="text-white/40">✦</span>
                <span className="font-raleway text-xs font-semibold uppercase tracking-[0.25em] text-white/90">SOC Monitoring</span>
                <span className="text-white/40">✦</span>
                <span className="font-raleway text-xs font-semibold uppercase tracking-[0.25em] text-white/90">Harare Engineering Hub</span>
                <span className="text-white/40">✦</span>
              </div>
            ))}
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
          
          {/* Cloud Infrastructure Visual - decorative right side */}
          <div className="absolute right-0 bottom-0 w-[45%] h-full pointer-events-none hidden md:block">
            <Image
              src="/assets/cloud-infrastructure.png"
              alt=""
              width={700}
              height={450}
              className="absolute bottom-0 right-0 w-full h-auto opacity-20 object-contain mix-blend-screen"
              unoptimized
              aria-hidden="true"
            />
          </div>

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
                className="btn-glow inline-block rounded-full bg-red-600 px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-red-500 hover:scale-105 transition-all focus:outline-none"
              >
                Initiate Project Brief
              </Link>
              <Link
                href="/about/"
                className="inline-block rounded-full border border-white/20 bg-white/5 hover:bg-white/10 px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-white hover:scale-105 transition-all focus:outline-none"
              >
                Corporate Profile
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Global Network Reach Visual Section */}
      <section className="relative z-10 mx-auto max-w-full px-[30px]">
        <div className="animate-on-scroll rounded-3xl border border-white/10 bg-slate-950/80 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-center">
            {/* Visual Side */}
            <div className="relative p-8 md:p-12 flex items-center justify-center">
              <Image
                src="/assets/global-network.png"
                alt="Global network infrastructure with connected endpoints"
                width={600}
                height={450}
                className="w-full h-auto max-w-md object-contain"
                unoptimized
              />
            </div>
            {/* Content Side */}
            <div className="p-8 md:p-12 space-y-5">
              <div className="text-xs font-mono font-bold tracking-widest text-red-500 uppercase">
                GLOBAL REACH
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight">
                Connected Infrastructure Across Every Endpoint
              </h2>
              <p className="text-sm text-slate-400 leading-relaxed">
                From enterprise CDN distribution to real-time SOC monitoring nodes, ZITRAC deploys interconnected systems that keep your data flowing and your perimeter sealed — with 100% deployment completion guarantees.
              </p>
              <Link
                href="/services/"
                className="inline-flex items-center text-xs font-bold text-red-400 hover:text-red-300 tracking-wider uppercase"
              >
                Explore Full Architecture <span className="ml-1.5">&rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
