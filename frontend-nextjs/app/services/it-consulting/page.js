import Link from 'next/link';

export const metadata = {
  title: 'Professional IT Consultant & Technical Support Zimbabwe | ZITRAC',
  description: 'Maximize operational efficiency with ZITRAC Technologies, a premier IT consultant firm in Zimbabwe. We translate theoretical knowledge into practical tech solutions.',
  openGraph: {
    title: 'Professional IT Consultant & Technical Support Zimbabwe | ZITRAC',
    description: 'Maximize operational efficiency with ZITRAC Technologies, a premier IT consultant firm in Zimbabwe.',
    url: 'https://zitrac.co.zw/services/it-consulting/',
    images: [{ url: 'https://media.zitrac.co.zw/og-it-consulting-1200x630.jpg', width: 1200, height: 630 }],
  },
};

export default function ITConsultingPage() {
  return (
    <div className="py-12 md:py-20">
      <div className="mx-auto max-w-full px-[30px] space-y-12">
        <header className="space-y-4">
          <div className="text-xs font-bold uppercase tracking-widest text-red-500">Infrastructure & Advisory</div>
          <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
            Practical IT Consulting Services for Businesses Across Zimbabwe
          </h1>
          <p className="text-base leading-relaxed text-slate-300">
            Navigating technical transitions requires experienced, field-tested guidance. ZITRAC Technologies operates as your high-level <strong className="text-white font-semibold">Professional IT Consultant</strong> and direct provider of dependable <strong className="text-white font-semibold">Technical Support in Zimbabwe</strong>. We translate complex hardware, cloud, and networking concepts into robust, profitable business operations.
          </p>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-slate-800 pt-8">
          <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-6 space-y-3">
            <h2 className="text-lg font-bold text-white">Corporate Network Architecture</h2>
            <p className="text-sm text-slate-400 leading-relaxed">
              Design, configuration, and monitoring of high-throughput local networks, VPN tunnels, and redundant ISP failover systems engineered for Zimbabwean telecom conditions.
            </p>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-6 space-y-3">
            <h2 className="text-lg font-bold text-white">Disaster Recovery & Redundancy</h2>
            <p className="text-sm text-slate-400 leading-relaxed">
              Automated off-site database replication, cold-storage archiving, and rapid restoration runbooks that protect your enterprise against hardware failure or ransomware events.
            </p>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-6 space-y-3">
            <h2 className="text-lg font-bold text-white">Cloud Migration & Hybrid Stacks</h2>
            <p className="text-sm text-slate-400 leading-relaxed">
              Strategic execution moving legacy on-premise servers into performant hybrid cloud environments, optimizing bandwidth costs and local latency.
            </p>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-6 space-y-3">
            <h2 className="text-lg font-bold text-white">SLA-Backed Technical Support</h2>
            <p className="text-sm text-slate-400 leading-relaxed">
              Dedicated response desk providing preventative maintenance, system health checks, and rapid intervention whenever production incidents occur.
            </p>
          </div>
        </section>

        <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h3 className="text-xl font-bold text-white mb-1">Require an Immediate Technical Assessment?</h3>
            <p className="text-xs text-slate-400">Our consultants in Harare conduct comprehensive infrastructure audits.</p>
          </div>
          <Link
            href="/contact/"
            className="rounded-lg bg-red-600 px-6 py-3 text-xs font-semibold text-white hover:bg-red-700 transition focus:outline-none focus:ring-2 focus:ring-red-600"
          >
            Schedule IT Audit
          </Link>
        </div>
      </div>
    </div>
  );
}
