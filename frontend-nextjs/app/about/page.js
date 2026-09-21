import Link from 'next/link';

export const metadata = {
  title: 'Corporate Profile & Engineering Authority | ZITRAC Technologies',
  description: 'Learn about ZITRAC Technologies, a distinguished IT consulting and software development firm headquartered in Harare, Zimbabwe.',
  openGraph: {
    title: 'About ZITRAC Technologies | Enterprise IT Consulting Zimbabwe',
    description: 'Corporate profile, trust credentials, and technical leadership in Zimbabwe.',
    url: 'https://zitrac.co.zw/about/',
    images: [{ url: 'https://media.zitrac.co.zw/og-about-1200x630.jpg', width: 1200, height: 630 }],
  },
};

export default function AboutPage() {
  return (
    <div className="py-12 md:py-20">
      <div className="mx-auto max-w-full px-[30px] space-y-12">
        <header className="space-y-4">
          <div className="text-xs font-bold uppercase tracking-widest text-red-500">Corporate Authority & Trust</div>
          <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
            Pioneering Enterprise Computing & Robust Digital Solutions in Zimbabwe
          </h1>
          <p className="text-base leading-relaxed text-slate-300">
            Founded with a mandate to elevate technological infrastructure across Southern Africa, ZITRAC Technologies delivers mission-critical IT engineering, hardened cybersecurity watchdogs, and scalable software solutions.
          </p>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t border-slate-800">
          <div className="space-y-3">
            <h2 className="text-xl font-bold text-white">Our Engineering Philosophy</h2>
            <p className="text-sm text-slate-400 leading-relaxed">
              We reject brittle, off-the-shelf templates in favor of resilient, purpose-built systems. Every architecture we produce is optimized for low-latency delivery, zero unnecessary dependencies, and compliance with global uptime benchmarks.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-bold text-white">Regional Presence, Global Standards</h2>
            <p className="text-sm text-slate-400 leading-relaxed">
              Based in Harare, our team of dedicated software engineers, network architects, and cybersecurity specialists operates with deep knowledge of local operating constraints, power contingencies, and regional telecommunications topology.
            </p>
          </div>
        </section>

        <section className="rounded-xl border border-slate-800 bg-slate-900/60 p-8 space-y-6">
          <h2 className="text-2xl font-bold text-white">Verified Technical Capabilities</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm">
            <div>
              <div className="text-red-400 font-bold text-lg mb-1">99.98%</div>
              <div className="text-slate-300 font-medium">Uptime Discipline</div>
              <div className="text-xs text-slate-500 mt-1">High-availability architecture deployment across hybrid environments.</div>
            </div>
            <div>
              <div className="text-red-400 font-bold text-lg mb-1">AI-Powered</div>
              <div className="text-slate-300 font-medium">Threat Mitigation</div>
              <div className="text-xs text-slate-500 mt-1">Surveillance algorithms and automated watchdog monitors.</div>
            </div>
            <div>
              <div className="text-red-400 font-bold text-lg mb-1">100/100</div>
              <div className="text-slate-300 font-medium">Technical SEO Score</div>
              <div className="text-xs text-slate-500 mt-1">Sub-second page rendering and clean crawler accessibility.</div>
            </div>
          </div>
        </section>

        <div className="pt-6">
          <Link
            href="/contact/"
            className="inline-block rounded-lg bg-red-600 px-6 py-3 text-sm font-semibold text-white shadow-md hover:bg-red-700 transition focus:outline-none focus:ring-2 focus:ring-red-600"
          >
            Connect with Our Engineering Desk
          </Link>
        </div>
      </div>
    </div>
  );
}
