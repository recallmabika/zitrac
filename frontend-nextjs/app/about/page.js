import Link from 'next/link';

export const metadata = {
  title: 'About ZITRAC Technologies | Engineered for Resilience. Built to Stay Working.',
  description: 'ZITRAC Technologies is Zimbabwe’s foremost indigenous enterprise engineering house, bridging world-class software and cloud architectures with Southern Africa’s real-world operational realities.',
  openGraph: {
    title: 'About ZITRAC Technologies | Enterprise IT Consulting Zimbabwe',
    description: 'Engineered for Resilience. Built to Stay Working. Zimbabwe’s foremost indigenous enterprise engineering house.',
    url: 'https://zitrac.co.zw/about/',
    images: [{ url: 'https://media.zitrac.co.zw/og-about-1200x630.jpg', width: 1200, height: 630 }],
  },
};

export default function AboutPage() {
  const coreValues = [
    {
      num: '01',
      title: 'Hardened Resilience',
      desc: 'We do not build for ideal conditions; we design for real-world operational realities. ZITRAC systems are engineered to endure Southern Africa’s unique infrastructure, economic, and environmental pressures. If it isn\'t built to stay working, it isn\'t finished.',
    },
    {
      num: '02',
      title: 'Pragmatic Ingenuity',
      desc: 'We reject technology for technology\'s sake. We translate elite global cloud and software architectures into practical, high-availability tools that solve immediate, tangible operational bottlenecks for our clients.',
    },
    {
      num: '03',
      title: 'Ironclad Sovereignty',
      desc: 'Trust is built on security. We treat cybersecurity and data protection as core pillars of structural integrity, shielding the critical digital assets of the region\'s finance, education, conservation, and commercial sectors.',
    },
    {
      num: '04',
      title: 'Indigenous Leadership',
      desc: 'We take immense pride in building a world-class technology consulting powerhouse right here in Zimbabwe. We prove every day that homegrown talent can deliver elite enterprise engineering on par with global giants.',
    },
    {
      num: '05',
      title: 'Technological Self-Reliance',
      desc: 'Our ultimate metric of success is the independence of our clients and our region. We foster sustainable digital transformation that reduces dependency on external legacy systems, allowing African enterprises to control their own digital destinies.',
    },
  ];

  return (
    <div className="services-page-wrapper relative bg-white dark:bg-black transition-colors duration-300">
      {/* ──────────────────────────────────────────────────────────
          HERO SECTION: FULL WINDOW (min-h-screen)
          - Borderless monochrome dark canvas (no images)
          - Docked content card with breadcrumbs
          - Slow-motion line-by-line entrance
          ────────────────────────────────────────────────────────── */}
      <section className="relative z-10 w-full min-h-screen flex flex-col justify-end bg-black overflow-hidden">
        {/* Docked Content Card */}
        <div className="relative z-10 w-full flex justify-end">
          <div className="relative w-full md:w-[62%] lg:w-[56%] min-h-[48vh] lg:min-h-[52vh] bg-white text-slate-900 rounded-none rounded-tl-[48px] sm:rounded-tl-[64px] shadow-2xl p-8 sm:p-12 lg:p-16 flex flex-col justify-center animate-drop-top">
            {/* Floating Breadcrumb Tab */}
            <nav
              aria-label="Breadcrumb"
              className="absolute -top-3.5 left-8 sm:left-14 px-4 py-0.5 bg-white inline-flex items-center gap-2 rounded-t-lg shadow-none"
            >
              <Link
                href="/"
                className="font-raleway text-xs sm:text-sm font-semibold uppercase tracking-[0.22em] text-slate-500 hover:text-red-600 transition-colors"
              >
                HOME
              </Link>
              <span className="text-slate-400 font-raleway text-xs sm:text-sm select-none">/</span>
              <span className="font-raleway text-xs sm:text-sm font-semibold uppercase tracking-[0.22em] text-slate-900">
                About Us
              </span>
            </nav>

            <div className="space-y-5">
              <div className="text-xs sm:text-sm font-mono uppercase tracking-[0.22em] text-slate-500 animate-drop-top delay-100">
                Zimbabwe&apos;s Indigenous Enterprise Engineering House
              </div>

              <h1 className="hero-title-drop font-raleway text-3xl sm:text-5xl lg:text-[3.25rem] font-light tracking-[0.02em] text-slate-900 leading-[1.15] sm:leading-[1.2]">
                Engineered for Resilience. <br className="hidden sm:inline" />
                <span className="font-medium text-slate-950">Built to Stay Working.</span>
              </h1>

              <p className="hero-desc-zoom font-raleway text-base sm:text-lg lg:text-xl text-slate-600 leading-relaxed font-light text-justify">
                ZITRAC Technologies is Zimbabwe’s foremost indigenous enterprise engineering house. We bridge the gap between world-class software and cloud architectures and Southern Africa’s real-world operational challenges.
              </p>

              <div className="flex items-center gap-2 pt-2 text-xs sm:text-sm font-mono text-slate-500 animate-drop-top delay-300">
                <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Harare Headquarters &bull; Zero Single Points of Failure</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────
          MAIN BODY: EXPANDED FULL-WIDTH CONTAINER (px-[30px])
          - NO images
          - Full width utilization across the screen
          - Clean borderless typography (no box borders on Vision/Mission)
          - Core Values indented to the right under Principles
          ────────────────────────────────────────────────────────── */}
      <main className="relative z-10 mx-auto w-full max-w-full px-[30px] py-20 lg:py-28 space-y-28">
        
        {/* Core Narrative / Philosophy (Full screen width, no empty right side) */}
        <section className="space-y-8 w-full">
          <div className="animate-drop-top delay-100 inline-flex items-center gap-2 text-xs sm:text-sm font-mono uppercase tracking-[0.22em] text-neutral-500 dark:text-neutral-400">
            <span className="w-2 h-2 rounded-full bg-neutral-900 dark:bg-white" />
            Corporate Philosophy
          </div>

          <h2 className="animate-drop-top delay-200 font-raleway text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-light text-neutral-900 dark:text-white leading-[1.15] tracking-tight">
            Technology should never be a single point of failure.
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 pt-2">
            <p className="animate-drop-top delay-300 text-neutral-600 dark:text-neutral-300 text-lg sm:text-2xl lg:text-[1.65rem] leading-relaxed font-light text-justify">
              At our core, we believe that technology should empower, not constrain. We partner with organizations across the region to deploy high-availability infrastructure, intelligent automation, and hardened security systems that keep business moving forward.
            </p>

            <p className="animate-drop-top delay-400 text-neutral-500 dark:text-neutral-400 text-base sm:text-xl lg:text-2xl leading-relaxed font-light text-justify">
              Whether orchestrating sovereign data vaults, provisioning unthrottled local DNS and NVMe hosting pipelines, or authoring custom multi-tenant ERP software for schools and corporate enterprises, we engineer solutions designed to excel under real Southern African conditions.
            </p>
          </div>
        </section>

        {/* Our Foundation: Vision & Mission (NO border boxes, clean full-width presentation) */}
        <section className="space-y-10 w-full">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4">
            <div>
              <div className="animate-drop-top delay-100 text-xs sm:text-sm font-mono uppercase tracking-[0.22em] text-neutral-500 dark:text-neutral-400 mb-2">
                Our Foundation
              </div>
              <h2 className="animate-drop-top delay-200 font-raleway text-3xl sm:text-5xl lg:text-6xl font-light text-neutral-900 dark:text-white">
                Purpose &amp; Direction
              </h2>
            </div>
            <span className="animate-drop-top delay-100 text-xs sm:text-sm font-mono text-neutral-500 dark:text-neutral-400">
              STRATEGIC CHARTER
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 pt-2">
            {/* Vision (No border box) */}
            <div className="space-y-6">
              <div className="animate-drop-top delay-100 text-xs sm:text-sm font-mono uppercase tracking-[0.24em] text-neutral-500 dark:text-neutral-400">
                OUR VISION
              </div>
              <h3 className="animate-drop-top delay-200 font-raleway text-2xl sm:text-4xl lg:text-[2.65rem] font-light text-neutral-900 dark:text-white leading-tight">
                Southern Africa&apos;s Premier Infrastructure Powerhouse
              </h3>
              <p className="animate-drop-top delay-300 text-neutral-600 dark:text-neutral-300 text-base sm:text-xl lg:text-[1.35rem] leading-relaxed font-light text-justify">
                To become Southern Africa&apos;s premier technology infrastructure and software consulting powerhouse, delivering resilient enterprise systems that drive digital transformation across education, conservation, finance, and industrial commerce.
              </p>
            </div>

            {/* Mission (No border box) */}
            <div className="space-y-6">
              <div className="animate-drop-top delay-100 text-xs sm:text-sm font-mono uppercase tracking-[0.24em] text-neutral-500 dark:text-neutral-400">
                OUR MISSION
              </div>
              <h3 className="animate-drop-top delay-200 font-raleway text-2xl sm:text-4xl lg:text-[2.65rem] font-light text-neutral-900 dark:text-white leading-tight">
                Eliminating Operational Bottlenecks
              </h3>
              <p className="animate-drop-top delay-300 text-neutral-600 dark:text-neutral-300 text-base sm:text-xl lg:text-[1.35rem] leading-relaxed font-light text-justify">
                To engineer purpose-built, high-availability technological infrastructure, intelligent software automation, and hardened cybersecurity systems that eliminate operational bottlenecks, ensure business continuity, and foster technological self-reliance in Africa.
              </p>
            </div>
          </div>
        </section>

        {/* ──────────────────────────────────────────────────────────
            OUR CORE VALUES:
            - Parent title: "The Principles That Guide Our Work"
            - Indented to the right (pl-6 sm:pl-12 lg:pl-20 or ml-8 sm:ml-16) to establish hierarchy
            - Very big text sizes, smooth line drops
            ────────────────────────────────────────────────────────── */}
        <section className="space-y-12 w-full">
          <div>
            <div className="animate-drop-top delay-100 text-xs sm:text-sm font-mono uppercase tracking-[0.22em] text-neutral-500 dark:text-neutral-400 mb-2">
              Our Core Values
            </div>
            <h2 className="animate-drop-top delay-200 font-raleway text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-light text-neutral-900 dark:text-white">
              The Principles That Guide Our Work
            </h2>
            <p className="animate-drop-top delay-300 mt-3 text-base sm:text-xl lg:text-2xl text-neutral-600 dark:text-neutral-400 font-light">
              The principles that guide every line of code we write and every architecture we deploy.
            </p>
          </div>

          {/* Indented Core Values block (moved to the right under the Principles title) */}
          <div className="pl-6 sm:pl-12 lg:pl-20 border-l border-neutral-200 dark:border-white/[0.08] space-y-14 sm:space-y-20 pt-4">
            {coreValues.map((value) => (
              <div
                key={value.title}
                className="space-y-5 w-full"
              >
                <div className="animate-drop-top delay-100 flex items-center gap-3">
                  <span className="font-mono text-sm sm:text-base font-bold text-neutral-400 dark:text-neutral-500 tracking-widest">
                    {value.num}
                  </span>
                  <span className="h-px w-10 bg-neutral-300 dark:bg-neutral-800" />
                  <span className="text-xs sm:text-sm font-mono uppercase tracking-[0.24em] text-neutral-500 dark:text-neutral-400">
                    CORE VALUE
                  </span>
                </div>

                <h3 className="animate-drop-top delay-200 font-raleway text-3xl sm:text-5xl lg:text-6xl font-light text-neutral-900 dark:text-white tracking-tight">
                  {value.title}
                </h3>

                <p className="animate-drop-top delay-300 text-neutral-600 dark:text-neutral-300 text-lg sm:text-2xl lg:text-[1.65rem] leading-relaxed font-light text-justify">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ──────────────────────────────────────────────────────────
            EXACT REQUESTED STYLE: ENTERPRISE CALLOUT BANNER
            - Matches the user's uploaded screenshot exactly:
              * Asymmetric rounded-tr-[56px] and rounded-bl-[56px] container
              * Floating top border label: "ENTERPRISE DEPLOYMENT INQUIRIES"
              * Big heading & justified description on the left
              * Flush Telephone and Email cards with red & dark icon slabs on the right
              * Bold red "INITIATE ARCHITECTURAL BRIEF" rounded button
            ────────────────────────────────────────────────────────── */}
        <section className="relative mt-16 bg-[#0c121d] dark:bg-[#070b12] text-white p-10 sm:p-16 lg:p-20 rounded-none rounded-tr-[56px] sm:rounded-tr-[72px] rounded-bl-[56px] sm:rounded-bl-[72px] shadow-none animate-drop-top">
          {/* Floating Label sitting on top border - BORDERLESS with rounded top two corners */}
          <div className="absolute -top-4 left-8 sm:left-14 px-5 py-1 bg-[#0c121d] dark:bg-[#070b12] inline-flex items-center rounded-t-xl shadow-none">
            <span className="font-raleway text-xs sm:text-sm font-semibold uppercase tracking-[0.22em] text-slate-300">
              Enterprise Deployment Inquiries
            </span>
          </div>

          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12 lg:gap-16 pt-3">
            {/* Left Column: Heading and Justified Description */}
            <div className="flex-1 space-y-6 max-w-2xl text-left">
              <h2 className="font-raleway text-2xl sm:text-4xl lg:text-[2.75rem] font-light tracking-[0.04em] text-white leading-[1.3] sm:leading-[1.35]">
                Have an Enterprise System Requirement?
              </h2>

              <p className="font-raleway text-sm sm:text-base lg:text-lg text-slate-300 leading-[1.8] sm:leading-[1.9] tracking-wide font-light text-justify">
                Our engineering team directly assesses infrastructure requirements and delivers actionable technical roadmaps. Contact us today to discuss your timeline and technical scope.
              </p>
            </div>

            {/* Right Column: Contact details & Action Button */}
            <div className="w-full lg:w-auto shrink-0 flex flex-col items-start lg:items-end gap-5">
              {/* Telephone Hotline: Full card turns red on hover, clean phone icon */}
              <a
                href="tel:+263718001031"
                className="group w-full sm:w-[380px] bg-[#141d2e] dark:bg-[#0f1726] hover:!bg-red-600 rounded-xl overflow-hidden flex items-stretch shadow-sm transition-all duration-300 cursor-pointer"
              >
                <div className="w-14 sm:w-16 bg-red-600 group-hover:bg-red-700 flex items-center justify-center shrink-0 transition-colors">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-2.2 2.2a15.053 15.053 0 01-6.59-6.59l2.2-2.21a.96.96 0 00.25-1A11.36 11.36 0 018.5 3.92c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.54c0-.55-.45-1-.99-1z" />
                  </svg>
                </div>
                <div className="px-5 py-3.5 flex flex-col justify-center flex-1">
                  <span className="text-[10px] uppercase tracking-wider text-slate-400 group-hover:text-white/80 font-semibold font-mono transition-colors">Telephone Hotline</span>
                  <span className="text-white font-bold text-sm sm:text-base font-raleway">
                    +263 71 800 1031
                  </span>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:info@zitrac.co.zw"
                className="group w-full sm:w-[380px] bg-[#141d2e] dark:bg-[#0f1726] hover:!bg-[#1e293b] dark:hover:!bg-[#1a2333] rounded-xl overflow-hidden flex items-stretch shadow-sm transition-all duration-300 cursor-pointer"
              >
                <div className="w-14 sm:w-16 bg-slate-800 dark:bg-slate-700 flex items-center justify-center shrink-0">
                  <svg
                    className="w-6 h-6 text-white fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                </div>
                <div className="px-5 py-3.5 flex flex-col justify-center flex-1">
                  <span className="text-[10px] uppercase tracking-wider text-slate-400 group-hover:text-white/80 font-semibold font-mono transition-colors">Direct Technical Email</span>
                  <span className="text-slate-200 group-hover:text-white font-semibold text-xs sm:text-sm font-raleway transition-colors">
                    info@zitrac.co.zw
                  </span>
                </div>
              </a>

              {/* Action Button on the right with loading-style hover/focus wipe */}
              <div className="w-full sm:w-[380px]">
                <Link
                  href="/contact/"
                  className="service-interactive-btn service-interactive-btn-cta w-full inline-flex items-center justify-center py-5 sm:py-5 text-sm sm:text-base font-bold uppercase tracking-wider rounded-full bg-red-600 text-white hover:scale-105 active:scale-95 transition-all focus:outline-none shadow-none text-center"
                >
                  Start a Project
                </Link>
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
