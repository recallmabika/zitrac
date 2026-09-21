import Link from 'next/link';

export const metadata = {
  title: 'Enterprise Cyber Security Company in Zimbabwe | ZITRAC',
  description: 'Protect your corporate data assets. ZITRAC leverages advanced AI automated watchdogs to deliver comprehensive cyber security solutions.',
  openGraph: {
    title: 'Enterprise Cyber Security Company in Zimbabwe | ZITRAC',
    description: 'Protect corporate data assets with advanced AI automated watchdogs and threat detection.',
    url: 'https://zitrac.co.zw/services/cyber-security/',
    images: [{ url: 'https://media.zitrac.co.zw/og-security-1200x630.jpg', width: 1200, height: 630 }],
  },
};

export default function CyberSecurityPage() {
  return (
    <div className="py-12 md:py-20">
      <div className="mx-auto max-w-full px-[30px] space-y-12">
        <header className="space-y-4">
          <div className="text-xs font-bold uppercase tracking-widest text-red-500">Threat Mitigation & Zero-Trust</div>
          <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
            Advanced Cyber Security and Automated Threat Mitigation
          </h1>
          <p className="text-base leading-relaxed text-slate-300">
            Corporate digital perimeters face continuous automated scanning from malicious entities worldwide. ZITRAC establishes your organization as an impenetrable fortress, leading as the premier <strong className="text-white font-semibold">Enterprise Cyber Security Company in Zimbabwe</strong>. We deploy intelligent defense routines powered by <strong className="text-white font-semibold">AI automated threat detection watchdogs</strong> guarding data bounds around the clock.
          </p>
        </header>

        <section className="space-y-6 border-t border-slate-800 pt-8">
          <h2 className="text-2xl font-bold text-white">Multi-Layered Security Architecture</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-6 space-y-3">
              <div className="text-xs font-bold uppercase tracking-wider text-red-400">Autonomous Monitoring</div>
              <h3 className="text-lg font-bold text-white">AI Automated Threat Detection Watchdogs</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Active daemon processes analyze incoming traffic patterns, detecting SQL injection vectors, brute-force access spikes, and distributed credential stuffing attempts before endpoints are breached.
              </p>
            </div>

            <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-6 space-y-3">
              <div className="text-xs font-bold uppercase tracking-wider text-red-400">Penetration Testing</div>
              <h3 className="text-lg font-bold text-white">Vulnerability Assessments & Auditing</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Rigorous offensive security assessments targeting internal enterprise networks, firewalls, and customer-facing web applications to identify and patch vulnerabilities before adversaries exploit them.
              </p>
            </div>

            <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-6 space-y-3">
              <div className="text-xs font-bold uppercase tracking-wider text-red-400">Access Governance</div>
              <h3 className="text-lg font-bold text-white">Zero-Trust Identity & Access Management</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Enforcing strict role-based authorization parameters, multi-factor cryptographic keys, and ephemeral session policies across all administrative interfaces.
              </p>
            </div>

            <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-6 space-y-3">
              <div className="text-xs font-bold uppercase tracking-wider text-red-400">Data Integrity</div>
              <h3 className="text-lg font-bold text-white">Cryptographic Data-at-Rest Protection</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Implementation of military-grade AES-256 and PBKDF2 hashing routines across local databases and external Cloudflare R2 vaults, keeping confidential client records inaccessible to unauthorized parties.
              </p>
            </div>
          </div>
        </section>

        <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h3 className="text-xl font-bold text-white mb-1">Fortify Your Enterprise Defense</h3>
            <p className="text-xs text-slate-400">Engage our Harare cybersecurity engineers for a comprehensive vulnerability audit.</p>
          </div>
          <Link
            href="/contact/"
            className="rounded-lg bg-red-600 px-6 py-3 text-xs font-semibold text-white hover:bg-red-700 transition focus:outline-none"
          >
            Request Security Audit
          </Link>
        </div>
      </div>
    </div>
  );
}
