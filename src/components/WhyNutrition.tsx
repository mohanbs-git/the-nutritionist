export default function WhyNutrition() {
  return (
    <section id="philosophy" className="scroll-mt-20 border-b border-brand-line bg-brand-paper pt-10 pb-16 lg:pt-12 lg:pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/50 text-[#1B4332] text-[11px] font-semibold tracking-wider uppercase mb-3">
            Clinical Methodology
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-950 leading-tight">
            The Science of Sustainable Health
          </h2>
          <p className="text-sm sm:text-base text-gray-600 mt-3 leading-relaxed">
            Your body is not a calorie calculator; it is an intelligent hormonal ecosystem.
          </p>
        </div>

        {/* 3 Visually Crisp Minimalist Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          
          {/* Card 1: Hormones */}
          <div className="p-7 rounded-2xl bg-white border border-gray-200/80 shadow-sm hover:shadow-md hover:border-gray-300 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#1B4332] bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-100">
                  Hormones
                </span>
                <span className="font-serif text-2xl font-bold text-[#1B4332]">01</span>
              </div>
              <h3 className="font-serif text-xl font-bold text-gray-950 mb-2">
                Hormonal Balance
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Sequencing whole carbohydrates and proteins stabilizes fasting insulin, optimizes thyroid conversion, and regulates cycles.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-gray-100 text-xs font-semibold text-[#1B4332] flex items-center gap-1.5">
              <span>✓</span>
              <span>Aligned with your blood panels</span>
            </div>
          </div>

          {/* Card 2: Microbiome */}
          <div className="p-7 rounded-2xl bg-white border border-gray-200/80 shadow-sm hover:shadow-md hover:border-gray-300 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#B48A3C] bg-amber-50 px-2.5 py-1 rounded-full border border-amber-100">
                  Microbiome
                </span>
                <span className="font-serif text-2xl font-bold text-[#B48A3C]">02</span>
              </div>
              <h3 className="font-serif text-xl font-bold text-gray-950 mb-2">
                Gut Barrier Integrity
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                70% of your immune defenses and 90% of serotonin reside in the intestinal mucosa, healed through polyphenol and fiber diversity.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-gray-100 text-xs font-semibold text-[#B48A3C] flex items-center gap-1.5">
              <span>✓</span>
              <span>Eliminates chronic bloating & IBS</span>
            </div>
          </div>

          {/* Card 3: Metabolism */}
          <div className="p-7 rounded-2xl bg-white border border-gray-200/80 shadow-sm hover:shadow-md hover:border-gray-300 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-bold uppercase tracking-wider text-gray-700 bg-gray-100 px-2.5 py-1 rounded-full border border-gray-200">
                  Metabolism
                </span>
                <span className="font-serif text-2xl font-bold text-gray-800">03</span>
              </div>
              <h3 className="font-serif text-xl font-bold text-gray-950 mb-2">
                Glycemic Steadiness
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Preventing steep glucose spikes eliminates mid-afternoon energy crashes, brain fog, and involuntary sugar cravings.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-gray-100 text-xs font-semibold text-gray-700 flex items-center gap-1.5">
              <span>✓</span>
              <span>Steady day-long vitality</span>
            </div>
          </div>

        </div>

        {/* Crisp Visual Comparison Card */}
        <div className="rounded-2xl border border-gray-200 bg-white overflow-hidden shadow-sm grid grid-cols-1 md:grid-cols-2">
          
          {/* Left: Fad Diets */}
          <div className="p-8 sm:p-10 bg-rose-50/20 border-b md:border-b-0 md:border-r border-gray-200 space-y-4">
            <span className="text-[10px] uppercase tracking-widest font-bold text-rose-700 bg-rose-100/70 px-2.5 py-1 rounded-full border border-rose-200">
              Commercial Crash Diets
            </span>
            <h4 className="font-serif text-2xl font-bold text-gray-950">
              Why Temporary Fixes Fail
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-gray-600">
              <div className="flex items-start gap-2.5 text-rose-600">
                <span className="font-bold">✕</span>
                <span>Severe calorie cuts slow your basal metabolic rate (BMR)</span>
              </div>
              <div className="flex items-start gap-2.5 text-rose-600">
                <span className="font-bold">✕</span>
                <span>Demonizing carbohydrates triggers binge-restrict cycles</span>
              </div>
              <div className="flex items-start gap-2.5 text-rose-600">
                <span className="font-bold">✕</span>
                <span>Unrealistic meal plans isolate you from family dinners</span>
              </div>
              <div className="flex items-start gap-2.5 text-rose-600">
                <span className="font-bold">✕</span>
                <span>Rebound weight gain and hair loss within 90 days</span>
              </div>
            </div>
          </div>

          {/* Right: Dt. Thanya's Approach */}
          <div className="p-8 sm:p-10 bg-emerald-50/20 space-y-4">
            <span className="text-[10px] uppercase tracking-widest font-bold text-[#1B4332] bg-emerald-100/70 px-2.5 py-1 rounded-full border border-emerald-200">
              Dt. Thanya’s Clinical Protocol
            </span>
            <h4 className="font-serif text-2xl font-bold text-gray-950">
              Biochemical Metabolic Healing
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-gray-700">
              <div className="flex items-start gap-2.5 text-emerald-800">
                <span className="font-bold">✓</span>
                <span>Custom nutrition calibrated to your thyroid and fasting insulin panels</span>
              </div>
              <div className="flex items-start gap-2.5 text-emerald-800">
                <span className="font-bold">✓</span>
                <span>Incorporate traditional foods (dal, rotis, rice, sambar) smartly</span>
              </div>
              <div className="flex items-start gap-2.5 text-emerald-800">
                <span className="font-bold">✓</span>
                <span>Sustain visceral fat loss while preserving lean skeletal muscle</span>
              </div>
              <div className="flex items-start gap-2.5 text-emerald-800">
                <span className="font-bold">✓</span>
                <span>Long-term habits you can maintain effortlessly for life</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
