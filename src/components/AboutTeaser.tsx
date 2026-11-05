import Link from 'next/link';
import Image from 'next/image';

export default function AboutTeaser() {
  return (
    <section className="border-b border-brand-line bg-brand-paper py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="mx-auto w-full max-w-md">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[4px] bg-brand-line">
              <Image
                src="/images/clinic-consultation.jpg"
                alt="Dt. Thanya Natashekar reviewing clinical patient reports"
                fill
                sizes="(max-width: 1023px) 100vw, 42vw"
                className="object-cover"
              />
            </div>
            <blockquote className="mt-5 border-l-2 border-brand-citrus pl-4 font-serif text-lg italic leading-snug text-brand-ink">
              “Every meal either creates inflammation or accelerates cellular healing.”
            </blockquote>
            <div className="mt-3 flex flex-wrap items-center justify-between gap-2 text-xs text-brand-muted">
              <span>Dt. Thanya Natashekar · Clinical Dietitian</span>
              <span>Registered, IDA</span>
            </div>
          </div>

          <div>
            <p className="mb-4 text-sm font-semibold text-brand-leaf">The practitioner</p>
            <h2 className="max-w-xl font-serif text-3xl font-medium leading-tight text-brand-ink sm:text-4xl lg:text-5xl">
              Evidence-based healing,
              <span className="block italic text-brand-leaf">made for everyday life.</span>
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-brand-muted sm:text-lg">
              No generic apps or starvation teas. Over 12 years of hospital and clinical private practice, Dt. Thanya Natashekar bridges medical biochemistry with the food you already love.
            </p>

            <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-3 sm:gap-4">
              <div className="border-t border-brand-line pt-4">
                <p className="mb-2 font-serif text-2xl text-brand-leaf">01</p>
                <h3 className="text-sm font-semibold text-brand-ink">Biomarker driven</h3>
                <p className="mt-1.5 text-xs leading-5 text-brand-muted">Guidance shaped by your blood chemistry and health history.</p>
              </div>
              <div className="border-t border-brand-line pt-4">
                <p className="mb-2 font-serif text-2xl text-brand-leaf">02</p>
                <h3 className="text-sm font-semibold text-brand-ink">Kitchen first</h3>
                <p className="mt-1.5 text-xs leading-5 text-brand-muted">Traditional meals, made to work for your body and routine.</p>
              </div>
              <div className="border-t border-brand-line pt-4">
                <p className="mb-2 font-serif text-2xl text-brand-leaf">03</p>
                <h3 className="text-sm font-semibold text-brand-ink">Root-cause focus</h3>
                <p className="mt-1.5 text-xs leading-5 text-brand-muted">A long view of metabolic health, not a short-term fix.</p>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
              <Link
                href="/about"
                className="rounded-[4px] bg-brand-ink px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-forest"
              >
                Meet Thanya Natashekar <span className="ml-2" aria-hidden="true">↗</span>
              </Link>
              <Link href="/#book-appointment" className="text-sm font-semibold text-brand-forest underline decoration-brand-leaf/50 underline-offset-4">
                Book a consultation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
