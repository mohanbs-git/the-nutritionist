import { getCaseStudies } from '@/lib/content';

export default function Testimonials() {
  const cases = getCaseStudies();

  return (
    <section id="testimonials" className="scroll-mt-20 border-b border-brand-line bg-brand-cloud pt-10 pb-16 lg:pt-12 lg:pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/50 text-[#1B4332] text-[11px] font-semibold tracking-wider uppercase mb-3">
            Clinical Outcomes
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-950 leading-tight">
            Documented Lab Improvements
          </h2>
          <p className="text-sm sm:text-base text-gray-600 mt-3 leading-relaxed">
            Real health transformations backed by diagnostic blood panels and sustainable lifestyle habits.
          </p>
        </div>

        {/* Dynamic Compact Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cases.map((c, index) => (
            <div
              key={c.id || index}
              className="bg-white rounded-2xl p-7 sm:p-8 border border-gray-200/80 shadow-sm hover:shadow-md hover:border-gray-300 transition-all flex flex-col justify-between"
            >
              <div>
                {/* Top Outcome Pill */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-5">
                  <span className="text-xs font-semibold text-[#1B4332] bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-200/70 inline-flex items-center gap-1.5">
                    <span className="text-[#B48A3C]">✦</span>
                    <span>{c.outcome}</span>
                  </span>
                  <span className="text-[11px] uppercase tracking-wider font-semibold text-gray-400">
                    {c.timeline}
                  </span>
                </div>

                {/* Patient Quote */}
                <p className="text-base sm:text-lg text-gray-800 leading-relaxed italic mb-5 font-serif">
                  “{c.quote}”
                </p>
              </div>

              {/* Bottom Patient Info */}
              <div className="pt-5 border-t border-gray-100 flex items-center justify-between text-xs">
                <div>
                  <div className="font-serif font-bold text-gray-950 text-base">
                    {c.patient}
                  </div>
                  <div className="text-xs text-gray-500 mt-0.5">
                    {c.profession} • {c.location}
                  </div>
                </div>
                {c.verified && (
                  <span className="text-[11px] font-semibold text-[#1B4332] bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">
                    ✓ Verified Record
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
