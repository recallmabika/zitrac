import Link from 'next/link';

export default function MetricsBanner() {
  const metrics = [
    {
      product: "Online Admissions Portal",
      stat: "100%",
      desc: "AUTOMATED APPLICANT SCREENING & ZERO PAPER INTAKE.",
      link: "/services/software-development/"
    },
    {
      product: "School Management System",
      stat: "5X",
      desc: "FASTER FEE CLEARANCES VIA DIRECT PAYMENT GATEWAYS.",
      link: "/services/software-development/"
    },
    {
      product: "Managed Cloud & SOC",
      stat: "99.9%",
      desc: "ENTERPRISE UPTIME SLA WITH ZERO-TRUST ARCHITECTURE.",
      link: "/services/it-consulting/"
    }
  ];

  return (
    <section className="w-full bg-[#080808] border-b border-white/5 py-10 px-[30px] relative z-20">
      <div className="max-w-[1400px] mx-auto flex flex-col xl:flex-row items-start xl:items-center justify-between gap-12">
        
        <div className="flex flex-col md:flex-row items-start justify-between w-full xl:w-auto flex-1 gap-10 md:gap-8 lg:gap-16">
          {metrics.map((item, idx) => (
            <div key={idx} className="flex flex-col gap-4 flex-1 w-full border-l border-white/5 pl-4 md:border-none md:pl-0">
              {/* Product/System Name */}
              <div className="font-raleway text-sm md:text-base font-extrabold tracking-[0.16em] text-white uppercase">
                {item.product}
              </div>
              <div className="flex items-center gap-4">
                {/* Big Stat */}
                <div className="text-4xl md:text-5xl font-light text-white tracking-tighter">
                  {item.stat}
                </div>
                {/* Description & Link */}
                <div className="max-w-[180px] flex flex-col gap-1">
                  <p className="text-[10px] md:text-[11px] font-mono text-slate-400 uppercase leading-relaxed">
                    {item.desc}
                  </p>
                  <Link href={item.link} className="text-[10px] md:text-[11px] font-mono text-red-500 hover:text-red-400 transition-colors uppercase font-bold mt-1 group">
                    Read More <span className="inline-block transition-transform group-hover:translate-x-1">&rarr;</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* CTA Button */}
        <div className="shrink-0 w-full md:w-auto text-left">
          <Link
            href="/contact/"
            className="btn-glow inline-block rounded-full bg-red-600 px-8 py-4 text-xs font-bold uppercase tracking-wider text-white hover:bg-red-500 hover:scale-105 active:scale-95 transition-all focus:outline-none whitespace-nowrap"
          >
            Book A Demo
          </Link>
        </div>
        
      </div>
    </section>
  );
}
