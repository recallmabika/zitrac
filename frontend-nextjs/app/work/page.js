import Link from 'next/link';

export const metadata = {
  title: 'Engineering Portfolio & Client Deployments | ZITRAC',
  description: 'Explore enterprise technology deployments, bespoke software case studies, and mission-critical cloud migrations engineered by ZITRAC in Zimbabwe.',
  openGraph: {
    title: 'Our Work & Enterprise Case Studies | ZITRAC Technologies',
    description: 'Explore enterprise technology deployments and software systems engineered by ZITRAC in Zimbabwe.',
    url: 'https://zitrac.co.zw/work/',
    images: [{ url: 'https://media.zitrac.co.zw/og-general-1200x630.jpg', width: 1200, height: 630 }],
  },
};

const caseStudies = [
  {
    title: 'Fintech Automated Multi-Currency Reconciliation Engine',
    client: 'Southern African Financial Services Group',
    category: 'Custom Software & AI Automation',
    metrics: '99.99% ledger accuracy, < 1.2s batch execution',
    description: 'Architected an automated transaction matching daemon processing high-volume daily payments with automatic currency valuation, PBKDF2 cryptography, and real-time fraud mitigation watchdogs.',
    tags: ['Python Flask', 'FastAPI', 'MariaDB', 'Zero-Trust IAM'],
  },
  {
    title: 'Enterprise Hybrid Cloud & cPanel Cluster Migration',
    client: 'Industrial Conglomerate Harare',
    category: 'Cloud Migration & Infrastructure',
    metrics: '0 downtime during cutover, 65% latency reduction',
    description: 'Engineered a split-architecture rollout migrating legacy on-premise servers into performant hybrid cPanel instances backed by Cloudflare R2 object storage vaults and redundant ISP failovers.',
    tags: ['Cloudflare R2', 'cPanel Phusion WSGI', 'DNSSEC', 'Disaster Recovery'],
  },
  {
    title: 'Autonomous Threat Defense & SOC Monitoring Daemon',
    client: 'National Logistics & Supply Chain Operator',
    category: 'Cyber Security & Watchdogs',
    metrics: '14,000+ malicious attacks neutralized weekly',
    description: 'Deployed continuous AI threat detection watchdogs analyzing perimeter traffic for distributed brute-force vectors, SQL injection exploits, and suspicious credential patterns.',
    tags: ['AI Watchdog Daemons', 'Automated Firewalling', 'TLS 1.3', 'Vulnerability Audits'],
  },
  {
    title: 'Ultra-Fast Accessible Digital Marketing Ecosystem',
    client: 'Corporate Legal & Advisory Practice Harare',
    category: 'Web Design & Technical SEO',
    metrics: '100/100 Core Web Vitals, #1 Rank Organic SERP',
    description: 'Engineered a pure static export Next.js frontend with sub-second page loads, automated sitemaps, JSON-LD Schema integration, and universal WCAG a11y keyboard compliance.',
    tags: ['Next.js 15+', 'Tailwind CSS', 'Static Export', 'Technical SEO'],
  },
];

export default function WorkPage() {
  return (
    <div className="py-12 md:py-20">
      <div className="mx-auto max-w-full px-[30px] space-y-12">
        <header className="max-w-4xl space-y-4">
          <div className="text-xs font-mono font-bold uppercase tracking-widest text-red-500">
            Case Studies &amp; Engineering Deployments
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Our Work: Enterprise Systems Built to Stay Working
          </h1>
          <p className="text-base text-slate-300 leading-relaxed max-w-3xl">
            Explore verified deployment case studies where ZITRAC Technologies converted complex operational bottlenecks into resilient, automated technological infrastructure across Zimbabwe.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
          {caseStudies.map((cs, i) => (
            <div
              key={i}
              className="card-hover rounded-2xl border border-white/10 bg-slate-950/80 p-8 flex flex-col justify-between"
            >
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                  <span className="text-xs font-mono text-red-400 font-semibold uppercase tracking-wider">
                    {cs.category}
                  </span>
                  <span className="text-[11px] font-mono bg-white/5 border border-white/10 text-slate-300 px-2.5 py-1 rounded-full">
                    {cs.client}
                  </span>
                </div>
                <h2 className="text-2xl font-bold text-white mb-3">{cs.title}</h2>
                <div className="mb-4 inline-block bg-red-950/40 border border-red-800/30 px-3 py-1 rounded-md text-xs font-medium text-red-300">
                  Impact: {cs.metrics}
                </div>
                <p className="text-sm text-slate-400 leading-relaxed mb-6">
                  {cs.description}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                  {cs.tags.map((t, idx) => (
                    <span key={idx} className="text-[11px] font-mono bg-slate-900 text-slate-400 px-2.5 py-1 rounded border border-white/5">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="rounded-3xl border border-white/10 bg-gradient-to-r from-slate-950 via-slate-900 to-red-950/30 p-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h3 className="text-2xl font-bold text-white mb-1">Have an Enterprise Project in Mind?</h3>
            <p className="text-xs text-slate-400">Our senior engineering consultants in Harare conduct comprehensive architectural evaluations.</p>
          </div>
          <Link
            href="/contact/"
            className="btn-glow rounded-full bg-red-600 px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-red-500 transition-all focus:outline-none"
          >
            Initiate Architectural Brief
          </Link>
        </div>
      </div>
    </div>
  );
}
