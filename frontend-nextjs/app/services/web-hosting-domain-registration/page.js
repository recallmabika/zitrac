import Link from 'next/link';

export const metadata = {
  title: 'Fast Web Hosting and Domain Registration Zimbabwe | ZITRAC',
  description: 'Secure your digital visibility. ZITRAC offers fast, reliable web hosting packages and local .co.zw domain registration services for local businesses.',
  openGraph: {
    title: 'Fast Web Hosting and Domain Registration Zimbabwe | ZITRAC',
    description: 'Secure your digital visibility with fast cPanel hosting and local .co.zw domain registration.',
    url: 'https://zitrac.co.zw/services/web-hosting-domain-registration/',
    images: [{ url: 'https://media.zitrac.co.zw/og-hosting-1200x630.jpg', width: 1200, height: 630 }],
  },
};

const packages = [
  {
    name: 'Starter',
    tagline: 'Ideal for local SMEs, personal brands, and static web profiles.',
    storage: '10 GB NVMe SSD',
    bandwidth: 'Unmetered Bandwidth',
    domains: '1 Free .co.zw Domain',
    emails: '5 Professional Mailboxes',
    badge: 'Standard',
  },
  {
    name: 'Business',
    tagline: 'Engineered for growing businesses, portals, and dynamic web apps.',
    storage: '35 GB NVMe SSD',
    bandwidth: 'Unmetered Bandwidth',
    domains: '1 Free .co.zw Domain',
    emails: 'Unlimited Mailboxes',
    badge: 'Most Popular',
    popular: true,
  },
  {
    name: 'Enterprise',
    tagline: 'Dedicated CPU allocation for mission-critical software and high-traffic sites.',
    storage: '100 GB NVMe SSD',
    bandwidth: 'Priority Fiber Routing',
    domains: 'Free Multiple .co.zw Domains',
    emails: 'Enterprise Mail Gateway',
    badge: 'High Performance',
  },
];

export default function WebHostingDomainRegistrationPage() {
  return (
    <div className="py-12 md:py-20">
      <div className="mx-auto max-w-6xl px-6 space-y-12">
        <header className="max-w-3xl space-y-4">
          <div className="text-xs font-bold uppercase tracking-widest text-red-500">Cloud & Infrastructure</div>
          <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
            Reliable Web Hosting Packages and Domain Registration
          </h1>
          <p className="text-base leading-relaxed text-slate-300">
            Establish and protect your corporate online identity with <strong className="text-white font-semibold">Fast Web Hosting Packages and Domain Registration in Zimbabwe</strong>. We facilitate immediate registration of official Zimbabwean top-level domains (<span className="text-red-400 font-mono">.co.zw</span>, <span className="text-red-400 font-mono">.org.zw</span>) backed by high-availability cPanel infrastructure with Python and Node.js runtime support.
          </p>
        </header>

        {/* Tier Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`rounded-2xl border p-8 flex flex-col justify-between ${
                pkg.popular
                  ? 'border-red-600 bg-slate-900/90 shadow-2xl shadow-red-950/30'
                  : 'border-slate-800 bg-slate-900/40'
              }`}
            >
              <div>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-red-400">
                    {pkg.badge}
                  </span>
                </div>
                <h2 className="text-2xl font-bold text-white mb-2">{pkg.name} Tier</h2>
                <p className="text-xs text-slate-400 mb-6">{pkg.tagline}</p>

                <ul className="space-y-3 text-sm text-slate-300 mb-8 border-t border-slate-800 pt-6">
                  <li className="flex items-center gap-2">
                    <span className="text-red-500 font-bold">&#10003;</span>
                    {pkg.storage}
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-red-500 font-bold">&#10003;</span>
                    {pkg.bandwidth}
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-red-500 font-bold">&#10003;</span>
                    {pkg.domains}
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-red-500 font-bold">&#10003;</span>
                    {pkg.emails}
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-red-500 font-bold">&#10003;</span>
                    SSL Certificate Included
                  </li>
                </ul>
              </div>

              <div>
                <Link
                  href={`/contact/?service=Web+Hosting&tier=${pkg.name}`}
                  className={`block w-full text-center rounded-lg py-3 text-xs font-bold uppercase tracking-wider transition focus:outline-none focus:ring-2 focus:ring-red-600 ${
                    pkg.popular
                      ? 'bg-red-600 text-white hover:bg-red-700'
                      : 'bg-slate-800 text-slate-200 hover:bg-slate-700'
                  }`}
                >
                  Request {pkg.name} Setup
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* .co.zw Registration Details */}
        <section className="rounded-xl border border-slate-800 bg-slate-900/50 p-8 space-y-4">
          <h2 className="text-xl font-bold text-white">Local .co.zw Domain Delegation Procedures</h2>
          <p className="text-sm text-slate-400 leading-relaxed">
            We handle DNS delegation directly with Zimbabwean registry authorities, ensuring your domain records and MX mail routing tables are configured with DNSSEC standards and high-speed TTL records.
          </p>
        </section>
      </div>
    </div>
  );
}
