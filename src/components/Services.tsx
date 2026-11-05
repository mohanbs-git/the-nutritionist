'use client';

import { getActivePrograms } from '@/lib/content';

export default function Services() {
  const programs = getActivePrograms();

  const scrollToBooking = (programTitle: string) => {
    const element = document.getElementById('book-appointment');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      const event = new CustomEvent('select-service', { detail: programTitle });
      window.dispatchEvent(event);
    }
  };

  return (
    <section id="services" className="scroll-mt-20 border-b border-brand-line bg-brand-cloud pt-10 pb-16 lg:pt-12 lg:pb-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="mb-10 max-w-2xl sm:mb-14">
          <p className="mb-4 text-sm font-semibold text-brand-leaf">Care, with a plan</p>
          <h2 className="font-serif text-3xl font-medium leading-tight text-brand-ink sm:text-4xl lg:text-5xl">
            Specialized Care Programs
          </h2>
          <p className="mt-3 text-sm leading-6 text-brand-muted sm:text-base">
            One-to-one consultations with Dt. Thanya Natashekar, detailed biomarker analysis, and a meal roadmap built around you.
          </p>
        </div>

        <div className="grid auto-rows-fr grid-cols-1 gap-x-6 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {programs.map((program) => {
            const focusTags = program.details.split('•').map((t) => t.trim()).filter(Boolean);

            return (
              <div
                key={program.id}
                className="group flex h-full flex-col justify-between overflow-hidden rounded-[4px] border border-brand-line bg-brand-paper transition-colors hover:border-brand-leaf/60"
              >
                <div>
                  <div className="relative aspect-[16/10] overflow-hidden bg-brand-line">
                    <img
                      src={program.image}
                      alt={program.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute left-3 top-3 bg-brand-citrus px-2.5 py-1 text-[10px] font-semibold text-brand-ink">
                      {program.code}
                    </div>
                    <div className="absolute inset-x-0 bottom-0 flex items-center bg-brand-ink/85 px-3 py-2 text-[10px] text-white">
                      <span>{program.format}</span>
                    </div>
                  </div>

                  <div className="p-5 sm:p-6">
                    <h3 className="font-serif text-xl font-medium leading-snug text-brand-ink transition-colors group-hover:text-brand-forest">
                      {program.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-brand-muted">
                      {program.subtitle}
                    </p>

                    <ul className="mt-4 space-y-2 border-t border-brand-line pt-4">
                      {focusTags.map((tag, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs leading-5 text-brand-muted">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-brand-leaf" aria-hidden="true" />
                          {tag}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="px-5 pb-5 sm:px-6 sm:pb-6">
                  <button
                    onClick={() => scrollToBooking(program.title)}
                    className="flex min-h-11 w-full items-center justify-between rounded-[4px] border border-brand-forest px-4 text-sm font-semibold text-brand-forest transition-colors hover:bg-brand-forest hover:text-white"
                  >
                    <span>Explore this program</span>
                    <span aria-hidden="true">↗</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-6 bg-brand-forest p-7 text-white sm:p-9 md:flex-row md:items-center">
          <div className="max-w-xl space-y-2">
            <span className="text-sm font-semibold text-brand-citrus">Worldwide consultations</span>
            <h3 className="font-serif text-2xl font-medium text-white sm:text-3xl">
              Care that travels with you
            </h3>
            <p className="text-sm leading-6 text-white/75">
              International patients receive time-zone adjusted telemedicine video consults and tailored dietary roadmaps using locally available ingredients.
            </p>
          </div>
          <button
            onClick={() => scrollToBooking('Virtual Video Consultation')}
            className="shrink-0 rounded-[4px] bg-brand-citrus px-5 py-3 text-sm font-semibold text-brand-ink transition-colors hover:bg-[#cddd60]"
          >
            Book a virtual consultation <span className="ml-2" aria-hidden="true">↗</span>
          </button>
        </div>

      </div>
    </section>
  );
}
