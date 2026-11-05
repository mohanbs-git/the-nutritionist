import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { getQualifications } from '@/lib/content';

export const metadata = {
  title: 'About Thanya Natashekar | Clinical Nutritionist',
  description:
    'Meet Thanya Natashekar, Registered Clinical Dietitian (M.Sc., CDE, RD), and learn about her evidence-led approach to sustainable metabolic health.',
};

export default function AboutPage() {
  const qualifications = getQualifications();

  return (
    <div className="min-h-screen bg-brand-paper">
      <Navbar />

      <section className="border-b border-brand-line bg-brand-cloud py-8 sm:py-10 lg:py-12">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="space-y-6">
              <p className="text-sm font-semibold text-brand-leaf">
                Practitioner profile <span className="mx-2 text-brand-peach">·</span> 12+ years of clinical practice
              </p>

              <div>
                <h1 className="font-serif text-4xl font-medium leading-tight text-brand-ink sm:text-5xl lg:text-6xl">
                  Thanya Natashekar
                </h1>
                <p className="mt-3 text-sm text-brand-muted sm:text-base">
                  M.Sc. Clinical Nutrition (Gold Medalist) · Certified Diabetes Educator · Member, IDA
                </p>
              </div>

              <blockquote className="border-l-2 border-brand-citrus pl-5 font-serif text-lg italic leading-relaxed text-brand-ink sm:text-xl">
                  “Food is biological information. It instructs your hormones, your gut microbiome, and your cellular repair mechanisms every single day.”
              </blockquote>

              <p className="max-w-2xl text-base leading-7 text-brand-muted">
                Hello, I’m <strong className="text-brand-ink">Thanya Natashekar</strong>. With over a decade of clinical practice across hospital wards and private consultations, I help patients improve metabolic health, regulate hormonal rhythms, and build lasting habits without crash diets.
              </p>

              <div className="grid grid-cols-1 gap-x-6 gap-y-4 pt-2 text-sm sm:grid-cols-2">
                <div className="border-t border-brand-line pt-3">
                  <span className="block text-xs text-brand-muted">Practice</span>
                  <span className="mt-1 block font-medium text-brand-ink">Indiranagar, Bengaluru</span>
                </div>
                <div className="border-t border-brand-line pt-3">
                  <span className="block text-xs text-brand-muted">Consultations</span>
                  <span className="mt-1 block font-medium text-brand-ink">In-clinic and virtual worldwide</span>
                </div>
                <div className="border-t border-brand-line pt-3 sm:col-span-2">
                  <span className="block text-xs text-brand-muted">Accreditation</span>
                  <span className="mt-1 block font-medium text-brand-ink">Indian Dietetic Association</span>
                </div>
              </div>

              <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center">
                <Link
                  href="/#book-appointment"
                  className="rounded-[4px] bg-brand-citrus px-5 py-3 text-center text-sm font-semibold text-brand-ink transition-colors hover:bg-[#cddd60]"
                >
                  Schedule a consultation
                </Link>
                <Link
                  href="/#services"
                  className="px-4 py-3 text-center text-sm font-semibold text-brand-forest underline decoration-brand-leaf/50 underline-offset-4"
                >
                  View clinical programs
                </Link>
              </div>
            </div>

            <div className="mx-auto w-full max-w-md lg:max-w-none">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[4px] bg-brand-line">
                    <Image
                      src="/images/thanya-portrait.jpg"
                      alt="Thanya Natashekar, clinical nutritionist"
                      fill
                      sizes="(max-width: 1023px) 100vw, 42vw"
                      className="h-full w-full object-cover object-top"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                    
                    <div className="absolute bottom-5 left-5 right-5 text-white">
                      <div className="text-xs font-medium text-brand-citrus">Registered Dietitian</div>
                      <div className="mt-1 font-serif text-2xl">Dt. Thanya Natashekar</div>
                      <div className="mt-1 text-xs text-white/75">Bengaluru Chapter · IDA Member</div>
                    </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="mx-auto max-w-5xl space-y-12 px-5 py-10 sm:px-8 sm:py-14 lg:px-10">

        <section className="border-b border-brand-line pb-14">
          <div className="grid grid-cols-1 gap-8">
            
            {/* Left Header & Callout (lg:col-span-5) */}
            <div className="max-w-3xl space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/50 text-[#1B4332] text-[11px] font-semibold tracking-wider uppercase">
                The Journey & Calling
              </div>
              
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-950 leading-tight">
                Why I Founded a Science-Based Practice
              </h2>

              <p className="text-sm text-gray-600 leading-relaxed">
                Bridging clinical hospital biochemistry with everyday kitchen food to replace restrictive diets with lifelong vitality.
              </p>

              {/* Highlight Quote Box */}
              <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200 space-y-3">
                <div className="font-serif italic text-base text-gray-900 leading-relaxed">
                  “You should never have to choose between your health and your family’s traditional meals. Healing occurs when nutrition honors your biological individuality.”
                </div>
                <div className="text-xs font-semibold text-[#B48A3C] uppercase tracking-wider">
                  — Dt. Thanya, RD
                </div>
              </div>
            </div>

            {/* Right Story & Principles (lg:col-span-7) */}
            <div className="w-full max-w-[68ch] space-y-6 text-base leading-7 text-brand-muted">
              <p className="about-copy">
                During my early clinical rotations at tertiary care hospitals in Bengaluru, I observed a consistent pattern: patients battling Type 2 Diabetes, hypertension, fatty liver disease, and severe PCOS were prescribed lifelong medications, yet rarely received precise, personalized dietary guidance. At most, they were handed a photocopied list of generic restrictions that told them to “stop eating carbs.”
              </p>

              <p className="about-copy">
                When patients inevitably found these extreme restrictions impossible to maintain, they felt personal guilt. The diet industry capitalized on this guilt by promoting commercial meal replacements, detox juices, and extreme starvation protocols that damaged resting metabolic rates (BMR) and triggered rebound weight gain.
              </p>

              <p className="about-copy">
                I established my independent clinical practice with a clear goal: <strong className="text-gray-950">to bridge medical biochemistry with everyday home kitchens.</strong> You should not have to choose between your health and your family’s traditional meals. Healing occurs when nutrition is tailored to your unique hormonal profile, blood biomarkers, and cultural tastes.
              </p>

              {/* Core Clinical Values Box */}
              <div className="mt-8 space-y-4 border-t border-brand-line pt-6">
                <h3 className="font-serif text-xl font-medium text-brand-ink">
                  Three Core Clinical Principles
                </h3>
                <div className="space-y-3.5 text-xs sm:text-sm text-gray-600">
                  <div className="flex items-start gap-2.5">
                    <span className="text-[#1B4332] font-bold mt-0.5">•</span>
                    <div>
                      <strong className="text-gray-900">Pathology-First Evaluation:</strong> Every recommendation is anchored in diagnostic lab tests (fasting insulin, HbA1c, thyroid panel, vitamin D3/B12, lipid markers).
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="text-[#1B4332] font-bold mt-0.5">•</span>
                    <div>
                      <strong className="text-gray-900">Preserving Cultural Food Heritage:</strong> Whether you eat South Indian rice and sambar, North Indian rotis and dal, or international cuisine, meals are formulated around what you genuinely enjoy eating.
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="text-[#1B4332] font-bold mt-0.5">•</span>
                    <div>
                      <strong className="text-gray-900">Metabolic Sustainability:</strong> No crash caloric cuts. We provide adequate nourishment to maintain thyroid health, mental focus, and muscle mass.
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* Section 2: Qualifications & Academic Background (Dynamic from siteContent.json) */}
        <section className="border-b border-brand-line pb-14">
          <div className="max-w-3xl mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/50 text-[#1B4332] text-[11px] font-semibold tracking-wider uppercase mb-2">
              Credentials
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-950 leading-tight">
              Academic & Clinical Qualifications
            </h2>
            <p className="text-sm text-gray-600 mt-2">
              Certified by premier medical and nutrition boards.
            </p>
          </div>

          <div className="grid auto-rows-fr grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {qualifications.map((q, idx) => (
              <div key={idx} className="flex h-full flex-col justify-between rounded-[4px] border border-brand-line bg-brand-cloud p-6">
                <div>
                  <div className="text-xs uppercase tracking-wider font-bold text-[#B48A3C] mb-1">
                    {q.category}
                  </div>
                  <h3 className="font-serif text-lg font-bold text-gray-950">
                    {q.title}
                  </h3>
                  <p className="text-xs text-gray-500 mt-0.5">{q.institution}</p>
                  <p className="text-xs text-gray-600 mt-3 leading-relaxed">
                    {q.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3: The 4-Step Patient Journey */}
        <section>
          <div className="max-w-3xl mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/50 text-[#1B4332] text-[11px] font-semibold tracking-wider uppercase mb-2">
              Patient Methodology
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-950 leading-tight">
              Your 4-Step Consultation Journey
            </h2>
            <p className="text-sm text-gray-600 mt-2">
              Structured clinical progression whether consulting virtually or in person.
            </p>
          </div>

          <div className="grid auto-rows-fr grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="h-full rounded-[4px] border border-brand-line bg-brand-paper p-6">
              <div className="font-serif text-3xl font-bold text-[#B48A3C] mb-3">01</div>
              <h3 className="font-serif text-base font-bold text-gray-950 mb-2">
                Biomarker Intake
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                45-minute discovery analyzing your blood tests, symptoms, metabolic rate, daily sleep cycle, and dietary preferences.
              </p>
            </div>

            <div className="h-full rounded-[4px] border border-brand-line bg-brand-paper p-6">
              <div className="font-serif text-3xl font-bold text-[#B48A3C] mb-3">02</div>
              <h3 className="font-serif text-base font-bold text-gray-950 mb-2">
                Custom Blueprint
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Delivery of your bespoke meal plan with portion formulas, home recipes, dining-out guidelines, and grocery recommendations.
              </p>
            </div>

            <div className="h-full rounded-[4px] border border-brand-line bg-brand-paper p-6">
              <div className="font-serif text-3xl font-bold text-[#B48A3C] mb-3">03</div>
              <h3 className="font-serif text-base font-bold text-gray-950 mb-2">
                Weekly Reviews
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Regular 1-on-1 check-ins with Dt. Thanya. We adjust food combinations based on energy levels, cycle phase, and travel plans.
              </p>
            </div>

            <div className="h-full rounded-[4px] border border-brand-line bg-brand-paper p-6">
              <div className="font-serif text-3xl font-bold text-[#B48A3C] mb-3">04</div>
              <h3 className="font-serif text-base font-bold text-gray-950 mb-2">
                Metabolic Freedom
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Graduating with intuitive metabolic understanding. No reliance on rigid diet charts—just lasting habits for decades.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: Booking Banner */}
        <section className="bg-[#0D281E] rounded-2xl p-8 sm:p-14 text-center text-white relative overflow-hidden shadow-xl border border-emerald-950">
          <div className="max-w-2xl mx-auto space-y-5">
            <div className="text-[11px] uppercase tracking-widest text-[#D4A373] font-semibold">
              Begin Your Journey
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
              Schedule a 1-on-1 Consultation
            </h2>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
              Appointments are held in strict confidence. Available in person at our Indiranagar clinic or via private video consultations worldwide.
            </p>
            <div className="pt-2">
              <Link
                href="/#book-appointment"
                className="inline-block rounded-[4px] bg-[#B48A3C] px-8 py-3.5 text-xs font-semibold uppercase text-white transition-colors hover:bg-[#966F2A]"
              >
                Schedule Appointment Now
              </Link>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
