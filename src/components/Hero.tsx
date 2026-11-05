import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="overflow-hidden border-b border-brand-line bg-brand-cloud">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-9 px-5 py-8 sm:px-8 sm:py-10 lg:grid-cols-2 lg:gap-16 lg:px-10 lg:py-12">
        <div className="order-2 max-w-2xl lg:order-1">
          <p className="mb-5 flex items-center gap-2.5 text-sm font-medium text-brand-forest">
            <span className="h-2 w-2 rounded-full bg-brand-leaf" aria-hidden="true" />
            Clinical nutrition in Bengaluru & worldwide
          </p>
          <h1 className="max-w-[13ch] font-serif text-[42px] font-medium leading-[1.08] text-brand-ink sm:text-[52px] lg:text-[64px]">
            Your health is personal.
            <span className="mt-1 block italic text-brand-leaf">Your nutrition should be, too.</span>
          </h1>
          <p className="mt-5 max-w-lg text-[15px] leading-7 text-brand-muted sm:text-base">
            Evidence-led nutrition shaped around your health, your culture, and the way you actually live. Care that makes room for real food and lasting change.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-4">
            <Link
              href="/#book-appointment"
              className="inline-flex min-h-12 items-center justify-center rounded-[4px] bg-brand-ink px-6 text-sm font-semibold text-white transition-colors hover:bg-brand-forest"
            >
              Book a consultation <span className="ml-3 text-lg leading-none" aria-hidden="true">↗</span>
            </Link>
            <Link href="/about" className="text-sm font-semibold text-brand-forest underline decoration-brand-leaf/50 underline-offset-4 transition-colors hover:text-brand-ink">
              Meet Thanya <span className="ml-1" aria-hidden="true">↗</span>
            </Link>
          </div>

          <div className="mt-9 grid max-w-lg grid-cols-3 border-t border-brand-line pt-5">
            <div>
              <p className="font-serif text-2xl text-brand-forest">12+</p>
              <p className="mt-1 text-[11px] leading-4 text-brand-muted sm:text-xs">years in practice</p>
            </div>
            <div className="border-l border-brand-line pl-4 sm:pl-6">
              <p className="font-serif text-2xl text-brand-forest">1,500+</p>
              <p className="mt-1 text-[11px] leading-4 text-brand-muted sm:text-xs">patients supported</p>
            </div>
            <div className="border-l border-brand-line pl-4 sm:pl-6">
              <p className="font-serif text-2xl text-brand-forest">18+</p>
              <p className="mt-1 text-[11px] leading-4 text-brand-muted sm:text-xs">countries reached</p>
            </div>
          </div>
          <p className="mt-5 text-xs text-brand-muted">
            Registered Clinical Dietitian <span className="mx-2 text-brand-peach">/</span> IDA Member
          </p>
        </div>

        <div className="relative order-1 mx-auto w-full max-w-[560px] lg:order-2 lg:max-w-none">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[4px] bg-brand-line lg:aspect-[4/5]">
            <Image
              src="/images/thanya-portrait.jpg"
              alt="Thanya Natashekar, clinical nutritionist"
              fill
              priority
              sizes="(max-width: 767px) 100vw, 50vw"
              className="object-cover object-[50%_34%]"
            />
          </div>
          <div className="mt-3 flex items-center justify-between gap-4 text-xs text-brand-muted">
            <span className="font-medium text-brand-ink">Dt. Thanya Natashekar</span>
            <span>Clinical Dietitian · IDA</span>
          </div>
        </div>
      </div>

      <div className="border-t border-brand-line bg-brand-paper">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-8 gap-y-3 px-5 py-5 text-[10px] font-semibold text-brand-muted sm:gap-x-12 sm:px-8 sm:text-[11px] lg:justify-between lg:px-10">
          <span className="w-full text-center text-brand-leaf lg:w-auto lg:text-left">As featured in</span>
          <span>THE HINDU</span>
          <span>DECCAN HERALD</span>
          <span>VOGUE WELLNESS</span>
          <span>FEMINA HEALTH</span>
          <span>MINT LOUNGE</span>
        </div>
      </div>
    </section>
  );
}
