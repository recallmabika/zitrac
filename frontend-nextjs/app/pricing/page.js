import Link from 'next/link';

export const metadata = {
  title: 'Transparent Pricing & Enterprise Engagement Tiers | ZITRAC',
  description: 'Review transparent enterprise pricing structures for managed IT services, custom software engineering, cybersecurity watchdogs, and cPanel hosting in Zimbabwe.',
  openGraph: {
    title: 'Pricing & Engagement Tiers | ZITRAC Technologies',
    description: 'Transparent engineering tiers, hosting plans, and managed IT packages in Zimbabwe.',
    url: 'https://zitrac.co.zw/pricing/',
    images: [{ url: 'https://media.zitrac.co.zw/og-general-1200x630.jpg', width: 1200, height: 630 }],
  },
};

const pricingTiers = [
  {
    tier: 'Growth Tier',
    category: 'Essential Web & Domains',
    price: 'Custom Scope',
    billing: 'Annual commitment',
    description: 'Ideal for local SMEs requiring lightning-fast web infrastructure, official .co.zw registration, and guaranteed uptime.',
    features: [
      '1 Free .co.zw Domain Registration',
      '10 GB NVMe High-Speed SSD Storage',
      'Unmetered Bandwidth & SSL Certificates',
      '5 Corporate Encrypted Mailboxes',
      'Standard 99.9% Uptime Discipline',
    ],
    cta: 'Select Growth Tier',
    highlight: false,
  },
  {
    tier: 'Enterprise Business',
    category: 'Full-Stack Software & Hosting',
    price: 'Tailored Retainer',
    billing: 'Monthly / Quarterly SLA',
    description: 'For organizations modernizing digital operations with bespoke software modules, automated workflows, and dedicated support.',
    features: [
      'Custom Software Development & AI Integration',
      '35 GB NVMe Cloud Hosting Infrastructure',
      'Continuous Automated Threat Mitigation Watchdogs',
      'Unlimited Corporate Mailboxes & MX Redundancy',
      'Priority 4-Hour Incident Response SLA',
      'Direct Access to Senior Harare Tech Consultants',
    ],
    cta: 'Engage Enterprise Tier',
    highlight: true,
  },
  {
    tier: 'Mission-Critical SOC',
    category: 'Defense & Cloud Infrastructure',
    price: 'Bespoke Contract',
    billing: 'Annual Enterprise Agreement',
    description: 'Dedicated cloud architecture, military-grade PBKDF2 data protection, disaster recovery runbooks, and offensive penetration auditing.',
    features: [
      'Zero-Trust IAM & Multi-Cloud Cluster Deployments',
      'Automated Offsite Database Replication & R2 Vaults',
      'Bespoke ERP & Internal Core System Engineering',
      '24/7 AI-Driven Autonomous Threat Monitoring',
      'Sub-1-Hour Emergency Incident Resolution SLA',
      'Custom Multi-Currency Financial Ledger Integration',
    ],
    cta: 'Request Executive Consultation',
    highlight: false,
  },
];

export default function PricingPage() {
  return (
    <div className="py-12 md:py-20">
      <div className="mx-auto max-w-full px-[30px] space-y-12">
        <header className="max-w-4xl space-y-4">
          <div className="text-xs font-mono font-bold uppercase tracking-widest text-red-500">
            Transparent Engagement Models
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Predictable Investment for Enterprise-Grade Performance
          </h1>
          <p className="text-base text-slate-300 leading-relaxed max-w-3xl">
            Choose the engagement tier matching your operational footprint. Every agreement includes certified SLA uptime benchmarks, transparent scoping, and direct engineering access.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4">
          {pricingTiers.map((p, i) => (
            <div
              key={i}
              className={`rounded-2xl border p-8 flex flex-col justify-between ${
                p.highlight
                  ? 'border-red-600 bg-slate-950/90 shadow-2xl shadow-red-950/30'
                  : 'border-white/10 bg-slate-950/60'
              }`}
            >
              <div>
                <div className="text-xs font-mono font-semibold uppercase tracking-wider text-red-400 mb-2">
                  {p.category}
                </div>
                <h2 className="text-2xl font-bold text-white mb-2">{p.tier}</h2>
                <div className="text-3xl font-extrabold text-white mt-4">{p.price}</div>
                <div className="text-xs text-slate-400 font-mono mb-4">{p.billing}</div>
                <p className="text-xs text-slate-300 leading-relaxed mb-6">{p.description}</p>

                <ul className="space-y-3 text-xs text-slate-300 border-t border-white/10 pt-6 mb-8">
                  {p.features.map((f, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-red-500 font-bold mt-0.5">&#10003;</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <Link
                  href={`/contact/?tier=${encodeURIComponent(p.tier)}`}
                  className={`block w-full text-center rounded-full py-3.5 text-xs font-bold uppercase tracking-wider transition-all focus:outline-none ${
                    p.highlight
                      ? 'bg-red-600 text-white hover:bg-red-500 hover:scale-105'
                      : 'border border-white/20 bg-white/5 text-white hover:bg-white/10 hover:scale-105'
                  }`}
                >
                  {p.cta}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
