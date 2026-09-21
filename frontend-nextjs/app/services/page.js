import Link from 'next/link';

export const metadata = {
  title: 'Enterprise IT Services & Engineering Solutions | ZITRAC',
  description: 'Explore the full spectrum of IT consulting, software engineering, cybersecurity, web development, and cloud hosting solutions offered by ZITRAC in Zimbabwe.',
  openGraph: {
    title: 'Services Directory | ZITRAC Technologies Zimbabwe',
    description: 'Comprehensive IT services directory including software development, cybersecurity, and hosting.',
    url: 'https://zitrac.co.zw/services/',
    images: [{ url: 'https://media.zitrac.co.zw/og-services-1200x630.jpg', width: 1200, height: 630 }],
  },
};

const services = [
  {
    slug: 'it-consulting',
    title: 'IT Consulting & Infrastructure',
    tagline: 'Strategic advisory and technical support for businesses across Zimbabwe.',
    badge: 'Enterprise Advisory',
  },
  {
    slug: 'software-development',
    title: 'Custom Software & AI Integration',
    tagline: 'Full-stack software engineering integrated with artificial intelligence.',
    badge: 'AI Powered',
  },
  {
    slug: 'cyber-security',
    title: 'Cyber Security & Automated Watchdogs',
    tagline: 'Hardened corporate defense with automated threat detection routines.',
    badge: 'Zero-Trust',
  },
  {
    slug: 'web-design-development',
    title: 'Custom Web Design & Development',
    tagline: 'High-converting, ultra-fast web architectures engineered in Harare.',
    badge: 'Sub-Second Speeds',
  },
  {
    slug: 'web-hosting-domain-registration',
    title: 'Web Hosting & Domain Registration',
    tagline: 'Local .co.zw domain registration and high-uptime cPanel hosting tiers.',
    badge: '99.98% SLA',
  },
];

export default function ServicesIndexPage() {
  return (
    <div className="py-12 md:py-20">
      <div className="mx-auto max-w-full px-[30px] space-y-12">
        <header className="max-w-3xl space-y-4">
          <div className="text-xs font-bold uppercase tracking-widest text-red-500">Service Categorical Index</div>
          <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
            Enterprise Solutions & Engineering Capabilities
          </h1>
          <p className="text-base text-slate-300">
            ZITRAC delivers end-to-end technical execution across critical technological categories. Select an area of specialization to review architectural specifications.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((svc) => (
            <div
              key={svc.slug}
              className="flex flex-col justify-between rounded-xl border border-slate-800 bg-slate-900/50 p-6 transition hover:border-slate-700"
            >
              <div>
                <span className="inline-block rounded-md bg-red-950/60 border border-red-800/40 px-2.5 py-1 text-xs font-medium text-red-400 mb-4">
                  {svc.badge}
                </span>
                <h2 className="text-xl font-bold text-white mb-2">{svc.title}</h2>
                <p className="text-sm text-slate-400 leading-relaxed mb-6">{svc.tagline}</p>
              </div>
              <div>
                <Link
                  href={`/services/${svc.slug}/`}
                  className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-red-500 hover:text-red-400 focus:outline-none focus:ring-2 focus:ring-red-600 rounded py-1"
                >
                  View Detailed Specs &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
