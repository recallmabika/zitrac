import Link from 'next/link';

export const metadata = {
  title: 'Custom Software Development Companies in Zimbabwe | ZITRAC',
  description: 'Scale your business operations with custom software development integrated with artificial intelligence. Explore advanced software solutions with ZITRAC.',
  openGraph: {
    title: 'Custom Software Development Companies in Zimbabwe | ZITRAC',
    description: 'Scale your business operations with custom software development integrated with artificial intelligence.',
    url: 'https://zitrac.co.zw/services/software-development/',
    images: [{ url: 'https://media.zitrac.co.zw/og-software-dev-1200x630.jpg', width: 1200, height: 630 }],
  },
};

export default function SoftwareDevelopmentPage() {
  return (
    <div className="py-12 md:py-20">
      <div className="mx-auto max-w-full px-[30px] space-y-12">
        <header className="space-y-4">
          <div className="text-xs font-bold uppercase tracking-widest text-red-500">Custom Engineering & AI</div>
          <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
            Enterprise Software Development with Artificial Intelligence Integration
          </h1>
          <p className="text-base leading-relaxed text-slate-300">
            Among top-tier <strong className="text-white font-semibold">Custom Software Development Companies in Zimbabwe</strong>, ZITRAC stands out by integrating advanced machine intelligence directly into practical operational workflows. We engineer tailor-made software solutions that automate redundant processes, streamline relational data transactions, and grant leadership real-time operational clarity.
          </p>
        </header>

        <section className="space-y-6 border-t border-slate-800 pt-8">
          <h2 className="text-2xl font-bold text-white">AI Implementation & Automation Profiles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-6 space-y-3">
              <h3 className="text-lg font-bold text-white">Predictive Analytics & Workflow Automation</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Embedding intelligent automation pipelines into existing enterprise applications. Our algorithms process transaction records, anticipate inventory requirements, and eliminate administrative friction.
              </p>
            </div>

            <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-6 space-y-3">
              <h3 className="text-lg font-bold text-white">Bespoke Enterprise Resource Planning (ERP)</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Tailored accounting, supply chain, and human resource management suites configured explicitly for multi-currency operations and Zimbabwean regulatory compliance.
              </p>
            </div>

            <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-6 space-y-3">
              <h3 className="text-lg font-bold text-white">Microservices & Asynchronous Architecture</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Decoupled backend API endpoints running robust Python Flask and FastAPI engines, keeping public search frontends completely isolated from complex server computations.
              </p>
            </div>

            <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-6 space-y-3">
              <h3 className="text-lg font-bold text-white">Cloud Object Streaming & Storage Integration</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Direct-to-cloud file vaults using Cloudflare R2 and AWS S3 APIs, keeping application servers lightweight, stateless, and instantly horizontally scalable.
              </p>
            </div>
          </div>
        </section>

        <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h3 className="text-xl font-bold text-white mb-1">Architect Your Enterprise Software</h3>
            <p className="text-xs text-slate-400">Consult with senior full-stack software architects in Harare.</p>
          </div>
          <Link
            href="/contact/"
            className="rounded-lg bg-red-600 px-6 py-3 text-xs font-semibold text-white hover:bg-red-700 transition focus:outline-none"
          >
            Request Software Proposal
          </Link>
        </div>
      </div>
    </div>
  );
}
